import React from "react";
import loadImg from "../assets/load.svg";

const LoadState = ({ loading = false }) => {
  return (
    <>
      {loading && (
        <div className="absolute top-0 right-0 flex justify-center items-center bg-cover bg-white/10 w-screen h-screen z-[200]">
          <img src={loadImg} alt="loading" />
        </div>
      )}
    </>
  );
};

export default LoadState;
