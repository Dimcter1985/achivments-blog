import { request, gql } from "graphql-request";
import { graphqlAPI } from '../consts'

export const getCategoryDetails = async (slug) => {
  const query = gql`
    query getCategoryDetails($slug : String!) {
      category(where: {slug: $slug}) {
        name
        slug
        posts {
          createdAt
          title
          excerpt
          image {
            url
          }
          author{
            name
            bio
            photo {
              url
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.category;
};