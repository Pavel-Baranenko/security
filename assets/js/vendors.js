"use strict";
(self.webpackChunksecuritylab = self.webpackChunksecuritylab || []).push([
  [216],
  {
    228: function (e, t, s) {
      function i(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function r(e, t) {
        void 0 === e && (e = {}),
          void 0 === t && (t = {}),
          Object.keys(t).forEach((s) => {
            void 0 === e[s]
              ? (e[s] = t[s])
              : i(t[s]) &&
                i(e[s]) &&
                Object.keys(t[s]).length > 0 &&
                r(e[s], t[s]);
          });
      }
      s.d(t, {
        Z: function () {
          return U;
        },
      });
      const n = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: "" },
        querySelector() {
          return null;
        },
        querySelectorAll() {
          return [];
        },
        getElementById() {
          return null;
        },
        createEvent() {
          return { initEvent() {} };
        },
        createElement() {
          return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName() {
              return [];
            },
          };
        },
        createElementNS() {
          return {};
        },
        importNode() {
          return null;
        },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function a() {
        const e = "undefined" != typeof document ? document : {};
        return r(e, n), e;
      }
      const o = {
        document: n,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle() {
          return {
            getPropertyValue() {
              return "";
            },
          };
        },
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia() {
          return {};
        },
        requestAnimationFrame(e) {
          return "undefined" == typeof setTimeout
            ? (e(), null)
            : setTimeout(e, 0);
        },
        cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e);
        },
      };
      function l() {
        const e = "undefined" != typeof window ? window : {};
        return r(e, o), e;
      }
      function d(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      }
      function c() {
        return Date.now();
      }
      function p(e, t) {
        void 0 === t && (t = "x");
        const s = l();
        let i, r, n;
        const a = (function (e) {
          const t = l();
          let s;
          return (
            t.getComputedStyle && (s = t.getComputedStyle(e, null)),
            !s && e.currentStyle && (s = e.currentStyle),
            s || (s = e.style),
            s
          );
        })(e);
        return (
          s.WebKitCSSMatrix
            ? ((r = a.transform || a.webkitTransform),
              r.split(",").length > 6 &&
                (r = r
                  .split(", ")
                  .map((e) => e.replace(",", "."))
                  .join(", ")),
              (n = new s.WebKitCSSMatrix("none" === r ? "" : r)))
            : ((n =
                a.MozTransform ||
                a.OTransform ||
                a.MsTransform ||
                a.msTransform ||
                a.transform ||
                a
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,")),
              (i = n.toString().split(","))),
          "x" === t &&
            (r = s.WebKitCSSMatrix
              ? n.m41
              : 16 === i.length
              ? parseFloat(i[12])
              : parseFloat(i[4])),
          "y" === t &&
            (r = s.WebKitCSSMatrix
              ? n.m42
              : 16 === i.length
              ? parseFloat(i[13])
              : parseFloat(i[5])),
          r || 0
        );
      }
      function u(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function f() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ["__proto__", "constructor", "prototype"];
        for (let i = 1; i < arguments.length; i += 1) {
          const r = i < 0 || arguments.length <= i ? void 0 : arguments[i];
          if (
            null != r &&
            ((s = r),
            !("undefined" != typeof window && void 0 !== window.HTMLElement
              ? s instanceof HTMLElement
              : s && (1 === s.nodeType || 11 === s.nodeType)))
          ) {
            const s = Object.keys(Object(r)).filter((e) => t.indexOf(e) < 0);
            for (let t = 0, i = s.length; t < i; t += 1) {
              const i = s[t],
                n = Object.getOwnPropertyDescriptor(r, i);
              void 0 !== n &&
                n.enumerable &&
                (u(e[i]) && u(r[i])
                  ? r[i].__swiper__
                    ? (e[i] = r[i])
                    : f(e[i], r[i])
                  : !u(e[i]) && u(r[i])
                  ? ((e[i] = {}),
                    r[i].__swiper__ ? (e[i] = r[i]) : f(e[i], r[i]))
                  : (e[i] = r[i]));
            }
          }
        }
        var s;
        return e;
      }
      function h(e, t, s) {
        e.style.setProperty(t, s);
      }
      function m(e) {
        let { swiper: t, targetPosition: s, side: i } = e;
        const r = l(),
          n = -t.translate;
        let a,
          o = null;
        const d = t.params.speed;
        (t.wrapperEl.style.scrollSnapType = "none"),
          r.cancelAnimationFrame(t.cssModeFrameID);
        const c = s > n ? "next" : "prev",
          p = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
          u = () => {
            (a = new Date().getTime()), null === o && (o = a);
            const e = Math.max(Math.min((a - o) / d, 1), 0),
              l = 0.5 - Math.cos(e * Math.PI) / 2;
            let c = n + l * (s - n);
            if ((p(c, s) && (c = s), t.wrapperEl.scrollTo({ [i]: c }), p(c, s)))
              return (
                (t.wrapperEl.style.overflow = "hidden"),
                (t.wrapperEl.style.scrollSnapType = ""),
                setTimeout(() => {
                  (t.wrapperEl.style.overflow = ""),
                    t.wrapperEl.scrollTo({ [i]: c });
                }),
                void r.cancelAnimationFrame(t.cssModeFrameID)
              );
            t.cssModeFrameID = r.requestAnimationFrame(u);
          };
        u();
      }
      function v(e, t) {
        return (
          void 0 === t && (t = ""), [...e.children].filter((e) => e.matches(t))
        );
      }
      function g(e, t) {
        return l().getComputedStyle(e, null).getPropertyValue(t);
      }
      function w(e) {
        let t,
          s = e;
        if (s) {
          for (t = 0; null !== (s = s.previousSibling); )
            1 === s.nodeType && (t += 1);
          return t;
        }
      }
      function S(e, t, s) {
        const i = l();
        return s
          ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
              parseFloat(
                i
                  .getComputedStyle(e, null)
                  .getPropertyValue(
                    "width" === t ? "margin-right" : "margin-top"
                  )
              ) +
              parseFloat(
                i
                  .getComputedStyle(e, null)
                  .getPropertyValue(
                    "width" === t ? "margin-left" : "margin-bottom"
                  )
              )
          : e.offsetWidth;
      }
      let T, b, x;
      function y() {
        return (
          T ||
            (T = (function () {
              const e = l(),
                t = a();
              return {
                smoothScroll:
                  t.documentElement &&
                  t.documentElement.style &&
                  "scrollBehavior" in t.documentElement.style,
                touch: !!(
                  "ontouchstart" in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
              };
            })()),
          T
        );
      }
      function E(e) {
        return (
          void 0 === e && (e = {}),
          b ||
            (b = (function (e) {
              let { userAgent: t } = void 0 === e ? {} : e;
              const s = y(),
                i = l(),
                r = i.navigator.platform,
                n = t || i.navigator.userAgent,
                a = { ios: !1, android: !1 },
                o = i.screen.width,
                d = i.screen.height,
                c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
              let p = n.match(/(iPad).*OS\s([\d_]+)/);
              const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
                f = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                h = "Win32" === r;
              let m = "MacIntel" === r;
              return (
                !p &&
                  m &&
                  s.touch &&
                  [
                    "1024x1366",
                    "1366x1024",
                    "834x1194",
                    "1194x834",
                    "834x1112",
                    "1112x834",
                    "768x1024",
                    "1024x768",
                    "820x1180",
                    "1180x820",
                    "810x1080",
                    "1080x810",
                  ].indexOf(`${o}x${d}`) >= 0 &&
                  ((p = n.match(/(Version)\/([\d.]+)/)),
                  p || (p = [0, 1, "13_0_0"]),
                  (m = !1)),
                c && !h && ((a.os = "android"), (a.android = !0)),
                (p || f || u) && ((a.os = "ios"), (a.ios = !0)),
                a
              );
            })(e)),
          b
        );
      }
      function M() {
        return (
          x ||
            (x = (function () {
              const e = l();
              let t = !1;
              function s() {
                const t = e.navigator.userAgent.toLowerCase();
                return (
                  t.indexOf("safari") >= 0 &&
                  t.indexOf("chrome") < 0 &&
                  t.indexOf("android") < 0
                );
              }
              if (s()) {
                const s = String(e.navigator.userAgent);
                if (s.includes("Version/")) {
                  const [e, i] = s
                    .split("Version/")[1]
                    .split(" ")[0]
                    .split(".")
                    .map((e) => Number(e));
                  t = e < 16 || (16 === e && i < 2);
                }
              }
              return {
                isSafari: t || s(),
                needPerspectiveFix: t,
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                  e.navigator.userAgent
                ),
              };
            })()),
          x
        );
      }
      var C = {
        on(e, t, s) {
          const i = this;
          if (!i.eventsListeners || i.destroyed) return i;
          if ("function" != typeof t) return i;
          const r = s ? "unshift" : "push";
          return (
            e.split(" ").forEach((e) => {
              i.eventsListeners[e] || (i.eventsListeners[e] = []),
                i.eventsListeners[e][r](t);
            }),
            i
          );
        },
        once(e, t, s) {
          const i = this;
          if (!i.eventsListeners || i.destroyed) return i;
          if ("function" != typeof t) return i;
          function r() {
            i.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
            for (var s = arguments.length, n = new Array(s), a = 0; a < s; a++)
              n[a] = arguments[a];
            t.apply(i, n);
          }
          return (r.__emitterProxy = t), i.on(e, r, s);
        },
        onAny(e, t) {
          const s = this;
          if (!s.eventsListeners || s.destroyed) return s;
          if ("function" != typeof e) return s;
          const i = t ? "unshift" : "push";
          return (
            s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
          );
        },
        offAny(e) {
          const t = this;
          if (!t.eventsListeners || t.destroyed) return t;
          if (!t.eventsAnyListeners) return t;
          const s = t.eventsAnyListeners.indexOf(e);
          return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
        },
        off(e, t) {
          const s = this;
          return !s.eventsListeners || s.destroyed
            ? s
            : s.eventsListeners
            ? (e.split(" ").forEach((e) => {
                void 0 === t
                  ? (s.eventsListeners[e] = [])
                  : s.eventsListeners[e] &&
                    s.eventsListeners[e].forEach((i, r) => {
                      (i === t ||
                        (i.__emitterProxy && i.__emitterProxy === t)) &&
                        s.eventsListeners[e].splice(r, 1);
                    });
              }),
              s)
            : s;
        },
        emit() {
          const e = this;
          if (!e.eventsListeners || e.destroyed) return e;
          if (!e.eventsListeners) return e;
          let t, s, i;
          for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
            n[a] = arguments[a];
          "string" == typeof n[0] || Array.isArray(n[0])
            ? ((t = n[0]), (s = n.slice(1, n.length)), (i = e))
            : ((t = n[0].events), (s = n[0].data), (i = n[0].context || e)),
            s.unshift(i);
          return (
            (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
              e.eventsAnyListeners &&
                e.eventsAnyListeners.length &&
                e.eventsAnyListeners.forEach((e) => {
                  e.apply(i, [t, ...s]);
                }),
                e.eventsListeners &&
                  e.eventsListeners[t] &&
                  e.eventsListeners[t].forEach((e) => {
                    e.apply(i, s);
                  });
            }),
            e
          );
        },
      };
      const P = (e, t) => {
          if (!e || e.destroyed || !e.params) return;
          const s = t.closest(
            e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
          );
          if (s) {
            const t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
            t && t.remove();
          }
        },
        k = (e, t) => {
          if (!e.slides[t]) return;
          const s = e.slides[t].querySelector('[loading="lazy"]');
          s && s.removeAttribute("loading");
        },
        L = (e) => {
          if (!e || e.destroyed || !e.params) return;
          let t = e.params.lazyPreloadPrevNext;
          const s = e.slides.length;
          if (!s || !t || t < 0) return;
          t = Math.min(t, s);
          const i =
              "auto" === e.params.slidesPerView
                ? e.slidesPerViewDynamic()
                : Math.ceil(e.params.slidesPerView),
            r = e.activeIndex;
          if (e.params.grid && e.params.grid.rows > 1) {
            const s = r,
              n = [s - t];
            return (
              n.push(...Array.from({ length: t }).map((e, t) => s + i + t)),
              void e.slides.forEach((t, s) => {
                n.includes(t.column) && k(e, s);
              })
            );
          }
          const n = r + i - 1;
          if (e.params.rewind || e.params.loop)
            for (let i = r - t; i <= n + t; i += 1) {
              const t = ((i % s) + s) % s;
              (t < r || t > n) && k(e, t);
            }
          else
            for (
              let i = Math.max(r - t, 0);
              i <= Math.min(n + t, s - 1);
              i += 1
            )
              i !== r && (i > n || i < r) && k(e, i);
        };
      var I = {
        updateSize: function () {
          const e = this;
          let t, s;
          const i = e.el;
          (t =
            void 0 !== e.params.width && null !== e.params.width
              ? e.params.width
              : i.clientWidth),
            (s =
              void 0 !== e.params.height && null !== e.params.height
                ? e.params.height
                : i.clientHeight),
            (0 === t && e.isHorizontal()) ||
              (0 === s && e.isVertical()) ||
              ((t =
                t -
                parseInt(g(i, "padding-left") || 0, 10) -
                parseInt(g(i, "padding-right") || 0, 10)),
              (s =
                s -
                parseInt(g(i, "padding-top") || 0, 10) -
                parseInt(g(i, "padding-bottom") || 0, 10)),
              Number.isNaN(t) && (t = 0),
              Number.isNaN(s) && (s = 0),
              Object.assign(e, {
                width: t,
                height: s,
                size: e.isHorizontal() ? t : s,
              }));
        },
        updateSlides: function () {
          const e = this;
          function t(t) {
            return e.isHorizontal()
              ? t
              : {
                  width: "height",
                  "margin-top": "margin-left",
                  "margin-bottom ": "margin-right",
                  "margin-left": "margin-top",
                  "margin-right": "margin-bottom",
                  "padding-left": "padding-top",
                  "padding-right": "padding-bottom",
                  marginRight: "marginBottom",
                }[t];
          }
          function s(e, s) {
            return parseFloat(e.getPropertyValue(t(s)) || 0);
          }
          const i = e.params,
            {
              wrapperEl: r,
              slidesEl: n,
              size: a,
              rtlTranslate: o,
              wrongRTL: l,
            } = e,
            d = e.virtual && i.virtual.enabled,
            c = d ? e.virtual.slides.length : e.slides.length,
            p = v(n, `.${e.params.slideClass}, swiper-slide`),
            u = d ? e.virtual.slides.length : p.length;
          let f = [];
          const m = [],
            w = [];
          let T = i.slidesOffsetBefore;
          "function" == typeof T && (T = i.slidesOffsetBefore.call(e));
          let b = i.slidesOffsetAfter;
          "function" == typeof b && (b = i.slidesOffsetAfter.call(e));
          const x = e.snapGrid.length,
            y = e.slidesGrid.length;
          let E = i.spaceBetween,
            M = -T,
            C = 0,
            P = 0;
          if (void 0 === a) return;
          "string" == typeof E && E.indexOf("%") >= 0
            ? (E = (parseFloat(E.replace("%", "")) / 100) * a)
            : "string" == typeof E && (E = parseFloat(E)),
            (e.virtualSize = -E),
            p.forEach((e) => {
              o ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
                (e.style.marginBottom = ""),
                (e.style.marginTop = "");
            }),
            i.centeredSlides &&
              i.cssMode &&
              (h(r, "--swiper-centered-offset-before", ""),
              h(r, "--swiper-centered-offset-after", ""));
          const k = i.grid && i.grid.rows > 1 && e.grid;
          let L;
          k && e.grid.initSlides(u);
          const I =
            "auto" === i.slidesPerView &&
            i.breakpoints &&
            Object.keys(i.breakpoints).filter(
              (e) => void 0 !== i.breakpoints[e].slidesPerView
            ).length > 0;
          for (let r = 0; r < u; r += 1) {
            let n;
            if (
              ((L = 0),
              p[r] && (n = p[r]),
              k && e.grid.updateSlide(r, n, u, t),
              !p[r] || "none" !== g(n, "display"))
            ) {
              if ("auto" === i.slidesPerView) {
                I && (p[r].style[t("width")] = "");
                const a = getComputedStyle(n),
                  o = n.style.transform,
                  l = n.style.webkitTransform;
                if (
                  (o && (n.style.transform = "none"),
                  l && (n.style.webkitTransform = "none"),
                  i.roundLengths)
                )
                  L = e.isHorizontal() ? S(n, "width", !0) : S(n, "height", !0);
                else {
                  const e = s(a, "width"),
                    t = s(a, "padding-left"),
                    i = s(a, "padding-right"),
                    r = s(a, "margin-left"),
                    o = s(a, "margin-right"),
                    l = a.getPropertyValue("box-sizing");
                  if (l && "border-box" === l) L = e + r + o;
                  else {
                    const { clientWidth: s, offsetWidth: a } = n;
                    L = e + t + i + r + o + (a - s);
                  }
                }
                o && (n.style.transform = o),
                  l && (n.style.webkitTransform = l),
                  i.roundLengths && (L = Math.floor(L));
              } else
                (L = (a - (i.slidesPerView - 1) * E) / i.slidesPerView),
                  i.roundLengths && (L = Math.floor(L)),
                  p[r] && (p[r].style[t("width")] = `${L}px`);
              p[r] && (p[r].swiperSlideSize = L),
                w.push(L),
                i.centeredSlides
                  ? ((M = M + L / 2 + C / 2 + E),
                    0 === C && 0 !== r && (M = M - a / 2 - E),
                    0 === r && (M = M - a / 2 - E),
                    Math.abs(M) < 0.001 && (M = 0),
                    i.roundLengths && (M = Math.floor(M)),
                    P % i.slidesPerGroup == 0 && f.push(M),
                    m.push(M))
                  : (i.roundLengths && (M = Math.floor(M)),
                    (P - Math.min(e.params.slidesPerGroupSkip, P)) %
                      e.params.slidesPerGroup ==
                      0 && f.push(M),
                    m.push(M),
                    (M = M + L + E)),
                (e.virtualSize += L + E),
                (C = L),
                (P += 1);
            }
          }
          if (
            ((e.virtualSize = Math.max(e.virtualSize, a) + b),
            o &&
              l &&
              ("slide" === i.effect || "coverflow" === i.effect) &&
              (r.style.width = `${e.virtualSize + E}px`),
            i.setWrapperSize &&
              (r.style[t("width")] = `${e.virtualSize + E}px`),
            k && e.grid.updateWrapperSize(L, f, t),
            !i.centeredSlides)
          ) {
            const t = [];
            for (let s = 0; s < f.length; s += 1) {
              let r = f[s];
              i.roundLengths && (r = Math.floor(r)),
                f[s] <= e.virtualSize - a && t.push(r);
            }
            (f = t),
              Math.floor(e.virtualSize - a) - Math.floor(f[f.length - 1]) > 1 &&
                f.push(e.virtualSize - a);
          }
          if (d && i.loop) {
            const t = w[0] + E;
            if (i.slidesPerGroup > 1) {
              const s = Math.ceil(
                  (e.virtual.slidesBefore + e.virtual.slidesAfter) /
                    i.slidesPerGroup
                ),
                r = t * i.slidesPerGroup;
              for (let e = 0; e < s; e += 1) f.push(f[f.length - 1] + r);
            }
            for (
              let s = 0;
              s < e.virtual.slidesBefore + e.virtual.slidesAfter;
              s += 1
            )
              1 === i.slidesPerGroup && f.push(f[f.length - 1] + t),
                m.push(m[m.length - 1] + t),
                (e.virtualSize += t);
          }
          if ((0 === f.length && (f = [0]), 0 !== E)) {
            const s = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
            p.filter(
              (e, t) => !(i.cssMode && !i.loop) || t !== p.length - 1
            ).forEach((e) => {
              e.style[s] = `${E}px`;
            });
          }
          if (i.centeredSlides && i.centeredSlidesBounds) {
            let e = 0;
            w.forEach((t) => {
              e += t + (E || 0);
            }),
              (e -= E);
            const t = e - a;
            f = f.map((e) => (e <= 0 ? -T : e > t ? t + b : e));
          }
          if (i.centerInsufficientSlides) {
            let e = 0;
            if (
              (w.forEach((t) => {
                e += t + (E || 0);
              }),
              (e -= E),
              e < a)
            ) {
              const t = (a - e) / 2;
              f.forEach((e, s) => {
                f[s] = e - t;
              }),
                m.forEach((e, s) => {
                  m[s] = e + t;
                });
            }
          }
          if (
            (Object.assign(e, {
              slides: p,
              snapGrid: f,
              slidesGrid: m,
              slidesSizesGrid: w,
            }),
            i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
          ) {
            h(r, "--swiper-centered-offset-before", -f[0] + "px"),
              h(
                r,
                "--swiper-centered-offset-after",
                e.size / 2 - w[w.length - 1] / 2 + "px"
              );
            const t = -e.snapGrid[0],
              s = -e.slidesGrid[0];
            (e.snapGrid = e.snapGrid.map((e) => e + t)),
              (e.slidesGrid = e.slidesGrid.map((e) => e + s));
          }
          if (
            (u !== c && e.emit("slidesLengthChange"),
            f.length !== x &&
              (e.params.watchOverflow && e.checkOverflow(),
              e.emit("snapGridLengthChange")),
            m.length !== y && e.emit("slidesGridLengthChange"),
            i.watchSlidesProgress && e.updateSlidesOffset(),
            !(d || i.cssMode || ("slide" !== i.effect && "fade" !== i.effect)))
          ) {
            const t = `${i.containerModifierClass}backface-hidden`,
              s = e.el.classList.contains(t);
            u <= i.maxBackfaceHiddenSlides
              ? s || e.el.classList.add(t)
              : s && e.el.classList.remove(t);
          }
        },
        updateAutoHeight: function (e) {
          const t = this,
            s = [],
            i = t.virtual && t.params.virtual.enabled;
          let r,
            n = 0;
          "number" == typeof e
            ? t.setTransition(e)
            : !0 === e && t.setTransition(t.params.speed);
          const a = (e) =>
            i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)
              (t.visibleSlides || []).forEach((e) => {
                s.push(e);
              });
            else
              for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
                const e = t.activeIndex + r;
                if (e > t.slides.length && !i) break;
                s.push(a(e));
              }
          else s.push(a(t.activeIndex));
          for (r = 0; r < s.length; r += 1)
            if (void 0 !== s[r]) {
              const e = s[r].offsetHeight;
              n = e > n ? e : n;
            }
          (n || 0 === n) && (t.wrapperEl.style.height = `${n}px`);
        },
        updateSlidesOffset: function () {
          const e = this,
            t = e.slides,
            s = e.isElement
              ? e.isHorizontal()
                ? e.wrapperEl.offsetLeft
                : e.wrapperEl.offsetTop
              : 0;
          for (let i = 0; i < t.length; i += 1)
            t[i].swiperSlideOffset =
              (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) -
              s -
              e.cssOverflowAdjustment();
        },
        updateSlidesProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          const t = this,
            s = t.params,
            { slides: i, rtlTranslate: r, snapGrid: n } = t;
          if (0 === i.length) return;
          void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
          let a = -e;
          r && (a = e),
            i.forEach((e) => {
              e.classList.remove(s.slideVisibleClass);
            }),
            (t.visibleSlidesIndexes = []),
            (t.visibleSlides = []);
          let o = s.spaceBetween;
          "string" == typeof o && o.indexOf("%") >= 0
            ? (o = (parseFloat(o.replace("%", "")) / 100) * t.size)
            : "string" == typeof o && (o = parseFloat(o));
          for (let e = 0; e < i.length; e += 1) {
            const l = i[e];
            let d = l.swiperSlideOffset;
            s.cssMode && s.centeredSlides && (d -= i[0].swiperSlideOffset);
            const c =
                (a + (s.centeredSlides ? t.minTranslate() : 0) - d) /
                (l.swiperSlideSize + o),
              p =
                (a - n[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) /
                (l.swiperSlideSize + o),
              u = -(a - d),
              f = u + t.slidesSizesGrid[e];
            ((u >= 0 && u < t.size - 1) ||
              (f > 1 && f <= t.size) ||
              (u <= 0 && f >= t.size)) &&
              (t.visibleSlides.push(l),
              t.visibleSlidesIndexes.push(e),
              i[e].classList.add(s.slideVisibleClass)),
              (l.progress = r ? -c : c),
              (l.originalProgress = r ? -p : p);
          }
        },
        updateProgress: function (e) {
          const t = this;
          if (void 0 === e) {
            const s = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * s) || 0;
          }
          const s = t.params,
            i = t.maxTranslate() - t.minTranslate();
          let { progress: r, isBeginning: n, isEnd: a, progressLoop: o } = t;
          const l = n,
            d = a;
          if (0 === i) (r = 0), (n = !0), (a = !0);
          else {
            r = (e - t.minTranslate()) / i;
            const s = Math.abs(e - t.minTranslate()) < 1,
              o = Math.abs(e - t.maxTranslate()) < 1;
            (n = s || r <= 0), (a = o || r >= 1), s && (r = 0), o && (r = 1);
          }
          if (s.loop) {
            const s = t.getSlideIndexByData(0),
              i = t.getSlideIndexByData(t.slides.length - 1),
              r = t.slidesGrid[s],
              n = t.slidesGrid[i],
              a = t.slidesGrid[t.slidesGrid.length - 1],
              l = Math.abs(e);
            (o = l >= r ? (l - r) / a : (l + a - n) / a), o > 1 && (o -= 1);
          }
          Object.assign(t, {
            progress: r,
            progressLoop: o,
            isBeginning: n,
            isEnd: a,
          }),
            (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
              t.updateSlidesProgress(e),
            n && !l && t.emit("reachBeginning toEdge"),
            a && !d && t.emit("reachEnd toEdge"),
            ((l && !n) || (d && !a)) && t.emit("fromEdge"),
            t.emit("progress", r);
        },
        updateSlidesClasses: function () {
          const e = this,
            { slides: t, params: s, slidesEl: i, activeIndex: r } = e,
            n = e.virtual && s.virtual.enabled,
            a = (e) => v(i, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
          let o;
          if (
            (t.forEach((e) => {
              e.classList.remove(
                s.slideActiveClass,
                s.slideNextClass,
                s.slidePrevClass
              );
            }),
            n)
          )
            if (s.loop) {
              let t = r - e.virtual.slidesBefore;
              t < 0 && (t = e.virtual.slides.length + t),
                t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
                (o = a(`[data-swiper-slide-index="${t}"]`));
            } else o = a(`[data-swiper-slide-index="${r}"]`);
          else o = t[r];
          if (o) {
            o.classList.add(s.slideActiveClass);
            let e = (function (e, t) {
              const s = [];
              for (; e.nextElementSibling; ) {
                const i = e.nextElementSibling;
                t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
              }
              return s;
            })(o, `.${s.slideClass}, swiper-slide`)[0];
            s.loop && !e && (e = t[0]), e && e.classList.add(s.slideNextClass);
            let i = (function (e, t) {
              const s = [];
              for (; e.previousElementSibling; ) {
                const i = e.previousElementSibling;
                t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
              }
              return s;
            })(o, `.${s.slideClass}, swiper-slide`)[0];
            s.loop && 0 === !i && (i = t[t.length - 1]),
              i && i.classList.add(s.slidePrevClass);
          }
          e.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          const t = this,
            s = t.rtlTranslate ? t.translate : -t.translate,
            {
              snapGrid: i,
              params: r,
              activeIndex: n,
              realIndex: a,
              snapIndex: o,
            } = t;
          let l,
            d = e;
          const c = (e) => {
            let s = e - t.virtual.slidesBefore;
            return (
              s < 0 && (s = t.virtual.slides.length + s),
              s >= t.virtual.slides.length && (s -= t.virtual.slides.length),
              s
            );
          };
          if (
            (void 0 === d &&
              (d = (function (e) {
                const { slidesGrid: t, params: s } = e,
                  i = e.rtlTranslate ? e.translate : -e.translate;
                let r;
                for (let e = 0; e < t.length; e += 1)
                  void 0 !== t[e + 1]
                    ? i >= t[e] && i < t[e + 1] - (t[e + 1] - t[e]) / 2
                      ? (r = e)
                      : i >= t[e] && i < t[e + 1] && (r = e + 1)
                    : i >= t[e] && (r = e);
                return (
                  s.normalizeSlideIndex && (r < 0 || void 0 === r) && (r = 0), r
                );
              })(t)),
            i.indexOf(s) >= 0)
          )
            l = i.indexOf(s);
          else {
            const e = Math.min(r.slidesPerGroupSkip, d);
            l = e + Math.floor((d - e) / r.slidesPerGroup);
          }
          if ((l >= i.length && (l = i.length - 1), d === n))
            return (
              l !== o && ((t.snapIndex = l), t.emit("snapIndexChange")),
              void (
                t.params.loop &&
                t.virtual &&
                t.params.virtual.enabled &&
                (t.realIndex = c(d))
              )
            );
          let p;
          (p =
            t.virtual && r.virtual.enabled && r.loop
              ? c(d)
              : t.slides[d]
              ? parseInt(
                  t.slides[d].getAttribute("data-swiper-slide-index") || d,
                  10
                )
              : d),
            Object.assign(t, {
              previousSnapIndex: o,
              snapIndex: l,
              previousRealIndex: a,
              realIndex: p,
              previousIndex: n,
              activeIndex: d,
            }),
            t.initialized && L(t),
            t.emit("activeIndexChange"),
            t.emit("snapIndexChange"),
            a !== p && t.emit("realIndexChange"),
            (t.initialized || t.params.runCallbacksOnInit) &&
              t.emit("slideChange");
        },
        updateClickedSlide: function (e) {
          const t = this,
            s = t.params,
            i = e.closest(`.${s.slideClass}, swiper-slide`);
          let r,
            n = !1;
          if (i)
            for (let e = 0; e < t.slides.length; e += 1)
              if (t.slides[e] === i) {
                (n = !0), (r = e);
                break;
              }
          if (!i || !n)
            return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
          (t.clickedSlide = i),
            t.virtual && t.params.virtual.enabled
              ? (t.clickedIndex = parseInt(
                  i.getAttribute("data-swiper-slide-index"),
                  10
                ))
              : (t.clickedIndex = r),
            s.slideToClickedSlide &&
              void 0 !== t.clickedIndex &&
              t.clickedIndex !== t.activeIndex &&
              t.slideToClickedSlide();
        },
      };
      var O = {
        getTranslate: function (e) {
          void 0 === e && (e = this.isHorizontal() ? "x" : "y");
          const {
            params: t,
            rtlTranslate: s,
            translate: i,
            wrapperEl: r,
          } = this;
          if (t.virtualTranslate) return s ? -i : i;
          if (t.cssMode) return i;
          let n = p(r, e);
          return (n += this.cssOverflowAdjustment()), s && (n = -n), n || 0;
        },
        setTranslate: function (e, t) {
          const s = this,
            { rtlTranslate: i, params: r, wrapperEl: n, progress: a } = s;
          let o,
            l = 0,
            d = 0;
          s.isHorizontal() ? (l = i ? -e : e) : (d = e),
            r.roundLengths && ((l = Math.floor(l)), (d = Math.floor(d))),
            (s.previousTranslate = s.translate),
            (s.translate = s.isHorizontal() ? l : d),
            r.cssMode
              ? (n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                  s.isHorizontal() ? -l : -d)
              : r.virtualTranslate ||
                (s.isHorizontal()
                  ? (l -= s.cssOverflowAdjustment())
                  : (d -= s.cssOverflowAdjustment()),
                (n.style.transform = `translate3d(${l}px, ${d}px, 0px)`));
          const c = s.maxTranslate() - s.minTranslate();
          (o = 0 === c ? 0 : (e - s.minTranslate()) / c),
            o !== a && s.updateProgress(e),
            s.emit("setTranslate", s.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (e, t, s, i, r) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === s && (s = !0),
            void 0 === i && (i = !0);
          const n = this,
            { params: a, wrapperEl: o } = n;
          if (n.animating && a.preventInteractionOnTransition) return !1;
          const l = n.minTranslate(),
            d = n.maxTranslate();
          let c;
          if (
            ((c = i && e > l ? l : i && e < d ? d : e),
            n.updateProgress(c),
            a.cssMode)
          ) {
            const e = n.isHorizontal();
            if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -c;
            else {
              if (!n.support.smoothScroll)
                return (
                  m({
                    swiper: n,
                    targetPosition: -c,
                    side: e ? "left" : "top",
                  }),
                  !0
                );
              o.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
            }
            return !0;
          }
          return (
            0 === t
              ? (n.setTransition(0),
                n.setTranslate(c),
                s &&
                  (n.emit("beforeTransitionStart", t, r),
                  n.emit("transitionEnd")))
              : (n.setTransition(t),
                n.setTranslate(c),
                s &&
                  (n.emit("beforeTransitionStart", t, r),
                  n.emit("transitionStart")),
                n.animating ||
                  ((n.animating = !0),
                  n.onTranslateToWrapperTransitionEnd ||
                    (n.onTranslateToWrapperTransitionEnd = function (e) {
                      n &&
                        !n.destroyed &&
                        e.target === this &&
                        (n.wrapperEl.removeEventListener(
                          "transitionend",
                          n.onTranslateToWrapperTransitionEnd
                        ),
                        (n.onTranslateToWrapperTransitionEnd = null),
                        delete n.onTranslateToWrapperTransitionEnd,
                        s && n.emit("transitionEnd"));
                    }),
                  n.wrapperEl.addEventListener(
                    "transitionend",
                    n.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      };
      function z(e) {
        let { swiper: t, runCallbacks: s, direction: i, step: r } = e;
        const { activeIndex: n, previousIndex: a } = t;
        let o = i;
        if (
          (o || (o = n > a ? "next" : n < a ? "prev" : "reset"),
          t.emit(`transition${r}`),
          s && n !== a)
        ) {
          if ("reset" === o) return void t.emit(`slideResetTransition${r}`);
          t.emit(`slideChangeTransition${r}`),
            "next" === o
              ? t.emit(`slideNextTransition${r}`)
              : t.emit(`slidePrevTransition${r}`);
        }
      }
      var A = {
        slideTo: function (e, t, s, i, r) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === s && (s = !0),
            "string" == typeof e && (e = parseInt(e, 10));
          const n = this;
          let a = e;
          a < 0 && (a = 0);
          const {
            params: o,
            snapGrid: l,
            slidesGrid: d,
            previousIndex: c,
            activeIndex: p,
            rtlTranslate: u,
            wrapperEl: f,
            enabled: h,
          } = n;
          if (
            (n.animating && o.preventInteractionOnTransition) ||
            (!h && !i && !r)
          )
            return !1;
          const v = Math.min(n.params.slidesPerGroupSkip, a);
          let g = v + Math.floor((a - v) / n.params.slidesPerGroup);
          g >= l.length && (g = l.length - 1);
          const w = -l[g];
          if (o.normalizeSlideIndex)
            for (let e = 0; e < d.length; e += 1) {
              const t = -Math.floor(100 * w),
                s = Math.floor(100 * d[e]),
                i = Math.floor(100 * d[e + 1]);
              void 0 !== d[e + 1]
                ? t >= s && t < i - (i - s) / 2
                  ? (a = e)
                  : t >= s && t < i && (a = e + 1)
                : t >= s && (a = e);
            }
          if (n.initialized && a !== p) {
            if (
              !n.allowSlideNext &&
              (u
                ? w > n.translate && w > n.minTranslate()
                : w < n.translate && w < n.minTranslate())
            )
              return !1;
            if (
              !n.allowSlidePrev &&
              w > n.translate &&
              w > n.maxTranslate() &&
              (p || 0) !== a
            )
              return !1;
          }
          let S;
          if (
            (a !== (c || 0) && s && n.emit("beforeSlideChangeStart"),
            n.updateProgress(w),
            (S = a > p ? "next" : a < p ? "prev" : "reset"),
            (u && -w === n.translate) || (!u && w === n.translate))
          )
            return (
              n.updateActiveIndex(a),
              o.autoHeight && n.updateAutoHeight(),
              n.updateSlidesClasses(),
              "slide" !== o.effect && n.setTranslate(w),
              "reset" !== S && (n.transitionStart(s, S), n.transitionEnd(s, S)),
              !1
            );
          if (o.cssMode) {
            const e = n.isHorizontal(),
              s = u ? w : -w;
            if (0 === t) {
              const t = n.virtual && n.params.virtual.enabled;
              t &&
                ((n.wrapperEl.style.scrollSnapType = "none"),
                (n._immediateVirtual = !0)),
                t && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0
                  ? ((n._cssModeVirtualInitialSet = !0),
                    requestAnimationFrame(() => {
                      f[e ? "scrollLeft" : "scrollTop"] = s;
                    }))
                  : (f[e ? "scrollLeft" : "scrollTop"] = s),
                t &&
                  requestAnimationFrame(() => {
                    (n.wrapperEl.style.scrollSnapType = ""),
                      (n._immediateVirtual = !1);
                  });
            } else {
              if (!n.support.smoothScroll)
                return (
                  m({ swiper: n, targetPosition: s, side: e ? "left" : "top" }),
                  !0
                );
              f.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
            }
            return !0;
          }
          return (
            n.setTransition(t),
            n.setTranslate(w),
            n.updateActiveIndex(a),
            n.updateSlidesClasses(),
            n.emit("beforeTransitionStart", t, i),
            n.transitionStart(s, S),
            0 === t
              ? n.transitionEnd(s, S)
              : n.animating ||
                ((n.animating = !0),
                n.onSlideToWrapperTransitionEnd ||
                  (n.onSlideToWrapperTransitionEnd = function (e) {
                    n &&
                      !n.destroyed &&
                      e.target === this &&
                      (n.wrapperEl.removeEventListener(
                        "transitionend",
                        n.onSlideToWrapperTransitionEnd
                      ),
                      (n.onSlideToWrapperTransitionEnd = null),
                      delete n.onSlideToWrapperTransitionEnd,
                      n.transitionEnd(s, S));
                  }),
                n.wrapperEl.addEventListener(
                  "transitionend",
                  n.onSlideToWrapperTransitionEnd
                )),
            !0
          );
        },
        slideToLoop: function (e, t, s, i) {
          if (
            (void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === s && (s = !0),
            "string" == typeof e)
          ) {
            e = parseInt(e, 10);
          }
          const r = this;
          let n = e;
          return (
            r.params.loop &&
              (r.virtual && r.params.virtual.enabled
                ? (n += r.virtual.slidesBefore)
                : (n = r.getSlideIndexByData(n))),
            r.slideTo(n, t, s, i)
          );
        },
        slideNext: function (e, t, s) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          const i = this,
            { enabled: r, params: n, animating: a } = i;
          if (!r) return i;
          let o = n.slidesPerGroup;
          "auto" === n.slidesPerView &&
            1 === n.slidesPerGroup &&
            n.slidesPerGroupAuto &&
            (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
          const l = i.activeIndex < n.slidesPerGroupSkip ? 1 : o,
            d = i.virtual && n.virtual.enabled;
          if (n.loop) {
            if (a && !d && n.loopPreventsSliding) return !1;
            i.loopFix({ direction: "next" }),
              (i._clientLeft = i.wrapperEl.clientLeft);
          }
          return n.rewind && i.isEnd
            ? i.slideTo(0, e, t, s)
            : i.slideTo(i.activeIndex + l, e, t, s);
        },
        slidePrev: function (e, t, s) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          const i = this,
            {
              params: r,
              snapGrid: n,
              slidesGrid: a,
              rtlTranslate: o,
              enabled: l,
              animating: d,
            } = i;
          if (!l) return i;
          const c = i.virtual && r.virtual.enabled;
          if (r.loop) {
            if (d && !c && r.loopPreventsSliding) return !1;
            i.loopFix({ direction: "prev" }),
              (i._clientLeft = i.wrapperEl.clientLeft);
          }
          function p(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          const u = p(o ? i.translate : -i.translate),
            f = n.map((e) => p(e));
          let h = n[f.indexOf(u) - 1];
          if (void 0 === h && r.cssMode) {
            let e;
            n.forEach((t, s) => {
              u >= t && (e = s);
            }),
              void 0 !== e && (h = n[e > 0 ? e - 1 : e]);
          }
          let m = 0;
          if (
            (void 0 !== h &&
              ((m = a.indexOf(h)),
              m < 0 && (m = i.activeIndex - 1),
              "auto" === r.slidesPerView &&
                1 === r.slidesPerGroup &&
                r.slidesPerGroupAuto &&
                ((m = m - i.slidesPerViewDynamic("previous", !0) + 1),
                (m = Math.max(m, 0)))),
            r.rewind && i.isBeginning)
          ) {
            const r =
              i.params.virtual && i.params.virtual.enabled && i.virtual
                ? i.virtual.slides.length - 1
                : i.slides.length - 1;
            return i.slideTo(r, e, t, s);
          }
          return i.slideTo(m, e, t, s);
        },
        slideReset: function (e, t, s) {
          return (
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            this.slideTo(this.activeIndex, e, t, s)
          );
        },
        slideToClosest: function (e, t, s, i) {
          void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            void 0 === i && (i = 0.5);
          const r = this;
          let n = r.activeIndex;
          const a = Math.min(r.params.slidesPerGroupSkip, n),
            o = a + Math.floor((n - a) / r.params.slidesPerGroup),
            l = r.rtlTranslate ? r.translate : -r.translate;
          if (l >= r.snapGrid[o]) {
            const e = r.snapGrid[o];
            l - e > (r.snapGrid[o + 1] - e) * i &&
              (n += r.params.slidesPerGroup);
          } else {
            const e = r.snapGrid[o - 1];
            l - e <= (r.snapGrid[o] - e) * i && (n -= r.params.slidesPerGroup);
          }
          return (
            (n = Math.max(n, 0)),
            (n = Math.min(n, r.slidesGrid.length - 1)),
            r.slideTo(n, e, t, s)
          );
        },
        slideToClickedSlide: function () {
          const e = this,
            { params: t, slidesEl: s } = e,
            i =
              "auto" === t.slidesPerView
                ? e.slidesPerViewDynamic()
                : t.slidesPerView;
          let r,
            n = e.clickedIndex;
          const a = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
          if (t.loop) {
            if (e.animating) return;
            (r = parseInt(
              e.clickedSlide.getAttribute("data-swiper-slide-index"),
              10
            )),
              t.centeredSlides
                ? n < e.loopedSlides - i / 2 ||
                  n > e.slides.length - e.loopedSlides + i / 2
                  ? (e.loopFix(),
                    (n = e.getSlideIndex(
                      v(s, `${a}[data-swiper-slide-index="${r}"]`)[0]
                    )),
                    d(() => {
                      e.slideTo(n);
                    }))
                  : e.slideTo(n)
                : n > e.slides.length - i
                ? (e.loopFix(),
                  (n = e.getSlideIndex(
                    v(s, `${a}[data-swiper-slide-index="${r}"]`)[0]
                  )),
                  d(() => {
                    e.slideTo(n);
                  }))
                : e.slideTo(n);
          } else e.slideTo(n);
        },
      };
      var G = {
        loopCreate: function (e) {
          const t = this,
            { params: s, slidesEl: i } = t;
          if (!s.loop || (t.virtual && t.params.virtual.enabled)) return;
          v(i, `.${s.slideClass}, swiper-slide`).forEach((e, t) => {
            e.setAttribute("data-swiper-slide-index", t);
          }),
            t.loopFix({
              slideRealIndex: e,
              direction: s.centeredSlides ? void 0 : "next",
            });
        },
        loopFix: function (e) {
          let {
            slideRealIndex: t,
            slideTo: s = !0,
            direction: i,
            setTranslate: r,
            activeSlideIndex: n,
            byController: a,
            byMousewheel: o,
          } = void 0 === e ? {} : e;
          const l = this;
          if (!l.params.loop) return;
          l.emit("beforeLoopFix");
          const {
            slides: d,
            allowSlidePrev: c,
            allowSlideNext: p,
            slidesEl: u,
            params: f,
          } = l;
          if (
            ((l.allowSlidePrev = !0),
            (l.allowSlideNext = !0),
            l.virtual && f.virtual.enabled)
          )
            return (
              s &&
                (f.centeredSlides || 0 !== l.snapIndex
                  ? f.centeredSlides && l.snapIndex < f.slidesPerView
                    ? l.slideTo(
                        l.virtual.slides.length + l.snapIndex,
                        0,
                        !1,
                        !0
                      )
                    : l.snapIndex === l.snapGrid.length - 1 &&
                      l.slideTo(l.virtual.slidesBefore, 0, !1, !0)
                  : l.slideTo(l.virtual.slides.length, 0, !1, !0)),
              (l.allowSlidePrev = c),
              (l.allowSlideNext = p),
              void l.emit("loopFix")
            );
          const h =
            "auto" === f.slidesPerView
              ? l.slidesPerViewDynamic()
              : Math.ceil(parseFloat(f.slidesPerView, 10));
          let m = f.loopedSlides || h;
          m % f.slidesPerGroup != 0 &&
            (m += f.slidesPerGroup - (m % f.slidesPerGroup)),
            (l.loopedSlides = m);
          const v = [],
            g = [];
          let w = l.activeIndex;
          void 0 === n
            ? (n = l.getSlideIndex(
                l.slides.filter((e) =>
                  e.classList.contains(f.slideActiveClass)
                )[0]
              ))
            : (w = n);
          const S = "next" === i || !i,
            T = "prev" === i || !i;
          let b = 0,
            x = 0;
          if (n < m) {
            b = Math.max(m - n, f.slidesPerGroup);
            for (let e = 0; e < m - n; e += 1) {
              const t = e - Math.floor(e / d.length) * d.length;
              v.push(d.length - t - 1);
            }
          } else if (n > l.slides.length - 2 * m) {
            x = Math.max(n - (l.slides.length - 2 * m), f.slidesPerGroup);
            for (let e = 0; e < x; e += 1) {
              const t = e - Math.floor(e / d.length) * d.length;
              g.push(t);
            }
          }
          if (
            (T &&
              v.forEach((e) => {
                (l.slides[e].swiperLoopMoveDOM = !0),
                  u.prepend(l.slides[e]),
                  (l.slides[e].swiperLoopMoveDOM = !1);
              }),
            S &&
              g.forEach((e) => {
                (l.slides[e].swiperLoopMoveDOM = !0),
                  u.append(l.slides[e]),
                  (l.slides[e].swiperLoopMoveDOM = !1);
              }),
            l.recalcSlides(),
            "auto" === f.slidesPerView && l.updateSlides(),
            f.watchSlidesProgress && l.updateSlidesOffset(),
            s)
          )
            if (v.length > 0 && T)
              if (void 0 === t) {
                const e = l.slidesGrid[w],
                  t = l.slidesGrid[w + b] - e;
                o
                  ? l.setTranslate(l.translate - t)
                  : (l.slideTo(w + b, 0, !1, !0),
                    r &&
                      (l.touches[l.isHorizontal() ? "startX" : "startY"] += t));
              } else r && l.slideToLoop(t, 0, !1, !0);
            else if (g.length > 0 && S)
              if (void 0 === t) {
                const e = l.slidesGrid[w],
                  t = l.slidesGrid[w - x] - e;
                o
                  ? l.setTranslate(l.translate - t)
                  : (l.slideTo(w - x, 0, !1, !0),
                    r &&
                      (l.touches[l.isHorizontal() ? "startX" : "startY"] += t));
              } else l.slideToLoop(t, 0, !1, !0);
          if (
            ((l.allowSlidePrev = c),
            (l.allowSlideNext = p),
            l.controller && l.controller.control && !a)
          ) {
            const e = {
              slideRealIndex: t,
              slideTo: !1,
              direction: i,
              setTranslate: r,
              activeSlideIndex: n,
              byController: !0,
            };
            Array.isArray(l.controller.control)
              ? l.controller.control.forEach((t) => {
                  !t.destroyed && t.params.loop && t.loopFix(e);
                })
              : l.controller.control instanceof l.constructor &&
                l.controller.control.params.loop &&
                l.controller.control.loopFix(e);
          }
          l.emit("loopFix");
        },
        loopDestroy: function () {
          const e = this,
            { params: t, slidesEl: s } = e;
          if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
          e.recalcSlides();
          const i = [];
          e.slides.forEach((e) => {
            const t =
              void 0 === e.swiperSlideIndex
                ? 1 * e.getAttribute("data-swiper-slide-index")
                : e.swiperSlideIndex;
            i[t] = e;
          }),
            e.slides.forEach((e) => {
              e.removeAttribute("data-swiper-slide-index");
            }),
            i.forEach((e) => {
              s.append(e);
            }),
            e.recalcSlides(),
            e.slideTo(e.realIndex, 0);
        },
      };
      function _(e) {
        const t = this,
          s = a(),
          i = l(),
          r = t.touchEventsData;
        r.evCache.push(e);
        const { params: n, touches: o, enabled: d } = t;
        if (!d) return;
        if (!n.simulateTouch && "mouse" === e.pointerType) return;
        if (t.animating && n.preventInteractionOnTransition) return;
        !t.animating && n.cssMode && n.loop && t.loopFix();
        let p = e;
        p.originalEvent && (p = p.originalEvent);
        let u = p.target;
        if ("wrapper" === n.touchEventsTarget && !t.wrapperEl.contains(u))
          return;
        if ("which" in p && 3 === p.which) return;
        if ("button" in p && p.button > 0) return;
        if (r.isTouched && r.isMoved) return;
        const f = !!n.noSwipingClass && "" !== n.noSwipingClass,
          h = e.composedPath ? e.composedPath() : e.path;
        f && p.target && p.target.shadowRoot && h && (u = h[0]);
        const m = n.noSwipingSelector
            ? n.noSwipingSelector
            : `.${n.noSwipingClass}`,
          v = !(!p.target || !p.target.shadowRoot);
        if (
          n.noSwiping &&
          (v
            ? (function (e, t) {
                return (
                  void 0 === t && (t = this),
                  (function t(s) {
                    if (!s || s === a() || s === l()) return null;
                    s.assignedSlot && (s = s.assignedSlot);
                    const i = s.closest(e);
                    return i || s.getRootNode
                      ? i || t(s.getRootNode().host)
                      : null;
                  })(t)
                );
              })(m, u)
            : u.closest(m))
        )
          return void (t.allowClick = !0);
        if (n.swipeHandler && !u.closest(n.swipeHandler)) return;
        (o.currentX = p.pageX), (o.currentY = p.pageY);
        const g = o.currentX,
          w = o.currentY,
          S = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
          T = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
        if (S && (g <= T || g >= i.innerWidth - T)) {
          if ("prevent" !== S) return;
          e.preventDefault();
        }
        Object.assign(r, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
          (o.startX = g),
          (o.startY = w),
          (r.touchStartTime = c()),
          (t.allowClick = !0),
          t.updateSize(),
          (t.swipeDirection = void 0),
          n.threshold > 0 && (r.allowThresholdMove = !1);
        let b = !0;
        u.matches(r.focusableElements) &&
          ((b = !1), "SELECT" === u.nodeName && (r.isTouched = !1)),
          s.activeElement &&
            s.activeElement.matches(r.focusableElements) &&
            s.activeElement !== u &&
            s.activeElement.blur();
        const x = b && t.allowTouchMove && n.touchStartPreventDefault;
        (!n.touchStartForcePreventDefault && !x) ||
          u.isContentEditable ||
          p.preventDefault(),
          n.freeMode &&
            n.freeMode.enabled &&
            t.freeMode &&
            t.animating &&
            !n.cssMode &&
            t.freeMode.onTouchStart(),
          t.emit("touchStart", p);
      }
      function D(e) {
        const t = a(),
          s = this,
          i = s.touchEventsData,
          { params: r, touches: n, rtlTranslate: o, enabled: l } = s;
        if (!l) return;
        if (!r.simulateTouch && "mouse" === e.pointerType) return;
        let d = e;
        if ((d.originalEvent && (d = d.originalEvent), !i.isTouched))
          return void (
            i.startMoving &&
            i.isScrolling &&
            s.emit("touchMoveOpposite", d)
          );
        const p = i.evCache.findIndex((e) => e.pointerId === d.pointerId);
        p >= 0 && (i.evCache[p] = d);
        const u = i.evCache.length > 1 ? i.evCache[0] : d,
          f = u.pageX,
          h = u.pageY;
        if (d.preventedByNestedSwiper)
          return (n.startX = f), void (n.startY = h);
        if (!s.allowTouchMove)
          return (
            d.target.matches(i.focusableElements) || (s.allowClick = !1),
            void (
              i.isTouched &&
              (Object.assign(n, {
                startX: f,
                startY: h,
                prevX: s.touches.currentX,
                prevY: s.touches.currentY,
                currentX: f,
                currentY: h,
              }),
              (i.touchStartTime = c()))
            )
          );
        if (r.touchReleaseOnEdges && !r.loop)
          if (s.isVertical()) {
            if (
              (h < n.startY && s.translate <= s.maxTranslate()) ||
              (h > n.startY && s.translate >= s.minTranslate())
            )
              return (i.isTouched = !1), void (i.isMoved = !1);
          } else if (
            (f < n.startX && s.translate <= s.maxTranslate()) ||
            (f > n.startX && s.translate >= s.minTranslate())
          )
            return;
        if (
          t.activeElement &&
          d.target === t.activeElement &&
          d.target.matches(i.focusableElements)
        )
          return (i.isMoved = !0), void (s.allowClick = !1);
        if (
          (i.allowTouchCallbacks && s.emit("touchMove", d),
          d.targetTouches && d.targetTouches.length > 1)
        )
          return;
        (n.currentX = f), (n.currentY = h);
        const m = n.currentX - n.startX,
          v = n.currentY - n.startY;
        if (
          s.params.threshold &&
          Math.sqrt(m ** 2 + v ** 2) < s.params.threshold
        )
          return;
        if (void 0 === i.isScrolling) {
          let e;
          (s.isHorizontal() && n.currentY === n.startY) ||
          (s.isVertical() && n.currentX === n.startX)
            ? (i.isScrolling = !1)
            : m * m + v * v >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(v), Math.abs(m))) / Math.PI),
              (i.isScrolling = s.isHorizontal()
                ? e > r.touchAngle
                : 90 - e > r.touchAngle));
        }
        if (
          (i.isScrolling && s.emit("touchMoveOpposite", d),
          void 0 === i.startMoving &&
            ((n.currentX === n.startX && n.currentY === n.startY) ||
              (i.startMoving = !0)),
          i.isScrolling ||
            (s.zoom &&
              s.params.zoom &&
              s.params.zoom.enabled &&
              i.evCache.length > 1))
        )
          return void (i.isTouched = !1);
        if (!i.startMoving) return;
        (s.allowClick = !1),
          !r.cssMode && d.cancelable && d.preventDefault(),
          r.touchMoveStopPropagation && !r.nested && d.stopPropagation();
        let g = s.isHorizontal() ? m : v,
          w = s.isHorizontal()
            ? n.currentX - n.previousX
            : n.currentY - n.previousY;
        r.oneWayMovement &&
          ((g = Math.abs(g) * (o ? 1 : -1)), (w = Math.abs(w) * (o ? 1 : -1))),
          (n.diff = g),
          (g *= r.touchRatio),
          o && ((g = -g), (w = -w));
        const S = s.touchesDirection;
        (s.swipeDirection = g > 0 ? "prev" : "next"),
          (s.touchesDirection = w > 0 ? "prev" : "next");
        const T = s.params.loop && !r.cssMode;
        if (!i.isMoved) {
          if (
            (T && s.loopFix({ direction: s.swipeDirection }),
            (i.startTranslate = s.getTranslate()),
            s.setTransition(0),
            s.animating)
          ) {
            const e = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0,
            });
            s.wrapperEl.dispatchEvent(e);
          }
          (i.allowMomentumBounce = !1),
            !r.grabCursor ||
              (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
              s.setGrabCursor(!0),
            s.emit("sliderFirstMove", d);
        }
        let b;
        i.isMoved &&
          S !== s.touchesDirection &&
          T &&
          Math.abs(g) >= 1 &&
          (s.loopFix({ direction: s.swipeDirection, setTranslate: !0 }),
          (b = !0)),
          s.emit("sliderMove", d),
          (i.isMoved = !0),
          (i.currentTranslate = g + i.startTranslate);
        let x = !0,
          y = r.resistanceRatio;
        if (
          (r.touchReleaseOnEdges && (y = 0),
          g > 0
            ? (T &&
                !b &&
                i.currentTranslate >
                  (r.centeredSlides
                    ? s.minTranslate() - s.size / 2
                    : s.minTranslate()) &&
                s.loopFix({
                  direction: "prev",
                  setTranslate: !0,
                  activeSlideIndex: 0,
                }),
              i.currentTranslate > s.minTranslate() &&
                ((x = !1),
                r.resistance &&
                  (i.currentTranslate =
                    s.minTranslate() -
                    1 +
                    (-s.minTranslate() + i.startTranslate + g) ** y)))
            : g < 0 &&
              (T &&
                !b &&
                i.currentTranslate <
                  (r.centeredSlides
                    ? s.maxTranslate() + s.size / 2
                    : s.maxTranslate()) &&
                s.loopFix({
                  direction: "next",
                  setTranslate: !0,
                  activeSlideIndex:
                    s.slides.length -
                    ("auto" === r.slidesPerView
                      ? s.slidesPerViewDynamic()
                      : Math.ceil(parseFloat(r.slidesPerView, 10))),
                }),
              i.currentTranslate < s.maxTranslate() &&
                ((x = !1),
                r.resistance &&
                  (i.currentTranslate =
                    s.maxTranslate() +
                    1 -
                    (s.maxTranslate() - i.startTranslate - g) ** y))),
          x && (d.preventedByNestedSwiper = !0),
          !s.allowSlideNext &&
            "next" === s.swipeDirection &&
            i.currentTranslate < i.startTranslate &&
            (i.currentTranslate = i.startTranslate),
          !s.allowSlidePrev &&
            "prev" === s.swipeDirection &&
            i.currentTranslate > i.startTranslate &&
            (i.currentTranslate = i.startTranslate),
          s.allowSlidePrev ||
            s.allowSlideNext ||
            (i.currentTranslate = i.startTranslate),
          r.threshold > 0)
        ) {
          if (!(Math.abs(g) > r.threshold || i.allowThresholdMove))
            return void (i.currentTranslate = i.startTranslate);
          if (!i.allowThresholdMove)
            return (
              (i.allowThresholdMove = !0),
              (n.startX = n.currentX),
              (n.startY = n.currentY),
              (i.currentTranslate = i.startTranslate),
              void (n.diff = s.isHorizontal()
                ? n.currentX - n.startX
                : n.currentY - n.startY)
            );
        }
        r.followFinger &&
          !r.cssMode &&
          (((r.freeMode && r.freeMode.enabled && s.freeMode) ||
            r.watchSlidesProgress) &&
            (s.updateActiveIndex(), s.updateSlidesClasses()),
          r.freeMode &&
            r.freeMode.enabled &&
            s.freeMode &&
            s.freeMode.onTouchMove(),
          s.updateProgress(i.currentTranslate),
          s.setTranslate(i.currentTranslate));
      }
      function V(e) {
        const t = this,
          s = t.touchEventsData,
          i = s.evCache.findIndex((t) => t.pointerId === e.pointerId);
        if (
          (i >= 0 && s.evCache.splice(i, 1),
          ["pointercancel", "pointerout", "pointerleave"].includes(e.type))
        ) {
          if (
            !(
              "pointercancel" === e.type &&
              (t.browser.isSafari || t.browser.isWebView)
            )
          )
            return;
        }
        const {
          params: r,
          touches: n,
          rtlTranslate: a,
          slidesGrid: o,
          enabled: l,
        } = t;
        if (!l) return;
        if (!r.simulateTouch && "mouse" === e.pointerType) return;
        let p = e;
        if (
          (p.originalEvent && (p = p.originalEvent),
          s.allowTouchCallbacks && t.emit("touchEnd", p),
          (s.allowTouchCallbacks = !1),
          !s.isTouched)
        )
          return (
            s.isMoved && r.grabCursor && t.setGrabCursor(!1),
            (s.isMoved = !1),
            void (s.startMoving = !1)
          );
        r.grabCursor &&
          s.isMoved &&
          s.isTouched &&
          (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
          t.setGrabCursor(!1);
        const u = c(),
          f = u - s.touchStartTime;
        if (t.allowClick) {
          const e = p.path || (p.composedPath && p.composedPath());
          t.updateClickedSlide((e && e[0]) || p.target),
            t.emit("tap click", p),
            f < 300 &&
              u - s.lastClickTime < 300 &&
              t.emit("doubleTap doubleClick", p);
        }
        if (
          ((s.lastClickTime = c()),
          d(() => {
            t.destroyed || (t.allowClick = !0);
          }),
          !s.isTouched ||
            !s.isMoved ||
            !t.swipeDirection ||
            0 === n.diff ||
            s.currentTranslate === s.startTranslate)
        )
          return (
            (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1)
          );
        let h;
        if (
          ((s.isTouched = !1),
          (s.isMoved = !1),
          (s.startMoving = !1),
          (h = r.followFinger
            ? a
              ? t.translate
              : -t.translate
            : -s.currentTranslate),
          r.cssMode)
        )
          return;
        if (r.freeMode && r.freeMode.enabled)
          return void t.freeMode.onTouchEnd({ currentPos: h });
        let m = 0,
          v = t.slidesSizesGrid[0];
        for (
          let e = 0;
          e < o.length;
          e += e < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup
        ) {
          const t = e < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
          void 0 !== o[e + t]
            ? h >= o[e] && h < o[e + t] && ((m = e), (v = o[e + t] - o[e]))
            : h >= o[e] && ((m = e), (v = o[o.length - 1] - o[o.length - 2]));
        }
        let g = null,
          w = null;
        r.rewind &&
          (t.isBeginning
            ? (w =
                r.virtual && r.virtual.enabled && t.virtual
                  ? t.virtual.slides.length - 1
                  : t.slides.length - 1)
            : t.isEnd && (g = 0));
        const S = (h - o[m]) / v,
          T = m < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
        if (f > r.longSwipesMs) {
          if (!r.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection &&
            (S >= r.longSwipesRatio
              ? t.slideTo(r.rewind && t.isEnd ? g : m + T)
              : t.slideTo(m)),
            "prev" === t.swipeDirection &&
              (S > 1 - r.longSwipesRatio
                ? t.slideTo(m + T)
                : null !== w && S < 0 && Math.abs(S) > r.longSwipesRatio
                ? t.slideTo(w)
                : t.slideTo(m));
        } else {
          if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
          t.navigation &&
          (p.target === t.navigation.nextEl || p.target === t.navigation.prevEl)
            ? p.target === t.navigation.nextEl
              ? t.slideTo(m + T)
              : t.slideTo(m)
            : ("next" === t.swipeDirection && t.slideTo(null !== g ? g : m + T),
              "prev" === t.swipeDirection && t.slideTo(null !== w ? w : m));
        }
      }
      function N() {
        const e = this,
          { params: t, el: s } = e;
        if (s && 0 === s.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const { allowSlideNext: i, allowSlidePrev: r, snapGrid: n } = e,
          a = e.virtual && e.params.virtual.enabled;
        (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses();
        const o = a && t.loop;
        !("auto" === t.slidesPerView || t.slidesPerView > 1) ||
        !e.isEnd ||
        e.isBeginning ||
        e.params.centeredSlides ||
        o
          ? e.params.loop && !a
            ? e.slideToLoop(e.realIndex, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0)
          : e.slideTo(e.slides.length - 1, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            (clearTimeout(e.autoplay.resizeTimeout),
            (e.autoplay.resizeTimeout = setTimeout(() => {
              e.autoplay &&
                e.autoplay.running &&
                e.autoplay.paused &&
                e.autoplay.resume();
            }, 500))),
          (e.allowSlidePrev = r),
          (e.allowSlideNext = i),
          e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow();
      }
      function F(e) {
        const t = this;
        t.enabled &&
          (t.allowClick ||
            (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation &&
              t.animating &&
              (e.stopPropagation(), e.stopImmediatePropagation())));
      }
      function B() {
        const e = this,
          { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
        if (!i) return;
        let r;
        (e.previousTranslate = e.translate),
          e.isHorizontal()
            ? (e.translate = -t.scrollLeft)
            : (e.translate = -t.scrollTop),
          0 === e.translate && (e.translate = 0),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
        const n = e.maxTranslate() - e.minTranslate();
        (r = 0 === n ? 0 : (e.translate - e.minTranslate()) / n),
          r !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
          e.emit("setTranslate", e.translate, !1);
      }
      function $(e) {
        const t = this;
        P(t, e.target),
          t.params.cssMode ||
            ("auto" !== t.params.slidesPerView && !t.params.autoHeight) ||
            t.update();
      }
      let H = !1;
      function j() {}
      const W = (e, t) => {
        const s = a(),
          { params: i, el: r, wrapperEl: n, device: o } = e,
          l = !!i.nested,
          d = "on" === t ? "addEventListener" : "removeEventListener",
          c = t;
        r[d]("pointerdown", e.onTouchStart, { passive: !1 }),
          s[d]("pointermove", e.onTouchMove, { passive: !1, capture: l }),
          s[d]("pointerup", e.onTouchEnd, { passive: !0 }),
          s[d]("pointercancel", e.onTouchEnd, { passive: !0 }),
          s[d]("pointerout", e.onTouchEnd, { passive: !0 }),
          s[d]("pointerleave", e.onTouchEnd, { passive: !0 }),
          (i.preventClicks || i.preventClicksPropagation) &&
            r[d]("click", e.onClick, !0),
          i.cssMode && n[d]("scroll", e.onScroll),
          i.updateOnWindowResize
            ? e[c](
                o.ios || o.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                N,
                !0
              )
            : e[c]("observerUpdate", N, !0),
          r[d]("load", e.onLoad, { capture: !0 });
      };
      const R = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      var X = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopedSlides: null,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
      function Y(e, t) {
        return function (s) {
          void 0 === s && (s = {});
          const i = Object.keys(s)[0],
            r = s[i];
          "object" == typeof r && null !== r
            ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
                !0 === e[i] &&
                (e[i] = { auto: !0 }),
              i in e && "enabled" in r
                ? (!0 === e[i] && (e[i] = { enabled: !0 }),
                  "object" != typeof e[i] ||
                    "enabled" in e[i] ||
                    (e[i].enabled = !0),
                  e[i] || (e[i] = { enabled: !1 }),
                  f(t, s))
                : f(t, s))
            : f(t, s);
        };
      }
      const q = {
          eventsEmitter: C,
          update: I,
          translate: O,
          transition: {
            setTransition: function (e, t) {
              const s = this;
              s.params.cssMode ||
                (s.wrapperEl.style.transitionDuration = `${e}ms`),
                s.emit("setTransition", e, t);
            },
            transitionStart: function (e, t) {
              void 0 === e && (e = !0);
              const s = this,
                { params: i } = s;
              i.cssMode ||
                (i.autoHeight && s.updateAutoHeight(),
                z({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
            },
            transitionEnd: function (e, t) {
              void 0 === e && (e = !0);
              const s = this,
                { params: i } = s;
              (s.animating = !1),
                i.cssMode ||
                  (s.setTransition(0),
                  z({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
            },
          },
          slide: A,
          loop: G,
          grabCursor: {
            setGrabCursor: function (e) {
              const t = this;
              if (
                !t.params.simulateTouch ||
                (t.params.watchOverflow && t.isLocked) ||
                t.params.cssMode
              )
                return;
              const s =
                "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              t.isElement && (t.__preventObserver__ = !0),
                (s.style.cursor = "move"),
                (s.style.cursor = e ? "grabbing" : "grab"),
                t.isElement &&
                  requestAnimationFrame(() => {
                    t.__preventObserver__ = !1;
                  });
            },
            unsetGrabCursor: function () {
              const e = this;
              (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e.isElement && (e.__preventObserver__ = !0),
                (e[
                  "container" === e.params.touchEventsTarget
                    ? "el"
                    : "wrapperEl"
                ].style.cursor = ""),
                e.isElement &&
                  requestAnimationFrame(() => {
                    e.__preventObserver__ = !1;
                  }));
            },
          },
          events: {
            attachEvents: function () {
              const e = this,
                t = a(),
                { params: s } = e;
              (e.onTouchStart = _.bind(e)),
                (e.onTouchMove = D.bind(e)),
                (e.onTouchEnd = V.bind(e)),
                s.cssMode && (e.onScroll = B.bind(e)),
                (e.onClick = F.bind(e)),
                (e.onLoad = $.bind(e)),
                H || (t.addEventListener("touchstart", j), (H = !0)),
                W(e, "on");
            },
            detachEvents: function () {
              W(this, "off");
            },
          },
          breakpoints: {
            setBreakpoint: function () {
              const e = this,
                { realIndex: t, initialized: s, params: i, el: r } = e,
                n = i.breakpoints;
              if (!n || (n && 0 === Object.keys(n).length)) return;
              const a = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
              if (!a || e.currentBreakpoint === a) return;
              const o = (a in n ? n[a] : void 0) || e.originalParams,
                l = R(e, i),
                d = R(e, o),
                c = i.enabled;
              l && !d
                ? (r.classList.remove(
                    `${i.containerModifierClass}grid`,
                    `${i.containerModifierClass}grid-column`
                  ),
                  e.emitContainerClasses())
                : !l &&
                  d &&
                  (r.classList.add(`${i.containerModifierClass}grid`),
                  ((o.grid.fill && "column" === o.grid.fill) ||
                    (!o.grid.fill && "column" === i.grid.fill)) &&
                    r.classList.add(`${i.containerModifierClass}grid-column`),
                  e.emitContainerClasses()),
                ["navigation", "pagination", "scrollbar"].forEach((t) => {
                  if (void 0 === o[t]) return;
                  const s = i[t] && i[t].enabled,
                    r = o[t] && o[t].enabled;
                  s && !r && e[t].disable(), !s && r && e[t].enable();
                });
              const p = o.direction && o.direction !== i.direction,
                u = i.loop && (o.slidesPerView !== i.slidesPerView || p);
              p && s && e.changeDirection(), f(e.params, o);
              const h = e.params.enabled;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev,
              }),
                c && !h ? e.disable() : !c && h && e.enable(),
                (e.currentBreakpoint = a),
                e.emit("_beforeBreakpoint", o),
                u && s && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()),
                e.emit("breakpoint", o);
            },
            getBreakpoint: function (e, t, s) {
              if (
                (void 0 === t && (t = "window"),
                !e || ("container" === t && !s))
              )
                return;
              let i = !1;
              const r = l(),
                n = "window" === t ? r.innerHeight : s.clientHeight,
                a = Object.keys(e).map((e) => {
                  if ("string" == typeof e && 0 === e.indexOf("@")) {
                    const t = parseFloat(e.substr(1));
                    return { value: n * t, point: e };
                  }
                  return { value: e, point: e };
                });
              a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
              for (let e = 0; e < a.length; e += 1) {
                const { point: n, value: o } = a[e];
                "window" === t
                  ? r.matchMedia(`(min-width: ${o}px)`).matches && (i = n)
                  : o <= s.clientWidth && (i = n);
              }
              return i || "max";
            },
          },
          checkOverflow: {
            checkOverflow: function () {
              const e = this,
                { isLocked: t, params: s } = e,
                { slidesOffsetBefore: i } = s;
              if (i) {
                const t = e.slides.length - 1,
                  s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
                e.isLocked = e.size > s;
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                t && t !== e.isLocked && (e.isEnd = !1),
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
            },
          },
          classes: {
            addClasses: function () {
              const e = this,
                { classNames: t, params: s, rtl: i, el: r, device: n } = e,
                a = (function (e, t) {
                  const s = [];
                  return (
                    e.forEach((e) => {
                      "object" == typeof e
                        ? Object.keys(e).forEach((i) => {
                            e[i] && s.push(t + i);
                          })
                        : "string" == typeof e && s.push(t + e);
                    }),
                    s
                  );
                })(
                  [
                    "initialized",
                    s.direction,
                    { "free-mode": e.params.freeMode && s.freeMode.enabled },
                    { autoheight: s.autoHeight },
                    { rtl: i },
                    { grid: s.grid && s.grid.rows > 1 },
                    {
                      "grid-column":
                        s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
                    },
                    { android: n.android },
                    { ios: n.ios },
                    { "css-mode": s.cssMode },
                    { centered: s.cssMode && s.centeredSlides },
                    { "watch-progress": s.watchSlidesProgress },
                  ],
                  s.containerModifierClass
                );
              t.push(...a), r.classList.add(...t), e.emitContainerClasses();
            },
            removeClasses: function () {
              const { el: e, classNames: t } = this;
              e.classList.remove(...t), this.emitContainerClasses();
            },
          },
        },
        K = {};
      class U {
        constructor() {
          let e, t;
          for (var s = arguments.length, i = new Array(s), r = 0; r < s; r++)
            i[r] = arguments[r];
          1 === i.length &&
          i[0].constructor &&
          "Object" === Object.prototype.toString.call(i[0]).slice(8, -1)
            ? (t = i[0])
            : ([e, t] = i),
            t || (t = {}),
            (t = f({}, t)),
            e && !t.el && (t.el = e);
          const n = a();
          if (
            t.el &&
            "string" == typeof t.el &&
            n.querySelectorAll(t.el).length > 1
          ) {
            const e = [];
            return (
              n.querySelectorAll(t.el).forEach((s) => {
                const i = f({}, t, { el: s });
                e.push(new U(i));
              }),
              e
            );
          }
          const o = this;
          (o.__swiper__ = !0),
            (o.support = y()),
            (o.device = E({ userAgent: t.userAgent })),
            (o.browser = M()),
            (o.eventsListeners = {}),
            (o.eventsAnyListeners = []),
            (o.modules = [...o.__modules__]),
            t.modules &&
              Array.isArray(t.modules) &&
              o.modules.push(...t.modules);
          const l = {};
          o.modules.forEach((e) => {
            e({
              params: t,
              swiper: o,
              extendParams: Y(t, l),
              on: o.on.bind(o),
              once: o.once.bind(o),
              off: o.off.bind(o),
              emit: o.emit.bind(o),
            });
          });
          const d = f({}, X, l);
          return (
            (o.params = f({}, d, K, t)),
            (o.originalParams = f({}, o.params)),
            (o.passedParams = f({}, t)),
            o.params &&
              o.params.on &&
              Object.keys(o.params.on).forEach((e) => {
                o.on(e, o.params.on[e]);
              }),
            o.params && o.params.onAny && o.onAny(o.params.onAny),
            Object.assign(o, {
              enabled: o.params.enabled,
              el: e,
              classNames: [],
              slides: [],
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal() {
                return "horizontal" === o.params.direction;
              },
              isVertical() {
                return "vertical" === o.params.direction;
              },
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              cssOverflowAdjustment() {
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
              },
              allowSlideNext: o.params.allowSlideNext,
              allowSlidePrev: o.params.allowSlidePrev,
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: o.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                evCache: [],
              },
              allowClick: !0,
              allowTouchMove: o.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            o.emit("_swiper"),
            o.params.init && o.init(),
            o
          );
        }
        getSlideIndex(e) {
          const { slidesEl: t, params: s } = this,
            i = w(v(t, `.${s.slideClass}, swiper-slide`)[0]);
          return w(e) - i;
        }
        getSlideIndexByData(e) {
          return this.getSlideIndex(
            this.slides.filter(
              (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
            )[0]
          );
        }
        recalcSlides() {
          const { slidesEl: e, params: t } = this;
          this.slides = v(e, `.${t.slideClass}, swiper-slide`);
        }
        enable() {
          const e = this;
          e.enabled ||
            ((e.enabled = !0),
            e.params.grabCursor && e.setGrabCursor(),
            e.emit("enable"));
        }
        disable() {
          const e = this;
          e.enabled &&
            ((e.enabled = !1),
            e.params.grabCursor && e.unsetGrabCursor(),
            e.emit("disable"));
        }
        setProgress(e, t) {
          const s = this;
          e = Math.min(Math.max(e, 0), 1);
          const i = s.minTranslate(),
            r = (s.maxTranslate() - i) * e + i;
          s.translateTo(r, void 0 === t ? 0 : t),
            s.updateActiveIndex(),
            s.updateSlidesClasses();
        }
        emitContainerClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = e.el.className
            .split(" ")
            .filter(
              (t) =>
                0 === t.indexOf("swiper") ||
                0 === t.indexOf(e.params.containerModifierClass)
            );
          e.emit("_containerClasses", t.join(" "));
        }
        getSlideClasses(e) {
          const t = this;
          return t.destroyed
            ? ""
            : e.className
                .split(" ")
                .filter(
                  (e) =>
                    0 === e.indexOf("swiper-slide") ||
                    0 === e.indexOf(t.params.slideClass)
                )
                .join(" ");
        }
        emitSlidesClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = [];
          e.slides.forEach((s) => {
            const i = e.getSlideClasses(s);
            t.push({ slideEl: s, classNames: i }), e.emit("_slideClass", s, i);
          }),
            e.emit("_slideClasses", t);
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          const {
            params: s,
            slides: i,
            slidesGrid: r,
            slidesSizesGrid: n,
            size: a,
            activeIndex: o,
          } = this;
          let l = 1;
          if (s.centeredSlides) {
            let e,
              t = i[o] ? i[o].swiperSlideSize : 0;
            for (let s = o + 1; s < i.length; s += 1)
              i[s] &&
                !e &&
                ((t += i[s].swiperSlideSize), (l += 1), t > a && (e = !0));
            for (let s = o - 1; s >= 0; s -= 1)
              i[s] &&
                !e &&
                ((t += i[s].swiperSlideSize), (l += 1), t > a && (e = !0));
          } else if ("current" === e)
            for (let e = o + 1; e < i.length; e += 1) {
              (t ? r[e] + n[e] - r[o] < a : r[e] - r[o] < a) && (l += 1);
            }
          else
            for (let e = o - 1; e >= 0; e -= 1) {
              r[o] - r[e] < a && (l += 1);
            }
          return l;
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const { snapGrid: t, params: s } = e;
          function i() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
          }
          let r;
          if (
            (s.breakpoints && e.setBreakpoint(),
            [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
              t.complete && P(e, t);
            }),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            s.freeMode && s.freeMode.enabled && !s.cssMode)
          )
            i(), s.autoHeight && e.updateAutoHeight();
          else {
            if (
              ("auto" === s.slidesPerView || s.slidesPerView > 1) &&
              e.isEnd &&
              !s.centeredSlides
            ) {
              const t =
                e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
              r = e.slideTo(t.length - 1, 0, !1, !0);
            } else r = e.slideTo(e.activeIndex, 0, !1, !0);
            r || i();
          }
          s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit("update");
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          const s = this,
            i = s.params.direction;
          return (
            e || (e = "horizontal" === i ? "vertical" : "horizontal"),
            e === i ||
              ("horizontal" !== e && "vertical" !== e) ||
              (s.el.classList.remove(`${s.params.containerModifierClass}${i}`),
              s.el.classList.add(`${s.params.containerModifierClass}${e}`),
              s.emitContainerClasses(),
              (s.params.direction = e),
              s.slides.forEach((t) => {
                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
              }),
              s.emit("changeDirection"),
              t && s.update()),
            s
          );
        }
        changeLanguageDirection(e) {
          const t = this;
          (t.rtl && "rtl" === e) ||
            (!t.rtl && "ltr" === e) ||
            ((t.rtl = "rtl" === e),
            (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
            t.rtl
              ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
                (t.el.dir = "rtl"))
              : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
                (t.el.dir = "ltr")),
            t.update());
        }
        mount(e) {
          const t = this;
          if (t.mounted) return !0;
          let s = e || t.params.el;
          if (("string" == typeof s && (s = document.querySelector(s)), !s))
            return !1;
          (s.swiper = t),
            s.parentNode && s.parentNode.host && (t.isElement = !0);
          const i = () =>
            `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
          let r = (() => {
            if (s && s.shadowRoot && s.shadowRoot.querySelector) {
              return s.shadowRoot.querySelector(i());
            }
            return v(s, i())[0];
          })();
          return (
            !r &&
              t.params.createElements &&
              ((r = (function (e, t) {
                void 0 === t && (t = []);
                const s = document.createElement(e);
                return s.classList.add(...(Array.isArray(t) ? t : [t])), s;
              })("div", t.params.wrapperClass)),
              s.append(r),
              v(s, `.${t.params.slideClass}`).forEach((e) => {
                r.append(e);
              })),
            Object.assign(t, {
              el: s,
              wrapperEl: r,
              slidesEl: t.isElement ? s.parentNode.host : r,
              hostEl: t.isElement ? s.parentNode.host : s,
              mounted: !0,
              rtl: "rtl" === s.dir.toLowerCase() || "rtl" === g(s, "direction"),
              rtlTranslate:
                "horizontal" === t.params.direction &&
                ("rtl" === s.dir.toLowerCase() || "rtl" === g(s, "direction")),
              wrongRTL: "-webkit-box" === g(r, "display"),
            }),
            !0
          );
        }
        init(e) {
          const t = this;
          if (t.initialized) return t;
          return (
            !1 === t.mount(e) ||
              (t.emit("beforeInit"),
              t.params.breakpoints && t.setBreakpoint(),
              t.addClasses(),
              t.updateSize(),
              t.updateSlides(),
              t.params.watchOverflow && t.checkOverflow(),
              t.params.grabCursor && t.enabled && t.setGrabCursor(),
              t.params.loop && t.virtual && t.params.virtual.enabled
                ? t.slideTo(
                    t.params.initialSlide + t.virtual.slidesBefore,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  )
                : t.slideTo(
                    t.params.initialSlide,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  ),
              t.params.loop && t.loopCreate(),
              t.attachEvents(),
              [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e) => {
                e.complete
                  ? P(t, e)
                  : e.addEventListener("load", (e) => {
                      P(t, e.target);
                    });
              }),
              L(t),
              (t.initialized = !0),
              L(t),
              t.emit("init"),
              t.emit("afterInit")),
            t
          );
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          const s = this,
            { params: i, el: r, wrapperEl: n, slides: a } = s;
          return (
            void 0 === s.params ||
              s.destroyed ||
              (s.emit("beforeDestroy"),
              (s.initialized = !1),
              s.detachEvents(),
              i.loop && s.loopDestroy(),
              t &&
                (s.removeClasses(),
                r.removeAttribute("style"),
                n.removeAttribute("style"),
                a &&
                  a.length &&
                  a.forEach((e) => {
                    e.classList.remove(
                      i.slideVisibleClass,
                      i.slideActiveClass,
                      i.slideNextClass,
                      i.slidePrevClass
                    ),
                      e.removeAttribute("style"),
                      e.removeAttribute("data-swiper-slide-index");
                  })),
              s.emit("destroy"),
              Object.keys(s.eventsListeners).forEach((e) => {
                s.off(e);
              }),
              !1 !== e &&
                ((s.el.swiper = null),
                (function (e) {
                  const t = e;
                  Object.keys(t).forEach((e) => {
                    try {
                      t[e] = null;
                    } catch (e) {}
                    try {
                      delete t[e];
                    } catch (e) {}
                  });
                })(s)),
              (s.destroyed = !0)),
            null
          );
        }
        static extendDefaults(e) {
          f(K, e);
        }
        static get extendedDefaults() {
          return K;
        }
        static get defaults() {
          return X;
        }
        static installModule(e) {
          U.prototype.__modules__ || (U.prototype.__modules__ = []);
          const t = U.prototype.__modules__;
          "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
        }
        static use(e) {
          return Array.isArray(e)
            ? (e.forEach((e) => U.installModule(e)), U)
            : (U.installModule(e), U);
        }
      }
      Object.keys(q).forEach((e) => {
        Object.keys(q[e]).forEach((t) => {
          U.prototype[t] = q[e][t];
        });
      }),
        U.use([
          function (e) {
            let { swiper: t, on: s, emit: i } = e;
            const r = l();
            let n = null,
              a = null;
            const o = () => {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (i("beforeResize"), i("resize"));
              },
              d = () => {
                t && !t.destroyed && t.initialized && i("orientationchange");
              };
            s("init", () => {
              t.params.resizeObserver && void 0 !== r.ResizeObserver
                ? t &&
                  !t.destroyed &&
                  t.initialized &&
                  ((n = new ResizeObserver((e) => {
                    a = r.requestAnimationFrame(() => {
                      const { width: s, height: i } = t;
                      let r = s,
                        n = i;
                      e.forEach((e) => {
                        let {
                          contentBoxSize: s,
                          contentRect: i,
                          target: a,
                        } = e;
                        (a && a !== t.el) ||
                          ((r = i ? i.width : (s[0] || s).inlineSize),
                          (n = i ? i.height : (s[0] || s).blockSize));
                      }),
                        (r === s && n === i) || o();
                    });
                  })),
                  n.observe(t.el))
                : (r.addEventListener("resize", o),
                  r.addEventListener("orientationchange", d));
            }),
              s("destroy", () => {
                a && r.cancelAnimationFrame(a),
                  n && n.unobserve && t.el && (n.unobserve(t.el), (n = null)),
                  r.removeEventListener("resize", o),
                  r.removeEventListener("orientationchange", d);
              });
          },
          function (e) {
            let { swiper: t, extendParams: s, on: i, emit: r } = e;
            const n = [],
              a = l(),
              o = function (e, s) {
                void 0 === s && (s = {});
                const i = new (a.MutationObserver || a.WebkitMutationObserver)(
                  (e) => {
                    if (t.__preventObserver__) return;
                    if (1 === e.length) return void r("observerUpdate", e[0]);
                    const s = function () {
                      r("observerUpdate", e[0]);
                    };
                    a.requestAnimationFrame
                      ? a.requestAnimationFrame(s)
                      : a.setTimeout(s, 0);
                  }
                );
                i.observe(e, {
                  attributes: void 0 === s.attributes || s.attributes,
                  childList: void 0 === s.childList || s.childList,
                  characterData: void 0 === s.characterData || s.characterData,
                }),
                  n.push(i);
              };
            s({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              i("init", () => {
                if (t.params.observer) {
                  if (t.params.observeParents) {
                    const e = (function (e, t) {
                      const s = [];
                      let i = e.parentElement;
                      for (; i; )
                        t ? i.matches(t) && s.push(i) : s.push(i),
                          (i = i.parentElement);
                      return s;
                    })(t.el);
                    for (let t = 0; t < e.length; t += 1) o(e[t]);
                  }
                  o(t.el, { childList: t.params.observeSlideChildren }),
                    o(t.wrapperEl, { attributes: !1 });
                }
              }),
              i("destroy", () => {
                n.forEach((e) => {
                  e.disconnect();
                }),
                  n.splice(0, n.length);
              });
          },
        ]);
    },
  },
]);
