import Image, { ImageProps } from "next/image";

export default function MDXImage({ src, alt, width, height }: ImageProps) {
  return <Image src={src} alt={alt} width={width} height={height} />;
}

MDXImage.defaultProps = {
  alt: "",
  width: 800,
  height: 400,
};
