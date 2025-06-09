import './CartPage.css';
import Header from './Header';
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { RootState } from '../datamodel/store';
import { addItem, removeItem, updateItemQuantity } from '../datamodel/chartSlice';

export default function CartPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const items = useSelector((state: RootState) =>
        state.shoppingCart.items.filter(item => item.quantity > 0)
    );

    const totalAmount = items.reduce((total, item) =>
        total + (item.price * item.quantity), 0
    );

    const handleDelete = (itemId: string) => {
        dispatch(updateItemQuantity({ id: itemId, quantity: 0 }));
    };

    if (items.length === 0) {
        return (
            <div className="cart_page">
                <Header />
                <div className="cart_content">
                    <div className="cart_empty">
                        <h2>Your cart is empty</h2>
                        <button
                            className="cart_button_secondary"
                            onClick={() => navigate('/products')}
                        >
                            Continue Shopping
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="cart_page">
            <Header />
            <div className="cart_content">
                <div className="cart_items">
                    {items.map(item => (
                        <CartItem
                            key={item.id}
                            item={item}
                            onIncrease={() => dispatch(addItem(item.id))}
                            onDecrease={() => dispatch(removeItem(item.id))}
                            onDelete={() => handleDelete(item.id)}
                        />
                    ))}
                </div>
                <div className="cart_summary">
                    <div className="cart_total">
                        <span>Total</span>
                        <span>${totalAmount.toFixed(2)}</span>
                    </div>
                    <div className="cart_actions">
                        <button
                            className="cart_button_secondary"
                            onClick={() => navigate('/products')}
                        >
                            Continue Shopping
                        </button>
                        <button
                            className="cart_button_primary"
                            onClick={() => {
                                // TODO: Implement checkout logic
                                alert('Checkout functionality will be implemented soon!');
                            }}
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
