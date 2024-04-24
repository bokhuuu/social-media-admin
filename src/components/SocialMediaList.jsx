import { useState, useEffect } from "react";
import { fetchSocialMedia } from "../api/fetchSocialMedia";
import { updateSocialMedia } from "../api/updateSocialMedia";
import { deleteSocialMedia } from "../api/deleteSocialMedia";
import { getIconFilename } from "../utils/socialMediaUtils";
import { ICONS_BASE_URL } from "../config/constants";

const SocialMediaList = () => {
  const [socialMediaList, setSocialMediaList] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [newName, setNewName] = useState("");
  const [newLink, setNewLink] = useState("");

  // Social media icon mapping
  const iconMapping = {
    "facebook.com": "facebook.svg",
    "twitter.com": "twitter.svg",
    "instagram.com": "instagram.svg",
    "youtube.com": "youtube.svg",
    "linkedin.com": "linkedin.svg",
    "tiktok.com": "tiktok.svg",
  };

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
    <div className="container">
      <ul className="list-group">
        {socialMediaList.map((socialMedia) => (
          <li key={socialMedia.ID} className="list-group-item">
            <div className="row align-items-center">
              <div className="col-auto ">
                <img
                  src={`${ICONS_BASE_URL}${getIconFilename(
                    socialMedia.Social_Media_Link,
                    iconMapping
                  )}`}
                  alt={socialMedia.Social_Media_Name}
                  className="img-fluid"
                  style={{ width: 30, height: 30 }}
                />
              </div>
              <div className="col mb-2 ">
                {editingId === socialMedia.ID ? (
                  <>
                    <input
                      type="text"
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      className="form-control"
                    />
                    <input
                      type="text"
                      value={newLink}
                      onChange={(e) => setNewLink(e.target.value)}
                      className="form-control"
                    />
                    <button
                      onClick={() => saveChanges(socialMedia.ID)}
                      className="btn btn-primary mt-2"
                    >
                      Save
                    </button>
                  </>
                ) : (
                  <div className="d-flex justify-content-between">
                    <strong>{socialMedia.Social_Media_Name} </strong>
                    <a
                      href={socialMedia.Social_Media_Link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {socialMedia.Social_Media_Link}
                    </a>
                  </div>
                )}
              </div>
              <div className="col-auto">
                <div className="btn-group" role="group" aria-label="Actions">
                  <button
                    onClick={() =>
                      handleEdit(
                        socialMedia.ID,
                        socialMedia.Social_Media_Name,
                        socialMedia.Social_Media_Link
                      )
                    }
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(socialMedia.ID)}
                    className="btn btn-sm btn-outline-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMediaList;
