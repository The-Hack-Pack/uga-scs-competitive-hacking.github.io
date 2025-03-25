import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import lunrSearch from 'docusaurus-lunr-search';

const config: Config = {
  title: 'THE HACK PACK',
  tagline: 'UGA Practical & Competitive Cybersecurity Club',
  favicon: 'img/favicon.ico',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Set the production url of your site here
  url: 'https://thehackpack.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'UGA-SCS-Competitive-Hacking', // Usually your GitHub org/user name.
  projectName: 'main-website', // Usually your repo name.

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  future: {
    experimental_faster: true,
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
          editUrl: 'https://github.com/The-Hack-Pack/uga-scs-competitive-hacking.github.io/tree/development/',
          showLastUpdateTime: true
        },
        blog: {
          blogTitle: 'The Hack Pack Writeups',
          blogDescription: 'Writeups for real competition challenges!',
          showReadingTime: true,
          editUrl: 'https://github.com/The-Hack-Pack/uga-scs-competitive-hacking.github.io/tree/development/',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          showLastUpdateTime: true
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
    zoom: {
      selector: '.markdown :not(em) > img',
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        }
      }
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    // Replace with your project's social card
    image: 'img/social.png',
    navbar: {
      title: 'THE HACK PACK',
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
        {to: 'blog', label: 'Writeups', position: 'left'},
        {to: 'schedule', label: 'Schedule', position: 'left'},
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
            label: 'Linktree',
            href: 'https://linktr.ee/thehackpackuga',
          },
          {
            label: 'Involvement Network',
            href: 'https://uga.campuslabs.com/engage/organization/thehackpack',
          },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} The Hack Pack @ University of Georgia.`,
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
    /*
    announcementBar: {
      id: 'underConstruction',
      content:
        '<strong>NOTICE:</strong> Website under construction',
      backgroundColor: '#230000',
      textColor: '#FFFFFF',
      isCloseable: false,
    },
    */
  } satisfies Preset.ThemeConfig,
  plugins: [lunrSearch, require.resolve("docusaurus-plugin-image-zoom")],
};

export default config;
