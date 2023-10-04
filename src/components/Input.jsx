import React, { useState } from 'react'

export const Input = ({onAdd}) => {
    const [text, setText] = useState('')

    const handleInput = (e) => {
        console.log(e.target.value)
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onAdd(text)
        setText('')
    }

  return (
    <div className='panel-block'>
        <form onSubmit={handleSubmit}>
            <input className='input' type='text' onChange={handleInput} value={text}></input>
        </form>
        
    </div>
  )
}