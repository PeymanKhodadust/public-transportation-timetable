import * as React from "react";

import {ConnectionInput} from "./connection-input";
import * as MobxReact from "mobx-react";
import {SearchViewProps} from "./interfaces";

@MobxReact.observer
export class SearchView extends React.Component<SearchViewProps, {}> {
    constructor(props: SearchViewProps) {
        super(props);
    }

    /*handleButtonAction() {
        let from = this.props.store.connectionInput[0];
        let to = this.props.store.connectionInput[1];
    }*/

    render() {
        const connection = this.props.store.connectionInput;
        return (
            <div>
                <ConnectionInput connection={connection}/>
                <button>search connection</button>
            </div>
        );
    }
}
