
import BasePage from './Base.page.js';


const SELECTORS = {
  logo: 'div.logo.pull-left img',
  signupLogin: 'a=Signup / Login',

};

const HOME_SELECTORS = {
  productCards: 'div.features_items .col-sm-4',
  viewProductOnCard: 'a=View Product'
};


class HomePage extends BasePage {

  get logo() { return $(SELECTORS.logo); }
  get signupLogin() { return $(SELECTORS.signupLogin); }


  async open() {
    await super.open('/'); 
    await this.logo.waitForDisplayed();
  }


  async openSignupLoginPage() {
    await this.signupLogin.waitForDisplayed();
    await this.signupLogin.click();
  }

  card(i) { return $$(HOME_SELECTORS.productCards)[i]; }
  
  async openProductDetail(index = 0) {
    const cards = await $$(HOME_SELECTORS.productCards);
    if (!cards[index]) throw new Error(`Card ${index} não encontrado na Home`);
    const card = cards[index];
    await card.scrollIntoView();
    await card.moveTo();
    await card.$(HOME_SELECTORS.viewProductOnCard).click();
  }
}

export default new HomePage();