const SELECTORS = { deleteLink: 'a=Delete Account' };

class Header {
  get deleteAccount() { return $(SELECTORS.deleteLink); }
  async clickDelete() {
    await this.deleteAccount.waitForDisplayed();
    await this.deleteAccount.click();
  }
}
export default new Header();