import { KombuchaPage } from './app.po';

describe('kombucha App', () => {
  let page: KombuchaPage;

  beforeEach(() => {
    page = new KombuchaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
