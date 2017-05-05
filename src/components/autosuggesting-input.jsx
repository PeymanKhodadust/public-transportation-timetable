"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var MobxReact = require("mobx-react");
var React = require("react");
var AutoComplete_1 = require("material-ui/AutoComplete");
var ajax_1 = require("../utils/ajax");
/* ---------- */
/*    Data    */
/* ---------- */
var url = "https://transport.opendata.ch/v1/locations?query=";
function getMatchingLocations(value) {
    var escapedValue = escapeRegexCharacters(value.trim());
    return ajax_1.ajax.get(url + escapedValue);
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
    return (<span>{suggestion.name}</span>);
}
var AutosuggestingInput = (function (_super) {
    __extends(AutosuggestingInput, _super);
    function AutosuggestingInput(props) {
        var _this = _super.call(this, props) || this;
        _this.onChange = function (newValue) {
            _this.setState({ value: newValue });
            _this.props.connection[_this.props.index] = newValue;
            getMatchingLocations(newValue)
                .then(JSON.parse)
                .then(function (r) {
                _this.setState({
                    isLoading: false,
                    suggestions: r.stations
                });
            }, undefined)
                .catch(function () { console.log("get request not successfull!!!!!!!!!!!"); });
        };
        _this.dataSourceConfig = {
            text: 'name',
            value: 'name'
        };
        _this.state = { value: _this.props.connection[_this.props.index], suggestions: [], isLoading: false };
        return _this;
    }
    AutosuggestingInput.prototype.render = function () {
        var lable = (this.props.index ? "Arrival" : "Departure") + " station";
        return (<div>
                <AutoComplete_1.default floatingLabelText={lable} dataSource={this.state.suggestions} onUpdateInput={this.onChange} dataSourceConfig={this.dataSourceConfig} animated={true} filter={AutoComplete_1.default.caseInsensitiveFilter} maxSearchResults={6}/>
            </div>);
    };
    return AutosuggestingInput;
}(React.Component));
AutosuggestingInput = __decorate([
    MobxReact.observer
], AutosuggestingInput);
exports.AutosuggestingInput = AutosuggestingInput;
