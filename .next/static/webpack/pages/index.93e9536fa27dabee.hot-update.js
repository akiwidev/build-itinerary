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

/***/ "./components/SideMenu.tsx":
/*!*********************************!*\
  !*** ./components/SideMenu.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SideMenu\": function() { return /* binding */ SideMenu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst SideMenu = ()=>{\n    _s();\n    const selectedStyle = \"font-bold bg-slate-300\";\n    const menuStyle = \"p-2 rounded hover:cursor-pointer\";\n    const [isSelected, setIsSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const setSelectedMenu = (e)=>{\n        e.currentTarget.className = selectedStyle + menuStyle;\n        console.log(e.currentTarget.className);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-52 text-center p-4 bg-slate-50 opacity-90 rounded space-y-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: `p-2 rounded hover:cursor-pointer`,\n                onClick: (e)=>setSelectedMenu(e),\n                children: \"Purpose of Travel\"\n            }, void 0, false, {\n                fileName: \"/Users/cheri/code/ck3nn3dy/create-intinerary/components/SideMenu.tsx\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: ``,\n                children: \"Destinations\"\n            }, void 0, false, {\n                fileName: \"/Users/cheri/code/ck3nn3dy/create-intinerary/components/SideMenu.tsx\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: `${isSelected ? selectedStyle : \"\"} `,\n                children: \"Hotels\"\n            }, void 0, false, {\n                fileName: \"/Users/cheri/code/ck3nn3dy/create-intinerary/components/SideMenu.tsx\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: `${isSelected ? selectedStyle : \"\"} `,\n                children: \"Extras\"\n            }, void 0, false, {\n                fileName: \"/Users/cheri/code/ck3nn3dy/create-intinerary/components/SideMenu.tsx\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/cheri/code/ck3nn3dy/create-intinerary/components/SideMenu.tsx\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, undefined);\n};\n_s(SideMenu, \"R3iOEQkZ0YGheBr4l0/jF7RDqd8=\");\n_c = SideMenu;\n\nvar _c;\n$RefreshReg$(_c, \"SideMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGVNZW51LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLFdBQVcsSUFBTTs7SUFFbkIsTUFBTUMsZ0JBQXdCO0lBQzlCLE1BQU1DLFlBQW9CO0lBQzFCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHTCwrQ0FBUUEsQ0FBVSxJQUFJO0lBRTFELE1BQU1NLGtCQUFrQixDQUFDQyxJQUFNO1FBQzNCQSxFQUFFQyxhQUFhLENBQUNDLFNBQVMsR0FBR1AsZ0JBQWdCQztRQUM1Q08sUUFBUUMsR0FBRyxDQUFDSixFQUFFQyxhQUFhLENBQUNDLFNBQVM7SUFDekM7SUFFQSxxQkFDSSw4REFBQ0c7UUFBSUgsV0FBVTs7MEJBQ1gsOERBQUNHO2dCQUFJSCxXQUFXLENBQUMsZ0NBQWdDLENBQUM7Z0JBQUVJLFNBQVMsQ0FBQ04sSUFBTUQsZ0JBQWdCQzswQkFBSTs7Ozs7OzBCQUN4Riw4REFBQ0s7Z0JBQUlILFdBQVcsQ0FBQyxDQUFDOzBCQUFFOzs7Ozs7MEJBQ3BCLDhEQUFDRztnQkFBSUgsV0FBVyxDQUFDLEVBQUVMLGFBQWFGLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDOzBCQUFFOzs7Ozs7MEJBQ3ZELDhEQUFDVTtnQkFBSUgsV0FBVyxDQUFDLEVBQUVMLGFBQWFGLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDOzBCQUFFOzs7Ozs7Ozs7Ozs7QUFHbkU7R0FuQk1EO0tBQUFBO0FBcUJhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2lkZU1lbnUudHN4P2NkNTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuXG5jb25zdCBTaWRlTWVudSA9ICgpID0+IHtcblxuICAgIGNvbnN0IHNlbGVjdGVkU3R5bGU6IHN0cmluZyA9IFwiZm9udC1ib2xkIGJnLXNsYXRlLTMwMFwiXG4gICAgY29uc3QgbWVudVN0eWxlOiBzdHJpbmcgPSBcInAtMiByb3VuZGVkIGhvdmVyOmN1cnNvci1wb2ludGVyXCJcbiAgICBjb25zdCBbaXNTZWxlY3RlZCwgc2V0SXNTZWxlY3RlZF0gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKVxuXG4gICAgY29uc3Qgc2V0U2VsZWN0ZWRNZW51ID0gKGUpID0+IHtcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTmFtZSA9IHNlbGVjdGVkU3R5bGUgKyBtZW51U3R5bGVcbiAgICAgICAgY29uc29sZS5sb2coZS5jdXJyZW50VGFyZ2V0LmNsYXNzTmFtZSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNTIgdGV4dC1jZW50ZXIgcC00IGJnLXNsYXRlLTUwIG9wYWNpdHktOTAgcm91bmRlZCBzcGFjZS15LTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcC0yIHJvdW5kZWQgaG92ZXI6Y3Vyc29yLXBvaW50ZXJgfSBvbkNsaWNrPXsoZSkgPT4gc2V0U2VsZWN0ZWRNZW51KGUpfT5QdXJwb3NlIG9mIFRyYXZlbDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BgfT5EZXN0aW5hdGlvbnM8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtpc1NlbGVjdGVkID8gc2VsZWN0ZWRTdHlsZSA6IFwiXCJ9IGB9PkhvdGVsczwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2lzU2VsZWN0ZWQgPyBzZWxlY3RlZFN0eWxlIDogXCJcIn0gYH0+RXh0cmFzPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IHsgU2lkZU1lbnUgfSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlNpZGVNZW51Iiwic2VsZWN0ZWRTdHlsZSIsIm1lbnVTdHlsZSIsImlzU2VsZWN0ZWQiLCJzZXRJc1NlbGVjdGVkIiwic2V0U2VsZWN0ZWRNZW51IiwiZSIsImN1cnJlbnRUYXJnZXQiLCJjbGFzc05hbWUiLCJjb25zb2xlIiwibG9nIiwiZGl2Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SideMenu.tsx\n"));

/***/ })

});