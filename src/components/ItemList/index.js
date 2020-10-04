import React from 'react'
import TodoItem from '../TodoItem'
import Wrapper from './styles';


function ItemList({items, onDelete, onEdit}) {
    return (
        <Wrapper>
            {items.map(({id, label}) => (
                <TodoItem 
                label={label}
                id={id}
                key={`${id}-${label}`}
                onDelete={onDelete}/>
            ))}
        </Wrapper>
    )
}

export default ItemList
