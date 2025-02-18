import { Locator, Page } from '@playwright/test';
import { TestConfig } from '../config/test.config';

export class BasePage {
  constructor(protected page: Page) {}

  async goto(path: string = '') {
    await this.page.goto(path, {
      timeout: TestConfig.timeouts.navigationTimeout,
      waitUntil: 'networkidle',
    });
  }

  async waitForElement(locator: Locator) {
    await locator.waitFor({ state: 'visible', timeout: TestConfig.timeouts.defaultTimeout });
  }

  async click(locator: Locator) {
    await this.waitForElement(locator);
    await locator.click();
  }

  async fill(locator: Locator, value: string) {
    await this.waitForElement(locator);
    await locator.fill(value);
  }

  async getText(locator: Locator): Promise<string> {
    await this.waitForElement(locator);
    return locator.innerText();
  }
}