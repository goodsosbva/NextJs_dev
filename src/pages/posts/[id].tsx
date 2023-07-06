import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

type PostProps = {
  id: string;
};

const Post: NextPage<PostProps> = (props) => {
  const { id } = props;
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>Static Site Generation</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <main>
        <p>이 페이지는 정적 사이트 생성 페이지 입니다.</p>
        <p>{`/posts/${id}에 대응되는 페이지입니다.`}</p>
      </main>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    {
      params: {
        id: "1",
      },
    },
    {
      params: {
        id: "2",
      },
    },
    {
      params: {
        id: "3",
      },
    },
  ];

  return { paths, fallback: false };
};

interface PostParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps<PostProps, PostParams> = async (
  context
) => {
  return {
    props: {
      id: context.params!["id"],
    },
  };
};

export default Post;
