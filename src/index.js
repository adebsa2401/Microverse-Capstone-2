/* eslint-disable import/no-unresolved */
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css';
import './modules/render/footer.js';
import queryShows from './modules/api/queryShows.js';
import renderShowsList from './modules/render/showsList.js';
import { loadList, stopLoad } from './modules/render/loader.js';

document.addEventListener('DOMContentLoaded', async () => {
  loadList();
  const shows = await queryShows('popular');
  stopLoad();
  renderShowsList(shows, 'Popular');
});

document.querySelector('.search-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = event.target.querySelector('input').value;

  if (query.length > 0) {
    loadList();
    const shows = await queryShows(query);
    stopLoad();
    renderShowsList(shows, query);
  }
});
