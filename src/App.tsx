import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import {Todo} from './todo.model';

const DUMMY_TODOS = [
    {id: uuidv4(), text: 'finish the course'}
];

const App: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>(DUMMY_TODOS);

    const todoAddHandler = (todo: string): void => {
        setTodos(prevState => [...prevState, {id: uuidv4().toString(), text: todo}])
        console.log(todo);
    };

    const todoDeleteHandler = (todoId: string) => {
        setTodos(prevState => {
            return prevState.filter(item => item.id !== todoId)
        });
    };

    // @ts-ignore
    return <div className="App">
        <NewTodo onAddTodo={todoAddHandler}/>
        <TodoList todos={todos} onDeleteTodo={todoDeleteHandler}/>
    </div>
};

export default App;
