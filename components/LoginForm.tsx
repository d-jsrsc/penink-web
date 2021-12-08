import React from "react";
import axios from "axios";

export default function Form() {
  const registerUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    };

    const res = await axios.post("/api/user/login", {
      email: target.email.value,
      password: target.password.value,
    });

    const result = res.data;
    if (res.status === 200) {
      window.location.href = "/";
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
      <label htmlFor="password">password</label>
      <input id="password" name="password" type="password" required />
      <button type="submit">Login</button>
    </form>
  );
}