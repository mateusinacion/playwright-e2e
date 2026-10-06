# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ContatoEmpresa.spec.ts >> Testes funcionais no site da Betha Sistemas >> Validar funcionalidade de contato para falar com eles
- Location: src\scenarios\ContatoEmpresa.spec.ts:18:7

# Error details

```
Test timeout of 120000ms exceeded.
```

```
Error: locator.click: Test timeout of 120000ms exceeded.
Call log:
  - waiting for locator('text=Gestor público')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e3]:
    - banner [ref=e4]:
      - generic [ref=e5]:
        - link [ref=e6] [cursor=pointer]:
          - /url: /
        - generic [ref=e8]:
          - navigation [ref=e9]:
            - list [ref=e10]:
              - listitem [ref=e11]:
                - link [ref=e12] [cursor=pointer]:
                  - /url: /sobre
                  - paragraph [ref=e13]: Sobre
              - listitem [ref=e14]:
                - link [ref=e15] [cursor=pointer]:
                  - /url: /solucoes
                  - paragraph [ref=e16]: Soluções
              - listitem [ref=e17]:
                - paragraph [ref=e19] [cursor=pointer]:
                  - text: Betha Partners
                  - generic [ref=e20]: 
              - listitem [ref=e21]:
                - link [ref=e22] [cursor=pointer]:
                  - /url: /carreira
                  - paragraph [ref=e23]: Carreira
              - listitem [ref=e24]:
                - link [ref=e25] [cursor=pointer]:
                  - /url: /treinamentos
                  - paragraph [ref=e26]: Treinamentos
              - listitem [ref=e27]:
                - paragraph [ref=e29] [cursor=pointer]:
                  - text: Conteúdos
                  - generic [ref=e30]: 
              - listitem [ref=e31]:
                - link [ref=e32] [cursor=pointer]:
                  - /url: /contato
                  - paragraph [ref=e33]: Contato
          - link [ref=e34] [cursor=pointer]:
            - /url: /portal-do-cliente
            - paragraph [ref=e35]: Portal do cliente
          - button [ref=e36]:
            - generic [ref=e37]: Realize uma busca
            - generic [ref=e38] [cursor=pointer]: 
      - generic:
        - generic:
          - generic:
            - generic:
              - generic:
                - textbox:
                  - /placeholder: O que você procura?
                - group [aria-hidden]
            - button:
              - generic: Buscar
              - generic: 
          - button:
            - generic: Fechar busca
            - generic: 
    - main [ref=e39]:
      - generic [ref=e41]:
        - generic [ref=e42]:
          - link [ref=e43] [cursor=pointer]:
            - /url: /
            - paragraph [ref=e44]: Home
            - text: /
          - paragraph [ref=e45]: Contato
        - link [ref=e46] [cursor=pointer]:
          - /url: /
          - text: /
          - paragraph [ref=e47]: Voltar
      - generic [ref=e50]:
        - heading [level=1] [ref=e51]: Contato
        - heading [level=2] [ref=e53]: Encontre a melhor maneira de falar com a Betha
        - paragraph [ref=e54]: "Caso você tenha dúvidas, sugestões ou deseja falar com nossa equipe, utilize uma das formas de contato abaixo. >> Mas, atenção: se a dúvida for sobre a sua folha de pagamento, solicitamos que entre em contato com a entidade pública em que você trabalha."
        - button [ref=e56] [cursor=pointer]:
          - generic [ref=e57]: Fale conosco
      - generic [ref=e64]:
        - generic [ref=e67]:
          - heading [level=2] [ref=e68]: Fale Conosco
          - generic [ref=e70]:
            - generic [ref=e71]:
              - generic [ref=e72]: Assunto
              - generic [ref=e75]:
                - button [ref=e76] [cursor=pointer]:
                  - paragraph [ref=e77]: Solicitar demonstração
                - textbox [aria-hidden]: Solicitar demonstração
                - group [aria-hidden]
            - generic [ref=e78]:
              - generic [ref=e79]: Nome
              - generic [ref=e82]:
                - textbox [ref=e83]: Imani
                - group [aria-hidden]
            - generic [ref=e84]:
              - generic [ref=e85]: E-mail institucional
              - generic [ref=e88]:
                - textbox [ref=e89]: Maurine_Rempel41@yahoo.com
                - group [aria-hidden]
              - paragraph [ref=e90]: Use seu e-mail institucional (o da entidade onde você trabalha).
            - generic [ref=e91]:
              - generic [ref=e92]: WhatsApp
              - generic [ref=e95]:
                - textbox [ref=e96]: (13) 38962-3084
                - group [aria-hidden]
            - generic [ref=e97]:
              - generic [ref=e98]: Em qual tipo de entidade pública você trabalha?
              - generic [ref=e101]:
                - button [ref=e102] [cursor=pointer]:
                  - paragraph [ref=e103]: Prefeitura
                - textbox [aria-hidden]: Prefeitura
                - group [aria-hidden]
            - generic [ref=e104]:
              - generic [ref=e105]: Qual seu cargo?
              - generic [ref=e108]:
                - button [expanded] [ref=e109] [cursor=pointer]: Selecione
                - textbox [aria-hidden]: none
                - group [aria-hidden]
            - generic [ref=e110]:
              - generic [ref=e111]: Estado
              - generic [ref=e114]:
                - button [ref=e115] [cursor=pointer]: Selecione
                - textbox [aria-hidden]: none
                - group [aria-hidden]
            - generic [ref=e116]:
              - generic [ref=e117]: Cidade
              - generic [ref=e120]:
                - button [disabled] [ref=e121]: Selecione primeiro o Estado
                - textbox [aria-hidden]: none
                - group [aria-hidden]
            - generic [ref=e122]:
              - generic [ref=e123]: Mensagem
              - generic [ref=e126]:
                - textbox [ref=e127]
                - group [aria-hidden]
            - generic [ref=e129] [cursor=pointer]:
              - checkbox [ref=e130]
              - paragraph [ref=e131]:
                - text: Declaro que li e aceitei a
                - link [ref=e132]:
                  - /url: /politica-de-protecao-de-dados
                  - text: Política de privacidade
            - button [ref=e134] [cursor=pointer]:
              - generic [ref=e135]: Enviar mensagem
        - generic [ref=e138]:
          - generic [ref=e139]:
            - heading [level=2] [ref=e140]: Localização
            - generic [ref=e141]:
              - heading [level=6] [ref=e144]: Betha Sistemas - Matriz Rua Júlio Gaidzinski, 320, 88811-000, Pio Corrêa / Criciúma - SC
              - link [ref=e145] [cursor=pointer]:
                - /url: https://g.page/bethamatriz?share
                - text: Rota no Google Maps
              - generic [ref=e146]:
                - generic [ref=e147]:
                  - heading [level=6] [ref=e150]: Fale conosco
                  - link [ref=e151] [cursor=pointer]:
                    - /url: tel:+55(48) 3431-0733
                    - heading [level=6] [ref=e152]: (48) 3431-0733
                - generic [ref=e153]:
                  - heading [level=6] [ref=e156]: Suporte técnico
                  - link [ref=e157] [cursor=pointer]:
                    - /url: tel:08006000735
                    - heading [level=6] [ref=e159]: 0800 600 0735
          - generic [ref=e168]:
            - heading [level=2] [ref=e169]: Carreira
            - paragraph [ref=e170]: Faça parte de um time inovador e trabalhe com as tecnologias mais avançadas do mercado.
            - link [ref=e172] [cursor=pointer]:
              - /url: https://www.betha.com.br/carreira
              - button [ref=e173]:
                - generic [ref=e174]: Saiba mais
      - generic [ref=e176]:
        - generic [ref=e179]:
          - generic [ref=e180]:
            - heading [level=2] [ref=e181]: Encontre uma unidade Betha
            - paragraph [ref=e182]: A Betha está perto de você onde você estiver.
          - generic [ref=e184]:
            - generic [ref=e185]: 
            - generic [ref=e188]:
              - generic [ref=e189]:
                - generic [ref=e190]: Busque por cidade
                - combobox [ref=e192]
              - generic [ref=e193] [cursor=pointer]
        - generic [ref=e199]:
          - region [ref=e200]
          - generic [ref=e201]:
            - iframe [aria-hidden] [ref=e277]
            - button [ref=e279] [cursor=pointer]
            - link [ref=e281] [cursor=pointer]:
              - /url: https://maps.google.com/maps?ll=-18.540343,-53.627129&z=5&t=m&hl=pt-BR&gl=US&mapclient=apiv3
            - generic [ref=e284]:
              - button [ref=e290] [cursor=pointer]: Atalhos do teclado
              - generic [ref=e291]: Dados cartográficos ©2026 Google, INEGI
              - link [ref=e300] [cursor=pointer]:
                - /url: https://www.google.com/intl/pt-BR_US/help/terms_maps.html
                - text: Termos
    - contentinfo [ref=e301]:
      - generic [ref=e302]:
        - button [ref=e303] [cursor=pointer]:
          - generic [ref=e304]: Voltar ao topo
        - generic [ref=e307]:
          - generic [ref=e308]:
            - link [ref=e309] [cursor=pointer]:
              - /url: /solucoes
              - paragraph [ref=e310]: Soluções
            - link [ref=e311] [cursor=pointer]:
              - /url: /solucoes/contabil
              - paragraph [ref=e312]: Contábil
            - link [ref=e313] [cursor=pointer]:
              - /url: /solucoes/contratos
              - paragraph [ref=e314]: Contratos
            - link [ref=e315] [cursor=pointer]:
              - /url: /solucoes/arrecadacao
              - paragraph [ref=e316]: Arrecadação
            - link [ref=e317] [cursor=pointer]:
              - /url: /solucoes/pessoal
              - paragraph [ref=e318]: Pessoal
            - link [ref=e319] [cursor=pointer]:
              - /url: /solucoes/atendimento
              - paragraph [ref=e320]: Atendimento
            - link [ref=e321] [cursor=pointer]:
              - /url: /solucoes/nopaper
              - paragraph [ref=e322]: NoPaper
            - link [ref=e323] [cursor=pointer]:
              - /url: /solucoes/educacao
              - paragraph [ref=e324]: Educação
            - link [ref=e325] [cursor=pointer]:
              - /url: /solucoes/saude
              - paragraph [ref=e326]: Saúde
            - link [ref=e327] [cursor=pointer]:
              - /url: /solucoes/gestao-municipal
              - paragraph [ref=e328]: Gestão Municipal
          - generic [ref=e329]:
            - link [ref=e330] [cursor=pointer]:
              - /url: /sobre
              - paragraph [ref=e331]: Sobre nós
            - link [ref=e332] [cursor=pointer]:
              - /url: /sobre#quem-somos
              - paragraph [ref=e333]: Quem somos
            - link [ref=e334] [cursor=pointer]:
              - /url: /conformidade-e-integridade
              - paragraph [ref=e335]: Conformidade e Integridade
            - link [ref=e336] [cursor=pointer]:
              - /url: /conformidade-e-integridade#lgpd
              - paragraph [ref=e337]: LGPD
            - link [ref=e338] [cursor=pointer]:
              - /url: /conformidade-e-integridade#canal-de-denuncias
              - paragraph [ref=e339]: Canal de Denúncias
          - generic [ref=e340]:
            - link [ref=e341] [cursor=pointer]:
              - /url: /carreira
              - paragraph [ref=e342]: Carreira
            - link [ref=e343] [cursor=pointer]:
              - /url: /carreira#razoes
              - paragraph [ref=e344]: Trabalhe conosco
            - link [ref=e345] [cursor=pointer]:
              - /url: https://betha.inhire.app/vagas/
              - paragraph [ref=e346]: Vagas disponíveis
          - generic [ref=e347]:
            - paragraph [ref=e349] [cursor=pointer]: Betha Partners
            - link [ref=e350] [cursor=pointer]:
              - /url: /portal-revendas
              - paragraph [ref=e351]: Sou uma revenda
            - link [ref=e352] [cursor=pointer]:
              - /url: /seja-um-revendedor
              - paragraph [ref=e353]: Quero ser uma revenda
            - link [ref=e354] [cursor=pointer]:
              - /url: /seja-um-parceiro
              - paragraph [ref=e355]: Quero ser um parceiro
          - generic [ref=e356]:
            - link [ref=e357] [cursor=pointer]:
              - /url: /contato
              - paragraph [ref=e358]: Contato
            - link [ref=e359] [cursor=pointer]:
              - /url: /contato#fale-conosco
              - paragraph [ref=e360]: Solicite uma visita
            - link [ref=e361] [cursor=pointer]:
              - /url: /contato#canais-de-atendimento
              - paragraph [ref=e362]: Encontre uma unidade Betha
          - link [ref=e364] [cursor=pointer]:
            - /url: /treinamentos
            - paragraph [ref=e365]: Treinamentos
          - generic [ref=e366]:
            - link [ref=e367] [cursor=pointer]:
              - /url: /portal-do-cliente
              - paragraph [ref=e368]: Sou Cliente
            - link [ref=e369] [cursor=pointer]:
              - /url: /portal-do-cliente
              - paragraph [ref=e370]: Portal do cliente
            - link [ref=e371] [cursor=pointer]:
              - /url: https://centraldeajuda.betha.com.br/
              - paragraph [ref=e372]: Central de ajuda
          - generic [ref=e373]:
            - paragraph [ref=e375] [cursor=pointer]: Conteúdos
            - link [ref=e376] [cursor=pointer]:
              - /url: /noticias
              - paragraph [ref=e377]: Notícias
            - link [ref=e378] [cursor=pointer]:
              - /url: /noticias?category=43
              - paragraph [ref=e379]: Cases
            - link [ref=e380] [cursor=pointer]:
              - /url: /noticias/?category=9604
              - paragraph [ref=e381]: Materiais Educativos
            - link [ref=e382] [cursor=pointer]:
              - /url: /faq
              - paragraph [ref=e383]: FAQ
        - generic [ref=e384]:
          - generic [ref=e385]:
            - generic [ref=e386]:
              - paragraph [ref=e387]: Matriz Betha Sistemas
              - paragraph [ref=e388]: Rua Júlio Gaidzinski, 320, 88811-000, Pio Corrêa / Criciúma - SC
            - generic [ref=e389]:
              - link [ref=e390] [cursor=pointer]:
                - /url: tel:+5548 3431-0733
                - paragraph [ref=e392]: 48 3431-0733
              - link [ref=e393] [cursor=pointer]:
                - /url: tel:+5508006000735
                - paragraph [ref=e395]: 0800 600 0735
                - paragraph [ref=e396]: Atendimento técnico
          - generic [ref=e397]:
            - paragraph [ref=e398]: Siga a Betha nas redes sociais
            - link [ref=e399] [cursor=pointer]:
              - /url: http://pt-br.facebook.com/bethasistemas
            - link [ref=e401] [cursor=pointer]:
              - /url: https://instagram.com/bethasistemas/
            - link [ref=e403] [cursor=pointer]:
              - /url: http://twitter.com/BethaSistemas
            - link [ref=e405] [cursor=pointer]:
              - /url: https://www.youtube.com/channel/UCSnOh5s_C8Wjl63Sxgpg5ow
            - link [ref=e407] [cursor=pointer]:
              - /url: https://br.linkedin.com/company/betha-sistemas
      - generic [ref=e410]:
        - paragraph [ref=e411]: Copyrights 2024 © Betha Sistemas
        - link [ref=e412] [cursor=pointer]:
          - /url: https://www.tiki.com.br/
          - paragraph [ref=e413]: tiki
    - generic [ref=e414]:
      - paragraph [ref=e415]:
        - text: Utilizamos cookies para analisar como você interage conosco, personalizar nosso conteúdo e melhorar a sua experiência no website. Ao continuar navegando, você concorda com o uso de cookies e demais termos de nossa
        - link [ref=e416] [cursor=pointer]:
          - /url: /politica-de-protecao-de-dados
          - text: Política de Proteção de Dados.
      - button [ref=e417] [cursor=pointer]:
        - generic [ref=e418]: Continuar navegando
  - iframe [aria-hidden] [ref=e420]
  - listbox [ref=e423]:
    - option "Selecione" [disabled] [selected]
    - option [active] [ref=e424] [cursor=pointer]:
      - paragraph [ref=e425]: Prefeito(a) ou Vice-prefeito(a)
    - option [ref=e426] [cursor=pointer]:
      - paragraph [ref=e427]: Secretário(a) Municipal ou Chefe de Gabinete
    - option [ref=e428] [cursor=pointer]:
      - paragraph [ref=e429]: Procurador(a) ou Controlador(a)-geral
    - option [ref=e430] [cursor=pointer]:
      - paragraph [ref=e431]: Diretor(a), Gerente ou Coordenador(a)
    - option [ref=e432] [cursor=pointer]:
      - paragraph [ref=e433]: Contabilidade, Finanças ou Controle interno
    - option [ref=e434] [cursor=pointer]:
      - paragraph [ref=e435]: Tributação e Fiscalização
    - option [ref=e436] [cursor=pointer]:
      - paragraph [ref=e437]: Tecnologia da Informação
    - option [ref=e438] [cursor=pointer]:
      - paragraph [ref=e439]: Compras, Licitações e Contratos
    - option [ref=e440] [cursor=pointer]:
      - paragraph [ref=e441]: Recursos Humanos e Folha
    - option [ref=e442] [cursor=pointer]:
      - paragraph [ref=e443]: Assessor(a) ou Jurídico
    - option [ref=e444] [cursor=pointer]:
      - paragraph [ref=e445]: Professor(a) ou área da Educação
    - option [ref=e446] [cursor=pointer]:
      - paragraph [ref=e447]: Área da Saúde
    - option [ref=e448] [cursor=pointer]:
      - paragraph [ref=e449]: Servidor(a) administrativo ou técnico
    - option [ref=e450] [cursor=pointer]:
      - paragraph [ref=e451]: Outro
```

# Test source

```ts
  1  | import { Page, expect } from '@playwright/test';
  2  | import { faker } from '@faker-js/faker';
  3  | import EmpresaElements from '../elements/EmpresaElements';
  4  | import BasePage from './BasePage';
  5  | 
  6  | export default class EmpresaPage extends BasePage {
  7  |   readonly empresaElements: EmpresaElements;
  8  | 
  9  |   constructor(readonly page: Page) {
  10 |     super(page);
  11 |     this.page = page;
  12 |     this.empresaElements = new EmpresaElements(page);
  13 |   }
  14 | 
  15 |   async preencherCamposValidos(): Promise<void> {
  16 |     await this.empresaElements.getBotaoAceitarCookies().click();
  17 |     await this.empresaElements.getCampoAssunto().click();
  18 |     await this.empresaElements.getValorDemo().click();
  19 |     await this.empresaElements.getCampoNome().fill(faker.person.firstName());
  20 |     await this.empresaElements.getCampoEmail().fill(faker.internet.email());
  21 |     await this.empresaElements.getCampoTelefone().fill(faker.phone.number());
  22 |     await this.empresaElements.getCampoTipo().click();
  23 |     await this.empresaElements.getValorPrefa().click();
  24 |     await this.empresaElements.getCampoCargo().click();
> 25 |     await this.empresaElements.getValorGestor().click();
     |                                                 ^ Error: locator.click: Test timeout of 120000ms exceeded.
  26 |     await this.empresaElements.getCampoEstado().click();
  27 |     await this.empresaElements.getValorSantaCatarina().click();
  28 |     await this.empresaElements.getCampoCidade().fill('Criciúma');
  29 |     await this.empresaElements.getCampoMensagem().fill(faker.lorem.words(20));
  30 |   }
  31 | 
  32 |   async enviarFormulario(): Promise<void> {
  33 |     await this.empresaElements.getCheckAceito().click();
  34 |     await this.empresaElements.getBotaoEnviar().click();
  35 |   }
  36 | 
  37 |   async validarEnvio(): Promise<void> {
  38 |     await expect(this.empresaElements.getMensagemSucesso()).toBeVisible();
  39 |   }
  40 | }
  41 | 
```