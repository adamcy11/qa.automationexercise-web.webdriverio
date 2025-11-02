
import ProductsPage from '../pages/Products.page.js';
import productData from '../data/products.json' assert { type: 'json' };


describe('Test Case 9 – Search Product', () => {
  it('deve buscar e listar produtos relacionados ao termo', async () => {
 
    const term = productData.searchTerm; 

    
    await ProductsPage.open();
    await ProductsPage.search(term);

   
    await expect(ProductsPage.searchedTitle).toBeDisplayed();

    const cards = await $$('div.features_items .col-sm-4');
    expect(cards.length).toBeGreaterThan(0);

    
    for (const card of cards) {
      const name = await card.$('p').getText();
      await expect(name.toLowerCase()).toContain(term.toLowerCase());
    }
  });
});