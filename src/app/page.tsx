"use client";

import { useState } from "react";
import styles from "./page.module.css";
import ShowVotes from "./showvotes";

type Vote = {
  name: string;
  vote: string;
};

export default function Home() {
  const [name, setName] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [error, setError] = useState<string>("");

  const [votes, setVotes] = useState<Vote[]>([]);

  const onClick = () => {
    fetch(`/api/vote?name=${name}&pw=${pw}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(res);
        }
      })
      .then((data: Vote[]) => {
        setVotes(data);
      })
      .catch((_err) => {
        setError("cant find vote");
      });
  };

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    setName(e.target.value);
  };

  const onChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    setPw(e.target.value);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h2 className={styles.header}>Bundestagswahl 2025 (Vermutungen)</h2>

        {votes.length === 0 && (
          <>
            <div className={styles.loginform}>
              <label className={styles.label} htmlFor="name">
                Name
              </label>
              <input
                className={styles.input}
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={onChangeName}
                onKeyDown={onKeyDown}
                required
              />
              <label className={styles.label} htmlFor="pw">
                Passwort
              </label>
              <input
                placeholder="dd.mm.yy"
                className={styles.input}
                type="password"
                id="pw"
                name="pw"
                value={pw}
                onChange={onChangePw}
                onKeyDown={onKeyDown}
              />
              <button className={styles.btn} onClick={onClick}>
                Login
              </button>
              <div className={styles.error}>{error}</div>
            </div>
          </>
        )}

        {votes.length > 0 && <ShowVotes votes={votes}></ShowVotes>}
      </main>
    </div>
  );
}
