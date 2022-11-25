/* eslint-disable import/no-unresolved */
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css';
import './modules/render/footer.js';
import queryShows from './modules/api/queryShows.js';
import renderItemCard from './modules/render/showCard.js';

document.addEventListener('DOMContentLoaded', async () => {
  const response = await queryShows('popular');
  response.forEach(renderItemCard);
});
