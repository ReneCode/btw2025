import Logo from "./logo";

import styles from "./party-order.module.css";

export default function PartyOrder({ order }: { order: string }) {
  const logos = order.split("").map((party) => party.toLowerCase() + ".jpg");

  return (
    <div className={styles.partyorder}>
      {logos.map((logo, idx) => {
        return (
          <div key={idx} className={styles.partylogo}>
            <Logo logo={logo} />
          </div>
        );
      })}
    </div>
  );
}
