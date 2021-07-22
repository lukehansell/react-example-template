import React, { useState } from 'react'
import TodoList from './components/TodoList'
import AddTodoForm from './components/AddTodoForm'

export default () => {
  const [id, setId] = useState(0)
  const [todos, setTodos] = useState([])

  const handleAddTodo = (text) => {
    setTodos((todos) => [...todos, {
      id,
      text,
      isComplete: false
    }])
    setId(id => id + 1)
  }

  const handleTodoClick = (selectedId) => {
    setTodos((todos) => {
      const todoToChange = todos.find(({ id }) => id === selectedId)
      const updatedTodo = {
        ...todoToChange,
        isComplete: !todoToChange.isComplete
      }
      const indexToChange = todos.findIndex(({ id }) => id === selectedId)

      return [
        ...todos.slice(0, indexToChange),
        updatedTodo,
        ...todos.slice(indexToChange+1)
      ]
    })
  }

  return (
    <>
      <h1>React Todo</h1>
      <AddTodoForm onTodoAdded={handleAddTodo}/>
      <TodoList todos={todos} onTodoClick={handleTodoClick} />
    </>
  )
}