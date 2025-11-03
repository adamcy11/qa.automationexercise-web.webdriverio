import HomePage from '../pages/Home.page.js';
import AuthPage from '../pages/Auth.page.js';
import AccountInfoPage from '../pages/AccountInfo.page.js';
import AccountCreatedPage from '../pages/AccountCreated.page.js';
import Header from '../pages/Header.page.js';
import AccountDeletedPage from '../pages/AccountDeleted.page.js';

import users from '../data/users.json' assert { type: 'json' };
import { buildUser } from '../helpers/dataGenerator.js';

describe('Test Case 1 – Register User', () => {
  it('Registrar e deletar a conta com sucesso', async () => {
   
    // Arrange
    const user = buildUser(users.newUserBase);

  
    await HomePage.open();
    await HomePage.openSignupLoginPage();

    // Act
    await AuthPage.startSignup(user.name, user.email);

    await AccountInfoPage.fillAccountForm(user);
    await AccountInfoPage.submit();

    // Assert
    await AccountCreatedPage.assertLoaded();
    await AccountCreatedPage.continue();

    // Clean
    await Header.clickDelete();
    await AccountDeletedPage.assertLoaded();
    await AccountDeletedPage.continue();
  });
});