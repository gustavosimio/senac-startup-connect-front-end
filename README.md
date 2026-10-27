# InvestCase — Front-End

Uma plataforma criada para aproximar **startups e investidores** de uma forma mais simples, organizada e conectada.

O **InvestCase** nasceu da ideia de criar um ambiente onde startups possam apresentar seus negócios e investidores possam descobrir novos projetos e oportunidades de investimento.

Esta é a aplicação **front-end** do projeto, responsável pela interface com o usuário, navegação entre fluxos e apresentação das telas do ecossistema.

## 💡 Sobre o projeto

O **InvestCase** funciona como uma rede voltada ao ecossistema de startups e investimentos.

A interface foi desenvolvida com foco na experiência do usuário (UX/UI), trazendo um design moderno no estilo *dark mode*, com painéis e fluxos dedicados para dois perfis principais:
- **Startups:** Acompanham visualizações de perfil, investidores interessados, métricas e alertas de rede.
- **Investidores:** Exploram recomendações alinhadas às suas teses de investimento, realizam buscas avançadas com filtros e gerenciam oportunidades.

## 🚧 Status

> **Interface do Front-End Concluída (com Dados Estáticos para Integração)**

Todas as telas e fluxos mapeados no Figma foram desenvolvidos e validados localmente. A aplicação conta com navegação fluida, filtros dinâmicos e estrutura pronta para se conectar à API back-end em C# / ASP.NET Core.

## 🛠️ Tecnologias

O front-end foi construído utilizando as seguintes tecnologias:

- **React** (Biblioteca principal)
- **Vite** (Build tool e servidor de desenvolvimento de alta performance)
- **JavaScript (ES6+)**
- **Tailwind CSS** (Estilização e utilitários visuais)
- **Lucide React** (Conjunto de ícones)
- **Git & GitHub**

## 🖥️ Páginas e Fluxos Implementados

A aplicação conta com os seguintes componentes e telas:

- **Autenticação e Seleção de Perfil:**
  - Login e Cadastro para Investidores
  - Login e Cadastro para Startups
- **Menu Inicial (Home Dashboards):**
  - Painel da Startup (Métricas, investidores interessados, eventos/editais)
  - Painel do Investidor (Grid de recomendações com compatibilidade)
- **Buscas Avançadas (Search):**
  - Busca de Startups com filtros por Segmento, Estágio, Faixa de Investimento e Localização
  - Busca de Investidores com filtros por Tipo, Área de Interesse, Faixa de Aporte e Localização
- **Oportunidades:**
  - Acompanhamento de status (*Match*, *Interesse Enviado*, *Sem Resposta*) para ambos os perfis
- **Alertas / Mensagens:**
  - Central de notificações e atividades do ecossistema com suporte a filtros e marcação de lidos

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
- Node.js instalado na sua máquina (versão 18+ recomendada)
- Git

### Passo a Passo

1. Clone o repositório:
`git clone [https://github.com/gustavosimio/senac-startup-connect-front-end.git](https://github.com/gustavosimio/senac-startup-connect-front-end.git)`

2. Acesse a pasta do projeto:
`cd senac-startup-connect-front-end`

3. Instale as dependências:
`npm install`

4. Inicie o servidor de desenvolvimento:
`npm run dev`

5. Acesse no navegador:
Abra o endereço `http://localhost:5173` no seu navegador.

## 🎯 Objetivo

Mais do que simplesmente listar startups ou investidores, queremos construir um ambiente que facilite a descoberta de oportunidades e ajude a criar conexões relevantes dentro do ecossistema.

O **InvestCase** está apenas começando. 🚀
