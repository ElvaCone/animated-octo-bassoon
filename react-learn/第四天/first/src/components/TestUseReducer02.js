import React, { useReducer } from 'react';
import { Button } from 'react-bootstrap';

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        case 'RESET':
            return { count: 0 };
        default:
            throw new Error();
    }
}

function TestUseReducer02() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>Count: {state.count}</h2>
            <Button variant="primary" onClick={() => dispatch({ type: 'INCREMENT' })}>+</Button>{' '}
            <Button variant="danger" onClick={() => dispatch({ type: 'DECREMENT' })}>-</Button>{' '}
            <Button variant="secondary" onClick={() => dispatch({ type: 'RESET' })}>Reset</Button>
        </div>
    );
}

export default TestUseReducer02;

