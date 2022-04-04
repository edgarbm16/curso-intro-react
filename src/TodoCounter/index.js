import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css'
import { GoTasklist } from 'react-icons/go';

function TodoCounter(){

    const {totalTodos, completedTodos} = React.useContext(TodoContext);

    return (
        <div>
            <h1 className="TodoCounterTitle">Mis TODOs <GoTasklist/></h1>
            <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
        </div>
    );
}

export {TodoCounter};