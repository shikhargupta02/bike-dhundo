import { useEffect, useState } from "react";
import { Card } from "../UI/Card";
import "./home.css";
import axios from "axios";
import { cardData } from "../../utils/data-store";
const Home = () => {
  const [brandData, setBrandData] = useState<
    { brand: string; image: string }[]
  >([]);
  useEffect(() => {
    axios
      .get("https://bike-dash.onrender.com/brand")
      .then((response) => {
        setBrandData(response.data.brands);
        console.log(response.data); // Handle the response data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      {/* Backdrop Carousel Section */}
      <div
        id="carouselBackdrop"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" style={{ height: "20rem" }}>
          <div className="carousel-item active">
            <img
              src="https://picsum.photos/1920/600"
              className="d-block w-100 img-fluid"
              alt="Backdrop 1"
              style={{ height: "20rem", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://picsum.photos/1920/600"
              className="d-block w-100 img-fluid"
              alt="Backdrop 2"
              style={{ height: "20rem", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://picsum.photos/1920/600"
              className="d-block w-100 img-fluid"
              alt="Backdrop 3"
              style={{ height: "20rem", objectFit: "cover" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselBackdrop"
          data-bs-slide="prev"
          style={{
            backgroundColor: "black",
            borderRadius: "20px",
            padding: "5px",
            height: "2rem",
            width: "2rem",
            top: "9rem",
          }}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselBackdrop"
          data-bs-slide="next"
          style={{
            backgroundColor: "black",
            borderRadius: "20px",
            padding: "5px",
            height: "2rem",
            width: "2rem",
            top: "9rem",
          }}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Cards Section with Horizontal Scroll */}
      <div className="container my-5">
        <h2 className="mb-4">Our Featured Brands</h2>
        <div className="d-flex overflow-auto gap-2">
          {brandData.map((card) => (
            <Card
              containerStyles="d-flex flex-fill"
              image={{ url: card.image, alt: card.brand }}
              showDescription={true}
              // buttonText="Go Somewhere"
            />
          ))}
        </div>
      </div>
      <div className="container my-5">
        <h2 className="mb-4">Our Featured Cards</h2>
        <div className="d-flex overflow-auto gap-2">
          {cardData.map((card) => (
            <Card
              title={card.title}
              description={card.description}
              image={{ url: card.imageUrl, alt: "alternate image" }}
              buttonText="Go Somewhere"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
