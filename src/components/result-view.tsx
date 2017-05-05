import * as React from "react";
import { Table, TableBody } from "material-ui/Table";
import RaisedButton from "material-ui/RaisedButton";

import {stateEnum, viewProps} from "../utils/interfaces";
import { ConnectionOverview } from "./connection-overview";
import { JourneyOverview } from "./journey-overview";

export class ResultView extends React.Component<viewProps, {}> {
    constructor(props: any) {
        super(props);
    }

    onReturnClick = () => {
        this.props.store.appState = stateEnum.search;
    }

    onDetailClick = (key) => {
        this.props.store.resultDetail = this.props.store.searchResult[key];
        this.props.store.appState = stateEnum.detail;
    }
    render() {
        const sb = this.props.store.isStationBoard;
        const searchResult = this.props.store.searchResult.map((item, index) => {
           return  sb ?
               <JourneyOverview journey={item} key={"journey-overview-no-" + index + 1}/> :
               <ConnectionOverview connection={ item } key={"connection-overview-no-" + index + 1}/>;
        });
        return (
            <div>
                <h2>
                    { (sb ? "Departures f" : "F" ) + "rom " + this.props.store.searchInput[0] }
                    { sb ? [] : <br /> }
                    { sb ? "" : "To " + this.props.store.searchInput[1] }
                </h2>
                <Table onRowSelection={this.onDetailClick}>
                    <TableBody
                        showRowHover={true}
                        displayRowCheckbox={false}
                        selectable={true}
                    >
                        { searchResult }
                    </TableBody>
                </Table>
                <RaisedButton label="Go Back" primary={true} onTouchTap={this.onReturnClick} className="button"/>
            </div>
        );
    }
}