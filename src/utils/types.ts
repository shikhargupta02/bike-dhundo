export type bikesDataType = {
  id: number;
  brandName: string;
  bikeName: string;
  model: string;
  year: string;
    price: string;
  date:string,
  images: imageType[];
};

export type imageType = {
  url: string;
  alt: string;
  description?: string;
};
