import React from "react";
import Img from "gatsby-image";
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
  max-width: 960px;
`;

const ProjectCard = styled.article`
  display: flex;
  padding-bottom: 4rem;
`;

const ImageContainer = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
`;

const TextContainer = styled.div`
  flex: 2;
  padding: 1rem;
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

const Writing = () => (
  <Layout>
    <SEO title="Gerard Hynes | Projects" />
    <Heading>Projects</Heading>
    <ProjectGrid>
      <ProjectCard>
        <ImageContainer>
          <img
            src="https://res.cloudinary.com/gerhynes/image/upload/v1585406433/Screenshot_2020-03-28_React_Calculator_vwcqm4.png"
            alt=""
          />
        </ImageContainer>
        <TextContainer>
          <h3>Project Title</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            doloremque omnis animi, eligendi magni a voluptatum, vitae,
            consequuntur rerum illum odit fugit assumenda rem dolores inventore
            iste reprehenderit maxime! Iusto.
          </p>
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
          <ul>
            <li>#React</li>
            <li>#Gatsby</li>
            <li>#APIs</li>
          </ul>
        </TextContainer>
        <ImageContainer>
          <img
            src="https://res.cloudinary.com/gerhynes/image/upload/v1587814025/Screenshot_2020-04-25_Home_uurxds.png"
            alt=""
          />
        </ImageContainer>
      </ProjectCard>
    </ProjectGrid>
  </Layout>
);

export default Writing;
