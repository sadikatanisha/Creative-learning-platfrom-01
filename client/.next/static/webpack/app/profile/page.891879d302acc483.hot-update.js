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

/***/ "(app-pages-browser)/./app/components/Header.tsx":
/*!***********************************!*\
  !*** ./app/components/Header.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _public_assets_default_avatar_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/assets/default-avatar.png */ \"(app-pages-browser)/./public/assets/default-avatar.png\");\n/* harmony import */ var _utils_NavItems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/NavItems */ \"(app-pages-browser)/./app/utils/NavItems.tsx\");\n/* harmony import */ var _utils_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/ThemeSwitcher */ \"(app-pages-browser)/./app/utils/ThemeSwitcher.tsx\");\n/* harmony import */ var _barrel_optimize_names_HiOutlineMenuAlt3_HiOutlineUserCircle_react_icons_hi__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! __barrel_optimize__?names=HiOutlineMenuAlt3,HiOutlineUserCircle!=!react-icons/hi */ \"(app-pages-browser)/./node_modules/react-icons/hi/index.mjs\");\n/* harmony import */ var _utils_CustomModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/CustomModal */ \"(app-pages-browser)/./app/utils/CustomModal.tsx\");\n/* harmony import */ var _Auth_Login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Auth/Login */ \"(app-pages-browser)/./app/components/Auth/Login.tsx\");\n/* harmony import */ var _Auth_SignUp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Auth/SignUp */ \"(app-pages-browser)/./app/components/Auth/SignUp.tsx\");\n/* harmony import */ var _Auth_Verification__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Auth/Verification */ \"(app-pages-browser)/./app/components/Auth/Verification.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _redux_features_auth_authApi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../redux/features/auth/authApi */ \"(app-pages-browser)/./redux/features/auth/authApi.ts\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-hot-toast */ \"(app-pages-browser)/./node_modules/react-hot-toast/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst Header = (param)=>{\n    let { activeItem, route, setRoute, open, setOpen } = param;\n    _s();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [openSidebar, setOpenSidebar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { user } = (0,react_redux__WEBPACK_IMPORTED_MODULE_14__.useSelector)((state)=>state.auth);\n    const { data } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_11__.useSession)();\n    const [socialAuth, { isSuccess, error }] = (0,_redux_features_auth_authApi__WEBPACK_IMPORTED_MODULE_12__.useSocialAuthMutation)();\n    const [logout, setLogout] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const {} = (0,_redux_features_auth_authApi__WEBPACK_IMPORTED_MODULE_12__.useLogoutQuery)(undefined, {\n        skip: !logout ? true : false\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!user && data && data.user) {\n            socialAuth({\n                email: data.user.email,\n                name: data.user.name,\n                avatar: data.user.image\n            });\n        }\n        if (data === null && isSuccess) {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_13__[\"default\"].success(\"Login successful\");\n        }\n        if (data === null) {\n            setLogout(true);\n        }\n    }, [\n        data,\n        user\n    ]);\n    // console.log(user);\n    // console.log(data);\n    if (true) {\n        window.addEventListener(\"scroll\", ()=>{\n            if (window.scrollY > 80) {\n                setActive(true);\n            } else {\n                setActive(false);\n            }\n        });\n    }\n    const handleClose = (e)=>{\n        if (e.target.id === \"screen\") {\n            setOpenSidebar(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(active ? \"dark:bg-opacity-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black fixed top-0 left-0 w-full h-[80px] z-[80] border-b dark:border-[#ffffff1c] shadow-xl transition duration-500\" : \"w-full border-b dark:border-[#ffffff1c] h-[80px] z-[80] dark:shadow\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[95%] 800px:w-[92%] m-auto py-2 h-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full h-[80px] flex items-center justify-between p-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        href: \"/\",\n                                        className: \"text-[25px] font-Poppins font-[500] text-black dark:text-white\",\n                                        children: \"CREATI\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/rahmansadika/Desktop/creati/client/app/components/Header.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/rahmansadika/Desktop/creati/client/app/components/Header.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_NavItems__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            activeItem: activeItem,\n                                            isMobile: false\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rahmansadika/Desktop/creati/client/app/components/Header.tsx\",\n                                            lineNumber: 94,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_6__.ThemeSwitcher, {}, void 0, false, {\n                                            fileName: \"/Users/rahmansadika/Desktop/creati/client/app/components/Header.tsx\",\n                                            lineNumber: 95,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"800px:hidden\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_HiOutlineMenuAlt3_HiOutlineUserCircle_react_icons_hi__WEBPACK_IMPORTED_MODULE_15__.HiOutlineMenuAlt3, {\n                                                size: 25,\n                                                className: \"cursor-pointer dark:text-white text-black\",\n                                                onClick: ()=>setOpenSidebar(true)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rahmansadika/Desktop/creati/client/app/components/Header.tsx\",\n                                                lineNumber: 98,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rahmansadika/Desktop/creati/client/app/components/Header.tsx\",\n                                            lineNumber: 97,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            href: \"/profile\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                width: 30,\n                                                height: 30,\n                                                src: user.avatar ? user.avatar.url : _public_assets_default_avatar_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                                alt: \"profile image\",\n                                                className: \"w-[30px] h-[30px] rounded-full cursor-pointer\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/rahmansadika/Desktop/creati/client/app/components/Header.tsx\",\n                                                lineNumber: 106,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rahmansadika/Desktop/creati/client/app/components/Header.tsx\",\n                                            lineNumber: 105,\n                                            columnNumber: 17\n                                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_HiOutlineMenuAlt3_HiOutlineUserCircle_react_icons_hi__WEBPACK_IMPORTED_MODULE_15__.HiOutlineUserCircle, {\n                                            size: 25,\n                                            className: \"hidden 800px:block cursor-pointer dark:text-white text-black\",\n                                            onClick: ()=>setOpen(true)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/rahmansadika/Desktop/creati/client/app/components/Header.tsx\",\n                                            lineNumber: 115,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/rahmansadika/Desktop/creati/client/app/components/Header.tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/rahmansadika/Desktop/creati/client/app/components/Header.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/rahmansadika/Desktop/creati/client/app/components/Header.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, undefined),\n                    openSidebar && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"fixed w-full h-screen top-0 left-0 z-[99999] dark:bg-[unset] bg-[#00000024]\",\n                        onClick: handleClose,\n                        id: \"screen\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-[70%] fixed z-[99999] h-screen bg-white dark:bg-slate-900 dark:bg-opacity-90 top-0 right-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_NavItems__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    activeItem: activeItem,\n                                    isMobile: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/rahmansadika/Desktop/creati/client/app/components/Header.tsx\",\n                                    lineNumber: 132,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_HiOutlineMenuAlt3_HiOutlineUserCircle_react_icons_hi__WEBPACK_IMPORTED_MODULE_15__.HiOutlineUserCircle, {\n                                    size: 25,\n                                    className: \"cursor-pointer ml-5 my-2 text-black dark:text-white\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rahmansadika/Desktop/creati/client/app/components/Header.tsx\",\n                                    lineNumber: 133,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/rahmansadika/Desktop/creati/client/app/components/Header.tsx\",\n                                    lineNumber: 137,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-[16px] px-2 pl-5 text-black dark:text-white \",\n                                    children: \"Copyrigtht 2024 CREATi\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rahmansadika/Desktop/creati/client/app/components/Header.tsx\",\n                                    lineNumber: 138,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/rahmansadika/Desktop/creati/client/app/components/Header.tsx\",\n                            lineNumber: 131,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/rahmansadika/Desktop/creati/client/app/components/Header.tsx\",\n                        lineNumber: 126,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/rahmansadika/Desktop/creati/client/app/components/Header.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, undefined),\n            route === \"Login\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: open && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_CustomModal__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    open: open,\n                    setOpen: setOpen,\n                    setRoute: setRoute,\n                    activeItem: activeItem,\n                    component: _Auth_Login__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n                }, void 0, false, {\n                    fileName: \"/Users/rahmansadika/Desktop/creati/client/app/components/Header.tsx\",\n                    lineNumber: 148,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false),\n            route === \"Sign-Up\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: open && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_CustomModal__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    open: open,\n                    setOpen: setOpen,\n                    setRoute: setRoute,\n                    activeItem: activeItem,\n                    component: _Auth_SignUp__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n                }, void 0, false, {\n                    fileName: \"/Users/rahmansadika/Desktop/creati/client/app/components/Header.tsx\",\n                    lineNumber: 161,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false),\n            route === \"Verification\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: open && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_CustomModal__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    open: open,\n                    setOpen: setOpen,\n                    setRoute: setRoute,\n                    activeItem: activeItem,\n                    component: _Auth_Verification__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n                }, void 0, false, {\n                    fileName: \"/Users/rahmansadika/Desktop/creati/client/app/components/Header.tsx\",\n                    lineNumber: 174,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rahmansadika/Desktop/creati/client/app/components/Header.tsx\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"N++vM0v9T0ui4MOe51Dp5KUMHEU=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_14__.useSelector,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_11__.useSession,\n        _redux_features_auth_authApi__WEBPACK_IMPORTED_MODULE_12__.useSocialAuthMutation,\n        _redux_features_auth_authApi__WEBPACK_IMPORTED_MODULE_12__.useLogoutQuery\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0hlYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3VEO0FBQzFCO0FBQ0U7QUFDNkI7QUFDbkI7QUFDYztBQUNpQjtBQUN6QjtBQUNkO0FBQ0U7QUFDWTtBQUNMO0FBQ0c7QUFJRjtBQUNQO0FBU3BDLE1BQU1tQixTQUFvQjtRQUFDLEVBQUVDLFVBQVUsRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFOztJQUN2RSxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR3hCLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ3lCLGFBQWFDLGVBQWUsR0FBRzFCLCtDQUFRQSxDQUFDO0lBRS9DLE1BQU0sRUFBRTJCLElBQUksRUFBRSxHQUFHZix5REFBV0EsQ0FBQyxDQUFDZ0IsUUFBZUEsTUFBTUMsSUFBSTtJQUN2RCxNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHakIsNERBQVVBO0lBRTNCLE1BQU0sQ0FBQ2tCLFlBQVksRUFBRUMsU0FBUyxFQUFFQyxLQUFLLEVBQUUsQ0FBQyxHQUFHbkIsb0ZBQXFCQTtJQUVoRSxNQUFNLENBQUNvQixRQUFRQyxVQUFVLEdBQUduQywrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLEVBQUUsR0FBR2UsNkVBQWNBLENBQUNxQixXQUFXO1FBQ25DQyxNQUFNLENBQUNILFNBQVMsT0FBTztJQUN6QjtJQUNBbkMsZ0RBQVNBLENBQUM7UUFDUixJQUFJLENBQUM0QixRQUFRRyxRQUFRQSxLQUFLSCxJQUFJLEVBQUU7WUFDOUJJLFdBQVc7Z0JBQ1RPLE9BQU9SLEtBQUtILElBQUksQ0FBQ1csS0FBSztnQkFDdEJDLE1BQU1ULEtBQUtILElBQUksQ0FBQ1ksSUFBSTtnQkFDcEJwQyxRQUFRMkIsS0FBS0gsSUFBSSxDQUFDYSxLQUFLO1lBQ3pCO1FBQ0Y7UUFDQSxJQUFJVixTQUFTLFFBQVFFLFdBQVc7WUFDOUJoQix3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InNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9IZWFkZXIudHN4Pzg0Y2EiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IGF2YXRhciBmcm9tIFwiLi4vLi4vcHVibGljL2Fzc2V0cy9kZWZhdWx0LWF2YXRhci5wbmdcIjtcbmltcG9ydCBOYXZJdGVtcyBmcm9tIFwiLi4vdXRpbHMvTmF2SXRlbXNcIjtcbmltcG9ydCB7IFRoZW1lU3dpdGNoZXIgfSBmcm9tIFwiLi4vdXRpbHMvVGhlbWVTd2l0Y2hlclwiO1xuaW1wb3J0IHsgSGlPdXRsaW5lTWVudUFsdDMsIEhpT3V0bGluZVVzZXJDaXJjbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvaGlcIjtcbmltcG9ydCBDdXN0b21Nb2RhbCBmcm9tIFwiLi4vdXRpbHMvQ3VzdG9tTW9kYWxcIjtcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9BdXRoL0xvZ2luXCI7XG5pbXBvcnQgU2lnblVwIGZyb20gXCIuL0F1dGgvU2lnblVwXCI7XG5pbXBvcnQgVmVyaWZpY2F0aW9uIGZyb20gXCIuL0F1dGgvVmVyaWZpY2F0aW9uXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7XG4gIHVzZVNvY2lhbEF1dGhNdXRhdGlvbixcbiAgdXNlTG9nb3V0UXVlcnksXG59IGZyb20gXCIuLi8uLi9yZWR1eC9mZWF0dXJlcy9hdXRoL2F1dGhBcGlcIjtcbmltcG9ydCB0b2FzdCBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XG50eXBlIFByb3BzID0ge1xuICBvcGVuOiBib29sZWFuO1xuICBzZXRPcGVuOiAob3BlbjogYm9vbGVhbikgPT4gdm9pZDtcbiAgYWN0aXZlSXRlbTogbnVtYmVyO1xuICByb3V0ZTogc3RyaW5nO1xuICBzZXRSb3V0ZTogKHJvdXRlOiBzdHJpbmcpID0+IHZvaWQ7XG59O1xuXG5jb25zdCBIZWFkZXI6IEZDPFByb3BzPiA9ICh7IGFjdGl2ZUl0ZW0sIHJvdXRlLCBzZXRSb3V0ZSwgb3Blbiwgc2V0T3BlbiB9KSA9PiB7XG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtvcGVuU2lkZWJhciwgc2V0T3BlblNpZGViYXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IHN0YXRlLmF1dGgpO1xuICBjb25zdCB7IGRhdGEgfSA9IHVzZVNlc3Npb24oKTtcblxuICBjb25zdCBbc29jaWFsQXV0aCwgeyBpc1N1Y2Nlc3MsIGVycm9yIH1dID0gdXNlU29jaWFsQXV0aE11dGF0aW9uKCk7XG5cbiAgY29uc3QgW2xvZ291dCwgc2V0TG9nb3V0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qge30gPSB1c2VMb2dvdXRRdWVyeSh1bmRlZmluZWQsIHtcbiAgICBza2lwOiAhbG9nb3V0ID8gdHJ1ZSA6IGZhbHNlLFxuICB9KTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXVzZXIgJiYgZGF0YSAmJiBkYXRhLnVzZXIpIHtcbiAgICAgIHNvY2lhbEF1dGgoe1xuICAgICAgICBlbWFpbDogZGF0YS51c2VyLmVtYWlsLFxuICAgICAgICBuYW1lOiBkYXRhLnVzZXIubmFtZSxcbiAgICAgICAgYXZhdGFyOiBkYXRhLnVzZXIuaW1hZ2UsIC8vYXZhdGFyXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGRhdGEgPT09IG51bGwgJiYgaXNTdWNjZXNzKSB7XG4gICAgICB0b2FzdC5zdWNjZXNzKFwiTG9naW4gc3VjY2Vzc2Z1bFwiKTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YSA9PT0gbnVsbCkge1xuICAgICAgc2V0TG9nb3V0KHRydWUpO1xuICAgIH1cbiAgfSwgW2RhdGEsIHVzZXJdKTtcbiAgLy8gY29uc29sZS5sb2codXNlcik7XG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDgwKSB7XG4gICAgICAgIHNldEFjdGl2ZSh0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldEFjdGl2ZShmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVDbG9zZSA9IChlOiBhbnkpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuaWQgPT09IFwic2NyZWVuXCIpIHtcbiAgICAgIHNldE9wZW5TaWRlYmFyKGZhbHNlKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcmVsYXRpdmVcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICBhY3RpdmVcbiAgICAgICAgICAgID8gXCJkYXJrOmJnLW9wYWNpdHktNTAgZGFyazpiZy1ncmFkaWVudC10by1iIGRhcms6ZnJvbS1ncmF5LTkwMCBkYXJrOnRvLWJsYWNrIGZpeGVkIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC1bODBweF0gei1bODBdIGJvcmRlci1iIGRhcms6Ym9yZGVyLVsjZmZmZmZmMWNdIHNoYWRvdy14bCB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMFwiXG4gICAgICAgICAgICA6IFwidy1mdWxsIGJvcmRlci1iIGRhcms6Ym9yZGVyLVsjZmZmZmZmMWNdIGgtWzgwcHhdIHotWzgwXSBkYXJrOnNoYWRvd1wiXG4gICAgICAgIH1gfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzk1JV0gODAwcHg6dy1bOTIlXSBtLWF1dG8gcHktMiBoLWZ1bGxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLVs4MHB4XSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC0zXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9e1wiL1wifVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtWzI1cHhdIGZvbnQtUG9wcGlucyBmb250LVs1MDBdIHRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIENSRUFUSVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8TmF2SXRlbXMgYWN0aXZlSXRlbT17YWN0aXZlSXRlbX0gaXNNb2JpbGU9e2ZhbHNlfSAvPlxuICAgICAgICAgICAgICA8VGhlbWVTd2l0Y2hlciAvPlxuICAgICAgICAgICAgICB7Lyogb25seSBmb3IgbW9iaWxlICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIjgwMHB4OmhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDxIaU91dGxpbmVNZW51QWx0M1xuICAgICAgICAgICAgICAgICAgc2l6ZT17MjV9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBkYXJrOnRleHQtd2hpdGUgdGV4dC1ibGFja1wiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuU2lkZWJhcih0cnVlKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAge3VzZXIgPyAoXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvcHJvZmlsZVwifT5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzB9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17MzB9XG4gICAgICAgICAgICAgICAgICAgIHNyYz17dXNlci5hdmF0YXIgPyB1c2VyLmF2YXRhci51cmwgOiBhdmF0YXJ9XG4gICAgICAgICAgICAgICAgICAgIGFsdD1cInByb2ZpbGUgaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LVszMHB4XSBoLVszMHB4XSByb3VuZGVkLWZ1bGwgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPEhpT3V0bGluZVVzZXJDaXJjbGVcbiAgICAgICAgICAgICAgICAgIHNpemU9ezI1fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuIDgwMHB4OmJsb2NrIGN1cnNvci1wb2ludGVyIGRhcms6dGV4dC13aGl0ZSB0ZXh0LWJsYWNrXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW4odHJ1ZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIG1vYmlsZSBzaWRlYmFyICovfVxuICAgICAgICB7b3BlblNpZGViYXIgJiYgKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIHctZnVsbCBoLXNjcmVlbiB0b3AtMCBsZWZ0LTAgei1bOTk5OTldIGRhcms6YmctW3Vuc2V0XSBiZy1bIzAwMDAwMDI0XVwiXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgICAgIGlkPVwic2NyZWVuXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzcwJV0gZml4ZWQgei1bOTk5OTldIGgtc2NyZWVuIGJnLXdoaXRlIGRhcms6Ymctc2xhdGUtOTAwIGRhcms6Ymctb3BhY2l0eS05MCB0b3AtMCByaWdodC0wXCI+XG4gICAgICAgICAgICAgIDxOYXZJdGVtcyBhY3RpdmVJdGVtPXthY3RpdmVJdGVtfSBpc01vYmlsZT17dHJ1ZX0gLz5cbiAgICAgICAgICAgICAgPEhpT3V0bGluZVVzZXJDaXJjbGVcbiAgICAgICAgICAgICAgICBzaXplPXsyNX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBtbC01IG15LTIgdGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTZweF0gcHgtMiBwbC01IHRleHQtYmxhY2sgZGFyazp0ZXh0LXdoaXRlIFwiPlxuICAgICAgICAgICAgICAgIENvcHlyaWd0aHQgMjAyNCBDUkVBVGlcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtyb3V0ZSA9PT0gXCJMb2dpblwiICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICB7b3BlbiAmJiAoXG4gICAgICAgICAgICA8Q3VzdG9tTW9kYWxcbiAgICAgICAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgICAgICAgc2V0T3Blbj17c2V0T3Blbn1cbiAgICAgICAgICAgICAgc2V0Um91dGU9e3NldFJvdXRlfVxuICAgICAgICAgICAgICBhY3RpdmVJdGVtPXthY3RpdmVJdGVtfVxuICAgICAgICAgICAgICBjb21wb25lbnQ9e0xvZ2lufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgICB7cm91dGUgPT09IFwiU2lnbi1VcFwiICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICB7b3BlbiAmJiAoXG4gICAgICAgICAgICA8Q3VzdG9tTW9kYWxcbiAgICAgICAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgICAgICAgc2V0T3Blbj17c2V0T3Blbn1cbiAgICAgICAgICAgICAgc2V0Um91dGU9e3NldFJvdXRlfVxuICAgICAgICAgICAgICBhY3RpdmVJdGVtPXthY3RpdmVJdGVtfVxuICAgICAgICAgICAgICBjb21wb25lbnQ9e1NpZ25VcH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgICAge3JvdXRlID09PSBcIlZlcmlmaWNhdGlvblwiICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICB7b3BlbiAmJiAoXG4gICAgICAgICAgICA8Q3VzdG9tTW9kYWxcbiAgICAgICAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgICAgICAgc2V0T3Blbj17c2V0T3Blbn1cbiAgICAgICAgICAgICAgc2V0Um91dGU9e3NldFJvdXRlfVxuICAgICAgICAgICAgICBhY3RpdmVJdGVtPXthY3RpdmVJdGVtfVxuICAgICAgICAgICAgICBjb21wb25lbnQ9e1ZlcmlmaWNhdGlvbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiSW1hZ2UiLCJhdmF0YXIiLCJOYXZJdGVtcyIsIlRoZW1lU3dpdGNoZXIiLCJIaU91dGxpbmVNZW51QWx0MyIsIkhpT3V0bGluZVVzZXJDaXJjbGUiLCJDdXN0b21Nb2RhbCIsIkxvZ2luIiwiU2lnblVwIiwiVmVyaWZpY2F0aW9uIiwidXNlU2VsZWN0b3IiLCJ1c2VTZXNzaW9uIiwidXNlU29jaWFsQXV0aE11dGF0aW9uIiwidXNlTG9nb3V0UXVlcnkiLCJ0b2FzdCIsIkhlYWRlciIsImFjdGl2ZUl0ZW0iLCJyb3V0ZSIsInNldFJvdXRlIiwib3BlbiIsInNldE9wZW4iLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJvcGVuU2lkZWJhciIsInNldE9wZW5TaWRlYmFyIiwidXNlciIsInN0YXRlIiwiYXV0aCIsImRhdGEiLCJzb2NpYWxBdXRoIiwiaXNTdWNjZXNzIiwiZXJyb3IiLCJsb2dvdXQiLCJzZXRMb2dvdXQiLCJ1bmRlZmluZWQiLCJza2lwIiwiZW1haWwiLCJuYW1lIiwiaW1hZ2UiLCJzdWNjZXNzIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbFkiLCJoYW5kbGVDbG9zZSIsImUiLCJ0YXJnZXQiLCJpZCIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJpc01vYmlsZSIsInNpemUiLCJvbkNsaWNrIiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJ1cmwiLCJhbHQiLCJiciIsInAiLCJjb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Header.tsx\n"));

/***/ })

});