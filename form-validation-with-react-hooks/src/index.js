import React from "react";
import ReactDOM from "react-dom";

import { FormInput } from "./components/formInput";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <FormInput required={false} type="text" label="Name" />
      <FormInput required={true} type="email" label="Your Email" />
      <FormInput required={true} type="number" label="Pin" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
