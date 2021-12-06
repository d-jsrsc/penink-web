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
    <form onSubmit={registerUser}>
      <label htmlFor="email">email</label>
      <input
        id="email"
        name="email"
        type="text"
        autoComplete="email"
        required
      />
      <label htmlFor="author">author</label>
      <input
        id="author"
        name="author"
        type="text"
        autoComplete="author"
        required
      />
      <label htmlFor="nickname">nickname</label>
      <input
        id="nickname"
        name="nickname"
        type="text"
        autoComplete="nickname"
        required
      />
      <label htmlFor="password">password</label>
      <input id="password" name="password" type="password" required />
      <button type="submit">Register</button>
    </form>
  );
}
