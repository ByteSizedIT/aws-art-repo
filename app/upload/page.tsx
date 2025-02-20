"use client";

import { FileUploader } from "@aws-amplify/ui-react-storage";
import "@aws-amplify/ui-react/styles.css";
import UploadForm from "../components/upload/UploadForm";

const Upload = () => {
  return (
    <div className="w-4/5 mt-4 mx-auto">
      <FileUploader
        acceptedFileTypes={["image/*"]}
        path="artUploads/"
        maxFileCount={1}
        isResumable
      />

      <div className="w-full flex-grow flex flex-col justify-center items-center text-center mx-auto p-5">
        <h1>UPLOAD NEW ARTWORK</h1>
        <UploadForm />
      </div>
    </div>
  );
};
export default Upload;
