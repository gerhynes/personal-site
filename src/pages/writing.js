import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";
import Seo from "../components/seo";
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

const ExternalArticleSectionStyles = styled.div`
  border: 2px solid var(--primary-700);
  border-radius: 0.5rem;
  margin: 1rem;
  padding: 1.5rem 1rem;
`;

const ExternalLinkStyles = styled.span`
  font-weight: 600;
  text-decoration: underline;
  color: var(--primary-900);
`;

const ExternalArticleHeadingStyles = styled.h3`
  font-size: 1.2rem;
  text-align: center;
`;

const ExternalArticleStyles = styled.article`
  padding: 1.5rem 0;
`;

const ArticleListStyles = styled.ul`
  padding: 0 1rem;
  list-style: none;
  margin: 1rem;
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

const ArticleDescriptionStyles = styled.p`
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
      <Seo
        title="Gerard Hynes | Software Developer"
        description={description}
        image={socialImg.childImageSharp.resize}
      />
      <ContainerStyles>
        <WritingIntroStyles>
          <PageHeadingStyles>Writing</PageHeadingStyles>
          <SubheadingStyles>
            I write about the things I'm learning to help me consolidate my
            knowledge. I hope you might also find these articles useful.
          </SubheadingStyles>
        </WritingIntroStyles>
        <ExternalArticleSectionStyles>
          <ExternalArticleHeadingStyles>
            I've also been published by{" "}
            <ExternalLinkStyles>
              <a href="https://www.freecodecamp.org/news/">freeCodeCamp</a>
            </ExternalLinkStyles>
          </ExternalArticleHeadingStyles>

          <ExternalArticleStyles>
            <a href="https://www.freecodecamp.org/news/learn-eleventy/">
              <ArticleTitleStyles>
                Learn the Eleventy Static Site Generator by Building and
                Deploying a Portfolio Website
              </ArticleTitleStyles>
              <DateStyles>6 September 2022</DateStyles>
              <ArticleDescriptionStyles>
                Eleventy is a static site generator that uses JavaScript to
                transform data and templates into HTML pages.
              </ArticleDescriptionStyles>
              <ArticleLinkStyles>
                <a href="https://www.freecodecamp.org/news/learn-eleventy/">
                  Read more →
                </a>
              </ArticleLinkStyles>
            </a>
          </ExternalArticleStyles>
          <ExternalArticleStyles>
            <a href="https://www.freecodecamp.org/news/manage-postgresql-with-psql/">
              <ArticleTitleStyles>
                How to Manage PostgreSQL Databases from the Command Line with
                psql
              </ArticleTitleStyles>
              <DateStyles>7 June 2022</DateStyles>
              <ArticleDescriptionStyles>
                Now is a great time to learn relational databases and SQL. From
                web development to data science, they are used everywhere.
              </ArticleDescriptionStyles>
              <ArticleLinkStyles>
                <a href="https://www.freecodecamp.org/news/manage-postgresql-with-psql/">
                  Read more →
                </a>
              </ArticleLinkStyles>
            </a>
          </ExternalArticleStyles>
        </ExternalArticleSectionStyles>
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
                <ArticleDescriptionStyles>
                  {post.frontmatter.description}
                </ArticleDescriptionStyles>
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
        resize(width: 1200) {
          src
          height
          width
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
            description
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
