const STORE_KEY = 'wikishow';
const LIKES_KEY = 'likes';
const COMMENTS_KEY = 'comments';

const getStore = () => {
  const store = localStorage.getItem(STORE_KEY);
  return store ? JSON.parse(store) : {};
};

export const getUserLikes = () => {
  const likes = getStore()[LIKES_KEY];
  return likes ?? [];
};

export const addUserLike = (showId) => {
  const likes = getUserLikes();

  if (!likes.includes(showId)) {
    likes.push(showId);
    const store = getStore();
    store[LIKES_KEY] = likes;
    localStorage.setItem(STORE_KEY, JSON.stringify(store));
  }
};

export const getUserComments = () => {
  const comments = getStore()[COMMENTS_KEY];
  return comments ?? [];
};

export const addUserComment = (showId) => {
  const comments = getUserComments();

  if (!comments.includes(showId)) {
    comments.push(showId);
    const store = getStore();
    store[COMMENTS_KEY] = comments;
    localStorage.setItem(STORE_KEY, JSON.stringify(store));
  }
};
