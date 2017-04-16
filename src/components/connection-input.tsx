import * as React from "react";
import * as MobxReact from "mobx-react";
import {AutosuggestingInput} from "./autosuggesting-input";

import {ConnectionInputProps} from "./interfaces";
@MobxReact.observer
export class ConnectionInput extends React.Component<ConnectionInputProps, any> {
    constructor(props: any) {
        console.log(JSON.stringify(props));

        super(props);
    }

    render() {
        const connection = this.props.connection;
        console.log("connection-input: ...  " + connection[0]);
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="from">From:</label>
                    <AutosuggestingInput connection={connection} index={0}/>
                </div>
                <div className="form-group">
                    <label htmlFor="to">To:</label>
                    <AutosuggestingInput connection={connection} index={1}/>
                </div>
            </div>
        );
    }
}