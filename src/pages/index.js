import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";

const HeroWrapper = styled.div`
  margin-top: 30vh;
  text-align: center;
`;

const MainHeading = styled.h1`
  margin: auto auto 1.5rem auto;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  font-size: 4rem;
  font-weight: 700;
  text-align: center;
  color: #002a32;
  display: inline;
  background-image: linear-gradient(
    to top,
    transparent 15%,
    rgba(0, 214, 214, 0.25) 15% 55%,
    transparent 55%
  );
`;

const SubHeading = styled.h2`
  font-size: 1.25rem;
  text-align: center;
  color: #002a32;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Gerard Hynes | Web Developer" />
    <HeroWrapper>
      <MainHeading>Hi, I'm Gerard</MainHeading>
      <SubHeading>
        I make fast, modern sites and apps using the JAMstack and fullstack
        JavaScript.
      </SubHeading>
    </HeroWrapper>
  </Layout>
);

export default IndexPage;
