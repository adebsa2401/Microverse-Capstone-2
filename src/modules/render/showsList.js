import countShows from '../counter/shows.js';
import renderItemCard from './showCard.js';

export default (items, title) => {
  items.forEach(renderItemCard);
  document.querySelector('.list-title').textContent = title;
  document.querySelector('nav .active .count').textContent = `(${countShows()})`;
};
