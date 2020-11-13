module.exports = {
  pathPrefix: "/safesupport-web/",
  siteMetadata: {
    title: `Safe Support Chat`,
    description: `A secure, private messaging platform with an embeddable chatbox`,
    author: `Sharon Kennedy <sharon@nomadiclabs.ca>`,
  },
  plugins: [
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
        name: `Safe Support Chat`,
        short_name: `Safe Support Chat`,
        start_url: `/`,
        background_color: `#785BEC`,
        theme_color: `#785BEC`,
        display: `minimal-ui`,
        icon: `src/images/icon.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
