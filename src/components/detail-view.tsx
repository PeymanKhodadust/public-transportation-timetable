import * as React from "react";
import RaisedButton from "material-ui/RaisedButton";
import { Table, TableBody, TableRow, TableRowColumn } from "material-ui/Table";

import {ConnectionDetail} from "./connection-detail";
import {stateEnum, viewProps} from "../utils/interfaces";
import { JourneyDetail } from "./journey-detail";

export class DetailView extends React.Component<viewProps, {}> {

    constructor(props: any) {
        super(props);
    }

    onReturnClick = () => {
        this.props.store.appState = stateEnum.result;
    }

    render() {
        const resultDetail = this.props.store.resultDetail;
        const sb = this.props.store.isStationBoard;
        const journeySections = sb ?
            resultDetail.passList.map((item, index) => {
                return <JourneyDetail passListItem={item} key={"journey-detail-no-" + index + 1}/>
            }) :
            resultDetail.sections.map((item, index) => {
                return <ConnectionDetail section={item} key={"connection-section-no-" + index + 1}/>
            });
        return (
            <div>
                <h2>
                    { (sb ? (resultDetail.name + " f") : "F" ) + "rom " + this.props.store.searchInput[0]}
                    <br />
                    {"To " + (sb ? resultDetail.to : resultDetail.to.station.name) }
                </h2>
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