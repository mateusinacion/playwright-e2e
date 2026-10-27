import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import AutomationExercisePage from '../support/pages/AutomationExercisePage';

test.describe('Automation Exercise', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let automationExercisePage: AutomationExercisePage;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.automationExercise')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    automationExercisePage = new AutomationExercisePage(page);
    await automationExercisePage.bloquearAnuncios();
    await page.goto(BASE_URL);
    await automationExercisePage.verifyTitle('Automation Exercise');
  });

  test('Login com credenciais inválidas', async () => {
    await automationExercisePage.fazerLoginInvalido();
    await automationExercisePage.validarLoginInvalido();
  });

  test('Buscar produto pelo nome', async () => {
    await automationExercisePage.buscarProduto('Jeans');
    await automationExercisePage.validarBuscaProduto('Jeans');
  });

  test('Enviar formulário de contato', async () => {
    await automationExercisePage.enviarFormularioContato();
    await automationExercisePage.validarEnvioContato();
  });
});
