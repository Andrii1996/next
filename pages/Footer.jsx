import Link from 'next/link';
import styles from '../styles/styles.module.css';

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.f}></div>
    <div className={styles.footer__news}>
      <h2>
        Subscribe to our news.
      </h2>
      <div>
        <input
          type="text"
          placeholder="Your email address"
          className={styles.input}
        />
        <button className={styles.button}>SUBSCRIBE</button>
      </div>
    </div>
    <div className={styles.footer__midl}>
      <div className={styles.footer__coinclustr}>
        <h2>
          Coinclustr
        </h2>
        <p className={styles.footer__text}>
          Connect your wallet and start receiving cryptocurrency payments for your business.
        </p>
      </div>
      <div className={styles.footer__coinclustr}>
        <h3>
          Platform
        </h3>
        <a href="">Pricing</a>
        <a href="">Terms of Use</a>
        <a href="">Privacy Policy</a>
      </div>
      <div className={styles.footer__coinclustr}>
        <h3>
          Company
        </h3>
        <a href="">About Us </a>
        <a href="">Support</a>
        <a href="">Contact</a>
      </div>
    </div>
  </footer>
);