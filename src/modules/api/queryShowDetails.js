/* Make a request to the API to fetch a given show detailed informations */
export default async (showId) => {
  let response = await fetch(`${process.env.SHOW_BASE_URL}shows/${showId}`);
  const comments = await fetch(`${process.env.INVOLVEMENT_API_BASE_URL}apps/${process.env.INVOLVEMENT_API_KEY}/comments?item_id=${showId}`);
  response = await response.json();

  if (comments.ok) {
    response.comments = await comments.json();
  } else {
    response.comments = [];
  }

  return response;
};
