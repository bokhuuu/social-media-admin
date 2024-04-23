// Function to extract domain from URL
const extractDomain = (url) => {
  const domain = url.replace(/(https?:\/\/)?(www\.)?/, "").split("/")[0];
  return domain;
};

// Function to get icon filename based on domain
export const getIconFilename = (url, iconMapping) => {
  const domain = extractDomain(url);
  const filename = iconMapping[domain];
  return filename ? filename : "default.svg";
};
