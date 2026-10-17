# levichiavelli.dev.br

Código-fonte do meu portfólio pessoal: uma página única, bilíngue (PT/EN), com tema escuro e acento `#34d399`.

**No ar em:** https://levichiavelli.dev.br

## O que tem

- One-page com seções de apresentação, habilidades, projetos e contato
- Alternância de idioma PT ⇄ EN sem recarregar a página (o `?lang=en` também funciona e a escolha fica salva em `localStorage`)
- Tema escuro único, sem botão de troca
- Zero framework de UI no cliente: só JavaScript puro, HTML semântico e CSS
- Conteúdo centralizado em um único arquivo TypeScript

## Stack

| Peça | Escolha |
|---|---|
| Framework | [Astro 6](https://astro.build) — geração estática, componentes `.astro` |
| Estilo | Tailwind CSS 4 via PostCSS |
| Linguagem | TypeScript (conteúdo) + HTML/Astro |
| Deploy | Vercel |

## Estrutura

```
src/
  components/   Header, Hero, About, Skills, Projects, Contact, Footer e o
                componente T (traducao PT/EN)
  data/site.ts  todo o conteudo do site: textos, links e dados de contato
  layouts/      BaseLayout.astro (head, SEO, toggle de idioma)
  pages/        index.astro e 404.astro
  styles/       global.css (Tailwind + tokens do tema)
public/         favicon, og-image, robots.txt e sitemap.xml
astro.config.mjs
postcss.config.mjs
```

## Rodando localmente

Requer Node.js **>= 22.12**.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
npm run preview  # serve o build
```

## Decisões técnicas

- **Tailwind via PostCSS, não via `@tailwindcss/vite`**: o plugin oficial do Vite conflita com o Vite 7 que o Astro 6 usa.
- **Toggle de idioma sem framework**: o `BaseLayout` marca o `<html lang>` e o componente `T` resolve cada string a partir de `src/data/site.ts`; a troca é feita direto no DOM.
- **Conteúdo separado da apresentação**: dá para mudar textos, projetos e contato sem tocar em componente.

Os scripts internos de geração de imagem Open Graph e as notas de manutenção ficam em um repositório privado separado.