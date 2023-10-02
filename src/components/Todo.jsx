import React, { useState } from 'react'
import { dummyData } from '../dummyData'
import { TodoItem } from './TodoItem'

export const Todo = () => {
    const [items, setItem] = useState(dummyData)
    console.log(items)

  return (
    <div className='panel'>
        <div className='panel-heading'>Todo App</div>
        {items.map((item) => (
            <TodoItem key={item.id} item={item}/>
        ))}
        <div className='panel-block'>
            <span>{items.length} items</span>
        </div>
    </div>
  )
}
