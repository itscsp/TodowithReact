import React from 'react'
import Todo from './Todo'

const TodoList = ({setTodos, todos, filterTodos}) => {
    // Events


    console.log(todos)
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filterTodos.map((todo) => (
                    <Todo
                    setTodos={setTodos}
                    todos={ todos}
                    todo={todo}
                    text={todo.text}
                    key={todo.id} />
                ))}

            </ul>
        </div>
    )
}

export default TodoList
