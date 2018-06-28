(window.webpackJsonp=window.webpackJsonp||[]).push([[1,7],{11:function(e,t,n){"use strict";n.r(t);var i=n(5),s=n(2);Object(i.b)("x-intro",class extends s.View{get template(){return n(25)}})},2:function(e,t,n){"use strict";n.r(t);var i=n(1),s=n(0);n(32);class o extends i.a{get props(){const e=this.__repository.get("view.transitionIn")||this.__repository.get("view.transition")||"slide",t=this.__repository.get("view.transitionOut")||this.__repository.get("view.transition")||"fade";return Object.assign({},super.props,{uri:{type:String,required:!0},transitionIn:{type:String,value:e},transitionOut:{type:String,value:t},index:{type:Number,value:0}})}focusing(){}focused(){}blurred(){}created(){super.created(),this.classList.add("xin-view")}ready(){super.ready(),this.inFx=new s.a({element:this,transition:this.transitionIn,method:"in"}),this.outFx=new s.a({element:this,transition:this.transitionOut,method:"out"})}attached(){super.attached(),this.classList.remove("xin-view--focus"),this.classList.remove("xin-view--visible"),this.__app?(this.__app.route(this.uri,e=>{this.focus(e)}),this.fire("routed")):console.error("Cannot route view to undefined app")}async focus(e={}){this.set("parameters",e),await this.focusing(e),this.fire("focusing",e),this.async(()=>{"setFocus"in this.parentElement?this.parentElement.setFocus(this):(this.setVisible(!0),this.setFocus(!0))})}setVisible(e){if(e)return this.classList.add("xin-view--visible"),void this.fire("show",{view:this});this.classList.remove("xin-view--visible"),[].forEach.call(this.querySelectorAll(".xin-view.xin-view--visible"),t=>t.setVisible(e)),this.fire("hide")}async setFocus(e){if(e)return this.classList.add("xin-view--focus"),await this.focused(),void this.fire("focus");this.classList.remove("xin-view--focus"),[].forEach.call(this.querySelectorAll(".xin-view.xin-view--focus"),t=>{"setFocus"in t.parentElement?t.parentElement.setFocus(null):t.setFocus(e)}),await this.blurred(),this.fire("blur")}}Object(i.d)("xin-view",o),n.d(t,"View",function(){return o})},25:function(e,t){e.exports='<div class="padding">\n  <h2>Intro</h2>\n\n  <p>\n    Xin is Single Page Application framework using javascript. Xin powered by beloved opensource projects and specs,\n  </p>\n\n  <ul>\n    <li>New spec of Javascript (ES6+)</li>\n    <li>NPM / Yarn</li>\n    <li>Webpack</li>\n  </ul>\n\n  <h3>Getting started</h3>\n\n  <p>For quick start you can use template provided by community. Just download or clone web example that already use xin from `https://github.com/reekoheek/xin-example`.</p>\n\n  <code><pre>\nwget https://github.com/reekoheek/xin-example/archive/master.zip\nunzip master.zip\ncd xin-example-master\nnpm i\nnpm run dev</pre></code>\n\n  <p>Any help to compose yo generator accepted. ;)</p>\n\n  <h3>Selectors</h3>\n\n  <p>You can select element by id inside component context using component.$</p>\n\n  <code><pre>\n&lt;my-component id="myComponent"&gt;\n  &lt;template&gt;\n    &lt;input type="text" id="foo"&gt;\n    &lt;input type="text" id="bar"&gt;\n  &lt;/template&gt;\n&lt;/my-component&gt;</pre></code>\n\n  <code><pre>\nlet compFoo = myComponent.$.foo;\n\nassert(compFoo === document.getElementById(\'foo\'));</pre></code>\n\n  <p>You can select element by css selector inside component context using component.$$()</p>\n\n  <code><pre>\n&lt;my-component id="myComponent"&gt;\n  &lt;template&gt;\n    &lt;input type="text"&gt;\n    &lt;input type="button"&gt;\n  &lt;/template&gt;\n&lt;/my-component&gt;</pre></code>\n\n  <code><pre>\nlet textInput = myComponent.$$(\'input[type=text]\');\nlet button = myComponent.$$(\'input[type=button]\');</pre></code>\n\n</div>\n'},31:function(e,t,n){(e.exports=n(9)(!1)).push([e.i,".xin-view {\n  box-sizing: border-box;\n  display: none;\n}\n\n.xin-view.xin-view--visible {\n  display: block;\n}\n",""])},32:function(e,t,n){var i=n(31);"string"==typeof i&&(i=[[e.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};n(8)(i,s);i.locals&&(e.exports=i.locals)}}]);