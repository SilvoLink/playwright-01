import {expect, test} from "@playwright/test";

test.beforeEach(async ({ page }) => {
const path = require('path');
const filePath = `file://${path.resolve('resource/dummy-order.html' )}`;
await page.goto(filePath);
})

test('button disabled initially' , async ({ page }) => {
    await expect(page.getByTestId('submit-order')).toBeDisabled();
});

test('button enabled after filling correct data', async ({ page }) => {
    await page.getByTestId('username').fill('random-name');
    await page.getByTestId('email').fill('mail@mail.com');
    await expect(page.getByTestId('submit-order')).toBeEnabled();
});

test.only('popup is visible', async ({ page }) => {
    await page.getByTestId('username').fill('random-name');
    await page.getByTestId('email').fill('mail@mail.com');
    await page.getByTestId('submit-order').click();
    await expect(page.locator('#popup-message')).toBeVisible();
});