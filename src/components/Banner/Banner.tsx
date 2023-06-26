import React from "react";
import BannerContent from "./Banner.style";
import Input from "../Input";
import Background from "../Background";

const Banner: React.FC = () => {
  return (
    <>
      <BannerContent>
        <Input />
        <Background />
      </BannerContent>
    </>
  );
};

export default Banner;
