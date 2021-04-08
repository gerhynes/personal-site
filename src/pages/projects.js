import React from "react";
import { graphql, Link } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageHeadingStyles from "../styles/PageHeadingStyles";

const ProjectGridStyles = styled.section`
  padding: 1rem 1.5rem;
`;

const ProjectStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 1.5rem;
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
  &.upper {
    grid-row: 1;
  }
  @media (min-width: 768px) {
    &.upper {
      grid-row: auto;
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

function Projects({ data }) {
  const { description } = data.site.siteMetadata;
  const { socialImg, nasaApod, trataTimer } = data;
  return (
    <Layout>
      <SEO
        title="Gerard Hynes | Projects"
        description={description}
        image={socialImg.childImageSharp.fluid}
      />
      <PageHeadingStyles>Projects</PageHeadingStyles>
      <ProjectGridStyles>
        <ProjectStyles>
          <ProjectImageStyles>
            <figure>
              <Image fluid={nasaApod.childImageSharp.fluid} alt="NASA apod" />
            </figure>
          </ProjectImageStyles>
          <ProjectTextStyles>
            <h3>NASA Astronomy Picture of the Day</h3>
            <p>
              An app which displays daily images and videos from{" "}
              <TextLinkStyles href="https://api.nasa.gov/">
                NASA's APOD API. Built as a present for my NASA-loving wife.
              </TextLinkStyles>
            </p>
            <ProjectLinkStyles to="/nasa-apod">View Project</ProjectLinkStyles>
            <ProjectTagsStyles>
              <li>#React</li>
              <li>#Gatsby</li>
              <li>#APIs</li>
              <li>#PWA</li>
            </ProjectTagsStyles>
          </ProjectTextStyles>
        </ProjectStyles>

        <ProjectStyles>
          <ProjectTextStyles>
            <h3>Tráta Timer</h3>
            <p>
              A Pomodoro timer I built to help me focus when learning new
              technologies.
            </p>
            <ProjectLinkStyles to="/trata-timer">
              View Project
            </ProjectLinkStyles>
            <ProjectTagsStyles>
              <li>#React</li>
              <li>#Gatsby</li>
            </ProjectTagsStyles>
          </ProjectTextStyles>

          <ProjectImageStyles className="upper">
            <figure>
              <Image
                fluid={trataTimer.childImageSharp.fluid}
                alt="Tráta Timer"
              />
            </figure>
          </ProjectImageStyles>
        </ProjectStyles>
      </ProjectGridStyles>
    </Layout>
  );
}

export default Projects;

export const query = graphql`
  query projectsQuery {
    site {
      siteMetadata {
        description
      }
    }
    socialImg: file(absolutePath: { regex: "/social.png/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
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
