import React, { useState } from 'react'

export const Input = () => {
    const [text, setText] = useState('')

    const handleInput = (e) => {
        console.log(e.target.value)
        setText(e.target.value)
    }

  return (
    <div className='panel-block'>
        <form>
            <input className='input' type='text' onChange={handleInput}></input>
        </form>
        
    </div>
  )
}