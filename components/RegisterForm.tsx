import React from "react";
import axios from "axios";

export default function Form() {
  const registerUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      author: { value: string };
      nickname: { value: string };
      email: { value: string };
      password: { value: string };
    };

    const res = await axios.post("/api/user/register", {
      nickname: target.nickname.value,
      password: target.password.value,
      author: target.author.value,
      email: target.email.value,
    });

    const result = res.data;
    if (res.status === 200) {
      window.location.href = "/user/login";
    } else {
      console.error("err");
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
                />
                <div className="invalid-feedback">
                  A valid email is required!
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
    </div>
  );
}
