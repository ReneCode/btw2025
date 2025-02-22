import Logo from "./logo";

import styles from "./party-order.module.css";

export default function PartyOrder({
  order,
  finalResult,
}: {
  order: string;
  finalResult?: string;
}) {
  const logos = order.split("").map((party) => party.toLowerCase() + ".jpg");

  return (
    <div className={styles.partyorder}>
      {logos.map((logo, idx) => {
        if (finalResult) {
          let frameClass = styles.votebad;
          if (finalResult[idx].toUpperCase() === order[idx].toUpperCase()) {
            frameClass = styles.votecorrect;
          }
          return (
            <div key={idx} className={frameClass}>
              <Logo logo={logo} />
            </div>
          );
        } else {
          return (
            <div key={idx} className={styles.partylogo}>
              <Logo logo={logo} />
            </div>
          );
        }
      })}
    </div>
  );
}
