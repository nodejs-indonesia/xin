(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{25:function(n,e){n.exports='<div class="padding">\n  <h2>Intro</h2>\n\n  <p>\n    Xin is Single Page Application framework using javascript. Xin powered by beloved opensource projects and specs,\n  </p>\n\n  <ul>\n    <li>New spec of Javascript (ES6+)</li>\n    <li>NPM / Yarn</li>\n    <li>Webpack</li>\n  </ul>\n\n  <h3>Getting started</h3>\n\n  <p>For quick start you can use template provided by community. Just download or clone web example that already use xin from `https://github.com/reekoheek/xin-example`.</p>\n\n  <code><pre>\nwget https://github.com/reekoheek/xin-example/archive/master.zip\nunzip master.zip\ncd xin-example-master\nnpm i\nnpm run dev</pre></code>\n\n  <p>Any help to compose yo generator accepted. ;)</p>\n\n  <h3>Selectors</h3>\n\n  <p>You can select element by id inside component context using component.$</p>\n\n  <code><pre>\n&lt;my-component id="myComponent"&gt;\n  &lt;template&gt;\n    &lt;input type="text" id="foo"&gt;\n    &lt;input type="text" id="bar"&gt;\n  &lt;/template&gt;\n&lt;/my-component&gt;</pre></code>\n\n  <code><pre>\nlet compFoo = myComponent.$.foo;\n\nassert(compFoo === document.getElementById(\'foo\'));</pre></code>\n\n  <p>You can select element by css selector inside component context using component.$$()</p>\n\n  <code><pre>\n&lt;my-component id="myComponent"&gt;\n  &lt;template&gt;\n    &lt;input type="text"&gt;\n    &lt;input type="button"&gt;\n  &lt;/template&gt;\n&lt;/my-component&gt;</pre></code>\n\n  <code><pre>\nlet textInput = myComponent.$$(\'input[type=text]\');\nlet button = myComponent.$$(\'input[type=button]\');</pre></code>\n\n</div>\n'}}]);