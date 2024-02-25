import React, { useContext } from "react";
import { CartContext, CartItem } from "../context/CartContext";

interface AddButtonProps {
	item: CartItem
    variant: string | null;
    price: number;
    onClick?: (variant: string|null) => void;
}

export const AddButton: React.FC<AddButtonProps> = ({ item, variant, price, onClick }) => {
    const { addToCart } = useContext(CartContext);

    const handleClick = (event: React.MouseEvent) => {
        event.stopPropagation();

        if (onClick) {
            onClick(variant);
        }
    
        if (typeof addToCart === 'function') {
            addToCart(item, variant, price);
        } else {
            console.error('addToCart is not a function');
        }
    };

    return (
        <div className="cart_button add" style={{ textAlign: "center" }}>
            <span onClick={handleClick} className="cartButton addToCart" aria-label="Zum Warenkorb hinzufügen">
                {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="green" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
                </svg>
            </span>
        </div>
    );
}
;