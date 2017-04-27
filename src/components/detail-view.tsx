import * as React from "react";
import {stateEnum, viewProps} from "../utils/interfaces";
import {DateTime} from "../utils/date-time";

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
            if(section.journey != null) {
                return (
                    <div key={"journey-section-No-" + index + 1}>
                        <h5>
                            {
                                DateTime.getFormattedTimeString(new Date(section.departure.departure)) + " ------ " +
                                section.departure.station.name
                            }
                        </h5>
                        <p>{ section.journey.category + section.journey.number }</p>
                        <h5>
                            {
                                DateTime.getFormattedTimeString(new Date(section.arrival.arrival)) + " ------ " +
                                section.arrival.station.name
                            }
                        </h5>
                    </div>
                );
            }else {
                return (
                    <div key={"journey-section-No-" + index + 1}>
                        <p>--------------------------------------------------</p>
                        <p>{ "Walk for so much time: " + section.walk.duration}</p>
                        <p>--------------------------------------------------</p>
                    </div>
                );
            }
        });
        return (
            <div>
                <h3>{ "from: " + this.props.store.connectionInput[0] + ", to: " + this.props.store.connectionInput[1]}</h3>
                {journeySections}
                <button onClick={this.onReturnClick} onTouchEnd={this.onReturnClick}>go back</button>
            </div>
        );
    }
}