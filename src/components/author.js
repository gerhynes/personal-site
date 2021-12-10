import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const AuthorDetailStyles = styled.section`
  display: flex;
  margin: 2rem 0;

  img {
    min-width: 50px;
    border-radius: 100%;
  }

  p {
    padding-left: 1rem;
  }

  a {
    font-weight: 600;
    text-decoration: underline;
    color: var(--primary-900);
  }
`;

const Author = () => {
  return (
    <StaticQuery
      query={authorQuery}
      render={(data) => {
        const { author, social } = data.site.siteMetadata;
        return (
          <AuthorDetailStyles>
            <div>
              <GatsbyImage image={data.avatar.childImageSharp.gatsbyImageData} alt={author} />
            </div>
            <div>
              <p>
                Hi, I'm <strong>{author}</strong>. I write about JavaScript and
                modern web development.
              </p>
              <p>
                You can usually find me on{` `}
                <a href={`https://twitter.com/${social.twitter}`}>Twitter</a>
              </p>
            </div>
          </AuthorDetailStyles>
        );
      }}
    />
  );
};

export default Author;

const authorQuery = graphql`query authorQuery {
  avatar: file(absolutePath: {regex: "/bio.jpg/"}) {
    childImageSharp {
      gatsbyImageData(width: 50, height: 50, layout: FIXED)
    }
  }
  site {
    siteMetadata {
      author
      social {
        twitter
      }
    }
  }
}
`;
