(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{xHuF:function(n,l,e){"use strict";e.r(l);var t=e("8Y7J"),i=e("ZZ/e"),s=e("yTNM");class u{constructor(n,l,e){this.events=n,this.router=l,this.api=e,this.index=0,this.renderUsers=[],this.renderedUserCount=0,this.realRenderedUserCount=0}ngOnInit(){this.api.showLoad();let n=null;this.api.data.user&&(n="object"==typeof this.api.data.user?this.api.data.user.id:this.api.data.user);let l=JSON.stringify({action:"arena",user_id:n});this.api.http.post(this.api.apiUrl+"/users/results",l,this.api.setHeaders(!0)).subscribe(n=>{this.users=n.users,this.texts=n.texts,this.getUsers(),n.arenaStatus&&(this.api.toastCreate(n.arenaStatus),this.router.navigate(["/change-photos"]))}),this.api.hideLoad()}slideChanged(n){this.slides.getActiveIndex().then(n=>this.index=n),this.index>this.realRenderedUserCount-5&&this.realRenderedUserCount<this.users.length&&this.getUsers()}getUsers(){let n=this.renderedUserCount;const l=this.users.length-this.renderedUserCount>10?10:this.users.length-this.renderedUserCount;this.renderedUserCount+=l,this.realRenderedUserCount+=l;for(let e=n;e<this.renderedUserCount;e++)this.renderUsers.push(this.users[e])}setNotifications(){this.events.subscribe("user:created",n=>{this.notifications=n})}goToSlide(n){const l=this.renderUsers[this.index];if("like"==n){const n=JSON.stringify({toUser:l.id});this.api.http.post(this.api.apiUrl+"/likes/"+l.id,n,this.api.setHeaders(!0)).subscribe(n=>{}),this.renderUsers.splice(this.index,1),this.realRenderedUserCount--,this.slideChanged()}else this.api.http.get(this.api.apiUrl+"/dislikes/"+l.id,this.api.header).subscribe(n=>console.log(n)),this.slides.isEnd().then(n=>{console.log("index befor slice: "+this.index),this.renderUsers.splice(this.index,1),console.log("index after slice: "+this.index),console.log(this.realRenderedUserCount),this.realRenderedUserCount--,this.slideChanged(),n&&this.slides.slideTo(0,300)})}toDialog(){this.api.data.user=this.renderUsers[this.index],this.router.navigate(["/dialog"])}toProfile(){console.log(this.renderUsers[this.index]);let n={queryParams:{data:JSON.stringify({user:this.renderUsers[this.index]})}};this.router.navigate(["/profile"],n)}swipe(n){"right"==n?this.slides.slideNext():this.slides.slidePrev()}toNotifications(){this.router.navigate(["/notification"])}ionViewDidLoad(){console.log("ionViewDidLoad ArenaPage")}ionViewDidEnter(){this.slides.update()}ionViewWillEnter(){this.api.pageName="ArenaPage"}}class r{}var o=e("pMnS"),a=e("oBZk"),c=e("SVse"),d=e("iInd"),p=t.Ab({encapsulation:0,styles:[[".buttons[_ngcontent-%COMP%]{margin:auto;text-align:center;position:absolute;bottom:84px;z-index:999}.buttons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:15%;display:inline;margin:0 15px;background-color:rgba(255,255,255,.6);border-radius:50%}.pop_title[_ngcontent-%COMP%]{background:#000;color:#fff;top:10px;right:40px;height:40px;padding:13px}.ion-card[_ngcontent-%COMP%]{width:100%;margin:0;height:100%}.ion-slides[_ngcontent-%COMP%]{height:calc(100% - 22px);width:unset}.ion-slide[_ngcontent-%COMP%]{width:100%;height:calc(100% - 44px);direction:rtl;margin-top:0}.avatar[_ngcontent-%COMP%]{height:100%}ion-content[_ngcontent-%COMP%]{display:-webkit-box;display:flex}.left-tap[_ngcontent-%COMP%], .right-tap[_ngcontent-%COMP%]{height:calc(100% - 40px);width:70px;position:absolute;top:40px}.left-tap[_ngcontent-%COMP%]{left:0}.right-tap[_ngcontent-%COMP%]{right:0}.ios[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{bottom:65px}"]],data:{}});function h(n){return t.Wb(0,[(n()(),t.Cb(0,0,null,null,1,"div",[["class","no_results"]],null,null,null,null,null)),(n()(),t.Ub(1,null,["",""]))],null,(function(n,l){var e=l.component;n(l,1,0,null==e.texts?null:e.texts.no_results)}))}function b(n){return t.Wb(0,[(n()(),t.Cb(0,0,null,null,12,"ion-card",[["class","ion-card"]],null,null,null,a.P,a.d)),t.Bb(1,49152,null,0,i.o,[t.j,t.p,t.F],null,null),(n()(),t.Cb(2,0,null,0,0,"div",[["class","clr"]],null,null,null,null,null)),(n()(),t.Cb(3,0,null,0,3,"div",[["class","pop_title"]],null,null,null,null,null)),(n()(),t.Cb(4,0,null,null,1,"span",[],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.toProfile()&&t),t}),null,null)),(n()(),t.Ub(5,null,["",","])),(n()(),t.Ub(6,null,[" "," ",""])),(n()(),t.Cb(7,0,null,0,0,"div",[["class","left-tap"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.swipe("left")&&t),t}),null,null)),(n()(),t.Cb(8,0,null,0,3,"div",[["class","avatar"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.toProfile()&&t),t}),null,null)),t.Rb(512,null,c.w,c.x,[t.p,t.y,t.K]),t.Bb(10,278528,null,0,c.m,[c.w],{ngStyle:[0,"ngStyle"]},null),t.Qb(11,{"background-image":0}),(n()(),t.Cb(12,0,null,0,0,"div",[["class","right-tap"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.swipe("right")&&t),t}),null,null))],(function(n,l){var e=n(l,11,0,"url("+(null==l.parent.context.$implicit?null:l.parent.context.$implicit.image)+")");n(l,10,0,e)}),(function(n,l){n(l,5,0,null==l.parent.context.$implicit?null:l.parent.context.$implicit.username),n(l,6,0,null==l.parent.context.$implicit?null:l.parent.context.$implicit.age,null==l.parent.context.$implicit?null:l.parent.context.$implicit.area)}))}function g(n){return t.Wb(0,[(n()(),t.Cb(0,0,null,null,3,"ion-slide",[["class","ion-slide"]],null,null,null,a.nb,a.D)),t.Bb(1,49152,null,0,i.sb,[t.j,t.p,t.F],null,null),(n()(),t.rb(16777216,null,0,1,null,b)),t.Bb(3,16384,null,0,c.j,[t.W,t.S],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,3,0,null==l.context.$implicit?null:l.context.$implicit.image)}),null)}function f(n){return t.Wb(0,[(n()(),t.Cb(0,0,null,null,3,"div",[["class","buttons"]],null,null,null,null,null)),(n()(),t.Cb(1,0,null,null,0,"img",[["class","like-red"],["src","../../assets/img/icons/redthumb.png"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.goToSlide("dislike")&&t),t}),null,null)),(n()(),t.Cb(2,0,null,null,0,"img",[["id","send-msg"],["src","../../assets/img/icons/pmsg.png"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.toDialog()&&t),t}),null,null)),(n()(),t.Cb(3,0,null,null,0,"img",[["id","heart-green"],["src","../../assets/img/icons/thumbgreen.png"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.goToSlide("like")&&t),t}),null,null))],null,null)}function C(n){return t.Wb(0,[t.Sb(671088640,1,{slides:0}),(n()(),t.Cb(1,0,null,null,6,"ion-header",[],null,null,null,a.W,a.m)),t.Bb(2,49152,null,0,i.D,[t.j,t.p,t.F],null,null),(n()(),t.Cb(3,0,null,0,4,"ion-toolbar",[],null,null,null,a.tb,a.J)),t.Bb(4,49152,null,0,i.Eb,[t.j,t.p,t.F],null,null),(n()(),t.Cb(5,0,null,0,2,"ion-title",[],null,null,null,a.rb,a.H)),t.Bb(6,49152,null,0,i.Cb,[t.j,t.p,t.F],null,null),(n()(),t.Ub(-1,0,["arena"])),(n()(),t.Cb(8,0,null,null,9,"ion-content",[],null,null,null,a.S,a.i)),t.Bb(9,49152,null,0,i.w,[t.j,t.p,t.F],null,null),(n()(),t.rb(16777216,null,0,1,null,h)),t.Bb(11,16384,null,0,c.j,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(n()(),t.Cb(12,0,null,0,3,"ion-slides",[["class","ion-slides"],["dir","ltr"],["freeMode","true"],["loop","true"],["ng-if","true"],["options","{loop: true, freeMods: true}"]],null,[[null,"ionSlideDidChange"]],(function(n,l,e){var t=!0;return"ionSlideDidChange"===l&&(t=!1!==n.component.slideChanged(e)&&t),t}),a.ob,a.E)),t.Bb(13,49152,[[1,4],["slider",4]],0,i.tb,[t.j,t.p,t.F],{options:[0,"options"]},null),(n()(),t.rb(16777216,null,0,1,null,g)),t.Bb(15,278528,null,0,c.i,[t.W,t.S,t.x],{ngForOf:[0,"ngForOf"]},null),(n()(),t.rb(16777216,null,0,1,null,f)),t.Bb(17,16384,null,0,c.j,[t.W,t.S],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,11,0,0==(null==e.renderUsers?null:e.renderUsers.length)),n(l,13,0,"{loop: true, freeMods: true}"),n(l,15,0,e.renderUsers),n(l,17,0,(null==e.renderUsers?null:e.renderUsers.length)>0)}),null)}function m(n){return t.Wb(0,[(n()(),t.Cb(0,0,null,null,1,"page-arena",[],null,null,null,C,p)),t.Bb(1,114688,null,0,u,[i.g,d.n,s.a],null,null)],(function(n,l){n(l,1,0)}),null)}var x=t.yb("page-arena",u,m,{},{},[]),U=e("s7LF");e.d(l,"ArenaPageModuleNgFactory",(function(){return M}));var M=t.zb(r,[],(function(n){return t.Lb([t.Mb(512,t.m,t.jb,[[8,[o.a,x]],[3,t.m],t.D]),t.Mb(4608,c.l,c.k,[t.z,[2,c.z]]),t.Mb(4608,U.o,U.o,[]),t.Mb(4608,i.c,i.c,[t.F,t.g]),t.Mb(4608,i.Kb,i.Kb,[i.c,t.m,t.w]),t.Mb(4608,i.Nb,i.Nb,[i.c,t.m,t.w]),t.Mb(1073742336,c.b,c.b,[]),t.Mb(1073742336,U.n,U.n,[]),t.Mb(1073742336,U.d,U.d,[]),t.Mb(1073742336,i.Gb,i.Gb,[]),t.Mb(1073742336,d.p,d.p,[[2,d.u],[2,d.n]]),t.Mb(1073742336,r,r,[]),t.Mb(1024,d.l,(function(){return[[{path:"",component:u}]]}),[])])}))}}]);