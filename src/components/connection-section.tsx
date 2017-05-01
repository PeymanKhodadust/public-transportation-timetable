import * as React from "react";
import {TableRow, TableRowColumn} from "material-ui/Table";

import {DateTime} from "../utils/date-time";

export class ConnectionSection extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        const section = this.props.section;
        let s;
        if(section.journey != null) {
            s = (
                <TableRow>
                    <TableRowColumn>
                        <div className="time-tabelcell">
                            { DateTime.getFormattedTimeString(new Date(section.departure.departure)) }
                        </div>
                        <div className="right-aligned">
                            { section.journey.category + section.journey.number }
                        </div>
                        <div className="time-tabelcell">
                            { DateTime.getFormattedTimeString(new Date(section.arrival.arrival)) }
                        </div>
                    </TableRowColumn>
                    <TableRowColumn>
                        <div>
                            { section.departure.station.name }
                        </div>
                        <div>
                            &nbsp;
                        </div>
                        <div>
                            {section.arrival.station.name}
                        </div>

                    </TableRowColumn>
                </TableRow>
            );
        }else{
            s = (
                <TableRow>
                    <TableRowColumn>Walk: </TableRowColumn>
                    <TableRowColumn className="time-tabelcell">{ section.walk.duration }</TableRowColumn>
                </TableRow>
            );
        }
        //console.log("connection-section s: " + JSON.stringify(s));
        return s;
    }
}
