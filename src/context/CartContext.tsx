import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { login } from "../services/api";
import { useNavigate } from "react-router-dom";

interface ICartProvider {
  children: React.ReactNode;
}

interface ICartItem {
  id: number;
  qty: number;
}

interface ICartContext {
  cartItems: ICartItem[];
  handleIncreaseProductQty: (id: number) => void;
  handleDecreaseProductQty: (id: number) => void;
  getProductQty: (id: number) => number;
  handleRemoveProduct: (id: number) => void;
  cartQty: number;
  isLogin: boolean;
  handleLogin: (username: string, password: string) => void;
  handleLogout: () => void;
}

// export const CartContext = createContext<ICartContext>({
//   cartItems: [],
// });
export const CartContext = createContext({} as ICartContext);

/* Custom Hook */
export const useCartContext = () => {
  return useContext(CartContext);
};

export function CartProvider({ children }: ICartProvider) {
  // const [cartItems, setCartItems] = useState<ICartItem[]>([]);
  const [cartItems, setCartItems] = useLocalStorage<ICartItem[]>(
    "cartItems",
    []
  );

  const handleIncreaseProductQty = (id: number) => {
    setCartItems((currentItems) => {
      let selectedItem = currentItems.find((item) => item.id == id);
      if (selectedItem == null) {
        return [...currentItems, { id: id, qty: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id == id) return { ...item, qty: item.qty + 1 };
          else return item;
        });
      }
    });
  };

  const handleDecreaseProductQty = (id: number) => {
    setCartItems((currentItems) => {
      let selectedItem = currentItems.find((item) => item.id == id);
      if (selectedItem?.qty === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id == id) return { ...item, qty: item.qty - 1 };
          else return item;
        });
      }
    });
  };

  const getProductQty = (id: number) => {
    return cartItems.find((item) => item.id == id)?.qty || 0;
  };

  const handleRemoveProduct = (id: number) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id != id)
    );
  };

  const cartQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);

  /* *************************************************************** */

  const [isLogin, setIsLogin] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (username: string, password: string) => {
    login(username, password).finally(() => {
      let token = "fgdgdfgdf456tytyu456456456";
      localStorage.setItem("token", token);
      setIsLogin(true);
      navigate("/");
    });
  };

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) setIsLogin(true);
  }, []);

  const handleLogout = () => {
    setIsLogin(false);
    navigate("/");
    localStorage.removeItem("token");
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        handleIncreaseProductQty,
        handleDecreaseProductQty,
        getProductQty,
        handleRemoveProduct,
        cartQty,
        isLogin,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
