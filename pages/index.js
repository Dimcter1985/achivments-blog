import { PostCard, Container, Sidebar, Grid, MainContent } from "../components";
import { getPosts } from "../requests";

export default function Home({ posts }) {
  return (
    <Container>
      <Grid>
        <MainContent>
          {posts.map((post) => (
            <PostCard post={post.node} key={post.node.title} />
          ))}
        </MainContent>
        <Sidebar />
      </Grid>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
