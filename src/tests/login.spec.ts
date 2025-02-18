import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { TestConfig } from '../config/test.config';

test.describe('Login Functionality', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
  });

  test('should login successfully with valid credentials', async () => {
    await loginPage.login(
      TestConfig.credentials.standardUser.username,
      TestConfig.credentials.standardUser.password
    );
    
    // Verify redirect to inventory page
    await expect(page).toHaveURL('/inventory.html');
  });

  test('should show error message with locked out user', async () => {
    await loginPage.login(
      TestConfig.credentials.lockedOutUser.username,
      TestConfig.credentials.lockedOutUser.password
    );
    
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('Sorry, this user has been locked out');
  });
});