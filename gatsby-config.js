module.exports = {
  siteMetadata: {
    title: "Gray Hummingbird",
    author: "Danni Baxter",
    description: "A Gatsby.js V2 Starter based on Dimension by HTML5 UP"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png",
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
        }
      }
    },
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
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-135269754-2",
      },
    },
  ],
}
