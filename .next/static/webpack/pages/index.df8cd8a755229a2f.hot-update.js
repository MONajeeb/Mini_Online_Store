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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var E_ITI_Graduation_Project_NEXTJS_grocery_store_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var E_ITI_Graduation_Project_NEXTJS_grocery_store_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_ITI_Graduation_Project_NEXTJS_grocery_store_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _data_products_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/products.json */ \"./data/products.json\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSP = true;\nfunction Home(param) {\n    var products = param.products;\n    var _this = this;\n    _s();\n    // const products = productdata;\n    var AddToTrolly = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(function() {\n        var _ref = _asyncToGenerator(E_ITI_Graduation_Project_NEXTJS_grocery_store_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e, productId) {\n            var response;\n            return E_ITI_Graduation_Project_NEXTJS_grocery_store_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return fetch(\"/api/cart/\".concat(productId), {\n                            method: \"POST\"\n                        });\n                    case 2:\n                        response = _ctx.sent;\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function(e, productId) {\n            return _ref.apply(this, arguments);\n        };\n    }(), []);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var viewProductDetails = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(function(productid) {\n        router.push(\"/product/\".concat(productid));\n    }, [\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"bg-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                    className: \"text-2xl font-extrabold tracking-tight text-gray-900\",\n                    children: \"Customers also purchased\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8\",\n                    children: products.map(function(product) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"group relative\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    onClick: function() {\n                                        return viewProductDetails(product.id);\n                                    },\n                                    className: \"group relative\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            className: \"w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                                src: product.imageSrc,\n                                                alt: product.imageAlt,\n                                                className: \"w-full h-full object-center object-cover lg:w-full lg:h-full\"\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                                lineNumber: 39,\n                                                columnNumber: 19\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                            lineNumber: 38,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            className: \"mt-4 flex justify-between\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                                            className: \"text-sm text-gray-700\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                                                children: [\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                                                        \"aria-hidden\": \"true\",\n                                                                        className: \"absolute inset-0\"\n                                                                    }, void 0, false, {\n                                                                        fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                                                        lineNumber: 49,\n                                                                        columnNumber: 25\n                                                                    }, _this),\n                                                                    product.name\n                                                                ]\n                                                            }, void 0, true, {\n                                                                fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                                                lineNumber: 48,\n                                                                columnNumber: 23\n                                                            }, _this)\n                                                        }, void 0, false, {\n                                                            fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                                            lineNumber: 47,\n                                                            columnNumber: 21\n                                                        }, _this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                                            className: \"mt-1 text-sm text-gray-500\",\n                                                            children: product.color\n                                                        }, void 0, false, {\n                                                            fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                                            lineNumber: 53,\n                                                            columnNumber: 21\n                                                        }, _this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                                    lineNumber: 46,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                                    className: \"text-sm font-medium text-gray-900\",\n                                                    children: product.price\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                                    lineNumber: 57,\n                                                    columnNumber: 19\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                            lineNumber: 45,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, product.id, true, {\n                                    fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    onClick: function(event) {\n                                        return AddToTrolly(event, product.id);\n                                    },\n                                    className: \"flex ml-auto texeWhite bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded\",\n                                    children: \"Add to cart\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"+jX9a9EVr6a1PVigPUwH8maZWZ0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O3lDQUFTOzs7Ozs7aUNBQ0w7cUJBQ1AsQ0FBQzs7Ozs7d0JBQ0U7Ozs7OztnQkFDRjs7Ozs7WUFDRixDQUNOO0NBQ0g7R0FqRXVCYixJQUFJOztRQU9YRixrREFBUzs7O0FBUEZFLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBwcm9kdWN0ZGF0YSBmcm9tIFwiLi4vZGF0YS9wcm9kdWN0cy5qc29uXCI7XG5pbXBvcnQgeyBnZXRBbGxQcm9kdWN0cyB9IGZyb20gXCIuLi9saWIvcHJvZHVjdFN0b3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHByb2R1Y3RzIH0pIHtcbiAgLy8gY29uc3QgcHJvZHVjdHMgPSBwcm9kdWN0ZGF0YTtcbiAgY29uc3QgQWRkVG9Ucm9sbHkgPSB1c2VDYWxsYmFjayhhc3luYyAoZSwgcHJvZHVjdElkKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9jYXJ0LyR7cHJvZHVjdElkfWAsIHsgbWV0aG9kOiBcIlBPU1RcIiB9KTtcbiAgfSwgW10pO1xuXG4gIFxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qgdmlld1Byb2R1Y3REZXRhaWxzID0gdXNlQ2FsbGJhY2soXG4gICAgKHByb2R1Y3RpZCkgPT4ge1xuICAgICAgcm91dGVyLnB1c2goYC9wcm9kdWN0LyR7cHJvZHVjdGlkfWApO1xuICAgIH0sXG4gICAgW3JvdXRlcl1cbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTJ4bCBteC1hdXRvIHB5LTE2IHB4LTQgc206cHktMjQgc206cHgtNiBsZzptYXgtdy03eGwgbGc6cHgtOFwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1leHRyYWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgIEN1c3RvbWVycyBhbHNvIHB1cmNoYXNlZFxuICAgICAgICA8L2gyPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiBncmlkIGdyaWQtY29scy0xIGdhcC15LTEwIGdhcC14LTYgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTQgeGw6Z2FwLXgtOFwiPlxuICAgICAgICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXAgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGtleT17cHJvZHVjdC5pZH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB2aWV3UHJvZHVjdERldGFpbHMocHJvZHVjdC5pZCl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgcmVsYXRpdmVcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWluLWgtODAgYmctZ3JheS0yMDAgYXNwZWN0LXctMSBhc3BlY3QtaC0xIHJvdW5kZWQtbWQgb3ZlcmZsb3ctaGlkZGVuIGdyb3VwLWhvdmVyOm9wYWNpdHktNzUgbGc6aC04MCBsZzphc3BlY3Qtbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2R1Y3QuaW1hZ2VTcmN9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17cHJvZHVjdC5pbWFnZUFsdH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY2VudGVyIG9iamVjdC1jb3ZlciBsZzp3LWZ1bGwgbGc6aC1mdWxsXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IGZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNzAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0xIHRleHQtc20gdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LmNvbG9yfVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5wcmljZX1cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IEFkZFRvVHJvbGx5KGV2ZW50LCBwcm9kdWN0LmlkKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IG1sLWF1dG8gdGV4ZVdoaXRlIGJnLXJlZC01MDAgYm9yZGVyLTAgcHktMiBweC02IGZvY3VzOm91dGxpbmUtbm9uZSBob3ZlcjpiZy1yZWQtNjAwIHJvdW5kZWRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQWRkIHRvIGNhcnRcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuLy8vIFNTUlxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBnZXRBbGxQcm9kdWN0cygpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHByb2R1Y3RzIH0sXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsInN0eWxlcyIsInByb2R1Y3RkYXRhIiwiUm91dGVyIiwidXNlUm91dGVyIiwidXNlQ2FsbGJhY2siLCJIb21lIiwicHJvZHVjdHMiLCJBZGRUb1Ryb2xseSIsImUiLCJwcm9kdWN0SWQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwicm91dGVyIiwidmlld1Byb2R1Y3REZXRhaWxzIiwicHJvZHVjdGlkIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwibWFwIiwicHJvZHVjdCIsIm9uQ2xpY2siLCJpZCIsImltZyIsInNyYyIsImltYWdlU3JjIiwiYWx0IiwiaW1hZ2VBbHQiLCJoMyIsImEiLCJzcGFuIiwiYXJpYS1oaWRkZW4iLCJuYW1lIiwicCIsImNvbG9yIiwicHJpY2UiLCJidXR0b24iLCJldmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});