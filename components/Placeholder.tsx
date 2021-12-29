import React from "react";

import "placeholder-loading/dist/css/placeholder-loading.min.css";

export function PlaceholderLoading() {
  return (
    <>
      <style jsx>{`
        .ph-item-reset {
          border: none;
          padding: 0;
          margin: 0;
          margin-top: 5px;
        }
        .ph-item-reset > * {
          padding: 0;
        }
        @media (max-width: 767px) {
          .ph-picture-reset {
            display: none;
          }
        }
      `}</style>

      <div className="ph-item ph-item-reset row g-0">
        <div className="col-md-7 ">
          <div className="ph-col-12">
            <div className="ph-row">
              <div className="ph-col-12 empty"></div>
              <div className="ph-col-6"></div>
              <div className="ph-col-10 big"></div>
              <div className="ph-col-6"></div>
              <div className="ph-col-10"></div>
              <div className="ph-col-4"></div>
            </div>
          </div>
        </div>

        <div className="col-md-5">
          <div className="ph-picture ph-picture-reset"></div>
        </div>
      </div>
    </>
  );
}

export function PlaceholderNone() {
  return (
    <>
      <style jsx>{`
        .noneholder {
          position: relative;
        }
        .noneholder span {
          position: absolute;
          top: 35px;
          background: #fff;
          padding: 0 10px;
          color: gray;
        }
        .noneholder .hr {
          border-bottom: 2px solid lightgray;
        }
      `}</style>
      <div className="text-center py-5 noneholder">
        <span>没有了</span>
        <div className="hr"></div>
      </div>
    </>
  );
}
