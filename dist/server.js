require("source-map-support").install();
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/constants/StaticConstants.js":
/*!******************************************!*\
  !*** ./src/constants/StaticConstants.js ***!
  \******************************************/
/*! exports provided: NOT_FOUND_ERROR, PRODUCT_DATA_FETCH_ERROR, CATEGORY_DATA_FETCH_ERROR, PRODUCT_NOT_FOUND, PRODUCT_ID_INVALID, PRODUCT_ID_MISSING, CATEGORY_NOT_FOUND, CATEGORY_ID_INVALID, CATEGORY_ID_MISSING, USER_NOT_FOUND, USER_ID_INVALID, USER_ID_MISSING, UNABLE_TO_FETCH_PRODUCT_RESPONSE, UNABLE_TO_FETCH_PRODUCTS_RESPONSE, USER_DELETED_SUCCESSFULLY, PRODUCT_DELETED_SUCCESSFULLY, CATEGORY_DELETED_SUCCESSFULLY, ERROR_DELETING_USER, ERROR_DELETING_PRODUCT, ERROR_DELETING_CATEGORY, USER_ADDED_SUCCESSFULLY, PRODUCT_ADDED_SUCCESSFULLY, CATEGORY_ADDED_SUCCESSFULLY, ERROR_ADDING_USER, ERROR_ADDING_PRODUCT, ERROR_ADDING_CATEGORY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NOT_FOUND_ERROR\", function() { return NOT_FOUND_ERROR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PRODUCT_DATA_FETCH_ERROR\", function() { return PRODUCT_DATA_FETCH_ERROR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CATEGORY_DATA_FETCH_ERROR\", function() { return CATEGORY_DATA_FETCH_ERROR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PRODUCT_NOT_FOUND\", function() { return PRODUCT_NOT_FOUND; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PRODUCT_ID_INVALID\", function() { return PRODUCT_ID_INVALID; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PRODUCT_ID_MISSING\", function() { return PRODUCT_ID_MISSING; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CATEGORY_NOT_FOUND\", function() { return CATEGORY_NOT_FOUND; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CATEGORY_ID_INVALID\", function() { return CATEGORY_ID_INVALID; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CATEGORY_ID_MISSING\", function() { return CATEGORY_ID_MISSING; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"USER_NOT_FOUND\", function() { return USER_NOT_FOUND; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"USER_ID_INVALID\", function() { return USER_ID_INVALID; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"USER_ID_MISSING\", function() { return USER_ID_MISSING; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNABLE_TO_FETCH_PRODUCT_RESPONSE\", function() { return UNABLE_TO_FETCH_PRODUCT_RESPONSE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNABLE_TO_FETCH_PRODUCTS_RESPONSE\", function() { return UNABLE_TO_FETCH_PRODUCTS_RESPONSE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"USER_DELETED_SUCCESSFULLY\", function() { return USER_DELETED_SUCCESSFULLY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PRODUCT_DELETED_SUCCESSFULLY\", function() { return PRODUCT_DELETED_SUCCESSFULLY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CATEGORY_DELETED_SUCCESSFULLY\", function() { return CATEGORY_DELETED_SUCCESSFULLY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ERROR_DELETING_USER\", function() { return ERROR_DELETING_USER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ERROR_DELETING_PRODUCT\", function() { return ERROR_DELETING_PRODUCT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ERROR_DELETING_CATEGORY\", function() { return ERROR_DELETING_CATEGORY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"USER_ADDED_SUCCESSFULLY\", function() { return USER_ADDED_SUCCESSFULLY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PRODUCT_ADDED_SUCCESSFULLY\", function() { return PRODUCT_ADDED_SUCCESSFULLY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CATEGORY_ADDED_SUCCESSFULLY\", function() { return CATEGORY_ADDED_SUCCESSFULLY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ERROR_ADDING_USER\", function() { return ERROR_ADDING_USER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ERROR_ADDING_PRODUCT\", function() { return ERROR_ADDING_PRODUCT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ERROR_ADDING_CATEGORY\", function() { return ERROR_ADDING_CATEGORY; });\nvar NOT_FOUND_ERROR = 'Invalid Api call: Api not found';\nvar PRODUCT_DATA_FETCH_ERROR = 'Could not fetch Products data';\nvar CATEGORY_DATA_FETCH_ERROR = 'Could not fetch Category data';\nvar PRODUCT_NOT_FOUND = 'Product Id Missing';\nvar PRODUCT_ID_INVALID = 'Invalid Product Id Format';\nvar PRODUCT_ID_MISSING = 'Product Not Found';\nvar CATEGORY_NOT_FOUND = 'Category Id Missing';\nvar CATEGORY_ID_INVALID = 'Invalid Category Id Format';\nvar CATEGORY_ID_MISSING = 'Category Not Found';\nvar USER_NOT_FOUND = 'User Id Missing';\nvar USER_ID_INVALID = 'Invalid User Id Format';\nvar USER_ID_MISSING = 'User Not Found';\nvar UNABLE_TO_FETCH_PRODUCT_RESPONSE = 'Unable to fetch product Response';\nvar UNABLE_TO_FETCH_PRODUCTS_RESPONSE = 'Unable to fetch products Response';\nvar USER_DELETED_SUCCESSFULLY = 'User Deleted Successfully';\nvar PRODUCT_DELETED_SUCCESSFULLY = 'Product Deleted Successfully';\nvar CATEGORY_DELETED_SUCCESSFULLY = 'Category Deleted Successfully';\nvar ERROR_DELETING_USER = 'Error in deleting User';\nvar ERROR_DELETING_PRODUCT = 'Error in deleting Product';\nvar ERROR_DELETING_CATEGORY = 'Error in deleting Category';\nvar USER_ADDED_SUCCESSFULLY = 'User Deleted Successfully';\nvar PRODUCT_ADDED_SUCCESSFULLY = 'Product Deleted Successfully';\nvar CATEGORY_ADDED_SUCCESSFULLY = 'Category Deleted Successfully';\nvar ERROR_ADDING_USER = 'Error in adding User';\nvar ERROR_ADDING_PRODUCT = 'Error in adding User Product';\nvar ERROR_ADDING_CATEGORY = 'Error in adding User Category';\n\n//# sourceURL=webpack:///./src/constants/StaticConstants.js?");

/***/ }),

/***/ "./src/database/config.js":
/*!********************************!*\
  !*** ./src/database/config.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var dbName = 'inventory_management';\nvar mongoURI = \"mongodb+srv://micky007:micky007@inventorymanagement-2z5en.mongodb.net/\".concat(dbName, \"?retryWrites=true\");\nvar mongoPort = '27017';\nvar dbConfig = {\n  conStr: mongoURI,\n  mongoPort: mongoPort\n};\nmodule.exports = dbConfig;\n\n//# sourceURL=webpack:///./src/database/config.js?");

/***/ }),

/***/ "./src/database/index.js":
/*!*******************************!*\
  !*** ./src/database/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./src/database/config.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var _dbConfig$conStr = _config__WEBPACK_IMPORTED_MODULE_1___default.a.conStr,\n      conStr = _dbConfig$conStr === void 0 ? '' : _dbConfig$conStr;\n  mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(conStr, {\n    useNewUrlParser: true\n  });\n  mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection.on('connected', function () {\n    console.log(\"DB connection Successful\"); // eslint-disable-line\n  });\n  mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection.on('error', function (err) {\n    console.log('DB connection Failed..', err); // eslint-disable-line\n  });\n});\n\n//# sourceURL=webpack:///./src/database/index.js?");

/***/ }),

/***/ "./src/database/models/categories.model.js":
/*!*************************************************!*\
  !*** ./src/database/models/categories.model.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar categoriesSchema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  _id: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.SchemaTypes.ObjectId,\n  userId: String,\n  categoryId: String,\n  categoryName: String\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('categories', categoriesSchema, 'categories'));\n\n//# sourceURL=webpack:///./src/database/models/categories.model.js?");

/***/ }),

/***/ "./src/database/models/products.model.js":
/*!***********************************************!*\
  !*** ./src/database/models/products.model.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar productsSchema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  _id: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.SchemaTypes.ObjectId,\n  userId: String,\n  productId: String,\n  categoryId: String,\n  productName: String,\n  productDescription: String,\n  productUnitPrice: Number,\n  productQuantity: Number\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('products', productsSchema, 'products'));\n\n//# sourceURL=webpack:///./src/database/models/products.model.js?");

/***/ }),

/***/ "./src/database/models/users.model.js":
/*!********************************************!*\
  !*** ./src/database/models/users.model.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar usersSchema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  _id: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.SchemaTypes.ObjectId,\n  userId: String,\n  name: String,\n  gender: String,\n  age: Number,\n  email: String,\n  address: String\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('users', usersSchema, 'users'));\n\n//# sourceURL=webpack:///./src/database/models/users.model.js?");

/***/ }),

/***/ "./src/httpServer/config.js":
/*!**********************************!*\
  !*** ./src/httpServer/config.js ***!
  \**********************************/
/*! exports provided: port */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"port\", function() { return port; });\n// Skipping default export as we can have multiple caonfig variable later\n// eslint-disable-next-line import/prefer-default-export\nvar port = 3000;\n\n//# sourceURL=webpack:///./src/httpServer/config.js?");

/***/ }),

/***/ "./src/httpServer/index.js":
/*!*********************************!*\
  !*** ./src/httpServer/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./src/httpServer/config.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (app) {\n  var server = Object(http__WEBPACK_IMPORTED_MODULE_0__[\"createServer\"])(app);\n  server.listen(_config__WEBPACK_IMPORTED_MODULE_1__[\"port\"], function () {\n    console.log('Inventory Management Server Started on port: ', _config__WEBPACK_IMPORTED_MODULE_1__[\"port\"]); // eslint-disable-line\n  });\n});\n\n//# sourceURL=webpack:///./src/httpServer/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var express_robots_txt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express-robots-txt */ \"express-robots-txt\");\n/* harmony import */ var express_robots_txt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express_robots_txt__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./database */ \"./src/database/index.js\");\n/* harmony import */ var _middlewares_errorHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./middlewares/errorHandler */ \"./src/middlewares/errorHandler.js\");\n/* harmony import */ var _middlewares_notFoundError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./middlewares/notFoundError */ \"./src/middlewares/notFoundError.js\");\n/* harmony import */ var _httpServer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./httpServer */ \"./src/httpServer/index.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes */ \"./src/routes/index.js\");\n\n\n\n\n\n\n\n\n\n\nvar Users = _routes__WEBPACK_IMPORTED_MODULE_9__[\"default\"].Users,\n    Categories = _routes__WEBPACK_IMPORTED_MODULE_9__[\"default\"].Categories,\n    Products = _routes__WEBPACK_IMPORTED_MODULE_9__[\"default\"].Products,\n    Product = _routes__WEBPACK_IMPORTED_MODULE_9__[\"default\"].Product;\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nObject(_database__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\napp.use(morgan__WEBPACK_IMPORTED_MODULE_1___default()('dev'));\napp.use(cors__WEBPACK_IMPORTED_MODULE_2___default()());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.urlencoded({\n  extended: false\n}));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.json());\napp.use(express_robots_txt__WEBPACK_IMPORTED_MODULE_4___default()({\n  UserAgent: '*',\n  Disallow: '/'\n}));\napp.use('/users', Users);\napp.use('/categories', Categories);\napp.use('/product', Product);\napp.use('/products', Products);\napp.use(_middlewares_notFoundError__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\napp.use(_middlewares_errorHandler__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\nObject(_httpServer__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(app);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/middlewares/errorHandler.js":
/*!*****************************************!*\
  !*** ./src/middlewares/errorHandler.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (error, req, res, next) {\n  res.status(error.status || 500);\n  res.json({\n    message: error.message\n  });\n  next();\n});\n\n//# sourceURL=webpack:///./src/middlewares/errorHandler.js?");

/***/ }),

/***/ "./src/middlewares/notFoundError.js":
/*!******************************************!*\
  !*** ./src/middlewares/notFoundError.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities */ \"./src/utilities.js\");\n/* harmony import */ var _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/StaticConstants */ \"./src/constants/StaticConstants.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (req, res, next) {\n  next(Object(_utilities__WEBPACK_IMPORTED_MODULE_0__[\"createError\"])(404, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_1__[\"NOT_FOUND_ERROR\"]));\n});\n\n//# sourceURL=webpack:///./src/middlewares/notFoundError.js?");

/***/ }),

/***/ "./src/routes/categories.js":
/*!**********************************!*\
  !*** ./src/routes/categories.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uniqid */ \"uniqid\");\n/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _database_models_categories_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../database/models/categories.model */ \"./src/database/models/categories.model.js\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities */ \"./src/utilities.js\");\n/* harmony import */ var _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/StaticConstants */ \"./src/constants/StaticConstants.js\");\n\n\n\n\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.get('/:userId?', function (req, res, next) {\n  var _req$params = req.params;\n  _req$params = _req$params === void 0 ? {} : _req$params;\n  var _req$params$userId = _req$params.userId,\n      userId = _req$params$userId === void 0 ? -1 : _req$params$userId;\n\n  if (userId === -1) {\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[\"createError\"])(400, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__[\"USER_ID_MISSING\"]));\n  }\n\n  _database_models_categories_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"].find({\n    userId: userId\n  }, {\n    _id: 0\n  }).exec().then(function (response) {\n    if (response) res.status(200).json(response);else next(Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[\"createError\"])(200, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__[\"USER_NOT_FOUND\"]));\n  })[\"catch\"](function () {\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[\"createError\"])(400, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__[\"USER_ID_INVALID\"]));\n  });\n});\nrouter.post('/delete', function (req, res, next) {\n  var _req$body = req.body,\n      _req$body$userId = _req$body.userId,\n      userId = _req$body$userId === void 0 ? '' : _req$body$userId,\n      _req$body$categoryId = _req$body.categoryId,\n      categoryId = _req$body$categoryId === void 0 ? '' : _req$body$categoryId;\n  _database_models_categories_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"].deleteOne({\n    userId: userId,\n    categoryId: categoryId\n  }, function () {\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[\"createError\"])(400, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__[\"ERROR_DELETING_CATEGORY\"]));\n    return null;\n  });\n  next(Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[\"createError\"])(200, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__[\"CATEGORY_DELETED_SUCCESSFULLY\"]));\n});\nrouter.post('/add', function (req, res, next) {\n  var _req$body2 = req.body,\n      _req$body2$userId = _req$body2.userId,\n      userId = _req$body2$userId === void 0 ? -1 : _req$body2$userId,\n      _req$body2$categoryNa = _req$body2.categoryName,\n      categoryName = _req$body2$categoryNa === void 0 ? '' : _req$body2$categoryNa;\n  var newCategory = new _database_models_categories_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n    _id: new mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.Types.ObjectId(),\n    categoryId: uniqid__WEBPACK_IMPORTED_MODULE_2___default.a.time(),\n    userId: userId,\n    categoryName: categoryName\n  });\n  newCategory.save().then(function (response) {\n    if (response) res.status(200).json(response);else next(Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[\"createError\"])(200, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__[\"CATEGORY_ADDED_SUCCESSFULLY\"]));\n  })[\"catch\"](function () {\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[\"createError\"])(400, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__[\"ERROR_ADDING_CATEGORY\"]));\n  });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/routes/categories.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users */ \"./src/routes/users.js\");\n/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories */ \"./src/routes/categories.js\");\n/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products */ \"./src/routes/products.js\");\n/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product */ \"./src/routes/product.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  Users: _users__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  Categories: _categories__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  Products: _products__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  Product: _product__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/routes/index.js?");

/***/ }),

/***/ "./src/routes/product.js":
/*!*******************************!*\
  !*** ./src/routes/product.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uniqid */ \"uniqid\");\n/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _database_models_products_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../database/models/products.model */ \"./src/database/models/products.model.js\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities */ \"./src/utilities.js\");\n/* harmony import */ var _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/StaticConstants */ \"./src/constants/StaticConstants.js\");\n\n\n\n\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.get('/:userId?/:categoryId?/:productId?', function (req, res, next) {\n  var _req$params = req.params;\n  _req$params = _req$params === void 0 ? {} : _req$params;\n  var _req$params$userId = _req$params.userId,\n      userId = _req$params$userId === void 0 ? -1 : _req$params$userId,\n      _req$params$categoryI = _req$params.categoryId,\n      categoryId = _req$params$categoryI === void 0 ? -1 : _req$params$categoryI,\n      _req$params$productId = _req$params.productId,\n      productId = _req$params$productId === void 0 ? -1 : _req$params$productId;\n\n  if (userId === -1) {\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[\"createError\"])(400, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__[\"USER_ID_MISSING\"]));\n    return;\n  }\n\n  if (categoryId === -1) {\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[\"createError\"])(400, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__[\"CATEGORY_ID_MISSING\"]));\n    return;\n  }\n\n  if (productId === -1) {\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[\"createError\"])(400, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__[\"PRODUCT_ID_MISSING\"]));\n    return;\n  }\n\n  _database_models_products_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"].find({\n    userId: userId,\n    categoryId: categoryId,\n    productId: productId\n  }, {\n    _id: 0\n  }).exec().then(function (response) {\n    if (response) res.status(200).json(response);else next(Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[\"createError\"])(200, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__[\"PRODUCT_NOT_FOUND\"]));\n  })[\"catch\"](function () {\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[\"createError\"])(400, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__[\"UNABLE_TO_FETCH_PRODUCT_RESPONSE\"]));\n  });\n});\nrouter.post('/delete', function (req, res, next) {\n  var _req$body = req.body,\n      _req$body$userId = _req$body.userId,\n      userId = _req$body$userId === void 0 ? -1 : _req$body$userId,\n      _req$body$categoryId = _req$body.categoryId,\n      categoryId = _req$body$categoryId === void 0 ? -1 : _req$body$categoryId,\n      _req$body$productId = _req$body.productId,\n      productId = _req$body$productId === void 0 ? -1 : _req$body$productId;\n  _database_models_products_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"].deleteOne({\n    userId: userId,\n    categoryId: categoryId,\n    productId: productId\n  }, function () {\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[\"createError\"])(400, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__[\"ERROR_DELETING_PRODUCT\"]));\n    return null;\n  });\n  next(Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[\"createError\"])(200, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__[\"PRODUCT_DELETED_SUCCESSFULLY\"]));\n});\nrouter.post('/add', function (req, res, next) {\n  var _req$body2 = req.body,\n      _req$body2$userId = _req$body2.userId,\n      userId = _req$body2$userId === void 0 ? -1 : _req$body2$userId,\n      _req$body2$categoryId = _req$body2.categoryId,\n      categoryId = _req$body2$categoryId === void 0 ? -1 : _req$body2$categoryId,\n      _req$body2$productNam = _req$body2.productName,\n      productName = _req$body2$productNam === void 0 ? '' : _req$body2$productNam,\n      _req$body2$productDes = _req$body2.productDescription,\n      productDescription = _req$body2$productDes === void 0 ? '' : _req$body2$productDes,\n      _req$body2$productUni = _req$body2.productUnitPrice,\n      productUnitPrice = _req$body2$productUni === void 0 ? 0 : _req$body2$productUni,\n      _req$body2$productQua = _req$body2.productQuantity,\n      productQuantity = _req$body2$productQua === void 0 ? 0 : _req$body2$productQua;\n  var newProduct = new _database_models_products_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n    _id: new mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.Types.ObjectId(),\n    productId: uniqid__WEBPACK_IMPORTED_MODULE_2___default.a.time(),\n    userId: userId,\n    categoryId: categoryId,\n    productName: productName,\n    productDescription: productDescription,\n    productUnitPrice: productUnitPrice,\n    productQuantity: productQuantity\n  });\n  newProduct.save().then(function (response) {\n    if (response) res.status(200).json(response);else next(Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[\"createError\"])(200, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__[\"PRODUCT_ADDED_SUCCESSFULLY\"]));\n  })[\"catch\"](function () {\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[\"createError\"])(400, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__[\"ERROR_ADDING_PRODUCT\"]));\n  });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/routes/product.js?");

/***/ }),

/***/ "./src/routes/products.js":
/*!********************************!*\
  !*** ./src/routes/products.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _database_models_products_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../database/models/products.model */ \"./src/database/models/products.model.js\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities */ \"./src/utilities.js\");\n/* harmony import */ var _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/StaticConstants */ \"./src/constants/StaticConstants.js\");\n\n\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.get('/:userId?/:categoryId?', function (req, res, next) {\n  var _req$params = req.params;\n  _req$params = _req$params === void 0 ? {} : _req$params;\n  var _req$params$categoryI = _req$params.categoryId,\n      categoryId = _req$params$categoryI === void 0 ? -1 : _req$params$categoryI,\n      _req$params$userId = _req$params.userId,\n      userId = _req$params$userId === void 0 ? -1 : _req$params$userId;\n\n  if (userId === -1) {\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_2__[\"createError\"])(400, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_3__[\"USER_ID_MISSING\"]));\n    return;\n  }\n\n  if (categoryId === -1) {\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_2__[\"createError\"])(400, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_3__[\"CATEGORY_ID_MISSING\"]));\n    return;\n  }\n\n  _database_models_products_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({\n    userId: userId,\n    categoryId: categoryId\n  }, {\n    _id: 0\n  }).exec().then(function (response) {\n    if (response) res.status(200).json(response);else next(Object(_utilities__WEBPACK_IMPORTED_MODULE_2__[\"createError\"])(200, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_3__[\"PRODUCT_NOT_FOUND\"]));\n  })[\"catch\"](function () {\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_2__[\"createError\"])(400, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_3__[\"UNABLE_TO_FETCH_PRODUCTS_RESPONSE\"]));\n  });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/routes/products.js?");

/***/ }),

/***/ "./src/routes/users.js":
/*!*****************************!*\
  !*** ./src/routes/users.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uniqid */ \"uniqid\");\n/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _database_models_users_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../database/models/users.model */ \"./src/database/models/users.model.js\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities */ \"./src/utilities.js\");\n/* harmony import */ var _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/StaticConstants */ \"./src/constants/StaticConstants.js\");\n\n\n\n\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.get('/', function (req, res, next) {\n  _database_models_users_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"].find({}, {\n    _id: 0\n  }).exec().then(function (response) {\n    if (response) res.status(200).json(response);else next(Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[\"createError\"])(200, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__[\"USER_NOT_FOUND\"]));\n  })[\"catch\"](function () {\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[\"createError\"])(400, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__[\"USER_ID_INVALID\"]));\n  });\n});\nrouter.post('/delete', function (req, res, next) {\n  var _req$body$userId = req.body.userId,\n      userId = _req$body$userId === void 0 ? -1 : _req$body$userId;\n  _database_models_users_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"].deleteOne({\n    userId: userId\n  }, function () {\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[\"createError\"])(400, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__[\"ERROR_DELETING_USER\"]));\n    return null;\n  });\n  next(Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[\"createError\"])(200, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__[\"USER_DELETED_SUCCESSFULLY\"]));\n});\nrouter.post('/add', function (req, res, next) {\n  var _req$body = req.body,\n      _req$body$name = _req$body.name,\n      name = _req$body$name === void 0 ? '' : _req$body$name,\n      _req$body$gender = _req$body.gender,\n      gender = _req$body$gender === void 0 ? '' : _req$body$gender,\n      _req$body$age = _req$body.age,\n      age = _req$body$age === void 0 ? 0 : _req$body$age,\n      _req$body$email = _req$body.email,\n      email = _req$body$email === void 0 ? '' : _req$body$email,\n      _req$body$address = _req$body.address,\n      address = _req$body$address === void 0 ? '' : _req$body$address;\n  var newUser = new _database_models_users_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n    _id: new mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.Types.ObjectId(),\n    userId: uniqid__WEBPACK_IMPORTED_MODULE_2___default.a.time(),\n    name: name,\n    gender: gender,\n    age: age,\n    email: email,\n    address: address\n  });\n  newUser.save().then(function (response) {\n    if (response) res.status(200).json(response);else next(Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[\"createError\"])(200, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__[\"USER_ADDED_SUCCESSFULLY\"]));\n  })[\"catch\"](function () {\n    next(Object(_utilities__WEBPACK_IMPORTED_MODULE_4__[\"createError\"])(400, _constants_StaticConstants__WEBPACK_IMPORTED_MODULE_5__[\"ERROR_ADDING_USER\"]));\n  });\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/routes/users.js?");

/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/*! exports provided: createError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createError\", function() { return createError; });\n// skipping default export as we can have multiple utility function later\n// eslint-disable-next-line import/prefer-default-export\nvar createError = function createError(status, errMsg) {\n  var error = new Error(errMsg);\n  error.status = status;\n  return error;\n};\n\n//# sourceURL=webpack:///./src/utilities.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-robots-txt":
/*!*************************************!*\
  !*** external "express-robots-txt" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-robots-txt\");\n\n//# sourceURL=webpack:///external_%22express-robots-txt%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "uniqid":
/*!*************************!*\
  !*** external "uniqid" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uniqid\");\n\n//# sourceURL=webpack:///external_%22uniqid%22?");

/***/ })

/******/ });