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
`;

const Heading = styled.h1`
  font-weight: 700;
  margn: 0;
  display: inline-block;
  background-image: linear-gradient(
    to top,
    transparent 15%,
    rgba(0, 214, 214, 0.25) 15% 55%,
    transparent 55%
  );
`;

const NavList = styled.ul`
  display: flex;
`;

const NavLink = styled(Link)`
  font-weight: 500;
  &:hover {
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
      <Heading>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </Heading>
      <NavList>
        <li>
          <NavLink
            to="/about/"
            style={{
              marginRight: `1rem`,
            }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects/"
            style={{
              marginRight: `1rem`,
            }}
          >
            Projects
          </NavLink>
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
