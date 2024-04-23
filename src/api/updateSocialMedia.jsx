import axios from "axios";
import BASE_URL from "../config/constants";

export const updateSocialMedia = async (socialMediaData) => {
  try {
    const response = await axios.post(BASE_URL + "update.php", socialMediaData);
    return response.data;
  } catch (error) {
    console.error("Error updating social media:", error);
    throw new Error("Failed to update social media");
  }
};
