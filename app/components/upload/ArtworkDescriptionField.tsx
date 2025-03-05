"use client";

import { useState } from "react";

const ArtworkDescriptionField = () => {
  const [artworkDescription, setArtworkDescription] = useState("");
  return (
    <label htmlFor="description" className="amplify-label">
      Description:
      <textarea
        // className="w-full text-sm sm:text-base md:text-lg bg-transparent border-solid border-2 rounded-lg  focus:outline-gray-500 ml-2 px-2 py-1 flex-1 amplify-input"
        className="amplify-textarea"
        rows={4}
        maxLength={500}
        id="description"
        value={artworkDescription}
        onChange={(e) => setArtworkDescription(e.target.value)}
        required
      />
    </label>
  );
};
export default ArtworkDescriptionField;
