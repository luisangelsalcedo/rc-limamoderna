import React from "react";
import data from "../data";
import FancyBoxCard from "./fancybox-card/FancyBoxCard";

const Gallery = () => {
  const { gallery } = data;
  return (
    <div className="gallery">
      {gallery.map(({ title, sub, src }) => (
        <FancyBoxCard
          title={title}
          sub={sub}
          src={src}
          key={src}
          gallery="gallery"
        />
      ))}
    </div>
  );
};

export default Gallery;
