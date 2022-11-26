import countShows from '../counter/shows.js';
import renderItemCard from './showCard.js';

export default (items, title) => {
  const placeholder = document.querySelector('.items-list');

  if (items.length > 0) {
    placeholder.classList.remove('empty-list');
    placeholder.innerHTML = '';
    items.forEach(renderItemCard);
  } else {
    placeholder.classList.add('empty-list');
    placeholder.textContent = `No TV Shows found for the query " ${title} "`;
  }

  document.querySelector('.list-title').textContent = title;
  document.querySelector('nav .active .count').textContent = `(${countShows()})`;
};
