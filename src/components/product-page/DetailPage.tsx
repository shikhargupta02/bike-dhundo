import { ImageCarousel } from "../image-carousel/ImageCarousel";

export const DetailPage = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <ImageCarousel
          images={[
            { url: "https://picsum.photos/1920/600", alt: "this is alt text" },
            { url: "https://picsum.photos/1920/600", alt: "this is alt text" },
            { url: "https://picsum.photos/1920/600", alt: "this is alt text" },
            { url: "https://picsum.photos/1920/600", alt: "this is alt text" },
            { url: "https://picsum.photos/1920/600", alt: "this is alt text" },
          ]}
        />
        <div className="col-md-6 my-5">
          {/* Product Card */}
          <div className="rounded">
            {/* Card Body */}
            <div className="card-body text-center">
              {/* Product Title */}
              <h5 className="card-title">my bike with model number 2403</h5>
              {/* Product Description */}
              <p className="card-text text-muted">500 km - 2018 - 2nd owner </p>

              {/* Product Price */}
              <p className="card-text text-success ">100 rupess</p>

              {/* Product Description */}
              <p className="card-text text-muted">this is description</p>

              {/* Buy Now Button */}
              <button className="btn btn-primary btn-lg">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 my-5">
          {/* Product Card */}
          <div className=" rounded">
            {/* Card Body */}
            <div className="card-body text-center">
              {/* Product Title */}
              <h5 className="card-title">my bike</h5>

              {/* Product Price */}
              <p className="card-text text-success">100 rupess</p>

              {/* Product Description */}
              <p className="card-text text-muted">this is description</p>

              {/* Buy Now Button */}
              <button className="btn btn-primary btn-lg">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
