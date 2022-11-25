export default async (query) => {
  let response = await fetch(`${process.env.SHOW_BASE_URL}search/shows?q=${query}`);
  response = await response.json();
  let likes = await fetch(`${process.env.INVOLVEMENT_API_BASE_URL}apps/${process.env.INVOLVEMENT_API_KEY}/likes`);

  try {
    likes = await likes.json();
  } catch {
    likes = [];
  }

  const likesMap = {};
  likes.forEach((item) => { likesMap[item.item_id] = item.likes; });
  response = response.map((data) => {
    data.likes = likesMap[data.show.id] ?? 0;
    return data;
  });

  return response;
};
