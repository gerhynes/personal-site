const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const generatedSlug = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value: node.frontmatter.slug || generatedSlug,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const articleTemplate = path.resolve(`./src/templates/article.js`);

  return graphql(`
    query {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
        edges {
          node {
            id
            body
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    // Create article pages.
    const posts = result.data.allMdx.edges;

    posts.forEach((post, index) => {
      const previous =
        index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      createPage({
        path: post.node.fields.slug,
        // This component will wrap our MDX content
        component: articleTemplate,
        // You can use the values in this context in
        // our page layout component
        context: {
          id: node.id,
          slug: post.node.fields.slug,
          previous,
          next,
        },
      });
    });
  });
};
