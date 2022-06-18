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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_products_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/products.json */ \"./data/products.json\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSP = true;\nfunction Home(param) {\n    var products = param.products;\n    var _this = this;\n    _s();\n    // const products = productdata;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var viewProductDetails = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(function(productid) {\n        router.push(\"/product/\".concat(productid));\n    }, [\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-2xl font-extrabold tracking-tight text-gray-900\",\n                    children: \"Customers also purchased\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8\",\n                    children: products.map(function(product) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onClick: function() {\n                                return viewProductDetails(product.id);\n                            },\n                            className: \"group relative\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: product.imageSrc,\n                                        alt: product.imageAlt,\n                                        className: \"w-full h-full object-center object-cover lg:w-full lg:h-full\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                        lineNumber: 34,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-4 flex justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                    className: \"text-sm text-gray-700\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                \"aria-hidden\": \"true\",\n                                                                className: \"absolute inset-0\"\n                                                            }, void 0, false, {\n                                                                fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                                                lineNumber: 44,\n                                                                columnNumber: 23\n                                                            }, _this),\n                                                            product.name\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                                        lineNumber: 43,\n                                                        columnNumber: 21\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                                    lineNumber: 42,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"mt-1 text-sm text-gray-500\",\n                                                    children: product.color\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                                    lineNumber: 48,\n                                                    columnNumber: 19\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                            lineNumber: 41,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-sm font-medium text-gray-900\",\n                                            children: product.price\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                            lineNumber: 50,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, product.id, true, {\n                            fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                            lineNumber: 28,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\ITI\\\\Graduation Project\\\\NEXTJS\\\\grocery_store\\\\pages\\\\index.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"CtbLcdXo8RwZJ7Q7LIQh30WtL7U=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNkI7QUFDRTtBQUNnQjtBQUNDO0FBRUE7QUFDWjs7O0FBRXJCLFNBQVNPLElBQUksQ0FBQyxLQUFZLEVBQUU7UUFBZCxRQUFVLEdBQVYsS0FBWSxDQUFWQyxRQUFROzs7SUFDckMsZ0NBQWdDO0lBRWhDLElBQU1DLE1BQU0sR0FBR0osc0RBQVMsRUFBRTtJQUMxQixJQUFNSyxrQkFBa0IsR0FBR0osa0RBQVcsQ0FDcEMsU0FBQ0ssU0FBUyxFQUFLO1FBQ2JGLE1BQU0sQ0FBQ0csSUFBSSxDQUFDLFdBQVUsQ0FBWSxPQUFWRCxTQUFTLENBQUUsQ0FBQyxDQUFDO0tBQ3RDLEVBQ0Q7UUFBQ0YsTUFBTTtLQUFDLENBQ1Q7SUFDRCxxQkFDRSw4REFBQ0ksS0FBRztRQUFDQyxTQUFTLEVBQUMsVUFBVTtrQkFDdkIsNEVBQUNELEtBQUc7WUFBQ0MsU0FBUyxFQUFDLG9FQUFvRTs7OEJBQ2pGLDhEQUFDQyxJQUFFO29CQUFDRCxTQUFTLEVBQUMsc0RBQXNEOzhCQUFDLDBCQUVyRTs7Ozs7d0JBQUs7OEJBRUwsOERBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxpRkFBaUY7OEJBQzdGTixRQUFRLENBQUNRLEdBQUcsQ0FBQyxTQUFDQyxPQUFPOzZDQUNwQiw4REFBQ0osS0FBRzs0QkFFRkssT0FBTyxFQUFFO3VDQUFNUixrQkFBa0IsQ0FBQ08sT0FBTyxDQUFDRSxFQUFFLENBQUM7NkJBQUE7NEJBQzdDTCxTQUFTLEVBQUMsZ0JBQWdCOzs4Q0FFMUIsOERBQUNELEtBQUc7b0NBQUNDLFNBQVMsRUFBQyw0SEFBNEg7OENBQ3pJLDRFQUFDTSxLQUFHO3dDQUNGQyxHQUFHLEVBQUVKLE9BQU8sQ0FBQ0ssUUFBUTt3Q0FDckJDLEdBQUcsRUFBRU4sT0FBTyxDQUFDTyxRQUFRO3dDQUNyQlYsU0FBUyxFQUFDLDhEQUE4RDs7Ozs7NkNBQ3hFOzs7Ozt5Q0FDRTs4Q0FDTiw4REFBQ0QsS0FBRztvQ0FBQ0MsU0FBUyxFQUFDLDJCQUEyQjs7c0RBQ3hDLDhEQUFDRCxLQUFHOzs4REFDRiw4REFBQ1ksSUFBRTtvREFBQ1gsU0FBUyxFQUFDLHVCQUF1Qjs4REFDbkMsNEVBQUNZLEdBQUM7OzBFQUNBLDhEQUFDQyxNQUFJO2dFQUFDQyxhQUFXLEVBQUMsTUFBTTtnRUFBQ2QsU0FBUyxFQUFDLGtCQUFrQjs7Ozs7cUVBQUc7NERBQ3ZERyxPQUFPLENBQUNZLElBQUk7Ozs7Ozs2REFDWDs7Ozs7eURBQ0Q7OERBQ0wsOERBQUNDLEdBQUM7b0RBQUNoQixTQUFTLEVBQUMsNEJBQTRCOzhEQUFFRyxPQUFPLENBQUNjLEtBQUs7Ozs7O3lEQUFLOzs7Ozs7aURBQ3pEO3NEQUNOLDhEQUFDRCxHQUFDOzRDQUFDaEIsU0FBUyxFQUFDLG1DQUFtQztzREFDN0NHLE9BQU8sQ0FBQ2UsS0FBSzs7Ozs7aURBQ1o7Ozs7Ozt5Q0FDZ0I7OzJCQXhCakJmLE9BQU8sQ0FBQ0UsRUFBRTs7OztpQ0F5Qlg7cUJBQ1AsQ0FBQzs7Ozs7d0JBQ0U7Ozs7OztnQkFDRjs7Ozs7WUFDRixDQUNOO0NBQ0g7R0FuRHVCWixJQUFJOztRQUdYRixrREFBUzs7O0FBSEZFLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBwcm9kdWN0ZGF0YSBmcm9tIFwiLi4vZGF0YS9wcm9kdWN0cy5qc29uXCI7XG5pbXBvcnQgeyBnZXRBbGxQcm9kdWN0cyB9IGZyb20gXCIuLi9saWIvcHJvZHVjdFN0b3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHByb2R1Y3RzIH0pIHtcbiAgLy8gY29uc3QgcHJvZHVjdHMgPSBwcm9kdWN0ZGF0YTtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qgdmlld1Byb2R1Y3REZXRhaWxzID0gdXNlQ2FsbGJhY2soXG4gICAgKHByb2R1Y3RpZCkgPT4ge1xuICAgICAgcm91dGVyLnB1c2goYC9wcm9kdWN0LyR7cHJvZHVjdGlkfWApO1xuICAgIH0sXG4gICAgW3JvdXRlcl1cbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTJ4bCBteC1hdXRvIHB5LTE2IHB4LTQgc206cHktMjQgc206cHgtNiBsZzptYXgtdy03eGwgbGc6cHgtOFwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1leHRyYWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgIEN1c3RvbWVycyBhbHNvIHB1cmNoYXNlZFxuICAgICAgICA8L2gyPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiBncmlkIGdyaWQtY29scy0xIGdhcC15LTEwIGdhcC14LTYgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTQgeGw6Z2FwLXgtOFwiPlxuICAgICAgICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAga2V5PXtwcm9kdWN0LmlkfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB2aWV3UHJvZHVjdERldGFpbHMocHJvZHVjdC5pZCl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIHJlbGF0aXZlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWluLWgtODAgYmctZ3JheS0yMDAgYXNwZWN0LXctMSBhc3BlY3QtaC0xIHJvdW5kZWQtbWQgb3ZlcmZsb3ctaGlkZGVuIGdyb3VwLWhvdmVyOm9wYWNpdHktNzUgbGc6aC04MCBsZzphc3BlY3Qtbm9uZVwiPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz17cHJvZHVjdC5pbWFnZVNyY31cbiAgICAgICAgICAgICAgICAgIGFsdD17cHJvZHVjdC5pbWFnZUFsdH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNlbnRlciBvYmplY3QtY292ZXIgbGc6dy1mdWxsIGxnOmgtZnVsbFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNzAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0xIHRleHQtc20gdGV4dC1ncmF5LTUwMFwiPntwcm9kdWN0LmNvbG9yfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LnByaWNlfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbi8vLyBTU1JcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgZ2V0QWxsUHJvZHVjdHMoKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBwcm9kdWN0cyB9LFxuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJzdHlsZXMiLCJwcm9kdWN0ZGF0YSIsIlJvdXRlciIsInVzZVJvdXRlciIsInVzZUNhbGxiYWNrIiwiSG9tZSIsInByb2R1Y3RzIiwicm91dGVyIiwidmlld1Byb2R1Y3REZXRhaWxzIiwicHJvZHVjdGlkIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwibWFwIiwicHJvZHVjdCIsIm9uQ2xpY2siLCJpZCIsImltZyIsInNyYyIsImltYWdlU3JjIiwiYWx0IiwiaW1hZ2VBbHQiLCJoMyIsImEiLCJzcGFuIiwiYXJpYS1oaWRkZW4iLCJuYW1lIiwicCIsImNvbG9yIiwicHJpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});