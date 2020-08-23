import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

const AuthorDetails = styled.section`
  display: flex;
  align-items: center;
  margin: 2rem 0;

  img {
    min-width: 50px;
    border-radius: 100%;
  }

  p {
    margin-left: 1.5rem;
  }

  a {
    font-weight: 600;
    text-decoration: underline;
    color: #75abad;
  }
`;

const Author = () => {
  return (
    <StaticQuery
      query={authorQuery}
      render={(data) => {
        const { author, social } = data.site.siteMetadata;
        return (
          <AuthorDetails>
            <Image fixed={data.avatar.childImageSharp.fixed} alt={author} />
            <div>
              <p>
                Written by <strong>{author}</strong>. I write about JavaScript
                and modern web development.
              </p>
              <p>
                You can usually find me on{` `}
                <a href={`https://twitter.com/${social.twitter}`}>Twitter</a>
              </p>
            </div>
          </AuthorDetails>
        );
      }}
    />
  );
};

export default Author;

const authorQuery = graphql`
  query authorQuery {
    avatar: file(absolutePath: { regex: "/bio.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
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
