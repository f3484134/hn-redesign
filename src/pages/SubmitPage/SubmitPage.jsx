import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StoryCard from '../../components/StoryCard/StoryCard';
import Toast from '../../components/Toast/Toast';
import styles from './SubmitPage.module.css';

function isValidUrl(str) {
  try { new URL(str); return true; } catch { return false; }
}

export default function SubmitPage() {
  const navigate = useNavigate();
  const [type, setType] = useState('link');
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [text, setText] = useState('');
  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);

  const validate = () => {
    const e = {};
    if (!title.trim()) e.title = 'Title is required';
    else if (title.length > 300) e.title = 'Title must be 300 characters or less';
    if (type === 'link') {
      if (!url.trim()) e.url = 'URL is required';
      else if (!isValidUrl(url)) e.url = 'Must be a valid URL';
    }
    if (type === 'ask' && !text.trim()) e.text = 'Text is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setShowToast(true);
    setTimeout(() => navigate('/top'), 2000);
  };

  const previewStory = {
    id: 0,
    type: type === 'ask' ? 'ask' : 'story',
    title: title || 'Your story title...',
    url: type === 'link' ? url || null : null,
    text: type === 'ask' ? text : null,
    author: 'you',
    points: 1,
    commentCount: 0,
    createdAt: new Date().toISOString(),
  };

  const isValid = title.trim() && (type === 'link' ? url.trim() && isValidUrl(url) : text.trim());

  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>Submit Story</h1>

      {showToast && <Toast message="Story submitted successfully!" onClose={() => setShowToast(false)} />}

      <div className={styles.layout}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.typeToggle}>
            <button type="button" className={type === 'link' ? styles.typeBtnActive : styles.typeBtn} onClick={() => setType('link')}>Link Post</button>
            <button type="button" className={type === 'ask' ? styles.typeBtnActive : styles.typeBtn} onClick={() => setType('ask')}>Ask HN</button>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Title</label>
            <input
              className={`${styles.input} ${errors.title ? styles.inputError : ''}`}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter a descriptive title"
              maxLength={300}
            />
            {errors.title && <div className={styles.errorText}>{errors.title}</div>}
            <div className={styles.charCount}>{title.length}/300</div>
          </div>

          {type === 'link' && (
            <div className={styles.field}>
              <label className={styles.label}>URL</label>
              <input
                className={`${styles.input} ${errors.url ? styles.inputError : ''}`}
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com"
              />
              {errors.url && <div className={styles.errorText}>{errors.url}</div>}
            </div>
          )}

          {type === 'ask' && (
            <div className={styles.field}>
              <label className={styles.label}>Text</label>
              <textarea
                className={`${styles.textarea} ${errors.text ? styles.inputError : ''}`}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="What do you want to ask or discuss?"
              />
              {errors.text && <div className={styles.errorText}>{errors.text}</div>}
            </div>
          )}

          <button type="submit" className={styles.submitBtn} disabled={!isValid}>
            Submit Story
          </button>
        </form>

        <div className={styles.preview}>
          <div className={styles.previewLabel}>Preview</div>
          <StoryCard story={previewStory} showBookmark={false} />
        </div>
      </div>
    </div>
  );
}
