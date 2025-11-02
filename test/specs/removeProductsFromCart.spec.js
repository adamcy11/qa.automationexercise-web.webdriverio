import ProductsPage from '../pages/Products.page.js';
import CartPage from '../pages/Cart.page.js';

describe('Test Case 17 – Remove Products From Cart', () => {
  it('deve remover um produto do carrinho', async () => {
    
  
    await ProductsPage.open();
    await ProductsPage.addCardToCart(0);
    await ProductsPage.modalContinueShopping();
    await ProductsPage.addCardToCart(1);
    await ProductsPage.modalViewCart();

  
    const beforeRows = await CartPage.getRows();
    const before = beforeRows.length;
    expect(before).toBeGreaterThanOrEqual(2);

  
    await CartPage.removeRow(0);

  
    await browser.waitUntil(
      async () => (await CartPage.getRows()).length < before,
      { timeout: 5000, timeoutMsg: 'Carrinho não atualizou após remover item' }
    );

    const after = (await CartPage.getRows()).length;
    expect(after).toBeLessThan(before);
  });
});