import { useState, useEffect } from "react";
import { fetchSocialMedia } from "../api/fetchSocialMedia";

const SocialMediaList = () => {
  const [socialMediaList, setSocialMediaList] = useState([]);

  useEffect(() => {
    // Fetch social media entries when the component mounts
    fetchSocialMedia()
      .then((data) => setSocialMediaList(data))
      .catch((error) => console.error("Error fetching social media:", error));
  }, []);

  return (
    <div>
      <h1>Social Media List</h1>
      <ul>
        {socialMediaList.map((socialMedia) => (
          <li key={socialMedia.ID}>
            <strong>{socialMedia.Social_Media_Name}: </strong>
            <a
              href={socialMedia.Social_Media_Link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {socialMedia.Social_Media_Link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMediaList;
