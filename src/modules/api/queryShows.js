export default async (query) => {
  const response = await fetch(`${process.env.SHOW_BASE_URL}search/shows?q=${query}`);
  return response.json();
};
