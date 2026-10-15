import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  C as t,
  D as n,
  E as r,
  F as i,
  I as a,
  L as o,
  M as s,
  N as c,
  O as l,
  P as u,
  R as d,
  S as f,
  T as p,
  a as m,
  b as h,
  c as g,
  d as _,
  f as v,
  g as y,
  h as b,
  i as x,
  j as S,
  k as C,
  l as w,
  m as T,
  o as E,
  p as D,
  s as O,
  u as k,
  v as A,
  w as j,
  x as M,
  y as ee,
  z as N,
} from "./react.DSZvp07T.mjs";
import {
  A as P,
  B as te,
  C as ne,
  D as F,
  E as re,
  F as ie,
  G as I,
  H as ae,
  I as oe,
  J as se,
  K as ce,
  L as le,
  M as ue,
  N as de,
  O as L,
  P as fe,
  Q as pe,
  R,
  S as me,
  T as he,
  U as ge,
  V as _e,
  W as ve,
  X as ye,
  Y as be,
  Z as xe,
  _ as Se,
  a as Ce,
  b as we,
  c as Te,
  d as Ee,
  f as De,
  g as Oe,
  h as ke,
  i as Ae,
  j as je,
  k as Me,
  l as Ne,
  m as Pe,
  n as Fe,
  o as Ie,
  p as Le,
  q as Re,
  r as ze,
  s as Be,
  u as Ve,
  v as He,
  w as Ue,
  x as We,
  y as Ge,
  z as Ke,
} from "./motion.CLguka-h.mjs";
function qe(e) {
  return typeof e == `function`;
}
function Je(e) {
  return typeof e == `boolean`;
}
function z(e) {
  return typeof e == `string`;
}
function B(e) {
  return Number.isFinite(e);
}
function Ye(e) {
  return Array.isArray(e);
}
function V(e) {
  return typeof e == `object` && !!e && !Ye(e);
}
function Xe(e) {
  for (let t in e) return !1;
  return !0;
}
function Ze(e) {
  return e === void 0;
}
function Qe(e) {
  return e === null;
}
function $e(e) {
  return e == null;
}
function et(e) {
  return e instanceof Date && !Number.isNaN(e.getTime());
}
function tt(e) {
  return V(e) && qe(e.return);
}
function nt(e) {
  return V(e) && qe(e.then);
}
function rt(e) {
  return e instanceof Promise;
}
function it(e) {
  return `url('${at(e)}')`;
}
function at(e) {
  return `data:image/svg+xml,${e.replaceAll(`#`, `%23`).replaceAll(`'`, `%27`).replaceAll(`"`, `%22`)}`;
}
function ot(e, t) {
  let n = t instanceof Error ? (t.stack ?? t.message) : t;
  return `${
    e
      ? `${e}
`
      : ``
  }In case the issue persists, report this to the Framer team via https://www.framer.com/contact/${
    n
      ? `:
${n}`
      : `.`
  }`;
}
function st(e, t, n) {
  if (sv.has(e)) return;
  let r = Promise.resolve()
    .then(t)
    .then((t) => (sv.set(e, t), t))
    .catch((t) => {
      throw (sv.delete(e), console.warn(`Failed to preload lazy module from ${n}`, t), t);
    });
  (r.catch($_), sv.set(e, r));
}
function ct(e, t) {
  ev && (cv.set(e, t), lv.has(e) && st(e, t, `registered loader ${e}`));
}
function lt() {
  if (!ev) return;
  let e = document.querySelectorAll(`[rel="modulepreload"][data-framer-lazy]`);
  for (let t of e) {
    let e = t.getAttribute(`data-framer-lazy`),
      n = t.getAttribute(`href`);
    if (!e || !n) continue;
    let r = e.startsWith(uv),
      i = r ? e.slice(uv.length) : e;
    if (!i) continue;
    lv.add(i);
    let a = cv.get(i);
    a ? st(i, a, `registered loader ${i}`) : r && st(i, () => import(n), n);
  }
}
function ut(e) {
  return typeof e == `object` && !!e && !T(e) && fv in e;
}
function dt(e, t) {
  if (t in e) return e[t];
  throw Error(`Module does not contain export '${t}'`);
}
function ft(e, t = `default`, n) {
  n && ct(n, e);
  let r,
    i,
    a,
    o = () => {
      if (i || !n || !sv.has(n)) return;
      let e = sv.get(n);
      rt(e) ? s(() => e) : (i = dt(e, t));
    },
    s = (e) =>
      i
        ? Promise.resolve(i)
        : ((r ||= e()
            .then((e) => {
              let n = dt(e, t);
              return ((i = n), n);
            })
            .catch((e) => {
              a = e;
            })),
          r),
    c = !1,
    l = D(function (t, r) {
      if (
        (h(() => {
          c = !0;
        }, []),
        a)
      )
        throw a;
      if ((o(), n !== void 0 && dv !== void 0 && dv.add(n), !i)) throw s(e);
      return E(i, { ref: r, ...t });
    });
  return (
    (l.preload = () => (o(), s(e))),
    (l.getStatus = () => ({ hasLoaded: i !== void 0, hasRendered: c })),
    l
  );
}
function pt(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function mt(e) {
  return e === null || !(mv in e) ? !1 : typeof e.equals == `function`;
}
function ht(e, t) {
  return e === t || (e !== e && t !== t);
}
function gt(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0;) if (!ht(e[r], t[r])) return !1;
  return !0;
}
function _t(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0;) if (!Ct(e[r], t[r], !0)) return !1;
  return !0;
}
function vt(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!ht(r, t.get(n))) return !1;
  return !0;
}
function yt(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!Ct(r, t.get(n), !0)) return !1;
  return !0;
}
function bt(e, t) {
  if (e.size !== t.size) return !1;
  for (let n of e.keys()) if (!t.has(n)) return !1;
  return !0;
}
function xt(e, t) {
  let n = pv(e);
  if (n.length !== pv(t).length) return !1;
  for (let r of n)
    if (!pt(t, r) || (!(r === `_owner` && pt(e, `$$typeof`) && e.$$typeof) && !ht(e[r], t[r])))
      return !1;
  return !0;
}
function St(e, t) {
  let n = pv(e);
  if (n.length !== pv(t).length) return !1;
  for (let r of n)
    if (!pt(t, r) || (!(r === `_owner` && pt(e, `$$typeof`) && e.$$typeof) && !Ct(e[r], t[r], !0)))
      return !1;
  return !0;
}
function Ct(e, t, n) {
  if (e === t) return !0;
  if (!e || !t) return e !== e && t !== t;
  let r = typeof e;
  if (r !== typeof t || r !== `object`) return !1;
  let i = Array.isArray(e),
    a = Array.isArray(t);
  if (i && a) return n ? _t(e, t) : gt(e, t);
  if (i !== a) return !1;
  let o = e instanceof Map,
    s = t instanceof Map;
  if (o && s) return n ? yt(e, t) : vt(e, t);
  if (o !== s) return !1;
  let c = e instanceof Set,
    l = t instanceof Set;
  if (c && l) return bt(e, t);
  if (c !== l) return !1;
  let u = e instanceof Date,
    d = t instanceof Date;
  if (u && d) return e.getTime() === t.getTime();
  if (u !== d) return !1;
  let f = e instanceof RegExp,
    p = t instanceof RegExp;
  return f && p
    ? e.toString() === t.toString()
    : f === p
      ? mt(e) && mt(t)
        ? e.equals(t)
        : n
          ? St(e, t)
          : xt(e, t)
      : !1;
}
function wt(e, t, n = !0) {
  try {
    return Ct(e, t, n);
  } catch (e) {
    if (e instanceof Error && /stack|recursion/iu.exec(e.message))
      return (
        console.warn(`Warning: isEqual does not handle circular references.`, e.name, e.message),
        !1
      );
    throw e;
  }
}
function Tt(e) {
  return f.useCallback((t) => e[t], [e]);
}
function Et({ api: e, children: t }) {
  return E(hv.Provider, { value: e, children: t });
}
function Dt() {
  return f.useContext(hv);
}
function Ot({ routes: e, children: t }) {
  let n = Tt(e),
    r = s(() => ({ getRoute: n }), [n]);
  return E(hv.Provider, { value: r, children: t });
}
function kt() {
  let e = Dt(),
    t = S(gv),
    n = t?.routeId ?? e.currentRouteId,
    r = t?.routeId ? t.pathVariables : e.currentPathVariables,
    i = t?.routeId ? void 0 : e.currentCanonicalPathVariables,
    a = n ? e.getRoute?.(n) : void 0;
  return s(() => {
    if (!(!n || !a)) return { ...a, id: n, pathVariables: r, canonicalPathVariables: i };
  }, [i, n, r, a]);
}
function At() {
  let e = kt();
  if (e) return `${e.id}-${JSON.stringify(e.pathVariables)}`;
}
function jt(e) {
  let t = kt(),
    n = f.useRef(t);
  wt(n.current, t) || !t || ((n.current = t), e(t));
}
function Mt(e) {
  let t = Dt();
  if (e) return t.getRoute?.(e);
}
function Nt(e, t) {
  if (t && e) return e.elements && t in e.elements ? e.elements[t] : t;
}
function Pt(e) {
  let t = [`pointerdown`, `pointerup`, `keydown`, `keyup`],
    n = (e) => {
      let n = e.type;
      t.includes(n) && performance.mark(`framer-navigation-input`, { detail: { type: n } });
    };
  for (let r = 0; r < t.length; r++) document.addEventListener(t[r], n, { signal: e });
  return () => {
    for (let e = 0; e < t.length; e++) document.removeEventListener(t[e], n);
  };
}
function Ft(e, t) {
  let n = kt(),
    r = Mt(t) ?? n;
  return f.useMemo(() => (r ? Nt(r, e) : e), [e, r]);
}
function H(e, t) {
  if (e) return;
  if (typeof t == `function`)
    try {
      t = t();
    } catch {
      t = `(assert message threw)`;
    }
  typeof t == `string` && t.length > 2048 && (t = t.slice(0, 2048) + `…`);
  let n = Error(t ? `Assertion Error: ` + t : `Assertion Error`);
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function U(e, t) {
  throw t instanceof Error
    ? t
    : Error(
        t === void 0
          ? e
            ? `Unexpected value: ${e}`
            : `Application entered invalid state`
          : String(t)
      );
}
function It(e) {
  let t = Object.getPrototypeOf(e);
  return (
    t === Object.prototype ||
    t === null ||
    Object.getPrototypeOf(t) === null ||
    Object.getOwnPropertyNames(t).sort().join(`\0`) === jv
  );
}
function Lt(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function Rt(e) {
  switch (e) {
    case `"`:
      return `\\"`;
    case `<`:
      return `\\u003C`;
    case `\\`:
      return `\\\\`;
    case `
`:
      return `\\n`;
    case `\r`:
      return `\\r`;
    case `	`:
      return `\\t`;
    case `\b`:
      return `\\b`;
    case `\f`:
      return `\\f`;
    case `\u2028`:
      return `\\u2028`;
    case `\u2029`:
      return `\\u2029`;
    default:
      return e < ` ` ? `\\u${e.charCodeAt(0).toString(16).padStart(4, `0`)}` : ``;
  }
}
function zt(e) {
  let t = ``,
    n = 0,
    r = e.length;
  for (let i = 0; i < r; i += 1) {
    let r = e[i],
      a = Rt(r);
    a && ((t += e.slice(n, i) + a), (n = i + 1));
  }
  return `"${n === 0 ? e : t + e.slice(n)}"`;
}
function Bt(e) {
  return Object.getOwnPropertySymbols(e).filter(
    (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
  );
}
function Vt(e) {
  return Mv.test(e) ? `.` + e : `[` + JSON.stringify(e) + `]`;
}
function Ht(e) {
  return !(!Number.isInteger(e) || e < 0 || e > kv);
}
function Ut(e) {
  return !(!Number.isInteger(e) || e < 0 || e > Ov);
}
function Wt(e) {
  if (e.length === 0 || (e.length > 1 && e.charCodeAt(0) === 48)) return !1;
  for (let t = 0; t < e.length; t++) {
    let n = e.charCodeAt(t);
    if (n < 48 || n > 57) return !1;
  }
  return Ht(+e);
}
function Gt(e) {
  for (var t = e.length - 1; t >= 0 && !Wt(e[t]); t--);
  return t + 1;
}
function Kt(e) {
  let t = Object.keys(e);
  return ((t.length = Gt(t)), t);
}
function qt(e) {
  return new Uint8Array(e).toBase64();
}
function Jt(e) {
  return Uint8Array.fromBase64(e).buffer;
}
function Yt(e) {
  return Buffer.from(e).toString(`base64`);
}
function Xt(e) {
  return Uint8Array.from(Buffer.from(e, `base64`)).buffer;
}
function Zt(e) {
  let t = new Uint8Array(e),
    n = ``,
    r = 32768;
  for (let e = 0; e < t.length; e += r) {
    let i = t.subarray(e, e + r);
    n += String.fromCharCode.apply(null, i);
  }
  return btoa(n);
}
function Qt(e) {
  let t = atob(e),
    n = t.length,
    r = new Uint8Array(n);
  for (let e = 0; e < n; e++) r[e] = t.charCodeAt(e);
  return r.buffer;
}
function $t(e, t) {
  if (!t) return e;
  let n = {};
  for (let r of Object.keys(e)) n[r] = t[r] ?? e[r];
  return n;
}
function en(e, t, n) {
  return tn(JSON.parse(e), t, n);
}
function tn(e, t, n) {
  let r = $t(Bv, n?.operations);
  if (typeof e == `number`) return s(e, !0);
  if (!Array.isArray(e) || e.length === 0) throw Error(`Invalid input`);
  let i = e,
    a = Array(i.length),
    o = null;
  function s(e, n = !1) {
    if (e === xv) return r.fromPrimitive(void 0);
    if (e === Cv) return r.fromPrimitive(NaN);
    if (e === wv) return r.fromPrimitive(1 / 0);
    if (e === Tv) return r.fromPrimitive(-1 / 0);
    if (e === Ev) return r.fromPrimitive(-0);
    if (n || typeof e != `number`) throw Error(`Invalid input`);
    if (e in a) return a[e];
    let c = i[e];
    if (!c || typeof c != `object`) a[e] = r.fromPrimitive(c);
    else if (Array.isArray(c))
      if (typeof c[0] == `string`) {
        let n = c[0],
          l = t && Object.hasOwn(t, n) ? t[n] : void 0;
        if (l) {
          let t = c[1];
          if ((typeof t != `number` && (t = i.push(c[1]) - 1), Object.hasOwn(a, t)))
            return (a[e] = l(a[t]));
          if (((o ??= new Set()), o.has(t))) throw Error(`Invalid circular reference`);
          return (o.add(t), (a[e] = l(s(t))), o.delete(t), a[e]);
        }
        switch (n) {
          case `Date`:
            a[e] = r.fromISOString(c[1]);
            break;
          case `Set`:
            let t = r.createSet();
            a[e] = t;
            for (let e = 1; e < c.length; e += 1) r.addValue(t, s(c[e]));
            break;
          case `Map`:
            let o = r.createMap();
            a[e] = o;
            for (let e = 1; e < c.length; e += 2) r.addEntry(o, s(c[e]), s(c[e + 1]));
            break;
          case `RegExp`:
            a[e] = r.fromRegExpInfo(c[1], c[2]);
            break;
          case `Object`: {
            let t = c[1];
            if (typeof i[t] == `object` && i[t][0] !== `BigInt`) throw Error(`Invalid input`);
            a[e] = r.box(s(t));
            break;
          }
          case `BigInt`:
            a[e] = r.fromPrimitive(BigInt(c[1]));
            break;
          case `null`:
            let l = r.createNullPrototypeObject();
            a[e] = l;
            for (let e = 1; e < c.length; e += 2) {
              if (c[e] === `__proto__`)
                throw Error("Cannot parse an object with a `__proto__` property");
              r.set(l, c[e], s(c[e + 1]));
            }
            break;
          case `Int8Array`:
          case `Uint8Array`:
          case `Uint8ClampedArray`:
          case `Int16Array`:
          case `Uint16Array`:
          case `Float16Array`:
          case `Int32Array`:
          case `Uint32Array`:
          case `Float32Array`:
          case `Float64Array`:
          case `BigInt64Array`:
          case `BigUint64Array`:
          case `DataView`: {
            if (i[c[1]][0] !== `ArrayBuffer`) throw Error(`Invalid data`);
            let t = s(c[1]);
            a[e] = r.fromViewInfo(n, t, c[2], c[3]);
            break;
          }
          case `ArrayBuffer`: {
            let t = c[1];
            if (typeof t != `string`) throw Error(`Invalid ArrayBuffer encoding`);
            a[e] = r.fromArrayBuffer(Iv(t));
            break;
          }
          case `URL`:
          case `URLSearchParams`:
          case `Temporal.Duration`:
          case `Temporal.Instant`:
          case `Temporal.PlainDate`:
          case `Temporal.PlainTime`:
          case `Temporal.PlainDateTime`:
          case `Temporal.PlainMonthDay`:
          case `Temporal.PlainYearMonth`:
          case `Temporal.ZonedDateTime`:
            a[e] = r.fromStringValue(n, c[1]);
            break;
          default:
            throw Error(`Unknown type ${n}`);
        }
      } else if (c[0] === Dv) {
        let t = c[1];
        if (!Ut(t)) throw Error(`Invalid input`);
        let n = r.createSparseArray(t);
        a[e] = n;
        for (let e = 2; e < c.length; e += 2) {
          let i = c[e];
          if (!Ht(i) || i >= t) throw Error(`Invalid input`);
          r.set(n, i, s(c[e + 1]));
        }
      } else {
        let t = r.createArray(c.length);
        a[e] = t;
        for (let e = 0; e < c.length; e += 1) {
          let n = c[e];
          n !== Sv && r.set(t, e, s(n));
        }
      }
    else {
      let t = r.createObject();
      a[e] = t;
      for (let e of Object.keys(c)) {
        if (e === `__proto__`) throw Error("Cannot parse an object with a `__proto__` property");
        r.set(t, e, s(c[e]));
      }
    }
    return a[e];
  }
  return s(0);
}
function nn(e, t, n) {
  let r = rn(!1, e, t, n);
  return typeof r == `string` ? r : `[${r.join(`,`)}]`;
}
function rn(e, t, n, r) {
  let i = $t(zv, r?.operations),
    a = [],
    o = new Map(),
    s = [];
  if (n) for (let e of Object.getOwnPropertyNames(n)) s.push({ key: e, fn: n[e] });
  let c = [],
    l = 0;
  function u(n, r) {
    let d = i.typeOf(n);
    if (d === `undefined`) return xv;
    let f;
    if (d === `number`) {
      if (((f = i.toPrimitive(n)), Number.isNaN(f))) return Cv;
      if (f === 1 / 0) return wv;
      if (f === -1 / 0) return Tv;
      if (f === 0 && 1 / f < 0) return Ev;
    }
    let p = i.identify(n);
    if (o.has(p)) return o.get(p);
    ((r ??= l++), o.set(p, r));
    for (let { key: e, fn: t } of s) {
      let i = t(n);
      if (i) return ((a[r] = `["${e}",${u(i)}]`), r);
    }
    if (d === `function`) throw new Av(`Cannot stringify a function`, c, n, t);
    if (d === `symbol`) throw new Av(`Cannot stringify a Symbol primitive`, c, n, t);
    let m = ``;
    if (d !== `object`) m = an(d === `number` ? f : i.toPrimitive(n));
    else if (i.isThenable(n)) {
      if (!e)
        throw new Av(
          `Cannot stringify a Promise or thenable    use stringifyAsync instead`,
          c,
          n,
          t
        );
      m = i.toPromise(n).then((e) => {
        let t = u(e, r);
        t < 0 && (a[r] = t);
      });
    } else {
      let e = i.tagOf(n);
      switch (e) {
        case `Number`:
        case `String`:
        case `Boolean`:
        case `BigInt`:
          m = `["Object",${u(i.unbox(n))}]`;
          break;
        case `Date`:
          m = `["Date","${i.toISOString(n)}"]`;
          break;
        case `URL`:
          m = `["URL",${zt(i.toStringValue(n))}]`;
          break;
        case `URLSearchParams`:
          m = `["URLSearchParams",${zt(i.toStringValue(n))}]`;
          break;
        case `RegExp`:
          let { source: r, flags: a } = i.regExpInfo(n);
          m = a ? `["RegExp",${zt(r)},"${a}"]` : `["RegExp",${zt(r)}]`;
          break;
        case `Array`: {
          let e = !1,
            t = i.lengthOf(n);
          m = `[`;
          for (let r = 0; r < t; r += 1)
            if ((r > 0 && (m += `,`), i.hasOwn(n, r)))
              (c.push(`[${r}]`), (m += u(i.get(n, r))), c.pop());
            else if (e) m += Sv;
            else {
              let r = i.indicesOf(n),
                a = r.length,
                o = String(t).length;
              if ((t - a) * 3 > 4 + o + a * (o + 1)) {
                m = `[` + Dv + `,` + t;
                for (let e = 0; e < r.length; e++) {
                  let t = r[e];
                  (c.push(`[${t}]`), (m += `,` + t + `,` + u(i.get(n, t))), c.pop());
                }
                break;
              } else ((e = !0), (m += Sv));
            }
          m += `]`;
          break;
        }
        case `Set`:
          m = `["Set"`;
          for (let e of i.valuesOf(n)) m += `,${u(e)}`;
          m += `]`;
          break;
        case `Map`:
          m = `["Map"`;
          for (let [e, t] of i.entriesOf(n)) {
            let n = i.typeOf(e),
              r = n !== `object` && n !== `function` && n !== `symbol`;
            (c.push(`.get(${r ? an(i.toPrimitive(e)) : `...`})`),
              (m += `,${u(e)},${u(t)}`),
              c.pop());
          }
          m += `]`;
          break;
        case `Int8Array`:
        case `Uint8Array`:
        case `Uint8ClampedArray`:
        case `Int16Array`:
        case `Uint16Array`:
        case `Float16Array`:
        case `Int32Array`:
        case `Uint32Array`:
        case `Float32Array`:
        case `Float64Array`:
        case `BigInt64Array`:
        case `BigUint64Array`: {
          let t = i.viewInfo(n);
          ((m = `["` + e + `",` + u(t.buffer)),
            t.byteLength !== t.bufferByteLength && (m += `,${t.byteOffset},${t.length}`),
            (m += `]`));
          break;
        }
        case `DataView`: {
          let t = i.viewInfo(n);
          ((m = `["` + e + `",` + u(t.buffer)),
            t.byteLength !== t.bufferByteLength && (m += `,${t.byteOffset},${t.byteLength}`),
            (m += `]`));
          break;
        }
        case `ArrayBuffer`:
          m = `["ArrayBuffer","${Fv(i.toArrayBuffer(n))}"]`;
          break;
        case `Temporal.Duration`:
        case `Temporal.Instant`:
        case `Temporal.PlainDate`:
        case `Temporal.PlainTime`:
        case `Temporal.PlainDateTime`:
        case `Temporal.PlainMonthDay`:
        case `Temporal.PlainYearMonth`:
        case `Temporal.ZonedDateTime`:
          m = `["${e}",${zt(i.toStringValue(n))}]`;
          break;
        default: {
          let e = i.shapeOf(n);
          if (e.kind === `not-plain`) throw new Av(`Cannot stringify arbitrary non-POJOs`, c, n, t);
          if (e.kind === `symbol-keys`)
            throw new Av(`Cannot stringify POJOs with symbolic keys`, c, n, t);
          if (e.kind === `null-proto`) {
            m = `["null"`;
            for (let r of e.keys) {
              if (r === `__proto__`)
                throw new Av(`Cannot stringify objects with __proto__ keys`, c, n, t);
              (c.push(Vt(r)), (m += `,${zt(r)},${u(i.get(n, r))}`), c.pop());
            }
            m += `]`;
          } else {
            m = `{`;
            let r = !1;
            for (let a of e.keys) {
              if (a === `__proto__`)
                throw new Av(`Cannot stringify objects with __proto__ keys`, c, n, t);
              (r && (m += `,`),
                (r = !0),
                c.push(Vt(a)),
                (m += `${zt(a)}:${u(i.get(n, a))}`),
                c.pop());
            }
            m += `}`;
          }
        }
      }
    }
    return ((a[r] = m), r);
  }
  let d = u(t);
  return d < 0 ? `${d}` : a;
}
function an(e) {
  let t = typeof e;
  return t === `string`
    ? zt(e)
    : e === void 0
      ? xv.toString()
      : e === 0 && 1 / e < 0
        ? Ev.toString()
        : t === `bigint`
          ? `["BigInt","${e}"]`
          : String(e);
}
function on(e, t, n = `lazy`) {
  switch ((Vv.__framer_events?.push([e, t, n]), e)) {
    case `published_site_click`: {
      let { trackingId: e, href: n } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:click`, { detail: { trackingId: e, href: n } })
        );
      break;
    }
    case `published_site_form_submit`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(new CustomEvent(`framer:formsubmit`, { detail: { trackingId: e } }));
      break;
    }
    case `published_site_pageview`: {
      let { framerLocale: e } = t;
      document.dispatchEvent(new CustomEvent(`framer:pageview`, { detail: { framerLocale: e } }));
      break;
    }
    case `published_site_trigger_invoke`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:triggerinvoke`, { detail: { trackingId: e } })
        );
      break;
    }
  }
}
function sn(e) {
  return z(e) && (e === `` || Uv.test(e));
}
function cn() {
  return { [Wv.QueryCache]: new Map(), [Wv.CollectionUtilsCache]: new Map() };
}
function ln() {
  if (!ev) return;
  if (Gv !== void 0) return Gv;
  let e = document.getElementById(`__framer__handoverData`);
  if (e) {
    try {
      Gv = en(e.text) ?? cn();
    } catch (e) {
      ((Gv = cn()), console.warn(`Failed to parse handover data. Falling back to network.`, e));
    }
    return (
      rv(() => {
        (e?.remove(), (e = null));
      }),
      Gv
    );
  }
}
function un(e, t) {
  let n = ln();
  return n ? n[e].has(t) : !1;
}
function dn(e, t) {
  let n = ln();
  if (!n) return;
  let r = n[e];
  if (!r.has(t)) return;
  let i = r.get(t);
  return (r.delete(t), i);
}
function fn(e) {
  return e?.id ?? vv;
}
function pn(e, t, n, r) {
  return `${e}|${t}|${n}|${r}`;
}
function mn(e) {
  return (t) => {
    if (!e) return;
    let n = e[t];
    if (!n) return;
    if (Yv.has(n)) return Yv.get(n);
    let r = new Zv(n, t);
    return (Yv.set(n, r), r);
  };
}
function hn({ children: e, collectionUtils: t }) {
  let n = s(() => ({ get: mn(t) }), [t]);
  return E(Xv.Provider, { value: n, children: e });
}
function gn() {
  return S(Xv);
}
function _n(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function vn() {
  return d === void 0 ? void 0 : d;
}
function yn() {
  let e = vn();
  return e ? Qv.test(e.platform) : !1;
}
function bn() {
  let e = vn();
  return e
    ? $v.test(e.platform)
      ? !0
      : ey.test(e.platform) && e.maxTouchPoints != null && e.maxTouchPoints > 2
    : !1;
}
function xn() {
  return yn() || bn();
}
function Sn() {
  let e = vn();
  return e ? ty.test(e.userAgent) : !1;
}
function Cn() {
  let e = vn();
  return e ? ny.test(e.userAgent) && ry.test(e.vendor) && !Sn() : !1;
}
function wn() {
  let e = vn();
  return e ? iy.test(e.userAgent) && ay.test(e.vendor) : !1;
}
function Tn() {
  let e = vn();
  return e ? oy.test(e.userAgent) : !1;
}
function En() {
  return typeof document == `object`;
}
function Dn() {
  let e = vn();
  if (!e) return -1;
  let t = sy.exec(e.userAgent);
  return t?.[1] ? parseFloat(t[1]) : -1;
}
function On() {
  let e = vn();
  return e ? cy.test(e.userAgent) : !1;
}
function kn() {
  return !1;
}
function An() {
  let e = vn();
  return e && ly.test(e.userAgent) ? `tablet` : e && uy.test(e.userAgent) ? `phone` : `desktop`;
}
function jn() {
  return An() === `desktop`;
}
function Mn(e) {
  return xn() ? e.metaKey : e.ctrlKey;
}
function Nn() {}
async function Pn() {}
function Fn(e) {
  return typeof e == `function` ? e() : e;
}
function In() {
  if (!(typeof scheduler > `u`)) return scheduler;
}
function Ln(e, t) {
  let n = e?.priority,
    r = In();
  return n === `background`
    ? (t?.() ?? _n(1))
    : r?.yield
      ? r.yield(e).catch(Nn)
      : r?.postTask
        ? r.postTask(Nn, e).catch(Nn)
        : t
          ? t()
          : n === `user-blocking`
            ? my
            : _n(0);
}
function Rn(e, t, n) {
  let r = -1 / 0,
    i,
    a = new Set();
  function o() {
    for (let e of a) e();
    a.clear();
  }
  function s() {
    return document.hidden ? (o(), !0) : !1;
  }
  function c() {
    En() && (document.addEventListener(`visibilitychange`, s), N.addEventListener(`pagehide`, o));
  }
  function l(n) {
    return new Promise((r) => {
      (setTimeout(r, hy),
        e(() => {
          Ln(n, t).then(r);
        }));
    });
  }
  function u(e) {
    return En()
      ? new Promise((t) => {
          let n = !0,
            r = () => {
              n && ((n = !1), a.delete(r), t());
            };
          (a.add(r), s() || c(), e.then(r, r));
        })
      : e;
  }
  function d(e, n) {
    let { continueAfter: r, ensureContinueBeforeUnload: i, ...a } = e,
      o = (n ?? r === `paint`) ? l(a) : Ln(a, t);
    return i ? u(o) : o;
  }
  function f(e, t, n) {
    n && e.pendingPaintYieldCount++;
    let a = d(t, n),
      o = t.signal,
      s = !0,
      c = (t) => {
        s &&
          ((s = !1),
          o?.removeEventListener(`abort`, l),
          t && (r = performance.now()),
          n && e.pendingPaintYieldCount--,
          i === e && e.pendingPaintYieldCount === 0 && (i = void 0));
      },
      l = () => c(!1);
    return (
      o?.aborted ? l() : o?.addEventListener(`abort`, l, { once: !0 }),
      a.then(
        () => c(!0),
        () => c(!0)
      ),
      a
    );
  }
  function p(e, t) {
    let a = i;
    if (!a) {
      let n = performance.now(),
        o = t ?? (e.priority === `user-blocking` ? dy : fy),
        s = En() && document.hidden ? py : o;
      if (n - r < s) return;
      ((a = { pendingPaintYieldCount: 0 }), (i = a));
    }
    let o = e.continueAfter === `paint` && (a.pendingPaintYieldCount > 0 || n?.() !== !1);
    return f(a, e, o);
  }
  function m(e) {
    let { batch: n, batchDuration: r, ...i } = e ?? {};
    return !En() && !t ? (n ? void 0 : my) : n ? p(i, r) : d(i);
  }
  return m;
}
function zn(e, t = !1) {
  let n = ``;
  if (N !== void 0)
    if (t) n = N.location.search;
    else {
      let e = N.history?.state?.queryParamBackAnchorSearch;
      n = e === void 0 ? N.location.search : e === `` ? `` : `?${e}`;
    }
  return n ? Bn(n, e) : e;
}
function Bn(e, t) {
  let n = t.indexOf(`#`),
    r = n === -1 ? t : t.substring(0, n),
    i = n === -1 ? `` : t.substring(n),
    a = r.indexOf(`?`),
    o = a === -1 ? r : r.substring(0, a),
    s = a === -1 ? `` : r.substring(a),
    c = new URLSearchParams(s),
    l = new URLSearchParams(e);
  for (let [e, t] of l) c.has(e) || (e !== vy && c.append(e, t));
  let u = c.toString();
  return u === `` ? r + i : o + `?` + u + i;
}
async function Vn(e, t, n, r, i, a, o) {
  let s = e,
    c = !1,
    l = { ...a },
    u = Array.from(s.matchAll(yy)),
    d = await Promise.all(
      u.map(async (e) => {
        let s = e?.[0],
          u = e?.[1];
        if (!s || !u) throw Error(`Failed to replace path variables: unexpected regex match group`);
        let d = a[u];
        if (!d || !z(d)) throw Error(`No slug found for path variable ${u}`);
        let f = o?.get(i);
        if (!f || !t) return d;
        let p = f.getRecordIdBySlug(d, t),
          m = rt(p) ? await p : p;
        if (!m) return d;
        let h = f.getSlugByRecordId(m, n),
          g = rt(h) ? await h : h;
        if (!g) {
          c = !0;
          let e = f.getSlugByRecordId(m, r),
            t = rt(e) ? await e : e;
          return (t && (l[u] = t), t ?? d);
        }
        return ((l[u] = g), g);
      })
    ),
    f = 0,
    p = ``,
    m = !1;
  for (let e = 0; e < u.length; e++) {
    let t = u[e],
      n = d[e];
    !t ||
      !n ||
      ((p += s.substring(f, t.index)),
      (f = (t.index ?? 0) + (t[0]?.length ?? 0)),
      (p += d[e]),
      (m = !0));
  }
  return (
    m && ((p += s.substring(f)), (s = p)),
    { path: s, pathVariables: l, isMissingInLocale: c }
  );
}
function Hn(e, t) {
  return t ? `/${t}${e}` : e;
}
async function Un({
  currentLocale: e,
  nextLocale: t,
  defaultLocale: n,
  route: r,
  pathVariables: i,
  collectionUtils: a,
  preserveQueryParams: o,
}) {
  let { path: s, pathLocalized: c } = r,
    l = c?.[t.id] ?? s,
    u = { path: l, pathVariables: i, isMissingInLocale: !1 };
  if (!l) return u;
  if (i && r.collectionId)
    try {
      u = await Vn(l, e, t, n, r.collectionId, i, a);
    } catch {}
  return (
    u.path !== void 0 && (u.path = Hn(u.path, t.slug)),
    o && u.path && (u.path = zn(u.path, !0)),
    u
  );
}
async function Wn({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r }) {
  let i = n?.collectionId;
  if (!i) return;
  let a = t?.get(i);
  if (!a || !r || !n?.path) return;
  let o = Array.from(n.path.matchAll(yy)).at(-1)?.[1];
  if (!o) return;
  let s = r[o];
  if (z(s)) return a.getRecordIdBySlug(s, e ?? void 0);
}
async function Gn({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r }) {
  if (!e || e.id === vv) return;
  let i = n?.collectionId;
  if (!i) return;
  let a = t?.get(i);
  if (!a?.getContentLocaleIdByRecordId) return;
  let o = await Wn({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r });
  if (o) return a.getContentLocaleIdByRecordId(o, e);
}
async function Kn({
  activeLocale: e,
  defaultLocale: t,
  collectionUtilsCache: n,
  locales: r,
  pathVariables: i,
  route: a,
  routeId: o,
}) {
  if (!e || !a) return {};
  let s =
      (await Gn({ activeLocale: e, collectionUtils: n, currentRoute: a, pathVariables: i })) ??
      a.canonicalLocaleIdByLocaleId?.[e.id],
    c = s ? r.find(({ id: e }) => e === s) : void 0;
  if (!c || c.id === e.id) return { contentLocaleId: s };
  let { pathVariables: l } = await Un({
    currentLocale: e,
    nextLocale: c,
    defaultLocale: t,
    route: a,
    routeId: o,
    pathVariables: i,
    collectionUtils: n,
    preserveQueryParams: !1,
  });
  return wt(l ?? {}, i ?? {}, !1)
    ? { contentLocaleId: s }
    : { contentLocaleId: s, canonicalPathVariables: l };
}
function qn() {
  return f.useContext(Sy);
}
function Jn() {
  let e = gn(),
    { getRoute: t } = Dt(),
    { activeLocale: n, locales: r } = qn();
  return C(
    (i, a, o) => {
      if (!i || !t) return;
      let s = t(i),
        { pathVariables: c } = a;
      return Xn(
        s,
        {
          routeId: i,
          pathVariables: c,
          locale: a.locale ?? n ?? void 0,
          locales: r,
          collectionUtils: e,
        },
        o
      );
    },
    [t, e, n, r]
  );
}
function Yn(e, t = !0) {
  let n = Jn();
  h(() => {
    if (!(!t || !wy)) for (let t of e) n(t, {});
  }, [e, t, n]);
}
async function Xn(e, t, n = {}) {
  if (!wy || !e) return;
  let { priority: r = `background`, yieldBeforePreload: i = !0, shouldLoadRouteData: a = !0 } = n,
    o = e.page;
  if (!o || !ut(o)) return;
  let s = a && !!t;
  if (!(o.getStatus().hasLoaded && !s)) {
    i && (await _y({ priority: r }));
    try {
      let n = await o.preload();
      s && t && n && (await Zn(n, e, t, r));
    } catch {}
  }
}
async function Zn(e, t, n, r) {
  let i = e.loader;
  if (!i?.load) return;
  let { canonicalPathVariables: a } = await Kn({
      activeLocale: n.locale ?? null,
      defaultLocale: n.locales?.find((e) => e.id === vv),
      collectionUtilsCache: n.collectionUtils,
      locales: n.locales ?? [],
      pathVariables: n.pathVariables,
      route: t,
      routeId: n.routeId,
    }),
    o = {
      signal: n.signal ?? new AbortController().signal,
      pathVariables: n.pathVariables ?? {},
      canonicalPathVariables: a,
      routeId: n.routeId,
      locale: n.locale,
      priority: r,
      collectionUtils: n.collectionUtils,
    };
  try {
    await i.load({}, o);
  } catch {}
}
function Qn(e, t) {
  return e.replace(yy, (e, n) => {
    let r = t[n];
    return typeof r != `string` || r.length === 0 ? e : encodeURIComponent(r);
  });
}
function $n() {
  if (Ty) return;
  Ty = !0;
  let e = !1,
    t = () => {
      e = !0;
    };
  (N.addEventListener(`popstate`, t, { once: !0 }),
    queueMicrotask(() => {
      if ((N.removeEventListener(`popstate`, t), e)) {
        let e = `Popstate called synchronously during pushState(). Please report this to the Framer team.`;
        (console.error(e), on(`published_site_load_recoverable_error`, { message: e }));
      }
    }));
}
function er({ children: e, value: t }) {
  return E(Ey.Provider, { value: t, children: e });
}
function tr() {
  return f.useContext(Ey);
}
function nr(e, t, { global: n, routes: r }) {
  return r[e]?.[t] || n;
}
function rr(e) {
  let t = Dy,
    n = e.next(0),
    r = [n.value];
  for (; !n.done && t < Oy;) ((n = e.next(t)), r.push(n.value), (t += Dy));
  return (
    r.length === 1 && r.push(n.value),
    { easing: `linear(${r.join(`,`)})`, duration: t - Dy }
  );
}
function ir(e) {
  return [parseFloat(e), e.endsWith(`px`) ? `px` : `%`];
}
function ar(e) {
  let { innerWidth: t, innerHeight: n } = N,
    [r, i] = ir(e.x),
    [a, o] = ir(e.y);
  return { x: i === `px` ? r : (r / 100) * t, y: o === `px` ? a : (a / 100) * n };
}
function or(e) {
  let [t, n] = ir(e);
  return n === `px` ? `calc(100% - ${t}px)` : `${100 - t}%`;
}
function sr(e) {
  let { x: t, y: n } = ar(e);
  return Math.hypot(Math.max(t, N.innerWidth - t), Math.max(n, N.innerHeight - n));
}
function cr(e, t, n, r) {
  let i = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
  return (e.mask && (i += r?.makeKeyframe?.(e.mask, t, n) || ``), i);
}
function lr(e) {
  return e ? jy[e] : void 0;
}
function ur(e, { transition: t, ...n }) {
  let r = `view-transition-` + e,
    i = { duration: `0s`, easing: `linear` };
  if (t.type === `tween`)
    ((i.duration = t.duration + `s`), (i.easing = `cubic-bezier(${t.ease.join(`,`)})`));
  else if (dr(t)) {
    let { easing: e, duration: n } = rr(
      fe({ keyframes: [0, 1], ...fr(t), restDelta: 0.001, restSpeed: 1e-4 })
    );
    ((i.duration = n + `ms`), (i.easing = e));
  }
  let a = lr(n?.mask?.type),
    o = cr(n, `start`, e, a),
    s = cr({ ...My, mask: n.mask }, `end`, e, a);
  return (
    e === `exit` && ([o, s] = [s, o]),
    `
        ${n.mask && a?.makePropertyRules ? a.makePropertyRules(n.mask) : ``}

        @keyframes ${r} {
            0% {
                ${o}
            }

            100% {
                ${s}
            }
        }

        ::view-transition-${e === `enter` ? `new` : `old`}(root) {
            animation-name: ${r};
            animation-duration: ${i.duration};
            animation-delay: ${t.delay}s;
            animation-timing-function: ${i.easing};
            animation-fill-mode: both;
            ${n.mask && a?.makeStyles ? a.makeStyles(n.mask, e) : ``}
        }
    `
  );
}
function dr(e) {
  return e.type === `spring`;
}
function fr(e) {
  return e.durationBasedSpring
    ? { duration: e.duration * 1e3, bounce: e.bounce }
    : { stiffness: e.stiffness, damping: e.damping, mass: e.mass };
}
function pr({ exit: e = Py, enter: t }) {
  let n = document.createElement(`style`);
  n.id = Ny;
  let r = `
        @media (prefers-reduced-motion) {
            ::view-transition-group(*),
            ::view-transition-old(*),
            ::view-transition-new(*) {
                animation: none !important;
            }
        }
    `;
  ((e.mask || t.mask || e.opacity || t.opacity || e.transition.delay || t.transition.delay) &&
    (r += `
            ::view-transition-old(*),
            ::view-transition-new(*) {
                mix-blend-mode: normal;
            }
        `),
    (r += `
        ::view-transition-old(*),
        ::view-transition-new(*) {
            backface-visibility: hidden;
        }
    `),
    (r += ur(`exit`, e)),
    (r += ur(`enter`, t)),
    (n.textContent = r),
    document.head.appendChild(n));
}
function mr() {
  rv(() => {
    Ge.render(() => {
      performance.mark(`framer-vt-remove`);
      let e = document.getElementById(Ny);
      e && document.head.removeChild(e);
    });
  });
}
function hr() {
  return !!document.startViewTransition;
}
function gr(e) {
  return new Promise((t) => {
    Ge.render(() => {
      (performance.mark(`framer-vt-style`), pr(e), t());
    });
  });
}
async function _r(e, t, n) {
  if (!hr()) {
    e();
    return;
  }
  if ((await gr(t), n?.aborted)) return;
  performance.mark(`framer-vt`);
  let r = document.startViewTransition(async () => {
    (performance.mark(`framer-vt-freeze`),
      !n?.aborted && (n?.addEventListener(`abort`, () => r.skipTransition()), await e()));
  });
  return (
    r.updateCallbackDone
      .then(() => {
        performance.mark(`framer-vt-unfreeze`);
      })
      .catch(Fy),
    Promise.all([r.ready, r.finished])
      .then(() => {
        (performance.mark(`framer-vt-finished`), mr());
      })
      .catch(Fy),
    r
  );
}
function vr() {
  let e = tr(),
    t = M(void 0);
  return (
    h(() => {
      t.current &&= (t.current(), void 0);
    }),
    C(
      (n, r, i, a) => {
        let o = nr(n, r, e);
        if (o) {
          let e = new Promise((e) => {
            t.current = e;
          });
          return _r(
            async () => {
              (i(), await e);
            },
            o,
            a
          );
        }
        i();
      },
      [e]
    )
  );
}
function yr(e, t) {
  rv(() => {
    let n = document.querySelector(`link[rel='canonical']`);
    if (!n) return;
    let r = new URL(e, t);
    ((r.search = ``), n.setAttribute(`href`, r.toString()));
  });
}
function br(e, t) {
  rv(() => {
    let n = document.querySelector(`link[rel='canonical'][data-framer-generated-canonical]`);
    if (
      !e ||
      document.querySelector(`link[rel='canonical']:not([data-framer-generated-canonical])`)
    ) {
      n?.remove();
      return;
    }
    let r = new URL(e, t ?? document.baseURI);
    ((r.search = ``), (r.hash = ``));
    let i = n ?? document.createElement(`link`);
    (i.setAttribute(`rel`, `canonical`),
      i.setAttribute(`data-framer-generated-canonical`, ``),
      i.setAttribute(`href`, r.toString()),
      document.head.append(i));
  });
}
function xr(e) {
  rv(() => {
    let t = Array.from(
      document.querySelectorAll(`link[rel='alternate'][hreflang][data-framer-generated-hreflang]`)
    );
    if (document.querySelector(`link[rel='canonical']:not([data-framer-generated-canonical])`)) {
      for (let e of t) e.remove();
      return;
    }
    let n = new Map();
    for (let e of t) {
      let t = e.getAttribute(`hreflang`);
      t && n.set(t, e);
    }
    let r = new Set();
    for (let { href: t, hrefLang: i } of e) {
      r.add(i);
      let e = n.get(i) ?? document.createElement(`link`);
      (e.setAttribute(`rel`, `alternate`),
        e.setAttribute(`data-framer-generated-hreflang`, ``),
        e.setAttribute(`href`, t),
        e.setAttribute(`hreflang`, i),
        document.head.append(e));
    }
    for (let e of t) {
      let t = e.getAttribute(`hreflang`);
      (!t || !r.has(t)) && e.remove();
    }
  });
}
function Sr(e, t, r, i = n) {
  i(() => {
    let t = async (e) => (await _y({ ...r, continueAfter: `paint` }), e()),
      n = t(e);
    return () => {
      (async () => {
        let e = await n;
        e && t(e);
      })();
    };
  }, t);
}
function Cr(e) {
  let t = M(new Set());
  return (
    Sr(
      () => {
        for (let e of t.current) e();
        t.current.clear();
      },
      void 0,
      { priority: `user-blocking` }
    ),
    C(
      (n) => {
        let r,
          i = new Promise((e) => {
            ((r = e), t.current.add(e));
          });
        if (!e) return { promise: i, measureDetail: n, ignore: null };
        let a = `${e}-start`,
          o = `${e}-end`,
          s = !1;
        return (
          performance.mark(a),
          i
            .finally(() => {
              s || (performance.mark(o), performance.measure(e, { start: a, end: o, detail: n }));
            })
            .catch((e) => {
              console.error(e);
            }),
          {
            promise: i,
            measureDetail: n,
            ignore: () => {
              ((s = !0), r && (t.current.delete(r), r()));
            },
          }
        );
      },
      [e]
    )
  );
}
function wr(e) {
  return V(e) && `routeId` in e;
}
function Tr(e = N.history.state) {
  return wr(e) ? e : void 0;
}
function Er(e) {
  return e?.entryId;
}
function Dr(e) {
  Ry = e;
}
function Or() {
  return Ry;
}
function kr() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}
function Ar(e, t) {
  return jr(e, Er(e) ?? Er(t));
}
function jr(e, t = kr()) {
  return { ...e, entryId: t };
}
function Mr(e, t) {
  (performance.mark(`framer-history-replace`), Dr(Ar(e, Tr())), t && yr(t, N.location.href));
  let n =
    !t || t === N.location.href
      ? N.History.prototype.replaceState.bind(N.history)
      : N.history.replaceState.bind(N.history);
  try {
    n(Ry, ``, t);
  } catch {}
}
function Nr(e) {
  (performance.mark(`framer-history-replace`),
    Dr(jr(e)),
    History.prototype.replaceState.call(N.history, Ry, ``, void 0));
}
function Pr(e, t) {
  (performance.mark(`framer-history-push`), Dr(jr(e)), yr(t, N.location.href), $n());
  try {
    N.history.pushState(Ry, ``, t);
  } catch {}
}
function Fr({
  disabled: e,
  routeId: t,
  initialPathVariables: r,
  initialLocaleId: i,
  initialContentLocaleId: a,
  initialCanonicalPathVariables: o,
}) {
  n(() => {
    if (e) return;
    performance.mark(`framer-history-set-initial-state`);
    let n = N.location.hash ? N.location.hash.slice(1) : void 0;
    Mr({
      ...Tr(),
      routeId: t,
      hash: n,
      pathVariables: r,
      localeId: i,
      contentLocaleId: a,
      canonicalPathVariables: o,
    });
  }, []);
}
function Ir(e, t, n) {
  let r = vr(),
    i = Cr(`framer-route-change`),
    { onHistoryTraversal: a, usesCustomScrollRestoration: o } = e,
    s = o ? `manual` : `after-transition`,
    c = M(void 0),
    l = C(() => {
      (c.current?.resolve(), (c.current = void 0));
    }, []),
    u = C(
      async ({ state: e }) => {
        if (!wr(e)) return;
        let o = i({ popstate: !0 }),
          c = Pt();
        (o.promise.finally(c), Er(Or()) !== (Er(e) ?? Er(Tr())) && a(), Dr(e));
        let {
            routeId: u,
            hash: d,
            pathVariables: f,
            localeId: p,
            contentLocaleId: m,
            canonicalPathVariables: h,
          } = e,
          g = z(d) ? d : N.location.hash ? N.location.hash.slice(1) : void 0,
          _ = !1,
          v = () => {
            _ ||=
              (n(
                u,
                z(p) ? p : void 0,
                g,
                N.location.pathname + N.location.search + N.location.hash,
                V(f) ? f : void 0,
                m,
                h,
                !0,
                o,
                !1
              ),
              !0);
          },
          y = s === `after-transition`;
        (await Promise.resolve(r(t.current, u, v))
          .then((e) => e?.updateCallbackDone)
          .catch(v)
          .finally(() => {
            y || l();
          }),
          await o.promise,
          y && l(),
          await N.navigation?.transition?.finished.catch($_),
          Ly(),
          yr(N.location.href));
      },
      [t, i, a, l, n, r, s]
    ),
    d = C(
      (e) => {
        if (e.navigationType !== `traverse` || !e.canIntercept) return;
        let t = e.destination?.getState();
        wr(t) &&
          e.intercept({
            async handler() {
              (await new Promise((e, t) => {
                c.current = { resolve: e, reject: t };
              }),
                (c.current = void 0));
            },
            scroll: s,
          });
      },
      [s]
    );
  h(
    () => (
      N.addEventListener(`popstate`, u),
      zy && N.navigation.addEventListener(`navigate`, d),
      () => {
        (N.removeEventListener(`popstate`, u),
          zy && N.navigation.removeEventListener(`navigate`, d));
      }
    ),
    [u, d]
  );
}
async function Lr(e, t, n, r) {
  if (!e.path || !t) return !1;
  let i = r + Hn(Qn(e.path, t), n.slug);
  return (await fetch(i, { method: `HEAD`, redirect: `manual` })).type === `opaqueredirect`
    ? ((N.location.href = N.location.origin + i), !0)
    : !1;
}
function Rr() {
  let e = gn();
  return C((t) => zr({ ...t, collectionUtils: e }), [e]);
}
async function zr({ sitePrefix: e, ...t }) {
  let n = await Un(t);
  if (n) {
    try {
      localStorage.preferredLocale = t.nextLocale.code;
    } catch {}
    try {
      if (!z(n.path)) throw Error(`Expected result.path to be a string`);
      if (n.isMissingInLocale && (await Lr(t.route, n.pathVariables, t.nextLocale, e))) return;
    } catch {}
    return n;
  }
}
function Br(e) {
  let t = M(Promise.resolve()),
    n = M(),
    r = C(
      (r) => {
        if (r.navigationType === `traverse` || !r.canIntercept) return;
        let i = n.current;
        (i?.signal.addEventListener(`abort`, () => {
          i.abort(`user aborted`);
        }),
          r.intercept({ handler: () => t.current, scroll: e ? `manual` : `after-transition` }));
      },
      [e]
    );
  return C(
    (e, i, a) => {
      if (!zy) {
        a?.();
        return;
      }
      ((t.current = e),
        (n.current = i),
        N.navigation.addEventListener(`navigate`, r),
        a?.(),
        e.finally(() => {
          t.current === e &&
            ((n.current = void 0), N.navigation.removeEventListener(`navigate`, r));
        }));
    },
    [r]
  );
}
function Vr(e) {
  let t = 0,
    n = e.length;
  for (; t < n && e[t] === `-`;) t++;
  for (; n > t && e[n - 1] === `-`;) n--;
  return e.slice(t, n);
}
function Hr(e) {
  return Vr(e.trim().toLowerCase().replace(By, `-`));
}
function Ur({ children: e, value: t }) {
  return E(Hy.Provider, { value: t, children: e });
}
function Wr() {
  return S(Hy);
}
function Gr(e, t) {
  let n = A(() => ({ inputs: t, result: e() }))[0],
    r = M(!0),
    i = M(n),
    a =
      r.current || (t && i.current.inputs && wt(t, i.current.inputs, !1))
        ? i.current
        : { inputs: t, result: e() };
  return (
    h(() => {
      ((r.current = !1), (i.current = a));
    }, [a]),
    a.result
  );
}
function Kr(e, t) {
  return Gr(() => e, t);
}
function qr() {
  return N.location.search;
}
function Jr() {
  return ``;
}
function Yr(e) {
  return (
    Wy.add(e),
    N.addEventListener(`popstate`, e),
    () => {
      (Wy.delete(e), N.removeEventListener(`popstate`, e));
    }
  );
}
function Xr() {
  for (let e of Wy) e();
}
function Zr({ children: e, routerRenderKey: t, isNavigationCommitPending: n }) {
  let r = Wr() === `preview`,
    [i, a] = A(``),
    o = M(t);
  Uy(() => {
    o.current = t;
  }, [t]);
  let s = l(Yr, qr, Jr),
    c = ee(s),
    d = t !== ee(t),
    f = r ? i : d ? s : c,
    p = C(
      async (e) => {
        if (r) {
          u(() => {
            a((t) => e(new URLSearchParams(t)).toString());
          });
          return;
        }
        let i = n(),
          s = t;
        if ((await _y({ continueAfter: `paint` }), i || n() || o.current !== s)) return;
        let c = Tr();
        if (!c) return;
        let l = new URL(N.location.href),
          d = e(l.searchParams).toString();
        l.search = d;
        let f = c.queryParamBackAnchorSearch,
          p = N.location.search.slice(1),
          m = f === void 0 && d !== p,
          h = f !== void 0 && d === f,
          g = { ...c, queryParamBackAnchorSearch: h ? void 0 : (f ?? (m ? p : void 0)) },
          _ = l.toString();
        (m || h ? Pr(g, _) : Mr(g, _), Xr());
      },
      [n, r, t]
    ),
    m = Gr(() => ({ urlSearchParams: new URLSearchParams(f), replaceSearchParams: p }), [f, p]);
  return E(Gy.Provider, { value: m, children: e });
}
function Qr(e, t) {
  if (!e.startsWith(`/`) || !t.startsWith(`/`))
    throw Error(`from/to paths are expected to be absolute`);
  let [n] = $r(e),
    [r, i] = $r(t),
    a = ei(n, r);
  return (
    a === `` && (a = `.`),
    !a.startsWith(`.`) && !a.startsWith(`/`) && (a = `./` + a),
    a + `/` + i
  );
}
function $r(e) {
  let t = e.lastIndexOf(`/`);
  return [e.substring(0, t + 1), e.substring(t + 1)];
}
function ei(e, t) {
  if (e === t || ((e = `/` + ti(e)), (t = `/` + ti(t)), e === t)) return ``;
  let n = e.length,
    r = n - 1,
    i = t.length - 1,
    a = r < i ? r : i,
    o = -1,
    s = 0;
  for (; s < a; s++) {
    let n = Jy(e, 1 + s);
    if (n !== Jy(t, 1 + s)) break;
    n === qy && (o = s);
  }
  if (s === a)
    if (i > a) {
      if (Jy(t, 1 + s) === qy) return Xy(t, 1 + s + 1);
      if (s === 0) return Xy(t, 1 + s);
    } else r > a && (Jy(e, 1 + s) === qy ? (o = s) : s === 0 && (o = 0));
  let c = ``;
  for (s = 1 + o + 1; s <= n; ++s)
    (s === n || Jy(e, s) === qy) && (c += c.length === 0 ? `..` : `/..`);
  return `${c}${Xy(t, 1 + o)}`;
}
function ti(e) {
  let t = ``,
    n = 0,
    r = -1,
    i = 0,
    a = 0;
  for (let o = 0; o <= e.length; ++o) {
    if (o < e.length) a = Jy(e, o);
    else if ($y(a)) break;
    else a = qy;
    if ($y(a)) {
      if (!(r === o - 1 || i === 1))
        if (i === 2) {
          if (t.length < 2 || n !== 2 || Jy(t, t.length - 1) !== Ky || Jy(t, t.length - 2) !== Ky) {
            if (t.length > 2) {
              let e = Yy(t, Qy);
              (e === -1 ? ((t = ``), (n = 0)) : ((t = Xy(t, 0, e)), (n = t.length - 1 - Yy(t, Qy))),
                (r = o),
                (i = 0));
              continue;
            } else if (t.length !== 0) {
              ((t = ``), (n = 0), (r = o), (i = 0));
              continue;
            }
          }
          Zy && ((t += t.length > 0 ? `${Qy}..` : `..`), (n = 2));
        } else
          (t.length > 0 ? (t += `${Qy}${Xy(e, r + 1, o)}`) : (t = Xy(e, r + 1, o)),
            (n = o - r - 1));
      ((r = o), (i = 0));
    } else a === Ky && i !== -1 ? ++i : (i = -1);
  }
  return t;
}
function ni(e) {
  if (!e) return ``;
  let t;
  try {
    t = new URL(e);
  } catch {
    return ``;
  }
  return t.pathname === `/` || N.location.origin !== t.origin
    ? ``
    : t.pathname.endsWith(`/`)
      ? t.pathname.slice(0, -1)
      : t.pathname;
}
function ri(e, t) {
  let n = e.replace(yy, (e, n) => t[n] ?? e);
  if (!n.includes(`:`)) return n;
}
function ii(e, t, n) {
  let r = Object.assign({}, t.elements, n);
  if (e.startsWith(`:`)) {
    let n = e.slice(1),
      i = t.elementPatterns?.[n];
    if (i) return ri(i, r);
  }
  if (e.includes(`:`)) return ri(e, r);
  let i = t.elements?.[e];
  return i ? ri(i, r) : e;
}
function ai(
  e,
  {
    currentRoutePath: t,
    currentRoutePathLocalized: n,
    currentPathVariables: r,
    hash: i,
    pathVariables: a,
    hashVariables: o,
    relative: s = !0,
    preserveQueryParams: c,
    onlyHash: l = !1,
    siteCanonicalURL: u,
    localeId: d,
    localeSlug: f,
  }
) {
  let p;
  if ((i && e && (p = ii(i, e, o)), l)) return p ?? ``;
  let m = t ?? `/`;
  (n && d && (m = n[d] ?? m), r && (m = m.replace(yy, (e, t) => String(r[t] || e))));
  let h = (d ? e?.pathLocalized?.[d] : void 0) ?? e?.path ?? `/`;
  a && (h = h.replace(yy, (e, t) => String(a[t] || e)));
  let g = !!(m === h && p),
    _ = !g && a !== void 0 && t !== void 0 && e?.path !== void 0 && t === e.path && m !== h;
  if (s)
    if (eb.has(m) && N !== void 0) {
      let e = ni(u);
      h = Qr(N.location.pathname, e + h);
    } else h = Qr(m, h);
  else h = Hn(h, f);
  let v = g || _;
  return ((c || v) && (h = zn(h, v)), p && (h = `${h}#${p}`), h);
}
function oi(e, t) {
  let n = document.currentScript?.parentElement;
  n &&
    n.addEventListener(`submit`, (r) => {
      n.hasAttribute(e) || (r.preventDefault(), n.setAttribute(t, ``));
    });
}
function si() {
  return `(${oi.toString()})("${rb}","${ib}")`;
}
function ci(e, t) {
  h(() => {
    let n = e.current;
    if (!n || (n.setAttribute(rb, ``), !n.hasAttribute(ib))) return;
    n.removeAttribute(ib);
    let r = !1;
    return (
      queueMicrotask(() => {
        r || (n.reportValidity() && t(n));
      }),
      () => {
        r = !0;
      }
    );
  }, []);
}
function li() {
  let e = new Event(`change`, { bubbles: !0 });
  return ((e[tb] = 1), e);
}
function ui() {
  let e = new MouseEvent(`click`, { bubbles: !0 });
  return ((e[tb] = 1), e);
}
function di(e) {
  return e instanceof HTMLInputElement && (e.type === `checkbox` || e.type === `radio`)
    ? `checked`
    : `value`;
}
function fi(e) {
  return tb in e && e[tb] === 1;
}
function pi(e) {
  return nb in e.nativeEvent && e.nativeEvent[nb] === 1;
}
function mi(e) {
  let t = M(!1),
    n = M(null),
    r = l(iv, ov, ab);
  return (
    h(() => {
      if (!r) return;
      let i = n.current;
      if (t.current || !i) return;
      t.current = !0;
      let a = di(i),
        o = i[a];
      if (o === e) return;
      if (i.type === `radio` && o === !0) {
        ((i.checked = !1), i.dispatchEvent(ui()));
        return;
      }
      if (a === `checked`) {
        let e = ui();
        ((e[nb] = 1), i.dispatchEvent(e), i.dispatchEvent(ui()));
        return;
      }
      if (i.nodeName === `SELECT`) {
        i.dispatchEvent(li());
        return;
      }
      let s = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(i), a)?.set;
      if (!s) return;
      s.call(i, ``);
      let c = li();
      ((c[nb] = 1),
        i.dispatchEvent(c),
        queueMicrotask(() => {
          (s.call(i, o), i.dispatchEvent(li()));
        }));
    }, [r]),
    n
  );
}
function hi() {
  if (!ob) return;
  ((cb = !0), performance.mark(`framer-react-event-handling-start`));
  let e = { capture: !0 },
    t = document.body;
  ob.forEach((n) => t.addEventListener(n, sb, e));
}
function gi() {
  return (
    h(() => {
      if (!cb || !ob) return;
      let e = { capture: !0 },
        t = document.body;
      (ob.forEach((n) => t.removeEventListener(n, sb, e)),
        (ob = void 0),
        performance.mark(`framer-react-event-handling-end`));
    }, []),
    null
  );
}
function _i(e) {
  let t = !1;
  return function (...n) {
    if (!t) return ((t = !0), e.apply(this, n));
  };
}
function vi(e, t, n) {
  try {
    performance.measure(e, t, n);
  } catch (t) {
    console.warn(`Could not measure ${e}`, t);
  }
}
function yi() {
  ((ub = new lb()), ub.render.markStart());
}
function bi() {
  (c(() => {
    ub?.useInsertionEffects.markRouterStart();
  }, []),
    n(() => {
      ub?.useLayoutEffects.markRouterStart();
    }, []),
    h(() => {
      ub?.useEffects.markRouterStart();
    }, []));
}
function xi() {
  (c(() => {
    (ub?.render.markEnd(), ub?.useInsertionEffects.markStart());
  }, []),
    n(() => {
      if ((ub?.useLayoutEffects.markStart(), document.visibilityState !== `visible`)) {
        db = !0;
        return;
      }
      Ge.read(() => {
        (ub?.browserRendering.requestAnimationFrame.markStart(),
          ub?.unattributedHydrationOverhead.measure());
      });
    }, []),
    h(() => {
      (ub?.useEffects.markStart(),
        ub?.browserRendering.hasStarted ||
          (ub?.mutationEffects.measure(), ub?.useEffects.markAreSynchronous()));
    }, []));
}
function Si() {
  (c(() => {
    ub?.useInsertionEffects.markEnd();
  }, []),
    n(() => {
      (ub?.useLayoutEffects.markEnd(),
        !(db || document.visibilityState !== `visible`) &&
          Ge.read(() => {
            (ub?.browserRendering.requestAnimationFrame.markEnd(),
              _y().then(() => {
                ub?.browserRendering.layoutStylePaint.markEnd();
              }));
          }));
    }, []),
    h(() => {
      ub?.useEffects.markEnd();
    }, []));
}
function Ci() {
  return (xi(), null);
}
function wi() {
  return (Si(), null);
}
function Ti(e, t) {
  let n = { style: t, "data-framer-root": `` };
  return f.isValidElement(e) ? f.cloneElement(e, n) : E(e, { ...n });
}
function Ei() {
  return hb;
}
function Di(e) {
  if (gb?.lastRoutes !== e) {
    let t = {},
      n = {},
      r = [],
      i = {},
      a = e;
    for (let r in e) {
      let i = e[r];
      H(i, `route must be defined`);
      let { path: a, pathLocalized: o } = i;
      if (a && ((t[a] = { path: a, depth: Ai(a), routeId: r }), o))
        for (let e in o) {
          let t = o[e];
          H(t, `localizedPath must be defined`);
          let i = Ai(t),
            a = (n[e] ||= {});
          a[t] = { path: t, depth: i, routeId: r };
        }
    }
    ((r = Object.values(t)), r.sort(({ depth: e }, { depth: t }) => t - e));
    for (let e in n) {
      let t = n[e];
      if (!t) continue;
      let r = Object.values(t);
      (r.sort(({ depth: e }, { depth: t }) => t - e), (i[e] = r));
    }
    gb = { pathRoutes: t, pathRoutesLocalized: n, paths: r, pathsLocalized: i, lastRoutes: a };
  }
  return {
    pathRoutes: gb.pathRoutes,
    paths: gb.paths,
    pathRoutesLocalized: gb.pathRoutesLocalized,
    pathsLocalized: gb.pathsLocalized,
  };
}
function Oi(e, t, n = !0, r = Ei()) {
  return ki(e, t, r, n);
}
function ki(e, t, n, r = !0) {
  let { pathRoutes: i, paths: a, pathRoutesLocalized: o, pathsLocalized: s } = Di(e),
    c,
    l,
    u = !1;
  if (n.length > 0) {
    let e = t.split(`/`).find(Boolean);
    if (
      (e &&
        ((c = n.find(({ slug: t }) => t === e)),
        c && ((l = c.id), (t = t.substring(c.slug.length + 1)), (u = !0))),
      !l)
    ) {
      let e = n.find(({ slug: e }) => e === ``);
      e && (l = e.id);
    }
  }
  if (l && u) {
    let e = o[l],
      n = e ? e[t] : void 0;
    if (n) {
      let e = ji(t, n.path);
      if (e.isMatch) return { routeId: n.routeId, localeId: l, pathVariables: e.pathVariables };
    }
  }
  let d = i[t];
  if (d) {
    let e = ji(t, d.path);
    if (e.isMatch) return { routeId: d.routeId, localeId: l, pathVariables: e.pathVariables };
  }
  if (l && u) {
    let e = s[l];
    if (e)
      for (let { path: n, routeId: r } of e) {
        let e = ji(t, n);
        if (e.isMatch) return { routeId: r, localeId: l, pathVariables: e.pathVariables };
      }
  }
  for (let { path: e, routeId: n } of a) {
    let r = ji(t, e);
    if (r.isMatch) return { routeId: n, localeId: l, pathVariables: r.pathVariables };
  }
  if (!r) throw Error(`No exact match found for path`);
  let f = i[`/`];
  if (f) return { routeId: f.routeId, localeId: l };
  let p = Object.keys(e)[0];
  if (!p) throw Error(`Router should not have undefined routes`);
  return { routeId: p, localeId: l };
}
function Ai(e) {
  let t = e.replace(/^\/|\/$/gu, ``);
  return t === `` ? 0 : t.split(`/`).length;
}
function ji(e, t) {
  let n = [],
    r = Mi(t).replace(yy, (e, t) => (n.push(t), `([^/]+)`)),
    i = RegExp(r + `$`),
    a = e.match(i);
  if (!a) return { isMatch: !1 };
  if (a.length === 1) return { isMatch: !0 };
  let o = {},
    s = a.slice(1);
  for (let e = 0; e < n.length; ++e) {
    let t = n[e];
    if (t === void 0) continue;
    let r = s[e],
      i = o[t];
    if (i) {
      if (i !== r) return { isMatch: !1 };
      continue;
    }
    if (r === void 0) throw Error(`Path variable values cannot be undefined`);
    o[t] = r;
  }
  return { isMatch: !0, pathVariables: o };
}
function Mi(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/gu, `\\$&`).replace(/-/gu, `\\x2d`);
}
function Ni(e) {
  return e.startsWith(`"`) && e.endsWith(`"`) ? e.slice(1, -1) : e;
}
function Pi(e) {
  let t = new Map();
  if (!e) return t;
  for (let n of e.split(`,`)) {
    let [e, ...r] = n.split(`;`),
      i = e?.trim().toLowerCase();
    if (!i) continue;
    let a = ``;
    for (let e of r) {
      let t = e.indexOf(`=`);
      t !== -1 && e.slice(0, t).trim().toLowerCase() === `desc` && (a = Ni(e.slice(t + 1).trim()));
    }
    t.set(i, a);
  }
  return t;
}
function Fi(e, t) {
  let n = e.toLowerCase(),
    r = Pi(t).get(n);
  if (r !== void 0) return { name: n, description: r };
}
function Ii(e) {
  if (N === void 0 || typeof performance > `u` || !(`PerformanceServerTiming` in N)) return;
  let t = performance.getEntriesByType(`navigation`)[0]?.serverTiming;
  if (!t || t.length === 0) return;
  let n = t.find((t) => t.name === e);
  if (n) return { name: n.name, description: n.description };
}
function Li() {
  let e = Ii(`abtests`);
  return new URLSearchParams(e?.description);
}
function Ri(e, t, n) {
  let r = e[n];
  if (!r) return;
  let i = r.abTestingParentId ?? n,
    a = e[i];
  if (!a) return;
  let { abTestingParentId: o, ...s } = r,
    c = a.elements || r.elements ? { ...a.elements, ...r.elements } : void 0;
  e[i] = {
    ...s,
    includedLocales: a.includedLocales,
    elements: c,
    abTestingVariantId: n,
    abTestId: t,
  };
}
function zi(e, t) {
  for (let [n, r] of t) Ri(e, n, r);
}
function Bi(e) {
  for (let t in e) e[t]?.abTestingParentId && delete e[t];
}
function Vi(e, t) {
  if (!e[t] || !e[t].abTestingParentId) return;
  let n = e[t].abTestingParentId,
    r = e[n],
    { abTestingParentId: i, ...a } = e[t],
    o = r?.elements || a.elements ? { ...r?.elements, ...a.elements } : void 0;
  e[n] = { ...a, includedLocales: r?.includedLocales, elements: o, abTestingVariantId: t };
}
function Hi(e, t) {
  if (N === void 0) return t;
  let n = t;
  if (t) {
    Vi(e, t);
    let r = e[t]?.abTestingParentId;
    r && (n = r);
  }
  return (zi(e, Li()), Bi(e), n);
}
function Ui(e) {
  (h(() => {
    if (e.robots) {
      let t = document.querySelector(`meta[name="robots"]`);
      t
        ? t.setAttribute(`content`, e.robots)
        : ((t = document.createElement(`meta`)),
          t.setAttribute(`name`, `robots`),
          t.setAttribute(`content`, e.robots),
          document.head.appendChild(t));
    }
  }, [e.robots]),
    c(() => {
      ((document.title = e.title || ``),
        e.viewport &&
          document.querySelector(`meta[name="viewport"]`)?.setAttribute(`content`, e.viewport));
    }, [e.title, e.viewport]));
}
function Wi(e, ...t) {
  _b.has(e) || (_b.add(e), console.warn(e, ...t));
}
function Gi(e, t, n) {
  Wi(`Deprecation warning: ${e} will be removed in version ${t}${n ? `, use ${n} instead` : ``}.`);
}
function Ki(e) {
  return (
    typeof e == `object` &&
    !!e &&
    bb in e &&
    e[bb] instanceof Function &&
    xb in e &&
    e[xb] instanceof Function
  );
}
function qi(e, t) {
  return {
    interpolate(e, n) {
      let r = e.get(),
        i = n.get(),
        a = yb(r);
      return (e) => {
        let n = t.interpolate(r, i)(e);
        return (a.set(n), a);
      };
    },
    difference(e, n) {
      let r = e.get();
      return t.difference(r, n.get());
    },
  };
}
function Ji(e, t) {
  let n = 10 ** Math.round(Math.abs(t));
  return Math.round(e * n) / n;
}
function Yi(e, t) {
  return t === 0 ? Math.round(e) : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function Xi(e) {
  return Math.round(e * 2) / 2;
}
function Zi(e, t) {
  return { x: e, y: t };
}
function Qi(e, t, n, r = !1) {
  let [i, a] = t,
    [o, s] = n,
    c = a - i;
  if (c === 0) return (s + o) / 2;
  let l = s - o;
  if (l === 0) return o;
  let u = o + ((e - i) / c) * l;
  if (r === !0)
    if (o < s) {
      if (u < o) return o;
      if (u > s) return s;
    } else {
      if (u > o) return o;
      if (u < s) return s;
    }
  return u;
}
function $i(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function ea(e) {
  let t = ta(e);
  return t === void 0 ? 0 : e.includes(`%`) ? t / 100 : t;
}
function ta(e) {
  let t = /\d?\.?\d+/u.exec(e);
  return t ? Number(t[0]) : void 0;
}
function na(e, t, n) {
  return (
    (Tb.rgb_r = e / 255),
    (Tb.rgb_g = t / 255),
    (Tb.rgb_b = n / 255),
    Tb.rgbToHsluv(),
    { h: Tb.hsluv_h, s: Tb.hsluv_s, l: Tb.hsluv_l }
  );
}
function ra(e, t, n, r = 1) {
  return (
    (Tb.hsluv_h = e),
    (Tb.hsluv_s = t),
    (Tb.hsluv_l = n),
    Tb.hsluvToRgb(),
    { r: Tb.rgb_r * 255, g: Tb.rgb_g * 255, b: Tb.rgb_b * 255, a: r }
  );
}
function ia(e, t, n, r) {
  let i = Math.round(e),
    a = Math.round(t * 100),
    o = Math.round(n * 100);
  return r === void 0 || r === 1
    ? `hsv(` + i + `, ` + a + `%, ` + o + `%)`
    : `hsva(` + i + `, ` + a + `%, ` + o + `%, ` + r + `)`;
}
function aa(e, t, n) {
  return {
    r: $i(e) ? fa(e, 255) * 255 : 0,
    g: $i(t) ? fa(t, 255) * 255 : 0,
    b: $i(n) ? fa(n, 255) * 255 : 0,
  };
}
function oa(e, t, n, r) {
  let i = [
    ha(Math.round(e).toString(16)),
    ha(Math.round(t).toString(16)),
    ha(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].charAt(0) === i[0].charAt(1) &&
    i[1].charAt(0) === i[1].charAt(1) &&
    i[2].charAt(0) === i[2].charAt(1)
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join(``);
}
function sa(e, t, n) {
  let r,
    i,
    a = fa(e, 255),
    o = fa(t, 255),
    s = fa(n, 255),
    c = Math.max(a, o, s),
    l = Math.min(a, o, s),
    u = (i = r = (c + l) / 2);
  if (c === l) u = i = 0;
  else {
    let e = c - l;
    switch (((i = r > 0.5 ? e / (2 - c - l) : e / (c + l)), c)) {
      case a:
        u = (o - s) / e + (o < s ? 6 : 0);
        break;
      case o:
        u = (s - a) / e + 2;
        break;
      case s:
        u = (a - o) / e + 4;
        break;
    }
    u /= 6;
  }
  return { h: u * 360, s: i, l: r };
}
function ca(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function la(e, t, n) {
  let r, i, a;
  if (((e = fa(e, 360)), (t = fa(t * 100, 100)), (n = fa(n * 100, 100)), t === 0)) r = i = a = n;
  else {
    let o = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - o;
    ((r = ca(s, o, e + 1 / 3)), (i = ca(s, o, e)), (a = ca(s, o, e - 1 / 3)));
  }
  return { r: r * 255, g: i * 255, b: a * 255 };
}
function ua(e, t, n) {
  ((e = fa(e, 255)), (t = fa(t, 255)), (n = fa(n, 255)));
  let r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    a = r - i,
    o = 0,
    s = r === 0 ? 0 : a / r,
    c = r;
  if (r === i) o = 0;
  else {
    switch (r) {
      case e:
        o = (t - n) / a + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / a + 2;
        break;
      case n:
        o = (e - t) / a + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s, v: c };
}
function da(e, t, n) {
  ((e = fa(e, 360) * 6), (t = fa(t * 100, 100)), (n = fa(n * 100, 100)));
  let r = Math.floor(e),
    i = e - r,
    a = n * (1 - t),
    o = n * (1 - i * t),
    s = n * (1 - (1 - i) * t),
    c = r % 6,
    l = [n, o, a, a, s, n][c],
    u = [s, n, n, o, a, a][c],
    d = [a, a, s, n, n, o][c];
  return { r: l * 255, g: u * 255, b: d * 255 };
}
function fa(e, t) {
  let n, r;
  if (((n = typeof t == `string` ? parseFloat(t) : t), typeof e == `string`)) {
    pa(e) && (e = `100%`);
    let t = ma(e);
    ((r = Math.min(n, Math.max(0, parseFloat(e)))), t && (r = Math.floor(r * n) / 100));
  } else r = e;
  return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function pa(e) {
  return typeof e == `string` && e.includes(`.`) && parseFloat(e) === 1;
}
function ma(e) {
  return typeof e == `string` && e.includes(`%`);
}
function ha(e) {
  return e.length === 1 ? `0` + e : `` + e;
}
function ga(e) {
  if (e.includes(`gradient(`) || e.includes(`var(`)) return !1;
  let t = e
      .replace(/^[\s,#]+/u, ``)
      .trimEnd()
      .toLowerCase(),
    n = Cb[t];
  if ((n && (t = n), t === `transparent`)) return { r: 0, g: 0, b: 0, a: 0, format: `name` };
  let r;
  return (r = Eb.rgb.exec(t))
    ? {
        r: parseInt(r[1] ?? ``),
        g: parseInt(r[2] ?? ``),
        b: parseInt(r[3] ?? ``),
        a: 1,
        format: `rgb`,
      }
    : (r = Eb.rgba.exec(t))
      ? {
          r: parseInt(r[1] ?? ``),
          g: parseInt(r[2] ?? ``),
          b: parseInt(r[3] ?? ``),
          a: parseFloat(r[4] ?? ``),
          format: `rgb`,
        }
      : (r = Eb.hsl.exec(t))
        ? { h: parseInt(r[1] ?? ``), s: ea(r[2] ?? ``), l: ea(r[3] ?? ``), a: 1, format: `hsl` }
        : (r = Eb.hsla.exec(t))
          ? {
              h: parseInt(r[1] ?? ``),
              s: ea(r[2] ?? ``),
              l: ea(r[3] ?? ``),
              a: parseFloat(r[4] ?? ``),
              format: `hsl`,
            }
          : (r = Eb.hsv.exec(t))
            ? { h: parseInt(r[1] ?? ``), s: ea(r[2] ?? ``), v: ea(r[3] ?? ``), a: 1, format: `hsv` }
            : (r = Eb.hsva.exec(t))
              ? {
                  h: parseInt(r[1] ?? ``),
                  s: ea(r[2] ?? ``),
                  v: ea(r[3] ?? ``),
                  a: parseFloat(r[4] ?? ``),
                  format: `hsv`,
                }
              : (r = Eb.hex8.exec(t))
                ? {
                    r: _a(r[1] ?? ``),
                    g: _a(r[2] ?? ``),
                    b: _a(r[3] ?? ``),
                    a: va(r[4] ?? ``),
                    format: n ? `name` : `hex`,
                  }
                : (r = Eb.hex6.exec(t))
                  ? {
                      r: _a(r[1] ?? ``),
                      g: _a(r[2] ?? ``),
                      b: _a(r[3] ?? ``),
                      a: 1,
                      format: n ? `name` : `hex`,
                    }
                  : (r = Eb.hex4.exec(t))
                    ? {
                        r: _a(`${r[1]}${r[1]}`),
                        g: _a(`${r[2]}${r[2]}`),
                        b: _a(`${r[3]}${r[3]}`),
                        a: va(r[4] + `` + r[4]),
                        format: n ? `name` : `hex`,
                      }
                    : (r = Eb.hex3.exec(t))
                      ? {
                          r: _a(`${r[1]}${r[1]}`),
                          g: _a(`${r[2]}${r[2]}`),
                          b: _a(`${r[3]}${r[3]}`),
                          a: 1,
                          format: n ? `name` : `hex`,
                        }
                      : !1;
}
function _a(e) {
  return parseInt(e, 16);
}
function va(e) {
  return _a(e) / 255;
}
function ya(e) {
  let t = Db.exec(e);
  if (!t) return null;
  let { r: n = `0`, g: r = `0`, b: i = `0`, a } = t.groups ?? {};
  return { r: parseFloat(n), g: parseFloat(r), b: parseFloat(i), a: a ? parseFloat(a) : 1 };
}
function ba(e = 0) {
  let t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
}
function xa({ r: e, g: t, b: n, a: r }) {
  return { r: ba(e), g: ba(t), b: ba(n), a: r };
}
function Sa(e = 0) {
  let t = Math.abs(e);
  return t > 0.0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - 0.055) : e * 12.92;
}
function Ca({ r: e, g: t, b: n, a: r }) {
  return { r: Sa(e), g: Sa(t), b: Sa(n), a: r };
}
function wa({ r: e, g: t, b: n, a: r }) {
  let i = Math.max(e, t, n),
    a = Math.min(e, t, n),
    o = { h: 0, s: i === 0 ? 0 : 1 - a / i, v: i, a: r };
  return (
    i - a !== 0 &&
      (o.h =
        (i === e
          ? (t - n) / (i - a) + (t < n ? 6 : 0)
          : i === t
            ? (n - e) / (i - a) + 2
            : (e - t) / (i - a) + 4) * 60),
    o
  );
}
function Ta(e) {
  return (e %= 360) < 0 ? e + 360 : e;
}
function Ea({ h: e = 0, s: t = 0, v: n = 0, a: r = 1 }) {
  let i = Ta(e),
    a = Math.abs(((i / 60) % 2) - 1);
  switch (Math.floor(i / 60)) {
    case 0:
      return { r: n, g: n * (1 - t * a), b: n * (1 - t), a: r };
    case 1:
      return { r: n * (1 - t * a), g: n, b: n * (1 - t), a: r };
    case 2:
      return { r: n * (1 - t), g: n, b: n * (1 - t * a), a: r };
    case 3:
      return { r: n * (1 - t), g: n * (1 - t * a), b: n, a: r };
    case 4:
      return { r: n * (1 - t * a), g: n * (1 - t), b: n, a: r };
    case 5:
      return { r: n, g: n * (1 - t), b: n * (1 - t * a), a: r };
    default:
      return { r: n * (1 - t), g: n * (1 - t), b: n * (1 - t), a: r };
  }
}
function Da(e) {
  return jb(Ab(e));
}
function Oa(e) {
  return kb(Ob(e));
}
function ka(e, t, n, r = 1) {
  let i;
  return (
    typeof e == `number` &&
    !Number.isNaN(e) &&
    typeof t == `number` &&
    !Number.isNaN(t) &&
    typeof n == `number` &&
    !Number.isNaN(n)
      ? (i = Ma({ r: e, g: t, b: n, a: r }))
      : typeof e == `string`
        ? (i = Aa(e))
        : typeof e == `object` &&
          (i =
            e.hasOwnProperty(`r`) && e.hasOwnProperty(`g`) && e.hasOwnProperty(`b`)
              ? Ma(e)
              : Na(e)),
    i
  );
}
function Aa(e) {
  let t = ga(e);
  if (t) return t.format === `hsl` ? Na(t) : t.format === `hsv` ? ja(t) : Ma(t);
}
function ja(e) {
  let t = da(e.h, e.s, e.v);
  return { ...sa(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : Pa(e.a) };
}
function Ma(e) {
  let t = aa(e.r, e.g, e.b);
  return { ...sa(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : Pa(e.a) };
}
function Na(e) {
  let t,
    n,
    r,
    i = { r: 0, g: 0, b: 0 },
    a = { h: 0, s: 0, l: 0 };
  return (
    (t = $i(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = $i(e.s) ? e.s : 1),
    typeof e.s == `string` && (n = ta(e.s)),
    (r = $i(e.l) ? e.l : 0.5),
    typeof e.l == `string` && (r = ta(e.l)),
    (i = la(t, n, r)),
    (a = { h: t, s: n, l: r }),
    { ...i, ...a, a: e.a === void 0 ? 1 : e.a, format: `hsl` }
  );
}
function Pa(e) {
  return ((e = parseFloat(e)), e < 0 && (e = 0), (Number.isNaN(e) || e > 1) && (e = 1), e);
}
function Fa() {
  return Vv.location.origin === `https://screenshot.framer.invalid`;
}
function Ia({ children: e }) {
  if (S(Gb).top) return E(g, { children: e });
  let t = M({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    n = M({ byId: {}, byName: {}, byLastId: {}, byPossibleId: {}, byLastName: {}, byLayoutId: {} }),
    r = M(new Set()).current,
    i = M({
      getLayoutId: C(({ id: e, name: i, duplicatedFrom: a }) => {
        if (!e) return null;
        let o = i ? `byName` : `byId`,
          s = t.current[o][e];
        if (s) return s;
        let c = i || e;
        if (!a && !r.has(c) && (!t.current.byLayoutId[c] || t.current.byLayoutId[c] === c))
          return (
            t.current.count[o][c] === void 0 &&
              ((t.current.count[o][c] = 0), (t.current.byLayoutId[c] = c), (n.current[o][e] = c)),
            r.add(c),
            c
          );
        let l;
        if (a?.length)
          for (let s = a.length - 1; s >= 0; s--) {
            let c = a[s];
            H(!!c, `duplicatedId must be defined`);
            let u = t.current[o][c],
              d = t.current.byLastId[c];
            if (d && !l) {
              let e = t.current.byLayoutId[d],
                n = !e || e === i;
              d && !r.has(d) && (!i || n) && (l = [d, c]);
            }
            let f = u ? t.current.byLayoutId[u] : void 0,
              p = !f || f === i;
            if (u && !r.has(u) && (!i || p))
              return ((n.current[o][e] = u), (n.current.byLastId[c] = u), r.add(u), u);
          }
        let u = t.current.byLastId[e];
        if (u && !r.has(u)) return (r.add(u), (n.current.byId[e] = u), u);
        if (l) {
          let [t, i] = l;
          return ((n.current[o][e] = t), (n.current.byLastId[i] = t), r.add(t), t);
        }
        let d = t.current.byPossibleId[e];
        if (d && !r.has(d)) return (r.add(d), (n.current.byId[e] = d), d);
        let f = a?.[0],
          p = i || f || e,
          { layoutId: m, value: h } = La(p, (t.current.count[o][p] ?? -1) + 1, r);
        if (((t.current.count[o][p] = h), (n.current[o][e] = m), a?.length && !i)) {
          let e = a[a.length - 1];
          if ((e && (n.current.byLastId[e] = m), a.length > 1))
            for (let e = 0; e < a.length - 1; e++) {
              let t = a[e];
              t !== void 0 && (n.current.byPossibleId[t] || (n.current.byPossibleId[t] = m));
            }
        }
        return ((n.current.byLayoutId[m] = c), r.add(m), m);
      }, []),
      persistLayoutIdCache: C(() => {
        ((t.current = {
          byId: { ...t.current.byId, ...n.current.byId },
          byLastId: { ...t.current.byLastId, ...n.current.byLastId },
          byPossibleId: { ...t.current.byPossibleId, ...n.current.byPossibleId },
          byName: { ...t.current.byName, ...n.current.byName },
          byLastName: { ...t.current.byLastName, ...n.current.byLastName },
          byLayoutId: { ...t.current.byLayoutId, ...n.current.byLayoutId },
          count: { ...t.current.count, byName: {} },
        }),
          (n.current = {
            byId: {},
            byName: {},
            byLastId: {},
            byPossibleId: {},
            byLastName: {},
            byLayoutId: {},
          }),
          r.clear());
      }, []),
      top: !0,
      enabled: !0,
    }).current;
  return E(Gb.Provider, { value: i, children: e });
}
function La(e, t, n) {
  let r = t,
    i = r ? `${e}-${r}` : e;
  for (; n.has(i);) (r++, (i = `${e}-${r}`));
  return { layoutId: i, value: r };
}
function Ra({ enabled: e = !0, ...t }) {
  let n = S(Gb),
    r = s(() => ({ ...n, enabled: e }), [e]);
  return E(Gb.Provider, { ...t, value: r });
}
function za(e) {
  let t = M(null);
  return (t.current === null && (t.current = e()), t.current);
}
function Ba(e) {
  let { error: t, file: n } = e,
    r = n ? `Error in ${Va(n)}` : `Error`,
    i = t instanceof Error ? t.message : `` + t;
  return w(`div`, {
    style: qb,
    children: [
      E(`div`, { className: `text`, style: Yb, children: r }),
      i && E(`div`, { className: `text`, style: Xb, children: i }),
    ],
  });
}
function Va(e) {
  return e.startsWith(`./`) ? e.replace(`./`, ``) : e;
}
function Ha() {
  let e = J.current();
  return e === J.canvas || e === J.export;
}
function Ua() {
  let [e] = A(() => Ha());
  return e;
}
function Wa(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
function Ga(e, t) {
  if (e === void 0 || t === void 0) return;
  let n = e,
    r = t,
    i = 0;
  t > e && ((n = t), (r = e), (i = 1));
  let a = n / r,
    o = [];
  for (let e of cx) {
    if (n <= e) return o;
    o.push({ maxSideSize: e, width: i === 0 ? e : Math.trunc(e / a) });
  }
  return o;
}
function Ka(e, t) {
  try {
    let n = new URL(e);
    return (
      t ? n.searchParams.set(`scale-down-to`, `${t}`) : n.searchParams.delete(`scale-down-to`),
      n.toString()
    );
  } catch {
    return e;
  }
}
function qa(e, t, n) {
  if (!n || n.length === 0 || !t.pixelWidth) return;
  let r = [];
  for (let t of n) {
    if (t.width < lx) continue;
    let n = Ka(e, t.maxSideSize);
    r.push(`${n} ${t.width}w`);
  }
  return (r.push(`${Ka(e, null)} ${t.pixelWidth}w`), r.join(`, `) || void 0);
}
function Ja(e, t, n) {
  if (!t.pixelWidth || !t.pixelHeight || !n?.width || !n?.height) return;
  let r = [],
    i = Math.max(t.pixelWidth, t.pixelHeight),
    a = Math.max(n.width / t.pixelWidth, n.height / t.pixelHeight);
  for (let t of sx) {
    let n = Ka(e, Math.round(i * t * a));
    r.push({ src: n, scale: t });
  }
  return r;
}
function Ya(e, t, n) {
  if (![`auto`, `lossless`].includes(t.preferredSize ?? ``)) return { src: n, srcSet: void 0 };
  if (e) {
    let r = Ja(n, t, e);
    if (!r?.length) return { src: n, srcSet: void 0 };
    let [i, ...a] = r;
    return { src: i?.src, srcSet: a.map(({ src: e, scale: t }) => `${e} ${t}x`).join(`, `) };
  } else return { src: n, srcSet: qa(n, t, Ga(t.pixelWidth, t.pixelHeight)) };
}
function Xa() {
  return {
    backgroundRepeat: `repeat`,
    backgroundPosition: `left top`,
    backgroundSize: `64px auto`,
    backgroundImage: it(ix.imagePlaceholderSvg),
  };
}
function Za(e) {
  switch (e) {
    case `fit`:
      return `contain`;
    case `stretch`:
      return `fill`;
    default:
      return `cover`;
  }
}
function Qa(e, t) {
  let n = e ?? `center`,
    r = t ?? `center`;
  return n === `center` && r === `center` ? `center` : n + ` ` + r;
}
function $a(e) {
  return {
    display: `block`,
    width: `100%`,
    height: `100%`,
    ...ox,
    objectPosition: Qa(e.positionX, e.positionY),
    objectFit: Za(e.fit),
  };
}
function eo(e) {
  let t = f.useRef(e ? `auto` : `async`),
    n = C((e) => {
      ((t.current = `auto`), (e.decoding = `auto`));
    }, []),
    r = C(
      (e) => {
        n(e.currentTarget);
      },
      [n]
    ),
    i = C(
      (e) => {
        e?.complete && n(e);
      },
      [n]
    );
  return { decoding: t.current, onImageLoad: r, onImageMount: i };
}
function to({
  image: e,
  containerSize: t,
  nodeId: n,
  alt: r,
  draggable: i,
  avoidAsyncDecoding: a,
}) {
  let o = ix.useImageSource(e, t, n),
    s = $a(e),
    { decoding: c, onImageLoad: l, onImageMount: u } = eo(a),
    { srcSet: d, src: f } =
      `srcSet` in e ? { src: o, srcSet: e.srcSet } : Ya(e.nodeFixedSize, e, o);
  return E(`img`, {
    suppressHydrationWarning: !0,
    ref: u,
    decoding: c,
    fetchpriority: e.fetchPriority,
    loading: e.loading,
    width: e.pixelWidth,
    height: e.pixelHeight,
    sizes: d ? e.sizes : void 0,
    srcSet: d,
    src: f,
    onLoad: l,
    alt: r ?? e.alt ?? ``,
    style: s,
    draggable: i,
  });
}
function no({ image: e, containerSize: t, nodeId: n }) {
  let r = f.useRef(null),
    i = ix.useImageElement(e, t, n),
    a = $a(e);
  return (
    f.useLayoutEffect(() => {
      let e = r.current;
      if (e !== null)
        return (
          e.appendChild(i),
          () => {
            e.removeChild(i);
          }
        );
    }, [i]),
    Object.assign(i.style, a),
    E(`div`, { ref: r, style: { display: `contents`, ...ox } })
  );
}
function ro({ nodeId: e, image: t, containerSize: n }) {
  let r = f.useRef(null),
    i = ix.useImageSource(t, n, e);
  return (
    f.useLayoutEffect(() => {
      let n = r.current;
      if (n === null) return;
      let a = $a(t);
      ix.renderOptimizedCanvasImage(n, i, a, e);
    }, [e, t, i]),
    E(`div`, { ref: r, style: { display: `contents`, ...ox } })
  );
}
function io({ layoutId: e, image: t, ...n }) {
  e && (e += `-background`);
  let r = null,
    i = !!e,
    a = null;
  if (z(t.src))
    if (t.fit === `tile` && t.pixelWidth && t.pixelHeight) {
      let e = B(t.backgroundSize) ? t.backgroundSize : 1,
        n = { width: Math.round(e * t.pixelWidth), height: Math.round(e * t.pixelHeight) },
        o = Xi(e * (t.pixelWidth / 2)),
        s = ix.useImageSource(t, n);
      ((r = {
        ...ux,
        backgroundImage: `url(${s})`,
        backgroundRepeat: `repeat`,
        backgroundPosition: Qa(t.positionX, t.positionY),
        opacity: void 0,
        border: 0,
        backgroundSize: `${o}px auto`,
      }),
        (a = null),
        (i = !0));
    } else
      a =
        J.current() === J.canvas
          ? ix.canRenderOptimizedCanvasImage(ix.useImageSource(t))
            ? E(ro, { image: t, ...n })
            : E(no, { image: t, ...n })
          : E(to, { image: t, avoidAsyncDecoding: J.current() === J.export, ...n });
  let o = a ? ux : (r ?? { ...ux, ...Xa() });
  return i
    ? E(F.div, { layoutId: e, style: o, "data-framer-background-image-wrapper": !0, children: a })
    : E(`div`, { style: o, "data-framer-background-image-wrapper": !0, children: a });
}
function ao(e, t, n = !0) {
  let { borderWidth: r, borderStyle: i, borderColor: a } = e;
  if (!r) return;
  let o, s, c, l;
  if (
    (typeof r == `number`
      ? (o = s = c = l = r)
      : ((o = r.top || 0), (s = r.bottom || 0), (c = r.left || 0), (l = r.right || 0)),
    !(o === 0 && s === 0 && c === 0 && l === 0))
  ) {
    if (n && o === s && o === c && o === l) {
      t.border = `${o}px ${i} ${a}`;
      return;
    }
    ((t.borderStyle = e.borderStyle),
      (t.borderColor = e.borderColor),
      (t.borderTopWidth = `${o}px`),
      (t.borderBottomWidth = `${s}px`),
      (t.borderLeftWidth = `${c}px`),
      (t.borderRightWidth = `${l}px`));
  }
}
function oo(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: `absolute`,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    ...ox,
    pointerEvents: `none`,
  };
  return e.border
    ? ((n.border = e.border), E(F.div, { style: n }))
    : (ao(e, n, !1), E(F.div, { "data-frame-border": !0, style: n, layoutId: t }));
}
function so(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: r, id: i } = t,
    a = n ?? i,
    o = r && a ? r[a] : void 0;
  return (o && typeof o == `string` && (e = { ...e, src: o }), e);
}
function co(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !fx.isImageObject(t)) return;
  let r = null;
  if (((r = z(n) ? { alt: ``, src: n } : yb.get(t, null)), fx.isImageObject(r))) return so(r, e);
}
function lo(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function uo(e) {
  return typeof e != `string` && typeof e != `number`;
}
function fo(e) {
  return e != null && typeof e != `boolean` && !lo(e);
}
function W(e) {
  return Number.isFinite(e);
}
function po(e) {
  return (Math.PI / 180) * e;
}
function mo(e) {
  return Ze(e) ? !1 : e === 2 || e === 5;
}
function ho(e) {
  if (typeof e == `string`) {
    let t = e.trim();
    if (t === `auto`) return 2;
    if (t.endsWith(`fr`)) return 3;
    if (t.endsWith(`%`)) return 1;
    if (t.endsWith(`vw`) || t.endsWith(`vh`)) return 4;
  }
  return 0;
}
function go(e, t, n, r) {
  if (typeof t == `string`) {
    if (t.endsWith(`%`) && n)
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * n.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * n.height;
        default:
          break;
      }
    if (t.endsWith(`vh`)) {
      if (!r) return _o(e);
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * r.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * r.height;
        default:
          break;
      }
    }
    return parseFloat(t);
  }
  return t;
}
function _o(e) {
  switch (e) {
    case `minWidth`:
    case `minHeight`:
      return -1 / 0;
    case `maxWidth`:
    case `maxHeight`:
      return 1 / 0;
    default:
      U(e, `unknown constraint key`);
  }
}
function vo(e, t, n, r) {
  return (
    t.minHeight && (e = Math.max(go(`minHeight`, t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(go(`maxHeight`, t.maxHeight, n, r), e)),
    e
  );
}
function yo(e, t, n, r) {
  return (
    t.minWidth && (e = Math.max(go(`minWidth`, t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(go(`maxWidth`, t.maxWidth, n, r), e)),
    e
  );
}
function bo(e, t, n, r, i) {
  let a = yo(W(e) ? e : _x, n, r, i),
    o = vo(W(t) ? t : vx, n, r, i);
  return (
    W(n.aspectRatio) &&
      n.aspectRatio > 0 &&
      (W(n.left) && W(n.right)
        ? (o = a / n.aspectRatio)
        : (W(n.top) && W(n.bottom)) || n.widthType === 0
          ? (a = o * n.aspectRatio)
          : (o = a / n.aspectRatio)),
    { width: a, height: o }
  );
}
function xo(e, t) {
  return !W(e) || !W(t) ? null : e + t;
}
function So(e) {
  return (
    typeof e.right == `string` ||
    typeof e.bottom == `string` ||
    (typeof e.left == `string` && (!e.center || e.center === `y`)) ||
    (typeof e.top == `string` && (!e.center || e.center === `x`))
  );
}
function Co(e) {
  return !e._constraints || So(e) ? !1 : e._constraints.enabled;
}
function wo(e) {
  let { size: t } = e,
    { width: n, height: r } = e;
  return (
    W(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
    W(n) && W(r) ? { width: n, height: r } : null
  );
}
function To(e) {
  let t = wo(e);
  if (t === null) return null;
  let { left: n, top: r } = e;
  return W(n) && W(r) ? { x: n, y: r, ...t } : null;
}
function Eo(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let r = t === 1 || t === 2;
  if (!Co(e) || r) return To(e);
  let i = Do(e),
    a = Oo(t),
    o = a ? { sizing: a, positioning: a, viewport: null } : null;
  return gx.toRect(i, o, null, n, null);
}
function Do(e) {
  let { left: t, right: n, top: r, bottom: i, center: a, _constraints: o, size: s } = e,
    { width: c, height: l } = e;
  (c === void 0 && (c = s), l === void 0 && (l = s));
  let { aspectRatio: u, autoSize: d } = o,
    f = hx.quickfix({
      left: W(t),
      right: W(n),
      top: W(r),
      bottom: W(i),
      widthType: ho(c),
      heightType: ho(l),
      aspectRatio: u || null,
      fixedSize: d === !0,
    }),
    p = null,
    m = null,
    h = 0,
    g = 0;
  if (f.widthType !== 0 && typeof c == `string`) {
    let e = parseFloat(c);
    c.endsWith(`fr`) ? ((h = 3), (p = e)) : c === `auto` ? (h = 2) : ((h = 1), (p = e / 100));
  } else c !== void 0 && typeof c != `string` && (p = c);
  if (f.heightType !== 0 && typeof l == `string`) {
    let e = parseFloat(l);
    l.endsWith(`fr`)
      ? ((g = 3), (m = e))
      : l === `auto`
        ? (g = 2)
        : ((g = 1), (m = parseFloat(l) / 100));
  } else l !== void 0 && typeof l != `string` && (m = l);
  let _ = 0.5,
    v = 0.5;
  return (
    (a === !0 || a === `x`) && ((f.left = !1), typeof t == `string` && (_ = parseFloat(t) / 100)),
    (a === !0 || a === `y`) && ((f.top = !1), typeof r == `string` && (v = parseFloat(r) / 100)),
    {
      left: f.left ? t : null,
      right: f.right ? n : null,
      top: f.top ? r : null,
      bottom: f.bottom ? i : null,
      widthType: h,
      heightType: g,
      width: p,
      height: m,
      aspectRatio: f.aspectRatio || null,
      centerAnchorX: _,
      centerAnchorY: v,
      minHeight: e.minHeight,
      maxHeight: e.maxHeight,
      minWidth: e.minWidth,
      maxWidth: e.maxWidth,
    }
  );
}
function Oo(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function ko() {
  return f.useContext(yx).parentSize;
}
function Ao(e) {
  return typeof e == `object`;
}
function jo(e) {
  return Ao(e) ? e.width : e;
}
function Mo(e) {
  return Ao(e) ? e.height : e;
}
function No(e, t) {
  return E(bx, { parentSize: t, children: e });
}
function Po(e) {
  return Eo(e, ko(), !0);
}
function Fo({ width: e, height: t }) {
  return e === `auto` || e === `min-content` || t === `auto` || t === `min-content`;
}
function Io(e) {
  if (e) {
    if (e.pixelHeight && e.pixelWidth) return { width: e.pixelWidth, height: e.pixelHeight };
    if (e.src === void 0) return { width: 1, height: 1 };
  }
}
function Lo(e) {
  return e && e !== `search` && e !== `slot` && e !== `template` ? F[e] : F.div;
}
function Ro(e) {
  let t = !1,
    n;
  return {
    get value() {
      return ((t ||= ((n = e()), !0)), n);
    },
  };
}
function zo(e, t, n = Sx) {
  if (!(!e || n.has(e) || typeof document > `u`)) {
    if ((n.add(e), !t)) {
      if (!Cx) {
        let e = document.createElement(`style`);
        if (
          (e.setAttribute(`type`, `text/css`),
          e.setAttribute(`data-framer-css`, `true`),
          !document.head)
        ) {
          console.warn(`not injecting CSS: the document is missing a <head> element`);
          return;
        }
        if ((document.head.appendChild(e), e.sheet)) Cx = e.sheet;
        else {
          console.warn(`not injecting CSS: injected <style> element does not have a sheet`, e);
          return;
        }
      }
      t = Cx;
    }
    try {
      t.insertRule(e, t.cssRules.length);
    } catch {}
  }
}
function Bo() {
  return Fa() ? J.preview : J.current();
}
function Vo(e) {
  return typeof e == `number` ? e : e.startsWith(`--`) ? Z.variable(e) : e === `` ? `""` : e;
}
function Ho(e) {
  return e !== Gx && e !== Kx;
}
function Uo(e) {
  for (let t in e) if (Ho(t) && e?.[t] === !0) return !0;
  return !1;
}
function Wo(e, t, n, r, i) {
  let a = f.useRef(null),
    o = f.useCallback(
      (e) => {
        t &&
          a.current !== !1 &&
          ((a.current = !1),
          e.currentTarget.setCustomValidity(` `),
          e.currentTarget.reportValidity(),
          t(e));
      },
      [t]
    ),
    s = f.useCallback(
      (r) => {
        if ((n?.(r), !t && !e)) return;
        let i = r.target.validity;
        a.current === !1 &&
          !Uo(i) &&
          (r.currentTarget.setCustomValidity(``),
          r.target.reportValidity(),
          (a.current = !0),
          e?.());
      },
      [t, e, n]
    ),
    c = f.useCallback(
      (e) => {
        if (!t) {
          r?.(e);
          return;
        }
        if (a.current === !1) return;
        let n = e.currentTarget.validity;
        if (Uo(n)) {
          o(e);
          return;
        }
        r?.(e);
      },
      [o, r, t]
    );
  return f.useMemo(() => ({ onInvalid: o, onChange: s, onBlur: c, onFocus: i }), [o, s, c, i]);
}
function Go(e, t, n) {
  let r = e + Math.max(t, 1) - 1;
  switch (n) {
    case `decimal`:
      return Ko(r);
    case `lower-alpha`:
    case `upper-alpha`:
    case `lower-latin`:
    case `upper-latin`:
      return qo(r);
    case `lower-roman`:
    case `upper-roman`:
      return Yo(r);
    default:
      return Ko(r);
  }
}
function Ko(e) {
  return String(e).length;
}
function qo(e) {
  let t = 1;
  for (; Jo(t) < e;) t++;
  return t;
}
function Jo(e) {
  let t = 0;
  for (let n = 0; n < e; n++) t += 26 ** (n + 1);
  return t;
}
function Yo(e) {
  let t = 0;
  for (let n of eS) {
    if (e < n) return t;
    t++;
  }
  let n = Math.floor((e - 888) / 1e3);
  return n >= 1 ? Math.max(t, n + 12) : t;
}
function Xo(e, t) {
  return Z.variable(...e.flatMap((e) => [`${e}-rgb`, e]), t);
}
function Zo(e, t) {
  return `${e} > ${t}, ${e} > .ssr-variant > ${t}`;
}
function Qo() {
  return J.current() === J.preview ? mS.value : pS.value;
}
function $o(e) {
  return Dx(e, Qo, `framer-lib-combinedCSSRules`);
}
function es(e, t, n) {
  ((e[`data-framer-layout-hint-center-x`] = t === !0 || t === `x` || void 0),
    (e[`data-framer-layout-hint-center-y`] = t === !0 || t === `y` || void 0),
    (e[`data-framer-layout-hint-x`] = n?.x),
    (e[`data-framer-layout-hint-y`] = n?.y));
}
function ts(e, t) {
  let n = {};
  return (
    J.current() === J.canvas &&
      es(n, hS ? e : void 0, {
        x: typeof t?.x == `number` ? t.x : void 0,
        y: typeof t?.y == `number` ? t.y : void 0,
      }),
    n
  );
}
function ns(e) {
  return e.replace(/^id_/u, ``).replace(/\\/gu, ``);
}
function rs(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let n = e._forwardedOverrides;
  return (
    n &&
      (t = f.Children.map(t, (e) =>
        f.isValidElement(e) ? f.cloneElement(e, { _forwardedOverrides: n }) : e
      )),
    { props: e, children: t }
  );
}
function is(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === `x`
        ? `translateX(-50%) ${n}`
        : e === `y`
          ? `translateY(-50%) ${n}`
          : n || `none`;
}
function as(e, { specificLayoutId: t, postfix: n } = {}) {
  let { name: r, layoutIdKey: i, duplicatedFrom: a, __fromCodeComponentNode: o = !1, drag: c } = e,
    { getLayoutId: l, enabled: u } = S(Gb);
  return s(() => {
    if (!u) return e.layoutId;
    let s = t || e.layoutId;
    if (!s && (c || !i || o)) return;
    let d = s || l({ id: i, name: r, duplicatedFrom: a });
    if (d) return n ? `${d}-${n}` : d;
  }, [u]);
}
function os() {
  let [e, t] = f.useState(0);
  return f.useCallback(() => t((e) => e + 1), []);
}
function ss(e) {
  let t = os();
  h(() => {
    let n = e?.current;
    if (n)
      return (
        vS?.observeElementWithCallback(e.current, t),
        () => {
          vS?.unobserve(n);
        }
      );
  }, [e, t]);
}
function cs(e) {
  return [
    ...(e.firstElementChild && e.firstElementChild.hasAttribute(yS)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(ls)
    .map(us);
}
function ls(e) {
  return e instanceof HTMLBaseElement ||
    e instanceof HTMLHeadElement ||
    e instanceof HTMLLinkElement ||
    e instanceof HTMLMetaElement ||
    e instanceof HTMLScriptElement ||
    e instanceof HTMLStyleElement ||
    e instanceof HTMLTitleElement
    ? !1
    : e instanceof HTMLElement || e instanceof SVGElement;
}
function us(e) {
  if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== `contents`)
    return e;
  let t = [...e.children].find(ls);
  return t ? us(t) : e;
}
function ds(e, t, n = () => [], r = {}) {
  let { id: i, visible: a, _needsMeasure: o } = e,
    { skipHook: s = !1 } = r,
    c = S(gS),
    l = J.current() === J.canvas;
  Uy(() => {
    !l ||
      c ||
      s ||
      (t.current && i && a && o && ix.queueMeasureRequest(ns(i), t.current, n(t.current)));
  });
}
function fs(e) {
  let t = e.closest(`[data-framer-component-container]`);
  t && ix.queueMeasureRequest(ns(t.id), t, cs(t));
}
function ps(e) {
  e.willChange = `transform`;
  let t = J.current() === J.canvas;
  SS && t && (e.translateZ = bS);
}
function ms(e) {
  ((e.willChange = `transform`), hs(e, !0));
}
function hs(e, t) {
  let n = J.current() === J.canvas;
  if (!SS || !n) return;
  let r = (z(e.transform) && e.transform) || ``;
  t ? r.includes(xS) || (e.transform = r + xS) : (e.transform = r.replace(xS, ``));
}
function gs(e, t, n, r = !0) {
  if (!e) return;
  let i = Zb(e.style),
    a = n || i[t],
    o = () => {
      _s(a) && (i[t] = a);
    };
  ((i[t] = null), r ? Promise.resolve().then(o) : setTimeout(o, 0));
}
function _s(e) {
  return z(e) || B(e) || Qe(e);
}
function vs(e, t) {
  if (e.size < t) return;
  let n = Math.round(Math.random());
  for (let t of e.keys()) (++n & 1) != 1 && e.delete(t);
}
function ys(e, t, n, r) {
  let i = t.get(n);
  if (i) return i;
  vs(t, e);
  let a = r(n);
  return (t.set(n, a), a);
}
function bs(e, t) {
  let n = [e, t];
  return ES.test(e) ? e : ys(1e3, DS, n, () => TS.multiplyAlpha(e, t));
}
function xs(e, t = 1) {
  let n;
  return (
    (n =
      `stops` in e
        ? e.stops
        : [
            { value: e.start, position: 0 },
            { value: e.end, position: 1 },
          ]),
    t === 1 ? n : n.map((e) => ({ ...e, value: bs(e.value, t) }))
  );
}
function Ss(e, t) {
  let n = 0;
  return (
    xs(e, t).forEach((e) => {
      n ^= wS(e.value) ^ e.position;
    }),
    n
  );
}
function Cs(e) {
  return e && OS.every((t) => t in e);
}
function ws(e) {
  return e && kS.every((t) => t in e);
}
function Ts({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == `string` || Pb(t)
      ? (n.backgroundColor = t)
      : q.isColorObject(e) && (n.backgroundColor = e.initialValue || q.toRgbString(e))
    : e &&
      ((e = yb.get(e, null)),
      typeof e == `string` || Pb(e)
        ? (n.background = e)
        : jS.isLinearGradient(e)
          ? (n.background = jS.toCSS(e))
          : NS.isRadialGradient(e)
            ? (n.background = NS.toCSS(e))
            : q.isColorObject(e) && (n.backgroundColor = e.initialValue || q.toRgbString(e)));
}
function G(e, t, n, r) {
  if ((r === void 0 && (r = t), e[t] !== void 0)) {
    n[r] = e[t];
    return;
  }
}
function Es(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function Ds(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function Os(e) {
  if (!e) return {};
  let t = {};
  (e.preserve3d === !0
    ? (t.transformStyle = `preserve-3d`)
    : e.preserve3d === !1 && (t.transformStyle = `flat`),
    e.backfaceVisible === !0
      ? (t.backfaceVisibility = `visible`)
      : e.backfaceVisible === !1 && (t.backfaceVisibility = `hidden`),
    t.backfaceVisibility && (t.WebkitBackfaceVisibility = t.backfaceVisibility),
    e.perspective !== void 0 && (t.perspective = t.WebkitPerspective = e.perspective),
    e.__fromCanvasComponent ||
      (e.center === !0
        ? ((t.left = `50%`), (t.top = `50%`))
        : e.center === `x`
          ? (t.left = `50%`)
          : e.center === `y` && (t.top = `50%`)));
  let { cornerShape: n } = e;
  return (
    he(n)
      ? (t.cornerShape = le(() => `superellipse(${n.get()})`))
      : n !== void 0 && (t.cornerShape = `superellipse(${n})`),
    G(e, `size`, t),
    G(e, `width`, t),
    G(e, `height`, t),
    G(e, `minWidth`, t),
    G(e, `minHeight`, t),
    G(e, `top`, t),
    G(e, `right`, t),
    G(e, `bottom`, t),
    G(e, `left`, t),
    G(e, `position`, t),
    G(e, `overflow`, t),
    G(e, `opacity`, t),
    e._border?.borderWidth || G(e, `border`, t),
    G(e, `borderRadius`, t),
    G(e, `radius`, t, `borderRadius`),
    G(e, `color`, t),
    G(e, `shadow`, t, `boxShadow`),
    G(e, `x`, t),
    G(e, `y`, t),
    G(e, `z`, t),
    G(e, `rotate`, t),
    G(e, `rotateX`, t),
    G(e, `rotateY`, t),
    G(e, `rotateZ`, t),
    G(e, `scale`, t),
    G(e, `scaleX`, t),
    G(e, `scaleY`, t),
    G(e, `skew`, t),
    G(e, `skewX`, t),
    G(e, `skewY`, t),
    G(e, `originX`, t),
    G(e, `originY`, t),
    G(e, `originZ`, t),
    Ts(e, t),
    t
  );
}
function ks(e) {
  for (let t in e)
    if (
      t === `drag` ||
      t.startsWith(`while`) ||
      (typeof Zb(e)[t] == `function` && t.startsWith(`on`) && !t.includes(`Animation`))
    )
      return !0;
  return !1;
}
function As(e) {
  if (e.drag) return `grab`;
  for (let t in e) if (FS.has(t)) return `pointer`;
}
function js(e) {
  return Ms(e) ? !0 : e.style ? !!Ms(e.style) : !1;
}
function Ms(e) {
  return IS in e && (e[IS] === `scroll` || e[IS] === `auto`);
}
function Ns(e) {
  let {
      left: t,
      top: n,
      bottom: r,
      right: i,
      width: a,
      height: o,
      center: s,
      _constraints: c,
      size: l,
      widthType: u,
      heightType: d,
      positionFixed: f,
      positionAbsolute: p,
    } = e,
    m = ue(e.minWidth),
    h = ue(e.minHeight),
    g = ue(e.maxWidth),
    _ = ue(e.maxHeight);
  return {
    top: ue(n),
    left: ue(t),
    bottom: ue(r),
    right: ue(i),
    width: ue(a),
    height: ue(o),
    size: ue(l),
    center: s,
    _constraints: c,
    widthType: u,
    heightType: d,
    positionFixed: f,
    positionAbsolute: p,
    minWidth: m,
    minHeight: h,
    maxWidth: g,
    maxHeight: _,
  };
}
function Ps(e) {
  let t = S(gS),
    { style: n, _initialStyle: r, __fromCanvasComponent: i, size: a } = e,
    o = Ns(e),
    s = Po(o),
    c = {
      display: `block`,
      flex: n?.flex ?? `0 0 auto`,
      userSelect: J.current() === J.preview ? void 0 : `none`,
    };
  e.__fromCanvasComponent ||
    (c.backgroundColor = e.background === void 0 ? `rgba(0, 170, 255, 0.3)` : void 0);
  let l = !ks(e) && !e.__fromCanvasComponent && !js(e),
    u = !e.style || !(`pointerEvents` in e.style);
  l && u && (c.pointerEvents = `none`);
  let d = f.Children.count(e.children) > 0 &&
      f.Children.toArray(e.children).every((e) => typeof e == `string` || typeof e == `number`) && {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        textAlign: `center`,
      },
    p = Os(e);
  (a === void 0 && !i && (Es(p) || (c.width = LS.width), Ds(p) || (c.height = LS.height)),
    o.minWidth !== void 0 && (c.minWidth = o.minWidth),
    o.minHeight !== void 0 && (c.minHeight = o.minHeight));
  let m = {};
  (Co(o) &&
    s &&
    !Fo(e) &&
    (m = { left: s.x, top: s.y, width: s.width, height: s.height, right: void 0, bottom: void 0 }),
    Object.assign(c, d, r, p, m, n),
    Object.assign(c, {
      overflowX: c.overflowX ?? c.overflow,
      overflowY: c.overflowY ?? c.overflow,
      overflow: void 0,
    }),
    CS.applyWillChange(e, c, !0));
  let h = c;
  c.transform || (h = { x: 0, y: 0, ...c });
  let g = Ha();
  return (
    e.positionSticky
      ? (!g || ix.isOnPageCanvas || t) &&
        ((h.position = `sticky`),
        (h.willChange = `transform`),
        (h.top = e.positionStickyTop),
        (h.right = e.positionStickyRight),
        (h.bottom = e.positionStickyBottom),
        (h.left = e.positionStickyLeft))
      : g &&
        (e.positionFixed
          ? (h.position = ix.isOnPageCanvas ? `fixed` : `absolute`)
          : e.positionAbsolute && (h.position = `absolute`)),
    `rotate` in h && h.rotate === void 0 && delete h.rotate,
    [h, s]
  );
}
function Fs(e) {
  let t = {};
  for (let n in e)
    (re(n) || $b(n)) && !RS.has(n)
      ? (t[n] = Zb(e)[n])
      : (n === `positionTransition` || n === `layoutTransition`) &&
        ((t.layout = !0),
        typeof Zb(e)[n] != `boolean` && !e.transition && (t.transition = Zb(e)[n]));
  return t;
}
function Is(e) {
  return `data-framer-name` in e;
}
function Ls(e, t, n, r) {
  if (r) return n ? { width: n.width, height: n.height } : 1;
  let { _usesDOMRect: i } = e,
    { widthType: a = 0, heightType: o = 0, width: s, height: c } = t;
  return n && !i
    ? n
    : a === 0 && o === 0 && typeof s == `number` && typeof c == `number`
      ? { width: s, height: c }
      : i || e.positionFixed || e.positionAbsolute
        ? 2
        : 0;
}
function Rs(e) {
  return E(F.div, { layoutId: VS, style: WS, children: e.children });
}
function zs(e, t) {
  qe(e) ? e(t) : Bs(e) && (e.current = t);
}
function Bs(e) {
  return V(e) && `current` in e;
}
function Vs() {
  let e = za(() => new Set()),
    t = za(() => new Map());
  return za(() => (n, r) => ({
    get current() {
      return n.current;
    },
    set current(i) {
      if (i !== n.current) {
        if (
          ((n.current = i),
          r && r(i),
          t.forEach((e, t) => {
            e ? e() : t(null);
          }),
          i === null)
        ) {
          (t.clear(), e.clear());
          return;
        }
        e.forEach((e) => {
          let n = e(i);
          t.set(e, n);
        });
      }
    },
    observe(r) {
      e.add(r);
      let i = n.current;
      if (i) {
        let e = r(i);
        t.set(r, e);
      }
    },
    unobserve(n) {
      if (!n || (e.delete(n), !t.has(n))) return;
      let r = t.get(n);
      (r ? r() : n(null), t.delete(n));
    },
  }));
}
function Hs(e) {
  let t = M(null),
    n = Vs();
  return za(() => (Bs(e) ? n(e) : qe(e) ? n(t, e) : n(t)));
}
function Us(e, t, n) {
  let r = M(),
    i = M();
  (Gr(
    () => {
      i.current !== void 0 && (i.current = !0);
    },
    n ?? [{}]
  ),
    e &&
      i.current !== !1 &&
      ((i.current = !1), e.unobserve(r.current), e.observe(t), (r.current = t)));
}
function Ws(e, t, n, r, i, a, o) {
  let s = e.get(t);
  return (
    (!s || s.root !== r?.current) &&
      ((s = new GS({ root: r?.current, rootMargin: a, threshold: o })), e.set(t, s)),
    s.observeElementWithCallback(n, i),
    () => {
      s.unobserve(n);
    }
  );
}
function Gs(e, t, n) {
  let r = za(() => `${n.rootMargin}`),
    i = S(KS),
    { enabled: a, root: o, rootMargin: s, threshold: c } = n;
  Us(
    e,
    (e) => {
      if (a && e !== null) return Ws(i, r, e, o, t, s, c);
    },
    [a, t, o, s, c]
  );
}
function Ks(e, t, n) {
  let r = f.useRef({ isInView: !1, hasAnimatedOnce: !1 }),
    { enabled: i, animateOnce: a, threshold: o, rootMargin: s = `0px 0px 0px 0px` } = n;
  qS(
    e,
    f.useCallback(
      (e) => {
        let { isInView: n, hasAnimatedOnce: i } = r.current,
          s = Js(e, o?.y ?? 0);
        if (s && !n) {
          if (a && i) return;
          ((r.current.hasAnimatedOnce = !0), (r.current.isInView = !0), t(!0));
          return;
        }
        if (!s && n) {
          if (((r.current.isInView = !1), a)) return;
          t(!1);
          return;
        }
      },
      [a, o?.y, t]
    ),
    { threshold: JS, rootMargin: s, enabled: i ?? !0 }
  );
}
function qs(e, t) {
  return t.height === 0 ? 0 : e.height / Math.min(t.height, Vv.innerHeight);
}
function Js({ boundingClientRect: e, intersectionRect: t, isIntersecting: n }, r) {
  return e.height === 0 ? n : n && qs(t, e) >= r;
}
function Ys() {
  return new Map();
}
function Xs() {
  return za(Ys);
}
function Zs(e, t = []) {
  let { register: n, deregister: r } = S($S);
  h(() => {
    if (e) return (n(e), () => r(e));
  }, [n, r, ...t]);
}
function Qs(e, t) {
  return !(
    t.isCurrent === void 0 ||
    e.isCurrent !== t.isCurrent ||
    e.isPrevious !== t.isPrevious ||
    (t.isCurrent && e.isOverlayed !== t.isOverlayed)
  );
}
function $s(e, t, n) {
  let r = { ...e };
  return (
    t &&
      (W(t.originX) && (r.originX = t.originX),
      W(t.originY) && (r.originY = t.originY),
      W(t.originZ) && (r.originZ = t.originZ)),
    n &&
      (W(n.originX) && (r.originX = n.originX),
      W(n.originY) && (r.originY = n.originY),
      W(n.originZ) && (r.originZ = n.originZ)),
    r
  );
}
function ec(e) {
  if (!e || !(`rotateX` in e || `rotateY` in e || `z` in e)) return !1;
  let t = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0,
    n =
      e?.transition?.rotateX.from !== 0 ||
      e?.transition?.rotateY.from !== 0 ||
      e?.transition?.z.from !== 0;
  return t || n;
}
function tc(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `right`) {
    case `right`:
      return aC.PushLeft;
    case `left`:
      return aC.PushRight;
    case `bottom`:
      return aC.PushUp;
    case `top`:
      return aC.PushDown;
  }
}
function nc(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return aC.OverlayLeft;
    case `left`:
      return aC.OverlayRight;
    case `bottom`:
      return aC.OverlayUp;
    case `top`:
      return aC.OverlayDown;
  }
}
function rc(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return aC.FlipLeft;
    case `left`:
      return aC.FlipRight;
    case `bottom`:
      return aC.FlipUp;
    case `top`:
      return aC.FlipDown;
  }
}
function ic(e, t) {
  switch (t.type) {
    case `addOverlay`:
      return oc(e, t.transition, t.component);
    case `removeOverlay`:
      return sc(e);
    case `add`:
      return cc(e, t.key, t.transition, t.component);
    case `remove`:
      return dc(e);
    case `update`:
      return ac(e, t.key, t.component);
    case `back`:
      return lc(e);
    case `forward`:
      return uc(e);
    default:
      return;
  }
}
function ac(e, t, n) {
  return { ...e, containers: { ...e.containers, [t]: n } };
}
function oc(e, t, n) {
  let r = e.overlayStack[e.currentOverlay];
  if (r && r.component === n) return;
  let i = e.overlayItemId + 1,
    a = [...e.overlayStack, { key: `stack-${i}`, component: n, transition: t }];
  return {
    ...e,
    overlayStack: a,
    overlayItemId: i,
    currentOverlay: Math.max(0, Math.min(e.currentOverlay + 1, a.length - 1)),
    previousOverlay: e.currentOverlay,
  };
}
function sc(e) {
  return { ...e, overlayStack: [], currentOverlay: -1, previousOverlay: e.currentOverlay };
}
function cc(e, t, n, r) {
  (e.containers[t] || (e.containers[t] = r),
    (e.history = e.history.slice(0, e.current + 1)),
    (e.visualIndex = Math.max(e.history.length, 0)));
  let i = e.history[e.history.length - 1],
    a = i?.key === t;
  if (((e.overlayStack = []), a && e.currentOverlay > -1))
    return { ...e, currentOverlay: -1, previousOverlay: e.currentOverlay };
  if (a) return;
  let o = e.containerVisualIndex[t],
    s = e.containerIsRemoved[t],
    c = i?.key && n.withMagicMotion ? gc(t, o, s, e.history) : !0;
  e.history.push({
    key: t,
    transition: n,
    visualIndex: c ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t],
  });
  let l = e.current + 1,
    u = e.current;
  for (let t in e.containerIndex)
    e.containerIndex[t] === l && (e.containerIndex[t] = mc(t, e.history));
  e.containerIndex[t] = l;
  let { containerVisualIndex: d, containerIsRemoved: f } = fc(e, t, c),
    p = hc(l, u, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: l,
    previous: u,
    containerVisualIndex: d,
    containerIsRemoved: f,
    transitionForContainer: p,
    previousTransition: null,
    currentOverlay: -1,
    historyItemId: e.historyItemId + 1,
    previousOverlay: e.currentOverlay,
  };
}
function lc(e) {
  let t = { ...e.containers },
    n = dc(e);
  if (n) return ((n.containers = t), n);
}
function uc(e) {
  let t = e.history[e.current + 1];
  if (!t) return;
  let { key: n, transition: r, component: i } = t,
    a = [...e.history],
    o = cc(e, n, r, i);
  if (o) return ((o.history = a), o);
}
function dc(e) {
  let t = e.history.slice(0, e.current + 1);
  if (t.length === 1) return;
  let n = t.pop();
  if (!n) return;
  let r = t[t.length - 1];
  (H(r, `The navigation history must have at least one component`),
    (e.containerIndex[r.key] = t.length - 1),
    t.every((e) => e.key !== n.key) && delete e.containers[n.key]);
  let i = e.current - 1,
    a = e.current,
    {
      containerIsRemoved: o,
      containerVisualIndex: s,
      previousTransition: c,
      visualIndex: l,
    } = pc(e, r, n),
    u = hc(i, a, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: i,
    previous: a,
    containerIsRemoved: o,
    containerVisualIndex: s,
    previousTransition: c,
    visualIndex: l,
    transitionForContainer: u,
  };
}
function fc(e, t, n) {
  let r = {
    containerVisualIndex: { ...e.containerVisualIndex },
    containerIsRemoved: { ...e.containerIsRemoved },
  };
  if (n) ((r.containerVisualIndex[t] = e.history.length - 1), (r.containerIsRemoved[t] = !1));
  else {
    let n = e.containerVisualIndex[t];
    for (let [t, i] of Object.entries(e.containerVisualIndex))
      n !== void 0 && i > n && (r.containerIsRemoved[t] = !0);
  }
  return r;
}
function pc(e, t, n) {
  let r = [t.key, n.key],
    i = e.history[e.history.length - 2],
    a = e.previousTransition === null ? null : { ...e.previousTransition },
    o = {
      containerIsRemoved: { ...e.containerIsRemoved },
      containerVisualIndex: { ...e.containerVisualIndex },
      previousTransition: a,
      visualIndex: e.visualIndex,
    };
  i && r.push(i.key);
  let s = e.containerVisualIndex[t.key],
    c = e.containerVisualIndex[n.key],
    l =
      (s !== void 0 && c !== void 0 && s <= c) ||
      (t.visualIndex !== void 0 && t.visualIndex < e.history.length - 1),
    u = t.visualIndex;
  return (
    l
      ? ((o.containerIsRemoved[n.key] = !0),
        (o.containerVisualIndex[t.key] = u === void 0 ? e.history.length - 1 : u))
      : ((o.visualIndex = e.visualIndex + 1), (o.containerVisualIndex[t.key] = e.visualIndex + 1)),
    n.transition.withMagicMotion && (o.previousTransition = n.transition || null),
    (e.containerIsRemoved[t.key] = !1),
    o
  );
}
function mc(e, t) {
  for (let n = t.length; n > t.length; n--) if (t[n]?.key === e) return n;
  return -1;
}
function hc(e, t, n, r, i) {
  let a = { ...i };
  for (let [i, o] of Object.entries(r)) {
    let r = _c(o, { current: e, previous: t, history: n });
    r && (a[i] = r);
  }
  return a;
}
function gc(e, t, n, r) {
  return n || t === void 0
    ? !0
    : t === 0
      ? !1
      : r.slice(t, r.length).some((t) => t.key === e)
        ? !0
        : !r.slice(0, t - 1).some((t) => t.key === e);
}
function _c(e, t) {
  let { current: n, previous: r, history: i } = t;
  if (!(e !== n && e !== r)) {
    if (e === n && n > r) {
      let t = i[e];
      return vc(`enter`, t?.transition.enter, t?.transition.animation);
    }
    if (e === r && n > r) {
      let t = i[e + 1];
      return vc(`exit`, t?.transition.exit, t?.transition.animation);
    }
    if (e === n && n < r) {
      let t = i[e + 1];
      return vc(`enter`, t?.transition.exit, t?.transition.animation);
    }
    if (e === r && n < r) {
      let t = i[e];
      return vc(`exit`, t?.transition.enter, t?.transition.animation);
    }
  }
}
function vc(e, t, n) {
  let r = {},
    i = {};
  return (
    sC.forEach((e) => {
      ((r[e] = nC[e]), (i[e] = { ...n, from: nC[e] }));
    }),
    t &&
      Object.keys(t).forEach((a) => {
        if (t[a] === void 0) return;
        let o = t[a],
          s = typeof t[a] == `string` ? `${Zb(nC)[a]}%` : Zb(nC)[a];
        ((Zb(r)[a] = e === `enter` ? s : o),
          (i[a] = { ...n, from: e === `enter` ? o : s, velocity: 0 }));
      }),
    { ...r, transition: { ...i } }
  );
}
function yc(e) {
  let t, n;
  return (
    e.current === -1 ? (n = e.history[e.previous]) : (t = e.history[e.current]),
    { currentOverlayItem: t, previousOverlayItem: n }
  );
}
function bc({ currentOverlayItem: e }) {
  return e?.transition?.exit;
}
function xc({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e?.transition?.animation
    ? e.transition.animation
    : t?.transition?.animation
      ? t.transition.animation
      : dC;
}
function Sc({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e ? e.transition.backfaceVisible : t?.transition?.backfaceVisible;
}
function Cc(e) {
  if (e.backdropColor) return e.backdropColor;
  if (e.overCurrentContext) return `rgba(4,4,15,.4)`;
}
function wc(e, t) {
  let { current: n, history: r } = t;
  if (e === n) {
    let t = r[e];
    return !t?.transition || t.transition.backfaceVisible;
  } else if (e < n) {
    let t = r[e + 1];
    return !t?.transition || t.transition.backfaceVisible;
  } else {
    let t = r[e];
    return !t?.transition || t.transition.backfaceVisible;
  }
}
function Tc(e, t) {
  let n = t.history[e];
  if (n) return n.transition.enter;
}
function Ec(e, t) {
  let { current: n, previous: r, history: i } = t;
  return (e === r && n > r) || (e === n && n < r)
    ? i[e + 1]?.transition?.backfaceVisible
    : i[e]?.transition?.backfaceVisible;
}
function Dc(e, t) {
  let { current: n, history: r } = t;
  if (e !== n)
    if (e < n) {
      let t = r[e + 1];
      if (t?.transition) return t.transition.exit;
    } else {
      let t = r[e];
      if (t?.transition) return t.transition.enter;
    }
}
function Oc(e, t) {
  let { current: n, previous: r, history: i } = t,
    a = r > n ? r : n;
  if (e < a) {
    let t = i[e + 1];
    if (t?.transition?.animation) return t.transition.animation;
  } else if (e !== a) {
    let t = i[e];
    if (t?.transition?.animation) return t.transition.animation;
  } else {
    let t = i[e];
    if (t?.transition.animation) return t.transition.animation;
  }
  return dC;
}
function kc(e, t, n) {
  let { current: r, previous: i, history: a } = t;
  return !!((n && a.length > 1) || (e !== i && e !== r) || r === i);
}
function Ac(e, t) {
  let { current: n, previous: r } = t;
  return e > n && e > r ? !1 : e === n;
}
function jc(e) {
  return f.Children.map(e.component, (t) => {
    if (!fo(t) || !uo(t) || !t.props) return t;
    let n = { style: t.props.style ?? {} },
      r = e?.transition?.position,
      i = !r || (r.left !== void 0 && r.right !== void 0),
      a = !r || (r.top !== void 0 && r.bottom !== void 0),
      o = `style` in t.props ? V(t.props.style) : !0;
    return (
      i && (`width` in t.props && (n.width = `100%`), o && (n.style.width = `100%`)),
      a && (`height` in t.props && (n.height = `100%`), o && (n.style.height = `100%`)),
      f.cloneElement(t, n)
    );
  });
}
function Mc(e, t) {
  if (e.goBackOnTapOutside !== !1) return t;
}
function Nc(e, t) {
  let n = ce(),
    r = _e();
  return E(uC, {
    ref: (e) => {
      if (t) {
        if (typeof t == `function`) {
          t(e);
          return;
        }
        t.current = e;
      }
    },
    ...e,
    resetProjection: n,
    skipLayoutAnimation: r,
    children: e.children,
  });
}
function Pc(e) {
  return V(e) || qe(e);
}
function Fc(e) {
  return !!e && mC in e && e[mC] === !0;
}
function Ic(e) {
  try {
    switch (e.type) {
      case `string`:
      case `collectionreference`:
      case `color`:
      case `date`:
      case `link`:
      case `boxshadow`:
      case `padding`:
      case `borderradius`:
      case `gap`:
      case `dimension`:
        return z(e.defaultValue) ? e.defaultValue : void 0;
      case `boolean`:
        return Je(e.defaultValue) ? e.defaultValue : void 0;
      case `enum`:
        return Ze(e.defaultValue)
          ? void 0
          : e.options.includes(e.defaultValue)
            ? e.defaultValue
            : void 0;
      case `fusednumber`:
      case `number`:
        return B(e.defaultValue) ? e.defaultValue : void 0;
      case `transition`:
        return V(e.defaultValue) ? e.defaultValue : void 0;
      case `border`:
        return V(e.defaultValue) ? e.defaultValue : void 0;
      case `font`:
      case `location`:
        return V(e.defaultValue) ? e.defaultValue : void 0;
      case `linkrelvalues`:
        return Ye(e.defaultValue) ? e.defaultValue : void 0;
      case `multicollectionreference`:
        return Ye(e.defaultValue) ? e.defaultValue : void 0;
      case `object`: {
        let t = V(e.defaultValue) ? e.defaultValue : {};
        return (V(e.controls) && Lc(t, e.controls), t);
      }
      case `array`:
        return Ye(e.defaultValue) ? e.defaultValue : void 0;
      case `file`:
      case `image`:
      case `richtext`:
      case `pagescope`:
      case `eventhandler`:
      case `changehandler`:
      case `segmentedenum`:
      case `responsiveimage`:
      case `componentinstance`:
      case `slot`:
      case `scrollsectionref`:
      case `customcursor`:
      case `cursor`:
      case `trackingid`:
      case `vectorsetitem`:
        return;
      default:
        return;
    }
  } catch {
    return;
  }
}
function Lc(e, t) {
  for (let n in t) {
    let r = t[n];
    if (!r) continue;
    let i = e[n];
    if (!Ze(i) || Fc(r)) continue;
    let a = Ic(r);
    Ze(a) || (e[n] = a);
  }
}
function Rc(e) {
  if (V(e.defaultProps)) return e.defaultProps;
  let t = {};
  return ((e.defaultProps = t), t);
}
function zc(e, t) {
  Pc(e) && Lc(Rc(e), t);
}
function Bc(e, t) {
  Object.assign(e, { [hC]: t });
}
function Vc(e, t, n) {
  (Object.assign(e, { propertyControls: t }), zc(e, t), n !== void 0 && Bc(e, n));
}
function Hc(e) {
  return e.propertyControls;
}
function Uc(e) {
  return xC in e;
}
function Wc(e, t) {
  if (!Uc(e)) return;
  let n = yb.getNumber(e.opacity);
  n !== 1 && (t.opacity = n);
}
function Gc(e) {
  let t = [];
  if (e && e.length) {
    let n = e.map((e) => `drop-shadow(${e.x}px ${e.y}px ${e.blur}px ${e.color})`);
    t.push(...n);
  }
  return t;
}
function Kc(e, t) {
  if (!e.shadows || e.shadows.length === 0) return;
  let n = e.shadows.map((e) => `${e.x}px ${e.y}px ${e.blur}px ${e.color}`).join(`, `);
  n && (t.textShadow = n);
}
function qc(e, t) {
  let n = [];
  (W(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    W(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    W(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    W(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    W(e.invert) && n.push(`invert(${e.invert / 100})`),
    W(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    W(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    W(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...Gc(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(` `)));
}
function Jc(e, t) {
  W(e.backgroundBlur) &&
    (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`);
}
function Yc(e, t) {
  (Jc(e, t), qc(e, t));
}
function Xc(e, t) {
  let n,
    r = (...r) => {
      (Vv.clearTimeout(n), (n = Vv.setTimeout(e, t, ...r)));
    };
  return (
    (r.cancel = () => {
      Vv.clearTimeout(n);
    }),
    r
  );
}
function Zc(...e) {
  return e.filter(Boolean).join(` `);
}
function Qc(e, t) {
  let n = {},
    r = {};
  for (let i in e) {
    let a = $c(i);
    if (a && t.has(a)) {
      n[a] = e[i];
      continue;
    }
    r[i] = e[i];
  }
  return [n, r];
}
function $c(e) {
  if (e.startsWith(EC)) return e.substr(DC);
}
function el(e, t, n) {
  let i = r.map(e, (e) => (T(e) ? a(e, t) : e));
  return n ? i : E(g, { children: i });
}
function tl(e) {
  let t = za(() => nl(e));
  return (t.useSetup(e), t.cloneAsElement);
}
function nl(e) {
  let t = { forwardedRef: e, childRef: null, ref: null };
  t.ref = rl(t);
  let n = (e, n) => {
      if (!t.forwardedRef && t.forwardedRef === e) {
        t.ref = n;
        return;
      }
      let r = !1;
      (t.childRef !== n && ((t.childRef = n), (r = !0)),
        t.forwardedRef !== e && ((t.forwardedRef = e), (r = !0)),
        r && (t.ref = rl(t)));
    },
    i = !1;
  function o(o, s) {
    if (i)
      throw ReferenceError(
        `useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle.`
      );
    return (
      (i = !0),
      r.count(o) > 1 && e && ((t.forwardedRef = void 0), (t.ref = t.childRef)),
      r.map(o, (e) => {
        if (T(e)) {
          let r = `ref` in e ? e.ref : void 0;
          n(t.forwardedRef, r);
          let i = qe(s) ? s(e.props) : s;
          return a(e, t.ref === r ? i : { ...i, ref: t.ref });
        }
        return e;
      })
    );
  }
  let s = function (e, t) {
    return E(g, { children: o(e, t) });
  };
  return (
    (s.cloneAsArray = o),
    {
      useSetup: (e) => {
        ((i = !1), n(e, t.childRef));
      },
      cloneAsElement: s,
    }
  );
}
function rl(e) {
  if (!e.forwardedRef) return e.childRef;
  let { forwardedRef: t, childRef: n } = e;
  return (e) => {
    (zs(n, e), zs(t, e));
  };
}
function il(e, t, n, r, i, a, o, s) {
  let c = f.Children.toArray(t),
    l = c[0];
  if (c.length !== 1 || !f.isValidElement(l))
    return (
      console.warn(`PropertyOverrides: expected exactly one React element for a child`, t),
      o(t, n)
    );
  let u = [],
    d = [];
  for (let [t] of Object.entries(r)) {
    if (t === i) continue;
    let n = e[t];
    if (!n || !cl(l.props, n)) {
      d.push(t);
      continue;
    }
    let r = sl([t], a);
    r.length && u.push({ variants: r, propOverrides: n });
  }
  if (u.length === 0) return o(l, n);
  let p = sl([i, ...d], a);
  p.length && u.unshift({ variants: p });
  let m = [];
  for (let { variants: e, propOverrides: t } of u) {
    if (s && !e.includes(s)) continue;
    let c = s ? `active-branch` : e.join(`+`),
      d = E(
        kC.Provider,
        {
          value: { primaryVariantId: i, variants: new Set(e) },
          children: o(l, t ? { ...n, ...t } : n),
        },
        c
      ),
      f = ol(e, a, r);
    (f.length
      ? (H(u.length > 1, `Must branch out when there are hiddenClassNames`),
        (d = E(
          `div`,
          { className: `${AC} ${f.join(` `)}`, suppressHydrationWarning: !0, children: d },
          c
        )))
      : H(u.length === 1, `Cannot branch out when hiddenClassNames is empty`),
      m.push(d));
  }
  return (
    H(!s || m.length === 1, `Must render exactly one branch when activeVariantId is given`),
    s ? m : [...m, E(`div`, { className: jC }, `property-overrides-separator`)]
  );
}
function al(e) {
  return e.split(`-`)[2];
}
function ol(e, t, n) {
  let r = [];
  for (let [i, a] of Object.entries(n)) {
    let n = t && !t.has(i);
    e.includes(i) || n || r.push(`hidden-${al(a)}`);
  }
  return r;
}
function sl(e, t) {
  return t ? e.filter((e) => t.has(e)) : e;
}
function cl(e, t) {
  for (let n of Object.keys(t)) if (!wt(e[n], t[n], !0)) return !0;
  return !1;
}
function ll(e, t, n) {
  return !n || !e ? t : { ...t, ...n[e] };
}
function ul(e) {
  return f.forwardRef(({ optimized: t, ...n }, r) => {
    let i = f.useContext(OC),
      a = f.useContext(kC)?.variants,
      o = n[zC];
    o && !En() && LC.setAll(o, a, t ? n : null, i);
    let s = VC(n);
    return E(e, { ref: r, ...n, ...s });
  });
}
function dl(e) {
  return z(e) || Array.isArray(e);
}
function fl(e) {
  return e in WC;
}
function pl(e, t) {
  let n = za(() => ({ values: UC(t ? e : void 0) }));
  return (
    f.useEffect(() => {
      if (!t)
        for (let e of HC) {
          let t = WC[e];
          Ze(t) || n.values[e].set(t);
        }
    }, [t]),
    n
  );
}
function ml(
  {
    loopEffectEnabled: e,
    loopRepeatDelay: t,
    loopTransition: n,
    loopRepeatType: r,
    loop: i,
    loopPauseOffscreen: a,
  },
  o
) {
  let c = I(),
    l = za(UC),
    d = M(!1),
    f = JC(),
    p = M(null),
    m = C(async () => {
      if (!i) return;
      let e = n || void 0,
        t = d.current && r === `mirror`,
        a = t ? WC : i,
        o = t ? i : WC;
      return (
        (d.current = !d.current),
        (p.current = Promise.all(
          HC.map((t) => {
            if (!(c && t !== `opacity`))
              return (
                l[t].jump(o[t] ?? WC[t]),
                new Promise((n) => {
                  let r = { ...e, onComplete: () => n() },
                    i = a[t] ?? o[t];
                  typeof i == `number` && Oe(l[t], i, r);
                })
              );
          })
        )),
        p.current
      );
    }, [i, r, n, c]),
    [g, _] = A(!1),
    v = M(!1),
    y = C(async () => {
      !e || !v.current || (await m(), await f(t ?? 0), y());
    }, [m, f, e, t]),
    b = C(() => {
      v.current || ((v.current = !0), u(() => _(!0)), y());
    }, [y]),
    x = C((e = !0) => {
      (HC.forEach((e) => {
        l[e].stop();
      }),
        HC.forEach((e) => {
          l[e].set(WC[e]);
        }),
        (d.current = !1),
        e && ((v.current = !1), u(() => _(!1))));
    }, []),
    S = e && i,
    w = C(() => {
      document.hidden ? x(!1) : v.current && ((v.current = !1), b());
    }, [b, x]);
  (h(() => {
    if (S)
      return (
        document.addEventListener(`visibilitychange`, w),
        () => {
          document.removeEventListener(`visibilitychange`, w);
        }
      );
  }, [S, w]),
    h(() => {
      (S && a) || (S ? b() : x());
    }, [b, x, a, S]),
    h(() => () => x(), [x]));
  let T = M(!1),
    E = C(async () => {
      p.current && (await p.current, !T.current && x());
    }, [x]);
  qS(
    o,
    C(
      (e) => {
        e.isIntersecting ? ((T.current = !0), b()) : ((T.current = !1), E());
      },
      [b, E]
    ),
    { enabled: S && a }
  );
  let D = g || !a;
  return s(() => ({ values: l, style: S && D ? GC : KC }), [S, D]);
}
function hl(e, t, n, r, i) {
  let a = n / 100 - 1;
  return (i ? (t - r) * a : 0) + -e * a;
}
function gl(e, t, n) {
  let { speed: r = 100, offset: i = 0, adjustPosition: a = !1, parallaxTransformEnabled: o } = e,
    s = f.useRef(null),
    c = I(),
    l = f.useCallback(
      (e) => (s.current === null || r === 100 ? 0 : hl(e, s.current, r, i, a)),
      [r, i, a]
    ),
    { scrollY: u } = Re(),
    d = be(u, l),
    p = ge(a && s.current === null ? `hidden` : n),
    m = ge(0),
    h = S(KS);
  return (
    Us(
      t,
      (e) => {
        if (e === null || !o) return;
        let t = Ws(h, `undefined`, e, null, (e) => {
          ((s.current = e.boundingClientRect.top),
            Ge.update(() => {
              (d.set(l(u.get())), a && p.set(n ?? `initial`));
            }),
            t());
        });
        return t;
      },
      [a, o]
    ),
    jt(() => {
      o && d.set(0);
    }),
    { values: { y: c || !o ? m : d }, style: o ? { ...GC, visibility: p } : KC }
  );
}
function _l(e) {
  return typeof e == `object` && !!e;
}
function vl(e) {
  if (_l(e)) return e?.transition;
}
function yl(e, t, n, r, i, a) {
  let o = vl(e);
  return Promise.all(
    HC.map(
      (s) =>
        new Promise((c) => {
          if (n && s !== `opacity`) return c();
          let l = t.values[s];
          l.stop();
          let u = _l(e) ? (e?.[s] ?? WC[s]) : WC[s];
          if ((he(u) && (u = u.get()), !B(u))) return c();
          let d = xe.get(r.current);
          d && d.setBaseTarget(s, u);
          let f;
          if (z(i) && !l?.hasAnimated && Vv.MotionHandoffAnimation) {
            let e = Vv.MotionHandoffAnimation(i, s, Ge);
            e && (f = e);
          }
          a ? l.set(u) : Oe(l, u, { ...o, velocity: 0, startTime: f, onComplete: () => c() });
        })
    )
  );
}
function bl(
  { initial: e, animate: t, exit: n, presenceInitial: r, presenceAnimate: i, presenceExit: a },
  o,
  c,
  l,
  u
) {
  let d = r ?? e,
    f = i ?? t,
    p = a ?? n,
    [m, h] = ve(),
    g = M({ lastPresence: !1, lastAnimate: f, hasMounted: !1, running: !1 }),
    _ = za(() => {
      let e = d ?? l;
      if (!V(e)) return { values: UC() };
      let t = {};
      for (let n in e) {
        let r = V(e) ? e[n] : void 0;
        B(r) && (t[n] = r);
      }
      return { values: UC(t) };
    });
  Us(
    o,
    (e) => {
      let { hasMounted: t } = g.current;
      if (t && f) return;
      let n = xe.get(e);
      if (n) {
        Object.assign(g.current, { hasMounted: !0 });
        for (let e in _.values) {
          if (!fl(e)) continue;
          let t = l?.[e];
          n.setBaseTarget(e, B(t) ? t : WC[e]);
        }
      }
    },
    [f]
  );
  let v = I();
  Us(o, (e) => {
    if (!c) {
      h?.();
      return;
    }
    if (e === null) return;
    if (m !== g.current.lastPresence) {
      (Object.assign(g.current, { lastPresence: m }),
        m
          ? d &&
            f &&
            (Object.assign(g.current, { running: !0 }),
            yl(f, _, v, o, u).then(() => Object.assign(g.current, { running: !1 })))
          : p
            ? (Object.assign(g.current, { running: !0 }),
              yl(p, _, v, o, u)
                .then(() => Object.assign(g.current, { running: !1 }))
                .then(() => h()))
            : h());
      return;
    }
    let { lastAnimate: t, running: n } = g.current;
    wt(f, t) ||
      !f ||
      (Object.assign(g.current, { lastAnimate: f }),
      yl(f, _, v, o, u, !n).then(() => Object.assign(g.current, { running: !1 })));
  });
  let y = c && f;
  return s(() => ({ values: _.values, style: y ? GC : KC }), [y]);
}
function xl(e, t) {
  let n = 0,
    r = e;
  for (; r && r !== t && r instanceof HTMLElement;) ((n += r.offsetTop), (r = r.offsetParent));
  return n;
}
function Sl(e, t = 0, n) {
  let r = [],
    i = [];
  for (let a = e.length; a >= 0; a--) {
    let { ref: o, offset: s } = e[a] ?? {};
    if (!o?.current) continue;
    let c = xl(o.current, document.documentElement) - ZC - (s ?? 0) - t,
      l = o.current?.clientHeight ?? 0,
      u = r[r.length - 1],
      d = Math.max(c + l, 0);
    (r.push(c),
      i.unshift(Math.max(c, 0), u === void 0 ? d : Math.min(d, Math.max(u - 1, 0))),
      n?.(a));
  }
  return i;
}
function Cl(e, t = 0) {
  return e < t ? `up` : `down`;
}
function wl(e, t, n = {}) {
  let { direction: r, target: i } = e ?? {},
    { repeat: a = !0, enabled: o = !0 } = n,
    s = At();
  f.useEffect(() => {
    if (!r || !o) return;
    let e,
      n = 0,
      s,
      c;
    return de((o, { y: l }) => {
      if ((!a && c === i) || l.current > l.scrollLength || l.current < 0) return;
      let u = Cl(l.current, e);
      e = l.current;
      let d = u !== s;
      if (((s = u), d)) n = l.current;
      else {
        if (Math.abs(l.current - n) < QC) return;
        let e = u === r ? i : void 0;
        (e !== c && t(e), (c = e));
      }
    });
  }, [s, r, a, i, o, t]);
}
function Tl(e, t, n) {
  let r = Sl(e, t),
    i = [...ew],
    a = r[0];
  if (!B(a)) return tw;
  if ((a > 1 && (r.unshift(0, a - 1), i.unshift(`initial`, `initial`)), n)) {
    let e = r[r.length - 1];
    if (!B(e)) return tw;
    (r.push(e + 1), i.push(`exit`));
  }
  return { inputRange: r, outputRange: i };
}
function El(e) {
  return {
    x: e?.x ?? WC.x,
    y: e?.y ?? WC.y,
    scale: e?.scale ?? WC.scale,
    opacity: e?.opacity ?? WC.opacity,
    transformPerspective: e?.transformPerspective ?? WC.transformPerspective,
    rotate: e?.rotate ?? WC.rotate,
    rotateX: e?.rotateX ?? WC.rotateX,
    rotateY: e?.rotateY ?? WC.rotateY,
    skewX: e?.skewX ?? WC.skewX,
    skewY: e?.skewY ?? WC.skewY,
    transition: e?.transition ?? void 0,
  };
}
function Dl({ opacity: e, targetOpacity: t, perspective: n, enter: r, exit: i, animate: a, ...o }) {
  return f.useMemo(
    () => ({
      initial: r ?? El({ ...o, opacity: e ?? t ?? 1, transformPerspective: n }),
      animate: a ?? El({ opacity: t }),
      exit: i ?? El(),
    }),
    [a, o, r, i, e, t, n]
  );
}
function Ol(e, t) {
  let n = I(),
    r = Dl(e),
    i = e.styleAppearEffectEnabled,
    a = pl(i ? r.initial : r.animate, i),
    o = f.useRef({
      isPlaying: !1,
      scheduledAppearState: void 0,
      lastAppearState: !e.styleAppearEffectEnabled,
    }),
    c = At(),
    l = f.useRef(),
    u = f.useCallback(async ({ transition: i, ...o }, s) => {
      let c = i ?? r.animate.transition ?? e.transition;
      await l.current;
      let u = xe.get(t.current);
      l.current = Promise.all(
        HC.map((e) => {
          s && a.values[e].set(r.initial[e] ?? WC[e]);
          let t = o[e] ?? WC[e];
          return (
            u && typeof t != `object` && u.setBaseTarget(e, t),
            new Promise((r) => {
              if (n && e !== `opacity`) (B(t) && a.values[e].set(t), r());
              else {
                let n = { restDelta: e === `scale` ? 0.001 : void 0, ...c, onComplete: () => r() };
                typeof t == `number` && Oe(a.values[e], t, n);
              }
            })
          );
        })
      );
    }, []),
    d = e.animateOnce && o.current.lastAppearState === !0;
  Ks(
    t,
    (e) => {
      let { isPlaying: t, lastAppearState: n } = o.current;
      if (t) {
        o.current.scheduledAppearState = e;
        return;
      }
      ((o.current.scheduledAppearState = void 0),
        (o.current.lastAppearState = e),
        n !== e && u(e ? r.animate : r.exit, e));
    },
    {
      enabled: !e.targets && e.styleAppearEffectEnabled && !e.scrollDirection && !d,
      animateOnce: !!e.animateOnce,
      threshold: { y: e.threshold },
    }
  );
  let p = e.targets && i && !e.scrollDirection;
  return (
    f.useEffect(() => {
      if (!p) return;
      let t = { initial: !0 },
        n = `initial`;
      return de((i, { y: a }) => {
        let { targets: o } = e;
        if (!o || !o[0] || (o[0].ref && !o[0].ref.current)) return;
        let { inputRange: s, outputRange: c } = Tl(
          o,
          (e.threshold ?? 0) * a.containerLength,
          !!e.exit
        );
        if (s.length === 0 || s.length !== c.length) return;
        let l = oe(a.current, s, c);
        if ((e.animateOnce && t[l]) || ((t[l] = !0), n === l)) return;
        n = l;
        let d = Zb(r)[l];
        d && u(d);
      });
    }, [c, p]),
    wl(e.scrollDirection, (e) => void u(e ?? r.animate), { enabled: i, repeat: !e.animateOnce }),
    jt(() => {
      if (i && !(!e.targets && !e.scrollDirection))
        for (let e of HC) a.values[e].set(r.initial?.[e] ?? WC[e]);
    }),
    s(() => ({ values: a.values, style: i ? GC : KC }), [i])
  );
}
function kl(e, t) {
  let n = f.useRef({});
  f.useEffect(() => {
    if (t !== void 0)
      for (let r of pv(e)) {
        let i = function () {
            let e = n.current[r];
            (e && e.stop(),
              (n.current[r] = Se({
                keyframes: [a.get(), s],
                velocity: a.getVelocity(),
                ...t,
                restDelta: 0.001,
                onUpdate: o,
              })));
          },
          a = e[r],
          o,
          s;
        a.attach((e, t) => ((s = e), (o = t), Ge.postRender(i), a.get()));
      }
  }, [JSON.stringify(t)]);
}
function Al(e, t) {
  let n = iw();
  return {
    inputRange: Sl(e, t, (t) => {
      let r = e[t - 1]?.target,
        i = e[t]?.target;
      for (let e of HC) n[e]?.unshift(r?.[e] ?? 0, i?.[e] ?? 0);
    }),
    effectKeyOutputRange: n,
  };
}
function jl(e) {
  let t = iw();
  for (let { target: n } of e) for (let e of HC) t[e]?.push(n[e]);
  return t;
}
function Ml(
  {
    transformTrigger: e,
    styleTransformEffectEnabled: t,
    transformTargets: r,
    spring: i,
    transformViewportThreshold: a = 0,
  },
  o
) {
  let s = I(),
    c = pl(rw(r, s), t),
    l = !t || !r,
    u = e === `onScrollTarget`,
    d = At();
  return (
    n(() => {
      if (!(l || !u))
        return de((e, { y: t }) => {
          if (!r[0] || (r[0].ref && !r[0].ref.current)) return;
          let { inputRange: n, effectKeyOutputRange: i } = Al(r, a * t.containerLength);
          if (n.length !== 0)
            for (let e of HC)
              (s && e !== `opacity`) ||
                (n.length === i[e].length &&
                  i[e][0] !== void 0 &&
                  c.values[e].set(oe(t.current, n, i[e])));
        });
    }, [s, u, a, r, l]),
    Us(
      o,
      (t) => {
        if (l || u || t === null) return;
        let n = jl(r);
        return de(
          (e, { y: t }) => {
            for (let e of HC)
              (s && e !== `opacity`) ||
                (aw.length === n[e].length &&
                  n[e][0] !== void 0 &&
                  c.values[e].set(oe(t.progress, aw, n[e])));
          },
          e === `onInView` ? { target: t ?? void 0, offset: [`start end`, `end end`] } : void 0
        );
      },
      [d, s, e, u, r, l]
    ),
    kl(c.values, i),
    jt(() => {
      if (l) return;
      let e = rw(r, s);
      for (let t of HC) c.values[t].set(e?.[t] ?? WC[t]);
    }),
    f.useMemo(() => ({ values: c.values, style: t ? GC : KC }), [t])
  );
}
function Nl(e, t, n) {
  return (!(e in n) && t in n) || n[e] === !0;
}
function Pl(e) {
  let t = {
    parallax: {},
    styleAppear: {},
    styleTransform: {},
    presence: { animate: e.animate, initial: e.initial, exit: e.exit },
    loop: {},
    forwardedProps: {},
    targetOpacityValue: e.__targetOpacity,
    withPerspective: e.__perspectiveFX,
    inSmartComponent: e.__smartComponentFX,
  };
  for (let n in e) {
    if (n === `__targetOpacity` || n === `__perspectiveFX` || n === `__smartComponentFX`) continue;
    let r = $c(n);
    if (r) {
      for (let i of sw)
        if (ow[i]?.has(r)) {
          t[i][r] = Zb(e)[n];
          break;
        }
    } else t.forwardedProps[n] = Zb(e)[n];
  }
  return (
    (t.parallax.parallaxTransformEnabled = Nl(`parallaxTransformEnabled`, `speed`, t.parallax)),
    (t.styleAppear.styleAppearEffectEnabled = Nl(
      `styleAppearEffectEnabled`,
      `animateOnce`,
      t.styleAppear
    )),
    t
  );
}
function Fl(e) {
  return V(e) && uw in e;
}
function Il(e, t) {
  if (!e || !V(e)) return t;
  for (let n in e) {
    let r = e[n];
    !he(r) || !fl(n) || (B(r.get()) && t[n].push(r));
  }
}
function Ll(e) {
  return z(e) || Array.isArray(e);
}
function Rl() {
  return f.useContext(fw);
}
function zl(e) {
  return (
    e instanceof Error &&
    (e.message.includes(`A component suspended while responding to synchronous input.`) ||
      e.message.includes(`Minified React error #426`))
  );
}
function Bl() {
  if (N === void 0 || vw)
    return E(`div`, {
      hidden: !0,
      dangerouslySetInnerHTML: { __html: `<!-- SuspenseThatPreservesDOM fallback rendered -->` },
    });
  throw bw;
}
function Vl({ children: e }) {
  return S(Sw) ? E(g, { children: e }) : E(b, { fallback: xw, children: e });
}
function Hl() {
  return E(`div`, {
    hidden: !0,
    dangerouslySetInnerHTML: { __html: `<!-- Code boundary fallback rendered -->` },
  });
}
function Ul(e, t) {
  if (!ev || Math.random() > 0.01) return;
  let n = e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    r = t?.componentStack;
  on(`published_site_load_recoverable_error`, {
    message: String(e),
    stack: n,
    componentStack: n ? void 0 : r,
  });
}
function Wl(...e) {
  console.error(...e);
}
function Gl() {
  return J.current() !== J.canvas;
}
function Kl({ getErrorMessage: e, fallback: t, children: n }) {
  return Gl()
    ? E(ql, { fallback: t, children: E(ww, { fallback: t, getErrorMessage: e, children: n }) })
    : n;
}
function ql({ children: e, fallback: t = Cw }) {
  return N === void 0 ? E(b, { fallback: t, children: e }) : E(Vl, { children: e });
}
function Jl() {
  return f.useContext(Ew);
}
function Yl() {
  let e = Jl();
  return f.useMemo(() => {
    if (!e) return;
    let t = e;
    for (; t.parent && t.parent.level > 0;) t = t.parent;
    return t;
  }, [e]);
}
function Xl({ children: e, scopeId: t, nodeId: n }) {
  let r = Jl(),
    i = f.useMemo(
      () => ({ level: (r?.level ?? 0) + 1, scopeId: t, nodeId: n, parent: r }),
      [t, n, r]
    );
  return E(Ew.Provider, { value: i, children: e });
}
function Zl(e, t) {
  return `${Dw}${e}:${t}`;
}
function Ql(e, t) {
  return eu(`component`, e, t);
}
function $l(e, t) {
  return eu(`override`, e, t);
}
function eu(e, t, n) {
  return `A code ${e} crashed while rendering due to the error above. To find and fix it, open the project in the editor \u2192 open Quick Actions (press Cmd+K or Ctrl+K) \u2192 paste this: ${Zl(t, n)} \u2192 click \u201CShow Layer\u201D.`;
}
function tu(e, t, n, r, i, a) {
  let o = ru(e, t, n, a);
  return (o && !i && r) || (o && i);
}
function nu(e, t, n, r) {
  return ru(e, t, n, r);
}
function ru(e, t, n, r) {
  return !!(Ze(n) || (n === 1 && r && e === t));
}
function iu(e, t, n, r, i, a) {
  let o = Jl();
  if (Ze(t) || Ze(n)) return E(Tw, { children: e });
  let { disableCustomCode: s } = gw();
  return s && r
    ? E(`div`, {
        style: {
          padding: `12px 16px`,
          borderWidth: 1,
          borderRadius: 6,
          borderStyle: `solid`,
          borderColor: `rgba(149, 149, 149, 0.15)`,
          backgroundColor: `rgba(149, 149, 149, 0.1)`,
          fontSize: 12,
          color: `#a5a5a5`,
        },
        children: `Code component disabled`,
      })
    : (tu(t, o?.scopeId, o?.level, r ?? !1, i ?? !1, a ?? !1) &&
        (e = E(Kl, { getErrorMessage: Ql.bind(null, t, n), fallback: null, children: e })),
      i && (e = E(Xl, { scopeId: t, nodeId: n, children: e })),
      e);
}
function au() {
  if (Aw !== void 0 || N === void 0) return;
  let e = Vv.matchMedia(`(any-hover: hover)`);
  ((Aw = e.matches),
    e.addEventListener(`change`, function (e) {
      let t = e.matches;
      if (t !== Aw) {
        Aw = t;
        for (let e of jw) e();
      }
    }));
}
function ou() {
  return (au(), su());
}
function su() {
  return Aw ?? !1;
}
function cu(e) {
  return (
    jw.add(e),
    au(),
    () => {
      jw.delete(e);
    }
  );
}
function lu(e = !1) {
  let [t, n] = A(e);
  return (
    Uy(function () {
      function e(e = !0) {
        let t = su();
        e ? u(() => n(t)) : n(t);
      }
      let t = cu(e);
      return (e(!1), t);
    }, []),
    t
  );
}
function uu(e, t, n) {
  let r = {};
  for (let [, i] of e)
    for (let e of i) {
      let i = r[e] ?? t[e] ?? n[e];
      i && (r[e] = i);
    }
  return r;
}
function du(e) {
  return !(!e || e.placement || e.alignment);
}
function fu(e) {
  switch (e) {
    case `start`:
      return `0%`;
    case `center`:
      return `-50%`;
    case `end`:
      return `-100%`;
    default:
      U(e);
  }
}
function pu(e, t = `center`) {
  switch (e) {
    case `top`:
      return `${fu(t)}, -100%`;
    case `right`:
      return `0%, ${fu(t)}`;
    case `bottom`:
      return `${fu(t)}, 0%`;
    case `left`:
      return `-100%, ${fu(t)}`;
    default:
      return `-50%, -50%`;
  }
}
function mu(e, t) {
  let n = document.elementFromPoint(e, t);
  for (; n;) {
    if (n === document.body) return;
    let e = n.getAttribute(`data-framer-cursor`);
    if (e) return e;
    if (n.hasAttribute(Rw)) {
      let e = n.getAttribute(Rw);
      ((n = n.parentElement), e && (n = document.getElementById(e) ?? n));
    } else n = n.parentElement;
  }
}
function hu(e) {
  let { registerCursors: t } = S(Mw),
    r = za(() => e),
    i = j();
  n(() => t(r, i), [t, i]);
}
function gu(e) {
  return !!(e && typeof e == `object` && Bw in e);
}
function _u(e) {
  return `${e.scopeId}:${e.nodeId}:${e.furthestExternalComponent?.scopeId}:${e.furthestExternalComponent?.nodeId}`;
}
function vu() {
  return J.current() === J.canvas;
}
function yu(e) {
  return e !== void 0 && !!(e.startsWith(`#`) || e.startsWith(`/`) || e.startsWith(`.`));
}
function bu(e, t) {
  try {
    return !!new URL(e).protocol;
  } catch {}
  return t;
}
function xu(e, t, n, r) {
  if (z(e)) {
    let i = yu(e);
    if (!t.routes || !t.getRoute || !n || !i) return;
    let [a] = e.split(`#`, 2);
    if (a === void 0) return;
    let [o] = a.split(`?`, 2);
    if (o === void 0) return;
    try {
      let { routeId: e } = Oi(t.routes, o, o === ``, r);
      return t.getRoute(e);
    } catch {
      return;
    }
  }
  let { webPageId: i } = e;
  return t.getRoute?.(i);
}
function Su(e) {
  return z(e) && e.startsWith(`data:${qw}`);
}
function Cu(e) {
  if (Su(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(qw.length),
        r = t.searchParams,
        i = r.has(Uw) ? r.get(Uw) : void 0,
        a,
        o = r.get(Ww),
        s = r.get(Gw),
        c = r.get(Kw);
      return (
        o &&
          s &&
          c &&
          (a = {
            collection: o,
            collectionItemId: s,
            pathVariables: Object.fromEntries(new URLSearchParams(c).entries()),
          }),
        { target: n === `none` ? null : n, element: i === `none` ? void 0 : i, collectionItem: a }
      );
    } catch {
      return;
    }
}
function wu(e, t, n) {
  let r = t.getAttribute(`data-framer-page-link-target`),
    i,
    a;
  if (r) {
    i = t.getAttribute(`data-framer-page-link-element`) ?? void 0;
    let e = t.getAttribute(`data-framer-page-link-path-variables`);
    e && (a = Object.fromEntries(new URLSearchParams(e).entries()));
  } else {
    let e = t.getAttribute(`href`);
    if (!e) return !1;
    let n = Cu(e);
    if (!n?.target) return !1;
    ((r = n.target), (i = n.element ?? void 0), (a = n.collectionItem?.pathVariables));
  }
  let o = i ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return (e(r, i, Object.assign({}, n, a), o), !0);
}
function Tu(e) {
  if (!Su(e)) return e;
  let t = Cu(e);
  if (!t) return;
  let { target: n, element: r, collectionItem: i } = t;
  if (n) return { webPageId: n, hash: r ?? void 0, pathVariables: Eu(i) };
}
function Eu(e) {
  if (!e) return;
  let t = {};
  for (let n in e.pathVariables) {
    let r = e.pathVariables[n];
    r && (t[n] = r);
  }
  return t;
}
function Du(e, t, n, i, a, o) {
  let c = S(Jw),
    l = Yl(),
    u = s(() => ({ scopeId: t, nodeId: n, furthestExternalComponent: l }), [t, n, l]),
    d = Dt(),
    f = kt(),
    { locales: p } = qn(),
    m = s(() => {
      let e = gu(i) ? i : Tu(i);
      if (e) return xu(e, d, f, p);
    }, [f, i, d, p]),
    h = !!(!vu() && c?.nodeId && u.nodeId),
    g = C(
      (e) => {
        if (a.href) {
          if ((e.preventDefault(), e.stopPropagation(), Mn(e))) {
            Au(a.href, ``, `_blank`);
            return;
          }
          m ? a.navigate?.() : Au(a.href, a.rel, a.target);
        }
      },
      [a, m]
    ),
    v = C(
      (e) => {
        a.href && (e.preventDefault(), e.stopPropagation(), Au(a.href, ``, `_blank`));
      },
      [a]
    ),
    y = C(
      (e) => {
        a.href &&
          e.key === `Enter` &&
          (e.preventDefault(),
          e.stopPropagation(),
          m ? a.navigate?.() : Au(a.href, a.rel, a.target));
      },
      [a, m]
    );
  Us(
    o,
    (e) => {
      e !== null && h && (e.dataset.hydrated = `true`);
    },
    [h]
  );
  let b = e;
  return (
    h &&
      (r.forEach(e, (e) => {
        ku(e) &&
          (H(
            Ou(c),
            "outerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          H(
            Ou(u),
            "innerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          Hw.collectNestedLink(c, u));
      }),
      (b = r.map(e, (e) => {
        if (!ku(e)) return e;
        let t = ju(e.type),
          { children: n, ...r } = e.props,
          i = {
            ...r,
            "data-nested-link": !0,
            role: `link`,
            tabIndex: 0,
            onClick: g,
            onAuxClick: v,
            onKeyDown: y,
            as: r.as && ju(r.as),
          },
          a = `ref` in e ? e.ref : void 0;
        return _(t, { ...i, ref: a }, n);
      }))),
    E(Jw.Provider, { value: u, children: b })
  );
}
function Ou(e) {
  return !Ze(e?.nodeId);
}
function ku(e) {
  return T(e) && (ju(e.type) !== e.type || ju(e.props.as) !== e.props.as);
}
function Au(e, t, n) {
  let r = document.createElement(`a`);
  ((r.href = e),
    t && (r.rel = t),
    n && (r.target = n),
    document.body.appendChild(r),
    r.click(),
    r.remove());
}
function ju(e) {
  return e === `a` ? `span` : Ue(e) && R(e) === `a` ? F.span : e;
}
function Mu(e) {
  $w = e;
}
function Nu() {
  return $w;
}
function Pu(e, t) {
  return e instanceof HTMLAnchorElement
    ? e
    : e instanceof Element
      ? e === t
        ? null
        : Pu(e.parentElement, t)
      : null;
}
function Fu({ children: e }) {
  return E(Vl, { children: e });
}
function Iu(e) {
  return D(function (t, n) {
    return E(Fu, { children: E(e, { ...t, ref: n }) });
  });
}
function Lu(e, t, n, r, i, a) {
  let { webPageId: o, hash: s, pathVariables: c, hashVariables: l } = n;
  return zu(e, t, o, s, a, c, l, i, r);
}
function Ru(e, t, n, r) {
  if (!(!e.routes || !e.getRoute) && yu(t))
    try {
      let [i, a] = t.split(`#`, 2);
      H(i !== void 0, `A href must have a defined pathname.`);
      let [o] = i.split(`?`, 2);
      H(o !== void 0, `A href must have a defined pathname.`);
      let s = o === ``,
        { routeId: c, pathVariables: l, localeId: u } = Oi(e.routes, o, s, r),
        d = e.getRoute(c);
      if (d)
        return {
          routeId: c,
          route: d,
          href: t,
          elementId: a,
          pathVariables: Object.assign({}, n, l),
          locale: u ? r?.find(({ id: e }) => e === u) : void 0,
        };
    } catch {}
}
function zu(e, t, n, r, i, a, o, s, c) {
  let l = { ...i, ...a, ...s?.path },
    u = { ...i, ...o, ...s?.hash },
    d = e.getRoute?.(n),
    f = ai(d, {
      currentRoutePath: t?.path,
      currentRoutePathLocalized: t?.pathLocalized,
      currentPathVariables: t?.pathVariables,
      hash: r,
      pathVariables: l,
      hashVariables: u,
      preserveQueryParams: e.preserveQueryParams,
      siteCanonicalURL: e.siteCanonicalURL,
      localeId: c?.id,
    });
  return {
    routeId: n,
    route: d,
    href: f,
    elementId: f.split(`#`, 2)[1],
    pathVariables: l,
    locale: c ?? void 0,
  };
}
function Bu() {
  let e = S(tT),
    t = kt()?.pathVariables;
  return e || t;
}
function Vu(e, { webPageId: t, hash: n, pathVariables: r }, i) {
  if (t !== e.id || n) return !1;
  if (e.path && e.pathVariables) {
    let t = Object.assign({}, i, r);
    for (let [, n] of e.path.matchAll(eT)) if (!n || e.pathVariables[n] !== t[n]) return !1;
  }
  return !0;
}
function Hu() {
  return !!Ii(`ss-only-routes`);
}
function Uu(e) {
  if (N === void 0) return;
  let t = N.location.href,
    n;
  try {
    n = new URL(e, t);
  } catch {
    return;
  }
  return ((n.hash = ``), n);
}
function Wu(e) {
  return Fi(`rewrite`, e)?.description === `external`;
}
function Gu() {
  if (!gw().checkServerSideRouter) return !1;
  if (aT === void 0) {
    let e = Hu();
    ((oT = !e && wn() && Dn() < 16.4), (aT = e || oT));
  }
  return aT;
}
function Ku(e, t) {
  if (e.type === `opaqueredirect` || !e.ok) return { decision: `server` };
  let n = e.headers.get(`Framer-Location`);
  if (n)
    try {
      return { decision: `server`, redirectUrl: new URL(n, t).href };
    } catch {
      return { decision: `server` };
    }
  let r = e.headers.get(`Framer-Site-Id`);
  return r === null
    ? { decision: Wu(e.headers.get(`server-timing`)) ? `server` : `client` }
    : { decision: r === Nu() ? `client` : `server` };
}
async function qu(e) {
  let t = await fetch(e, {
    method: `HEAD`,
    redirect: `manual`,
    credentials: `same-origin`,
    headers: { "Framer-Navigation": `true` },
  });
  if (
    (oT &&
      t.type !== `opaqueredirect` &&
      t.status !== 0 &&
      t.ok &&
      !t.headers.has(`Framer-Location`) &&
      ((oT = !1), Fi(`ss-only-routes`, t.headers.get(`server-timing`)) || (aT = !1)),
    t.status >= 500)
  )
    throw Error(`Transient response status ${t.status}`);
  return Ku(t, e);
}
function Ju(e, t) {
  nT.has(e) && nT.set(e, t);
}
async function Yu(e) {
  await _n(rT);
  try {
    Ju(e, await qu(e));
  } catch {
    nT.delete(e);
  }
}
async function Xu(e) {
  try {
    let t = await qu(e);
    return (Ju(e, t), t);
  } catch {
    return (Yu(e), { decision: `server` });
  }
}
function Zu(e) {
  if (!Gu()) return;
  let t = Uu(e);
  if (!t || t.origin !== N.location.origin) return;
  let n = t.href;
  nT.has(n) || nT.set(n, Xu(n));
}
function Qu(e) {
  let t = Uu(e);
  if (!t) return;
  let n = nT.get(t.href);
  return n && !rt(n) ? n : void 0;
}
async function $u(e) {
  let t = Uu(e);
  if (!t) return;
  let n = nT.get(t.href);
  if (n) return rt(n) ? Promise.race([n, _n(iT).then(() => void 0)]) : n;
}
function ed() {
  let e = d.connection || d.mozConnection || d.webkitConnection || {},
    t = d.deviceMemory && d.deviceMemory > lT,
    n,
    r,
    i;
  function a() {
    ((n = e.effectiveType || ``),
      (r = e.saveData || n.includes(`2g`)),
      (i = n === `3g` || t ? uT : dT));
  }
  (e.addEventListener?.(`change`, a), a());
  let o = new IntersectionObserver(l, { threshold: cT }),
    s = 0;
  async function c(e, t) {
    if (r) return;
    Zu(e.navigationUrl);
    let { id: n, preload: i } = e,
      a = mT.get(n);
    if (!a?.size || pT.has(n)) return;
    (++s, pT.add(n));
    let c = i()?.catch(() => {});
    (o.unobserve(t), fT.delete(t));
    for (let e of a) (o.unobserve(e), fT.delete(e));
    (a.clear(), mT.delete(n), await c, --s);
  }
  function l(e) {
    for (let t of e) {
      let e = t.target,
        n = fT.get(e);
      if (!n || pT.has(n.id)) {
        (o.unobserve(e), fT.delete(e));
        continue;
      }
      let r = n.id,
        a = mT.get(r),
        l = mT.get(r)?.size ?? 0;
      if (t.isIntersecting) {
        if (s >= i) continue;
        (a ? a.add(e) : mT.set(r, new Set([e])), setTimeout(() => c(n, e), sT));
      } else (a && a.delete(e), l <= 1 && mT.delete(r));
    }
  }
  return (e, t, n, r) => {
    if (!pT.has(n))
      return (
        fT.set(e, { id: n, preload: t, navigationUrl: r }),
        o.observe(e),
        () => {
          (fT.delete(e), o.unobserve(e));
        }
      );
  };
}
function td(e, t) {
  let n = yu(e),
    r = {
      href: e === `` || bu(e, n) ? e : `https://${e}`,
      target: nd(t?.openInNewTab, n),
      rel: n ? void 0 : t?.rel,
    };
  return (
    t?.preserveParams && ((r.href = zn(r.href ?? e)), (r[`data-framer-preserve-params`] = !0)),
    t?.trackLinkClick &&
      (r.onClick = () => {
        t.trackLinkClick(e);
      }),
    r
  );
}
function nd(e, t) {
  return e === void 0 ? (t ? void 0 : `_blank`) : e ? `_blank` : void 0;
}
function rd(e, t) {
  console.warn(
    ot(`Failed to resolve slug: ${e instanceof Error ? e.message : (t ?? `Unknown error`)}`)
  );
}
function id(e, t, n) {
  try {
    let r = t?.get(e.collectionId);
    if (!r)
      return rd(void 0, `Couldn't find collection utils for collection id: "${e.collectionId}"`);
    let i = r.getSlugByRecordId(e.collectionItemId, n ?? void 0);
    return rt(i) ? i.catch(rd) : i;
  } catch (e) {
    rd(e);
  }
}
async function ad(e, t, n, r) {
  async function i(e) {
    if (!e) return {};
    let t = {};
    for (let i in e) {
      let a = e[i];
      H(a, `unresolvedSlug should be defined`);
      let o = id(a, r, n),
        s = rt(o) ? await o : o;
      s && (t[i] = s);
    }
    return t;
  }
  let [a, o] = await Promise.allSettled([i(e), i(t)]);
  return {
    path: a.status === `fulfilled` ? a.value : void 0,
    hash: o.status === `fulfilled` ? o.value : void 0,
  };
}
function od(e, t, n, r, i = []) {
  function a(e) {
    if (!e) return;
    let t = {};
    for (let a in e) {
      let o = e[a];
      if (!o) continue;
      let s = id(o, r, n);
      rt(s) ? i.push(s) : s && (t[a] = s);
    }
    return t;
  }
  let o = { path: a(e), hash: a(t) };
  return i.length > 0 ? Promise.allSettled(i) : o;
}
function sd() {
  let e = gn();
  return C((t, n, r, i = []) => od(t, n, r, e, i), [e]);
}
function cd({ nodeId: e, clickTrackingId: t, router: n, href: r, activeLocale: i }) {
  let a = gn();
  return C(
    async (o) => {
      if (!n.pageviewEventData?.current) return;
      let s =
          n.pageviewEventData.current instanceof Promise
            ? await n.pageviewEventData.current
            : n.pageviewEventData.current,
        c = gu(r) ? r : Tu(r);
      if (!gu(c))
        return on(
          `published_site_click`,
          {
            ...s,
            href: o ? ld(o) : null,
            nodeId: e ?? null,
            trackingId: t || null,
            targetRoutePath: null,
            targetWebPageId: null,
            targetCollectionItemId: null,
          },
          `eager`
        );
      let l = c.webPageId,
        u = n?.getRoute?.(l),
        d = u?.path ?? null,
        f = null;
      if (u?.collectionId && c.pathVariables) {
        let e = a?.get(u.collectionId);
        if (!e) return;
        let [t] = Object.values(c.pathVariables);
        if (z(t)) {
          let n = e.getRecordIdBySlug(t, i || void 0);
          f = (rt(n) ? await n : n) ?? null;
        }
      }
      return on(
        `published_site_click`,
        {
          ...s,
          href: o ? ld(o) : null,
          nodeId: e ?? null,
          trackingId: t ?? null,
          targetRoutePath: d,
          targetWebPageId: l,
          targetCollectionItemId: f,
        },
        `eager`
      );
    },
    [e, t, n, r, i, a]
  );
}
function ld(e) {
  try {
    let t = new URL(e, Vv.document.baseURI);
    return t.origin === Vv.location.origin ? t.pathname + t.search + t.hash : t.href;
  } catch {
    return e;
  }
}
function ud(e, t, n, r, i, a, o) {
  (n(), e.navigate?.(t, r, i, a, o));
}
function dd(e, t, n) {
  return async (r) => {
    let i = Mn(r),
      a = Pu(r.target),
      o = !a || a.getAttribute(`target`) === `_blank`,
      s = !i && !o,
      c = () => void t(e);
    if (!s) {
      (await _y({
        priority: `user-blocking`,
        ensureContinueBeforeUnload: !0,
        continueAfter: `paint`,
      }),
        c());
      return;
    }
    (r.preventDefault(), n(c));
  };
}
function fd(e, t, n) {
  return async (r) => {
    let i = await pd(t);
    if (i.decision === `client`) {
      n(r);
      return;
    }
    md(t ?? e, r, i.redirectUrl);
  };
}
async function pd(e) {
  return !e || !Gu()
    ? { decision: `client` }
    : Qu(e) || (Zu(e), (await $u(e)) ?? { decision: `server` });
}
async function md(e, t, n) {
  (await _y({ priority: `user-blocking`, ensureContinueBeforeUnload: !0, continueAfter: `paint` }),
    t?.(),
    N.location.assign(hd(e, n)));
}
function hd(e, t) {
  if (!t) return e;
  try {
    let n = new URL(e, N.location.href),
      r = new URL(t);
    return (n.hash && !r.hash && (r.hash = n.hash), r.href);
  } catch {
    return t;
  }
}
function gd(e) {
  let t = ni(e);
  if (t && N.location.pathname === t) {
    let e = new URL(N.location.href);
    return ((e.pathname = `${t}/`), e.href);
  }
  return N.location.href;
}
function _d(e, t, n) {
  if (t || N === void 0) return;
  let r = gd(n),
    i;
  try {
    i = new URL(e, r);
  } catch {
    return;
  }
  let a = new URL(r);
  if (i.origin === a.origin && !(i.pathname === a.pathname && i.search === a.search)) return i.href;
}
function vd(e, t, n, r, i, a, o, s) {
  if (!n) return td(e, r);
  let c = Ru(t, e, s, o);
  if (!c) return td(e, r);
  let { routeId: l, route: u, elementId: d, pathVariables: f, locale: p } = c;
  if (!u) return td(e, r);
  let m = ai(u, {
      currentRoutePath: n.path,
      currentRoutePathLocalized: n.pathLocalized,
      currentPathVariables: n.pathVariables,
      hash: d,
      pathVariables: f,
      preserveQueryParams: t.preserveQueryParams && !tv,
      siteCanonicalURL: t.siteCanonicalURL,
      localeId: a,
    }),
    h = nd(r.openInNewTab, !0),
    g = h === `_blank`,
    _ = _d(m, g, t.siteCanonicalURL),
    v = { pathVariables: f, locale: p },
    y = fd(m, _, (e) =>
      ud(
        t,
        l,
        () =>
          i(l, v, { priority: `user-blocking`, yieldBeforePreload: !1, shouldLoadRouteData: !g }),
        d,
        f,
        r.smoothScroll,
        e
      )
    );
  return {
    href: m,
    target: h,
    onClick: dd(m, r.trackLinkClick, y),
    navigate: y,
    "data-framer-page-link-current":
      (n && Vu(n, { webPageId: l, hash: d, pathVariables: f }, s)) || void 0,
    preload: () =>
      i(l, v, { priority: `background`, yieldBeforePreload: !0, shouldLoadRouteData: !g }),
    _routeId: l,
    _pathVariables: f,
    _locale: p,
    _navigationUrl: _,
  };
}
function yd(e, t, n) {
  let r = bd(e.style, t.style),
    i = { ...e, ...t, ...(r && { style: r }), ref: n },
    { onTap: a, onClick: o } = t;
  if (!a && !o) return i;
  let { onClick: s, onTap: c } = e;
  return {
    ...i,
    onClick:
      o || s
        ? (e) => {
            (qe(s) && s?.(e), o?.(e));
          }
        : void 0,
    onTap:
      a || c
        ? (e, t) => {
            (qe(c) && c?.(e, t), a?.(e, t));
          }
        : void 0,
  };
}
function bd(e, t) {
  let n = V(e) ? e : void 0,
    r = n && !Xe(n),
    i = t && !Xe(t);
  if (!(!r && !i)) return { ...n, ...t };
}
function xd(e, t, n) {
  if (!(t && bn())) return e;
  let { onClick: r, ...i } = e;
  return r ? (n ? { ...i, onTap: r, onClick: Sd } : { ...i, onTap: r }) : e;
}
function Sd(e) {
  let t = Pu(e.target);
  !t || t.getAttribute(`target`) === `_blank` || e.preventDefault();
}
function Cd(e, t, n, r, i, a) {
  let o = gu(e) ? e : Tu(e);
  if (!gu(o)) return z(e) ? td(e).href : void 0;
  if (!t.getRoute || !t.currentRouteId) return;
  let s = t.getRoute(t.currentRouteId),
    {
      webPageId: c,
      hash: l,
      pathVariables: u,
      hashVariables: d,
      unresolvedHashSlugs: f,
      unresolvedPathSlugs: p,
    } = o,
    m = t.getRoute(c),
    h = p || f ? a?.(p, f) : void 0;
  if (rt(h)) return;
  let g = Object.assign({}, t.currentPathVariables, n, u, h?.path),
    _ = Object.assign({}, t.currentPathVariables, n, d, h?.hash);
  return ai(m, {
    currentRoutePath: s?.path,
    currentRoutePathLocalized: s?.pathLocalized,
    currentPathVariables: t.currentPathVariables,
    hash: l,
    pathVariables: g,
    hashVariables: _,
    relative: !1,
    preserveQueryParams: t.preserveQueryParams,
    onlyHash: r,
    siteCanonicalURL: t.siteCanonicalURL,
    localeId: i?.id,
    localeSlug: i?.slug,
  });
}
function wd() {
  return function () {
    async function e(e) {
      let t = new TextEncoder().encode(e),
        n = await crypto.subtle.digest(`SHA-256`, t);
      return Array.from(new Uint8Array(n))
        .map((e) => e.toString(16).padStart(2, `0`))
        .join(``);
    }
    function t(e) {
      let t = ``;
      for (let n = 0; n < e; n++)
        t += `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`.charAt(
          Math.floor(Math.random() * 62)
        );
      return t;
    }
    addEventListener(`message`, async (n) => {
      let { salt: r, difficulty: i, tokenLength: a, maxTime: o } = n.data,
        s = `0`.repeat(i),
        c = performance.now(),
        l = !0;
      for (; l;) {
        if (performance.now() - c > o) {
          ((l = !1), postMessage({ success: !1 }));
          return;
        }
        let n = t(a),
          i = `${Date.now()}:${n}`,
          u = await e(r + i);
        if (u.startsWith(s)) {
          postMessage({ success: !0, secret: i, hash: u });
          return;
        }
      }
    });
  }.toString();
}
async function Td() {
  return new Promise((e, t) => {
    let n = URL.createObjectURL(new Blob([`(`, wd(), `)()`], { type: `application/javascript` })),
      r = new Worker(n);
    ((r.onmessage = (t) => {
      (r.terminate(),
        URL.revokeObjectURL(n),
        t.data.success ? e({ secret: t.data.secret, hash: t.data.hash }) : e(void 0));
    }),
      (r.onerror = (e) => {
        (r.terminate(), URL.revokeObjectURL(n), t(e));
      }),
      r.postMessage({ salt: _T, difficulty: vT, tokenLength: yT, maxTime: bT }));
  });
}
function Ed(e) {
  let t = new Set();
  for (let n of e.elements)
    !Dd(n) || n.disabled || !n.name || n.name.startsWith(xT) || t.add(n.name);
  return Array.from(t);
}
function Dd(e) {
  return (
    e instanceof HTMLSelectElement ||
    e instanceof HTMLTextAreaElement ||
    (e instanceof HTMLInputElement &&
      ![`file`, `submit`, `reset`, `button`, `image`].includes(e.type))
  );
}
function Od(e, t) {
  let n = Array.from(t.keys()).filter((t) => !e.includes(t));
  return [...e, ...n].map(encodeURIComponent).join(`,`);
}
function kd(e, t) {
  try {
    let n = t.cookie.match(`(^|;) ?framerFormsUTMTags=([^;]*)(;|$)`);
    if (n !== null && n[2]) {
      let t = JSON.parse(decodeURIComponent(n[2]));
      if (!t || typeof t != `object`) return;
      [`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `gclid`].forEach(
        (n) => {
          typeof t[n] == `string` && e.append(n, t[n]);
        }
      );
    }
  } catch {}
}
function Ad() {
  let e = f.useContext(PT),
    t = f.useMemo(
      () =>
        CT.map((e) => ({
          inputRef: f.createRef(),
          originalName: e,
          methodsUsed: { setAttribute: !1, valueProperty: !1 },
        })),
      []
    );
  return {
    states: t,
    convertHoneypotFieldsForSubmission: f.useCallback(() => {
      t.forEach((e) => {
        let t = e.inputRef.current;
        t && (t.name = `${xT}_${e.originalName}`);
      });
    }, [t]),
    replaceHoneypotWithMetadata: f.useCallback(
      (n) => {
        let r = t.length,
          i = 0,
          a = [];
        (t.forEach((e) => {
          let t = e.inputRef.current;
          if (t) {
            let r = t.name,
              o = t.value;
            if (o) {
              i++;
              let t = {
                [TT.name]: e.originalName,
                [TT.value]: o,
                [TT.setAttribute]: e.methodsUsed.setAttribute,
                [TT.valueProperty]: e.methodsUsed.valueProperty,
                [TT.isInputEventTrusted]: e.methodsUsed.isInputEventTrusted,
                [TT.inputChangeTimeSinceModuleLoad]: e.methodsUsed.inputChangeTimeSinceModuleLoad,
                [TT.wasFilledBeforeHydration]: e.methodsUsed.wasFilledBeforeHydration,
              };
              a.push(JSON.stringify(t));
            }
            (n.delete(r), (t.name = e.originalName));
          }
        }),
          n.append(`${xT}_${ET.fieldData}`, `[${a.join(`,`)}]`),
          n.append(`${xT}_${ET.fieldCount}`, r.toString()),
          n.append(`${xT}_${ET.fieldFilledCount}`, i.toString()),
          n.append(`${xT}_${ET.hpVersion}`, ST),
          n.append(`${xT}_${ET.siteId}`, e || ``),
          n.append(`${xT}_${ET.timeToSubmissionSinceModuleLoad}`, DT()));
      },
      [t, e]
    ),
  };
}
function jd({ states: e }) {
  return E(g, { children: e.map((e) => E(OT, { inputStateRef: e }, `hp_${e.originalName}`)) });
}
function Md({ router: e, nodeId: t, submitTrackingId: n }) {
  e?.pageviewEventData?.current &&
    (e.pageviewEventData.current instanceof Promise
      ? e.pageviewEventData.current.then((e) => {
          Nd(e, t, n);
        })
      : Nd(e.pageviewEventData.current, t, n));
}
function Nd(e, t, n) {
  return on(
    `published_site_form_submit`,
    { ...e, nodeId: t ?? null, trackingId: n || null },
    `eager`
  );
}
function Pd({ state: e }, { type: t }) {
  switch (t) {
    case `complete`:
      return e === `error` ? NT : MT;
    case `incomplete`:
      return e === `error` ? NT : jT;
    case `submit`:
      return kT;
    case `success`:
      return AT;
    case `error`:
      return NT;
    default:
      U(t);
  }
}
function Fd({ state: e }) {
  return e === `incomplete` || e === `complete`;
}
function Id(e) {
  e.preventDefault();
}
function Ld(e, t) {
  let n = bu(e, !1) ? e : `https://${e}`,
    r = document.createElement(`a`);
  ((r.href = n),
    (r.target = `_self`),
    (r.style.display = `none`),
    t.current && (t.current.appendChild(r), r.click(), r.remove()));
}
function Rd(e) {
  if (e.children.length === 0) return !1;
  for (let t of e.children)
    if (
      t instanceof HTMLInputElement ||
      t instanceof HTMLTextAreaElement ||
      t instanceof HTMLSelectElement
    ) {
      if (t.required && t.value === ``) return !0;
    } else if (Rd(t)) return !0;
  return !1;
}
async function zd(e, t, n, r) {
  let i = await Td();
  if (!i) throw Error(`Failed to calculate proof of work`);
  let a = { "Framer-Site-Id": r, "Framer-POW": i.secret, "Framer-Form-Fields": Od(n, t) },
    o = await fetch(e, { body: t, method: `POST`, headers: a });
  if (o.ok) return o;
  {
    let e = await o.json(),
      t = `Failed to submit form`;
    throw Bd(e) ? Error(`${t} - ${e.error.message}`) : Error(t);
  }
}
function Bd(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `error` in e &&
    V(e.error) &&
    `message` in e.error &&
    typeof e.error.message == `string`
  );
}
function Vd({ EditorBar: e, fast: t = !1 }) {
  let n = S(PT),
    r = l(iv, t ? RT : zT, ov),
    i = gw(),
    a = s(() => {
      let e = {},
        t;
      for (t in i)
        i.hasOwnProperty(t) &&
          (t.startsWith(`editorBar`) || t.startsWith(`onPage`)) &&
          (e[t] = i[t]);
      return e;
    }, [i]);
  return !e || !n || !r
    ? null
    : E(LT, { children: E(b, { children: E(e, { framerSiteId: n, features: a }) }) });
}
function Hd({ currentRoutePath: e, routerAPI: t, children: n }) {
  let r = M(),
    i = M(),
    a = M(t),
    o = M(null);
  ((a.current = t),
    h(() => {
      e && ((r.current ??= new Set()), r.current.add(e), i.current?.(e));
    }, [e]));
  let [s] = A(() => ({
    getInitialState: () => ({
      visitedPages: r.current ?? new Set(),
      getCurrentRoutePath: () =>
        a.current ? Wd(a.current, a.current.currentRouteId, a.current.currentPathVariables) : ``,
      resolveRoute: (e) => (a.current ? Wd(a.current, e.webPageId, e.pathVariables) : ``),
      setRouteChangeHandler: (e) => {
        i.current = e;
      },
      sendTrackingEvent: async (e) => {
        a.current && Ud(a.current.pageviewEventData.current, e);
      },
    }),
    triggerStateRef: o,
  }));
  return E(BT.Provider, { value: s, children: n });
}
async function Ud(e, t) {
  if (!sn(t.trackingId)) return;
  let n = e instanceof Promise ? await e : e;
  n &&
    on(`published_site_trigger_invoke`, { ...n, ...t, trackingId: t.trackingId || null }, `lazy`);
}
function Wd(e, t, n) {
  let r = e.getRoute(t);
  return r?.path ? (n ? Qn(r.path, n) : r.path) : ``;
}
function Gd(e, t) {
  if (e.routeId !== t.routeId) return !1;
  if (e.pathVariables === t.pathVariables) return !0;
  let n = e.pathVariables || {},
    r = t.pathVariables || {};
  return n.length === r.length && Object.keys(n).every((e) => n[e] === r[e]);
}
function Kd() {
  let e = Intl.DateTimeFormat().resolvedOptions();
  ((VT = e.timeZone), (HT = e.locale));
}
function qd({
  routeId: e,
  url: t,
  pathVariables: n,
  localeId: r,
  contentLocaleId: i,
  canonicalPathVariables: a,
}) {
  Pr(
    {
      routeId: e,
      pathVariables: n,
      localeId: r,
      paginationInfo: Tr()?.paginationInfo,
      contentLocaleId: i,
      canonicalPathVariables: a,
    },
    t
  );
}
function Jd(e, t, n) {
  let { path: r } = t;
  if (!r) return;
  let {
      historyPath: i,
      hash: a,
      pathVariables: o,
      localeId: s,
      currentRoutePath: c,
      contentLocaleId: l,
      canonicalPathVariables: u,
    } = n,
    d = c !== void 0 && c === r,
    f = Tr();
  Pr(
    {
      routeId: e,
      hash: a,
      pathVariables: o,
      contentLocaleId: l,
      canonicalPathVariables: u,
      localeId: s,
      queryParamBackAnchorSearch: d ? f?.queryParamBackAnchorSearch : void 0,
    },
    i
  );
}
function Yd(e, t, n, r) {
  let i = Tr();
  !t.path ||
    i?.hash === n.hash ||
    (r?.(),
    Pr(
      {
        routeId: e,
        hash: n.hash,
        pathVariables: n.pathVariables,
        localeId: n.localeId,
        queryParamBackAnchorSearch: i?.queryParamBackAnchorSearch,
        paginationInfo: i?.paginationInfo,
        contentLocaleId: i?.contentLocaleId,
        canonicalPathVariables: i?.canonicalPathVariables,
      },
      ai(t, n)
    ));
}
function Xd() {
  return Dn() >= 17 ? KT : GT;
}
function Zd(e = rf) {
  let t = (e) => {
    e.persisted && sf();
  };
  wn() && (N.addEventListener(`pageshow`, t), (WT = Date.now() - Xd()));
  let n = Qd(),
    r = af(e);
  return function () {
    (N.removeEventListener(`pageshow`, t), n(), r());
  };
}
function Qd() {
  let e = N.history.scrollRestoration;
  return (
    (N.history.scrollRestoration = `manual`),
    function () {
      N.history.scrollRestoration = e;
    }
  );
}
function $d(e) {
  return V(e) && typeof e.x == `number` && typeof e.y == `number`;
}
function ef() {
  return { x: N.scrollX, y: N.scrollY };
}
function tf() {
  let e = Tr();
  if (!e) return;
  let { scrollPosition: t } = e;
  if ($d(t)) return t;
}
function nf(e) {
  let t = Tr();
  t && (Mr({ ...t, scrollPosition: e }), wn() && (WT = Date.now()));
}
function rf(e, t = !1) {
  let n = tf();
  if (!n || n.x !== e.x || n.y !== e.y) {
    if (wn() && !t) {
      let e = Xd();
      if (Date.now() - WT < e) return;
    }
    nf(e);
  }
}
function af(e) {
  let t = () => {
      e(ef());
    },
    n = () => {
      e(ef(), !0);
    },
    r = () => {
      document.visibilityState === `hidden` && n();
    };
  (document.addEventListener(`visibilitychange`, r), N.addEventListener(`pagehide`, n));
  let i = () => {
    (document.removeEventListener(`visibilitychange`, r), N.removeEventListener(`pagehide`, n));
  };
  if (!(`onscrollend` in N)) {
    let e = of(t);
    return function () {
      (i(), e());
    };
  }
  return (
    N.addEventListener(`scrollend`, t),
    function () {
      (i(), N.removeEventListener(`scrollend`, t));
    }
  );
}
function of(e) {
  let t, n;
  function r() {
    (clearTimeout(t), (t = void 0), (n = void 0));
  }
  let i = () => {
      let t = n;
      (r(), !(t === void 0 || Er(Tr()) !== t) && e());
    },
    a = () => {
      let e = Er(Tr());
      if (e === void 0) {
        r();
        return;
      }
      (clearTimeout(t), (n = e));
      let a = wn() ? Xd() : 100;
      t = N.setTimeout(i, a);
    };
  return (
    N.addEventListener(`scroll`, a),
    function () {
      (N.removeEventListener(`scroll`, a), r());
    }
  );
}
function sf() {
  let e = tf();
  return e ? (N.scrollTo(e.x, e.y), !0) : !1;
}
function cf(e, t) {
  let n = t ? { behavior: `smooth`, block: `start`, inline: `nearest` } : void 0;
  e.scrollIntoView(n);
}
function lf(e, t) {
  let n = e && document.getElementById(e);
  if (n) return (cf(n, t), !0);
}
function uf(e, t, n) {
  n !== `preserve-scroll-position` &&
    Ge.render(
      () => {
        (n === `restore-scroll-position` && sf()) || lf(e, t) || N.scrollTo(0, 0);
      },
      !1,
      !0
    );
}
function df(e, t) {
  Ge.read(() => {
    N.scrollY !== 0 ||
      N.scrollX !== 0 ||
      Ge.render(
        () => {
          sf() || lf(e, t);
        },
        !1,
        !0
      );
  });
}
function ff(e) {
  let t = gw().scrollRestoration,
    r = M(void 0),
    i = M(!1),
    a = !!(t && !e),
    o = C(
      (e) => {
        ((r.current = e), a && (i.current = !0));
      },
      [a]
    ),
    s = C((e, t = !1) => {
      i.current || rf(e, t);
    }, []),
    c = C(() => {
      a && (i.current = !0);
    }, [a]),
    l = C(() => r.current !== void 0 || i.current, []),
    u = C((e, t) => {
      let n = r.current;
      !n ||
        n.routeId !== e ||
        n.remountKey !== t ||
        ((r.current = void 0), (i.current = !1), uf(n.hash, n.shouldSmoothScroll, n.behavior));
    }, []);
  return (
    n(() => {
      if (a) return Zd(s);
    }, [a, s]),
    {
      usesCustomScrollRestoration: a,
      isNavigationCommitPending: l,
      onHistoryTraversal: c,
      scheduleScroll: o,
      commitNavigationScroll: u,
    }
  );
}
function pf({ currentRouteId: e, remountKey: t, scrollRestoration: r }) {
  let { commitNavigationScroll: i, usesCustomScrollRestoration: a } = r;
  return (
    n(() => {
      i(e, t);
    }),
    h(() => {
      a && df(N.location.hash.slice(1) || void 0, !1);
    }, []),
    null
  );
}
function mf() {
  let [e, t] = f.useState(0);
  return [e, f.useCallback(() => t((e) => e + 1), [])];
}
function hf({ children: e, loadSnippetsModule: t }) {
  return E(rE.Provider, { value: t, children: e });
}
function gf() {
  return f.useContext(rE);
}
function _f(e) {
  return { start: `<!-- Snippet: ${e} -->`, end: `<!-- SnippetEnd: ${e} -->` };
}
async function vf(e, t, n = `beforeend`) {
  let r, i;
  switch (n) {
    case `beforebegin`:
      (H(t.parentNode, `Can't use 'beforebegin' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t));
      break;
    case `afterend`:
      (H(t.parentNode, `Can't use 'afterend' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t.nextSibling));
      break;
    case `afterbegin`:
      ((r = t), (i = t.firstChild));
      break;
    case `beforeend`:
      ((r = t), (i = null));
      break;
    default:
      U(n);
  }
  let a = document.createRange();
  (a.selectNodeContents(r), await yf(a.createContextualFragment(e), r, i));
}
async function yf(e, t, n) {
  for (let r = e.firstChild; r; r = r.nextSibling) {
    if (r instanceof HTMLScriptElement) {
      let e = bf(r, t, n);
      e !== void 0 && (await e);
      continue;
    }
    let e = r.cloneNode(!1);
    (t.insertBefore(e, n), r.firstChild && (await yf(r, e, null)));
  }
}
function bf(e, t, n) {
  let r = e.cloneNode(!0);
  if (
    !e.hasAttribute(`src`) ||
    e.hasAttribute(`async`) ||
    e.hasAttribute(`defer`) ||
    e.getAttribute(`type`)?.toLowerCase() === `module`
  )
    t.insertBefore(r, n);
  else return xf(r, t, n);
}
function xf(e, t, n) {
  return new Promise((r) => {
    ((e.onload = e.onerror = r), t.insertBefore(e, n));
  });
}
function Sf(e) {
  let t, n;
  switch (e) {
    case `bodyStart`:
      ((t = $T), (n = eE));
      break;
    case `bodyEnd`:
      ((t = tE), (n = nE));
      break;
    case `headStart`:
      ((t = YT), (n = XT));
      break;
    case `headEnd`:
      ((t = ZT), (n = QT));
      break;
  }
  let r = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head,
    i = null,
    a = null;
  for (let e of r.childNodes) {
    if (e.nodeType !== Node.COMMENT_NODE) continue;
    let r = `<!--${e.nodeValue}-->`;
    r === t ? (i = e) : r === n && (a = e);
  }
  return { start: i, end: a };
}
function Cf(e, t, n) {
  if (!t || !n) return { start: null, end: null };
  let r = null,
    i = null,
    { start: a, end: o } = _f(e),
    s = t.nextSibling;
  for (; s && s !== n;) {
    if (s.nodeType !== Node.COMMENT_NODE) {
      s = s.nextSibling;
      continue;
    }
    let e = `<!--${s.nodeValue}-->`;
    if (e === a) r = s;
    else if (e === o) {
      i = s;
      break;
    }
    s = s.nextSibling;
  }
  return { start: r, end: i };
}
async function wf(e, t, n) {
  if (t.length === 0) return;
  let { start: r, end: i } = Sf(e),
    a = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head;
  for (let e of t) {
    let { start: t, end: o } = Cf(e.id, r, i),
      s = t && o;
    if (s && e.loadMode === `once`) continue;
    if ((Tf(t, o), s)) {
      await vf(e.code, o, `beforebegin`);
      continue;
    }
    let { start: c, end: l } = _f(e.id),
      u = `${c}
${e.code}
${l}`,
      d = Df(e.id, n, r, i);
    d ? await vf(u, d, `afterend`) : await vf(u, r ?? a, r ? `afterend` : `beforeend`);
  }
}
function Tf(e, t) {
  if (!e || !t) return;
  let n = e.nextSibling;
  for (; n && n !== t;) {
    let e = n.nextSibling;
    (Ef(n) && n.remove(), (n = e));
  }
}
function Ef(e) {
  if (e.nodeType !== Node.ELEMENT_NODE) return !0;
  if (e.nodeName === `SCRIPT`) {
    let t = e.type;
    if (!t || t === `text/javascript` || t === `module`) return !1;
  }
  return !0;
}
function Df(e, t, n, r) {
  let i = t.indexOf(e) - 1;
  if (i < 0) return null;
  for (let e = i; e >= 0; e--) {
    let i = t[e];
    if (!i) continue;
    let a = Cf(i, n, r).end;
    if (a) return a;
  }
  return null;
}
function Of() {
  let e = gf();
  return C(
    async (t, n, r, i) => {
      if (!e) return;
      let a = document.getElementById(qT)?.dataset[JT] !== void 0;
      if (i && a) return;
      let { getSnippets: o, snippetsSorting: s } = await e.readMaybeAsync(),
        c = await o(t, n, r);
      for (let e in c) {
        let t = e,
          n = c[t],
          r = s[t];
        await wf(t, n, r);
      }
    },
    [e]
  );
}
function kf(e, t) {
  e.startsWith(`/`) && (e = `.` + e);
  let n = new URL(t);
  return (n.pathname.endsWith(`/`) || (n.pathname += `/`), new URL(e, n).href);
}
async function Af({
  siteCanonicalURL: e,
  activeLocale: t,
  contentLocale: n,
  currentRoute: r,
  currentRouteId: i,
  currentPathVariables: a,
  locales: o,
  collectionUtils: s,
}) {
  if (!e || !t || !n || !r) return;
  let c,
    l = [],
    u = o.find((e) => e.id === vv),
    { path: d } = await Un({
      currentLocale: t,
      nextLocale: n,
      defaultLocale: u,
      route: r,
      routeId: i,
      pathVariables: a,
      collectionUtils: s,
      preserveQueryParams: !1,
    });
  d && (c = kf(d, e));
  let f;
  for (let n of o) {
    if (r.includedLocales && !r.includedLocales.includes(n.id)) continue;
    let { path: o, isMissingInLocale: c } = await Un({
      currentLocale: t,
      nextLocale: n,
      defaultLocale: u,
      route: r,
      routeId: i,
      pathVariables: a,
      collectionUtils: s,
      preserveQueryParams: !1,
    });
    if (!o || c) continue;
    let d = kf(o, e);
    (l.push({ href: d, hrefLang: n.code }), n.id === vv && (f = d));
  }
  return (
    f && l.push({ href: f, hrefLang: `x-default` }),
    () => {
      (br(c, N.location.href), xr(l));
    }
  );
}
function jf({
  activeLocale: e,
  contentLocale: t,
  currentPathVariables: n,
  currentRoute: r,
  currentRouteId: i,
  isInitialNavigation: a,
  locales: o,
  siteCanonicalURL: s,
}) {
  let c = gn(),
    l = Of();
  h(() => {
    let u = !0,
      d = () => void (u = !1);
    return !e || !t
      ? (l(i, n ?? {}, e, a).catch((e) => {
          u && Ul(e);
        }),
        d)
      : ((e.id === t.id
          ? Pn()
          : Un({
              currentLocale: e,
              nextLocale: t,
              defaultLocale: o.find(({ id: e }) => e === vv),
              route: r,
              routeId: i,
              pathVariables: n,
              collectionUtils: c,
              preserveQueryParams: !1,
            })
        )
          .then(async (d) => {
            if (!u) return;
            let f = d ? d.pathVariables : n;
            if ((await l(i, f ?? {}, t, a), !u)) return;
            let p = await Af({
              siteCanonicalURL: s,
              activeLocale: e,
              contentLocale: t,
              currentRoute: r,
              currentRouteId: i,
              currentPathVariables: n,
              locales: o,
              collectionUtils: c,
            });
            u && p?.();
          })
          .catch((e) => {
            u && Ul(e);
          }),
        d);
  }, [e, c, t, n, r, i, a, l, o, s]);
}
function Mf(e) {
  if (!e) return $_;
  let t = !1;
  return () => {
    t || ((t = !0), e?.());
  };
}
function Nf(e) {
  let t = Br(e),
    n = M(void 0),
    r = C(() => {
      (n.current?.abort(), (n.current = void 0));
    }, []);
  return {
    startNavigation: C(
      async (e, i, a, o = !0) => {
        r();
        let s = o ? new AbortController() : void 0;
        n.current = s;
        let c = s?.signal,
          l = Pt(c);
        if ((i.promise.finally(l), a === void 0)) return (e(c), i.promise);
        let u,
          d = new Promise((e, t) => {
            ((u = e), c?.addEventListener(`abort`, t));
          }).catch($_);
        if ((t(d, s, a), e(c), await i.promise, c?.aborted)) return;
        let f = N.navigation?.transition;
        u();
        try {
          await f?.finished;
        } catch (e) {
          console.error(`Navigation transition failed`, e);
        }
        c?.aborted || Ly();
      },
      [r, t]
    ),
    cancelPendingNavigation: r,
  };
}
function Pf({
  defaultPageStyle: e,
  disableHistory: t,
  initialPathVariables: r,
  initialRoute: a,
  notFoundPage: o,
  collectionUtils: c,
  routes: l,
  initialLocaleId: d,
  initialCollectionItemId: f,
  initialContentLocaleIdOverride: p,
  locales: m = _v,
  initialCanonicalPathVariables: g,
  preserveQueryParams: _ = !1,
  LayoutTemplate: v,
  EditorBar: y,
  siteCanonicalURL: b,
  adaptLayoutToTextDirection: x,
}) {
  (bi(),
    Fr({
      disabled: t,
      routeId: a,
      initialPathVariables: r,
      initialLocaleId: d,
      initialContentLocaleId: p,
      initialCanonicalPathVariables: g,
    }));
  let S = vr(),
    [T, D] = mf(),
    O = Cr(`framer-route-change`),
    k = s(() => (!gw().synchronousNavigationOnDesktop || !jn() ? u : (e) => e()), []),
    A = M(!0),
    j = M(),
    ee = M(0),
    P = M(a),
    te = M(r),
    ne = M(),
    F = M(d),
    re = ff(t),
    { isNavigationCommitPending: ie, usesCustomScrollRestoration: I } = re,
    { startNavigation: ae, cancelPendingNavigation: oe } = Nf(I),
    se = gn(),
    ce = re.scheduleScroll,
    le = F.current,
    ue = P.current,
    de = te.current,
    L = l[ue],
    fe = L?.path;
  if (!L) throw Error(`Router cannot find route for ${ue}`);
  let pe = s(() => m.find(({ id: e }) => e === vv), [m]),
    R = s(() => m.find(({ id: e }) => (le ? e === le : e === vv)) ?? null, [le, m]),
    {
      contentLocale: me,
      currentCanonicalPathVariables: he,
      pageExistsInCurrentLocale: ge,
      setRouteContentState: _e,
    } = If({
      activeLocale: R,
      currentRoute: L,
      initialCanonicalPathVariables: g,
      initialContentLocaleIdOverride: p,
      locales: m,
      routes: l,
    }),
    ve = R?.textDirection ?? `ltr`,
    ye = x ? ve : `ltr`;
  n(() => {
    x && document.documentElement.setAttribute(`dir`, ve);
  }, [ve, x]);
  let be = Rr(),
    xe = s(
      () => ({
        activeLocale: R,
        contentLocale: me,
        locales: m,
        setLocale: async (e) => {
          let n = ++ee.current,
            r = O({ localized: !0 });
          if ((await _y({ priority: `user-blocking`, continueAfter: `paint` }), n !== ee.current)) {
            r.ignore?.();
            return;
          }
          let i;
          z(e) ? (i = e) : V(e) && (i = e.id);
          let a = m.find(({ id: e }) => e === i);
          if (!a) {
            r.ignore?.();
            return;
          }
          let o = P.current,
            s = l[o];
          if (!s) {
            r.ignore?.();
            return;
          }
          let c = ni(b);
          try {
            let e = await be({
              currentLocale: R,
              nextLocale: a,
              route: s,
              routeId: o,
              defaultLocale: pe,
              pathVariables: te.current,
              preserveQueryParams: _,
              sitePrefix: c,
            });
            if (!e || n !== ee.current) {
              r.ignore?.();
              return;
            }
            let i = e.path && c + e.path,
              { contentLocaleId: l, canonicalPathVariables: u } = await Kn({
                activeLocale: a,
                defaultLocale: pe,
                collectionUtilsCache: se,
                locales: m,
                pathVariables: e.pathVariables,
                route: s,
                routeId: o,
              });
            if (n !== ee.current) {
              r.ignore?.();
              return;
            }
            ((A.current = !1),
              (F.current = a.id),
              (j.current = i),
              (te.current = e.pathVariables),
              _e(l, u));
            let d = s.path && e.pathVariables ? Qn(s.path, e.pathVariables) : s.path;
            (ce({
              routeId: o,
              remountKey: `${a.id}${d}`,
              hash: void 0,
              shouldSmoothScroll: !1,
              behavior: `preserve-scroll-position`,
            }),
              ae(
                () => {
                  S(o, o, () => k(D));
                },
                r,
                t
                  ? void 0
                  : i
                    ? () => {
                        qd({
                          routeId: o,
                          url: i,
                          pathVariables: e.pathVariables,
                          localeId: a.id,
                          contentLocaleId: l,
                          canonicalPathVariables: u,
                        });
                      }
                    : void 0,
                !1
              ));
          } catch {
            r.ignore?.();
          }
        },
      }),
      [R, pe, me, t, D, m, _, _e, l, ce, ae, S, O, k, be, se, b]
    ),
    Se = C(
      (e, t, n, r, i, a, o, s, c, u, d) => {
        A.current = !1;
        let f = P.current,
          p = l[e],
          m = Nt(p, n),
          h = p?.path && i ? Qn(p.path, i) : p?.path;
        if (
          ((P.current = e),
          (F.current = t),
          (te.current = i),
          (ne.current = void 0),
          _e(a, o),
          (j.current = r),
          ce({
            routeId: e,
            remountKey: `${t}${h}`,
            hash: m,
            shouldSmoothScroll: u ?? !1,
            behavior: s
              ? I
                ? `restore-scroll-position`
                : `preserve-scroll-position`
              : `scroll-to-hash-or-top`,
          }),
          s)
        ) {
          (oe(), k(D));
          return;
        }
        ae(
          (t) => {
            S(f, e, () => k(D), t);
          },
          c,
          d,
          !0
        );
      },
      [D, _e, l, I, ce, ae, S, k, oe]
    );
  (Ir(re, P, Se),
    h(() => {
      if (t) return;
      let e = () => {
        let e = Tr(),
          t = N.location.hash === `` ? void 0 : N.location.hash.slice(1);
        (e && Nt(l[e.routeId], e.hash) === t) ||
          Nr({
            ...(e ||
              (Or() ?? { routeId: P.current, pathVariables: te.current, localeId: F.current })),
            hash: t,
            scrollPosition: void 0,
          });
      };
      return (N.addEventListener(`hashchange`, e), () => N.removeEventListener(`hashchange`, e));
    }, [t, l]));
  let Ce = C(
      async (e, n, r, i, a) => {
        let o = l[e],
          s = ut(o?.page) ? o.page.getStatus() : void 0,
          c = s?.hasRendered,
          u = O({ cached: c, preloaded: c ? void 0 : s?.hasLoaded }),
          d = Mf(a);
        if (
          (_y({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }).then(d),
          await _y({ priority: `user-blocking`, continueAfter: `paint` }),
          r)
        ) {
          let e = new Set(),
            t = o?.path ?? `/`;
          for (let n of t.matchAll(yy)) {
            let t = n[1];
            if (t === void 0) throw Error(`A matching path variable should not be undefined`);
            e.add(t);
          }
          r = Object.fromEntries(Object.entries(r).filter(([t]) => e.has(t)));
        }
        let f = Nt(o, n),
          p = te.current,
          h = F.current;
        if (
          ne.current === void 0 &&
          Gd({ routeId: P.current, pathVariables: p }, { routeId: e, pathVariables: r })
        ) {
          let a = ie();
          if (a) {
            let t = o?.path && r ? Qn(o.path, r) : o?.path;
            ce({
              routeId: e,
              remountKey: `${h}${t}`,
              hash: f,
              shouldSmoothScroll: i ?? !1,
              behavior: `scroll-to-hash-or-top`,
            });
          } else oe();
          (u.ignore?.(), !a && I && uf(f, i, `scroll-to-hash-or-top`));
          let s = l[e];
          (!t &&
            s &&
            Yd(
              e,
              s,
              {
                currentRoutePath: s.path,
                currentRoutePathLocalized: s.pathLocalized,
                currentPathVariables: p,
                pathVariables: r,
                hash: n,
                localeId: h,
                preserveQueryParams: _,
                siteCanonicalURL: b,
              },
              d
            ),
            !a && !I && uf(f, i, `scroll-to-hash-or-top`));
          return;
        }
        if (!o) return;
        let g = l[P.current],
          v =
            ni(b) +
            ai(o, {
              currentRoutePath: g?.path,
              currentRoutePathLocalized: g?.pathLocalized,
              currentPathVariables: p,
              hash: n,
              pathVariables: r,
              localeId: h,
              localeSlug: m.find(({ id: e }) => e === h)?.slug,
              preserveQueryParams: _,
              relative: !1,
              siteCanonicalURL: b,
            }),
          y = {};
        ne.current = y;
        let { contentLocaleId: x, canonicalPathVariables: S } = await Kn({
          activeLocale: R,
          defaultLocale: pe,
          collectionUtilsCache: se,
          locales: m,
          pathVariables: r,
          route: o,
          routeId: e,
        });
        ne.current === y &&
          Se(
            e,
            h,
            n,
            v,
            r,
            x,
            S,
            !1,
            u,
            i,
            t
              ? void 0
              : () => {
                  (d(),
                    Jd(e, o, {
                      historyPath: v,
                      currentRoutePath: g?.path,
                      hash: n,
                      pathVariables: r,
                      contentLocaleId: x,
                      canonicalPathVariables: S,
                      localeId: h,
                    }));
                }
          );
      },
      [oe, l, m, Se, t, _, b, O, I, ie, ce, se, pe, R]
    ),
    we = Tt(l),
    Te = j.current,
    Ee = UT(L, ue, Te, de, R, f),
    De = A.current;
  jf({
    activeLocale: R,
    contentLocale: me,
    currentPathVariables: de,
    currentRoute: L,
    currentRouteId: ue,
    isInitialNavigation: De,
    locales: m,
    siteCanonicalURL: b,
  });
  let Oe = s(
      () => ({
        navigate: Ce,
        getRoute: we,
        currentRouteId: ue,
        currentPathVariables: de,
        currentCanonicalPathVariables: he,
        routes: l,
        collectionUtils: c,
        preserveQueryParams: _,
        pageviewEventData: Ee,
        siteCanonicalURL: b,
        isInitialNavigation: De,
      }),
      [Ce, we, ue, de, he, l, c, _, b, Ee, De]
    ),
    ke = fe && de ? Qn(fe, de) : fe,
    Ae = `${le}${ke}`,
    je = za(() => ({ ...e, display: `contents` }));
  return E(Et, {
    api: Oe,
    children: E(Sy.Provider, {
      value: xe,
      children: E(Cy.Provider, {
        value: ye,
        children: E(Iw, {
          children: E(Zr, {
            routerRenderKey: T,
            isNavigationCommitPending: re.isNavigationCommitPending,
            children: w(Hd, {
              currentRoutePath: ke,
              routerAPI: Oe,
              children: [
                y && E(Vd, { EditorBar: y, fast: !0 }),
                E(yw, {
                  children: w(Vl, {
                    children: [
                      E(fb.Start, {}),
                      E(pf, { currentRouteId: ue, remountKey: Ae, scrollRestoration: re }),
                      E(mb, {
                        notFoundPage: o,
                        defaultPageStyle: e,
                        routerRenderKey: T,
                        children: E(Ff, {
                          LayoutTemplate: v,
                          webPageId: L?.abTestingVariantId ?? ue,
                          style: e,
                          children: (t) =>
                            E(i, { children: ge ? Ti(L.page, t ? je : e) : o && Ti(o, e) }, Ae),
                        }),
                      }),
                      y && E(Vd, { EditorBar: y }),
                      E(gi, {}),
                      E(fb.End, {}),
                    ],
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    }),
  });
}
function Ff({ LayoutTemplate: e, webPageId: t, style: n, children: r }) {
  return e ? E(e, { webPageId: t, style: n, children: r }) : r(!1);
}
function If({
  activeLocale: e,
  currentRoute: t,
  initialCanonicalPathVariables: n,
  initialContentLocaleIdOverride: r,
  locales: i,
  routes: a,
}) {
  let o = M(n),
    c = M(r),
    l = c.current,
    u = !e || !t.includedLocales || t.includedLocales.includes(e.id),
    d = s(() => {
      if (!e) return null;
      let n;
      return (
        (n = u
          ? (l ?? t?.canonicalLocaleIdByLocaleId?.[e.id])
          : Object.values(a).find((e) => e.path && eb.has(e.path))?.canonicalLocaleIdByLocaleId?.[
              e.id
            ]),
        n ? (i.find(({ id: e }) => e === n) ?? e) : e
      );
    }, [e, t, i, l, u, a]),
    f = C((e, t) => {
      ((c.current = e), (o.current = t));
    }, []);
  return {
    contentLocale: d,
    currentCanonicalPathVariables: o.current,
    pageExistsInCurrentLocale: u,
    setRouteContentState: f,
  };
}
function Lf(e) {
  return new Promise((t, n) => {
    try {
      new URL(e);
      let r = new Image();
      ((r.onload = () => t()), (r.onerror = n), (r.src = e));
    } catch (e) {
      n(e);
    }
  });
}
function Rf(e) {
  return typeof e == `object` && !!e;
}
function zf(e, t) {
  if (t === ``) return e;
  let n = t.split(/[.[\]]+/u).filter((e) => e.length > 0),
    r = e;
  for (let e of n) {
    if (!Rf(r)) return;
    r = r[e];
  }
  return r;
}
function Bf(e) {
  return `${e.credentials}:${e.url}`;
}
function Vf(e) {
  return z(e) && !Number.isNaN(Number(e));
}
function Hf(e, t) {
  switch (e) {
    case `string`:
      return z(t) || B(t);
    case `color`:
      return z(t);
    case `boolean`:
      return Je(t);
    case `number`:
      return B(t) || Vf(t);
    case `link`:
    case `image`:
      return z(t) && bu(t, !1);
    default:
      return !1;
  }
}
function Uf(e, t) {
  if (e.status === `loading`) return t.fallbackValue;
  if (e.status === `error`) throw e.error;
  let n = zf(e.data, t.resultKeyPath);
  if (Ze(n)) throw Error(`Key '${t.resultKeyPath}' not found in response`);
  if (!Hf(t.resultOutputType, n))
    throw Error(`Resolved value '${n}' is not valid for type '${t.resultOutputType}'`);
  return n;
}
function Wf(e, t) {
  if (J.current() === J.canvas) return !1;
  let n = Math.max(t * 1e3, aE);
  return Date.now() >= e + n;
}
function Gf({ client: e, children: t }) {
  return E(dE.Provider, { value: e, children: t });
}
function Kf(e) {
  let {
    RootComponent: t,
    isWebsite: n,
    environment: r,
    routeId: i,
    framerSiteId: a,
    pathVariables: o,
    canonicalPathVariables: s,
    routes: c,
    collectionUtils: l,
    serverDatabaseClient: u,
    notFoundPage: d,
    isReducedMotion: p = !1,
    skipAnimations: m = !1,
    includeDataObserver: h = !1,
    localeId: g,
    locales: _,
    preserveQueryParams: v,
    EditorBar: y,
    defaultPageStyle: b,
    disableHistory: x,
    LayoutTemplate: S,
    siteCanonicalURL: C,
    adaptLayoutToTextDirection: w,
    loadSnippetsModule: T,
    initialCollectionItemId: D,
    initialContentLocaleIdOverride: O,
  } = e;
  return (
    f.useEffect(() => {
      n || Hb.start();
    }, []),
    n
      ? E(Ur, {
          value: r ?? `preview`,
          children: E(Ae, {
            reducedMotion: m ? `always` : p ? `user` : `never`,
            skipAnimations: m,
            children: E(hn, {
              collectionUtils: l,
              children: E(Gf, {
                client: u,
                children: E(uE, {
                  children: E(PT.Provider, {
                    value: a,
                    children: E(hf, {
                      loadSnippetsModule: T,
                      children: E(Pf, {
                        initialRoute: i,
                        initialPathVariables: o,
                        initialCanonicalPathVariables: s,
                        initialLocaleId: g,
                        initialCollectionItemId: D,
                        initialContentLocaleIdOverride: O,
                        routes: c,
                        collectionUtils: l,
                        notFoundPage: d,
                        locales: _,
                        defaultPageStyle: b ?? { minHeight: `100vh`, width: `auto` },
                        preserveQueryParams: v,
                        EditorBar: y,
                        disableHistory: x,
                        LayoutTemplate: S,
                        siteCanonicalURL: C,
                        adaptLayoutToTextDirection: w,
                      }),
                    }),
                  }),
                }),
              }),
            }),
          }),
        })
      : E(h ? TC : f.Fragment, {
          children: E(Ot, {
            routes: c,
            children: E(fC, { children: f.isValidElement(t) ? t : f.createElement(t, { key: i }) }),
          }),
        })
  );
}
function qf(e, t) {
  let n = Dt(),
    { activeLocale: r } = qn(),
    i = sd();
  return Gr(() => {
    let t = [],
      a = (e) => {
        if (e)
          return z(e) || gu(e)
            ? Cd(e, n, void 0, void 0, r, o)
            : Cd(e.href, n, e.implicitPathVariables, e.refKey, r, o);
      };
    function o(e, n) {
      return i(e, n, r, t);
    }
    let s = e(a);
    if (t.length > 0) throw Promise.allSettled(t);
    return s;
  }, [n, r, i, ...t]);
}
function Jf(e) {
  return {
    trace(...t) {
      return ix.getLogger(e)?.trace(...t);
    },
    debug(...t) {
      return ix.getLogger(e)?.debug(...t);
    },
    info(...t) {
      return ix.getLogger(e)?.info(...t);
    },
    warn(...t) {
      return ix.getLogger(e)?.warn(...t);
    },
    error(...t) {
      return ix.getLogger(e)?.error(...t);
    },
    get enabled() {
      return ix.getLogger(e) !== void 0;
    },
  };
}
function Yf() {
  return (
    Symbol.dispose ||
      Object.defineProperty(Symbol, "dispose", {
        value: Symbol.for(`Symbol.dispose`),
        writable: !1,
        enumerable: !1,
        configurable: !1,
      }),
    Symbol.dispose
  );
}
function Xf() {
  return pE.priority;
}
function Zf(e) {
  let t = pE;
  return (
    (pE = e),
    {
      [Yf()]() {
        pE = t;
      },
    }
  );
}
function Qf(e = pE.priority, t = pE.canYield) {
  if (!(!t || e === void 0)) return _y({ batch: !0, priority: Fn(e) });
}
function $f(e) {
  var t = [];
  try {
    Pe(t, Zf({ priority: pE.priority, canYield: !1 }));
    let n = e.next();
    return (H(n.done, `Generator must not yield`), n.value);
  } catch (e) {
    var n = e,
      r = !0;
  } finally {
    Ee(t, n, r);
  }
}
async function ep(e, t, n = pE.priority, r = pE.canYield) {
  let i = { priority: n, canYield: r },
    a = t;
  if (a === void 0) {
    var o = [];
    try {
      (Pe(o, Zf(i)), (a = e.next()));
    } catch (e) {
      var s = e,
        c = !0;
    } finally {
      Ee(o, s, c);
    }
  }
  for (; !a.done;) {
    var l = [];
    try {
      let t = await a.value,
        o = Qf(n, r);
      (o && (await o), Pe(l, Zf(i)), (a = e.next(t)));
    } catch (e) {
      var u = e,
        d = !0;
    } finally {
      Ee(l, u, d);
    }
  }
  return a.value;
}
function tp(e, t = pE.priority, n = pE.canYield) {
  var r = [];
  try {
    Pe(r, Zf({ priority: t, canYield: n }));
    let i = e.next();
    return i.done ? i.value : ep(e, i, t, n);
  } catch (e) {
    var i = e,
      a = !0;
  } finally {
    Ee(r, i, a);
  }
}
function* np(e, t = pE.priority) {
  let n = {},
    r = Object.keys(e),
    i = [];
  for (let a of r) {
    let r = e[a];
    if (tt(r)) {
      let e = r.next();
      e.done
        ? (n[a] = e.value)
        : i.push(
            ep(r, e, t).then((e) => {
              n[a] = e;
            })
          );
    } else n[a] = r;
  }
  return (i.length > 0 && (yield Promise.all(i)), n);
}
function* rp(e, t = pE.priority) {
  let n = [],
    r = e.keys(),
    i = [];
  for (let a of r) {
    let r = Qf(t);
    r && (yield r);
    let o = e[a];
    if (tt(o)) {
      let e = o.next();
      e.done
        ? (n[a] = e.value)
        : i.push(
            ep(o, e, t).then((e) => {
              n[a] = e;
            })
          );
    } else n[a] = o;
  }
  return (i.length > 0 && (yield Promise.all(i)), n);
}
function ip(e) {
  return sp(e) || up(e);
}
function ap(e) {
  return Ye(e) && e.every(V);
}
function op(e) {
  return V(e) && qe(e.read) && qe(e.preload);
}
function sp(e) {
  return ap(e) || op(e);
}
function cp(e) {
  return V(e) && V(e.schema);
}
function lp(e) {
  return V(e) && V(e.collectionByLocaleId);
}
function up(e) {
  return cp(e) || lp(e);
}
function dp(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = Bp(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function fp(e, t) {
  switch (e?.type) {
    case `array`:
      return { type: `array`, value: e.value.map((e) => mE.cast(e, t.definition)) };
  }
  return null;
}
function pp(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function mp(e) {
  switch (e?.type) {
    case `boolean`:
      return e;
    case `number`:
    case `string`:
      return { type: `boolean`, value: !!e.value };
  }
  return null;
}
function hp(e) {
  return mp(e)?.value ?? !1;
}
function gp(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function _p(e) {
  switch (e?.type) {
    case `color`:
      return e;
  }
  return null;
}
function vp(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function yp(e) {
  switch (e?.type) {
    case `date`:
      return e;
    case `number`:
    case `string`: {
      let t = new Date(e.value);
      return et(t) ? { type: `date`, value: t.toISOString() } : null;
    }
  }
  return null;
}
function bp(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function xp(e) {
  switch (e?.type) {
    case `enum`:
      return e;
    case `string`:
      return { type: `enum`, value: e.value };
  }
  return null;
}
function Sp(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Cp(e) {
  switch (e?.type) {
    case `file`:
      return e;
  }
  return null;
}
function wp(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Tp(e) {
  switch (e?.type) {
    case `link`:
      return e;
    case `string`:
      try {
        let { protocol: t } = new URL(e.value);
        return t === `http:` || t === `https:` ? { type: `link`, value: e.value } : null;
      } catch {
        return null;
      }
  }
  return null;
}
function Ep(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Dp(e) {
  switch (e?.type) {
    case `number`:
    case `string`: {
      let t = Number(e.value);
      return Number.isFinite(t) ? { type: `number`, value: t } : null;
    }
  }
  return null;
}
function Op(e) {
  return Dp(e)?.value ?? null;
}
function kp(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = Bp(e.value[o] ?? null, t.value[s] ?? null, n);
    if (c !== 0) return c;
  }
  return 0;
}
function Ap(e, t) {
  switch (e?.type) {
    case `object`: {
      let n = {},
        r = Object.entries(t.definitions);
      for (let [t, i] of r) {
        let r = e.value[t] ?? null;
        n[t] = mE.cast(r, i);
      }
      return { type: `object`, value: n };
    }
  }
  return null;
}
function jp(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Mp(e) {
  switch (e?.type) {
    case `responsiveimage`:
      return e;
  }
  return null;
}
function Np(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function Pp(e) {
  switch (e?.type) {
    case `richtext`:
      return e;
  }
  return null;
}
function Fp(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function Ip(e) {
  switch (e?.type) {
    case `vectorsetitem`:
      return e;
  }
  return null;
}
function Lp(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function Rp(e) {
  switch (e?.type) {
    case `string`:
      return e;
    case `number`:
      return { type: `string`, value: String(e.value) };
  }
  return null;
}
function zp(e) {
  return Rp(e)?.value ?? null;
}
function Bp(e, t, n) {
  if (Qe(e) || Qe(t)) return (H(e === t), 0);
  switch (e.type) {
    case `array`:
      return (H(e.type === t.type), dp(e, t, n));
    case `boolean`:
      return (H(e.type === t.type), pp(e, t));
    case `color`:
      return (H(e.type === t.type), gp(e, t));
    case `date`:
      return (H(e.type === t.type), vp(e, t));
    case `enum`:
      return (H(e.type === t.type), bp(e, t));
    case `file`:
      return (H(e.type === t.type), Sp(e, t));
    case `link`:
      return (H(e.type === t.type), wp(e, t));
    case `number`:
      return (H(e.type === t.type), Ep(e, t));
    case `object`:
      return (H(e.type === t.type), kp(e, t, n));
    case `responsiveimage`:
      return (H(e.type === t.type), jp(e, t));
    case `richtext`:
      return (H(e.type === t.type), Np(e, t));
    case `vectorsetitem`:
      return (H(e.type === t.type), Fp(e, t));
    case `string`:
      return (H(e.type === t.type), Lp(e, t, n));
    default:
      U(e);
  }
}
async function Vp(e, t) {
  return op(e) ? (await e.preload(t), e.read(t)) : e;
}
function Hp(e) {
  if (!up(e) || !e.id) return;
  let t = _E.get(e.id);
  if (!t) return (_E.set(e.id, new WeakRef(e)), e.id);
  if (t.deref() === e) return e.id;
}
function Up(e) {
  let t = Hp(e);
  if (t) return t;
  let n = vE.get(e);
  if (n) return n;
  let r = `${yE}${Math.random().toString(16).slice(2)}`;
  return (vE.set(e, r), r);
}
function Wp(e, t) {
  if (sp(e)) {
    let n = Up(e) + (t?.id ?? vv),
      r = bE.get(n);
    if (r) return r;
    let i = new gE(e, t);
    return (bE.set(n, i), i);
  }
  if (cp(e)) return e;
  if (lp(e)) {
    for (; t;) {
      let n = e.collectionByLocaleId[t.id];
      if (n) return n;
      t = t.fallback;
    }
    return e.collectionByLocaleId.default;
  }
  U(e, `Unsupported collection type`);
}
function Gp(e) {
  return e;
}
function Kp(e) {
  return qe(e.getHash);
}
function K(e, ...t) {
  let n = `${e}(`;
  for (let e = 0; e < t.length; e++) {
    e > 0 && (n += `, `);
    let r = t[e];
    if (V(r) && Kp(r)) {
      n += r.getHash();
      continue;
    }
    n += JSON.stringify(r) ?? ``;
  }
  return Gp(`${n})`);
}
function qp(e) {
  if (e === void 0) return;
  if (typeof e != `function`) return e;
  let t = e();
  return () => e() ?? t;
}
function Jp(e, t) {
  return { collectionId: Up(e), pointer: t };
}
function Yp(e) {
  return V(e) && z(e.collectionId);
}
function Xp(e, t) {
  return { collectionId: Up(e), pointer: t };
}
function Zp(e) {
  return V(e) && z(e.collectionId);
}
function Qp(e, t) {
  let n = new Map();
  function r(e) {
    if (V(e))
      if (e.type === `Collection` && ip(e.data)) {
        let r = Wp(e.data, t),
          i = Up(r);
        n.set(i, r);
      } else
        for (let t in e) {
          let n = e[t];
          r(n);
        }
    else if (Ye(e)) for (let t of e) r(t);
  }
  return (r(e), n);
}
function $p(e) {
  return e;
}
function em(e) {
  return e;
}
function tm(e) {
  return e;
}
function nm() {
  return 25;
}
function rm() {
  return 12500;
}
function im(e) {
  return Array(e).fill({ type: `All` });
}
function am(e) {
  return e;
}
function om(e, t) {
  if (e) return;
  if (typeof t == `function`)
    try {
      t = t();
    } catch {
      t = `(assert message threw)`;
    }
  typeof t == `string` && t.length > 2048 && (t = t.slice(0, 2048) + `…`);
  let n = new DD(t ? `Assertion Error: ` + t : `Assertion Error`);
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function sm(e) {
  let t = new Set();
  if (!e) return t;
  om(e.type === `array`, () => `ScalarIntersection expects an array, got: ${e.type}`);
  for (let n of e.value)
    n &&
      (om(
        n.type === `string`,
        () => `ScalarIntersection expects an array of strings, got an array with: ${n.type}`
      ),
      t.add(n.value));
  return t;
}
function cm(e, t) {
  switch (e?.type) {
    case `array`:
      for (let n of e.value) cm(n, t);
      return;
    case `object`:
      for (let n in e.value) cm(e.value[n], t);
      return;
    case `richtext`:
      t.preloadRichTextValue(e);
      return;
    case `vectorsetitem`:
      t.preloadVectorSetItemValue(e);
      return;
  }
}
function lm(e) {
  return e.collection ? `"${e.collection}"."${e.name}"` : `"${e.name}"`;
}
function um(e) {
  return typeof e.value == `string` ? `'${e.value}'` : e.value;
}
function dm(e) {
  return `${e.functionName}(${e.arguments.map((e) => gm(e)).join(`, `)})`;
}
function fm(e) {
  let t = `CASE`;
  e.value && (t += ` ${gm(e.value)}`);
  for (let n of e.conditions) t += ` WHEN ${gm(n.when)} THEN ${gm(n.then)}`;
  return (e.else && (t += ` ELSE ${gm(e.else)}`), (t += ` END`), t);
}
function pm(e) {
  let t = gm(e.value);
  return `${e.operator.toUpperCase()} ${t}`;
}
function mm(e) {
  let t = gm(e.left),
    n = gm(e.right);
  return `${t} ${e.operator.toUpperCase()} ${n}`;
}
function hm(e) {
  return `CAST(${gm(e.value)} as ${e.dataType})`;
}
function gm(e) {
  switch (e.type) {
    case `Identifier`:
      return lm(e);
    case `LiteralValue`:
      return um(e);
    case `FunctionCall`:
      return dm(e);
    case `Case`:
      return fm(e);
    case `UnaryOperation`:
      return pm(e);
    case `BinaryOperation`:
      return mm(e);
    case `TypeCast`:
      return hm(e);
    case `Select`:
      return `${xm(e)}`;
    default:
      U(e);
  }
}
function _m(e) {
  return cp(e.data)
    ? `Collection`
    : e.alias
      ? `"${e.data.displayName}" AS "${e.alias}"`
      : `"${e.data.displayName}"`;
}
function vm(e) {
  let t = `${ym(e.left)} LEFT JOIN ${ym(e.right)}`;
  return (e.constraint && (t += ` ON ${gm(e.constraint)}`), t);
}
function ym(e) {
  switch (e.type) {
    case `Collection`:
      return _m(e);
    case `LeftJoin`:
      return vm(e);
    default:
      U(e);
  }
}
function bm(e) {
  let t = ``;
  return (
    e.split(/\s+/u).forEach((e) => {
      e !== `` &&
        ([`SELECT`, `FROM`, `WHERE`, `ORDER`, `LIMIT`, `OFFSET`].includes(e)
          ? (t += `
${e}`)
          : [`AND`, `OR`].includes(e)
            ? (t += `
	${e}`)
            : (t += ` ${e}`));
    }),
    t.trim()
  );
}
function xm(e) {
  let t = ``;
  return (
    (t += `SELECT ${e.select
      .map((e) => {
        let t = gm(e);
        return e.alias ? `${t} AS "${e.alias}"` : t;
      })
      .join(`, `)}`),
    (t += ` FROM ${ym(e.from)}`),
    e.where && (t += ` WHERE ${gm(e.where)}`),
    e.orderBy &&
      (t += ` ORDER BY ${e.orderBy.map((e) => `${gm(e)} ${e.direction ?? `asc`}`).join(`, `)}`),
    e.limit && (t += ` LIMIT ${gm(e.limit)}`),
    e.offset && (t += ` OFFSET ${gm(e.offset)}`),
    bm(t)
  );
}
function Sm(e, t) {
  let n = Object.entries(e ?? {})
    .filter(([, e]) => !(Ze(e) || V(e)))
    .map(([e, n]) => ({
      type: `BinaryOperation`,
      operator: `==`,
      left: {
        type: `TypeCast`,
        value: { type: `Identifier`, name: e, collection: t },
        dataType: `STRING`,
      },
      right: { type: `LiteralValue`, value: String(n) },
    }));
  return n.length === 0
    ? { type: `LiteralValue`, value: !1 }
    : n.reduce((e, t) => ({ type: `BinaryOperation`, operator: `and`, left: e, right: t }));
}
function Cm(e) {
  let t = M(e);
  return (
    c(() => {
      t.current = e;
    }, [e]),
    Kr((...e) => {
      let n = t.current;
      return n(...e);
    }, [])
  );
}
function wm(e, t) {
  (e.forEach((e) => clearTimeout(e)),
    e.clear(),
    t.forEach((e) => e?.(`Callback cancelled by variant change`)),
    t.clear());
}
function Tm() {
  return new Set();
}
function Em(e) {
  let t = za(Tm),
    n = za(Tm);
  return (
    Zs(() => () => wm(n, t)),
    h(() => () => wm(n, t), []),
    h(() => {
      wm(n, t);
    }, [e]),
    M({
      activeVariantCallback:
        (e) =>
        async (...n) =>
          new Promise((r, i) => {
            (t.add(i), e(...n).then(r));
          }).catch(() => {}),
      delay: async (e, t) => {
        (await new Promise((e) => {
          n.add(globalThis.setTimeout(() => e(!0), t));
        }),
          e());
      },
    }).current
  );
}
function Dm(e, t, n) {
  return f.useCallback(
    (r) => (!n || !e ? {} : t ? Object.assign({}, n[e]?.[r], n[t]?.[r]) : n[e]?.[r] || {}),
    [e, t, n]
  );
}
function Om(e) {
  for (let [t, n] of Object.entries(e)) if (Vv.matchMedia(n).matches) return t;
}
function km(e) {
  let t = [];
  for (let { hash: n, mediaQuery: r } of e) r && Vv.matchMedia(r).matches && t.push(n);
  if (t.length > 0) return t;
  let n = e[0]?.hash;
  if (n) return [n];
}
function Am(e, t, n = !0) {
  let r = S(lC),
    i = Ua(),
    a = Fa(),
    o = En() && (!i || a),
    s = M(o ? (Om(t) ?? e) : e),
    c = M(n && r ? e : s.current),
    l = os(),
    d = ae(),
    f = C(
      (e) => {
        if (e !== s.current || e !== c.current) {
          let t = function () {
            ((s.current = c.current = e),
              u(() => {
                l();
              }));
          };
          i
            ? t()
            : d(() => {
                t();
              });
        }
      },
      [d, l, i]
    );
  return (
    Uy(() => {
      if (i) {
        if (a) {
          f(Om(t) ?? e);
          return;
        }
        f(e);
      }
    }, [e, a, i, t, f]),
    Uy(() => {
      !n || r !== !0 || f(s.current);
    }, []),
    h(() => {
      if (!o || a) return;
      let e = [];
      for (let [n, r] of Object.entries(t)) {
        let t = Vv.matchMedia(r),
          i = (e) => {
            e.matches && f(n);
          };
        (jm(t, i), e.push([t, i]));
      }
      return () => e.forEach(([e, t]) => Mm(e, t));
    }, [a, t, f, o]),
    [s.current, c.current]
  );
}
function jm(e, t) {
  e.addEventListener ? e.addEventListener(`change`, t) : e.addListener(t);
}
function Mm(e, t) {
  e.removeEventListener ? e.removeEventListener(`change`, t) : e.removeListener(t);
}
function Nm(e) {
  setTimeout(e, 1);
}
function Pm(e) {
  let t = new Set(),
    n = km(e);
  if (n)
    for (let e of n)
      for (let n of document.querySelectorAll(`.hidden-` + e))
        (Fm(n.previousSibling) && t.add(n.previousSibling), n.parentNode?.removeChild(n));
  (nv ? Vv.requestIdleCallback : Nm)(() => {
    document.querySelector(HD)?.remove();
  });
  for (let e of document.querySelectorAll(`.ssr-variant:empty`))
    (Fm(e.previousSibling) && t.add(e.previousSibling), e.parentNode?.removeChild(e));
  for (let e of t)
    Im(e.nextSibling) && (e.parentNode?.removeChild(e.nextSibling), e.parentNode?.removeChild(e));
}
function Fm(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `$`;
}
function Im(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `/$`;
}
function Lm() {
  let e = kt(),
    { activeLocale: t } = qn(),
    n = s(
      () =>
        ai(e, {
          currentRoutePath: e?.path,
          currentRoutePathLocalized: e?.pathLocalized,
          currentPathVariables: e?.pathVariables,
          preserveQueryParams: !1,
          relative: !1,
          siteCanonicalURL: void 0,
          localeId: t?.id,
        }),
      [e, t?.id]
    );
  return f.useCallback(
    (e) => {
      if (!e) return;
      let t = `${n}-${e}`,
        r = UD.get(t);
      if (r) return r;
      let i = y();
      return (UD.set(t, i), i);
    },
    [n]
  );
}
function Rm(e, t) {
  if (e[t]) return e[t];
  if (!(t in e)) return e.default;
}
function zm(e, t) {
  if (Ha()) return;
  let n = f.useRef(!0),
    r = f.useRef(t);
  (Zs((t, i) => {
    let a = t && !i;
    if (!n.current && a) {
      let t = Rm(r.current, e);
      t && t();
    }
    n.current = a;
  }, []),
    f.useEffect(() => {
      if (n.current) {
        let t = Rm(r.current, e);
        t && t();
      }
    }, [e]));
}
function Bm(e) {
  return V(e) && WD in e && e.page !== void 0;
}
function Vm(e, t) {
  return `${e}-${t}`;
}
function Hm(e, t) {
  let n = e.indexOf(t) + 1;
  n >= e.length && (n = 0);
  let r = e[n];
  return (H(r !== void 0, `nextVariant should be defined`), r);
}
function Um(e, t) {
  if (e) {
    if (t) {
      let n = e[t];
      if (n) return n;
    }
    return e.default;
  }
}
function Wm(e, t, n, r, i) {
  let { hover: a, pressed: o, loading: s, error: c } = e || {};
  if (c && i) return `error`;
  if (s && r) return `loading`;
  if (o && n) return `pressed`;
  if (a && t) return `hover`;
}
function Gm(e, t) {
  return t[e] || `framer-v-${e}`;
}
function Km(e, t, n) {
  return e && n.has(e) ? e : t;
}
function qm() {
  let e = M(),
    t = M(),
    n = C(() => {
      e.current &&
        (document.removeEventListener(`visibilitychange`, e.current),
        (e.current = void 0),
        (t.current = void 0));
    }, []);
  return (
    h(
      () => () => {
        n();
      },
      [n]
    ),
    C(
      (r) => {
        if (!document.hidden) {
          (r(), n());
          return;
        }
        if (((t.current = r), e.current)) return;
        let i = () => {
          document.hidden || (t.current?.(), n());
        };
        ((e.current = i), document.addEventListener(`visibilitychange`, i));
      },
      [n]
    )
  );
}
function Jm() {
  let e = M(),
    t = M(!1),
    n = M(),
    r = S(KS);
  return (
    h(
      () => () => {
        (e.current?.(), (n.current = void 0), (e.current = void 0));
      },
      []
    ),
    C(
      (i, a) => {
        if (!a?.current || t.current) {
          i();
          return;
        }
        if (((n.current = i), e.current)) return;
        let o = !1;
        e.current = Ws(r, `undefined`, a.current, null, (e) => {
          ((t.current = e.isIntersecting),
            !o &&
              ((o = !0),
              queueMicrotask(() => {
                ((o = !1), t.current && n.current?.());
              })));
        });
      },
      [r]
    )
  );
}
function Ym(e) {
  let t = qm(),
    n = Jm();
  return C(
    (r, i = !1) => {
      if (tv) {
        r();
        return;
      }
      t(i && e ? () => n(r, e) : r);
    },
    [t, n, e]
  );
}
async function Xm() {
  return new Promise((e) => {
    let t = e;
    (setTimeout(() => {
      t && (performance.mark(`wait-for-click-fallback`), t());
    }, 150),
      (qD = () => {
        (e(), (t = void 0));
      }));
  });
}
function Zm(e) {
  e.button === 0 && (performance.mark(`pointerdown-listener`), (KD = Xm()));
}
function Qm() {
  (performance.mark(`click-received-listener`), (KD = void 0), qD?.(), (qD = void 0));
}
function $m(e = !1) {
  h(() => {
    e &&
      (document.addEventListener(`pointerup`, Zm, !0),
      document.__proto__.addEventListener.call(document, `click`, Qm, !0));
  }, [e]);
}
function eh({
  variant: e,
  defaultVariant: t,
  transitions: n,
  enabledGestures: r,
  cycleOrder: i = [],
  variantProps: a = {},
  variantClassNames: o = {},
  ref: c,
}) {
  let l = os(),
    d = vu(),
    f = za(() => new Set(i));
  $m(gw().yieldOnTap);
  let p = Ym(c),
    m = M({
      isHovered: !1,
      isHoveredHasUpdated: !1,
      isPressed: !1,
      isPressedHasUpdated: !1,
      isError: !1,
      hasPressedVariants: !0,
      baseVariant: Km(e, t, f),
      lastVariant: e,
      gestureVariant: void 0,
      loadedBaseVariant: {},
      defaultVariant: t,
      enabledGestures: r,
      cycleOrder: i,
      transitions: n,
    }),
    h = C((e) => {
      let {
          isHovered: t,
          isPressed: n,
          isError: r,
          enabledGestures: i,
          defaultVariant: a,
        } = m.current,
        o = Km(e, a, f),
        s = Wm(i?.[o], t, n, !1, r);
      return [o, s ? Vm(o, s) : void 0];
    }, []),
    g = C(
      async (e, t, n, r, i = !1, a = !1) => {
        let [o, s] = h(r);
        if (o === e && s === t) return;
        (a && (m.current.isError = !1),
          (m.current.baseVariant = o || n),
          (m.current.gestureVariant = s));
        let c = gw().yieldOnTap && m.current.isPressedHasUpdated;
        (c &&
          KD &&
          (performance.mark(`wait-for-tap-start`),
          await KD,
          performance.measure(`wait-for-tap`, `wait-for-tap-start`)),
          c &&
            (performance.mark(`yield-on-tap-start`),
            await _y({ priority: `user-blocking`, continueAfter: `paint` }),
            performance.measure(`yield-on-tap`, `yield-on-tap-start`)));
        let {
          isHovered: d,
          isPressed: f,
          isHoveredHasUpdated: g,
          isPressedHasUpdated: _,
        } = m.current;
        if (d || g || f || _) {
          u(l);
          return;
        }
        p(() => u(l), i);
      },
      [h, l, p]
    ),
    _ = C(
      ({ isHovered: e, isPressed: t, isError: n }) => {
        e && !d && gw().disableHoverOnMobile && !ou() && (e = !1);
        let r = t !== m.current.isPressed,
          i = e !== m.current.isHovered;
        (e !== void 0 && (m.current.isHovered = e),
          t !== void 0 && (m.current.isPressed = t),
          n !== void 0 && (m.current.isError = n));
        let { baseVariant: a, gestureVariant: o, defaultVariant: s } = m.current;
        ((m.current.isPressedHasUpdated = r),
          (m.current.isHoveredHasUpdated = i),
          g(a, o, s, a, !1));
      },
      [g, d]
    ),
    v = C(
      (e, t = !1) => {
        let { defaultVariant: n, cycleOrder: r, baseVariant: i, gestureVariant: a } = m.current,
          o = e === GD ? Hm(r || [], i || n) : e;
        g(i, a, n, o, t, !0);
      },
      [g]
    ),
    y = C(() => {
      let { baseVariant: e } = m.current;
      ((m.current.loadedBaseVariant[e] = !0), p(() => u(l), !0));
    }, [l, p]);
  if (e !== m.current.lastVariant) {
    let [t, n] = h(e);
    ((m.current.lastVariant = t),
      (t !== m.current.baseVariant || n !== m.current.gestureVariant) &&
        ((m.current.baseVariant = t), (m.current.gestureVariant = n)));
  }
  let {
      baseVariant: b,
      gestureVariant: x,
      defaultVariant: S,
      enabledGestures: w,
      isHovered: T,
      isPressed: E,
      isError: D,
      loadedBaseVariant: O,
    } = m.current,
    k = Dm(m.current.baseVariant, m.current.gestureVariant, a);
  return s(() => {
    let e = [];
    b !== S && e.push(b);
    let t = w?.[b]?.loading,
      n = !D && !d && !!t && !O[b],
      r = n ? Vm(b, `loading`) : x;
    r && e.push(r);
    let i = w?.[b],
      a = { onMouseEnter: () => _({ isHovered: !0 }), onMouseLeave: () => _({ isHovered: !1 }) };
    return (
      i?.pressed &&
        Object.assign(a, {
          onTapStart: () => _({ isPressed: !0 }),
          onTapCancel: () => _({ isPressed: !1 }),
          onTap: () => _({ isPressed: !1 }),
        }),
      {
        variants: e,
        baseVariant: b,
        gestureVariant: r,
        isLoading: n,
        transition: Um(m.current.transitions, b),
        setVariant: v,
        setGestureState: _,
        clearLoadingGesture: y,
        addVariantProps: k,
        gestureHandlers: a,
        classNames: Zc(Gm(b, o), Wm(i, T, E, n, D)),
      }
    );
  }, [b, x, T, E, O, k, v, S, w, _, y, o]);
}
function th(e, { scopeId: t, nodeId: n, override: r, inComponentSlot: i }) {
  if (!Gl()) return r(e);
  let a = nh(e, r),
    o = !1;
  function s(r, s) {
    let c = Jl(),
      { disableCustomCode: l } = gw();
    if (l) return E(e, { ...r, ref: s });
    if (nu(t, c?.scopeId, c?.level, i ?? !1))
      return a.status === `success`
        ? E(Vy.Provider, {
            value: n,
            children: E(Kl, {
              getErrorMessage: $l.bind(null, t, n),
              fallback: E(e, { ...r, ref: s }),
              children: E(a.Component, { ...r, ref: s }),
            }),
          })
        : ((o ||= (Wl(a.error), Wl($l(t, n)), Ul(a.error), !0)), E(e, { ...r, ref: s }));
    if (a.status === `success`)
      return E(Vy.Provider, { value: n, children: E(a.Component, { ...r, ref: s }) });
    throw a.error;
  }
  return f.forwardRef(s);
}
function nh(e, t) {
  try {
    return { status: `success`, Component: t(e) };
  } catch (e) {
    return { status: `error`, error: e };
  }
}
function rh(e, t) {
  return t ? pe(0, 2, e) : e;
}
function ih() {
  return new Promise((e) => {
    Ge.postRender(() => e());
  });
}
function ah(e) {
  return typeof HTMLVideoElement < `u` && e instanceof HTMLVideoElement;
}
function oh(e) {
  if (typeof ImageBitmap < `u` && e instanceof ImageBitmap) {
    e.close();
    return;
  }
  ah(e) && (e.pause(), e.removeAttribute(`src`), e.load());
}
function sh(e) {
  for (let t of Object.values(e)) t.type === `sampler2D` && oh(t.value);
}
function ch(e, t) {
  return new Promise((n, r) => {
    let i = document.createElement(`video`);
    ((i.crossOrigin = `anonymous`),
      (i.muted = !0),
      (i.loop = !0),
      i.setAttribute(`playsinline`, ``),
      (i.preload = `auto`));
    let a = `Video texture load aborted`;
    if (t?.aborted) {
      (oh(i), r(Error(a)));
      return;
    }
    let o = () => u(a),
      s = () => u(`Failed to load video texture from "${e}"`),
      c = N.setTimeout(() => u(`Timed out loading video texture from "${e}"`), XD);
    function l() {
      (N.clearTimeout(c), t?.removeEventListener(`abort`, o), i.removeEventListener(`error`, s));
    }
    function u(e) {
      (l(), oh(i), r(Error(e)));
    }
    (t?.addEventListener(`abort`, o, { once: !0 }),
      i.addEventListener(
        `loadeddata`,
        () => {
          (l(), n(i));
        },
        { once: !0 }
      ),
      i.addEventListener(`error`, s, { once: !0 }),
      (i.src = e));
  });
}
function lh(e, t) {
  let n = e.createBuffer();
  if (!n) throw Error(`Failed to create buffer`);
  return (e.bindBuffer(e.ARRAY_BUFFER, n), e.bufferData(e.ARRAY_BUFFER, t, e.STATIC_DRAW), n);
}
function uh(e, t, n, r) {
  let i = e.getAttribLocation(t, `a_position`);
  i >= 0 &&
    (e.bindBuffer(e.ARRAY_BUFFER, n),
    e.enableVertexAttribArray(i),
    e.vertexAttribPointer(i, 2, e.FLOAT, !1, 0, 0));
  let a = e.getAttribLocation(t, `a_texCoord`);
  a >= 0 &&
    (e.bindBuffer(e.ARRAY_BUFFER, r),
    e.enableVertexAttribArray(a),
    e.vertexAttribPointer(a, 2, e.FLOAT, !1, 0, 0));
}
function dh(e, t) {
  return {
    [$D.time.name]: e.getUniformLocation(t, $D.time.name),
    [$D.resolution.name]: e.getUniformLocation(t, $D.resolution.name),
    [$D.deltaTime.name]: e.getUniformLocation(t, $D.deltaTime.name),
    [$D.pixelRatio.name]: e.getUniformLocation(t, $D.pixelRatio.name),
    [$D.mousePosition.name]: e.getUniformLocation(t, $D.mousePosition.name),
    [$D.mousePointerDown.name]: e.getUniformLocation(t, $D.mousePointerDown.name),
    [$D.mouseHover.name]: e.getUniformLocation(t, $D.mouseHover.name),
  };
}
function fh(e, t) {
  let n = e.createTexture();
  if (!n) throw Error(`Failed to create buffer texture`);
  return (
    e.bindTexture(e.TEXTURE_2D, n),
    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t),
    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, t),
    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
    n
  );
}
function ph(e, t) {
  let n = e.createFramebuffer();
  if (!n) throw Error(`Failed to create buffer framebuffer`);
  return (
    e.bindFramebuffer(e.FRAMEBUFFER, n),
    e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, t, 0),
    n
  );
}
function mh(e, t, n) {
  let r = e.checkFramebufferStatus(e.FRAMEBUFFER);
  if (r !== e.FRAMEBUFFER_COMPLETE)
    throw Error(
      `Shader buffer "${t}" framebuffer is incomplete (format: "${n}", status: 0x${r.toString(16)}).`
    );
}
function hh(e, t) {
  switch (t) {
    case `rgba8`:
      return { internalFormat: e.RGBA8, uploadFormat: e.RGBA, pixelType: e.UNSIGNED_BYTE };
    case `r8`:
      return { internalFormat: e.R8, uploadFormat: e.RED, pixelType: e.UNSIGNED_BYTE };
    case `rg16f`:
      return { internalFormat: e.RG16F, uploadFormat: e.RG, pixelType: e.HALF_FLOAT };
    case `rgba16f`:
      return { internalFormat: e.RGBA16F, uploadFormat: e.RGBA, pixelType: e.HALF_FLOAT };
    case `rgba32f`:
      return { internalFormat: e.RGBA32F, uploadFormat: e.RGBA, pixelType: e.FLOAT };
  }
}
function gh(e) {
  return e === `rg16f` || e === `rgba16f` || e === `rgba32f`;
}
function _h(e) {
  return e.startsWith(ZD) && e.length > ZD.length;
}
function vh(e) {
  return _h(e) && e.endsWith(rO);
}
function yh(e) {
  return _h(e) && e.endsWith(iO);
}
function bh(e) {
  return _h(e) && e.endsWith(aO);
}
function xh(e) {
  return e.replace(oO, `_`);
}
function Sh(e) {
  return `${ZD}${xh(e)}`;
}
function Ch(e) {
  return `${e}${iO}`;
}
function wh(e) {
  return `${ZD}${xh(e)}${rO}`;
}
function Th(e) {
  return `${ZD}${xh(e)}${aO}`;
}
function Eh(e) {
  return `NUM_${xh(e)
    .replace(/[a-z0-9](?=[A-Z])/gu, `$&_`)
    .toUpperCase()}`;
}
function Dh(e) {
  switch (e) {
    case `number`:
    case `enum`:
      return `float`;
    case `boolean`:
      return `float`;
    case `color`:
      return `vec4`;
    case `responsiveimage`:
    case `file`:
      return `sampler2D`;
    default:
      U(e);
  }
}
function Oh(e = {}) {
  let { propertyControls: t, heightmapSource: n, bufferNames: r } = e,
    i = [sO, cO, ``, lO, uO],
    a = t ? Object.values(t) : [];
  if (a.length > 0) {
    if (a.some((e) => e?.type === `array`)) {
      i.push(``);
      for (let e in t) {
        let n = t[e];
        if (!(!n || n.type !== `array`)) {
          if (n.control?.type !== `color`)
            throw Error(
              `Shader array control "${e}" is not supported. Only color arrays may be defined.`
            );
          if (!B(n.maxCount)) throw Error(`Shader array control "${e}" must have a maxCount.`);
          i.push(`#define ${Eh(e)} ${n.maxCount}`);
        }
      }
    }
    i.push(``);
    for (let e in t) {
      let n = t[e];
      if (n)
        if (n.type === `array`) {
          let t = Sh(e);
          (i.push(`uniform vec4 ${t}[${Eh(e)}];`), i.push(`uniform int ${Ch(t)};`));
        } else {
          let t = Dh(n.type);
          i.push(`uniform ${t} ${Sh(e)};`);
        }
    }
  }
  if ((n && i.push(`uniform sampler2D ${wh(n)};`), r && r.length > 0)) {
    i.push(``);
    for (let e of r) i.push(`uniform sampler2D ${Th(e)};`);
  }
  i.push(``);
  for (let e of Object.values($D)) i.push(`uniform ${e.glslType} ${e.name};`);
  return (
    i.push(``),
    i.join(`
`)
  );
}
function kh(e, t, n = {}) {
  let r = Oh(n);
  return t
    ? `${r}${t}
${e}`
    : r + e;
}
function Ah(e, t, n) {
  if (e)
    return e.map((e) => ({
      uniformName: Th(e.name),
      fragment: kh(e.fragment, t, n),
      resolutionScale: e.resolutionScale ?? dO,
      format: e.format ?? fO,
    }));
}
function jh(e) {
  Mh(e);
  let t = e.buffers ? e.buffers.map((e) => e.name) : void 0,
    n = kh(e.fragment, e.common, {
      propertyControls: e.propertyControls,
      heightmapSource: e.heightmapSource,
      bufferNames: t,
    }),
    r = Ah(e.buffers, e.common, {
      propertyControls: e.propertyControls,
      heightmapSource: e.heightmapSource,
      bufferNames: t,
    });
  return { ...e, fragment: n, buffers: r, [pO]: !0 };
}
function Mh(e) {
  let t = new Map();
  if (e.propertyControls)
    for (let n in e.propertyControls) {
      if (_h(n) || n === ZD)
        throw Error(`Property control key "${n}" must not start with "${ZD}".`);
      let e = Sh(n);
      if (vh(e)) throw Error(`Property control key "${n}" must not end with "_heightmap".`);
      if (yh(e)) throw Error(`Property control key "${n}" must not end with "_length".`);
      if (bh(e)) throw Error(`Property control key "${n}" must not end with "_buffer".`);
      let r = t.get(e);
      if (r !== void 0)
        throw Error(
          `Property control keys "${r}" and "${n}" both resolve to the same uniform "${e}".`
        );
      t.set(e, n);
    }
  if (e.heightmapSource) {
    let t = e.propertyControls?.[e.heightmapSource];
    if (!t || t.type !== `responsiveimage`)
      throw Error(
        `heightmapSource "${e.heightmapSource}" must reference a ResponsiveImage property control.`
      );
  }
  if (e.buffers)
    for (let n of e.buffers) {
      if (_h(n.name)) throw Error(`Shader buffer name "${n.name}" must not start with "${ZD}".`);
      let e = Th(n.name),
        r = t.get(e);
      if (r !== void 0)
        throw Error(
          r === n.name
            ? `Duplicate shader buffer name "${n.name}".`
            : `Shader buffer names "${r}" and "${n.name}" both resolve to the same uniform "${e}".`
        );
      if (
        (t.set(e, n.name),
        n.resolutionScale !== void 0 &&
          (!B(n.resolutionScale) || n.resolutionScale <= 0 || n.resolutionScale > 1))
      )
        throw Error(
          `Shader buffer "${n.name}" has invalid resolutionScale ${n.resolutionScale}. Must be in the range (0, 1].`
        );
      if (n.format !== void 0 && !QD.has(n.format))
        throw Error(
          `Shader buffer "${n.name}" has invalid format "${n.format}". Must be one of: ${[...QD].join(`, `)}.`
        );
    }
}
function Nh(e, t = 0) {
  let n = e.indexOf(`var(`, t);
  if (n === -1) return null;
  let r = n + 4,
    i = 1,
    a;
  for (let t = r; t < e.length; t++)
    if (e[t] === `(`) i++;
    else if (e[t] === `)`) {
      if ((i--, i === 0)) return { start: n, end: t + 1, commaIndex: a };
    } else a === void 0 && e[t] === `,` && (a = t);
  return null;
}
function Ph(e, t) {
  if (!t) return {};
  let { start: n, end: r, commaIndex: i } = t,
    a = e.substring(r).trim();
  return i
    ? {
        customProperty: e.substring(n + 4, i),
        fallback: e.substring(i + 1, r - 1).trim(),
        metadata: a,
      }
    : { customProperty: e.substring(n + 4, r - 1), metadata: a };
}
function Fh(e) {
  return Ph(e, Nh(e));
}
function Ih(e, t) {
  if (e.size < t) return;
  let n = e.keys().next().value;
  n !== void 0 && e.delete(n);
}
function Lh(e, t) {
  if (!Hh(e)) return;
  let n = t?.();
  if (!n) return Rh(e);
  let r = vO.generate(n, () => Rh(e));
  if (r instanceof HTMLCanvasElement) return r;
}
function Rh(e) {
  let t = Vh(e);
  if (!t) return;
  let n = yO / Math.min(t.width, t.height),
    r = yO * yO,
    i = t.width * n * (t.height * n);
  i > r && (n *= Math.sqrt(r / i));
  let a = Math.max(1, Math.round(t.width * n)),
    o = Math.max(1, Math.round(t.height * n)),
    s = document.createElement(`canvas`);
  ((s.width = a), (s.height = o));
  let c = s.getContext(`2d`);
  if (!c) return;
  c.drawImage(t.source, 0, 0, a, o);
  let l = c.getImageData(0, 0, a, o).data,
    u = a * o,
    d = new Uint8Array(u);
  for (let e = 0; e < u; e++) d[e] = +((l[e * 4 + 3] ?? 0) > 0);
  let f = new Uint8Array(u);
  for (let e = 0; e < u; e++) {
    if (d[e] === 0) continue;
    let t = e % a,
      n = Math.floor(e / a);
    if (t === 0 || t === a - 1 || n === 0 || n === o - 1) continue;
    let r = !1;
    for (let e = -1; e <= 1 && !r; e++)
      for (let i = -1; i <= 1 && !r; i++)
        (i === 0 && e === 0) || (d[(n + e) * a + (t + i)] === 0 && (r = !0));
    r || (f[e] = 1);
  }
  let p = zh(f, a, o),
    m = 0;
  for (let e = 0; e < u; e++) {
    let t = p[e] ?? 0;
    t > m && (m = t);
  }
  let h = document.createElement(`canvas`);
  ((h.width = a), (h.height = o));
  let g = h.getContext(`2d`);
  if (!g) return;
  let _ = g.createImageData(a, o);
  for (let e = 0; e < u; e++) {
    let t = m > 0 ? (p[e] ?? 0) / m : 0;
    ((_.data[e * 4] = Math.round(t * 255)),
      (_.data[e * 4 + 1] = 255 - (l[e * 4 + 3] ?? 0)),
      (_.data[e * 4 + 2] = d[e] ? 255 : 0),
      (_.data[e * 4 + 3] = 255));
  }
  g.putImageData(_, 0, 0);
  let v = document.createElement(`canvas`);
  ((v.width = t.width), (v.height = t.height));
  let y = v.getContext(`2d`);
  if (y) return ((y.imageSmoothingEnabled = !0), y.drawImage(h, 0, 0, t.width, t.height), v);
}
function zh(e, t, n) {
  let r = t * n,
    i = new Float32Array(r),
    a = 1.95,
    o = 0.01,
    s = [],
    c = [];
  for (let i = 0; i < r; i++) {
    if (e[i] === 0) continue;
    let r = i % t,
      a = Math.floor(i / t);
    ((r + a) % 2 == 0 ? s : c).push(
      i,
      a > 0 ? i - t : -1,
      a < n - 1 ? i + t : -1,
      r > 0 ? i - 1 : -1,
      r < t - 1 ? i + 1 : -1
    );
  }
  let l = new Int32Array(s),
    u = new Int32Array(c),
    d = 1 - a,
    f = a / 4;
  for (let e = 0; e < 50; e++) (Bh(l, i, d, f, o), Bh(u, i, d, f, o));
  return i;
}
function Bh(e, t, n, r, i) {
  for (let a = 0; a < e.length; a += 5) {
    let o = e[a] ?? 0,
      s = e[a + 1] ?? -1,
      c = e[a + 2] ?? -1,
      l = e[a + 3] ?? -1,
      u = e[a + 4] ?? -1,
      d = s >= 0 ? (t[s] ?? 0) : 0,
      f = c >= 0 ? (t[c] ?? 0) : 0,
      p = l >= 0 ? (t[l] ?? 0) : 0,
      m = u >= 0 ? (t[u] ?? 0) : 0;
    t[o] = n * (t[o] ?? 0) + r * (i + d + f + p + m);
  }
}
function Vh(e) {
  if (e instanceof HTMLImageElement) {
    let t = e.naturalWidth,
      n = e.naturalHeight;
    return t > 0 && n > 0 ? { source: e, width: t, height: n } : void 0;
  }
  if (e instanceof HTMLCanvasElement)
    return e.width > 0 && e.height > 0 ? { source: e, width: e.width, height: e.height } : void 0;
}
function Hh(e) {
  return e instanceof HTMLImageElement || e instanceof HTMLCanvasElement;
}
function Uh(e) {
  (e.controller.abort(), e.promise.then(oh, () => {}));
}
function Wh(e, t) {
  let n = Fh(e);
  if (!n.customProperty) return e;
  if (t) {
    let e = getComputedStyle(t).getPropertyValue(n.customProperty).trim();
    if (e) return Mb.srgbFromValue(e);
  }
  return Mb.srgbFromValue(n.fallback ?? e);
}
function Gh(e, t) {
  let n = Wh(e, t),
    r = q.toRgb(q(n));
  return [r.r / 255, r.g / 255, r.b / 255, r.a];
}
function Kh(e, t, n) {
  return Jh(e)
    ? n
      ? t?.aborted
        ? Promise.reject(Error(`Texture load aborted`))
        : qh(SO.acquire(n, e), t)
      : ch(e, t)
    : qh(
        vO.load(e, () => Zh(e)),
        t
      );
}
function qh(e, t) {
  return t
    ? new Promise((n, r) => {
        let i = () => r(Error(`Texture load aborted`));
        if (t.aborted) {
          i();
          return;
        }
        (t.addEventListener(`abort`, i, { once: !0 }),
          e.then(
            (e) => {
              (t.removeEventListener(`abort`, i), n(e));
            },
            (e) => {
              (t.removeEventListener(`abort`, i), r(e));
            }
          ));
      })
    : e;
}
function Jh(e) {
  return eg(e, DO);
}
function Yh(e) {
  let { value: t } = e;
  if (z(t)) return t;
  if (V(t) && `src` in t) return t.src;
}
function Xh(e) {
  let t = new Set();
  for (let n of Object.values(e)) n.type === `file` && Jh(n.value) && t.add(n.value);
  return t;
}
function Zh(e) {
  return new Promise((t, n) => {
    let r = new Image();
    ((r.crossOrigin = `anonymous`),
      (r.onload = () => t($h(r) ?? r)),
      (r.onerror = (t) => {
        let r =
          t instanceof ErrorEvent && t.message
            ? `Failed to load texture from "${e}": ${t.message}`
            : `Failed to load texture from "${e}"`;
        n(Error(r));
      }),
      (r.src = e));
  });
}
function Qh(e) {
  if (e instanceof HTMLImageElement) return e.src || void 0;
  if (e instanceof HTMLCanvasElement) return e.dataset.src || void 0;
}
function $h(e) {
  if (!tg(e.src)) return;
  let t = e.naturalWidth,
    n = e.naturalHeight;
  if (t <= 0 || n <= 0) return;
  let r = kO / Math.max(t, n),
    i = Math.max(1, Math.round(t * r)),
    a = Math.max(1, Math.round(n * r)),
    o = document.createElement(`canvas`);
  ((o.width = i), (o.height = a));
  let s = o.getContext(`2d`);
  if (s) return (s.drawImage(e, 0, 0, i, a), (o.dataset.src = e.src), o);
}
function eg(e, t) {
  try {
    let n = new URL(e, `https://placeholder`).pathname.toLowerCase();
    return t.some((e) => n.endsWith(e));
  } catch {
    let n = e.toLowerCase();
    return t.some((e) => n.includes(e));
  }
}
function tg(e) {
  return eg(e, [OO]);
}
async function ng(e, t, n, r) {
  switch (e.type) {
    case `number`:
    case `enum`:
      return { type: `float`, value: e.value };
    case `boolean`:
      return { type: `boolean`, value: e.value };
    case `color`:
      return { type: `vec4`, value: Gh(e.value, t) };
    case `responsiveimage`:
    case `file`: {
      let t = Yh(e);
      return t ? { type: `sampler2D`, value: await Kh(t, n, r) } : void 0;
    }
    case `array`:
      return { type: `vec4[]`, value: e.value.map((e) => Gh(e, t)) };
    default:
      U(e);
  }
}
async function rg(e, t, n, r) {
  let i = {},
    a = n ? Sh(n) : void 0,
    o = t?.current ?? null;
  try {
    for (let [s, c] of Object.entries(e)) {
      let e = await ng(c, o, r, t);
      if (
        e &&
        ((i[s] = e),
        c.type === `array` && (i[Ch(s)] = { type: `int`, value: c.value.length }),
        n && a && s === a && e.type === `sampler2D`)
      ) {
        let t = Lh(e.value, () => Qh(e.value));
        t && (i[wh(n)] = { type: `sampler2D`, value: t });
      }
    }
  } catch (e) {
    throw (t || sh(i), e);
  }
  return i;
}
function ig(e) {
  return typeof e == `number` ? e : e === `performance` ? 0.75 : e === `consistent` ? 0 : 1;
}
function ag(e, t, n) {
  let r = e * wO;
  return { currentTime: r, elapsedTime: r - t, deltaTime: n === t ? 1 / 60 : r - n };
}
function og() {
  return S(IO);
}
function sg(e) {
  let t = M(e);
  return (wt(t.current, e) || (t.current = e), t.current);
}
function cg(e, t, n, r, i) {
  let [a, o] = A({}),
    [s, c] = A(e === void 0),
    l = sg(e);
  return (
    h(() => () => SO.releaseAll(t), [t]),
    h(() => {
      if (!l) {
        (SO.releaseAll(t),
          u(() => {
            (o({}), c(!0));
          }));
        return;
      }
      let e = new AbortController();
      return (
        rg(l, t, n, e.signal)
          .then((n) => {
            e.signal.aborted ||
              (SO.keepOnly(t, Xh(l)),
              u(() => {
                (o(n), c(!0));
              }),
              r?.());
          })
          .catch(() => {
            e.signal.aborted || (SO.releaseAll(t), i?.());
          }),
        () => e.abort()
      );
    }, [l, t, n, r, i]),
    { resolvedUniforms: a, haveUniformsResolved: s }
  );
}
function lg(e, t) {
  (h(() => {
    let n = e.current;
    if (!n) return;
    let r = new ResizeObserver(t);
    return (
      r.observe(n),
      () => {
        r.disconnect();
      }
    );
  }, [e, t]),
    ug(t));
}
function ug(e) {
  h(() => {
    let t = matchMedia(`(resolution: ${N.devicePixelRatio}dppx)`),
      n = () => {
        (e(),
          t.removeEventListener(`change`, n),
          (t = matchMedia(`(resolution: ${N.devicePixelRatio}dppx)`)),
          t.addEventListener(`change`, n));
      };
    return (
      t.addEventListener(`change`, n),
      () => {
        t.removeEventListener(`change`, n);
      }
    );
  }, [e]);
}
function dg(e, t, r, i, a, o, s, c) {
  let l = I() === !0 || J.current() === J.export,
    d = s || l,
    f,
    p,
    m,
    h;
  if (e !== null) {
    let n = e !== FO.noSlot;
    ((f = !n), (p = (o ?? !0) && t && !r && !l && !c), (m = n && !p), (h = `instant`));
  } else ((f = a === `fallback` || !i), (p = (o ?? !0) && !l && !c), (m = !p), (h = a));
  let [g, _] = A(!1),
    v = C(() => {
      u(() => _(!0));
    }, []);
  (n(() => {
    g && t && u(() => _(!1));
  }, [g, t]),
    g && (f = !0));
  let [y, b] = A(!1),
    x = C(() => {
      u(() => b(!0));
    }, []),
    S = C(() => {
      u(() => b(!1));
    }, []),
    w = M(t);
  return (
    n(() => {
      let e = !w.current && t;
      ((w.current = t), e && y && S());
    }, [y, t, S]),
    y && (f = !0),
    a !== `fallback` && s && !g && !y && i && e !== FO.noSlot && (f = !1),
    {
      isFallbackOnly: f,
      effectiveAnimated: p,
      effectiveSingleFrame: m,
      effectiveMode: h,
      shouldSkipFallbackOverlay: d,
      onContextLost: v,
      onUniformResolutionSucceeded: S,
      onUniformResolutionFailed: x,
    }
  );
}
function fg(e = !0) {
  let [t, n] = A(!e);
  return (
    Uy(() => {
      if (!e) {
        u(() => n(!0));
        return;
      }
      u(() => n(!1));
      let t = N.setTimeout(() => {
        u(() => n(!0));
      }, LO);
      return () => {
        clearTimeout(t);
      };
    }, [e]),
    t
  );
}
function pg(e, t) {
  for (let n of Object.values(e)) n.type === `sampler2D` && ah(n.value) && t(n.value);
}
function mg(e, t, r) {
  let i = M(!1);
  n(() => {
    let n = t && !i.current;
    i.current = t;
    let a = !1;
    (pg(e, (e) => {
      if (t) {
        (n && (e.currentTime = 0), e.play().catch(() => {}));
        return;
      }
      (e.pause(),
        e.currentTime !== 0 &&
          (e.addEventListener(`seeked`, () => r(), { once: !0 }), (e.currentTime = 0), (a = !0)));
    }),
      a && r());
  }, [e, t, r]);
}
function hg({
  vertexShader: e = NO,
  fragmentShader: t = PO,
  animated: r = !0,
  resolutionScale: i,
  uniforms: a,
  onError: o,
  onReady: s,
  onContextLost: c,
  onUniformResolutionSucceeded: l,
  onUniformResolutionFailed: d,
  singleFrame: f = !1,
  heightmapSource: p,
  mouseDataRef: m,
  buffers: g,
}) {
  let _ = M(null),
    v = M(null),
    y = M(0),
    b = M(0),
    x = M(0),
    S = M(null),
    [w, T] = A(!1),
    D = M(s);
  n(() => {
    D.current = s;
  }, [s]);
  let O = M(c);
  n(() => {
    O.current = c;
  }, [c]);
  let { resolvedUniforms: k, haveUniformsResolved: j } = cg(a, _, p, l, d),
    ee = M(k),
    P = M(r);
  n(() => {
    P.current = r;
  }, [r]);
  let te = M(f);
  n(() => {
    te.current = f;
  }, [f]);
  let ne = M(!1),
    F = C(() => {
      ne.current ||
        !j ||
        ((ne.current = !0),
        D.current?.(),
        (S.current = requestAnimationFrame(() => {
          ((S.current = null), performance.mark?.(`shader_rendered`));
        })));
    }, [j]),
    re = M({ width: 0, height: 0, dpr: 0 }),
    ie = M({ width: 0, height: 0, dpr: 0 }),
    I = C(() => {
      let e = _.current;
      e && (re.current = { width: e.offsetWidth, height: e.offsetHeight, dpr: N.devicePixelRatio });
    }, []),
    ae = C(() => {
      let e = v.current;
      if (!e) return;
      let t = re.current,
        n = ie.current;
      (t.width === n.width && t.height === n.height && t.dpr === n.dpr) ||
        (e.resize(), (ie.current = { ...t }));
    }, []),
    oe = C(
      (e) => {
        let t = v.current;
        if (!t) return;
        if (te.current) {
          if (!j) return;
          (ae(), t.render(0, 0, ee.current, m?.current ?? EO), F());
          return;
        }
        if (!j) {
          y.current = requestAnimationFrame(oe);
          return;
        }
        (ne.current || ((b.current = e * wO), (x.current = b.current)), ae());
        let { currentTime: n, elapsedTime: r, deltaTime: i } = ag(e, b.current, x.current);
        ((x.current = n),
          t.render(r, i, ee.current, m?.current ?? EO),
          F(),
          !te.current && P.current && (y.current = requestAnimationFrame(oe)));
      },
      [j, F, m, ae]
    ),
    se = C(() => {
      let e = v.current;
      !e || !j || (ae(), e.render(0, 0, ee.current, m?.current ?? EO), F());
    }, [j, m, F, ae]);
  (n(() => {
    ((ee.current = k), te.current && v.current && se());
  }, [k, se]),
    mg(k, r && !f && j && w, se),
    h(() => {
      let n = _.current;
      if (!(!n || !j)) {
        ne.current = !1;
        try {
          let r = new nO(n, e, t, ig(i), O.current, g);
          ((v.current = r),
            (ie.current = { width: 0, height: 0, dpr: 0 }),
            I(),
            ae(),
            (b.current = performance.now() * wO),
            (x.current = b.current),
            te.current ? se() : (y.current = requestAnimationFrame(oe)),
            u(() => T(!0)));
        } catch (e) {
          (u(() => T(!1)), o && e instanceof Error && o(e));
        }
        return () => {
          (cancelAnimationFrame(y.current),
            S.current !== null && cancelAnimationFrame(S.current),
            v.current?.dispose(),
            (v.current = null));
        };
      }
    }, [e, t, i, oe, se, o, g, j, I, ae]));
  let ce = M(r),
    le = M(f);
  return (
    h(() => {
      let e = r && !ce.current,
        t = !f && le.current;
      ((e || t) &&
        v.current &&
        ((b.current = performance.now() * wO),
        (x.current = b.current),
        (y.current = requestAnimationFrame(oe))),
        (ce.current = r),
        (le.current = f));
    }, [r, f, oe]),
    lg(
      _,
      C(() => {
        let e = v.current;
        if (!e || !j) return;
        if ((I(), te.current)) {
          se();
          return;
        }
        ae();
        let {
          currentTime: t,
          elapsedTime: n,
          deltaTime: r,
        } = ag(performance.now(), b.current, x.current);
        ((x.current = t), e.render(n, r, ee.current, m?.current ?? EO));
      }, [j, m, se, I, ae])
    ),
    E(`canvas`, { ref: _, style: RO, draggable: !1 })
  );
}
function gg() {
  ((VO = L(0)), (HO = L(0)));
  let e = 0,
    t = 0;
  function n() {
    !VO || !HO || (VO.set(e), HO.set(t));
  }
  N !== void 0 &&
    (N.addEventListener(
      `pointermove`,
      vg((r) => {
        ((e = r.clientX), (t = r.clientY), Ge.update(n));
      })
    ),
    N.addEventListener(`dragover`, (r) => {
      ((e = r.clientX), (t = r.clientY), Ge.update(n));
    }));
}
function _g(e = !0) {
  return (e && !VO && gg(), { x: VO, y: HO });
}
function vg(e) {
  return (t) => {
    t.pointerType === `mouse` && e(t);
  };
}
function yg(e) {
  let t = e ?? UO;
  return t.duration === void 0 ? t : { ...t, duration: t.duration * 1e3 };
}
function bg(e, t, n) {
  return !e || e.width <= 0 || e.height <= 0
    ? [TO, TO]
    : [(t - e.left) / e.width, 1 - (n - e.top) / e.height];
}
function xg(e, t) {
  let n = M(EO),
    r = t?.enabled ?? !1,
    i = yg(t?.springOptions),
    a = M(null),
    o = C(() => {
      let t = e.current;
      t && (a.current = t.getBoundingClientRect());
    }, [e]),
    { x: s, y: c } = _g(r),
    l = ge(0),
    u = ge(0),
    d = s ?? l,
    f = c ?? u,
    p = be(d, (e) => bg(a.current, e, f.get())[0]),
    m = be(f, (e) => bg(a.current, d.get(), e)[1]),
    g = ge(0),
    _ = ge(0),
    v = se(p, i),
    y = se(m, i),
    b = se(g, i),
    x = se(_, i),
    S = ye(v),
    w = ye(y);
  return (
    h(() => {
      if (!r) return;
      let t = e.current;
      if (!t) return;
      o();
      let i = !1;
      N.addEventListener(`scroll`, o, { passive: !0, capture: !0 });
      let a = je(o),
        s = je(t, o),
        c = we(
          t,
          () => (
            o(),
            i || ((i = !0), v.jump(p.get()), y.jump(m.get())),
            Ge.update(() => _.set(1)),
            () => Ge.update(() => _.set(0))
          )
        ),
        l = P(t, () => (Ge.update(() => g.set(1)), () => Ge.update(() => g.set(0))));
      return () => {
        (N.removeEventListener(`scroll`, o, { capture: !0 }), a(), s(), c(), l(), (n.current = EO));
      };
    }, [r, e, p, m, g, _, v, y, o]),
    Sg(
      r,
      C(() => {
        n.current = {
          position: [v.get(), y.get(), S.get(), w.get()],
          pointerDown: b.get(),
          hover: x.get(),
        };
      }, [v, y, b, x, S, w])
    ),
    n
  );
}
function Sg(e, t) {
  h(() => {
    if (!e) return;
    let n = 0,
      r = performance.now();
    function i(e) {
      (t(e, e - r), (r = e), (n = requestAnimationFrame(i)));
    }
    return ((n = requestAnimationFrame(i)), () => cancelAnimationFrame(n));
  }, [e, t]);
}
function Cg(e, t, n) {
  let r = og(),
    [i, a] = A(FO.noSlot);
  return (
    h(() => {
      if (!r || !e) return;
      (r.register(e, t, n), u(() => a(r.getSlotStatus(e))));
      let i = r.subscribe(e, () => {
        u(() => a(r.getSlotStatus(e)));
      });
      return () => {
        i();
      };
    }, [r, e, t, n]),
    h(() => {
      if (!(!r || !e))
        return () => {
          r.deregister(e);
        };
    }, [r, e]),
    r ? i : null
  );
}
function wg(e, t, n) {
  let r = [],
    i = Sl(e, t, (e) => r.unshift(e, e));
  if (n) {
    let e = i[i.length - 1];
    if (!B(e)) return qO;
    (i.push(e + 1), r.push(-1));
  }
  let a = i[0];
  return B(a)
    ? a <= 1
      ? { inputRange: i, outputRange: r }
      : { inputRange: [0, Math.max(a - 1, 0), ...i], outputRange: [-1, -1, ...r] }
    : qO;
}
function Tg(e, t, n, r = ZO) {
  let [i, a] = f.useState(e),
    [o, s] = f.useState(e);
  return (
    t && e !== o && (s(e), a(e)),
    [
      i,
      a,
      f.useCallback(
        (e) => {
          pi(e) ||
            (t && a(r(e)),
            n &&
              f.startTransition(() => {
                n(e);
              }));
        },
        [r, n, t]
      ),
    ]
  );
}
function Eg(e, t) {
  return !e || t !== `date` ? e : e.includes(`T`) ? e.split(`T`)[0] : e;
}
function Dg() {
  return E(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    width: `8`,
    height: `8`,
    viewBox: `0 0 8 8`,
    "aria-hidden": `true`,
    children: E(`path`, {
      d: `m1.5 6.5 5-5M6.5 6.5l-5-5`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.5`,
      strokeLinecap: `round`,
    }),
  });
}
function Og(e, t) {
  h(() => {
    function n(n) {
      n.key === `Escape` && e && (n.preventDefault(), n.stopPropagation(), t());
    }
    return (N.addEventListener(`keyup`, n), () => N.removeEventListener(`keyup`, n));
  }, [e, t]);
}
function kg(e, t, n, r) {
  let i = N.innerHeight - r,
    a = Math.min(N.innerWidth - n, t),
    o = i / e;
  return Math.min(a, o);
}
function Ag(e, { width: t, height: n }) {
  if (!e.src || !e.srcSet) return;
  let r = new N.Image();
  return (
    (r.src = e.src),
    (r.srcset = e.srcSet),
    (r.sizes = e.sizes || ``),
    (r.width = t),
    (r.height = n),
    r.decode()
  );
}
function jg() {
  return document.getElementById(Xw) ?? document.getElementById(Yw) ?? document.body;
}
function Mg(e, t) {
  return B(e) ? e : (t ?? 0);
}
function Ng(e) {
  return Mg(e?.paddingTop, e?.padding) + Mg(e?.paddingBottom, e?.padding);
}
function Pg(e) {
  return Mg(e?.paddingLeft, e?.padding) + Mg(e?.paddingRight, e?.padding);
}
function Fg(e, t) {
  if (!e || !t?.src) return t;
  let n = new URL(t.src);
  return (
    n.searchParams.delete(`scale-down-to`),
    n.searchParams.delete(`lossless`),
    {
      ...t,
      sizes: `min(100vw, ${e.maxWidth - Pg(e)}px)`,
      srcSet: Ya(t.nodeFixedSize, t, t.src).srcSet,
    }
  );
}
function Ig(e) {
  if (!e) return !1;
  for (let t in e) {
    if (!(t in lk)) continue;
    let n = lk[t],
      r = e[t];
    if (!(!B(n) || !B(r)) && n !== r) return !0;
  }
  return !1;
}
function Lg(e) {
  let t = xe.get(e.current);
  if (!t) return !1;
  if (Ig(t.projection?.latestValues)) return !0;
  let n = t.projection?.path;
  if (!n || n.length === 0) return !1;
  for (let e of n) if (Ig(e.latestValues)) return !0;
  return !1;
}
function Rg(e) {
  return D(function ({ lightbox: t, lightboxClassName: n, onClick: r, ...a }, o) {
    let c = S(Ce),
      l = S(YD),
      d = !!l,
      f = M(null),
      p = o ?? f,
      m = M(),
      _ = s(() => Fg(t, a.background), [t, a.background]),
      [v, y] = A(!1),
      [b, T] = A(),
      D = C(() => {
        if (t) {
          if (v) {
            u(() => {
              y(!0);
            });
            return;
          }
          Ge.read(() => {
            if (!p.current) return;
            let e = getComputedStyle(p.current),
              n =
                p.current.getAttribute(`data-border`) === `true`
                  ? getComputedStyle(p.current, `::after`)
                  : void 0,
              r = p.current.offsetWidth ?? 1,
              i = p.current.offsetHeight ?? 1,
              a = Lg(p) || d ? { duration: 0 } : t.transition;
            u(() => {
              (T({
                borderRadius: e.borderRadius,
                aspectRatio: r / (i || 1),
                borderTop: n?.borderTopWidth,
                borderRight: n?.borderRightWidth,
                borderBottom: n?.borderBottomWidth,
                borderLeft: n?.borderLeftWidth,
                borderStyle: n?.borderStyle,
                borderColor: n?.borderColor,
                transition: a,
                imageRendering: e.imageRendering,
                filter: e.filter,
              }),
                y(!0),
                l?.stop());
            });
          });
        }
      }, [t, v, p, l?.stop, d]),
      O = b?.aspectRatio ?? 1,
      k = Cm(() => {
        if (!t || !_?.src) return;
        let e = m.current?.[_.src];
        if (e) return e;
        let n = kg(O, t.maxWidth, Pg(t), Ng(t)),
          r = Ag(_, { width: n, height: n * O });
        return ((m.current = { [_.src]: r }), r);
      }),
      ee = C(
        async (e) => {
          (r?.(e), !(v || !t || !_) && (await k(), D()));
        },
        [r, D, v, _, t, k]
      ),
      N = C((e) => {
        (e?.stopPropagation(),
          u(() => {
            y(!1);
          }));
      }, []);
    (Og(v, N),
      h(() => {
        if (!t) return;
        let e;
        function n() {
          e = setTimeout(() => {
            k();
          }, 50);
        }
        function r() {
          clearTimeout(e);
        }
        let i = p.current;
        return (
          i?.addEventListener(`mouseenter`, n),
          i?.addEventListener(`mouseleave`, r),
          i?.addEventListener(`pointerdown`, k),
          () => {
            (r(),
              i?.removeEventListener(`mouseenter`, n),
              i?.removeEventListener(`mouseleave`, r),
              i?.removeEventListener(`pointerdown`, k));
          }
        );
      }, [k, p, t]));
    let P = j(),
      te = b?.transition ?? a.transition ?? c.transition,
      ne = b?.borderRadius,
      re = b?.imageRendering,
      ie = b?.filter,
      I = b?.borderTop,
      ae = b?.borderRight,
      oe = b?.borderBottom,
      se = b?.borderLeft,
      ce = b?.borderStyle,
      le = b?.borderColor,
      ue = !!(I || ae || oe || se || ce || le),
      de = ue
        ? {
            "--border-top-width": I,
            "--border-right-width": ae,
            "--border-bottom-width": oe,
            "--border-left-width": se,
            "--border-style": ce,
            "--border-color": le,
          }
        : void 0,
      L = { [Rw]: a.id },
      fe = Mg(t?.paddingTop, t?.padding),
      pe = Mg(t?.paddingBottom, t?.padding),
      R = Mg(t?.paddingLeft, t?.padding),
      me = Mg(t?.paddingRight, t?.padding),
      he = b?.borderRadius ? { ...a.style, borderRadius: b.borderRadius } : a.style,
      ge = v ? (a.layoutDependency ? `${a.layoutDependency}-open` : `open`) : a.layoutDependency,
      _e = d && v ? void 0 : (a.layoutId ?? (t ? P : void 0));
    return w(g, {
      children: [
        E(e, {
          ...a,
          style: he,
          onClick: ee,
          layoutId: _e,
          ref: p,
          layoutDependency: ge,
          transition: te,
        }),
        E(Fe, {
          onExitComplete: () => {
            u(() => {
              (T(void 0), l?.start());
            });
          },
          children:
            v &&
            t &&
            _ &&
            E(
              i,
              {
                children: x(
                  w(g, {
                    children: [
                      E(F.div, {
                        ...L,
                        className: n,
                        onClick: N,
                        style: {
                          position: `fixed`,
                          inset: 0,
                          zIndex: t.zIndex,
                          backgroundColor: t.backdrop ?? `transparent`,
                        },
                        transition: te,
                        initial: uk,
                        animate: dk,
                        exit: uk,
                      }),
                      E(F.div, {
                        ...L,
                        className: n,
                        style: {
                          alignItems: `center`,
                          display: `flex`,
                          inset: `${fe}px ${me}px ${pe}px ${R}px`,
                          justifyContent: `center`,
                          pointerEvents: `none`,
                          position: `fixed`,
                          zIndex: t.zIndex,
                        },
                        children: E(`div`, {
                          style: {
                            alignItems: `center`,
                            aspectRatio: O,
                            display: `flex`,
                            justifyContent: `center`,
                            maxHeight: `100%`,
                            position: `relative`,
                            width: `100%`,
                            maxWidth: t.maxWidth,
                          },
                          children: E(F.div, {
                            layoutId: _e,
                            transition: te,
                            onClick: D,
                            className: `framer-lightbox-container`,
                            "data-border": ue,
                            style: {
                              aspectRatio: O,
                              borderRadius: ne,
                              bottom: 0,
                              position: `absolute`,
                              top: 0,
                              userSelect: `none`,
                              imageRendering: re,
                              filter: ie,
                              ...de,
                            },
                            children: E(io, { image: _, alt: _.alt, draggable: a.draggable }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  jg()
                ),
              },
              `backdrop`
            ),
        }),
      ],
    });
  });
}
function zg(e, t) {
  return mk && !t
    ? Document.parseHTMLUnsafe(e)
    : ((pk ??= new DOMParser()), pk.parseFromString(e, t ?? `text/html`));
}
function Bg(e) {
  return e
    .replaceAll(`&`, `&amp;`)
    .replaceAll(`<`, `&lt;`)
    .replaceAll(`>`, `&gt;`)
    .replaceAll(`"`, `&quot;`)
    .replaceAll(`'`, `&#39;`);
}
function Vg(e, t, n, r) {
  return e.replace(hk, (e, i, a, o, s, c, l) => {
    if (a.toLowerCase() !== `a`) return e;
    let u = s || c,
      d = Cu(u.replace(/&amp;/gu, `&`));
    if (!d?.target) return e;
    let f = t(d.target);
    if (!Bm(f) || !Bm(n)) return e;
    let p = f.path,
      m = n.path;
    if (!p || !m) return e;
    let h = ` data-framer-page-link-target="${d.target}"`,
      g = Nt(f, d.element ?? void 0);
    g && (h += ` data-framer-page-link-element="${d.element}"`);
    let _ = Tu(u);
    if (!_ || z(_)) return e;
    Vu(n, _, r) && (h += ` data-framer-page-link-current`);
    let v = p,
      y = Object.assign({}, r, d.collectionItem?.pathVariables);
    if (
      (Object.keys(y).length > 0 && (v = v.replace(eT, (e, t) => `` + y[t])),
      d.collectionItem?.pathVariables)
    ) {
      let e = new URLSearchParams(d.collectionItem.pathVariables);
      h += ` data-framer-page-link-path-variables="${e}"`;
    }
    return ((v = Qr(m, v)), i + o + `"${Bg(v + (g ? `#${g}` : ``))}"` + h + l);
  });
}
function Hg(e, t) {
  return e.length === t.length && e.every((e, n) => e === t[n]);
}
function Ug(e) {
  switch (e) {
    case `top`:
      return `flex-start`;
    case `center`:
      return `center`;
    case `bottom`:
      return `flex-end`;
  }
}
function Wg(e, t, n) {
  let r = M([]);
  Hg(r.current, e) ||
    ((r.current = e),
    ix.fontStore.loadFonts(e).then(({ newlyLoadedFontCount: e }) => {
      !t || !n.current || J.current() !== J.canvas || (e > 0 && fs(n.current));
    }));
}
function Gg() {
  return { current: null };
}
async function Kg(e, t) {
  let n = e.current;
  if (n) return n;
  let r,
    i = new Promise((e, n) => {
      ((r = e), t.signal.addEventListener(`abort`, () => n()));
    });
  return (
    Object.defineProperty(e, "current", {
      get() {
        return n;
      },
      set(e) {
        if (((n = e), e === null)) {
          t.abort();
          return;
        }
        r(e);
      },
      configurable: !0,
    }),
    i
  );
}
function qg(e) {
  return e in yk;
}
function Jg(e, t) {
  let n = {};
  for (let r in e) {
    if (!qg(r)) continue;
    let i = e[r],
      a = yk[r];
    Ze(i) || Ze(a) || (t && r !== `opacity`) || (n[r] = [i, a]);
  }
  return n;
}
function Yg(e, t = `character`, n, r, a) {
  if (r) {
    let t = Gg();
    return (n.add(t), E(`span`, { ref: t, style: a, children: e }));
  }
  switch (t) {
    case `character`:
    case `line`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let o = t === r;
        return w(
          i,
          {
            children: [
              E(`span`, {
                style: { whiteSpace: e.length <= 12 ? `nowrap` : `unset` },
                children: e.match(bk)?.map((e, t) => {
                  let r = Gg();
                  return (n.add(r), E(`span`, { ref: r, style: a, children: e }, e + t));
                }),
              }),
              o ? null : ` `,
            ],
          },
          e + t + o
        );
      });
    }
    case `word`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let o = t === r,
          s = Gg();
        return (
          n.add(s),
          w(
            i,
            { children: [E(`span`, { ref: s, style: a, children: e }), o ? null : ` `] },
            e + t + o
          )
        );
      });
    }
    default:
      return e;
  }
}
function Xg(e) {
  let t = e.type;
  switch (t) {
    case `appear`:
      return e.tokenization ?? `character`;
    default:
      U(t);
  }
}
function Zg(e) {
  let t = [];
  return (
    B(e.x) && t.push(`translateX(${e.x}px)`),
    B(e.y) && t.push(`translateY(${e.y}px)`),
    B(e.scale) && t.push(`scale(${e.scale})`),
    B(e.rotate) && t.push(`rotate(${e.rotate}deg)`),
    B(e.rotateX) && t.push(`rotateX(${e.rotateX}deg)`),
    B(e.rotateY) && t.push(`rotateY(${e.rotateY}deg)`),
    B(e.skewX) && t.push(`skewX(${e.skewX}deg)`),
    B(e.skewY) && t.push(`skewY(${e.skewY}deg)`),
    t.join(` `)
  );
}
function Qg(e, t, n, r) {
  if (!n?.effect) return;
  let i = n.type;
  switch (i) {
    case `appear`:
      switch (n.tokenization) {
        case `element`:
          return !e || !t
            ? void 0
            : {
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : Zg(n.effect),
              };
        default:
          return !e || !t
            ? { display: `inline-block` }
            : {
                display: `inline-block`,
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : Zg(n.effect),
              };
      }
    default:
      U(i);
  }
}
function $g(e, t, n) {
  let r = za(() => new Set()),
    i = Ha(),
    a = n || !i,
    o = I(),
    c = M({ hasMounted: !1, hasAnimatedOnce: !1, isAnimating: !1, effect: e });
  c.current.effect = e;
  let l = e?.trigger ?? `onMount`,
    u = e?.target,
    d = e?.threshold;
  h(() => {
    if (!a || n) return;
    c.current.hasMounted = !0;
    function e() {
      let { effect: e } = c.current;
      if (
        !a ||
        !e ||
        (e?.repeat !== !0 && c.current.hasAnimatedOnce) ||
        (e?.type === `appear` && c.current.isAnimating)
      )
        return;
      Object.assign(c.current, { hasAnimatedOnce: !0, isAnimating: !0 });
      let t = e.type;
      switch (t) {
        case `appear`: {
          let { transition: t, startDelay: n, repeat: i, tokenization: a } = e,
            s = { current: void 0 };
          return (
            t_(
              a,
              e.effect,
              r,
              t,
              n,
              i,
              o,
              () => {
                Object.assign(c.current, { isAnimating: !1 });
              },
              s
            ),
            () => s.current?.()
          );
        }
        default:
          U(t);
      }
    }
    switch (l) {
      case `onMount`:
        e();
        return;
      case `onInView`: {
        let n = t?.current;
        return n ? We(n, e, { amount: d ?? 0 }) : void 0;
      }
      case `onScrollTarget`: {
        let t = u?.ref?.current;
        return t
          ? We(t, e, {
              amount: d ?? 0,
              root: document,
              margin: u?.offset ? `${u.offset}px 0px 0px 0px` : void 0,
            })
          : void 0;
      }
      default:
        U(l);
    }
  }, [a, r, n, t, u, d, l]);
  let f = !!e,
    p = e ? Xg(e) : void 0;
  return s(
    () => ({
      getTokenizer: () => {
        if ((r.clear(), !f)) return;
        let { hasMounted: e, hasAnimatedOnce: t, effect: i } = c.current,
          s = Qg(a, n || e_(e, t, i), c.current.effect, o);
        return {
          text: (e) => Yg(e, p, r, o, s),
          props: (e) => {
            if (i?.tokenization !== `element`) return;
            let t = Gg();
            return (r.add(t), { ref: t, style: { ...e, ...s } });
          },
        };
      },
      play: () => {
        let { effect: e } = c.current;
        if (!e) return;
        let t = e.type;
        switch (t) {
          case `appear`: {
            let { transition: t, startDelay: n } = e;
            t_(p, e.effect, r, t, n, !1, o);
            break;
          }
          default:
            U(t);
        }
      },
    }),
    [a, f, r, n, p]
  );
}
function e_(e, t, n) {
  return !(
    (e && n?.trigger === `onMount`) ||
    (t && !n?.repeat && (n?.trigger === `onInView` || n?.trigger === `onScrollTarget`))
  );
}
async function t_(e = `character`, t, n, r, i = 0, a = !1, o, s, c) {
  let l = Jg(t, o),
    u = new AbortController();
  switch ((c && (c.current = () => u.abort()), e)) {
    case `character`:
    case `element`:
    case `word`: {
      let e = await n_(n, u);
      if (
        e === null ||
        (Oe(e, l, { ...r, restDelta: 0.001, delay: ie(r?.delay ?? 0, { startDelay: i }) }).then(
          () => s?.()
        ),
        !a || !c)
      )
        return;
      c.current = () => {
        let n = o ? { opacity: t.opacity } : t;
        Oe(e, n, { ...r, restDelta: 0.001, delay: ie(r?.delay ?? 0, { startDelay: i }) });
      };
      return;
    }
    case `line`: {
      try {
        for (let e of n) await Kg(e, u);
      } catch {
        return;
      }
      let e;
      if (
        (Ge.read(() => {
          ((e = r_(n)),
            e.length !== 0 &&
              Ge.update(() => {
                let t = e.map((e, t) =>
                  Oe(e, l, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) })
                );
                Promise.all(t).then(() => s?.());
              }));
        }),
        !a || !c)
      )
        return;
      c.current = () => {
        if (e.length === 0) return;
        let n = o ? { opacity: t.opacity } : t;
        e.forEach((e, t) => {
          Oe(e, n, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) });
        });
      };
      return;
    }
    default:
      U(e);
  }
}
async function n_(e, t) {
  if (e.size === 0) return null;
  let n = [];
  for (let r of e)
    try {
      let e = await Kg(r, t);
      e && n.push(e);
    } catch {
      return null;
    }
  return n;
}
function r_(e) {
  let t = [],
    n = [],
    r = null;
  for (let i of e) {
    if (!i.current) continue;
    let e = i.current.offsetTop,
      a = i.current.offsetHeight;
    (!a || r === null || e === r ? n.push(i.current) : (t.push(n), (n = [i.current])),
      a && (r = e));
  }
  return (t.push(n), t);
}
function i_(e) {
  let t = {};
  for (let n in e) (re(n) || $b(n)) && (t[n] = e[n]);
  return t;
}
function a_(e) {
  return e.type === i;
}
function o_(e) {
  return e.type === `br`;
}
function s_(e, t, n, i, o = {}, s, c = a_(e) ? -1 : 0) {
  let l = r.toArray(e.props.children);
  Ze(n) || (l = l.slice(0, 1));
  let u = !0;
  l = l.map((e) => {
    if (((!T(e) || !o_(e)) && (u = !1), T(e))) return s_(e, t, n, i, o, s, c + 1);
    let r = Ze(n) ? e : n;
    return z(r) && s ? s.text(r) : r;
  });
  let { "data-preset-tag": d, ...f } = e.props;
  if (z(e.type) || Ue(e.type)) {
    let n = R(e.type) || e.type,
      a = d || n,
      p = z(a) ? t?.[a] : void 0;
    ((f.className = Zc(`framer-text`, f.className, p)),
      s && c === 0 && !u && Object.assign(f, s.props(f.style)));
    let m = n === `h1` || n === `h2` || n === `h3` || n === `h4` || n === `h5` || n === `h6`,
      h = t?.anchor;
    if (m && h) {
      let e = c_(l, o);
      f.id = e;
      let t = Zc(`framer-text`, h),
        n = E(`a`, { href: `#${e}`, className: t, children: l });
      ((f.style = { ...f.style, scrollMarginTop: i }), (l = [n]));
    }
    a === `ol` &&
      (f.style = { ...f.style, [$x]: u_(f.start ?? 1, r.count(f.children), f.style?.[Qx] ?? ``) });
  }
  return a(e, f, ...l);
}
function c_(e, t) {
  let n = Hr(e.map(l_).join(``)),
    r = t[n] ?? 0;
  return (r > 0 && (n += `-${r}`), (t[n] = r + 1), n);
}
function l_(e) {
  return z(e) || B(e)
    ? e.toString()
    : T(e)
      ? l_(e.props.children)
      : Array.isArray(e)
        ? e.map(l_).join(``)
        : ``;
}
function u_(e, t, n) {
  return Go(Number(e) || 1, t, n);
}
function d_(e) {
  let t = (e * Math.PI) / 180,
    n = { x: -Math.sin(t) * 100, y: Math.cos(t) * 100 },
    r = Zi(n.x, n.y),
    i = px(Zi(0.5, 0.5), r),
    a = Y.points({ x: 0, y: 0, width: 1, height: 1 }),
    o = a
      .map((e) => ({ point: e, distance: Zi.distance(r, e) }))
      .sort((e, t) => e.distance - t.distance),
    s = o[0]?.point,
    c = o[1]?.point;
  H(s && c, `linearGradientLine: Must have 2 closest points.`);
  let [l, u] = a.filter((e) => !Zi.isEqual(e, s) && !Zi.isEqual(e, c));
  H(l && u, `linearGradientLine: Must have 2 opposing points.`);
  let d = px.intersection(i, px(s, c)),
    f = px.intersection(i, px(l, u));
  return (H(d && f, `linearGradientLine: Must have a start and end point.`), px(d, f));
}
function f_(e, t) {
  let n = d_(e.angle),
    r = xs(e),
    i = r[0]?.position ?? 0,
    a = r[r.length - 1]?.position ?? 1,
    o = px.pointAtPercentDistance(n, i),
    s = px.pointAtPercentDistance(n, a),
    c = ne([i, a], [0, 1]);
  return {
    id: `id${t}g${jS.hash(e)}`,
    x1: o.x,
    y1: o.y,
    x2: s.x,
    y2: s.y,
    stops: r.map((t) => ({
      color: t.value,
      alpha: TS.getAlpha(t.value) * e.alpha,
      position: c(t.position),
    })),
  };
}
function p_(e, t) {
  return {
    id: `id${t}g${NS.hash(e)}`,
    widthFactor: e.widthFactor,
    heightFactor: e.heightFactor,
    centerAnchorX: e.centerAnchorX,
    centerAnchorY: e.centerAnchorY,
    stops: xs(e).map((t) => ({
      color: t.value,
      alpha: TS.getAlpha(t.value) * e.alpha,
      position: t.position,
    })),
  };
}
function m_(e) {
  if (!z(e) || e.charAt(e.length - 1) !== `%`) return !1;
  let t = e.slice(0, -1);
  return B(parseFloat(t));
}
function h_(e) {
  let t = e.slice(0, -1),
    n = parseFloat(t);
  return B(n) ? n : 50;
}
function g_(e) {
  return m_(e) ? h_(e) / 100 : e === `left` ? 0 : e === `right` ? 1 : 0.5;
}
function __(e) {
  return m_(e) ? h_(e) / 100 : e === `top` ? 0 : e === `bottom` ? 1 : 0.5;
}
function v_(e, t, n, r) {
  if (((e = yb.get(e, `#09F`)), !fx.isImageObject(e) || !e.pixelWidth || !e.pixelHeight)) return;
  let i = e.pixelWidth,
    a = e.pixelHeight,
    o,
    { fit: s } = e,
    c = 1,
    l = 1,
    u = 0,
    d = 0;
  if (s === `fill` || s === `fit` || s === `tile` || !s) {
    let n = 1,
      f = 1,
      p = i / a,
      m = t.height * p,
      h = t.width / p,
      g = m / t.width,
      _ = h / t.height;
    if (s === `tile`) {
      ((e.backgroundSize ??= 1),
        (c = Math.round(e.backgroundSize * (i / 2))),
        (l = Math.round(e.backgroundSize * (a / 2))));
      let n = t.x ?? 0,
        s = t.y ?? 0,
        f = 0,
        p = 0;
      (r && ((f = n), (p = s)),
        (u = (t.width - c) * g_(e.positionX) + f),
        (d = (t.height - l) * __(e.positionY) + p),
        (o = `translate(${u + n}, ${d + s})`));
    } else
      ((s === `fill` || !s ? _ > g : _ < g)
        ? ((f = _), (d = (1 - _) * __(e.positionY)))
        : ((n = g), (u = (1 - g) * g_(e.positionX))),
        (o = `translate(${u}, ${d}) scale(${n}, ${f})`));
  }
  return {
    id: `id${n}g-fillImage`,
    path: e.src ?? ``,
    transform: o,
    width: c,
    height: l,
    offsetX: u,
    offsetY: d,
  };
}
function y_(e) {
  return e.startsWith(`data:${Ok}`);
}
function b_(e, t) {
  if (/^\w+:/u.test(e) && !y_(e)) return e;
  t = typeof t == `number` ? (t <= 512 ? 512 : t <= 1024 ? 1024 : t <= 2048 ? 2048 : 4096) : void 0;
  let n = J.current() === J.export;
  return ix.assetResolver(e, { pixelSize: t, isExport: n }) ?? ``;
}
function x_(e, t) {
  return (h(() => Pk.subscribeToTemplate(e), [e]), Pk.template(e, t));
}
function S_(e) {
  try {
    let t = zg(e).getElementsByTagName(`svg`)[0];
    if (!t) throw Error(`no svg element found`);
    return t;
  } catch {
    return;
  }
}
function C_(e, t) {
  T_(e, w_(t));
}
function w_(e) {
  return e.replace(/[^\w\-:.]|^[^a-z]+/gi, ``);
}
function T_(e, t) {
  (E_(e, t),
    Array.from(e.children).forEach((e) => {
      T_(e, t);
    }));
}
function E_(e, t) {
  e.getAttributeNames().forEach((n) => {
    let r = e.getAttribute(n);
    if (!r) return;
    if ((n === `id` && e.setAttribute(n, `${t}_${r}`), n === `href` || n === `xlink:href`)) {
      let [i, a] = r.split(`#`);
      if (i) return;
      e.setAttribute(n, `#${t}_${a}`);
      return;
    }
    let i = `url(#`;
    if (r.includes(i)) {
      let a = r.replace(i, `${i}${t}_`);
      e.setAttribute(n, a);
    }
  });
}
function D_(e) {
  if (!e) return;
  let t = /(-?[\d.]+)([a-z%]*)/u.exec(e);
  if (!(t?.[1] === void 0 || t?.[2] === void 0) && !t[2]?.startsWith(`%`))
    return Math.round(parseFloat(t[1]) * (Fk[t[2]] || 1));
}
function O_(e) {
  let t = D_(e.getAttribute(`width`)),
    n = D_(e.getAttribute(`height`));
  if (!(typeof t != `number` || typeof n != `number`) && !(t <= 0 || n <= 0))
    return { width: t, height: n };
}
function k_(e) {
  return e.indexOf(`image`) >= 0;
}
function A_(e) {
  return e.indexOf(`var(--`) >= 0;
}
function j_(e) {
  return !!(
    e.borderRadius ||
    e.borderBottomLeftRadius ||
    e.borderBottomRightRadius ||
    e.borderTopLeftRadius ||
    e.borderTopRightRadius
  );
}
function M_(e, t) {
  let n = e.current;
  if (!n) return;
  let r = t.providedWindow ?? Vv,
    i = n.firstElementChild;
  if (!i || !(i instanceof r.SVGSVGElement)) return;
  if (!i.getAttribute(`viewBox`)) {
    let e = Pk.getViewBox(t.svg);
    e && i.setAttribute(`viewBox`, e);
  }
  let { withExternalLayout: a, parentSize: o } = t;
  if (!a && Co(t) && o !== 1 && o !== 2) return;
  let { intrinsicWidth: s, intrinsicHeight: c, _constraints: l } = t;
  (i.viewBox?.baseVal?.width === 0 &&
    i.viewBox?.baseVal?.height === 0 &&
    W(s) &&
    W(c) &&
    i.setAttribute(`viewBox`, `0 0 ${s} ${c}`),
    l?.aspectRatio
      ? i.setAttribute(`preserveAspectRatio`, ``)
      : i.setAttribute(`preserveAspectRatio`, `none`),
    i.setAttribute(`width`, `100%`),
    i.setAttribute(`height`, `100%`));
}
function N_(e) {
  return e > Bk ? `lazy` : void 0;
}
function P_(e, t, n) {
  let r = L_(t);
  (!n?.supportsExplicitInterCodegen &&
    !r.some((e) => e.explicitInter === !1) &&
    r.push({ explicitInter: !1, fonts: [] }),
    Object.assign(e, { fonts: r }));
}
function F_(e) {
  return e ? (e.fonts ?? Ei()) : Ei();
}
function I_(e) {
  return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : L_(e);
}
function L_(e) {
  let t = { explicitInter: !1, fonts: [] },
    n = [];
  for (let r of e)
    R_(r)
      ? n.push({ explicitInter: r.explicitInter, fonts: r.fonts.map(z_) })
      : t.fonts.push(z_(r));
  return (t.fonts.length > 0 && n.push(t), n);
}
function R_(e) {
  return Hk in e;
}
function z_(e) {
  let t = B_(e) || V_(e) ? e : H_(e);
  return V_(t) ? t : U_(t);
}
function B_(e) {
  return `source` in e;
}
function V_(e) {
  return `cssFamilyName` in e;
}
function H_(e) {
  let t;
  return (
    (t = e.url.startsWith(`https://fonts.gstatic.com/s/`)
      ? `google`
      : e.url.startsWith(`https://framerusercontent.com/third-party-assets/fontshare/`)
        ? `fontshare`
        : `custom`),
    { ...e, source: t }
  );
}
function U_(e) {
  let { family: t, ...n } = e,
    r = e.variationAxes && e.source !== `custom` ? `${t} ${Vk}` : t;
  return { ...n, uiFamilyName: t, cssFamilyName: r };
}
function W_(e, t) {
  let n = `${e}-start`;
  (performance.mark(n), t());
  let r = `${e}-end`;
  (performance.mark(r), performance.measure(e, n, r));
}
async function G_(e, t) {
  let n = [],
    r = !0;
  for (let i of e) {
    if (!r) {
      let e = _y({ batch: !0, priority: t.priority, signal: t.signal });
      e && (await e);
    }
    r = !1;
    try {
      let e = i();
      n.push(
        Promise.resolve(e).then(
          (e) => ({ status: `fulfilled`, value: e }),
          (e) => ({ status: `rejected`, reason: e })
        )
      );
    } catch (e) {
      n.push(Promise.resolve({ status: `rejected`, reason: e }));
    }
  }
  return Promise.all(n);
}
function K_(e) {
  return e.loader;
}
function q_(e, t, n) {
  let r = K_(e);
  return r ? r.load(t, n) : Promise.resolve(void 0);
}
var J_,
  Y_,
  X_,
  Z_,
  Q_,
  $_,
  ev,
  tv,
  nv,
  rv,
  iv,
  av,
  ov,
  sv,
  cv,
  lv,
  uv,
  dv,
  fv,
  pv,
  mv,
  hv,
  gv,
  _v,
  vv,
  yv,
  bv,
  xv,
  Sv,
  Cv,
  wv,
  Tv,
  Ev,
  Dv,
  Ov,
  kv,
  Av,
  jv,
  Mv,
  Nv,
  Pv,
  Fv,
  Iv,
  Lv,
  Rv,
  zv,
  Bv,
  Vv,
  Hv,
  Uv,
  Wv,
  Gv,
  Kv,
  qv,
  Jv,
  Yv,
  Xv,
  Zv,
  Qv,
  $v,
  ey,
  ty,
  ny,
  ry,
  iy,
  ay,
  oy,
  sy,
  cy,
  ly,
  uy,
  dy,
  fy,
  py,
  my,
  hy,
  gy,
  _y,
  vy,
  yy,
  by,
  xy,
  Sy,
  Cy,
  wy,
  Ty,
  Ey,
  Dy,
  Oy,
  ky,
  Ay,
  jy,
  My,
  Ny,
  Py,
  Fy,
  Iy,
  Ly,
  Ry,
  zy,
  By,
  Vy,
  Hy,
  Uy,
  Wy,
  Gy,
  Ky,
  qy,
  Jy,
  Yy,
  Xy,
  Zy,
  Qy,
  $y,
  eb,
  tb,
  nb,
  rb,
  ib,
  ab,
  ob,
  sb,
  cb,
  lb,
  ub,
  db,
  fb,
  pb,
  mb,
  hb,
  gb,
  _b,
  vb,
  yb,
  bb,
  xb,
  Sb,
  Cb,
  wb,
  Tb,
  Eb,
  Db,
  Ob,
  kb,
  Ab,
  jb,
  Mb,
  Nb,
  q,
  Pb,
  Fb,
  Ib,
  Lb,
  Rb,
  zb,
  Bb,
  Vb,
  Hb,
  Ub,
  J,
  Wb,
  Gb,
  Kb,
  qb,
  Jb,
  Yb,
  Xb,
  Zb,
  Qb,
  $b,
  ex,
  tx,
  nx,
  rx,
  ix,
  ax,
  ox,
  sx,
  cx,
  lx,
  ux,
  dx,
  fx,
  px,
  Y,
  mx,
  hx,
  gx,
  _x,
  vx,
  yx,
  bx,
  xx,
  Sx,
  Cx,
  wx,
  Tx,
  Ex,
  Dx,
  Ox,
  kx,
  Ax,
  jx,
  Mx,
  Nx,
  Px,
  Fx,
  Ix,
  X,
  Lx,
  Rx,
  zx,
  Bx,
  Z,
  Vx,
  Hx,
  Ux,
  Wx,
  Gx,
  Kx,
  qx,
  Jx,
  Yx,
  Xx,
  Zx,
  Qx,
  $x,
  eS,
  tS,
  nS,
  rS,
  iS,
  aS,
  oS,
  sS,
  cS,
  lS,
  uS,
  dS,
  fS,
  pS,
  mS,
  hS,
  gS,
  _S,
  vS,
  yS,
  bS,
  xS,
  SS,
  CS,
  wS,
  TS,
  ES,
  DS,
  OS,
  kS,
  AS,
  jS,
  MS,
  NS,
  PS,
  FS,
  IS,
  LS,
  RS,
  zS,
  BS,
  VS,
  HS,
  US,
  WS,
  GS,
  KS,
  qS,
  JS,
  YS,
  XS,
  ZS,
  QS,
  $S,
  eC,
  tC,
  nC,
  rC,
  iC,
  aC,
  oC,
  sC,
  cC,
  lC,
  uC,
  dC,
  fC,
  pC,
  mC,
  hC,
  gC,
  _C,
  vC,
  yC,
  bC,
  xC,
  SC,
  CC,
  wC,
  TC,
  EC,
  DC,
  OC,
  kC,
  AC,
  jC,
  MC,
  NC,
  PC,
  FC,
  IC,
  LC,
  RC,
  zC,
  BC,
  VC,
  HC,
  UC,
  WC,
  GC,
  KC,
  qC,
  JC,
  YC,
  XC,
  ZC,
  QC,
  $C,
  ew,
  tw,
  nw,
  rw,
  iw,
  aw,
  ow,
  sw,
  cw,
  lw,
  uw,
  dw,
  fw,
  pw,
  mw,
  hw,
  gw,
  _w,
  vw,
  yw,
  bw,
  xw,
  Sw,
  Cw,
  ww,
  Tw,
  Ew,
  Dw,
  Ow,
  kw,
  Aw,
  jw,
  Mw,
  Nw,
  Pw,
  Fw,
  Iw,
  Lw,
  Rw,
  zw,
  Bw,
  Vw,
  Hw,
  Uw,
  Ww,
  Gw,
  Kw,
  qw,
  Jw,
  Yw,
  Xw,
  Zw,
  Qw,
  $w,
  eT,
  tT,
  nT,
  rT,
  iT,
  aT,
  oT,
  sT,
  cT,
  lT,
  uT,
  dT,
  fT,
  pT,
  mT,
  hT,
  gT,
  _T,
  vT,
  yT,
  bT,
  xT,
  ST,
  CT,
  wT,
  TT,
  ET,
  DT,
  OT,
  kT,
  AT,
  jT,
  MT,
  NT,
  PT,
  FT,
  IT,
  LT,
  RT,
  zT,
  BT,
  VT,
  HT,
  UT,
  WT,
  GT,
  KT,
  qT,
  JT,
  YT,
  XT,
  ZT,
  QT,
  $T,
  eE,
  tE,
  nE,
  rE,
  iE,
  aE,
  oE,
  sE,
  cE,
  lE,
  uE,
  dE,
  fE,
  pE,
  mE,
  hE,
  gE,
  _E,
  vE,
  yE,
  bE,
  xE,
  SE,
  CE,
  wE,
  TE,
  EE,
  DE,
  Q,
  OE,
  kE,
  AE,
  jE,
  ME,
  $,
  NE,
  PE,
  FE,
  IE,
  LE,
  RE,
  zE,
  BE,
  VE,
  HE,
  UE,
  WE,
  GE,
  KE,
  qE,
  JE,
  YE,
  XE,
  ZE,
  QE,
  $E,
  eD,
  tD,
  nD,
  rD,
  iD,
  aD,
  oD,
  sD,
  cD,
  lD,
  uD,
  dD,
  fD,
  pD,
  mD,
  hD,
  gD,
  _D,
  vD,
  yD,
  bD,
  xD,
  SD,
  CD,
  wD,
  TD,
  ED,
  DD,
  OD,
  kD,
  AD,
  jD,
  MD,
  ND,
  PD,
  FD,
  ID,
  LD,
  RD,
  zD,
  BD,
  VD,
  HD,
  UD,
  WD,
  GD,
  KD,
  qD,
  JD,
  YD,
  XD,
  ZD,
  QD,
  $D,
  eO,
  tO,
  nO,
  rO,
  iO,
  aO,
  oO,
  sO,
  cO,
  lO,
  uO,
  dO,
  fO,
  pO,
  mO,
  hO,
  gO,
  _O,
  vO,
  yO,
  bO,
  xO,
  SO,
  CO,
  wO,
  TO,
  EO,
  DO,
  OO,
  kO,
  AO,
  jO,
  MO,
  NO,
  PO,
  FO,
  IO,
  LO,
  RO,
  zO,
  BO,
  VO,
  HO,
  UO,
  WO,
  GO,
  KO,
  qO,
  JO,
  YO,
  XO,
  ZO,
  QO,
  $O,
  ek,
  tk,
  nk,
  rk,
  ik,
  ak,
  ok,
  sk,
  ck,
  lk,
  uk,
  dk,
  fk,
  pk,
  mk,
  hk,
  gk,
  _k,
  vk,
  yk,
  bk,
  xk,
  Sk,
  Ck,
  wk,
  Tk,
  Ek,
  Dk,
  Ok,
  kk,
  Ak,
  jk,
  Mk,
  Nk,
  Pk,
  Fk,
  Ik,
  Lk,
  Rk,
  zk,
  Bk,
  Vk,
  Hk,
  Uk = e(() => {
    (o(),
      me(),
      p(),
      O(),
      m(),
      (J_ = De({
        "../../../node_modules/eventemitter3/index.js"(e, t) {
          var n = Object.prototype.hasOwnProperty,
            r = `~`;
          function i() {}
          Object.create && ((i.prototype = Object.create(null)), new i().__proto__ || (r = !1));
          function a(e, t, n) {
            ((this.fn = e), (this.context = t), (this.once = n || !1));
          }
          function o(e, t, n, i, o) {
            if (typeof n != `function`) throw TypeError(`The listener must be a function`);
            var s = new a(n, i || e, o),
              c = r ? r + t : t;
            return (
              e._events[c]
                ? e._events[c].fn
                  ? (e._events[c] = [e._events[c], s])
                  : e._events[c].push(s)
                : ((e._events[c] = s), e._eventsCount++),
              e
            );
          }
          function s(e, t) {
            --e._eventsCount === 0 ? (e._events = new i()) : delete e._events[t];
          }
          function c() {
            ((this._events = new i()), (this._eventsCount = 0));
          }
          ((c.prototype.eventNames = function () {
            var e = [],
              t,
              i;
            if (this._eventsCount === 0) return e;
            for (i in (t = this._events)) n.call(t, i) && e.push(r ? i.slice(1) : i);
            return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e;
          }),
            (c.prototype.listeners = function (e) {
              var t = r ? r + e : e,
                n = this._events[t];
              if (!n) return [];
              if (n.fn) return [n.fn];
              for (var i = 0, a = n.length, o = Array(a); i < a; i++) o[i] = n[i].fn;
              return o;
            }),
            (c.prototype.listenerCount = function (e) {
              var t = r ? r + e : e,
                n = this._events[t];
              return n ? (n.fn ? 1 : n.length) : 0;
            }),
            (c.prototype.emit = function (e, t, n, i, a, o) {
              var s = r ? r + e : e;
              if (!this._events[s]) return !1;
              var c = this._events[s],
                l = arguments.length,
                u,
                d;
              if (c.fn) {
                switch ((c.once && this.removeListener(e, c.fn, void 0, !0), l)) {
                  case 1:
                    return (c.fn.call(c.context), !0);
                  case 2:
                    return (c.fn.call(c.context, t), !0);
                  case 3:
                    return (c.fn.call(c.context, t, n), !0);
                  case 4:
                    return (c.fn.call(c.context, t, n, i), !0);
                  case 5:
                    return (c.fn.call(c.context, t, n, i, a), !0);
                  case 6:
                    return (c.fn.call(c.context, t, n, i, a, o), !0);
                }
                for (d = 1, u = Array(l - 1); d < l; d++) u[d - 1] = arguments[d];
                c.fn.apply(c.context, u);
              } else {
                var f = c.length,
                  p;
                for (d = 0; d < f; d++)
                  switch ((c[d].once && this.removeListener(e, c[d].fn, void 0, !0), l)) {
                    case 1:
                      c[d].fn.call(c[d].context);
                      break;
                    case 2:
                      c[d].fn.call(c[d].context, t);
                      break;
                    case 3:
                      c[d].fn.call(c[d].context, t, n);
                      break;
                    case 4:
                      c[d].fn.call(c[d].context, t, n, i);
                      break;
                    default:
                      if (!u) for (p = 1, u = Array(l - 1); p < l; p++) u[p - 1] = arguments[p];
                      c[d].fn.apply(c[d].context, u);
                  }
              }
              return !0;
            }),
            (c.prototype.on = function (e, t, n) {
              return o(this, e, t, n, !1);
            }),
            (c.prototype.once = function (e, t, n) {
              return o(this, e, t, n, !0);
            }),
            (c.prototype.removeListener = function (e, t, n, i) {
              var a = r ? r + e : e;
              if (!this._events[a]) return this;
              if (!t) return (s(this, a), this);
              var o = this._events[a];
              if (o.fn) o.fn === t && (!i || o.once) && (!n || o.context === n) && s(this, a);
              else {
                for (var c = 0, l = [], u = o.length; c < u; c++)
                  (o[c].fn !== t || (i && !o[c].once) || (n && o[c].context !== n)) && l.push(o[c]);
                l.length ? (this._events[a] = l.length === 1 ? l[0] : l) : s(this, a);
              }
              return this;
            }),
            (c.prototype.removeAllListeners = function (e) {
              var t;
              return (
                e
                  ? ((t = r ? r + e : e), this._events[t] && s(this, t))
                  : ((this._events = new i()), (this._eventsCount = 0)),
                this
              );
            }),
            (c.prototype.off = c.prototype.removeListener),
            (c.prototype.addListener = c.prototype.on),
            (c.prefixed = r),
            (c.EventEmitter = c),
            t !== void 0 && (t.exports = c));
        },
      })),
      (Y_ = De({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js"(
          e
        ) {
          var t = typeof Symbol == `function` && Symbol.for,
            n = t ? Symbol.for(`react.element`) : 60103,
            r = t ? Symbol.for(`react.portal`) : 60106,
            i = t ? Symbol.for(`react.fragment`) : 60107,
            a = t ? Symbol.for(`react.strict_mode`) : 60108,
            o = t ? Symbol.for(`react.profiler`) : 60114,
            s = t ? Symbol.for(`react.provider`) : 60109,
            c = t ? Symbol.for(`react.context`) : 60110,
            l = t ? Symbol.for(`react.async_mode`) : 60111,
            u = t ? Symbol.for(`react.concurrent_mode`) : 60111,
            d = t ? Symbol.for(`react.forward_ref`) : 60112,
            f = t ? Symbol.for(`react.suspense`) : 60113,
            p = t ? Symbol.for(`react.suspense_list`) : 60120,
            m = t ? Symbol.for(`react.memo`) : 60115,
            h = t ? Symbol.for(`react.lazy`) : 60116,
            g = t ? Symbol.for(`react.block`) : 60121,
            _ = t ? Symbol.for(`react.fundamental`) : 60117,
            v = t ? Symbol.for(`react.responder`) : 60118,
            y = t ? Symbol.for(`react.scope`) : 60119;
          function b(e) {
            if (typeof e == `object` && e) {
              var t = e.$$typeof;
              switch (t) {
                case n:
                  switch (((e = e.type), e)) {
                    case l:
                    case u:
                    case i:
                    case o:
                    case a:
                    case f:
                      return e;
                    default:
                      switch (((e &&= e.$$typeof), e)) {
                        case c:
                        case d:
                        case h:
                        case m:
                        case s:
                          return e;
                        default:
                          return t;
                      }
                  }
                case r:
                  return t;
              }
            }
          }
          function x(e) {
            return b(e) === u;
          }
          ((e.AsyncMode = l),
            (e.ConcurrentMode = u),
            (e.ContextConsumer = c),
            (e.ContextProvider = s),
            (e.Element = n),
            (e.ForwardRef = d),
            (e.Fragment = i),
            (e.Lazy = h),
            (e.Memo = m),
            (e.Portal = r),
            (e.Profiler = o),
            (e.StrictMode = a),
            (e.Suspense = f),
            (e.isAsyncMode = function (e) {
              return x(e) || b(e) === l;
            }),
            (e.isConcurrentMode = x),
            (e.isContextConsumer = function (e) {
              return b(e) === c;
            }),
            (e.isContextProvider = function (e) {
              return b(e) === s;
            }),
            (e.isElement = function (e) {
              return typeof e == `object` && !!e && e.$$typeof === n;
            }),
            (e.isForwardRef = function (e) {
              return b(e) === d;
            }),
            (e.isFragment = function (e) {
              return b(e) === i;
            }),
            (e.isLazy = function (e) {
              return b(e) === h;
            }),
            (e.isMemo = function (e) {
              return b(e) === m;
            }),
            (e.isPortal = function (e) {
              return b(e) === r;
            }),
            (e.isProfiler = function (e) {
              return b(e) === o;
            }),
            (e.isStrictMode = function (e) {
              return b(e) === a;
            }),
            (e.isSuspense = function (e) {
              return b(e) === f;
            }),
            (e.isValidElementType = function (e) {
              return (
                typeof e == `string` ||
                typeof e == `function` ||
                e === i ||
                e === u ||
                e === o ||
                e === a ||
                e === f ||
                e === p ||
                (typeof e == `object` &&
                  !!e &&
                  (e.$$typeof === h ||
                    e.$$typeof === m ||
                    e.$$typeof === s ||
                    e.$$typeof === c ||
                    e.$$typeof === d ||
                    e.$$typeof === _ ||
                    e.$$typeof === v ||
                    e.$$typeof === y ||
                    e.$$typeof === g))
              );
            }),
            (e.typeOf = b));
        },
      })),
      (X_ = De({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(e, t) {
          t.exports = Y_();
        },
      })),
      (Z_ = De({
        "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(e, t) {
          var n = X_(),
            r = {
              childContextTypes: !0,
              contextType: !0,
              contextTypes: !0,
              defaultProps: !0,
              displayName: !0,
              getDefaultProps: !0,
              getDerivedStateFromError: !0,
              getDerivedStateFromProps: !0,
              mixins: !0,
              propTypes: !0,
              type: !0,
            },
            i = {
              name: !0,
              length: !0,
              prototype: !0,
              caller: !0,
              callee: !0,
              arguments: !0,
              arity: !0,
            },
            a = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
            o = {
              $$typeof: !0,
              compare: !0,
              defaultProps: !0,
              displayName: !0,
              propTypes: !0,
              type: !0,
            },
            s = {};
          ((s[n.ForwardRef] = a), (s[n.Memo] = o));
          function c(e) {
            return n.isMemo(e) ? o : s[e.$$typeof] || r;
          }
          var l = Object.defineProperty,
            u = Object.getOwnPropertyNames,
            d = Object.getOwnPropertySymbols,
            f = Object.getOwnPropertyDescriptor,
            p = Object.getPrototypeOf,
            m = Object.prototype;
          function h(e, t, n) {
            if (typeof t != `string`) {
              if (m) {
                var r = p(t);
                r && r !== m && h(e, r, n);
              }
              var a = u(t);
              d && (a = a.concat(d(t)));
              for (var o = c(e), s = c(t), g = 0; g < a.length; ++g) {
                var _ = a[g];
                if (!i[_] && !(n && n[_]) && !(s && s[_]) && !(o && o[_])) {
                  var v = f(t, _);
                  try {
                    l(e, _, v);
                  } catch {}
                }
              }
            }
            return e;
          }
          t.exports = h;
        },
      })),
      (Q_ = De({
        "../../../node_modules/fontfaceobserver/fontfaceobserver.standalone.js"(e, t) {
          (function () {
            function e(e, t) {
              document.addEventListener
                ? e.addEventListener(`scroll`, t, !1)
                : e.attachEvent(`scroll`, t);
            }
            function n(e) {
              document.body
                ? e()
                : document.addEventListener
                  ? document.addEventListener(`DOMContentLoaded`, function t() {
                      (document.removeEventListener(`DOMContentLoaded`, t), e());
                    })
                  : document.attachEvent(`onreadystatechange`, function t() {
                      (document.readyState == `interactive` || document.readyState == `complete`) &&
                        (document.detachEvent(`onreadystatechange`, t), e());
                    });
            }
            function r(e) {
              ((this.g = document.createElement(`div`)),
                this.g.setAttribute(`aria-hidden`, `true`),
                this.g.appendChild(document.createTextNode(e)),
                (this.h = document.createElement(`span`)),
                (this.i = document.createElement(`span`)),
                (this.m = document.createElement(`span`)),
                (this.j = document.createElement(`span`)),
                (this.l = -1),
                (this.h.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.i.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.j.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.m.style.cssText = `display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;`),
                this.h.appendChild(this.m),
                this.i.appendChild(this.j),
                this.g.appendChild(this.h),
                this.g.appendChild(this.i));
            }
            function i(e, t) {
              e.g.style.cssText =
                `max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:` +
                t +
                `;`;
            }
            function a(e) {
              var t = e.g.offsetWidth,
                n = t + 100;
              return (
                (e.j.style.width = n + `px`),
                (e.i.scrollLeft = n),
                (e.h.scrollLeft = e.h.scrollWidth + 100),
                e.l === t ? !1 : ((e.l = t), !0)
              );
            }
            function o(t, n) {
              function r() {
                var e = i;
                a(e) && e.g.parentNode !== null && n(e.l);
              }
              var i = t;
              (e(t.h, r), e(t.i, r), a(t));
            }
            function s(e, t, n) {
              ((t ||= {}),
                (n ||= N),
                (this.family = e),
                (this.style = t.style || `normal`),
                (this.weight = t.weight || `normal`),
                (this.stretch = t.stretch || `normal`),
                (this.context = n));
            }
            var c = null,
              l = null,
              u = null,
              d = null;
            function f(e) {
              return (
                l === null &&
                  (p(e) && /Apple/.test(N.navigator.vendor)
                    ? ((e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                        N.navigator.userAgent
                      )),
                      (l = !!e && 603 > parseInt(e[1], 10)))
                    : (l = !1)),
                l
              );
            }
            function p(e) {
              return (d === null && (d = !!e.document.fonts), d);
            }
            function m(e, t) {
              var n = e.style,
                r = e.weight;
              if (u === null) {
                var i = document.createElement(`div`);
                try {
                  i.style.font = `condensed 100px sans-serif`;
                } catch {}
                u = i.style.font !== ``;
              }
              return [n, r, u ? e.stretch : ``, `100px`, t].join(` `);
            }
            ((s.prototype.load = function (e, t) {
              var a = this,
                s = e || `BESbswy`,
                l = 0,
                u = t || 3e3,
                d = new Date().getTime();
              return new Promise(function (e, t) {
                if (p(a.context) && !f(a.context)) {
                  var h = new Promise(function (e, t) {
                      function n() {
                        new Date().getTime() - d >= u
                          ? t(Error(`` + u + `ms timeout exceeded`))
                          : a.context.document.fonts
                              .load(m(a, `"` + a.family + `"`), s)
                              .then(function (t) {
                                1 <= t.length ? e() : setTimeout(n, 25);
                              }, t);
                      }
                      n();
                    }),
                    g = new Promise(function (e, t) {
                      l = setTimeout(function () {
                        t(Error(`` + u + `ms timeout exceeded`));
                      }, u);
                    });
                  Promise.race([g, h]).then(function () {
                    (clearTimeout(l), e(a));
                  }, t);
                } else
                  n(function () {
                    function n() {
                      var t;
                      ((t = (_ != -1 && v != -1) || (_ != -1 && y != -1) || (v != -1 && y != -1)) &&
                        ((t = _ != v && _ != y && v != y) ||
                          (c === null &&
                            ((t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                              N.navigator.userAgent
                            )),
                            (c =
                              !!t &&
                              (536 > parseInt(t[1], 10) ||
                                (parseInt(t[1], 10) === 536 && 11 >= parseInt(t[2], 10))))),
                          (t =
                            c &&
                            ((_ == b && v == b && y == b) ||
                              (_ == x && v == x && y == x) ||
                              (_ == S && v == S && y == S)))),
                        (t = !t)),
                        t &&
                          (C.parentNode !== null && C.parentNode.removeChild(C),
                          clearTimeout(l),
                          e(a)));
                    }
                    function f() {
                      if (new Date().getTime() - d >= u)
                        (C.parentNode !== null && C.parentNode.removeChild(C),
                          t(Error(`` + u + `ms timeout exceeded`)));
                      else {
                        var e = a.context.document.hidden;
                        ((!0 === e || e === void 0) &&
                          ((_ = p.g.offsetWidth),
                          (v = h.g.offsetWidth),
                          (y = g.g.offsetWidth),
                          n()),
                          (l = setTimeout(f, 50)));
                      }
                    }
                    var p = new r(s),
                      h = new r(s),
                      g = new r(s),
                      _ = -1,
                      v = -1,
                      y = -1,
                      b = -1,
                      x = -1,
                      S = -1,
                      C = document.createElement(`div`);
                    ((C.dir = `ltr`),
                      i(p, m(a, `sans-serif`)),
                      i(h, m(a, `serif`)),
                      i(g, m(a, `monospace`)),
                      C.appendChild(p.g),
                      C.appendChild(h.g),
                      C.appendChild(g.g),
                      a.context.document.body.appendChild(C),
                      (b = p.g.offsetWidth),
                      (x = h.g.offsetWidth),
                      (S = g.g.offsetWidth),
                      f(),
                      o(p, function (e) {
                        ((_ = e), n());
                      }),
                      i(p, m(a, `"` + a.family + `",sans-serif`)),
                      o(h, function (e) {
                        ((v = e), n());
                      }),
                      i(h, m(a, `"` + a.family + `",serif`)),
                      o(g, function (e) {
                        ((y = e), n());
                      }),
                      i(g, m(a, `"` + a.family + `",monospace`)));
                  });
              });
            }),
              typeof t == `object`
                ? (t.exports = s)
                : ((N.FontFaceObserver = s),
                  (N.FontFaceObserver.prototype.load = s.prototype.load)));
          })();
        },
      })),
      ($_ = () => {}),
      (ev = N !== void 0),
      (tv =
        ev &&
        (d.webdriver || /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(d.userAgent))),
      (nv = ev && typeof N.requestIdleCallback == `function`),
      (rv = nv ? N.requestIdleCallback : setTimeout),
      (iv = () => $_),
      (av = () => !0),
      (ov = () => !1),
      (sv = new Map()),
      (cv = new Map()),
      (lv = new Set()),
      (uv = `:`),
      (dv = ev ? void 0 : new Set()),
      (fv = `preload`),
      (pv = Object.keys),
      (mv = `equals`),
      (hv = f.createContext({})),
      (gv = f.createContext({})),
      (_v = []),
      (vv = `default`),
      (yv = { Pending: `pending`, Fulfilled: `fulfilled`, Rejected: `rejected` }),
      (bv = class e {
        constructor(e, t) {
          ((this.resolver = e), (this.cacheHash = t), t !== void 0 && ct(t, e));
        }
        resolver;
        cacheHash;
        static is(t) {
          return t instanceof e;
        }
        promiseState = yv.Pending;
        preloadPromise;
        value;
        reason;
        get status() {
          return (this.preload(), this.state);
        }
        get state() {
          return this.promiseState;
        }
        then(e, t) {
          return this.promiseState === yv.Fulfilled
            ? Promise.resolve(this.value).then(e, t)
            : this.promiseState === yv.Rejected
              ? Promise.reject(this.reason).then(e, t)
              : this.readAsync().then(e, t);
        }
        preload() {
          if (this.promiseState !== yv.Pending) return;
          if (this.preloadPromise) return this.preloadPromise;
          this.cacheHash !== void 0 && dv !== void 0 && dv.add(this.cacheHash);
          let e = (e) => {
              ((this.promiseState = yv.Fulfilled), (this.value = e));
            },
            t = (e) => {
              ((this.promiseState = yv.Rejected), (this.reason = e));
            },
            n;
          try {
            n = this.cacheHash && sv.has(this.cacheHash) ? sv.get(this.cacheHash) : this.resolver();
          } catch (e) {
            t(e);
            return;
          }
          if (!rt(n)) {
            e(n);
            return;
          }
          let r = n.then(e, t);
          return ((this.preloadPromise = r), r);
        }
        read = () => {
          if (this.promiseState === yv.Fulfilled) return this.value;
          throw this.promiseState === yv.Rejected
            ? this.reason
            : Error(`Need to call preload() before read()`);
        };
        async readAsync() {
          return this.readMaybeAsync();
        }
        readMaybeAsync() {
          let e = this.preload();
          return e ? e.then(this.read) : this.read();
        }
        use() {
          let e = this.preload();
          if (e) throw e;
          return this.read();
        }
      }),
      (xv = -1),
      (Sv = -2),
      (Cv = -3),
      (wv = -4),
      (Tv = -5),
      (Ev = -6),
      (Dv = -7),
      (Ov = 2 ** 32 - 1),
      (kv = Ov - 1),
      (Av = class extends Error {
        constructor(e, t, n, r) {
          (super(e),
            (this.name = `DevalueError`),
            (this.path = t.join(``)),
            (this.value = n),
            (this.root = r));
        }
      }),
      (jv = Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`)),
      (Mv = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/),
      (Nv = typeof Uint8Array.fromBase64 == `function`),
      (Pv = typeof process == `object` && process.versions?.node !== void 0),
      (Fv = Nv ? qt : Pv ? Yt : Zt),
      (Iv = Nv ? Jt : Pv ? Xt : Qt),
      (Lv = Object.freeze({ kind: `not-plain` })),
      (Rv = Object.freeze({ kind: `symbol-keys` })),
      (zv = Object.freeze({
        identify: (e) => e,
        typeOf: (e) => (e === null ? `null` : typeof e),
        toPrimitive: (e) => e,
        tagOf: (e) => Lt(e),
        isThenable: (e) => typeof e.then == `function`,
        toPromise: (e) => Promise.resolve(e),
        unbox: (e) => e.valueOf(),
        toISOString: (e) => (isNaN(e.getDate()) ? `` : e.toISOString()),
        toStringValue: (e) => e.toString(),
        regExpInfo: (e) => ({ source: e.source, flags: e.flags }),
        valuesOf: (e) => e,
        entriesOf: (e) => e,
        viewInfo: (e) => ({
          buffer: e.buffer,
          byteOffset: e.byteOffset,
          byteLength: e.byteLength,
          length: e.length,
          bufferByteLength: e.buffer.byteLength,
        }),
        toArrayBuffer: (e) => e,
        lengthOf: (e) => e.length,
        hasOwn: (e, t) => Object.hasOwn(e, t),
        indicesOf: (e) => Kt(e),
        shapeOf: (e) =>
          It(e)
            ? Bt(e).length > 0
              ? Rv
              : {
                  kind: Object.getPrototypeOf(e) === null ? `null-proto` : `plain`,
                  keys: Object.keys(e),
                }
            : Lv,
        get: (e, t) => e[t],
      })),
      (Bv = Object.freeze({
        fromPrimitive: (e) => e,
        fromISOString: (e) => new Date(e),
        fromStringValue: (e, t) =>
          e === `URL`
            ? new URL(t)
            : e === `URLSearchParams`
              ? new URLSearchParams(t)
              : Temporal[e.slice(9)].from(t),
        fromArrayBuffer: (e) => e,
        fromRegExpInfo: (e, t) => new RegExp(e, t),
        fromViewInfo: (e, t, n, r) => {
          let i = globalThis[e];
          return n === void 0 ? new i(t) : new i(t, n, r);
        },
        box: (e) => Object(e),
        createArray: (e) => Array(e),
        createSparseArray: (e) => {
          let t = [];
          return ((t[kv] = void 0), delete t[kv], (t.length = e), t);
        },
        createObject: () => ({}),
        createNullPrototypeObject: () => Object.create(null),
        createSet: () => new Set(),
        createMap: () => new Map(),
        set: (e, t, n) => {
          e[t] = n;
        },
        addValue: (e, t) => {
          e.add(t);
        },
        addEntry: (e, t, n) => {
          e.set(t, n);
        },
      })),
      (Vv = ev
        ? N
        : {
            addEventListener: () => {},
            removeEventListener: () => {},
            dispatchEvent: () => !1,
            ResizeObserver: void 0,
            onpointerdown: !1,
            onpointermove: !1,
            onpointerup: !1,
            ontouchstart: !1,
            ontouchmove: !1,
            ontouchend: !1,
            onmousedown: !1,
            onmousemove: !1,
            onmouseup: !1,
            devicePixelRatio: 1,
            scrollX: 0,
            scrollY: 0,
            location: { hash: ``, hostname: ``, href: ``, origin: ``, pathname: ``, search: `` },
            document: { baseURI: ``, cookie: ``, referrer: null },
            setTimeout: () => 0,
            clearTimeout: () => {},
            setInterval: () => 0,
            clearInterval: () => {},
            requestAnimationFrame: () => 0,
            cancelAnimationFrame: () => {},
            requestIdleCallback: () => 0,
            getSelection: () => null,
            matchMedia: (e) => ({
              matches: !1,
              media: e,
              onchange: () => {},
              addEventListener: () => {},
              removeEventListener: () => {},
              addListener: () => {},
              removeListener: () => {},
              dispatchEvent: () => !1,
            }),
            innerHeight: 0,
            innerWidth: 0,
            SVGSVGElement: {},
            open: function (e, t, n) {},
            __framer_events: [],
          }),
      (Hv = 2),
      (Uv = /^[a-z0-9]+(?:-[a-z0-9]+)*$/u),
      (Wv = { QueryCache: 0, CollectionUtilsCache: 1 }),
      (Kv = class {
        payload = cn();
        isEmpty = !0;
        set(e, t, n) {
          (this.payload[e].set(t, n), (this.isEmpty = !1));
        }
        has(e, t) {
          return this.payload[e].has(t);
        }
        get(e, t) {
          return this.payload[e].get(t);
        }
        toString() {
          if (!this.isEmpty)
            try {
              return nn(this.payload);
            } catch (e) {
              console.error(`Failed to serialize handover data.`, e);
              return;
            }
        }
        clear() {
          for (let e of Object.values(this.payload)) e.clear();
          this.isEmpty = !0;
        }
      }),
      (qv = ev ? void 0 : new Kv()),
      (Jv = Wv.CollectionUtilsCache),
      (Yv = new WeakMap()),
      (Xv = k(void 0)),
      (Zv = class {
        constructor(e, t) {
          ((this.collectionId = t),
            (this.module = new bv(async () => {
              try {
                let t = await e();
                return (H(t, `Couldn't find CollectionUtils`), t);
              } catch (e) {
                console.error(ot(`Failed to import collection module.`, e));
                return;
              }
            })));
        }
        collectionId;
        module;
        cacheMap = new Map();
        callUtilsMethod(e, t, n) {
          let r = fn(n),
            i = pn(e, this.collectionId, r, t);
          if (this.cacheMap.has(i)) {
            let e = this.cacheMap.get(i)?.readMaybeAsync();
            if (qv !== void 0) {
              if (rt(e)) return e.then((e) => (qv.set(Jv, i, e), e));
              qv.set(Jv, i, e);
            }
            return e;
          }
          if (un(Jv, i)) {
            let e = dn(Jv, i);
            return (this.cacheMap.set(i, new bv(() => e)), e);
          }
          let a = this.module.readMaybeAsync(),
            o = rt(a),
            s;
          try {
            s = o ? a.then((r) => r?.[e]?.(t, n)) : a?.[e]?.(t, n);
          } catch (e) {
            (console.error(ot(`Failed to call CollectionUtils method.`, e)), (s = void 0));
          }
          if (s === void 0) {
            (qv !== void 0 && qv.set(Jv, i, s), this.cacheMap.set(i, s));
            return;
          }
          let c = new bv(async () => {
            try {
              let e = rt(s) ? await s : s;
              return (qv !== void 0 && qv.set(Jv, i, e), e);
            } catch (e) {
              console.error(ot(`Failed to call CollectionUtils method.`, e));
              return;
            }
          });
          return (this.cacheMap.set(i, c), c.readMaybeAsync());
        }
        getSlugByRecordId(e, t) {
          return this.callUtilsMethod(`getSlugByRecordId`, e, t);
        }
        getRecordIdBySlug(e, t) {
          return this.callUtilsMethod(`getRecordIdBySlug`, e, t);
        }
        getContentLocaleIdByRecordId(e, t) {
          return this.callUtilsMethod(`getContentLocaleIdByRecordId`, e, t);
        }
      }),
      (Qv = /Mac/u),
      ($v = /iPhone|iPod|iPad/iu),
      (ey = /MacIntel/iu),
      (ty = /Edg\//u),
      (ny = /Chrome/u),
      (ry = /Google Inc/u),
      (iy = /Safari/u),
      (ay = /Apple Computer/u),
      (oy = /Firefox\/\d+\.\d+$/u),
      (sy = /Version\/([\d.]+)/u),
      (cy = /FramerX/u),
      (ly = /tablet|iPad|Nexus 9/iu),
      (uy = /mobi/iu),
      (dy = 1e3 / 60),
      (fy = 1e3 / 25),
      (py = 500),
      (my = Promise.resolve()),
      (hy = 100),
      (gy = (e) => {
        Ge.read(e, !1, !0);
      }),
      (_y = Rn(gy)),
      (vy = `framer_variant`),
      (yy = RegExp(`:([a-z]\\w*)`, `gi`)),
      (by = async () => {}),
      (xy = { contentLocale: null, activeLocale: null, locales: [], setLocale: by }),
      (Sy = (() => {
        let e = f.createContext(xy);
        return ((e.displayName = `LocaleInfoContext`), e);
      })()),
      (Cy = (() => {
        let e = f.createContext(`ltr`);
        return ((e.displayName = `LayoutDirectionContext`), e);
      })()),
      (wy = !tv),
      (Ty = !1),
      (Ey = f.createContext({ global: void 0, routes: {} })),
      (Dy = 10),
      (Oy = 1e4),
      (ky = (e) => `--view-transition-${e}`),
      (Ay = {
        makeKeyframe: (e, t, n) => {
          let r = 0;
          return (
            ((n === `exit` && e.angularDirection === `clockwise` && t === `start`) ||
              (n === `exit` && e.angularDirection === `counter-clockwise` && t === `end`) ||
              (n === `enter` && e.angularDirection === `counter-clockwise` && t === `start`) ||
              (n === `enter` && e.angularDirection === `clockwise` && t === `end`)) &&
              (r = (e.sweepAngle / 360) * 100),
            `${ky(`conic-offset`)}: ${r}%;`
          );
        },
        makeStyles: (e, t) => {
          let n = `var(${ky(`conic-offset`)})`,
            r =
              (t === `exit` && e.angularDirection === `clockwise`) ||
              (t === `enter` && e.angularDirection === `counter-clockwise`),
            i = r ? `transparent` : `black`,
            a = r ? `black` : `transparent`,
            o = `conic-gradient(from `;
          return (
            (o += `${e.angle}deg at ${e.x} ${e.y}, `),
            (o += `${i} 0%, ${i} ${n}, `),
            (o += `${a} ${n}, ${a} 100%)`),
            `mask-image: ${o}; -webkit-mask-image: ${o};`
          );
        },
        makePropertyRules: () => `
        @property ${ky(`conic-offset`)} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `,
      }),
      (jy = {
        circle: {
          makeKeyframe: (e, t) => `${ky(`circle-progress`)}: ${t === `start` ? 0 : 1};`,
          makeStyles: (e) => {
            let t = `calc(100% * ${`var(${ky(`circle-progress`)})`})`,
              n = `radial-gradient(circle ${sr(e)}px at ${e.x} ${e.y}, black ${t}, transparent ${t})`;
            return `mask-image: ${n}; -webkit-mask-image: ${n};`;
          },
          makePropertyRules: () => `
        @property ${ky(`circle-progress`)} {
            syntax: '<number>';
            initial-value: 0;
            inherits: false;
        }
    `,
        },
        conic: Ay,
        inset: {
          makeKeyframe: (e, t) =>
            t === `start`
              ? `clip-path: inset(${e.y} ${or(e.x)} ${or(e.y)} ${e.x} round ${e.round}px);`
              : `clip-path: inset(0 round 0);`,
        },
        blinds: {
          makeKeyframe: (e, t, n) => {
            let [, r] = ir(e.width),
              i = `0${r}`;
            return (
              ((t === `start` && n === `exit`) || (t === `end` && n === `enter`)) && (i = e.width),
              `${ky(`blinds-width`)}: ${i};`
            );
          },
          makeStyles: (e, t) => {
            let n = `var(${ky(`blinds-width`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `repeating-linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} 0px, ${r} ${n}, `),
              (a += `${i} ${n}, ${i} ${e.width})`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${ky(`blinds-width`)} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `,
        },
        wipe: {
          makeKeyframe: (e, t, n) => {
            let r = +((t === `start` && n === `exit`) || (t === `end` && n === `enter`));
            return `${ky(`wipe-offset`)}: ${r};`;
          },
          makeStyles: (e, t) => {
            let n = `var(${ky(`wipe-offset`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} calc(calc(0% - ${e.width}) + calc(calc(100% + ${e.width}) * ${n})), `),
              (a += `${i} calc(calc(100% + ${e.width}) * ${n}))`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${ky(`wipe-offset`)} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `,
        },
      }),
      (My = {
        opacity: 1,
        x: `0px`,
        y: `0px`,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
      }),
      (Ny = `view-transition-styles`),
      (Py = {
        x: `0px`,
        y: `0px`,
        scale: 1,
        opacity: 1,
        rotate3d: !1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
        transition: {
          type: `tween`,
          delay: 0,
          duration: 0.2,
          ease: [0.27, 0, 0.51, 1],
          stiffness: 400,
          damping: 30,
          mass: 1,
        },
      }),
      (Fy = () => {}),
      (Ly = () => {
        let e = document.title;
        if (e) {
          if (document.ariaNotify) {
            document.ariaNotify(e, { priority: `high` });
            return;
          }
          (Iy ||
            ((Iy = document.createElement(`div`)),
            Iy.setAttribute(`aria-live`, `assertive`),
            Iy.setAttribute(`aria-atomic`, `true`),
            (Iy.style.position = `absolute`),
            (Iy.style.transform = `scale(0)`),
            document.body.append(Iy)),
            setTimeout(() => {
              Iy.textContent = e;
            }, 60));
        }
      }),
      (zy =
        ev &&
        typeof N.navigation?.back == `function` &&
        !(() => {
          if (d === void 0) return !1;
          let e = d.userAgent,
            t = e.indexOf(`Chrome/`),
            n = +e.slice(t + 7, e.indexOf(`.`, t));
          return n > 101 && n < 128;
        })() &&
        !wn()),
      (By = /[\s?#[\]@!$&'*+,;:="<>%{}|\\^`/]+/gu),
      (Vy = f.createContext(null)),
      (Hy = (() => {
        let e = k(`preview`);
        return ((e.displayName = `RenderTargetEnvironmentContext`), e);
      })()),
      (Uy = typeof document < `u` ? n : h),
      (Wy = new Set()),
      (Gy = (() => {
        let e = k({ urlSearchParams: new URLSearchParams(), replaceSearchParams: async () => {} });
        return ((e.displayName = `URLSearchParamsContext`), e);
      })()),
      (Ky = 46),
      (qy = 47),
      (Jy = (e, t) => e.charCodeAt(t)),
      (Yy = (e, t) => e.lastIndexOf(t)),
      (Xy = (e, t, n) => e.slice(t, n)),
      (Zy = !1),
      (Qy = `/`),
      ($y = (e) => e === qy),
      (eb = new Set([`/404.html`, `/404`, `/404/`])),
      (tb = `__f_replay`),
      (nb = `__f_replay_ignore`),
      (rb = `data-framer-form-hydrated`),
      (ib = `data-framer-form-pending-submit`),
      (ab = () => ev),
      (ob =
        `mousedown.mouseup.touchcancel.touchend.touchstart.auxclick.dblclick.pointercancel.pointerdown.pointerup.dragend.dragstart.drop.compositionend.compositionstart.keydown.keypress.keyup.input.textInput.copy.cut.paste.click.change.contextmenu.reset`.split(
          `.`
        )),
      (sb = (e) => {
        e.target?.closest?.(`#main`) &&
          (fi(e) ||
            (e.stopPropagation(), performance.mark(`framer-react-event-handling-prevented`)));
      }),
      (cb = !1),
      (lb = class {
        markRenderStart = _i(() => {
          performance.mark(`framer-hydration-start`);
        });
        markRenderEnd = _i(() => {
          (performance.mark(`framer-hydration-render-end`),
            vi(`framer-hydration-render`, `framer-hydration-start`, `framer-hydration-render-end`));
        });
        markUseInsertionEffectsStart = _i(() => {
          performance.mark(`framer-hydration-insertion-effects-start`);
        });
        markUseInsertionEffectRouterStart = _i(() => {
          performance.mark(`framer-hydration-router-insertion-effect`);
        });
        markUseInsertionEffectsEnd = _i(() => {
          (performance.mark(`framer-hydration-insertion-effects-end`),
            vi(
              `framer-hydration-insertion-effects`,
              `framer-hydration-insertion-effects-start`,
              `framer-hydration-insertion-effects-end`
            ));
        });
        markUseLayoutEffectsStart = _i(() => {
          performance.mark(`framer-hydration-layout-effects-start`);
        });
        markRouterUseLayoutEffectStart = _i(() => {
          performance.mark(`framer-hydration-router-layout-effect`);
        });
        markUseLayoutEffectsEnd = _i(() => {
          (performance.mark(`framer-hydration-layout-effects-end`),
            vi(
              `framer-hydration-layout-effects`,
              `framer-hydration-layout-effects-start`,
              `framer-hydration-layout-effects-end`
            ));
        });
        markUseEffectsStart = _i(() => {
          performance.mark(`framer-hydration-effects-start`);
        });
        markUseEffectsRouterStart = _i(() => {
          performance.mark(`framer-hydration-router-effect`);
        });
        markUseEffectsAreSynchronous = _i(() => {
          performance.mark(`framer-hydration-effects-sync`);
        });
        markUseEffectsEnd = _i(() => {
          (performance.mark(`framer-hydration-effects-end`),
            vi(
              `framer-hydration-effects`,
              performance.getEntriesByName(`framer-hydration-first-paint`)[0]?.name ??
                performance.getEntriesByName(`framer-hydration-effects-start`)[0]?.name,
              `framer-hydration-effects-end`
            ));
        });
        markRafStart = _i(() => {
          ((this.browserRendering.hasStarted = !0),
            performance.mark(`framer-hydration-browser-render-start`));
        });
        markRafEnd = _i(() => {
          (performance.mark(`framer-hydration-browser-raf-end`),
            vi(
              `framer-hydration-raf`,
              `framer-hydration-browser-render-start`,
              `framer-hydration-browser-raf-end`
            ));
        });
        markLayoutStylePaintEnd = _i(() => {
          (performance.mark(`framer-hydration-first-paint`),
            vi(
              `framer-hydration-time-to-first-paint`,
              `framer-hydration-start`,
              `framer-hydration-first-paint`
            ),
            vi(
              `framer-hydration-browser-render`,
              `framer-hydration-browser-raf-end`,
              `framer-hydration-first-paint`
            ));
        });
        measureMutationEffects = _i(() => {
          vi(
            `framer-hydration-commit`,
            `framer-hydration-layout-effects-end`,
            `framer-hydration-effects-start`
          );
        });
        measureUnattributedHydrationOverhead = _i(() => {
          vi(
            `framer-hydration-uho`,
            performance.getEntriesByName(`framer-hydration-effects-end`)[0]?.name ??
              performance.getEntriesByName(`framer-hydration-layout-effects-end`)[0]?.name,
            `framer-hydration-browser-render-start`
          );
        });
        render = { markStart: () => this.markRenderStart(), markEnd: () => this.markRenderEnd() };
        mutationEffects = { measure: () => this.measureMutationEffects() };
        useInsertionEffects = {
          markStart: () => this.markUseInsertionEffectsStart(),
          markRouterStart: () => this.markUseInsertionEffectRouterStart(),
          markEnd: () => this.markUseInsertionEffectsEnd(),
        };
        useLayoutEffects = {
          markStart: () => this.markUseLayoutEffectsStart(),
          markRouterStart: () => this.markRouterUseLayoutEffectStart(),
          markEnd: () => this.markUseLayoutEffectsEnd(),
        };
        useEffects = {
          markStart: () => this.markUseEffectsStart(),
          markRouterStart: () => this.markUseEffectsRouterStart(),
          markEnd: () => this.markUseEffectsEnd(),
          markAreSynchronous: () => this.markUseEffectsAreSynchronous(),
        };
        browserRendering = {
          hasStarted: !1,
          requestAnimationFrame: {
            markStart: () => this.markRafStart(),
            markEnd: () => this.markRafEnd(),
          },
          layoutStylePaint: { markEnd: () => this.markLayoutStylePaintEnd() },
        };
        unattributedHydrationOverhead = {
          measure: () => this.measureUnattributedHydrationOverhead(),
        };
      }),
      (db = !1),
      (fb = { Start: Ci, End: wi }),
      (pb = class extends Error {}),
      (mb = class extends v {
        constructor(e) {
          (super(e), (this.state = { error: void 0, routerRenderKey: e.routerRenderKey }));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          if (e.routerRenderKey !== t.routerRenderKey) {
            let n = { routerRenderKey: e.routerRenderKey };
            return (t.error && (n.error = void 0), n);
          }
          return null;
        }
        render() {
          if (this.state.error === void 0) return this.props.children;
          if (!(this.state.error instanceof pb)) throw this.state.error;
          let { notFoundPage: e, defaultPageStyle: t } = this.props;
          if (!e) throw this.state.error;
          return Ti(e, t);
        }
      }),
      (hb = Object.freeze([])),
      (_b = new Set()),
      (vb = class {
        observers = new Set();
        transactions = {};
        add(e) {
          this.observers.add(e);
          let t = !1;
          return () => {
            t || ((t = !0), this.remove(e));
          };
        }
        remove(e) {
          this.observers.delete(e);
        }
        notify(e, t) {
          if (t) {
            let n = this.transactions[t] || e;
            ((n.value = e.value), (this.transactions[t] = n));
          } else this.callObservers(e);
        }
        finishTransaction(e) {
          let t = this.transactions[e];
          return (delete this.transactions[e], this.callObservers(t, e));
        }
        callObservers(e, t) {
          let n = [];
          return (
            new Set(this.observers).forEach((r) => {
              typeof r == `function` ? r(e, t) : (r.update(e, t), n.push(r.finish));
            }),
            n
          );
        }
      }),
      (yb = (() => {
        function e(e) {
          return (
            Gi(
              `Animatable()`,
              `2.0.0`,
              `the new animation API (https://www.framer.com/api/animation/)`
            ),
            Ki(e) ? e : new Sb(e)
          );
        }
        return (
          (e.transaction = (e) => {
            let t = Math.random(),
              n = new Set();
            e((e, r) => {
              (e.set(r, t), n.add(e));
            }, t);
            let r = [];
            (n.forEach((e) => {
              r.push(...e.finishTransaction(t));
            }),
              r.forEach((e) => {
                e(t);
              }));
          }),
          (e.getNumber = (t, n = 0) => e.get(t, n)),
          (e.get = (e, t) => (e == null ? t : Ki(e) ? e.get() : e)),
          (e.objectToValues = (e) => {
            if (!e) return e;
            let t = {};
            for (let n in e) {
              let r = e[n];
              Ki(r) ? (t[n] = r.get()) : (t[n] = r);
            }
            return t;
          }),
          e
        );
      })()),
      (bb = `onUpdate`),
      (xb = `finishTransaction`),
      (Sb = class {
        constructor(e) {
          this.value = e;
        }
        value;
        observers = new vb();
        static interpolationFor(e, t) {
          if (Ki(e)) return qi(e, t);
        }
        get() {
          return this.value;
        }
        set(e, t) {
          let n = this.value;
          (Ki(e) && (e = e.get()), (this.value = e));
          let r = { value: e, oldValue: n };
          this.observers.notify(r, t);
        }
        finishTransaction(e) {
          return this.observers.finishTransaction(e);
        }
        onUpdate(e) {
          return this.observers.add(e);
        }
      }),
      ((e) => {
        ((e.isQuadrilateralPoints = (e) => e?.length === 4),
          (e.add = (...e) => e.reduce((e, t) => ({ x: e.x + t.x, y: e.y + t.y }), { x: 0, y: 0 })),
          (e.subtract = (e, t) => ({ x: e.x - t.x, y: e.y - t.y })),
          (e.multiply = (e, t) => ({ x: e.x * t, y: e.y * t })),
          (e.divide = (e, t) => ({ x: e.x / t, y: e.y / t })),
          (e.absolute = (e) => ({ x: Math.abs(e.x), y: Math.abs(e.y) })),
          (e.reverse = (e) => ({ x: e.x * -1, y: e.y * -1 })),
          (e.pixelAligned = (e, t = { x: 0, y: 0 }) => ({ x: Yi(e.x, t.x), y: Yi(e.y, t.y) })),
          (e.distance = (e, t) => {
            let n = Math.abs(e.x - t.x),
              r = Math.abs(e.y - t.y);
            return Math.sqrt(n * n + r * r);
          }),
          (e.angle = (e, t) => (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI - 90),
          (e.angleFromX = (e, t) => (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI),
          (e.isEqual = (e, t) => e.x === t.x && e.y === t.y),
          (e.rotationNormalizer = () => {
            let e;
            return (t) => {
              typeof e != `number` && (e = t);
              let n = e - t,
                r = Math.abs(n) + 180,
                i = Math.floor(r / 360);
              return (n < 180 && (t -= i * 360), n > 180 && (t += i * 360), (e = t), t);
            };
          }));
        function t(e, t) {
          return { x: (e.x + t.x) / 2, y: (e.y + t.y) / 2 };
        }
        e.center = t;
        function n(e) {
          let t = 0,
            n = 0;
          return (
            e.forEach((e) => {
              ((t += e.x), (n += e.y));
            }),
            { x: t / e.length, y: n / e.length }
          );
        }
        e.centroid = n;
        function r(t) {
          let n = e.centroid(t),
            r = new Map();
          for (let e = 0; e < t.length; e++) {
            let i = t[e];
            i && r.set(i, Math.atan2(i.y - n.y, i.x - n.x));
          }
          return t.sort((e, t) => (r.get(e) ?? 0) - (r.get(t) ?? 0));
        }
        e.sortClockwise = r;
      })((Zi ||= {})),
      (Cb = {
        aliceblue: `f0f8ff`,
        antiquewhite: `faebd7`,
        aqua: `0ff`,
        aquamarine: `7fffd4`,
        azure: `f0ffff`,
        beige: `f5f5dc`,
        bisque: `ffe4c4`,
        black: `000`,
        blanchedalmond: `ffebcd`,
        blue: `00f`,
        blueviolet: `8a2be2`,
        brown: `a52a2a`,
        burlywood: `deb887`,
        burntsienna: `ea7e5d`,
        cadetblue: `5f9ea0`,
        chartreuse: `7fff00`,
        chocolate: `d2691e`,
        coral: `ff7f50`,
        cornflowerblue: `6495ed`,
        cornsilk: `fff8dc`,
        crimson: `dc143c`,
        cyan: `0ff`,
        darkblue: `00008b`,
        darkcyan: `008b8b`,
        darkgoldenrod: `b8860b`,
        darkgray: `a9a9a9`,
        darkgreen: `006400`,
        darkgrey: `a9a9a9`,
        darkkhaki: `bdb76b`,
        darkmagenta: `8b008b`,
        darkolivegreen: `556b2f`,
        darkorange: `ff8c00`,
        darkorchid: `9932cc`,
        darkred: `8b0000`,
        darksalmon: `e9967a`,
        darkseagreen: `8fbc8f`,
        darkslateblue: `483d8b`,
        darkslategray: `2f4f4f`,
        darkslategrey: `2f4f4f`,
        darkturquoise: `00ced1`,
        darkviolet: `9400d3`,
        deeppink: `ff1493`,
        deepskyblue: `00bfff`,
        dimgray: `696969`,
        dimgrey: `696969`,
        dodgerblue: `1e90ff`,
        firebrick: `b22222`,
        floralwhite: `fffaf0`,
        forestgreen: `228b22`,
        fuchsia: `f0f`,
        gainsboro: `dcdcdc`,
        ghostwhite: `f8f8ff`,
        gold: `ffd700`,
        goldenrod: `daa520`,
        gray: `808080`,
        green: `008000`,
        greenyellow: `adff2f`,
        grey: `808080`,
        honeydew: `f0fff0`,
        hotpink: `ff69b4`,
        indianred: `cd5c5c`,
        indigo: `4b0082`,
        ivory: `fffff0`,
        khaki: `f0e68c`,
        lavender: `e6e6fa`,
        lavenderblush: `fff0f5`,
        lawngreen: `7cfc00`,
        lemonchiffon: `fffacd`,
        lightblue: `add8e6`,
        lightcoral: `f08080`,
        lightcyan: `e0ffff`,
        lightgoldenrodyellow: `fafad2`,
        lightgray: `d3d3d3`,
        lightgreen: `90ee90`,
        lightgrey: `d3d3d3`,
        lightpink: `ffb6c1`,
        lightsalmon: `ffa07a`,
        lightseagreen: `20b2aa`,
        lightskyblue: `87cefa`,
        lightslategray: `789`,
        lightslategrey: `789`,
        lightsteelblue: `b0c4de`,
        lightyellow: `ffffe0`,
        lime: `0f0`,
        limegreen: `32cd32`,
        linen: `faf0e6`,
        magenta: `f0f`,
        maroon: `800000`,
        mediumaquamarine: `66cdaa`,
        mediumblue: `0000cd`,
        mediumorchid: `ba55d3`,
        mediumpurple: `9370db`,
        mediumseagreen: `3cb371`,
        mediumslateblue: `7b68ee`,
        mediumspringgreen: `00fa9a`,
        mediumturquoise: `48d1cc`,
        mediumvioletred: `c71585`,
        midnightblue: `191970`,
        mintcream: `f5fffa`,
        mistyrose: `ffe4e1`,
        moccasin: `ffe4b5`,
        navajowhite: `ffdead`,
        navy: `000080`,
        oldlace: `fdf5e6`,
        olive: `808000`,
        olivedrab: `6b8e23`,
        orange: `ffa500`,
        orangered: `ff4500`,
        orchid: `da70d6`,
        palegoldenrod: `eee8aa`,
        palegreen: `98fb98`,
        paleturquoise: `afeeee`,
        palevioletred: `db7093`,
        papayawhip: `ffefd5`,
        peachpuff: `ffdab9`,
        peru: `cd853f`,
        pink: `ffc0cb`,
        plum: `dda0dd`,
        powderblue: `b0e0e6`,
        purple: `800080`,
        rebeccapurple: `663399`,
        red: `f00`,
        rosybrown: `bc8f8f`,
        royalblue: `4169e1`,
        saddlebrown: `8b4513`,
        salmon: `fa8072`,
        sandybrown: `f4a460`,
        seagreen: `2e8b57`,
        seashell: `fff5ee`,
        sienna: `a0522d`,
        silver: `c0c0c0`,
        skyblue: `87ceeb`,
        slateblue: `6a5acd`,
        slategray: `708090`,
        slategrey: `708090`,
        snow: `fffafa`,
        springgreen: `00ff7f`,
        steelblue: `4682b4`,
        tan: `d2b48c`,
        teal: `008080`,
        thistle: `d8bfd8`,
        tomato: `ff6347`,
        turquoise: `40e0d0`,
        violet: `ee82ee`,
        wheat: `f5deb3`,
        white: `fff`,
        whitesmoke: `f5f5f5`,
        yellow: `ff0`,
        yellowgreen: `9acd32`,
      }),
      (wb = class e {
        constructor() {
          ((this.hex = `#000000`),
            (this.rgb_r = 0),
            (this.rgb_g = 0),
            (this.rgb_b = 0),
            (this.xyz_x = 0),
            (this.xyz_y = 0),
            (this.xyz_z = 0),
            (this.luv_l = 0),
            (this.luv_u = 0),
            (this.luv_v = 0),
            (this.lch_l = 0),
            (this.lch_c = 0),
            (this.lch_h = 0),
            (this.hsluv_h = 0),
            (this.hsluv_s = 0),
            (this.hsluv_l = 0),
            (this.hpluv_h = 0),
            (this.hpluv_p = 0),
            (this.hpluv_l = 0),
            (this.r0s = 0),
            (this.r0i = 0),
            (this.r1s = 0),
            (this.r1i = 0),
            (this.g0s = 0),
            (this.g0i = 0),
            (this.g1s = 0),
            (this.g1i = 0),
            (this.b0s = 0),
            (this.b0i = 0),
            (this.b1s = 0),
            (this.b1i = 0));
        }
        static fromLinear(e) {
          return e <= 0.0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - 0.055;
        }
        static toLinear(e) {
          return e > 0.04045 ? ((e + 0.055) / 1.055) ** 2.4 : e / 12.92;
        }
        static yToL(t) {
          return t <= e.epsilon ? (t / e.refY) * e.kappa : 116 * (t / e.refY) ** (1 / 3) - 16;
        }
        static lToY(t) {
          return t <= 8 ? (e.refY * t) / e.kappa : e.refY * ((t + 16) / 116) ** 3;
        }
        static rgbChannelToHex(t) {
          let n = Math.round(t * 255),
            r = n % 16,
            i = ((n - r) / 16) | 0;
          return e.hexChars.charAt(i) + e.hexChars.charAt(r);
        }
        static hexToRgbChannel(t, n) {
          let r = e.hexChars.indexOf(t.charAt(n)),
            i = e.hexChars.indexOf(t.charAt(n + 1));
          return (r * 16 + i) / 255;
        }
        static distanceFromOriginAngle(e, t, n) {
          let r = t / (Math.sin(n) - e * Math.cos(n));
          return r < 0 ? 1 / 0 : r;
        }
        static distanceFromOrigin(e, t) {
          return Math.abs(t) / Math.sqrt(e ** 2 + 1);
        }
        static min6(e, t, n, r, i, a) {
          return Math.min(e, Math.min(t, Math.min(n, Math.min(r, Math.min(i, a)))));
        }
        rgbToHex() {
          ((this.hex = `#`),
            (this.hex += e.rgbChannelToHex(this.rgb_r)),
            (this.hex += e.rgbChannelToHex(this.rgb_g)),
            (this.hex += e.rgbChannelToHex(this.rgb_b)));
        }
        hexToRgb() {
          ((this.hex = this.hex.toLowerCase()),
            (this.rgb_r = e.hexToRgbChannel(this.hex, 1)),
            (this.rgb_g = e.hexToRgbChannel(this.hex, 3)),
            (this.rgb_b = e.hexToRgbChannel(this.hex, 5)));
        }
        xyzToRgb() {
          ((this.rgb_r = e.fromLinear(
            e.m_r0 * this.xyz_x + e.m_r1 * this.xyz_y + e.m_r2 * this.xyz_z
          )),
            (this.rgb_g = e.fromLinear(
              e.m_g0 * this.xyz_x + e.m_g1 * this.xyz_y + e.m_g2 * this.xyz_z
            )),
            (this.rgb_b = e.fromLinear(
              e.m_b0 * this.xyz_x + e.m_b1 * this.xyz_y + e.m_b2 * this.xyz_z
            )));
        }
        rgbToXyz() {
          let t = e.toLinear(this.rgb_r),
            n = e.toLinear(this.rgb_g),
            r = e.toLinear(this.rgb_b);
          ((this.xyz_x = 0.41239079926595 * t + 0.35758433938387 * n + 0.18048078840183 * r),
            (this.xyz_y = 0.21263900587151 * t + 0.71516867876775 * n + 0.072192315360733 * r),
            (this.xyz_z = 0.019330818715591 * t + 0.11919477979462 * n + 0.95053215224966 * r));
        }
        xyzToLuv() {
          let t = this.xyz_x + 15 * this.xyz_y + 3 * this.xyz_z,
            n = 4 * this.xyz_x,
            r = 9 * this.xyz_y;
          (t === 0 ? ((n = NaN), (r = NaN)) : ((n /= t), (r /= t)),
            (this.luv_l = e.yToL(this.xyz_y)),
            this.luv_l === 0
              ? ((this.luv_u = 0), (this.luv_v = 0))
              : ((this.luv_u = 13 * this.luv_l * (n - e.refU)),
                (this.luv_v = 13 * this.luv_l * (r - e.refV))));
        }
        luvToXyz() {
          if (this.luv_l === 0) {
            ((this.xyz_x = 0), (this.xyz_y = 0), (this.xyz_z = 0));
            return;
          }
          let t = this.luv_u / (13 * this.luv_l) + e.refU,
            n = this.luv_v / (13 * this.luv_l) + e.refV;
          ((this.xyz_y = e.lToY(this.luv_l)),
            (this.xyz_x = 0 - (9 * this.xyz_y * t) / ((t - 4) * n - t * n)),
            (this.xyz_z = (9 * this.xyz_y - 15 * n * this.xyz_y - n * this.xyz_x) / (3 * n)));
        }
        luvToLch() {
          if (
            ((this.lch_l = this.luv_l),
            (this.lch_c = Math.sqrt(this.luv_u * this.luv_u + this.luv_v * this.luv_v)),
            this.lch_c < 1e-8)
          )
            this.lch_h = 0;
          else {
            let e = Math.atan2(this.luv_v, this.luv_u);
            ((this.lch_h = (e * 180) / Math.PI), this.lch_h < 0 && (this.lch_h = 360 + this.lch_h));
          }
        }
        lchToLuv() {
          let e = (this.lch_h / 180) * Math.PI;
          ((this.luv_l = this.lch_l),
            (this.luv_u = Math.cos(e) * this.lch_c),
            (this.luv_v = Math.sin(e) * this.lch_c));
        }
        calculateBoundingLines(t) {
          let n = (t + 16) ** 3 / 1560896,
            r = n > e.epsilon ? n : t / e.kappa,
            i = r * (284517 * e.m_r0 - 94839 * e.m_r2),
            a = r * (838422 * e.m_r2 + 769860 * e.m_r1 + 731718 * e.m_r0),
            o = r * (632260 * e.m_r2 - 126452 * e.m_r1),
            s = r * (284517 * e.m_g0 - 94839 * e.m_g2),
            c = r * (838422 * e.m_g2 + 769860 * e.m_g1 + 731718 * e.m_g0),
            l = r * (632260 * e.m_g2 - 126452 * e.m_g1),
            u = r * (284517 * e.m_b0 - 94839 * e.m_b2),
            d = r * (838422 * e.m_b2 + 769860 * e.m_b1 + 731718 * e.m_b0),
            f = r * (632260 * e.m_b2 - 126452 * e.m_b1);
          ((this.r0s = i / o),
            (this.r0i = (a * t) / o),
            (this.r1s = i / (o + 126452)),
            (this.r1i = ((a - 769860) * t) / (o + 126452)),
            (this.g0s = s / l),
            (this.g0i = (c * t) / l),
            (this.g1s = s / (l + 126452)),
            (this.g1i = ((c - 769860) * t) / (l + 126452)),
            (this.b0s = u / f),
            (this.b0i = (d * t) / f),
            (this.b1s = u / (f + 126452)),
            (this.b1i = ((d - 769860) * t) / (f + 126452)));
        }
        calcMaxChromaHpluv() {
          let t = e.distanceFromOrigin(this.r0s, this.r0i),
            n = e.distanceFromOrigin(this.r1s, this.r1i),
            r = e.distanceFromOrigin(this.g0s, this.g0i),
            i = e.distanceFromOrigin(this.g1s, this.g1i),
            a = e.distanceFromOrigin(this.b0s, this.b0i),
            o = e.distanceFromOrigin(this.b1s, this.b1i);
          return e.min6(t, n, r, i, a, o);
        }
        calcMaxChromaHsluv(t) {
          let n = (t / 360) * Math.PI * 2,
            r = e.distanceFromOriginAngle(this.r0s, this.r0i, n),
            i = e.distanceFromOriginAngle(this.r1s, this.r1i, n),
            a = e.distanceFromOriginAngle(this.g0s, this.g0i, n),
            o = e.distanceFromOriginAngle(this.g1s, this.g1i, n),
            s = e.distanceFromOriginAngle(this.b0s, this.b0i, n),
            c = e.distanceFromOriginAngle(this.b1s, this.b1i, n);
          return e.min6(r, i, a, o, s, c);
        }
        hsluvToLch() {
          if (this.hsluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
          else if (this.hsluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
          else {
            ((this.lch_l = this.hsluv_l), this.calculateBoundingLines(this.hsluv_l));
            let e = this.calcMaxChromaHsluv(this.hsluv_h);
            this.lch_c = (e / 100) * this.hsluv_s;
          }
          this.lch_h = this.hsluv_h;
        }
        lchToHsluv() {
          if (this.lch_l > 99.9999999) ((this.hsluv_s = 0), (this.hsluv_l = 100));
          else if (this.lch_l < 1e-8) ((this.hsluv_s = 0), (this.hsluv_l = 0));
          else {
            this.calculateBoundingLines(this.lch_l);
            let e = this.calcMaxChromaHsluv(this.lch_h);
            ((this.hsluv_s = (this.lch_c / e) * 100), (this.hsluv_l = this.lch_l));
          }
          this.hsluv_h = this.lch_h;
        }
        hpluvToLch() {
          if (this.hpluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
          else if (this.hpluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
          else {
            ((this.lch_l = this.hpluv_l), this.calculateBoundingLines(this.hpluv_l));
            let e = this.calcMaxChromaHpluv();
            this.lch_c = (e / 100) * this.hpluv_p;
          }
          this.lch_h = this.hpluv_h;
        }
        lchToHpluv() {
          if (this.lch_l > 99.9999999) ((this.hpluv_p = 0), (this.hpluv_l = 100));
          else if (this.lch_l < 1e-8) ((this.hpluv_p = 0), (this.hpluv_l = 0));
          else {
            this.calculateBoundingLines(this.lch_l);
            let e = this.calcMaxChromaHpluv();
            ((this.hpluv_p = (this.lch_c / e) * 100), (this.hpluv_l = this.lch_l));
          }
          this.hpluv_h = this.lch_h;
        }
        hsluvToRgb() {
          (this.hsluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
        }
        hpluvToRgb() {
          (this.hpluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
        }
        hsluvToHex() {
          (this.hsluvToRgb(), this.rgbToHex());
        }
        hpluvToHex() {
          (this.hpluvToRgb(), this.rgbToHex());
        }
        rgbToHsluv() {
          (this.rgbToXyz(), this.xyzToLuv(), this.luvToLch(), this.lchToHpluv(), this.lchToHsluv());
        }
        rgbToHpluv() {
          (this.rgbToXyz(), this.xyzToLuv(), this.luvToLch(), this.lchToHpluv(), this.lchToHpluv());
        }
        hexToHsluv() {
          (this.hexToRgb(), this.rgbToHsluv());
        }
        hexToHpluv() {
          (this.hexToRgb(), this.rgbToHpluv());
        }
      }),
      (wb.hexChars = `0123456789abcdef`),
      (wb.refY = 1),
      (wb.refU = 0.19783000664283),
      (wb.refV = 0.46831999493879),
      (wb.kappa = 903.2962962),
      (wb.epsilon = 0.0088564516),
      (wb.m_r0 = 3.240969941904521),
      (wb.m_r1 = -1.537383177570093),
      (wb.m_r2 = -0.498610760293),
      (wb.m_g0 = -0.96924363628087),
      (wb.m_g1 = 1.87596750150772),
      (wb.m_g2 = 0.041555057407175),
      (wb.m_b0 = 0.055630079696993),
      (wb.m_b1 = -0.20397695888897),
      (wb.m_b2 = 1.056971514242878),
      (Tb = new wb()),
      (Eb = {
        rgb: RegExp(
          `rgb[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        rgba: RegExp(
          `rgba[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsl: RegExp(
          `hsl[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsla: RegExp(
          `hsla[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsv: RegExp(
          `hsv[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsva: RegExp(
          `hsva[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hex3: /^([\da-f])([\da-f])([\da-f])$/iu,
        hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
        hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu,
        hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
      }),
      (Db =
        /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u),
      (Ob = (e) => {
        let { r: t, g: n, b: r, a: i } = xa(e);
        return {
          x: 0.486570948648216 * t + 0.265667693169093 * n + 0.1982172852343625 * r,
          y: 0.2289745640697487 * t + 0.6917385218365062 * n + 0.079286914093745 * r,
          z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * r,
          a: i,
        };
      }),
      (kb = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        Ca({
          r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * n,
          g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * n,
          b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * n,
          a: r,
        })),
      (Ab = (e) => {
        let { r: t, g: n, b: r, a: i } = xa(e);
        return {
          x: 0.4123907992659593 * t + 0.357584339383878 * n + 0.1804807884018343 * r,
          y: 0.2126390058715102 * t + 0.715168678767756 * n + 0.0721923153607337 * r,
          z: 0.0193308187155918 * t + 0.119194779794626 * n + 0.9505321522496607 * r,
          a: i,
        };
      }),
      (jb = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        Ca({
          r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * n,
          g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * n,
          b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * n,
          a: r,
        })),
      (Mb = class e {
        format = `p3`;
        r;
        g;
        b;
        a;
        constructor(e) {
          ((this.r = e.r ?? 0), (this.g = e.g ?? 0), (this.b = e.b ?? 0), (this.a = e.a ?? 1));
        }
        hsv() {
          return wa(this);
        }
        rgb() {
          return Oa(this);
        }
        hsl() {
          return sa(this.r, this.g, this.b);
        }
        toString(e = `p3`, t) {
          switch (e) {
            case `p3`: {
              let e = t?.r ?? this.r,
                n = t?.g ?? this.g,
                r = t?.b ?? this.b,
                i = t?.a ?? this.a;
              return i === 1
                ? `color(display-p3 ${e} ${n} ${r})`
                : `color(display-p3 ${e} ${n} ${r} / ${i})`;
            }
            case `srgb`: {
              let e = this.rgb(),
                n = Math.round(Math.max(0, Math.min(e.r, 1)) * 100) / 100,
                r = Math.round(Math.max(0, Math.min(e.g, 1)) * 100) / 100,
                i = Math.round(Math.max(0, Math.min(e.b, 1)) * 100) / 100,
                a = t?.r ?? n * 255,
                o = t?.g ?? r * 255,
                s = t?.b ?? i * 255,
                c = t?.a ?? e.a ?? 1;
              return c === 1 ? `rgb(${a}, ${o}, ${s})` : `rgba(${a}, ${o}, ${s}, ${c})`;
            }
          }
        }
        static isP3String(e) {
          return e.startsWith(`color(display-p3`);
        }
        static fromHSV(t, n = `p3`) {
          switch (n) {
            case `p3`:
              return new e(Ea(t));
            case `srgb`:
              return new e(Da(Ea(t)));
          }
        }
        static fromRGB(t) {
          return new e(
            Da({
              r: Math.round((t.r / 255) * 1e4) / 1e4,
              g: Math.round((t.g / 255) * 1e4) / 1e4,
              b: Math.round((t.b / 255) * 1e4) / 1e4,
              a: t.a ?? 1,
            })
          );
        }
        static fromRGBString(t) {
          let n = q(t);
          if (n) return e.fromRGB(n);
        }
        static fromString(t) {
          if (!e.isP3String(t)) return;
          let n = ya(t);
          if (n) return new e({ r: n.r, g: n.g, b: n.b, a: n.a });
        }
        static srgbFromValue(t) {
          if (!z(t) || !q.isP3String(t)) return t;
          let n = e.fromString(t);
          return n ? n.toString(`srgb`) : t;
        }
        static multiplyAlpha(t, n) {
          return new e({ r: t.r, g: t.g, b: t.b, a: t.a * n });
        }
      }),
      (Nb = new Map()),
      (q = (() => {
        function e(n, r, i, a) {
          if (typeof n == `string`) {
            let r = Nb.get(n);
            return (
              r || ((r = t(n)), r === void 0 ? { ...e(`black`), isValid: !1 } : (Nb.set(n, r), r))
            );
          }
          let o = t(n, r, i, a);
          return o === void 0 ? { ...e(`black`), isValid: !1 } : o;
        }
        function t(t, n, r, i) {
          if (t === ``) return;
          let a = ka(t, n, r, i);
          if (a) {
            let n = {
              r: a.r,
              g: a.g,
              b: a.b,
              a: a.a,
              h: a.h,
              s: a.s,
              l: a.l,
              initialValue: typeof t == `string` && a.format !== `hsv` ? t : void 0,
              roundA: Math.round(100 * a.a) / 100,
              format: a.format,
              mix: e.mix,
              toValue: () => e.toRgbString(n),
            };
            return n;
          } else return;
        }
        let n = {
          isRGB(e) {
            return e === `rgb` || e === `rgba`;
          },
          isHSL(e) {
            return e === `hsl` || e === `hsla`;
          },
        };
        ((e.inspect = (e, t) =>
          e.format === `hsl`
            ? `<${e.constructor.name} h:${e.h} s:${e.s} l:${e.l} a:${e.a}>`
            : e.format === `hex` || e.format === `name`
              ? `<${e.constructor.name} "${t}">`
              : `<${e.constructor.name} r:${e.r} g:${e.g} b:${e.b} a:${e.a}>`),
          (e.isColor = (t) => (typeof t == `string` ? e.isColorString(t) : e.isColorObject(t))),
          (e.isColorString = (e) => typeof e == `string` && ga(e) !== !1),
          (e.isColorObject = (e) =>
            V(e) &&
            typeof e.r == `number` &&
            typeof e.g == `number` &&
            typeof e.b == `number` &&
            typeof e.h == `number` &&
            typeof e.s == `number` &&
            typeof e.l == `number` &&
            typeof e.a == `number` &&
            typeof e.roundA == `number` &&
            typeof e.format == `string`),
          (e.toString = (t) => e.toRgbString(t)),
          (e.toHex = (e, t = !1) => oa(e.r, e.g, e.b, t)),
          (e.toHexString = (t, n = !1) => `#${e.toHex(t, n)}`),
          (e.isP3String = (e) => typeof e == `string` && Mb.isP3String(e)),
          (e.toRgbString = (e) =>
            e.a === 1
              ? `rgb(` + Math.round(e.r) + `, ` + Math.round(e.g) + `, ` + Math.round(e.b) + `)`
              : `rgba(` +
                Math.round(e.r) +
                `, ` +
                Math.round(e.g) +
                `, ` +
                Math.round(e.b) +
                `, ` +
                e.roundA +
                `)`),
          (e.toHusl = (e) => ({ ...na(e.r, e.g, e.b), a: e.roundA })),
          (e.toHslString = (t) => {
            let n = e.toHsl(t),
              r = Math.round(n.h),
              i = Math.round(n.s * 100),
              a = Math.round(n.l * 100);
            return t.a === 1
              ? `hsl(` + r + `, ` + i + `%, ` + a + `%)`
              : `hsla(` + r + `, ` + i + `%, ` + a + `%, ` + t.roundA + `)`;
          }),
          (e.toHsv = (e) => {
            let t = ua(e.r, e.g, e.b);
            return { h: t.h * 360, s: t.s, v: t.v, a: e.a };
          }),
          (e.toHsvString = (e) => {
            let t = ua(e.r, e.g, e.b),
              n = Math.round(t.h * 360),
              r = Math.round(t.s * 100),
              i = Math.round(t.v * 100);
            return e.a === 1
              ? `hsv(` + n + `, ` + r + `%, ` + i + `%)`
              : `hsva(` + n + `, ` + r + `%, ` + i + `%, ` + e.roundA + `)`;
          }),
          (e.toName = (e) => {
            if (e.a === 0) return `transparent`;
            if (e.a < 1) return !1;
            let t = oa(e.r, e.g, e.b, !0);
            for (let e of Object.keys(Cb)) if (Cb[e] === t) return e;
            return !1;
          }),
          (e.toHsl = (e) => ({ h: Math.round(e.h), s: e.s, l: e.l, a: e.a })),
          (e.toRgb = (e) => ({
            r: Math.round(e.r),
            g: Math.round(e.g),
            b: Math.round(e.b),
            a: e.a,
          })),
          (e.brighten = (t, n = 10) => {
            let r = e.toRgb(t);
            return (
              (r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(n / 100))))),
              (r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(n / 100))))),
              (r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(n / 100))))),
              e(r)
            );
          }),
          (e.lighten = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.l += n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r));
          }),
          (e.darken = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.l -= n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r));
          }),
          (e.saturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.s += n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r));
          }),
          (e.desaturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.s -= n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r));
          }),
          (e.grayscale = (t) => e.desaturate(t, 100)),
          (e.hueRotate = (t, n) => {
            let r = e.toHsl(t);
            return ((r.h += n), (r.h = r.h > 360 ? r.h - 360 : r.h), e(r));
          }),
          (e.alpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: n })),
          (e.transparent = (t) => e.alpha(t, 0)),
          (e.multiplyAlpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: t.a * n })),
          (e.alphaComposite = (t, n) => {
            if (t.a === 1) return t;
            if (n.a < 1)
              throw Error(
                "Bottom color must be fully opaque for alpha blending, you should check and determine your own strategy for resolving alpha bottom layers, ie. `Color.alphaComposite(bottom, Color('white'))`"
              );
            return t.a === 0
              ? n
              : e({
                  r: Math.round(t.r * t.a + n.r * (1 - t.a)),
                  g: Math.round(t.g * t.a + n.g * (1 - t.a)),
                  b: Math.round(t.b * t.a + n.b * (1 - t.a)),
                  a: 1,
                });
          }),
          (e.interpolate = (t, n, r = `rgb`) => {
            if (!e.isColorObject(t) || !e.isColorObject(n))
              throw TypeError(`Both arguments for Color.interpolate must be Color objects`);
            return (i) => e.mixAsColor(t, n, i, !1, r);
          }),
          (e.mix = (t, n, { model: r = `rgb` } = {}) => {
            let i = typeof t == `string` ? e(t) : t,
              a = e.interpolate(i, n, r);
            return (t) => e.toRgbString(a(t));
          }),
          (e.mixAsColor = (t, r, i = 0.5, a = !1, o = `rgb`) => {
            let s = null;
            if (n.isRGB(o))
              s = e({
                r: Qi(i, [0, 1], [t.r, r.r], a),
                g: Qi(i, [0, 1], [t.g, r.g], a),
                b: Qi(i, [0, 1], [t.b, r.b], a),
                a: Qi(i, [0, 1], [t.a, r.a], a),
              });
            else {
              let c, l;
              (n.isHSL(o)
                ? ((c = e.toHsl(t)), (l = e.toHsl(r)))
                : ((c = e.toHusl(t)), (l = e.toHusl(r))),
                c.s === 0 ? (c.h = l.h) : l.s === 0 && (l.h = c.h));
              let u = c.h,
                d = l.h,
                f = d - u;
              f > 180 ? (f = d - 360 - u) : f < -180 && (f = d + 360 - u);
              let p = {
                h: Qi(i, [0, 1], [u, u + f], a),
                s: Qi(i, [0, 1], [c.s, l.s], a),
                l: Qi(i, [0, 1], [c.l, l.l], a),
                a: Qi(i, [0, 1], [t.a, r.a], a),
              };
              s = n.isHSL(o) ? e(p) : e(ra(p.h, p.s, p.l, p.a));
            }
            return s;
          }),
          (e.random = (t = 1) => {
            function n() {
              return Math.floor(Math.random() * 255);
            }
            return e(`rgba(` + n() + `, ` + n() + `, ` + n() + `, ` + t + `)`);
          }),
          (e.grey = (t = 0.5, n = 1) => (
            (t = Math.floor(t * 255)),
            e(`rgba(` + t + `, ` + t + `, ` + t + `, ` + n + `)`)
          )),
          (e.gray = e.grey),
          (e.rgbToHsl = (e, t, n) => sa(e, t, n)),
          (e.isValidColorProperty = (t, n) =>
            !!(
              (t.toLowerCase().slice(-5) === `color` || t === `fill` || t === `stroke`) &&
              typeof n == `string` &&
              e.isColorString(n)
            )),
          (e.difference = (e, t) => {
            let n = (e.r + t.r) / 2,
              r = e.r - t.r,
              i = e.g - t.g,
              a = e.b - t.b,
              o = r ** 2,
              s = i ** 2,
              c = a ** 2;
            return Math.sqrt(2 * o + 4 * s + 3 * c + (n * (o - c)) / 256);
          }),
          (e.equal = (e, t, n = 0.1) =>
            !(
              Math.abs(e.r - t.r) >= n ||
              Math.abs(e.g - t.g) >= n ||
              Math.abs(e.b - t.b) >= n ||
              Math.abs(e.a - t.a) * 256 >= n
            )));
        function r(e) {
          e /= 255;
          let t = Math.abs(e);
          return t < 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
        }
        return (
          (e.luminance = (t) => {
            let { r: n, g: i, b: a } = e.toRgb(t);
            return 0.2126 * r(n) + 0.7152 * r(i) + 0.0722 * r(a);
          }),
          (e.contrast = (t, n) => {
            let r = e.luminance(t),
              i = e.luminance(n);
            return (Math.max(r, i) + 0.05) / (Math.min(r, i) + 0.05);
          }),
          e
        );
      })()),
      (Pb = (e) => e instanceof Be),
      (Fb = J_().EventEmitter),
      (Ib = class {
        _emitter = new Fb();
        eventNames() {
          return this._emitter.eventNames();
        }
        eventListeners() {
          let e = {};
          for (let t of this._emitter.eventNames()) e[t] = this._emitter.listeners(t);
          return e;
        }
        on(e, t) {
          this.addEventListener(e, t, !1, !1, this);
        }
        off(e, t) {
          this.removeEventListeners(e, t);
        }
        once(e, t) {
          this.addEventListener(e, t, !0, !1, this);
        }
        unique(e, t) {
          this.addEventListener(e, t, !1, !0, this);
        }
        addEventListener(e, t, n, r, i) {
          if (r) {
            for (let e of this._emitter.eventNames()) if (t === this._emitter.listeners(e)) return;
          }
          n === !0 ? this._emitter.once(e, t, i) : this._emitter.addListener(e, t, i);
        }
        removeEventListeners(e, t) {
          e ? this._emitter.removeListener(e, t) : this.removeAllEventListeners();
        }
        removeAllEventListeners() {
          this._emitter.removeAllListeners();
        }
        countEventListeners(e) {
          if (e) return this._emitter.listeners(e).length;
          {
            let e = 0;
            for (let t of this._emitter.eventNames()) e += this._emitter.listeners(t).length;
            return e;
          }
        }
        emit(e, ...t) {
          this._emitter.emit(e, ...t);
        }
      }),
      (Lb = (e) => {
        setTimeout(e, 1 / 60);
      }),
      (Rb = Vv.requestAnimationFrame || Lb),
      (zb = (e) => Rb(e)),
      (Bb = 1 / 60),
      (Vb = class extends Ib {
        _started = !1;
        _frame = 0;
        _frameTasks = [];
        addFrameTask(e) {
          this._frameTasks.push(e);
        }
        _processFrameTasks() {
          let e = this._frameTasks,
            t = e.length;
          if (t !== 0) {
            for (let n = 0; n < t; n++) e[n]?.();
            e.length = 0;
          }
        }
        static set TimeStep(e) {
          Bb = e;
        }
        static get TimeStep() {
          return Bb;
        }
        constructor(e = !1) {
          (super(), e && this.start());
        }
        start() {
          return this._started
            ? this
            : ((this._frame = 0), (this._started = !0), zb(this.tick), this);
        }
        stop() {
          return ((this._started = !1), this);
        }
        get frame() {
          return this._frame;
        }
        get time() {
          return this._frame * Bb;
        }
        tick = () => {
          this._started &&
            (zb(this.tick),
            this.emit(`update`, this._frame, Bb),
            this.emit(`render`, this._frame, Bb),
            this._processFrameTasks(),
            this._frame++);
        };
      }),
      (Hb = new Vb()),
      (Ub = { target: Fa() ? `EXPORT` : `PREVIEW`, zoom: 1 }),
      (J = {
        canvas: `CANVAS`,
        export: `EXPORT`,
        thumbnail: `THUMBNAIL`,
        preview: `PREVIEW`,
        current: () => Ub.target,
        hasRestrictions: () => {
          let e = Ub.target;
          return e === `CANVAS` || e === `EXPORT`;
        },
      }),
      (Wb = (e) => ({
        correct: (t, { projectionDelta: n, treeScale: r }) => {
          if ((typeof t == `string` && (t = parseFloat(t)), t === 0)) return `0px`;
          let i = t;
          return (
            n && r && ((i = Math.round(t / n[e].scale / r[e])), (i = Math.max(i, 1))),
            i + `px`
          );
        },
      })),
      ke({
        borderTopWidth: Wb(`y`),
        borderLeftWidth: Wb(`x`),
        borderRightWidth: Wb(`x`),
        borderBottomWidth: Wb(`y`),
      }),
      (Gb = f.createContext({
        getLayoutId: (e) => null,
        persistLayoutIdCache: () => {},
        top: !1,
        enabled: !0,
      })),
      (Kb = {
        background: void 0,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,
        lineHeight: `1.4em`,
        textOverflow: `ellipsis`,
        overflow: `hidden`,
        minHeight: 0,
        width: `100%`,
        height: `100%`,
      }),
      (qb = {
        ...Kb,
        border: `1px solid rgba(149, 149, 149, 0.15)`,
        borderRadius: 6,
        fontSize: `12px`,
        backgroundColor: `rgba(149, 149, 149, 0.1)`,
        color: `#a5a5a5`,
      }),
      (Jb = {
        overflow: `hidden`,
        whiteSpace: `nowrap`,
        textOverflow: `ellipsis`,
        maxWidth: `100%`,
        flexShrink: 0,
        padding: `0 10px`,
      }),
      (Yb = { ...Jb, fontWeight: 500 }),
      (Xb = {
        ...Jb,
        whiteSpace: `pre`,
        maxHeight: `calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))`,
        WebkitMaskImage: `linear-gradient(to bottom, black 80%, transparent 100%)`,
      }),
      (Zb = (e) => e),
      (Qb =
        /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u),
      ($b = Wa(
        (e) =>
          Qb.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
      )),
      (ex = (e) => () => {
        Wi(e);
      }),
      (tx = () => () => {}),
      (nx = {
        imagePlaceholderSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="rgb(136, 136, 136, 0.2)" fill-rule="evenodd"/></svg>`,
        useImageSource(e) {
          return e.src ?? ``;
        },
        useImageElement(e, t, n) {
          let r = ix.useImageSource(e, t, n);
          return s(() => {
            let t = new Image();
            return ((t.src = r), e.srcSet && (t.srcset = e.srcSet), t);
          }, [r, e.srcSet]);
        },
        canRenderOptimizedCanvasImage() {
          return !1;
        },
        fontStore: {
          isSelectorLoaded() {
            return !0;
          },
          async loadFonts() {
            return { newlyLoadedFontCount: 0 };
          },
          async loadWebFontsFromSelectors() {
            return [];
          },
          async loadMissingFonts() {},
        },
        isOnPageCanvas: !1,
      }),
      (rx = !1),
      (ix = new Proxy(nx, {
        get(e, t, n) {
          return Reflect.has(e, t)
            ? Reflect.get(e, t, n)
            : [`getLogger`].includes(String(t))
              ? tx()
              : ex(
                  rx
                    ? `${String(t)} is not available in this version of Framer.`
                    : `${String(t)} is only available inside of Framer. https://www.framer.com/`
                );
        },
      })),
      (ax = {
        isSelectorLoaded(e) {
          return ix.fontStore.isSelectorLoaded(e);
        },
        loadFonts(e) {
          return ix.fontStore.loadFonts(e);
        },
        loadWebFontsFromSelectors(e) {
          return ix.fontStore.loadWebFontsFromSelectors(e);
        },
        loadMissingFonts(e, t) {
          return ix.fontStore.loadMissingFonts(e, t);
        },
      }),
      (ox = { borderRadius: `inherit`, cornerShape: `inherit` }),
      (sx = [1, 2, 2.2]),
      (cx = [512, 1024, 2048, 4096]),
      (lx = 512),
      (ux = { position: `absolute`, ...ox, top: 0, right: 0, bottom: 0, left: 0 }),
      (dx = `src`),
      (fx = {
        isImageObject: function (e) {
          return !e || typeof e == `string` ? !1 : typeof e == `object` && dx in e;
        },
      }),
      (px = (() => {
        function e(e, t) {
          return { a: e, b: t };
        }
        return (
          (e.offset = (t, n) => {
            let r = po(Zi.angleFromX(t.a, t.b)),
              i = n * Math.sin(r),
              a = n * Math.cos(r);
            return e({ x: t.a.x + i, y: t.a.y - a }, { x: t.b.x + i, y: t.b.y - a });
          }),
          (e.intersection = (e, t, n) => {
            let r = e.a.x,
              i = e.a.y,
              a = e.b.x,
              o = e.b.y,
              s = t.a.x,
              c = t.a.y,
              l = t.b.x,
              u = t.b.y,
              d = (l - s) * (c - i) - (u - c) * (s - r),
              f = (l - s) * (o - i) - (u - c) * (a - r),
              p = (a - r) * (c - i) - (o - i) * (s - r);
            if ((d === 0 && f === 0) || f === 0) return null;
            let m = d / f,
              h = p / f;
            return n && (m < 0 || m > 1 || h < 0 || h > 1)
              ? null
              : { x: r + m * (a - r), y: i + m * (o - i) };
          }),
          (e.intersectionAngle = (e, t) => {
            let n = e.b.x - e.a.x,
              r = e.b.y - e.a.y,
              i = t.b.x - t.a.x,
              a = t.b.y - t.a.y;
            return Math.atan2(n * a - r * i, n * i + r * a) * (180 / Math.PI);
          }),
          (e.isOrthogonal = (e) => e.a.x === e.b.x || e.a.y === e.b.y),
          (e.perpendicular = (t, n) => {
            let r = t.a.x - t.b.x,
              i = t.a.y - t.b.y;
            return e(Zi(n.x - i, n.y + r), n);
          }),
          (e.projectPoint = (t, n) => {
            let r = e.perpendicular(t, n);
            return e.intersection(t, r);
          }),
          (e.pointAtPercentDistance = (t, n) => {
            let r = e.distance(t),
              i = (n * r) / r;
            return { x: i * t.b.x + (1 - i) * t.a.x, y: i * t.b.y + (1 - i) * t.a.y };
          }),
          (e.distance = (e) => Zi.distance(e.a, e.b)),
          e
        );
      })()),
      (Y = {
        equals: function (e, t) {
          return e === t
            ? !0
            : !e || !t
              ? !1
              : e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
        },
        from: (e) => ({ x: e.x, y: e.y, width: e.width, height: e.height }),
        atOrigin: (e) => ({ x: 0, y: 0, width: e.width, height: e.height }),
        fromTwoPoints: (e, t) => ({
          x: Math.min(e.x, t.x),
          y: Math.min(e.y, t.y),
          width: Math.abs(e.x - t.x),
          height: Math.abs(e.y - t.y),
        }),
        fromRect: (e) => ({
          x: e.left,
          y: e.top,
          width: e.right - e.left,
          height: e.bottom - e.top,
        }),
        multiply: (e, t) => ({ x: e.x * t, y: e.y * t, width: e.width * t, height: e.height * t }),
        divide: (e, t) => Y.multiply(e, 1 / t),
        offset: (e, t) => {
          let n = typeof t.x == `number` ? t.x : 0,
            r = typeof t.y == `number` ? t.y : 0;
          return { ...e, x: e.x + n, y: e.y + r };
        },
        inflate: (e, t) => {
          if (t === 0) return e;
          let n = 2 * t;
          return { x: e.x - t, y: e.y - t, width: e.width + n, height: e.height + n };
        },
        pixelAligned: (e) => {
          let t = Math.round(e.x),
            n = Math.round(e.y),
            r = Math.round(e.x + e.width),
            i = Math.round(e.y + e.height);
          return { x: t, y: n, width: Math.max(r - t, 0), height: Math.max(i - n, 0) };
        },
        halfPixelAligned: (e) => {
          let t = Math.round(e.x * 2) / 2,
            n = Math.round(e.y * 2) / 2,
            r = Math.round((e.x + e.width) * 2) / 2,
            i = Math.round((e.y + e.height) * 2) / 2;
          return { x: t, y: n, width: Math.max(r - t, 1), height: Math.max(i - n, 1) };
        },
        round: (e, t = 0) => ({
          x: Ji(e.x, t),
          y: Ji(e.y, t),
          width: Ji(e.width, t),
          height: Ji(e.height, t),
        }),
        roundToOutside: (e) => {
          let t = Math.floor(e.x),
            n = Math.floor(e.y),
            r = Math.ceil(e.x + e.width),
            i = Math.ceil(e.y + e.height);
          return { x: t, y: n, width: Math.max(r - t, 0), height: Math.max(i - n, 0) };
        },
        minX: (e) => e.x,
        maxX: (e) => e.x + e.width,
        minY: (e) => e.y,
        maxY: (e) => e.y + e.height,
        positions: (e) => ({
          minX: e.x,
          midX: e.x + e.width / 2,
          maxX: Y.maxX(e),
          minY: e.y,
          midY: e.y + e.height / 2,
          maxY: Y.maxY(e),
        }),
        center: (e) => ({ x: e.x + e.width / 2, y: e.y + e.height / 2 }),
        boundingRectFromPoints: (e) => {
          let t = 1 / 0,
            n = -1 / 0,
            r = 1 / 0,
            i = -1 / 0;
          for (let a = 0; a < e.length; a++) {
            let o = e[a];
            ((t = Math.min(t, o.x)),
              (n = Math.max(n, o.x)),
              (r = Math.min(r, o.y)),
              (i = Math.max(i, o.y)));
          }
          return { x: t, y: r, width: n - t, height: i - r };
        },
        fromPoints: (e) => {
          let [t, n, r, i] = e,
            { x: a, y: o } = t;
          return { x: a, y: o, width: Zi.distance(t, n), height: Zi.distance(t, i) };
        },
        merge: (...e) => {
          let t = { x: Math.min(...e.map(Y.minX)), y: Math.min(...e.map(Y.minY)) },
            n = { x: Math.max(...e.map(Y.maxX)), y: Math.max(...e.map(Y.maxY)) };
          return Y.fromTwoPoints(t, n);
        },
        intersection: (e, t) => {
          let n = Math.max(e.x, t.x),
            r = Math.min(e.x + e.width, t.x + t.width),
            i = Math.max(e.y, t.y),
            a = Math.min(e.y + e.height, t.y + t.height);
          return { x: n, y: i, width: r - n, height: a - i };
        },
        points: (e) => [
          { x: Y.minX(e), y: Y.minY(e) },
          { x: Y.minX(e), y: Y.maxY(e) },
          { x: Y.maxX(e), y: Y.minY(e) },
          { x: Y.maxX(e), y: Y.maxY(e) },
        ],
        pointsAtOrigin: (e) => [
          { x: 0, y: 0 },
          { x: e.width, y: 0 },
          { x: e.width, y: e.height },
          { x: 0, y: e.height },
        ],
        transform: (e, t) => {
          let { x: n, y: r } = t.transformPoint({ x: e.x, y: e.y }),
            { x: i, y: a } = t.transformPoint({ x: e.x + e.width, y: e.y }),
            { x: o, y: s } = t.transformPoint({ x: e.x + e.width, y: e.y + e.height }),
            { x: c, y: l } = t.transformPoint({ x: e.x, y: e.y + e.height }),
            u = Math.min(n, i, o, c),
            d = Math.max(n, i, o, c) - u,
            f = Math.min(r, a, s, l);
          return { x: u, y: f, width: d, height: Math.max(r, a, s, l) - f };
        },
        containsPoint: (e, t) =>
          !(
            t.x < Y.minX(e) ||
            t.x > Y.maxX(e) ||
            t.y < Y.minY(e) ||
            t.y > Y.maxY(e) ||
            Number.isNaN(e.x) ||
            Number.isNaN(e.y)
          ),
        containsRect: (e, t) => {
          for (let n of Y.points(t)) if (!Y.containsPoint(e, n)) return !1;
          return !0;
        },
        toCSS: (e) => ({
          display: `block`,
          transform: `translate(${e.x}px, ${e.y}px)`,
          width: `${e.width}px`,
          height: `${e.height}px`,
        }),
        inset: (e, t) => ({
          x: e.x + t,
          y: e.y + t,
          width: Math.max(0, e.width - 2 * t),
          height: Math.max(0, e.height - 2 * t),
        }),
        intersects: (e, t) =>
          !(t.x >= Y.maxX(e) || Y.maxX(t) <= e.x || t.y >= Y.maxY(e) || Y.maxY(t) <= e.y),
        overlapHorizontally: (e, t) => {
          let n = Y.maxX(e),
            r = Y.maxX(t);
          return n > t.x && r > e.x;
        },
        overlapVertically: (e, t) => {
          let n = Y.maxY(e),
            r = Y.maxY(t);
          return n > t.y && r > e.y;
        },
        doesNotIntersect: (e, t) => !t.some((t) => Y.intersects(t, e)),
        isEqual: (e, t) => Y.equals(e, t),
        cornerPoints: (e) => {
          let t = e.x,
            n = e.x + e.width,
            r = e.y,
            i = e.y + e.height;
          return [
            { x: t, y: r },
            { x: n, y: r },
            { x: n, y: i },
            { x: t, y: i },
          ];
        },
        midPoints: (e) => {
          let t = e.x,
            n = e.x + e.width / 2,
            r = e.x + e.width,
            i = e.y,
            a = e.y + e.height / 2,
            o = e.y + e.height;
          return [
            { x: n, y: i },
            { x: r, y: a },
            { x: n, y: o },
            { x: t, y: a },
          ];
        },
        pointDistance: (e, t) => {
          let n = 0,
            r = 0;
          return (
            t.x < e.x ? (n = e.x - t.x) : t.x > Y.maxX(e) && (n = t.x - Y.maxX(e)),
            t.y < e.y ? (r = e.y - t.y) : t.y > Y.maxY(e) && (r = t.y - Y.maxY(e)),
            Zi.distance({ x: n, y: r }, { x: 0, y: 0 })
          );
        },
        delta: (e, t) => {
          let n = { x: Y.minX(e), y: Y.minY(e) },
            r = { x: Y.minX(t), y: Y.minY(t) };
          return { x: n.x - r.x, y: n.y - r.y };
        },
        withMinSize: (e, t) => {
          let { width: n, height: r } = t,
            i = e.width - n,
            a = e.height - r;
          return {
            width: Math.max(e.width, n),
            height: Math.max(e.height, r),
            x: e.width < n ? e.x + i / 2 : e.x,
            y: e.height < r ? e.y + a / 2 : e.y,
          };
        },
        anyPointsOutsideRect: (e, t) => {
          let n = Y.minX(e),
            r = Y.minY(e),
            i = Y.maxX(e),
            a = Y.maxY(e);
          for (let e of t) if (e.x < n || e.x > i || e.y < r || e.y > a) return !0;
          return !1;
        },
        edges: (e) => {
          let [t, n, r, i] = Y.cornerPoints(e);
          return [px(t, n), px(n, r), px(r, i), px(i, t)];
        },
        rebaseRectOnto: (e, t, n, r) => {
          let i = { ...e };
          switch (n) {
            case `bottom`:
            case `top`:
              switch (r) {
                case `start`:
                  i.x = t.x;
                  break;
                case `center`:
                  i.x = t.x + t.width / 2 - e.width / 2;
                  break;
                case `end`:
                  i.x = t.x + t.width - e.width;
                  break;
                default:
                  U(r);
              }
              break;
            case `left`:
              i.x = t.x - e.width;
              break;
            case `right`:
              i.x = t.x + t.width;
              break;
            default:
              U(n);
          }
          switch (n) {
            case `left`:
            case `right`:
              switch (r) {
                case `start`:
                  i.y = t.y;
                  break;
                case `center`:
                  i.y = t.y + t.height / 2 - e.height / 2;
                  break;
                case `end`:
                  i.y = t.y + t.height - e.height;
                  break;
                default:
                  U(r);
              }
              break;
            case `top`:
              i.y = t.y - e.height;
              break;
            case `bottom`:
              i.y = t.y + t.height;
              break;
            default:
              U(n);
          }
          return i;
        },
        constrain: (e, t) => {
          if (!t) return e;
          let n = Math.max(e.y, t.y);
          n = Math.min(n, t.y + t.height - e.height);
          let r = Math.max(e.x, t.x);
          return (
            (r = Math.min(r, t.x + t.width - e.width)),
            { x: r, y: n, width: e.width, height: e.height }
          );
        },
        closestEdge: (e, t) => {
          let n = px(t, Y.center(e)),
            r = Y.edges(e);
          for (let e = 0; e < r.length; e++) {
            let t = r[e];
            if (t && px.intersection(n, t, !0)) {
              let n = mx[e];
              return (H(n, () => `Invalid edge name: ${JSON.stringify(mx)}`), { edge: t, name: n });
            }
          }
        },
        closestRect: (e, t) => {
          let n = 0,
            r = e[0];
          H(r, `Rect array is empty`);
          let i = Y.pointDistance(r, t);
          for (let a = 1; a < e.length; a += 1) {
            let o = e[a];
            H(o);
            let s = Y.pointDistance(o, t);
            if ((s < i && ((n = a), (r = o), (i = s)), i === 0)) break;
          }
          return { rect: r, index: n };
        },
      }),
      (mx = [`top`, `right`, `bottom`, `left`]),
      (hx = {
        quickfix: (e) => (
          (mo(e.widthType) || mo(e.heightType)) && (e.aspectRatio = null),
          W(e.aspectRatio) &&
            (e.left && e.right && (e.widthType = 0),
            e.top && e.bottom && (e.heightType = 0),
            e.left && e.right && e.top && e.bottom && (e.bottom = !1),
            e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
          e.left &&
            e.right &&
            ((e.fixedSize || mo(e.widthType) || W(e.maxWidth)) && (e.right = !1),
            (e.widthType = 0)),
          e.top &&
            e.bottom &&
            ((e.fixedSize || mo(e.heightType) || W(e.maxHeight)) && (e.bottom = !1),
            (e.heightType = 0)),
          e
        ),
      }),
      (gx = {
        fromProperties: (e) => {
          let {
              left: t,
              right: n,
              top: r,
              bottom: i,
              width: a,
              height: o,
              centerX: s,
              centerY: c,
              aspectRatio: l,
              autoSize: u,
            } = e,
            d = hx.quickfix({
              left: W(t) || Ki(t),
              right: W(n) || Ki(n),
              top: W(r) || Ki(r),
              bottom: W(i) || Ki(i),
              widthType: ho(a),
              heightType: ho(o),
              aspectRatio: l || null,
              fixedSize: u === !0,
            }),
            f = null,
            p = null,
            m = 0,
            h = 0;
          if (d.widthType !== 0 && typeof a == `string`) {
            let e = parseFloat(a);
            a.endsWith(`fr`)
              ? ((m = 3), (f = e))
              : a === `auto`
                ? (m = 2)
                : ((m = 1), (f = e / 100));
          } else a !== void 0 && typeof a != `string` && (f = yb.getNumber(a));
          if (d.heightType !== 0 && typeof o == `string`) {
            let e = parseFloat(o);
            o.endsWith(`fr`)
              ? ((h = 3), (p = e))
              : o === `auto`
                ? (h = 2)
                : ((h = 1), (p = parseFloat(o) / 100));
          } else o !== void 0 && typeof o != `string` && (p = yb.getNumber(o));
          let g = 0.5,
            _ = 0.5;
          return (
            s && (g = parseFloat(s) / 100),
            c && (_ = parseFloat(c) / 100),
            {
              left: d.left ? yb.getNumber(t) : null,
              right: d.right ? yb.getNumber(n) : null,
              top: d.top ? yb.getNumber(r) : null,
              bottom: d.bottom ? yb.getNumber(i) : null,
              widthType: m,
              heightType: h,
              width: f,
              height: p,
              aspectRatio: d.aspectRatio || null,
              centerAnchorX: g,
              centerAnchorY: _,
            }
          );
        },
        toSize: (e, t, n, r) => {
          let i = null,
            a = null,
            o = t?.sizing ? yb.getNumber(t?.sizing.width) : null,
            s = t?.sizing ? yb.getNumber(t?.sizing.height) : null,
            c = xo(e.left, e.right);
          if (o && W(c)) i = o - c;
          else if (n && mo(e.widthType)) i = n.width;
          else if (W(e.width))
            switch (e.widthType) {
              case 0:
                i = e.width;
                break;
              case 3:
                i = r ? (r.freeSpaceInParent.width / r.freeSpaceUnitDivisor.width) * e.width : null;
                break;
              case 1:
              case 4:
                o && (i = o * e.width);
                break;
              case 2:
              case 5:
                break;
              default:
                U(e.widthType);
            }
          let l = xo(e.top, e.bottom);
          if (s && W(l)) a = s - l;
          else if (n && mo(e.heightType)) a = n.height;
          else if (W(e.height))
            switch (e.heightType) {
              case 0:
                a = e.height;
                break;
              case 3:
                a = r
                  ? (r.freeSpaceInParent.height / r.freeSpaceUnitDivisor.height) * e.height
                  : null;
                break;
              case 1:
              case 4:
                s && (a = s * e.height);
                break;
              case 2:
              case 5:
                break;
              default:
                U(e.heightType);
            }
          return bo(i, a, e, { height: s ?? 0, width: o ?? 0 }, t?.viewport);
        },
        toRect: (e, t = null, n = null, r = !1, i = null) => {
          let a = e.left || 0,
            o = e.top || 0,
            { width: s, height: c } = gx.toSize(e, t, n, i),
            l = t?.positioning ?? null,
            u = l ? yb.getNumber(l.width) : null,
            d = l ? yb.getNumber(l.height) : null;
          (e.left === null
            ? u && e.right !== null
              ? (a = u - e.right - s)
              : u && (a = e.centerAnchorX * u - s / 2)
            : (a = e.left),
            e.top === null
              ? d && e.bottom !== null
                ? (o = d - e.bottom - c)
                : d && (o = e.centerAnchorY * d - c / 2)
              : (o = e.top));
          let f = { x: a, y: o, width: s, height: c };
          return r ? Y.pixelAligned(f) : f;
        },
      }),
      (_x = 200),
      (vx = 200),
      (yx = f.createContext({ parentSize: 0 })),
      (bx = (e) => {
        let t = ko(),
          { parentSize: n, children: r } = e,
          i = f.useMemo(() => ({ parentSize: n }), [jo(n), Mo(n)]);
        return t === 1
          ? r
            ? E(g, { children: r })
            : null
          : E(yx.Provider, { value: i, children: r });
      }),
      (xx = f.createContext(void 0)),
      (Sx = new Set()),
      (wx = `style[data-framer-css-ssr-minified]`),
      (Tx = (() => {
        if (!En()) return new Set();
        let e = document.querySelector(wx)?.getAttribute(`data-framer-components`);
        return e ? new Set(e.split(` `)) : new Set();
      })()),
      (Ex = `data-framer-css-ssr`),
      (Dx = (e, t, n) =>
        f.forwardRef((r, i) => {
          let { sheet: a, cache: o } = f.useContext(xx) ?? {},
            s = n;
          if (!En()) {
            qe(t) && (t = t(Bo(), r));
            let e = Array.isArray(t)
              ? t.join(`
`)
              : t;
            kx.add(e, s);
          }
          return (
            c(() => {
              (s && Tx.has(s)) ||
                (qe(t)
                  ? t(Bo(), r)
                  : Array.isArray(t)
                    ? t
                    : t.split(`
`)
                ).forEach((e) => e && zo(e, a, o));
            }, []),
            E(e, { ...r, ref: i })
          );
        })),
      (Ox = class {
        styles = new Set();
        componentIds = new Set();
        add(e, t) {
          (this.styles.add(e), t && this.componentIds.add(t));
        }
        getStyles() {
          return this.styles;
        }
        getComponentIds() {
          return this.componentIds;
        }
        clear() {
          (this.styles.clear(), this.componentIds.clear());
        }
      }),
      (kx = new Ox()),
      (Ax = `--framer-will-change-override`),
      (jx = `--framer-will-change-effect-override`),
      (Mx = `--framer-will-change-filter-override`),
      (Nx = `--overflow-clip-fallback`),
      (Px = `--one-if-corner-shape-supported`),
      (Fx = [
        `[data-framer-component-type="DeprecatedRichText"] { cursor: inherit; }`,
        `
[data-framer-component-type="DeprecatedRichText"] .text-styles-preset-reset {
    --framer-font-family: Inter, Inter Placeholder, sans-serif;
    --framer-font-style: normal;
    --framer-font-weight: 500;
    --framer-text-color: #000;
    --framer-font-size: 16px;
    --framer-letter-spacing: 0;
    --framer-text-transform: none;
    --framer-text-decoration: none;
    --framer-line-height: 1.2em;
    --framer-text-alignment: start;
    --framer-font-open-type-features: normal;
    --font-variation-settings: normal;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6 {
    margin: 0;
    padding: 0;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6,
[data-framer-component-type="DeprecatedRichText"] li,
[data-framer-component-type="DeprecatedRichText"] ol,
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] span:not([data-text-fill]) {
    font-family: var(--framer-font-family, Inter, Inter Placeholder, sans-serif);
    font-style: var(--framer-font-style, normal);
    font-weight: var(--framer-font-weight, 400);
    color: var(--framer-text-color, #000);
    font-size: var(--framer-font-size, 16px);
    letter-spacing: var(--framer-letter-spacing, 0);
    text-transform: var(--framer-text-transform, none);
    text-decoration: var(--framer-text-decoration, none);
    line-height: var(--framer-line-height, 1.2em);
    text-align: var(--framer-text-alignment, start);
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] div:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h1:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h2:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h3:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h4:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h5:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h6:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ol:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ul:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] .framer-image:not(:first-child) {
    margin-top: var(--framer-paragraph-spacing, 0);
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] span[data-text-fill] {
    display: inline-block;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a,
[data-framer-component-type="DeprecatedRichText"] a span:not([data-text-fill]) {
    font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
    font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
    font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
    color: var(--framer-link-text-color, var(--framer-text-color, #000));
    font-size: var(--framer-link-font-size, var(--framer-font-size, 16px));
    text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
    text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a:hover,
[data-framer-component-type="DeprecatedRichText"] a:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current],
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current] span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover,
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
    color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] strong {
    font-weight: bolder;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] em {
    font-style: italic;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] .framer-image {
    display: block;
    max-width: 100%;
    height: auto;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] ol {
    display: table;
    width: 100%;
    padding-left: 0;
    margin: 0;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] li {
    display: table-row;
    counter-increment: list-item;
    list-style: none;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ol > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: counter(list-item) ".";
    white-space: nowrap;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ul > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: "•";
}
`,
      ]),
      (Ix = ((e) => (
        (e.Padding = `--framer-input-padding`),
        (e.BorderRadiusTopLeft = `--framer-input-border-radius-top-left`),
        (e.BorderRadiusTopRight = `--framer-input-border-radius-top-right`),
        (e.BorderRadiusBottomRight = `--framer-input-border-radius-bottom-right`),
        (e.BorderRadiusBottomLeft = `--framer-input-border-radius-bottom-left`),
        (e.CornerShape = `--framer-input-corner-shape`),
        (e.BorderColor = `--framer-input-border-color`),
        (e.BorderTopWidth = `--framer-input-border-top-width`),
        (e.BorderRightWidth = `--framer-input-border-right-width`),
        (e.BorderBottomWidth = `--framer-input-border-bottom-width`),
        (e.BorderLeftWidth = `--framer-input-border-left-width`),
        (e.BorderStyle = `--framer-input-border-style`),
        (e.Background = `--framer-input-background`),
        (e.FontFamily = `--framer-input-font-family`),
        (e.FontWeight = `--framer-input-font-weight`),
        (e.FontSize = `--framer-input-font-size`),
        (e.FontColor = `--framer-input-font-color`),
        (e.FontStyle = `--framer-input-font-style`),
        (e.FontLetterSpacing = `--framer-input-font-letter-spacing`),
        (e.FontTextAlignment = `--framer-input-font-text-alignment`),
        (e.FontLineHeight = `--framer-input-font-line-height`),
        (e.FontOpenType = `--framer-input-font-open-type-features`),
        (e.FontVariationAxes = `--framer-input-font-variation-axes`),
        (e.PlaceholderColor = `--framer-input-placeholder-color`),
        (e.BoxShadow = `--framer-input-box-shadow`),
        (e.FocusedBorderColor = `--framer-input-focused-border-color`),
        (e.FocusedBorderWidth = `--framer-input-focused-border-width`),
        (e.FocusedBorderStyle = `--framer-input-focused-border-style`),
        (e.FocusedBackground = `--framer-input-focused-background`),
        (e.FocusedBoxShadow = `--framer-input-focused-box-shadow`),
        (e.FocusedTransition = `--framer-input-focused-transition`),
        (e.BooleanCheckedBackground = `--framer-input-boolean-checked-background`),
        (e.BooleanCheckedBorderColor = `--framer-input-boolean-checked-border-color`),
        (e.BooleanCheckedBorderWidth = `--framer-input-boolean-checked-border-width`),
        (e.BooleanCheckedBorderStyle = `--framer-input-boolean-checked-border-style`),
        (e.BooleanCheckedBoxShadow = `--framer-input-boolean-checked-box-shadow`),
        (e.BooleanCheckedTransition = `--framer-input-boolean-checked-transition`),
        (e.InvalidTextColor = `--framer-input-invalid-text-color`),
        (e.IconBackgroundImage = `--framer-input-icon-image`),
        (e.IconMaskImage = `--framer-input-icon-mask-image`),
        (e.IconColor = `--framer-input-icon-color`),
        (e.IconContent = `--framer-input-icon-content`),
        (e.WrapperHeight = `--framer-input-wrapper-height`),
        e
      ))(Ix || {})),
      (X = Ix),
      (Lx = `framer-form-input`),
      (Rx = `framer-form-input-wrapper`),
      (zx = `framer-form-input-empty`),
      (Bx = `framer-form-input-forced-focus`),
      (Z = (() => {
        function e(e, t) {
          let n = ` `;
          for (let e in t) {
            let r = t[e];
            (H(r !== void 0, "Encountered `undefined` in CSSDeclaration"),
              (n += `${e.replace(/([A-Z])/gu, `-$1`).toLowerCase()}: ${Vo(r)}; `));
          }
          return e + ` {` + n + `}`;
        }
        return (
          (e.variable = (...e) => {
            let t = e[e.length - 1];
            H(t !== void 0, "Zero variables passed to `css.variable`");
            let n = t.startsWith(`--`) ? `var(${t})` : t;
            for (let t = e.length - 2; t >= 0; t--) n = `var(${e[t]}, ${n})`;
            return n;
          }),
          e
        );
      })()),
      (Vx = [
        Z(`.${Lx}`, {
          padding: Z.variable(X.Padding),
          background: `transparent`,
          fontFamily: Z.variable(X.FontFamily),
          fontWeight: Z.variable(X.FontWeight),
          fontSize: Z.variable(X.FontSize),
          fontStyle: Z.variable(X.FontStyle),
          color: Z.variable(X.FontColor),
          fontFeatureSettings: Z.variable(X.FontOpenType),
          fontVariationSettings: Z.variable(X.FontVariationAxes),
          border: `none`,
          textOverflow: `ellipsis`,
          whiteSpace: `nowrap`,
          overflow: `hidden`,
          width: `100%`,
          height: Z.variable(X.WrapperHeight, `100%`),
          letterSpacing: Z.variable(X.FontLetterSpacing),
          textAlign: Z.variable(X.FontTextAlignment),
          lineHeight: Z.variable(X.FontLineHeight),
        }),
        Z(`.${Lx}:focus-visible`, { outline: `none` }),
      ]),
      (Hx = [Z(`.${Rx}`, { overflow: `hidden` })]),
      (Ux = `var(${X.BorderTopWidth}) var(${X.BorderRightWidth}) var(${X.BorderBottomWidth}) var(${X.BorderLeftWidth})`),
      (Wx = [
        `.${Rx}:after {
        content: "";
        pointer-events: none;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-top-left-radius: var(${X.BorderRadiusTopLeft});
        border-top-right-radius: var(${X.BorderRadiusTopRight});
        border-bottom-right-radius: var(${X.BorderRadiusBottomRight});
        border-bottom-left-radius: var(${X.BorderRadiusBottomLeft});
        corner-shape: var(${X.CornerShape});
        border-color: var(${X.BorderColor});
        border-top-width: var(${X.BorderTopWidth});
        border-right-width: var(${X.BorderRightWidth});
        border-bottom-width: var(${X.BorderBottomWidth});
        border-left-width: var(${X.BorderLeftWidth});
        border-style: var(${X.BorderStyle});
        transition: var(${X.FocusedTransition});
        transition-property: border-color, border-width, border-style, border-top-left-radius, border-top-right-radius, border-bottom-right-radius, border-bottom-left-radius, corner-shape;
    }`,
      ]),
      (Gx = `customError`),
      (Kx = `valid`),
      (qx = 10),
      (Jx = 8),
      (Yx = 16),
      (Xx = {
        backgroundRepeat: `no-repeat`,
        backgroundSize: `${Yx}px`,
        maskRepeat: `no-repeat`,
        maskSize: `${Yx}px`,
        backgroundColor: Z.variable(X.IconColor),
      }),
      (Zx = {
        content: ``,
        display: `block`,
        position: `absolute`,
        right: 0,
        top: 0,
        bottom: 0,
        width: `${Yx}px`,
        boxSizing: `content-box`,
        padding: Z.variable(X.Padding),
        border: `none`,
        pointerEvents: `none`,
        ...Xx,
      }),
      (Qx = `--list-style-type`),
      ($x = `--max-list-digits`),
      (eS = [1, 2, 3, 8, 18, 28, 38, 88, 188, 288, 388, 888]),
      (tS = { display: `flex`, flexDirection: `column`, justifyContent: `flex-start` }),
      (nS = { display: `inline-block` }),
      (rS = { display: `block` }),
      (iS = [
        `
        [data-framer-component-type="RichTextContainer"] {
            display: ${tS.display};
            flex-direction: ${tS.flexDirection};
            justify-content: ${tS.justifyContent};
            outline: none;
            flex-shrink: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        figure.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        ol.framer-text,
        ul.framer-text {
            margin: 0;
            padding: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text,
        mark.framer-text,
        span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-font-style-preview, var(--framer-blockquote-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-font-weight-preview, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-text-transform, none));
            text-decoration-line: var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial));
            text-decoration-style: var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial));
            text-decoration-color: var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial));
            text-decoration-thickness: var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial));
            text-decoration-skip-ink: var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial));
            text-underline-offset: var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
            text-align: var(--framer-blockquote-text-alignment, var(--framer-text-alignment, start));
            -webkit-text-stroke-width: var(--framer-text-stroke-width, initial);
            -webkit-text-stroke-color: var(--framer-text-stroke-color, initial);
            -moz-font-feature-settings: var(--framer-font-open-type-features, initial);
            -webkit-font-feature-settings: var(--framer-font-open-type-features, initial);
            font-feature-settings: var(--framer-font-open-type-features, initial);
            font-variation-settings: var(--framer-font-variation-axes-preview, var(--framer-font-variation-axes, normal));
            text-wrap: var(--framer-text-wrap-override, var(--framer-text-wrap));
        }
    `,
        `
        mark.framer-text,
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text {
            background-color: var(--framer-blockquote-text-background-color, var(--framer-text-background-color, initial));
            border-radius: var(--framer-blockquote-text-background-radius, var(--framer-text-background-radius, initial));
            corner-shape: var(--framer-blockquote-text-background-corner-shape, var(--framer-text-background-corner-shape, initial));
            padding: var(--framer-blockquote-text-background-padding, var(--framer-text-background-padding, initial));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            p.framer-text,
            div.framer-text,
            h1.framer-text,
            h2.framer-text,
            h3.framer-text,
            h4.framer-text,
            h5.framer-text,
            h6.framer-text,
            li.framer-text,
            ol.framer-text,
            ul.framer-text,
            span.framer-text:not([data-text-fill]) {
                color: ${Xo([`--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                -webkit-text-stroke-color: ${Xo([`--framer-text-stroke-color`], `initial`)};
            }

            mark.framer-text {
                background-color: ${Xo([`--framer-blockquote-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-fit-text .framer-text {
            white-space: nowrap;
            white-space-collapse: preserve;
        }
    `,
        `
        strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold, var(--framer-font-family-bold));
            font-style: var(--framer-blockquote-font-style-bold, var(--framer-font-style-bold));
            font-weight: var(--framer-blockquote-font-weight-bold, var(--framer-font-weight-bold, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold, var(--framer-font-variation-axes-bold));
        }
    `,
        `
        em.framer-text {
            font-family: var(--framer-blockquote-font-family-italic, var(--framer-font-family-italic));
            font-style: var(--framer-blockquote-font-style-italic, var(--framer-font-style-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-italic, var(--framer-font-weight-italic));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-italic, var(--framer-font-variation-axes-italic));
        }
    `,
        `
        em.framer-text > strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold-italic, var(--framer-font-family-bold-italic));
            font-style: var(--framer-blockquote-font-style-bold-italic, var(--framer-font-style-bold-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-bold-italic, var(--framer-font-weight-bold-italic, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold-italic, var(--framer-font-variation-axes-bold-italic));
        }
    `,
        `
        p.framer-text:not(:first-child),
        div.framer-text:not(:first-child),
        h1.framer-text:not(:first-child),
        h2.framer-text:not(:first-child),
        h3.framer-text:not(:first-child),
        h4.framer-text:not(:first-child),
        h5.framer-text:not(:first-child),
        h6.framer-text:not(:first-child),
        ol.framer-text:not(:first-child),
        ul.framer-text:not(:first-child),
        blockquote.framer-text:not(:first-child),
        table.framer-text:not(:first-child),
        figure.framer-text:not(:first-child),
        .framer-image.framer-text:not(:first-child) {
            margin-top: var(--framer-blockquote-paragraph-spacing, var(--framer-paragraph-spacing, 0));
        }
    `,
        `
        li.framer-text > ul.framer-text:nth-child(2),
        li.framer-text > ol.framer-text:nth-child(2) {
            margin-top: 0;
        }
    `,
        `
        .framer-text[data-text-fill] {
            display: ${nS.display};
            background-clip: text;
            -webkit-background-clip: text;
            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;
            padding: max(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / 2));
            margin: min(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / -2));
        }
    `,
        `
        code.framer-text,
        code.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text,
            code.framer-text span.framer-text:not([data-text-fill]) {
                color: ${Xo([`--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
            }
        }
    `,
        `
        blockquote.framer-text {
            margin-block-start: initial;
            margin-block-end: initial;
            margin-inline-start: initial;
            margin-inline-end: initial;
            unicode-bidi: initial;
        }
    `,
        `
        a.framer-text,
        a.framer-text span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link],
        span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            /* Ensure the color is inherited from the link style rather than the parent text for nested spans */
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none)));
            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--framer-custom-cursors, pointer);
            /* Don't inherit background styles from any parent text style. */
            background-color: initial;
            border-radius: var(--framer-link-text-background-radius, initial);
            corner-shape: var(--framer-link-text-background-corner-shape, initial);
            padding: var(--framer-link-text-background-padding, initial);
        }
    `,
        `
        a.framer-text,
        span.framer-text[data-nested-link] {
            color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            /* Don't inherit background styles from any parent text style. */
            background-color: var(--framer-link-text-background-color, initial);
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text,
            span.framer-text[data-nested-link] {
                color: ${Xo([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Xo([`--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${Xo([`--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
    code.framer-text a.framer-text,
    code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
    code.framer-text span.framer-text[data-nested-link],
    code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
        font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
        font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
        font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
        color: inherit;
        font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
    }
`,
        `
    code.framer-text a.framer-text,
    code.framer-text span.framer-text[data-nested-link] {
        color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
    }
`,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text,
        code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link],
        code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            color: ${Xo([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
`,
        `
        a.framer-text:hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link]:hover,
        span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-text-background-radius, var(--framer-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-text-background-corner-shape, var(--framer-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-text-background-padding, var(--framer-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: ${Xo([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
            background-color: ${Xo([`--framer-link-hover-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            text-decoration-color: ${Xo([`--framer-link-hover-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
        }
    }
    `,
        `
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: ${Xo([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
   `,
        `
        a.framer-text[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            border-radius: var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial));
            corner-shape: var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial));
            padding: var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            background-color: var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current],
            span.framer-text[data-framer-page-link-current]{
                color: ${Xo([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Xo([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
                text-decoration-color: ${Xo([`--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: inherit;
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current],
            code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current],
            code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
                color: ${Xo([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Xo([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        a.framer-text[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current]:hover,
            span.framer-text[data-framer-page-link-current]:hover {
                color: ${Xo([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Xo([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${Xo([`--framer-link-hover-text-decoration-color`, `--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current]:hover,
        code.framer-text span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current]:hover,
            code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current]:hover,
            code.framer-text span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
                color: ${Xo([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Xo([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-image.framer-text {
            display: ${rS.display};
            max-width: 100%;
            height: auto;
        }
    `,
        `
        .text-styles-preset-reset.framer-text {
            --framer-font-family: Inter, Inter Placeholder, sans-serif;
            --framer-font-style: normal;
            --framer-font-weight: 500;
            --framer-text-color: #000;
            --framer-font-size: 16px;
            --framer-letter-spacing: 0;
            --framer-text-transform: none;
            --framer-text-decoration: none;
            --framer-text-decoration-style: none;
            --framer-text-decoration-color: none;
            --framer-text-decoration-thickness: none;
            --framer-text-decoration-skip-ink: none;
            --framer-text-decoration-offset: none;
            --framer-line-height: 1.2em;
            --framer-text-alignment: start;
            --framer-font-open-type-features: normal;
            --framer-text-background-color: initial;
            --framer-text-background-radius: initial;
            --framer-text-background-corner-shape: initial;
            --framer-text-background-padding: initial;
        }
    `,
        `
        ol.framer-text {
            --list-style-type: decimal;
        }
    `,
        `
        ul.framer-text,
        ol.framer-text {
            padding-inline-start: 0;
            position: relative;
        }
    `,
        `
        li.framer-text {
            counter-increment: list-item;
            list-style: "";
            padding-inline-start: 2ch;
        }
    `,
        `
        ol.framer-text > li.framer-text {
            padding-inline-start: calc(calc(var(${$x}, 1) + 1) * 1ch);
        }
    `,
        `
        ol.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: counter(list-item, var(--list-style-type)) ".";
            font-variant-numeric: tabular-nums;
        }
    `,
        `
        ul.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: "•";
        }
    `,
        `
        .framer-table-wrapper {
            overflow-x: auto;
        }
    `,
        `
        table.framer-text,
        .framer-table-wrapper table.framer-text {
            border-collapse: separate;
            border-spacing: 0;
            table-layout: auto;
            word-break: normal;
            width: 100%;
        }
    `,
        `
        td.framer-text,
        th.framer-text {
            min-width: 16ch;
            overflow-wrap: anywhere;
            vertical-align: top;
        }
    `,
        `
        ${Zo(`.framer-text-module[data-width="fill"]`, `:first-child`)} {
            width: 100% !important;
        }
    `,
      ]),
      (aS = `--text-truncation-display-inline-for-safari-16`),
      (oS = `--text-truncation-display-none-for-safari-16`),
      (sS = `--text-truncation-line-break-for-safari-16`),
      (cS = [
        `div.framer-text`,
        `p.framer-text`,
        `h1.framer-text`,
        `h2.framer-text`,
        `h3.framer-text`,
        `h4.framer-text`,
        `h5.framer-text`,
        `h6.framer-text`,
        `ol.framer-text`,
        `ul.framer-text`,
        `li.framer-text`,
        `blockquote.framer-text`,
        `.framer-text.framer-image`,
      ]),
      (lS = `(background: -webkit-named-image(i))`),
      (uS = `(contain-intrinsic-size: inherit)`),
      (dS = [
        `@supports ${lS} and (not ${uS}) {
        /* Render block-like elements inline when text is truncated, otherwise default to user agent (revert)  */
        ${cS.join(`, `)} { display: var(${aS}, revert) }

        /* Add a line break after each block-like element that we render inline, to resemble the block-like behavior */
        ${cS.map((e) => `${e}::after`).join(`, `)} { content: var(${sS}); white-space: pre; }

        /* Don't render modules (e.g. videos, code-blocks), or tables when text is truncated, because often these can't be truncated and their children might be block elements */
        .framer-text.framer-text-module,
        .framer-text.framer-table-wrapper { display: var(${oS}, revert) }

        /* Render text-fill elements inline when text is truncated, otherwise default to their default value (e.g. inline-block) */
        p.framer-text[data-text-fill] { display: var(${aS}, ${nS.display}) }
    }`,
      ]),
      (fS = (e) => {
        let t = [
            `[data-framer-component-type="Text"] { cursor: inherit; }`,
            `[data-framer-component-text-autosized] * { white-space: pre; }`,
            `
[data-framer-component-type="Text"] > * {
    text-align: var(--framer-text-alignment, start);
}`,
            `
[data-framer-component-type="Text"] span span,
[data-framer-component-type="Text"] p span,
[data-framer-component-type="Text"] h1 span,
[data-framer-component-type="Text"] h2 span,
[data-framer-component-type="Text"] h3 span,
[data-framer-component-type="Text"] h4 span,
[data-framer-component-type="Text"] h5 span,
[data-framer-component-type="Text"] h6 span {
    display: block;
}`,
            `
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span {
    display: unset;
}`,
            `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    font-family: var(--font-family);
    font-style: var(--font-style);
    font-weight: min(calc(var(--framer-font-weight-increase, 0) + var(--font-weight, 400)), 900);
    color: var(--text-color);
    letter-spacing: var(--letter-spacing);
    font-size: var(--font-size);
    text-transform: var(--text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    line-height: var(--line-height);
}`,
            `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    --font-family: var(--framer-font-family);
    --font-style: var(--framer-font-style);
    --font-weight: var(--framer-font-weight);
    --text-color: var(--framer-text-color);
    --letter-spacing: var(--framer-letter-spacing);
    --font-size: var(--framer-font-size);
    --text-transform: var(--framer-text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    --line-height: var(--framer-line-height);
}`,
            `
[data-framer-component-type="Text"] a,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] a span span span,
[data-framer-component-type="Text"] a p span span,
[data-framer-component-type="Text"] a h1 span span,
[data-framer-component-type="Text"] a h2 span span,
[data-framer-component-type="Text"] a h3 span span,
[data-framer-component-type="Text"] a h4 span span,
[data-framer-component-type="Text"] a h5 span span,
[data-framer-component-type="Text"] a h6 span span {
    --font-family: var(--framer-link-font-family, var(--framer-font-family));
    --font-style: var(--framer-link-font-style, var(--framer-font-style));
    --font-weight: var(--framer-link-font-weight, var(--framer-font-weight));
    --text-color: var(--framer-link-text-color, var(--framer-text-color));
    --font-size: var(--framer-link-font-size, var(--framer-font-size));
    --text-transform: var(--framer-link-text-transform, var(--framer-text-transform));
    --text-decoration: var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid)) var(--framer-link-text-decoration, var(--framer-text-decoration, none)) var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor)) var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto));
    --text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink));
    --text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset));
}`,
            `
[data-framer-component-type="Text"] a:hover,
[data-framer-component-type="Text"] a div span:hover,
[data-framer-component-type="Text"] a span span span:hover,
[data-framer-component-type="Text"] a p span span:hover,
[data-framer-component-type="Text"] a h1 span span:hover,
[data-framer-component-type="Text"] a h2 span span:hover,
[data-framer-component-type="Text"] a h3 span span:hover,
[data-framer-component-type="Text"] a h4 span span:hover,
[data-framer-component-type="Text"] a h5 span span:hover,
[data-framer-component-type="Text"] a h6 span span:hover {
    --font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`,
            `
[data-framer-component-type="Text"].isCurrent a,
[data-framer-component-type="Text"].isCurrent a div span,
[data-framer-component-type="Text"].isCurrent a span span span,
[data-framer-component-type="Text"].isCurrent a p span span,
[data-framer-component-type="Text"].isCurrent a h1 span span,
[data-framer-component-type="Text"].isCurrent a h2 span span,
[data-framer-component-type="Text"].isCurrent a h3 span span,
[data-framer-component-type="Text"].isCurrent a h4 span span,
[data-framer-component-type="Text"].isCurrent a h5 span span,
[data-framer-component-type="Text"].isCurrent a h6 span span {
    --font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`,
          ],
          n = [
            `[data-framer-component-type="Scroll"]::-webkit-scrollbar { display: none; }`,
            `[data-framer-component-type="ScrollContentWrapper"] > * { position: relative; }`,
          ],
          r = [
            `[data-framer-component-type="NativeScroll"] { -webkit-overflow-scrolling: touch; }`,
            `[data-framer-component-type="NativeScroll"] > * { position: relative; }`,
            `[data-framer-component-type="NativeScroll"].direction-both { overflow-x: auto; overflow-y: auto; }`,
            `[data-framer-component-type="NativeScroll"].direction-vertical { overflow-x: hidden; overflow-y: auto; }`,
            `[data-framer-component-type="NativeScroll"].direction-horizontal { overflow-x: auto; overflow-y: hidden; }`,
            `[data-framer-component-type="NativeScroll"].direction-vertical > * { width: 100% !important; }`,
            `[data-framer-component-type="NativeScroll"].direction-horizontal > * { height: 100% !important; }`,
            `[data-framer-component-type="NativeScroll"].scrollbar-hidden::-webkit-scrollbar { display: none; }`,
          ],
          i = [
            `[data-framer-cursor="pointer"] { cursor: pointer; }`,
            `[data-framer-cursor="grab"] { cursor: grab; }`,
            `[data-framer-cursor="grab"]:active { cursor: grabbing; }`,
          ],
          a = [
            `[data-framer-component-type="Frame"] *, [data-framer-component-type="Stack"] * { pointer-events: auto; }`,
            `[data-framer-generated] * { pointer-events: unset }`,
          ],
          o = [
            `[data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`,
            `[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`,
            `[data-hide-scrollbars="true"] { scrollbar-width: none; }`,
          ],
          s = `(background: -webkit-named-image(i))`,
          c = (e) =>
            e
              ? [
                  `body { ${Ax}: none; }`,
                  `@supports ${s} and (not (grid-template-rows: subgrid)) { body { ${Ax}: transform; } }`,
                ]
              : [`body { ${Ax}: none; ${jx}: none; }`],
          l = (e) =>
            e
              ? [
                  `body { ${Mx}: none; }`,
                  `@supports ${s} and (not (position-area: top right)) { body { ${Mx}: filter; } }`,
                ]
              : [`body { ${Mx}: none; }`],
          u = (e) => (e ? a : []),
          d = `@supports (not (overflow: clip)) {
        :root { ${Nx}: hidden; }
    }`,
          f = `@supports (corner-shape: superellipse(2)) { :root { ${Px}: 1 } }`;
        return [
          ...c(e),
          ...l(e),
          `[data-framer-component-type] { position: absolute; }`,
          ...t,
          ...iS,
          ...Fx,
          `
[data-framer-component-type="Stack"]:not([data-framer-generated]) > *,
[data-framer-component-type="Stack"]:not([data-framer-generated]) > [data-framer-component-type] {
    position: relative;
}`,
          `
NavigationContainer
[data-framer-component-type="NavigationContainer"] > *,
[data-framer-component-type="NavigationContainer"] > [data-framer-component-type] {
    position: relative;
}`,
          ...n,
          ...r,
          `[data-framer-component-type="PageContentWrapper"] > *, [data-framer-component-type="PageContentWrapper"] > [data-framer-component-type] { position: relative; }`,
          `[data-framer-component-type="DeviceComponent"].no-device > * { width: 100% !important; height: 100% !important; }`,
          `[data-is-present="false"], [data-is-present="false"] * { pointer-events: none !important; }`,
          ...i,
          ...u(e),
          `.svgContainer svg { display: block; }`,
          `[data-reset="button"] {
        border-width: 0;
        padding: 0;
        background: none;
}`,
          ...o,
          d,
          `.framer-lightbox-container { opacity: 1 !important; pointer-events: auto !important; }`,
          ...dS,
          f,
        ];
      }),
      (pS = Ro(() => fS(!1))),
      (mS = Ro(() => fS(!0))),
      (hS = Cn()),
      (gS = f.createContext(!1)),
      (_S = class {
        sharedResizeObserver;
        callbacks = new WeakMap();
        constructor() {
          this.sharedResizeObserver = new ResizeObserver(this.updateResizedElements.bind(this));
        }
        updateResizedElements(e) {
          for (let t of e) {
            let e = this.callbacks.get(t.target);
            e && e(t.contentRect);
          }
        }
        observeElementWithCallback(e, t) {
          (this.sharedResizeObserver.observe(e), this.callbacks.set(e, t));
        }
        unobserve(e) {
          (this.sharedResizeObserver.unobserve(e), this.callbacks.delete(e));
        }
      }),
      (vS = En() ? new _S() : void 0),
      (yS = `data-framer-size-compatibility-wrapper`),
      (bS = `0.000001px`),
      (xS = ` translateZ(${bS})`),
      (SS = On() || wn() || kn()),
      (CS = (() => {
        class e extends v {
          static defaultProps = {};
          static applyWillChange(e, t, n) {
            e.willChangeTransform && (n ? ps(t) : ms(t));
          }
          layerElement = null;
          setLayerElement = (e) => {
            this.layerElement = e;
          };
          shouldComponentUpdate(e, t) {
            return e._needsMeasure || this.state !== t || !wt(this.props, e);
          }
          componentDidUpdate(e) {
            Zb(this.props).clip &&
              Zb(this.props).radius === 0 &&
              Zb(e).radius !== 0 &&
              gs(this.layerElement, `overflow`, `hidden`, !1);
          }
        }
        return e;
      })()),
      (wS = (e) => {
        let t = 0,
          n,
          r;
        if (e.length === 0) return t;
        for (n = 0; n < e.length; n++) ((r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0));
        return t;
      }),
      (TS = {
        hueRotate: (e, t) => q.toHslString(q.hueRotate(q(e), t)),
        setAlpha: (e, t) => q.toRgbString(q.alpha(q(e), t)),
        getAlpha: (e) => {
          let t = ga(e);
          return t ? t.a : 1;
        },
        multiplyAlpha: (e, t) => q.toRgbString(q.multiplyAlpha(q(e), t)),
        toHexValue: (e) => q.toHex(q(e)).toUpperCase(),
        toHex: (e) => q.toHexString(q(e)).toUpperCase(),
        toRgb: (e) => q.toRgb(q(e)),
        toRgbString: (e) => q.toRgbString(q(e)),
        toHSV: (e) => q.toHsv(q(e)),
        toHSL: (e) => q.toHsl(q(e)),
        toHslString: (e) => q.toHslString(q(e)),
        toHsvString: (e) => q.toHsvString(q(e)),
        hsvToHSLString: (e) => q.toHslString(q(ia(e.h, e.s, e.v, e.a))),
        hsvToHexValue: (e) => q.toHex(q(ia(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToHex: (e) => q.toHexString(q(ia(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToRgbString: (e) => q.toRgbString(q(ia(e.h, e.s, e.v, e.a))),
        hsvToString: (e) => ia(e.h, e.s, e.v),
        rgbaToString: (e) => q.toRgbString(q(e)),
        rgbToHexValue: (e) => q.toHex(q(e)),
        rgbToHexString: (e) => q.toHexString(q(e)),
        hslToString: (e) => q.toHslString(q(e)),
        hslToRgbString: (e) => q.toRgbString(q(e)),
        toColorPickerSquare: (e) => q.toRgbString(q({ h: e, s: 1, l: 0.5, a: 1 })),
        isValid: (e) => q(e).isValid !== !1,
        equals: (e, t) =>
          q.isP3String(e) || q.isP3String(t)
            ? e === t
            : (typeof e == `string` && (e = q(e)),
              typeof t == `string` && (t = q(t)),
              q.equal(e, t)),
        toHexOrRgbaString: (e) => {
          let t = q(e);
          return t.a === 1 ? q.toHexString(t) : q.toRgbString(t);
        },
        toFormatString: (e) => (q.isP3String(e) ? e : q.toRgbString(q(e))),
      }),
      (ES = /var\(.+\)/u),
      (DS = new Map()),
      (OS = [`stops`]),
      (kS = [`start`, `end`]),
      (AS = [`angle`, `alpha`]),
      (jS = {
        isLinearGradient: (e) => V(e) && AS.every((t) => t in e) && (ws(e) || Cs(e)),
        hash: (e) => e.angle ^ Ss(e, e.alpha),
        toCSS: (e, t, n) => {
          let r = xs(e, e.alpha),
            i = t === void 0 ? e.angle : t;
          return `linear-gradient(${Math.round(i)}deg, ${r.map((e) => `${n?.(e.value) ?? e.value} ${e.position * 100}%`).join(`, `)})`;
        },
      }),
      (MS = [`widthFactor`, `heightFactor`, `centerAnchorX`, `centerAnchorY`, `alpha`]),
      (NS = {
        isRadialGradient: (e) => V(e) && MS.every((t) => t in e) && (ws(e) || Cs(e)),
        hash: (e) =>
          e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ Ss(e, e.alpha),
        toCSS: (e, t) => {
          let { alpha: n, widthFactor: r, heightFactor: i, centerAnchorX: a, centerAnchorY: o } = e,
            s = xs(e, n),
            c = s.map((e, n) => {
              let r = s[n + 1],
                i = e.position === 1 && r?.position === 1 ? e.position - 1e-4 : e.position;
              return `${t?.(e.value) ?? e.value} ${i * 100}%`;
            });
          return `radial-gradient(${r * 100}% ${i * 100}% at ${a * 100}% ${o * 100}%, ${c.join(`, `)})`;
        },
      }),
      (PS = [
        `onClick`,
        `onDoubleClick`,
        `onMouse`,
        `onMouseDown`,
        `onMouseUp`,
        `onTapDown`,
        `onTap`,
        `onTapUp`,
        `onPointer`,
        `onPointerDown`,
        `onPointerUp`,
        `onTouch`,
        `onTouchDown`,
        `onTouchUp`,
      ]),
      (FS = new Set([...PS, ...PS.map((e) => `${e}Capture`)])),
      (IS = `overflow`),
      (LS = { x: 0, y: 0, width: 200, height: 200 }),
      (RS = new Set([
        `width`,
        `height`,
        `opacity`,
        `overflow`,
        `radius`,
        `background`,
        `color`,
        `x`,
        `y`,
        `z`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `rotateZ`,
        `scale`,
        `scaleX`,
        `scaleY`,
        `skew`,
        `skewX`,
        `skewY`,
        `originX`,
        `originY`,
        `originZ`,
      ])),
      (zS = D(function (e, t) {
        let { name: n, center: r, border: i, _border: a, __portal: o } = e,
          { props: s, children: c } = rs(e),
          l = Fs(s),
          u = as(e),
          d = As(e),
          f = M(null),
          p = t ?? f,
          m = {
            "data-framer-component-type": e.componentType ?? `Frame`,
            "data-framer-cursor": d,
            "data-framer-highlight": d === `pointer` || void 0,
            "data-layoutid": u,
            "data-framer-offset-parent-id": Zb(e)[`data-framer-offset-parent-id`],
          };
        !Is(e) && n && (Zb(m)[`data-framer-name`] = n);
        let [h, _] = Ps(s),
          v = Ns(s),
          y = Fo(v),
          b = r && !(_ && !y && Co(v)) ? r : void 0;
        (b ? (l.transformTemplate ||= is(r)) : (l.transformTemplate ||= void 0),
          Object.assign(m, ts(b, s.style)),
          ds(e, p));
        let x = co(e),
          C = Ls(s, v, _, S(gS)),
          T = No(
            w(g, {
              children: [
                x
                  ? E(io, {
                      alt: e.alt ?? ``,
                      image: x,
                      containerSize: _ ?? void 0,
                      nodeId: e.id && ns(e.id),
                      layoutId: u,
                    })
                  : null,
                c,
                E(oo, { ...a, border: i, layoutId: u }),
              ],
            }),
            C
          ),
          D = Lo(e.as),
          O = Io(x);
        return (
          e.fitImageDimension &&
            O &&
            ((h[e.fitImageDimension] = `auto`), (h.aspectRatio = O.width / O.height)),
          w(D, { ...m, ...l, layoutId: u, style: h, ref: p, children: [T, o] })
        );
      })),
      (BS = $o(
        D(function (e, t) {
          let { visible: n = !0 } = e;
          return n ? E(zS, { ...e, ref: t }) : null;
        })
      )),
      (VS = `__LAYOUT_TREE_ROOT`),
      (HS = f.createContext({
        schedulePromoteTree: () => {},
        scheduleProjectionDidUpdate: () => {},
        initLead: () => {},
      })),
      (US = class extends v {
        shouldAnimate = !1;
        transition;
        lead;
        follow;
        scheduledPromotion = !1;
        scheduledDidUpdate = !1;
        getSnapshotBeforeUpdate() {
          if (!this.scheduledPromotion || !this.lead || !this.follow) return null;
          let e = this.lead?.layoutMaybeMutated && !this.shouldAnimate;
          return (
            this.lead.projectionNodes.forEach((t) => {
              t?.promote({
                needsReset: e,
                transition: this.shouldAnimate ? this.transition : void 0,
                preserveFollowOpacity: t.options.layoutId === VS && !this.follow?.isExiting,
              });
            }),
            this.shouldAnimate
              ? (this.follow.layoutMaybeMutated = !0)
              : this.scheduleProjectionDidUpdate(),
            (this.lead.layoutMaybeMutated = !1),
            (this.transition = void 0),
            (this.scheduledPromotion = !1),
            null
          );
        }
        componentDidUpdate() {
          if (!this.lead) return null;
          this.scheduledDidUpdate &&= (this.lead.rootProjectionNode?.root?.didUpdate(), !1);
        }
        scheduleProjectionDidUpdate = () => {
          this.scheduledDidUpdate = !0;
        };
        schedulePromoteTree = (e, t, n) => {
          ((this.follow = this.lead),
            (this.shouldAnimate = n),
            (this.lead = e),
            (this.transition = t),
            (this.scheduledPromotion = !0));
        };
        initLead = (e, t) => {
          ((this.follow = this.lead),
            (this.lead = e),
            this.follow && t && (this.follow.layoutMaybeMutated = !0));
        };
        sharedLayoutContext = {
          schedulePromoteTree: this.schedulePromoteTree,
          scheduleProjectionDidUpdate: this.scheduleProjectionDidUpdate,
          initLead: this.initLead,
        };
        render() {
          return E(HS.Provider, { value: this.sharedLayoutContext, children: this.props.children });
        }
      }),
      (WS = { width: `100%`, height: `100%`, backgroundColor: `none` }),
      (GS = class {
        sharedIntersectionObserver;
        callbacks = new WeakMap();
        constructor(e) {
          this.sharedIntersectionObserver = new IntersectionObserver(
            this.intersectionObserverCallback.bind(this),
            e
          );
        }
        intersectionObserverCallback(e, t) {
          for (let n of e) {
            let e = this.callbacks.get(n.target);
            e && e(n, t);
          }
        }
        observeElementWithCallback(e, t) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.observe(e), this.callbacks.set(e, t));
        }
        unobserve(e) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.unobserve(e), this.callbacks.delete(e));
        }
        get root() {
          return this.sharedIntersectionObserver?.root;
        }
      }),
      (KS = k(new Map())),
      (qS = typeof IntersectionObserver > `u` ? $_ : Gs),
      (JS = Array(100)
        .fill(void 0)
        .map((e, t) => t * 0.01)),
      (YS = f.createContext(null)),
      (XS = class extends v {
        layoutMaybeMutated = !1;
        projectionNodes = new Map();
        rootProjectionNode;
        isExiting;
        componentDidMount() {
          this.props.isLead &&
            this.props.sharedLayoutContext.initLead(this, !!this.props.animatesLayout);
        }
        shouldComponentUpdate(e) {
          let {
            isLead: t,
            isExiting: n,
            isOverlayed: r,
            animatesLayout: i,
            transition: a,
            sharedLayoutContext: o,
          } = e;
          if (((this.isExiting = n), t === void 0)) return !0;
          let s = !this.props.isLead && t,
            c = this.props.isExiting && !n,
            l = s || c,
            u = !!this.props.isLead && !t,
            d = this.props.isOverlayed !== r;
          return (
            (l || u) && this.projectionNodes.forEach((e) => e?.willUpdate()),
            l ? o.schedulePromoteTree(this, a, !!i) : d && o.scheduleProjectionDidUpdate(),
            !!l && !!i
          );
        }
        shouldPreserveFollowOpacity = (e) => e.options.layoutId === VS && !this.props.isExiting;
        switchLayoutGroupContext = {
          register: (e) => this.addChild(e),
          deregister: (e) => this.removeChild(e),
          transition:
            this.props.isLead !== void 0 && this.props.animatesLayout
              ? this.props.transition
              : void 0,
          shouldPreserveFollowOpacity: this.shouldPreserveFollowOpacity,
        };
        addChild(e) {
          let t = e.options.layoutId;
          t && (this.projectionNodes.set(t, e), this.setRootChild(e));
        }
        setRootChild(e) {
          if (!this.rootProjectionNode) return (this.rootProjectionNode = e);
          this.rootProjectionNode =
            this.rootProjectionNode.depth < e.depth ? this.rootProjectionNode : e;
        }
        removeChild(e) {
          let t = e.options.layoutId;
          t && this.projectionNodes.delete(t);
        }
        render() {
          return E(Ne.Provider, {
            value: this.switchLayoutGroupContext,
            children: this.props.children,
          });
        }
      }),
      (ZS = (e) => {
        let t = f.useContext(HS);
        return E(XS, { ...e, sharedLayoutContext: t });
      }),
      (QS = f.createContext(!0)),
      ($S = k({ register: () => {}, deregister: () => {} })),
      (eC = ({ isCurrent: e, isOverlayed: t, children: n }) => {
        let r = Xs(),
          i = M({
            register: C(
              (e) => {
                if (r.has(e)) {
                  console.warn(`NavigationTargetWrapper: already registered`);
                  return;
                }
                r.set(e, void 0);
              },
              [r]
            ),
            deregister: C(
              (e) => {
                (r.get(e)?.(), r.delete(e));
              },
              [r]
            ),
          }).current;
        return (
          h(
            () => (
              r.forEach((n, i) => {
                let a = i(e, t);
                r.set(i, qe(a) ? a : void 0);
              }),
              () => {
                r.forEach((e, t) => {
                  e && (e(), r.set(t, void 0));
                });
              }
            ),
            [e, t, r]
          ),
          E($S.Provider, { value: i, children: n })
        );
      }),
      (tC = f.memo(function ({
        isLayeredContainer: e,
        isCurrent: t,
        isPrevious: n,
        isOverlayed: r = !1,
        visible: i,
        transitionProps: a,
        children: o,
        backdropColor: s,
        onTapBackdrop: c,
        backfaceVisible: l,
        exitBackfaceVisible: u,
        animation: d,
        exitAnimation: f,
        instant: p,
        initialProps: m,
        exitProps: g,
        position: _ = { top: 0, right: 0, bottom: 0, left: 0 },
        withMagicMotion: v,
        index: y,
        areMagicMotionLayersPresent: b,
        id: x,
        isInitial: C,
      }) {
        let T = Ke(),
          D = S(Te),
          { persistLayoutIdCache: O } = S(Gb),
          k = M({
            wasCurrent: void 0,
            wasPrevious: !1,
            wasBeingRemoved: !1,
            wasReset: !0,
            origins: $s({}, m, a),
          }),
          A = M(null),
          j = D !== null && !D.isPresent;
        (t && k.current.wasCurrent === void 0 && O(),
          h(() => {
            if (e || !T) return;
            if (j) {
              k.current = { ...k.current, wasBeingRemoved: j };
              return;
            }
            let { wasPrevious: r, wasCurrent: i } = k.current,
              o = (t && !i) || (!j && k.current.wasBeingRemoved && t),
              s = n && !r,
              c = $s(k.current.origins, m, a),
              l = k.current.wasReset;
            (o || s
              ? (T.stop(), T.start({ zIndex: y, ...c, ...a }), (l = !1))
              : l === !1 && (T.stop(), T.set({ zIndex: y, ...nC, opacity: 0 }), (l = !0)),
              (k.current = {
                wasCurrent: !!t,
                wasPrevious: !!n,
                wasBeingRemoved: !1,
                wasReset: l,
                origins: c,
              }));
          }, [t, n, j]));
        let ee = p ? { type: !1 } : `velocity` in d ? { ...d, velocity: 0 } : d,
          N = p ? { type: !1 } : f || d,
          P = { ..._ };
        ((P.left === void 0 || P.right === void 0) && (P.width = `auto`),
          (P.top === void 0 || P.bottom === void 0) && (P.height = `auto`));
        let te = (ec(a) || ec(m)) && (e || t || n) ? 1200 : void 0,
          ne = { ...nC, ...k.current.origins },
          F = e
            ? {
                initial: { ...ne, ...m },
                animate: { ...ne, ...a, transition: ee },
                exit: { ...ne, ...g, transition: d },
              }
            : { animate: T, exit: { ...ne, ...g, transition: N } },
          re = !(j || b === !1),
          ie = !!t && re,
          I = t && C;
        return w(BS, {
          "data-framer-component-type": `NavigationContainerWrapper`,
          width: `100%`,
          height: `100%`,
          style: {
            position: `absolute`,
            transformStyle: `flat`,
            backgroundColor: `transparent`,
            overflow: `hidden`,
            zIndex: e || j || (t && v) ? y : void 0,
            pointerEvents: void 0,
            visibility: i ? `visible` : `hidden`,
            perspective: te,
          },
          children: [
            e &&
              E(BS, {
                width: `100%`,
                height: `100%`,
                "data-framer-component-type": `NavigationContainerBackdrop`,
                transition: d,
                initial: { opacity: p && i ? 1 : 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                backgroundColor: s || `transparent`,
                onTap: j ? void 0 : c,
              }),
            E(BS, {
              ...P,
              ...F,
              transition: {
                default: ee,
                originX: { type: !1 },
                originY: { type: !1 },
                originZ: { type: !1 },
              },
              backgroundColor: `transparent`,
              backfaceVisible: j ? u : l,
              "data-framer-component-type": `NavigationContainer`,
              "data-framer-is-current-navigation-target": !!t,
              style: { pointerEvents: void 0, opacity: I || e || (t && v) ? 1 : 0 },
              "data-is-present": re ? void 0 : !1,
              ref: A,
              children: E(YS.Provider, {
                value: A,
                children: E(QS.Provider, {
                  value: ie,
                  children: E(eC, {
                    isCurrent: ie,
                    isOverlayed: r,
                    children: E(ZS, {
                      isLead: t,
                      animatesLayout: !!v,
                      transition: ee,
                      isExiting: !re,
                      isOverlayed: r,
                      id: x,
                      children: o,
                    }),
                  }),
                }),
              }),
            }),
          ],
        });
      }, Qs)),
      (nC = {
        x: 0,
        y: 0,
        z: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: 0.5,
        originY: 0.5,
        originZ: 0,
        opacity: 1,
      }),
      (rC = class {
        warning = () => {
          Wi(`The Navigator API is only available inside of Framer: https://www.framer.com/`);
        };
        goBack = () => this.warning();
        instant = () => this.warning();
        fade = () => this.warning();
        push = () => this.warning();
        modal = () => this.warning();
        overlay = () => this.warning();
        flip = () => this.warning();
        customTransition = () => this.warning();
        magicMotion = () => this.warning();
      }),
      (iC = k(new rC())),
      (aC = {
        Fade: { exit: { opacity: 0 }, enter: { opacity: 0 } },
        PushLeft: { exit: { x: `-30%` }, enter: { x: `100%` } },
        PushRight: { exit: { x: `30%` }, enter: { x: `-100%` } },
        PushUp: { exit: { y: `-30%` }, enter: { y: `100%` } },
        PushDown: { exit: { y: `30%` }, enter: { y: `-100%` } },
        Instant: { animation: { type: !1 }, enter: { opacity: 0 } },
        Modal: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { center: !0 },
          enter: { opacity: 0, scale: 1.2 },
        },
        OverlayLeft: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { right: 0, top: 0, bottom: 0 },
          enter: { x: `100%` },
        },
        OverlayRight: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { left: 0, top: 0, bottom: 0 },
          enter: { x: `-100%` },
        },
        OverlayUp: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { bottom: 0, left: 0, right: 0 },
          enter: { y: `100%` },
        },
        OverlayDown: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { top: 0, left: 0, right: 0 },
          enter: { y: `-100%` },
        },
        FlipLeft: { backfaceVisible: !1, exit: { rotateY: -180 }, enter: { rotateY: 180 } },
        FlipRight: { backfaceVisible: !1, exit: { rotateY: 180 }, enter: { rotateY: -180 } },
        FlipUp: { backfaceVisible: !1, exit: { rotateX: 180 }, enter: { rotateX: -180 } },
        FlipDown: { backfaceVisible: !1, exit: { rotateX: -180 }, enter: { rotateX: 180 } },
        MagicMotion: { withMagicMotion: !0 },
      }),
      (oC = () => ({
        current: -1,
        previous: -1,
        currentOverlay: -1,
        previousOverlay: -1,
        visualIndex: 0,
        overlayItemId: 0,
        historyItemId: 0,
        history: [],
        overlayStack: [],
        containers: {},
        containerIndex: {},
        containerVisualIndex: {},
        containerIsRemoved: {},
        transitionForContainer: {},
        previousTransition: null,
      })),
      (sC = pv(nC)),
      (cC = f.createContext(void 0)),
      (lC = f.createContext(void 0)),
      (uC = (() => {
        class e extends v {
          #e = null;
          state = oC();
          static defaultProps = { enabled: !0 };
          static contextType = cC;
          constructor(e) {
            super(e);
            let t = this.props.children;
            if (!t || !fo(t) || !uo(t)) return;
            let n = { ...aC.Instant },
              r = {
                type: `add`,
                key: t.key?.toString() || `stack-${this.state.historyItemId + 1}`,
                transition: n,
                component: t,
              },
              i = ic(this.state, r);
            i && (this.state = i);
          }
          componentDidMount() {
            let e = this.state.history[this.state.current];
            e && this.context?.(e.key);
          }
          UNSAFE_componentWillReceiveProps(e) {
            let t = e.children;
            if (!fo(t) || !uo(t)) return;
            let n = t.key?.toString();
            n &&
              (this.state.history.length === 0
                ? this.#i(t, aC.Instant)
                : this.#r({ type: `update`, key: n, component: t }));
          }
          componentWillUnmount() {
            this.props.resetProjection?.();
          }
          #t(e) {
            let { current: t, previous: n, currentOverlay: r, previousOverlay: i } = this.state;
            return e.overCurrentContext
              ? { current: r, previous: i, history: this.state.overlayStack }
              : { current: t, previous: n, history: this.state.history };
          }
          #n() {
            return globalThis.event ? this.#e === globalThis.event.timeStamp : !1;
          }
          #r = (e) => {
            if (!this.props.enabled && this.state.history.length > 0) return;
            let t = ic(this.state, e);
            if (!t) return;
            let { skipLayoutAnimation: n } = this.props,
              r = t.history[t.current],
              i =
                (e.type === `add` && e.transition.withMagicMotion) ||
                (e.type === `forward` && r?.transition.withMagicMotion) ||
                (e.type === `remove` && !!t.previousTransition),
              a = () => {
                (this.setState(t), r?.key && this.context?.(r.key));
              };
            n && !i ? n(a) : a();
          };
          #i(e, t, n) {
            if (
              this.#n() ||
              ((this.#e = globalThis.event?.timeStamp || null), !e || !fo(e) || !uo(e))
            )
              return;
            let r = { ...t, ...n };
            if (r.overCurrentContext)
              return this.#r({ type: `addOverlay`, transition: r, component: e });
            let i = e.key?.toString() || `stack-${this.state.historyItemId + 1}`;
            this.#r({ type: `add`, key: i, transition: r, component: e });
          }
          goBack = () => {
            if (!this.#n())
              return (
                (this.#e = globalThis.event?.timeStamp || null),
                this.state.currentOverlay === -1
                  ? this.#r({ type: `remove` })
                  : this.#r({ type: `removeOverlay` })
              );
          };
          instant(e) {
            this.#i(e, aC.Instant, void 0);
          }
          fade(e, t) {
            this.#i(e, aC.Fade, t);
          }
          push(e, t) {
            this.#i(e, tc(t), t);
          }
          modal(e, t) {
            this.#i(e, aC.Modal, t);
          }
          overlay(e, t) {
            this.#i(e, nc(t), t);
          }
          flip(e, t) {
            this.#i(e, rc(t), t);
          }
          magicMotion(e, t) {
            this.#i(e, aC.MagicMotion, t);
          }
          customTransition(e, t) {
            this.#i(e, t);
          }
          render() {
            let e = this.#t({ overCurrentContext: !1 }),
              t = this.#t({ overCurrentContext: !0 }),
              n = yc(t),
              r = t.current > -1,
              i = this.state.history.length === 1,
              a = [];
            for (let [t, n] of Object.entries(this.state.containers)) {
              let o = this.state.containerIndex[t];
              H(o !== void 0, `Container's index must be registered`);
              let s = this.state.containerVisualIndex[t];
              H(s !== void 0, `Container's visual index must be registered`);
              let c = this.state.containerIsRemoved[t],
                l = this.state.history[o],
                u = this.state.transitionForContainer[t],
                d = o === this.state.current,
                f = o === this.state.previous,
                p = !d && c,
                m = l?.transition?.withMagicMotion || (d && !!this.state.previousTransition);
              a.push(
                E(
                  tC,
                  {
                    id: t,
                    index: s,
                    isInitial: i,
                    isCurrent: d,
                    isPrevious: f,
                    isOverlayed: r,
                    visible: d || f,
                    position: l?.transition?.position,
                    instant: kc(o, e),
                    transitionProps: u,
                    animation: Oc(o, e),
                    backfaceVisible: Ec(o, e),
                    exitAnimation: l?.transition?.animation,
                    exitBackfaceVisible: l?.transition?.backfaceVisible,
                    exitProps: l?.transition?.enter,
                    withMagicMotion: m,
                    areMagicMotionLayersPresent: !p && void 0,
                    children: E(Rs, { children: jc({ component: n, transition: l?.transition }) }),
                  },
                  t
                )
              );
            }
            let o = this.state.overlayStack.map((e, n) =>
              E(
                tC,
                {
                  isLayeredContainer: !0,
                  isCurrent: n === this.state.currentOverlay,
                  position: e.transition.position,
                  initialProps: Tc(n, t),
                  transitionProps: Dc(n, t),
                  instant: kc(n, t, !0),
                  animation: Oc(n, t),
                  exitProps: e.transition.enter,
                  visible: Ac(n, t),
                  backdropColor: Cc(e.transition),
                  backfaceVisible: wc(n, t),
                  onTapBackdrop: Mc(e.transition, this.goBack),
                  index: this.state.current + 1 + n,
                  children: jc({ component: e.component, transition: e.transition }),
                },
                e.key
              )
            );
            return E(BS, {
              "data-framer-component-type": `NavigationRoot`,
              top: 0,
              left: 0,
              width: `100%`,
              height: `100%`,
              position: `relative`,
              style: {
                overflow: `hidden`,
                backgroundColor: `unset`,
                pointerEvents: void 0,
                ...this.props.style,
              },
              children: E(iC.Provider, {
                value: this,
                children: w(lC.Provider, {
                  value: i,
                  children: [
                    E(tC, {
                      isLayeredContainer: !0,
                      position: void 0,
                      initialProps: {},
                      instant: !1,
                      transitionProps: bc(n),
                      animation: xc(n),
                      backfaceVisible: Sc(n),
                      visible: !0,
                      backdropColor: void 0,
                      onTapBackdrop: void 0,
                      index: 0,
                      children: E(Ia, {
                        children: E(US, {
                          children: E(Fe, { presenceAffectsLayout: !1, children: a }),
                        }),
                      }),
                    }),
                    E(Fe, { children: o }),
                  ],
                }),
              }),
            });
          }
        }
        return e;
      })()),
      (dC = { stiffness: 500, damping: 50, restDelta: 1, type: `spring` }),
      (fC = $o(f.forwardRef(Nc))),
      Le(Z_(), 1),
      (pC = ((e) => (
        (e.Boolean = `boolean`),
        (e.Number = `number`),
        (e.Dimension = `dimension`),
        (e.String = `string`),
        (e.RichText = `richtext`),
        (e.FusedNumber = `fusednumber`),
        (e.Enum = `enum`),
        (e.SegmentedEnum = `segmentedenum`),
        (e.Color = `color`),
        (e.Image = `image`),
        (e.ResponsiveImage = `responsiveimage`),
        (e.File = `file`),
        (e.ComponentInstance = `componentinstance`),
        (e.Slot = `slot`),
        (e.Array = `array`),
        (e.EventHandler = `eventhandler`),
        (e.ChangeHandler = `changehandler`),
        (e.Transition = `transition`),
        (e.BoxShadow = `boxshadow`),
        (e.Link = `link`),
        (e.Date = `date`),
        (e.Object = `object`),
        (e.Font = `font`),
        (e.PageScope = `pagescope`),
        (e.ScrollSectionRef = `scrollsectionref`),
        (e.CustomCursor = `customcursor`),
        (e.Border = `border`),
        (e.Cursor = `cursor`),
        (e.Padding = `padding`),
        (e.BorderRadius = `borderradius`),
        (e.Gap = `gap`),
        (e.CollectionReference = `collectionreference`),
        (e.MultiCollectionReference = `multicollectionreference`),
        (e.TrackingId = `trackingid`),
        (e.VectorSetItem = `vectorsetitem`),
        (e.LinkRelValues = `linkrelvalues`),
        (e.Location = `location`),
        e
      ))(pC || {})),
      (mC = `optional`),
      (hC = `outputControls`),
      Le(Z_(), 1),
      Le(Z_(), 1),
      (gC = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (_C = Symbol(`private`)),
      (vC = (() => {
        function e(e = {}, t = !1, n = !0) {
          let r = {
              [_C]: {
                makeAnimatables: t,
                observeAnimatables: n,
                observers: new vb(),
                reset() {
                  for (let t in i)
                    if (gC(i, t)) {
                      let n = gC(e, t) ? Zb(e)[t] : void 0;
                      n === void 0 ? delete i[t] : (i[t] = n);
                    }
                },
                transactions: new Set(),
              },
            },
            i = new Proxy(r, bC);
          return (Object.assign(i, e), i);
        }
        return (
          (e.resetObject = (e) => e[_C].reset()),
          (e.addObserver = (e, t) => e[_C].observers.add(t)),
          e
        );
      })()),
      (yC = class {
        set = (e, t, n, r) => {
          if (t === _C) return !1;
          let i = e[_C],
            a,
            o;
          if (
            (Ki(n) ? ((a = n), (o = a.get())) : (o = n),
            i.makeAnimatables &&
              typeof n != `function` &&
              typeof n != `object` &&
              !a &&
              (a = yb(n)),
            i.observeAnimatables && a)
          ) {
            let e = i.transactions;
            a.onUpdate({
              update: (t, n) => {
                (n && e.add(n), i.observers.notify({ value: r }, n));
              },
              finish: (t) => {
                e.delete(t) && i.observers.finishTransaction(t);
              },
            });
          }
          let s = !1,
            c = !0,
            l = Zb(e)[t];
          if (l !== void 0) {
            Ki(l) ? ((c = l.get() !== o), l.set(o)) : ((c = l !== o), (Zb(e)[t] = o));
            let n = typeof o == `object` && !!o;
            ((Array.isArray(o) || n) && (c = !0), (s = !0));
          } else (a && (n = a), (s = Reflect.set(e, t, n)));
          return (c && i.observers.notify({ value: r }), s);
        };
        get = (e, t, n) => {
          if (t === _C) return Zb(e)[t];
          let r = Reflect.get(e, t, n);
          return typeof r == `function` ? r.bind(n) : r;
        };
        deleteProperty(e, t) {
          let n = Reflect.deleteProperty(e, t);
          return (e[_C].observers.notify({ value: e }), n);
        }
        ownKeys(e) {
          let t = Reflect.ownKeys(e),
            n = t.indexOf(_C);
          return (n !== -1 && t.splice(n, 1), t);
        }
        getOwnPropertyDescriptor(e, t) {
          if (t !== _C) return Reflect.getOwnPropertyDescriptor(e, t);
        }
      }),
      (bC = new yC()),
      (xC = `opacity`),
      (SC = (() => {
        function e(t = {}) {
          let n = vC(t, !1, !1);
          return (e.addData(n), n);
        }
        return (
          (e._stores = []),
          (e.addData = (t) => {
            e._stores.push(t);
          }),
          (e.reset = () => {
            e._stores.forEach((e) => vC.resetObject(e));
          }),
          (e.addObserver = (e, t) => vC.addObserver(e, t)),
          e
        );
      })()),
      (CC = { update: 0 }),
      (wC = f.createContext({ update: NaN })),
      (TC = class extends v {
        observers = [];
        state = CC;
        taskAdded = !1;
        frameTask = () => {
          (this.setState({ update: this.state.update + 1 }), (this.taskAdded = !1));
        };
        observer = () => {
          this.taskAdded || ((this.taskAdded = !0), Hb.addFrameTask(this.frameTask));
        };
        componentWillUnmount() {
          (this.observers.map((e) => e()), SC.reset());
        }
        render() {
          let { children: e } = this.props;
          return (
            this.observers.map((e) => e()),
            (this.observers = []),
            SC._stores.forEach((e) => {
              let t = SC.addObserver(e, this.observer);
              this.observers.push(t);
            }),
            E(wC.Provider, { value: { ...this.state }, children: e })
          );
        }
      }),
      Le(Z_(), 1),
      (EC = `__framer__`),
      (DC = EC.length),
      (OC = f.createContext(void 0)),
      (kC = f.createContext(void 0)),
      (AC = `ssr-variant`),
      (jC = `ssr-variant-group-separator`),
      (MC = f.forwardRef(function (e, t) {
        let n = tl(t),
          r = f.useContext(kC),
          i = f.useSyncExternalStore(iv, ov, av),
          a = za(() => (i ? (En() ? 1 : 2) : 0)),
          o = f.useContext(OC);
        return Gr(() => {
          let { breakpoint: t, overrides: i, children: s, ...c } = e;
          if (!o)
            return (
              console.warn(`PropertyOverrides is missing GeneratedComponentContext`),
              n(s, c)
            );
          let { primaryVariantId: l, variantClassNames: u } = o,
            d = r?.primaryVariantId === l ? r?.variants : void 0;
          switch (a) {
            case 0:
              return n(s, ll(t, c, i));
            case 1:
              return il(i, s, c, u, l, d, n, t);
            case 2:
              return il(i, s, c, u, l, d, el, void 0);
            default:
              U(a);
          }
        }, [o, r, n, e]);
      })),
      (NC = Dx(MC, `.${AC} { display: contents }`, `PropertyOverrides`)),
      (PC = `default`),
      (FC = new Set([PC])),
      (IC = class {
        entries = new Map();
        set(e, t, n, r) {
          switch (t) {
            case `transformTemplate`:
              (H(typeof n == `string`, `transformTemplate must be a string, received: ${n}`),
                this.setHash(e, r, { transformTemplate: n, legacy: !0 }));
              break;
            case `initial`:
            case `animate`:
              (H(typeof n == `object`, `${t} must be a valid object, received: ${n}`),
                this.setHash(e, r, { [t]: n, legacy: !0 }));
              break;
            default:
              break;
          }
        }
        setHash(e, t = PC, n) {
          let r = this.entries.get(e) ?? {},
            i = r[t] ?? {};
          ((r[t] = n === null ? null : { ...i, ...n }), this.entries.set(e, r));
        }
        #e = {};
        variantHash(e, t) {
          if (e === t?.primaryVariantId) return PC;
          let n = this.#e[e];
          if (n) return n;
          let r = t?.variantClassNames[e];
          return r ? (this.#e[e] = al(r)) : PC;
        }
        setAll(e, t = FC, n, r) {
          if (n === null) {
            for (let n of t) this.setHash(e, this.variantHash(n, r), null);
            return;
          }
          let i = qe(n.transformTemplate) ? n.transformTemplate?.({}, RC) : void 0,
            a = n.__framer__presenceInitial ?? n.initial,
            o = n.__framer__presenceAnimate ?? n.animate,
            s = {
              initial: V(a) ? a : void 0,
              animate: V(o) ? o : void 0,
              transformTemplate: z(i) ? i : void 0,
            };
          for (let n of t) this.setHash(e, this.variantHash(n, r), s);
        }
        clear() {
          this.entries.clear();
        }
        toObject() {
          return Object.fromEntries(this.entries);
        }
      }),
      (LC = new IC()),
      (RC = `__Appear_Animation_Transform__`),
      (zC = `data-framer-appear-id`),
      (BC = `data-framer-appear-animation`),
      (VC = (e) => {
        if (Ha())
          return {
            animate: dl(e.animate) ? e.animate : void 0,
            initial: dl(e.initial) ? e.initial : void 0,
            exit: void 0,
          };
      }),
      (HC = [
        `opacity`,
        `x`,
        `y`,
        `scale`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `skewX`,
        `skewY`,
        `transformPerspective`,
      ]),
      (UC = (e) => ({
        x: L(e?.x ?? 0),
        y: L(e?.y ?? 0),
        opacity: L(e?.opacity ?? 1),
        scale: L(e?.scale ?? 1),
        rotate: L(e?.rotate ?? 0),
        rotateX: L(e?.rotateX ?? 0),
        rotateY: L(e?.rotateY ?? 0),
        skewX: L(e?.skewX ?? 0),
        skewY: L(e?.skewY ?? 0),
        transformPerspective: L(e?.transformPerspective ?? 0),
      })),
      (WC = {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        transformPerspective: 0,
      }),
      (GC = { willChange: `transform` }),
      Object.freeze(GC),
      (KC = {}),
      Object.freeze(KC),
      (qC = new Set([
        `loopEffectEnabled`,
        `loopTransition`,
        `loop`,
        `loopRepeatType`,
        `loopRepeatDelay`,
        `loopPauseOffscreen`,
      ])),
      (JC = () => {
        let e = M();
        return (
          h(
            () => () => {
              clearTimeout(e.current);
            },
            []
          ),
          async (t) =>
            new Promise((n) => {
              e.current = setTimeout(() => {
                n(!0);
              }, t * 1e3);
            })
        );
      }),
      (YC = new Set([`speed`, `adjustPosition`, `offset`, `parallaxTransformEnabled`])),
      (XC = new Set([`presenceInitial`, `presenceAnimate`, `presenceExit`])),
      (ZC = 1),
      (QC = 4),
      ($C = new Set([
        `threshold`,
        `animateOnce`,
        `opacity`,
        `targetOpacity`,
        `x`,
        `y`,
        `scale`,
        `transition`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `perspective`,
        `enter`,
        `exit`,
        `animate`,
        `styleAppearEffectEnabled`,
        `targets`,
        `scrollDirection`,
      ])),
      (ew = [`animate`, `animate`]),
      (tw = { inputRange: [], outputRange: [] }),
      (nw = new Set([
        `transformViewportThreshold`,
        `styleTransformEffectEnabled`,
        `transformTargets`,
        `spring`,
        `transformTrigger`,
      ])),
      (rw = (e, t) => {
        let n = e?.[0]?.target;
        return t ? { opacity: n?.opacity ?? 1 } : n;
      }),
      (iw = () => ({
        opacity: [],
        x: [],
        y: [],
        scale: [],
        rotate: [],
        rotateX: [],
        rotateY: [],
        skewX: [],
        skewY: [],
        transformPerspective: [],
      })),
      (aw = [0, 1]),
      (ow = { parallax: YC, styleAppear: $C, styleTransform: nw, loop: qC, presence: XC }),
      (sw = pv(ow)),
      (cw = (e) => e.reduce((e, t) => (e += t), 0)),
      (lw = (e) => e.reduce((e, t) => (e *= t), 1)),
      (uw = `current`),
      (dw = (e) =>
        f.forwardRef((t, n) => {
          if (t.__withFX)
            return E(e, { ...t, animate: void 0, initial: void 0, exit: void 0, ref: n });
          let r = VC(t);
          if (r) return E(e, { ...t, ...r, ref: n });
          let {
              parallax: i = {},
              styleAppear: a = {},
              styleTransform: o = {},
              presence: s = {},
              loop: c = {},
              forwardedProps: l,
              targetOpacityValue: u,
              withPerspective: d,
              inSmartComponent: p = !1,
            } = Pl(t),
            m = Hs(n),
            { values: h, style: g } = bl(s, m, p, t.style, t[Me]),
            { values: _, style: v } = gl(i, m, t.style?.visibility),
            { values: y, style: b } = Ml(o, m),
            { values: x, style: S } = Ol(a, m),
            { values: C, style: w } = ml(c, m),
            T = f.useMemo(() => {
              let e = new Be(u ?? 1);
              return {
                scale: [x.scale, C.scale, h.scale, y.scale],
                opacity: [x.opacity, C.opacity, h.opacity, e, y.opacity],
                x: [x.x, C.x, h.x, y.x],
                y: [x.y, C.y, _.y, h.y, y.y],
                rotate: [x.rotate, C.rotate, h.rotate, y.rotate],
                rotateX: [x.rotateX, C.rotateX, h.rotateX, y.rotateX],
                rotateY: [x.rotateY, C.rotateY, h.rotateY, y.rotateY],
                skewX: [x.skewX, C.skewX, h.skewX, y.skewX],
                skewY: [x.skewY, C.skewY, h.skewY, y.skewY],
                transformPerspective: [y.transformPerspective, x.transformPerspective],
              };
            }, [u, y, _, x, C, h]);
          Il(t.style, T);
          let D = be(T.scale, lw),
            O = be(T.opacity, lw),
            k = be(T.x, cw),
            A = be(T.y, cw),
            j = be(T.rotate, cw),
            M = be(T.rotateX, cw),
            ee = be(T.rotateY, cw),
            N = be(T.skewX, cw),
            P = be(T.skewY, cw),
            te = be(T.transformPerspective, cw),
            { drag: ne, dragConstraints: F } = l;
          ss(ne && Fl(F) ? F : void 0);
          let re = {
            opacity: O,
            scale: D,
            x: k,
            y: A,
            rotate: j,
            rotateX: M,
            rotateY: ee,
            skewX: N,
            skewY: P,
          };
          Ze(d) && (re.transformPerspective = te);
          let ie = Ll(t.animate) ? t.animate : void 0,
            I = Ll(t.initial) ? t.initial : void 0,
            ae = Ll(t.exit) ? t.exit : void 0,
            oe = p && !s.presenceInitial ? { initial: I, animate: ie, exit: ae } : {};
          return E(e, {
            ...l,
            ...oe,
            __withFX: !0,
            style: { ...t.style, ...v, ...b, ...w, ...re, ...S, ...g },
            values: h,
            ref: m,
          });
        })),
      (fw = f.createContext({})),
      (pw = f.forwardRef(function ({ width: e, height: t, y: n, children: r, ...i }, a) {
        let o = f.useMemo(() => ({ width: e, height: t, y: n }), [e, t, n]),
          s = tl(a);
        return E(fw.Provider, { value: o, children: s(r, i) });
      })),
      (mw = (e) =>
        f.forwardRef((t, n) =>
          E(e, { layoutId: as(t), ...t, layoutIdKey: void 0, duplicatedFrom: void 0, ref: n })
        )),
      (hw = {}),
      (gw = () => hw),
      (_w = (e) => {
        hw = e;
      }),
      (vw = !1),
      (yw = class extends v {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e, t) {
          if (!zl(e)) return;
          let n = t?.componentStack;
          console.error(
            `Caught an error in SynchronousSuspenseErrorBoundary:

`,
            e,
            `

Component stack:
`,
            n,
            `

This error indicates a state update wasn’t wrapped with \`startTransition\`. Some of the UI might flash as a result. ` +
              ot(
                `If you are the author of this website, update external components and check recently added custom code or code overrides.`
              )
          );
          let r = e instanceof Error && typeof e.stack == `string` ? e.stack : void 0;
          on(`published_site_load_recoverable_error`, {
            message: String(e),
            stack: r,
            componentStack: r ? void 0 : n,
          });
        }
        render() {
          let e = this.state.error;
          if (e === void 0) return this.props.children;
          if (!zl(e)) throw e;
          return ((vw = !0), this.props.children);
        }
      }),
      (bw = N === void 0 ? null : new Promise(() => {})),
      (xw = E(Bl, {})),
      (Sw = k(!1)),
      (Sw.displayName = `DisableSuspenseSuspenseThatPreservesDomContext`),
      (Cw = E(Hl, {})),
      (ww = class extends v {
        state = { hasError: !1 };
        static getDerivedStateFromError() {
          return { hasError: !0 };
        }
        componentDidCatch(e, t) {
          (Wl(this.props.getErrorMessage(), t?.componentStack), Ul(e, t));
        }
        render() {
          let { children: e, fallback: t = Cw } = this.props,
            { hasError: n } = this.state;
          return n ? t : e;
        }
      }),
      (Tw = class extends v {
        state = { hasError: !1 };
        componentDidCatch(e, t) {
          let n = t?.componentStack;
          (console.error(
            `Error in component (see previous log). This component has been hidden. Please check any custom code or code overrides to fix.`,
            n
          ),
            this.setState({ hasError: !0 }),
            Ul(e, t));
        }
        render() {
          let { children: e } = this.props,
            { hasError: t } = this.state;
          return t ? null : e;
        }
      }),
      (Ew = f.createContext(void 0)),
      (Dw = `code-crash:`),
      (Ow = mw(
        f.forwardRef(function (
          {
            children: e,
            layoutId: t,
            as: n,
            scopeId: r,
            nodeId: i,
            isAuthoredByUser: a,
            isModuleExternal: o,
            inComponentSlot: s,
            ...c
          },
          l
        ) {
          let u = za(() => (t ? `${t}-container` : void 0)),
            d = Lo(n),
            p = iu(
              f.Children.map(e, (e) =>
                f.isValidElement(e) ? f.cloneElement(e, { layoutId: t }) : e
              ),
              r,
              i,
              a,
              o,
              s
            );
          return E(d, {
            layoutId: u,
            ...c,
            ref: l,
            children: E(gS.Provider, {
              value: !0,
              children: E(Vy.Provider, {
                value: i ?? null,
                children: E(Ra, {
                  enabled: !1,
                  children: E(ze, { id: t ?? ``, inherit: c.layout ? !0 : `id`, children: p }),
                }),
              }),
            }),
          });
        })
      )),
      (kw = f.forwardRef(function (e, t) {
        let {
            as: n,
            children: r,
            scopeId: i,
            nodeId: a,
            isAuthoredByUser: o,
            rendersWithMotion: s,
            isModuleExternal: c,
            inComponentSlot: l,
            ...u
          } = e,
          d = iu(r, i, a, o, c, l),
          f = e.as ?? `div`;
        if (e.rendersWithMotion) {
          let n = Lo(f);
          return E(Vy.Provider, {
            value: a ?? null,
            children: E(n, { ...u, ref: t, style: e.style, children: d }),
          });
        } else {
          let n = f,
            { layoutId: r, layoutDependency: i, ...o } = u;
          return E(Vy.Provider, {
            value: a ?? null,
            children: E(n, { ...o, ref: t, style: e.style, children: d }),
          });
        }
      })),
      (jw = new Set()),
      (Mw = k({ onRegisterCursors: () => () => {}, registerCursors: () => {} })),
      (Nw = `framer-cursor-none`),
      (Pw = `framer-pointer-events-none`),
      (Fw = t(function ({ children: e }) {
        let t = za(() => {
            let e = new Set(),
              t = {},
              n = new Map();
            return {
              onRegisterCursors: (n) => (n(t), e.add(n), () => e.delete(n)),
              registerCursors: (r, i) => {
                (n.set(i, Object.keys(r)), (t = uu(n, t, r)));
                for (let n of e) n(t);
                return () => {
                  n.delete(i);
                };
              },
            };
          }),
          n = I();
        return w(Mw.Provider, { value: t, children: [e, !n && E(zw, {})] });
      })),
      (Iw = Dx(
        Fw,
        [
          `.${Nw}, .${Nw} * { cursor: none !important; }`,
          `.${Pw}, .${Pw} * { pointer-events: none !important; }`,
        ],
        `framer-lib-cursors-host`
      )),
      (Lw = { position: `fixed`, top: 0, left: 0, zIndex: 13, pointerEvents: `none` }),
      (Rw = `data-framer-portal-id`),
      (zw = t(function () {
        let { onRegisterCursors: e } = S(Mw),
          t = lu(!1),
          r = ge(0),
          i = ge(0),
          a = ge(0),
          o = M(null),
          s = M({ cursors: {}, cursorHash: void 0 }),
          c = os();
        (h(() => {
          if (!t) return;
          let e = 0,
            n = 0;
          function l() {
            (r.set(e), i.set(n), Oe(a, 1, { type: `tween`, duration: 0.2 }));
          }
          let u = () => {
            if (Xe(s.current.cursors)) return;
            let t = mu(e, n);
            t !== s.current.cursorHash && ((s.current.cursorHash = t), Ge.update(() => c()));
          };
          function d(t) {
            if (t.pointerType === `touch`) {
              He(u);
              return;
            }
            (Ge.read(u, !0), (e = t.clientX), (n = t.clientY), Ge.update(l));
          }
          function f(e) {
            if (e.target === o.current || !o.current) return;
            let t = new PointerEvent(e.type, {
              bubbles: !0,
              cancelable: e.cancelable,
              pointerType: e.pointerType,
              pointerId: e.pointerId,
              composed: e.composed,
              isPrimary: e.isPrimary,
              buttons: e.buttons,
              button: e.button,
            });
            Ge.update(() => {
              o.current?.dispatchEvent(t);
            });
          }
          return (
            Vv.addEventListener(`pointermove`, d),
            document.addEventListener(`pointerdown`, f),
            document.addEventListener(`pointerup`, f),
            Ge.read(u, !0),
            () => {
              (Vv.removeEventListener(`pointermove`, d),
                document.removeEventListener(`pointerdown`, f),
                document.removeEventListener(`pointerup`, f),
                He(u));
            }
          );
        }, [a, r, i, c, t]),
          h(() => {
            if (!t) return;
            function e() {
              Oe(a, 0, { type: `tween`, duration: 0.2 });
            }
            return (
              document.addEventListener(`mouseleave`, e),
              Vv.addEventListener(`blur`, e),
              () => {
                (document.removeEventListener(`mouseleave`, e), Vv.removeEventListener(`blur`, e));
              }
            );
          }, [a, t]),
          n(() => {
            function t(e) {
              ((s.current.cursors = e),
                (s.current.cursorHash = Xe(e) ? null : mu(r.get(), i.get())),
                c());
            }
            let n = e(t);
            return () => {
              (n(), document.body.classList.toggle(Nw, !1));
            };
          }, [r, i, e, c]));
        let { cursors: l, cursorHash: u } = s.current,
          d = u ? l[u] : null,
          f = du(d);
        n(() => {
          t && document.body.classList.toggle(Nw, f);
        }, [f, t]);
        let p = d?.component,
          m = d?.transition ?? { duration: 0 },
          g = m.duration === void 0 ? m : { ...m, duration: m.duration * 1e3 },
          _ = se(r, g),
          v = se(i, g),
          y = be(() => _.get() + (d?.offset?.x ?? 0)),
          x = be(() => v.get() + (d?.offset?.y ?? 0)),
          w = d?.alignment,
          T = d?.placement,
          D = C((e, t) => `translate(${pu(T, w)}) ${t}`, [w, T]);
        return !t || !d || !p
          ? null
          : E(b, {
              children: E(p, {
                transformTemplate: D,
                style: { ...Lw, x: y, y: x, opacity: a },
                globalTapTarget: !0,
                variant: d?.variant,
                ref: o,
                className: Pw,
              }),
            });
      })),
      (Bw = `webPageId`),
      (Vw = class {
        collectedLinks = new Map();
        nestingInfo = new Map();
        clear() {
          (this.collectedLinks.clear(), this.nestingInfo.clear());
        }
        getLinks() {
          let e = new Map();
          for (let [t, n] of this.nestingInfo) {
            let r = this.collectedLinks.get(t);
            H(r, `Outer link not found: ${t}`);
            let i = Array.from(n).map((e) => {
              let t = this.collectedLinks.get(e);
              return (H(t, `Inner link not found: ${e}`), t);
            });
            e.set(r, i);
          }
          return e;
        }
        collectNestedLink(e, t) {
          if ((ev && !kn()) || !e.nodeId || !t.nodeId) return;
          (this.collectedLinks.set(_u(e), e), this.collectedLinks.set(_u(t), t));
          let n = this.nestingInfo.get(_u(e)) ?? new Set();
          (n.add(_u(t)), this.nestingInfo.set(_u(e), n));
        }
      }),
      (Hw = new Vw()),
      (Uw = `element`),
      (Ww = `collection`),
      (Gw = `collectionItemId`),
      (Kw = `pathVariables`),
      (qw = `framer/page-link,`),
      (Jw = k(void 0)),
      (Yw = `overlay`),
      (Xw = `template-overlay`),
      (Zw = f.forwardRef(function ({ Component: e, ...t }, n) {
        return e ? E(e, { ...t, ref: n }) : null;
      })),
      (Qw = class extends v {
        state = { error: void 0 };
        message = `Made UI non-interactive due to an error.`;
        messageFatal = `Fatal error.`;
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e) {
          if (
            ((N.__framer_hadFatalError = !0),
            `cause` in e && (e = e.cause),
            console.error(ot(tv ? this.message : this.messageFatal, e)),
            Math.random() > 0.5)
          )
            return;
          let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
          on(`published_site_load_error`, { message: String(e), stack: t });
        }
        render() {
          let e = this.state.error;
          if (!e) return this.props.children;
          let t = `cause` in e ? e.cause : e,
            n = /-->/gu,
            r = (tv && document.getElementById(`main`)?.innerHTML) || ``;
          return E(`div`, {
            style: { display: `contents` },
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
              __html:
                `<!-- DOM replaced by GracefullyDegradingErrorBoundary due to "${t.message.replace(n, `--!>`)}". ${ot()}: --><!-- Stack: ${e.stack?.replace(n, `--!>`)} -->` +
                r,
            },
          });
        }
      }),
      (eT = /:([a-z]\w*)/gi),
      (tT = k(void 0)),
      (nT = new Map()),
      (rT = 500),
      (iT = 500),
      (oT = !1),
      (sT = 500),
      (cT = 0.9),
      (lT = 1.7),
      (uT = 4),
      (dT = 1 / 0),
      (fT = new WeakMap()),
      (pT = new Set()),
      (mT = new Map()),
      (hT = !wy || typeof IntersectionObserver > `u` ? null : ed()),
      (gT = Iu(
        D(function (
          {
            children: e,
            href: t,
            openInNewTab: n,
            smoothScroll: r,
            clickTrackingId: i,
            relValues: a,
            preserveParams: o,
            nodeId: c,
            scopeId: l,
            motionChild: u,
            ...d
          },
          f
        ) {
          let p = Dt(),
            m = kt(),
            h = Bu(),
            { activeLocale: g, locales: _ } = qn(),
            v = sd(),
            y = Jn(),
            b = vu(),
            x = cd({ nodeId: c, clickTrackingId: i, router: p, href: t, activeLocale: g }),
            S = s(() => {
              if (!t) return {};
              let e = gu(t) ? t : Tu(t);
              if (!e) return {};
              if (z(e))
                return vd(
                  e,
                  p,
                  m,
                  {
                    openInNewTab: n,
                    trackLinkClick: x,
                    rel: a?.join(` `),
                    preserveParams: o,
                    smoothScroll: r,
                  },
                  y,
                  g?.id,
                  _,
                  h
                );
              let { unresolvedPathSlugs: i, unresolvedHashSlugs: s } = e,
                c = v(i, s, g);
              if (rt(c)) throw c;
              let {
                  routeId: l,
                  href: u,
                  elementId: d,
                  pathVariables: f,
                  locale: b,
                } = Lu(p, m, e, g, c, h),
                S = nd(n, !0),
                C = S === `_blank`,
                w = _d(u, C, p.siteCanonicalURL),
                T = { pathVariables: f, locale: b },
                E = fd(u, w, (e) =>
                  ud(
                    p,
                    l,
                    () =>
                      y(l, T, {
                        priority: `user-blocking`,
                        yieldBeforePreload: !1,
                        shouldLoadRouteData: !C,
                      }),
                    d,
                    f,
                    r,
                    e
                  )
                );
              return {
                href: u,
                target: S,
                onClick: dd(u, x, E),
                "data-framer-page-link-current": (m && Vu(m, e, h)) || void 0,
                navigate: E,
                preload: () =>
                  y(l, T, {
                    priority: `background`,
                    yieldBeforePreload: !0,
                    shouldLoadRouteData: !C,
                  }),
                _routeId: l,
                _pathVariables: f,
                _locale: b,
                _navigationUrl: w,
              };
            }, [t, p, g, h, n, m, r, x, a, _, o, v, y]),
            C = Hs(T(e) && `ref` in e ? e.ref : void 0),
            {
              navigate: w,
              preload: E,
              _routeId: D,
              _pathVariables: O,
              _locale: k,
              _navigationUrl: A,
              ...j
            } = S;
          Us(
            C,
            (e) => {
              if (!(e === null || !D || !E || !A || b))
                return hT?.(e, E, `${D}:${k?.id}:${JSON.stringify(O)}`, A);
            },
            [E, D, O, k, A, b]
          );
          let M = !!w;
          return Du(
            tl(f).cloneAsArray(e, (e) => yd(e, { ...d, ...xd(j, u, M) }, C)),
            l,
            c,
            t,
            S,
            C
          );
        })
      )),
      (_T = `framer`),
      (vT = 3),
      (yT = 30),
      (bT = 1e4),
      (xT = `__framer`),
      (ST = `3`),
      (CT = [
        `website`,
        `company`,
        `message`,
        `subject`,
        `title`,
        `description`,
        `feedback`,
        `notes`,
        `details`,
        `remarks`,
        `comments`,
      ]),
      (wT = Date.now()),
      (TT = {
        name: 0,
        value: 1,
        setAttribute: 2,
        valueProperty: 3,
        isInputEventTrusted: 4,
        inputChangeTimeSinceModuleLoad: 5,
        wasFilledBeforeHydration: 6,
      }),
      (ET = {
        fieldData: 0,
        fieldCount: 1,
        fieldFilledCount: 2,
        hpVersion: 3,
        siteId: 4,
        timeToSubmissionSinceModuleLoad: 5,
      }),
      (DT = () => ((Date.now() - wT) / 1e3).toFixed(2)),
      (OT = ({ inputStateRef: e }) => {
        let { inputRef: t, originalName: n } = e;
        return (
          f.useLayoutEffect(() => {
            let n = t.current;
            if (!n) return;
            let r = e.methodsUsed;
            n.value && (r.wasFilledBeforeHydration = !0);
          }, [t, e]),
          f.useEffect(() => {
            let n = t.current;
            if (!n) return;
            let r = e.methodsUsed,
              i = Element.prototype.setAttribute,
              a = i.bind(n);
            n.setAttribute = function (e, t) {
              (e === `value` && ((r.setAttribute = !0), (r.inputChangeTimeSinceModuleLoad = DT())),
                a(e, t));
            };
            let o = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, `value`);
            o &&
              Object.defineProperty(n, "value", {
                configurable: !0,
                enumerable: !0,
                get: function () {
                  return o.get?.call(this) ?? ``;
                },
                set: function (e) {
                  ((r.valueProperty = !0),
                    (r.inputChangeTimeSinceModuleLoad = DT()),
                    o.set?.call(this, e));
                },
              });
            let s = (e) => {
              ((r.isInputEventTrusted = e.isTrusted), (r.inputChangeTimeSinceModuleLoad = DT()));
            };
            return (
              n.addEventListener(`input`, s),
              () => {
                ((n.setAttribute = i.bind(n)),
                  o && Object.defineProperty(n, "value", o),
                  n.removeEventListener(`input`, s));
              }
            );
          }, [t, e]),
          E(`input`, {
            ref: t,
            type: `text`,
            name: n,
            suppressHydrationWarning: !0,
            tabIndex: -1,
            autoComplete: `one-time-code`,
            "aria-hidden": `true`,
            style: { position: `absolute`, transform: `scale(0)` },
            defaultValue: ``,
            "data-1p-ignore": !0,
            "data-lpignore": `true`,
            "data-form-type": `other`,
            "data-bwignore": !0,
          })
        );
      }),
      (kT = { state: `pending` }),
      (AT = { state: `success` }),
      (jT = { state: `incomplete` }),
      (MT = { state: `complete` }),
      (NT = { state: `error` }),
      (PT = f.createContext(void 0)),
      (FT = f.forwardRef(function (
        {
          action: e,
          children: t,
          redirectUrl: n,
          onSuccess: r,
          onError: i,
          onLoading: a,
          submitTrackingId: o,
          nodeId: s,
          ...c
        },
        l
      ) {
        let d = f.useRef(null),
          p = te(l, d),
          {
            states: m,
            convertHoneypotFieldsForSubmission: h,
            replaceHoneypotWithMetadata: g,
          } = Ad(),
          _ = Dt(),
          v = kt(),
          y = Bu(),
          b = gn(),
          [x, C] = f.useReducer(Pd, jT),
          { activeLocale: T, locales: D } = qn(),
          O = S(PT),
          k = f.useRef({ onSuccess: r, onError: i, onLoading: a });
        k.current = { onSuccess: r, onError: i, onLoading: a };
        let A = f.useRef(!1);
        async function j(e) {
          if (z(e)) {
            let t = Ru(_, e, y, D);
            if (!t) {
              Ld(e, d);
              return;
            }
            let { routeId: n, elementId: r, pathVariables: i } = t;
            _.navigate?.(n, r, i);
            return;
          }
          H(
            gu(e),
            () => `Expected link to be either a LinkToWebPage or a string: ${JSON.stringify(e)}`
          );
          let t = await ad(e.unresolvedPathSlugs, e.unresolvedHashSlugs, T, b),
            { routeId: n, elementId: r, pathVariables: i } = Lu(_, v, e, T, t, y);
          _.navigate?.(n, r, i);
        }
        let M = (e) => {
          (e.preventDefault(), ee(e.currentTarget));
        };
        async function ee(t) {
          if (!e || !O || A.current) return;
          ((A.current = !0), h());
          let r = new FormData(t),
            i = Ed(t);
          (await _y({ priority: `user-visible`, continueAfter: `paint` }),
            g(r),
            u(() => C({ type: `submit` })),
            kd(r, Vv.document));
          for (let [e, t] of r) t instanceof File && r.delete(e);
          try {
            (k.current.onLoading?.(),
              Md({ router: _, nodeId: s, submitTrackingId: o, activeLocale: T }),
              await zd(e, r, i, O),
              u(() => C({ type: `success` })),
              k.current.onSuccess?.(),
              n && (await j(n)));
          } catch (e) {
            (u(() => C({ type: `error` })), k.current.onError?.(), console.error(e));
          }
          A.current = !1;
        }
        let N = (e) => {
            let { target: t, currentTarget: n, key: r } = e;
            t instanceof HTMLTextAreaElement ||
              (r === `Enter` && n.checkValidity() && (e.preventDefault(), M(e)));
          },
          P = async (e) => {
            let t = e.currentTarget;
            (await _y({ priority: `background`, continueAfter: `paint` }),
              u(() => C({ type: Rd(t) ? `incomplete` : `complete` })));
          };
        ci(d, (e) => void ee(e));
        let ne = f.useMemo(() => t(x), [t, x]);
        return w(F.form, {
          ...c,
          method: `post`,
          "data-framer-form": ``,
          onSubmit: Fd(x) ? M : Id,
          onKeyDown: N,
          onChange: P,
          ref: p,
          children: [
            ne,
            E(jd, { states: m }),
            E(`script`, { dangerouslySetInnerHTML: { __html: si() } }),
            w(`noscript`, {
              children: [
                E(`style`, {
                  children: `[data-framer-form] input[name=framer-noscript] { position: absolute; transform: scale(0); }`,
                }),
                E(`input`, {
                  required: !0,
                  pattern: `(?!)`,
                  name: `framer-noscript`,
                  tabIndex: -1,
                  "aria-label": `Enable JavaScript to submit this form`,
                  title: `Enable JavaScript to submit this form`,
                }),
                E(`p`, { children: `Enable JavaScript to submit this form.` }),
              ],
            }),
          ],
        });
      })),
      (IT = `__framer_force_showing_editorbar_since`),
      (LT = class extends v {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        render() {
          return this.state.error ? null : this.props.children;
        }
      }),
      (RT = () => {
        try {
          return !!localStorage[IT];
        } catch {
          return !1;
        }
      }),
      (zT = () => !RT()),
      (BT = (() => {
        let e = k(void 0);
        return ((e.displayName = `TriggerStateContext`), e);
      })()),
      (VT = null),
      (HT = null),
      rv(Kd),
      (UT = (e, t, n, r, i, a) => {
        let o = S(PT),
          s = M(),
          c = gn(),
          l = M(!0);
        return (
          h(() => {
            function u() {
              (!VT || !HT) && Kd();
              let s = n ? new URL(n, Vv.location.href) : Vv.location,
                u = {
                  version: Hv,
                  abTestId: e?.abTestId,
                  framerSiteId: o ?? null,
                  webPageId: e?.abTestingVariantId ?? t,
                  routePath: e?.path || `/`,
                  collectionItemId: null,
                  framerLocale: i?.code || null,
                  referrer: null,
                  url: s.href,
                  hostname: s.hostname,
                  pathname: s.pathname,
                  search: s.search || null,
                  hash: s.hash || null,
                  timezone: VT,
                  locale: HT,
                },
                d = l.current && a !== void 0 ? a : void 0;
              return e?.collectionId && r
                ? (async () => {
                    let t = d ?? null;
                    if (d === void 0) {
                      let n = e.collectionId && c?.get(e.collectionId),
                        [a] = Object.values(r);
                      if (n && z(a)) {
                        let e = n.getRecordIdBySlug(a, i || void 0);
                        t = (rt(e) ? await e : e) ?? null;
                      }
                    }
                    return { ...u, collectionItemId: t };
                  })()
                : u;
            }
            (async () => {
              let e = (s.current = u()),
                t = e instanceof Promise ? await e : e;
              ((s.current = t),
                l.current ? (l.current = !1) : on(`published_site_pageview`, t, `eager`));
            })();
            let d = async (e) => {
              if (e.persisted) {
                let e = (s.current = u()),
                  t = e instanceof Promise ? await e : e;
                ((s.current = t), on(`published_site_pageview`, t, `eager`));
              }
            };
            return (
              N.addEventListener(`pageshow`, d),
              () => {
                N.removeEventListener(`pageshow`, d);
              }
            );
          }, [e, t, n, r, i, o, c, a]),
          s
        );
      }),
      (WT = 0),
      (GT = 500),
      (KT = 200),
      (qT = `main`),
      (JT = `framerGeneratedPage`),
      (YT = `<!-- Start of headStart -->`),
      (XT = `<!-- End of headStart -->`),
      (ZT = `<!-- Start of headEnd -->`),
      (QT = `<!-- End of headEnd -->`),
      ($T = `<!-- Start of bodyStart -->`),
      (eE = `<!-- End of bodyStart -->`),
      (tE = `<!-- Start of bodyEnd -->`),
      (nE = `<!-- End of bodyEnd -->`),
      (rE = f.createContext(void 0)),
      (iE = { status: `loading`, data: void 0 }),
      (aE = 5e3),
      (oE = () => {}),
      (sE = class e {
        static cacheKey = `framer-fetch-client-cache`;
        responseValues = new Map();
        #e = new Map();
        #t = new Set();
        #n = new Map();
        #r = new Map();
        #i = new Map();
        #a = new Map();
        unmount() {
          for (let [e, t] of this.#a) (clearInterval(t), this.#a.delete(e));
        }
        stopQueryRefetching(e) {
          let t = Bf(e),
            n = this.#a.get(t);
          n && (clearInterval(n), this.#a.delete(t));
        }
        startQueryRefetching(e) {
          let t = Bf(e),
            n = this.#a.get(t),
            r = this.#n.get(t);
          if (n || !r) return;
          let i = Vv.setInterval(() => {
            if (document.visibilityState === `hidden`) return;
            let n = this.#r.get(t);
            !r || !n || this.fetchWithCache({ ...e, cacheDuration: r });
          }, r);
          this.#a.set(t, i);
        }
        hydrateCache() {
          try {
            let t = localStorage.getItem(e.cacheKey);
            if (!t) return;
            let n = JSON.parse(t);
            if (typeof n != `object`) throw Error(`Invalid cache data`);
            for (let e in n) {
              let t = n[e];
              if (!Array.isArray(t) || t.length !== 3) throw Error(`Invalid cache data`);
              let [r, i, a] = t;
              Wf(r, i) ||
                (this.#r.set(e, r),
                this.#n.set(e, i),
                this.responseValues.set(e, { status: `success`, data: a }));
            }
          } catch {
            try {
              localStorage.removeItem(e.cacheKey);
            } catch {}
          }
        }
        setResponseValue(e, t) {
          (this.responseValues.set(e, t), this.persistCache());
          let n = this.#e.get(e);
          if (n) for (let e of n) e();
        }
        persistCache = Xc(() => {
          let t = {};
          for (let [e, n] of this.responseValues) {
            if (!n || n.status !== `success`) continue;
            let r = this.#n.get(e);
            if (!r || r === 0) continue;
            let i = this.#r.get(e);
            i && ((i && Wf(i, r)) || (t[e] = [i, r, n.data]));
          }
          try {
            localStorage.setItem(e.cacheKey, JSON.stringify(t));
          } catch {}
        }, 500);
        async prefetch(e) {
          if (!En() || !bu(e.url, !1)) return;
          let t = Bf(e);
          (this.#t.add(t), await this.fetchWithCache(e));
          let n = this.getValue(t);
          if (!n || n.status === `loading`) throw Error(`Unexpected result status for prefetch`);
          let r = this.#e.get(t);
          for (let e of r ?? []) e();
          let i = Uf(n, e);
          return (e.resultOutputType === `image` && z(i) && (await Lf(i).catch(oE)), i);
        }
        async fetchWithCache(e) {
          if (!En()) return;
          let t = Bf(e),
            n = this.#i.get(t);
          if (n) return n;
          let r = this.#r.get(t),
            i = r && Wf(r, e.cacheDuration);
          if (this.responseValues.has(t) && !i) return;
          this.responseValues.get(t) || this.setResponseValue(t, iE);
          let a = (async () => {
            try {
              let n = await fetch(e.url, { method: `GET`, credentials: e.credentials });
              if (!n.ok) {
                this.setResponseValue(t, {
                  status: `error`,
                  error: Error(`Invalid Response Status`),
                  data: void 0,
                });
                return;
              }
              let r = await n.json();
              (this.setResponseValue(t, { status: `success`, data: r }),
                this.#r.set(t, Date.now()));
            } catch (e) {
              this.setResponseValue(t, { status: `error`, error: e, data: void 0 });
            }
          })();
          return (
            this.#i.set(t, a),
            a.finally(() => {
              this.#i.delete(t);
            }),
            a
          );
        }
        getValue(e, t = !1) {
          if (!(t && !this.#t.has(e))) return this.responseValues.get(e);
        }
        subscribe(e, t, n = !1) {
          let { url: r, cacheDuration: i } = e;
          if (!bu(r, !1)) return oE;
          let a = Bf(e),
            o = this.#n.get(a);
          ((!o || i < o) && this.#n.set(a, i),
            n || (this.startQueryRefetching(e), this.fetchWithCache(e)));
          let s = this.#e.get(a) ?? new Set();
          return (
            s.add(t),
            this.#e.set(a, s),
            () => {
              let n = this.#e.get(a);
              n &&
                (n.delete(t),
                n.size === 0 && this.#e.delete(a),
                this.#e.size === 0 && this.stopQueryRefetching(e));
            }
          );
        }
      }),
      (cE = k(void 0)),
      (lE = k(!0)),
      (uE = ({ children: e, client: t }) => {
        let [n] = A(() => t ?? new sE()),
          [r, i] = A(!0);
        return (
          h(
            () => (
              n.hydrateCache(),
              u(() => {
                i(!1);
              }),
              () => n.unmount()
            ),
            [n]
          ),
          E(lE.Provider, { value: r, children: E(cE.Provider, { value: n, children: e }) })
        );
      }),
      (dE = (() => {
        let e = k(void 0);
        return ((e.displayName = `ServerDatabaseClientContext`), e);
      })()),
      (Ie.WillChange = Ve),
      (fE = Iu(
        D(function ({ links: e, children: t, ...n }, r) {
          return tl(r)(t(qf((t) => e.map(t), [e])), n);
        })
      )),
      (pE = { priority: void 0, canYield: !0 }),
      (mE = {
        cast(e, t) {
          switch (t.type) {
            case `array`:
              return fp(e, t);
            case `boolean`:
              return mp(e);
            case `color`:
              return _p(e);
            case `date`:
              return yp(e);
            case `enum`:
              return xp(e);
            case `file`:
              return Cp(e);
            case `link`:
              return Tp(e);
            case `number`:
              return Dp(e);
            case `object`:
              return Ap(e, t);
            case `responsiveimage`:
              return Mp(e);
            case `richtext`:
              return Pp(e);
            case `string`:
              return Rp(e);
            case `vectorsetitem`:
              return Ip(e);
            case `unknown`:
              return e;
            default:
              U(t, `Unsupported cast`);
          }
        },
        parse(e) {
          return Je(e)
            ? { type: `boolean`, value: e }
            : et(e)
              ? { type: `date`, value: e.toISOString() }
              : B(e)
                ? { type: `number`, value: e }
                : z(e)
                  ? { type: `string`, value: e }
                  : Ye(e)
                    ? { type: `array`, value: e.map(mE.parse) }
                    : null;
        },
        equal(e, t, n) {
          return e?.type === t?.type && Bp(e, t, n) === 0;
        },
        lessThan(e, t, n) {
          return e?.type === t?.type && Bp(e, t, n) < 0;
        },
        lessThanOrEqual(e, t, n) {
          return e?.type === t?.type && Bp(e, t, n) <= 0;
        },
        greaterThan(e, t, n) {
          return e?.type === t?.type && Bp(e, t, n) > 0;
        },
        greaterThanOrEqual(e, t, n) {
          return e?.type === t?.type && Bp(e, t, n) >= 0;
        },
        in(e, t, n) {
          return t?.type === `array` && t.value.some((t) => mE.equal(t, e, n));
        },
        indexOf(e, t, n) {
          return e?.type === `array` ? e.value.findIndex((e) => mE.equal(e, t, n)) : -1;
        },
        contains(e, t, n) {
          let r = zp(e),
            i = zp(t);
          return Qe(r) || Qe(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.includes(i));
        },
        startsWith(e, t, n) {
          let r = zp(e),
            i = zp(t);
          return Qe(r) || Qe(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.startsWith(i));
        },
        endsWith(e, t, n) {
          let r = zp(e),
            i = zp(t);
          return Qe(r) || Qe(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.endsWith(i));
        },
        length(e) {
          switch (e?.type) {
            case `array`:
              return e.value.length;
          }
          return 0;
        },
        stringify(e) {
          if (e === null) return `null`;
          switch (e.type) {
            case `array`:
              return `[${e.value.map(mE.stringify).join(`, `)}]`;
            case `boolean`:
            case `number`:
              return String(e.value);
            case `string`:
              return `'${e.value}'`;
            case `enum`:
              return `'${e.value}' /* Enum */`;
            case `color`:
              return `'${e.value}' /* Color */`;
            case `date`:
              return `'${e.value}' /* Date */`;
            case `richtext`:
              return `RichText`;
            case `vectorsetitem`:
              return `VectorSetItem`;
            case `responsiveimage`:
              return `ResponsiveImage`;
            case `file`:
              return `File`;
            case `link`:
              return z(e.value) ? `'${e.value}' /* Link */` : `Link`;
            case `object`:
              return `Object`;
            default:
              U(e);
          }
        },
      }),
      (hE = { type: `unknown`, isNullable: !0 }),
      (gE = class {
        constructor(e, t) {
          ((this.collection = e), (this.locale = t));
          let n = Hc(e);
          H(n, `Collection does not have properties`);
          let r = { id: { type: `string`, isNullable: !1 } },
            i = Object.entries(n);
          for (let [e, t] of i) {
            if (!t) continue;
            let n = t.type;
            (H(n !== `array`, `Array properties are not supported`),
              H(n !== `object`, `Object properties are not supported`),
              (r[e] = { type: n, isNullable: !0 }));
          }
          this.schema = r;
        }
        collection;
        locale;
        schema;
        indexes = [];
        getDatabaseItem(e, t) {
          let n = {},
            r = Number(t);
          for (let t in this.schema) {
            let i = e[t];
            if ($e(i)) continue;
            let a = this.schema[t];
            if (!Ze(a)) {
              if ((H(a.type !== `unknown`, `Invalid definition type`), a.type === `richtext`)) {
                n[t] = { type: a.type, value: { itemIndex: r, key: t } };
                continue;
              }
              n[t] = { type: a.type, value: i };
            }
          }
          return { pointer: t, data: n };
        }
        async resolveRichText(e) {
          let { itemIndex: t, key: n } = e,
            r = (await Vp(this.collection, this.locale))[t]?.[n];
          return bv.is(r) ? r.readMaybeAsync() : r;
        }
        async scanItems(e) {
          let t = await Vp(this.collection, this.locale),
            n = [];
          for (let r = 0; r < t.length; r++) {
            let i = Qf(e);
            i && (await i);
            let a = t[r];
            H(a, `Can't find collection item`);
            let o = String(r);
            n.push(this.getDatabaseItem(a, o));
          }
          return n;
        }
        async resolveItems(e, t) {
          let n = await Vp(this.collection, this.locale),
            r = [];
          for (let i of e) {
            let e = Qf(t);
            e && (await e);
            let a = n[Number(i)];
            (H(a, `Can't find collection item`), r.push(this.getDatabaseItem(a, i)));
          }
          return r;
        }
        compareItems(e, t) {
          return Number(e.pointer) - Number(t.pointer);
        }
      }),
      (_E = new Map()),
      (vE = new WeakMap()),
      (yE = `$r_`),
      (bE = new Map()),
      (xE = class {
        collections;
        priority;
        constructor(e, t, n) {
          ((this.collections = Qp(e, t)), (this.priority = qp(n)));
        }
        *resolveArrayValue(e) {
          return yield* rp(e.value.map((e) => this.resolveValue(e)));
        }
        *resolveObjectValue(e) {
          let t = {};
          for (let n in e.value) {
            let r = e.value[n];
            t[n] = this.resolveValue(r);
          }
          return yield* np(t);
        }
        richTextCache = new WeakMap();
        loadRichTextValue(e) {
          let t = e.value;
          H(Yp(t), `Rich text pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          H(n, `Can't find collection for rich text pointer`);
          let r = this.richTextCache.get(n) ?? new Map();
          this.richTextCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = n.resolveRichText(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadRichTextValue(e) {
          this.loadRichTextValue(e);
        }
        *resolveRichTextValue(e) {
          let t = this.loadRichTextValue(e);
          return nt(t) ? yield t : t;
        }
        vectorSetItemCache = new WeakMap();
        loadVectorSetItemValue(e) {
          let t = e.value;
          H(Zp(t), `Vector set item pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          (H(n, `Can't find collection for vector set item pointer`),
            H(n.resolveVectorSetItem, `Can't resolve vector set item pointer`));
          let r = this.vectorSetItemCache.get(n) ?? new Map();
          this.vectorSetItemCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = n.resolveVectorSetItem(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadVectorSetItemValue(e) {
          this.loadVectorSetItemValue(e);
        }
        *resolveVectorSetItemValue(e) {
          let t = this.loadVectorSetItemValue(e);
          return nt(t) ? yield t : t;
        }
        *resolveValue(e) {
          switch (e?.type) {
            case `array`:
              return yield* this.resolveArrayValue(e);
            case `object`:
              return yield* this.resolveObjectValue(e);
            case `richtext`:
              return yield* this.resolveRichTextValue(e);
            case `vectorsetitem`:
              return yield* this.resolveVectorSetItemValue(e);
          }
          return e?.value ?? null;
        }
      }),
      (SE = `index`),
      (CE = class extends Set {
        merge(e) {
          for (let t of e) this.add(t);
        }
        equals(e) {
          if (this === e) return !0;
          if (this.size !== e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        subsetOf(e) {
          if (this === e) return !0;
          if (this.size > e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        getHash() {
          let e = [];
          for (let t of this) e.push(t.id);
          return (e.sort((e, t) => e - t), K(this.name, ...e));
        }
      }),
      (wE = class {
        constructor(e, t, n) {
          ((this.id = e), (this.name = t), (this.data = n));
        }
        id;
        name;
        data;
        indexes = new EE();
        fields = new Q();
        fieldByName = new Map();
        addNamedField(e, t) {
          (this.fields.add(t), this.fieldByName.set(e, t));
        }
        getFieldByName(e) {
          return this.fieldByName.get(e);
        }
      }),
      (TE = class {
        constructor(e, t, n, r, i, a) {
          ((this.id = e),
            (this.data = t),
            (this.collection = n),
            (this.lookupNodes = r),
            (this.constraint = i),
            (this.ordering = a));
          for (let e in t.schema) {
            let t = n.getFieldByName(e);
            t && this.resolvedFields.add(t);
          }
        }
        id;
        data;
        collection;
        lookupNodes;
        constraint;
        ordering;
        resolvedFields = new Q();
      }),
      (EE = class extends CE {
        name = `Indexes`;
      }),
      (DE = class {
        constructor(e, t, n, r) {
          ((this.id = e), (this.name = t), (this.definition = n), (this.collection = r));
        }
        id;
        name;
        definition;
        collection;
        getValue(e) {
          H(this.name, `Can only get value of field with a name`);
          let t = e.data[this.name];
          return t ? this.wrapPointers(t) : null;
        }
        wrapPointers(e) {
          switch (e?.type) {
            case `array`:
              return { type: `array`, value: e.value.map((e) => this.wrapPointers(e)) };
            case `object`: {
              let t = {};
              for (let n in e.value) t[n] = this.wrapPointers(e.value[n]);
              return { type: `object`, value: t };
            }
            case `richtext`:
              return (
                H(this.collection, `Rich text field must have a collection`),
                { type: `richtext`, value: Jp(this.collection.data, e.value) }
              );
            case `vectorsetitem`:
              return (
                H(this.collection, `Vector set item field must have a collection`),
                { type: `vectorsetitem`, value: Xp(this.collection.data, e.value) }
              );
          }
          return e;
        }
      }),
      (Q = class extends CE {
        name = `Fields`;
      }),
      (OE = class {
        constructor(e, t = `asc`) {
          ((this.field = e), (this.direction = t));
        }
        field;
        direction;
        getHash() {
          return K(`OrderingField`, this.field.id, this.direction);
        }
      }),
      (kE = class {
        fields = [];
        constructor(e) {
          e && this.merge(e);
        }
        get length() {
          return this.fields.length;
        }
        getHash() {
          return K(`Ordering`, ...this.fields);
        }
        push(e) {
          this.fields.push(e);
        }
        merge(e) {
          this.fields.push(...e.fields);
        }
        equals(e) {
          return this === e || (this.length === e.length && this.getHash() === e.getHash());
        }
        providedByFields(e) {
          for (let { field: t } of this.fields) if (!e.has(t) && t.name !== SE) return !1;
          return !0;
        }
      }),
      (AE = class {
        constructor(e, t) {
          ((this.ordering = e), (this.resolvedFields = t));
        }
        ordering;
        resolvedFields;
        getHash() {
          return K(`RequiredProps`, this.ordering, this.resolvedFields);
        }
        get isMinimal() {
          return this.ordering.length === 0 && this.resolvedFields.size === 0;
        }
        canProvide(e) {
          return this.canProvideOrdering(e) && this.canProvideResolvedFields(e);
        }
        canProvideOrdering(e) {
          return this.ordering.length === 0 || e.canProvideOrdering(this.ordering);
        }
        canProvideResolvedFields(e) {
          return this.resolvedFields.size === 0 || e.canProvideResolvedFields(this.resolvedFields);
        }
      }),
      (jE = class e {
        constructor(e) {
          this.parent = e;
        }
        parent;
        node;
        takeNode() {
          let e = this.node;
          return (H(e, `Node is missing`), (this.node = void 0), e);
        }
        setNode(e) {
          (H(!this.node, `Node already set`), (this.node = e));
        }
        ordering;
        setOrdering(e) {
          this.ordering = e;
        }
        fields = [];
        fieldsByName = new Map();
        push() {
          return new e(this);
        }
        replace() {
          return new e(this.parent);
        }
        addField(e) {
          this.fields.push(e);
          let t = this.fieldsByName.get(e.name);
          t ? t.push(e) : this.fieldsByName.set(e.name, [e]);
        }
        addFieldsFromScope(e) {
          for (let t of e.fields) this.fields.push(t);
          for (let [t, n] of e.fieldsByName) {
            let e = this.fieldsByName.get(t);
            e ? e.push(...n) : this.fieldsByName.set(t, n.slice());
          }
        }
        resolveField(e, t) {
          let n = this.fieldsByName.get(e);
          if (n) {
            let e;
            for (let r of n)
              if (!(t && r.collectionName !== t)) {
                if (e) throw Error(`Ambiguous fields`);
                e = r;
              }
            if (e) return e;
          }
          return this.parent?.resolveField(e, t);
        }
        has(e) {
          return this.fieldsByName.get(e.name)?.includes(e) ? !0 : (this.parent?.has(e) ?? !1);
        }
        getRequiredOrdering() {
          return this.ordering ?? new kE();
        }
        getRequiredResolvedFields() {
          let e = new Q();
          for (let { field: t } of this.fields) t.collection && e.add(t);
          return e;
        }
        getRequiredProps() {
          return new AE(this.getRequiredOrdering(), this.getRequiredResolvedFields());
        }
        getNamedFields() {
          let e = {};
          for (let { name: t, field: n } of this.fields) e[t] = n;
          return e;
        }
        getSingleField() {
          H(this.fields.length === 1, `Scope must contain exactly one field`);
          let e = this.fields[0];
          return (H(e, `Field must exist`), e.field);
        }
      }),
      (ME = 1e3),
      ($ = class e {
        constructor(e) {
          this.network = e;
        }
        network;
        static estimate(t, n) {
          let r = nm(),
            i = rm(),
            a = t * r + n / i;
          return new e(a);
        }
        static max(t, n) {
          let r = Math.max(t.network, n.network);
          return new e(r);
        }
        static compare(e, t) {
          return e.network < t.network ? -1 : +(e.network > t.network);
        }
        add(e) {
          return ((this.network += e.network), this);
        }
        toString() {
          return `${this.network}ms`;
        }
      }),
      (NE = class {
        pointers = new Map();
        values = new Map();
        getKey() {
          let e = [];
          for (let [t, n] of this.pointers) e.push(`${t.id}-${n}`);
          return e.sort().join(`-`);
        }
        addValue(e, t) {
          this.values.set(e, t);
        }
        getValue(e) {
          return this.values.get(e) ?? null;
        }
        mergeValues(e) {
          for (let [t, n] of e.values) this.addValue(t, n);
        }
        addPointer(e, t) {
          this.pointers.set(e, t);
        }
        getPointer(e) {
          return this.pointers.get(e);
        }
        mergePointers(e) {
          for (let [t, n] of e.pointers) this.addPointer(t, n);
        }
        merge(e) {
          (this.mergeValues(e), this.mergePointers(e));
        }
      }),
      (PE = class e {
        constructor(e, t = []) {
          ((this.fields = e), (this.tuples = t));
        }
        fields;
        tuples;
        push(e) {
          this.tuples.push(e);
        }
        filter(t) {
          let n = this.tuples.filter(t);
          return new e(this.fields, n);
        }
        map(t, n) {
          let r = this.tuples.map(n);
          return new e(t, r);
        }
        sort(t) {
          let n = Array.from(this.tuples).sort(t);
          return new e(this.fields, n);
        }
        slice(t, n) {
          let r = this.tuples.slice(t, n);
          return new e(this.fields, r);
        }
        union(t) {
          let n = new Q();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            (r.add(t), i.push(e));
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) || i.push(e);
          }
          return i;
        }
        intersection(t) {
          let n = new Q();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            r.add(t);
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) && i.push(e);
          }
          return i;
        }
      }),
      (FE = class {
        constructor(e) {
          this.isSynchronous = e;
        }
        isSynchronous;
      }),
      (IE = class extends FE {
        group;
        getGroup() {
          return (H(this.group, `Node must be in a group`), this.group);
        }
        setGroup(e) {
          (H(!this.group, `Node is already in a group`), (this.group = e));
        }
        evaluateSync() {
          return $f(this.evaluate(void 0));
        }
        evaluateAsync(e) {
          return ep(this.evaluate(void 0), void 0, e);
        }
      }),
      (LE = class {
        constructor(e, t) {
          ((this.input = e), (this.field = t));
        }
        input;
        field;
        getHash() {
          return K(`ProjectionField`, this.input, this.field.id);
        }
      }),
      (RE = class e extends IE {
        constructor(e, t, n) {
          let r = e.isSynchronous;
          for (let e of t) r &&= e.input.isSynchronous;
          (super(r),
            (this.input = e),
            (this.projections = t),
            (this.passthrough = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        projections;
        passthrough;
        inputGroup;
        getHash() {
          return K(`RelationalProject`, this.inputGroup.id, ...this.projections, this.passthrough);
        }
        getOutputFields() {
          let e = new Q();
          e.merge(this.passthrough);
          for (let t of this.projections) e.add(t.field);
          return e;
        }
        canProvideOrdering(e) {
          let t = new Q();
          for (let e of this.projections) t.add(e.field);
          for (let { field: n } of e.fields) if (t.has(n)) return !1;
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          for (let e of this.projections) (t.merge(e.input.referencedFields), t.delete(e.field));
          return new AE(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = new $(0);
          for (let t of this.projections) {
            let n = t.input.optimize(e);
            i = $.max(i, n);
          }
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.projections.map((e) => new LE(e.input.getOptimized(), e.field));
          return new e(r, i, this.passthrough);
        }
        *evaluate(e) {
          let t = this.getOutputFields(),
            n = yield* this.input.evaluate(e),
            r = yield* rp(
              n.tuples.map((t) =>
                rp(
                  this.projections.map((n) => np({ field: n.field, value: n.input.evaluate(e, t) }))
                )
              )
            );
          return n.map(t, (e, t) => {
            let n = new NE();
            n.mergePointers(e);
            for (let t of this.passthrough) {
              let r = e.getValue(t);
              n.addValue(t, r);
            }
            let i = r[t];
            H(i, `Projections must exist`);
            for (let { field: e, value: t } of i) n.addValue(e, t);
            return n;
          });
        }
      }),
      (zE = { type: 0 }),
      (BE = class extends FE {
        constructor(e, t, n) {
          (super(n),
            (this.referencedFields = e),
            (this.referencedOuterFields = t),
            (this.isSynchronous = n));
        }
        referencedFields;
        referencedOuterFields;
        isSynchronous;
        evaluateSync() {
          return $f(this.evaluate(void 0, void 0));
        }
        evaluateAsync() {
          return ep(this.evaluate(void 0, void 0));
        }
      }),
      (VE = { type: 0 }),
      (HE = class {
        constructor(e, t) {
          ((this.when = e), (this.then = t));
        }
        when;
        then;
        getHash() {
          return K(`CaseCondition`, this.when, this.then);
        }
      }),
      (UE = class e extends BE {
        constructor(e, t, n) {
          let r = new Q(),
            i = new Q(),
            a = !0;
          e &&
            (r.merge(e.referencedFields),
            i.merge(e.referencedOuterFields),
            (a &&= e.isSynchronous));
          for (let { when: e, then: n } of t)
            (r.merge(e.referencedFields),
              i.merge(e.referencedOuterFields),
              (a &&= e.isSynchronous),
              r.merge(n.referencedFields),
              i.merge(n.referencedOuterFields),
              (a &&= n.isSynchronous));
          (n &&
            (r.merge(n.referencedFields),
            i.merge(n.referencedOuterFields),
            (a &&= n.isSynchronous)),
            super(r, i, a),
            (this.input = e),
            (this.conditions = t),
            (this.otherwise = n));
        }
        input;
        conditions;
        otherwise;
        definition = { type: `unknown`, isNullable: !0 };
        getHash() {
          return K(`ScalarCase`, this.input, ...this.conditions, this.otherwise);
        }
        optimize(e) {
          this.input?.optimize(e);
          for (let t of this.conditions) (t.when.optimize(e), t.then.optimize(e));
          return (this.otherwise?.optimize(e), new $(0));
        }
        getOptimized() {
          let t = this.input?.getOptimized(),
            n = this.conditions.map((e) => new HE(e.when.getOptimized(), e.then.getOptimized())),
            r = this.otherwise?.getOptimized();
          return new e(t, n, r);
        }
        *evaluate(e, t) {
          let {
            input: n,
            conditions: r,
            otherwise: i,
          } = yield* np({
            input: this.input?.evaluate(e, t) ?? null,
            conditions: rp(
              this.conditions.map((n) =>
                np({ when: n.when.evaluate(e, t), then: n.then.evaluate(e, t) })
              )
            ),
            otherwise: this.otherwise?.evaluate(e, t) ?? null,
          });
          if (this.input) {
            for (let { when: e, then: t } of r) if (mE.equal(n, e, VE)) return t;
          } else for (let { when: e, then: t } of r) if (hp(e)) return t;
          return i;
        }
      }),
      (WE = class {
        constructor(e, t, n) {
          ((this.normalizer = e), (this.query = t), (this.locale = n));
        }
        normalizer;
        query;
        locale;
        collectionId = 0;
        indexId = 0;
        fieldId = 0;
        subqueries = [];
        build() {
          let e = new jE();
          return this.buildQuery(e, this.query);
        }
        buildQuery(e, t) {
          let n = { type: `Select`, ...t };
          return this.buildSelect(e, n);
        }
        buildSelect(e, t) {
          let n = this.buildFrom(e, t.from),
            r = n.getRequiredOrdering();
          if (t.where) {
            let e = n.takeNode(),
              r = this.buildExpression(n, t.where),
              i = this.normalizer.newRelationalFilter(e, r);
            n.setNode(i);
          }
          let i = [],
            a = new Q(),
            o;
          if (t.orderBy) {
            o = new kE();
            for (let e of t.orderBy)
              if (e.type === `Identifier`) {
                let t = n.resolveField(e.name, e.collection);
                if (Ze(t)) continue;
                a.add(t.field);
                let r = new OE(t.field, e.direction);
                o.push(r);
              } else {
                let t = this.buildExpression(n, e),
                  r = new DE(tm(this.fieldId++), void 0, t.definition, void 0),
                  a = new LE(t, r);
                i.push(a);
                let s = new OE(r, e.direction);
                o.push(s);
              }
            o.merge(r);
          } else o = r;
          let s = this.buildSelectList(n, t.select, a, i);
          if ((s.setOrdering(o), t.offset)) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.offset),
              i = this.normalizer.newRelationalOffset(n, r, o);
            s.setNode(i);
          }
          if (t.limit) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.limit),
              i = this.normalizer.newRelationalLimit(n, r, o);
            s.setNode(i);
          }
          return s;
        }
        buildSelectList(e, t, n, r) {
          let i = e.push(),
            a = new Q(n),
            o = [...r];
          for (let n of t)
            if (n.type === `Identifier`) {
              let t = e.resolveField(n.name, n.collection);
              if (Ze(t)) continue;
              (a.add(t.field), i.addField({ ...t, name: n.alias ?? t.name }));
            } else {
              let t = this.buildExpression(e, n);
              H(n.alias, `Subqueries should have an alias`);
              let r = tm(this.fieldId++),
                a = n.alias,
                s = new DE(r, a, t.definition, void 0),
                c = new LE(t, s);
              (o.push(c), i.addField({ field: s, name: a }));
            }
          let s = e.takeNode(),
            c = this.normalizer.newRelationalProject(s, o, a);
          return (i.setNode(c), i);
        }
        buildFrom(e, t) {
          switch (t.type) {
            case `Collection`:
              return this.buildCollection(e, t);
            case `LeftJoin`:
              return this.buildJoin(e, t);
            default:
              U(t, `Unsupported from type`);
          }
        }
        buildCollection(e, t) {
          let n = e.push(),
            r = Wp(t.data, this.locale),
            i = t.alias,
            a = new wE($p(this.collectionId++), i, r);
          for (let [e, t] of Object.entries(r.schema)) {
            let r = new DE(tm(this.fieldId++), e, t, a);
            (n.addField({ field: r, name: e, collectionName: i }), a.addNamedField(e, r));
          }
          {
            let e = new DE(tm(this.fieldId++), SE, { type: `number`, isNullable: !1 }, a);
            n.addField({ field: e, name: SE, collectionName: i });
            let t = new kE(),
              r = new OE(e);
            (t.push(r), n.setOrdering(t));
          }
          for (let e of r.indexes) {
            let t = [];
            for (let r of e.fields) {
              let e = this.buildExpression(n, r);
              t.push(e);
            }
            let r;
            e.where && (r = this.buildExpression(n, e.where));
            let i = new kE(),
              o = new TE(em(this.indexId++), e, a, t, r, i);
            a.indexes.add(o);
          }
          let o = this.normalizer.newRelationalScan(a);
          return (n.setNode(o), n);
        }
        buildJoin(e, t) {
          let n = this.buildFrom(e, t.left),
            r = this.buildFrom(e, t.right),
            i = new kE(),
            a = n.getRequiredOrdering();
          i.merge(a);
          let o = r.getRequiredOrdering();
          i.merge(o);
          let s = e.push();
          (s.addFieldsFromScope(n), s.addFieldsFromScope(r), s.setOrdering(i));
          let c = this.buildExpression(s, t.constraint),
            l = n.takeNode(),
            u = r.takeNode(),
            d;
          switch (t.type) {
            case `LeftJoin`:
              d = this.normalizer.newRelationalLeftJoin(l, u, c);
              break;
            default:
              U(t.type, `Unsupported join type`);
          }
          return (s.setNode(d), s);
        }
        buildExpression(e, t) {
          switch (t.type) {
            case `Identifier`:
              return this.buildIdentifier(e, t);
            case `LiteralValue`:
              return this.buildLiteralValue(t);
            case `FunctionCall`:
              return this.buildFunctionCall(e, t);
            case `Case`:
              return this.buildCase(e, t);
            case `UnaryOperation`:
              return this.buildUnaryOperation(e, t);
            case `BinaryOperation`:
              return this.buildBinaryOperation(e, t);
            case `TypeCast`:
              return this.buildTypeCast(e, t);
            case `Select`:
              throw Error(`Subqueries are only supported inside subquery function calls`);
            default:
              U(t, `Unsupported expression`);
          }
        }
        buildIdentifier(e, t) {
          let n = e.resolveField(t.name, t.collection);
          if (n) {
            let e = !1;
            for (let t of this.subqueries)
              e
                ? t.referencedOuterFields.add(n.field)
                : ((e = t.inScope.has(n)), e && t.referencedFields.add(n.field));
            return this.normalizer.newScalarVariable(n.field, e);
          }
          return this.normalizer.newScalarConstant(hE, null);
        }
        buildLiteralValue(e) {
          let t = mE.parse(e.value);
          return this.normalizer.newScalarConstant(hE, t);
        }
        buildFunctionCall(e, t) {
          let n = (n) => {
              let r = t.arguments[n];
              return (H(r, `Missing argument`), this.buildExpression(e, r));
            },
            r = t.functionName;
          switch (r) {
            case `CONTAINS`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarContains(e, t);
            }
            case `STARTS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarStartsWith(e, t);
            }
            case `ENDS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarEndsWith(e, t);
            }
            case `LENGTH`: {
              let e = n(0);
              return this.normalizer.newScalarLength(e);
            }
            case `INDEX_OF`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIndexOf(e, t);
            }
            case `ARRAY`: {
              let n = t.arguments[0];
              return (
                H(n, `Missing argument`),
                H(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryArray(e, n)
              );
            }
            case `FLAT_ARRAY`: {
              let n = t.arguments[0];
              return (
                H(n, `Missing argument`),
                H(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryFlatArray(e, n)
              );
            }
            case `INTERSECT`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIntersection(e, t);
            }
            default:
              U(r, `Unsupported function name`);
          }
        }
        buildSubqueryArray(e, t) {
          try {
            let n = new GE(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getNamedFields(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildSubqueryFlatArray(e, t) {
          try {
            let n = new GE(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getSingleField(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarFlatArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildCase(e, t) {
          let n;
          t.value && (n = this.buildExpression(e, t.value));
          let r = t.conditions.map(
              (t) => new HE(this.buildExpression(e, t.when), this.buildExpression(e, t.then))
            ),
            i;
          return (
            t.else && (i = this.buildExpression(e, t.else)),
            this.normalizer.newScalarCase(n, r, i)
          );
        }
        buildUnaryOperation(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.operator) {
            case `not`:
              return this.normalizer.newScalarNot(n);
            default:
              U(t.operator, `Unsupported unary operator`);
          }
        }
        buildBinaryOperation(e, t) {
          let n = this.buildExpression(e, t.left),
            r = this.buildExpression(e, t.right);
          switch (t.operator) {
            case `and`:
              return this.normalizer.newScalarAnd(n, r);
            case `or`:
              return this.normalizer.newScalarOr(n, r);
            case `==`:
              return this.normalizer.newScalarEquals(n, r);
            case `!=`:
              return this.normalizer.newScalarNotEquals(n, r);
            case `<`:
              return this.normalizer.newScalarLessThan(n, r);
            case `<=`:
              return this.normalizer.newScalarLessThanOrEqual(n, r);
            case `>`:
              return this.normalizer.newScalarGreaterThan(n, r);
            case `>=`:
              return this.normalizer.newScalarGreaterThanOrEqual(n, r);
            case `in`:
              return this.normalizer.newScalarIn(n, r);
            default:
              U(t.operator, `Unsupported binary operator`);
          }
        }
        buildTypeCast(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.dataType) {
            case `BOOLEAN`:
              return this.normalizer.newScalarCast(n, { type: `boolean`, isNullable: !0 });
            case `DATE`:
              return this.normalizer.newScalarCast(n, { type: `date`, isNullable: !0 });
            case `NUMBER`:
              return this.normalizer.newScalarCast(n, { type: `number`, isNullable: !0 });
            case `STRING`:
              return this.normalizer.newScalarCast(n, { type: `string`, isNullable: !0 });
            default:
              throw Error(`Unsupported data type`);
          }
        }
      }),
      (GE = class {
        constructor(e) {
          this.inScope = e;
        }
        inScope;
        referencedFields = new Q();
        referencedOuterFields = new Q();
      }),
      (KE = class e extends IE {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.predicate = t),
            (this.inputGroup = e.getGroup()));
        }
        input;
        predicate;
        inputGroup;
        getHash() {
          return K(`RelationalFilter`, this.inputGroup.id, this.predicate);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          return (t.merge(this.predicate.referencedFields), new AE(e.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.predicate.optimize(e);
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.predicate.getOptimized();
          return new e(r, i);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e),
            n = yield* rp(t.tuples.map((t) => this.predicate.evaluate(e, t)));
          return t.filter((e, t) => hp(n[t] ?? null));
        }
      }),
      (qE = class e extends IE {
        constructor(e, t) {
          (super(!1), (this.index = e), (this.query = t));
        }
        index;
        query;
        getHash() {
          return K(`RelationalIndexLookup`, this.index.id, ...this.query);
        }
        getOutputFields() {
          return this.index.collection.fields;
        }
        canProvideOrdering(e) {
          return e.equals(this.index.ordering);
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.index.resolvedFields);
        }
        optimize() {
          let e = this.query.every((e) => e.type === `All`);
          return $.estimate(1, e ? 100 * ME : 50 * ME);
        }
        getOptimized() {
          return new e(this.index, this.query);
        }
        *evaluate() {
          let e = this.index,
            t = e.collection,
            n = this.getOutputFields(),
            r = yield e.data.lookupItems(this.query, Xf()),
            i = Xf(),
            a = [];
          for (let n of r) {
            let r = Qf(i);
            r && (yield r);
            let o = new NE();
            for (let r of e.resolvedFields) {
              let e = r.getValue(n);
              (o.addPointer(t, n.pointer), o.addValue(r, e));
            }
            a.push(o);
          }
          return new PE(n, a);
        }
      }),
      (JE = class e extends IE {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        left;
        right;
        leftGroup;
        rightGroup;
        getHash() {
          return K(`RelationalIntersection`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new Q(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new AE(new kE(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return $.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* np({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.intersection(n);
        }
      }),
      (YE = class e extends IE {
        constructor(e) {
          (super(!1), (this.collection = e));
        }
        collection;
        getHash() {
          return K(`RelationalScan`, this.collection.id);
        }
        getOutputFields() {
          return this.collection.fields;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.collection.fields);
        }
        optimize() {
          return $.estimate(1, 200 * ME);
        }
        getOptimized() {
          return new e(this.collection);
        }
        *evaluate() {
          let e = this.collection,
            t = this.getOutputFields(),
            n = yield e.data.scanItems(Xf()),
            r = Xf(),
            i = [];
          for (let a of n) {
            let n = Qf(r);
            n && (yield n);
            let o = new NE();
            for (let n of t) {
              let t = n.getValue(a);
              (o.addPointer(e, a.pointer), o.addValue(n, t));
            }
            i.push(o);
          }
          return new PE(t, i);
        }
      }),
      (XE = class e extends IE {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        left;
        right;
        leftGroup;
        rightGroup;
        getHash() {
          return K(`RelationalUnion`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new Q(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new AE(new kE(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return $.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* np({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.union(n);
        }
      }),
      (ZE = class e extends BE {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return K(`ScalarAnd`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* np({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: hp(n) && hp(r) };
        }
      }),
      (QE = class extends BE {
        constructor(e, t) {
          let n = new Q(),
            r = new Q();
          (super(n, r, !0), (this.definition = e), (this.value = t));
        }
        definition;
        value;
        getHash() {
          return K(`ScalarConstant`, this.definition, this.value);
        }
        optimize() {
          return new $(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate() {
          return this.value;
        }
      }),
      ($E = { type: 0 }),
      (eD = class e extends BE {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return K(`ScalarContains`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* np({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: mE.contains(n, r, $E) };
        }
      }),
      (tD = { type: 0 }),
      (nD = class e extends BE {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return K(`ScalarEndsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* np({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: mE.endsWith(n, r, tD) };
        }
      }),
      (rD = class e extends BE {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return K(`ScalarEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* np({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: mE.equal(n, r, zE) };
        }
      }),
      (iD = class e extends BE {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return K(`ScalarGreaterThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* np({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: mE.greaterThan(n, r, zE) };
        }
      }),
      (aD = class e extends BE {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return K(`ScalarGreaterThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* np({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: mE.greaterThanOrEqual(n, r, zE) };
        }
      }),
      (oD = class e extends BE {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return K(`ScalarLessThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* np({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: mE.lessThan(n, r, zE) };
        }
      }),
      (sD = class e extends BE {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return K(`ScalarLessThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* np({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: mE.lessThanOrEqual(n, r, zE) };
        }
      }),
      (cD = class e extends BE {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return K(`ScalarNotEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* np({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !mE.equal(n, r, zE) };
        }
      }),
      (lD = class e extends BE {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return K(`ScalarOr`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* np({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: hp(n) || hp(r) };
        }
      }),
      (uD = { type: 0 }),
      (dD = class e extends BE {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return K(`ScalarStartsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* np({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: mE.startsWith(n, r, uD) };
        }
      }),
      (fD = class {
        constructor(e) {
          ((this.normalizer = e), (this.memo = e.memo));
        }
        normalizer;
        memo;
        explore(e) {
          let t = e.getGroup();
          if (e instanceof KE) {
            if (e.predicate instanceof ZE) {
              let n = new JE(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
            if (e.predicate instanceof lD) {
              let n = new XE(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
          }
          if (e instanceof YE)
            for (let n of e.collection.indexes) {
              if (n.constraint) continue;
              let e = new qE(n, im(n.lookupNodes.length));
              this.memo.addRelational(e, t);
            }
          if (e instanceof KE) {
            for (let n of e.inputGroup.nodes)
              if (n instanceof YE)
                for (let r of n.collection.indexes) {
                  if (
                    e.predicate instanceof rD &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof QE &&
                    r.data.supportedLookupTypes.includes(`Equals`)
                  ) {
                    let n = im(r.lookupNodes.length);
                    n[0] = { type: `Equals`, value: e.predicate.right.value };
                    let i = new qE(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof cD &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof QE &&
                    r.data.supportedLookupTypes.includes(`NotEquals`)
                  ) {
                    let n = im(r.lookupNodes.length);
                    n[0] = { type: `NotEquals`, value: e.predicate.right.value };
                    let i = new qE(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof oD &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof QE &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = im(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new qE(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof sD &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof QE &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = im(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new qE(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof iD &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof QE &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = im(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new qE(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof aD &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof QE &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = im(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new qE(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof eD &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof QE &&
                    r.data.supportedLookupTypes.includes(`Contains`)
                  ) {
                    let n = im(r.lookupNodes.length);
                    n[0] = { type: `Contains`, value: e.predicate.target.value };
                    let i = new qE(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof dD &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof QE &&
                    r.data.supportedLookupTypes.includes(`StartsWith`)
                  ) {
                    let n = im(r.lookupNodes.length);
                    n[0] = { type: `StartsWith`, value: e.predicate.target.value };
                    let i = new qE(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof nD &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof QE &&
                    r.data.supportedLookupTypes.includes(`EndsWith`)
                  ) {
                    let n = im(r.lookupNodes.length);
                    n[0] = { type: `EndsWith`, value: e.predicate.target.value };
                    let i = new qE(r, n);
                    this.memo.addRelational(i, t);
                  }
                }
          }
        }
      }),
      (pD = class {
        constructor(e, t) {
          ((this.id = e), (this.relational = t));
        }
        id;
        relational;
        nodes = [];
        winners = new Map();
        addNode(e) {
          (this.nodes.push(e), e.setGroup(this));
        }
        getWinner(e) {
          let t = e.getHash(),
            n = this.winners.get(t);
          if (n) return n;
          let r = new mD();
          return (this.winners.set(t, r), r);
        }
        getOptimized(e) {
          let t = this.getWinner(e);
          H(t.node, `Group not optimized`);
          let n = t.node.getOptimized(e);
          return (n.setGroup(this), n);
        }
      }),
      (mD = class {
        node;
        cost = new $(1 / 0);
        nodes = [];
        update(e, t) {
          (this.nodes.push(e), $.compare(t, this.cost) < 0 && ((this.node = e), (this.cost = t)));
        }
      }),
      (hD = class {
        constructor(e) {
          this.outputFields = e;
        }
        outputFields;
        isCompatible(e) {
          return this.outputFields.equals(e.outputFields);
        }
      }),
      (gD = class {
        nodes = new Map();
        groups = [];
        addGroup(e) {
          let t = new pD(am(this.groups.length), e);
          return (this.groups.push(t), t);
        }
        addRelational(e, t) {
          let n = e.getHash(),
            r = this.nodes.get(n);
          if (r) return r;
          this.nodes.set(n, e);
          let i = new hD(e.getOutputFields());
          return (
            (t ??= this.addGroup(i)),
            t.addNode(e),
            H(i.isCompatible(t.relational), `Group has inconsistent relational props`),
            e
          );
        }
        addScalar(e) {
          let t = e.getHash();
          return this.nodes.get(t) || (this.nodes.set(t, e), e);
        }
      }),
      (_D = class e extends IE {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous && n.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.constraint = n),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        left;
        right;
        constraint;
        leftGroup;
        rightGroup;
        getHash() {
          return K(`RelationalLeftJoin`, this.leftGroup.id, this.rightGroup.id, this.constraint);
        }
        getOutputFields() {
          let e = new Q();
          return (
            e.merge(this.leftGroup.relational.outputFields),
            e.merge(this.rightGroup.relational.outputFields),
            e
          );
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e, t) {
          let n = new Q(),
            r = e.relational.outputFields;
          for (let e of t.resolvedFields) r.has(e) && n.add(e);
          for (let e of this.constraint.referencedFields) r.has(e) && n.add(e);
          return new AE(new kE(), n);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = e.optimizeGroup(this.rightGroup, i),
            o = this.constraint.optimize(e);
          return $.max($.max(r, a), o);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = this.rightGroup.getOptimized(i),
            o = this.constraint.getOptimized();
          return new e(r, a, o);
        }
        *evaluateScalarEquals(e, t, n, r, i) {
          let a = new Map();
          for (let e of t.tuples) {
            let t = yield* r.evaluate(i, e),
              n = JSON.stringify(t?.value ?? null),
              o = a.get(n) ?? [];
            (o.push(e), a.set(n, o));
          }
          let o = new PE(this.getOutputFields());
          for (let t of e.tuples) {
            let e = yield* n.evaluate(i, t),
              r = JSON.stringify(e?.value ?? null),
              s = a.get(r) ?? [];
            if (s.length === 0) o.push(t);
            else
              for (let e of s) {
                let n = new NE();
                (n.merge(t), n.merge(e), o.push(n));
              }
          }
          return o;
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* np({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          if (this.constraint instanceof rD) {
            if (
              this.constraint.left.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.right.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.left,
                this.constraint.right,
                e
              );
            if (
              this.constraint.right.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.left.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.right,
                this.constraint.left,
                e
              );
          }
          let r = new PE(this.getOutputFields());
          for (let i of t.tuples) {
            let t = !1;
            for (let a of n.tuples) {
              let n = new NE();
              (n.merge(i),
                n.merge(a),
                hp(yield* this.constraint.evaluate(e, n)) && (r.push(n), (t = !0)));
            }
            t || r.push(i);
          }
          return r;
        }
      }),
      (vD = class e extends IE {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.limit = t),
            (this.ordering = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        limit;
        ordering;
        inputGroup;
        getHash() {
          return K(`RelationalLimit`, this.inputGroup.id, this.limit);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          return (t.merge(this.limit.referencedFields), new AE(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.limit.optimize(e);
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.limit.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, limit: n } = yield* np({
              input: this.input.evaluate(e),
              limit: this.limit.evaluate(e, void 0),
            }),
            r = Op(n) ?? 1 / 0;
          return r === 1 / 0 ? t : t.slice(0, r);
        }
      }),
      (yD = class e extends IE {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.offset = t),
            (this.ordering = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        offset;
        ordering;
        inputGroup;
        getHash() {
          return K(`RelationalOffset`, this.inputGroup.id, this.offset);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          return (t.merge(this.offset.referencedFields), new AE(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.offset.optimize(e);
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.offset.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, offset: n } = yield* np({
              input: this.input.evaluate(e),
              offset: this.offset.evaluate(e, void 0),
            }),
            r = Op(n) ?? 0;
          return r === 0 ? t : t.slice(r);
        }
      }),
      (bD = class e extends BE {
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.namedFields = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            (this.inputGroup = e.getGroup()));
          let a = {},
            o = Object.entries(t);
          for (let [e, t] of o) a[e] = t.definition;
          this.definition = {
            type: `array`,
            isNullable: !1,
            definition: { type: `object`, isNullable: !1, definitions: a },
          };
        }
        input;
        namedFields;
        ordering;
        referencedFields;
        referencedOuterFields;
        inputGroup;
        definition;
        getHash() {
          let e = {},
            t = Object.entries(this.namedFields);
          for (let [n, r] of t) e[n] = r.id;
          return K(
            `ScalarArray`,
            this.inputGroup.id,
            e,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new Q(),
            t = Object.values(this.namedFields);
          for (let n of t) Ze(n.collection) || e.add(n);
          return new AE(this.ordering, e);
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new $(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps(),
            n = this.inputGroup.getOptimized(t);
          return new e(
            n,
            this.namedFields,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new NE();
          (e && n.merge(e), t && n.merge(t));
          let r = yield* this.input.evaluate(n),
            i = Object.entries(this.namedFields);
          return {
            type: `array`,
            value: r.tuples.map((e) => {
              let t = {};
              for (let [n, r] of i) t[n] = e.getValue(r);
              return { type: `object`, value: t };
            }),
          };
        }
      }),
      (xD = class e extends BE {
        constructor(e, t) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e),
            (this.definition = t),
            H(t.isNullable, `Unsupported non-nullable cast`));
        }
        input;
        definition;
        getHash() {
          return K(`ScalarCast`, this.input, this.definition);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t, this.definition);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return mE.cast(n, this.definition);
        }
      }),
      (SD = class e extends BE {
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.field = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            (this.inputGroup = e.getGroup()),
            (this.definition = { type: `array`, isNullable: !1, definition: t.definition }));
        }
        input;
        field;
        ordering;
        referencedFields;
        referencedOuterFields;
        inputGroup;
        definition;
        getHash() {
          return K(
            `ScalarFlatArray`,
            this.inputGroup.id,
            this.field.id,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new Q();
          return (Ze(this.field.collection) || e.add(this.field), new AE(this.ordering, e));
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new $(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps(),
            n = this.inputGroup.getOptimized(t);
          return new e(
            n,
            this.field,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new NE();
          return (
            e && n.merge(e),
            t && n.merge(t),
            {
              type: `array`,
              value: (yield* this.input.evaluate(n)).tuples.map((e) => e.getValue(this.field)),
            }
          );
        }
      }),
      (CD = { type: 0 }),
      (wD = class e extends BE {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return K(`ScalarIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* np({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: mE.in(n, r, CD) };
        }
      }),
      (TD = { type: 1 }),
      (ED = class e extends BE {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `number`, isNullable: !1 };
        getHash() {
          return K(`ScalarIndexOf`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* np({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `number`, value: mE.indexOf(n, r, TD) };
        }
      }),
      (DD = class extends Error {}),
      (OD = class e extends BE {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = {
          type: `array`,
          definition: { type: `string`, isNullable: !1 },
          isNullable: !1,
        };
        getHash() {
          return K(`ScalarIntersection`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* np({
              left: this.left.evaluate(e, t),
              right: this.right.evaluate(e, t),
            }),
            i = sm(n),
            a = sm(r),
            o = [],
            s = i.size < a.size ? i : a,
            c = s === i ? a : i;
          for (let e of s) c.has(e) && o.push({ type: `string`, value: e });
          return { type: `array`, value: o };
        }
      }),
      (kD = class e extends BE {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), (this.input = e));
        }
        input;
        definition = { type: `number`, isNullable: !1 };
        getHash() {
          return K(`ScalarLength`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return { type: `number`, value: mE.length(n) };
        }
      }),
      (AD = class e extends BE {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), (this.input = e));
        }
        input;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return K(`ScalarNot`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          return { type: `boolean`, value: !hp(yield* this.input.evaluate(e, t)) };
        }
      }),
      (jD = { type: 0 }),
      (MD = class e extends BE {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return K(`ScalarNotIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* np({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !mE.in(n, r, jD) };
        }
      }),
      (ND = class extends BE {
        constructor(e, t) {
          H(e.name !== SE, `Invalid field name`);
          let n = new Q(),
            r = new Q();
          (t ? r.add(e) : n.add(e),
            super(n, r, !0),
            (this.field = e),
            (this.isOuterField = t),
            (this.definition = e.definition));
        }
        field;
        isOuterField;
        definition;
        getHash() {
          return K(`ScalarVariable`, this.field.id, this.isOuterField);
        }
        optimize() {
          return new $(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate(e, t) {
          return this.isOuterField
            ? (H(e, `Context must exist`), e.getValue(this.field))
            : (H(t, `Tuple must exist`), t.getValue(this.field));
        }
      }),
      (PD = class {
        constructor(e) {
          this.memo = e;
        }
        memo;
        finishRelational(e) {
          return this.memo.addRelational(e);
        }
        newRelationalScan(e) {
          let t = new YE(e);
          return this.finishRelational(t);
        }
        newRelationalIndexLookup(e, t) {
          let n = new qE(e, t);
          return this.finishRelational(n);
        }
        newRelationalLeftJoin(e, t, n) {
          let r = new _D(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalRightJoin(e, t, n) {
          return this.newRelationalLeftJoin(t, e, n);
        }
        newRelationalFilter(e, t) {
          if (t instanceof QE && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (e instanceof _D && t.referencedFields.subsetOf(e.leftGroup.relational.outputFields)) {
            let n = this.newRelationalFilter(e.left, t);
            return this.newRelationalLeftJoin(n, e.right, e.constraint);
          }
          let n = new KE(e, t);
          return this.finishRelational(n);
        }
        newRelationalProject(e, t, n) {
          let r = new RE(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalLimit(e, t, n) {
          if (
            e instanceof RE &&
            t.referencedFields.subsetOf(e.inputGroup.relational.outputFields) &&
            n.providedByFields(e.inputGroup.relational.outputFields)
          ) {
            let r = this.newRelationalLimit(e.input, t, n);
            return this.newRelationalProject(r, e.projections, e.passthrough);
          }
          let r = new vD(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalOffset(e, t, n) {
          let r = new yD(e, t, n);
          return this.finishRelational(r);
        }
        finishScalar(e) {
          if (
            !(e instanceof QE) &&
            e.isSynchronous &&
            e.referencedFields.size === 0 &&
            e.referencedOuterFields.size === 0
          ) {
            let t = e.evaluateSync();
            return this.newScalarConstant(e.definition, t);
          }
          return this.memo.addScalar(e);
        }
        removeUnknown(e, t) {
          if (e.definition.type !== `unknown` || t.type === `unknown`) return e;
          let n = { ...t, isNullable: !0 };
          return this.newScalarCast(e, n);
        }
        newScalarVariable(e, t) {
          let n = new ND(e, t);
          return this.finishScalar(n);
        }
        newScalarConstant(e, t) {
          let n = new QE(e, t);
          return this.finishScalar(n);
        }
        newScalarNot(e) {
          if (e instanceof AD)
            return e.input.definition.type === `boolean`
              ? e.input
              : this.newScalarCast(e.input, { type: `boolean`, isNullable: !0 });
          if (e instanceof rD) return this.newScalarNotEquals(e.left, e.right);
          if (e instanceof cD) return this.newScalarEquals(e.left, e.right);
          if (e instanceof oD) return this.newScalarGreaterThanOrEqual(e.left, e.right);
          if (e instanceof sD) return this.newScalarGreaterThan(e.left, e.right);
          if (e instanceof iD) return this.newScalarLessThanOrEqual(e.left, e.right);
          if (e instanceof aD) return this.newScalarLessThan(e.left, e.right);
          if (e instanceof ZE) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarOr(t, n);
          }
          if (e instanceof lD) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarAnd(t, n);
          }
          let t = new AD(e);
          return this.finishScalar(t);
        }
        newScalarAnd(e, t) {
          if (t instanceof QE && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (
            (e instanceof QE && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof QE && t.value?.type === `boolean` && t.value.value === !1)
          )
            return t;
          if (e instanceof QE && e.value?.type === `boolean` && e.value.value === !1) return e;
          let n = new ZE(e, t);
          return this.finishScalar(n);
        }
        newScalarOr(e, t) {
          if (t instanceof QE && t.value?.type === `boolean` && t.value.value === !0) return t;
          if (
            (e instanceof QE && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof QE && t.value?.type === `boolean` && t.value.value === !1)
          )
            return e;
          if (e instanceof QE && e.value?.type === `boolean` && e.value.value === !1) return t;
          let n = new lD(e, t);
          return this.finishScalar(n);
        }
        newScalarEquals(e, t) {
          let n = e instanceof ND;
          if (t instanceof ND && !n) return this.newScalarEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new rD(e, t);
          return this.finishScalar(r);
        }
        newScalarNotEquals(e, t) {
          let n = e instanceof ND;
          if (t instanceof ND && !n) return this.newScalarNotEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new cD(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThan(e, t) {
          let n = e instanceof ND;
          if (t instanceof ND && !n) return this.newScalarGreaterThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new oD(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThanOrEqual(e, t) {
          let n = e instanceof ND;
          if (t instanceof ND && !n) return this.newScalarGreaterThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new sD(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThan(e, t) {
          let n = e instanceof ND;
          if (t instanceof ND && !n) return this.newScalarLessThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new iD(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThanOrEqual(e, t) {
          let n = e instanceof ND;
          if (t instanceof ND && !n) return this.newScalarLessThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new aD(e, t);
          return this.finishScalar(r);
        }
        newScalarIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new wD(e, t);
          return this.finishScalar(r);
        }
        newScalarNotIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new MD(e, t);
          return this.finishScalar(r);
        }
        newScalarCase(e, t, n) {
          if (e) {
            let n = [];
            for (let { when: r, then: i } of t) {
              let t = new HE(this.removeUnknown(r, e.definition), i);
              n.push(t);
            }
            t = n;
          }
          let r = new UE(e, t, n);
          return this.finishScalar(r);
        }
        newScalarContains(e, t) {
          let n = new eD(e, t);
          return this.finishScalar(n);
        }
        newScalarStartsWith(e, t) {
          let n = new dD(e, t);
          return this.finishScalar(n);
        }
        newScalarEndsWith(e, t) {
          let n = new nD(e, t);
          return this.finishScalar(n);
        }
        newScalarLength(e) {
          let t = new kD(e);
          return this.finishScalar(t);
        }
        newScalarIndexOf(e, t) {
          let n = new ED(e, t);
          return this.finishScalar(n);
        }
        newScalarArray(e, t, n, r, i) {
          let a = new bD(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarFlatArray(e, t, n, r, i) {
          let a = new SD(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarIntersection(e, t) {
          let n = new OD(e, t);
          return this.finishScalar(n);
        }
        newScalarCast(e, t) {
          if (e.definition.type === t.type) return e;
          let n = new xD(e, t);
          return this.finishScalar(n);
        }
      }),
      (FD = class extends IE {}),
      (ID = class e extends FD {
        constructor(e, t, n) {
          (super(!1),
            (this.input = e),
            (this.fields = t),
            (this.resolver = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        fields;
        resolver;
        inputGroup;
        getHash() {
          return K(`EnforcerResolve`, this.inputGroup.id, this.fields);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.fields);
        }
        getInputRequiredProps(e) {
          let t = new Q();
          return new AE(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return $.estimate(0, 100 * ME).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.fields, this.resolver);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e);
          H(this.fields.subsetOf(t.fields), `Fields can't be resolved`);
          let n = new Map();
          for (let e of this.fields) {
            H(e.collection, `Collection required to resolve field`);
            let t = n.get(e.collection);
            (t || ((t = new Q()), n.set(e.collection, t)), t.add(e));
          }
          for (let e of t.tuples) for (let t of this.fields) cm(e.getValue(t), this.resolver);
          let r = yield Promise.all(
            Array.from(n).map(async ([e, n]) => {
              let r = [];
              for (let n of t.tuples) {
                let t = n.getPointer(e);
                t && r.push(t);
              }
              let i = await e.data.resolveItems(r, this.resolver.priority);
              return (
                H(i.length === r.length, `Invalid number of items`),
                { collection: e, fields: n, items: i, nextItemIndex: 0 }
              );
            })
          );
          return t.map(t.fields, (e) => {
            let t = new NE();
            t.merge(e);
            for (let n of r) {
              let { collection: r, fields: i, items: a } = n,
                o = e.getPointer(r);
              if (!o) continue;
              let s = a[n.nextItemIndex++];
              (H(s, `Item not found`), H(s.pointer === o, `Pointer mismatch`));
              for (let e of i) {
                let n = e.getValue(s);
                t.addValue(e, n);
              }
            }
            return t;
          });
        }
      }),
      (LD = { type: 0 }),
      (RD = class e extends FD {
        constructor(e, t) {
          (super(e.isSynchronous),
            (this.input = e),
            (this.ordering = t),
            (this.inputGroup = e.getGroup()));
        }
        input;
        ordering;
        inputGroup;
        getHash() {
          return K(`EnforcerSort`, this.inputGroup.id, this.ordering);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          for (let { field: e } of this.ordering.fields)
            e.name !== SE && (Ze(e.collection) || t.add(e));
          return new AE(new kE(), t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return new $(0).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.ordering);
        }
        *evaluate(e) {
          return (yield* this.input.evaluate(e)).sort((e, t) => {
            for (let { field: n, direction: r } of this.ordering.fields) {
              let i = r === `asc`;
              if (n.name === SE) {
                let r = n.collection;
                H(r, `Collection required for sorting`);
                let a = e.getPointer(r);
                H(a, `Pointer required for sorting`);
                let o = { pointer: a, data: {} },
                  s = t.getPointer(r);
                H(s, `Pointer required for sorting`);
                let c = { pointer: s, data: {} },
                  l = r.data.compareItems(o, c);
                return i ? l : -l;
              }
              let a = e.getValue(n),
                o = t.getValue(n);
              if (!mE.equal(a, o, LD)) {
                if (Qe(a) || mE.lessThan(a, o, LD)) return i ? -1 : 1;
                if (Qe(o) || mE.greaterThan(a, o, LD)) return i ? 1 : -1;
                throw Error(`Invalid comparison`);
              }
            }
            return 0;
          });
        }
      }),
      (zD = class {
        constructor(e, t, n) {
          ((this.query = e), (this.locale = t), (this.resolver = n));
        }
        query;
        locale;
        resolver;
        memo = new gD();
        normalizer = new PD(this.memo);
        explorer = new fD(this.normalizer);
        optimize(e) {
          let t = new WE(this.normalizer, this.query, this.locale).build(),
            n = Qf(e);
          return n ? n.then(() => this.optimizeBuiltQuery(t)) : this.optimizeBuiltQuery(t);
        }
        optimizeBuiltQuery(e) {
          let t = e.takeNode().getGroup(),
            n = e.getRequiredProps();
          return (this.optimizeGroup(t, n), [t.getOptimized(n), e.getNamedFields()]);
        }
        optimizeGroup(e, t) {
          let n = e.getWinner(t);
          if (n.node) return n.cost;
          let r = e.nodes[0];
          (H(r, `Normalized node not found`), this.createEnforcer(n, r, t));
          for (let r of e.nodes) {
            if (t.canProvide(r)) {
              let e = r.optimize(this, t);
              n.update(r, e);
            }
            t.isMinimal && this.explorer.explore(r);
          }
          return n.cost;
        }
        createEnforcer(e, t, n) {
          if (n.resolvedFields.size > 0) {
            let r = new ID(t, n.resolvedFields, this.resolver),
              i = r.optimize(this, n);
            e.update(r, i);
          }
          if (n.ordering.length > 0) {
            let r = new RD(t, n.ordering),
              i = r.optimize(this, n);
            e.update(r, i);
          }
        }
      }),
      (BD = Jf(`query-engine`)),
      (VD = class {
        async evalQuery(e, t, n, r) {
          BD.enabled &&
            BD.debug(`Query:
${xm(e)}`);
          let i = new xE(e, t, r),
            a = new zD(e, t, i),
            o = Qf(i.priority);
          o && (await o);
          let s = a.optimize(r),
            [c, l] = rt(s) ? await s : s,
            u = Qf(r);
          u && (await u);
          let d = await c.evaluateAsync(r),
            f = Object.entries(l),
            p = [],
            m = [];
          for (let e of d.tuples) {
            let t = Qf(r);
            t && (await t);
            let a = {},
              o = {};
            for (let [t, r] of f) {
              let s = e.getValue(r);
              ((a[t] = i.resolveValue(s)), n && (o[t] = s));
            }
            (n && p.push(o), m.push(np(a, r)));
          }
          let h = tp(rp(m, r), r);
          return n ? [rt(h) ? await h : h, p] : h;
        }
        async serializeableQuery(e, t, n) {
          return this.evalQuery(e, t, !0, n);
        }
        async query(e, t, n) {
          return this.evalQuery(e, t, !1, n);
        }
        resolveSerializableQueryResult(e, t, n, r) {
          let i = new xE(t, n, r);
          return tp(
            rp(
              e.map((e) => {
                let t = {},
                  n;
                for (n in e) {
                  let r = e[n];
                  t[n] = i.resolveValue(r);
                }
                return np(t);
              })
            ),
            void 0,
            !1
          );
        }
      }),
      (HD = `style[data-framer-breakpoint-css]`),
      (UD = new Map()),
      (WD = `page`),
      (GD = Symbol(`cycle`)),
      (JD = (e) =>
        D((t, n) => {
          let {
              strokeEffectLength: r,
              strokeEffectGap: i,
              strokeEffectOffset: a,
              strokeEffectLoop: o,
              strokeEffectTotalLength: s,
              strokeEffectLoopType: c,
              pathLengthTransition: l,
              ...u
            } = t,
            d = Ha(),
            f = ge(0),
            { length: p, gap: m } = za(() => ({ length: s * r, gap: s * i }));
          h(() => {
            if (d) return;
            let e = new AbortController();
            async function t() {
              let t = 0;
              for (; !e.signal.aborted;) {
                let e = o && c === `mirror`,
                  n = rh(t, e),
                  r = rh(t + 1, e);
                if ((await Promise.all([Oe(f, [n, r], l), ih()]), !o)) break;
                (o && c === `repeat`) || t++;
              }
            }
            return (
              t(),
              () => {
                e.abort();
              }
            );
          }, []);
          let g = be(f, (e) => a * s + (s - Math.max(e, 0.001) * s)),
            _ = d ? void 0 : { strokeDasharray: `${p} ${m}`, strokeDashoffset: g };
          return E(e, { ...u, ..._, ref: n });
        })),
      (YD = (() => {
        let e = k(void 0);
        return ((e.displayName = `TickerContext`), e);
      })()),
      (XD = 1e4),
      (ZD = `u_`),
      (QD = new Set([`rgba8`, `r8`, `rg16f`, `rgba16f`, `rgba32f`])),
      ($D = {
        time: { name: `u_time`, glslType: `float` },
        resolution: { name: `u_resolution`, glslType: `vec2` },
        deltaTime: { name: `u_deltaTime`, glslType: `float` },
        pixelRatio: { name: `u_pixelRatio`, glslType: `float` },
        mousePosition: { name: `u_mousePosition`, glslType: `vec4` },
        mousePointerDown: { name: `u_mousePointerDown`, glslType: `float` },
        mouseHover: { name: `u_mouseHover`, glslType: `float` },
      }),
      (eO = `webglcontextlost`),
      (tO = () => {}),
      (nO = class {
        gl;
        canvas;
        contextLostHandler;
        disposed = !1;
        pixelRatio = N === void 0 ? 1 : N.devicePixelRatio;
        resolutionScale;
        lastBufferWidth = 0;
        lastBufferHeight = 0;
        onContextLost;
        resources;
        textures = new Map();
        get customTextureUnitBase() {
          return this.resources.bufferPasses.length;
        }
        constructor(e, t, n, r, i = tO, a = []) {
          ((this.resolutionScale = r), (this.canvas = e), (this.onContextLost = i));
          let o = e.getContext(`webgl2`, {
            alpha: !0,
            premultipliedAlpha: !1,
            antialias: !1,
            powerPreference: `default`,
            preserveDrawingBuffer: e instanceof OffscreenCanvas,
          });
          if (!o) throw Error(`WebGL2 not supported`);
          ((this.gl = o),
            (this.contextLostHandler = (e) => {
              (e.preventDefault(), this.dispose(), this.onContextLost?.());
            }),
            e.addEventListener(eO, this.contextLostHandler));
          try {
            this.resources = this.buildResources(t, n, a);
          } catch (t) {
            throw (e.removeEventListener(eO, this.contextLostHandler), t);
          }
          let { mainPass: s, bufferPasses: c } = this.resources;
          (o.clearColor(0, 0, 0, 0),
            c.length === 0 && (o.useProgram(s.program), o.bindVertexArray(s.vao)));
        }
        buildResources(e, t, n) {
          let { gl: r, canvas: i } = this,
            a = n.find((e) => gh(e.format));
          if (a && !r.getExtension(`EXT_color_buffer_float`))
            throw Error(
              `Shader buffer "${a.uniformName}" requested format "${a.format}" but the EXT_color_buffer_float extension is not available.`
            );
          let o = !a || !!r.getExtension(`OES_texture_float_linear`),
            s = this.compileShader(r.VERTEX_SHADER, e),
            c,
            l = [],
            u,
            d,
            f,
            p = [];
          try {
            c = this.linkFragmentProgram(s, t);
            for (let e of n) l.push([this.linkFragmentProgram(s, e.fragment), e]);
            ((u = lh(r, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]))),
              (d = lh(r, new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]))),
              (f = this.buildPassState(c, n, u, d)));
            for (let e = 0; e < l.length; e++) {
              let t = l[e];
              if (!t) continue;
              let [r, i] = t;
              p.push(this.buildBufferPass(r, i, n, o, e, u, d));
            }
            return (
              this.allocateBufferPassStorages(p, i.width, i.height),
              this.bindStaticSamplerUnits(f, p),
              { positionBuffer: u, texCoordBuffer: d, mainPass: f, bufferPasses: p }
            );
          } catch (e) {
            for (let e of p) this.disposeBufferPass(e);
            for (let e = p.length; e < l.length; e++) {
              let t = l[e];
              t && r.deleteProgram(t[0]);
            }
            throw (
              f ? this.disposePass(f) : c && r.deleteProgram(c),
              d && r.deleteBuffer(d),
              u && r.deleteBuffer(u),
              e
            );
          } finally {
            r.deleteShader(s);
          }
        }
        render(e, t, n, r) {
          if (!this.disposed) {
            if (this.resources.bufferPasses.length === 0) {
              this.renderSinglePass(e, t, n, r);
              return;
            }
            this.renderMultiPass(e, t, n, r);
          }
        }
        renderSinglePass(e, t, n, r) {
          let {
            gl: i,
            canvas: a,
            resources: { mainPass: o },
          } = this;
          (this.updatePassBuiltIns(o, e, t, r, a.width, a.height),
            this.applyCustomUniforms(o, n, this.customTextureUnitBase),
            i.clear(i.COLOR_BUFFER_BIT),
            i.drawArrays(i.TRIANGLES, 0, 6));
        }
        renderMultiPass(e, t, n, r) {
          let {
            gl: i,
            canvas: a,
            resources: { mainPass: o, bufferPasses: s },
            customTextureUnitBase: c,
          } = this;
          for (let e of s)
            (i.activeTexture(i.TEXTURE0 + e.textureUnit),
              i.bindTexture(i.TEXTURE_2D, e.textures[+(e.writeIdx === 0)]));
          for (let a of s)
            (i.useProgram(a.program),
              i.bindVertexArray(a.vao),
              this.updatePassBuiltIns(a, e, t, r, a.width, a.height),
              this.applyCustomUniforms(a, n, c),
              i.bindFramebuffer(i.FRAMEBUFFER, a.fbos[a.writeIdx]),
              i.viewport(0, 0, a.width, a.height),
              i.clear(i.COLOR_BUFFER_BIT),
              i.drawArrays(i.TRIANGLES, 0, 6),
              i.activeTexture(i.TEXTURE0 + a.textureUnit),
              i.bindTexture(i.TEXTURE_2D, a.textures[a.writeIdx]),
              (a.writeIdx = +(a.writeIdx === 0)));
          (i.useProgram(o.program),
            i.bindVertexArray(o.vao),
            this.updatePassBuiltIns(o, e, t, r, a.width, a.height),
            this.applyCustomUniforms(o, n, c),
            i.bindFramebuffer(i.FRAMEBUFFER, null),
            i.viewport(0, 0, a.width, a.height),
            i.clear(i.COLOR_BUFFER_BIT),
            i.drawArrays(i.TRIANGLES, 0, 6));
        }
        resize() {
          if (this.disposed) return;
          let { canvas: e } = this;
          if (e instanceof OffscreenCanvas)
            throw Error(`resize() is not supported for OffscreenCanvas.`);
          let t = e.offsetWidth,
            n = e.offsetHeight,
            r = N.devicePixelRatio,
            i = Math.max(r * this.resolutionScale, 1);
          this.pixelRatio = i;
          let a = t * i,
            o = n * i;
          if (!(a === this.lastBufferWidth && o === this.lastBufferHeight)) {
            ((this.lastBufferWidth = a),
              (this.lastBufferHeight = o),
              (e.width = a),
              (e.height = o),
              this.gl.viewport(0, 0, a, o));
            try {
              this.allocateBufferPassStorages(this.resources.bufferPasses, a, o);
            } catch (e) {
              throw (this.dispose(), e);
            }
          }
        }
        resizeOffscreenCanvas(e, t, n) {
          if (!this.disposed) {
            (n !== void 0 && (this.pixelRatio = n), this.gl.viewport(0, 0, e, t));
            try {
              this.allocateBufferPassStorages(this.resources.bufferPasses, e, t);
            } catch (e) {
              throw (this.dispose(), e);
            }
          }
        }
        finish() {
          this.disposed || this.gl.finish();
        }
        dispose() {
          if (this.disposed) return;
          ((this.disposed = !0), this.canvas.removeEventListener(eO, this.contextLostHandler));
          for (let [, e] of this.textures) e.source && !ah(e.source) && oh(e.source);
          if (this.gl.isContextLost()) return;
          let { gl: e, resources: t } = this;
          for (let e of t.bufferPasses) this.disposeBufferPass(e);
          (this.disposePass(t.mainPass),
            e.deleteBuffer(t.positionBuffer),
            e.deleteBuffer(t.texCoordBuffer));
          for (let [, t] of this.textures) e.deleteTexture(t.texture);
          this.textures.clear();
        }
        disposePass(e) {
          let { gl: t } = this;
          (t.deleteVertexArray(e.vao), t.deleteProgram(e.program));
        }
        disposeBufferPass(e) {
          let { gl: t } = this;
          this.disposePass(e);
          for (let n of e.textures) t.deleteTexture(n);
          for (let n of e.fbos) t.deleteFramebuffer(n);
        }
        buildPassState(e, t, n, r) {
          let { gl: i } = this,
            a = i.createVertexArray();
          if (!a) throw Error(`Failed to create vertex array object`);
          (i.bindVertexArray(a), uh(i, e, n, r), i.bindVertexArray(null));
          let o = dh(i, e),
            s = new Map();
          for (let n of t) s.set(n.uniformName, i.getUniformLocation(e, n.uniformName));
          return {
            program: e,
            vao: a,
            builtInLocations: o,
            customLocations: new Map(),
            bufferSamplerLocations: s,
          };
        }
        buildBufferPass(e, t, n, r, i, a, o) {
          let s = this.buildPassState(e, n, a, o),
            { gl: c } = this,
            l = hh(c, t.format),
            u = gh(t.format) && !r ? c.NEAREST : c.LINEAR,
            d = fh(c, u),
            f = fh(c, u),
            p = ph(c, d),
            m = ph(c, f);
          return (
            c.bindFramebuffer(c.FRAMEBUFFER, null),
            c.bindTexture(c.TEXTURE_2D, null),
            {
              ...s,
              uniformName: t.uniformName,
              resolutionScale: t.resolutionScale,
              format: t.format,
              internalFormat: l.internalFormat,
              uploadFormat: l.uploadFormat,
              pixelType: l.pixelType,
              width: 0,
              height: 0,
              textures: [d, f],
              fbos: [p, m],
              writeIdx: 0,
              textureUnit: i,
            }
          );
        }
        bindStaticSamplerUnits(e, t) {
          let { gl: n } = this,
            r = [e, ...t];
          for (let e of r) {
            n.useProgram(e.program);
            for (let r of t) {
              let t = e.bufferSamplerLocations.get(r.uniformName);
              t && n.uniform1i(t, r.textureUnit);
            }
          }
        }
        allocateBufferPassStorages(e, t, n) {
          for (let r of e) this.allocateBufferPassStorage(r, t, n);
        }
        allocateBufferPassStorage(e, t, n) {
          let { gl: r } = this,
            i = Math.max(1, Math.floor(t * e.resolutionScale)),
            a = Math.max(1, Math.floor(n * e.resolutionScale));
          if (i === e.width && a === e.height) return;
          ((e.width = i), (e.height = a));
          for (let t of e.textures)
            (r.bindTexture(r.TEXTURE_2D, t),
              r.texImage2D(
                r.TEXTURE_2D,
                0,
                e.internalFormat,
                i,
                a,
                0,
                e.uploadFormat,
                e.pixelType,
                null
              ));
          r.bindTexture(r.TEXTURE_2D, null);
          let [o, s, c, l] = r.getParameter(r.VIEWPORT);
          for (let t of e.fbos)
            (r.bindFramebuffer(r.FRAMEBUFFER, t),
              mh(r, e.uniformName, e.format),
              r.viewport(0, 0, i, a),
              r.clear(r.COLOR_BUFFER_BIT));
          (r.bindFramebuffer(r.FRAMEBUFFER, null), r.viewport(o, s, c, l));
        }
        compileShader(e, t) {
          let { gl: n } = this,
            r = n.createShader(e);
          if (!r) throw Error(`Failed to create shader`);
          if (
            (n.shaderSource(r, t), n.compileShader(r), !n.getShaderParameter(r, n.COMPILE_STATUS))
          ) {
            let t = n.getShaderInfoLog(r);
            n.deleteShader(r);
            let i = e === n.VERTEX_SHADER ? `Vertex` : `Fragment`;
            throw Error(`${i} shader compilation failed: ${t}`);
          }
          return r;
        }
        linkFragmentProgram(e, t) {
          let { gl: n } = this,
            r = this.compileShader(n.FRAGMENT_SHADER, t);
          try {
            let t = n.createProgram();
            if (!t) throw Error(`Failed to create program`);
            if (
              (n.attachShader(t, e),
              n.attachShader(t, r),
              n.linkProgram(t),
              !n.getProgramParameter(t, n.LINK_STATUS))
            ) {
              let e = n.getProgramInfoLog(t);
              throw (n.deleteProgram(t), Error(`Program linking failed: ${e}`));
            }
            return t;
          } finally {
            n.deleteShader(r);
          }
        }
        setUniform(e, t) {
          if (e !== null)
            switch (t.type) {
              case `boolean`:
                this.gl.uniform1f(e, +!!t.value);
                break;
              case `float`:
                this.gl.uniform1f(e, t.value);
                break;
              case `int`:
                this.gl.uniform1i(e, t.value);
                break;
              case `vec2`:
                this.gl.uniform2fv(e, t.value);
                break;
              case `vec4`:
                this.gl.uniform4fv(e, t.value);
                break;
              case `vec4[]`:
                this.gl.uniform4fv(e, t.value.flat());
                break;
            }
        }
        bindTexture(e, t, n) {
          let { gl: r, textures: i } = this,
            a = i.get(e),
            o = !a;
          if (o) {
            let t = r.createTexture();
            if (!t) return;
            ((a = { texture: t, source: null }), i.set(e, a));
          }
          if (a) {
            if ((r.activeTexture(r.TEXTURE0 + n), r.bindTexture(r.TEXTURE_2D, a.texture), ah(t))) {
              this.uploadVideoFrame(a, t, o);
              return;
            }
            (o || a.source !== t) &&
              (a.source && !ah(a.source) && oh(a.source),
              (a.source = t),
              r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, t),
              r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE),
              r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE),
              r.generateMipmap(r.TEXTURE_2D),
              r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR_MIPMAP_LINEAR),
              r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR));
          }
        }
        uploadVideoFrame(e, t, n) {
          let { gl: r } = this;
          if (t.readyState < t.HAVE_CURRENT_DATA || t.seeking) return;
          let { videoWidth: i, videoHeight: a, currentTime: o } = t;
          if (!(i === 0 || a === 0)) {
            if (
              (e.source && e.source !== t && !ah(e.source) && oh(e.source),
              n || e.source !== t || e.videoWidth !== i || e.videoHeight !== a)
            ) {
              (r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE),
                r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE),
                r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR),
                r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR),
                r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, t),
                (e.source = t),
                (e.videoWidth = i),
                (e.videoHeight = a),
                (e.videoTime = o));
              return;
            }
            e.videoTime !== o &&
              (r.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, r.RGBA, r.UNSIGNED_BYTE, t),
              (e.videoTime = o));
          }
        }
        applyCustomUniforms(e, t, n) {
          if (!t) return;
          let { gl: r } = this,
            i = n;
          for (let n in t) {
            let a = t[n];
            if (!a) continue;
            let o = e.customLocations.get(n);
            (o === void 0 &&
              ((o = r.getUniformLocation(e.program, n)), e.customLocations.set(n, o)),
              a.type === `sampler2D`
                ? (this.bindTexture(n, a.value, i), o !== null && r.uniform1i(o, i), i++)
                : this.setUniform(o, a));
          }
        }
        updatePassBuiltIns(e, t, n, r, i, a) {
          let { gl: o, pixelRatio: s } = this,
            c = e.builtInLocations;
          (c[$D.time.name] !== null && o.uniform1f(c[$D.time.name], t),
            c[$D.resolution.name] !== null && o.uniform2f(c[$D.resolution.name], i, a),
            c[$D.deltaTime.name] !== null && o.uniform1f(c[$D.deltaTime.name], n),
            c[$D.pixelRatio.name] !== null && o.uniform1f(c[$D.pixelRatio.name], s),
            c[$D.mousePosition.name] !== null && o.uniform4fv(c[$D.mousePosition.name], r.position),
            c[$D.mousePointerDown.name] !== null &&
              o.uniform1f(c[$D.mousePointerDown.name], r.pointerDown),
            c[$D.mouseHover.name] !== null && o.uniform1f(c[$D.mouseHover.name], r.hover));
        }
      }),
      (rO = `_heightmap`),
      (iO = `_length`),
      (aO = `_buffer`),
      (oO = /\W/gu),
      (sO = `#version 300 es`),
      (cO = `precision highp float;`),
      (lO = `in vec2 v_uv;`),
      (uO = `out vec4 fragColor;`),
      (dO = 0.5),
      (fO = `rgba8`),
      (pO = `__framer_shaderConfig__`),
      (mO = t(function ({ src: e }) {
        return e
          ? E(io, { image: { src: e, fit: `fill`, loading: `lazy` }, draggable: !1, alt: `` })
          : null;
      })),
      (hO = 30),
      (gO = 20),
      (_O = class {
        loaders = new Map();
        generated = new Map();
        load(e, t) {
          let n = this.loaders.get(e);
          if (n) return n;
          let r = t();
          return (
            r.catch(() => {
              this.loaders.get(e) === r && this.loaders.delete(e);
            }),
            Ih(this.loaders, hO),
            this.loaders.set(e, r),
            r
          );
        }
        generate(e, t) {
          let n = this.generated.get(e);
          if (n) return n;
          let r = t();
          if (r) return (Ih(this.generated, gO), this.generated.set(e, r), r);
        }
        clear() {
          (this.loaders.clear(), this.generated.clear());
        }
        get loadedSize() {
          return this.loaders.size;
        }
        get generatedSize() {
          return this.generated.size;
        }
      }),
      (vO = new _O()),
      (yO = 1024),
      (bO = 24),
      (xO = class {
        byOwner = new Map();
        acquire(e, t) {
          let n = this.byOwner.get(e);
          n || ((n = new Map()), this.byOwner.set(e, n));
          let r = n.get(t);
          if (r) return r.promise;
          if (this.size >= bO)
            return Promise.reject(
              Error(`Video decoder pool is full (max ${bO}); "${t}" falls back.`)
            );
          let i = new AbortController(),
            a = ch(t, i.signal);
          return (
            a.catch(() => {
              n.get(t)?.promise === a && n.delete(t);
            }),
            n.set(t, { promise: a, controller: i }),
            a
          );
        }
        keepOnly(e, t) {
          let n = this.byOwner.get(e);
          if (n) {
            for (let [e, r] of n) t.has(e) || (n.delete(e), Uh(r));
            n.size === 0 && this.byOwner.delete(e);
          }
        }
        releaseAll(e) {
          let t = this.byOwner.get(e);
          if (t) {
            for (let e of t.values()) Uh(e);
            this.byOwner.delete(e);
          }
        }
        get size() {
          let e = 0;
          for (let t of this.byOwner.values()) e += t.size;
          return e;
        }
      }),
      (SO = new xO()),
      (CO = { position: `absolute`, inset: 0, width: `100%`, height: `100%` }),
      (wO = 0.001),
      (TO = -999),
      (EO = { position: [TO, TO, 0, 0], pointerDown: 0, hover: 0 }),
      (DO = [`.mp4`, `.m4v`]),
      (OO = `.svg`),
      (kO = 4096),
      (AO = {
        display: `block`,
        width: `100%`,
        height: `100%`,
        objectFit: `cover`,
        position: `absolute`,
        inset: 0,
      }),
      (jO = { position: `absolute`, inset: 0 }),
      (MO = t(function ({ src: e, hidden: t = !1, onDisplaySrcChange: r }) {
        let [i, a] = A(e),
          [o, s] = A(void 0),
          [c, l] = A(i),
          d = M(null);
        i !== c && (s(c), l(i));
        let f = M(r);
        n(() => {
          f.current = r;
        }, [r]);
        let p = M(!0);
        return (
          n(() => {
            if (p.current) {
              p.current = !1;
              return;
            }
            o || f.current?.();
          }, [i]),
          h(() => {
            if (e === i) return;
            let t = !0;
            if (e) {
              let n = new Image();
              n.src = e;
              let r = () => (t ? u(() => a(e)) : void 0);
              typeof n.decode == `function` ? n.decode().then(r).catch(r) : (n.onload = r);
            } else u(() => a(void 0));
            return () => {
              t = !1;
            };
          }, [e, i]),
          h(() => {
            let e = d.current;
            if (!e || !o) return;
            let t = !1,
              n = e.animate([{ opacity: 0 }, { opacity: 1 }], {
                duration: 300,
                easing: `ease-in-out`,
                fill: `forwards`,
              });
            return (
              (n.onfinish = () => {
                t || (u(() => s(void 0)), f.current?.());
              }),
              () => {
                ((t = !0), n.cancel());
              }
            );
          }, [o]),
          i
            ? w(`div`, {
                style: { ...CO, opacity: +!t, pointerEvents: t ? `none` : void 0 },
                children: [
                  o &&
                    E(
                      `img`,
                      { src: o, decoding: `async`, style: AO, draggable: !1, alt: `` },
                      `prev-${o}`
                    ),
                  E(
                    `div`,
                    {
                      ref: o ? d : void 0,
                      style: jO,
                      children: E(`img`, {
                        src: i,
                        style: AO,
                        decoding: `async`,
                        draggable: !1,
                        alt: ``,
                      }),
                    },
                    i
                  ),
                ],
              })
            : null
        );
      })),
      (NO = `#version 300 es
precision highp float;

in vec2 a_position;
in vec2 a_texCoord;

out vec2 v_uv;

void main() {
    v_uv = a_texCoord;
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`),
      (PO = `#version 300 es
precision highp float;

in vec2 v_uv;
out vec4 fragColor;

void main() {
    fragColor = vec4(0.0);
}
`),
      (FO = { noSlot: 0, singleFrame: 1, animate: 2 }),
      (IO = k(null)),
      (LO = 300),
      (RO = { display: `block`, width: `100%`, height: `100%` }),
      (zO = 250),
      (BO = t(function ({
        mode: e,
        fallbackImage: t,
        skipInitialFallback: r,
        vertexShader: i,
        fragmentShader: a,
        animated: o,
        resolutionScale: s,
        uniforms: c,
        onError: l,
        onReady: d,
        singleFrame: f,
        onContextLost: p,
        onUniformResolutionSucceeded: m,
        onUniformResolutionFailed: _,
        heightmapSource: v,
        mouseDataRef: y,
        buffers: b,
      }) {
        let [x, S] = A(!1),
          [T, D] = A(!1),
          O = e === `progressive`,
          k = !!t,
          j = !!(r && k),
          ee = O && k && !j,
          P = fg(ee),
          te = M(d);
        n(() => {
          te.current = d;
        }, [d]);
        let ne = C(() => {
          (u(() => S(!0)), te.current?.());
        }, []);
        h(() => {
          if (!O || !x || !P) return;
          let e = N.setTimeout(() => {
            u(() => D(!0));
          }, zO);
          return () => {
            clearTimeout(e);
          };
        }, [O, P, x]);
        let F = ee && !P,
          re = f || F || (O && !j && !T),
          ie = k && !j && (!P || !x);
        return w(g, {
          children: [
            E(`div`, {
              style: { ...CO, opacity: +!F },
              children: E(hg, {
                vertexShader: i,
                fragmentShader: a,
                animated: o,
                resolutionScale: s,
                singleFrame: re,
                uniforms: c,
                onError: l,
                onReady: ne,
                onContextLost: p,
                onUniformResolutionSucceeded: m,
                onUniformResolutionFailed: _,
                heightmapSource: v,
                mouseDataRef: y,
                buffers: b,
              }),
            }),
            t &&
              !j &&
              E(`div`, {
                style: {
                  ...CO,
                  opacity: +!!ie,
                  transition: `opacity 200ms ease-in-out`,
                  pointerEvents: `none`,
                },
                children: E(mO, { src: t }),
              }),
          ],
        });
      })),
      (UO = { duration: 0 }),
      (WO = D(function (
        {
          mode: e = `instant`,
          fallbackImage: t,
          skipInitialFallback: r,
          placeholder: i,
          style: a,
          width: o,
          height: s,
          vertexShader: c,
          fragmentShader: l,
          animated: d,
          uniforms: f,
          onError: p,
          onReady: m,
          resolutionScale: g,
          poolId: _,
          isSelected: v = !1,
          isMultiSelected: y = !1,
          isPreviewActive: b = !1,
          heightmapSource: x,
          mouse: S,
          buffers: T,
          ...D
        },
        O
      ) {
        let k = Hs(O),
          M = Wr(),
          ee = J.current() === J.preview && M === `preview`,
          N = !!(t && (r || ee)),
          P = vu(),
          te = xg(k, P ? void 0 : S),
          [ne, F] = A(N);
        qS(
          k,
          C((e) => {
            u(() => F(e.isIntersecting));
          }, []),
          { threshold: 0, enabled: !0 }
        );
        let re = j(),
          ie = Cg(_ ?? re, v, ne);
        h(() => {
          performance.mark?.(`shader_register`);
        }, []);
        let {
            isFallbackOnly: I,
            effectiveAnimated: ae,
            effectiveSingleFrame: oe,
            effectiveMode: se,
            shouldSkipFallbackOverlay: ce,
            onContextLost: le,
            onUniformResolutionSucceeded: ue,
            onUniformResolutionFailed: de,
          } = dg(ie, v, y, ne, e, d, N, b),
          [L, fe] = A(!1);
        n(() => {
          I && u(() => fe(!1));
        }, [I]);
        let pe = C(() => {
            (u(() => fe(!0)), m?.());
          }, [m]),
          R = {
            vertexShader: c,
            fragmentShader: l,
            uniforms: f,
            resolutionScale: g,
            onError: p,
            onContextLost: le,
            onUniformResolutionSucceeded: ue,
            onUniformResolutionFailed: de,
            heightmapSource: x,
            buffers: T,
          },
          me = { style: a, width: o, height: s, ...D };
        if (P) {
          let e = !I && (N || L);
          return w(GO, {
            ref: k,
            ...me,
            children: [
              !I &&
                E(BO, {
                  mode: se,
                  skipInitialFallback: ce,
                  onReady: pe,
                  ...R,
                  animated: ae,
                  singleFrame: oe,
                  mouseDataRef: te,
                }),
              E(MO, { src: t, hidden: e }),
              I && !t && i,
            ],
          });
        }
        return I
          ? E(GO, { ref: k, ...me, children: ce && !ne ? null : E(mO, { src: t }) })
          : E(GO, {
              ref: k,
              ...me,
              children: E(BO, {
                mode: se,
                fallbackImage: t,
                skipInitialFallback: ce,
                onReady: m,
                ...R,
                animated: ae,
                singleFrame: oe,
                mouseDataRef: te,
              }),
            });
      })),
      (GO = D(function ({ children: e, style: t, ...n }, r) {
        return E(BS, {
          ref: r,
          __fromCanvasComponent: !0,
          style: { borderRadius: `inherit`, cornerShape: `inherit`, ...t, overflow: `hidden` },
          ...n,
          componentType: `Shader`,
          children: e,
        });
      })),
      (KO = new Set([
        `visibleVariantId`,
        `obscuredVariantId`,
        `threshold`,
        `animateOnce`,
        `variantAppearEffectEnabled`,
        `targets`,
        `exitTarget`,
        `scrollDirection`,
      ])),
      (qO = { inputRange: [], outputRange: [] }),
      (JO = (e) =>
        f.forwardRef((t, n) => {
          if (J.current() === J.canvas) return E(e, { ...t, ref: n });
          let [r, i] = Qc(t, KO),
            {
              visibleVariantId: a,
              obscuredVariantId: o,
              animateOnce: s,
              threshold: c,
              variantAppearEffectEnabled: l,
              targets: u,
              exitTarget: d,
              scrollDirection: p,
            } = r,
            [m, h] = f.useState(o),
            g = f.useRef(!1),
            _ = Hs(n);
          Ks(
            _,
            (e) => {
              r.targets ||
                r.scrollDirection ||
                (s && g.current === !0) ||
                (g.current !== e &&
                  ((g.current = e),
                  f.startTransition(() => {
                    h(e ? a : o);
                  })));
            },
            { enabled: l, animateOnce: s, threshold: { y: c } }
          );
          let v = At(),
            y = f.useRef(v);
          return (
            f.useEffect(() => {
              if (p || !u) return;
              y.current !== v && ((y.current = v), f.startTransition(() => h(o)));
              let e = {},
                t;
              return de((n, { y: r }) => {
                if (!u[0] || (u[0].ref && !u[0].ref.current)) return;
                let { inputRange: i, outputRange: a } = wg(u, (c ?? 0) * r.containerLength, d);
                if (i.length === 0 || i.length !== a.length) return;
                let o = Math.floor(oe(r.current, i, a));
                if (s && e[o]) return;
                e[o] = !0;
                let l = u[o]?.target ?? void 0;
                l !== t &&
                  ((t = l),
                  f.startTransition(() => {
                    h(l);
                  }));
              });
            }, [v, s, c, u, t.variant, p, d]),
            wl(p, (e) => f.startTransition(() => h(e)), { enabled: l, repeat: !s }),
            jt(() => {
              if (!l) return;
              let e = !r.targets && !r.scrollDirection ? r.obscuredVariantId : void 0;
              f.startTransition(() => h(e));
            }),
            !(`variantAppearEffectEnabled` in r) || l === !0
              ? E(e, { ...i, variant: m ?? t.variant, ref: _ })
              : E(e, { ...i })
          );
        })),
      (YO = f.createContext(void 0)),
      (XO = () => f.useContext(YO)),
      Le(Q_(), 1),
      (ZO = (e) => e.target.value),
      (QO = {
        "data-1p-ignore": !0,
        "data-lpignore": !0,
        "data-form-type": `other`,
        autocomplete: `off`,
      }),
      ($O = D(function (e, t) {
        let {
            "aria-label": n,
            "aria-labelledby": r,
            "aria-describedby": i,
            autoFocus: a,
            className: o,
            inputName: s,
            max: c,
            min: l,
            placeholder: d,
            required: f,
            step: p,
            style: m,
            type: h,
            maxLength: g,
            value: _,
            defaultValue: v,
            autofillEnabled: y,
            onChange: b,
            onBlur: x,
            onInvalid: S,
            onFocus: T,
            onValid: D,
            onClear: O,
            ...k
          } = e,
          A = Eg(_ ?? v, h),
          [j, M, ee] = Tg(A ?? ``, !0, b),
          N = mi(A),
          P = C(() => {
            (M(``), O && u(() => O()));
          }, [O, M]),
          te = Wo(D, S, ee, x, T),
          ne = C(
            (e) => {
              e.target === e.currentTarget && N.current?.focus();
            },
            [N]
          );
        if (h === `hidden`) return E(F.input, { type: `hidden`, name: s, defaultValue: v });
        let re = y === !1 ? QO : void 0,
          ie = !!j,
          I = !!O && ie,
          ae = Zc(ek, Rx, o, h === `text` && tk, h === `textarea` && nk);
        return w(F.div, {
          ref: t,
          onClick: ne,
          style: m,
          className: ae,
          ...k,
          children: [
            h === `textarea`
              ? E(F.textarea, {
                  ref: N,
                  ...re,
                  ...te,
                  "aria-label": n,
                  "aria-labelledby": r,
                  "aria-describedby": i,
                  required: f,
                  autoFocus: a,
                  name: s,
                  placeholder: d,
                  className: Lx,
                  value: j,
                  maxLength: g,
                })
              : E(F.input, {
                  ref: N,
                  ...re,
                  ...te,
                  "aria-label": n,
                  "aria-labelledby": r,
                  "aria-describedby": i,
                  type: h,
                  required: f,
                  autoFocus: a,
                  name: s,
                  placeholder: d,
                  className: Zc(Lx, !ie && zx),
                  value: j,
                  min: l,
                  max: c,
                  step: p,
                  maxLength: g,
                }),
            I &&
              E(`button`, {
                type: `button`,
                className: rk,
                onClick: P,
                "aria-label": `Clear`,
                children: E(Dg, {}),
              }),
          ],
        });
      })),
      (ek = `framer-form-text-input`),
      (tk = `framer-form-text-input-type`),
      (nk = `framer-form-textarea-input-type`),
      (rk = `framer-form-text-input-clear`),
      (ik = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path d="m1.5 8 7-7M9 5.5l-3 3" stroke="%23999" stroke-width="1.5" stroke-linecap="round"></path></svg>`),
      (ak = `<svg xmlns="http://www.w3.org/2000/svg" transform="scale(-1, 1)" width="14" height="14"><path d="m1.5 8 7-7M9 5.5l-3 3" stroke="%23999" stroke-width="1.5" stroke-linecap="round"></path></svg>`),
      (ok = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="rgb(153, 153, 153)" d="M3 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2H3Z" opacity=".3"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M3.25 5.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2ZM3 6.75h9.5"/></svg>`),
      (sk = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M2.5 8a5.5 5.5 0 1 1 11 0 5.5 5.5 0 1 1-11 0Z"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.75 8.25v-3m0 3h2"/></svg>`),
      (ck = Dx(
        $O,
        [
          ...Vx,
          ...Wx,
          ...Hx,
          Z(`.${Rx}`, {
            boxShadow: Z.variable(`--framer-input-box-shadow`),
            borderTopLeftRadius: Z.variable(`--framer-input-border-radius-top-left`),
            borderTopRightRadius: Z.variable(`--framer-input-border-radius-top-right`),
            borderBottomRightRadius: Z.variable(`--framer-input-border-radius-bottom-right`),
            borderBottomLeftRadius: Z.variable(`--framer-input-border-radius-bottom-left`),
            cornerShape: Z.variable(`--framer-input-corner-shape`),
            background: Z.variable(`--framer-input-background`),
            transition: Z.variable(`--framer-input-focused-transition`),
            transitionProperty: `background, box-shadow`,
          }),
          Z(`.${ek} .${Lx}::placeholder`, {
            color: Z.variable(`--framer-input-placeholder-color`),
          }),
          Z(`.${ek}`, {
            display: `flex`,
            alignItems: `center`,
            padding: Z.variable(`--framer-input-padding`),
          }),
          Z(`.${ek} .${Lx}`, { flex: 1, minWidth: 0, width: `auto`, padding: 0 }),
          Z(`.${ek}.${nk}`, { padding: 0 }),
          Z(`.${ek}.${nk} textarea.${Lx}`, {
            width: `100%`,
            padding: Z.variable(`--framer-input-padding`),
          }),
          Z(`.${ek} .${Lx}[type="date"], .${ek} .${Lx}[type="time"]`, {
            "-webkit-appearance": `none`,
            appearance: `none`,
          }),
          Z(`.${ek} .${Lx}::-webkit-date-and-time-value`, { textAlign: `start` }),
          Z(`.${ek} textarea`, {
            display: `flex`,
            resize: Z.variable(`--framer-textarea-resize`),
            overflowY: `auto`,
            minHeight: `inherit`,
            maxHeight: `inherit`,
            whiteSpace: `break-spaces`,
          }),
          Z(`.${ek} textarea::-webkit-resizer`, { background: `no-repeat ${it(ik)}` }),
          Z(`.${ek}:dir(rtl) textarea::-webkit-resizer`, { background: `no-repeat ${it(ak)}` }),
          Z(`.${ek} textarea::-webkit-scrollbar`, { cursor: `pointer`, background: `transparent` }),
          Z(`.${ek} textarea::-webkit-scrollbar-thumb:window-inactive`, { opacity: 0 }),
          Z(`.${ek} textarea::-webkit-scrollbar-corner`, {
            background: `none`,
            backgroundColor: `transparent`,
            outline: `none`,
          }),
          Z(`.${ek} .${Lx}::-webkit-datetime-edit`, {
            height: Z.variable(`--framer-input-font-line-height`),
          }),
          Z(`.${ek} .${Lx}.${zx}::-webkit-datetime-edit`, {
            color: Z.variable(`--framer-input-placeholder-color`),
            "-webkit-text-fill-color": Z.variable(`--framer-input-placeholder-color`),
            overflow: `visible`,
          }),
          Z(`.${ek}.${tk}::before`, {
            content: Z.variable(`--framer-input-icon-content`, `none`),
            display: `block`,
            flexShrink: 0,
            width: `${Yx}px`,
            height: `${Yx}px`,
            marginRight: `${Jx}px`,
            ...Xx,
            backgroundPosition: `center`,
            maskPosition: `center`,
            maskImage: Z.variable(`--framer-input-icon-mask-image`),
            backgroundImage: Z.variable(`--framer-input-icon-image`),
          }),
          Z(`.${ek} .${Lx}[type="date"]::before, .${ek} .${Lx}[type="time"]::before`, {
            ...Zx,
            paddingLeft: `${qx}px`,
            maskPosition: `${qx}px center`,
            backgroundPosition: `${qx}px center`,
          }),
          Z(`.${ek} .${Lx}[type="date"]::before`, {
            maskImage: Z.variable(`--framer-input-icon-mask-image`, it(ok)),
            backgroundImage: Z.variable(`--framer-input-icon-image`),
          }),
          Z(`.${ek} .${Lx}[type="time"]::before`, {
            maskImage: Z.variable(`--framer-input-icon-mask-image`, it(sk)),
            backgroundImage: Z.variable(`--framer-input-icon-image`),
          }),
          Z(`.${ek} .${Lx}::-webkit-calendar-picker-indicator`, {
            opacity: 0,
            position: `absolute`,
            right: 0,
            top: 0,
            bottom: 0,
            padding: Z.variable(`--framer-input-padding`),
            paddingTop: 0,
            paddingBottom: 0,
            width: `${Yx}px`,
            height: `100%`,
          }),
          Z(`.${ek}:focus-within, .${ek}.${Bx}`, {
            boxShadow: Z.variable(`--framer-input-focused-box-shadow`, `--framer-input-box-shadow`),
            background: Z.variable(
              `--framer-input-focused-background`,
              `--framer-input-background`
            ),
          }),
          Z(`.${ek}:focus-within::after, .${ek}.${Bx}::after`, {
            borderColor: Z.variable(
              `--framer-input-focused-border-color`,
              `--framer-input-border-color`
            ),
            borderStyle: Z.variable(
              `--framer-input-focused-border-style`,
              `--framer-input-border-style`
            ),
            borderWidth: Z.variable(`--framer-input-focused-border-width`, Ux),
          }),
          Z(`.${rk}`, {
            display: `flex`,
            order: 2,
            alignItems: `center`,
            justifyContent: `center`,
            flexShrink: 0,
            width: `${Yx}px`,
            height: `${Yx}px`,
            marginLeft: `${Jx}px`,
            padding: 0,
            border: `none`,
            background: `transparent`,
            cursor: `pointer`,
            color: Z.variable(`--framer-input-placeholder-color`),
            transition: `color 0.15s ease`,
            outline: `none`,
          }),
          Z(`.${rk}:hover, .${rk}:focus-visible`, {
            color: Z.variable(`--framer-input-font-color`),
          }),
        ],
        `framer-lib-form-plain-text-input`
      )),
      (lk = {
        x: void 0,
        y: void 0,
        z: 0,
        translateX: void 0,
        translateY: void 0,
        translateZ: 0,
        rotate: void 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: void 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: void 0,
        originY: void 0,
        originZ: void 0,
        perspective: 0,
        transformPerspective: 0,
      }),
      (uk = { opacity: 0 }),
      (dk = { opacity: 1 }),
      (fk = Rg(
        f.forwardRef(function (e, t) {
          let {
              background: n,
              children: r,
              alt: i,
              draggable: a,
              fitImageDimension: o,
              style: c,
              ...l
            } = e,
            d = { ...c },
            p = s(() => Io(n), [n]),
            [m, h] = A();
          f.useEffect(() => {
            if (!n?.src || !o || p) return;
            let e = document.createElement(`img`);
            ((e.onload = () => {
              e.naturalWidth &&
                e.naturalHeight &&
                u(() => h({ width: e.naturalWidth, height: e.naturalHeight }));
            }),
              (e.src = n.src));
          }, [n?.src, o, p]);
          let g = p ?? m;
          return (
            o && g && ((d[o] = `auto`), (d.aspectRatio = g.width / g.height)),
            n && delete d.background,
            w(Lo(e.as), {
              ...l,
              style: d,
              ref: t,
              draggable: a,
              children: [n && E(io, { image: n, alt: i, draggable: a }), r],
            })
          );
        })
      )),
      (mk = !Tn() && typeof Document < `u` && typeof Document.parseHTMLUnsafe == `function`),
      (hk =
        /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi),
      (gk = `{{ text-placeholder }}`),
      (_k = `rich-text-wrapper`),
      (vk = $o(
        D(function (e, t) {
          let {
              id: n,
              name: r,
              html: i,
              htmlFromDesign: a,
              text: o,
              textFromDesign: c,
              fonts: l = [],
              width: u,
              height: d,
              left: f,
              right: p,
              top: m,
              bottom: g,
              center: _,
              className: v,
              stylesPresetsClassName: y,
              visible: b = !0,
              opacity: x,
              rotation: C = 0,
              verticalAlignment: w = `top`,
              isEditable: T = !1,
              environment: D = J.current,
              withExternalLayout: O = !1,
              positionSticky: k,
              positionStickyTop: A,
              positionStickyRight: j,
              positionStickyBottom: ee,
              positionStickyLeft: N,
              __htmlStructure: P,
              __fromCanvasComponent: te = !1,
              _forwardedOverrideId: ne,
              _forwardedOverrides: re,
              _usesDOMRect: ie,
              children: I,
              ...ae
            } = e,
            oe = ko(),
            se = as(e),
            ce = M(null),
            le = t ?? ce,
            { navigate: ue, getRoute: de } = Dt(),
            L = kt();
          (Yn(e.preload ?? []), ds(e, le));
          let fe = S(gS),
            pe = vu(),
            R = o,
            me = ne ?? n;
          if (me && re) {
            let e = re[me];
            typeof e == `string` && (R = e);
          }
          let he = ``;
          if (R) {
            let e = Bg(R);
            he = P ? P.replace(gk, e) : `<p>${e}</p>`;
          } else if (i) he = i;
          else if (c) {
            let e = Bg(c);
            he = P ? P.replace(gk, e) : `<p>${e}</p>`;
          } else a && (he = a);
          let ge = Bu(),
            _e = s(() => (pe || !de || !L ? he : Vg(he, de, L, ge)), [he, de, L, ge]);
          if (
            (h(() => {
              let e = le.current;
              if (e === null) return;
              function t(e) {
                let t = Pu(e.target, le.current);
                Mn(e) ||
                  !ue ||
                  !t ||
                  t.getAttribute(`target`) === `_blank` ||
                  (wu(ue, t, ge) && e.preventDefault());
              }
              return (
                e.addEventListener(`click`, t),
                () => {
                  e.removeEventListener(`click`, t);
                }
              );
            }, [ue, ge]),
            Wg(l, te, le),
            !b)
          )
            return null;
          let ve = T && D() === J.canvas,
            ye = {
              outline: `none`,
              display: `flex`,
              flexDirection: `column`,
              justifyContent: Ug(w),
              opacity: ve ? 0 : x,
              flexShrink: 0,
            },
            be = J.hasRestrictions(),
            xe = Eo(e, oe || 0, !1),
            Se = ie && (u === `auto` || d === `auto`),
            Ce = !!e.transformTemplate || !xe || !be || te || Se,
            we = Ce ? (e.transformTemplate ?? is(_)) : void 0;
          if (!O) {
            if (xe && be && !Se) {
              let e = yb.getNumber(C).toFixed(4);
              ((ye.transform = `translate(${xe.x}px, ${xe.y}px) rotate(${e}deg)`),
                (ye.width = xe.width),
                (ye.minWidth = xe.width),
                (ye.height = xe.height));
            } else
              ((ye.left = f),
                (ye.right = p),
                (ye.top = m),
                (ye.bottom = g),
                (ye.width = u),
                (ye.height = d),
                (ye.rotate = C));
            k
              ? (!pe || fe) &&
                ((ye.position = `sticky`),
                (ye.willChange = `transform`),
                (ye.top = A),
                (ye.right = j),
                (ye.bottom = ee),
                (ye.left = N))
              : pe && (e.positionFixed || e.positionAbsolute) && (ye.position = `absolute`);
          }
          return (
            Yc(e, ye),
            Kc(e, ye),
            Object.assign(ye, e.style),
            E(F.div, {
              id: n,
              ref: le,
              ...ae,
              ...ts(Ce ? _ : void 0, e.style),
              style: ye,
              layoutId: se,
              "data-framer-name": r,
              "data-framer-component-type": `DeprecatedRichText`,
              "data-center": _,
              className: Zc(v, y, _k),
              transformTemplate: we,
              dangerouslySetInnerHTML: { __html: _e },
            })
          );
        })
      )),
      (yk = {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        filter: `none`,
      }),
      (bk = RegExp(
        `\\p{Regional_Indicator}{2}|\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?(?:\\u{200d}\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?)*|.`,
        `gu`
      )),
      (xk = D(function (e, t) {
        return E(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Sk = F.create(xk)),
      (Ck = D(function ({ viewBoxScale: e, viewBox: t, children: n, ...r }, i) {
        return E(Sk, {
          ...r,
          ref: i,
          viewBox: t,
          children: E(F.foreignObject, {
            width: `100%`,
            height: `100%`,
            className: `framer-fit-text`,
            transform: `scale(${e})`,
            style: { overflow: `visible`, transformOrigin: `center center` },
            children: n,
          }),
        });
      })),
      (wk = []),
      (Tk = `RichTextContainer`),
      (Ek = D(function (e, t) {
        let {
            __fromCanvasComponent: n = !1,
            _forwardedOverrideId: r,
            _forwardedOverrides: i,
            _usesDOMRect: a,
            anchorLinkOffsetY: o,
            as: c,
            bottom: l,
            center: u,
            children: d,
            environment: f = J.current,
            fonts: p = wk,
            height: m,
            isEditable: h = !1,
            left: g,
            name: _,
            opacity: v,
            positionSticky: y,
            positionStickyBottom: b,
            positionStickyLeft: x,
            positionStickyRight: C,
            positionStickyTop: w,
            right: T,
            rotation: D = 0,
            style: O,
            _initialStyle: k,
            stylesPresetsClassNames: A,
            text: j,
            top: ee,
            verticalAlignment: N = `top`,
            visible: P = !0,
            width: te,
            withExternalLayout: ne = !1,
            viewBox: F,
            viewBoxScale: re = 1,
            effect: ie,
            ...I
          } = e,
          ae = ko(),
          oe = f(),
          se = oe === J.canvas,
          ce = se || oe === J.export,
          le = S(gS),
          ue = as(e),
          de = M(null),
          L = t ?? de;
        (ds(e, L), Wg(p, n, L));
        let fe = $g(ie, L),
          pe = s(() => {
            if (d) return s_(d, A, j, o, void 0, fe.getTokenizer());
          }, [d, A, j, o, fe]);
        if (!P) return null;
        let R = { opacity: h && se ? 0 : v },
          me = Ug(N);
        me !== tS.justifyContent && (R.justifyContent = me);
        let he = {},
          ge = J.hasRestrictions(),
          _e = Eo(e, ae || 0, !1),
          ve = a && (te === `auto` || m === `auto`),
          ye = !!e.transformTemplate || !_e || !ge || n || ve,
          be = ye ? (e.transformTemplate ?? is(u)) : void 0;
        (ne ||
          (_e && ge && !ve
            ? ((he.x = _e.x + (B(O?.x) ? O.x : 0)),
              (he.y = _e.y + (B(O?.y) ? O.y : 0)),
              (he.left = 0),
              (he.top = 0),
              (R.rotate = yb.getNumber(D)),
              (R.width = _e.width),
              (R.minWidth = _e.width),
              (R.height = _e.height))
            : ((R.left = g),
              (R.right = T),
              (R.top = ee),
              (R.bottom = l),
              (R.width = te),
              (R.height = m),
              (R.rotate = D)),
          y
            ? (!ce || le) &&
              ((R.position = `sticky`),
              (R.willChange = `transform`),
              (R.top = w),
              (R.right = C),
              (R.bottom = b),
              (R.left = x))
            : se && (e.positionFixed || e.positionAbsolute) && (R.position = `absolute`)),
          Yc(e, R),
          Kc(e, R),
          Object.assign(R, k, O, he),
          ue && (I.layout = `preserve-aspect`));
        let xe = Lo(e.as),
          Se = I[`data-framer-name`] ?? _,
          Ce = se ? i_(Zb(I)) : I,
          we = ts(ye ? u : void 0, O);
        return z(e.viewBox)
          ? e.as === void 0
            ? E(Ck, {
                ...Ce,
                ...we,
                ref: L,
                style: R,
                layoutId: ue,
                viewBox: F,
                viewBoxScale: re,
                transformTemplate: be,
                "data-framer-name": Se,
                "data-framer-component-type": Tk,
                children: pe,
              })
            : E(xe, {
                ...Ce,
                ...we,
                ref: L,
                style: R,
                layoutId: ue,
                transformTemplate: be,
                "data-framer-name": Se,
                "data-framer-component-type": Tk,
                children: E(Ck, {
                  viewBox: F,
                  viewBoxScale: re,
                  style: { width: `100%`, height: `100%` },
                  children: pe,
                }),
              })
          : E(xe, {
              ...Ce,
              ...we,
              ref: L,
              style: R,
              layoutId: ue,
              transformTemplate: be,
              "data-framer-name": Se,
              "data-framer-component-type": Tk,
              children: pe,
            });
      })),
      (Dk = $o(
        D(function ({ children: e, html: t, htmlFromDesign: n, ...r }, i) {
          let a = t || e || n;
          if (z(a)) {
            !r.stylesPresetsClassName &&
              V(r.stylesPresetsClassNames) &&
              (r.stylesPresetsClassName = Object.values(r.stylesPresetsClassNames).join(` `));
            let e = { [z(t) ? `html` : `htmlFromDesign`]: a };
            return E(vk, { ...r, ...e, ref: i });
          }
          if (!r.stylesPresetsClassNames && z(r.stylesPresetsClassName)) {
            let [e, t, n, i, a] = r.stylesPresetsClassName.split(` `);
            e === void 0 || t === void 0 || n === void 0 || i === void 0 || a === void 0
              ? console.warn(
                  `Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`
                )
              : (r.stylesPresetsClassNames = { h1: e, h2: t, h3: n, p: i, a });
          }
          return E(Ek, { ...r, ref: i, children: T(a) ? a : void 0 });
        })
      )),
      (Ok = `framer/asset-reference,`),
      (kk = ({
        id: e,
        path: t,
        transform: n,
        repeat: r,
        width: i,
        height: a,
        offsetX: o,
        offsetY: s,
      }) => {
        let c = b_(t);
        return E(`pattern`, {
          id: e,
          width: r ? i : `100%`,
          height: r ? a : `100%`,
          patternContentUnits: r ? void 0 : `objectBoundingBox`,
          patternUnits: r ? `userSpaceOnUse` : void 0,
          x: r ? o : void 0,
          y: r ? s : void 0,
          children: E(
            `image`,
            {
              width: r ? i : 1,
              height: r ? a : 1,
              href: c,
              preserveAspectRatio: `none`,
              transform: r ? void 0 : n,
              x: r ? 0 : void 0,
              y: r ? 0 : void 0,
            },
            c
          ),
        });
      }),
      (Ak = En()),
      (jk = class {
        constructor(e, t, n, r, i = 0) {
          ((this.id = e),
            (this.svg = t),
            (this.innerHTML = n),
            (this.viewBox = r),
            (this.count = i));
        }
        id;
        svg;
        innerHTML;
        viewBox;
        count;
      }),
      (Mk = `position: absolute; overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict`),
      (Nk = class {
        entries = new Map();
        vectorSetItems = new Map();
        debugGetEntries() {
          return this.entries;
        }
        subscribe(e, t, n, r) {
          if (!e || e === ``) return ``;
          let i = this.entries.get(e);
          if (!i) {
            n ||= `svg${String(wS(e))}_${String(e.length)}`;
            let a = e,
              o,
              s = S_(e);
            (s &&
              (t && C_(s, n),
              (s.id = n),
              (o = O_(s)),
              s.removeAttribute(`xmlns`),
              s.removeAttribute(`xlink`),
              s.removeAttribute(`xmlns:xlink`),
              (a = s.outerHTML)),
              (i = this.createDOMElementFor(a, n, o, r)),
              this.entries.set(e, i));
          }
          return ((i.count += 1), i.innerHTML);
        }
        getViewBox(e) {
          if (!(!e || e === ``)) return this.entries.get(e)?.viewBox;
        }
        unsubscribe(e) {
          if (!e || e === ``) return;
          let t = this.entries.get(e);
          t && (--t.count, !(t.count > 0) && setTimeout(() => this.maybeRemoveEntry(e), 5e3));
        }
        maybeRemoveEntry(e) {
          let t = this.entries.get(e);
          t && (t.count > 0 || (this.entries.delete(e), this.removeDOMElement(t)));
        }
        removeDOMElement(e) {
          Ak && document?.getElementById(e.id)?.remove();
        }
        getOrCreateTemplateContainer() {
          let e = document.getElementById(`svg-templates`);
          if (e) return e;
          let t = document.createElement(`div`);
          return (
            (t.id = `svg-templates`),
            (t.ariaHidden = `true`),
            (t.style.cssText = Mk),
            document.body.appendChild(t),
            t
          );
        }
        maybeAppendTemplate(e, t) {
          if (document.getElementById(e)) return;
          let n = document.createElement(`div`);
          n.innerHTML = t;
          let r = n.firstElementChild;
          r && ((r.id = e), this.getOrCreateTemplateContainer().appendChild(r));
        }
        createDOMElementFor(e, t, n, r) {
          Ak && this.maybeAppendTemplate(t, e);
          let i = n ? `0 0 ${n.width} ${n.height}` : void 0,
            a = i ? ` viewBox="${i}"` : ``;
          return new jk(
            t,
            e,
            `<svg style="width:100%;height:100%;${r ? `overflow: visible;` : ``}"${a}><use href="#${t}"/></svg>`,
            i
          );
        }
        template(e, t) {
          return (
            this.vectorSetItems.get(e) ||
              (this.vectorSetItems.set(e, { svg: t, count: 0 }), !Ak) ||
              this.maybeAppendTemplate(e, t),
            `#${e}`
          );
        }
        subscribeToTemplate(e) {
          let t = this.vectorSetItems.get(e);
          if (t)
            return (
              t.count++,
              () => {
                let t = this.vectorSetItems.get(e);
                t &&
                  (t.count--,
                  !(t.count > 0) &&
                    setTimeout(() => {
                      this.vectorSetItems.get(e)?.count ||
                        (this.vectorSetItems.delete(e),
                        Ak && document?.getElementById(e)?.remove());
                    }, 5e3));
              }
            );
        }
        clear() {
          this.entries.clear();
        }
        generateTemplates() {
          let e = [];
          return (
            e.push(`<div id="svg-templates" style="${Mk}" aria-hidden="true">`),
            this.entries.forEach((t) => e.push(t.svg)),
            this.vectorSetItems.forEach((t, n) => {
              let r = t.svg;
              e.push(r.includes(`id="${n}"`) ? r : r.replace(/^<svg/u, `<svg id="${n}"`));
            }),
            e.push(`</div>`),
            e.join(`
`)
          );
        }
      }),
      (Pk = new Nk()),
      (Fk = {
        cm: 96 / 2.54,
        mm: 96 / 2.54 / 10,
        Q: 96 / 2.54 / 40,
        in: 96,
        pc: 96 / 6,
        pt: 96 / 72,
        px: 1,
        em: 16,
        ex: 8,
        ch: 8,
        rem: 16,
      }),
      (Ik = D(function (e, t) {
        let n = ko(),
          r = as(e),
          i = f.useRef(null),
          a = t ?? i,
          o = XO();
        return (
          ds(e, i),
          E(Rk, { ...e, innerRef: a, parentSize: n, layoutId: r, providedWindow: o })
        );
      })),
      (Lk = 5e4),
      (Rk = class e extends CS {
        static supportsConstraints = !0;
        static defaultSVGProps = {
          left: void 0,
          right: void 0,
          top: void 0,
          bottom: void 0,
          style: void 0,
          _constraints: { enabled: !0, aspectRatio: null },
          parentSize: 0,
          rotation: 0,
          visible: !0,
          svg: ``,
          shadows: [],
        };
        static defaultProps = { ...CS.defaultProps, ...e.defaultSVGProps };
        static frame(e) {
          return Eo(e, e.parentSize || 0);
        }
        container = f.createRef();
        svgElement = null;
        setSVGElement = (e) => {
          ((this.svgElement = e), this.setLayerElement(e));
        };
        previouslyRenderedSVG = ``;
        get frame() {
          return Eo(this.props, this.props.parentSize || 0);
        }
        unmountedSVG = ``;
        componentDidMount() {
          if (this.unmountedSVG) {
            let { svgContentId: e } = this.props,
              t = e ? `svg${e}` : null;
            (Pk.subscribe(this.unmountedSVG, !e, t),
              (this.previouslyRenderedSVG = this.unmountedSVG));
          }
          this.props.svgContentId || M_(this.container, this.props);
        }
        componentWillUnmount() {
          (Pk.unsubscribe(this.previouslyRenderedSVG),
            (this.unmountedSVG = this.previouslyRenderedSVG),
            (this.previouslyRenderedSVG = ``));
        }
        componentDidUpdate(e) {
          if ((super.componentDidUpdate(e), this.props.svgContentId)) return;
          let { fill: t } = this.props;
          (fx.isImageObject(t) &&
            fx.isImageObject(e.fill) &&
            t.src !== e.fill.src &&
            gs(this.svgElement, `fill`, null, !1),
            M_(this.container, this.props));
        }
        collectLayout(e, t) {
          if (this.props.withExternalLayout) {
            ((t.width = `100%`), (t.height = `100%`), (t.aspectRatio = `inherit`));
            return;
          }
          let n = this.frame,
            {
              rotation: r,
              intrinsicWidth: i,
              intrinsicHeight: a,
              width: o,
              height: s,
            } = this.props,
            c = yb.getNumber(r);
          if (
            ((e.opacity = W(this.props.opacity) ? this.props.opacity : 1), J.hasRestrictions() && n)
          ) {
            (Object.assign(e, {
              transform: `translate(${n.x}px, ${n.y}px) rotate(${c.toFixed(4)}deg)`,
              width: `${n.width}px`,
              height: `${n.height}px`,
            }),
              Co(this.props) && (e.position = `absolute`));
            let r = n.width / (i || 1),
              o = n.height / (a || 1);
            t.transformOrigin = `top left`;
            let { zoom: s, target: l } = Ub;
            if (l === J.export) {
              let e = s > 1 ? s : 1;
              ((t.transform = `scale(${r * e}, ${o * e})`), (t.zoom = 1 / e));
            } else t.transform = `scale(${r}, ${o})`;
            i && a && ((t.width = i), (t.height = a));
            return;
          }
          let { left: l, right: u, top: d, bottom: f } = this.props;
          (Object.assign(e, {
            left: l,
            right: u,
            top: d,
            bottom: f,
            width: o,
            height: s,
            rotate: c,
          }),
            Object.assign(t, { left: 0, top: 0, bottom: 0, right: 0, position: `absolute` }));
        }
        render() {
          let {
            id: e,
            visible: t,
            style: n,
            fill: r,
            svg: i,
            intrinsicHeight: a,
            intrinsicWidth: o,
            title: s,
            description: c,
            layoutId: l,
            className: u,
            variants: d,
            withExternalLayout: f,
            innerRef: p,
            svgContentId: m,
            height: h,
            opacity: _,
            width: v,
            requiresOverflowVisible: y,
            ...b
          } = this.props;
          if (!f && (!t || !e)) return null;
          let x = e ?? l ?? `svg`,
            S = this.frame,
            C = S || { width: o || 100, height: a || 100 },
            T = { ...n, imageRendering: `pixelated`, flexShrink: 0 },
            D = {};
          (this.collectLayout(T, D),
            Wc(this.props, T),
            Yc(this.props, T),
            CS.applyWillChange(this.props, T, !1));
          let O = null;
          if (typeof r == `string` || q.isColorObject(r)) {
            let e = q.isColorObject(r) ? r.initialValue || q.toRgbString(r) : r;
            ((T.fill = e), (T.color = e));
          } else if (jS.isLinearGradient(r)) {
            let t = r,
              n = `${encodeURI(e || ``)}g${jS.hash(t)}`;
            T.fill = `url(#${n})`;
            let { stops: i, x1: a, x2: o, y1: s, y2: c } = f_(t, x);
            O = E(`svg`, {
              ref: this.setSVGElement,
              width: `100%`,
              height: `100%`,
              style: { position: `absolute` },
              role: `presentation`,
              children: E(`linearGradient`, {
                id: n,
                x1: a,
                x2: o,
                y1: s,
                y2: c,
                children: i.map((e, t) =>
                  E(`stop`, { offset: e.position, stopColor: e.color, stopOpacity: e.alpha }, t)
                ),
              }),
            });
          } else if (NS.isRadialGradient(r)) {
            let t = r,
              n = `${encodeURI(e || ``)}g${NS.hash(t)}`;
            T.fill = `url(#${n})`;
            let i = p_(t, x);
            O = E(`svg`, {
              ref: this.setSVGElement,
              width: `100%`,
              height: `100%`,
              style: { position: `absolute` },
              role: `presentation`,
              children: E(`radialGradient`, {
                id: n,
                cy: t.centerAnchorY,
                cx: t.centerAnchorX,
                r: t.widthFactor,
                children: i.stops.map((e, t) =>
                  E(`stop`, { offset: e.position, stopColor: e.color, stopOpacity: e.alpha }, t)
                ),
              }),
            });
          } else if (fx.isImageObject(r)) {
            let e = v_(r, C, x);
            e &&
              ((T.fill = `url(#${e.id})`),
              (O = E(`svg`, {
                ref: this.setSVGElement,
                width: `100%`,
                height: `100%`,
                style: { position: `absolute` },
                role: `presentation`,
                children: E(`defs`, { children: E(kk, { ...e }) }),
              })));
          }
          let k = { "data-framer-component-type": `SVG` },
            A = !S;
          Object.assign(k, ts(A ? this.props.center : void 0, this.props.style));
          let j =
              !y &&
              !O &&
              !T.fill &&
              !T.background &&
              !T.backgroundImage &&
              i.length < Lk &&
              !k_(i) &&
              !A_(i),
            M = null;
          if (j)
            ((T.backgroundSize = `100% 100%`),
              (T.backgroundImage = it(i)),
              Pk.unsubscribe(this.previouslyRenderedSVG),
              (this.previouslyRenderedSVG = ``));
          else {
            let e = m ? `svg${m}` : null,
              t = Pk.subscribe(i, !m, e, y);
            (Pk.unsubscribe(this.previouslyRenderedSVG),
              (this.previouslyRenderedSVG = i),
              j_(T) && (T.overflow = `hidden`),
              (M = w(g, {
                children: [
                  O,
                  E(
                    `div`,
                    {
                      className: `svgContainer`,
                      style: D,
                      ref: this.container,
                      dangerouslySetInnerHTML: { __html: t },
                    },
                    fx.isImageObject(r) ? r.src : ``
                  ),
                ],
              })));
          }
          let ee = Lo(this.props.as),
            { href: N, target: P, rel: te, onClick: ne, onTap: F } = this.props,
            re = s || c;
          return E(ee, {
            ...k,
            ...b,
            layoutId: l,
            transformTemplate: A ? is(this.props.center) : void 0,
            id: e,
            ref: p,
            style: T,
            className: u,
            variants: d,
            tabIndex: this.props.tabIndex,
            role: re ? `img` : void 0,
            "aria-label": s,
            "aria-description": c,
            "aria-hidden": re ? void 0 : `true`,
            onTap: F,
            onClick: ne,
            href: N,
            target: P,
            rel: te,
            children: M,
          });
        }
      }),
      (zk = $o(Ik)),
      (Bk = 1e3),
      (Vk = `Variable`),
      (Hk = `explicitInter`),
      (Be.prototype.addChild = function ({ transformer: e = (e) => e }) {
        let t = L(e(this.get()));
        return (this.onChange((n) => t.set(e(n))), t);
      }));
  });
//! Credit to Astro | MIT License
/**
 * @license Emotion v11.0.0
 * MIT License
 *
 * Copyright (c) Emotion team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/*! Bundled license information:

react-is/cjs/react-is.production.min.js:
(** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*)
*/
export {
  Pk as $,
  q_ as A,
  qv as B,
  P_ as C,
  Zc as D,
  kx as E,
  Ex as F,
  dv as G,
  lt as H,
  F_ as I,
  Hi as J,
  yi as K,
  I_ as L,
  LC as M,
  zC as N,
  jh as O,
  RC as P,
  _w as Q,
  N_ as R,
  kw as S,
  _y as St,
  mS as T,
  Uk as U,
  Oi as V,
  ft as W,
  G_ as X,
  Pm as Y,
  Mu as Z,
  J as _,
  dw as _t,
  FT as a,
  Am as at,
  zk as b,
  JD as bt,
  Qw as c,
  Ui as ct,
  bv as d,
  Dt as dt,
  hi as et,
  gT as f,
  x_ as ft,
  VD as g,
  th as gt,
  NC as h,
  Dx as ht,
  Ba as i,
  hu as it,
  BC as j,
  ax as k,
  fk as l,
  zm as lt,
  Kf as m,
  eh as mt,
  Ow as n,
  Rl as nt,
  ck as o,
  vu as ot,
  er as p,
  Lm as pt,
  Hw as q,
  pC as r,
  kt as rt,
  OC as s,
  qn as st,
  pw as t,
  Em as tt,
  Zw as u,
  Ft as ut,
  fE as v,
  ul as vt,
  Vc as w,
  WO as x,
  JO as xt,
  Dk as y,
  W_ as yt,
  Sm as z,
};
//# sourceMappingURL=framer.CvMidwmI.mjs.map
