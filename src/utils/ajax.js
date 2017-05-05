"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ajax = (function () {
    function ajax() {
    }
    ajax.get = function (url) {
        return new Promise(function (resolve, reject) {
            var req = new XMLHttpRequest();
            req.open("GET", url);
            req.onload = function () {
                if (req.status === 200) {
                    resolve(req.response);
                }
                else {
                    reject(new Error(req.statusText));
                }
            };
            req.onerror = function () {
                reject(new Error("Network error"));
            };
            req.send();
        });
    };
    return ajax;
}());
exports.ajax = ajax;
