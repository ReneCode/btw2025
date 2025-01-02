import styles from "./page.module.css";
import Logo from "./logo";
import PartyOrder from "./party-order";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h2 className={styles.header}>Bundestagswahl 2025</h2>

        <PartyOrder order="CASGFL" />
      </main>
    </div>
  );
}
