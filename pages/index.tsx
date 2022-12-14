import { InferGetStaticPropsType } from "next";

import { allPosts } from "contentlayer/generated";
import Container from "../components/Container";
import RecentPosts from "../components/RecentPosts";

export const getStaticProps = async () => {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );
  return {
    props: {
      posts,
    },
  };
};

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <div className={`my-5 w-full`}>
        <RecentPosts posts={posts} />
      </div>
    </Container>
  );
}
