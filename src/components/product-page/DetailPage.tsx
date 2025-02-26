import { useLocation } from "react-router-dom";
import { ImageCarousel } from "../image-carousel/ImageCarousel";
import { useEffect, useState } from "react";
import { bikesDataType } from "../../utils/types";

export const DetailPage = () => {
  const location = useLocation();
  const [bike, setBike] = useState<bikesDataType | null>(null);
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const encodedUserString = queryParams.get("bike");
    const decodedUserString = encodedUserString
      ? decodeURIComponent(encodedUserString)
      : null;
    const bikes = decodedUserString ? JSON.parse(decodedUserString) : null;
    setBike(bikes);
  }, []);
  return (
    <div className="container py-5">
      {bike && (
        <div className="row justify-content-center">
          <ImageCarousel images={bike?.images} carouselId="about-product" />
          <div className="col-md-6 my-5">
            {/* Product Card */}
            <div className="rounded">
              {/* Card Body */}
              <div className="card-body text-center">
                {/* Product Title */}
                <h5 className="card-title">my bike with model number 2403</h5>
                {/* Product Description */}
                <p className="card-text text-muted">
                  500 km - 2018 - 2nd owner{" "}
                </p>

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
                <h5 className="card-title">
                  {bike.bikeName} - {bike.brandName}
                </h5>

                {/* Product Price */}
                <p className="card-text text-success">{bike.price}</p>

                {/* Product Description */}
                <p className="card-text text-muted">this is description</p>

                {/* Buy Now Button */}
                <button className="btn btn-primary btn-lg">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
