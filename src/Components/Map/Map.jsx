import React from "react";
import Coords from "./Coords.json";
import WorldImg from "./world-map.png";
import ImageMapper from "react-image-mapper";

export default function Map({ handleClick }) {
  return (
    <ImageMapper
      src={WorldImg}
      onClick={(e) => handleClick(e.name)}
      map={Coords}
      width={750}
      imgWidth={1000}
    />
  );
}
