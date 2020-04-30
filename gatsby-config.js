module.exports = {
  siteMetadata: {
    title: `Craft`,
    description: `We design & build websites & applications.`,
    author: `@nineafrica`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-hotjar-tracking`,
      options: {
        includeInDevelopment: false,
        id: 1251746,
        sv: 6,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Craft`,
        short_name: `craft`,
        start_url: `/`,
        background_color: `#0F1011`,
        theme_color: `#151618`,
        display: `standalone`,
        icon: `src/images/craft-black.png`,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
  ],
};
