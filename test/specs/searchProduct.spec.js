
import ProductsPage from '../pages/Products.page.js';
import productData from '../data/products.json' assert { type: 'json' };


describe('Test Case 9 – Search Product', () => {
  it('Buscar e listar produtos relacionados ao termo', async () => {

    // Arrange
    const term = productData.searchTerm; 

    // Act
    await ProductsPage.open();
    await ProductsPage.search(term);

    // Assert
    await expect(ProductsPage.searchedTitle).toBeDisplayed();

    const cards = await $$('div.features_items .col-sm-4');
    expect(cards.length).toBeGreaterThan(0);

    for (const card of cards) {
      const name = await card.$('p').getText();
      await expect(name.toLowerCase()).toContain(term.toLowerCase());
    }
  });
});