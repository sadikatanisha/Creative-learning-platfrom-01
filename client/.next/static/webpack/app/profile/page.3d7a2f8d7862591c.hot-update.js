"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/profile/page",{

/***/ "(app-pages-browser)/./redux/features/user/userApi.ts":
/*!****************************************!*\
  !*** ./redux/features/user/userApi.ts ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useEditProfileMutation: function() { return /* binding */ useEditProfileMutation; },\n/* harmony export */   useUpdateAvatarMutation: function() { return /* binding */ useUpdateAvatarMutation; },\n/* harmony export */   useUpdatePasswordMutation: function() { return /* binding */ useUpdatePasswordMutation; },\n/* harmony export */   userApi: function() { return /* binding */ userApi; }\n/* harmony export */ });\n/* harmony import */ var _api_apiSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/apiSlice */ \"(app-pages-browser)/./redux/features/api/apiSlice.ts\");\n\nconst userApi = _api_apiSlice__WEBPACK_IMPORTED_MODULE_0__.apiSlice.injectEndpoints({\n    endpoints: (builder)=>({\n            updateAvatar: builder.mutation({\n                query: (avatar)=>({\n                        url: \"update-user-avatar\",\n                        method: \"PUT\",\n                        body: {\n                            avatar\n                        },\n                        credentials: \"include\"\n                    })\n            }),\n            editProfile: builder.mutation({\n                query: (param)=>{\n                    let { name } = param;\n                    return {\n                        url: \"update-user-info\",\n                        method: \"PUT\",\n                        body: {\n                            name\n                        },\n                        credentials: \"include\"\n                    };\n                }\n            }),\n            updatePassword: builder.mutation({\n                query: (param)=>{\n                    let { oldPassword, newPassword } = param;\n                    return {\n                        url: \"update-user-password\",\n                        method: \"PUT\",\n                        body: {\n                            oldPassword,\n                            newPassword\n                        },\n                        credentials: \"include\"\n                    };\n                }\n            })\n        })\n});\nconst { useUpdateAvatarMutation, useEditProfileMutation, useUpdatePasswordMutation } = userApi;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3JlZHV4L2ZlYXR1cmVzL3VzZXIvdXNlckFwaS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEyQztBQUVwQyxNQUFNQyxVQUFVRCxtREFBUUEsQ0FBQ0UsZUFBZSxDQUFDO0lBQzlDQyxXQUFXLENBQUNDLFVBQWE7WUFDdkJDLGNBQWNELFFBQVFFLFFBQVEsQ0FBQztnQkFDN0JDLE9BQU8sQ0FBQ0MsU0FBWTt3QkFDbEJDLEtBQUs7d0JBQ0xDLFFBQVE7d0JBQ1JDLE1BQU07NEJBQUVIO3dCQUFPO3dCQUNmSSxhQUFhO29CQUNmO1lBQ0Y7WUFDQUMsYUFBYVQsUUFBUUUsUUFBUSxDQUFDO2dCQUM1QkMsT0FBTzt3QkFBQyxFQUFFTyxJQUFJLEVBQUU7MkJBQU07d0JBQ3BCTCxLQUFLO3dCQUNMQyxRQUFRO3dCQUNSQyxNQUFNOzRCQUFFRzt3QkFBSzt3QkFDYkYsYUFBYTtvQkFDZjs7WUFDRjtZQUNBRyxnQkFBZ0JYLFFBQVFFLFFBQVEsQ0FBQztnQkFDL0JDLE9BQU87d0JBQUMsRUFBRVMsV0FBVyxFQUFFQyxXQUFXLEVBQUU7MkJBQU07d0JBQ3hDUixLQUFLO3dCQUNMQyxRQUFRO3dCQUNSQyxNQUFNOzRCQUFFSzs0QkFBYUM7d0JBQVk7d0JBQ2pDTCxhQUFhO29CQUNmOztZQUNGO1FBQ0Y7QUFDRixHQUFHO0FBRUksTUFBTSxFQUNYTSx1QkFBdUIsRUFDdkJDLHNCQUFzQixFQUN0QkMseUJBQXlCLEVBQzFCLEdBQUduQixRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3JlZHV4L2ZlYXR1cmVzL3VzZXIvdXNlckFwaS50cz83OWZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFwaVNsaWNlIH0gZnJvbSBcIi4uL2FwaS9hcGlTbGljZVwiO1xuXG5leHBvcnQgY29uc3QgdXNlckFwaSA9IGFwaVNsaWNlLmluamVjdEVuZHBvaW50cyh7XG4gIGVuZHBvaW50czogKGJ1aWxkZXIpID0+ICh7XG4gICAgdXBkYXRlQXZhdGFyOiBidWlsZGVyLm11dGF0aW9uKHtcbiAgICAgIHF1ZXJ5OiAoYXZhdGFyKSA9PiAoe1xuICAgICAgICB1cmw6IFwidXBkYXRlLXVzZXItYXZhdGFyXCIsXG4gICAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgICAgYm9keTogeyBhdmF0YXIgfSxcbiAgICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiIGFzIGNvbnN0LFxuICAgICAgfSksXG4gICAgfSksXG4gICAgZWRpdFByb2ZpbGU6IGJ1aWxkZXIubXV0YXRpb24oe1xuICAgICAgcXVlcnk6ICh7IG5hbWUgfSkgPT4gKHtcbiAgICAgICAgdXJsOiBcInVwZGF0ZS11c2VyLWluZm9cIixcbiAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgICBib2R5OiB7IG5hbWUgfSxcbiAgICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiIGFzIGNvbnN0LFxuICAgICAgfSksXG4gICAgfSksXG4gICAgdXBkYXRlUGFzc3dvcmQ6IGJ1aWxkZXIubXV0YXRpb24oe1xuICAgICAgcXVlcnk6ICh7IG9sZFBhc3N3b3JkLCBuZXdQYXNzd29yZCB9KSA9PiAoe1xuICAgICAgICB1cmw6IFwidXBkYXRlLXVzZXItcGFzc3dvcmRcIixcbiAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgICBib2R5OiB7IG9sZFBhc3N3b3JkLCBuZXdQYXNzd29yZCB9LFxuICAgICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIgYXMgY29uc3QsXG4gICAgICB9KSxcbiAgICB9KSxcbiAgfSksXG59KTtcblxuZXhwb3J0IGNvbnN0IHtcbiAgdXNlVXBkYXRlQXZhdGFyTXV0YXRpb24sXG4gIHVzZUVkaXRQcm9maWxlTXV0YXRpb24sXG4gIHVzZVVwZGF0ZVBhc3N3b3JkTXV0YXRpb24sXG59ID0gdXNlckFwaTtcbiJdLCJuYW1lcyI6WyJhcGlTbGljZSIsInVzZXJBcGkiLCJpbmplY3RFbmRwb2ludHMiLCJlbmRwb2ludHMiLCJidWlsZGVyIiwidXBkYXRlQXZhdGFyIiwibXV0YXRpb24iLCJxdWVyeSIsImF2YXRhciIsInVybCIsIm1ldGhvZCIsImJvZHkiLCJjcmVkZW50aWFscyIsImVkaXRQcm9maWxlIiwibmFtZSIsInVwZGF0ZVBhc3N3b3JkIiwib2xkUGFzc3dvcmQiLCJuZXdQYXNzd29yZCIsInVzZVVwZGF0ZUF2YXRhck11dGF0aW9uIiwidXNlRWRpdFByb2ZpbGVNdXRhdGlvbiIsInVzZVVwZGF0ZVBhc3N3b3JkTXV0YXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./redux/features/user/userApi.ts\n"));

/***/ })

});