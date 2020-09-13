import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Header from "./header";
import GlobalStyles from "./styles/GlobalStyles";

const Container = styled.section`
  margin: 0 auto;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  margin: 0 auto;
  max-width: 800px;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 1rem;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyles />
      <Container>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Main>{children}</Main>
        <Footer>Gerard Hynes © {new Date().getFullYear()}</Footer>
      </Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
