import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext, ref, toDisplayString, createBlock, openBlock, Fragment, renderList, computed } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/workspaces/core-praise-ec/node_modules/hookable/dist/index.mjs";
import "/workspaces/core-praise-ec/node_modules/unctx/dist/index.mjs";
import "/workspaces/core-praise-ec/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/workspaces/core-praise-ec/node_modules/radix3/dist/index.mjs";
import "/workspaces/core-praise-ec/node_modules/defu/dist/defu.mjs";
import "/workspaces/core-praise-ec/node_modules/ufo/dist/index.mjs";
const _imports_0 = "" + __buildAssetsURL("background.B1gw--Ug.mp4");
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
                  _push3(`← back to`);
                } else {
                  return [
                    createTextVNode("← back to")
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
                  createTextVNode("← back to")
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
                  _push3(` C O R E P R A I S E `);
                } else {
                  return [
                    createTextVNode(" C O R E P R A I S E ")
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
                  createTextVNode(" C O R E P R A I S E ")
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
    const items1 = ref([
      { title: "refine" }
    ]);
    const items2 = ref([
      { title: "all" },
      { title: "tops" },
      { title: "other" }
    ]);
    const items3 = ref([
      { icon: "mdi-circle", title: "black" },
      { icon: "mdi-circle", title: "white" },
      { icon: "mdi-circle", title: "orange-accent-1" }
    ]);
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
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_list_item_subtitle = resolveComponent("v-list-item-subtitle");
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
                  _push3(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(items1.value, (item) => {
                          _push4(ssrRenderComponent(_component_v_list_item, {
                            key: item.title,
                            link: "",
                            onClick: ($event) => filterProducts(item.title)
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_list_item_subtitle, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(item.title)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(item.title), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_list_item_subtitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.title), 1)
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
                          (openBlock(true), createBlock(Fragment, null, renderList(items1.value, (item) => {
                            return openBlock(), createBlock(_component_v_list_item, {
                              key: item.title,
                              link: "",
                              onClick: ($event) => filterProducts(item.title)
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_list_item_subtitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.title), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["onClick"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, { cols: "12" }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(items1.value, (item) => {
                          return openBlock(), createBlock(_component_v_list_item, {
                            key: item.title,
                            link: "",
                            onClick: ($event) => filterProducts(item.title)
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_list_item_subtitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.title), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["onClick"]);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_divider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_row, { dense: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(items2.value, (item) => {
                          _push4(ssrRenderComponent(_component_v_list_item, {
                            key: item.title,
                            link: "",
                            onClick: ($event) => filterCategory(item.title)
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_list_item_subtitle, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(item.title)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(item.title), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_list_item_subtitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.title), 1)
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
                          (openBlock(true), createBlock(Fragment, null, renderList(items2.value, (item) => {
                            return openBlock(), createBlock(_component_v_list_item, {
                              key: item.title,
                              link: "",
                              onClick: ($event) => filterCategory(item.title)
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_list_item_subtitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.title), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["onClick"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, { cols: "12" }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(items2.value, (item) => {
                          return openBlock(), createBlock(_component_v_list_item, {
                            key: item.title,
                            link: "",
                            onClick: ($event) => filterCategory(item.title)
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_list_item_subtitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.title), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["onClick"]);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_divider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_row, { dense: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(items3.value, (item) => {
                          _push4(ssrRenderComponent(_component_v_list_item, {
                            key: item.title,
                            link: "",
                            onClick: ($event) => filterProducts(item.title)
                          }, {
                            append: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_icon, {
                                  icon: item.icon,
                                  color: item.title
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_icon, {
                                    icon: item.icon,
                                    color: item.title
                                  }, null, 8, ["icon", "color"])
                                ];
                              }
                            }),
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_list_item_subtitle, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(item.title)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(item.title), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_list_item_subtitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.title), 1)
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
                          (openBlock(true), createBlock(Fragment, null, renderList(items3.value, (item) => {
                            return openBlock(), createBlock(_component_v_list_item, {
                              key: item.title,
                              link: "",
                              onClick: ($event) => filterProducts(item.title)
                            }, {
                              append: withCtx(() => [
                                createVNode(_component_v_icon, {
                                  icon: item.icon,
                                  color: item.title
                                }, null, 8, ["icon", "color"])
                              ]),
                              default: withCtx(() => [
                                createVNode(_component_v_list_item_subtitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.title), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["onClick"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, null, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(items3.value, (item) => {
                          return openBlock(), createBlock(_component_v_list_item, {
                            key: item.title,
                            link: "",
                            onClick: ($event) => filterProducts(item.title)
                          }, {
                            append: withCtx(() => [
                              createVNode(_component_v_icon, {
                                icon: item.icon,
                                color: item.title
                              }, null, 8, ["icon", "color"])
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_v_list_item_subtitle, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.title), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["onClick"]);
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
              createVNode(_component_v_row, { dense: "" }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, { cols: "12" }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(items1.value, (item) => {
                        return openBlock(), createBlock(_component_v_list_item, {
                          key: item.title,
                          link: "",
                          onClick: ($event) => filterProducts(item.title)
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_list_item_subtitle, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.title), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["onClick"]);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_divider),
              createVNode(_component_v_row, { dense: "" }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, { cols: "12" }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(items2.value, (item) => {
                        return openBlock(), createBlock(_component_v_list_item, {
                          key: item.title,
                          link: "",
                          onClick: ($event) => filterCategory(item.title)
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_list_item_subtitle, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.title), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["onClick"]);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_divider),
              createVNode(_component_v_row, { dense: "" }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, null, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(items3.value, (item) => {
                        return openBlock(), createBlock(_component_v_list_item, {
                          key: item.title,
                          link: "",
                          onClick: ($event) => filterProducts(item.title)
                        }, {
                          append: withCtx(() => [
                            createVNode(_component_v_icon, {
                              icon: item.icon,
                              color: item.title
                            }, null, 8, ["icon", "color"])
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_v_list_item_subtitle, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.title), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["onClick"]);
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
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" White', color: "WHITE", price: "77.00 USD", category: "OTHER", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/2bfbeaa5090facf3f577.png/fit=cover,w=920,h=920" },
      { title: 'sample TYPE "C" Black', color: "BLACK", price: "77.00 USD", category: "TOPS", src: "https://imagedelivery.net/QondspN4HIUvB_R16-ddAQ/681c4ee226db9f935476ab2b/bd7a229f4ae9f36d5636.png/fit=cover,w=920,h=920" }
    ]);
    const props = __props;
    const filteredVariants = computed(() => {
      if (props.filterCategory) {
        if (props.filterCategory.toLowerCase() === "all") {
          return variants.value;
        }
        return variants.value.filter(
          (product) => {
            var _a;
            return product.category.toLowerCase() === (((_a = props.filterCategory) == null ? void 0 : _a.toLowerCase()) ?? "");
          }
        );
      }
      if (props.filterColor) {
        return variants.value.filter(
          (product) => {
            var _a;
            return product.color.toLowerCase() === (((_a = props.filterColor) == null ? void 0 : _a.toLowerCase()) ?? "");
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
                            md: "2"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_card, {
                                  elevation: 0,
                                  onClick: ($event) => console.log(product),
                                  hover: ""
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_card, {
                                        class: "mx-auto",
                                        "max-width": "350"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_img, {
                                              src: product.src,
                                              class: "align-end",
                                              gradient: "to bottom",
                                              height: "350px",
                                              cover: ""
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_v_img, {
                                                src: product.src,
                                                class: "align-end",
                                                gradient: "to bottom",
                                                height: "350px",
                                                cover: ""
                                              }, null, 8, ["src"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`<div class="text-center text-caption"${_scopeId5}><p${_scopeId5}>${ssrInterpolate(product.title)}</p><p${_scopeId5}>${ssrInterpolate(product.color)}</p><p${_scopeId5}>${ssrInterpolate(product.price)}</p></div>`);
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
                                              gradient: "to bottom",
                                              height: "350px",
                                              cover: ""
                                            }, null, 8, ["src"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode("div", { class: "text-center text-caption" }, [
                                          createVNode("p", null, toDisplayString(product.title), 1),
                                          createVNode("p", null, toDisplayString(product.color), 1),
                                          createVNode("p", null, toDisplayString(product.price), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_card, {
                                    elevation: 0,
                                    onClick: ($event) => console.log(product),
                                    hover: ""
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
                                            gradient: "to bottom",
                                            height: "350px",
                                            cover: ""
                                          }, null, 8, ["src"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode("div", { class: "text-center text-caption" }, [
                                        createVNode("p", null, toDisplayString(product.title), 1),
                                        createVNode("p", null, toDisplayString(product.color), 1),
                                        createVNode("p", null, toDisplayString(product.price), 1)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
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
                              md: "2"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card, {
                                  elevation: 0,
                                  onClick: ($event) => console.log(product),
                                  hover: ""
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
                                          gradient: "to bottom",
                                          height: "350px",
                                          cover: ""
                                        }, null, 8, ["src"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode("div", { class: "text-center text-caption" }, [
                                      createVNode("p", null, toDisplayString(product.title), 1),
                                      createVNode("p", null, toDisplayString(product.color), 1),
                                      createVNode("p", null, toDisplayString(product.price), 1)
                                    ])
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_row, { dense: "" }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(filteredVariants.value, (product, i) => {
                          return openBlock(), createBlock(_component_v_col, {
                            key: i,
                            cols: "6",
                            md: "2"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card, {
                                elevation: 0,
                                onClick: ($event) => console.log(product),
                                hover: ""
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
                                        gradient: "to bottom",
                                        height: "350px",
                                        cover: ""
                                      }, null, 8, ["src"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("div", { class: "text-center text-caption" }, [
                                    createVNode("p", null, toDisplayString(product.title), 1),
                                    createVNode("p", null, toDisplayString(product.color), 1),
                                    createVNode("p", null, toDisplayString(product.price), 1)
                                  ])
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
                          md: "2"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, {
                              elevation: 0,
                              onClick: ($event) => console.log(product),
                              hover: ""
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
                                      gradient: "to bottom",
                                      height: "350px",
                                      cover: ""
                                    }, null, 8, ["src"])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode("div", { class: "text-center text-caption" }, [
                                  createVNode("p", null, toDisplayString(product.title), 1),
                                  createVNode("p", null, toDisplayString(product.color), 1),
                                  createVNode("p", null, toDisplayString(product.price), 1)
                                ])
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
                  _push3(`<p class="blink" data-v-0d252de7${_scopeId2}>back to top ↑</p>`);
                } else {
                  return [
                    createVNode("p", { class: "blink" }, "back to top ↑")
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
                  createVNode("p", { class: "blink" }, "back to top ↑")
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
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0d252de7"]]);
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
                        _push4(ssrRenderComponent(Footer, null, null, _parent4, _scopeId3));
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
                            createVNode(Footer)
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
                          createVNode(Footer)
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
                        createVNode(Footer)
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
export {
  _sfc_main as default
};
//# sourceMappingURL=index-BWhVF0Dq.js.map
