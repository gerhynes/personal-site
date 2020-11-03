import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageHeadingStyles from "../components/styles/PageHeadingStyles";

const ProjectGridStyles = styled.section`
  max-width: 1080px;
  margin: 0 1.5rem;
  padding-top: 1rem;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectImageStyles = styled.div`
  figure {
    position: relative;

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
  }
`;

const ProjectTextStyles = styled.div`
  padding: 3rem 2rem;

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.75;
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

const TextLinkStyles = styled.a`
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
  margin: 0.5rem auto 1.5rem auto;
  transition: background-color 300ms ease;

  &:hover {
    background-color: var(--primary-900);
  }
`;

const ProjectTagsStyles = styled.ul`
  display: flex;
  flex-wrap: wrap;
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
            <ProjectGridStyles>
              <ProjectImageStyles>
                <figure>
                  <Image
                    fluid={data.nasaApod.childImageSharp.fluid}
                    alt="NASA apod"
                  />
                </figure>
              </ProjectImageStyles>
              <ProjectTextStyles>
                <h3>NASA Astronomy Picture of the Day</h3>
                <p>
                  An app which displays daily images and videos from{" "}
                  <TextLinkStyles href="https://api.nasa.gov/">
                    NASA's APOD API.
                  </TextLinkStyles>
                </p>
                <ProjectLinkStyles to="/nasa-apod">
                  View Project
                </ProjectLinkStyles>
                <ProjectTagsStyles>
                  <li>#React</li>
                  <li>#Gatsby</li>
                  <li>#APIs</li>
                  <li>#PWA</li>
                </ProjectTagsStyles>
              </ProjectTextStyles>

              <ProjectTextStyles>
                <h3>Tráta Timer</h3>
                <p>A Pomodoro timer built with Gatsby.</p>
                <ProjectLinkStyles to="/trata-timer">
                  View Project
                </ProjectLinkStyles>
                <ProjectTagsStyles>
                  <li>#React</li>
                  <li>#Gatsby</li>
                </ProjectTagsStyles>
              </ProjectTextStyles>

              <ProjectImageStyles className="lower">
                <figure>
                  <Image
                    fluid={data.trataTimer.childImageSharp.fluid}
                    alt="Tráta Timer"
                  />
                </figure>
              </ProjectImageStyles>
            </ProjectGridStyles>
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
