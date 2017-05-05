"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DateTime = (function () {
    function DateTime() {
    }
    DateTime.getFormattedTimeString = function (date) {
        var res;
        res = date.getHours() < 10 ? "0" + date.getHours() : date.getHours().toString();
        res += ":";
        res += date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        return res;
    };
    DateTime.getFormattedDateString = function (date) {
        var res;
        res = date.getFullYear().toString();
        res += "-" + (date.getMonth() < 9 ? "0" + (date.getMonth() + 1).toString() : date.getMonth() + 1);
        res += "-" + (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
        return res;
    };
    return DateTime;
}());
exports.DateTime = DateTime;
