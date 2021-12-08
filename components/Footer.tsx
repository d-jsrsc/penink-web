import React from "react";

import packageInfo from "../package.json";

export default function Footer() {
  return (
    <footer className="text-center text-lg-start bg-light text-muted mt-5">
      <section className="py-2">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Penink.club</h6>
              <p>创作你的创作</p>
              <p>京ICP备19029769号-2</p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">version</h6>
              <p>{packageInfo.version}</p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">技术栈</h6>
              <p>Node.js</p>
              <p>React</p>
              <p>Next.js</p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">联系我</h6>
              <p>
                <a href="mailto:d_jsrsc@163.com" className="text-reset">
                  邮箱
                </a>
              </p>
              {/* <p>
                <i className="bi bi-alarm me-3"></i> + 01 234 567 88
              </p>
              <p>
                <i className="fas fa-print me-3"></i> + 01 234 567 89
              </p> */}
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
