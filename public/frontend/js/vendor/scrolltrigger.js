! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
    "use strict";

    function Pe(e) {
        return e
    }

    function _e(e) {
        return ft(e)[0] || (Ot(e) && !1 !== st.config().nullTargetWarn ? console.warn("Element not found:", e) : null)
    }

    function p(e) {
        return Math.round(1e5 * e) / 1e5 || 0
    }

    function n() {
        return "undefined" != typeof window
    }

    function i() {
        return st || n() && (st = window.gsap) && st.registerPlugin && st
    }

    function Ae(e) {
        return !!~h.indexOf(e)
    }

    function Re(e, t) {
        return ~kt.indexOf(e) && kt[kt.indexOf(e) + 1][t]
    }

    function Be(t, e) {
        var r = e.s,
            n = e.sc,
            i = C.indexOf(t),
            e = n === Ft.sc ? 1 : 2;
        return ~i || (i = C.push(t) - 1), C[i + e] || (C[i + e] = Re(t, r) || (Ae(t) ? n : function(e) {
            return arguments.length ? t[r] = e : t[r]
        }))
    }

    function Ie(e) {
        return Re(e, "getBoundingClientRect") || (Ae(e) ? function() {
            return Ut.width = at.innerWidth, Ut.height = at.innerHeight, Ut
        } : function() {
            return it(e)
        })
    }

    function ze(e, t) {
        t.s;
        var r, n = t.d2,
            i = t.d,
            t = t.a;
        return (r = "scroll" + n) && (t = Re(e, r)) ? t() - Ie(e)()[i] : Ae(e) ? (ut[r] || ct[r]) - (at["inner" + n] || ct["client" + n] || ut["client" + n]) : e[r] - e["offset" + n]
    }

    function o(e, t) {
        for (var r = 0; r < w.length; r += 3) t && !~t.indexOf(w[r + 1]) || e(w[r], w[r + 1], w[r + 2])
    }

    function Le(e) {
        return "function" == typeof e
    }

    function Ne(e) {
        return "number" == typeof e
    }

    function De(e) {
        return "object" == typeof e
    }

    function s(e) {
        return Le(e) && e()
    }

    function a(r, n) {
        return function() {
            var e = s(r),
                t = s(n);
            return function() {
                s(e), s(t)
            }
        }
    }

    function Fe(e, t, r) {
        return e && e.progress(t ? 0 : 1) && r && e.pause()
    }

    function We(e, t) {
        t = t(e);
        t && t.totalTime && (e.callbackAnimation = t)
    }

    function He(e) {
        return at.getComputedStyle(e)
    }

    function Ve(e, t) {
        for (var r in t) r in e || (e[r] = t[r]);
        return e
    }

    function je(e, t) {
        t = t.d2;
        return e["offset" + t] || e["client" + t] || 0
    }

    function qe(e) {
        var t, r = [],
            n = e.labels,
            i = e.duration();
        for (t in n) r.push(n[t] / i);
        return r
    }

    function Ue(i) {
        var o = st.utils.snap(i),
            s = Array.isArray(i) && i.slice(0).sort(function(e, t) {
                return e - t
            });
        return s ? function(e, t, r) {
            var n;
            if (void 0 === r && (r = .001), !t) return o(e);
            if (0 < t) {
                for (e -= r, n = 0; n < s.length; n++)
                    if (s[n] >= e) return s[n];
                return s[n - 1]
            }
            for (n = s.length, e += r; n--;)
                if (s[n] <= e) return s[n];
            return s[0]
        } : function(e, t, r) {
            void 0 === r && (r = .001);
            var n = o(e);
            return !t || Math.abs(n - e) < r || n - e < 0 == t < 0 ? n : o(t < 0 ? e - i : e + i)
        }
    }

    function l(t, r, e, n) {
        return e.split(",").forEach(function(e) {
            return t(r, e, n)
        })
    }

    function Xe(e, t, r) {
        return e.addEventListener(t, r, {
            passive: !0
        })
    }

    function Ye(e, t, r) {
        return e.removeEventListener(t, r)
    }

    function Ze(e, t) {
        var r, n;
        return Ot(e) && (n = ~(r = e.indexOf("=")) ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0, ~r && (e.indexOf("%") > r && (n *= t / 100), e = e.substr(0, r - 1)), e = n + (e in R ? R[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)), e
    }

    function $e(e, t, r, n, i, o, s, a) {
        var l = i.startColor,
            c = i.endColor,
            u = i.fontSize,
            f = i.indent,
            d = i.fontWeight,
            p = lt.createElement("div"),
            h = Ae(r) || "fixed" === Re(r, "pinType"),
            g = -1 !== e.indexOf("scroller"),
            i = h ? ut : r,
            r = -1 !== e.indexOf("start"),
            c = r ? l : c,
            d = "border-color:" + c + ";font-size:" + u + ";color:" + c + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return d += "position:" + ((g || a) && h ? "fixed;" : "absolute;"), !g && !a && h || (d += (n === Ft ? _ : A) + ":" + (o + parseFloat(f)) + "px;"), s && (d += "box-sizing:border-box;text-align:left;width:" + s.offsetWidth + "px;"), p._isStart = r, p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), p.style.cssText = d, p.innerText = t || 0 === t ? e + "-" + t : e, i.children[0] ? i.insertBefore(p, i.children[0]) : i.appendChild(p), p._offset = p["offset" + n.op.d2], x(p, 0, n, r), p
    }

    function c() {
        return 34 < St() - Tt && t()
    }

    function Ge() {
        t(), Tt || L("scrollStart"), Tt = St()
    }

    function Je() {
        return !ht && !k && !lt.fullscreenElement && g.restart(!0)
    }

    function u(e) {
        var t, r = st.ticker.frame,
            n = [],
            i = 0;
        if (S !== r || wt) {
            for (F(); i < z.length; i += 4)(t = at.matchMedia(z[i]).matches) !== z[i + 3] && ((z[i + 3] = t) ? n.push(i) : F(1, z[i]) || Le(z[i + 2]) && z[i + 2]());
            for (D(), i = 0; i < n.length; i++) t = n[i], bt = z[t], z[t + 2] = z[t + 1](e);
            bt = 0, d && f(0, 1), S = r, L("matchMedia")
        }
    }

    function Ke() {
        return Ye(U, "scrollEnd", Ke) || f(!0)
    }

    function r() {
        return C.forEach(function(e) {
            return "function" == typeof e && (e.rec = 0)
        })
    }

    function Qe(e, t, r, n) {
        if (e.parentNode !== t) {
            for (var i, o = H.length, s = t.style, a = e.style; o--;) s[i = H[o]] = r[i];
            s.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (s.display = "inline-block"), a[A] = a[_] = "auto", s.overflow = "visible", s.boxSizing = "border-box", s[Mt] = je(e, Dt) + Nt, s[Pt] = je(e, Ft) + Nt, s[It] = a[zt] = a.top = a[P] = "0", ot(n), a[Mt] = a.maxWidth = r[Mt], a[Pt] = a.maxHeight = r[Pt], a[It] = r[It], e.parentNode.insertBefore(t, e), t.appendChild(e)
        }
    }

    function et(e) {
        for (var t = V.length, r = e.style, n = [], i = 0; i < t; i++) n.push(V[i], r[V[i]]);
        return n.t = e, n
    }

    function tt(e, t, r, n, i, o, s, a, l, c, u, f, d) {
        Le(e) && (e = e(a)), Ot(e) && "max" === e.substr(0, 3) && (e = f + ("=" === e.charAt(4) ? Ze("0" + e.substr(3), r) : 0));
        var p, h, g, v, m = d ? d.time() : 0;
        return d && d.seek(0), Ne(e) ? s && x(s, r, n, !0) : (Le(t) && (t = t(a)), g = e.split(" "), h = _e(t) || ut, (t = it(h) || {}) && (t.left || t.top) || "none" !== He(h).display || (p = h.style.display, h.style.display = "block", t = it(h), p ? h.style.display = p : h.style.removeProperty("display")), p = Ze(g[0], t[n.d]), g = Ze(g[1] || "0", r), e = t[n.p] - l[n.p] - c + p + i - g, s && x(s, g, n, r - g < 20 || s._isStart && 20 < g), r -= r - g), o && (g = o._isStart, v = "scroll" + n.d2, x(o, r = e + r, n, g && 20 < r || !g && (u ? Math.max(ut[v], ct[v]) : o.parentNode[v]) <= r + 1), u && (l = it(s), u && (o.style[n.op.p] = l[n.op.p] - n.op.m - o._offset + Nt))), d && h && (v = it(h), d.seek(f), h = it(h), d._caScrollDist = v[n.p] - h[n.p], e = e / d._caScrollDist * f), d && d.seek(m), d ? e : Math.round(e)
    }

    function rt(e, t, r, n) {
        if (e.parentNode !== t) {
            var i, o, s = e.style;
            if (t === ut) {
                for (i in e._stOrig = s.cssText, o = He(e)) + i || q.test(i) || !o[i] || "string" != typeof s[i] || "0" === i || (s[i] = o[i]);
                s.top = r, s.left = n
            } else s.cssText = e._stOrig;
            st.core.getCache(e).uncache = 1, t.appendChild(e)
        }
    }

    function nt(a, e) {
        function l(e, t, r, n, i) {
            var o = l.tween,
                s = t.onComplete;
            return o && o.kill(), c = Math.round(r), t[d] = e, (t.modifiers = {})[d] = function(e) {
                return (e = p(f())) !== c && e !== u && 2 < Math.abs(e - c) && 2 < Math.abs(e - u) ? (o.kill(), l.tween = 0) : e = r + n * o.ratio + i * o.ratio * o.ratio, u = c, c = p(e)
            }, t.onComplete = function() {
                l.tween = 0, s && s.call(o)
            }, o = l.tween = st.to(a, t)
        }
        var c, u, f = Be(a, e),
            d = "_scroll" + e.p2;
        return a[d] = f, Xe(a, "wheel", function() {
            return l.tween && l.tween.kill() && (l.tween = 0)
        }), l
    }

    function it(e, t) {
        return t = t && "matrix(1, 0, 0, 1, 0, 0)" !== He(e)[m] && st.to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0
        }).progress(1), e = e.getBoundingClientRect(), t && t.progress(0).kill(), e
    }

    function x(e, t, r, n) {
        var i = {
                display: "block"
            },
            o = r[n ? "os2" : "p2"],
            s = r[n ? "p2" : "os2"];
        e._isFlipped = n, i[r.a + "Percent"] = n ? -100 : 0, i[r.a] = n ? "1px" : 0, i["border" + o + Lt] = 1, i["border" + s + Lt] = 0, i[r.p] = t + "px", st.set(e, i)
    }

    function f(e, t) {
        !Tt || e ? (T = !0, e = L("refreshInit"), mt && U.sort(), t || F(), Vt.forEach(function(e) {
            return e.refresh()
        }), Vt.forEach(function(e) {
            return "max" === e.vars.end && e.setPositions(e.start, ze(e.scroller, e._dir))
        }), e.forEach(function(e) {
            return e && e.render && e.render(-1)
        }), r(), g.pause(), T = !1, L("refresh")) : Xe(U, "scrollEnd", Ke)
    }

    function t() {
        if (!T) {
            var e = Vt.length,
                t = St(),
                r = 50 <= t - O,
                n = e && Vt[0].scroll();
            if (qt = n < W ? -1 : 1, W = n, r && (Tt && !gt && 200 < t - Tt && (Tt = 0, L("scrollEnd")), pt = O, O = t), qt < 0) {
                for (vt = e; 0 < vt--;) Vt[vt] && Vt[vt].update(0, r);
                qt = 1
            } else
                for (vt = 0; vt < e; vt++) Vt[vt] && Vt[vt].update(0, r)
        }
    }

    function ot(e) {
        if (e) {
            var t, r, n = e.t.style,
                i = e.length,
                o = 0;
            for ((e.t._gsap || st.core.getCache(e.t)).uncache = 1; o < i; o += 2) r = e[o + 1], t = e[o], r ? n[t] = r : n[t] && n.removeProperty(t.replace(j, "-$1").toLowerCase())
        }
    }
    var st, d, at, lt, ct, ut, h, g, ft, dt, pt, v, ht, gt, m, vt, y, b, w, mt, xt, k, yt, bt, S, T, wt = 1,
        kt = [],
        C = [],
        St = Date.now,
        O = St(),
        Tt = 0,
        Ct = 1,
        Ot = function(e) {
            return "string" == typeof e
        },
        Et = Math.abs,
        E = "scrollLeft",
        M = "scrollTop",
        P = "left",
        _ = "right",
        A = "bottom",
        Mt = "width",
        Pt = "height",
        _t = "Right",
        At = "Left",
        Rt = "Top",
        Bt = "Bottom",
        It = "padding",
        zt = "margin",
        Lt = "Width",
        Nt = "px",
        Dt = {
            s: E,
            p: P,
            p2: At,
            os: _,
            os2: _t,
            d: Mt,
            d2: Lt,
            a: "x",
            sc: function(e) {
                return arguments.length ? at.scrollTo(e, Ft.sc()) : at.pageXOffset || lt[E] || ct[E] || ut[E] || 0
            }
        },
        Ft = {
            s: M,
            p: "top",
            p2: Rt,
            os: A,
            os2: Bt,
            d: Pt,
            d2: "Height",
            a: "y",
            op: Dt,
            sc: function(e) {
                return arguments.length ? at.scrollTo(Dt.sc(), e) : at.pageYOffset || lt[M] || ct[M] || ut[M] || 0
            }
        },
        Wt = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal"
        },
        Ht = {
            toggleActions: "play",
            anticipatePin: 0
        },
        R = {
            top: 0,
            left: 0,
            center: .5,
            bottom: 1,
            right: 1
        },
        Vt = [],
        jt = {},
        B = {},
        I = [],
        z = [],
        L = function(e) {
            return B[e] && B[e].map(function(e) {
                return e()
            }) || I
        },
        N = [],
        D = function(e) {
            for (var t = 0; t < N.length; t += 5) e && N[t + 4] !== e || (N[t].style.cssText = N[t + 1], N[t].getBBox && N[t].setAttribute("transform", N[t + 2] || ""), N[t + 3].uncache = 1)
        },
        F = function(e, t) {
            var r;
            for (vt = 0; vt < Vt.length; vt++) r = Vt[vt], t && r.media !== t || (e ? r.kill(1) : r.revert());
            t && D(t), t || L("revert")
        },
        W = 0,
        qt = 1,
        H = [P, "top", A, _, zt + Bt, zt + _t, zt + Rt, zt + At, "display", "flexShrink", "float", "zIndex", "grid-column-start", "grid-column-end", "grid-row-start", "grid-row-end", "grid-area", "justify-self", "align-self", "place-self"],
        V = H.concat([Mt, Pt, "boxSizing", "max" + Lt, "maxHeight", "position", zt, It, It + Rt, It + _t, It + Bt, It + At]),
        j = /([A-Z])/g,
        Ut = {
            left: 0,
            top: 0
        },
        q = /(?:webkit|moz|length|cssText|inset)/i;
    Dt.op = Ft;
    var U = (Xt.prototype.init = function(m, x) {
        var d, n, f, y, b, w, k, S, T, C, O, E, M, P, _, A, R, p, B, I, h, z, g, v, L, N, D, e, F, W, H, V, j, q, U, X, i, Y, Z, $, G, J, K, Q, ee, t, te, re, ne, ie, r, oe, se, ae, le, ce, ue, o, fe, de, pe, he, ge, ve, s, me, xe, ye, be, a, l, c, u, we, ke, Se, Te, Ce, Oe, Ee, Me;
        this.progress = this.start = 0, this.vars && this.kill(1), Ct ? (U = (m = Ve(Ot(m) || Ne(m) || m.nodeType ? {
            trigger: m
        } : m, Ht)).onUpdate, X = m.toggleClass, i = m.id, Y = m.onToggle, Z = m.onRefresh, $ = m.scrub, G = m.trigger, J = m.pin, K = m.pinSpacing, Q = m.invalidateOnRefresh, ee = m.anticipatePin, t = m.onScrubComplete, te = m.onSnapComplete, re = m.once, ne = m.snap, ie = m.pinReparent, r = m.pinSpacer, oe = m.containerAnimation, se = m.fastScrollEnd, ae = m.preventOverlaps, le = m.horizontal || m.containerAnimation && !1 !== m.horizontal ? Dt : Ft, ce = !$ && 0 !== $, ue = _e(m.scroller || at), o = st.core.getCache(ue), fe = Ae(ue), de = "fixed" === ("pinType" in m ? m.pinType : Re(ue, "pinType") || fe && "fixed"), pe = [m.onEnter, m.onLeave, m.onEnterBack, m.onLeaveBack], he = ce && m.toggleActions.split(" "), u = ("markers" in m ? m : Ht).markers, ge = !fe && parseFloat(He(ue)["border" + le.p2 + Lt]) || 0, ve = this, s = m.onRefreshInit && function() {
            return m.onRefreshInit(ve)
        }, Te = ue, Ce = fe, Oe = le.d, Ee = le.d2, Me = le.a, me = (Me = Re(Te, "getBoundingClientRect")) ? function() {
            return Me()[Oe]
        } : function() {
            return (Ce ? at["inner" + Ee] : Te["client" + Ee]) || 0
        }, Se = ue, xe = !fe || ~kt.indexOf(Se) ? Ie(Se) : function() {
            return Ut
        }, ye = 0, be = Be(ue, le), ve.media = bt, ve._dir = le, ee *= 45, ve.scroller = ue, ve.scroll = oe ? oe.time.bind(oe) : be, y = be(), ve.vars = m, x = x || m.animation, "refreshPriority" in m && (mt = 1), o.tweenScroll = o.tweenScroll || {
            top: nt(ue, Ft),
            left: nt(ue, Dt)
        }, ve.tweenTo = d = o.tweenScroll[le.p], x && (x.vars.lazy = !1, x._initted || !1 !== x.vars.immediateRender && !1 !== m.immediateRender && x.render(0, !0, !0), ve.animation = x.pause(), x.scrollTrigger = ve, (e = Ne($) && $) && (D = st.to(x, {
            ease: "power3",
            duration: e,
            onComplete: function() {
                return t && t(ve)
            }
        })), L = 0, i = i || x.vars.id), Vt.push(ve), ne && (De(ne) && !ne.push || (ne = {
            snapTo: ne
        }), "scrollBehavior" in ut.style && st.set(fe ? [ut, ct] : ue, {
            scrollBehavior: "auto"
        }), f = Le(ne.snapTo) ? ne.snapTo : "labels" === ne.snapTo ? (ke = x, function(e) {
            return st.utils.snap(qe(ke), e)
        }) : "labelsDirectional" === ne.snapTo ? (we = x, function(e, t) {
            return Ue(qe(we))(e, t.direction)
        }) : !1 !== ne.directional ? function(e, t) {
            return Ue(ne.snapTo)(e, t.direction)
        } : st.utils.snap(ne.snapTo), F = De(F = ne.duration || {
            min: .1,
            max: 2
        }) ? dt(F.min, F.max) : dt(F, F), W = st.delayedCall(ne.delay || e / 2 || .1, function() {
            var e, t, r, n, i, o, s, a, l, c, u;
            Math.abs(ve.getVelocity()) < 10 && !gt && ye !== be() ? (t = ((e = x && !ce ? x.totalProgress() : ve.progress) - N) / (St() - pt) * 1e3 || 0, r = st.utils.clamp(-ve.progress, 1 - ve.progress, Et(t / 2) * t / .185), n = ve.progress + (!1 === ne.inertia ? 0 : r), i = dt(0, 1, f(n, ve)), o = be(), s = Math.round(w + i * E), a = ne.onStart, l = ne.onInterrupt, c = ne.onComplete, u = d.tween, o <= k && w <= o && s !== o && (u && !u._initted && u.data <= Et(s - o) || (!1 === ne.inertia && (r = i - ve.progress), d(s, {
                duration: F(Et(.185 * Math.max(Et(n - e), Et(i - e)) / t / .05 || 0)),
                ease: ne.ease || "power3",
                data: Et(s - o),
                onInterrupt: function() {
                    return W.restart(!0) && l && l(ve)
                },
                onComplete: function() {
                    ye = be(), L = N = x && !ce ? x.totalProgress() : ve.progress, te && te(ve), c && c(ve)
                }
            }, o, r * E, s - o - r * E), a && a(ve, d.tween)))) : ve.isActive && W.restart(!0)
        }).pause()), i && (jt[i] = ve), G = ve.trigger = _e(G || J), J = !0 === J ? G : _e(J), Ot(X) && (X = {
            targets: G,
            className: X
        }), J && (!1 === K || K === zt || (K = !(!K && "flex" === He(J.parentNode).display) && It), ve.pin = J, !1 !== m.force3D && st.set(J, {
            force3D: !0
        }), (n = st.core.getCache(J)).spacer ? M = n.pinState : (r && ((r = _e(r)) && !r.nodeType && (r = r.current || r.nativeElement), n.spacerIsNative = !!r, r && (n.spacerState = et(r))), n.spacer = A = r || lt.createElement("div"), A.classList.add("pin-spacer"), i && A.classList.add("pin-spacer-" + i), n.pinState = M = et(J)), ve.spacer = A = n.spacer, c = He(J), h = c[K + le.os2], R = st.getProperty(J), p = st.quickSetter(J, le.a, Nt), Qe(J, A, c), _ = et(J)), u && (c = De(u) ? Ve(u, Wt) : Wt, C = $e("scroller-start", i, ue, le, c, 0), O = $e("scroller-end", i, ue, le, c, 0, C), u = C["offset" + le.op.d2], S = $e("start", i, ue, le, c, u, 0, oe), T = $e("end", i, ue, le, c, u, 0, oe), oe && (q = st.quickSetter([S, T], le.a, Nt)), de || kt.length && !0 === Re(ue, "fixedMarkers") || (u = He(c = fe ? ut : ue).position, c.style.position = "absolute" === u || "fixed" === u ? u : "relative", st.set([C, O], {
            force3D: !0
        }), g = st.quickSetter(C, le.a, Nt), v = st.quickSetter(O, le.a, Nt))), oe && (a = oe.vars.onUpdate, l = oe.vars.onUpdateParams, oe.eventCallback("onUpdate", function() {
            ve.update(0, 0, 1), a && a.apply(l || [])
        })), ve.previous = function() {
            return Vt[Vt.indexOf(ve) - 1]
        }, ve.next = function() {
            return Vt[Vt.indexOf(ve) + 1]
        }, ve.revert = function(e) {
            var t = !1 !== e || !ve.enabled,
                e = ht;
            t !== ve.isReverted && (t && (ve.scroll.rec || (ve.scroll.rec = be()), V = Math.max(be(), ve.scroll.rec || 0), H = ve.progress, j = x && x.progress()), S && [S, T, C, O].forEach(function(e) {
                return e.style.display = t ? "none" : "block"
            }), t && (ht = 1), ve.update(t), ht = e, J && (t ? function(e, t, r) {
                ot(r);
                r = e._gsap;
                r.spacerIsNative ? ot(r.spacerState) : e.parentNode !== t || (r = t.parentNode) && (r.insertBefore(e, t), r.removeChild(t))
            }(J, A, M) : ie && ve.isActive || Qe(J, A, He(J), z)), ve.isReverted = t)
        }, ve.refresh = function(e, t) {
            if (!ht && ve.enabled || t)
                if (J && e && Tt) Xe(Xt, "scrollEnd", Ke);
                else {
                    ht = 1, D && D.pause(), Q && x && x.progress(0).invalidate(), ve.isReverted || ve.revert();
                    for (var r, n, i, o, s, a, l = me(), c = xe(), u = oe ? oe.duration() : ze(ue, le), f = 0, d = 0, p = m.end, t = m.endTrigger || G, h = m.start || (0 !== m.start && G ? J ? "0 0" : "0 100%" : 0), g = m.pinnedContainer && _e(m.pinnedContainer), e = G && Math.max(0, Vt.indexOf(ve)) || 0, v = e; v--;)(i = Vt[v]).end || i.refresh(0, 1) || (ht = 1), !(o = i.pin) || o !== G && o !== J || i.isReverted || ((a = a || []).unshift(i), i.revert());
                    for (Le(h) && (h = h(ve)), w = tt(h, G, l, le, be(), S, C, ve, c, ge, de, u, oe) || (J ? -.001 : 0), Le(p) && (p = p(ve)), Ot(p) && !p.indexOf("+=") && (~p.indexOf(" ") ? p = (Ot(h) ? h.split(" ")[0] : "") + p : (f = Ze(p.substr(2), l), p = Ot(h) ? h : w + f, t = G)), k = Math.max(w, tt(p || (t ? "100% 0" : u), t, l, le, be() + f, T, O, ve, c, ge, de, u, oe)) || -.001, E = k - w || (w -= .01) && .001, f = 0, v = e; v--;)(o = (i = Vt[v]).pin) && i.start - i._pinPush < w && !oe && (r = i.end - i.start, o !== G && o !== g || Ne(h) || (f += r * (1 - i.progress)), o === J && (d += r));
                    if (w += f, k += f, ve._pinPush = d, S && f && ((r = {})[le.a] = "+=" + f, g && (r[le.p] = "-=" + be()), st.set([S, T], r)), J) r = He(J), c = le === Ft, e = be(), B = parseFloat(R(le.a)) + d, !u && 1 < k && ((fe ? ut : ue).style["overflow-" + le.a] = "scroll"), Qe(J, A, r), _ = et(J), n = it(J, !0), u = de && Be(ue, c ? Dt : Ft)(), K && ((z = [K + le.os2, E + d + Nt]).t = A, (v = K === It ? je(J, le) + E + d : 0) && z.push(le.d, v + Nt), ot(z), de && be(V)), de && ((s = {
                        top: n.top + (c ? e - w : u) + Nt,
                        left: n.left + (c ? u : e - w) + Nt,
                        boxSizing: "border-box",
                        position: "fixed"
                    })[Mt] = s.maxWidth = Math.ceil(n.width) + Nt, s[Pt] = s.maxHeight = Math.ceil(n.height) + Nt, s[zt] = s[zt + Rt] = s[zt + _t] = s[zt + Bt] = s[zt + At] = "0", s[It] = r[It], s[It + Rt] = r[It + Rt], s[It + _t] = r[It + _t], s[It + Bt] = r[It + Bt], s[It + At] = r[It + At], P = function(e, t, r) {
                        for (var n, i = [], o = e.length, s = r ? 8 : 0; s < o; s += 2) n = e[s], i.push(n, n in t ? t[n] : e[s + 1]);
                        return i.t = e.t, i
                    }(M, s, ie)), x ? (s = x._initted, xt(1), x.render(x.duration(), !0, !0), I = R(le.a) - B + E + d, E !== I && P.splice(P.length - 2, 2), x.render(0, !0, !0), s || x.invalidate(), xt(0)) : I = E;
                    else if (G && be() && !oe)
                        for (n = G.parentNode; n && n !== ut;) n._pinOffset && (w -= n._pinOffset, k -= n._pinOffset), n = n.parentNode;
                    a && a.forEach(function(e) {
                        return e.revert(!1)
                    }), ve.start = w, ve.end = k, y = b = be(), oe || (y < V && be(V), ve.scroll.rec = 0), ve.revert(!1), ht = 0, x && ce && x._initted && x.progress() !== j && x.progress(j, !0).render(x.time(), !0, !0), H === ve.progress && !oe || (x && !ce && x.totalProgress(H, !0), ve.progress = H, ve.update(0, 0, 1)), J && K && (A._pinOffset = Math.round(ve.progress * I)), Z && Z(ve)
                }
        }, ve.getVelocity = function() {
            return (be() - b) / (St() - pt) * 1e3 || 0
        }, ve.endAnimation = function() {
            Fe(ve.callbackAnimation), x && (D ? D.progress(1) : x.paused() ? ce || Fe(x, ve.direction < 0, 1) : Fe(x, x.reversed()))
        }, ve.labelToScroll = function(e) {
            return x && x.labels && (w || ve.refresh() || w) + x.labels[e] / x.duration() * E || 0
        }, ve.getTrailing = function(t) {
            var e = Vt.indexOf(ve),
                e = 0 < ve.direction ? Vt.slice(0, e).reverse() : Vt.slice(e + 1);
            return Ot(t) ? e.filter(function(e) {
                return e.vars.preventOverlaps === t
            }) : e
        }, ve.update = function(e, t, r) {
            var n, i, o, s, a, l, c, u, f;
            oe && !r && !e || (l = ve.scroll(), f = (u = e ? 0 : (l - w) / E) < 0 ? 0 : 1 < u ? 1 : u || 0, c = ve.progress, t && (b = y, y = oe ? be() : l, ne && (N = L, L = x && !ce ? x.totalProgress() : f)), (f = ee && !f && J && !ht && !wt && Tt && w < l + (l - b) / (St() - pt) * ee ? 1e-4 : f) !== c && ve.enabled && (r = (s = (n = ve.isActive = !!f && f < 1) != (!!c && c < 1)) || !!f != !!c, ve.direction = c < f ? 1 : -1, ve.progress = f, r && !ht && (i = f && !c ? 0 : 1 === f ? 1 : 1 === c ? 2 : 3, ce && (o = !s && "none" !== he[i + 1] && he[i + 1] || he[i], a = x && ("complete" === o || "reset" === o || o in x))), ae && s && (a || $ || !x) && (Le(ae) ? ae(ve) : ve.getTrailing(ae).forEach(function(e) {
                return e.endAnimation()
            })), ce || (!D || ht || wt ? x && x.totalProgress(f, !!ht) : (D.vars.totalProgress = f, D.invalidate().restart())), J && (e && K && (A.style[K + le.os2] = h), de ? r && (u = !e && c < f && l < k + 1 && l + 1 >= ze(ue, le), ie && (e || !n && !u ? rt(J, A) : (t = it(J, !0), c = l - w, rt(J, ut, t.top + (le === Ft ? c : 0) + Nt, t.left + (le === Ft ? 0 : c) + Nt))), ot(n || u ? P : _), I !== E && f < 1 && n || p(B + (1 !== f || u ? 0 : I))) : p(B + I * f)), !ne || d.tween || ht || wt || W.restart(!0), X && (s || re && f && (f < 1 || !yt)) && ft(X.targets).forEach(function(e) {
                return e.classList[n || re ? "add" : "remove"](X.className)
            }), !U || ce || e || U(ve), r && !ht ? (ce && (a && ("complete" === o ? x.pause().totalProgress(1) : "reset" === o ? x.restart(!0).pause() : "restart" === o ? x.restart(!0) : x[o]()), U && U(ve)), !s && yt || (Y && s && We(ve, Y), pe[i] && We(ve, pe[i]), re && (1 === f ? ve.kill(!1, 1) : pe[i] = 0), s || pe[i = 1 === f ? 1 : 3] && We(ve, pe[i])), se && !n && Math.abs(ve.getVelocity()) > (Ne(se) ? se : 2500) && (Fe(ve.callbackAnimation), D ? D.progress(1) : Fe(x, !f, 1))) : ce && U && !ht && U(ve)), v && (f = oe ? l / oe.duration() * (oe._caScrollDist || 0) : l, g(f + (C._isFlipped ? 1 : 0)), v(f)), q && q(-l / oe.duration() * (oe._caScrollDist || 0)))
        }, ve.enable = function(e, t) {
            ve.enabled || (ve.enabled = !0, Xe(ue, "resize", Je), Xe(ue, "scroll", Ge), s && Xe(Xt, "refreshInit", s), !1 !== e && (ve.progress = H = 0, y = b = ye = be()), !1 !== t && ve.refresh())
        }, ve.getTween = function(e) {
            return e && d ? d.tween : D
        }, ve.setPositions = function(e, t) {
            ve.start = w = e, ve.end = k = t, E = t - e, ve.update()
        }, ve.disable = function(e, t) {
            if (ve.enabled && (!1 !== e && ve.revert(), ve.enabled = ve.isActive = !1, t || D && D.pause(), V = 0, n && (n.uncache = 1), s && Ye(Xt, "refreshInit", s), W && (W.pause(), d.tween && d.tween.kill() && (d.tween = 0)), !fe)) {
                for (var r = Vt.length; r--;)
                    if (Vt[r].scroller === ue && Vt[r] !== ve) return;
                Ye(ue, "resize", Je), Ye(ue, "scroll", Ge)
            }
        }, ve.kill = function(e, t) {
            ve.disable(e, t), D && D.kill(), i && delete jt[i];
            var r = Vt.indexOf(ve);
            0 <= r && Vt.splice(r, 1), r === vt && 0 < qt && vt--, r = 0, Vt.forEach(function(e) {
                return e.scroller === ve.scroller && (r = 1)
            }), r || (ve.scroll.rec = 0), x && (x.scrollTrigger = null, e && x.render(-1), t || x.kill()), S && [S, T, C, O].forEach(function(e) {
                return e.parentNode && e.parentNode.removeChild(e)
            }), J && (n && (n.uncache = 1), r = 0, Vt.forEach(function(e) {
                return e.pin === J && r++
            }), r || (n.spacer = 0))
        }, ve.enable(!1, !1), x && x.add && !E ? st.delayedCall(.01, function() {
            return w || k || ve.refresh()
        }) && (E = .01) && (w = k = 0) : ve.refresh()) : this.update = this.refresh = this.kill = Pe
    }, Xt.register = function(e) {
        var t, r;
        return !d && (st = e || i(), n() && window.document && (at = window, lt = document, ct = lt.documentElement, ut = lt.body), st && (ft = st.utils.toArray, dt = st.utils.clamp, xt = st.core.suppressOverwrites || Pe, st.core.globals("ScrollTrigger", Xt), ut)) && (Xe(at, "wheel", Ge), h = [at, lt, ct, ut], Xe(lt, "scroll", Ge), r = (t = ut.style).borderTopStyle, t.borderTopStyle = "solid", e = it(ut), Ft.m = Math.round(e.top + Ft.sc()) || 0, Dt.m = Math.round(e.left + Dt.sc()) || 0, r ? t.borderTopStyle = r : t.removeProperty("border-top-style"), v = setInterval(c, 200), st.delayedCall(.5, function() {
            return wt = 0
        }), Xe(lt, "touchcancel", Pe), Xe(ut, "touchstart", Pe), l(Xe, lt, "pointerdown,touchstart,mousedown", function() {
            return gt = 1
        }), l(Xe, lt, "pointerup,touchend,mouseup", function() {
            return gt = 0
        }), m = st.utils.checkPrefix("transform"), V.push(m), d = St(), g = st.delayedCall(.2, f).pause(), w = [lt, "visibilitychange", function() {
            var e = at.innerWidth,
                t = at.innerHeight;
            lt.hidden ? (y = e, b = t) : y === e && b === t || Je()
        }, lt, "DOMContentLoaded", f, at, "load", function() {
            return Tt || f()
        }, at, "resize", Je], o(Xe)), d
    }, Xt.defaults = function(e) {
        for (var t in e) Ht[t] = e[t]
    }, Xt.kill = function() {
        Ct = 0, Vt.slice(0).forEach(function(e) {
            return e.kill(1)
        })
    }, Xt.config = function(e) {
        "limitCallbacks" in e && (yt = !!e.limitCallbacks);
        var t = e.syncInterval;
        t && clearInterval(v) || (v = t) && setInterval(c, t), "autoRefreshEvents" in e && (o(Ye), o(Xe, e.autoRefreshEvents || "none"), k = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
    }, Xt.scrollerProxy = function(e, t) {
        var r = _e(e),
            n = C.indexOf(r),
            e = Ae(r);
        ~n && C.splice(n, e ? 6 : 2), e ? kt.unshift(at, t, ut, t, ct, t) : kt.unshift(r, t)
    }, Xt.matchMedia = function(e) {
        var t, r, n, i, o;
        for (r in e) n = z.indexOf(r), i = e[r], "all" === (bt = r) ? i() : (t = at.matchMedia(r)) && (t.matches && (o = i()), ~n ? (z[n + 1] = a(z[n + 1], i), z[n + 2] = a(z[n + 2], o)) : (n = z.length, z.push(r, i, o), t.addListener ? t.addListener(u) : t.addEventListener("change", u)), z[n + 3] = t.matches), bt = 0;
        return z
    }, Xt.clearMatchMedia = function(e) {
        e || (z.length = 0), 0 <= (e = z.indexOf(e)) && z.splice(e, 4)
    }, Xt.isInViewport = function(e, t, r) {
        e = (Ot(e) ? _e(e) : e).getBoundingClientRect(), t = e[r ? Mt : Pt] * t || 0;
        return r ? 0 < e.right - t && e.left + t < at.innerWidth : 0 < e.bottom - t && e.top + t < at.innerHeight
    }, Xt.positionInViewport = function(e, t, r) {
        var n = (e = Ot(e) ? _e(e) : e).getBoundingClientRect(),
            e = n[r ? Mt : Pt],
            t = null == t ? e / 2 : t in R ? R[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0;
        return r ? (n.left + t) / at.innerWidth : (n.top + t) / at.innerHeight
    }, Xt);

    function Xt(e, t) {
        d || Xt.register(st) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(e, t)
    }
    U.version = "3.9.0", U.saveStyles = function(e) {
        return e ? ft(e).forEach(function(e) {
            var t;
            e && e.style && (0 <= (t = N.indexOf(e)) && N.splice(t, 5), N.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), st.core.getCache(e), bt))
        }) : N
    }, U.revert = function(e, t) {
        return F(!e, t)
    }, U.create = function(e, t) {
        return new U(e, t)
    }, U.refresh = function(e) {
        return e ? Je() : (d || U.register()) && f(!0)
    }, U.update = t, U.clearScrollMemory = r, U.maxScroll = function(e, t) {
        return ze(e, t ? Dt : Ft)
    }, U.getScrollFunc = function(e, t) {
        return Be(_e(e), t ? Dt : Ft)
    }, U.getById = function(e) {
        return jt[e]
    }, U.getAll = function() {
        return Vt.slice(0)
    }, U.isScrolling = function() {
        return !!Tt
    }, U.snapDirectional = Ue, U.addEventListener = function(e, t) {
        e = B[e] || (B[e] = []);
        ~e.indexOf(t) || e.push(t)
    }, U.removeEventListener = function(e, t) {
        e = B[e], t = e && e.indexOf(t);
        0 <= t && e.splice(t, 1)
    }, U.batch = function(e, t) {
        var r, n = [],
            i = {},
            o = t.interval || .016,
            s = t.batchMax || 1e9;
        for (r in t) i[r] = "on" === r.substr(0, 2) && Le(t[r]) && "onRefreshInit" !== r ? function(e) {
            var t = [],
                r = [],
                n = st.delayedCall(o, function() {
                    e(t, r), t = [], r = []
                }).pause();
            return function(e) {
                t.length || n.restart(!0), t.push(e.trigger), r.push(e), s <= t.length && n.progress(1)
            }
        }(t[r]) : t[r];
        return Le(s) && (s = s(), Xe(U, "refresh", function() {
            return s = t.batchMax()
        })), ft(e).forEach(function(e) {
            var t = {};
            for (r in i) t[r] = i[r];
            t.trigger = e, n.push(U.create(t))
        }), n
    }, U.sort = function(e) {
        return Vt.sort(e || function(e, t) {
            return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0))
        })
    }, i() && st.registerPlugin(U), e.ScrollTrigger = U, e.default = U, "undefined" == typeof window || window !== e ? Object.defineProperty(e, "__esModule", {
        value: !0
    }) : delete e.default
});