!(function () {
    "use strict";
    var e,
        t = {
            436: function (e, t, n) {
                var r = n(228);
                !(function () {
                    var e,
                        t = document.querySelector("html"),
                        n = window.matchMedia("(max-width: 767px)"),
                        o = window.matchMedia("(min-width: 768px) and (max-width: 991px)"),
                        a = window.matchMedia("(min-width: 992px) and (max-width: 1279px)"),
                        i = window.matchMedia("(min-width: 1280px)"),
                        c = !1,
                        u = function () {
                            if (n.matches || o.matches) {
                                if (c) return;
                                (c = !0),
                                    (e = new r.Z(".slider", {
                                        slidesPerView: "auto",
                                        spaceBetween: 16,
                                        breakpoints: { 768: { spaceBetween: 20 } },
                                    }));
                            } else if (a.matches || i.matches) {
                                if (!c) return;
                                (c = !1), e.destroy();
                            }
                        };
                    u(), window.addEventListener("resize", u);
                    var s = document.querySelectorAll("[data-action=open-menu]"),
                        l = function (e) {
                            e.preventDefault();
                            var n = document.querySelector(".menu"),
                                r = document.querySelector(".menu__container");
                            n.classList.add("open"),
                                (t.style.overflowY = "hidden"),
                                r.classList.add("open"),
                                e.stopPropagation();
                        };
                    s.forEach(function (e) {
                        return e.addEventListener("click", l);
                    });
                    var d = document.querySelectorAll("[data-action=close-menu]"),
                        m = function (e) {
                            e.preventDefault();
                            var n = document.querySelector(".menu"),
                                r = document.querySelector(".menu__container");
                            b(e),
                                _(e),
                                r.classList.remove("open"),
                                setTimeout(function () {
                                    n.classList.remove("open"), (t.style.overflowY = "visible");
                                }, 400),
                                e.stopPropagation();
                        };
                    d.forEach(function (e) {
                        return e.addEventListener("click", m);
                    });
                    var f = document.querySelectorAll("[data-action=open-submenu]"),
                        v = function (e) {
                            e.preventDefault();
                            var t = e.currentTarget,
                                n = t.getAttribute("data-submenu"),
                                r = document.querySelector("[data-name=" + n + "]"),
                                o = document.querySelector(".menu__container"),
                                a = document.querySelectorAll(".menu-info, .menu-social"),
                                i = document.querySelector(".menu__link--back");
                            t.parentElement.classList.add("current"),
                                r.classList.add("open"),
                                o.classList.add("right"),
                                a.forEach(function (e) {
                                    return e.classList.add("hidden");
                                }),
                                i.classList.add("open"),
                                e.stopPropagation();
                        };
                    f.forEach(function (e) {
                        return e.addEventListener("click", v);
                    });
                    var p = document.querySelectorAll("[data-action=open-links]"),
                        h = function (e) {
                            e.preventDefault();
                            var t = e.currentTarget,
                                n = t.getAttribute("data-links"),
                                r = document.querySelector("[data-name=" + n + "]"),
                                o = document.querySelector(".menu__container"),
                                a = document.querySelector(".menu__link--back");
                            t.parentElement.classList.add("current"),
                                r.classList.add("open"),
                                o.classList.add("right-2"),
                                a.firstElementChild.setAttribute("data-action", "close-links"),
                                e.stopPropagation();
                        };
                    p.forEach(function (e) {
                        return e.addEventListener("click", h);
                    });
                    var y = document.querySelector(".menu__link--back").firstElementChild,
                        _ = function (e) {
                            var t = document.querySelectorAll(".menu-navigation__item"),
                                n = document.querySelector(".menu-navigation__submenu"),
                                r = document.querySelector(".menu__container"),
                                o = document.querySelectorAll(".menu-info, .menu-social"),
                                a = document.querySelector(".menu__link--back");
                            t.forEach(function (e) {
                                return e.classList.remove("current");
                            }),
                                r.classList.remove("right"),
                                n.classList.remove("open"),
                                o.forEach(function (e) {
                                    return e.classList.remove("hidden");
                                }),
                                a.classList.remove("open"),
                                e.stopPropagation();
                        },
                        b = function (e) {
                            var t = document.querySelector(".menu-navigation__links"),
                                n = document.querySelectorAll(
                                    ".menu-navigation__submenu .menu-navigation__item"
                                ),
                                r = document.querySelector(".menu__container"),
                                o = document.querySelector(".menu__link--back");
                            n.forEach(function (e) {
                                return e.classList.remove("current");
                            }),
                                r.classList.remove("right-2"),
                                //t.classList.remove("open"),
                                o.firstElementChild.setAttribute(
                                    "data-action",
                                    "close-submenu"
                                ),
                                e.stopPropagation();
                        };
                    y.addEventListener("click", function (e) {
                        e.preventDefault();
                        var t = y.getAttribute("data-action");
                        "close-submenu" == t ? _(e) : "close-links" == t && b(e);
                    });
                    var g, S, q;
                    document.querySelector(".header-ascii__art").appendChild(
                        ((g = Array.from(Array(9), function (e, t) {
                            return t + 1;
                        })),
                            (S = Math.floor(Math.random() * g.length)),
                            (q = document.createElement("img")).setAttribute(
                                "src",
                                "./image/ascii/logo-" + g[S] + ".png"
                            ),
                            q.setAttribute("class", "logo-" + g[S]),
                            q.setAttribute("alt", "SecurityLab"),
                            q)
                    );
                    document.querySelectorAll(".animation-decode");
                })();
            },
        },
        n = {};
    function r(e) {
        var o = n[e];
        if (void 0 !== o) return o.exports;
        var a = (n[e] = { exports: {} });
        return t[e](a, a.exports, r), a.exports;
    }
    (r.m = t),
        (e = []),
        (r.O = function (t, n, o, a) {
            if (!n) {
                var i = 1 / 0;
                for (l = 0; l < e.length; l++) {
                    (n = e[l][0]), (o = e[l][1]), (a = e[l][2]);
                    for (var c = !0, u = 0; u < n.length; u++)
                        (!1 & a || i >= a) &&
                            Object.keys(r.O).every(function (e) {
                                return r.O[e](n[u]);
                            })
                            ? n.splice(u--, 1)
                            : ((c = !1), a < i && (i = a));
                    if (c) {
                        e.splice(l--, 1);
                        var s = o();
                        void 0 !== s && (t = s);
                    }
                }
                return t;
            }
            a = a || 0;
            for (var l = e.length; l > 0 && e[l - 1][2] > a; l--) e[l] = e[l - 1];
            e[l] = [n, o, a];
        }),
        (r.d = function (e, t) {
            for (var n in t)
                r.o(t, n) &&
                    !r.o(e, n) &&
                    Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        }),
        (r.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (function () {
            var e = { 179: 0 };
            r.O.j = function (t) {
                return 0 === e[t];
            };
            var t = function (t, n) {
                var o,
                    a,
                    i = n[0],
                    c = n[1],
                    u = n[2],
                    s = 0;
                if (
                    i.some(function (t) {
                        return 0 !== e[t];
                    })
                ) {
                    for (o in c) r.o(c, o) && (r.m[o] = c[o]);
                    if (u) var l = u(r);
                }
                for (t && t(n); s < i.length; s++)
                    (a = i[s]), r.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
                return r.O(l);
            },
                n = (self.webpackChunksecuritylab = self.webpackChunksecuritylab || []);
            n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
        })();
    var o = r.O(void 0, [216], function () {
        return r(436);
    });
    o = r.O(o);
})();
/* ------------------------------------------------------------------------ *
4 states per letter: Transparent | Line | Block | Visible.
These states are shuffled for a unique "decode" effect each time.
* ------------------------------------------------------------------------ */

function decodeText() {
    var text = document.getElementsByClassName('decode-text')[0];
    // debug with
    // console.log(text, text.children.length);

    // assign the placeholder array its places
    var state = [];
    for (var i = 0, j = text.children.length; i < j; i++) {
        text.children[i].classList.remove('state-1', 'state-2', 'state-3');
        state[i] = i;
    }

    // shuffle the array to get new sequences each time
    var shuffled = shuffle(state);

    for (var i = 0, j = shuffled.length; i < j; i++) {
        var child = text.children[shuffled[i]];
        classes = child.classList;

        // fire the first one at random times
        var state1Time = Math.round(Math.random() * (2000 - 300)) + 50;
        if (classes.contains('text-animation')) {
            setTimeout(firstStages.bind(null, child), state1Time);
        }
    }
}

// send the node for later .state changes
function firstStages(child) {
    if (child.classList.contains('state-2')) {
        child.classList.add('state-3');
    } else if (child.classList.contains('state-1')) {
        child.classList.add('state-2')
    } else if (!child.classList.contains('state-1')) {
        child.classList.add('state-1');
        setTimeout(secondStages.bind(null, child), 100);
    }
}
function secondStages(child) {
    if (child.classList.contains('state-1')) {
        child.classList.add('state-2')
        setTimeout(thirdStages.bind(null, child), 100);
    }
    else if (!child.classList.contains('state-1')) {
        child.classList.add('state-1')
    }
}
function thirdStages(child) {
    if (child.classList.contains('state-2')) {
        child.classList.add('state-3')
    }
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}


// Demo only stuff
decodeText();

// beware: refresh button can overlap this timer and cause state mixups
setInterval(function () { decodeText(); }, 10000);


var mainNav = document.querySelector('.fixed');

window.onscroll = function () {
    windowScroll();
};

function windowScroll() {
    mainNav.classList.toggle("test", mainNav.scrollTop > 50 || document.documentElement.scrollTop > 50);
}