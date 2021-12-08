/* eslint-disable @next/next/no-img-element */
import React from "react";

export type EventData = {
  time: string;
  title: string;
  content: string;
  img?: string;
  imgClick?: string;
};

const Item = (props: {
  time: string;
  title: string;
  content: string;
  img?: string;
  imgClick?: string;
}) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="float-right small">{props.time}</div>
        <h4 className="card-title fs-4">{props.title}</h4>
        <p
          className="card-text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
      {props.imgClick ? (
        <a href={props.imgClick} target="_blank" rel="noreferrer">
          <img src={props.img} alt="biliproj" className="card-img-bottom" />
        </a>
      ) : props.img ? (
        <img src={props.img} alt="initproj" className="card-img-bottom" />
      ) : null}
    </div>
  );
};

const EventItem: React.FC<
  EventData & { isStart?: boolean; isEnd?: boolean; left?: boolean }
> = ({
  children,
  left,
  time,
  title,
  content,
  img,
  imgClick,
  isEnd,
  isStart,
}) => {
  return (
    <>
      <style jsx>{`
        .badge {
          display: inline-block;
          padding: 0.25em 0.4em;
          font-size: 75%;
          font-weight: 700;
          line-height: 1;
          text-align: center;
          white-space: nowrap;
          vertical-align: baseline;
          border-radius: 0.25rem;
          transition: color 0.15s ease-in-out,
            background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
            box-shadow 0.15s ease-in-out;
        }
        .border {
          border: 1px solid #dee2e6 !important;
        }
        .border-right {
          border-right: 1px solid #dee2e6 !important;
        }

        .badge-pill {
          padding-right: 0.6em;
          padding-left: 0.6em;
          border-radius: 10rem;
        }
      `}</style>
      <div className="row no-gutters">
        <div className="col-sm py-2">
          {left ? <Item {...{ time, title, content, img, imgClick }} /> : null}
        </div>
        <div className="col-sm-1 text-center flex-column d-none d-sm-flex">
          <div className="row h-50">
            {isStart ? (
              <div className="col">&nbsp;</div>
            ) : (
              <div className="col border-right">&nbsp;</div>
            )}
            <div className="col">&nbsp;</div>
          </div>
          <h5 className="m-2">
            <span className="badge badge-pill bg-light border">&nbsp;</span>
          </h5>
          <div className="row h-50">
            {isEnd ? (
              <div className="col">&nbsp;</div>
            ) : (
              <div className="col border-right">&nbsp;</div>
            )}
            <div className="col">&nbsp;</div>
          </div>
        </div>
        <div className="col-sm">
          {!left ? <Item {...{ time, title, content, img, imgClick }} /> : null}
        </div>
      </div>
    </>
  );
};
export default EventItem;
