"use client";

import { useState } from "react";

const ArtWorkNameField = () => {
  const [artworkName, setArtworkName] = useState("");
  return (
    <label htmlFor="name" className="amplify-label">
      Artwork Name:
      <input
        className="amplify-input"
        id="name"
        type="text"
        value={artworkName}
        onChange={(e) => setArtworkName(e.target.value)}
        required
      />
    </label>
  );
};
export default ArtWorkNameField;
