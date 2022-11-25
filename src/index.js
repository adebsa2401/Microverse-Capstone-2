/* eslint-disable import/no-unresolved */
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css';
import './modules/render/footer.js';
import queryShows from './modules/api/queryShows.js';
import renderShowsList from './modules/render/showsList.js';

document.addEventListener('DOMContentLoaded', async () => {
  const shows = await queryShows('popular');
  renderShowsList(shows, 'Popular');
});
