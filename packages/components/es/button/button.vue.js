import { defineComponent, openBlock, createBlock, unref, mergeProps, withCtx, createTextVNode } from "vue";
import "../node_modules/.pnpm/ant-design-vue@4.0.4_vue@3.3.4/node_modules/ant-design-vue/es/button/index.js";
import Button from "../node_modules/.pnpm/ant-design-vue@4.0.4_vue@3.3.4/node_modules/ant-design-vue/es/button/button.js";
const __default__ = defineComponent({
  name: "Dbutton"
});
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  name: "DButton"
}, {
  setup(__props) {
    const onClick = () => {
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Button), mergeProps({ ..._ctx.$attrs }, { onClick }), {
        default: withCtx(() => [
          createTextVNode("Primary Button")
        ]),
        _: 1
      }, 16);
    };
  }
});
export {
  _sfc_main as default
};
