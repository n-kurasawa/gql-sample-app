import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";

import { BlogListQuery } from "./__generated__/BlogListQuery.graphql";
import { BlogListItem } from "./BlogListItem";

export const BlogList: React.VFC = () => {
  const { blogs } = useLazyLoadQuery<BlogListQuery>(
    graphql`
      query BlogListQuery($first: Int!) {
        blogs(first: $first) {
          edges {
            node {
              id
              ...BlogListItem
            }
          }
        }
      }
    `,
    { first: 10 }
  );
  return (
    <ul>
      {blogs.edges?.map((edge) => (
        <li key={edge?.node?.id}>
          {edge?.node && <BlogListItem blog={edge.node} />}
        </li>
      ))}
    </ul>
  );
};
