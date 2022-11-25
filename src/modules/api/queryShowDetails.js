export default async (showId) => {
  const response = await fetch(`${process.env.SHOW_BASE_URL}shows/${showId}`);
  return response.json();
};
