import React from "react";
import { getPosts, getPostDetails } from "../../requests";
import {
  Container,
  PostDetail,
  Sidebar,
  Author,
  Comments,
  CommentsForm,
  Grid,
  MainContent,
} from "../../components";

const Post = ({ post }) => {
  return (
    <Container>
      <Grid>
        <MainContent>
          <PostDetail post={post} />
          <Author author={post.author} />
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} />
        </MainContent>
        <Sidebar
          slug={post.slug}
          categories={post.categories.map((category) => category.slug)}
        />
      </Grid>
    </Container>
  );
};

export default Post;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);

  return {
    props: { post: data },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
