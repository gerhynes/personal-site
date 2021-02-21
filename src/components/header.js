import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";

const NavStyles = styled.nav`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.5rem 1rem;
  font-size: 1.125rem;
`;

const NavListStyles = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-gap: 1rem;
  justify-content: center;
  justify-items: center;

  @media (min-width: 640px) {
    grid-template-columns: 1fr repeat(3, fit-content(50px));
  }
`;

const MainItemStyles = styled.li`
  grid-column: 1/-1;

  @media (min-width: 640px) {
    grid-column: 1 / 2;
    justify-self: start;
  }
`;

const NavHeadingStyles = styled.h1`
  font-weight: 700;
  font-size: 1.25rem;
  padding-left: 0.125rem;
  padding-right: 0.125rem;
  display: inline;
  background-image: linear-gradient(
    to top,
    transparent 15%,
    var(--primary-500) 15% 55%,
    transparent 55%
  );

  @media (min-width: 640px) {
    font-size: 1.375rem;
  }
`;

const NavLinkStyles = styled(Link)`
  font-weight: 500;
  padding-left: 0.125rem;
  padding-right: 0.125rem;
  &:hover,
  &:active {
    background-image: linear-gradient(
      to top,
      transparent 15%,
      var(--primary-500) 15% 55%,
      transparent 55%
    );
  }

  @media (min-width: 640px) {
    font-size: 1.25rem;
  }
`;

const Header = ({ siteTitle }) => (
  <header>
    <NavStyles>
      <NavListStyles>
        <MainItemStyles>
          <NavHeadingStyles>
            <Link to="/">{siteTitle}</Link>
          </NavHeadingStyles>
        </MainItemStyles>
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
