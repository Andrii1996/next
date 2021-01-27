import Link from 'next/link';
import {useRouter} from 'next/router';
import { MainLayout } from '../layout/MainLayout';
import styles from '../../styles/styles.module.css';

export default function Product() {

  const router = useRouter();
  return (
    <MainLayout>
      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.firstBlock}>
            <div>
              <h2>Peer to peer payments</h2>
              <p className={styles.text}>
                Our cloud-based payment process is designed to give our
                client a smooth experience when receiving payments for
                their business. We use the latest technology to ensure that
                our to ols can be integrated easily, whether it a new or
                existing solution.
              </p>
              <button className={styles.button}>OPEN ACCAUNT</button>
            </div>
            <div className={styles.img}></div>
          </div>
          <div>
            <h2>How it works</h2>
            <ol className={styles.blocks}>
              <li className={styles.info}>
                Coinclustr enables merchant
                payments from any bitcoin wallet or
                exchange. P2P payments with
                Coinclustr operate with no central
                authority or bank and will give you
                access to a broader customer base
                of crypto holders.
              </li>

              <li className={styles.info}>
                Coinclustr offers payments to any
                business – from ecommerce
                to platforms. Coinclustr offers a
                complete services for all
                you payment needs.
              </li>

              <li className={styles.info}>
                We offer flexible integration options
                that simplify PCI compliance without
                compromising on the checkout
                experience.
              </li>
            </ol>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.firstBlock}>
            <div className={styles.img}></div>
            <div>
              <h2>Dynamic invoices</h2>
              <p className={styles.text}>
                Coinclustr dynamic invoicing service lets you define a customised invoicing plans with amounts and billing frequencies.

                With Coinclustr’s dynamic invoicing you can send recurring or one-off invoices in a few clicks.
              </p>
              <Link href="/product/dynamic"><a className={styles.more}> Learn More  ➞ </a></Link>
            </div>
          </div>
          <div className={styles.firstBlock}>
            <div>
              <h2>Advanced analytics</h2>
              <p className={styles.text}>
                This services allows you to visually analyse your Coinclustr
                data. Create insightful reports and dashboards to track your
                key metrics (KPIs). Share reports and collaborate with
                others.
                Coinclustr analytics enables you to easily analyse your data
                present in Coinclustr. It lets your manage and organise your
                Coinclustr data the way you like and create reports and
                dashboards. You can use it to analyse revenue, retention
                and so much more.
              </p>
              <Link href="/product/advanced"><a className={styles.more}> Learn More ➞ </a></Link>
            </div>
            <div className={styles.img}></div>
          </div>
          <div className={styles.fraud}>
            <h2>Fraud detection</h2>
            <p className={styles.text}>
              We determine the confidence of each transaction based on metrics gathered from the transaction.
              This enables us to detect fake payments and double-spend, as well as other fraudulent payment attempts.
            </p>
            <Link href="/product/fraud"><a className={styles.more}> Learn More ➞ </a></Link>
          </div>
        </section>
        <div className={styles.image}>
        </div>
      </main>
    </MainLayout>
  )
}