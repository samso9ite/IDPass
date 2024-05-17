import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `identityradar website`,
    siteUrl: `https://identityradar.prembly.com`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-anchor-links", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./static/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `GatsbyJS`,
      short_name: `GatsbyJS`,
      start_url: `/`,
      background_color: `#f7f0eb`,
      theme_color: `#a2466c`,
      display: `standalone`,
      icon: `./static/images/favicon-32x32.png`
    },
  },
  {
    resolve: "gatsby-plugin-anchor-links",
    options: {
      offset: -50
    }
  }
]
};

export default config;
