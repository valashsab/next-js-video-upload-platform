import test, { expect } from '@playwright/test';

test('navigation test', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await expect(
    page.getByRole('heading', { name: 'Relive your memories' }),
  ).toBeVisible();

  // await page.getByRole('button', { name: 'Login' }).click();
  // await page.waitForURL('/login');
  // await expect(page).toHaveURL('/login');
  // await page.getByLabel('User Name').fill('val');
  // await page.getByLabel('Password').fill('asdf');
  // await page.getByRole('button', { name: 'Sign up' }).click();
  // await page.waitForURL('/dashboard/val');
  // await expect(page).toHaveURL('/dashboard/val');
});
