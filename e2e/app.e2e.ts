import { AngularMaterial2Page } from './app.po';

describe('angular-material-2 App', function() {
  let page: AngularMaterial2Page;

  beforeEach(() => {
    page = new AngularMaterial2Page();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular-material-2 works!');
  });
});
