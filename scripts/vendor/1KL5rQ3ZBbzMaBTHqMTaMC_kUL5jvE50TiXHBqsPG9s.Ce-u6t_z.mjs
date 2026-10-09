import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  F as t,
  M as n,
  T as r,
  c as i,
  j as a,
  l as o,
  o as s,
  p as c,
  s as l,
  w as u,
  x as d,
} from "./react.DSZvp07T.mjs";
import { P as f, i as p, o as m, t as h } from "./motion.CvY1ZliN.mjs";
import {
  $ as g,
  A as _,
  B as v,
  Ct as y,
  D as b,
  E as x,
  K as S,
  M as C,
  N as w,
  S as T,
  St as E,
  _ as D,
  at as O,
  bt as k,
  c as A,
  ct as j,
  dt as M,
  ft as N,
  l as P,
  m as F,
  n as I,
  r as ee,
  s as te,
  st as ne,
  t as L,
  ut as re,
  w as ie,
  x as R,
  yt as z,
  z as B,
} from "./framer.B0980QYx.mjs";
import {
  a as ae,
  c as oe,
  d as se,
  f as ce,
  l as le,
  o as ue,
  s as de,
  u as fe,
} from "./shared-lib.C80r_x6z.mjs";
import { i as pe, n as me, r as he, t as ge } from "./TsxNrEyVF.4pfduYbn.mjs";
import { i as _e, n as ve, r as ye, t as be } from "./M7pd_vThG.DKSkBo9H.mjs";
import xe, { t as Se } from "./CTMA4RP_HYaRp46I_hqYkro2u8J5mgJIHfkV7RZ1CVM.CqVbyJUi.mjs";
function Ce(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var we,
  Te,
  Ee,
  De,
  Oe,
  ke,
  Ae,
  je,
  Me,
  Ne,
  Pe,
  Fe,
  Ie,
  Le,
  V,
  Re = e(() => {
    (l(),
      S(),
      h(),
      r(),
      oe(),
      (we = E(f.div)),
      (Te = { mpFTnZST0: { hover: !0, pressed: !0 } }),
      (Ee = [`mpFTnZST0`, `GeRx8AZaq`, `HxUNvDMKt`, `KbEf8qztr`, `L43ZHzpfw`]),
      (De = `framer-8wmXv`),
      (Oe = {
        GeRx8AZaq: `framer-v-vf7eo4`,
        HxUNvDMKt: `framer-v-fcz6hj`,
        KbEf8qztr: `framer-v-4ky`,
        L43ZHzpfw: `framer-v-1md94ev`,
        mpFTnZST0: `framer-v-1yeiu4z`,
      }),
      (ke = { delay: 0, duration: 0.2, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Ae = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
      (je = {
        opacity: 1,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Me = (e, t) => `translateX(-50%) ${t}`),
      (Ne = ({ value: e, children: t }) => {
        let r = a(m),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(m.Provider, { value: o, children: t });
      }),
      (Pe = {
        Default: `mpFTnZST0`,
        Disabled: `HxUNvDMKt`,
        Error: `L43ZHzpfw`,
        Loading: `GeRx8AZaq`,
        Success: `KbEf8qztr`,
      }),
      (Fe = f.create(t)),
      (Ie = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Pe[r.variant] ?? r.variant ?? `mpFTnZST0`,
      })),
      (Le = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (V = k(
        c(function (e, n) {
          let r = d(null),
            i = n ?? r,
            a = u(),
            { activeLocale: c, setLocale: l } = M();
          O();
          let { style: m, className: h, layoutId: g, variant: v, ...y } = Ie(e),
            {
              baseVariant: b,
              classNames: x,
              clearLoadingGesture: S,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: E,
              setGestureState: D,
              setVariant: k,
              variants: A,
            } = z({
              cycleOrder: Ee,
              defaultVariant: `mpFTnZST0`,
              enabledGestures: Te,
              ref: i,
              variant: v,
              variantClassNames: Oe,
            }),
            j = Le(e, A),
            N = _(De, ae),
            P = () => b !== `GeRx8AZaq`,
            F = () => b === `GeRx8AZaq`,
            I = () => ![`GeRx8AZaq`, `KbEf8qztr`, `L43ZHzpfw`].includes(b);
          return s(p, {
            id: g ?? a,
            children: s(Fe, {
              animate: A,
              initial: !1,
              children: s(Ne, {
                value: ke,
                children: o(f.button, {
                  ...y,
                  ...C,
                  className: _(N, `framer-1yeiu4z`, h, x),
                  "data-framer-name": `Default`,
                  "data-reset": `button`,
                  layoutDependency: j,
                  layoutId: `mpFTnZST0`,
                  ref: i,
                  style: {
                    background: `linear-gradient(180deg, rgba(255, 123, 61, 0.8) 0%, rgba(242, 60, 5, 0.8) 100%)`,
                    borderBottomLeftRadius: 100,
                    borderBottomRightRadius: 100,
                    borderTopLeftRadius: 100,
                    borderTopRightRadius: 100,
                    boxShadow: `none`,
                    opacity: 1,
                    ...m,
                  },
                  variants: {
                    "mpFTnZST0-hover": {
                      boxShadow: `inset 0px -2px 2px 0px rgba(255, 255, 255, 0.5)`,
                      opacity: 1,
                    },
                    "mpFTnZST0-pressed": { boxShadow: `none`, opacity: 1 },
                    HxUNvDMKt: { opacity: 0.5 },
                    KbEf8qztr: { opacity: 1 },
                    L43ZHzpfw: {
                      background: `linear-gradient(180deg, rgba(255, 61, 113, 0.8) 0%, rgba(94, 23, 2, 0.8) 100%)`,
                      opacity: 1,
                    },
                  },
                  ...Ce(
                    {
                      "mpFTnZST0-hover": { "data-framer-name": void 0 },
                      "mpFTnZST0-pressed": { "data-framer-name": void 0 },
                      GeRx8AZaq: { "data-framer-name": `Loading` },
                      HxUNvDMKt: { "data-framer-name": `Disabled` },
                      KbEf8qztr: { "data-framer-name": `Success` },
                      L43ZHzpfw: { "data-framer-name": `Error` },
                    },
                    b,
                    w
                  ),
                  children: [
                    P() &&
                      s(R, {
                        __fromCanvasComponent: !0,
                        children: s(t, {
                          children: s(f.p, {
                            className: `framer-styles-preset-qmqrl2`,
                            "data-styles-preset": `rgevF2JsQ`,
                            dir: `auto`,
                            children: `Submit Message`,
                          }),
                        }),
                        className: `framer-7cs3gs`,
                        fonts: [`Inter`],
                        layoutDependency: j,
                        layoutId: `LLuR4qlqE`,
                        style: {
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        variants: {
                          L43ZHzpfw: {
                            "--extracted-r6o4lv": `var(--token-7ee9f6f6-83c7-4c33-b435-3b6d8424da50, rgb(255, 38, 38))`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...Ce(
                          {
                            KbEf8qztr: {
                              children: s(t, {
                                children: s(f.p, {
                                  className: `framer-styles-preset-qmqrl2`,
                                  "data-styles-preset": `rgevF2JsQ`,
                                  dir: `auto`,
                                  children: `Thank you`,
                                }),
                              }),
                            },
                            L43ZHzpfw: {
                              children: s(t, {
                                children: s(f.p, {
                                  className: `framer-styles-preset-qmqrl2`,
                                  "data-styles-preset": `rgevF2JsQ`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-7ee9f6f6-83c7-4c33-b435-3b6d8424da50, rgb(255, 38, 38)))`,
                                  },
                                  children: `Something went wrong`,
                                }),
                              }),
                            },
                          },
                          b,
                          w
                        ),
                      }),
                    F() &&
                      s(f.div, {
                        className: `framer-kvnut1`,
                        "data-framer-name": `Spinner`,
                        layoutDependency: j,
                        layoutId: `U4Tm4nMvp`,
                        style: {
                          mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                          WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                        },
                        children: s(we, {
                          __framer__loop: je,
                          __framer__loopEffectEnabled: !0,
                          __framer__loopRepeatDelay: 0,
                          __framer__loopRepeatType: `loop`,
                          __framer__loopTransition: Ae,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          className: `framer-1ken7vz`,
                          "data-framer-name": `Conic`,
                          layoutDependency: j,
                          layoutId: `UqhOL7x6d`,
                          style: {
                            background: `conic-gradient(from 180deg at 50% 50%, rgb(68, 204, 255) 0deg, rgb(68, 204, 255) 360deg)`,
                            backgroundColor: `rgb(68, 204, 255)`,
                            mask: `none`,
                            WebkitMask: `none`,
                          },
                          variants: {
                            GeRx8AZaq: {
                              background: `conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 7.208614864864882deg, rgb(255, 255, 255) 342deg)`,
                              backgroundColor: `rgba(0, 0, 0, 0)`,
                              mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                              WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                            },
                          },
                          children: s(f.div, {
                            className: `framer-1ee5bdn`,
                            "data-framer-name": `Rounding`,
                            layoutDependency: j,
                            layoutId: `BZiMBYCv1`,
                            style: {
                              backgroundColor: `rgb(255, 255, 255)`,
                              borderBottomLeftRadius: 1,
                              borderBottomRightRadius: 1,
                              borderTopLeftRadius: 1,
                              borderTopRightRadius: 1,
                            },
                            transformTemplate: Me,
                          }),
                        }),
                      }),
                    I() &&
                      o(f.div, {
                        className: `framer-4wfklw`,
                        "data-framer-name": `Arrow`,
                        layoutDependency: j,
                        layoutId: `ltQa0RGmA`,
                        children: [
                          s(T, {
                            className: `framer-i1pduz`,
                            "data-framer-name": `arrow`,
                            fill: `var(--token-e6be3043-e1a9-4dbf-8f7b-1ce31d52b0bb, rgba(255, 255, 255, 0.6)) /* {"name":"White 60%"} */`,
                            intrinsicHeight: 24,
                            intrinsicWidth: 24,
                            layoutDependency: j,
                            layoutId: `nNhwPbYem`,
                            svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5 7.5L6 18" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
<path d="M8 6.18791C8 6.18791 16.0479 5.50949 17.2692 6.73079C18.4906 7.95209 17.812 16 17.812 16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
                            withExternalLayout: !0,
                          }),
                          s(T, {
                            className: `framer-9try9v`,
                            "data-framer-name": `arrow`,
                            fill: `var(--token-e6be3043-e1a9-4dbf-8f7b-1ce31d52b0bb, rgba(255, 255, 255, 0.6)) /* {"name":"White 60%"} */`,
                            intrinsicHeight: 24,
                            intrinsicWidth: 24,
                            layoutDependency: j,
                            layoutId: `YPAUszrqv`,
                            svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5 7.5L6 18" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
<path d="M8 6.18791C8 6.18791 16.0479 5.50949 17.2692 6.73079C18.4906 7.95209 17.812 16 17.812 16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-8wmXv.framer-jfy2dt, .framer-8wmXv .framer-jfy2dt { display: block; }`,
          `.framer-8wmXv.framer-1yeiu4z { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 48px; justify-content: center; overflow: visible; padding: 0px 32px 0px 32px; position: relative; width: min-content; }`,
          `.framer-8wmXv .framer-7cs3gs { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-8wmXv .framer-kvnut1 { aspect-ratio: 1 / 1; flex: none; gap: 10px; height: var(--framer-aspect-ratio-supported, 20px); overflow: hidden; position: relative; width: 20px; }`,
          `.framer-8wmXv .framer-1ken7vz { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }`,
          `.framer-8wmXv .framer-1ee5bdn { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 2px); left: 50%; overflow: visible; position: absolute; top: 0px; width: 2px; }`,
          `.framer-8wmXv .framer-4wfklw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-8wmXv .framer-i1pduz { flex: none; height: 24px; position: relative; width: 24px; }`,
          `.framer-8wmXv .framer-9try9v { bottom: -24px; flex: none; height: 24px; left: -24px; position: absolute; width: 24px; z-index: 1; }`,
          `.framer-8wmXv.framer-v-vf7eo4.framer-1yeiu4z, .framer-8wmXv.framer-v-fcz6hj.framer-1yeiu4z, .framer-8wmXv.framer-v-4ky.framer-1yeiu4z, .framer-8wmXv.framer-v-1md94ev.framer-1yeiu4z { cursor: unset; }`,
          `.framer-8wmXv.framer-v-vf7eo4 .framer-1ken7vz { overflow: hidden; }`,
          `.framer-8wmXv.framer-v-1yeiu4z.hover .framer-i1pduz { position: absolute; right: -24px; top: -24px; z-index: 1; }`,
          `.framer-8wmXv.framer-v-1yeiu4z.hover .framer-9try9v { bottom: unset; left: unset; position: relative; }`,
          ...ue,
        ],
        `framer-8wmXv`
      )),
      (V.displayName = `Form Button`),
      (V.defaultProps = { height: 48, width: 216 }),
      b(V, {
        variant: {
          options: [`mpFTnZST0`, `GeRx8AZaq`, `HxUNvDMKt`, `KbEf8qztr`, `L43ZHzpfw`],
          optionTitles: [`Default`, `Loading`, `Disabled`, `Success`, `Error`],
          title: `Variant`,
          type: ee.Enum,
        },
      }),
      x(
        V,
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
          ...v(de),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  H,
  ze,
  Be,
  Ve,
  He,
  U,
  Ue,
  We,
  Ge,
  Ke,
  qe,
  Je,
  W,
  Ye = e(() => {
    (l(),
      S(),
      h(),
      r(),
      (H = E(f.div)),
      (ze = `framer-HOifx`),
      (Be = { VCQxyY1j0: `framer-v-1syca5` }),
      (Ve = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (He = { delay: 0, duration: 0.6, ease: [0, 0, 1, 1], type: `tween` }),
      (U = {
        opacity: 1,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: -5,
      }),
      (Ue = { delay: 0.2, duration: 0.6, ease: [0, 0, 1, 1], type: `tween` }),
      (We = { delay: 0.4, duration: 0.6, ease: [0, 0, 1, 1], type: `tween` }),
      (Ge = ({ value: e, children: t }) => {
        let r = a(m),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(m.Provider, { value: o, children: t });
      }),
      (Ke = f.create(t)),
      (qe = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (Je = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (W = k(
        c(function (e, t) {
          let n = d(null),
            r = t ?? n,
            i = u(),
            { activeLocale: a, setLocale: c } = M();
          O();
          let { style: l, className: m, layoutId: h, variant: g, ...v } = qe(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: C,
              isLoading: w,
              setGestureState: E,
              setVariant: D,
              variants: k,
            } = z({ defaultVariant: `VCQxyY1j0`, ref: r, variant: g, variantClassNames: Be }),
            A = Je(e, k),
            j = _(ze);
          return s(p, {
            id: h ?? i,
            children: s(Ke, {
              animate: k,
              initial: !1,
              children: s(Ge, {
                value: Ve,
                children: o(f.div, {
                  ...v,
                  ...S,
                  className: _(j, `framer-1syca5`, m, b),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: A,
                  layoutId: `VCQxyY1j0`,
                  ref: r,
                  style: { ...l },
                  children: [
                    s(H, {
                      __framer__loop: U,
                      __framer__loopEffectEnabled: !0,
                      __framer__loopPauseOffscreen: !0,
                      __framer__loopRepeatDelay: 0,
                      __framer__loopRepeatType: `mirror`,
                      __framer__loopTransition: He,
                      __perspectiveFX: !1,
                      __smartComponentFX: !0,
                      __targetOpacity: 1,
                      className: `framer-1xuager`,
                      "data-framer-name": `1st oval`,
                      layoutDependency: A,
                      layoutId: `IqJnkbyc6`,
                      children: s(T, {
                        className: `framer-au427j`,
                        layoutDependency: A,
                        layoutId: `IuGnCTBHo`,
                        requiresOverflowVisible: !1,
                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7 7" overflow="visible"><path d="M 3.5 0 C 5.433 0 7 1.567 7 3.5 C 7 5.433 5.433 7 3.5 7 C 1.567 7 0 5.433 0 3.5 C 0 1.567 1.567 0 3.5 0 Z" fill="rgba(232, 81, 26, 0.8)"></path></svg>`,
                        withExternalLayout: !0,
                      }),
                    }),
                    s(H, {
                      __framer__loop: U,
                      __framer__loopEffectEnabled: !0,
                      __framer__loopPauseOffscreen: !0,
                      __framer__loopRepeatDelay: 0,
                      __framer__loopRepeatType: `mirror`,
                      __framer__loopTransition: Ue,
                      __perspectiveFX: !1,
                      __smartComponentFX: !0,
                      __targetOpacity: 1,
                      className: `framer-16etapf`,
                      "data-framer-name": `2nd oval`,
                      layoutDependency: A,
                      layoutId: `ps1H_7aAs`,
                      children: s(T, {
                        className: `framer-166uzit`,
                        layoutDependency: A,
                        layoutId: `YciaLn5sE`,
                        requiresOverflowVisible: !1,
                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7 7" overflow="visible"><path d="M 3.5 0 C 5.433 0 7 1.567 7 3.5 C 7 5.433 5.433 7 3.5 7 C 1.567 7 0 5.433 0 3.5 C 0 1.567 1.567 0 3.5 0 Z" fill="rgb(232, 81, 26)"></path></svg>`,
                        withExternalLayout: !0,
                      }),
                    }),
                    s(H, {
                      __framer__loop: U,
                      __framer__loopEffectEnabled: !0,
                      __framer__loopPauseOffscreen: !0,
                      __framer__loopRepeatDelay: 0,
                      __framer__loopRepeatType: `mirror`,
                      __framer__loopTransition: We,
                      __perspectiveFX: !1,
                      __smartComponentFX: !0,
                      __targetOpacity: 1,
                      className: `framer-7n3nm6`,
                      "data-framer-name": `3rd oval`,
                      layoutDependency: A,
                      layoutId: `DlcQ8X_NR`,
                      children: s(T, {
                        className: `framer-1iv3ed3`,
                        layoutDependency: A,
                        layoutId: `dULjSNn9F`,
                        requiresOverflowVisible: !1,
                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7 7" overflow="visible"><path d="M 3.5 0 C 5.433 0 7 1.567 7 3.5 C 7 5.433 5.433 7 3.5 7 C 1.567 7 0 5.433 0 3.5 C 0 1.567 1.567 0 3.5 0 Z" fill="rgba(232, 81, 26, 0.8)"></path></svg>`,
                        withExternalLayout: !0,
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-HOifx.framer-poxj7a, .framer-HOifx .framer-poxj7a { display: block; }`,
          `.framer-HOifx.framer-1syca5 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 1px; height: 7px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 23px; }`,
          `.framer-HOifx .framer-1xuager { bottom: -2px; flex: none; height: 7px; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 7px; z-index: 1; }`,
          `.framer-HOifx .framer-au427j, .framer-HOifx .framer-166uzit, .framer-HOifx .framer-1iv3ed3 { height: 7px; left: 0px; position: absolute; top: 0px; width: 7px; }`,
          `.framer-HOifx .framer-16etapf { bottom: -2px; flex: none; height: 7px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 6px; width: 7px; z-index: 1; }`,
          `.framer-HOifx .framer-7n3nm6 { bottom: -2px; flex: none; height: 7px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: -3px; width: 7px; z-index: 1; }`,
        ],
        `framer-HOifx`
      )),
      (W.displayName = `Ovals animation`),
      (W.defaultProps = { height: 7, width: 23 }),
      x(W, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  }),
  Xe,
  G,
  Ze,
  Qe,
  K,
  $e,
  q,
  J,
  et,
  tt,
  nt,
  rt,
  it,
  Y,
  at = e(() => {
    (l(),
      S(),
      h(),
      r(),
      Ye(),
      (Xe = B(W)),
      (G = y(E(f.div))),
      (Ze = `framer-l1IYy`),
      (Qe = { rSlmq5SOU: `framer-v-7qk9bx` }),
      (K = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      ($e = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: K,
        x: 0,
        y: 0,
      }),
      (q = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 10,
      }),
      (J = {
        effect: {
          filter: `blur(10px)`,
          opacity: 0.001,
          rotate: 0,
          scale: 1,
          skewX: 0,
          skewY: 0,
          x: 0,
          y: 10,
        },
        tokenization: `character`,
        transition: { bounce: 0, delay: 0.05, duration: 0.4, type: `spring` },
        trigger: `onMount`,
        type: `appear`,
      }),
      (et = {
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
      (tt = ({ value: e, children: t }) => {
        let r = a(m),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(m.Provider, { value: o, children: t });
      }),
      (nt = f.create(t)),
      (rt = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (it = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Y = k(
        c(function (e, n) {
          let r = d(null),
            i = n ?? r,
            a = u(),
            { activeLocale: c, setLocale: l } = M(),
            m = O(),
            { style: h, className: g, layoutId: v, variant: y, ...b } = rt(e),
            {
              baseVariant: x,
              classNames: S,
              clearLoadingGesture: C,
              gestureHandlers: w,
              gestureVariant: T,
              isLoading: E,
              setGestureState: D,
              setVariant: k,
              variants: A,
            } = z({ defaultVariant: `rSlmq5SOU`, ref: i, variant: y, variantClassNames: Qe }),
            j = it(e, A),
            N = _(Ze);
          return s(p, {
            id: v ?? a,
            children: s(nt, {
              animate: A,
              initial: !1,
              children: s(tt, {
                value: K,
                children: o(f.div, {
                  ...b,
                  ...w,
                  className: _(N, `framer-7qk9bx`, g, S),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: j,
                  layoutId: `rSlmq5SOU`,
                  ref: i,
                  style: { ...h },
                  children: [
                    o(G, {
                      __perspectiveFX: !1,
                      __smartComponentFX: !0,
                      __targetOpacity: 1,
                      animate: $e,
                      className: `framer-1uu3php`,
                      "data-border": !0,
                      "data-framer-appear-id": `1uu3php`,
                      "data-framer-name": `Let's talk box`,
                      initial: q,
                      layoutDependency: j,
                      layoutId: `jkf0XUUis`,
                      optimized: !0,
                      style: {
                        "--border-bottom-width": `0.5px`,
                        "--border-color": `var(--token-8f73c29a-f931-4e35-bf1d-abf6e1668228, rgb(235, 89, 5))`,
                        "--border-left-width": `0.5px`,
                        "--border-right-width": `0.5px`,
                        "--border-style": `solid`,
                        "--border-top-width": `0.5px`,
                        backgroundColor: `rgba(235, 89, 5, 0.21)`,
                        borderBottomRightRadius: 15,
                        borderTopLeftRadius: 19,
                        borderTopRightRadius: 15,
                      },
                      children: [
                        s(L, {
                          height: 7,
                          y: (m?.y || 0) + 0 + 14.1,
                          children: s(ie, {
                            className: `framer-136nodr-container`,
                            layoutDependency: j,
                            layoutId: `TtinxEEGJ-container`,
                            nodeId: `TtinxEEGJ`,
                            rendersWithMotion: !0,
                            scopeId: `t_ud4qK8z`,
                            children: s(W, {
                              height: `100%`,
                              id: `TtinxEEGJ`,
                              layoutId: `TtinxEEGJ`,
                              width: `100%`,
                            }),
                          }),
                        }),
                        s(R, {
                          __fromCanvasComponent: !0,
                          children: s(t, {
                            children: s(f.p, {
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-8f73c29a-f931-4e35-bf1d-abf6e1668228, rgb(235, 89, 5)))`,
                              },
                              children: `Let's talk`,
                            }),
                          }),
                          className: `framer-181nvj1`,
                          effect: J,
                          fonts: [`Inter`],
                          layoutDependency: j,
                          layoutId: `FpvUpGiQW`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-8f73c29a-f931-4e35-bf1d-abf6e1668228, rgb(235, 89, 5))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    s(G, {
                      __perspectiveFX: !1,
                      __smartComponentFX: !0,
                      __targetOpacity: 1,
                      animate: et,
                      className: `framer-32hias`,
                      "data-border": !0,
                      "data-framer-appear-id": `32hias`,
                      "data-framer-name": `Tell us your goal`,
                      initial: q,
                      layoutDependency: j,
                      layoutId: `HP55L6Wq8`,
                      optimized: !0,
                      style: {
                        "--border-bottom-width": `0.5px`,
                        "--border-color": `rgba(255, 255, 255, 0.3)`,
                        "--border-left-width": `0.5px`,
                        "--border-right-width": `0.5px`,
                        "--border-style": `solid`,
                        "--border-top-width": `0.5px`,
                        backgroundColor: `var(--token-c090c24e-f83c-4b12-b361-30f284142f04, rgba(255, 255, 255, 0.05))`,
                        borderBottomLeftRadius: 19,
                        borderTopLeftRadius: 19,
                        borderTopRightRadius: 15,
                      },
                      children: s(R, {
                        __fromCanvasComponent: !0,
                        children: s(t, {
                          children: s(f.p, {
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e6be3043-e1a9-4dbf-8f7b-1ce31d52b0bb, rgba(255, 255, 255, 0.6)))`,
                            },
                            children: `Tell us your goal`,
                          }),
                        }),
                        className: `framer-244bun`,
                        effect: J,
                        fonts: [`Inter`],
                        layoutDependency: j,
                        layoutId: `ZmELHvHe_`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-e6be3043-e1a9-4dbf-8f7b-1ce31d52b0bb, rgba(255, 255, 255, 0.6))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-l1IYy.framer-1ei6rc4, .framer-l1IYy .framer-1ei6rc4 { display: block; }`,
          `.framer-l1IYy.framer-7qk9bx { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 93px; min-width: 242px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-l1IYy .framer-1uu3php { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 8px; overflow: var(--overflow-clip-fallback, clip); padding: 8px 12px 8px 12px; position: absolute; top: 0px; width: min-content; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
          `.framer-l1IYy .framer-136nodr-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-l1IYy .framer-181nvj1, .framer-l1IYy .framer-244bun { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-l1IYy .framer-32hias { align-content: center; align-items: center; bottom: 1px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 93px; overflow: var(--overflow-clip-fallback, clip); padding: 8px 12px 8px 12px; position: absolute; width: min-content; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
          `.framer-l1IYy[data-border="true"]::after, .framer-l1IYy [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-l1IYy`
      )),
      (Y.displayName = `Let's talk animtaion`),
      (Y.defaultProps = { height: 93, width: 242 }),
      x(
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
          ...Xe,
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Y.loader = { load: (e, t) => (t.locale, Promise.allSettled([w(W, {}, t)])) }));
  }),
  ot,
  st,
  ct,
  lt = e(() => {
    (S(),
      C.loadFonts([`GF;Bricolage Grotesque-regular`, `GF;Bricolage Grotesque-700`]),
      (ot = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Bricolage Grotesque`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Bricolage Grotesque`,
              url: `https://fonts.gstatic.com/s/bricolagegrotesque/v9/3y9U6as8bTXq_nANBjzKo3IeZx8z6up5BeSl5jBNz_19PpbpMXuECpwUxJBOm_OJWiaaD30YfKfjZZoLvRviyMgvs-wJDtw.woff2`,
              weight: `400`,
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
      (st = [
        `.framer-ecdr7 .framer-styles-preset-1gjyw3:not(.rich-text-wrapper), .framer-ecdr7 .framer-styles-preset-1gjyw3.rich-text-wrapper p { --framer-font-family: "Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif; --framer-font-family-bold: "Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.04em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: rgba(255, 255, 255, 0.6); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1439px) and (min-width: 810px) { .framer-ecdr7 .framer-styles-preset-1gjyw3:not(.rich-text-wrapper), .framer-ecdr7 .framer-styles-preset-1gjyw3.rich-text-wrapper p { --framer-font-family: "Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif; --framer-font-family-bold: "Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 11px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.04em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: rgba(255, 255, 255, 0.6); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-ecdr7 .framer-styles-preset-1gjyw3:not(.rich-text-wrapper), .framer-ecdr7 .framer-styles-preset-1gjyw3.rich-text-wrapper p { --framer-font-family: "Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif; --framer-font-family-bold: "Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 9px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.04em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: rgba(255, 255, 255, 0.6); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (ct = `framer-ecdr7`));
  }),
  ut,
  dt,
  ft,
  pt = e(() => {
    (S(),
      C.loadFonts([]),
      (ut = [{ explicitInter: !0, fonts: [] }]),
      (dt = [
        `.framer-n05RR .framer-styles-preset-1ny882f:not(.rich-text-wrapper), .framer-n05RR .framer-styles-preset-1ny882f.rich-text-wrapper a { --framer-link-hover-text-color: var(--token-857887c0-9486-4a16-b7a3-5457d6a4efbc, #ffffff); --framer-link-text-color: var(--token-9d22cc14-9428-4f32-a631-82e7e5b3c5ff, rgba(255, 255, 255, 0.8)); }`,
      ]),
      (ft = `framer-n05RR`));
  }),
  mt,
  ht,
  X,
  gt,
  _t,
  vt,
  yt,
  bt,
  xt,
  Z,
  St,
  Ct,
  Q,
  $;
e(() => {
  (l(),
    S(),
    h(),
    r(),
    Re(),
    at(),
    ce(),
    lt(),
    _e(),
    pe(),
    pt(),
    Se(),
    (mt = B(Y)),
    (ht = B(V)),
    (X = {
      F12orvsth: `(min-width: 1440px)`,
      m_LrxaZcb: `(min-width: 810px) and (max-width: 1079.98px)`,
      o_DgNi899: `(min-width: 1080px) and (max-width: 1439.98px)`,
      QFU8Z9RSt: `(max-width: 809.98px)`,
    }),
    (gt = []),
    (_t = `framer-C79R9`),
    (vt = {
      F12orvsth: `framer-v-1pqqhfs`,
      m_LrxaZcb: `framer-v-epjuwv`,
      o_DgNi899: `framer-v-e0ekw3`,
      QFU8Z9RSt: `framer-v-vf6gku`,
    }),
    (yt = (e, t, n) => (e && t ? `position` : n)),
    (bt = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (xt = (e, t, n) => {
      switch (e.state) {
        case `success`:
          return t.success ?? n;
        case `pending`:
          return t.pending ?? n;
        case `error`:
          return t.error ?? n;
        case `incomplete`:
          return t.incomplete ?? n;
        default:
          return n;
      }
    }),
    (Z = { Desktop: `F12orvsth`, Leptop: `o_DgNi899`, Phone: `QFU8Z9RSt`, Tablet: `m_LrxaZcb` }),
    (St = ({ value: e }) =>
      re()
        ? null
        : s(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Ct = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Z[r.variant] ?? r.variant ?? `F12orvsth`,
    })),
    (Q = k(
      c(function (e, r) {
        let c = d(null),
          l = r ?? c,
          h = u(),
          { activeLocale: g, setLocale: v } = M(),
          y = O(),
          { style: b, className: x, layoutId: S, variant: C, ...w } = Ct(e);
        N(n(() => xe({}, g), [g]));
        let [E, k] = j(C, X, !1),
          ee = _(_t, ge, ct, be, ft, le),
          re = a(P)?.isLayoutTemplate,
          ie = !!a(m)?.transition?.layout,
          z = yt(re, ie);
        return (
          ne({}),
          s(P.Provider, {
            value: {
              activeVariantId: E,
              humanReadableVariantMap: Z,
              primaryVariantId: `F12orvsth`,
              variantClassNames: vt,
            },
            children: o(p, {
              id: S ?? h,
              children: [
                s(St, {
                  value: `html body { background: var(--token-c5c9e562-6208-494c-a46c-1fb5738d89f6, rgb(9, 4, 1)); }`,
                }),
                s(f.div, {
                  ...w,
                  className: _(ee, `framer-1pqqhfs`, x),
                  ref: l,
                  style: { ...b },
                  children: s(f.section, {
                    className: `framer-1it5grq`,
                    "data-framer-name": `Contact section`,
                    layout: z,
                    children: o(`div`, {
                      className: `framer-ce3unr`,
                      "data-framer-name": `Containar`,
                      children: [
                        o(`div`, {
                          className: `framer-iw60g0`,
                          "data-border": !0,
                          "data-framer-name": `Container`,
                          children: [
                            s(R, {
                              __fromCanvasComponent: !0,
                              children: s(t, {
                                children: s(`h4`, {
                                  className: `framer-styles-preset-nd5mma`,
                                  "data-styles-preset": `TsxNrEyVF`,
                                  dir: `auto`,
                                  style: { "--framer-text-alignment": `left` },
                                  children: `Tell us about your goals and content needs. `,
                                }),
                              }),
                              className: `framer-k7he5c`,
                              "data-framer-name": `Title Text`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            s(D, {
                              breakpoint: E,
                              overrides: {
                                m_LrxaZcb: { y: void 0 },
                                o_DgNi899: { y: (y?.y || 0) + 0 + 0 + 180 + 0 + 0 + 40 + 65.3 },
                                QFU8Z9RSt: { y: void 0 },
                              },
                              children: s(L, {
                                height: 93,
                                y: (y?.y || 0) + 0 + 0 + 196 + 0 + 0 + 40 + 65.3,
                                children: s(I, {
                                  className: `framer-1j3jse6-container`,
                                  nodeId: `YS0F4f9Cu`,
                                  scopeId: `pnrf0LVZ7`,
                                  children: s(Y, {
                                    height: `100%`,
                                    id: `YS0F4f9Cu`,
                                    layoutId: `YS0F4f9Cu`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                            o(`div`, {
                              className: `framer-dic9zn`,
                              "data-framer-name": `Container`,
                              children: [
                                o(`div`, {
                                  className: `framer-d6119x`,
                                  "data-framer-name": `Container`,
                                  children: [
                                    o(`div`, {
                                      className: `framer-1anh97c`,
                                      "data-framer-name": `Feature Item`,
                                      children: [
                                        o(`div`, {
                                          className: `framer-5ow2lk`,
                                          "data-framer-name": `Tik Mark`,
                                          children: [
                                            s(T, {
                                              className: `framer-1tewxoz`,
                                              "data-framer-name": `Circle`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" overflow="visible"><path d="M 8 0 C 12.418 0 16 3.582 16 8 C 16 12.418 12.418 16 8 16 C 3.582 16 0 12.418 0 8 C 0 3.582 3.582 0 8 0 Z" fill="var(--token-8f73c29a-f931-4e35-bf1d-abf6e1668228, rgb(235, 89, 5)) /* {&quot;name&quot;:&quot;Primary orange solid&quot;} */"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            s(T, {
                                              className: `framer-9xdon6`,
                                              "data-framer-name": `Tik Mark`,
                                              requiresOverflowVisible: !0,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.222 4.889" overflow="visible"><path d="M 0 3.333 L 1.556 4.889 L 6.222 0" fill="transparent" stroke-width="1.2" stroke="rgb(255,255,255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                        s(D, {
                                          breakpoint: E,
                                          overrides: {
                                            QFU8Z9RSt: {
                                              children: s(t, {
                                                children: s(`p`, {
                                                  className: `framer-styles-preset-1270zpf`,
                                                  "data-styles-preset": `M7pd_vThG`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-color": `var(--token-9d22cc14-9428-4f32-a631-82e7e5b3c5ff, rgba(255, 255, 255, 0.8))`,
                                                  },
                                                  children: `Get a custom content strategy`,
                                                }),
                                              }),
                                            },
                                          },
                                          children: s(R, {
                                            __fromCanvasComponent: !0,
                                            children: s(t, {
                                              children: s(`p`, {
                                                className: `framer-styles-preset-1gjyw3`,
                                                "data-styles-preset": `LtVTT4MbP`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-9d22cc14-9428-4f32-a631-82e7e5b3c5ff, rgba(255, 255, 255, 0.8))`,
                                                },
                                                children: `Get a custom content strategy`,
                                              }),
                                            }),
                                            className: `framer-qdbg0v`,
                                            "data-framer-name": `Reviews Text`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `bottom`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                    o(`div`, {
                                      className: `framer-14779k8`,
                                      "data-framer-name": `Feature Item`,
                                      children: [
                                        o(`div`, {
                                          className: `framer-1posd0t`,
                                          "data-framer-name": `Tik Mark`,
                                          children: [
                                            s(T, {
                                              className: `framer-1a5aeoi`,
                                              "data-framer-name": `Circle`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" overflow="visible"><path d="M 8 0 C 12.418 0 16 3.582 16 8 C 16 12.418 12.418 16 8 16 C 3.582 16 0 12.418 0 8 C 0 3.582 3.582 0 8 0 Z" fill="var(--token-8f73c29a-f931-4e35-bf1d-abf6e1668228, rgb(235, 89, 5)) /* {&quot;name&quot;:&quot;Primary orange solid&quot;} */"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            s(T, {
                                              className: `framer-ugs1tg`,
                                              "data-framer-name": `Tik Mark`,
                                              requiresOverflowVisible: !0,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.222 4.889" overflow="visible"><path d="M 0 3.333 L 1.556 4.889 L 6.222 0" fill="transparent" stroke-width="1.2" stroke="rgb(255,255,255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                        s(D, {
                                          breakpoint: E,
                                          overrides: {
                                            QFU8Z9RSt: {
                                              children: s(t, {
                                                children: s(`p`, {
                                                  className: `framer-styles-preset-1270zpf`,
                                                  "data-styles-preset": `M7pd_vThG`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-color": `var(--token-9d22cc14-9428-4f32-a631-82e7e5b3c5ff, rgba(255, 255, 255, 0.8))`,
                                                  },
                                                  children: `Improve retention & engagement`,
                                                }),
                                              }),
                                            },
                                          },
                                          children: s(R, {
                                            __fromCanvasComponent: !0,
                                            children: s(t, {
                                              children: s(`p`, {
                                                className: `framer-styles-preset-1gjyw3`,
                                                "data-styles-preset": `LtVTT4MbP`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-9d22cc14-9428-4f32-a631-82e7e5b3c5ff, rgba(255, 255, 255, 0.8))`,
                                                },
                                                children: `Improve retention & engagement`,
                                              }),
                                            }),
                                            className: `framer-3y2fuv`,
                                            "data-framer-name": `Reviews Text`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `bottom`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                    o(`div`, {
                                      className: `framer-80ixwh`,
                                      "data-framer-name": `Feature Item`,
                                      children: [
                                        o(`div`, {
                                          className: `framer-9i80cj`,
                                          "data-framer-name": `Tik Mark`,
                                          children: [
                                            s(T, {
                                              className: `framer-p94c5w`,
                                              "data-framer-name": `Circle`,
                                              requiresOverflowVisible: !1,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" overflow="visible"><path d="M 8 0 C 12.418 0 16 3.582 16 8 C 16 12.418 12.418 16 8 16 C 3.582 16 0 12.418 0 8 C 0 3.582 3.582 0 8 0 Z" fill="rgb(232, 80, 26)"></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                            s(T, {
                                              className: `framer-wsztte`,
                                              "data-framer-name": `Tik Mark`,
                                              requiresOverflowVisible: !0,
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6.222 4.889" overflow="visible"><path d="M 0 3.333 L 1.556 4.889 L 6.222 0" fill="transparent" stroke-width="1.2" stroke="rgb(255,255,255)" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                        s(D, {
                                          breakpoint: E,
                                          overrides: {
                                            QFU8Z9RSt: {
                                              children: s(t, {
                                                children: s(`p`, {
                                                  className: `framer-styles-preset-1270zpf`,
                                                  "data-styles-preset": `M7pd_vThG`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-color": `var(--token-9d22cc14-9428-4f32-a631-82e7e5b3c5ff, rgba(255, 255, 255, 0.8))`,
                                                  },
                                                  children: `Turn views into real business results`,
                                                }),
                                              }),
                                            },
                                          },
                                          children: s(R, {
                                            __fromCanvasComponent: !0,
                                            children: s(t, {
                                              children: s(`p`, {
                                                className: `framer-styles-preset-1gjyw3`,
                                                "data-styles-preset": `LtVTT4MbP`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-9d22cc14-9428-4f32-a631-82e7e5b3c5ff, rgba(255, 255, 255, 0.8))`,
                                                },
                                                children: `Turn views into real business results`,
                                              }),
                                            }),
                                            className: `framer-1wx2kbp`,
                                            "data-framer-name": `Reviews Text`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `bottom`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                o(`div`, {
                                  className: `framer-oiil99`,
                                  "data-framer-name": `Container`,
                                  children: [
                                    o(`div`, {
                                      className: `framer-7urazj`,
                                      "data-framer-name": `Container`,
                                      children: [
                                        s(T, {
                                          className: `framer-mb84lu`,
                                          "data-framer-name": `mail-01`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 16,
                                          intrinsicWidth: 16,
                                          svg: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.33594 4L5.94462 6.61131C7.64367 7.574 8.36154 7.574 10.0606 6.61131L14.6693 4" stroke="white" stroke-linejoin="round"/>
<path d="M1.34645 8.98371C1.39003 11.0274 1.41182 12.0492 2.16591 12.8062C2.91999 13.5632 3.96949 13.5895 6.06849 13.6422C7.36214 13.6748 8.64307 13.6748 9.93674 13.6422C12.0357 13.5895 13.0852 13.5632 13.8393 12.8062C14.5934 12.0492 14.6152 11.0274 14.6587 8.98371C14.6728 8.32658 14.6728 7.67338 14.6587 7.01625C14.6152 4.97255 14.5934 3.95071 13.8393 3.19375C13.0852 2.4368 12.0357 2.41043 9.93674 2.35769C8.64307 2.32519 7.36214 2.32519 6.06848 2.35769C3.96949 2.41042 2.91999 2.43679 2.1659 3.19375C1.41182 3.9507 1.39003 4.97255 1.34644 7.01625C1.33243 7.67338 1.33244 8.32658 1.34645 8.98371Z" stroke="white" stroke-linejoin="round"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        s(D, {
                                          breakpoint: E,
                                          overrides: {
                                            QFU8Z9RSt: {
                                              children: s(t, {
                                                children: s(`p`, {
                                                  className: `framer-styles-preset-1270zpf`,
                                                  "data-styles-preset": `M7pd_vThG`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `start`,
                                                    "--framer-text-color": `var(--token-9d22cc14-9428-4f32-a631-82e7e5b3c5ff, rgba(255, 255, 255, 0.8))`,
                                                  },
                                                  children: s(F, {
                                                    href: `mailto:business@corx.club`,
                                                    motionChild: !0,
                                                    nodeId: `cntfQUECX`,
                                                    openInNewTab: !1,
                                                    preserveParams: !1,
                                                    relValues: [],
                                                    scopeId: `pnrf0LVZ7`,
                                                    smoothScroll: !1,
                                                    children: s(f.a, {
                                                      className: `framer-styles-preset-1ny882f`,
                                                      "data-styles-preset": `VlHxh2H8V`,
                                                      children: `business@corx.club`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            },
                                          },
                                          children: s(R, {
                                            __fromCanvasComponent: !0,
                                            children: s(t, {
                                              children: s(`p`, {
                                                className: `framer-styles-preset-1gjyw3`,
                                                "data-styles-preset": `LtVTT4MbP`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--token-9d22cc14-9428-4f32-a631-82e7e5b3c5ff, rgba(255, 255, 255, 0.8))`,
                                                },
                                                children: s(F, {
                                                  href: `mailto:business@corx.club`,
                                                  motionChild: !0,
                                                  nodeId: `cntfQUECX`,
                                                  openInNewTab: !1,
                                                  preserveParams: !1,
                                                  relValues: [],
                                                  scopeId: `pnrf0LVZ7`,
                                                  smoothScroll: !1,
                                                  children: s(f.a, {
                                                    className: `framer-styles-preset-1ny882f`,
                                                    "data-styles-preset": `VlHxh2H8V`,
                                                    children: `business@corx.club`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                            className: `framer-1erk7t1`,
                                            "data-framer-name": `Reviews Text`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                    o(`div`, {
                                      className: `framer-jnfp91`,
                                      "data-framer-name": `Container`,
                                      children: [
                                        s(T, {
                                          className: `framer-1oeddml`,
                                          "data-framer-name": `smart-phone-01`,
                                          fill: `rgba(0,0,0,1)`,
                                          intrinsicHeight: 16,
                                          intrinsicWidth: 16,
                                          svg: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.9974 1.33331H6.9974C5.42605 1.33331 4.64038 1.33331 4.15222 1.82147C3.66406 2.30963 3.66406 3.0953 3.66406 4.66665V11.3333C3.66406 12.9046 3.66406 13.6903 4.15222 14.1785C4.64038 14.6666 5.42605 14.6666 6.9974 14.6666H8.9974C10.5687 14.6666 11.3544 14.6666 11.8426 14.1785C12.3307 13.6903 12.3307 12.9046 12.3307 11.3333V4.66665C12.3307 3.0953 12.3307 2.30963 11.8426 1.82147C11.3544 1.33331 10.5687 1.33331 8.9974 1.33331Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.08594 12.6667H8.0026M8.16927 12.6667C8.16927 12.7587 8.09467 12.8333 8.0026 12.8333C7.91054 12.8333 7.83594 12.7587 7.83594 12.6667C7.83594 12.5746 7.91054 12.5 8.0026 12.5C8.09467 12.5 8.16927 12.5746 8.16927 12.6667Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
                                          withExternalLayout: !0,
                                        }),
                                        s(D, {
                                          breakpoint: E,
                                          overrides: {
                                            QFU8Z9RSt: {
                                              children: s(t, {
                                                children: s(`p`, {
                                                  className: `framer-styles-preset-1270zpf`,
                                                  "data-styles-preset": `M7pd_vThG`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-color": `var(--token-9d22cc14-9428-4f32-a631-82e7e5b3c5ff, rgba(255, 255, 255, 0.8))`,
                                                  },
                                                  children: s(F, {
                                                    href: `javascript:void(0)`,
                                                    motionChild: !0,
                                                    nodeId: `W6ekw5tNE`,
                                                    openInNewTab: !0,
                                                    preserveParams: !1,
                                                    relValues: [],
                                                    scopeId: `pnrf0LVZ7`,
                                                    smoothScroll: !1,
                                                    children: s(f.a, {
                                                      className: `framer-styles-preset-1ny882f`,
                                                      "data-styles-preset": `VlHxh2H8V`,
                                                      children: `+923308973085`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            },
                                          },
                                          children: s(R, {
                                            __fromCanvasComponent: !0,
                                            children: s(t, {
                                              children: s(`p`, {
                                                className: `framer-styles-preset-1gjyw3`,
                                                "data-styles-preset": `LtVTT4MbP`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-9d22cc14-9428-4f32-a631-82e7e5b3c5ff, rgba(255, 255, 255, 0.8))`,
                                                },
                                                children: s(F, {
                                                  href: `javascript:void(0)`,
                                                  motionChild: !0,
                                                  nodeId: `W6ekw5tNE`,
                                                  openInNewTab: !0,
                                                  preserveParams: !1,
                                                  relValues: [],
                                                  scopeId: `pnrf0LVZ7`,
                                                  smoothScroll: !1,
                                                  children: s(f.a, {
                                                    className: `framer-styles-preset-1ny882f`,
                                                    "data-styles-preset": `VlHxh2H8V`,
                                                      children: `+923308973085`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                            className: `framer-ckidmy`,
                                            "data-framer-name": `Reviews Text`,
                                            fonts: [`Inter`],
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
                          ],
                        }),
                        s(`div`, {
                          className: `framer-vpldjh`,
                          "data-border": !0,
                          "data-framer-name": `Form`,
                          children: s(te, {
                            className: `framer-1yfkxg9`,
                            nodeId: `a_PvweULZ`,
                            children: (e) =>
                              o(i, {
                                children: [
                                  o(`div`, {
                                    className: `framer-1gnof38`,
                                    "data-framer-name": `Label`,
                                    children: [
                                      o(`label`, {
                                        className: `framer-1hik2ew`,
                                        children: [
                                          s(R, {
                                            __fromCanvasComponent: !0,
                                            children: s(t, {
                                              children: s(`p`, {
                                                className: `framer-styles-preset-1ei6ekx`,
                                                "data-styles-preset": `bHwADsIpE`,
                                                dir: `auto`,
                                                children: `Your Name`,
                                              }),
                                            }),
                                            className: `framer-lp5w95`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          s(A, {
                                            className: `framer-11kwjz6`,
                                            inputName: `Name`,
                                            placeholder: `Your Name`,
                                            type: `text`,
                                          }),
                                        ],
                                      }),
                                      o(`label`, {
                                        className: `framer-1rnft4g`,
                                        children: [
                                          s(R, {
                                            __fromCanvasComponent: !0,
                                            children: s(t, {
                                              children: s(`p`, {
                                                className: `framer-styles-preset-1ei6ekx`,
                                                "data-styles-preset": `bHwADsIpE`,
                                                dir: `auto`,
                                                children: `Your Work Email`,
                                              }),
                                            }),
                                            className: `framer-13qxhhq`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          s(A, {
                                            className: `framer-16pd9b9`,
                                            inputName: `Your Work Email`,
                                            placeholder: `joss@vidgenie.com`,
                                            required: !0,
                                            type: `email`,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  o(`div`, {
                                    className: `framer-wvyog9`,
                                    "data-framer-name": `Label`,
                                    children: [
                                      o(`label`, {
                                        className: `framer-owu5k4`,
                                        children: [
                                          s(R, {
                                            __fromCanvasComponent: !0,
                                            children: s(t, {
                                              children: s(`p`, {
                                                className: `framer-styles-preset-1ei6ekx`,
                                                "data-styles-preset": `bHwADsIpE`,
                                                dir: `auto`,
                                                children: `Company Name`,
                                              }),
                                            }),
                                            className: `framer-1fm9mee`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          s(A, {
                                            className: `framer-17l8z7w`,
                                            inputName: `Company Name`,
                                            placeholder: `ClipCut`,
                                            type: `text`,
                                          }),
                                        ],
                                      }),
                                      o(`label`, {
                                        className: `framer-14kaxrp`,
                                        children: [
                                          s(R, {
                                            __fromCanvasComponent: !0,
                                            children: s(t, {
                                              children: s(`p`, {
                                                className: `framer-styles-preset-1ei6ekx`,
                                                "data-styles-preset": `bHwADsIpE`,
                                                dir: `auto`,
                                                children: `Subject of Message`,
                                              }),
                                            }),
                                            className: `framer-1xvwcpg`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          s(A, {
                                            className: `framer-eq8dyr`,
                                            inputName: `Subject of Message `,
                                            placeholder: `Video Import`,
                                            required: !1,
                                            type: `text`,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  o(`label`, {
                                    className: `framer-1d4indb`,
                                    children: [
                                      s(R, {
                                        __fromCanvasComponent: !0,
                                        children: s(t, {
                                          children: s(`p`, {
                                            className: `framer-styles-preset-1ei6ekx`,
                                            "data-styles-preset": `bHwADsIpE`,
                                            dir: `auto`,
                                            children: `Message`,
                                          }),
                                        }),
                                        className: `framer-wtbwm6`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      s(A, {
                                        className: `framer-1emzg9a`,
                                        inputName: `Company Name`,
                                        placeholder: `Anything else you’d like to share with the Vidgenie team...`,
                                        type: `textarea`,
                                      }),
                                    ],
                                  }),
                                  s(L, {
                                    height: 40,
                                    children: s(I, {
                                      className: `framer-2ykani-container`,
                                      nodeId: `ida2PwYyJ`,
                                      scopeId: `pnrf0LVZ7`,
                                      children: s(V, {
                                        height: `100%`,
                                        id: `ida2PwYyJ`,
                                        layoutId: `ida2PwYyJ`,
                                        style: { height: `100%` },
                                        type: `submit`,
                                        variant: xt(
                                          e,
                                          {
                                            error: `L43ZHzpfw`,
                                            pending: `GeRx8AZaq`,
                                            success: `KbEf8qztr`,
                                          },
                                          bt(`mpFTnZST0`)
                                        ),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                s(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-C79R9.framer-tascct, .framer-C79R9 .framer-tascct { display: block; }`,
        `.framer-C79R9.framer-1pqqhfs { align-content: center; align-items: center; background-color: var(--token-c5c9e562-6208-494c-a46c-1fb5738d89f6, #090401); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1440px; }`,
        `.framer-C79R9 .framer-1it5grq { align-content: center; align-items: center; background-color: #090401; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 120px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 196px 0px 120px 0px; position: relative; width: 100%; }`,
        `.framer-C79R9 .framer-ce3unr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1312px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; z-index: 4; }`,
        `.framer-C79R9 .framer-iw60g0 { --border-bottom-width: 1px; --border-color: rgba(255, 255, 255, 0.1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background: linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.02) 100%); border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 562px; justify-content: space-between; overflow: visible; padding: 40px; position: relative; width: 533px; }`,
        `.framer-C79R9 .framer-k7he5c { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 454px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-C79R9 .framer-1j3jse6-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-C79R9 .framer-dic9zn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-C79R9 .framer-d6119x { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-C79R9 .framer-1anh97c, .framer-C79R9 .framer-14779k8, .framer-C79R9 .framer-80ixwh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-C79R9 .framer-5ow2lk, .framer-C79R9 .framer-1posd0t, .framer-C79R9 .framer-9i80cj { flex: none; height: 16px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 16px; }`,
        `.framer-C79R9 .framer-1tewxoz, .framer-C79R9 .framer-1a5aeoi, .framer-C79R9 .framer-p94c5w { height: 16px; left: 0px; position: absolute; top: 0px; width: 16px; }`,
        `.framer-C79R9 .framer-9xdon6, .framer-C79R9 .framer-ugs1tg, .framer-C79R9 .framer-wsztte { height: 5px; left: 5px; position: absolute; top: 6px; width: 6px; }`,
        `.framer-C79R9 .framer-qdbg0v, .framer-C79R9 .framer-3y2fuv, .framer-C79R9 .framer-1wx2kbp { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-C79R9 .framer-oiil99 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-C79R9 .framer-7urazj, .framer-C79R9 .framer-jnfp91 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-C79R9 .framer-mb84lu, .framer-C79R9 .framer-1oeddml { flex: none; height: 16px; position: relative; width: 16px; }`,
        `.framer-C79R9 .framer-1erk7t1, .framer-C79R9 .framer-ckidmy { --framer-paragraph-spacing: 0px; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-C79R9 .framer-vpldjh { --border-bottom-width: 1px; --border-color: rgba(255, 255, 255, 0.1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; align-self: stretch; background: linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.02) 100%); border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: center; overflow: visible; padding: 40px; position: relative; width: 1px; }`,
        `.framer-C79R9 .framer-1yfkxg9 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-C79R9 .framer-1gnof38, .framer-C79R9 .framer-wvyog9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-C79R9 .framer-1hik2ew, .framer-C79R9 .framer-1rnft4g, .framer-C79R9 .framer-owu5k4, .framer-C79R9 .framer-14kaxrp { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-C79R9 .framer-lp5w95, .framer-C79R9 .framer-13qxhhq, .framer-C79R9 .framer-1fm9mee, .framer-C79R9 .framer-1xvwcpg, .framer-C79R9 .framer-wtbwm6 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-C79R9 .framer-11kwjz6, .framer-C79R9 .framer-16pd9b9, .framer-C79R9 .framer-17l8z7w, .framer-C79R9 .framer-eq8dyr { --framer-input-background: rgba(0, 0, 0, 0.28); --framer-input-border-bottom-width: 1px; --framer-input-border-color: var(--token-2ee91d79-478c-4695-9c6b-241f9952f218, rgba(255, 255, 255, 0.1)); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 100px; --framer-input-border-radius-bottom-right: 100px; --framer-input-border-radius-top-left: 100px; --framer-input-border-radius-top-right: 100px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: var(--token-857887c0-9486-4a16-b7a3-5457d6a4efbc, #ffffff); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: var(--token-857887c0-9486-4a16-b7a3-5457d6a4efbc, #ffffff); --framer-input-font-family: "PP Neue Montreal Book"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-icon-mask-image: none; --framer-input-padding: 16px 16px 16px 24px; --framer-input-placeholder-color: var(--token-e6be3043-e1a9-4dbf-8f7b-1ce31d52b0bb, rgba(255, 255, 255, 0.6)); --framer-input-wrapper-height: auto; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-C79R9 .framer-1d4indb { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-C79R9 .framer-1emzg9a { --framer-input-background: rgba(0, 0, 0, 0.28); --framer-input-border-bottom-width: 1px; --framer-input-border-color: var(--token-2ee91d79-478c-4695-9c6b-241f9952f218, rgba(255, 255, 255, 0.1)); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 12px; --framer-input-border-radius-bottom-right: 12px; --framer-input-border-radius-top-left: 12px; --framer-input-border-radius-top-right: 12px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: var(--token-857887c0-9486-4a16-b7a3-5457d6a4efbc, #ffffff); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: var(--token-857887c0-9486-4a16-b7a3-5457d6a4efbc, #ffffff); --framer-input-font-family: "PP Neue Montreal Book"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-icon-mask-image: none; --framer-input-padding: 16px 16px 16px 24px; --framer-input-placeholder-color: var(--token-e6be3043-e1a9-4dbf-8f7b-1ce31d52b0bb, rgba(255, 255, 255, 0.6)); --framer-input-wrapper-height: auto; --framer-textarea-resize: vertical; flex: none; height: auto; min-height: 156px; position: relative; width: 100%; }`,
        `.framer-C79R9 .framer-2ykani-container { flex: none; height: 40px; position: relative; width: auto; }`,
        ...me,
        ...st,
        ...ve,
        ...dt,
        ...fe,
        `.framer-C79R9[data-border="true"]::after, .framer-C79R9 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1079.98px) { .framer-C79R9.framer-1pqqhfs { width: 810px; } .framer-C79R9 .framer-1it5grq { padding: 150px 40px 120px 40px; } .framer-C79R9 .framer-ce3unr { flex-direction: column; } .framer-C79R9 .framer-iw60g0 { width: 100%; } .framer-C79R9 .framer-vpldjh { align-self: unset; flex: none; height: min-content; width: 100%; }}`,
        `@media (max-width: 809.98px) { .framer-C79R9.framer-1pqqhfs { width: 390px; } .framer-C79R9 .framer-1it5grq { padding: 140px 20px 120px 20px; } .framer-C79R9 .framer-ce3unr { flex-direction: column; gap: 24px; } .framer-C79R9 .framer-iw60g0 { gap: 40px; height: min-content; justify-content: center; width: 100%; } .framer-C79R9 .framer-vpldjh { align-self: unset; flex: none; height: min-content; padding: 24px; width: 100%; } .framer-C79R9 .framer-1gnof38, .framer-C79R9 .framer-wvyog9 { flex-direction: column; } .framer-C79R9 .framer-1hik2ew, .framer-C79R9 .framer-1rnft4g, .framer-C79R9 .framer-owu5k4, .framer-C79R9 .framer-14kaxrp { flex: none; width: 100%; }}`,
        `@media (min-width: 1080px) and (max-width: 1439.98px) { .framer-C79R9.framer-1pqqhfs { width: 1080px; } .framer-C79R9 .framer-1it5grq { padding: 180px 30px 120px 30px; } .framer-C79R9 .framer-iw60g0 { flex: 1 0 0px; width: 1px; }}`,
      ],
      `framer-C79R9`
    )),
    (Q.displayName = `All Works`),
    (Q.defaultProps = { height: 2081, width: 1440 }),
    x(
      Q,
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
            {
              cssFamilyName: `PP Neue Montreal Book`,
              source: `custom`,
              style: `normal`,
              uiFamilyName: `PP Neue Montreal`,
              url: `../../assets/fonts/yUScEiZtXZCqdRimefTfBx1Q4.woff2`,
              weight: `400`,
            },
          ],
        },
        ...mt,
        ...ht,
        ...v(he),
        ...v(ot),
        ...v(ye),
        ...v(ut),
        ...v(se),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = { load: (e, t) => g([() => w(Y, {}, t), () => w(V, {}, t)], t) }),
    ($ = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `Framerpnrf0LVZ7`,
          slots: [],
          annotations: {
            framerContractVersion: `1`,
            framerDisplayContentsDiv: `false`,
            framerResponsiveScreen: `true`,
            framerAutoSizeImages: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"m_LrxaZcb":{"layout":["fixed","auto"]},"QFU8Z9RSt":{"layout":["fixed","auto"]},"o_DgNi899":{"layout":["fixed","auto"]}}}`,
            framerColorSyntax: `true`,
            framerIntrinsicWidth: `1440`,
            framerComponentViewportWidth: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerImmutableVariables: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerScrollSections: `false`,
            framerIntrinsicHeight: `2081`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, gt as queryParamNames };
//# sourceMappingURL=1KL5rQ3ZBbzMaBTHqMTaMC_kUL5jvE50TiXHBqsPG9s.Ce-u6t_z.mjs.map
