! function(n) {
    "use strict";
    n.fn.counterUp = function(t) {
        var e = n.extend({
            time: 400,
            delay: 10
        }, t);
        return this.each(function() {
            var i = n(this),
                s = e;
            i.waypoint(function() {
                for (var t = [], e = s.time / s.delay, n = i.text(), u = /[0-9]+,[0-9]+/.test(n), n = n.replace(/,/g, ""), a = (/^[0-9]+$/.test(n), /^[0-9]+\.[0-9]+$/.test(n)), r = a ? (n.split(".")[1] || []).length : 0, o = e; 1 <= o; o--) {
                    var c = parseInt(n / e * o);
                    if (a && (c = parseFloat(n / e * o).toFixed(r)), u)
                        for (;
                            /(\d+)(\d{3})/.test(c.toString());) c = c.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                    t.unshift(c)
                }
                i.data("counterup-nums", t), i.text("0");
                i.data("counterup-func", function() {
                    i.text(i.data("counterup-nums").shift()), i.data("counterup-nums").length ? setTimeout(i.data("counterup-func"), s.delay) : (i.data("counterup-nums"), i.data("counterup-nums", null), i.data("counterup-func", null))
                }), setTimeout(i.data("counterup-func"), s.delay)
            }, {
                offset: "100%",
                triggerOnce: !0
            })
        })
    }
}(jQuery);