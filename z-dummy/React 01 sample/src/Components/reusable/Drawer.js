import React, { useEffect, useState } from "react";
import "./drawer.scss";



const Drawer = (props) => {
  const [isPopupTrue, setIsPopupTrue] = useState(props.popupFlag);
  console.log(isPopupTrue);
  const closePopup = () => {
    console.log(isPopupTrue);
    setIsPopupTrue(false);
}

  // let showEmployee = props.selectedEmployee;
//   isPopupTrue = props.popupFlag;
//   console.log("props...", showEmployee, typeof showEmployee);
  return isPopupTrue ? (
    <div className="popup-wrapper">
        <div className="header">
            <h2>Heading</h2>
            <p className="close" onClick= {closePopup}></p>
        </div>
      <ul>
        <li className="label">
          <h1>Employee Name</h1>
          <h2>INDIA</h2>
        </li>
        <li className="label">
          <h1>Employee Salary</h1>
          <h2>INDIA</h2>
        </li>
        <li className="label">
          <h1>Employee Age</h1>
          <h2>INDIA</h2>
        </li>
      </ul>
    </div>
  ) : (
    ""
  );
};

export default Drawer;
