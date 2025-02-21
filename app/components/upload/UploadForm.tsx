import ArtworkNameField from "./ArtworkNameField";
import ArtworkDescriptionField from "./ArtworkDescriptionField";
import ArtworkImageField from "./ArtworkImageField";

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
      <ArtworkDescriptionField />
      <ArtworkImageField />
      <button
        type="submit"
        className="w-1/2 mx-auto text-sm sm:text-base md:text-lg"
      >
        Submit
      </button>
    </form>
  );
};
export default UploadForm;
