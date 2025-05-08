import { a as buildAssetsURL } from '../_/renderer.mjs';
import { defineComponent, ref, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, computed, useSSRContext } from 'file:///workspaces/core-praise-ec/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'file:///workspaces/core-praise-ec/node_modules/vue/server-renderer/index.mjs';
import 'file:///workspaces/core-praise-ec/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///workspaces/core-praise-ec/node_modules/h3/dist/index.mjs';
import 'file:///workspaces/core-praise-ec/node_modules/ufo/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///workspaces/core-praise-ec/node_modules/destr/dist/index.mjs';
import 'file:///workspaces/core-praise-ec/node_modules/hookable/dist/index.mjs';
import 'file:///workspaces/core-praise-ec/node_modules/ofetch/dist/node.mjs';
import 'file:///workspaces/core-praise-ec/node_modules/node-mock-http/dist/index.mjs';
import 'file:///workspaces/core-praise-ec/node_modules/unstorage/dist/index.mjs';
import 'file:///workspaces/core-praise-ec/node_modules/unstorage/drivers/fs.mjs';
import 'file:///workspaces/core-praise-ec/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///workspaces/core-praise-ec/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///workspaces/core-praise-ec/node_modules/unstorage/drivers/vercel-kv.mjs';
import 'file:///workspaces/core-praise-ec/node_modules/ohash/dist/index.mjs';
import 'file:///workspaces/core-praise-ec/node_modules/klona/dist/index.mjs';
import 'file:///workspaces/core-praise-ec/node_modules/defu/dist/defu.mjs';
import 'file:///workspaces/core-praise-ec/node_modules/scule/dist/index.mjs';
import 'file:///workspaces/core-praise-ec/node_modules/unctx/dist/index.mjs';
import 'file:///workspaces/core-praise-ec/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///workspaces/core-praise-ec/node_modules/pathe/dist/index.mjs';
import 'file:///workspaces/core-praise-ec/node_modules/unhead/dist/server.mjs';
import 'file:///workspaces/core-praise-ec/node_modules/devalue/index.js';
import 'file:///workspaces/core-praise-ec/node_modules/unhead/dist/utils.mjs';
import 'file:///workspaces/core-praise-ec/node_modules/unhead/dist/plugins.mjs';

const _imports_0 = "" + buildAssetsURL("background.B1gw--Ug.mp4");
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Heder",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_app_bar = resolveComponent("v-app-bar");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_bottom_sheet = resolveComponent("v-bottom-sheet");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_app_bar_title = resolveComponent("v-app-bar-title");
      _push(ssrRenderComponent(_component_v_app_bar, mergeProps({
        density: "compact",
        elevation: 0,
        class: "text-center",
        color: "transparent"
      }, _attrs), {
        prepend: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_btn, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`back to`);
                } else {
                  return [
                    createTextVNode("back to")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_bottom_sheet, { inset: "" }, {
              activator: withCtx(({ props: activatorProps }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_btn, mergeProps(activatorProps, { text: "Info" }), null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_btn, mergeProps(activatorProps, { text: "Info" }), null, 16)
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card, {
                    elevation: 0,
                    class: "pa-4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card_text, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="text-h6 mb-2"${_scopeId4}>CONTACT:</div><ul class="mb-4"${_scopeId4}><p${_scopeId4}>QUALITY</p><p${_scopeId4}>AFFORDABILITY</p><p${_scopeId4}>FUNCTIONALITY</p><p${_scopeId4}>DESIGN</p></ul><div${_scopeId4}> OUR AESTHETIC WILL ALWAYS BE LUXURY, BUT ENTIRE STUDIOS WILL BE ACCESSIBLE. ENTIRE STUDIOS RANGES WILL BE SIMPLY YET THOUGHTFULLY DESIGNED AND HIGH-QUALITY. WE WELCOME ANY PERSON TO WEAR ENTIRE STUDIOS AND WITHIN TIME, ENTIRE STUDIOS WILL CATER TO EVERY PERSON - IRRESPECTIVE OF AGE, GENDER OR BODY TYPE. </div><div class="mt-4 text-right"${_scopeId4}>- CORE PRAISE</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "text-h6 mb-2" }, "CONTACT:"),
                                createVNode("ul", { class: "mb-4" }, [
                                  createVNode("p", null, "QUALITY"),
                                  createVNode("p", null, "AFFORDABILITY"),
                                  createVNode("p", null, "FUNCTIONALITY"),
                                  createVNode("p", null, "DESIGN")
                                ]),
                                createVNode("div", null, " OUR AESTHETIC WILL ALWAYS BE LUXURY, BUT ENTIRE STUDIOS WILL BE ACCESSIBLE. ENTIRE STUDIOS RANGES WILL BE SIMPLY YET THOUGHTFULLY DESIGNED AND HIGH-QUALITY. WE WELCOME ANY PERSON TO WEAR ENTIRE STUDIOS AND WITHIN TIME, ENTIRE STUDIOS WILL CATER TO EVERY PERSON - IRRESPECTIVE OF AGE, GENDER OR BODY TYPE. "),
                                createVNode("div", { class: "mt-4 text-right" }, "- CORE PRAISE")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_card_text, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-h6 mb-2" }, "CONTACT:"),
                              createVNode("ul", { class: "mb-4" }, [
                                createVNode("p", null, "QUALITY"),
                                createVNode("p", null, "AFFORDABILITY"),
                                createVNode("p", null, "FUNCTIONALITY"),
                                createVNode("p", null, "DESIGN")
                              ]),
                              createVNode("div", null, " OUR AESTHETIC WILL ALWAYS BE LUXURY, BUT ENTIRE STUDIOS WILL BE ACCESSIBLE. ENTIRE STUDIOS RANGES WILL BE SIMPLY YET THOUGHTFULLY DESIGNED AND HIGH-QUALITY. WE WELCOME ANY PERSON TO WEAR ENTIRE STUDIOS AND WITHIN TIME, ENTIRE STUDIOS WILL CATER TO EVERY PERSON - IRRESPECTIVE OF AGE, GENDER OR BODY TYPE. "),
                              createVNode("div", { class: "mt-4 text-right" }, "- CORE PRAISE")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_card, {
                      elevation: 0,
                      class: "pa-4"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_card_text, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "text-h6 mb-2" }, "CONTACT:"),
                            createVNode("ul", { class: "mb-4" }, [
                              createVNode("p", null, "QUALITY"),
                              createVNode("p", null, "AFFORDABILITY"),
                              createVNode("p", null, "FUNCTIONALITY"),
                              createVNode("p", null, "DESIGN")
                            ]),
                            createVNode("div", null, " OUR AESTHETIC WILL ALWAYS BE LUXURY, BUT ENTIRE STUDIOS WILL BE ACCESSIBLE. ENTIRE STUDIOS RANGES WILL BE SIMPLY YET THOUGHTFULLY DESIGNED AND HIGH-QUALITY. WE WELCOME ANY PERSON TO WEAR ENTIRE STUDIOS AND WITHIN TIME, ENTIRE STUDIOS WILL CATER TO EVERY PERSON - IRRESPECTIVE OF AGE, GENDER OR BODY TYPE. "),
                            createVNode("div", { class: "mt-4 text-right" }, "- CORE PRAISE")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_btn, null, {
                default: withCtx(() => [
                  createTextVNode("back to")
                ]),
                _: 1
              }),
              createVNode(_component_v_bottom_sheet, { inset: "" }, {
                activator: withCtx(({ props: activatorProps }) => [
                  createVNode(_component_v_btn, mergeProps(activatorProps, { text: "Info" }), null, 16)
                ]),
                default: withCtx(() => [
                  createVNode(_component_v_card, {
                    elevation: 0,
                    class: "pa-4"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_card_text, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "text-h6 mb-2" }, "CONTACT:"),
                          createVNode("ul", { class: "mb-4" }, [
                            createVNode("p", null, "QUALITY"),
                            createVNode("p", null, "AFFORDABILITY"),
                            createVNode("p", null, "FUNCTIONALITY"),
                            createVNode("p", null, "DESIGN")
                          ]),
                          createVNode("div", null, " OUR AESTHETIC WILL ALWAYS BE LUXURY, BUT ENTIRE STUDIOS WILL BE ACCESSIBLE. ENTIRE STUDIOS RANGES WILL BE SIMPLY YET THOUGHTFULLY DESIGNED AND HIGH-QUALITY. WE WELCOME ANY PERSON TO WEAR ENTIRE STUDIOS AND WITHIN TIME, ENTIRE STUDIOS WILL CATER TO EVERY PERSON - IRRESPECTIVE OF AGE, GENDER OR BODY TYPE. "),
                          createVNode("div", { class: "mt-4 text-right" }, "- CORE PRAISE")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        append: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_btn, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`collection`);
                } else {
                  return [
                    createTextVNode("collection")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_btn, { icon: "mdi-magnify" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_btn, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`bag`);
                } else {
                  return [
                    createTextVNode("bag")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_btn, null, {
                default: withCtx(() => [
                  createTextVNode("collection")
                ]),
                _: 1
              }),
              createVNode(_component_v_btn, { icon: "mdi-magnify" }),
              createVNode(_component_v_btn, null, {
                default: withCtx(() => [
                  createTextVNode("bag")
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_app_bar_title, {
              "scroll-behavior": "hide",
              "scroll-threshold": "0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`&#39; C O R E P R A I S E &#39;`);
                } else {
                  return [
                    createTextVNode("' C O R E P R A I S E '")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_app_bar_title, {
                "scroll-behavior": "hide",
                "scroll-threshold": "0"
              }, {
                default: withCtx(() => [
                  createTextVNode("' C O R E P R A I S E '")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Heder.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SideMenu",
  __ssrInlineRender: true,
  emits: ["filterByColor", "filterByCategory"],
  setup(__props, { emit: __emit }) {
    const subMenu1 = ref(["refine"]);
    const subMenu2 = ref(["all", "tops", "other"]);
    const subMenu3 = ref(["black", "white", "orange-accent-1"]);
    const emit = __emit;
    function filterProducts(color) {
      emit("filterByColor", color);
    }
    function filterCategory(category) {
      emit("filterByCategory", category);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_navigation_drawer = resolveComponent("v-navigation-drawer");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_icon = resolveComponent("v-icon");
      _push(ssrRenderComponent(_component_v_navigation_drawer, mergeProps({
        width: 200,
        location: "right",
        floating: "",
        permanent: "",
        color: "transparent",
        bodre: "0"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, { dense: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(subMenu1.value, (n) => {
                    _push3(ssrRenderComponent(_component_v_col, {
                      key: n,
                      cols: "12"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_btn, {
                            elevation: 0,
                            color: "transparent"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(n)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(n), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_btn, {
                              elevation: 0,
                              color: "transparent"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(n), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(subMenu1.value, (n) => {
                      return openBlock(), createBlock(_component_v_col, {
                        key: n,
                        cols: "12"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_btn, {
                            elevation: 0,
                            color: "transparent"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(n), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_divider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_row, { dense: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(subMenu2.value, (category) => {
                    _push3(ssrRenderComponent(_component_v_col, {
                      key: category,
                      cols: "12"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_btn, {
                            elevation: 0,
                            color: "transparent",
                            onClick: ($event) => filterCategory(category)
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(category)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(category), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_btn, {
                              elevation: 0,
                              color: "transparent",
                              onClick: ($event) => filterCategory(category)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(category), 1)
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(subMenu2.value, (category) => {
                      return openBlock(), createBlock(_component_v_col, {
                        key: category,
                        cols: "12"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_btn, {
                            elevation: 0,
                            color: "transparent",
                            onClick: ($event) => filterCategory(category)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(category), 1)
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_divider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_row, { dense: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(subMenu3.value, (selectColor) => {
                    _push3(ssrRenderComponent(_component_v_col, {
                      key: selectColor,
                      cols: "12"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_btn, {
                            elevation: 0,
                            color: "transparent",
                            "append-icon": "mdi-circle",
                            onClick: ($event) => filterProducts(selectColor)
                          }, {
                            append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_icon, { color: selectColor }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_icon, { color: selectColor }, null, 8, ["color"])
                                ];
                              }
                            }),
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(selectColor)} `);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(selectColor) + " ", 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_btn, {
                              elevation: 0,
                              color: "transparent",
                              "append-icon": "mdi-circle",
                              onClick: ($event) => filterProducts(selectColor)
                            }, {
                              append: withCtx(() => [
                                createVNode(_component_v_icon, { color: selectColor }, null, 8, ["color"])
                              ]),
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(selectColor) + " ", 1)
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(subMenu3.value, (selectColor) => {
                      return openBlock(), createBlock(_component_v_col, {
                        key: selectColor,
                        cols: "12"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_btn, {
                            elevation: 0,
                            color: "transparent",
                            "append-icon": "mdi-circle",
                            onClick: ($event) => filterProducts(selectColor)
                          }, {
                            append: withCtx(() => [
                              createVNode(_component_v_icon, { color: selectColor }, null, 8, ["color"])
                            ]),
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(selectColor) + " ", 1)
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_row, { dense: "" }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(subMenu1.value, (n) => {
                    return openBlock(), createBlock(_component_v_col, {
                      key: n,
                      cols: "12"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_btn, {
                          elevation: 0,
                          color: "transparent"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(n), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              }),
              createVNode(_component_v_divider),
              createVNode(_component_v_row, { dense: "" }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(subMenu2.value, (category) => {
                    return openBlock(), createBlock(_component_v_col, {
                      key: category,
                      cols: "12"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_btn, {
                          elevation: 0,
                          color: "transparent",
                          onClick: ($event) => filterCategory(category)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(category), 1)
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              }),
              createVNode(_component_v_divider),
              createVNode(_component_v_row, { dense: "" }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(subMenu3.value, (selectColor) => {
                    return openBlock(), createBlock(_component_v_col, {
                      key: selectColor,
                      cols: "12"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_btn, {
                          elevation: 0,
                          color: "transparent",
                          "append-icon": "mdi-circle",
                          onClick: ($event) => filterProducts(selectColor)
                        }, {
                          append: withCtx(() => [
                            createVNode(_component_v_icon, { color: selectColor }, null, 8, ["color"])
                          ]),
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(selectColor) + " ", 1)
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SideMenu.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ProductCard",
  __ssrInlineRender: true,
  props: {
    filterColor: String,
    filterCategory: String
  },
  setup(__props) {
    const variants = ref([
      { title: 'sample TYPE "C" White', color: "WHITE", category: "TOPS", src: "https://imagedelivery.net/example/white.png" },
      { title: 'sample TYPE "C" Black', color: "BLACK", category: "OTHER", src: "https://imagedelivery.net/example/black.png" },
      { title: 'sample TYPE "C" White', color: "WHITE", category: "TOPS", src: "https://imagedelivery.net/example/white.png" },
      { title: 'sample TYPE "C" Black', color: "BLACK", category: "OTHER", src: "https://imagedelivery.net/example/black.png" },
      { title: 'sample TYPE "C" White', color: "WHITE", category: "TOPS", src: "https://imagedelivery.net/example/white.png" },
      { title: 'sample TYPE "C" Black', color: "BLACK", category: "OTHER", src: "https://imagedelivery.net/example/black.png" },
      { title: 'sample TYPE "C" White', color: "WHITE", category: "OTHER", src: "https://imagedelivery.net/example/white.png" },
      { title: 'sample TYPE "C" Black', color: "BLACK", category: "TOPS", src: "https://imagedelivery.net/example/black.png" },
      { title: 'sample TYPE "C" White', color: "WHITE", category: "OTHER", src: "https://imagedelivery.net/example/white.png" },
      { title: 'sample TYPE "C" Black', color: "BLACK", category: "TOPS", src: "https://imagedelivery.net/example/black.png" },
      { title: 'sample TYPE "C" White', color: "WHITE", category: "OTHER", src: "https://imagedelivery.net/example/white.png" },
      { title: 'sample TYPE "C" Black', color: "BLACK", category: "TOPS", src: "https://imagedelivery.net/example/black.png" }
    ]);
    const props = __props;
    const filteredVariants = computed(() => {
      if (props.filterCategory) {
        if (props.filterCategory.toLowerCase() === "all") {
          return variants.value;
        }
        return variants.value.filter(
          (product) => {
            var _a2;
            var _a;
            return product.category.toLowerCase() === ((_a2 = (_a = props.filterCategory) == null ? void 0 : _a.toLowerCase()) != null ? _a2 : "");
          }
        );
      }
      if (props.filterColor) {
        return variants.value.filter(
          (product) => {
            var _a2;
            var _a;
            return product.color.toLowerCase() === ((_a2 = (_a = props.filterColor) == null ? void 0 : _a.toLowerCase()) != null ? _a2 : "");
          }
        );
      }
      return variants.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_main = resolveComponent("v-main");
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_img = resolveComponent("v-img");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_v_btn = resolveComponent("v-btn");
      _push(ssrRenderComponent(_component_v_main, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_container, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_row, { dense: "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(filteredVariants.value, (product, i) => {
                          _push4(ssrRenderComponent(_component_v_col, {
                            key: i,
                            cols: "6",
                            md: "3"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_card, {
                                  class: "mx-auto",
                                  "max-width": "350"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_img, {
                                        src: product.src,
                                        class: "align-end",
                                        gradient: "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
                                        height: "350px",
                                        cover: ""
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_card_title, { class: "text-white" }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_v_card_title, {
                                                class: "text-white",
                                                textContent: toDisplayString(product.title)
                                              }, null, 8, ["textContent"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_v_card_actions, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_btn, { text: "" }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(`Buy`);
                                                } else {
                                                  return [
                                                    createTextVNode("Buy")
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_v_btn, { text: "" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Buy")
                                                ]),
                                                _: 1
                                              })
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_img, {
                                          src: product.src,
                                          class: "align-end",
                                          gradient: "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
                                          height: "350px",
                                          cover: ""
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_card_title, {
                                              class: "text-white",
                                              textContent: toDisplayString(product.title)
                                            }, null, 8, ["textContent"])
                                          ]),
                                          _: 2
                                        }, 1032, ["src"]),
                                        createVNode(_component_v_card_actions, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_btn, { text: "" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Buy")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_card, {
                                    class: "mx-auto",
                                    "max-width": "350"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_img, {
                                        src: product.src,
                                        class: "align-end",
                                        gradient: "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
                                        height: "350px",
                                        cover: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_card_title, {
                                            class: "text-white",
                                            textContent: toDisplayString(product.title)
                                          }, null, 8, ["textContent"])
                                        ]),
                                        _: 2
                                      }, 1032, ["src"]),
                                      createVNode(_component_v_card_actions, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_btn, { text: "" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Buy")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(filteredVariants.value, (product, i) => {
                            return openBlock(), createBlock(_component_v_col, {
                              key: i,
                              cols: "6",
                              md: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card, {
                                  class: "mx-auto",
                                  "max-width": "350"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_img, {
                                      src: product.src,
                                      class: "align-end",
                                      gradient: "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
                                      height: "350px",
                                      cover: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_card_title, {
                                          class: "text-white",
                                          textContent: toDisplayString(product.title)
                                        }, null, 8, ["textContent"])
                                      ]),
                                      _: 2
                                    }, 1032, ["src"]),
                                    createVNode(_component_v_card_actions, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_btn, { text: "" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Buy")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_row, { dense: "" }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(filteredVariants.value, (product, i) => {
                          return openBlock(), createBlock(_component_v_col, {
                            key: i,
                            cols: "6",
                            md: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card, {
                                class: "mx-auto",
                                "max-width": "350"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_img, {
                                    src: product.src,
                                    class: "align-end",
                                    gradient: "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
                                    height: "350px",
                                    cover: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card_title, {
                                        class: "text-white",
                                        textContent: toDisplayString(product.title)
                                      }, null, 8, ["textContent"])
                                    ]),
                                    _: 2
                                  }, 1032, ["src"]),
                                  createVNode(_component_v_card_actions, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_btn, { text: "" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Buy")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_container, null, {
                default: withCtx(() => [
                  createVNode(_component_v_row, { dense: "" }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(filteredVariants.value, (product, i) => {
                        return openBlock(), createBlock(_component_v_col, {
                          key: i,
                          cols: "6",
                          md: "3"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, {
                              class: "mx-auto",
                              "max-width": "350"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_img, {
                                  src: product.src,
                                  class: "align-end",
                                  gradient: "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",
                                  height: "350px",
                                  cover: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card_title, {
                                      class: "text-white",
                                      textContent: toDisplayString(product.title)
                                    }, null, 8, ["textContent"])
                                  ]),
                                  _: 2
                                }, 1032, ["src"]),
                                createVNode(_component_v_card_actions, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_btn, { text: "" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Buy")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    function scrollToTop() {
      (void 0).scrollTo({ top: 0, behavior: "smooth" });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_footer = resolveComponent("v-footer");
      const _component_v_btn = resolveComponent("v-btn");
      _push(ssrRenderComponent(_component_v_footer, mergeProps({
        class: "d-flex justify-center align-center",
        color: "transparent",
        rounded: "lg"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_btn, {
              elevation: 0,
              color: "transparent",
              onClick: scrollToTop
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` back to top \u2191 `);
                } else {
                  return [
                    createTextVNode(" back to top \u2191 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_btn, {
                elevation: 0,
                color: "transparent",
                onClick: scrollToTop
              }, {
                default: withCtx(() => [
                  createTextVNode(" back to top \u2191 ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const selectedColor = ref("");
    const selectedCategory = ref("");
    function handleFilterColor(color) {
      selectedColor.value = color;
      selectedCategory.value = "";
    }
    function handleFilterCategory(category) {
      selectedCategory.value = category;
      selectedColor.value = "";
    }
    ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_responsive = resolveComponent("v-responsive");
      const _component_v_app = resolveComponent("v-app");
      const _component_v_content = resolveComponent("v-content");
      _push(ssrRenderComponent(_component_v_responsive, mergeProps({ class: "border rounded" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_app, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_content, { color: "trransparent" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="video-background"${_scopeId3}><video autoplay loop muted playsinline class="video-element"${_scopeId3}><source${ssrRenderAttr("src", _imports_0)} type="video/mp4"${_scopeId3}></video>`);
                        _push4(ssrRenderComponent(_sfc_main$4, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$3, {
                          onFilterByColor: handleFilterColor,
                          onFilterByCategory: handleFilterCategory
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$2, {
                          filterColor: selectedColor.value,
                          filterCategory: selectedCategory.value
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$1, null, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "video-background" }, [
                            createVNode("video", {
                              autoplay: "",
                              loop: "",
                              muted: "",
                              playsinline: "",
                              class: "video-element"
                            }, [
                              createVNode("source", {
                                src: _imports_0,
                                type: "video/mp4"
                              })
                            ]),
                            createVNode(_sfc_main$4),
                            createVNode(_sfc_main$3, {
                              onFilterByColor: handleFilterColor,
                              onFilterByCategory: handleFilterCategory
                            }),
                            createVNode(_sfc_main$2, {
                              filterColor: selectedColor.value,
                              filterCategory: selectedCategory.value
                            }, null, 8, ["filterColor", "filterCategory"]),
                            createVNode(_sfc_main$1)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_content, { color: "trransparent" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "video-background" }, [
                          createVNode("video", {
                            autoplay: "",
                            loop: "",
                            muted: "",
                            playsinline: "",
                            class: "video-element"
                          }, [
                            createVNode("source", {
                              src: _imports_0,
                              type: "video/mp4"
                            })
                          ]),
                          createVNode(_sfc_main$4),
                          createVNode(_sfc_main$3, {
                            onFilterByColor: handleFilterColor,
                            onFilterByCategory: handleFilterCategory
                          }),
                          createVNode(_sfc_main$2, {
                            filterColor: selectedColor.value,
                            filterCategory: selectedCategory.value
                          }, null, 8, ["filterColor", "filterCategory"]),
                          createVNode(_sfc_main$1)
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_app, null, {
                default: withCtx(() => [
                  createVNode(_component_v_content, { color: "trransparent" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "video-background" }, [
                        createVNode("video", {
                          autoplay: "",
                          loop: "",
                          muted: "",
                          playsinline: "",
                          class: "video-element"
                        }, [
                          createVNode("source", {
                            src: _imports_0,
                            type: "video/mp4"
                          })
                        ]),
                        createVNode(_sfc_main$4),
                        createVNode(_sfc_main$3, {
                          onFilterByColor: handleFilterColor,
                          onFilterByCategory: handleFilterCategory
                        }),
                        createVNode(_sfc_main$2, {
                          filterColor: selectedColor.value,
                          filterCategory: selectedCategory.value
                        }, null, 8, ["filterColor", "filterCategory"]),
                        createVNode(_sfc_main$1)
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CclgD8KK.mjs.map
