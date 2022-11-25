import queryShowDetails from '../api/queryShowDetails.js';
import renderCommentsPopup from './commentsPopup.js';
import noImage from '../../assets/images/no-image.svg';

export default (data) => {
  const imageUrl = data.show.image ? data.show.image.medium : noImage;
  const card = document.createElement('div');
  card.classList.add('item-card');

  card.innerHTML = `
      <div class="item-name">${data.show.name}</div>
      <img src="${imageUrl}" alt="a show tv"/>
      <div class="card-footer">
        <a href="javascript:void(0)"><i class="bi bi-heart"></i></a>
        <span class="icon-count">
          <a href="javascript:void(0)"><i class="bi bi-chat-left"></i></a>
          <span class="count">(1)</span>
        </span>
        <span class="icon-count">
          <a href="javascript:void(0)"><i class="bi bi-bookmark"></i></a>
          <span class="count">(2)</span>
        </span>
      </div>
    `.trim();

  card
    .querySelector('.bi-chat-left')
    .addEventListener('click', async () => {
      const details = await queryShowDetails(data.show.id);
      renderCommentsPopup(details);
    });
  document.querySelector('.items-list').append(card);
};
