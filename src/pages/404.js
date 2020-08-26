import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";

const StyledLink = styled(Link)`
  color: var(--primary-900);
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <StyledLink to="/">Go back</StyledLink>
  </Layout>
);

export default NotFoundPage;
