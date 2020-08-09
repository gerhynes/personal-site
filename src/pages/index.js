import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Heading = styled.h1`
  margin-top: -4rem;
  margin-bottom: 1.5rem;
  font-size: 4rem;
  font-weight: 700;
  text-align: center;
  color: #002a32;
  display: inline-block;
  background-image: linear-gradient(
    to top,
    rgba(0, 214, 214, 0.25) 40%,
    transparent 40%,
    transparent 100%
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
    <Heading>Hi, I'm Gerard</Heading>
    <SubHeading>
      I make fast, modern sites and apps using the JAMstack and fullstack
      JavaScript.
    </SubHeading>
  </Layout>
);

export default IndexPage;
