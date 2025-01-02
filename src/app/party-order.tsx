import Logo from "./logo";

import styles from "./party-order.module.css";

export default function PartyOrder({ order }: { order: string }) {
  const logos = order.split("").map((party) => {
    return <Logo key={party} logo={`/${party}.png`} />;
  });

  return <div className={styles.partyorder}>{logos}</div>;
}
