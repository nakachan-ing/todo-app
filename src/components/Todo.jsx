import React, { useState } from 'react'
import { dummyData } from '../dummyData'

export const Todo = () => {
    const [items, setItem] = useState(dummyData)
    console.log(items)

  return (
    <div className='panel'>
        <div className='panel-heading'>Todo App</div>
        <div className='panel-block'>ここにTodoを表示</div>
        <div className='panel-block'>ここにTodoを表示</div>
        <div className='panel-block'>ここにTodoを表示</div>
        <div className='panel-block'>
            <span>ここにTodo数を表示</span>
        </div>
    </div>
  )
}
