import React, { Component } from "react";

//import './styles.scss';

export default class DropDown extends Component {

  state = {
    showList: false,
    value: this.props.value,
  };

  setDDSate   = (event) => {
    event.preventDefault();
    if (!this.state.showList) {
      this.setState({ showList: !this.state.showList }, () => {
        document.addEventListener("click", this.closeMenu);
      });
    } else {
      this.closeMenu();
    }
  };

  closeMenu = () => {
    this.setState({ showList: false }, () => {
      document.removeEventListener("click", this.closeMenu);
    });
  };

  updateList = (e) => {
    let _value = e.target.getAttribute("data-value");
    this.setState(
      {
        value: _value,
      },
      () => {
        this.props.updateList(_value);
      }
    );
  };

  render() {
    const { list } = this.props;
    return (
      <div className="dropdownbox">
          <label>
                    {this.props.label}
                </label>
        <div className={this.state.showList ? "open dropdownselect": "dropdownselect"} onClick={this.setDDSate}>{this.state.value ? this.state.value: 'Select'}</div>
        {this.state.showList ? (
          <div className="dropdownlist">
            <ul className={this.props.classes}>
              {list.map((item, index) => {
                return (
                  <li key={index} onClick={this.updateList} data-value={item.jobType} >
                    {item.jobType}
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
        
      </div>
    );
  }
}
