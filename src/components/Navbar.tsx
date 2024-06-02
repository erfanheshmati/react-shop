import { Link } from "react-router-dom";
import Container from "./Container";

export default function Navbar() {
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
              <button>سبد خرید</button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
