import TransitionLink from "@/components/TransitionLink/TransitionLink";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div className={styles.buttonBlock}>
          <TransitionLink href="/load-giphy" className={styles.button}>
            Load Giphy
          </TransitionLink>
          <TransitionLink href="/contact-form" className={styles.button}>
            Contact Form
          </TransitionLink>
          <TransitionLink href="/animate-transitions" className={styles.button}>
            Animate Transitions
          </TransitionLink>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>Copywrong @2025</p>
      </footer>
    </div>
  );
}
