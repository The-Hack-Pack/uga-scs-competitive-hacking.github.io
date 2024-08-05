import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import lunrSearch from 'docusaurus-lunr-search';

const config: Config = {
  title: 'The Hack Pack',
  tagline: 'UGA Competitive Hacking',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://thehackpack.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'UGA-SCS-Competitive-Hacking', // Usually your GitHub org/user name.
  projectName: 'main-website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/practice/',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-EEV77LJEKL',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social.png',
    navbar: {
      title: 'The Hack Pack',
      style: 'dark',
      logo: {
        alt: 'SCS Comp Hack Logo',
        src: 'img/logo.png',
        height: 400,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Practice',
        },
        {to: 'about', label: 'About', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
          {
            label: 'Discord',
            href: 'http://discord.thehackpack.org',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/The-Hack-Pack',
          },
          {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com',
          },
          {
            label: 'SCS',
            href: 'https://uga.campuslabs.com/engage/organization/ugascs',
          },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} UGA Society for Cybersecurity.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    announcementBar: {
      id: 'underConstruction',
      content:
        '<strong>NOTICE:</strong> Website under construction',
      backgroundColor: '#230000',
      textColor: '#FFFFFF',
      isCloseable: false,
    },
  } satisfies Preset.ThemeConfig,
  plugins: [lunrSearch],
};

export default config;
