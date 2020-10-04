import React from 'react'
import Wrapper from './styles';

function TodoItem({ id, label = 'tomar banho', onDelete }) {
    const handleDelete = () => {
        onDelete(id);
    }
    return (
        <Wrapper className="todo-item">
            <div className="label-container">
                <p>{label}</p>
            </div>
            <div className="button-container">
                <button onClick={handleDelete}>Delete</button>
            </div>
        </Wrapper>
    )
}

export default TodoItem
