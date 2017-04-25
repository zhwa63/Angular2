"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var ads_category_component_1 = require("./ads/ads-category.component");
var ads_detail_component_1 = require("./ads/ads-detail.component");
var common_service_1 = require("./common/common.service");
var ad_filter_pipe_1 = require("./ads/ad-filter.pipe");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            common_1.CommonModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot([
                { path: 'main', component: ads_category_component_1.AdsCategoryComponent },
                { path: 'detail', component: ads_detail_component_1.AdsDetailComponent },
                { path: "", redirectTo: 'main', pathMatch: 'full' }
            ])],
        declarations: [app_component_1.AppComponent,
            ads_category_component_1.AdsCategoryComponent,
            ads_detail_component_1.AdsDetailComponent,
            ad_filter_pipe_1.AdFilterPipe],
        providers: [common_service_1.CommonService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map