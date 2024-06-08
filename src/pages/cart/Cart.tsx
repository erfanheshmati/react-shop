import Button from "../../components/Button";
import CartItem from "../../components/CartItem";
import Container from "../../components/Container";
import { useCartContext } from "../../context/CartContext";

export default function Cart() {
  // const { cartItems } = useContext(CartContext);
  const { cartItems } = useCartContext();

  return (
    <div className="mt-20">
      <Container>
        <div className="space-y-5">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
          <div className="text-right font-bold text-[20px]">
            <p>قیمت کل: 200 هزار تومان</p>
            <p>تخفیف شما: 200 هزار تومان</p>
            <p>قیمت نهایی: 200 هزار تومان</p>
          </div>
          <div className="text-right">
            <Button variant="success" className="hover:opacity-80">
              ثبت سفارش
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
