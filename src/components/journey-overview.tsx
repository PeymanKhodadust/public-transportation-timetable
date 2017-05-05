import * as React from "react";
import  { TableRow, TableRowColumn } from "material-ui/Table";

import { DateTime } from "../utils/date-time";

export class JourneyOverview extends React.Component<{journey: any}, {}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        const { journey, ...otherProps}  = this.props;
        const depTime = new Date(journey.stop.departure);
        const goal = this.props.journey.to;
        const transportName = this.props.journey.name;
        return (
            <TableRow {...otherProps}>
                <TableRowColumn className="time-tabelcell">
                    { DateTime.getFormattedTimeString(depTime) }
                </TableRowColumn>
                <TableRowColumn>
                    { transportName }
                </TableRowColumn>
                <TableRowColumn>
                    { goal }
                </TableRowColumn>
            </TableRow>
        );
    }
}