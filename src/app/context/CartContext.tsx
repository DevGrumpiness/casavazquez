import React, { createContext, useState } from 'react';
import { TMenuItemDrink, TMenuItemFood } from "../../interfaces/menuItem";

interface CartItem {
    name: string;
    variant: string | null;
    price: number;
    quantity: number;
}

interface CartContextProps {
    cart: CartItem[];
    addToCart: (item: TMenuItemDrink | TMenuItemFood, variant: string | null, price: number) => void;
    removeFromCart: (item: TMenuItemDrink | TMenuItemFood, variant: string | null) => void; // Updated this line
}

export const CartContext = createContext<CartContextProps>({
    cart: [],
    addToCart: () => {},
    removeFromCart: () => {},
});

interface CartProviderProps {
    children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (item: TMenuItemDrink | TMenuItemFood, variant: string | null, price: number) => {
        setCart((prevCart) => {
            const existingItemIndex = prevCart.findIndex(
                (cartItem) => cartItem.name === item.name && cartItem.variant === variant
            );

            if (existingItemIndex > -1) {
                const updatedItem = { ...prevCart[existingItemIndex], quantity: prevCart[existingItemIndex].quantity + 1 };

                return prevCart.map((item, index) => index === existingItemIndex ? updatedItem : item);
            } else {
                return [...prevCart, { name: item.name, variant, price, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (item: TMenuItemDrink | TMenuItemFood, variant: string | null) => {
        setCart((prevCart) => {
            const existingItemIndex = prevCart.findIndex(
                (cartItem) => cartItem.name === item.name && cartItem.variant === variant
            );

            if (existingItemIndex > -1) {
                if (prevCart[existingItemIndex].quantity > 1) {
                    const updatedItem = { ...prevCart[existingItemIndex], quantity: prevCart[existingItemIndex].quantity - 1 };
                    return prevCart.map((item, index) => index === existingItemIndex ? updatedItem : item);
                } else {
                    return prevCart.filter((item, index) => index !== existingItemIndex);
                }
            } else {
                return prevCart;
            }
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};