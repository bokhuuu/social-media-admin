import axios from "axios";
import BASE_URL from "../config/constants";

export const fetchSocialMedia = async () => {
  try {
    const response = await axios.get(`${BASE_URL}read.php`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch social media: ${error}`);
  }
};
