import React, { useState } from 'react'

export default ({ onTodoAdded }) => {

  const [text, setText] = useState('')

  const handleTextChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (text.trim().length > 0) {
      onTodoAdded(text)
      setText('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="todo_text" value={text} onChange={handleTextChange} />
      <button type="submit">Add Todo</button>
    </form>
  )
}