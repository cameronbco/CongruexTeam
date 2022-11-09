import { Checkbox, IconButton, ListItem, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react'

function Todo({ todo, toggleComplete, removeTodo }) {
    function handleCheckboxClick() {
        toggleComplete(todo.id);
    }

    function handleRemoveClick() {
        removeTodo(todo.id);
    }
    
    return (
        <ListItem style={{ display: "flex", justifyContent: "center" }}>
            <Checkbox style={{ color: "grey" }} checked={todo.completed} onClick={handleCheckboxClick} />
            <Typography
                variant='body1'
                style={{
                    textDecoration: todo.completed ? "line-through" : null
                }}
            >
                {todo.task}
            </Typography>
            <IconButton onClick={handleRemoveClick}><CloseIcon style={{ color: "grey" }}/></IconButton>
        </ListItem>
    )
}

export default Todo;