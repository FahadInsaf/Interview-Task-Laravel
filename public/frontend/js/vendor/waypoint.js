! function() {
    var e, n, x = [].indexOf || function(t) {
            for (var e = 0, n = this.length; e < n; e++)
                if (e in this && this[e] === t) return e;
            return -1
        },
        b = [].slice;
    e = this, n = function(c, o) {
        var e, r, l, s, n, a, u, i, f, h, d, p, y, v, w, g;

        function t(t) {
            var e = this;
            this.$element = t, this.element = t[0], this.didResize = !1, this.didScroll = !1, this.id = "context" + n++, this.oldScroll = {
                x: t.scrollLeft(),
                y: t.scrollTop()
            }, this.waypoints = {
                horizontal: {},
                vertical: {}
            }, t.data(a, this.id), u[this.id] = this, t.bind(p, function() {
                if (!e.didScroll && !i) return e.didScroll = !0, o.setTimeout(function() {
                    return e.doScroll(), e.didScroll = !1
                }, c[g].settings.scrollThrottle)
            }), t.bind(d, function() {
                if (!e.didResize) return e.didResize = !0, o.setTimeout(function() {
                    return c[g]("refresh"), e.didResize = !1
                }, c[g].settings.resizeThrottle)
            })
        }

        function S(t, e, n) {
            "bottom-in-view" === (n = c.extend({}, c.fn[w].defaults, n)).offset && (n.offset = function() {
                var t = c[g]("viewportHeight");
                return (t = !c.isWindow(e.element) ? e.$element.height() : t) - c(this).outerHeight()
            }), this.$element = t, this.element = t[0], this.axis = n.horizontal ? "horizontal" : "vertical", this.callback = n.handler, this.context = e, this.enabled = n.enabled, this.id = "waypoints" + y++, this.offset = null, this.options = n, e.waypoints[this.axis][this.id] = this, s[this.axis][this.id] = this, (n = null != (n = t.data(v)) ? n : []).push(this.id), t.data(v, n)
        }
        return e = c(o), i = 0 <= x.call(o, "ontouchstart"), s = {
            horizontal: {},
            vertical: {}
        }, u = {}, a = "waypoints-context-id", d = "resize.waypoints", p = "scroll.waypoints", y = n = 1, v = "waypoints-waypoint-ids", w = "waypoint", g = "waypoints", t.prototype.doScroll = function() {
            var o = this,
                t = {
                    horizontal: {
                        newScroll: this.$element.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.$element.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
            return !i || t.vertical.oldScroll && t.vertical.newScroll || c[g]("refresh"), c.each(t, function(t, i) {
                var r = [],
                    e = i.newScroll > i.oldScroll,
                    n = e ? i.forward : i.backward;
                return c.each(o.waypoints[t], function(t, e) {
                    var n;
                    return i.oldScroll < (n = e.offset) && n <= i.newScroll || i.newScroll < (n = e.offset) && n <= i.oldScroll ? r.push(e) : void 0
                }), r.sort(function(t, e) {
                    return t.offset - e.offset
                }), e || r.reverse(), c.each(r, function(t, e) {
                    if (e.options.continuous || t === r.length - 1) return e.trigger([n])
                })
            }), this.oldScroll = {
                x: t.horizontal.newScroll,
                y: t.vertical.newScroll
            }
        }, t.prototype.refresh = function() {
            var e = this,
                t = c.isWindow(this.element),
                n = this.$element.offset();
            return this.doScroll(), t = {
                horizontal: {
                    contextOffset: t ? 0 : n.left,
                    contextScroll: t ? 0 : this.oldScroll.x,
                    contextDimension: this.$element.width(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left",
                    offsetProp: "left"
                },
                vertical: {
                    contextOffset: t ? 0 : n.top,
                    contextScroll: t ? 0 : this.oldScroll.y,
                    contextDimension: t ? c[g]("viewportHeight") : this.$element.height(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up",
                    offsetProp: "top"
                }
            }, c.each(t, function(t, s) {
                return c.each(e.waypoints[t], function(t, e) {
                    var n, i, r = e.options.offset,
                        o = e.offset,
                        l = c.isWindow(e.element) ? 0 : e.$element.offset()[s.offsetProp];
                    if (c.isFunction(r) ? r = r.apply(e.element) : "string" == typeof r && (r = parseFloat(r), -1 < e.options.offset.indexOf("%") && (r = Math.ceil(s.contextDimension * r / 100))), e.offset = l - s.contextOffset + s.contextScroll - r, (!e.options.onlyOnScroll || null == o) && e.enabled) return null !== o && o < (n = s.oldScroll) && n <= e.offset ? e.trigger([s.backward]) : null !== o && o > (i = s.oldScroll) && i >= e.offset || null === o && s.oldScroll >= e.offset ? e.trigger([s.forward]) : void 0
                })
            })
        }, t.prototype.checkEmpty = function() {
            if (c.isEmptyObject(this.waypoints.horizontal) && c.isEmptyObject(this.waypoints.vertical)) return this.$element.unbind([d, p].join(" ")), delete u[this.id]
        }, r = t, S.prototype.trigger = function(t) {
            if (this.enabled) return null != this.callback && this.callback.apply(this.element, t), this.options.triggerOnce ? this.destroy() : void 0
        }, S.prototype.disable = function() {
            return this.enabled = !1
        }, S.prototype.enable = function() {
            return this.context.refresh(), this.enabled = !0
        }, S.prototype.destroy = function() {
            return delete s[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty()
        }, S.getWaypointsByElement = function(t) {
            var e, t = c(t).data(v);
            return t ? (e = c.extend({}, s.horizontal, s.vertical), c.map(t, function(t) {
                return e[t]
            })) : []
        }, l = S, h = {
            init: function(t, i) {
                return null == (i = null == i ? {} : i).handler && (i.handler = t), this.each(function() {
                    var t, e = c(this),
                        n = null != (t = i.context) ? t : c.fn[w].defaults.context;
                    return c.isWindow(n) || (n = e.closest(n)), n = c(n), t = (t = u[n.data(a)]) || new r(n), new l(e, t, i)
                }), c[g]("refresh"), this
            },
            disable: function() {
                return h._invoke(this, "disable")
            },
            enable: function() {
                return h._invoke(this, "enable")
            },
            destroy: function() {
                return h._invoke(this, "destroy")
            },
            prev: function(t, e) {
                return h._traverse.call(this, t, e, function(t, e, n) {
                    if (0 < e) return t.push(n[e - 1])
                })
            },
            next: function(t, e) {
                return h._traverse.call(this, t, e, function(t, e, n) {
                    if (e < n.length - 1) return t.push(n[e + 1])
                })
            },
            _traverse: function(e, t, n) {
                var i, r;
                return null == e && (e = "vertical"), r = f.aggregate(t = null == t ? o : t), i = [], this.each(function() {
                    var t = c.inArray(this, r[e]);
                    return n(i, t, r[e])
                }), this.pushStack(i)
            },
            _invoke: function(t, n) {
                return t.each(function() {
                    var t = l.getWaypointsByElement(this);
                    return c.each(t, function(t, e) {
                        return e[n](), !0
                    })
                }), this
            }
        }, c.fn[w] = function() {
            var t = arguments[0],
                e = 2 <= arguments.length ? b.call(arguments, 1) : [];
            return h[t] ? h[t].apply(this, e) : c.isFunction(t) ? h.init.apply(this, arguments) : c.isPlainObject(t) ? h.init.apply(this, [null, t]) : t ? c.error("The " + t + " method does not exist in jQuery Waypoints.") : c.error("jQuery Waypoints needs a callback function or handler option.")
        }, c.fn[w].defaults = {
            context: o,
            continuous: !0,
            enabled: !0,
            horizontal: !1,
            offset: 0,
            triggerOnce: !1
        }, f = {
            refresh: function() {
                return c.each(u, function(t, e) {
                    return e.refresh()
                })
            },
            viewportHeight: function() {
                var t;
                return null != (t = o.innerHeight) ? t : e.height()
            },
            aggregate: function(t) {
                var e, i = s;
                return (i = t ? null != (t = u[c(t).data(a)]) ? t.waypoints : void 0 : i) ? (e = {
                    horizontal: [],
                    vertical: []
                }, c.each(e, function(t, n) {
                    return c.each(i[t], function(t, e) {
                        return n.push(e)
                    }), n.sort(function(t, e) {
                        return t.offset - e.offset
                    }), e[t] = c.map(n, function(t) {
                        return t.element
                    }), e[t] = c.unique(e[t])
                }), e) : []
            },
            above: function(t) {
                return f._filter(t = null == t ? o : t, "vertical", function(t, e) {
                    return e.offset <= t.oldScroll.y
                })
            },
            below: function(t) {
                return f._filter(t = null == t ? o : t, "vertical", function(t, e) {
                    return e.offset > t.oldScroll.y
                })
            },
            left: function(t) {
                return f._filter(t = null == t ? o : t, "horizontal", function(t, e) {
                    return e.offset <= t.oldScroll.x
                })
            },
            right: function(t) {
                return f._filter(t = null == t ? o : t, "horizontal", function(t, e) {
                    return e.offset > t.oldScroll.x
                })
            },
            enable: function() {
                return f._invoke("enable")
            },
            disable: function() {
                return f._invoke("disable")
            },
            destroy: function() {
                return f._invoke("destroy")
            },
            extendFn: function(t, e) {
                return h[t] = e
            },
            _invoke: function(n) {
                var t = c.extend({}, s.vertical, s.horizontal);
                return c.each(t, function(t, e) {
                    return e[n](), !0
                })
            },
            _filter: function(t, e, n) {
                var i, r = u[c(t).data(a)];
                return r ? (i = [], c.each(r.waypoints[e], function(t, e) {
                    if (n(r, e)) return i.push(e)
                }), i.sort(function(t, e) {
                    return t.offset - e.offset
                }), c.map(i, function(t) {
                    return t.element
                })) : []
            }
        }, c[g] = function() {
            var t = arguments[0],
                e = 2 <= arguments.length ? b.call(arguments, 1) : [];
            return f[t] ? f[t].apply(null, e) : f.aggregate.call(null, t)
        }, c[g].settings = {
            resizeThrottle: 100,
            scrollThrottle: 30
        }, e.load(function() {
            return c[g]("refresh")
        })
    }, "function" == typeof define && define.amd ? define("waypoints", ["jquery"], function(t) {
        return n(t, e)
    }) : n(e.jQuery, e)
}.call(this);