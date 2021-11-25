import React from "react";
import ReactDOM  from "react-dom";
import { AreYouSure, ThankYou } from "./ModalTypes";

const Modal = ({isOpen, setIsOpen, modalType, data, children}) => {

    return ReactDOM.createPortal(
        <>
            {isOpen ? 
                <div className="modal">
                    <div className="modal-content">
                        
                        {modalType === "deleteCard" ? 
                            <AreYouSure modalData={data}></AreYouSure> 
                            : null
                        }

                        {modalType === "dataEntryDone" ? 
                            <ThankYou modalData={data}></ThankYou>
                            : null
                        }
                        
                        <button onClick={()=> setIsOpen(!isOpen)} className="ui button blue left">No</button>
                    </div>
              </div>
            :""}
        </>,
        document.getElementById('portal')
    )

}

export default Modal;