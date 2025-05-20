import { HomePage } from './../pages/homePage';
import { test, expect  } from '@playwright/test';
import { HomeTexts } from './fixtures/expectedTexts';


test(`navigate Home page and go back to Home page` , async ({ page }) => {
          
    const homePage = new HomePage(page);
        await homePage.goto()
        await expect(page).toHaveURL("https://practicetestautomation.com/")
        await expect(homePage.headerTitle).toHaveText(HomeTexts.headerTitle);

      
  }); 

  