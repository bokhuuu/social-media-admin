import AddSocialMediaForm from "./components/AddSocialMediaForm";
import SocialMediaList from "./components/SocialMediaList";

const App = () => {
  return (
    <div className="container-fluid p-0" style={{ background: "#f0f0f0" }}>
      <div className="jumbotron bg-primary text-white text-center mb-0">
        <h1 className="display-4">Social Media Admin Panel</h1>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-4 mb-5">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title bg-primary text-white text-center">
                  Add Social Media
                </h2>
                <AddSocialMediaForm />
              </div>
            </div>
          </div>
          <div className="col-md-8 mb-5">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title bg-primary text-white text-center mb-3">
                  Social Media List
                </h2>
                <SocialMediaList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
