"use client";

import { Leaderboard } from "../types";
import PartyOrder from "../party-order";

import styles from "./styles.module.css";
import { useEffect, useState } from "react";

export default function Result() {
  const finalResult = "CASGLFB";

  const [leaderboard, setLeaderboard] = useState<Leaderboard[]>([]);

  useEffect(() => {
    getLeaderboard(finalResult).then((data) => {
      setLeaderboard(data);
    });
  }, []);

  if (!leaderboard) {
    return <div>loading...</div>;
  }

  return (
    <div className={styles.result}>
      <div></div>
      <div className={styles.row}>
        <div></div>
        <div>Final Result</div>
        <PartyOrder order={finalResult} />
      </div>

      <div className={styles.list}>
        <div>
          {leaderboard.map((l) => (
            <div className={styles.row} key={l.name}>
              <div className={styles.points}>{l.points}</div>
              <div className={styles.name}>{l.name}</div>
              <PartyOrder order={l.vote} finalResult={finalResult} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

async function getLeaderboard(outcome: string) {
  const res = await fetch(`/api/leaderboard?outcome=${outcome}`);
  console.log("Res:", res);
  const leaderboard: Leaderboard[] = await res.json();

  return leaderboard;
}
