import ProductsPage from '../pages/Products.page.js';
import CartPage from '../pages/Cart.page.js';

describe('Test Case 12 – Add Products in Cart', () => {
  it('deve adicionar dois produtos e validar preços/quantidades/total', async () => {
  
    await ProductsPage.open();


    await ProductsPage.addCardToCart(0);
    await ProductsPage.modalContinueShopping();


    await ProductsPage.addCardToCart(1);
    await ProductsPage.modalViewCart();

   
    const rows = await CartPage.rows;
    expect(rows.length).toBeGreaterThanOrEqual(2);


    const first  = await CartPage.getRowData(0);
    const second = await CartPage.getRowData(1);

 
    await CartPage.validateRowData(first);
    await CartPage.validateRowData(second);
  });
});