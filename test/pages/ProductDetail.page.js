import BasePage from './Base.page.js';

const SELECTORS = {
  qty: '#quantity',
  addBtn: 'button=Add to cart',
  modalViewCart: 'u=View Cart',
  modalContinue: 'button=Continue Shopping',
  title: 'div.product-information h2'
};

class ProductDetailPage extends BasePage {
  get qty() {
    return $(SELECTORS.qty);
  }

  get addBtn() {
    return $(SELECTORS.addBtn);
  }

  get title() {
    return $(SELECTORS.title);
  }

  async setQuantity(n) {
    await this.qty.waitForDisplayed();
    await this.qty.clearValue();
    await this.qty.setValue(String(n));
  }

  async addToCart() { await this.addBtn.click(); }

  async modalViewCart() {
    const btn = await $(SELECTORS.modalViewCart);
    await btn.waitForDisplayed({ timeout: 8000 });
    await btn.click();
  }

  async modalContinue() {
     await cartModal.continueShopping();
  }
}

export default new ProductDetailPage();