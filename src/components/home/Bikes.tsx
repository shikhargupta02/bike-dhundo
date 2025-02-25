import { useEffect, useRef, useState } from "react";
import { Card } from "../UI/Card";
import axios from "axios";
import { transformedBikesData } from "../../utils/helper";
import { bikesDataType } from "../../utils/types";

type bikesType = {
  brandName: string;
};
export const Bikes = ({ brandName }: bikesType) => {
  const [bikes, setBikes] = useState<bikesDataType[]>([]);
  const lastId = useRef(0);
  const getMoreData = () => {
    const url = `https://bike-dash.onrender.com/bike-list?brand=${brandName}&last_id=${lastId.current}&limit=20`;
    axios
      .get(url)
      .then((response) => {
        const transformedData = transformedBikesData(response.data.list);
        setBikes(transformedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  useEffect(() => {
    getMoreData();
  }, [brandName]);
  return (
    <div>
      <div className="d-flex flex-wrap flex-row p-2 justify-content-evenly gap-3 justify-content-center align-items-center">
        {bikes.map((item: bikesDataType, index: number) => {
          return (
            <Card
              imageCarousel={item.images}
              buttonText="Show more"
              key={index}
              title={item.bikeName}
              width={"320px"}
            />
          );
        })}
      </div>
    </div>
  );
};
