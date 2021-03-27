import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageHeadingStyles from "../styles/PageHeadingStyles";

const ContainerStyles = styled.div`
  margin: 0 auto;
`;

const WritingIntroStyles = styled.div`
  margin: 1rem;
`;

const SubheadingStyles = styled.p`
  font-size: 1.2rem;
  line-height: 1.75;
  color: var(--grey-900);
`;

const ArticleListStyles = styled.ul`
  padding: 0 1rem;
  list-style: none;
`;

const ArticleStyles = styled.article`
  padding: 1.5rem 0;
`;

const DateStyles = styled.p`
  color: var(--grey-700);
  display: inline-block;
  margin-right: 1rem;
`;

const TagStyles = styled.p`
  display: inline-block;
  color: var(--grey-700);
  background: var(--primary-200);
  padding: 0.25rem;
  margin-right: 0.5rem;
  border-radius: 0.25rem;
`;

const ArticleTitleStyles = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const ArticleExcerptStyles = styled.p`
  font-size: 1.2rem;
  line-height: 1.75;
  margin: 0.5rem 0;
  color: var(--grey-900);
`;

const ArticleLinkStyles = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--primary-900);

  a:hover {
    text-decoration: underline;
  }
`;

function Writing({ data }) {
  const { edges: posts } = data.allMdx;
  const { description } = data.site.siteMetadata;
  const { socialImg } = data;
  return (
    <Layout>
      <SEO
        title="Gerard Hynes | Web Developer"
        description={description}
        image={socialImg.childImageSharp.fluid}
      />
      <ContainerStyles>
        <WritingIntroStyles>
          <PageHeadingStyles>Writing</PageHeadingStyles>
          <SubheadingStyles>
            I write about the things I'm learning to help me consolidate my
            knowledge. I hope you might also find these articles useful.
          </SubheadingStyles>
        </WritingIntroStyles>
        <ArticleListStyles>
          {posts.map(({ node: post }) => (
            <li key={post.id}>
              <ArticleStyles>
                <Link to={post.fields.slug}>
                  <ArticleTitleStyles>
                    {post.frontmatter.title}
                  </ArticleTitleStyles>
                </Link>
                <DateStyles>{post.frontmatter.date}</DateStyles>
                {post.frontmatter.tags.map((tag) => (
                  <TagStyles key={tag}>{`#${tag}`}</TagStyles>
                ))}
                <ArticleExcerptStyles>{post.excerpt}</ArticleExcerptStyles>
                <ArticleLinkStyles>
                  <Link to={post.fields.slug}>Read more →</Link>
                </ArticleLinkStyles>
              </ArticleStyles>
            </li>
          ))}
        </ArticleListStyles>
      </ContainerStyles>
    </Layout>
  );
}

export default Writing;

export const query = graphql`
  query writingQuery {
    site {
      siteMetadata {
        description
      }
    }
    socialImg: file(absolutePath: { regex: "/social.png/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
      limit: 1000
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY")
            tags
          }
          id
          fields {
            slug
          }
        }
      }
    }
  }
`;
