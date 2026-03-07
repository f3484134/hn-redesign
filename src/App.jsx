import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { BookmarkProvider } from './context/BookmarkContext';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import StoryDetailPage from './pages/StoryDetailPage/StoryDetailPage';
import UserProfilePage from './pages/UserProfilePage/UserProfilePage';
import SubmitPage from './pages/SubmitPage/SubmitPage';
import SearchPage from './pages/SearchPage/SearchPage';
import BookmarksPage from './pages/BookmarksPage/BookmarksPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import './styles/global.css';

export default function App() {
  return (
    <BookmarkProvider>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/top" replace />} />
            <Route path="/story/:id" element={<StoryDetailPage />} />
            <Route path="/user/:username" element={<UserProfilePage />} />
            <Route path="/submit" element={<SubmitPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/bookmarks" element={<BookmarksPage />} />
            <Route path="/top" element={<HomePage />} />
            <Route path="/new" element={<HomePage />} />
            <Route path="/best" element={<HomePage />} />
            <Route path="/ask" element={<HomePage />} />
            <Route path="/show" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </BookmarkProvider>
  );
}
