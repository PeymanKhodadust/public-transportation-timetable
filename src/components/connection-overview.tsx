import * as React from "react";
import { TableRow, TableRowColumn } from "material-ui/Table";

import {ConnectionOverviewProps, stateEnum} from "../utils/interfaces";
import {DateTime} from "../utils/date-time";

export class ConnectionOverview extends React.Component<ConnectionOverviewProps, {}> {

    constructor(props: any) {
        super(props);
    }

    render() {
        const { connection, children, ...otherProps}  = this.props;
        const dep = new Date(connection.from.departure);
        const arr = new Date(connection.to.arrival);
        const sections = connection.sections.map((section, index) => {
            if(section.journey != null)
                return <span key={"journey-section-No-" + index + 1}>{ section.journey.category + section.journey.number +
                (index == this.props.connection.sections.length - 1 ? "" : " --- ") }</span>
        });
        return (
            <TableRow {...otherProps}>
                <TableRowColumn className="time-tabelcell">
                    { DateTime.getFormattedTimeString(dep) }
                </TableRowColumn>
                <TableRowColumn className="sections-overview-tablecell">
                    <div>
                        { sections }
                    </div>
                    <div>
                        {
                            "Duration: " + this.props.connection.duration.replace("00d", "") + ", transfers: " +
                            this.props.connection.transfers
                        }
                    </div>
                </TableRowColumn>
                <TableRowColumn className="time-tabelcell right-aligned">
                    { DateTime.getFormattedTimeString(arr) }
                </TableRowColumn>
            </TableRow>
        );
    }
}