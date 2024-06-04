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
  handleIncreaseProductQty: (id: number) => void;
  handleDecreaseProductQty: (id: number) => void;
  getProductQty: (id: number) => number;
  handleRemoveProduct: (id: number) => void;
  cartQty: number;
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

  return (
    <CartContext.Provider
      value={{
        cartItems,
        handleIncreaseProductQty,
        handleDecreaseProductQty,
        getProductQty,
        handleRemoveProduct,
        cartQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
