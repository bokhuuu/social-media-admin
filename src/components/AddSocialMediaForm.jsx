import { useState } from "react";
import { addSocialMedia } from "../api/addSocialMedia";

const AddSocialMediaForm = () => {
  const [socialMediaName, setSocialMediaName] = useState("");
  const [socialMediaLink, setSocialMediaLink] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate input fields
    if (!socialMediaName || !socialMediaLink) {
      setMessage("Please fill out all fields");
      return;
    }
    // Validate link to end with ".com"
    if (!socialMediaLink.endsWith(".com")) {
      setMessage("Please enter a valid link (ending with - com)");
      return;
    }

    try {
      // Call the addSocialMedia function from the API service
      await addSocialMedia({
        social_media_name: socialMediaName,
        social_media_link: socialMediaLink,
      });
      setMessage("New record created successfully");
      // Clear form fields after successful submission
      setSocialMediaName("");
      setSocialMediaLink("");
      // Clear message after 3 seconds
      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (error) {
      setMessage("Error: Failed to add social media");
      console.error("Error adding social media:", error);
    }
  };

  return (
    <div className="container mt-3">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label text-primary fw-bold">
            Social Media Name
          </label>
          <input
            type="text"
            value={socialMediaName}
            onChange={(e) => setSocialMediaName(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label text-primary fw-bold">
            Social Media Link
          </label>
          <input
            type="text"
            value={socialMediaLink}
            onChange={(e) => setSocialMediaLink(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <p className="mt-3 text-primary" style={{ fontSize: "0.8rem" }}>
        {message}
      </p>
    </div>
  );
};

export default AddSocialMediaForm;
