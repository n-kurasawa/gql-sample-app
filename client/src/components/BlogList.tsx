import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";

import { BlogListQuery } from "./__generated__/BlogListQuery.graphql";

export const BlogList: React.VFC = () => {
  const { blogs } = useLazyLoadQuery<BlogListQuery>(
    graphql`
      query BlogListQuery($first: Int!) {
        blogs(first: $first) {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    `,
    { first: 10 }
  );
  console.log(blogs);
  return (
    <ul>
      {blogs.edges?.map((edge) => (
        <li key={edge?.node?.id}>{edge?.node?.name}</li>
      ))}
    </ul>
  );
};
