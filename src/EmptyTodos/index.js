import React from "react";
import './EmptyTodos.css'
import { BiTask } from 'react-icons/bi';
import { RiAddCircleFill } from 'react-icons/ri';

function EmptyTodos({error}){
    return(
       <div>
            <div className="icon-task">
                <BiTask/>
            </div> 
            <div className="text-icon">
                <h1>¡Crear tu primer TODO!</h1>
                <h4> Usa <RiAddCircleFill/> para crear un TODO</h4>
            </div>
       </div>
    );
}

export {EmptyTodos};

