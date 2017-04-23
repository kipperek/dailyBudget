import { DailyBudgetPage } from './app.po';

describe('daily-budget App', () => {
  let page: DailyBudgetPage;

  beforeEach(() => {
    page = new DailyBudgetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
