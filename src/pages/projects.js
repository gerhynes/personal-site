import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import Layout from "../components/layout";
import Seo from "../components/seo";
import PageHeadingStyles from "../styles/PageHeadingStyles";

const ProjectGridStyles = styled.section`
  margin: 1rem 0;
  padding: 1rem 1.5rem;
`;

const ProjectStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2.5rem;
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
  padding: 0 2rem;

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
  const { socialImg, foram, nasaApod, readingHabit } = data;
  return (
    <Layout>
      <Seo
        title="Gerard Hynes | Projects"
        description={description}
        image={socialImg.childImageSharp.resize}
      />
      <PageHeadingStyles>Projects</PageHeadingStyles>
      <ProjectGridStyles>
        <ProjectStyles>
          <ProjectTextStyles>
            <h3>Fóram</h3>
            <p>
              A fullstack discussion forum app with a React frontend and a Scala
              API. Includes authentication, persistent data and test suites.
            </p>
            <ProjectLinkStyles to="/foram">View Project</ProjectLinkStyles>
            <ProjectTagsStyles>
              <li>#Scala</li>
              <li>#Akka</li>
              <li>#React</li>
              <li>#PostgreSQL</li>
              <li>#Testing</li>
            </ProjectTagsStyles>
          </ProjectTextStyles>
          <ProjectImageStyles className="upper">
            <figure>
              <GatsbyImage
                image={foram.childImageSharp.gatsbyImageData}
                alt="Fóram"
              />
            </figure>
          </ProjectImageStyles>
        </ProjectStyles>

        <ProjectStyles>
          <ProjectImageStyles>
            <figure>
              <GatsbyImage
                image={readingHabit.childImageSharp.gatsbyImageData}
                alt="Reading Habit"
              />
            </figure>
          </ProjectImageStyles>
          <ProjectTextStyles>
            <h3>Reading Habit</h3>
            <p>
              A fullstack Jamstack app to help me keep track of the books I'm
              reading.
            </p>
            <ProjectLinkStyles to="/reading-habit">
              View Project
            </ProjectLinkStyles>
            <ProjectTagsStyles>
              <li>#Nextjs</li>
              <li>#FaunaDB</li>
              <li>#Auth0</li>
              <li>#TailwindCSS</li>
            </ProjectTagsStyles>
          </ProjectTextStyles>
        </ProjectStyles>

        <ProjectStyles>
          <ProjectTextStyles>
            <h3>NASA Astronomy Picture of the Day</h3>
            <p>
              An app which displays daily images and videos from{" "}
              <TextLinkStyles href="https://api.nasa.gov/">
                NASA's APOD API.
              </TextLinkStyles>{" "}
              Built as a present for my NASA-loving wife.
            </p>
            <ProjectLinkStyles to="/nasa-apod">View Project</ProjectLinkStyles>
            <ProjectTagsStyles>
              <li>#React</li>
              <li>#Gatsby</li>
              <li>#APIs</li>
              <li>#PWA</li>
            </ProjectTagsStyles>
          </ProjectTextStyles>
          <ProjectImageStyles className="upper">
            <figure>
              <GatsbyImage
                image={nasaApod.childImageSharp.gatsbyImageData}
                alt="NASA apod"
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
        resize(width: 1200) {
          src
          height
          width
        }
      }
    }
    foram: file(absolutePath: { regex: "/foram.png/" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    readingHabit: file(absolutePath: { regex: "/reading-habit.png/" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    nasaApod: file(absolutePath: { regex: "/nasa-apod.png/" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
