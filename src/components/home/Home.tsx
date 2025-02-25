import { useEffect, useState } from "react";
import { Card } from "../UI/Card";
import "./home.css";
import axios from "axios";
// import { DetailPage } from "../product-page/DetailPage";
import { ImageCarousel } from "../image-carousel/ImageCarousel";
import { Bikes } from "./Bikes";
const Home = () => {
  const [showBrand, setShowBrand] = useState("");
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
      {/* {showPage ? ( */}
      <div>
        <ImageCarousel
          images={[
            { url: "https://picsum.photos/1920/600", alt: "this is alt text" },
            { url: "https://picsum.photos/1920/600", alt: "this is alt text" },
            { url: "https://picsum.photos/1920/600", alt: "this is alt text" },
            { url: "https://picsum.photos/1920/600", alt: "this is alt text" },
            { url: "https://picsum.photos/1920/600", alt: "this is alt text" },
          ]}
          carouselId="home-backdrop"
        />
        {/* Cards Section with Horizontal Scroll */}
        <div className="container my-5">
          <h2 className="mb-4">Our Featured Brands</h2>
          <div className="d-flex overflow-auto gap-2">
            {brandData.map((card) => (
              <Card
                containerStyles="d-flex flex-fill"
                image={{ url: card.image, alt: card.brand }}
                showDescription={true}
                buttonText="Show bikes"
                cardClick={() => {
                  setShowBrand(card.brand);
                }}
              />
            ))}
          </div>
        </div>
        {showBrand && (
          <div className="container flex-1 mt-3">
            <div className="container my-5">
              <h2 className="mb-4">Featured Bikes for {showBrand}</h2>
            </div>
            <Bikes brandName={showBrand} />
          </div>
        )}
        {/* <div className="container my-5">
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
        </div> */}
      </div>
      {/* ) : (
        <div>
          <DetailPage />
          <DetailPage /> 
        </div>
      )} */}
      {/* Backdrop Carousel Section */}
    </div>
  );
};

export default Home;
