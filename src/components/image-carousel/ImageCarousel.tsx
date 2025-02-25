import image from "../../assets/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg";
type ImageCarouselType = {
  url: string;
  alt: string;
};

interface ImageCarouselProps {
  images: ImageCarouselType[];
  carouselId: string;
}
export const ImageCarousel = ({ images, carouselId }: ImageCarouselProps) => {
  return (
    <div id={carouselId} className="carousel slide " data-bs-ride="carousel">
      <div className="carousel-inner" style={{ height: "20rem" }}>
        {images.length > 0 ? (
          images.map((item, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <img
                src={item.url}
                className="d-block w-100 img-fluid"
                alt={item.alt}
                style={{ height: "20rem", objectFit: "cover" }}
              />
            </div>
          ))
        ) : (
          <div className={`carousel-item active`}>
            <img
              src={image}
              className="d-block w-100 img-fluid"
              alt="No image"
              style={{ height: "20rem", objectFit: "cover" }}
            />
          </div>
        )}
      </div>

      {/* Carousel controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#${carouselId}`}
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
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#${carouselId}`}
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
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
