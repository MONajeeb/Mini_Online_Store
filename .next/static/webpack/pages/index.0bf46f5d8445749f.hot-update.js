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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_products_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/products.json */ \"./data/products.json\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSP = true;\nfunction Home(param) {\n    var products = param.products;\n    var _this = this;\n    _s();\n    // const products = productdata;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var viewProductDetails = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(function(productid) {\n        router.push(\"/product/\".concat(productid));\n    }, [\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-2xl font-extrabold tracking-tight text-gray-900\",\n                    children: \"Customers also purchased\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8\",\n                    children: products.map(function(product) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"group relative\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    onClick: function() {\n                                        return viewProductDetails(product.id);\n                                    },\n                                    className: \"group relative\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: product.imageSrc,\n                                                alt: product.imageAlt,\n                                                className: \"w-full h-full object-center object-cover lg:w-full lg:h-full\"\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                                lineNumber: 35,\n                                                columnNumber: 19\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                            lineNumber: 34,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"mt-4 flex justify-between\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                            className: \"text-sm text-gray-700\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                                children: [\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                        \"aria-hidden\": \"true\",\n                                                                        className: \"absolute inset-0\"\n                                                                    }, void 0, false, {\n                                                                        fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                                                        lineNumber: 45,\n                                                                        columnNumber: 25\n                                                                    }, _this),\n                                                                    product.name\n                                                                ]\n                                                            }, void 0, true, {\n                                                                fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                                                lineNumber: 44,\n                                                                columnNumber: 23\n                                                            }, _this)\n                                                        }, void 0, false, {\n                                                            fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                                            lineNumber: 43,\n                                                            columnNumber: 21\n                                                        }, _this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            className: \"mt-1 text-sm text-gray-500\",\n                                                            children: product.color\n                                                        }, void 0, false, {\n                                                            fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                                            lineNumber: 49,\n                                                            columnNumber: 21\n                                                        }, _this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                                    lineNumber: 42,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"text-sm font-medium text-gray-900\",\n                                                    children: product.price\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                                    lineNumber: 53,\n                                                    columnNumber: 19\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                            lineNumber: 41,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, product.id, true, {\n                                    fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    on: true,\n                                    className: \"flex ml-auto texeWhite bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded\",\n                                    children: \"Add to cart\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                            lineNumber: 28,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"CtbLcdXo8RwZJ7Q7LIQh30WtL7U=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNkI7QUFDRTtBQUNnQjtBQUNDO0FBRUE7QUFDWjs7O0FBRXJCLFNBQVNPLElBQUksQ0FBQyxLQUFZLEVBQUU7UUFBZCxRQUFVLEdBQVYsS0FBWSxDQUFWQyxRQUFROzs7SUFDckMsZ0NBQWdDO0lBRWhDLElBQU1DLE1BQU0sR0FBR0osc0RBQVMsRUFBRTtJQUMxQixJQUFNSyxrQkFBa0IsR0FBR0osa0RBQVcsQ0FDcEMsU0FBQ0ssU0FBUyxFQUFLO1FBQ2JGLE1BQU0sQ0FBQ0csSUFBSSxDQUFDLFdBQVUsQ0FBWSxPQUFWRCxTQUFTLENBQUUsQ0FBQyxDQUFDO0tBQ3RDLEVBQ0Q7UUFBQ0YsTUFBTTtLQUFDLENBQ1Q7SUFDRCxxQkFDRSw4REFBQ0ksS0FBRztRQUFDQyxTQUFTLEVBQUMsVUFBVTtrQkFDdkIsNEVBQUNELEtBQUc7WUFBQ0MsU0FBUyxFQUFDLG9FQUFvRTs7OEJBQ2pGLDhEQUFDQyxJQUFFO29CQUFDRCxTQUFTLEVBQUMsc0RBQXNEOzhCQUFDLDBCQUVyRTs7Ozs7d0JBQUs7OEJBRUwsOERBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxpRkFBaUY7OEJBQzdGTixRQUFRLENBQUNRLEdBQUcsQ0FBQyxTQUFDQyxPQUFPOzZDQUNwQiw4REFBQ0osS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLGdCQUFnQjs7OENBQzdCLDhEQUFDRCxLQUFHO29DQUVGSyxPQUFPLEVBQUU7K0NBQU1SLGtCQUFrQixDQUFDTyxPQUFPLENBQUNFLEVBQUUsQ0FBQztxQ0FBQTtvQ0FDN0NMLFNBQVMsRUFBQyxnQkFBZ0I7O3NEQUUxQiw4REFBQ0QsS0FBRzs0Q0FBQ0MsU0FBUyxFQUFDLDRIQUE0SDtzREFDekksNEVBQUNNLEtBQUc7Z0RBQ0ZDLEdBQUcsRUFBRUosT0FBTyxDQUFDSyxRQUFRO2dEQUNyQkMsR0FBRyxFQUFFTixPQUFPLENBQUNPLFFBQVE7Z0RBQ3JCVixTQUFTLEVBQUMsOERBQThEOzs7OztxREFDeEU7Ozs7O2lEQUNFO3NEQUNOLDhEQUFDRCxLQUFHOzRDQUFDQyxTQUFTLEVBQUMsMkJBQTJCOzs4REFDeEMsOERBQUNELEtBQUc7O3NFQUNGLDhEQUFDWSxJQUFFOzREQUFDWCxTQUFTLEVBQUMsdUJBQXVCO3NFQUNuQyw0RUFBQ1ksR0FBQzs7a0ZBQ0EsOERBQUNDLE1BQUk7d0VBQUNDLGFBQVcsRUFBQyxNQUFNO3dFQUFDZCxTQUFTLEVBQUMsa0JBQWtCOzs7Ozs2RUFBRztvRUFDdkRHLE9BQU8sQ0FBQ1ksSUFBSTs7Ozs7O3FFQUNYOzs7OztpRUFDRDtzRUFDTCw4REFBQ0MsR0FBQzs0REFBQ2hCLFNBQVMsRUFBQyw0QkFBNEI7c0VBQ3RDRyxPQUFPLENBQUNjLEtBQUs7Ozs7O2lFQUNaOzs7Ozs7eURBQ0E7OERBQ04sOERBQUNELEdBQUM7b0RBQUNoQixTQUFTLEVBQUMsbUNBQW1DOzhEQUM3Q0csT0FBTyxDQUFDZSxLQUFLOzs7Ozt5REFDWjs7Ozs7O2lEQUNBOzttQ0ExQkRmLE9BQU8sQ0FBQ0UsRUFBRTs7Ozt5Q0EyQlg7OENBQ04sOERBQUNjLFFBQU07b0NBQUNDLEVBQUU7b0NBQUNwQixTQUFTLEVBQUMsa0dBQWtHOzhDQUFDLGFBRXhIOzs7Ozt5Q0FBUzs7Ozs7O2lDQUNMO3FCQUNQLENBQUM7Ozs7O3dCQUNFOzs7Ozs7Z0JBQ0Y7Ozs7O1lBQ0YsQ0FDTjtDQUNIO0dBMUR1QlAsSUFBSTs7UUFHWEYsa0RBQVM7OztBQUhGRSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgcHJvZHVjdGRhdGEgZnJvbSBcIi4uL2RhdGEvcHJvZHVjdHMuanNvblwiO1xuaW1wb3J0IHsgZ2V0QWxsUHJvZHVjdHMgfSBmcm9tIFwiLi4vbGliL3Byb2R1Y3RTdG9yZVwiO1xuaW1wb3J0IHsgUm91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBwcm9kdWN0cyB9KSB7XG4gIC8vIGNvbnN0IHByb2R1Y3RzID0gcHJvZHVjdGRhdGE7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHZpZXdQcm9kdWN0RGV0YWlscyA9IHVzZUNhbGxiYWNrKFxuICAgIChwcm9kdWN0aWQpID0+IHtcbiAgICAgIHJvdXRlci5wdXNoKGAvcHJvZHVjdC8ke3Byb2R1Y3RpZH1gKTtcbiAgICB9LFxuICAgIFtyb3V0ZXJdXG4gICk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy0yeGwgbXgtYXV0byBweS0xNiBweC00IHNtOnB5LTI0IHNtOnB4LTYgbGc6bWF4LXctN3hsIGxnOnB4LThcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtZXh0cmFib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICBDdXN0b21lcnMgYWxzbyBwdXJjaGFzZWRcbiAgICAgICAgPC9oMj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgZ3JpZCBncmlkLWNvbHMtMSBnYXAteS0xMCBnYXAteC02IHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy00IHhsOmdhcC14LThcIj5cbiAgICAgICAgICB7cHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3QuaWR9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdmlld1Byb2R1Y3REZXRhaWxzKHByb2R1Y3QuaWQpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIHJlbGF0aXZlXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1pbi1oLTgwIGJnLWdyYXktMjAwIGFzcGVjdC13LTEgYXNwZWN0LWgtMSByb3VuZGVkLW1kIG92ZXJmbG93LWhpZGRlbiBncm91cC1ob3ZlcjpvcGFjaXR5LTc1IGxnOmgtODAgbGc6YXNwZWN0LW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9kdWN0LmltYWdlU3JjfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9e3Byb2R1Y3QuaW1hZ2VBbHR9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNlbnRlciBvYmplY3QtY292ZXIgbGc6dy1mdWxsIGxnOmgtZnVsbFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMSB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5jb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QucHJpY2V9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uIGNsYXNzTmFtZT1cImZsZXggbWwtYXV0byB0ZXhlV2hpdGUgYmctcmVkLTUwMCBib3JkZXItMCBweS0yIHB4LTYgZm9jdXM6b3V0bGluZS1ub25lIGhvdmVyOmJnLXJlZC02MDAgcm91bmRlZFwiPlxuICAgICAgICAgICAgICAgIEFkZCB0byBjYXJ0XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbi8vLyBTU1JcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgZ2V0QWxsUHJvZHVjdHMoKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBwcm9kdWN0cyB9LFxuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJzdHlsZXMiLCJwcm9kdWN0ZGF0YSIsIlJvdXRlciIsInVzZVJvdXRlciIsInVzZUNhbGxiYWNrIiwiSG9tZSIsInByb2R1Y3RzIiwicm91dGVyIiwidmlld1Byb2R1Y3REZXRhaWxzIiwicHJvZHVjdGlkIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwibWFwIiwicHJvZHVjdCIsIm9uQ2xpY2siLCJpZCIsImltZyIsInNyYyIsImltYWdlU3JjIiwiYWx0IiwiaW1hZ2VBbHQiLCJoMyIsImEiLCJzcGFuIiwiYXJpYS1oaWRkZW4iLCJuYW1lIiwicCIsImNvbG9yIiwicHJpY2UiLCJidXR0b24iLCJvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});