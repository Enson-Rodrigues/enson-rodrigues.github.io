import React, { Component } from "react";
 
export default class CustomDropdown extends Component {
    state = {
        dropDownOpen: false,
        value: ""
    }

    ctaClick = () => {
        this.setState(
            { 
                dropDownOpen: !this.state.dropDownOpen
            }
        )
    }

    dropListClick = (params) => {
        this.setState({
            value: params
        })
        this.props.callBack(params);
    }

    render() {
        const jobs = this.props.jobs;

        return (
        <>
            <label>{this.props.label}</label>
            <a className="btn" onClick={() => this.ctaClick()}>{this.state.value ? this.state.value : "Select"}<span className={"triangle " + (this.state.dropDownOpen ? 'up' : 'down')}></span>
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
        </>
        );
    }
}