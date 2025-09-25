import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
  const NewNote = useNavigate()
  return (
    <div className="container py-4">
      {/* Carousel */}
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide shadow rounded overflow-hidden mb-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/Bg3.jpg"
              className="d-block w-100"
              alt="..."
              style={{ height: "400px", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/Bg3.jpg"
              className="d-block w-100"
              alt="..."
              style={{ height: "400px", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/Bg3.jpg"
              className="d-block w-100"
              alt="..."
              style={{ height: "400px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow h-100">
            <div className="card-header bg-primary text-white">Header</div>
            <div className="card-body">
              <h4 className="card-title">Light card title</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card text-white bg-dark shadow h-100">
            <div className="card-header">Header</div>
            <div className="card-body">
              <h4 className="card-title">Dark card title</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4" onClick={()=>NewNote('./newNote')}>
          <div className="card shadow h-100">
            <div className="card-body">
              <h4 className="card-title"> + Create Notes</h4>
            </div>
          </div>
        </div>

        {/* Add more cards if needed */}
      </div>
      </div>
  );
};
