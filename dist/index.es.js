import rt, { useRef as le, useEffect as z, useState as V } from "react";
var et = { exports: {} }, Oe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bt;
function ir() {
  if (bt)
    return Oe;
  bt = 1;
  var o = rt, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(s, f, g) {
    var p, v = {}, b = null, T = null;
    g !== void 0 && (b = "" + g), f.key !== void 0 && (b = "" + f.key), f.ref !== void 0 && (T = f.ref);
    for (p in f)
      n.call(f, p) && !c.hasOwnProperty(p) && (v[p] = f[p]);
    if (s && s.defaultProps)
      for (p in f = s.defaultProps, f)
        v[p] === void 0 && (v[p] = f[p]);
    return { $$typeof: e, type: s, key: b, ref: T, props: v, _owner: a.current };
  }
  return Oe.Fragment = r, Oe.jsx = u, Oe.jsxs = u, Oe;
}
var Pe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tt;
function lr() {
  return Tt || (Tt = 1, process.env.NODE_ENV !== "production" && function() {
    var o = rt, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), s = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), y = Symbol.iterator, E = "@@iterator";
    function w(t) {
      if (t === null || typeof t != "object")
        return null;
      var i = y && t[y] || t[E];
      return typeof i == "function" ? i : null;
    }
    var _ = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(t) {
      {
        for (var i = arguments.length, d = new Array(i > 1 ? i - 1 : 0), x = 1; x < i; x++)
          d[x - 1] = arguments[x];
        j("error", t, d);
      }
    }
    function j(t, i, d) {
      {
        var x = _.ReactDebugCurrentFrame, C = x.getStackAddendum();
        C !== "" && (i += "%s", d = d.concat([C]));
        var P = d.map(function(k) {
          return String(k);
        });
        P.unshift("Warning: " + i), Function.prototype.apply.call(console[t], console, P);
      }
    }
    var m = !1, S = !1, H = !1, O = !1, ge = !1, ae;
    ae = Symbol.for("react.module.reference");
    function W(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === n || t === c || ge || t === a || t === g || t === p || O || t === T || m || S || H || typeof t == "object" && t !== null && (t.$$typeof === b || t.$$typeof === v || t.$$typeof === u || t.$$typeof === s || t.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === ae || t.getModuleId !== void 0));
    }
    function I(t, i, d) {
      var x = t.displayName;
      if (x)
        return x;
      var C = i.displayName || i.name || "";
      return C !== "" ? d + "(" + C + ")" : d;
    }
    function J(t) {
      return t.displayName || "Context";
    }
    function M(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case c:
          return "Profiler";
        case a:
          return "StrictMode";
        case g:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case s:
            var i = t;
            return J(i) + ".Consumer";
          case u:
            var d = t;
            return J(d._context) + ".Provider";
          case f:
            return I(t, t.render, "ForwardRef");
          case v:
            var x = t.displayName || null;
            return x !== null ? x : M(t.type) || "Memo";
          case b: {
            var C = t, P = C._payload, k = C._init;
            try {
              return M(k(P));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var N = Object.assign, q = 0, ce, Z, de, $, ie, G, Ee;
    function me() {
    }
    me.__reactDisabledLog = !0;
    function $e() {
      {
        if (q === 0) {
          ce = console.log, Z = console.info, de = console.warn, $ = console.error, ie = console.group, G = console.groupCollapsed, Ee = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: me,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        q++;
      }
    }
    function xe() {
      {
        if (q--, q === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: N({}, t, {
              value: ce
            }),
            info: N({}, t, {
              value: Z
            }),
            warn: N({}, t, {
              value: de
            }),
            error: N({}, t, {
              value: $
            }),
            group: N({}, t, {
              value: ie
            }),
            groupCollapsed: N({}, t, {
              value: G
            }),
            groupEnd: N({}, t, {
              value: Ee
            })
          });
        }
        q < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ve = _.ReactCurrentDispatcher, ee;
    function pe(t, i, d) {
      {
        if (ee === void 0)
          try {
            throw Error();
          } catch (C) {
            var x = C.stack.trim().match(/\n( *(at )?)/);
            ee = x && x[1] || "";
          }
        return `
` + ee + t;
      }
    }
    var te = !1, fe;
    {
      var We = typeof WeakMap == "function" ? WeakMap : Map;
      fe = new We();
    }
    function be(t, i) {
      if (!t || te)
        return "";
      {
        var d = fe.get(t);
        if (d !== void 0)
          return d;
      }
      var x;
      te = !0;
      var C = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var P;
      P = ve.current, ve.current = null, $e();
      try {
        if (i) {
          var k = function() {
            throw Error();
          };
          if (Object.defineProperty(k.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(k, []);
            } catch (Q) {
              x = Q;
            }
            Reflect.construct(t, [], k);
          } else {
            try {
              k.call();
            } catch (Q) {
              x = Q;
            }
            t.call(k.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Q) {
            x = Q;
          }
          t();
        }
      } catch (Q) {
        if (Q && x && typeof Q.stack == "string") {
          for (var D = Q.stack.split(`
`), K = x.stack.split(`
`), B = D.length - 1, Y = K.length - 1; B >= 1 && Y >= 0 && D[B] !== K[Y]; )
            Y--;
          for (; B >= 1 && Y >= 0; B--, Y--)
            if (D[B] !== K[Y]) {
              if (B !== 1 || Y !== 1)
                do
                  if (B--, Y--, Y < 0 || D[B] !== K[Y]) {
                    var re = `
` + D[B].replace(" at new ", " at ");
                    return t.displayName && re.includes("<anonymous>") && (re = re.replace("<anonymous>", t.displayName)), typeof t == "function" && fe.set(t, re), re;
                  }
                while (B >= 1 && Y >= 0);
              break;
            }
        }
      } finally {
        te = !1, ve.current = P, xe(), Error.prepareStackTrace = C;
      }
      var Se = t ? t.displayName || t.name : "", ye = Se ? pe(Se) : "";
      return typeof t == "function" && fe.set(t, ye), ye;
    }
    function oe(t, i, d) {
      return be(t, !1);
    }
    function Te(t) {
      var i = t.prototype;
      return !!(i && i.isReactComponent);
    }
    function se(t, i, d) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return be(t, Te(t));
      if (typeof t == "string")
        return pe(t);
      switch (t) {
        case g:
          return pe("Suspense");
        case p:
          return pe("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case f:
            return oe(t.render);
          case v:
            return se(t.type, i, d);
          case b: {
            var x = t, C = x._payload, P = x._init;
            try {
              return se(P(C), i, d);
            } catch {
            }
          }
        }
      return "";
    }
    var ue = Object.prototype.hasOwnProperty, Ne = {}, Fe = _.ReactDebugCurrentFrame;
    function _e(t) {
      if (t) {
        var i = t._owner, d = se(t.type, t._source, i ? i.type : null);
        Fe.setExtraStackFrame(d);
      } else
        Fe.setExtraStackFrame(null);
    }
    function Ye(t, i, d, x, C) {
      {
        var P = Function.call.bind(ue);
        for (var k in t)
          if (P(t, k)) {
            var D = void 0;
            try {
              if (typeof t[k] != "function") {
                var K = Error((x || "React class") + ": " + d + " type `" + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[k] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw K.name = "Invariant Violation", K;
              }
              D = t[k](i, k, x, d, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (B) {
              D = B;
            }
            D && !(D instanceof Error) && (_e(C), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", x || "React class", d, k, typeof D), _e(null)), D instanceof Error && !(D.message in Ne) && (Ne[D.message] = !0, _e(C), h("Failed %s type: %s", d, D.message), _e(null));
          }
      }
    }
    var Ae = Array.isArray;
    function ke(t) {
      return Ae(t);
    }
    function ze(t) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, d = i && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return d;
      }
    }
    function Ue(t) {
      try {
        return R(t), !1;
      } catch {
        return !0;
      }
    }
    function R(t) {
      return "" + t;
    }
    function F(t) {
      if (Ue(t))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(t)), R(t);
    }
    var L = _.ReactCurrentOwner, X = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ce, ft, Ge;
    Ge = {};
    function Yt(t) {
      if (ue.call(t, "ref")) {
        var i = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function At(t) {
      if (ue.call(t, "key")) {
        var i = Object.getOwnPropertyDescriptor(t, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function zt(t, i) {
      if (typeof t.ref == "string" && L.current && i && L.current.stateNode !== i) {
        var d = M(L.current.type);
        Ge[d] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', M(L.current.type), t.ref), Ge[d] = !0);
      }
    }
    function Ut(t, i) {
      {
        var d = function() {
          Ce || (Ce = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        d.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: d,
          configurable: !0
        });
      }
    }
    function Gt(t, i) {
      {
        var d = function() {
          ft || (ft = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        d.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: d,
          configurable: !0
        });
      }
    }
    var Kt = function(t, i, d, x, C, P, k) {
      var D = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: t,
        key: i,
        ref: d,
        props: k,
        // Record the component responsible for creating this element.
        _owner: P
      };
      return D._store = {}, Object.defineProperty(D._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(D, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.defineProperty(D, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: C
      }), Object.freeze && (Object.freeze(D.props), Object.freeze(D)), D;
    };
    function Jt(t, i, d, x, C) {
      {
        var P, k = {}, D = null, K = null;
        d !== void 0 && (F(d), D = "" + d), At(i) && (F(i.key), D = "" + i.key), Yt(i) && (K = i.ref, zt(i, C));
        for (P in i)
          ue.call(i, P) && !X.hasOwnProperty(P) && (k[P] = i[P]);
        if (t && t.defaultProps) {
          var B = t.defaultProps;
          for (P in B)
            k[P] === void 0 && (k[P] = B[P]);
        }
        if (D || K) {
          var Y = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          D && Ut(k, Y), K && Gt(k, Y);
        }
        return Kt(t, D, K, C, x, L.current, k);
      }
    }
    var Ke = _.ReactCurrentOwner, ht = _.ReactDebugCurrentFrame;
    function je(t) {
      if (t) {
        var i = t._owner, d = se(t.type, t._source, i ? i.type : null);
        ht.setExtraStackFrame(d);
      } else
        ht.setExtraStackFrame(null);
    }
    var Je;
    Je = !1;
    function Qe(t) {
      return typeof t == "object" && t !== null && t.$$typeof === e;
    }
    function gt() {
      {
        if (Ke.current) {
          var t = M(Ke.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Qt(t) {
      return "";
    }
    var pt = {};
    function qt(t) {
      {
        var i = gt();
        if (!i) {
          var d = typeof t == "string" ? t : t.displayName || t.name;
          d && (i = `

Check the top-level render call using <` + d + ">.");
        }
        return i;
      }
    }
    function yt(t, i) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var d = qt(i);
        if (pt[d])
          return;
        pt[d] = !0;
        var x = "";
        t && t._owner && t._owner !== Ke.current && (x = " It was passed a child from " + M(t._owner.type) + "."), je(t), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', d, x), je(null);
      }
    }
    function mt(t, i) {
      {
        if (typeof t != "object")
          return;
        if (ke(t))
          for (var d = 0; d < t.length; d++) {
            var x = t[d];
            Qe(x) && yt(x, i);
          }
        else if (Qe(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var C = w(t);
          if (typeof C == "function" && C !== t.entries)
            for (var P = C.call(t), k; !(k = P.next()).done; )
              Qe(k.value) && yt(k.value, i);
        }
      }
    }
    function Zt(t) {
      {
        var i = t.type;
        if (i == null || typeof i == "string")
          return;
        var d;
        if (typeof i == "function")
          d = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === v))
          d = i.propTypes;
        else
          return;
        if (d) {
          var x = M(i);
          Ye(d, t.props, "prop", x, t);
        } else if (i.PropTypes !== void 0 && !Je) {
          Je = !0;
          var C = M(i);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", C || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function er(t) {
      {
        for (var i = Object.keys(t.props), d = 0; d < i.length; d++) {
          var x = i[d];
          if (x !== "children" && x !== "key") {
            je(t), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", x), je(null);
            break;
          }
        }
        t.ref !== null && (je(t), h("Invalid attribute `ref` supplied to `React.Fragment`."), je(null));
      }
    }
    var xt = {};
    function vt(t, i, d, x, C, P) {
      {
        var k = W(t);
        if (!k) {
          var D = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (D += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var K = Qt();
          K ? D += K : D += gt();
          var B;
          t === null ? B = "null" : ke(t) ? B = "array" : t !== void 0 && t.$$typeof === e ? (B = "<" + (M(t.type) || "Unknown") + " />", D = " Did you accidentally export a JSX literal instead of a component?") : B = typeof t, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", B, D);
        }
        var Y = Jt(t, i, d, C, P);
        if (Y == null)
          return Y;
        if (k) {
          var re = i.children;
          if (re !== void 0)
            if (x)
              if (ke(re)) {
                for (var Se = 0; Se < re.length; Se++)
                  mt(re[Se], t);
                Object.freeze && Object.freeze(re);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              mt(re, t);
        }
        if (ue.call(i, "key")) {
          var ye = M(t), Q = Object.keys(i).filter(function(ar) {
            return ar !== "key";
          }), qe = Q.length > 0 ? "{key: someKey, " + Q.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!xt[ye + qe]) {
            var sr = Q.length > 0 ? "{" + Q.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, qe, ye, sr, ye), xt[ye + qe] = !0;
          }
        }
        return t === n ? er(Y) : Zt(Y), Y;
      }
    }
    function tr(t, i, d) {
      return vt(t, i, d, !0);
    }
    function rr(t, i, d) {
      return vt(t, i, d, !1);
    }
    var nr = rr, or = tr;
    Pe.Fragment = n, Pe.jsx = nr, Pe.jsxs = or;
  }()), Pe;
}
process.env.NODE_ENV === "production" ? et.exports = ir() : et.exports = lr();
var l = et.exports;
const jt = ({
  scroll: o,
  rootStyle: e,
  bodyStyle: r,
  onScroll: n
}) => {
  const a = le(null);
  return z(() => {
    a.current && (a.current.scrollLeft = o);
  }, [o]), /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: a,
      dir: "ltr",
      className: "horizontal-scroll-root",
      style: e,
      onScroll: n,
      children: /* @__PURE__ */ l.jsx("div", { className: "horizontal-scroll-body", style: r })
    }
  );
}, Ze = ["#58d9a4", "#8777da", "#ffc400", "#ff9a1f", "#2684ff", "#fe7551", "#00c8e5", "#0052ca", "#5345a8"], St = "#fac365", nt = (o, e = ot) => {
  const { tasks: r, dates: n } = o;
  let a = -1;
  const c = n[1].getTime() - n[0].getTime() - n[1].getTimezoneOffset() * 60 * 1e3 + n[0].getTimezoneOffset() * 60 * 1e3;
  return r.map((u, s) => (u.type === "project" && a++, e({
    ...o,
    task: u,
    taskIndex: s,
    dateDelta: c
  }, a)));
}, ot = (o, e) => {
  const r = e > Ze.length ? e % Ze.length : e, n = Ze[r];
  return {
    task: st({ ...o, backgroundColor: n }),
    project: at({ ...o, backgroundColor: n })
  }[o.task.type];
}, st = (o) => {
  const {
    task: e,
    taskIndex: r,
    dates: n,
    dateDelta: a,
    rtl: c,
    multiBarRowMode: u,
    // style
    columnWidth: s,
    rowHeight: f,
    taskHeight: g,
    barCornerRadius: p,
    handleWidth: v,
    backgroundColor: b
  } = o;
  let T, y;
  c ? (y = Ie(e.start, n, a, s), T = Ie(e.end, n, a, s)) : (T = Le(e.start, n, a, s), y = Le(e.end, n, a, s));
  let E = e.type;
  E === "task" && y - T < v * 2 && (E = "smalltask", y = T + v * 2);
  const [w, _] = he(
    T,
    y,
    e.progress,
    c
  ), h = u === !0 && typeof e.line < "u" ? e.line : r, j = wt(h, f, g), m = e.type === "project" ? e.expanded : void 0, S = {
    backgroundColor: b || St,
    ...e.styles
  };
  return {
    ...e,
    typeInternal: E,
    x1: T,
    x2: y,
    y: j,
    index: r,
    progressX: _,
    progressWidth: w,
    barCornerRadius: p,
    handleWidth: v,
    expanded: m,
    height: g,
    barChildren: [],
    styles: S
  };
}, at = (o) => {
  const {
    task: e,
    taskIndex: r,
    dates: n,
    dateDelta: a,
    rtl: c,
    multiBarRowMode: u,
    // style
    columnWidth: s,
    rowHeight: f,
    taskHeight: g,
    barCornerRadius: p,
    handleWidth: v,
    backgroundColor: b
  } = o;
  let T, y;
  c ? (y = Ie(e.start, n, a, s), T = Ie(e.end, n, a, s)) : (T = Le(e.start, n, a, s), y = Le(e.end, n, a, s));
  const [E, w] = he(
    T,
    y,
    e.progress,
    c
  ), _ = u === !0 && typeof e.line < "u" ? e.line : r, h = wt(_, f, g), j = e.type === "project" ? e.expanded : void 0, m = {
    backgroundColor: b || St,
    ...e.styles
  };
  return {
    ...e,
    typeInternal: e.type,
    x1: T,
    x2: y,
    y: h,
    index: r,
    progressX: w,
    progressWidth: E,
    barCornerRadius: p,
    handleWidth: v,
    expanded: j,
    height: g,
    barChildren: [],
    styles: m
  };
}, Le = (o, e, r, n) => {
  const a = ~~((o.getTime() - e[0].getTime() + o.getTimezoneOffset() - e[0].getTimezoneOffset()) / r);
  return Math.round(
    (a + (o.getTime() - e[a].getTime() - o.getTimezoneOffset() * 60 * 1e3 + e[a].getTimezoneOffset() * 60 * 1e3) / r) * n
  );
}, Ie = (o, e, r, n) => {
  let a = Le(o, e, r, n);
  return a += n, a;
}, wt = (o, e, r) => o * e + (e - r) / 2, he = (o, e, r, n) => {
  const a = (e - o) * r * 0.01;
  let c;
  return n ? c = e - a : c = o, [a, c];
}, Rt = (o, e) => {
  const r = e.x2 - e.x1, n = Math.round(o * 100 / r);
  return n >= 100 ? 100 : n <= 0 ? 0 : n;
}, cr = (o, e) => {
  if (o >= e.x2)
    return 100;
  if (o <= e.x1)
    return 0;
  {
    const r = e.x2 - e.x1;
    return Math.round((o - e.x1) * 100 / r);
  }
}, ur = (o, e) => {
  if (o >= e.x2)
    return 0;
  if (o <= e.x1)
    return 100;
  {
    const r = e.x2 - e.x1;
    return Math.round((e.x2 - o) * 100 / r);
  }
}, Dt = (o, e, r) => [
  o - 5,
  e + r,
  o + 5,
  e + r,
  o,
  e + r - 8.66
].join(","), dr = (o, e, r) => {
  o >= r.x2 - r.handleWidth * 2 && (o = r.x2 - r.handleWidth * 2);
  const a = Math.round((o - r.x1) / e) * e;
  return r.x1 + a;
}, fr = (o, e, r) => {
  o <= r.x1 + r.handleWidth * 2 && (o = r.x1 + r.handleWidth * 2);
  const a = Math.round((o - r.x2) / e) * e;
  return r.x2 + a;
}, hr = (o, e, r) => {
  const a = Math.round((o - r.x1) / e) * e, c = r.x1 + a, u = c + r.x2 - r.x1;
  return [c, u];
}, we = (o, e, r, n, a) => {
  let c = new Date((o - e) / n * a + r.getTime());
  return c = new Date(
    c.getTime() + (c.getTimezoneOffset() - r.getTimezoneOffset()) * 6e4
  ), c;
}, He = (o, e, r, n, a, c, u) => {
  let s;
  switch (r.type) {
    default:
      s = gr(
        o,
        e,
        r,
        n,
        a,
        c,
        u
      );
      break;
  }
  return s;
}, gr = (o, e, r, n, a, c, u) => {
  const s = { ...r };
  let f = !1;
  switch (e) {
    case "progress":
      if (u ? s.progress = ur(o, r) : s.progress = cr(o, r), f = s.progress !== r.progress, f) {
        const [g, p] = he(
          s.x1,
          s.x2,
          s.progress,
          u
        );
        s.progressWidth = g, s.progressX = p;
      }
      break;
    case "start": {
      const g = dr(o, n, r);
      if (s.x1 = g, f = s.x1 !== r.x1, f) {
        u ? s.end = we(
          g,
          r.x1,
          r.end,
          n,
          a
        ) : s.start = we(
          g,
          r.x1,
          r.start,
          n,
          a
        );
        const [p, v] = he(
          s.x1,
          s.x2,
          s.progress,
          u
        );
        s.progressWidth = p, s.progressX = v;
      }
      break;
    }
    case "end": {
      const g = fr(o, n, r);
      if (s.x2 = g, f = s.x2 !== r.x2, f) {
        u ? s.start = we(
          g,
          r.x2,
          r.start,
          n,
          a
        ) : s.end = we(
          g,
          r.x2,
          r.end,
          n,
          a
        );
        const [p, v] = he(
          s.x1,
          s.x2,
          s.progress,
          u
        );
        s.progressWidth = p, s.progressX = v;
      }
      break;
    }
    case "move": {
      const [g, p] = hr(
        o - c,
        n,
        r
      );
      if (f = g !== r.x1, f) {
        s.start = we(
          g,
          r.x1,
          r.start,
          n,
          a
        ), s.end = we(
          p,
          r.x2,
          r.end,
          n,
          a
        ), s.x1 = g, s.x2 = p;
        const [v, b] = he(
          s.x1,
          s.x2,
          s.progress,
          u
        );
        s.progressWidth = v, s.progressX = b;
      }
      break;
    }
  }
  return { isChanged: f, changedTask: s };
}, pr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  convertToBar: st,
  convertToBarTask: ot,
  convertToBarTasks: nt,
  convertToProject: at,
  getProgressPoint: Dt,
  handleTaskBySVGMouseEvent: He,
  progressByProgressWidth: Rt,
  progressWithByParams: he
}, Symbol.toStringTag, { value: "Module" }));
var A = /* @__PURE__ */ ((o) => (o.QuarterDay = "Quarter Day", o.HalfDay = "Half Day", o.Day = "Day", o.Week = "Week", o.Month = "Month", o))(A || {});
const yr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ViewMode: A
}, Symbol.toStringTag, { value: "Module" })), _t = {}, Ve = (o, e = {}) => {
  const r = JSON.stringify([o, e]);
  let n = _t[r];
  return n || (n = new Intl.DateTimeFormat(o, e), _t[r] = n), n;
}, U = (o, e, r) => new Date(
  o.getFullYear() + (r === "year" ? e : 0),
  o.getMonth() + (r === "month" ? e : 0),
  o.getDate() + (r === "day" ? e : 0),
  o.getHours() + (r === "hour" ? e : 0),
  o.getMinutes() + (r === "minute" ? e : 0),
  o.getSeconds() + (r === "second" ? e : 0),
  o.getMilliseconds() + (r === "millisecond" ? e : 0)
), ne = (o, e) => {
  const r = [
    "millisecond",
    "second",
    "minute",
    "hour",
    "day",
    "month",
    "year"
  ], n = (c) => {
    const u = r.indexOf(e);
    return r.indexOf(c) <= u;
  };
  return new Date(
    o.getFullYear(),
    n("year") ? 0 : o.getMonth(),
    n("month") ? 1 : o.getDate(),
    n("day") ? 0 : o.getHours(),
    n("hour") ? 0 : o.getMinutes(),
    n("minute") ? 0 : o.getSeconds(),
    n("second") ? 0 : o.getMilliseconds()
  );
}, Xe = (o, e = A.Day) => {
  let r = o[0].start, n = o[0].start;
  for (const a of o)
    a.start < r && (r = a.start), a.end > n && (n = a.end);
  switch (e) {
    case A.Month:
      r = U(r, -1, "month"), r = ne(r, "month"), n = U(n, 1, "year"), n = ne(n, "year");
      break;
    case A.Week:
      r = ne(r, "day"), n = ne(n, "day"), r = U(mr(r), -7, "day"), n = U(n, 1.5, "month");
      break;
    case A.Day:
      r = ne(r, "day"), n = ne(n, "day"), r = U(r, -1, "day"), n = U(n, 19, "day");
      break;
    case A.QuarterDay:
      r = ne(r, "day"), n = ne(n, "day"), r = U(r, -1, "day"), n = U(n, 66, "hour");
      break;
    case A.HalfDay:
      r = ne(r, "day"), n = ne(n, "day"), r = U(r, -1, "day"), n = U(n, 108, "hour");
      break;
  }
  return [r, n];
}, Be = (o, e, r = A.Day) => {
  let n = new Date(o);
  const a = [n];
  for (; n < e; ) {
    switch (r) {
      case A.Month:
        n = U(n, 1, "month");
        break;
      case A.Week:
        n = U(n, 7, "day");
        break;
      case A.Day:
        n = U(n, 1, "day");
        break;
      case A.HalfDay:
        n = U(n, 12, "hour");
        break;
      case A.QuarterDay:
        n = U(n, 6, "hour");
        break;
    }
    a.push(n);
  }
  return a;
}, Re = (o, e) => {
  let r = Ve(e, {
    month: "long"
  }).format(o);
  return r = r.replace(
    r[0],
    r[0].toLocaleUpperCase()
  ), r;
}, mr = (o) => {
  const e = o.getDay(), r = o.getDate() - e + (e === 0 ? -6 : 1);
  return new Date(o.setDate(r));
}, it = (o) => {
  const e = new Date(o.valueOf()), r = (e.getDay() + 6) % 7;
  e.setDate(e.getDate() - r + 3);
  const n = e.valueOf();
  e.setMonth(0, 1), e.getDay() !== 4 && e.setMonth(0, 1 + (4 - e.getDay() + 7) % 7);
  const a = (1 + Math.ceil((n - e.valueOf()) / 6048e5)).toString();
  return a.length === 1 ? `0${a}` : a;
}, lt = (o, e) => new Date(e, o + 1, 0).getDate(), xr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  addToDate: U,
  ganttDateRange: Xe,
  getCachedDateTimeFormat: Ve,
  getDaysInMonth: lt,
  getLocaleMonth: Re,
  getWeekNumberISO8601: it,
  seedDates: Be,
  startOfDate: ne
}, Symbol.toStringTag, { value: "Module" }));
function ct(o) {
  return o.key !== void 0;
}
function Et(o) {
  return o.clientX !== void 0;
}
function kt(o) {
  return o.x1 !== void 0;
}
function ut(o) {
  const e = o.filter((r) => !(r.expanded === !1 && r.type === "project"));
  if (e.length > 0)
    for (let r = 0; e.length > r; r++) {
      const n = e[r], a = Ct(o, n);
      o = o.filter((c) => a.indexOf(c) === -1);
    }
  return o;
}
function Ct(o, e) {
  let r = [];
  e.type === "project" && (r = o.filter((a) => a.project && a.project === e.id));
  const n = r.reduce(
    (a, c) => a.concat(a, Ct(o, c)),
    []
  );
  return r = r.concat(r, n), r;
}
const vr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isBarTask: kt,
  isKeyboardEvent: ct,
  isMouseEvent: Et,
  removeHiddenTasks: ut
}, Symbol.toStringTag, { value: "Module" }));
function De(...o) {
  return o.filter((e) => e).join(" ") || void 0;
}
const br = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cn: De
}, Symbol.toStringTag, { value: "Module" })), Er = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  addToDate: U,
  barHelper: pr,
  classNameHelper: br,
  cn: De,
  convertToBar: st,
  convertToBarTask: ot,
  convertToBarTasks: nt,
  convertToProject: at,
  dateHelper: xr,
  ganttDateRange: Xe,
  getCachedDateTimeFormat: Ve,
  getDaysInMonth: lt,
  getLocaleMonth: Re,
  getProgressPoint: Dt,
  getWeekNumberISO8601: it,
  handleTaskBySVGMouseEvent: He,
  isBarTask: kt,
  isKeyboardEvent: ct,
  isMouseEvent: Et,
  otherHelper: vr,
  progressByProgressWidth: Rt,
  progressWithByParams: he,
  removeHiddenTasks: ut,
  seedDates: Be,
  startOfDate: ne
}, Symbol.toStringTag, { value: "Module" })), Ot = ({
  task: o,
  rtl: e,
  children: r,
  scrollX: n,
  scrollY: a,
  svgContainerHeight: c,
  svgContainerWidth: u,
  headerHeight: s,
  rowHeight: f,
  taskListWidth: g,
  multiBarRowMode: p = !1
}) => {
  const [v, b] = V(0), [T, y] = V(0), E = le(null), w = T !== 0 && v !== 0;
  return z(() => {
    if (E.current) {
      const _ = E.current.offsetHeight * 1.1, h = E.current.offsetWidth * 1.1;
      let m = (p === !0 && typeof o.line < "u" ? o.line : o.index) * f - a + s, S;
      if (e)
        S = o.x1 - h - n, S < 0 && (S = o.x2 - n), h + S > u && (S = u - h, m += f);
      else {
        S = o.x2 + g - n;
        const O = h + S, ge = g + u;
        O > ge && (S = o.x1 + g - n - h), S < g && (S = u + g - h, m += f);
      }
      _ + m - a > c - a && (m = c - _), b(m), y(S);
    }
  }, [
    o,
    n,
    a,
    s,
    g,
    f,
    c,
    u,
    e,
    p
  ]), /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: E,
      className: De("tooltip-wrap", w ? "visible" : "hidden"),
      style: {
        left: T,
        top: v
      },
      children: r
    }
  );
}, Pt = ({ task: o }) => /* @__PURE__ */ l.jsxs("div", { className: "tootip-content", children: [
  /* @__PURE__ */ l.jsx("b", { className: "dates-range", children: `${o.name}: ${o.start.getFullYear()}-${o.start.getMonth() + 1}-${o.start.getDate()} ~ ${o.end.getFullYear()}-${o.end.getMonth() + 1}-${o.end.getDate()}` }),
  o.end.getTime() - o.start.getTime() !== 0 && /* @__PURE__ */ l.jsx("p", { className: "duration", children: `기간: ${~~((o.end.getTime() - o.start.getTime()) / (1e3 * 60 * 60 * 24))} 일` })
] }), Mt = ({
  scroll: o,
  rootStyle: e,
  bodyStyle: r,
  onScroll: n
}) => {
  const a = le(null);
  return z(() => {
    a.current && (a.current.scrollTop = o);
  }, [o]), /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: a,
      className: "vertical-scroll-root",
      style: e,
      onScroll: n,
      children: /* @__PURE__ */ l.jsx("div", { className: "vertical-scroll-body", style: r })
    }
  );
}, kr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  HorizontalScroll: jt,
  Tooltip: Ot,
  TooltipContent: Pt,
  VerticalScroll: Mt
}, Symbol.toStringTag, { value: "Module" })), Lt = (o) => {
  const {
    className: e,
    isDateChangeable: r,
    // style
    rootStyle: n,
    // components
    barDisplay: a,
    leftBarDateHandle: c,
    rightBarDateHandle: u,
    // handlers
    onMouseEnter: s,
    onMouseLeave: f
  } = o;
  return /* @__PURE__ */ l.jsxs(
    "g",
    {
      className: De("bar", e),
      style: n,
      tabIndex: 0,
      onMouseEnter: s,
      onMouseLeave: f,
      children: [
        a,
        /* @__PURE__ */ l.jsx("g", { children: r === !0 && // DATE HANDLES
        /* @__PURE__ */ l.jsxs("g", { children: [
          c && c,
          u && u
        ] }) })
      ]
    }
  );
}, dt = ({
  x: o = 0,
  y: e = 0,
  barCornerRadius: r = 5,
  rootStyle: n,
  barStyle: a,
  onMouseDown: c
}) => /* @__PURE__ */ l.jsx("g", { className: "bar-display-root", onMouseDown: c, style: n, children: /* @__PURE__ */ l.jsx(
  "rect",
  {
    className: "bar-display-bar",
    style: a,
    x: o,
    y: e,
    rx: r,
    ry: r
  }
) }), Wt = (o) => {
  const { rootStyle: e, task: r, isDateChangeable: n, onEventStart: a } = o;
  return /* @__PURE__ */ l.jsx("g", { className: "bar", tabIndex: 0, style: e, children: /* @__PURE__ */ l.jsx(
    dt,
    {
      x: r.x1,
      y: r.y,
      barCornerRadius: r.barCornerRadius,
      onMouseDown: (c) => {
        n === !0 && a("move", r, c);
      },
      rootStyle: {
        height: r.height
      },
      barStyle: {
        height: r.height,
        fill: r.styles.backgroundColor,
        width: r.x2 - r.x1
      }
    }
  ) });
}, Nt = (o) => {
  const {
    task: e,
    rootStyle: r,
    backgroundStyle: n
  } = o;
  return /* @__PURE__ */ l.jsx("svg", { children: /* @__PURE__ */ l.jsx("g", { tabIndex: 0, className: "project-root", style: r, children: /* @__PURE__ */ l.jsx(
    "rect",
    {
      className: "project-bg",
      style: n,
      x: e.x1,
      y: e.y,
      height: e.height,
      width: e.x2 - e.x1,
      rx: e.barCornerRadius,
      ry: e.barCornerRadius
    }
  ) }) });
}, tt = ({
  x: o = 0,
  y: e = 0,
  width: r = 10,
  height: n = 30,
  barCornerRadius: a = 5,
  onMouseDown: c
}) => /* @__PURE__ */ l.jsx(
  "rect",
  {
    className: "bar-date-handle",
    x: o,
    y: e,
    width: r,
    height: n,
    ry: a,
    rx: a,
    onMouseDown: c
  }
), Ft = (o) => {
  const { task: e, rtl: r, isDateChangeable: n, backgroundColor: a, onEventStart: c } = o, [u, s] = V(!1), f = /* @__PURE__ */ l.jsx(
    dt,
    {
      x: e.x1,
      y: e.y,
      barCornerRadius: e.barCornerRadius,
      onMouseDown: (v) => {
        n === !0 && c("move", e, v);
      },
      rootStyle: {
        height: e.height
      },
      barStyle: {
        height: e.height,
        width: e.x2 - e.x1,
        fill: a
      }
    }
  ), g = /* @__PURE__ */ l.jsx(
    tt,
    {
      x: e.x1 + 1,
      y: e.y + 1,
      width: e.handleWidth,
      height: e.height - 2,
      barCornerRadius: e.barCornerRadius,
      onMouseDown: (v) => c("start", e, v)
    }
  ), p = /* @__PURE__ */ l.jsx(
    tt,
    {
      x: e.x2 - e.handleWidth - 1,
      y: e.y + 1,
      height: e.height - 2,
      width: e.handleWidth,
      barCornerRadius: e.barCornerRadius,
      onMouseDown: (v) => c("end", e, v)
    }
  );
  return /* @__PURE__ */ l.jsx("svg", { style: { overflow: "visible" }, className: "original", children: /* @__PURE__ */ l.jsx(
    Lt,
    {
      rtl: r,
      className: u ? "hovered" : "",
      isDateChangeable: n,
      barDisplay: f,
      leftBarDateHandle: g,
      rightBarDateHandle: p,
      onMouseEnter: () => s(() => !0),
      onMouseLeave: () => s(() => !1)
    }
  ) });
}, Me = (o) => {
  const {
    value: e,
    x1Line: r,
    xText: n,
    y1Line: a,
    y2Line: c,
    yText: u,
    // styles
    rootStyle: s,
    lineStyle: f,
    textStyle: g
  } = o;
  return /* @__PURE__ */ l.jsxs("g", { style: s, className: "calendar__header-root", children: [
    /* @__PURE__ */ l.jsx(
      "line",
      {
        className: "calendar__header-line",
        style: f,
        x1: r,
        y1: a,
        x2: r,
        y2: c
      },
      e + "line"
    ),
    /* @__PURE__ */ l.jsx("text", { className: "calendar__header-text", style: g, y: u, x: n, children: e }, e + "text")
  ] });
}, It = (o) => {
  const {
    columnWidth: e,
    dateSetup: r,
    headerHeight: n,
    locale: a,
    rtl: c,
    // styles
    rootStyle: u,
    headerStyle: s,
    bottomTextStyle: f
  } = o, g = () => {
    const E = [], w = [], _ = n * 0.5;
    for (let h = 0; h < r.dates.length; h++) {
      const j = r.dates[h], m = Re(j, a);
      if (w.push(
        /* @__PURE__ */ l.jsx(
          "text",
          {
            style: f,
            y: n * 0.8,
            x: e * h + e * 0.5,
            children: m
          },
          m + j.getFullYear()
        )
      ), h === 0 || j.getFullYear() !== r.dates[h - 1].getFullYear()) {
        const S = j.getFullYear().toString();
        let H;
        c ? H = (6 + h + j.getMonth() + 1) * e : H = (6 + h - j.getMonth()) * e, E.push(
          /* @__PURE__ */ l.jsx(
            Me,
            {
              value: S,
              x1Line: e * h,
              y1Line: 0,
              y2Line: n,
              xText: H,
              yText: _ * 0.9
            },
            S
          )
        );
      }
    }
    return [E, w];
  }, p = () => {
    const E = [], w = [];
    let _ = 1;
    const h = n * 0.5, j = r.dates;
    for (let m = j.length - 1; m >= 0; m--) {
      const S = j[m];
      let H = "";
      (m === 0 || S.getMonth() !== j[m - 1].getMonth()) && (H = `${Re(S, a)}, ${S.getFullYear()}`);
      const O = `W${it(S)}`;
      w.push(
        /* @__PURE__ */ l.jsx(
          "text",
          {
            style: f,
            y: n * 0.8,
            x: e * (m + +c),
            children: O
          },
          S.getTime()
        )
      ), H && (m !== j.length - 1 && E.push(
        /* @__PURE__ */ l.jsx(
          Me,
          {
            value: H,
            x1Line: e * m + _ * e,
            y1Line: 0,
            y2Line: n,
            xText: e * m + e * _ * 0.5,
            yText: h * 0.9
          },
          H
        )
      ), _ = 0), _++;
    }
    return [E, w];
  }, v = () => {
    const E = [], w = [], _ = n * 0.5, h = r.dates;
    for (let j = 0; j < h.length; j++) {
      const m = h[j], S = m.getDate().toString();
      if (w.push(
        /* @__PURE__ */ l.jsx(
          "text",
          {
            style: f,
            y: n * 0.8,
            x: e * j + e * 0.5,
            children: S
          },
          m.getTime()
        )
      ), j + 1 !== h.length && m.getMonth() !== h[j + 1].getMonth()) {
        const H = Re(m, a);
        E.push(
          /* @__PURE__ */ l.jsx(
            Me,
            {
              value: H,
              x1Line: e * (j + 1),
              y1Line: 0,
              y2Line: n,
              xText: e * (j + 1) - lt(m.getMonth(), m.getFullYear()) * e * 0.5,
              yText: _ * 0.9
            },
            H + m.getFullYear()
          )
        );
      }
    }
    return [E, w];
  }, b = () => {
    const E = [], w = [], _ = r.viewMode === A.HalfDay ? 2 : 4, h = n * 0.5, j = r.dates;
    for (let m = 0; m < j.length; m++) {
      const S = j[m], H = Ve(a, {
        hour: "numeric"
      }).format(S);
      if (w.push(
        /* @__PURE__ */ l.jsx(
          "text",
          {
            style: f,
            y: n * 0.8,
            x: e * (m + +c),
            children: H
          },
          S.getTime()
        )
      ), m === 0 || S.getDate() !== j[m - 1].getDate()) {
        const O = `${S.getDate()} ${Re(S, a)}`;
        E.push(
          /* @__PURE__ */ l.jsx(
            Me,
            {
              value: O,
              x1Line: e * m + _ * e,
              y1Line: 0,
              y2Line: n,
              xText: e * m + _ * e * 0.5,
              yText: h * 0.9
            },
            O + S.getFullYear()
          )
        );
      }
    }
    return [E, w];
  };
  let T = [], y = [];
  switch (r.viewMode) {
    case A.Month:
      [T, y] = g();
      break;
    case A.Week:
      [T, y] = p();
      break;
    case A.Day:
      [T, y] = v();
      break;
    default:
      [T, y] = b();
      break;
  }
  return /* @__PURE__ */ l.jsx("svg", { style: { overflow: "visible" }, children: /* @__PURE__ */ l.jsxs("g", { style: u, className: "calendar-root", children: [
    /* @__PURE__ */ l.jsx(
      "rect",
      {
        className: "calendar-header",
        style: s,
        x: 0,
        y: 0,
        width: e * r.dates.length,
        height: n
      }
    ),
    T,
    y
  ] }) });
}, Ht = (o) => {
  const {
    tasks: e,
    dates: r,
    rtl: n,
    rowHeight: a,
    columnWidth: c,
    svgWidth: u,
    todayColor: s,
    // style
    gridRowStyle: f,
    gridRowLineStyle: g,
    gridTickStyle: p
  } = o, v = /* @__PURE__ */ new Date();
  let b = 0, T = 0;
  const y = [], E = [
    /* @__PURE__ */ l.jsx(
      "line",
      {
        style: g,
        x: "0",
        y1: 0,
        x2: u,
        y2: 0
      },
      "RowLineFirst"
    )
  ];
  for (const h of e)
    y.push(
      /* @__PURE__ */ l.jsx(
        "rect",
        {
          className: "grid-row",
          style: f,
          x: "0",
          y: b,
          width: u,
          height: a
        },
        "Row" + h.id
      )
    ), E.push(
      /* @__PURE__ */ l.jsx(
        "line",
        {
          className: "grid-row__line",
          style: g,
          x: "0",
          y1: b + a,
          x2: u,
          y2: b + a
        },
        "RowLine" + h.id
      )
    ), b += a;
  const w = [];
  let _ = /* @__PURE__ */ l.jsx("rect", {});
  for (let h = 0; h < r.length; h++) {
    const j = r[h];
    w.push(
      /* @__PURE__ */ l.jsx(
        "line",
        {
          className: "grid-tick",
          style: p,
          x1: T,
          y1: 0,
          x2: T,
          y2: b
        },
        j.getTime()
      )
    ), (h + 1 !== r.length && j.getTime() < v.getTime() && r[h + 1].getTime() >= v.getTime() || // if current date is last
    h !== 0 && h + 1 === r.length && j.getTime() < v.getTime() && U(
      j,
      j.getTime() - r[h - 1].getTime(),
      "millisecond"
    ).getTime() >= v.getTime()) && (_ = /* @__PURE__ */ l.jsx(
      "rect",
      {
        x: T,
        y: 0,
        width: c,
        height: b,
        fill: s
      }
    )), n && h + 1 !== r.length && j.getTime() >= v.getTime() && r[h + 1].getTime() < v.getTime() && (_ = /* @__PURE__ */ l.jsx(
      "rect",
      {
        x: T + c,
        y: 0,
        width: c,
        height: b,
        fill: s
      }
    )), T += c;
  }
  return /* @__PURE__ */ l.jsx("svg", { style: { overflow: "visible" }, children: /* @__PURE__ */ l.jsxs("g", { children: [
    /* @__PURE__ */ l.jsx("g", { children: y }),
    /* @__PURE__ */ l.jsx("g", { children: E }),
    /* @__PURE__ */ l.jsx("g", { children: w }),
    /* @__PURE__ */ l.jsx("g", { children: _ })
  ] }) });
}, Xt = (o) => {
  const {
    task: e,
    rtl: r,
    isDateChangeable: n,
    isDelete: a,
    isSelected: c,
    taskHeight: u,
    onEventStart: s
  } = o, [f, g] = V(/* @__PURE__ */ l.jsx("div", {})), [p, v] = V(!0), b = le(null), T = () => {
    const y = e.x2 - e.x1;
    return p ? e.x1 + y * 0.5 : r && b.current ? e.x1 - b.current.getBBox().width : e.x1 + y + 10;
  };
  return z(() => {
    switch (e.typeInternal) {
      case "project":
        g(
          /* @__PURE__ */ l.jsx(
            Nt,
            {
              task: e,
              backgroundStyle: {
                fill: e.styles.backgroundColor,
                opacity: 1
              }
            }
          )
        );
        break;
      case "smalltask":
        g(/* @__PURE__ */ l.jsx(Wt, { ...o }));
        break;
      default:
        g(() => /* @__PURE__ */ l.jsx(
          Ft,
          {
            task: e,
            rtl: r,
            backgroundColor: e.styles.backgroundColor,
            isDateChangeable: n,
            onEventStart: s
          }
        ));
        break;
    }
  }, [e, c]), z(() => {
    b.current && v(b.current.getBBox().width < e.x2 - e.x1);
  }, [b, e]), /* @__PURE__ */ l.jsx("svg", { children: /* @__PURE__ */ l.jsxs(
    "g",
    {
      onKeyDown: (y) => {
        switch (y.key) {
          case "Delete": {
            a && s("delete", e, y);
            break;
          }
        }
        y.stopPropagation();
      },
      onMouseEnter: (y) => {
        s("mouseenter", e, y);
      },
      onMouseLeave: (y) => {
        s("mouseleave", e, y);
      },
      onDoubleClick: (y) => {
        s("dblclick", e, y);
      },
      onFocus: () => {
        s("select", e);
      },
      children: [
        f,
        /* @__PURE__ */ l.jsx(
          "text",
          {
            className: p ? "taskitem-text" : "taskitem-text__outside",
            dominantBaseline: "central",
            x: T(),
            y: e.y + u * 0.5,
            ref: b,
            children: e.name
          }
        )
      ]
    }
  ) });
}, Bt = (o) => {
  const {
    scrollY: e,
    // components
    TaskListHeader: r,
    TaskListTable: n,
    // components props
    taskListHeaderProps: a,
    taskListTableProps: c,
    // styles
    taskListTableWrapperStyles: u,
    // refs
    taskListRef: s
  } = o, f = le(null);
  return z(() => {
    f.current && (f.current.scrollTop = e);
  }, [e]), /* @__PURE__ */ l.jsxs("div", { ref: s, children: [
    /* @__PURE__ */ l.jsx(r, { ...a }),
    /* @__PURE__ */ l.jsx("div", { className: "tasklist_wrapper", style: u, ref: f, children: /* @__PURE__ */ l.jsx(n, { ...c }) })
  ] });
}, Vt = (o) => {
  const {
    columns: e = ["Name"],
    // style
    rootStyle: r,
    headerStyle: n,
    columnStyle: a,
    columnSeparatorStyle: c
  } = o, u = [];
  return e.forEach((s, f) => {
    const g = /* @__PURE__ */ l.jsxs(rt.Fragment, { children: [
      /* @__PURE__ */ l.jsx("div", { className: "tasklist__header-column", style: a, children: s }),
      f !== e.length - 1 && /* @__PURE__ */ l.jsx("div", { className: "tasklist__header-comumn__sep", style: c })
    ] }, f);
    u.push(g);
  }), // ROOT
  /* @__PURE__ */ l.jsx("div", { className: "tasklist__header-root", style: r, children: /* @__PURE__ */ l.jsx("div", { className: "tasklist__header-header", style: n, children: u }) });
}, $t = (o) => {
  const {
    tasks: e,
    expanderSymbolOpen: r = "▼",
    expanderSymbolClose: n = "▶",
    expanderSymbolEmpty: a = "",
    onExpanderClick: c
  } = o;
  return (
    // ROOT
    /* @__PURE__ */ l.jsx("div", { className: "tasklist__table-root", children: e.map((u) => {
      let s = a;
      return u.expanded === !0 ? s = n : u.expanded === !1 && (s = r), // TABLE ROW
      /* @__PURE__ */ l.jsx(
        "div",
        {
          className: De(
            "tasklist__table-row",
            u.type === "project" ? "project" : "task"
          ),
          children: /* @__PURE__ */ l.jsx(
            "div",
            {
              className: De(
                "tasklist__table-cell",
                u.type === "project" ? "project" : "task"
              ),
              title: u.name,
              children: /* @__PURE__ */ l.jsxs(
                "div",
                {
                  className: "tasklist__table-cell__wrapper",
                  onClick: () => c(u),
                  children: [
                    /* @__PURE__ */ l.jsx(
                      "div",
                      {
                        className: s ? "tasklist__table-expander" : "tasklist__table-expander__empty",
                        children: s
                      }
                    ),
                    /* @__PURE__ */ l.jsx("div", { children: u.name })
                  ]
                }
              )
            }
          )
        },
        `${u.id}row`
      );
    }) })
  );
}, Cr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Bar: Lt,
  BarDateHandle: tt,
  BarDisplay: dt,
  BarOriginal: Ft,
  BarSmall: Wt,
  Calendar: It,
  CalendarHeader: Me,
  Grid: Ht,
  Project: Nt,
  TaskItem: Xt,
  TaskList: Bt,
  TaskListHeader: Vt,
  TaskListTable: $t
}, Symbol.toStringTag, { value: "Module" })), Tr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), _r = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), jr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), Sr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), Or = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ViewMode: A,
  barTask: Tr,
  custom: _r,
  dateSetup: jr,
  ganttTaskActions: Sr,
  publicTypes: yr
}, Symbol.toStringTag, { value: "Module" })), wr = (o) => {
  var ae;
  const {
    tasks: e,
    dates: r,
    ganttEvent: n,
    selectedTask: a,
    columnWidth: c,
    timeStep: u,
    svg: s,
    taskHeight: f,
    rtl: g,
    setGanttEvent: p,
    setFailedTask: v,
    setSelectedTask: b,
    onDateChange: T,
    onProgressChange: y,
    onDoubleClick: E,
    onDelete: w
  } = o, [_, h] = V(0), [j, m] = V(0), [S, H] = V(!1), O = (ae = s == null ? void 0 : s.current) == null ? void 0 : ae.createSVGPoint(), ge = async (W, I, J) => {
    var M;
    if (!J)
      W === "select" && b(I.id);
    else if (ct(J)) {
      if (W === "delete" && w)
        try {
          const N = await w(I);
          N !== void 0 && N && p({ action: W, changedTask: I });
        } catch (N) {
          console.error("Error on Delete. " + N);
        }
    } else if (W === "mouseenter")
      n.action || p({
        action: W,
        changedTask: I,
        originalSelectedTask: I
      });
    else if (W === "mouseleave")
      n.action === "mouseenter" && p({ action: "" });
    else if (W === "dblclick")
      E && E(I);
    else if (W === "move") {
      if (!(s != null && s.current) || !O)
        return;
      O.x = J.clientX;
      const N = O.matrixTransform(
        (M = s.current.getScreenCTM()) == null ? void 0 : M.inverse()
      );
      m(N.x - I.x1), p({
        action: W,
        changedTask: I,
        originalSelectedTask: I
      });
    } else
      p({
        action: W,
        changedTask: I,
        originalSelectedTask: I
      });
  };
  return z(() => {
    const W = r[1].getTime() - r[0].getTime() - r[1].getTimezoneOffset() * 60 * 1e3 + r[0].getTimezoneOffset() * 60 * 1e3, I = u * c / W;
    h(I);
  }, [c, r, u]), z(() => {
    const W = async (J) => {
      var ce;
      if (!n.changedTask || !O || !(s != null && s.current))
        return;
      J.preventDefault(), O.x = J.clientX;
      const M = O.matrixTransform(
        (ce = s == null ? void 0 : s.current.getScreenCTM()) == null ? void 0 : ce.inverse()
      ), { isChanged: N, changedTask: q } = He(
        M.x,
        n.action,
        n.changedTask,
        _,
        u,
        j,
        g
      );
      N && p({ action: n.action, changedTask: q });
    }, I = async (J) => {
      var ie;
      const { action: M, originalSelectedTask: N, changedTask: q } = n;
      if (!q || !O || !(s != null && s.current) || !N)
        return;
      J.preventDefault(), O.x = J.clientX;
      const ce = O.matrixTransform(
        (ie = s == null ? void 0 : s.current.getScreenCTM()) == null ? void 0 : ie.inverse()
      ), { changedTask: Z } = He(
        ce.x,
        M,
        q,
        _,
        u,
        j,
        g
      ), de = N.start !== Z.start || N.end !== Z.end || N.progress !== Z.progress;
      s.current.removeEventListener("mousemove", W), s.current.removeEventListener("mouseup", I), p({ action: "" }), H(!1);
      let $ = !0;
      if ((M === "move" || M === "end" || M === "start") && T && de)
        try {
          const G = await T(
            Z,
            Z.barChildren
          );
          G !== void 0 && ($ = G);
        } catch {
          $ = !1;
        }
      else if (y && de)
        try {
          const G = await y(
            Z,
            Z.barChildren
          );
          G !== void 0 && ($ = G);
        } catch {
          $ = !1;
        }
      $ || v(N);
    };
    !S && (n.action === "move" || n.action === "end" || n.action === "start" || n.action === "progress") && (s != null && s.current) && (s.current.addEventListener("mousemove", W), s.current.addEventListener("mouseup", I), H(!0));
  }, [
    n,
    _,
    j,
    y,
    u,
    T,
    s,
    S
  ]), /* @__PURE__ */ l.jsx("g", { className: "content", children: /* @__PURE__ */ l.jsx("g", { className: "bar", children: e.map((W) => /* @__PURE__ */ l.jsx(
    Xt,
    {
      task: W,
      taskHeight: f,
      isDateChangeable: !!T && !W.isDisabled,
      isDelete: !W.isDisabled,
      onEventStart: ge,
      isSelected: !!a && W.id === a.id,
      rtl: g
    },
    W.id
  )) }) });
}, Rr = (o) => {
  const {
    gridProps: e,
    calendarProps: r,
    barProps: n,
    ganttHeight: a,
    scrollY: c,
    scrollX: u
  } = o, s = le(null), f = le(null), g = le(null);
  z(() => {
    f.current && (f.current.scrollTop = c);
  }, [c]), z(() => {
    g.current && (g.current.scrollLeft = u);
  }, [u]);
  const p = { ...n, svg: s };
  return (
    // ROOT
    /* @__PURE__ */ l.jsxs("div", { className: "roadmap__task-root", ref: g, dir: "ltr", children: [
      /* @__PURE__ */ l.jsx(
        "svg",
        {
          height: r.headerHeight,
          width: e.svgWidth,
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ l.jsx(It, { ...r })
        }
      ),
      /* @__PURE__ */ l.jsx(
        "div",
        {
          ref: f,
          className: "roadmap__task-content",
          style: {
            height: a || void 0,
            width: e.svgWidth
          },
          children: /* @__PURE__ */ l.jsxs(
            "svg",
            {
              ref: s,
              height: n.rowHeight * n.tasks.length,
              width: e.svgWidth,
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                /* @__PURE__ */ l.jsx(Ht, { ...e }),
                /* @__PURE__ */ l.jsx(wr, { ...p })
              ]
            }
          )
        }
      )
    ] })
  );
}, Pr = {
  // general
  bodyStyle: {
    display: "flex",
    padding: "0",
    margin: "0",
    listStyle: "none",
    outline: "none",
    position: "relative"
  },
  // event options
  timeStep: 3e5,
  onDateChange: () => {
  },
  onProgressChange: () => {
  },
  onDoubleClick: () => {
  },
  onDelete: () => {
  },
  onSelect: () => {
  },
  onExpanderClick: () => {
  },
  // display options
  viewMode: A.Day,
  locale: "ko-KR",
  rtl: !1,
  // styling options
  headerHeight: 50,
  columnWidth: 60,
  listCellWidth: "155px",
  rowHeight: 50,
  ganttHeight: 300,
  barFill: 60,
  barCornerRadius: 3,
  handleWidth: 8,
  todayColor: "rgba(252, 248, 227, 0.5)",
  TooltipContent: Pt
}, Mr = (o) => {
  const {
    // general
    tasks: e,
    bodyStyle: r,
    // event options
    timeStep: n,
    onDateChange: a,
    onProgressChange: c,
    onDoubleClick: u,
    onDelete: s,
    onSelect: f,
    onExpanderClick: g,
    // display options
    viewMode: p,
    locale: v,
    rtl: b,
    // styling options
    headerHeight: T,
    columnWidth: y,
    listCellWidth: E,
    rowHeight: w,
    ganttHeight: _,
    barFill: h,
    barCornerRadius: j,
    handleWidth: m,
    todayColor: S,
    TooltipContent: H
  } = o, [O, ge] = V(e), [ae, W] = V(() => {
    const [R, F] = Xe(O, p);
    return { viewMode: p, dates: Be(R, F, p) };
  }), [I, J] = V(w * h / 100), [M, N] = V(0), [q, ce] = V(0), [Z, de] = V(_), [$, ie] = V([]), [G, Ee] = V({
    action: ""
  }), [me, $e] = V(), [xe, ve] = V(null), [ee, pe] = V(0), [te, fe] = V(-1), [We, be] = V(!1), oe = le(null), Te = le(null), se = ae.dates.length * y, ue = $.length * w;
  z(() => ge(e), [e]), z(() => {
    const R = g ? ut(O) : O, [F, L] = Xe(R, p);
    let X = Be(F, L, p);
    b && (X = X.reverse(), te === -1 && fe(X.length * y)), W({ dates: X, viewMode: p }), ie(
      nt({
        tasks: R,
        dates: X,
        columnWidth: y,
        rowHeight: w,
        taskHeight: I,
        barCornerRadius: j,
        handleWidth: m,
        rtl: b
      })
    );
  }, [
    O,
    p,
    w,
    j,
    y,
    I,
    m,
    b,
    te,
    g
  ]), z(() => {
    const { changedTask: R, action: F } = G;
    if (R) {
      if (F === "delete")
        Ee({ action: "" }), ie($.filter((L) => L.id !== R.id));
      else if (F === "move" || F === "end" || F === "start" || F === "progress") {
        const L = $.find((X) => X.id === R.id);
        if (L && (L.start.getTime() !== R.start.getTime() || L.end.getTime() !== R.end.getTime() || L.progress !== R.progress)) {
          const X = $.map(
            (Ce) => Ce.id === R.id ? R : Ce
          );
          ie(X);
        }
      }
    }
  }, [G, $]), z(() => {
    oe.current && ce(oe.current.offsetWidth - M);
  }, [oe, M]), z(() => {
    const R = (F) => {
      if (F.shiftKey || F.deltaX) {
        const L = F.deltaX ? F.deltaX : F.deltaY;
        let X = te + L;
        X < 0 ? X = 0 : X > se && (X = se), fe(X), F.preventDefault();
      } else if (_) {
        let L = ee + F.deltaY;
        L < 0 ? L = 0 : L > ue - _ && (L = ue - _), L !== ee && (pe(L), F.preventDefault());
      }
      be(!0);
    };
    return oe.current && oe.current.addEventListener("wheel", R, {
      passive: !1
    }), () => {
      oe.current && oe.current.removeEventListener("wheel", R);
    };
  }, [oe.current, ee, te, _, se, b]), z(() => {
    xe && (ie(
      $.map((R) => R.id !== xe.id ? R : xe)
    ), ve(null));
  }, [xe, $]), z(() => {
    const R = w * h / 100;
    R !== I && J(R);
  }, [w, h, I]), z(() => {
    E || N(0), Te.current && N(Te.current.offsetWidth);
  }, [Te, E]), z(() => {
    de(_ ? _ + T : O.length * w + T);
  }, [_, T, w, O]);
  const Ne = (R) => {
    ee !== R.currentTarget.scrollTop && !We && pe(R.currentTarget.scrollTop), be(!1);
  }, Fe = (R) => {
    te !== R.currentTarget.scrollLeft && !We && fe(R.currentTarget.scrollLeft), be(!1);
  }, _e = (R) => {
    const F = $.find((X) => X.id === R), L = $.find(
      (X) => !!me && X.id === me.id
    );
    f && (L && f(L, !1), F && f(F, !0)), $e(F);
  }, Ye = (R) => {
    g && R.expanded !== void 0 && g({ ...R, expanded: !R.expanded });
  }, Ae = {
    columnWidth: y,
    svgWidth: se,
    tasks: O,
    rowHeight: w,
    dates: ae.dates,
    todayColor: S,
    rtl: b
  }, ke = {
    dateSetup: ae,
    locale: v,
    headerHeight: T,
    columnWidth: y,
    rtl: b
  }, ze = {
    tasks: $,
    dates: ae.dates,
    ganttEvent: G,
    selectedTask: me,
    rowHeight: w,
    taskHeight: I,
    columnWidth: y,
    timeStep: n,
    svgWidth: se,
    rtl: b,
    setGanttEvent: Ee,
    setFailedTask: ve,
    setSelectedTask: _e,
    onDateChange: a,
    onProgressChange: c,
    onDoubleClick: u,
    onDelete: s
  }, Ue = {
    scrollY: ee,
    // components
    TaskListHeader: Vt,
    TaskListTable: $t,
    // components props
    taskListHeaderProps: {
      columns: ["Name"]
    },
    taskListTableProps: {
      tasks: $,
      onExpanderClick: Ye
    },
    // styles
    taskListTableWrapperStyles: {
      height: _
    },
    // refs
    taskListRef: Te
  };
  return (
    // ROOT
    /* @__PURE__ */ l.jsxs("div", { children: [
      /* @__PURE__ */ l.jsxs("div", { className: "roadmap", style: r, tabIndex: 0, ref: oe, children: [
        E && /* @__PURE__ */ l.jsx(Bt, { ...Ue }),
        /* @__PURE__ */ l.jsx(
          Rr,
          {
            barProps: ze,
            gridProps: Ae,
            calendarProps: ke,
            ganttHeight: _,
            scrollX: te,
            scrollY: ee
          }
        ),
        G.changedTask && /* @__PURE__ */ l.jsx(
          Ot,
          {
            rowHeight: w,
            svgContainerHeight: Z,
            svgContainerWidth: q,
            scrollX: te,
            scrollY: ee,
            task: G.changedTask,
            headerHeight: T,
            taskListWidth: M,
            rtl: b,
            children: /* @__PURE__ */ l.jsx(H, { task: G.changedTask })
          }
        ),
        /* @__PURE__ */ l.jsx(
          Mt,
          {
            scroll: ee,
            onScroll: Ne,
            rootStyle: {
              height: _,
              marginTop: T,
              marginLeft: b ? "" : "-17px"
            },
            bodyStyle: {
              height: ue
            }
          }
        )
      ] }),
      /* @__PURE__ */ l.jsx(
        jt,
        {
          scroll: te,
          onScroll: Fe,
          rootStyle: {
            margin: b ? `0px ${M}px 0px 0px` : `0px 0px 0px ${M}px`
          },
          bodyStyle: {
            width: se
          }
        }
      )
    ] })
  );
};
export {
  Lt as Bar,
  tt as BarDateHandle,
  dt as BarDisplay,
  Ft as BarOriginal,
  Wt as BarSmall,
  It as Calendar,
  Me as CalendarHeader,
  Ht as Grid,
  jt as HorizontalScroll,
  Nt as Project,
  Mr as RoadMap,
  Xt as TaskItem,
  Bt as TaskList,
  Vt as TaskListHeader,
  $t as TaskListTable,
  Ot as Tooltip,
  Pt as TooltipContent,
  Mt as VerticalScroll,
  A as ViewMode,
  U as addToDate,
  pr as barHelper,
  Tr as barTask,
  br as classNameHelper,
  De as cn,
  kr as components,
  Cr as containers,
  st as convertToBar,
  ot as convertToBarTask,
  nt as convertToBarTasks,
  at as convertToProject,
  _r as custom,
  xr as dateHelper,
  jr as dateSetup,
  Pr as defaultRoadMapProps,
  Xe as ganttDateRange,
  Sr as ganttTaskActions,
  Ve as getCachedDateTimeFormat,
  lt as getDaysInMonth,
  Re as getLocaleMonth,
  Dt as getProgressPoint,
  it as getWeekNumberISO8601,
  He as handleTaskBySVGMouseEvent,
  Er as helpers,
  kt as isBarTask,
  ct as isKeyboardEvent,
  Et as isMouseEvent,
  vr as otherHelper,
  Rt as progressByProgressWidth,
  he as progressWithByParams,
  yr as publicTypes,
  ut as removeHiddenTasks,
  Be as seedDates,
  ne as startOfDate,
  Or as types
};
//# sourceMappingURL=index.es.js.map
