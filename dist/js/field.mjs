import { resolveComponent as m, createElementBlock as o, openBlock as n, Fragment as d, renderList as f, createBlock as _, createCommentVNode as a, withCtx as y, createTextVNode as k, toDisplayString as u, createElementVNode as s } from "vue";
const b = { key: 0 }, v = { key: 1 }, L = { key: 0 }, g = ["innerHTML"], N = ["innerHTML"], h = {
  __name: "IndexField",
  props: {
    resource: Object,
    resourceName: String,
    resourceId: [String, Number],
    field: Object
  },
  setup(t) {
    function c(r) {
      return r.component === "date" && r.format && typeof dayjs < "u" ? dayjs(r.value).format(r.format) : r.value;
    }
    return (r, p) => {
      const i = m("router-link");
      return n(), o("div", null, [
        (n(!0), o(d, null, f(t.field.fields, (e, l) => (n(), o("span", { key: l }, [
          e.value && e.belongsToId ? (n(), _(i, {
            key: 0,
            to: { name: "detail", params: {
              resourceName: e.resourceName,
              resourceId: e.belongsToId
            } },
            class: "no-underline font-bold dim text-primary"
          }, {
            default: y(() => [
              t.field.showLabels ? (n(), o("span", b, u(e.name) + ": ", 1)) : a("", !0),
              k(" " + u(e.value), 1)
            ]),
            _: 2
          }, 1032, ["to"])) : (n(), o("span", v, [
            t.field.showLabels ? (n(), o("span", L, u(e.name) + ": ", 1)) : a("", !0),
            s("span", {
              innerHTML: c(e)
            }, null, 8, g)
          ])),
          l + 1 != t.field.fields.length ? (n(), o("span", {
            key: 2,
            innerHTML: t.field.separator
          }, null, 8, N)) : a("", !0)
        ]))), 128))
      ]);
    };
  }
}, T = { class: "flex border-b border-40" }, w = { class: "w-1/4 py-4" }, x = { class: "font-normal text-80" }, I = { class: "w-3/4 py-4" }, j = { class: "text-90" }, H = { key: 0 }, M = { key: 0 }, $ = { key: 1 }, S = { key: 0 }, V = ["innerHTML"], O = ["innerHTML"], B = {
  __name: "DetailField",
  props: {
    resource: Object,
    resourceName: String,
    resourceId: [String, Number],
    field: Object
  },
  setup(t) {
    function c(r) {
      return r.component === "date" && r.format && typeof dayjs < "u" ? dayjs(r.value).format(r.format) : r.value;
    }
    return (r, p) => {
      const i = m("router-link");
      return n(), o("div", null, [
        s("div", T, [
          s("div", w, [
            s("h4", x, [
              s("p", null, u(t.field.name), 1)
            ])
          ]),
          s("div", I, [
            s("p", j, [
              (n(!0), o(d, null, f(t.field.fields, (e, l) => (n(), o("span", { key: l }, [
                e.value ? (n(), o("span", H, [
                  e.value && e.belongsToId && !t.field.removeLinks ? (n(), _(i, {
                    key: 0,
                    to: { name: "detail", params: {
                      resourceName: e.resourceName,
                      resourceId: e.belongsToId
                    } },
                    class: "no-underline font-bold dim text-primary"
                  }, {
                    default: y(() => [
                      t.field.showLabels ? (n(), o("span", M, u(e.name) + ": ", 1)) : a("", !0),
                      k(" " + u(e.value), 1)
                    ]),
                    _: 2
                  }, 1032, ["to"])) : (n(), o("span", $, [
                    t.field.showLabels ? (n(), o("span", S, u(e.name) + ": ", 1)) : a("", !0),
                    s("span", {
                      innerHTML: c(e)
                    }, null, 8, V)
                  ])),
                  l + 1 != t.field.fields.length ? (n(), o("span", {
                    key: 2,
                    innerHTML: t.field.separator
                  }, null, 8, O)) : a("", !0)
                ])) : a("", !0)
              ]))), 128))
            ])
          ])
        ])
      ]);
    };
  }
};
Nova.booting((t) => {
  t.component("index-nova-grouped-field", h), t.component("detail-nova-grouped-field", B);
});
