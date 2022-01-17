import { request, gql } from "graphql-request";
import { graphqlAPI } from "../consts";

export const getRecentPosts = async () => {
  const query = gql`
    query getRecentPosts() {
      posts(
        orderBy: createdAt_DESC
        last: 3
      ) {
        title
        image {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.posts;
};
