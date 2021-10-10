import Image, { ImageProps } from "next/image";

const NextImage = ({ alt, src, ...rest }: ImageProps) => {
  return <Image src={src} alt={alt} {...rest} />;
};

export default NextImage;
