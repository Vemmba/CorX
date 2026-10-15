import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  F as t,
  M as n,
  T as r,
  j as i,
  l as a,
  o,
  p as s,
  s as c,
  w as l,
  x as u,
} from "./react.DSZvp07T.mjs";
import { D as d, a as f, r as p, t as m } from "./motion.CLguka-h.mjs";
import {
  C as h,
  D as g,
  L as _,
  U as v,
  b as y,
  f as b,
  ht as x,
  k as S,
  mt as C,
  nt as w,
  r as T,
  st as E,
  tt as D,
  w as O,
  y as k,
} from "./framer.CvMidwmI.mjs";
import { i as A, n as j, r as M, t as N } from "./shared-lib.BiOvUwih.mjs";
var P,
  F,
  I,
  L = e(() => {
    (v(),
      S.loadFonts([`GF;Bricolage Grotesque-regular`, `GF;Bricolage Grotesque-700`]),
      (P = [
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
      (F = [
        `.framer-bXrkQ .framer-styles-preset-yf5nv9:not(.rich-text-wrapper), .framer-bXrkQ .framer-styles-preset-yf5nv9.rich-text-wrapper p { --framer-font-family: "Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif; --framer-font-family-bold: "Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.04em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-e6be3043-e1a9-4dbf-8f7b-1ce31d52b0bb, rgba(255, 255, 255, 0.6)); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (I = `framer-bXrkQ`));
  }),
  R,
  z,
  B,
  V = e(() => {
    (v(),
      S.loadFonts([`GF;Bricolage Grotesque-600`, `GF;Bricolage Grotesque-700`]),
      (R = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Bricolage Grotesque`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Bricolage Grotesque`,
              url: `https://fonts.gstatic.com/s/bricolagegrotesque/v9/3y9U6as8bTXq_nANBjzKo3IeZx8z6up5BeSl5jBNz_19PpbpMXuECpwUxJBOm_OJWiaaD30YfKfjZZoLvcXlyMgvs-wJDtw.woff2`,
              weight: `600`,
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
      (z = [
        `.framer-m9y5u .framer-styles-preset-s47e6i:not(.rich-text-wrapper), .framer-m9y5u .framer-styles-preset-s47e6i.rich-text-wrapper p { --framer-font-family: "Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif; --framer-font-family-bold: "Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.04em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-9d22cc14-9428-4f32-a631-82e7e5b3c5ff, rgba(255, 255, 255, 0.8)); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (B = `framer-m9y5u`));
  });
function H(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var U,
  W,
  G,
  K,
  q,
  J,
  Y,
  X,
  Z,
  Q,
  $ = e(() => {
    (c(),
      v(),
      m(),
      r(),
      V(),
      A(),
      (U = [`vgllaz4mv`, `Dl1wbccI8`]),
      (W = `framer-Diwyg`),
      (G = { Dl1wbccI8: `framer-v-jrgl00`, vgllaz4mv: `framer-v-xfw9w` }),
      (K = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (q = ({ value: e, children: t }) => {
        let r = i(f),
          a = e ?? r.transition,
          s = n(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return o(f.Provider, { value: s, children: t });
      }),
      (J = { "On hover": `Dl1wbccI8`, "Primary ": `vgllaz4mv` }),
      (Y = d.create(t)),
      (X = ({ height: e, id: t, title: n, width: r, ...i }) => ({
        ...i,
        o_X2HzHKv: n ?? i.o_X2HzHKv ?? `Get Started`,
        variant: J[i.variant] ?? i.variant ?? `vgllaz4mv`,
      })),
      (Z = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Q = x(
        s(function (e, n) {
          let r = u(null),
            i = n ?? r,
            s = l(),
            { activeLocale: c, setLocale: f } = E();
          w();
          let { style: m, className: h, layoutId: _, variant: v, o_X2HzHKv: x, ...S } = X(e),
            {
              baseVariant: T,
              classNames: O,
              clearLoadingGesture: A,
              gestureHandlers: j,
              gestureVariant: M,
              isLoading: P,
              setGestureState: F,
              setVariant: I,
              variants: L,
            } = C({
              cycleOrder: U,
              defaultVariant: `vgllaz4mv`,
              ref: i,
              variant: v,
              variantClassNames: G,
            }),
            R = Z(e, L),
            z = [N, B],
            { activeVariantCallback: V, delay: J } = D(T),
            Q = V(async (...e) => {
              (F({ isHovered: !0 }), I(`Dl1wbccI8`));
            }),
            $ = g(W, ...z),
            ee = V(async (...e) => {
              (F({ isHovered: !1 }), I(`vgllaz4mv`));
            });
          return o(p, {
            id: _ ?? s,
            children: o(Y, {
              animate: L,
              initial: !1,
              children: o(q, {
                value: K,
                children: o(b, {
                  href: { webPageId: `pnrf0LVZ7` },
                  motionChild: !0,
                  nodeId: `vgllaz4mv`,
                  openInNewTab: !1,
                  scopeId: `vpITPKqCH`,
                  smoothScroll: !0,
                  children: o(d.a, {
                    ...S,
                    ...j,
                    className: `${g($, `framer-xfw9w`, h, O)} framer-nvs45c`,
                    "data-framer-name": `Primary `,
                    "data-highlight": !0,
                    "data-reset": `button`,
                    layoutDependency: R,
                    layoutId: `vgllaz4mv`,
                    onMouseEnter: Q,
                    ref: i,
                    style: {
                      background: `linear-gradient(180deg, rgba(255, 123, 61, 0.8) 0%, rgba(242, 60, 5, 0.8) 100%)`,
                      borderBottomLeftRadius: 1046,
                      borderBottomRightRadius: 1046,
                      borderTopLeftRadius: 1046,
                      borderTopRightRadius: 1046,
                      boxShadow: `inset 0px -2px 2px 0px rgba(255, 255, 255, 0.5)`,
                      ...m,
                    },
                    ...H({ Dl1wbccI8: { "data-framer-name": `On hover`, onMouseLeave: ee } }, T, M),
                    children: a(d.div, {
                      className: `framer-1su2a7p`,
                      "data-framer-name": `Content`,
                      layoutDependency: R,
                      layoutId: `nkoZ1LS09`,
                      children: [
                        a(d.div, {
                          className: `framer-19sk9h2`,
                          "data-framer-name": `Text`,
                          layoutDependency: R,
                          layoutId: `IS1S00_Cz`,
                          children: [
                            o(k, {
                              __fromCanvasComponent: !0,
                              children: o(t, {
                                children: o(d.p, {
                                  className: `framer-styles-preset-qmqrl2`,
                                  "data-styles-preset": `rgevF2JsQ`,
                                  dir: `auto`,
                                  children: `Get Started`,
                                }),
                              }),
                              className: `framer-1hu2nim`,
                              "data-framer-name": `1 Promo Button Label`,
                              fonts: [`Inter`],
                              layoutDependency: R,
                              layoutId: `cbvX6YBmV`,
                              style: { "--framer-paragraph-spacing": `0px` },
                              text: x,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            o(k, {
                              __fromCanvasComponent: !0,
                              children: o(t, {
                                children: o(d.p, {
                                  className: `framer-styles-preset-s47e6i`,
                                  "data-styles-preset": `oCTiod8SV`,
                                  dir: `auto`,
                                  children: `Get Started`,
                                }),
                              }),
                              className: `framer-1i12kpz`,
                              "data-framer-name": `Promo Button Label`,
                              fonts: [`Inter`],
                              layoutDependency: R,
                              layoutId: `V9zOCg3HY`,
                              style: { "--framer-paragraph-spacing": `0px` },
                              text: x,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...H(
                                {
                                  Dl1wbccI8: {
                                    children: o(t, {
                                      children: o(d.p, {
                                        className: `framer-styles-preset-qmqrl2`,
                                        "data-styles-preset": `rgevF2JsQ`,
                                        dir: `auto`,
                                        children: `Get Started`,
                                      }),
                                    }),
                                  },
                                },
                                T,
                                M
                              ),
                            }),
                          ],
                        }),
                        a(d.div, {
                          className: `framer-1kxofoh`,
                          "data-framer-name": `Arrow`,
                          layoutDependency: R,
                          layoutId: `XeONAlVPE`,
                          children: [
                            o(y, {
                              className: `framer-12xwlxr`,
                              "data-framer-name": `arrow`,
                              fill: `var(--token-e6be3043-e1a9-4dbf-8f7b-1ce31d52b0bb, rgba(255, 255, 255, 0.6)) /* {"name":"White 60%"} */`,
                              intrinsicHeight: 24,
                              intrinsicWidth: 24,
                              layoutDependency: R,
                              layoutId: `yKbLYVa_A`,
                              svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5 7.5L6 18" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
<path d="M8 6.18791C8 6.18791 16.0479 5.50949 17.2692 6.73079C18.4906 7.95209 17.812 16 17.812 16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
                              withExternalLayout: !0,
                            }),
                            o(y, {
                              className: `framer-vlfleu`,
                              "data-framer-name": `arrow`,
                              fill: `var(--token-e6be3043-e1a9-4dbf-8f7b-1ce31d52b0bb, rgba(255, 255, 255, 0.6)) /* {"name":"White 60%"} */`,
                              intrinsicHeight: 24,
                              intrinsicWidth: 24,
                              layoutDependency: R,
                              layoutId: `wXMDMw9_F`,
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
              }),
            }),
          });
        }),
        [
          `.framer-Diwyg.framer-nvs45c, .framer-Diwyg .framer-nvs45c { display: block; }`,
          `.framer-Diwyg.framer-xfw9w { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 48px; justify-content: center; overflow: visible; padding: 10px 24px 10px 32px; position: relative; text-decoration: none; width: 162px; }`,
          `.framer-Diwyg .framer-1su2a7p { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-Diwyg .framer-19sk9h2, .framer-Diwyg .framer-1kxofoh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-Diwyg .framer-1hu2nim { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-Diwyg .framer-1i12kpz { bottom: -17px; flex: none; height: auto; left: 0px; position: absolute; white-space: pre; width: auto; z-index: 1; }`,
          `.framer-Diwyg .framer-12xwlxr { flex: none; height: 24px; position: relative; width: 24px; }`,
          `.framer-Diwyg .framer-vlfleu { bottom: -24px; flex: none; height: 24px; left: -24px; position: absolute; width: 24px; z-index: 1; }`,
          `.framer-Diwyg.framer-v-jrgl00 .framer-1hu2nim { left: 0px; position: absolute; top: -17px; z-index: 1; }`,
          `.framer-Diwyg.framer-v-jrgl00 .framer-1i12kpz, .framer-Diwyg.framer-v-jrgl00 .framer-vlfleu { bottom: unset; left: unset; position: relative; }`,
          `.framer-Diwyg.framer-v-jrgl00 .framer-12xwlxr { position: absolute; right: -24px; top: -24px; z-index: 1; }`,
          ...j,
          ...z,
        ],
        `framer-Diwyg`
      )),
      (Q.displayName = `Primary Button`),
      (Q.defaultProps = { height: 48, width: 162 }),
      O(Q, {
        variant: {
          options: [`vgllaz4mv`, `Dl1wbccI8`],
          optionTitles: [`Primary `, `On hover`],
          title: `Variant`,
          type: T.Enum,
        },
        o_X2HzHKv: {
          defaultValue: `Get Started`,
          displayTextArea: !1,
          title: `Title`,
          type: T.String,
        },
        ono_X2HzHKvChange: { changes: `o_X2HzHKv`, type: T.ChangeHandler },
      }),
      h(
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
            ],
          },
          ..._(M),
          ..._(R),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { P as a, F as i, $ as n, L as o, I as r, Q as t };
//# sourceMappingURL=vpITPKqCH.51th4Wpb.mjs.map
