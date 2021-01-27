import {useRouter} from 'next/router';
import { MainLayout } from '../layout/MainLayout';
import styles from '../../styles/styles.module.css';

export default function Dynamic() {
  const router = useRouter();
  return (
    <MainLayout>
      <div className={styles.container}>
        <h2 className={styles.title}>Dynamic invoices</h2>
        <p className={styles.content}>Coinclustr dynamic invoicing service lets you define a customised invoicing plans with amounts and billing frequencies.

          With Coinclustr’s dynamic invoicing you can send recurring or one-off invoices in a few clicks.

          Coinclustr’s dynamic invoicing uses automated reconciliation to generate virtual bank account numbers to
          keep your banking details private and automatically reconciles incoming payments with outstanding invoices. Using prebuilt email reminder
          for missed or overdue payment Coinclustr maximises your chances of getting paid. Coinclustr will automatically prorates billing when
          any plan changes occur and configures rules to automatically or manually review customer subscription.

          Dynamic invoicing with Coinclustr allows you to focus on what is important – your customer. Leave the optimisation and automation of order flows,
          billing logic, subscription management, invoicing, payments, revenue recovery and more to Coinclustr.
        </p>
      </div>
    </MainLayout>
  )
}