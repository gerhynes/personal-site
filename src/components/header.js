import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";

const Nav = styled.nav`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const NavHeading = styled.h1`
  font-weight: 700;
  font-size: 1.125rem;
  margin: 0 1rem 0 0;
  padding-left: 0.125rem;
  padding-right: 0.125rem;
  display: inline;
  background-image: linear-gradient(
    to top,
    transparent 15%,
    rgba(0, 214, 214, 0.25) 15% 55%,
    transparent 55%
  );
`;

const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const NavLink = styled(Link)`
  font-weight: 500;
  margin-right: 1rem;
  &:hover,
  &:active {
    background-image: linear-gradient(
      to top,
      transparent 15%,
      rgba(0, 214, 214, 0.25) 15% 55%,
      transparent 55%
    );
  }
`;

const Header = ({ siteTitle }) => (
  <header>
    <Nav>
      <NavHeading>
        <Link to="/">{siteTitle}</Link>
      </NavHeading>
      <NavList>
        <li>
          <NavLink to="/about/">About</NavLink>
        </li>
        <li>
          <NavLink to="/projects/">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/writing/">Writing</NavLink>
        </li>
      </NavList>
    </Nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
