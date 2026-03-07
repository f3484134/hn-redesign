import { useState } from 'react';
import { Link } from 'react-router-dom';
import { timeAgo } from '../../utils/timeAgo';
import styles from './Comment.module.css';

const depthClasses = [styles.depth0, styles.depth1, styles.depth2, styles.depth3];

function countChildren(comment) {
  if (!comment.children) return 0;
  return comment.children.reduce((sum, c) => sum + 1 + countChildren(c), 0);
}

export default function Comment({ comment, storyAuthor, depth = 0 }) {
  const [collapsed, setCollapsed] = useState(false);
  const isOP = comment.author === storyAuthor;
  const depthClass = depthClasses[depth % depthClasses.length];
  const childCount = countChildren(comment);

  return (
    <div className={`${styles.comment} ${depthClass}`}>
      <div className={styles.header}>
        <Link to={`/user/${comment.author}`} className={styles.author}>
          {comment.author}
        </Link>
        <span className={styles.time}>{timeAgo(comment.createdAt)}</span>
        {isOP && <span className={styles.opBadge}>OP</span>}
        <button className={styles.toggleBtn} onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? `[+] ${childCount > 0 ? `${childCount} children` : ''}` : '[−]'}
        </button>
      </div>
      {!collapsed && (
        <>
          <div className={styles.body}>{comment.text}</div>
          {comment.children && comment.children.length > 0 && (
            <div className={styles.children}>
              {comment.children.map(child => (
                <Comment key={child.id} comment={child} storyAuthor={storyAuthor} depth={depth + 1} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
