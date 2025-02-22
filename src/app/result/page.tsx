import { Leaderboard } from "../types";
import PartyOrder from "../party-order";

import styles from "./styles.module.css";

export default async function Result() {
  const finalResult = "CAGSLBF";
  const leaderboard = await getLeaderboard(finalResult);

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
  console.log(process.env.URL);
  console.log(process.env.PROD_URL);

  let url = "http://localhost:3000";
  if (process.env.VERCEL_URL) {
    url = `https://${process.env.VERCEL_URL}`;
  }

  const res = await fetch(`${url}/api/leaderboard?outcome=${outcome}`);
  const leaderboard: Leaderboard[] = await res.json();

  return leaderboard;
}
