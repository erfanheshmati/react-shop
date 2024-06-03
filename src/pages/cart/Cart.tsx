import Button from "../../components/Button";
import CartItem from "../../components/CartItem";
import Container from "../../components/Container";
import { useCartContext } from "../../context/CartContext";

export default function Cart() {
  // const { cartItems } = useContext(CartContext);
  const { cartItems } = useCartContext();

  return (
    <div className="mt-10">
      <Container>
        <div className="space-y-5">
          <div className="space-y-2">
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          <div className="text-right font-bold text-[20px]">
            <p>قیمت کل: 200 هزار تومان</p>
            <p>تخفیف شما: 200 هزار تومان</p>
            <p>قیمت نهایی: 200 هزار تومان</p>
          </div>
          <div className="text-right">
            <Button variant="success">ثبت سفارش</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
