import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

import type { UserInfo } from "@/types";

const siteDomain = process.env.NEXT_PUBLIC_MAIN_SITE_DOMAIN;

const Nav: React.FC<{
  userInfo?: UserInfo | null;
  setUser?: Function;
}> = ({ children, userInfo, setUser }) => {
  const logout = async () => {
    const apiRes = await axios.post("/api/user/logout");
    setUser && setUser({});
  };
  const router = useRouter();
  const { pathname } = router;
  const Navs = [
    {
      value: "Home",
      href: "/",
    },
    {
      value: "Events",
      href: "/events",
    },
    // {
    //   value: "Blog",
    //   href: "/blog",
    // },
    // {
    //   value: "About",
    //   href: "/about",
    // },
  ].map((item) => {
    return (
      <li className="nav-item" key={item.href}>
        <Link href={item.href}>
          <a
            className={`nav-link ${(pathname === item.href && "active") || ""}`}
          >
            {item.value}
          </a>
        </Link>
      </li>
    );
  });
  return (
    <>
      <div className="navbar py-4">&nbsp;</div>
      <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 fixed-top">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">Penink.club</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">{Navs}</ul>
            {userInfo?.email ? (
              <li className="d-flex nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {userInfo.nickname}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a
                      className="dropdown-item"
                      href={`//${userInfo.author}.${siteDomain}`}
                    >
                      我的主页
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href={`//${userInfo.author}.${siteDomain}/@/writer`}
                    >
                      新文章
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href={`//${userInfo.author}.${siteDomain}/@/editor`}
                    >
                      新页面
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href={`//${userInfo.author}.${siteDomain}/manage`}
                    >
                      控制台
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={(e) => {
                        e.preventDefault();
                        logout();
                      }}
                    >
                      登出
                    </a>
                  </li>
                </ul>
              </li>
            ) : (
              <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                <Link href="/user/login">
                  <a className="me-3 py-2 text-dark text-decoration-none">
                    登录
                  </a>
                </Link>
                <Link href="/user/register">
                  <a className="py-2 text-dark text-decoration-none">注册</a>
                </Link>
              </nav>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
