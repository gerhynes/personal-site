import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Header from "./header";
import GlobalStyles from "./styles/GlobalStyles";

const Container = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 0;
`;

const Wrapper = styled.div`
  flex: 1;
`;

const Main = styled.main`
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
        <Wrapper>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Main>{children}</Main>
        </Wrapper>
        <Footer>Gerard Hynes © {new Date().getFullYear()}</Footer>
      </Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
