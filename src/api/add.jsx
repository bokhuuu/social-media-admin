import axios from "axios";

const BASE_URL = "http://localhost/backend/"; // Update with your backend URL

export const addSocialMedia = async (socialMediaData) => {
  try {
    const response = await axios.post(BASE_URL + "create.php", socialMediaData);
    return response.data;
  } catch (error) {
    console.error("Error adding social media:", error);
    throw new Error("Failed to add social media");
  }
};
