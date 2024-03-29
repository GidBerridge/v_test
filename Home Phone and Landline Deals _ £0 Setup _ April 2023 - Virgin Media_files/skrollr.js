!(function (e, t, r) {
  'use strict';
  function n(r) {
    if (((o = t.documentElement), (a = t.body), _(), (ne = this), (se = (r = r || {}).constants || {}), r.easing))
      for (var n in r.easing) Y[n] = r.easing[n];
    (ge = r.edgeStrategy || 'set'),
      (ie = { beforerender: r.beforerender, render: r.render, keyframe: r.keyframe }),
      (le = !1 !== r.forceHeight) && (Pe = r.scale || 1),
      (ce = r.mobileDeceleration || w),
      (ue = !1 !== r.smoothScrolling),
      (me = r.smoothScrollingDuration || E),
      (pe = { targetTop: ne.getScrollTop() }),
      ($e = (
        r.mobileCheck ||
        function () {
          return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || e.opera);
        }
      )())
        ? ((ae = t.getElementById(r.skrollrBody || x)) && re(), R(), Ae(o, [y, S], [T]))
        : Ae(o, [y, b], [T]),
      ne.refresh(),
      ye(e, 'resize orientationchange', function () {
        var e = o.clientWidth,
          t = o.clientHeight;
        (t !== qe || e !== ze) && ((qe = t), (ze = e), (Le = !0));
      });
    var i = G();
    return (
      (function e() {
        X(), (he = i(e));
      })(),
      ne
    );
  }
  var o,
    a,
    i = {
      get: function () {
        return ne;
      },
      init: function (e) {
        return ne || new n(e);
      },
      VERSION: '0.6.30',
    },
    l = Object.prototype.hasOwnProperty,
    s = e.Math,
    c = e.getComputedStyle,
    f = 'touchstart',
    u = 'touchmove',
    m = 'touchcancel',
    p = 'touchend',
    d = 'skrollable',
    g = d + '-before',
    v = d + '-between',
    h = d + '-after',
    y = 'skrollr',
    T = 'no-' + y,
    b = y + '-desktop',
    S = y + '-mobile',
    k = 'linear',
    w = 0.004,
    x = 'skrollr-body',
    E = 200,
    A = 'center',
    F = 'bottom',
    C = '___skrollable_id',
    H = /^(?:input|textarea|button|select)$/i,
    D = /^\s+|\s+$/g,
    I = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
    P = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
    N = /^(@?[a-z\-]+)\[(\w+)\]$/,
    O = /-([a-z0-9_])/g,
    V = function (e, t) {
      return t.toUpperCase();
    },
    z = /[\-+]?[\d]*\.?[\d]+/g,
    q = /\{\?\}/g,
    L = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
    M = /[a-z\-]+-gradient/g,
    $ = '',
    B = '',
    _ = function () {
      var e = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
      if (c) {
        var t = c(a, null);
        for (var r in t) if (($ = r.match(e) || (+r == r && t[r].match(e)))) break;
        if (!$) return void ($ = B = '');
        '-' === ($ = $[0]).slice(0, 1)
          ? ((B = $), ($ = { '-webkit-': 'webkit', '-moz-': 'Moz', '-ms-': 'ms', '-o-': 'O' }[$]))
          : (B = '-' + $.toLowerCase() + '-');
      }
    },
    G = function () {
      var t = e.requestAnimationFrame || e[$.toLowerCase() + 'RequestAnimationFrame'],
        r = He();
      return (
        ($e || !t) &&
          (t = function (t) {
            var n = He() - r,
              o = s.max(0, 1e3 / 60 - n);
            return e.setTimeout(function () {
              (r = He()), t();
            }, o);
          }),
        t
      );
    },
    K = function () {
      var t = e.cancelAnimationFrame || e[$.toLowerCase() + 'CancelAnimationFrame'];
      return (
        ($e || !t) &&
          (t = function (t) {
            return e.clearTimeout(t);
          }),
        t
      );
    },
    Y = {
      begin: function () {
        return 0;
      },
      end: function () {
        return 1;
      },
      linear: function (e) {
        return e;
      },
      quadratic: function (e) {
        return e * e;
      },
      cubic: function (e) {
        return e * e * e;
      },
      swing: function (e) {
        return -s.cos(e * s.PI) / 2 + 0.5;
      },
      sqrt: function (e) {
        return s.sqrt(e);
      },
      outCubic: function (e) {
        return s.pow(e - 1, 3) + 1;
      },
      bounce: function (e) {
        var t;
        if (0.5083 >= e) t = 3;
        else if (0.8489 >= e) t = 9;
        else if (0.96208 >= e) t = 27;
        else {
          if (!(0.99981 >= e)) return 1;
          t = 91;
        }
        return 1 - s.abs((3 * s.cos(e * t * 1.028)) / t);
      },
    };
  (n.prototype.refresh = function (e) {
    var n,
      o,
      a = !1;
    for (
      e === r ? ((a = !0), (oe = []), (Me = 0), (e = t.getElementsByTagName('*'))) : e.length === r && (e = [e]),
        n = 0,
        o = e.length;
      o > n;
      n++
    ) {
      var i = e[n],
        l = i,
        s = [],
        c = ue,
        f = ge,
        u = !1;
      if ((a && C in i && delete i[C], i.attributes)) {
        for (var m = 0, p = i.attributes.length; p > m; m++) {
          var g = i.attributes[m];
          if ('data-anchor-target' !== g.name)
            if ('data-smooth-scrolling' !== g.name)
              if ('data-edge-strategy' !== g.name)
                if ('data-emit-events' !== g.name) {
                  var v = g.name.match(I);
                  if (null !== v) {
                    var h = { props: g.value, element: i, eventType: g.name.replace(O, V) };
                    s.push(h);
                    var y = v[1];
                    y && (h.constant = y.substr(1));
                    var T = v[2];
                    /p$/.test(T)
                      ? ((h.isPercentage = !0), (h.offset = (0 | T.slice(0, -1)) / 100))
                      : (h.offset = 0 | T);
                    var b = v[3],
                      S = v[4] || b;
                    b && 'start' !== b && 'end' !== b
                      ? ((h.mode = 'relative'), (h.anchors = [b, S]))
                      : ((h.mode = 'absolute'),
                        'end' === b ? (h.isEnd = !0) : h.isPercentage || (h.offset = h.offset * Pe));
                  }
                } else u = !0;
              else f = g.value;
            else c = 'off' !== g.value;
          else if (null === (l = t.querySelector(g.value))) throw 'Unable to find anchor target "' + g.value + '"';
        }
        var k, w, x;
        if (s.length)
          !a && C in i
            ? ((x = i[C]), (k = oe[x].styleAttr), (w = oe[x].classAttr))
            : ((x = i[C] = Me++), (k = i.style.cssText), (w = Ee(i))),
            (oe[x] = {
              element: i,
              styleAttr: k,
              classAttr: w,
              anchorTarget: l,
              keyFrames: s,
              smoothScrolling: c,
              edgeStrategy: f,
              emitEvents: u,
              lastFrameIndex: -1,
            }),
            Ae(i, [d], []);
      }
    }
    for (ke(), n = 0, o = e.length; o > n; n++) {
      var E = oe[e[n][C]];
      E !== r && (j(E), Z(E));
    }
    return ne;
  }),
    (n.prototype.relativeToAbsolute = function (e, t, r) {
      var n = o.clientHeight,
        a = e.getBoundingClientRect(),
        i = a.top,
        l = a.bottom - a.top;
      return (
        t === F ? (i -= n) : t === A && (i -= n / 2),
        r === F ? (i += l) : r === A && (i += l / 2),
        ((i += ne.getScrollTop()) + 0.5) | 0
      );
    }),
    (n.prototype.animateTo = function (e, t) {
      t = t || {};
      var n = He(),
        o = ne.getScrollTop(),
        a = t.duration === r ? 1e3 : t.duration;
      return (
        (fe = {
          startTop: o,
          topDiff: e - o,
          targetTop: e,
          duration: a,
          startTime: n,
          endTime: n + a,
          easing: Y[t.easing || k],
          done: t.done,
        }).topDiff || (fe.done && fe.done.call(ne, !1), (fe = r)),
        ne
      );
    }),
    (n.prototype.stopAnimateTo = function () {
      fe && fe.done && fe.done.call(ne, !0), (fe = r);
    }),
    (n.prototype.isAnimatingTo = function () {
      return !!fe;
    }),
    (n.prototype.isMobile = function () {
      return $e;
    }),
    (n.prototype.setScrollTop = function (t, r) {
      return (de = !0 === r), $e ? (Be = s.min(s.max(t, 0), Ie)) : e.scrollTo(0, t), ne;
    }),
    (n.prototype.getScrollTop = function () {
      return $e ? Be : e.pageYOffset || o.scrollTop || a.scrollTop || 0;
    }),
    (n.prototype.getMaxScrollTop = function () {
      return Ie;
    }),
    (n.prototype.on = function (e, t) {
      return (ie[e] = t), ne;
    }),
    (n.prototype.off = function (e) {
      return delete ie[e], ne;
    }),
    (n.prototype.destroy = function () {
      K()(he), be(), Ae(o, [T], [y, b, S]);
      for (var e = 0, t = oe.length; t > e; e++) te(oe[e].element);
      (o.style.overflow = a.style.overflow = ''),
        (o.style.height = a.style.height = ''),
        ae && i.setStyle(ae, 'transform', 'none'),
        (ne = r),
        (ae = r),
        (ie = r),
        (le = r),
        (Ie = 0),
        (Pe = 1),
        (se = r),
        (ce = r),
        (Ne = 'down'),
        (Oe = -1),
        (ze = 0),
        (qe = 0),
        (Le = !1),
        (fe = r),
        (ue = r),
        (me = r),
        (pe = r),
        (de = r),
        (Me = 0),
        (ge = r),
        ($e = !1),
        (Be = 0),
        (ve = r);
    });
  var R = function () {
      var n, i, l, c, d, g, v, h, y, T, b;
      ye(o, [f, u, m, p].join(' '), function (e) {
        var o = e.changedTouches[0];
        for (c = e.target; 3 === c.nodeType; ) c = c.parentNode;
        switch (
          ((d = o.clientY), (g = o.clientX), (y = e.timeStamp), H.test(c.tagName) || e.preventDefault(), e.type)
        ) {
          case f:
            n && n.blur(), ne.stopAnimateTo(), (n = c), (i = v = d), (l = g), y;
            break;
          case u:
            H.test(c.tagName) && t.activeElement !== c && e.preventDefault(),
              (h = d - v),
              (b = y - T),
              ne.setScrollTop(Be - h, !0),
              (v = d),
              (T = y);
            break;
          default:
          case m:
          case p:
            var a = i - d,
              S = l - g;
            if (49 > S * S + a * a) {
              if (!H.test(n.tagName)) {
                n.focus();
                var k = t.createEvent('MouseEvents');
                k.initMouseEvent(
                  'click',
                  !0,
                  !0,
                  e.view,
                  1,
                  o.screenX,
                  o.screenY,
                  o.clientX,
                  o.clientY,
                  e.ctrlKey,
                  e.altKey,
                  e.shiftKey,
                  e.metaKey,
                  0,
                  null
                ),
                  n.dispatchEvent(k);
              }
              return;
            }
            n = r;
            var w = h / b;
            w = s.max(s.min(w, 3), -3);
            var x = s.abs(w / ce),
              E = w * x + 0.5 * ce * x * x,
              A = ne.getScrollTop() - E,
              F = 0;
            A > Ie ? ((F = (Ie - A) / E), (A = Ie)) : 0 > A && ((F = -A / E), (A = 0)),
              (x *= 1 - F),
              ne.animateTo((A + 0.5) | 0, { easing: 'outCubic', duration: x });
        }
      }),
        e.scrollTo(0, 0),
        (o.style.overflow = a.style.overflow = 'hidden');
    },
    U = function (e, t) {
      for (var r = 0, n = oe.length; n > r; r++) {
        var o,
          a,
          s = oe[r],
          c = s.element,
          f = s.smoothScrolling ? e : t,
          u = s.keyFrames,
          m = u.length,
          p = u[0],
          y = u[u.length - 1],
          T = f < p.frame,
          b = f > y.frame,
          S = T ? p : y,
          k = s.emitEvents,
          w = s.lastFrameIndex;
        if (T || b) {
          if ((T && -1 === s.edge) || (b && 1 === s.edge)) continue;
          switch (
            (T
              ? (Ae(c, [g], [h, v]), k && w > -1 && (Se(c, p.eventType, Ne), (s.lastFrameIndex = -1)))
              : (Ae(c, [h], [g, v]), k && m > w && (Se(c, y.eventType, Ne), (s.lastFrameIndex = m))),
            (s.edge = T ? -1 : 1),
            s.edgeStrategy)
          ) {
            case 'reset':
              te(c);
              continue;
            case 'ease':
              f = S.frame;
              break;
            default:
            case 'set':
              var x = S.props;
              for (o in x)
                l.call(x, o) &&
                  ((a = ee(x[o].value)), 0 === o.indexOf('@') ? c.setAttribute(o.substr(1), a) : i.setStyle(c, o, a));
              continue;
          }
        } else 0 !== s.edge && (Ae(c, [d, v], [g, h]), (s.edge = 0));
        for (var E = 0; m - 1 > E; E++)
          if (f >= u[E].frame && f <= u[E + 1].frame) {
            var A = u[E],
              F = u[E + 1];
            for (o in A.props)
              if (l.call(A.props, o)) {
                var C = (f - A.frame) / (F.frame - A.frame);
                (C = A.props[o].easing(C)),
                  (a = Q(A.props[o].value, F.props[o].value, C)),
                  (a = ee(a)),
                  0 === o.indexOf('@') ? c.setAttribute(o.substr(1), a) : i.setStyle(c, o, a);
              }
            k && w !== E && (Se(c, 'down' === Ne ? A.eventType : F.eventType, Ne), (s.lastFrameIndex = E));
            break;
          }
      }
    },
    X = function () {
      Le && ((Le = !1), ke());
      var e,
        t,
        n = ne.getScrollTop(),
        o = He();
      if (fe)
        o >= fe.endTime
          ? ((n = fe.targetTop), (e = fe.done), (fe = r))
          : ((t = fe.easing((o - fe.startTime) / fe.duration)), (n = (fe.startTop + t * fe.topDiff) | 0)),
          ne.setScrollTop(n, !0);
      else if (!de) {
        pe.targetTop - n && (pe = { startTop: Oe, topDiff: n - Oe, targetTop: n, startTime: Ve, endTime: Ve + me }),
          o <= pe.endTime && ((t = Y.sqrt((o - pe.startTime) / me)), (n = (pe.startTop + t * pe.topDiff) | 0));
      }
      if (de || Oe !== n) {
        de = !1;
        var a = { curTop: n, lastTop: Oe, maxTop: Ie, direction: (Ne = n > Oe ? 'down' : Oe > n ? 'up' : Ne) };
        !1 !== (ie.beforerender && ie.beforerender.call(ne, a)) &&
          (U(n, ne.getScrollTop()),
          $e && ae && i.setStyle(ae, 'transform', 'translate(0, ' + -Be + 'px) ' + ve),
          (Oe = n),
          ie.render && ie.render.call(ne, a)),
          e && e.call(ne, !1);
      }
      Ve = o;
    },
    j = function (e) {
      for (var t = 0, r = e.keyFrames.length; r > t; t++) {
        for (var n, o, a, i, l = e.keyFrames[t], s = {}; null !== (i = P.exec(l.props)); )
          (a = i[1]),
            (o = i[2]),
            null !== (n = a.match(N)) ? ((a = n[1]), (n = n[2])) : (n = k),
            (o = o.indexOf('!') ? W(o) : [o.slice(1)]),
            (s[a] = { value: o, easing: Y[n] });
        l.props = s;
      }
    },
    W = function (e) {
      var t = [];
      return (
        (L.lastIndex = 0),
        (e = e.replace(L, function (e) {
          return e.replace(z, function (e) {
            return (e / 255) * 100 + '%';
          });
        })),
        B &&
          ((M.lastIndex = 0),
          (e = e.replace(M, function (e) {
            return B + e;
          }))),
        (e = e.replace(z, function (e) {
          return t.push(+e), '{?}';
        })),
        t.unshift(e),
        t
      );
    },
    Z = function (e) {
      var t,
        r,
        n = {};
      for (t = 0, r = e.keyFrames.length; r > t; t++) J(e.keyFrames[t], n);
      for (n = {}, t = e.keyFrames.length - 1; t >= 0; t--) J(e.keyFrames[t], n);
    },
    J = function (e, t) {
      var r;
      for (r in t) l.call(e.props, r) || (e.props[r] = t[r]);
      for (r in e.props) t[r] = e.props[r];
    },
    Q = function (e, t, r) {
      var n,
        o = e.length;
      if (o !== t.length) throw 'Can\'t interpolate between "' + e[0] + '" and "' + t[0] + '"';
      var a = [e[0]];
      for (n = 1; o > n; n++) a[n] = e[n] + (t[n] - e[n]) * r;
      return a;
    },
    ee = function (e) {
      var t = 1;
      return (
        (q.lastIndex = 0),
        e[0].replace(q, function () {
          return e[t++];
        })
      );
    },
    te = function (e, t) {
      for (var r, n, o = 0, a = (e = [].concat(e)).length; a > o; o++)
        (n = e[o]),
          (r = oe[n[C]]) &&
            (t
              ? ((n.style.cssText = r.dirtyStyleAttr), Ae(n, r.dirtyClassAttr))
              : ((r.dirtyStyleAttr = n.style.cssText),
                (r.dirtyClassAttr = Ee(n)),
                (n.style.cssText = r.styleAttr),
                Ae(n, r.classAttr)));
    },
    re = function () {
      (ve = 'translateZ(0)'), i.setStyle(ae, 'transform', ve);
      var e = c(ae),
        t = e.getPropertyValue('transform'),
        r = e.getPropertyValue(B + 'transform');
      (t && 'none' !== t) || (r && 'none' !== r) || (ve = '');
    };
  i.setStyle = function (e, t, r) {
    var n = e.style;
    if ('zIndex' === (t = t.replace(O, V).replace('-', ''))) isNaN(r) ? (n[t] = r) : (n[t] = '' + (0 | r));
    else if ('float' === t) n.styleFloat = n.cssFloat = r;
    else
      try {
        $ && (n[$ + t.slice(0, 1).toUpperCase() + t.slice(1)] = r), (n[t] = r);
      } catch (e) {}
  };
  var ne,
    oe,
    ae,
    ie,
    le,
    se,
    ce,
    fe,
    ue,
    me,
    pe,
    de,
    ge,
    ve,
    he,
    ye = (i.addEvent = function (t, r, n) {
      for (
        var o,
          a = function (t) {
            return (
              (t = t || e.event).target || (t.target = t.srcElement),
              t.preventDefault ||
                (t.preventDefault = function () {
                  (t.returnValue = !1), (t.defaultPrevented = !0);
                }),
              n.call(this, t)
            );
          },
          i = 0,
          l = (r = r.split(' ')).length;
        l > i;
        i++
      )
        (o = r[i]),
          t.addEventListener ? t.addEventListener(o, n, !1) : t.attachEvent('on' + o, a),
          _e.push({ element: t, name: o, listener: n });
    }),
    Te = (i.removeEvent = function (e, t, r) {
      for (var n = 0, o = (t = t.split(' ')).length; o > n; n++)
        e.removeEventListener ? e.removeEventListener(t[n], r, !1) : e.detachEvent('on' + t[n], r);
    }),
    be = function () {
      for (var e, t = 0, r = _e.length; r > t; t++) (e = _e[t]), Te(e.element, e.name, e.listener);
      _e = [];
    },
    Se = function (e, t, r) {
      ie.keyframe && ie.keyframe.call(ne, e, t, r);
    },
    ke = function () {
      var e = ne.getScrollTop();
      (Ie = 0),
        le && !$e && (a.style.height = ''),
        (function () {
          var e,
            t,
            r,
            n,
            a,
            i,
            l,
            c,
            f,
            u,
            m,
            p = o.clientHeight,
            d = we();
          for (c = 0, f = oe.length; f > c; c++)
            for (t = (e = oe[c]).element, r = e.anchorTarget, a = 0, i = (n = e.keyFrames).length; i > a; a++)
              (u = (l = n[a]).offset),
                (m = d[l.constant] || 0),
                (l.frame = u),
                l.isPercentage && ((u *= p), (l.frame = u)),
                'relative' === l.mode &&
                  (te(t), (l.frame = ne.relativeToAbsolute(r, l.anchors[0], l.anchors[1]) - u), te(t, !0)),
                (l.frame += m),
                le && !l.isEnd && l.frame > Ie && (Ie = l.frame);
          for (Ie = s.max(Ie, xe()), c = 0, f = oe.length; f > c; c++) {
            for (a = 0, i = (n = (e = oe[c]).keyFrames).length; i > a; a++)
              (m = d[(l = n[a]).constant] || 0), l.isEnd && (l.frame = Ie - l.offset + m);
            e.keyFrames.sort(De);
          }
        })(),
        le && !$e && (a.style.height = Ie + o.clientHeight + 'px'),
        $e ? ne.setScrollTop(s.min(ne.getScrollTop(), Ie)) : ne.setScrollTop(e, !0),
        (de = !0);
    },
    we = function () {
      var e,
        t,
        r = o.clientHeight,
        n = {};
      for (e in se)
        'function' == typeof (t = se[e]) ? (t = t.call(ne)) : /p$/.test(t) && (t = (t.slice(0, -1) / 100) * r),
          (n[e] = t);
      return n;
    },
    xe = function () {
      var e = 0;
      return (
        ae && (e = s.max(ae.offsetHeight, ae.scrollHeight)),
        s.max(e, a.scrollHeight, a.offsetHeight, o.scrollHeight, o.offsetHeight, o.clientHeight) - o.clientHeight
      );
    },
    Ee = function (t) {
      var r = 'className';
      return e.SVGElement && t instanceof e.SVGElement && ((t = t[r]), (r = 'baseVal')), t[r];
    },
    Ae = function (t, n, o) {
      var a = 'className';
      if ((e.SVGElement && t instanceof e.SVGElement && ((t = t[a]), (a = 'baseVal')), o !== r)) {
        for (var i = t[a], l = 0, s = o.length; s > l; l++) i = Ce(i).replace(Ce(o[l]), ' ');
        i = Fe(i);
        for (var c = 0, f = n.length; f > c; c++) -1 === Ce(i).indexOf(Ce(n[c])) && (i += ' ' + n[c]);
        t[a] = Fe(i);
      } else t[a] = n;
    },
    Fe = function (e) {
      return e.replace(D, '');
    },
    Ce = function (e) {
      return ' ' + e + ' ';
    },
    He =
      Date.now ||
      function () {
        return +new Date();
      },
    De = function (e, t) {
      return e.frame - t.frame;
    },
    Ie = 0,
    Pe = 1,
    Ne = 'down',
    Oe = -1,
    Ve = He(),
    ze = 0,
    qe = 0,
    Le = !1,
    Me = 0,
    $e = !1,
    Be = 0,
    _e = [];
  'function' == typeof define && define.amd
    ? define([], function () {
        return i;
      })
    : 'undefined' != typeof module && module.exports
    ? (module.exports = i)
    : (e.skrollr = i);
})(window, document);
