import React from "react";
import { Link } from "react-router-dom";

const PersonalDetails = (props) => {
    console.log(props);
    const {email, id, name} = props.location.state.contact

    return (
        <>
            <div className="ui link cards">
                <div className="card">
                    <div className="image">
                    </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="meta">
                        <a>Friends id no: {id}</a>
                    </div>
                    <div className="description">
                        {email}
                    </div>
                </div>
                <div className="extra content">
                    <span className="right floated">
                    Joined in 2013
                    </span>
                    <span>
                    <i className="user icon"></i>
                    75 Friends
                    </span>
                </div>
                </div>
            </div>
            <br/>
            <Link to="/">
                <div className="ui button blue">Back to contact list</div>
            </Link>
        </>       
    )
}

export default PersonalDetails;