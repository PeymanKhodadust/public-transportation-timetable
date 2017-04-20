import * as MobxReact from "mobx-react";
import * as Autosuggest from "react-autosuggest";
import * as React from "react";

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

        this.lastRequestId = null;
        this.state = {value: this.props.connection[this.props.index], suggestions: [], isLoading: false}
    }

    public lastRequestId: any;
    loadSuggestions(value) {
        getMatchingLocations(value)
            .then(JSON.parse)
            .then((r) => {
                this.setState({
                    isLoading: false,
                    suggestions: r.stations
                });
            }, undefined)
            .catch(() => { console.log("get request not successfull!!!!!!!!!!!"); });

    }

    onChange = (event, {newValue}) => {
        this.setState({value: newValue});
        this.props.connection[this.props.index] = newValue;
    }

    onSuggestionsFetchRequested = ({ value }) => {

        this.loadSuggestions(value);
    };

    onSuggestionsClearRequested = () => {
        this.state.suggestions = [];
    };

    render() {
        const { value, suggestions, isLoading } = this.state;
        const inputProps = {
            placeholder: this.props.index? "to" : "from",
            value: value,
            onChange: this.onChange
        };
        const status = (isLoading ? 'Loading...' : 'Type to load suggestions');
        return (
            <div>
                <div className="status">
                    <strong>Status:</strong> {status}
                </div>
                <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps} />
            </div>
        );
    }
}
