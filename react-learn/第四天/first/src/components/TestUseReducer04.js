import React, { useReducer } from 'react';
import { Button, Form, ListGroup } from 'react-bootstrap';

// 用户信息的初始状态和 reducer
const userInitialState = { name: '', email: '' };

function userReducer(state, action) {
    switch (action.type) {
        case 'SET_NAME':
            return { ...state, name: action.name };
        case 'SET_EMAIL':
            return { ...state, email: action.email };
        default:
            throw new Error();
    }
}

// 购物车的初始状态和 reducer
const cartInitialState = { items: [] };

function cartReducer(state, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return { items: [...state.items, action.item] };
        case 'REMOVE_ITEM':
            return { items: state.items.filter(item => item.id !== action.id) };
        case 'CLEAR_CART':
            return { items: [] };
        default:
            throw new Error();
    }
}

function TestUseReducer04() {
    const [userState, userDispatch] = useReducer(userReducer, userInitialState);
    const [cartState, cartDispatch] = useReducer(cartReducer, cartInitialState);

    const handleUserChange = (e) => {
        userDispatch({ type: e.target.name === 'name' ? 'SET_NAME' : 'SET_EMAIL', [e.target.name]: e.target.value });
    };

    const addItemToCart = () => {
        const newItem = { id: Date.now(), name: 'Item ' + (cartState.items.length + 1) };
        cartDispatch({ type: 'ADD_ITEM', item: newItem });
    };

    return (
        <div>
            <h2>User Information</h2>
            <Form>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={userState.name}
                        onChange={handleUserChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={userState.email}
                        onChange={handleUserChange}
                    />
                </Form.Group>
            </Form>

            <h2>Shopping Cart</h2>
            <Button variant="primary" onClick={addItemToCart}>Add Item</Button>
            <ListGroup>
                {cartState.items.map(item => (
                    <ListGroup.Item key={item.id}>
                        {item.name}
                        <Button variant="danger" onClick={() => cartDispatch({ type: 'REMOVE_ITEM', id: item.id })} style={{ float: 'right' }}>Remove</Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <Button variant="secondary" onClick={() => cartDispatch({ type: 'CLEAR_CART' })}>Clear Cart</Button>
        </div>
    );
}

export default TestUseReducer04;

