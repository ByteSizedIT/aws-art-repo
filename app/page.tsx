import AWS from "aws-sdk";
import Image from "next/image";

export const revalidate = 1209600; // Revalidate every 2 weeks

// Initialize S3 client
const s3 = new AWS.S3();

// List all files in the bucket
const listAllFiles = async (bucket: string, prefix: string) => {
  const params = {
    Bucket: bucket,
    Prefix: prefix,
  };

  try {
    const data = await s3.listObjectsV2(params).promise();
    // Ensure that 'data.Contents' is defined & an array
    if (!data.Contents || data.Contents.length === 0) {
      console.log("No images found in the bucket.");
      return []; // Return an empty array if no images are found
    }
    return data.Contents.map((item) => {
      // console.log({ item });
      return item.Key;
    }); // Extract keys from response
  } catch (error) {
    console.error("Error listing files:", error);
    return [];
  }
};

export default async function Home() {
  const bucketName = process.env.ART_S3_BUCKET || "";

  const fetchFileContent = async (params: { Key: string; Bucket: string }) => {
    try {
      const data = await s3.getObject(params).promise();
      return data.Body?.toString("base64"); // Convert to Base64
    } catch (error) {
      console.error(`Error fetching file ${params.Key}:`, error);
      return null;
    }
  };

  // Fetch all keys
  const fileKeys = await listAllFiles(bucketName, "artUploads/");

  // Fetch file content for each key
  const files = await Promise.all(
    fileKeys.map(async (key) => {
      const base64Data = await fetchFileContent({
        Key: key as string,
        Bucket: bucketName,
      });
      return base64Data
        ? {
            key,
            base64Url: `data:image/jpeg;base64,${base64Data}`, // Adjust MIME type as needed
          }
        : null;
    })
  );

  // console.log({ files });

  return (
    <div>
      <h1>All Files</h1>
      {files.map(
        (file, index) =>
          file && (
            <div key={index}>
              <Image
                src={file.base64Url}
                alt={file.key ?? ""}
                width={300}
                height={300}
              />
            </div>
          )
      )}
    </div>
  );
}
