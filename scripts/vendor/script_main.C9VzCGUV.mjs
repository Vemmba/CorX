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
import { D as T, a as E, r as re, t as D } from "./motion.CLguka-h.mjs";
import {
  A as ie,
  C as O,
  D as k,
  H as A,
  I as j,
  J as ae,
  K as oe,
  L as M,
  Q as se,
  R as N,
  S as ce,
  St as le,
  U as P,
  V as ue,
  W as F,
  X as de,
  Y as fe,
  Z as pe,
  _ as me,
  _t as he,
  at as ge,
  b as _e,
  c as ve,
  d as ye,
  dt as be,
  et as xe,
  f as I,
  ft as Se,
  h as Ce,
  ht as L,
  i as we,
  it as Te,
  k as Ee,
  l as R,
  m as De,
  mt as Oe,
  n as ke,
  nt as Ae,
  ot as je,
  p as Me,
  pt as Ne,
  r as z,
  rt as Pe,
  s as Fe,
  st as B,
  t as V,
  tt as Ie,
  u as Le,
  v as Re,
  vt as ze,
  w as H,
  xt as Be,
  y as U,
  yt as Ve,
} from "./framer.CvMidwmI.mjs";
import { i as He, n as Ue, r as We, t as Ge } from "./bHwADsIpE.CTmH8B6k.mjs";
import {
  a as Ke,
  c as qe,
  i as Je,
  n as Ye,
  o as Xe,
  r as Ze,
  s as Qe,
  t as $e,
} from "./gWwvuO7c6.DM-rOLvi.mjs";
import { i as et, n as tt, r as nt, t as rt } from "./shared-lib.BiOvUwih.mjs";
import { a as it, i as at, n as ot, o as st, r as ct, t as lt } from "./vpITPKqCH.51th4Wpb.mjs";
import { i as ut, n as dt, r as ft, t as pt } from "./TsxNrEyVF.Cx0whfpf.mjs";
var mt,
  ht,
  gt,
  _t,
  vt,
  yt,
  bt,
  xt = e(() => {
    (b(),
      P(),
      c(),
      (mt = `var(--framer-icon-mask)`),
      (ht = y(function (e, t) {
        return v(`svg`, { ...e, ref: t, children: e.children });
      })),
      (gt = T.create(ht)),
      (_t = y((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? v(gt, { ...a, layoutId: r, ref: t, children: i })
          : v(`svg`, { ...a, ref: t, children: i });
      })),
      (vt = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 14.5 0" fill="transparent" height="1px" id="jMF44oNeb" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(4.75 5.75)" width="14.5px"/><path d="M 0 0 L 14.5 0" fill="transparent" height="1px" id="lwuMFFtBI" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(4.75 18.25)" width="14.5px"/><path d="M 0 0 L 14.5 0" fill="transparent" height="1px" id="KKxXbtl64" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(4.75 12)" width="14.5px"/></svg>`),
      (yt = ({ dots: e, height: t, id: n, stroke: r, width: i, width1: a, ...o }) => ({
        ...o,
        BKVe8Pgvw: e ?? o.BKVe8Pgvw ?? 1,
        fICyAUQY1: r ?? o.fICyAUQY1 ?? `rgb(0, 0, 0)`,
        lKf_CQTz5: a ?? o.lKf_CQTz5 ?? 1.5,
      })),
      (bt = L(
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
            } = yt(e),
            u = Se(`1171430842`, vt);
          return v(_t, {
            ...l,
            className: k(`framer-OmG2n`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1335ju": s, "--18mrqx2": o, ...n },
            viewBox: `0 0 24 24`,
            children: v(`use`, { href: u }),
          });
        }),
        [
          `.framer-OmG2n { -webkit-mask: ${mt}; aspect-ratio: 1; display: block; mask: ${mt}; width: 24px; }`,
        ],
        `framer-OmG2n`
      )),
      (bt.displayName = `Menu`),
      H(bt, {
        fICyAUQY1: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Stroke`, type: z.Color },
        lKf_CQTz5: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: z.Number,
        },
        BKVe8Pgvw: {
          defaultValue: 1,
          displayStepper: !0,
          hidden: !0,
          max: 4,
          min: 1,
          title: `Dots`,
          type: z.Number,
        },
      }));
  }),
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt = e(() => {
    (b(),
      P(),
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
      (Et = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 10.5 0 L 0 10.5" fill="transparent" height="10.5px" id="dJkACGH8G" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(6.75 6.75)" width="10.5px"/><path d="M 0 0 L 10.5 10.5" fill="transparent" height="10.5px" id="pgy_UnrTc" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(6.75 6.75)" width="10.5px"/></svg>`),
      (Dt = ({ dots: e, height: t, id: n, stroke: r, width: i, width1: a, ...o }) => ({
        ...o,
        BKVe8Pgvw: e ?? o.BKVe8Pgvw ?? 1,
        fICyAUQY1: r ?? o.fICyAUQY1 ?? `rgb(0, 0, 0)`,
        lKf_CQTz5: a ?? o.lKf_CQTz5 ?? 1.5,
      })),
      (Ot = L(
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
            u = Se(`3527454627`, Et);
          return v(Tt, {
            ...l,
            className: k(`framer-KpKpK`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--1335ju": s, "--18mrqx2": o, ...n },
            viewBox: `0 0 24 24`,
            children: v(`use`, { href: u }),
          });
        }),
        [
          `.framer-KpKpK { -webkit-mask: ${St}; aspect-ratio: 1; display: block; mask: ${St}; width: 24px; }`,
        ],
        `framer-KpKpK`
      )),
      (Ot.displayName = `Close`),
      H(Ot, {
        fICyAUQY1: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Stroke`, type: z.Color },
        lKf_CQTz5: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: z.Number,
        },
        BKVe8Pgvw: {
          defaultValue: 1,
          displayStepper: !0,
          hidden: !0,
          max: 4,
          min: 1,
          title: `Dots`,
          type: z.Number,
        },
      }));
  }),
  At,
  jt,
  Mt,
  Nt = e(() => {
    (P(),
      Ee.loadFonts([]),
      (At = [{ explicitInter: !0, fonts: [] }]),
      (jt = [
        `.framer-qPSHR .framer-styles-preset-1vnltb4:not(.rich-text-wrapper), .framer-qPSHR .framer-styles-preset-1vnltb4.rich-text-wrapper a { --framer-link-hover-text-color: var(--token-8f73c29a-f931-4e35-bf1d-abf6e1668228, #cf672a); --framer-link-text-color: var(--token-e6be3043-e1a9-4dbf-8f7b-1ce31d52b0bb, rgba(255, 255, 255, 0.6)); }`,
      ]),
      (Mt = `framer-qPSHR`));
  });
function Pt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ft,
  It,
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  Ut,
  W,
  Wt = e(() => {
    (b(),
      P(),
      D(),
      c(),
      et(),
      (Ft = [`Pvr55WFL0`, `KBXCCyvrf`]),
      (It = `framer-YwOlQ`),
      (Lt = { KBXCCyvrf: `framer-v-hrse5b`, Pvr55WFL0: `framer-v-1tnfvbz` }),
      (Rt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (zt = ({ value: e, children: t }) => {
        let n = h(E),
          r = e ?? n.transition,
          i = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return v(E.Provider, { value: i, children: t });
      }),
      (Bt = { "Variant 1": `Pvr55WFL0`, "Variant 2": `KBXCCyvrf` }),
      (Vt = T.create(r)),
      (Ht = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        CIZ_Ddnsd: e ?? i.CIZ_Ddnsd,
        variant: Bt[i.variant] ?? i.variant ?? `Pvr55WFL0`,
      })),
      (Ut = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (W = L(
        y(function (e, t) {
          let n = C(null),
            i = t ?? n,
            a = ne(),
            { activeLocale: o, setLocale: s } = B();
          Ae();
          let { style: c, className: l, layoutId: u, variant: d, CIZ_Ddnsd: f, ...p } = Ht(e),
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
            } = Oe({
              cycleOrder: Ft,
              defaultVariant: `Pvr55WFL0`,
              ref: i,
              variant: d,
              variantClassNames: Lt,
            }),
            w = Ut(e, S),
            E = [rt],
            { activeVariantCallback: D, delay: ie } = Ie(m),
            O = D(async (...e) => {
              if ((b({ isPressed: !1 }), f && (await f(...e)) === !1)) return !1;
            }),
            A = D(async (...e) => {
              (b({ isHovered: !0 }), x(`KBXCCyvrf`));
            }),
            j = k(It, ...E),
            ae = D(async (...e) => {
              (b({ isHovered: !1 }), x(`Pvr55WFL0`));
            });
          return v(re, {
            id: u ?? a,
            children: v(Vt, {
              animate: S,
              initial: !1,
              children: v(zt, {
                value: Rt,
                children: v(I, {
                  href: { webPageId: `pnrf0LVZ7` },
                  motionChild: !0,
                  nodeId: `Pvr55WFL0`,
                  openInNewTab: !1,
                  scopeId: `BvdVrFWFR`,
                  smoothScroll: !0,
                  children: v(T.a, {
                    ...p,
                    ..._,
                    className: `${k(j, `framer-1tnfvbz`, l, h)} framer-hp1pik`,
                    "data-framer-name": `Variant 1`,
                    "data-highlight": !0,
                    "data-reset": `button`,
                    layoutDependency: w,
                    layoutId: `Pvr55WFL0`,
                    onMouseEnter: A,
                    onTap: O,
                    ref: i,
                    style: {
                      backgroundColor: `var(--token-857887c0-9486-4a16-b7a3-5457d6a4efbc, rgb(255, 255, 255))`,
                      borderBottomLeftRadius: 1046,
                      borderBottomRightRadius: 1046,
                      borderTopLeftRadius: 1046,
                      borderTopRightRadius: 1046,
                      ...c,
                    },
                    ...Pt(
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
                            v(_e, {
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
                            v(_e, {
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
          ...tt,
        ],
        `framer-YwOlQ`
      )),
      (W.displayName = `Contact button`),
      (W.defaultProps = { height: 48, width: 155 }),
      H(W, {
        variant: {
          options: [`Pvr55WFL0`, `KBXCCyvrf`],
          optionTitles: [`Variant 1`, `Variant 2`],
          title: `Variant`,
          type: z.Enum,
        },
        CIZ_Ddnsd: { title: `Click`, type: z.EventHandler },
      }),
      O(
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
          ...M(nt),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function G(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  $t,
  en,
  tn,
  K,
  nn = e(() => {
    (b(),
      P(),
      D(),
      c(),
      xt(),
      kt(),
      He(),
      Nt(),
      qe(),
      Wt(),
      (Gt = j(W)),
      (Kt = [`yvUvWxvM7`, `TAiXNo5qT`, `D8L_mdfKT`, `bpKt9DW2q`, `OQseHBxLf`]),
      (qt = `framer-928lb`),
      (Jt = {
        bpKt9DW2q: `framer-v-1vx690j`,
        D8L_mdfKT: `framer-v-1mzn7wl`,
        OQseHBxLf: `framer-v-1hvvsqq`,
        TAiXNo5qT: `framer-v-70j6d9`,
        yvUvWxvM7: `framer-v-15x4r9x`,
      }),
      (Yt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Xt = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Zt = ({ value: e, children: t }) => {
        let n = h(E),
          r = e ?? n.transition,
          i = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return v(E.Provider, { value: i, children: t });
      }),
      (Qt = {
        "Variant 4": `bpKt9DW2q`,
        "Variant 5": `OQseHBxLf`,
        Desktop: `yvUvWxvM7`,
        Phone: `D8L_mdfKT`,
        Tablet: `TAiXNo5qT`,
      }),
      ($t = T.create(r)),
      (en = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Qt[r.variant] ?? r.variant ?? `yvUvWxvM7`,
      })),
      (tn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (K = L(
        y(function (e, t) {
          let n = C(null),
            i = t ?? n,
            a = ne(),
            { activeLocale: o, setLocale: s } = B(),
            c = Ae(),
            { style: l, className: u, layoutId: d, variant: f, ...p } = en(e),
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
            } = Oe({
              cycleOrder: Kt,
              defaultVariant: `yvUvWxvM7`,
              ref: i,
              variant: f,
              variantClassNames: Jt,
            }),
            w = tn(e, S),
            E = k(qt, Ke, Ge, Mt),
            { activeVariantCallback: D, delay: ie } = Ie(m),
            O = D(async (...e) => {
              (b({ isPressed: !1 }), x(`D8L_mdfKT`));
            }),
            A = D(async (...e) => {
              x(`D8L_mdfKT`);
            }),
            j = () => !![`D8L_mdfKT`, `bpKt9DW2q`].includes(m),
            ae = D(async (...e) => {
              x(`bpKt9DW2q`);
            }),
            oe = () => m !== `D8L_mdfKT`;
          return v(re, {
            id: d ?? a,
            children: v($t, {
              animate: S,
              initial: !1,
              children: v(Zt, {
                value: Yt,
                children: v(T.nav, {
                  ...p,
                  ..._,
                  className: k(E, `framer-15x4r9x`, u, h),
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
                        onTap: O,
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
                          v(I, {
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
                                v(R, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 1254,
                                    intrinsicWidth: 1254,
                                    loading: N(
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
                                          loading: N(
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
                                          loading: N(
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
                              children: v(Le, {
                                animated: !0,
                                className: `framer-1g789a6`,
                                Component: bt,
                                layoutDependency: w,
                                layoutId: `VPY696hZk`,
                                style: {
                                  "--1335ju": 1.5,
                                  "--18mrqx2": `var(--token-857887c0-9486-4a16-b7a3-5457d6a4efbc, rgb(255, 255, 255))`,
                                  "--3it368": 1,
                                },
                                ...G({ bpKt9DW2q: { Component: Ot } }, m, y),
                              }),
                            }),
                        ],
                      }),
                      oe() &&
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
                                  children: v(I, {
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
                                        children: v(I, {
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
                                  children: v(I, {
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
                                        children: v(I, {
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
                                  children: v(I, {
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
                                        children: v(I, {
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
                                  children: v(I, {
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
                                        children: v(I, {
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
                      oe() &&
                        v(V, {
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
                          children: v(ce, {
                            className: `framer-1ofgpp8-container`,
                            layoutDependency: w,
                            layoutId: `QF1u9cyLN-container`,
                            nodeId: `QF1u9cyLN`,
                            rendersWithMotion: !0,
                            scopeId: `f3v3UVvxO`,
                            children: v(W, {
                              height: `100%`,
                              id: `QF1u9cyLN`,
                              layoutId: `QF1u9cyLN`,
                              style: { height: `100%` },
                              variant: Xt(`Pvr55WFL0`),
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
          `.framer-928lb.framer-1e5hprl, .framer-928lb .framer-1e5hprl { display: block; }`,
          `.framer-928lb.framer-15x4r9x { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1312px; }`,
          `.framer-928lb .framer-15pk4m9 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: 72px; justify-content: space-between; max-width: 1312px; overflow: visible; padding: 0px 16px 0px 16px; position: relative; width: 1px; }`,
          `.framer-928lb .framer-1y6spzn, .framer-928lb .framer-wv8mro { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-928lb .framer-1vwdca6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-928lb .framer-l7ka9z { flex: none; height: 66px; position: relative; width: 47px; }`,
          `.framer-928lb .framer-1gzxnu1 { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }`,
          `.framer-928lb .framer-1g789a6 { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 24px; }`,
          `.framer-928lb .framer-xb5mz0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-928lb .framer-bskfiw, .framer-928lb .framer-16dx35a, .framer-928lb .framer-vwc1vr, .framer-928lb .framer-yyw1xu { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-928lb .framer-1ofgpp8-container { flex: none; height: 48px; position: relative; width: auto; }`,
          `.framer-928lb.framer-v-70j6d9.framer-15x4r9x { width: 810px; }`,
          `.framer-928lb.framer-v-70j6d9 .framer-xb5mz0 { gap: 16px; }`,
          `.framer-928lb.framer-v-1mzn7wl.framer-15x4r9x { width: 350px; }`,
          `.framer-928lb.framer-v-1mzn7wl .framer-1y6spzn { flex: 1 0 0px; gap: unset; justify-content: space-between; width: 1px; }`,
          `.framer-928lb.framer-v-1mzn7wl .framer-wv8mro, .framer-928lb.framer-v-1vx690j .framer-1vwdca6, .framer-928lb.framer-v-1vx690j .framer-wv8mro { cursor: pointer; }`,
          `.framer-928lb.framer-v-1vx690j.framer-15x4r9x { cursor: pointer; width: 350px; }`,
          `.framer-928lb.framer-v-1vx690j .framer-15pk4m9 { flex-direction: column; gap: 36px; height: min-content; justify-content: center; padding: 24px 16px 24px 16px; }`,
          `.framer-928lb.framer-v-1vx690j .framer-1y6spzn { gap: unset; justify-content: space-between; width: 100%; }`,
          `.framer-928lb.framer-v-1vx690j .framer-xb5mz0 { cursor: pointer; flex-direction: column; width: 100%; }`,
          `.framer-928lb.framer-v-1vx690j .framer-bskfiw, .framer-928lb.framer-v-1vx690j .framer-16dx35a, .framer-928lb.framer-v-1vx690j .framer-vwc1vr, .framer-928lb.framer-v-1vx690j .framer-yyw1xu { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-928lb.framer-v-1vx690j .framer-1ofgpp8-container { width: 100%; }`,
          `.framer-928lb.framer-v-1hvvsqq.framer-15x4r9x { width: 900px; }`,
          ...Xe,
          ...Ue,
          ...jt,
          `.framer-928lb[data-border="true"]::after, .framer-928lb [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-928lb`
      )),
      (K.displayName = `Navbar`),
      (K.defaultProps = { height: 72, width: 1312 }),
      H(K, {
        variant: {
          options: [`yvUvWxvM7`, `TAiXNo5qT`, `D8L_mdfKT`, `bpKt9DW2q`, `OQseHBxLf`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`, `Variant 4`, `Variant 5`],
          title: `Variant`,
          type: z.Enum,
        },
      }),
      O(
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
          ...Gt,
          ...M(Qe),
          ...M(We),
          ...M(At),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (K.loader = { load: (e, t) => de([() => ie(W, {}, t)], t) }));
  }),
  rn,
  an,
  on,
  sn = e(() => {
    (P(),
      Ee.loadFonts([`GF;Bricolage Grotesque-500`, `GF;Bricolage Grotesque-700`]),
      (rn = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Bricolage Grotesque`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Bricolage Grotesque`,
              url: `https://fonts.gstatic.com/s/bricolagegrotesque/v9/3y9U6as8bTXq_nANBjzKo3IeZx8z6up5BeSl5jBNz_19PpbpMXuECpwUxJBOm_OJWiaaD30YfKfjZZoLvSniyMgvs-wJDtw.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Bricolage Grotesque`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Bricolage Grotesque`,
              url: `https://fonts.gstatic.com/s/bricolagegrotesque/v9/3y9U6as8bTXq_nANBjzKo3IeZx8z6up5BeSl5jBNz_19PpbpMXuECpwUxJBOm_OJWiaaD30YfKfjZZoLvfzlyMgvs-wJDtw.woff2`,
              weight: `700`,
            },
          ],
        },
      ]),
      (an = [
        `.framer-zPWiw .framer-styles-preset-1xckaiz:not(.rich-text-wrapper), .framer-zPWiw .framer-styles-preset-1xckaiz.rich-text-wrapper p { --framer-font-family: "Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif; --framer-font-family-bold: "Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.04em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-9d22cc14-9428-4f32-a631-82e7e5b3c5ff, rgba(255, 255, 255, 0.8)); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (on = `framer-zPWiw`));
  }),
  cn,
  ln,
  un,
  dn = e(() => {
    (P(),
      Ee.loadFonts([]),
      (cn = [{ explicitInter: !0, fonts: [] }]),
      (ln = [
        `.framer-nutX8 .framer-styles-preset-irucd3:not(.rich-text-wrapper), .framer-nutX8 .framer-styles-preset-irucd3.rich-text-wrapper a { --framer-link-hover-text-color: var(--token-857887c0-9486-4a16-b7a3-5457d6a4efbc, #ffffff); --framer-link-text-color: var(--token-e6be3043-e1a9-4dbf-8f7b-1ce31d52b0bb, rgba(255, 255, 255, 0.6)); }`,
      ]),
      (un = `framer-nutX8`));
  });
function q(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  vn,
  yn,
  bn,
  J,
  xn,
  Sn,
  Cn,
  wn,
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
  Y,
  Rn = e(() => {
    (b(),
      P(),
      D(),
      c(),
      He(),
      st(),
      Je(),
      sn(),
      Nt(),
      ut(),
      qe(),
      dn(),
      ot(),
      (fn = ze(he(U))),
      (pn = j(lt)),
      (mn = ze(he(ce))),
      (hn = ze(he(T.div))),
      (gn = [`gfTUaeKlN`, `KDCvDvb2x`, `J_8LE4z7n`, `jMQkBFVE4`]),
      (_n = `framer-9Ch0P`),
      (vn = {
        gfTUaeKlN: `framer-v-64gfxq`,
        J_8LE4z7n: `framer-v-wlqxw2`,
        jMQkBFVE4: `framer-v-9yxdie`,
        KDCvDvb2x: `framer-v-n4i2m0`,
      }),
      (yn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (bn = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: yn,
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
      (xn = {
        filter: `blur(10px)`,
        opacity: 0.001,
        rotate: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 10,
      }),
      (Sn = {
        effect: xn,
        repeat: !1,
        startDelay: 0,
        threshold: 0.5,
        tokenization: `word`,
        transition: { bounce: 0, delay: 0.05, duration: 1.4, type: `spring` },
        trigger: `onInView`,
        type: `appear`,
      }),
      (Cn = {
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
      (wn = {
        effect: xn,
        repeat: !1,
        startDelay: 0.2,
        threshold: 0,
        tokenization: `word`,
        transition: { damping: 100, delay: 0.05, mass: 1, stiffness: 400, type: `spring` },
        trigger: `onInView`,
        type: `appear`,
      }),
      (Tn = {
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
      (En = {
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
      (Dn = {
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
      (On = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (kn = {
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
      (An = (e, t) => `translateY(-50%) ${t}`),
      (jn = {
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
      (Mn = (e, t) => `translateX(-50%) ${t}`),
      (Nn = ({ value: e, children: t }) => {
        let n = h(E),
          r = e ?? n.transition,
          i = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return v(E.Provider, { value: i, children: t });
      }),
      (Pn = { Desktop: `gfTUaeKlN`, Leptop: `KDCvDvb2x`, Phone: `jMQkBFVE4`, Tablet: `J_8LE4z7n` }),
      (Fn = T.create(r)),
      (In = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Pn[r.variant] ?? r.variant ?? `gfTUaeKlN`,
      })),
      (Ln = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Y = L(
        y(function (e, t) {
          let n = C(null),
            i = t ?? n,
            a = ne(),
            { activeLocale: o, setLocale: s } = B(),
            c = Ae(),
            { style: l, className: u, layoutId: d, variant: f, ...p } = In(e),
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
            } = Oe({
              cycleOrder: gn,
              defaultVariant: `gfTUaeKlN`,
              ref: i,
              variant: f,
              variantClassNames: vn,
            }),
            w = Ln(e, S),
            E = k(_n, $e, pt, on, Ge, Ke, ct, Mt, un),
            { activeVariantCallback: D, delay: ie } = Ie(m),
            O = D(async (...e) => {
              x(`gfTUaeKlN`);
            });
          return v(re, {
            id: d ?? a,
            children: v(Fn, {
              animate: S,
              initial: !1,
              children: v(Nn, {
                value: yn,
                children: v(R, {
                  ...p,
                  ..._,
                  as: `footer`,
                  background: {
                    alt: `Image`,
                    fit: `fill`,
                    intrinsicHeight: 4722,
                    intrinsicWidth: 4320,
                    loading: N(c?.y || 0),
                    pixelHeight: 4722,
                    pixelWidth: 4320,
                    sizes: c?.width || `100vw`,
                    src: `../../assets/images/xLLObKPmdqqcuWcYJSGc1cAvQuE-731d8e.png`,
                    srcSet: `../../assets/images/xLLObKPmdqqcuWcYJSGc1cAvQuE-d4937e.png 936w,../../assets/images/xLLObKPmdqqcuWcYJSGc1cAvQuE.png 1873w,../../assets/images/xLLObKPmdqqcuWcYJSGc1cAvQuE-ac61a8.png 3747w,../../assets/images/xLLObKPmdqqcuWcYJSGc1cAvQuE-731d8e.png 4320w`,
                  },
                  className: k(E, `framer-64gfxq`, u, h),
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
                      v(R, {
                        as: `section`,
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 1984,
                          intrinsicWidth: 5248,
                          loading: N(
                            (c?.y || 0) +
                              0 +
                              (((c?.height || 1109) - 0 - 1036.6) / 2 + 0 + 0) +
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
                                loading: N(
                                  (c?.y || 0) +
                                    0 +
                                    (((c?.height || 200) - 0 - 1056.6) / 2 + 0 + 0) +
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
                                loading: N(
                                  (c?.y || 0) +
                                    0 +
                                    (((c?.height || 200) - 0 - 1001.8) / 2 + 0 + 0) +
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
                                loading: N(
                                  (c?.y || 0) +
                                    0 +
                                    (((c?.height || 1069) - 0 - 996.6) / 2 + 0 + 0) +
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
                                v(fn, {
                                  __fromCanvasComponent: !0,
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                  animate: bn,
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
                                  effect: Sn,
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
                                v(fn, {
                                  __fromCanvasComponent: !0,
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                  animate: Cn,
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
                                  effect: wn,
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
                            v(T.div, {
                              className: `framer-1tiaijh`,
                              "data-framer-name": `Button Group`,
                              layoutDependency: w,
                              layoutId: `FhC6HKv0R`,
                              children: v(hn, {
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                                animate: Tn,
                                className: `framer-1k6ocot`,
                                "data-framer-appear-id": `1k6ocot`,
                                "data-framer-name": `Secondary Action Buttons`,
                                initial: En,
                                layoutDependency: w,
                                layoutId: `elWrGombC`,
                                optimized: !0,
                                children: v(T.div, {
                                  className: `framer-1p6y718`,
                                  "data-framer-name": `Main Action Buttons`,
                                  layoutDependency: w,
                                  layoutId: `W306K9Pcn`,
                                  children: v(V, {
                                    height: 48,
                                    width: `184px`,
                                    y:
                                      (c?.y || 0) +
                                      0 +
                                      (((c?.height || 1109) - 0 - 1036.6) / 2 + 0 + 0) +
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
                                            (((c?.height || 200) - 0 - 1056.6) / 2 + 0 + 0) +
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
                                            (((c?.height || 200) - 0 - 1001.8) / 2 + 0 + 0) +
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
                                            (((c?.height || 1069) - 0 - 996.6) / 2 + 0 + 0) +
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
                                    children: v(mn, {
                                      __perspectiveFX: !1,
                                      __smartComponentFX: !0,
                                      __targetOpacity: 1,
                                      animate: Dn,
                                      className: `framer-1s53hrh-container`,
                                      "data-framer-appear-id": `1s53hrh`,
                                      initial: J,
                                      layoutDependency: w,
                                      layoutId: `zGUUFwdPp-container`,
                                      nodeId: `zGUUFwdPp`,
                                      optimized: !0,
                                      rendersWithMotion: !0,
                                      scopeId: `fyf0Iw0RO`,
                                      children: v(lt, {
                                        height: `100%`,
                                        id: `zGUUFwdPp`,
                                        layoutId: `zGUUFwdPp`,
                                        o_X2HzHKv: `Start Growing Today`,
                                        style: { height: `100%`, width: `100%` },
                                        variant: On(`vgllaz4mv`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
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
                          g(hn, {
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            animate: kn,
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
                                onTap: O,
                                children: [
                                  v(_e, {
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
                                  v(R, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1254,
                                      intrinsicWidth: 1254,
                                      loading: N(
                                        (c?.y || 0) +
                                          0 +
                                          (((c?.height || 1109) - 0 - 1036.6) / 2 + 0 + 0) +
                                          120 +
                                          515.2 +
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
                                            loading: N(
                                              (c?.y || 0) +
                                                0 +
                                                (((c?.height || 200) - 0 - 1056.6) / 2 + 0 + 0) +
                                                120 +
                                                515.2 +
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
                                            loading: N(
                                              (c?.y || 0) +
                                                0 +
                                                (((c?.height || 200) - 0 - 1001.8) / 2 + 0 + 0) +
                                                80 +
                                                584 +
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
                                            loading: N(
                                              (c?.y || 0) +
                                                0 +
                                                (((c?.height || 1069) - 0 - 996.6) / 2 + 0 + 0) +
                                                120 +
                                                515.2 +
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
                                      transformTemplate: An,
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
                                                  children: v(I, {
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
                                                        children: v(I, {
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
                                                  children: v(I, {
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
                                                        children: v(I, {
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
                                                  children: v(I, {
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
                                                        children: v(I, {
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
                                                  children: v(I, {
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
                                                        children: v(I, {
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
                                    children: v(T.div, {
                                      className: `framer-17rfvfk`,
                                      "data-framer-name": `Menu`,
                                      layoutDependency: w,
                                      layoutId: `NdGodNSQ0`,
                                      children: v(T.div, {
                                        className: `framer-vpzfas`,
                                        "data-framer-name": `Socials`,
                                        layoutDependency: w,
                                        layoutId: `RdGyWoptZ`,
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          g(hn, {
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            animate: jn,
                            className: `framer-m8mpkj`,
                            "data-framer-appear-id": `m8mpkj`,
                            "data-framer-name": `Links & Line`,
                            initial: J,
                            layoutDependency: w,
                            layoutId: `CkrNpjINg`,
                            optimized: !0,
                            children: [
                              v(_e, {
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
                                  v(T.div, {
                                    className: `framer-lzehr9`,
                                    "data-framer-name": `Created`,
                                    layoutDependency: w,
                                    layoutId: `uKXZfLDzD`,
                                    children: v(U, {
                                      __fromCanvasComponent: !0,
                                      children: v(r, {
                                        children: v(T.p, {
                                          className: `framer-styles-preset-1ei6ekx`,
                                          "data-styles-preset": `bHwADsIpE`,
                                          dir: `auto`,
                                          style: { "--framer-text-alignment": `start` },
                                          children: v(I, {
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
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      v(R, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 733,
                          intrinsicWidth: 2145,
                          loading: N(
                            (c?.y || 0) +
                              0 +
                              (((c?.height || 1109) - 0 - 1036.6) / 2 + 0 + 0) +
                              1036.6 -
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
                        transformTemplate: Mn,
                        ...q(
                          {
                            J_8LE4z7n: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 733,
                                intrinsicWidth: 2145,
                                loading: N(
                                  (c?.y || 0) +
                                    0 +
                                    (((c?.height || 200) - 0 - 1056.6) / 2 + 0 + 0) +
                                    1056.6 -
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
                                loading: N(
                                  (c?.y || 0) +
                                    0 +
                                    (((c?.height || 200) - 0 - 1001.8) / 2 + 0 + 0) +
                                    1001.8 -
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
                                loading: N(
                                  (c?.y || 0) +
                                    0 +
                                    (((c?.height || 1069) - 0 - 996.6) / 2 + 0 + 0) +
                                    996.6 -
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
          `.framer-9Ch0P.framer-orx6w3, .framer-9Ch0P .framer-orx6w3 { display: block; }`,
          `.framer-9Ch0P.framer-64gfxq { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1440px; will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-9Ch0P .framer-1fnwou8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 120px 64px 174px 64px; position: relative; width: 100%; }`,
          `.framer-9Ch0P .framer-1wm93om { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1312px; overflow: var(--overflow-clip-fallback, clip); padding: 44px 0px 44px 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-9Ch0P .framer-ankq44 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-9Ch0P .framer-fppg0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 720px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-9Ch0P .framer-1v95d0w, .framer-9Ch0P .framer-1apb901 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-9Ch0P .framer-1tiaijh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-9Ch0P .framer-1k6ocot { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-9Ch0P .framer-1p6y718 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-9Ch0P .framer-1s53hrh-container { flex: none; height: 48px; position: relative; width: 184px; }`,
          `.framer-9Ch0P .framer-15na5d { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; max-width: 1312px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; z-index: 2; }`,
          `.framer-9Ch0P .framer-u8aro7 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 280px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-9Ch0P .framer-1bf8ucs { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-9Ch0P .framer-170pnmp { flex: none; height: 24px; position: relative; width: 24px; }`,
          `.framer-9Ch0P .framer-1ur5c1g { flex: none; height: 90px; position: relative; width: 63px; }`,
          `.framer-9Ch0P .framer-gjc0ve, .framer-9Ch0P .framer-1fzso20, .framer-9Ch0P .framer-13seetu, .framer-9Ch0P .framer-1aqwgss, .framer-9Ch0P .framer-obzc9u, .framer-9Ch0P .framer-12vhhn7, .framer-9Ch0P .framer-143lhe3, .framer-9Ch0P .framer-586p44 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-9Ch0P .framer-guu0cx { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 99px; height: min-content; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-9Ch0P .framer-cw2jhx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 179px; min-width: 748px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-9Ch0P .framer-1pxnqot { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; right: 0px; top: 50%; width: min-content; z-index: 1; }`,
          `.framer-9Ch0P .framer-108dfri { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-9Ch0P .framer-119iuge { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-9Ch0P .framer-17rfvfk { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-9Ch0P .framer-vpzfas { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 142px; overflow: visible; padding: 0px; position: relative; width: 88px; }`,
          `.framer-9Ch0P .framer-m8mpkj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; max-width: 1312px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-9Ch0P .framer-1agzuj1 { flex: none; height: 3px; position: relative; width: 1314px; }`,
          `.framer-9Ch0P .framer-jk270x { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-9Ch0P .framer-lzehr9 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-9Ch0P .framer-1arx4q0 { bottom: 0px; flex: none; height: auto; left: 50%; overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 1440px; will-change: var(--framer-will-change-filter-override, filter); z-index: 0; }`,
          `.framer-9Ch0P.framer-v-n4i2m0.framer-64gfxq { width: 1080px; }`,
          `.framer-9Ch0P.framer-v-n4i2m0 .framer-15na5d, .framer-9Ch0P.framer-v-wlqxw2 .framer-15na5d, .framer-9Ch0P.framer-v-9yxdie .framer-15na5d { gap: 40px; }`,
          `.framer-9Ch0P.framer-v-n4i2m0 .framer-1arx4q0, .framer-9Ch0P.framer-v-9yxdie .framer-1arx4q0 { left: 0px; right: 0px; width: unset; }`,
          `.framer-9Ch0P.framer-v-wlqxw2.framer-64gfxq { width: 810px; }`,
          `.framer-9Ch0P.framer-v-wlqxw2 .framer-1fnwou8 { padding: 120px 40px 174px 40px; }`,
          `.framer-9Ch0P.framer-v-wlqxw2 .framer-u8aro7 { flex-direction: column; gap: 60px; }`,
          `.framer-9Ch0P.framer-v-wlqxw2 .framer-guu0cx, .framer-9Ch0P.framer-v-9yxdie .framer-guu0cx { flex: none; gap: unset; justify-content: space-between; width: 100%; }`,
          `.framer-9Ch0P.framer-v-wlqxw2 .framer-1arx4q0 { height: 270px; left: 0px; right: 0px; width: unset; }`,
          `.framer-9Ch0P.framer-v-9yxdie.framer-64gfxq { width: 390px; }`,
          `.framer-9Ch0P.framer-v-9yxdie .framer-1fnwou8 { gap: 60px; padding: 80px 20px 80px 20px; }`,
          `.framer-9Ch0P.framer-v-9yxdie .framer-ankq44 { padding: 40px 16px 40px 16px; }`,
          `.framer-9Ch0P.framer-v-9yxdie .framer-1k6ocot { flex-direction: column; width: 100%; }`,
          `.framer-9Ch0P.framer-v-9yxdie .framer-1p6y718 { width: 100%; }`,
          `.framer-9Ch0P.framer-v-9yxdie .framer-1s53hrh-container { flex: 1 0 0px; width: 1px; }`,
          `.framer-9Ch0P.framer-v-9yxdie .framer-u8aro7 { flex-direction: column; gap: 40px; }`,
          `.framer-9Ch0P.framer-v-9yxdie .framer-1pxnqot { gap: 14px; }`,
          `.framer-9Ch0P.framer-v-9yxdie .framer-108dfri { width: 62px; }`,
          `.framer-9Ch0P.framer-v-9yxdie .framer-119iuge { width: 80px; }`,
          `.framer-9Ch0P.framer-v-9yxdie .framer-17rfvfk { gap: 14px; width: 100%; }`,
          `.framer-9Ch0P.framer-v-9yxdie .framer-vpzfas { min-height: 120px; width: 100%; }`,
          `.framer-9Ch0P.framer-v-9yxdie .framer-jk270x { flex-direction: column; gap: 8px; justify-content: center; }`,
          `.framer-9Ch0P.framer-v-9yxdie .framer-lzehr9 { align-content: flex-start; align-items: flex-start; }`,
          ...Ye,
          ...dt,
          ...an,
          ...Ue,
          ...Xe,
          ...at,
          ...jt,
          ...ln,
          `.framer-9Ch0P[data-border="true"]::after, .framer-9Ch0P [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-9Ch0P`
      )),
      (Y.displayName = `CTA & Footer`),
      (Y.defaultProps = { height: 1109, width: 1440 }),
      H(Y, {
        variant: {
          options: [`gfTUaeKlN`, `KDCvDvb2x`, `J_8LE4z7n`, `jMQkBFVE4`],
          optionTitles: [`Desktop`, `Leptop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: z.Enum,
        },
      }),
      O(
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
          ...pn,
          ...M(Ze),
          ...M(ft),
          ...M(rn),
          ...M(We),
          ...M(Qe),
          ...M(it),
          ...M(At),
          ...M(cn),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Y.loader = { load: (e, t) => de([() => ie(lt, {}, t)], t) }));
  }),
  zn,
  Bn,
  Vn,
  Hn,
  Un,
  Wn,
  Gn,
  X,
  Kn,
  qn,
  Jn,
  Yn,
  Xn,
  Zn,
  Qn,
  $n,
  er,
  tr,
  Z,
  nr = e(() => {
    (b(),
      P(),
      D(),
      c(),
      nn(),
      Rn(),
      (zn = j(K)),
      (Bn = Be(K)),
      (Vn = j(Y)),
      (Hn = {
        cHLlG1rP6: `(min-width: 1440px)`,
        CXOZWrrab: `(min-width: 810px) and (max-width: 1079.98px)`,
        IJcNTV3vS: `(min-width: 1080px) and (max-width: 1439.98px)`,
        rykfGkJXq: `(max-width: 809.98px)`,
      }),
      (Un = `framer-3rtY3`),
      (Wn = {
        cHLlG1rP6: `framer-v-1igj42r`,
        CXOZWrrab: `framer-v-nkge7m`,
        IJcNTV3vS: `framer-v-yk2uzb`,
        rykfGkJXq: `framer-v-77g1ak`,
      }),
      (Gn = (e, t) => `translateX(-50%) ${t}`),
      (X = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Kn = {
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
      (qn = Object.keys(Kn)),
      (Jn = {
        CXOZWrrab: `.framer-nkge7m-override`,
        IJcNTV3vS: `.framer-yk2uzb-override`,
        rykfGkJXq: `.framer-77g1ak-override`,
      }),
      (Yn = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-3rtY3.framer-1cjnmsv, .framer-3rtY3 .framer-1cjnmsv { display: block; }`,
        `.framer-3rtY3.framer-1igj42r { align-content: center; align-items: center; background-color: var(--token-c5c9e562-6208-494c-a46c-1fb5738d89f6, #090401); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-3rtY3 .framer-1smb2ke-container { flex: none; height: auto; left: 50%; order: -1000; position: var(--framer-canvas-fixed-position, fixed); top: 32px; width: auto; z-index: 10; }`,
        `.framer-3rtY3 .framer-1bm7in2 { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }`,
        `.framer-3rtY3 .framer-1asgu94-container { flex: none; height: auto; order: 1002; position: relative; width: 100%; }`,
        `[data-layout-template="true"] > #overlay { margin-bottom: -0px; }`,
      ]),
      (Xn = {
        cHLlG1rP6: `(min-width: 1440px)`,
        CXOZWrrab: `(min-width: 810px) and (max-width: 1079.98px)`,
        IJcNTV3vS: `(min-width: 1080px) and (max-width: 1439.98px)`,
        rykfGkJXq: `(max-width: 809.98px)`,
      }),
      (Zn = { Desktop: `cHLlG1rP6`, Leptop: `IJcNTV3vS`, Phone: `rykfGkJXq`, Tablet: `CXOZWrrab` }),
      (Qn = ({ value: e }) =>
        je()
          ? null
          : v(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
      ($n = ({ height: e, id: t, scrollSection: n, width: r, ...i }) => ({
        ...i,
        kTbECFgDY: n ?? i.kTbECFgDY,
        variant: Zn[i.variant] ?? i.variant ?? `cHLlG1rP6`,
      })),
      (er = y(function (e, t) {
        let n = C(null),
          r = t ?? n,
          i = ne(),
          { activeLocale: a, setLocale: o } = B(),
          {
            style: s,
            className: c,
            layoutId: l,
            variant: u,
            kTbECFgDY: d,
            children: f,
            ...p
          } = $n(e),
          [m, h] = ge(u, Hn, !1),
          ee = k(Un);
        return (
          Te({}),
          v(Fe.Provider, {
            value: {
              activeVariantId: m,
              humanReadableVariantMap: Zn,
              isLayoutTemplate: !0,
              primaryVariantId: `cHLlG1rP6`,
              variantClassNames: Wn,
            },
            children: g(re, {
              id: l ?? i,
              children: [
                v(Qn, {
                  value: `:root body { background: var(--token-c5c9e562-6208-494c-a46c-1fb5738d89f6, rgb(9, 4, 1)); }`,
                }),
                g(T.div, {
                  ...p,
                  className: k(ee, `framer-1igj42r`, c),
                  "data-layout-template": !0,
                  ref: r,
                  style: { ...s },
                  children: [
                    v(Ce, {
                      breakpoint: m,
                      overrides: {
                        CXOZWrrab: { width: `calc(100vw - 80px)`, y: 24 },
                        IJcNTV3vS: { width: `calc(100vw - 60px)` },
                        rykfGkJXq: { width: `calc(100vw - 40px)`, y: 20 },
                      },
                      children: v(V, {
                        height: 72,
                        y: 32,
                        children: v(Ce, {
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
                          children: v(ke, {
                            className: `framer-1smb2ke-container`,
                            "data-framer-layout-hint-center-x": !0,
                            layoutScroll: !0,
                            nodeId: `YFTyuz8O6`,
                            rendersWithMotion: !0,
                            scopeId: `A3YPTi5i9`,
                            transformTemplate: Gn,
                            children: v(Ce, {
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
                              children: v(Bn, {
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
                    v(V, {
                      height: 1203,
                      width: `100vw`,
                      y: 1e3,
                      children: v(ke, {
                        className: `framer-1asgu94-container`,
                        nodeId: `CSknB6Zoq`,
                        scopeId: `A3YPTi5i9`,
                        children: v(Ce, {
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
      (tr = (e) =>
        e === me.canvas || e === me.export
          ? [
              ...Yn,
              ...qn.flatMap((e) => {
                let t = Jn[e];
                return Kn[e].map((e) => `${t} {${e}}`);
              }),
            ]
          : [...Yn, ...qn.map((e) => `@media ${Xn[e]} { ${Kn[e].join(` `)} }`)]),
      (Z = L(er, tr, `framer-3rtY3`)),
      (Z.displayName = `Navbar & Footer & CTA`),
      (Z.defaultProps = { height: 1559, width: 1440 }),
      H(Z, { kTbECFgDY: { title: `Scroll Section`, type: z.ScrollSectionRef } }),
      O(Z, [{ explicitInter: !0, fonts: [] }, ...zn, ...Vn], { supportsExplicitInterCodegen: !0 }),
      (Z.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([ie(K, {}, t), ie(Y, {}, t)])),
      }));
  });
function rr({ webPageId: e, children: t, style: n, ...r }) {
  let i = { kTbECFgDY: { href: { hash: `:xdW_1aw8E`, webPageId: `augiA20Il` }, refKey: !0 } },
    a = { ...i, kTbECFgDY: void 0 },
    o = Ne(),
    s = { augiA20Il: i, dTSdPGpXg: a, OfnN1JWww: a, pnrf0LVZ7: a }[e] ?? {};
  switch (e) {
    case `augiA20Il`:
    case `dTSdPGpXg`:
    case `pnrf0LVZ7`:
    case `OfnN1JWww`:
      return f(Re, { links: [s.kTbECFgDY] }, (e) =>
        f(Z, { ...s, key: `NavbarFooterCTA`, kTbECFgDY: o(e[0]), style: n }, t(!0))
      );
    default:
      return t(!1);
  }
}
function ir(e) {
  switch (e) {
    case `augiA20Il`:
    case `dTSdPGpXg`:
    case `pnrf0LVZ7`:
    case `OfnN1JWww`:
      return [
        { hash: `77g1ak`, mediaQuery: `(max-width: 809.98px)` },
        { hash: `nkge7m`, mediaQuery: `(min-width: 810px) and (max-width: 1079.98px)` },
        { hash: `yk2uzb`, mediaQuery: `(min-width: 1080px) and (max-width: 1439.98px)` },
        { hash: `1igj42r`, mediaQuery: `(min-width: 1440px)` },
      ];
    default:
      return;
  }
}
async function ar({
  routeId: e,
  pathVariables: i,
  canonicalPathVariables: a,
  localeId: o,
  collectionItemId: s,
  contentLocaleId: c,
  shouldResolveInitialRouteContentState: l = !1,
}) {
  let u = Q[e].page.preload();
  (se({
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
    pe(dr));
  let p = f(Me, {
    children: f(ve, {
      children: f(De, {
        isWebsite: !0,
        environment: `site`,
        routeId: e,
        pathVariables: i,
        canonicalPathVariables: a,
        routes: Q,
        collectionUtils: lr,
        serverDatabaseClient: ur,
        framerSiteId: dr,
        notFoundPage: F(() => import("./4Ogtvjv3Gxdfb4yIdjw7JSVsdReyDTN0gP1_o9hIdJc.CF6k1loO.mjs")),
        isReducedMotion: void 0,
        localeId: o,
        locales: cr,
        preserveQueryParams: void 0,
        siteCanonicalURL: `https://corx.club`,
        EditorBar:
          w === void 0
            ? void 0
            : (() => {
                if (fr) {
                  console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
                  return;
                }
                return F(async () => {
                  w.__framer_editorBarDependencies = {
                    __version: 3,
                    framer: { useCurrentRoute: Pe, useLocaleInfo: B, useRouter: be },
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
        LayoutTemplate: rr,
        loadSnippetsModule: new ye(
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
function or() {
  $ && w.__framer_events.push(arguments);
}
async function sr(e, t) {
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
    or(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
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
        (r = ae(Q, r)));
    else {
      ae(Q, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (i = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((s ??= {}), (s[e.slice(4)] = n));
      }
      if (!r || !i) {
        let e = ue(Q, decodeURIComponent(location.pathname), !0, cr);
        ((r = e.routeId), (i = e.localeId), (s = e.pathVariables));
      }
    }
    let d = ar({
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
          t = cr.find(({ id: e }) => (i ? e === i : e === "default")).code,
          n = u?.collectionItemId ?? null;
        if (n === null && e?.collectionId && lr) {
          let r = await lr[e.collectionId]?.(),
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
              framerSiteId: dr,
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
      ? (Ve(`framer-rewrite-breakpoints`, () => {
          (fe(l), w.__framer_onRewriteBreakpoints?.(l));
        }),
        (fr ? (e) => e() : o)(() => {
          (oe(), xe(), x(t, f, { onRecoverableError: n }));
        }))
      : te(t, { onRecoverableError: n }).render(f);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var Q, cr, lr, ur, dr, $, fr;
e(() => {
  if (
    (i(),
    P(),
    c(),
    u(),
    _(),
    nr(),
    (Q = {
      augiA20Il: {
        elements: {
          JR66AqEFk: `faq`,
          qUvsuUZ1o: `Problem Section`,
          V9PsQ86y5: `services-section`,
          xdW_1aw8E: `nav`,
        },
        page: F(() => import("./ml7M2FNpb3Dlb5WVSa2cYS7taADEyrfG29568hpBkm8.Bl5_QmcZ.mjs")),
        path: `/`,
      },
      dTSdPGpXg: {
        elements: {},
        page: F(() => import("./Nu7dTGAGSsKHYNi87P05wcEB1yfEERDfY0aeMVlL77g.COoUZKU7.mjs")),
        path: `/all-work`,
      },
      pnrf0LVZ7: {
        elements: {},
        page: F(() => import("./mFza8qXwnYHabg-hJromEcY67oEdeZ5doqtwtgVtf7Q.BErJQKSn.mjs")),
        path: `/contact`,
      },
      OfnN1JWww: {
        elements: {},
        page: F(() => import("./4Ogtvjv3Gxdfb4yIdjw7JSVsdReyDTN0gP1_o9hIdJc.CF6k1loO.mjs")),
        path: `/404`,
      },
    }),
    (cr = [{ code: `en`, id: `default`, name: `English`, slug: ``, textDirection: `ltr` }]),
    (lr = {}),
    (ur = void 0),
    (dr = `beb7a8837127c961a20097533cc8cd4c7162c4a3a425ba4a33d70369210b6bdd`),
    ($ = typeof document < `u`),
    (fr = $ && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(s.userAgent)),
    $)
  ) {
    ((w.__framer_importFromPackage = (e, t) => () =>
      f(we, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
      (w.__framer_events = w.__framer_events || []),
      A());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? sr(!0, e) : sr(!1, e);
  }
})();
export { ir as getLayoutTemplateBreakpoints, ar as getPageRoot };
//# sourceMappingURL=script_main.C9VzCGUV.mjs.map
