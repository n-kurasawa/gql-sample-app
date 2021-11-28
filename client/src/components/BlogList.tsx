import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";

export const BlogList: React.VFC = () => {
  useLazyLoadQuery(
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
  return null;
};
