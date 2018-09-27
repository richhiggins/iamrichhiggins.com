module.exports = {
  siteMetadata: {
    title: 'Rich Higgins - Web Consultancy & Development, freelance front end web developer, JAMstack, component libraries, Jekyll, Gatsby, Contentful, Fractal, performance, php, agile.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`
        }
      },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp'
  ],
}
