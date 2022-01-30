// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const users = [
  { id: 1, name: "John Smith" },
  { id: 2, name: "Jane Doe" },
];

type Data = {
  status: number;
  data: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {
    query: { id },
  } = req;

  const user = users.find((user) => user.id === +id);
  if (!user) {
    return res.status(404).json({
      status: 404,
      data: "Not Found",
    });
  }

  res.json({
    status: 200,
    data: user,
  });
}
