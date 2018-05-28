module.exports = {
  siteMetadata: {
    title: 'Level-Up Tutorial Blog Example',
    desc: "A new blog",
    funnelName: "GatsbyFunnel"
  },
  plugins: [
    'gatsby-plugin-react-helmet', 
    'gatsby-plugin-styled-components',
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "gkhubcuejfh9",
        accessToken: "6c249ca3ae49f26bcb98e6d32b8d26984f6c3a6de1a750aa2ed26fe7c5bb92d5"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "img",
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "img",
        path: `${__dirname}/static/assets`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp'
  ]
};

//  pathPrefix: "/levelupgatsby",