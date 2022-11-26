let loaderInterval = null;
let loader = null;

export const loadList = () => {
  loader = document.createElement('div');
  loader.classList.add('loader');
  loader.innerHTML = '<div class="loader-inside"></div>';

  const placeholder = document.querySelector('.items-list');
  placeholder.innerHTML = '';
  placeholder.classList.add('loading');
  placeholder.append(loader);

  let degree = 0;
  let up = true;

  loaderInterval = setInterval(() => {
    loader.style.transform = `rotate(${degree}deg)`;
    degree += up ? 1 : -1;

    if (degree > 360) {
      up = false;
    }

    if (degree < 0) {
      up = true;
    }
  }, 5);
};

export const stopLoad = () => {
  if (loader) {
    loader.remove();
    loader = null;
    clearInterval(loaderInterval);
  }

  document.querySelector('.items-list').classList.remove('loading');
};
