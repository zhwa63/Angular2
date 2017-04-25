"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_service_1 = require("../common/common.service");
//decorator: a function that adds metada to a class, its members, or its method arguments
var AdsCategoryComponent = (function () {
    function AdsCategoryComponent(arrayService, _router) {
        this.arrayService = arrayService;
        this._router = _router;
        this.pageTitle = 'Category';
    }
    AdsCategoryComponent.prototype.ngOnInit = function () {
        this.filterKeys = this.arrayService.filterKeys;
    };
    AdsCategoryComponent.prototype.onSubmit = function (value) {
        //console.log(value);
        //get all the checkboxs
        var checkboxs = document.getElementsByTagName('input');
        var i;
        for (i = 0; i < checkboxs.length; i++) {
            //if checkbox is checked, add the name value into filter keys
            if (checkboxs[i].checked == true) {
                this.filterKeys.push(checkboxs[i].name);
            }
        }
        //route to detail page
        this._router.navigate(['/detail']);
    };
    return AdsCategoryComponent;
}());
AdsCategoryComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'ads-category.component.html'
    }),
    __metadata("design:paramtypes", [common_service_1.CommonService, router_1.Router])
], AdsCategoryComponent);
exports.AdsCategoryComponent = AdsCategoryComponent;
//# sourceMappingURL=ads-category.component.js.map