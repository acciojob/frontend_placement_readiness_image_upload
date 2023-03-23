import React, { useState } from "react";

const ImageUpload = () => {
  const [image, setImage] = useState("");

  const handleImageChange = (event) => {};

  return (
    <div>
      <br />
      <input type="file" onChange={handleImageChange} />
      <br />
      <br />
      {image && <img src={image} alt="uploaded" width="400" />}
    </div>
  );
};

export default ImageUpload;
