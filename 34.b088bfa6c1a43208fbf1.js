(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{Vqqd:function(l,n,t){"use strict";t.r(n);var e=t("CcnG"),a=function(){function l(l){this.route=l}return Object.defineProperty(l.prototype,"isShell",{get:function(){return!(!this.details||!this.details.isShell)},enumerable:!0,configurable:!0}),l.prototype.ngOnInit=function(){var l=this;if(this.route&&this.route.data){var n=this.route.data;console.log("Route Resolve Observable => promiseObservable: ",n),n?n.subscribe(function(n){var t=n.data;console.log("Subscribe to promiseObservable => dataObservable: ",t),t?t.subscribe(function(n){var t=n;console.log("Subscribe to dataObservable (can emmit multiple values) => PageData ("+(t&&t.isShell?"SHELL":"REAL")+"): ",t),t&&(l.details=t)}):console.warn("No dataObservable coming from Route Resolver promiseObservable")}):console.warn("No promiseObservable coming from Route Resolver data")}else console.warn("No data coming from Route Resolver")},l}(),o=t("bjpm"),i=function(){function l(l){this.realStateService=l}return l.prototype.resolve=function(){var l=this.realStateService.getDetailsDataWithShell();return new Promise(function(n,t){n(l)})},l}(),u=i,s=function(){return function(){}}(),c=t("pMnS"),r=t("oBZk"),d=t("ZZ/e"),p=t("bUbe"),g=t("ARzk"),b=t("IoBW"),m=t("nGPP"),h=t("N0pS"),O=t("PCXt"),P=t("Ip0R"),C=t("ZYCi"),M=e.ob({encapsulation:0,styles:[["[_nghost-%COMP%]{--page-margin:var(--app-broad-margin);--page-background:var(--app-background-shade);--page-amenity-vertical-gutter:2px;--page-amenity-horizontal-gutter:4px;--page-color:#d9453a}.real-state-details-content[_ngcontent-%COMP%]{--background:var(--page-background)}.real-state-details-content[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px}.real-state-details-content[_ngcontent-%COMP%]   .image-row[_ngcontent-%COMP%]   .bookmark-icon[_ngcontent-%COMP%]{position:absolute;right:var(--page-margin);top:var(--page-margin);font-size:32px;color:var(--page-color)}.real-state-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;padding:var(--page-margin)}.real-state-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-price[_ngcontent-%COMP%]{margin:0 0 calc(var(--page-margin)/ 2);font-size:18px;font-weight:600;color:var(--ion-color-dark-tint);display:flex}.real-state-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-price[_ngcontent-%COMP%]   .price-icon[_ngcontent-%COMP%]{margin-right:5px}.real-state-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-address[_ngcontent-%COMP%]{margin:0;font-size:14px;color:var(--ion-color-medium-tint)}.real-state-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-address[_ngcontent-%COMP%] + .details-address[_ngcontent-%COMP%]{margin-top:5px}.real-state-details-content[_ngcontent-%COMP%]   .description-row[_ngcontent-%COMP%]   .details-description[_ngcontent-%COMP%]{margin:var(--page-margin) 0 0;font-size:14px;color:var(--ion-color-medium-shade)}.real-state-details-content[_ngcontent-%COMP%]   .detail-title[_ngcontent-%COMP%]{font-size:16px;font-weight:500;color:var(--ion-color-dark-tint);margin:0 0 var(--page-margin)}.real-state-details-content[_ngcontent-%COMP%]   .accommodations-wrapper[_ngcontent-%COMP%]{padding:var(--page-margin);padding-top:calc(var(--page-margin)/ 2)}.real-state-details-content[_ngcontent-%COMP%]   .accommodations-wrapper[_ngcontent-%COMP%]   .accommodation-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;align-items:center}.real-state-details-content[_ngcontent-%COMP%]   .accommodations-wrapper[_ngcontent-%COMP%]   .accommodation-row[_ngcontent-%COMP%] + .accommodation-row[_ngcontent-%COMP%]{padding-top:calc(var(--page-margin)/ 2)}.real-state-details-content[_ngcontent-%COMP%]   .accommodations-wrapper[_ngcontent-%COMP%]   .accommodation-row[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;flex-grow:0;padding-right:20px}.real-state-details-content[_ngcontent-%COMP%]   .accommodations-wrapper[_ngcontent-%COMP%]   .accommodation-row[_ngcontent-%COMP%]   .accommodation-icon[_ngcontent-%COMP%]{font-size:30px;color:var(--ion-color-medium-shade)}.real-state-details-content[_ngcontent-%COMP%]   .accommodations-wrapper[_ngcontent-%COMP%]   .accommodation-row[_ngcontent-%COMP%]   .accommodation-name[_ngcontent-%COMP%]{display:block;font-size:14px;color:var(--ion-color-medium-tint)}.real-state-details-content[_ngcontent-%COMP%]   .accommodations-wrapper[_ngcontent-%COMP%]   .accommodation-row[_ngcontent-%COMP%]   .accommodation-value[_ngcontent-%COMP%]{display:block;font-size:16px;color:var(--ion-color-medium-tint)}.real-state-details-content[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%]{padding:calc(var(--page-margin)/ 2) 0 var(--page-margin)}.real-state-details-content[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%]   .location-header[_ngcontent-%COMP%]{padding:0 var(--page-margin) 0;margin-bottom:calc(var(--page-margin)/ 2)}.real-state-details-content[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%]   .detail-title[_ngcontent-%COMP%]{margin-bottom:5px}.real-state-details-content[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%]   .location-address[_ngcontent-%COMP%]{display:block;font-size:14px;color:var(--ion-color-medium-tint)}.real-state-details-content[_ngcontent-%COMP%]   .amenities-wrapper[_ngcontent-%COMP%]{padding:calc(var(--page-margin)/ 2) var(--page-margin) var(--page-margin)}.real-state-details-content[_ngcontent-%COMP%]   .amenities-wrapper[_ngcontent-%COMP%]   .amenities-tags[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;justify-content:center;margin-top:calc(var(--page-amenity-vertical-gutter) * -1)}.real-state-details-content[_ngcontent-%COMP%]   .amenities-wrapper[_ngcontent-%COMP%]   .amenities-tags[_ngcontent-%COMP%]   .tag-wrapper[_ngcontent-%COMP%]{padding:var(--page-amenity-vertical-gutter) var(--page-amenity-horizontal-gutter) var(--page-amenity-vertical-gutter) 0;flex-grow:0;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content}.real-state-details-content[_ngcontent-%COMP%]   .amenities-wrapper[_ngcontent-%COMP%]   .amenities-tags[_ngcontent-%COMP%]   .tag-wrapper[_ngcontent-%COMP%]:last-child{padding-right:0}.real-state-details-content[_ngcontent-%COMP%]   .amenities-wrapper[_ngcontent-%COMP%]   .amenities-tags[_ngcontent-%COMP%]   .amenity-tag[_ngcontent-%COMP%]{display:block;border-radius:var(--app-narrow-radius);border:1px solid var(--ion-color-light-shade);padding:var(--page-amenity-vertical-gutter) var(--page-amenity-horizontal-gutter);font-size:14px;color:var(--ion-color-medium-tint)}.real-state-details-content[_ngcontent-%COMP%]   .safety-features-wrapper[_ngcontent-%COMP%]{padding:calc(var(--page-margin)/ 2) var(--page-margin) var(--page-margin)}.real-state-details-content[_ngcontent-%COMP%]   .safety-features-wrapper[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0}.real-state-details-content[_ngcontent-%COMP%]   .safety-features-wrapper[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]{font-size:14px;color:var(--ion-color-medium-tint)}.real-state-details-content[_ngcontent-%COMP%]   .safety-features-wrapper[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%] + .feature-item[_ngcontent-%COMP%]{margin-top:calc(var(--page-margin)/ 2)}.real-state-details-content[_ngcontent-%COMP%]   .availability-wrapper[_ngcontent-%COMP%]{padding:calc(var(--page-margin)/ 2) var(--page-margin) var(--page-margin)}.real-state-details-content[_ngcontent-%COMP%]   .availability-wrapper[_ngcontent-%COMP%]   .availability-row[_ngcontent-%COMP%]{--ion-grid-column-padding:0px;justify-content:space-between;align-items:center}.real-state-details-content[_ngcontent-%COMP%]   .availability-wrapper[_ngcontent-%COMP%]   .availability-row[_ngcontent-%COMP%]   .availability-description[_ngcontent-%COMP%], .real-state-details-content[_ngcontent-%COMP%]   .availability-wrapper[_ngcontent-%COMP%]   .availability-row[_ngcontent-%COMP%]   .availability-value[_ngcontent-%COMP%]{font-size:14px;color:var(--ion-color-medium-tint);display:block;flex:1;display:flex}.real-state-details-content[_ngcontent-%COMP%]   .availability-wrapper[_ngcontent-%COMP%]   .availability-row[_ngcontent-%COMP%]   .availability-description[_ngcontent-%COMP%]{color:var(--ion-color-medium-tint);justify-content:flex-start}.real-state-details-content[_ngcontent-%COMP%]   .availability-wrapper[_ngcontent-%COMP%]   .availability-row[_ngcontent-%COMP%]   .availability-value[_ngcontent-%COMP%]{color:var(--page-color);justify-content:flex-end}.real-state-details-content[_ngcontent-%COMP%]   .availability-wrapper[_ngcontent-%COMP%]   .book-now-btn[_ngcontent-%COMP%]{margin:var(--page-margin) 0 0}"],["[_nghost-%COMP%]{--shell-color:#d9453a;--shell-color-rgb:217,69,58}app-image-shell.details-picture[_ngcontent-%COMP%]{--image-shell-loading-background:rgba(var(--shell-color-rgb), .10);--image-shell-spinner-color:rgba(var(--shell-color-rgb), .25)}.details-price[_ngcontent-%COMP%]   app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb), .25);--text-shell-line-height:18px;max-width:100px;min-width:50px}.details-price[_ngcontent-%COMP%]   app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:inherit}.details-address[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb), .20);--text-shell-line-height:14px;max-width:60%}.details-address[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:inherit}.details-address[_ngcontent-%COMP%] + .details-address[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{max-width:80%}.details-address[_ngcontent-%COMP%] + .details-address[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:inherit}.details-description[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb), .10);--text-shell-line-height:14px}.accommodation-value[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb), .10);--text-shell-line-height:14px;min-width:30px}.accommodation-value[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{min-width:0}.location-address[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb), .10);--text-shell-line-height:14px;max-width:60%}.location-address[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:inherit}app-image-shell.location-image[_ngcontent-%COMP%]{--image-shell-loading-background:rgba(var(--shell-color-rgb), .10);--image-shell-spinner-color:rgba(var(--shell-color-rgb), .25)}.amenity-tag[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb), .15);--text-shell-line-height:14px;min-width:50px}.amenity-tag[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{min-width:0}.feature-item[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb), .10);--text-shell-line-height:14px;max-width:40%}.feature-item[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{max-width:inherit}.availability-description[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%], .availability-value[_ngcontent-%COMP%] > app-text-shell[_ngcontent-%COMP%]{--text-shell-line-color:rgba(var(--shell-color-rgb), .10);--text-shell-line-height:14px;min-width:80%}.availability-description[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%], .availability-value[_ngcontent-%COMP%] > app-text-shell.text-loaded[_ngcontent-%COMP%]{min-width:0}"]],data:{}});function _(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,4,"ion-col",[["class","tag-wrapper"]],null,null,null,r.V,r.g)),e.pb(1,49152,null,0,d.u,[e.h,e.k],null,null),(l()(),e.qb(2,0,null,0,2,"span",[["class","amenity-tag"]],null,null,null,null,null)),(l()(),e.qb(3,0,null,null,1,"app-text-shell",[],[[2,"text-loaded",null]],null,null,p.b,p.a)),e.pb(4,49152,null,0,g.a,[],{data:[0,"data"]},null)],function(l,n){l(n,4,0,n.context.$implicit.name)},function(l,n){l(n,3,0,e.Ab(n,4).textLoaded)})}function v(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,11,"ion-header",[],null,null,null,r.X,r.i)),e.pb(1,49152,null,0,d.C,[e.h,e.k],null,null),(l()(),e.qb(2,0,null,0,9,"ion-toolbar",[["color","primary"]],null,null,null,r.Db,r.O)),e.pb(3,49152,null,0,d.Cb,[e.h,e.k],{color:[0,"color"]},null),(l()(),e.qb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,r.T,r.e)),e.pb(5,49152,null,0,d.m,[e.h,e.k],null,null),(l()(),e.qb(6,0,null,0,2,"ion-back-button",[["defaultHref","app/categories/real-state"]],null,[[null,"click"]],function(l,n,t){var a=!0;return"click"===n&&(a=!1!==e.Ab(l,8).onClick(t)&&a),a},r.Q,r.b)),e.pb(7,49152,null,0,d.h,[e.h,e.k],{defaultHref:[0,"defaultHref"]},null),e.pb(8,16384,null,0,d.i,[[2,d.ib],d.Jb],{defaultHref:[0,"defaultHref"]},null),(l()(),e.qb(9,0,null,0,2,"ion-title",[],null,null,null,r.Bb,r.M)),e.pb(10,49152,null,0,d.Ab,[e.h,e.k],null,null),(l()(),e.Ib(-1,0,["Real State Details"])),(l()(),e.qb(12,0,null,null,141,"ion-content",[["class","real-state-details-content"]],null,null,null,r.W,r.h)),e.pb(13,49152,null,0,d.v,[e.h,e.k],null,null),(l()(),e.qb(14,0,null,0,10,"ion-row",[["class","image-row"]],null,null,null,r.nb,r.y)),e.pb(15,49152,null,0,d.jb,[e.h,e.k],null,null),(l()(),e.qb(16,0,null,0,8,"ion-col",[["size","12"]],null,null,null,r.V,r.g)),e.pb(17,49152,null,0,d.u,[e.h,e.k],{size:[0,"size"]},null),(l()(),e.qb(18,0,null,0,6,"app-image-shell",[["animation","spinner"],["class","details-picture"]],[[2,"img-loaded",null],[4,"backgroundImage",null],[1,"mode",0]],null,null,b.b,b.a)),e.pb(19,49152,null,0,m.a,[e.B],{mode:[0,"mode"],src:[1,"src"]},null),(l()(),e.qb(20,0,null,0,4,"app-aspect-ratio",[],[[4,"padding",null]],null,null,h.b,h.a)),e.pb(21,49152,null,0,O.a,[],{ratio:[0,"ratio"]},null),e.Db(22,{w:0,h:1}),(l()(),e.qb(23,0,null,0,1,"ion-icon",[["class","bookmark-icon"],["name","heart"]],null,null,null,r.Y,r.j)),e.pb(24,49152,null,0,d.D,[e.h,e.k],{name:[0,"name"]},null),(l()(),e.qb(25,0,null,0,19,"ion-row",[["class","description-row"]],null,null,null,r.nb,r.y)),e.pb(26,49152,null,0,d.jb,[e.h,e.k],null,null),(l()(),e.qb(27,0,null,0,12,"ion-col",[["size","12"]],null,null,null,r.V,r.g)),e.pb(28,49152,null,0,d.u,[e.h,e.k],{size:[0,"size"]},null),(l()(),e.qb(29,0,null,0,4,"h4",[["class","details-price"]],null,null,null,null,null)),(l()(),e.qb(30,0,null,null,1,"span",[["class","price-icon"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["$"])),(l()(),e.qb(32,0,null,null,1,"app-text-shell",[],[[2,"text-loaded",null]],null,null,p.b,p.a)),e.pb(33,49152,null,0,g.a,[],{data:[0,"data"]},null),(l()(),e.qb(34,0,null,0,2,"p",[["class","details-address"]],null,null,null,null,null)),(l()(),e.qb(35,0,null,null,1,"app-text-shell",[["animation","bouncing"]],[[2,"text-loaded",null]],null,null,p.b,p.a)),e.pb(36,49152,null,0,g.a,[],{data:[0,"data"]},null),(l()(),e.qb(37,0,null,0,2,"p",[["class","details-address"]],null,null,null,null,null)),(l()(),e.qb(38,0,null,null,1,"app-text-shell",[["animation","bouncing"]],[[2,"text-loaded",null]],null,null,p.b,p.a)),e.pb(39,49152,null,0,g.a,[],{data:[0,"data"]},null),(l()(),e.qb(40,0,null,0,4,"ion-col",[["size","12"]],null,null,null,r.V,r.g)),e.pb(41,49152,null,0,d.u,[e.h,e.k],{size:[0,"size"]},null),(l()(),e.qb(42,0,null,0,2,"p",[["class","details-description"]],null,null,null,null,null)),(l()(),e.qb(43,0,null,null,1,"app-text-shell",[["animation","bouncing"],["lines","5"]],[[2,"text-loaded",null]],null,null,p.b,p.a)),e.pb(44,49152,null,0,g.a,[],{data:[0,"data"]},null),(l()(),e.qb(45,0,null,0,62,"div",[["class","accommodations-wrapper"]],null,null,null,null,null)),(l()(),e.qb(46,0,null,null,1,"h3",[["class","detail-title"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["About the space"])),(l()(),e.qb(48,0,null,null,14,"ion-row",[["class","accommodation-row"]],null,null,null,r.nb,r.y)),e.pb(49,49152,null,0,d.jb,[e.h,e.k],null,null),(l()(),e.qb(50,0,null,0,3,"ion-col",[["class","icon-wrapper"]],null,null,null,r.V,r.g)),e.pb(51,49152,null,0,d.u,[e.h,e.k],null,null),(l()(),e.qb(52,0,null,0,1,"ion-icon",[["class","accommodation-icon"],["src","./assets/sample-icons/real-state/guests.svg"]],null,null,null,r.Y,r.j)),e.pb(53,49152,null,0,d.D,[e.h,e.k],{src:[0,"src"]},null),(l()(),e.qb(54,0,null,0,3,"ion-col",[["size","4"]],null,null,null,r.V,r.g)),e.pb(55,49152,null,0,d.u,[e.h,e.k],{size:[0,"size"]},null),(l()(),e.qb(56,0,null,0,1,"span",[["class","accommodation-name"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Guests"])),(l()(),e.qb(58,0,null,0,4,"ion-col",[["size","2"]],null,null,null,r.V,r.g)),e.pb(59,49152,null,0,d.u,[e.h,e.k],{size:[0,"size"]},null),(l()(),e.qb(60,0,null,0,2,"span",[["class","accommodation-value"]],null,null,null,null,null)),(l()(),e.qb(61,0,null,null,1,"app-text-shell",[],[[2,"text-loaded",null]],null,null,p.b,p.a)),e.pb(62,49152,null,0,g.a,[],{data:[0,"data"]},null),(l()(),e.qb(63,0,null,null,14,"ion-row",[["class","accommodation-row"]],null,null,null,r.nb,r.y)),e.pb(64,49152,null,0,d.jb,[e.h,e.k],null,null),(l()(),e.qb(65,0,null,0,3,"ion-col",[["class","icon-wrapper"]],null,null,null,r.V,r.g)),e.pb(66,49152,null,0,d.u,[e.h,e.k],null,null),(l()(),e.qb(67,0,null,0,1,"ion-icon",[["class","accommodation-icon"],["src","./assets/sample-icons/real-state/bedrooms.svg"]],null,null,null,r.Y,r.j)),e.pb(68,49152,null,0,d.D,[e.h,e.k],{src:[0,"src"]},null),(l()(),e.qb(69,0,null,0,3,"ion-col",[["size","4"]],null,null,null,r.V,r.g)),e.pb(70,49152,null,0,d.u,[e.h,e.k],{size:[0,"size"]},null),(l()(),e.qb(71,0,null,0,1,"span",[["class","accommodation-name"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Bedrooms"])),(l()(),e.qb(73,0,null,0,4,"ion-col",[["size","2"]],null,null,null,r.V,r.g)),e.pb(74,49152,null,0,d.u,[e.h,e.k],{size:[0,"size"]},null),(l()(),e.qb(75,0,null,0,2,"span",[["class","accommodation-value"]],null,null,null,null,null)),(l()(),e.qb(76,0,null,null,1,"app-text-shell",[],[[2,"text-loaded",null]],null,null,p.b,p.a)),e.pb(77,49152,null,0,g.a,[],{data:[0,"data"]},null),(l()(),e.qb(78,0,null,null,14,"ion-row",[["class","accommodation-row"]],null,null,null,r.nb,r.y)),e.pb(79,49152,null,0,d.jb,[e.h,e.k],null,null),(l()(),e.qb(80,0,null,0,3,"ion-col",[["class","icon-wrapper"]],null,null,null,r.V,r.g)),e.pb(81,49152,null,0,d.u,[e.h,e.k],null,null),(l()(),e.qb(82,0,null,0,1,"ion-icon",[["class","accommodation-icon"],["src","./assets/sample-icons/real-state/bathroom.svg"]],null,null,null,r.Y,r.j)),e.pb(83,49152,null,0,d.D,[e.h,e.k],{src:[0,"src"]},null),(l()(),e.qb(84,0,null,0,3,"ion-col",[["size","4"]],null,null,null,r.V,r.g)),e.pb(85,49152,null,0,d.u,[e.h,e.k],{size:[0,"size"]},null),(l()(),e.qb(86,0,null,0,1,"span",[["class","accommodation-name"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Bathrooms"])),(l()(),e.qb(88,0,null,0,4,"ion-col",[["size","2"]],null,null,null,r.V,r.g)),e.pb(89,49152,null,0,d.u,[e.h,e.k],{size:[0,"size"]},null),(l()(),e.qb(90,0,null,0,2,"span",[["class","accommodation-value"]],null,null,null,null,null)),(l()(),e.qb(91,0,null,null,1,"app-text-shell",[],[[2,"text-loaded",null]],null,null,p.b,p.a)),e.pb(92,49152,null,0,g.a,[],{data:[0,"data"]},null),(l()(),e.qb(93,0,null,null,14,"ion-row",[["class","accommodation-row"]],null,null,null,r.nb,r.y)),e.pb(94,49152,null,0,d.jb,[e.h,e.k],null,null),(l()(),e.qb(95,0,null,0,3,"ion-col",[["class","icon-wrapper"]],null,null,null,r.V,r.g)),e.pb(96,49152,null,0,d.u,[e.h,e.k],null,null),(l()(),e.qb(97,0,null,0,1,"ion-icon",[["class","accommodation-icon"],["src","./assets/sample-icons/real-state/patio.svg"]],null,null,null,r.Y,r.j)),e.pb(98,49152,null,0,d.D,[e.h,e.k],{src:[0,"src"]},null),(l()(),e.qb(99,0,null,0,3,"ion-col",[["size","4"]],null,null,null,r.V,r.g)),e.pb(100,49152,null,0,d.u,[e.h,e.k],{size:[0,"size"]},null),(l()(),e.qb(101,0,null,0,1,"span",[["class","accommodation-name"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Patio"])),(l()(),e.qb(103,0,null,0,4,"ion-col",[["size","2"]],null,null,null,r.V,r.g)),e.pb(104,49152,null,0,d.u,[e.h,e.k],{size:[0,"size"]},null),(l()(),e.qb(105,0,null,0,2,"span",[["class","accommodation-value"]],null,null,null,null,null)),(l()(),e.qb(106,0,null,null,1,"app-text-shell",[],[[2,"text-loaded",null]],null,null,p.b,p.a)),e.pb(107,49152,null,0,g.a,[],{data:[0,"data"]},null),(l()(),e.qb(108,0,null,0,11,"div",[["class","location-wrapper"]],null,null,null,null,null)),(l()(),e.qb(109,0,null,null,5,"div",[["class","location-header"]],null,null,null,null,null)),(l()(),e.qb(110,0,null,null,1,"h3",[["class","detail-title"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Location"])),(l()(),e.qb(112,0,null,null,2,"span",[["class","location-address"]],null,null,null,null,null)),(l()(),e.qb(113,0,null,null,1,"app-text-shell",[],[[2,"text-loaded",null]],null,null,p.b,p.a)),e.pb(114,49152,null,0,g.a,[],{data:[0,"data"]},null),(l()(),e.qb(115,0,null,null,4,"app-aspect-ratio",[],[[4,"padding",null]],null,null,h.b,h.a)),e.pb(116,49152,null,0,O.a,[],{ratio:[0,"ratio"]},null),e.Db(117,{w:0,h:1}),(l()(),e.qb(118,0,null,0,1,"app-image-shell",[["animation","spinner"],["class","location-image"]],[[2,"img-loaded",null],[4,"backgroundImage",null],[1,"mode",0]],null,null,b.b,b.a)),e.pb(119,49152,null,0,m.a,[e.B],{src:[0,"src"],alt:[1,"alt"]},null),(l()(),e.qb(120,0,null,0,6,"div",[["class","amenities-wrapper"]],null,null,null,null,null)),(l()(),e.qb(121,0,null,null,1,"h3",[["class","detail-title"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Amenities"])),(l()(),e.qb(123,0,null,null,3,"ion-row",[["class","amenities-tags"]],null,null,null,r.nb,r.y)),e.pb(124,49152,null,0,d.jb,[e.h,e.k],null,null),(l()(),e.hb(16777216,null,0,1,null,_)),e.pb(126,278528,null,0,P.l,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.qb(127,0,null,0,12,"div",[["class","safety-features-wrapper"]],null,null,null,null,null)),(l()(),e.qb(128,0,null,null,1,"h3",[["class","detail-title"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Safety Features"])),(l()(),e.qb(130,0,null,null,9,"ul",[["class","features-list"]],null,null,null,null,null)),(l()(),e.qb(131,0,null,null,2,"li",[["class","feature-item"]],null,null,null,null,null)),(l()(),e.qb(132,0,null,null,1,"app-text-shell",[],[[2,"text-loaded",null]],null,null,p.b,p.a)),e.pb(133,49152,null,0,g.a,[],{data:[0,"data"]},null),(l()(),e.qb(134,0,null,null,2,"li",[["class","feature-item"]],null,null,null,null,null)),(l()(),e.qb(135,0,null,null,1,"app-text-shell",[],[[2,"text-loaded",null]],null,null,p.b,p.a)),e.pb(136,49152,null,0,g.a,[],{data:[0,"data"]},null),(l()(),e.qb(137,0,null,null,2,"li",[["class","feature-item"]],null,null,null,null,null)),(l()(),e.qb(138,0,null,null,1,"app-text-shell",[],[[2,"text-loaded",null]],null,null,p.b,p.a)),e.pb(139,49152,null,0,g.a,[],{data:[0,"data"]},null),(l()(),e.qb(140,0,null,0,13,"div",[["class","availability-wrapper"]],null,null,null,null,null)),(l()(),e.qb(141,0,null,null,1,"h3",[["class","detail-title"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Availability"])),(l()(),e.qb(143,0,null,null,7,"ion-row",[["class","availability-row"]],null,null,null,r.nb,r.y)),e.pb(144,49152,null,0,d.jb,[e.h,e.k],null,null),(l()(),e.qb(145,0,null,0,2,"span",[["class","availability-description"]],null,null,null,null,null)),(l()(),e.qb(146,0,null,null,1,"app-text-shell",[],[[2,"text-loaded",null]],null,null,p.b,p.a)),e.pb(147,49152,null,0,g.a,[],{data:[0,"data"]},null),(l()(),e.qb(148,0,null,0,2,"span",[["class","availability-value"]],null,null,null,null,null)),(l()(),e.qb(149,0,null,null,1,"app-text-shell",[],[[2,"text-loaded",null]],null,null,p.b,p.a)),e.pb(150,49152,null,0,g.a,[],{data:[0,"data"]},null),(l()(),e.qb(151,0,null,null,2,"ion-button",[["class","book-now-btn"],["color","dark"],["expand","block"],["fill","outline"]],null,null,null,r.S,r.d)),e.pb(152,49152,null,0,d.l,[e.h,e.k],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"]},null),(l()(),e.Ib(-1,0,["BOOK NOW"]))],function(l,n){var t=n.component;l(n,3,0,"primary"),l(n,7,0,"app/categories/real-state"),l(n,8,0,"app/categories/real-state"),l(n,17,0,"12"),l(n,19,0,"cover",t.details.picture);var e=l(n,22,0,64,40);l(n,21,0,e),l(n,24,0,"heart"),l(n,28,0,"12"),l(n,33,0,t.details.price),l(n,36,0,null==t.details.location?null:t.details.location.address),l(n,39,0,null==t.details.location?null:t.details.location.city),l(n,41,0,"12"),l(n,44,0,t.details.description),l(n,53,0,"./assets/sample-icons/real-state/guests.svg"),l(n,55,0,"4"),l(n,59,0,"2"),l(n,62,0,null==t.details.accommodations?null:t.details.accommodations.guests),l(n,68,0,"./assets/sample-icons/real-state/bedrooms.svg"),l(n,70,0,"4"),l(n,74,0,"2"),l(n,77,0,null==t.details.accommodations?null:t.details.accommodations.bedrooms),l(n,83,0,"./assets/sample-icons/real-state/bathroom.svg"),l(n,85,0,"4"),l(n,89,0,"2"),l(n,92,0,null==t.details.accommodations?null:t.details.accommodations.bathrooms),l(n,98,0,"./assets/sample-icons/real-state/patio.svg"),l(n,100,0,"4"),l(n,104,0,"2"),l(n,107,0,null==t.details.accommodations?null:t.details.accommodations.patios),l(n,114,0,null==t.details.location?null:t.details.location.address);var a=l(n,117,0,64,30);l(n,116,0,a),l(n,119,0,null==t.details.location?null:t.details.location.mapImage,"location map"),l(n,126,0,t.details.amenities),l(n,133,0,"Smoke Detector"),l(n,136,0,"Carbon Monoxide Detector"),l(n,139,0,"Security Alarm System"),l(n,147,0,"1 month minimum"),l(n,150,0,"Available from June"),l(n,152,0,"dark","block","outline")},function(l,n){l(n,18,0,e.Ab(n,19).imageLoaded,e.Ab(n,19).backgroundImage,e.Ab(n,19).mode),l(n,20,0,e.Ab(n,21).ratioPadding),l(n,32,0,e.Ab(n,33).textLoaded),l(n,35,0,e.Ab(n,36).textLoaded),l(n,38,0,e.Ab(n,39).textLoaded),l(n,43,0,e.Ab(n,44).textLoaded),l(n,61,0,e.Ab(n,62).textLoaded),l(n,76,0,e.Ab(n,77).textLoaded),l(n,91,0,e.Ab(n,92).textLoaded),l(n,106,0,e.Ab(n,107).textLoaded),l(n,113,0,e.Ab(n,114).textLoaded),l(n,115,0,e.Ab(n,116).ratioPadding),l(n,118,0,e.Ab(n,119).imageLoaded,e.Ab(n,119).backgroundImage,e.Ab(n,119).mode),l(n,132,0,e.Ab(n,133).textLoaded),l(n,135,0,e.Ab(n,136).textLoaded),l(n,138,0,e.Ab(n,139).textLoaded),l(n,146,0,e.Ab(n,147).textLoaded),l(n,149,0,e.Ab(n,150).textLoaded)})}function x(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,1,"app-real-state-details",[],[[2,"is-shell",null]],null,null,v,M)),e.pb(1,114688,null,0,a,[C.a],null,null)],function(l,n){l(n,1,0)},function(l,n){l(n,0,0,e.Ab(n,1).isShell)})}var w=e.mb("app-real-state-details",a,x,{},{},[]),y=t("gIcY"),f=t("t/Na"),q=t("j1ZV");t.d(n,"RealStateDetailsPageModuleNgFactory",function(){return k});var k=e.nb(s,[],function(l){return e.xb([e.yb(512,e.j,e.bb,[[8,[c.a,w]],[3,e.j],e.x]),e.yb(4608,P.o,P.n,[e.u,[2,P.x]]),e.yb(4608,y.t,y.t,[]),e.yb(4608,d.b,d.b,[e.z,e.g]),e.yb(4608,d.Ib,d.Ib,[d.b,e.j,e.q,P.e]),e.yb(4608,d.Lb,d.Lb,[d.b,e.j,e.q,P.e]),e.yb(5120,e.d,function(l,n){return[d.Rb(l,n)]},[d.Qb,P.e]),e.yb(4608,f.h,f.n,[P.e,e.B,f.l]),e.yb(4608,f.o,f.o,[f.h,f.m]),e.yb(5120,f.a,function(l){return[l]},[f.o]),e.yb(4608,f.k,f.k,[]),e.yb(6144,f.i,null,[f.k]),e.yb(4608,f.g,f.g,[f.i]),e.yb(6144,f.b,null,[f.g]),e.yb(4608,f.f,f.j,[f.b,e.q]),e.yb(4608,f.c,f.c,[f.f]),e.yb(4608,o.a,o.a,[f.c]),e.yb(4608,i,i,[o.a]),e.yb(1073742336,P.c,P.c,[]),e.yb(1073742336,y.r,y.r,[]),e.yb(1073742336,y.h,y.h,[]),e.yb(1073742336,d.Eb,d.Eb,[]),e.yb(1073742336,C.p,C.p,[[2,C.v],[2,C.m]]),e.yb(1073742336,q.a,q.a,[]),e.yb(1073742336,f.e,f.e,[]),e.yb(1073742336,f.d,f.d,[]),e.yb(1073742336,s,s,[]),e.yb(256,d.Qb,void 0,[]),e.yb(256,f.l,"XSRF-TOKEN",[]),e.yb(256,f.m,"X-XSRF-TOKEN",[]),e.yb(1024,C.k,function(){return[[{path:"",component:a,resolve:{data:u}}]]},[])])})}}]);