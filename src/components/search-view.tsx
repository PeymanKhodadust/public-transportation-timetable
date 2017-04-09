import * as React from "react";

import {ConnectionInput} from "./connection-input";
import * as MobxReact from "mobx-react";
import {SearchViewProps} from "./interfaces";
@MobxReact.observer
export class SearchView extends React.Component<SearchViewProps, {}> {
    constructor(props: SearchViewProps) {
        super(props);
    }

    render() {
        const connection = this.props.store.connectionInput;
        console.log("Searchview:\nfrom: " + this.props.store.connectionInput[0] + ", to: " + this.props.store.connectionInput[1]);

        return (
            <div>
                <h3> search view </h3>
                <h4> from: {this.props.store.connectionInput[0]}, to: {this.props.store.connectionInput[1]}</h4>
                <ConnectionInput connection={connection}/>
            </div>
        );
    }
}
