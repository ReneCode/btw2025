import styles from "./showvotes.module.css";
import PartyOrder from "./party-order";

type Vote = {
  name: string;
  vote: string;
};

export default function ShowVotes({ votes }: { votes: Vote[] }) {
  return (
    <div className={styles.votelist}>
      {votes.map((vote, idx) => {
        let style = styles.other;
        if (vote.name) {
          style = styles.me;
        }
        return (
          <div className={style} key={idx}>
            {/* <div key={idx} className={styles.me}></div> */}
            <PartyOrder order={vote.vote} />
          </div>
        );
      })}
    </div>
  );

  //   <div className={styles.votes}>
  //     {votes.map((vote, i) => (
  //       <div className={styles.vote}>
  //         <div className={styles.name}>Vote from: {vote.name}</div>
  //         <PartyOrder order={vote.vote} />
  //       </div>
  //     ))}
  //   </div>
  // );
}
