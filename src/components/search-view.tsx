import * as React from "react";
import * as MobxReact from "mobx-react";
import RaisedButton from "material-ui/RaisedButton";
import * as injectTapEventPlugin from "react-tap-event-plugin";
import Toggle from "material-ui/Toggle";
import DatePicker from "material-ui/DatePicker";
import TimePicker from "material-ui/TimePicker";

import { SearchInput } from "./search-input";
import { viewProps, stateEnum } from "../utils/interfaces";
import { ajax } from "../utils/ajax";
import { DateTime } from "../utils/date-time";

const baseUrl = "http://transport.opendata.ch/v1/";

injectTapEventPlugin();

@MobxReact.observer
export class SearchView extends React.Component<viewProps, {}> {
    constructor(props: viewProps) {
        super(props);
    }

    handleSearchClick = () => {
        const from = this.props.store.searchInput[0];
        const to = this.props.store.searchInput[1];
        const date = DateTime.getFormattedDateString(this.props.store.dateTime);
        const time = DateTime.getFormattedTimeString(this.props.store.dateTime);
        const arr = this.props.store.isArrival;
        const sb = this.props.store.isStationBoard;

        const url = baseUrl + (sb ?
                "stationboard?station=" + from + "&time=" + date + " " + time + + time + "&limit=6" + (arr ? "&type=arrival" : "")
                :
                "connections?from=" + from + "&to=" + to + "&date=" + date + "&time=" + (arr?"&isArrivalTime=1":"")
        );
        console.log(url);
        ajax.get(url)
            .then(JSON.parse)
            .then((res) => {
                this.props.store.searchResult = sb ? res.stationboard : res.connections;
                if(this.props.store.searchResult.length > 0)
                    this.props.store.appState = stateEnum.result;
                    console.log("StateChange: ---" + this.props.store.appState);
            }, () => {
                    console.log("get request for connectons failed");
                }
            );
    }

    handleSearchModeChange = (event) => {
        console.log("radio button .......:" + event.target.value);
        this.props.store.isStationBoard = !this.props.store.isStationBoard;
    }

    handleToggleTimeMode = (e, i) => {
        this.props.store.isArrival = ! this.props.store.isArrival;
    }

    handleToggleSearchMode = (e, i) => {
        this.props.store.isStationBoard = ! this.props.store.isStationBoard;
    }

    handleChangeDate = (n, d) => {
        this.props.store.dateTime.setDate(d.getDate());
        this.props.store.dateTime.setFullYear(d.getFullYear());
        this.props.store.dateTime.setMonth(d.getMonth());
    }

    handleChangeTime = (n, d) => {
        this.props.store.dateTime.setTime(d.getTime());
    }

    render() {
        const searchInput = this.props.store.searchInput;
        const toggleTimeModeLabel = this.props.store.isArrival ? "Departure" : "Arrival";
        const sb = this.props.store.isStationBoard;
        const toggleSearchModeLabel = sb ? "Connection" : "Stationboard";
        return (
            <div>
                <h1>Swiss Public Transportation</h1>
                <Toggle
                    label={toggleSearchModeLabel}
                    onToggle={this.handleToggleSearchMode}
                    toggled={this.props.store.isStationBoard}
                    style={ {marginTop: "30px !important", width: "30% !important"} }
                    className="sb-toggle"
                />
                <SearchInput
                    connection={searchInput}
                    isStationBoard={this.props.store.isStationBoard}
                    isArrival={this.props.store.isArrival}
                />
                {
                    sb ? [] :
                    <Toggle
                        label={toggleTimeModeLabel}
                        onToggle={this.handleToggleTimeMode}
                        toggled={this.props.store.isArrival}
                        className="arrivalToggle"
                    />
                }
                <DatePicker
                    onChange={this.handleChangeDate}
                    autoOk={true}
                    floatingLabelText="Date"
                    className="datePicker"
                />
                <TimePicker
                    floatingLabelText="Time"
                    autoOk={true}
                    onChange={this.handleChangeTime}
                    className="timePicker"
                />
                <RaisedButton label="SEARCH" primary={true} onTouchTap={this.handleSearchClick} className="button"/>
            </div>
        );
    }
}
