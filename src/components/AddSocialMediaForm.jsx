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
    } catch (error) {
      setMessage("Error: Failed to add social media");
      console.error("Error adding social media:", error);
    }
  };

  return (
    <div>
      <h2>Add Social Media!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Social Media Name:
          <input
            type="text"
            value={socialMediaName}
            onChange={(e) => setSocialMediaName(e.target.value)}
            required
          />
        </label>
        <label>
          Social Media Link:
          <input
            type="text"
            value={socialMediaLink}
            onChange={(e) => setSocialMediaLink(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddSocialMediaForm;
