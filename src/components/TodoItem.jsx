import React from 'react'

export const TodoItem = ({item}) => {
  return (
    <div className='panel-block' key={item.id}>
        <input type='checkbox'/>
        <span>{item.text}</span>
    </div>
  )
}