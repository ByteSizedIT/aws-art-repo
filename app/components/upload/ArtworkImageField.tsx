"use client";

import React, { useState, useRef } from "react";

const ArtworkImageField = () => {
  const [artworkImage, setArtworkImage] = useState<null | File>(null);
  const fileUploadRef = useRef<HTMLInputElement>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.files);
    if (e.target.files?.[0]) {
      const file = e.target.files[0];
      const maxSize = 1024 * 1024 * 2; // 2MB
      if (file && file.size > maxSize) {
        alert("File size exceeds the limit (2MB)");
        fileUploadRef.current!.value = ""; // reset the input field
      } else {
        setArtworkImage(e.target.files[0]);
      }
    }
  }

  return (
    <label htmlFor="file" className="amplify-label">
      Artwork:
      <input
        required
        type="file"
        ref={fileUploadRef}
        accept=".png, .jpeg, .webp"
        className="amplify-input"
        id="file"
        onChange={handleChange}
      />
    </label>
  );
};
export default ArtworkImageField;
