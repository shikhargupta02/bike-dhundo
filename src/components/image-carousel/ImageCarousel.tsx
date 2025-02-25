type ImageCarouselType = {
  url: string;
  alt: string;
};

interface ImageCarouselProps {
  images: ImageCarouselType[];
}

export const ImageCarousel = ({ images }: ImageCarouselProps) => {
  return (
    <div
      id="carouselBackdrop"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner" style={{ height: "20rem" }}>
        {images.map((item, index) => (
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
        ))}
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
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
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
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
