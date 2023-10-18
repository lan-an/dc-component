"use strict";
const vue = require("vue");
const index = require("../node_modules/.pnpm/ant-design-vue@4.0.4_vue@3.3.4/node_modules/ant-design-vue/es/space/index.js");
const __default__ = vue.defineComponent({
  name: "Dspace"
});
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  name: "DcqcSpace"
}, {
  setup(__props) {
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.unref(index.default), vue.normalizeProps(vue.guardReactiveProps({ ..._ctx.$atter })), {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
});
module.exports = _sfc_main;
