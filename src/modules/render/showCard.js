import noImage from '../../assets/images/no-image.svg';

export default (data) => {
  const imageUrl = data.show.image ? data.show.image.medium : noImage;

  const html = `
    <div class="item-card">
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
    </div>
    `.trim();

  document.querySelector('.items-list').innerHTML += html;
};
