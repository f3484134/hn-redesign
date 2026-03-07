import { Bookmark } from 'lucide-react';
import { useBookmarks } from '../../context/BookmarkContext';
import { getStoryById } from '../../data/index';
import StoryCard from '../../components/StoryCard/StoryCard';
import EmptyState from '../../components/EmptyState/EmptyState';
import styles from './BookmarksPage.module.css';

export default function BookmarksPage() {
  const { bookmarks } = useBookmarks();
  const stories = bookmarks.map(id => getStoryById(id)).filter(Boolean);

  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>
        Your Bookmarks <span className={styles.count}>({stories.length})</span>
      </h1>

      {stories.length === 0 ? (
        <EmptyState
          icon={<Bookmark size={48} />}
          title="No bookmarks yet"
          description="Save stories to find them here later."
        />
      ) : (
        <div className={styles.storyList}>
          {stories.map(story => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      )}
    </div>
  );
}
