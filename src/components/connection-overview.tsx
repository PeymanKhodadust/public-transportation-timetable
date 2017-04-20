import * as React from "react";
import {ConnectionOverviewProps, stateEnum} from "../utils/interfaces";

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
        console.log(JSON.stringify(this.props.connection.sections));
        const sections = this.props.connection.sections.map((section) => {
            if(section.journey != null)
                return <span>{ section.journey.category + section.journey.number + " --- " }</span>
        });
        return (
            <div onClick={this.onDetailClick}>
                <h4>{
                        dep.getHours() < 10 ? "0" + dep.getHours() : dep.getHours() + ":" + (dep.getMinutes() < 10 ? "0"
                                + dep.getMinutes() : dep.getMinutes())
                    }
                    -----------------
                    {
                        arr.getHours() < 10 ? "0" + arr.getHours() : arr.getHours() + ":" + (arr.getMinutes() < 10 ? "0"
                                + arr.getMinutes() : arr.getMinutes())
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