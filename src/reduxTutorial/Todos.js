import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { insert, change_input, toggle, remove, selectCount } from '../modules/todos';

const Todos = () => {
    const dispatch = useDispatch();
    const todos = useSelector(selectCount);

    const [inputValue, setInputValue] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        // dispatch(insert({ id: todos[todos.length - 1].id + 1, text, done }));
    };

    const onChangeInput = (e) => {
        const { target: { value } } = e;
        setInputValue(value);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChangeInput}
                    value={inputValue}
                />
                <button type="submit">등록</button>
            </form>
            <div>
                {
                    todos.map((todo) => {
                        return (
                            <div key={todo.id}>
                                <div>{todo.text}</div>
                                <div>{todo.done}</div>
                                <button>수정</button>
                                <button>삭제</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Todos;