import React, { Component } from "react";
 
class PopUp extends Component {
    constructor(){
        super();
        this.state = {
          employeeDetails: {},
          callBack: () => {
              console.log();
          }
        }
      }

    render() {
        const data = this.props.data;
        const callBackFunc = this.props.call;
        return (
        <>
            <div id="myNav" className="overlay">
                <div className={`overlay-content ${data.employee_age > 60 ? "red": "green" }`}>
                    <span className="close" onClick={()=>callBackFunc()}>&times;</span>
                    <p>Hello {data.employee_name} you are {data.employee_age > 60 ? data.employee_age + " yrs of age so retired": data.employee_age + " yrs of age so not retired"}</p>
                </div>
            </div>
        </>
        );
    }
}
 
export default PopUp;