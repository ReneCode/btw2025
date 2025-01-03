import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = [
      { name: "rene", vote: "CSAG" },
      { name: "karo", vote: "CAGS" },
      { name: "koni", vote: "CASGBFL" },
      { name: "molli", vote: "CASGBFL" },
      { name: "linda", vote: "CSAGLBF" },
      { name: "lisa", vote: "CSAGLBF" },
      { name: "volker", vote: "CSAGLBF" },
      { name: "ulla", vote: "CSAGLBF" },
      { name: "heide", vote: "CASGBFL" },
      { name: "melli", vote: "CASG" },
      { name: "sarah", vote: "CSABGLF" },
    ];

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "failed to load data", err: err });
  }
}
