import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LandingPage';
import { AdminPage } from '../pages/AdminPage';

test('Go To Website & Login', async ({ page }) => {
  
  let loginPage = new LoginPage(page)
  await loginPage.visitPageAndLoginUser()
  let adminPage = new AdminPage(page)
  await adminPage.goToAdminTab()
  await page.waitForTimeout(3000)

});