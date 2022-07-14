import React, { useState } from "react";

export function FormInput(props) {
  // const [inputState, setInput] = useState({ value :  });
  const [isTouched, setTouched] = useState(false);
  const [inputValue, setValue] = useState("");
  const [isValid, setValid] = useState(true);

  const handleInput = e => {
    setValue(e.target.value);
    validate(e.target.value);
  };

  const validate = val => {
    if (props.type === "email") {
      if (emailIsValid(val)) setValid(true);
      else setValid(false);
    }
    if (props.type === "number") {
      if (isNum(val)) setValid(true);
      else setValid(false);
    }
  };
  return (
    <div style={inputWrap}>
      <label>{props.label}</label>
      <input
        style={inputStyle}
        value={inputValue}
        onChange={handleInput}
        onBlur={() => setTouched(true)}
      />
      {props.required && isTouched && !inputValue && (
        <p style={{ color: "red" }}>Please enter value</p>
      )}
      {isTouched && !isValid && (
        <p style={{ color: "red" }}>Please enter valid value.</p>
      )}
    </div>
  );
}

const inputStyle = {
  padding: "1rem",
  fontSize: "2rem",
  margin: "10px"
};

const inputWrap = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "10px"
};

function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isNum(val) {
  return /^\d+$/.test(val);
}
