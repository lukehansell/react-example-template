import React from 'react'

import TodoItem from './TodoItem'

export default ({ todos = [], onTodoClick }) => (
  <ul>
    {todos.map((todo, i) => (
      <TodoItem key={i} text={todo.text} id={todo.id} isComplete={todo.isComplete} onTodoClick={onTodoClick} />
    ))}
  </ul>
)