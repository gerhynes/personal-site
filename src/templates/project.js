import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Author from "../components/author";
import { PostBody } from "../components/styles/PostStyles";

const ProjectHeadingStyles = styled.h2`
  font-weight: 700;
  font-size: 2.5rem;
`;

const shortcodes = { Link }; // Provide common components here

export default function ProjectTemplate({
  location,
  data: { mdx },
  pageContext,
}) {
  const { title, image } = mdx.frontmatter;
  return (
    <Layout>
      <SEO
        title={title}
        description={mdx.excerpt}
        image={image.childImageSharp.fluid}
        pathname={location.pathname}
      />
      <div>
        <ProjectHeadingStyles>{title}</ProjectHeadingStyles>
        <Img
          style={{ marginBottom: `1rem` }}
          fluid={image.childImageSharp.fluid}
          alt={title}
        />
        <MDXProvider components={shortcodes}>
          <PostBody>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </PostBody>
          <Author />
        </MDXProvider>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ProjectQuery($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        image {
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
