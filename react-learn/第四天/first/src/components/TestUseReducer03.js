import React, { useReducer } from 'react';
import { Button, ListGroup } from 'react-bootstrap';

const initialState = { cart: [] };

function cartReducer(state, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return { cart: [...state.cart, action.item] };
        case 'REMOVE_ITEM':
            return { cart: state.cart.filter(item => item.id !== action.id) };
        case 'CLEAR_CART':
            return { cart: [] };
        default:
            throw new Error();
    }
}

function TestUseReducer03() {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addItemToCart = (item) => {
        dispatch({ type: 'ADD_ITEM', item });
    };

    const removeItemFromCart = (id) => {
        dispatch({ type: 'REMOVE_ITEM', id });
    };

    return (
        <div>
            <h2>Shopping Cart</h2>
            <ListGroup>
                {state.cart.map(item => (
                    <ListGroup.Item key={item.id}>
                        {item.name}
                        <Button variant="danger" onClick={() => removeItemFromCart(item.id)} style={{ float: 'right' }}>
                            Remove
                        </Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <Button variant="primary" onClick={() => addItemToCart({ id: Date.now(), name: 'New Item' })}>
                Add Item
            </Button>{' '}
            <Button variant="secondary" onClick={() => dispatch({ type: 'CLEAR_CART' })}>
                Clear Cart
            </Button>
        </div>
    );
}

export default TestUseReducer03;

