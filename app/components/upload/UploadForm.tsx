import ArtworkNameField from "./ArtworkNameField";

const UploadForm = () => {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <form
      className="w-full flex flex-col md:w-9/12 lg:w-6/12 mx-auto p-4 rounded-lg border-solid border-2 border-[#ddd] shadow-md"
      onSubmit={handleSubmit}
    >
      <ArtworkNameField />
    </form>
  );
};
export default UploadForm;
