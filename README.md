# levichiavelli.dev.br

Site publicado do portfólio de **Levi Chiavelli**.

- Produção: https://levichiavelli.dev.br
- Stack: Astro 6 + Tailwind CSS 4
- One-page bilíngue (PT/EN), tema escuro único com acento `#34d399`

Este repositório contém apenas o **build estático** gerado pelo Astro: HTML, CSS, JavaScript e imagens. O código-fonte — componentes, conteúdo, configuração e ferramentas — fica no repositório privado de desenvolvimento.

## Estrutura

```
index.html        página principal (PT; a versão EN é alternada no cliente)
404.html          página de erro
_astro/           CSS com hash de conteúdo
favicon.svg
og-image.png      imagem de compartilhamento
robots.txt
sitemap.xml
```

## Publicação

O conteúdo é gerado por `npm run build` no repositório de desenvolvimento e copiado para cá. O deploy de produção é feito pela Vercel.
