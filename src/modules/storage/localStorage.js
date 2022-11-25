const LIKES_KEY = 'likes';

export const getUserLikes = () => {
  const likes = localStorage.getItem(LIKES_KEY);
  return likes ? JSON.parse(likes) : [];
};

export const addUserLike = (showId) => {
  const likes = getUserLikes();

  if (!likes.includes(showId)) {
    likes.push(showId);
    localStorage.setItem(LIKES_KEY, JSON.stringify(likes));
  }
};
