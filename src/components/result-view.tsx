import * as React from "react";

import {stateEnum, viewProps} from "../utils/interfaces";
import { ConnectionOverview } from "./connection-overview";

export class ResultView extends React.Component<viewProps, {}> {
    constructor(props: any) {
        super(props);
    }

    onReturnClick = () => {
        this.props.store.appState = stateEnum.search;
    }

    render() {
        const connections = this.props.store.connections.map((connection, index) => {
           return  <ConnectionOverview connection={ connection } store={this.props.store} key={"connection-overview-no-" + index + 1}/>;
        });
        return (
            <div>
                <h3>{ "from: " + this.props.store.connectionInput[0] + ", to: " + this.props.store.connectionInput[1]}</h3>
                { connections }
                <button onClick={this.onReturnClick} onTouchEnd={this.onReturnClick}>go back</button>
            </div>
        );
    }
}