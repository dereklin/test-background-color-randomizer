import { TestBackgroundColorRandomizerPage } from './app.po';

describe('test-background-color-randomizer App', () => {
  let page: TestBackgroundColorRandomizerPage;

  beforeEach(() => {
    page = new TestBackgroundColorRandomizerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
