const guid = process.env.NETLIFY_GOOGLE_ANALYTICS_ID;
const dotenv = require("dotenv");

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

module.exports = {
  siteMetadata: {
    title: "Gatsby Serif",
    description: "my theme",
    contact: {
      phone: "XXX XXX XXX",
      email: "zerostaticthemes@gmail.com"
    },
    menuLinks: [
      {
        name: "Services",
        link: "/services"
      },
      {
        name: "Team",
        link: "/team"
      },
      {
        name: "Testimonials",
        link: "/testimonials"
      },
      {
        name: "Contact",
        link: "/contact"
      }
    ]
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-transformer-json",
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/data`,
        name: "data"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images`,
        name: "images"
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: guid ? guid : "UA-XXX-1",
        // Puts tracking script in the head instead of the body
        head: false
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `0y7nw8b14f1x`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST || "cdn.contentful.com"
      }
    }
  ]
};
