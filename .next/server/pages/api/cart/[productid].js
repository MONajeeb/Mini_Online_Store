"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/cart/[productid]";
exports.ids = ["pages/api/cart/[productid]"];
exports.modules = {

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("aws-sdk");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "(api)/./lib/cartStore.js":
/*!**************************!*\
  !*** ./lib/cartStore.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToCart\": () => (/* binding */ addToCart),\n/* harmony export */   \"getAllFromCart\": () => (/* binding */ getAllFromCart)\n/* harmony export */ });\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _productStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productStore */ \"(api)/./lib/productStore.js\");\n\n\nconst { config  } = __webpack_require__(/*! dotenv */ \"dotenv\");\nconfig();\nconst client = new (aws_sdk__WEBPACK_IMPORTED_MODULE_0___default().DynamoDB.DocumentClient)({\n    endpoint: \"http://localhost:8000\"\n});\nconst TableName = \"CartTable\";\nconst addToCart = (productid)=>{\n    return client.update({\n        TableName: \"CartTable\",\n        Key: {\n            ProductId: productid\n        },\n        UpdateExpression: \"ADD qty :qty\",\n        ExpressionAttributeValues: {\n            \":qty\": 1\n        }\n    }).promise();\n};\nconst getAllFromCart = async ()=>{\n    const { Items  } = await client.scan({\n        TableName\n    }).promise();\n    const allProducts = await (0,_productStore__WEBPACK_IMPORTED_MODULE_1__.getAllProducts)();\n    return Items.map((item)=>{\n        return allProducts.find((product)=>product.id === item.ProductId\n        );\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvY2FydFN0b3JlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBQ3NCO0FBRWhELE1BQU0sRUFBQ0UsTUFBTSxHQUFDLEdBQUdDLG1CQUFPLENBQUMsc0JBQVEsQ0FBQztBQUNsQ0QsTUFBTSxFQUFFLENBQUM7QUFFVCxNQUFNRSxNQUFNLEdBQUcsSUFBSUosd0VBQTJCLENBQUM7SUFDN0NPLFFBQVEsRUFBRSx1QkFBdUI7Q0FDbEMsQ0FBQztBQUVGLE1BQU1DLFNBQVMsR0FBRyxXQUFXO0FBRXRCLE1BQU1DLFNBQVMsR0FBRyxDQUFDQyxTQUFTLEdBQUs7SUFDdEMsT0FBT04sTUFBTSxDQUNWTyxNQUFNLENBQUM7UUFDTkgsU0FBUyxFQUFFLFdBQVc7UUFDdEJJLEdBQUcsRUFBRTtZQUFFQyxTQUFTLEVBQUVILFNBQVM7U0FBRTtRQUM3QkksZ0JBQWdCLEVBQUUsY0FBYztRQUNoQ0MseUJBQXlCLEVBQUU7WUFDekIsTUFBTSxFQUFFLENBQUM7U0FDVjtLQUNGLENBQUMsQ0FDREMsT0FBTyxFQUFFLENBQUM7Q0FDZCxDQUFDO0FBRUssTUFBTUMsY0FBYyxHQUFHLFVBQVk7SUFDeEMsTUFBTSxFQUFFQyxLQUFLLEdBQUUsR0FBRyxNQUFNZCxNQUFNLENBQzNCZSxJQUFJLENBQUM7UUFDSlgsU0FBUztLQUNWLENBQUMsQ0FDRFEsT0FBTyxFQUFFO0lBRVosTUFBTUksV0FBVyxHQUFHLE1BQU1uQiw2REFBYyxFQUFFO0lBQzFDLE9BQU9pQixLQUFLLENBQUNHLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLEdBQUs7UUFDekIsT0FBT0YsV0FBVyxDQUFDRyxJQUFJLENBQUMsQ0FBQ0MsT0FBTyxHQUFLQSxPQUFPLENBQUNDLEVBQUUsS0FBS0gsSUFBSSxDQUFDVCxTQUFTO1FBQUEsQ0FBQyxDQUFDO0tBQ3JFLENBQUMsQ0FBQztDQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncm9jZXJ5X3N0b3JlLy4vbGliL2NhcnRTdG9yZS5qcz81NzM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBV1MgZnJvbSBcImF3cy1zZGtcIjtcclxuaW1wb3J0IHsgZ2V0QWxsUHJvZHVjdHMgfSBmcm9tIFwiLi9wcm9kdWN0U3RvcmVcIjtcclxuXHJcbmNvbnN0IHtjb25maWd9ID0gcmVxdWlyZShcImRvdGVudlwiKTtcclxuY29uZmlnKCk7XHJcblxyXG5jb25zdCBjbGllbnQgPSBuZXcgQVdTLkR5bmFtb0RCLkRvY3VtZW50Q2xpZW50KHtcclxuICBlbmRwb2ludDogXCJodHRwOi8vbG9jYWxob3N0OjgwMDBcIixcclxufSk7XHJcblxyXG5jb25zdCBUYWJsZU5hbWUgPSBcIkNhcnRUYWJsZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFRvQ2FydCA9IChwcm9kdWN0aWQpID0+IHtcclxuICByZXR1cm4gY2xpZW50XHJcbiAgICAudXBkYXRlKHtcclxuICAgICAgVGFibGVOYW1lOiBcIkNhcnRUYWJsZVwiLFxyXG4gICAgICBLZXk6IHsgUHJvZHVjdElkOiBwcm9kdWN0aWQgfSxcclxuICAgICAgVXBkYXRlRXhwcmVzc2lvbjogXCJBREQgcXR5IDpxdHlcIixcclxuICAgICAgRXhwcmVzc2lvbkF0dHJpYnV0ZVZhbHVlczoge1xyXG4gICAgICAgIFwiOnF0eVwiOiAxLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIC5wcm9taXNlKCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWxsRnJvbUNhcnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgeyBJdGVtcyB9ID0gYXdhaXQgY2xpZW50XHJcbiAgICAuc2Nhbih7XHJcbiAgICAgIFRhYmxlTmFtZSxcclxuICAgIH0pXHJcbiAgICAucHJvbWlzZSgpO1xyXG5cclxuICBjb25zdCBhbGxQcm9kdWN0cyA9IGF3YWl0IGdldEFsbFByb2R1Y3RzKCk7XHJcbiAgcmV0dXJuIEl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgcmV0dXJuIGFsbFByb2R1Y3RzLmZpbmQoKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT09IGl0ZW0uUHJvZHVjdElkKTtcclxuICB9KTtcclxufTtcclxuIl0sIm5hbWVzIjpbIkFXUyIsImdldEFsbFByb2R1Y3RzIiwiY29uZmlnIiwicmVxdWlyZSIsImNsaWVudCIsIkR5bmFtb0RCIiwiRG9jdW1lbnRDbGllbnQiLCJlbmRwb2ludCIsIlRhYmxlTmFtZSIsImFkZFRvQ2FydCIsInByb2R1Y3RpZCIsInVwZGF0ZSIsIktleSIsIlByb2R1Y3RJZCIsIlVwZGF0ZUV4cHJlc3Npb24iLCJFeHByZXNzaW9uQXR0cmlidXRlVmFsdWVzIiwicHJvbWlzZSIsImdldEFsbEZyb21DYXJ0IiwiSXRlbXMiLCJzY2FuIiwiYWxsUHJvZHVjdHMiLCJtYXAiLCJpdGVtIiwiZmluZCIsInByb2R1Y3QiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/cartStore.js\n");

/***/ }),

/***/ "(api)/./lib/productStore.js":
/*!*****************************!*\
  !*** ./lib/productStore.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllProducts\": () => (/* binding */ getAllProducts),\n/* harmony export */   \"getProductById\": () => (/* binding */ getProductById)\n/* harmony export */ });\n/* harmony import */ var _data_products_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/products.json */ \"(api)/./data/products.json\");\n\nconst getAllProducts = async ()=>{\n    return _data_products_json__WEBPACK_IMPORTED_MODULE_0__;\n};\nconst getProductById = async (productId)=>{\n    return _data_products_json__WEBPACK_IMPORTED_MODULE_0__.find((product)=>product.id == productId\n    );\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJvZHVjdFN0b3JlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnRDtBQUV6QyxNQUFNQyxjQUFjLEdBQUcsVUFBWTtJQUN4QyxPQUFPRCxnREFBVyxDQUFDO0NBQ3BCLENBQUM7QUFFSyxNQUFNRSxjQUFjLEdBQUcsT0FBT0MsU0FBUyxHQUFLO0lBQ2pELE9BQU9ILHFEQUFnQixDQUFDLENBQUNLLE9BQU8sR0FBS0EsT0FBTyxDQUFDQyxFQUFFLElBQUlILFNBQVM7SUFBQSxDQUFDLENBQUM7Q0FDL0QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dyb2Nlcnlfc3RvcmUvLi9saWIvcHJvZHVjdFN0b3JlLmpzPzdkNmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2R1Y3REYXRhIGZyb20gXCIuLi9kYXRhL3Byb2R1Y3RzLmpzb25cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBbGxQcm9kdWN0cyA9IGFzeW5jICgpID0+IHtcclxuICByZXR1cm4gUHJvZHVjdERhdGE7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdEJ5SWQgPSBhc3luYyAocHJvZHVjdElkKSA9PiB7XHJcbiAgcmV0dXJuIFByb2R1Y3REYXRhLmZpbmQoKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQgPT0gcHJvZHVjdElkKTtcclxufTtcclxuIl0sIm5hbWVzIjpbIlByb2R1Y3REYXRhIiwiZ2V0QWxsUHJvZHVjdHMiLCJnZXRQcm9kdWN0QnlJZCIsInByb2R1Y3RJZCIsImZpbmQiLCJwcm9kdWN0IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/productStore.js\n");

/***/ }),

/***/ "(api)/./pages/api/cart/[productid].js":
/*!***************************************!*\
  !*** ./pages/api/cart/[productid].js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_cartStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/cartStore */ \"(api)/./lib/cartStore.js\");\n\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n//api/cart\n//HTTP POST  /api/cart/{productId}\n// Save that product in DB(DynamoDB)\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const ID = req.query.productid;\n    await (0,_lib_cartStore__WEBPACK_IMPORTED_MODULE_0__.addToCart)(ID);\n    const cartProducts = await (0,_lib_cartStore__WEBPACK_IMPORTED_MODULE_0__.getAllFromCart)();\n    res.status(200).json({\n        products: cartProducts\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2FydC9bcHJvZHVjdGlkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFtRTtBQUduRSw2RUFBNkU7QUFFN0UsVUFBVTtBQUNWLGtDQUFrQztBQUNsQyxvQ0FBb0M7QUFFcEMsaUVBQWUsT0FBT0UsR0FBRyxFQUFFQyxHQUFHLEdBQUs7SUFDakMsTUFBTUMsRUFBRSxHQUFHRixHQUFHLENBQUNHLEtBQUssQ0FBQ0MsU0FBUztJQUM5QixNQUFNTix5REFBUyxDQUFDSSxFQUFFLENBQUMsQ0FBQztJQUNwQixNQUFNRyxZQUFZLEdBQUcsTUFBTU4sOERBQWMsRUFBRTtJQUMzQ0UsR0FBRyxDQUFDSyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztRQUFFQyxRQUFRLEVBQUVILFlBQVk7S0FBRSxDQUFDLENBQUM7Q0FDbEQsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dyb2Nlcnlfc3RvcmUvLi9wYWdlcy9hcGkvY2FydC9bcHJvZHVjdGlkXS5qcz80NjgyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFkZFRvQ2FydCwgZ2V0QWxsRnJvbUNhcnQgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2NhcnRTdG9yZVwiO1xuXG5cbi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5cbi8vYXBpL2NhcnRcbi8vSFRUUCBQT1NUICAvYXBpL2NhcnQve3Byb2R1Y3RJZH1cbi8vIFNhdmUgdGhhdCBwcm9kdWN0IGluIERCKER5bmFtb0RCKVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgSUQgPSByZXEucXVlcnkucHJvZHVjdGlkO1xuICBhd2FpdCBhZGRUb0NhcnQoSUQpO1xuICBjb25zdCBjYXJ0UHJvZHVjdHMgPSBhd2FpdCBnZXRBbGxGcm9tQ2FydCgpO1xuICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHByb2R1Y3RzOiBjYXJ0UHJvZHVjdHMgfSk7XG59O1xuIl0sIm5hbWVzIjpbImFkZFRvQ2FydCIsImdldEFsbEZyb21DYXJ0IiwicmVxIiwicmVzIiwiSUQiLCJxdWVyeSIsInByb2R1Y3RpZCIsImNhcnRQcm9kdWN0cyIsInN0YXR1cyIsImpzb24iLCJwcm9kdWN0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/cart/[productid].js\n");

/***/ }),

/***/ "(api)/./data/products.json":
/*!****************************!*\
  !*** ./data/products.json ***!
  \****************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"name":"Earthen Bottle","href":"#","price":"$48","imageSrc":"https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg","imageAlt":"Tall slender porcelain bottle with natural clay textured body and cork stopper.","colors":[{"name":"White","class":"bg-white","selectedClass":"ring-gray-400"},{"name":"Gray","class":"bg-gray-200","selectedClass":"ring-gray-400"},{"name":"Black","class":"bg-gray-900","selectedClass":"ring-gray-900"}],"sizes":[{"name":"XXS","inStock":false},{"name":"XS","inStock":true},{"name":"S","inStock":true},{"name":"M","inStock":true},{"name":"L","inStock":true},{"name":"XL","inStock":true},{"name":"2XL","inStock":true},{"name":"3XL","inStock":true}],"description":"The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: \'Black\'. Need to add an extra pop of color to your outfit? Our white tee has you covered.","highlights":["Hand cut and sewn locally","Dyed with our proprietary colors","Pre-washed & pre-shrunk","Ultra-soft 100% cotton"],"details":"The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming \'Charcoal Gray\' limited release."},{"id":2,"name":"Nomad Tumbler","href":"#","price":"$35","imageSrc":"https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg","imageAlt":"Olive drab green insulated bottle with flared screw l and flat top.","colors":[{"name":"White","class":"bg-white","selectedClass":"ring-gray-400"},{"name":"Gray","class":"bg-gray-200","selectedClass":"ring-gray-400"},{"name":"Black","class":"bg-gray-900","selectedClass":"ring-gray-900"}],"sizes":[{"name":"XXS","inStock":false},{"name":"XS","inStock":true},{"name":"S","inStock":true},{"name":"M","inStock":true},{"name":"L","inStock":true},{"name":"XL","inStock":true},{"name":"2XL","inStock":true},{"name":"3XL","inStock":true}],"description":"The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: \'Black\'. Need to add an extra pop of color to your outfit? Our white tee has you covered.","highlights":["Hand cut and sewn locally","Dyed with our proprietary colors","Pre-washed & pre-shrunk","Ultra-soft 100% cotton"],"details":"The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming \'Charcoal Gray\' limited release."},{"id":3,"name":"Focus Paper Refill","href":"#","price":"$89","imageSrc":"https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg","imageAlt":"Person using a pen to cross a task off a productivity paper card.","colors":[{"name":"White","class":"bg-white","selectedClass":"ring-gray-400"},{"name":"Gray","class":"bg-gray-200","selectedClass":"ring-gray-400"},{"name":"Black","class":"bg-gray-900","selectedClass":"ring-gray-900"}],"sizes":[{"name":"XXS","inStock":false},{"name":"XS","inStock":true},{"name":"S","inStock":true},{"name":"M","inStock":true},{"name":"L","inStock":true},{"name":"XL","inStock":true},{"name":"2XL","inStock":true},{"name":"3XL","inStock":true}],"description":"The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: \'Black\'. Need to add an extra pop of color to your outfit? Our white tee has you covered.","highlights":["Hand cut and sewn locally","Dyed with our proprietary colors","Pre-washed & pre-shrunk","Ultra-soft 100% cotton"],"details":"The 6-Pack includes two black, two white, and two heather gray Basic Tees.Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming \'Charcoal Gray\' limited release."},{"id":4,"name":"Machined Mechanical Pencil","href":"#","price":"$35","imageSrc":"https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg","imageAlt":"Hand holding black machined steel mechanical pencil with brass tip and top.","colors":[{"name":"White","class":"bg-white","selectedClass":"ring-gray-400"},{"name":"Gray","class":"bg-gray-200","selectedClass":"ring-gray-400"},{"name":"Black","class":"bg-gray-900","selectedClass":"ring-gray-900"}],"sizes":[{"name":"XXS","inStock":false},{"name":"XS","inStock":true},{"name":"S","inStock":true},{"name":"M","inStock":true},{"name":"L","inStock":true},{"name":"XL","inStock":true},{"name":"2XL","inStock":true},{"name":"3XL","inStock":true}],"description":"The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: \'Black\'. Need to add an extra pop of color to your outfit? Our white tee has you covered.","highlights":["Hand cut and sewn locally","Dyed with our proprietary colors","Pre-washed & pre-shrunk","Ultra-soft 100% cotton"],"details":"The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming \'Charcoal Gray\' limited release."}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/cart/[productid].js"));
module.exports = __webpack_exports__;

})();