import { Link } from 'react-router-dom';
import { Bookmark, BookmarkCheck, MessageSquare } from 'lucide-react';
import { useBookmarks } from '../../context/BookmarkContext';
import { urlDomain } from '../../utils/urlDomain';
import { timeAgo } from '../../utils/timeAgo';
import styles from './StoryCard.module.css';

export default function StoryCard({ story, rank, showBookmark = true }) {
  const { bookmarks, dispatch } = useBookmarks();
  const isBookmarked = bookmarks.includes(story.id);
  const domain = urlDomain(story.url);

  return (
    <article className={styles.card}>
      {rank != null && <span className={styles.rank}>{rank}.</span>}
      <div className={styles.content}>
        <div>
          <Link to={`/story/${story.id}`} className={styles.title}>
            {story.title}
          </Link>
          {domain && <span className={styles.domain}>({domain})</span>}
          {story.type === 'ask' && <span className={styles.askBadge}>Ask HN</span>}
          {story.type === 'show' && <span className={styles.showBadge}>Show HN</span>}
        </div>
        <div className={styles.meta}>
          <span>{story.points} points</span>
          <span className={styles.dot}>·</span>
          <span>by <Link to={`/user/${story.author}`}>{story.author}</Link></span>
          <span className={styles.dot}>·</span>
          <span>{timeAgo(story.createdAt)}</span>
          <span className={styles.dot}>·</span>
          <Link to={`/story/${story.id}`} className={styles.comments}>
            <MessageSquare size={14} />
            {story.commentCount} comments
          </Link>
        </div>
      </div>
      {showBookmark && (
        <button
          className={isBookmarked ? styles.bookmarked : styles.bookmarkBtn}
          onClick={() => dispatch({ type: 'TOGGLE', id: story.id })}
          title={isBookmarked ? 'Remove bookmark' : 'Bookmark'}
        >
          {isBookmarked ? <BookmarkCheck size={20} /> : <Bookmark size={20} />}
        </button>
      )}
    </article>
  );
}
