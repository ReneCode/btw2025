import type { NextApiRequest, NextApiResponse } from "next";
import { voteData } from "./votedata";
import { Leaderboard } from "@/app/types";

function calcPoints(vote: string, realVotes: string) {
  let points = 0;
  for (let i = 0; i < realVotes.length; i++) {
    if (vote.length > i && vote[i] === realVotes[i]) {
      points += 1;
    }
  }
  return points;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const outcome = req.query.outcome as string;
  if (!outcome) {
    res.status(400).json({ error: "missing outcome" });
    return;
  }

  const result = voteData.map((d) => {
    const leaderboard: Leaderboard = {
      name: d.name,
      vote: d.vote,
      points: calcPoints(d.vote, outcome),
    };
    return leaderboard;
  });

  const sortedResult = result.sort((a, b) => {
    if (a.points < b.points) {
      return 1;
    }
    if (a.points > b.points) {
      return -1;
    }
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  res.status(200).json(sortedResult);
}
