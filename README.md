# 🖥️ Portfolio macOS Style

Um portfólio interativo inspirado na experiência de uso do **macOS**.

A proposta é fugir do formato tradicional de portfólio e transformar a apresentação profissional em uma experiência semelhante a um sistema operacional, permitindo que recrutadores e visitantes explorem projetos, informações e conteúdos através de uma interface imersiva e interativa.

## ✨ Funcionalidades

- 🖥️ **Desktop Interativo** — Interface inspirada no desktop do macOS.
- 🚀 **Boot Screen** — Animação de inicialização ao acessar o portfólio.
- 📱 **Dock Interativo** — Dock com efeito de ampliação inspirado no macOS.
- 🪟 **Sistema de Janelas** — Janelas arrastáveis, redimensionáveis e organizadas por `Z-Index`.
- 📁 **Finder** — Navegação por arquivos, pastas e projetos.
- 💻 **Terminal** — Terminal interativo integrado ao portfólio.
- 🌐 **Safari** — Navegador utilizado para exibir conteúdos e blog.
- 🖼️ **Photos** — Visualizador de imagens e projetos.
- 👤 **Contacts** — Área com informações de contato.
- 📄 **Currículo** — Visualização do currículo diretamente na aplicação.

## 🚀 Tecnologias

| Tecnologia | Utilização |
|------------|------------|
| **React.js** | Construção da interface e componentes |
| **GSAP** | Animações e interações |
| **Tailwind CSS** | Estilização e responsividade |
| **Zustand** | Gerenciamento de estado global |
| **Lucide React** | Ícones da interface |
| **React PDF** | Visualização do currículo |

## 🏗️ Arquitetura

O projeto foi desenvolvido pensando em **componentização, reutilização e organização do estado da aplicação**.

Entre as principais abordagens utilizadas estão:

- Componentes reutilizáveis para as janelas do sistema.
- **Higher-Order Components (HOC)** para abstração e reutilização de comportamentos.
- **Zustand** para gerenciamento do estado global.
- Controle de `Z-Index` para gerenciamento da ordem das janelas.
- **GSAP** para criar animações fluidas e interações mais próximas da experiência de um desktop real.

## 🛠️ Como executar

### 1. Clone o repositório

```bash
git clone https://github.com/Thiago-Graciano/MacOsPortfolio.git
```

### 2. Acesse a pasta

```bash
cd MacOsPortfolio
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

## 📂 Estrutura do projeto

```bash
src/
├── components/
├── pages/
├── store/
├── assets/
└── ...
```

> A estrutura pode variar de acordo com a organização atual do projeto.

## 🎯 Objetivo

Este projeto foi desenvolvido para apresentar meu trabalho de uma forma diferente dos portfólios tradicionais. 

Em vez de simplesmente navegar entre páginas, o visitante pode **interagir com um ambiente inspirado em um sistema operacional**, explorando projetos, currículo, informações pessoais e outros conteúdos de forma mais dinâmica e imersiva.

Feito com base no tutorial incrível de [JavaScript Mastery](https://www.youtube.com/@javascriptmastery). Todo o conceito de interface, arquitetura de componentes e as implementações de animação com GSAP foram inspiradas no conteúdo disponibilizado por ele.

[Vídeo Original](https://www.youtube.com/watch?v=j9ZD_hlyHOA&list=WL&index=32&t=506s): Build and Deploy a MacOS style Portfolio with React, GSAP & Tailwind

A proposta combina:

- 🎨 **Design**
- 💻 **Desenvolvimento Front-end**
- ⚡ **Animações e interações**
- 🧩 **Engenharia de componentes**
- 🧠 **Gerenciamento de estado**
- 🚀 **Experiência do usuário**
