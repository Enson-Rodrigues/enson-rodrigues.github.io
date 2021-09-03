import React, { Component } from "react";
import ReactDOM from 'react-dom';
 
export default class CustomDropdown extends Component {

    constructor() {
        super();

        this.state = {
            dropDownOpen: false,
            value: ""
        };
    }

    ctaClick = () => {
        if (!this.state.dropDownOpen) {
            document.addEventListener('click', this.handleOutsideClick, false);
        } else {
            document.removeEventListener('click', this.handleOutsideClick, false);
        }

        this.setState(
            { 
                dropDownOpen: !this.state.dropDownOpen
            }
        )

        
    }
    handleOutsideClick = (e) => {
        // ignore clicks on the component itself
        const domNode = ReactDOM.findDOMNode(this);

        if (!domNode || !domNode.contains(e.target)) {
            this.setState({
                dropDownOpen: false
            });
        }
    }

    dropListClick = (params) => {
        this.setState({
            value: params
        })
        this.props.callBack(params);
    }

    render() {
        const jobs = this.props.jobs;
        const localStorageJobType = this.props.jobType;

        return (
        <>
            
            <div>
                <a className="btn" onClick={this.ctaClick}>{this.state.value ? this.state.value : localStorageJobType ? localStorageJobType : "Select"}<span className={"triangle " + (this.state.dropDownOpen ? 'up' : 'down')}></span>
                    {(this.state.dropDownOpen ? 
                        <ul className="dropDownList">
                            {(jobs.length !== 0 ? 
                                jobs.map(target=>(
                                    <li key={target.id} onClick={() => this.dropListClick(target.jobType)}>
                                        {target.jobType}
                                    </li>
                                )) :
                                <p>Currently there is some technical issue please check after some tym</p>
                            )}
                    </ul> :
                    ""
                    )}
                </a>
            </div>
            
        </>
        );
    }
}