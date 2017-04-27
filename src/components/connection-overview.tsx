import * as React from "react";
import {ConnectionOverviewProps, stateEnum} from "../utils/interfaces";
import {DateTime} from "../utils/date-time";

export class ConnectionOverview extends React.Component<ConnectionOverviewProps, {}> {

    constructor(props: any) {
        super(props);
    }

    onDetailClick = () => {
        this.props.store.detailedConnection = this.props.connection;
        this.props.store.appState = stateEnum.detail;
    }
    render() {
        const dep = new Date(this.props.connection.from.departure);
        const arr = new Date(this.props.connection.to.arrival);
        const sections = this.props.connection.sections.map((section, index) => {
            if(section.journey != null)
                return <span key={"journey-section-No-" + index + 1}>{ section.journey.category + section.journey.number + " --- " }</span>
        });
        return (
            <div onClick={this.onDetailClick}>
                <h4>{
                        DateTime.getFormattedTimeString(dep)
                    }
                    -----------------
                    {
                        DateTime.getFormattedTimeString(arr)
                    }
                </h4>
                <div>
                    {
                        "Duration: " + this.props.connection.duration.replace("00d", "") + ", transfers: " + this.props.connection.transfers
                    }
                </div>
                <div>
                    { sections }
                </div>
            </div>
        );
    }
}