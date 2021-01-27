import Link from 'next/link';
import styles from '../styles/styles.module.css';

export const Header = () => (
  <header className={styles.header}>
    <nav className={styles.header__nav}>
      <div className={styles.header__logo}><Link href="/"><a className={styles.href}> Coinclustr </a></Link></div>
      <ul className={styles.header__list}>
        <li className={styles.header__item}><Link href="/product/product"><a className={styles.href}> Product </a></Link></li>
        <li className={styles.header__item}><Link href="/about"><a className={styles.href}> About us </a></Link></li>
        <li className={styles.header__item}><Link href="/pricing"><a className={styles.href}> Pricing </a></Link></li>
        <li className={styles.header__item}><Link href="/contact"><a className={styles.href}> Contacts </a></Link></li>
      </ul>
      <div>
      <Link href="/sign/signUp"><a className={styles.header__up}> SIGN UP </a></Link>
      <Link href="/sign/signIn"><a className={styles.header__in}> SIGN IN ➞ </a></Link>
      </div>
    </nav>
  </header>
);