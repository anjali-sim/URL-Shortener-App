import React from "react";
import BannerContent from "./Banner.style";
import InputShortener from "../Input";
import Background from "../Background";

const Banner: React.FC = () => {
  return (
    <>
      <BannerContent>
        <InputShortener />
        <Background />
      </BannerContent>
    </>
  );
};

export default Banner;
