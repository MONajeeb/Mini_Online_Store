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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_products_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/products.json */ \"./data/products.json\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSP = true;\nfunction Home(param) {\n    var products = param.products;\n    var _this = this;\n    _s();\n    // const products = productdata;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var viewProductDetails = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(function(productid) {\n        router.push(\"/product/\".concat(productid));\n    }, [\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-2xl font-extrabold tracking-tight text-gray-900\",\n                    children: \"Customers also purchased\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8\",\n                    children: products.map(function(product) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: function() {\n                                    return viewProductDetails(product.id);\n                                },\n                                className: \"group relative\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: product.imageSrc,\n                                            alt: product.imageAlt,\n                                            className: \"w-full h-full object-center object-cover lg:w-full lg:h-full\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                            lineNumber: 35,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                        lineNumber: 34,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mt-4 flex justify-between\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                        className: \"text-sm text-gray-700\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                    \"aria-hidden\": \"true\",\n                                                                    className: \"absolute inset-0\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                                                    lineNumber: 45,\n                                                                    columnNumber: 23\n                                                                }, _this),\n                                                                product.name\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                                            lineNumber: 44,\n                                                            columnNumber: 21\n                                                        }, _this)\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                                        lineNumber: 43,\n                                                        columnNumber: 19\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"mt-1 text-sm text-gray-500\",\n                                                        children: product.color\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                                        lineNumber: 49,\n                                                        columnNumber: 19\n                                                    }, _this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                                lineNumber: 42,\n                                                columnNumber: 17\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-sm font-medium text-gray-900\",\n                                                children: product.price\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                                lineNumber: 51,\n                                                columnNumber: 17\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"flex ml-auto texeWhite bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded\",\n                                        children: \"Add to cart\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, product.id, true, {\n                                fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                lineNumber: 29,\n                                columnNumber: 12\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                            lineNumber: 28,\n                            columnNumber: 12\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"CtbLcdXo8RwZJ7Q7LIQh30WtL7U=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNkI7QUFDRTtBQUNnQjtBQUNDO0FBRUE7QUFDWjs7O0FBRXJCLFNBQVNPLElBQUksQ0FBQyxLQUFZLEVBQUU7UUFBZCxRQUFVLEdBQVYsS0FBWSxDQUFWQyxRQUFROzs7SUFDckMsZ0NBQWdDO0lBRWhDLElBQU1DLE1BQU0sR0FBR0osc0RBQVMsRUFBRTtJQUMxQixJQUFNSyxrQkFBa0IsR0FBR0osa0RBQVcsQ0FDcEMsU0FBQ0ssU0FBUyxFQUFLO1FBQ2JGLE1BQU0sQ0FBQ0csSUFBSSxDQUFDLFdBQVUsQ0FBWSxPQUFWRCxTQUFTLENBQUUsQ0FBQyxDQUFDO0tBQ3RDLEVBQ0Q7UUFBQ0YsTUFBTTtLQUFDLENBQ1Q7SUFDRCxxQkFDRSw4REFBQ0ksS0FBRztRQUFDQyxTQUFTLEVBQUMsVUFBVTtrQkFDdkIsNEVBQUNELEtBQUc7WUFBQ0MsU0FBUyxFQUFDLG9FQUFvRTs7OEJBQ2pGLDhEQUFDQyxJQUFFO29CQUFDRCxTQUFTLEVBQUMsc0RBQXNEOzhCQUFDLDBCQUVyRTs7Ozs7d0JBQUs7OEJBRUwsOERBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxpRkFBaUY7OEJBQzdGTixRQUFRLENBQUNRLEdBQUcsQ0FBQyxTQUFDQyxPQUFPOzZDQUNyQiw4REFBQ0osS0FBRztzQ0FDSiw0RUFBQ0EsS0FBRztnQ0FFREssT0FBTyxFQUFFOzJDQUFNUixrQkFBa0IsQ0FBQ08sT0FBTyxDQUFDRSxFQUFFLENBQUM7aUNBQUE7Z0NBQzdDTCxTQUFTLEVBQUMsZ0JBQWdCOztrREFFMUIsOERBQUNELEtBQUc7d0NBQUNDLFNBQVMsRUFBQyw0SEFBNEg7a0RBQ3pJLDRFQUFDTSxLQUFHOzRDQUNGQyxHQUFHLEVBQUVKLE9BQU8sQ0FBQ0ssUUFBUTs0Q0FDckJDLEdBQUcsRUFBRU4sT0FBTyxDQUFDTyxRQUFROzRDQUNyQlYsU0FBUyxFQUFDLDhEQUE4RDs7Ozs7aURBQ3hFOzs7Ozs2Q0FDRTtrREFDTiw4REFBQ0QsS0FBRzt3Q0FBQ0MsU0FBUyxFQUFDLDJCQUEyQjs7MERBQ3hDLDhEQUFDRCxLQUFHOztrRUFDRiw4REFBQ1ksSUFBRTt3REFBQ1gsU0FBUyxFQUFDLHVCQUF1QjtrRUFDbkMsNEVBQUNZLEdBQUM7OzhFQUNBLDhEQUFDQyxNQUFJO29FQUFDQyxhQUFXLEVBQUMsTUFBTTtvRUFBQ2QsU0FBUyxFQUFDLGtCQUFrQjs7Ozs7eUVBQUc7Z0VBQ3ZERyxPQUFPLENBQUNZLElBQUk7Ozs7OztpRUFDWDs7Ozs7NkRBQ0Q7a0VBQ0wsOERBQUNDLEdBQUM7d0RBQUNoQixTQUFTLEVBQUMsNEJBQTRCO2tFQUFFRyxPQUFPLENBQUNjLEtBQUs7Ozs7OzZEQUFLOzs7Ozs7cURBQ3pEOzBEQUNOLDhEQUFDRCxHQUFDO2dEQUFDaEIsU0FBUyxFQUFDLG1DQUFtQzswREFDN0NHLE9BQU8sQ0FBQ2UsS0FBSzs7Ozs7cURBQ1o7Ozs7Ozs2Q0FDQTtrREFDTiw4REFBQ0MsUUFBTTt3Q0FBQ25CLFNBQVMsRUFBQyxrR0FBa0c7a0RBQUMsYUFFckg7Ozs7OzZDQUFTOzsrQkEzQkpHLE9BQU8sQ0FBQ0UsRUFBRTs7OztxQ0E0Qlg7Ozs7O2lDQUNBO3FCQUNQLENBQUM7Ozs7O3dCQUNFOzs7Ozs7Z0JBQ0Y7Ozs7O1lBQ0YsQ0FDTjtDQUNIO0dBeER1QlosSUFBSTs7UUFHWEYsa0RBQVM7OztBQUhGRSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgcHJvZHVjdGRhdGEgZnJvbSBcIi4uL2RhdGEvcHJvZHVjdHMuanNvblwiO1xuaW1wb3J0IHsgZ2V0QWxsUHJvZHVjdHMgfSBmcm9tIFwiLi4vbGliL3Byb2R1Y3RTdG9yZVwiO1xuaW1wb3J0IHsgUm91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBwcm9kdWN0cyB9KSB7XG4gIC8vIGNvbnN0IHByb2R1Y3RzID0gcHJvZHVjdGRhdGE7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHZpZXdQcm9kdWN0RGV0YWlscyA9IHVzZUNhbGxiYWNrKFxuICAgIChwcm9kdWN0aWQpID0+IHtcbiAgICAgIHJvdXRlci5wdXNoKGAvcHJvZHVjdC8ke3Byb2R1Y3RpZH1gKTtcbiAgICB9LFxuICAgIFtyb3V0ZXJdXG4gICk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy0yeGwgbXgtYXV0byBweS0xNiBweC00IHNtOnB5LTI0IHNtOnB4LTYgbGc6bWF4LXctN3hsIGxnOnB4LThcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtZXh0cmFib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICBDdXN0b21lcnMgYWxzbyBwdXJjaGFzZWRcbiAgICAgICAgPC9oMj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgZ3JpZCBncmlkLWNvbHMtMSBnYXAteS0xMCBnYXAteC02IHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy00IHhsOmdhcC14LThcIj5cbiAgICAgICAgICB7cHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXG4gICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAga2V5PXtwcm9kdWN0LmlkfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB2aWV3UHJvZHVjdERldGFpbHMocHJvZHVjdC5pZCl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIHJlbGF0aXZlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWluLWgtODAgYmctZ3JheS0yMDAgYXNwZWN0LXctMSBhc3BlY3QtaC0xIHJvdW5kZWQtbWQgb3ZlcmZsb3ctaGlkZGVuIGdyb3VwLWhvdmVyOm9wYWNpdHktNzUgbGc6aC04MCBsZzphc3BlY3Qtbm9uZVwiPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz17cHJvZHVjdC5pbWFnZVNyY31cbiAgICAgICAgICAgICAgICAgIGFsdD17cHJvZHVjdC5pbWFnZUFsdH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNlbnRlciBvYmplY3QtY292ZXIgbGc6dy1mdWxsIGxnOmgtZnVsbFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNzAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0xIHRleHQtc20gdGV4dC1ncmF5LTUwMFwiPntwcm9kdWN0LmNvbG9yfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LnByaWNlfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmxleCBtbC1hdXRvIHRleGVXaGl0ZSBiZy1yZWQtNTAwIGJvcmRlci0wIHB5LTIgcHgtNiBmb2N1czpvdXRsaW5lLW5vbmUgaG92ZXI6YmctcmVkLTYwMCByb3VuZGVkXCI+XG4gICAgICAgICAgICAgICAgQWRkIHRvIGNhcnRcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG4vLy8gU1NSXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGdldEFsbFByb2R1Y3RzKCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgcHJvZHVjdHMgfSxcbiAgfTtcbn07XG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwic3R5bGVzIiwicHJvZHVjdGRhdGEiLCJSb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VDYWxsYmFjayIsIkhvbWUiLCJwcm9kdWN0cyIsInJvdXRlciIsInZpZXdQcm9kdWN0RGV0YWlscyIsInByb2R1Y3RpZCIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsIm1hcCIsInByb2R1Y3QiLCJvbkNsaWNrIiwiaWQiLCJpbWciLCJzcmMiLCJpbWFnZVNyYyIsImFsdCIsImltYWdlQWx0IiwiaDMiLCJhIiwic3BhbiIsImFyaWEtaGlkZGVuIiwibmFtZSIsInAiLCJjb2xvciIsInByaWNlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});