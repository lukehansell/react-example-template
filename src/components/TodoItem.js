import React from 'react'

export default ({
  id,
  text,
  isComplete,
  onTodoClick
}) => {
  const handleClick = () => {
    onTodoClick(id)
  }

  return (
    <li className={isComplete ? 'complete' : ''} onClick={handleClick}>{text}</li>
  )
}