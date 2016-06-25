export class AngularMaterial2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular-material-2-app h1')).getText();
  }
}
