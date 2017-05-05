import * as React from "react";
import { TableRow, TableRowColumn } from "material-ui/Table";

import { DateTime } from "../utils/date-time";

export class JourneyDetail extends React.Component<any, {}> {
    constructor(props: any) {
        super(props);
    }
    render() {
        const stationName = this.props.passListItem.station.name;
        const arrivalTime = new Date(this.props.passListItem.arrival);
        return (
            <TableRow>
                <TableRowColumn className="time-tabelcell">{ DateTime.getFormattedTimeString(arrivalTime) }</TableRowColumn>
                <TableRowColumn>{ stationName }</TableRowColumn>
            </TableRow>
        );
    }
}