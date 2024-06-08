import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Store from "./pages/store/Store";
import Layout from "./components/Layout";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import { useCartContext } from "./context/CartContext";
import PrivateRoute from "./routes/PrivateRoute";
import Login from "./pages/login/Login";

export default function App() {
  const { isLogin } = useCartContext();
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/product/:id" element={<Product />} />
        <Route
          path="/login"
          element={isLogin ? <Navigate to="/" /> : <Login />}
        />
        {/* Protected Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </Layout>
  );
}
