import { useRef, useState } from "react";
import { uploadPhoto } from "./ImageUploader.service";

const ImageUploaderLogic = ({ onURLChange }) => {
  const hiddenFileInput = useRef(null);
  const handleClick = () => hiddenFileInput.current.click();

  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0] || null;
    if (!file) return;

    if (!file?.type?.includes("image/")) return;

    // TODO detect if image throws error

    setImagePreview(URL.createObjectURL(file));
    handleUploadImage(file);
  };

  const handleUploadImage = async (file) => {
    // TODO handle loading state so the forms can know that a photo is being uploaded
    const url = await uploadPhoto({ file });
    url && onURLChange(url);
  };

  return {
    imagePreview,
    hiddenFileInput,
    handleClick,
    handleFileChange,
  };
};

export default ImageUploaderLogic;
