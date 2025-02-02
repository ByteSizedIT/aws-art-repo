"use client";

import { FileUploader } from "@aws-amplify/ui-react-storage";
import "@aws-amplify/ui-react/styles.css";

const Upload = () => {
  return (
    <div className="w-4/5 mt-4 mx-auto">
      <FileUploader
        acceptedFileTypes={["image/*"]}
        path="artUploads/"
        maxFileCount={1}
        isResumable
      />
    </div>
  );
};
export default Upload;
