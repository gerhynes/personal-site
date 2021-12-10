import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

// Image component because gatsby-image doesn't work with gifs

const Image = ({ image, ...theRest }) => {
  if (!image) {
    return null;
  }
  if (image.extension === "gif") {
    return <img src={image.publicUrl} {...theRest} />;
  }
  return <GatsbyImage image={image.childImageSharp.gatsbyImageData} {...theRest} />;
};

export default Image;
