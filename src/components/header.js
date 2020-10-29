import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";

const NavStyles = styled.nav`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.5rem 1rem;
  font-size: 1.125rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const NavHeadingStyles = styled.h1`
  font-weight: 700;
  font-size: 1.25rem;
  margin: 0 1rem 0 0;
  padding-left: 0.125rem;
  padding-right: 0.125rem;
  display: inline;
  background-image: linear-gradient(
    to top,
    transparent 15%,
    var(--primary-500) 15% 55%,
    transparent 55%
  );
`;

const NavListStyles = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const NavLinkStyles = styled(Link)`
  font-weight: 500;
  margin-right: 1rem;
  &:hover,
  &:active {
    background-image: linear-gradient(
      to top,
      transparent 15%,
      var(--primary-500) 15% 55%,
      transparent 55%
    );
  }
`;

const Header = ({ siteTitle }) => (
  <header>
    <NavStyles>
      <NavHeadingStyles>
        <Link to="/">{siteTitle}</Link>
      </NavHeadingStyles>
      <NavListStyles>
        <li>
          <NavLinkStyles to="/about/">About</NavLinkStyles>
        </li>
        <li>
          <NavLinkStyles to="/projects/">Projects</NavLinkStyles>
        </li>
        <li>
          <NavLinkStyles to="/writing/">Writing</NavLinkStyles>
        </li>
      </NavListStyles>
    </NavStyles>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
