import React, { useState } from 'react'
import { dummyData } from '../dummyData'
import { TodoItem } from './TodoItem'
import { Input } from './Input'
import { v4 as uuidv4 } from 'uuid'
import { Filter } from './Filter'

export const Todo = () => {
    const [items, setItems] = useState(dummyData)
    const [filter, setFilter] = useState('All')

    const handleChangeCheck = (checked) => {
        const newItems = items.map((item) => {
            if(item.id === checked.id) {
                item.done = !item.done
            }
            return item
        })
        setItems(newItems)
    }

    const handleAddTodo = (text) => {
        setItems([...items, {id: uuidv4(), text, done: false}])
    }

    const handleFilterChange = (value) => {
        setFilter(value)
    }

    const displayItems = items.filter((item) => {
        if(filter === 'All') {return true}
        if(filter === 'Todo') {return !item.done}
        if(filter === 'Done') {return item.done}
    })

  return (
    <div className='panel'>
        <div className='panel-heading'>Todo App</div>
        <Input onAdd={handleAddTodo}/>
        <Filter onFilter={handleFilterChange}/>
        {displayItems.map((item) => (
            <TodoItem key={item.id} item={item} onCheck={handleChangeCheck}/>
        ))}
        <div className='panel-block'>
            <span>{displayItems.length} items</span>
        </div>
    </div>
  )
}
