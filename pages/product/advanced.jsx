import {useRouter} from 'next/router';
import { MainLayout } from '../layout/MainLayout';
import styles from '../../styles/styles.module.css';

export default function PerToPer() {
  const router = useRouter();
  return (
    <MainLayout>
     <div className={styles.container}>
      <h2 className={styles.title}>Advanced analytics</h2>
        <p className={styles.content}>
          Boost your business with advanced analytics for Coinclustr

          This services allows you to visually analyse your Coinclustr data.
          Create insightful reports and dashboards to track your key metrics (KPIs).
          Share reports and collaborate with others.

          Coinclustr analytics enables you to easily analyse your data present in Coinclustr.
          It lets your manage and organise your Coinclustr data the way you like and create reports and dashboards.
          You can use it to analyse revenue, retention and so much more.

          Seamless integration – your data from Coinclustr is synced automatically to your analytics, giving you a full-fledged tool to analyse you data in depth.

          Reports and dash board – Coinclustr Analytics gives you access to ## hand-picked,
          readymade subscription reports and dashboards that will support you on a daily, weekly or monthly basis.

          Reporting options - Choose from a wide variety of charts, pivot tables,
          KPI widgets, and tabular view components to build insightful reports and dashboards with an easy drag-and-drop interface.

          Sharing and Collaborative analytics - Develop reports together with your team.
          Share the data and reports securely with fine-grained access controls. Embed your reports and dashboards in websites, blogs,
          applications or intranets to reach a wider audience. Export or print reports for offline access. Schedule reports and dashboards to be emailed automatically.
        </p>
     </div>
      
    </MainLayout>
  )
}