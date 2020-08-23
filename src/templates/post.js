import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { PostBody, PostNavigation } from "../components/styles/PostStyles";

const Post = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
`;

const PostHeading = styled.h2`
  font-weight: 700;
  font-size: 2.5rem;
`;

const PostDate = styled.p`
  color: rgba(107, 114, 128, 1);
  margin-bottom: 1rem;
`;



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
      <Post>
        <Img
          style={{ marginBottom: `1rem` }}
          fluid={featuredImage.childImageSharp.fluid}
          alt={title}
        />
        <PostHeading>{title}</PostHeading>
        <PostDate>{date}</PostDate>
        <MDXProvider components={shortcodes}>
          <PostBody>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </PostBody>
          <PostNavigation>
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
          </PostNavigation>
        </MDXProvider>
      </Post>
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
