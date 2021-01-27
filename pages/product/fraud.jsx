import {useRouter} from 'next/router';
import { MainLayout } from '../layout/MainLayout';
import styles from '../../styles/styles.module.css';

export default function Fraud() {
  const router = useRouter();
  return (
    <MainLayout>
      <div className={styles.container}>
        <h2 className={styles.title}>Fraud detection</h2>
        <p className={styles.content}>
          Coinclustr uses JavaScript to enable secure collection of sensitive payment information from customers.
          When processing payments Coinclustr’s advance fraud detection systems look for signals about both device
          characteristics and user activity indicators to help distinguish between legitimate and fraudulent transactions.
          For fraud prevention, we may also collect information about a visitor’s computer or other access devices,
          this information may be collected automatically using cookies or other similar technologies. (see Cookie Policy).
          These signals and information are highly indicative of fraud and are transmitted to Coinclustr’s backend by periodically making request to the endpoint.

          We process your personal information in order to help detect, prevent, and mitigate fraud and abuse of our services and to
          protect you against account compromise or funds loss. We also process your personal information in order to enhance security,
          monitor and verify identity or service access, combat spam or other malware or security risks and to comply with applicable security laws and regulations.

          We determine the confidence of each transaction based on metrics gathered from the transaction.
          This enables us to detect fake payments and double-spend, as well as other fraudulent payment attempts.

          We have access to the whole transaction history and this gives us the advantage of detecting malignant or fraudulent activities.
          p2p data payments are secured using encryption. Your account can also be secured using 2fa to ensure a high level of security when making payments.
          The use of 2fa can also be solicited for the authorisation of p2p payments.

          We have this level of security to maximise peace of mind, not just for existing customers but for first time users also.
          The details of how we collect and use data has been disclosed in our Privacy policy and cookie policy.
        </p>
      </div>
    </MainLayout>
  )
}

