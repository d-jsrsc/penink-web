import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import * as EmailValidator from "email-validator";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const reserved = [
  "onepiece",
  "baby",
  "baobao",
  "gov",
  "rs",
  "javascript",
  "admin",
  "alpha",
  "release",
];

export default function Form() {
  const [hasEmail, setHasEmail] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [canGetVerifyCode, setCanGetVerifyCode] = useState(true);

  const registerUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      author: { value: string };
      nickname: { value: string };
      email: { value: string };
      password: { value: string };
      verifycode: { value: string };
      invitationcode: { value: string };
    };
    if (target.author.value.length < 5) return;
    if (reserved.includes(target.author.value)) return;
    try {
      const res = await axios.post("/api/user/register", {
        nickname: target.nickname.value.trim(),
        password: target.password.value.trim(),
        author: target.author.value.trim(),
        email: target.email.value.trim(),
        verifycode: target.verifycode.value.trim(),
        invitationcode: target.invitationcode.value.trim(),
      });

      if (res.status === 200) {
        window.location.href = "/user/login";
      } else {
        console.error("err", res.data);
      }
    } catch (error: any) {
      const err = error as AxiosError;
      console.error(err.response?.status);
      toast.error(err.response?.data.msg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
      });
    }
  };

  const verifyCodeNotify = () =>
    toast.success("发送成功", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
    });
  const getVerifyCode = async () => {
    if (!emailValid) return;
    if (!canGetVerifyCode) return;
    setCanGetVerifyCode(false);
    const target = document.getElementById("email") as HTMLInputElement;
    const email = target.value;
    try {
      const res = await axios.post("/api/user/verifycode", {
        email,
      });

      if (res.status === 200) {
        verifyCodeNotify();
      } else {
        console.error("err");
      }
    } catch (error) {
      console.error("err");
    } finally {
      setCanGetVerifyCode(true);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <div className="card px-5 py-5">
            <style jsx>{`
              .card {
                border: none;
                height: 320px;
                user-select: none;
              }

              .forms-inputs {
                position: relative;
              }

              .forms-inputs span {
                position: absolute;
                top: -18px;
                left: 10px;
                background-color: #fff;
                padding: 5px 10px;
                font-size: 15px;
              }

              .forms-inputs input {
                height: 50px;
                border: 2px solid #eee;
                width: 100%;
                padding: 0 10px;
              }

              .forms-inputs input:focus {
                box-shadow: none;
                outline: none;
                border: 2px solid #000;
              }

              .codebtn {
                position: absolute;
                right: 0;
                top: 0;
                height: 50px;
                padding: 0 10px;
                border: 1px solid #eee;
                display: flex;
                align-items: center;
                cursor: pointer;
              }

              .btn {
                height: 50px;
              }

              .success-data {
                display: flex;
                flex-direction: column;
              }

              .bxs-badge-check {
                font-size: 90px;
              }
            `}</style>
            <form onSubmit={registerUser}>
              <div className="forms-inputs mb-4">
                <span>邮箱</span>
                <input
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="email"
                  required
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value) {
                      setHasEmail(true);
                      setEmailValid(EmailValidator.validate(value));
                    } else setHasEmail(false);
                  }}
                />
                <div
                  className="invalid-feedback"
                  style={{
                    display: hasEmail ? (emailValid ? "none" : "block") : "",
                  }}
                >
                  A valid email is required!
                </div>
              </div>
              <div className="forms-inputs mb-4">
                <span>验证码</span>
                <input id="verifycode" name="verifycode" type="text" required />
                <div
                  className="codebtn"
                  onClick={getVerifyCode}
                  style={{
                    cursor: canGetVerifyCode ? "pointer" : "not-allowed",
                  }}
                >
                  获取验证码
                </div>
              </div>
              <div className="forms-inputs mb-4">
                <span>用户名</span>
                <input
                  id="author"
                  name="author"
                  type="text"
                  autoComplete="author"
                  required
                />
                <div className="invalid-feedback">
                  A valid email is required!
                </div>
              </div>
              <div className="forms-inputs mb-4">
                <span>昵称</span>
                <input
                  id="nickname"
                  name="nickname"
                  type="text"
                  autoComplete="nickname"
                  required
                />
                <div className="invalid-feedback">
                  A valid email is required!
                </div>
              </div>

              <div className="forms-inputs mb-4">
                <span>密码</span>
                <input id="password" name="password" type="password" required />
                <div className="invalid-feedback">
                  Password must be 8 character!
                </div>
              </div>
              <div className="forms-inputs mb-4">
                <span>邀请码</span>
                <input
                  id="invitationcode"
                  name="invitationcode"
                  type="text"
                  required
                />
              </div>
              {/* <div className="forms-inputs mb-4">
                <span>重复密码</span>
                <input id="password" name="password" type="password" required />
                <div className="invalid-feedback">
                  Password must be 8 character!
                </div>
              </div> */}
              <div className="mb-3">
                <button type="submit" className="btn btn-dark w-100">
                  注册
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
