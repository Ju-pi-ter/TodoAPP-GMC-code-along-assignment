import React, {useState} from 'react'

const EditTodoForm = ({editTodo, task}) => {

    const [value, setValue] = useState(task.task);
    const handleSubmit = e => {
        e.preventDefault();
        value.trim().length !== 0 ? editTodo(value, task.id) : setValue("");
        setValue('');
    }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
        <input className="todo-input" onChange={e => setValue(e.target.value)} value={value} placeholder="Update task" type="text"/>
        <button type="submit"  className="todo-btn" >Update Task</button>

    </form>
  )
}

export default EditTodoForm