/* Make a request to the API to create a comment */
export default async (showId, username, comment) => {
  const response = await fetch(`${process.env.INVOLVEMENT_API_BASE_URL}apps/${process.env.INVOLVEMENT_API_KEY}/comments`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: showId,
      username,
      comment,
    }),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    },
  });

  return response.ok;
};
