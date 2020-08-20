import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Container = styled.div`
  margin: 0 auto;
`;

const WritingIntro = styled.div`
  margin: 2rem 1rem;
  border-bottom: 1px solid #d2d6dc;
  padding-bottom: 1.5rem;
`;

const Heading = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 3.5rem;
  margin-bottom: 1rem;
`;

const Subheading = styled.p`
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: rgba(107, 114, 128, 1);
`;

const ArticleList = styled.ul`
  padding: 0 1rem;
`;

const Article = styled.article`
  padding: 1.5rem 0;
  border-bottom: 1px solid #d2d6dc;
`;

const Date = styled.p`
  color: rgba(107, 114, 128, 1);
`;

const ArticleTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
`;

const ArticleExcerpt = styled.p`
  margin: 1.5rem 0;
`;

const ArticleLink = styled.p`
  font-weight: 500;
  color: rgba(4, 116, 129, 1);
`;

export default function Writing({ data }) {
  const { edges: posts } = data.allMdx;
  return (
    <Layout>
      <SEO title="Gerard Hynes | Writing" />
      <Container>
        <WritingIntro>
          <Heading>Articles</Heading>
          <Subheading>I write about learning web development</Subheading>
        </WritingIntro>
        <ArticleList style={{ listStyle: `none` }}>
          {posts.map(({ node: post }) => (
            <li key={post.id}>
              <Article>
                <Date>{post.frontmatter.date}</Date>
                <Link to={post.fields.slug}>
                  <ArticleTitle>{post.frontmatter.title}</ArticleTitle>
                </Link>
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
    allMdx {
      edges {
        node {
          excerpt
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
