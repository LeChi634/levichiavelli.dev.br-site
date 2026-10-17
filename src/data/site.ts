/**
 * Conteúdo central do site (PT/EN) e dados de contato.
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
      pt: 'Levi Chiavelli — Portfólio',
      en: 'Levi Chiavelli — Portfolio',
    },
    description: {
      pt: 'Portfólio de Levi Chiavelli: projetos, habilidades e contato de um estudante de Desenvolvimento de Sistemas.',
      en: 'Portfolio of Levi Chiavelli: projects, skills and contact details of a Systems Development student.',
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
      pt: 'Desenvolvedor de Sistemas em formação',
      en: 'Systems Developer in training',
    },
    tagline: {
      pt: 'Estudante de Desenvolvimento de Sistemas na Etec. Construo sites e sistemas web, aprendendo na prática a cada projeto.',
      en: 'Systems Development student at Etec. I build websites and web systems, learning hands-on with every project.',
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
        pt: 'Sou Levi Chiavelli, estudante do curso técnico de Desenvolvimento de Sistemas na Etec. Estou construindo minha base em programação, banco de dados e desenvolvimento web — e este site é onde reúno o que venho aprendendo.',
        en: "I'm Levi Chiavelli, a Systems Development student at Etec. I'm building my foundation in programming, databases and web development — and this site is where I gather what I've been learning.",
      },
      {
        pt: 'Gosto de transformar ideias em interfaces simples e funcionais, com código organizado e atenção aos detalhes. Meu foco atual é evoluir em front-end e back-end, criando projetos que resolvam problemas reais.',
        en: 'I like turning ideas into simple, functional interfaces, with organized code and attention to detail. My current focus is growing in front-end and back-end, building projects that solve real problems.',
      },
    ],
  },

  skills: {
    kicker: { pt: '02 — Habilidades', en: '02 — Skills' },
    heading: { pt: 'O que eu estudo', en: 'What I study' },
    intro: {
      pt: 'Tecnologias e ferramentas que estudo e uso nos meus projetos.',
      en: 'Technologies and tools I study and use in my projects.',
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
      pt: 'Projetos reais que venho desenvolvendo, do design à implementação.',
      en: 'Real projects I have been building, from design to implementation.',
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
      },
    ] as ProjectItem[],
  },

  contact: {
    kicker: { pt: '04 — Contato', en: '04 — Contact' },
    heading: { pt: 'Vamos conversar', en: "Let's talk" },
    intro: {
      pt: 'Quer trocar ideia sobre um projeto, tecnologia ou uma oportunidade? Me chama por um destes canais.',
      en: 'Want to talk about a project, technology or an opportunity? Reach me through one of these channels.',
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
