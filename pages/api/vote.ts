import type { NextApiRequest, NextApiResponse } from "next";

type VoteData = {
  name: string;
  pw: string;
  vote: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
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
    { name: "merle", pw: "", vote: "CASGBFL" },
    { name: "stani", pw: "", vote: "CALSGBF" },
  ];

  const result = data.map((d) => {
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
