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
            !stationBoard ?
                <div>
                    <div className="form-group">
                        <label htmlFor="from">From:</label>
                        <AutosuggestingInput connection={connection} index={0}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="to">To:</label>
                        <AutosuggestingInput connection={connection} index={1}/>
                    </div>
                </div> :
                <div>
                    <div className="form-group">
                        <label htmlFor="station">Departures from:</label>
                        <AutosuggestingInput connection={connection} index={0}/>
                    </div>
                </div>
        );
    }
}