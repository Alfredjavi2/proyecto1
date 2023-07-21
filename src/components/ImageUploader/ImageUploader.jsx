import React, { useState, useRef } from "react";

import { Image } from "@components/_exports";
import { uploadPhoto } from "./ImageUploader.service";
import ButtonCamera from "./ButtonCamera";
import "./ImageUploader.scss";
import ImageUploaderLogic from "./ImageUploader.logic";

const ImageUploader = ({
  src,
  alt,
  width = 140,
  height = 140,
  onURLChange = () => null,
}) => {
  const { imagePreview, hiddenFileInput, handleClick, handleFileChange } =
    ImageUploaderLogic({ onURLChange });

  return (
    <div className="image-uploader-container">
      <Image
        width={width}
        height={height}
        src={imagePreview || src}
        alt={alt}
        circle
      />

      <ButtonCamera handleUpload={handleClick} />

      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleFileChange}
        style={{ display: "none" }}
        accept=".png, .jpg, .jpeg"
      />
    </div>
  );
};

export default ImageUploader;
