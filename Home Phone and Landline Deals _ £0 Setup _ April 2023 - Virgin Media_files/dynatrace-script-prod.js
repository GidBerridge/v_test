/*
 Copyright and licenses see https://www.dynatrace.com/company/trust-center/customers/reports/*/
(function () {
  'undefined' !== typeof window && window.setTimeout && (window.setTimeout = window.setTimeout);
  this.dT_ && dT_.prm && dT_.prm();
  (function () {
    function qa() {
      document.cookie = ''.concat('__dTCookie', '=').concat('1', ';SameSite=Lax');
      var Ua = -1 !== document.cookie.indexOf('__dTCookie');
      document.cookie = ''.concat('__dTCookie', '=').concat('1', '; expires=Thu, 01-Jan-1970 00:00:01 GMT');
      return Ua;
    }
    function Pa() {
      return void 0 === ib.dialogArguments ? navigator.cookieEnabled || qa() : qa();
    }
    function gb() {
      var Ua;
      if (Pa() && !window.dT_) {
        var Ba =
          ((Ua = {}),
          (Ua.cfg =
            'app=8ef462a44d4df309|cors=1|rcdec=1209600000|featureHash=A27Vfgjqrux|cux=1|vcv=2|reportUrl=https://dtagate.virginmedia.co.uk:443/bf/ec4ad3bd-3ca6-4dcf-be6f-a90e7062f177|rdnt=1|uxrgce=1|bp=3|srmcrv=10|cuc=f681zhxe|mel=100000|ssv=4|lastModification=1662456348035|dtVersion=10241220422021336|srmcrl=1|tp=500,50,0,1|uxdcw=1500|featureHash=A27Vfgjqrux|async=1|agentUri=https://dtagate.virginmedia.co.uk:443/jstag/managed/ruxitagent_A27Vfgjqrux_10241220422021336.js|auto=|domain=|rid=RID_|rpid=|app=8ef462a44d4df309'),
          (Ua.iCE = Pa),
          Ua);
        window.dT_ = Ba;
      }
    }
    var ib = 'undefined' !== typeof window ? window : self,
      La;
    ib.dT_
      ? (null === (La = ib.console) || void 0 === La
          ? void 0
          : La.log('Duplicate agent injection detected, turning off redundant initConfig.'),
        (ib.dT_.di = 1))
      : gb();
  })();
})();
/*
     Copyright and licenses see https://www.dynatrace.com/company/trust-center/customers/reports/*/
(function () {
  'undefined' !== typeof window && window.setTimeout && (window.setTimeout = window.setTimeout);
  this.dT_ && dT_.prm && dT_.prm();
  (function () {
    function qa(k, w, O) {
      void 0 === O && (O = 0);
      var ya = -1;
      w && (null === k || void 0 === k ? 0 : k.indexOf) && (ya = k.indexOf(w, O));
      return ya;
    }
    function Pa() {
      var k;
      return !(null === (k = Db.console) || void 0 === k || !k.log);
    }
    function gb(k, w) {
      if (!w) return '';
      var O = k + '=';
      k = qa(w, O);
      if (0 > k) return '';
      for (; 0 <= k; ) {
        if (0 === k || ' ' === w.charAt(k - 1) || ';' === w.charAt(k - 1))
          return (O = k + O.length), (k = qa(w, ';', k)), 0 <= k ? w.substring(O, k) : w.substring(O);
        k = qa(w, O, k + O.length);
      }
      return '';
    }
    function ib(k) {
      return gb(k, document.cookie);
    }
    function La() {}
    function Ua() {
      var k = 0;
      try {
        k = Math.round(Db.performance.timeOrigin);
      } catch (w) {}
      if (0 >= k || isNaN(k) || !isFinite(k)) {
        k = 0;
        try {
          k = Db.performance.timing.navigationStart;
        } catch (w) {}
        k = 0 >= k || isNaN(k) || !isFinite(k) ? df : k;
      }
      fh = k;
      G = Ba;
      return fh;
    }
    function Ba() {
      return fh;
    }
    function Aa() {
      return G();
    }
    function Va() {
      var k,
        w = 0;
      if (null === (k = null === Db || void 0 === Db ? void 0 : Db.performance) || void 0 === k ? 0 : k.now)
        try {
          w = Math.round(Db.performance.now());
        } catch (O) {}
      return 0 >= w || isNaN(w) || !isFinite(w) ? new Date().getTime() - G() : w;
    }
    function V(k, w) {
      void 0 === w && (w = document.cookie);
      return gb(k, w);
    }
    function ba() {}
    function Fa(k, w) {
      return function () {
        k.apply(w, arguments);
      };
    }
    function na(k) {
      if (!(this instanceof na)) throw new TypeError('Promises must be constructed via new');
      if ('function' !== typeof k) throw new TypeError('not a function');
      this.da = 0;
      this.Za = !1;
      this.ia = void 0;
      this.ka = [];
      wa(k, this);
    }
    function za(k, w) {
      for (; 3 === k.da; ) k = k.ia;
      0 === k.da
        ? k.ka.push(w)
        : ((k.Za = !0),
          na.Ba(function () {
            var O = 1 === k.da ? w.jc : w.kc;
            if (null === O) (1 === k.da ? Na : Ta)(w.promise, k.ia);
            else {
              try {
                var ya = O(k.ia);
              } catch (eb) {
                Ta(w.promise, eb);
                return;
              }
              Na(w.promise, ya);
            }
          }));
    }
    function Na(k, w) {
      try {
        if (w === k) throw new TypeError('A promise cannot be resolved with itself.');
        if (w && ('object' === typeof w || 'function' === typeof w)) {
          var O = w.then;
          if (w instanceof na) {
            k.da = 3;
            k.ia = w;
            ia(k);
            return;
          }
          if ('function' === typeof O) {
            wa(Fa(O, w), k);
            return;
          }
        }
        k.da = 1;
        k.ia = w;
        ia(k);
      } catch (ya) {
        Ta(k, ya);
      }
    }
    function Ta(k, w) {
      k.da = 2;
      k.ia = w;
      ia(k);
    }
    function ia(k) {
      2 === k.da &&
        0 === k.ka.length &&
        na.Ba(function () {
          k.Za || na.cb(k.ia);
        });
      for (var w = 0, O = k.ka.length; w < O; w++) za(k, k.ka[w]);
      k.ka = null;
    }
    function P(k, w, O) {
      this.jc = 'function' === typeof k ? k : null;
      this.kc = 'function' === typeof w ? w : null;
      this.promise = O;
    }
    function wa(k, w) {
      var O = !1;
      try {
        k(
          function (ya) {
            O || ((O = !0), Na(w, ya));
          },
          function (ya) {
            O || ((O = !0), Ta(w, ya));
          }
        );
      } catch (ya) {
        O || ((O = !0), Ta(w, ya));
      }
    }
    function oa() {
      H.Ba = function (k) {
        if ('string' === typeof k) throw Error('Promise polyfill called _immediateFn with string');
        k();
      };
      H.cb = function () {};
      return H;
    }
    function W(k, w) {
      return parseInt(k, w || 10);
    }
    function db(k) {
      return document.getElementsByTagName(k);
    }
    function K(k) {
      var w = k.length;
      if ('number' === typeof w) k = w;
      else {
        w = 0;
        for (var O = 2048; k[O - 1]; ) (w = O), (O += O);
        for (var ya = 7; 1 < O - w; ) (ya = (O + w) / 2), k[ya - 1] ? (w = ya) : (O = ya);
        k = k[ya] ? O : w;
      }
      return k;
    }
    function I(k) {
      for (var w = [], O = 1; O < arguments.length; O++) w[O - 1] = arguments[O];
      k.push.apply(k, w);
    }
    function F(k) {
      k = encodeURIComponent(k);
      var w = [];
      if (k)
        for (var O = 0; O < k.length; O++) {
          var ya = k.charAt(O);
          I(w, Ja[ya] || ya);
        }
      return w.join('');
    }
    function Q(k) {
      -1 < qa(k, '^') &&
        ((k = k.split('^^').join('^')),
        (k = k.split('^dq').join('"')),
        (k = k.split('^rb').join('>')),
        (k = k.split('^lb').join('<')),
        (k = k.split('^p').join('|')),
        (k = k.split('^e').join('=')),
        (k = k.split('^s').join(';')),
        (k = k.split('^c').join(',')),
        (k = k.split('^bs').join('\\')));
      return k;
    }
    function fa(k, w) {
      if (!k || !k.length) return -1;
      if (k.indexOf) return k.indexOf(w);
      for (var O = k.length; O--; ) if (k[O] === w) return O;
      return -1;
    }
    function U(k, w) {
      var O;
      void 0 === w && (w = []);
      if (!k || ('object' !== typeof k && 'function' !== typeof k)) return !1;
      var ya = 'number' !== typeof w ? w : [],
        eb = null,
        xb = [];
      switch ('number' === typeof w ? w : 5) {
        case 0:
          eb = 'Array';
          xb.push('push');
          break;
        case 1:
          eb = 'Boolean';
          break;
        case 2:
          eb = 'Number';
          break;
        case 3:
          eb = 'String';
          break;
        case 4:
          eb = 'Function';
          break;
        case 5:
          eb = 'Object';
          break;
        case 6:
          eb = 'Date';
          xb.push('getTime');
          break;
        case 7:
          eb = 'Error';
          xb.push('name', 'message');
          break;
        case 8:
          eb = 'Element';
          break;
        case 9:
          eb = 'HTMLElement';
          break;
        case 10:
          eb = 'HTMLImageElement';
          xb.push('complete');
          break;
        case 11:
          eb = 'PerformanceEntry';
          break;
        case 12:
          eb = 'PerformanceTiming';
          break;
        case 13:
          eb = 'PerformanceResourceTiming';
          break;
        case 14:
          eb = 'PerformanceNavigationTiming';
          break;
        case 15:
          eb = 'CSSRule';
          xb.push('cssText', 'parentStyleSheet');
          break;
        case 16:
          eb = 'CSSStyleSheet';
          xb.push('cssRules', 'insertRule');
          break;
        case 17:
          eb = 'Request';
          xb.push('url');
          break;
        case 18:
          eb = 'Response';
          xb.push('ok', 'status', 'statusText');
          break;
        case 19:
          eb = 'Set';
          xb.push('add', 'entries', 'forEach');
          break;
        case 20:
          eb = 'Map';
          xb.push('set', 'entries', 'forEach');
          break;
        case 21:
          eb = 'Worker';
          xb.push('addEventListener', 'postMessage', 'terminate');
          break;
        case 22:
          eb = 'XMLHttpRequest';
          xb.push('open', 'send', 'setRequestHeader');
          break;
        case 23:
          eb = 'SVGScriptElement';
          xb.push('ownerSVGElement', 'type');
          break;
        case 24:
          eb = 'HTMLMetaElement';
          xb.push('httpEquiv', 'content', 'name');
          break;
        case 25:
          eb = 'HTMLHeadElement';
          break;
        case 26:
          eb = 'ArrayBuffer';
          break;
        case 27:
          (eb = 'ShadowRoot'), xb.push('host', 'mode');
      }
      w = eb;
      if (!w) return !1;
      xb = xb.length ? xb : ya;
      if (!ya.length)
        try {
          if ((Db[w] && k instanceof Db[w]) || Object.prototype.toString.call(k) === '[object ' + w + ']') return !0;
          if (k && k.nodeType && 1 === k.nodeType) {
            var yc = null === (O = k.ownerDocument.defaultView) || void 0 === O ? void 0 : O[w];
            if ('function' === typeof yc && k instanceof yc) return !0;
          }
        } catch (Mc) {}
      for (O = 0; O < xb.length; O++)
        if (((ya = xb[O]), ('string' !== typeof ya && 'number' !== typeof ya && 'symbol' !== typeof ya) || !(ya in k)))
          return !1;
      return !!xb.length;
    }
    function ja(k, w, O, ya) {
      'undefined' === typeof ya && (ya = Sa(w, !0));
      'boolean' === typeof ya && (ya = Sa(w, ya));
      if (k === Db) Xa ? Xa(w, O, ya) : Mb && Mb('on' + w, O);
      else if ($b && U(k, 21)) Pc.call(k, w, O, ya);
      else if (k.addEventListener)
        if (k === Db.document || k === Db.document.documentElement) Jb.call(k, w, O, ya);
        else
          try {
            Xa.call(k, w, O, ya);
          } catch (yc) {
            k.addEventListener(w, O, ya);
          }
      else k.attachEvent && k.attachEvent('on' + w, O);
      ya = !1;
      for (var eb = Xc.length; 0 <= --eb; ) {
        var xb = Xc[eb];
        if (xb.object === k && xb.event === w && xb.ga === O) {
          ya = !0;
          break;
        }
      }
      ya || I(Xc, { object: k, event: w, ga: O });
    }
    function xa(k, w, O, ya) {
      for (var eb = Xc.length; 0 <= --eb; ) {
        var xb = Xc[eb];
        if (xb.object === k && xb.event === w && xb.ga === O) {
          Xc.splice(eb, 1);
          break;
        }
      }
      'undefined' === typeof ya && (ya = Sa(w, !0));
      'boolean' === typeof ya && (ya = Sa(w, ya));
      k === Db
        ? wb
          ? wb(w, O, ya)
          : Mb && Mb('on' + w, O)
        : k.removeEventListener
        ? k === Db.document || k === Db.document.documentElement
          ? Vb.call(k, w, O, ya)
          : wb.call(k, w, O, ya)
        : k.detachEvent && k.detachEvent('on' + w, O);
    }
    function Sa(k, w) {
      var O = !1;
      try {
        if (Xa && -1 < fa(Sd, k)) {
          var ya = Object.defineProperty({}, 'passive', {
            get: function () {
              O = !0;
            },
          });
          Xa('test', La, ya);
        }
      } catch (eb) {}
      return O ? { passive: !0, capture: w } : w;
    }
    function Lb() {
      for (var k = Xc, w = k.length; 0 <= --w; ) {
        var O = k[w];
        xa(O.object, O.event, O.ga);
      }
      Xc = [];
    }
    function lb(k, w, O) {
      if (O || 2 === arguments.length)
        for (var ya = 0, eb = w.length, xb; ya < eb; ya++)
          (!xb && ya in w) || (xb || (xb = Array.prototype.slice.call(w, 0, ya)), (xb[ya] = w[ya]));
      return k.concat(xb || Array.prototype.slice.call(w));
    }
    function aa(k) {
      return 'function' === typeof k && /{\s+\[native code]/.test(Function.prototype.toString.call(k));
    }
    function ra(k, w) {
      for (var O, ya = [], eb = 2; eb < arguments.length; eb++) ya[eb - 2] = arguments[eb];
      return void 0 !== Function.prototype.bind && aa(Function.prototype.bind)
        ? (O = Function.prototype.bind).call.apply(O, lb([k, w], ya, !1))
        : function () {
            for (var xb = 0; xb < arguments.length; xb++);
            return k.apply(w, (ya || []).concat(Array.prototype.slice.call(arguments) || []));
          };
    }
    function T() {
      if (Td) {
        var k = new Td();
        if (xe)
          for (var w = 0, O = ye; w < O.length; w++) {
            var ya = O[w];
            void 0 !== xe[ya] && (k[ya] = ra(xe[ya], k));
          }
        return k;
      }
      return bd
        ? new bd('MSXML2.XMLHTTP.3.0')
        : Db.XMLHttpRequest
        ? new Db.XMLHttpRequest()
        : new Db.ActiveXObject('MSXML2.XMLHTTP.3.0');
    }
    function la() {
      document.cookie = ''.concat('__dTCookie', '=').concat('1', ';SameSite=Lax');
      var k = -1 !== document.cookie.indexOf('__dTCookie');
      document.cookie = ''.concat('__dTCookie', '=').concat('1', '; expires=Thu, 01-Jan-1970 00:00:01 GMT');
      return k;
    }
    function Da() {
      return void 0 === Db.dialogArguments ? navigator.cookieEnabled || la() : la();
    }
    function ob() {
      return Re;
    }
    function qb(k) {
      Re = k;
    }
    function kb(k) {
      var w = N('rid'),
        O = N('rpid');
      w && (k.rid = w);
      O && (k.rpid = O);
    }
    function Eb(k) {
      if ((k = k.xb)) {
        k = Q(k);
        try {
          Re = new RegExp(k, 'i');
        } catch (w) {}
      } else Re = void 0;
    }
    function kc(k) {
      return 'n' === k || 's' === k || 'l' === k ? ';SameSite='.concat(xg[k]) : '';
    }
    function Wb(k, w, O) {
      var ya = 1,
        eb = 0;
      do
        (document.cookie =
          k +
          '=""' +
          (w ? ';domain=' + w : '') +
          ';path=' +
          O.substring(0, ya) +
          '; expires=Thu, 01 Jan 1970 00:00:01 GMT;'),
          (ya = O.indexOf('/', ya)),
          eb++;
      while (-1 !== ya && 5 > eb);
    }
    function Ga(k) {
      var w = {},
        O = 0;
      for (k = k.split('|'); O < k.length; O++) {
        var ya = k[O].split('=');
        2 === ya.length && (w[ya[0]] = decodeURIComponent(ya[1].replace(/\+/g, ' ')));
      }
      return w;
    }
    function zb() {
      var k = N('csu');
      return (k.indexOf('dbg') === k.length - 3 ? k.substring(0, k.length - 3) : k) + '_' + N('app') + '_Store';
    }
    function Cb(k, w, O) {
      void 0 === w && (w = {});
      var ya = 0;
      for (k = k.split('|'); ya < k.length; ya++) {
        var eb = k[ya],
          xb = eb,
          yc = qa(eb, '=');
        -1 === yc ? (w[xb] = '1') : ((xb = eb.substring(0, yc)), (w[xb] = eb.substring(yc + 1, eb.length)));
      }
      !O &&
        ((O = w), (ya = O.spc)) &&
        ((k = document.createElement('textarea')), (k.innerHTML = ya), (O.spc = k.value));
      return w;
    }
    function ca(k) {
      var w;
      return null !== (w = rc[k]) && void 0 !== w ? w : Ud[k];
    }
    function Ma(k) {
      k = ca(k);
      return 'false' === k || '0' === k ? !1 : !!k;
    }
    function ab(k) {
      var w = ca(k);
      w = W(w);
      isNaN(w) && (w = Ud[k]);
      return w;
    }
    function N(k) {
      return String(ca(k) || '');
    }
    function ha(k, w) {
      rc[k] = String(w);
    }
    function Ea(k) {
      return (rc = k);
    }
    function bb(k) {
      rc[k] = 0 > qa(rc[k], '#' + k.toUpperCase()) ? rc[k] : '';
    }
    function Kb(k) {
      var w = k.agentUri;
      w &&
        -1 < qa(w, '_') &&
        (w = /([a-zA-Z]*)[0-9]{0,4}_([a-zA-Z_0-9]*)_[0-9]+/g.exec(w)) &&
        w.length &&
        2 < w.length &&
        ((k.csu = w[1]), (k.featureHash = w[2]));
    }
    function Jc(k) {
      var w = k.domain || '';
      var O = (O = location.hostname) && w ? O === w || -1 !== O.indexOf('.' + w, O.length - ('.' + w).length) : !0;
      if (!w || !O) {
        k.domainOverride ||
          ((k.domainOriginal = k.domain || ''),
          (k.domainOverride = ''.concat(location.hostname, ',').concat(w)),
          delete k.domain);
        var ya = N('cssm');
        var eb = document.domain || '';
        if (eb) {
          eb = eb.split('.').reverse();
          var xb = eb.length;
          if (1 >= xb) ya = '';
          else {
            for (var yc = eb[0], Mc = '', Yc = 1; Yc <= xb; Yc++)
              if (V('dTValidationCookie')) {
                Mc = yc;
                break;
              } else {
                eb[Yc] && (yc = ''.concat(eb[Yc], '.').concat(yc));
                var ud = ''.concat('dTValidationCookie', '=dTValidationCookieValue;path=/;domain=').concat(yc);
                ud += kc(ya);
                document.cookie = ud;
              }
            Wb('dTValidationCookie', Mc, '/');
            ya = Mc;
          }
        } else ya = '';
        ya && (k.domain = ya);
        O ||
          I(Jf, {
            type: 'dpi',
            severity: 'Warning',
            text: 'Configured domain "'
              .concat(w, '" is invalid for current location "')
              .concat(location.hostname, '". Agent will use "')
              .concat(k.domain, '" instead.'),
          });
      }
    }
    function Ob(k, w) {
      Jc(k);
      var O = rc.pVO;
      O && (k.pVO = O);
      w || ((w = k.bp || Ud.bp), k.bp2 && (w = 2), (k.bp = String(w)));
    }
    function ac() {
      return rc;
    }
    function q(k) {
      return Ud[k] === ca(k);
    }
    function E() {
      if (Db.MobileAgent || Db.dynatraceMobile) {
        var k = ib('dtAdkSettings');
        return Gg.dT_.p3SC(k).privacyState || null;
      }
      return null;
    }
    function t() {
      var k = E();
      return 2 === k || 1 === k ? !1 : !Gg.dT_.bcv('coo') || Gg.dT_.bcv('cooO') || Gg.dT_.iSM();
    }
    function A(k, w) {
      return !t() || (Db.dT_.overloadPrevention && !fc()) ? null : k.apply(this, w || []);
    }
    function Z(k, w) {
      try {
        var O = Kd;
        O && O.setItem(k, w);
      } catch (ya) {}
    }
    function z(k, w) {
      A(Z, [k, w]);
    }
    function ma(k) {
      try {
        var w = Kd;
        if (w) return w.getItem(k);
      } catch (O) {}
      return null;
    }
    function M(k) {
      try {
        var w = Kd;
        w && w.removeItem(k);
      } catch (O) {}
    }
    function R(k) {
      document.cookie =
        k + '="";path=/' + (N('domain') ? ';domain=' + N('domain') : '') + '; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
    function va(k, w, O, ya) {
      Ee = !0;
      w || 0 === w
        ? ((w = String(w).replace(/[;\n\r]/g, '_')),
          (k = k + '=' + w + ';path=/' + (N('domain') ? ';domain=' + N('domain') : '')),
          O && (k += ';expires=' + O.toUTCString()),
          (k += kc(N('cssm'))),
          ya && 'https:' === location.protocol && (k += ';Secure'),
          (document.cookie = k))
        : R(k);
      Ee = !1;
    }
    function Ka(k, w, O, ya) {
      A(va, [k, w, O, ya]);
    }
    function Ya(k) {
      return -1 === qa(k, 'v_4') ? !1 : !0;
    }
    function Fb(k) {
      k = V('dtCookie', k);
      k || ((k = ma('dtCookie')) && Ya(k) ? Nb(k) : (k = ''));
      return Ya(k) ? k : '';
    }
    function Nb(k) {
      Ka('dtCookie', k, void 0, Ma('ssc'));
    }
    function Pb(k) {
      return (k = k || Fb()) ? Zc(k) : { sessionId: '', serverId: '', overloadState: 0 };
    }
    function cc(k) {
      return Pb(k).serverId;
    }
    function Ac(k) {
      return Pb(k).sessionId;
    }
    function fc() {
      return 0 <= qa(navigator.userAgent, 'RuxitSynthetic');
    }
    function Zc(k) {
      var w = { sessionId: '', serverId: '', overloadState: 0 },
        O = k.split('_');
      if (2 < O.length && 0 === O.length % 2) {
        k = Number(O[1]);
        if (isNaN(k) || 3 > k) return w;
        k = {};
        for (var ya = 2; ya < O.length; ya++) (k[O[ya]] = O[ya + 1]), ya++;
        k.sn ? ((O = k.sn), (O = O.length === ge || 12 >= O.length ? O : '')) : (O = 'hybrid');
        w.sessionId = O;
        if (k.srv) {
          a: {
            O = k.srv.replace('-2D', '-');
            if (!isNaN(Number(O)) && ((ya = W(O)), -99 <= ya && 99 >= ya)) break a;
            O = '';
          }
          w.serverId = O;
        }
        O = Number(k.ol);
        if (1 === O) {
          ya = fc();
          var eb = Db.dT_;
          ya || (z('dtDisabled', 'true'), (eb.disabled = !0), (eb.overloadPrevention = !0));
        }
        0 <= O && 2 >= O && (w.overloadState = O);
        k = Number(k.prv);
        isNaN(k) || (w.privacyState = 1 > k || 4 < k ? 1 : k);
      }
      return w;
    }
    function Kc() {
      return Ld();
    }
    function kd(k, w) {
      function O() {
        delete lf[xb];
        k.apply(this, arguments);
      }
      for (var ya = [], eb = 2; eb < arguments.length; eb++) ya[eb - 2] = arguments[eb];
      if ('apply' in Fe) {
        ya.unshift(O, w);
        var xb = Fe.apply(Db, ya);
      } else xb = Fe(O, w);
      lf[xb] = !0;
      return xb;
    }
    function ka(k) {
      delete lf[k];
      'apply' in pe ? pe.call(Db, k) : pe(k);
    }
    function Ca(k) {
      I(Vd, k);
    }
    function Ra(k) {
      for (var w = Vd.length; w--; )
        if (Vd[w] === k) {
          Vd.splice(w, 1);
          break;
        }
    }
    function Wa() {
      return Vd;
    }
    function ub(k, w) {
      return Ge(k, w);
    }
    function Yb(k) {
      ze(k);
    }
    function Qa(k, w) {
      if (!qe || !Md) return '';
      k = new qe([k], { type: w });
      return Md(k);
    }
    function sc(k, w) {
      return he ? new he(k, w) : void 0;
    }
    function vc(k) {
      'function' === typeof k && I(Hi, k);
    }
    function ad() {
      return Hi;
    }
    function Lc() {
      return df;
    }
    function Ad(k) {
      return function () {
        for (var w = [], O = 0; O < arguments.length; O++) w[O] = arguments[O];
        if ('number' !== typeof w[0] || !lf[w[0]])
          try {
            return k.apply(this, w);
          } catch (ya) {
            return k(w[0]);
          }
      };
    }
    function id() {
      return Jf;
    }
    function zc() {
      G = Ua;
      Db.performance &&
        (Ld = function () {
          return Math.round(G() + Va());
        });
      if (!Ld || isNaN(Ld()) || 0 >= Ld() || !isFinite(Ld()))
        Ld = function () {
          return new Date().getTime();
        };
    }
    function wd() {
      me && ((Db.clearTimeout = pe), (Db.clearInterval = ze), (me = !1));
    }
    function mc(k, w) {
      try {
        Db.localStorage && Db.localStorage.setItem(k, w);
      } catch (O) {}
    }
    function Cc(k) {
      try {
        Db.localStorage && Db.localStorage.removeItem(k);
      } catch (w) {}
    }
    function $c() {
      Cc('rxec');
      Cc('rxvisitid');
      Cc('rxvt');
    }
    function od(k) {
      t() ? k() : (qf || (qf = []), I(qf, k));
    }
    function Dc(k) {
      return A(k);
    }
    function Fc() {
      if (Ma('coo') && !t()) {
        for (var k = 0, w = qf; k < w.length; k++) kd(w[k], 0);
        qf = [];
        ha('cooO', !0);
      }
    }
    function Vc() {
      if (Ma('coo') && t()) {
        ha('cooO', !1);
        R('dtCookie');
        R('dtPC');
        R('dtLatC');
        R('dtSa');
        R('dtAdk');
        R('rxVisitor');
        R('rxvt');
        try {
          M('rxec');
          M('rxvisitid');
          M('rxvt');
          $c();
          var k = Kd;
          k && (k.removeItem('rxVisitor'), k.removeItem('dtCookie'));
          if ((k = ag)) k.removeItem(zb()), k.removeItem('dtAdk');
        } catch (w) {}
      }
    }
    function yb(k, w) {
      void 0 === w && (w = document.cookie || '');
      return w.split(k + '=').length - 1;
    }
    function jb(k, w) {
      var O = yb(k, w);
      if (1 < O) {
        w = N('domain') || Db.location.hostname;
        var ya = Db.location.hostname,
          eb = Db.location.pathname,
          xb = 0,
          yc = 0;
        ef.push(k);
        do {
          var Mc = ya.substring(xb);
          if (Mc !== w || '/' !== eb) {
            Wb(k, Mc === w ? '' : Mc, eb);
            var Yc = yb(k);
            Yc < O && (ef.push(Mc), (O = Yc));
          }
          xb = ya.indexOf('.', xb) + 1;
          yc++;
        } while (0 !== xb && 10 > yc && 1 < O);
        N('domain') && 1 < O && Wb(k, '', eb);
      }
    }
    function nd() {
      var k = document.cookie;
      jb('dtPC', k);
      jb('dtCookie', k);
      jb('dtLatC', k);
      jb('rxvt', k);
      0 < ef.length &&
        I(Jf, {
          severity: 'Error',
          type: 'dcn',
          text: 'Duplicate cookie name'.concat(1 !== ef.length ? 's' : '', ' detected: ').concat(ef.join(', ')),
        });
      Ca(function (w, O, ya, eb) {
        0 < ef.length && !O && (w.av(eb, 'dCN', ef.join(',')), (ef = []));
        0 < rf.length && !O && (w.av(eb, 'eCC', rf.join(',')), (rf = []));
      });
    }
    function gd(k) {
      var w = k,
        O = Math.pow(2, 32);
      return function () {
        w = (1664525 * w + 1013904223) % O;
        return w / O;
      };
    }
    function Ye(k, w) {
      return isNaN(k) || isNaN(w) ? Math.floor(33 * Hg()) : Math.floor(Hg() * (w - k + 1)) + k;
    }
    function Nd(k) {
      if (!k) return '';
      var w = Db.crypto || Db.msCrypto;
      if (w && -1 === qa(navigator.userAgent, 'Googlebot')) w = w.getRandomValues(new Uint8Array(k));
      else {
        w = [];
        for (var O = 0; O < k; O++) w.push(Ye(0, 32));
      }
      k = [];
      for (O = 0; O < w.length; O++) {
        var ya = Math.abs(w[O] % 32);
        k.push(String.fromCharCode(ya + (9 >= ya ? 48 : 55)));
      }
      return k.join('');
    }
    function cd() {
      return Ig;
    }
    function Tc(k) {
      k &&
        (null === k || void 0 === k ? 0 : k.configurable) &&
        k.set &&
        k.get &&
        Object.defineProperty(document, 'cookie', {
          get: function () {
            return k.get.call(document);
          },
          set: function (w) {
            var O = w.split('=')[0];
            k.set.call(document, w);
            Ee
              ? 1 < yb(O) && ef.push(O)
              : -1 < fa(Bh, O) &&
                (rf.push(O),
                -1 === fa(ni, O) &&
                  (I(ni, O),
                  I(Jf, {
                    severity: 'Error',
                    type: 'ecm',
                    text: 'Invalid modification of agent cookie '.concat(
                      O,
                      ' detected. Modifying Dynatrace cookies may result in missing or invalid data.'
                    ),
                  })));
          },
        });
    }
    function re(k) {
      void 0 === k && (k = !0);
      tj = k;
    }
    function dd(k, w, O) {
      var ya = ab('pcl');
      ya = k.length - ya;
      0 < ya && k.splice(0, ya);
      ya = cc(V('dtCookie', O));
      for (var eb = [], xb = ya ? ''.concat(ya, '$') : '', yc = 0; yc < k.length; yc++) {
        var Mc = k[yc];
        '-' !== Mc.G && eb.push(''.concat(xb).concat(Mc.frameId, 'h').concat(Mc.G));
      }
      k = eb.join('p');
      k || (tj && (C(!0, 'a', O), re(!1)), (k += ''.concat(ya, '$').concat(Ig, 'h-')));
      k += 'v'.concat(w || ed(O));
      Ka('dtPC', k + 'e0', void 0, Ma('ssc'));
    }
    function Od(k, w) {
      void 0 === w && (w = document.cookie);
      var O = V('dtPC', w);
      w = [];
      if (O && '-' !== O) {
        var ya = '';
        var eb = 0;
        for (O = O.split('p'); eb < O.length; eb++) {
          var xb = O[eb],
            yc = ya,
            Mc = k;
          void 0 === yc && (yc = '');
          ya = qa(xb, '$');
          var Yc = qa(xb, 'h');
          var ud = qa(xb, 'v'),
            sf = qa(xb, 'e');
          ya = xb.substring(ya + 1, Yc);
          Yc = -1 !== ud ? xb.substring(Yc + 1, ud) : xb.substring(Yc + 1);
          yc || -1 === ud || (yc = -1 !== sf ? xb.substring(ud + 1, sf) : xb.substring(ud + 1));
          xb = null;
          Mc || ((Mc = W(ya.split('_')[0])), (ud = Ld() % oi), ud < Mc && (ud += oi), (Mc = Mc + 9e5 > ud));
          Mc && (xb = { frameId: ya, G: '-' === Yc ? '-' : W(Yc), visitId: '' });
          ya = yc;
          (Yc = xb) && w.push(Yc);
        }
        for (k = 0; k < w.length; k++) w[k].visitId = ya;
      }
      return w;
    }
    function ce(k, w) {
      var O = document.cookie;
      w = Od(w, O);
      for (var ya = !1, eb = 0; eb < w.length; eb++) {
        var xb = w[eb];
        xb.frameId === Ig && ((xb.G = k), (ya = !0));
      }
      ya || I(w, { frameId: Ig, G: k, visitId: '' });
      dd(w, void 0, O);
    }
    function ed(k) {
      return Se(k) || C(!0, 'c', k);
    }
    function Se(k) {
      if (bc(k) <= Ld()) return C(!0, 't', k);
      var w = pd(k);
      if (!w) return C(!0, 'c', k);
      var O = Ae.exec(w);
      if (!O || 3 !== O.length || 32 !== O[1].length || isNaN(W(O[2]))) return C(!0, 'i', k);
      z('rxvisitid', w);
      return w;
    }
    function Ze(k, w) {
      var O = Ld();
      w = Hb(w).Kc;
      k && (w = O);
      $a(O + Xg + '|' + w);
      sa();
    }
    function ff(k) {
      var w = 't' + (Ld() - bc(k)),
        O = pd(k),
        ya = Te();
      $e(ya, k);
      L(ya, w, O);
    }
    function pd(k) {
      var w, O;
      return null !== (O = null === (w = Od(!0, k)[0]) || void 0 === w ? void 0 : w.visitId) && void 0 !== O
        ? O
        : ma('rxvisitid');
    }
    function Te() {
      var k = Nd(ge);
      k = k.replace(/[0-9]/g, function (w) {
        w = 0.1 * W(w);
        return String.fromCharCode(Math.floor(25 * w + 65));
      });
      return k + '-0';
    }
    function $e(k, w) {
      var O = Od(!1, w);
      dd(O, k, w);
      z('rxvisitid', k);
      Ze(!0);
    }
    function u(k, w, O) {
      return C(k, w, O);
    }
    function C(k, w, O) {
      k && (ne = !0);
      k = pd(O);
      O = Te();
      $e(O);
      L(O, w, k);
      return O;
    }
    function L(k, w, O) {
      if (pd(document.cookie)) for (var ya = 0, eb = Xd; ya < eb.length; ya++) (0, eb[ya])(k, ne, w, O);
    }
    function ea(k) {
      Xd.push(k);
    }
    function sa(k) {
      ng && ka(ng);
      ng = kd(Ia, bc(k) - Ld());
    }
    function Ia() {
      var k = document.cookie;
      if (bc(k) <= Ld()) return A(ff, [k]), !0;
      od(sa);
      return !1;
    }
    function $a(k) {
      Ka('rxvt', k, void 0, Ma('ssc'));
      z('rxvt', k);
    }
    function cb(k, w) {
      (w = V(k, w)) || (w = ma(k) || '');
      return w;
    }
    function Gb() {
      var k = Se() || '';
      z('rxvisitid', k);
      k = cb('rxvt');
      $a(k);
      $c();
    }
    function Hb(k) {
      var w = { Cd: 0, Kc: 0 };
      if ((k = cb('rxvt', k)))
        try {
          var O = k.split('|');
          2 === O.length && ((w.Cd = parseInt(O[0], 10)), (w.Kc = parseInt(O[1], 10)));
        } catch (ya) {}
      return w;
    }
    function bc(k) {
      k = Hb(k);
      return Math.min(k.Cd, k.Kc + gh);
    }
    function wc(k) {
      Xg = k;
    }
    function Dd() {
      var k = ne;
      ne = !1;
      return k;
    }
    function Gd() {
      Ia() || Ze(!1);
    }
    function qd(k) {
      try {
        if (Db.localStorage) return Db.localStorage.getItem(k);
      } catch (w) {}
      return null;
    }
    function ve() {
      var k = V('rxVisitor');
      (k && 45 === (null === k || void 0 === k ? void 0 : k.length)) ||
        ((k = qd('rxVisitor') || ma('rxVisitor')),
        45 !== (null === k || void 0 === k ? void 0 : k.length) &&
          ((hh = !0), (k = String(Ld())), (k += Nd(45 - k.length))));
      af(k);
      return k;
    }
    function af(k) {
      if (Ma('dpvc') || Ma('pVO')) z('rxVisitor', k);
      else {
        var w = new Date();
        var O = w.getMonth() + Math.min(24, Math.max(1, ab('rvcl')));
        w.setMonth(O);
        A(mc, ['rxVisitor', k]);
      }
      Ka('rxVisitor', k, w, Ma('ssc'));
    }
    function je() {
      return hh;
    }
    function Ed(k) {
      var w = V('rxVisitor');
      R('rxVisitor');
      M('rxVisitor');
      Cc('rxVisitor');
      ha('pVO', !0);
      af(w);
      k && A(mc, ['dt-pVO', '1']);
      Gb();
    }
    function bg() {
      Cc('dt-pVO');
      Ma('pVO') && (ha('pVO', !1), ve());
      M('rxVisitor');
      Gb();
    }
    function Pd(k, w, O, ya, eb) {
      var xb = document.createElement('script');
      xb.setAttribute('src', k);
      w && xb.setAttribute('defer', 'defer');
      O && (xb.onload = O);
      ya && (xb.onerror = ya);
      eb && xb.setAttribute('id', eb);
      xb.setAttribute('crossorigin', 'anonymous');
      k = document.getElementsByTagName('script')[0];
      k.parentElement.insertBefore(xb, k);
    }
    function zf(k, w) {
      return Ti + '/' + (w || yg) + '_' + k + '_' + (ab('buildNumber') || Db.dT_.version) + '.js';
    }
    function Pf() {
      var k, w;
      try {
        null === (w = null === (k = Db.MobileAgent) || void 0 === k ? void 0 : k.incrementActionCount) || void 0 === w
          ? void 0
          : w.call(k);
      } catch (O) {}
    }
    function Xh() {
      var k,
        w = Db.dT_;
      Db.dT_ =
        ((k = {}),
        (k.di = 0),
        (k.version = '10241220422021336'),
        (k.cfg = w ? w.cfg : ''),
        (k.iCE = w
          ? Da
          : function () {
              return navigator.cookieEnabled;
            }),
        (k.ica = 1),
        (k.disabled = !1),
        (k.overloadPrevention = !1),
        (k.gAST = Lc),
        (k.ww = sc),
        (k.stu = Qa),
        (k.nw = Kc),
        (k.apush = I),
        (k.st = kd),
        (k.si = ub),
        (k.aBPSL = Ca),
        (k.rBPSL = Ra),
        (k.gBPSL = Wa),
        (k.aBPSCC = vc),
        (k.gBPSCC = ad),
        (k.buildType = 'dynatrace'),
        (k.gSSV = ma),
        (k.sSSV = z),
        (k.rSSV = M),
        (k.rvl = Cc),
        (k.pn = W),
        (k.iVSC = Ya),
        (k.p3SC = Zc),
        (k.io = qa),
        (k.dC = R),
        (k.sC = Ka),
        (k.esc = F),
        (k.gSId = cc),
        (k.gDtc = Ac),
        (k.gSC = Fb),
        (k.sSC = Nb),
        (k.gC = ib),
        (k.cRN = Ye),
        (k.cRS = Nd),
        (k.gEL = K),
        (k.gEBTN = db),
        (k.cfgO = ac),
        (k.pCfg = Ga),
        (k.pCSAA = Cb),
        (k.cFHFAU = Kb),
        (k.sCD = Ob),
        (k.bcv = Ma),
        (k.ncv = ab),
        (k.scv = N),
        (k.stcv = ha),
        (k.rplC = Ea),
        (k.cLSCK = zb),
        (k.gFId = cd),
        (k.gBAU = zf),
        (k.iS = Pd),
        (k.eWE = od),
        (k.oEIE = Dc),
        (k.oEIEWA = A),
        (k.eA = Fc),
        (k.dA = Vc),
        (k.iNV = je),
        (k.gVID = ve),
        (k.dPV = Ed),
        (k.ePV = bg),
        (k.sVIdUP = re),
        (k.sVTT = wc),
        (k.sVID = $e),
        (k.rVID = Se),
        (k.gVI = ed),
        (k.gNVIdN = u),
        (k.gARnVF = Dd),
        (k.cAUV = Gd),
        (k.uVT = Ze),
        (k.aNVL = ea),
        (k.gPC = Od),
        (k.cPC = ce),
        (k.sPC = dd),
        (k.clB = wd),
        (k.ct = ka),
        (k.aRI = kb),
        (k.iXB = Eb),
        (k.gXBR = ob),
        (k.sXBR = qb),
        (k.de = Q),
        (k.cCL = Pa),
        (k.iEC = Pf),
        (k.rnw = Va),
        (k.gto = Aa),
        (k.ael = ja),
        (k.rel = xa),
        (k.sup = Sa),
        (k.cuel = Lb),
        (k.iAEPOO = t),
        (k.iSM = fc),
        (k.aIOf = fa),
        (k.gxwp = T),
        (k.iIO = U),
        (k.prm = oa),
        (k.cI = Yb),
        (k.gidi = id),
        (k.iDCV = q),
        (k.gCF = V),
        (k.gPSMB = E),
        (k.lvl = qd),
        k);
    }
    function bf() {
      od(function () {
        if (!Ac()) {
          var k = -1 * Ye(2, 99),
            w = Nd(ge);
          Nb('v_4_srv_'.concat(String(k).replace('-', '-2D'), '_sn_').concat(w));
        }
      });
    }
    var Gg = 'undefined' !== typeof window ? window : self,
      Db = 'undefined' !== typeof window ? window : self,
      fh,
      G,
      B = setTimeout;
    na.prototype['catch'] = function (k) {
      return this.then(null, k);
    };
    na.prototype.then = function (k, w) {
      var O = new this.constructor(ba);
      za(this, new P(k, w, O));
      return O;
    };
    na.prototype['finally'] = function (k) {
      var w = this.constructor;
      return this.then(
        function (O) {
          return w.resolve(k()).then(function () {
            return O;
          });
        },
        function (O) {
          return w.resolve(k()).then(function () {
            return w.reject(O);
          });
        }
      );
    };
    na.all = function (k) {
      return new na(function (w, O) {
        function ya(Mc, Yc) {
          try {
            if (Yc && ('object' === typeof Yc || 'function' === typeof Yc)) {
              var ud = Yc.then;
              if ('function' === typeof ud) {
                ud.call(
                  Yc,
                  function (sf) {
                    ya(Mc, sf);
                  },
                  O
                );
                return;
              }
            }
            eb[Mc] = Yc;
            0 === --xb && w(eb);
          } catch (sf) {
            O(sf);
          }
        }
        if (!k || 'undefined' === typeof k.length) return O(new TypeError('Promise.all accepts an array'));
        var eb = Array.prototype.slice.call(k);
        if (0 === eb.length) return w([]);
        for (var xb = eb.length, yc = 0; yc < eb.length; yc++) ya(yc, eb[yc]);
      });
    };
    na.allSettled = function (k) {
      return new this(function (w, O) {
        function ya(yc, Mc) {
          if (Mc && ('object' === typeof Mc || 'function' === typeof Mc)) {
            var Yc = Mc.then;
            if ('function' === typeof Yc) {
              Yc.call(
                Mc,
                function (ud) {
                  ya(yc, ud);
                },
                function (ud) {
                  eb[yc] = { status: 'rejected', reason: ud };
                  0 === --xb && w(eb);
                }
              );
              return;
            }
          }
          eb[yc] = { status: 'fulfilled', value: Mc };
          0 === --xb && w(eb);
        }
        if (!k || 'undefined' === typeof k.length)
          return O(
            new TypeError(typeof k + ' ' + k + ' is not iterable(cannot read property Symbol(Symbol.iterator))')
          );
        var eb = Array.prototype.slice.call(k);
        if (0 === eb.length) return w([]);
        var xb = eb.length;
        for (O = 0; O < eb.length; O++) ya(O, eb[O]);
      });
    };
    na.resolve = function (k) {
      return k && 'object' === typeof k && k.constructor === na
        ? k
        : new na(function (w) {
            w(k);
          });
    };
    na.reject = function (k) {
      return new na(function (w, O) {
        O(k);
      });
    };
    na.race = function (k) {
      return new na(function (w, O) {
        if (!k || 'undefined' === typeof k.length) return O(new TypeError('Promise.race accepts an array'));
        for (var ya = 0, eb = k.length; ya < eb; ya++) na.resolve(k[ya]).then(w, O);
      });
    };
    na.Ba =
      ('function' === typeof setImmediate &&
        function (k) {
          setImmediate(k);
        }) ||
      function (k) {
        B(k, 0);
      };
    na.cb = function (k) {
      'undefined' !== typeof console && console && console.warn('Possible Unhandled Promise Rejection:', k);
    };
    var H = na,
      Ja = { '!': '%21', '~': '%7E', '*': '%2A', '(': '%28', ')': '%29', "'": '%27', $: '%24', ';': '%3B', ',': '%2C' },
      Xa,
      wb,
      Jb,
      Vb,
      Mb = Db.attachEvent,
      $b = Db.Worker,
      Pc = $b && $b.prototype.addEventListener,
      Xc = [],
      Sd = ['touchstart', 'touchend', 'scroll'],
      Td,
      bd,
      ye = 'abort getAllResponseHeaders getResponseHeader open overrideMimeType send setRequestHeader'.split(' '),
      xe,
      Re,
      Ud,
      Ue,
      xg = ((Ue = {}), (Ue.l = 'Lax'), (Ue.s = 'Strict'), (Ue.n = 'None'), Ue),
      rc = {},
      Kd,
      Ee = !1,
      ge = 32,
      he = Db.Worker,
      qe = Db.Blob,
      Md = Db.URL && Db.URL.createObjectURL,
      pe,
      ze,
      Fe,
      Ge,
      me = !1,
      Vd,
      Hi = [],
      Jf = [],
      df,
      ag,
      lf = {},
      Ld,
      qf = [],
      ef = [],
      rf = [],
      Hg,
      Ch,
      Ig,
      oi = 6e8,
      Bh = [],
      ni = [],
      tj = !1,
      Ae = /([A-Z]+)-([0-9]+)/,
      Xd = [],
      Xg,
      gh,
      ne = !1,
      ng,
      hh = !1,
      ih,
      Ti,
      yg;
    (function (k) {
      var w, O;
      k = k || 0 > (null === (w = navigator.userAgent) || void 0 === w ? void 0 : w.indexOf('RuxitSynthetic'));
      if (!Db.dT_ || !Db.dT_.cfg || 'string' !== typeof Db.dT_.cfg || ('initialized' in Db.dT_ && Db.dT_.initialized))
        null === (O = Db.console) || void 0 === O
          ? void 0
          : O.log('InitConfig not found or agent already initialized! This is an injection issue.'),
          Db.dT_ && (Db.dT_.di = 3);
      else if (k)
        try {
          var ya;
          oa();
          var eb;
          Td = Db.XMLHttpRequest;
          bd = Db.ActiveXObject;
          var xb = null === (eb = Db.XMLHttpRequest) || void 0 === eb ? void 0 : eb.prototype;
          if (xb)
            for (xe = {}, w = 0, O = ye; w < O.length; w++) {
              var yc = O[w];
              void 0 !== xb[yc] && (xe[yc] = xb[yc]);
            }
          Xa = Db.addEventListener;
          wb = Db.removeEventListener;
          Jb = Db.document.addEventListener;
          Vb = Db.document.removeEventListener;
          Fe = Db.setTimeout;
          Ge = Db.setInterval;
          me || ((pe = Db.clearTimeout), (ze = Db.clearInterval));
          var Mc = Da ? Da() : navigator.cookieEnabled,
            Yc =
              1 ===
              Zc(
                V('dtAdkSettings') || (null === (ya = ag) || void 0 === ya ? void 0 : ya.getItem('dtAdkSettings')) || ''
              ).mc;
          Pa();
          if (!(!Mc || Yc ? 0 : 'complete' !== document.readyState || (Db.performance && Db.performance.timing)))
            throw Error('Error during initCode initialization');
          Xh();
          try {
            ag = Db.localStorage;
          } catch (Be) {}
          zc();
          df = Ld();
          Vd = [];
          Jf = [];
          lf = {};
          if (!me) {
            Db.clearTimeout = Ad(pe);
            Db.clearInterval = Ad(ze);
            me = !0;
            try {
              Kd = Db.sessionStorage;
            } catch (Be) {}
          }
          var ud = Math.random(),
            sf = Math.random();
          Ch = 0 !== ud && 0 !== sf && ud !== sf;
          if (-1 !== qa(navigator.userAgent, 'Googlebot')) {
            var Ie = performance.getEntriesByType('navigation')[0];
            ya = 1;
            if (Ie) {
              for (var Af in Ie) {
                var Ve = Ie[Af];
                'number' === typeof Ve && Ve && (ya = 1 === ya ? Ve : ya + Ve);
              }
              var gf = Math.floor(1e4 * ya);
            } else gf = ya;
            Hg = gd(gf);
          } else Ch ? (Hg = Math.random) : (Hg = gd(Ld()));
          Ig = (df % oi) + '_' + W(Ye(0, 1e3) + '');
          var pa;
          Ud =
            ((pa = {}),
            (pa.ade = ''),
            (pa.aew = !0),
            (pa.apn = ''),
            (pa.agentLocation = ''),
            (pa.agentUri = ''),
            (pa.app = ''),
            (pa.async = !1),
            (pa.ase = !1),
            (pa.auto = !1),
            (pa.bp1 = !1),
            (pa.bp2 = !1),
            (pa.bp = 1),
            (pa.bisaoi = !1),
            (pa.bisCmE = ''),
            (pa.bs = !1),
            (pa.buildNumber = 0),
            (pa.csprv = !0),
            (pa.cepl = 16e3),
            (pa.cls = !0),
            (pa.ccNcss = !1),
            (pa.cg = !1),
            (pa.coo = !1),
            (pa.cooO = !1),
            (pa.cssm = '0'),
            (pa.cwt = ''),
            (pa.cwtUrl = '27pd8x1igg'),
            (pa.cors = !1),
            (pa.csu = ''),
            (pa.cuc = ''),
            (pa.cce = !1),
            (pa.cux = !1),
            (pa.dataDtConfig = ''),
            (pa.debugName = ''),
            (pa.dvl = 500),
            (pa.dASXH = !1),
            (pa.disableCookieManager = !1),
            (pa.disableLogging = !1),
            (pa.dmo = !1),
            (pa.doel = !1),
            (pa.dpch = !1),
            (pa.dpvc = !1),
            (pa.disableXhrFailures = !1),
            (pa.domain = ''),
            (pa.domainOverride = ''),
            (pa.domainOriginal = ''),
            (pa.doNotDetect = ''),
            (pa.ds = !0),
            (pa.dsndb = !1),
            (pa.dsa = !1),
            (pa.dsss = !1),
            (pa.dssv = !0),
            (pa.earxa = !0),
            (pa.exp = !1),
            (pa.eni = !0),
            (pa.erjdw = !0),
            (pa.expw = !1),
            (pa.instr = ''),
            (pa.evl = ''),
            (pa.extblacklist = ''),
            (pa.euf = !1),
            (pa.fau = !0),
            (pa.fa = !1),
            (pa.fvdi = !1),
            (pa.featureHash = ''),
            (pa.hvt = 216e5),
            (pa.ffi = !1),
            (pa.imm = !1),
            (pa.ign = ''),
            (pa.iub = ''),
            (pa.iqvn = !1),
            (pa.initializedModules = ''),
            (pa.lastModification = 0),
            (pa.lupr = !0),
            (pa.lab = !1),
            (pa.legacy = !1),
            (pa.lt = !0),
            (pa.mb = ''),
            (pa.md = ''),
            (pa.mdp = ''),
            (pa.mdl = ''),
            (pa.mcepsl = 100),
            (pa.mdn = 5e3),
            (pa.mhl = 4e3),
            (pa.mpl = 1024),
            (pa.mmds = 2e4),
            (pa.msl = 3e4),
            (pa.bismepl = 2e3),
            (pa.mel = 200),
            (pa.mepp = 10),
            (pa.moa = 30),
            (pa.mrt = 3),
            (pa.ntd = !1),
            (pa.ncw = !1),
            (pa.oat = 180),
            (pa.ote = !1),
            (pa.owasp = !1),
            (pa.pcl = 20),
            (pa.pt = !0),
            (pa.perfbv = 1),
            (pa.prfSmpl = 0),
            (pa.pVO = !1),
            (pa.peti = !1),
            (pa.raxeh = !0),
            (pa.rdnt = 0),
            (pa.nosr = !0),
            (pa.reportUrl = 'dynaTraceMonitor'),
            (pa.rid = ''),
            (pa.ridPath = ''),
            (pa.rpid = ''),
            (pa.rcdec = 12096e5),
            (pa.rtl = 0),
            (pa.rtp = 2),
            (pa.rtt = 1e3),
            (pa.rtu = 200),
            (pa.restoreTimeline = !1),
            (pa.rvcl = 24),
            (pa.sl = 100),
            (pa.ssc = !1),
            (pa.svNB = !1),
            (pa.srad = !0),
            (pa.srbbv = 1),
            (pa.srbw = !0),
            (pa.srmr = 100),
            (pa.srms = '1,1,,,'),
            (pa.srsr = 1e5),
            (pa.srtbv = 3),
            (pa.srtd = 1),
            (pa.srtr = 500),
            (pa.srvr = ''),
            (pa.srvi = 0),
            (pa.srwo = !1),
            (pa.srre = ''),
            (pa.srxcss = !0),
            (pa.srxicss = !0),
            (pa.srif = !1),
            (pa.srmrc = !1),
            (pa.srsdom = !1),
            (pa.srcss = !0),
            (pa.srmcrl = 1),
            (pa.srmcrv = 10),
            (pa.ssv = 4),
            (pa.st = 3e3),
            (pa.spc = ''),
            (pa.syntheticConfig = !1),
            (pa.tal = 0),
            (pa.tp = '500,50,3'),
            (pa.tt = 100),
            (pa.tvc = 3e3),
            (pa.exteventsoff = !1),
            (pa.uxdce = !1),
            (pa.uxdcw = 1500),
            (pa.uxrgce = !0),
            (pa.uxrgcm = '100,25,300,3;100,25,300,3'),
            (pa.uam = !1),
            (pa.uana = 'data-dtname,data-dtName'),
            (pa.uanpi = 0),
            (pa.pui = !1),
            (pa.usrvd = !0),
            (pa.vrt = !1),
            (pa.vcfi = !0),
            (pa.vcit = 1e3),
            (pa.vct = 50),
            (pa.vcx = 50),
            (pa.vscl = 0),
            (pa.vncm = 1),
            (pa.xb = ''),
            (pa.chw = ''),
            (pa.xt = 0),
            (pa.xhb = ''),
            pa);
          a: {
            var Hd = Db.dT_.cfg;
            rc = {
              reportUrl: 'dynaTraceMonitor',
              initializedModules: '',
              csu: 'dtagent',
              dataDtConfig: 'string' === typeof Hd ? Hd : '',
            };
            Db.dT_.cfg = rc;
            rc.csu = 'ruxitagentjs';
            var Wc = rc.dataDtConfig;
            Wc && -1 === qa(Wc, '#CONFIGSTRING') && (Cb(Wc, rc), bb('domain'), bb('auto'), bb('app'), Kb(rc));
            var Bf = db('script'),
              se = K(Bf),
              Ne = -1 === qa(rc.dataDtConfig || '', '#CONFIGSTRING') ? rc : null;
            if (0 < se)
              for (gf = 0; gf < se; gf++)
                b: {
                  Ie = void 0;
                  var Qf = Bf[gf];
                  Af = Ne;
                  if (Qf.attributes) {
                    var tf = rc.csu + '_bootstrap.js';
                    Ve = /.*\/jstag\/.*\/.*\/(.*)_bs(_dbg)?.js$/;
                    pa = Af;
                    var Ce = Qf.src,
                      pi = null === Ce || void 0 === Ce ? void 0 : Ce.indexOf(tf),
                      qi = Qf.attributes.getNamedItem('data-dtconfig');
                    if (qi) {
                      Hd = void 0;
                      Wc = Ce;
                      var uj = qi.value;
                      ya = {};
                      rc.legacy = '1';
                      xb = /([a-zA-Z]*)_([a-zA-Z_0-9]*)_([0-9]+)/g;
                      Wc &&
                        ((Hd = xb.exec(Wc)), null === Hd || void 0 === Hd ? 0 : Hd.length) &&
                        ((ya.csu = Hd[1]),
                        (ya.featureHash = Hd[2]),
                        (ya.agentLocation = Wc.substring(0, qa(Wc, Hd[1]) - 1)),
                        (ya.buildNumber = Hd[3]));
                      if (uj) {
                        Cb(uj, ya, !0);
                        var ri = ya.agentUri;
                        !Wc &&
                          ri &&
                          ((Hd = xb.exec(ri)), null === Hd || void 0 === Hd ? 0 : Hd.length) &&
                          (ya.csu = Hd[1]);
                      }
                      Jc(ya);
                      Ie = ya;
                      if (!Af) pa = Ie;
                      else if (!Ie.syntheticConfig) {
                        Ne = Ie;
                        break b;
                      }
                    }
                    Ie || (Ie = rc);
                    if (0 < pi) {
                      var te = pi + tf.length + 5;
                      Ie.app = Ce.length > te ? Ce.substring(te) : 'Default%20Application';
                    } else if (Ce) {
                      var Yg = Ve.exec(Ce);
                      Yg && (Ie.app = Yg[1]);
                    }
                    Ne = pa;
                  } else Ne = Af;
                }
            if (Ne) for (var Yh in Ne) Object.prototype.hasOwnProperty.call(Ne, Yh) && ((Bf = Yh), (rc[Bf] = Ne[Bf]));
            var Jg = zb();
            try {
              var Rf = (Ne = ag) && Ne.getItem(Jg);
              if (Rf) {
                var Zg = Ga(Rf),
                  uf = Cb(Zg.config || ''),
                  Oe = rc.lastModification || '0',
                  jh = W((uf.lastModification || Zg.lastModification || '0').substring(0, 13)),
                  Ui = 'string' === typeof Oe ? W(Oe.substring(0, 13)) : Oe;
                if (!Oe || jh >= Ui)
                  if (
                    ((uf.csu = Zg.name || N('csu')),
                    (uf.featureHash = Zg.featureHash || N('featureHash')),
                    uf.agentUri && Kb(uf),
                    Ob(uf, !0),
                    Eb(uf),
                    kb(uf),
                    jh > (rc.lastModification || 0))
                  ) {
                    var hf = Ma('auto'),
                      Vi = Ma('legacy');
                    rc = Ea(uf);
                    rc.auto = hf ? '1' : '0';
                    rc.legacy = Vi ? '1' : '0';
                  }
              }
            } catch (Be) {}
            Ob(rc);
            try {
              var Wi = rc.ign;
              if (Wi && new RegExp(Wi).test(Db.location.href)) {
                document.dT_ = Db.dT_ = void 0;
                var Je = !1;
                break a;
              }
            } catch (Be) {}
            if (fc()) {
              var Dh = navigator.userAgent,
                Id = Dh.lastIndexOf('RuxitSynthetic');
              if (-1 === Id) var oc = {};
              else {
                var Fd = Dh.substring(Id + 14);
                if (-1 === qa(Fd, ' c')) oc = {};
                else {
                  Jg = {};
                  Rf = 0;
                  for (var cg = Fd.split(' '); Rf < cg.length; Rf++) {
                    var vj = cg[Rf];
                    if ('c' === vj.charAt(0)) {
                      var Kg = vj.substring(1),
                        Eh = Kg.indexOf('='),
                        wj = Kg.substring(0, Eh),
                        tc = Kg.substring(Eh + 1);
                      wj && tc && (Jg[wj] = tc);
                    }
                  }
                  oc = Jg;
                }
              }
              Fd = void 0;
              for (Fd in oc) Object.prototype.hasOwnProperty.call(oc, Fd) && oc[Fd] && (rc[Fd] = oc[Fd]);
              Ea(rc);
            }
            Je = !0;
          }
          if (!Je) throw Error('Error during config initialization');
          nd();
          try {
            ih = Db.dT_.disabled || !!ma('dtDisabled');
          } catch (Be) {}
          var lc;
          if (!(lc = N('agentLocation')))
            a: {
              var mf = N('agentUri');
              if (mf || document.currentScript) {
                var Pe = mf || document.currentScript.src;
                if (Pe) {
                  Je = Pe;
                  var vf = -1 === qa(Je, '_bs') && -1 === qa(Je, '_bootstrap') && -1 === qa(Je, '_complete') ? 1 : 2,
                    Lg = Pe.lastIndexOf('/');
                  for (Je = 0; Je < vf && -1 !== Lg; Je++) (Pe = Pe.substring(0, Lg)), (Lg = Pe.lastIndexOf('/'));
                  lc = Pe;
                  break a;
                }
              }
              var og = location.pathname;
              lc = og.substring(0, og.lastIndexOf('/'));
            }
          Ti = lc;
          yg = N('csu') || 'ruxitagentjs';
          'true' === V('dtUseDebugAgent') && 0 > yg.indexOf('dbg') && (yg = N('debugName') || yg + 'dbg');
          if (!Ma('auto') && !Ma('legacy') && !ih) {
            var Sf = N('agentUri') || zf(N('featureHash')),
              Cf;
            if (!(Cf = Ma('async') || 'complete' === document.readyState)) {
              var Zh = Db.navigator.userAgent,
                $g = Zh.indexOf('MSIE ');
              Cf = 0 < $g ? 9 >= parseInt(Zh.substring($g + 5, Zh.indexOf('.', $g)), 10) : !1;
            }
            if (Cf) Pd(Sf, Ma('async'), void 0, void 0, 'dtjsagent');
            else {
              var dg = ''.concat('dtjsagent', 'dw');
              document.write('<script id="'.concat(dg, '" type="text/javascript" src="').concat(Sf, '">\x3c/script>'));
              document.getElementById(dg) || Pd(Sf, Ma('async'), void 0, void 0, 'dtjsagent');
            }
          }
          V('dtCookie') && ha('cooO', !0);
          bf();
          ha('pVO', !!qd('dt-pVO'));
          od(ve);
          Xg = 18e5;
          gh = ab('hvt') || 216e5;
          A(ce, [1]);
          ni = [];
          Bh = 'dtCookie dtLatC rxvt dtAdk dtAdkSettings dtPC'.split(' ');
          if (Ma('cg'))
            try {
              Tc(
                Object.getOwnPropertyDescriptor(Document.prototype, 'cookie') ||
                  Object.getOwnPropertyDescriptor(HTMLDocument.prototype, 'cookie')
              );
            } catch (Be) {}
        } catch (Be) {
          try {
            delete Db.dT_;
          } catch (de) {
            Db.dT_ = void 0;
          }
          Pa() && Db.console.log('JsAgent initCode initialization failed!');
        }
    })(!1);
  })();
})();
