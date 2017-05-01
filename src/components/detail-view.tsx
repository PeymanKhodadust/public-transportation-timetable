import * as React from "react";
import RaisedButton from "material-ui/RaisedButton";
import { Table, TableBody, TableRow, TableRowColumn } from "material-ui/Table";

import {ConnectionSection} from "./connection-section";
import {stateEnum, viewProps} from "../utils/interfaces";

export class DetailView extends React.Component<viewProps, {}> {

    constructor(props: any) {
        super(props);
    }

    onReturnClick = () => {
        this.props.store.appState = stateEnum.result;
    }

    render() {
        const connection = this.props.store.detailedConnection;
        const journeySections = connection.sections.map((section, index) => {
            return <ConnectionSection section={section} key={"connection-section-no-" + index}/>;
        });
        return (
            <div>
                <h5>
                    { "from: " + this.props.store.connectionInput[0]}
                    <br />
                    {"to: " + this.props.store.connectionInput[1]}
                </h5>
                <Table>
                    <TableBody
                        showRowHover={true}
                        displayRowCheckbox={false}
                        selectable={true}
                    >
                        { journeySections }
                    </TableBody>
                </Table>
                <RaisedButton onTouchTap={this.onReturnClick} label="Go Back" primary={true} className="button"/>
            </div>
        );
    }
}