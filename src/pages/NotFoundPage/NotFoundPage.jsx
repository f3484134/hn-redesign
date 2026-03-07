import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

export default function NotFoundPage() {
  return (
    <div className={styles.page}>
      <div className={styles.icon}>🔍</div>
      <h1 className={styles.title}>Page not found</h1>
      <p className={styles.description}>The page you're looking for doesn't exist.</p>
      <Link to="/top" className={styles.homeLink}>Go to Home →</Link>
    </div>
  );
}
