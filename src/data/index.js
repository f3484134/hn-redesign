import stories from './stories.js';
import comments from './comments.js';
import users from './users.js';

export { stories, comments, users };

export function getStoryById(id) {
  return stories.find(s => s.id === Number(id));
}

export function getStoriesByType(type) {
  if (type === 'top') return [...stories].sort((a, b) => b.points - a.points);
  if (type === 'new') return [...stories].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  if (type === 'best') return [...stories].sort((a, b) => b.points - a.points).slice(0, 30);
  if (type === 'ask') return stories.filter(s => s.type === 'ask').sort((a, b) => b.points - a.points);
  if (type === 'show') return stories.filter(s => s.type === 'show').sort((a, b) => b.points - a.points);
  return [...stories].sort((a, b) => b.points - a.points);
}

export function getStoriesByUser(username) {
  return stories.filter(s => s.author === username).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

function buildCommentTree(flatComments) {
  const map = {};
  const roots = [];
  flatComments.forEach(c => { map[c.id] = { ...c, children: [] }; });
  flatComments.forEach(c => {
    if (c.parentId && map[c.parentId]) {
      map[c.parentId].children.push(map[c.id]);
    } else {
      roots.push(map[c.id]);
    }
  });
  return roots;
}

export function getCommentsByStory(storyId) {
  const flat = comments.filter(c => c.storyId === Number(storyId));
  return buildCommentTree(flat);
}

export function getCommentsByUser(username) {
  return comments
    .filter(c => c.author === username)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .map(c => {
      const story = getStoryById(c.storyId);
      return { ...c, storyTitle: story?.title, storyId: c.storyId };
    });
}

export function getUserByUsername(username) {
  return users.find(u => u.username === username);
}

export function searchStories(query, filters = {}) {
  if (!query) return [];
  const q = query.toLowerCase();
  let results = stories.filter(s =>
    s.title.toLowerCase().includes(q) ||
    (s.text && s.text.toLowerCase().includes(q))
  );
  if (filters.sort === 'date') {
    results.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  } else {
    results.sort((a, b) => b.points - a.points);
  }
  return results;
}

export function searchComments(query, filters = {}) {
  if (!query) return [];
  const q = query.toLowerCase();
  let results = comments
    .filter(c => c.text.toLowerCase().includes(q))
    .map(c => {
      const story = getStoryById(c.storyId);
      return { ...c, storyTitle: story?.title };
    });
  if (filters.sort === 'date') {
    results.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }
  return results;
}
