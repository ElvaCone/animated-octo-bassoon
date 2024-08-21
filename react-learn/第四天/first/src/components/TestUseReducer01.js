import React, { useReducer } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const initialState = {
    username: '',
    email: '',
    password: '',
    error: null,
};

function reducer(state, action) {
    switch (action.type) {
        case 'SET_FIELD':
            return {
                ...state,
                [action.field]: action.value,
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: action.error,
            };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}

function TestUseReducer01() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = (e) => {
        dispatch({ type: 'SET_FIELD', field: e.target.name, value: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!state.username || !state.email || !state.password) {
            dispatch({ type: 'SET_ERROR', error: 'All fields are required' });
        } else {
            console.log('Form submitted:', state);
            dispatch({ type: 'RESET' });
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    name="username"
                    type="text"
                    value={state.username}
                    onChange={handleChange}
                    placeholder="Enter username"
                />
            </Form.Group>

            <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    name="email"
                    type="email"
                    value={state.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                />
            </Form.Group>

            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    name="password"
                    type="password"
                    value={state.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                />
            </Form.Group>

            {state.error && <Alert variant="danger">{state.error}</Alert>}

            <Button variant="primary" type="submit">
                Sign Up
            </Button>
        </Form>
    );
}

export default TestUseReducer01;

