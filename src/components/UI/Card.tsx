import { ImageCarousel } from "../image-carousel/ImageCarousel";
import "./card.css";
type cardType = {
  image?: { url: string; alt?: string };
  title?: string;
  buttonText?: string;
  description?: string;
  showDescription?: boolean;
  cardClick?: () => void;
  containerStyles?: string;
  imageCarousel?: { url: string; alt: string }[];
  width?: string;
};
export const Card = ({
  title,
  description,
  image,
  buttonText,
  showDescription = true,
  cardClick,
  containerStyles,
  imageCarousel,
  width,
}: cardType) => {
  return (
    <div
      className={`card card-wrapper p-0 overflow-hidden ${containerStyles}`}
      style={{ width: width }}
    >
      {imageCarousel ? (
        <ImageCarousel
          images={imageCarousel}
          carouselId={`card-${title?.replace(/\s+/g, "")}-${description ?? ""}`}
        />
      ) : (
        <img
          src={image?.url}
          className="card-img-top image-wrapper"
          alt={image?.alt}
        />
      )}
      {showDescription && (
        <div className="card-body body-wrapper">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <button
            onClick={() => {
              if (cardClick) cardClick();
            }}
            className="btn btn-primary"
          >
            {buttonText}
          </button>
        </div>
      )}
    </div>
  );
};
