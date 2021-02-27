import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
import { Github } from "@styled-icons/boxicons-logos/Github";

const HeroStyles = styled.div`
  margin-top: 20vh;
  text-align: center;
  padding: 0 0.5rem;

  @media (min-width: 768px) {
    margin-top: 25vh;
  }
`;

const HeadingStyles = styled.h2`
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
  color: var(--dark);
  display: inline;
  background-image: linear-gradient(
    to top,
    transparent 15%,
    var(--primary-500) 15% 55%,
    transparent 55%
  );

  @media (min-width: 640px) {
    font-size: 4rem;
  }
`;

const SubHeadingStyles = styled.p`
  font-size: 1.25rem;
  text-align: center;
  color: var(--dark);
  margin-bottom: 0.5rem;
`;

const TwitterIconStyles = styled(Twitter)`
  width: 2rem;
  margin: 1rem 0.5rem;
  fill: var(--dark);
  transition: fill 150ms ease-in-out;

  &:hover {
    fill: var(--primary-600);
  }
`;

const GithubIconStyles = styled(Github)`
  width: 2rem;
  margin: 1rem 0.5rem;
  fill: var(--dark);
  transition: fill 150ms ease-in-out;

  &:hover {
    fill: var(--primary-600);
  }
`;

const IndexPage = ({ data }) => {
  const { description } = data.site.siteMetadata;
  const { homepage } = data;
  return (
    <Layout>
      <SEO
        title="Gerard Hynes | Web Developer"
        description={description}
        image={homepage.childImageSharp.fluid}
      />
      <HeroStyles>
        <HeadingStyles>Hi, I'm Gerard</HeadingStyles>
        <SubHeadingStyles>
          I make fast, modern sites and apps using the Jamstack and fullstack
          JavaScript.
        </SubHeadingStyles>
        <a href="https://twitter.com/Gerard_K_Hynes" aria-label="Twitter">
          <TwitterIconStyles />
        </a>
        <a href="https://github.com/GK-Hynes" aria-label="GitHub">
          <GithubIconStyles />
        </a>
      </HeroStyles>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query socialQuery {
    site {
      siteMetadata {
        description
      }
    }
    homepage: file(absolutePath: { regex: "/homepage.png/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
