import React, { useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";


const LOCAL_STORAGE_KEY = "react-todo-list-todos";

export default function TodoApp() {
    const [todos, setTodos] = useState(() => {
        //populate todo list from localStorage on load
        return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
    });

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    function addTodo(todo) {
        setTodos([todo, ...todos]);
    }
    
    function toggleComplete(id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    return {
                    ...todo,
                    completed: !todo.completed
                    };
                }
                return todo;
            })
        );
    }
    
    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return(
        <div>
            <Typography style={{ padding: 16 }} variant="h1" className="gradient__text">Todo List</Typography>
            <TodoForm addTodo={addTodo} />
            <TodoList
                todos={todos}
                toggleComplete={toggleComplete}
                removeTodo={removeTodo}
                className="gradient__text"
            />
        </div>
    )
}