import { useContext } from 'react';
import CartCtx from '../store/cart-context';

const CartItems = () => {
    const ctx = useContext(CartCtx);
    const cartItems = ctx['cartItems'];

    return (
        <div>
            {Object.keys(cartItems).map(item => (
                <div>{item.name}</div>
            ))}
        </div>
    )
}

export default CartItems;