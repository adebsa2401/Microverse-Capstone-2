import renderCommentCard from './commentCard.js';
import countComments from '../counter/comments.js';
import noImage from '../../assets/images/no-image.svg';

export default (data) => {
  const imageUrl = data.image ? data.image.original : noImage;
  const popup = document.createElement('div');
  popup.classList.add('popup');

  popup.innerHTML = `
    <div class="popup-content">
      <i class="bi bi-x-lg"></i>
      <img src="${imageUrl}" alt=""/>
      <h1>${data.name}</h1>
      ${data.summary}
      <ul>
        <li><strong>Language:</strong> ${data.language}</li>
        <li><strong>Genres:</strong> ${data.genres.join(', ')}</li>
        <li><strong>Official Site:</strong> <a href="${data.officialSite}" target="_blank" rel="noopener">${data.officialSite}</a></li>
      </ul>

      <h2>Comments <span class="count"></span></h2>

      <div class="comments-list"></div>

      <h2>Add a comment</h2>

      <form method="post">
        <input type="text" name="user" placeholder="Enter your name..."/>
        <textarea name="comment" cols="30" rows="10" placeholder="Your comment here..."></textarea>
        <button type="submit">Comment</button>
      </form>
    </div>
  `.trim();

  popup.querySelector('.bi-x-lg').addEventListener('click', () => {
    popup.remove();
  });
  document.body.prepend(popup);
  data.comments.forEach(renderCommentCard);

  popup.querySelector('.count').textContent = `(${countComments(popup)})`;

  const commentsList = popup.querySelector('.comments-list');
  if (commentsList.childElementCount === 0) {
    commentsList.textContent = 'No comments available';
    commentsList.classList.add('empty-list');
  }
};
