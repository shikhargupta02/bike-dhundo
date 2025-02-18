import { useEffect, useState } from "react";
import { Card } from "../UI/Card";
import "./home.css";
import axios from "axios";
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

  // Sample data for the cards
  const cardData = [
    {
      id: 1,
      title: "Card 1",
      description: "This is a card. it shows responsive data to the user ",
      imageUrl: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      title: "Card 2",
      description: "This is a card. it shows responsive data to the user ",
      imageUrl: "https://picsum.photos/200/300",
    },
    {
      id: 3,
      title: "Card 3",
      description: "This is a card. it shows responsive data to the user ",
      imageUrl: "https://picsum.photos/200/300",
    },
    {
      id: 4,
      title: "Card 4",
      description: "This is a card. it shows responsive data to the user ",
      imageUrl: "https://picsum.photos/200/300",
    },
    {
      id: 5,
      title: "Card 5",
      description: "This is a card. it shows responsive data to the user ",
      imageUrl: "https://picsum.photos/200/300",
    },
    {
      id: 6,
      title: "Card 6",
      description: "This is a card. it shows responsive data to the user ",
      imageUrl: "https://picsum.photos/200/300",
    },
  ];

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
              imageUrl={card.image}
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
              imageUrl={card.imageUrl}
              buttonText="Go Somewhere"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
