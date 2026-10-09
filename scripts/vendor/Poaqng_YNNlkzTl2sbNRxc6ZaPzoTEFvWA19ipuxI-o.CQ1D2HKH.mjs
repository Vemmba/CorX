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
  w as ee,
  x as l,
} from "./react.DSZvp07T.mjs";
import { P as u, i as te, o as d, t as f } from "./motion.CvY1ZliN.mjs";
import {
  $ as p,
  A as m,
  B as h,
  E as g,
  K as _,
  N as v,
  V as y,
  _ as b,
  at as x,
  bt as S,
  ct as C,
  d as ne,
  dt as re,
  ft as ie,
  l as w,
  n as T,
  st as E,
  t as D,
  ut as O,
  x as k,
  z as A,
} from "./framer.B0980QYx.mjs";
import { d as j, f as ae, i as M, l as oe, r as N, u as P } from "./shared-lib.C80r_x6z.mjs";
import { i as F, n as I, r as se, t as ce } from "./gWwvuO7c6.Do3gKUoq.mjs";
import { n as L, t as R } from "./J6kdpa4wJ.Bl1x50Rk.mjs";
import z, { t as B } from "./ZJl6bqmTquWb6npTtA5OkyoFugA0FrTTCMFJnprx6OI.DdJFUjz3.mjs";
var V, H, U, W, G, K, q, J, Y, X, Z, Q, $;
e(() => {
  (c(),
    _(),
    f(),
    r(),
    L(),
    M(),
    ae(),
    F(),
    B(),
    (V = A(R)),
    (H = A(N)),
    (U = {
      BItZXhmDn: `(min-width: 1080px) and (max-width: 1439.98px)`,
      gUuf3niKE: `(min-width: 810px) and (max-width: 1079.98px)`,
      jy6bGhvSR: `(min-width: 1440px)`,
      VjXyYMioq: `(max-width: 809.98px)`,
    }),
    (W = []),
    (G = `framer-PXY2Q`),
    (K = {
      BItZXhmDn: `framer-v-x410o8`,
      gUuf3niKE: `framer-v-1qmu68z`,
      jy6bGhvSR: `framer-v-1ggs0ti`,
      VjXyYMioq: `framer-v-fpsayv`,
    }),
    (q = (e, t, n) => (e && t ? `position` : n)),
    (J = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Y = { Desktop: `jy6bGhvSR`, Leptop: `BItZXhmDn`, Phone: `VjXyYMioq`, Tablet: `gUuf3niKE` }),
    (X = ({ value: e }) =>
      O()
        ? null
        : o(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Z = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Y[r.variant] ?? r.variant ?? `jy6bGhvSR`,
    })),
    (Q = S(
      s(function (e, r) {
        let s = l(null),
          c = r ?? s,
          f = ee(),
          { activeLocale: p, setLocale: h } = re(),
          g = x(),
          { style: _, className: v, layoutId: S, variant: O, ...A } = Z(e);
        ie(n(() => z({}, p), [p]));
        let [j, ae] = C(O, U, !1),
          M = m(G, ce, oe),
          P = i(w)?.isLayoutTemplate,
          F = !!i(d)?.transition?.layout,
          I = q(P, F);
        return (
          E({}),
          o(w.Provider, {
            value: {
              activeVariantId: j,
              humanReadableVariantMap: Y,
              primaryVariantId: `jy6bGhvSR`,
              variantClassNames: K,
            },
            children: a(te, {
              id: S ?? f,
              children: [
                o(X, {
                  value: `html body { background: var(--token-c5c9e562-6208-494c-a46c-1fb5738d89f6, rgb(9, 4, 1)); }`,
                }),
                o(u.div, {
                  ...A,
                  className: m(M, `framer-1ggs0ti`, v),
                  ref: c,
                  style: { ..._ },
                  children: o(u.header, {
                    className: `framer-1wb5r0b`,
                    "data-framer-name": `Work Section `,
                    layout: I,
                    children: o(`div`, {
                      className: `framer-vd9e57`,
                      "data-framer-name": `Containar`,
                      children: o(b, {
                        breakpoint: j,
                        overrides: {
                          BItZXhmDn: {
                            background: {
                              alt: `Image`,
                              fit: `fill`,
                              intrinsicHeight: 8118,
                              intrinsicWidth: 4320,
                              loading: y((g?.y || 0) + 0 + 0 + 0 + 0 + 0),
                              pixelHeight: 8118,
                              pixelWidth: 4320,
                              sizes: `calc(min(max(${g?.width || `100vw`}, 1px), 1312px) - 60px)`,
                              src: `https://framerusercontent.com/images/PhitsiJw3yw0Aotq9URMkUKdI.png?width=4320&height=8118`,
                              srcSet: `https://framerusercontent.com/images/PhitsiJw3yw0Aotq9URMkUKdI.png?scale-down-to=1024&width=4320&height=8118 544w,https://framerusercontent.com/images/PhitsiJw3yw0Aotq9URMkUKdI.png?scale-down-to=2048&width=4320&height=8118 1089w,https://framerusercontent.com/images/PhitsiJw3yw0Aotq9URMkUKdI.png?scale-down-to=4096&width=4320&height=8118 2179w,https://framerusercontent.com/images/PhitsiJw3yw0Aotq9URMkUKdI.png?width=4320&height=8118 4320w`,
                            },
                          },
                          gUuf3niKE: {
                            background: {
                              alt: `Image`,
                              fit: `fill`,
                              intrinsicHeight: 8118,
                              intrinsicWidth: 4320,
                              loading: y((g?.y || 0) + 0 + 0 + 0 + 0 + 0),
                              pixelHeight: 8118,
                              pixelWidth: 4320,
                              sizes: `calc(min(max(${g?.width || `100vw`}, 1px), 1312px) - 80px)`,
                              src: `https://framerusercontent.com/images/PhitsiJw3yw0Aotq9URMkUKdI.png?width=4320&height=8118`,
                              srcSet: `https://framerusercontent.com/images/PhitsiJw3yw0Aotq9URMkUKdI.png?scale-down-to=1024&width=4320&height=8118 544w,https://framerusercontent.com/images/PhitsiJw3yw0Aotq9URMkUKdI.png?scale-down-to=2048&width=4320&height=8118 1089w,https://framerusercontent.com/images/PhitsiJw3yw0Aotq9URMkUKdI.png?scale-down-to=4096&width=4320&height=8118 2179w,https://framerusercontent.com/images/PhitsiJw3yw0Aotq9URMkUKdI.png?width=4320&height=8118 4320w`,
                            },
                          },
                        },
                        children: o(ne, {
                          background: {
                            alt: `Image`,
                            fit: `fill`,
                            intrinsicHeight: 8118,
                            intrinsicWidth: 4320,
                            loading: y((g?.y || 0) + 0 + 0 + 0 + 0 + 0),
                            pixelHeight: 8118,
                            pixelWidth: 4320,
                            sizes: `min(max(${g?.width || `100vw`}, 1px), 1312px)`,
                            src: `https://framerusercontent.com/images/PhitsiJw3yw0Aotq9URMkUKdI.png?width=4320&height=8118`,
                            srcSet: `https://framerusercontent.com/images/PhitsiJw3yw0Aotq9URMkUKdI.png?scale-down-to=1024&width=4320&height=8118 544w,https://framerusercontent.com/images/PhitsiJw3yw0Aotq9URMkUKdI.png?scale-down-to=2048&width=4320&height=8118 1089w,https://framerusercontent.com/images/PhitsiJw3yw0Aotq9URMkUKdI.png?scale-down-to=4096&width=4320&height=8118 2179w,https://framerusercontent.com/images/PhitsiJw3yw0Aotq9URMkUKdI.png?width=4320&height=8118 4320w`,
                          },
                          className: `framer-139fqeo`,
                          "data-framer-name": `Content`,
                          children: o(`div`, {
                            className: `framer-4eu21i`,
                            "data-framer-name": `Project`,
                            children: a(`div`, {
                              className: `framer-140loxu`,
                              "data-framer-name": `Title`,
                              children: [
                                o(D, {
                                  height: 46,
                                  y: (g?.y || 0) + 0 + 0 + 0 + 0 + 0 + 224 + 0 + 0 + 0 + 0 + 0,
                                  children: o(T, {
                                    className: `framer-m8bq5q-container`,
                                    nodeId: `kOwQKzx2q`,
                                    scopeId: `dTSdPGpXg`,
                                    children: o(R, {
                                      height: `100%`,
                                      id: `kOwQKzx2q`,
                                      layoutId: `kOwQKzx2q`,
                                      Mr5sjNsq8: `Our works`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                                a(`div`, {
                                  className: `framer-1fcf442`,
                                  "data-framer-name": `Text`,
                                  children: [
                                    o(k, {
                                      __fromCanvasComponent: !0,
                                      children: o(t, {
                                        children: o(`h2`, {
                                          className: `framer-styles-preset-qlu113`,
                                          "data-styles-preset": `gWwvuO7c6`,
                                          dir: `auto`,
                                          style: { "--framer-text-alignment": `start` },
                                          children: `Coming Soon`,
                                        }),
                                      }),
                                      className: `framer-4mivgw`,
                                      "data-framer-name": `Title Text`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    o(k, {
                                      __fromCanvasComponent: !0,
                                      children: o(t, {
                                        children: o(`p`, {
                                          className: `framer-styles-preset-1ei6ekx`,
                                          "data-styles-preset": `bHwADsIpE`,
                                          dir: `auto`,
                                          style: { "--framer-text-alignment": `center` },
                                          children: `We’re putting together our best projects. Check back shortly.`,
                                        }),
                                      }),
                                      className: `framer-1mldwt5`,
                                      "data-framer-name": `Reviews Text`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `bottom`,
                                      withExternalLayout: !0,
                                    }),
                                    o(D, {
                                      height: 48,
                                      y:
                                        (g?.y || 0) +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        224 +
                                        0 +
                                        0 +
                                        0 +
                                        0 +
                                        78 +
                                        0 +
                                        271.2,
                                      children: o(T, {
                                        className: `framer-vyk7na-container`,
                                        nodeId: `mhNEXkFzT`,
                                        scopeId: `dTSdPGpXg`,
                                        children: o(N, {
                                          height: `100%`,
                                          id: `mhNEXkFzT`,
                                          layoutId: `mhNEXkFzT`,
                                          o_X2HzHKv: `Get in Touch`,
                                          qjatA2_PQ: `mailto:business@corx.club`,
                                          style: { height: `100%` },
                                          variant: J(`vgllaz4mv`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
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
        `.framer-PXY2Q.framer-mmbaci, .framer-PXY2Q .framer-mmbaci { display: block; }`,
        `.framer-PXY2Q.framer-1ggs0ti { align-content: center; align-items: center; background-color: var(--token-c5c9e562-6208-494c-a46c-1fb5738d89f6, #090401); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1440px; }`,
        `.framer-PXY2Q .framer-1wb5r0b { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-PXY2Q .framer-vd9e57 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; max-width: 1312px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; z-index: 1; }`,
        `.framer-PXY2Q .framer-139fqeo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 224px 0px 0px 0px; position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-PXY2Q .framer-4eu21i { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-PXY2Q .framer-140loxu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; max-width: 888px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-PXY2Q .framer-m8bq5q-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-PXY2Q .framer-1fcf442 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 600px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-PXY2Q .framer-4mivgw { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-PXY2Q .framer-1mldwt5 { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 484px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-PXY2Q .framer-vyk7na-container { flex: none; height: 48px; position: relative; width: auto; }`,
        ...I,
        ...P,
        `@media (min-width: 810px) and (max-width: 1079.98px) { .framer-PXY2Q.framer-1ggs0ti { width: 810px; } .framer-PXY2Q .framer-vd9e57 { padding: 0px 40px 0px 40px; }}`,
        `@media (max-width: 809.98px) { .framer-PXY2Q.framer-1ggs0ti { width: 390px; } .framer-PXY2Q .framer-139fqeo { padding: 224px 20px 0px 20px; }}`,
        `@media (min-width: 1080px) and (max-width: 1439.98px) { .framer-PXY2Q.framer-1ggs0ti { width: 1080px; } .framer-PXY2Q .framer-vd9e57 { padding: 0px 30px 0px 30px; }}`,
      ],
      `framer-PXY2Q`
    )),
    (Q.displayName = `Home`),
    (Q.defaultProps = { height: 4120, width: 1440 }),
    g(
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
        ...V,
        ...H,
        ...h(se),
        ...h(j),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = { load: (e, t) => p([() => v(R, {}, t), () => v(N, {}, t)], t) }),
    ($ = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerdTSdPGpXg`,
          slots: [],
          annotations: {
            framerAutoSizeImages: `true`,
            framerComponentViewportWidth: `true`,
            framerColorSyntax: `true`,
            framerIntrinsicWidth: `1440`,
            framerContractVersion: `1`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"gUuf3niKE":{"layout":["fixed","auto"]},"VjXyYMioq":{"layout":["fixed","auto"]},"BItZXhmDn":{"layout":["fixed","auto"]}}}`,
            framerScrollSections: `false`,
            framerAcceptsLayoutTemplate: `true`,
            framerImmutableVariables: `true`,
            framerDisplayContentsDiv: `false`,
            framerResponsiveScreen: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerIntrinsicHeight: `4120`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, W as queryParamNames };
//# sourceMappingURL=Poaqng_YNNlkzTl2sbNRxc6ZaPzoTEFvWA19ipuxI-o.CQ1D2HKH.mjs.map
