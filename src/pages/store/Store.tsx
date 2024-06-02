import Container from "../../components/Container";
import ProductItem from "../../components/ProductItem";

export default function Store() {
  return (
    <div>
      <Container>
        <h1 className="text-right mt-10">جدیدترین محصولات</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 mt-5">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </Container>
    </div>
  );
}
