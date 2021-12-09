import type { NextPage, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { GetServerSideProps } from "next";
import axios, { AxiosError } from "axios";

import Header from "../../components/HtmlHead";
import Nav from "../../components/Nav";
import LoginForm from "../../components/LoginForm";

type LoginProps = {
  // userInfo: UserInfo | null;
};

export const getServerSideProps: GetServerSideProps<LoginProps> = async (
  context
) => {
  const { req, res, query, params } = context;
  let stillInLogin = false;
  try {
    const apiRes = await axios.get(`${process.env.API_SERVER}/api/user/check`, {
      headers: {
        ...(req.headers as any),
        // ...req.cookies,
      },
    });
    stillInLogin = apiRes.data?.check === true;
  } catch (error: any) {
    console.error(error.message);
  } finally {
  }
  if (stillInLogin) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {}, // will be passed to the page component as props
  };
};

function Login({}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Header title="Login" />
      <Nav />
      <LoginForm></LoginForm>
    </>
  );
}

export default Login;
