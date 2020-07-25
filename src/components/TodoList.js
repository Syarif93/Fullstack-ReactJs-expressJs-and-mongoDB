import React from 'react'
import { useSelector } from 'react-redux'
import { toggleToDoAction, deleteToDoAction } from '../redux'
import { useActions } from '../useActions'

const TodoList = () => {
    const todos = useSelector(state => state.todos)
    const toggleToDo = useActions((todoId) => toggleToDoAction(todoId))
    const deleteToDo = useActions((todoId) => deleteToDoAction(todoId))

    return (
        <div>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <input type="checkbox"
                        checked={todo.complete}
                        onChange={toggleToDo.bind(null, todo.id)} />
                        <span className={todo.complete ? 'complete' : null}>{todo.name}</span>
                        <span className="delete-button" onClick={deleteToDo.bind(null, todo.id)}>X</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList
