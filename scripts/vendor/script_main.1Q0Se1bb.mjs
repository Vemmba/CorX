import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  C as t,
  D as n,
  F as r,
  L as i,
  M as a,
  P as o,
  R as s,
  T as c,
  _ as l,
  a as u,
  b as d,
  d as f,
  h as p,
  i as m,
  j as h,
  k as ee,
  l as g,
  n as _,
  o as v,
  p as y,
  r as te,
  s as b,
  t as x,
  v as S,
  w as ne,
  x as C,
  z as w,
} from "./react.DSZvp07T.mjs";
import { P as T, i as re, o as E, t as D } from "./motion.CvY1ZliN.mjs";
import {
  $ as ie,
  A as O,
  B as k,
  Ct as A,
  D as j,
  Dt as ae,
  E as M,
  G as oe,
  K as N,
  M as se,
  N as ce,
  Ot as le,
  Q as ue,
  S as de,
  St as fe,
  V as P,
  W as pe,
  Y as me,
  Z as he,
  _ as F,
  _t as ge,
  at as _e,
  b as ve,
  bt as I,
  ct as ye,
  d as L,
  dt as R,
  et as be,
  f as xe,
  g as Se,
  gt as Ce,
  h as we,
  it as Te,
  l as Ee,
  m as z,
  n as De,
  o as Oe,
  ot as ke,
  p as Ae,
  q as B,
  r as V,
  rt as je,
  st as Me,
  t as H,
  tt as Ne,
  u as Pe,
  ut as Fe,
  vt as Ie,
  w as Le,
  wt as Re,
  x as U,
  y as ze,
  yt as Be,
  z as Ve,
} from "./framer.B0980QYx.mjs";
import {
  a as He,
  c as Ue,
  d as We,
  f as Ge,
  i as Ke,
  l as qe,
  o as Je,
  r as Ye,
  s as Xe,
  u as Ze,
} from "./shared-lib.C80r_x6z.mjs";
import {
  a as Qe,
  c as $e,
  d as et,
  f as tt,
  i as nt,
  l as rt,
  n as it,
  o as at,
  r as ot,
  s as st,
  t as ct,
  u as lt,
} from "./nFRos3To5.DL9A9mg6.mjs";
import { i as ut, n as dt, r as ft, t as pt } from "./ENNlAU9yc.ClIxIZUr.mjs";
import { i as mt, n as ht, r as gt, t as _t } from "./gWwvuO7c6.Do3gKUoq.mjs";
import { i as vt, n as yt, r as bt, t as xt } from "./TsxNrEyVF.4pfduYbn.mjs";
var St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt = e(() => {
    (b(),
      N(),
      c(),
      (St = `var(--framer-icon-mask)`),
      (Ct = y(function (e, t) {
        return v(`svg`, { ...e, ref: t, children: e.children });
      })),
      (wt = T.create(Ct)),
      (Tt = y((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? v(wt, { ...a, layoutId: r, ref: t, children: i })
          : v(`svg`, { ...a, ref: t, children: i });
      })),
      (Et = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 14.5 0" fill="transparent" height="1px" id="jMF44oNeb" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(4.75 5.75)" width="14.5px"/><path d="M 0 0 L 14.5 0" fill="transparent" height="1px" id="lwuMFFtBI" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(4.75 18.25)" width="14.5px"/><path d="M 0 0 L 14.5 0" fill="transparent" height="1px" id="KKxXbtl64" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(4.75 12)" width="14.5px"/></svg>`),
      (Dt = ({ dots: e, height: t, id: n, stroke: r, width: i, width1: a, ...o }) => ({
        ...o,
        BKVe8Pgvw: e ?? o.BKVe8Pgvw ?? 1,
        fICyAUQY1: r ?? o.fICyAUQY1 ?? `rgb(0, 0, 0)`,
        lKf_CQTz5: a ?? o.lKf_CQTz5 ?? 1.5,
      })),
      (Ot = I(
        y(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              fICyAUQY1: o,
              lKf_CQTz5: s,
              BKVe8Pgvw: c,
              ...l
            } = Dt(e),
            u = ge(`1171430842`, Et);
          return v(Tt, {
            ...l,
            className: O(`framer-OmG2n`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1335ju": s, "--18mrqx2": o, ...n },
            viewBox: `0 0 24 24`,
            children: v(`use`, { href: u }),
          });
        }),
        [
          `.framer-OmG2n { -webkit-mask: ${St}; aspect-ratio: 1; display: block; mask: ${St}; width: 24px; }`,
        ],
        `framer-OmG2n`
      )),
      (Ot.displayName = `Menu`),
      j(Ot, {
        fICyAUQY1: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Stroke`, type: V.Color },
        lKf_CQTz5: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: V.Number,
        },
        BKVe8Pgvw: {
          defaultValue: 1,
          displayStepper: !0,
          hidden: !0,
          max: 4,
          min: 1,
          title: `Dots`,
          type: V.Number,
        },
      }));
  }),
  At,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt = e(() => {
    (b(),
      N(),
      c(),
      (At = `var(--framer-icon-mask)`),
      (jt = y(function (e, t) {
        return v(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Mt = T.create(jt)),
      (Nt = y((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? v(Mt, { ...a, layoutId: r, ref: t, children: i })
          : v(`svg`, { ...a, ref: t, children: i });
      })),
      (Pt = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 10.5 0 L 0 10.5" fill="transparent" height="10.5px" id="dJkACGH8G" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(6.75 6.75)" width="10.5px"/><path d="M 0 0 L 10.5 10.5" fill="transparent" height="10.5px" id="pgy_UnrTc" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(6.75 6.75)" width="10.5px"/></svg>`),
      (Ft = ({ dots: e, height: t, id: n, stroke: r, width: i, width1: a, ...o }) => ({
        ...o,
        BKVe8Pgvw: e ?? o.BKVe8Pgvw ?? 1,
        fICyAUQY1: r ?? o.fICyAUQY1 ?? `rgb(0, 0, 0)`,
        lKf_CQTz5: a ?? o.lKf_CQTz5 ?? 1.5,
      })),
      (It = I(
        y(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              fICyAUQY1: o,
              lKf_CQTz5: s,
              BKVe8Pgvw: c,
              ...l
            } = Ft(e),
            u = ge(`3527454627`, Pt);
          return v(Nt, {
            ...l,
            className: O(`framer-KpKpK`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1335ju": s, "--18mrqx2": o, ...n },
            viewBox: `0 0 24 24`,
            children: v(`use`, { href: u }),
          });
        }),
        [
          `.framer-KpKpK { -webkit-mask: ${At}; aspect-ratio: 1; display: block; mask: ${At}; width: 24px; }`,
        ],
        `framer-KpKpK`
      )),
      (It.displayName = `Close`),
      j(It, {
        fICyAUQY1: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Stroke`, type: V.Color },
        lKf_CQTz5: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: V.Number,
        },
        BKVe8Pgvw: {
          defaultValue: 1,
          displayStepper: !0,
          hidden: !0,
          max: 4,
          min: 1,
          title: `Dots`,
          type: V.Number,
        },
      }));
  }),
  Rt,
  zt,
  Bt,
  Vt = e(() => {
    (N(),
      se.loadFonts([]),
      (Rt = [{ explicitInter: !0, fonts: [] }]),
      (zt = [
        `.framer-qPSHR .framer-styles-preset-1vnltb4:not(.rich-text-wrapper), .framer-qPSHR .framer-styles-preset-1vnltb4.rich-text-wrapper a { --framer-link-hover-text-color: var(--token-8f73c29a-f931-4e35-bf1d-abf6e1668228, #cf672a); --framer-link-text-color: var(--token-e6be3043-e1a9-4dbf-8f7b-1ce31d52b0bb, rgba(255, 255, 255, 0.6)); }`,
      ]),
      (Bt = `framer-qPSHR`));
  });
function Ht(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  Zt,
  W,
  Qt = e(() => {
    (b(),
      N(),
      D(),
      c(),
      Ue(),
      (Ut = [`Pvr55WFL0`, `KBXCCyvrf`]),
      (Wt = `framer-YwOlQ`),
      (Gt = { KBXCCyvrf: `framer-v-hrse5b`, Pvr55WFL0: `framer-v-1tnfvbz` }),
      (Kt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (qt = ({ value: e, children: t }) => {
        let n = h(E),
          r = e ?? n.transition,
          i = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return v(E.Provider, { value: i, children: t });
      }),
      (Jt = { "Variant 1": `Pvr55WFL0`, "Variant 2": `KBXCCyvrf` }),
      (Yt = T.create(r)),
      (Xt = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        CIZ_Ddnsd: e ?? i.CIZ_Ddnsd,
        variant: Jt[i.variant] ?? i.variant ?? `Pvr55WFL0`,
      })),
      (Zt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (W = I(
        y(function (e, t) {
          let n = C(null),
            i = t ?? n,
            a = ne(),
            { activeLocale: o, setLocale: s } = R();
          _e();
          let { style: c, className: l, layoutId: u, variant: d, CIZ_Ddnsd: f, ...p } = Xt(e),
            {
              baseVariant: m,
              classNames: h,
              clearLoadingGesture: ee,
              gestureHandlers: _,
              gestureVariant: y,
              isLoading: te,
              setGestureState: b,
              setVariant: x,
              variants: S,
            } = Be({
              cycleOrder: Ut,
              defaultVariant: `Pvr55WFL0`,
              ref: i,
              variant: d,
              variantClassNames: Gt,
            }),
            w = Zt(e, S),
            E = [He],
            { activeVariantCallback: D, delay: ie } = Te(m),
            k = D(async (...e) => {
              if ((b({ isPressed: !1 }), f && (await f(...e)) === !1)) return !1;
            }),
            A = D(async (...e) => {
              (b({ isHovered: !0 }), x(`KBXCCyvrf`));
            }),
            j = O(Wt, ...E),
            ae = D(async (...e) => {
              (b({ isHovered: !1 }), x(`Pvr55WFL0`));
            });
          return v(re, {
            id: u ?? a,
            children: v(Yt, {
              animate: S,
              initial: !1,
              children: v(qt, {
                value: Kt,
                children: v(z, {
                  href: { webPageId: `pnrf0LVZ7` },
                  motionChild: !0,
                  nodeId: `Pvr55WFL0`,
                  openInNewTab: !1,
                  scopeId: `BvdVrFWFR`,
                  smoothScroll: !0,
                  children: v(T.a, {
                    ...p,
                    ..._,
                    className: `${O(j, `framer-1tnfvbz`, l, h)} framer-hp1pik`,
                    "data-framer-name": `Variant 1`,
                    "data-highlight": !0,
                    "data-reset": `button`,
                    layoutDependency: w,
                    layoutId: `Pvr55WFL0`,
                    onMouseEnter: A,
                    onTap: k,
                    ref: i,
                    style: {
                      backgroundColor: `var(--token-857887c0-9486-4a16-b7a3-5457d6a4efbc, rgb(255, 255, 255))`,
                      borderBottomLeftRadius: 1046,
                      borderBottomRightRadius: 1046,
                      borderTopLeftRadius: 1046,
                      borderTopRightRadius: 1046,
                      ...c,
                    },
                    ...Ht(
                      { KBXCCyvrf: { "data-framer-name": `Variant 2`, onMouseLeave: ae } },
                      m,
                      y
                    ),
                    children: g(T.div, {
                      className: `framer-11zkr64`,
                      "data-framer-name": `Text`,
                      layoutDependency: w,
                      layoutId: `ZmkuzVxUk`,
                      children: [
                        g(T.div, {
                          className: `framer-10i9u48`,
                          "data-framer-name": `Text`,
                          layoutDependency: w,
                          layoutId: `TwS8vDu2P`,
                          children: [
                            v(U, {
                              __fromCanvasComponent: !0,
                              children: v(r, {
                                children: v(T.p, {
                                  className: `framer-styles-preset-qmqrl2`,
                                  "data-styles-preset": `rgevF2JsQ`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9a7b5b16-c52f-44cf-8d26-19e3fff7a3d6, rgb(16, 11, 8)))`,
                                  },
                                  children: `Get Started`,
                                }),
                              }),
                              className: `framer-1syrtd8`,
                              "data-framer-name": `Promo Button Label`,
                              fonts: [`Inter`],
                              layoutDependency: w,
                              layoutId: `dvMKiipAJ`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-9a7b5b16-c52f-44cf-8d26-19e3fff7a3d6, rgb(16, 11, 8))`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            v(U, {
                              __fromCanvasComponent: !0,
                              children: v(r, {
                                children: v(T.p, {
                                  className: `framer-styles-preset-qmqrl2`,
                                  "data-styles-preset": `rgevF2JsQ`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9a7b5b16-c52f-44cf-8d26-19e3fff7a3d6, rgb(16, 11, 8)))`,
                                  },
                                  children: `Get Started`,
                                }),
                              }),
                              className: `framer-qkyen8`,
                              "data-framer-name": `Promo Button Label`,
                              fonts: [`Inter`],
                              layoutDependency: w,
                              layoutId: `kySIpb9GN`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-9a7b5b16-c52f-44cf-8d26-19e3fff7a3d6, rgb(16, 11, 8))`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        g(T.div, {
                          className: `framer-1u4oxzi`,
                          "data-framer-name": `Arrow`,
                          layoutDependency: w,
                          layoutId: `GZRgFOV3t`,
                          children: [
                            v(de, {
                              className: `framer-83zlm6`,
                              "data-framer-name": `arrow`,
                              fill: `var(--token-c5c9e562-6208-494c-a46c-1fb5738d89f6, rgb(9, 4, 1)) /* {"name":"Near Black"} */`,
                              intrinsicHeight: 24,
                              intrinsicWidth: 24,
                              layoutDependency: w,
                              layoutId: `b_kSbY63e`,
                              svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5 7.5L6 18" stroke="#191919" stroke-width="1.5" stroke-linecap="round"/>
<path d="M8 6.18791C8 6.18791 16.0479 5.50949 17.2692 6.73079C18.4906 7.95209 17.812 16 17.812 16" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
                              withExternalLayout: !0,
                            }),
                            v(de, {
                              className: `framer-2hghhi`,
                              "data-framer-name": `arrow`,
                              fill: `var(--token-c5c9e562-6208-494c-a46c-1fb5738d89f6, rgb(9, 4, 1)) /* {"name":"Near Black"} */`,
                              intrinsicHeight: 24,
                              intrinsicWidth: 24,
                              layoutDependency: w,
                              layoutId: `URwM6ruEO`,
                              svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5 7.5L6 18" stroke="#191919" stroke-width="1.5" stroke-linecap="round"/>
<path d="M8 6.18791C8 6.18791 16.0479 5.50949 17.2692 6.73079C18.4906 7.95209 17.812 16 17.812 16" stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-YwOlQ.framer-hp1pik, .framer-YwOlQ .framer-hp1pik { display: block; }`,
          `.framer-YwOlQ.framer-1tnfvbz { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 48px; justify-content: center; overflow: visible; padding: 10px 16px 10px 24px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-YwOlQ .framer-11zkr64 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-YwOlQ .framer-10i9u48 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-YwOlQ .framer-1syrtd8 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-YwOlQ .framer-qkyen8 { bottom: -18px; flex: none; height: auto; left: 0px; position: absolute; white-space: pre; width: auto; z-index: 1; }`,
          `.framer-YwOlQ .framer-1u4oxzi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-YwOlQ .framer-83zlm6 { flex: none; height: 24px; position: relative; width: 24px; }`,
          `.framer-YwOlQ .framer-2hghhi { bottom: -24px; flex: none; height: 24px; left: -24px; position: absolute; width: 24px; z-index: 1; }`,
          `.framer-YwOlQ.framer-v-hrse5b .framer-1syrtd8 { left: 0px; position: absolute; top: -18px; z-index: 1; }`,
          `.framer-YwOlQ.framer-v-hrse5b .framer-qkyen8, .framer-YwOlQ.framer-v-hrse5b .framer-2hghhi { bottom: unset; left: unset; position: relative; }`,
          `.framer-YwOlQ.framer-v-hrse5b .framer-83zlm6 { position: absolute; right: -24px; top: -24px; z-index: 1; }`,
          ...Je,
        ],
        `framer-YwOlQ`
      )),
      (W.displayName = `Contact button`),
      (W.defaultProps = { height: 48, width: 155 }),
      j(W, {
        variant: {
          options: [`Pvr55WFL0`, `KBXCCyvrf`],
          optionTitles: [`Variant 1`, `Variant 2`],
          title: `Variant`,
          type: V.Enum,
        },
        CIZ_Ddnsd: { title: `Click`, type: V.EventHandler },
      }),
      M(
        W,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...k(Xe),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function G(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var $t,
  en,
  tn,
  nn,
  rn,
  an,
  on,
  sn,
  cn,
  ln,
  un,
  K,
  dn = e(() => {
    (b(),
      N(),
      D(),
      c(),
      kt(),
      Lt(),
      Ge(),
      Vt(),
      tt(),
      Qt(),
      ($t = Ve(W)),
      (en = [`yvUvWxvM7`, `TAiXNo5qT`, `D8L_mdfKT`, `bpKt9DW2q`, `OQseHBxLf`]),
      (tn = `framer-sDZ9x`),
      (nn = {
        bpKt9DW2q: `framer-v-1vx690j`,
        D8L_mdfKT: `framer-v-1mzn7wl`,
        OQseHBxLf: `framer-v-1hvvsqq`,
        TAiXNo5qT: `framer-v-70j6d9`,
        yvUvWxvM7: `framer-v-15x4r9x`,
      }),
      (rn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (an = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (on = ({ value: e, children: t }) => {
        let n = h(E),
          r = e ?? n.transition,
          i = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return v(E.Provider, { value: i, children: t });
      }),
      (sn = {
        "Variant 4": `bpKt9DW2q`,
        "Variant 5": `OQseHBxLf`,
        Desktop: `yvUvWxvM7`,
        Phone: `D8L_mdfKT`,
        Tablet: `TAiXNo5qT`,
      }),
      (cn = T.create(r)),
      (ln = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: sn[r.variant] ?? r.variant ?? `yvUvWxvM7`,
      })),
      (un = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (K = I(
        y(function (e, t) {
          let n = C(null),
            i = t ?? n,
            a = ne(),
            { activeLocale: o, setLocale: s } = R(),
            c = _e(),
            { style: l, className: u, layoutId: d, variant: f, ...p } = ln(e),
            {
              baseVariant: m,
              classNames: h,
              clearLoadingGesture: ee,
              gestureHandlers: _,
              gestureVariant: y,
              isLoading: te,
              setGestureState: b,
              setVariant: x,
              variants: S,
            } = Be({
              cycleOrder: en,
              defaultVariant: `yvUvWxvM7`,
              ref: i,
              variant: f,
              variantClassNames: nn,
            }),
            w = un(e, S),
            E = O(tn, rt, qe, Bt),
            { activeVariantCallback: D, delay: ie } = Te(m),
            k = D(async (...e) => {
              (b({ isPressed: !1 }), x(`D8L_mdfKT`));
            }),
            A = D(async (...e) => {
              x(`D8L_mdfKT`);
            }),
            j = () => !![`D8L_mdfKT`, `bpKt9DW2q`].includes(m),
            ae = D(async (...e) => {
              x(`bpKt9DW2q`);
            }),
            M = () => m !== `D8L_mdfKT`;
          return v(re, {
            id: d ?? a,
            children: v(cn, {
              animate: S,
              initial: !1,
              children: v(on, {
                value: rn,
                children: v(T.nav, {
                  ...p,
                  ..._,
                  className: O(E, `framer-15x4r9x`, u, h),
                  "data-framer-name": `Desktop`,
                  layoutDependency: w,
                  layoutId: `yvUvWxvM7`,
                  ref: i,
                  style: { ...l },
                  ...G(
                    {
                      bpKt9DW2q: {
                        "data-framer-name": `Variant 4`,
                        "data-highlight": !0,
                        onTap: k,
                      },
                      D8L_mdfKT: { "data-framer-name": `Phone` },
                      OQseHBxLf: { "data-framer-name": `Variant 5` },
                      TAiXNo5qT: { "data-framer-name": `Tablet` },
                    },
                    m,
                    y
                  ),
                  children: g(T.div, {
                    className: `framer-15pk4m9`,
                    "data-border": !0,
                    "data-framer-name": `Container`,
                    layoutDependency: w,
                    layoutId: `uEcwL03QO`,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-2ee91d79-478c-4695-9c6b-241f9952f218, rgba(255, 255, 255, 0.1))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      backdropFilter: `blur(15px)`,
                      background: `linear-gradient(90deg, rgba(0, 0, 0, 0.05) 0%, rgba(255, 255, 255, 0.05) 64.60643410682678%)`,
                      borderBottomLeftRadius: 100,
                      borderBottomRightRadius: 100,
                      borderTopLeftRadius: 100,
                      borderTopRightRadius: 100,
                      WebkitBackdropFilter: `blur(15px)`,
                    },
                    variants: {
                      bpKt9DW2q: {
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                      },
                      D8L_mdfKT: {
                        borderBottomLeftRadius: 36,
                        borderBottomRightRadius: 36,
                        borderTopLeftRadius: 36,
                        borderTopRightRadius: 36,
                      },
                    },
                    children: [
                      g(T.div, {
                        className: `framer-1y6spzn`,
                        "data-framer-name": `Logo container`,
                        layoutDependency: w,
                        layoutId: `xC2ORAdSj`,
                        children: [
                          v(z, {
                            href: { webPageId: `augiA20Il` },
                            motionChild: !0,
                            nodeId: `eJLIFJMTM`,
                            openInNewTab: !1,
                            scopeId: `f3v3UVvxO`,
                            children: g(T.a, {
                              className: `framer-1vwdca6 framer-1e5hprl`,
                              "data-framer-name": `Logo Container`,
                              layoutDependency: w,
                              layoutId: `eJLIFJMTM`,
                              ...G({ bpKt9DW2q: { "data-highlight": !0, onTap: A } }, m, y),
                              children: [
                                v(L, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 1254,
                                    intrinsicWidth: 1254,
                                    loading: P(
                                      (c?.y || 0) +
                                        (0 + ((c?.height || 72) - 0 - 72) / 2) +
                                        3 +
                                        0 +
                                        0
                                    ),
                                    pixelHeight: 1254,
                                    pixelWidth: 1254,
                                    sizes: `47px`,
                                    src: `../../assets/images/8iGnXAmGrCuwb8BzSPUZ4EgORM-1e1650.png`,
                                    srcSet: `../../assets/images/8iGnXAmGrCuwb8BzSPUZ4EgORM.png 512w,../../assets/images/8iGnXAmGrCuwb8BzSPUZ4EgORM-efec48.png 1024w,../../assets/images/8iGnXAmGrCuwb8BzSPUZ4EgORM-1e1650.png 1254w`,
                                  },
                                  className: `framer-l7ka9z`,
                                  layoutDependency: w,
                                  layoutId: `Ck1CFk1Hg`,
                                  ...G(
                                    {
                                      bpKt9DW2q: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 1254,
                                          intrinsicWidth: 1254,
                                          loading: P(
                                            (c?.y || 0) +
                                              (0 + ((c?.height || 200) - 0 - 754) / 2) +
                                              24 +
                                              0 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 1254,
                                          pixelWidth: 1254,
                                          sizes: `47px`,
                                          src: `../../assets/images/8iGnXAmGrCuwb8BzSPUZ4EgORM-1e1650.png`,
                                          srcSet: `../../assets/images/8iGnXAmGrCuwb8BzSPUZ4EgORM.png 512w,../../assets/images/8iGnXAmGrCuwb8BzSPUZ4EgORM-efec48.png 1024w,../../assets/images/8iGnXAmGrCuwb8BzSPUZ4EgORM-1e1650.png 1254w`,
                                        },
                                      },
                                      D8L_mdfKT: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 1254,
                                          intrinsicWidth: 1254,
                                          loading: P(
                                            (c?.y || 0) +
                                              (0 + ((c?.height || 200) - 0 - 72) / 2) +
                                              3 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 1254,
                                          pixelWidth: 1254,
                                          sizes: `47px`,
                                          src: `../../assets/images/8iGnXAmGrCuwb8BzSPUZ4EgORM-1e1650.png`,
                                          srcSet: `../../assets/images/8iGnXAmGrCuwb8BzSPUZ4EgORM.png 512w,../../assets/images/8iGnXAmGrCuwb8BzSPUZ4EgORM-efec48.png 1024w,../../assets/images/8iGnXAmGrCuwb8BzSPUZ4EgORM-1e1650.png 1254w`,
                                        },
                                      },
                                    },
                                    m,
                                    y
                                  ),
                                }),
                                v(U, {
                                  __fromCanvasComponent: !0,
                                  children: v(r, {
                                    children: v(T.p, {
                                      className: `framer-styles-preset-1xzp3vp`,
                                      "data-styles-preset": `UydIiHcQJ`,
                                      dir: `auto`,
                                      style: { "--framer-text-alignment": `center` },
                                      children: `Corx`,
                                    }),
                                  }),
                                  className: `framer-1gzxnu1`,
                                  "data-framer-name": `Logo Title Text`,
                                  fonts: [`Inter`],
                                  layoutDependency: w,
                                  layoutId: `JQscu2YGn`,
                                  style: { "--framer-paragraph-spacing": `0px` },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          }),
                          j() &&
                            v(T.div, {
                              className: `framer-wv8mro`,
                              "data-framer-name": `Icon`,
                              layoutDependency: w,
                              layoutId: `wowYiLXCW`,
                              ...G(
                                {
                                  bpKt9DW2q: { "data-highlight": !0, onTap: A },
                                  D8L_mdfKT: { "data-highlight": !0, onTap: ae },
                                },
                                m,
                                y
                              ),
                              children: v(xe, {
                                animated: !0,
                                className: `framer-1g789a6`,
                                Component: Ot,
                                layoutDependency: w,
                                layoutId: `VPY696hZk`,
                                style: {
                                  "--1335ju": 1.5,
                                  "--18mrqx2": `var(--token-857887c0-9486-4a16-b7a3-5457d6a4efbc, rgb(255, 255, 255))`,
                                  "--3it368": 1,
                                },
                                ...G({ bpKt9DW2q: { Component: It } }, m, y),
                              }),
                            }),
                        ],
                      }),
                      M() &&
                        g(T.div, {
                          className: `framer-xb5mz0`,
                          "data-framer-name": `Menu Items`,
                          layoutDependency: w,
                          layoutId: `kHo1VDkYa`,
                          ...G({ bpKt9DW2q: { "data-highlight": !0, onTap: A } }, m, y),
                          children: [
                            v(U, {
                              __fromCanvasComponent: !0,
                              children: v(r, {
                                children: v(T.p, {
                                  className: `framer-styles-preset-1ei6ekx`,
                                  "data-styles-preset": `bHwADsIpE`,
                                  dir: `auto`,
                                  children: v(z, {
                                    href: { hash: `:j7cJfFeeL`, webPageId: `augiA20Il` },
                                    motionChild: !0,
                                    nodeId: `kdFf4OW7L`,
                                    openInNewTab: !1,
                                    relValues: [],
                                    scopeId: `f3v3UVvxO`,
                                    smoothScroll: !0,
                                    children: v(T.a, {
                                      className: `framer-styles-preset-1vnltb4`,
                                      "data-styles-preset": `S5XDCQGnJ`,
                                      children: `Services`,
                                    }),
                                  }),
                                }),
                              }),
                              className: `framer-bskfiw`,
                              "data-framer-name": `Reviews Text`,
                              fonts: [`Inter`],
                              layoutDependency: w,
                              layoutId: `kdFf4OW7L`,
                              style: { "--framer-paragraph-spacing": `0px` },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...G(
                                {
                                  bpKt9DW2q: {
                                    children: v(r, {
                                      children: v(T.p, {
                                        className: `framer-styles-preset-1ei6ekx`,
                                        "data-styles-preset": `bHwADsIpE`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `center` },
                                        children: v(z, {
                                          href: { hash: `:j7cJfFeeL`, webPageId: `augiA20Il` },
                                          motionChild: !0,
                                          nodeId: `kdFf4OW7L`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `f3v3UVvxO`,
                                          smoothScroll: !0,
                                          children: v(T.a, {
                                            className: `framer-styles-preset-1vnltb4`,
                                            "data-styles-preset": `S5XDCQGnJ`,
                                            children: `Services`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  },
                                },
                                m,
                                y
                              ),
                            }),
                            v(U, {
                              __fromCanvasComponent: !0,
                              children: v(r, {
                                children: v(T.p, {
                                  className: `framer-styles-preset-1ei6ekx`,
                                  "data-styles-preset": `bHwADsIpE`,
                                  dir: `auto`,
                                  children: v(z, {
                                    href: { webPageId: `dTSdPGpXg` },
                                    motionChild: !0,
                                    nodeId: `LJNPohpFy`,
                                    openInNewTab: !1,
                                    relValues: [],
                                    scopeId: `f3v3UVvxO`,
                                    smoothScroll: !1,
                                    children: v(T.a, {
                                      className: `framer-styles-preset-1vnltb4`,
                                      "data-styles-preset": `S5XDCQGnJ`,
                                      children: `Work`,
                                    }),
                                  }),
                                }),
                              }),
                              className: `framer-16dx35a`,
                              "data-framer-name": `Reviews Text`,
                              fonts: [`Inter`],
                              layoutDependency: w,
                              layoutId: `LJNPohpFy`,
                              style: { "--framer-paragraph-spacing": `0px` },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...G(
                                {
                                  bpKt9DW2q: {
                                    children: v(r, {
                                      children: v(T.p, {
                                        className: `framer-styles-preset-1ei6ekx`,
                                        "data-styles-preset": `bHwADsIpE`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `center` },
                                        children: v(z, {
                                          href: { webPageId: `dTSdPGpXg` },
                                          motionChild: !0,
                                          nodeId: `LJNPohpFy`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `f3v3UVvxO`,
                                          smoothScroll: !1,
                                          children: v(T.a, {
                                            className: `framer-styles-preset-1vnltb4`,
                                            "data-styles-preset": `S5XDCQGnJ`,
                                            children: `Work`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  },
                                },
                                m,
                                y
                              ),
                            }),
                            v(U, {
                              __fromCanvasComponent: !0,
                              children: v(r, {
                                children: v(T.p, {
                                  className: `framer-styles-preset-1ei6ekx`,
                                  "data-styles-preset": `bHwADsIpE`,
                                  dir: `auto`,
                                  children: v(z, {
                                    href: { hash: `:V9PsQ86y5`, webPageId: `augiA20Il` },
                                    motionChild: !0,
                                    nodeId: `jZhZsQo0U`,
                                    openInNewTab: !1,
                                    relValues: [],
                                    scopeId: `f3v3UVvxO`,
                                    smoothScroll: !0,
                                    children: v(T.a, {
                                      className: `framer-styles-preset-1vnltb4`,
                                      "data-styles-preset": `S5XDCQGnJ`,
                                      children: `Pricing`,
                                    }),
                                  }),
                                }),
                              }),
                              className: `framer-vwc1vr`,
                              "data-framer-name": `Reviews Text`,
                              fonts: [`Inter`],
                              layoutDependency: w,
                              layoutId: `jZhZsQo0U`,
                              style: { "--framer-paragraph-spacing": `0px` },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...G(
                                {
                                  bpKt9DW2q: {
                                    children: v(r, {
                                      children: v(T.p, {
                                        className: `framer-styles-preset-1ei6ekx`,
                                        "data-styles-preset": `bHwADsIpE`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `center` },
                                        children: v(z, {
                                          href: { hash: `:V9PsQ86y5`, webPageId: `augiA20Il` },
                                          motionChild: !0,
                                          nodeId: `jZhZsQo0U`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `f3v3UVvxO`,
                                          smoothScroll: !0,
                                          children: v(T.a, {
                                            className: `framer-styles-preset-1vnltb4`,
                                            "data-styles-preset": `S5XDCQGnJ`,
                                            children: `Pricing`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  },
                                },
                                m,
                                y
                              ),
                            }),
                            v(U, {
                              __fromCanvasComponent: !0,
                              children: v(r, {
                                children: v(T.p, {
                                  className: `framer-styles-preset-1ei6ekx`,
                                  "data-styles-preset": `bHwADsIpE`,
                                  dir: `auto`,
                                  style: { "--framer-text-alignment": `start` },
                                  children: v(z, {
                                    href: { webPageId: `pnrf0LVZ7` },
                                    motionChild: !0,
                                    nodeId: `yxYZ2rYFf`,
                                    openInNewTab: !1,
                                    relValues: [],
                                    scopeId: `f3v3UVvxO`,
                                    smoothScroll: !1,
                                    children: v(T.a, {
                                      className: `framer-styles-preset-1vnltb4`,
                                      "data-styles-preset": `S5XDCQGnJ`,
                                      children: `Contact`,
                                    }),
                                  }),
                                }),
                              }),
                              className: `framer-yyw1xu`,
                              "data-framer-name": `Reviews Text`,
                              fonts: [`Inter`],
                              layoutDependency: w,
                              layoutId: `yxYZ2rYFf`,
                              style: { "--framer-paragraph-spacing": `0px` },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...G(
                                {
                                  bpKt9DW2q: {
                                    children: v(r, {
                                      children: v(T.p, {
                                        className: `framer-styles-preset-1ei6ekx`,
                                        "data-styles-preset": `bHwADsIpE`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `center` },
                                        children: v(z, {
                                          href: { webPageId: `pnrf0LVZ7` },
                                          motionChild: !0,
                                          nodeId: `yxYZ2rYFf`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `f3v3UVvxO`,
                                          smoothScroll: !1,
                                          children: v(T.a, {
                                            className: `framer-styles-preset-1vnltb4`,
                                            "data-styles-preset": `S5XDCQGnJ`,
                                            children: `Contact`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  },
                                },
                                m,
                                y
                              ),
                            }),
                          ],
                        }),
                      M() &&
                        v(H, {
                          height: 48,
                          y: (c?.y || 0) + (0 + ((c?.height || 72) - 0 - 72) / 2) + 12,
                          ...G(
                            {
                              bpKt9DW2q: {
                                width: `calc(min(max(${c?.width || `100vw`}, 1px), 1312px) - 32px)`,
                                y:
                                  (c?.y || 0) + (0 + ((c?.height || 200) - 0 - 754) / 2) + 24 + 658,
                              },
                            },
                            m,
                            y
                          ),
                          children: v(Le, {
                            className: `framer-1ofgpp8-container`,
                            layoutDependency: w,
                            layoutId: `QF1u9cyLN-container`,
                            nodeId: `QF1u9cyLN`,
                            rendersWithMotion: !0,
                            scopeId: `f3v3UVvxO`,
                            children: v(W, {
                              H44nGre1W: `mailto:business@corx.club`,
                              height: `100%`,
                              id: `QF1u9cyLN`,
                              layoutId: `QF1u9cyLN`,
                              style: { height: `100%` },
                              variant: an(`Pvr55WFL0`),
                              width: `100%`,
                              ...G(
                                {
                                  bpKt9DW2q: {
                                    CIZ_Ddnsd: A,
                                    style: { height: `100%`, width: `100%` },
                                  },
                                },
                                m,
                                y
                              ),
                            }),
                          }),
                        }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-sDZ9x.framer-1e5hprl, .framer-sDZ9x .framer-1e5hprl { display: block; }`,
          `.framer-sDZ9x.framer-15x4r9x { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1312px; }`,
          `.framer-sDZ9x .framer-15pk4m9 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: 72px; justify-content: space-between; max-width: 1312px; overflow: visible; padding: 0px 16px 0px 16px; position: relative; width: 1px; }`,
          `.framer-sDZ9x .framer-1y6spzn, .framer-sDZ9x .framer-wv8mro { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-sDZ9x .framer-1vwdca6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-sDZ9x .framer-l7ka9z { flex: none; height: 66px; position: relative; width: 47px; }`,
          `.framer-sDZ9x .framer-1gzxnu1 { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }`,
          `.framer-sDZ9x .framer-1g789a6 { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 24px; }`,
          `.framer-sDZ9x .framer-xb5mz0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-sDZ9x .framer-bskfiw, .framer-sDZ9x .framer-16dx35a, .framer-sDZ9x .framer-vwc1vr, .framer-sDZ9x .framer-yyw1xu { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-sDZ9x .framer-1ofgpp8-container { flex: none; height: 48px; position: relative; width: auto; }`,
          `.framer-sDZ9x.framer-v-70j6d9.framer-15x4r9x { width: 810px; }`,
          `.framer-sDZ9x.framer-v-70j6d9 .framer-xb5mz0 { gap: 16px; }`,
          `.framer-sDZ9x.framer-v-1mzn7wl.framer-15x4r9x { width: 350px; }`,
          `.framer-sDZ9x.framer-v-1mzn7wl .framer-1y6spzn { flex: 1 0 0px; gap: unset; justify-content: space-between; width: 1px; }`,
          `.framer-sDZ9x.framer-v-1mzn7wl .framer-wv8mro, .framer-sDZ9x.framer-v-1vx690j .framer-1vwdca6, .framer-sDZ9x.framer-v-1vx690j .framer-wv8mro { cursor: pointer; }`,
          `.framer-sDZ9x.framer-v-1vx690j.framer-15x4r9x { cursor: pointer; width: 350px; }`,
          `.framer-sDZ9x.framer-v-1vx690j .framer-15pk4m9 { flex-direction: column; gap: 36px; height: min-content; justify-content: center; padding: 24px 16px 24px 16px; }`,
          `.framer-sDZ9x.framer-v-1vx690j .framer-1y6spzn { gap: unset; justify-content: space-between; width: 100%; }`,
          `.framer-sDZ9x.framer-v-1vx690j .framer-xb5mz0 { cursor: pointer; flex-direction: column; width: 100%; }`,
          `.framer-sDZ9x.framer-v-1vx690j .framer-bskfiw, .framer-sDZ9x.framer-v-1vx690j .framer-16dx35a, .framer-sDZ9x.framer-v-1vx690j .framer-vwc1vr, .framer-sDZ9x.framer-v-1vx690j .framer-yyw1xu { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-sDZ9x.framer-v-1vx690j .framer-1ofgpp8-container { width: 100%; }`,
          `.framer-sDZ9x.framer-v-1hvvsqq.framer-15x4r9x { width: 900px; }`,
          ...lt,
          ...Ze,
          ...zt,
          `.framer-sDZ9x[data-border="true"]::after, .framer-sDZ9x [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-sDZ9x`
      )),
      (K.displayName = `Navbar`),
      (K.defaultProps = { height: 72, width: 1312 }),
      j(K, {
        variant: {
          options: [`yvUvWxvM7`, `TAiXNo5qT`, `D8L_mdfKT`, `bpKt9DW2q`, `OQseHBxLf`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`, `Variant 4`, `Variant 5`],
          title: `Variant`,
          type: V.Enum,
        },
      }),
      M(
        K,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...$t,
          ...k(et),
          ...k(We),
          ...k(Rt),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (K.loader = { load: (e, t) => ie([() => ce(W, {}, t)], t) }));
  }),
  fn,
  pn,
  mn,
  hn = e(() => {
    (N(),
      se.loadFonts([]),
      (fn = [{ explicitInter: !0, fonts: [] }]),
      (pn = [
        `.framer-nutX8 .framer-styles-preset-irucd3:not(.rich-text-wrapper), .framer-nutX8 .framer-styles-preset-irucd3.rich-text-wrapper a { --framer-link-hover-text-color: var(--token-857887c0-9486-4a16-b7a3-5457d6a4efbc, #ffffff); --framer-link-text-color: var(--token-e6be3043-e1a9-4dbf-8f7b-1ce31d52b0bb, rgba(255, 255, 255, 0.6)); }`,
      ]),
      (mn = `framer-nutX8`));
  });
function q(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var gn,
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn,
  Cn,
  wn,
  J,
  Tn,
  En,
  Dn,
  On,
  kn,
  An,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  Ln,
  Rn,
  zn,
  Bn,
  Vn,
  Hn,
  Un,
  Y,
  Wn = e(() => {
    (b(),
      N(),
      D(),
      c(),
      Ge(),
      ut(),
      mt(),
      $e(),
      nt(),
      Vt(),
      vt(),
      tt(),
      hn(),
      Ke(),
      (gn = A(fe(U))),
      (_n = Ve(Ye)),
      (vn = A(fe(Le))),
      (yn = A(fe(T.div))),
      (bn = [`gfTUaeKlN`, `KDCvDvb2x`, `J_8LE4z7n`, `jMQkBFVE4`]),
      (xn = `framer-OfMtq`),
      (Sn = {
        gfTUaeKlN: `framer-v-64gfxq`,
        J_8LE4z7n: `framer-v-wlqxw2`,
        jMQkBFVE4: `framer-v-9yxdie`,
        KDCvDvb2x: `framer-v-n4i2m0`,
      }),
      (Cn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (wn = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: Cn,
        x: 0,
        y: 0,
      }),
      (J = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 30,
      }),
      (Tn = {
        filter: `blur(10px)`,
        opacity: 0.001,
        rotate: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 10,
      }),
      (En = {
        effect: Tn,
        repeat: !1,
        startDelay: 0,
        threshold: 0.5,
        tokenization: `word`,
        transition: { bounce: 0, delay: 0.05, duration: 1.4, type: `spring` },
        trigger: `onInView`,
        type: `appear`,
      }),
      (Dn = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0.2, delay: 0.2, duration: 0.4, type: `spring` },
        x: 0,
        y: 0,
      }),
      (On = { damping: 100, delay: 0.05, mass: 1, stiffness: 400, type: `spring` }),
      (kn = {
        effect: Tn,
        repeat: !1,
        startDelay: 0.2,
        threshold: 0,
        tokenization: `word`,
        transition: On,
        trigger: `onInView`,
        type: `appear`,
      }),
      (An = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0.1, delay: 0.3, duration: 1.5, type: `spring` },
        x: 0,
        y: 0,
      }),
      (jn = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 50,
      }),
      (Mn = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0.2, delay: 0.4, duration: 0.4, type: `spring` },
        x: 0,
        y: 0,
      }),
      (Nn = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Pn = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0.2, delay: 0.5, duration: 0.4, type: `spring` },
        x: 0,
        y: 0,
      }),
      (Fn = {
        effect: Tn,
        repeat: !1,
        startDelay: 0.4,
        threshold: 0,
        tokenization: `word`,
        transition: On,
        trigger: `onInView`,
        type: `appear`,
      }),
      (In = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0.2, delay: 0.7, duration: 0.4, type: `spring` },
        x: 0,
        y: 0,
      }),
      (Ln = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0.2, delay: 0.8, duration: 0.4, type: `spring` },
        x: 0,
        y: 0,
      }),
      (Rn = (e, t) => `translateX(-50%) ${t}`),
      (zn = ({ value: e, children: t }) => {
        let n = h(E),
          r = e ?? n.transition,
          i = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return v(E.Provider, { value: i, children: t });
      }),
      (Bn = { Desktop: `gfTUaeKlN`, Leptop: `KDCvDvb2x`, Phone: `jMQkBFVE4`, Tablet: `J_8LE4z7n` }),
      (Vn = T.create(r)),
      (Hn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Bn[r.variant] ?? r.variant ?? `gfTUaeKlN`,
      })),
      (Un = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Y = I(
        y(function (e, t) {
          let n = C(null),
            i = t ?? n,
            a = ne(),
            { activeLocale: o, setLocale: s } = R(),
            c = _e(),
            { style: l, className: u, layoutId: d, variant: f, ...p } = Hn(e),
            {
              baseVariant: m,
              classNames: h,
              clearLoadingGesture: ee,
              gestureHandlers: _,
              gestureVariant: y,
              isLoading: te,
              setGestureState: b,
              setVariant: x,
              variants: S,
            } = Be({
              cycleOrder: bn,
              defaultVariant: `gfTUaeKlN`,
              ref: i,
              variant: f,
              variantClassNames: Sn,
            }),
            w = Un(e, S),
            E = O(xn, _t, xt, Qe, qe, ct, rt, pt, Bt, mn),
            { activeVariantCallback: D, delay: ie } = Te(m),
            k = D(async (...e) => {
              x(`gfTUaeKlN`);
            });
          return v(re, {
            id: d ?? a,
            children: v(Vn, {
              animate: S,
              initial: !1,
              children: v(zn, {
                value: Cn,
                children: v(L, {
                  ...p,
                  ..._,
                  as: `footer`,
                  background: {
                    alt: `Image`,
                    fit: `fill`,
                    intrinsicHeight: 4722,
                    intrinsicWidth: 4320,
                    loading: P(c?.y || 0),
                    pixelHeight: 4722,
                    pixelWidth: 4320,
                    sizes: c?.width || `100vw`,
                    src: `../../assets/images/xLLObKPmdqqcuWcYJSGc1cAvQuE-731d8e.png`,
                    srcSet: `../../assets/images/xLLObKPmdqqcuWcYJSGc1cAvQuE-d4937e.png 936w,../../assets/images/xLLObKPmdqqcuWcYJSGc1cAvQuE.png 1873w,../../assets/images/xLLObKPmdqqcuWcYJSGc1cAvQuE-ac61a8.png 3747w,../../assets/images/xLLObKPmdqqcuWcYJSGc1cAvQuE-731d8e.png 4320w`,
                  },
                  className: O(E, `framer-64gfxq`, u, h),
                  "data-framer-name": `Desktop`,
                  layoutDependency: w,
                  layoutId: `gfTUaeKlN`,
                  ref: i,
                  style: { ...l },
                  ...q(
                    {
                      J_8LE4z7n: { "data-framer-name": `Tablet` },
                      jMQkBFVE4: { "data-framer-name": `Phone` },
                      KDCvDvb2x: { "data-framer-name": `Leptop` },
                    },
                    m,
                    y
                  ),
                  children: g(T.div, {
                    className: `framer-1fnwou8`,
                    "data-framer-name": `Content`,
                    layoutDependency: w,
                    layoutId: `iEXKZtTF4`,
                    children: [
                      v(L, {
                        as: `section`,
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 1984,
                          intrinsicWidth: 5248,
                          loading: P(
                            (c?.y || 0) +
                              0 +
                              (((c?.height || 1185) - 0 - 1649.6) / 2 + 0 + 0) +
                              120 +
                              0
                          ),
                          pixelHeight: 1984,
                          pixelWidth: 5248,
                          sizes: `min(${c?.width || `100vw`} - 128px, 1312px)`,
                          src: `../../assets/images/cwI1cddQjDGs7ktEQo3mfuyYM-26acdf.png`,
                          srcSet: `../../assets/images/cwI1cddQjDGs7ktEQo3mfuyYM-b77572.png 512w,../../assets/images/cwI1cddQjDGs7ktEQo3mfuyYM-9b3a94.png 1024w,../../assets/images/cwI1cddQjDGs7ktEQo3mfuyYM.png 2048w,../../assets/images/cwI1cddQjDGs7ktEQo3mfuyYM-0b8477.png 4096w,../../assets/images/cwI1cddQjDGs7ktEQo3mfuyYM-26acdf.png 5248w`,
                        },
                        className: `framer-1wm93om`,
                        "data-border": !0,
                        "data-framer-name": `CTA`,
                        layoutDependency: w,
                        layoutId: `j2SepKTeJ`,
                        style: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `var(--token-2ee91d79-478c-4695-9c6b-241f9952f218, rgba(255, 255, 255, 0.1))`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `1px`,
                          borderBottomLeftRadius: 16,
                          borderBottomRightRadius: 16,
                          borderTopLeftRadius: 16,
                          borderTopRightRadius: 16,
                        },
                        ...q(
                          {
                            J_8LE4z7n: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 1984,
                                intrinsicWidth: 5248,
                                loading: P(
                                  (c?.y || 0) +
                                    0 +
                                    (((c?.height || 1295) - 0 - 1759.6) / 2 + 0 + 0) +
                                    120 +
                                    0
                                ),
                                pixelHeight: 1984,
                                pixelWidth: 5248,
                                sizes: `min(${c?.width || `100vw`} - 80px, 1312px)`,
                                src: `../../assets/images/cwI1cddQjDGs7ktEQo3mfuyYM-26acdf.png`,
                                srcSet: `../../assets/images/cwI1cddQjDGs7ktEQo3mfuyYM-b77572.png 512w,../../assets/images/cwI1cddQjDGs7ktEQo3mfuyYM-9b3a94.png 1024w,../../assets/images/cwI1cddQjDGs7ktEQo3mfuyYM.png 2048w,../../assets/images/cwI1cddQjDGs7ktEQo3mfuyYM-0b8477.png 4096w,../../assets/images/cwI1cddQjDGs7ktEQo3mfuyYM-26acdf.png 5248w`,
                              },
                            },
                            jMQkBFVE4: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 1984,
                                intrinsicWidth: 5248,
                                loading: P(
                                  (c?.y || 0) +
                                    0 +
                                    (((c?.height || 200) - 0 - 1791.2) / 2 + 0 + 0) +
                                    80 +
                                    0
                                ),
                                pixelHeight: 1984,
                                pixelWidth: 5248,
                                sizes: `min(${c?.width || `100vw`} - 40px, 1312px)`,
                                src: `../../assets/images/cwI1cddQjDGs7ktEQo3mfuyYM-26acdf.png`,
                                srcSet: `../../assets/images/cwI1cddQjDGs7ktEQo3mfuyYM-b77572.png 512w,../../assets/images/cwI1cddQjDGs7ktEQo3mfuyYM-9b3a94.png 1024w,../../assets/images/cwI1cddQjDGs7ktEQo3mfuyYM.png 2048w,../../assets/images/cwI1cddQjDGs7ktEQo3mfuyYM-0b8477.png 4096w,../../assets/images/cwI1cddQjDGs7ktEQo3mfuyYM-26acdf.png 5248w`,
                              },
                            },
                            KDCvDvb2x: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 1984,
                                intrinsicWidth: 5248,
                                loading: P(
                                  (c?.y || 0) +
                                    0 +
                                    (((c?.height || 1145) - 0 - 1609.6) / 2 + 0 + 0) +
                                    120 +
                                    0
                                ),
                                pixelHeight: 1984,
                                pixelWidth: 5248,
                                sizes: `min(${c?.width || `100vw`} - 128px, 1312px)`,
                                src: `../../assets/images/cwI1cddQjDGs7ktEQo3mfuyYM-26acdf.png`,
                                srcSet: `../../assets/images/cwI1cddQjDGs7ktEQo3mfuyYM-b77572.png 512w,../../assets/images/cwI1cddQjDGs7ktEQo3mfuyYM-9b3a94.png 1024w,../../assets/images/cwI1cddQjDGs7ktEQo3mfuyYM.png 2048w,../../assets/images/cwI1cddQjDGs7ktEQo3mfuyYM-0b8477.png 4096w,../../assets/images/cwI1cddQjDGs7ktEQo3mfuyYM-26acdf.png 5248w`,
                              },
                            },
                          },
                          m,
                          y
                        ),
                        children: g(T.div, {
                          className: `framer-ankq44`,
                          "data-framer-name": `Project`,
                          layoutDependency: w,
                          layoutId: `EYQoqwiMV`,
                          children: [
                            g(T.div, {
                              className: `framer-fppg0`,
                              "data-framer-name": `Text`,
                              layoutDependency: w,
                              layoutId: `FtnZ1r1tH`,
                              children: [
                                v(gn, {
                                  __fromCanvasComponent: !0,
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                  animate: wn,
                                  children: v(r, {
                                    children: v(T.h2, {
                                      className: `framer-styles-preset-qlu113`,
                                      "data-styles-preset": `gWwvuO7c6`,
                                      dir: `auto`,
                                      style: { "--framer-text-alignment": `start` },
                                      children: `Ready to turn your ideas into real growth?`,
                                    }),
                                  }),
                                  className: `framer-1v95d0w`,
                                  "data-framer-appear-id": `1v95d0w`,
                                  "data-framer-name": `Title Text`,
                                  effect: En,
                                  fonts: [`Inter`],
                                  initial: J,
                                  layoutDependency: w,
                                  layoutId: `MJtr3rsl5`,
                                  optimized: !0,
                                  style: { "--framer-paragraph-spacing": `0px` },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...q(
                                    {
                                      jMQkBFVE4: {
                                        children: g(r, {
                                          children: [
                                            v(T.h4, {
                                              className: `framer-styles-preset-nd5mma`,
                                              "data-styles-preset": `TsxNrEyVF`,
                                              dir: `auto`,
                                              style: { "--framer-text-alignment": `center` },
                                              children: `Ready to turn your `,
                                            }),
                                            v(T.h4, {
                                              className: `framer-styles-preset-nd5mma`,
                                              "data-styles-preset": `TsxNrEyVF`,
                                              dir: `auto`,
                                              style: { "--framer-text-alignment": `center` },
                                              children: `content into real growth?`,
                                            }),
                                          ],
                                        }),
                                      },
                                    },
                                    m,
                                    y
                                  ),
                                }),
                                v(gn, {
                                  __fromCanvasComponent: !0,
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                  animate: Dn,
                                  children: v(r, {
                                    children: v(T.p, {
                                      className: `framer-styles-preset-1xckaiz`,
                                      "data-styles-preset": `JJO3bQ4OR`,
                                      dir: `auto`,
                                      style: { "--framer-text-alignment": `center` },
                                      children: `Stop guessing. Let’s build the systems that bring you consistent results.`,
                                    }),
                                  }),
                                  className: `framer-1apb901`,
                                  "data-framer-appear-id": `1apb901`,
                                  "data-framer-name": `Reviews Text`,
                                  effect: kn,
                                  fonts: [`Inter`],
                                  initial: J,
                                  layoutDependency: w,
                                  layoutId: `SUxjwamMj`,
                                  optimized: !0,
                                  style: { "--framer-paragraph-spacing": `0px` },
                                  verticalAlignment: `center`,
                                  withExternalLayout: !0,
                                  ...q(
                                    {
                                      jMQkBFVE4: {
                                        children: v(r, {
                                          children: v(T.p, {
                                            className: `framer-styles-preset-1ei6ekx`,
                                            "data-styles-preset": `bHwADsIpE`,
                                            dir: `auto`,
                                            style: { "--framer-text-alignment": `center` },
                                            children: `Stop guessing what works. Let’s turn your videos into consistent views, engagement, and results that actually matter.`,
                                          }),
                                        }),
                                      },
                                    },
                                    m,
                                    y
                                  ),
                                }),
                              ],
                            }),
                            g(T.div, {
                              className: `framer-1tiaijh`,
                              "data-framer-name": `Button Group`,
                              layoutDependency: w,
                              layoutId: `FhC6HKv0R`,
                              children: [
                                v(yn, {
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                  animate: An,
                                  className: `framer-1k6ocot`,
                                  "data-framer-appear-id": `1k6ocot`,
                                  "data-framer-name": `Secondary Action Buttons`,
                                  initial: jn,
                                  layoutDependency: w,
                                  layoutId: `elWrGombC`,
                                  optimized: !0,
                                  children: v(T.div, {
                                    className: `framer-1p6y718`,
                                    "data-framer-name": `Main Action Buttons`,
                                    layoutDependency: w,
                                    layoutId: `W306K9Pcn`,
                                    children: v(H, {
                                      height: 48,
                                      width: `184px`,
                                      y:
                                        (c?.y || 0) +
                                        0 +
                                        (((c?.height || 1185) - 0 - 1649.6) / 2 + 0 + 0) +
                                        120 +
                                        0 +
                                        44 +
                                        0 +
                                        299.2 +
                                        0 +
                                        0 +
                                        0 +
                                        0,
                                      ...q(
                                        {
                                          J_8LE4z7n: {
                                            y:
                                              (c?.y || 0) +
                                              0 +
                                              (((c?.height || 1295) - 0 - 1759.6) / 2 + 0 + 0) +
                                              120 +
                                              0 +
                                              44 +
                                              0 +
                                              299.2 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                          jMQkBFVE4: {
                                            width: `max(max(min(${c?.width || `100vw`} - 40px, 1312px), 1px) - 32px, 1px)`,
                                            y:
                                              (c?.y || 0) +
                                              0 +
                                              (((c?.height || 200) - 0 - 1791.2) / 2 + 0 + 0) +
                                              80 +
                                              0 +
                                              44 +
                                              40 +
                                              308 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                          KDCvDvb2x: {
                                            y:
                                              (c?.y || 0) +
                                              0 +
                                              (((c?.height || 1145) - 0 - 1609.6) / 2 + 0 + 0) +
                                              120 +
                                              0 +
                                              44 +
                                              0 +
                                              299.2 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                        },
                                        m,
                                        y
                                      ),
                                      children: v(vn, {
                                        __perspectiveFX: !1,
                                        __smartComponentFX: !0,
                                        __targetOpacity: 1,
                                        animate: Mn,
                                        className: `framer-1s53hrh-container`,
                                        "data-framer-appear-id": `1s53hrh`,
                                        initial: J,
                                        layoutDependency: w,
                                        layoutId: `zGUUFwdPp-container`,
                                        nodeId: `zGUUFwdPp`,
                                        optimized: !0,
                                        rendersWithMotion: !0,
                                        scopeId: `fyf0Iw0RO`,
                                        children: v(Ye, {
                                          height: `100%`,
                                          id: `zGUUFwdPp`,
                                          layoutId: `zGUUFwdPp`,
                                          o_X2HzHKv: `Start Growing Today`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: Nn(`vgllaz4mv`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                                v(gn, {
                                  __fromCanvasComponent: !0,
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                  animate: Pn,
                                  children: v(r, {
                                    children: v(T.p, {
                                      className: `framer-styles-preset-zridrm`,
                                      "data-styles-preset": `nFRos3To5`,
                                      dir: `auto`,
                                      children: `No contracts. Fast delivery. Results-focused.`,
                                    }),
                                  }),
                                  className: `framer-enxdjc`,
                                  "data-framer-appear-id": `enxdjc`,
                                  "data-framer-name": `Reviews Text`,
                                  effect: Fn,
                                  fonts: [`Inter`],
                                  initial: J,
                                  layoutDependency: w,
                                  layoutId: `qkeYSEjOR`,
                                  optimized: !0,
                                  style: { "--framer-paragraph-spacing": `0px` },
                                  verticalAlignment: `bottom`,
                                  withExternalLayout: !0,
                                  ...q(
                                    {
                                      jMQkBFVE4: {
                                        children: v(r, {
                                          children: v(T.p, {
                                            className: `framer-styles-preset-zridrm`,
                                            "data-styles-preset": `nFRos3To5`,
                                            dir: `auto`,
                                            style: { "--framer-text-alignment": `center` },
                                            children: `No contracts. Fast delivery. Results-focused.`,
                                          }),
                                        }),
                                      },
                                    },
                                    m,
                                    y
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      g(T.div, {
                        className: `framer-15na5d`,
                        "data-framer-name": `Footer`,
                        layoutDependency: w,
                        layoutId: `R5y3dxwgx`,
                        children: [
                          g(yn, {
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            animate: In,
                            className: `framer-u8aro7`,
                            "data-framer-appear-id": `u8aro7`,
                            "data-framer-name": `Info Logo`,
                            initial: J,
                            layoutDependency: w,
                            layoutId: `Wi_SObHD6`,
                            optimized: !0,
                            children: [
                              g(T.div, {
                                className: `framer-1bf8ucs`,
                                "data-framer-name": `Logo`,
                                "data-highlight": !0,
                                layoutDependency: w,
                                layoutId: `Uyr18yHqg`,
                                onTap: k,
                                children: [
                                  v(de, {
                                    className: `framer-170pnmp`,
                                    "data-framer-name": `Logo`,
                                    layout: `position`,
                                    layoutDependency: w,
                                    layoutId: `LeCMFeRdm`,
                                    opacity: 1,
                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"></svg>`,
                                    svgContentId: 11948623254,
                                    withExternalLayout: !0,
                                  }),
                                  v(L, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1254,
                                      intrinsicWidth: 1254,
                                      loading: P(
                                        (c?.y || 0) +
                                          0 +
                                          (((c?.height || 1185) - 0 - 1649.6) / 2 + 0 + 0) +
                                          120 +
                                          566.8 +
                                          0 +
                                          0 +
                                          0 +
                                          0
                                      ),
                                      pixelHeight: 1254,
                                      pixelWidth: 1254,
                                      sizes: `63px`,
                                      src: `../../assets/images/8iGnXAmGrCuwb8BzSPUZ4EgORM-1e1650.png`,
                                      srcSet: `../../assets/images/8iGnXAmGrCuwb8BzSPUZ4EgORM.png 512w,../../assets/images/8iGnXAmGrCuwb8BzSPUZ4EgORM-efec48.png 1024w,../../assets/images/8iGnXAmGrCuwb8BzSPUZ4EgORM-1e1650.png 1254w`,
                                    },
                                    className: `framer-1ur5c1g`,
                                    layoutDependency: w,
                                    layoutId: `Qjt2AFXOx`,
                                    ...q(
                                      {
                                        J_8LE4z7n: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 1254,
                                            intrinsicWidth: 1254,
                                            loading: P(
                                              (c?.y || 0) +
                                                0 +
                                                (((c?.height || 1295) - 0 - 1759.6) / 2 + 0 + 0) +
                                                120 +
                                                566.8 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0
                                            ),
                                            pixelHeight: 1254,
                                            pixelWidth: 1254,
                                            sizes: `63px`,
                                            src: `../../assets/images/8iGnXAmGrCuwb8BzSPUZ4EgORM-1e1650.png`,
                                            srcSet: `../../assets/images/8iGnXAmGrCuwb8BzSPUZ4EgORM.png 512w,../../assets/images/8iGnXAmGrCuwb8BzSPUZ4EgORM-efec48.png 1024w,../../assets/images/8iGnXAmGrCuwb8BzSPUZ4EgORM-1e1650.png 1254w`,
                                          },
                                        },
                                        jMQkBFVE4: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 1254,
                                            intrinsicWidth: 1254,
                                            loading: P(
                                              (c?.y || 0) +
                                                0 +
                                                (((c?.height || 200) - 0 - 1791.2) / 2 + 0 + 0) +
                                                80 +
                                                714 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0
                                            ),
                                            pixelHeight: 1254,
                                            pixelWidth: 1254,
                                            sizes: `63px`,
                                            src: `../../assets/images/8iGnXAmGrCuwb8BzSPUZ4EgORM-1e1650.png`,
                                            srcSet: `../../assets/images/8iGnXAmGrCuwb8BzSPUZ4EgORM.png 512w,../../assets/images/8iGnXAmGrCuwb8BzSPUZ4EgORM-efec48.png 1024w,../../assets/images/8iGnXAmGrCuwb8BzSPUZ4EgORM-1e1650.png 1254w`,
                                          },
                                        },
                                        KDCvDvb2x: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 1254,
                                            intrinsicWidth: 1254,
                                            loading: P(
                                              (c?.y || 0) +
                                                0 +
                                                (((c?.height || 1145) - 0 - 1609.6) / 2 + 0 + 0) +
                                                120 +
                                                566.8 +
                                                0 +
                                                0 +
                                                0 +
                                                0
                                            ),
                                            pixelHeight: 1254,
                                            pixelWidth: 1254,
                                            sizes: `63px`,
                                            src: `../../assets/images/8iGnXAmGrCuwb8BzSPUZ4EgORM-1e1650.png`,
                                            srcSet: `../../assets/images/8iGnXAmGrCuwb8BzSPUZ4EgORM.png 512w,../../assets/images/8iGnXAmGrCuwb8BzSPUZ4EgORM-efec48.png 1024w,../../assets/images/8iGnXAmGrCuwb8BzSPUZ4EgORM-1e1650.png 1254w`,
                                          },
                                        },
                                      },
                                      m,
                                      y
                                    ),
                                  }),
                                  v(U, {
                                    __fromCanvasComponent: !0,
                                    children: v(r, {
                                      children: v(T.p, {
                                        className: `framer-styles-preset-1xzp3vp`,
                                        "data-styles-preset": `UydIiHcQJ`,
                                        dir: `auto`,
                                        children: `Corx`,
                                      }),
                                    }),
                                    className: `framer-gjc0ve`,
                                    fonts: [`Inter`],
                                    layoutDependency: w,
                                    layoutId: `CJaWMrml1`,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              g(T.div, {
                                className: `framer-guu0cx`,
                                "data-framer-name": `Infos`,
                                layoutDependency: w,
                                layoutId: `QBCWR1A4L`,
                                children: [
                                  v(T.div, {
                                    className: `framer-cw2jhx`,
                                    "data-framer-name": `Link`,
                                    layoutDependency: w,
                                    layoutId: `FRQmBZ3Fa`,
                                    children: g(T.div, {
                                      className: `framer-1pxnqot`,
                                      "data-framer-name": `Menu`,
                                      layoutDependency: w,
                                      layoutId: `pAULJdlEy`,
                                      children: [
                                        v(U, {
                                          __fromCanvasComponent: !0,
                                          children: v(r, {
                                            children: v(T.p, {
                                              className: `framer-styles-preset-1xzp3vp`,
                                              "data-styles-preset": `UydIiHcQJ`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9d22cc14-9428-4f32-a631-82e7e5b3c5ff, rgba(255, 255, 255, 0.8)))`,
                                              },
                                              children: `Quick Links`,
                                            }),
                                          }),
                                          className: `framer-1fzso20`,
                                          "data-framer-name": `Reviews Text`,
                                          fonts: [`Inter`],
                                          layoutDependency: w,
                                          layoutId: `eMXrXY9B4`,
                                          style: {
                                            "--extracted-r6o4lv": `var(--token-9d22cc14-9428-4f32-a631-82e7e5b3c5ff, rgba(255, 255, 255, 0.8))`,
                                            "--framer-paragraph-spacing": `0px`,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                          ...q(
                                            {
                                              jMQkBFVE4: {
                                                children: v(r, {
                                                  children: v(T.p, {
                                                    className: `framer-styles-preset-yf5nv9`,
                                                    "data-styles-preset": `ENNlAU9yc`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9d22cc14-9428-4f32-a631-82e7e5b3c5ff, rgba(255, 255, 255, 0.8)))`,
                                                    },
                                                    children: `Quick Links`,
                                                  }),
                                                }),
                                              },
                                            },
                                            m,
                                            y
                                          ),
                                        }),
                                        g(T.div, {
                                          className: `framer-108dfri`,
                                          "data-framer-name": `Quick Links`,
                                          layoutDependency: w,
                                          layoutId: `J2cDXLsKX`,
                                          children: [
                                            v(U, {
                                              __fromCanvasComponent: !0,
                                              children: v(r, {
                                                children: v(T.p, {
                                                  className: `framer-styles-preset-yf5nv9`,
                                                  "data-styles-preset": `ENNlAU9yc`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e6be3043-e1a9-4dbf-8f7b-1ce31d52b0bb, rgba(255, 255, 255, 0.6)))`,
                                                  },
                                                  children: v(z, {
                                                    href: {
                                                      hash: `:j7cJfFeeL`,
                                                      webPageId: `augiA20Il`,
                                                    },
                                                    motionChild: !0,
                                                    nodeId: `IB53eBLLo`,
                                                    openInNewTab: !1,
                                                    relValues: [],
                                                    scopeId: `fyf0Iw0RO`,
                                                    smoothScroll: !0,
                                                    children: v(T.a, {
                                                      className: `framer-styles-preset-1vnltb4`,
                                                      "data-styles-preset": `S5XDCQGnJ`,
                                                      children: `Services`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              className: `framer-13seetu`,
                                              "data-framer-name": `Reviews Text`,
                                              fonts: [`Inter`],
                                              layoutDependency: w,
                                              layoutId: `IB53eBLLo`,
                                              style: {
                                                "--extracted-r6o4lv": `var(--token-e6be3043-e1a9-4dbf-8f7b-1ce31d52b0bb, rgba(255, 255, 255, 0.6))`,
                                                "--framer-paragraph-spacing": `0px`,
                                              },
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                              ...q(
                                                {
                                                  jMQkBFVE4: {
                                                    children: v(r, {
                                                      children: v(T.p, {
                                                        className: `framer-styles-preset-1ei6ekx`,
                                                        "data-styles-preset": `bHwADsIpE`,
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e6be3043-e1a9-4dbf-8f7b-1ce31d52b0bb, rgba(255, 255, 255, 0.6)))`,
                                                        },
                                                        children: v(z, {
                                                          href: {
                                                            hash: `:j7cJfFeeL`,
                                                            webPageId: `augiA20Il`,
                                                          },
                                                          motionChild: !0,
                                                          nodeId: `IB53eBLLo`,
                                                          openInNewTab: !1,
                                                          relValues: [],
                                                          scopeId: `fyf0Iw0RO`,
                                                          smoothScroll: !0,
                                                          children: v(T.a, {
                                                            className: `framer-styles-preset-1vnltb4`,
                                                            "data-styles-preset": `S5XDCQGnJ`,
                                                            children: `Services`,
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  },
                                                },
                                                m,
                                                y
                                              ),
                                            }),
                                            v(U, {
                                              __fromCanvasComponent: !0,
                                              children: v(r, {
                                                children: v(T.p, {
                                                  className: `framer-styles-preset-yf5nv9`,
                                                  "data-styles-preset": `ENNlAU9yc`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e6be3043-e1a9-4dbf-8f7b-1ce31d52b0bb, rgba(255, 255, 255, 0.6)))`,
                                                  },
                                                  children: v(z, {
                                                    href: { webPageId: `dTSdPGpXg` },
                                                    motionChild: !0,
                                                    nodeId: `BYAcbEqSM`,
                                                    openInNewTab: !1,
                                                    relValues: [],
                                                    scopeId: `fyf0Iw0RO`,
                                                    smoothScroll: !1,
                                                    children: v(T.a, {
                                                      className: `framer-styles-preset-1vnltb4`,
                                                      "data-styles-preset": `S5XDCQGnJ`,
                                                      children: `Works`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              className: `framer-1aqwgss`,
                                              "data-framer-name": `Reviews Text`,
                                              fonts: [`Inter`],
                                              layoutDependency: w,
                                              layoutId: `BYAcbEqSM`,
                                              style: {
                                                "--extracted-r6o4lv": `var(--token-e6be3043-e1a9-4dbf-8f7b-1ce31d52b0bb, rgba(255, 255, 255, 0.6))`,
                                                "--framer-paragraph-spacing": `0px`,
                                              },
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                              ...q(
                                                {
                                                  jMQkBFVE4: {
                                                    children: v(r, {
                                                      children: v(T.p, {
                                                        className: `framer-styles-preset-1ei6ekx`,
                                                        "data-styles-preset": `bHwADsIpE`,
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e6be3043-e1a9-4dbf-8f7b-1ce31d52b0bb, rgba(255, 255, 255, 0.6)))`,
                                                        },
                                                        children: v(z, {
                                                          href: { webPageId: `dTSdPGpXg` },
                                                          motionChild: !0,
                                                          nodeId: `BYAcbEqSM`,
                                                          openInNewTab: !1,
                                                          relValues: [],
                                                          scopeId: `fyf0Iw0RO`,
                                                          smoothScroll: !1,
                                                          children: v(T.a, {
                                                            className: `framer-styles-preset-1vnltb4`,
                                                            "data-styles-preset": `S5XDCQGnJ`,
                                                            children: `Works`,
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  },
                                                },
                                                m,
                                                y
                                              ),
                                            }),
                                            v(U, {
                                              __fromCanvasComponent: !0,
                                              children: v(r, {
                                                children: v(T.p, {
                                                  className: `framer-styles-preset-yf5nv9`,
                                                  "data-styles-preset": `ENNlAU9yc`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e6be3043-e1a9-4dbf-8f7b-1ce31d52b0bb, rgba(255, 255, 255, 0.6)))`,
                                                  },
                                                  children: v(z, {
                                                    href: {
                                                      hash: `:V9PsQ86y5`,
                                                      webPageId: `augiA20Il`,
                                                    },
                                                    motionChild: !0,
                                                    nodeId: `yVEwADcQv`,
                                                    openInNewTab: !1,
                                                    relValues: [],
                                                    scopeId: `fyf0Iw0RO`,
                                                    smoothScroll: !0,
                                                    children: v(T.a, {
                                                      className: `framer-styles-preset-1vnltb4`,
                                                      "data-styles-preset": `S5XDCQGnJ`,
                                                      children: `Pricing`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              className: `framer-obzc9u`,
                                              "data-framer-name": `Reviews Text`,
                                              fonts: [`Inter`],
                                              layoutDependency: w,
                                              layoutId: `yVEwADcQv`,
                                              style: {
                                                "--extracted-r6o4lv": `var(--token-e6be3043-e1a9-4dbf-8f7b-1ce31d52b0bb, rgba(255, 255, 255, 0.6))`,
                                                "--framer-paragraph-spacing": `0px`,
                                              },
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                              ...q(
                                                {
                                                  jMQkBFVE4: {
                                                    children: v(r, {
                                                      children: v(T.p, {
                                                        className: `framer-styles-preset-1ei6ekx`,
                                                        "data-styles-preset": `bHwADsIpE`,
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e6be3043-e1a9-4dbf-8f7b-1ce31d52b0bb, rgba(255, 255, 255, 0.6)))`,
                                                        },
                                                        children: v(z, {
                                                          href: {
                                                            hash: `:V9PsQ86y5`,
                                                            webPageId: `augiA20Il`,
                                                          },
                                                          motionChild: !0,
                                                          nodeId: `yVEwADcQv`,
                                                          openInNewTab: !1,
                                                          relValues: [],
                                                          scopeId: `fyf0Iw0RO`,
                                                          smoothScroll: !0,
                                                          children: v(T.a, {
                                                            className: `framer-styles-preset-1vnltb4`,
                                                            "data-styles-preset": `S5XDCQGnJ`,
                                                            children: `Pricing`,
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  },
                                                },
                                                m,
                                                y
                                              ),
                                            }),
                                            v(U, {
                                              __fromCanvasComponent: !0,
                                              children: v(r, {
                                                children: v(T.p, {
                                                  className: `framer-styles-preset-yf5nv9`,
                                                  "data-styles-preset": `ENNlAU9yc`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `start`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e6be3043-e1a9-4dbf-8f7b-1ce31d52b0bb, rgba(255, 255, 255, 0.6)))`,
                                                  },
                                                  children: v(z, {
                                                    href: { webPageId: `pnrf0LVZ7` },
                                                    motionChild: !0,
                                                    nodeId: `SLJ34nYvl`,
                                                    openInNewTab: !1,
                                                    preserveParams: !1,
                                                    relValues: [],
                                                    scopeId: `fyf0Iw0RO`,
                                                    smoothScroll: !1,
                                                    children: v(T.a, {
                                                      className: `framer-styles-preset-1vnltb4`,
                                                      "data-styles-preset": `S5XDCQGnJ`,
                                                      children: `Contact`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              className: `framer-12vhhn7`,
                                              "data-framer-name": `Reviews Text`,
                                              fonts: [`Inter`],
                                              layoutDependency: w,
                                              layoutId: `SLJ34nYvl`,
                                              style: {
                                                "--extracted-r6o4lv": `var(--token-e6be3043-e1a9-4dbf-8f7b-1ce31d52b0bb, rgba(255, 255, 255, 0.6))`,
                                                "--framer-paragraph-spacing": `0px`,
                                              },
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                              ...q(
                                                {
                                                  jMQkBFVE4: {
                                                    children: v(r, {
                                                      children: v(T.p, {
                                                        className: `framer-styles-preset-1ei6ekx`,
                                                        "data-styles-preset": `bHwADsIpE`,
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-alignment": `start`,
                                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e6be3043-e1a9-4dbf-8f7b-1ce31d52b0bb, rgba(255, 255, 255, 0.6)))`,
                                                        },
                                                        children: v(z, {
                                                          href: { webPageId: `pnrf0LVZ7` },
                                                          motionChild: !0,
                                                          nodeId: `SLJ34nYvl`,
                                                          openInNewTab: !1,
                                                          preserveParams: !1,
                                                          relValues: [],
                                                          scopeId: `fyf0Iw0RO`,
                                                          smoothScroll: !1,
                                                          children: v(T.a, {
                                                            className: `framer-styles-preset-1vnltb4`,
                                                            "data-styles-preset": `S5XDCQGnJ`,
                                                            children: `Contact`,
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  },
                                                },
                                                m,
                                                y
                                              ),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                  v(T.div, {
                                    className: `framer-119iuge`,
                                    "data-framer-name": `Link`,
                                    layoutDependency: w,
                                    layoutId: `AcqbYyXoS`,
                                    children: g(T.div, {
                                      className: `framer-17rfvfk`,
                                      "data-framer-name": `Menu`,
                                      layoutDependency: w,
                                      layoutId: `NdGodNSQ0`,
                                      children: [
                                        v(U, {
                                          __fromCanvasComponent: !0,
                                          children: v(r, {
                                            children: v(T.p, {
                                              className: `framer-styles-preset-1xzp3vp`,
                                              "data-styles-preset": `UydIiHcQJ`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `left`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9d22cc14-9428-4f32-a631-82e7e5b3c5ff, rgba(255, 255, 255, 0.8)))`,
                                              },
                                              children: `Socials`,
                                            }),
                                          }),
                                          className: `framer-i5jjfc`,
                                          "data-framer-name": `Reviews Text`,
                                          fonts: [`Inter`],
                                          layoutDependency: w,
                                          layoutId: `d4ehzvWaa`,
                                          style: {
                                            "--extracted-r6o4lv": `var(--token-9d22cc14-9428-4f32-a631-82e7e5b3c5ff, rgba(255, 255, 255, 0.8))`,
                                            "--framer-paragraph-spacing": `0px`,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                          ...q(
                                            {
                                              jMQkBFVE4: {
                                                children: v(r, {
                                                  children: v(T.p, {
                                                    className: `framer-styles-preset-yf5nv9`,
                                                    "data-styles-preset": `ENNlAU9yc`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-alignment": `left`,
                                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9d22cc14-9428-4f32-a631-82e7e5b3c5ff, rgba(255, 255, 255, 0.8)))`,
                                                    },
                                                    children: `Socials`,
                                                  }),
                                                }),
                                              },
                                            },
                                            m,
                                            y
                                          ),
                                        }),
                                        g(T.div, {
                                          className: `framer-vpzfas`,
                                          "data-framer-name": `Socials`,
                                          layoutDependency: w,
                                          layoutId: `RdGyWoptZ`,
                                          children: [
                                            v(U, {
                                              __fromCanvasComponent: !0,
                                              children: v(r, {
                                                children: v(T.p, {
                                                  className: `framer-styles-preset-yf5nv9`,
                                                  "data-styles-preset": `ENNlAU9yc`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `left`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e6be3043-e1a9-4dbf-8f7b-1ce31d52b0bb, rgba(255, 255, 255, 0.6)))`,
                                                  },
                                                  children: v(z, {
                                                    href: `https://www.facebook.com`,
                                                    motionChild: !0,
                                                    nodeId: `Nes5OWsRp`,
                                                    openInNewTab: !0,
                                                    relValues: [],
                                                    scopeId: `fyf0Iw0RO`,
                                                    smoothScroll: !1,
                                                    children: v(T.a, {
                                                      className: `framer-styles-preset-1vnltb4`,
                                                      "data-styles-preset": `S5XDCQGnJ`,
                                                      children: `Facebook`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              className: `framer-1rt7m0p`,
                                              "data-framer-name": `Reviews Text`,
                                              fonts: [`Inter`],
                                              layoutDependency: w,
                                              layoutId: `Nes5OWsRp`,
                                              style: {
                                                "--extracted-r6o4lv": `var(--token-e6be3043-e1a9-4dbf-8f7b-1ce31d52b0bb, rgba(255, 255, 255, 0.6))`,
                                                "--framer-paragraph-spacing": `0px`,
                                              },
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                              ...q(
                                                {
                                                  jMQkBFVE4: {
                                                    children: v(r, {
                                                      children: v(T.p, {
                                                        className: `framer-styles-preset-1ei6ekx`,
                                                        "data-styles-preset": `bHwADsIpE`,
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-alignment": `left`,
                                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e6be3043-e1a9-4dbf-8f7b-1ce31d52b0bb, rgba(255, 255, 255, 0.6)))`,
                                                        },
                                                        children: v(z, {
                                                          href: `https://www.facebook.com`,
                                                          motionChild: !0,
                                                          nodeId: `Nes5OWsRp`,
                                                          openInNewTab: !0,
                                                          relValues: [],
                                                          scopeId: `fyf0Iw0RO`,
                                                          smoothScroll: !1,
                                                          children: v(T.a, {
                                                            className: `framer-styles-preset-1vnltb4`,
                                                            "data-styles-preset": `S5XDCQGnJ`,
                                                            children: `Facebook`,
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  },
                                                },
                                                m,
                                                y
                                              ),
                                            }),
                                            v(U, {
                                              __fromCanvasComponent: !0,
                                              children: v(r, {
                                                children: v(T.p, {
                                                  className: `framer-styles-preset-yf5nv9`,
                                                  "data-styles-preset": `ENNlAU9yc`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `left`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e6be3043-e1a9-4dbf-8f7b-1ce31d52b0bb, rgba(255, 255, 255, 0.6)))`,
                                                  },
                                                  children: v(z, {
                                                    href: `https://www.instagram.com`,
                                                    motionChild: !0,
                                                    nodeId: `oi63GGHHO`,
                                                    openInNewTab: !0,
                                                    preserveParams: !1,
                                                    relValues: [],
                                                    scopeId: `fyf0Iw0RO`,
                                                    smoothScroll: !1,
                                                    children: v(T.a, {
                                                      className: `framer-styles-preset-1vnltb4`,
                                                      "data-styles-preset": `S5XDCQGnJ`,
                                                      children: `Instagram`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              className: `framer-oj436p`,
                                              "data-framer-name": `Reviews Text`,
                                              fonts: [`Inter`],
                                              layoutDependency: w,
                                              layoutId: `oi63GGHHO`,
                                              style: {
                                                "--extracted-r6o4lv": `var(--token-e6be3043-e1a9-4dbf-8f7b-1ce31d52b0bb, rgba(255, 255, 255, 0.6))`,
                                                "--framer-paragraph-spacing": `0px`,
                                              },
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                              ...q(
                                                {
                                                  jMQkBFVE4: {
                                                    children: v(r, {
                                                      children: v(T.p, {
                                                        className: `framer-styles-preset-1ei6ekx`,
                                                        "data-styles-preset": `bHwADsIpE`,
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-alignment": `left`,
                                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e6be3043-e1a9-4dbf-8f7b-1ce31d52b0bb, rgba(255, 255, 255, 0.6)))`,
                                                        },
                                                        children: v(z, {
                                                          href: `https://www.instagram.com`,
                                                          motionChild: !0,
                                                          nodeId: `oi63GGHHO`,
                                                          openInNewTab: !0,
                                                          preserveParams: !1,
                                                          relValues: [],
                                                          scopeId: `fyf0Iw0RO`,
                                                          smoothScroll: !1,
                                                          children: v(T.a, {
                                                            className: `framer-styles-preset-1vnltb4`,
                                                            "data-styles-preset": `S5XDCQGnJ`,
                                                            children: `Instagram`,
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  },
                                                },
                                                m,
                                                y
                                              ),
                                            }),
                                            v(U, {
                                              __fromCanvasComponent: !0,
                                              children: v(r, {
                                                children: v(T.p, {
                                                  className: `framer-styles-preset-yf5nv9`,
                                                  "data-styles-preset": `ENNlAU9yc`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `left`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e6be3043-e1a9-4dbf-8f7b-1ce31d52b0bb, rgba(255, 255, 255, 0.6)))`,
                                                  },
                                                  children: v(z, {
                                                    href: `https://www.youtube.com/`,
                                                    motionChild: !0,
                                                    nodeId: `Wc9055rUM`,
                                                    openInNewTab: !0,
                                                    relValues: [],
                                                    scopeId: `fyf0Iw0RO`,
                                                    smoothScroll: !1,
                                                    children: v(T.a, {
                                                      className: `framer-styles-preset-1vnltb4`,
                                                      "data-styles-preset": `S5XDCQGnJ`,
                                                      children: `Youtube`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              className: `framer-1rofvqo`,
                                              "data-framer-name": `Reviews Text`,
                                              fonts: [`Inter`],
                                              layoutDependency: w,
                                              layoutId: `Wc9055rUM`,
                                              style: {
                                                "--extracted-r6o4lv": `var(--token-e6be3043-e1a9-4dbf-8f7b-1ce31d52b0bb, rgba(255, 255, 255, 0.6))`,
                                                "--framer-paragraph-spacing": `0px`,
                                              },
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                              ...q(
                                                {
                                                  jMQkBFVE4: {
                                                    children: v(r, {
                                                      children: v(T.p, {
                                                        className: `framer-styles-preset-1ei6ekx`,
                                                        "data-styles-preset": `bHwADsIpE`,
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-alignment": `left`,
                                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e6be3043-e1a9-4dbf-8f7b-1ce31d52b0bb, rgba(255, 255, 255, 0.6)))`,
                                                        },
                                                        children: v(z, {
                                                          href: `https://www.youtube.com/`,
                                                          motionChild: !0,
                                                          nodeId: `Wc9055rUM`,
                                                          openInNewTab: !0,
                                                          relValues: [],
                                                          scopeId: `fyf0Iw0RO`,
                                                          smoothScroll: !1,
                                                          children: v(T.a, {
                                                            className: `framer-styles-preset-1vnltb4`,
                                                            "data-styles-preset": `S5XDCQGnJ`,
                                                            children: `Youtube`,
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  },
                                                },
                                                m,
                                                y
                                              ),
                                            }),
                                            v(U, {
                                              __fromCanvasComponent: !0,
                                              children: v(r, {
                                                children: v(T.p, {
                                                  className: `framer-styles-preset-yf5nv9`,
                                                  "data-styles-preset": `ENNlAU9yc`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `left`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e6be3043-e1a9-4dbf-8f7b-1ce31d52b0bb, rgba(255, 255, 255, 0.6)))`,
                                                  },
                                                  children: v(z, {
                                                    href: `https://twitter.com/`,
                                                    motionChild: !0,
                                                    nodeId: `DA2XWxs6x`,
                                                    openInNewTab: !0,
                                                    relValues: [],
                                                    scopeId: `fyf0Iw0RO`,
                                                    smoothScroll: !1,
                                                    children: v(T.a, {
                                                      className: `framer-styles-preset-1vnltb4`,
                                                      "data-styles-preset": `S5XDCQGnJ`,
                                                      children: `X`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              className: `framer-1r1qi56`,
                                              "data-framer-name": `Reviews Text`,
                                              fonts: [`Inter`],
                                              layoutDependency: w,
                                              layoutId: `DA2XWxs6x`,
                                              style: {
                                                "--extracted-r6o4lv": `var(--token-e6be3043-e1a9-4dbf-8f7b-1ce31d52b0bb, rgba(255, 255, 255, 0.6))`,
                                                "--framer-paragraph-spacing": `0px`,
                                              },
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                              ...q(
                                                {
                                                  jMQkBFVE4: {
                                                    children: v(r, {
                                                      children: v(T.p, {
                                                        className: `framer-styles-preset-1ei6ekx`,
                                                        "data-styles-preset": `bHwADsIpE`,
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-alignment": `left`,
                                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e6be3043-e1a9-4dbf-8f7b-1ce31d52b0bb, rgba(255, 255, 255, 0.6)))`,
                                                        },
                                                        children: v(z, {
                                                          href: `https://twitter.com/`,
                                                          motionChild: !0,
                                                          nodeId: `DA2XWxs6x`,
                                                          openInNewTab: !0,
                                                          relValues: [],
                                                          scopeId: `fyf0Iw0RO`,
                                                          smoothScroll: !1,
                                                          children: v(T.a, {
                                                            className: `framer-styles-preset-1vnltb4`,
                                                            "data-styles-preset": `S5XDCQGnJ`,
                                                            children: `X`,
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  },
                                                },
                                                m,
                                                y
                                              ),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          g(yn, {
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            animate: Ln,
                            className: `framer-m8mpkj`,
                            "data-framer-appear-id": `m8mpkj`,
                            "data-framer-name": `Links & Line`,
                            initial: J,
                            layoutDependency: w,
                            layoutId: `CkrNpjINg`,
                            optimized: !0,
                            children: [
                              v(de, {
                                className: `framer-1agzuj1`,
                                "data-framer-name": `Line 108`,
                                fill: `rgba(0,0,0,1)`,
                                intrinsicHeight: 3,
                                intrinsicWidth: 1314,
                                layoutDependency: w,
                                layoutId: `u_8EecHsZ`,
                                svg: `<svg width="1314" height="3" viewBox="-1 -1 1314 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="1312" y2="0.5" stroke="url(#paint0_linear_943_18799)" stroke-opacity="0.3"/>
<defs>
<linearGradient id="paint0_linear_943_18799" x1="0" y1="1.5" x2="1312" y2="1.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#999999" stop-opacity="0.2"/>
<stop offset="0.0626737" stop-color="#FFA15E"/>
<stop offset="1" stop-color="#999999" stop-opacity="0.1"/>
</linearGradient>
</defs>
</svg>
`,
                                withExternalLayout: !0,
                              }),
                              g(T.div, {
                                className: `framer-jk270x`,
                                "data-framer-name": `Links`,
                                layoutDependency: w,
                                layoutId: `Qzqpmn9Ed`,
                                children: [
                                  v(U, {
                                    __fromCanvasComponent: !0,
                                    children: v(r, {
                                      children: v(T.p, {
                                        className: `framer-styles-preset-1ei6ekx`,
                                        "data-styles-preset": `bHwADsIpE`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `start` },
                                        children: `© 2026 Corx. All rights reserved`,
                                      }),
                                    }),
                                    className: `framer-143lhe3`,
                                    "data-framer-name": `Reviews Text`,
                                    fonts: [`Inter`],
                                    layoutDependency: w,
                                    layoutId: `TiKDS03hm`,
                                    style: { "--framer-paragraph-spacing": `0px` },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  g(T.div, {
                                    className: `framer-lzehr9`,
                                    "data-framer-name": `Created`,
                                    layoutDependency: w,
                                    layoutId: `uKXZfLDzD`,
                                    children: [
                                      v(U, {
                                        __fromCanvasComponent: !0,
                                        children: v(r, {
                                          children: v(T.p, {
                                            className: `framer-styles-preset-1ei6ekx`,
                                            "data-styles-preset": `bHwADsIpE`,
                                            dir: `auto`,
                                            style: { "--framer-text-alignment": `start` },
                                            children: `Created by Vemmba`,
                                          }),
                                        }),
                                        className: `framer-gue78o`,
                                        "data-framer-name": `Reviews Text`,
                                        fonts: [`Inter`],
                                        layoutDependency: w,
                                        layoutId: `Rt1hXoMqI`,
                                        style: { "--framer-paragraph-spacing": `0px` },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      v(U, {
                                        __fromCanvasComponent: !0,
                                        children: v(r, {
                                          children: v(T.p, {
                                            className: `framer-styles-preset-1ei6ekx`,
                                            "data-styles-preset": `bHwADsIpE`,
                                            dir: `auto`,
                                            style: { "--framer-text-alignment": `start` },
                                            children: v(z, {
                                              href: `mailto:business@corx.club`,
                                              motionChild: !0,
                                              nodeId: `xXf8igrsB`,
                                              openInNewTab: !1,
                                              relValues: [],
                                              scopeId: `fyf0Iw0RO`,
                                              smoothScroll: !1,
                                              children: v(T.a, {
                                                className: `framer-styles-preset-irucd3`,
                                                "data-styles-preset": `YFnIXkyM3`,
                                                children: `business@corx.club · contact@corx.club`,
                                              }),
                                            }),
                                          }),
                                        }),
                                        className: `framer-586p44`,
                                        "data-framer-name": `Reviews Text`,
                                        fonts: [`Inter`],
                                        layoutDependency: w,
                                        layoutId: `xXf8igrsB`,
                                        style: { "--framer-paragraph-spacing": `0px` },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      v(L, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 733,
                          intrinsicWidth: 2145,
                          loading: P(
                            (c?.y || 0) +
                              0 +
                              (((c?.height || 1185) - 0 - 1649.6) / 2 + 0 + 0) +
                              1649.6 -
                              492
                          ),
                          pixelHeight: 733,
                          pixelWidth: 2145,
                          positionX: `center`,
                          positionY: `bottom`,
                          sizes: `1440px`,
                          src: `../../assets/images/Kv7aUtLKq4R0uQjEVRvLkLeM-dc0100.png`,
                          srcSet: `../../assets/images/Kv7aUtLKq4R0uQjEVRvLkLeM-b626e0.png 512w,../../assets/images/Kv7aUtLKq4R0uQjEVRvLkLeM-575293.png 1024w,../../assets/images/Kv7aUtLKq4R0uQjEVRvLkLeM.png 2048w,../../assets/images/Kv7aUtLKq4R0uQjEVRvLkLeM-dc0100.png 2145w`,
                        },
                        className: `framer-1arx4q0`,
                        fitImageDimension: `height`,
                        layoutDependency: w,
                        layoutId: `W8DUlFgal`,
                        transformTemplate: Rn,
                        ...q(
                          {
                            J_8LE4z7n: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 733,
                                intrinsicWidth: 2145,
                                loading: P(
                                  (c?.y || 0) +
                                    0 +
                                    (((c?.height || 1295) - 0 - 1759.6) / 2 + 0 + 0) +
                                    1759.6 -
                                    270
                                ),
                                pixelHeight: 733,
                                pixelWidth: 2145,
                                positionX: `center`,
                                positionY: `bottom`,
                                sizes: c?.width || `100vw`,
                                src: `../../assets/images/Kv7aUtLKq4R0uQjEVRvLkLeM-dc0100.png`,
                                srcSet: `../../assets/images/Kv7aUtLKq4R0uQjEVRvLkLeM-b626e0.png 512w,../../assets/images/Kv7aUtLKq4R0uQjEVRvLkLeM-575293.png 1024w,../../assets/images/Kv7aUtLKq4R0uQjEVRvLkLeM.png 2048w,../../assets/images/Kv7aUtLKq4R0uQjEVRvLkLeM-dc0100.png 2145w`,
                              },
                              fitImageDimension: void 0,
                              transformTemplate: void 0,
                            },
                            jMQkBFVE4: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 733,
                                intrinsicWidth: 2145,
                                loading: P(
                                  (c?.y || 0) +
                                    0 +
                                    (((c?.height || 200) - 0 - 1791.2) / 2 + 0 + 0) +
                                    1791.2 -
                                    68
                                ),
                                pixelHeight: 733,
                                pixelWidth: 2145,
                                positionX: `center`,
                                positionY: `bottom`,
                                sizes: c?.width || `100vw`,
                                src: `../../assets/images/Kv7aUtLKq4R0uQjEVRvLkLeM-dc0100.png`,
                                srcSet: `../../assets/images/Kv7aUtLKq4R0uQjEVRvLkLeM-b626e0.png 512w,../../assets/images/Kv7aUtLKq4R0uQjEVRvLkLeM-575293.png 1024w,../../assets/images/Kv7aUtLKq4R0uQjEVRvLkLeM.png 2048w,../../assets/images/Kv7aUtLKq4R0uQjEVRvLkLeM-dc0100.png 2145w`,
                              },
                              transformTemplate: void 0,
                            },
                            KDCvDvb2x: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 733,
                                intrinsicWidth: 2145,
                                loading: P(
                                  (c?.y || 0) +
                                    0 +
                                    (((c?.height || 1145) - 0 - 1609.6) / 2 + 0 + 0) +
                                    1609.6 -
                                    369
                                ),
                                pixelHeight: 733,
                                pixelWidth: 2145,
                                positionX: `center`,
                                positionY: `bottom`,
                                sizes: c?.width || `100vw`,
                                src: `../../assets/images/Kv7aUtLKq4R0uQjEVRvLkLeM-dc0100.png`,
                                srcSet: `../../assets/images/Kv7aUtLKq4R0uQjEVRvLkLeM-b626e0.png 512w,../../assets/images/Kv7aUtLKq4R0uQjEVRvLkLeM-575293.png 1024w,../../assets/images/Kv7aUtLKq4R0uQjEVRvLkLeM.png 2048w,../../assets/images/Kv7aUtLKq4R0uQjEVRvLkLeM-dc0100.png 2145w`,
                              },
                              transformTemplate: void 0,
                            },
                          },
                          m,
                          y
                        ),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `.framer-OfMtq.framer-orx6w3, .framer-OfMtq .framer-orx6w3 { display: block; }`,
          `.framer-OfMtq.framer-64gfxq { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1440px; will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-OfMtq .framer-1fnwou8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 120px 64px 174px 64px; position: relative; width: 100%; }`,
          `.framer-OfMtq .framer-1wm93om { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1312px; overflow: var(--overflow-clip-fallback, clip); padding: 44px 0px 44px 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-OfMtq .framer-ankq44 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-OfMtq .framer-fppg0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 720px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-OfMtq .framer-1v95d0w, .framer-OfMtq .framer-1apb901, .framer-OfMtq .framer-1rt7m0p, .framer-OfMtq .framer-oj436p, .framer-OfMtq .framer-1rofvqo, .framer-OfMtq .framer-1r1qi56 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-OfMtq .framer-1tiaijh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-OfMtq .framer-1k6ocot { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-OfMtq .framer-1p6y718 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-OfMtq .framer-1s53hrh-container { flex: none; height: 48px; position: relative; width: 184px; }`,
          `.framer-OfMtq .framer-enxdjc, .framer-OfMtq .framer-gjc0ve, .framer-OfMtq .framer-1fzso20, .framer-OfMtq .framer-13seetu, .framer-OfMtq .framer-1aqwgss, .framer-OfMtq .framer-obzc9u, .framer-OfMtq .framer-12vhhn7, .framer-OfMtq .framer-i5jjfc, .framer-OfMtq .framer-143lhe3, .framer-OfMtq .framer-gue78o, .framer-OfMtq .framer-586p44 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-OfMtq .framer-15na5d { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; max-width: 1312px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; z-index: 2; }`,
          `.framer-OfMtq .framer-u8aro7 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 280px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-OfMtq .framer-1bf8ucs { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-OfMtq .framer-170pnmp { flex: none; height: 24px; position: relative; width: 24px; }`,
          `.framer-OfMtq .framer-1ur5c1g { flex: none; height: 90px; position: relative; width: 63px; }`,
          `.framer-OfMtq .framer-guu0cx { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 99px; height: min-content; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-OfMtq .framer-cw2jhx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-OfMtq .framer-1pxnqot, .framer-OfMtq .framer-17rfvfk { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-OfMtq .framer-108dfri { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-OfMtq .framer-119iuge { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-OfMtq .framer-vpzfas { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 88px; }`,
          `.framer-OfMtq .framer-m8mpkj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; max-width: 1312px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-OfMtq .framer-1agzuj1 { flex: none; height: 3px; position: relative; width: 1314px; }`,
          `.framer-OfMtq .framer-jk270x { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-OfMtq .framer-lzehr9 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-OfMtq .framer-1arx4q0 { bottom: 0px; flex: none; height: auto; left: 50%; overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 1440px; will-change: var(--framer-will-change-filter-override, filter); z-index: 0; }`,
          `.framer-OfMtq.framer-v-n4i2m0.framer-64gfxq { width: 1080px; }`,
          `.framer-OfMtq.framer-v-n4i2m0 .framer-15na5d, .framer-OfMtq.framer-v-wlqxw2 .framer-15na5d, .framer-OfMtq.framer-v-9yxdie .framer-15na5d { gap: 40px; }`,
          `.framer-OfMtq.framer-v-n4i2m0 .framer-1arx4q0, .framer-OfMtq.framer-v-9yxdie .framer-1arx4q0 { left: 0px; right: 0px; width: unset; }`,
          `.framer-OfMtq.framer-v-wlqxw2.framer-64gfxq { width: 810px; }`,
          `.framer-OfMtq.framer-v-wlqxw2 .framer-1fnwou8 { padding: 120px 40px 174px 40px; }`,
          `.framer-OfMtq.framer-v-wlqxw2 .framer-u8aro7 { flex-direction: column; gap: 60px; }`,
          `.framer-OfMtq.framer-v-wlqxw2 .framer-guu0cx, .framer-OfMtq.framer-v-9yxdie .framer-guu0cx { flex: none; gap: unset; justify-content: space-between; width: 100%; }`,
          `.framer-OfMtq.framer-v-wlqxw2 .framer-1arx4q0 { height: 270px; left: 0px; right: 0px; width: unset; }`,
          `.framer-OfMtq.framer-v-9yxdie.framer-64gfxq { width: 390px; }`,
          `.framer-OfMtq.framer-v-9yxdie .framer-1fnwou8 { gap: 60px; padding: 80px 20px 80px 20px; }`,
          `.framer-OfMtq.framer-v-9yxdie .framer-ankq44 { padding: 40px 16px 40px 16px; }`,
          `.framer-OfMtq.framer-v-9yxdie .framer-1k6ocot { flex-direction: column; width: 100%; }`,
          `.framer-OfMtq.framer-v-9yxdie .framer-1p6y718, .framer-OfMtq.framer-v-9yxdie .framer-vpzfas { width: 100%; }`,
          `.framer-OfMtq.framer-v-9yxdie .framer-1s53hrh-container { flex: 1 0 0px; width: 1px; }`,
          `.framer-OfMtq.framer-v-9yxdie .framer-enxdjc, .framer-OfMtq.framer-v-9yxdie .framer-i5jjfc { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-OfMtq.framer-v-9yxdie .framer-u8aro7 { flex-direction: column; gap: 40px; }`,
          `.framer-OfMtq.framer-v-9yxdie .framer-1pxnqot { gap: 14px; }`,
          `.framer-OfMtq.framer-v-9yxdie .framer-108dfri { width: 62px; }`,
          `.framer-OfMtq.framer-v-9yxdie .framer-119iuge { width: 80px; }`,
          `.framer-OfMtq.framer-v-9yxdie .framer-17rfvfk { gap: 14px; width: 100%; }`,
          `.framer-OfMtq.framer-v-9yxdie .framer-jk270x { flex-direction: column; gap: 8px; justify-content: center; }`,
          `.framer-OfMtq.framer-v-9yxdie .framer-lzehr9 { align-content: flex-start; align-items: flex-start; }`,
          ...ht,
          ...yt,
          ...at,
          ...Ze,
          ...it,
          ...lt,
          ...dt,
          ...zt,
          ...pn,
          `.framer-OfMtq[data-border="true"]::after, .framer-OfMtq [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-OfMtq`
      )),
      (Y.displayName = `CTA & Footer`),
      (Y.defaultProps = { height: 1185, width: 1440 }),
      j(Y, {
        variant: {
          options: [`gfTUaeKlN`, `KDCvDvb2x`, `J_8LE4z7n`, `jMQkBFVE4`],
          optionTitles: [`Desktop`, `Leptop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: V.Enum,
        },
      }),
      M(
        Y,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ..._n,
          ...k(gt),
          ...k(bt),
          ...k(st),
          ...k(We),
          ...k(ot),
          ...k(et),
          ...k(ft),
          ...k(Rt),
          ...k(fn),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Y.loader = { load: (e, t) => ie([() => ce(Ye, {}, t)], t) }));
  }),
  Gn,
  Kn,
  qn,
  Jn,
  Yn,
  Xn,
  Zn,
  X,
  Qn,
  $n,
  er,
  tr,
  nr,
  rr,
  ir,
  ar,
  or,
  sr,
  Z,
  cr = e(() => {
    (b(),
      N(),
      D(),
      c(),
      dn(),
      Wn(),
      (Gn = Ve(K)),
      (Kn = ae(K)),
      (qn = Ve(Y)),
      (Jn = {
        cHLlG1rP6: `(min-width: 1440px)`,
        CXOZWrrab: `(min-width: 810px) and (max-width: 1079.98px)`,
        IJcNTV3vS: `(min-width: 1080px) and (max-width: 1439.98px)`,
        rykfGkJXq: `(max-width: 809.98px)`,
      }),
      (Yn = `framer-3rtY3`),
      (Xn = {
        cHLlG1rP6: `framer-v-1igj42r`,
        CXOZWrrab: `framer-v-nkge7m`,
        IJcNTV3vS: `framer-v-yk2uzb`,
        rykfGkJXq: `framer-v-77g1ak`,
      }),
      (Zn = (e, t) => `translateX(-50%) ${t}`),
      (X = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Qn = {
        CXOZWrrab: [
          `.framer-3rtY3 .framer-1smb2ke-container { left: 40px; right: 40px; top: 24px; width: unset; }`,
        ],
        IJcNTV3vS: [
          `.framer-3rtY3 .framer-1smb2ke-container { left: 30px; right: 30px; width: unset; }`,
        ],
        rykfGkJXq: [
          `.framer-3rtY3 .framer-1smb2ke-container { left: 20px; right: 20px; top: 20px; width: unset; }`,
        ],
      }),
      ($n = Object.keys(Qn)),
      (er = {
        CXOZWrrab: `.framer-nkge7m-override`,
        IJcNTV3vS: `.framer-yk2uzb-override`,
        rykfGkJXq: `.framer-77g1ak-override`,
      }),
      (tr = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-3rtY3.framer-1cjnmsv, .framer-3rtY3 .framer-1cjnmsv { display: block; }`,
        `.framer-3rtY3.framer-1igj42r { align-content: center; align-items: center; background-color: var(--token-c5c9e562-6208-494c-a46c-1fb5738d89f6, #090401); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-3rtY3 .framer-1smb2ke-container { flex: none; height: auto; left: 50%; order: -1000; position: var(--framer-canvas-fixed-position, fixed); top: 32px; width: auto; z-index: 10; }`,
        `.framer-3rtY3 .framer-1bm7in2 { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }`,
        `.framer-3rtY3 .framer-1asgu94-container { flex: none; height: auto; order: 1002; position: relative; width: 100%; }`,
        `[data-layout-template="true"] > #overlay { margin-bottom: -0px; }`,
      ]),
      (nr = {
        cHLlG1rP6: `(min-width: 1440px)`,
        CXOZWrrab: `(min-width: 810px) and (max-width: 1079.98px)`,
        IJcNTV3vS: `(min-width: 1080px) and (max-width: 1439.98px)`,
        rykfGkJXq: `(max-width: 809.98px)`,
      }),
      (rr = { Desktop: `cHLlG1rP6`, Leptop: `IJcNTV3vS`, Phone: `rykfGkJXq`, Tablet: `CXOZWrrab` }),
      (ir = ({ value: e }) =>
        Fe()
          ? null
          : v(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
      (ar = ({ height: e, id: t, scrollSection: n, width: r, ...i }) => ({
        ...i,
        kTbECFgDY: n ?? i.kTbECFgDY,
        variant: rr[i.variant] ?? i.variant ?? `cHLlG1rP6`,
      })),
      (or = y(function (e, t) {
        let n = C(null),
          r = t ?? n,
          i = ne(),
          { activeLocale: a, setLocale: o } = R(),
          {
            style: s,
            className: c,
            layoutId: l,
            variant: u,
            kTbECFgDY: d,
            children: f,
            ...p
          } = ar(e),
          [m, h] = ye(u, Jn, !1),
          ee = O(Yn);
        return (
          Me({}),
          v(Ee.Provider, {
            value: {
              activeVariantId: m,
              humanReadableVariantMap: rr,
              isLayoutTemplate: !0,
              primaryVariantId: `cHLlG1rP6`,
              variantClassNames: Xn,
            },
            children: g(re, {
              id: l ?? i,
              children: [
                v(ir, {
                  value: `:root body { background: var(--token-c5c9e562-6208-494c-a46c-1fb5738d89f6, rgb(9, 4, 1)); }`,
                }),
                g(T.div, {
                  ...p,
                  className: O(ee, `framer-1igj42r`, c),
                  "data-layout-template": !0,
                  ref: r,
                  style: { ...s },
                  children: [
                    v(F, {
                      breakpoint: m,
                      overrides: {
                        CXOZWrrab: { width: `calc(100vw - 80px)`, y: 24 },
                        IJcNTV3vS: { width: `calc(100vw - 60px)` },
                        rykfGkJXq: { width: `calc(100vw - 40px)`, y: 20 },
                      },
                      children: v(H, {
                        height: 72,
                        y: 32,
                        children: v(F, {
                          breakpoint: m,
                          overrides: {
                            CXOZWrrab: {
                              "data-framer-layout-hint-center-x": void 0,
                              transformTemplate: void 0,
                            },
                            IJcNTV3vS: {
                              "data-framer-layout-hint-center-x": void 0,
                              transformTemplate: void 0,
                            },
                            rykfGkJXq: {
                              "data-framer-layout-hint-center-x": void 0,
                              transformTemplate: void 0,
                            },
                          },
                          children: v(De, {
                            className: `framer-1smb2ke-container`,
                            "data-framer-layout-hint-center-x": !0,
                            layoutScroll: !0,
                            nodeId: `YFTyuz8O6`,
                            rendersWithMotion: !0,
                            scopeId: `A3YPTi5i9`,
                            transformTemplate: Zn,
                            children: v(F, {
                              breakpoint: m,
                              overrides: {
                                CXOZWrrab: {
                                  __framer__variantAppearEffectEnabled: void 0,
                                  style: { width: `100%` },
                                  variant: X(`TAiXNo5qT`),
                                },
                                IJcNTV3vS: {
                                  __framer__targets: void 0,
                                  style: { width: `100%` },
                                  variant: X(`TAiXNo5qT`),
                                },
                                rykfGkJXq: {
                                  __framer__variantAppearEffectEnabled: void 0,
                                  style: { width: `100%` },
                                  variant: X(`D8L_mdfKT`),
                                },
                              },
                              children: v(Kn, {
                                __framer__animateOnce: !1,
                                __framer__targets: [{ ref: d, target: `OQseHBxLf` }],
                                __framer__threshold: 1,
                                __framer__variantAppearEffectEnabled: !0,
                                height: `100%`,
                                id: `YFTyuz8O6`,
                                layoutId: `YFTyuz8O6`,
                                variant: X(`yvUvWxvM7`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      }),
                    }),
                    f,
                    v(`div`, { className: `framer-1bm7in2` }),
                    v(H, {
                      height: 1203,
                      width: `100vw`,
                      y: 1e3,
                      children: v(De, {
                        className: `framer-1asgu94-container`,
                        nodeId: `CSknB6Zoq`,
                        scopeId: `A3YPTi5i9`,
                        children: v(F, {
                          breakpoint: m,
                          overrides: {
                            CXOZWrrab: { variant: X(`J_8LE4z7n`) },
                            IJcNTV3vS: { variant: X(`KDCvDvb2x`) },
                            rykfGkJXq: { variant: X(`jMQkBFVE4`) },
                          },
                          children: v(Y, {
                            height: `100%`,
                            id: `CSknB6Zoq`,
                            layoutId: `CSknB6Zoq`,
                            style: { width: `100%` },
                            variant: X(`gfTUaeKlN`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                v(`div`, { id: `template-overlay` }),
              ],
            }),
          })
        );
      })),
      (sr = (e) =>
        e === ze.canvas || e === ze.export
          ? [
              ...tr,
              ...$n.flatMap((e) => {
                let t = er[e];
                return Qn[e].map((e) => `${t} {${e}}`);
              }),
            ]
          : [...tr, ...$n.map((e) => `@media ${nr[e]} { ${Qn[e].join(` `)} }`)]),
      (Z = I(or, sr, `framer-3rtY3`)),
      (Z.displayName = `Navbar & Footer & CTA`),
      (Z.defaultProps = { height: 1559, width: 1440 }),
      j(Z, { kTbECFgDY: { title: `Scroll Section`, type: V.ScrollSectionRef } }),
      M(Z, [{ explicitInter: !0, fonts: [] }, ...Gn, ...qn], { supportsExplicitInterCodegen: !0 }),
      (Z.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([ce(K, {}, t), ce(Y, {}, t)])),
      }));
  });
function lr({ webPageId: e, children: t, style: n, ...r }) {
  let i = { kTbECFgDY: { href: { hash: `:xdW_1aw8E`, webPageId: `augiA20Il` }, refKey: !0 } },
    a = { ...i, kTbECFgDY: void 0 },
    o = Ie(),
    s = { augiA20Il: i, dTSdPGpXg: a, OfnN1JWww: a, pnrf0LVZ7: a }[e] ?? {};
  switch (e) {
    case `augiA20Il`:
    case `dTSdPGpXg`:
    case `pnrf0LVZ7`:
    case `OfnN1JWww`:
      return f(ve, { links: [s.kTbECFgDY] }, (e) =>
        f(Z, { ...s, key: `NavbarFooterCTA`, kTbECFgDY: o(e[0]), style: n }, t(!0))
      );
    default:
      return t(!1);
  }
}
function ur(e) {
  switch (e) {
    case `augiA20Il`:
    case `dTSdPGpXg`:
    case `pnrf0LVZ7`:
    case `OfnN1JWww`:
      return [
        { hash: `1igj42r`, mediaQuery: `(min-width: 1440px)` },
        { hash: `yk2uzb`, mediaQuery: `(min-width: 1080px) and (max-width: 1439.98px)` },
        { hash: `nkge7m`, mediaQuery: `(min-width: 810px) and (max-width: 1079.98px)` },
        { hash: `77g1ak`, mediaQuery: `(max-width: 809.98px)` },
      ];
    default:
      return;
  }
}
async function dr({
  routeId: e,
  pathVariables: i,
  canonicalPathVariables: a,
  localeId: o,
  collectionItemId: s,
  contentLocaleId: c,
  shouldResolveInitialRouteContentState: l = !1,
}) {
  let u = Q[e].page.preload();
  (Ne({
    checkServerSideRouter: !0,
    disableCustomCode: !1,
    disableHoverOnMobile: !1,
    editorBarDisableFrameAncestorsSecurity: !1,
    motionDivToDiv: !1,
    onPageLocalizationSupport: !0,
    onPageMoveTool: !0,
    onPageRichTextBlockSelection: !0,
    scrollRestoration: !0,
    synchronousNavigationOnDesktop: !1,
    yieldOnTap: !1,
  }),
    be(_r));
  let p = f(we, {
    children: f(Pe, {
      children: f(Se, {
        isWebsite: !0,
        environment: `site`,
        routeId: e,
        pathVariables: i,
        canonicalPathVariables: a,
        routes: Q,
        collectionUtils: hr,
        serverDatabaseClient: gr,
        framerSiteId: _r,
        notFoundPage: B(() => import("./odX9uzjoXWRglCG3aALq4w9kyEf9YIBJR8o5OBXYU4g.Dfb4VCPR.mjs")),
        isReducedMotion: void 0,
        localeId: o,
        locales: mr,
        preserveQueryParams: void 0,
        siteCanonicalURL: `https://effective-salmon-548944.framer.app`,
        EditorBar:
          w === void 0
            ? void 0
            : (() => {
                if (vr) {
                  console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
                  return;
                }
                return B(async () => {
                  w.__framer_editorBarDependencies = {
                    __version: 3,
                    framer: { useCurrentRoute: ke, useLocaleInfo: R, useRouter: Ce },
                    react: {
                      createElement: f,
                      Fragment: r,
                      memo: t,
                      useCallback: ee,
                      useEffect: d,
                      useRef: C,
                      useState: S,
                      useLayoutEffect: n,
                    },
                    "react-dom": { createPortal: m },
                  };
                  let { createEditorBar: e } = await import(
                    `data:text/javascript,export%20const%20createEditorBar=()=>()=>null`
                  );
                  return { default: e() };
                });
              })(),
        adaptLayoutToTextDirection: !0,
        LayoutTemplate: lr,
        loadSnippetsModule: new Ae(
          () => import("./aohXcfCEH7eLshUz3Ru8hwERbjwVtxq5cCDnwgn579k.dObCGW41.mjs")
        ),
        initialCollectionItemId: s,
        initialContentLocaleIdOverride: c,
      }),
    }),
    value: {
      global: {
        enter: {
          mask: { angle: 270, type: `wipe`, width: `100%` },
          opacity: 1,
          rotate: 0,
          rotate3d: !1,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          transition: {
            damping: 30,
            delay: 0,
            duration: 0.4,
            ease: [0.27, 0, 0.51, 1],
            mass: 1,
            stiffness: 400,
            type: `tween`,
          },
          x: `0px`,
          y: `0px`,
        },
      },
      routes: {},
    },
  });
  return (await u, p);
}
function fr() {
  $ && w.__framer_events.push(arguments);
}
async function pr(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || w.__framer_hadFatalError) return;
    let r = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          r
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        r
      );
    fr(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
      message: String(e),
      componentStack: r,
      stack: r ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    });
  }
  try {
    let r, i, a, s, c, l, u;
    if (e)
      ((u = JSON.parse(t.dataset.framerHydrateV2)),
        (r = u.routeId),
        (i = u.localeId),
        (a = u.contentLocaleId),
        (s = u.pathVariables),
        (c = u.canonicalPathVariables),
        (l = u.breakpoints),
        (r = he(Q, r)));
    else {
      he(Q, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (i = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((s ??= {}), (s[e.slice(4)] = n));
      }
      if (!r || !i) {
        let e = pe(Q, decodeURIComponent(location.pathname), !0, mr);
        ((r = e.routeId), (i = e.localeId), (s = e.pathVariables));
      }
    }
    let d = dr({
      routeId: r,
      localeId: i,
      contentLocaleId: a,
      pathVariables: s,
      canonicalPathVariables: c,
      collectionItemId: e ? u?.collectionItemId : void 0,
      shouldResolveInitialRouteContentState: !e,
    });
    w !== void 0 &&
      (async () => {
        let e = Q[r],
          t = mr.find(({ id: e }) => (i ? e === i : e === "default")).code,
          n = u?.collectionItemId ?? null;
        if (n === null && e?.collectionId && hr) {
          let r = await hr[e.collectionId]?.(),
            [i] = Object.values(s);
          r && typeof i == `string` && (n = (await r.getRecordIdBySlug(i, t || void 0)) ?? null);
        }
        let a = Intl.DateTimeFormat().resolvedOptions(),
          o = a.timeZone,
          c = a.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          w.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: _r,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: w.location.href,
              hostname: w.location.hostname || null,
              pathname: w.location.pathname || null,
              hash: w.location.hash || null,
              search: w.location.search || null,
              timezone: o,
              locale: c,
            },
            `eager`,
          ]),
          await le({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, { detail: { framerLocale: t || null } })
          ));
      })();
    let f = await d;
    e
      ? (Re(`framer-rewrite-breakpoints`, () => {
          (ue(l), w.__framer_onRewriteBreakpoints?.(l));
        }),
        (vr ? (e) => e() : o)(() => {
          (me(), je(), x(t, f, { onRecoverableError: n }));
        }))
      : te(t, { onRecoverableError: n }).render(f);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var Q, mr, hr, gr, _r, $, vr;
e(() => {
  if (
    (i(),
    N(),
    c(),
    u(),
    _(),
    cr(),
    (Q = {
      augiA20Il: {
        elements: {
          DoAYzecBi: `Process Section`,
          Gqyo5qghP: `tools-used-section`,
          j7cJfFeeL: `sarvices-section`,
          JR66AqEFk: `faq`,
          Lv78UJ6SU: `results`,
          qUvsuUZ1o: `Problem Section`,
          V9PsQ86y5: `Pricing`,
          xdW_1aw8E: `nav`,
          yFsjdXIWX: `how-we-fix-it`,
        },
        page: B(() => import("./3n4KKIPkcVFxOaipcP0o-9vAsOwLrBJb7Kcu8Oq3KdM.Bdv95kDc.mjs")),
        path: `/`,
      },
      dTSdPGpXg: {
        elements: {},
        page: B(() => import("./Poaqng_YNNlkzTl2sbNRxc6ZaPzoTEFvWA19ipuxI-o.CQ1D2HKH.mjs")),
        path: `/all-works`,
      },
      pnrf0LVZ7: {
        elements: {},
        page: B(() => import("./1KL5rQ3ZBbzMaBTHqMTaMC_kUL5jvE50TiXHBqsPG9s.Ce-u6t_z.mjs")),
        path: `/contact`,
      },
      OfnN1JWww: {
        elements: {},
        page: B(() => import("./odX9uzjoXWRglCG3aALq4w9kyEf9YIBJR8o5OBXYU4g.Dfb4VCPR.mjs")),
        path: `/404`,
      },
    }),
    (mr = [{ code: `en`, id: `default`, name: `English`, slug: ``, textDirection: `ltr` }]),
    (hr = {}),
    (gr = void 0),
    (_r = `110aa6f5be28af97f8f35bb29d8a7acdfe8e09b7ccfd3cce5fd763f1ef6bd6e3`),
    ($ = typeof document < `u`),
    (vr = $ && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(s.userAgent)),
    $)
  ) {
    ((w.__framer_importFromPackage = (e, t) => () =>
      f(Oe, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
      (w.__framer_events = w.__framer_events || []),
      oe());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? pr(!0, e) : pr(!1, e);
  }
})();
export { ur as getLayoutTemplateBreakpoints, dr as getPageRoot };
//# sourceMappingURL=script_main.1Q0Se1bb.mjs.map
