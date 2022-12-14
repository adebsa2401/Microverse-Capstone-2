import queryShowDetails from '../api/queryShowDetails.js';
import renderCommentsPopup from './commentsPopup.js';
import addNewLike from '../api/newLike.js';
import noImage from '../../assets/images/no-image.svg';
import { addUserLike } from '../storage/localStorage.js';

/* Render a Show card on the homepage */
export default (data) => {
  const imageUrl = data.show.image ? data.show.image.medium : noImage;
  const card = document.createElement('div');
  card.classList.add('item-card');

  card.innerHTML = `
      <h2 class="item-name">${data.show.name}</h2>
      <img src="${imageUrl}" alt="a show tv"/>
      <div class="card-footer">
        <span class="likes-count">
          <a href="javascript:void(0)"><i class="bi ${data.liked ? 'bi-hand-thumbs-up-fill' : 'bi-hand-thumbs-up'}"></i></a>
          <span class="count">(${data.likes})</span>
        </span>
        <span class="comments-count">
          <a href="javascript:void(0)"><i class="bi ${data.commented ? 'bi-chat-left-fill' : 'bi-chat-left'}"></i></a>
          <span class="count">(${data.comments})</span>
        </span>
        <span class="reservations-count">
          <a href="javascript:void(0)"><i class="bi ${data.bookmarked ? 'bi-bookmark-fill' : 'bi-bookmark'}"></i></a>
          <span class="count">(2)</span>
        </span>
      </div>
    `.trim();

  /* Create and render the likes count */
  card.querySelector('.bi-hand-thumbs-up, .bi-hand-thumbs-up-fill').addEventListener('click', async (event) => {
    const ok = await addNewLike(data.show.id);

    if (ok) {
      event.target.classList.remove('bi-hand-thumbs-up');
      event.target.classList.add('bi-hand-thumbs-up-fill');

      const counter = card.querySelector('.likes-count .count');
      let likes = counter.textContent;
      likes = parseInt(likes.split('').slice(1, -1).join(''), 10);
      counter.textContent = `(${likes + 1})`;
      addUserLike(data.show.id);
    }
  });

  /* Render the comments popup */
  card.querySelector('.bi-chat-left, .bi-chat-left-fill').addEventListener('click', async () => {
    const details = await queryShowDetails(data.show.id);
    renderCommentsPopup(details);
  });

  document.querySelector('.items-list').append(card);

  return card;
};
