import React from "react";
import Img from "gatsby-image";

// Image component because gatsby-image doesn't work with gifs

const Image = ({ image, ...theRest }) => {
  if (!image) {
    return null;
  }
  if (image.extension === "gif") {
    return <img src={image.publicUrl} {...theRest} />;
  }
  return <Img fluid={image.childImageSharp.fluid} {...theRest} />;
};

export default Image;
