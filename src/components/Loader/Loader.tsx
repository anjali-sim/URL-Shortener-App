import React from "react";
import LoaderContainer from "./Loader.style";
import { Rings } from "react-loader-spinner";

const Loader: React.FC = () => {
  return (
    <>
      <LoaderContainer>
        <Rings color="#000000" height={100} width={100}></Rings>
      </LoaderContainer>
    </>
  );
};

export default Loader;
