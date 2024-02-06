import React, { ReactNode } from 'react';
import { TMenuItemDrink, TMenuItemFood } from '../../interfaces/menuItem';

type CartItem = TMenuItemFood | TMenuItemDrink;

type CartContextValue = {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
};

export const CartContext = React.createContext<CartContextValue | undefined>(undefined);

interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cart, setCart] = React.useState<CartItem[]>([]);

    const addToCart = (item: CartItem) => {
        setCart(prevCart => [...prevCart, item]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};