# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ContatoFarmacia.spec.ts >> Testes funcionais no site da Trier Sistemas >> Validar funcionalidade de contato para dúvidas
- Location: src\scenarios\ContatoFarmacia.spec.ts:18:7

# Error details

```
Test timeout of 120000ms exceeded.
```

```
Error: locator.fill: Test timeout of 120000ms exceeded.
Call log:
  - waiting for locator('input[name="nome"]').nth(1)

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Ir para o conteúdo" [ref=e2] [cursor=pointer]:
    - /url: "#content"
  - banner [ref=e3]:
    - generic [ref=e6]:
      - generic [ref=e7]:
        - link [ref=e9] [cursor=pointer]:
          - /url: /
          - img "trier-logo" [ref=e10]
        - text:                  
      - generic [ref=e12]:
        - navigation "Menu" [ref=e13]:
          - list [ref=e14]:
            - listitem [ref=e15]:
              - link "Home" [ref=e16] [cursor=pointer]:
                - /url: https://www.triersistemas.com.br/
            - listitem [ref=e17]:
              - link "Empresa" [ref=e18] [cursor=pointer]:
                - /url: https://www.triersistemas.com.br/empresa/
            - listitem [ref=e19]:
              - link [ref=e20] [cursor=pointer]:
                - /url: "#"
              - text:                   
            - listitem [ref=e24]:
              - link "Conteúdos" [ref=e25] [cursor=pointer]:
                - /url: https://www.triersistemas.com.br/blog/
            - listitem [ref=e26]:
              - link "Trabalhe Conosco" [ref=e27] [cursor=pointer]:
                - /url: https://www.triersistemas.com.br/trabalhe-conosco/
        - text:                   
      - generic [ref=e28]:
        - link "Área do cliente" [ref=e30] [cursor=pointer]:
          - /url: /area-restrita/
        - link "Atendimento" [ref=e34] [cursor=pointer]:
          - /url: /atendimento
  - main [ref=e37]:
    - heading "A página não pode ser encontrada." [level=1] [ref=e39]
    - paragraph [ref=e41]: Parece que nada foi encontrado neste local.
  - contentinfo [ref=e42]:
    - generic [ref=e45]:
      - generic [ref=e46]:
        - heading [level=2] [ref=e48]:
          - text: Preciso de um sistema para
          - emphasis [ref=e49]: minha farmácia
        - generic [ref=e50]: Conte sobre sua operação e receba uma proposta/demonstração personalizada.
        - list [ref=e52]:
          - listitem [ref=e53]:
            - generic [ref=e57]: Controle total da operação
          - listitem [ref=e58]:
            - generic [ref=e62]: Mais segurança e conformidade
          - listitem [ref=e63]:
            - generic [ref=e67]: Agilidade para a equipe
        - form "Rodapé" [ref=e69]:
          - generic [ref=e70]:
            - generic [ref=e71]:
              - generic [ref=e72] [cursor=pointer]: Nome completo *
              - textbox "Nome completo *" [ref=e73]:
                - /placeholder: Seu nome
            - generic [ref=e74]:
              - generic [ref=e75] [cursor=pointer]: WhatsApp *
              - textbox "WhatsApp *" [ref=e76]:
                - /placeholder: (00) 00000-0000
            - generic [ref=e77]:
              - generic [ref=e78] [cursor=pointer]: E-mail *
              - textbox "E-mail *" [ref=e79]:
                - /placeholder: seu@email.com
            - generic [ref=e80]:
              - generic [ref=e81] [cursor=pointer]: UF *
              - combobox "UF *" [ref=e83]:
                - option "Estado" [selected]
                - option "AC"
                - option "AL"
                - option "AP"
                - option "AM"
                - option "BA"
                - option "CE"
                - option "DF"
                - option "ES"
                - option "GO"
                - option "MA"
                - option "MT"
                - option "MS"
                - option "MG"
                - option "PA"
                - option "PB"
                - option "PR"
                - option "PE"
                - option "PI"
                - option "RJ"
                - option "RN"
                - option "RS"
                - option "RO"
                - option "RR"
                - option "SC"
                - option "SP"
                - option "SE"
                - option "TO"
            - generic [ref=e84]:
              - generic [ref=e85] [cursor=pointer]: Cidade *
              - textbox "Cidade *" [ref=e86]:
                - /placeholder: Sua cidade
            - generic [ref=e87]:
              - generic [ref=e88] [cursor=pointer]: Você já é cliente Trier? *
              - combobox "Você já é cliente Trier? *" [ref=e90]:
                - option "Selecione" [selected]
                - option "Sim"
                - option "Não"
            - generic [ref=e91]:
              - generic [ref=e92] [cursor=pointer]: Assunto *
              - combobox "Assunto *" [ref=e94]:
                - option "Selecione" [selected]
                - option "Comercial"
                - option "Suporte"
                - option "Sugestão"
                - option "Ouvidoria"
            - generic [ref=e95]:
              - generic [ref=e96] [cursor=pointer]: Principal desafio
              - combobox "Principal desafio" [ref=e98]:
                - option "Selecione" [selected]
                - option "Gestão de estoque"
                - option "Controle financeiro"
                - option "Conformidade SNGPC"
                - option "Fidelização de clientes"
                - option "Gestão de rede"
                - option "Outro"
            - generic [ref=e99]:
              - generic [ref=e100] [cursor=pointer]: Mensagem (opcional)
              - textbox "Mensagem (opcional)" [ref=e101]:
                - /placeholder: Conte mais sobre suas necessidades...
            - generic [ref=e104]:
              - checkbox "Declaro que li e aceito a política de dados pessoais." [ref=e105]
              - generic [ref=e106]:
                - text: Declaro que li e aceito a
                - link "política de dados pessoais" [ref=e107] [cursor=pointer]:
                  - /url: https://www.triersistemas.com.br/politica-de-privacidade/
                - text: .
            - paragraph [ref=e109]: Resposta em até 24 horas úteis.
            - iframe [ref=e115]:
              - generic [ref=f2e4]:
                - text: protegido por
                - strong [ref=f2e5]: reCAPTCHA
            - button "Falar com especialista" [ref=e117] [cursor=pointer]
      - generic [ref=e120]:
        - generic [ref=e121]:
          - heading "Outras formas de contato" [level=2] [ref=e123]
          - paragraph [ref=e134]:
            - strong [ref=e136]: Telefone
            - text: 48 3658 9800 – Central48 3658 9870 – Comercial
            - emphasis [ref=e137]: De segunda a sexta, 8h às 17h48
          - paragraph [ref=e149]:
            - strong [ref=e151]: E-mail
            - text: comercial@triersistemas.com.brResposta em até 24h
          - paragraph [ref=e163]:
            - strong [ref=e164]: Endereço
            - text: Tubarão – Santa CatarinaPresença nacional
          - generic [ref=e174]:
            - generic [ref=e175]:
              - paragraph [ref=e176]:
                - strong [ref=e178]: Horário de atendimento
                - generic [ref=e179]: "ComercialSeg – Sex: 08h00 às 17h48"
                - text: Plantão
                - generic [ref=e180]: "Seg – Sex: 17h20 às 22h00"
                - generic [ref=e181]: "Sáb, Dom e Feriados: 08h00 às 20h00Online"
                - generic [ref=e182]: "Seg – Sex: 08h00 às 17h00"
                - text: "Sáb: 08h00 às 12h00"
              - paragraph [ref=e183]
            - generic "Accordion. Open links with Enter or Space, close with Escape, and navigate with Arrow Keys" [ref=e185]:
              - group [ref=e186]:
                - generic "Informações" [ref=e187] [cursor=pointer]
        - generic [ref=e194]:
          - heading "Dúvidas frequentes" [level=2] [ref=e196]
          - generic [ref=e198]:
            - paragraph [ref=e199]:
              - strong [ref=e201]: Quanto tempo leva a implantação?
              - text: Em média de 2 a 3 dias, com suporte completo.
            - paragraph [ref=e202]:
              - strong [ref=e204]: Como funciona o suporte?
              - text: Suporte técnico por telefone, e-mail e chat, incluído no plano.
    - generic [ref=e207]:
      - generic [ref=e208]:
        - generic [ref=e209]:
          - img "Ativo 1" [ref=e211]
          - paragraph [ref=e213]: Trier sistemas – Há mais de 30 anos transformando a gestão de farmácias e drogarias em todo o Brasil.
          - list [ref=e215]:
            - listitem [ref=e216]:
              - link "Instagram" [ref=e217] [cursor=pointer]:
                - /url: https://www.instagram.com/trier_sistemas/
            - listitem [ref=e221]:
              - link "Linkedin-in" [ref=e222] [cursor=pointer]:
                - /url: https://www.linkedin.com/company/trier-sistemas?originalSubdomain=br
            - listitem [ref=e226]:
              - link "Facebook-f" [ref=e227] [cursor=pointer]:
                - /url: https://www.facebook.com/TrierSistemas/
            - listitem [ref=e231]:
              - link "Youtube" [ref=e232] [cursor=pointer]:
                - /url: https://www.youtube.com/user/triersistemas
        - generic [ref=e236]:
          - heading "Empresa" [level=2] [ref=e238]
          - navigation "Menu" [ref=e240]:
            - list [ref=e241]:
              - listitem [ref=e242]:
                - link "Conheça a Trier" [ref=e243] [cursor=pointer]:
                  - /url: https://www.triersistemas.com.br/empresa/
              - listitem [ref=e244]:
                - link "Cases de Sucesso" [ref=e245] [cursor=pointer]:
                  - /url: /empresa#cases-de-sucesso
              - listitem [ref=e246]:
                - link "Trabalhe Conosco" [ref=e247] [cursor=pointer]:
                  - /url: https://www.triersistemas.com.br/trabalhe-conosco/
              - listitem [ref=e248]:
                - link "Conteúdos" [ref=e249] [cursor=pointer]:
                  - /url: https://www.triersistemas.com.br/blog/
              - listitem [ref=e250]:
                - link "Cadastro Simplificados" [ref=e251] [cursor=pointer]:
                  - /url: https://www.triersistemas.com.br/cadastro-simplificados/
        - generic [ref=e252]:
          - heading "Soluções" [level=2] [ref=e254]
          - navigation "Menu" [ref=e256]:
            - list [ref=e257]:
              - listitem [ref=e258]:
                - link "API Trier – Parceiros" [ref=e259] [cursor=pointer]:
                  - /url: https://www.triersistemas.com.br/trier-api-parceiros/
              - listitem [ref=e260]:
                - link "App Conferencia de Estoque" [ref=e261] [cursor=pointer]:
                  - /url: https://www.triersistemas.com.br/trier-app-conferencia-de-estoque/
              - listitem [ref=e262]:
                - link "App Gestor Farma" [ref=e263] [cursor=pointer]:
                  - /url: https://www.triersistemas.com.br/trier-app-gestor-farma/
              - listitem [ref=e264]:
                - link "Cadastro Simplificados" [ref=e265] [cursor=pointer]:
                  - /url: https://www.triersistemas.com.br/cadastro-simplificados/
              - listitem [ref=e266]:
                - link "Cesta de Compras Trier" [ref=e267] [cursor=pointer]:
                  - /url: https://www.triersistemas.com.br/trier-cesta-de-compras/
              - listitem [ref=e268]:
                - link "CI + GPC" [ref=e269] [cursor=pointer]:
                  - /url: https://www.triersistemas.com.br/trier-ci-gpc/
              - listitem [ref=e270]:
                - link "Concentrador Farmacia Popular" [ref=e271] [cursor=pointer]:
                  - /url: https://www.triersistemas.com.br/trier-concentrador-farmacia-popular/
              - listitem [ref=e272]:
                - link "Notas Fiscais Trier" [ref=e273] [cursor=pointer]:
                  - /url: https://www.triersistemas.com.br/trier-notas-fiscais/
              - listitem [ref=e274]:
                - link "Pix Seguro Trier" [ref=e275] [cursor=pointer]:
                  - /url: https://www.triersistemas.com.br/trier-pix-seguro/
              - listitem [ref=e276]:
                - link "Trier BI Estrategico" [ref=e277] [cursor=pointer]:
                  - /url: https://www.triersistemas.com.br/trier-bi-estrategico/
        - generic [ref=e278]:
          - heading "Soluções" [level=2] [ref=e280]
          - navigation "Menu" [ref=e282]:
            - list [ref=e283]:
              - listitem [ref=e284]:
                - link "Recargas Digitais Trier" [ref=e285] [cursor=pointer]:
                  - /url: https://www.triersistemas.com.br/trier-recargas-digitais/
              - listitem [ref=e286]:
                - link "Receita Digital Trier" [ref=e287] [cursor=pointer]:
                  - /url: https://www.triersistemas.com.br/trier-receita-digital/
              - listitem [ref=e288]:
                - link "SNGPC Trier" [ref=e289] [cursor=pointer]:
                  - /url: https://www.triersistemas.com.br/trier-sngpc/
              - listitem [ref=e290]:
                - link "SPED Trier" [ref=e291] [cursor=pointer]:
                  - /url: https://www.triersistemas.com.br/trier-sped/
              - listitem [ref=e292]:
                - link "TEF Dedicado Hospedado" [ref=e293] [cursor=pointer]:
                  - /url: https://www.triersistemas.com.br/trier-tef-dedicado/
              - listitem [ref=e294]:
                - link "Trier BI Estrategico" [ref=e295] [cursor=pointer]:
                  - /url: https://www.triersistemas.com.br/trier-bi-estrategico/
              - listitem [ref=e296]:
                - link "Trier Drogarias" [ref=e297] [cursor=pointer]:
                  - /url: https://www.triersistemas.com.br/trier-drogarias/
              - listitem [ref=e298]:
                - link "Trier Gestao CD" [ref=e299] [cursor=pointer]:
                  - /url: https://www.triersistemas.com.br/trier-gestao-cd/
              - listitem [ref=e300]:
                - link "Venda B2B Trier" [ref=e301] [cursor=pointer]:
                  - /url: https://www.triersistemas.com.br/trier-venda-b2b/
        - generic [ref=e302]:
          - heading "Atendimento" [level=2] [ref=e304]
          - navigation "Menu" [ref=e306]:
            - list [ref=e307]:
              - listitem [ref=e308]:
                - link "Área Restrita" [ref=e309] [cursor=pointer]:
                  - /url: https://www.triersistemas.com.br/area-restrita/
              - listitem [ref=e310]:
                - link "48 3658 9800 – Central" [ref=e311] [cursor=pointer]:
                  - /url: tel:483658980
              - listitem [ref=e312]:
                - link "48 3658 9870 – Comercial" [ref=e313] [cursor=pointer]:
                  - /url: tel:4836589870
              - listitem [ref=e314]:
                - link "comercial@triersistemas.com.br" [ref=e315] [cursor=pointer]:
                  - /url: mailto:comercial@triersistemas.com.br
      - generic [ref=e316]:
        - paragraph [ref=e318]: "© 2026 Trier Sistemas. CNPJ: 03.009.299/0001-33"
        - link "Política de Privacidade" [ref=e321] [cursor=pointer]:
          - /url: /politica-de-privacidade
  - generic [ref=e322]: desktop
  - generic "Fale com um consultor comercial" [ref=e323] [cursor=pointer]
  - button "Atendimento Online" [ref=e327] [cursor=pointer]
  - iframe [ref=e329]
```

# Test source

```ts
  1  | import { Page, expect } from '@playwright/test';
  2  | import { faker } from '@faker-js/faker';
  3  | import FarmaciaElements from '../elements/FarmaciaElements';
  4  | import BasePage from './BasePage';
  5  | 
  6  | export default class FarmaciaPage extends BasePage {
  7  |   readonly farmaciaElements: FarmaciaElements;
  8  | 
  9  |   constructor(readonly page: Page) {
  10 |     super(page);
  11 |     this.page = page;
  12 |     this.farmaciaElements = new FarmaciaElements(page);
  13 |   }
  14 | 
  15 |   async preencherCamposValidos(): Promise<void> {
  16 |     await this.farmaciaElements.getBotaoCookies().click();
> 17 |     await this.farmaciaElements.getCampoNome().fill(faker.person.firstName());
     |                                                ^ Error: locator.fill: Test timeout of 120000ms exceeded.
  18 |     await this.farmaciaElements.getCampoEmail().fill(faker.internet.email());
  19 |     await this.farmaciaElements.getCampoTelefone().fill(faker.phone.number());
  20 |     await this.farmaciaElements.getCampoEstado().selectOption('Santa Catarina');
  21 |     await this.farmaciaElements.getCampoCidade().selectOption('Criciúma');
  22 |     await this.farmaciaElements.getCampoCargo().fill(faker.person.jobTitle());
  23 |     await this.farmaciaElements.getCampoAssunto().selectOption('Sugestões');
  24 |     await this.farmaciaElements.getCampoConheceu().fill(faker.lorem.words(2));
  25 |     await this.farmaciaElements
  26 |       .getCampoComentario()
  27 |       .fill(faker.lorem.words(20));
  28 |   }
  29 | 
  30 |   async enviarFormulario(): Promise<void> {
  31 |     await this.farmaciaElements.getCheckAceito().click();
  32 |     await this.farmaciaElements.getTextoModal().click();
  33 |     await this.page.mouse.wheel(0, 2000);
  34 |     await this.farmaciaElements.getBotaoAceitar().click();
  35 |     await this.farmaciaElements.getBotaoEnviar().click();
  36 |   }
  37 | 
  38 |   async validarMensagem(): Promise<void> {
  39 |     await expect(this.farmaciaElements.getValidarMensagem()).toBeVisible();
  40 |     await this.farmaciaElements.getCampoNome().click();
  41 |     await this.farmaciaElements.getCampoTelefone().click();
  42 |   }
  43 | }
  44 | 
```