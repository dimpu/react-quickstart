import * as React from "react";
import * as ReactDOM from "react-dom";

import Welcome from './components/welcome';

ReactDOM.render(
    <Welcome compiler="TypeScript" framework="React" buildTool="Browserify"/>,
    document.body
);

