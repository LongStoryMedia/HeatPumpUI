"use strict";
(self["webpackChunkheat_pump_ui"] = self["webpackChunkheat_pump_ui"] || []).push([["src_views_ThermGraph_tsx"],{

/***/ "./src/components/Graph.tsx":
/*!**********************************!*\
  !*** ./src/components/Graph.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/chart/LineChart.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/CartesianGrid.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/XAxis.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/YAxis.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/component/Tooltip.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/component/Legend.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/ReferenceLine.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/cartesian/Line.js");


function Graph({ data }) {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(recharts__WEBPACK_IMPORTED_MODULE_1__.LineChart, { width: 500, height: 300, data: data, margin: {
            top: 20,
            right: 50,
            left: 20,
            bottom: 5
        }, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_2__.CartesianGrid, { strokeDasharray: '3 3' }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_3__.XAxis, { dataKey: 'name' }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_4__.YAxis, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_6__.Legend, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_7__.ReferenceLine, { x: 'Page C', stroke: 'red', label: 'Max PV PAGE' }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_7__.ReferenceLine, { y: 9800, label: 'Max', stroke: 'red' }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_8__.Line, { type: 'monotone', dataKey: 'pv', stroke: '#8884d8' }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recharts__WEBPACK_IMPORTED_MODULE_8__.Line, { type: 'monotone', dataKey: 'uv', stroke: '#82ca9d' })] }));
}
/* harmony default export */ __webpack_exports__["default"] = (Graph);


/***/ }),

/***/ "./src/views/ThermGraph.tsx":
/*!**********************************!*\
  !*** ./src/views/ThermGraph.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ThermGraph; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _components_Graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Graph */ "./src/components/Graph.tsx");


const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100
    }
];
function ThermGraph() {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Graph__WEBPACK_IMPORTED_MODULE_1__["default"], { data: data });
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3ZpZXdzX1RoZXJtR3JhcGhfdHN4LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStEO0FBQ3lDO0FBQ3hHLGlCQUFpQixNQUFNO0FBQ3ZCLFlBQVksdURBQUssQ0FBQywrQ0FBUyxJQUFJO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxhQUFhLHNEQUFJLENBQUMsbURBQWEsSUFBSSx3QkFBd0IsR0FBRyxzREFBSSxDQUFDLDJDQUFLLElBQUksaUJBQWlCLEdBQUcsc0RBQUksQ0FBQywyQ0FBSyxJQUFJLEdBQUcsc0RBQUksQ0FBQyw2Q0FBTyxJQUFJLEdBQUcsc0RBQUksQ0FBQyw0Q0FBTSxJQUFJLEdBQUcsc0RBQUksQ0FBQyxtREFBYSxJQUFJLGtEQUFrRCxHQUFHLHNEQUFJLENBQUMsbURBQWEsSUFBSSxzQ0FBc0MsR0FBRyxzREFBSSxDQUFDLDBDQUFJLElBQUksb0RBQW9ELEdBQUcsc0RBQUksQ0FBQywwQ0FBSSxJQUFJLG9EQUFvRCxJQUFJO0FBQ2xiO0FBQ0EsK0RBQWUsS0FBSyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1YyQjtBQUNSO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmLFdBQVcsc0RBQUksQ0FBQyx5REFBSyxJQUFJLFlBQVk7QUFDckMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWF0LXB1bXAtdWkvLi9zcmMvY29tcG9uZW50cy9HcmFwaC50c3giLCJ3ZWJwYWNrOi8vaGVhdC1wdW1wLXVpLy4vc3JjL3ZpZXdzL1RoZXJtR3JhcGgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBMaW5lQ2hhcnQsIExpbmUsIFhBeGlzLCBZQXhpcywgQ2FydGVzaWFuR3JpZCwgVG9vbHRpcCwgTGVnZW5kLCBSZWZlcmVuY2VMaW5lIH0gZnJvbSAncmVjaGFydHMnO1xuZnVuY3Rpb24gR3JhcGgoeyBkYXRhIH0pIHtcbiAgICByZXR1cm4gKF9qc3hzKExpbmVDaGFydCwgeyB3aWR0aDogNTAwLCBoZWlnaHQ6IDMwMCwgZGF0YTogZGF0YSwgbWFyZ2luOiB7XG4gICAgICAgICAgICB0b3A6IDIwLFxuICAgICAgICAgICAgcmlnaHQ6IDUwLFxuICAgICAgICAgICAgbGVmdDogMjAsXG4gICAgICAgICAgICBib3R0b206IDVcbiAgICAgICAgfSwgY2hpbGRyZW46IFtfanN4KENhcnRlc2lhbkdyaWQsIHsgc3Ryb2tlRGFzaGFycmF5OiAnMyAzJyB9KSwgX2pzeChYQXhpcywgeyBkYXRhS2V5OiAnbmFtZScgfSksIF9qc3goWUF4aXMsIHt9KSwgX2pzeChUb29sdGlwLCB7fSksIF9qc3goTGVnZW5kLCB7fSksIF9qc3goUmVmZXJlbmNlTGluZSwgeyB4OiAnUGFnZSBDJywgc3Ryb2tlOiAncmVkJywgbGFiZWw6ICdNYXggUFYgUEFHRScgfSksIF9qc3goUmVmZXJlbmNlTGluZSwgeyB5OiA5ODAwLCBsYWJlbDogJ01heCcsIHN0cm9rZTogJ3JlZCcgfSksIF9qc3goTGluZSwgeyB0eXBlOiAnbW9ub3RvbmUnLCBkYXRhS2V5OiAncHYnLCBzdHJva2U6ICcjODg4NGQ4JyB9KSwgX2pzeChMaW5lLCB7IHR5cGU6ICdtb25vdG9uZScsIGRhdGFLZXk6ICd1dicsIHN0cm9rZTogJyM4MmNhOWQnIH0pXSB9KSk7XG59XG5leHBvcnQgZGVmYXVsdCBHcmFwaDtcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgR3JhcGggZnJvbSAnLi4vY29tcG9uZW50cy9HcmFwaCc7XG5jb25zdCBkYXRhID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ1BhZ2UgQScsXG4gICAgICAgIHV2OiA0MDAwLFxuICAgICAgICBwdjogMjQwMCxcbiAgICAgICAgYW10OiAyNDAwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdQYWdlIEInLFxuICAgICAgICB1djogMzAwMCxcbiAgICAgICAgcHY6IDEzOTgsXG4gICAgICAgIGFtdDogMjIxMFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnUGFnZSBDJyxcbiAgICAgICAgdXY6IDIwMDAsXG4gICAgICAgIHB2OiA5ODAwLFxuICAgICAgICBhbXQ6IDIyOTBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1BhZ2UgRCcsXG4gICAgICAgIHV2OiAyNzgwLFxuICAgICAgICBwdjogMzkwOCxcbiAgICAgICAgYW10OiAyMDAwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdQYWdlIEUnLFxuICAgICAgICB1djogMTg5MCxcbiAgICAgICAgcHY6IDQ4MDAsXG4gICAgICAgIGFtdDogMjE4MVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnUGFnZSBGJyxcbiAgICAgICAgdXY6IDIzOTAsXG4gICAgICAgIHB2OiAzODAwLFxuICAgICAgICBhbXQ6IDI1MDBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ1BhZ2UgRycsXG4gICAgICAgIHV2OiAzNDkwLFxuICAgICAgICBwdjogNDMwMCxcbiAgICAgICAgYW10OiAyMTAwXG4gICAgfVxuXTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRoZXJtR3JhcGgoKSB7XG4gICAgcmV0dXJuIF9qc3goR3JhcGgsIHsgZGF0YTogZGF0YSB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==