import './CartItem.css';
import type { ShoppingCartItem } from '../datamodel/chartSlice';

interface CartItemProps {
    item: ShoppingCartItem;
    onIncrease: () => void;
    onDecrease: () => void;
    onDelete: () => void;
}

export default function CartItem({ item, onIncrease, onDecrease, onDelete }: CartItemProps) {
    const totalPrice = item.price * item.quantity;

    return (
        <div className="cart_item">
            <img
                src={item.imageUrl}
                alt={item.name}
                className="cart_item_image"
            />
            <div className="cart_item_info">
                <div className="cart_item_details">
                    <h3 className="cart_item_name">{item.name}</h3>
                    <span className="cart_item_price">${item.price.toFixed(2)} each</span>
                </div>
                <div className="cart_item_controls">
                    <div className="cart_item_quantity">
                        <button 
                            className="cart_button"
                            onClick={onDecrease}
                            disabled={item.quantity === 0}
                        >
                            -
                        </button>
                        <span className="cart_item_quantity_value">{item.quantity}</span>
                        <button 
                            className="cart_button"
                            onClick={onIncrease}
                        >
                            +
                        </button>
                    </div>
                    <span className="cart_item_total">${totalPrice.toFixed(2)}</span>
                    <button 
                        className="cart_button delete"
                        onClick={onDelete}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
