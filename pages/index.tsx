/* eslint-disable @next/next/no-img-element */
import type { InferGetServerSidePropsType } from "next";
import { GetServerSideProps } from "next";
import axios from "axios";
import { useState, useEffect } from "react";
import dayjs from "dayjs";

import HtmlHead from "../components/HtmlHead";
import Nav from "../components/Nav";
import PageSpan from "../components/PageSpan";
import Footer from "../components/Footer";
import type { UserInfo } from "../types";

type CardItem = {
  _id: string;
  capImg: string;
  intro: string;
  story: {
    _id: string;
    title: string;
    author: {
      author: string;
      avator: string;
      nickname: string;
    };
    created_at: string;
  };
};

type IndexProps = {
  userInfo: UserInfo | null;
  stories: CardItem[];
};

export const getServerSideProps: GetServerSideProps<IndexProps> = async (
  context
) => {
  const { req, res, query, params } = context;
  let userInfo = null;
  let stories = [];
  // console.log("index", `${process.env.API_SERVER}/api/offical/index`);
  // TODO 聚合接口
  try {
    const apiRes = await axios.get(
      `${process.env.API_SERVER}/api/offical/index`,
      {
        headers: {
          cookie: req.headers.cookie || "",
          ...(req.headers as any),
          // ...req.cookies,
        },
      }
    );
    userInfo = apiRes.data.userInfo || null;
  } catch (error) {
    console.error(error);
  }
  try {
    const storyRes = await axios.get(
      `${process.env.API_SERVER}/api/offical/mainsite/story`,
      {
        headers: {
          cookie: req.headers.cookie || "",
          ...(req.headers as any),
          // ...req.cookies,
        },
      }
    );
    stories = storyRes.data;
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      userInfo,
      stories,
    },
  };
};

function Index({
  userInfo,
  stories,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [user, setUser] = useState(userInfo);

  useEffect(() => {
    const loadMore = document.getElementById("loadmore");
    if (!loadMore) return;
    // https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API
    const options = {
      threshold: 1,
    };

    const observer = new IntersectionObserver((targets, obs) => {
      targets.forEach((entry) => {
        if (entry.isIntersecting) console.log("----");
        else console.log("=====");
      });
    }, options);
    observer.observe(loadMore);
  }, []);

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
      <PageSpan label={"被想起的总是，你的故事"} />

      <div className="container">
        <div className="row justify-content-around mt-4 pb-5">
          <div className="col-8 col-md-8 col-sm-12">
            <section className="mt-4">
              {stories.map((item) => {
                if (item.story)
                  return <ArticleCard key={item._id} item={item} />;
                return null;
              })}
              <div id="loadmore" className="text-center py-5">
                loadMore (TODO)
              </div>
            </section>
          </div>
          <div className="col-4">
            <section
              className="mt-5"
              style={{
                position: "sticky",
                top: "92px",
              }}
            >
              {intros.map((item, index) => {
                return <IntroCard key={index} {...item} />;
              })}
            </section>
          </div>
        </div>
      </div>

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
    <div className="col-md mt-4">
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{intro}</p>
        </div>
      </div>
    </div>
  );
}

function ArticleCard({ item }: { item: CardItem }) {
  function goToStory() {
    window.open(
      `//${item.story.author.author}.${process.env.NEXT_PUBLIC_MAIN_SITE_DOMAIN}/story/${item.story._id}`,
      "_blank"
    );
  }
  return (
    <div
      className="card mt-5 me-5 border-0"
      style={{ cursor: "pointer" }}
      onClick={goToStory}
    >
      <div className="row g-0">
        <div className="col-md-7">
          <div className="card-body ps-0 py-0">
            <div
              className="mb-2 d-flex align-items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                style={{ width: "40px", borderRadius: "50%" }}
                src={`//${item.story.author.author}.${process.env.NEXT_PUBLIC_MAIN_SITE_DOMAIN}${item.story.author.avator}`}
                alt=""
              />
              <a
                href={`//${item.story.author.author}.${process.env.NEXT_PUBLIC_MAIN_SITE_DOMAIN}`}
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none"
              >
                <span className="ms-2">{item.story.author.nickname}</span>
              </a>
            </div>

            <h3 className="card-title mb-3">{item.story.title}</h3>
            <p className="card-text">{item.intro}</p>
            <p className="card-text d-flex justify-content-between">
              <small className="text-muted">
                {dayjs(item.story.created_at).format("YYYY-MM-DD HH:mm:ss")}
              </small>
              <span>
                <i className="bi bi-three-dots"></i>
              </span>
            </p>
          </div>
        </div>
        <div
          className="col-md-5 "
          style={{
            backgroundImage: `url(${item.capImg})`,
            backgroundSize: `cover`,
            backgroundPosition: `center`,
          }}
        ></div>
      </div>
    </div>
  );
}
