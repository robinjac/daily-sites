(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{112:function(module,__webpack_exports__,__webpack_require__){"use strict";var svelte_internal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),svelte__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(818),__webpack_require__(94));function create_fragment(ctx){let button,t,button_class_value,mounted,dispose;return{c(){button=Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.r)("button"),t=Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.L)(ctx[1]),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.g)(button,"type","button"),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.g)(button,"class",button_class_value=["storybook-button","storybook-button--"+ctx[0],ctx[2]].join(" ")),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.g)(button,"style",ctx[3])},m(target,anchor){Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.A)(target,button,anchor),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.e)(button,t),mounted||(dispose=Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.C)(button,"click",ctx[4]),mounted=!0)},p(ctx,[dirty]){2&dirty&&Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.J)(t,ctx[1]),1&dirty&&button_class_value!==(button_class_value=["storybook-button","storybook-button--"+ctx[0],ctx[2]].join(" "))&&Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.g)(button,"class",button_class_value)},i:svelte_internal__WEBPACK_IMPORTED_MODULE_0__.E,o:svelte_internal__WEBPACK_IMPORTED_MODULE_0__.E,d(detaching){detaching&&Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.q)(button),mounted=!1,dispose()}}}function instance($$self,$$props,$$invalidate){let{primary:primary=!1}=$$props,{backgroundColor:backgroundColor}=$$props,{size:size="medium"}=$$props,{label:label=""}=$$props,mode=primary?"storybook-button--primary":"storybook-button--secondary",style=backgroundColor?"background-color: "+backgroundColor:"";const dispatch=Object(svelte__WEBPACK_IMPORTED_MODULE_2__.createEventDispatcher)();return $$self.$$set=$$props=>{"primary"in $$props&&$$invalidate(5,primary=$$props.primary),"backgroundColor"in $$props&&$$invalidate(6,backgroundColor=$$props.backgroundColor),"size"in $$props&&$$invalidate(0,size=$$props.size),"label"in $$props&&$$invalidate(1,label=$$props.label)},[size,label,mode,style,function onClick(event){dispatch("click",event)},primary,backgroundColor]}class Button extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.a{constructor(options){super(),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.z)(this,options,instance,create_fragment,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.H,{primary:5,backgroundColor:6,size:0,label:1})}}__webpack_exports__.a=Button,Button.__docgen={version:3,name:"Button.svelte",data:[{keywords:[],visibility:"public",description:"Is this the principal call to action on the page?",name:"primary",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[],visibility:"public",description:"What background color to use",name:"backgroundColor",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{keywords:[],visibility:"public",description:"How large should the button be?",name:"size",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"medium"},{keywords:[],visibility:"public",description:"Button contents",name:"label",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{visibility:"public",description:null,keywords:[],name:"click"}],slots:[],refs:[]}},157:function(module,__webpack_exports__,__webpack_require__){"use strict";var svelte_internal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_Button_svelte__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(824),__webpack_require__(112)),svelte__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(94);function create_if_block_1(ctx){let button,current;return button=new _Button_svelte__WEBPACK_IMPORTED_MODULE_2__.a({props:{size:"small",label:"Log out"}}),button.$on("click",ctx[2]),{c(){Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.n)(button.$$.fragment)},m(target,anchor){Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.D)(button,target,anchor),current=!0},p:svelte_internal__WEBPACK_IMPORTED_MODULE_0__.E,i(local){current||(Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.N)(button.$$.fragment,local),current=!0)},o(local){Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.O)(button.$$.fragment,local),current=!1},d(detaching){Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.p)(button,detaching)}}}function create_if_block(ctx){let button0,t,button1,current;return button0=new _Button_svelte__WEBPACK_IMPORTED_MODULE_2__.a({props:{size:"small",label:"Log in"}}),button0.$on("click",ctx[1]),button1=new _Button_svelte__WEBPACK_IMPORTED_MODULE_2__.a({props:{primary:!0,size:"small",label:"Sign up"}}),button1.$on("click",ctx[3]),{c(){Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.n)(button0.$$.fragment),t=Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.K)(),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.n)(button1.$$.fragment)},m(target,anchor){Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.D)(button0,target,anchor),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.A)(target,t,anchor),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.D)(button1,target,anchor),current=!0},p:svelte_internal__WEBPACK_IMPORTED_MODULE_0__.E,i(local){current||(Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.N)(button0.$$.fragment,local),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.N)(button1.$$.fragment,local),current=!0)},o(local){Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.O)(button0.$$.fragment,local),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.O)(button1.$$.fragment,local),current=!1},d(detaching){Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.p)(button0,detaching),detaching&&Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.q)(t),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.p)(button1,detaching)}}}function create_fragment(ctx){let header,div2,div0,t2,div1,t3,current,if_block0=ctx[0]&&create_if_block_1(ctx),if_block1=!ctx[0]&&create_if_block(ctx);return{c(){header=Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.r)("header"),div2=Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.r)("div"),div0=Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.r)("div"),div0.innerHTML='<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillrule="evenodd"><path d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z" fill="#FFF"></path><path d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z" fill="#555AB9"></path><path d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z" fill="#91BAF8"></path></g></svg> \n      <h1>Acme</h1>',t2=Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.K)(),div1=Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.r)("div"),if_block0&&if_block0.c(),t3=Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.K)(),if_block1&&if_block1.c(),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.g)(div2,"class","wrapper")},m(target,anchor){Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.A)(target,header,anchor),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.e)(header,div2),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.e)(div2,div0),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.e)(div2,t2),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.e)(div2,div1),if_block0&&if_block0.m(div1,null),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.e)(div1,t3),if_block1&&if_block1.m(div1,null),current=!0},p(ctx,[dirty]){ctx[0]?if_block0?(if_block0.p(ctx,dirty),1&dirty&&Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.N)(if_block0,1)):(if_block0=create_if_block_1(ctx),if_block0.c(),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.N)(if_block0,1),if_block0.m(div1,t3)):if_block0&&(Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.x)(),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.O)(if_block0,1,1,()=>{if_block0=null}),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.j)()),ctx[0]?if_block1&&(Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.x)(),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.O)(if_block1,1,1,()=>{if_block1=null}),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.j)()):if_block1?(if_block1.p(ctx,dirty),1&dirty&&Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.N)(if_block1,1)):(if_block1=create_if_block(ctx),if_block1.c(),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.N)(if_block1,1),if_block1.m(div1,null))},i(local){current||(Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.N)(if_block0),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.N)(if_block1),current=!0)},o(local){Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.O)(if_block0),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.O)(if_block1),current=!1},d(detaching){detaching&&Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.q)(header),if_block0&&if_block0.d(),if_block1&&if_block1.d()}}}function instance($$self,$$props,$$invalidate){let{user:user=null}=$$props;const dispatch=Object(svelte__WEBPACK_IMPORTED_MODULE_3__.createEventDispatcher)();return $$self.$$set=$$props=>{"user"in $$props&&$$invalidate(0,user=$$props.user)},[user,function onLogin(event){dispatch("login",event)},function onLogout(event){dispatch("logout",event)},function onCreateAccount(event){dispatch("createAccount",event)}]}class Header extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.a{constructor(options){super(),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.z)(this,options,instance,create_fragment,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.H,{user:0})}}__webpack_exports__.a=Header,Header.__docgen={version:3,name:"Header.svelte",data:[{visibility:"public",description:null,keywords:[],name:"user",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{visibility:"public",description:null,keywords:[],name:"login"},{visibility:"public",description:null,keywords:[],name:"logout"},{visibility:"public",description:null,keywords:[],name:"createAccount"}],slots:[],refs:[]}},461:function(module,exports,__webpack_require__){__webpack_require__(462),__webpack_require__(618),__webpack_require__(619),__webpack_require__(828),__webpack_require__(829),__webpack_require__(832),__webpack_require__(833),__webpack_require__(831),__webpack_require__(830),__webpack_require__(834),__webpack_require__(835),module.exports=__webpack_require__(810)},529:function(module,exports){},619:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(335)},810:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(335).configure)([__webpack_require__(811),__webpack_require__(812)],module,!1)}).call(this,__webpack_require__(184)(module))},811:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=811},812:function(module,exports,__webpack_require__){var map={"./stories/Button.stories.svelte":813,"./stories/Header.stories.svelte":823,"./stories/Page.stories.svelte":836};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=812},813:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary})),__webpack_require__.d(__webpack_exports__,"Secondary",(function(){return Secondary})),__webpack_require__.d(__webpack_exports__,"Large",(function(){return Large})),__webpack_require__.d(__webpack_exports__,"Small",(function(){return Small}));var svelte_internal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_storybook_addon_svelte_csf__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(42),_Button_svelte__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(112);function create_default_slot(ctx){let button,current;const button_spread_levels=[ctx[0]];let button_props={};for(let i=0;i<button_spread_levels.length;i+=1)button_props=Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.f)(button_props,button_spread_levels[i]);return button=new _Button_svelte__WEBPACK_IMPORTED_MODULE_2__.a({props:button_props}),button.$on("click",(function(){Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.B)(ctx[0].onClick)&&ctx[0].onClick.apply(this,arguments)})),{c(){Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.n)(button.$$.fragment)},m(target,anchor){Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.D)(button,target,anchor),current=!0},p(new_ctx,dirty){ctx=new_ctx;const button_changes=1&dirty?Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.w)(button_spread_levels,[Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.v)(ctx[0])]):{};button.$set(button_changes)},i(local){current||(Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.N)(button.$$.fragment,local),current=!0)},o(local){Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.O)(button.$$.fragment,local),current=!1},d(detaching){Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.p)(button,detaching)}}}function create_fragment(ctx){let meta,t0,template,t1,story0,t2,story1,t3,story2,t4,story3,current;return meta=new _storybook_addon_svelte_csf__WEBPACK_IMPORTED_MODULE_1__.Meta({props:{title:"Example/Button",component:_Button_svelte__WEBPACK_IMPORTED_MODULE_2__.a,argTypes:{label:{control:"text"},primary:{control:"boolean"},backgroundColor:{control:"color"},size:{control:{type:"select",options:["small","medium","large"]}},onClick:{action:"onClick"}}}}),template=new _storybook_addon_svelte_csf__WEBPACK_IMPORTED_MODULE_1__.Template({props:{$$slots:{default:[create_default_slot,({args:args})=>({0:args}),({args:args})=>args?1:0]},$$scope:{ctx:ctx}}}),story0=new _storybook_addon_svelte_csf__WEBPACK_IMPORTED_MODULE_1__.Story({props:{name:"Primary",args:{primary:!0,label:"Button"}}}),story1=new _storybook_addon_svelte_csf__WEBPACK_IMPORTED_MODULE_1__.Story({props:{name:"Secondary",args:{label:"Button"}}}),story2=new _storybook_addon_svelte_csf__WEBPACK_IMPORTED_MODULE_1__.Story({props:{name:"Large",args:{size:"large",label:"Button"}}}),story3=new _storybook_addon_svelte_csf__WEBPACK_IMPORTED_MODULE_1__.Story({props:{name:"Small",args:{size:"small",label:"Button"}}}),{c(){Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.n)(meta.$$.fragment),t0=Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.K)(),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.n)(template.$$.fragment),t1=Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.K)(),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.n)(story0.$$.fragment),t2=Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.K)(),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.n)(story1.$$.fragment),t3=Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.K)(),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.n)(story2.$$.fragment),t4=Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.K)(),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.n)(story3.$$.fragment)},m(target,anchor){Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.D)(meta,target,anchor),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.A)(target,t0,anchor),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.D)(template,target,anchor),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.A)(target,t1,anchor),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.D)(story0,target,anchor),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.A)(target,t2,anchor),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.D)(story1,target,anchor),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.A)(target,t3,anchor),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.D)(story2,target,anchor),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.A)(target,t4,anchor),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.D)(story3,target,anchor),current=!0},p(ctx,[dirty]){const template_changes={};3&dirty&&(template_changes.$$scope={dirty:dirty,ctx:ctx}),template.$set(template_changes)},i(local){current||(Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.N)(meta.$$.fragment,local),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.N)(template.$$.fragment,local),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.N)(story0.$$.fragment,local),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.N)(story1.$$.fragment,local),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.N)(story2.$$.fragment,local),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.N)(story3.$$.fragment,local),current=!0)},o(local){Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.O)(meta.$$.fragment,local),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.O)(template.$$.fragment,local),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.O)(story0.$$.fragment,local),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.O)(story1.$$.fragment,local),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.O)(story2.$$.fragment,local),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.O)(story3.$$.fragment,local),current=!1},d(detaching){Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.p)(meta,detaching),detaching&&Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.q)(t0),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.p)(template,detaching),detaching&&Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.q)(t1),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.p)(story0,detaching),detaching&&Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.q)(t2),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.p)(story1,detaching),detaching&&Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.q)(t3),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.p)(story2,detaching),detaching&&Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.q)(t4),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.p)(story3,detaching)}}}class Button_stories extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.a{constructor(options){super(),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.z)(this,options,null,create_fragment,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.H,{})}}Button_stories.__docgen={version:3,name:"Button.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const{default:parser}=__webpack_require__(283),__storiesMetaData=parser(Button_stories,{"tpl:default":{name:"default",template:!0,source:"<Button {...args} on:click={args.onClick} />",hasArgs:!0},Primary:{name:"Primary",template:!1,hasArgs:!1},Secondary:{name:"Secondary",template:!1,hasArgs:!1},Large:{name:"Large",template:!1,hasArgs:!1},Small:{name:"Small",template:!1,hasArgs:!1}});__webpack_exports__.default=__storiesMetaData.meta;const Primary=__storiesMetaData.stories.Primary,Secondary=__storiesMetaData.stories.Secondary,Large=__storiesMetaData.stories.Large,Small=__storiesMetaData.stories.Small},818:function(module,exports,__webpack_require__){var api=__webpack_require__(281),content=__webpack_require__(819);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},819:function(module,exports,__webpack_require__){(exports=__webpack_require__(282)(!1)).push([module.i,".storybook-button {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n}\n.storybook-button--primary {\n  color: white;\n  background-color: #1ea7fd;\n}\n.storybook-button--secondary {\n  color: #333;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n.storybook-button--small {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n.storybook-button--medium {\n  font-size: 14px;\n  padding: 11px 20px;\n}\n.storybook-button--large {\n  font-size: 16px;\n  padding: 12px 24px;\n}\n",""]),module.exports=exports},823:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"LoggedIn",(function(){return LoggedIn})),__webpack_require__.d(__webpack_exports__,"LoggedOut",(function(){return LoggedOut}));var svelte_internal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_storybook_addon_svelte_csf__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(42),_Header_svelte__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(157);function create_default_slot(ctx){let header,current;const header_spread_levels=[ctx[0]];let header_props={};for(let i=0;i<header_spread_levels.length;i+=1)header_props=Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.f)(header_props,header_spread_levels[i]);return header=new _Header_svelte__WEBPACK_IMPORTED_MODULE_2__.a({props:header_props}),header.$on("login",(function(){Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.B)(ctx[0].onLogin)&&ctx[0].onLogin.apply(this,arguments)})),header.$on("logout",(function(){Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.B)(ctx[0].onLogout)&&ctx[0].onLogout.apply(this,arguments)})),header.$on("createAccount",(function(){Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.B)(ctx[0].onCreateAccount)&&ctx[0].onCreateAccount.apply(this,arguments)})),{c(){Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.n)(header.$$.fragment)},m(target,anchor){Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.D)(header,target,anchor),current=!0},p(new_ctx,dirty){ctx=new_ctx;const header_changes=1&dirty?Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.w)(header_spread_levels,[Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.v)(ctx[0])]):{};header.$set(header_changes)},i(local){current||(Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.N)(header.$$.fragment,local),current=!0)},o(local){Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.O)(header.$$.fragment,local),current=!1},d(detaching){Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.p)(header,detaching)}}}function create_fragment(ctx){let meta,t0,template,t1,story0,t2,story1,current;return meta=new _storybook_addon_svelte_csf__WEBPACK_IMPORTED_MODULE_1__.Meta({props:{title:"Example/Header",component:_Header_svelte__WEBPACK_IMPORTED_MODULE_2__.a,argTypes:{onLogin:{action:"onLogin"},onLogout:{action:"onLogout"},onCreateAccount:{action:"onCreateAccount"}}}}),template=new _storybook_addon_svelte_csf__WEBPACK_IMPORTED_MODULE_1__.Template({props:{$$slots:{default:[create_default_slot,({args:args})=>({0:args}),({args:args})=>args?1:0]},$$scope:{ctx:ctx}}}),story0=new _storybook_addon_svelte_csf__WEBPACK_IMPORTED_MODULE_1__.Story({props:{name:"LoggedIn",args:{user:{}}}}),story1=new _storybook_addon_svelte_csf__WEBPACK_IMPORTED_MODULE_1__.Story({props:{name:"LoggedOut",args:{}}}),{c(){Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.n)(meta.$$.fragment),t0=Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.K)(),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.n)(template.$$.fragment),t1=Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.K)(),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.n)(story0.$$.fragment),t2=Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.K)(),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.n)(story1.$$.fragment)},m(target,anchor){Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.D)(meta,target,anchor),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.A)(target,t0,anchor),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.D)(template,target,anchor),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.A)(target,t1,anchor),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.D)(story0,target,anchor),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.A)(target,t2,anchor),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.D)(story1,target,anchor),current=!0},p(ctx,[dirty]){const template_changes={};3&dirty&&(template_changes.$$scope={dirty:dirty,ctx:ctx}),template.$set(template_changes)},i(local){current||(Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.N)(meta.$$.fragment,local),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.N)(template.$$.fragment,local),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.N)(story0.$$.fragment,local),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.N)(story1.$$.fragment,local),current=!0)},o(local){Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.O)(meta.$$.fragment,local),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.O)(template.$$.fragment,local),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.O)(story0.$$.fragment,local),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.O)(story1.$$.fragment,local),current=!1},d(detaching){Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.p)(meta,detaching),detaching&&Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.q)(t0),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.p)(template,detaching),detaching&&Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.q)(t1),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.p)(story0,detaching),detaching&&Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.q)(t2),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.p)(story1,detaching)}}}class Header_stories extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__.a{constructor(options){super(),Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__.z)(this,options,null,create_fragment,svelte_internal__WEBPACK_IMPORTED_MODULE_0__.H,{})}}Header_stories.__docgen={version:3,name:"Header.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const{default:parser}=__webpack_require__(283),__storiesMetaData=parser(Header_stories,{"tpl:default":{name:"default",template:!0,source:"<Header\n  {...args}\n  on:login={args.onLogin}\n  on:logout={args.onLogout}\n  on:createAccount={args.onCreateAccount}\n/>",hasArgs:!0},LoggedIn:{name:"LoggedIn",template:!1,hasArgs:!1},LoggedOut:{name:"LoggedOut",template:!1,hasArgs:!1}});__webpack_exports__.default=__storiesMetaData.meta;const LoggedIn=__storiesMetaData.stories.LoggedIn,LoggedOut=__storiesMetaData.stories.LoggedOut},824:function(module,exports,__webpack_require__){var api=__webpack_require__(281),content=__webpack_require__(825);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},825:function(module,exports,__webpack_require__){(exports=__webpack_require__(282)(!1)).push([module.i,".wrapper {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 15px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\nsvg {\n  display: inline-block;\n  vertical-align: top;\n}\n\nh1 {\n  font-weight: 900;\n  font-size: 20px;\n  line-height: 1;\n  margin: 6px 0 6px 10px;\n  display: inline-block;\n  vertical-align: top;\n}\n\nbutton + button {\n  margin-left: 10px;\n}\n",""]),module.exports=exports},826:function(module,exports,__webpack_require__){var api=__webpack_require__(281),content=__webpack_require__(827);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},827:function(module,exports,__webpack_require__){(exports=__webpack_require__(282)(!1)).push([module.i,"section {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 24px;\n  padding: 48px 20px;\n  margin: 0 auto;\n  max-width: 600px;\n  color: #333;\n}\n\nh2 {\n  font-weight: 900;\n  font-size: 32px;\n  line-height: 1;\n  margin: 0 0 4px;\n  display: inline-block;\n  vertical-align: top;\n}\n\np {\n  margin: 1em 0;\n}\n\na {\n  text-decoration: none;\n  color: #1ea7fd;\n}\n\nul {\n  padding-left: 30px;\n  margin: 1em 0;\n}\n\nli {\n  margin-bottom: 8px;\n}\n\n.tip {\n  display: inline-block;\n  border-radius: 1em;\n  font-size: 11px;\n  line-height: 12px;\n  font-weight: 700;\n  background: #e7fdd8;\n  color: #66bf3c;\n  padding: 4px 12px;\n  margin-right: 10px;\n  vertical-align: top;\n}\n\n.tip-wrapper {\n  font-size: 13px;\n  line-height: 20px;\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.tip-wrapper svg {\n  display: inline-block;\n  height: 12px;\n  width: 12px;\n  margin-right: 4px;\n  vertical-align: top;\n  margin-top: 3px;\n}\n\n.tip-wrapper svg path {\n  fill: #1ea7fd;\n}\n",""]),module.exports=exports},835:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(16),__webpack_require__(38),__webpack_require__(43),__webpack_require__(806),__webpack_require__(35),__webpack_require__(36),__webpack_require__(807),__webpack_require__(808),__webpack_require__(809);var client_api=__webpack_require__(127),esm=__webpack_require__(6);const parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.b)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.c)(loader,!1)}));case"parameters":return Object(client_api.d)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.d)(v,!1);default:return console.log(key+" was not supported :( !")}}))},836:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"LoggedIn",(function(){return LoggedIn})),__webpack_require__.d(__webpack_exports__,"LoggedOut",(function(){return LoggedOut}));var internal=__webpack_require__(1),addon_svelte_csf=__webpack_require__(42),Header_svelte=(__webpack_require__(826),__webpack_require__(157)),svelte=__webpack_require__(94);function create_fragment(ctx){let article,header,t0,section,current;return header=new Header_svelte.a({props:{user:ctx[0]}}),header.$on("login",ctx[1]),header.$on("logout",ctx[2]),header.$on("createAccount",ctx[3]),{c(){article=Object(internal.r)("article"),Object(internal.n)(header.$$.fragment),t0=Object(internal.K)(),section=Object(internal.r)("section"),section.innerHTML='<h2>Pages in Storybook</h2> \n    <p>We recommend building UIs with a\n      <a href="https://blog.hichroma.com/component-driven-development-ce1109d56c8e" target="_blank" rel="noopener noreferrer"><strong>component-driven</strong></a>\n      process starting with atomic components and ending with pages.</p> \n    <p>Render pages with mock data. This makes it easy to build and review page states without\n      needing to navigate to them in your app. Here are some handy patterns for managing page data\n      in Storybook:</p> \n    <ul><li>Use a higher-level connected component. Storybook helps you compose such data from the\n        &quot;args&quot; of child component stories</li> \n      <li>Assemble data in the page component from your services. You can mock these services out\n        using Storybook.</li></ul> \n    <p>Get a guided tutorial on component-driven development at\n      <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">Storybook tutorials</a>\n      . Read more in the\n      <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">docs</a>\n      .</p> \n    <div class="tip-wrapper"><span class="tip">Tip</span>\n      Adjust the width of the canvas with the\n      <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillrule="evenodd"><path d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0\n            01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0\n            010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z" id="a" fill="#999"></path></g></svg>\n      Viewports addon in the toolbar</div>'},m(target,anchor){Object(internal.A)(target,article,anchor),Object(internal.D)(header,article,null),Object(internal.e)(article,t0),Object(internal.e)(article,section),current=!0},p(ctx,[dirty]){const header_changes={};1&dirty&&(header_changes.user=ctx[0]),header.$set(header_changes)},i(local){current||(Object(internal.N)(header.$$.fragment,local),current=!0)},o(local){Object(internal.O)(header.$$.fragment,local),current=!1},d(detaching){detaching&&Object(internal.q)(article),Object(internal.p)(header)}}}function instance($$self,$$props,$$invalidate){let{user:user=null}=$$props;const dispatch=Object(svelte.createEventDispatcher)();return $$self.$$set=$$props=>{"user"in $$props&&$$invalidate(0,user=$$props.user)},[user,function onLogin(event){dispatch("login",event)},function onLogout(event){dispatch("logout",event)},function onCreateAccount(event){dispatch("createAccount",event)}]}class Page_svelte_Page extends internal.a{constructor(options){super(),Object(internal.z)(this,options,instance,create_fragment,internal.H,{user:0})}}var Page_svelte=Page_svelte_Page;function create_default_slot(ctx){let page,current;const page_spread_levels=[ctx[0]];let page_props={};for(let i=0;i<page_spread_levels.length;i+=1)page_props=Object(internal.f)(page_props,page_spread_levels[i]);return page=new Page_svelte({props:page_props}),page.$on("login",(function(){Object(internal.B)(ctx[0].onLogin)&&ctx[0].onLogin.apply(this,arguments)})),page.$on("logout",(function(){Object(internal.B)(ctx[0].onLogout)&&ctx[0].onLogout.apply(this,arguments)})),page.$on("createAccount",(function(){Object(internal.B)(ctx[0].onCreateAccount)&&ctx[0].onCreateAccount.apply(this,arguments)})),{c(){Object(internal.n)(page.$$.fragment)},m(target,anchor){Object(internal.D)(page,target,anchor),current=!0},p(new_ctx,dirty){ctx=new_ctx;const page_changes=1&dirty?Object(internal.w)(page_spread_levels,[Object(internal.v)(ctx[0])]):{};page.$set(page_changes)},i(local){current||(Object(internal.N)(page.$$.fragment,local),current=!0)},o(local){Object(internal.O)(page.$$.fragment,local),current=!1},d(detaching){Object(internal.p)(page,detaching)}}}function Page_stories_svelte_create_fragment(ctx){let meta,t0,template,t1,story0,t2,story1,current;return meta=new addon_svelte_csf.Meta({props:{title:"Example/Page",component:Page_svelte,argTypes:{onLogin:{action:"onLogin"},onLogout:{action:"onLogout"},onCreateAccount:{action:"onCreateAccount"}}}}),template=new addon_svelte_csf.Template({props:{$$slots:{default:[create_default_slot,({args:args})=>({0:args}),({args:args})=>args?1:0]},$$scope:{ctx:ctx}}}),story0=new addon_svelte_csf.Story({props:{name:"LoggedIn",args:{user:{}}}}),story1=new addon_svelte_csf.Story({props:{name:"LoggedOut",args:{}}}),{c(){Object(internal.n)(meta.$$.fragment),t0=Object(internal.K)(),Object(internal.n)(template.$$.fragment),t1=Object(internal.K)(),Object(internal.n)(story0.$$.fragment),t2=Object(internal.K)(),Object(internal.n)(story1.$$.fragment)},m(target,anchor){Object(internal.D)(meta,target,anchor),Object(internal.A)(target,t0,anchor),Object(internal.D)(template,target,anchor),Object(internal.A)(target,t1,anchor),Object(internal.D)(story0,target,anchor),Object(internal.A)(target,t2,anchor),Object(internal.D)(story1,target,anchor),current=!0},p(ctx,[dirty]){const template_changes={};3&dirty&&(template_changes.$$scope={dirty:dirty,ctx:ctx}),template.$set(template_changes)},i(local){current||(Object(internal.N)(meta.$$.fragment,local),Object(internal.N)(template.$$.fragment,local),Object(internal.N)(story0.$$.fragment,local),Object(internal.N)(story1.$$.fragment,local),current=!0)},o(local){Object(internal.O)(meta.$$.fragment,local),Object(internal.O)(template.$$.fragment,local),Object(internal.O)(story0.$$.fragment,local),Object(internal.O)(story1.$$.fragment,local),current=!1},d(detaching){Object(internal.p)(meta,detaching),detaching&&Object(internal.q)(t0),Object(internal.p)(template,detaching),detaching&&Object(internal.q)(t1),Object(internal.p)(story0,detaching),detaching&&Object(internal.q)(t2),Object(internal.p)(story1,detaching)}}}Page_svelte_Page.__docgen={version:3,name:"Page.svelte",data:[{visibility:"public",description:null,keywords:[],name:"user",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{visibility:"public",description:null,keywords:[],name:"login"},{visibility:"public",description:null,keywords:[],name:"logout"},{visibility:"public",description:null,keywords:[],name:"createAccount"}],slots:[],refs:[]};class Page_stories_svelte_Page_stories extends internal.a{constructor(options){super(),Object(internal.z)(this,options,null,Page_stories_svelte_create_fragment,internal.H,{})}}Page_stories_svelte_Page_stories.__docgen={version:3,name:"Page.stories.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const{default:parser}=__webpack_require__(283),__storiesMetaData=parser(Page_stories_svelte_Page_stories,{"tpl:default":{name:"default",template:!0,source:"<Page\n  {...args}\n  on:login={args.onLogin}\n  on:logout={args.onLogout}\n  on:createAccount={args.onCreateAccount}\n/>",hasArgs:!0},LoggedIn:{name:"LoggedIn",template:!1,hasArgs:!1},LoggedOut:{name:"LoggedOut",template:!1,hasArgs:!1}});__webpack_exports__.default=__storiesMetaData.meta;const LoggedIn=__storiesMetaData.stories.LoggedIn,LoggedOut=__storiesMetaData.stories.LoggedOut}},[[461,2,3]]]);