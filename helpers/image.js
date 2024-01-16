import Image from "next/image";
const ImageComponent = ({ ...rest }) => {
  return (
    <Image
      // sizes="(max-width: 768px) 10vw, (max-width: 1200px) 5vw, 10vw"
        sizes="20, 40, 80, 160, 320, 640, 750, 828, 1080, 1200, 1920, 2048, 3840"
      alt={"s"}
      loading="eager"
      {...rest}
    />
  );
};

export default ImageComponent;
