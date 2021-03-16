import React, {useState} from 'react'
import style from './TodoListItem.module.css'

const TodoListItem = ({todo, setTodo, deleteTodo, ...prop}) => {
    const [changable, setChangable] = useState(false)
    const [text, setText] = useState(todo.value)

    const changeIsDone = () => {
        setTodo({value: todo.value, isDone: !todo.isDone})
    }
    const changeTodo = () => {
        setTodo({value: text, isDone: todo.isDone})
        setChangable(!changable)
    }
    const changeChangable = () => setChangable(!changable)

    return (
        <li className={style.TodoListItem}>
            <input type="checkbox" value={todo.isDone} onChange={changeIsDone}/>
            {changable && <input type="text" value={text} onChange={e => setText(e.target.value)} onBlur={changeTodo}/>}
            {!changable && <span onClick={changeChangable}>{todo.value}</span>}
            <button onClick={deleteTodo}>X</button>
        </li>
    )
}

export default TodoListItem