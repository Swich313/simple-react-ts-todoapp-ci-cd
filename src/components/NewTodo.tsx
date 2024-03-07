import React from 'react';
import {useRef} from "react";

import './NewTodo.css';

type newTodoType = {
    onAddTodo: (todo: string) => void;
};

const NewTodo: React.FC<newTodoType> = (props) => {
    const todoInputRef = useRef<HTMLInputElement>(null);
    const todoSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();

        const enteredText = todoInputRef.current!.value;
        props.onAddTodo(enteredText);
    };

    return (
        <form onSubmit={todoSubmitHandler} >
            <div className='form-control'>
                <label htmlFor="todo-text">Todo Text</label>
                <input type="text" id="todo-text" ref={todoInputRef}/>
            </div>
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default NewTodo;