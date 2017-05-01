import * as React from "react";
import * as MobxReact from "mobx-react";
import {AutosuggestingInput} from "./autosuggesting-input";

import {ConnectionInputProps} from "../utils/interfaces";

@MobxReact.observer
export class ConnectionInput extends React.Component<ConnectionInputProps, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        const connection = this.props.connection;
        const stationBoard = this.props.stationBoard;
        return (
            <div>
                <AutosuggestingInput connection={connection} index={0}/>
                <AutosuggestingInput connection={connection} index={1}/>
            </div>
        );
    }
}