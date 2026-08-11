import React from "react";
import ImageCard from "./ImageCard";
import styles from "./Image.module.css";

const Images = ({ images }) => {
  return (
    <div className={styles.container}>
      {images.slice(0, 4).map((element) => {
        return <ImageCard />;
      })}
    </div>
  );
};

export default Images;
