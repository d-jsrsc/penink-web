import type { InferGetServerSidePropsType } from "next";
import { GetServerSideProps } from "next";
import { useState } from "react";
import axios from "axios";

import HtmlHead from "../components/HtmlHead";
import Nav from "../components/Nav";

import type { UserInfo } from "../types";

type EventsProps = {
  userInfo: UserInfo | null;
};

export const getServerSideProps: GetServerSideProps<EventsProps> = async (
  context
) => {
  const { req, res, query, params } = context;
  let userInfo = null;
  try {
    const apiRes = await axios.get("http://127.0.0.1:7777/api/offical/index", {
      headers: {
        cookie: req.headers.cookie,
        ...(req.headers as any),
      },
    });
    userInfo = apiRes.data.userInfo;
  } catch (error) {}

  return {
    props: {
      userInfo,
    },
  };
};

function Events({
  userInfo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [user, setUser] = useState(userInfo);
  return (
    <>
      <HtmlHead title={"Events"} />
      <Nav userInfo={user} setUser={setUser}></Nav>
      <main>Events</main>
    </>
  );
}

export default Events;
