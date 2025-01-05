import type { NextApiRequest, NextApiResponse } from "next";

type VoteData = {
  name: string;
  pw: string;
  vote: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { name, pw } = req.query;

    const data: VoteData[] = [
      { name: "rene", pw: "19.12.64", vote: "CSAG" },
      { name: "karo", pw: "31.01.99", vote: "CAGS" },
      { name: "koni", pw: "20.09.00", vote: "CASGBFL" },
      { name: "molli", pw: "", vote: "CASGBFL" },
      { name: "linda", pw: "", vote: "CSAGLBF" },
      { name: "lisa", pw: "", vote: "CSAGLBF" },
      { name: "volker", pw: "", vote: "CSAGLBF" },
      { name: "ulla", pw: "", vote: "CSAGLBF" },
      { name: "heide", pw: "17.08.63", vote: "CASGBFL" },
      { name: "melli", pw: "", vote: "CASG" },
      { name: "sarah", pw: "", vote: "CSABGLF" },
    ];

    const found = data.find((d) => d.name === name && d.pw === pw);
    if (!found) {
      res.status(401).json({ error: "not found" });
      return;
    } else {
      const result = { name: found.name, vote: found.vote };
      res.status(200).json(result);
    }
  } catch (err) {
    res.status(500).json({ error: "failed to load data", err: err });
  }
}
