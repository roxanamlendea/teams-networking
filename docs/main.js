(() => {
  "use strict";
  var n = {
      426: (n, e, t) => {
        t.d(e, { Z: () => f });
        var r = t(81),
          o = t.n(r),
          a = t(645),
          i = t.n(a),
          c = t(667),
          s = t.n(c),
          l = new URL(t(45), t.b),
          d = i()(o()),
          u = s()(l);
        d.push([
          n.id,
          `html {\n  height: 100%;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  margin: 0;\n  background-color: #e9f6f8;\n}\n\nheader {\n  background-image: url(${u});\n  text-shadow: 1px 1px 2px #000000;\n}\n\n#header-wrapper {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  background: linear-gradient(45deg, #0798abfa, transparent);\n}\n\nheader img {\n  border: 4px solid #fff;\n  background-color: #ffffff90;\n  border-radius: 50%;\n  margin: 5px;\n}\n\nbody > section {\n  flex: 1;\n  padding: 15px;\n}\n\nh1 {\n  margin: 2px;\n  color: #fff;\n}\n\nh2 {\n  margin: 2px;\n  color: #fff;\n}\n\nfooter {\n  background-color: rgb(7, 124, 139);\n  color: #fff;\n  text-align: center;\n  padding: 7px;\n}\n\n.tbar {\n  display: flex;\n  margin-bottom: 10px;\n  align-items: stretch;\n}\n\n.tfill {\n  flex: 1;\n}\n\n#teamsTable {\n  border-collapse: collapse;\n  width: 100%;\n}\n\n#teamsTable th,\n#teamsTable td {\n  border: 1px solid black;\n  padding: 6px;\n}\n\n#teamsTable th {\n  background-color: #057988;\n  color: white;\n}\n\n#teamsTable tr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n`,
          ""
        ]);
        const f = d;
      },
      645: n => {
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var t = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (t += "@supports (".concat(e[4], ") {")),
                  e[2] && (t += "@media ".concat(e[2], " {")),
                  r && (t += "@layer".concat(e[5].length > 0 ? " ".concat(e[5]) : "", " {")),
                  (t += n(e)),
                  r && (t += "}"),
                  e[2] && (t += "}"),
                  e[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (e.i = function (n, t, r, o, a) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var i = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (i[s] = !0);
                }
              for (var l = 0; l < n.length; l++) {
                var d = [].concat(n[l]);
                (r && i[d[0]]) ||
                  (void 0 !== a &&
                    (void 0 === d[5] ||
                      (d[1] = "@layer".concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {").concat(d[1], "}")),
                    (d[5] = a)),
                  t && (d[2] ? ((d[1] = "@media ".concat(d[2], " {").concat(d[1], "}")), (d[2] = t)) : (d[2] = t)),
                  o &&
                    (d[4]
                      ? ((d[1] = "@supports (".concat(d[4], ") {").concat(d[1], "}")), (d[4] = o))
                      : (d[4] = "".concat(o))),
                  e.push(d));
              }
            }),
            e
          );
        };
      },
      667: n => {
        n.exports = function (n, e) {
          return (
            e || (e = {}),
            n
              ? ((n = String(n.__esModule ? n.default : n)),
                /^['"].*['"]$/.test(n) && (n = n.slice(1, -1)),
                e.hash && (n += e.hash),
                /["'() \t\n]|(%20)/.test(n) || e.needQuotes
                  ? '"'.concat(n.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"')
                  : n)
              : n
          );
        };
      },
      81: n => {
        n.exports = function (n) {
          return n[1];
        };
      },
      379: n => {
        var e = [];
        function t(n) {
          for (var t = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === n) {
              t = r;
              break;
            }
          return t;
        }
        function r(n, r) {
          for (var a = {}, i = [], c = 0; c < n.length; c++) {
            var s = n[c],
              l = r.base ? s[0] + r.base : s[0],
              d = a[l] || 0,
              u = "".concat(l, " ").concat(d);
            a[l] = d + 1;
            var f = t(u),
              p = { css: s[1], media: s[2], sourceMap: s[3], supports: s[4], layer: s[5] };
            if (-1 !== f) e[f].references++, e[f].updater(p);
            else {
              var m = o(p, r);
              (r.byIndex = c), e.splice(c, 0, { identifier: u, updater: m, references: 1 });
            }
            i.push(u);
          }
          return i;
        }
        function o(n, e) {
          var t = e.domAPI(e);
          return (
            t.update(n),
            function (e) {
              if (e) {
                if (
                  e.css === n.css &&
                  e.media === n.media &&
                  e.sourceMap === n.sourceMap &&
                  e.supports === n.supports &&
                  e.layer === n.layer
                )
                  return;
                t.update((n = e));
              } else t.remove();
            }
          );
        }
        n.exports = function (n, o) {
          var a = r((n = n || []), (o = o || {}));
          return function (n) {
            n = n || [];
            for (var i = 0; i < a.length; i++) {
              var c = t(a[i]);
              e[c].references--;
            }
            for (var s = r(n, o), l = 0; l < a.length; l++) {
              var d = t(a[l]);
              0 === e[d].references && (e[d].updater(), e.splice(d, 1));
            }
            a = s;
          };
        };
      },
      569: n => {
        var e = {};
        n.exports = function (n, t) {
          var r = (function (n) {
            if (void 0 === e[n]) {
              var t = document.querySelector(n);
              if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement)
                try {
                  t = t.contentDocument.head;
                } catch (n) {
                  t = null;
                }
              e[n] = t;
            }
            return e[n];
          })(n);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(t);
        };
      },
      216: n => {
        n.exports = function (n) {
          var e = document.createElement("style");
          return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
        };
      },
      565: (n, e, t) => {
        n.exports = function (n) {
          var e = t.nc;
          e && n.setAttribute("nonce", e);
        };
      },
      795: n => {
        n.exports = function (n) {
          if ("undefined" == typeof document) return { update: function () {}, remove: function () {} };
          var e = n.insertStyleElement(n);
          return {
            update: function (t) {
              !(function (n, e, t) {
                var r = "";
                t.supports && (r += "@supports (".concat(t.supports, ") {")),
                  t.media && (r += "@media ".concat(t.media, " {"));
                var o = void 0 !== t.layer;
                o && (r += "@layer".concat(t.layer.length > 0 ? " ".concat(t.layer) : "", " {")),
                  (r += t.css),
                  o && (r += "}"),
                  t.media && (r += "}"),
                  t.supports && (r += "}");
                var a = t.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                    btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                    " */"
                  )),
                  e.styleTagTransform(r, n, e.options);
              })(e, n, t);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(e);
            }
          };
        };
      },
      589: n => {
        n.exports = function (n, e) {
          if (e.styleSheet) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        };
      },
      45: (n, e, t) => {
        n.exports = t.p + "b65bb854f1ff13c46e6c.png";
      }
    },
    e = {};
  function t(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var a = (e[r] = { id: r, exports: {} });
    return n[r](a, a.exports, t), a.exports;
  }
  (t.m = n),
    (t.n = n => {
      var e = n && n.__esModule ? () => n.default : () => n;
      return t.d(e, { a: e }), e;
    }),
    (t.d = (n, e) => {
      for (var r in e) t.o(e, r) && !t.o(n, r) && Object.defineProperty(n, r, { enumerable: !0, get: e[r] });
    }),
    (t.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (t.p = ""),
    (t.b = document.baseURI || self.location.href),
    (t.nc = void 0),
    (() => {
      var n = t(379),
        e = t.n(n),
        r = t(795),
        o = t.n(r),
        a = t(569),
        i = t.n(a),
        c = t(565),
        s = t.n(c),
        l = t(216),
        d = t.n(l),
        u = t(589),
        f = t.n(u),
        p = t(426),
        m = {};
      function h(n) {
        return `<tr>\n    <td>${n.promotion}</td>\n    <td>${n.members}</td>\n    <td>${n.name}</td>\n    <td>${n.url}</td>\n    <td>x</td>\n</tr>`;
      }
      (m.styleTagTransform = f()),
        (m.setAttributes = s()),
        (m.insert = i().bind(null, "head")),
        (m.domAPI = o()),
        (m.insertStyleElement = d()),
        e()(p.Z, m),
        p.Z && p.Z.locals && p.Z.locals,
        console.warn("start app"),
        fetch("teams.json")
          .then(n => n.json())
          .then(function (n) {
            const e = n.map(h);
            console.warn(e), (document.querySelector("#teamsTable tbody").innerHTML = e.join(""));
          });
    })();
})();
