import { useParams, Link } from 'react-router-dom';
import { Bookmark, BookmarkCheck } from 'lucide-react';
import { getStoryById, getCommentsByStory } from '../../data/index';
import { useBookmarks } from '../../context/BookmarkContext';
import { urlDomain } from '../../utils/urlDomain';
import { timeAgo } from '../../utils/timeAgo';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import CommentTree from '../../components/CommentTree/CommentTree';
import styles from './StoryDetailPage.module.css';

export default function StoryDetailPage() {
  const { id } = useParams();
  const story = getStoryById(id);
  const { bookmarks, dispatch } = useBookmarks();

  if (!story) {
    return (
      <div className={styles.page}>
        <div className={styles.notFound}>
          <h2>Story not found</h2>
          <p><Link to="/top">Back to Home</Link></p>
        </div>
      </div>
    );
  }

  const comments = getCommentsByStory(story.id);
  const isBookmarked = bookmarks.includes(story.id);
  const domain = urlDomain(story.url);

  return (
    <div className={styles.page}>
      <Breadcrumb items={[
        { label: 'Top Stories', to: '/top' },
        { label: story.title },
      ]} />

      <div className={styles.storyHeader}>
        <div className={styles.titleRow}>
          <div>
            <h1 className={styles.title}>
              {story.url ? (
                <a href={story.url} target="_blank" rel="noopener noreferrer" className={styles.titleLink}>
                  {story.title}
                </a>
              ) : story.title}
            </h1>
            {domain && <span className={styles.domain}>({domain})</span>}
            {story.type === 'ask' && <span className={styles.askBadge}>Ask HN</span>}
            {story.type === 'show' && <span className={styles.showBadge}>Show HN</span>}
          </div>
          <button
            className={isBookmarked ? styles.bookmarked : styles.bookmarkBtn}
            onClick={() => dispatch({ type: 'TOGGLE', id: story.id })}
          >
            {isBookmarked ? <BookmarkCheck size={22} /> : <Bookmark size={22} />}
          </button>
        </div>
        <div className={styles.meta}>
          <span>{story.points} points</span>
          <span>·</span>
          <span>by <Link to={`/user/${story.author}`}>{story.author}</Link></span>
          <span>·</span>
          <span>{timeAgo(story.createdAt)}</span>
        </div>
        {story.text && <div className={styles.storyText}>{story.text}</div>}
      </div>

      <div className={styles.commentsHeader}>{story.commentCount} comments</div>
      <CommentTree comments={comments} storyAuthor={story.author} />
    </div>
  );
}
