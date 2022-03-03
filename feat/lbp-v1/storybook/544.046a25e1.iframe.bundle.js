"use strict";(self.webpackChunkbasilisk_ui=self.webpackChunkbasilisk_ui||[]).push([[544],{"./node_modules/hydra-dx-wasm/build/lbp/bundler/hydra_dx_wasm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{calculate_in_given_out:()=>_hydra_dx_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.Qx,calculate_linear_weights:()=>_hydra_dx_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.fQ,calculate_out_given_in:()=>_hydra_dx_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.uo,calculate_pool_trade_fee:()=>_hydra_dx_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__._v,get_spot_price:()=>_hydra_dx_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__.v9});var _hydra_dx_wasm_bg_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/hydra-dx-wasm/build/lbp/bundler/hydra_dx_wasm_bg.js")},"./node_modules/hydra-dx-wasm/build/lbp/bundler/hydra_dx_wasm_bg.js":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v9:()=>get_spot_price,uo:()=>calculate_out_given_in,Qx:()=>calculate_in_given_out,fQ:()=>calculate_linear_weights,_v:()=>calculate_pool_trade_fee});__webpack_require__("./node_modules/hydra-dx-wasm/build/lbp/bundler/hydra_dx_wasm_bg.wasm");module=__webpack_require__.hmd(module);let WASM_VECTOR_LEN=0,cachegetUint8Memory0=null;function getUint8Memory0(){return null!==cachegetUint8Memory0&&cachegetUint8Memory0.buffer===(void 0).buffer||(cachegetUint8Memory0=new Uint8Array((void 0).buffer)),cachegetUint8Memory0}let cachedTextEncoder=new("undefined"==typeof TextEncoder?(0,module.require)("util").TextEncoder:TextEncoder)("utf-8");const encodeString="function"==typeof cachedTextEncoder.encodeInto?function(arg,view){return cachedTextEncoder.encodeInto(arg,view)}:function(arg,view){const buf=cachedTextEncoder.encode(arg);return view.set(buf),{read:arg.length,written:buf.length}};function passStringToWasm0(arg,malloc,realloc){if(void 0===realloc){const buf=cachedTextEncoder.encode(arg),ptr=malloc(buf.length);return getUint8Memory0().subarray(ptr,ptr+buf.length).set(buf),WASM_VECTOR_LEN=buf.length,ptr}let len=arg.length,ptr=malloc(len);const mem=getUint8Memory0();let offset=0;for(;offset<len;offset++){const code=arg.charCodeAt(offset);if(code>127)break;mem[ptr+offset]=code}if(offset!==len){0!==offset&&(arg=arg.slice(offset)),ptr=realloc(ptr,len,len=offset+3*arg.length);const view=getUint8Memory0().subarray(ptr+offset,ptr+len);offset+=encodeString(arg,view).written}return WASM_VECTOR_LEN=offset,ptr}let cachegetInt32Memory0=null;function getInt32Memory0(){return null!==cachegetInt32Memory0&&cachegetInt32Memory0.buffer===(void 0).buffer||(cachegetInt32Memory0=new Int32Array((void 0).buffer)),cachegetInt32Memory0}let cachedTextDecoder=new("undefined"==typeof TextDecoder?(0,module.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});function getStringFromWasm0(ptr,len){return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr,ptr+len))}function get_spot_price(s,b,s_w,b_w,a){try{const retptr=(void 0)(-16);(void 0)(retptr,passStringToWasm0(s,void 0,void 0),WASM_VECTOR_LEN,passStringToWasm0(b,void 0,void 0),WASM_VECTOR_LEN,passStringToWasm0(s_w,void 0,void 0),WASM_VECTOR_LEN,passStringToWasm0(b_w,void 0,void 0),WASM_VECTOR_LEN,passStringToWasm0(a,void 0,void 0),WASM_VECTOR_LEN);var r0=getInt32Memory0()[retptr/4+0],r1=getInt32Memory0()[retptr/4+1];return getStringFromWasm0(r0,r1)}finally{(void 0)(16),(void 0)(r0,r1)}}function calculate_out_given_in(s,b,s_w,b_w,a){try{const retptr=(void 0)(-16);(void 0)(retptr,passStringToWasm0(s,void 0,void 0),WASM_VECTOR_LEN,passStringToWasm0(b,void 0,void 0),WASM_VECTOR_LEN,passStringToWasm0(s_w,void 0,void 0),WASM_VECTOR_LEN,passStringToWasm0(b_w,void 0,void 0),WASM_VECTOR_LEN,passStringToWasm0(a,void 0,void 0),WASM_VECTOR_LEN);var r0=getInt32Memory0()[retptr/4+0],r1=getInt32Memory0()[retptr/4+1];return getStringFromWasm0(r0,r1)}finally{(void 0)(16),(void 0)(r0,r1)}}function calculate_in_given_out(s,b,s_w,b_w,a){try{const retptr=(void 0)(-16);(void 0)(retptr,passStringToWasm0(s,void 0,void 0),WASM_VECTOR_LEN,passStringToWasm0(b,void 0,void 0),WASM_VECTOR_LEN,passStringToWasm0(s_w,void 0,void 0),WASM_VECTOR_LEN,passStringToWasm0(b_w,void 0,void 0),WASM_VECTOR_LEN,passStringToWasm0(a,void 0,void 0),WASM_VECTOR_LEN);var r0=getInt32Memory0()[retptr/4+0],r1=getInt32Memory0()[retptr/4+1];return getStringFromWasm0(r0,r1)}finally{(void 0)(16),(void 0)(r0,r1)}}function calculate_linear_weights(start_x,end_x,start_y,end_y,at){try{const retptr=(void 0)(-16);(void 0)(retptr,passStringToWasm0(start_x,void 0,void 0),WASM_VECTOR_LEN,passStringToWasm0(end_x,void 0,void 0),WASM_VECTOR_LEN,passStringToWasm0(start_y,void 0,void 0),WASM_VECTOR_LEN,passStringToWasm0(end_y,void 0,void 0),WASM_VECTOR_LEN,passStringToWasm0(at,void 0,void 0),WASM_VECTOR_LEN);var r0=getInt32Memory0()[retptr/4+0],r1=getInt32Memory0()[retptr/4+1];return getStringFromWasm0(r0,r1)}finally{(void 0)(16),(void 0)(r0,r1)}}function calculate_pool_trade_fee(a,fee_numerator,fee_denominator){try{const retptr=(void 0)(-16);(void 0)(retptr,passStringToWasm0(a,void 0,void 0),WASM_VECTOR_LEN,fee_numerator,fee_denominator);var r0=getInt32Memory0()[retptr/4+0],r1=getInt32Memory0()[retptr/4+1];return getStringFromWasm0(r0,r1)}finally{(void 0)(16),(void 0)(r0,r1)}}cachedTextDecoder.decode()},"./node_modules/hydra-dx-wasm/build/lbp/bundler/hydra_dx_wasm_bg.wasm":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"bd982c6243a94f4b78cb.wasm"}}]);