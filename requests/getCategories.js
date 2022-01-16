import { request, gql } from "graphql-request";
import { graphqlAPI } from '../consts'

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
        categories {
          name
          slug
        }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.categories;
};