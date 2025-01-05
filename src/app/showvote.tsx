import styles from "./showvote.module.css";
import PartyOrder from "./party-order";

type Vote = {
  name: string;
  vote: string;
};

export default function ShowVote({ vote }: { vote: Vote }) {
  return (
    <div className={styles.vote}>
      <div className={styles.name}>Vote from: {vote.name}</div>
      <PartyOrder order={vote.vote} />
    </div>
  );
}
