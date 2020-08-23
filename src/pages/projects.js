import React from "react";
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
`;

const ProjectCard = styled.article`
  display: flex;
  padding-bottom: 2rem;
  position: relative;
`;

const ImageContainer = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  position: relative;

  figure {
    position: relative;

    img {
      position: relative;
    }

    ::before {
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

const Projects = () => (
  <Layout>
    <SEO title="Gerard Hynes | Projects" />
    <Heading>Projects</Heading>
    <ProjectGrid>
      <ProjectCard>
        <ImageContainer>
          <figure>
            <img
              src="https://res.cloudinary.com/gerhynes/image/upload/v1598122792/Screenshot_2020-08-22_Home_mbsmnl.png"
              alt=""
            />
          </figure>
        </ImageContainer>
        <TextContainer>
          <h3>Project Title</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            doloremque omnis animi, eligendi magni a voluptatum, vitae,
            consequuntur rerum illum odit fugit assumenda rem dolores inventore
            iste reprehenderit maxime! Iusto.
          </p>
          <ProjectLink href="#">Code</ProjectLink>
          <ProjectLink href="#">Demo</ProjectLink>
          <ul>
            <li>#React</li>
            <li>#Gatsby</li>
            <li>#APIs</li>
          </ul>
        </TextContainer>
      </ProjectCard>
      <ProjectCard>
        <TextContainer>
          <h3>Project Title</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            doloremque omnis animi, eligendi magni a voluptatum, vitae,
            consequuntur rerum illum odit fugit assumenda rem dolores inventore
            iste reprehenderit maxime! Iusto.
          </p>
          <ProjectLink href="#">Code</ProjectLink>
          <ProjectLink href="#">Demo</ProjectLink>
          <ul>
            <li>#React</li>
            <li>#Gatsby</li>
            <li>#APIs</li>
          </ul>
        </TextContainer>
        <ImageContainer>
          <figure>
            <img
              src="https://res.cloudinary.com/gerhynes/image/upload/v1587814025/Screenshot_2020-04-25_Home_uurxds.png"
              alt=""
            />
          </figure>
        </ImageContainer>
      </ProjectCard>
    </ProjectGrid>
  </Layout>
);

export default Projects;
