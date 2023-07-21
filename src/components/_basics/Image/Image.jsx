import { useMemo } from "react";
import { Image as MantineImage } from "@mantine/core";
import Constants from "@infra/Constants";
import image_user from "@assets/images/user.png";

const Image = ({
  width,
  height,
  src,
  alt,
  type = Constants.photoTypes.user,
  circle = false,
}) => {
  const defaultImg = useMemo(() => {
    if (type === Constants.photoTypes.user) return image_user;
  }, [type]);

  return (
    <MantineImage
      width={width}
      height={height}
      alt={alt}
      src={src || defaultImg}
      radius={circle ? 100 : 5}
      onError={() => console.log("ERROR")}
    />
  );
};

export default Image;
