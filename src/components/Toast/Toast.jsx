import { useEffect } from 'react';
import { X, Check, AlertCircle } from 'lucide-react';
import styles from './Toast.module.css';

export default function Toast({ message, type = 'success', onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      {type === 'success' ? <Check size={16} /> : <AlertCircle size={16} />}
      {message}
      <button className={styles.closeBtn} onClick={onClose}>
        <X size={14} />
      </button>
    </div>
  );
}
