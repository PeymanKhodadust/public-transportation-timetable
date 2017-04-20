import * as React from "react";
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
        const journeySections = connection.sections.map((section) => {
            if(section.journey != null) {
                return (
                    <div>
                        <h5>
                            {section.departure.departure + " ------ " + section.departure.station.name}
                        </h5>
                        <p>{ section.journey.category + section.journey.number }</p>
                        <h5>
                            {section.arrival.arrival + " ------ " + section.arrival.station.name}
                        </h5>
                    </div>
                );
            }else {
                return (
                    <div>
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