"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AdFilterPipe = (function () {
    //create a custom filter pipe
    function AdFilterPipe() {
    }
    AdFilterPipe.prototype.transform = function (value, keys) {
        var array = [];
        var emptyArray = [];
        var _loop_1 = function (key) {
            //if key is define, change to lower case, if not, set it to null
            key = key ? key.toLocaleLowerCase() : null;
            //if key is not null, temp equals to a new array containing the filtered objects. otherwise, temp equals to an empty array
            temp = key ? value.filter(function (ad) { return ad.category.toLocaleLowerCase().indexOf(key) !== -1; }) : emptyArray;
            //concatenate the new temp array to the old array
            array.push.apply(array, temp);
            //console.log("array="+array);
        };
        var temp;
        //for each filter keyword
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            _loop_1(key);
        }
        return array;
    };
    return AdFilterPipe;
}());
AdFilterPipe = __decorate([
    core_1.Pipe({
        name: 'adFilter'
    })
], AdFilterPipe);
exports.AdFilterPipe = AdFilterPipe;
//# sourceMappingURL=ad-filter.pipe.js.map