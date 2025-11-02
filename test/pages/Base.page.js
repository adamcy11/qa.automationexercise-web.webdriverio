
export default class BasePage {

  async open(path = '/') {
    await browser.url(path);
    await $('body').waitForDisplayed({ timeout: 5000 });
  }
}