import React from 'react';
import PrintList from './PrintList';

const List = ({todos,onDel,onToggle}) => {
    return (
        <ul className='TodoList'>
            {
                todos.map(todos=><PrintList key={todos.id}
                todos={todos} onDel={onDel} onToggle={onToggle}/>)
            }
        </ul>
    );
};

export default List;