import * as React from "react";
import * as ReactDOM from "react-dom";

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {MuiThemeProvider, lightBaseTheme} from "material-ui/styles";

const lightMuiTheme = getMuiTheme(lightBaseTheme)

import RaisedButtonExampleSimple  from "./components/OneDiv";

ReactDOM.render(
    <MuiThemeProvider muiTheme={lightMuiTheme}>
        <RaisedButtonExampleSimple/>
    </MuiThemeProvider>,
    document.getElementById("example")
);