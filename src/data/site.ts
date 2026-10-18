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
      pt: 'Projeto e publico sites e sistemas web para pequenos negócios, do layout à entrega. Dois projetos já no ar, desenvolvidos com HTML, CSS, JavaScript e Python.',
      en: 'I design and ship websites and web systems for small businesses, from layout to delivery. Two projects already live, built with HTML, CSS, JavaScript and Python.',
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
        pt: 'Sou Levi Chiavelli, desenvolvedor web em formação. Curso o técnico em Desenvolvimento de Sistemas na Etec e uso cada projeto do portfólio para levar a teoria à prática — os dois trabalhos abaixo estão publicados e acessíveis em seus endereços definitivos.',
        en: "I'm Levi Chiavelli, a web developer in training. I'm taking the Systems Development technical course at Etec, and every portfolio project is where theory meets practice — both projects below are published and running at their final addresses.",
      },
      {
        pt: 'Trabalho com HTML, CSS, JavaScript e Python no front-end e com Java e SQL no back-end. Meu foco é entregar interfaces simples, rápidas e responsivas, com código organizado e atenção aos detalhes, do layout à publicação.',
        en: 'I work with HTML, CSS, JavaScript and Python on the front-end, and with Java and SQL on the back-end. My focus is delivering simple, fast, responsive interfaces, with organized code and attention to detail, from layout to deployment.',
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
        items: ['HTML', 'CSS', 'JavaScript'],
      },
      {
        title: { pt: 'Back-end', en: 'Back-end' },
        items: ['Java', 'OOP', 'Lógica'],
      },
      {
        title: { pt: 'Banco de dados', en: 'Databases' },
        items: ['MySQL', 'SQL', 'Modelagem'],
      },
      {
        title: { pt: 'Ferramentas', en: 'Tools' },
        items: ['Git', 'GitHub', 'VS Code'],
      },
    ],
  },

  projects: {
    kicker: { pt: '03 — Projetos', en: '03 — Projects' },
    heading: { pt: 'Projetos', en: 'Projects' },
    intro: {
      pt: 'Projetos reais, publicados em domínio próprio — do design à implantação.',
      en: 'Real projects, published on custom domains — from design to deployment.',
    },
    repoLabel: { pt: 'Repositório', en: 'Repository' },
    demoLabel: { pt: 'Demo', en: 'Live demo' },
    items: [
      {
        title: { pt: 'AG2 Portas', en: 'AG2 Portas' },
        description: {
          pt: 'Landing page da AG2 Portas, empresa que instala portas de madeira na medida em Bauru e região. O site mostra os tipos de porta e os serviços, reúne avaliações reais do Google e leva o orçamento direto para o WhatsApp.',
          en: 'Landing page for AG2 Portas, a company that installs custom wooden doors in Bauru and nearby cities. It presents door types and services, shows real Google reviews and sends quote requests straight to WhatsApp.',
        },
        stack: 'HTML, CSS, JavaScript, Cloudflare Workers',
        demo: 'https://ag2portas.levichiavelli.dev.br',
      },
      {
        title: { pt: 'Martha Office Hotel', en: 'Martha Office Hotel' },
        description: {
          pt: 'Landing page para o Martha Office Hotel, no centro de Bauru (SP), reconstruída a partir das informações públicas do hotel. Reúne quartos, café da manhã e localização, e transforma o pedido de reserva em uma mensagem pronta no WhatsApp.',
          en: "Landing page for Martha Office Hotel, in downtown Bauru, Brazil, rebuilt from the hotel's public information. It brings together rooms, breakfast and location, and turns a booking request into a ready-to-send WhatsApp message.",
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
