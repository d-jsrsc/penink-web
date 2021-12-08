import React from "react";

export default function PageSpan({ label }: { label: string }) {
  return (
    <>
      <style jsx>{`
        .pagespan {
          background: rgb(249, 249, 249);
          height: 280px;
          color: #000;
        }
        @media (max-width: 768px) {
          .pagespan {
            height: 180px;
          }
        }
      `}</style>
      <div className="py-3 d-flex pagespan">
        <div className="container py-2 mt-4 mb-4 align-self-end fs-1">
          <h1>{label}</h1>
        </div>
      </div>
    </>
  );
}
