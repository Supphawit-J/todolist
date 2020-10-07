import React from "react";
import {Link} from 'react-router-dom';
import Input from "../.components/Input";
import Lane from "../.components/Lane";
import Title from "../.components/Title"
import { useTodo } from "../contexts/ActionContext";

export function TodoList() {
    const [, { handleAddTodo }] = useTodo();

        return(
        
        <div className="container">
            <Link to="/about">about</Link>
            <Title>Simple Kanban board</Title>
            <Input onSubmit={handleAddTodo} />
            <Lane />
        </div>
        )
}
export default TodoList;