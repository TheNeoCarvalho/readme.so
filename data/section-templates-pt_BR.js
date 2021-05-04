export const pt_BR = [
  {
    slug: 'title-and-description',
    name: 'Título e Descrição',
    markdown: `
# Titulo do Projeto 

Uma breve descrição do que este projeto faz e para quem se destina

`,
  },
  {
    slug: 'installation',
    name: 'Instalação',
    markdown: `
## Instalação 

Instalar meu-projeto com npm

\`\`\`bash 
  npm install meu-projeto
  cd meu-projeto
\`\`\`
    `,
  },
  {
    slug: 'logo',
    name: 'Logo',
    markdown: `
![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)

    `,
  },
  {
    slug: 'run-locally',
    name: 'Executar Localmente',
    markdown: `
## Executar Localmente

Clone o projeto

\`\`\`bash
  git clone https://link-to-project
\`\`\`

Vá até o diretorio do projeto.

\`\`\`bash
  cd my-project
\`\`\`

Instale as dependências

\`\`\`bash
  npm install
\`\`\`

Inicie o server

\`\`\`bash
  npm run start
\`\`\`

  `,
  },
  {
    slug: 'screenshots',
    name: 'Screenshots',
    markdown: `
## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

  `,
  },
  {
    slug: 'env-variables',
    name: 'Variáveis de Ambiente',
    markdown: `
## Variáveis de Ambiente

Para executar este projeto, você precisa adiconar as variáveis de ambiente no seu arquivo .env

\`API_KEY\`

\`ANOTHER_API_KEY\`

  `,
  },
  {
    slug: 'features',
    name: 'Funcionalidades',
    markdown: `
## Funcionalidades

- Light/dark mode toggle
- Live previews
- Fullscreen mode
- Cross platform

  `,
  },
  {
    slug: 'usage-examples',
    name: 'Uso/Exemplos',
    markdown: `
## Uso/Exemplos

\`\`\`javascript
import Component from 'my-project'

function App() {
  return <Component />
}
\`\`\`

  `,
  },
  {
    slug: 'api',
    name: 'Referência a API',
    markdown: `
## Referência a API

#### Retorna todos os itens

\`\`\`http
  GET /api/items
\`\`\`

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| \`api_key\` | \`string\` | **Required**. Your API key |

#### Retorn item

\`\`\`http
  GET /api/items/$\{id}
\`\`\`

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| \`id\`      | \`string\` | **Required**. Id of item to fetch |

#### add(num1, num2)

Recebe dois numeros e retorna a soma

  `,
  },
  {
    slug: 'contributing',
    name: 'Contribuição',
    markdown: `
## Contribuição

Contribuidores são sempre bem vindos!

Veja em \`contribuir.md \` para saber como começar a contribuir.

Siga o \`código de conduta \` deste projeto.

  `,
  },
  {
    slug: 'tests',
    name: 'Executando Testes',
    markdown: `
## Executando Testes

To run tests, run the following command
Para executar os testes, execute o seguinte comando

\`\`\`bash
  npm run test
\`\`\`

  `,
  },
  {
    slug: 'license',
    name: 'Licença',
    markdown: `
## Licença

[MIT](https://choosealicense.com/licenses/mit/)

  `,
  },
  {
    slug: 'badges',
    name: 'Badges/Emblemas',
    markdown: `
## Badges/Emblemas

Adicione emblemas de algum lugar como: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

  `,
  },
  {
    slug: 'roadmap',
    name: 'Roteiro',
    markdown: `
## Roteiro

- Suporte de navegador adicional

- Adicionar mais integrações

  `,
  },
  {
    slug: 'authors',
    name: 'Autores',
    markdown: `
## Autores

- [@katherinepeterson](https://www.github.com/katherinepeterson)
- [@theneocarvalho](https://www.github.com/theneocarvalho)

  `,
  },
  {
    slug: 'acknowledgement',
    name: 'Créditos',
    markdown: `
## Créditos

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

  `,
  },
  {
    slug: 'support',
    name: 'Suporte',
    markdown: `
## Suporte

Para suporte, envie um email para fake@fake.com ou no nosso canal do Slack.
  `,
  },
  {
    slug: 'feedback',
    name: 'Feedback',
    markdown: `
## Feedback

Se você tem algum feedback, por favor entre em contato conosco pelo email fake@fake.com

  `,
  },
  {
    slug: 'related',
    name: 'Relacionado',
    markdown: `
## Relacionado

Aqui estão alguns projetos relacionados

[Awesome README](https://github.com/matiassingers/awesome-readme)

  `,
  },
  {
    slug: 'demo',
    name: 'Demonstração',
    markdown: `
## Demo

Insira um gif ou link para a sua demonstração

  `,
  },
  {
    slug: 'tech',
    name: 'Tecnologias',
    markdown: `
## Tecnologias Usadas

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express

  `,
  },
  {
    slug: 'optimizations',
    name: 'Otimizações',
    markdown: `
## Otimizações

Que otimizações você fez em seu código? Por exemplo. refatoraçõess, melhorias de desempenho, acessibilidade
  `,
  },
  {
    slug: 'lessons',
    name: 'Lições',
    markdown: `
## Lições aprendidas

O que você aprendeu ao construir este projeto? Que desafios você enfrentou e como os superou?
  `,
  },
  {
    slug: 'faq',
    name: 'FAQ',
    markdown: `
## FAQ

#### Pergunta 1

Answer 1

#### Pergunta 2

Answer 2

  `,
  },
  {
    slug: 'used-by',
    name: 'Usado por',
    markdown: `
## Used By

Este projeto é utilizado pelas seguintes empresas:

- Empresa A
- Empresa B

  `,
  },
  {
    slug: 'documentation',
    name: 'Documentação',
    markdown: `
## Documentação

[Documentation](https://linktodocumentation)

  `,
  },
  {
    slug: 'deployment',
    name: 'Deploy/Implementar',
    markdown: `
## Deploy/Implementar

Para deploy/implementar este projeto

\`\`\`bash
  npm run deploy
\`\`\`

  `,
  },
  {
    slug: 'appendix',
    name: 'Apêndice',
    markdown: `
## Apêndice

Qualquer informação adicional vai aqui

  `,
  },
]
