import { InferGetStaticPropsType } from "next";
import { GetStaticProps } from "next";
import axios from "axios";

import Header from "../../components/HtmlHead";
import Nav from "../../components/Nav";
import PageSpan from "../../components/PageSpan";

type Post = {
  author: string;
  title: string;
};

export const getStaticProps: GetStaticProps = async () => {
  //     const res = await fetch('http://localhost:3000/api/posts')
  // const posts: Post[] = await res.json()

  return {
    props: {
      posts: [],
    },
  };
};

function BlogIndex({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Header title={"Blog"} />
      <Nav />
      <PageSpan label={"Blogs"} />
      <ul>
        {posts.map((post: Post, index: number) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}
export default BlogIndex;
