const SELECTORS = {
  title: '[data-qa="account-deleted"]',
  continueBtn: '[data-qa="continue-button"]'
};

class AccountDeletedPage {
  get title() { 
    return $(SELECTORS.title);
   }

  get continueBtn() {
     return $(SELECTORS.continueBtn);
     }

  async assertLoaded() { await this.title.waitForDisplayed(); }
  async continue() { await this.continueBtn.waitForDisplayed(); await this.continueBtn.click(); }
}
export default new AccountDeletedPage();