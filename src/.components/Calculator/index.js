import React from "react"
import style from "./main.module.css"

export function Calculator(props){
    return <div type="button" children={props.children} className={style.calculator} />
}
export default Calculator;