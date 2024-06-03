import { IProduct } from "../types/server";

type TProductItem = IProduct;

export default function ProductItem({
  title,
  price,
  description,
  image,
}: TProductItem) {
  return (
    <div className="border shadow-lg rounded-t-lg">
      <img src={image} alt="" className="rounded-t-lg p-4 h-56 mx-auto" />
      <div className="flex flex-row-reverse justify-between p-4">
        <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
        <p className="font-semibold text-lg">{price}</p>
      </div>
      <div className="p-4 pt-0">
        <p className="line-clamp-2 text-right text-gray-600">{description}</p>
      </div>
    </div>
  );
}
