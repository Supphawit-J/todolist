import React from "react"
import style from "./main.module.css"

export function Button(props){
    return <input type="button" value={props.children} onClick={props.onClick} className={style.numberButton} />
}
export default Button;