import { createContext, useContext, useReducer, useEffect } from 'react';

const BookmarkContext = createContext();

function bookmarkReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      if (state.includes(action.id)) return state;
      return [...state, action.id];
    case 'REMOVE':
      return state.filter(id => id !== action.id);
    case 'TOGGLE':
      return state.includes(action.id)
        ? state.filter(id => id !== action.id)
        : [...state, action.id];
    default:
      return state;
  }
}

function loadBookmarks() {
  try {
    const raw = localStorage.getItem('hn-bookmarks');
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function BookmarkProvider({ children }) {
  const [bookmarks, dispatch] = useReducer(bookmarkReducer, null, loadBookmarks);

  useEffect(() => {
    localStorage.setItem('hn-bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  return (
    <BookmarkContext.Provider value={{ bookmarks, dispatch }}>
      {children}
    </BookmarkContext.Provider>
  );
}

export function useBookmarks() {
  const ctx = useContext(BookmarkContext);
  if (!ctx) throw new Error('useBookmarks must be used within BookmarkProvider');
  return ctx;
}
