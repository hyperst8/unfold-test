import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div className={styles.buttonBlock}>
          <Link href="/load-giphy" className={styles.button}>
            Load Giphy
          </Link>
          <Link href="/contact-form" className={styles.button}>
            Contact Form
          </Link>
          <Link href="/animate-transitions" className={styles.button}>
            Animate Transitions
          </Link>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>Copywrong @2025</p>
      </footer>
    </div>
  );
}
