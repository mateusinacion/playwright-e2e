import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class AutomationExerciseElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getMenuLogin(): Locator {
    return this.page.getByRole('link', { name: 'Signup / Login' });
  }

  getMenuProdutos(): Locator {
    return this.page.getByRole('link', { name: 'Products' });
  }

  getMenuContato(): Locator {
    return this.page.getByRole('link', { name: 'Contact us' });
  }

  getCampoEmailLogin(): Locator {
    return this.page.locator('[data-qa="login-email"]');
  }

  getCampoSenhaLogin(): Locator {
    return this.page.locator('[data-qa="login-password"]');
  }

  getBotaoLogin(): Locator {
    return this.page.locator('[data-qa="login-button"]');
  }

  getMensagemLoginInvalido(): Locator {
    return this.page.getByText('Your email or password is incorrect!');
  }

  getCampoBusca(): Locator {
    return this.page.locator('#search_product');
  }

  getBotaoBusca(): Locator {
    return this.page.locator('#submit_search');
  }

  getTituloProdutosBuscados(): Locator {
    return this.page.getByRole('heading', { name: 'Searched Products' });
  }

  getNomesProdutos(): Locator {
    return this.page.locator('.features_items .productinfo p');
  }

  getCampoNomeContato(): Locator {
    return this.page.locator('[data-qa="name"]');
  }

  getCampoEmailContato(): Locator {
    return this.page.locator('[data-qa="email"]');
  }

  getCampoAssuntoContato(): Locator {
    return this.page.locator('[data-qa="subject"]');
  }

  getCampoMensagemContato(): Locator {
    return this.page.locator('[data-qa="message"]');
  }

  getBotaoEnviarContato(): Locator {
    return this.page.locator('[data-qa="submit-button"]');
  }

  getMensagemSucessoContato(): Locator {
    return this.page.locator('#contact-page .status.alert-success');
  }
}
