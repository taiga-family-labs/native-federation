import {expect, test} from '@playwright/test';

test('host loads both remote applications', async ({page}) => {
  await page.goto('/');

  await expect(page.getByRole('heading', {name: 'Taiga + Native Federation Host'})).toBeVisible();

  await page.getByRole('link', {name: 'Products child'}).click();
  await expect(page.getByRole('heading', {name: 'Products child app'})).toBeVisible();
  await expect(page.getByText('Total items: 3')).toBeVisible();

  await page.getByRole('link', {name: 'Profile child'}).click();
  await expect(page.getByRole('heading', {name: 'Profile: taiga-user'})).toBeVisible();
  await expect(page.getByText('Notifications: 3')).toBeVisible();
});
