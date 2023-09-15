/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./jsFE/requestSurvey.js":
/*!*******************************!*\
  !*** ./jsFE/requestSurvey.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var FILES = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  var test;
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.next = 2;
        return fetch("/api/backoffice/get-files");
      case 2:
        test = _context.sent;
        _context.next = 5;
        return test.json();
      case 5:
        test = _context.sent;
        return _context.abrupt("return", test);
      case 7:
      case "end":
        return _context.stop();
    }
  }, _callee);
}))();
/* harmony default export */ __webpack_exports__["default"] = (FILES);

/***/ }),

/***/ "./jsFE/survey.js":
/*!************************!*\
  !*** ./jsFE/survey.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _requestSurvey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./requestSurvey */ "./jsFE/requestSurvey.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _ref, _validateForm, _createButtonInfoAsync;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var _Promise = typeof Promise === 'undefined' ? (__webpack_require__(/*! es6-promise */ "./node_modules/es6-promise/dist/es6-promise.js").Promise) : Promise;


var converter = new showdown.Converter();
var resultsToSave = {};
var currentState = {};
var doLoadState = false;
var prospectiveAvgElements = [];
// let createAvgElementIdx = null;
var selectedNonApplicableReqIDs = [];
var nonApplicableReqs = [];
var checkboxes = {};
var overallAvgOptimal = 0;
var fullName;
var organisation;
var email;
var country;
var selectedBC = {};
var buttonTitles = [];
var pubValueTooltip = "It refers to the expected beneficial impact (cost discounted) provided by the target prospective ability (*) to support the digital business capability. (*) default is the highest possible prospective ability";
var budgetTooltip = "It refers to the estimated amount (in millions of EUR) required to reach the target prospective ability of the Architectural Building Block to support the digital business capability (to fulfill the GAP)";
var perspectiveTool = "It measures the perspective ability to support a Digital Business Capability";
var supportTooltip = "It measures the current ability to support the digital business capability";
var abbTooltips = {
  Legal: "This view includes the ABBs related to the different legal acts, policies and strategies influencing or governing the digital public services",
  Organisational: "This view includes the ABBs related to the Public Administration organisation, responsibilities and agreements to achieve mutually beneficial goals",
  Semantic: "This view includes the ABBs related to format and meaning of exchanged data and information",
  Technical: "This view covers the ABBs related to the applications and infrastructures systems and services",
  "Technical-infrastructure": "This view includes all the ABB related to the infrastructures systems and services",
  "Technical-application": "This view includes all the ABB related to the applications systems and services"
};
var $surveyLoadingModal = $("#survey-loading-modal");

/**
 * This function takes an array of objects and groups each object
 * For ex [{id:1, item: 2}, {id:1, item2: 3}] and key = 'id' ==> {1: {id:1, item: 2}, {id:1, item2: 3}}
 * @param {Array} obj
 * @param {String} key
 * @param {Boolean} containSpaces
 * @returns {Object}
 */
function groupBy(obj, key, containSpaces) {
  var spaces = containSpaces || true;
  if (spaces) {
    return obj.reduce(function (prevObj, current) {
      (prevObj[current[key]] = prevObj[current[key]] || []).push(current);
      return prevObj;
    }, {});
  }
  return obj.reduce(function (prevObj, current) {
    var tempKey = current[key].split(" ")[0];
    (prevObj[tempKey] = prevObj[tempKey] || []).push(current);
    return prevObj;
  }, {});
}
var changeActiveStateAtButtonsTitles = function changeActiveStateAtButtonsTitles(id, isActive) {
  for (var index = 0; index < buttonTitles.length; index++) {
    var buttonsTitles = buttonTitles[index];
    var test = buttonsTitles.filter(function (obj) {
      return obj.id === id;
    });
    if (test.length > 0) {
      test[0].active = isActive;
      break;
    }
  }
};
/**
 * This function takes a 3 numbers and generates an array with numbers in this range
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
function range(start, end, step) {
  var s = start || 0;
  var stp = step || 1;
  var arr = [];
  for (var i = s; i <= end; i += stp) {
    arr.push(i);
  }
  return arr;
}

/**
 * This function takes a string and make the first letter UpperCase.
 * @param {String} s
 */
function capitalize(s) {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
}
function animate(animitionType, duration) {
  if (!duration) duration = 1000;
  var surveyContainer = document.getElementById("surveyContainer");
  $(surveyContainer).velocity(animitionType, {
    duration: duration
  });
}
animate("slideDown", 1000);
var doAnimantion = true;
var createChecbox = function createChecbox(policy) {
  var div = document.createElement("div");
  var input = document.createElement("input");
  var label = document.createElement("label");
  div.appendChild(input);
  div.appendChild(label);
  var labelText = capitalize(policy.toLowerCase());
  div.className = "form-check form-check-inline";
  input.className = "form-check-input";
  label.className = "form-check-label";
  input.setAttribute("type", "checkbox");
  input.setAttribute("checked", "checked");
  input.id = "".concat(policy.toLowerCase().split(" ").join("-"), "-checkbox");
  labelText === "Business agnostic" && input.setAttribute("disabled", "true");
  if (labelText === "Business agnostic") {
    input.setAttribute("disabled", "true");
    input.setAttribute("checked", "checked");
  } else {
    input.checked = false;
  }
  label.innerText = labelText === "Business agnostic" ? "".concat(labelText, " (required)") : labelText;
  return div;
};
var createPolicyCheckboxes = function createPolicyCheckboxes(policies) {
  var parent = document.querySelector(".form-check-group");
  policies.forEach(function (policy) {
    var div = createChecbox(policy);
    parent.appendChild(div);
  });
};
var fetchPolicies = function fetchPolicies() {
  return (_ref = _ref || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var resp;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fetch("/api/backoffice/get-policies");
        case 3:
          resp = _context.sent;
          _context.next = 6;
          return resp.json();
        case 6:
          resp = _context.sent;
          createPolicyCheckboxes(resp);
          _context.next = 13;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }))).apply(this, arguments);
};
fetchPolicies();
function updateButtonsClickAbility(currentActiveIdx) {
  var buttons = document.querySelectorAll("#pageSelector button");
  for (var i = 0; i < buttons.length; i++) {
    if (i < currentActiveIdx) {
      buttons[i].disabled = false;
    } else {
      buttons[i].disabled = false;
    }
  }
}
function addButtonsInNavigation() {
  var footerContent = document.querySelector(".panel-footer");
  var newButtons = document.getElementById("buttons-in-top");
  if (footerContent === null) return;
  var elements = footerContent.childNodes;
  newButtons.innerHTML = "";
  var _loop = function _loop(i) {
    var element = elements[i].cloneNode(true);
    element.addEventListener("click", function () {
      var elementType = elements[i].nodeName;
      if (elementType === "FONT") {
        elements[i].querySelector("input,button").click();
        return;
      }
      elements[i].click();
    });
    newButtons.appendChild(element);
  };
  for (var i = 0; i < elements.length; i++) {
    _loop(i);
  }
  var buttonsObserver = new MutationObserver(function (mutations) {
    addButtonsInNavigation();
  });
  var observerConfiguration = {
    attributes: true,
    childList: true,
    characterData: true
  };
  buttonsObserver.observe(footerContent, observerConfiguration);
}

/**
 * Create Checkboxe for skip functionality
 */
var checkBoxForBCv2 = function checkBoxForBCv2() {
  var checked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var checkbox = document.createElement("input");
  checkbox.className = "skip-checkbox";
  checkbox.checked = checked;
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("custom-checked", checked);
  return checkbox;
};

/**
 * Helper for addCheckBoxInBCQuestion
 */
var getGeneratedVisibleRow = function getGeneratedVisibleRow(page, idx) {
  return page.elements[0].generatedVisibleRows[idx];
};

/**
 * Helper for addCheckBoxInBCQuestion
 */
var changeRequiredStateAtCells = function changeRequiredStateAtCells(visibleRow, reqState) {
  if (null != visibleRow && undefined != visibleRow) {
    var cells = visibleRow.cells;
    for (var idx = 0; idx < cells.length; idx++) {
      cells[idx].question.isRequired = reqState;
    }
  }
};

/**
 * Helper for addCheckBoxInBCQuestion
 */

var removeRequiredFromBBS = function removeRequiredFromBBS(page, state) {
  var elements = page.elements;
  for (var idx = 0; idx < elements.length; idx++) {
    var columns = elements[idx].columns;
    for (var cIdx = 0; cIdx < columns.length; cIdx++) {
      columns[cIdx].isRequired = state;
    }
  }
};

/**
 * Helper for addCheckBoxInBCQuestion
 */
var toggleAllElementsState = function toggleAllElementsState(page, state) {
  removeRequiredFromBBS(page, state);
  var elements = page.elements;
  for (var i = 0; i < elements.length; i++) elements[i].isRequired = state;
};

/**
 * Helper for addCheckBoxInBCQuestion
 */
var isAllBcSelected = function isAllBcSelected(body) {
  var testA = body.querySelectorAll(".skip-checkbox");
  var testB = body.querySelectorAll(".skip-checkbox[custom-checked=true]");
  return testA.length === testB.length;
};

/**
 * Helper for addCheckBoxInBCQuestion
 */
var removeContent = function removeContent(row) {
  var cells = row.cells;
  for (var idx = 0; idx < cells.length; idx++) {
    cells[idx].value = "";
  }
};

/**
 * Helper for addCheckBoxInBCQuestion
 */
var toggleVisibility = function toggleVisibility(page, state) {
  var elements = page.elements;
  for (var idx = 0; idx < elements.length - 1; idx++) {
    elements[idx].visible = state;
  }
};

/**
 * Helper for addCheckBoxInBCQuestion
 */
var determineParentClass = function determineParentClass(parentElement, checked) {
  if (checked) {
    parentElement.classList.remove("table-parent-event");
  } else {
    parentElement.classList.add("table-parent-event");
  }
};
var cleanGeneratedQuestionFromSpanTag = function cleanGeneratedQuestionFromSpanTag(question) {
  return question.replace('<span style="display:none">', "").replace("</span>", "");
};
var getIDFromGeneratedQuestion = function getIDFromGeneratedQuestion(question) {
  question = cleanGeneratedQuestionFromSpanTag(question);
  return question.split(")")[0];
};
var findGeneratedVisibleRowIndex = function findGeneratedVisibleRowIndex(elements, id) {
  var generatedVisibleRows = elements.generatedVisibleRows;
  var index = -1;
  generatedVisibleRows.forEach(function (row, idx) {
    var name = row.name;
    var rowId = getIDFromGeneratedQuestion(name);
    if (rowId === id) {
      index = idx;
      return;
    }
  });
  return index;
};
function isValidBudget(value) {
  var re = /^(\d{0,}\.\d{0,2}|\d{0,}|\.\d{0,2})$/;
  if (!value) return;
  var test = re.test(value);
  if (!test) return "Please provide the budget in the right form (e.x. 10.50)";
}

/**
 * Create Checkboxes for all the dBusCaps with all functionality
 */
var addCheckBoxInBCQuestion = function addCheckBoxInBCQuestion(survey, _ref2, isFirstPage) {
  var parent = _ref2.htmlElement,
    page = _ref2.page;
  var bcTableyTag = parent.querySelectorAll(".sv_row table");
  var rowIndexV1 = bcTableyTag.length === 1 ? 1 : bcTableyTag.length;
  bcTableyTag = bcTableyTag[rowIndexV1 - 1];
  var bcBodyTag = bcTableyTag.querySelector("tbody");
  var bcHeadTag = bcTableyTag.querySelector("thead tr");
  var th = document.createElement("th");
  th.className = isFirstPage ? "" : "d-none";
  var span = document.createElement("span");
  span.innerHTML = "Selected \n  <a\n  target=\"_blank\"\n  href=\"https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fDigitalBusinessCapability \"\n  title=\"Digital Capabilities are the key skills and capabilities a company or a Government requires to transform itself into a sustainable and successful business by considering digital technology as the enabling component\">digital\n  business capabilities</a>";
  var tooltipSpan = document.createElement("span");
  tooltipSpan.setAttribute("data-toggle", "tooltip");
  tooltipSpan.setAttribute("data-html", "true");
  tooltipSpan.setAttribute("title", "Unchecking this button, the related digital business capability will not be assessed ");
  tooltipSpan.className = "pl-1";
  var icon = document.createElement("i");
  icon.className = "fa fa-question-circle text-primary";
  tooltipSpan.appendChild(icon);
  span.appendChild(tooltipSpan);
  th.appendChild(span);
  bcHeadTag.insertBefore(th, bcHeadTag.firstElementChild);
  var trs = bcBodyTag.querySelectorAll("tr");
  var len = trs.length;
  for (var idx = 0; idx < len; idx++) {
    var tr = trs[idx];
    var td = document.createElement("td");
    td.className = isFirstPage ? "" : "d-none";
    tr.insertBefore(td, tr.firstElementChild);
    var $tr = $(tr);
    var id = getIDFromGeneratedQuestion($tr.children().eq(1).find("span").text());
    if (!selectedBC[id]) {
      $tr.addClass("table-parent-event");
      var a = findGeneratedVisibleRowIndex(page.elements[0]);
      if (a !== -1) {
        removeContent(page.elements[0].generatedVisibleRows[a]);
      }
    } else {
      $tr.removeClass("table-parent-event");
    }
    var checkbox = checkBoxForBCv2(selectedBC[id]);
    td.appendChild(checkbox);
    changeRequiredStateAtCells(getGeneratedVisibleRow(page, idx), checkbox.checked);
  }

  //Not sure why the if below doesn't work. This line is a workaround for now

  if (!isFirstPage) {
    if (isAllBcSelected(bcBodyTag)) {
      toggleAllElementsState(page, true);
      toggleVisibility(page, true);
    } else {
      toggleAllElementsState(page, false);
      toggleVisibility(page, true);
    }
  }
  bcBodyTag.addEventListener("click", function () {
    var element = event.target;
    if (!(element.nodeName === "INPUT" && element.type === "checkbox")) return;
    var currentRowElement = element.parentElement.parentElement;
    var rowIndex = currentRowElement.rowIndex;
    var $tr = $(currentRowElement);
    var id = getIDFromGeneratedQuestion($tr.children().eq(1).find("span").text());
    removeContent(getGeneratedVisibleRow(page, rowIndex - 1));
    changeRequiredStateAtCells(getGeneratedVisibleRow(page, rowIndex - 1), element.checked);
    if (element.checked) {
      $("[dbuscap-id=".concat(id, "]")).removeClass("d-none");
    } else {
      $("[dbuscap-id=".concat(id, "]")).addClass("d-none");
    }
    page.rows[rowIndexV1 - 1].elements[0].isRequired = element.checked;
    selectedBC = _objectSpread(_objectSpread({}, selectedBC), {}, _defineProperty({}, id, element.checked));
    changeActiveStateAtButtonsTitles(id, element.checked);
    element.setAttribute("custom-checked", element.checked);
    setVisibilitySurveyPageBasedDBCID(survey, id, element.checked);
    determineParentClass(currentRowElement, element.checked);
    updateProgressBar();
    addButtonsInNavigation();
  });
};
var setVisibilitySurveyPageBasedDBCID = function setVisibilitySurveyPageBasedDBCID(survey, id, state) {
  var pages = survey.pages;
  for (var idx = 1; idx < pages.length; idx++) {
    var questions = pages[idx].questions;
    var dBusCapQuestion = questions[questions.length - 1];
    var elementRow = dBusCapQuestion.rows[0];
    if (elementRow.text.startsWith("".concat(id, ")"))) {
      pages[idx].visible = state;
      return;
    }
  }
};

/**
 * Calculate the average ability for the abbs are selected
 */
var totalCalcAbbAvg = function totalCalcAbbAvg() {
  var array = $(".sv_row:not(:last-child) .btn.btn-default.btn-secondary.active:not(.hide)").map(function (index, element) {
    return +$(this).find("input").val();
  }).get();
  var sum = array.reduce(function (sum, num) {
    return sum += num;
  }, 0);
  var avg = array.length > 0 ? sum / array.length : 0;
  return avg;
};

/**
 * Create the element in the survey that will display the average of the abbs that user selected
 */
var totalAvgAbbElement = function totalAvgAbbElement(bcName) {
  var lastRow = $(".sv_row:last-child");

  //const avg = totalCalcAbbAvg();

  // let newElement = $(`
  // <div class="custom-row pt-2 pb-4 px-3" hidden>
  //   <p class="custom-avg-p">
  //   The overall assessed ability to support the digital business capability "${bcName.title
  //   }" is:
  //     <input class="custom-avg-input" id="total-avg-input" type=text value="${avg.toFixed(2)}" disabled />
  //   out of 5
  //   </p>
  // </div>
  // <div class="custom-row pt-2 pb-4 px-3">
  //   <p class="custom-avg-p">
  //     Therefore the gap between the Target Prospective Average Ability and the Overall Assessed Ability to support the digital business capability is:
  //     <input id="overall-diff-target-ability" class="custom-avg-input" id="total-avg-input" type=text value="${avg.toFixed(2)}" disabled /> out of 5
  //   </p>
  // </div>
  // `);
  //lastRow.before(newElement);

  $(".sv_row:not(:last-child) .btn.btn-default.btn-secondary").on("click", "input", function () {
    $(this).parent().addClass("active");
    $(this).parent().prevAll().removeClass("active");
    $(this).parent().nextAll().removeClass("active");
    var avg = totalCalcAbbAvg();
    $("#total-avg-input").val(avg.toFixed(2));
    updateTargetOverallAccessDiff();
  });
};

// const calcAvgForView = (idx) => {
//   let $activeLabels = $(
//     `.sv_row:nth-of-type(${idx + 1}) .btn.btn-default.btn-secondary.active:not(.hide)`
//   );
//   let values = $activeLabels
//     .map(function () {
//       return +$(this).find("input").val();
//     })
//     .get();

//   let avg = values.reduce((sum, currVal) => (sum += currVal), 0);
//   let length = values.length;

//   if (!length) return 0;

//   return avg / length;
// };

var calcAvgForView = function calcAvgForView(idx) {
  var $activeLabels = $(".sv_row:nth-of-type(".concat(idx, ") .rating-button.selected"));
  var sum = 0;
  var length = $activeLabels.length;
  $activeLabels.each(function () {
    sum += parseInt($(this).val(), 10);
  });
  if (length === 0) return 0;
  return sum / length;
};
var createAvgElement = function createAvgElement(bcName, view, idx) {
  var avg = calcAvgForView(idx);
  var newElement = $("\n  <div class=\"custom-row pt-2 pb-4 px-3\">\n     <p class=\"custom-avg-p\">\n    The overall assessed ability to support the digital business capability \"".concat(bcName, "\" ").concat(view, " requirements is:\n      <input class=\"custom-avg-input view-avg\" id=\"custom-avg-input-").concat(idx, "\" type=text value=\"").concat(avg.toFixed(2), "\" disabled />\n    out of 5\n    </p> \n  </div>\n  "));

  //<input type="range" name="prospective-avg-input" id="prospective-avg-input-${idx}" min="1" max="5" value="0" required>

  // <form>
  //         <label class="radio-inline">
  //           <input type="radio" name="optradio" checked>Option 1
  //         </label>
  //         <label class="radio-inline">
  //           <input type="radio" name="optradio">Option 2
  //         </label>
  //         <label class="radio-inline">
  //           <input type="radio" name="optradio">Option 3
  //         </label>
  //       </form>

  // Este codigo pertenece a la const newElement2 de debajo, pero por motivos de front se ha sacado para comentarlo.

  var targetElement = $(".sv_row");
  var newElement2 = $("\n    <div>\n      <div>\n        <div  id=\"prospective-avg-input-".concat(idx, "\" required></div>\n      </div>\n      <div id=\"ability-difference-").concat(idx, "\">  \n      </div>\n      <div class=\"custom-row pt-2 pb-4 px-3\" id=\"ability-difference-").concat(idx, "\">\n      </div>\n    </div>\n    <h2><b> ").concat(view, " View</b></h2>\n    <hr style=\"height:2px;background-color:black;\">\n  "));
  var latestActualAvg = 0;
  var latestOptimalAvg = 0;
  prospectiveAvgElements = document.getElementsByName("prospective-avg-input");

  // Updates the value that shows the difference between the Target Prospectice (Optimal)
  // and the OvelAll assessed (Actual) Avg Ability
  function updateDiff() {
    document.getElementById("ability-difference-value-".concat(idx)).value = (latestActualAvg - latestOptimalAvg).toFixed(2);
  }

  // Calculate the Overall Average
  function updateOverallAvgOptimal() {
    var sum = 0;
    var len = prospectiveAvgElements.length;
    for (var i = 0; i < len; i++) {
      sum += Number(prospectiveAvgElements[i].value);
    }
    overallAvgOptimal = (sum / len).toFixed(0);
    return overallAvgOptimal;
  }
  $(".sv_row").eq(idx).append(newElement);
  //$(".sv_row").eq(idx).append(newElement2);

  targetElement.eq(idx).prepend(newElement2);
  $(".sv_row").eq(idx).on("click", "*", function (event) {
    var $labels = $(event.target).parents(".btn.btn-default.btn-secondary");
    if (!$labels.length) return;
    $labels.addClass("active");
    $labels.prevAll().removeClass("active");
    $labels.nextAll().removeClass("active");
    var avg = calcAvgForView(idx);
    $("#custom-avg-input-".concat(idx)).val(avg.toFixed(2));

    // Get the actual avg from the values of the requirements
    latestActualAvg = $("#custom-avg-input-".concat(idx))[0].value;
    updateDiff();
  });

  // Get the optimal avg that the user provides
  document.getElementById("prospective-avg-input-".concat(idx)).addEventListener("click", function () {
    latestOptimalAvg = document.getElementById("prospective-avg-input-".concat(idx)).value;
    // Update the difference value between the user's optimal average and the actual average
    updateDiff();
    // Update the Target Prospective Average Ability rating value
    var lastTable = Array.from(document.querySelectorAll('table')).slice(-1)[0];
    var tbodyElement = lastTable.querySelector('tbody');
    var trElement = tbodyElement.querySelector('tr');
    var lastTdElement = Array.from(trElement.querySelectorAll('td')).slice(-1)[0];
    var divElement = lastTdElement.querySelector('div');
    // Make the Target Prospective Average Ability rating non clickable for the user
    divElement.className = ' disable-div';
    // Automatically click the Average value for Target Prospective
    divElement.getElementsByClassName('btn-group')[0].querySelectorAll('label')[updateOverallAvgOptimal() - 1].click();
    updateTargetOverallAccessDiff();
  });
};

/***
 * Updates the value of the difference between Target Prospective Average Ability 
 * and Overall Access Ability to Support the DBC
 */
function updateTargetOverallAccessDiff() {
  // Get overall access ability value
  var overallAccessAblity = $("#total-avg-input").val();
  // Get the target prospective value
  var targetProspectiveValue = overallAvgOptimal;
  // Update the difference value
  var newValue = overallAccessAblity - targetProspectiveValue;
  $("#overall-diff-target-ability").val(newValue.toFixed(2));
}
var createAvgElements = function createAvgElements(bcName, views) {
  views.forEach(function (view, idx) {
    createAvgElement(bcName.title, view, idx);
  });
};

/**
 * @param {Array} surveys
 * @param {Number} index
 */
function surveyRelated(surveys, index, go2Top) {
  var idx = index || 0;
  var animateToTop = go2Top || false;
  if (animateToTop) {
    var interval = setInterval(function () {
      var button = document.querySelector(".scroll-to-top");
      if (button) {
        button.click();
        clearInterval(interval);
      }
    }, 1);
  }
  var title = "eGovera";
  var pages = [{
    name: "Electronic identification",
    elements: [{
      name: "legal",
      title: "Legal View",
      type: "panel",
      elements: [{
        name: "eIdentification1",
        title: "eIdentification",
        type: "radiogroup",
        colCount: 4,
        choices: [{
          value: 5,
          text: "5"
        }, {
          value: 4,
          text: "4"
        }, {
          value: 3,
          text: "3"
        }, {
          value: 2,
          text: "2"
        }, {
          value: 1,
          text: "1"
        }]
      }]
    }]
  }];
  var surveyJSON = {
    title: title,
    pages: pages,
    showTitle: false
  };
  var isLast = idx === surveys.length - 1;
  var onCompleteFunc = isLast ? completeLastSurvey : completeNonLastSurvey;
  Survey.JsonObject.metaData.addProperty("questionbase", "tooltip");
  Survey.StylesManager.applyTheme("bootstrap");
  var survey = new Survey.Model(surveyJSON);
  survey.completeText = isLast ? "Complete" : "Next Survey";
  survey.onCompleting.add(onCompleteFunc);
  survey.showQuestionNumbers = "off";
  survey.onAfterRenderSurvey.add(function (sender) {
    var interval = setInterval(function () {
      var isLoading = survey.isLoading;
      if (isLoading) return;
      clearInterval(interval);
      setTimeout(function () {
        $surveyLoadingModal.modal("hide");
      }, 500);
    }, 10);
  });
  var optionsAfterRenderPage = "";
  survey.onAfterRenderPage.add(function (sender, options) {
    optionsAfterRenderPage = options;
    updateNavigation(options.page.visibleIndex);
    updateButtonsClickAbility(options.page.visibleIndex);

    // Implement the pre populate functionality 
    var valueBtns = document.getElementsByClassName("btn btn-default btn-secondary");
    var requirements = document.getElementsByClassName("req");
    var questionsObj = {};
    var surveyDataObj = {};

    // populate the questionObj
    // {requirement ID: [valueBtn1,....], .....}

    /*Comentado temporalmente para el desarrollo-MG
    let pos = 0;
    for (let i = 0; i < requirements.length; i++) {
      const plainID = requirements[i].innerText.split("*")[0];
      questionsObj[plainID] = [];
        for (let j = 0; j < 5; j++) {
          questionsObj[plainID].push(valueBtns[pos]);
          pos += 1;
        } 
    } */

    for (var _i = 0, _Object$entries = Object.entries(survey.data); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        view = _Object$entries$_i[0],
        valuesObj = _Object$entries$_i[1];
      for (var _i2 = 0, _Object$entries2 = Object.entries(valuesObj); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
          id = _Object$entries2$_i[0],
          ability = _Object$entries2$_i[1];
        id = getIDFromGeneratedQuestion(id).split(">")[2];
        ability = Object.values(ability)[0];
        if (id !== undefined) {
          surveyDataObj[id.split("-")[0].replace(" ", "")] = ability;
        }
      }
    }

    // Uncomment to autopopulate requirements
    // for (let i = 0; i < valueBtns.length;) {
    //   // populate random value
    //   // let rand = Math.floor(Math.random() * 5) + 1;
    //   // for(let j = 1; j <= 5; j++) {
    //   //   if((j + 1) % rand === 0) {
    //   //     valueBtns[i].click();
    //   //   }
    //   //   i += 1;
    //   // }
    //   // populate value 5
    //   if((i + 1) % 5 === 0) {
    //     valueBtns[i].click();
    //   }
    //   i += 1;
    // }

    // Populate requirement's value based on a previous value 
    for (var _i3 = 0, _Object$entries3 = Object.entries(questionsObj); _i3 < _Object$entries3.length; _i3++) {
      var _console, _console2, _console3, _console4, _console5;
      var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2),
        _id = _Object$entries3$_i[0],
        labelArray = _Object$entries3$_i[1];
      /* eslint-disable */(_console = console).log.apply(_console, _toConsumableArray(oo_oo("c05d3ae4_0", "id", _id)));
      /* eslint-disable */
      (_console2 = console).log.apply(_console2, _toConsumableArray(oo_oo("c05d3ae4_1", "labelArray", labelArray)));
      /* eslint-disable */
      (_console3 = console).log.apply(_console3, _toConsumableArray(oo_oo("c05d3ae4_2", "surveyDataObj", surveyDataObj)));
      /* eslint-disable */
      (_console4 = console).log.apply(_console4, _toConsumableArray(oo_oo("c05d3ae4_3", "questionObj", questionsObj)));
      /* eslint-disable */
      (_console5 = console).log.apply(_console5, _toConsumableArray(oo_oo("c05d3ae4_4", "selectedNonApplicableReqIDs", selectedNonApplicableReqIDs)));
      var hasActiveValue = false;
      for (var i = 0; i < labelArray.length; i++) {
        var _console6, _console7;
        /* eslint-disable */(_console6 = console).log.apply(_console6, _toConsumableArray(oo_oo("c05d3ae4_5", "label Array value", labelArray[i])));
        /* eslint-disable */
        (_console7 = console).log.apply(_console7, _toConsumableArray(oo_oo("c05d3ae4_6", "label Array value contains", labelArray[i].classList.contains('active'))));
        if (labelArray[i].classList.contains('active')) {
          hasActiveValue = true;
        }
      }
      var nonApplicableBtnId = _id.replace(" - ", "");
      nonApplicableBtnId = nonApplicableBtnId.replace(')"', "");
      _id.split("-")[0].replace(" ", ""), _readOnlyError("id");
      var found = false;
      for (var _i4 = 0; _i4 < selectedNonApplicableReqIDs.length; _i4++) {
        if (selectedNonApplicableReqIDs[_i4].includes(_id)) {
          var _console8;
          /* eslint-disable */(_console8 = console).log.apply(_console8, _toConsumableArray(oo_oo("c05d3ae4_7", "ASDF")));
          found = true;
        }
      }

      // if the requirement has no previous value, initialize it with the most recent
      if (hasActiveValue === false || found) {
        // let nonApplicableBtnId = id.replace(" - ", "");
        // nonApplicableBtnId = nonApplicableBtnId.replace(')"', "");
        // id = id.split("-")[0].replace(" ", "");
        if (_id in surveyDataObj) {
          // let found = false;
          // for (let i=0; i < selectedNonApplicableReqIDs.length; i++){
          //   if(selectedNonApplicableReqIDs[i].includes(id)){
          //     console.log("ASDF")
          //     found = true;
          //   }
          // }
          if (surveyDataObj[_id] === "NotApplicable" || found) {
            document.getElementById(nonApplicableBtnId).click();
            if (!selectedNonApplicableReqIDs.includes(nonApplicableBtnId)) {
              selectedNonApplicableReqIDs.push(nonApplicableBtnId);
            }
          } else {
            labelArray[surveyDataObj[_id] - 1].click();
          }
        }
      }
    }
    var interval = setInterval(function () {
      var questions = $(".sv_row");
      if (!questions) {
        return;
      }
      clearInterval(interval);
      addButtonsInNavigation();
      $("#access-controls .spinner-border").addClass("d-none");
      if (questions.length > 1) {
        var views = options.page.elements.map(function (element) {
          return element.fullTitle;
        }).map(function (html) {
          return html.match(/<b>([a-zA-Z ]+)<\/b>/);
        }).filter(Boolean).map(function (groups) {
          return groups[1];
        });
        var activeButtonTitles = buttonTitles[idx].filter(function (obj) {
          return obj.active;
        });
        createAvgElements(activeButtonTitles[options.page.visibleIndex - 1], views);

        //totalAvgAbbElement(activeButtonTitles[options.page.visibleIndex - 1]);
      }

      addCheckBoxInBCQuestion(survey, options, survey.currentPageNo === 0);
      updateProgressBar();
      $surveyLoadingModal.modal("hide");
      if (survey.currentPageNo !== 0) {
        if ($("#expand-error").length === 0) {
          var $message = createMessageForExpand();
          $("#surveyContainer form").prepend($message);
        }
      } else {
        if ($("#expand-error").length !== 0) {
          $("#expand-error").remove();
        }
        $("#dbcInstructions").modal("show");
      }
    }, 100);
  });
  survey.onMatrixCellValidate.add(function (sender, options) {
    if (options.columnName != "budget") return;
    var error = isValidBudget(options.value);
    options.error = error;
  });
  survey.onSettingQuestionErrors.add(function (sender, options) {
    if (options.errors.length === 0) return;
    try {
      var name = options.errors[0].errorOwner.textProcessor.name;
      if (!name) return;
      var questionID = getIDFromGeneratedQuestionForBB(name) + ")";
      var $questionSpan = $("span:contains(\"".concat(questionID, "\")"));
      var $parent = $questionSpan.parents(".sv_row");
      var $collapseButton = $parent.find("h5 button");
      if (!$collapseButton.hasClass("collapsed")) return;
      $collapseButton.click();
    } catch (e) {
      return;
    }
  });

  // survey.onValidatedErrorsOnCurrentPage.add(function (survey, options) {
  //   let pageHasErros =  options.errors.length !== 0;
  //   let windowHeight = $(window).height();
  //   if (!pageHasErros) return;

  //   const { questions } = options;
  //   const { questions: allQuestions } = survey.currentPage;

  //   allQuestions.forEach((question) => {
  //     const { id } = question;
  //     $(`#${id}-custom-alert`).remove();
  //   });

  //   questions.forEach((option) => {
  //     const $error = $("<div></div>")
  //       .addClass("alert alert-danger")
  //       .attr("id", `${option.id}-custom-alert`)
  //       .text("Please answer the question");

  //     $(`#${option.id}`).before($error);
  //   });

  //   $("#access-controls .spinner-border").addClass("d-none");
  //   $("html, body").animate(
  //     {
  //       scrollTop:
  //         $(".sv_qstn .has-error").first().offset().top - windowHeight / 2,
  //     },
  //     800
  //   );
  // });

  survey.onTextMarkdown.add(function (survey, options) {
    var str = converter.makeHtml(options.text);
    str = str.replace(/<p[^>]*>|<\/p>/g, "");
    options.html = str;
  });
  var myCss = {
    navigationButton: "btn btn-primary"
  };
  $("#surveyContainer").Survey({
    model: survey,
    onComplete: handleSurveyCompletion,
    css: myCss
  });
  survey.onCurrentPageChanging.add(function (sender, options) {
    $('.sv_next_btn').hide();
    if (!doAnimantion) return;
    options.allowChanging = false;
    document.getElementById("pageSelector").classList.add("d-none");
    $("#access-controls .spinner-border ").removeClass("d-none");
    $surveyLoadingModal.modal({
      backdrop: "static",
      keyboard: false
    });
    setTimeout(function () {
      doAnimantion = false;
      sender.currentPage = options.newCurrentPage;
      doAnimantion = true;
      document.getElementById("pageSelector").classList.remove("d-none");
    }, 500);
    animate("slideUp", 400);
  });
  survey.onCurrentPageChanged.add(function (sender) {
    $('.sv_next_btn').hide();
    animate("slideDown", 400);
    setTimeout(function () {
      updateProgressBar();
      $surveyLoadingModal.modal("hide");
    }, 400);
  });
  survey.onAfterRenderQuestion.add(function (sender, options) {
    if (sender.currentPageNo === 0) return;
    var $parent = $(options.htmlElement);
    var parentID = $parent.attr("id");
    var $titleDiv = $parent.find(">div:first-child h5");
    var $questionsDiv = $parent.find(">div:last-child");
    $questionsDiv.attr("id", parentID + "-question");
    $questionsDiv.addClass("collapse");
    var $button = $("<button></button>").attr("data-toggle", "collapse").attr("data-target", "#".concat(parentID, "-question")).attr("aria-expanded", "false").addClass("collapse-button collapsed");
    try {
      var label = $titleDiv.attr("aria-label");
      var category = label.split("<b>")[1].split("</b>")[0];
      //$(`#${parentID} table`).before(illustrativeExample(category));
    } catch (e) {}
    $titleDiv.prepend($button);
  });
  survey.onAfterRenderQuestionInput.add(function (sender, options) {
    var _document$getElementB;
    if (sender.currentPageNo === 0) return;
    if (options.question.fullTitle !== '<span style="display: none;">Ability to support the dBusCap </span>') return;
    var $text = $("<div><b>Extent to which the requirement is met by the As-Is Digital Business Capability</b></div>");
    var reqId = getIDFromGeneratedQuestionForBB(options.question.data.name).split(">")[2];
    // the - creates bug when used in id of html element button
    var abbId = reqId.split("-")[0].replace(" ", "");
    reqId = reqId.replace(" - ", "");
    var $applicable = $("<span title=\"By selecting this requirement as 'not applicable' one, it will not be considered in the overall assessed ability to support the digital business capability\">" + "<button class=\"non-applicable-button\" id=".concat(reqId, ">Not Applicable Requirement</button></span>"));
    $(options.htmlElement).prepend($text);
    if (nonApplicableReqs.includes(abbId)) {
      $(options.htmlElement).append($applicable);
      ;
    }

    // The functionality regarding the non applicable button
    (_document$getElementB = document.getElementById("".concat(reqId))) === null || _document$getElementB === void 0 || _document$getElementB.addEventListener('click', function () {
      // add or delete the reqId from the array
      if (selectedNonApplicableReqIDs.includes(reqId)) {
        // the user has unselected the non applicable button
        selectedNonApplicableReqIDs.splice(selectedNonApplicableReqIDs.indexOf(reqId), 1);
        // Unselect the value
        var labels = options.htmlElement.getElementsByTagName("div")[3].getElementsByTagName('label');
        for (var i = 0; i < labels.length; i++) {
          labels[i].classList.remove('hide');
          labels[i].classList.remove('active');
        }
      } else {
        // the user has selected the non applicable button
        selectedNonApplicableReqIDs.push(reqId);

        // Hide the selected requirement's value box
        var _labels = options.htmlElement.getElementsByTagName("div")[3].getElementsByTagName('label');
        for (var _i5 = 0; _i5 < _labels.length; _i5++) {
          _labels[_i5].classList.add('hide');
          // In case the requirment has no selected value
          // assigned the value one in order to pass the error test
          if (_i5 === 0) {
            _labels[0].click();
          }
        }
      }
      document.getElementById("".concat(reqId)).classList.toggle("non-applicable-activated");
      options.htmlElement.getElementsByTagName("div")[1].classList.toggle("hide");

      // Calculate the avg without the selected non applicable requirement
      var allViewsAvgInputs = document.getElementsByClassName('view-avg');
      for (var _i6 = 0; _i6 < allViewsAvgInputs.length; _i6++) {
        var _avg = calcAvgForView(0);
        $("#custom-avg-input-".concat(_i6)).val(_avg.toFixed(2));
        document.getElementById("custom-avg-input-".concat(_i6)).value = _avg.toFixed(2);
        // Update the difference gap
        var latestOptimalAvg = document.getElementById("prospective-avg-input-".concat(_i6)).value;
        var latestActualAvg = $("#custom-avg-input-".concat(_i6))[0].value;
        document.getElementById("ability-difference-value-".concat(_i6)).value = (latestActualAvg - latestOptimalAvg).toFixed(2);
      }
      // Update the final average
      var avg = totalCalcAbbAvg();
      $("#total-avg-input").val(avg.toFixed(2));
      updateTargetOverallAccessDiff();
    });
  });

  //createSaveWorkButton(survey);
  createShowInstructionsButton(survey);
  //createPreviousSurvey(surveys, survey, idx);

  /**
   * Funtionality that will execute if this survey is the last of all surveys ( which is based on policies)
   */
  function completeLastSurvey(sender, options) {
    if (!doAnimantion) return;
    $('.sv_next_btn').hide();
    convertResults(survey);
    options.allowComplete = true;
    setTimeout(function () {
      doAnimantion = false;
      doAnimantion = true;
    }, 50);
    animate("slideUp", 400);
    animate("slideDown", 200);
  }

  /**
   * Funtiality that will execute if this survey is not the last of all surveys ( which is based on policies)
   */
  function completeNonLastSurvey(sender, options) {
    $surveyLoadingModal.modal({
      backdrop: "static",
      keyboard: false
    });
    options.allowComplete = false;
    saveStateMiddleware(sender, true);
    convertResults(sender);
    surveyRelated(surveys, idx + 1, true);
  }
  var surveyTitles = surveys.map(function (surveyObj) {
    return surveyObj.title;
  });
  $('.sv_next_btn').hide();
  setupNavigator(survey, surveyTitles, idx);
  if (currentState[title]) {
    var loadedData = currentState[title].data;
    for (var domain in loadedData) {
      if (domain.indexOf("BC") === -1) continue;
      var dBusCaps = loadedData[domain];
      for (var dBusCap in dBusCaps) {
        var dBusCapID = getIDFromGeneratedQuestion(dBusCap);
        var _selectedBC = dBusCaps[dBusCap].selectedBC;
        if (!_selectedBC) {
          $("[dbuscap-id=".concat(dBusCapID)).addClass("d-none");
        }
        setVisibilitySurveyPageBasedDBCID(survey, dBusCapID, _selectedBC);
      }
    }
    survey.currentPageNo = currentState[title].currentPageNo;
    survey.data = currentState[title].data;
  }
  if (doLoadState) {
    loadState(survey);
  }
}

/** Creates a div to indicate to click on the arrow to expand/hide questions in each section. */
function createMessageForExpand() {
  var html = "Please click on the arrow <span class=\"down-arrow\"></span> to show/ hide the questions in each section";
  var $div = $("<div style=\"margin-bottom: 0 !important\"></div>").addClass("mt-3 alert alert-success").attr("id", "expand-error").html(html);
  return $div;
}

/**
 * Create the the navigation for dBusCaps with the ability to click
 */
// function setupNavigationBar(survey, idx) {
//   const options = [...buttonTitles[idx]];
//   const selector = document.getElementById("pageSelector");
//   selector.innerHTML = "";

//   options.unshift({ id: 0, title: "Digital Business Capabilities Overview" });

//   const length = options.length;

//   for (let i = 0; i < length; i++) {
//     let option = document.createElement("button");

//     option.addEventListener("click", function () {
//       survey.currentPageNo = i;
//       $("#access-controls .spinner-border").removeClass("d-none");
//     });

//     option.setAttribute("dBusCap-id", options[i].id);

//     option.innerHTML = options[i].title;
//     option.classList.add("progress-bar-buttons");
//     // Highlight the first progress bar button
//     if (i === 0) option.classList.add("progress-bar-buttons-current-active");

//     selector.appendChild(option);
//   }

//   updateButtonsClickAbility(0);
// }

function setupNavigationBar(survey, idx) {
  var options = _toConsumableArray(buttonTitles[idx]);
  var selector = document.getElementById("pageSelector");
  selector.innerHTML = "";
  options.unshift({
    id: 0,
    title: "Digital Business Capabilities Overview"
  });
  var length = options.length;
  var sliderContainer = document.createElement('div');
  sliderContainer.classList.add('slider-container');
  var slider = document.createElement('div');
  slider.classList.add('slider');
  var _loop2 = function _loop2(i) {
    var option = document.createElement("button");
    option.addEventListener("click", function () {
      survey.currentPageNo = i;
      $("#access-controls .spinner-border").removeClass("d-none");
    });
    option.setAttribute("dBusCap-id", options[i].id);
    option.innerHTML = options[i].title;
    option.classList.add("progress-bar-buttons");
    // Highlight the first progress bar button
    if (i === 0) option.classList.add("progress-bar-buttons-current-active");
    slider.appendChild(option);
  };
  for (var i = 0; i < length; i++) {
    _loop2(i);
  }

  // Agregar el slider al contenedor
  sliderContainer.appendChild(slider);

  // Agregar el contenedor del slider al selector
  selector.appendChild(sliderContainer);

  // Obtén los elementos relevantes del DOM
  var sliderElement = sliderContainer.querySelector('.slider');
  var sliderItems = slider.querySelectorAll('button');

  // Inicializa algunas variables
  var currentIndex = 0;
  var isTransitioning = false;

  // Calcula la cantidad de desplazamiento necesario para mover un botón y medio
  var slideWidth = sliderItems[0].offsetWidth;
  var displacement = -1 * (slideWidth * 1.5);

  // Función para mover el slider a una sección específica
  function goToSection(index) {
    if (index < 0 || index >= sliderItems.length || isTransitioning) {
      return;
    }
    isTransitioning = true;

    // Calcula el desplazamiento actualizado en base al índice
    var updatedDisplacement = displacement * (index + 1); // Añade 1 al índice

    // Aplica la transformación de desplazamiento con una animación suave
    sliderElement.style.transition = "transform 0.3s ease-in-out";
    sliderElement.style.transform = "translateX(".concat(updatedDisplacement, "px)");

    // Actualiza el índice actual
    currentIndex = index;

    // Restaura la transición después de que termine la animación
    setTimeout(function () {
      sliderElement.style.transition = "";
      isTransitioning = false;
    }, 300);
  }

  // Escucha los eventos de teclado para navegar a través del slider
  document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
      goToSection(currentIndex - 1);
    } else if (event.key === 'ArrowRight') {
      goToSection(currentIndex + 1);
    }
  });

  // Estilos CSS adicionales
  sliderContainer.style.width = "1200px"; // Ajusta el ancho del contenedor según tus necesidades
  sliderItems.forEach(function (item) {
    item.style.height = "100px"; // Ajusta la altura de los botones según tus necesidades
  });

  // Animación al cambiar de sección
  sliderElement.style.transition = "transform 0.3s ease-in-out";

  // Crear contenedor para las flechas de navegación
  // const arrowsContainer = document.createElement('div');
  // arrowsContainer.classList.add('slider-arrows-container');

  // // Agregar flechas de navegación
  // const sliderArrowLeft = document.createElement('button');
  // sliderArrowLeft.classList.add('slider-arrow', 'slider-arrow-left');
  // sliderArrowLeft.innerHTML = '&lt;';

  // const sliderArrowRight = document.createElement('button');
  // sliderArrowRight.classList.add('slider-arrow', 'slider-arrow-right');
  // sliderArrowRight.innerHTML = '&gt;';

  // // Agregar flechas de navegación al contenedor del carrusel
  // arrowsContainer.appendChild(sliderArrowLeft);
  // arrowsContainer.appendChild(sliderArrowRight);

  // // Agregar contenedor de flechas de navegación antes del slider
  // sliderContainer.insertAdjacentElement('beforebegin', arrowsContainer);

  // // Navegación a través de los botones de flecha
  // sliderArrowLeft.addEventListener('click', () => {
  //   goToSection(currentIndex - 1);
  // });

  // sliderArrowRight.addEventListener('click', () => {
  //   goToSection(currentIndex + 1);
  // });

  // Resto del código necesario para el slider
  // ...
}

/**
 * Create the first navigation that will display all the policies
 */
function createSurveyTitles(surveyTitles, idx) {
  var selector = document.getElementById("survey-titles");
  selector.innerHTML = "";
  var length = surveyTitles.length;
  surveyTitles.forEach(function (surveyTitle, index) {
    var option = document.createElement("div");
    var optionText = document.createElement("p");
    optionText.innerText = surveyTitle;
    var imageClass = surveyTitle.toLowerCase();
    imageClass = imageClass.split(" ").join("-");
    var image = document.createElement("div");
    image.className = "policy-images ".concat(imageClass, "-policy-images");
    option.appendChild(image);
    option.appendChild(optionText);
    selector.appendChild(option);
    option.className = "progress-bar-divs ";
    // The previous completed primary progress bar buttons have no red borders
    if (index < idx) option.classList.add("progress-bar-divs-active");
    // The currently active primary progress bar button has red borders
    if (index === idx) option.classList.add("progress-bar-divs-current-active");
    option.style.width = 98 / length + "%";
    if (length === 1) option.style.width = "100%";
  });
}

/**
 * Create the navigation above the survey with section about the polies and also dBusCaps
 * @param {Object} survey
 */
function setupNavigator(survey, surveyTitles, idx) {
  setupNavigationBar(survey, idx);
  createSurveyTitles(surveyTitles, idx);
}
document.querySelector("#checkinForm").addEventListener("submit", function (event) {
  event.preventDefault();
  validateForm();
});

/**
 * Validate the information of the form and takes dynamicall the checkboxed that are selected
 */
function validateForm() {
  return (_validateForm = _validateForm || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var form, response;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          document.querySelector(".spinner-border").classList.remove("d-none");
          form = document.getElementById("checkinForm");
          if (!(form.checkValidity() === false)) {
            _context2.next = 9;
            break;
          }
          event.preventDefault();
          event.stopPropagation();
          form.classList.add("was-validated");
          document.querySelector(".spinner-border").classList.add("d-none");
          _context2.next = 24;
          break;
        case 9:
          $("#checkboxes input").each(function () {
            var checked = $(this).is(":checked");
            var policy = $(this).attr("id").split("-").slice(0, -1).map(function (temp) {
              return capitalize(temp);
            }).join(" ");
            checkboxes = _objectSpread(_objectSpread({}, checkboxes), {}, _defineProperty({}, policy, checked));
          });
          fullName = document.getElementById("validationCustom01").value;
          organisation = document.getElementById("validationCustom03").value;
          email = document.getElementById("validationCustom04").value;
          country = document.getElementById("validationCustom02").value;
          if (!Object.values(checkboxes).every(function (v) {
            return v === false;
          })) {
            _context2.next = 20;
            break;
          }
          event.preventDefault();
          event.stopPropagation();
          form.classList.add("was-validated");
          _context2.next = 24;
          break;
        case 20:
          _context2.next = 22;
          return _requestSurvey__WEBPACK_IMPORTED_MODULE_1__["default"];
        case 22:
          response = _context2.sent;
          callBackForRequest(response);
        case 24:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }))).apply(this, arguments);
}
function callBackForRequest(response) {
  createSurvey(response);
  $("#initForm").collapse("hide");
  $("#surveyCard").collapse("show");
}

/**
 * Helper Function
 */
function bcFormaterFunc(dbusOfPolicy) {
  return dbusOfPolicy.id + ") <b>" + dbusOfPolicy.name + "</b><br><p style='font-size:13px'><i>" + dbusOfPolicy.description + "</i></p>";
}
var bbLinks = function bbLinks(area) {
  var links = {
    "European Legal Act": "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fLegalAct",
    "National Legal Act": "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fLegalAct",
    "Legal Agreement": "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fLegalInteroperabilityAgreement",
    Provider: "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fPublicServiceProvider",
    Consumer: "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fPublicServiceConsumer",
    "Business Information": "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fBusinessInformation",
    "Digital Service Delivery Model": "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fServiceDeliveryModel",
    "Organisational Agreement": "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fOrganisationalAgreement",
    Representation: "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fRepresentation",
    Ontology: "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fOntology",
    "Data Policy": "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fDataPolicy",
    "Semantic Agreement": "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fSemanticAgreement",
    "Shared Knowledge Base": "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fSharedKnowledgeBase",
    Interfaces: "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fMachineToMachineInterface",
    "Technical Agreement": "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fTechnicalAgreement",
    "Interoperable European Solution": "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fInteroperableEuropeanSolutionService",
    "Digital Service Infrastructure": "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fDigitalServiceInfrastructure",
    "Hosting and Networking Infrastructure": "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fDigitalServiceInfrastructure",
    "Shared Platform": "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fSharedPlatform",
    "Service Delivery Model": "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fServiceDeliveryModel",
    "Data Mapping": "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fDataMapping",
    "Legal Agreements / International Treaties": "https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fLegalInteroperabilityAgreement"
  };
  if (area in links) {
    return "<a target=\"_blank\" href=\"".concat(links[area], "\">").concat(area, "</a>");
  }
  return area;
};

/**
 * Helper Function
 */
var bbFormaterFunc = function bbFormaterFunc(bb, dBusCapID) {
  var baSentence;
  var explanatorySentence = "";
  var dpsWords = [];
  if (dBusCapID === "BABC5") {
    explanatorySentence = bb.artificialIntelligence;
  } else if (dBusCapID === "BABC6") {
    explanatorySentence = bb.digitalCommunication;
  } else if (dBusCapID === "BABC9") {
    explanatorySentence = bb.dataManagement;
  } else if (dBusCapID === "BABC12") {
    explanatorySentence = bb.caseWorkflowManagement;
  } else if (dBusCapID === "BABC1") {
    explanatorySentence = bb.electronicIdentification;
  } else if (dBusCapID === "HDBC01") {
    explanatorySentence = bb.consultation;
  } else if (dBusCapID === "HDBC02") {
    explanatorySentence = bb.laboratory;
  } else if (dBusCapID === "HDBC04") {
    explanatorySentence = bb.prescription;
  } else if (dBusCapID === "HDBC07") {
    explanatorySentence = bb.medicalImaging;
  } else if (dBusCapID === "HDBC16") {
    explanatorySentence = bb.secondaryUse;
  } else if (dBusCapID === "HDBC06") {
    explanatorySentence = bb.electronicHealth;
  }
  if ((bb.policy === "business agnostic" || bb.policy === "health") && explanatorySentence !== "") {
    baSentence = "\n      <br>\n      ".concat(explanatorySentence, "\n      </br>\n    ");
    // `
    // <br>
    // <u> 
    // <a href="https://joinup.ec.europa.eu/taxonomy/term/http_e_f_fdata_ceuropa_ceu_fdr8_fDigitalBusinessCapability" target="_blank">
    // digital business capability</a> 
    // because</u> ${explanatorySentence}
    // <br>`;
  } else {
    baSentence = "";
  }

  // bold the word should or might
  if (baSentence !== "") {
    var baSentenceArr = baSentence.split(' ');
    var baSentenceArr2 = baSentenceArr.map(function (element) {
      if (element === 'might') {
        return "<b>might</b>";
      } else if (element === 'should') {
        return '<b>should</b>';
      }
      return element;
    });
    baSentence = baSentenceArr2.join(' ');
  }
  var botonPromise = createButtonInfoAsync(bb, dBusCapID);
  extractWordsDPS(baSentence, dpsWords);
  extractDelegationDPS(baSentence, dpsWords);
  botonPromise.then(function (_ref3) {
    var button = _ref3.button,
      informacionDiv = _ref3.informacionDiv;
    // Agregar elementos al DOM u otras operaciones
    document.body.appendChild(button);
    document.body.appendChild(informacionDiv);
  }).catch(function (err) {
    var _console9;
    return (/* eslint-disable */(_console9 = console).log.apply(_console9, _toConsumableArray(oo_oo("c05d3ae4_8", err)))
    );
  });
  return "<div id=\"".concat(bb.id, " - ").concat(dBusCapID, "\">\n          <div id=\"").concat(bb.id, " -- ").concat(dBusCapID, "\">     \n          <p><b class=\"req\">Requirement: </b>").concat(bb.abb, " <b>").concat(bb.specificQuestion, "</b></p><br>\n          </div>\n          <br>\n          <br>\n          <p>To what extent your AS-IS Digital Public Services (DPS) below meet this requirement?\n          <br>\n          <div class=\"survContainer\">\n          <br>\n          ").concat(checksSurvey(dpsWords), "\n          <br>\n          </div>\n          <br>\n          </div>\n          ");
};

/**
 * Coge el parametro baSentence y lo recorta para quedarse unicamente con la palabra "Delegation of Power" si esta va seguida de la palabra "DPS", el resto de 
 * palabras no las añade al array.
 * @param {*} baSentence 
 * @returns 
 */
function extractDelegationDPS(baSentence, dpsWords) {
  var regex = /DPS\s(.*?)\sDPS/g;
  var matches = _toConsumableArray(baSentence.matchAll(regex));
  var arrayPalabras = matches.map(function (match) {
    return match[1];
  });
  if (arrayPalabras.length === 1 && arrayPalabras[0] === "Delegation of Power") {
    arrayPalabras.forEach(function (word) {
      dpsWords.push(word);
    });
    return arrayPalabras;
  } else {
    return [];
  }
}

/**
 * Coge el parametro baSentence y lo recorta para las palabras previas a la palabra DPS, con el condicional de que si es "Power", no lo añada al array.
 * @param {*} baSentence 
 * @returns 
 */

function extractWordsDPS(baSentence, dpsWords) {
  var regex = /(?:^|\s)(\S+)\sDPS/g;
  var matches = _toConsumableArray(baSentence.matchAll(regex));
  var arrayPalabras = matches.map(function (match) {
    return match[1];
  });
  var indexToRemove = arrayPalabras.indexOf("Power");
  if (indexToRemove !== -1) {
    arrayPalabras.splice(indexToRemove, 1);
  }
  arrayPalabras.forEach(function (word) {
    dpsWords.push(word);
  });
  return arrayPalabras;
}

//Function for add checkbox for every DPS element
function checksSurvey(array) {
  var dpsInfo = [];
  var dpsId = 0;
  array.forEach(function (element) {
    dpsInfo.push("\n      <div class=\"additional-comment-container\">\n        <input type=\"checkbox\" id=\"checkbox-".concat(dpsId, "\" class=\"dps-checkbox\" checked=\"true\">\n        <label>").concat(element, "</label>\n        <div class=\"rating-container\" id=\"rating").concat(dpsId, "\">").concat(addValoration(element), "</div>\n        <div class=\"na-container\" id=\"na").concat(dpsId, "\" style=\"display:none;\"><label class=\"naLabel\">Not Applicable</label></div>\n        <input type=text class=\"additional-comments-input\" placeholder=\"Additional Comments:\">\n      </div>\n    "));
    dpsId = dpsId + 1;
  });
  dpsInfo.push("\n  \n  <div>\n    <button id=\"addDpsButton\" class=\"btn-primary\">Add DPS</button>\n  </div>  \n");
  return dpsInfo.join('');
}
function addValoration(element) {
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("rating-button")) {
      var buttons = event.target.parentElement.querySelectorAll(".rating-button");
      buttons.forEach(function (button) {
        return button.classList.remove("selected");
      });
      event.target.classList.add("selected");
      var $svRow = $(event.target).closest(".sv_row");
      if ($svRow.length > 0) {
        var rowIndex = $svRow.index();
        var avg = calcAvgForView(rowIndex);
        $("#custom-avg-input-".concat(rowIndex - 1)).val(avg.toFixed(2));
      } else {
        var _console10;
        /* eslint-disable */(_console10 = console).log.apply(_console10, _toConsumableArray(oo_oo("c05d3ae4_9", "Parent element with .sv_row class not found.")));
      }
    }
  });
  $(document).on('change', '.dps-checkbox', function () {
    var parentDiv = $(this).closest('.additional-comment-container');
    var ratingContainer = parentDiv.find('.rating-container');
    var naContainer = parentDiv.find('.na-container');
    var naCheckbox = naContainer.find('input[type="checkbox"]');
    if ($(this).is(':checked')) {
      ratingContainer.show();
      naContainer.hide();
      naCheckbox.prop('checked', false);
    } else {
      ratingContainer.hide();
      naContainer.show();
      naCheckbox.prop('checked', true);
    }
  });
  return "\n      <div class=\"rating-buttons\">\n        <button type=\"button\" class=\"rating-button\" id=\"button0\" value=\"0\">0</button>\n        <button type=\"button\" class=\"rating-button\" id=\"button1\" value=\"1\">1</button>\n        <button type=\"button\" class=\"rating-button\" id=\"button2\" value=\"2\">2</button>\n        <button type=\"button\" class=\"rating-button\" id=\"button3\" value=\"3\">3</button>\n        <button type=\"button\" class=\"rating-button\" id=\"button4\" value=\"4\">4</button>\n        <button type=\"button\" class=\"rating-button\" id=\"button5\" value=\"5\">5</button>\n      </div>\n  ";
}
function createButtonInfoAsync(_x, _x2) {
  return (_createButtonInfoAsync = _createButtonInfoAsync || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(bb, dBusCapID) {
    var button;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          // Creamos el botón dinámicamente
          button = document.createElement("button");
          button.classList.add("btn-primary");
          button.style.marginTop = "10px";
          button.textContent = "Show Additional Information";

          // Esperamos a que se cree el div con el id bb.id + " - " + dBusCapID
          _context3.next = 6;
          return new _Promise(function (resolve) {
            var intervalId = setInterval(function () {
              var divBB = document.getElementById("".concat(bb.id, " - ").concat(dBusCapID));
              var reqDiv = document.getElementById("".concat(bb.id, " -- ").concat(dBusCapID));
              if (divBB) {
                clearInterval(intervalId);
                // Creamos el div "informacion" dinámicamente
                var informacionDiv = document.createElement("div");
                informacionDiv.textContent = "-EIRA Stereotype: <<eira:".concat(bb.area, ">>");
                informacionDiv.style.marginTop = "15px";
                informacionDiv.style.display = "none"; // Inicialmente oculto

                // Añadimos un manejador de eventos para cuando se haga clic en el botón
                button.addEventListener("click", function () {
                  // Cambiamos la visibilidad del div "informacion" al hacer clic
                  informacionDiv.style.display = informacionDiv.style.display === "none" ? "block" : "none";

                  // Cambiar el texto del botón según la visibilidad del div "informacion"
                  if (informacionDiv.style.display === "none") {
                    button.textContent = "Show Additional Information";
                  } else {
                    button.textContent = "Hide Additional Information";
                  }
                });
                // Agregamos el botón al final del div con el ID bb.id + " - " + dBusCapID
                reqDiv.append(button);

                // Agregamos el div de información al final del div con el ID bb.id + " - " + dBusCapID
                reqDiv.append(informacionDiv);
                resolve();
              }
            }, 100); // Verificar cada 100ms si el div se ha creado
          });
        case 6:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }))).apply(this, arguments);
}
/**
 * Preparing the question for the survey
 */
function createSurvey(response) {
  renderSurvey(response);
}
function renderSurvey(response) {
  var title = "Business Agnostic Assessment";
  var pages = createSurveyPages(response);
  var surveyJSON = {
    title: title,
    pages: pages,
    pageNextText: "Next",
    pagePrevText: "Previous",
    completeText: "Complete",
    showProgressBar: "top",
    showQuestionNumbers: "off",
    showTOC: true
  };

  //Survey.JsonObject.metaData.addProperty("questionbase", "tooltip");
  Survey.StylesManager.applyTheme("defaultV2");
  var survey = new Survey.Model(surveyJSON);
  survey.autoSave = true;
  survey.onCurrentPageChanged.add(function (sender, options) {
    if (sender.currentPageNo === 0) {
      // Si es la primera página
      sender.pageNextText = "Submit";
    } else {
      sender.pageNextText = "Next"; // Restablecer el texto a "Next" para las demás páginas
    }
  });

  survey.onUpdateQuestionCssClasses.add(function (_, options) {
    var classes = options.cssClasses;
    if (options.question.name.includes('REQUIREMENT')) {
      classes.root = 'custom-question-class';
    }
  });
  survey.onAfterRenderQuestion.add(function (sender, options) {
    if (options.question.name.includes('REQUIREMENT')) {
      var index = parseInt(options.question.name.split('-').pop());
      var abb = abbList[index];

      // Añadir botón "Show More"
      options.htmlElement.innerHTML += "<button class=\"expand-btn\">Show More</button>";

      // Añadir div oculto para información adicional
      options.htmlElement.innerHTML += "\n              <div class=\"hidden-info\">\n                  ".concat(abb.Rationale || 'TESTING ADDITIONAL INFO BUTTON', "\n              </div>\n              <style>\n                  .hidden-info {\n                      display: none;\n                  }\n              </style>\n          ");

      // Vincular evento al botón
      var expandBtn = options.htmlElement.querySelector('.expand-btn');
      expandBtn.addEventListener('click', function () {
        var hiddenInfo = options.htmlElement.querySelector('.hidden-info');
        if (hiddenInfo.style.display === 'none') {
          hiddenInfo.style.display = 'block';
        } else {
          hiddenInfo.style.display = 'none';
        }
      });
    }
  });

  //Pours the survey data of a previously exported survey into the Survey object
  survey.data = currentState.data;
  $("#surveyCard").Survey({
    model: survey
  });

  //survey.completeText = isLast ? "Complete" : "Next Survey";

  //survey.onCompleting.add(completeLastSurvey(survey));

  createSaveWorkButton(survey);
  createShowInstructionsButton(survey);
}
function createSurveyPages(response) {
  var pages = [];
  if (response.length >= 3) {
    var _abbList = response[0];
    var dbcList = response[1];
    var responses = response[3];
    var initialPage = {
      name: 'Strategic Fit',
      elements: []
    };
    initialPage.elements.push({
      type: 'panel',
      name: 'instruction-panel',
      elements: [{
        type: 'html',
        html: "\n          <div class=\"instructionPanel\" style=\"font-size: 30px;\"><b>Please select the Digital Business Capabilities (DBC) to be assessed and indicate the National Digital Strategic Fit (0 lowest,  5 highest)</b>\n          <div class=\"tooltip-container\">\n              <i class=\"fa fa-question-circle text-primary\"></i>\n              <div class=\"tooltip-content\">\n              It reports the strategic priority assigned to the digital business capability by the national digital agenda of the country.\n              </div>\n          </div>\n          </div>"
      }]
    });
    dbcList.forEach(function (dbc) {
      var radioIndex = 0;
      initialPage.elements.push({
        type: 'panel',
        name: "".concat(dbc.Name, " - Panel"),
        elements: [{
          type: 'checkbox',
          name: "".concat(dbc.Name, " - Include"),
          title: " ",
          choices: [{
            value: "Include",
            text: dbc.Name
          }]
        }, {
          type: 'radiogroup',
          name: "".concat(dbc.Name, " - Rating"),
          title: " ",
          description: dbc.Description,
          choices: [{
            value: 0,
            text: "0"
          }, {
            value: 1,
            text: "1"
          }, {
            value: 2,
            text: "2"
          }, {
            value: 3,
            text: "3"
          }, {
            value: 4,
            text: "4"
          }, {
            value: 5,
            text: "5"
          }],
          colCount: 5
        }]
      });
      radioIndex++;
    });
    pages.push(initialPage);
    //Adds "elements" property to the DBCs so to fill it when processing the ABB list
    dbcList.forEach(function (dbc, index, array) {
      dbc.elements = addViewsToDbc();
      array[index] = dbc;
    });
    var dpsList = response[2];

    //ABB elements are added to the DBC list so to create the panel structure needed by SurveyJS
    var index = 0;
    _abbList.forEach(function (abb) {
      abb.DBCs.forEach(function (abbDbc) {
        dbcList.filter(function (dbc) {
          return dbc.ID == abbDbc;
        }).forEach(function (dbc) {
          dbc.elements.forEach(function (element, dbcIndex, dbcElements) {
            if (element.name == abb.View) {
              if (abb.View === "Expected Public Value & Estimated Budget") {} else {
                // Contenido HTML
                // let htmlContent = {
                //     type: "html",
                //     html: "<strong>To what extent the AS-IS Digital Public Services below meet the requirement?</strong>"
                // };
                // Información adicional
                var additionalInfo = {
                  name: dbc.Name.concat(' - ', abb.View, ' - Additional-Info'),
                  type: "panel",
                  title: "Additional Information",
                  state: "collapsed",
                  elements: [{
                    type: "html",
                    html: abb.Rationale || ''
                  }]
                };
                // Requisito
                var newRequirement = {
                  name: dbc.Name.concat(' - ', abb.View, '-', index++),
                  title: 'REQUIREMENT: '.concat(abb.Architecture_Building_Block),
                  description: abb.Description,
                  type: "panel",
                  state: "collapsed",
                  elements: [additionalInfo],
                  cssClass: "custom-panel-class"
                };
                Array.prototype.push.apply(newRequirement.elements, extractDpsFromDbc(dbc, dpsList, _abbList));
                element.elements.push(newRequirement);
              }
              dbcElements[dbcIndex] = element;
            }
          });
        });
      });
    });

    //Add all elements to the survey pages
    dbcList.forEach(function (dbc) {
      var htmlTitleElement = {
        type: "html",
        html: "<h3 class=\"dbcTitle\" style=\"font-size:45px;\"><a href=\"".concat(dbc.ID, "\">DBC  ").concat(dbc.Name, "</a></h3>\n            <p style=\"font-size:20px;\">The DBC ").concat(dbc.Description, "</p>")
      };
      pages.push({
        name: dbc.Name,
        visibleIf: "{".concat(dbc.Name, " - Include} contains 'Include'"),
        elements: [htmlTitleElement].concat(_toConsumableArray(dbc.elements)),
        description: " "
      });
    });
  } else {
    document.querySelector("#previous-work-error").classList.remove("d-none");
    return;
  }
  return pages;
}
function addViewsToDbc() {
  var surveyViews = [{
    name: "Legal",
    title: "Legal View",
    type: "panel",
    state: "collapsed",
    elements: [],
    cssClass: "custom-view-class"
  }, {
    name: "Organisational",
    title: "Organisational View",
    type: "panel",
    state: "collapsed",
    elements: [],
    cssClass: "custom-view-class"
  }, {
    name: "Semantic",
    title: "Semantic View",
    type: "panel",
    state: "collapsed",
    elements: [],
    cssClass: "custom-view-class"
  }, {
    name: "Technical - Application",
    title: "Technical - Application View",
    type: "panel",
    state: "collapsed",
    elements: [],
    cssClass: "custom-view-class"
  }, {
    name: "Technical - Infrastructure",
    title: "Technical - Infrastructure View",
    type: "panel",
    state: "collapsed",
    elements: [],
    cssClass: "custom-view-class"
  }, {
    name: "Expected Public Value & Estimated Budget",
    title: "Expected Public Value & Estimated Budget",
    type: "panel",
    state: "collapsed",
    elements: [],
    cssClass: "custom-view-class"
  }];
  return surveyViews;
}
function extractDpsFromDbc(DBC, DpsList, abbList) {
  var scoreIndex = 0;
  var processedDps = [];
  var scoreNames = [];
  var specificABB = abbList.find(function (abb) {
    return abb.DBCs.includes(DBC.ID);
  });
  if (!specificABB) {
    console.error('ABB específico no encontrado');
    return [];
  }
  DBC.Digital_Public_Services.forEach(function (dbcDps) {
    var extractedDps = DpsList.filter(function (dps) {
      return dps.ID == dbcDps.ID;
    })[0];
    var scoreName = DBC.Name.concat(' - ', extractedDps.Name, scoreIndex, ' - Score');
    scoreNames.push("".concat(scoreName));
    processedDps.push({
      name: "dpsQuestion-" + scoreIndex,
      type: "html",
      html: "<strong>To what extent the AS-IS Digital Public Service ".concat(extractedDps.Name, " below meet the requirement?</strong>")
    });
    processedDps.push({
      name: "dpsLink",
      type: "html",
      html: "<div class=\"dpsInfo\" ><b><p style=\"font-size:20px;\">DPS <a style=\"font-size:20px;\" href=\"".concat(extractedDps.ID, "\">").concat(extractedDps.Name, "</a></p></b><p>").concat(extractedDps.Description, "</p></div>")
    }), processedDps.push({
      name: scoreName,
      title: " ",
      type: "radiogroup",
      showNoneItem: true,
      noneText: "Not Applicable",
      colCount: 0,
      choices: [{
        value: 0,
        text: "0"
      }, {
        value: 1,
        text: "1"
      }, {
        value: 2,
        text: "2"
      }, {
        value: 3,
        text: "3"
      }, {
        value: 4,
        text: "4"
      }, {
        value: 5,
        text: "5"
      }]
    }, {
      name: DBC.Name.concat(' - ', extractedDps.Name, ' - Comments'),
      title: "Additional Comments",
      type: "comment",
      placeHolder: "Enter your comments here...",
      rows: 2,
      cols: 20
    });
    scoreIndex++;
  });
  processedDps.push({
    name: DBC.Name.concat(' - Summary'),
    type: "html",
    html: "<h6>Requirement ".concat(specificABB.Architecture_Building_Block, " Assessment Summary</h6>")
  });
  var sumScores = scoreNames.map(function (score) {
    return "(iif({".concat(score, "} = \"none\" or {").concat(score, "} = null, 0, {").concat(score, "}))");
  }).join(" + ");
  var divisor = scoreNames.length;
  var expressionString = "(".concat(sumScores, ") / ").concat(divisor);
  processedDps.push({
    name: DBC.Name.concat(' - Total Score'),
    type: "expression",
    title: "The overall assessed ability to support the digital business capability " + DBC.Name + " is: ",
    expression: expressionString,
    visible: true
  });
  processedDps.push({
    name: DBC.Name.concat(' - Target Prospective Ability'),
    type: "text",
    inputType: "range",
    title: "Please, indicate the Target Prospective Ability to support the Digital Business Capability - Legal requirements (0-5):",
    min: 0,
    max: 5,
    step: 1,
    defaultValue: 0,
    visible: true
  });
  processedDps.push({
    name: DBC.Name.concat(' - Gap Difference'),
    type: "expression",
    title: "Therefore, the gap between the Target Prospective Average Ability and the Overall Assessed Ability to support the Digital Business Capability is: ",
    expression: "{".concat(DBC.Name, ' - Total Score', "} - {", DBC.Name, ' - Target Prospective Ability', "}"),
    visible: true
  });
  return processedDps;
}
function loadState(survey) {
  var title = survey.title;
  if (currentState[title]) {
    var data = currentState[title].data || {};
    survey.data = data;
    survey.currentPageNo = currentState[title].currentPageNo;
    for (var bc in data) {
      if (bc.indexOf("BC") === -1) continue;
      var questions = data[bc];
      for (var question in questions) {
        var id = getIDFromGeneratedQuestion(question);
        selectedBC[id] = questions[question].selectedBC;
        changeActiveStateAtButtonsTitles(id, selectedBC[id]);
      }
    }
  }
}

/**
 * Helper function for saveStateMiddleware function
 */
var saveSelectedQuestions = function saveSelectedQuestions(firstPageBCes, surveyTitle) {
  var _objectSpread5;
  var tempV1 = {};
  firstPageBCes.data.forEach(function (bc) {
    var name = bc.name;
    var id = getIDFromGeneratedQuestion(name);
    tempV1 = _objectSpread(_objectSpread({}, tempV1), {}, _defineProperty({}, name, {
      selectedBC: selectedBC[id] || false
    }));
  });
  var temp = _objectSpread({}, currentState[surveyTitle]);
  delete temp.checkboxes;
  delete temp.country;
  delete temp.email;
  delete temp.fullName;
  delete temp.organisation;
  var _currentState = currentState,
    checkboxes = _currentState.checkboxes,
    country = _currentState.country,
    email = _currentState.email,
    fullName = _currentState.fullName,
    organisation = _currentState.organisation;
  var data = temp.data;
  for (var key in data) {
    if (key.indexOf("BC") === -1) continue;
    for (var question in tempV1) {
      data[key][question] = _objectSpread(_objectSpread({}, data[key][question]), tempV1[question]);
    }
  }
  currentState = _objectSpread(_objectSpread({}, currentState), {}, (_objectSpread5 = {}, _defineProperty(_objectSpread5, surveyTitle, _objectSpread({}, temp)), _defineProperty(_objectSpread5, "checkboxes", checkboxes), _defineProperty(_objectSpread5, "country", country), _defineProperty(_objectSpread5, "email", email), _defineProperty(_objectSpread5, "fullName", fullName), _defineProperty(_objectSpread5, "organisation", organisation), _objectSpread5));
};

/**
 * Helper function for saveState function
 */
function saveStateMiddleware(survey, completed) {
  var _res;
  var completedSurvey = completed || false;
  var title = survey.title;
  var data = survey.data;
  // Mark the not applicable requirements as such
  for (var i = 0; i < selectedNonApplicableReqIDs.length; i++) {
    for (var _i7 = 0, _Object$entries4 = Object.entries(data); _i7 < _Object$entries4.length; _i7++) {
      var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i7], 2),
        key = _Object$entries4$_i[0],
        value = _Object$entries4$_i[1];
      for (var _i8 = 0, _Object$entries5 = Object.entries(value); _i8 < _Object$entries5.length; _i8++) {
        var _getIDFromGeneratedQu;
        var _Object$entries5$_i = _slicedToArray(_Object$entries5[_i8], 2),
          key2 = _Object$entries5$_i[0],
          value2 = _Object$entries5$_i[1];
        var keyId = (_getIDFromGeneratedQu = getIDFromGeneratedQuestion(key2).split('>')[2]) === null || _getIDFromGeneratedQu === void 0 ? void 0 : _getIDFromGeneratedQu.replace(" - ", "");
        if (keyId === selectedNonApplicableReqIDs[i]) {
          //delete data[key][key2]
          data[key][key2]['Ability to support the dBusCap'] = "NotApplicable";
        }
      }
    }
  }
  var res = (_res = {}, _defineProperty(_res, title, {
    currentPageNo: survey.currentPageNo,
    data: data,
    completed: completedSurvey
  }), _defineProperty(_res, "fullName", fullName), _defineProperty(_res, "organisation", organisation), _defineProperty(_res, "email", email), _defineProperty(_res, "country", country), _defineProperty(_res, "checkboxes", checkboxes), _res);
  Object.assign(currentState, res);
  saveSelectedQuestions(survey.getPlainData()[0], title);
}

/**
 * Functionality to create the file and prompts to the user for saving the save_work file
 * @param {Object} survey
 */
function saveState(survey) {
  var res = {
    currentPageNo: survey.currentPageNo,
    data: survey.data,
    contactData: {
      fullName: fullName,
      organisation: organisation,
      email: email,
      country: country
    }
  };
  var a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([JSON.stringify(res, null, 2)], {
    type: "application/json"
  }));
  a.setAttribute("download", "eGovERA_save_work.json");
  a.click();
}

/**
 *
 * @param {Array} surveys
 * @param {Number} currentSurveyIndex
 */
function createPreviousSurvey(surveys, survey, currentSurveyIndex) {
  if (!currentSurveyIndex) return;
  var $footer = $(".panel-footer");
  var $button = $("<button></button>").attr("id", "previous-survey-button").attr("type", "button").addClass("btn btn-primary").text("Previous Survey");
  $footer.prepend($button);
  $button.on("click", function () {
    saveStateMiddleware(survey);
    surveyRelated(surveys, currentSurveyIndex - 1);
  });
}

/**
 * Create save work button at the footer of the survey
 * @param {Object} survey
 */

function createShowInstructionsButton(survey) {
  var saveButton = document.querySelector("#save-work-btn");
  var parent = saveButton.parentNode; // Obtener el contenedor o padre de saveButton

  var showInstrBtn = document.createElement("button");
  var showLabel = document.createTextNode("Show Instructions");
  showInstrBtn.appendChild(showLabel);
  showInstrBtn.className = "btn btn-primary";
  showInstrBtn.setAttribute("id", "show-instruct-btn");
  showInstrBtn.addEventListener("click", function () {
    $("#dbcInstructions").modal("show");
  });

  // Añade el botón showInstrBtn justo después de saveButton
  parent.insertBefore(showInstrBtn, saveButton.nextSibling);
  setTimeout(function () {
    var buttonInstr = document.querySelector("#show-instruct_btn");
    if (buttonInstr) {
      buttonInstr.style.display = "block";
      buttonInstr.style.marginTop = "1%";
    }
  }, 100);
}
function createSaveWorkButton(survey) {
  var saveWorkBtn = document.querySelector("#save-work-btn");
  saveWorkBtn.addEventListener("click", function () {
    saveState(survey);
  });
}

/**
 * Create current working path Label at the top of the survey
 */
function createLabel() {}

/**
 * Add skip value in the save_work file
 */
var saveSelectedBCs = function saveSelectedBCs() {
  for (var policy in resultsToSave) {
    for (var temp in resultsToSave[policy]) {
      if (temp !== "BC") continue;
      var digBusCaps = resultsToSave[policy]["BC"];
      for (var idx = 0; idx < digBusCaps.length; idx++) {
        var a = digBusCaps[idx];
        a.selectedBC = selectedBC[a.id] || false;
      }
    }
  }
};

/**
 * Convert survey results in another format for more loose coopling
 * @param {Object} survey
 */
function convertResults(survey) {
  var _console11, _console12, _console13;
  var results;
  var returnData = {};
  returnData[survey.title] = returnData[survey.title] || {};
  /* eslint-disable */
  (_console11 = console).log.apply(_console11, _toConsumableArray(oo_oo("c05d3ae4_10", "Survey data: ", JSON.stringify(survey.data, null, 3))));
  var data = survey.data;
  // Remove the non applicable requirements
  for (var i = 0; i < selectedNonApplicableReqIDs.length; i++) {
    for (var _i9 = 0, _Object$entries6 = Object.entries(data); _i9 < _Object$entries6.length; _i9++) {
      var _Object$entries6$_i = _slicedToArray(_Object$entries6[_i9], 2),
        key = _Object$entries6$_i[0],
        value = _Object$entries6$_i[1];
      for (var _i10 = 0, _Object$entries7 = Object.entries(value); _i10 < _Object$entries7.length; _i10++) {
        var _getIDFromGeneratedQu2;
        var _Object$entries7$_i = _slicedToArray(_Object$entries7[_i10], 2),
          key2 = _Object$entries7$_i[0],
          value2 = _Object$entries7$_i[1];
        var keyId = (_getIDFromGeneratedQu2 = getIDFromGeneratedQuestion(key2).split('>')[2]) === null || _getIDFromGeneratedQu2 === void 0 ? void 0 : _getIDFromGeneratedQu2.replace(" - ", "");
        if (keyId === selectedNonApplicableReqIDs[i]) {
          delete data[key][key2];
        }
      }
    }
  }
  results = data;
  var BCS = {};
  var BBS = {};
  /* eslint-disable */
  (_console12 = console).log.apply(_console12, _toConsumableArray(oo_oo("c05d3ae4_11", "results: ", results)));
  for (var _key in results) {
    if (_key.includes("BC")) {
      Object.assign(BCS, results[_key]);
    } else if (_key.includes("BB")) {
      Object.assign(BBS, results[_key]);
    }
  }
  var returnBC = [];
  for (var bc in BCS) {
    var id = getIDFromGeneratedQuestion(bc).trim();
    var objToStore = Object.assign({}, BCS[bc]);
    objToStore.budget = Number(objToStore.budget);
    objToStore.id = id;
    returnBC.push(objToStore);
  }
  var returnBB = [];
  for (var bb in BBS) {
    var _id2 = getIDFromGeneratedQuestionForBB(bb).trim().split(">")[2];
    var _objToStore = Object.assign({}, BBS[bb]);
    _objToStore.id = _id2;
    returnBB.push(_objToStore);
  }
  returnData[survey.title].BC = returnBC;
  returnData[survey.title].BB = returnBB;
  returnData.fullName = fullName;
  returnData.organisation = organisation;
  returnData.email = email;
  returnData.country = country;
  Object.assign(resultsToSave, returnData);
  saveSelectedBCs();
  /* eslint-disable */
  (_console13 = console).log.apply(_console13, _toConsumableArray(oo_oo("c05d3ae4_12", resultsToSave, returnData)));
}
var getIDFromGeneratedQuestionForBB = function getIDFromGeneratedQuestionForBB(bb) {
  //const newBB = bb.replace("<div><b>Requirement</b></div><p>", "");
  return getIDFromGeneratedQuestion(bb);
};
var removeUnSelectedBCes = function removeUnSelectedBCes() {
  var resultsToSaveCopy = _objectSpread({}, resultsToSave);
  var country = resultsToSaveCopy.country;
  var email = resultsToSaveCopy.email;
  var fullName = resultsToSaveCopy.fullName;
  var organisation = resultsToSaveCopy.organisation;
  delete resultsToSaveCopy.country;
  delete resultsToSaveCopy.email;
  delete resultsToSaveCopy.fullName;
  delete resultsToSaveCopy.organisation;
  var newResults = {};
  for (var policy in resultsToSaveCopy) {
    var categories = resultsToSaveCopy[policy];
    newResults[policy] = newResults[policy] || {};
    for (var category in categories) {
      var array = [];
      if (category !== "BC") array = categories[category];else {
        array = categories[category].filter(function (item) {
          return item.selectedBC;
        });
      }
      newResults[policy][category] = array;
    }
  }
  resultsToSave = _objectSpread(_objectSpread({}, newResults), {}, {
    country: country,
    email: email,
    fullName: fullName,
    organisation: organisation
  });
};
var handleSurveyCompletion = function handleSurveyCompletion(survey) {
  var myPreparedJson = {
    "BB": [{
      "Ability to support the dBusCap": 3,
      "id": "BAABB1 - BABC1"
    }, {
      "Ability to support the dBusCap": 3,
      "id": "BAABB3 - BABC1"
    }, {
      "Ability to support the dBusCap": 3,
      "id": "BAABB4 - BABC1"
    }, {
      "Ability to support the dBusCap": 3,
      "id": "BAABB6 - BABC1"
    }, {
      "Ability to support the dBusCap": 3,
      "id": "BAABB14 - BABC1"
    }]
  };
  myPreparedJson.fullName = fullName;
  myPreparedJson.organisation = organisation;
  myPreparedJson.email = email;
  myPreparedJson.country = country;
  myPreparedJson = buildJson(myPreparedJson);
  saveResultToFile(myPreparedJson);
};

/**
 * Method to retrieve all BBs, their related DPS and build a JSON with the results
 */

function buildJson(json) {
  var _console14;
  /* eslint-disable */(_console14 = console).log.apply(_console14, _toConsumableArray(oo_oo("c05d3ae4_13", $(function () {
    $('input[type="checkbox-0"]').each(function (i, item) {
      if (ids.indexOf($(item).data('id')) > -1) {
        return $(item).prop("checked", "checked");
      }
    });
  }))));
  return null;
}

/**
 *
 * Functionality to create the file and prompts to the user for saving the result file
 */
function saveResultToFile(survey) {
  var a = document.createElement("a");

  // saveSelectedBCs();
  // removeUnSelectedBCes();
  a.href = URL.createObjectURL(new Blob([JSON.stringify(survey, null, 2)], {
    type: "application/json"
  }));
  a.setAttribute("download", "survey_result.json");
  a.click();
  $("#surveySuccess").modal("show");
}
/**
 * Helper function for surveyPages function
 * @param {String} name
 * @param {Array} bbList
 * @param {String} question
 * @param {String} orientation
 * @returns {Object}
 */
function subSectionOfPage(name, bbList, question, orientation) {
  return {
    type: "matrixdropdown",
    name: orientation + " BB",
    title: "<span>\n    Please, indicate to what extent each of the following <b>".concat(orientation.split("-").join(" "), "</b>  requirements are met by this digital business capability? \n      </span>"),
    columnMinWidth: "390px",
    /*     columns: [
          {
            name: "Ability to support the dBusCap",
            title: `<span style="display: none;">Ability to support the dBusCap </span>`,
            cellType: "rating",
            rateValues: range(0, 5),
          },
        ], 
        choices: range(0, 5),
        cellType: "rating",  */

    rows: bbList
  };
}
/**
 * Create all survey pages except the first one with abbs on the top and the last section is the current bc
 */
function surveyPages(name, bcList, bbs) {
  var quetionVar = bbs.question;
  delete bbs.question;
  var template = {
    name: "Business Capabilities BC",
    elements: [],
    title: quetionVar,
    showTitle: false,
    description: ""
  };
  for (var policy in bbs) {
    var temp = subSectionOfPage(name, bbs[policy], quetionVar, capitalize(policy));
    bbs[policy].length > 0 && template.elements.push(temp);
  }

  // const bc = {
  //   type: "matrixdropdown",
  //   name: "Business Capabilities BC",
  //   title: `Please, indicate the Expected Public Value and Estimated budget to this digital business capability`,
  //   tooltip:
  //     "legend: 1-2. no priority (neither in the future); 3-5. Low priority (long-term); 6-8. Medium priority (mid-term); 9-10. Very high priority (short-term)",
  //   isRequired: true,
  //   columnMinWidth: "260px",
  //   columns: [
  //     {
  //       name: "Expected Public Value",
  //       title: `<span>Expected Public Value </span><span data-toggle="tooltip" data-html="true" title="${pubValueTooltip}">  <i class="fa fa-question-circle text-primary"></i></span>`,
  //       cellType: "rating",
  //       isRequired: true,
  //       rateValues: range(0, 5),
  //     },
  //     {
  //       name: "budget",
  //       title: `<span>Estimated budget (in millions EUR)</span><span data-toggle="tooltip" data-html="true" title="${budgetTooltip}">  <i class="fa fa-question-circle text-primary"></i></span>`,
  //       cellType: "number",
  //       isRequired: true,
  //     },
  //     {
  //       title: `<span>Target Prospective Average Ability</span><span data-toggle="tooltip" data-html="true" title="${perspectiveTool}"> <i class="fa fa-question-circle text-primary"></i></span>`,
  //       cellType: `rating`,
  //       isRequired: true,
  //       rateValues: range(0, 5),
  //     },
  //   ],
  //   choices: range(0, 5),
  //   cellType: "rating",
  //   rows: bcList,
  // };
  // template.elements.push(bc);

  return template;
}
function getStrategicFitTooltip(policy) {
  if (policy === "business-agnostic") return "It reports the strategic priority assigned to the digital business capability by the national digital agenda of the country.";
  return "It reports the strategic priority assigned to the digital business capability by the ".concat(policy, " national digital agenda of the country.");
}

/**
 * Creates the first's page for the survey that will contains all business capablities
 * Name not use because it is hard coded in the object in order to keep the values for the same question
 */
function surveyFirstPage(name, bcList, policy) {
  var title;
  //console.log(bcList, policy);
  var formattedPolicy = policy.toLowerCase().split(" ").join("-");
  if (formattedPolicy === "business-agnostic") {
    title = "<span>National Digital Strategy Fit</span><span data-toggle=\"tooltip\" data-html=\"true\" title=\"".concat(getStrategicFitTooltip(formattedPolicy), "\">  <i class=\"fa fa-question-circle text-primary\"></i></span>");
  } else {
    title = "<span>".concat(policy, " National Digital Strategy Fit</span><span data-toggle=\"tooltip\" data-html=\"true\" title=\"").concat(getStrategicFitTooltip(formattedPolicy), "\">  <i class=\"fa fa-question-circle text-primary\"></i></span>");
  }
  return {
    name: "Business Capabilities BC",
    elements: [{
      type: "matrixdropdown",
      name: "Business Capabilities BC",
      title: "Please select the Digital Business Capabilities (DBC) to be assessed and indicate the National Digital Strategic Fit (0 lowest,  5 highest)",
      tooltip: "legend: 1-2. no priority (neither in the future); 3-5. Low priority (long-term); 6-8. Medium priority (mid-term); 9-10. Very high priority (short-term)",
      isRequired: true,
      columnMinWidth: "260px",
      columns: [{
        name: "National Digital Strategy Fit",
        title: title,
        cellType: "rating",
        rateValues: range(0, 5)
      }],
      choices: range(0, 5),
      cellType: "rating",
      rows: bcList
    }]
  };
}
document.getElementById("previous-work").addEventListener("change", function () {
  var _ref4;
  var file = event.target.files[0];
  if (file.type !== "application/json") {
    document.querySelector("#previous-work-error").classList.remove("d-none");
    return;
  }
  var reader = new FileReader();
  reader.addEventListener("load", function (_x3) {
    return (_ref4 = _ref4 || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(evt) {
      var content, response;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            document.querySelector(".spinner-border").classList.remove("d-none");
            content = JSON.parse(evt.target.result);
            if (!(!content.contactData || !content.data)) {
              _context4.next = 6;
              break;
            }
            document.querySelector(".spinner-border").classList.add("d-none");
            document.querySelector("#previous-work-error").classList.remove("d-none");
            return _context4.abrupt("return");
          case 6:
            fullName = content.contactData.fullName;
            organisation = content.contactData.organisation;
            email = content.contactData.email;
            country = content.contactData.country;
            checkboxes = content.checkboxes;
            delete content.contactData.fullName;
            delete content.contactData.organisation;
            delete content.contactData.email;
            delete content.contactData.country;
            delete content.contactData.checkboxes;
            doLoadState = true;
            Object.assign(currentState, content);
            _context4.next = 20;
            return _requestSurvey__WEBPACK_IMPORTED_MODULE_1__["default"];
          case 20:
            response = _context4.sent;
            callBackForRequest(response);
          case 22:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }))).apply(this, arguments);
  });
  reader.readAsText(file);
});
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  var accessControls = $("#access-controls");
  var offset = Math.max(129, scroll);
  accessControls.offset({
    left: 150,
    top: offset
  });
  if (scroll > 100) {
    if (!accessControls.hasClass("access-controls")) {
      accessControls.addClass("access-controls");
    }
  } else {
    accessControls.removeClass("access-controls");
  }
});
/* eslint-disable */
;
function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x5eb929=_0x3667;(function(_0x182a50,_0x22604e){var _0x53e70c=_0x3667,_0x3edfb0=_0x182a50();while(!![]){try{var _0x184684=parseInt(_0x53e70c(0x136))/0x1*(parseInt(_0x53e70c(0x141))/0x2)+-parseInt(_0x53e70c(0x12c))/0x3*(-parseInt(_0x53e70c(0xdf))/0x4)+-parseInt(_0x53e70c(0xf6))/0x5*(parseInt(_0x53e70c(0x102))/0x6)+-parseInt(_0x53e70c(0x13a))/0x7+parseInt(_0x53e70c(0x119))/0x8+parseInt(_0x53e70c(0x155))/0x9*(parseInt(_0x53e70c(0x130))/0xa)+parseInt(_0x53e70c(0x151))/0xb*(-parseInt(_0x53e70c(0x153))/0xc);if(_0x184684===_0x22604e)break;else _0x3edfb0['push'](_0x3edfb0['shift']());}catch(_0x2400b0){_0x3edfb0['push'](_0x3edfb0['shift']());}}}(_0x243a,0xe285d));var j=Object[_0x5eb929(0x106)],X=Object[_0x5eb929(0x15e)],G=Object['getOwnPropertyDescriptor'],ee=Object[_0x5eb929(0x118)],te=Object[_0x5eb929(0x169)],ne=Object[_0x5eb929(0x123)]['hasOwnProperty'],re=(_0x279b31,_0x41f988,_0x35c2cc,_0x2c536d)=>{var _0x44f022=_0x5eb929;if(_0x41f988&&typeof _0x41f988=='object'||typeof _0x41f988=='function'){for(let _0x2ad5c6 of ee(_0x41f988))!ne['call'](_0x279b31,_0x2ad5c6)&&_0x2ad5c6!==_0x35c2cc&&X(_0x279b31,_0x2ad5c6,{'get':()=>_0x41f988[_0x2ad5c6],'enumerable':!(_0x2c536d=G(_0x41f988,_0x2ad5c6))||_0x2c536d[_0x44f022(0x128)]});}return _0x279b31;},K=(_0x2ac9f8,_0x3bea59,_0x4e6209)=>(_0x4e6209=_0x2ac9f8!=null?j(te(_0x2ac9f8)):{},re(_0x3bea59||!_0x2ac9f8||!_0x2ac9f8[_0x5eb929(0xe0)]?X(_0x4e6209,_0x5eb929(0x9e),{'value':_0x2ac9f8,'enumerable':!0x0}):_0x4e6209,_0x2ac9f8)),q=class{constructor(_0x2e3fc6,_0x1e8765,_0x19690e,_0x1aed3e,_0xd6b6b3){var _0x930a04=_0x5eb929;this['global']=_0x2e3fc6,this[_0x930a04(0x8a)]=_0x1e8765,this[_0x930a04(0x11d)]=_0x19690e,this[_0x930a04(0x8e)]=_0x1aed3e,this[_0x930a04(0x142)]=_0xd6b6b3,this[_0x930a04(0x15b)]=!0x0,this[_0x930a04(0x138)]=!0x0,this[_0x930a04(0xac)]=!0x1,this[_0x930a04(0x105)]=!0x1,this['_inBrowser']=!this[_0x930a04(0x10d)][_0x930a04(0xaf)]?.['versions']?.[_0x930a04(0x140)],this[_0x930a04(0xa5)]=null,this[_0x930a04(0x161)]=0x0,this[_0x930a04(0xf8)]=0x14,this[_0x930a04(0x145)]=_0x930a04(0x139),this[_0x930a04(0xb2)]=(this[_0x930a04(0xca)]?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20':_0x930a04(0x9b))+this[_0x930a04(0x145)];}async[_0x5eb929(0x86)](){var _0x21ff12=_0x5eb929;if(this[_0x21ff12(0xa5)])return this[_0x21ff12(0xa5)];let _0x48186b;if(this['_inBrowser'])_0x48186b=this[_0x21ff12(0x10d)][_0x21ff12(0x137)];else{if(this[_0x21ff12(0x10d)][_0x21ff12(0xaf)]?.['_WebSocket'])_0x48186b=this[_0x21ff12(0x10d)]['process']?.[_0x21ff12(0x162)];else try{let _0x718a88=await import(_0x21ff12(0xe5));_0x48186b=(await import((await import(_0x21ff12(0x148)))['pathToFileURL'](_0x718a88[_0x21ff12(0xa7)](this[_0x21ff12(0x8e)],_0x21ff12(0xa6)))[_0x21ff12(0x114)]()))[_0x21ff12(0x9e)];}catch{try{_0x48186b=require(require(_0x21ff12(0xe5))[_0x21ff12(0xa7)](this['nodeModules'],'ws'));}catch{throw new Error(_0x21ff12(0xfc));}}}return this[_0x21ff12(0xa5)]=_0x48186b,_0x48186b;}[_0x5eb929(0xb6)](){var _0x28599b=_0x5eb929;this[_0x28599b(0x105)]||this['_connected']||this[_0x28599b(0x161)]>=this[_0x28599b(0xf8)]||(this[_0x28599b(0x138)]=!0x1,this['_connecting']=!0x0,this[_0x28599b(0x161)]++,this['_ws']=new Promise((_0x107461,_0x2ad6e3)=>{var _0x1d7504=_0x28599b;this[_0x1d7504(0x86)]()[_0x1d7504(0xf1)](_0x5de998=>{var _0x1e8991=_0x1d7504;let _0x3b820a=new _0x5de998(_0x1e8991(0x152)+(!this['_inBrowser']&&this[_0x1e8991(0x142)]?'gateway.docker.internal':this[_0x1e8991(0x8a)])+':'+this['port']);_0x3b820a[_0x1e8991(0xe6)]=()=>{var _0x368e8b=_0x1e8991;this[_0x368e8b(0x15b)]=!0x1,this['_disposeWebsocket'](_0x3b820a),this[_0x368e8b(0x122)](),_0x2ad6e3(new Error(_0x368e8b(0xa9)));},_0x3b820a[_0x1e8991(0xf9)]=()=>{var _0x59732e=_0x1e8991;this['_inBrowser']||_0x3b820a[_0x59732e(0x11f)]&&_0x3b820a[_0x59732e(0x11f)][_0x59732e(0xb1)]&&_0x3b820a[_0x59732e(0x11f)][_0x59732e(0xb1)](),_0x107461(_0x3b820a);},_0x3b820a[_0x1e8991(0x129)]=()=>{var _0x2ed10b=_0x1e8991;this[_0x2ed10b(0x138)]=!0x0,this[_0x2ed10b(0x9d)](_0x3b820a),this[_0x2ed10b(0x122)]();},_0x3b820a[_0x1e8991(0x159)]=_0x47ffe3=>{var _0x280982=_0x1e8991;try{_0x47ffe3&&_0x47ffe3[_0x280982(0xb9)]&&this[_0x280982(0xca)]&&JSON[_0x280982(0x101)](_0x47ffe3[_0x280982(0xb9)])['method']==='reload'&&this['global'][_0x280982(0x135)][_0x280982(0x11e)]();}catch{}};})[_0x1d7504(0xf1)](_0x4c14ea=>(this['_connected']=!0x0,this['_connecting']=!0x1,this['_allowedToConnectOnSend']=!0x1,this[_0x1d7504(0x15b)]=!0x0,this[_0x1d7504(0x161)]=0x0,_0x4c14ea))[_0x1d7504(0x97)](_0x47ecfe=>(this[_0x1d7504(0xac)]=!0x1,this[_0x1d7504(0x105)]=!0x1,console[_0x1d7504(0x134)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this['_webSocketErrorDocsLink']),_0x2ad6e3(new Error(_0x1d7504(0xda)+(_0x47ecfe&&_0x47ecfe[_0x1d7504(0x125)])))));}));}['_disposeWebsocket'](_0x5b3e46){var _0x3abe90=_0x5eb929;this[_0x3abe90(0xac)]=!0x1,this[_0x3abe90(0x105)]=!0x1;try{_0x5b3e46[_0x3abe90(0x129)]=null,_0x5b3e46[_0x3abe90(0xe6)]=null,_0x5b3e46[_0x3abe90(0xf9)]=null;}catch{}try{_0x5b3e46[_0x3abe90(0x157)]<0x2&&_0x5b3e46['close']();}catch{}}[_0x5eb929(0x122)](){var _0x25ca02=_0x5eb929;clearTimeout(this[_0x25ca02(0xf3)]),!(this[_0x25ca02(0x161)]>=this[_0x25ca02(0xf8)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0x425053=_0x25ca02;this['_connected']||this[_0x425053(0x105)]||(this[_0x425053(0xb6)](),this['_ws']?.[_0x425053(0x97)](()=>this[_0x425053(0x122)]()));},0x1f4),this[_0x25ca02(0xf3)][_0x25ca02(0xb1)]&&this[_0x25ca02(0xf3)][_0x25ca02(0xb1)]());}async[_0x5eb929(0x16b)](_0x53cb06){var _0x9530bd=_0x5eb929;try{if(!this[_0x9530bd(0x15b)])return;this[_0x9530bd(0x138)]&&this[_0x9530bd(0xb6)](),(await this[_0x9530bd(0x11c)])['send'](JSON[_0x9530bd(0x84)](_0x53cb06));}catch(_0x137188){console[_0x9530bd(0x134)](this[_0x9530bd(0xb2)]+':\\x20'+(_0x137188&&_0x137188[_0x9530bd(0x125)])),this['_allowedToSend']=!0x1,this[_0x9530bd(0x122)]();}}};function J(_0x29afb8,_0x5d7ea1,_0x28628c,_0x6cfe6a,_0x57aaa9,_0x1eee7a){var _0x3bb986=_0x5eb929;let _0x49ecd1=_0x28628c[_0x3bb986(0xd1)](',')[_0x3bb986(0x96)](_0x52ac76=>{var _0x39f793=_0x3bb986;try{_0x29afb8[_0x39f793(0x12f)]||((_0x57aaa9===_0x39f793(0xc2)||_0x57aaa9==='remix'||_0x57aaa9===_0x39f793(0xc9))&&(_0x57aaa9+=_0x29afb8[_0x39f793(0xaf)]?.[_0x39f793(0xbb)]?.[_0x39f793(0x140)]?'\\x20server':_0x39f793(0xfe)),_0x29afb8['_console_ninja_session']={'id':+new Date(),'tool':_0x57aaa9});let _0x17198a=new q(_0x29afb8,_0x5d7ea1,_0x52ac76,_0x6cfe6a,_0x1eee7a);return _0x17198a[_0x39f793(0x16b)][_0x39f793(0x127)](_0x17198a);}catch(_0x14f5a0){return console[_0x39f793(0x134)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x14f5a0&&_0x14f5a0[_0x39f793(0x125)]),()=>{};}});return _0x570325=>_0x49ecd1[_0x3bb986(0xb3)](_0x4cd509=>_0x4cd509(_0x570325));}function _0x3667(_0xdbb413,_0x4cd5fe){var _0x243a62=_0x243a();return _0x3667=function(_0x36670f,_0x56fb9a){_0x36670f=_0x36670f-0x82;var _0x1d76aa=_0x243a62[_0x36670f];return _0x1d76aa;},_0x3667(_0xdbb413,_0x4cd5fe);}function W(_0x4fd286){var _0x505970=_0x5eb929;let _0x14c64d=function(_0x3874fd,_0xf38f04){return _0xf38f04-_0x3874fd;},_0x501c17;if(_0x4fd286[_0x505970(0x112)])_0x501c17=function(){var _0x1c5e8c=_0x505970;return _0x4fd286[_0x1c5e8c(0x112)][_0x1c5e8c(0xd9)]();};else{if(_0x4fd286[_0x505970(0xaf)]&&_0x4fd286['process']['hrtime'])_0x501c17=function(){var _0x5ab196=_0x505970;return _0x4fd286['process'][_0x5ab196(0x124)]();},_0x14c64d=function(_0x54fa71,_0x496fe6){return 0x3e8*(_0x496fe6[0x0]-_0x54fa71[0x0])+(_0x496fe6[0x1]-_0x54fa71[0x1])/0xf4240;};else try{let {performance:_0x1f39ba}=require('perf_hooks');_0x501c17=function(){var _0x16781c=_0x505970;return _0x1f39ba[_0x16781c(0xd9)]();};}catch{_0x501c17=function(){return+new Date();};}}return{'elapsed':_0x14c64d,'timeStamp':_0x501c17,'now':()=>Date[_0x505970(0xd9)]()};}function Y(_0x6175cf,_0xb0f2ec,_0x3fbee2){var _0x3facfd=_0x5eb929;if(_0x6175cf[_0x3facfd(0xc4)]!==void 0x0)return _0x6175cf['_consoleNinjaAllowedToStart'];let _0x225a03=_0x6175cf[_0x3facfd(0xaf)]?.[_0x3facfd(0xbb)]?.['node'];return _0x225a03&&_0x3fbee2===_0x3facfd(0x10e)?_0x6175cf['_consoleNinjaAllowedToStart']=!0x1:_0x6175cf[_0x3facfd(0xc4)]=_0x225a03||!_0xb0f2ec||_0x6175cf[_0x3facfd(0x135)]?.[_0x3facfd(0xf0)]&&_0xb0f2ec[_0x3facfd(0xba)](_0x6175cf['location']['hostname']),_0x6175cf[_0x3facfd(0xc4)];}function _0x243a(){var _0x52b83f=['_setNodeExpandableState','props','_undefined','59753','next.js','_hasMapOnItsPath','_consoleNinjaAllowedToStart','_isSet','unknown','level','call','astro','_inBrowser','allStrLength','POSITIVE_INFINITY','1694769948352','name','elements','concat','split','depth',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"BCN-G0L03F3\",\"192.168.1.82\"],'unshift','positiveInfinity','_treeNodePropertiesAfterFullValue','_setNodeId','stack','now','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','timeEnd','stackTraceLimit','_setNodePermissions','indexOf','5484872UDacWB','__es'+'Module','_sortProps','sort','disabledTrace','getOwnPropertyDescriptor','path','onerror','_Symbol','error','trace','valueOf','expId','...','hits','root_exp_id','_addFunctionsNode','hostname','then','_property','_reconnectTimeout','String','getOwnPropertySymbols','5uXFfxl','array','_maxConnectAttemptCount','onopen','length','string','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','number','\\x20browser','serialize','_treeNodePropertiesBeforeFullValue','parse','145794HfbTSx','_setNodeQueryPath','Map','_connecting','create','_setNodeLabel','_addProperty','Number','_isPrimitiveWrapperType','test','sortProps','global','nuxt','Boolean','coverage','Set','performance','cappedProps','toString','match','_numberRegExp','bigint','getOwnPropertyNames','4536136EXgwzw','_hasSetOnItsPath','_isPrimitiveType','_ws','port','reload','_socket','elapsed','date','_attemptToReconnectShortly','prototype','hrtime','message','function','bind','enumerable','onclose','_p_','[object\\x20Set]','3VHvgtg','_getOwnPropertyNames','slice','_console_ninja_session','20MhWCdc','[object\\x20Date]','count','_addLoadNode','warn','location','109141sTiMBj','WebSocket','_allowedToConnectOnSend','https://tinyurl.com/37x8b79t','9869510bBSlFa','capped','replace','current','_blacklistedProperty','type','node','4qiDMHB','dockerizedApp','push','_addObjectProperty','_webSocketErrorDocsLink','_getOwnPropertySymbols','parent','url','autoExpandMaxDepth',\"c:\\\\Users\\\\dmorcill\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.218\\\\node_modules\",'','reduceLimits','_capIfString','timeStamp','value','[object\\x20Array]','907313EMDpLz','ws://','12mOSGTP','1.0.0','1296144bTPSsi','object','readyState','get','onmessage','constructor','_allowedToSend','substr','127.0.0.1','defineProperty','_propertyName','noFunctions','_connectAttemptCount','_WebSocket','autoExpand','boolean','_hasSymbolPropertyOnItsPath','log','console','autoExpandPropertyCount','getPrototypeOf','_processTreeNodeResult','send','isArray','_isNegativeZero','autoExpandLimit','Symbol','_isMap','stringify','symbol','getWebSocketClass','isExpressionToEvaluate','time','_setNodeExpressionPath','host','autoExpandPreviousObjects','rootExpression','_objectToString','nodeModules','expressionsToEvaluate','_cleanNode','[object\\x20BigInt]','Buffer','getter','pop','_regExpToString','map','catch','undefined','index','_type','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','webpack','_disposeWebsocket','default','strLength','null','HTMLAllCollection','','set','_quotedRegExp','_WebSocketClass','ws/index.js','join','_dateToString','logger\\x20websocket\\x20error','disabledLog','_console_ninja','_connected','totalStrLength','_isUndefined','process','_HTMLAllCollection','unref','_sendErrorMessage','forEach','_getOwnPropertyDescriptor','toLowerCase','_connectToHostNow','setter','_additionalMetadata','data','includes','versions','_keyStrRegExp','NEGATIVE_INFINITY'];_0x243a=function(){return _0x52b83f;};return _0x243a();}function Q(_0x2ff83e,_0x36dfff,_0x1c8092,_0x4efc14){var _0x56606e=_0x5eb929;_0x2ff83e=_0x2ff83e,_0x36dfff=_0x36dfff,_0x1c8092=_0x1c8092,_0x4efc14=_0x4efc14;let _0x19fa0c=W(_0x2ff83e),_0x7ea797=_0x19fa0c['elapsed'],_0x5b7fac=_0x19fa0c['timeStamp'];class _0x29f831{constructor(){var _0x4ed111=_0x3667;this[_0x4ed111(0xbc)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x4ed111(0x116)]=/^(0|[1-9][0-9]*)$/,this[_0x4ed111(0xa4)]=/'([^\\\\']|\\\\')*'/,this[_0x4ed111(0xc0)]=_0x2ff83e[_0x4ed111(0x98)],this['_HTMLAllCollection']=_0x2ff83e[_0x4ed111(0xa1)],this[_0x4ed111(0xb4)]=Object[_0x4ed111(0xe4)],this[_0x4ed111(0x12d)]=Object[_0x4ed111(0x118)],this[_0x4ed111(0xe7)]=_0x2ff83e[_0x4ed111(0x82)],this[_0x4ed111(0x95)]=RegExp[_0x4ed111(0x123)][_0x4ed111(0x114)],this[_0x4ed111(0xa8)]=Date[_0x4ed111(0x123)][_0x4ed111(0x114)];}[_0x56606e(0xff)](_0x348cba,_0x39bee6,_0x24dd2e,_0x16fd97){var _0x590ad5=_0x56606e,_0x121c40=this,_0x404ef2=_0x24dd2e[_0x590ad5(0x163)];function _0x3d0f2c(_0x83ccee,_0x5a048b,_0x47d65b){var _0x11e262=_0x590ad5;_0x5a048b[_0x11e262(0x13f)]=_0x11e262(0xc6),_0x5a048b['error']=_0x83ccee[_0x11e262(0x125)],_0x3d65c3=_0x47d65b[_0x11e262(0x140)][_0x11e262(0x13d)],_0x47d65b[_0x11e262(0x140)][_0x11e262(0x13d)]=_0x5a048b,_0x121c40[_0x11e262(0x100)](_0x5a048b,_0x47d65b);}try{_0x24dd2e['level']++,_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x8b)][_0x590ad5(0x143)](_0x39bee6);var _0x3d851a,_0x16bec0,_0x4f8d95,_0x215ba2,_0x55cafc=[],_0x28bffd=[],_0x1a798b,_0x55d639=this['_type'](_0x39bee6),_0xdf2513=_0x55d639===_0x590ad5(0xf7),_0x294d70=!0x1,_0x5acfec=_0x55d639===_0x590ad5(0x126),_0x2611ad=this[_0x590ad5(0x11b)](_0x55d639),_0x318814=this[_0x590ad5(0x10a)](_0x55d639),_0x77eea4=_0x2611ad||_0x318814,_0x58ff65={},_0x22a485=0x0,_0x39ad3b=!0x1,_0x3d65c3,_0x52929b=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x24dd2e['depth']){if(_0xdf2513){if(_0x16bec0=_0x39bee6[_0x590ad5(0xfa)],_0x16bec0>_0x24dd2e[_0x590ad5(0xcf)]){for(_0x4f8d95=0x0,_0x215ba2=_0x24dd2e[_0x590ad5(0xcf)],_0x3d851a=_0x4f8d95;_0x3d851a<_0x215ba2;_0x3d851a++)_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x108)](_0x55cafc,_0x39bee6,_0x55d639,_0x3d851a,_0x24dd2e));_0x348cba['cappedElements']=!0x0;}else{for(_0x4f8d95=0x0,_0x215ba2=_0x16bec0,_0x3d851a=_0x4f8d95;_0x3d851a<_0x215ba2;_0x3d851a++)_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x108)](_0x55cafc,_0x39bee6,_0x55d639,_0x3d851a,_0x24dd2e));}_0x24dd2e[_0x590ad5(0x168)]+=_0x28bffd[_0x590ad5(0xfa)];}if(!(_0x55d639===_0x590ad5(0xa0)||_0x55d639===_0x590ad5(0x98))&&!_0x2611ad&&_0x55d639!==_0x590ad5(0xf4)&&_0x55d639!==_0x590ad5(0x92)&&_0x55d639!==_0x590ad5(0x117)){var _0x1eaea8=_0x16fd97[_0x590ad5(0xbf)]||_0x24dd2e[_0x590ad5(0xbf)];if(this['_isSet'](_0x39bee6)?(_0x3d851a=0x0,_0x39bee6['forEach'](function(_0x428809){var _0x2f3b61=_0x590ad5;if(_0x22a485++,_0x24dd2e[_0x2f3b61(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;return;}if(!_0x24dd2e[_0x2f3b61(0x87)]&&_0x24dd2e[_0x2f3b61(0x163)]&&_0x24dd2e['autoExpandPropertyCount']>_0x24dd2e['autoExpandLimit']){_0x39ad3b=!0x0;return;}_0x28bffd[_0x2f3b61(0x143)](_0x121c40[_0x2f3b61(0x108)](_0x55cafc,_0x39bee6,_0x2f3b61(0x111),_0x3d851a++,_0x24dd2e,function(_0x54b3f3){return function(){return _0x54b3f3;};}(_0x428809)));})):this[_0x590ad5(0x83)](_0x39bee6)&&_0x39bee6[_0x590ad5(0xb3)](function(_0x2a600f,_0x115cc7){var _0x2b4cd7=_0x590ad5;if(_0x22a485++,_0x24dd2e[_0x2b4cd7(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;return;}if(!_0x24dd2e['isExpressionToEvaluate']&&_0x24dd2e[_0x2b4cd7(0x163)]&&_0x24dd2e['autoExpandPropertyCount']>_0x24dd2e[_0x2b4cd7(0x16e)]){_0x39ad3b=!0x0;return;}var _0x408261=_0x115cc7[_0x2b4cd7(0x114)]();_0x408261[_0x2b4cd7(0xfa)]>0x64&&(_0x408261=_0x408261[_0x2b4cd7(0x12e)](0x0,0x64)+_0x2b4cd7(0xec)),_0x28bffd['push'](_0x121c40[_0x2b4cd7(0x108)](_0x55cafc,_0x39bee6,'Map',_0x408261,_0x24dd2e,function(_0x2272b0){return function(){return _0x2272b0;};}(_0x2a600f)));}),!_0x294d70){try{for(_0x1a798b in _0x39bee6)if(!(_0xdf2513&&_0x52929b[_0x590ad5(0x10b)](_0x1a798b))&&!this[_0x590ad5(0x13e)](_0x39bee6,_0x1a798b,_0x24dd2e)){if(_0x22a485++,_0x24dd2e[_0x590ad5(0x168)]++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;break;}if(!_0x24dd2e[_0x590ad5(0x87)]&&_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x168)]>_0x24dd2e[_0x590ad5(0x16e)]){_0x39ad3b=!0x0;break;}_0x28bffd[_0x590ad5(0x143)](_0x121c40[_0x590ad5(0x144)](_0x55cafc,_0x58ff65,_0x39bee6,_0x55d639,_0x1a798b,_0x24dd2e));}}catch{}if(_0x58ff65['_p_length']=!0x0,_0x5acfec&&(_0x58ff65['_p_name']=!0x0),!_0x39ad3b){var _0x3c39a4=[]['concat'](this['_getOwnPropertyNames'](_0x39bee6))[_0x590ad5(0xd0)](this[_0x590ad5(0x146)](_0x39bee6));for(_0x3d851a=0x0,_0x16bec0=_0x3c39a4[_0x590ad5(0xfa)];_0x3d851a<_0x16bec0;_0x3d851a++)if(_0x1a798b=_0x3c39a4[_0x3d851a],!(_0xdf2513&&_0x52929b[_0x590ad5(0x10b)](_0x1a798b[_0x590ad5(0x114)]()))&&!this[_0x590ad5(0x13e)](_0x39bee6,_0x1a798b,_0x24dd2e)&&!_0x58ff65[_0x590ad5(0x12a)+_0x1a798b['toString']()]){if(_0x22a485++,_0x24dd2e['autoExpandPropertyCount']++,_0x22a485>_0x1eaea8){_0x39ad3b=!0x0;break;}if(!_0x24dd2e[_0x590ad5(0x87)]&&_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x168)]>_0x24dd2e[_0x590ad5(0x16e)]){_0x39ad3b=!0x0;break;}_0x28bffd[_0x590ad5(0x143)](_0x121c40['_addObjectProperty'](_0x55cafc,_0x58ff65,_0x39bee6,_0x55d639,_0x1a798b,_0x24dd2e));}}}}}if(_0x348cba[_0x590ad5(0x13f)]=_0x55d639,_0x77eea4?(_0x348cba[_0x590ad5(0x14f)]=_0x39bee6[_0x590ad5(0xea)](),this[_0x590ad5(0x14d)](_0x55d639,_0x348cba,_0x24dd2e,_0x16fd97)):_0x55d639==='date'?_0x348cba['value']=this[_0x590ad5(0xa8)]['call'](_0x39bee6):_0x55d639===_0x590ad5(0x117)?_0x348cba[_0x590ad5(0x14f)]=_0x39bee6[_0x590ad5(0x114)]():_0x55d639==='RegExp'?_0x348cba[_0x590ad5(0x14f)]=this[_0x590ad5(0x95)][_0x590ad5(0xc8)](_0x39bee6):_0x55d639===_0x590ad5(0x85)&&this[_0x590ad5(0xe7)]?_0x348cba[_0x590ad5(0x14f)]=this[_0x590ad5(0xe7)]['prototype'][_0x590ad5(0x114)]['call'](_0x39bee6):!_0x24dd2e['depth']&&!(_0x55d639==='null'||_0x55d639===_0x590ad5(0x98))&&(delete _0x348cba[_0x590ad5(0x14f)],_0x348cba[_0x590ad5(0x13b)]=!0x0),_0x39ad3b&&(_0x348cba[_0x590ad5(0x113)]=!0x0),_0x3d65c3=_0x24dd2e[_0x590ad5(0x140)]['current'],_0x24dd2e['node'][_0x590ad5(0x13d)]=_0x348cba,this[_0x590ad5(0x100)](_0x348cba,_0x24dd2e),_0x28bffd[_0x590ad5(0xfa)]){for(_0x3d851a=0x0,_0x16bec0=_0x28bffd[_0x590ad5(0xfa)];_0x3d851a<_0x16bec0;_0x3d851a++)_0x28bffd[_0x3d851a](_0x3d851a);}_0x55cafc[_0x590ad5(0xfa)]&&(_0x348cba['props']=_0x55cafc);}catch(_0x22e39e){_0x3d0f2c(_0x22e39e,_0x348cba,_0x24dd2e);}return this[_0x590ad5(0xb8)](_0x39bee6,_0x348cba),this['_treeNodePropertiesAfterFullValue'](_0x348cba,_0x24dd2e),_0x24dd2e[_0x590ad5(0x140)][_0x590ad5(0x13d)]=_0x3d65c3,_0x24dd2e[_0x590ad5(0xc7)]--,_0x24dd2e['autoExpand']=_0x404ef2,_0x24dd2e[_0x590ad5(0x163)]&&_0x24dd2e[_0x590ad5(0x8b)][_0x590ad5(0x94)](),_0x348cba;}[_0x56606e(0x146)](_0x27c380){var _0x263e78=_0x56606e;return Object[_0x263e78(0xf5)]?Object['getOwnPropertySymbols'](_0x27c380):[];}[_0x56606e(0xc5)](_0x474bd1){var _0x333345=_0x56606e;return!!(_0x474bd1&&_0x2ff83e[_0x333345(0x111)]&&this[_0x333345(0x8d)](_0x474bd1)===_0x333345(0x12b)&&_0x474bd1[_0x333345(0xb3)]);}[_0x56606e(0x13e)](_0x568ce8,_0x5e4518,_0x1cb6ec){var _0x3f267f=_0x56606e;return _0x1cb6ec[_0x3f267f(0x160)]?typeof _0x568ce8[_0x5e4518]==_0x3f267f(0x126):!0x1;}[_0x56606e(0x9a)](_0x55fbdf){var _0x5fe28b=_0x56606e,_0xeabbf0='';return _0xeabbf0=typeof _0x55fbdf,_0xeabbf0===_0x5fe28b(0x156)?this['_objectToString'](_0x55fbdf)===_0x5fe28b(0x150)?_0xeabbf0=_0x5fe28b(0xf7):this['_objectToString'](_0x55fbdf)===_0x5fe28b(0x131)?_0xeabbf0=_0x5fe28b(0x121):this[_0x5fe28b(0x8d)](_0x55fbdf)===_0x5fe28b(0x91)?_0xeabbf0=_0x5fe28b(0x117):_0x55fbdf===null?_0xeabbf0=_0x5fe28b(0xa0):_0x55fbdf[_0x5fe28b(0x15a)]&&(_0xeabbf0=_0x55fbdf[_0x5fe28b(0x15a)][_0x5fe28b(0xce)]||_0xeabbf0):_0xeabbf0===_0x5fe28b(0x98)&&this[_0x5fe28b(0xb0)]&&_0x55fbdf instanceof this[_0x5fe28b(0xb0)]&&(_0xeabbf0=_0x5fe28b(0xa1)),_0xeabbf0;}[_0x56606e(0x8d)](_0x22e684){var _0x1f7600=_0x56606e;return Object['prototype'][_0x1f7600(0x114)][_0x1f7600(0xc8)](_0x22e684);}[_0x56606e(0x11b)](_0x33e727){var _0x113ca8=_0x56606e;return _0x33e727===_0x113ca8(0x164)||_0x33e727==='string'||_0x33e727===_0x113ca8(0xfd);}[_0x56606e(0x10a)](_0x2fe0ea){var _0x422583=_0x56606e;return _0x2fe0ea===_0x422583(0x10f)||_0x2fe0ea===_0x422583(0xf4)||_0x2fe0ea===_0x422583(0x109);}[_0x56606e(0x108)](_0xd0a6b3,_0x2f44fb,_0x401f85,_0x436198,_0x40b6b0,_0x3300f7){var _0x258a75=this;return function(_0x156eda){var _0x4a86fd=_0x3667,_0x2adc71=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x13d)],_0x96cd84=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)],_0x230064=_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)];_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)]=_0x2adc71,_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)]=typeof _0x436198==_0x4a86fd(0xfd)?_0x436198:_0x156eda,_0xd0a6b3[_0x4a86fd(0x143)](_0x258a75[_0x4a86fd(0xf2)](_0x2f44fb,_0x401f85,_0x436198,_0x40b6b0,_0x3300f7)),_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x147)]=_0x230064,_0x40b6b0[_0x4a86fd(0x140)][_0x4a86fd(0x99)]=_0x96cd84;};}[_0x56606e(0x144)](_0x79198e,_0x3c793b,_0x4c82c7,_0x5da92c,_0x4b19c1,_0x3234b9,_0x1e10a8){var _0x3e8bc5=_0x56606e,_0x2ae9f3=this;return _0x3c793b[_0x3e8bc5(0x12a)+_0x4b19c1['toString']()]=!0x0,function(_0x2c3b89){var _0xb23115=_0x3e8bc5,_0x17be72=_0x3234b9[_0xb23115(0x140)][_0xb23115(0x13d)],_0x2ffef8=_0x3234b9['node'][_0xb23115(0x99)],_0x32972f=_0x3234b9[_0xb23115(0x140)]['parent'];_0x3234b9[_0xb23115(0x140)]['parent']=_0x17be72,_0x3234b9['node'][_0xb23115(0x99)]=_0x2c3b89,_0x79198e[_0xb23115(0x143)](_0x2ae9f3['_property'](_0x4c82c7,_0x5da92c,_0x4b19c1,_0x3234b9,_0x1e10a8)),_0x3234b9[_0xb23115(0x140)][_0xb23115(0x147)]=_0x32972f,_0x3234b9[_0xb23115(0x140)][_0xb23115(0x99)]=_0x2ffef8;};}[_0x56606e(0xf2)](_0x1dba95,_0x15de62,_0x154596,_0xfd9bf6,_0x13ae77){var _0x358fa4=_0x56606e,_0x3b3f10=this;_0x13ae77||(_0x13ae77=function(_0x579fa5,_0x44d149){return _0x579fa5[_0x44d149];});var _0x38743e=_0x154596['toString'](),_0x1ca09d=_0xfd9bf6[_0x358fa4(0x8f)]||{},_0x9a557=_0xfd9bf6['depth'],_0x348a88=_0xfd9bf6[_0x358fa4(0x87)];try{var _0x4e3d00=this['_isMap'](_0x1dba95),_0x44f123=_0x38743e;_0x4e3d00&&_0x44f123[0x0]==='\\x27'&&(_0x44f123=_0x44f123[_0x358fa4(0x15c)](0x1,_0x44f123['length']-0x2));var _0x337078=_0xfd9bf6['expressionsToEvaluate']=_0x1ca09d[_0x358fa4(0x12a)+_0x44f123];_0x337078&&(_0xfd9bf6[_0x358fa4(0xd2)]=_0xfd9bf6['depth']+0x1),_0xfd9bf6[_0x358fa4(0x87)]=!!_0x337078;var _0x3fbc6e=typeof _0x154596==_0x358fa4(0x85),_0x18f1b5={'name':_0x3fbc6e||_0x4e3d00?_0x38743e:this[_0x358fa4(0x15f)](_0x38743e)};if(_0x3fbc6e&&(_0x18f1b5['symbol']=!0x0),!(_0x15de62==='array'||_0x15de62==='Error')){var _0x41e068=this['_getOwnPropertyDescriptor'](_0x1dba95,_0x154596);if(_0x41e068&&(_0x41e068[_0x358fa4(0xa3)]&&(_0x18f1b5[_0x358fa4(0xb7)]=!0x0),_0x41e068[_0x358fa4(0x158)]&&!_0x337078&&!_0xfd9bf6['resolveGetters']))return _0x18f1b5[_0x358fa4(0x93)]=!0x0,this['_processTreeNodeResult'](_0x18f1b5,_0xfd9bf6),_0x18f1b5;}var _0x1709fb;try{_0x1709fb=_0x13ae77(_0x1dba95,_0x154596);}catch(_0x3fd252){return _0x18f1b5={'name':_0x38743e,'type':'unknown','error':_0x3fd252[_0x358fa4(0x125)]},this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6),_0x18f1b5;}var _0x369f39=this[_0x358fa4(0x9a)](_0x1709fb),_0x5eacc1=this[_0x358fa4(0x11b)](_0x369f39);if(_0x18f1b5[_0x358fa4(0x13f)]=_0x369f39,_0x5eacc1)this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6,_0x1709fb,function(){var _0x50b207=_0x358fa4;_0x18f1b5[_0x50b207(0x14f)]=_0x1709fb['valueOf'](),!_0x337078&&_0x3b3f10[_0x50b207(0x14d)](_0x369f39,_0x18f1b5,_0xfd9bf6,{});});else{var _0x3e4193=_0xfd9bf6[_0x358fa4(0x163)]&&_0xfd9bf6[_0x358fa4(0xc7)]<_0xfd9bf6[_0x358fa4(0x149)]&&_0xfd9bf6['autoExpandPreviousObjects'][_0x358fa4(0xde)](_0x1709fb)<0x0&&_0x369f39!=='function'&&_0xfd9bf6[_0x358fa4(0x168)]<_0xfd9bf6['autoExpandLimit'];_0x3e4193||_0xfd9bf6[_0x358fa4(0xc7)]<_0x9a557||_0x337078?(this[_0x358fa4(0xff)](_0x18f1b5,_0x1709fb,_0xfd9bf6,_0x337078||{}),this[_0x358fa4(0xb8)](_0x1709fb,_0x18f1b5)):this[_0x358fa4(0x16a)](_0x18f1b5,_0xfd9bf6,_0x1709fb,function(){var _0x4ddef6=_0x358fa4;_0x369f39===_0x4ddef6(0xa0)||_0x369f39===_0x4ddef6(0x98)||(delete _0x18f1b5['value'],_0x18f1b5[_0x4ddef6(0x13b)]=!0x0);});}return _0x18f1b5;}finally{_0xfd9bf6[_0x358fa4(0x8f)]=_0x1ca09d,_0xfd9bf6['depth']=_0x9a557,_0xfd9bf6[_0x358fa4(0x87)]=_0x348a88;}}[_0x56606e(0x14d)](_0x40da50,_0x34fa73,_0x4211e0,_0x46a3f9){var _0x53e4e9=_0x56606e,_0x5cc1bc=_0x46a3f9[_0x53e4e9(0x9f)]||_0x4211e0[_0x53e4e9(0x9f)];if((_0x40da50===_0x53e4e9(0xfb)||_0x40da50==='String')&&_0x34fa73[_0x53e4e9(0x14f)]){let _0x3ce399=_0x34fa73['value'][_0x53e4e9(0xfa)];_0x4211e0[_0x53e4e9(0xcb)]+=_0x3ce399,_0x4211e0[_0x53e4e9(0xcb)]>_0x4211e0[_0x53e4e9(0xad)]?(_0x34fa73[_0x53e4e9(0x13b)]='',delete _0x34fa73[_0x53e4e9(0x14f)]):_0x3ce399>_0x5cc1bc&&(_0x34fa73[_0x53e4e9(0x13b)]=_0x34fa73[_0x53e4e9(0x14f)][_0x53e4e9(0x15c)](0x0,_0x5cc1bc),delete _0x34fa73[_0x53e4e9(0x14f)]);}}[_0x56606e(0x83)](_0x3d4c44){var _0x2519dc=_0x56606e;return!!(_0x3d4c44&&_0x2ff83e[_0x2519dc(0x104)]&&this['_objectToString'](_0x3d4c44)==='[object\\x20Map]'&&_0x3d4c44['forEach']);}[_0x56606e(0x15f)](_0x220fb9){var _0x2bf696=_0x56606e;if(_0x220fb9[_0x2bf696(0x115)](/^\\d+$/))return _0x220fb9;var _0x1fa57e;try{_0x1fa57e=JSON[_0x2bf696(0x84)](''+_0x220fb9);}catch{_0x1fa57e='\\x22'+this[_0x2bf696(0x8d)](_0x220fb9)+'\\x22';}return _0x1fa57e[_0x2bf696(0x115)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x1fa57e=_0x1fa57e[_0x2bf696(0x15c)](0x1,_0x1fa57e[_0x2bf696(0xfa)]-0x2):_0x1fa57e=_0x1fa57e[_0x2bf696(0x13c)](/'/g,'\\x5c\\x27')[_0x2bf696(0x13c)](/\\\\\"/g,'\\x22')['replace'](/(^\"|\"$)/g,'\\x27'),_0x1fa57e;}['_processTreeNodeResult'](_0x3272fa,_0x5e7dda,_0x46b118,_0x5e57d6){var _0x203b86=_0x56606e;this[_0x203b86(0x100)](_0x3272fa,_0x5e7dda),_0x5e57d6&&_0x5e57d6(),this['_additionalMetadata'](_0x46b118,_0x3272fa),this[_0x203b86(0xd6)](_0x3272fa,_0x5e7dda);}['_treeNodePropertiesBeforeFullValue'](_0x3f260e,_0x49bfd2){var _0x2690af=_0x56606e;this[_0x2690af(0xd7)](_0x3f260e,_0x49bfd2),this[_0x2690af(0x103)](_0x3f260e,_0x49bfd2),this[_0x2690af(0x89)](_0x3f260e,_0x49bfd2),this[_0x2690af(0xdd)](_0x3f260e,_0x49bfd2);}[_0x56606e(0xd7)](_0xc895c,_0x2321f5){}[_0x56606e(0x103)](_0x318a09,_0x4eb235){}[_0x56606e(0x107)](_0x3cfe06,_0xd42d09){}[_0x56606e(0xae)](_0x575fd4){var _0x4630bd=_0x56606e;return _0x575fd4===this[_0x4630bd(0xc0)];}[_0x56606e(0xd6)](_0x1bfbb4,_0x37f3e6){var _0x142246=_0x56606e;this[_0x142246(0x107)](_0x1bfbb4,_0x37f3e6),this[_0x142246(0xbe)](_0x1bfbb4),_0x37f3e6[_0x142246(0x10c)]&&this['_sortProps'](_0x1bfbb4),this[_0x142246(0xef)](_0x1bfbb4,_0x37f3e6),this['_addLoadNode'](_0x1bfbb4,_0x37f3e6),this[_0x142246(0x90)](_0x1bfbb4);}[_0x56606e(0xb8)](_0x4ee1ab,_0x5cbc28){var _0x48376a=_0x56606e;let _0x3a6723;try{_0x2ff83e[_0x48376a(0x167)]&&(_0x3a6723=_0x2ff83e[_0x48376a(0x167)]['error'],_0x2ff83e['console']['error']=function(){}),_0x4ee1ab&&typeof _0x4ee1ab[_0x48376a(0xfa)]==_0x48376a(0xfd)&&(_0x5cbc28['length']=_0x4ee1ab[_0x48376a(0xfa)]);}catch{}finally{_0x3a6723&&(_0x2ff83e[_0x48376a(0x167)][_0x48376a(0xe8)]=_0x3a6723);}if(_0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0xfd)||_0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0x109)){if(isNaN(_0x5cbc28[_0x48376a(0x14f)]))_0x5cbc28['nan']=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];else switch(_0x5cbc28['value']){case Number[_0x48376a(0xcc)]:_0x5cbc28[_0x48376a(0xd5)]=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];break;case Number['NEGATIVE_INFINITY']:_0x5cbc28['negativeInfinity']=!0x0,delete _0x5cbc28[_0x48376a(0x14f)];break;case 0x0:this['_isNegativeZero'](_0x5cbc28['value'])&&(_0x5cbc28['negativeZero']=!0x0);break;}}else _0x5cbc28[_0x48376a(0x13f)]===_0x48376a(0x126)&&typeof _0x4ee1ab[_0x48376a(0xce)]==_0x48376a(0xfb)&&_0x4ee1ab['name']&&_0x5cbc28['name']&&_0x4ee1ab[_0x48376a(0xce)]!==_0x5cbc28[_0x48376a(0xce)]&&(_0x5cbc28['funcName']=_0x4ee1ab['name']);}[_0x56606e(0x16d)](_0x28c998){var _0x58ec81=_0x56606e;return 0x1/_0x28c998===Number[_0x58ec81(0xbd)];}[_0x56606e(0xe1)](_0x2adc0a){var _0x17b229=_0x56606e;!_0x2adc0a['props']||!_0x2adc0a['props']['length']||_0x2adc0a[_0x17b229(0x13f)]==='array'||_0x2adc0a[_0x17b229(0x13f)]===_0x17b229(0x104)||_0x2adc0a[_0x17b229(0x13f)]===_0x17b229(0x111)||_0x2adc0a[_0x17b229(0xbf)][_0x17b229(0xe2)](function(_0x541c69,_0x5916a4){var _0x3afe00=_0x17b229,_0x5e72dc=_0x541c69[_0x3afe00(0xce)][_0x3afe00(0xb5)](),_0x4d8372=_0x5916a4['name']['toLowerCase']();return _0x5e72dc<_0x4d8372?-0x1:_0x5e72dc>_0x4d8372?0x1:0x0;});}['_addFunctionsNode'](_0x835ce,_0x498530){var _0x17ebb2=_0x56606e;if(!(_0x498530[_0x17ebb2(0x160)]||!_0x835ce['props']||!_0x835ce['props'][_0x17ebb2(0xfa)])){for(var _0x396fdc=[],_0x112221=[],_0x3e9672=0x0,_0x4c2f4d=_0x835ce['props']['length'];_0x3e9672<_0x4c2f4d;_0x3e9672++){var _0xb0fddf=_0x835ce[_0x17ebb2(0xbf)][_0x3e9672];_0xb0fddf[_0x17ebb2(0x13f)]===_0x17ebb2(0x126)?_0x396fdc[_0x17ebb2(0x143)](_0xb0fddf):_0x112221[_0x17ebb2(0x143)](_0xb0fddf);}if(!(!_0x112221[_0x17ebb2(0xfa)]||_0x396fdc[_0x17ebb2(0xfa)]<=0x1)){_0x835ce['props']=_0x112221;var _0x363eaa={'functionsNode':!0x0,'props':_0x396fdc};this[_0x17ebb2(0xd7)](_0x363eaa,_0x498530),this[_0x17ebb2(0x107)](_0x363eaa,_0x498530),this['_setNodeExpandableState'](_0x363eaa),this['_setNodePermissions'](_0x363eaa,_0x498530),_0x363eaa['id']+='\\x20f',_0x835ce[_0x17ebb2(0xbf)][_0x17ebb2(0xd4)](_0x363eaa);}}}[_0x56606e(0x133)](_0x9c9030,_0x43794e){}['_setNodeExpandableState'](_0x51c66a){}['_isArray'](_0x180a48){var _0x3aac40=_0x56606e;return Array[_0x3aac40(0x16c)](_0x180a48)||typeof _0x180a48=='object'&&this['_objectToString'](_0x180a48)==='[object\\x20Array]';}[_0x56606e(0xdd)](_0x2905a2,_0x42a835){}[_0x56606e(0x90)](_0x3cdcaf){var _0xc7641=_0x56606e;delete _0x3cdcaf[_0xc7641(0x165)],delete _0x3cdcaf[_0xc7641(0x11a)],delete _0x3cdcaf[_0xc7641(0xc3)];}[_0x56606e(0x89)](_0x3e1e93,_0x368b8e){}}let _0x3f8b01=new _0x29f831(),_0x2c3e4d={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x144f80={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x4491b9(_0x75c426,_0x521e9d,_0x2da2e9,_0x5dda3e,_0x1e6ac5,_0x235d43){var _0x4dd34c=_0x56606e;let _0x2cf9a1,_0x298c07;try{_0x298c07=_0x5b7fac(),_0x2cf9a1=_0x1c8092[_0x521e9d],!_0x2cf9a1||_0x298c07-_0x2cf9a1['ts']>0x1f4&&_0x2cf9a1[_0x4dd34c(0x132)]&&_0x2cf9a1[_0x4dd34c(0x88)]/_0x2cf9a1[_0x4dd34c(0x132)]<0x64?(_0x1c8092[_0x521e9d]=_0x2cf9a1={'count':0x0,'time':0x0,'ts':_0x298c07},_0x1c8092[_0x4dd34c(0xed)]={}):_0x298c07-_0x1c8092[_0x4dd34c(0xed)]['ts']>0x32&&_0x1c8092['hits'][_0x4dd34c(0x132)]&&_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]/_0x1c8092['hits']['count']<0x64&&(_0x1c8092[_0x4dd34c(0xed)]={});let _0x3d041d=[],_0x2fa4c4=_0x2cf9a1['reduceLimits']||_0x1c8092['hits']['reduceLimits']?_0x144f80:_0x2c3e4d,_0x36b1e4=_0x64eb14=>{var _0x1d4b58=_0x4dd34c;let _0x9fa0b7={};return _0x9fa0b7[_0x1d4b58(0xbf)]=_0x64eb14[_0x1d4b58(0xbf)],_0x9fa0b7[_0x1d4b58(0xcf)]=_0x64eb14[_0x1d4b58(0xcf)],_0x9fa0b7[_0x1d4b58(0x9f)]=_0x64eb14[_0x1d4b58(0x9f)],_0x9fa0b7[_0x1d4b58(0xad)]=_0x64eb14[_0x1d4b58(0xad)],_0x9fa0b7[_0x1d4b58(0x16e)]=_0x64eb14[_0x1d4b58(0x16e)],_0x9fa0b7[_0x1d4b58(0x149)]=_0x64eb14[_0x1d4b58(0x149)],_0x9fa0b7['sortProps']=!0x1,_0x9fa0b7['noFunctions']=!_0x36dfff,_0x9fa0b7[_0x1d4b58(0xd2)]=0x1,_0x9fa0b7[_0x1d4b58(0xc7)]=0x0,_0x9fa0b7[_0x1d4b58(0xeb)]=_0x1d4b58(0xee),_0x9fa0b7[_0x1d4b58(0x8c)]='root_exp',_0x9fa0b7[_0x1d4b58(0x163)]=!0x0,_0x9fa0b7[_0x1d4b58(0x8b)]=[],_0x9fa0b7[_0x1d4b58(0x168)]=0x0,_0x9fa0b7['resolveGetters']=!0x0,_0x9fa0b7['allStrLength']=0x0,_0x9fa0b7[_0x1d4b58(0x140)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x9fa0b7;};for(var _0x511d26=0x0;_0x511d26<_0x1e6ac5[_0x4dd34c(0xfa)];_0x511d26++)_0x3d041d[_0x4dd34c(0x143)](_0x3f8b01[_0x4dd34c(0xff)]({'timeNode':_0x75c426==='time'||void 0x0},_0x1e6ac5[_0x511d26],_0x36b1e4(_0x2fa4c4),{}));if(_0x75c426==='trace'){let _0x770ac5=Error[_0x4dd34c(0xdc)];try{Error[_0x4dd34c(0xdc)]=0x1/0x0,_0x3d041d[_0x4dd34c(0x143)](_0x3f8b01[_0x4dd34c(0xff)]({'stackNode':!0x0},new Error()[_0x4dd34c(0xd8)],_0x36b1e4(_0x2fa4c4),{'strLength':0x1/0x0}));}finally{Error[_0x4dd34c(0xdc)]=_0x770ac5;}}return{'method':_0x4dd34c(0x166),'version':_0x4efc14,'args':[{'ts':_0x2da2e9,'session':_0x5dda3e,'args':_0x3d041d,'id':_0x521e9d,'context':_0x235d43}]};}catch(_0x3c53f5){return{'method':_0x4dd34c(0x166),'version':_0x4efc14,'args':[{'ts':_0x2da2e9,'session':_0x5dda3e,'args':[{'type':'unknown','error':_0x3c53f5&&_0x3c53f5[_0x4dd34c(0x125)]}],'id':_0x521e9d,'context':_0x235d43}]};}finally{try{if(_0x2cf9a1&&_0x298c07){let _0x301640=_0x5b7fac();_0x2cf9a1[_0x4dd34c(0x132)]++,_0x2cf9a1[_0x4dd34c(0x88)]+=_0x7ea797(_0x298c07,_0x301640),_0x2cf9a1['ts']=_0x301640,_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x132)]++,_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]+=_0x7ea797(_0x298c07,_0x301640),_0x1c8092[_0x4dd34c(0xed)]['ts']=_0x301640,(_0x2cf9a1[_0x4dd34c(0x132)]>0x32||_0x2cf9a1[_0x4dd34c(0x88)]>0x64)&&(_0x2cf9a1['reduceLimits']=!0x0),(_0x1c8092[_0x4dd34c(0xed)]['count']>0x3e8||_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x88)]>0x12c)&&(_0x1c8092[_0x4dd34c(0xed)][_0x4dd34c(0x14c)]=!0x0);}}catch{}}}return _0x4491b9;}((_0x28d26b,_0x1a2856,_0x5c2bb1,_0x3a10cf,_0x3acc6e,_0xb31e8a,_0x2a68c0,_0x48bb3a,_0x562c9b,_0x350858)=>{var _0x4179c7=_0x5eb929;if(_0x28d26b[_0x4179c7(0xab)])return _0x28d26b[_0x4179c7(0xab)];if(!Y(_0x28d26b,_0x48bb3a,_0x3acc6e))return _0x28d26b[_0x4179c7(0xab)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x28d26b[_0x4179c7(0xab)];let _0x2edb16=W(_0x28d26b),_0x5ef6f2=_0x2edb16[_0x4179c7(0x120)],_0x8c0e38=_0x2edb16[_0x4179c7(0x14e)],_0x775af0=_0x2edb16['now'],_0x37ae42={'hits':{},'ts':{}},_0x271dc4=Q(_0x28d26b,_0x562c9b,_0x37ae42,_0xb31e8a),_0x40887a=_0x157c27=>{_0x37ae42['ts'][_0x157c27]=_0x8c0e38();},_0x4c7858=(_0x5e2d6e,_0xa9efb0)=>{var _0x1d804c=_0x4179c7;let _0x38224d=_0x37ae42['ts'][_0xa9efb0];if(delete _0x37ae42['ts'][_0xa9efb0],_0x38224d){let _0x4d05b1=_0x5ef6f2(_0x38224d,_0x8c0e38());_0x50bf3f(_0x271dc4(_0x1d804c(0x88),_0x5e2d6e,_0x775af0(),_0x269281,[_0x4d05b1],_0xa9efb0));}},_0x3bf854=_0x3c20a0=>_0x5e5610=>{try{_0x40887a(_0x5e5610),_0x3c20a0(_0x5e5610);}finally{_0x28d26b['console']['time']=_0x3c20a0;}},_0x41b2bd=_0x3d5bf2=>_0x249369=>{var _0x4f3838=_0x4179c7;try{let [_0x320d6d,_0x3a9fcf]=_0x249369[_0x4f3838(0xd1)](':logPointId:');_0x4c7858(_0x3a9fcf,_0x320d6d),_0x3d5bf2(_0x320d6d);}finally{_0x28d26b[_0x4f3838(0x167)][_0x4f3838(0xdb)]=_0x3d5bf2;}};_0x28d26b[_0x4179c7(0xab)]={'consoleLog':(_0x1e4a25,_0x3e9aac)=>{var _0x37ae58=_0x4179c7;_0x28d26b[_0x37ae58(0x167)][_0x37ae58(0x166)][_0x37ae58(0xce)]!==_0x37ae58(0xaa)&&_0x50bf3f(_0x271dc4('log',_0x1e4a25,_0x775af0(),_0x269281,_0x3e9aac));},'consoleTrace':(_0x2e5d66,_0x5d86a7)=>{var _0x566a51=_0x4179c7;_0x28d26b[_0x566a51(0x167)][_0x566a51(0x166)][_0x566a51(0xce)]!==_0x566a51(0xe3)&&_0x50bf3f(_0x271dc4('trace',_0x2e5d66,_0x775af0(),_0x269281,_0x5d86a7));},'consoleTime':()=>{var _0x3872be=_0x4179c7;_0x28d26b[_0x3872be(0x167)][_0x3872be(0x88)]=_0x3bf854(_0x28d26b[_0x3872be(0x167)][_0x3872be(0x88)]);},'consoleTimeEnd':()=>{var _0x46f7aa=_0x4179c7;_0x28d26b[_0x46f7aa(0x167)][_0x46f7aa(0xdb)]=_0x41b2bd(_0x28d26b[_0x46f7aa(0x167)][_0x46f7aa(0xdb)]);},'autoLog':(_0x30db6a,_0x575525)=>{_0x50bf3f(_0x271dc4('log',_0x575525,_0x775af0(),_0x269281,[_0x30db6a]));},'autoLogMany':(_0x5e2b9a,_0xc6f081)=>{var _0x50e661=_0x4179c7;_0x50bf3f(_0x271dc4(_0x50e661(0x166),_0x5e2b9a,_0x775af0(),_0x269281,_0xc6f081));},'autoTrace':(_0x45e64c,_0x44527a)=>{var _0x8b3c8c=_0x4179c7;_0x50bf3f(_0x271dc4(_0x8b3c8c(0xe9),_0x44527a,_0x775af0(),_0x269281,[_0x45e64c]));},'autoTraceMany':(_0x3f8cd0,_0x517948)=>{var _0x5e7d9c=_0x4179c7;_0x50bf3f(_0x271dc4(_0x5e7d9c(0xe9),_0x3f8cd0,_0x775af0(),_0x269281,_0x517948));},'autoTime':(_0xeef646,_0x41360b,_0x40a6da)=>{_0x40887a(_0x40a6da);},'autoTimeEnd':(_0x510f96,_0x22226b,_0x25d7cb)=>{_0x4c7858(_0x22226b,_0x25d7cb);},'coverage':_0x450634=>{var _0x35eaa9=_0x4179c7;_0x50bf3f({'method':_0x35eaa9(0x110),'version':_0xb31e8a,'args':[{'id':_0x450634}]});}};let _0x50bf3f=J(_0x28d26b,_0x1a2856,_0x5c2bb1,_0x3a10cf,_0x3acc6e,_0x350858),_0x269281=_0x28d26b[_0x4179c7(0x12f)];return _0x28d26b[_0x4179c7(0xab)];})(globalThis,_0x5eb929(0x15d),_0x5eb929(0xc1),_0x5eb929(0x14a),_0x5eb929(0x9c),_0x5eb929(0x154),_0x5eb929(0xcd),_0x5eb929(0xd3),_0x5eb929(0x14b),_0x5eb929(0xa2));");
  } catch (e) {}
}
;
function oo_oo(i) {
  for (var _len = arguments.length, v = new Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {
    v[_key2 - 1] = arguments[_key2];
  }
  try {
    oo_cm().consoleLog(i, v);
  } catch (e) {}
  return v;
}
;
function oo_tr(i) {
  for (var _len2 = arguments.length, v = new Array(_len2 > 1 ? _len2 - 1 : 0), _key3 = 1; _key3 < _len2; _key3++) {
    v[_key3 - 1] = arguments[_key3];
  }
  try {
    oo_cm().consoleTrace(i, v);
  } catch (e) {}
  return v;
}
;
function oo_ts() {
  try {
    oo_cm().consoleTime();
  } catch (e) {}
}
;
function oo_te() {
  try {
    oo_cm().consoleTimeEnd();
  } catch (e) {}
}
; /*eslint eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

/***/ }),

/***/ "./node_modules/core-js/fn/promise.js":
/*!********************************************!*\
  !*** ./node_modules/core-js/fn/promise.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
__webpack_require__(/*! ../modules/es7.promise.finally */ "./node_modules/core-js/modules/es7.promise.finally.js");
__webpack_require__(/*! ../modules/es7.promise.try */ "./node_modules/core-js/modules/es7.promise.try.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js").Promise;


/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/***/ (function(module) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/***/ (function(module) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/***/ (function(module) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/***/ (function(module) {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/***/ (function(module) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document);
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/***/ (function(module) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/***/ (function(module) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/***/ (function(module) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/***/ (function(module) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var document = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document);
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_invoke.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/***/ (function(module) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/***/ (function(module) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/***/ (function(module) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/***/ (function(module) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/***/ (function(module) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_microtask.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_microtask.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var macrotask = (__webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set);
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_new-promise-capability.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/_new-promise-capability.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  (__webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild)(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_perform.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_perform.js ***!
  \**************************************************/
/***/ (function(module) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_promise-resolve.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_promise-resolve.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/***/ (function(module) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

(__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource) = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var def = (__webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f);
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_species-constructor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_task.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_task.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/***/ (function(module) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/***/ (function(module) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_user-agent.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_user-agent.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol);
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
module.exports = (__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod) = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var test = {};
test[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.promise.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.promise.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var task = (__webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set);
var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/core-js/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/modules/_perform.js");
var userAgent = __webpack_require__(/*! ./_user-agent */ "./node_modules/core-js/modules/_user-agent.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.iterator.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.promise.finally.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.promise.finally.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.promise.try.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.promise.try.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/modules/_perform.js");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "./node_modules/es6-promise/dist/es6-promise.js":
/*!******************************************************!*\
  !*** ./node_modules/es6-promise/dist/es6-promise.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	0;
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}



var _isArray = void 0;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = void 0;
var customSchedulerFn = void 0;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var vertx = Function('return this')().require('vertx');
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = void 0;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;


  if (_state) {
    var callback = arguments[_state - 1];
    asap(function () {
      return invokeCallback(_state, child, callback, parent._result);
    });
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(2);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    var then$$1 = void 0;
    try {
      then$$1 = value.then;
    } catch (error) {
      reject(promise, error);
      return;
    }
    handleMaybeThenable(promise, value, then$$1);
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;


  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = void 0,
      callback = void 0,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = void 0,
      error = void 0,
      succeeded = true;

  if (hasCallback) {
    try {
      value = callback(detail);
    } catch (e) {
      succeeded = false;
      error = e;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
    resolve(promise, value);
  } else if (succeeded === false) {
    reject(promise, error);
  } else if (settled === FULFILLED) {
    fulfill(promise, value);
  } else if (settled === REJECTED) {
    reject(promise, value);
  }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

var Enumerator = function () {
  function Enumerator(Constructor, input) {
    this._instanceConstructor = Constructor;
    this.promise = new Constructor(noop);

    if (!this.promise[PROMISE_ID]) {
      makePromise(this.promise);
    }

    if (isArray(input)) {
      this.length = input.length;
      this._remaining = input.length;

      this._result = new Array(this.length);

      if (this.length === 0) {
        fulfill(this.promise, this._result);
      } else {
        this.length = this.length || 0;
        this._enumerate(input);
        if (this._remaining === 0) {
          fulfill(this.promise, this._result);
        }
      }
    } else {
      reject(this.promise, validationError());
    }
  }

  Enumerator.prototype._enumerate = function _enumerate(input) {
    for (var i = 0; this._state === PENDING && i < input.length; i++) {
      this._eachEntry(input[i], i);
    }
  };

  Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
    var c = this._instanceConstructor;
    var resolve$$1 = c.resolve;


    if (resolve$$1 === resolve$1) {
      var _then = void 0;
      var error = void 0;
      var didError = false;
      try {
        _then = entry.then;
      } catch (e) {
        didError = true;
        error = e;
      }

      if (_then === then && entry._state !== PENDING) {
        this._settledAt(entry._state, i, entry._result);
      } else if (typeof _then !== 'function') {
        this._remaining--;
        this._result[i] = entry;
      } else if (c === Promise$1) {
        var promise = new c(noop);
        if (didError) {
          reject(promise, error);
        } else {
          handleMaybeThenable(promise, entry, _then);
        }
        this._willSettleAt(promise, i);
      } else {
        this._willSettleAt(new c(function (resolve$$1) {
          return resolve$$1(entry);
        }), i);
      }
    } else {
      this._willSettleAt(resolve$$1(entry), i);
    }
  };

  Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
    var promise = this.promise;


    if (promise._state === PENDING) {
      this._remaining--;

      if (state === REJECTED) {
        reject(promise, value);
      } else {
        this._result[i] = value;
      }
    }

    if (this._remaining === 0) {
      fulfill(promise, this._result);
    }
  };

  Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
    var enumerator = this;

    subscribe(promise, undefined, function (value) {
      return enumerator._settledAt(FULFILLED, i, value);
    }, function (reason) {
      return enumerator._settledAt(REJECTED, i, reason);
    });
  };

  return Enumerator;
}();

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {Function} resolver
  Useful for tooling.
  @constructor
*/

var Promise$1 = function () {
  function Promise(resolver) {
    this[PROMISE_ID] = nextId();
    this._result = this._state = undefined;
    this._subscribers = [];

    if (noop !== resolver) {
      typeof resolver !== 'function' && needsResolver();
      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
    }
  }

  /**
  The primary way of interacting with a promise is through its `then` method,
  which registers callbacks to receive either a promise's eventual value or the
  reason why the promise cannot be fulfilled.
   ```js
  findUser().then(function(user){
    // user is available
  }, function(reason){
    // user is unavailable, and you are given the reason why
  });
  ```
   Chaining
  --------
   The return value of `then` is itself a promise.  This second, 'downstream'
  promise is resolved with the return value of the first promise's fulfillment
  or rejection handler, or rejected if the handler throws an exception.
   ```js
  findUser().then(function (user) {
    return user.name;
  }, function (reason) {
    return 'default name';
  }).then(function (userName) {
    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
    // will be `'default name'`
  });
   findUser().then(function (user) {
    throw new Error('Found user, but still unhappy');
  }, function (reason) {
    throw new Error('`findUser` rejected and we're unhappy');
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
  });
  ```
  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
   ```js
  findUser().then(function (user) {
    throw new PedagogicalException('Upstream error');
  }).then(function (value) {
    // never reached
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // The `PedgagocialException` is propagated all the way down to here
  });
  ```
   Assimilation
  ------------
   Sometimes the value you want to propagate to a downstream promise can only be
  retrieved asynchronously. This can be achieved by returning a promise in the
  fulfillment or rejection handler. The downstream promise will then be pending
  until the returned promise is settled. This is called *assimilation*.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // The user's comments are now available
  });
  ```
   If the assimliated promise rejects, then the downstream promise will also reject.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // If `findCommentsByAuthor` fulfills, we'll have the value here
  }, function (reason) {
    // If `findCommentsByAuthor` rejects, we'll have the reason here
  });
  ```
   Simple Example
  --------------
   Synchronous Example
   ```javascript
  let result;
   try {
    result = findResult();
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
  findResult(function(result, err){
    if (err) {
      // failure
    } else {
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findResult().then(function(result){
    // success
  }, function(reason){
    // failure
  });
  ```
   Advanced Example
  --------------
   Synchronous Example
   ```javascript
  let author, books;
   try {
    author = findAuthor();
    books  = findBooksByAuthor(author);
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
   function foundBooks(books) {
   }
   function failure(reason) {
   }
   findAuthor(function(author, err){
    if (err) {
      failure(err);
      // failure
    } else {
      try {
        findBoooksByAuthor(author, function(books, err) {
          if (err) {
            failure(err);
          } else {
            try {
              foundBooks(books);
            } catch(reason) {
              failure(reason);
            }
          }
        });
      } catch(error) {
        failure(err);
      }
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findAuthor().
    then(findBooksByAuthor).
    then(function(books){
      // found books
  }).catch(function(reason){
    // something went wrong
  });
  ```
   @method then
  @param {Function} onFulfilled
  @param {Function} onRejected
  Useful for tooling.
  @return {Promise}
  */

  /**
  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
  as the catch block of a try/catch statement.
  ```js
  function findAuthor(){
  throw new Error('couldn't find that author');
  }
  // synchronous
  try {
  findAuthor();
  } catch(reason) {
  // something went wrong
  }
  // async with promises
  findAuthor().catch(function(reason){
  // something went wrong
  });
  ```
  @method catch
  @param {Function} onRejection
  Useful for tooling.
  @return {Promise}
  */


  Promise.prototype.catch = function _catch(onRejection) {
    return this.then(null, onRejection);
  };

  /**
    `finally` will be invoked regardless of the promise's fate just as native
    try/catch/finally behaves
  
    Synchronous example:
  
    ```js
    findAuthor() {
      if (Math.random() > 0.5) {
        throw new Error();
      }
      return new Author();
    }
  
    try {
      return findAuthor(); // succeed or fail
    } catch(error) {
      return findOtherAuther();
    } finally {
      // always runs
      // doesn't affect the return value
    }
    ```
  
    Asynchronous example:
  
    ```js
    findAuthor().catch(function(reason){
      return findOtherAuther();
    }).finally(function(){
      // author was either found, or not
    });
    ```
  
    @method finally
    @param {Function} callback
    @return {Promise}
  */


  Promise.prototype.finally = function _finally(callback) {
    var promise = this;
    var constructor = promise.constructor;

    if (isFunction(callback)) {
      return promise.then(function (value) {
        return constructor.resolve(callback()).then(function () {
          return value;
        });
      }, function (reason) {
        return constructor.resolve(callback()).then(function () {
          throw reason;
        });
      });
    }

    return promise.then(callback, callback);
  };

  return Promise;
}();

Promise$1.prototype.then = then;
Promise$1.all = all;
Promise$1.race = race;
Promise$1.resolve = resolve$1;
Promise$1.reject = reject$1;
Promise$1._setScheduler = setScheduler;
Promise$1._setAsap = setAsap;
Promise$1._asap = asap;

/*global self*/
function polyfill() {
  var local = void 0;

  if (typeof __webpack_require__.g !== 'undefined') {
    local = __webpack_require__.g;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      local = Function('return this')();
    } catch (e) {
      throw new Error('polyfill failed because global object is unavailable in this environment');
    }
  }

  var P = local.Promise;

  if (P) {
    var promiseToString = null;
    try {
      promiseToString = Object.prototype.toString.call(P.resolve());
    } catch (e) {
      // silently ignored
    }

    if (promiseToString === '[object Promise]' && !P.cast) {
      return;
    }
  }

  local.Promise = Promise$1;
}

// Strange compat..
Promise$1.polyfill = polyfill;
Promise$1.Promise = Promise$1;

return Promise$1;

})));



//# sourceMappingURL=es6-promise.map


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ (function(module) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = "object" === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	__webpack_require__("./node_modules/core-js/fn/promise.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./jsFE/survey.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=survey.js.map