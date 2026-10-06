# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Contact.spec.ts >> Formulário de contato >> Enviar mensagem de contato
- Location: src\scenarios\Contact.spec.ts:18:7

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
  4  | import ContactPage from '../support/pages/ContactPage';
  5  | 
  6  | test.describe('Formulário de contato', () => {
  7  |   const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  8  |   let contactPage: ContactPage;
  9  |   const BASE_URL = TheConfig.fromFile(CONFIG)
  10 |     .andPath('application.automationpractice_QA')
  11 |     .retrieveData();
  12 | 
  13 |   test.beforeEach(async ({ page }) => {
  14 |     contactPage = new ContactPage(page);
> 15 |     await page.goto(BASE_URL);
     |                ^ Error: page.goto: net::ERR_CONNECTION_TIMED_OUT at http://www.automationpractice.pl/index.php
  16 |   });
  17 | 
  18 |   test('Enviar mensagem de contato', async () => {
  19 |     await contactPage.preencherFormulariodeContato('a@b.com.br');
  20 |     await contactPage.validarMensagemOK();
  21 |   });
  22 | });
  23 | 
```