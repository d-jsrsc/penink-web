// 可在这一层做缓存
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  title: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json([{ title: "John Doe" }]);
}
