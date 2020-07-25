import React, { useState } from 'react'
import { addToDoAction } from '../redux'
import uuid from 'uuid/v4'
import { useActions } from '../useActions'

const TodoInput = () => {
    const [todo, setTodo] = useState('')
    const addToDo = useActions(todo => addToDoAction(todo))

    const onChange = e => {
        setTodo(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault()
        if(todo.trim() === '') return

        addToDo({
            id: uuid(),
            name: todo,
            complete: false
        })

        setTodo('')
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="todo" placeholder="Add a todo" value={todo} onChange={onChange} />
            <button type="submit">Add todo</button>
        </form>
    )
}

export default TodoInput
