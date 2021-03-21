import React, {useState} from 'react'
import style from './KeepTodoItem.module.css'

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

    const isDoneCheck = () => {
        let classes = style.KeepTodoListItem;
        classes+=' ';
        if(todo.isDone)
            classes+=style.isDone;
        return classes;
    }

    const changeChangable = () => setChangable(!changable)
    return (
        <li className={isDoneCheck()}>
            <input type="checkbox" className={style.checkbox} value={todo.isDone} onChange={changeIsDone}/>
            {changable &&
            <input type="text" className={style.inputField} value={text} onChange={e => setText(e.target.value)}
                   onBlur={changeTodo}/>}
            {!changable && <span onClick={changeChangable} className={style.inputField}>{todo.value}</span>}
            <button onClick={deleteTodo}>X</button>
        </li>
    )
}

export default TodoListItem