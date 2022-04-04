import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons'
import './TodoItem.css';

function TodoItem(props){
    // const onComplete = () => {
    //     alert('TODO completado: ' + props.text);
    // };

    // const onDelete = () => {
    //     alert('TODO eliminado: ' + props.text);
    // };

    return (
        <li className="TodoItem">
            {/* <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>√</span> */}
            <div className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
                <span onClick={props.onComplete}><FontAwesomeIcon icon={faCheckCircle}/></span>
            </div>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <div className="Icon Icon-delete">
                <span onClick={props.onDelete}><FontAwesomeIcon icon={faTimesCircle} /></span>
            </div>
        </li>
    ); 
}

export {TodoItem};