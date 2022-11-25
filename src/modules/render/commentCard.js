/* Create a comment card and render it into the popup */
export default (comment) => {
  const card = document.createElement('div');
  card.classList.add('comment-card');

  card.innerHTML = `
    <div class="comment-card-header">
      <span>by ${comment.username}</span>
      <span>${comment.creation_date}</span>
    </div>
    <p>${comment.comment}</p>
  `.trim();

  document.querySelector('.comments-list').append(card);

  return card;
};
