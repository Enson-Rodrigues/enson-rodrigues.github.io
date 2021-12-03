import React, { useState } from "react";
import UserImage from "../assests/user.png";
import Modal from "./modalTemplate/Modal";
import { Link } from "react-router-dom";
import { saveAs } from 'file-saver';


const ContactCard = (props) => {
    //console.log(props);
    const [ isOpen, setIsOpen ] = useState(false);
    const [ clickData, setClickData ] = useState({});
    const { email, id, imageUrl, name} = props.contactDetails;

    const openModal = (data) => {
        console.log("modal open");
        setIsOpen(!isOpen);
        setClickData(data);
    }

    const imageDownload = (imageUrl) => {
        console.log("clicked me "+ imageUrl)
    }

    const convertBase64ToFile = (base64String, fileName) => {
        let arr = base64String.split(',');
        let mime = arr[0].match(/:(.*?);/)[1];
        let bstr = atob(arr[1]);
        let n = bstr.length;
        let uint8Array = new Uint8Array(n);
        while (n--) {
           uint8Array[n] = bstr.charCodeAt(n);
        }
        let file = new File([uint8Array], fileName, { type: mime });
        return file;
   }

   const downloadBase64Data = (base64String, fileName) => {
        let file = convertBase64ToFile(base64String, fileName);
        saveAs(file, fileName);
    }
    
    return (
        <div className="item" key={id}>             
            <Link to={{pathname:`/contactlist/${id}`, state:{contact: props.contactDetails}}}>
                <img className="left floated ui avatar image" src={imageUrl ? imageUrl : UserImage} alt="user"/>
                <div className="left floated content">
                    <div className="header">
                        {name}
                    </div>
                    <div>{email}</div>
                </div>
            </Link>    
            
            <div className="right floated content" style={{marginTop: "1%", color: "red"}}>
                <i className="trash alternate outline icon" onClick={()=> openModal(props.contactDetails)}></i>
            </div>     
            <div className="right floated content" style={{marginTop: "1%", color: "blue"}}>
                <Link to={{pathname:"/edit", state:{contact: props.contactDetails}}}>
                    <i className="edit alternate outline icon" ></i>
                </Link>
            </div>
            {imageUrl ? 
                <div className="right floated content" style={{marginTop: "1%", color: "green"}}>
                    <em>image</em>
                    <i className="download icon" onClick={()=> downloadBase64Data(imageUrl, name)}></i>
                </div> : 
                ""}
            
            <Modal isOpen={isOpen} modalType="deleteCard" setIsOpen={setIsOpen} data={clickData}></Modal>                                     
        </div>
    )
}

export default ContactCard;