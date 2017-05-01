import * as MobxReact from "mobx-react";
import * as React from "react";
import AutoComplete from "material-ui/AutoComplete";

import {ajax} from "../utils/ajax";

/* ---------- */
/*    Data    */
/* ---------- */

var url = "https://transport.opendata.ch/v1/locations?query=";



function getMatchingLocations(value) {
    const escapedValue = escapeRegexCharacters(value.trim());
    return ajax.get(url + escapedValue);
}

/* ----------- */
/*    Utils    */
/* ----------- */

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/* --------------- */
/*    Component    */
/* --------------- */

function getSuggestionValue(suggestion) {
    return suggestion.name;
}

function renderSuggestion(suggestion) {
    return (
        <span>{suggestion.name}</span>
    );
}
@MobxReact.observer
export class AutosuggestingInput extends React.Component<{connection: string[], index: number}, any> {
    constructor(props: any) {
        super(props);
        this.state = {value: this.props.connection[this.props.index], suggestions: [], isLoading: false}
    }

    onChange = (newValue) => {
        this.setState({value: newValue});
        this.props.connection[this.props.index] = newValue;
        getMatchingLocations(newValue)
            .then(JSON.parse)
            .then((r) => {
                this.setState({
                    isLoading: false,
                    suggestions: r.stations
                });
            }, undefined)
            .catch(() => { console.log("get request not successfull!!!!!!!!!!!"); });
    }

    dataSourceConfig = {
        text: 'name',
        value: 'name'
    }

    render() {
        const lable: string = (this.props.index ? "Arrival" : "Departure") + " station";
        return (
            <div>
                <AutoComplete
                    floatingLabelText={lable}
                    dataSource={this.state.suggestions}
                    onUpdateInput={this.onChange}
                    dataSourceConfig={this.dataSourceConfig}
                    animated={true}
                    filter={AutoComplete.caseInsensitiveFilter}
                    maxSearchResults={6}
                />
            </div>
        );
    }
}
