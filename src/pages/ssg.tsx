import React from "react";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

type SSGProps = {
  message: string;
};

const SSG: NextPage<SSGProps> = (props) => {
  const { message } = props;

  return (
    <div>
      <div>
        <Head>
          <title>Static Site Generation</title>
          <link rel="icon" href="/favicon.ico"></link>
        </Head>
        <main>
          <p>이 페이지는 정적 사이트 생성 페이지 입니다.</p>
          <p>{message}</p>
        </main>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
  const timestamp = new Date().toLocaleDateString();
  const message = `${timestamp}에 getStaticProps가 실행됐씁니다.`;

  console.log(message);

  return {
    props: {
      message,
    },
  };
};

export default SSG;
