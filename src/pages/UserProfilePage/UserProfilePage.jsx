import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getUserByUsername, getStoriesByUser, getCommentsByUser } from '../../data/index';
import { timeAgo } from '../../utils/timeAgo';
import StoryCard from '../../components/StoryCard/StoryCard';
import styles from './UserProfilePage.module.css';

export default function UserProfilePage() {
  const { username } = useParams();
  const user = getUserByUsername(username);
  const [activeTab, setActiveTab] = useState('submissions');

  if (!user) {
    return (
      <div className={styles.page}>
        <div className={styles.notFound}>
          <h2>User not found</h2>
          <p><Link to="/top">Back to Home</Link></p>
        </div>
      </div>
    );
  }

  const submissions = getStoriesByUser(username);
  const userComments = getCommentsByUser(username);
  const memberSince = new Date(user.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

  return (
    <div className={styles.page}>
      <div className={styles.profileCard}>
        <h1 className={styles.username}>
          <span className={styles.userIcon}>👤</span>
          {user.username}
        </h1>
        <div className={styles.stats}>
          <span>🏆 {user.karma.toLocaleString()} karma</span>
          <span>·</span>
          <span>📅 Member since {memberSince}</span>
        </div>
        {user.about && <div className={styles.about}>{user.about}</div>}
      </div>

      <div className={styles.tabs}>
        <button
          className={activeTab === 'submissions' ? styles.tabActive : styles.tab}
          onClick={() => setActiveTab('submissions')}
        >
          Submissions ({submissions.length})
        </button>
        <button
          className={activeTab === 'comments' ? styles.tabActive : styles.tab}
          onClick={() => setActiveTab('comments')}
        >
          Comments ({userComments.length})
        </button>
      </div>

      {activeTab === 'submissions' && (
        <div className={styles.storyList}>
          {submissions.map(story => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      )}

      {activeTab === 'comments' && (
        <div className={styles.storyList}>
          {userComments.map(comment => (
            <div key={comment.id} className={styles.commentItem}>
              <div className={styles.commentText}>"{comment.text}"</div>
              <div className={styles.commentMeta}>
                on <Link to={`/story/${comment.storyId}`}>{comment.storyTitle}</Link>
                {' · '}{timeAgo(comment.createdAt)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
