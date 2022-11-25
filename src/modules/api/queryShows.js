import { getUserComments, getUserLikes } from '../storage/localStorage.js';

/* Make multiple requests to the API to fetch the list of shows and their likes and comments */
export default async (query) => {
  // fetch the list of shows for the given query
  let response = await fetch(`${process.env.SHOW_BASE_URL}search/shows?q=${query}`);
  response = await response.json();

  // fetch all likes from the Involvement API
  let likes = await fetch(`${process.env.INVOLVEMENT_API_BASE_URL}apps/${process.env.INVOLVEMENT_API_KEY}/likes`);

  try {
    likes = await likes.json();
  } catch {
    likes = [];
  }

  // We map each show item to its likes and comments
  const likesMap = {};
  likes.forEach((item) => { likesMap[item.item_id] = item.likes; });
  response = await Promise.all(response.map(async (data) => {
    // fetch comments from the Involvement API for a given show
    const comments = await fetch(`${process.env.INVOLVEMENT_API_BASE_URL}apps/${process.env.INVOLVEMENT_API_KEY}/comments?item_id=${data.show.id}`);

    if (comments.ok) {
      data.comments = await comments.json();
      data.comments = data.comments.length;
    } else {
      data.comments = 0;
    }

    data.commented = getUserComments().includes(data.show.id);
    data.liked = getUserLikes().includes(data.show.id);
    data.likes = likesMap[data.show.id] ?? 0;
    return data;
  }));

  return response;
};
