import type { NextPage, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { GetServerSideProps } from "next";
import axios from "axios";

import Header from "../components/HtmlHead";
import Nav from "../components/Nav";
import PageSpan from "../components/PageSpan";

type Data = any;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await axios.get(`${process.env.SELF_SERVER}/api/about`);
  const data: Data = await res.data;
  return {
    props: {
      data,
    },
  };
};

function About({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Header title={"About"} />
      <Nav />
      <PageSpan label={"About"} />
    </>
  );
}

export default About;
