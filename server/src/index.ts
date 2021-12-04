import { ApolloServer, gql } from "apollo-server";
import DataLoader from "dataloader";
import { connectionFromArray, fromGlobalId, toGlobalId } from "graphql-relay";
import { findBlog, getBlogs, BlogData, findBlogs } from "./data/blog";
import { findPost, findPostByBlogId } from "./data/post";
import { Resolvers } from "./generated/graphql";

const typeDefs = gql`
  interface Node {
    id: ID!
  }

  type PageInfo {
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    startCursor: String
    endCursor: String
  }

  type Blog implements Node {
    id: ID!
    name: String!
    posts(first: Int!, after: String): PostConnection!
  }

  type BlogConnection {
    edges: [BlogEdge]
    pageInfo: PageInfo!
  }
  type BlogEdge {
    node: Blog
    cursor: String!
  }

  type Post implements Node {
    id: ID!
    title: String!
    body: String!
    blog: Blog!
  }

  type PostConnection {
    edges: [PostEdge]
    pageInfo: PageInfo!
  }
  type PostEdge {
    node: Post
    cursor: String!
  }

  type Query {
    node(id: ID!): Node
    blogs(first: Int!, after: String): BlogConnection!
  }
`;

const context = {
  blogLoader: new DataLoader<string, BlogData>(async (ids) => {
    const blogs = await findBlogs(ids);
    return ids.map((id) => blogs[id] ?? new Error(`No result for ${id}`));
  }),
};

const resolvers: Resolvers = {
  Query: {
    node: async (parent, args) => {
      const { type, id } = fromGlobalId(args.id);
      switch (type) {
        case "Blog":
          const blog = await findBlog(id);
          if (!blog) {
            return null;
          }
          return {
            ...blog,
            id: toGlobalId("Blog", blog.id),
          };
        case "Post":
          const post = await findPost(id);
          if (!post) {
            return null;
          }
          return {
            ...post,
            id: toGlobalId("Post", post.id),
          };
        default:
          throw new Error(`Unknown type: ${type}`);
      }
    },
    blogs: async (parent, args) => {
      return connectionFromArray(
        (await getBlogs()).map((blog) => ({
          ...blog,
          id: toGlobalId("Blog", blog.id),
        })),
        args
      );
    },
  },
  Blog: {
    posts: async (parent, args) => {
      const { id } = fromGlobalId(parent.id);
      return connectionFromArray(
        (await findPostByBlogId(id)).map((post) => ({
          ...post,
          id: toGlobalId("Post", id),
        })),
        args
      );
    },
  },
  Post: {
    blog: async (parent, args, context) => {
      const blog = await context.blogLoader.load(parent.blogId);
      return {
        ...blog,
        id: toGlobalId("Blog", blog.id),
      };
    },
  },
  Node: {
    __resolveType: (parent) => {
      const { type } = fromGlobalId(parent.id);
      switch (type) {
        case "Blog":
        case "Post":
          return type;
        default:
          throw new Error(`Unknown type: ${type}`);
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
