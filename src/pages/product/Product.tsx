import { useParams } from "react-router-dom";
import Container from "../../components/Container";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
import { getProduct } from "../../services/api";
import { IProduct } from "../../types/server";

export default function Product() {
  const params = useParams<{ id: string }>();

  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    getProduct(params.id as string).then((res) => setProduct(res.data));
  }, []);

  return (
    <div className="mt-20">
      <Container>
        <div className="mt-10 grid grid-cols-12">
          <div className="bg-gray-100/70 col-span-9 text-right p-4 space-y-4">
            <h1 className="font-bold">{product?.title}</h1>
            <p>قیمت: {product?.price}</p>
            <p>{product?.description}</p>
            <div>
              <Button variant="primary" className="hover:opacity-80">
                افزودن به سبد خرید
              </Button>
            </div>
          </div>
          <div className="col-span-3">
            <img src={product?.image} alt="" className="h-80 p-4 mx-auto" />
          </div>
        </div>
      </Container>
    </div>
  );
}
