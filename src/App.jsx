import AddSocialMediaForm from "./components/AddSocialMediaForm";
// import EditSocialMediaForm from "./components/EditSocialMediaForm";
import SocialMediaList from "./components/SocialMediaList";

const App = () => {
  return (
    <>
      <h1>Social Media Admin Panel</h1>
      <AddSocialMediaForm />
      <SocialMediaList />
      {/* <EditSocialMediaForm /> */}
    </>
  );
};

export default App;
