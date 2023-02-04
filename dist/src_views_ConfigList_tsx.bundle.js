"use strict";
(self["webpackChunkheat_pump_ui"] = self["webpackChunkheat_pump_ui"] || []).push([["src_views_ConfigList_tsx"],{

/***/ "./src/state/atoms.tsx":
/*!*****************************!*\
  !*** ./src/state/atoms.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "refreshConfig": function() { return /* binding */ refreshConfig; },
/* harmony export */   "refreshConfigList": function() { return /* binding */ refreshConfigList; },
/* harmony export */   "selectedId": function() { return /* binding */ selectedId; }
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/index.js");

const selectedId = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: 'selectedId',
    default: ''
});
const refreshConfig = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: 'refreshConfig',
    default: 0
});
const refreshConfigList = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: 'refreshConfigList',
    default: 0
});


/***/ }),

/***/ "./src/state/selectors.tsx":
/*!*********************************!*\
  !*** ./src/state/selectors.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activeId": function() { return /* binding */ activeId; },
/* harmony export */   "configListState": function() { return /* binding */ configListState; },
/* harmony export */   "configState": function() { return /* binding */ configState; }
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/index.js");
/* harmony import */ var _utils_crud__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/crud */ "./src/utils/crud.tsx");
/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./atoms */ "./src/state/atoms.tsx");



const activeId = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.selector)({
    key: 'activeId',
    async get({ get }) {
        const configs = get(configListState);
        const id = configs.find(conf => conf.active)._id;
        return id;
    }
});
const configState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.selector)({
    key: 'configState',
    async get({ get }) {
        get(_atoms__WEBPACK_IMPORTED_MODULE_2__.refreshConfig);
        const sid = get(_atoms__WEBPACK_IMPORTED_MODULE_2__.selectedId);
        const defaultConfig = {
            name: '',
            setpoint: 0,
            tempdifferential: 0,
            aparam: 0,
            bparam: 0,
            cparam: 0,
            scale: 0,
            active: false,
            _id: 'new'
        };
        console.log('selected id:', sid);
        if (sid) {
            if (sid === 'new') {
                return defaultConfig;
            }
            try {
                return await (0,_utils_crud__WEBPACK_IMPORTED_MODULE_1__.getOne)(sid);
            }
            catch (error) {
                console.error(error);
            }
        }
        const aid = get(activeId);
        try {
            return await (0,_utils_crud__WEBPACK_IMPORTED_MODULE_1__.getOne)(aid);
        }
        catch (error) {
            console.error(error);
        }
        return defaultConfig;
    },
    set({ set }) {
        set(_atoms__WEBPACK_IMPORTED_MODULE_2__.refreshConfig, i => i + 1);
    }
});
const configListState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.selector)({
    key: 'configListState',
    async get({ get }) {
        get(_atoms__WEBPACK_IMPORTED_MODULE_2__.refreshConfigList);
        get(_atoms__WEBPACK_IMPORTED_MODULE_2__.refreshConfig);
        return (0,_utils_crud__WEBPACK_IMPORTED_MODULE_1__.getMany)();
    },
    set({ set }) {
        set(_atoms__WEBPACK_IMPORTED_MODULE_2__.refreshConfigList, i => i + 1);
    }
});


/***/ }),

/***/ "./src/utils/crud.tsx":
/*!****************************!*\
  !*** ./src/utils/crud.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activate": function() { return /* binding */ activate; },
/* harmony export */   "create": function() { return /* binding */ create; },
/* harmony export */   "del": function() { return /* binding */ del; },
/* harmony export */   "getMany": function() { return /* binding */ getMany; },
/* harmony export */   "getOne": function() { return /* binding */ getOne; },
/* harmony export */   "update": function() { return /* binding */ update; }
/* harmony export */ });
const url = 'http://localhost:8080';
async function update(body) {
    console.log(body);
    await fetch(`${url}/config/${body._id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(body)
    });
}
async function getOne(_id) {
    const res = await fetch(`${url}/config/${_id}`);
    if (res.status >= 400) {
        console.error(res.statusText);
        throw new Error(res.status.toString());
    }
    return res.json();
}
async function getMany() {
    const res = await fetch(`${url}/config`);
    return res.json();
}
async function create(body) {
    console.log(body);
    const res = await fetch(`${url}/config`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    return res.text();
}
async function del(_id) {
    console.log(`deleting ${_id}`);
    await fetch(`${url}/config/${_id}`, {
        method: 'DELETE'
    });
}
async function activate(_id) {
    console.log(`activating ${_id}`);
    await fetch(`${url}/config/activate/${_id}`, {
        method: 'POST'
    });
}


/***/ }),

/***/ "./src/views/ConfigList.tsx":
/*!**********************************!*\
  !*** ./src/views/ConfigList.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Configs; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/index.js");
/* harmony import */ var _state_atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/atoms */ "./src/state/atoms.tsx");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state/selectors */ "./src/state/selectors.tsx");
/* harmony import */ var _utils_crud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/crud */ "./src/utils/crud.tsx");







/* eslint-disable @typescript-eslint/promise-function-async */
const TableContainer = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_prop-types_index_js"), __webpack_require__.e("vendors-node_modules_mui_system_esm_createTheme_createTheme_js"), __webpack_require__.e("vendors-node_modules_emotion_react_dist_emotion-element-6a883da9_browser_esm_js-node_modules_-3acceb"), __webpack_require__.e("vendors-node_modules_mui_material_styles_createTheme_js"), __webpack_require__.e("vendors-node_modules_mui_styled-engine_GlobalStyles_GlobalStyles_js"), __webpack_require__.e("vendors-node_modules_mui_styled-engine_index_js-node_modules_clsx_dist_clsx_m_js"), __webpack_require__.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-53761c"), __webpack_require__.e("node_modules_mui_material_TableContainer_index_js")]).then(__webpack_require__.bind(__webpack_require__, /*! @mui/material/TableContainer */ "./node_modules/@mui/material/TableContainer/index.js")));
const Table = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_prop-types_index_js"), __webpack_require__.e("vendors-node_modules_mui_system_esm_createTheme_createTheme_js"), __webpack_require__.e("vendors-node_modules_emotion_react_dist_emotion-element-6a883da9_browser_esm_js-node_modules_-3acceb"), __webpack_require__.e("vendors-node_modules_mui_material_styles_createTheme_js"), __webpack_require__.e("vendors-node_modules_mui_styled-engine_GlobalStyles_GlobalStyles_js"), __webpack_require__.e("vendors-node_modules_mui_styled-engine_index_js-node_modules_clsx_dist_clsx_m_js"), __webpack_require__.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-53761c"), __webpack_require__.e("node_modules_mui_material_Table_index_js")]).then(__webpack_require__.bind(__webpack_require__, /*! @mui/material/Table */ "./node_modules/@mui/material/Table/index.js")));
const TableHead = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_prop-types_index_js"), __webpack_require__.e("vendors-node_modules_mui_system_esm_createTheme_createTheme_js"), __webpack_require__.e("vendors-node_modules_emotion_react_dist_emotion-element-6a883da9_browser_esm_js-node_modules_-3acceb"), __webpack_require__.e("vendors-node_modules_mui_material_styles_createTheme_js"), __webpack_require__.e("vendors-node_modules_mui_styled-engine_GlobalStyles_GlobalStyles_js"), __webpack_require__.e("vendors-node_modules_mui_styled-engine_index_js-node_modules_clsx_dist_clsx_m_js"), __webpack_require__.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-53761c"), __webpack_require__.e("node_modules_mui_material_TableHead_index_js")]).then(__webpack_require__.bind(__webpack_require__, /*! @mui/material/TableHead */ "./node_modules/@mui/material/TableHead/index.js")));
const TableBody = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_prop-types_index_js"), __webpack_require__.e("vendors-node_modules_mui_system_esm_createTheme_createTheme_js"), __webpack_require__.e("vendors-node_modules_emotion_react_dist_emotion-element-6a883da9_browser_esm_js-node_modules_-3acceb"), __webpack_require__.e("vendors-node_modules_mui_material_styles_createTheme_js"), __webpack_require__.e("vendors-node_modules_mui_styled-engine_GlobalStyles_GlobalStyles_js"), __webpack_require__.e("vendors-node_modules_mui_styled-engine_index_js-node_modules_clsx_dist_clsx_m_js"), __webpack_require__.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-53761c"), __webpack_require__.e("node_modules_mui_material_TableBody_index_js")]).then(__webpack_require__.bind(__webpack_require__, /*! @mui/material/TableBody */ "./node_modules/@mui/material/TableBody/index.js")));
const TableRow = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_prop-types_index_js"), __webpack_require__.e("vendors-node_modules_mui_system_esm_createTheme_createTheme_js"), __webpack_require__.e("vendors-node_modules_emotion_react_dist_emotion-element-6a883da9_browser_esm_js-node_modules_-3acceb"), __webpack_require__.e("vendors-node_modules_mui_material_styles_createTheme_js"), __webpack_require__.e("vendors-node_modules_mui_styled-engine_GlobalStyles_GlobalStyles_js"), __webpack_require__.e("vendors-node_modules_mui_styled-engine_index_js-node_modules_clsx_dist_clsx_m_js"), __webpack_require__.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-53761c"), __webpack_require__.e("node_modules_mui_material_TableRow_index_js")]).then(__webpack_require__.bind(__webpack_require__, /*! @mui/material/TableRow */ "./node_modules/@mui/material/TableRow/index.js")));
const TableCell = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_prop-types_index_js"), __webpack_require__.e("vendors-node_modules_mui_system_esm_createTheme_createTheme_js"), __webpack_require__.e("vendors-node_modules_emotion_react_dist_emotion-element-6a883da9_browser_esm_js-node_modules_-3acceb"), __webpack_require__.e("vendors-node_modules_mui_material_styles_createTheme_js"), __webpack_require__.e("vendors-node_modules_mui_styled-engine_GlobalStyles_GlobalStyles_js"), __webpack_require__.e("vendors-node_modules_mui_styled-engine_index_js-node_modules_clsx_dist_clsx_m_js"), __webpack_require__.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-53761c"), __webpack_require__.e("node_modules_mui_material_TableCell_index_js")]).then(__webpack_require__.bind(__webpack_require__, /*! @mui/material/TableCell */ "./node_modules/@mui/material/TableCell/index.js")));
const Button = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_prop-types_index_js"), __webpack_require__.e("vendors-node_modules_mui_system_esm_createTheme_createTheme_js"), __webpack_require__.e("vendors-node_modules_emotion_react_dist_emotion-element-6a883da9_browser_esm_js-node_modules_-3acceb"), __webpack_require__.e("vendors-node_modules_mui_material_styles_createTheme_js"), __webpack_require__.e("vendors-node_modules_mui_styled-engine_GlobalStyles_GlobalStyles_js"), __webpack_require__.e("vendors-node_modules_mui_styled-engine_index_js-node_modules_clsx_dist_clsx_m_js"), __webpack_require__.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-53761c"), __webpack_require__.e("vendors-node_modules_mui_material_ButtonBase_ButtonBase_js"), __webpack_require__.e("vendors-node_modules_mui_material_Button_index_js-node_modules_mui_material_utils_useForkRef_-f1053d")]).then(__webpack_require__.bind(__webpack_require__, /*! @mui/material/Button */ "./node_modules/@mui/material/Button/index.js")));
const Checkbox = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_prop-types_index_js"), __webpack_require__.e("vendors-node_modules_mui_system_esm_createTheme_createTheme_js"), __webpack_require__.e("vendors-node_modules_emotion_react_dist_emotion-element-6a883da9_browser_esm_js-node_modules_-3acceb"), __webpack_require__.e("vendors-node_modules_mui_material_styles_createTheme_js"), __webpack_require__.e("vendors-node_modules_mui_styled-engine_GlobalStyles_GlobalStyles_js"), __webpack_require__.e("vendors-node_modules_mui_styled-engine_index_js-node_modules_clsx_dist_clsx_m_js"), __webpack_require__.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-53761c"), __webpack_require__.e("vendors-node_modules_mui_material_utils_createSvgIcon_js-node_modules_mui_material_utils_useC-156513"), __webpack_require__.e("vendors-node_modules_mui_material_ButtonBase_ButtonBase_js"), __webpack_require__.e("vendors-node_modules_mui_material_Checkbox_index_js")]).then(__webpack_require__.bind(__webpack_require__, /*! @mui/material/Checkbox */ "./node_modules/@mui/material/Checkbox/index.js")));
const DeleteIcon = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_prop-types_index_js"), __webpack_require__.e("vendors-node_modules_mui_system_esm_createTheme_createTheme_js"), __webpack_require__.e("vendors-node_modules_emotion_react_dist_emotion-element-6a883da9_browser_esm_js-node_modules_-3acceb"), __webpack_require__.e("vendors-node_modules_mui_material_styles_createTheme_js"), __webpack_require__.e("vendors-node_modules_mui_styled-engine_GlobalStyles_GlobalStyles_js"), __webpack_require__.e("vendors-node_modules_mui_styled-engine_index_js-node_modules_clsx_dist_clsx_m_js"), __webpack_require__.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-53761c"), __webpack_require__.e("vendors-node_modules_mui_material_utils_createSvgIcon_js-node_modules_mui_material_utils_useC-156513"), __webpack_require__.e("vendors-node_modules_mui_icons-material_utils_createSvgIcon_js-node_modules_babel_runtime_hel-1351c3"), __webpack_require__.e("node_modules_mui_icons-material_Delete_js")]).then(__webpack_require__.bind(__webpack_require__, /*! @mui/icons-material/Delete */ "./node_modules/@mui/icons-material/Delete.js")));
const AddIcon = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_prop-types_index_js"), __webpack_require__.e("vendors-node_modules_mui_system_esm_createTheme_createTheme_js"), __webpack_require__.e("vendors-node_modules_emotion_react_dist_emotion-element-6a883da9_browser_esm_js-node_modules_-3acceb"), __webpack_require__.e("vendors-node_modules_mui_material_styles_createTheme_js"), __webpack_require__.e("vendors-node_modules_mui_styled-engine_GlobalStyles_GlobalStyles_js"), __webpack_require__.e("vendors-node_modules_mui_styled-engine_index_js-node_modules_clsx_dist_clsx_m_js"), __webpack_require__.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-53761c"), __webpack_require__.e("vendors-node_modules_mui_material_utils_createSvgIcon_js-node_modules_mui_material_utils_useC-156513"), __webpack_require__.e("vendors-node_modules_mui_icons-material_utils_createSvgIcon_js-node_modules_babel_runtime_hel-1351c3"), __webpack_require__.e("node_modules_mui_icons-material_Add_js")]).then(__webpack_require__.bind(__webpack_require__, /*! @mui/icons-material/Add */ "./node_modules/@mui/icons-material/Add.js")));
const IconButton = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_prop-types_index_js"), __webpack_require__.e("vendors-node_modules_mui_system_esm_createTheme_createTheme_js"), __webpack_require__.e("vendors-node_modules_emotion_react_dist_emotion-element-6a883da9_browser_esm_js-node_modules_-3acceb"), __webpack_require__.e("vendors-node_modules_mui_material_styles_createTheme_js"), __webpack_require__.e("vendors-node_modules_mui_styled-engine_GlobalStyles_GlobalStyles_js"), __webpack_require__.e("vendors-node_modules_mui_styled-engine_index_js-node_modules_clsx_dist_clsx_m_js"), __webpack_require__.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-53761c"), __webpack_require__.e("vendors-node_modules_mui_material_ButtonBase_ButtonBase_js"), __webpack_require__.e("vendors-node_modules_mui_material_IconButton_index_js-node_modules_mui_material_utils_useFork-1f6f3e")]).then(__webpack_require__.bind(__webpack_require__, /*! @mui/material/IconButton */ "./node_modules/@mui/material/IconButton/index.js")));
/* eslint-enable @typescript-eslint/promise-function-async */
function Row({ conf, onDelete, onActivate, onSelect }) {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(TableRow, { sx: { '&:last-child td, &:last-child th': { border: 0 } }, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TableCell, { component: 'th', scope: 'row', children: onSelect ?
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Button, { onClick: onSelect, children: conf.name }) :
                    '' }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TableCell, { align: 'right', children: onDelete ?
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(IconButton, { onClick: onDelete, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DeleteIcon, {}) }) :
                    '' }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TableCell, { align: 'right', children: onActivate ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Checkbox, { checked: conf.active, onChange: onActivate }) : '' })] }));
}
function Configs() {
    const [rows, setRows] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_state_selectors__WEBPACK_IMPORTED_MODULE_4__.configListState);
    const setId = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useSetRecoilState)(_state_atoms__WEBPACK_IMPORTED_MODULE_3__.selectedId);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TableContainer, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Table, { sx: { minWidth: 100 }, "aria-label": 'configs', children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TableHead, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(TableRow, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TableCell, { children: "Name" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TableCell, { align: 'right', children: "Delete" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TableCell, { width: 10, align: 'right', children: "Active" })] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TableBody, { children: rows.map(conf => ((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Row, { ...conf, key: conf._id, conf: conf, onDelete: async () => {
                                    await (0,_utils_crud__WEBPACK_IMPORTED_MODULE_5__.del)(conf._id);
                                    setRows(rows);
                                }, onActivate: async () => {
                                    await (0,_utils_crud__WEBPACK_IMPORTED_MODULE_5__.activate)(conf._id);
                                    setRows(rows);
                                }, onSelect: () => {
                                    console.log('setting id:', conf._id);
                                    setId(conf._id);
                                    setRows(rows);
                                } }))) })] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Button, { onClick: () => {
                    setId('new');
                }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(AddIcon, {}) })] }));
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksZUFBZSxHQUFHO0FBQzFGLHdCQUF3QixHQUFHLHNEQUFJLGNBQWMsdUNBQXVDLHNEQUFJLGFBQWEsNENBQTRDLFFBQVEsSUFBSTtBQUM3SjtBQUNlO0FBQ2YsNEJBQTRCLHNEQUFjLENBQUMsNkRBQWU7QUFDMUQsa0JBQWtCLHlEQUFpQixDQUFDLG9EQUFVO0FBQzlDLFlBQVksdURBQUssQ0FBQyx1REFBUyxJQUFJLFdBQVcsc0RBQUksbUJBQW1CLFVBQVUsdURBQUssVUFBVSxNQUFNLGVBQWUsc0NBQXNDLHNEQUFJLGNBQWMsVUFBVSx1REFBSyxhQUFhLFdBQVcsc0RBQUksY0FBYyxrQkFBa0IsR0FBRyxzREFBSSxjQUFjLG9DQUFvQyxHQUFHLHNEQUFJLGNBQWMsK0NBQStDLElBQUksR0FBRyxHQUFHLHNEQUFJLGNBQWMsNEJBQTRCLG9EQUFjLFFBQVE7QUFDN2IsMENBQTBDLGdEQUFHO0FBQzdDO0FBQ0EsaUNBQWlDO0FBQ2pDLDBDQUEwQyxxREFBUTtBQUNsRDtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsS0FBSyxJQUFJLEdBQUcsR0FBRyxzREFBSSxXQUFXO0FBQ2pFO0FBQ0EsaUJBQWlCLFlBQVksc0RBQUksWUFBWSxHQUFHLElBQUk7QUFDcEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWF0LXB1bXAtdWkvLi9zcmMvc3RhdGUvYXRvbXMudHN4Iiwid2VicGFjazovL2hlYXQtcHVtcC11aS8uL3NyYy9zdGF0ZS9zZWxlY3RvcnMudHN4Iiwid2VicGFjazovL2hlYXQtcHVtcC11aS8uL3NyYy91dGlscy9jcnVkLnRzeCIsIndlYnBhY2s6Ly9oZWF0LXB1bXAtdWkvLi9zcmMvdmlld3MvQ29uZmlnTGlzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXRvbSB9IGZyb20gJ3JlY29pbCc7XG5leHBvcnQgY29uc3Qgc2VsZWN0ZWRJZCA9IGF0b20oe1xuICAgIGtleTogJ3NlbGVjdGVkSWQnLFxuICAgIGRlZmF1bHQ6ICcnXG59KTtcbmV4cG9ydCBjb25zdCByZWZyZXNoQ29uZmlnID0gYXRvbSh7XG4gICAga2V5OiAncmVmcmVzaENvbmZpZycsXG4gICAgZGVmYXVsdDogMFxufSk7XG5leHBvcnQgY29uc3QgcmVmcmVzaENvbmZpZ0xpc3QgPSBhdG9tKHtcbiAgICBrZXk6ICdyZWZyZXNoQ29uZmlnTGlzdCcsXG4gICAgZGVmYXVsdDogMFxufSk7XG4iLCJpbXBvcnQgeyBzZWxlY3RvciB9IGZyb20gJ3JlY29pbCc7XG5pbXBvcnQgeyBnZXRNYW55LCBnZXRPbmUgfSBmcm9tICcuLi91dGlscy9jcnVkJztcbmltcG9ydCB7IHJlZnJlc2hDb25maWcsIHJlZnJlc2hDb25maWdMaXN0LCBzZWxlY3RlZElkIH0gZnJvbSAnLi9hdG9tcyc7XG5leHBvcnQgY29uc3QgYWN0aXZlSWQgPSBzZWxlY3Rvcih7XG4gICAga2V5OiAnYWN0aXZlSWQnLFxuICAgIGFzeW5jIGdldCh7IGdldCB9KSB7XG4gICAgICAgIGNvbnN0IGNvbmZpZ3MgPSBnZXQoY29uZmlnTGlzdFN0YXRlKTtcbiAgICAgICAgY29uc3QgaWQgPSBjb25maWdzLmZpbmQoY29uZiA9PiBjb25mLmFjdGl2ZSkuX2lkO1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfVxufSk7XG5leHBvcnQgY29uc3QgY29uZmlnU3RhdGUgPSBzZWxlY3Rvcih7XG4gICAga2V5OiAnY29uZmlnU3RhdGUnLFxuICAgIGFzeW5jIGdldCh7IGdldCB9KSB7XG4gICAgICAgIGdldChyZWZyZXNoQ29uZmlnKTtcbiAgICAgICAgY29uc3Qgc2lkID0gZ2V0KHNlbGVjdGVkSWQpO1xuICAgICAgICBjb25zdCBkZWZhdWx0Q29uZmlnID0ge1xuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICBzZXRwb2ludDogMCxcbiAgICAgICAgICAgIHRlbXBkaWZmZXJlbnRpYWw6IDAsXG4gICAgICAgICAgICBhcGFyYW06IDAsXG4gICAgICAgICAgICBicGFyYW06IDAsXG4gICAgICAgICAgICBjcGFyYW06IDAsXG4gICAgICAgICAgICBzY2FsZTogMCxcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICBfaWQ6ICduZXcnXG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKCdzZWxlY3RlZCBpZDonLCBzaWQpO1xuICAgICAgICBpZiAoc2lkKSB7XG4gICAgICAgICAgICBpZiAoc2lkID09PSAnbmV3Jykge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWZhdWx0Q29uZmlnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgZ2V0T25lKHNpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhaWQgPSBnZXQoYWN0aXZlSWQpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGdldE9uZShhaWQpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlZmF1bHRDb25maWc7XG4gICAgfSxcbiAgICBzZXQoeyBzZXQgfSkge1xuICAgICAgICBzZXQocmVmcmVzaENvbmZpZywgaSA9PiBpICsgMSk7XG4gICAgfVxufSk7XG5leHBvcnQgY29uc3QgY29uZmlnTGlzdFN0YXRlID0gc2VsZWN0b3Ioe1xuICAgIGtleTogJ2NvbmZpZ0xpc3RTdGF0ZScsXG4gICAgYXN5bmMgZ2V0KHsgZ2V0IH0pIHtcbiAgICAgICAgZ2V0KHJlZnJlc2hDb25maWdMaXN0KTtcbiAgICAgICAgZ2V0KHJlZnJlc2hDb25maWcpO1xuICAgICAgICByZXR1cm4gZ2V0TWFueSgpO1xuICAgIH0sXG4gICAgc2V0KHsgc2V0IH0pIHtcbiAgICAgICAgc2V0KHJlZnJlc2hDb25maWdMaXN0LCBpID0+IGkgKyAxKTtcbiAgICB9XG59KTtcbiIsImNvbnN0IHVybCA9ICdodHRwOi8vbG9jYWxob3N0OjgwODAnO1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZShib2R5KSB7XG4gICAgY29uc29sZS5sb2coYm9keSk7XG4gICAgYXdhaXQgZmV0Y2goYCR7dXJsfS9jb25maWcvJHtib2R5Ll9pZH1gLCB7XG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSlcbiAgICB9KTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPbmUoX2lkKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7dXJsfS9jb25maWcvJHtfaWR9YCk7XG4gICAgaWYgKHJlcy5zdGF0dXMgPj0gNDAwKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IocmVzLnN0YXR1c1RleHQpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzLnN0YXR1cy50b1N0cmluZygpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5qc29uKCk7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TWFueSgpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHt1cmx9L2NvbmZpZ2ApO1xuICAgIHJldHVybiByZXMuanNvbigpO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZShib2R5KSB7XG4gICAgY29uc29sZS5sb2coYm9keSk7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7dXJsfS9jb25maWdgLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcy50ZXh0KCk7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsKF9pZCkge1xuICAgIGNvbnNvbGUubG9nKGBkZWxldGluZyAke19pZH1gKTtcbiAgICBhd2FpdCBmZXRjaChgJHt1cmx9L2NvbmZpZy8ke19pZH1gLCB7XG4gICAgICAgIG1ldGhvZDogJ0RFTEVURSdcbiAgICB9KTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhY3RpdmF0ZShfaWQpIHtcbiAgICBjb25zb2xlLmxvZyhgYWN0aXZhdGluZyAke19pZH1gKTtcbiAgICBhd2FpdCBmZXRjaChgJHt1cmx9L2NvbmZpZy9hY3RpdmF0ZS8ke19pZH1gLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnXG4gICAgfSk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IGFzIF9jcmVhdGVFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cywgRnJhZ21lbnQgYXMgX0ZyYWdtZW50IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBsYXp5IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2V0UmVjb2lsU3RhdGUsIHVzZVJlY29pbFN0YXRlIH0gZnJvbSAncmVjb2lsJztcbmltcG9ydCB7IHNlbGVjdGVkSWQgfSBmcm9tICcuLi9zdGF0ZS9hdG9tcyc7XG5pbXBvcnQgeyBjb25maWdMaXN0U3RhdGUgfSBmcm9tICcuLi9zdGF0ZS9zZWxlY3RvcnMnO1xuaW1wb3J0IHsgYWN0aXZhdGUsIGRlbCB9IGZyb20gJy4uL3V0aWxzL2NydWQnO1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L3Byb21pc2UtZnVuY3Rpb24tYXN5bmMgKi9cbmNvbnN0IFRhYmxlQ29udGFpbmVyID0gbGF6eSgoKSA9PiBpbXBvcnQoJ0BtdWkvbWF0ZXJpYWwvVGFibGVDb250YWluZXInKSk7XG5jb25zdCBUYWJsZSA9IGxhenkoKCkgPT4gaW1wb3J0KCdAbXVpL21hdGVyaWFsL1RhYmxlJykpO1xuY29uc3QgVGFibGVIZWFkID0gbGF6eSgoKSA9PiBpbXBvcnQoJ0BtdWkvbWF0ZXJpYWwvVGFibGVIZWFkJykpO1xuY29uc3QgVGFibGVCb2R5ID0gbGF6eSgoKSA9PiBpbXBvcnQoJ0BtdWkvbWF0ZXJpYWwvVGFibGVCb2R5JykpO1xuY29uc3QgVGFibGVSb3cgPSBsYXp5KCgpID0+IGltcG9ydCgnQG11aS9tYXRlcmlhbC9UYWJsZVJvdycpKTtcbmNvbnN0IFRhYmxlQ2VsbCA9IGxhenkoKCkgPT4gaW1wb3J0KCdAbXVpL21hdGVyaWFsL1RhYmxlQ2VsbCcpKTtcbmNvbnN0IEJ1dHRvbiA9IGxhenkoKCkgPT4gaW1wb3J0KCdAbXVpL21hdGVyaWFsL0J1dHRvbicpKTtcbmNvbnN0IENoZWNrYm94ID0gbGF6eSgoKSA9PiBpbXBvcnQoJ0BtdWkvbWF0ZXJpYWwvQ2hlY2tib3gnKSk7XG5jb25zdCBEZWxldGVJY29uID0gbGF6eSgoKSA9PiBpbXBvcnQoJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGVsZXRlJykpO1xuY29uc3QgQWRkSWNvbiA9IGxhenkoKCkgPT4gaW1wb3J0KCdAbXVpL2ljb25zLW1hdGVyaWFsL0FkZCcpKTtcbmNvbnN0IEljb25CdXR0b24gPSBsYXp5KCgpID0+IGltcG9ydCgnQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uJykpO1xuLyogZXNsaW50LWVuYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJvbWlzZS1mdW5jdGlvbi1hc3luYyAqL1xuZnVuY3Rpb24gUm93KHsgY29uZiwgb25EZWxldGUsIG9uQWN0aXZhdGUsIG9uU2VsZWN0IH0pIHtcbiAgICByZXR1cm4gKF9qc3hzKFRhYmxlUm93LCB7IHN4OiB7ICcmOmxhc3QtY2hpbGQgdGQsICY6bGFzdC1jaGlsZCB0aCc6IHsgYm9yZGVyOiAwIH0gfSwgY2hpbGRyZW46IFtfanN4KFRhYmxlQ2VsbCwgeyBjb21wb25lbnQ6ICd0aCcsIHNjb3BlOiAncm93JywgY2hpbGRyZW46IG9uU2VsZWN0ID9cbiAgICAgICAgICAgICAgICAgICAgX2pzeChCdXR0b24sIHsgb25DbGljazogb25TZWxlY3QsIGNoaWxkcmVuOiBjb25mLm5hbWUgfSkgOlxuICAgICAgICAgICAgICAgICAgICAnJyB9KSwgX2pzeChUYWJsZUNlbGwsIHsgYWxpZ246ICdyaWdodCcsIGNoaWxkcmVuOiBvbkRlbGV0ZSA/XG4gICAgICAgICAgICAgICAgICAgIF9qc3goSWNvbkJ1dHRvbiwgeyBvbkNsaWNrOiBvbkRlbGV0ZSwgY2hpbGRyZW46IF9qc3goRGVsZXRlSWNvbiwge30pIH0pIDpcbiAgICAgICAgICAgICAgICAgICAgJycgfSksIF9qc3goVGFibGVDZWxsLCB7IGFsaWduOiAncmlnaHQnLCBjaGlsZHJlbjogb25BY3RpdmF0ZSA/IF9qc3goQ2hlY2tib3gsIHsgY2hlY2tlZDogY29uZi5hY3RpdmUsIG9uQ2hhbmdlOiBvbkFjdGl2YXRlIH0pIDogJycgfSldIH0pKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbmZpZ3MoKSB7XG4gICAgY29uc3QgW3Jvd3MsIHNldFJvd3NdID0gdXNlUmVjb2lsU3RhdGUoY29uZmlnTGlzdFN0YXRlKTtcbiAgICBjb25zdCBzZXRJZCA9IHVzZVNldFJlY29pbFN0YXRlKHNlbGVjdGVkSWQpO1xuICAgIHJldHVybiAoX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeChUYWJsZUNvbnRhaW5lciwgeyBjaGlsZHJlbjogX2pzeHMoVGFibGUsIHsgc3g6IHsgbWluV2lkdGg6IDEwMCB9LCBcImFyaWEtbGFiZWxcIjogJ2NvbmZpZ3MnLCBjaGlsZHJlbjogW19qc3goVGFibGVIZWFkLCB7IGNoaWxkcmVuOiBfanN4cyhUYWJsZVJvdywgeyBjaGlsZHJlbjogW19qc3goVGFibGVDZWxsLCB7IGNoaWxkcmVuOiBcIk5hbWVcIiB9KSwgX2pzeChUYWJsZUNlbGwsIHsgYWxpZ246ICdyaWdodCcsIGNoaWxkcmVuOiBcIkRlbGV0ZVwiIH0pLCBfanN4KFRhYmxlQ2VsbCwgeyB3aWR0aDogMTAsIGFsaWduOiAncmlnaHQnLCBjaGlsZHJlbjogXCJBY3RpdmVcIiB9KV0gfSkgfSksIF9qc3goVGFibGVCb2R5LCB7IGNoaWxkcmVuOiByb3dzLm1hcChjb25mID0+IChfY3JlYXRlRWxlbWVudChSb3csIHsgLi4uY29uZiwga2V5OiBjb25mLl9pZCwgY29uZjogY29uZiwgb25EZWxldGU6IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IGRlbChjb25mLl9pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRSb3dzKHJvd3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBvbkFjdGl2YXRlOiBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBhY3RpdmF0ZShjb25mLl9pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRSb3dzKHJvd3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBvblNlbGVjdDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NldHRpbmcgaWQ6JywgY29uZi5faWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SWQoY29uZi5faWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Um93cyhyb3dzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9KSkpIH0pXSB9KSB9KSwgX2pzeChCdXR0b24sIHsgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRJZCgnbmV3Jyk7XG4gICAgICAgICAgICAgICAgfSwgY2hpbGRyZW46IF9qc3goQWRkSWNvbiwge30pIH0pXSB9KSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=