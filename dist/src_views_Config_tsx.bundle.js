"use strict";
(self["webpackChunkheat_pump_ui"] = self["webpackChunkheat_pump_ui"] || []).push([["src_views_Config_tsx"],{

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

/***/ "./src/views/Config.tsx":
/*!******************************!*\
  !*** ./src/views/Config.tsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _utils_crud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/crud */ "./src/utils/crud.tsx");
/* harmony import */ var _state_atoms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state/atoms */ "./src/state/atoms.tsx");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../state/selectors */ "./src/state/selectors.tsx");







/* eslint-disable @typescript-eslint/promise-function-async */
const Button = (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_prop-types_index_js"), __webpack_require__.e("vendors-node_modules_mui_system_esm_createTheme_createTheme_js"), __webpack_require__.e("vendors-node_modules_emotion_react_dist_emotion-element-6a883da9_browser_esm_js-node_modules_-3acceb"), __webpack_require__.e("vendors-node_modules_mui_material_styles_createTheme_js"), __webpack_require__.e("vendors-node_modules_mui_styled-engine_GlobalStyles_GlobalStyles_js"), __webpack_require__.e("vendors-node_modules_mui_styled-engine_index_js-node_modules_clsx_dist_clsx_m_js"), __webpack_require__.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-53761c"), __webpack_require__.e("vendors-node_modules_mui_material_ButtonBase_ButtonBase_js"), __webpack_require__.e("vendors-node_modules_mui_material_Button_index_js-node_modules_mui_material_utils_useForkRef_-f1053d")]).then(__webpack_require__.bind(__webpack_require__, /*! @mui/material/Button */ "./node_modules/@mui/material/Button/index.js")));
const Input = (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => __webpack_require__.e(/*! import() */ "src_components_Input_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../components/Input */ "./src/components/Input.tsx")));
const TextField = (0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_prop-types_index_js"), __webpack_require__.e("vendors-node_modules_mui_system_esm_createTheme_createTheme_js"), __webpack_require__.e("vendors-node_modules_emotion_react_dist_emotion-element-6a883da9_browser_esm_js-node_modules_-3acceb"), __webpack_require__.e("vendors-node_modules_mui_material_styles_createTheme_js"), __webpack_require__.e("vendors-node_modules_mui_styled-engine_GlobalStyles_GlobalStyles_js"), __webpack_require__.e("vendors-node_modules_mui_styled-engine_index_js-node_modules_clsx_dist_clsx_m_js"), __webpack_require__.e("vendors-node_modules_mui_material_styles_styled_js-node_modules_mui_material_styles_useThemeP-53761c"), __webpack_require__.e("vendors-node_modules_mui_material_utils_createSvgIcon_js-node_modules_mui_material_utils_useC-156513"), __webpack_require__.e("vendors-node_modules_mui_material_TextField_index_js")]).then(__webpack_require__.bind(__webpack_require__, /*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/index.js")));
/* eslint-enable @typescript-eslint/promise-function-async */
function ConfigView() {
    const [config, setConfig] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_state_selectors__WEBPACK_IMPORTED_MODULE_5__.configState);
    const [_id, setId] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_state_atoms__WEBPACK_IMPORTED_MODULE_4__.selectedId);
    const { register, handleSubmit, watch, formState: { errors } } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)();
    const onSubmit = async (conf) => {
        if (_id && _id !== 'new') {
            console.log('updating config', conf);
            await (0,_utils_crud__WEBPACK_IMPORTED_MODULE_3__.update)({
                ...conf,
                _id
            });
        }
        else {
            console.log('creating new config', conf);
            const newId = await (0,_utils_crud__WEBPACK_IMPORTED_MODULE_3__.create)(conf);
            setId(newId);
        }
    };
    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setValues({
    //         ...values,
    //         [event.target.id]: event.target.value
    //     });
    // };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        setId(config._id);
        // setValues(config);
    }, [config._id, setId]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        for (const key of Object.keys(config)) {
            const el = document.getElementById(key);
            if (el) {
                el.value = config[key]; // eslint-disable-line @typescript-eslint/no-unsafe-assignment
            }
        }
    }, [config]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", { onSubmit: handleSubmit(onSubmit), children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TextField, { type: 'number', label: 'set point', id: 'setpoint', defaultValue: config.setpoint, ...register('setpoint') }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TextField, { ...register('tempdifferential'), type: 'number', label: 'temp differential', id: 'tempdifferential', defaultValue: config.tempdifferential }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TextField, { ...register('aparam'), type: 'number', label: 'a param', id: 'aparam', defaultValue: config.aparam }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TextField, { ...register('bparam'), type: 'number', label: 'b param', id: 'bparam', defaultValue: config.bparam }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TextField, { ...register('cparam'), type: 'number', label: 'c param', id: 'cparam', defaultValue: config.cparam }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TextField, { ...register('name'), label: 'name', id: 'name', defaultValue: config.name }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Button, { variant: 'outlined', style: { float: 'right', marginRight: '2em' }, type: 'submit', children: "Save" })] }));
}
/* harmony default export */ __webpack_exports__["default"] = (ConfigView);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsc0RBQUksY0FBYyxvR0FBb0csR0FBRyxzREFBSSxjQUFjLG9HQUFvRyxHQUFHLHNEQUFJLGNBQWMsMkVBQTJFLEdBQUcsc0RBQUksV0FBVyw4QkFBOEIsb0NBQW9DLG9DQUFvQyxJQUFJO0FBQy82QjtBQUNBLCtEQUFlLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hlYXQtcHVtcC11aS8uL3NyYy9zdGF0ZS9hdG9tcy50c3giLCJ3ZWJwYWNrOi8vaGVhdC1wdW1wLXVpLy4vc3JjL3N0YXRlL3NlbGVjdG9ycy50c3giLCJ3ZWJwYWNrOi8vaGVhdC1wdW1wLXVpLy4vc3JjL3V0aWxzL2NydWQudHN4Iiwid2VicGFjazovL2hlYXQtcHVtcC11aS8uL3NyYy92aWV3cy9Db25maWcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF0b20gfSBmcm9tICdyZWNvaWwnO1xuZXhwb3J0IGNvbnN0IHNlbGVjdGVkSWQgPSBhdG9tKHtcbiAgICBrZXk6ICdzZWxlY3RlZElkJyxcbiAgICBkZWZhdWx0OiAnJ1xufSk7XG5leHBvcnQgY29uc3QgcmVmcmVzaENvbmZpZyA9IGF0b20oe1xuICAgIGtleTogJ3JlZnJlc2hDb25maWcnLFxuICAgIGRlZmF1bHQ6IDBcbn0pO1xuZXhwb3J0IGNvbnN0IHJlZnJlc2hDb25maWdMaXN0ID0gYXRvbSh7XG4gICAga2V5OiAncmVmcmVzaENvbmZpZ0xpc3QnLFxuICAgIGRlZmF1bHQ6IDBcbn0pO1xuIiwiaW1wb3J0IHsgc2VsZWN0b3IgfSBmcm9tICdyZWNvaWwnO1xuaW1wb3J0IHsgZ2V0TWFueSwgZ2V0T25lIH0gZnJvbSAnLi4vdXRpbHMvY3J1ZCc7XG5pbXBvcnQgeyByZWZyZXNoQ29uZmlnLCByZWZyZXNoQ29uZmlnTGlzdCwgc2VsZWN0ZWRJZCB9IGZyb20gJy4vYXRvbXMnO1xuZXhwb3J0IGNvbnN0IGFjdGl2ZUlkID0gc2VsZWN0b3Ioe1xuICAgIGtleTogJ2FjdGl2ZUlkJyxcbiAgICBhc3luYyBnZXQoeyBnZXQgfSkge1xuICAgICAgICBjb25zdCBjb25maWdzID0gZ2V0KGNvbmZpZ0xpc3RTdGF0ZSk7XG4gICAgICAgIGNvbnN0IGlkID0gY29uZmlncy5maW5kKGNvbmYgPT4gY29uZi5hY3RpdmUpLl9pZDtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH1cbn0pO1xuZXhwb3J0IGNvbnN0IGNvbmZpZ1N0YXRlID0gc2VsZWN0b3Ioe1xuICAgIGtleTogJ2NvbmZpZ1N0YXRlJyxcbiAgICBhc3luYyBnZXQoeyBnZXQgfSkge1xuICAgICAgICBnZXQocmVmcmVzaENvbmZpZyk7XG4gICAgICAgIGNvbnN0IHNpZCA9IGdldChzZWxlY3RlZElkKTtcbiAgICAgICAgY29uc3QgZGVmYXVsdENvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgc2V0cG9pbnQ6IDAsXG4gICAgICAgICAgICB0ZW1wZGlmZmVyZW50aWFsOiAwLFxuICAgICAgICAgICAgYXBhcmFtOiAwLFxuICAgICAgICAgICAgYnBhcmFtOiAwLFxuICAgICAgICAgICAgY3BhcmFtOiAwLFxuICAgICAgICAgICAgc2NhbGU6IDAsXG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgICAgX2lkOiAnbmV3J1xuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmxvZygnc2VsZWN0ZWQgaWQ6Jywgc2lkKTtcbiAgICAgICAgaWYgKHNpZCkge1xuICAgICAgICAgICAgaWYgKHNpZCA9PT0gJ25ldycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmYXVsdENvbmZpZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGdldE9uZShzaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWlkID0gZ2V0KGFjdGl2ZUlkKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBnZXRPbmUoYWlkKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWZhdWx0Q29uZmlnO1xuICAgIH0sXG4gICAgc2V0KHsgc2V0IH0pIHtcbiAgICAgICAgc2V0KHJlZnJlc2hDb25maWcsIGkgPT4gaSArIDEpO1xuICAgIH1cbn0pO1xuZXhwb3J0IGNvbnN0IGNvbmZpZ0xpc3RTdGF0ZSA9IHNlbGVjdG9yKHtcbiAgICBrZXk6ICdjb25maWdMaXN0U3RhdGUnLFxuICAgIGFzeW5jIGdldCh7IGdldCB9KSB7XG4gICAgICAgIGdldChyZWZyZXNoQ29uZmlnTGlzdCk7XG4gICAgICAgIGdldChyZWZyZXNoQ29uZmlnKTtcbiAgICAgICAgcmV0dXJuIGdldE1hbnkoKTtcbiAgICB9LFxuICAgIHNldCh7IHNldCB9KSB7XG4gICAgICAgIHNldChyZWZyZXNoQ29uZmlnTGlzdCwgaSA9PiBpICsgMSk7XG4gICAgfVxufSk7XG4iLCJjb25zdCB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDgwJztcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGUoYm9keSkge1xuICAgIGNvbnNvbGUubG9nKGJvZHkpO1xuICAgIGF3YWl0IGZldGNoKGAke3VybH0vY29uZmlnLyR7Ym9keS5faWR9YCwge1xuICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpXG4gICAgfSk7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T25lKF9pZCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3VybH0vY29uZmlnLyR7X2lkfWApO1xuICAgIGlmIChyZXMuc3RhdHVzID49IDQwMCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKHJlcy5zdGF0dXNUZXh0KTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlcy5zdGF0dXMudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE1hbnkoKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7dXJsfS9jb25maWdgKTtcbiAgICByZXR1cm4gcmVzLmpzb24oKTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGUoYm9keSkge1xuICAgIGNvbnNvbGUubG9nKGJvZHkpO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3VybH0vY29uZmlnYCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KVxuICAgIH0pO1xuICAgIHJldHVybiByZXMudGV4dCgpO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbChfaWQpIHtcbiAgICBjb25zb2xlLmxvZyhgZGVsZXRpbmcgJHtfaWR9YCk7XG4gICAgYXdhaXQgZmV0Y2goYCR7dXJsfS9jb25maWcvJHtfaWR9YCwge1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnXG4gICAgfSk7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWN0aXZhdGUoX2lkKSB7XG4gICAgY29uc29sZS5sb2coYGFjdGl2YXRpbmcgJHtfaWR9YCk7XG4gICAgYXdhaXQgZmV0Y2goYCR7dXJsfS9jb25maWcvYWN0aXZhdGUvJHtfaWR9YCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJ1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgbGF6eSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSAncmVjb2lsJztcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuaW1wb3J0IHsgY3JlYXRlLCB1cGRhdGUgfSBmcm9tICcuLi91dGlscy9jcnVkJztcbmltcG9ydCB7IHNlbGVjdGVkSWQgfSBmcm9tICcuLi9zdGF0ZS9hdG9tcyc7XG5pbXBvcnQgeyBjb25maWdTdGF0ZSB9IGZyb20gJy4uL3N0YXRlL3NlbGVjdG9ycyc7XG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJvbWlzZS1mdW5jdGlvbi1hc3luYyAqL1xuY29uc3QgQnV0dG9uID0gbGF6eSgoKSA9PiBpbXBvcnQoJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJykpO1xuY29uc3QgSW5wdXQgPSBsYXp5KCgpID0+IGltcG9ydCgnLi4vY29tcG9uZW50cy9JbnB1dCcpKTtcbmNvbnN0IFRleHRGaWVsZCA9IGxhenkoKCkgPT4gaW1wb3J0KCdAbXVpL21hdGVyaWFsL1RleHRGaWVsZCcpKTtcbi8qIGVzbGludC1lbmFibGUgQHR5cGVzY3JpcHQtZXNsaW50L3Byb21pc2UtZnVuY3Rpb24tYXN5bmMgKi9cbmZ1bmN0aW9uIENvbmZpZ1ZpZXcoKSB7XG4gICAgY29uc3QgW2NvbmZpZywgc2V0Q29uZmlnXSA9IHVzZVJlY29pbFN0YXRlKGNvbmZpZ1N0YXRlKTtcbiAgICBjb25zdCBbX2lkLCBzZXRJZF0gPSB1c2VSZWNvaWxTdGF0ZShzZWxlY3RlZElkKTtcbiAgICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIHdhdGNoLCBmb3JtU3RhdGU6IHsgZXJyb3JzIH0gfSA9IHVzZUZvcm0oKTtcbiAgICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChjb25mKSA9PiB7XG4gICAgICAgIGlmIChfaWQgJiYgX2lkICE9PSAnbmV3Jykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3VwZGF0aW5nIGNvbmZpZycsIGNvbmYpO1xuICAgICAgICAgICAgYXdhaXQgdXBkYXRlKHtcbiAgICAgICAgICAgICAgICAuLi5jb25mLFxuICAgICAgICAgICAgICAgIF9pZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY3JlYXRpbmcgbmV3IGNvbmZpZycsIGNvbmYpO1xuICAgICAgICAgICAgY29uc3QgbmV3SWQgPSBhd2FpdCBjcmVhdGUoY29uZik7XG4gICAgICAgICAgICBzZXRJZChuZXdJZCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAvLyAgICAgc2V0VmFsdWVzKHtcbiAgICAvLyAgICAgICAgIC4uLnZhbHVlcyxcbiAgICAvLyAgICAgICAgIFtldmVudC50YXJnZXQuaWRdOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRJZChjb25maWcuX2lkKTtcbiAgICAgICAgLy8gc2V0VmFsdWVzKGNvbmZpZyk7XG4gICAgfSwgW2NvbmZpZy5faWQsIHNldElkXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoY29uZmlnKSkge1xuICAgICAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChrZXkpO1xuICAgICAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICAgICAgZWwudmFsdWUgPSBjb25maWdba2V5XTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtjb25maWddKTtcbiAgICByZXR1cm4gKF9qc3hzKFwiZm9ybVwiLCB7IG9uU3VibWl0OiBoYW5kbGVTdWJtaXQob25TdWJtaXQpLCBjaGlsZHJlbjogW19qc3goVGV4dEZpZWxkLCB7IHR5cGU6ICdudW1iZXInLCBsYWJlbDogJ3NldCBwb2ludCcsIGlkOiAnc2V0cG9pbnQnLCBkZWZhdWx0VmFsdWU6IGNvbmZpZy5zZXRwb2ludCwgLi4ucmVnaXN0ZXIoJ3NldHBvaW50JykgfSksIF9qc3goVGV4dEZpZWxkLCB7IC4uLnJlZ2lzdGVyKCd0ZW1wZGlmZmVyZW50aWFsJyksIHR5cGU6ICdudW1iZXInLCBsYWJlbDogJ3RlbXAgZGlmZmVyZW50aWFsJywgaWQ6ICd0ZW1wZGlmZmVyZW50aWFsJywgZGVmYXVsdFZhbHVlOiBjb25maWcudGVtcGRpZmZlcmVudGlhbCB9KSwgX2pzeChUZXh0RmllbGQsIHsgLi4ucmVnaXN0ZXIoJ2FwYXJhbScpLCB0eXBlOiAnbnVtYmVyJywgbGFiZWw6ICdhIHBhcmFtJywgaWQ6ICdhcGFyYW0nLCBkZWZhdWx0VmFsdWU6IGNvbmZpZy5hcGFyYW0gfSksIF9qc3goVGV4dEZpZWxkLCB7IC4uLnJlZ2lzdGVyKCdicGFyYW0nKSwgdHlwZTogJ251bWJlcicsIGxhYmVsOiAnYiBwYXJhbScsIGlkOiAnYnBhcmFtJywgZGVmYXVsdFZhbHVlOiBjb25maWcuYnBhcmFtIH0pLCBfanN4KFRleHRGaWVsZCwgeyAuLi5yZWdpc3RlcignY3BhcmFtJyksIHR5cGU6ICdudW1iZXInLCBsYWJlbDogJ2MgcGFyYW0nLCBpZDogJ2NwYXJhbScsIGRlZmF1bHRWYWx1ZTogY29uZmlnLmNwYXJhbSB9KSwgX2pzeChUZXh0RmllbGQsIHsgLi4ucmVnaXN0ZXIoJ25hbWUnKSwgbGFiZWw6ICduYW1lJywgaWQ6ICduYW1lJywgZGVmYXVsdFZhbHVlOiBjb25maWcubmFtZSB9KSwgX2pzeChCdXR0b24sIHsgdmFyaWFudDogJ291dGxpbmVkJywgc3R5bGU6IHsgZmxvYXQ6ICdyaWdodCcsIG1hcmdpblJpZ2h0OiAnMmVtJyB9LCB0eXBlOiAnc3VibWl0JywgY2hpbGRyZW46IFwiU2F2ZVwiIH0pXSB9KSk7XG59XG5leHBvcnQgZGVmYXVsdCBDb25maWdWaWV3O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9