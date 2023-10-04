import React, { useState } from 'react'
import { dummyData } from '../dummyData'
import { TodoItem } from './TodoItem'
import { Input } from './Input'
import { v4 as uuidv4 } from 'uuid'

export const Todo = () => {
    const [items, setItems] = useState(dummyData)
    console.log(items)

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

  return (
    <div className='panel'>
        <div className='panel-heading'>Todo App</div>
        <Input onAdd={handleAddTodo}/>
        {items.map((item) => (
            <TodoItem key={item.id} item={item} onCheck={handleChangeCheck}/>
        ))}
        <div className='panel-block'>
            <span>{items.length} items</span>
        </div>
    </div>
  )
}
