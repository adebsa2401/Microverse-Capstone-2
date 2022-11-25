import queryShowDetails from '../api/queryShowDetails.js';
import renderCommentsPopup from './commentsPopup.js';
import addNewLike from '../api/newLike.js';
import noImage from '../../assets/images/no-image.svg';
import { addUserLike } from '../storage/localStorage.js';

export default (data) => {
  const imageUrl = data.show.image ? data.show.image.medium : noImage;
  const card = document.createElement('div');
  card.classList.add('item-card');

  card.innerHTML = `
      <div class="item-name">${data.show.name}</div>
      <img src="${imageUrl}" alt="a show tv"/>
      <div class="card-footer">
        <span class="likes-count">
          <a href="javascript:void(0)"><i class="bi ${data.liked ? 'bi-hand-thumbs-up-fill' : 'bi-hand-thumbs-up'}"></i></a>
          <span class="count">(${data.likes})</span>
        </span>
        <span class="comments-count">
          <a href="javascript:void(0)"><i class="bi bi-chat-left"></i></a>
          <span class="count">(${data.comments})</span>
        </span>
        <span class="reservations-count">
          <a href="javascript:void(0)"><i class="bi bi-bookmark"></i></a>
          <span class="count">(2)</span>
        </span>
      </div>
    `.trim();

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

  card.querySelector('.bi-chat-left').addEventListener('click', async () => {
    const details = await queryShowDetails(data.show.id);
    renderCommentsPopup(details);
  });

  document.querySelector('.items-list').append(card);
};
