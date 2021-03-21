import React, {useState} from 'react'
import KeepTodoItem from "./KeepTodoItem";
import style from "./Keep.module.css";

const TodoList = ({deleteKeeplist, isNote}) => {
    const [text, setText] = useState('')
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        if(text === '')
            return;
        setTodos(todos.concat({value: text, isDone: false}))
        setText('')
    }

    return (

        <>
        {isNote && 
        <div className={style.Keep}>
            <div><textarea className={style.keepNoteInput}/></div>
            <div><button onClick={deleteKeeplist} className={style.keepNoteDeleteButton}>Delete</button></div>
            </div>}
        {!isNote &&
        <div className={style.Keep}>
            <div className={style.inputField}>
                <input type="text" value={text} onChange={e => setText(e.target.value)}/>
                <button onClick={addTodo}>Add todo</button>
            </div>
            <ul>
                {
                    todos.map((todo, i) =>
                        <KeepTodoItem key={i} todo={todos[i]}
                                      setTodo={(value) => setTodos(todos.slice(0, i).concat(value).concat(todos.slice(i + 1)))}
                        deleteTodo={() => setTodos(todos.slice(0,i).concat(todos.slice(i + 1)))}/>)
                }
            </ul>
            <button onClick={deleteKeeplist}>Delete</button>
        </div>}
        </>
    )
}

export default TodoList