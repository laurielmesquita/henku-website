module.exports = {
  siteMetadata: {
    title: 'Henku Website',
    description: 'Consultoria em data Science e projetos de machine learning.',
    author: '@laurielmesquita'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-webfonts',
      options: {
        fonts: {
          google: [
            {
              family: 'Montserrat',
              variants: ['400', '500']
            },
            {
              family: 'Poppins',
              variants: ['400', '500', '600']
            }
          ]
        }
      }
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Henku',
        short_name: 'Henku',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/henku-icon.png' // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-offline'
  ]
}
