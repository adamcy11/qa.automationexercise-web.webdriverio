import BasePage from './Base.page.js';

const SELECTORS = {
  productsLink: 'a=Products',
  searchInput: '#search_product',
  searchBtn: '#submit_search',
  searchedTitle: 'h2=Searched Products',
  itemsWrapper: 'div.features_items',
  productCards: 'div.features_items .col-sm-4',
  addToCartOnCard: 'a=Add to cart',
  viewProductOnCard: 'a=View Product',
  modal: '#cartModal',
  modalContinue: 'button=Continue Shopping',
  modalViewCart: 'u=View Cart'
};


class ProductsPage extends BasePage {
  async open() { await super.open('/products'); }

  get linkProducts() { return $(SELECTORS.productsLink); }
  get searchInput() { return $(SELECTORS.searchInput); }
  get searchBtn() { return $(SELECTORS.searchBtn); }
  get searchedTitle() { return $(SELECTORS.searchedTitle); }
  get itemsWrapper() { return $(SELECTORS.itemsWrapper); }

  productCard(index) { 
    return $$(SELECTORS.productCards)[index];
   }

  async goFromHeader() {
    await this.linkProducts.click();
    await this.itemsWrapper.waitForDisplayed();
  }

  async search(term) {
    await this.searchInput.setValue(term);
    await this.searchBtn.click();
    await this.searchedTitle.waitForDisplayed();
  }

 async addCardToCart(index = 0) {
  const card = this.productCard(index);
  await card.scrollIntoView();

  const btn = await card.$(SELECTORS.addToCartOnCard);

  await browser.execute(el => el.click(), await btn);


  await $(SELECTORS.modal).waitForDisplayed({ timeout: 12000 });
  }

  async openCardDetail(index = 0) {
    const card = this.productCard(index);
    await card.scrollIntoView();
    await card.moveTo();
    await card.$(SELECTORS.viewProductOnCard).click();
  }

 async modalContinueShopping() {
  await $(SELECTORS.modalContinue).click();
  await $(SELECTORS.modal).waitForDisplayed({ reverse: true, timeout: 8000 });
  }

  async modalViewCart() {
  await $(SELECTORS.modalViewCart).click();
  }
}

export default new ProductsPage();