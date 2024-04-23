import axios from "axios";
import { BASE_URL } from "../config/constants";

export const deleteSocialMedia = async (id) => {
  try {
    const response = await axios.post(BASE_URL + "delete.php", { id });
    return response.data;
  } catch (error) {
    console.error("Error deleting social media:", error);
    throw new Error("Failed to delete social media");
  }
};
