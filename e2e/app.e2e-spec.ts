import { PonyracerPage } from './app.po';

describe('ponyracer App', () => {
  let page: PonyracerPage;

  beforeEach(() => {
    page = new PonyracerPage();
  });

  it('' +
    's', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Ponyracer Always a pleasure to bet on ponies');
  });
});
