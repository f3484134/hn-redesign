import { useLocation } from 'react-router-dom';
import { getStoriesByType } from '../../data/index';
import StoryCard from '../../components/StoryCard/StoryCard';
import styles from './HomePage.module.css';

export default function HomePage() {
  const location = useLocation();
  const type = location.pathname.replace('/', '') || 'top';
  const stories = getStoriesByType(type);

  return (
    <div className={styles.page}>
      <div className={styles.storyList}>
        {stories.map((story, i) => (
          <StoryCard key={story.id} story={story} rank={i + 1} />
        ))}
      </div>
    </div>
  );
}
