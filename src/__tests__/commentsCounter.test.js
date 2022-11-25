import renderCommentsPopup from '../modules/render/commentsPopup.js';
import countComments from '../modules/counter/comments.js';

describe('test comments counter', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('test empty comments list', () => {
    const data = { genres: [], comments: [] };
    const popup = renderCommentsPopup(data);
    expect(countComments(popup)).toBe(0);
  });

  it('test comments list with only one item', () => {
    const data = { genres: [], comments: [{}] };
    const popup = renderCommentsPopup(data);
    expect(countComments(popup)).toBe(1);
  });

  it('test comments list with several items', () => {
    const data = { genres: [], comments: [{}, {}, {}, {}, {}] };
    const popup = renderCommentsPopup(data);
    expect(countComments(popup)).toBe(5);
  });
});
