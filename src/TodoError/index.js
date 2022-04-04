import React from "react";
import './TodoError.css'
import { VscError } from 'react-icons/vsc';

function TodosError({error}){
    return (
        <div>
            <div className="icon-error">
                <VscError/>
            </div> 
            <div className="text-icon">
                <h1>Ha ocurrido un error, vuelve a intentarlo mas tarde</h1>
            </div>
       </div>
    );
}

export {TodosError};

