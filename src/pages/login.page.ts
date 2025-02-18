import { Page } from '@playwright/test';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Locators
  private usernameInput = this.page.locator('[data-test="username"]');
  private passwordInput = this.page.locator('[data-test="password"]');
  private loginButton = this.page.locator('[data-test="login-button"]');
  private errorMessage = this.page.locator('[data-test="error"]');

  // Actions
  async login(username: string, password: string) {
    await this.goto();
    await this.fill(this.usernameInput, username);
    await this.fill(this.passwordInput, password);
    await this.click(this.loginButton);
  }

  async getErrorMessage(): Promise<string> {
    return this.getText(this.errorMessage);
  }
}