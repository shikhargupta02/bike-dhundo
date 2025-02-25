import { bikesDataType, imageType } from "./types";

export const transformedBikesData = (bikeData: any) => {
  const transformedData: bikesDataType[] = [];
  for (const data of bikeData) {
    const bike: bikesDataType = {
      id: data.id,
      year: data.year,
      model: data.model,
      price: data.price,
      bikeName: data.bike_name,
      brandName: data.brand,
      date: data.date,
      images: [],
    };
    for (const image of data.images) {
      const imageData: imageType = { url: image.path, alt: image.description };
      bike.images.push(imageData);
    }
    transformedData.push(bike);
  }
  return transformedData;
};
