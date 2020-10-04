import React, { useState } from 'react'
import Wrapper from './styles';

import { v4 } from 'uuid';
import InputButton from '../../components/InputButton'
import ItemList from '../../components/ItemList'

const Todo = () => {
    const [item, setItem] = useState('');
    const [todoList, setTodoList] = useState([])

    const handleTodoInputChange = e => setItem(e.target.value)

    const addItem = (e) => {
        e.preventDefault()
        setTodoList([...todoList, {id: v4(), label: item}]);
        setItem('');
    }

    const deleteItem = (id) => {
        setTodoList(todoList.filter((todoItem) => todoItem.id !== id))
    }

    return (
        <Wrapper>
            <h1>Todo</h1>
            <InputButton 
                value={item} 
                onChange={handleTodoInputChange}
                onSubmit={addItem}
            />
            <div className="items-container">
                <ItemList items={todoList} onDelete={deleteItem}/>
            </div>
        </Wrapper>
    )
}

export default Todo
