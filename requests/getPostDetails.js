import { request, gql } from "graphql-request";
import { graphqlAPI } from "../consts";

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        title
        excerpt
        image {
          url
        }
        author {
          name
          bio
          photo {
            url
          }
        }
        createdAt
        slug
        text
        categories {
          name
          slug
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};
