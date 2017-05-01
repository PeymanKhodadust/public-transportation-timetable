import * as React from "react";
import { Table, TableBody } from "material-ui/Table";
import RaisedButton from "material-ui/RaisedButton";

import {stateEnum, viewProps} from "../utils/interfaces";
import { ConnectionOverview } from "./connection-overview";

export class ResultView extends React.Component<viewProps, {}> {
    constructor(props: any) {
        super(props);
    }

    onReturnClick = () => {
        this.props.store.appState = stateEnum.search;
    }

    onDetailClick = (key) => {
        this.props.store.detailedConnection = this.props.store.connections[key];
        this.props.store.appState = stateEnum.detail;
    }
    render() {
        const connections = this.props.store.connections.map((connection, index) => {
           return  <ConnectionOverview connection={ connection } store={this.props.store} key={"connection-overview-no-" + index + 1}/>;
        });
        return (
            <div>
                <h3>{ "from: " + this.props.store.connectionInput[0] + ", to: " + this.props.store.connectionInput[1]}</h3>
                <Table onRowSelection={this.onDetailClick}>
                    <TableBody
                        showRowHover={true}
                        displayRowCheckbox={false}
                        selectable={true}
                    >
                        { connections }
                    </TableBody>
                </Table>
                <RaisedButton label="Go Back" primary={true} onTouchTap={this.onReturnClick} className="button"/>
            </div>
        );
    }
}