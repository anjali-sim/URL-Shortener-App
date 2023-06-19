import React from "react";
import BannerStyle from "./Banner.style";
import InputShortener from "../Input";
import Background from "../Background";

const Banner: React.FC = () => {
  return (
    <>
      <BannerStyle>
        <InputShortener />
        <Background />
      </BannerStyle>
    </>
  );
};

export default Banner;
