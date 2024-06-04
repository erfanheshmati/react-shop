import { useParams } from "react-router-dom";
import Container from "../../components/Container";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
import { getProduct } from "../../services/api";
import { IProduct } from "../../types/server";
import { useCartContext } from "../../context/CartContext";

export default function Product() {
  const params = useParams<{ id: string }>();

  const [product, setProduct] = useState<IProduct>();

  const {
    handleIncreaseProductQty,
    handleDecreaseProductQty,
    getProductQty,
    handleRemoveProduct,
  } = useCartContext();

  useEffect(() => {
    getProduct(params.id as string).then((res) => setProduct(res.data));
  }, []);

  return (
    <div className="mt-20">
      <Container>
        <div className="flex flex-col-reverse lg:grid grid-cols-12">
          {/* Content */}
          <div className="col-span-9 bg-gray-100/70 rounded text-right p-4 space-y-4">
            <h1 className="font-bold">{product?.title}</h1>
            <p>قیمت: {product?.price}</p>
            <p>{product?.description}</p>
            <div className="flex flex-row-reverse items-center gap-2">
              {getProductQty(parseInt(params.id as string)) === 0 ? (
                <Button
                  variant="primary"
                  className="hover:opacity-80"
                  onClick={() =>
                    handleIncreaseProductQty(parseInt(params.id as string))
                  }
                >
                  افزودن به سبد خرید
                </Button>
              ) : (
                <div className="flex flex-row-reverse items-center gap-2">
                  <Button
                    variant="primary"
                    className="hover:opacity-80"
                    onClick={() =>
                      handleIncreaseProductQty(parseInt(params.id as string))
                    }
                  >
                    +
                  </Button>
                  <span>{getProductQty(parseInt(params.id as string))}</span>
                  <Button
                    variant="primary"
                    className="hover:opacity-80"
                    onClick={() =>
                      handleDecreaseProductQty(parseInt(params.id as string))
                    }
                  >
                    -
                  </Button>
                  <Button
                    variant="danger"
                    className="hover:opacity-80"
                    onClick={() =>
                      handleRemoveProduct(parseInt(params.id as string))
                    }
                  >
                    حذف کردن از سبد خرید
                  </Button>
                </div>
              )}
            </div>
          </div>
          {/* Image */}
          <div className="col-span-3 flex items-center justify-center">
            <img src={product?.image} alt="" className="w-60 p-4" />
          </div>
        </div>
      </Container>
    </div>
  );
}
