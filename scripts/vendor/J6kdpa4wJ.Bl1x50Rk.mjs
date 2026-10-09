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
import { P as d, i as f, o as p, t as m } from "./motion.CvY1ZliN.mjs";
import {
  A as h,
  B as g,
  D as _,
  E as v,
  K as y,
  M as b,
  S as x,
  at as S,
  bt as C,
  dt as w,
  r as T,
  x as E,
  yt as D,
} from "./framer.B0980QYx.mjs";
var O,
  k,
  A,
  j = e(() => {
    (y(),
      b.loadFonts([`GF;Bricolage Grotesque-regular`, `GF;Bricolage Grotesque-700`]),
      (O = [
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
      (k = [
        `.framer-BjU97 .framer-styles-preset-1ei6ekx:not(.rich-text-wrapper), .framer-BjU97 .framer-styles-preset-1ei6ekx.rich-text-wrapper p { --framer-font-family: "Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif; --framer-font-family-bold: "Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.02em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 16px; --framer-text-alignment: start; --framer-text-color: rgba(255, 255, 255, 0.8); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1439px) and (min-width: 810px) { .framer-BjU97 .framer-styles-preset-1ei6ekx:not(.rich-text-wrapper), .framer-BjU97 .framer-styles-preset-1ei6ekx.rich-text-wrapper p { --framer-font-family: "Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif; --framer-font-family-bold: "Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.02em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 16px; --framer-text-alignment: start; --framer-text-color: rgba(255, 255, 255, 0.8); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-BjU97 .framer-styles-preset-1ei6ekx:not(.rich-text-wrapper), .framer-BjU97 .framer-styles-preset-1ei6ekx.rich-text-wrapper p { --framer-font-family: "Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif; --framer-font-family-bold: "Bricolage Grotesque", "Bricolage Grotesque Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.02em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 16px; --framer-text-alignment: start; --framer-text-color: rgba(255, 255, 255, 0.8); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (A = `framer-BjU97`));
  }),
  M,
  N,
  P,
  F,
  I,
  L,
  R,
  z,
  B = e(() => {
    (c(),
      y(),
      m(),
      r(),
      j(),
      (M = `framer-acxu9`),
      (N = { rwYFvYRil: `framer-v-nt9hqh` }),
      (P = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (F = ({ value: e, children: t }) => {
        let r = i(p),
          a = e ?? r.transition,
          s = n(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return o(p.Provider, { value: s, children: t });
      }),
      (I = d.create(t)),
      (L = ({ height: e, id: t, title: n, width: r, ...i }) => ({
        ...i,
        Mr5sjNsq8: n ?? i.Mr5sjNsq8 ?? `The Problem`,
      })),
      (R = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (z = C(
        s(function (e, n) {
          let r = u(null),
            i = n ?? r,
            s = l(),
            { activeLocale: c, setLocale: p } = w();
          S();
          let { style: m, className: g, layoutId: _, variant: v, Mr5sjNsq8: y, ...b } = L(e),
            {
              baseVariant: C,
              classNames: T,
              clearLoadingGesture: O,
              gestureHandlers: k,
              gestureVariant: j,
              isLoading: z,
              setGestureState: B,
              setVariant: V,
              variants: H,
            } = D({ defaultVariant: `rwYFvYRil`, ref: i, variant: v, variantClassNames: N }),
            U = R(e, H),
            W = h(M, A);
          return o(f, {
            id: _ ?? s,
            children: o(I, {
              animate: H,
              initial: !1,
              children: o(F, {
                value: P,
                children: o(d.div, {
                  ...b,
                  ...k,
                  className: h(W, `framer-nt9hqh`, g, T),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: U,
                  layoutId: `rwYFvYRil`,
                  ref: i,
                  style: {
                    backgroundColor: `var(--token-9a7b5b16-c52f-44cf-8d26-19e3fff7a3d6, rgb(16, 11, 8))`,
                    borderBottomLeftRadius: 100,
                    borderBottomRightRadius: 100,
                    borderTopLeftRadius: 100,
                    borderTopRightRadius: 100,
                    ...m,
                  },
                  children: a(d.div, {
                    className: `framer-48dn0k`,
                    "data-framer-name": `Content`,
                    layoutDependency: U,
                    layoutId: `mYa_3bPWm`,
                    style: {
                      backdropFilter: `blur(14px)`,
                      backgroundColor: `var(--token-c090c24e-f83c-4b12-b361-30f284142f04, rgba(255, 255, 255, 0.05))`,
                      borderBottomLeftRadius: 20,
                      borderBottomRightRadius: 20,
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                      WebkitBackdropFilter: `blur(14px)`,
                    },
                    children: [
                      o(x, {
                        className: `framer-18si4bf`,
                        fill: `var(--token-f0c343a0-cceb-44a5-b41b-3498f480f8d9, rgb(78, 58, 48)) /* {"name":"Dark Cocoa Brown"} */`,
                        intrinsicHeight: 4,
                        intrinsicWidth: 14,
                        layoutDependency: U,
                        layoutId: `wztOpQjf2`,
                        svg: `<svg width="14" height="4" viewBox="-1 -1 14 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.8672 0.871094H0.867188" stroke="#D26A2C" stroke-width="1.74026" stroke-linecap="round"/>
</svg>
`,
                        withExternalLayout: !0,
                      }),
                      o(E, {
                        __fromCanvasComponent: !0,
                        children: o(t, {
                          children: o(d.p, {
                            className: `framer-styles-preset-1ei6ekx`,
                            "data-styles-preset": `bHwADsIpE`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-857887c0-9486-4a16-b7a3-5457d6a4efbc, rgb(255, 255, 255)))`,
                            },
                            children: `The Problem`,
                          }),
                        }),
                        className: `framer-zv3a1d`,
                        "data-framer-name": `Problem Title`,
                        fonts: [`Inter`],
                        layoutDependency: U,
                        layoutId: `H9lEhKpb4`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-857887c0-9486-4a16-b7a3-5457d6a4efbc, rgb(255, 255, 255))`,
                          "--framer-paragraph-spacing": `0px`,
                          opacity: 0.8,
                        },
                        text: y,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                      o(x, {
                        className: `framer-1x2hko1`,
                        fill: `var(--token-f0c343a0-cceb-44a5-b41b-3498f480f8d9, rgb(78, 58, 48)) /* {"name":"Dark Cocoa Brown"} */`,
                        intrinsicHeight: 4,
                        intrinsicWidth: 14,
                        layoutDependency: U,
                        layoutId: `BeDfYAJuh`,
                        svg: `<svg width="14" height="4" viewBox="-1 -1 14 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.8672 0.871094H0.867188" stroke="#D26A2C" stroke-width="1.74026" stroke-linecap="round"/>
</svg>
`,
                        withExternalLayout: !0,
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-acxu9.framer-1yc1ljx, .framer-acxu9 .framer-1yc1ljx { display: block; }`,
          `.framer-acxu9.framer-nt9hqh { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 1px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-acxu9 .framer-48dn0k { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 11px 20px 11px 20px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-acxu9 .framer-18si4bf, .framer-acxu9 .framer-1x2hko1 { flex: none; height: 4px; position: relative; width: 14px; }`,
          `.framer-acxu9 .framer-zv3a1d { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          ...k,
        ],
        `framer-acxu9`
      )),
      (z.displayName = `Subtext`),
      (z.defaultProps = { height: 46, width: 181 }),
      _(z, {
        Mr5sjNsq8: {
          defaultValue: `The Problem`,
          displayTextArea: !1,
          title: `Title`,
          type: T.String,
        },
        onMr5sjNsq8Change: { changes: `Mr5sjNsq8`, type: T.ChangeHandler },
      }),
      v(
        z,
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
          ...g(O),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { O as a, k as i, B as n, j as o, A as r, z as t };
//# sourceMappingURL=J6kdpa4wJ.Bl1x50Rk.mjs.map
