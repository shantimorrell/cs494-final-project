import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Welcome to Corvallis Bus Routes!</p>
      </div>
    </main>
  );
}
