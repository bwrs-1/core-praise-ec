import { defineComponent, createElementBlock, ref, getCurrentInstance, provide, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import "/workspaces/core-praise-ec/entire-clone/node_modules/hookable/dist/index.mjs";
defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = Symbol.for("nuxt:client-only");
defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    const vm = getCurrentInstance();
    if (vm) {
      vm._nuxtClientOnly = true;
    }
    provide(clientOnlySymbol, true);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const products = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-background min-h-screen text-primary font-sans flex items-center justify-center" }, _attrs))}><div class="p-10 max-w-6xl w-full"><h1 class="text-4xl mb-8 text-center font-bold tracking-wide">CORE PRISE</h1>`);
      if (products.value.length) {
        _push(`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`);
        ssrRenderList(products.value, (product) => {
          _push(`<div class="border border-gray-700 p-6 rounded-lg bg-gray-900"><img${ssrRenderAttr("src", product.image)} class="w-full h-64 object-cover mb-4 rounded"><p class="text-lg font-semibold">${ssrInterpolate(product.title)}</p></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-CDMEH23k.js.map
