(window.webpackJsonp=window.webpackJsonp||[]).push([[5,11],{15:function(t,i,e){"use strict";e.r(i);var n=e(5),s=e(2);Object(n.b)("x-app-route",class extends s.View{get template(){return e(29)}})},2:function(t,i,e){"use strict";e.r(i);var n=e(1),s=e(0);e(32);class r extends n.a{get props(){const t=this.__repository.get("view.transitionIn")||this.__repository.get("view.transition")||"slide",i=this.__repository.get("view.transitionOut")||this.__repository.get("view.transition")||"fade";return Object.assign({},super.props,{uri:{type:String,required:!0},transitionIn:{type:String,value:t},transitionOut:{type:String,value:i},index:{type:Number,value:0}})}focusing(){}focused(){}blurred(){}created(){super.created(),this.classList.add("xin-view")}ready(){super.ready(),this.inFx=new s.a({element:this,transition:this.transitionIn,method:"in"}),this.outFx=new s.a({element:this,transition:this.transitionOut,method:"out"})}attached(){super.attached(),this.classList.remove("xin-view--focus"),this.classList.remove("xin-view--visible"),this.__app?(this.__app.route(this.uri,t=>{this.focus(t)}),this.fire("routed")):console.error("Cannot route view to undefined app")}async focus(t={}){this.set("parameters",t),await this.focusing(t),this.fire("focusing",t),this.async(()=>{"setFocus"in this.parentElement?this.parentElement.setFocus(this):(this.setVisible(!0),this.setFocus(!0))})}setVisible(t){if(t)return this.classList.add("xin-view--visible"),void this.fire("show",{view:this});this.classList.remove("xin-view--visible"),[].forEach.call(this.querySelectorAll(".xin-view.xin-view--visible"),i=>i.setVisible(t)),this.fire("hide")}async setFocus(t){if(t)return this.classList.add("xin-view--focus"),await this.focused(),void this.fire("focus");this.classList.remove("xin-view--focus"),[].forEach.call(this.querySelectorAll(".xin-view.xin-view--focus"),i=>{"setFocus"in i.parentElement?i.parentElement.setFocus(null):i.setFocus(t)}),await this.blurred(),this.fire("blur")}}Object(n.d)("xin-view",r),e.d(i,"View",function(){return r})},29:function(t,i){t.exports='<div class="padding">\n  <h2>App, views, and routing</h2>\n\n  <p>\n    Xin has built-in multi views application model. All you have to do is using\n    xin-app, xin-view and xin-pager.\n  </p>\n\n  <p>\n    Below is example to create application with multiple views.\n  </p>\n\n  <code><pre>\n&lt;xin-app&gt;\n  &lt;template&gt;\n    &lt;div&gt;\n      &lt;a href="#!/"&gt;Home&lt;/a&gt;\n      &lt;a href="#!/foo"&gt;Foo&lt;/a&gt;\n      &lt;a href="#!/bar"&gt;Bar&lt;/a&gt;\n    &lt;/div&gt;\n\n    &lt;xin-pager&gt;\n      &lt;xin-view uri="/"&gt;\n        &lt;template&gt;\n          This is home\n        &lt;/template&gt;\n      &lt;/xin-view&gt;\n\n      &lt;xin-view uri="/foo"&gt;\n        &lt;template&gt;\n          This is foo\n        &lt;/template&gt;\n      &lt;/xin-view&gt;\n\n      &lt;xin-view uri="/bar"&gt;\n        &lt;template&gt;\n          This is bar\n        &lt;/template&gt;\n      &lt;/xin-view&gt;\n    &lt;/xin-pager&gt;\n  &lt;/template&gt;\n&lt;/xin-app&gt;</pre></code>\n</div>\n'},31:function(t,i,e){(t.exports=e(9)(!1)).push([t.i,".xin-view {\n  box-sizing: border-box;\n  display: none;\n}\n\n.xin-view.xin-view--visible {\n  display: block;\n}\n",""])},32:function(t,i,e){var n=e(31);"string"==typeof n&&(n=[[t.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e(8)(n,s);n.locals&&(t.exports=n.locals)}}]);