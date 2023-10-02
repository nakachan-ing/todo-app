import React from 'react'

export const TodoItem = ({item, onCheck}) => {
    const handleChange = () => {
        onCheck(item)
        console.log(item.done)
    }

  return (
    <div className='panel-block' key={item.id}>
        <input type='checkbox' checked={item.done} onChange={handleChange} value={item}/>
        <span className={item.done ? "has-text-grey-light" : ""}>{item.text}</span>
    </div>
  )
}