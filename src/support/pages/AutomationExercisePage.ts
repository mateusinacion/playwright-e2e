import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import AutomationExerciseElements from '../elements/AutomationExerciseElements';
import BasePage from './BasePage';

export default class AutomationExercisePage extends BasePage {
  readonly elements: AutomationExerciseElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.elements = new AutomationExerciseElements(page);
  }

  async bloquearAnuncios(): Promise<void> {
    await this.page.route(
      /googlesyndication|doubleclick|googleadservices|adservice\.google|fundingchoicesmessages/,
      route => route.abort()
    );
  }

  async fazerLoginInvalido(): Promise<void> {
    await this.elements.getMenuLogin().click();
    await this.page.waitForURL(/\/login/, { waitUntil: 'load' });
    await this.elements.getCampoEmailLogin().fill(faker.internet.email());
    await this.elements
      .getCampoSenhaLogin()
      .fill(faker.internet.password({ length: 10 }));
    await this.elements.getBotaoLogin().click();
  }

  async validarLoginInvalido(): Promise<void> {
    await expect(this.elements.getMensagemLoginInvalido()).toBeVisible();
  }

  async buscarProduto(produto: string): Promise<void> {
    await this.elements.getMenuProdutos().click();
    await this.page.waitForURL(/\/products/, { waitUntil: 'load' });
    await this.elements.getCampoBusca().fill(produto);
    await this.elements.getBotaoBusca().click();
  }

  async validarBuscaProduto(produto: string): Promise<void> {
    await expect(this.elements.getTituloProdutosBuscados()).toBeVisible();
    const nomes = this.elements.getNomesProdutos();
    await expect(nomes.first()).toBeVisible();
    for (const nome of await nomes.allTextContents()) {
      expect(nome.toLowerCase()).toContain(produto.toLowerCase());
    }
  }

  async enviarFormularioContato(): Promise<void> {
    await this.elements.getMenuContato().click();
    await this.page.waitForURL(/\/contact_us/, { waitUntil: 'load' });
    await this.elements.getCampoNomeContato().fill(faker.person.fullName());
    await this.elements.getCampoEmailContato().fill(faker.internet.email());
    await this.elements.getCampoAssuntoContato().fill(faker.lorem.words(3));
    await this.elements.getCampoMensagemContato().fill(faker.lorem.paragraph());
    this.page.once('dialog', dialog => dialog.accept());
    await this.elements.getBotaoEnviarContato().click();
  }

  async validarEnvioContato(): Promise<void> {
    await expect(this.elements.getMensagemSucessoContato()).toHaveText(
      'Success! Your details have been submitted successfully.'
    );
  }
}
