import React from "react";
import Link from "next/link";
import axios from "axios";

import type { UserInfo } from "../types";

const Nav: React.FC<{ userInfo: UserInfo | null; setUser: Function }> = ({
  children,
  userInfo,
  setUser,
}) => {
  const logout = async () => {
    const apiRes = await axios.post("/api/user/logout");
    // console.log(apiRes.data, apiRes.status);
    setUser({});
  };
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link" aria-current="page">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/events">
                  <a className="nav-link">Events</a>
                </Link>
              </li>
            </ul>
            {/*userInfo?.email ? (
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
                      href={`//${userInfo.author}.penink.com/manage`}
                    >
                      {userInfo.email}
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href={`//${userInfo.author}.penink.com`}
                    >
                      {userInfo.author}
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
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            ) : (
              <div className="d-flex">
                <Link href="/user/register">
                  <a>Register</a>
                </Link>

                <Link href="/user/login">
                  <a>Login</a>
                </Link>
              </div>
            )*/}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
