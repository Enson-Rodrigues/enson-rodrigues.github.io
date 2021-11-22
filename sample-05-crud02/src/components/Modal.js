import React from "react";
import ReactDOM  from "react-dom";
import { deleteContactItemAPI } from "../redux/actions"
import { useSelector, useDispatch } from 'react-redux';

const Modal = ({isOpen, setIsOpen, data, children}) => {  
    const {id, name, email} = data;
    const deleteContactIdDispatch = useDispatch();

    const deleteContactHandler = (id) => {
        deleteContactIdDispatch(deleteContactItemAPI(id));
    }

    return ReactDOM.createPortal(
        <>
            {isOpen ? 
                <div className="modal">
                    <div className="modal-content">
                    <h3>Are you sure to delete below info ?</h3>
                    <p>{name} & {email}</p>
                    <button onClick={()=> deleteContactHandler(id)} className="ui button blue left">Yes</button>
                    <button onClick={()=> setIsOpen(!isOpen)} className="ui button blue left">No</button>
                    </div>
              </div>
            :""}
        </>,
        document.getElementById('portal')
    )

}

export default Modal;