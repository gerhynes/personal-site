import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Header from "./header";
import "./layout.css";

const Container = styled.section`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1rem;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
`;

const Footer = styled.footer`
  text-align: center;
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
