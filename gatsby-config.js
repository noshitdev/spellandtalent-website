module.exports = {
  siteMetadata: {
    siteUrl: 'https://noshit.dev/spellandtalent',
    title: 'Spell & Talent',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-root-import',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'G-KNLCX1BXW1',
      },
    },
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
    }
  ],
}
