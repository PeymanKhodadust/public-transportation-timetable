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
var autosuggesting_input_1 = require("./autosuggesting-input");
var SearchInput = (function (_super) {
    __extends(SearchInput, _super);
    function SearchInput(props) {
        return _super.call(this, props) || this;
    }
    SearchInput.prototype.render = function () {
        var connection = this.props.connection;
        var sb = this.props.stationBoard;
        return (<div>
                <autosuggesting_input_1.AutosuggestingInput connection={connection} index={0} isStationBoard={sb}/>
                {sb ? [] :
            <autosuggesting_input_1.AutosuggestingInput connection={connection} index={1} isStationBoard={sb}/>}
            </div>);
    };
    return SearchInput;
}(React.Component));
SearchInput = __decorate([
    MobxReact.observer
], SearchInput);
exports.SearchInput = SearchInput;
