import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import styled from "styled-components";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { LinkExternal } from "@styled-icons/boxicons-regular/LinkExternal";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Author from "../components/author";
import {
  ProjectContainerStyles,
  ProjectHeadingStyles,
  ProjectLinkStyles,
} from "../styles/ProjectStyles";
import { PostBodyStyles } from "../styles/PostStyles";

const GithubStyles = styled(Github)`
  width: 1.25rem;
  margin-right: 0.25rem;
`;

const ExternalLinkStyles = styled(LinkExternal)`
  width: 1.25rem;
  margin-right: 0.25rem;
`;

const shortcodes = { Link }; // Provide common components here

export default function ProjectTemplate({
  location,
  data: { mdx },
  pageContext,
}) {
  const { title, repoUrl, siteUrl } = mdx.frontmatter;
  const image = getImage(mdx.frontmatter.image);
  const metaImage = mdx.frontmatter.image
    ? mdx.frontmatter.image.childImageSharp.resize
    : null;
  return (
    <Layout>
      <Seo
        title={title}
        description={mdx.excerpt}
        image={metaImage}
        pathname={location.pathname}
      />
      <ProjectContainerStyles>
        <ProjectHeadingStyles>{title}</ProjectHeadingStyles>
        <GatsbyImage
          image={image}
          style={{ marginBottom: `1.5rem` }}
          alt={title}
        />
        <MDXProvider components={shortcodes}>
          <PostBodyStyles>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </PostBodyStyles>
          <ProjectLinkStyles>
            <a href={siteUrl}>
              <ExternalLinkStyles />
              View Site
            </a>
            <a href={repoUrl}>
              <GithubStyles /> View Code
            </a>
          </ProjectLinkStyles>
          <Author />
        </MDXProvider>
      </ProjectContainerStyles>
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
        repoUrl
        siteUrl
        image {
          childImageSharp {
            gatsbyImageData(
              width: 800
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`;
