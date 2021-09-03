import React from "react";
import { Link } from "react-router-dom";

import CustomButton from "../../commonComponents/button";
//import "./styles.scss";

const Cards = ({ item }) => {
  return (
    <div className="col">
      <div className="card">
        <div className="card-content">
          <img alt={item.name} src={item.avatar} />
        </div>
        <div className="card-detail">
          <div>
            <span>{item.name} </span>
          </div>
          <div className="actionWrapper">
            <Link to={"/" + item.id}>
              <CustomButton classes="blue" text="Read More">
                Read more
              </CustomButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cards;
