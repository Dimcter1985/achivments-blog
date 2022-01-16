import { request, gql } from "graphql-request";
import { graphqlAPI } from '../consts'

export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query getSimilarPosts($slug: String!, $categories: [String!]) {
      posts(
        where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
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
  const result = await request(graphqlAPI, query, { slug, categories });

  return result.posts;
};