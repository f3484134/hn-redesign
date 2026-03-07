import { Link } from 'react-router-dom';
import styles from './Breadcrumb.module.css';

export default function Breadcrumb({ items }) {
  return (
    <nav className={styles.breadcrumb}>
      {items.map((item, i) => (
        <span key={i}>
          {i > 0 && <span className={styles.sep}>›</span>}
          {i < items.length - 1 ? (
            <Link to={item.to} className={styles.link}>{item.label}</Link>
          ) : (
            <span className={styles.current}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
