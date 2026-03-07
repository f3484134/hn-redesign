import { Link } from 'react-router-dom';

export default function UserLink({ username, isOP = false }) {
  return (
    <>
      <Link to={`/user/${username}`} style={{ color: 'var(--color-primary)', fontWeight: 500 }}>
        {username}
      </Link>
      {isOP && (
        <span style={{
          display: 'inline-block',
          padding: '1px 6px',
          fontSize: '0.75rem',
          fontWeight: 600,
          background: '#F3E8FF',
          color: '#8B5CF6',
          borderRadius: '6px',
          marginLeft: '4px',
        }}>
          OP
        </span>
      )}
    </>
  );
}
