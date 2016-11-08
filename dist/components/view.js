webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _src = __webpack_require__(1);
	
	var _src2 = _interopRequireDefault(_src);
	
	__webpack_require__(25);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SETUP_TRANSITION = _src2.default.setup.get('xin.View.transition') || 'transition-slide';
	
	var View = function (_xin$Component) {
	  _inherits(View, _xin$Component);
	
	  function View() {
	    _classCallCheck(this, View);
	
	    return _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).apply(this, arguments));
	  }
	
	  _createClass(View, [{
	    key: 'focusing',
	
	
	    // get listeners () {
	    //   return {
	    //     focusing: 'focusing(evt)',
	    //     focus: 'focused(evt)',
	    //     blur: 'blurred(evt)',
	    //   };
	    // }
	
	    value: function focusing() {}
	  }, {
	    key: 'focused',
	    value: function focused() {}
	  }, {
	    key: 'blurred',
	    value: function blurred() {}
	  }, {
	    key: 'created',
	    value: function created() {
	      _get(View.prototype.__proto__ || Object.getPrototypeOf(View.prototype), 'created', this).call(this);
	
	      this.classList.add('xin-view');
	    }
	  }, {
	    key: 'ready',
	    value: function ready() {
	      _get(View.prototype.__proto__ || Object.getPrototypeOf(View.prototype), 'ready', this).call(this);
	
	      this.transitionFx = new _src2.default.Fx(this);
	    }
	  }, {
	    key: 'attached',
	    value: function attached() {
	      _get(View.prototype.__proto__ || Object.getPrototypeOf(View.prototype), 'attached', this).call(this);
	
	      this.classList.remove('xin-view--focus');
	      this.classList.remove('xin-view--visible');
	
	      if ('add' in this.parentElement) {
	        this.parentElement.add(this);
	      }
	
	      this.__app.route(this.uri, this.focus.bind(this));
	      this.fire('routed');
	    }
	  }, {
	    key: 'focus',
	    value: function focus(parameters) {
	      var _this2 = this;
	
	      this.set('parameters', parameters || {});
	
	      this.focusing();
	      this.fire('focusing');
	
	      this.async(function () {
	        if ('setFocus' in _this2.parentElement) {
	          _this2.parentElement.setFocus(_this2);
	        } else {
	          _this2.setFocus(true);
	          _this2.setVisible(true);
	        }
	      });
	    }
	  }, {
	    key: 'setVisible',
	    value: function setVisible(visible) {
	      if (visible) {
	        this.classList.add('xin-view--visible');
	        this.fire('show');
	      } else {
	        this.classList.remove('xin-view--visible');
	        this.fire('hide');
	
	        [].forEach.call(this.querySelectorAll('.xin-view.xin-view--visible'), function (el) {
	          return el.setVisible(visible);
	        });
	      }
	    }
	  }, {
	    key: 'setFocus',
	    value: function setFocus(focus) {
	      if (focus) {
	        this.classList.add('xin-view--focus');
	        this.focused();
	        this.fire('focus');
	      } else {
	        this.classList.remove('xin-view--focus');
	        this.blurred();
	        this.fire('blur');
	
	        [].forEach.call(this.querySelectorAll('.xin-view.xin-view--focus'), function (el) {
	          if ('setFocus' in el.parentElement) {
	            el.parentElement.setFocus(null);
	          } else {
	            el.setFocus(focus);
	          }
	        });
	      }
	    }
	  }, {
	    key: 'props',
	    get: function get() {
	      return {
	        uri: {
	          type: String,
	          required: true
	        },
	        transition: {
	          type: String,
	          value: SETUP_TRANSITION
	        }
	      };
	    }
	  }]);
	
	  return View;
	}(_src2.default.Component);
	
	_src2.default.define('xin-view', View);
	
	exports.default = View;

/***/ },

/***/ 25:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(26);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(22)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./view.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./view.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 26:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(21)();
	// imports
	
	
	// module
	exports.push([module.id, ".xin-view {\n  box-sizing: border-box;\n  display: none;\n}\n\n.xin-view.xin-view--visible {\n  display: block;\n}\n", ""]);
	
	// exports


/***/ }

});
//# sourceMappingURL=view.js.map