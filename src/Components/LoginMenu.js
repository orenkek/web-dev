import React from 'react'
import style from './LoginMenu.module.css'

const LoginMenu = (props) => {
    return(
        <div>
            <button onClick={props.SetIsLogged}>Click</button>
        </div>
    )
}

export default LoginMenu