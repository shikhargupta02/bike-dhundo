import "./card.css";
type cardType = {
  imageUrl?: string;
  title: string;
  buttonText: string;
  description: string;
};
export const Card = ({
  title,
  description,
  imageUrl,
  buttonText,
}: cardType) => {
  return (
    <div className="card card-wrapper">
      <img src={imageUrl} className="card-img-top image-wrapper" alt="..." />
      <div className="card-body body-wrapper">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">
          {buttonText}
        </a>
      </div>
    </div>
  );
};
