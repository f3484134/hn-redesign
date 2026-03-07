import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Search, Bookmark, PenSquare } from 'lucide-react';
import { useState } from 'react';
import { useBookmarks } from '../../context/BookmarkContext';
import styles from './Header.module.css';

const tabs = [
  { to: '/top', label: 'Top' },
  { to: '/new', label: 'New' },
  { to: '/best', label: 'Best' },
  { to: '/ask', label: 'Ask' },
  { to: '/show', label: 'Show' },
];

export default function Header() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { bookmarks } = useBookmarks();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/top" className={styles.logo}>
          <span className={styles.logoIcon}>Y</span>
          HN
        </Link>

        <nav className={styles.nav}>
          {tabs.map(tab => (
            <NavLink
              key={tab.to}
              to={tab.to}
              className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink}
            >
              {tab.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.actions}>
          <form onSubmit={handleSearch} className={styles.searchForm}>
            <Search size={16} className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={styles.searchInput}
            />
          </form>

          <Link to="/bookmarks" className={styles.iconBtn} title="Bookmarks">
            <Bookmark size={20} />
            {bookmarks.length > 0 && (
              <span className={styles.badge}>{bookmarks.length}</span>
            )}
          </Link>

          <Link to="/submit" className={styles.iconBtn} title="Submit">
            <PenSquare size={20} />
          </Link>
        </div>
      </div>
    </header>
  );
}
