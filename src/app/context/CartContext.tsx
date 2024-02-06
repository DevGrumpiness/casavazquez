import React, { ReactNode } from "react";
import { TMenuItemDrink, TMenuItemFood } from "../../interfaces/menuItem";

type CartItem = TMenuItemFood | TMenuItemDrink;

type CartContextValue = {
	cart: CartItem[];
	addToCart: (item: CartItem) => void;
	removeFromCart: (item: CartItem) => void;
};

const defaultContextValue: CartContextValue = {
	cart: [],
	addToCart: () => {},
	removeFromCart: () => {},
};

export const CartContext = React.createContext<CartContextValue>(defaultContextValue);

interface CartProviderProps {
	children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
	const [cart, setCart] = React.useState<CartItem[]>([]);

	const addToCart = (item: CartItem) => {
		console.log("addToCart", item);
		setCart((prevCart) => [...prevCart, item]);
    };
    
    const removeFromCart = (item: CartItem) => {
        console.log("removeFromCart", item);
        setCart((prevCart) => {
            const index = prevCart.findIndex((cartItem) => cartItem.id === item.id);
            if (index !== -1) {
                const newCart = [...prevCart];
                newCart.splice(index, 1);
                return newCart;
            }
            return prevCart;
        });
    };
    
	return <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>{children}</CartContext.Provider>;
};
