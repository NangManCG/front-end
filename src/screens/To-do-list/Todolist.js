import React, { useRef, useState } from 'react';
import Input from './Input';
import List from './List';

const Todolist = () => {

    const no = useRef(1)

    const [todos,setTodos] = useState([])

    const onAdd = (text) => {
        setTodos([
            ...todos,
            {
                id:no.current++,
                text:text,
                done:false
            }
        ])
    }
    const onDel = (id) => {
        setTodos(todos.filter(todo=>todo.id !== id))
    }

    const onToggle = (id) => {
        setTodos(todos.map(todo=>todo.id===id ?
            {
                ...todo,
                done:!todo.done
            }
            : todo
            ))
    }

    return (
        <div className='all'>
            <h1 className='title'>To-do List</h1>
            <Input onAdd={onAdd}/>
            <List todos={todos} onDel={onDel} onToggle={onToggle}/>
        </div>
    );
};

export default Todolist;