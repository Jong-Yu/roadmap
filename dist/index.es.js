import rt, { useRef as le, useEffect as X, useState as V } from "react";
var et = { exports: {} }, Pe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xt;
function ir() {
  if (xt)
    return Pe;
  xt = 1;
  var a = rt, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(s, f, h) {
    var p, y = {}, R = null, m = null;
    h !== void 0 && (R = "" + h), f.key !== void 0 && (R = "" + f.key), f.ref !== void 0 && (m = f.ref);
    for (p in f)
      n.call(f, p) && !c.hasOwnProperty(p) && (y[p] = f[p]);
    if (s && s.defaultProps)
      for (p in f = s.defaultProps, f)
        y[p] === void 0 && (y[p] = f[p]);
    return { $$typeof: e, type: s, key: R, ref: m, props: y, _owner: o.current };
  }
  return Pe.Fragment = r, Pe.jsx = g, Pe.jsxs = g, Pe;
}
var Me = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bt;
function lr() {
  return bt || (bt = 1, process.env.NODE_ENV !== "production" && function() {
    var a = rt, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), s = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), v = Symbol.iterator, j = "@@iterator";
    function C(t) {
      if (t === null || typeof t != "object")
        return null;
      var i = v && t[v] || t[j];
      return typeof i == "function" ? i : null;
    }
    var b = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function u(t) {
      {
        for (var i = arguments.length, d = new Array(i > 1 ? i - 1 : 0), x = 1; x < i; x++)
          d[x - 1] = arguments[x];
        T("error", t, d);
      }
    }
    function T(t, i, d) {
      {
        var x = b.ReactDebugCurrentFrame, E = x.getStackAddendum();
        E !== "" && (i += "%s", d = d.concat([E]));
        var L = d.map(function(D) {
          return String(D);
        });
        L.unshift("Warning: " + i), Function.prototype.apply.call(console[t], console, L);
      }
    }
    var _ = !1, w = !1, W = !1, I = !1, q = !1, he;
    he = Symbol.for("react.module.reference");
    function O(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === n || t === c || q || t === o || t === h || t === p || I || t === m || _ || w || W || typeof t == "object" && t !== null && (t.$$typeof === R || t.$$typeof === y || t.$$typeof === g || t.$$typeof === s || t.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === he || t.getModuleId !== void 0));
    }
    function B(t, i, d) {
      var x = t.displayName;
      if (x)
        return x;
      var E = i.displayName || i.name || "";
      return E !== "" ? d + "(" + E + ")" : d;
    }
    function z(t) {
      return t.displayName || "Context";
    }
    function N(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && u("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
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
        case o:
          return "StrictMode";
        case h:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case s:
            var i = t;
            return z(i) + ".Consumer";
          case g:
            var d = t;
            return z(d._context) + ".Provider";
          case f:
            return B(t, t.render, "ForwardRef");
          case y:
            var x = t.displayName || null;
            return x !== null ? x : N(t.type) || "Memo";
          case R: {
            var E = t, L = E._payload, D = E._init;
            try {
              return N(D(L));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, Z = 0, ce, re, ge, se, G, K, ue;
    function Se() {
    }
    Se.__reactDisabledLog = !0;
    function ke() {
      {
        if (Z === 0) {
          ce = console.log, re = console.info, ge = console.warn, se = console.error, G = console.group, K = console.groupCollapsed, ue = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: Se,
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
        Z++;
      }
    }
    function Ye() {
      {
        if (Z--, Z === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, t, {
              value: ce
            }),
            info: P({}, t, {
              value: re
            }),
            warn: P({}, t, {
              value: ge
            }),
            error: P({}, t, {
              value: se
            }),
            group: P({}, t, {
              value: G
            }),
            groupCollapsed: P({}, t, {
              value: K
            }),
            groupEnd: P({}, t, {
              value: ue
            })
          });
        }
        Z < 0 && u("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var fe = b.ReactCurrentDispatcher, me;
    function ee(t, i, d) {
      {
        if (me === void 0)
          try {
            throw Error();
          } catch (E) {
            var x = E.stack.trim().match(/\n( *(at )?)/);
            me = x && x[1] || "";
          }
        return `
` + me + t;
      }
    }
    var ve = !1, te;
    {
      var Re = typeof WeakMap == "function" ? WeakMap : Map;
      te = new Re();
    }
    function De(t, i) {
      if (!t || ve)
        return "";
      {
        var d = te.get(t);
        if (d !== void 0)
          return d;
      }
      var x;
      ve = !0;
      var E = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var L;
      L = fe.current, fe.current = null, ke();
      try {
        if (i) {
          var D = function() {
            throw Error();
          };
          if (Object.defineProperty(D.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(D, []);
            } catch (Q) {
              x = Q;
            }
            Reflect.construct(t, [], D);
          } else {
            try {
              D.call();
            } catch (Q) {
              x = Q;
            }
            t.call(D.prototype);
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
          for (var k = Q.stack.split(`
`), J = x.stack.split(`
`), $ = k.length - 1, Y = J.length - 1; $ >= 1 && Y >= 0 && k[$] !== J[Y]; )
            Y--;
          for (; $ >= 1 && Y >= 0; $--, Y--)
            if (k[$] !== J[Y]) {
              if ($ !== 1 || Y !== 1)
                do
                  if ($--, Y--, Y < 0 || k[$] !== J[Y]) {
                    var ae = `
` + k[$].replace(" at new ", " at ");
                    return t.displayName && ae.includes("<anonymous>") && (ae = ae.replace("<anonymous>", t.displayName)), typeof t == "function" && te.set(t, ae), ae;
                  }
                while ($ >= 1 && Y >= 0);
              break;
            }
        }
      } finally {
        ve = !1, fe.current = L, Ye(), Error.prepareStackTrace = E;
      }
      var _e = t ? t.displayName || t.name : "", pe = _e ? ee(_e) : "";
      return typeof t == "function" && te.set(t, pe), pe;
    }
    function Ee(t, i, d) {
      return De(t, !1);
    }
    function ie(t) {
      var i = t.prototype;
      return !!(i && i.isReactComponent);
    }
    function de(t, i, d) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return De(t, ie(t));
      if (typeof t == "string")
        return ee(t);
      switch (t) {
        case h:
          return ee("Suspense");
        case p:
          return ee("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case f:
            return Ee(t.render);
          case y:
            return de(t.type, i, d);
          case R: {
            var x = t, E = x._payload, L = x._init;
            try {
              return de(L(E), i, d);
            } catch {
            }
          }
        }
      return "";
    }
    var ne = Object.prototype.hasOwnProperty, xe = {}, Fe = b.ReactDebugCurrentFrame;
    function be(t) {
      if (t) {
        var i = t._owner, d = de(t.type, t._source, i ? i.type : null);
        Fe.setExtraStackFrame(d);
      } else
        Fe.setExtraStackFrame(null);
    }
    function Ae(t, i, d, x, E) {
      {
        var L = Function.call.bind(ne);
        for (var D in t)
          if (L(t, D)) {
            var k = void 0;
            try {
              if (typeof t[D] != "function") {
                var J = Error((x || "React class") + ": " + d + " type `" + D + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[D] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw J.name = "Invariant Violation", J;
              }
              k = t[D](i, D, x, d, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch ($) {
              k = $;
            }
            k && !(k instanceof Error) && (be(E), u("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", x || "React class", d, D, typeof k), be(null)), k instanceof Error && !(k.message in xe) && (xe[k.message] = !0, be(E), u("Failed %s type: %s", d, k.message), be(null));
          }
      }
    }
    var Xe = Array.isArray;
    function Ce(t) {
      return Xe(t);
    }
    function ze(t) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, d = i && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return d;
      }
    }
    function Ue(t) {
      try {
        return We(t), !1;
      } catch {
        return !0;
      }
    }
    function We(t) {
      return "" + t;
    }
    function S(t) {
      if (Ue(t))
        return u("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(t)), We(t);
    }
    var M = b.ReactCurrentOwner, H = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, F, Oe, Ge;
    Ge = {};
    function At(t) {
      if (ne.call(t, "ref")) {
        var i = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Xt(t) {
      if (ne.call(t, "key")) {
        var i = Object.getOwnPropertyDescriptor(t, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function zt(t, i) {
      if (typeof t.ref == "string" && M.current && i && M.current.stateNode !== i) {
        var d = N(M.current.type);
        Ge[d] || (u('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', N(M.current.type), t.ref), Ge[d] = !0);
      }
    }
    function Ut(t, i) {
      {
        var d = function() {
          F || (F = !0, u("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
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
          Oe || (Oe = !0, u("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        d.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: d,
          configurable: !0
        });
      }
    }
    var Kt = function(t, i, d, x, E, L, D) {
      var k = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: t,
        key: i,
        ref: d,
        props: D,
        // Record the component responsible for creating this element.
        _owner: L
      };
      return k._store = {}, Object.defineProperty(k._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(k, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.defineProperty(k, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: E
      }), Object.freeze && (Object.freeze(k.props), Object.freeze(k)), k;
    };
    function Jt(t, i, d, x, E) {
      {
        var L, D = {}, k = null, J = null;
        d !== void 0 && (S(d), k = "" + d), Xt(i) && (S(i.key), k = "" + i.key), At(i) && (J = i.ref, zt(i, E));
        for (L in i)
          ne.call(i, L) && !H.hasOwnProperty(L) && (D[L] = i[L]);
        if (t && t.defaultProps) {
          var $ = t.defaultProps;
          for (L in $)
            D[L] === void 0 && (D[L] = $[L]);
        }
        if (k || J) {
          var Y = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          k && Ut(D, Y), J && Gt(D, Y);
        }
        return Kt(t, k, J, E, x, M.current, D);
      }
    }
    var Ke = b.ReactCurrentOwner, ft = b.ReactDebugCurrentFrame;
    function Te(t) {
      if (t) {
        var i = t._owner, d = de(t.type, t._source, i ? i.type : null);
        ft.setExtraStackFrame(d);
      } else
        ft.setExtraStackFrame(null);
    }
    var Je;
    Je = !1;
    function Qe(t) {
      return typeof t == "object" && t !== null && t.$$typeof === e;
    }
    function ht() {
      {
        if (Ke.current) {
          var t = N(Ke.current.type);
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
    var gt = {};
    function qt(t) {
      {
        var i = ht();
        if (!i) {
          var d = typeof t == "string" ? t : t.displayName || t.name;
          d && (i = `

Check the top-level render call using <` + d + ">.");
        }
        return i;
      }
    }
    function pt(t, i) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var d = qt(i);
        if (gt[d])
          return;
        gt[d] = !0;
        var x = "";
        t && t._owner && t._owner !== Ke.current && (x = " It was passed a child from " + N(t._owner.type) + "."), Te(t), u('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', d, x), Te(null);
      }
    }
    function yt(t, i) {
      {
        if (typeof t != "object")
          return;
        if (Ce(t))
          for (var d = 0; d < t.length; d++) {
            var x = t[d];
            Qe(x) && pt(x, i);
          }
        else if (Qe(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var E = C(t);
          if (typeof E == "function" && E !== t.entries)
            for (var L = E.call(t), D; !(D = L.next()).done; )
              Qe(D.value) && pt(D.value, i);
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
        i.$$typeof === y))
          d = i.propTypes;
        else
          return;
        if (d) {
          var x = N(i);
          Ae(d, t.props, "prop", x, t);
        } else if (i.PropTypes !== void 0 && !Je) {
          Je = !0;
          var E = N(i);
          u("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", E || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && u("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function er(t) {
      {
        for (var i = Object.keys(t.props), d = 0; d < i.length; d++) {
          var x = i[d];
          if (x !== "children" && x !== "key") {
            Te(t), u("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", x), Te(null);
            break;
          }
        }
        t.ref !== null && (Te(t), u("Invalid attribute `ref` supplied to `React.Fragment`."), Te(null));
      }
    }
    var mt = {};
    function vt(t, i, d, x, E, L) {
      {
        var D = O(t);
        if (!D) {
          var k = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (k += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var J = Qt();
          J ? k += J : k += ht();
          var $;
          t === null ? $ = "null" : Ce(t) ? $ = "array" : t !== void 0 && t.$$typeof === e ? ($ = "<" + (N(t.type) || "Unknown") + " />", k = " Did you accidentally export a JSX literal instead of a component?") : $ = typeof t, u("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", $, k);
        }
        var Y = Jt(t, i, d, E, L);
        if (Y == null)
          return Y;
        if (D) {
          var ae = i.children;
          if (ae !== void 0)
            if (x)
              if (Ce(ae)) {
                for (var _e = 0; _e < ae.length; _e++)
                  yt(ae[_e], t);
                Object.freeze && Object.freeze(ae);
              } else
                u("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              yt(ae, t);
        }
        if (ne.call(i, "key")) {
          var pe = N(t), Q = Object.keys(i).filter(function(sr) {
            return sr !== "key";
          }), qe = Q.length > 0 ? "{key: someKey, " + Q.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!mt[pe + qe]) {
            var or = Q.length > 0 ? "{" + Q.join(": ..., ") + ": ...}" : "{}";
            u(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, qe, pe, or, pe), mt[pe + qe] = !0;
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
    var nr = rr, ar = tr;
    Me.Fragment = n, Me.jsx = nr, Me.jsxs = ar;
  }()), Me;
}
process.env.NODE_ENV === "production" ? et.exports = ir() : et.exports = lr();
var l = et.exports;
const _t = ({
  scroll: a,
  rootStyle: e,
  bodyStyle: r,
  onScroll: n
}) => {
  const o = le(null);
  return X(() => {
    o.current && (o.current.scrollLeft = a);
  }, [a]), /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: o,
      dir: "ltr",
      className: "horizontal-scroll-root",
      style: e,
      onScroll: n,
      children: /* @__PURE__ */ l.jsx("div", { className: "horizontal-scroll-body", style: r })
    }
  );
}, Ze = ["#58d9a4", "#8777da", "#ffc400", "#ff9a1f", "#2684ff", "#fe7551", "#00c8e5", "#0052ca", "#5345a8"], jt = "#fac365", nt = (a, e = at) => {
  const { tasks: r, dates: n } = a;
  let o = -1;
  const c = n[1].getTime() - n[0].getTime() - n[1].getTimezoneOffset() * 60 * 1e3 + n[0].getTimezoneOffset() * 60 * 1e3;
  return r.map((g, s) => (g.type === "project" && o++, e(
    {
      ...a,
      task: g,
      taskIndex: s,
      dateDelta: c
    },
    o
  )));
}, at = (a, e) => {
  const r = e > Ze.length ? e % Ze.length : e, n = Ze[r];
  return {
    task: ot({ ...a, backgroundColor: n }),
    project: st({ ...a, backgroundColor: n })
  }[a.task.type];
}, ot = (a) => {
  const {
    task: e,
    taskIndex: r,
    dates: n,
    dateDelta: o,
    rtl: c,
    multiBarRowMode: g,
    // style
    columnWidth: s,
    rowHeight: f,
    taskHeight: h,
    barCornerRadius: p,
    handleWidth: y,
    backgroundColor: R
  } = a;
  let m, v;
  c ? (v = Ie(e.start, n, o, s), m = Ie(e.end, n, o, s)) : (m = Ne(e.start, n, o, s), v = Ne(e.end, n, o, s));
  let j = e.type;
  j === "task" && v - m < y * 2 && (j = "smalltask", v = m + y * 2);
  const C = g === !0 && typeof e.line < "u" ? e.line : r, b = wt(C, f, h), u = e.type === "project" ? e.expanded : void 0, T = {
    backgroundColor: R || jt,
    ...e.styles
  };
  return {
    ...e,
    typeInternal: j,
    x1: m,
    x2: v,
    y: b,
    index: r,
    barCornerRadius: p,
    handleWidth: y,
    expanded: u,
    height: h,
    barChildren: [],
    styles: T
  };
}, st = (a) => {
  const {
    task: e,
    taskIndex: r,
    dates: n,
    dateDelta: o,
    rtl: c,
    multiBarRowMode: g,
    // style
    columnWidth: s,
    rowHeight: f,
    taskHeight: h,
    barCornerRadius: p,
    handleWidth: y,
    backgroundColor: R
  } = a;
  let m, v;
  c ? (v = Ie(e.start, n, o, s), m = Ie(e.end, n, o, s)) : (m = Ne(e.start, n, o, s), v = Ne(e.end, n, o, s));
  const j = g === !0 && typeof e.line < "u" ? e.line : r, C = wt(j, f, h), b = e.type === "project" ? e.expanded : void 0, u = {
    backgroundColor: R || jt,
    ...e.styles
  };
  return {
    ...e,
    typeInternal: e.type,
    x1: m,
    x2: v,
    y: C,
    index: r,
    barCornerRadius: p,
    handleWidth: y,
    expanded: b,
    height: h,
    barChildren: [],
    styles: u
  };
}, Ne = (a, e, r, n) => {
  const o = ~~((a.getTime() - e[0].getTime() + a.getTimezoneOffset() - e[0].getTimezoneOffset()) / r);
  return Math.round(
    (o + (a.getTime() - e[o].getTime() - a.getTimezoneOffset() * 60 * 1e3 + e[o].getTimezoneOffset() * 60 * 1e3) / r) * n
  );
}, Ie = (a, e, r, n) => {
  let o = Ne(a, e, r, n);
  return o += n, o;
}, wt = (a, e, r) => a * e + (e - r) / 2, St = (a, e, r) => {
  const n = (e - a) * 0.01;
  let o;
  return r ? o = e - n : o = a, [n, o];
}, kt = (a, e) => {
  const r = e.x2 - e.x1, n = Math.round(a * 100 / r);
  return n >= 100 ? 100 : n <= 0 ? 0 : n;
}, Rt = (a, e, r) => [
  a - 5,
  e + r,
  a + 5,
  e + r,
  a,
  e + r - 8.66
].join(","), cr = (a, e, r) => {
  a >= r.x2 - r.handleWidth * 2 && (a = r.x2 - r.handleWidth * 2);
  const o = Math.round((a - r.x1) / e) * e;
  return r.x1 + o;
}, ur = (a, e, r) => {
  a <= r.x1 + r.handleWidth * 2 && (a = r.x1 + r.handleWidth * 2);
  const o = Math.round((a - r.x2) / e) * e;
  return r.x2 + o;
}, dr = (a, e, r) => {
  const o = Math.round((a - r.x1) / e) * e, c = r.x1 + o, g = c + r.x2 - r.x1;
  return [c, g];
}, je = (a, e, r, n, o) => {
  let c = new Date((a - e) / n * o + r.getTime());
  return c = new Date(
    c.getTime() + (c.getTimezoneOffset() - r.getTimezoneOffset()) * 6e4
  ), c;
}, He = (a, e, r, n, o, c, g) => {
  let s;
  switch (r.type) {
    default:
      s = fr(
        a,
        e,
        r,
        n,
        o,
        c,
        g
      );
      break;
  }
  return s;
}, fr = (a, e, r, n, o, c, g) => {
  const s = { ...r };
  let f = !1;
  switch (e) {
    case "start": {
      const h = cr(a, n, r);
      s.x1 = h, f = s.x1 !== r.x1, f && (g ? s.end = je(
        h,
        r.x1,
        r.end,
        n,
        o
      ) : s.start = je(
        h,
        r.x1,
        r.start,
        n,
        o
      ));
      break;
    }
    case "end": {
      const h = ur(a, n, r);
      s.x2 = h, f = s.x2 !== r.x2, f && (g ? s.start = je(
        h,
        r.x2,
        r.start,
        n,
        o
      ) : s.end = je(
        h,
        r.x2,
        r.end,
        n,
        o
      ));
      break;
    }
    case "move": {
      const [h, p] = dr(
        a - c,
        n,
        r
      );
      f = h !== r.x1, f && (s.start = je(
        h,
        r.x1,
        r.start,
        n,
        o
      ), s.end = je(
        p,
        r.x2,
        r.end,
        n,
        o
      ), s.x1 = h, s.x2 = p);
      break;
    }
  }
  return { isChanged: f, changedTask: s };
}, hr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  convertToBar: ot,
  convertToBarTask: at,
  convertToBarTasks: nt,
  convertToProject: st,
  getProgressPoint: Rt,
  handleTaskBySVGMouseEvent: He,
  progressByProgressWidth: kt,
  progressWithByParams: St
}, Symbol.toStringTag, { value: "Module" }));
var A = /* @__PURE__ */ ((a) => (a.QuarterDay = "Quarter Day", a.HalfDay = "Half Day", a.Day = "Day", a.Week = "Week", a.Month = "Month", a))(A || {});
const gr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ViewMode: A
}, Symbol.toStringTag, { value: "Module" })), Tt = {}, Be = (a, e = {}) => {
  const r = JSON.stringify([a, e]);
  let n = Tt[r];
  return n || (n = new Intl.DateTimeFormat(a, e), Tt[r] = n), n;
}, U = (a, e, r) => new Date(
  a.getFullYear() + (r === "year" ? e : 0),
  a.getMonth() + (r === "month" ? e : 0),
  a.getDate() + (r === "day" ? e : 0),
  a.getHours() + (r === "hour" ? e : 0),
  a.getMinutes() + (r === "minute" ? e : 0),
  a.getSeconds() + (r === "second" ? e : 0),
  a.getMilliseconds() + (r === "millisecond" ? e : 0)
), oe = (a, e) => {
  const r = [
    "millisecond",
    "second",
    "minute",
    "hour",
    "day",
    "month",
    "year"
  ], n = (c) => {
    const g = r.indexOf(e);
    return r.indexOf(c) <= g;
  };
  return new Date(
    a.getFullYear(),
    n("year") ? 0 : a.getMonth(),
    n("month") ? 1 : a.getDate(),
    n("day") ? 0 : a.getHours(),
    n("hour") ? 0 : a.getMinutes(),
    n("minute") ? 0 : a.getSeconds(),
    n("second") ? 0 : a.getMilliseconds()
  );
}, $e = (a, e = A.Day) => {
  let r = a[0].start, n = a[0].start;
  for (const o of a)
    o.start < r && (r = o.start), o.end > n && (n = o.end);
  switch (e) {
    case A.Month:
      r = U(r, -1, "month"), r = oe(r, "month"), n = U(n, 1, "year"), n = oe(n, "year");
      break;
    case A.Week:
      r = oe(r, "day"), n = oe(n, "day"), r = U(pr(r), -7, "day"), n = U(n, 1.5, "month");
      break;
    case A.Day:
      r = oe(r, "day"), n = oe(n, "day"), r = U(r, -1, "day"), n = U(n, 19, "day");
      break;
    case A.QuarterDay:
      r = oe(r, "day"), n = oe(n, "day"), r = U(r, -1, "day"), n = U(n, 66, "hour");
      break;
    case A.HalfDay:
      r = oe(r, "day"), n = oe(n, "day"), r = U(r, -1, "day"), n = U(n, 108, "hour");
      break;
  }
  return [r, n];
}, Ve = (a, e, r = A.Day) => {
  let n = new Date(a);
  const o = [n];
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
    o.push(n);
  }
  return o;
}, we = (a, e) => {
  let r = Be(e, {
    month: "long"
  }).format(a);
  return r = r.replace(
    r[0],
    r[0].toLocaleUpperCase()
  ), r;
}, pr = (a) => {
  const e = a.getDay(), r = a.getDate() - e + (e === 0 ? -6 : 1);
  return new Date(a.setDate(r));
}, it = (a) => {
  const e = new Date(a.valueOf()), r = (e.getDay() + 6) % 7;
  e.setDate(e.getDate() - r + 3);
  const n = e.valueOf();
  e.setMonth(0, 1), e.getDay() !== 4 && e.setMonth(0, 1 + (4 - e.getDay() + 7) % 7);
  const o = (1 + Math.ceil((n - e.valueOf()) / 6048e5)).toString();
  return o.length === 1 ? `0${o}` : o;
}, lt = (a, e) => new Date(e, a + 1, 0).getDate(), yr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  addToDate: U,
  ganttDateRange: $e,
  getCachedDateTimeFormat: Be,
  getDaysInMonth: lt,
  getLocaleMonth: we,
  getWeekNumberISO8601: it,
  seedDates: Ve,
  startOfDate: oe
}, Symbol.toStringTag, { value: "Module" }));
function ct(a) {
  return a.key !== void 0;
}
function Dt(a) {
  return a.clientX !== void 0;
}
function Et(a) {
  return a.x1 !== void 0;
}
function ut(a) {
  const e = a.filter((r) => !(r.expanded === !1 && r.type === "project"));
  if (e.length > 0)
    for (let r = 0; e.length > r; r++) {
      const n = e[r], o = Ct(a, n);
      a = a.filter((c) => o.indexOf(c) === -1);
    }
  return a;
}
function Ct(a, e) {
  let r = [];
  e.type === "project" && (r = a.filter((o) => o.project && o.project === e.id));
  const n = r.reduce(
    (o, c) => o.concat(o, Ct(a, c)),
    []
  );
  return r = r.concat(r, n), r;
}
const mr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isBarTask: Et,
  isKeyboardEvent: ct,
  isMouseEvent: Dt,
  removeHiddenTasks: ut
}, Symbol.toStringTag, { value: "Module" }));
function ye(...a) {
  return a.filter((e) => e).join(" ") || void 0;
}
const vr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cn: ye
}, Symbol.toStringTag, { value: "Module" })), kr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  addToDate: U,
  barHelper: hr,
  classNameHelper: vr,
  cn: ye,
  convertToBar: ot,
  convertToBarTask: at,
  convertToBarTasks: nt,
  convertToProject: st,
  dateHelper: yr,
  ganttDateRange: $e,
  getCachedDateTimeFormat: Be,
  getDaysInMonth: lt,
  getLocaleMonth: we,
  getProgressPoint: Rt,
  getWeekNumberISO8601: it,
  handleTaskBySVGMouseEvent: He,
  isBarTask: Et,
  isKeyboardEvent: ct,
  isMouseEvent: Dt,
  otherHelper: mr,
  progressByProgressWidth: kt,
  progressWithByParams: St,
  removeHiddenTasks: ut,
  seedDates: Ve,
  startOfDate: oe
}, Symbol.toStringTag, { value: "Module" })), Ot = ({
  task: a,
  rtl: e,
  children: r,
  scrollX: n,
  scrollY: o,
  svgContainerHeight: c,
  svgContainerWidth: g,
  headerHeight: s,
  rowHeight: f,
  taskListWidth: h,
  multiBarRowMode: p = !1
}) => {
  const [y, R] = V(0), [m, v] = V(0), j = le(null), C = m !== 0 && y !== 0;
  return X(() => {
    if (j.current) {
      const b = j.current.offsetHeight * 1.1, u = j.current.offsetWidth * 1.1;
      let _ = (p === !0 && typeof a.line < "u" ? a.line : a.index) * f - o + s, w;
      if (e)
        w = a.x1 - u - n, w < 0 && (w = a.x2 - n), u + w > g && (w = g - u, _ += f);
      else {
        w = a.x2 + h - n;
        const I = u + w, q = h + g;
        I > q && (w = a.x1 + h - n - u), w < h && (w = g + h - u, _ += f);
      }
      b + _ - o > c - o && (_ = c - b), R(_), v(w + 50);
    }
  }, [
    a,
    n,
    o,
    s,
    h,
    f,
    c,
    g,
    e,
    p
  ]), /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: j,
      className: ye("tooltip-wrap", C ? "visible" : "hidden"),
      style: {
        left: m,
        top: y
      },
      children: r
    }
  );
}, Pt = ({ task: a }) => /* @__PURE__ */ l.jsxs("div", { className: "tootip-content", children: [
  /* @__PURE__ */ l.jsx("b", { className: "dates-range", children: `${a.name}: ${a.start.getFullYear()}-${a.start.getMonth() + 1}-${a.start.getDate()} ~ ${a.end.getFullYear()}-${a.end.getMonth() + 1}-${a.end.getDate()}` }),
  a.end.getTime() - a.start.getTime() !== 0 && /* @__PURE__ */ l.jsx("p", { className: "duration", children: `기간: ${~~((a.end.getTime() - a.start.getTime()) / (1e3 * 60 * 60 * 24))} 일` })
] }), Mt = ({
  scroll: a,
  rootStyle: e,
  bodyStyle: r,
  onScroll: n
}) => {
  const o = le(null);
  return X(() => {
    o.current && (o.current.scrollTop = a);
  }, [a]), /* @__PURE__ */ l.jsx(
    "div",
    {
      ref: o,
      className: "vertical-scroll-root",
      style: e,
      onScroll: n,
      children: /* @__PURE__ */ l.jsx("div", { className: "vertical-scroll-body", style: r })
    }
  );
}, Rr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  HorizontalScroll: _t,
  Tooltip: Ot,
  TooltipContent: Pt,
  VerticalScroll: Mt
}, Symbol.toStringTag, { value: "Module" })), Lt = (a) => {
  const {
    className: e,
    isDateChangeable: r,
    // style
    rootStyle: n,
    // components
    barDisplay: o,
    leftBarDateHandle: c,
    rightBarDateHandle: g,
    // handlers
    onMouseEnter: s,
    onMouseLeave: f
  } = a;
  return /* @__PURE__ */ l.jsxs(
    "g",
    {
      className: ye("bar", e),
      style: n,
      tabIndex: 0,
      onMouseEnter: s,
      onMouseLeave: f,
      children: [
        o,
        /* @__PURE__ */ l.jsx("g", { children: r === !0 && // DATE HANDLES
        /* @__PURE__ */ l.jsxs("g", { children: [
          c && c,
          g && g
        ] }) })
      ]
    }
  );
}, dt = ({
  x: a = 0,
  y: e = 0,
  barCornerRadius: r = 5,
  rootStyle: n,
  barStyle: o,
  onMouseDown: c
}) => /* @__PURE__ */ l.jsx("g", { className: "bar-display-root", onMouseDown: c, style: n, children: /* @__PURE__ */ l.jsx(
  "rect",
  {
    className: "bar-display-bar",
    style: o,
    x: a,
    y: e,
    rx: r,
    ry: r
  }
) }), Nt = (a) => {
  const { rootStyle: e, task: r, isDateChangeable: n, onEventStart: o } = a;
  return /* @__PURE__ */ l.jsx("g", { className: "bar", tabIndex: 0, style: e, children: /* @__PURE__ */ l.jsx(
    dt,
    {
      x: r.x1,
      y: r.y,
      barCornerRadius: r.barCornerRadius,
      onMouseDown: (c) => {
        n === !0 && o("move", r, c);
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
}, Ft = (a) => {
  const {
    task: e,
    rootStyle: r,
    backgroundStyle: n
  } = a;
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
  x: a = 0,
  y: e = 0,
  width: r = 10,
  height: n = 30,
  barCornerRadius: o = 5,
  onMouseDown: c
}) => /* @__PURE__ */ l.jsx(
  "rect",
  {
    className: "bar-date-handle",
    x: a,
    y: e,
    width: r,
    height: n,
    ry: o,
    rx: o,
    onMouseDown: c
  }
), Wt = (a) => {
  const { task: e, rtl: r, isDateChangeable: n, backgroundColor: o, onEventStart: c } = a, [g, s] = V(!1), f = /* @__PURE__ */ l.jsx(
    dt,
    {
      x: e.x1,
      y: e.y,
      barCornerRadius: e.barCornerRadius,
      onMouseDown: (y) => {
        n === !0 && c("move", e, y);
      },
      rootStyle: {
        height: e.height
      },
      barStyle: {
        height: e.height,
        width: e.x2 - e.x1,
        fill: o
      }
    }
  ), h = /* @__PURE__ */ l.jsx(
    tt,
    {
      x: e.x1 + 1,
      y: e.y + 1,
      width: e.handleWidth,
      height: e.height - 2,
      barCornerRadius: e.barCornerRadius,
      onMouseDown: (y) => c("start", e, y)
    }
  ), p = /* @__PURE__ */ l.jsx(
    tt,
    {
      x: e.x2 - e.handleWidth - 1,
      y: e.y + 1,
      height: e.height - 2,
      width: e.handleWidth,
      barCornerRadius: e.barCornerRadius,
      onMouseDown: (y) => c("end", e, y)
    }
  );
  return /* @__PURE__ */ l.jsx("svg", { style: { overflow: "visible" }, className: "original", children: /* @__PURE__ */ l.jsx(
    Lt,
    {
      rtl: r,
      className: g ? "hovered" : "",
      isDateChangeable: n,
      barDisplay: f,
      leftBarDateHandle: h,
      rightBarDateHandle: p,
      onMouseEnter: () => s(() => !0),
      onMouseLeave: () => s(() => !1)
    }
  ) });
}, Le = (a) => {
  const {
    value: e,
    x1Line: r,
    xText: n,
    y1Line: o,
    y2Line: c,
    yText: g,
    // styles
    rootStyle: s,
    lineStyle: f,
    textStyle: h
  } = a;
  return /* @__PURE__ */ l.jsxs("g", { style: s, className: "calendar__header-root", children: [
    /* @__PURE__ */ l.jsx(
      "line",
      {
        className: "calendar__header-line",
        style: f,
        x1: r,
        y1: o,
        x2: r,
        y2: c
      },
      e + "line"
    ),
    /* @__PURE__ */ l.jsx("text", { className: "calendar__header-text", style: h, y: g, x: n, children: e }, e + "text")
  ] });
}, It = (a) => {
  const {
    columnWidth: e,
    dateSetup: r,
    headerHeight: n,
    locale: o,
    rtl: c,
    // styles
    rootStyle: g,
    headerStyle: s,
    bottomTextStyle: f
  } = a, h = () => {
    const j = [], C = [], b = n * 0.5;
    for (let u = 0; u < r.dates.length; u++) {
      const T = r.dates[u], _ = we(T, o);
      if (C.push(
        /* @__PURE__ */ l.jsx(
          "text",
          {
            style: f,
            y: n * 0.8,
            x: e * u + e * 0.5,
            children: _
          },
          _ + T.getFullYear()
        )
      ), u === 0 || T.getFullYear() !== r.dates[u - 1].getFullYear()) {
        const w = T.getFullYear().toString();
        let W;
        c ? W = (6 + u + T.getMonth() + 1) * e : W = (6 + u - T.getMonth()) * e, j.push(
          /* @__PURE__ */ l.jsx(
            Le,
            {
              value: w,
              x1Line: e * u,
              y1Line: 0,
              y2Line: n,
              xText: W,
              yText: b * 0.9
            },
            w
          )
        );
      }
    }
    return [j, C];
  }, p = () => {
    const j = [], C = [];
    let b = 1;
    const u = n * 0.5, T = r.dates;
    for (let _ = T.length - 1; _ >= 0; _--) {
      const w = T[_];
      let W = "";
      (_ === 0 || w.getMonth() !== T[_ - 1].getMonth()) && (W = `${we(w, o)}, ${w.getFullYear()}`);
      const I = `W${it(w)}`;
      C.push(
        /* @__PURE__ */ l.jsx(
          "text",
          {
            style: f,
            y: n * 0.8,
            x: e * (_ + +c),
            children: I
          },
          w.getTime()
        )
      ), W && (_ !== T.length - 1 && j.push(
        /* @__PURE__ */ l.jsx(
          Le,
          {
            value: W,
            x1Line: e * _ + b * e,
            y1Line: 0,
            y2Line: n,
            xText: e * _ + e * b * 0.5,
            yText: u * 0.9
          },
          W
        )
      ), b = 0), b++;
    }
    return [j, C];
  }, y = () => {
    const j = [], C = [], b = n * 0.5, u = r.dates;
    for (let T = 0; T < u.length; T++) {
      const _ = u[T], w = _.getDate().toString();
      if (C.push(
        /* @__PURE__ */ l.jsx(
          "text",
          {
            style: f,
            y: n * 0.8,
            x: e * T + e * 0.5,
            children: w
          },
          _.getTime()
        )
      ), T + 1 !== u.length && _.getMonth() !== u[T + 1].getMonth()) {
        const W = we(_, o);
        j.push(
          /* @__PURE__ */ l.jsx(
            Le,
            {
              value: W,
              x1Line: e * (T + 1),
              y1Line: 0,
              y2Line: n,
              xText: e * (T + 1) - lt(_.getMonth(), _.getFullYear()) * e * 0.5,
              yText: b * 0.9
            },
            W + _.getFullYear()
          )
        );
      }
    }
    return [j, C];
  }, R = () => {
    const j = [], C = [], b = r.viewMode === A.HalfDay ? 2 : 4, u = n * 0.5, T = r.dates;
    for (let _ = 0; _ < T.length; _++) {
      const w = T[_], W = Be(o, {
        hour: "numeric"
      }).format(w);
      if (C.push(
        /* @__PURE__ */ l.jsx(
          "text",
          {
            style: f,
            y: n * 0.8,
            x: e * (_ + +c),
            children: W
          },
          w.getTime()
        )
      ), _ === 0 || w.getDate() !== T[_ - 1].getDate()) {
        const I = `${w.getDate()} ${we(w, o)}`;
        j.push(
          /* @__PURE__ */ l.jsx(
            Le,
            {
              value: I,
              x1Line: e * _ + b * e,
              y1Line: 0,
              y2Line: n,
              xText: e * _ + b * e * 0.5,
              yText: u * 0.9
            },
            I + w.getFullYear()
          )
        );
      }
    }
    return [j, C];
  };
  let m = [], v = [];
  switch (r.viewMode) {
    case A.Month:
      [m, v] = h();
      break;
    case A.Week:
      [m, v] = p();
      break;
    case A.Day:
      [m, v] = y();
      break;
    default:
      [m, v] = R();
      break;
  }
  return /* @__PURE__ */ l.jsx("svg", { style: { overflow: "visible" }, children: /* @__PURE__ */ l.jsxs("g", { style: g, className: "calendar-root", children: [
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
    m,
    v
  ] }) });
}, Ht = (a) => {
  const {
    tasks: e,
    dates: r,
    rtl: n,
    rowHeight: o,
    columnWidth: c,
    svgWidth: g,
    todayColor: s,
    // style
    gridRowStyle: f,
    gridRowLineStyle: h,
    gridTickStyle: p
  } = a, y = /* @__PURE__ */ new Date();
  let R = 0, m = 0;
  const v = [], j = [
    /* @__PURE__ */ l.jsx(
      "line",
      {
        style: h,
        x: "0",
        y1: 0,
        x2: g,
        y2: 0
      },
      "RowLineFirst"
    )
  ];
  for (const u of e)
    v.push(
      /* @__PURE__ */ l.jsx(
        "rect",
        {
          className: "grid-row",
          style: f,
          x: "0",
          y: R,
          width: g,
          height: o
        },
        "Row" + u.id
      )
    ), j.push(
      /* @__PURE__ */ l.jsx(
        "line",
        {
          className: "grid-row__line",
          style: h,
          x: "0",
          y1: R + o,
          x2: g,
          y2: R + o
        },
        "RowLine" + u.id
      )
    ), R += o;
  const C = [];
  let b = /* @__PURE__ */ l.jsx("rect", {});
  for (let u = 0; u < r.length; u++) {
    const T = r[u];
    C.push(
      /* @__PURE__ */ l.jsx(
        "line",
        {
          className: "grid-tick",
          style: p,
          x1: m,
          y1: 0,
          x2: m,
          y2: R
        },
        T.getTime()
      )
    ), (u + 1 !== r.length && T.getTime() < y.getTime() && r[u + 1].getTime() >= y.getTime() || // if current date is last
    u !== 0 && u + 1 === r.length && T.getTime() < y.getTime() && U(
      T,
      T.getTime() - r[u - 1].getTime(),
      "millisecond"
    ).getTime() >= y.getTime()) && (b = /* @__PURE__ */ l.jsx(
      "rect",
      {
        x: m,
        y: 0,
        width: c,
        height: R,
        fill: s
      }
    )), n && u + 1 !== r.length && T.getTime() >= y.getTime() && r[u + 1].getTime() < y.getTime() && (b = /* @__PURE__ */ l.jsx(
      "rect",
      {
        x: m + c,
        y: 0,
        width: c,
        height: R,
        fill: s
      }
    )), m += c;
  }
  return /* @__PURE__ */ l.jsx("svg", { style: { overflow: "visible" }, children: /* @__PURE__ */ l.jsxs("g", { children: [
    /* @__PURE__ */ l.jsx("g", { children: v }),
    /* @__PURE__ */ l.jsx("g", { children: j }),
    /* @__PURE__ */ l.jsx("g", { children: C }),
    /* @__PURE__ */ l.jsx("g", { children: b })
  ] }) });
}, $t = (a) => {
  const {
    task: e,
    rtl: r,
    isDateChangeable: n,
    isDelete: o,
    isSelected: c,
    taskHeight: g,
    onEventStart: s
  } = a, [f, h] = V(/* @__PURE__ */ l.jsx("div", {})), [p, y] = V(!0), R = le(null), m = () => {
    const v = e.x2 - e.x1;
    return p ? e.x1 + v * 0.5 : r && R.current ? e.x1 - R.current.getBBox().width : e.x1 + v + 10;
  };
  return X(() => {
    switch (e.typeInternal) {
      case "project":
        h(
          /* @__PURE__ */ l.jsx(
            Ft,
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
        h(/* @__PURE__ */ l.jsx(Nt, { ...a }));
        break;
      default:
        h(() => /* @__PURE__ */ l.jsx(
          Wt,
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
  }, [e, c]), X(() => {
    R.current && y(R.current.getBBox().width < e.x2 - e.x1);
  }, [R, e]), /* @__PURE__ */ l.jsx("svg", { children: /* @__PURE__ */ l.jsxs(
    "g",
    {
      onKeyDown: (v) => {
        switch (v.key) {
          case "Delete": {
            o && s("delete", e, v);
            break;
          }
        }
        v.stopPropagation();
      },
      onMouseEnter: (v) => {
        s("mouseenter", e, v);
      },
      onMouseLeave: (v) => {
        s("mouseleave", e, v);
      },
      onDoubleClick: (v) => {
        s("dblclick", e, v);
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
            x: m(),
            y: e.y + g * 0.5,
            ref: R,
            children: e.name
          }
        )
      ]
    }
  ) });
}, Vt = (a) => {
  const {
    scrollY: e,
    // components
    TaskListHeader: r,
    TaskListTable: n,
    // components props
    taskListHeaderProps: o,
    taskListTableProps: c,
    // styles
    taskListTableWrapperStyles: g,
    // refs
    taskListRef: s
  } = a, f = le(null);
  return X(() => {
    f.current && (f.current.scrollTop = e);
  }, [e]), /* @__PURE__ */ l.jsxs("div", { ref: s, children: [
    /* @__PURE__ */ l.jsx(r, { ...o }),
    /* @__PURE__ */ l.jsx(
      "div",
      {
        className: "tasklist_wrapper",
        style: g,
        ref: f,
        children: /* @__PURE__ */ l.jsx(n, { ...c })
      }
    )
  ] });
}, Bt = (a) => {
  const {
    columns: e,
    // style
    rootStyle: r,
    headerStyle: n,
    columnStyle: o,
    columnSeparatorStyle: c
  } = a, g = [];
  return e.forEach((s, f) => {
    const h = /* @__PURE__ */ l.jsxs(rt.Fragment, { children: [
      /* @__PURE__ */ l.jsx(
        "div",
        {
          className: "tasklist__header-column",
          style: { ...o, width: `${s.width}px` },
          children: s.name
        }
      ),
      f !== e.length - 1 && /* @__PURE__ */ l.jsx(
        "div",
        {
          className: "tasklist__header-comumn__sep",
          style: c
        }
      )
    ] }, f);
    g.push(h);
  }), // ROOT
  /* @__PURE__ */ l.jsx("div", { className: "tasklist__header-root", style: r, children: /* @__PURE__ */ l.jsx("div", { className: "tasklist__header-header", style: n, children: g }) });
}, Yt = (a) => {
  const {
    tasks: e,
    columns: r,
    expanderSymbolOpen: n = "▼",
    expanderSymbolClose: o = "▶",
    expanderSymbolEmpty: c = "",
    onExpanderClick: g
  } = a;
  return (
    // ROOT
    /* @__PURE__ */ l.jsx("div", { className: "tasklist__table-root", children: e.map((s) => {
      let f = c;
      return s.expanded === !0 ? f = o : s.expanded === !1 && (f = n), // TABLE ROW
      /* @__PURE__ */ l.jsx(
        "div",
        {
          className: ye(
            "tasklist__table-row",
            s.type === "project" ? "project" : "task"
          ),
          children: r.map((h, p) => {
            var y;
            return console.log(h.id, s[h.id]), p === 0 ? (
              // First Column
              /* @__PURE__ */ l.jsx(
                "div",
                {
                  className: ye(
                    "tasklist__table-cell",
                    s.type === "project" ? "project" : "task"
                  ),
                  title: s.name,
                  style: { width: h.width },
                  children: /* @__PURE__ */ l.jsxs(
                    "div",
                    {
                      className: "tasklist__table-cell__wrapper",
                      onClick: () => g(s),
                      children: [
                        /* @__PURE__ */ l.jsx(
                          "div",
                          {
                            className: f ? "tasklist__table-expander" : "tasklist__table-expander__empty",
                            children: f
                          }
                        ),
                        /* @__PURE__ */ l.jsx("div", { children: s.name })
                      ]
                    }
                  )
                }
              )
            ) : /* @__PURE__ */ l.jsx(
              "div",
              {
                className: ye("tasklist__table-cell"),
                title: h.name,
                children: /* @__PURE__ */ l.jsx("div", { style: { width: h.width || "150px" }, children: h.cell ? h.cell(s) : ((y = s[h.id]) == null ? void 0 : y.toString()) || "" })
              }
            );
          })
        },
        `${s.id}row`
      );
    }) })
  );
}, Dr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Bar: Lt,
  BarDateHandle: tt,
  BarDisplay: dt,
  BarOriginal: Wt,
  BarSmall: Nt,
  Calendar: It,
  CalendarHeader: Le,
  Grid: Ht,
  Project: Ft,
  TaskItem: $t,
  TaskList: Vt,
  TaskListHeader: Bt,
  TaskListTable: Yt
}, Symbol.toStringTag, { value: "Module" })), xr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), br = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), Tr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), _r = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), Er = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ViewMode: A,
  barTask: xr,
  custom: br,
  dateSetup: Tr,
  ganttTaskActions: _r,
  publicTypes: gr
}, Symbol.toStringTag, { value: "Module" })), jr = (a) => {
  var he;
  const {
    tasks: e,
    dates: r,
    ganttEvent: n,
    selectedTask: o,
    columnWidth: c,
    timeStep: g,
    svg: s,
    taskHeight: f,
    rtl: h,
    setGanttEvent: p,
    setFailedTask: y,
    setSelectedTask: R,
    onDateChange: m,
    onProgressChange: v,
    onDoubleClick: j,
    onDelete: C
  } = a, [b, u] = V(0), [T, _] = V(0), [w, W] = V(!1), I = (he = s == null ? void 0 : s.current) == null ? void 0 : he.createSVGPoint(), q = async (O, B, z) => {
    var N;
    if (!z)
      O === "select" && R(B.id);
    else if (ct(z)) {
      if (O === "delete" && C)
        try {
          const P = await C(B);
          P !== void 0 && P && p({ action: O, changedTask: B });
        } catch (P) {
          console.error("Error on Delete. " + P);
        }
    } else if (O === "mouseenter")
      n.action || p({
        action: O,
        changedTask: B,
        originalSelectedTask: B
      });
    else if (O === "mouseleave")
      n.action === "mouseenter" && p({ action: "" });
    else if (O === "dblclick")
      j && j(B);
    else if (O === "move") {
      if (!(s != null && s.current) || !I)
        return;
      I.x = z.clientX;
      const P = I.matrixTransform(
        (N = s.current.getScreenCTM()) == null ? void 0 : N.inverse()
      );
      _(P.x - B.x1), p({
        action: O,
        changedTask: B,
        originalSelectedTask: B
      });
    } else
      p({
        action: O,
        changedTask: B,
        originalSelectedTask: B
      });
  };
  return X(() => {
    const O = r[1].getTime() - r[0].getTime() - r[1].getTimezoneOffset() * 60 * 1e3 + r[0].getTimezoneOffset() * 60 * 1e3, B = g * c / O;
    u(B);
  }, [c, r, g]), X(() => {
    const O = async (z) => {
      var ce;
      if (!n.changedTask || !I || !(s != null && s.current))
        return;
      z.preventDefault(), I.x = z.clientX;
      const N = I.matrixTransform(
        (ce = s == null ? void 0 : s.current.getScreenCTM()) == null ? void 0 : ce.inverse()
      ), { isChanged: P, changedTask: Z } = He(
        N.x,
        n.action,
        n.changedTask,
        b,
        g,
        T,
        h
      );
      P && p({ action: n.action, changedTask: Z });
    }, B = async (z) => {
      var G;
      const { action: N, originalSelectedTask: P, changedTask: Z } = n;
      if (!Z || !I || !(s != null && s.current) || !P)
        return;
      z.preventDefault(), I.x = z.clientX;
      const ce = I.matrixTransform(
        (G = s == null ? void 0 : s.current.getScreenCTM()) == null ? void 0 : G.inverse()
      ), { changedTask: re } = He(
        ce.x,
        N,
        Z,
        b,
        g,
        T,
        h
      ), ge = P.start !== re.start || P.end !== re.end || P.progress !== re.progress;
      s.current.removeEventListener("mousemove", O), s.current.removeEventListener("mouseup", B), p({ action: "" }), W(!1);
      let se = !0;
      if ((N === "move" || N === "end" || N === "start") && m && ge)
        try {
          const K = await m(
            re,
            re.barChildren
          );
          K !== void 0 && (se = K);
        } catch {
          se = !1;
        }
      else if (v && ge)
        try {
          const K = await v(
            re,
            re.barChildren
          );
          K !== void 0 && (se = K);
        } catch {
          se = !1;
        }
      se || y(P);
    };
    !w && (n.action === "move" || n.action === "end" || n.action === "start" || n.action === "progress") && (s != null && s.current) && (s.current.addEventListener("mousemove", O), s.current.addEventListener("mouseup", B), W(!0));
  }, [
    n,
    b,
    T,
    v,
    g,
    m,
    s,
    w
  ]), /* @__PURE__ */ l.jsx("g", { className: "content", children: /* @__PURE__ */ l.jsx("g", { className: "bar", children: e.map((O) => /* @__PURE__ */ l.jsx(
    $t,
    {
      task: O,
      taskHeight: f,
      isDateChangeable: !!m && !O.isDisabled,
      isDelete: !O.isDisabled,
      onEventStart: q,
      isSelected: !!o && O.id === o.id,
      rtl: h
    },
    O.id
  )) }) });
}, wr = (a) => {
  const {
    gridProps: e,
    calendarProps: r,
    barProps: n,
    ganttHeight: o,
    scrollY: c,
    scrollX: g
  } = a, s = le(null), f = le(null), h = le(null);
  X(() => {
    f.current && (f.current.scrollTop = c);
  }, [c]), X(() => {
    h.current && (h.current.scrollLeft = g);
  }, [g]);
  const p = { ...n, svg: s };
  return (
    // ROOT
    /* @__PURE__ */ l.jsxs("div", { className: "roadmap__task-root", ref: h, dir: "ltr", children: [
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
            height: o || void 0,
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
                /* @__PURE__ */ l.jsx(jr, { ...p })
              ]
            }
          )
        }
      )
    ] })
  );
}, Cr = {
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
  columns: [{ id: "name", name: "Name", width: 180 }],
  TooltipContent: Pt
}, Or = (a) => {
  const {
    // general
    tasks: e,
    columns: r,
    bodyStyle: n,
    // event options
    timeStep: o,
    onDateChange: c,
    onProgressChange: g,
    onDoubleClick: s,
    onDelete: f,
    onSelect: h,
    onExpanderClick: p,
    // display options
    viewMode: y,
    locale: R,
    rtl: m,
    // styling options
    headerHeight: v,
    columnWidth: j,
    listCellWidth: C,
    rowHeight: b,
    ganttHeight: u,
    barFill: T,
    barCornerRadius: _,
    handleWidth: w,
    todayColor: W,
    TooltipContent: I
  } = a, [q, he] = V(e), [O, B] = V(() => {
    const [S, M] = $e(q, y);
    return { viewMode: y, dates: Ve(S, M, y) };
  }), [z, N] = V(b * T / 100), [P, Z] = V(0), [ce, re] = V(0), [ge, se] = V(u), [G, K] = V([]), [ue, Se] = V({
    action: ""
  }), [ke, Ye] = V(), [fe, me] = V(null), [ee, ve] = V(0), [te, Re] = V(-1), [De, Ee] = V(!1), ie = le(null), de = le(null), ne = O.dates.length * j, xe = G.length * b;
  X(() => he(e), [e]), X(() => {
    const S = p ? ut(q) : q, [M, H] = $e(S, y);
    let F = Ve(M, H, y);
    m && (F = F.reverse(), te === -1 && Re(F.length * j)), B({ dates: F, viewMode: y }), K(
      nt({
        tasks: S,
        dates: F,
        columnWidth: j,
        rowHeight: b,
        taskHeight: z,
        barCornerRadius: _,
        handleWidth: w,
        rtl: m
      })
    );
  }, [
    q,
    y,
    b,
    _,
    j,
    z,
    w,
    m,
    te,
    p
  ]), X(() => {
    const { changedTask: S, action: M } = ue;
    if (S) {
      if (M === "delete")
        Se({ action: "" }), K(G.filter((H) => H.id !== S.id));
      else if (M === "move" || M === "end" || M === "start" || M === "progress") {
        const H = G.find((F) => F.id === S.id);
        if (H && (H.start.getTime() !== S.start.getTime() || H.end.getTime() !== S.end.getTime())) {
          const F = G.map(
            (Oe) => Oe.id === S.id ? S : Oe
          );
          K(F);
        }
      }
    }
  }, [ue, G]), X(() => {
    ie.current && re(ie.current.offsetWidth - P);
  }, [ie, P]), X(() => {
    const S = (M) => {
      if (M.shiftKey || M.deltaX) {
        const H = M.deltaX ? M.deltaX : M.deltaY;
        let F = te + H;
        F < 0 ? F = 0 : F > ne && (F = ne), Re(F), M.preventDefault();
      } else if (u) {
        let H = ee + M.deltaY;
        H < 0 ? H = 0 : H > xe - u && (H = xe - u), H !== ee && (ve(H), M.preventDefault());
      }
      Ee(!0);
    };
    return ie.current && ie.current.addEventListener("wheel", S, {
      passive: !1
    }), () => {
      ie.current && ie.current.removeEventListener("wheel", S);
    };
  }, [ie.current, ee, te, u, ne, m]), X(() => {
    fe && (K(
      G.map((S) => S.id !== fe.id ? S : fe)
    ), me(null));
  }, [fe, G]), X(() => {
    const S = b * T / 100;
    S !== z && N(S);
  }, [b, T, z]), X(() => {
    C || Z(0), de.current && Z(de.current.offsetWidth);
  }, [de, C]), X(() => {
    se(u ? u + v : q.length * b + v);
  }, [u, v, b, q]);
  const Fe = (S) => {
    ee !== S.currentTarget.scrollTop && !De && ve(S.currentTarget.scrollTop), Ee(!1);
  }, be = (S) => {
    te !== S.currentTarget.scrollLeft && !De && Re(S.currentTarget.scrollLeft), Ee(!1);
  }, Ae = (S) => {
    const M = G.find((F) => F.id === S), H = G.find(
      (F) => !!ke && F.id === ke.id
    );
    h && (H && h(H, !1), M && h(M, !0)), Ye(M);
  }, Xe = (S) => {
    p && S.expanded !== void 0 && p({ ...S, expanded: !S.expanded });
  }, Ce = {
    columnWidth: j,
    svgWidth: ne,
    tasks: q,
    rowHeight: b,
    dates: O.dates,
    todayColor: W,
    rtl: m
  }, ze = {
    dateSetup: O,
    locale: R,
    headerHeight: v,
    columnWidth: j,
    rtl: m
  }, Ue = {
    tasks: G,
    dates: O.dates,
    ganttEvent: ue,
    selectedTask: ke,
    rowHeight: b,
    taskHeight: z,
    columnWidth: j,
    timeStep: o,
    svgWidth: ne,
    rtl: m,
    setGanttEvent: Se,
    setFailedTask: me,
    setSelectedTask: Ae,
    onDateChange: c,
    onProgressChange: g,
    onDoubleClick: s,
    onDelete: f
  }, We = {
    scrollY: ee,
    // components
    TaskListHeader: Bt,
    TaskListTable: Yt,
    // components props
    taskListHeaderProps: {
      columns: r
    },
    taskListTableProps: {
      tasks: G,
      columns: r,
      onExpanderClick: Xe
    },
    // styles
    taskListTableWrapperStyles: {
      height: u
    },
    // refs
    taskListRef: de
  };
  return (
    // ROOT
    /* @__PURE__ */ l.jsxs("div", { children: [
      /* @__PURE__ */ l.jsxs("div", { className: "roadmap", style: n, tabIndex: 0, ref: ie, children: [
        C && /* @__PURE__ */ l.jsx(Vt, { ...We }),
        /* @__PURE__ */ l.jsx(
          wr,
          {
            barProps: Ue,
            gridProps: Ce,
            calendarProps: ze,
            ganttHeight: u,
            scrollX: te,
            scrollY: ee
          }
        ),
        ue.changedTask && /* @__PURE__ */ l.jsx(
          Ot,
          {
            rowHeight: b,
            svgContainerHeight: ge,
            svgContainerWidth: ce,
            scrollX: te,
            scrollY: ee,
            task: ue.changedTask,
            headerHeight: v,
            taskListWidth: P,
            rtl: m,
            children: /* @__PURE__ */ l.jsx(I, { task: ue.changedTask })
          }
        ),
        /* @__PURE__ */ l.jsx(
          Mt,
          {
            scroll: ee,
            onScroll: Fe,
            rootStyle: {
              height: u,
              marginTop: v,
              marginLeft: m ? "" : "-17px"
            },
            bodyStyle: {
              height: xe
            }
          }
        )
      ] }),
      /* @__PURE__ */ l.jsx(
        _t,
        {
          scroll: te,
          onScroll: be,
          rootStyle: {
            margin: m ? `0px ${P}px 0px 0px` : `0px 0px 0px ${P}px`
          },
          bodyStyle: {
            width: ne
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
  Wt as BarOriginal,
  Nt as BarSmall,
  It as Calendar,
  Le as CalendarHeader,
  Ht as Grid,
  _t as HorizontalScroll,
  Ft as Project,
  Or as RoadMap,
  $t as TaskItem,
  Vt as TaskList,
  Bt as TaskListHeader,
  Yt as TaskListTable,
  Ot as Tooltip,
  Pt as TooltipContent,
  Mt as VerticalScroll,
  A as ViewMode,
  U as addToDate,
  hr as barHelper,
  xr as barTask,
  vr as classNameHelper,
  ye as cn,
  Rr as components,
  Dr as containers,
  ot as convertToBar,
  at as convertToBarTask,
  nt as convertToBarTasks,
  st as convertToProject,
  br as custom,
  yr as dateHelper,
  Tr as dateSetup,
  Cr as defaultRoadMapProps,
  $e as ganttDateRange,
  _r as ganttTaskActions,
  Be as getCachedDateTimeFormat,
  lt as getDaysInMonth,
  we as getLocaleMonth,
  Rt as getProgressPoint,
  it as getWeekNumberISO8601,
  He as handleTaskBySVGMouseEvent,
  kr as helpers,
  Et as isBarTask,
  ct as isKeyboardEvent,
  Dt as isMouseEvent,
  mr as otherHelper,
  kt as progressByProgressWidth,
  St as progressWithByParams,
  gr as publicTypes,
  ut as removeHiddenTasks,
  Ve as seedDates,
  oe as startOfDate,
  Er as types
};
//# sourceMappingURL=index.es.js.map
