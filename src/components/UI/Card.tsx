import "./card.css";
type cardType = {
  image?: { url: string; alt?: string };
  title?: string;
  buttonText?: string;
  description?: string;
  showDescription?: boolean;
  cardClick?: () => void;
  containerStyles?: string;
};
export const Card = ({
  title,
  description,
  image,
  buttonText,
  showDescription = true,
  cardClick,
  containerStyles,
}: cardType) => {
  return (
    <button
      className={`card card-wrapper p-0 ${containerStyles}`}
      onClick={() => {
        if (cardClick) cardClick();
      }}
    >
      <img
        src={image?.url}
        className="card-img-top image-wrapper"
        alt={image?.alt}
      />
      {showDescription && (
        <div className="card-body body-wrapper">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary">
            {buttonText}
          </a>
        </div>
      )}
    </button>
  );
};
