! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function(l) {
    function s(e, t) {
        var i, s, n = e.nodeName.toLowerCase();
        return "area" === n ? (s = (i = e.parentNode).name, !(!e.href || !s || "map" !== i.nodeName.toLowerCase()) && (!!(s = l("img[usemap='#" + s + "']")[0]) && a(s))) : (/^(input|select|textarea|button|object)$/.test(n) ? !e.disabled : "a" === n && e.href || t) && a(e)
    }

    function a(e) {
        return l.expr.filters.visible(e) && !l(e).parents().addBack().filter(function() {
            return "hidden" === l.css(this, "visibility")
        }).length
    }
    var e, n, t, i;
    l.ui = l.ui || {}, l.extend(l.ui, {
        version: "1.11.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), l.fn.extend({
        scrollParent: function(e) {
            var t = this.css("position"),
                i = "absolute" === t,
                s = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                e = this.parents().filter(function() {
                    var e = l(this);
                    return (!i || "static" !== e.css("position")) && s.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
                }).eq(0);
            return "fixed" !== t && e.length ? e : l(this[0].ownerDocument || document)
        },
        uniqueId: (i = 0, function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++i)
            })
        }),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && l(this).removeAttr("id")
            })
        }
    }), l.extend(l.expr[":"], {
        data: l.expr.createPseudo ? l.expr.createPseudo(function(t) {
            return function(e) {
                return !!l.data(e, t)
            }
        }) : function(e, t, i) {
            return !!l.data(e, i[3])
        },
        focusable: function(e) {
            return s(e, !isNaN(l.attr(e, "tabindex")))
        },
        tabbable: function(e) {
            var t = l.attr(e, "tabindex"),
                i = isNaN(t);
            return (i || 0 <= t) && s(e, !i)
        }
    }), l("<a>").outerWidth(1).jquery || l.each(["Width", "Height"], function(e, i) {
        function s(e, t, i, s) {
            return l.each(n, function() {
                t -= parseFloat(l.css(e, "padding" + this)) || 0, i && (t -= parseFloat(l.css(e, "border" + this + "Width")) || 0), s && (t -= parseFloat(l.css(e, "margin" + this)) || 0)
            }), t
        }
        var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
            a = i.toLowerCase(),
            o = {
                innerWidth: l.fn.innerWidth,
                innerHeight: l.fn.innerHeight,
                outerWidth: l.fn.outerWidth,
                outerHeight: l.fn.outerHeight
            };
        l.fn["inner" + i] = function(e) {
            return void 0 === e ? o["inner" + i].call(this) : this.each(function() {
                l(this).css(a, s(this, e) + "px")
            })
        }, l.fn["outer" + i] = function(e, t) {
            return "number" != typeof e ? o["outer" + i].call(this, e) : this.each(function() {
                l(this).css(a, s(this, e, !0, t) + "px")
            })
        }
    }), l.fn.addBack || (l.fn.addBack = function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }), l("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (l.fn.removeData = (t = l.fn.removeData, function(e) {
        return arguments.length ? t.call(this, l.camelCase(e)) : t.call(this)
    })), l.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), l.fn.extend({
        focus: (n = l.fn.focus, function(t, i) {
            return "number" == typeof t ? this.each(function() {
                var e = this;
                setTimeout(function() {
                    l(e).focus(), i && i.call(e)
                }, t)
            }) : n.apply(this, arguments)
        }),
        disableSelection: (e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown", function() {
            return this.bind(e + ".ui-disableSelection", function(e) {
                e.preventDefault()
            })
        }),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function(e) {
            if (void 0 !== e) return this.css("zIndex", e);
            if (this.length)
                for (var t, i, s = l(this[0]); s.length && s[0] !== document;) {
                    if (("absolute" === (t = s.css("position")) || "relative" === t || "fixed" === t) && (i = parseInt(s.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
                    s = s.parent()
                }
            return 0
        }
    }), l.ui.plugin = {
        add: function(e, t, i) {
            var s, n = l.ui[e].prototype;
            for (s in i) n.plugins[s] = n.plugins[s] || [], n.plugins[s].push([t, i[s]])
        },
        call: function(e, t, i, s) {
            var n, a = e.plugins[t];
            if (a && (s || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))
                for (n = 0; a.length > n; n++) e.options[a[n][0]] && a[n][1].apply(e.element, i)
        }
    };
    var o, u = 0,
        r = Array.prototype.slice;
    l.cleanData = (o = l.cleanData, function(e) {
        for (var t, i, s = 0; null != (i = e[s]); s++) try {
            (t = l._data(i, "events")) && t.remove && l(i).triggerHandler("remove")
        } catch (e) {}
        o(e)
    }), l.widget = function(e, i, t) {
        var s, n, a, o, u = {},
            r = e.split(".")[0];
        return e = e.split(".")[1], s = r + "-" + e, t || (t = i, i = l.Widget), l.expr[":"][s.toLowerCase()] = function(e) {
            return !!l.data(e, s)
        }, l[r] = l[r] || {}, n = l[r][e], a = l[r][e] = function(e, t) {
            return this._createWidget ? void(arguments.length && this._createWidget(e, t)) : new a(e, t)
        }, l.extend(a, n, {
            version: t.version,
            _proto: l.extend({}, t),
            _childConstructors: []
        }), (o = new i).options = l.widget.extend({}, o.options), l.each(t, function(t, s) {
            return l.isFunction(s) ? void(u[t] = function() {
                var e, t = this._super,
                    i = this._superApply;
                return this._super = n, this._superApply = a, e = s.apply(this, arguments), this._super = t, this._superApply = i, e
            }) : void(u[t] = s);

            function n() {
                return i.prototype[t].apply(this, arguments)
            }

            function a(e) {
                return i.prototype[t].apply(this, e)
            }
        }), a.prototype = l.widget.extend(o, {
            widgetEventPrefix: n && o.widgetEventPrefix || e
        }, u, {
            constructor: a,
            namespace: r,
            widgetName: e,
            widgetFullName: s
        }), n ? (l.each(n._childConstructors, function(e, t) {
            var i = t.prototype;
            l.widget(i.namespace + "." + i.widgetName, a, t._proto)
        }), delete n._childConstructors) : i._childConstructors.push(a), l.widget.bridge(e, a), a
    }, l.widget.extend = function(e) {
        for (var t, i, s = r.call(arguments, 1), n = 0, a = s.length; n < a; n++)
            for (t in s[n]) i = s[n][t], s[n].hasOwnProperty(t) && void 0 !== i && (e[t] = l.isPlainObject(i) ? l.isPlainObject(e[t]) ? l.widget.extend({}, e[t], i) : l.widget.extend({}, i) : i);
        return e
    }, l.widget.bridge = function(a, t) {
        var o = t.prototype.widgetFullName || a;
        l.fn[a] = function(i) {
            var e = "string" == typeof i,
                s = r.call(arguments, 1),
                n = this;
            return e ? this.each(function() {
                var e, t = l.data(this, o);
                return "instance" === i ? (n = t, !1) : t ? l.isFunction(t[i]) && "_" !== i.charAt(0) ? (e = t[i].apply(t, s)) !== t && void 0 !== e ? (n = e && e.jquery ? n.pushStack(e.get()) : e, !1) : void 0 : l.error("no such method '" + i + "' for " + a + " widget instance") : l.error("cannot call methods on " + a + " prior to initialization; attempted to call method '" + i + "'")
            }) : (s.length && (i = l.widget.extend.apply(null, [i].concat(s))), this.each(function() {
                var e = l.data(this, o);
                e ? (e.option(i || {}), e._init && e._init()) : l.data(this, o, new t(i, this))
            })), n
        }
    }, l.Widget = function() {}, l.Widget._childConstructors = [], l.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(e, t) {
            t = l(t || this.defaultElement || this)[0], this.element = l(t), this.uuid = u++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = l(), this.hoverable = l(), this.focusable = l(), t !== this && (l.data(t, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(e) {
                    e.target === t && this.destroy()
                }
            }), this.document = l(t.style ? t.ownerDocument : t.document || t), this.window = l(this.document[0].defaultView || this.document[0].parentWindow)), this.options = l.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: l.noop,
        _getCreateEventData: l.noop,
        _create: l.noop,
        _init: l.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(l.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: l.noop,
        widget: function() {
            return this.element
        },
        option: function(e, t) {
            var i, s, n, a = e;
            if (0 === arguments.length) return l.widget.extend({}, this.options);
            if ("string" == typeof e)
                if (a = {}, e = (i = e.split(".")).shift(), i.length) {
                    for (s = a[e] = l.widget.extend({}, this.options[e]), n = 0; i.length - 1 > n; n++) s[i[n]] = s[i[n]] || {}, s = s[i[n]];
                    if (e = i.pop(), 1 === arguments.length) return void 0 === s[e] ? null : s[e];
                    s[e] = t
                } else {
                    if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                    a[e] = t
                }
            return this._setOptions(a), this
        },
        _setOptions: function(e) {
            for (var t in e) this._setOption(t, e[t]);
            return this
        },
        _setOption: function(e, t) {
            return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function(n, a, e) {
            var o, u = this;
            "boolean" != typeof n && (e = a, a = n, n = !1), e ? (a = o = l(a), this.bindings = this.bindings.add(a)) : (e = a, a = this.element, o = this.widget()), l.each(e, function(e, t) {
                function i() {
                    return n || !0 !== u.options.disabled && !l(this).hasClass("ui-state-disabled") ? ("string" == typeof t ? u[t] : t).apply(u, arguments) : void 0
                }
                "string" != typeof t && (i.guid = t.guid = t.guid || i.guid || l.guid++);
                var s = e.match(/^([\w:-]*)\s*(.*)$/),
                    e = s[1] + u.eventNamespace,
                    s = s[2];
                s ? o.delegate(s, e, i) : a.bind(e, i)
            })
        },
        _off: function(e, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t), this.bindings = l(this.bindings.not(e).get()), this.focusable = l(this.focusable.not(e).get()), this.hoverable = l(this.hoverable.not(e).get())
        },
        _delay: function(e, t) {
            var i = this;
            return setTimeout(function() {
                return ("string" == typeof e ? i[e] : e).apply(i, arguments)
            }, t || 0)
        },
        _hoverable: function(e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function(e) {
                    l(e.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(e) {
                    l(e.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function(e) {
                    l(e.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(e) {
                    l(e.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(e, t, i) {
            var s, n, a = this.options[e];
            if (i = i || {}, (t = l.Event(t)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), t.target = this.element[0], n = t.originalEvent)
                for (s in n) s in t || (t[s] = n[s]);
            return this.element.trigger(t, i), !(l.isFunction(a) && !1 === a.apply(this.element[0], [t].concat(i)) || t.isDefaultPrevented())
        }
    }, l.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(a, o) {
        l.Widget.prototype["_" + a] = function(t, e, i) {
            var s = (e = "string" == typeof e ? {
                    effect: e
                } : e) ? !0 !== e && "number" != typeof e && e.effect || o : a,
                n = !l.isEmptyObject(e = "number" == typeof(e = e || {}) ? {
                    duration: e
                } : e);
            e.complete = i, e.delay && t.delay(e.delay), n && l.effects && l.effects.effect[s] ? t[a](e) : s !== a && t[s] ? t[s](e.duration, e.easing, i) : t.queue(function(e) {
                l(this)[a](), i && i.call(t[0]), e()
            })
        }
    }), l.widget;
    var h = !1;
    l(document).mouseup(function() {
        h = !1
    }), l.widget("ui.mouse", {
        version: "1.11.4",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function(e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName, function(e) {
                return !0 === l.data(e.target, t.widgetName + ".preventClickEvent") ? (l.removeData(e.target, t.widgetName + ".preventClickEvent"), e.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(e) {
            if (!h) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                var t = this,
                    i = 1 === e.which,
                    s = !("string" != typeof this.options.cancel || !e.target.nodeName) && l(e.target).closest(this.options.cancel).length;
                return i && !s && this._mouseCapture(e) && (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    t.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e), !this._mouseStarted) ? e.preventDefault() : (!0 === l.data(e.target, this.widgetName + ".preventClickEvent") && l.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                    return t._mouseMove(e)
                }, this._mouseUpDelegate = function(e) {
                    return t._mouseUp(e)
                }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), h = !0)), !0
            }
        },
        _mouseMove: function(e) {
            if (this._mouseMoved) {
                if (l.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button) return this._mouseUp(e);
                if (!e.which) return this._mouseUp(e)
            }
            return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
        },
        _mouseUp: function(e) {
            return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && l.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), h = !1
        },
        _mouseDistanceMet: function(e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    }), l.widget("ui.slider", l.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function() {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
        },
        _refresh: function() {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
        },
        _createHandles: function() {
            var e, t = this.options,
                i = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                s = [],
                n = t.values && t.values.length || 1;
            for (i.length > n && (i.slice(n).remove(), i = i.slice(0, n)), e = i.length; e < n; e++) s.push("<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>");
            this.handles = i.add(l(s.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(e) {
                l(this).data("ui-slider-handle-index", e)
            })
        },
        _createRange: function() {
            var e = this.options,
                t = "";
            e.range ? (!0 === e.range && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : l.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = l("<div></div>").appendTo(this.element), t = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(t + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : ""))) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function() {
            this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
        },
        _destroy: function() {
            this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
        },
        _mouseCapture: function(e) {
            var i, s, n, a, t, o, u = this,
                r = this.options;
            return !r.disabled && (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), o = {
                x: e.pageX,
                y: e.pageY
            }, i = this._normValueFromMouse(o), s = this._valueMax() - this._valueMin() + 1, this.handles.each(function(e) {
                var t = Math.abs(i - u.values(e));
                (t < s || s === t && (e === u._lastChangedValue || u.values(e) === r.min)) && (s = t, n = l(this), a = e)
            }), !1 !== this._start(e, a) && (this._mouseSliding = !0, this._handleIndex = a, n.addClass("ui-state-active").focus(), t = n.offset(), o = !l(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = o ? {
                left: 0,
                top: 0
            } : {
                left: e.pageX - t.left - n.width() / 2,
                top: e.pageY - t.top - n.height() / 2 - (parseInt(n.css("borderTopWidth"), 10) || 0) - (parseInt(n.css("borderBottomWidth"), 10) || 0) + (parseInt(n.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(e, a, i), this._animateOff = !0))
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(e) {
            var t = {
                    x: e.pageX,
                    y: e.pageY
                },
                t = this._normValueFromMouse(t);
            return this._slide(e, this._handleIndex, t), !1
        },
        _mouseStop: function(e) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(e) {
            var t, e = "horizontal" === this.orientation ? (t = this.elementSize.width, e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)),
                e = e / t;
            return (e = 1 < e ? 1 : e) < 0 && (e = 0), "vertical" === this.orientation && (e = 1 - e), t = this._valueMax() - this._valueMin(), t = this._valueMin() + e * t, this._trimAlignValue(t)
        },
        _start: function(e, t) {
            var i = {
                handle: this.handles[t],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("start", e, i)
        },
        _slide: function(e, t, i) {
            var s, n;
            this.options.values && this.options.values.length ? (s = this.values(t ? 0 : 1), (i = 2 === this.options.values.length && !0 === this.options.range && (0 === t && s < i || 1 === t && i < s) ? s : i) !== this.values(t) && ((n = this.values())[t] = i, n = this._trigger("slide", e, {
                handle: this.handles[t],
                value: i,
                values: n
            }), s = this.values(t ? 0 : 1), !1 !== n && this.values(t, i))) : i === this.value() || !1 !== (n = this._trigger("slide", e, {
                handle: this.handles[t],
                value: i
            })) && this.value(i)
        },
        _stop: function(e, t) {
            var i = {
                handle: this.handles[t],
                value: this.value()
            };
            this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("stop", e, i)
        },
        _change: function(e, t) {
            var i;
            this._keySliding || this._mouseSliding || (i = {
                handle: this.handles[t],
                value: this.value()
            }, this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._lastChangedValue = t, this._trigger("change", e, i))
        },
        value: function(e) {
            return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), void this._change(null, 0)) : this._value()
        },
        values: function(e, t) {
            var i, s, n;
            if (1 < arguments.length) return this.options.values[e] = this._trimAlignValue(t), this._refreshValue(), void this._change(null, e);
            if (!arguments.length) return this._values();
            if (!l.isArray(e)) return this.options.values && this.options.values.length ? this._values(e) : this.value();
            for (i = this.options.values, s = e, n = 0; i.length > n; n += 1) i[n] = this._trimAlignValue(s[n]), this._change(null, n);
            this._refreshValue()
        },
        _setOption: function(e, t) {
            var i, s = 0;
            switch ("range" === e && !0 === this.options.range && ("min" === t ? (this.options.value = this._values(0), this.options.values = null) : "max" === t && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), l.isArray(this.options.values) && (s = this.options.values.length), "disabled" === e && this.element.toggleClass("ui-state-disabled", !!t), this._super(e, t), e) {
                case "orientation":
                    this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(), this.handles.css("horizontal" === t ? "bottom" : "left", "");
                    break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case "values":
                    for (this._animateOff = !0, this._refreshValue(), i = 0; i < s; i += 1) this._change(null, i);
                    this._animateOff = !1;
                    break;
                case "step":
                case "min":
                case "max":
                    this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _value: function() {
            var e = this.options.value;
            return this._trimAlignValue(e)
        },
        _values: function(e) {
            var t, i, s;
            if (arguments.length) return t = this.options.values[e], this._trimAlignValue(t);
            if (this.options.values && this.options.values.length) {
                for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
                return i
            }
            return []
        },
        _trimAlignValue: function(e) {
            if (this._valueMin() >= e) return this._valueMin();
            if (e >= this._valueMax()) return this._valueMax();
            var t = 0 < this.options.step ? this.options.step : 1,
                i = (e - this._valueMin()) % t,
                e = e - i;
            return 2 * Math.abs(i) >= t && (e += 0 < i ? t : -t), parseFloat(e.toFixed(5))
        },
        _calculateNewMax: function() {
            var e = this.options.max,
                t = this._valueMin(),
                i = this.options.step,
                e = Math.floor(+(e - t).toFixed(this._precision()) / i) * i + t;
            this.max = parseFloat(e.toFixed(this._precision()))
        },
        _precision: function() {
            var e = this._precisionOf(this.options.step);
            return e = null !== this.options.min ? Math.max(e, this._precisionOf(this.options.min)) : e
        },
        _precisionOf: function(e) {
            var t = "" + e,
                e = t.indexOf(".");
            return -1 === e ? 0 : t.length - e - 1
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.max
        },
        _refreshValue: function() {
            var t, i, e, s, n, a = this.options.range,
                o = this.options,
                u = this,
                r = !this._animateOff && o.animate,
                h = {};
            this.options.values && this.options.values.length ? this.handles.each(function(e) {
                i = (u.values(e) - u._valueMin()) / (u._valueMax() - u._valueMin()) * 100, h["horizontal" === u.orientation ? "left" : "bottom"] = i + "%", l(this).stop(1, 1)[r ? "animate" : "css"](h, o.animate), !0 === u.options.range && ("horizontal" === u.orientation ? (0 === e && u.range.stop(1, 1)[r ? "animate" : "css"]({
                    left: i + "%"
                }, o.animate), 1 === e && u.range[r ? "animate" : "css"]({
                    width: i - t + "%"
                }, {
                    queue: !1,
                    duration: o.animate
                })) : (0 === e && u.range.stop(1, 1)[r ? "animate" : "css"]({
                    bottom: i + "%"
                }, o.animate), 1 === e && u.range[r ? "animate" : "css"]({
                    height: i - t + "%"
                }, {
                    queue: !1,
                    duration: o.animate
                }))), t = i
            }) : (e = this.value(), s = this._valueMin(), n = this._valueMax(), i = n !== s ? (e - s) / (n - s) * 100 : 0, h["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[r ? "animate" : "css"](h, o.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[r ? "animate" : "css"]({
                width: i + "%"
            }, o.animate), "max" === a && "horizontal" === this.orientation && this.range[r ? "animate" : "css"]({
                width: 100 - i + "%"
            }, {
                queue: !1,
                duration: o.animate
            }), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[r ? "animate" : "css"]({
                height: i + "%"
            }, o.animate), "max" === a && "vertical" === this.orientation && this.range[r ? "animate" : "css"]({
                height: 100 - i + "%"
            }, {
                queue: !1,
                duration: o.animate
            }))
        },
        _handleEvents: {
            keydown: function(e) {
                var t, i, s, n = l(e.target).data("ui-slider-handle-index");
                switch (e.keyCode) {
                    case l.ui.keyCode.HOME:
                    case l.ui.keyCode.END:
                    case l.ui.keyCode.PAGE_UP:
                    case l.ui.keyCode.PAGE_DOWN:
                    case l.ui.keyCode.UP:
                    case l.ui.keyCode.RIGHT:
                    case l.ui.keyCode.DOWN:
                    case l.ui.keyCode.LEFT:
                        if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, l(e.target).addClass("ui-state-active"), !1 === this._start(e, n))) return
                }
                switch (s = this.options.step, t = i = this.options.values && this.options.values.length ? this.values(n) : this.value(), e.keyCode) {
                    case l.ui.keyCode.HOME:
                        i = this._valueMin();
                        break;
                    case l.ui.keyCode.END:
                        i = this._valueMax();
                        break;
                    case l.ui.keyCode.PAGE_UP:
                        i = this._trimAlignValue(t + (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case l.ui.keyCode.PAGE_DOWN:
                        i = this._trimAlignValue(t - (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case l.ui.keyCode.UP:
                    case l.ui.keyCode.RIGHT:
                        if (t === this._valueMax()) return;
                        i = this._trimAlignValue(t + s);
                        break;
                    case l.ui.keyCode.DOWN:
                    case l.ui.keyCode.LEFT:
                        if (t === this._valueMin()) return;
                        i = this._trimAlignValue(t - s)
                }
                this._slide(e, n, i)
            },
            keyup: function(e) {
                var t = l(e.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(e, t), this._change(e, t), l(e.target).removeClass("ui-state-active"))
            }
        }
    })
});