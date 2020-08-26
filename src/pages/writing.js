import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Container = styled.div`
  margin: 0 auto;
`;

const WritingIntro = styled.div`
  margin: 2rem 1rem 1rem 1rem;
  padding-bottom: 1rem;
`;

const Heading = styled.h2`
  text-align: center;
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 3.5rem;
  margin-bottom: 2rem;
`;

const Subheading = styled.p`
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: var(--grey-600);
`;

const ArticleList = styled.ul`
  padding: 0 1rem;
  list-style: none;
`;

const Article = styled.article`
  padding: 1.5rem 0;
`;

const Date = styled.p`
  color: var(--grey-600);
  display: inline-block;
  margin-right: 1rem;
`;

const Category = styled.p`
  display: inline-block;
  color: var(--grey-600);
`;

const ArticleTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const ArticleExcerpt = styled.p`
  margin: 0.5rem 0;
`;

const ArticleLink = styled.p`
  font-weight: 500;
  color: var(--primary-900);
`;

export default function Writing({ data }) {
  const { edges: posts } = data.allMdx;
  return (
    <Layout>
      <SEO title="Gerard Hynes | Writing" />
      <Container>
        <WritingIntro>
          <Heading>Writing</Heading>
          <Subheading>
            Writing about the web development topics I'm learning helps me to
            consolidate my knowledge. I hope you find these articles useful.
          </Subheading>
        </WritingIntro>
        <ArticleList>
          {posts.map(({ node: post }) => (
            <li key={post.id}>
              <Article>
                <Link to={post.fields.slug}>
                  <ArticleTitle>{post.frontmatter.title}</ArticleTitle>
                </Link>
                <Date>{post.frontmatter.date}</Date>
                <Category>{post.frontmatter.category}</Category>
                <ArticleExcerpt>{post.excerpt}</ArticleExcerpt>
                <ArticleLink>
                  <Link to={post.fields.slug}>Read more →</Link>
                </ArticleLink>
              </Article>
            </li>
          ))}
        </ArticleList>
      </Container>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
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
            date
            category
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
