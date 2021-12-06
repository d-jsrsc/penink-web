import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  //   console.log("login----------");
  //   proxy.web(req, res, { target: "http://127.0.0.1:7777" });
  //   console.log(req.method, req.body, req.query, req.url);
  const result = await axios({
    method: req.method === "GET" ? "GET" : "POST",
    url: `http://127.0.0.1:7777/api/user/login`,
    data: {
      ...req.body,
    },
  });
  // console.log(result.status, result.headers, result.data);
  res.status(200);
  if (result.headers["set-cookie"])
    res.setHeader("set-cookie", result.headers["set-cookie"]);
  res.json(result.data);
}
