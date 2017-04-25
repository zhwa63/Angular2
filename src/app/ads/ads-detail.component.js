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
var AdsDetailComponent = (function () {
    function AdsDetailComponent(_router, arrayService) {
        this._router = _router;
        this.arrayService = arrayService;
        this.pageTitle = 'Detailed Page';
        this.imageWidth = 120;
        this.imageMargin = 2;
        this.ads = [{
                "id": 1,
                "name": "Dresses",
                "description": "Short, sleeveless dress in thick jersey. Low-cut neckline at back, seam at waist, and flared skirt.",
                "imageUrl": "http://lp.hm.com/hmprod?set=key[source],value[/environment/2017/8OZ_0089_013R.jpg]&set=key[rotate],value[0]&set=key[width],value[3812]&set=key[height],value[4457]&set=key[x],value[0]&set=key[y],value[-1]&set=key[type],value[FASHION_FRONT]&set=key[hmver],value[0]&call=url[file:/product/full]",
                "category": "fashion",
                "url": "http://www.hm.com/us/product/60901?article=60901-G"
            },
            {
                "id": 2,
                "name": "Choker",
                "description": "A rubber choker featuring a dual strap construction with a heart charm detail and lobster clasp closure.",
                "imageUrl": "http://www.forever21.com/images/default_750/00101799-02.jpg",
                "category": "fashion",
                "url": "http://www.forever21.com/Product/Product.aspx?BR=f21&Category=acc_jewelry-necklace-chokers&ProductID=1000101799&VariantID="
            },
            {
                "id": 3,
                "name": "Lamborghini",
                "description": "Aventador",
                "imageUrl": "http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_720/images/live/p0/15/xm/p015xm4c.jpg",
                "category": "car",
                "url": "https://www.lamborghini.com/en-en/models/aventador"
            },
            {
                "id": 4,
                "name": "Lexus",
                "description": "IS200t",
                "imageUrl": "http://www.lexus.com/cm-img/visualizer/2017/is/turbo/exterior/18-mesh/obsidian/large-1.jpg",
                "category": "car",
                "url": "http://www.lexus.com/models/IS"
            },
            {
                "id": 5,
                "name": "Hamsters",
                "description": "Sunfire hamster.",
                "imageUrl": "http://norskhamsterklubb.no/wp-content/uploads/2016/05/14536680_10154437990790359_1199482715_o-copy-1024x682.jpg",
                "category": "animal",
                "url": "https://www.petco.com/shop/en/petcostore/category/small-animal"
            },
            {
                "id": 6,
                "name": "Dogs",
                "description": "Husky.",
                "imageUrl": "http://buzzsharer.com/wp-content/uploads/2015/04/puppy-husky-dog-family.jpg",
                "category": "animal",
                "url": "http://buzzsharer.com/2015/04/here-are-12-essential-facts-husky-lovers-must-always-remember-the-last-one-made-me-cry/"
            },
            {
                "id": 7,
                "name": "CS Go",
                "description": "Counter-Strike: Global Offensive is a multiplayer first-person shooter video game developed by Hidden Path Entertainment and Valve Corporation.",
                "imageUrl": "http://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg?t=1490209724",
                "category": "game",
                "url": "http://store.steampowered.com/app/730/"
            },
            {
                "id": 8,
                "name": "Tomb Raider",
                "description": "Tomb Raider, styled as Lara Croft: Tomb Raider between 2001 and 2007, is a media franchise that originated with an action-adventure video game series created by British gaming company Core Design. ",
                "imageUrl": "https://i.ytimg.com/vi/O95FXt86DD4/maxresdefault.jpg",
                "category": "game",
                "url": "https://www.tombraider.com/en-us"
            },
            {
                "id": 9,
                "name": "Iphone",
                "description": "Iphone 7. This is 7.",
                "imageUrl": "https://d3nevzfk7ii3be.cloudfront.net/igi/MqGZWCWTTRYMR5a5.large",
                "category": "phone",
                "url": "https://www.apple.com/iphone-7/?afid=p238%7Cs6HPNxDZt-dc_mtid_20925d2q39172_pcrid_191097763355&cid=wwa-us-kwgo-iphone-slid--"
            },
            {
                "id": 10,
                "name": "Samsung S8",
                "description": "Galaxy S8.",
                "imageUrl": "https://2.bp.blogspot.com/-_O5z3WCCWIw/WN9i-oyZpoI/AAAAAAAAQic/EJlgL02WO14niZq5kguC_-mq8Sk2zS9wgCLcB/s640/samsung%2Bgalaxy%2Bs8%2Bjarir%2Bprice.jpg",
                "category": "phone",
                "url": "http://www.samsung.com/us/explore/galaxy-s8/?cid=ppc-Generic"
            },
            {
                "id": 11,
                "name": "Sushi",
                "description": "Nigiri.",
                "imageUrl": "https://oyatsubox.com/wp-content/uploads/2016/04/Sushi-header.jpg",
                "category": "food",
                "url": "https://www.yelp.com/search?cflt=sushi&find_loc=Alameda%2C+CA"
            },
            {
                "id": 12,
                "name": "Pasta",
                "description": "chicken fettuccine alfredo.",
                "imageUrl": "http://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/9/15/1/FNK_Chicken-Fettucine-Alfredo_s4x3.jpg.rend.hgtvcom.616.462.jpeg",
                "category": "food",
                "url": "http://www.foodnetwork.com/recipes/food-network-kitchen/chicken-fettuccine-alfredo"
            },
            {
                "id": 13,
                "name": "Switzerland",
                "description": "Four languages, dozens of cheeses and hundreds of mountains.",
                "imageUrl": "https://www.roughguides.com/wp-content/uploads/2013/07/CFBBTX-1680x1050.jpg",
                "category": "travel",
                "url": "https://www.roughguides.com/destinations/europe/switzerland/"
            },
            {
                "id": 14,
                "name": "Japan",
                "description": "Fuji Mountain with cherry blossom.",
                "imageUrl": "http://japan-magazine.jnto.go.jp/jnto2wm/wp-content/uploads/1608_special_TOTO_main.jpg",
                "category": "travel",
                "url": "http://japan-magazine.jnto.go.jp/en/special_toto03.html"
            },
            {
                "id": 15,
                "name": "Mac Book Pro",
                "description": "13 inch. Touch Bar and Touch ID",
                "imageUrl": "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/m/bp/mbp15touch/silver/mbp15touch-silver-select-201610?wid=452&hei=420&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1478283596610",
                "category": "computer",
                "url": "https://www.apple.com/macbook-pro/"
            },
            {
                "id": 16,
                "name": "Lenovo Thinkpad",
                "description": "ThinkPad Yoga 460. 40 inch.",
                "imageUrl": "http://www3.lenovo.com/medias/YOGA-460-LIST-IMAGE.png?context=bWFzdGVyfHJvb3R8MjUwNjR8aW1hZ2UvcG5nfGhmNS9oYTcvOTI1MjQ2MzczODkxMC5wbmd8ZTA2MWRlMGI1YzlkZGVhNjk1NzQ2MzJkMzlhNWFmYTNjMzA5Mzg3ODFmNTcyMGFhZTEyYWY5NGMzYTVkMDljOA",
                "category": "computer",
                "url": "http://www3.lenovo.com/us/en/laptops/thinkpad/thinkpad-yoga/Yoga-460/p/22TP2TSS460"
            },
            {
                "id": 17,
                "name": "Eye Liner",
                "description": "Versatile tapered felt tip eyeliner for powerful day-to-drama definition",
                "imageUrl": "http://s7d3.scene7.com/is/image/BareEscentuals/77191-0",
                "category": "beauty",
                "url": "http://www.bareminerals.com/lash-domination-ink-liner/US77191.html"
            },
            {
                "id": 18,
                "name": "Mascara",
                "description": "Diorshow Pump‘N’Volume Mascara.",
                "imageUrl": "http://www.sephora.com/productimages/sku/s1921337-main-Lhero.jpg",
                "category": "beauty",
                "url": "http://www.sephora.com/diorshow-pumpnvolume-mascara-P418204?skuId=1921337&icid2=products%20grid:p418204"
            },
            {
                "id": 19,
                "name": "DevOps",
                "description": "DevOps is the combination of cultural philosophies, practices, and tools that increases an organization’s ability to deliver applications and services at high velocity.",
                "imageUrl": "https://www.suse.com/assets/img/devops-process.png",
                "category": "newIt",
                "url": "https://aws.amazon.com/devops/what-is-devops/"
            },
            {
                "id": 20,
                "name": "SaaS",
                "description": "Software as a service (SaaS; pronounced /sæs/) is a software licensing and delivery model in which software is licensed on a subscription basis and is centrally hosted. .",
                "imageUrl": "https://www.agriya.com/themes/agriya/assets/images/common/saas-system.png",
                "category": "newIt",
                "url": "https://www.salesforce.com/saas/"
            }
        ];
    }
    AdsDetailComponent.prototype.ngOnInit = function () {
        this.filterKeys = this.arrayService.filterKeys;
        //console.log("filter keys are:"+this.filterKeys);
    };
    AdsDetailComponent.prototype.go2Link = function (url) {
        //direct to external link
        window.location.href = url;
    };
    AdsDetailComponent.prototype.back = function () {
        //clear the filter array when goes back to the main page
        this.arrayService.filterKeys = [];
        //route back to main page
        this._router.navigate([""]);
    };
    return AdsDetailComponent;
}());
AdsDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'ads-detail.component.html',
        styleUrls: ['ads-detail.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, common_service_1.CommonService])
], AdsDetailComponent);
exports.AdsDetailComponent = AdsDetailComponent;
//# sourceMappingURL=ads-detail.component.js.map