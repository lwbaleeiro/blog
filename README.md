# Luan Baleeiro — Blog

Blog pessoal construído com [Astro](https://astro.build).

## Setup

### 1. Criar o projeto Astro

```bash
npm create astro@latest luan-blog -- --template minimal --no-install
cd luan-blog
npm install
```

### 2. Copiar os arquivos deste projeto

Substitua / adicione os arquivos listados abaixo na raiz do projeto recém-criado.

### 3. Estrutura de arquivos a criar

```
src
├── components
│   ├── PostCard.astro
│   └── Sidebar.astro
├── content
│   ├── about
│   │   └── index.md
│   └── blog
│       ├── copy-paste-devops.md
│       ├── deploy-free-app.md
│       └── old-vs-modern-java.md
├── content.config.ts
├── layouts
│   └── BaseLayout.astro
└── pages
    ├── about.astro
    ├── index.astro
    └── [slug].astro
```

### 4. Rodar em desenvolvimento

```bash
npm run dev
```

### 5. Build para produção

```bash
npm run build
npm run preview
```

---

## Como adicionar posts

Crie um arquivo `.md` em `src/content/blog/`:

```bash
touch src/content/blog/meu-novo-post.md
```

O frontmatter obrigatório é:

```md
---
title: "Título do Post"
date: 2024-03-15
tags: ["devops", "kubernetes"]
description: "Resumo curto que aparece no card."
---

Conteúdo aqui...
```

---

## Personalização

- **Foto:** substitua `public/avatar.jpg` pela sua foto (recomendado: 200×200px)
- **Links sociais:** edite `src/components/Sidebar.astro` nas variáveis do topo
- **Nome/bio:** edite `src/components/Sidebar.astro`
