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
  x as ee,
} from "./react.DSZvp07T.mjs";
import { P as u, i as te, o as ne, t as d } from "./motion.CvY1ZliN.mjs";
import {
  A as f,
  B as p,
  Ct as m,
  E as h,
  K as g,
  N as _,
  V as v,
  _ as y,
  at as re,
  b as ie,
  bt as b,
  ct as x,
  d as S,
  dt as ae,
  ft as oe,
  gt as se,
  l as C,
  n as ce,
  st as w,
  t as T,
  ut as E,
  x as D,
  z as O,
} from "./framer.B0980QYx.mjs";
import { i as k, r as A } from "./shared-lib.C80r_x6z.mjs";
import { i as le, n as j, r as M, t as ue } from "./ENNlAU9yc.ClIxIZUr.mjs";
import { i as N, n as P, r as de, t as fe } from "./qVYNhSTJJ.BUdeCzEG.mjs";
import F, { t as I } from "./NBwsVEQWn3ocxm4nK829T0M4vDONNJh95mJIwjwTZKw.BuOFXLON.mjs";
var L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q, $;
e(() => {
  (c(),
    g(),
    d(),
    r(),
    k(),
    le(),
    N(),
    I(),
    (L = m(S)),
    (R = m(u.div)),
    (z = O(A)),
    (B = {
      GOuEfSnDl: `(min-width: 810px) and (max-width: 1199.98px)`,
      oqc0OXb47: `(max-width: 809.98px)`,
      Vc3ai2REf: `(min-width: 1200px)`,
    }),
    (V = []),
    (H = `framer-ZarEZ`),
    (U = {
      GOuEfSnDl: `framer-v-tuq0e4`,
      oqc0OXb47: `framer-v-bwk3pc`,
      Vc3ai2REf: `framer-v-i4a00v`,
    }),
    (W = (e, t, n) => (e && t ? `position` : n)),
    (G = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0.4, delay: 0.2, duration: 0.4, type: `spring` },
      x: 0,
      y: 0,
    }),
    (K = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 0,
    }),
    (q = {
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
    (J = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Y = { Desktop: `Vc3ai2REf`, Phone: `oqc0OXb47`, Tablet: `GOuEfSnDl` }),
    (X = ({ value: e }) =>
      E()
        ? null
        : o(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Z = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Y[r.variant] ?? r.variant ?? `Vc3ai2REf`,
    })),
    (Q = b(
      s(function (e, r) {
        let s = ee(null),
          c = r ?? s,
          d = l(),
          { activeLocale: p, setLocale: m } = ae(),
          h = re(),
          { style: g, className: _, layoutId: b, variant: E, ...O } = Z(e);
        oe(n(() => F({}, p), [p]));
        let [k, le] = x(E, B, !1),
          j = f(H, fe, ue),
          M = i(C)?.isLayoutTemplate,
          N = !!i(ne)?.transition?.layout,
          P = W(M, N);
        return (
          se(),
          w({}),
          o(C.Provider, {
            value: {
              activeVariantId: k,
              humanReadableVariantMap: Y,
              primaryVariantId: `Vc3ai2REf`,
              variantClassNames: U,
            },
            children: a(te, {
              id: b ?? d,
              children: [
                o(X, {
                  value: `html body { background: var(--token-c5c9e562-6208-494c-a46c-1fb5738d89f6, rgb(9, 4, 1)); }`,
                }),
                o(u.div, {
                  ...O,
                  className: f(j, `framer-i4a00v`, _),
                  ref: c,
                  style: { ...g },
                  children: o(S, {
                    as: `header`,
                    background: {
                      alt: `Image`,
                      fit: `fill`,
                      intrinsicHeight: 2504,
                      intrinsicWidth: 2880,
                      loading: v((h?.y || 0) + 0 + 0),
                      pixelHeight: 2504,
                      pixelWidth: 2880,
                      sizes: h?.width || `100vw`,
                      src: `https://framerusercontent.com/images/KJ1D1c5cqS7ZANggrtN2ZNSXgqQ.png?width=2880&height=2504`,
                      srcSet: `https://framerusercontent.com/images/KJ1D1c5cqS7ZANggrtN2ZNSXgqQ.png?scale-down-to=512&width=2880&height=2504 512w,https://framerusercontent.com/images/KJ1D1c5cqS7ZANggrtN2ZNSXgqQ.png?scale-down-to=1024&width=2880&height=2504 1024w,https://framerusercontent.com/images/KJ1D1c5cqS7ZANggrtN2ZNSXgqQ.png?scale-down-to=2048&width=2880&height=2504 2048w,https://framerusercontent.com/images/KJ1D1c5cqS7ZANggrtN2ZNSXgqQ.png?width=2880&height=2504 2880w`,
                    },
                    className: `framer-qiua3t`,
                    "data-framer-name": `error section`,
                    layout: P,
                    children: a(`div`, {
                      className: `framer-1i1sssd`,
                      "data-framer-name": `Container`,
                      children: [
                        o(y, {
                          breakpoint: k,
                          overrides: {
                            oqc0OXb47: {
                              background: {
                                alt: `image`,
                                fit: `fill`,
                                intrinsicHeight: 860,
                                intrinsicWidth: 2276,
                                loading: v((h?.y || 0) + 0 + 0 + 248 + 0 + 0),
                                pixelHeight: 860,
                                pixelWidth: 2276,
                                sizes: `calc(min(max(${h?.width || `100vw`}, 1px), 650px) * 0.9)`,
                                src: `https://framerusercontent.com/images/KVNXrHWC6onHlL8lJK7WVdPTWow.png?width=2276&height=860`,
                                srcSet: `https://framerusercontent.com/images/KVNXrHWC6onHlL8lJK7WVdPTWow.png?scale-down-to=512&width=2276&height=860 512w,https://framerusercontent.com/images/KVNXrHWC6onHlL8lJK7WVdPTWow.png?scale-down-to=1024&width=2276&height=860 1024w,https://framerusercontent.com/images/KVNXrHWC6onHlL8lJK7WVdPTWow.png?scale-down-to=2048&width=2276&height=860 2048w,https://framerusercontent.com/images/KVNXrHWC6onHlL8lJK7WVdPTWow.png?width=2276&height=860 2276w`,
                              },
                            },
                          },
                          children: o(L, {
                            animate: G,
                            background: {
                              alt: `image`,
                              fit: `fill`,
                              intrinsicHeight: 860,
                              intrinsicWidth: 2276,
                              loading: v((h?.y || 0) + 0 + 0 + 248 + 0 + 0),
                              pixelHeight: 860,
                              pixelWidth: 2276,
                              sizes: `570px`,
                              src: `https://framerusercontent.com/images/KVNXrHWC6onHlL8lJK7WVdPTWow.png?width=2276&height=860`,
                              srcSet: `https://framerusercontent.com/images/KVNXrHWC6onHlL8lJK7WVdPTWow.png?scale-down-to=512&width=2276&height=860 512w,https://framerusercontent.com/images/KVNXrHWC6onHlL8lJK7WVdPTWow.png?scale-down-to=1024&width=2276&height=860 1024w,https://framerusercontent.com/images/KVNXrHWC6onHlL8lJK7WVdPTWow.png?scale-down-to=2048&width=2276&height=860 2048w,https://framerusercontent.com/images/KVNXrHWC6onHlL8lJK7WVdPTWow.png?width=2276&height=860 2276w`,
                            },
                            className: `framer-xotvke`,
                            "data-framer-appear-id": `xotvke`,
                            fitImageDimension: `height`,
                            initial: K,
                            optimized: !0,
                          }),
                        }),
                        a(`div`, {
                          className: `framer-lo3xy0`,
                          "data-framer-name": `Content`,
                          children: [
                            a(R, {
                              animate: q,
                              className: `framer-15karjh`,
                              "data-framer-appear-id": `15karjh`,
                              "data-framer-name": `Title`,
                              initial: K,
                              optimized: !0,
                              children: [
                                o(D, {
                                  __fromCanvasComponent: !0,
                                  children: o(t, {
                                    children: o(`p`, {
                                      className: `framer-styles-preset-gb936s`,
                                      "data-styles-preset": `qVYNhSTJJ`,
                                      dir: `auto`,
                                      children: `Oops! Page Not Found`,
                                    }),
                                  }),
                                  className: `framer-rpucel`,
                                  "data-framer-name": `Title Text`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                o(D, {
                                  __fromCanvasComponent: !0,
                                  children: o(t, {
                                    children: o(`p`, {
                                      className: `framer-styles-preset-yf5nv9`,
                                      "data-styles-preset": `ENNlAU9yc`,
                                      dir: `auto`,
                                      children: `You’re spending hours creating videos, but the results just don’t match the effort.`,
                                    }),
                                  }),
                                  className: `framer-ea4yk5`,
                                  "data-framer-name": `Reviews Text`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `bottom`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            o(ie, {
                              links: [
                                { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `pnrf0LVZ7` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                o(y, {
                                  breakpoint: k,
                                  overrides: {
                                    oqc0OXb47: {
                                      width: void 0,
                                      y: (h?.y || 0) + 0 + 0 + 248 + 0 + 213 + 0 + 228,
                                    },
                                  },
                                  children: o(T, {
                                    height: 48,
                                    width: `185px`,
                                    y: (h?.y || 0) + 0 + 0 + 248 + 0 + 295 + 0 + 228,
                                    children: o(ce, {
                                      className: `framer-cqsw66-container`,
                                      nodeId: `s6xumCf3N`,
                                      scopeId: `OfnN1JWww`,
                                      children: o(y, {
                                        breakpoint: k,
                                        overrides: {
                                          GOuEfSnDl: { qjatA2_PQ: e[1] },
                                          oqc0OXb47: { qjatA2_PQ: e[2], style: { height: `100%` } },
                                        },
                                        children: o(A, {
                                          height: `100%`,
                                          id: `s6xumCf3N`,
                                          layoutId: `s6xumCf3N`,
                                          o_X2HzHKv: `Back to Homepage`,
                                          qjatA2_PQ: e[0],
                                          style: { height: `100%`, width: `100%` },
                                          variant: J(`vgllaz4mv`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                o(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-ZarEZ.framer-xh1xwk, .framer-ZarEZ .framer-xh1xwk { display: block; }`,
        `.framer-ZarEZ.framer-i4a00v { align-content: center; align-items: center; background-color: var(--token-c5c9e562-6208-494c-a46c-1fb5738d89f6, #090401); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-ZarEZ .framer-qiua3t { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 248px 0px 180px 0px; position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-ZarEZ .framer-1i1sssd { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; max-width: 650px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-ZarEZ .framer-xotvke { flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 570px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-ZarEZ .framer-lo3xy0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ZarEZ .framer-15karjh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-ZarEZ .framer-rpucel { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-ZarEZ .framer-ea4yk5 { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 70%; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ZarEZ .framer-cqsw66-container { flex: none; height: 48px; position: relative; width: 185px; }`,
        ...P,
        ...j,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-ZarEZ.framer-i4a00v { width: 810px; }}`,
        `@media (max-width: 809.98px) { .framer-ZarEZ.framer-i4a00v { width: 390px; } .framer-ZarEZ .framer-xotvke { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; justify-content: center; padding: 0px 10px 0px 10px; width: 90%; } .framer-ZarEZ .framer-cqsw66-container { width: auto; }}`,
      ],
      `framer-ZarEZ`
    )),
    (Q.displayName = `404`),
    (Q.defaultProps = { height: 2035, width: 1200 }),
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
        ...z,
        ...p(de),
        ...p(M),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = { load: (e, t) => (t.locale, Promise.allSettled([_(A, {}, t)])) }),
    ($ = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerOfnN1JWww`,
          slots: [],
          annotations: {
            framerIntrinsicWidth: `1200`,
            framerComponentViewportWidth: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerImmutableVariables: `true`,
            framerScrollSections: `false`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"GOuEfSnDl":{"layout":["fixed","auto"]},"oqc0OXb47":{"layout":["fixed","auto"]}}}`,
            framerColorSyntax: `true`,
            framerIntrinsicHeight: `2035`,
            framerAutoSizeImages: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerContractVersion: `1`,
            framerDisplayContentsDiv: `false`,
            framerResponsiveScreen: `true`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, V as queryParamNames };
//# sourceMappingURL=odX9uzjoXWRglCG3aALq4w9kyEf9YIBJR8o5OBXYU4g.Dfb4VCPR.mjs.map
