import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Heading = styled.h2`
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 3.5rem;
  margin: 1rem 0 2rem 0;
  text-align: center;
`;

const ProjectGrid = styled.section`
  max-width: 1080px;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
`;

const ProjectCard = styled.article`
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
  position: relative;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageContainer = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  position: relative;

  & > * {
    flex-grow: 1;
  }

  img {
    position: relative;

    &::before {
      position: absolute;
      top: -1.5rem;
      bottom: 1.5rem;
      left: -1.5rem;
      width: 100%;
      content: "";
      background-color: #b1e9eb;
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
    background: rgba(237, 242, 247, 1);
    color: rgba(74, 85, 104, 1);
    padding: 0.25rem 0.75rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
  }
`;

const ProjectLink = styled.a`
  display: inline-block;
  background: #84babc;
  color: #fff;
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  margin-right: 1rem;
  transition: background-color 300ms ease;

  &:hover {
    background-color: #75abad;
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
            <Heading>Projects</Heading>
            <ProjectGrid>
              <ProjectCard>
                <ImageContainer>
                  <Image
                    fluid={data.nasaApod.childImageSharp.fluid}
                    alt="NASA apod"
                  />
                </ImageContainer>
                <TextContainer>
                  <h3>NASA Astronomy Picture of the Day</h3>
                  <p>
                    An app which displays daily images and videos from NASA's
                    APOD API.
                  </p>
                  <ProjectLink href="https://github.com/GK-Hynes/nasa-apod">
                    Code
                  </ProjectLink>
                  <ProjectLink href="https://julie-nasa.netlify.app/">
                    Demo
                  </ProjectLink>
                  <ul>
                    <li>#React</li>
                    <li>#Gatsby</li>
                    <li>#APIs</li>
                  </ul>
                </TextContainer>
              </ProjectCard>
              <ProjectCard>
                <TextContainer>
                  <h3>Mars Weather App</h3>
                  <p>
                    An app to display the weather on Mars using Nasa's InSight
                    Mars Weather Service API.
                  </p>
                  <ProjectLink href="https://github.com/GK-Hynes/mars-weather-app">
                    Code
                  </ProjectLink>
                  <ProjectLink href="https://weather-on-mars.netlify.app/">
                    Demo
                  </ProjectLink>
                  <ul>
                    <li>#React</li>
                    <li>#Gatsby</li>
                    <li>#APIs</li>
                  </ul>
                </TextContainer>
                <ImageContainer>
                  <Image
                    fluid={data.marsWeather.childImageSharp.fluid}
                    alt="Mars Weather"
                  />
                </ImageContainer>
              </ProjectCard>
              <ProjectCard>
                <ImageContainer>
                  <Image
                    fluid={data.trataTimer.childImageSharp.fluid}
                    alt="Tráta Timer"
                  />
                </ImageContainer>
                <TextContainer>
                  <h3>Tráta Timer</h3>
                  <p>
                    A Pomodoro timer built with Gatsby for the freeCodeCamp
                    curriculum.
                  </p>
                  <ProjectLink href="https://github.com/GK-Hynes/trata-timer">
                    Code
                  </ProjectLink>
                  <ProjectLink href="https://trata-timer.netlify.app/">
                    Demo
                  </ProjectLink>
                  <ul>
                    <li>#React</li>
                    <li>#Gatsby</li>
                  </ul>
                </TextContainer>
              </ProjectCard>
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
    nasaApod: file(absolutePath: { regex: "/nasa-apod.png/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    marsWeather: file(absolutePath: { regex: "/mars-weather.png/" }) {
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
