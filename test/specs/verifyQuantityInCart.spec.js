import HomePage from '../pages/Home.page.js';
import ProductDetailPage from '../pages/ProductDetail.page.js';
import CartPage from '../pages/Cart.page.js';
import cartData from '../data/cart.json' assert { type: 'json' };

describe('Test Case 13 – Verify Product quantity in Cart', () => {

  it('deve exibir a quantidade correta no carrinho', async () => {

    
    await HomePage.open();
    await HomePage.openProductDetail(0); 

    
    const desiredQty = cartData.desiredQuantity;
    await ProductDetailPage.setQuantity(desiredQty);
    await ProductDetailPage.addToCart();
    await ProductDetailPage.modalViewCart();

   
    const data = await CartPage.getRowData(0);
    await expect(data.qty).toEqual(String(desiredQty));
  });

});
