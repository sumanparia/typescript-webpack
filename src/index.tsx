import * as React from "react";
import * as ReactDOM from "react-dom";

import { OneDiv } from "./components/OneDiv";

ReactDOM.render(
    <div className="container">
    <OneDiv><OneDiv /><OneDiv /></OneDiv>
    <OneDiv><OneDiv /><OneDiv /></OneDiv>
    
    <OneDiv /><OneDiv />
    </div>,
    document.getElementById("example")
);