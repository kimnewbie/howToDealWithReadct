import React from 'react';
import Counter from './Counter';
import Todos from './Todos';

const ReduxApp = () => {
    return (
        <div>
            <Counter />
            <hr />
            <Todos />
        </div>
    );
};

export default ReduxApp;