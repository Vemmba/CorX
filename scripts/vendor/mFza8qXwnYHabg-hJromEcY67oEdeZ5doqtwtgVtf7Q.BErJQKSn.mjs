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
import { D as f, a as p, r as m, t as h } from "./motion.CLguka-h.mjs";
import {
  A as g,
  C as _,
  D as v,
  I as y,
  L as b,
  S as x,
  U as S,
  X as C,
  _t as w,
  a as ee,
  at as te,
  b as T,
  ct as E,
  f as D,
  h as O,
  ht as k,
  it as A,
  k as j,
  mt as M,
  n as N,
  nt as P,
  o as F,
  ot as ne,
  r as re,
  s as ie,
  st as I,
  t as L,
  vt as ae,
  w as oe,
  y as R,
} from "./framer.CvMidwmI.mjs";
import { i as se, n as ce, r as le, t as ue } from "./bHwADsIpE.CTmH8B6k.mjs";
import { i as de, n as fe, r as pe, t as me } from "./shared-lib.BiOvUwih.mjs";
import { i as he, n as ge, r as _e, t as ve } from "./TsxNrEyVF.Cx0whfpf.mjs";
import ye, { t as be } from "./fqo7aJb6mwVndF-qDyPqGb2j1YoqV5lFZP6lFTo8j4E.DSeyRvz9.mjs";
function z(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var B,
  V,
  xe,
  Se,
  Ce,
  we,
  Te,
  Ee,
  De,
  Oe,
  ke,
  Ae,
  je,
  Me,
  H,
  Ne = e(() => {
    (l(),
      S(),
      h(),
      r(),
      de(),
      (B = w(f.div)),
      (V = { mpFTnZST0: { hover: !0, pressed: !0 } }),
      (xe = [`mpFTnZST0`, `GeRx8AZaq`, `HxUNvDMKt`, `KbEf8qztr`, `L43ZHzpfw`]),
      (Se = `framer-8wmXv`),
      (Ce = {
        GeRx8AZaq: `framer-v-vf7eo4`,
        HxUNvDMKt: `framer-v-fcz6hj`,
        KbEf8qztr: `framer-v-4ky`,
        L43ZHzpfw: `framer-v-1md94ev`,
        mpFTnZST0: `framer-v-1yeiu4z`,
      }),
      (we = { delay: 0, duration: 0.2, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Te = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
      (Ee = {
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
      (De = (e, t) => `translateX(-50%) ${t}`),
      (Oe = ({ value: e, children: t }) => {
        let r = a(p),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(p.Provider, { value: o, children: t });
      }),
      (ke = {
        Default: `mpFTnZST0`,
        Disabled: `HxUNvDMKt`,
        Error: `L43ZHzpfw`,
        Loading: `GeRx8AZaq`,
        Success: `KbEf8qztr`,
      }),
      (Ae = f.create(t)),
      (je = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: ke[r.variant] ?? r.variant ?? `mpFTnZST0`,
      })),
      (Me = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (H = k(
        c(function (e, n) {
          let r = d(null),
            i = n ?? r,
            a = u(),
            { activeLocale: c, setLocale: l } = I();
          P();
          let { style: p, className: h, layoutId: g, variant: _, ...y } = je(e),
            {
              baseVariant: b,
              classNames: x,
              clearLoadingGesture: S,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: ee,
              setGestureState: te,
              setVariant: E,
              variants: D,
            } = M({
              cycleOrder: xe,
              defaultVariant: `mpFTnZST0`,
              enabledGestures: V,
              ref: i,
              variant: _,
              variantClassNames: Ce,
            }),
            O = Me(e, D),
            k = v(Se, me),
            A = () => b !== `GeRx8AZaq`,
            j = () => b === `GeRx8AZaq`,
            N = () => ![`GeRx8AZaq`, `KbEf8qztr`, `L43ZHzpfw`].includes(b);
          return s(m, {
            id: g ?? a,
            children: s(Ae, {
              animate: D,
              initial: !1,
              children: s(Oe, {
                value: we,
                children: o(f.button, {
                  ...y,
                  ...C,
                  className: v(k, `framer-1yeiu4z`, h, x),
                  "data-framer-name": `Default`,
                  "data-reset": `button`,
                  layoutDependency: O,
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
                    ...p,
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
                  ...z(
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
                    A() &&
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
                        layoutDependency: O,
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
                        ...z(
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
                    j() &&
                      s(f.div, {
                        className: `framer-kvnut1`,
                        "data-framer-name": `Spinner`,
                        layoutDependency: O,
                        layoutId: `U4Tm4nMvp`,
                        style: {
                          mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                          WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                        },
                        children: s(B, {
                          __framer__loop: Ee,
                          __framer__loopEffectEnabled: !0,
                          __framer__loopRepeatDelay: 0,
                          __framer__loopRepeatType: `loop`,
                          __framer__loopTransition: Te,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          className: `framer-1ken7vz`,
                          "data-framer-name": `Conic`,
                          layoutDependency: O,
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
                            layoutDependency: O,
                            layoutId: `BZiMBYCv1`,
                            style: {
                              backgroundColor: `rgb(255, 255, 255)`,
                              borderBottomLeftRadius: 1,
                              borderBottomRightRadius: 1,
                              borderTopLeftRadius: 1,
                              borderTopRightRadius: 1,
                            },
                            transformTemplate: De,
                          }),
                        }),
                      }),
                    N() &&
                      o(f.div, {
                        className: `framer-4wfklw`,
                        "data-framer-name": `Arrow`,
                        layoutDependency: O,
                        layoutId: `ltQa0RGmA`,
                        children: [
                          s(T, {
                            className: `framer-i1pduz`,
                            "data-framer-name": `arrow`,
                            fill: `var(--token-e6be3043-e1a9-4dbf-8f7b-1ce31d52b0bb, rgba(255, 255, 255, 0.6)) /* {"name":"White 60%"} */`,
                            intrinsicHeight: 24,
                            intrinsicWidth: 24,
                            layoutDependency: O,
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
                            layoutDependency: O,
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
          ...fe,
        ],
        `framer-8wmXv`
      )),
      (H.displayName = `Form Button`),
      (H.defaultProps = { height: 48, width: 216 }),
      oe(H, {
        variant: {
          options: [`mpFTnZST0`, `GeRx8AZaq`, `HxUNvDMKt`, `KbEf8qztr`, `L43ZHzpfw`],
          optionTitles: [`Default`, `Loading`, `Disabled`, `Success`, `Error`],
          title: `Variant`,
          type: re.Enum,
        },
      }),
      _(
        H,
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
          ...b(pe),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  U,
  Pe,
  Fe,
  Ie,
  Le,
  W,
  Re,
  ze,
  Be,
  Ve,
  He,
  Ue,
  G,
  We = e(() => {
    (l(),
      S(),
      h(),
      r(),
      (U = w(f.div)),
      (Pe = `framer-HOifx`),
      (Fe = { VCQxyY1j0: `framer-v-1syca5` }),
      (Ie = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Le = { delay: 0, duration: 0.6, ease: [0, 0, 1, 1], type: `tween` }),
      (W = {
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
      (Re = { delay: 0.2, duration: 0.6, ease: [0, 0, 1, 1], type: `tween` }),
      (ze = { delay: 0.4, duration: 0.6, ease: [0, 0, 1, 1], type: `tween` }),
      (Be = ({ value: e, children: t }) => {
        let r = a(p),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(p.Provider, { value: o, children: t });
      }),
      (Ve = f.create(t)),
      (He = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (Ue = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (G = k(
        c(function (e, t) {
          let n = d(null),
            r = t ?? n,
            i = u(),
            { activeLocale: a, setLocale: c } = I();
          P();
          let { style: l, className: p, layoutId: h, variant: g, ..._ } = He(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: C,
              isLoading: w,
              setGestureState: ee,
              setVariant: te,
              variants: E,
            } = M({ defaultVariant: `VCQxyY1j0`, ref: r, variant: g, variantClassNames: Fe }),
            D = Ue(e, E),
            O = v(Pe);
          return s(m, {
            id: h ?? i,
            children: s(Ve, {
              animate: E,
              initial: !1,
              children: s(Be, {
                value: Ie,
                children: o(f.div, {
                  ..._,
                  ...S,
                  className: v(O, `framer-1syca5`, p, b),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: D,
                  layoutId: `VCQxyY1j0`,
                  ref: r,
                  style: { ...l },
                  children: [
                    s(U, {
                      __framer__loop: W,
                      __framer__loopEffectEnabled: !0,
                      __framer__loopPauseOffscreen: !0,
                      __framer__loopRepeatDelay: 0,
                      __framer__loopRepeatType: `mirror`,
                      __framer__loopTransition: Le,
                      __perspectiveFX: !1,
                      __smartComponentFX: !0,
                      __targetOpacity: 1,
                      className: `framer-1xuager`,
                      "data-framer-name": `1st oval`,
                      layoutDependency: D,
                      layoutId: `IqJnkbyc6`,
                      children: s(T, {
                        className: `framer-au427j`,
                        layoutDependency: D,
                        layoutId: `IuGnCTBHo`,
                        requiresOverflowVisible: !1,
                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7 7" overflow="visible"><path d="M 3.5 0 C 5.433 0 7 1.567 7 3.5 C 7 5.433 5.433 7 3.5 7 C 1.567 7 0 5.433 0 3.5 C 0 1.567 1.567 0 3.5 0 Z" fill="rgba(232, 81, 26, 0.8)"></path></svg>`,
                        withExternalLayout: !0,
                      }),
                    }),
                    s(U, {
                      __framer__loop: W,
                      __framer__loopEffectEnabled: !0,
                      __framer__loopPauseOffscreen: !0,
                      __framer__loopRepeatDelay: 0,
                      __framer__loopRepeatType: `mirror`,
                      __framer__loopTransition: Re,
                      __perspectiveFX: !1,
                      __smartComponentFX: !0,
                      __targetOpacity: 1,
                      className: `framer-16etapf`,
                      "data-framer-name": `2nd oval`,
                      layoutDependency: D,
                      layoutId: `ps1H_7aAs`,
                      children: s(T, {
                        className: `framer-166uzit`,
                        layoutDependency: D,
                        layoutId: `YciaLn5sE`,
                        requiresOverflowVisible: !1,
                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7 7" overflow="visible"><path d="M 3.5 0 C 5.433 0 7 1.567 7 3.5 C 7 5.433 5.433 7 3.5 7 C 1.567 7 0 5.433 0 3.5 C 0 1.567 1.567 0 3.5 0 Z" fill="rgb(232, 81, 26)"></path></svg>`,
                        withExternalLayout: !0,
                      }),
                    }),
                    s(U, {
                      __framer__loop: W,
                      __framer__loopEffectEnabled: !0,
                      __framer__loopPauseOffscreen: !0,
                      __framer__loopRepeatDelay: 0,
                      __framer__loopRepeatType: `mirror`,
                      __framer__loopTransition: ze,
                      __perspectiveFX: !1,
                      __smartComponentFX: !0,
                      __targetOpacity: 1,
                      className: `framer-7n3nm6`,
                      "data-framer-name": `3rd oval`,
                      layoutDependency: D,
                      layoutId: `DlcQ8X_NR`,
                      children: s(T, {
                        className: `framer-1iv3ed3`,
                        layoutDependency: D,
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
      (G.displayName = `Ovals animation`),
      (G.defaultProps = { height: 7, width: 23 }),
      _(G, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  }),
  Ge,
  K,
  Ke,
  qe,
  q,
  Je,
  J,
  Y,
  Ye,
  Xe,
  Ze,
  Qe,
  $e,
  X,
  et = e(() => {
    (l(),
      S(),
      h(),
      r(),
      We(),
      (Ge = y(G)),
      (K = ae(w(f.div))),
      (Ke = `framer-l1IYy`),
      (qe = { rSlmq5SOU: `framer-v-7qk9bx` }),
      (q = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Je = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: q,
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
        y: 10,
      }),
      (Y = {
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
      (Ye = {
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
      (Xe = ({ value: e, children: t }) => {
        let r = a(p),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return s(p.Provider, { value: o, children: t });
      }),
      (Ze = f.create(t)),
      (Qe = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      ($e = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = k(
        c(function (e, n) {
          let r = d(null),
            i = n ?? r,
            a = u(),
            { activeLocale: c, setLocale: l } = I(),
            p = P(),
            { style: h, className: g, layoutId: _, variant: y, ...b } = Qe(e),
            {
              baseVariant: S,
              classNames: C,
              clearLoadingGesture: w,
              gestureHandlers: ee,
              gestureVariant: te,
              isLoading: T,
              setGestureState: E,
              setVariant: D,
              variants: O,
            } = M({ defaultVariant: `rSlmq5SOU`, ref: i, variant: y, variantClassNames: qe }),
            k = $e(e, O),
            A = v(Ke);
          return s(m, {
            id: _ ?? a,
            children: s(Ze, {
              animate: O,
              initial: !1,
              children: s(Xe, {
                value: q,
                children: o(f.div, {
                  ...b,
                  ...ee,
                  className: v(A, `framer-7qk9bx`, g, C),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: k,
                  layoutId: `rSlmq5SOU`,
                  ref: i,
                  style: { ...h },
                  children: [
                    o(K, {
                      __perspectiveFX: !1,
                      __smartComponentFX: !0,
                      __targetOpacity: 1,
                      animate: Je,
                      className: `framer-1uu3php`,
                      "data-border": !0,
                      "data-framer-appear-id": `1uu3php`,
                      "data-framer-name": `Let's talk box`,
                      initial: J,
                      layoutDependency: k,
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
                          y: (p?.y || 0) + 0 + 14.1,
                          children: s(x, {
                            className: `framer-136nodr-container`,
                            layoutDependency: k,
                            layoutId: `TtinxEEGJ-container`,
                            nodeId: `TtinxEEGJ`,
                            rendersWithMotion: !0,
                            scopeId: `t_ud4qK8z`,
                            children: s(G, {
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
                          effect: Y,
                          fonts: [`Inter`],
                          layoutDependency: k,
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
                    s(K, {
                      __perspectiveFX: !1,
                      __smartComponentFX: !0,
                      __targetOpacity: 1,
                      animate: Ye,
                      className: `framer-32hias`,
                      "data-border": !0,
                      "data-framer-appear-id": `32hias`,
                      "data-framer-name": `Tell us your goal`,
                      initial: J,
                      layoutDependency: k,
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
                        effect: Y,
                        fonts: [`Inter`],
                        layoutDependency: k,
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
      (X.displayName = `Let's talk animtaion`),
      (X.defaultProps = { height: 93, width: 242 }),
      _(
        X,
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
          ...Ge,
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (X.loader = { load: (e, t) => (t.locale, Promise.allSettled([g(G, {}, t)])) }));
  }),
  tt,
  nt,
  rt,
  it = e(() => {
    (S(),
      j.loadFonts([`GF;Bricolage Grotesque-regular`, `GF;Bricolage Grotesque-700`]),
      (tt = [
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
      (nt = [
        `.framer-ecdr7 .framer-styles-preset-1gjyw3:not(.rich-text-wrapper), .framer-ecdr7 .framer-styles-preset-1gjyw3.rich-text-wrapper p { --framer-font-family: "Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif; --framer-font-family-bold: "Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.04em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: rgba(255, 255, 255, 0.6); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1439px) and (min-width: 810px) { .framer-ecdr7 .framer-styles-preset-1gjyw3:not(.rich-text-wrapper), .framer-ecdr7 .framer-styles-preset-1gjyw3.rich-text-wrapper p { --framer-font-family: "Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif; --framer-font-family-bold: "Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 11px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.04em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: rgba(255, 255, 255, 0.6); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-ecdr7 .framer-styles-preset-1gjyw3:not(.rich-text-wrapper), .framer-ecdr7 .framer-styles-preset-1gjyw3.rich-text-wrapper p { --framer-font-family: "Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif; --framer-font-family-bold: "Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 9px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.04em; --framer-line-height: 120%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: rgba(255, 255, 255, 0.6); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (rt = `framer-ecdr7`));
  }),
  at,
  ot,
  st,
  ct = e(() => {
    (S(),
      j.loadFonts([`GF;Bricolage Grotesque-300`, `GF;Bricolage Grotesque-regular`]),
      (at = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Bricolage Grotesque`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Bricolage Grotesque`,
              url: `https://fonts.gstatic.com/s/bricolagegrotesque/v9/3y9U6as8bTXq_nANBjzKo3IeZx8z6up5BeSl5jBNz_19PpbpMXuECpwUxJBOm_OJWiaaD30YfKfjZZoLvUXiyMgvs-wJDtw.woff2`,
              weight: `300`,
            },
            {
              cssFamilyName: `Bricolage Grotesque`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Bricolage Grotesque`,
              url: `https://fonts.gstatic.com/s/bricolagegrotesque/v9/3y9U6as8bTXq_nANBjzKo3IeZx8z6up5BeSl5jBNz_19PpbpMXuECpwUxJBOm_OJWiaaD30YfKfjZZoLvRviyMgvs-wJDtw.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (ot = [
        `.framer-cFef4 .framer-styles-preset-1270zpf:not(.rich-text-wrapper), .framer-cFef4 .framer-styles-preset-1270zpf.rich-text-wrapper p { --framer-font-family: "Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif; --framer-font-family-bold: "Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 300; --framer-font-weight-bold: 400; --framer-letter-spacing: -0.04em; --framer-line-height: 140%; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-9d22cc14-9428-4f32-a631-82e7e5b3c5ff, rgba(255, 255, 255, 0.8)); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (st = `framer-cFef4`));
  }),
  lt,
  ut,
  dt,
  ft = e(() => {
    (S(),
      j.loadFonts([]),
      (lt = [{ explicitInter: !0, fonts: [] }]),
      (ut = [
        `.framer-n05RR .framer-styles-preset-1ny882f:not(.rich-text-wrapper), .framer-n05RR .framer-styles-preset-1ny882f.rich-text-wrapper a { --framer-link-hover-text-color: var(--token-857887c0-9486-4a16-b7a3-5457d6a4efbc, #ffffff); --framer-link-text-color: var(--token-9d22cc14-9428-4f32-a631-82e7e5b3c5ff, rgba(255, 255, 255, 0.8)); }`,
      ]),
      (dt = `framer-n05RR`));
  }),
  pt,
  mt,
  Z,
  ht,
  gt,
  _t,
  vt,
  yt,
  bt,
  Q,
  xt,
  St,
  $,
  Ct;
e(() => {
  (l(),
    S(),
    h(),
    r(),
    Ne(),
    et(),
    se(),
    it(),
    ct(),
    he(),
    ft(),
    be(),
    (pt = y(X)),
    (mt = y(H)),
    (Z = {
      F12orvsth: `(min-width: 1440px)`,
      m_LrxaZcb: `(min-width: 810px) and (max-width: 1079.98px)`,
      o_DgNi899: `(min-width: 1080px) and (max-width: 1439.98px)`,
      QFU8Z9RSt: `(max-width: 809.98px)`,
    }),
    (ht = []),
    (gt = `framer-zjKwS`),
    (_t = {
      F12orvsth: `framer-v-1pqqhfs`,
      m_LrxaZcb: `framer-v-epjuwv`,
      o_DgNi899: `framer-v-e0ekw3`,
      QFU8Z9RSt: `framer-v-vf6gku`,
    }),
    (vt = (e, t, n) => (e && t ? `position` : n)),
    (yt = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (bt = (e, t, n) => {
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
    (Q = { Desktop: `F12orvsth`, Leptop: `o_DgNi899`, Phone: `QFU8Z9RSt`, Tablet: `m_LrxaZcb` }),
    (xt = ({ value: e }) =>
      ne()
        ? null
        : s(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (St = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Q[r.variant] ?? r.variant ?? `F12orvsth`,
    })),
    ($ = k(
      c(function (e, r) {
        let c = d(null),
          l = r ?? c,
          h = u(),
          { activeLocale: g, setLocale: _ } = I(),
          y = P(),
          { style: b, className: x, layoutId: S, variant: C, ...w } = St(e);
        E(n(() => ye({}, g), [g]));
        let [k, j] = te(C, Z, !1),
          M = v(gt, ve, rt, st, dt, ue),
          ne = a(ie)?.isLayoutTemplate,
          re = !!a(p)?.transition?.layout,
          ae = vt(ne, re);
        return (
          A({}),
          s(ie.Provider, {
            value: {
              activeVariantId: k,
              humanReadableVariantMap: Q,
              primaryVariantId: `F12orvsth`,
              variantClassNames: _t,
            },
            children: o(m, {
              id: S ?? h,
              children: [
                s(xt, {
                  value: `html body { background: var(--token-c5c9e562-6208-494c-a46c-1fb5738d89f6, rgb(9, 4, 1)); }`,
                }),
                s(f.div, {
                  ...w,
                  className: v(M, `framer-1pqqhfs`, x),
                  ref: l,
                  style: { ...b },
                  children: s(f.section, {
                    className: `framer-1it5grq`,
                    "data-framer-name": `Contact section`,
                    layout: ae,
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
                                  children: `Tell us about your project.`,
                                }),
                              }),
                              className: `framer-k7he5c`,
                              "data-framer-name": `Title Text`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            s(O, {
                              breakpoint: k,
                              overrides: {
                                m_LrxaZcb: { y: void 0 },
                                o_DgNi899: { y: (y?.y || 0) + 0 + 0 + 180 + 0 + 0 + 40 + 65.3 },
                                QFU8Z9RSt: { y: void 0 },
                              },
                              children: s(L, {
                                height: 93,
                                y: (y?.y || 0) + 0 + 0 + 196 + 0 + 0 + 40 + 65.3,
                                children: s(N, {
                                  className: `framer-1j3jse6-container`,
                                  nodeId: `YS0F4f9Cu`,
                                  scopeId: `pnrf0LVZ7`,
                                  children: s(X, {
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
                                        s(O, {
                                          breakpoint: k,
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
                                                  children: `Get a custom quote`,
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
                                                children: `Get a custom quote`,
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
                                        s(O, {
                                          breakpoint: k,
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
                                                  children: `Websites, AI agents, video and motion`,
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
                                                children: `Websites, AI agents, video and motion`,
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
                                        s(O, {
                                          breakpoint: k,
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
                                                  children: `We’ll get back to you soon.`,
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
                                                children: `We’ll get back to you soon.`,
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
                                        s(O, {
                                          breakpoint: k,
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
                                                  children: s(D, {
                                                    href: `mailto:business@corx.club`,
                                                    motionChild: !0,
                                                    nodeId: `cntfQUECX`,
                                                    openInNewTab: !0,
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
                                                children: s(D, {
                                                  href: `mailto:business@corx.club`,
                                                  motionChild: !0,
                                                  nodeId: `cntfQUECX`,
                                                  openInNewTab: !0,
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
                                        s(O, {
                                          breakpoint: k,
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
                                                  children: s(D, {
                                                    href: `tel:+923308973085`,
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
                                                  "--framer-text-alignment": `start`,
                                                  "--framer-text-color": `var(--token-9d22cc14-9428-4f32-a631-82e7e5b3c5ff, rgba(255, 255, 255, 0.8))`,
                                                },
                                                children: s(D, {
                                                  href: `tel:+923308973085`,
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
                          children: s(ee, {
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
                                          s(F, {
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
                                          s(F, {
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
                                                style: { "--framer-text-alignment": `start` },
                                                children: `Company or project`,
                                              }),
                                            }),
                                            className: `framer-1fm9mee`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          s(F, {
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
                                                style: { "--framer-text-alignment": `start` },
                                                children: `What do you need help with?`,
                                              }),
                                            }),
                                            className: `framer-1xvwcpg`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          s(F, {
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
                                            style: { "--framer-text-alignment": `start` },
                                            children: `Tell us about your project`,
                                          }),
                                        }),
                                        className: `framer-wtbwm6`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      s(F, {
                                        className: `framer-1emzg9a`,
                                        inputName: `Company Name`,
                                        placeholder: `Anything else you’d like to share with the Vidgenie team...`,
                                        type: `textarea`,
                                      }),
                                    ],
                                  }),
                                  s(L, {
                                    height: 40,
                                    children: s(N, {
                                      className: `framer-2ykani-container`,
                                      nodeId: `ida2PwYyJ`,
                                      scopeId: `pnrf0LVZ7`,
                                      children: s(H, {
                                        height: `100%`,
                                        id: `ida2PwYyJ`,
                                        layoutId: `ida2PwYyJ`,
                                        style: { height: `100%` },
                                        type: `submit`,
                                        variant: bt(
                                          e,
                                          {
                                            error: `L43ZHzpfw`,
                                            pending: `GeRx8AZaq`,
                                            success: `KbEf8qztr`,
                                          },
                                          yt(`mpFTnZST0`)
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
        `.framer-zjKwS.framer-tascct, .framer-zjKwS .framer-tascct { display: block; }`,
        `.framer-zjKwS.framer-1pqqhfs { align-content: center; align-items: center; background-color: var(--token-c5c9e562-6208-494c-a46c-1fb5738d89f6, #090401); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1440px; }`,
        `.framer-zjKwS .framer-1it5grq { align-content: center; align-items: center; background-color: #090401; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 120px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 196px 0px 120px 0px; position: relative; width: 100%; }`,
        `.framer-zjKwS .framer-ce3unr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1312px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; z-index: 4; }`,
        `.framer-zjKwS .framer-iw60g0 { --border-bottom-width: 1px; --border-color: rgba(255, 255, 255, 0.1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background: linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.02) 100%); border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 562px; justify-content: space-between; overflow: visible; padding: 40px; position: relative; width: 533px; }`,
        `.framer-zjKwS .framer-k7he5c { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 454px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-zjKwS .framer-1j3jse6-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-zjKwS .framer-dic9zn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-zjKwS .framer-d6119x { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-zjKwS .framer-1anh97c, .framer-zjKwS .framer-14779k8, .framer-zjKwS .framer-80ixwh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-zjKwS .framer-5ow2lk, .framer-zjKwS .framer-1posd0t, .framer-zjKwS .framer-9i80cj { flex: none; height: 16px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 16px; }`,
        `.framer-zjKwS .framer-1tewxoz, .framer-zjKwS .framer-1a5aeoi, .framer-zjKwS .framer-p94c5w { height: 16px; left: 0px; position: absolute; top: 0px; width: 16px; }`,
        `.framer-zjKwS .framer-9xdon6, .framer-zjKwS .framer-ugs1tg, .framer-zjKwS .framer-wsztte { height: 5px; left: 5px; position: absolute; top: 6px; width: 6px; }`,
        `.framer-zjKwS .framer-qdbg0v, .framer-zjKwS .framer-3y2fuv, .framer-zjKwS .framer-1wx2kbp { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-zjKwS .framer-oiil99 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-zjKwS .framer-7urazj, .framer-zjKwS .framer-jnfp91 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-zjKwS .framer-mb84lu, .framer-zjKwS .framer-1oeddml { flex: none; height: 16px; position: relative; width: 16px; }`,
        `.framer-zjKwS .framer-1erk7t1, .framer-zjKwS .framer-ckidmy { --framer-paragraph-spacing: 0px; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-zjKwS .framer-vpldjh { --border-bottom-width: 1px; --border-color: rgba(255, 255, 255, 0.1); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; align-self: stretch; background: linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.02) 100%); border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: center; overflow: visible; padding: 40px; position: relative; width: 1px; }`,
        `.framer-zjKwS .framer-1yfkxg9 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-zjKwS .framer-1gnof38, .framer-zjKwS .framer-wvyog9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-zjKwS .framer-1hik2ew, .framer-zjKwS .framer-1rnft4g, .framer-zjKwS .framer-owu5k4, .framer-zjKwS .framer-14kaxrp { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-zjKwS .framer-lp5w95, .framer-zjKwS .framer-13qxhhq, .framer-zjKwS .framer-1fm9mee, .framer-zjKwS .framer-1xvwcpg, .framer-zjKwS .framer-wtbwm6 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-zjKwS .framer-11kwjz6, .framer-zjKwS .framer-16pd9b9, .framer-zjKwS .framer-17l8z7w, .framer-zjKwS .framer-eq8dyr { --framer-input-background: rgba(0, 0, 0, 0.28); --framer-input-border-bottom-width: 1px; --framer-input-border-color: var(--token-2ee91d79-478c-4695-9c6b-241f9952f218, rgba(255, 255, 255, 0.1)); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 100px; --framer-input-border-radius-bottom-right: 100px; --framer-input-border-radius-top-left: 100px; --framer-input-border-radius-top-right: 100px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: var(--token-857887c0-9486-4a16-b7a3-5457d6a4efbc, #ffffff); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: var(--token-857887c0-9486-4a16-b7a3-5457d6a4efbc, #ffffff); --framer-input-font-family: "PP Neue Montreal Book"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-icon-mask-image: none; --framer-input-padding: 16px 16px 16px 24px; --framer-input-placeholder-color: var(--token-e6be3043-e1a9-4dbf-8f7b-1ce31d52b0bb, rgba(255, 255, 255, 0.6)); --framer-input-wrapper-height: auto; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-zjKwS .framer-1d4indb { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-zjKwS .framer-1emzg9a { --framer-input-background: rgba(0, 0, 0, 0.28); --framer-input-border-bottom-width: 1px; --framer-input-border-color: var(--token-2ee91d79-478c-4695-9c6b-241f9952f218, rgba(255, 255, 255, 0.1)); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 12px; --framer-input-border-radius-bottom-right: 12px; --framer-input-border-radius-top-left: 12px; --framer-input-border-radius-top-right: 12px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: var(--token-857887c0-9486-4a16-b7a3-5457d6a4efbc, #ffffff); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: var(--token-857887c0-9486-4a16-b7a3-5457d6a4efbc, #ffffff); --framer-input-font-family: "PP Neue Montreal Book"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-icon-mask-image: none; --framer-input-padding: 16px 16px 16px 24px; --framer-input-placeholder-color: var(--token-e6be3043-e1a9-4dbf-8f7b-1ce31d52b0bb, rgba(255, 255, 255, 0.6)); --framer-input-wrapper-height: auto; --framer-textarea-resize: vertical; flex: none; height: auto; min-height: 156px; position: relative; width: 100%; }`,
        `.framer-zjKwS .framer-2ykani-container { flex: none; height: 40px; position: relative; width: auto; }`,
        ...ge,
        ...nt,
        ...ot,
        ...ut,
        ...ce,
        `.framer-zjKwS[data-border="true"]::after, .framer-zjKwS [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1079.98px) { .framer-zjKwS.framer-1pqqhfs { width: 810px; } .framer-zjKwS .framer-1it5grq { padding: 150px 40px 120px 40px; } .framer-zjKwS .framer-ce3unr { flex-direction: column; } .framer-zjKwS .framer-iw60g0 { width: 100%; } .framer-zjKwS .framer-vpldjh { align-self: unset; flex: none; height: min-content; width: 100%; }}`,
        `@media (max-width: 809.98px) { .framer-zjKwS.framer-1pqqhfs { width: 390px; } .framer-zjKwS .framer-1it5grq { padding: 140px 20px 120px 20px; } .framer-zjKwS .framer-ce3unr { flex-direction: column; gap: 24px; } .framer-zjKwS .framer-iw60g0 { gap: 40px; height: min-content; justify-content: center; width: 100%; } .framer-zjKwS .framer-vpldjh { align-self: unset; flex: none; height: min-content; padding: 24px; width: 100%; } .framer-zjKwS .framer-1gnof38, .framer-zjKwS .framer-wvyog9 { flex-direction: column; } .framer-zjKwS .framer-1hik2ew, .framer-zjKwS .framer-1rnft4g, .framer-zjKwS .framer-owu5k4, .framer-zjKwS .framer-14kaxrp { flex: none; width: 100%; }}`,
        `@media (min-width: 1080px) and (max-width: 1439.98px) { .framer-zjKwS.framer-1pqqhfs { width: 1080px; } .framer-zjKwS .framer-1it5grq { padding: 180px 30px 120px 30px; } .framer-zjKwS .framer-iw60g0 { flex: 1 0 0px; width: 1px; }}`,
      ],
      `framer-zjKwS`
    )),
    ($.displayName = `All Works`),
    ($.defaultProps = { height: 2081, width: 1440 }),
    _(
      $,
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
        ...pt,
        ...mt,
        ...b(_e),
        ...b(tt),
        ...b(at),
        ...b(lt),
        ...b(le),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = { load: (e, t) => C([() => g(X, {}, t), () => g(H, {}, t)], t) }),
    (Ct = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `Framerpnrf0LVZ7`,
          slots: [],
          annotations: {
            framerDisplayContentsDiv: `false`,
            framerResponsiveScreen: `true`,
            framerImmutableVariables: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"m_LrxaZcb":{"layout":["fixed","auto"]},"QFU8Z9RSt":{"layout":["fixed","auto"]},"o_DgNi899":{"layout":["fixed","auto"]}}}`,
            framerContractVersion: `1`,
            framerScrollSections: `false`,
            framerAcceptsLayoutTemplate: `true`,
            framerColorSyntax: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerIntrinsicHeight: `2081`,
            framerAutoSizeImages: `true`,
            framerComponentViewportWidth: `true`,
            framerIntrinsicWidth: `1440`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Ct as __FramerMetadata__, $ as default, ht as queryParamNames };
//# sourceMappingURL=mFza8qXwnYHabg-hJromEcY67oEdeZ5doqtwtgVtf7Q.BErJQKSn.mjs.map
