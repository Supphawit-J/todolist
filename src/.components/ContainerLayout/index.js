import React from "react"
import style from "./main.module.css"

export function ContainerLayout(props){
    return <div children={props.children} className={style.container} />
}
export default ContainerLayout;