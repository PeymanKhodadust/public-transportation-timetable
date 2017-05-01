import * as React from "react";
import * as MobxReact from "mobx-react";
import RaisedButton from "material-ui/RaisedButton";
import * as injectTapEventPlugin from "react-tap-event-plugin";

import { ConnectionInput } from "./connection-input";
import { viewProps, stateEnum } from "../utils/interfaces";
import { ajax } from "../utils/ajax";

const connectionUrl = "http://transport.opendata.ch/v1/connections?from=";

injectTapEventPlugin();

@MobxReact.observer
export class SearchView extends React.Component<viewProps, {}> {
    constructor(props: viewProps) {
        super(props);
    }

    onSearchClick = () => {
        const from = this.props.store.connectionInput[0];
        const to = this.props.store.connectionInput[1];
        //const sb = this.props.store.stationBoard;

        const url = connectionUrl + from + "&to=" + to;

        //const now = new Date();
        ajax.get(url)
            .then(JSON.parse)
            .then((res) => {
                this.props.store.connections = res.connections;
                if(this.props.store.connections.length > 0)
                    this.props.store.appState = stateEnum.result;
                    console.log("StateChange: ---" + this.props.store.appState);
            }, () => {
                    console.log("get request for connectons failed");
                }
            );
    }

    onModeChange = (event) => {
        console.log("radio button .......:" + event.target.value);
        this.props.store.stationBoard = event.target.value == "stationBoard" ? true : false;
    }

    render() {
        const connection = this.props.store.connectionInput;
        const sb = this.props.store.stationBoard;
        return (
            <div>
              {/*  <fieldset onChange={this.onModeChange}>
                    <input type="radio" id="con" name="stationBoard" value="connection" checked={!sb}/>
                    <label htmlFor="con">connection</label>
                    <br />
                    <input type="radio" id="sb" name="stationBoard" value="stationBoard" checked={sb}/>
                    <label htmlFor="sb">stationboard</label>
                </fieldset>*/}
                <ConnectionInput connection={connection} stationBoard={this.props.store.stationBoard}/>
                <RaisedButton label="SEARCH" primary={true} onTouchTap={this.onSearchClick} className="button"/>
            </div>
        );
    }
}
