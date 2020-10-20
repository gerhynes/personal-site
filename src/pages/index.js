import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
import { Github } from "@styled-icons/boxicons-logos/Github";

const Hero = styled.div`
  margin-top: 20vh;
  text-align: center;
  padding: 0 0.5rem;
`;

const MainHeading = styled.h2`
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  font-size: 4rem;
  font-weight: 700;
  text-align: center;
  color: var(--dark);
  display: inline;
  background-image: linear-gradient(
    to top,
    transparent 15%,
    var(--primary-500) 15% 55%,
    transparent 55%
  );
`;

const SubHeading = styled.p`
  font-size: 1.25rem;
  text-align: center;
  color: var(--dark);
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 1.25rem;
  text-align: center;
  color: var(--dark);

  a {
    font-weight: 600;
    text-decoration: underline;
    color: #75abad;
  }
`;

const TwitterIcon = styled(Twitter)`
  width: 2rem;
  margin: 1rem 0.5rem;
  color: var(--dark);
`;

const GithubIcon = styled(Github)`
  margin: 1rem 0.5rem;
  width: 2rem;
  color: var(--dark);
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Gerard Hynes | Web Developer" />
    <Hero>
      <MainHeading>Hi, I'm Gerard</MainHeading>
      <SubHeading>
        I make fast, modern sites and apps using the Jamstack and fullstack
        JavaScript.
      </SubHeading>
      <Description>
        You can <Link to="/projects">see some of my projects</Link>,{" "}
        <Link to="/about">find out about me</Link> or{" "}
        <Link to="/writing">see what I've been writing</Link>.
      </Description>
      <a href="https://twitter.com/Gerard_K_Hynes" aria-label="Twitter">
        <TwitterIcon />
      </a>
      <a href="https://github.com/GK-Hynes" aria-label="GitHub">
        <GithubIcon />
      </a>
    </Hero>
  </Layout>
);

export default IndexPage;
