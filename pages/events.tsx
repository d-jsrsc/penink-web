/* eslint-disable @next/next/no-img-element */
import type { InferGetServerSidePropsType } from "next";
import { GetServerSideProps } from "next";
import { useState } from "react";
import axios from "axios";

import HtmlHead from "../components/HtmlHead";
import Nav from "../components/Nav";
import PageSpan from "../components/PageSpan";
import EventItem from "../components/EventItem";
import Footer from "../components/Footer";

import type { UserInfo, EventData } from "../types";

import datas from "../_data/events";

type EventsProps = {
  userInfo: UserInfo | null;
};

export const getServerSideProps: GetServerSideProps<EventsProps> = async (
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

function Events({
  userInfo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [user, setUser] = useState(userInfo);
  return (
    <>
      <HtmlHead title={"Events"} />
      <Nav userInfo={user} setUser={setUser}></Nav>
      <main>
        <PageSpan label={"Events"} />

        <div className="container py-2 mt-4 mb-4">
          {datas.map((item: EventData, index) => {
            const isLeft = index % 2 !== 0;
            const isStart = index === 0;
            const isEnd = index === datas.length - 1;
            return (
              <EventItem
                key={item.time}
                {...item}
                left={isLeft}
                isStart={isStart}
                isEnd={isEnd}
              />
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Events;
