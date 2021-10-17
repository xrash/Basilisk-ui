(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{457:function(module,exports,__webpack_require__){module.exports={colors:"[gray-1 gray-2 gray-3 gray-4 green-1 orange-1 white-1 pink-1]","text-gray-1":"colors_text-gray-1__259iC","bg-gray-1":"colors_bg-gray-1__3WHut","text-gray-2":"colors_text-gray-2__1xfr1","bg-gray-2":"colors_bg-gray-2__24eIz","text-gray-3":"colors_text-gray-3__z4Aoo","bg-gray-3":"colors_bg-gray-3__1vaF9","text-gray-4":"colors_text-gray-4__27ZOX","bg-gray-4":"colors_bg-gray-4__3uaU7","text-green-1":"colors_text-green-1__3lLY1","bg-green-1":"colors_bg-green-1__EP5Z2","text-orange-1":"colors_text-orange-1__2xIgj","bg-orange-1":"colors_bg-orange-1__1jRsQ","text-white-1":"colors_text-white-1__83OMx","bg-white-1":"colors_bg-white-1__qc8vr","text-pink-1":"colors_text-pink-1__396KW","bg-pink-1":"colors_bg-pink-1__3lzV8"}},478:function(module,exports,__webpack_require__){__webpack_require__(479),__webpack_require__(635),__webpack_require__(636),__webpack_require__(837),__webpack_require__(838),__webpack_require__(843),__webpack_require__(844),__webpack_require__(842),__webpack_require__(839),__webpack_require__(845),__webpack_require__(840),__webpack_require__(841),__webpack_require__(846),module.exports=__webpack_require__(831)},545:function(module,exports){},636:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(341)},831:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(341).configure)([__webpack_require__(832),__webpack_require__(833)],module,!1)}).call(this,__webpack_require__(197)(module))},832:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=832},833:function(module,exports,__webpack_require__){var map={"./shared/Colors.stories.tsx":834};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=833},834:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ColorGrid",(function(){return ColorGrid}));var _home_runner_work_basilisk_ui_basilisk_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(458),_colors_module_scss__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(835),__webpack_require__(457)),_colors_module_scss__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_colors_module_scss__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(93),Color=function Color(_ref){var color=_ref.color;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"row justify-content-center text-center",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{width:"150px",height:"150px",marginTop:"24px",marginBottom:"8px"},className:"bg-".concat(color)}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{children:color})]})},ColorGrid=function ColorGrid(){var colors=_colors_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.colors.replace("[","").replace("]","").split(" ");return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"container",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"row",children:colors.map((function(color,i){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"col-2 justify-content-center align-content-center",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Color,{color:color})},i)}))})})};__webpack_exports__.default={component:ColorGrid,title:"Shared/Colors"},ColorGrid.parameters=Object(_home_runner_work_basilisk_ui_basilisk_ui_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"() => {\n    const colors: string[] = Colors.colors\n        .replace('[', '')\n        .replace(']', '')\n        .split(' ');\n\n    return <div className=\"container\">\n        <div className=\"row\">\n            {colors.map((color, i) => (\n                <div\n                    key={i} \n                    className=\"col-2 justify-content-center align-content-center\"\n                >\n                    <Color color={color} />\n                </div>\n            ))}\n        </div>\n    </div>\n}"}},ColorGrid.parameters)},835:function(module,exports,__webpack_require__){},846:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));var client_api=__webpack_require__(853),esm=__webpack_require__(4),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))}},[[478,2,3]]]);