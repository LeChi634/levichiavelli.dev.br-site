/**
 * Conteúdo central do site (PT/EN) e dados de contato.
 *
 * Regra de tom: cargo e prova primeiro, credencial depois. "Estudante/Etec"
 * aparece uma única vez (na seção Sobre), sem repetir o que o cargo já diz.
 */

export type Lang = 'pt' | 'en';

export interface Localized {
  pt: string;
  en: string;
}

/** Card de projeto. `repo` e `demo` são opcionais: só entram links públicos. */
export interface ProjectItem {
  title: Localized;
  description: Localized;
  stack: string;
  repo?: string;
  demo?: string;
  site?: string;
  panel?: string;
  featured?: boolean;
  tag?: Localized;
  highlights?: Localized[];
}

export const site = {
  name: 'Levi Chiavelli',
  url: 'https://levichiavelli.dev.br',
  github: 'https://github.com/LeChi634',
  accent: '#34d399',
} as const;

/** Dados de contato reais. */
export const contact = {
  email: 'levichiavelli@gmail.com',
  emailHref: 'mailto:levichiavelli@gmail.com',
  linkedin: 'linkedin.com/in/levi-chiavelli',
  linkedinHref: 'https://www.linkedin.com/in/levi-chiavelli/',
};

export const content = {
  meta: {
    title: {
      pt: 'Levi Chiavelli — Desenvolvedor Web',
      en: 'Levi Chiavelli — Web Developer',
    },
    description: {
      pt: 'Portfólio de Levi Chiavelli, desenvolvedor web: projetos publicados, habilidades técnicas e contato.',
      en: 'Portfolio of Levi Chiavelli, web developer: published projects, technical skills and contact.',
    },
  },

  nav: {
    about: { pt: 'Sobre', en: 'About' },
    skills: { pt: 'Habilidades', en: 'Skills' },
    projects: { pt: 'Projetos', en: 'Projects' },
    contact: { pt: 'Contato', en: 'Contact' },
  },

  hero: {
    eyebrow: { pt: 'Portfólio', en: 'Portfolio' },
    role: {
      pt: 'Desenvolvedor Web em formação',
      en: 'Web Developer in training',
    },
    tagline: {
      pt: 'Projeto e publico sites e sistemas web para pequenos negócios, do layout à entrega. Projetos em produção desenvolvidos com TypeScript, Next.js, React, Astro, HTML, CSS, JavaScript e Python.',
      en: 'I design and ship websites and web systems for small businesses, from layout to delivery. Production projects built with TypeScript, Next.js, React, Astro, HTML, CSS, JavaScript and Python.',
    },
    ctaProjects: { pt: 'Ver projetos', en: 'View projects' },
    ctaContact: { pt: 'Falar comigo', en: 'Get in touch' },
    codeLabel: { pt: '// perfil do desenvolvedor', en: '// developer profile' },
  },

  about: {
    kicker: { pt: '01 — Sobre', en: '01 — About' },
    heading: { pt: 'Sobre mim', en: 'About me' },
    paragraphs: [
      {
        pt: 'Sou Levi Chiavelli, desenvolvedor web em formação. Curso o técnico em Desenvolvimento de Sistemas na Etec e uso cada projeto do portfólio para levar a teoria à prática — os projetos abaixo estão publicados e acessíveis online.',
        en: "I'm Levi Chiavelli, a web developer in training. I'm taking the Systems Development technical course at Etec, and every portfolio project is where theory meets practice — the projects below are published and accessible online.",
      },
      {
        pt: 'Trabalho com TypeScript, React, Next.js, Astro, HTML, CSS e JavaScript no front-end, e com Python, Java e SQL no back-end. Meu foco é entregar interfaces simples, rápidas e responsivas, com código organizado e atenção aos detalhes, do layout à publicação.',
        en: 'I work with TypeScript, React, Next.js, Astro, HTML, CSS and JavaScript on the front-end, and with Python, Java and SQL on the back-end. My focus is delivering simple, fast, responsive interfaces, with organized code and attention to detail, from layout to deployment.',
      },
    ],
  },

  skills: {
    kicker: { pt: '02 — Habilidades', en: '02 — Skills' },
    heading: { pt: 'Habilidades técnicas', en: 'Technical skills' },
    intro: {
      pt: 'Tecnologias e ferramentas que aplico nos meus projetos.',
      en: 'Technologies and tools I apply in my projects.',
    },
    groups: [
      {
        title: { pt: 'Front-end', en: 'Front-end' },
        items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Astro', 'Tailwind CSS'],
      },
      {
        title: { pt: 'Back-end', en: 'Back-end' },
        items: ['Python', 'Java', { pt: 'POO', en: 'OOP' }, { pt: 'Lógica', en: 'Logic' }],
      },
      {
        title: { pt: 'Banco de dados', en: 'Databases' },
        items: ['MySQL', 'SQL', { pt: 'Modelagem', en: 'Data Modeling' }],
      },
      {
        title: { pt: 'Ferramentas', en: 'Tools' },
        items: ['Git', 'GitHub', 'VS Code', 'Cloudflare Workers', 'Vercel'],
      },
    ],
  },

  projects: {
    kicker: { pt: '03 — Projetos', en: '03 — Projects' },
    heading: { pt: 'Projetos', en: 'Projects' },
    intro: {
      pt: 'Projetos reais em produção e demonstrações comerciais interativas — do design à implantação.',
      en: 'Real production client work and interactive commercial showcases — from design to deployment.',
    },
    repoLabel: { pt: 'Repositório', en: 'Repository' },
    demoLabel: { pt: 'Ver demo', en: 'Live demo' },
    siteLabel: { pt: 'Acessar site no ar', en: 'Visit live site' },
    panelLabel: { pt: 'Testar painel do cardápio', en: 'Try menu panel' },
    items: [
      {
        featured: true,
        tag: { pt: 'Destaque Especial & Maior Diferencial', en: 'Flagship Showcase & Key Differentiator' },
        title: { pt: 'Brasa Lenta Burger', en: 'Brasa Lenta Burger' },
        description: {
          pt: 'Landing page conceitual de alta conversão para hamburguerias artesanais. O principal diferencial técnico do projeto é a experiência visual de montagem do hambúrguer em camadas impulsionada por rolagem (ScrollCraft), somada a um painel administrativo completo e reativo (/hamburgueria/painel/) onde o cliente cadastra, reordena e edita fotos, lanches e preços em tempo real no navegador (localStorage).',
          en: 'High-conversion conceptual landing page for artisanal burger joints. The flagship technical differentiator is the cinematic scroll-driven burger assembly (ScrollCraft), coupled with a reactive client-side store panel (/hamburgueria/painel/) allowing visitors to add, reorder, and edit burger items, photos, and prices directly in the browser with local persistence in real time.',
        },
        stack: 'Next.js 15, React 19, TypeScript, Tailwind CSS, ScrollCraft',
        demo: 'https://brasalenta.levichiavelli.dev.br/hamburgueria/',
        panel: 'https://brasalenta.levichiavelli.dev.br/hamburgueria/painel/',
        highlights: [
          {
            pt: 'Montagem cinematográfica em camadas orientada a scroll (ScrollCraft)',
            en: 'Cinematic scroll-driven layer assembly (ScrollCraft)',
          },
          {
            pt: 'Painel administrativo reativo no navegador com persistência em localStorage',
            en: 'Reactive browser admin panel with instant localStorage persistence',
          },
          {
            pt: 'Fluxo cart-to-WhatsApp e formatação monetária estrita em centavos BRL',
            en: 'Cart-to-WhatsApp direct checkout with strict integer BRL currency',
          },
        ],
      },
      {
        tag: { pt: 'Cliente Real — Em Produção', en: 'Live Production Client' },
        title: { pt: 'JuNet — Suporte Técnico em TI', en: 'JuNet — Corporate IT Support' },
        description: {
          pt: 'Presença digital institucional e canal de atendimento direto para empresa consolidada de suporte corporativo e infraestrutura de TI em Bauru e região (mais de 500 empresas atendidas). Projeto real em operação com foco em autoridade corporativa, alta performance, acessibilidade e conversão via WhatsApp.',
          en: 'Institutional web presence and direct customer support channel for an established corporate IT and infrastructure provider in Bauru (over 500 businesses served). Real client production website engineered for corporate credibility, accessibility and WhatsApp lead generation.',
        },
        stack: 'PHP, Tailwind CSS, JavaScript, Nginx',
        site: 'https://junet.com.br',
      },
      {
        tag: { pt: 'Demo Comercial', en: 'Commercial Demo' },
        title: { pt: 'AG2 Portas', en: 'AG2 Portas' },
        description: {
          pt: 'Landing page comercial da AG2 Portas, empresa que instala portas de madeira sob medida em Bauru e região. O site destaca catálogo de modelos, reúne avaliações reais do Google e leva pedidos de orçamento formatados direto para o WhatsApp comercial.',
          en: 'Commercial landing page for AG2 Portas, custom door installation specialists in Bauru and nearby cities. Presents door catalog, real Google reviews and routes quote inquiries straight to WhatsApp.',
        },
        stack: 'HTML, CSS, JavaScript, Cloudflare Workers',
        demo: 'https://ag2portas.levichiavelli.dev.br',
      },
      {
        tag: { pt: 'Demo Comercial', en: 'Commercial Demo' },
        title: { pt: 'Martha Office Hotel', en: 'Martha Office Hotel' },
        description: {
          pt: 'Landing page para o Martha Office Hotel, no centro de Bauru (SP), reconstruída a partir das informações públicas do hotel. Reúne quartos, café da manhã e localização, transformando consultas de reserva em mensagens estruturadas para o WhatsApp.',
          en: "Landing page for Martha Office Hotel, in downtown Bauru, Brazil, rebuilt from the hotel's public information. Brings together rooms, breakfast and location, turning booking inquiries into pre-filled WhatsApp messages.",
        },
        stack: 'HTML, CSS, JavaScript, Python',
        demo: 'https://marthahotel.levichiavelli.dev.br',
      },
    ] as ProjectItem[],
  },

  contact: {
    kicker: { pt: '04 — Contato', en: '04 — Contact' },
    heading: { pt: 'Vamos conversar', en: "Let's talk" },
    intro: {
      pt: 'Estou aberto a oportunidades de estágio, projetos freelance e conversas sobre desenvolvimento. Escolha o canal de sua preferência.',
      en: 'I am open to internships, freelance projects and conversations about development. Pick the channel you prefer.',
    },
    emailLabel: { pt: 'E-mail', en: 'Email' },
    githubLabel: { pt: 'GitHub', en: 'GitHub' },
    linkedinLabel: { pt: 'LinkedIn', en: 'LinkedIn' },
    cta: { pt: 'Enviar e-mail', en: 'Send email' },
  },

  footer: {
    rights: {
      pt: 'Todos os direitos reservados.',
      en: 'All rights reserved.',
    },
    builtWith: {
      pt: 'Feito com Astro + Tailwind CSS.',
      en: 'Built with Astro + Tailwind CSS.',
    },
  },
} as const;
