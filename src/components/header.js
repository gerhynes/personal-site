import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <nav
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        justifyContent: `space-between`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <ul style={{ display: `flex` }}>
        <li>
          <Link
            to="/about/"
            style={{
              color: `white`,
              textDecoration: `none`,
              marginRight: `1rem`,
            }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/projects/"
            style={{
              color: `white`,
              textDecoration: `none`,
              marginRight: `1rem`,
            }}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/writing/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            Writing
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
