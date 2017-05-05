import * as React from "react";
import * as MobxReact from "mobx-react";
import {AutosuggestingInput} from "./autosuggesting-input";

import {SearchInputProps} from "../utils/interfaces";

@MobxReact.observer
export class SearchInput extends React.Component<SearchInputProps, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        const connection = this.props.connection;
        const sb = this.props.isStationBoard;
        const arr = this.props.isArrival;
        return (
            <div>
                <AutosuggestingInput
                    connection={connection}
                    index={0}
                    label={sb ? (arr ? "Arrival Station" : "Departure Station") : "Departure Station"}
                />
                {
                    sb ? [] :
                        <AutosuggestingInput connection={connection} index={1} label="Arrival Station"/>
                }
            </div>
        );
    }
}