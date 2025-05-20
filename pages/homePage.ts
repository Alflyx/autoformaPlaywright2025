import { Page, Locator, expect } from '@playwright/test';


export class HomePage {
  readonly page: Page;
  readonly baseUrl: string;
  readonly headerTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.baseUrl = 'https://practicetestautomation.com/'; // 🔁 centralise l'URL ici
    this.headerTitle = page.locator('h1'); // 👈 clair et spécifique

  }

  async goto() {
    await this.page.goto(this.baseUrl);
    await expect(this.page).toHaveURL(this.baseUrl); // ✅ bonne vérification
  }
}