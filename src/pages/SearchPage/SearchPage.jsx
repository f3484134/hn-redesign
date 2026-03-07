import { useSearchParams, Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { useState } from 'react';
import { searchStories, searchComments } from '../../data/index';
import { timeAgo } from '../../utils/timeAgo';
import StoryCard from '../../components/StoryCard/StoryCard';
import EmptyState from '../../components/EmptyState/EmptyState';
import styles from './SearchPage.module.css';

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [typeFilter, setTypeFilter] = useState(searchParams.get('type') || 'all');
  const [sortBy, setSortBy] = useState(searchParams.get('sort') || 'points');

  const filters = { sort: sortBy };
  const storyResults = searchStories(query, filters);
  const commentResults = searchComments(query, filters);

  const handleFilterChange = (key, value) => {
    const params = new URLSearchParams(searchParams);
    params.set(key, value);
    setSearchParams(params);
    if (key === 'type') setTypeFilter(value);
    if (key === 'sort') setSortBy(value);
  };

  if (!query) {
    return (
      <div className={styles.page}>
        <EmptyState icon={<Search size={48} />} title="Search HN" description="Enter a query to search stories and comments." />
      </div>
    );
  }

  const showStories = typeFilter === 'all' || typeFilter === 'stories';
  const showComments = typeFilter === 'all' || typeFilter === 'comments';
  const hasResults = (showStories && storyResults.length > 0) || (showComments && commentResults.length > 0);

  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>
        Results for <span className={styles.query}>"{query}"</span>
      </h1>

      <div className={styles.filters}>
        <select className={styles.filterSelect} value={typeFilter} onChange={(e) => handleFilterChange('type', e.target.value)}>
          <option value="all">All</option>
          <option value="stories">Stories</option>
          <option value="comments">Comments</option>
        </select>
        <select className={styles.filterSelect} value={sortBy} onChange={(e) => handleFilterChange('sort', e.target.value)}>
          <option value="points">By Points</option>
          <option value="date">By Date</option>
        </select>
      </div>

      {!hasResults && (
        <EmptyState icon={<Search size={48} />} title={`No results for "${query}"`} description="Try different keywords." />
      )}

      <div className={styles.results}>
        {showStories && storyResults.length > 0 && (
          <>
            <div className={styles.sectionLabel}>Stories ({storyResults.length})</div>
            {storyResults.map(story => (
              <StoryCard key={story.id} story={story} />
            ))}
          </>
        )}
        {showComments && commentResults.length > 0 && (
          <>
            <div className={styles.sectionLabel}>Comments ({commentResults.length})</div>
            {commentResults.map(comment => (
              <div key={comment.id} className={styles.commentResult}>
                <div className={styles.commentText}>"{comment.text}"</div>
                <div className={styles.commentMeta}>
                  by <Link to={`/user/${comment.author}`}>{comment.author}</Link>
                  {' · on '}<Link to={`/story/${comment.storyId}`}>{comment.storyTitle}</Link>
                  {' · '}{timeAgo(comment.createdAt)}
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
