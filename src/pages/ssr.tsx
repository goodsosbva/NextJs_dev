import React from "react";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

type SSRProps = {
  message: string;
};

const SSR: NextPage<SSRProps> = (props) => {
  const { message } = props;

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <main>
        <p>
          이 페이지는 서버 사이드 랜더링을 통해 접근 시에 서버에서 그려진
          페이지입니다.
        </p>
        <p>{message}</p>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<SSRProps> = async (
  context
) => {
  const timestamp = new Date().toLocaleString();
  const message = `${timestamp}에 이 페이지의 getServerProps가 실행됐습니다.`;
  console.log(message);

  return {
    props: {
      message,
    },
  };
};

export default SSR;
