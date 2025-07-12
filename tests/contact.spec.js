import { test, expect } from '@playwright/test';

test('can add and delete a contact', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.getByPlaceholder('Name').fill('John');
  await page.getByPlaceholder('Email').fill('john@test.com');
  await page.getByRole('button', { name: 'Add Contact' }).click();

  await expect(page.getByText('John (john@test.com)')).toBeVisible();

  await page.getByRole('button', { name: 'Delete' }).click();

  await expect(page.getByText('John (john@test.com)')).not.toBeVisible();
});