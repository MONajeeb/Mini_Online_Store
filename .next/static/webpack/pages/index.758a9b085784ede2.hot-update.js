"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var E_ITI_Graduation_Project_NEXTJS_grocery_store_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var E_ITI_Graduation_Project_NEXTJS_grocery_store_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_ITI_Graduation_Project_NEXTJS_grocery_store_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _data_products_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/products.json */ \"./data/products.json\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSP = true;\nfunction Home(param) {\n    var products = param.products;\n    var _this = this;\n    _s();\n    // const products = productdata;\n    var AddToTrolly = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(function() {\n        var _ref = _asyncToGenerator(E_ITI_Graduation_Project_NEXTJS_grocery_store_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e, productId) {\n            var response;\n            return E_ITI_Graduation_Project_NEXTJS_grocery_store_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return fetch(\"/api/cart/\".concat(productId), {\n                            method: \"POST\"\n                        });\n                    case 2:\n                        response = _ctx.sent;\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function(e, productId) {\n            return _ref.apply(this, arguments);\n        };\n    }(), []);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var viewProductDetails = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(function(productid) {\n        router.push(\"/product/\".concat(productid));\n    }, [\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"bg-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                    className: \"text-2xl font-extrabold tracking-tight text-gray-900\",\n                    children: \"Customers also purchased\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8\",\n                    children: products.map(function(product) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"group relative\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    onClick: function() {\n                                        return viewProductDetails(product.id);\n                                    },\n                                    className: \"group relative\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            className: \"w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                                src: product.imageSrc,\n                                                alt: product.imageAlt,\n                                                className: \"w-full h-full object-center object-cover lg:w-full lg:h-full\"\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                                lineNumber: 40,\n                                                columnNumber: 19\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                            lineNumber: 39,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            className: \"mt-4 flex justify-between\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                                            className: \"text-sm text-gray-700\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                                                children: [\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                                                        \"aria-hidden\": \"true\",\n                                                                        className: \"absolute inset-0\"\n                                                                    }, void 0, false, {\n                                                                        fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                                                        lineNumber: 50,\n                                                                        columnNumber: 25\n                                                                    }, _this),\n                                                                    product.name\n                                                                ]\n                                                            }, void 0, true, {\n                                                                fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                                                lineNumber: 49,\n                                                                columnNumber: 23\n                                                            }, _this)\n                                                        }, void 0, false, {\n                                                            fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                                            lineNumber: 48,\n                                                            columnNumber: 21\n                                                        }, _this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                                            className: \"mt-1 text-sm text-gray-500\",\n                                                            children: product.color\n                                                        }, void 0, false, {\n                                                            fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                                            lineNumber: 54,\n                                                            columnNumber: 21\n                                                        }, _this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                                    lineNumber: 47,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                                    className: \"text-sm font-medium text-gray-900\",\n                                                    children: product.price\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 19\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                            lineNumber: 46,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, product.id, true, {\n                                    fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    onClick: function(event) {\n                                        return AddToTrolly(event, product.id);\n                                    },\n                                    className: \"flex ml-auto texeWhite bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded\",\n                                    children: \"Add to cart\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"+jX9a9EVr6a1PVigPUwH8maZWZ0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O3lDQUFTOzs7Ozs7aUNBQ0w7cUJBQ1AsQ0FBQzs7Ozs7d0JBQ0U7Ozs7OztnQkFDRjs7Ozs7WUFDRixDQUNOO0NBQ0g7R0FsRXVCYixJQUFJOztRQVFYRixrREFBUzs7O0FBUkZFLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBwcm9kdWN0ZGF0YSBmcm9tIFwiLi4vZGF0YS9wcm9kdWN0cy5qc29uXCI7XG5pbXBvcnQgeyBnZXRBbGxQcm9kdWN0cyB9IGZyb20gXCIuLi9saWIvcHJvZHVjdFN0b3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHByb2R1Y3RzIH0pIHtcbiAgLy8gY29uc3QgcHJvZHVjdHMgPSBwcm9kdWN0ZGF0YTtcbiAgY29uc3QgQWRkVG9Ucm9sbHkgPSB1c2VDYWxsYmFjayhhc3luYyAoZSwgcHJvZHVjdElkKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9jYXJ0LyR7cHJvZHVjdElkfWAsIHsgbWV0aG9kOiBcIlBPU1RcIiB9KTtcblxuICAgIFxuICB9LCBbXSk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHZpZXdQcm9kdWN0RGV0YWlscyA9IHVzZUNhbGxiYWNrKFxuICAgIChwcm9kdWN0aWQpID0+IHtcbiAgICAgIHJvdXRlci5wdXNoKGAvcHJvZHVjdC8ke3Byb2R1Y3RpZH1gKTtcbiAgICB9LFxuICAgIFtyb3V0ZXJdXG4gICk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy0yeGwgbXgtYXV0byBweS0xNiBweC00IHNtOnB5LTI0IHNtOnB4LTYgbGc6bWF4LXctN3hsIGxnOnB4LThcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtZXh0cmFib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICBDdXN0b21lcnMgYWxzbyBwdXJjaGFzZWRcbiAgICAgICAgPC9oMj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgZ3JpZCBncmlkLWNvbHMtMSBnYXAteS0xMCBnYXAteC02IHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy00IHhsOmdhcC14LThcIj5cbiAgICAgICAgICB7cHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3QuaWR9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdmlld1Byb2R1Y3REZXRhaWxzKHByb2R1Y3QuaWQpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIHJlbGF0aXZlXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1pbi1oLTgwIGJnLWdyYXktMjAwIGFzcGVjdC13LTEgYXNwZWN0LWgtMSByb3VuZGVkLW1kIG92ZXJmbG93LWhpZGRlbiBncm91cC1ob3ZlcjpvcGFjaXR5LTc1IGxnOmgtODAgbGc6YXNwZWN0LW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9kdWN0LmltYWdlU3JjfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9e3Byb2R1Y3QuaW1hZ2VBbHR9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNlbnRlciBvYmplY3QtY292ZXIgbGc6dy1mdWxsIGxnOmgtZnVsbFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMSB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5jb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QucHJpY2V9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiBBZGRUb1Ryb2xseShldmVudCwgcHJvZHVjdC5pZCl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBtbC1hdXRvIHRleGVXaGl0ZSBiZy1yZWQtNTAwIGJvcmRlci0wIHB5LTIgcHgtNiBmb2N1czpvdXRsaW5lLW5vbmUgaG92ZXI6YmctcmVkLTYwMCByb3VuZGVkXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEFkZCB0byBjYXJ0XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbi8vLyBTU1JcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgZ2V0QWxsUHJvZHVjdHMoKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBwcm9kdWN0cyB9LFxuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJzdHlsZXMiLCJwcm9kdWN0ZGF0YSIsIlJvdXRlciIsInVzZVJvdXRlciIsInVzZUNhbGxiYWNrIiwiSG9tZSIsInByb2R1Y3RzIiwiQWRkVG9Ucm9sbHkiLCJlIiwicHJvZHVjdElkIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsInJvdXRlciIsInZpZXdQcm9kdWN0RGV0YWlscyIsInByb2R1Y3RpZCIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsIm1hcCIsInByb2R1Y3QiLCJvbkNsaWNrIiwiaWQiLCJpbWciLCJzcmMiLCJpbWFnZVNyYyIsImFsdCIsImltYWdlQWx0IiwiaDMiLCJhIiwic3BhbiIsImFyaWEtaGlkZGVuIiwibmFtZSIsInAiLCJjb2xvciIsInByaWNlIiwiYnV0dG9uIiwiZXZlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});