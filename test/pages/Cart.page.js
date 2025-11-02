import BasePage from './Base.page.js';

const SELECTORS = {
  table: '#cart_info_table',
  rows: '#cart_info_table tbody tr',
  nameInRow: 'td.cart_description h4 a',
  priceInRow: 'td.cart_price p',
  qtyInRow: 'td.cart_quantity button',
  totalInRow: 'td.cart_total p',
  deleteInRow: 'a.cart_quantity_delete'
};

class CartPage extends BasePage {

  get rows() { return $$(SELECTORS.rows); }

  async getRows() {
    return await $$(SELECTORS.rows);
  }

  async row(i) {
    const rows = await this.getRows();
    return rows[i];
  }

  async getRowData(i) {
  const r = await this.row(i);                 
  if (!r) throw new Error(`Linha ${i} não encontrada`);
  return {
    name:  await r.$(SELECTORS.nameInRow).getText(),
    price: await r.$(SELECTORS.priceInRow).getText(),
    qty:   await r.$(SELECTORS.qtyInRow).getText(),
    total: await r.$(SELECTORS.totalInRow).getText()
  };
}

  async removeRow(i) {
  const r = await this.row(i);                 
  if (!r) throw new Error(`Linha ${i} não encontrada`);

  const del = await r.$(SELECTORS.deleteInRow);
  await del.waitForClickable({ timeout: 5000 });
  await del.click();
}

  async validateRowData(data) {
  await expect(data.name).not.toEqual('');
  await expect(data.price).toMatch(/\d/);
  await expect(data.total).toMatch(/\d/);
  await expect(data.qty).toEqual('1');
}
}

export default new CartPage();