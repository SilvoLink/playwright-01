import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

test('playwright page content', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('link', { name: 'Github repository' })).toBeVisible();
  await expect(page.getByText('Playwright enables reliable end-to-end testing for modern web apps.')).toBeVisible();
  await expect(page.getByRole( 'contentinfo' )).toBeVisible();
  await expect(page.getByRole( 'banner' )).toBeVisible();
  await expect(page.getByRole('img', { name: 'Browsers (Chromium, Firefox,' })).toBeVisible();
  await expect(page.getByText('Any browser • Any platform • One APICross-browser. Playwright supports all')).toBeVisible();
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
