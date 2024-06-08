import { useEffect, useState } from "react";
import Button from "./Button";
import { getProduct } from "../services/api";
import { IProduct } from "../types/server";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

interface ICartItem {
  id: number;
  qty: number;
}

export default function CartItem({ id, qty }: ICartItem) {
  const [product, setProduct] = useState<IProduct>();

  const {
    handleIncreaseProductQty,
    handleDecreaseProductQty,
    handleRemoveProduct,
  } = useCartContext();

  useEffect(() => {
    getProduct(id).then((res) => setProduct(res.data));
  }, []);

  return (
    <div className="flex flex-row-reverse bg-gray-100/70">
      <Link to={`/product/${id}`}>
        <img src={product?.image} alt="" className="w-40 p-4" />
      </Link>
      <div className="p-4 space-y-2">
        <h3 className="text-right font-bold">{product?.title}</h3>
        <div className="flex flex-row-reverse items-center gap-3">
          <div>
            <Button
              variant="primary"
              className="hover:opacity-80"
              onClick={() => handleIncreaseProductQty(id)}
            >
              +
            </Button>
            <span className="px-2">{qty}</span>
            <Button
              variant="primary"
              className="hover:opacity-80"
              onClick={() => handleDecreaseProductQty(id)}
            >
              -
            </Button>
          </div>
          <div>
            <Button
              variant="danger"
              className="hover:opacity-80"
              onClick={() => handleRemoveProduct(id)}
            >
              حذف
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
