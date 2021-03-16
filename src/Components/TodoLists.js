import React, {useState} from 'react'
import TodoList from "./TodoList";
import {v4} from 'uuid'


const TodoLists = () => {
    const [todoLists, setTodoLists] = useState([v4()])

    const deleteTodoList = i => {
        setTodoLists(todoLists.slice(0, i).concat(todoLists.slice(i + 1)))
    }

    console.log(todoLists)

    return (
        <div>
            <button onClick={() => setTodoLists(todoLists.concat([v4()]))}>Add todolist</button>
            <div>
                {todoLists.map((l, i) => <TodoList key={l} deleteTodolist={() => deleteTodoList(i)}/>)}
            </div>
        </div>
    )
}

export default TodoLists