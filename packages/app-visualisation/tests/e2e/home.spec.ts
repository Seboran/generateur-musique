import { test, expect } from '@playwright/test'

test('has title', async ({ page, baseURL }) => {
  // Expect a title "to contain" a substring.
  await page.goto('/')
  await expect(page).toHaveTitle(/Musique/)
})

test('get sudoku link', async ({ page }) => {
  await page.goto('/')

  // Click the get started link.
  await page.getByRole('link', { name: 'sudoku' }).click()

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*sudoku/)
})
test('get compare link', async ({ page }) => {
  await page.goto('/')

  // Click the get started link.
  await page.getByRole('link', { name: 'compare' }).click()

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*compare/)
})
test('get musique link', async ({ page }) => {
  await page.goto('/')

  // Click the get started link.
  await page.getByRole('link', { name: 'musique' }).click()

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*musique/)
})
