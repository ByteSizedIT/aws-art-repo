import ArtworkNameField from "./ArtworkNameField";
import ArtworkDescriptionField from "./ArtworkDescriptionField";
import ArtworkImageField from "./ArtworkImageField";

const UploadForm = () => {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("submitting new artwork");
  }

  return (
    <form
      className="w-full flex flex-col p-4 rounded-lg border-solid border-2 border-[#ddd] shadow-md"
      onSubmit={handleSubmit}
    >
      <ArtworkNameField />
      <ArtworkDescriptionField />
      <ArtworkImageField />
      <div className="m-2 w-full flex justify-center">
        <button className="amplify-button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
export default UploadForm;
