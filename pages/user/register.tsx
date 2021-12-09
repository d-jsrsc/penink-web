import type { NextPage, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { GetServerSideProps } from "next";
import axios from "axios";

import Header from "../../components/HtmlHead";
import Nav from "../../components/Nav";
import RegisterForm from "../../components/RegisterForm";

export const getServerSideProps: GetServerSideProps = async (context) => {
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
    console.log(error.message);
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

function Login({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Header title="register" />
      <Nav />
      <RegisterForm />
    </>
  );
}

export default Login;
