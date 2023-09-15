/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./jsFE/roadmap.js":
/*!*************************!*\
  !*** ./jsFE/roadmap.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gridjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gridjs */ "./node_modules/gridjs/dist/gridjs.module.js");
var _excluded = ["fullName", "organisation", "email", "country"],
  _excluded2 = ["id"],
  _excluded3 = ["fullName", "organisation", "email", "country"];
var _init, _draw;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var demo = true;
google.charts.load("current", {
  packages: ["corechart", "controls"]
});
var chartBubble;
var data;
var dashboard;
var selectedValue;
var network = null;
var DPSnetwork = null;
var DPSNetNodes;
var network2 = null;
var network2Nodes;
var toogleInfra = true;
var busOrientation = 1;
var bcList = {};
var customBBs = [];
var DPSs = {};
var viewsInfra = [];
var viewBCmc = [];
var selectedView = [];
var idBCdom = 1;
var idBCinf = 2;
var idLdom = 3;
var idOdom = 4;
var idSdom = 5;
var idTAdom = 6;
var idTIdom = 7;
var idLinf = 8;
var idOinf = 9;
var idSinf = 10;
var idTAinf = 11;
var idTIinf = 12;
var selectedBC;
var clickedBC;
var clickedDPSs = [];
var maxBudget = 0;
var currentBBTableBody;
var fileContent = {};
var inputBCJSON;
var inputBBJSON;
var inputDPSJSON;
var myChart;
var hAxisLabes = {
  1: "National Digital Strategy Fit",
  5: "Expected Public Value"
};
var policyColors = {
  health: "#e74a3b",
  tax: "#4e73df",
  "business agnostic": "#1cc88a",
  infrastructure: "#1cc88a"
};
var policyColorsWithOpacity = {
  health: "#e74a3b80",
  tax: "#4e73df80",
  "business agnostic": "#1cc88a80",
  infrastructure: "#1cc88a80"
};
var policyImages = {
  health: "../img/health.png",
  tax: "../img/tax.png",
  "business agnostic": "../img/tech.png"
};
var natDigStrategicFitTooltip = "It reports the strategic priority assigned to the Digital Business Capability by the national digital agenda of the country.";
var expPubValueTooltip = "It refers to the expected beneficial impact (cost discounted) provided by the target prospective ability (*) to support the Digital Business Capability. (*) default is the highest possible prospective ability";
var abToSuppDbusCapTooltip = "It measures the current ability to support the Digital Business Capability";
var budgetTooltip = "It refers to the estimated amount (in millions of EUR) required to reach the target prospective ability of the Architectural Building Block to support the Digital Business Capability (to fulfill the GAP)";
var optimalAvgTooltip = "It measures the perspective ability to support a Digital Business Capability";
/**
 *
 * Create an object from the array of DPS and group them by id
 */
var groupDPSsByID = function groupDPSsByID(array) {
  return array.reduce(function (obj, item) {
    var id = item.ID.toString();
    var policy = item.Policy.trim().toLowerCase().replace(/ /g, " ");
    var name = item.Name.toString();
    var description = (item.Description || "").trim();
    var abbs = [];
    var dBCs = [];
    if (item["Digital_Business_Capability"] && item["Digital_Business_Capability"] !== null) {
      var tempDBCS = item["Digital_Business_Capability"].toString().trim();
      dBCs = tempDBCS.split(";").filter(Boolean);
    }
    var tempObj = _defineProperty({}, id, {
      id: id,
      policy: policy,
      name: name,
      description: description,
      dBCs: dBCs,
      abbs: abbs
    });
    return _objectSpread(_objectSpread({}, obj), tempObj);
  }, {});
};

/**
 *
 * Create an object from the array of ABBs and group them by id
 */
var groupABBByID = function groupABBByID(array) {
  return array.reduce(function (obj, item) {
    var id = item.ID.toString();
    var policy = item.Policy.trim().toLowerCase();
    var policyToCompare = policy.split(" ").filter(Boolean).join("-");
    var view = item.View.split(" ").filter(function (v) {
      return v.toLowerCase() !== "view";
    }).filter(Boolean).join("").toLowerCase();
    var area = item.Area.trim().split("-").filter(Boolean).map(function (str) {
      return str.trim();
    }).map(function (str) {
      return str.toLowerCase();
    }).join("-");
    var abb = item["Architecture_Building_Block"].trim();
    var description = (item.Description || "").trim();
    var ability = null;
    var successors = [];
    var digPubServ = [];
    if (item.successors !== undefined && item.successors !== null) {
      var tempSuccessors = item.successors.toString();
      successors = tempSuccessors.split(";").filter(Boolean);
    }
    if (item["Digital_Public_Service"] !== undefined && item["Digital_Public_Service"] !== null) {
      var tempDPS = item["Digital_Public_Service"].toString();
      digPubServ = tempDPS.split(";").filter(Boolean);
    }
    var abbObject = {
      id: id,
      policy: policy,
      view: view,
      area: area,
      abb: abb,
      description: description,
      ability: ability,
      successors: successors,
      digPubServ: digPubServ
    };
    var tempObj = _defineProperty({}, id, abbObject);
    if (policyToCompare === "business-agnostic") {
      for (var x in viewsInfra) {
        if (viewsInfra[x].name == view) {
          viewsInfra[x].bbs.push(abbObject);
          break;
        }
      }
    }
    return _objectSpread(_objectSpread({}, obj), tempObj);
  }, {});
};

/**
 *
 * Create an object from the array of dBusCaps and group them by id
 */
var groupBCByID = function groupBCByID(array) {
  return array.reduce(function (obj, item) {
    var id = item.ID.toString().trim();
    var policy = item.Policy.trim();
    var name = item.Name.trim();
    var description = item.Description.toString().trim();
    var bbs = [];
    var dps = [];
    var views = [];
    var view0 = createView("legal", idLdom, policy);
    var view1 = createView("organisational", idOdom, policy);
    var view2 = createView("semantic", idSdom, policy);
    var view3 = createView("technical-application", idTAdom, policy);
    var view4 = createView("technical-infrastructure", idTIdom, policy);
    var priority = null;
    var avgAbility = null;
    var prospectiveAbility = null;
    views.push(view0);
    views.push(view1);
    views.push(view2);
    views.push(view3);
    views.push(view4);
    obj[id] = {
      id: id,
      policy: policy,
      name: name,
      description: description,
      views: views,
      priority: priority,
      avgAbility: avgAbility,
      bbs: bbs,
      dps: dps,
      prospectiveAbility: prospectiveAbility
    };
    return obj;
  }, {});
};

// *********************************************************
// PDF Creation Functionality (with jspdf & jspdf.autotalbe)
// *********************************************************

/**
 * Adds the explanatory texts in the PDF
 * 
 * @param {Object} pdf PDF Object
 * @param {Number} startX x coordinate  
 * @param {Number} startY y coordinate
 * @param {Number} sentenceNum key for the addExplanatoryText
 */
function addExplanatoryText(pdf, startX, startY, sentenceNum) {
  var explanatorySentences = {
    1: ["The quadrant represents the", "scores assigned to the evaluated digital", "business capability/ies, according to the", "following parameters:", "   • National Strategy Fit", "   • Ability to support the dBusCap", "   • Target Perspective Ability to Support", "     dBusCap", "   • Expected Public Value and the", "   • Estimated budget (in millions EUR)"],
    2: ["In addition to the information visible from the quadrant, in the following table you can find a summary of the Capability ", "Assessment Results. In particular, the below table shows the current MS's ability to support the evaluated digital ", "business capability/ies and the target ability to support the evaluated Digital Business Capabilities. As a result, the ", "estimated budget aims to fulfil the GAP between the 'AS IS ability' and the target prospective ability. Moreover, the ", "scores are reported per area/view (legal, organisation, semantic, technical-application and technical infrastructure).", "Finally, you find a summary of the assigned parameters (National Digital fit, Expected Public Value and Estimated ", "Budget) to evaluated Digital Business Capability/ies."],
    3: ["The following table sumarises the selected Digital Business Capabilities"],
    4: ["Below, you have a summary table and a graphical representation of all the Digital Public Services in", "scope, meaning the ones supporting the selected Digital Business Capability"],
    5: ["The following graph represents the MS's Digital Transformation Roadmap, by which the user can", "select the different orientation for the implementation of the selected digital bysiness capability"],
    6: ["The following table summarises the selected Digital Business Capabilities"],
    7: ["Below you can see the graphical representation of the functionalities (i.e. Skills, expertise, experience", "etc.) supporting the selected Digital Business Capability, based on the MS's orientation (legal,", "organizational, semantic and technical) priority chosen. The content of the nodes (expressed by the", "blue color) is variable because it reflects the relation between the ABBs and the ability to support", "the selected Digital Business Capability"],
    8: ["The following is a table containing the list of the functionalities (i.e. Skills, expertise, experience, etc.)", "needed to implement the selected Digital Business Capability"]
  };

  // Gap between lines
  var lineGap;
  // set font parameters
  if (sentenceNum === 2) {
    pdf.setFontSize(10);
    lineGap = 5;
  } else {
    pdf.setFontSize(12);
    lineGap = 7;
  }
  pdf.setFontType('italic');
  pdf.setTextColor(0, 0, 0); // black

  // Add the sentences into the PDF
  var text = explanatorySentences[sentenceNum];
  var y = startY;
  for (var i = 0; i < text.length; i++) {
    pdf.text(text[i], startX, y);
    y = y + lineGap;
  }
}

/**
 * Creates the header and footer for the PDF
 * 
 * @param {*} pdf PDF Object
 * @param {*} title PDF's title
 */
function addPageTemplate(pdf, titleNum) {
  // Title's object
  var titleInfo = {
    1: {
      title: "Introduction",
      coordinates: [88, 20]
    },
    2: {
      title: "Portfolio Management Decision Support",
      coordinates: [45, 20]
    },
    3: {
      title: "Digital Transformation Roadmap Decision Support",
      coordinates: [30, 20]
    },
    4: {
      title: "eGovERA© Building Blocks",
      coordinates: [65, 20]
    }
  };

  // Add top right icon
  var rightIcon = new Image();
  rightIcon.src = "../img/ec2.png";
  var rightIconCoords = [180, 1, 25, 18]; // x, y, width, height
  pdf.addImage.apply(pdf, [rightIcon, 'png'].concat(rightIconCoords));

  // Add top left icon and sentence
  var leftIcon = new Image();
  leftIcon.src = "../img/egovera-icon2.png";
  var leftIconCoords = [4, 2, 12, 11];
  pdf.addImage.apply(pdf, [leftIcon, 'png'].concat(leftIconCoords));
  var topSentCoords = [15, 10]; // x, y
  var topSentence = "eGovERA ©";
  pdf.setTextColor(0, 0, 0); // black
  pdf.setFontType('normal');
  pdf.setFontSize(15);
  pdf.text.apply(pdf, [topSentence].concat(topSentCoords));

  // Add bottom left sentence
  var leftSentCoords = [10, 292]; // x, y
  var leftSentence = "Copyright © European Commission 2022";
  pdf.setFontSize(10);
  pdf.setTextColor(192, 192, 192);
  pdf.setFontType('italic');
  pdf.text.apply(pdf, [leftSentence].concat(leftSentCoords));

  // Add bottom right sentence and underline
  var rightSentCoords = [160, 292]; // x, y
  var rightSentence = "ISA product license v1.4";
  pdf.setFontSize(10);
  pdf.setTextColor(102, 178, 255); // light blue
  pdf.text.apply(pdf, [rightSentence].concat(rightSentCoords));
  pdf.setLineWidth(0.1);
  pdf.setDrawColor(102, 178, 255); // light blue
  pdf.line(160, 293, 198, 293); // startX, startY, endX, endY

  // Add title
  var titleCoords = titleInfo[titleNum].coordinates;
  var titleSentence = titleInfo[titleNum].title;
  pdf.setFontSize(17);
  pdf.setTextColor(0, 153, 0); // green
  pdf.setFontType('bold');
  pdf.text.apply(pdf, [titleSentence].concat(_toConsumableArray(titleCoords)));
}

/**
 * Creates the Introductory Page for the PDF
 * 
 * @param {Object} pdf PDF Object
 */
function addIntroductoryPage(pdf) {
  //pdf.addPage();
  addPageTemplate(pdf, 1);

  // Add sentence1
  var sentence1 = "DG DIGIT";
  var sentence1Coords = [90, 60];
  pdf.setFontSize(20);
  pdf.setTextColor(0, 0, 0); // black
  pdf.setFontType('bold');
  pdf.text.apply(pdf, [sentence1].concat(sentence1Coords));

  // Add sentence2
  var sentence2 = "Unit.D2";
  var sentence2Coords = [93, 70];
  pdf.text.apply(pdf, [sentence2].concat(sentence2Coords));

  // Add sentence3
  var sentence3 = "eGovERA © portal";
  var sentence3Coords = [52, 100];
  pdf.setFontSize(35);
  pdf.setTextColor(51, 153, 255); // blue
  pdf.text.apply(pdf, [sentence3].concat(sentence3Coords));

  // Add sentence4
  var sentence4 = "Decision support section";
  var sentence4Coords = [49, 130];
  pdf.setTextColor(0, 153, 0); // light green
  pdf.setFontSize(27);
  pdf.text.apply(pdf, [sentence4].concat(sentence4Coords));

  // Add sentence5
  var sentence5 = "PDF export results";
  var sentence5Coords = [65, 145];
  pdf.text.apply(pdf, [sentence5].concat(sentence5Coords));

  // Add user's information 
  pdf.setTextColor(0, 0, 0); // black
  pdf.setFontSize(12);
  pdf.setFontType('bold');
  pdf.text("User name and surname:", 10, 250);
  pdf.text("Organisation:", 10, 258);
  pdf.text("Country:", 10, 266);
  pdf.text("Contact E-mail:", 10, 274);
  pdf.setFontType('normal');
  pdf.text(fileContent.fullName, 62, 250);
  pdf.text(fileContent.organisation, 39, 258);
  pdf.text(fileContent.country, 29, 266);
  pdf.text(fileContent.email, 43, 274);
}

// Start the loading functionality for the PDF Download button
function startLoader(textId, buttonId) {
  document.querySelector("#".concat(textId)).classList.add('download-btn-text-hidden');
  document.querySelector("#".concat(buttonId)).classList.add('button-loader');
}

// Stop the loading functionality for the PDF Download button
function stopLoader(textId, buttonId) {
  document.querySelector("#".concat(textId)).classList.remove('download-btn-text-hidden');
  document.querySelector("#".concat(buttonId)).classList.remove('button-loader');
}

// When the pdf download button is clicked
document.getElementById('pdfButton').addEventListener('click', createPDF);

/**
 * Structure the PDF
 */
function createPDF() {
  // Create the PDF Object
  var pdf = new jsPDF();
  var pdfName = 'decision-support.pdf';
  startLoader("pdfButtonTxt", "pdfButton");

  // Add to the PDF Object the Portfolio Management Table and Graph
  html2canvas(document.querySelector('[aria-label="A chart."]')).then(function (canvas) {
    if (!(canvas.height === 0) && !(canvas.width === 0)) {
      var _pdf$autoTable;
      addIntroductoryPage(pdf);

      // Add the Graph of the Portofolio Management Section
      pdf.addPage();
      addPageTemplate(pdf, 2);
      addExplanatoryText(pdf, 15, 55, 1);
      addExplanatoryText(pdf, 15, 160, 2);
      var img = canvas.toDataURL('image/url');
      pdf.addImage(img, 'png', 95, 30, 105, 120);

      // Add the Table of the Portofolio Management Section
      var titles = [["ID"], ["Policy Domain"], ["Digital Business Capability"], ["National Digital Strategy Fit"], ["Target Prospective Ability to support the dBusCap"], ["Estimated budget (in millions EUR)"], ["Expected Public Value"], ["Overall ability to support the dBusCap"], ["View Name"], ["Ability to support the dBusCap per view"]];

      // If dBusCap selected
      var currentBcList;
      if (selectedValue) {
        currentBcList = _defineProperty({}, selectedValue, bcList[selectedValue]);
      } else {
        currentBcList = bcList;
      }
      var _data = [];
      var count = 0;
      // Populate the rows of the table
      for (var key in currentBcList) {
        for (var viewKey in currentBcList[key]['views']) {
          var row = [currentBcList[key]['views'][viewKey]['name'], currentBcList[key]['views'][viewKey]['avgAbility']];
          if (count % 5 === 0) {
            row.unshift({
              rowSpan: 5,
              content: currentBcList[key]['id'],
              styles: {
                valign: 'middle',
                halign: 'center'
              }
            }, {
              rowSpan: 5,
              content: currentBcList[key]['policy'],
              styles: {
                valign: 'middle',
                halign: 'center'
              }
            }, {
              rowSpan: 5,
              content: currentBcList[key]['name'],
              styles: {
                valign: 'middle',
                halign: 'center'
              }
            }, {
              rowSpan: 5,
              content: currentBcList[key]['prospectiveAbility'],
              styles: {
                valign: 'middle',
                halign: 'center'
              }
            }, {
              rowSpan: 5,
              content: currentBcList[key]['priority'],
              styles: {
                valign: 'middle',
                halign: 'center'
              }
            }, {
              rowSpan: 5,
              content: currentBcList[key]['budget'],
              styles: {
                valign: 'middle',
                halign: 'center'
              }
            }, {
              rowSpan: 5,
              content: currentBcList[key]['expRandom'],
              styles: {
                valign: 'middle',
                halign: 'center'
              }
            }, {
              rowSpan: 5,
              content: currentBcList[key]['avgAbility'],
              styles: {
                valign: 'middle',
                halign: 'center'
              }
            });
          }
          _data.push(row);
          count++;
        }
      }
      pdf.autoTable(titles, _data, (_pdf$autoTable = {
        columnStyles: {
          0: {
            cellWidth: 17
          },
          1: {
            cellWidth: 16
          },
          2: {
            cellWidth: 16
          },
          3: {
            cellWidth: 16
          },
          4: {
            cellWidth: 18
          },
          5: {
            cellWidth: 18
          },
          6: {
            cellWidth: 19
          },
          7: {
            cellWidth: 20
          },
          8: {
            cellWidth: 25
          },
          9: {
            columnWidth: 14
          }
        },
        theme: 'grid',
        headStyles: {
          fillColor: [8, 161, 88],
          fontSize: 7,
          halign: 'center',
          valign: 'middle'
        },
        margin: {
          right: 20
        },
        startY: 200
      }, _defineProperty(_pdf$autoTable, "margin", {
        top: 30
      }), _defineProperty(_pdf$autoTable, "didDrawPage", function didDrawPage() {
        addPageTemplate(pdf, 2);
      }), _pdf$autoTable));

      // Add the Information for the first section of the Digital Transformation Roadmap
      html2canvas(document.querySelector('#dps-network-info')).then(function (canvas) {
        if (!(canvas.height === 0) && !(canvas.width === 0)) {
          pdf.addPage();
          addPageTemplate(pdf, 3);
          addExplanatoryText(pdf, 15, 35, 3);
          addExplanatoryText(pdf, 15, 93, 4);
          var titles1 = [["Selected Digital Business Capability"]];
          var titles2 = [["Table of Digital Public Services in scope"]];
          var data1 = [[document.getElementById("dps-network-bc-info").getElementsByTagName('p')[0].textContent.split(":")[0], document.getElementById("dps-network-bc-info").getElementsByTagName('p')[0].textContent.split(":")[1]], [document.getElementById("dps-network-bc-info").getElementsByTagName('p')[1].textContent.split(":")[0], document.getElementById("dps-network-bc-info").getElementsByTagName('p')[1].textContent.split(":")[1]], [document.getElementById("dps-network-bc-info").getElementsByTagName('p')[2].textContent.split(":")[0], document.getElementById("dps-network-bc-info").getElementsByTagName('p')[2].textContent.split(":")[1]], [document.getElementById("dps-network-bc-info").getElementsByTagName('p')[3].textContent.split(":")[0], document.getElementById("dps-network-bc-info").getElementsByTagName('p')[3].textContent.split(":")[1]]];
          var data2 = [];
          var liItemsArr = [];
          var liItems = document.getElementById("dps-select-info").getElementsByTagName('li');
          for (var i = 0; i < liItems.length; i++) {
            if (clickedDPSs.length !== 0) {
              var id = liItems[i].textContent.split("-")[0].trim();
              for (var j = 0; j < clickedDPSs.length; j++) {
                if (id === clickedDPSs[j]) {
                  liItemsArr.push(liItems[i].textContent);
                }
              }
            } else {
              liItemsArr.push(liItems[i].textContent);
            }
          }

          // Create rows of three liItems
          var num = 0;
          for (var _i = 0; _i < Math.floor(liItemsArr.length / 3) + 1; _i++) {
            var currRow = [];
            for (var _j = 0; _j < 3; _j++) {
              if (num < liItemsArr.length) {
                currRow.push(liItemsArr[num]);
              }
              num += 1;
            }
            if (currRow.length > 0) {
              data2.push(currRow);
            }
          }
          pdf.autoTable({
            startY: 42,
            head: [[{
              content: titles1,
              colSpan: 2,
              styles: {
                halign: 'center',
                fillColor: [8, 161, 88]
              }
            }]],
            body: data1,
            theme: "grid",
            talbeWidth: 900
          });
          pdf.autoTable({
            startY: 105,
            head: [[{
              content: titles2,
              colSpan: 3,
              styles: {
                halign: 'center',
                fillColor: [8, 161, 88]
              }
            }]],
            body: data2,
            theme: "grid"
          });

          // Add the Graph for the first section of the Digital Transformation Roadmap
          html2canvas(document.querySelector('#dps-network-div')).then(function (canvas) {
            if (!(canvas.height === 0) && !(canvas.width === 0)) {
              // set the space between the table and the graph
              var decreasedSpace = 0;
              switch (data2.length) {
                case 1:
                  decreasedSpace = 45;
                  break;
                case 2:
                  decreasedSpace = 35;
                  break;
                case 3:
                  decreasedSpace = 24;
                  break;
                case 4:
                  decreasedSpace = 11;
                  break;
                case 5:
                  decreasedSpace = 0;
                  break;
              }
              var _img = canvas.toDataURL('image/url');
              var imgProps = pdf.getImageProperties(_img);
              var pdfWidth = pdf.internal.pageSize.getWidth();
              var pdfHeight = imgProps.height * pdfWidth / imgProps.width;
              pdf.addImage(_img, 'png', 14, 180 - decreasedSpace, pdfWidth - 24, pdfHeight);
              var graphTitle1 = "Graphical representation of the Digital Public services in scope";
              pdf.autoTable({
                startY: 174 - decreasedSpace,
                head: [[{
                  content: graphTitle1,
                  styles: {
                    halign: 'center',
                    fillColor: [8, 161, 88]
                  }
                }]],
                margin: {
                  right: 10
                }
              });

              // Add the Information for the second section of the Digital Transformation Roadmap
              html2canvas(document.querySelector('#network_control')).then(function (canvas) {
                if (!(canvas.height === 0) && !(canvas.width === 0)) {
                  pdf.addPage();
                  addPageTemplate(pdf, 3);
                  addExplanatoryText(pdf, 15, 35, 5);
                  var title = [["Implementation orientation for the digital transformation"]];
                  var _data2 = [["Legal Orientation: a member state has a legal orientation when its first priority, in the digital public service design, is to address and implement legal requirements"], ["Organizational/Governance Orientation: a member state has a governance orientation when its first priority, in the digital public service design, is to address the possible channels for the public service delivery, and the definition of Governance model"], ["Semantic/Intergration Orientation: a member state has a semantic/intergration orientation when its first priority, in the digital public service design, is to address the possible source of data (e.g. base registry), how data will be exchanged and to define guidelines and agreements for the sharing data"], ["Technical Orientation: a member state has a legal orientation when its first priority, in the digital public service design, is to reuse/share software components (e.g. registry services), to address exchanging capabilities of data (e.g. interfaces) and to define technical interoperability agreements"]];
                  pdf.autoTable({
                    startY: 160,
                    head: [[{
                      content: title,
                      styles: {
                        halign: 'center',
                        fillColor: [8, 161, 88]
                      },
                      fontStyle: 'bold'
                    }]],
                    body: _data2,
                    theme: "grid"
                  });

                  // Add the Graph for the second section of the Digital Transformation Roadmap
                  html2canvas(document.querySelector('#network_div')).then(function (canvas) {
                    if (!(canvas.height === 0) && !(canvas.width === 0)) {
                      var _img2 = canvas.toDataURL('image/url');
                      var _imgProps = pdf.getImageProperties(_img2);
                      var _pdfWidth = pdf.internal.pageSize.getWidth();
                      var _pdfHeight = _imgProps.height * _pdfWidth / _imgProps.width;
                      pdf.addImage(_img2, 'png', 14, 51, _pdfWidth - 24, _pdfHeight);

                      // Add the title
                      var graphTitle2 = "Steps of the Digital Transformation Roadmap";
                      pdf.autoTable({
                        startY: 48,
                        head: [[{
                          content: graphTitle2,
                          styles: {
                            halign: 'center',
                            fillColor: [8, 161, 88]
                          }
                        }]],
                        margin: {
                          right: 10
                        }
                      });

                      // Add the Information for the third section of the Digital Transformation Roadmap
                      html2canvas(document.querySelector('#graph3_info')).then(function (canvas) {
                        if (!(canvas.height === 0) && !(canvas.width === 0)) {
                          pdf.addPage();
                          addPageTemplate(pdf, 3);
                          addExplanatoryText(pdf, 15, 35, 6);
                          addExplanatoryText(pdf, 15, 90, 7);
                          var titles1 = [["Digital Business Capability"]];
                          var data1 = [[document.getElementById("dps-network-bc-info").getElementsByTagName('p')[0].textContent.split(":")[0], document.getElementById("dps-network-bc-info").getElementsByTagName('p')[0].textContent.split(":")[1]], [document.getElementById("dps-network-bc-info").getElementsByTagName('p')[1].textContent.split(":")[0] + " domain", document.getElementById("dps-network-bc-info").getElementsByTagName('p')[1].textContent.split(":")[1]], [document.getElementById("dps-network-bc-info").getElementsByTagName('p')[2].textContent.split(":")[0], document.getElementById("dps-network-bc-info").getElementsByTagName('p')[2].textContent.split(":")[1]], ["Estimated Budget (in millions EUR)", "".concat(maxBudget)]];
                          pdf.autoTable({
                            startY: 40,
                            head: [[{
                              content: titles1,
                              colSpan: 2,
                              styles: {
                                halign: 'center',
                                fillColor: [8, 161, 88]
                              }
                            }]],
                            body: data1,
                            theme: "grid",
                            talbeWidth: 900
                          });
                        }
                        // Add the Graph for the third section of the Digital Transformation Roadmap
                        html2canvas(document.querySelector('#network_div2')).then(function (canvas) {
                          if (!(canvas.height === 0) && !(canvas.width === 0)) {
                            var _img3 = canvas.toDataURL('image/url');
                            var _imgProps2 = pdf.getImageProperties(_img3);
                            var _pdfWidth2 = pdf.internal.pageSize.getWidth();
                            var _pdfHeight2 = _imgProps2.height * _pdfWidth2 / _imgProps2.width;
                            pdf.addImage(_img3, 'png', 14, 132, _pdfWidth2 - 24, _pdfHeight2);
                            var graphTitle3 = "Functionalities supporting the Digital Business Capability";
                            pdf.autoTable({
                              startY: 125,
                              head: [[{
                                content: graphTitle3,
                                styles: {
                                  halign: 'center',
                                  fillColor: [8, 161, 88]
                                }
                              }]],
                              margin: {
                                right: 10
                              }
                            });
                          }

                          // Add the Building Blocks Table
                          html2canvas(document.querySelector('#bb-div')).then(function (canvas) {
                            if (!(canvas.height === 0) && !(canvas.width === 0)) {
                              pdf.addPage();
                              addPageTemplate(pdf, 4);
                              addExplanatoryText(pdf, 15, 35, 8);
                              var titles = [["ID"], ["View"], ["Area"], ["Name"], ["Description"], ["Ability to support the dBusCap"], ["ID's succesors"]];
                              var data = [];
                              for (var _key in currentBBTableBody) {
                                var row = [currentBBTableBody[_key]['id'], currentBBTableBody[_key]['view'], currentBBTableBody[_key]['area'], currentBBTableBody[_key]['abb'], currentBBTableBody[_key]['description'], currentBBTableBody[_key]['ability'], currentBBTableBody[_key]['successors']];
                                data.push(row);
                              }
                              pdf.autoTable(titles, data, {
                                startY: 50,
                                headStyles: {
                                  fillColor: [8, 161, 88]
                                },
                                rowPageBreak: 'auto',
                                bodyStyles: {
                                  valign: 'top'
                                },
                                columnStyles: {
                                  0: {
                                    cellWidth: 15
                                  },
                                  1: {
                                    cellWidth: 12
                                  },
                                  2: {
                                    cellWidth: 20
                                  },
                                  3: {
                                    cellWidth: 25
                                  },
                                  4: {
                                    cellWidth: 60
                                  },
                                  5: {
                                    cellWidth: 10
                                  },
                                  6: {
                                    cellWidth: 20
                                  },
                                  text: {
                                    cellWidth: 'auto'
                                  }
                                },
                                theme: 'grid',
                                margin: {
                                  top: 30
                                },
                                didDrawPage: function didDrawPage() {
                                  addPageTemplate(pdf, 4);
                                }
                              });
                              stopLoader("pdfButtonTxt", "pdfButton");
                              pdf.save(pdfName);
                            } else {
                              stopLoader("pdfButtonTxt", "pdfButton");
                              pdf.save(pdfName);
                            }
                          });
                        });
                      });
                    } else {
                      stopLoader("pdfButtonTxt", "pdfButton");
                      pdf.save(pdfName);
                    }
                  });
                } else {
                  stopLoader("pdfButtonTxt", "pdfButton");
                  pdf.save(pdfName);
                }
              });
            } else {
              stopLoader("pdfButtonTxt", "pdfButton");
              pdf.save(pdfName);
            }
          });
        } else {
          stopLoader("pdfButtonTxt", "pdfButton");
          pdf.save(pdfName);
        }
      });
    } else {
      stopLoader("pdfButtonTxt", "pdfButton");
      window.alert("Select a JSON file");
    }
  });
}

// ******************************
// PDF Creation Functionality END
// ******************************

function groupBy(obj, key, keyToKeep) {
  if (keyToKeep) {
    return obj.reduce(function (prevObj, current) {
      var tempKey = current[key];
      (prevObj[tempKey] = prevObj[tempKey] || []).push(current[keyToKeep]);
      return prevObj;
    }, {});
  }
  return obj.reduce(function (prevObj, current) {
    var tempKey = current[key];
    (prevObj[tempKey] = prevObj[tempKey] || []).push(current);
    return prevObj;
  }, {});
}
function sumOfArray(arr) {
  return arr.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  }, 0);
}
function maxOfArray(arr) {
  return arr.reduce(function (previousValue, currentValue) {
    if (previousValue < currentValue) return currentValue;
    return previousValue;
  }, 0);
}

/**
 * create th with text inside
 * @param {String} valueOnTextNode
 * @returns {DOMElement}
 */
function thWithTextNode(valueOnTextNode) {
  var th = document.createElement("th");
  var text = document.createTextNode(valueOnTextNode);
  th.appendChild(text);
  return th;
}

/**
 * Create span with question icon and the title attribute is the tooltip
 */
var createTooltipSpan = function createTooltipSpan(tooltip) {
  var tooltipSpan = document.createElement("span");
  tooltipSpan.className = "ml-1";
  tooltipSpan.setAttribute("title", tooltip);
  var icon = document.createElement("i");
  icon.className = "fa fa-question-circle text-primary";
  tooltipSpan.appendChild(icon);
  return tooltipSpan;
};

/**
 * create th with span inside
 */
function thWithSpanNode(valueOnTextNode) {
  var tooltip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var th = document.createElement("th");
  var span = document.createElement("span");
  span.innerText = valueOnTextNode;
  if (tooltip) {
    span.appendChild(createTooltipSpan(tooltip));
  }
  th.appendChild(span);
  return th;
}

/**
 * Capitalize a string
 */
function CA(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function init(_x) {
  return (_init = _init || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(JSONObj) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          $("#networkBBs").collapse("hide");
          $("#listBBs").collapse("hide");
          document.getElementById("egovera-portofolio").classList.remove("d-none");
          _context.next = 5;
          return draw(JSONObj);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }))).apply(this, arguments);
}
var fileSelector = document.getElementById("file-selector");
fileSelector.addEventListener("change", function (event) {
  var _ref;
  var file = event.target.files[0];
  if (file == null) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function (_x2) {
    return (_ref = _ref || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(event) {
      var testo, json;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            testo = event.target.result;
            json = JSON.parse(testo);
            fileContent = json;
            _context2.next = 5;
            return init(json);
          case 5:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))).apply(this, arguments);
  };
  reader.readAsText(file);
  this.parentElement.className = "";
  this.parentElement.classList.add("d-none");
});
var editedData = [];
var currentlyFilteredDBC = 'all';
var quadChart;

/**
 *
 */
function callBackForRequest(response, json) {
  // inputBCJSON = response.dBusCaps;
  // inputBBJSON = response.abb;
  // inputDPSJSON = response.dPubSer;
  // initInputfromJSON();
  //readSurveyResult(json);
  // createBusinessCapabilityTable();
  // drawBusinessCapabilityChart();
  // resizeQuandrant();

  var tableData = processSurveyResult(json);
  var originalData = _toConsumableArray(tableData);
  editedData = _toConsumableArray(tableData);
  updateTotalBudget();
  var tableGrid = new gridjs__WEBPACK_IMPORTED_MODULE_1__.Grid({
    columns: [{
      id: 'dbc',
      name: 'DBC'
    },
    // { id: 'policy', name: 'Policy Domain' },
    {
      id: 'strategicFit',
      name: 'Strategic Fit',
      attributes: {
        "contenteditable": "true"
      },
      tooltip: "Hola que tal"
    }, {
      id: 'dbcSupportAbility',
      name: 'DBC Support Ability',
      attributes: {
        "contenteditable": "true"
      }
    }, {
      id: 'supportTargetAbility',
      name: 'Support Target Ability',
      attributes: {
        "contenteditable": "true"
      }
    }, {
      id: 'expPublicValue',
      name: 'Expected Public Value',
      attributes: {
        "contenteditable": "true"
      }
    }, {
      id: 'budget',
      name: 'Estimated Budget (mill €)',
      attributes: {
        "contenteditable": "true"
      }
    }],
    data: editedData
  });
  populateDBCDropdown(editedData);
  tableGrid.render(document.getElementById('myGridTable'));
  document.getElementById('myGridTable').addEventListener('input', function (e) {
    var cell = e.target;
    var rowIndex = cell.parentElement.rowIndex - 1;
    if (cell.hasAttribute('contenteditable') && cell.getAttribute('contenteditable') === "true") {
      var _console;
      var validValue = cell.textContent.replace(/[^0-5]/g, '');
      if (validValue.length > 1 || validValue > 5) {
        cell.textContent = '';
      } else {
        cell.textContent = validValue;
      }
      switch (cell.cellIndex) {
        case 1:
          editedData[rowIndex].strategicFit = parseFloat(cell.textContent) || 0;
          break;
        case 2:
          editedData[rowIndex].dbcSupportAbility = parseFloat(cell.textContent) || 0;
          break;
        case 3:
          editedData[rowIndex].supportTargetAbility = parseFloat(cell.textContent) || 0;
          break;
        case 4:
          editedData[rowIndex].expPublicValue = parseFloat(cell.textContent) || 0;
          break;
        case 5:
          editedData[rowIndex].budget = parseFloat(cell.textContent) || 0;
          updateTotalBudget();
          break;
        default:
          break;
      }

      /* eslint-disable */
      (_console = console).log.apply(_console, _toConsumableArray(oo_oo("f59a272a_0", "Dato editado!")));
      if (currentlyFilteredDBC === 'all' || currentlyFilteredDBC === editedData[rowIndex].dbc) {
        var updatedData = prepareChartData(editedData);
        var datasetIndex = myChart.data.datasets.findIndex(function (dataset) {
          return dataset.label === editedData[rowIndex].dbc;
        });
        var updateQuadData = prepareQuadChartData(editedData);
        quadChart.data = updateQuadData;
        quadChart.update();
        if (datasetIndex !== -1) {
          myChart.data.datasets[datasetIndex] = updatedData.datasets[datasetIndex];
          myChart.update();
        }
      }
    }
  });
  var chartData = prepareChartData(editedData);
  var quadrantCharData = prepareQuadChartData(editedData);
  renderChart(chartData);
  renderQuadrantChart(quadrantCharData);
}
function prepareChartData(tableData) {
  var _console2;
  // Las etiquetas para el gráfico serán las diferentes dimensiones que mencionaste
  var labels = ["Strategic Fit", "DBC Support Ability", "Support Target Ability", "Expected Public Value", "Estimated Budget (mill €)"];
  var datasets = tableData.map(function (entry) {
    return {
      label: entry.dbc,
      backgroundColor: "rgba(172,194,132,0.2)",
      borderColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
      pointBackgroundColor: "#fff",
      pointBorderColor: "#9DB86D",
      data: [parseFloat(entry.strategicFit) || 0, parseFloat(entry.dbcSupportAbility) || 0, parseFloat(entry.supportTargetAbility) || 0, parseFloat(entry.expPublicValue) || 0, parseFloat(entry.budget) || 0]
    };
  });
  /* eslint-disable */
  (_console2 = console).log.apply(_console2, _toConsumableArray(oo_oo("f59a272a_1", "Prepared chart data:", {
    labels: labels,
    datasets: datasets
  }))); // Debug

  return {
    labels: labels,
    datasets: datasets
  };
}
function renderChart(data) {
  if (!myChart) {
    var ctx = document.getElementById('myChart').getContext('2d');
    myChart = new Chart(ctx, {
      type: 'radar',
      data: data,
      options: {
        scale: {
          ticks: {
            beginAtZero: true
          },
          pointLabels: {
            fontSize: 14
          }
        }
      }
    });
  } else {
    myChart.data.labels = data.labels;
    myChart.data.datasets = data.datasets;
    myChart.update();
  }
}
//plugin quadrant block
var quadrantLinesDEPRECATED = {
  id: 'quadrantLinesBCK',
  beforeDraw: function beforeDraw(chart) {
    var ctx = chart.ctx;
    var chartArea = chart.chartArea;

    // Obtiene las posiciones de pixel para el valor 2.5 en ambos ejes
    var midX = chart.scales['x'].getPixelForValue(2.5);
    var midY = chart.scales['y'].getPixelForValue(2.5);
    ctx.save();

    // Define el estilo de línea
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;

    // Dibuja la línea vertical
    ctx.beginPath();
    ctx.moveTo(midX, chartArea.top);
    ctx.lineTo(midX, chartArea.bottom);
    ctx.stroke();

    // Dibuja la línea horizontal
    ctx.beginPath();
    ctx.moveTo(chartArea.left, midY);
    ctx.lineTo(chartArea.right, midY);
    ctx.stroke();
    ctx.restore();
  }
};
var quadrantLines = {
  id: 'quadrantLines',
  beforeDatasetsDraw: function beforeDatasetsDraw(chart, args, pluginOptions) {
    var ctx = chart.ctx;
    var xAxis = chart.scales["x-axis-0"];
    var yAxis = chart.scales["y-axis-0"];
    drawScatterArbitraryLine(2.5, 2.5, 0, 5);
    drawScatterArbitraryLine(0, 5, 2.5, 2.5);
    function drawScatterArbitraryLine(xS, xE, yS, yE) {
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(xAxis.getPixelForValue(xS), yAxis.getPixelForValue(yS));
      ctx.lineTo(xAxis.getPixelForValue(xE), yAxis.getPixelForValue(yE));
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    }
  }
};

//config quadrant block
var quadConfig = {
  type: "bubble",
  data: {},
  options: {
    responsive: true,
    maintainAspectRatio: true,
    layout: {
      padding: {
        top: 50,
        right: 50
      }
    },
    scales: {
      xAxes: [{
        title: {
          color: 'red',
          display: true,
          text: 'Strategic Fit'
        },
        gridLines: {
          display: false
        },
        ticks: {
          beginAtZero: true,
          min: 0,
          max: 5,
          stepSize: 1
        }
      }],
      yAxes: [{
        title: {
          display: true,
          text: "DBC Support Ability"
        },
        gridLines: {
          display: false
        },
        ticks: {
          beginAtZero: true,
          min: 0,
          max: 5,
          stepSize: 1
        }
      }]
    }
  },
  plugins: [quadrantLines]
};
var configDEPRECATED = {
  type: "scatter",
  data: {},
  options: {
    scales: {
      x: {
        title: {
          color: 'red',
          display: true,
          text: 'Strategic Fit'
        },
        autoSkip: false,
        beginAtZero: true,
        min: 0,
        max: 5,
        ticks: {
          stepSize: 1
        }
      },
      y: {
        axis: "y",
        autoSkip: false,
        title: {
          display: true,
          text: "DBC Support Ability"
        },
        beginAtZero: true,
        min: 0,
        max: 5,
        ticks: {
          stepSize: 1
        }
      }
    },
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          title: function title(context) {
            return context[0].dataset.label;
          }
        }
      },
      annotation: {
        annotations: [{
          type: 'line',
          mode: 'horizontal',
          scaleID: 'y',
          value: 2.5,
          borderColor: 'red',
          borderWidth: 1
        }, {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x',
          value: 2.5,
          borderColor: 'red',
          borderWidth: 1
        }]
      },
      quadrants: {
        topLeft: "purple",
        topRight: "grey",
        bottomRight: "green",
        bottomLeft: "yellow"
      }
    }
  }
};
function updateXAxis(choice) {
  if (choice === 'Strategic Fit') {
    quadChart.options.scales.x.title.display = true;
    quadChart.options.scales.x.title.text = 'Strategic Fit';
  } else if (choice === 'Expected Public Value') {
    quadChart.options.scales.x.title.display = true;
    quadChart.options.scales.x.title.text = 'Expected Public Value';
  }
  quadChart.update(); // Actualiza el gráfico después de realizar cambios en las opciones.
}

function renderQuadrantChart(chartData) {
  quadConfig.data = chartData;
  if (!quadChart) {
    quadChart = new Chart(document.getElementById("quadrantChart").getContext("2d"), quadConfig);
  } else {
    quadChart.data = quadConfig.data;
    quadChart.update();
  }
  //console.log(quadChart.config);
}

//data quadrant block
function prepareQuadChartData(tableData) {
  var _console3;
  var xAxisField = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'strategicFit';
  var datasets = tableData.map(function (entry) {
    return {
      label: entry.dbc,
      borderColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
      backgroundColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
      data: [{
        x: parseFloat(entry[xAxisField]) || 0,
        // Usa el campo seleccionado para el eje X
        y: parseFloat(entry.dbcSupportAbility) || 0,
        r: parseFloat(entry.budget) + 6.0 || 0
      }],
      // Si necesitas más propiedades para el conjunto de datos, agréguelas aquí
      hoverRadius: 8.0
    };
  });

  /* eslint-disable */
  (_console3 = console).log.apply(_console3, _toConsumableArray(oo_oo("f59a272a_2", "Prepared quadrant chart data:", {
    datasets: datasets
  }))); // Debug

  return {
    datasets: datasets
  };
}
document.getElementById('xAxisSelector').addEventListener('change', function (e) {
  var selectedValue = e.target.value;

  // Actualiza el conjunto de datos según el valor seleccionado
  var quadrantCharData = prepareQuadChartData(editedData, selectedValue);

  // Vuelve a dibujar el gráfico con el nuevo conjunto de datos
  updateXAxis(this.value);
  renderQuadrantChart(quadrantCharData);
});
function processSurveyResult(json) {
  var dataEntries = json.data;
  var tableData = [];
  var processedTopics = {};
  for (var key in dataEntries) {
    var parts = key.split(" - ");
    var topic = parts[0];
    var detail = parts[1];
    if (!processedTopics[topic]) {
      processedTopics[topic] = {
        dbc: topic,
        policy: "Business Agnostic",
        strategicFit: "",
        dbcSupportAbility: "",
        supportTargetAbility: "",
        expPublicValue: "",
        budget: ""
      };
    }
    switch (detail) {
      case "Target Prospective Ability":
        processedTopics[topic].supportTargetAbility = dataEntries[key].toString();
        break;
      case "Total Score":
        processedTopics[topic].dbcSupportAbility = dataEntries[key].toString();
        break;
      case "Expected Public Value":
        processedTopics[topic].expPublicValue = dataEntries[key].toString();
        break;
      case "Estimated Budget (mill €)":
        processedTopics[topic].budget = dataEntries[key].toString();
        break;
      case "Rating":
        processedTopics[topic].strategicFit = dataEntries[key].toString();
        break;
    }
  }
  for (var _topic in processedTopics) {
    tableData.push(processedTopics[_topic]);
  }
  return tableData;
}
function populateDBCDropdown(data) {
  var dropdown = document.getElementById('dbcFilter');
  data.forEach(function (entry) {
    var option = document.createElement('option');
    option.value = entry.dbc;
    option.textContent = entry.dbc;
    dropdown.appendChild(option);
  });
}
document.getElementById('dbcFilter').addEventListener('change', function (e) {
  var _console4;
  /* eslint-disable */(_console4 = console).log.apply(_console4, _toConsumableArray(oo_oo("f59a272a_3", "Dropdown change detected:", e.target.value)));
  var selectedValue = e.target.value;
  applyDBCFilters(selectedValue);
});
function applyDBCFilters(filterValue) {
  var _console5, _console6;
  var filteredData = editedData;
  currentlyFilteredDBC = filterValue;

  /* eslint-disable */
  (_console5 = console).log.apply(_console5, _toConsumableArray(oo_oo("f59a272a_4", "Values in editedData:", editedData.map(function (entry) {
    return entry.dbc;
  }))));
  /* eslint-disable */
  (_console6 = console).log.apply(_console6, _toConsumableArray(oo_oo("f59a272a_5", "Trying to match filterValue:", filterValue)));
  if (filterValue !== 'all') {
    filteredData = editedData.filter(function (entry) {
      return entry.dbc === filterValue;
    });
  }
  var chartData = prepareChartData(filteredData);
  var quadChartData = prepareQuadChartData(filteredData);
  renderChart(chartData);
  renderQuadrantChart(quadChartData);
}
document.getElementById('applyFilters').addEventListener('click', function () {
  applyAllFilters();
});
function applyAllFilters() {
  var filterValues = {
    strategicFit: document.getElementById('filter-strategicFit').value,
    expPublicValue: document.getElementById('filter-expPublicValue').value,
    dbcSupportAbility: document.getElementById('filter-dbcSupportAbility').value,
    budget: document.getElementById('filter-budget').value
  };
  var filteredData = editedData.filter(function (entry) {
    return entry.strategicFit <= filterValues.strategicFit && entry.expPublicValue <= filterValues.expPublicValue && entry.dbcSupportAbility <= filterValues.dbcSupportAbility && entry.budget <= filterValues.budget;
  });
  var chartData = prepareChartData(filteredData);
  var quadrantCharData = prepareQuadChartData(filteredData);
  renderChart(chartData);
  renderQuadrantChart(quadrantCharData);
}
document.querySelectorAll('input[type="range"]').forEach(function (input) {
  input.addEventListener('input', function () {
    document.getElementById('value-' + input.id.replace('filter-', '')).textContent = input.value;
  });
});
function resetFilters() {
  document.getElementById('dbcFilter').value = 'all';
  var initialChartData = prepareChartData(editedData);
  var initialQuadChartData = prepareQuadChartData(editedData);
  renderChart(initialChartData);
  renderQuadrantChart(initialQuadChartData);
}
document.getElementById('resetFilters').addEventListener('click', resetFilters);
function updateTotalBudget() {
  var total = editedData.reduce(function (acc, entry) {
    return acc + (parseFloat(entry.budget) || 0);
  }, 0);
  document.getElementById("totalBudgetValue").innerText = total.toFixed(1);
}
function draw(_x3) {
  return (_draw = _draw || _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(json) {
    var response;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          // document.getElementById("reset-work").classList.remove("d-none");
          bcList = {};
          viewsInfra = [];
          $("#listBCs").collapse("show");
          $("#matrixBCs").collapse("show");
          _context3.next = 6;
          return fetch("/api/backoffice/get-files-old");
        case 6:
          response = _context3.sent;
          _context3.next = 9;
          return response.json();
        case 9:
          response = _context3.sent;
          callBackForRequest(response, json);
        case 11:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }))).apply(this, arguments);
}
/**
 *
 * @param {String} name
 * @param {Number} id
 * @param {String} policy
 * @param {Number} avgAbility
 * @param {Array} bbs
 * @returns {Array}
 */
function createView(name, id, policy, avgAbility, bbs) {
  avgAbility = avgAbility || null;
  bbs = bbs || [];
  var view = {};
  view.name = name;
  view.id = id;
  view.policy = policy;
  view.avgAbility = avgAbility;
  view.bbs = bbs;
  return view;
}
function initInputfromJSON() {
  viewBCmc.name = "Buisness Capabilities (mission critial)";
  viewBCmc.id = 0;
  viewBCmc.policy = "business agnostic";
  viewBCmc.avgAbility = null;
  viewBCmc.bbs = [];
  var view0 = createView("legal", idLinf, "business agnostic");
  var view1 = createView("organisational", idOinf, "business agnostic");
  var view2 = createView("semantic", idSinf, "business agnostic");
  var view3 = createView("technical-application", idTAinf, "business agnostic");
  var view4 = createView("technical-infrastructure", idTIinf, "business agnostic");
  viewsInfra.push(view0);
  viewsInfra.push(view1);
  viewsInfra.push(view2);
  viewsInfra.push(view3);
  viewsInfra.push(view4);
  bcList = createBcListObject();
}
var avgDpsAbility = function avgDpsAbility(abbs) {
  var sum = abbs.reduce(function (total, value) {
    return total += value.ability;
  }, 0);
  var avg = Number((sum / abbs.length).toFixed(2));
  return avg;
};

/**
 * Create the bcList object with the relations of the abbs, dps and bc
 */
var createBcListObject = function createBcListObject() {
  var ABBs = groupABBByID(inputBBJSON);
  DPSs = groupDPSsByID(inputDPSJSON);
  var DBCs = groupBCByID(inputBCJSON);
  var tempDPSs = _objectSpread({}, DPSs);
  var tempDBCs = _objectSpread({}, DBCs);
  var ABBArray = Object.values(ABBs);
  var DPSArray = Object.values(DPSs);
  var DBCArray = Object.values(DBCs);
  DPSArray.forEach(function (dps) {
    var id = dps.id;
    ABBArray.forEach(function (abb) {
      if (abb.digPubServ.indexOf(id) > -1) tempDPSs[id].abbs.push(abb);
    });
  });
  DBCArray.forEach(function (dbc) {
    var id = dbc.id;
    DPSArray.forEach(function (dps) {
      if (dps.dBCs.indexOf(id) > -1) tempDBCs[id].dps.push(dps);
    });
  });
  Object.values(tempDBCs).forEach(function (bc) {
    var abbs = [];
    var dps = bc.dps,
      id = bc.id;
    dps.forEach(function (dp) {
      var bbs = dp.abbs;
      abbs = [].concat(_toConsumableArray(abbs), _toConsumableArray(bbs));
    });
    abbs = _toConsumableArray(new Set(abbs));
    tempDBCs[id].bbs = abbs;
    abbs.forEach(function (abb) {
      tempDBCs[id].views.forEach(function (view) {
        if (abb.view === view.name) view.bbs.push(abb);
      });
    });
  });
  return tempDBCs;
};

// document.getElementById("reset-work").addEventListener("click", function () {
//   document.getElementById("bb-div").classList.add("d-none");
//   selectedBC = null;
//   clickedDPSs = [];
//   $("#networkBBs").collapse("hide");
//   document.querySelector("#bbTable").innerHTML = "";
//   init(fileContent);
// });

function quadrantWidth() {
  var quadrant = document.querySelector("#quadrant_div");
  var test = quadrant.getBoundingClientRect();
  var width = test.width;
  quadrant.style.height = width + "px";
  return width;
}
function resizeQuandrant() {
  var width = quadrantWidth();
  drawBusinessCapabilityChart(width);
}
var mapFilterResultstoBcList = function mapFilterResultstoBcList(json) {
  var dictionary = {
    id: "id",
    "National Digital Strategy Fit": "priority",
    "Expected Public Value": "expRandom",
    "Ability to support the dBusCap": "abbRandom",
    "Ability to deliver": "ability",
    "Target Prospective Average Ability": "prospectiveAbility",
    budget: "budget"
  };
  var fullName = json.fullName,
    organisation = json.organisation,
    email = json.email,
    country = json.country,
    surveyResults = _objectWithoutProperties(json, _excluded);
  var tempBcList = _objectSpread({}, bcList);
  for (var policy in surveyResults) {
    var _surveyResults$policy = surveyResults[policy],
      busCaps = _surveyResults$policy.BC,
      buildingBlocks = _surveyResults$policy.BB;
    for (var bcIdx = 0; bcIdx < busCaps.length; bcIdx++) {
      var _busCaps$bcIdx = busCaps[bcIdx],
        id = _busCaps$bcIdx.id,
        answers = _objectWithoutProperties(_busCaps$bcIdx, _excluded2);
      if (tempBcList[id]) {
        for (var answer in answers) {
          if (!answers.selectedBC) break;
          tempBcList[id][dictionary[answer]] = answers[answer];
        }
      }
    }
    var _loop = function _loop() {
      var _buildingBlocks$bbIdx = buildingBlocks[bbIdx],
        id = _buildingBlocks$bbIdx.id,
        bbAbility = _buildingBlocks$bbIdx["Ability to support the dBusCap"];
      for (var bc in bcList) {
        var bbs = bcList[bc].bbs;
        var bb = bbs.filter(function (bb) {
          return bb.id === id;
        });
        if (bb.length !== 1) continue;
        bb[0].ability = bbAbility;
      }
    };
    for (var bbIdx = 0; bbIdx < buildingBlocks.length; bbIdx++) {
      _loop();
    }
  }
  Object.values(tempBcList).forEach(function (bc) {
    bc.dps.forEach(function (dps) {
      dps.dpsAbility = avgDpsAbility(dps.abbs);
    });
  });
  var finalBCList = {};
  for (var _policy in surveyResults) {
    var _surveyResults$_polic = surveyResults[_policy],
      BC = _surveyResults$_polic.BC,
      BB = _surveyResults$_polic.BB;
    var _iterator = _createForOfIteratorHelper(BC),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var bc = _step.value;
        var _id = bc.id;
        finalBCList[_id] = tempBcList[_id];
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  bcList = finalBCList;
};
var randomizeQuandrantValues = function randomizeQuandrantValues() {
  var bcValues = Object.values(bcList);
  for (var idx = 0; idx < bcValues.length; idx++) {
    bcValues[idx].avgAbility = +(Math.random() * 9 + 1).toFixed(2);
    bcValues[idx].priority = +(Math.random() * 4 + 1).toFixed(0);
  }
};
function readSurveyResult(json) {
  mapFilterResultstoBcList(json);

  // Go through the survey json file to get the items with the new id
  // New id: id_abb - id_dBusCap
  var fullName = json.fullName,
    organisation = json.organisation,
    email = json.email,
    country = json.country,
    surveyResults = _objectWithoutProperties(json, _excluded3);
  var buildingBlocks = [];
  for (var policy in surveyResults) {
    // For every policy keep the abbs objects
    for (var i = 0; i < surveyResults[policy].BB.length; i++) {
      buildingBlocks.push(surveyResults[policy].BB[i]);
    }
  }

  // Initialize customBBs
  customBBs = buildingBlocks;

  // Initialize the bbs.ability for every dBusCap
  var _loop2 = function _loop2() {
    var abbId = buildingBlocks[index]['id'].split("-")[0].replace(" ", "");
    var dBusCapId = buildingBlocks[index]['id'].split("-")[1].replace(" ", "");
    var a = buildingBlocks[index]['Ability to support the dBusCap'];
    try {
      bcList[dBusCapId]['bbs'].find(function (el) {
        return el.id === abbId;
      })['ability'] = a;
    } catch (_unused) {
      var _console7;
      /* eslint-disable */(_console7 = console).log.apply(_console7, _toConsumableArray(oo_oo("f59a272a_6", "No match found!")));
    }
  };
  for (var index = 0; index < buildingBlocks.length; index++) {
    _loop2();
  }
  for (var z in bcList) {
    // filter the abbs to keep only the ones with the current dBusCap id 
    var filteredBuildingBlocksByAbbId = buildingBlocks.filter(function (ob) {
      return z === ob.id.split("-")[1].replace(" ", "");
    });

    // Calculate current dBusCap ability to support.
    var count = 0;
    var average = 0;
    for (var _i2 = 0; _i2 < filteredBuildingBlocksByAbbId.length; _i2++) {
      var ability = filteredBuildingBlocksByAbbId[_i2]['Ability to support the dBusCap'];
      count += 1;
      average += ability;
    }
    average /= count;
    bcList[z].avgAbility = Math.round((average || 0) * 10) / 10;
    var views = bcList[z].views;
    for (var j in views) {
      var count_view = 0;
      var average_view = 0;
      var bbs_view = views[j].bbs;
      for (var k in bbs_view) {
        count_view += 1;
        average_view += bbs_view[k].ability;
      }
      average_view /= count_view;
      views[j].avgAbility = Math.round((average_view || 0) * 10) / 10;
    }
  }

  // if (demo) randomizeQuandrantValues();
}

function controlWrapper(controlType, containerId, options) {
  return new google.visualization.ControlWrapper({
    controlType: controlType,
    containerId: containerId,
    options: options
  });
}
var view;
var strategicSlider;
var expPubValSlider;
var abiToSupdBusCapSlider;
var budgetSlider;
var policyDomainFilter;
var order = [0, 1, 2, 3, 4, 5];

/**
 * Calculate the max of all the budgets
 */
function firstInitMaxBudget() {
  var bcObject = groupBy(Object.values(bcList), "policy");
  var max = 0;
  for (var policy in bcObject) {
    var temp = groupBy(bcObject[policy], "policy", "budget");
    var currentMax = maxOfArray(temp[policy]);
    max = currentMax > max ? currentMax : max;
  }
  maxBudget = max;
}

/**
 * Make all the words in the string policy lowercase
 */
var normalizePolicy = function normalizePolicy(policy) {
  return policy.split(" ").map(function (x) {
    return x.toLowerCase();
  }).join(" ");
};
var getColorPerPolicy = function getColorPerPolicy(policy) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var normalizedPolicy = normalizePolicy(policy);
  var temp = opacity ? policyColorsWithOpacity : policyColors;
  return temp[normalizedPolicy] || "#858796";
};
var getImagePerPolicy = function getImagePerPolicy(policy) {
  var normalizedPolicy = normalizePolicy(policy);
  return policyImages[normalizedPolicy] || "../img/dps.png";
};

/**
 * Create the bubble chart
 */
function drawBusinessCapabilityChart(height) {
  height = height || 1;
  data = new google.visualization.DataTable();
  data.addColumn("string", "ID");
  data.addColumn("number", "National Digital Strategy Fit");
  data.addColumn("number", "Ability to support the dBusCap");
  data.addColumn("string", "Policy domain");
  data.addColumn("number", "Estimated budget");
  data.addColumn("number", "Expected Public Value");
  view = new google.visualization.DataView(data);
  firstInitMaxBudget();
  var colors = [];
  for (var x in bcList) {
    var bc = bcList[x];
    if (bc.priority == null) continue;
    data.addRow([bc.id, bc.priority, bc.avgAbility, bc.policy, bc.budget, bc.expRandom]);
    var color = getColorPerPolicy(bc.policy);
    if (colors.indexOf(color) === -1) colors.push(color);
  }
  view.setColumns(order);
  dashboard = new google.visualization.Dashboard(document.getElementById("dashboard_div"));
  strategicSlider = controlWrapper("NumberRangeFilter", "dashboard_strategicSlider_div", {
    filterColumnLabel: "National Digital Strategy Fit",
    ui: {
      labelStacking: "horizontal"
    },
    minValue: 1,
    maxValue: 5
  });
  expPubValSlider = controlWrapper("NumberRangeFilter", "dashboard_expPubValSlider_div", {
    filterColumnLabel: "Expected Public Value",
    ui: {
      labelStacking: "horizontal"
    },
    minValue: 1,
    maxValue: 5
  });
  abiToSupdBusCapSlider = controlWrapper("NumberRangeFilter", "dashboard_abiToSupdBusCapSlider_div", {
    filterColumnLabel: "Ability to support the dBusCap",
    ui: {
      labelStacking: "horizontal"
    },
    minValue: 1,
    maxValue: 5
  });
  budgetSlider = controlWrapper("NumberRangeFilter", "budget_filtering_div", {
    filterColumnLabel: "Estimated budget",
    ui: {
      labelStacking: "horizontal",
      label: "Estimated budget (in millions EUR)"
    },
    minValue: 0,
    maxValue: maxBudget
  });
  policyDomainFilter = controlWrapper("CategoryFilter", "visibility_control_div", {
    filterColumnLabel: "Policy domain",
    ui: {
      label: "",
      selectedValuesLayout: "aside",
      caption: "Policy domain",
      cssClass: "filters-div-google"
    }
  });
  var options1 = {
    height: height,
    title: {
      position: "none"
    },
    hAxis: {
      title: hAxisLabes[order[1]],
      minValue: 0,
      maxValue: 5,
      ticks: [{
        v: 0,
        f: "low"
      }, {
        v: 2.5,
        f: "medium"
      }, {
        v: 5,
        f: "high"
      }],
      gridlines: {
        color: "#747675"
      },
      baselineColor: "#747675"
    },
    vAxis: {
      title: "Ability to support the dBusCap",
      minValue: 0,
      maxValue: 5,
      ticks: [{
        v: 0,
        f: "low"
      }, {
        v: 2.5,
        f: "med"
      }, {
        v: 5,
        f: "high"
      }]
    },
    bubble: {
      textStyle: {
        fontSize: 10
      },
      opacity: 0.5
    },
    sizeAxis: {
      minSize: 20
    },
    colors: colors,
    chartArea: {
      width: "82%",
      height: "82%"
    },
    legend: {
      position: "top",
      alignement: "center"
    }
  };
  chartBubble = new google.visualization.ChartWrapper({
    chartType: "BubbleChart",
    containerId: "quadrant_div",
    options: options1
  });
  dashboard.bind([strategicSlider, policyDomainFilter, expPubValSlider, abiToSupdBusCapSlider, budgetSlider], chartBubble);
  dashboard.draw(view.toDataTable());
  google.visualization.events.addListener(chartBubble, "ready", function () {
    google.visualization.events.addListener(chartBubble, "select", selectHandler);
    google.visualization.events.addListener(policyDomainFilter, "statechange", function (event) {
      var state = policyDomainFilter.getState();
      filteringBcTable(state.selectedValues, false);
    });
    google.visualization.events.addListener(chartBubble, "statechange", function () {
      alert(chartBubble.getDataTable().getNumberOfRows());
    });
  });
}
var scrollToElement = function scrollToElement(selector) {
  $([document.documentElement, document.body]).animate({
    scrollTop: $(selector).offset().top - 40
  }, 500);
};
var bcInfoNodes = function bcInfoNodes(id, policy, name, budget, spanID) {
  var pID = document.createElement("p");
  var pPolicy = document.createElement("p");
  var pName = document.createElement("p");
  var pBudget = document.createElement("p");
  pID.innerText = "ID: " + id;
  pPolicy.innerText = "Policy: " + policy;
  pName.innerText = "Name: " + name;
  pBudget.innerHTML = "Estimated budget (in millions EUR): " + "<span id=\"".concat(spanID, "\">").concat(budget, " </span ");
  var parent = document.createElement("div");
  parent.appendChild(pID);
  parent.appendChild(pPolicy);
  parent.appendChild(pName);
  parent.appendChild(pBudget);
  return parent;
};
function selectHandler(e) {
  var selection = chartBubble.getChart().getSelection();
  var item = selection[0];
  if (item == null) return;
  document.getElementById("bb-div").classList.remove("d-none");
  selectedValue = chartBubble.getDataTable().getValue(item.row, 0);
  clickedDPSs = [];
  $("#networkBBs2").fadeOut();
  $("#network_div").fadeOut(function () {
    if ($("#infratoogle").prop("checked") == false) {
      $("#infratoogle").prop("checked", true);
      toogleInfra = true;
    }
    busOrientation = 1;
    $("#radio1").prop("checked", true);
    $("#networkBBs").collapse("show");
    $("#listBBs").collapse("show");
    $("#network_div").fadeIn();
    drawViewsPredecessorsChart(bcList[selectedValue]);
    dpsNetworkAndCheckbox(bcList[selectedValue].dps, bcList[selectedValue].bbs);
    scrollToElement("#networkBBs");
    selectedBC = selectedValue;
    clickedBC = bcList[selectedValue];
    bbsFillInfo(bcList[selectedBC]);
    document.getElementById("bcDetail").innerHTML = bcInfoNodes(bcList[selectedValue].id, CA(bcList[selectedValue].policy), bcList[selectedValue].name, bcList[selectedValue].budget, "bcDetails-budget").innerHTML;
    document.getElementById("dps-network-bc-info").innerHTML = bcInfoNodes(bcList[selectedValue].id, CA(bcList[selectedValue].policy), bcList[selectedValue].name, bcList[selectedValue].budget, "bcDetails-budget-copy").innerHTML;
    document.getElementById("bbDetail").innerHTML = "<i>please select a builidng block</i>";
    createBuildingBlocksTable(bcList[selectedValue]);
  });
}
$("#orientation").on("change", function () {
  if (document.getElementById("radio1").checked) {
    busOrientation = 1;
  } else if (document.getElementById("radio2").checked) {
    busOrientation = 2;
  } else if (document.getElementById("radio3").checked) {
    busOrientation = 3;
  } else {
    busOrientation = 4;
  }
  drawViewsPredecessorsChart(bcList[selectedValue]);
});
$("#infratoogle").on("change", function () {
  if (toogleInfra) {
    toogleInfra = false;
  } else {
    toogleInfra = true;
  }
  drawViewsPredecessorsChart(bcList[selectedValue]);
});
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
window.addEventListener("resize", function () {
  resizeQuandrant();
});

/**
 *
 * @param {Array} options The options that the select box should have
 * @param {Array} attribuesList This is an array of objects for the attribues of select box
 * @param {Boolean} firstChildUnvisible If is true , the select box will have place holder the first item of array
 * @returns Select html element
 */

/**
 * Create option html element with attributes
 */
function selectHTMLWithOptions(options, attribuesList) {
  attribuesList = attribuesList || [];
  var select = document.createElement("select");
  for (var attr in attribuesList) {
    select.setAttribute(attr, attribuesList[attr]);
  }
  for (var i = 0; i < options.length; i++) {
    var policy = options[i];
    var option = document.createElement("option");
    option.setAttribute("value", policy);
    option.text = policy;
    select.appendChild(option);
  }
  return select;
}

/**
 * Create number input html element with attributes
 */
function htmlInputNumb(attribuesList) {
  var input = document.createElement("input");
  input.setAttribute("type", "number");
  for (var attr in attribuesList) {
    input.setAttribute(attr, attribuesList[attr]);
  }
  return input;
}

/**
 * Create paragraph html element with attributes
 */
function htmlParagNumb(attribuesList) {
  var input = document.createElement("p");
  for (var attr in attribuesList) {
    input.setAttribute(attr, attribuesList[attr]);
  }
  return input;
}

/**
 * Create dropdow element
 */
function dropDownCheckBox(options, header) {
  var dropdown = document.createElement("div");
  dropdown.classList.add(["dropdown", "show"]);
  dropdown.setAttribute("id", "dropdown_div");
  var headerEl = document.createElement("div");
  headerEl.classList.add("dropdown-toggle");
  headerEl.setAttribute("id", "dropdownMenuLink");
  headerEl.setAttribute("data-toggle", "dropdown");
  headerEl.setAttribute("aria-haspopup", "true");
  headerEl.setAttribute("aria-expanded", "false");
  var headerText = document.createTextNode(header);
  headerEl.appendChild(headerText);
  var dropdownMenu = document.createElement("div");
  dropdownMenu.classList.add("dropdown-menu");
  dropdown.appendChild(headerEl);
  dropdown.appendChild(dropdownMenu);
  for (var i = 0; i < options.length; i++) {
    var id = options[i];
    var label = createLabelWithInputChild(id);
    dropdownMenu.appendChild(label);
  }
  dropdown.addEventListener("change", filteringHandler);
  return dropdown;
}
/**
 * Filter bc table and quandrant
 */
function filteringBcTable(values, quadrant_filtering) {
  var table = document.getElementById("bcTable");
  var tr = table.getElementsByTagName("tr");
  var _loop3 = function _loop3() {
    var tds = tr[i].getElementsByTagName("td");
    if (tds.length < 1) return 1; // continue
    var policyColumn = tds[1].querySelector("[policyValue]").getAttribute("policyValue");
    var tempCond = values.map(function (value) {
      return "'" + policyColumn + "' === '" + value + "'";
    });
    var condition = tempCond.join(" || ");
    var valid = condition ? eval(condition) : true;
    if (valid) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  };
  for (var i = 0; i < tr.length; i++) {
    if (_loop3()) continue;
  }
  if (quadrant_filtering) {
    policyDomainFilter.setState({
      selectedValues: values
    });
    policyDomainFilter.draw();
  } else {
    var dropdown = document.getElementById("dropdown_div");
    var inputs = dropdown.querySelectorAll("input[type=checkbox]");
    for (var _i3 = 0; _i3 < inputs.length; _i3++) {
      var input = inputs[_i3];
      input.checked = false;
    }
    for (var _i4 = 0; _i4 < inputs.length; _i4++) {
      var _input = inputs[_i4];
      for (var _i5 = 0; _i5 < values.length; _i5++) {
        var value = values[_i5];
        var id = _input.getAttribute("id").split("-")[0];
        if (id.includes(value)) _input.checked = true;
      }
    }
  }
}
function createLabelWithInputChild(id) {
  var input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("id", id + "-dropdown");
  input.setAttribute("value", id);
  var label = document.createElement("label");
  label.setAttribute("for", id + "-dropdown");
  label.appendChild(input);
  var textContent = document.createTextNode(" " + id);
  label.appendChild(textContent);
  label.classList.add("dropdown-item");
  return label;
}
function range(start, end) {
  var ans = [];
  for (var i = start; i <= end; i++) {
    ans.push(i);
  }
  return ans;
}
function changeSumPerPolicy(inputField) {
  var bcObject = groupBy(Object.values(bcList), "policy");
  var policy = inputField.getAttribute("policy");
  var id = "#" + policy + "-sum";
  policy = policy.split("-").join(" ");
  document.querySelector(id).innerHTML = sumOfArray(groupBy(bcObject[policy], "policy", "budget")[policy]);
}
function filteringHandler() {
  var dropdown = document.querySelector("#dropdown_div > div.dropdown-menu");
  var inputs = dropdown.querySelectorAll("input[type=checkbox]");
  var values = [];
  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];
    if (input.checked) {
      var value = input.getAttribute("id").split("-")[0];
      values.push(value);
    }
  }
  filteringBcTable(values, true);
}
var updateBcDetailsBudget = function updateBcDetailsBudget(budget, currentBc) {
  if (currentBc != selectedBC) return;
  $("#bcDetails-budget").text(budget);
  $("#bcDetails-budget-copy").text(budget);
};
function containerWithSelectAndSpan(selectBox, outOf) {
  var customDiv = document.createElement("div");
  var span = document.createElement('span');
  span.innerText = " out of ".concat(outOf);
  customDiv.appendChild(selectBox);
  customDiv.appendChild(span);
  return customDiv;
}
function createBusinessCapabilityTable() {
  var table = document.getElementById("bcTable");
  table.innerHTML = "";
  var thead = table.createTHead();
  var row = thead.insertRow();
  var id = thWithTextNode("ID");
  var th2 = document.createElement("th");
  var name = thWithTextNode("Digital Business Capability");
  var dStrategicFit = thWithSpanNode("National Digital Strategy Fit", natDigStrategicFitTooltip);
  var publicValue = thWithSpanNode("Expected Public Value", expPubValueTooltip);
  var abilityToSupport = thWithSpanNode("Ability to support the dBusCap", abToSuppDbusCapTooltip);
  var budgetAlloc = thWithSpanNode("Estimated budget (in millions EUR)", budgetTooltip);
  var optimalAvg = thWithSpanNode("Target Prospective Ability to support the dBusCap", optimalAvgTooltip);
  row.appendChild(id);
  row.appendChild(th2);
  row.appendChild(name);
  row.appendChild(dStrategicFit);
  row.appendChild(abilityToSupport);
  row.appendChild(optimalAvg);
  row.appendChild(publicValue);
  row.appendChild(budgetAlloc);
  var bcObject = groupBy(Object.values(bcList), "policy");
  var policies = Object.keys(bcObject);
  for (var policy in bcObject) {
    var policyArray = bcObject[policy];
    for (var _i6 = 0; _i6 < policyArray.length; _i6++) {
      var bc = policyArray[_i6];
      var _row = table.insertRow();
      _row.insertCell().appendChild(document.createTextNode(bc.id));
      var policySpan = document.createElement("span");
      policySpan.setAttribute("policyValue", bc.policy);
      var policyTextNode = document.createTextNode(bc.policy);
      policySpan.appendChild(policyTextNode);
      _row.insertCell().appendChild(policySpan);
      _row.insertCell().appendChild(document.createTextNode(bc.name));
      var natDigStrFit = selectHTMLWithOptions(range(1, 5), {
        priority: "mySelect",
        bc: bc.id
      });
      natDigStrFit.value = bc.priority;
      natDigStrFit.addEventListener("change", function () {
        for (var y in bcList) {
          if (bcList[y].id == this.getAttribute("bc")) {
            bcList[y].priority = Number(this.value);
            var height = quadrantWidth();
            drawBusinessCapabilityChart(height);
            filteringHandler();
            return;
          }
        }
      });
      var natDigStrFitContainer = containerWithSelectAndSpan(natDigStrFit, 5);
      _row.insertCell().appendChild(natDigStrFitContainer);
      var abiToSupdBusCap = selectHTMLWithOptions(range(1, 5), {
        priority: "mySelect",
        bc: bc.id
      });
      abiToSupdBusCap.value = Math.round(bc.avgAbility);
      abiToSupdBusCap.addEventListener("change", function () {
        for (var y in bcList) {
          if (bcList[y].id == this.getAttribute("bc")) {
            bcList[y].avgAbility = Number(this.value);
            var height = quadrantWidth();
            drawBusinessCapabilityChart(height);
            filteringHandler();
            return;
          }
        }
      });
      var abiToSupdBusCapContainer = containerWithSelectAndSpan(abiToSupdBusCap, 5);
      _row.insertCell().appendChild(abiToSupdBusCapContainer);

      // Insert prospective Average value
      var prospAbility = selectHTMLWithOptions(range(1, 5), {
        priority: "mySelect",
        bc: bc.id
      });
      prospAbility.value = Number(bc.prospectiveAbility).toFixed(0);

      // functionality when the user selects another value from the dropdown list
      prospAbility.addEventListener("change", function () {
        for (var y in bcList) {
          if (bcList[y].id == this.getAttribute("bc")) {
            bcList[y].prospectiveAbility = Number(this.value);
            filteringHandler();
            return;
          }
        }
      });
      var prospectiveAbilityContainer = containerWithSelectAndSpan(prospAbility, 5);
      _row.insertCell().appendChild(prospectiveAbilityContainer);
      var expPubVal = selectHTMLWithOptions(range(1, 5), {
        priority: "mySelect",
        bc: bc.id
      });
      expPubVal.value = bc.expRandom;
      expPubVal.addEventListener("change", function () {
        for (var y in bcList) {
          if (bcList[y].id == this.getAttribute("bc")) {
            bcList[y].expRandom = Number(this.value);
            var height = quadrantWidth();
            drawBusinessCapabilityChart(height);
            filteringHandler();
            return;
          }
        }
      });
      var expPubValContainer = containerWithSelectAndSpan(expPubVal, 5);
      _row.insertCell().appendChild(expPubValContainer);
      var budgetFiled = htmlInputNumb({
        priority: "mySelect",
        policy: policy.split(" ").join("-"),
        bc: bc.id,
        min: 0,
        id: "total-" + bc.id
      });
      budgetFiled.value = bc.budget;
      budgetFiled.addEventListener("change", function () {
        for (var y in bcList) {
          if (bcList[y].id == this.getAttribute("bc")) {
            var newBudget = Number(Number(this.value).toFixed(2));
            if (newBudget < 0) newBudget = 0;
            bcList[y].budget = newBudget;
            this.value = newBudget;
            var height = quadrantWidth();
            drawBusinessCapabilityChart(height);
            changeSumPerPolicy(this);
            filteringHandler();
            updateBcDetailsBudget(newBudget, y);
            return;
          }
        }
      });
      _row.insertCell().appendChild(budgetFiled);
    }
    var _row2 = table.insertRow();
    _row2.insertCell().appendChild(document.createTextNode(""));
    var policySumParag = htmlParagNumb({
      id: policy + "-policyField",
      policyValue: policy
    });
    policySumParag.innerHTML = policy;
    _row2.insertCell().appendChild(policySumParag);
    _row2.insertCell().appendChild(document.createTextNode(""));
    _row2.insertCell().appendChild(document.createTextNode(""));
    _row2.insertCell().appendChild(document.createTextNode(""));
    _row2.insertCell().appendChild(document.createTextNode(""));
    var totalParagraph = htmlParagNumb({
      id: policy + "-totalInAbbfiled"
    });
    totalParagraph.innerHTML = "Total budget";
    _row2.insertCell().appendChild(totalParagraph);
    var budgets = groupBy(bcObject[policy], "policy", "budget");
    var sumOfBudgets = htmlParagNumb({
      id: policy.split(" ").join("-") + "-sum",
      priority: "mySelect"
    });
    sumOfBudgets.innerHTML = sumOfArray(budgets[policy]);
    _row2.insertCell().appendChild(sumOfBudgets);
  }
  var selectEl = dropDownCheckBox(policies, "Policy Domain");
  th2.appendChild(selectEl);
  var els = document.getElementById("bcTable").getElementsByTagName("th");
  for (var i = 0; i < els.length; i++) {
    els[i].style.paddingTop = "4px";
    els[i].style.paddingBottom = "4px";
  }
  var els = document.getElementById("bcTable").getElementsByTagName("td");
  for (var i = 0; i < els.length; i++) {
    els[i].style.paddingTop = "2px";
    els[i].style.paddingBottom = "2px";
  }
}

/**
 *
 * @param {Number} id
 * @param {String} shape
 * @param {String} image
 * @param {String} label
 * @param {String} title
 * @param {Array} color
 * @param {Number} x
 * @param {Number} y
 * @param {String} font
 * @param {String} DIR
 */

function createDigitalTransformNode(id, shape, image, label, title, color, x, y, hidden, font, DIR) {
  if (!x && x !== 0) {
    x = null;
  }
  if (!y && y !== 0) {
    y = null;
  }
  font = font || "14px arial", DIR = DIR || "../img/";
  hidden = hidden || false;
  var node = [];
  node.id = id;
  node.shape = shape;
  node.image = DIR + image;
  node.font = font;
  node.label = label;
  node.title = title;
  node.color = color;
  node.hidden = hidden;
  node.x = x;
  node.y = y;
  return node;
}
var syncCheckboxAfterNodesClicked = function syncCheckboxAfterNodesClicked(dps) {
  var inputs = dpsSelectDivList.querySelectorAll("input");
  for (var idx = 0; idx < inputs.length; idx++) {
    inputs[idx].checked = false;
    if (inputs[idx].getAttribute("data-dig-pub-service") === dps) inputs[idx].checked = true;
  }
};
var dpsNetworkAndCheckbox = function dpsNetworkAndCheckbox(dpss, bbs) {
  drawDPSNetwork(dpss, bbs);
  createFilterDPSCheckbox(dpss);
};

/**
 * Create and draw dps network chart
 */
var drawDPSNetwork = function drawDPSNetwork(dpss, bbs) {
  var _options;
  if (DPSnetwork !== null) {
    DPSnetwork.destroy();
    DPSnetwork = null;
  }
  DPSNetNodes = new vis.DataSet();
  var length = dpss.length;
  for (var idx = 0; idx < length; idx++) {
    var dps = dpss[idx];
    var policy = dps.policy,
      dpsID = dps.id,
      label = dps.name,
      dpsAbility = dps.dpsAbility;
    var title = "<div>\n    ".concat(dpsDetailChild("ID: ", dpsID).outerHTML, "\n    ").concat(dpsDetailChild("Name: ", label).outerHTML, "\n    ").concat(dpsDetailChild("Policy: ", policy).outerHTML, "\n    ").concat(dpsDetailChild("Average Ability to support: ", dpsAbility).outerHTML, "\n    </div>");
    var node = {
      id: idx,
      image: getImagePerPolicy(policy),
      dpsID: dpsID,
      label: "".concat(dpsID, " - ").concat(label),
      title: title,
      hidden: false,
      color: {
        background: getColorPerPolicy(policy, true)
      }
    };
    DPSNetNodes.add(node);
  }
  var options = (_options = {
    interaction: {
      hover: true
    },
    height: "100%",
    width: "100%",
    nodes: {
      imagePadding: 11,
      borderWidth: 1,
      size: 30,
      shape: "circularImage",
      shadow: true,
      font: {
        color: "#000",
        size: 17
      }
    }
  }, _defineProperty(_options, "interaction", {
    navigationButtons: true,
    keyboard: true
  }), _defineProperty(_options, "physics", {
    forceAtlas2Based: {
      springLength: -10
    },
    minVelocity: 0.75,
    solver: "forceAtlas2Based",
    timestep: 0.53
  }), _options);
  var data = {
    nodes: DPSNetNodes
  };
  var container = document.querySelector("#dps-network-div");
  DPSnetwork = new vis.Network(container, data, options);
  if (DPSnetwork !== null) {
    DPSnetwork.on("click", function (properties) {
      if (properties.nodes.length === 0) return;
      var id = properties.nodes[0];
      var nodes = DPSNetNodes.get();
      var node = nodes.find(function (node) {
        return node.id === id;
      });
      var dps = dpss.filter(function (dp) {
        return dp.id === node.dpsID;
      })[0];
      clickedDPSs = [dps.id];
      syncCheckboxAfterNodesClicked(node.dpsID);
      var newBBs = bbs.filter(function (bb) {
        return bb.digPubServ.includes(node.dpsID);
      });
      createBuildingBlocksTable({
        bbs: newBBs
      });
      filternetwork2([node.dpsID]);
      bbsMultipleDPSInfo([dps.name]);
      drawViewsPredecessorsChart(bcList[selectedBC], clickedDPSs);
    });
  }
};

/**
 * Helper function
 */
var dpsDetailChild = function dpsDetailChild(key, value) {
  var div = document.createElement("div");
  var spanLeft = document.createElement("span");
  var spanRight = document.createElement("span");
  div.appendChild(spanLeft);
  div.appendChild(spanRight);
  spanLeft.innerText = key;
  spanRight.innerText = value;
  return div;
};
var filternetwork2 = function filternetwork2(dpsIDS) {
  if (!network2Nodes) return;
  var condition = "";
  var dpsLength = dpsIDS.length;
  if (dpsLength === 0) {
    network2Nodes.forEach(function (node) {
      var hidden = false;
      network2Nodes.update({
        id: node.id,
        hidden: hidden
      });
    });
    return;
  }
  for (var idx = 0; idx < dpsLength; idx++) {
    var id = dpsIDS[idx];
    condition += "node.dps.indexOf(\"".concat(id, "\") > -1");
    if (idx < dpsLength - 1) condition += " || ";
  }
  var temp = new vis.DataSet();
  network2Nodes.forEach(function (node) {
    var hidden;
    if (eval(condition)) {
      hidden = false;
    } else {
      hidden = true;
    }
    temp.add(_objectSpread(_objectSpread({}, node), {}, {
      hidden: hidden
    }));
  });
  network2Nodes.clear();
  temp.forEach(function (node) {
    return network2Nodes.add(node);
  });
};
var createFilterDPSCheckbox = function createFilterDPSCheckbox(dpss) {
  if (dpss.length === 0) {
    return;
  }
  dpsSelectDivList.innerHTML = "";
  for (var idx = 0; idx < dpss.length; idx++) {
    var dps = dpss[idx];
    var li = document.createElement("li");
    var div = document.createElement("div");
    var dpsName = dps.name;
    var textNode = document.createElement("span");
    textNode.textContent = "".concat(dps.id, " - ").concat(dpsName);
    var input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("data-dig-pub-service", dps.id);
    li.appendChild(div);
    div.appendChild(input);
    div.appendChild(textNode);
    dpsSelectDivList.appendChild(li);
  }
};
var calculateAvgAbilityPerViewAndDpss = function calculateAvgAbilityPerViewAndDpss(view) {
  var dpss = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (dpss.length === 0) {
    return view.avgAbility;
  }
  var abbsToCalculate = view.bbs.filter(function (bb) {
    for (var idx = 0; idx < dpss.length; idx++) {
      if (bb.digPubServ.indexOf(dpss[idx]) > -1) return true;
    }
    return false;
  });
  var total = abbsToCalculate.reduce(function (sum, abb) {
    return sum += abb.ability;
  }, 0);
  if (abbsToCalculate.length === 0) return 0;
  var average = total / abbsToCalculate.length;
  return average;
};

/**
 * Create and draw the dBusCaps chart
 */
function drawViewsPredecessorsChart(bc) {
  var _options2;
  var dpss = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (network !== null) {
    network.destroy();
    network = null;
  }
  if (bc.policy == "Business Agnostic") {
    toogleInfra = false;
  }
  var showNonInfra = true;
  if (clickedDPSs.length > 0 && clickedDPSs.every(function (id) {
    return id.startsWith("BA");
  })) {
    showNonInfra = false;
    toogleInfra = true;
  }
  var bbs = bc.bbs;
  var nodes = [];
  var edges = [];
  var color = [];
  color.background = "#fff";
  var bcNode = createDigitalTransformNode(idBCdom, "circularImage", "bc.png", "ID:" + bc.id + ", " + bc.name + ", \nNational Digital Strategy Fit: " + bc.priority + " out of 5, \nAbility to support the dBusCap: " + bc.avgAbility + " out of 5", "ID:" + bc.id + ", " + bc.name + ", \nNational Digital Strategy Fit: " + bc.priority + " out of 5, \nAbility to support the dBusCap: " + bc.avgAbility + " out of 5", color, 100, 10);
  nodes.push(bcNode);
  var color = [];
  color.background = "#fff";
  var start = createDigitalTransformNode(100, "circularImage", "start.png", "Start", "Start", color, -10, 0);
  nodes.push(start);
  var views = bc.views;
  var count = 0;
  if (showNonInfra) {
    for (var i in views) {
      count += 1;
      var id = null;
      var color = [];
      var image = null;
      var labelInit = null;
      switch (String(views[i].name)) {
        case "legal":
          image = "legal.png";
          labelInit = "L";
          id = idLdom;
          break;
        case "organisational":
          image = "org.png";
          id = idOdom;
          labelInit = "O";
          break;
        case "semantic":
          image = "data.png";
          id = idSdom;
          labelInit = "S";
          break;
        case "technical-application":
          image = "TA.png";
          id = idTAdom;
          labelInit = "TA";
          break;
        case "technical-infrastructure":
          image = "tech.png";
          id = idTIdom;
          labelInit = "TI";
          break;
        default:
          image = "tech.png";
          break;
      }
      var currentAvgAbility = calculateAvgAbilityPerViewAndDpss(views[i], clickedDPSs);
      color.background = getColorPerPolicy(views[i].policy, true);
      if (views[i].bbs.length == 0) {
        if (labelInit === null) continue;
        var label = labelInit + " - " + CA(bc.policy);
      } else {
        var label = labelInit + " - " + CA(bc.policy) + ",\n" + currentAvgAbility.toFixed(1) + " out of 5";
      }
      var node = createDigitalTransformNode(id, "circularImage", image, label, label, color, 10 * i, 0);
      nodes.push(node);
    }
  }
  var bcInfraNode = [];
  bcInfraNode.id = idBCinf;
  if (toogleInfra) {
    var color = [];
    color.background = "#fff";
    bcInfraNode = createDigitalTransformNode(idBCinf, "circularImage", "bc.png", "Digital business capability Infrastructure," + "\nMission Critical", "Digital business capability Infrastructure," + "\nMission Critical", color, 100, 50, true);
    nodes.push(bcInfraNode);
    for (var _i7 in viewsInfra) {
      var _id2 = null;
      var color = [];
      var image = null;
      var labelInit = null;
      switch (String(viewsInfra[_i7].name)) {
        case "legal":
          image = "legal.png";
          _id2 = idLinf;
          labelInit = "L";
          break;
        case "organisational":
          image = "org.png";
          _id2 = idOinf;
          labelInit = "O";
          break;
        case "semantic":
          image = "data.png";
          _id2 = idSinf;
          labelInit = "S";
          break;
        case "technical-application":
          image = "TA.png";
          _id2 = idTAinf;
          labelInit = "TA";
          break;
        case "technical-infrastructure":
          image = "tech.png";
          _id2 = idTIinf;
          labelInit = "TI";
          break;
        default:
          image = "tech.png";
          break;
      }
      color.background = getColorPerPolicy(viewsInfra[_i7].policy, true);
      var label = labelInit + " - Business agnostic";
      var _node = createDigitalTransformNode(_id2, "circularImage", image, label, label, color, 10 * _i7, -10);
      nodes.push(_node);
    }
  }
  if (busOrientation == 1) {
    var startToPoint = showNonInfra ? idLdom : idLinf;
    var edges = new vis.DataSet([{
      from: start.id,
      to: startToPoint,
      dashes: true
    }, {
      from: idLdom,
      to: idOdom,
      dashes: false
    }, {
      from: idOdom,
      to: idSdom,
      dashes: false
    }, {
      from: idOdom,
      to: idTIdom,
      dashes: false
    }, {
      from: idTIdom,
      to: idTAdom,
      dashes: false
    }, {
      from: idSdom,
      to: idTAdom,
      dashes: false
    },
    // { from: idTAdom, to: bcNode.id, dashes: true },

    {
      from: idLinf,
      to: idLdom,
      dashes: true
    }, {
      from: idLinf,
      to: idOinf,
      dashes: false
    }, {
      from: idLinf,
      to: idSinf,
      dashes: false
    }, {
      from: idOinf,
      to: idOdom,
      dashes: true
    }, {
      from: idOinf,
      to: idSinf,
      dashes: false
    }, {
      from: idOinf,
      to: idTIinf,
      dashes: false
    }, {
      from: idSinf,
      to: idSdom,
      dashes: true
    }, {
      from: idSinf,
      to: idTAinf,
      dashes: false
    }, {
      from: idTIinf,
      to: idTIdom,
      dashes: true
    }, {
      from: idTIinf,
      to: idTAinf,
      dashes: false
    }, {
      from: idTAinf,
      to: idTAdom,
      dashes: true
    }, {
      from: idTAinf,
      to: bcInfraNode.id,
      dashes: true
    }, {
      from: bcInfraNode.id,
      to: bcNode.id,
      dashes: true
    }]);
    if (showNonInfra) {
      edges.add({
        from: idTAdom,
        to: bcNode.id,
        dashes: true
      });
    } else {
      edges.add({
        from: idTAinf,
        to: bcNode.id,
        dashes: true
      });
    }
  } else if (busOrientation == 2) {
    var _startToPoint = showNonInfra ? idOdom : idOinf;
    var edges = new vis.DataSet([{
      from: start.id,
      to: _startToPoint,
      dashes: true
    }, {
      from: idOdom,
      to: idTIdom,
      dashes: false
    }, {
      from: idOdom,
      to: idSdom,
      dashes: false
    }, {
      from: idTIdom,
      to: idTAdom,
      dashes: false
    }, {
      from: idSdom,
      to: idTAdom,
      dashes: false
    }, {
      from: idTAdom,
      to: idLdom,
      dashes: false
    },
    // { from: idLdom, to: bcNode.id, dashes: true },

    {
      from: idOinf,
      to: idOdom,
      dashes: true
    }, {
      from: idOinf,
      to: idTIinf,
      dashes: false
    }, {
      from: idOinf,
      to: idSinf,
      dashes: false
    }, {
      from: idTIinf,
      to: idTIdom,
      dashes: true
    }, {
      from: idTIinf,
      to: idTAinf,
      dashes: false
    }, {
      from: idSinf,
      to: idTAinf,
      dashes: false
    }, {
      from: idSinf,
      to: idSdom,
      dashes: true
    }, {
      from: idTAinf,
      to: idLinf,
      dashes: false
    }, {
      from: idTAinf,
      to: idTAdom,
      dashes: true
    }, {
      from: idLinf,
      to: idLdom,
      dashes: true
    }, {
      from: idLinf,
      to: bcInfraNode.id,
      dashes: true
    }, {
      from: bcInfraNode.id,
      to: bcNode.id,
      dashes: true
    }]);
    if (showNonInfra) {
      edges.add({
        from: idLdom,
        to: bcNode.id,
        dashes: true
      });
    } else {
      edges.add({
        from: idLinf,
        to: bcNode.id,
        dashes: true
      });
    }
  } else if (busOrientation == 3) {
    var _startToPoint2 = showNonInfra ? idSdom : idSinf;
    var edges = new vis.DataSet([{
      from: start.id,
      to: _startToPoint2,
      dashes: true
    }, {
      from: idSdom,
      to: idOdom,
      dashes: false
    }, {
      from: idOdom,
      to: idTAdom,
      dashes: false
    }, {
      from: idOdom,
      to: idTIdom,
      dashes: false
    }, {
      from: idTIdom,
      to: idTAdom,
      dashes: false
    }, {
      from: idTAdom,
      to: idLdom,
      dashes: false
    },
    // { from: idLdom, to: bcNode.id, dashes: true },

    {
      from: idSinf,
      to: idSdom,
      dashes: true
    }, {
      from: idSinf,
      to: idOinf,
      dashes: false
    }, {
      from: idOinf,
      to: idTAinf,
      dashes: false
    }, {
      from: idOinf,
      to: idOdom,
      dashes: true
    }, {
      from: idOinf,
      to: idTIinf,
      dashes: false
    }, {
      from: idTIinf,
      to: idTAinf,
      dashes: false
    }, {
      from: idTIinf,
      to: idTIdom,
      dashes: true
    }, {
      from: idTAinf,
      to: idLinf,
      dashes: false
    }, {
      from: idTAinf,
      to: idTAdom,
      dashes: true
    }, {
      from: idLinf,
      to: idLdom,
      dashes: true
    }, {
      from: idLinf,
      to: bcInfraNode.id,
      dashes: true
    }, {
      from: bcInfraNode.id,
      to: bcNode.id,
      dashes: true
    }]);
    if (showNonInfra) {
      edges.add({
        from: idLdom,
        to: bcNode.id,
        dashes: true
      });
    } else {
      edges.add({
        from: idLinf,
        to: bcNode.id,
        dashes: true
      });
    }
  } else {
    var _startToPoint3 = showNonInfra ? idTIdom : idTIinf;
    var edges = new vis.DataSet([{
      from: start.id,
      to: _startToPoint3,
      dashes: true
    }, {
      from: idTIdom,
      to: idOdom,
      dashes: false
    }, {
      from: idOdom,
      to: idTAdom,
      dashes: false
    }, {
      from: idOdom,
      to: idSdom,
      dashes: false
    }, {
      from: idSdom,
      to: idTAdom,
      dashes: false
    }, {
      from: idTAdom,
      to: idLdom,
      dashes: false
    },
    // { from: idLdom, to: bcNode.id, dashes: true },

    {
      from: idTIinf,
      to: idTIdom,
      dashes: true
    }, {
      from: idTIinf,
      to: idOinf,
      dashes: false
    }, {
      from: idOinf,
      to: idTAinf,
      dashes: false
    }, {
      from: idOinf,
      to: idOdom,
      dashes: true
    }, {
      from: idOinf,
      to: idSinf,
      dashes: false
    }, {
      from: idSinf,
      to: idTAinf,
      dashes: false
    }, {
      from: idSinf,
      to: idSdom,
      dashes: true
    }, {
      from: idTAinf,
      to: idLinf,
      dashes: false
    }, {
      from: idTAinf,
      to: idTAdom,
      dashes: true
    }, {
      from: idLinf,
      to: idLdom,
      dashes: true
    }, {
      from: idLinf,
      to: bcInfraNode.id,
      dashes: true
    }, {
      from: bcInfraNode.id,
      to: bcNode.id,
      dashes: true
    }]);
    if (showNonInfra) {
      edges.add({
        from: idLdom,
        to: bcNode.id,
        dashes: true
      });
    } else {
      edges.add({
        from: idLinf,
        to: bcNode.id,
        dashes: true
      });
    }
  }
  var container = document.getElementById("network_div");
  var data = {
    nodes: nodes,
    edges: edges
  };
  var options = (_options2 = {
    physics: true,
    interaction: {
      hover: true
    },
    autoResize: true,
    height: "100%",
    width: "100%",
    nodes: {
      imagePadding: 11,
      borderWidth: 1,
      size: 30,
      color: {
        border: "#222222",
        background: "#BBE1FA"
      },
      font: {
        color: "#000",
        size: 10
      },
      shadow: true
    },
    edges: {
      smooth: {
        type: "dynamic",
        forceDirection: "horizontal",
        roundness: 0.4
      },
      color: "gray",
      arrows: {
        to: {
          enabled: true
        }
      },
      shadow: true
    }
  }, _defineProperty(_options2, "interaction", {
    navigationButtons: true,
    keyboard: true
  }), _defineProperty(_options2, "physics", {
    forceAtlas2Based: {
      springLength: -10
    },
    minVelocity: 0.75,
    solver: "forceAtlas2Based",
    timestep: 0.53
  }), _options2);
  network = new vis.Network(container, data, options);
  network.on("click", function (params) {
    params.event = "[original event]";
    var selectedNodeID = this.getNodeAt(params.pointer.DOM);
    if (selectedNodeID <= idBCdom) {} else if (selectedNodeID == idBCinf) {
      selectedView = viewBCmc;
      createBuildingBlocksTable(selectedView);
      drawIntraViewsPredecessorsChart(selectedView);
      document.getElementById("viewDetail").innerHTML = "<i>Policy: </i>" + CA(selectedView.policy) + "<br><i>Buisness capabilities (mission critial)</i>";
      document.getElementById("bbDetail").innerHTML = "<i>please select a builidng block</i>";
      $("#networkBBs2").fadeIn();
      $("#network_div2").fadeIn();
    } else if (selectedNodeID <= idTIdom) {
      for (var x in views) {
        if (views[x].id == selectedNodeID) {
          selectedView = views[x];
          if (clickedDPSs.length === 0) return;
          var abbs = filterABBSBaseDPS(selectedView.bbs);
          var newView = _objectSpread({}, selectedView);
          newView.bbs = abbs;
          document.getElementById("viewDetail").innerHTML = "<i>Policy:  ".concat(CA(selectedView.policy), "</i>") + "<br><i>Name: ".concat(CA(selectedView.name), "</i>");
          var tableBBs = abbs.filter(function (abb) {
            return !abb.hidden;
          });
          createBuildingBlocksTable({
            bbs: tableBBs
          });
          drawIntraViewsPredecessorsChart(newView);
          document.getElementById("bbDetail").innerHTML = "<i>please select a builidng block</i>";
          $("#networkBBs2").fadeIn();
          $("#network_div2").fadeIn();
          return;
        }
      }
    } else if (selectedNodeID <= idTIinf) {
      for (var _x4 in viewsInfra) {
        if (viewsInfra[_x4].id == selectedNodeID) {
          selectedView = viewsInfra[_x4];
          if (clickedDPSs.length === 0) return;
          var _abbs = filterABBSBaseDPS(selectedView.bbs);
          var _newView = _objectSpread({}, selectedView);
          _newView.bbs = _abbs;
          var _tableBBs = _abbs.filter(function (abb) {
            return !abb.hidden;
          });
          createBuildingBlocksTable({
            bbs: _tableBBs
          });
          drawIntraViewsPredecessorsChart(_newView);
          document.getElementById("viewDetail").innerHTML = "<i>Policy:  ".concat(CA(selectedView.policy), "</i>") + "<br><i>Name: ".concat(CA(selectedView.name), "</i>");
          document.getElementById("bbDetail").innerHTML = "<i>please select a builidng block</i>";
          $("#networkBBs2").fadeIn();
          $("#network_div2").fadeIn();
          return;
        }
      }
    } else {
      var _console8;
      /* eslint-disable */(_console8 = console).log.apply(_console8, _toConsumableArray(oo_oo("f59a272a_7", "start button or undefined")));
    }
  });
}
var filterABBSBaseDPS = function filterABBSBaseDPS(abbs) {
  return abbs.map(function (abb) {
    for (var idx = 0; idx < clickedDPSs.length; idx++) {
      var dps = clickedDPSs[idx];
      if (abb.digPubServ.indexOf(dps) > -1) {
        abb.hidden = false;
        return abb;
      }
    }
    abb.hidden = true;
    return abb;
  });
};

/**
 * Create elements for info at bbs chart
 */
var bbsFillInfo = function bbsFillInfo(details) {
  $("#networkBBs2-dbc-info > .info").html("\n      <div>\n        <span>ID: </span>\n        <span>".concat(details.id, "</span>\n      </div>\n      <div>\n        <span>Policy: </span>\n        <span>").concat(details.policy, "</span>\n      </div>\n      <div>\n        <span>Name: </span>\n        <span>").concat(details.name, "</span>\n      </div>\n  "));
};
var filterBBTableWithMultipleDPS = function filterBBTableWithMultipleDPS(bbs) {
  var bbsIDs = bbs.map(function (bb) {
    return bb.id;
  });
  var tableBodyRows = document.querySelectorAll("#bbTable > tbody > tr");
  for (var rowIdx = 0; rowIdx < tableBodyRows.length; rowIdx++) {
    var tr = tableBodyRows[rowIdx];
    tr.setAttribute("style", "");
    var td = tr.querySelector("td:first-child");
    var tdValue = td.textContent;
    if (bbsIDs.indexOf(tdValue) === -1) tr.style.display = "none";
  }
};
/**
 * 
 Create and draw bb chart
 */
function drawIntraViewsPredecessorsChart(view) {
  var _options3;
  if (network2 !== null) {
    network2.destroy();
    network2 = null;
  }
  var bbs = view.bbs;
  if (bbs.length == 0 || bbs.every(function (bb) {
    return bb.hidden === true;
  })) {
    alert("There are no building blocks available for the filter combination selected");
    $(".networkBBs2-no-results").removeClass("d-none");
    return;
  }
  $(".networkBBs2-no-results").addClass("d-none");
  var nodes = [];
  var edges = [];
  for (var i in bbs) {
    var bb = bbs[i];
    var image = void 0;
    if (view.name == "Buisness Capabilities (mission critial)") {
      image = "bc.png";
    } else {
      image = "rank/old-" + Math.round(bb.ability) + ".png";
    }
    var label = " ".concat(CA(bb.abb || "").replace(/.{20}\S*\s+/g, "$&@").split(/\s+@/).join("\n"));
    var title = "<div class=\"network2-tooltips\">\n    <div>ID: ".concat(bb.id, " </div>\n    <div>Name: ").concat(bb.abb, " </div>\n    <div>Policy Domain: ").concat(bb.policy, " </div>\n    <div>DPS: ").concat(bb.digPubServ.join(", "), " </div>\n    <div>Ability to support: ").concat(bb.ability, " </div>\n  </div>");
    var color = [];
    color.background = "#fff";
    var node = createDigitalTransformNode(bb.id, "circularImage", image, label, title, color);
    node.dps = bb.digPubServ;
    node.hidden = bb.hidden;
    nodes.push(node);
    var childs = bb.successors;
    for (var y in childs) {
      var childID = childs[y];
      var edge = [];
      edge.from = bb.id;
      edge.to = childID;
      edges.push(edge);
    }
  }
  network2Nodes = new vis.DataSet(nodes);
  var container = document.getElementById("network_div2");
  var data = {
    nodes: network2Nodes,
    edges: edges
  };
  var options = (_options3 = {
    physics: true,
    interaction: {
      hover: true
    },
    height: "100%",
    width: "100%",
    nodes: {
      imagePadding: 11,
      borderWidth: 1,
      size: 30,
      color: {
        border: "#222222",
        background: "#BBE1FA"
      },
      font: {
        color: "#000",
        size: 10
      },
      shadow: true
    },
    edges: {
      smooth: {
        type: "dynamic",
        forceDirection: "horizontal",
        roundness: 0.4
      },
      color: "gray",
      arrows: {
        to: {
          enabled: true
        }
      }
    }
  }, _defineProperty(_options3, "interaction", {
    navigationButtons: true,
    keyboard: true
  }), _defineProperty(_options3, "physics", {
    forceAtlas2Based: {
      springLength: -5
    },
    minVelocity: 0.75,
    solver: "forceAtlas2Based",
    timestep: 0.53
  }), _options3);
  network2 = new vis.Network(container, data, options);
  network2.on("click", function (params) {
    params.event = "[original event]";
    var selectedNodeID = this.getNodeAt(params.pointer.DOM);
    var bbs = selectedView.bbs;
    for (var x in bbs) {
      if (bbs[x].id == selectedNodeID) {
        if (bbs[x].area == null) {
          document.getElementById("bbDetail").innerHTML = "<i>ID: ".concat(bbs[x].id, "</i>") + "<br><i>name: ".concat(bbs[x].abb, "</i>") + "</i>";
          "<br><i>Ability to support the dBusCap: " + bbs[x].ability + "</i>";
        } else {
          document.getElementById("bbDetail").innerHTML = "<i>ID: ".concat(bbs[x].id, "</i>") + "<br><i>Area: ".concat(bbs[x].area, "</i>") + "<br><i>Ability to support the dBusCap: " + bbs[x].ability + "</i>";
        }
        return;
      }
    }
  });
  network2.once("beforeDrawing", function () {
    network2.focus(1, {
      scale: 10
    });
  });
  network2.once("afterDrawing", function () {
    network2.fit({
      animation: {
        duration: 1300,
        easingFunction: "easeInQuad"
      }
    });
  });
}
function filterBBTableByID() {}

/**
 * 
 Create bb table
 */
function createBuildingBlocksTable(bc) {
  var table = document.getElementById("bbTable");
  table.innerHTML = "";
  var thead = table.createTHead();
  var row = thead.insertRow();
  var th1 = thWithTextNode("ID");
  var th2 = thWithTextNode("View");
  var th3 = thWithTextNode("Area");
  var th4 = thWithTextNode("Name");
  var th5 = thWithTextNode("Description");
  var th6 = thWithTextNode("Ability to support the dBusCap");
  var th7 = thWithTextNode("IDs' successors");
  var th8 = thWithTextNode("Digital Public service");
  row.appendChild(th1);
  row.appendChild(th2);
  row.appendChild(th3);
  row.appendChild(th4);
  row.appendChild(th5);
  row.appendChild(th6);
  row.appendChild(th7);
  row.appendChild(th8);
  var body = document.createElement("tbody");
  table.appendChild(body);
  var bbs = Array.from(new Set(bc.bbs));
  currentBBTableBody = bbs;
  var dBusCapId = bc['id'];
  if (dBusCapId === undefined) {
    dBusCapId = document.getElementById("dps-network-bc-info").getElementsByTagName('p')[0].textContent.split(' ')[1];
  }
  var _loop4 = function _loop4() {
    // search for the ability based on both the abb and dBusCap ids
    var abbId = bbs[k]['id'];
    var currentAbility = 0;
    try {
      currentAbility = customBBs.find(function (el) {
        return el.id === "".concat(abbId, " - ").concat(dBusCapId);
      })['Ability to support the dBusCap'];
      currentBBTableBody[k]['ability'] = currentAbility;
    }
    // if no abb exists, search in the bcList
    catch (err) {
      currentAbility = bcList[dBusCapId]['bbs'].find(function (el) {
        return el.id === abbId;
      })['ability'];
      currentBBTableBody[k]['ability'] = currentAbility;
    }
    var row = body.insertRow();
    row.insertCell().appendChild(document.createTextNode(bbs[k].id));
    row.insertCell().appendChild(document.createTextNode(bbs[k].view));
    row.insertCell().appendChild(document.createTextNode(bbs[k].area));
    row.insertCell().appendChild(document.createTextNode(bbs[k].abb));
    row.insertCell().appendChild(document.createTextNode(bbs[k].description));
    row.insertCell().appendChild(document.createTextNode(currentAbility)); //bbs[k].ability));

    var succs = bbs[k].successors.join(", ");
    var digPubServs = bbs[k].digPubServ.join(", ");
    row.insertCell().appendChild(document.createTextNode(succs));
    row.insertCell().appendChild(document.createTextNode(digPubServs));
  };
  for (var k in bbs) {
    _loop4();
  }
}
document.querySelector("#policy-filter-span");
// .addEventListener("click", function () {
//   this.classList.toggle("goog-combobox-active");
//   let div = this.querySelector("#policy-filter-span > div");
//   if (div.style.display === "none") {
//     div.style.display = "block";
//   } else {
//     div.style.display = "none";
//   }
// });

var xAxisValues = document.querySelectorAll("#policy-filter-span > div > div");
var _loop5 = function _loop5(i) {
  xAxisValues[i].addEventListener("click", function () {
    var text = xAxisValues[i].textContent;
    filterXAxis(xAxisValues[i].getAttribute("value"), text.trim());
  });
};
for (var i = 0; i < xAxisValues.length; i++) {
  _loop5(i);
}
/**
 * Change the bubble chart's x axis
 */
var filterXAxis = function filterXAxis(value, valueToShow) {
  if (value === "National digital strategy Fit") {
    order = [0, 1, 2, 3, 4, 5];
  } else if (value === "Expected public value") {
    order = [0, 5, 2, 3, 4, 1];
  }
  document.querySelector("#policy-filter-span > input ").setAttribute("placeholder", valueToShow);
  view.setColumns(order);
  drawBusinessCapabilityChart(quadrantWidth());
};

/**
 * Html selects for dps network
 */
var dpsSelectDivList = document.querySelector(".dps-select-div ul");
dpsSelectDivList.addEventListener("click", function (e) {
  var element = e.target;
  var input;
  var checked;
  if (element.tagName !== "INPUT") {
    input = element.parentElement.querySelector("input");
    checked = !input.checked;
  } else {
    input = element;
    checked = input.checked;
  }
  input.checked = checked;
  if (element.tagName !== "INPUT") {
    var event = new Event("change", {
      bubbles: true
    });
    element.dispatchEvent(event);
  }
});
var filteringDpsNetwork = function filteringDpsNetwork(dpss) {
  var temp = new vis.DataSet();
  DPSNetNodes.forEach(function (node) {
    DPSNetNodes.update({
      id: node.id,
      hidden: false
    });
    temp.add(_objectSpread(_objectSpread({}, node), {}, {
      hidden: false
    }));
  });
  if (dpss.length === 0) {
    DPSNetNodes.clear();
    temp.forEach(function (node) {
      return DPSNetNodes.add(node);
    });
    return;
  }
  temp = new vis.DataSet();
  DPSNetNodes.forEach(function (node) {
    var hidden;
    if (dpss.indexOf(node.dpsID) > -1) {
      hidden = false;
    } else {
      hidden = true;
    }
    node.hidden = hidden;
    temp.add(_objectSpread(_objectSpread({}, node), {}, {
      hidden: hidden
    }));
    DPSNetNodes.update({
      id: node.id,
      hidden: hidden
    });
  });
  DPSNetNodes.clear();
  temp.forEach(function (node) {
    return DPSNetNodes.add(node);
  });
};
dpsSelectDivList.addEventListener("change", function (e) {
  var dpsElements = dpsSelectDivList.querySelectorAll("input:checked");
  var dps = [];
  for (var idx = 0; idx < dpsElements.length; idx++) {
    dps.push(dpsElements[idx].getAttribute("data-dig-pub-service"));
  }
  var _clickedBC = clickedBC,
    allBcDps = _clickedBC.dps;
  var dpsNames = [];
  clickedDPSs = dps;
  dps.forEach(function (dp) {
    dpsNames.push(allBcDps.filter(function (ps) {
      return ps.id === dp;
    })[0].name);
  });
  bbsMultipleDPSInfo(dpsNames);
  var filteredBBSs;
  if (dps.length > 0) {
    filteredBBSs = clickedBC.bbs.filter(function (bb) {
      for (var _idx = 0; _idx < bb.digPubServ.length; _idx++) {
        if (dps.indexOf(bb.digPubServ[_idx]) > -1) return true;
      }
      return false;
    });
  } else {
    filteredBBSs = clickedBC.bbs;
  }
  createBuildingBlocksTable({
    bbs: filteredBBSs
  });
  filternetwork2(dps);
  filteringDpsNetwork(dps);
  drawViewsPredecessorsChart(clickedBC, dps);
});

/**
 * 
 Write dps info next to bb chart
 */
var bbsMultipleDPSInfo = function bbsMultipleDPSInfo(names) {
  names = names.map(function (name) {
    return "<li>".concat(name, "</li>");
  }).join("\n");
  $("#networkBBs2-dps-info > .info").html("<ul class=\"networkBBs2-dps-info-list\" >\n      ".concat(names, "\n    </ul>"));
};
$(document).on("scroll", function () {
  var scrollDistance = $(this).scrollTop();
  var bbStart = $("#bb-div").offset().top;
  var windowHeight = $(window).height();
  if (bbStart === 0) return;
  if (scrollDistance >= bbStart - windowHeight) {
    $(".scroll-to-dps").fadeIn().css({
      display: "flex"
    });
  } else {
    $(".scroll-to-dps").fadeOut();
  }
});
$(".scroll-to-dps").on("click", function () {
  scrollToElement("#networkBBs");
});
function createCSV(selectedValue, bcList) {
  var currentBcList;
  if (selectedValue) {
    currentBcList = _defineProperty({}, selectedValue, bcList[selectedValue]);
  } else {
    currentBcList = bcList;
  }
  var encuestaResultados = [];
  for (var clave in currentBcList) {
    var resultado = currentBcList[clave];
    encuestaResultados.push(resultado);
  }
  // Este código obtiene los resultados de la encuesta y los almacena en un array llamado encuestaResultados
  var encuestaCSV = "Pregunta 1, Pregunta 2, Pregunta 3\n";
  encuestaResultados.forEach(function (resultado) {
    var respuesta = "\"".concat(resultado.pregunta1, "\", \"").concat(resultado.pregunta2, "\", \"").concat(resultado.pregunta3, "\"\n");
    encuestaCSV += respuesta;
  });
  // Descarga del archivo en CSV
  var blob = new Blob([encuestaCSV], {
    type: "text/csv;charset=utf-8;"
  });
  var enlace = document.createElement("a");
  enlace.setAttribute("href", URL.createObjectURL(blob));
  enlace.setAttribute("download", "resultados_encuesta.csv");
  document.body.appendChild(enlace);
  enlace.click();
}

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

/***/ "./node_modules/gridjs/dist/gridjs.module.js":
/*!***************************************************!*\
  !*** ./node_modules/gridjs/dist/gridjs.module.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cell: function() { return /* binding */ X; },
/* harmony export */   Component: function() { return /* binding */ N; },
/* harmony export */   Config: function() { return /* binding */ fn; },
/* harmony export */   Grid: function() { return /* binding */ In; },
/* harmony export */   PluginPosition: function() { return /* binding */ qt; },
/* harmony export */   Row: function() { return /* binding */ Z; },
/* harmony export */   className: function() { return /* binding */ nt; },
/* harmony export */   createElement: function() { return /* binding */ w; },
/* harmony export */   createRef: function() { return /* binding */ k; },
/* harmony export */   h: function() { return /* binding */ w; },
/* harmony export */   html: function() { return /* binding */ G; },
/* harmony export */   useConfig: function() { return /* binding */ Et; },
/* harmony export */   useEffect: function() { return /* binding */ gt; },
/* harmony export */   useRef: function() { return /* binding */ yt; },
/* harmony export */   useSelector: function() { return /* binding */ jt; },
/* harmony export */   useState: function() { return /* binding */ vt; },
/* harmony export */   useStore: function() { return /* binding */ Ht; },
/* harmony export */   useTranslator: function() { return /* binding */ Lt; }
/* harmony export */ });
function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,"symbol"==typeof(o=function(t,n){if("object"!=typeof t||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key))?o:String(o),r)}var o}function n(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),Object.defineProperty(n,"prototype",{writable:!1}),n}function e(){return e=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},e.apply(this,arguments)}function r(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,o(t,n)}function o(t,n){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},o(t,n)}function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function s(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(e)return(e=e.call(t)).next.bind(e);if(Array.isArray(t)||(e=function(t,n){if(t){if("string"==typeof t)return u(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?u(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a;!function(t){t[t.Init=0]="Init",t[t.Loading=1]="Loading",t[t.Loaded=2]="Loaded",t[t.Rendered=3]="Rendered",t[t.Error=4]="Error"}(a||(a={}));var l,c,f,p,d,h,_,m={},v=[],g=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function y(t,n){for(var e in n)t[e]=n[e];return t}function b(t){var n=t.parentNode;n&&n.removeChild(t)}function w(t,n,e){var r,o,i,u={};for(i in n)"key"==i?r=n[i]:"ref"==i?o=n[i]:u[i]=n[i];if(arguments.length>2&&(u.children=arguments.length>3?l.call(arguments,2):e),"function"==typeof t&&null!=t.defaultProps)for(i in t.defaultProps)void 0===u[i]&&(u[i]=t.defaultProps[i]);return x(t,u,r,o,null)}function x(t,n,e,r,o){var i={type:t,props:n,key:e,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++f:o};return null==o&&null!=c.vnode&&c.vnode(i),i}function k(){return{current:null}}function S(t){return t.children}function N(t,n){this.props=t,this.context=n}function C(t,n){if(null==n)return t.__?C(t.__,t.__.__k.indexOf(t)+1):null;for(var e;n<t.__k.length;n++)if(null!=(e=t.__k[n])&&null!=e.__e)return e.__e;return"function"==typeof t.type?C(t):null}function P(t){var n,e;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,n=0;n<t.__k.length;n++)if(null!=(e=t.__k[n])&&null!=e.__e){t.__e=t.__c.base=e.__e;break}return P(t)}}function E(t){(!t.__d&&(t.__d=!0)&&d.push(t)&&!I.__r++||h!==c.debounceRendering)&&((h=c.debounceRendering)||setTimeout)(I)}function I(){for(var t;I.__r=d.length;)t=d.sort(function(t,n){return t.__v.__b-n.__v.__b}),d=[],t.some(function(t){var n,e,r,o,i,u;t.__d&&(i=(o=(n=t).__v).__e,(u=n.__P)&&(e=[],(r=y({},o)).__v=o.__v+1,F(u,o,r,n.__n,void 0!==u.ownerSVGElement,null!=o.__h?[i]:null,e,null==i?C(o):i,o.__h),O(e,o),o.__e!=i&&P(o)))})}function T(t,n,e,r,o,i,u,s,a,l){var c,f,p,d,h,_,g,y=r&&r.__k||v,b=y.length;for(e.__k=[],c=0;c<n.length;c++)if(null!=(d=e.__k[c]=null==(d=n[c])||"boolean"==typeof d?null:"string"==typeof d||"number"==typeof d||"bigint"==typeof d?x(null,d,null,null,d):Array.isArray(d)?x(S,{children:d},null,null,null):d.__b>0?x(d.type,d.props,d.key,d.ref?d.ref:null,d.__v):d)){if(d.__=e,d.__b=e.__b+1,null===(p=y[c])||p&&d.key==p.key&&d.type===p.type)y[c]=void 0;else for(f=0;f<b;f++){if((p=y[f])&&d.key==p.key&&d.type===p.type){y[f]=void 0;break}p=null}F(t,d,p=p||m,o,i,u,s,a,l),h=d.__e,(f=d.ref)&&p.ref!=f&&(g||(g=[]),p.ref&&g.push(p.ref,null,d),g.push(f,d.__c||h,d)),null!=h?(null==_&&(_=h),"function"==typeof d.type&&d.__k===p.__k?d.__d=a=L(d,a,t):a=A(t,d,p,y,h,a),"function"==typeof e.type&&(e.__d=a)):a&&p.__e==a&&a.parentNode!=t&&(a=C(p))}for(e.__e=_,c=b;c--;)null!=y[c]&&W(y[c],y[c]);if(g)for(c=0;c<g.length;c++)U(g[c],g[++c],g[++c])}function L(t,n,e){for(var r,o=t.__k,i=0;o&&i<o.length;i++)(r=o[i])&&(r.__=t,n="function"==typeof r.type?L(r,n,e):A(e,r,r,o,r.__e,n));return n}function A(t,n,e,r,o,i){var u,s,a;if(void 0!==n.__d)u=n.__d,n.__d=void 0;else if(null==e||o!=i||null==o.parentNode)t:if(null==i||i.parentNode!==t)t.appendChild(o),u=null;else{for(s=i,a=0;(s=s.nextSibling)&&a<r.length;a+=1)if(s==o)break t;t.insertBefore(o,i),u=i}return void 0!==u?u:o.nextSibling}function H(t,n,e){"-"===n[0]?t.setProperty(n,e):t[n]=null==e?"":"number"!=typeof e||g.test(n)?e:e+"px"}function j(t,n,e,r,o){var i;t:if("style"===n)if("string"==typeof e)t.style.cssText=e;else{if("string"==typeof r&&(t.style.cssText=r=""),r)for(n in r)e&&n in e||H(t.style,n,"");if(e)for(n in e)r&&e[n]===r[n]||H(t.style,n,e[n])}else if("o"===n[0]&&"n"===n[1])i=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in t?n.toLowerCase().slice(2):n.slice(2),t.l||(t.l={}),t.l[n+i]=e,e?r||t.addEventListener(n,i?M:D,i):t.removeEventListener(n,i?M:D,i);else if("dangerouslySetInnerHTML"!==n){if(o)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&n in t)try{t[n]=null==e?"":e;break t}catch(t){}"function"==typeof e||(null==e||!1===e&&-1==n.indexOf("-")?t.removeAttribute(n):t.setAttribute(n,e))}}function D(t){this.l[t.type+!1](c.event?c.event(t):t)}function M(t){this.l[t.type+!0](c.event?c.event(t):t)}function F(t,n,e,r,o,i,u,s,a){var l,f,p,d,h,_,m,v,g,b,w,x,k,C,P,E=n.type;if(void 0!==n.constructor)return null;null!=e.__h&&(a=e.__h,s=n.__e=e.__e,n.__h=null,i=[s]),(l=c.__b)&&l(n);try{t:if("function"==typeof E){if(v=n.props,g=(l=E.contextType)&&r[l.__c],b=l?g?g.props.value:l.__:r,e.__c?m=(f=n.__c=e.__c).__=f.__E:("prototype"in E&&E.prototype.render?n.__c=f=new E(v,b):(n.__c=f=new N(v,b),f.constructor=E,f.render=B),g&&g.sub(f),f.props=v,f.state||(f.state={}),f.context=b,f.__n=r,p=f.__d=!0,f.__h=[],f._sb=[]),null==f.__s&&(f.__s=f.state),null!=E.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=y({},f.__s)),y(f.__s,E.getDerivedStateFromProps(v,f.__s))),d=f.props,h=f.state,p)null==E.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==E.getDerivedStateFromProps&&v!==d&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(v,b),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(v,f.__s,b)||n.__v===e.__v){for(f.props=v,f.state=f.__s,n.__v!==e.__v&&(f.__d=!1),f.__v=n,n.__e=e.__e,n.__k=e.__k,n.__k.forEach(function(t){t&&(t.__=n)}),w=0;w<f._sb.length;w++)f.__h.push(f._sb[w]);f._sb=[],f.__h.length&&u.push(f);break t}null!=f.componentWillUpdate&&f.componentWillUpdate(v,f.__s,b),null!=f.componentDidUpdate&&f.__h.push(function(){f.componentDidUpdate(d,h,_)})}if(f.context=b,f.props=v,f.__v=n,f.__P=t,x=c.__r,k=0,"prototype"in E&&E.prototype.render){for(f.state=f.__s,f.__d=!1,x&&x(n),l=f.render(f.props,f.state,f.context),C=0;C<f._sb.length;C++)f.__h.push(f._sb[C]);f._sb=[]}else do{f.__d=!1,x&&x(n),l=f.render(f.props,f.state,f.context),f.state=f.__s}while(f.__d&&++k<25);f.state=f.__s,null!=f.getChildContext&&(r=y(y({},r),f.getChildContext())),p||null==f.getSnapshotBeforeUpdate||(_=f.getSnapshotBeforeUpdate(d,h)),P=null!=l&&l.type===S&&null==l.key?l.props.children:l,T(t,Array.isArray(P)?P:[P],n,e,r,o,i,u,s,a),f.base=n.__e,n.__h=null,f.__h.length&&u.push(f),m&&(f.__E=f.__=null),f.__e=!1}else null==i&&n.__v===e.__v?(n.__k=e.__k,n.__e=e.__e):n.__e=R(e.__e,n,e,r,o,i,u,a);(l=c.diffed)&&l(n)}catch(t){n.__v=null,(a||null!=i)&&(n.__e=s,n.__h=!!a,i[i.indexOf(s)]=null),c.__e(t,n,e)}}function O(t,n){c.__c&&c.__c(n,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(t){t.call(n)})}catch(t){c.__e(t,n.__v)}})}function R(t,n,e,r,o,i,u,s){var a,c,f,p=e.props,d=n.props,h=n.type,_=0;if("svg"===h&&(o=!0),null!=i)for(;_<i.length;_++)if((a=i[_])&&"setAttribute"in a==!!h&&(h?a.localName===h:3===a.nodeType)){t=a,i[_]=null;break}if(null==t){if(null===h)return document.createTextNode(d);t=o?document.createElementNS("http://www.w3.org/2000/svg",h):document.createElement(h,d.is&&d),i=null,s=!1}if(null===h)p===d||s&&t.data===d||(t.data=d);else{if(i=i&&l.call(t.childNodes),c=(p=e.props||m).dangerouslySetInnerHTML,f=d.dangerouslySetInnerHTML,!s){if(null!=i)for(p={},_=0;_<t.attributes.length;_++)p[t.attributes[_].name]=t.attributes[_].value;(f||c)&&(f&&(c&&f.__html==c.__html||f.__html===t.innerHTML)||(t.innerHTML=f&&f.__html||""))}if(function(t,n,e,r,o){var i;for(i in e)"children"===i||"key"===i||i in n||j(t,i,null,e[i],r);for(i in n)o&&"function"!=typeof n[i]||"children"===i||"key"===i||"value"===i||"checked"===i||e[i]===n[i]||j(t,i,n[i],e[i],r)}(t,d,p,o,s),f)n.__k=[];else if(_=n.props.children,T(t,Array.isArray(_)?_:[_],n,e,r,o&&"foreignObject"!==h,i,u,i?i[0]:e.__k&&C(e,0),s),null!=i)for(_=i.length;_--;)null!=i[_]&&b(i[_]);s||("value"in d&&void 0!==(_=d.value)&&(_!==t.value||"progress"===h&&!_||"option"===h&&_!==p.value)&&j(t,"value",_,p.value,!1),"checked"in d&&void 0!==(_=d.checked)&&_!==t.checked&&j(t,"checked",_,p.checked,!1))}return t}function U(t,n,e){try{"function"==typeof t?t(n):t.current=n}catch(t){c.__e(t,e)}}function W(t,n,e){var r,o;if(c.unmount&&c.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||U(r,null,n)),null!=(r=t.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(t){c.__e(t,n)}r.base=r.__P=null,t.__c=void 0}if(r=t.__k)for(o=0;o<r.length;o++)r[o]&&W(r[o],n,e||"function"!=typeof t.type);e||null==t.__e||b(t.__e),t.__=t.__e=t.__d=void 0}function B(t,n,e){return this.constructor(t,e)}function q(t,n,e){var r,o,i;c.__&&c.__(t,n),o=(r="function"==typeof e)?null:e&&e.__k||n.__k,i=[],F(n,t=(!r&&e||n).__k=w(S,null,[t]),o||m,m,void 0!==n.ownerSVGElement,!r&&e?[e]:o?null:n.firstChild?l.call(n.childNodes):null,i,!r&&e?e:o?o.__e:n.firstChild,r),O(i,t)}function z(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var n=16*Math.random()|0;return("x"==t?n:3&n|8).toString(16)})}l=v.slice,c={__e:function(t,n,e,r){for(var o,i,u;n=n.__;)if((o=n.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(t)),u=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(t,r||{}),u=o.__d),u)return o.__E=o}catch(n){t=n}throw t}},f=0,p=function(t){return null!=t&&void 0===t.constructor},N.prototype.setState=function(t,n){var e;e=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=y({},this.state),"function"==typeof t&&(t=t(y({},e),this.props)),t&&y(e,t),null!=t&&this.__v&&(n&&this._sb.push(n),E(this))},N.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),E(this))},N.prototype.render=S,d=[],I.__r=0,_=0;var V=/*#__PURE__*/function(){function t(t){this._id=void 0,this._id=t||z()}return n(t,[{key:"id",get:function(){return this._id}}]),t}();function $(t){return w(t.parentElement||"span",{dangerouslySetInnerHTML:{__html:t.content}})}function G(t,n){return w($,{content:t,parentElement:n})}var K,X=/*#__PURE__*/function(t){function n(n){var e;return(e=t.call(this)||this).data=void 0,e.update(n),e}r(n,t);var e=n.prototype;return e.cast=function(t){return t instanceof HTMLElement?G(t.outerHTML):t},e.update=function(t){return this.data=this.cast(t),this},n}(V),Z=/*#__PURE__*/function(t){function e(n){var e;return(e=t.call(this)||this)._cells=void 0,e.cells=n||[],e}r(e,t);var o=e.prototype;return o.cell=function(t){return this._cells[t]},o.toArray=function(){return this.cells.map(function(t){return t.data})},e.fromCells=function(t){return new e(t.map(function(t){return new X(t.data)}))},n(e,[{key:"cells",get:function(){return this._cells},set:function(t){this._cells=t}},{key:"length",get:function(){return this.cells.length}}]),e}(V),J=/*#__PURE__*/function(t){function e(n){var e;return(e=t.call(this)||this)._rows=void 0,e._length=void 0,e.rows=n instanceof Array?n:n instanceof Z?[n]:[],e}return r(e,t),e.prototype.toArray=function(){return this.rows.map(function(t){return t.toArray()})},e.fromRows=function(t){return new e(t.map(function(t){return Z.fromCells(t.cells)}))},e.fromArray=function(t){return new e((t=function(t){return!t[0]||t[0]instanceof Array?t:[t]}(t)).map(function(t){return new Z(t.map(function(t){return new X(t)}))}))},n(e,[{key:"rows",get:function(){return this._rows},set:function(t){this._rows=t}},{key:"length",get:function(){return this._length||this.rows.length},set:function(t){this._length=t}}]),e}(V),Q=/*#__PURE__*/function(){function t(){this.callbacks=void 0}var n=t.prototype;return n.init=function(t){this.callbacks||(this.callbacks={}),t&&!this.callbacks[t]&&(this.callbacks[t]=[])},n.listeners=function(){return this.callbacks},n.on=function(t,n){return this.init(t),this.callbacks[t].push(n),this},n.off=function(t,n){var e=t;return this.init(),this.callbacks[e]&&0!==this.callbacks[e].length?(this.callbacks[e]=this.callbacks[e].filter(function(t){return t!=n}),this):this},n.emit=function(t){var n=arguments,e=t;return this.init(e),this.callbacks[e].length>0&&(this.callbacks[e].forEach(function(t){return t.apply(void 0,[].slice.call(n,1))}),!0)},t}();!function(t){t[t.Initiator=0]="Initiator",t[t.ServerFilter=1]="ServerFilter",t[t.ServerSort=2]="ServerSort",t[t.ServerLimit=3]="ServerLimit",t[t.Extractor=4]="Extractor",t[t.Transformer=5]="Transformer",t[t.Filter=6]="Filter",t[t.Sort=7]="Sort",t[t.Limit=8]="Limit"}(K||(K={}));var Y=/*#__PURE__*/function(t){function e(n){var e;return(e=t.call(this)||this).id=void 0,e._props=void 0,e._props={},e.id=z(),n&&e.setProps(n),e}r(e,t);var o=e.prototype;return o.process=function(){var t=[].slice.call(arguments);this.validateProps instanceof Function&&this.validateProps.apply(this,t),this.emit.apply(this,["beforeProcess"].concat(t));var n=this._process.apply(this,t);return this.emit.apply(this,["afterProcess"].concat(t)),n},o.setProps=function(t){return Object.assign(this._props,t),this.emit("propsUpdated",this),this},n(e,[{key:"props",get:function(){return this._props}}]),e}(Q),tt=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}return r(e,t),e.prototype._process=function(t){return this.props.keyword?(n=String(this.props.keyword).trim(),e=this.props.columns,r=this.props.ignoreHiddenColumns,o=t,i=this.props.selector,n=n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),new J(o.rows.filter(function(t,o){return t.cells.some(function(t,u){if(!t)return!1;if(r&&e&&e[u]&&"object"==typeof e[u]&&e[u].hidden)return!1;var s="";if("function"==typeof i)s=i(t.data,o,u);else if("object"==typeof t.data){var a=t.data;a&&a.props&&a.props.content&&(s=a.props.content)}else s=String(t.data);return new RegExp(n,"gi").test(s)})}))):t;var n,e,r,o,i},n(e,[{key:"type",get:function(){return K.Filter}}]),e}(Y);function nt(){var t="gridjs";return""+t+[].slice.call(arguments).reduce(function(t,n){return t+"-"+n},"")}function et(){return[].slice.call(arguments).map(function(t){return t?t.toString():""}).filter(function(t){return t}).reduce(function(t,n){return(t||"")+" "+n},"").trim()}var rt,ot,it,ut,st=/*#__PURE__*/function(t){function o(){return t.apply(this,arguments)||this}return r(o,t),o.prototype._process=function(t){if(!this.props.keyword)return t;var n={};return this.props.url&&(n.url=this.props.url(t.url,this.props.keyword)),this.props.body&&(n.body=this.props.body(t.body,this.props.keyword)),e({},t,n)},n(o,[{key:"type",get:function(){return K.ServerFilter}}]),o}(Y),at=0,lt=[],ct=[],ft=c.__b,pt=c.__r,dt=c.diffed,ht=c.__c,_t=c.unmount;function mt(t,n){c.__h&&c.__h(ot,t,at||n),at=0;var e=ot.__H||(ot.__H={__:[],__h:[]});return t>=e.__.length&&e.__.push({__V:ct}),e.__[t]}function vt(t){return at=1,function(t,n,e){var r=mt(rt++,2);if(r.t=t,!r.__c&&(r.__=[Pt(void 0,n),function(t){var n=r.__N?r.__N[0]:r.__[0],e=r.t(n,t);n!==e&&(r.__N=[e,r.__[1]],r.__c.setState({}))}],r.__c=ot,!ot.u)){ot.u=!0;var o=ot.shouldComponentUpdate;ot.shouldComponentUpdate=function(t,n,e){if(!r.__c.__H)return!0;var i=r.__c.__H.__.filter(function(t){return t.__c});if(i.every(function(t){return!t.__N}))return!o||o.call(this,t,n,e);var u=!1;return i.forEach(function(t){if(t.__N){var n=t.__[0];t.__=t.__N,t.__N=void 0,n!==t.__[0]&&(u=!0)}}),!(!u&&r.__c.props===t)&&(!o||o.call(this,t,n,e))}}return r.__N||r.__}(Pt,t)}function gt(t,n){var e=mt(rt++,3);!c.__s&&Ct(e.__H,n)&&(e.__=t,e.i=n,ot.__H.__h.push(e))}function yt(t){return at=5,bt(function(){return{current:t}},[])}function bt(t,n){var e=mt(rt++,7);return Ct(e.__H,n)?(e.__V=t(),e.i=n,e.__h=t,e.__V):e.__}function wt(){for(var t;t=lt.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(St),t.__H.__h.forEach(Nt),t.__H.__h=[]}catch(n){t.__H.__h=[],c.__e(n,t.__v)}}c.__b=function(t){ot=null,ft&&ft(t)},c.__r=function(t){pt&&pt(t),rt=0;var n=(ot=t.__c).__H;n&&(it===ot?(n.__h=[],ot.__h=[],n.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=ct,t.__N=t.i=void 0})):(n.__h.forEach(St),n.__h.forEach(Nt),n.__h=[])),it=ot},c.diffed=function(t){dt&&dt(t);var n=t.__c;n&&n.__H&&(n.__H.__h.length&&(1!==lt.push(n)&&ut===c.requestAnimationFrame||((ut=c.requestAnimationFrame)||kt)(wt)),n.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==ct&&(t.__=t.__V),t.i=void 0,t.__V=ct})),it=ot=null},c.__c=function(t,n){n.some(function(t){try{t.__h.forEach(St),t.__h=t.__h.filter(function(t){return!t.__||Nt(t)})}catch(e){n.some(function(t){t.__h&&(t.__h=[])}),n=[],c.__e(e,t.__v)}}),ht&&ht(t,n)},c.unmount=function(t){_t&&_t(t);var n,e=t.__c;e&&e.__H&&(e.__H.__.forEach(function(t){try{St(t)}catch(t){n=t}}),e.__H=void 0,n&&c.__e(n,e.__v))};var xt="function"==typeof requestAnimationFrame;function kt(t){var n,e=function(){clearTimeout(r),xt&&cancelAnimationFrame(n),setTimeout(t)},r=setTimeout(e,100);xt&&(n=requestAnimationFrame(e))}function St(t){var n=ot,e=t.__c;"function"==typeof e&&(t.__c=void 0,e()),ot=n}function Nt(t){var n=ot;t.__c=t.__(),ot=n}function Ct(t,n){return!t||t.length!==n.length||n.some(function(n,e){return n!==t[e]})}function Pt(t,n){return"function"==typeof n?n(t):n}function Et(){return function(t){var n=ot.context[t.__c],e=mt(rt++,9);return e.c=t,n?(null==e.__&&(e.__=!0,n.sub(ot)),n.props.value):t.__}(cn)}var It={search:{placeholder:"Type a keyword..."},sort:{sortAsc:"Sort column ascending",sortDesc:"Sort column descending"},pagination:{previous:"Previous",next:"Next",navigate:function(t,n){return"Page "+t+" of "+n},page:function(t){return"Page "+t},showing:"Showing",of:"of",to:"to",results:"results"},loading:"Loading...",noRecordsFound:"No matching records found",error:"An error happened while fetching the data"},Tt=/*#__PURE__*/function(){function t(t){this._language=void 0,this._defaultLanguage=void 0,this._language=t,this._defaultLanguage=It}var n=t.prototype;return n.getString=function(t,n){if(!n||!t)return null;var e=t.split("."),r=e[0];if(n[r]){var o=n[r];return"string"==typeof o?function(){return o}:"function"==typeof o?o:this.getString(e.slice(1).join("."),o)}return null},n.translate=function(t){var n,e=this.getString(t,this._language);return(n=e||this.getString(t,this._defaultLanguage))?n.apply(void 0,[].slice.call(arguments,1)):t},t}();function Lt(){var t=Et();return function(n){var e;return(e=t.translator).translate.apply(e,[n].concat([].slice.call(arguments,1)))}}var At=function(t){return function(n){return e({},n,{search:{keyword:t}})}};function Ht(){return Et().store}function jt(t){var n=Ht(),e=vt(t(n.getState())),r=e[0],o=e[1];return gt(function(){return n.subscribe(function(){var e=t(n.getState());r!==e&&o(e)})},[]),r}function Dt(){var t,n=vt(void 0),e=n[0],r=n[1],o=Et(),i=o.search,u=Lt(),s=Ht().dispatch,a=jt(function(t){return t.search});gt(function(){e&&e.setProps({keyword:null==a?void 0:a.keyword})},[a,e]),gt(function(){r(i.server?new st({keyword:i.keyword,url:i.server.url,body:i.server.body}):new tt({keyword:i.keyword,columns:o.header&&o.header.columns,ignoreHiddenColumns:i.ignoreHiddenColumns||void 0===i.ignoreHiddenColumns,selector:i.selector})),i.keyword&&s(At(i.keyword))},[i]),gt(function(){return o.pipeline.register(e),function(){return o.pipeline.unregister(e)}},[o,e]);var l,c,f,p=function(t,n){return at=8,bt(function(){return t},n)}((l=function(t){t.target instanceof HTMLInputElement&&s(At(t.target.value))},c=e instanceof st?i.debounceTimeout||250:0,function(){var t=arguments;return new Promise(function(n){f&&clearTimeout(f),f=setTimeout(function(){return n(l.apply(void 0,[].slice.call(t)))},c)})}),[i,e]);return w("div",{className:nt(et("search",null==(t=o.className)?void 0:t.search))},w("input",{type:"search",placeholder:u("search.placeholder"),"aria-label":u("search.placeholder"),onInput:p,className:et(nt("input"),nt("search","input")),value:(null==a?void 0:a.keyword)||""}))}var Mt=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}r(e,t);var o=e.prototype;return o.validateProps=function(){if(isNaN(Number(this.props.limit))||isNaN(Number(this.props.page)))throw Error("Invalid parameters passed")},o._process=function(t){var n=this.props.page;return new J(t.rows.slice(n*this.props.limit,(n+1)*this.props.limit))},n(e,[{key:"type",get:function(){return K.Limit}}]),e}(Y),Ft=/*#__PURE__*/function(t){function o(){return t.apply(this,arguments)||this}return r(o,t),o.prototype._process=function(t){var n={};return this.props.url&&(n.url=this.props.url(t.url,this.props.page,this.props.limit)),this.props.body&&(n.body=this.props.body(t.body,this.props.page,this.props.limit)),e({},t,n)},n(o,[{key:"type",get:function(){return K.ServerLimit}}]),o}(Y);function Ot(){var t=Et(),n=t.pagination,e=n.server,r=n.summary,o=void 0===r||r,i=n.nextButton,u=void 0===i||i,s=n.prevButton,a=void 0===s||s,l=n.buttonsCount,c=void 0===l?3:l,f=n.limit,p=void 0===f?10:f,d=n.page,h=void 0===d?0:d,_=n.resetPageOnUpdate,m=void 0===_||_,v=yt(null),g=vt(h),y=g[0],b=g[1],x=vt(0),k=x[0],N=x[1],C=Lt();gt(function(){return v.current=e?new Ft({limit:p,page:y,url:e.url,body:e.body}):new Mt({limit:p,page:y}),v.current instanceof Ft?t.pipeline.on("afterProcess",function(t){return N(t.length)}):v.current instanceof Mt&&v.current.on("beforeProcess",function(t){return N(t.length)}),t.pipeline.on("updated",P),t.pipeline.register(v.current),t.pipeline.on("error",function(){N(0),b(0)}),function(){t.pipeline.unregister(v.current),t.pipeline.off("updated",P)}},[]);var P=function(t){m&&t!==v.current&&b(0)},E=function(){return Math.ceil(k/p)},I=function(t){if(t>=E()||t<0||t===y)return null;b(t),v.current.setProps({page:t})};return w("div",{className:et(nt("pagination"),t.className.pagination)},w(S,null,o&&k>0&&w("div",{role:"status","aria-live":"polite",className:et(nt("summary"),t.className.paginationSummary),title:C("pagination.navigate",y+1,E())},C("pagination.showing")," ",w("b",null,C(""+(y*p+1)))," ",C("pagination.to")," ",w("b",null,C(""+Math.min((y+1)*p,k)))," ",C("pagination.of")," ",w("b",null,C(""+k))," ",C("pagination.results"))),w("div",{className:nt("pages")},a&&w("button",{tabIndex:0,role:"button",disabled:0===y,onClick:function(){return I(y-1)},title:C("pagination.previous"),"aria-label":C("pagination.previous"),className:et(t.className.paginationButton,t.className.paginationButtonPrev)},C("pagination.previous")),function(){if(c<=0)return null;var n=Math.min(E(),c),e=Math.min(y,Math.floor(n/2));return y+Math.floor(n/2)>=E()&&(e=n-(E()-y)),w(S,null,E()>n&&y-e>0&&w(S,null,w("button",{tabIndex:0,role:"button",onClick:function(){return I(0)},title:C("pagination.firstPage"),"aria-label":C("pagination.firstPage"),className:t.className.paginationButton},C("1")),w("button",{tabIndex:-1,className:et(nt("spread"),t.className.paginationButton)},"...")),Array.from(Array(n).keys()).map(function(t){return y+(t-e)}).map(function(n){return w("button",{tabIndex:0,role:"button",onClick:function(){return I(n)},className:et(y===n?et(nt("currentPage"),t.className.paginationButtonCurrent):null,t.className.paginationButton),title:C("pagination.page",n+1),"aria-label":C("pagination.page",n+1)},C(""+(n+1)))}),E()>n&&E()>y+e+1&&w(S,null,w("button",{tabIndex:-1,className:et(nt("spread"),t.className.paginationButton)},"..."),w("button",{tabIndex:0,role:"button",onClick:function(){return I(E()-1)},title:C("pagination.page",E()),"aria-label":C("pagination.page",E()),className:t.className.paginationButton},C(""+E()))))}(),u&&w("button",{tabIndex:0,role:"button",disabled:E()===y+1||0===E(),onClick:function(){return I(y+1)},title:C("pagination.next"),"aria-label":C("pagination.next"),className:et(t.className.paginationButton,t.className.paginationButtonNext)},C("pagination.next"))))}function Rt(t,n){return"string"==typeof t?t.indexOf("%")>-1?n/100*parseInt(t,10):parseInt(t,10):t}function Ut(t){return t?Math.floor(t)+"px":""}function Wt(t){var n=t.tableRef.cloneNode(!0);return n.style.position="absolute",n.style.width="100%",n.style.zIndex="-2147483640",n.style.visibility="hidden",w("div",{ref:function(t){t&&t.appendChild(n)}})}function Bt(t){if(!t)return"";var n=t.split(" ");return 1===n.length&&/([a-z][A-Z])+/g.test(t)?t:n.map(function(t,n){return 0==n?t.toLowerCase():t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()}).join("")}var qt,zt=new(/*#__PURE__*/function(){function t(){}var n=t.prototype;return n.format=function(t,n){return"[Grid.js] ["+n.toUpperCase()+"]: "+t},n.error=function(t,n){void 0===n&&(n=!1);var e=this.format(t,"error");if(n)throw Error(e);console.error(e)},n.warn=function(t){console.warn(this.format(t,"warn"))},n.info=function(t){console.info(this.format(t,"info"))},t}());!function(t){t[t.Header=0]="Header",t[t.Footer=1]="Footer",t[t.Cell=2]="Cell"}(qt||(qt={}));var Vt=/*#__PURE__*/function(){function t(){this.plugins=void 0,this.plugins=[]}var n=t.prototype;return n.get=function(t){return this.plugins.find(function(n){return n.id===t})},n.add=function(t){return t.id?this.get(t.id)?(zt.error("Duplicate plugin ID: "+t.id),this):(this.plugins.push(t),this):(zt.error("Plugin ID cannot be empty"),this)},n.remove=function(t){var n=this.get(t);return n&&this.plugins.splice(this.plugins.indexOf(n),1),this},n.list=function(t){var n;return n=null!=t||null!=t?this.plugins.filter(function(n){return n.position===t}):this.plugins,n.sort(function(t,n){return t.order&&n.order?t.order-n.order:1})},t}();function $t(t){var n=this,r=Et();if(t.pluginId){var o=r.plugin.get(t.pluginId);return o?w(S,{},w(o.component,e({plugin:o},t.props))):null}return void 0!==t.position?w(S,{},r.plugin.list(t.position).map(function(t){return w(t.component,e({plugin:t},n.props.props))})):null}var Gt=/*#__PURE__*/function(t){function o(){var n;return(n=t.call(this)||this)._columns=void 0,n._columns=[],n}r(o,t);var i=o.prototype;return i.adjustWidth=function(t,n,r){var i=t.container,u=t.autoWidth;if(!i)return this;var a=i.clientWidth,l={};n.current&&u&&(q(w(Wt,{tableRef:n.current}),r.current),l=function(t){var n=t.querySelector("table");if(!n)return{};var r=n.className,o=n.style.cssText;n.className=r+" "+nt("shadowTable"),n.style.tableLayout="auto",n.style.width="auto",n.style.padding="0",n.style.margin="0",n.style.border="none",n.style.outline="none";var i=Array.from(n.parentNode.querySelectorAll("thead th")).reduce(function(t,n){var r;return n.style.width=n.clientWidth+"px",e(((r={})[n.getAttribute("data-column-id")]={minWidth:n.clientWidth},r),t)},{});return n.className=r,n.style.cssText=o,n.style.tableLayout="auto",Array.from(n.parentNode.querySelectorAll("thead th")).reduce(function(t,n){return t[n.getAttribute("data-column-id")].width=n.clientWidth,t},i)}(r.current));for(var c,f=s(o.tabularFormat(this.columns).reduce(function(t,n){return t.concat(n)},[]));!(c=f()).done;){var p=c.value;p.columns&&p.columns.length>0||(!p.width&&u?p.id in l&&(p.width=Ut(l[p.id].width),p.minWidth=Ut(l[p.id].minWidth)):p.width=Ut(Rt(p.width,a)))}return n.current&&u&&q(null,r.current),this},i.setSort=function(t,n){for(var r,o=s(n||this.columns||[]);!(r=o()).done;){var i=r.value;i.columns&&i.columns.length>0?i.sort=void 0:void 0===i.sort&&t?i.sort={}:i.sort?"object"==typeof i.sort&&(i.sort=e({},i.sort)):i.sort=void 0,i.columns&&this.setSort(t,i.columns)}},i.setResizable=function(t,n){for(var e,r=s(n||this.columns||[]);!(e=r()).done;){var o=e.value;void 0===o.resizable&&(o.resizable=t),o.columns&&this.setResizable(t,o.columns)}},i.setID=function(t){for(var n,e=s(t||this.columns||[]);!(n=e()).done;){var r=n.value;r.id||"string"!=typeof r.name||(r.id=Bt(r.name)),r.id||zt.error('Could not find a valid ID for one of the columns. Make sure a valid "id" is set for all columns.'),r.columns&&this.setID(r.columns)}},i.populatePlugins=function(t,n){for(var r,o=s(n);!(r=o()).done;){var i=r.value;void 0!==i.plugin&&t.add(e({id:i.id},i.plugin,{position:qt.Cell}))}},o.fromColumns=function(t){for(var n,e=new o,r=s(t);!(n=r()).done;){var i=n.value;if("string"==typeof i||p(i))e.columns.push({name:i});else if("object"==typeof i){var u=i;u.columns&&(u.columns=o.fromColumns(u.columns).columns),"object"==typeof u.plugin&&void 0===u.data&&(u.data=null),e.columns.push(i)}}return e},o.createFromConfig=function(t){var n=new o;return t.from?n.columns=o.fromHTMLTable(t.from).columns:t.columns?n.columns=o.fromColumns(t.columns).columns:!t.data||"object"!=typeof t.data[0]||t.data[0]instanceof Array||(n.columns=Object.keys(t.data[0]).map(function(t){return{name:t}})),n.columns.length?(n.setID(),n.setSort(t.sort),n.setResizable(t.resizable),n.populatePlugins(t.plugin,n.columns),n):null},o.fromHTMLTable=function(t){for(var n,e=new o,r=s(t.querySelector("thead").querySelectorAll("th"));!(n=r()).done;){var i=n.value;e.columns.push({name:i.innerHTML,width:i.width})}return e},o.tabularFormat=function(t){var n=[],e=t||[],r=[];if(e&&e.length){n.push(e);for(var o,i=s(e);!(o=i()).done;){var u=o.value;u.columns&&u.columns.length&&(r=r.concat(u.columns))}r.length&&(n=n.concat(this.tabularFormat(r)))}return n},o.leafColumns=function(t){var n=[],e=t||[];if(e&&e.length)for(var r,o=s(e);!(r=o()).done;){var i=r.value;i.columns&&0!==i.columns.length||n.push(i),i.columns&&(n=n.concat(this.leafColumns(i.columns)))}return n},o.maximumDepth=function(t){return this.tabularFormat([t]).length-1},n(o,[{key:"columns",get:function(){return this._columns},set:function(t){this._columns=t}},{key:"visibleColumns",get:function(){return this._columns.filter(function(t){return!t.hidden})}}]),o}(V),Kt=function(){},Xt=/*#__PURE__*/function(t){function n(n){var e;return(e=t.call(this)||this).data=void 0,e.set(n),e}r(n,t);var e=n.prototype;return e.get=function(){try{return Promise.resolve(this.data()).then(function(t){return{data:t,total:t.length}})}catch(t){return Promise.reject(t)}},e.set=function(t){return t instanceof Array?this.data=function(){return t}:t instanceof Function&&(this.data=t),this},n}(Kt),Zt=/*#__PURE__*/function(t){function n(n){var e;return(e=t.call(this)||this).options=void 0,e.options=n,e}r(n,t);var o=n.prototype;return o.handler=function(t){return"function"==typeof this.options.handle?this.options.handle(t):t.ok?t.json():(zt.error("Could not fetch data: "+t.status+" - "+t.statusText,!0),null)},o.get=function(t){var n=e({},this.options,t);return"function"==typeof n.data?n.data(n):fetch(n.url,n).then(this.handler.bind(this)).then(function(t){return{data:n.then(t),total:"function"==typeof n.total?n.total(t):void 0}})},n}(Kt),Jt=/*#__PURE__*/function(){function t(){}return t.createFromConfig=function(t){var n=null;return t.data&&(n=new Xt(t.data)),t.from&&(n=new Xt(this.tableElementToArray(t.from)),t.from.style.display="none"),t.server&&(n=new Zt(t.server)),n||zt.error("Could not determine the storage type",!0),n},t.tableElementToArray=function(t){for(var n,e,r=[],o=s(t.querySelector("tbody").querySelectorAll("tr"));!(n=o()).done;){for(var i,u=[],a=s(n.value.querySelectorAll("td"));!(i=a()).done;){var l=i.value;1===l.childNodes.length&&l.childNodes[0].nodeType===Node.TEXT_NODE?u.push((e=l.innerHTML,(new DOMParser).parseFromString(e,"text/html").documentElement.textContent)):u.push(G(l.innerHTML))}r.push(u)}return r},t}(),Qt="undefined"!=typeof Symbol?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator";function Yt(t,n,e){if(!t.s){if(e instanceof tn){if(!e.s)return void(e.o=Yt.bind(null,t,n));1&n&&(n=e.s),e=e.v}if(e&&e.then)return void e.then(Yt.bind(null,t,n),Yt.bind(null,t,2));t.s=n,t.v=e;var r=t.o;r&&r(t)}}var tn=/*#__PURE__*/function(){function t(){}return t.prototype.then=function(n,e){var r=new t,o=this.s;if(o){var i=1&o?n:e;if(i){try{Yt(r,1,i(this.v))}catch(t){Yt(r,2,t)}return r}return this}return this.o=function(t){try{var o=t.v;1&t.s?Yt(r,1,n?n(o):o):e?Yt(r,1,e(o)):Yt(r,2,o)}catch(t){Yt(r,2,t)}},r},t}();function nn(t){return t instanceof tn&&1&t.s}var en=/*#__PURE__*/function(t){function e(n){var e;return(e=t.call(this)||this)._steps=new Map,e.cache=new Map,e.lastProcessorIndexUpdated=-1,n&&n.forEach(function(t){return e.register(t)}),e}r(e,t);var o=e.prototype;return o.clearCache=function(){this.cache=new Map,this.lastProcessorIndexUpdated=-1},o.register=function(t,n){if(void 0===n&&(n=null),t){if(null===t.type)throw Error("Processor type is not defined");t.on("propsUpdated",this.processorPropsUpdated.bind(this)),this.addProcessorByPriority(t,n),this.afterRegistered(t)}},o.unregister=function(t){if(t){var n=this._steps.get(t.type);n&&n.length&&(this._steps.set(t.type,n.filter(function(n){return n!=t})),this.emit("updated",t))}},o.addProcessorByPriority=function(t,n){var e=this._steps.get(t.type);if(!e){var r=[];this._steps.set(t.type,r),e=r}if(null===n||n<0)e.push(t);else if(e[n]){var o=e.slice(0,n-1),i=e.slice(n+1);this._steps.set(t.type,o.concat(t).concat(i))}else e[n]=t},o.getStepsByType=function(t){return this.steps.filter(function(n){return n.type===t})},o.getSortedProcessorTypes=function(){return Object.keys(K).filter(function(t){return!isNaN(Number(t))}).map(function(t){return Number(t)})},o.process=function(t){try{var n=function(t){return e.lastProcessorIndexUpdated=o.length,e.emit("afterProcess",i),i},e=this,r=e.lastProcessorIndexUpdated,o=e.steps,i=t,u=function(t,n){try{var u=function(t,n,e){if("function"==typeof t[Qt]){var r,o,i,u=t[Qt]();if(function t(e){try{for(;!(r=u.next()).done;)if((e=n(r.value))&&e.then){if(!nn(e))return void e.then(t,i||(i=Yt.bind(null,o=new tn,2)));e=e.v}o?Yt(o,1,e):o=e}catch(t){Yt(o||(o=new tn),2,t)}}(),u.return){var s=function(t){try{r.done||u.return()}catch(t){}return t};if(o&&o.then)return o.then(s,function(t){throw s(t)});s()}return o}if(!("length"in t))throw new TypeError("Object is not iterable");for(var a=[],l=0;l<t.length;l++)a.push(t[l]);return function(t,n,e){var r,o,i=-1;return function e(u){try{for(;++i<t.length;)if((u=n(i))&&u.then){if(!nn(u))return void u.then(e,o||(o=Yt.bind(null,r=new tn,2)));u=u.v}r?Yt(r,1,u):r=u}catch(t){Yt(r||(r=new tn),2,t)}}(),r}(a,function(t){return n(a[t])})}(o,function(t){var n=e.findProcessorIndexByID(t.id),o=function(){if(n>=r)return Promise.resolve(t.process(i)).then(function(n){e.cache.set(t.id,i=n)});i=e.cache.get(t.id)}();if(o&&o.then)return o.then(function(){})})}catch(t){return n(t)}return u&&u.then?u.then(void 0,n):u}(0,function(t){throw zt.error(t),e.emit("error",i),t});return Promise.resolve(u&&u.then?u.then(n):n())}catch(t){return Promise.reject(t)}},o.findProcessorIndexByID=function(t){return this.steps.findIndex(function(n){return n.id==t})},o.setLastProcessorIndex=function(t){var n=this.findProcessorIndexByID(t.id);this.lastProcessorIndexUpdated>n&&(this.lastProcessorIndexUpdated=n)},o.processorPropsUpdated=function(t){this.setLastProcessorIndex(t),this.emit("propsUpdated"),this.emit("updated",t)},o.afterRegistered=function(t){this.setLastProcessorIndex(t),this.emit("afterRegister"),this.emit("updated",t)},n(e,[{key:"steps",get:function(){for(var t,n=[],e=s(this.getSortedProcessorTypes());!(t=e()).done;){var r=this._steps.get(t.value);r&&r.length&&(n=n.concat(r))}return n.filter(function(t){return t})}}]),e}(Q),rn=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}return r(e,t),e.prototype._process=function(t){try{return Promise.resolve(this.props.storage.get(t))}catch(t){return Promise.reject(t)}},n(e,[{key:"type",get:function(){return K.Extractor}}]),e}(Y),on=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}return r(e,t),e.prototype._process=function(t){var n=J.fromArray(t.data);return n.length=t.total,n},n(e,[{key:"type",get:function(){return K.Transformer}}]),e}(Y),un=/*#__PURE__*/function(t){function o(){return t.apply(this,arguments)||this}return r(o,t),o.prototype._process=function(){return Object.entries(this.props.serverStorageOptions).filter(function(t){return"function"!=typeof t[1]}).reduce(function(t,n){var r;return e({},t,((r={})[n[0]]=n[1],r))},{})},n(o,[{key:"type",get:function(){return K.Initiator}}]),o}(Y),sn=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}r(e,t);var o=e.prototype;return o.castData=function(t){if(!t||!t.length)return[];if(!this.props.header||!this.props.header.columns)return t;var n=Gt.leafColumns(this.props.header.columns);return t[0]instanceof Array?t.map(function(t){var e=0;return n.map(function(n,r){return void 0!==n.data?(e++,"function"==typeof n.data?n.data(t):n.data):t[r-e]})}):"object"!=typeof t[0]||t[0]instanceof Array?[]:t.map(function(t){return n.map(function(n,e){return void 0!==n.data?"function"==typeof n.data?n.data(t):n.data:n.id?t[n.id]:(zt.error("Could not find the correct cell for column at position "+e+".\n                          Make sure either 'id' or 'selector' is defined for all columns."),null)})})},o._process=function(t){return{data:this.castData(t.data),total:t.total}},n(e,[{key:"type",get:function(){return K.Transformer}}]),e}(Y),an=/*#__PURE__*/function(){function t(){}return t.createFromConfig=function(t){var n=new en;return t.storage instanceof Zt&&n.register(new un({serverStorageOptions:t.server})),n.register(new rn({storage:t.storage})),n.register(new sn({header:t.header})),n.register(new on),n},t}(),ln=function(t){var n=this;this.state=void 0,this.listeners=[],this.isDispatching=!1,this.getState=function(){return n.state},this.getListeners=function(){return n.listeners},this.dispatch=function(t){if("function"!=typeof t)throw new Error("Reducer is not a function");if(n.isDispatching)throw new Error("Reducers may not dispatch actions");n.isDispatching=!0;var e=n.state;try{n.state=t(n.state)}finally{n.isDispatching=!1}for(var r,o=s(n.listeners);!(r=o()).done;)(0,r.value)(n.state,e);return n.state},this.subscribe=function(t){if("function"!=typeof t)throw new Error("Listener is not a function");return n.listeners=[].concat(n.listeners,[t]),function(){return n.listeners=n.listeners.filter(function(n){return n!==t})}},this.state=t},cn=function(t,n){var e={__c:n="__cC"+_++,__:null,Consumer:function(t,n){return t.children(n)},Provider:function(t){var e,r;return this.getChildContext||(e=[],(r={})[n]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(t){this.props.value!==t.value&&e.some(E)},this.sub=function(t){e.push(t);var n=t.componentWillUnmount;t.componentWillUnmount=function(){e.splice(e.indexOf(t),1),n&&n.call(t)}}),t.children}};return e.Provider.__=e.Consumer.contextType=e}(),fn=/*#__PURE__*/function(){function t(){Object.assign(this,t.defaultConfig())}var n=t.prototype;return n.assign=function(t){return Object.assign(this,t)},n.update=function(n){return n?(this.assign(t.fromPartialConfig(e({},this,n))),this):this},t.defaultConfig=function(){return{store:new ln({status:a.Init,header:void 0,data:null}),plugin:new Vt,tableRef:{current:null},width:"100%",height:"auto",autoWidth:!0,style:{},className:{}}},t.fromPartialConfig=function(n){var e=(new t).assign(n);return"boolean"==typeof n.sort&&n.sort&&e.assign({sort:{multiColumn:!0}}),e.assign({header:Gt.createFromConfig(e)}),e.assign({storage:Jt.createFromConfig(e)}),e.assign({pipeline:an.createFromConfig(e)}),e.assign({translator:new Tt(e.language)}),e.search&&e.plugin.add({id:"search",position:qt.Header,component:Dt}),e.pagination&&e.plugin.add({id:"pagination",position:qt.Footer,component:Ot}),e.plugins&&e.plugins.forEach(function(t){return e.plugin.add(t)}),e},t}();function pn(t){var n,r=Et();return w("td",e({role:t.role,colSpan:t.colSpan,"data-column-id":t.column&&t.column.id,className:et(nt("td"),t.className,r.className.td),style:e({},t.style,r.style.td),onClick:function(n){t.messageCell||r.eventEmitter.emit("cellClick",n,t.cell,t.column,t.row)}},(n=t.column)?"function"==typeof n.attributes?n.attributes(t.cell.data,t.row,t.column):n.attributes:{}),t.column&&"function"==typeof t.column.formatter?t.column.formatter(t.cell.data,t.row,t.column):t.column&&t.column.plugin?w($t,{pluginId:t.column.id,props:{column:t.column,cell:t.cell,row:t.row}}):t.cell.data)}function dn(t){var n=Et(),e=jt(function(t){return t.header});return w("tr",{className:et(nt("tr"),n.className.tr),onClick:function(e){t.messageRow||n.eventEmitter.emit("rowClick",e,t.row)}},t.children?t.children:t.row.cells.map(function(n,r){var o=function(t){if(e){var n=Gt.leafColumns(e.columns);if(n)return n[t]}return null}(r);return o&&o.hidden?null:w(pn,{key:n.id,cell:n,row:t.row,column:o})}))}function hn(t){return w(dn,{messageRow:!0},w(pn,{role:"alert",colSpan:t.colSpan,messageCell:!0,cell:new X(t.message),className:et(nt("message"),t.className?t.className:null)}))}function _n(){var t=Et(),n=jt(function(t){return t.data}),e=jt(function(t){return t.status}),r=jt(function(t){return t.header}),o=Lt(),i=function(){return r?r.visibleColumns.length:0};return w("tbody",{className:et(nt("tbody"),t.className.tbody)},n&&n.rows.map(function(t){return w(dn,{key:t.id,row:t})}),e===a.Loading&&(!n||0===n.length)&&w(hn,{message:o("loading"),colSpan:i(),className:et(nt("loading"),t.className.loading)}),e===a.Rendered&&n&&0===n.length&&w(hn,{message:o("noRecordsFound"),colSpan:i(),className:et(nt("notfound"),t.className.notfound)}),e===a.Error&&w(hn,{message:o("error"),colSpan:i(),className:et(nt("error"),t.className.error)}))}var mn=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}r(e,t);var o=e.prototype;return o.validateProps=function(){for(var t,n=s(this.props.columns);!(t=n()).done;){var e=t.value;void 0===e.direction&&(e.direction=1),1!==e.direction&&-1!==e.direction&&zt.error("Invalid sort direction "+e.direction)}},o.compare=function(t,n){return t>n?1:t<n?-1:0},o.compareWrapper=function(t,n){for(var e,r=0,o=s(this.props.columns);!(e=o()).done;){var i=e.value;if(0!==r)break;var u=t.cells[i.index].data,a=n.cells[i.index].data;r|="function"==typeof i.compare?i.compare(u,a)*i.direction:this.compare(u,a)*i.direction}return r},o._process=function(t){var n=[].concat(t.rows);n.sort(this.compareWrapper.bind(this));var e=new J(n);return e.length=t.length,e},n(e,[{key:"type",get:function(){return K.Sort}}]),e}(Y),vn=function(t,n,r,o){return function(i){var u=i.sort?[].concat(i.sort.columns):[],s=u.length,a=u.find(function(n){return n.index===t}),l=!1,c=!1,f=!1,p=!1;if(void 0!==a?r?-1===a.direction?f=!0:p=!0:1===s?p=!0:s>1&&(c=!0,l=!0):0===s?l=!0:s>0&&!r?(l=!0,c=!0):s>0&&r&&(l=!0),c&&(u=[]),l)u.push({index:t,direction:n,compare:o});else if(p){var d=u.indexOf(a);u[d].direction=n}else if(f){var h=u.indexOf(a);u.splice(h,1)}return e({},i,{sort:{columns:u}})}},gn=function(t,n,r){return function(o){var i=(o.sort?[].concat(o.sort.columns):[]).find(function(n){return n.index===t});return e({},o,i?vn(t,1===i.direction?-1:1,n,r)(o):vn(t,1,n,r)(o))}},yn=/*#__PURE__*/function(t){function o(){return t.apply(this,arguments)||this}return r(o,t),o.prototype._process=function(t){var n={};return this.props.url&&(n.url=this.props.url(t.url,this.props.columns)),this.props.body&&(n.body=this.props.body(t.body,this.props.columns)),e({},t,n)},n(o,[{key:"type",get:function(){return K.ServerSort}}]),o}(Y);function bn(t){var n=Et(),r=Lt(),o=vt(0),i=o[0],u=o[1],s=vt(void 0),a=s[0],l=s[1],c=jt(function(t){return t.sort}),f=Ht().dispatch,p=n.sort;gt(function(){var t=d();t&&l(t)},[]),gt(function(){return n.pipeline.register(a),function(){return n.pipeline.unregister(a)}},[n,a]),gt(function(){if(c){var n=c.columns.find(function(n){return n.index===t.index});u(n?n.direction:0)}},[c]),gt(function(){a&&c&&a.setProps({columns:c.columns})},[c]);var d=function(){var t=K.Sort;return p&&"object"==typeof p.server&&(t=K.ServerSort),0===n.pipeline.getStepsByType(t).length?t===K.ServerSort?new yn(e({columns:c?c.columns:[]},p.server)):new mn({columns:c?c.columns:[]}):null};return w("button",{tabIndex:-1,"aria-label":r("sort.sort"+(1===i?"Desc":"Asc")),title:r("sort.sort"+(1===i?"Desc":"Asc")),className:et(nt("sort"),nt("sort",function(t){return 1===t?"asc":-1===t?"desc":"neutral"}(i)),n.className.sort),onClick:function(n){n.preventDefault(),n.stopPropagation(),f(gn(t.index,!0===n.shiftKey&&p.multiColumn,t.compare))}})}function wn(t){var n,e=function(t){return t instanceof MouseEvent?Math.floor(t.pageX):Math.floor(t.changedTouches[0].pageX)},r=function(r){r.stopPropagation();var u,s,a,l,c,f=parseInt(t.thRef.current.style.width,10)-e(r);u=function(t){return o(t,f)},void 0===(s=10)&&(s=100),n=function(){var t=[].slice.call(arguments);a?(clearTimeout(l),l=setTimeout(function(){Date.now()-c>=s&&(u.apply(void 0,t),c=Date.now())},Math.max(s-(Date.now()-c),0))):(u.apply(void 0,t),c=Date.now(),a=!0)},document.addEventListener("mouseup",i),document.addEventListener("touchend",i),document.addEventListener("mousemove",n),document.addEventListener("touchmove",n)},o=function(n,r){n.stopPropagation();var o=t.thRef.current;r+e(n)>=parseInt(o.style.minWidth,10)&&(o.style.width=r+e(n)+"px")},i=function t(e){e.stopPropagation(),document.removeEventListener("mouseup",t),document.removeEventListener("mousemove",n),document.removeEventListener("touchmove",n),document.removeEventListener("touchend",t)};return w("div",{className:et(nt("th"),nt("resizable")),onMouseDown:r,onTouchStart:r,onClick:function(t){return t.stopPropagation()}})}function xn(t){var n=Et(),r=yt(null),o=vt({}),i=o[0],u=o[1],s=Ht().dispatch;gt(function(){if(n.fixedHeader&&r.current){var t=r.current.offsetTop;"number"==typeof t&&u({top:t})}},[r]);var a,l=function(){return null!=t.column.sort},c=function(e){e.stopPropagation(),l()&&s(gn(t.index,!0===e.shiftKey&&n.sort.multiColumn,t.column.sort.compare))};return w("th",e({ref:r,"data-column-id":t.column&&t.column.id,className:et(nt("th"),l()?nt("th","sort"):null,n.fixedHeader?nt("th","fixed"):null,n.className.th),onClick:c,style:e({},n.style.th,{minWidth:t.column.minWidth,width:t.column.width},i,t.style),onKeyDown:function(t){l()&&13===t.which&&c(t)},rowSpan:t.rowSpan>1?t.rowSpan:void 0,colSpan:t.colSpan>1?t.colSpan:void 0},(a=t.column)?"function"==typeof a.attributes?a.attributes(null,null,t.column):a.attributes:{},l()?{tabIndex:0}:{}),w("div",{className:nt("th","content")},void 0!==t.column.name?t.column.name:void 0!==t.column.plugin?w($t,{pluginId:t.column.plugin.id,props:{column:t.column}}):null),l()&&w(bn,e({index:t.index},t.column.sort)),t.column.resizable&&t.index<n.header.visibleColumns.length-1&&w(wn,{column:t.column,thRef:r}))}function kn(){var t,n=Et(),e=jt(function(t){return t.header});return e?w("thead",{key:e.id,className:et(nt("thead"),n.className.thead)},(t=Gt.tabularFormat(e.columns)).map(function(n,r){return function(t,n,r){var o=Gt.leafColumns(e.columns);return w(dn,null,t.map(function(t){return t.hidden?null:function(t,n,e,r){var o=function(t,n,e){var r=Gt.maximumDepth(t),o=e-n;return{rowSpan:Math.floor(o-r-r/o),colSpan:t.columns&&t.columns.length||1}}(t,n,r);return w(xn,{column:t,index:e,colSpan:o.colSpan,rowSpan:o.rowSpan})}(t,n,o.indexOf(t),r)}))}(n,r,t.length)})):null}var Sn=function(t){return function(n){return e({},n,{header:t})}};function Nn(){var t=Et(),n=yt(null),r=Ht().dispatch;return gt(function(){n&&r(function(t){return function(n){return e({},n,{tableRef:t})}}(n))},[n]),w("table",{ref:n,role:"grid",className:et(nt("table"),t.className.table),style:e({},t.style.table,{height:t.height})},w(kn,null),w(_n,null))}function Cn(){var t=vt(!0),n=t[0],r=t[1],o=yt(null),i=Et();return gt(function(){0===o.current.children.length&&r(!1)},[o]),n?w("div",{ref:o,className:et(nt("head"),i.className.header),style:e({},i.style.header)},w($t,{position:qt.Header})):null}function Pn(){var t=yt(null),n=vt(!0),r=n[0],o=n[1],i=Et();return gt(function(){0===t.current.children.length&&o(!1)},[t]),r?w("div",{ref:t,className:et(nt("footer"),i.className.footer),style:e({},i.style.footer)},w($t,{position:qt.Footer})):null}function En(){var t=Et(),n=Ht().dispatch,r=jt(function(t){return t.status}),o=jt(function(t){return t.data}),i=jt(function(t){return t.tableRef}),u={current:null};gt(function(){return n(Sn(t.header)),s(),t.pipeline.on("updated",s),function(){return t.pipeline.off("updated",s)}},[]),gt(function(){t.header&&r===a.Loaded&&null!=o&&o.length&&n(Sn(t.header.adjustWidth(t,i,u)))},[o,t,u]);var s=function(){try{n(function(t){return e({},t,{status:a.Loading})});var r=function(r,o){try{var i=Promise.resolve(t.pipeline.process()).then(function(t){n(function(t){return function(n){return t?e({},n,{data:t,status:a.Loaded}):n}}(t)),setTimeout(function(){n(function(t){return t.status===a.Loaded?e({},t,{status:a.Rendered}):t})},0)})}catch(t){return o(t)}return i&&i.then?i.then(void 0,o):i}(0,function(t){zt.error(t),n(function(t){return e({},t,{data:null,status:a.Error})})});return Promise.resolve(r&&r.then?r.then(function(){}):void 0)}catch(t){return Promise.reject(t)}};return w("div",{role:"complementary",className:et("gridjs",nt("container"),r===a.Loading?nt("loading"):null,t.className.container),style:e({},t.style.container,{width:t.width})},r===a.Loading&&w("div",{className:nt("loading-bar")}),w(Cn,null),w("div",{className:nt("wrapper"),style:{height:t.height}},w(Nn,null)),w(Pn,null),w("div",{ref:u,id:"gridjs-temp",className:nt("temp")}))}var In=/*#__PURE__*/function(t){function n(n){var e;return(e=t.call(this)||this).config=void 0,e.plugin=void 0,e.config=(new fn).assign({instance:i(e),eventEmitter:i(e)}).update(n),e.plugin=e.config.plugin,e}r(n,t);var e=n.prototype;return e.updateConfig=function(t){return this.config.update(t),this},e.createElement=function(){return w(cn.Provider,{value:this.config,children:w(En,{})})},e.forceRender=function(){return this.config&&this.config.container||zt.error("Container is empty. Make sure you call render() before forceRender()",!0),this.destroy(),q(this.createElement(),this.config.container),this},e.destroy=function(){this.config.pipeline.clearCache(),q(null,this.config.container)},e.render=function(t){return t||zt.error("Container element cannot be null",!0),t.childNodes.length>0?(zt.error("The container element "+t+" is not empty. Make sure the container is empty and call render() again"),this):(this.config.container=t,q(this.createElement(),t),this)},n}(Q);
//# sourceMappingURL=gridjs.module.js.map


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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 	var __webpack_exports__ = __webpack_require__("./jsFE/roadmap.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=roadmap.js.map