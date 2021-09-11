import React from "react";

const ContactList = (props) => {
    console.log(props);

    const renderContactList = props.contacts.map((contact)=>{
        return (
            <div className="item">
                <div className="left floated content">
                    <div className="header">
                        {contact.name}
                    </div>
                    <div>{contact.email}</div>
                    
                </div>
                <div class="right floated content" style={{marginTop: "1%", color: "red"}}>
                    <i className="trash alternate outline icon"></i>
                </div>                                                                              
            </div>
        )
    })

    return (
        <div className="ui celled list">
            {renderContactList}
        </div>
    )
}

export default ContactList;