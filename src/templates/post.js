import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import styled from "styled-components";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Author from "../components/author";
import { PostBodyStyles, PostNavigationStyles } from "../styles/PostStyles";

const PostStyles = styled.div`
  min-width: 100px;
  margin-left: 1rem;
  margin-right: 1rem;
`;

const PostHeadingStyles = styled.h2`
  font-weight: 700;
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const PostDateStyles = styled.p`
  display: inline-block;
  color: var(--grey-700);
  margin-bottom: 1rem;
  margin-right: 1rem;
`;

const PostCategoryStyles = styled.p`
  display: inline-block;
  color: var(--grey-700);
  background: var(--primary-200);
  padding: 0.25rem;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  margin-right: 0.5rem;
`;

const shortcodes = { Link }; // Provide common components here

export default function PostTemplate({ location, data: { mdx }, pageContext }) {
  const { prev, next } = pageContext;
  const { title, date, description, image, tags } = mdx.frontmatter;
  return (
    <Layout>
      <Seo
        title={title}
        description={description}
        image={image.childImageSharp.gatsbyImageData}
        pathname={location.pathname}
      />
      <PostStyles>
        <GatsbyImage
          image={image.childImageSharp.gatsbyImageData}
          style={{ marginBottom: `2rem` }}
          alt={title}
        />
        <PostHeadingStyles>{title}</PostHeadingStyles>
        <PostDateStyles>{date}</PostDateStyles>
        {tags.map((tag) => (
          <PostCategoryStyles key={tag}> {`#${tag}`}</PostCategoryStyles>
        ))}
        <MDXProvider components={shortcodes}>
          <PostBodyStyles>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </PostBodyStyles>
          <Author />
          <PostNavigationStyles>
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
          </PostNavigationStyles>
        </MDXProvider>
      </PostStyles>
    </Layout>
  );
}

export const pageQuery = graphql`
  query PostQuery($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        description
        tags
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
