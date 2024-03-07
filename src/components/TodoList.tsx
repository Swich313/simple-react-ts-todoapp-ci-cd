import React from "react";

import './TodoList.css';

interface TodoListProps {
   todos: {id: string, text: string}[],
   onDeleteTodo: (id: string) => void;
}


const TodoList: React.FC<TodoListProps> = (props) => {


    return (
        <ul>
            {props.todos.map(item => (
                <li key={item.id}>
                    <span>{item.text}</span>
                    <button onClick={() => props.onDeleteTodo(item.id)}>DELETE</button>
                </li>))
            }
        </ul>
    );
};

export default TodoList;