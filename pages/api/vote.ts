import type { NextApiRequest, NextApiResponse } from "next";
import { voteData } from "./votedata";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, pw } = req.query;

  const result = voteData.map((d) => {
    if (d.name === name && d.pw === pw) {
      return { name: d.name, vote: d.vote };
    } else {
      return { name: "", vote: d.vote };
    }
  });

  const sortedResult = result.sort((a, b) => {
    if (a.name < b.name) {
      return 1;
    }
    if (a.name > b.name) {
      return -1;
    }
    return 0;
  });

  res.status(200).json(sortedResult);
}
