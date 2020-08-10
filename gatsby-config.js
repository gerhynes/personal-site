module.exports = {
  siteMetadata: {
    title: `Gerard Hynes`,
    description: `Web Developer focusing on JAMstack and fullstack JavaScript`,
    author: `@Gerard_K_Hynes`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gerard Hynes | Web Developer`,
        short_name: `Gerard Hynes`,
        start_url: `/`,
        background_color: `#002a32`,
        theme_color: `#002a32`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
