// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GhostMap',
  tagline: 'Project structure, inside your code.',
  favicon: 'img/favicon.png',

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
      image: 'img/ghost-logo.png',
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: false,
      },
      announcementBar: {
        id: 'v1-prerelease',
        content:
          'GhostMap V1 is in pre-release. @ghost syntax and settings are stable, but may still change before 1.0.',
        backgroundColor: '#0e0e1a',
        textColor: '#eeeef5',
        isCloseable: true,
      },
      navbar: {
        title: 'GhostMap',
        logo: {
          alt: 'GhostMap logo',
          src: 'img/ghost-logo.png',
        },
        items: [
          {
            to: '/',
            label: 'Start',
            position: 'left',
          },
          {
            to: '/overview',
            label: 'Overview',
            position: 'left',
          },
          {
            to: '/changelog',
            label: 'Changelog',
            position: 'left',
          },
          {
            href: 'mailto:getghostmap@proton.me',
            label: 'Contact',
            position: 'right',
          },
          {
            to: '/install',
            label: 'Install',
            position: 'right',
            className: 'navbar-cta',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Product',
            items: [
              {label: 'Start', to: '/'},
              {label: 'Overview', to: '/overview'},
              {label: 'Install', to: '/install'},
              {label: 'Changelog', to: '/changelog'},
            ],
          },
          {
            title: 'Legal',
            items: [
              {label: 'Legal & Support', to: '/legal-support'},
              {label: 'Privacy Policy', to: '/legal/privacy'},
              {label: 'Terms of Use', to: '/legal/terms'},
              {label: 'Third-Party Notices', to: '/legal/notices'},
              {label: 'Disclaimer', to: '/legal/disclaimer'},
            ],
          },
          {
            title: 'Community',
            items: [
              {label: 'Support GhostMap', href: 'https://ghostmap-liard.vercel.app/#support'},
              {label: 'getghostmap@proton.me', href: 'mailto:getghostmap@proton.me'},
              {label: 'Report a bug', href: 'mailto:getghostmap@proton.me'},
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
