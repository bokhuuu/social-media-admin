import { useState, useEffect } from "react";
import { fetchSocialMedia } from "../api/fetchSocialMedia";

const SocialMediaList = () => {
  const [socialMediaList, setSocialMediaList] = useState([]);

  // Function to fetch social media entries
  const fetchData = async () => {
    try {
      const data = await fetchSocialMedia();
      setSocialMediaList(data);
    } catch (error) {
      console.error("Error fetching social media:", error);
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
