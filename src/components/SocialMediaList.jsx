import { useState, useEffect } from "react";
import { fetchSocialMedia } from "../api/fetchSocialMedia";
import { updateSocialMedia } from "../api/updateSocialMedia";
import { deleteSocialMedia } from "../api/deleteSocialMedia";

const SocialMediaList = () => {
  const [socialMediaList, setSocialMediaList] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [newName, setNewName] = useState("");
  const [newLink, setNewLink] = useState("");

  // Function to fetch social media entries
  const fetchData = async () => {
    try {
      const data = await fetchSocialMedia();
      setSocialMediaList(data);
    } catch (error) {
      console.error("Error fetching social media:", error);
    }
  };

  // Function to handle editing
  const handleEdit = (id, name, link) => {
    setEditingId(id);
    setNewName(name);
    setNewLink(link);
  };

  // Function to save changes after editing
  const saveChanges = async (id) => {
    try {
      await updateSocialMedia({
        id,
        social_media_name: newName,
        social_media_link: newLink,
      });
      setEditingId(null);
      // Fetch updated data after editing
      fetchData();
    } catch (error) {
      console.error("Error updating social media:", error);
    }
  };

  // Function to handle deletion
  const handleDelete = async (id) => {
    try {
      await deleteSocialMedia(id);
      // Fetch updated data after deletion
      fetchData();
    } catch (error) {
      console.error("Error deleting social media:", error);
    }
  };

  // Effect to fetch data when the component mounts and every 1 seconds
  useEffect(() => {
    fetchData(); // Fetch data when the component mounts

    const intervalId = setInterval(fetchData, 1000); // Fetch data every 1 second

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Social Media List</h1>
      <ul>
        {socialMediaList.map((socialMedia) => (
          <li key={socialMedia.ID}>
            {editingId === socialMedia.ID ? (
              <>
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
                <input
                  type="text"
                  value={newLink}
                  onChange={(e) => setNewLink(e.target.value)}
                />
                <button onClick={() => saveChanges(socialMedia.ID)}>
                  Save
                </button>
              </>
            ) : (
              <>
                <strong>{socialMedia.Social_Media_Name}: </strong>
                <a
                  href={socialMedia.Social_Media_Link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {socialMedia.Social_Media_Link}
                </a>
                <button
                  onClick={() =>
                    handleEdit(
                      socialMedia.ID,
                      socialMedia.Social_Media_Name,
                      socialMedia.Social_Media_Link
                    )
                  }
                >
                  Edit
                </button>
                <button onClick={() => handleDelete(socialMedia.ID)}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMediaList;
