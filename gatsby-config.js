require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const siteUrl = 'https://spellandtalent.noshit.dev'

module.exports = {
  siteMetadata: {
    siteUrl,
    title: 'Spell & Talent',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `{
          allSitePage {
            nodes {
              path
            }
          }
        }`,
        resolveSiteUrl: () => siteUrl,
        serialize: ({ path }) => ({
          url: path,
          lastmodISO: (new Date()).toISOString(),
        }),
        createLinkInHead: true,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-root-import',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'EB+Garamond:ital,wght@0,400;0,700;1,400;1,700',
        ],
        display: 'swap'
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: './src/data/',
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          'G-M86QYKLNDF',
        ],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
          exclude: [],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-WG3RVQ3',
      },
    },
  ],
}
