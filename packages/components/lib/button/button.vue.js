"use strict";
const vue = require("vue");
require("../node_modules/.pnpm/ant-design-vue@4.0.4_vue@3.3.4/node_modules/ant-design-vue/es/button/index.js");
const button = require("../node_modules/.pnpm/ant-design-vue@4.0.4_vue@3.3.4/node_modules/ant-design-vue/es/button/button.js");
const __default__ = vue.defineComponent({
  name: "Dbutton"
});
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  name: "DcqcButton"
}, {
  setup(__props) {
    const onClick = () => {
    };
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.unref(button.default), vue.mergeProps({ ..._ctx.$attrs }, { onClick }), {
        default: vue.withCtx(() => [
          vue.createTextVNode("Primary Button")
        ]),
        _: 1
      }, 16);
    };
  }
});
module.exports = _sfc_main;
