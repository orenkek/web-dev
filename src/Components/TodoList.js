import React, {useState} from 'react'
import TodoListItem from "./TodoListItem";
import style from "./TodoList.module.css";

const TodoList = ({deleteTodolist}) => {
    const [text, setText] = useState('')
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        if(text === '')
            return;
        setTodos(todos.concat({value: text, isDone: false}))
        setText('')
    }

    return (
        <div className={style.TodoList}>
            <div>
                <input type="text" value={text} onChange={e => setText(e.target.value)}/>
                <button onClick={addTodo}>Add todo</button>
            </div>
            <ul>
                {
                    todos.map((todo, i) =>
                        <TodoListItem key={i} todo={todos[i]}
                                      setTodo={(value) => setTodos(todos.slice(0, i).concat(value).concat(todos.slice(i + 1)))}
                        deleteTodo={() => setTodos(todos.slice(0,i).concat(todos.slice(i + 1)))}/>)
                }
            </ul>
            <button onClick={deleteTodolist}>Delete</button>
        </div>
    )
}

export default TodoList