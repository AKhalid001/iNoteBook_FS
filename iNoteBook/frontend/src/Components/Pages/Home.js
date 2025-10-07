import { useNavigate } from "react-router-dom";
import { FaBookOpen, FaLock, FaPlus } from "react-icons/fa";

export const Home = () => {
  const navigateTo = useNavigate();

  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold display-5 text-primary mb-3">
          Welcome to <span className="text-dark">iNotebook</span>
        </h1>
        <p className="text-muted fs-5">
          Your personal space to create, organize, and manage notes securely.
        </p>
      </div>

      {/* Carousel */}
      {/* <div
        id="carouselExampleSlidesOnly"
        className="carousel slide shadow rounded overflow-hidden mb-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/Bg3.jpg"
              className="d-block w-100"
              alt="Notes Background"
              style={{ height: "400px", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/Bg2.jpg"
              className="d-block w-100"
              alt="Creative Workspace"
              style={{ height: "400px", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/Bg1.jpg"
              className="d-block w-100"
              alt="Writing Inspiration"
              style={{ height: "400px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div> */}

      {/* Features / Cards */}
      <div className="row g-4">
        {/* Create New Note */}
        <div className="col-md-6 col-lg-4">
          <div
            className="card shadow h-100 border-0 hover-card"
            role="button"
            onClick={() => navigateTo("/newNote")}
          >
            <div className="card-body text-center py-5">
              <FaPlus className="fs-1 text-success mb-3" />
              <h4 className="card-title fw-bold mb-2">Create New Note</h4>
              <p className="card-text text-muted">
                Add a new note instantly and keep your ideas flowing.
              </p>
            </div>
          </div>
        </div>

        {/* My Notes */}
        <div className="col-md-6 col-lg-4">
          <div
            className="card shadow h-100 border-0 hover-card"
            role="button"
            onClick={() => navigateTo("/myNote")}
          >
            <div className="card-body text-center py-5">
              <FaBookOpen className="fs-1 text-primary mb-3" />
              <h4 className="card-title fw-bold mb-2">My Notes</h4>
              <p className="card-text text-muted">
                View, edit, and manage all your saved notes in one place.
              </p>
            </div>
          </div>
        </div>

        {/* Private Folder */}
        <div className="col-md-6 col-lg-4">
          <div className="card text-white bg-dark shadow h-100 border-0 hover-card">
            <div className="card-body text-center py-5">
              <FaLock className="fs-1 mb-3" />
              <h4 className="card-title fw-bold mb-2">Private Folder</h4>
              <p className="card-text">
                Securely store notes you want to keep private and encrypted.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center mt-5 text-muted small">
        © {new Date().getFullYear()} iNotebook | Crafted with ❤️ for thinkers & creators
      </footer>

      {/* Custom Hover Style */}
      <style>
        {`
          .hover-card {
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }
          .hover-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.15);
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};
