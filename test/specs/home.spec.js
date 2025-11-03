
import HomePage from '../pages/Home.page.js';

describe('Página Inicial - Automation Exercise', () => {
  it('deve abrir a página inicial com sucesso', async () => {
 
    // Act
    await HomePage.open();

    // Assert
    await expect(browser).toHaveUrl('https://automationexercise.com/');
    await expect(HomePage.logo).toBeDisplayed();
  });
});