import * as React from "react";

export interface WelcomeProps { 
    compiler: string; 
    framework: string; 
    buildTool: string;
}

export default class Welcome extends React.Component<WelcomeProps, {}> {
    render() {
        return <h1>Hello from {this.props.compiler}, {this.props.framework} and {this.props.buildTool}!</h1>;
    }
}