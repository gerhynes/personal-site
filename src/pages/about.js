import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";
import Layout from "../components/layout";

import SEO from "../components/seo";

const Heading = styled.h2`
  text-align: center;
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 3.5rem;
  margin-bottom: 2rem;
`;

const BioContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Bio = styled.div`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  font-size: 1rem;
  line-height: 1.5;

  p {
    margin-bottom: 1.25rem;
  }

  a {
    font-weight: 600;
    text-decoration: underline;
    color: #75abad;
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
            <Heading>About</Heading>
            <BioContainer>
              <Bio>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lectus arcu bibendum at varius vel. Proin sed libero enim sed
                  faucibus turpis in. At augue eget arcu dictum varius duis at.
                  Iaculis nunc sed augue lacus viverra vitae congue. Nec
                  ullamcorper sit amet risus nullam eget felis eget. Lorem sed
                  risus ultricies tristique nulla aliquet. Sit amet consectetur
                  adipiscing elit pellentesque habitant morbi. Et tortor
                  consequat id porta nibh venenatis cras sed. Habitasse platea
                  dictumst vestibulum rhoncus est pellentesque elit ullamcorper.
                </p>
                <p>
                  You can usually find me on{` `}
                  <a href={`https://twitter.com/${social.twitter}`}>Twitter</a>,
                  where I'll be doing{" "}
                  <a href="https://twitter.com/search?q=%23100DaysOfCode%20from%3AGerard_K_Hynes&src=typed_query&f=live">
                    #100DaysOfCode
                  </a>
                  and talking about Irish.
                </p>
              </Bio>
              <BioImageWrapper>
                <BioImage
                  fixed={data.avatar.childImageSharp.fixed}
                  alt={author}
                />
              </BioImageWrapper>
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
