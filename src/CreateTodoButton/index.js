import React from "react";
import { TodoContext } from "../TodoContext";
import './CreateTodoButton.css';

/*Funciones que contienen las etiquetas html*/
function CreateTodoButton(props){
    // const { openModal, setOpenModal } = React.useContext(TodoContext);

    const onClickButton = () => {
    //   setOpenModal(!openModal);
        props.setOpenModal(prevState => !prevState);
    };

    return (
        <button className="CreateTodoButton" onClick={onClickButton}>+</button>
    );
}
/*Para evitar usar nombr mes que no son al momento de exportar usamos export {nombreFuncion};*/
export {CreateTodoButton};