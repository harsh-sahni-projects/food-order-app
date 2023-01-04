import CartContext from './cart-context';
import { useReducer } from 'react';
import { act } from 'react-dom/test-utils';

const defaultCartState = {
    items: [], // syntax below
    totalAmount: 0
}
/*
    items: [{
        name: 'abc',
        id: 'm1',
        quantity: 10,
        singleUnitPrice: 60
        itemPurchaseAmount: 600
    }]
*/

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const newItem = action.item;
        const index = state.items.findIndex(i => i.id == newItem.id);
        
        if (index > -1) {
            const cartItem = state.items[index];

            cartItem.quantity += newItem.quantity;
            cartItem.itemPurchaseAmount += newItem.itemPurchaseAmount;
            state.items[index] = cartItem;
            
        } else {
            state.items.push(newItem);
        }
        
        state.totalAmount += newItem.itemPurchaseAmount;
        state.totalAmount = parseFloat(
                                    parseFloat(state.totalAmount)
                                        .toFixed(2)
                                );
        /*
            If I simply return updated 'state' here, it silently change the state
            in useReducer but will not rerender the components because state seems to be
            still the same.
            So I return a new object, so that the state actually changes to a new state
            and components get rerendered & implement this new value from useReducer on them.
        */
        return {
            items: state.items,
            totalAmount: state.totalAmount
        }
    }
    if (action.type === 'REMOVE') {
        const index = state.items.findIndex(i => i.id == action.id);
        if (index == -1) return state;

        const item = state.items[index];
        if (item.quantity == 1) {
            state.items.splice(index,1);
        } else {
            item.quantity -= 1;
            item.itemPurchaseAmount = parseFloat(
                        parseFloat(item.quantity * item.singleUnitPrice).toFixed(2)
                    );
            state.items[index] = item;
        }
        state.totalAmount -= item.singleUnitPrice;
        return {
            items: state.items,
            totalAmount: state.totalAmount
        }
    }
    return state;
}

const CartProvider = props => {

    const [state, dispatch] = useReducer(cartReducer, defaultCartState);

    const addItemHandler = item => {
        dispatch({ type: 'ADD', item: item });
    };

    const removeItemHandler = id => {
        dispatch({ type: 'REMOVE', id: id })
    };


    const cartContext = {
        items: state.items,
        totalAmount: state.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;