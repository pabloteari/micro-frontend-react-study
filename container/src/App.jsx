import React from "react";
import ReactDOM from "react-dom";
import { Counter } from 'microFrontOne/Counter';
import { Form } from 'microFrontTwo/Form';

import "./index.css";

const App = () => (
  <div className="container" style={{backgroundColor: "green"}} >
    Container
    <Counter />
    <Form />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
