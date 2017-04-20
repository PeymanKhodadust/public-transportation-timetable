import * as React from "react";
import * as MobxReact from "mobx-react";

import { ConnectionInput } from "./connection-input";
import { viewProps, stateEnum } from "../utils/interfaces";
import { ajax } from "../utils/ajax";

var url = "http://transport.opendata.ch/v1/connections?from=";

@MobxReact.observer
export class SearchView extends React.Component<viewProps, {}> {
    constructor(props: viewProps) {
        super(props);
    }

    handleButtonAction = () => {
        let from = this.props.store.connectionInput[0];
        let to = this.props.store.connectionInput[1];
        ajax.get(url + from + "&to=" + to)
            .then(JSON.parse)
            .then((res) => {
                this.props.store.connections = res.connections;
                if(this.props.store.connections.length > 0)
                    this.props.store.appState = stateEnum.result;
            })
            .catch(() => { console.log("get request for connectons failed"); });
    }

    render() {
        const connection = this.props.store.connectionInput;
        return (
            <div>
                <ConnectionInput connection={connection}/>
                <button onClick={this.handleButtonAction} onTouchEnd={this.handleButtonAction}>search connection</button>
            </div>
        );
    }
}
