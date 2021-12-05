import React from "react";
import axios from "axios";

export default function Form() {
  const registerUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      name: { value: string };
      password: { value: string };
    };

    const res = await axios.post("/api/login", {
      name: target.name.value,
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
      <label htmlFor="name">Name</label>
      <input id="name" name="name" type="text" autoComplete="name" required />
      <button type="submit">Register</button>
    </form>
  );
}
