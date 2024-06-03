import { createContext, useContext, useState } from "react";

interface ICartProvider {
  children: React.ReactNode;
}

interface ICartItem {
  id: number;
  qty: number;
}

interface ICartContext {
  cartItems: ICartItem[];
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
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);
  return (
    <CartContext.Provider value={{ cartItems }}>
      {children}
    </CartContext.Provider>
  );
}
