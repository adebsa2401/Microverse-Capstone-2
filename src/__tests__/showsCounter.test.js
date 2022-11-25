import countShows from '../modules/counter/shows.js';
import renderShowCard from '../modules/render/showCard.js';

describe('test shows counter', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div class="items-list"></div>';
  });

  it('test empty shows list', () => {
    expect(countShows()).toBe(0);
  });

  it('test shows list with only one item', () => {
    const shows = [{ show: {} }];
    shows.forEach(renderShowCard);
    expect(countShows()).toBe(1);
  });

  it('test shows list with multiple items', () => {
    const shows = [{ show: {} }, { show: {} }, { show: {} }, { show: {} }];
    shows.forEach(renderShowCard);
    expect(countShows()).toBe(4);
  });
});
