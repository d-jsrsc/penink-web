/* eslint-disable @next/next/no-img-element */
import type { InferGetServerSidePropsType } from "next";
import { GetServerSideProps } from "next";
import axios from "axios";
import { useState } from "react";

import HtmlHead from "../components/HtmlHead";
import Nav from "../components/Nav";
import PageSpan from "../components/PageSpan";
import Footer from "../components/Footer";
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
    const apiRes = await axios.get(
      `${process.env.API_SERVER}/api/offical/index`,
      {
        headers: {
          cookie: req.headers.cookie,
          ...(req.headers as any),
          // ...req.cookies,
        },
      }
    );
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

  const intros = [
    {
      title: "网页编辑器",
      intro: "通过拖拽组件，快速完成网页的的制作。",
      img: "/intro/webeditor.jpg",
    },
    {
      title: "富文本编辑器",
      intro: "原生支持 markdown 的富文本，迁移不再有成本。",
      img: "/intro/rhmarkdown.jpg",
    },
  ];

  return (
    <>
      <HtmlHead />

      <Nav userInfo={user} setUser={setUser} />
      <PageSpan label={"Become a Web Writer"} />

      <section className="p-5">
        <div className="container">
          <div className="row g-4">
            {intros.map((item, index) => {
              return <IntroCard key={index} {...item} />;
            })}
          </div>
        </div>
      </section>

      <section id="articles" className="p-5">
        <div className="container">
          {/* <h2 className="text-center text-white">Our Instructors</h2>
          <p className="lead text-center text-white mb-5">
            Our instructors all have 5+ years working as a web developer in the
            industry
          </p> */}
          <div className="row g-4">
            <ArticleCard />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Index;

function IntroCard({
  title,
  intro,
  img,
}: {
  title: string;
  intro: string;
  img?: string;
}) {
  return (
    <div className="col-md">
      <div className="card">
        <img src={img} height="300" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{intro}</p>
        </div>
      </div>
    </div>
  );
}

function ArticleCard() {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card bg-light">
        <img src="/article/learnrust.jpg" className="card-img-top" alt="" />
        <div className="card-body">
          <h3 className="card-title mb-3">Rust 学习</h3>
          <p className="card-text">
            A language empowering everyone to build reliable and efficient
            software
          </p>
        </div>
      </div>
    </div>
  );
}
