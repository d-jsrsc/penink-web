import type { NextPage, InferGetServerSidePropsType } from "next";
import { GetServerSideProps } from "next";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";

import packageInfo from "../package.json";
import Header from "../components/Header";

type IndexProps = {
  userInfo: {
    nickname: string;
  } | null;
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
    console.info(apiRes.data);
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
  return (
    <>
      <Header />
      <>
        {/* <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
          <div className="container">
            <a href="#" className="navbar-brand">
              Frontend Bootcamp
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navmenu"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navmenu">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a href="#learn" className="nav-link">
                    What You will Learn
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#questions" className="nav-link">
                    Questions
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#instructors" className="nav-link">
                    Instructors
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}
        <div>
          <span>version {packageInfo.version}</span>
        </div>
        <div>{userInfo?.nickname}</div>
      </>
    </>
  );
}

export default Index;
