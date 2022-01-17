import React from "react";
import {
  Container,
  Grid,
  MainContent,
  Sidebar,
  PostCard,
} from "../../components";
import { getCategories, getCategoryDetails } from "../../requests";

const Category = ({ category }) => {
  return (
    <Container>
      <Grid>
        <MainContent>
          {category.posts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </MainContent>
        <Sidebar />
      </Grid>
    </Container>
  );
};

export default Category;

export async function getStaticProps({ params }) {
  const data = await getCategoryDetails(params.slug);

  return {
    props: { category: data },
  };
}

export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
