const path = require("path");

// Create pages from markdown files
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const landingPageTemplate = path.resolve("./src/templates/landing-page.js");
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allContentfulLandingPage {
              edges {
                node {
                  slug
                  title
                }
              }
            }
          }
        `
      ).then(result => {
        /* result.data.services.edges.forEach(({ node }) => {
          const component = path.resolve("src/templates/service.js");
          createPage({
            path: node.frontmatter.path,
            component,
            context: {
              id: node.id
            }
          });
        });
        result.data.team.edges.forEach(({ node }) => {
          const component = path.resolve("src/templates/team.js");
          createPage({
            path: node.frontmatter.path,
            component,
            context: {
              id: node.id
            }
          });
        });
        result.data.testimonials.edges.forEach(({ node }) => {
          const component = path.resolve("src/templates/testimonial.js");
          createPage({
            path: node.frontmatter.path,
            component,
            context: {
              id: node.id
            }
          });
        }); */
        const landingPage = result.data.allContentfulLandingPage.edges;
        landingPage.forEach((page, index) => {
          createPage({
            path: page.node.slug,
            component: landingPageTemplate,
            context: {
              slug: page.node.slug
            }
          });
        });
        resolve();
      })
    );
  });
};
