"use strict";
(self["webpackChunkheat_pump_ui"] = self["webpackChunkheat_pump_ui"] || []).push([["src_views_Readings_tsx"],{

/***/ "./src/utils/useAsyncPoller.tsx":
/*!**************************************!*\
  !*** ./src/utils/useAsyncPoller.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useAsyncPoller(fn, ms) {
    const runningCount = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
    const timeout = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const mountedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    const next = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((handler) => {
        if (mountedRef.current && runningCount.current === 0) {
            timeout.current = window.setTimeout(handler, ms);
        }
    }, [ms]);
    const run = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
        runningCount.current += 1;
        const result = await fn();
        runningCount.current -= 1;
        next(run);
        return result;
    }, [fn, next]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        mountedRef.current = true;
        (async () => run())();
        return () => {
            mountedRef.current = false;
            window.clearTimeout(timeout.current);
        };
    }, [run]);
    const flush = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
        window.clearTimeout(timeout.current);
        return run();
    }, [run]);
    return flush;
}
/* harmony default export */ __webpack_exports__["default"] = (useAsyncPoller);


/***/ }),

/***/ "./src/views/Readings.tsx":
/*!********************************!*\
  !*** ./src/views/Readings.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Readings; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_useAsyncPoller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/useAsyncPoller */ "./src/utils/useAsyncPoller.tsx");



/* eslint-disable @typescript-eslint/promise-function-async */
const Thermostat = (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_prop-types_index_js"), __webpack_require__.e("vendors-node_modules_mui_system_esm_createTheme_createTheme_js"), __webpack_require__.e("vendors-node_modules_emotion_react_dist_emotion-element-6a883da9_browser_esm_js-node_modules_-3acceb"), __webpack_require__.e("vendors-node_modules_mui_material_styles_createTheme_js"), __webpack_require__.e("vendors-node_modules_mui_styled-engine_GlobalStyles_GlobalStyles_js"), __webpack_require__.e("vendors-node_modules_mui_styled-engine_index_js-node_modules_clsx_dist_clsx_m_js"), __webpack_require__.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-53761c"), __webpack_require__.e("vendors-node_modules_mui_material_utils_createSvgIcon_js-node_modules_mui_material_utils_useC-156513"), __webpack_require__.e("vendors-node_modules_mui_icons-material_utils_createSvgIcon_js-node_modules_babel_runtime_hel-1351c3"), __webpack_require__.e("node_modules_mui_icons-material_Thermostat_js")]).then(__webpack_require__.bind(__webpack_require__, /*! @mui/icons-material/Thermostat */ "./node_modules/@mui/icons-material/Thermostat.js")));
const List = (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_prop-types_index_js"), __webpack_require__.e("vendors-node_modules_mui_system_esm_createTheme_createTheme_js"), __webpack_require__.e("vendors-node_modules_emotion_react_dist_emotion-element-6a883da9_browser_esm_js-node_modules_-3acceb"), __webpack_require__.e("vendors-node_modules_mui_material_styles_createTheme_js"), __webpack_require__.e("vendors-node_modules_mui_styled-engine_GlobalStyles_GlobalStyles_js"), __webpack_require__.e("vendors-node_modules_mui_styled-engine_index_js-node_modules_clsx_dist_clsx_m_js"), __webpack_require__.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-53761c"), __webpack_require__.e("node_modules_mui_material_List_index_js")]).then(__webpack_require__.bind(__webpack_require__, /*! @mui/material/List */ "./node_modules/@mui/material/List/index.js")));
const ListItem = (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_prop-types_index_js"), __webpack_require__.e("vendors-node_modules_mui_system_esm_createTheme_createTheme_js"), __webpack_require__.e("vendors-node_modules_emotion_react_dist_emotion-element-6a883da9_browser_esm_js-node_modules_-3acceb"), __webpack_require__.e("vendors-node_modules_mui_material_styles_createTheme_js"), __webpack_require__.e("vendors-node_modules_mui_styled-engine_GlobalStyles_GlobalStyles_js"), __webpack_require__.e("vendors-node_modules_mui_styled-engine_index_js-node_modules_clsx_dist_clsx_m_js"), __webpack_require__.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-53761c"), __webpack_require__.e("vendors-node_modules_mui_material_ButtonBase_ButtonBase_js"), __webpack_require__.e("vendors-node_modules_mui_material_ListItem_index_js-node_modules_mui_utils_esm_useEventCallback_js")]).then(__webpack_require__.bind(__webpack_require__, /*! @mui/material/ListItem */ "./node_modules/@mui/material/ListItem/index.js")));
const ListItemIcon = (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_prop-types_index_js"), __webpack_require__.e("vendors-node_modules_mui_system_esm_createTheme_createTheme_js"), __webpack_require__.e("vendors-node_modules_emotion_react_dist_emotion-element-6a883da9_browser_esm_js-node_modules_-3acceb"), __webpack_require__.e("vendors-node_modules_mui_material_styles_createTheme_js"), __webpack_require__.e("vendors-node_modules_mui_styled-engine_GlobalStyles_GlobalStyles_js"), __webpack_require__.e("vendors-node_modules_mui_styled-engine_index_js-node_modules_clsx_dist_clsx_m_js"), __webpack_require__.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-53761c"), __webpack_require__.e("node_modules_mui_material_ListItemIcon_index_js")]).then(__webpack_require__.bind(__webpack_require__, /*! @mui/material/ListItemIcon */ "./node_modules/@mui/material/ListItemIcon/index.js")));
const ListItemText = (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_prop-types_index_js"), __webpack_require__.e("vendors-node_modules_mui_system_esm_createTheme_createTheme_js"), __webpack_require__.e("vendors-node_modules_emotion_react_dist_emotion-element-6a883da9_browser_esm_js-node_modules_-3acceb"), __webpack_require__.e("vendors-node_modules_mui_material_styles_createTheme_js"), __webpack_require__.e("vendors-node_modules_mui_styled-engine_GlobalStyles_GlobalStyles_js"), __webpack_require__.e("vendors-node_modules_mui_styled-engine_index_js-node_modules_clsx_dist_clsx_m_js"), __webpack_require__.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-53761c"), __webpack_require__.e("vendors-node_modules_mui_material_ListItemText_index_js")]).then(__webpack_require__.bind(__webpack_require__, /*! @mui/material/ListItemText */ "./node_modules/@mui/material/ListItemText/index.js")));
/* eslint-enable @typescript-eslint/promise-function-async */
function Readings() {
    const [temps, setTemps] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const getTemps = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async () => {
        // TODO: get temps from api
        const res = {
            tank: Math.floor((Math.random() * (110 - 90)) + 90),
            outside: Math.floor((Math.random() * (110 - -15)) - 15),
            inside: Math.floor((Math.random() * (74 - 67)) + 67)
        };
        setTemps(Object.entries(res));
    }, []);
    (0,_utils_useAsyncPoller__WEBPACK_IMPORTED_MODULE_2__["default"])(getTemps, 2000);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(List, { children: temps?.map(([name, temp]) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ListItem, { disablePadding: true, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ListItemIcon, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Thermostat, {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ListItemText, { primary: `${name}: ${temp}` })] }, name))) }));
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3ZpZXdzX1JlYWRpbmdzX3RzeC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXVEO0FBQ3ZEO0FBQ0EseUJBQXlCLDZDQUFNO0FBQy9CLG9CQUFvQiw2Q0FBTTtBQUMxQix1QkFBdUIsNkNBQU07QUFDN0IsaUJBQWlCLGtEQUFXO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxnQkFBZ0Isa0RBQVc7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJLGdEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGtCQUFrQixrREFBVztBQUM3QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSwrREFBZSxjQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQmlDO0FBQ1g7QUFDQztBQUNyRDtBQUNBLG1CQUFtQiwyQ0FBSSxPQUFPLHFxQ0FBd0M7QUFDdEUsYUFBYSwyQ0FBSSxPQUFPLCs0QkFBNEI7QUFDcEQsaUJBQWlCLDJDQUFJLE9BQU8sdWlDQUFnQztBQUM1RCxxQkFBcUIsMkNBQUksT0FBTyx1NkJBQW9DO0FBQ3BFLHFCQUFxQiwyQ0FBSSxPQUFPLCs2QkFBb0M7QUFDcEU7QUFDZTtBQUNmLDhCQUE4QiwrQ0FBUTtBQUN0QyxxQkFBcUIsa0RBQVc7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSxpRUFBYztBQUNsQixZQUFZLHNEQUFJLFNBQVMsd0NBQXdDLHVEQUFLLGFBQWEsaUNBQWlDLHNEQUFJLGlCQUFpQixVQUFVLHNEQUFJLGVBQWUsR0FBRyxHQUFHLHNEQUFJLGlCQUFpQixZQUFZLEtBQUssSUFBSSxLQUFLLEdBQUcsSUFBSSxXQUFXO0FBQzdPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVhdC1wdW1wLXVpLy4vc3JjL3V0aWxzL3VzZUFzeW5jUG9sbGVyLnRzeCIsIndlYnBhY2s6Ly9oZWF0LXB1bXAtdWkvLi9zcmMvdmlld3MvUmVhZGluZ3MudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmZ1bmN0aW9uIHVzZUFzeW5jUG9sbGVyKGZuLCBtcykge1xuICAgIGNvbnN0IHJ1bm5pbmdDb3VudCA9IHVzZVJlZigwKTtcbiAgICBjb25zdCB0aW1lb3V0ID0gdXNlUmVmKCk7XG4gICAgY29uc3QgbW91bnRlZFJlZiA9IHVzZVJlZihmYWxzZSk7XG4gICAgY29uc3QgbmV4dCA9IHVzZUNhbGxiYWNrKChoYW5kbGVyKSA9PiB7XG4gICAgICAgIGlmIChtb3VudGVkUmVmLmN1cnJlbnQgJiYgcnVubmluZ0NvdW50LmN1cnJlbnQgPT09IDApIHtcbiAgICAgICAgICAgIHRpbWVvdXQuY3VycmVudCA9IHdpbmRvdy5zZXRUaW1lb3V0KGhhbmRsZXIsIG1zKTtcbiAgICAgICAgfVxuICAgIH0sIFttc10pO1xuICAgIGNvbnN0IHJ1biA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgcnVubmluZ0NvdW50LmN1cnJlbnQgKz0gMTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZm4oKTtcbiAgICAgICAgcnVubmluZ0NvdW50LmN1cnJlbnQgLT0gMTtcbiAgICAgICAgbmV4dChydW4pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sIFtmbiwgbmV4dF0pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIG1vdW50ZWRSZWYuY3VycmVudCA9IHRydWU7XG4gICAgICAgIChhc3luYyAoKSA9PiBydW4oKSkoKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIG1vdW50ZWRSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lb3V0LmN1cnJlbnQpO1xuICAgICAgICB9O1xuICAgIH0sIFtydW5dKTtcbiAgICBjb25zdCBmbHVzaCA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lb3V0LmN1cnJlbnQpO1xuICAgICAgICByZXR1cm4gcnVuKCk7XG4gICAgfSwgW3J1bl0pO1xuICAgIHJldHVybiBmbHVzaDtcbn1cbmV4cG9ydCBkZWZhdWx0IHVzZUFzeW5jUG9sbGVyO1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgbGF6eSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VBc3luY1BvbGxlciBmcm9tICcuLi91dGlscy91c2VBc3luY1BvbGxlcic7XG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJvbWlzZS1mdW5jdGlvbi1hc3luYyAqL1xuY29uc3QgVGhlcm1vc3RhdCA9IGxhenkoKCkgPT4gaW1wb3J0KCdAbXVpL2ljb25zLW1hdGVyaWFsL1RoZXJtb3N0YXQnKSk7XG5jb25zdCBMaXN0ID0gbGF6eSgoKSA9PiBpbXBvcnQoJ0BtdWkvbWF0ZXJpYWwvTGlzdCcpKTtcbmNvbnN0IExpc3RJdGVtID0gbGF6eSgoKSA9PiBpbXBvcnQoJ0BtdWkvbWF0ZXJpYWwvTGlzdEl0ZW0nKSk7XG5jb25zdCBMaXN0SXRlbUljb24gPSBsYXp5KCgpID0+IGltcG9ydCgnQG11aS9tYXRlcmlhbC9MaXN0SXRlbUljb24nKSk7XG5jb25zdCBMaXN0SXRlbVRleHQgPSBsYXp5KCgpID0+IGltcG9ydCgnQG11aS9tYXRlcmlhbC9MaXN0SXRlbVRleHQnKSk7XG4vKiBlc2xpbnQtZW5hYmxlIEB0eXBlc2NyaXB0LWVzbGludC9wcm9taXNlLWZ1bmN0aW9uLWFzeW5jICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWFkaW5ncygpIHtcbiAgICBjb25zdCBbdGVtcHMsIHNldFRlbXBzXSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgZ2V0VGVtcHMgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgICAgIC8vIFRPRE86IGdldCB0ZW1wcyBmcm9tIGFwaVxuICAgICAgICBjb25zdCByZXMgPSB7XG4gICAgICAgICAgICB0YW5rOiBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogKDExMCAtIDkwKSkgKyA5MCksXG4gICAgICAgICAgICBvdXRzaWRlOiBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogKDExMCAtIC0xNSkpIC0gMTUpLFxuICAgICAgICAgICAgaW5zaWRlOiBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogKDc0IC0gNjcpKSArIDY3KVxuICAgICAgICB9O1xuICAgICAgICBzZXRUZW1wcyhPYmplY3QuZW50cmllcyhyZXMpKTtcbiAgICB9LCBbXSk7XG4gICAgdXNlQXN5bmNQb2xsZXIoZ2V0VGVtcHMsIDIwMDApO1xuICAgIHJldHVybiAoX2pzeChMaXN0LCB7IGNoaWxkcmVuOiB0ZW1wcz8ubWFwKChbbmFtZSwgdGVtcF0pID0+IChfanN4cyhMaXN0SXRlbSwgeyBkaXNhYmxlUGFkZGluZzogdHJ1ZSwgY2hpbGRyZW46IFtfanN4KExpc3RJdGVtSWNvbiwgeyBjaGlsZHJlbjogX2pzeChUaGVybW9zdGF0LCB7fSkgfSksIF9qc3goTGlzdEl0ZW1UZXh0LCB7IHByaW1hcnk6IGAke25hbWV9OiAke3RlbXB9YCB9KV0gfSwgbmFtZSkpKSB9KSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=