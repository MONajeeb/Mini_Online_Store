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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var E_ITI_Graduation_Project_NEXTJS_grocery_store_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var E_ITI_Graduation_Project_NEXTJS_grocery_store_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_ITI_Graduation_Project_NEXTJS_grocery_store_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _data_products_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/products.json */ \"./data/products.json\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSP = true;\nfunction Home(param) {\n    var products = param.products;\n    var _this = this;\n    _s();\n    // const products = productdata;\n    var AddToTrolly = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(function() {\n        var _ref = _asyncToGenerator(E_ITI_Graduation_Project_NEXTJS_grocery_store_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e, productId) {\n            var response, cartItems;\n            return E_ITI_Graduation_Project_NEXTJS_grocery_store_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.stopPropagation();\n                        _ctx.next = 3;\n                        return fetch(\"/api/cart/\".concat(productId), {\n                            method: \"POST\"\n                        });\n                    case 3:\n                        response = _ctx.sent;\n                        _ctx.next = 6;\n                        return response.json();\n                    case 6:\n                        cartItems = _ctx.sent;\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function(e, productId) {\n            return _ref.apply(this, arguments);\n        };\n    }(), []);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var viewProductDetails = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(function(productid) {\n        router.push(\"/product/\".concat(productid));\n    }, [\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"bg-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                    className: \"text-2xl font-extrabold tracking-tight text-gray-900\",\n                    children: \"Customers also purchased\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8\",\n                    children: products.map(function(product) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"group relative\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    onClick: function() {\n                                        return viewProductDetails(product.id);\n                                    },\n                                    className: \"group relative\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            className: \"w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                                src: product.imageSrc,\n                                                alt: product.imageAlt,\n                                                className: \"w-full h-full object-center object-cover lg:w-full lg:h-full\"\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                                lineNumber: 41,\n                                                columnNumber: 19\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                            lineNumber: 40,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            className: \"mt-4 flex justify-between\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                                            className: \"text-sm text-gray-700\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                                                children: [\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                                                        \"aria-hidden\": \"true\",\n                                                                        className: \"absolute inset-0\"\n                                                                    }, void 0, false, {\n                                                                        fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                                                        lineNumber: 51,\n                                                                        columnNumber: 25\n                                                                    }, _this),\n                                                                    product.name\n                                                                ]\n                                                            }, void 0, true, {\n                                                                fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                                                lineNumber: 50,\n                                                                columnNumber: 23\n                                                            }, _this)\n                                                        }, void 0, false, {\n                                                            fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                                            lineNumber: 49,\n                                                            columnNumber: 21\n                                                        }, _this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                                            className: \"mt-1 text-sm text-gray-500\",\n                                                            children: product.color\n                                                        }, void 0, false, {\n                                                            fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                                            lineNumber: 55,\n                                                            columnNumber: 21\n                                                        }, _this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                                    lineNumber: 48,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                                    className: \"text-sm font-medium text-gray-900\",\n                                                    children: product.price\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                                    lineNumber: 59,\n                                                    columnNumber: 19\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, product.id, true, {\n                                    fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    onClick: function(event) {\n                                        return AddToTrolly(event, product.id);\n                                    },\n                                    className: \"flex ml-auto texeWhite bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded\",\n                                    children: \"Add to cart\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"+jX9a9EVr6a1PVigPUwH8maZWZ0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S2xDLFdBQVcsQ0FBQ2tDLEtBQUssRUFBRWpCLE9BQU8sQ0FBQ0UsRUFBRSxDQUFDO3FDQUFBO29DQUNsREwsU0FBUyxFQUFDLGtHQUFrRzs4Q0FDN0csYUFFRDs7Ozs7eUNBQVM7Ozs7OztpQ0FDTDtxQkFDUCxDQUFDOzs7Ozt3QkFDRTs7Ozs7O2dCQUNGOzs7OztZQUNGLENBQ047Q0FDSDtHQW5FdUJoQixJQUFJOztRQVNYRixrREFBUzs7O0FBVEZFLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBwcm9kdWN0ZGF0YSBmcm9tIFwiLi4vZGF0YS9wcm9kdWN0cy5qc29uXCI7XG5pbXBvcnQgeyBnZXRBbGxQcm9kdWN0cyB9IGZyb20gXCIuLi9saWIvcHJvZHVjdFN0b3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHByb2R1Y3RzIH0pIHtcbiAgLy8gY29uc3QgcHJvZHVjdHMgPSBwcm9kdWN0ZGF0YTtcbiAgY29uc3QgQWRkVG9Ucm9sbHkgPSB1c2VDYWxsYmFjayhhc3luYyAoZSwgcHJvZHVjdElkKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL2NhcnQvJHtwcm9kdWN0SWR9YCwgeyBtZXRob2Q6IFwiUE9TVFwiIH0pO1xuXG4gICAgY29uc3QgY2FydEl0ZW1zPWF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB2aWV3UHJvZHVjdERldGFpbHMgPSB1c2VDYWxsYmFjayhcbiAgICAocHJvZHVjdGlkKSA9PiB7XG4gICAgICByb3V0ZXIucHVzaChgL3Byb2R1Y3QvJHtwcm9kdWN0aWR9YCk7XG4gICAgfSxcbiAgICBbcm91dGVyXVxuICApO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctMnhsIG14LWF1dG8gcHktMTYgcHgtNCBzbTpweS0yNCBzbTpweC02IGxnOm1heC13LTd4bCBsZzpweC04XCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWV4dHJhYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgQ3VzdG9tZXJzIGFsc28gcHVyY2hhc2VkXG4gICAgICAgIDwvaDI+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02IGdyaWQgZ3JpZC1jb2xzLTEgZ2FwLXktMTAgZ2FwLXgtNiBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtNCB4bDpnYXAteC04XCI+XG4gICAgICAgICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cCByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXtwcm9kdWN0LmlkfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHZpZXdQcm9kdWN0RGV0YWlscyhwcm9kdWN0LmlkKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncm91cCByZWxhdGl2ZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtaW4taC04MCBiZy1ncmF5LTIwMCBhc3BlY3Qtdy0xIGFzcGVjdC1oLTEgcm91bmRlZC1tZCBvdmVyZmxvdy1oaWRkZW4gZ3JvdXAtaG92ZXI6b3BhY2l0eS03NSBsZzpoLTgwIGxnOmFzcGVjdC1ub25lXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cHJvZHVjdC5pbWFnZVNyY31cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtwcm9kdWN0LmltYWdlQWx0fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jZW50ZXIgb2JqZWN0LWNvdmVyIGxnOnctZnVsbCBsZzpoLWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS03MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTEgdGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QuY29sb3J9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LnByaWNlfVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gQWRkVG9Ucm9sbHkoZXZlbnQsIHByb2R1Y3QuaWQpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggbWwtYXV0byB0ZXhlV2hpdGUgYmctcmVkLTUwMCBib3JkZXItMCBweS0yIHB4LTYgZm9jdXM6b3V0bGluZS1ub25lIGhvdmVyOmJnLXJlZC02MDAgcm91bmRlZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBBZGQgdG8gY2FydFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG4vLy8gU1NSXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGdldEFsbFByb2R1Y3RzKCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgcHJvZHVjdHMgfSxcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwic3R5bGVzIiwicHJvZHVjdGRhdGEiLCJSb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VDYWxsYmFjayIsIkhvbWUiLCJwcm9kdWN0cyIsIkFkZFRvVHJvbGx5IiwiZSIsInByb2R1Y3RJZCIsInJlc3BvbnNlIiwiY2FydEl0ZW1zIiwic3RvcFByb3BhZ2F0aW9uIiwiZmV0Y2giLCJtZXRob2QiLCJqc29uIiwicm91dGVyIiwidmlld1Byb2R1Y3REZXRhaWxzIiwicHJvZHVjdGlkIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwibWFwIiwicHJvZHVjdCIsIm9uQ2xpY2siLCJpZCIsImltZyIsInNyYyIsImltYWdlU3JjIiwiYWx0IiwiaW1hZ2VBbHQiLCJoMyIsImEiLCJzcGFuIiwiYXJpYS1oaWRkZW4iLCJuYW1lIiwicCIsImNvbG9yIiwicHJpY2UiLCJidXR0b24iLCJldmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});