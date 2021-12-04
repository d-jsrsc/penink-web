import type { NextPage } from "next";
import Head from "next/head";
import { GetServerSideProps } from "next";
import "bootstrap/dist/css/bootstrap.min.css";

import packageInfo from "../package.json";

export const getServerSideProps: GetServerSideProps = async (context) => {
  // const res = await fetch(`https://...`)
  // const data = await res.json()
  const { req, res, query, params } = context;
  // console.info({ query, params });

  // req: IncomingMessage & {
  //   cookies: NextApiRequestCookies
  // }
  // res: ServerResponse
  // params?: Q
  // query: ParsedUrlQuery
  // const

  return {
    props: {}, // will be passed to the page component as props
  };
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
        />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css"
          rel="stylesheet"
        />
        <title>Frontend Bootcamp</title>
        <meta name="description" content="the mark" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
      </>
    </>
  );
};

export default Home;
