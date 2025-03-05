"use client";

import "@aws-amplify/ui-react/styles.css";
import UploadForm from "../components/upload/UploadForm";

const Upload = () => {
  return (
    <div className="flex-1 flex-col  mx-auto p-5">
      <h1>UPLOAD NEW ARTWORK</h1>
      <UploadForm />
    </div>
  );
};
export default Upload;
