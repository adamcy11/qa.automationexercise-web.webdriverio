import BasePage from './Base.page.js';


const SELECTORS = {
  newUserTitle: 'h2=New User Signup!',
  signupName: '[data-qa="signup-name"]',
  signupEmail: '[data-qa="signup-email"]',
  signupBtn: '[data-qa="signup-button"]'
};

class startSignup extends BasePage {
  get title() { return $(SELECTORS.newUserTitle); }
  get nameInput() { return $(SELECTORS.signupName); }
  get emailInput() { return $(SELECTORS.signupEmail); }
  get signupBtn() { return $(SELECTORS.signupBtn); }

  async open() { await super.open('/login'); }

  async startSignup(name, email) {
    
    await this.title.waitForDisplayed();
    await this.nameInput.setValue(name);
    await this.emailInput.setValue(email);
    await this.signupBtn.click();
  }
}

export default new startSignup();