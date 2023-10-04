import React, { useState } from 'react'
import { dummyData } from '../dummyData'
import { TodoItem } from './TodoItem'
import { Input } from './Input'

export const Todo = () => {
    const [items, setItem] = useState(dummyData)
    console.log(items)

    const handleChangeCheck = (checked) => {
        const newItems = items.map((item) => {
            if(item.id === checked.id) {
                item.done = !item.done
            }
            return item
        })
        setItem(newItems)
    }

  return (
    <div className='panel'>
        <div className='panel-heading'>Todo App</div>
        <Input />
        {items.map((item) => (
            <TodoItem key={item.id} item={item} onCheck={handleChangeCheck}/>
        ))}
        <div className='panel-block'>
            <span>{items.length} items</span>
        </div>
    </div>
  )
}
