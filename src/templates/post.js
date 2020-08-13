import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const shortcodes = { Link }; // Provide common components here

export default function PostTemplate({ location, data: { mdx }, pageContext }) {
  const { prev, next } = pageContext;
  console.log(pageContext);
  const { title, date, featuredImage } = mdx.frontmatter;
  return (
    <Layout>
      <SEO
        title={title}
        description={mdx.excerpt}
        image={featuredImage.childImageSharp.fluid}
        pathname={location.pathname}
      />
      <Img
        style={{ marginBottom: `1rem` }}
        fluid={featuredImage.childImageSharp.fluid}
        alt={title}
      />
      <h1>{title}</h1>
      <p>{date}</p>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {prev && (
              <Link to={prev.node.fields.slug} rel="prev">
                ← {prev.node.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.node.fields.slug} rel="next">
                {next.node.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </MDXProvider>
    </Layout>
  );
}

export const pageQuery = graphql`
  query PostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
