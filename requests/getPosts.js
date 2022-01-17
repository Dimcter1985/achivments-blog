import { request, gql } from "graphql-request";
import { graphqlAPI } from "../consts";

export const getPosts = async () => {
  const query = gql`
    query getPosts {
      postsConnection(orderBy: createdAt_DESC) {
        edges {
          node {
            author {
              id
              name
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            image {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};
