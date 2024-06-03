import { Link } from "react-router-dom";
import Container from "../../components/Container";
import ProductItem from "../../components/ProductItem";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/api";
import { Products } from "../../types/server";

export default function Store() {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    getProducts().then((res) => setProducts(res));
  }, []);

  return (
    <div>
      <Container>
        <h1 className="text-right mt-10">جدیدترین محصولات</h1>
        <div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 my-5"
          dir="rtl"
        >
          {products.map((product) => (
            <Link key={product?.id} to={`/product/${product?.id}`}>
              <ProductItem {...product} />
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
