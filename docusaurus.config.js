// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GhostMap',
  tagline: 'Estructura de proyecto, dentro de tu código.',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://ghostmap-docs.vercel.app',
  baseUrl: '/',

  // Repo identity (gh-pages deploy is no longer the live channel; site is on
  // Vercel). Kept for editUrl and tooling references.
  organizationName: 'MarxWellB',
  projectName: 'Ghostmap-docs',
  deploymentBranch: 'gh-pages',

  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'theme-color',
        content: '#080810',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'author',
        content: 'GhostMap contributors',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'referrer',
        content: 'strict-origin-when-cross-origin',
      },
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // editUrl is omitted while the docs repository is private.
          // Add it back only after a public repository URL exists.
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/ghost-logo.svg',
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: false,
      },
      announcementBar: {
        id: 'v1-prerelease',
        content:
          'GhostMap V1 está en pre-release. La sintaxis @ghost y los settings son estables, pero pueden ajustarse en versiones futuras antes de la 1.0.',
        backgroundColor: '#0e0e1a',
        textColor: '#eeeef5',
        isCloseable: true,
      },
      navbar: {
        title: 'GhostMap',
        logo: {
          alt: 'GhostMap logo',
          src: 'img/ghost-logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'mailto:getghostmap@proton.me',
            label: 'Contacto',
            position: 'right',
          },
          {
            to: '/get-started/instalacion',
            label: 'Instalar (VSIX local)',
            position: 'right',
            className: 'navbar-cta',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Producto',
            items: [
              {label: 'Inicio', to: '/'},
              {label: 'Roadmap', to: '/roadmap/vision-v2'},
              {label: 'Estado del proyecto', to: '/status/estado-del-proyecto'},
            ],
          },
          {
            title: 'Documentación',
            items: [
              {label: 'Guía rápida', to: '/get-started/instalacion'},
              {label: 'Conceptos', to: '/guide/symbol'},
              {label: 'Referencia', to: '/reference/sintaxis'},
              {label: 'FAQ', to: '/faq'},
            ],
          },
          {
            title: 'Legal',
            items: [
              {label: 'Privacy Policy', to: '/legal/privacy'},
              {label: 'Terms of Use', to: '/legal/terms'},
              {label: 'Third-Party Notices', to: '/legal/notices'},
              {label: 'Disclaimer', to: '/legal/disclaimer'},
              {label: 'Consultas legales (email)', href: 'mailto:getghostmap@proton.me'},
            ],
          },
          {
            title: 'Comunidad',
            items: [
              {label: 'Support GhostMap', href: 'https://ghostmap-liard.vercel.app/#support'},
              {label: 'getghostmap@proton.me', href: 'mailto:getghostmap@proton.me'},
              {label: 'Reportar un bug', href: 'mailto:getghostmap@proton.me'},
            ],
          },
        ],
        copyright: `Free for personal, educational &amp; evaluation use · Commercial use needs a license · © ${new Date().getFullYear()} GhostMap`,
      },
      prism: {
        theme: prismThemes.dracula,
        darkTheme: prismThemes.dracula,
        additionalLanguages: [
          'typescript',
          'tsx',
          'jsx',
          'python',
          'java',
          'csharp',
          'cpp',
          'c',
          'go',
          'rust',
          'php',
          'ruby',
          'dart',
          'scala',
          'solidity',
          'kotlin',
          'swift',
          'elixir',
          'groovy',
          'julia',
          'bash',
          'shell-session',
          'powershell',
          'json',
          'yaml',
          'toml',
          'diff',
          'markdown',
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
    }),
};

export default config;
