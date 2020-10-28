import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageHeadingStyles from "../components/styles/PageHeadingStyles";

const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
  }
`;

const Bio = styled.div`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  font-size: 1.125rem;
  line-height: 1.75;

  p {
    margin-bottom: 1rem;
  }

  a {
    font-weight: 600;
    text-decoration: underline;
    color: var(--primary-900);
  }
`;

const BioImageWrapper = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
`;

const BioImage = styled(Image)`
  margin-right: 1.5rem;
  border-radius: 50%;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

const About = () => {
  return (
    <StaticQuery
      query={bioQuery}
      render={(data) => {
        const { author, social } = data.site.siteMetadata;
        return (
          <Layout>
            <SEO title="Gerard Hynes | About" />
            <PageHeadingStyles>About</PageHeadingStyles>
            <BioContainer>
              <BioImageWrapper>
                <BioImage
                  fixed={data.avatar.childImageSharp.fixed}
                  alt={author}
                />
              </BioImageWrapper>
              <Bio>
                <p>Hi, I'm Gerard Hynes.</p>
                <p>I'm a self-taught web developer from Ireland.</p>
                <p>
                  I've spent the last couple of years diving into web
                  development, with a focus on JavaScript, from frontend
                  frameworks like React to Node on the server.
                </p>
                <p>
                  Right now, I'm enjoying building fast, flexible sites and apps
                  with the <a href="https://jamstack.org/">Jamstack</a>. In
                  fact,{" "}
                  <a href="https://github.com/GK-Hynes/personal-site">
                    this is a Gatsby site.
                  </a>
                </p>
                <p>
                  You can usually find me on{` `}
                  <a href={`https://twitter.com/${social.twitter}`}>Twitter</a>,
                  where I'll probably be doing{" "}
                  <a href="https://twitter.com/search?q=%23100DaysOfCode%20from%3AGerard_K_Hynes&src=typed_query&f=live">
                    #100DaysOfCode{` `}
                  </a>
                  and talking about Irish. Labhair Gaeilge liom 👋.
                </p>
              </Bio>
            </BioContainer>
          </Layout>
        );
      }}
    />
  );
};

export default About;

const bioQuery = graphql`
  query bioQuery {
    avatar: file(absolutePath: { regex: "/bio.jpg/" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
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
