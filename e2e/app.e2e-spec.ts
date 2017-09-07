import { JobPage } from './app.po';

describe('job App', () => {
  let page: JobPage;

  beforeEach(() => {
    page = new JobPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
