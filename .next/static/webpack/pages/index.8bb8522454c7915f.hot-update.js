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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.tsx\");\n/* harmony import */ var _components_MenuDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MenuDetails */ \"./components/MenuDetails.tsx\");\n/* harmony import */ var _components_Cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Cart */ \"./components/Cart.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst HomePage = ()=>{\n    _s();\n    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"PURPOSE\");\n    const menuOptions = [\n        {\n            id: \"PURPOSE\",\n            label: \"Purpose of Travel\"\n        },\n        {\n            id: \"DESTINATION\",\n            label: \"Destination\"\n        },\n        {\n            id: \"HOTELS\",\n            label: \"Hotels\"\n        },\n        {\n            id: \"EXTRAS\",\n            label: \"Extras\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen flex flex-col p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                src: \"/sakura.jpeg\",\n                alt: \"Picture of a Japanese tori gate in the water\",\n                fill: true,\n                priority: true,\n                className: \"-z-10\"\n            }, void 0, false, {\n                fileName: \"/Users/cheri/code/ck3nn3dy/create-intinerary/pages/index.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__.Header, {}, void 0, false, {\n                fileName: \"/Users/cheri/code/ck3nn3dy/create-intinerary/pages/index.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex grow items-stretch space-x-4 pt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-52 text-center p-4 bg-slate-50 opacity-50 rounded space-y-4\",\n                        children: menuOptions.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: `${selected === item.id && \"font-bold bg-slate-300\"} p-2 rounded hover:cursor-pointer`,\n                                onClick: ()=>setSelected(item.id),\n                                children: item.label\n                            }, item.id, false, {\n                                fileName: \"/Users/cheri/code/ck3nn3dy/create-intinerary/pages/index.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/cheri/code/ck3nn3dy/create-intinerary/pages/index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MenuDetails__WEBPACK_IMPORTED_MODULE_2__.MenuDetails, {\n                        selectedItem: selected\n                    }, void 0, false, {\n                        fileName: \"/Users/cheri/code/ck3nn3dy/create-intinerary/pages/index.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Cart__WEBPACK_IMPORTED_MODULE_3__.Cart, {}, void 0, false, {\n                        fileName: \"/Users/cheri/code/ck3nn3dy/create-intinerary/pages/index.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/cheri/code/ck3nn3dy/create-intinerary/pages/index.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/cheri/code/ck3nn3dy/create-intinerary/pages/index.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomePage, \"1KTMXIf5SgsjzILyMmr20uO3dbM=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQThDO0FBQ1M7QUFDZDtBQUNWO0FBQ0U7QUFHakMsTUFBTUssV0FBVyxJQUFNOztJQUNyQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0gsK0NBQVFBLENBQVM7SUFFakQsTUFBTUksY0FBeUI7UUFDN0I7WUFDRUMsSUFBSTtZQUNKQyxPQUFPO1FBQ1Q7UUFDQTtZQUNFRCxJQUFJO1lBQ0pDLE9BQU87UUFDVDtRQUNBO1lBQ0VELElBQUk7WUFDSkMsT0FBTztRQUNUO1FBQ0E7WUFDRUQsSUFBSTtZQUNKQyxPQUFPO1FBQ1Q7S0FDRDtJQUVELHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ1QsbURBQUtBO2dCQUNKVSxLQUFJO2dCQUNKQyxLQUFJO2dCQUNKQyxJQUFJO2dCQUNKQyxRQUFRO2dCQUNSSixXQUFVOzs7Ozs7MEJBRVosOERBQUNaLHNEQUFNQTs7Ozs7MEJBQ1AsOERBQUNXO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1pKLFlBQVlTLEdBQUcsQ0FBQ0MsQ0FBQUEscUJBQ2YsOERBQUNQO2dDQUFrQkMsV0FBVyxDQUFDLEVBQUVOLGFBQWFZLEtBQUtULEVBQUUsSUFBSSx5QkFBeUIsaUNBQWlDLENBQUM7Z0NBQUVVLFNBQVMsSUFBTVosWUFBWVcsS0FBS1QsRUFBRTswQ0FBSVMsS0FBS1IsS0FBSzsrQkFBNUpRLEtBQUtULEVBQUU7Ozs7Ozs7Ozs7a0NBR3JCLDhEQUFDUixnRUFBV0E7d0JBQUNtQixjQUFjZDs7Ozs7O2tDQUMzQiw4REFBQ0osa0RBQUlBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUliO0dBM0NNRztLQUFBQTtBQWtETiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgeyBNZW51RGV0YWlscyB9IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudURldGFpbHMnXG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9DYXJ0J1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cblxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGU8c3RyaW5nPihcIlBVUlBPU0VcIilcblxuICBjb25zdCBtZW51T3B0aW9uczogT3B0aW9uc1tdID0gW1xuICAgIHtcbiAgICAgIGlkOiBcIlBVUlBPU0VcIixcbiAgICAgIGxhYmVsOiAnUHVycG9zZSBvZiBUcmF2ZWwnXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogXCJERVNUSU5BVElPTlwiLFxuICAgICAgbGFiZWw6ICdEZXN0aW5hdGlvbidcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiBcIkhPVEVMU1wiLFxuICAgICAgbGFiZWw6ICdIb3RlbHMnXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogXCJFWFRSQVNcIixcbiAgICAgIGxhYmVsOiAnRXh0cmFzJ1xuICAgIH0sXG4gIF1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gZmxleCBmbGV4LWNvbCBwLTRcIj5cbiAgICAgIDxJbWFnZVxuICAgICAgICBzcmM9Jy9zYWt1cmEuanBlZydcbiAgICAgICAgYWx0PVwiUGljdHVyZSBvZiBhIEphcGFuZXNlIHRvcmkgZ2F0ZSBpbiB0aGUgd2F0ZXJcIlxuICAgICAgICBmaWxsXG4gICAgICAgIHByaW9yaXR5XG4gICAgICAgIGNsYXNzTmFtZT0nLXotMTAnXG4gICAgICAvPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZ3JvdyBpdGVtcy1zdHJldGNoIHNwYWNlLXgtNCBwdC00Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTUyIHRleHQtY2VudGVyIHAtNCBiZy1zbGF0ZS01MCBvcGFjaXR5LTUwIHJvdW5kZWQgc3BhY2UteS00XCI+XG4gICAgICAgICAge21lbnVPcHRpb25zLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLmlkfSBjbGFzc05hbWU9e2Ake3NlbGVjdGVkID09PSBpdGVtLmlkICYmIFwiZm9udC1ib2xkIGJnLXNsYXRlLTMwMFwifSBwLTIgcm91bmRlZCBob3ZlcjpjdXJzb3ItcG9pbnRlcmB9IG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkKGl0ZW0uaWQpfT57aXRlbS5sYWJlbH08L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxNZW51RGV0YWlscyBzZWxlY3RlZEl0ZW09e3NlbGVjdGVkfSAvPlxuICAgICAgICA8Q2FydCAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG50eXBlIE9wdGlvbnMgPSB7XG4gIGlkOiBzdHJpbmcsXG4gIGxhYmVsOiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwibmFtZXMiOlsiSGVhZGVyIiwiTWVudURldGFpbHMiLCJDYXJ0IiwiSW1hZ2UiLCJ1c2VTdGF0ZSIsIkhvbWVQYWdlIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsIm1lbnVPcHRpb25zIiwiaWQiLCJsYWJlbCIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsImZpbGwiLCJwcmlvcml0eSIsIm1hcCIsIml0ZW0iLCJvbkNsaWNrIiwic2VsZWN0ZWRJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});