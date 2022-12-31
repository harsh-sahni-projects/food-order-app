import CartContext from './cart-context';

const CartProvider = props => {
    

    const addItemHandler = item => {
        console.log('adding...');
        const index = cartContext.items.findIndex(i => i.name == item.name);
        if (index > -1) {
            const cartItem = cartContext.items[index];
            
            console.log('Prev price:', cartItem.price, typeof cartItem.price);

            cartItem.quantity += item.quantity;
            cartItem.price += item.price;
            cartContext.items[index] = cartItem;
            
            console.log('New price:', cartItem.price);
            console.log()
        } else {
            cartContext.items.push(item);
        }
        cartContext.totalAmount += item.price;
        cartContext.totalAmount = parseFloat(parseFloat(cartContext.totalAmount).toFixed(2));
        console.log(cartContext);        
    };

    const removeItemHandler = id => {};

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;