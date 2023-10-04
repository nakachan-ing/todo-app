import React from 'react'

export const Filter = ({onFilter}) => {
    const handleClick = (value) => {
        console.log(value)
        onFilter(value)
    }

  return (
    <div className='panel-tabs'>
        <a href='#' onClick={() => handleClick('All')}>All</a>
        <a href='#' onClick={() => handleClick('Todo')}>Todo</a>
        <a href='#' onClick={() => handleClick('Done')}>Done</a>
    </div>
  )
}
