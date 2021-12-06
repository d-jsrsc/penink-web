import type { InferGetServerSidePropsType } from "next";
import { GetServerSideProps } from "next";
import axios from "axios";
import { useState } from "react";

import packageInfo from "../package.json";
import HtmlHead from "../components/HtmlHead";
import Nav from "../components/Nav";
import type { UserInfo } from "../types";

type IndexProps = {
  userInfo: UserInfo | null;
};

export const getServerSideProps: GetServerSideProps<IndexProps> = async (
  context
) => {
  const { req, res, query, params } = context;
  let userInfo = null;
  try {
    const apiRes = await axios.get("http://127.0.0.1:7777/api/offical/index", {
      headers: {
        cookie: req.headers.cookie,
        ...(req.headers as any),
        // ...req.cookies,
      },
    });
    // console.info(apiRes.data);
    userInfo = apiRes.data.userInfo;
  } catch (error) {}

  return {
    props: {
      userInfo,
    },
  };
};

function Index({
  userInfo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [user, setUser] = useState(userInfo);

  return (
    <>
      <HtmlHead />
      <>
        <Nav userInfo={user} setUser={setUser} />
        <div>
          <span>version {packageInfo.version}</span>
        </div>
        <div>{user?.nickname}</div>
      </>
    </>
  );
}

export default Index;
