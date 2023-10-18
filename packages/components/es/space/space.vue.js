import { defineComponent, openBlock, createBlock, unref, normalizeProps, guardReactiveProps, withCtx, renderSlot } from "vue";
import Space from "../node_modules/.pnpm/ant-design-vue@4.0.4_vue@3.3.4/node_modules/ant-design-vue/es/space/index.js";
const __default__ = defineComponent({
  name: "Dspace"
});
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  name: "DcqcSpace"
}, {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Space), normalizeProps(guardReactiveProps({ ..._ctx.$atter })), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
});
export {
  _sfc_main as default
};
