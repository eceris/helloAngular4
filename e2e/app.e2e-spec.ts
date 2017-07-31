import { HelloAngular4Page } from './app.po';

describe('hello-angular4 App', () => {
  let page: HelloAngular4Page;

  beforeEach(() => {
    page = new HelloAngular4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
