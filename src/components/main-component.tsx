import * as React from "react";
import { SearchView } from "./search-view";
import {ConnectionCoordinates} from "./connection-coordinates";

export interface MainProps {}
export interface MainState {from: string, to: string, progress: state}

const enum state{
    search= 1,
    result= 2,
    detail= 3
}

export class MainComponent extends React.Component<MainProps, MainState> {
    constructor (props: any) {
        super(props);
        this.state = {
            from: "",
            to: "",
            progress: state.search;
        }
    }
    public handleOnChangeFrom (event: any) {
        this.setState({from: event.target.value});
        console.log("from: " + this.state.from + "\n");
    }
    public handleOnChangeTo (event: any) {
        this.setState({to: event.target.value});
        console.log("to: " + this.state.to + "\n");
    }
    render() {
        return (
            <div>
              <h1>Main Component</h1>
              <SearchView onChangeFrom={this.handleOnChangeFrom} onChangeTo={this.handleOnChangeTo} connectionCoordinates={ConnectionCoordinates}/>
            </div>
        );
    }
}
