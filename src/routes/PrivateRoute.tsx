import { Navigate, Outlet } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

export default function PrivateRoute() {
  const { isLogin } = useCartContext();
  return <>{isLogin ? <Outlet /> : <Navigate to="/login" />}</>;
}
