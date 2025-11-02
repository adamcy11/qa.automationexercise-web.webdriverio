
import HomePage from '../pages/Home.page.js';

describe('Página Inicial - Automation Exercise', () => {
  it('deve abrir a página inicial com sucesso', async () => {
 
    await HomePage.open();

    
    await expect(browser).toHaveUrl('https://automationexercise.com/');
    await expect(HomePage.logo).toBeDisplayed();
  });
});