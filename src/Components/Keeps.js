import React, {useState} from 'react'
import Keep from "./Keep";
import {v4} from 'uuid'

    
const Keeps = () => {
    // const [keepLists, setKeepLists] = useState([v4()])
    const [keepLists, setKeepLists] = useState([{isNote: false, id: v4()}])

    const deleteKeepList = i => {
        console.log(i)
        setKeepLists(keepLists.slice(0, i).concat(keepLists.slice(i + 1)))
    }

    return (    
        <div>
            <button onClick={() => setKeepLists(keepLists.concat([{isNote: true, id: v4()}]))}>Add note</button>
            <button onClick={() => setKeepLists(keepLists.concat([{isNote: false, id: v4()}]))}>Add todolist</button>
            <div>
                {keepLists.map((l, i) => <Keep key={l.id} deleteKeeplist={() => deleteKeepList(i)} isNote={l.isNote}/>)}
            </div>
        </div>
    )
}

export default Keeps