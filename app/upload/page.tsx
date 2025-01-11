"use client";

import { FileUploader } from "@aws-amplify/ui-react-storage";
import "@aws-amplify/ui-react/styles.css";

const Upload = () => {
  return (
    <div>
      Upload Page placeholder
      <FileUploader
        acceptedFileTypes={["image/*"]}
        path="public/"
        maxFileCount={1}
        isResumable
      />
    </div>
  );
};
export default Upload;
