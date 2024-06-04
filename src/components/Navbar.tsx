import { Link } from "react-router-dom";
import Container from "./Container";
import { useCartContext } from "../context/CartContext";

export default function Navbar() {
  const { cartQty } = useCartContext();

  return (
    <div className="h-16 border-b shadow-md flex items-center">
      <Container>
        <div className="flex justify-between flex-row-reverse items-center">
          <ul className="flex flex-row-reverse">
            <li className="ml-5">
              <Link to="/">خانه</Link>
            </li>
            <li>
              <Link to="/store">فروشگاه</Link>
            </li>
          </ul>
          <div>
            <Link to="/cart">
              <div className="flex flex-row-reverse items-center justify-center gap-1">
                <button>سبد خرید</button>
                <span className="bg-blue-400 text-white rounded-full px-2 flex items-center justify-center">
                  {cartQty !== 0 ? cartQty : "خالی"}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
