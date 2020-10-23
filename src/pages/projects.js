import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageHeadingStyles from "../components/styles/PageHeadingStyles";

const ProjectGrid = styled.section`
  max-width: 1080px;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
`;

const ProjectCard = styled.article`
  display: flex;
  padding-bottom: 2rem;
  position: relative;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ProjectCardLeft = styled(ProjectCard)`
  flex-direction: column;
`;

const ProjectCardRight = styled(ProjectCard)`
  flex-direction: column-reverse;
`;

const ImageContainer = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  position: relative;

  & > * {
    flex-grow: 1;
  }
`;

const ImageWrapper = styled.figure`
  position: relative;
  max-width: 450px;
  margin: auto;

  &::before {
    position: absolute;
    top: -1rem;
    left: -1rem;
    bottom: 1rem;
    width: 100%;
    content: "";
    background-color: var(--primary-500);
  }

  @media (min-width: 768px) {
    &::before {
      top: -1.5rem;
      left: -1.5rem;
    }
  }
`;

const TextContainer = styled.div`
  flex: 2;
  padding: 3rem 2rem;

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
  }

  p {
    font-size: 1.125rem;
    margin-bottom: 0.5rem;
  }

  ul {
    display: flex;
  }

  li {
    border-radius: 9999px;
    background: var(--grey-200);
    color: var(--grey-700);
    padding: 0.25rem 0.75rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
  }
`;

const TextLink = styled.a`
  font-weight: 600;
  text-decoration: underline;
  color: var(--primary-900);
`;

const ProjectLinkStyles = styled(Link)`
  display: inline-block;
  background: var(--primary-800);
  color: #fff;
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  margin: 1rem auto;
  transition: background-color 300ms ease;

  &:hover {
    background-color: var(--primary-900);
  }
`;

const Projects = () => {
  return (
    <StaticQuery
      query={projectsQuery}
      render={(data) => {
        return (
          <Layout>
            <SEO title="Gerard Hynes | Projects" />
            <PageHeadingStyles>Projects</PageHeadingStyles>
            <ProjectGrid>
              <ProjectCardLeft>
                <ImageContainer>
                  <ImageWrapper>
                    <Image
                      fluid={data.nasaApod.childImageSharp.fluid}
                      alt="NASA apod"
                    />
                  </ImageWrapper>
                </ImageContainer>
                <TextContainer>
                  <h3>NASA Astronomy Picture of the Day</h3>
                  <p>
                    An app which displays daily images and videos from{" "}
                    <TextLink href="https://api.nasa.gov/">
                      NASA's APOD API.
                    </TextLink>
                  </p>
                  <ProjectLinkStyles to="/nasa-apod">
                    View Project
                  </ProjectLinkStyles>
                  <ul>
                    <li>#React</li>
                    <li>#Gatsby</li>
                    <li>#APIs</li>
                    <li>#PWA</li>
                  </ul>
                </TextContainer>
              </ProjectCardLeft>

              <ProjectCardRight>
                <TextContainer>
                  <h3>Tráta Timer</h3>
                  <p>
                    A Pomodoro timer built with Gatsby for the{" "}
                    <TextLink href="https://www.freecodecamp.org/">
                      freeCodeCamp
                    </TextLink>{" "}
                    curriculum.
                  </p>
                  <ProjectLinkStyles to="/trata-timer">
                    View Project
                  </ProjectLinkStyles>
                  <ul>
                    <li>#React</li>
                    <li>#Gatsby</li>
                  </ul>
                </TextContainer>
                <ImageContainer>
                  <ImageWrapper>
                    <Image
                      fluid={data.trataTimer.childImageSharp.fluid}
                      alt="Tráta Timer"
                    />
                  </ImageWrapper>
                </ImageContainer>
              </ProjectCardRight>
            </ProjectGrid>
          </Layout>
        );
      }}
    />
  );
};

export default Projects;

const projectsQuery = graphql`
  query projectsQuery {
    nasaApod: file(absolutePath: { regex: "/nasa-apod.jpg/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    trataTimer: file(absolutePath: { regex: "/trata-timer.png/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
