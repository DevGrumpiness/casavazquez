import React, { createContext, useState } from 'react';
import { TMenuItemDrink, TMenuItemFood } from "../../interfaces/menuItem";

interface CartItem {
    item: TMenuItemDrink | TMenuItemFood;
    variant: string | null;
  }
  
  interface CartContextProps {
    cart: CartItem[];
    addToCart: (item: TMenuItemDrink | TMenuItemFood, variant: string | null) => void;
    removeFromCart: (item: TMenuItemDrink | TMenuItemFood, variant: string | null) => void;
  }
  
  export const CartContext = createContext<CartContextProps>({
    cart: [],
    addToCart: () => {},
    removeFromCart: () => {},
  });
  
  export const CartProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
  
    const addToCart = (item: TMenuItemDrink | TMenuItemFood, variant: string | null) => {
      setCart((prevCart) => [...prevCart, { item, variant }]);
    };
  
    const removeFromCart = (item: TMenuItemDrink | TMenuItemFood, variant: string | null) => {
      setCart((prevCart) => prevCart.filter((cartItem) => cartItem.item.id !== item.id || cartItem.variant !== variant));
    };
  
    return (
      <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
        {children}
      </CartContext.Provider>
    );
  };