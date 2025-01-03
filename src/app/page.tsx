"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import PartyOrder from "./party-order";

type Vote = {
  name: string;
  vote: string;
};

export default function Home() {
  const [votes, setVotes] = useState<Vote[]>([]);

  useEffect(() => {
    fetch("/api/votes")
      .then((res) => res.json())
      .then((data) => setVotes(data));
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h2 className={styles.header}>Bundestagswahl 2025 (Vermutungen)</h2>

        <div className={styles.votelist}>
          {votes.map((vote, idx) => {
            return (
              <>
                <div key={idx}>{vote.name}</div>
                <PartyOrder key={idx + 100} order={vote.vote} />
              </>
            );
          })}
        </div>
      </main>
    </div>
  );
}
