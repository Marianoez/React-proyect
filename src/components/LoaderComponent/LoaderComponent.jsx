import React from "react";
import { Ripples } from "@uiball/loaders";

const LoaderComponent = () => {
  return (
    <Ripples
      size={150}
      speed={2}
      color="black"
      display="flex"
      alignItems="center"
      justifyContent="center"
    />
  );
};

export default LoaderComponent;

/* import { Waveform } from "@uiball/loaders";

const LoaderComponent = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Waveform size={40} lineWeight={3.5} speed={1} color="white" />
      2222
    </div>
  );
};

export default LoaderComponent; */
