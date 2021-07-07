function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,l){for(var e=0;e<l.length;e++){var t=l[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,l,e){return l&&_defineProperties(n.prototype,l),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{JybH:function(n,l,e){"use strict";e.r(l);var t=e("8Y7J"),u=e("yTNM"),i=e("ZZ/e"),o=function(){function n(l,e,t,u){_classCallCheck(this,n),this.router=l,this.alertCtrl=e,this.api=t,this.events=u}return _createClass(n,[{key:"ionViewWillEnter",value:function(){var n=this;this.api.pageName="InboxPage",this.api.back?this.api.back=!0:this.api.showLoad(),this.getDialogs(),this.events.subscribe("messages:new",(function(l){n.getDialogs()}))}},{key:"ionViewWillLeave",value:function(){this.events.unsubscribe("messages:new")}},{key:"getDialogs",value:function(){var n=this;this.api.http.get(this.api.apiUrl+"/inbox",this.api.setHeaders(!0)).subscribe((function(l){console.log(l),n.users=l.dialogs,n.texts=l.texts,n.api.hideLoad()}),(function(l){return n.api.hideLoad()}))}},{key:"toDialogPage",value:function(n){console.log(n),this.api.data.user=n,this.router.navigate(["/dialog"])}},{key:"deleteDialog",value:function(n,l){var e=this;console.log(n),this.alertCtrl.create({header:"\u05de\u05d7\u05d9\u05e7\u05ea \u05e9\u05d9\u05d7\u05d4 \u05e2\u05dd "+n.username,message:" ?\u05dc\u05de\u05d7\u05d5\u05e7 \u05d0\u05ea \u05d4\u05e9\u05d9\u05d7\u05d4",buttons:[{text:"\u05db\u05df",handler:function(){e.api.storage.get("user_data").then((function(t){if(t){var u={user_id:t.user_id,contact_id:n.id};e.api.showLoad(),e.api.http.post(e.api.apiUrl+"/deletes/inboxes.json",u,e.api.header).subscribe((function(n){n.deleted?(e.users.splice(l,1),e.ionViewWillEnter(),console.log(e.users),e.api.hideLoad()):e.api.hideLoad()}),(function(n){return e.api.hideLoad()}))}}))}},{text:"\u05dc\u05d0",role:"cancel"}]}).then((function(n){return n.present()}))}}]),n}(),a=function n(){_classCallCheck(this,n)},s=e("pMnS"),r=e("SVse"),c=e("oBZk"),b=e("iInd"),p=t.Ab({encapsulation:0,styles:[['@charset "UTF-8";.delete-dialog-icon[_ngcontent-%COMP%]{float:left;margin-top:-7px;font-size:22px;position:absolute;bottom:5px;right:7px}.date[_ngcontent-%COMP%]{font-size:12px;margin:8px 0}.name[_ngcontent-%COMP%]{font-size:16px}.container[_ngcontent-%COMP%]{height:calc(100% - 60px);overflow:auto}.ion-cart[_ngcontent-%COMP%]{border-radius:0;background-color:#fff;height:135px;--background:#fff}.counter[_ngcontent-%COMP%]{top:0;rihgt:0}.paying[_ngcontent-%COMP%]{left:68px;width:32px;height:26px}ion-card-content[_ngcontent-%COMP%]{padding:10px}ion-content[_ngcontent-%COMP%]{dislay:flex}.message-counter[_ngcontent-%COMP%]{display:block;position:absolute;min-height:24px;min-width:24px;text-align:center;background:#d50312;border-radius:50%;-webkit-border-radius:50%;font-size:13px;color:#fefdfd;top:1px;left:0;border:2px solid #fefdfd;box-shadow:4px 4px 5px 0 rgba(0,0,0,.75);box-sizing:border-box}']],data:{}});function d(n){return t.Wb(0,[(n()(),t.Cb(0,0,null,null,1,"div",[["class","no_results"]],null,null,null,null,null)),(n()(),t.Ub(1,null,["",""]))],null,(function(n,l){var e=l.component;n(l,1,0,null==e.texts?null:e.texts.no_results)}))}function g(n){return t.Wb(0,[(n()(),t.Cb(0,0,null,null,3,"div",[["class","usr_img"]],null,null,null,null,null)),t.Rb(512,null,r.w,r.x,[t.p,t.y,t.K]),t.Bb(2,278528,null,0,r.m,[r.w],{ngStyle:[0,"ngStyle"]},null),t.Qb(3,{"background-image":0})],(function(n,l){var e=n(l,3,0,"url("+l.component.api.url+l.parent.context.$implicit.photo+")");n(l,2,0,e)}),null)}function f(n){return t.Wb(0,[(n()(),t.Cb(0,0,null,null,1,"div",[["class","counter message-counter"]],null,null,null,null,null)),(n()(),t.Ub(1,null,["",""]))],null,(function(n,l){n(l,1,0,l.parent.context.$implicit.newMessagesNumber)}))}function h(n){return t.Wb(0,[(n()(),t.Cb(0,0,null,null,19,"ion-card",[["class","ion-cart"]],null,null,null,c.P,c.d)),t.Bb(1,49152,null,0,i.o,[t.j,t.p,t.F],null,null),(n()(),t.Cb(2,0,null,0,15,"ion-card-content",[],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.toDialogPage(n.context.$implicit)&&t),t}),c.N,c.e)),t.Bb(3,49152,null,0,i.p,[t.j,t.p,t.F],null,null),(n()(),t.rb(16777216,null,0,1,null,g)),t.Bb(5,16384,null,0,r.j,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(n()(),t.Cb(6,0,null,0,5,"ion-card-title",[],null,null,null,c.O,c.f)),t.Bb(7,49152,null,0,i.s,[t.j,t.p,t.F],null,null),(n()(),t.Cb(8,0,null,0,1,"div",[["class","name"]],null,null,null,null,null)),(n()(),t.Ub(9,null,["",""])),(n()(),t.Cb(10,0,null,0,1,"div",[["class","date"]],null,null,null,null,null)),(n()(),t.Ub(11,null,["",""])),(n()(),t.Cb(12,0,null,0,5,"div",[["class","message"]],null,null,null,null,null)),(n()(),t.Cb(13,0,null,null,2,"p",[],null,null,null,null,null)),(n()(),t.Ub(14,null,[" ","... "])),t.Pb(0,r.r,[]),(n()(),t.rb(16777216,null,null,1,null,f)),t.Bb(17,16384,null,0,r.j,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(n()(),t.Cb(18,0,null,0,1,"ion-icon",[["class","delete-dialog-icon"],["name","trash"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.deleteDialog(n.context.$implicit,n.context.index)&&t),t}),c.X,c.n)),t.Bb(19,49152,null,0,i.E,[t.j,t.p,t.F],{name:[0,"name"]},null)],(function(n,l){n(l,5,0,l.context.$implicit.photo),n(l,17,0,l.context.$implicit.newMessagesNumber>0),n(l,19,0,"trash")}),(function(n,l){n(l,9,0,l.context.$implicit.username),n(l,11,0,l.context.$implicit.date),n(l,14,0,t.Vb(l,14,0,t.Ob(l,15).transform(l.context.$implicit.message,0,45)))}))}function x(n){return t.Wb(0,[(n()(),t.Cb(0,0,null,null,6,"ion-header",[],null,null,null,c.W,c.m)),t.Bb(1,49152,null,0,i.D,[t.j,t.p,t.F],null,null),(n()(),t.Cb(2,0,null,0,4,"ion-toolbar",[],null,null,null,c.tb,c.J)),t.Bb(3,49152,null,0,i.Eb,[t.j,t.p,t.F],null,null),(n()(),t.Cb(4,0,null,0,2,"ion-title",[],null,null,null,c.rb,c.H)),t.Bb(5,49152,null,0,i.Cb,[t.j,t.p,t.F],null,null),(n()(),t.Ub(-1,0,["inbox"])),(n()(),t.Cb(7,0,null,null,7,"ion-content",[["padding",""]],null,null,null,c.S,c.i)),t.Bb(8,49152,null,0,i.w,[t.j,t.p,t.F],null,null),t.Bb(9,16384,null,0,i.f,[t.p],null,null),(n()(),t.rb(16777216,null,0,1,null,d)),t.Bb(11,16384,null,0,r.j,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(n()(),t.Cb(12,0,null,0,2,"div",[["class","container"]],null,null,null,null,null)),(n()(),t.rb(16777216,null,null,1,null,h)),t.Bb(14,278528,null,0,r.i,[t.W,t.S,t.x],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var e=l.component;n(l,11,0,!(null!=e.users&&e.users.length)),n(l,14,0,e.users)}),null)}var m=t.yb("page-inbox",o,(function(n){return t.Wb(0,[(n()(),t.Cb(0,0,null,null,1,"page-inbox",[],null,null,null,x,p)),t.Bb(1,49152,null,0,o,[b.n,i.b,u.a,i.g],null,null)],null,null)}),{},{},[]),C=e("s7LF");e.d(l,"InboxPageModuleNgFactory",(function(){return v}));var v=t.zb(a,[],(function(n){return t.Lb([t.Mb(512,t.m,t.jb,[[8,[s.a,m]],[3,t.m],t.D]),t.Mb(4608,r.l,r.k,[t.z,[2,r.z]]),t.Mb(4608,C.o,C.o,[]),t.Mb(4608,i.c,i.c,[t.F,t.g]),t.Mb(4608,i.Kb,i.Kb,[i.c,t.m,t.w]),t.Mb(4608,i.Nb,i.Nb,[i.c,t.m,t.w]),t.Mb(1073742336,r.b,r.b,[]),t.Mb(1073742336,C.n,C.n,[]),t.Mb(1073742336,C.d,C.d,[]),t.Mb(1073742336,i.Gb,i.Gb,[]),t.Mb(1073742336,b.p,b.p,[[2,b.u],[2,b.n]]),t.Mb(1073742336,a,a,[]),t.Mb(1024,b.l,(function(){return[[{path:"",component:o}]]}),[])])}))}}]);