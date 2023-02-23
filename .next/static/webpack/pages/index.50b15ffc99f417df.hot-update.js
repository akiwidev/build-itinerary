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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.tsx\");\n/* harmony import */ var _components_Cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Cart */ \"./components/Cart.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_PurposeDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PurposeDetails */ \"./components/PurposeDetails.tsx\");\n/* harmony import */ var _components_DestinationDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/DestinationDetails */ \"./components/DestinationDetails.tsx\");\n/* harmony import */ var _components_HotelDetails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/HotelDetails */ \"./components/HotelDetails.tsx\");\n/* harmony import */ var _components_ExtraDetails__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ExtraDetails */ \"./components/ExtraDetails.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst HomePage = ()=>{\n    _s();\n    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"PURPOSE\");\n    const menuOptions = [\n        {\n            id: \"PURPOSE\",\n            label: \"Purpose of Travel\"\n        },\n        {\n            id: \"DESTINATION\",\n            label: \"Destination\"\n        },\n        {\n            id: \"HOTELS\",\n            label: \"Hotels\"\n        },\n        {\n            id: \"EXTRAS\",\n            label: \"Extras\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen min-w-[800px] flex flex-col p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                src: \"/sakura.jpeg\",\n                alt: \"Close up picture of a cherry blossom branch\",\n                fill: true,\n                priority: true,\n                className: \"-z-10\"\n            }, void 0, false, {\n                fileName: \"/Users/cheri/code/ck3nn3dy/create-intinerary/pages/index.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__.Header, {}, void 0, false, {\n                fileName: \"/Users/cheri/code/ck3nn3dy/create-intinerary/pages/index.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex grow items-stretch space-x-4 pt-4 overflow-hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-52 shrink-0 text-center p-4 bg-slate-50 opacity-80 rounded space-y-4\",\n                        children: menuOptions.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: `${selected === item.id && \"font-bold bg-rose-100\"} p-2 rounded hover:cursor-pointer`,\n                                onClick: ()=>setSelected(item.id),\n                                children: item.label\n                            }, item.id, false, {\n                                fileName: \"/Users/cheri/code/ck3nn3dy/create-intinerary/pages/index.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/cheri/code/ck3nn3dy/create-intinerary/pages/index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-wrap grow min-w-[300px] p-4 gap-4 bg-slate-50 opacity-80 rounded overflow-auto\",\n                        children: [\n                            selected === \"PURPOSE\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PurposeDetails__WEBPACK_IMPORTED_MODULE_5__.PurposeDetails, {}, void 0, false, {\n                                fileName: \"/Users/cheri/code/ck3nn3dy/create-intinerary/pages/index.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 38\n                            }, undefined),\n                            selected === \"DESTINATION\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DestinationDetails__WEBPACK_IMPORTED_MODULE_6__.DestinationDetails, {}, void 0, false, {\n                                fileName: \"/Users/cheri/code/ck3nn3dy/create-intinerary/pages/index.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 42\n                            }, undefined),\n                            selected === \"HOTELS\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HotelDetails__WEBPACK_IMPORTED_MODULE_7__.HotelDetails, {}, void 0, false, {\n                                fileName: \"/Users/cheri/code/ck3nn3dy/create-intinerary/pages/index.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 37\n                            }, undefined),\n                            selected === \"EXTRAS\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ExtraDetails__WEBPACK_IMPORTED_MODULE_8__.ExtraDetails, {}, void 0, false, {\n                                fileName: \"/Users/cheri/code/ck3nn3dy/create-intinerary/pages/index.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 37\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/cheri/code/ck3nn3dy/create-intinerary/pages/index.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Cart__WEBPACK_IMPORTED_MODULE_2__.Cart, {}, void 0, false, {\n                        fileName: \"/Users/cheri/code/ck3nn3dy/create-intinerary/pages/index.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/cheri/code/ck3nn3dy/create-intinerary/pages/index.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/cheri/code/ck3nn3dy/create-intinerary/pages/index.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomePage, \"1KTMXIf5SgsjzILyMmr20uO3dbM=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQThDO0FBRUw7QUFDVjtBQUNFO0FBQzZCO0FBQ1E7QUFDWjtBQUNBO0FBRzFELE1BQU1RLFdBQVcsSUFBTTs7SUFDckIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFTO0lBRWpELE1BQU1RLGNBQXlCO1FBQzdCO1lBQ0VDLElBQUk7WUFDSkMsT0FBTztRQUNUO1FBQ0E7WUFDRUQsSUFBSTtZQUNKQyxPQUFPO1FBQ1Q7UUFDQTtZQUNFRCxJQUFJO1lBQ0pDLE9BQU87UUFDVDtRQUNBO1lBQ0VELElBQUk7WUFDSkMsT0FBTztRQUNUO0tBQ0Q7SUFFRCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNiLG1EQUFLQTtnQkFDSmMsS0FBSTtnQkFDSkMsS0FBSTtnQkFDSkMsSUFBSTtnQkFDSkMsUUFBUTtnQkFDUkosV0FBVTs7Ozs7OzBCQUVaLDhEQUFDZixzREFBTUE7Ozs7OzBCQUNQLDhEQUFDYztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNaSixZQUFZUyxHQUFHLENBQUNDLENBQUFBLHFCQUNmLDhEQUFDUDtnQ0FBa0JDLFdBQVcsQ0FBQyxFQUFFTixhQUFhWSxLQUFLVCxFQUFFLElBQUksd0JBQXdCLGlDQUFpQyxDQUFDO2dDQUFFVSxTQUFTLElBQU1aLFlBQVlXLEtBQUtULEVBQUU7MENBQUlTLEtBQUtSLEtBQUs7K0JBQTNKUSxLQUFLVCxFQUFFOzs7Ozs7Ozs7O2tDQUdyQiw4REFBQ0U7d0JBQUlDLFdBQVU7OzRCQUNaTixhQUFhLDJCQUFhLDhEQUFDTCxzRUFBY0E7Ozs7OzRCQUN6Q0ssYUFBYSwrQkFBaUIsOERBQUNKLDhFQUFrQkE7Ozs7OzRCQUNqREksYUFBYSwwQkFBWSw4REFBQ0gsa0VBQVlBOzs7Ozs0QkFDdENHLGFBQWEsMEJBQVksOERBQUNGLGtFQUFZQTs7Ozs7Ozs7Ozs7a0NBRXpDLDhEQUFDTixrREFBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWI7R0FoRE1PO0tBQUFBO0FBdUROLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCB7IE1lbnVEZXRhaWxzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9NZW51RGV0YWlscydcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi9jb21wb25lbnRzL0NhcnQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFB1cnBvc2VEZXRhaWxzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9QdXJwb3NlRGV0YWlscyc7XG5pbXBvcnQgeyBEZXN0aW5hdGlvbkRldGFpbHMgfSBmcm9tICcuLi9jb21wb25lbnRzL0Rlc3RpbmF0aW9uRGV0YWlscyc7XG5pbXBvcnQgeyBIb3RlbERldGFpbHMgfSBmcm9tICcuLi9jb21wb25lbnRzL0hvdGVsRGV0YWlscyc7XG5pbXBvcnQgeyBFeHRyYURldGFpbHMgfSBmcm9tICcuLi9jb21wb25lbnRzL0V4dHJhRGV0YWlscyc7XG5cblxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGU8c3RyaW5nPihcIlBVUlBPU0VcIilcblxuICBjb25zdCBtZW51T3B0aW9uczogT3B0aW9uc1tdID0gW1xuICAgIHtcbiAgICAgIGlkOiBcIlBVUlBPU0VcIixcbiAgICAgIGxhYmVsOiAnUHVycG9zZSBvZiBUcmF2ZWwnXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogXCJERVNUSU5BVElPTlwiLFxuICAgICAgbGFiZWw6ICdEZXN0aW5hdGlvbidcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiBcIkhPVEVMU1wiLFxuICAgICAgbGFiZWw6ICdIb3RlbHMnXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogXCJFWFRSQVNcIixcbiAgICAgIGxhYmVsOiAnRXh0cmFzJ1xuICAgIH0sXG4gIF1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gbWluLXctWzgwMHB4XSBmbGV4IGZsZXgtY29sIHAtNFwiPlxuICAgICAgPEltYWdlXG4gICAgICAgIHNyYz0nL3Nha3VyYS5qcGVnJ1xuICAgICAgICBhbHQ9XCJDbG9zZSB1cCBwaWN0dXJlIG9mIGEgY2hlcnJ5IGJsb3Nzb20gYnJhbmNoXCJcbiAgICAgICAgZmlsbFxuICAgICAgICBwcmlvcml0eVxuICAgICAgICBjbGFzc05hbWU9Jy16LTEwJ1xuICAgICAgLz5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGdyb3cgaXRlbXMtc3RyZXRjaCBzcGFjZS14LTQgcHQtNCBvdmVyZmxvdy1oaWRkZW4nPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNTIgc2hyaW5rLTAgdGV4dC1jZW50ZXIgcC00IGJnLXNsYXRlLTUwIG9wYWNpdHktODAgcm91bmRlZCBzcGFjZS15LTRcIj5cbiAgICAgICAgICB7bWVudU9wdGlvbnMubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0uaWR9IGNsYXNzTmFtZT17YCR7c2VsZWN0ZWQgPT09IGl0ZW0uaWQgJiYgXCJmb250LWJvbGQgYmctcm9zZS0xMDBcIn0gcC0yIHJvdW5kZWQgaG92ZXI6Y3Vyc29yLXBvaW50ZXJgfSBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZChpdGVtLmlkKX0+e2l0ZW0ubGFiZWx9PC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdyb3cgbWluLXctWzMwMHB4XSBwLTQgZ2FwLTQgYmctc2xhdGUtNTAgb3BhY2l0eS04MCByb3VuZGVkIG92ZXJmbG93LWF1dG9cIj5cbiAgICAgICAgICB7c2VsZWN0ZWQgPT09IFwiUFVSUE9TRVwiICYmIDxQdXJwb3NlRGV0YWlscyAvPn1cbiAgICAgICAgICB7c2VsZWN0ZWQgPT09IFwiREVTVElOQVRJT05cIiAmJiA8RGVzdGluYXRpb25EZXRhaWxzIC8+fVxuICAgICAgICAgIHtzZWxlY3RlZCA9PT0gXCJIT1RFTFNcIiAmJiA8SG90ZWxEZXRhaWxzIC8+fVxuICAgICAgICAgIHtzZWxlY3RlZCA9PT0gXCJFWFRSQVNcIiAmJiA8RXh0cmFEZXRhaWxzIC8+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPENhcnQgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxudHlwZSBPcHRpb25zID0ge1xuICBpZDogc3RyaW5nLFxuICBsYWJlbDogc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sIm5hbWVzIjpbIkhlYWRlciIsIkNhcnQiLCJJbWFnZSIsInVzZVN0YXRlIiwiUHVycG9zZURldGFpbHMiLCJEZXN0aW5hdGlvbkRldGFpbHMiLCJIb3RlbERldGFpbHMiLCJFeHRyYURldGFpbHMiLCJIb21lUGFnZSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJtZW51T3B0aW9ucyIsImlkIiwibGFiZWwiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJmaWxsIiwicHJpb3JpdHkiLCJtYXAiLCJpdGVtIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});