import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {

    const [value, setValue] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
         value.trim().length !== 0 ? addTodo(value): setValue("");
        setValue('');

    }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
        <input className="todo-input" onChange={e => setValue(e.target.value)} value={value} placeholder="What is the task today" type="text"/>
        <button type="submit"  className="todo-btn" >Add Task</button>

    </form>
  )
}

export default TodoForm