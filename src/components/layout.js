import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Header from "./header";
import GlobalStyles from "./styles/GlobalStyles";

const ContainerStyles = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 0;
`;

const WrapperStyles = styled.div`
  flex: 1;
`;

const MainStyles = styled.main`
  margin: 0 auto;
  max-width: 800px;
`;

const FooterStyles = styled.footer`
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
      <ContainerStyles>
        <WrapperStyles>
          <Header siteTitle={data.site.siteMetadata.title} />
          <MainStyles>{children}</MainStyles>
        </WrapperStyles>
        <FooterStyles>Gerard Hynes © {new Date().getFullYear()}</FooterStyles>
      </ContainerStyles>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
