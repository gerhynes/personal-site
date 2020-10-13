const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

async function makePostsFromMdx({ graphql, actions }) {
  const postTemplate = path.resolve(`./src/templates/post.js`);

  const { errors, data } = await graphql(`
    {
      allMdx(
        filter: {
          fields: { collection: { eq: "posts" } }
          frontmatter: { published: { eq: true } }
        }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
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
  `);
  if (errors) {
    console.log(errors);
    throw new Error(`There was an error`);
  }
  const posts = data.allMdx.edges;
  posts.forEach((post, i) => {
    const prev = posts[i - 1];
    const next = posts[i + 1];
    actions.createPage({
      path: post.node.fields.slug,
      component: postTemplate,
      context: {
        slug: post.node.fields.slug,
        collection: "posts",
        prev,
        next,
        pathPrefix: "",
      },
    });
  });
}

async function makeProjectsFromMdx({ graphql, actions }) {
  const projectTemplate = path.resolve(`./src/templates/project.js`);
  const { errors, data } = await graphql(`
    {
      allMdx(
        filter: { fields: { collection: { eq: "projects" } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
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
  `);
  if (errors) {
    console.log(errors);
    throw new Error(`There was an error`);
  }
  const projects = data.allMdx.edges;
  projects.forEach((project, i) => {
    const prev = projects[i - 1];
    const next = projects[i + 1];
    actions.createPage({
      path: project.node.fields.slug,
      component: projectTemplate,
      context: {
        slug: project.node.fields.slug,
        collection: "projects",
        prev,
        next,
        pathPrefix: "",
      },
    });
  });
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const generatedSlug = createFilePath({
      node,
      getNode,
    });

    createNodeField({
      name: `slug`,
      node,
      value: node.frontmatter.slug
        ? `/${node.frontmatter.slug}/`
        : generatedSlug,
    });

    createNodeField({
      name: `collection`,
      node,
      value: getNode(node.parent).sourceInstanceName,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  await Promise.all([
    makePostsFromMdx({ graphql, actions }),
    makeProjectsFromMdx({ graphql, actions }),
  ]);
};
