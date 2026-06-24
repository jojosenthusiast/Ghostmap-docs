// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    'intro',
    'overview',
    {
      type: 'category',
      label: 'Get started',
      items: [
        'install',
        'vsix-install',
        'get-started/requirements',
        'get-started/first-5-minutes',
      ],
    },
    {
      type: 'category',
      label: 'Guide',
      items: [
        'guide/philosophy',
        'guide/symbol',
        'guide/ghost-metadata',
        'guide/ghost-status',
        'guide/ghost-description',
        'guide/anchor',
        'guide/semantic-anchor',
        'guide/contextual-anchor',
        'guide/range-anchor',
        'guide/ownership-radius',
        'guide/symbol-validity-gate',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/syntax',
        'reference/ghost-tree',
        'reference/diagnostics',
        'reference/settings',
        'reference/performance',
        'keyboard-shortcuts',
      ],
    },
    {
      type: 'category',
      label: 'Architecture',
      items: [
        'architecture/v1',
        'architecture/loading-policy',
        'architecture/local-state',
      ],
    },
    {
      type: 'category',
      label: 'Project',
      items: [
        'status/project-status',
        'roadmap/v2',
        'data-location',
        'troubleshooting',
        'faq',
        'glossary',
        'uninstall',
      ],
    },
    'legal-support',
    'changelog',
    {
      type: 'category',
      label: 'Legal',
      items: [
        'legal/privacy',
        'legal/terms',
        'legal/notices',
        'legal/disclaimer',
      ],
    },
  ],
};

export default sidebars;
