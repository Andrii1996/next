import { MainLayout } from './layout/MainLayout';
import styles from '../styles/styles.module.css';

export default function Index() {
  return (
    <>
      <MainLayout>
        <div className={styles.hello}>
          Home page
        </div>

      </MainLayout>
    </>
  )
}