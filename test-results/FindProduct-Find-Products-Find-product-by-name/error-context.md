# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: FindProduct.spec.ts >> Find Products >> Find product by name
- Location: src\scenarios\FindProduct.spec.ts:18:7

# Error details

```
Error: page.goto: net::ERR_CONNECTION_TIMED_OUT at http://www.automationpractice.pl/index.php
Call log:
  - navigating to "http://www.automationpractice.pl/index.php", waiting until "load"

```

# Test source

```ts
  1  | import { test } from '@playwright/test';
  2  | import { join } from 'path';
  3  | import { TheConfig } from 'sicolo';
  4  | import HomePage from '../support/pages/HomePage';
  5  | 
  6  | test.describe('Find Products', () => {
  7  |   const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  8  |   let homePage: HomePage;
  9  |   const BASE_URL = TheConfig.fromFile(CONFIG)
  10 |     .andPath('application.automationpractice_QA')
  11 |     .retrieveData();
  12 | 
  13 |   test.beforeEach(async ({ page }) => {
  14 |     homePage = new HomePage(page);
> 15 |     await page.goto(BASE_URL);
     |                ^ Error: page.goto: net::ERR_CONNECTION_TIMED_OUT at http://www.automationpractice.pl/index.php
  16 |   });
  17 | 
  18 |   test('Find product by name', async () => {
  19 |     await homePage.searchProductByName();
  20 |     await homePage.checkProductCount();
  21 |   });
  22 | });
  23 | 
```