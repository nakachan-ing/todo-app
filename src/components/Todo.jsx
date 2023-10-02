import React, { useState } from 'react'
import { dummyData } from '../dummyData'

export const Todo = () => {
    const [items, setItem] = useState(dummyData)
    console.log(items)

  return (
    <div className='panel'>
        <div className='panel-heading'>Todo App</div>

        {items.map((item) => (
            <div className='panel-block' key={item.id}>
                <input type='checkbox'/>
                <span>{item.text}</span>
            </div>
        ))}

        <div className='panel-block'>
            <span>{items.length} items</span>
        </div>
    </div>
  )
}
