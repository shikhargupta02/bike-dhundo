import "./card.css";
type cardType = {
  imageUrl?: string;
  title?: string;
  buttonText?: string;
  description?: string;
  showDescription?: boolean;
  cardClick?: () => void;
};
export const Card = ({
  title,
  description,
  imageUrl,
  buttonText,
  showDescription = true,
  cardClick,
}: cardType) => {
  return (
    <button
      className="card card-wrapper"
      onClick={() => {
        if (cardClick) cardClick();
      }}
    >
      <img src={imageUrl} className="card-img-top image-wrapper" alt="..." />
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
