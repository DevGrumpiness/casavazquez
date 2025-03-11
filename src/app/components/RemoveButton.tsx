import React, { useContext } from "react";
import { CartContext, CartItem } from "../context/CartContext";

interface RemoveButtonProps {
	item: CartItem;
    variant: string | null;
    onClick?: (variant: string|null) => void;
}

export const RemoveButton: React.FC<RemoveButtonProps> = ({ item, variant, onClick }) => {
    const { removeFromCart } = useContext(CartContext);

    const handleClick = () => {
        if (onClick) {
            onClick(variant);
        }
        
        if (typeof removeFromCart === 'function') {
            removeFromCart(item, variant);
        } else {
            console.error('removeFromCart is not a function');
        }
    };

    return (
        <div className="cart_button remove" style={{ textAlign: "center" }}>
            <span onClick={handleClick} className="cartButton removeFromCart" aria-label="Aus dem Warenkorb entfernen">
                {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 11h14v2H5z" />
                </svg>
            </span>
        </div>
    );
};