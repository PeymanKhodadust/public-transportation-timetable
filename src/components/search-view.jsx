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
var React = require("react");
var MobxReact = require("mobx-react");
var RaisedButton_1 = require("material-ui/RaisedButton");
var injectTapEventPlugin = require("react-tap-event-plugin");
var Toggle_1 = require("material-ui/Toggle");
var DatePicker_1 = require("material-ui/DatePicker");
var TimePicker_1 = require("material-ui/TimePicker");
var search_input_1 = require("./search-input");
var ajax_1 = require("../utils/ajax");
var date_time_1 = require("../utils/date-time");
var connectionUrl = "http://transport.opendata.ch/v1/connections?from=";
injectTapEventPlugin();
var SearchView = (function (_super) {
    __extends(SearchView, _super);
    function SearchView(props) {
        var _this = _super.call(this, props) || this;
        _this.handleSearchClick = function () {
            var from = _this.props.store.connectionInput[0];
            var to = _this.props.store.connectionInput[1];
            var date = date_time_1.DateTime.getFormattedDateString(_this.props.store.dateTime);
            var time = date_time_1.DateTime.getFormattedTimeString(_this.props.store.dateTime);
            var arr = _this.props.store.isArrival;
            //const sb = this.props.store.stationBoard;
            var url = connectionUrl + from + "&to=" + to + "&date=" + date + "&time=" + time + (arr ? "&isArrivalTime=1" : "");
            ajax_1.ajax.get(url)
                .then(JSON.parse)
                .then(function (res) {
                _this.props.store.connections = res.connections;
                if (_this.props.store.connections.length > 0)
                    _this.props.store.appState = 2 /* result */;
                console.log("StateChange: ---" + _this.props.store.appState);
            }, function () {
                console.log("get request for connectons failed");
            });
        };
        _this.handlesearchModeChange = function (event) {
            console.log("radio button .......:" + event.target.value);
            _this.props.store.isStationBoard = event.target.value == "stationBoard" ? true : false;
        };
        _this.handleToggleTimeMode = function (e, i) {
            _this.props.store.isArrival = !_this.props.store.isArrival;
        };
        _this.handleToggleSearchMode = function (e, i) {
            _this.props.store.isStationBoard = !_this.props.store.isStationBoard;
        };
        _this.handleChangeDate = function (n, d) {
            _this.props.store.dateTime.setDate(d.getDate());
            _this.props.store.dateTime.setFullYear(d.getFullYear());
            _this.props.store.dateTime.setMonth(d.getMonth());
        };
        _this.handleChangeTime = function (n, d) {
            _this.props.store.dateTime.setTime(d.getTime());
        };
        return _this;
    }
    SearchView.prototype.render = function () {
        var connection = this.props.store.connectionInput;
        var sb = this.props.store.isStationBoard;
        var toggleTimeModeLabel = this.props.store.isArrival ? "Departure" : "Arrival";
        var toggleSearchModeLabel = this.props.store.isStationBoard ? "Connection" : "Station Board";
        return (<div>
                <Toggle_1.default label={toggleSearchModeLabel} onToggle={this.handleToggleSearchMode} toggled={this.props.store.isStationBoard}/>
                <search_input_1.SearchInput connection={connection} stationBoard={this.props.store.isStationBoard}/>
                <Toggle_1.default label={toggleTimeModeLabel} onToggle={this.handleToggleTimeMode} toggled={this.props.store.isArrival}/>
                <DatePicker_1.default onChange={this.handleChangeDate} autoOk={true} floatingLabelText="Date"/>
                <TimePicker_1.default floatingLabelText="Time" autoOk={true} onChange={this.handleChangeTime}/>
                <RaisedButton_1.default label="SEARCH" primary={true} onTouchTap={this.handleSearchClick} className="button"/>
            </div>);
    };
    return SearchView;
}(React.Component));
SearchView = __decorate([
    MobxReact.observer
], SearchView);
exports.SearchView = SearchView;
