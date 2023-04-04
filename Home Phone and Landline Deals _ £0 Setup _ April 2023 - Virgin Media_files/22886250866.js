/*! For license information please see client.min.js.LICENSE.txt */
(function(){var __webpack_modules__={8741:function(n,t,e){var i;!function(r,o){"use strict";var a="function",u="undefined",c="object",s="string",f="model",l="name",d="type",v="vendor",h="version",p="architecture",g="console",m="mobile",_="tablet",w="smarttv",y="wearable",b="embedded",E="Amazon",I="Apple",A="ASUS",T="BlackBerry",S="Firefox",k="Google",R="Huawei",N="LG",D="Microsoft",C="Motorola",O="Opera",x="Samsung",P="Sharp",M="Sony",L="Xiaomi",V="Zebra",F="Facebook",U=function(n){for(var t={},e=0;e<n.length;e++)t[n[e].toUpperCase()]=n[e];return t},z=function(n,t){return typeof n===s&&-1!==j(t).indexOf(j(n))},j=function(n){return n.toLowerCase()},G=function(n,t){if(typeof n===s)return n=n.replace(/^\s\s*/,""),typeof t===u?n:n.substring(0,350)},B=function(n,t){for(var e,i,r,u,s,f,l=0;l<t.length&&!s;){var d=t[l],v=t[l+1];for(e=i=0;e<d.length&&!s&&d[e];)if(s=d[e++].exec(n))for(r=0;r<v.length;r++)f=s[++i],typeof(u=v[r])===c&&u.length>0?2===u.length?typeof u[1]==a?this[u[0]]=u[1].call(this,f):this[u[0]]=u[1]:3===u.length?typeof u[1]!==a||u[1].exec&&u[1].test?this[u[0]]=f?f.replace(u[1],u[2]):o:this[u[0]]=f?u[1].call(this,f,u[2]):o:4===u.length&&(this[u[0]]=f?u[3].call(this,f.replace(u[1],u[2])):o):this[u]=f||o;l+=2}},q=function(n,t){for(var e in t)if(typeof t[e]===c&&t[e].length>0){for(var i=0;i<t[e].length;i++)if(z(t[e][i],n))return"?"===e?o:e}else if(z(t[e],n))return"?"===e?o:e;return n},H={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},Y={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[h,[l,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[h,[l,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[l,h],[/opios[\/ ]+([\w\.]+)/i],[h,[l,"Opera Mini"]],[/\bopr\/([\w\.]+)/i],[h,[l,O]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[l,h],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[h,[l,"UCBrowser"]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[h,[l,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[h,[l,"WeChat"]],[/konqueror\/([\w\.]+)/i],[h,[l,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[h,[l,"IE"]],[/yabrowser\/([\w\.]+)/i],[h,[l,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[l,/(.+)/,"$1 Secure Browser"],h],[/\bfocus\/([\w\.]+)/i],[h,[l,"Firefox Focus"]],[/\bopt\/([\w\.]+)/i],[h,[l,"Opera Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[h,[l,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[h,[l,"Dolphin"]],[/coast\/([\w\.]+)/i],[h,[l,"Opera Coast"]],[/miuibrowser\/([\w\.]+)/i],[h,[l,"MIUI Browser"]],[/fxios\/([-\w\.]+)/i],[h,[l,S]],[/\bqihu|(qi?ho?o?|360)browser/i],[[l,"360 Browser"]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[l,/(.+)/,"$1 Browser"],h],[/(comodo_dragon)\/([\w\.]+)/i],[[l,/_/g," "],h],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[l,h],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[l],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[l,F],h],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[l,h],[/\bgsa\/([\w\.]+) .*safari\//i],[h,[l,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[h,[l,"Chrome Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[l,"Chrome WebView"],h],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[h,[l,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[l,h],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[h,[l,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[h,l],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[l,[h,q,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[l,h],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[l,"Netscape"],h],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[h,[l,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[l,h],[/(cobalt)\/([\w\.]+)/i],[l,[h,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[p,"amd64"]],[/(ia32(?=;))/i],[[p,j]],[/((?:i[346]|x)86)[;\)]/i],[[p,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[p,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[p,"armhf"]],[/windows (ce|mobile); ppc;/i],[[p,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[p,/ower/,"",j]],[/(sun4\w)[;\)]/i],[[p,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[p,j]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[f,[v,x],[d,_]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[f,[v,x],[d,m]],[/\((ip(?:hone|od)[\w ]*);/i],[f,[v,I],[d,m]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[f,[v,I],[d,_]],[/(macintosh);/i],[f,[v,I]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[f,[v,P],[d,m]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[f,[v,R],[d,_]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[f,[v,R],[d,m]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[f,/_/g," "],[v,L],[d,m]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[f,/_/g," "],[v,L],[d,_]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[f,[v,"OPPO"],[d,m]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[f,[v,"Vivo"],[d,m]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[f,[v,"Realme"],[d,m]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[f,[v,C],[d,m]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[f,[v,C],[d,_]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[f,[v,N],[d,_]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[f,[v,N],[d,m]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[f,[v,"Lenovo"],[d,_]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[f,/_/g," "],[v,"Nokia"],[d,m]],[/(pixel c)\b/i],[f,[v,k],[d,_]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[f,[v,k],[d,m]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[f,[v,M],[d,m]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[f,"Xperia Tablet"],[v,M],[d,_]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[f,[v,"OnePlus"],[d,m]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[f,[v,E],[d,_]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[f,/(.+)/g,"Fire Phone $1"],[v,E],[d,m]],[/(playbook);[-\w\),; ]+(rim)/i],[f,v,[d,_]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[f,[v,T],[d,m]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[f,[v,A],[d,_]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[f,[v,A],[d,m]],[/(nexus 9)/i],[f,[v,"HTC"],[d,_]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[v,[f,/_/g," "],[d,m]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[f,[v,"Acer"],[d,_]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[f,[v,"Meizu"],[d,m]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[v,f,[d,m]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[v,f,[d,_]],[/(surface duo)/i],[f,[v,D],[d,_]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[f,[v,"Fairphone"],[d,m]],[/(u304aa)/i],[f,[v,"AT&T"],[d,m]],[/\bsie-(\w*)/i],[f,[v,"Siemens"],[d,m]],[/\b(rct\w+) b/i],[f,[v,"RCA"],[d,_]],[/\b(venue[\d ]{2,7}) b/i],[f,[v,"Dell"],[d,_]],[/\b(q(?:mv|ta)\w+) b/i],[f,[v,"Verizon"],[d,_]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[f,[v,"Barnes & Noble"],[d,_]],[/\b(tm\d{3}\w+) b/i],[f,[v,"NuVision"],[d,_]],[/\b(k88) b/i],[f,[v,"ZTE"],[d,_]],[/\b(nx\d{3}j) b/i],[f,[v,"ZTE"],[d,m]],[/\b(gen\d{3}) b.+49h/i],[f,[v,"Swiss"],[d,m]],[/\b(zur\d{3}) b/i],[f,[v,"Swiss"],[d,_]],[/\b((zeki)?tb.*\b) b/i],[f,[v,"Zeki"],[d,_]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[v,"Dragon Touch"],f,[d,_]],[/\b(ns-?\w{0,9}) b/i],[f,[v,"Insignia"],[d,_]],[/\b((nxa|next)-?\w{0,9}) b/i],[f,[v,"NextBook"],[d,_]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[v,"Voice"],f,[d,m]],[/\b(lvtel\-)?(v1[12]) b/i],[[v,"LvTel"],f,[d,m]],[/\b(ph-1) /i],[f,[v,"Essential"],[d,m]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[f,[v,"Envizen"],[d,_]],[/\b(trio[-\w\. ]+) b/i],[f,[v,"MachSpeed"],[d,_]],[/\btu_(1491) b/i],[f,[v,"Rotor"],[d,_]],[/(shield[\w ]+) b/i],[f,[v,"Nvidia"],[d,_]],[/(sprint) (\w+)/i],[v,f,[d,m]],[/(kin\.[onetw]{3})/i],[[f,/\./g," "],[v,D],[d,m]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[f,[v,V],[d,_]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[f,[v,V],[d,m]],[/smart-tv.+(samsung)/i],[v,[d,w]],[/hbbtv.+maple;(\d+)/i],[[f,/^/,"SmartTV"],[v,x],[d,w]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[v,N],[d,w]],[/(apple) ?tv/i],[v,[f,"Apple TV"],[d,w]],[/crkey/i],[[f,"Chromecast"],[v,k],[d,w]],[/droid.+aft(\w)( bui|\))/i],[f,[v,E],[d,w]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[f,[v,P],[d,w]],[/(bravia[\w ]+)( bui|\))/i],[f,[v,M],[d,w]],[/(mitv-\w{5}) bui/i],[f,[v,L],[d,w]],[/Hbbtv.*(technisat) (.*);/i],[v,f,[d,w]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[v,G],[f,G],[d,w]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[d,w]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[v,f,[d,g]],[/droid.+; (shield) bui/i],[f,[v,"Nvidia"],[d,g]],[/(playstation [345portablevi]+)/i],[f,[v,M],[d,g]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[f,[v,D],[d,g]],[/((pebble))app/i],[v,f,[d,y]],[/droid.+; (glass) \d/i],[f,[v,k],[d,y]],[/droid.+; (wt63?0{2,3})\)/i],[f,[v,V],[d,y]],[/(quest( 2| pro)?)/i],[f,[v,F],[d,y]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[v,[d,b]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[f,[d,m]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[f,[d,_]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[d,_]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[d,m]],[/(android[-\w\. ]{0,9});.+buil/i],[f,[v,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[h,[l,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[h,[l,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[l,h],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[h,l]],os:[[/microsoft (windows) (vista|xp)/i],[l,h],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[l,[h,q,H]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[l,"Windows"],[h,q,H]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[h,/_/g,"."],[l,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[l,"Mac OS"],[h,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[h,l],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[l,h],[/\(bb(10);/i],[h,[l,T]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[h,[l,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[h,[l,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[h,[l,"webOS"]],[/crkey\/([\d\.]+)/i],[h,[l,"Chromecast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[l,"Chromium OS"],h],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[l,h],[/(sunos) ?([\w\.\d]*)/i],[[l,"Solaris"],h],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[l,h]]},K=function(n,t){if(typeof n===c&&(t=n,n=o),!(this instanceof K))return new K(n,t).getResult();var e=n||(typeof r!==u&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:""),i=typeof r!==u&&r.navigator&&r.navigator.userAgentData?r.navigator.userAgentData:o,a=t?function(n,t){var e={};for(var i in n)t[i]&&t[i].length%2==0?e[i]=t[i].concat(n[i]):e[i]=n[i];return e}(Y,t):Y;return this.getBrowser=function(){var n,t={};return t.name=o,t.version=o,B.call(t,e,a.browser),t.major=typeof(n=t.version)===s?n.replace(/[^\d\.]/g,"").split(".")[0]:o,t},this.getCPU=function(){var n={};return n.architecture=o,B.call(n,e,a.cpu),n},this.getDevice=function(){var n={};return n.vendor=o,n.model=o,n.type=o,B.call(n,e,a.device),!n.type&&i&&i.mobile&&(n.type=m),n},this.getEngine=function(){var n={};return n.name=o,n.version=o,B.call(n,e,a.engine),n},this.getOS=function(){var n={};return n.name=o,n.version=o,B.call(n,e,a.os),!n.name&&i&&"Unknown"!=i.platform&&(n.name=i.platform.replace(/chrome/i,"Chromium").replace(/mac/i,"Mac ")),n},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return e},this.setUA=function(n){return e=typeof n===s&&n.length>350?G(n,350):n,this},this.setUA(e),this};K.VERSION="0.7.33",K.BROWSER=U([l,h,"major"]),K.CPU=U([p]),K.DEVICE=U([f,v,d,g,m,w,_,y,b]),K.ENGINE=K.OS=U([l,h]),typeof t!==u?(n.exports&&(t=n.exports=K),t.UAParser=K):e.amdO?(i=function(){return K}.call(t,e,t,n))===o||(n.exports=i):typeof r!==u&&(r.UAParser=K)}("object"==typeof window?window:this)},8168:function(n,t,e){var i=e(3737)(),r=e(3363);n.exports=function(n,t){function e(t){if(!(this instanceof e))return new e(t);try{throw new Error(t)}catch(o){o.name=n,this.stack=o.stack}i&&this.stack&&(this.stack=r(this.stack,n,t)),this.message=t||"",this.name=n}return e.prototype=new(t||Error),e.prototype.constructor=e,e.prototype.inspect=function(){return this.message?"["+n+": "+this.message+"]":"["+n+"]"},e.prototype.name=n,e}},3363:function(n){"use strict";n.exports=function(n,t,e){var i=t;return e&&(i+=": "+e),n=i+n.slice(n.indexOf("\n"))}},3737:function(n){"use strict";n.exports=function(){var n=new Error("yep");return!!n.stack&&"Error: yep\n"===n.stack.substr(0,11)}},7704:function(n,t,e){n.exports=function(){"use strict";function n(n){return"function"==typeof n||"object"==typeof n&&null!==n}function t(n){return"function"==typeof n}undefined;var i=Array.isArray?Array.isArray:function(n){return"[object Array]"===Object.prototype.toString.call(n)},r=0,o=undefined,a=undefined,u=function(n,t){y[r]=n,y[r+1]=t,2===(r+=2)&&(a?a(b):I())};function c(n){a=n}function s(n){u=n}var f="undefined"!=typeof window?window:undefined,l=f||{},d=l.MutationObserver||l.WebKitMutationObserver,v="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),h="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function p(){return function(){return process.nextTick(b)}}function g(){return void 0!==o?function(){o(b)}:w()}function m(){var n=0,t=new d(b),e=document.createTextNode("");return t.observe(e,{characterData:!0}),function(){e.data=n=++n%2}}function _(){var n=new MessageChannel;return n.port1.onmessage=b,function(){return n.port2.postMessage(0)}}function w(){var n=setTimeout;return function(){return n(b,1)}}var y=new Array(1e3);function b(){for(var n=0;n<r;n+=2)(0,y[n])(y[n+1]),y[n]=undefined,y[n+1]=undefined;r=0}function E(){try{undefined;var n=e(1152);return o=n.runOnLoop||n.runOnContext,g()}catch(t){return w()}}var I=undefined;function A(n,t){var e=arguments,i=this,r=new this.constructor(k);r[S]===undefined&&Q(r);var o,a=i._state;return a?(o=e[a-1],u((function(){return $(a,r,o,i._result)}))):B(i,r,n,t),r}function T(n){var t=this;if(n&&"object"==typeof n&&n.constructor===t)return n;var e=new t(k);return U(e,n),e}I=v?p():d?m():h?_():f===undefined?E():w();var S=Math.random().toString(36).substring(16);function k(){}var R=void 0,N=1,D=2,C=new H;function O(){return new TypeError("You cannot resolve a promise with itself")}function x(){return new TypeError("A promises callback cannot return that same promise.")}function P(n){try{return n.then}catch(t){return C.error=t,C}}function M(n,t,e,i){try{n.call(t,e,i)}catch(r){return r}}function L(n,t,e){u((function(n){var i=!1,r=M(e,t,(function(e){i||(i=!0,t!==e?U(n,e):j(n,e))}),(function(t){i||(i=!0,G(n,t))}),"Settle: "+(n._label||" unknown promise"));!i&&r&&(i=!0,G(n,r))}),n)}function V(n,t){t._state===N?j(n,t._result):t._state===D?G(n,t._result):B(t,undefined,(function(t){return U(n,t)}),(function(t){return G(n,t)}))}function F(n,e,i){e.constructor===n.constructor&&i===A&&e.constructor.resolve===T?V(n,e):i===C?(G(n,C.error),C.error=null):i===undefined?j(n,e):t(i)?L(n,e,i):j(n,e)}function U(t,e){t===e?G(t,O()):n(e)?F(t,e,P(e)):j(t,e)}function z(n){n._onerror&&n._onerror(n._result),q(n)}function j(n,t){n._state===R&&(n._result=t,n._state=N,0!==n._subscribers.length&&u(q,n))}function G(n,t){n._state===R&&(n._state=D,n._result=t,u(z,n))}function B(n,t,e,i){var r=n._subscribers,o=r.length;n._onerror=null,r[o]=t,r[o+N]=e,r[o+D]=i,0===o&&n._state&&u(q,n)}function q(n){var t=n._subscribers,e=n._state;if(0!==t.length){for(var i=undefined,r=undefined,o=n._result,a=0;a<t.length;a+=3)i=t[a],r=t[a+e],i?$(e,i,r,o):r(o);n._subscribers.length=0}}function H(){this.error=null}var Y=new H;function K(n,t){try{return n(t)}catch(e){return Y.error=e,Y}}function $(n,e,i,r){var o=t(i),a=undefined,u=undefined,c=undefined,s=undefined;if(o){if((a=K(i,r))===Y?(s=!0,u=a.error,a.error=null):c=!0,e===a)return void G(e,x())}else a=r,c=!0;e._state!==R||(o&&c?U(e,a):s?G(e,u):n===N?j(e,a):n===D&&G(e,a))}function W(n,t){try{t((function(t){U(n,t)}),(function(t){G(n,t)}))}catch(e){G(n,e)}}var X=0;function J(){return X++}function Q(n){n[S]=X++,n._state=undefined,n._result=undefined,n._subscribers=[]}function Z(n,t){this._instanceConstructor=n,this.promise=new n(k),this.promise[S]||Q(this.promise),i(t)?(this._input=t,this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?j(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&j(this.promise,this._result))):G(this.promise,nn())}function nn(){return new Error("Array Methods must be provided an Array")}function tn(n){return new Z(this,n).promise}function en(n){var t=this;return i(n)?new t((function(e,i){for(var r=n.length,o=0;o<r;o++)t.resolve(n[o]).then(e,i)})):new t((function(n,t){return t(new TypeError("You must pass an array to race."))}))}function rn(n){var t=new this(k);return G(t,n),t}function on(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function an(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function un(n){this[S]=J(),this._result=this._state=undefined,this._subscribers=[],k!==n&&("function"!=typeof n&&on(),this instanceof un?W(this,n):an())}function cn(){var n=undefined;if("undefined"!=typeof e.g)n=e.g;else if("undefined"!=typeof self)n=self;else try{n=Function("return this")()}catch(r){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=n.Promise;if(t){var i=null;try{i=Object.prototype.toString.call(t.resolve())}catch(r){}if("[object Promise]"===i&&!t.cast)return}n.Promise=un}return Z.prototype._enumerate=function(){for(var n=this.length,t=this._input,e=0;this._state===R&&e<n;e++)this._eachEntry(t[e],e)},Z.prototype._eachEntry=function(n,t){var e=this._instanceConstructor,i=e.resolve;if(i===T){var r=P(n);if(r===A&&n._state!==R)this._settledAt(n._state,t,n._result);else if("function"!=typeof r)this._remaining--,this._result[t]=n;else if(e===un){var o=new e(k);F(o,n,r),this._willSettleAt(o,t)}else this._willSettleAt(new e((function(t){return t(n)})),t)}else this._willSettleAt(i(n),t)},Z.prototype._settledAt=function(n,t,e){var i=this.promise;i._state===R&&(this._remaining--,n===D?G(i,e):this._result[t]=e),0===this._remaining&&j(i,this._result)},Z.prototype._willSettleAt=function(n,t){var e=this;B(n,undefined,(function(n){return e._settledAt(N,t,n)}),(function(n){return e._settledAt(D,t,n)}))},un.all=tn,un.race=en,un.resolve=T,un.reject=rn,un._setScheduler=c,un._setAsap=s,un._asap=u,un.prototype={constructor:un,then:A,"catch":function(n){return this.then(null,n)}},un.polyfill=cn,un.Promise=un,un}()},1837:function(n){"use strict";n.exports=function(n){var t,e={};if(!(n instanceof Object)||Array.isArray(n))throw new Error("keyMirror(...): Argument must be an object.");for(t in n)n.hasOwnProperty(t)&&(e[t]=t);return e}},4281:function(n){"use strict";n.exports=function(n,t,e,i){Object.defineProperty(n,t,{get:function(){var n=e.call(this);return Object.defineProperty(this,t,{value:n,enumerable:!!i,writable:!0}),n},set:function(n){return Object.defineProperty(this,t,{value:n,enumerable:!!i,writable:!0}),n},enumerable:!!i,configurable:!0})}},4647:function(n){"use strict";var t=Element.prototype,e=t.matches||t.matchesSelector||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector;n.exports=function(n,t){if(e)return e.call(n,t);for(var i=n.parentNode.querySelectorAll(t),r=0;r<i.length;r++)if(i[r]==n)return!0;return!1}},9457:function(n){!function(){function t(n,t){var e,i,r,o,a,u,c,s;for(e=3&n.length,i=n.length-e,r=t,a=3432918353,u=461845907,s=0;s<i;)c=255&n.charCodeAt(s)|(255&n.charCodeAt(++s))<<8|(255&n.charCodeAt(++s))<<16|(255&n.charCodeAt(++s))<<24,++s,r=27492+(65535&(o=5*(65535&(r=(r^=c=(65535&(c=(c=(65535&c)*a+(((c>>>16)*a&65535)<<16)&4294967295)<<15|c>>>17))*u+(((c>>>16)*u&65535)<<16)&4294967295)<<13|r>>>19))+((5*(r>>>16)&65535)<<16)&4294967295))+((58964+(o>>>16)&65535)<<16);switch(c=0,e){case 3:c^=(255&n.charCodeAt(s+2))<<16;case 2:c^=(255&n.charCodeAt(s+1))<<8;case 1:r^=c=(65535&(c=(c=(65535&(c^=255&n.charCodeAt(s)))*a+(((c>>>16)*a&65535)<<16)&4294967295)<<15|c>>>17))*u+(((c>>>16)*u&65535)<<16)&4294967295}return r^=n.length,r=2246822507*(65535&(r^=r>>>16))+((2246822507*(r>>>16)&65535)<<16)&4294967295,r=3266489909*(65535&(r^=r>>>13))+((3266489909*(r>>>16)&65535)<<16)&4294967295,(r^=r>>>16)>>>0}var e=t;e.v2=function(n,t){for(var e,i=n.length,r=t^i,o=0;i>=4;)e=1540483477*(65535&(e=255&n.charCodeAt(o)|(255&n.charCodeAt(++o))<<8|(255&n.charCodeAt(++o))<<16|(255&n.charCodeAt(++o))<<24))+((1540483477*(e>>>16)&65535)<<16),r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16)^(e=1540483477*(65535&(e^=e>>>24))+((1540483477*(e>>>16)&65535)<<16)),i-=4,++o;switch(i){case 3:r^=(255&n.charCodeAt(o+2))<<16;case 2:r^=(255&n.charCodeAt(o+1))<<8;case 1:r=1540483477*(65535&(r^=255&n.charCodeAt(o)))+((1540483477*(r>>>16)&65535)<<16)}return r=1540483477*(65535&(r^=r>>>13))+((1540483477*(r>>>16)&65535)<<16),(r^=r>>>15)>>>0},e.v3=t,n.exports=e}()},6617:function(n,t,e){n=e.nmd(n),function(){var i,r="Expected a function",o="__lodash_hash_undefined__",a=9007199254740991,u="[object Arguments]",c="[object Array]",s="[object Boolean]",f="[object Date]",l="[object Error]",d="[object Function]",v="[object GeneratorFunction]",h="[object Map]",p="[object Number]",g="[object Object]",m="[object RegExp]",_="[object Set]",w="[object String]",y="[object Symbol]",b="[object WeakMap]",E="[object ArrayBuffer]",I="[object Float32Array]",A="[object Float64Array]",T="[object Int8Array]",S="[object Int16Array]",k="[object Int32Array]",R="[object Uint8Array]",N="[object Uint8ClampedArray]",D="[object Uint16Array]",C="[object Uint32Array]",O=/[&<>"'`]/g,x=RegExp(O.source),P=/\w*$/,M=/^\[object .+?Constructor\]$/,L=/^(?:0|[1-9]\d*)$/,V={};V[I]=V[A]=V[T]=V[S]=V[k]=V[R]=V[N]=V[D]=V[C]=!0,V[u]=V[c]=V[E]=V[s]=V[f]=V[l]=V[d]=V[h]=V[p]=V[g]=V[m]=V[_]=V[w]=V[b]=!1;var F={};F[u]=F[c]=F[E]=F[s]=F[f]=F[I]=F[A]=F[T]=F[S]=F[k]=F[h]=F[p]=F[g]=F[m]=F[_]=F[w]=F[y]=F[R]=F[N]=F[D]=F[C]=!0,F[l]=F[d]=F[b]=!1;var U={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},z={"function":!0,object:!0},j=z[typeof t]&&t&&!t.nodeType?t:i,G=z.object&&n&&!n.nodeType?n:i,B=G&&G.exports===j?j:i,q=on(j&&G&&"object"==typeof e.g&&e.g),H=on(z[typeof self]&&self),Y=on(z[typeof window]&&window),K=on(z[typeof this]&&this),$=q||Y!==(K&&K.window)&&Y||H||K||Function("return this")();function W(n,t){return n.set(t[0],t[1]),n}function X(n,t){return n.add(t),n}function J(n,t){return nn(It(n),Ae)}function Q(n,t){return!!n.length&&en(n,t,0)>-1}function Z(n,t,e){for(var i=-1,r=n.length;++i<r;)if(e(t,n[i]))return!0;return!1}function nn(n,t){for(var e=-1,i=t.length,r=n.length;++e<i;)n[r+e]=t[e];return n}function tn(n,t,e){for(var r=-1,o=n.length;++r<o;){var a=n[r],u=t(a);if(null!=u&&(c===i?u==u:e(u,c)))var c=u,s=a}return s}function en(n,t,e){if(t!=t)return function(n,t,e){var i=n.length,r=t+(e?0:-1);for(;e?r--:++r<i;){var o=n[r];if(o!=o)return r}return-1}(n,e);for(var i=e-1,r=n.length;++i<r;)if(n[i]===t)return i;return-1}function rn(n,t,e,i,r){return r(n,(function(n,r,o){e=i?(i=!1,n):t(e,n,r,o)})),e}function on(n){return n&&n.Object===Object?n:null}function an(n){return U[n]}function un(n){var t=!1;if(null!=n&&"function"!=typeof n.toString)try{t=!!(n+"")}catch(e){}return t}function cn(n,t){return n="number"==typeof n||L.test(n)?+n:-1,t=null==t?a:t,n>-1&&n%1==0&&n<t}var sn=Array.prototype,fn=Object.prototype,ln=Function.prototype.toString,dn=fn.hasOwnProperty,vn=0,hn=ln.call(Object),pn=fn.toString,gn=$._,mn=RegExp("^"+ln.call(dn).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),_n=$.Reflect,wn=$.Symbol,yn=$.Uint8Array,bn=_n?_n.enumerate:i,En=Object.getPrototypeOf,In=Object.getOwnPropertySymbols,An=Object.create,Tn=fn.propertyIsEnumerable,Sn=sn.splice,kn=$.isFinite,Rn=Object.keys,Nn=Math.max,Dn=Ot($,"Map"),Cn=Ot($,"Set"),On=Ot($,"WeakMap"),xn=Ot(Object,"create"),Pn=Dn?ln.call(Dn):"",Mn=Cn?ln.call(Cn):"",Ln=On?ln.call(On):"",Vn=wn?wn.prototype:i,Fn=Vn?Vn.valueOf:i;function Un(n){if(ue(n)&&!Zt(n)){if(n instanceof zn)return n;if(dn.call(n,"__wrapped__"))return function(n){var t=new zn(n.u,n.l);return t.m=It(n.m),t}(n)}return new zn(n)}function zn(n,t){this.u=n,this.m=[],this.l=!!t}function jn(){}function Gn(n,t){return xn?n[t]!==i:dn.call(n,t)}function Bn(n){var t=-1,e=n?n.length:0;for(this.clear();++t<e;){var i=n[t];this.set(i[0],i[1])}}function qn(n){var t=-1,e=n?n.length:0;for(this.I=new Bn;++t<e;)this.push(n[t])}function Hn(n,t){var e=n.I;if(Lt(t)){var i=e.I;return("string"==typeof t?i.string:i.hash)[t]===o}return e.has(t)}function Yn(n){var t=-1,e=n?n.length:0;for(this.clear();++t<e;){var i=n[t];this.set(i[0],i[1])}}function Kn(n,t){var e=Xn(n,t);return!(e<0)&&(e==n.length-1?n.pop():Sn.call(n,e,1),!0)}function $n(n,t){var e=Xn(n,t);return e<0?i:n[e][1]}function Wn(n,t){return Xn(n,t)>-1}function Xn(n,t){for(var e=n.length;e--;)if(Xt(n[e][0],t))return e;return-1}function Jn(n,t,e){var i=Xn(n,t);i<0?n.push([t,e]):n[i][1]=e}function Qn(n,t,e,r){return n===i||Xt(n,fn[e])&&!dn.call(r,e)?t:n}function Zn(n,t,e){(e!==i&&!Xt(n[t],e)||"number"==typeof t&&e===i&&!(t in n))&&(n[t]=e)}function nt(n,t,e){var r=n[t];dn.call(n,t)&&Xt(r,e)&&(e!==i||t in n)||(n[t]=e)}function tt(n){return"function"==typeof n?n:Te}function et(n,t,e,r,o,a,c){var l;if(r&&(l=a?r(n,o,a,c):r(n)),l!==i)return l;if(!ae(n))return n;var b=Zt(n);if(b){if(l=function(n){var t=n.length,e=n.constructor(t);t&&"string"==typeof n[0]&&dn.call(n,"index")&&(e.index=n.index,e.input=n.input);return e}(n),!t)return It(n)}else{var O=Pt(n),x=O==d||O==v;if(ie(n))return function(n,t){if(t)return n.slice();var e=new n.constructor(n.length);return n.copy(e),e}(n,t);if(O==g||O==u||x&&!a){if(un(n))return a?n:{};if(l=function(n){return"function"!=typeof n.constructor||Vt(n)?{}:it(En(n))}(x?{}:n),!t)return l=function(n,t){return n&&St(t,we(t),n)}(l,n),e?Rt(n,l):l}else{if(!F[O])return a?n:{};l=function(n,t,e){var i=n.constructor;switch(t){case E:return Tt(n);case s:case f:return new i(+n);case I:case A:case T:case S:case k:case R:case N:case D:case C:return function(n,t){var e=t?Tt(n.buffer):n.buffer;return new n.constructor(e,n.byteOffset,n.length)}(n,e);case h:return function(n){return Bt(function(n){var t=-1,e=Array(n.size);return n.forEach((function(n,i){e[++t]=[i,n]})),e}(n),W,new n.constructor)}(n);case p:case w:return new i(n);case m:return function(n){var t=new n.constructor(n.source,P.exec(n));return t.lastIndex=n.lastIndex,t}(n);case _:return Bt(function(n){var t=-1,e=Array(n.size);return n.forEach((function(n){e[++t]=n})),e}(o=n),X,new o.constructor);case y:return r=n,Fn?Object(Fn.call(r)):{}}var r;var o}(n,O,t)}}c||(c=new Yn);var M=c.get(n);return M||(c.set(n,l),(b?ut:lt)(n,(function(i,o){nt(l,o,et(i,t,e,r,o,n,c))})),e&&!b?Rt(n,l):l)}function it(n){return ae(n)?An(n):{}}function rt(n,t,e){if("function"!=typeof n)throw new TypeError(r);return setTimeout((function(){n.apply(i,e)}),t)}var ot,at,ut=(ot=lt,function(n,t){if(null==n)return n;if(!ne(n))return ot(n,t);for(var e=n.length,i=at?e:-1,r=Object(n);(at?i--:++i<e)&&!1!==t(r[i],i,r););return n});function ct(n,t){var e=[];return ut(n,(function(n,i,r){t(n,i,r)&&e.push(n)})),e}function st(n,t,e,i){i||(i=[]);for(var r=-1,o=n.length;++r<o;){var a=n[r];t>0&&te(a)&&(e||Zt(a)||Qt(a))?t>1?st(a,t-1,e,i):nn(i,a):e||(i[i.length]=a)}return i}var ft=function(n){return function(t,e,i){for(var r=-1,o=Object(t),a=i(t),u=a.length;u--;){var c=a[n?u:++r];if(!1===e(o[c],c,o))break}return t}}();function lt(n,t){return n&&ft(n,t,we)}function dt(n,t){return ct(t,(function(t){return re(n[t])}))}function vt(n,t,e,r,o){return n===t||(null==n||null==t||!ae(n)&&!ue(t)?n!=n&&t!=t:function(n,t,e,r,o,a){var d=Zt(n),v=Zt(t),h=c,_=c;d||(h=(h=pn.call(n))==u?g:h);v||(_=(_=pn.call(t))==u?g:_);var y=h==g&&!un(n),b=_==g&&!un(t),E=h==_;a||(a=[]);var I=jt(a,(function(t){return t[0]===n}));if(I&&I[1])return I[1]==t;if(a.push([n,t]),E&&!y){var A=d||fe(n)?function(n,t,e,r,o,a){var u=-1,c=2&o,s=1&o,f=n.length,l=t.length;if(f!=l&&!(c&&l>f))return!1;var d=!0;for(;++u<f;){var v,h=n[u],p=t[u];if(v!==i){if(v)continue;d=!1;break}if(s){if(!At(t,(function(n){return h===n||e(h,n,r,o,a)}))){d=!1;break}}else if(h!==p&&!e(h,p,r,o,a)){d=!1;break}}return d}(n,t,e,r,o,a):function(n,t,e,i,r,o,a){switch(e){case s:case f:return+n==+t;case l:return n.name==t.name&&n.message==t.message;case p:return n!=+n?t!=+t:n==+t;case m:case w:return n==t+""}return!1}(n,t,h);return a.pop(),A}if(!(2&o)){var T=y&&dn.call(n,"__wrapped__"),S=b&&dn.call(t,"__wrapped__");if(T||S){A=e(T?n.value():n,S?t.value():t,r,o,a);return a.pop(),A}}if(!E)return!1;A=function(n,t,e,r,o,a){var u=2&o,c=we(n),s=c.length,f=we(t).length;if(s!=f&&!u)return!1;var l=s;for(;l--;){var d=c[l];if(!(u?d in t:dn.call(t,d)))return!1}var v=!0,h=u;for(;++l<s;){var p,g=n[d=c[l]],m=t[d];if(!(p===i?g===m||e(g,m,r,o,a):p)){v=!1;break}h||(h="constructor"==d)}if(v&&!h){var _=n.constructor,w=t.constructor;_==w||!("constructor"in n)||!("constructor"in t)||"function"==typeof _&&_ instanceof _&&"function"==typeof w&&w instanceof w||(v=!1)}return v}(n,t,e,r,o,a);return a.pop(),A}(n,t,vt,e,r,o))}function ht(n){var t=typeof n;return"function"==t?n:null==n?Te:("object"==t?mt:bt)(n)}function pt(n){n=null==n?n:Object(n);var t=[];for(var e in n)t.push(e);return t}function gt(n,t){var e=-1,i=ne(n)?Array(n.length):[];return ut(n,(function(n,r,o){i[++e]=t(n,r,o)})),i}function mt(n){var t=we(n);return function(e){var r=t.length;if(null==e)return!r;for(e=Object(e);r--;){var o=t[r];if(!(o in e)||!vt(n[o],e[o],i,3))return!1}return!0}}function _t(n,t,e,r,o){if(n!==t){var a=Zt(t)||fe(t)?i:ye(t);ut(a||t,(function(u,c){if(a&&(u=t[c=u]),ae(u))o||(o=new Yn),function(n,t,e,r,o,a,u){var c=n[e],s=t[e],f=u.get(s);if(f)return void Zn(n,e,f);var l=a?a(c,s,e+"",n,t,u):i,d=l===i;d&&(l=s,Zt(s)||fe(s)?Zt(c)?l=c:te(c)?l=It(c):(d=!1,l=et(s,!a)):function(n){if(!ue(n)||pn.call(n)!=g||un(n))return!1;var t=En(n);if(null===t)return!0;var e=t.constructor;return"function"==typeof e&&e instanceof e&&ln.call(e)==hn}(s)||Qt(s)?Qt(c)?l=St(v=c,ye(v)):!ae(c)||r&&re(c)?(d=!1,l=et(s,!a)):l=c:d=!1);var v;u.set(s,l),d&&o(l,s,r,a,u);u["delete"](s),Zn(n,e,l)}(n,t,c,e,_t,r,o);else{var s=r?r(n[c],u,c+"",n,t,o):i;s===i&&(s=u),Zn(n,c,s)}}))}}function wt(n,t){return n=Object(n),Bt(t,(function(t,e){return e in n&&(t[e]=n[e]),t}),{})}function yt(n,t){var e={};return function(n,t){null==n||ft(n,t,ye)}(n,(function(n,i){t(n,i)&&(e[i]=n)})),e}function bt(n){return function(t){return null==t?i:t[n]}}function Et(n,t,e){var i=-1,r=n.length;t<0&&(t=-t>r?0:r+t),(e=e>r?r:e)<0&&(e+=r),r=t>e?0:e-t>>>0,t>>>=0;for(var o=Array(r);++i<r;)o[i]=n[i+t];return o}function It(n){return Et(n,0,n.length)}function At(n,t){var e;return ut(n,(function(n,i,r){return!(e=t(n,i,r))})),!!e}function Tt(n){var t=new n.constructor(n.byteLength);return new yn(t).set(new yn(n)),t}bn&&!Tn.call({valueOf:1},"valueOf")&&(pt=function(n){return function(n){for(var t,e=[];!(t=n.next()).done;)e.push(t.value);return e}(bn(n))});var St=kt;function kt(n,t,e,i){e||(e={});for(var r=-1,o=t.length;++r<o;){var a=t[r];nt(e,a,i?i(e[a],n[a],a,e,n):n[a])}return e}function Rt(n,t){return St(n,xt(n),t)}function Nt(n){return Wt((function(t,e){var r=-1,o=e.length,a=o>1?e[o-1]:i;for(a="function"==typeof a?(o--,a):i,t=Object(t);++r<o;){var u=e[r];u&&n(t,u,r,a)}return t}))}function Dt(n,t,e,i){if("function"!=typeof n)throw new TypeError(r);var o=1&t,a=function(n){return function(){var t=arguments,e=it(n.prototype),i=n.apply(e,t);return ae(i)?i:e}}(n);return function u(){for(var t=-1,r=arguments.length,c=-1,s=i.length,f=Array(s+r),l=this&&this!==$&&this instanceof u?a:n;++c<s;)f[c]=i[c];for(;r--;)f[c++]=arguments[++t];return l.apply(o?e:this,f)}}var Ct=bt("length");function Ot(n,t){var e=n[t];return function(n){if(null==n)return!1;if(re(n))return mn.test(ln.call(n));return ue(n)&&(un(n)?mn:M).test(n)}(e)?e:i}var xt=In||function(){return[]};function Pt(n){return pn.call(n)}function Mt(n){var t=n?n.length:i;return oe(t)&&(Zt(n)||se(n)||Qt(n))?function(n,t){for(var e=-1,i=Array(n);++e<n;)i[e]=t(e);return i}(t,String):null}function Lt(n){var t=typeof n;return"number"==t||"boolean"==t||"string"==t&&"__proto__"!=n||null==n}function Vt(n){var t=n&&n.constructor;return n===("function"==typeof t&&t.prototype||fn)}(Dn&&Pt(new Dn)!=h||Cn&&Pt(new Cn)!=_||On&&Pt(new On)!=b)&&(Pt=function(n){var t=pn.call(n),e=t==g?n.constructor:null,i="function"==typeof e?ln.call(e):"";if(i)switch(i){case Pn:return h;case Mn:return _;case Ln:return b}return t});var Ft=Wt((function(n,t){return Zt(n)||(n=null==n?[]:[Object(n)]),t=st(t,1),J(n)}));function Ut(n){return n?n[0]:i}function zt(n){var t=Un(n);return t.l=!0,t}function jt(n,t){return function(n,t,e,i){var r;return e(n,(function(n,e,o){if(t(n,e,o))return r=i?e:n,!1})),r}(n,ht(t),ut)}function Gt(n,t){return ut(n,tt(t))}function Bt(n,t,e){return rn(n,ht(t),e,arguments.length<3,ut)}function qt(n,t){var e;if("function"!=typeof t)throw new TypeError(r);return n=de(n),function(){return--n>0&&(e=t.apply(this,arguments)),n<=1&&(t=i),e}}var Ht=Wt((function(n,t,e){return Dt(n,33,t,e)})),Yt=Wt((function(n,t){return rt(n,1,t)})),Kt=Wt((function(n,t,e){return rt(n,ve(t)||0,e)}));var $t=Wt((function(n,t){return Dt(n,32,i,t)}));function Wt(n,t){if("function"!=typeof n)throw new TypeError(r);return t=Nn(t===i?n.length-1:de(t),0),function(){for(var e=arguments,i=-1,r=Nn(e.length-t,0),o=Array(r);++i<r;)o[i]=e[t+i];var a=Array(t+1);for(i=-1;++i<t;)a[i]=e[i];return a[t]=o,n.apply(this,a)}}function Xt(n,t){return n===t||n!=n&&t!=t}function Jt(n,t){return n>t}function Qt(n){return te(n)&&dn.call(n,"callee")&&(!Tn.call(n,"callee")||pn.call(n)==u)}var Zt=Array.isArray;function ne(n){return null!=n&&oe(Ct(n))&&!re(n)}function te(n){return ue(n)&&ne(n)}var ee,ie=(ee=!1,function(){return ee});function re(n){var t=ae(n)?pn.call(n):"";return t==d||t==v}function oe(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=a}function ae(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function ue(n){return!!n&&"object"==typeof n}function ce(n){return"number"==typeof n||ue(n)&&pn.call(n)==p}function se(n){return"string"==typeof n||!Zt(n)&&ue(n)&&pn.call(n)==w}function fe(n){return ue(n)&&oe(n.length)&&!!V[pn.call(n)]}function le(n,t){return n<t}var de=Number,ve=Number;function he(n){return"string"==typeof n?n:null==n?"":n+""}var pe=Nt((function(n,t){St(t,we(t),n)})),ge=Nt((function(n,t){St(t,ye(t),n)})),me=Nt((function(n,t,e,i){kt(t,ye(t),n,i)}));var _e=Wt((function(n){return n.push(i,Qn),me.apply(i,n)}));function we(n){var t=Vt(n);if(!t&&!ne(n))return function(n){return Rn(Object(n))}(n);var e=Mt(n),i=!!e,r=e||[],o=r.length;for(var a in n)!dn.call(n,a)||i&&("length"==a||cn(a,o))||t&&"constructor"==a||r.push(a);return r}function ye(n){for(var t=-1,e=Vt(n),i=pt(n),r=i.length,o=Mt(n),a=!!o,u=o||[],c=u.length;++t<r;){var s=i[t];a&&("length"==s||cn(s,c))||"constructor"==s&&(e||!dn.call(n,s))||u.push(s)}return u}var be=Nt((function(n,t,e){_t(n,t,e)})),Ee=Wt((function(n,t){return null==n?{}:(t=gt(st(t,1),String),wt(n,function(n,t,e,i){var r,o=-1,a=Q,u=!0,c=n.length,s=[],f=t.length;if(!c)return s;e&&(t=gt(t,(r=e,function(n){return r(n)}))),i?(a=Z,u=!1):t.length>=200&&(a=Hn,u=!1,t=new qn(t));n:for(;++o<c;){var l=n[o],d=e?e(l):l;if(u&&d==d){for(var v=f;v--;)if(t[v]===d)continue n;s.push(l)}else a(t,d,i)||s.push(l)}return s}(ye(n),t)))}));var Ie=Wt((function(n,t){return null==n?{}:wt(n,st(t,1))}));function Ae(n){return n?function(n,t){return gt(t,(function(t){return n[t]}))}(n,we(n)):[]}function Te(n){return n}var Se,ke=ht;function Re(n,t,e){var i=we(t),r=dt(t,i);null!=e||ae(t)&&(r.length||!i.length)||(e=t,t=n,n=this,r=dt(t,we(t)));var o=!ae(e)||!("chain"in e)||e.chain,a=re(n);return ut(r,(function(e){var i=t[e];n[e]=i,a&&(n.prototype[e]=function(){var t=this.l;if(o||t){var e=n(this.u),r=e.m=It(this.m);return r.push({func:i,args:arguments,thisArg:n}),e.l=t,e}return i.apply(n,nn([this.value()],arguments))})})),n}zn.prototype=it(Un.prototype),zn.prototype.constructor=zn,jn.prototype=xn?xn(null):fn,Bn.prototype.clear=function(){this.I={hash:new jn,map:Dn?new Dn:[],string:new jn}},Bn.prototype["delete"]=function(n){var t=this.I;return Lt(n)?function(n,t){return Gn(n,t)&&delete n[t]}("string"==typeof n?t.string:t.hash,n):Dn?t.map["delete"](n):Kn(t.map,n)},Bn.prototype.get=function(n){var t=this.I;return Lt(n)?function(n,t){if(xn){var e=n[t];return e===o?i:e}return dn.call(n,t)?n[t]:i}("string"==typeof n?t.string:t.hash,n):Dn?t.map.get(n):$n(t.map,n)},Bn.prototype.has=function(n){var t=this.I;return Lt(n)?Gn("string"==typeof n?t.string:t.hash,n):Dn?t.map.has(n):Wn(t.map,n)},Bn.prototype.set=function(n,t){var e=this.I;return Lt(n)?function(n,t,e){n[t]=xn&&e===i?o:e}("string"==typeof n?e.string:e.hash,n,t):Dn?e.map.set(n,t):Jn(e.map,n,t),this},qn.prototype.push=function(n){var t=this.I;if(Lt(n)){var e=t.I;("string"==typeof n?e.string:e.hash)[n]=o}else t.set(n,o)},Yn.prototype.clear=function(){this.I={array:[],map:null}},Yn.prototype["delete"]=function(n){var t=this.I,e=t.array;return e?Kn(e,n):t.map["delete"](n)},Yn.prototype.get=function(n){var t=this.I,e=t.array;return e?$n(e,n):t.map.get(n)},Yn.prototype.has=function(n){var t=this.I,e=t.array;return e?Wn(e,n):t.map.has(n)},Yn.prototype.set=function(n,t){var e=this.I,i=e.array;i&&(i.length<199?Jn(i,n,t):(e.array=null,e.map=new Bn(i)));var r=e.map;return r&&r.set(n,t),this},Un.assign=pe,Un.assignIn=ge,Un.before=qt,Un.bind=Ht,Un.chain=zt,Un.compact=function(n){return ct(n,Boolean)},Un.concat=Ft,Un.create=function(n,t){var e=it(n);return t?pe(e,t):e},Un.defaults=_e,Un.defer=Yt,Un.delay=Kt,Un.filter=function(n,t){return ct(n,ht(t))},Un.flatten=function(n){return(n?n.length:0)?st(n,1):[]},Un.flattenDeep=function(n){return(n?n.length:0)?st(n,Infinity):[]},Un.iteratee=ke,Un.keys=we,Un.map=function(n,t){return gt(n,ht(t))},Un.mapValues=function(n,t){var e={};return t=ht(t),lt(n,(function(n,i,r){e[i]=t(n,i,r)})),e},Un.matches=function(n){return mt(pe({},n))},Un.merge=be,Un.mixin=Re,Un.negate=function(n){if("function"!=typeof n)throw new TypeError(r);return function(){return!n.apply(this,arguments)}},Un.omit=Ee,Un.omitBy=function(n,t){return t=ht(t),yt(n,(function(n,e){return!t(n,e)}))},Un.once=function(n){return qt(2,n)},Un.partial=$t,Un.pick=Ie,Un.pickBy=function(n,t){return null==n?{}:yt(n,ht(t))},Un.slice=function(n,t,e){var r=n?n.length:0;return t=null==t?0:+t,e=e===i?r:+e,r?Et(n,t,e):[]},Un.sortBy=function(n,t){var e=0;return t=ht(t),gt(gt(n,(function(n,i,r){return{value:n,index:e++,criteria:t(n,i,r)}})).sort((function(n,t){return function(n,t){if(n!==t){var e=null===n,r=n===i,o=n==n,a=null===t,u=t===i,c=t==t;if(n>t&&!a||!o||e&&!u&&c||r&&c)return 1;if(n<t&&!e||!c||a&&!r&&o||u&&o)return-1}return 0}(n.criteria,t.criteria)||n.index-t.index})),bt("value"))},Un.tap=function(n,t){return t(n),n},Un.thru=function(n,t){return t(n)},Un.toArray=function(n){return ne(n)?n.length?It(n):[]:Ae(n)},Un.values=Ae,Un.extend=ge,Re(Un,Un),Un.clone=function(n){return ae(n)?Zt(n)?It(n):St(n,we(n)):n},Un.cloneDeep=function(n){return et(n,!0,!0)},Un.escape=function(n){return(n=he(n))&&x.test(n)?n.replace(O,an):n},Un.every=function(n,t,e){return function(n,t){var e=!0;return ut(n,(function(n,i,r){return e=!!t(n,i,r)})),e}(n,ht(t=e?i:t))},Un.find=jt,Un.findIndex=function(n,t){return n&&n.length?function(n,t,e){for(var i=n.length,r=e?i:-1;e?r--:++r<i;)if(t(n[r],r,n))return r;return-1}(n,ht(t)):-1},Un.forEach=Gt,Un.forOwn=function(n,t){return n&&lt(n,tt(t))},Un.has=function(n,t){return null!=n&&dn.call(n,t)},Un.head=Ut,Un.identity=Te,Un.includes=function(n,t,e,i){n=ne(n)?n:Ae(n),e=e&&!i?de(e):0;var r=n.length;return e<0&&(e=Nn(r+e,0)),se(n)?e<=r&&n.indexOf(t,e)>-1:!!r&&en(n,t,e)>-1},Un.indexOf=function(n,t,e){for(var i=n?n.length:0,r=((e="number"==typeof e?e<0?Nn(i+e,0):e:0)||0)-1,o=t==t;++r<i;){var a=n[r];if(o?a===t:a!=a)return r}return-1},Un.isArguments=Qt,Un.isArray=Zt,Un.isBoolean=function(n){return!0===n||!1===n||ue(n)&&pn.call(n)==s},Un.isDate=function(n){return ue(n)&&pn.call(n)==f},Un.isEmpty=function(n){if(ne(n)&&(Zt(n)||se(n)||re(n.splice)||Qt(n)))return!n.length;for(var t in n)if(dn.call(n,t))return!1;return!0},Un.isEqual=function(n,t){return vt(n,t)},Un.isFinite=function(n){return"number"==typeof n&&kn(n)},Un.isFunction=re,Un.isNaN=function(n){return ce(n)&&n!=+n},Un.isNull=function(n){return null===n},Un.isNumber=ce,Un.isObject=ae,Un.isRegExp=function(n){return ae(n)&&pn.call(n)==m},Un.isString=se,Un.isUndefined=function(n){return n===i},Un.last=function(n){var t=n?n.length:0;return t?n[t-1]:i},Un.max=function(n){return n&&n.length?tn(n,Te,Jt):i},Un.min=function(n){return n&&n.length?tn(n,Te,le):i},Un.noConflict=function(){return $._===this&&($._=gn),this},Un.noop=function(){},Un.reduce=Bt,Un.result=function(n,t,e){var r=null==n?i:n[t];return r===i&&(r=e),re(r)?r.call(n):r},Un.size=function(n){return null==n?0:(n=ne(n)?n:we(n)).length},Un.some=function(n,t,e){return At(n,ht(t=e?i:t))},Un.uniqueId=function(n){var t=++vn;return he(n)+t},Un.each=Gt,Un.first=Ut,Re(Un,(Se={},lt(Un,(function(n,t){dn.call(Un.prototype,t)||(Se[t]=n)})),Se),{chain:!1}),Un.VERSION="4.6.1",ut(["pop","join","replace","reverse","split","push","shift","sort","splice","unshift"],(function(n){var t=(/^(?:replace|split)$/.test(n)?String.prototype:sn)[n],e=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",i=/^(?:pop|join|replace|shift)$/.test(n);Un.prototype[n]=function(){var n=arguments;return i&&!this.l?t.apply(this.value(),n):this[e]((function(e){return t.apply(e,n)}))}})),Un.prototype.toJSON=Un.prototype.valueOf=Un.prototype.value=function(){return n=this.u,Bt(this.m,(function(n,t){return t.func.apply(t.thisArg,nn([n],t.args))}),n);var n},(Y||H||{})._=Un,j&&G&&(B&&((G.exports=Un)._=Un),j._=Un)}.call(this)},2600:function(n,t,e){n.exports=e(6617)._.noConflict()},9881:function(n,t,e){var i=e(9457).v3,r=Math.pow(2,32),o=function(n,t){return(i(n,t)>>>0)/r};n.exports={Seed:{IGNORING:0,BUCKETING:1,FALLBACK:2,HOLDBACK:3,BEHAVIOR_EVENT:2716770798},hashToHex:function(n,t){var e=i(n,t);return(e>>>16).toString(16)+(65535&e).toString(16)},hashToInt:function(n,t,e){return Math.floor(o(n,t)*e)},hashToReal:o,toByteString:function(n){var t=String.fromCharCode;return n.replace(/[\S\s]/gi,(function(n){n=n.charCodeAt(0);var e=t(255&n);return n>255&&(e=t(n>>>8&255)+e),n>65535&&(e=t(n>>>16)+e),e}))}}},9269:function(n,t){t.generate=function e(n){return n?(n^16*Math.random()>>n/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)}},4158:function(n,t,e){var i=e(2600),r=e(6321).get("stores/audience_data"),o=e(3677),a=e(8197),u=e(4126),c=e(8544);function s(n){var t=["type","selector","attributes","value"],e=i.extend({},n);return e.changeSet=i.map(n.changeSet,(function(n){return i.pick(c.dereferenceChangeId(n),t)})),e}t.emitLayerDecided=function(n){var t=n.decisionTicket?n.decisionTicket.audienceIds:[],e=i.map(t,(function(n){return{id:n,name:r.get(n).name}})),u={type:a.TYPES.LIFECYCLE,name:"layerDecided",data:i.extend(n,{audiences:e})},s=c.translateLayerEventToCampaignEvent(u);o.emit(u),o.emit(s)},t.emitViewActivated=function(n){var t={type:a.TYPES.LIFECYCLE,name:"viewActivated",data:n},e=c.translateViewActivatedToPageActivated(t);o.emit(t),o.emit(e)},t.emitViewsActivated=function(n){var t={type:a.TYPES.LIFECYCLE,name:"viewsActivated",data:n};o.emit(t)},t.emitPageDeactivated=function(n){var t={type:a.TYPES.LIFECYCLE,name:"pageDeactivated",data:n};o.emit(t)},t.emitActivateEvent=function(){o.emit({type:a.TYPES.LIFECYCLE,name:"activate"},!0)},t.emitActivatedEvent=function(){o.emit({type:a.TYPES.LIFECYCLE,name:"activated"})},t.emitInitializedEvent=function(){var n={type:a.TYPES.LIFECYCLE,name:"initialized"};window.optimizely&&(window.optimizely.initialized=!0),o.emit(n)},t.emitOriginsSyncedEvent=function(){var n={type:a.TYPES.LIFECYCLE,name:"originsSynced"};o.emit(n)},t.emitActionAppliedEvent=function(n){var t={type:n.type,campaignId:n.layerId,pageId:n.pageId,experimentId:n.experimentId,variationId:n.variationId};u.defineProperty(t,"changes",(function(){return s(n).changeSet}),"actionAppliedEvent");var e={type:a.TYPES.ACTION,name:"applied",data:t};o.emit(e)},t.emitActionsForDecisionAppliedEvent=function(n,t){var e={decision:n};u.defineProperty(e,"actions",(function(){return i.map(t,s)}),"appliedAllForDecisionEvent");var r={type:a.TYPES.ACTION,name:"appliedAllForDecision",data:e};o.emit(r)},t.emitSendEvents=function(){var n={type:a.TYPES.ANALYTICS,name:"sendEvents"};o.emit(n)},t.emitHoldEvents=function(){var n={type:a.TYPES.ANALYTICS,name:"holdEvents"};o.emit(n)}},4235:function(n,t,e){var i=e(2600),r=e(3101),o=e(4126),a=e(8544),u=e(6650),c=e(2448);function s(n,t,e,r){var o=n.getLayerState(r),a=t.get(r),c=e.get();if(!o||!a)return c?{layer:{name:c.layerName,id:c.layerId,policy:c.layerPolicy,integrationStringVersion:c.integrationStringVersion},experiment:{name:c.experimentName,id:c.experimentId},variation:{name:c.variationName,id:c.variationId},isLayerHoldback:!1}:null;if(u.isSingleExperimentPolicy(a.policy)&&o.decision.isLayerHoldback)return null;var s,f,l=o.decision.experimentId,d=o.decision.variationId;return l&&d&&(s=i.find(a.experiments,{id:l}))&&(f=i.find(s.variations,{id:d}))?{layer:{name:a.name,id:a.id,policy:a.policy,integrationStringVersion:a.integrationStringVersion},experiment:{name:s.name,id:s.id},variation:{name:f.name,id:f.id},isLayerHoldback:o.decision.isLayerHoldback}:null}function f(n,t,e,r,o,a){var s=[],f=n.getLayerStates();a.onlySingleExperiments&&(f=i.filter(f,(function(n){var e=t.get(n.layerId);return e&&u.isSingleExperimentPolicy(e.policy)})));var l=i.map(f,(function(n){var t=!!n.decision.variationId,e=n.decisionActivationId&&n.decisionActivationId===r.getActivationId(),o=c.getExperimentAndVariation(),a=o?o.variationId:null,u=t&&n.decision.variationId===a;return i.extend(n,{isActive:t&&e||u,visitorRedirected:u})})),d=o?i.filter(l,o):l;return i.each(d,(function(n){var r=function(n,t,e,r){var o,a,u=n.layerId,c=t.get(u)||{},s=i.map(c.experiments,(function(n){return i.pick(n,["id","name"])}));if(!r&&c.decisionMetadata&&c.decisionMetadata.offerConsistency)return;var f={id:u,campaignName:c.name||null,experiment:null,allExperiments:s,variation:null,reason:n.decision.reason,isActive:!!n.isActive,visitorRedirected:n.visitorRedirected,isInCampaignHoldback:n.decision.isLayerHoldback};n.decision&&n.decision.experimentId&&(o=i.find(c.experiments,{id:n.decision.experimentId})),o&&(f.experiment=i.pick(o,["id","name","campaignName"])),o&&n.decision.variationId&&(a=i.find(o.variations,{id:n.decision.variationId})),a&&(f.variation=i.pick(a,["id","name"]));var l=i.map(n.decisionTicket.audienceIds,(function(n){return i.pick(e.get(n),["id","name"])}));return f.audiences=l,c.decisionMetadata&&c.decisionMetadata.offerConsistency&&(f.pageId=n.pageId),f}(n,t,e,a.includeOfferConsistency);r&&s.push(r)})),s}t.data=["stores/audience_data","stores/client_metadata","stores/event_data","stores/layer_data","stores/view_data","stores/group_data","stores/interest_group","stores/tag_group","stores/global",function(n,t,e,r,u,c,s,f,l){var d={},v={},h={},p={audiences:n.getAudiencesMap(),events:e.getEventsMap(),campaigns:d,pages:u.getPagesMap(),experiments:v,variations:h,projectId:l.getProjectId(),snippetId:l.getSnippetId(),accountId:l.getAccountId(),dcpServiceId:l.getDCPServiceId(),revision:l.getRevision(),clientName:t.getClientName(),clientVersion:t.getClientVersion()},g=a.dereferenceChangeId;return i.each(r.getAll(),(function(n){o.defineProperty(d,n.id,(function(){var t=i.extend({},n);return o.defineProperty(t,"changes",(function(){return i.map(n.changes,g)}),"campaign"),o.defineProperty(t,"experiments",(function(){return i.map(n.experiments,(function(n){return v[n.id]}))}),"campaign"),t}),"campaignMap","byId"),i.each(n.experiments,(function(n){o.defineProperty(v,n.id,(function(){var t=i.extend({},n);return o.defineProperty(t,"changes",(function(){return i.map(n.changes,g)}),"experiment"),o.defineProperty(t,"variations",(function(){return i.map(n.variations,(function(n){return h[n.id]}))}),"experiment"),t}),"experimentMap","byId"),i.each(n.variations,(function(n){o.defineProperty(h,n.id,(function(){var t=i.extend({},n);return o.defineProperty(t,"actions",(function(){return i.map(n.actions,(function(n){return i.extend({},n,{changes:i.map(n.changes,g)})}))}),"variation"),t}),"variationMap","byId")}))}))})),p.groups=c.getGroupsMap(),p}],t.visitor=["stores/visitor",function(n){return i.cloneDeep(n.getVisitorProfile())}],t.visitor_id=["stores/visitor_id",function(n){return{randomId:n.getRandomId()}}],t.state=["stores/audience_data","stores/layer_data","stores/layer","stores/view_data","stores/view","stores/global","stores/observed_redirect",function(n,t,e,o,a,l,d){return{getCampaignStates:function(r){var o={},a=f(e,t,n,l,r,{includeOfferConsistency:!1});return i.each(a,(function(n){o[n.id]=n})),o},getExperimentStates:function(r){var o=f(e,t,n,l,r,{includeOfferConsistency:!1,onlySingleExperiments:!0}),a=["audiences","variation","reason","visitorRedirected","isActive"];return i.reduce(o,(function(n,t){var e=t.allExperiments[0];return n[e.id]=i.extend({},i.pick(t,a),{id:e.id,experimentName:e.name,isInExperimentHoldback:t.isInCampaignHoldback}),n}),{})},getCampaignStateLists:function(r){var o={},a=f(e,t,n,l,r,{includeOfferConsistency:!0});return i.each(a,(function(n){var t=n.id;o[t]||(o[t]=[]),o[t].push(n)})),o},getPageStates:function(n){var t=a.getAll(),e=i.reduce(t,(function(n,t){var e=o.get(t.id);return n[t.id]=i.extend({},i.pick(e,["id","name","apiName","category","staticConditions","tags"]),i.pick(t,["isActive","metadata"])),n[t.id].isActive=!!n[t.id].isActive,n}),{});return n?i.pickBy(e,n):e},isGlobalHoldback:function(){return l.isGlobalHoldback()},getActivationId:function(){return l.getActivationId()},getVariationMap:function(){var n=e.getLayerStates(),r={};return i.each(n,(function(n){var e=t.get(n.layerId);if(n.decision&&n.decision.experimentId&&(r[n.decision.experimentId]={id:n.decision.variationId,name:null,index:null},e)){var o=i.find(e.experiments,{id:n.decision.experimentId});if(o&&n.decision.variationId)var a=i.find(o.variations,{id:n.decision.variationId}),u=i.findIndex(o.variations,{id:n.decision.variationId});a&&(r[n.decision.experimentId]={id:n.decision.variationId,name:a.name,index:u})}})),r},getActiveExperimentIds:function(){var n={};return i.each(this.getCampaignStateLists({isActive:!0}),(function(t){i.each(t,(function(t){n[t.experiment.id]=!0}))})),i.keys(n)},getRedirectInfo:function(){var n=c.getExperimentAndVariation();return n&&(n.referrer=c.getReferrer()),n},getDecisionString:function(n){if(!n)throw new Error("Must pass a config to getDecisionString");n=i.extend({maxLength:255,shouldCleanString:!1},n);var o=s(e,t,d,n.campaignId);return o?r.generateAnalyticsString(o.layer,o.experiment,o.variation,o.isLayerHoldback,n.maxLength,n.shouldCleanString):null},getDecisionObject:function(n){if(!n)throw new Error("Must pass a config to getDecisionObject");n=i.extend({maxLength:255,shouldCleanString:!1},n);var o=s(e,t,d,n.campaignId);if(!o)return null;var a=r.formatNamesAndIdsForAnalytics(o.layer,o.experiment,o.variation,n.shouldCleanString),c=i.mapValues(a.names,(function(t,e){return r.combineAndTruncateIdAndName(t,a.idStrings[e],n.maxLength)})),f={experiment:c.experiment,variation:c.variation};return u.isSingleExperimentPolicy(o.layer.policy)||i.extend(f,{campaign:c.layer,holdback:o.isLayerHoldback}),f}}}],t.utils=e(7425).create(),t.jquery=["env/jquery",function(n){return n}],t.event_emitter=e(6964)},6132:function(n,t,e){var i=e(8642),r=e(5272),o="optimizelyDataApi";t.registerFunction=function(n,t){var e=r.getGlobal(o);e||(e={},r.setGlobal(o,e)),e[n]||(e[n]=t)},t.unregisterFunction=function(n){var t=r.getGlobal(o);t&&t[n]&&(t[n]=function(){i.log('Ignoring attempt to call "'+o+"."+n+'" which has been unregistered.')})},t.getFunction=function(n){return r.getGlobal(o)[n]}},7868:function(n,t,e){var i=e(2600),r=e(8642),o=e(4235),a=e(6321),u=a.get("stores/plugins"),c=e(7547),s=e(311),f=e(3637),l=[e(542),e(715),e(4350)],d=["clientMetadata","cookieDomain","disable","load","optOut","rum"];t.push=function(n,t){var e,o,a,u;if(!i.isArray(n)&&i.isObject(n))u=i.isUndefined(n.version)?1:n.version,e=n.type,a=[n];else if(i.isArray(n))u=0,e=n[0],a=n.slice(1);else{if(!i.isString(n))return r.warn("API / Ignoring non-array/object/string argument:",n),!1;u=0,e=n,a=[]}if(l[u]&&(o=l[u][e]),t&&-1===d.indexOf(e))return r.debug("API / Ignoring non high priority function:",e,a),!1;if(!o)return r.warn('API / No function found for "'+e+'" (v'+u+") with arguments:",a),!1;r.log('API / Executing: "'+e,'" with arguments:',a);try{o.apply(null,a),f.dispatch(c.RECORD_API_USAGE,{methodName:u?"v"+u+"."+e:e})}catch(s){r.error(s)}return!0},t.get=function(n){r.log('API / Getting module: "'+n+'"');var t=o[n];if(t?i.isArray(t)&&(t=a.evaluate(t)):t=u.getPlugin(s.PluginTypes.apiModules,n),t)return f.dispatch(c.RECORD_API_USAGE,{methodName:"get."+n}),t;r.warn('Module "'+n+'" not found.')}},4126:function(n,t,e){var i=e(4281),r=e(7547),o=e(3637),a=e(8642);t.defineProperty=function(n,t,e,u,c){i(n,t,(function(){var n=["prop",u,c||t].join(".");return a.debug('Evaluating getter: "'+n+'"'),o.dispatch(r.RECORD_API_USAGE,{methodName:n}),e()}),!0)}},542:function(n,t,e){var i=e(2600),r=e(715);function o(n){var t,e={};if(n)if(a(n))t=Number(n);else{if("object"!=typeof n)throw new Error("tracker: Revenue argument "+n+"not a number.");if("revenue"in(e=i.extend({},n))){if(!a(e.revenue))throw new Error("tracker: Revenue value "+e.revenue+"not a number.");t=Number(e.revenue),delete e.revenue}}return i.isUndefined(t)||(e.revenue=t),e}function a(n){return i.isNumber(n)||i.isString(n)&&Number(n)==n}t.activateGeoDelayedExperiments=function(n,t){t||(t=n.lists?"odds":"cdn3"),r.dataFromSource({data:n,source:t})},t.activateSiteCatalyst=function(n){n&&n.sVariable&&r.integrationSettings({id:"adobe_analytics",settings:{sVariableReference:n.sVariable}})},t.bucketVisitor=function(n,t){if(n&&t){var e={experimentId:String(n)};t>256?e.variationId=String(t):e.variationIndex=String(t),r.bucketVisitor(e)}},t.bucketUser=t.bucketVisitor,t.disable=function(n){r.disable({scope:n})},t.log=function(n){i.isUndefined(n)&&(n=!0),r.log({level:n?"INFO":"OFF"})},t.optOut=function(n){i.isUndefined(n)&&(n=!0),r.optOut({isOptOut:n})},t.setCookieDomain=function(n){r.cookieDomain({cookieDomain:n})},t.setCookieExpiration=function(n){r.cookieExpiration({cookieExpirationDays:n})},t.setDimensionValue=function(n,t){var e={};e[n]=t,r.user({attributes:e})},t.setUserId=function(n){r.user({userId:n})},t.storeThirdPartyData=function(n,t){r.dataFromSource({source:n,data:t})},t.trackEvent=function(n,t){r.event({eventName:n,tags:o(t)})}},8544:function(n,t,e){var i=e(2600),r=e(6321),o=e(5281),a=e(4126),u=r.get("stores/change_data");t.translateDecisionToCampaignDecision=function(n){return c(i.cloneDeep(n),{layerId:"campaignId",isLayerHoldback:"isCampaignHoldback"})},t.translateLayerEventToCampaignEvent=function(n){var e={};return a.defineProperty(e,"campaign",(function(){return function(n){var e=i.cloneDeep(n);return e.changes&&(e.changes=i.map(e.changes,t.dereferenceChangeId)),e.experiments&&i.each(e.experiments,(function(n){n.changes&&(n.changes=i.map(n.changes,t.dereferenceChangeId)),n.variations&&i.each(n.variations,(function(n){n.actions&&i.each(n.actions,(function(n){n.changes&&(n.changes=i.map(n.changes,t.dereferenceChangeId))}))}))})),e}(n.data.layer)}),"campaignEvent"),e.decisionTicket=n.data.decisionTicket,e.decision=this.translateDecisionToCampaignDecision(n.data.decision),e.audiences=n.data.audiences,{type:"lifecycle",name:"campaignDecided",data:e}},t.translateViewActivatedToPageActivated=function(n){return{type:"lifecycle",name:"pageActivated",data:{page:n.data.view}}},t.dereferenceChangeId=function(n){var t=u.getChange(n);return t?o.safeReference(t):n};var c=function(n,t){var e=i.omit(n,i.keys(t));return i.each(t,(function(t,i){e[t]=n[i]})),e}},7425:function(n,t,e){var i=e(7929).Promise,r=e(6727).t,o=e(4565).poll,a=e(6906).b,u=e(5538).A;t.create=function(){return{observeSelector:r,poll:o,Promise:i,waitForElement:a,waitUntil:u}}},1458:function(n){n.exports={DEFAULT_INTERVAL:20}},6727:function(n,t,e){var i=e(2600),r=(e(7547),e(6321)),o=r.get("stores/directive"),a=e(3485),u=(e(1670),e(311),e(3637),e(9269).generate),c=e(4565),s=e(5272),f=(r.get("stores/rum"),{once:!1,onTimeout:null,timeout:null}),l={},d=function(n){d=function(){if(!o.shouldObserveChangesIndefinitely())return function(n){var t=c.poll(i.partial(h,n));l[n].cancelObservation=function(){t(),delete l[n]}};var n,t=function(){this.disconnect(),i.each(i.keys(l),h),this.observe(r,e)},e={attributes:!0,childList:!0,subtree:!0,characterData:!0},r=a.getDocumentElement();return n=new MutationObserver(t),function(t){var o=l[t];n.observe(r,e),o.cancelObservation=function(){delete l[t],i.isEmpty(l)&&n.disconnect()}}}(),d(n)};function v(n){var t=l[n];t&&t.cancelObservation&&t.cancelObservation()}function h(n){if(l[n]){if(function(n){var t=n.options.timeout;if(null!==t)if("function"==typeof t)try{return t()}catch(e){}else if(Date.now()-n.startTime>t)return!0;return!1}(l[n]))return 0===l[n].matchedCount&&i.isFunction(l[n].options.onTimeout)&&l[n].options.onTimeout(),void v(n);var t=a.querySelectorAll(l[n].selector);t.length&&(i.each(t,(function(t){t.T&&t.T[n]||l[n].callbackQueue.push(t)})),function(n){for(;l[n]&&l[n].callbackQueue.length;){var t=l[n].callbackQueue.shift();if(p(t,n),l[n].matchedCount=l[n].matchedCount+1,l[n].callback(t),l[n]&&l[n].options.once)return void v(n)}}(n))}}function p(n,t){n.T||(n.T={}),n.T[t]=!0}t.t=function(n,t,e){if(!function(n){try{a.querySelector(n)}catch(t){return!1}return!0}(n))throw new Error("observeSelector expects a valid css selector as its first argument");if(!i.isFunction(t))throw new Error("observeSelector expects a function as its second argument");if(e&&(!i.isObject(e)||i.isFunction(e)))throw new Error("observeSelector expects an object as its third argument");var r=u();return e=i.assign({},f,e||{}),l[r]={callback:t,callbackQueue:[],matchedCount:0,options:e,selector:n,startTime:Date.now()},d(r),s.setTimeout(i.bind(h,null,r),0),i.partial(v,r)}},4565:function(n,t,e){var i=e(2600),r=(e(7547),e(6321)),o=(e(311),e(3637),e(9269).generate),a=e(5272),u=e(1458).DEFAULT_INTERVAL,c=(r.get("stores/rum"),{});function s(n){c[n]&&i.each(c[n].callbacks,(function(n){n.call(null)}))}function f(n,t){c[t]&&c[t].callbacks[n]&&(delete c[t].callbacks[n],i.some(c[t].callbacks)||(clearInterval(c[t].id),delete c[t]))}t.poll=function(n,t){i.isNumber(t)||(t=u),c[t]||(c[t]={callbacks:{},id:a.setInterval(i.partial(s,t),t)});var e=o();return c[t].callbacks[e]=n,i.partial(f,e,t)},t.cancelAll=function(){i.each(c,(function(n,t){clearInterval(n.id),delete c[t]}))}},6906:function(n,t,e){var i=e(7929).Promise,r=e(6727).t;t.b=function(n){return new i((function(t,e){r(n,t,{once:!0})}))}},5538:function(n,t,e){var i=e(7929).Promise,r=e(4565).poll;t.A=function(n){return new i((function(t,e){if(n())t();else var i=r((function(){n()&&(i(),t())}))}))}},715:function(n,t,e){var i=e(2600),r=e(7547),o=e(7868),a=e(4235),u=e(4740),c=e(311),s=e(7661),f=e(4158),l=e(6941),d=e(5202).U,v=e(7052),h=e(4659),p=(e(3735),e(8555)),g=e(3677),m=e(3637),_=e(4705),w=e(5034),y=e(8642),b=e(3412),E=(e(9223),e(8884)),I=e(7434),A=e(6321),T=A.get("stores/dimension_data"),S=A.get("stores/view"),k=A.get("stores/view_data"),R=A.get("stores/visitor_id"),N=A.get("stores/layer_data"),D=A.get("stores/directive"),C=!1,O=t.ApiListenerError=d("ApiListenerError");t.event=function(n){var t;switch(n.eventType){case"click":t=function(n){var t;return n.eventData&&(t=p.create(n.eventData.id,n.eventData.apiName,"click",n.eventData)),function(){var n=s.trackClickEvent(t);n?y.log("API / Tracking click event:",n):y.log("API / Not tracking click event:",n)}}(n);break;case"decision":t=function(n){var t=n.eventData,e=w.createLayerState(t.layerId,t.experimentId,t.variationId,t.isLayerHoldback),i=w.createSingle(t.layerId,t.experimentId,t.variationId);return function(){w.recordLayerDecision(e.layerId,e.decisionTicket,e.decision),y.log("API / Tracking decision event:",e),s.trackDecisionEvent(e.decision,e.decisionTicket,i)}}(n);break;case"pageview":t=function(n){var t=E.create(n.eventData.id,n.eventData.apiName),e=E.createState(t.id);return function(){var n=s.trackViewActivation(t,e);n?y.log("API / Tracking pageview event:",n):y.log("API / Not tracking pageview event:",n)}}(n);break;default:t=function(n){var t;return n.eventId&&(t=p.create(n.eventId,n.eventName,"custom")),E.updateAllViewTags(),function(){s.trackCustomEvent(n.eventName,n.tags,t)?y.log("API / Tracking custom event:",n.eventName,n.tags):y.log("API / Not tracking custom event:",n.eventName)}}(n)}R.getBucketingId()?t():m.dispatch(r.ADD_CLEANUP_FN,{lifecycle:c.Lifecycle.postActivate,cleanupFn:t})},t.clientMetadata=function(n){C},t.priorRedirectString=function(n){},t.microsnippetError=function(n){},t.rum=function(n){m.dispatch(r.SET_RUM_DATA,n.eventData)},t.initialViewStates=function(n){var t=i.map(n.states,(function(n,t){return{id:t,isActive:n}}));E.registerViews(t)},t.page=function(n){var t=k.getByApiName(n.pageName);if(!t)throw new Error('Unknown page "'+n.pageName+'"');var e=!n.hasOwnProperty("isActive")||n.isActive,i=function(){e?E.activateViaAPI(t,n.tags):(E.deactivate(t),y.log("API / Deactivated Page",E.description(t)))};R.getBucketingId()?i():m.dispatch(r.ADD_CLEANUP_FN,{lifecycle:c.Lifecycle.postViewsActivated,cleanupFn:i})},t.tags=function(n){E.setGlobalTags(n.tags)},t.user=function(n){y.log("API / Setting visitor custom attributes:",n.attributes),i.each(n.attributes,(function(n,t){var e,i,r=t,o=T.getById(t)||T.getByApiName(t);o&&(r=o.id,e=o.apiName,i=o.segmentId||o.id);var a={id:i,value:n};e&&(a.name=e),x(r,a,!0)}))};var x=function(n,t,e){var i=[{key:e?["custom",n]:[n],value:t,metadata:{lastModified:v.now()}}],o=function(){m.dispatch(r.SET_VISITOR_ATTRIBUTES,{attributes:i})};R.getBucketingId()?o():m.dispatch(r.ADD_CLEANUP_FN,{lifecycle:c.Lifecycle.postVisitorProfileLoad,cleanupFn:o})};t.optOut=function(n){var t=!n.hasOwnProperty("isOptOut")||n.isOptOut;h.setOptOut(t)},t.cookieExpiration=function(n){var t=n.cookieExpirationDays;t<90&&(y.error('Argument "cookieExpirationDays"=',t,"less than minimum days:",90,", setting to minimum."),t=90),y.log("API / Setting cookie age to",t,"days."),m.dispatch(r.SET_COOKIE_AGE,86400*t)},t.extendCookieLifetime=function(n){n=i.extend({isEnabled:!0},n),y.log("API / Setting cookie automatic lifetime extension to",n.isEnabled),m.dispatch(r.SET_COOKIE_AUTO_REFRESH,n.isEnabled)},t.cookieDomain=function(n){y.log("API / Setting cookie domain to",n.cookieDomain),m.dispatch(r.SET_COOKIE_DOMAIN,n.cookieDomain)},t.disable=function(n){if(n.scope){if("tracking"!==n.scope)throw new Error('Unknown "scope" for disable: '+n.scope);y.log("API / Disabling tracking"),m.dispatch(r.LOAD_DIRECTIVE,{trackingDisabled:!0})}else y.log("API / Disabling everything"),m.dispatch(r.LOAD_DIRECTIVE,{disabled:!0})},t.log=function(n){var t=n.level,e=n.match;i.isUndefined(t)&&(t="INFO"),i.isUndefined(e)&&(e=""),y.setLogMatcher(e),y.setLogLevel(t)},t.registerModule=function(n){var t="custom/"+n.moduleName;if(a[t]||o.get(t))throw new Error('Module name "'+t+'" is reserved. Will not be registered as plugin.');b.registerApiModule(t,n.module)},t.dataFromSource=function(n){var t=n.source;l.makeAsyncRequest(t),l.resolveRequest(t,n.data)},t.addListener=function(n){if(!i.isFunction(n.handler))throw new Error("A handler function must be supplied");(n=i.omit(n,"type")).publicOnly=!0,n.emitErrors=!0;var t=n.handler;n.handler=function(n){try{return t(n)}catch(e){throw new O(e)}},g.on(n)},t.removeListener=function(n){if(!n.token)throw new Error("Must supply a token to removeListener");g.off(n.token)},t.load=function(n){n.data=i.extend({},n.data),u.normalizeClientData(n.data),m.dispatch(r.DATA_LOADED,{data:n.data})},t.integrationSettings=function(n){if(!n.id)throw new Error("id is required");if(!n.settings)throw new Error("settings is required");m.dispatch(r.SET_INTEGRATION_SETTINGS,i.extend({},n.settings,{id:n.id}))},t.bucketVisitor=function(n){if(!n.variationId&&i.isUndefined(n.variationIndex)||n.variationId&&n.variationIndex)throw new Error("One of a variationId or a variationIndex is required.");if(!n.experimentId)throw new Error("An experimentId is required.");var t,e,r=n.campaignId;if(r){if(!(t=N.get(r)))throw new Error("Could not find layer "+r)}else if(!(r=(t=N.getLayerByExperimentId(n.experimentId)).id))throw new Error("Could not find layer for experiment "+n.experimentId);if(!(e=i.find(t.experiments,{id:n.experimentId})))throw new Error("Could not find experiment "+n.experimentId+" in layer "+r);var o=n.variationId;if(i.isUndefined(n.variationIndex)){if(!i.find(e.variations,{id:o}))throw new Error("Cound not find variation "+o+" in experiment "+n.experimentId)}else if(!(o=e.variations[n.variationIndex].id))throw new Error("Could not find variation at index "+n.variationIndex+" in experiment "+n.experimentId);I.updateVariationIdMap(r,n.experimentId,o),R.getBucketingId()&&I.persistVariationIdMap()},t.waitForOriginSync=function(n){if(!i.isArray(n.canonicalOrigins))throw new Error("canonicalOrigins must be an array. Got: "+_.stringify(n.canonicalOrigins));i.each(n.canonicalOrigins,(function(n){if(!i.isString(n))throw new Error("Each item in canonicalOrigins must be a string. Found type "+(void 0===n?"undefined":(t=n)&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t));var t})),m.dispatch(r.XDOMAIN_SET_CANONICAL_ORIGINS,{canonicalOrigins:n.canonicalOrigins})},t.disableCrossOrigin=function(){y.log("API / cross origin tracking is DISABLED"),m.dispatch(r.XDOMAIN_SET_DISABLED,{disabled:!0})},t.activate=function(){D.shouldActivate()?(i.forEach(S.getActiveViewStates(),(function(n){E.deactivate(k.get(n.id))})),m.dispatch(r.RESET_VIEW_STATES),f.emitActivateEvent()):y.debug("Not activating.")},t.sendEvents=function(){f.emitSendEvents()},t.holdEvents=function(){f.emitHoldEvents()}},4350:function(){},7122:function(n,t,e){var i=e(2600),r=e(5202).U,o=t.ActivationCodeError=r("ActivationCodeError"),a=t.ProjectJSError=r("ProjectJSError"),u=e(234),c=e(7547),s=e(7661),f=e(4158),l=e(5346),d=e(6663),v=e(4740),h=e(7052),p=e(2783),g=e(6321),m=e(4659),_=e(3485),w=e(311),y=e(3677),b=e(8197),E=e(5131),I=e(3637),A=e(8256),T=e(5034),S=e(3819).mM,k=e(8642),R=e(2227),N=e(4819),D=e(3412),C=e(2177),O=e(7929).Promise,x=e(6170),P=e(9223),M=e(9856),L=e(3056),V=e(8884),F=e(7434),U=e(5272),z=(g=e(6321)).get("stores/session"),j=g.get("stores/audience_data"),G=g.get("stores/action_data"),B=g.get("stores/cleanup"),q=g.get("stores/directive"),H=g.get("stores/global"),Y=g.get("stores/group_data"),K=g.get("stores/layer_data"),$=g.get("stores/layer"),W=g.get("stores/pending_events"),X=g.get("stores/plugins"),J=g.get("stores/rum"),Q=g.get("stores/visitor"),Z=g.get("stores/view_data"),nn=g.get("stores/view"),tn=g.get("stores/visitor_id"),en=g.get("stores/visitor_bucketing"),rn=g.get("stores/xdomain"),on=e(7868),an=e(3735),un=e(312),cn=t;function sn(){var n=null;i.isNumber(n)&&0===K.getCount()?(k.log("Activating after delay of",n,"ms because no Experiments are running"),I.dispatch(c.SET_RUM_DATA,{data:{activateDfd:!0}}),U.setTimeout(f.emitActivateEvent,n)):f.emitActivateEvent()}function fn(n){an.handleError(n.data.error,n.data.metadata)}function ln(n,t){I.dispatch(c.SET_RUM_DATA,{data:{extras:{xdAttempt:n,xdError:t?t.toString():void 0}}})}function dn(n,t,e){n=n||[];var r=X.getAllPlugins(w.PluginTypes.visitorProfileProviders),o=H.getGlobalHoldbackThreshold(),a=Q.getVisitorProfile();F.populateLazyVisitorData(r,a);var u=tn.getBucketingId();if(!u)throw new Error("bucketingId not set");var c,s=Q.getVisitorProfile();t&&(c=en.getVariationIdMap()[t.id]);var f={bucketingId:u,visitorProfile:s,audiences:n,globalHoldback:o,preferredVariationMap:c,layer:t};return t&&e&&p.isPageIdRelevant(t)?i.map(e,(function(n){return p.createTicket(i.extend({},f,{pageId:n}))})):[p.createTicket(f)]}function vn(n,e,r,o){try{var a=function(n){return{bucketingId:tn.getBucketingId(),preferredLayerId:en.getPreferredLayerMap()[n.id]}}(o),u=p.decideGroup(o,a);if(u.reason)return k.debug("Not activating Group",A.description(o),"; reason:",u.reason),J.getSampleRum()&&I.dispatch(c.RECORD_LAYER_FEATURE_USAGE,{feature:"mutex",entityId:o.id}),O.resolve();var s=K.get(u.layerId);if(!s)return k.debug("Visitor was bucketed into a Campaign ("+u.layerId+") which is not in this snippet"),O.resolve();var f=i.filter(s.pageIds,i.partial(i.includes,r));return i.isEmpty(f)?(k.debug("Not activating Group",A.description(o),"; reason: visitor was bucketed into a Campaign/Experiment not related to the currently-activating Page(s)"),O.resolve()):(J.getSampleRum()&&I.dispatch(c.RECORD_LAYER_FEATURE_USAGE,{feature:"mutex",entityId:o.id}),t.decideAndExecuteLayerASAP(n,e,f,s))}catch(l){return k.error("Error getting decision for Group",A.description(o),"; ",l),O.reject(l)}}function hn(n,t){var e={};return i.each(n,(function(n){i.isArray(n)?i.extend(e,hn(n,t)):i.isObject(n)&&t[n.type]&&(e[n.type]=!0)})),e}function pn(n){var t=[];return i.each(n,(function(n){t.push(n.name,n)})),t}function gn(n){var t=B.getCleanupFns(n);if(t.length>0){for(;t.length>0;)t.shift()();I.dispatch(c.CLEAR_CLEANUP_FN,{lifecycle:n})}}t.initialize=function(n){return this.initGlobalStore(n.clientData),this.initializePlugins(n.plugins)},t.initGlobalStore=function(n){v.normalizeClientData(n),y.on({filter:{type:"error"},handler:fn}),I.dispatch(c.DATA_LOADED,{data:n}),k.log("Initialized with DATA:",n)},t.initializePlugins=function(n){if(i.isArray(window.optimizely)&&(window.optimizely=i.filter(window.optimizely,(function(n){var t=!0;return!on.push(n,t)}))),m.setOptOut(q.shouldOptOut()),!q.isDisabled()&&!q.shouldOptOut()){un.queueBeacons(),_.isReady()?I.dispatch(c.SET_DOMCONTENTLOADED):_.addReadyHandler((function(){I.dispatch(c.SET_DOMCONTENTLOADED)})),N.time("projectJS");var e=H.getProjectJS();if(i.isFunction(e))try{E.apply(e)}catch(v){k.error("Error while executing projectJS: ",v),d.emitError(new a(v))}N.timeEnd("projectJS"),i.each(n||[],(function(n){try{n(D)}catch(v){d.emitInternalError(v)}})),i.each(H.getPlugins()||[],(function(n){try{E.apply(n,[D])}catch(v){d.emitError(v)}})),P.load();var r=y.on({filter:{type:"lifecycle",name:"activated"},handler:function(){Q.observe(F.persistVisitorProfile),$.observe(F.persistLayerStates),z.observe(F.persistSessionState),W.observe(R.persistPendingEvents),en.observe(F.persistVisitorBucketingStore),y.off(r)}});y.on({filter:{type:"lifecycle",name:"viewsActivated"},handler:t.onViewsActivated}),y.on({filter:{type:"lifecycle",name:"pageDeactivated"},handler:t.onPageDeactivated}),t.initializeApi();var o=R.getPendingEvents();if(o&&(I.dispatch(c.LOAD_PENDING_EVENTS,{events:o}),R.retryPendingEvents(o)),y.on({filter:{type:"lifecycle",name:"activate"},handler:t.activate}),f.emitInitializedEvent(),!q.shouldActivate())return O.resolve();var u=[];if(rn.isDisabled())sn();else{var s=t.initializeXDomainStorage();if(u.push(s),Boolean(rn.getCanonicalOrigins())){var l=M.makeTimeoutPromise(1e3);O.race([s,l])["catch"]((function(n){k.error("Failed to initialize xDomain storage: ",n)})).then(sn)["catch"](an.handleError)}else sn()}return O.all(u)}k.log("Controller / Is disabled")},t.activate=function(){try{var n=[];k.log("Activated client"),gn(w.Lifecycle.preActivate);var t=h.now();I.dispatch(c.ACTIVATE,{activationId:String(t),activationTimestamp:t});var e=Z.getAll();V.registerViews(e),F.setId(F.getOrGenerateId()),n.push(s.trackPostRedirectDecisionEvent()),I.dispatch(c.MERGE_VARIATION_ID_MAP,{variationIdMap:F.getVariationIdMap()}),I.dispatch(c.MERGE_PREFERRED_LAYER_MAP,{preferredLayerMap:F.getPreferredLayerMap()}),gn(w.Lifecycle.postVisitorProfileLoad),n.push((v=X.getAllPlugins(w.PluginTypes.visitorProfileProviders),g=Q.getVisitorProfile(),F.populateEagerVisitorData(v,g)).then((function(){k.log("Populated visitor profile")})));var r=dn(),o=p.decideGlobal(r);k.log("Made global decision",r,"->",o),I.dispatch(c.RECORD_GLOBAL_DECISION,o);var a=s.trackClientActivation();a?k.log("Tracked activation event",a):k.log("Not tracking activation event");var u=cn.setUpViewActivation(e),l=[];return i.each(u,(function(n){l=l.concat(V.activateMultiple([n]))})),gn(w.Lifecycle.postViewsActivated),gn(w.Lifecycle.postActivate),f.emitActivatedEvent(),O.all(n).then((function(){y.emit({type:b.TYPES.LIFECYCLE,name:"activateDeferredDone"}),k.log("All immediate effects of activation resolved")}),d.emitError)}catch(m){return d.emitError(m),O.reject(m)}var v,g},cn.setUpViewActivation=function(n){var t=[];return i.each(n,(function(n){i.isBoolean(nn.getViewState(n.id).isActive)&&V.isActivationTypeImmediate(n.activationType)?k.debug("Skipping page: already evaluated, presumably at the edge",V.description(n)):V.shouldTriggerImmediately(n.activationType)?t.push(n):n.activationType===w.ViewActivationTypes.callback?(k.debug("Setting up conditional activation for Page",V.description(n)),cn.activateViewOnCallback(n)):n.activationType===w.ViewActivationTypes.polling?(k.debug("Setting up polling activation for Page",V.description(n)),C.pollFor(i.partial(E.apply,n.activationCode),null,i.partial(L.isTimedOut,h.now())).then((function(){V.activateMultiple([n])}))["catch"]((function(t){k.warn("Failed to activate view ",n,t)}))):n.activationType!==w.ViewActivationTypes.manual&&d.emitError(new Error("Unknown view activationType: "+n.activationType))})),t},cn.activateViewOnCallback=function(n){var t={pageId:n.id};Object.defineProperty(t,"isActive",{get:function(){return nn.isViewActive(n.id)}});try{E.apply(n.activationCode,[function(t){var e=i.extend({},t,{pageName:n.apiName,type:"page"});on.push(e)},t])}catch(r){var e=new o("("+r.toString()+") in activationCode for "+V.description(n));d.emitError(e,{originalError:r,userError:!0})}},t.onViewsActivated=function(n){var e,r=n.data.views,o=i.map(r,"id");try{if(!tn.getBucketingId())throw new Error("View activated with no visitorId set");var a=function(n){var e=K.getAllByPageIds(n),r=q.getForceVariationIds(),o=q.getForceAudienceIds(),a=!i.isEmpty(r);a&&k.log("Force variations are in use. Disabling mutual exclusivity.");var u=a?{individual:e}:i.reduce(e,(function(n,t){return t.groupId?n.groups[t.groupId]||(n.groups[t.groupId]=Y.get(t.groupId)):n.individual.push(t),n}),{groups:{},individual:[]});k.log("Deciding Campaigns/Experiments for Page(s)",n);var c=i.map(u.groups,A.description).join(", ");k.log("Groups:",c);var s=i.map(u.individual,T.description).join(", ");k.log("Campaigns/Experiments not in Groups (by Campaign id):",s);var f=i.map(u.groups,i.partial(vn,r,o,n))||[],l=i.map(u.individual,(function(e){var a=i.filter(e.pageIds,i.partial(i.includes,n));return t.decideAndExecuteLayerASAP(r,o,a,e)})),d=f.concat(l);return O.all(d).then((function(t){var e=i.filter(t,(function(n){return!!n}));return k.log("All Campaigns/Experiments for Page(s) (by Campaign id)",n,"resolved:",i.map(e,T.description).join(", ")),e}))}(o)["catch"](d.emitError);return e=O.all(i.map(r,(function(n){var t=function(){V.parseViewTags(n);var t=s.trackViewActivation(n);t?k.log("Tracked activation for Page",V.description(n),t):k.log("Not Tracking activation for Page",V.description(n))};return _.isReady()?O.resolve(t()):C.pollFor(_.isReady,1e3).then(t)}))),O.all([a,e])}catch(u){d.emitError(u)}},t.onPageDeactivated=function(n){var t=n.data.page,e=G.getAllActionIdsByPageId(t.id);i.each(e,(function(n){var e=G.getActionState(n);e&&(i.each(e,(function(n,e){if(n.cancel)try{n.cancel(),k.debug("Controller / Canceled change",e,"observation due to deactivation of page:",t)}catch(i){k.error("Controller / Error canceling change",e,"observation upon deactivation of page.",i)}if(t.undoOnDeactivation&&n.undo)try{n.undo(),k.debug("Controller / Undid change",e,"due to deactivation of page:",t)}catch(r){k.error("Controller / Error undoing change upon deactivation of page.",r)}})),I.dispatch(c.REMOVE_ACTION_STATE,{actionId:n}),k.debug("Controller / Undid changes and/or canceled change observation due to deactivation of page:",t,n))}))},t.initializeApi=function(){var n={push:on.push};n.get=on.get;var t=window.optimizely;i.isArray(t)&&i.each(t,(function(t){n.push(t)})),n.data={note:"Obsolete, use optimizely.get('data') instead"},n.state={},window.optimizely=n},t.persistItemsWithId=function(n){return i.each(n,(function(n,t){F.checkKeyForVisitorId(t)&&S.setItem(t,n)})),n},t.initializeXDomainStorage=function(){var n=e(6332),r=!!F.getCurrentId(),o=!!r&&F.hasSomeData();r?o?k.log("xd / Existing visitor; has data on this origin"):k.log("xd / Existing visitor; new to this origin"):k.log("xd / New visitor");var a=H.getAccountId(),u="https://a22744560884.cdn.optimizely.com".replace("__SUBDOMAIN__","a"+a+"."),s="/client_storage/a"+a+".html";n.subscribe((function(n,t){F.checkKeyForVisitorId(n)&&S.setItem(n,t)}));var l=n.fetchAll().then((function(t){if(!tn.getVisitorIdLocator()){var e=rn.getCanonicalOrigins();if(e){var i=n.getXDomainUserId(t,e);i&&(k.log("Syncing cross-origin visitor randomId:",i),F.maybePersistVisitorId({randomId:i}))}}return F.deleteOldForeignData(),t})).then(t.persistItemsWithId).then((function(n){if(F.loadForeignData(),r&&!o){var t=!i.isEmpty(n);k.debug("xd / Loaded foreign data? ",t),ln(t)}k.log("Loaded visitor data from foreign origins"),f.emitOriginsSyncedEvent()}),(function(n){throw r&&!o&&(k.debug("xd / Failed to load foreign data:",n),ln(!1,n)),n}));return O.all([n.load(u,s)["catch"]((function(n){throw k.debug("xd / Failed to load iframe:",n),r&&!o&&ln(!1,n),n})),l["catch"]((function(n){k.debug("xd / Ignored error syncing foreign data (expected if waitForOriginSync used):",n.message),k.debug("xd / Enqueuing sync to happen after visitorId set."),I.dispatch(c.ADD_CLEANUP_FN,{lifecycle:w.Lifecycle.postVisitorProfileLoad,cleanupFn:f.emitOriginsSyncedEvent})}))])},t.decideAndExecuteLayerASAP=function(n,e,r,o){return new O((function(a,d){try{!function(n,t,e,r,o){if(t.length||e.length)return void o(dn([],void 0,r));var a=T.relatedAudienceIds(n),u=i.reduce(a,(function(n,t){var e=j.get(t);return!e||n.push(e),n}),[]),s=X.getAllPlugins(w.PluginTypes.audienceMatchers);if(J.getSampleRum()){var f={};if(i.each(u,(function(n){i.extend(f,hn(n.conditions,s))})),!i.isEmpty(f)){var d=i.keys(f);I.dispatch(c.RECORD_AUDIENCE_USAGE,{audienceTypes:d,layerId:n.id})}}!function(n,t,e,r){var o=i.reduce(n,(function(n,e){return i.extend(n,l.requiredAudienceFieldsForConditions(e.conditions,t))}),{}),a=i.reduce(o,(function(n,t){if(i.isUndefined(F.getAttribute(t))){var e=F.getPendingAttributeValue(t);i.isUndefined(e)||n.push(e)}return n}),[]);if(0===a.length)return r();var u=[].concat(n),c=x.firstToResolve(i.map(a,(function(n){return O.resolve(n).then((function(){var n=Q.getVisitorProfile();if(u=i.filter(u,(function(e){return i.isUndefined(l.isInAudience(n,e,t))})),!i.isEmpty(u))throw new Error("At least one audience is still pending")}))})));O.race([c,new O((function(n,t){U.setTimeout(t,e)}))]).then((function(){k.log("Activating Campaign after pending Audiences resolved",n),r()}),(function(){k.log("Activating Campaign after timeout on Audiences",n),r()}))}(u,s,T.getActivationTimeout(n),(function(){var t=dn(u,n,r);i.map(t,(function(t){!function(n,t,e){var r=i.map(n.audienceIds,i.bind(j.get,j)),o=i.filter(t,(function(t){return!i.includes(n.audienceIds,t.id)}));k.log("When deciding Campaign",T.description(e),"visitor is in audiences:",pn(r),"and not in audiences:",pn(o))}(t,u,n)})),o(t)}))}(o,n,e,r,(function(l){i.each(l,(function(a){var l=a.pageId?[a.pageId]:r;k.debug("Deciding layer: ",o,"with decisionTicket: ",a,"and actionViewIds: ",l),function(n,e,r,o,a){var l=T.description(n);k.log("Activating Campaign",l,"on Page(s)",o),r.length&&(k.log("Applying force audienceIds:",r,"to Campaign",l),(a=i.cloneDeep(a)).audienceIds=r);var d=t.decideLayer(n,a,e),v=!(!e.length&&!r.length),h=t.getActionsForDecision(n,d,v),g=function(n,t){return i.filter(n,(function(n){return i.isUndefined(n.pageId)||i.includes(t,n.pageId)}))}(h.actions,o);if(h.maybeExecute&&function(n,t,e,r){var o=T.description(t);k.log("Preparing actions",n,"for Campaign",o,"on Page(s)",r),i.forEach(n,u.prepareAction)}(g,n,0,o),i.forEach(o,(function(){s.trackDecisionEvent(d,a)})),f.emitLayerDecided({layer:n,decisionTicket:a,decision:d}),d.error)throw d.error;if(J.getSampleRum()){I.dispatch(c.RECORD_LAYER_POLICY_USAGE,{policy:n.policy,layerId:n.id});var m=function(n){var t={};return i.each(n,(function(n){i.each(n.changeSet,(function(n){t[n.type]||(t[n.type]=!0)}))})),t}(h.actions);I.dispatch(c.RECORD_CHANGE_TYPE_USAGE,{changeTypes:i.keys(m),layerId:n.id}),i.isEmpty(n.integrationSettings)||I.dispatch(c.RECORD_INTEGRATION_USAGE,{integrations:T.getIntegrationTypes(n),layerId:n.id})}if(!p.isInCohort(d))return void k.log("Not activating Campaign: "+T.description(n)+"; not in the cohort because:",d.reason);h.maybeExecute&&function(n,t,e,r){var o=T.description(t);k.log("Executing actions",n,"for Campaign",o,"on Page(s)",r),O.all(i.map(n,(function(n){return u.executePreparedAction(n).then(i.partial(f.emitActionAppliedEvent,n))}))).then((function(){k.log("All page actions for",e,"applied:",n),f.emitActionsForDecisionAppliedEvent(e,n)}))["catch"]((function(n){k.warn("Error evaluating page actions for decision",e,"because:",n)}))}(g,n,d,o)}(o,n,e,l,a)})),a(o)}))}catch(v){k.error("Error getting decision for Campaign: "+T.description(o),v),d(v)}}))},t.decideLayer=function(n,t,e){var i;var r=T.description(n);i=e.length?p.getDummyLayerDecision(n,e):p.decideLayer(n,t),k.log("Recording decision for Campaign",r,t,"->",i),T.recordLayerDecision(n.id,t,i),i.variationId&&i.experimentId&&F.updateVariationIdMap(n.id,i.experimentId,i.variationId),n.groupId&&F.updatePreferredLayerMap(n.groupId,n.id);return i},t.getActionsForDecision=function(n,t,e){var i=T.description(n),r="NOT applying changes for Campaign",o={actions:[],maybeExecute:!1};if(o.actions=[].concat(G.getLayerActions(t.layerId)||[],G.getExperimentActions(t.experimentId)||[],G.getExperimentVariationActions(t.experimentId,t.variationId)||[]),!e&&H.isGlobalHoldback())return k.log(r,i,"(visitor is in global holdback)"),o;if(t.isLayerHoldback)return k.log(r,i,"(visitor is in layer holdback)"),o;if(!t.experimentId||!t.variationId)return k.log(r,i,"(visitor is not eligible for any Experiments)"),o;return o.maybeExecute=!0,k.log("Got Actions for Campaign:",i,o.actions),o}},2898:function(n,t,e){var i=e(7704).Promise,r=e(7052),o=e(6321).get("stores/plugins"),a=e(311),u=e(8642);t.create=function(n,t,e){var c={identifier:n.id,action:t,startTime:e||r.now()};try{var s=o.getPlugin(a.PluginTypes.changeAppliers,n.type);if(!s)throw new Error("Unrecognized change type "+n.type);return new s(n,c)}catch(f){return u.error("Change applier was never properly constructed:",f),{apply:function(){return i.reject(f)}}}}},1253:function(n){n.exports={SELECTOR_POLLING_MAX_TIME:2e3,CHANGE_DATA_KEY:"optimizelyChangeData",CHANGE_ID_ATTRIBUTE_PREFIX:"data-optly-"}},2413:function(n,t,e){var i=e(2600),r=e(1253).CHANGE_DATA_KEY;function o(n,t){return[n,t].join("_")}t.getData=function(n,t,e){var i=o(t,e);return n[r]&&n[r][i]?n[r][i]:null},t.hasData=function(n){return Boolean(n&&n[r]&&!i.isEmpty(n[r]))},t.removeData=function(n,t,e){n[r]&&delete n[r][o(t,e)]},t.setData=function(n,t,e,i){if("object"!=typeof i)throw new Error("setData expects an object");n[r]||(n[r]={}),n[r][o(t,e)]=i}},2434:function(n,t,e){var i=e(1837);n.exports={changeType:{CUSTOM_CODE:"custom_code",ATTRIBUTE:"attribute",APPEND:"append",REARRANGE:"rearrange",REDIRECT:"redirect",WIDGET:"widget"},DOMInsertionType:{AFTER:"after",APPEND:"append",BEFORE:"before",PREPEND:"prepend"},insertAdjacentHTMLType:{AFTER_BEGIN:"afterbegin",AFTER_END:"afterend",BEFORE_BEGIN:"beforebegin",BEFORE_END:"beforeend"},selectorChangeType:{CLASS:"class",HTML:"html",HREF:"href",SRC:"src",STYLE:"style",TEXT:"text",HIDE:"hide",REMOVE:"remove"},changeApplierState:i({APPLIED:null,APPLYING:null,UNAPPLIED:null,UNDOING:null}),changeState:i({BLOCKED:null,UNAPPLIED:null,APPLIED:null,APPLYING:null,UNDOING:null,TIMED_OUT:null,IGNORED:null,ERROR:null})}},234:function(n,t,e){var i=e(2600),r=e(7547),o=e(6663),a=e(6941),u=e(5202).U,c=e(7052),s=e(6321),f=e(3637),l=e(8642),d=e(7929).Promise,v=e(7499),h=s.get("stores/global"),p=s.get("stores/action_data"),g=s.get("stores/change_data"),m=s.get("stores/session"),_=e(2898);e(3056).initialize();var w=u("ActionError");function y(n,t,e){if(p.getActionState(t.id)){var o=p.getChangeApplier(n.id,t.id);if(i.isUndefined(o)){var a={changeId:n.id,actionId:t.id,changeApplier:_.create(n,t,e)};f.dispatch(r.SET_CHANGE_APPLIER,a)}else l.warn("Action / Attempted to prepare a change which is already being applied: ",n)}else l.warn("Action / Attempted to prepare change for inactive action: ",t)}function b(n,t,e,r){if(!i.includes(r,t)){if(!n[String(t)]){var u=g.getChange(t);if(!u){var s="Change with id "+t+" is absent";return r.length&&(s+=" but listed as a dependency for "+r[r.length-1]),void l.warn(s)}n[String(t)]=new d((function(s){var f=i.map(u.dependencies||[],(function(i){return b(n,i,e,r.concat([t]))}));if(u.src){var h="change_"+u.src,m=a.makeAsyncRequest(h,(function(){return v.addScriptAsync("https://cdn.optimizely.com/public/22744560884/data"+u.src,(function(){a.resolveRequest(h)}))})).then((function(){var n=g.getChange(u.id);n||o.emitError(new w("Failed to load async change from src: "+u.src)),y(n,e,c.now())}));f.push(m)}d.all(f).then((function(){var n=c.now(),i=p.getChangeApplier(t,e.id);return i?(l.debug("Action / Applying change:",u),i.apply().then((function(t){t?l.log(t):l.debug("Action / Applied change for the first time in "+(c.now()-n)+"ms:",u),s()}))):(l.debug("Action / Not applying change ",t," - No changeApplier found."),void s())}))["catch"]((function(n){l.error("Action / Failed to apply change:",u,n),s()}))}))}return n[String(t)]}l.error("Change with id "+t+" has circular dependencies: "+r.concat(t))}t.prepareAction=function(n){l.debug("Action / Preparing:",n),f.dispatch(r.ACTION_EXECUTED,{actionId:n.id,sessionId:m.getSessionId(),layerId:n.layerId,pageId:n.pageId,timestamp:c.now(),activationId:h.getActivationId()});var t=c.now();i.forEach(n.changeSet,(function(e){var o=i.isObject(e)?e.id:e,a=g.getChange(o);a||(f.dispatch(r.ADD_CHANGE,e),a=g.getChange(e.id)),a.src||y(a,n,t)}))},t.executePreparedAction=function(n){l.debug("Action / Executing:",n);var t={},e=i.map(n.changeSet,(function(e){var r=i.isObject(e)?e.id:e;return b(t,r,n,[])}));return d.all(e).then((function(){l.debug("changes for action id="+n.id+" applied")}))}},3056:function(n,t,e){var i=e(1253),r=e(6321).get("stores/directive");function o(){("interactive"===document.readyState||"complete"===document.readyState)&&(t.domReadyTime=Date.now())}t.domReadyTime=null,t.initialize=function(){o(),document.addEventListener("readystatechange",o,!0)},t.isTimedOut=function(n){var e=Date.now();if(!t.domReadyTime||!n)return!1;var o=Math.max(n,t.domReadyTime);return r.isEditor()&&(o=t.domReadyTime),!(e-o<i.SELECTOR_POLLING_MAX_TIME)}},7661:function(n,t,e){var i=e(2600),r=e(7547),o=e(6663),a=e(811),u=e(7052),c=e(536),s=e(6321),f=e(3485),l=e(311),d=e(620),v=e(3677),h=e(8197),p=e(5376),g=e(3637),m=e(5034),_=e(8642),w=(e(4819),e(7929).Promise),y=e(2448),b=e(9223),E=e(9856),I=e(4292),A=e(9269),T=s.get("stores/client_metadata"),S=s.get("stores/global"),k=s.get("stores/session"),R=s.get("stores/view"),N=s.get("stores/plugins"),D=s.get("stores/layer"),C=s.get("stores/layer_data"),O=s.get("stores/observed_redirect"),x=s.get("stores/pending_redirect"),P=s.get("stores/visitor"),M=s.get("stores/directive"),L=s.get("stores/event_data"),V=s.get("stores/visitor_id");function F(n,t){return i.extend({},n,{isLayerHoldback:t,isGlobalHoldback:!1,clientName:i.isNull(n.clientName)?c.NAME:n.clientName,integrationStringVersion:i.isNull(n.integrationStringVersion)?1:n.integrationStringVersion,anonymizeIP:i.isNull(S.getAnonymizeIP())?void 0:S.getAnonymizeIP(),activationId:S.getActivationId(),decisionTicketAudienceIds:[],sessionId:k.getSessionId(),activeViewStates:[],userFeatures:j(P.getVisitorProfile()),layerStates:D.getLayerStatesForAnalytics()})}function U(n){var t=y.getReferrer()||f.getReferrer();return{eventId:A.generate(),timestamp:u.now(),revision:S.getRevision(),clientName:T.getClientName(),clientVersion:T.getClientVersion(),projectId:S.getProjectId(),accountId:S.getAccountId(),activationId:S.getActivationId(),sessionId:k.getSessionId(),isGlobalHoldback:S.isGlobalHoldback(),namespace:S.getNamespace(),referrer:t,visitorId:V.getRandomId(),activeViewStates:n.activeViewStates,layerStates:n.layerStates,userFeatures:j(n.visitorProfile)}}function z(n){var t,e;return n.pageId?(t=n.pageId,(e=R.getViewState(t))&&e.isActive?e.metadata:{}):{}}function j(n){var t=N.getAllPlugins(l.PluginTypes.visitorProfileProviders),e=i.filter(t,{shouldTrack:!0}),r={id:null,type:null,name:"",value:null,shouldIndex:!0};return i.reduce(e,(function(t,e){try{var o=e.provides,a=n[o],u=[];if(!i.isUndefined(a)){i.isObject(a)?u=i.map(a,(function(n,t){var e=i.isObject(n)?n:{value:n};return i.extend({},{type:o,name:t},e)})):u.push({type:o,value:a});var c=i(u).map((function(n){return i.pick(i.extend({},r,n),i.keys(r))})).filter((function(n){return!!n.value})).value();t=t.concat(c)}}catch(s){_.warn("Error evaluating userFeature against visitorProfile:",s)}return t}),[])}function G(n,t,e){var r=function(n,t){var e=[];return i.each(N.getAllPlugins(l.PluginTypes.analyticsTrackers),(function(i,r){if(i[n]&&(!t||!i[t]))try{e.push({name:r,hookFn:s.evaluate(i[n])})}catch(o){_.error(o)}})),e}(n,e);_.debug("Found "+r.length+" analytics integrations defining a "+n+" hook"),_.debug("Calling each with data: ",t),i.each(r,(function(n){try{_.debug("Calling plugin: "+n.name),n.hookFn(t),_.debug("Called plugin: "+n.name)}catch(e){_.error(e)}}))}function B(n,t,e){var r=function(n,t){0;var e=[];return i.each(N.getAllPlugins(l.PluginTypes.analyticsTrackers),(function(r,o){i.includes(t,r[n])&&e.push({name:o,hookFn:r.trackLayerDecision})})),e}(n,t);_.debug("Found "+r.length+" analytics integrations  defining a trackLayerDecision "+n+" timing of "+t.join("|")),_.debug("Calling each with data: ",e),i.each(r,(function(n){try{_.debug("Calling plugin: "+n.name),n.hookFn(e),_.debug("Called plugin: "+n.name)}catch(t){_.error(t)}}))}t.trackClientActivation=function(){if(M.shouldSendTrackingData()){var n,t=(n=U({activeViewStates:[],visitorProfile:P.getVisitorProfile(),layerStates:D.getLayerStatesForAnalytics()}),i.extend(n,{eventTags:{}}));return G("onClientActivation",t),t}},t.trackCustomEvent=function(n,t,e){t=t||{},e||(e=L.getByApiName(n));var r=function(n,t,e){var r=U({activeViewStates:R.getActiveViewStates(),visitorProfile:P.getVisitorProfile(),layerStates:D.getLayerStatesForAnalytics()}),o=e&&e.pageId?z(e):R.getActiveViewTags(),a=i.extend({},o,t),u=e&&e.category?e.category:d.OTHER;return i.extend(r,{eventEntityId:e&&e.id,eventApiName:n,eventCategory:u,eventTags:a})}(n,t,e),u={name:n,type:p.CUSTOM,category:r.eventCategory,tags:i.omit(r.eventTags,"revenue")};if(i.isUndefined(t.revenue)||(u.revenue=t.revenue),o.emitAnalyticsEvent({name:e?e.name||e.apiName:n,apiName:e?e.apiName:void 0,type:p.CUSTOM,tags:i.omit(r.eventTags,"revenue"),category:r.eventCategory,metrics:u.revenue?{revenue:u.revenue}:{}},!M.shouldSendTrackingData()),M.shouldSendTrackingData())return a.addEvent(u),G("onCustomEvent",r),r},t.trackDecisionEvent=function(n,t,e){e||(e=C.get(n.layerId));var o=A.generate();g.dispatch(r.RECORD_LAYER_DECISION_EVENT_ID,{layerId:n.layerId,pageId:t.pageId,decisionId:o});var a=function(n,t,e,r){var o=null,a=null,c=null;if(t.experimentId){var s=i.find(r.experiments,{id:t.experimentId});if(s&&(o=s.name||null,c=s.integrationSettings,t.variationId)){var l=i.find(s.variations,{id:t.variationId});l&&(a=l.name||null)}}var d=y.getReferrer()||f.getReferrer();return{sessionId:k.getSessionId(),decisionTicketAudienceIds:e.audienceIds,visitorId:V.getRandomId(),decisionId:n,activationId:S.getActivationId(),namespace:S.getNamespace(),timestamp:u.now(),pageId:e.pageId||null,variationId:t.variationId,variationName:a,experimentId:t.experimentId,experimentName:o,layerId:t.layerId,layerName:r.name,layerPolicy:r.policy,accountId:S.getAccountId(),projectId:S.getProjectId(),revision:String(S.getRevision()),clientName:T.getClientName(),clientVersion:T.getClientVersion(),referrer:d,integrationStringVersion:r.integrationStringVersion||1,integrationSettings:i.extend({},r.integrationSettings,c)}}(o,n,t,e),c=x.isExpectingRedirect(),s=x.getLayerId(),l=m.description(e);if(c&&s===e.id&&(b.persist(a,"COOKIE"),_.log("Relaying decision for redirect Campaign",l)),M.shouldSendTrackingData()){var d=F(a,n.isLayerHoldback);if(c&&s===e.id){var v=I.TrackLayerDecisionTimingFlags.preRedirectPolicy;d.timing=v,B(v,[I.PreRedirectPolicies.PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT],d),_.log("Called trackLayerDecision for redirect Campaign",l,d)}else{v=I.TrackLayerDecisionTimingFlags.nonRedirectPolicy;d.timing=v,B(v,[I.NonRedirectPolicies.TRACK_IMMEDIATELY],d),_.log("Called trackLayerDecision for non-redirect Campaign",l,d)}}else _.log("Analytics / Not tracking decision for Campaign",m.description(e))},t.trackPostRedirectDecisionEvent=function(){if(!M.shouldSendTrackingData()||O.hasTracked())return w.resolve();var n=O.get();if(!n)return w.resolve();var t=F(n,!1),e=I.TrackLayerDecisionTimingFlags.postRedirectPolicy;t.timing=e,B(e,[I.PostRedirectPolicies.TRACK_IMMEDIATELY],t);var i=new w((function(n){var t=v.on({filter:{type:h.TYPES.LIFECYCLE,name:"originsSynced"},handler:function(){n(),v.off(t)}})})),o=E.makeTimeoutPromise(1e3);return w.race([i,o]).then((function(){_.log("Calling trackers after successful sync")}),(function(n){_.warn("Calling trackers after failed sync:",n)})).then((function(){(t=F(n,!1)).timing=I.TrackLayerDecisionTimingFlags.postRedirectPolicy,B(I.TrackLayerDecisionTimingFlags.postRedirectPolicy,[I.PostRedirectPolicies.TRACK_AFTER_SYNC],t),g.dispatch(r.REGISTER_TRACKED_REDIRECT_DATA)}))["catch"]((function(n){_.error("Error when calling trackers after sync:",n)}))},t.trackClickEvent=function(n){var t=function(n){var t=U({activeViewStates:R.getActiveViewStates(),visitorProfile:P.getVisitorProfile(),layerStates:D.getLayerStatesForAnalytics()}),e=n.config&&n.config.selector?n.config.selector:n.eventFilter.selector,r=n.apiName,o=n.category||d.OTHER,a=n.id,u=z(n);return i.extend(t,{eventApiName:r,eventCategory:o,eventEntityId:a,eventTags:u,pageId:n.pageId,selector:e})}(n),e={name:n.apiName,type:n.eventType,category:t.eventCategory,tags:t.eventTags};if(o.emitAnalyticsEvent({name:n.name||n.apiName,apiName:n?n.apiName:void 0,type:n.eventType,category:t.eventCategory,tags:t.eventTags,metrics:{}},!M.shouldSendTrackingData()),M.shouldSendTrackingData())return a.addEvent(e),G("onClickEvent",t),t},t.trackViewActivation=function(n,t){if(t||(t=R.getViewState(n.id)),t.isActive){var e=function(n,t){var e=U({activeViewStates:R.getActiveViewStates(),visitorProfile:P.getVisitorProfile(),layerStates:D.getLayerStatesForAnalytics()});return i.extend(e,{pageId:n.id,pageApiName:n.apiName,viewCategory:n.category,eventTags:t.metadata})}(n,t);if(o.emitAnalyticsEvent({name:n.name||e.pageApiName,apiName:e.pageApiName,type:p.PAGEVIEW,category:e.viewCategory,tags:e.eventTags,metrics:{}},!M.shouldSendTrackingData()),M.shouldSendTrackingData())return a.addEvent({name:e.pageApiName,type:p.PAGEVIEW,category:e.viewCategory,tags:e.eventTags}),g.dispatch(r.TRACK_VIEW_ACTIVATED_EVENT,{pageId:n.id,eventData:e}),G("onPageActivated",e),e}else _.debug("Inactive view passed to `trackViewActivation`")}},9223:function(n,t,e){var i=e(2600),r=e(7547),o=e(8549),a=e(6663),u=e(6321),c=e(311),s=e(3637),f=e(8642),l=e(4292),d=u.get("stores/plugins"),v=".",h=[{name:"sessionId",relayName:"s"},{name:"decisionTicketAudienceIds",relayName:"as",valueToValueString:function(n){return i.map(n,encodeURIComponent).join(",")},encodeValueString:i.identity,decodeValueString:i.identity,valueFromValueString:function(n){return i.map(n.split(","),o.safeDecodeURIComponent)}},{name:"decisionId",relayName:"d"},{name:"activationId",relayName:"aId"},{name:"pageId",relayName:"vId",isNullable:!0},{name:"variationId",relayName:"v",isNullable:!0},{name:"referrer",relayName:"r"},{name:"timestamp",relayName:"t",valueFromValueString:Number},{name:"visitorId",relayName:"i"},{name:"projectId",relayName:"p"},{name:"revision",relayName:"n"},{name:"clientName",relayName:"cN",isNullable:!0},{name:"clientVersion",relayName:"cV"},{name:"namespace",relayName:"ns"},{name:"accountId",relayName:"a"},{name:"layerId",relayName:"l"},{name:"layerName",relayName:"lN",isNullable:!0},{name:"layerPolicy",relayName:"lP"},{name:"experimentId",relayName:"x",isNullable:!0},{name:"experimentName",relayName:"xN",isNullable:!0},{name:"variationName",relayName:"vN",isNullable:!0},{name:"integrationStringVersion",relayName:"isv",valueFromValueString:Number,isNullable:!0},{name:"integrationSettings",relayName:"iS",isMulti:!0,valueToValueString:function(n,t){var e=null;if(n){var r=d.getPlugin(c.PluginTypes.analyticsTrackers,t);if(r&&i.isFunction(r.serializeSettings))try{e=r.serializeSettings(n)}catch(o){f.warn("Analytics / Failed to persist integrationSettings for plugin:",t,o)}}return e},valueFromValueString:function(n,t){var e=null,r=d.getPlugin(c.PluginTypes.analyticsTrackers,t);if(r&&i.isFunction(r.deserializeSettings))try{e=r.deserializeSettings(n)}catch(o){f.warn("Analytics / Failed to persist integrationSettings for plugin:",t,o)}return e},isNullable:!0}],p={},g={};i.forEach(h,(function(n){p[n.name]=n,g[n.relayName]=n})),t.persist=function(n,t){t===l.RedirectRelayMedia.COOKIE?function(n){try{var t=function(n){var t=[],e=i.reduce(n,(function(n,e,r){var o=p[r];return o?(o.isMulti?i.forEach(e,(function(t,e){t=o.valueToValueString?o.valueToValueString(t,e):String(t),i.isNull(t)||(t=(o.encodeValueString||encodeURIComponent)(t),n.push(encodeURIComponent(o.relayName+v+e)+"="+t))})):i.isNull(e)||(e=(o.valueToValueString||String)(e),e=(o.encodeValueString||encodeURIComponent)(e),n.push(o.relayName+"="+e)),n):(t.push(r),n)}),[]);if(t.length)throw new Error("Relay / Don't know how to relay some fields: "+t);return e.sort(),e.join("&")}(n)}catch(e){return f.error("Relay / Error computing redirect relay cookie: ",e),void a.emitError(e)}f.debug("Relay / Setting redirect relay cookie:",t);try{o.set(c.COOKIES.REDIRECT,t,{maxAge:5,encodeValue:!1})}catch(r){f.error("Relay / Failed to set redirect relay cookie",r),a.emitError(r)}}(n):f.error("Relay / Unsupported redirect relay medium: "+t)},t.load=function(n){if(n||(n=function(){var n=o.get(c.COOKIES.REDIRECT,!1);if(n)return f.log("Relay / Found redirect cookie:",n),n}()),n){var t=function(n){var t={},e=n.split("&");return i.forEach(e,(function(n){var e=n.split("=");if(2===e.length){var r=o.safeDecodeURIComponent(e[0]),u=g[r];if(u||(u=i.find(h,(function(n){return n.isMulti&&0===r.indexOf(n.relayName+v)})))){var c=e[1];try{if(u.isMulti){t[u.name]=t[u.name]||{};var s=r.substring(u.relayName.length+v.length);c=(u.decodeValueString||o.safeDecodeURIComponent)(c),c=(u.valueFromValueString||i.identity)(c,s),t[u.name][s]=c}else c=(u.decodeValueString||o.safeDecodeURIComponent)(c),c=(u.valueFromValueString||i.identity)(c),t[u.name]=c}catch(l){return f.warn("Relay / Skipping segment due to decode or parse error:",n,l),void a.emitError(l)}}else f.warn("Relay / Skipping segment with unknown field identifier:",n,r)}else f.warn("Relay / Skipping invalid segment:",n)})),t}(n);if(t){var e=[];if(i.forEach(h,(function(n){(i.isNull(t[n.name])||i.isUndefined(t[n.name]))&&(n.isNullable?t[n.name]=null:(delete t[n.name],e.push(n.name)))})),!e.length)return s.dispatch(r.LOAD_REDIRECT_DATA,t),s.dispatch(r.ADD_CLEANUP_FN,{lifecycle:c.Lifecycle.postVisitorProfileLoad,cleanupFn:function(){var n,e;e=(n=t).pageId||void 0,s.dispatch(r.RECORD_LAYER_DECISION,{layerId:n.layerId,decision:{layerId:n.layerId,experimentId:n.experimentId,variationId:n.variationId,isLayerHoldback:!1},decisionTicket:{audienceIds:n.decisionTicketAudienceIds,bucketingId:n.visitorId,globalHoldback:0,preferredVariationMap:void 0,pageId:e,activationId:n.activationId},sessionId:n.sessionId,activationId:n.activationId,timestamp:n.timestamp,revision:n.revision,namespace:n.namespace,pageId:e}),s.dispatch(r.RECORD_LAYER_DECISION_EVENT_ID,{layerId:n.layerId,pageId:e,decisionId:n.decisionId}),s.dispatch(r.ACTION_EXECUTED,{sessionId:n.sessionId,layerId:n.layerId,pageId:n.pageId,timestamp:n.timestamp,activationId:n.activationId})}}),t;f.error("Relay / Observed redirect data with missing fields:",e)}}}},6663:function(n,t,e){var i=e(3677);t.emitError=function(n,t,e){i.emit({type:"error",name:n.name||"Error",data:{error:n,metadata:t}},e||!1,!0)},t.emitInternalError=function(n,e){t.emitError(n,e,!0)},t.emitAnalyticsEvent=function(n,t){var e={type:"analytics",name:"trackEvent",data:n};i.emit(e,t)}},5346:function(n,t,e){var i=e(2600),r=e(8131),o=e(9876),a=e(8642),u=e(7434);function c(n,t){var e="function"==typeof n?n(t):n;return"string"==typeof e&&(e=[e]),i.isArray(e)?e:(a.warn("Couldn't determine fieldsNeeded for matcher; assuming []"),[])}function s(n){return n.name?n.name+" ("+n.id+")":n.id}t.isInAudience=function(n,t,e){var u,f=function(n,t){return function(e){var r=e.type,u=t[r];if(!u)throw new Error("Audience / No matcher found for type="+r);if(u.fieldsNeeded)for(var s=c(u.fieldsNeeded,e),f=0;f<s.length;f++){var l=s[f],d=o.getFieldValue(n,l);if(i.isUndefined(d))return void a.debug("Audience / Required field",l,"for type",r,"has no value")}a.debug("Matching condition:",e,"to values:",n);var v=u.match(n,e);if(!i.isUndefined(v))return!!v}}(n,e);a.groupCollapsed("Checking audience",t.name,t.id,t),a.debug("Visitor Profile:",n);try{var l=r.evaluate(t.conditions,f)}catch(d){u=d,l=!1}return a.groupEnd(),u&&a.error("Audience / Error evaluating audience",s(t),":",u),a.log("Is "+(l?"in":"NOT in")+" audience:",s(t)),l},t.requiredAudienceFieldsForConditions=function f(n,t){var e={};return i.each(n,(function(n){if(i.isArray(n))i.extend(e,f(n,t));else if(i.isObject(n)){var r=t[n.type];if(r){var o=c(r.fieldsNeeded,n);i.each(o,(function(n){e[u.serializeFieldKey(n)]=n}))}}})),e}},9893:function(n,t){t.FIELDS={NAME:"n",TIME:"t",TYPE:"y",CATEGORY:"c",REVENUE:"r",SESSION_ID:"s",OPTIONS:"o",SESSION_INDEX:"si"},t.FIELDS_V0_2={name:t.FIELDS.NAME,time:t.FIELDS.TIME,type:t.FIELDS.TYPE,category:t.FIELDS.CATEGORY,tags:t.FIELDS.OPTIONS,session_index:t.FIELDS.SESSION_INDEX}},1440:function(n,t,e){var i=e(2600),r=e(9893),o=e(9876).getFieldValue,a=e(9881);function u(n,t,e,o,a){this[r.FIELDS.NAME]=n,this[r.FIELDS.TYPE]=t,i.isString(e)&&e.trim().length>0&&(this[r.FIELDS.CATEGORY]=e),o&&i.keys(o).length>0&&(this[r.FIELDS.OPTIONS]=o),i.isUndefined(a)||(this[r.FIELDS.REVENUE]=a)}function c(n,t,e,o){this.eventBase=n,this[r.FIELDS.TIME]=t,i.isUndefined(e)||(this[r.FIELDS.SESSION_ID]=e),i.isUndefined(o)||(this[r.FIELDS.SESSION_INDEX]=o)}t.x=u,u.prototype.digest=function(){var n=function(n,t){return encodeURIComponent(n)+"="+encodeURIComponent(t)},t=[];if(t.push(n(r.FIELDS.NAME,this[r.FIELDS.NAME])),t.push(n(r.FIELDS.TYPE,this[r.FIELDS.TYPE])),this[r.FIELDS.CATEGORY]&&t.push(n(r.FIELDS.CATEGORY,this[r.FIELDS.CATEGORY])),this[r.FIELDS.REVENUE]&&t.push(n(r.FIELDS.REVENUE,this[r.FIELDS.REVENUE])),!this[r.FIELDS.OPTIONS])return t.join("&");var e=this[r.FIELDS.OPTIONS]||{},o=i.filter(i.keys(e),(function(n){return e.hasOwnProperty(n)}));o=o.sort();for(var a=0;a<o.length;a++)t.push(n(o[a],e[o[a]]));return t.join("&")},u.prototype.hash=function(){return this.hash_||(this.hash_=a.hashToHex(a.toByteString(this.digest()),a.Seed.BEHAVIOR_EVENT)),this.hash_},u.prototype.setHash=function(n){this.hash_=n},u.prototype.reHash=function(){this.hash_=null,this.hash()},u.prototype.equals=function(n){if(this.hash()!==n.hash()||this[r.FIELDS.NAME]!==n[r.FIELDS.NAME]||this[r.FIELDS.TYPE]!==n[r.FIELDS.TYPE]||this[r.FIELDS.CATEGORY]!==n[r.FIELDS.CATEGORY]||this[r.FIELDS.REVENUE]!==n[r.FIELDS.REVENUE])return!1;var t=this[r.FIELDS.OPTIONS]||{},e=n[r.FIELDS.OPTIONS]||{},o=i.filter(i.keys(t),(function(n){return t.hasOwnProperty(n)})),a=i.filter(i.keys(e),(function(n){return e.hasOwnProperty(n)}));if(o.length!==a.length)return!1;for(var u=0;u<o.length;u++){var c=o[u];if(!e.hasOwnProperty(c)||t[c]!==e[c])return!1}return!0},u.prototype.getValueOrDefault=function(n,t){var e=o(this,n);return i.isUndefined(e)?t:e},u.prototype.setFieldValue=function(n,t){n!==r.FIELDS.NAME&&n!==r.FIELDS.TYPE&&n!==r.FIELDS.CATEGORY&&n!==r.FIELDS.REVENUE&&n!==r.FIELDS.OPTIONS||(this[n]=t,this.reHash())},t.j=c,c.prototype.getValueOrDefault=function(n,t){if(0===n.length)return this;var e={};e[r.FIELDS.TIME]=this[r.FIELDS.TIME],e[r.FIELDS.SESSION_ID]=this[r.FIELDS.SESSION_ID],e[r.FIELDS.SESSION_INDEX]=this[r.FIELDS.SESSION_INDEX];var a=o(e,n);return i.isUndefined(a)?this.eventBase.getValueOrDefault(n,t):a},c.prototype.setFieldValue=function(n,t){n===r.FIELDS.TIME||n===r.FIELDS.SESSION_ID||n===r.FIELDS.SESSION_INDEX?this[n]=t:this.eventBase.setFieldValue(n,t)};var s={n:"name",y:"type",c:"category",r:"revenue",s:"session_id",o:"tags",si:"session_index"};c.prototype.readableEvent=function(){var n,t,e=function(n){return i.isString(n)?'"'+n+'"':n},o=this,a=[];i.each([r.FIELDS.NAME,r.FIELDS.TYPE,r.FIELDS.CATEGORY,r.FIELDS.REVENUE,r.FIELDS.SESSION_ID],(function(r){n=s[r],t=o.getValueOrDefault([r]),i.isUndefined(t)||a.push(n+": "+e(t))}));var u=[];if(n=s[r.FIELDS.OPTIONS],t=o.getValueOrDefault([r.FIELDS.OPTIONS]),i.isUndefined(t)||(i.each(t,(function(n,t){u.push(t+": "+String(e(n)))})),a.push(n+": {\n\t\t"+u.join(",\n\t\t")+"\n\t}")),t=o.getValueOrDefault([r.FIELDS.TIME]),i.isNumber(t)&&(t=e(new Date(t).toString())),!i.isUndefined(t)){a.push("timestamp: "+t)}return"{\n\t"+a.join(",\n\t")+"\n}"},c.prototype.toObject=function(n){var t,e,o={},a=this;i.each([r.FIELDS.NAME,r.FIELDS.TYPE,r.FIELDS.CATEGORY,r.FIELDS.REVENUE,r.FIELDS.OPTIONS,r.FIELDS.SESSION_INDEX],(function(n){t=s[n],e=a.getValueOrDefault([n],n===r.FIELDS.OPTIONS?{}:void 0),i.isUndefined(e)||(o[t]=e)}));var u=s[r.FIELDS.OPTIONS],c=s[r.FIELDS.REVENUE];if(n&&n.revenueAsTag&&o[c]&&(o[u]=o[u]||{},o[u][c]=o[c],delete o[c]),e=a.getValueOrDefault([r.FIELDS.TIME]),i.isNumber(e))if(n&&n.timeAsTimestamp){o.timestamp=new Date(e)}else{o.time=e}return o}},811:function(n,t,e){var i=e(7313);t.initializeStore=i.initialize,t.addEvent=i.addEvent,t.getEvents=i.getEvents,t.getEventCount=i.getEventCount},2816:function(n,t,e){var i=e(1440).j,r=e(7052),o=e(9893),a=e(1440).x;t.CURRENT_SESSION_INDEX=0;var u=18e5;function c(n,e){var i;i=t.isInSameSession(n,e)?n.getValueOrDefault([o.FIELDS.SESSION_ID]):e.getValueOrDefault([o.FIELDS.TIME]),e.setFieldValue(o.FIELDS.SESSION_ID,i)}function s(n,e,i){var r,a=n.getValueOrDefault([o.FIELDS.SESSION_INDEX]);r=t.isInSameSession(e,n)?a:i?a+1:a-1,e.setFieldValue(o.FIELDS.SESSION_INDEX,r)}t.isInSameSession=function(n,t){var e=n.getValueOrDefault([o.FIELDS.TIME],0),i=t.getValueOrDefault([o.FIELDS.TIME],0);return Math.abs(e-i)<u},t.updateSessionId=function(n,t){if(n){var e=n.getValueOrDefault([o.FIELDS.TIME]),r=n.getValueOrDefault([o.FIELDS.SESSION_ID]),u=t.getValueOrDefault([o.FIELDS.TIME]);e="number"!=typeof e?u-36e5:e,r="number"!=typeof r?e:r,c(n=new i(new a("",""),e,r),t)}else t.setFieldValue(o.FIELDS.SESSION_ID,t.getValueOrDefault([o.FIELDS.TIME]))},t.updateSessionIndex=function(n,t){if(n){var e=n.getValueOrDefault([o.FIELDS.TIME]),r=n.getValueOrDefault([o.FIELDS.SESSION_INDEX]),u=t.getValueOrDefault([o.FIELDS.TIME]),c=n.getValueOrDefault([o.FIELDS.SESSION_ID]);e="number"!=typeof e?u-36e5:e,r="number"!=typeof r?0:r,c="number"!=typeof c?e:c,s(n=new i(new a("",""),e,c,r),t,!1)}else t.setFieldValue(o.FIELDS.SESSION_INDEX,0)},t.sessionize=function(n){var e=n.length;if(0!==e){n[0].setFieldValue(o.FIELDS.SESSION_ID,n[0].getValueOrDefault([o.FIELDS.TIME]));for(var i=1;i<e;i++)c(n[i-1],n[i]);var a=t.CURRENT_SESSION_INDEX,f=n[e-1].getValueOrDefault([o.FIELDS.TIME]);r.now()-f>u&&(a+=1),n[e-1].setFieldValue(o.FIELDS.SESSION_INDEX,a);for(i=e-1;i>0;i--)s(n[i],n[i-1],!0)}},t.reindexIfNecessary=function(n,t,e){var i=function(n){for(var t=0;t<n.length;t++){var e=n[t].getValueOrDefault([o.FIELDS.SESSION_INDEX]);n[t].setFieldValue(o.FIELDS.SESSION_INDEX,e+1)}};-1===n.getValueOrDefault([o.FIELDS.SESSION_INDEX])&&(i(t),i(e))},t.sessionSortPredicate=function(n,t){return n[o.FIELDS.TIME]-t[o.FIELDS.TIME]},t.applyMigrations=function(n){return!1}},7313:function(n,t,e){var i=e(2600),r=e(7547),o=e(7052),a=e(620),u=e(3637),c=e(8642),s=e(7434),f=t,l=e(1440).j,d=e(9893),v=e(1440).x,h=e(2816),p=e(6321),g=p.get("stores/visitor_events"),m=p.get("stores/visitor_events_manager"),_={EVENTBASE:"eb",HASH:"h",TIMEBASE:"tb",TIMESTAMPS:"ts",DELTA:"d",INDEX:"i"};function w(n){u.dispatch(r.SET_VISITOR_EVENTS,n)}function y(n){u.dispatch(r.UPDATE_BEHAVIOR_STORE,{key:"baseMap",value:n})}function b(n){u.dispatch(r.UPDATE_BEHAVIOR_STORE,{key:"eventQueue",value:n})}function E(n){u.dispatch(r.UPDATE_BEHAVIOR_STORE,{key:"lastEvent",value:n})}function I(){return g.getEvents()}function A(){return m.getBaseMap()}function T(){return m.getEventQueue()}function S(){return m.getLastEvent()}function k(){var n=I().concat(T()),t=!1;return n.length>1e3&&(n=n.slice(-1e3),t=!0),w(n),b([]),t}t.initialize=function(n,t){if(!m.getInitialized()){f.S(n,t);var e=I();e.length>0&&E(e[e.length-1]);var i=T();i.length>0&&E(i[i.length-1]),u.dispatch(r.UPDATE_BEHAVIOR_STORE,{key:"initialized",value:!0})}},t.addEvent=function(n){c.debug("Behavior store: adding event",n);var t=f.k(n);E(t),b(T().concat(t)),h.reindexIfNecessary(S(),I(),T()),f.R(T())},t.getEvents=function(){return T().length>0&&(k()&&h.sessionize(I()),f.N(I()),f.R(T())),I()},t.getEventCount=function(){return T().length+I().length},f.S=function(n,t){f.D(n,t)&&(f.N(I()),f.R(T())),h.sessionize(I())},f.D=function(n,t){if(0===n.length&&0===t.length)return w([]),b([]),!1;var e=!1,i=n[0]||t[0];return _.EVENTBASE in i?(w(f.C(n)),b(f.C(t))):(e=!0,w(f.O(n)),b(f.O(t))),T().length>0&&(k(),e=!0),w(f._updateBaseMapAndMaybeDedupe(I())),f._migrateEventBasesAndUpdateStore()&&(e=!0),e},f.O=function(n){for(var t=[],e=0;e<n.length;e++){var i=n[e],r=f.P(i);t[e]=new l(r,i[d.FIELDS.TIME])}return t},f._migrateEventBasesAndUpdateStore=function(){var n=!1,t=f.M();return h.applyMigrations(t)&&(n=!0,y({}),w(f._updateBaseMapAndMaybeDedupe(I())),b(f._updateBaseMapAndMaybeDedupe(T()))),n},f.L=function(){return o.now()},f.k=function(n){var t,e=n.name,i=n.type||"default",r=n.category||a.OTHER,o=n.tags||{};n.revenue&&(t=n.revenue);var u=new v(e,i,r,o,t);u=f.V(u);var c=f.L(),s=new l(u,c,-1);return h.updateSessionId(S(),s),h.updateSessionIndex(S(),s),s},f._updateBaseMapAndMaybeDedupe=function(n){for(var t=0;t<n.length;t++)n[t].eventBase=f.V(n[t].eventBase);return n},f.N=function(n){var t=f.F(n);s.persistBehaviorEvents(t)},f.R=function(n){var t=f.F(n);s.persistBehaviorEventQueue(t)},f.B=function(){var n;m.getCleared()||(w([]),b([]),f.N(I()),f.R(T()),y({}),E(null),n=!0,u.dispatch(r.UPDATE_BEHAVIOR_STORE,{key:"cleared",value:n}))},f.V=function(n){var t=n.hash(),e=A(),r=e[t];if(i.isUndefined(r))return e[t]=[n],y(e),n;for(var o=0;o<r.length;o++)if(n.equals(r[o]))return r[o];return r.push(n),y(e),n},f.M=function(){var n=[],t=A();for(var e in t)!t.hasOwnProperty(e)||(n=n.concat(t[e]));return n},f.F=function(n){for(var t=function(n){var t={};t[d.FIELDS.NAME]=n.getValueOrDefault([d.FIELDS.NAME]),t[d.FIELDS.TYPE]=n.getValueOrDefault([d.FIELDS.TYPE]);var e=n.getValueOrDefault([d.FIELDS.CATEGORY]);i.isUndefined(e)||(t[d.FIELDS.CATEGORY]=e);var r=n.getValueOrDefault([d.FIELDS.REVENUE]);i.isUndefined(r)||(t[d.FIELDS.REVENUE]=r);var o=n.getValueOrDefault([d.FIELDS.OPTIONS]);return i.isUndefined(o)||(t[d.FIELDS.OPTIONS]=o),t},e=_,r=[],o="_idx_",a=0;a<n.length;a++){var u,c,s=n[a],f=s.eventBase;if(f.hasOwnProperty(o)){u=r[f._idx_];var l=s[d.FIELDS.TIME]-(u[e.TIMEBASE]||0);(c={})[e.DELTA]=l,c[e.INDEX]=a,u[e.TIMESTAMPS].push(c)}else(u={})[e.EVENTBASE]=t(s),u[e.HASH]=f.hash(),u[e.TIMEBASE]=s[d.FIELDS.TIME],(c={})[e.DELTA]=0,c[e.INDEX]=a,u[e.TIMESTAMPS]=[c],r.push(u),f._idx_=r.length-1}for(a=0;a<n.length;a++)delete n[a].eventBase._idx_;return r},f.P=function(n,t){var e=new v(n[d.FIELDS.NAME],n[d.FIELDS.TYPE],n[d.FIELDS.CATEGORY],n[d.FIELDS.OPTIONS],n[d.FIELDS.REVENUE]);return i.isUndefined(t)||e.setHash(t),e},f.C=function(n){for(var t=_,e=[],i=0;i<n.length;i++)for(var r=n[i],o=f.P(r[t.EVENTBASE],r[t.HASH]),a=r[t.TIMEBASE],u=r[t.TIMESTAMPS],c=0;c<u.length;c++){var s=u[c],d=new l(o,a+s[t.DELTA]);e[s[t.INDEX]]=d}return e},t.deserialize=function(n){return f.C(n)},t.mergeAllEvents=function(n){var t=[].concat.apply([],n);return t.sort(h.sessionSortPredicate),h.sessionize(t),t}},7547:function(n,t,e){var i=e(1837);n.exports=i({LOG:null,SET_LOGLEVEL:null,INITIALIZE_STATE:null,SET_DOMCONTENTLOADED:null,ACTIVATE:null,UPDATE_BEHAVIOR_STORE:null,DATA_LOADED:null,SET_CLIENT_NAME:null,SET_CLIENT_VERSION:null,LOAD_PERSISTED_LAYER_STATES:null,RECORD_GLOBAL_DECISION:null,RECORD_LAYER_DECISION:null,ENSURE_ORIGINAL_PUSHSTATE:null,ENSURE_ORIGINAL_REPLACESTATE:null,SET_VISITOR_ATTRIBUTES:null,SET_VISITOR_ATTRIBUTE_PENDING:null,LOAD_EXISTING_VISITOR_PROFILE:null,SET_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENT_QUEUE:null,SET_VISITOR_ID:null,SET_VISITOR_ID_VIA_API:null,REFRESH_SESSION:null,LOAD_SESSION_STATE:null,UPDATE_VARIATION_ID_MAP:null,MERGE_VARIATION_ID_MAP:null,UPDATE_PREFERRED_LAYER_MAP:null,MERGE_PREFERRED_LAYER_MAP:null,RECORD_LAYER_DECISION_EVENT_ID:null,TRACK_VIEW_ACTIVATED_EVENT:null,REGISTER_ASYNC_DEFERRED:null,RESOLVE_DEFERRED:null,REJECT_DEFERRED:null,REGISTER_PLUGIN:null,ADD_CLEANUP_FN:null,CLEAR_CLEANUP_FN:null,ACTION_EXECUTED:null,REGISTER_ACTION:null,SET_VIEW_ACTIVE_STATE:null,UPDATE_PARSED_VIEW_METADATA:null,UPDATE_USER_SUPPLIED_METADATA:null,REGISTER_VIEWS:null,SET_GLOBAL_TAGS:null,SET_VIEW_BATCHING:null,RESET_VIEW_STATES:null,ATTACH_EVENT_STREAM_PUBLISHERS:null,DETACH_EVENT_STREAM_PUBLISHERS:null,LOAD_DIRECTIVE:null,SET_COOKIE_AGE:null,SET_COOKIE_DOMAIN:null,SET_COOKIE_AUTO_REFRESH:null,XDOMAIN_SET_DEFAULT_FRAME:null,XDOMAIN_ADD_FRAME:null,XDOMAIN_SET_MESSAGE:null,XDOMAIN_ADD_SUBSCRIBER:null,XDOMAIN_SET_CANONICAL_ORIGINS:null,XDOMAIN_SET_DISABLED:null,ADD_EMITTER_HANDLER:null,REMOVE_EMITTER_HANDLER:null,SET_INTEGRATION_SETTINGS:null,ADD_CHANGE:null,SET_CHANGE_APPLIER:null,REMOVE_ACTION_STATE:null,ANNOUNCE_PENDING_REDIRECT:null,LOAD_REDIRECT_DATA:null,REGISTER_TRACKED_REDIRECT_DATA:null,SET_PENDING_EVENT:null,REMOVE_PENDING_EVENT:null,LOAD_PENDING_EVENTS:null,SANDBOXED_FUNCTIONS_ADDED:null,SET_RUM_DATA:null,RECORD_API_USAGE:null,INITIALIZE_CHANGE_METRICS:null,RECORD_ACTIVATION_TYPE_USAGE:null,RECORD_AUDIENCE_USAGE:null,RECORD_CHANGE_MACROTASK_RATE:null,RECORD_CHANGE_OVERHEATED:null,RECORD_CHANGE_TYPE_USAGE:null,RECORD_DOM_OBSERVATION_OCCURENCE:null,RECORD_INTEGRATION_USAGE:null,RECORD_LAYER_FEATURE_USAGE:null,RECORD_LAYER_POLICY_USAGE:null,RECORD_RECOMMENDATIONS_USAGE:null,RECORD_VIEW_FEATURE_USAGE:null,RECORD_VIEWS_INITIALLY_ACTIVATED_COUNT:null,RECORD_VISITOR_ID_LOCATOR_USAGE:null,RECORD_VISITOR_ID_ERROR:null,RECORD_STICKY_BUCKETING_FEATURE:null,SET_PERFORMANCE_MARKS_DATA:null,FINALIZE_BATCH_SNAPSHOT:null,REGISTER_PREVIOUS_BATCH:null,REGISTER_TRACKER_VISITOR:null,REGISTER_TRACKER_EVENT:null,REGISTER_TRACKER_DECISION:null,RESET_TRACKER_EVENTS:null,RESET_TRACKER_PREVIOUS_BATCHES:null,RESET_TRACKER_STORE:null,SET_TRACKER_POLLING:null,SET_TRACKER_BATCHING:null,SET_TRACKER_SEND_EVENTS:null,SET_TRACKER_PERSISTABLE_STATE:null,SET_TRACKER_DIRTY:null,UPDATE_TRACKER_VISITOR_ATTRIBUTES:null,SET_UA_DATA:null})},311:function(n,t,e){var i=e(2600),r=e(1837);t.COOKIES={OPT_OUT:"optimizelyOptOut",PREVIEW:"optimizelyPreview",REDIRECT:"optimizelyRedirectData",SESSION_STATE:"optimizelySessionState",TOKEN:"optimizelyToken",VISITOR_ID:"optimizelyEndUserId",VISITOR_UUID:"optimizelyPPID"},t.LayerActivationTypes={CONDITIONAL:"conditional",IMMEDIATE:"immediate",MANUAL:"manual",READY:"ready",TIMEOUT:"timeout"},t.LogLevel={OFF:0,ERROR:1,WARN:2,INFO:3,DEBUG:4},t.Lifecycle=r({preActivate:null,postVisitorProfileLoad:null,postViewsActivated:null,postActivate:null}),t.ViewActivationTypes={immediate:"immediate",manual:"manual",callback:"callback",polling:"polling",URLChanged:"url_changed",DOMChanged:"dom_changed"},t.StorageKeys={PENDING_EVENTS:"pending_events",RELAYED_EVENTS:"relayed_events"},t.PluginTypes=r({visitorProfileProviders:null,viewProviders:null,audienceMatchers:null,viewMatchers:null,analyticsTrackers:null,viewTagLocators:null,userFeatureDefs:null,apiModules:null,changeAppliers:null,deciders:null,eventImplementations:null,viewTriggers:null}),t.ResourceTimingAttributes=r({connectStart:null,connectEnd:null,decodedBodySize:null,domainLookupStart:null,domainLookupEnd:null,duration:null,encodedBodySize:null,fetchStart:null,requestStart:null,responseStart:null,responseEnd:null,secureConnectionStart:null,startTime:null,transferSize:null,serverTiming:null}),t.RUMPerformanceTimingAttributes=r({blockTime:null}),t.AttributionTypes=r({FIRST_TOUCH:null,LAST_TOUCH:null}),t.SandboxedFunctions=r({XMLHttpRequest:null}),t.PerformanceData=r({performance_marks:null,resource_timing:null,performance_timing:null}),t.PerformanceCounters=r({mutation_observer_invocation:null,polling_invocation:null,match_selector_invocation:null}),t.VisitorStorageKeys={EVENTS:"events",EVENT_QUEUE:"event_queue",LAYER_MAP:"layer_map",LAYER_STATES:"layer_states",SESSION_STATE:"session_state",VISITOR_PROFILE:"visitor_profile",VARIATION_MAP:"variation_map",TRACKER_OPTIMIZELY:"tracker_optimizely"},t.AllStorageKeys=i.assign({},t.StorageKeys,t.VisitorStorageKeys),t.ListTargetingKeyTypes={COOKIE:"c",QUERY:"q",JS_VARIABLE:"j"},t.VisitorIdLocatorType={COOKIE:"cookie",JS_VARIABLE:"js",LOCALSTORAGE:"localStorage",QUERY:"query"}},620:function(n){n.exports={OTHER:"other"}},8197:function(n,t){t.TYPES={ACTION:"action",ANALYTICS:"analytics",EDITOR:"editor",LIFECYCLE:"lifecycle"}},5376:function(n){n.exports={CLICK:"click",CUSTOM:"custom",ENGAGEMENT:"engagement",PAGEVIEW:"pageview"}},4292:function(n,t,e){var i=e(1837);t.TrackLayerDecisionTimingFlags=i({preRedirectPolicy:null,postRedirectPolicy:null,nonRedirectPolicy:null}),t.PreRedirectPolicies=i({PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT:null,PERSIST_BEFORE_REDIRECT:null}),t.PostRedirectPolicies=i({TRACK_IMMEDIATELY:null,TRACK_AFTER_SYNC:null}),t.NonRedirectPolicies=i({TRACK_IMMEDIATELY:null}),t.RedirectRelayMedia=i({COOKIE:null})},4212:function(n,t,e){var i=e(9881),r=t.TOTAL_POINTS=1e4;t.bucketingNumber=function(n,t,e){return i.hashToInt(n+t,e,r)},t.isHoldback=function(n,e){return t.bucketingNumber(n,e.id,i.Seed.IGNORING)<(e.holdback||0)},t.chooseWeightedCandidate=function(n,e,r){for(var o=t.bucketingNumber(n,e,i.Seed.BUCKETING),a=0;a<r.length;a++)if(r[a].endOfRange>o)return r[a].entityId;throw new Error("Unable to choose candidate")}},3662:function(n,t,e){var i=e(2600),r=e(7547),o=e(4212),a=e(8131),u=e(2405).E,c=e(3637),s=e(8642);t.isValidExperiment=function(n,t){var e,r=i.partial(i.includes,n);return s.groupCollapsed("Decision / Evaluating audiences for experiment:",t,n),e=!t.audienceIds||a.evaluate(t.audienceIds,r),s.groupEnd(),s.debug("Decision / Experiment",t,"is valid?",e),e},t.selectVariation=function(n,t,e,a,f){if(!n.variations||0===n.variations.length)throw new u('No variations in selected experiment "'+n.id+'"');if(!n.weightDistributions&&n.variations.length>1)throw new u('On selected experiment "'+n.id+'", weightDistributions must be defined if # variations > 1');var l;if(n.bucketingStrategy&&"impression"===n.bucketingStrategy)if(1===n.variations.length)l=n.variations[0].id;else{var d=a;l=o.chooseWeightedCandidate(e+d,n.id,n.weightDistributions)}else if(l=1===n.variations.length?n.variations[0].id:o.chooseWeightedCandidate(e,n.id,n.weightDistributions),f&&f[n.id]){s.debug("Decision / Using preferredVariationMap to select variation for experiment:",n.id);var v=f[n.id];if(!i.find(n.variations,{id:v}))return c.dispatch(r.RECORD_STICKY_BUCKETING_FEATURE,{feature:"stoppedVariation",id:n.id}),s.debug("Decision / Preferred variation:",v,"not found on experiment:",n.id,". Visitor not bucketed."),null;v!==l&&(c.dispatch(r.RECORD_STICKY_BUCKETING_FEATURE,{feature:"preferredVariation",id:n.id}),l=v)}var h=i.find(n.variations,{id:l});if(h)return s.debug("Decision / Selected variation:",h),h;throw new u('Unable to find selected variation: "'+l+'".')},t.getExperimentById=function(n,t){var e=i.find(n.experiments,{id:t});if(e)return e;throw new u("Unable to find selected experiment.")},t.hasVariationActionsOnView=function(n,t){return s.debug("Decision / Checking variation:",n,"for actions on pageId:",t),!!i.find(n.actions,(function(n){return n.pageId===t&&!i.isEmpty(n.changes)}))}},2405:function(n,t){function e(n){this.message=n}e.prototype=new Error,t.E=e},2783:function(n,t,e){var i=e(2600),r=e(7547),o=e(6663),a=e(5346),u=e(4212),c=e(3662),s=e(2405).E,f=e(6321),l=e(311),d=e(3637),v=e(8256),h=e(5034),p=e(8642),g=e(6650),m=f.get("stores/plugins"),_=f.get("stores/global"),w=f.get("stores/layer_data");function y(n){var t=m.getPlugin(l.PluginTypes.deciders,n);if(i.isEmpty(t))throw new Error("No deciders found for policy: "+n);return t}t.isPageIdRelevant=function(n){if(!n)return!1;var t=y(n.policy);return i.isFunction(t.includePageIdInDecisionTicket)?t.includePageIdInDecisionTicket(n):!0===t.includePageIdInDecisionTicket},t.createTicket=function(n){var t,e,r,o=i.pick(n,["bucketingId","globalHoldback","preferredVariationMap","pageId"]);return i.extend(o,{audienceIds:(t=n.visitorProfile,e=n.audiences,r=m.getAllPlugins(l.PluginTypes.audienceMatchers),i.reduce(e,(function(n,e){return a.isInAudience(t,e,r)&&n.push(e.id),n}),[])),activationId:_.getActivationId()}),o},t.decideGlobal=function(n){return{isGlobalHoldback:u.isHoldback(n.bucketingId,{id:null,holdback:n.globalHoldback})}},t.decideGroup=function(n,t){p.debug("Decision / Deciding layer for group: ",v.description(n));var e,o,a=t.preferredLayerId,c=!!a;try{(e=u.chooseWeightedCandidate(t.bucketingId,n.id,n.weightDistributions))&&"None"!==e||(o='Group traffic allocation. Visitor maps to a "hole" in the bucket space left by an experiment or campaign that\'s since been removed from the group')}catch(l){o="Group traffic allocation. Visitor maps to a point in the bucket space which has never been covered by any experiment or campaign."}if(c&&(p.debug("Decision / Using preferredLayerMap to select layer for group:",v.description(n)),a!==e&&(d.dispatch(r.RECORD_STICKY_BUCKETING_FEATURE,{feature:"preferredLayer",id:n.id}),e=a)),o)return{layerId:null,reason:o};if(!i.find(n.weightDistributions,{entityId:e})){var f="Visitor was"+(c?" sticky-":" non-sticky ")+"bucketed into a campaign ("+e+") which is not in the group";if(!c)throw new s(f);return{layerId:null,reason:f}}return{layerId:e}},t.decideLayer=function(n,t){var e,r;p.debug("Deciding: ",n,t);var a,f,l=y(n.policy),d={layerId:n.id,experimentId:null,variationId:null,isLayerHoldback:u.isHoldback(t.bucketingId,n)};if(i.isEmpty(n.experiments))throw new s("No experiments in layer.");try{if(l.decideLayer){p.debug("Decision / Using decider's custom decideLayer.");var v=l.decideLayer(n,t);e=v.experiment,r=v.variation}else p.debug("Decision / Using default decideLayer behavior."),e=l.selectExperiment(n,t.audienceIds,t.bucketingId),r=c.selectVariation(e,t.audienceIds,t.bucketingId,t.activationId,t.preferredVariationMap)}catch(h){a=h,(null!=(f=s)&&"undefined"!=typeof Symbol&&f[Symbol.hasInstance]?f[Symbol.hasInstance](a):a instanceof f)?d.reason=h.message:d.error=h}return d.experimentId=e?e.id:null,d.variationId=r?r.id:null,d.error&&(d.error.name="DecisionEngineError",o.emitError(d.error)),d},t.getDummyLayerDecision=function(n,t){var e,i=function(n,t){for(var e=0;e<n.experiments.length;e++)for(var i=0;i<n.experiments[e].variations.length;i++)if(t.indexOf(n.experiments[e].variations[i].id)>-1)return{experimentId:n.experiments[e].id,variationId:n.experiments[e].variations[i].id};return null}(n,t);return i?(p.log("Decision / Applying force variation:",i.variationId,"to Campaign",h.description(n)),e={layerId:n.id,variationId:i.variationId,experimentId:i.experimentId,isLayerHoldback:!1,reason:"force"}):(p.log("No variation matches ids:",t,"in Campaign",h.description(n)),e={layerId:n.id,variationId:null,experimentId:null,isLayerHoldback:!1,reason:"force"}),e},t.isInCohort=function(n){if(!n.experimentId||!n.variationId)return!1;var t=w.get(n.layerId);return!(g.isSingleExperimentPolicy(t.policy)&&n.isLayerHoldback)}},6321:function(n,t,e){var i=e(2600),r=e(372),o=e(3637),a=e(4594),u=r.create(),c={action_data:e(4866),async_request:e(5967),audience_data:e(6693),change_data:e(3477),cleanup:e(4727),client_metadata:e(726),cookie_options:e(1131),event_data:e(5160),event_emitter:e(6446),dimension_data:e(5197),directive:e(3608),global:e(952),history:e(2822),integration_settings:e(2193),layer:e(9820),layer_data:e(4542),log:e(6407),observed_redirect:e(3394),pending_events:e(8484),performance:e(2245),plugins:e(8427),provider_status:e(4730),pending_redirect:e(8380),rum:e(4099),sandbox:e(2549),session:e(3012),tracker_optimizely:e(31),ua_data:e(5119),view:e(8363),view_data:e(1475),visitor:e(1243),visitor_attribute_entity:e(7576),visitor_events:e(1360),visitor_events_manager:e(2640),visitor_id:e(2727),visitor_bucketing:e(9522),xdomain:e(5085)};c.group_data=e(27),o.registerStores(c),i.forOwn(c,(function(n,t){u.register("stores/"+t,o.getStore(t))})),u.register("core/plugins/matchers/key_value",a),n.exports=u},4659:function(n,t,e){var i=e(2600),r=e(7547),o=e(6663),a=e(8549),u=e(5202).U,c=e(311),s=e(3637),f=e(8642),l=t.JSONParseError=u("JSONParseError"),d=e(9927),v=e(4705),h=e(5272),p="optimizely_show_preview",g="optimizely_disable",m="optimizely_editor",_="optimizely_p13n",w="optimizely_x_audiences",y="optimizely_x",b="optimizely_show_preview",E="optimizely_opt_out",I="optimizely_token",A="optimizely_force_tracking";t.populateDirectiveData=function(){var n,t,e,u,T,S,k,R;!function(){var n="OFF",t=d.getQueryParamValue("optimizely_log");if(t){var e=t.split(":");""!==e[0]&&(n=String(e[0]).toUpperCase()),void 0!==e[1]&&f.setLogMatch(e[1])}f.setLogLevel(n)}(),function(){var n=h.getUserAgent()||"";if(!i.isString(n))return void f.warn("Directive / userAgent not a string");n=n.toLowerCase();var t=["googlebot","yahoo! slurp","bingbot","bingpreview","msnbot","keynote","ktxn","khte","gomezagent","alertsite","yottaamonitor","pingdom.com_bot","aihitbot","baiduspider","adsbot-google","mediapartners-google","applebot","catchpoint","phantomjs","moatbot","facebookexternalhit"],e=function(t){if(i.includes(n,t))return f.warn("Directive / Matches bot:",t),!0};i.some(t,e)&&(f.log("Directive / Disabling tracking"),s.dispatch(r.LOAD_DIRECTIVE,{trackingDisabled:!0}))}(),n=Boolean(i.result(window.optimizely,"initialized")),s.dispatch(r.LOAD_DIRECTIVE,{alreadyInitialized:n}),s.dispatch(r.LOAD_DIRECTIVE,{mutationObserverAPISupported:h.isMutationObserverAPISupported()}),function(){var n=a.get(c.COOKIES.OPT_OUT),t=d.getQueryParamValue(E),e="You have successfully opted out of Optimizely for this domain.",i="You are NOT opted out of Optimizely for this domain.";if("true"===t||"false"===t){var o="true"===t;s.dispatch(r.LOAD_DIRECTIVE,{shouldOptOut:o}),h.alert(o?e:i)}else n&&s.dispatch(r.LOAD_DIRECTIVE,{shouldOptOut:"true"===n})}(),function(){var n=!1,t=[p,g];t.push(m);for(var e=0;e<t.length;e++)if("true"===d.getQueryParamValue(t[e])){f.warn("Directive / Not activating because "+t[e]+" is set."),n=!0;break}s.dispatch(r.LOAD_DIRECTIVE,{disabled:n})}(),s.dispatch(r.LOAD_DIRECTIVE,{isEditor:!1}),s.dispatch(r.LOAD_DIRECTIVE,{isPreview:!1}),(t=d.getQueryParamValue(b))&&f.log("Directive / Is legacy preview mode"),s.dispatch(r.LOAD_DIRECTIVE,{isLegacyPreview:!!t}),s.dispatch(r.LOAD_DIRECTIVE,{isSlave:!1}),e=h.getGlobal("optlyDesktop"),(u=!(!e||i.isUndefined(e.p13nInner)))&&f.log("Directive / Is running in desktop app editor"),s.dispatch(r.LOAD_DIRECTIVE,{isRunningInDesktopApp:u}),(T="true"===d.getQueryParamValue(_))&&f.log("Directive / Is running in editor"),s.dispatch(r.LOAD_DIRECTIVE,{isRunningInV2Editor:T}),S=a.get(c.COOKIES.TOKEN)||null,k=d.getQueryParamValue(I)||S,s.dispatch(r.LOAD_DIRECTIVE,{projectToken:k}),function(){var n=a.get(c.COOKIES.PREVIEW),t=[],e=d.getQueryParamValue(w);if(e)t=a.safeDecodeURIComponent(e).split(",");else if(n)try{t=v.parse(n).forceAudienceIds}catch(h){var i=new l("Failed to parse previewCookie in registerForceAudienceIds: "+n),u={originalMessage:h.message,userError:!0};o.emitError(i,u)}t.length&&(f.log("Directive / Force Audience IDs:",t),s.dispatch(r.LOAD_DIRECTIVE,{forceAudienceIds:t}))}(),function(){var n=a.get(c.COOKIES.PREVIEW),t=[],e=d.getQueryParamValue(y);if(e)t=a.safeDecodeURIComponent(e).split(",");else if(n)try{t=v.parse(n).forceVariationIds}catch(h){var i=new l("Failed to parse previewCookie in registerForceVariationIds: "+n),u={originalMessage:h.message,userError:!0};o.emitError(i,u)}t.length&&(f.log("Directive / Force Variation IDs:",t),s.dispatch(r.LOAD_DIRECTIVE,{forceVariationIds:t}))}(),(R=d.getQueryParamValue(A))&&s.dispatch(r.LOAD_DIRECTIVE,{forceTracking:R})};t.setOptOut=function(n){n?(f.warn("Directive / Opting out"),a.set(c.COOKIES.OPT_OUT,"true",{maxAge:31536e4},!0)):a.remove(c.COOKIES.OPT_OUT),s.dispatch(r.LOAD_DIRECTIVE,{shouldOptOut:n})}},7052:function(n,t){t.now=function(){return+new Date}},536:function(n,t){t.VERSION="0.181.0",t.NAME="js"},3485:function(n,t,e){var i=e(6321).get("stores/global");e(9081);t.getDocumentElement=function(){return document.documentElement},t.getCookieString=function(){return document.cookie||""},t.setCookie=function(n){document.cookie=n},t.querySelector=function(n){return document.querySelector(n)},t.querySelectorAll=function(n){return document.querySelectorAll(n)},t.parseUri=function(n){var e=t.createElement("a");return e.href=n,e},t.childrenOf=function(n){return Array.prototype.slice.call(n.querySelectorAll("*"))},t.createElement=function(n){return document.createElement(n)},t.isReady=function(){return i.domContentLoadedHasFired()||"interactive"===document.readyState||"complete"===document.readyState},t.isLoaded=function(){return"complete"===document.readyState},t.addReadyHandler=function(n){return document.addEventListener("DOMContentLoaded",n),function(){t.removeReadyHandler(n)}},t.removeReadyHandler=function(n){return function(){document.removeEventListener("DOMContentLoaded",n)}},t.getReferrer=function(){return document.referrer},t.getReadyState=function(){return document.readyState},t.write=function(n){if("loading"!==t.getReadyState())throw new Error("Aborting attempt to write to already-loaded document");document.write(n)},t.appendToHead=function(n){return t.appendTo(document.head,n)},t.appendTo=function(n,t){n.appendChild(t)},t.addEventListener=function(n,t,e){return document.addEventListener(n,t,e),function(){document.removeEventListener(n,t,e)}},t.getCurrentScript=function(){if(document.currentScript)return document.currentScript},t.parentElement=function(n){for(var t=n.parentNode;t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;return t}},3819:function(n,t,e){var i,r,o="optimizely_data",a=e(5202).U,u=e(8055),c=e(5272),s=a("StorageError");try{r=c.getGlobal("localStorage")}catch(f){throw new s("Unable to read localStorage: "+f.toString())}if(!r)throw new s("localStorage is undefined");i=u.create(r,o),t.mM=i},1670:function(n,t){t.create=function(n){return new MutationObserver(n)},t.observe=function(n,t,e){n.observe(t,e)}},7992:function(n,t,e){var i=e(7929).Promise,r=e(5272);t.estimateStorage=function(){var n=r.getGlobal("navigator");try{return n.storage.estimate()}catch(t){return i.resolve({usage:null,quota:null})}}},4819:function(n,t,e){var i=e(7547),r=e(5202).U,o=e(7052),a=e(3637),u=e(5272),c=e(6321).get("stores/rum"),s="optimizely:",f=t.Error=r("PerformanceError");function l(){return u.getGlobal("performance")}t.time=function(n){if(c.getSampleRum()){var t=l();if(t&&t.mark){var e=s+n;t.clearMarks(e+"Begin"),t.mark(e+"Begin")}}},t.timeEnd=function(n){if(c.getSampleRum()){var t=l();if(t&&t.mark){var e=s+n,r=t.getEntriesByName(e+"Begin");if(0===r.length)throw new f("Called timeEnd without matching time: "+n);t.clearMarks(e+"End"),t.mark(e+"End");var o=n+"Time",u=t.getEntriesByName(e+"End")[0].startTime-r[0].startTime;a.dispatch(i.SET_PERFORMANCE_MARKS_DATA,{name:o,data:{startTime:Math.round(1e3*r[0].startTime)/1e3,duration:Math.round(1e3*u)/1e3}})}}},t.setMark=function(n,t,e){if(c.getSampleRum()){var r=l();if(r&&r.mark){var o=s+n;r.mark(o),a.dispatch(i.SET_PERFORMANCE_MARKS_DATA,{name:n,data:{startTime:Math.round(1e3*t)/1e3,duration:Math.round(1e3*e)/1e3}})}}},t.now=function(){var n=l();return n?n.now():o.now()}},5272:function(n,t,e){var i=e(2600),r=e(8642);t.getUserAgent=function(){return window.navigator.userAgent},t.getLocationSearch=function(){return window.location.search},t.getNavigatorLanguage=function(){return window.navigator.language||window.navigator.userLanguage},t.getHref=function(){return window.location.href},t.getLocation=function(){return window.location},t.setLocation=function(n){window.location.replace(n)},t.setGlobal=function(n,t){window[n]=t},t.getGlobal=function(n){return window[n]},t.getGlobalByPath=function(n){for(var t=n.split("."),e=window;t.length;)try{e=e[t.shift()]}catch(i){throw r.error("Attempted to access nonexistent property. Path ",n),new Error("Attempted to access nonexistent property. Path "+n)}return e},t.addEventListener=function(){return window.addEventListener.apply(window,arguments)},t.removeEventListener=function(){return window.removeEventListener.apply(window,arguments)},t.isMutationObserverAPISupported=function(){return!i.isUndefined(window.MutationObserver)},t.alert=function(n){alert(n)},t.setTimeout=function(n,t){return setTimeout((function(){try{n()}catch(t){r.warn("Deferred function threw error:",t)}}),t)},t.setInterval=function(n,t){return setInterval((function(){try{n()}catch(t){r.warn("Polling function threw error:",t)}}),t)}},8555:function(n,t,e){var i=e(2600);t.create=function(n,t,e,r){return i.extend({category:"other"},r,{id:n,apiName:t,eventType:e})}},3677:function(n,t,e){var i=e(2600),r=e(9269),o=e(7547),a=e(6663),u=e(6321),c=e(3637),s=e(8642),f=u.get("stores/event_emitter");t.on=function(n){return n.token||(n.token=r.generate()),c.dispatch(o.ADD_EMITTER_HANDLER,n),n.token},t.off=function(n){c.dispatch(o.REMOVE_EMITTER_HANDLER,{token:n})},t.emit=function(n,t,e){var r=f.getHandlers(n,t);i.each(r,(function(i){try{i.handler.call({$di:u},n)}catch(r){!e&&i.emitErrors?(s.error("Error in handler for event:",n,r),a.emitError(r,null,t)):s.warn("Suppressed error in handler for event:",n,r)}}))}},6964:function(n,t,e){var i=e(3677);t.on=function(n){return n.publicOnly=!0,i.on(n)},t.off=i.off,t.emit=function(n){i.emit(n)}},5131:function(__unused_webpack_module,exports,__webpack_require__){var createError=__webpack_require__(8168),di=__webpack_require__(6321),Logger=__webpack_require__(8642),CSP_MODE=!1,EXEC_WITH_JQUERY=!0,ExecError=exports.Error=createError("ExecError");exports.apply=function(n,t){t=t||[],EXEC_WITH_JQUERY&&(t=t.concat(di.get("env/jquery")));try{return n.apply(void 0,t)}catch(e){throw Logger.warn("Error applying function",n,"with args:",t,e),new ExecError(e)}},exports.eval=function(str){if(CSP_MODE)throw new ExecError("eval is not supported in CSP mode");try{return EXEC_WITH_JQUERY&&(str="var $ = optimizely.get('jquery');"+str),eval(str)}catch(e){throw Logger.warn("Error executing JS:",str,e),new ExecError(e)}}},3637:function(n,t,e){var i=e(6840);n.exports=i.create()},8256:function(n,t,e){var i=e(2600);t.description=function(n){var t=!!n.name?'"'+n.name+'" ':"",e=function(n){return i.map(n.weightDistributions,"entityId")}(n).join(", ");return t+"(id "+n.id+", campaigns: "+e+")"}},5034:function(n,t,e){var i=e(2600),r=e(7547),o=e(7052),a=e(6321),u=e(3637),c=a.get("stores/global"),s=a.get("stores/session");t.recordLayerDecision=function(n,t,e){return u.dispatch(r.RECORD_LAYER_DECISION,{layerId:n,decision:e,decisionTicket:t,sessionId:s.getSessionId(),activationId:c.getActivationId(),timestamp:o.now(),revision:c.getRevision(),namespace:c.getNamespace(),pageId:t.pageId}),e},t.relatedAudienceIds=function(n){var t={},e=["and","or","not"];return i.each(n.experiments,(function(n){i.each(i.flattenDeep(n.audienceIds),(function(n){i.includes(e,n)||(t[n]=!0)}))})),i.keys(t)},t.getActivationTimeout=function(n){var t=n.activation;return t&&null!==t.timeout&&void 0!==t.timeout?t.timeout:2e3},t.description=function(n){return(n.name?'"'+n.name+'" ':"")+"("+n.id+")"},t.createSingle=function(n,t,e){return{id:n,policy:"single_experiment",holdback:0,experiments:[{id:t||"",variations:[{id:e||"",actions:[]}],audienceIds:[]}],integrationStringVersion:1}},t.createLayerState=function(n,t,e,i){return void 0===i&&(i=!1),{layerId:n,decision:{layerId:n,experimentId:t,variationId:e,isLayerHoldback:i||!1},decisionTicket:{audienceIds:[]}}},t.getIntegrationTypes=function(n){return i.keys(i.reduce(i.keys(n.integrationSettings),(function(n,t){return i.isNaN(Number(t))||(t="custom"),n[t]=1,n}),{}))}},9488:function(n,t,e){var i=e(2600);t.y=function(n,t){if(!t)return 0;for(var e=t.toString().split("."),r=n.toString().split("."),o=0;o<e.length;o++){if(i.isUndefined(r[o]))return-1;if(isNaN(Number(r[o]))){if(r[o]!==e[o])return-1}else{if(Number(r[o])<Number(e[o]))return-1;if(Number(r[o])>Number(e[o]))return 1}}return 0}},8131:function(n,t,e){var i=e(2600),r=e(4705),o=e(8642),a="or",u="not";var c={};function s(n,t){var e;if(i.isArray(n)){var u,s;n[0]in c?(u=n[0],s=n.slice(1)):(u=a,s=n),o.groupCollapsed('Condition / Applying operator "'+u+'" with args',r.stringify(s));try{e=c[u](s,t),o.debug("Condition / Result:",e)}finally{o.groupEnd()}return e}return e=t(n),o.debug("Condition / Evaluated:",r.stringify(n),":",e),e}c["and"]=function(n,t){for(var e,r,o=0;o<n.length;o++){if(!1===(e=s(n[o],t)))return!1;i.isUndefined(e)&&(r=!0)}if(!r)return!0},c[a]=function(n,t){for(var e,r=!1,o=0;o<n.length;o++){if(!0===(e=s(n[o],t)))return!0;i.isUndefined(e)&&(r=!0)}if(!r)return!1},c[u]=function(n,t){if(1!==n.length)return!1;var e=s(n[0],t);return i.isUndefined(e)?void 0:!e},n.exports={evaluate:s}},9805:function(n,t,e){var i=e(2600),r=e(8741);function o(n){if((n=(n||"").toLowerCase())in c)return n;var t=i.keys(c);return i.find(t,(function(t){var e=c[t];return i.includes(e,n)}))||"unknown"}function a(n,t,e){return t||("unknown"===n?"unknown":e?"mobile":"desktop_laptop")}t.parseUA=function(n){var t=new r(n),e=t.getBrowser(),i=t.getOS(),c=t.getDevice(),f=(i.name||"unknown").toLowerCase(),l=(e.name||"unknown").toLowerCase(),d=u(c.type,l,f);return{browser:{id:o(e.name),version:e.version},platform:{name:f,version:i.version},device:{model:s[c.model]||"unknown",type:a(l,c.type,d),isMobile:d}}};var u=function(n,t,e){if(i.includes(["mobile","tablet"],n)||i.includes(["opera mini"],t))return!0;return!!i.includes(["android","blackberry","ios","windows phone"],e)},c={gc:["chrome","chromium","silk","yandex","maxthon","chrome webview"],edge:["edge"],ie:["internet explorer","iemobile"],ff:["firefox","iceweasel"],opera:["opera","opera mini","opera tablet"],safari:["safari","mobile safari","webkit"],ucbrowser:["uc browser"]},s={iPhone:"iphone",iPad:"ipad"}},372:function(n,t,e){var i=e(2600);function r(){this.q={}}r.prototype.register=function(n,t){if(1!==arguments.length){if(this.q[n])throw new Error("Module already registered for: "+n);this.q[n]=t}else{var e=this;i.each(n,(function(n,t){e.register(t,n)}))}},r.prototype.get=function(n){return this.q[n]},r.prototype.getModuleKeys=function(){var n=this.q;return i.keys(n)},r.prototype.evaluate=function(n){var t=n.length,e=n.slice(0,t-1),r=n[t-1];if("function"!=typeof r)throw new Error("Evaluate must take a function as last element in array");var o=i.map(e,i.bind(this.get,this));return r.apply(null,o)},r.prototype.reset=function(){this.q={}},n.exports={create:function(){return new r}}},1385:function(n,t,e){var i=e(2600);function r(n,t,e){this.H=n,this.Y=t,this.K=0,this.$=!1,this.W={},i.extend(this,e),this.X={},this.initialize&&this.initialize()}r.prototype.J=function(n,t){var e=this.W[n];e&&"function"==typeof e&&e.call(this,t,n)},r.prototype.Z=function(){return i.cloneDeep(this.X)},r.prototype.on=function(n,t){this.W[n]=i.bind(t,this)},r.prototype.observe=function(n){return this.Y.nn(this.H,n)},r.prototype.emitChange=function(){this.$=!0,this.K++},r.prototype.hasChanges=function(){return this.$},r.prototype.resetChange=function(){this.$=!1},r.prototype.getStateId=function(){return this.K},r.prototype.tn=function(){this.reset&&"function"==typeof this.reset&&this.reset(),this.initialize()},n.exports=r},6840:function(n,t,e){var i=e(2600),r=e(1385);function o(n){n=n||{},this.en={},this.rn={},this.an=0,this.un=[],this.cn=[]}function a(n,t){return function(){var e=n.indexOf(t);-1!==e&&n.splice(e,1)}}o.prototype.registerStores=function(n){i.forOwn(n,i.bind((function(n,t){this.en[t]=new r(t,this,n)}),this))},o.prototype.getStore=function(n){return this.en[n]},o.prototype.dispatch=function(n,t){this.dispatchId++,i.each(this.un,i.bind((function(e){e.call(this,n,t)}),this)),i.forOwn(this.en,(function(e){e.J(n,t)})),i.each(this.cn,i.bind((function(e){e.call(this,n,t)}),this)),i.forOwn(this.en,i.bind((function(n,t){n.hasChanges()&&this.rn[t]&&(n.resetChange(),i.each(this.rn[t],(function(t){t(n)})))}),this))},o.prototype.reset=function(){this.rn={},i.forOwn(this.en,(function(n,t){n.tn()}))},o.prototype.getState=function(){var n={};return i.forOwn(this.en,(function(t,e){n[e]=t.Z()})),n},o.prototype.onPreAction=function(n){var t=this.un;return t.push(n),a(t,n)},o.prototype.onPostAction=function(n){var t=this.cn;return t.push(n),a(t,n)},o.prototype.nn=function(n,t){return this.rn[n]||(this.rn[n]=[]),this.rn[n].push(t),a(this.rn[n],t)},n.exports={create:function(n){return new o(n)}}},4705:function(n,t,e){var i=e(2600);function r(n){var t,e,r=[Array.prototype],o=[];i.each(r,(function(n){i.isUndefined(n.toJSON)||(o.push(n.toJSON),delete n.toJSON)}));try{t=n()}catch(a){e=a}finally{i.each(o,(function(n,t){r[t].toJSON=n}))}if(e)throw e;return t}t.stringify=function(){return r(i.bind((function(){return JSON.stringify.apply(null,this)}),arguments))},t.parse=JSON.parse},4360:function(n,t,e){var i=e(2600);t.hasMatch=function(n,t,e){var r=!i.isUndefined(e)&&null!==e,o=!i.isUndefined(n)&&null!==n;switch(t||(o?"exact":"exists")){case"exists":return r;case"exact":return r&&String(e)===n;case"substring":return r&&String(e).indexOf(n)>-1;case"regex":try{return!(!o||!r)&&new RegExp(n).test(String(e))}catch(f){}return!1;case"range":var a=n.split(":"),u=parseFloat(a[0]),c=parseFloat(a[1]),s=parseFloat(e);return s>=u&&s<=c;default:return!1}}},7929:function(n,t,e){n.exports=e(7704)},8055:function(n,t,e){var i=e(2600),r=e(8642);function o(n,t){this.sn=n,this.fn=t}o.prototype.ln=function(n){return[this.fn,n].join("$$")},o.prototype.dn=function(n){return n.replace(this.fn+"$$","")},o.prototype.setItem=function(n,t){try{this.sn.setItem(this.ln(n),t)}catch(e){r.warn("Failed to save",n,"to localStorage:",e)}},o.prototype.removeItem=function(n){this.sn.removeItem(this.ln(n))},o.prototype.getItem=function(n){var t=null;try{t=this.sn.getItem(this.ln(n))}catch(e){}return t},o.prototype.keys=function(){var n=i.keys(this.sn);return i.map(i.filter(n,i.bind((function(n){return i.includes(n,this.fn)}),this)),i.bind(this.dn,this))},o.prototype.allKeys=function(){return i.keys(this.sn)},o.prototype.allValues=function(){return i.values(this.sn)},n.exports={create:function(n,t){return new o(n,t)},mockStorage:{keys:function(){},getItem:function(n){},removeItem:function(n){},setItem:function(n,t){}}}},2227:function(n,t,e){var i=e(2600),r=e(6663),o=e(311),a=e(4705),u=e(3819).mM,c=e(8642),s=e(9737),f=e(6321).get("stores/pending_events"),l=o.StorageKeys.PENDING_EVENTS;t.persistPendingEvents=function(){try{var n=f.getEventsString();u.setItem(l,n),e(6332).setItem(l,n)}catch(t){c.warn("PendingEvents / Unable to set localStorage key, error was: ",t),r.emitInternalError(t)}},t.getPendingEvents=function(){try{return a.parse(u.getItem(l))}catch(n){return null}},t.retryPendingEvents=function(n){i.forOwn(n,(function(n,t){s.retryableRequest(n.data,t,n.retryCount)})),i.isEmpty(n)||c.log("Retried pending events: ",n)}},3412:function(n,t,e){var i=e(2600),r=e(7547),o=e(6321),a=e(311),u=e(3677),c=e(3637);t.registerApiModule=function(n,t){i.isArray(t)&&(t=o.evaluate(t)),c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.apiModules,name:n,plugin:t})},t.registerDependency=function(n,t){o.get(n)||o.register(n,t)},t.registerVisitorProfileProvider=function(n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.visitorProfileProviders,name:n.provides,plugin:n})},t.registerViewProvider=function(n){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.viewProviders,name:n.provides,plugin:n})},t.registerAudienceMatcher=function(n,t){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.audienceMatchers,name:n,plugin:t})},t.registerViewMatcher=function(n,t){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.viewMatchers,name:n,plugin:t})},t.registerAnalyticsTracker=function(n,t){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.analyticsTrackers,name:n,plugin:t})},t.registerViewTagLocator=function(n,t){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.viewTagLocators,name:n,plugin:t})},t.registerAudiencePlugin=function(n){n.dependencies&&i.each(n.dependencies,(function(n,e){t.registerDependency(e,n)}));var e,r,a="vendor."+n.vendor;e=i.isString(n.provider)?o.get(n.provider)(n.vendor):i.isFunction(n.provider)?n.provider(n.vendor):i.cloneDeep(n.provider),t.registerVisitorProfileProvider(i.extend(e,{provides:a})),r=i.isString(n.matcher)?o.get(n.matcher):n.matcher;var u={fieldsNeeded:[a],match:function(n,t){return r(n[a],t)}};t.registerAudienceMatcher(a,u)},t.registerWidget=function(n){return i.isArray(n)&&(n=o.evaluate(n)),{showToken:u.on({filter:{type:"showWidget",name:n.widgetId},handler:n.showFn}),hideToken:u.on({filter:{type:"hideWidget",name:n.widgetId},handler:n.hideFn})}},t.registerChangeApplier=function(n,t){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.changeAppliers,name:n,plugin:t})},t.registerDecider=function(n,t){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.deciders,name:n,plugin:t})},t.registerEventImplementation=function(n,t){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.eventImplementations,name:n,plugin:t})},t.registerViewTrigger=function(n,t){c.dispatch(r.REGISTER_PLUGIN,{type:a.PluginTypes.viewTriggers,name:n,plugin:t})}},3101:function(n,t,e){var i=e(2600),r=e(6321),o=":",a="holdback",u="treatment",c="",s=e(8642),f=e(6650);function l(n){return n.replace(/[^a-zA-Z0-9\.\~\!\*\(\)\']+/g,"_")}t.formatNamesAndIdsForAnalytics=function(n,t,e,o){var a={layer:n.name||c,experiment:t.name||c,variation:e.name||c};o&&(a=i.mapValues(a,l));var u,s=!n.integrationStringVersion||1===n.integrationStringVersion;if(a.experiment===c&&s)if(u=t.audienceIds,!i.isEmpty(u)&&i.includes(["and","or","not"],u[0]))a.experiment="Exp";else{var f=r.get("stores/audience_data");a.experiment=function(n,t){return i.isEmpty(t)?"everyone_else":i.reduce(t,(function(t,e){var i=n.get(e);return i?t+l(i.name?i.name:i.id)+",":t}),"").slice(0,-1)}(f,t.audienceIds)}return{names:a,idStrings:{layer:"("+l(n.id)+")",experiment:"("+l(t.id)+")",variation:"("+l(e.id)+")"}}},t.combineAndTruncateIdAndName=function(n,t,e){var i=e-t.length;if(i<0&&(s.warn("maxLength must be at least long enough to fit the entity ID, which is length"+t.length+". Defaulting to only use entity ID as name."),n=c),n===c)return t;if(n.length>i){var r=Math.min(n.length,i);return(n=n.substring(0,r))+t}return n+" "+t},t.generateAnalyticsString=function(n,e,r,c,s,l){return n.integrationStringVersion&&2===n.integrationStringVersion?function(n,e,r,u,c,s){if(f.isSingleExperimentPolicy(n.policy)&&u)return;var l=!f.isSingleExperimentPolicy(n.policy)&&u,d=t.formatNamesAndIdsForAnalytics(n,e,r,s),v=[d.names.experiment,d.names.variation],h=[d.idStrings.experiment,d.idStrings.variation];f.isSingleExperimentPolicy(n.policy)||(v.unshift(d.names.layer),h.unshift(d.idStrings.layer));var p=i.reduce(h,(function(n,t){return n+t.length}),0),g=v.length-1+(l?1:0),m=p+g*o.length;if(l&&(m+=a.length),m>c)throw new Error("The analytics string size is too low to send the entity IDs.");for(var _=c-m,w=v.length,y=[],b=v.length-1;b>=0;b--){var E=v[b],I=Math.min(E.length,Math.floor(_/w));_-=I,w--,y.unshift(E.substring(0,I))}var A=i.map(y,(function(n,t){return n+h[t]}));return l&&A.push(a),A.join(o)}(n,e,r,c,s,l):function(n,e,r,c,s,l){var d=c?a:u,v=3*o.length,h=t.formatNamesAndIdsForAnalytics(n,e,r,l),p=h.names,g=h.idStrings,m=i.reduce(g,(function(n,t){return n+t.length}),0);if(m+v+d.length>s)throw new Error("The analytics string size is too low to send the campaign, experiment, and variation IDs.");var _=s-m-v-d.length,w={};w.variation=Math.min(p.variation.length,Math.floor(_/3)),_-=w.variation,w.experiment=Math.min(p.experiment.length,Math.floor(_/2)),_-=w.experiment,w.layer=_;var y={};i.each(p,(function(n,t){y[t]=n.substring(0,w[t])}));var b=[];return f.isSingleExperimentPolicy(n.policy)||b.push(y.layer+g.layer),(b=b.concat([y.experiment+g.experiment,y.variation+g.variation,d])).join(o)}(n,e,r,c,s,l)}},8261:function(n,t,e){var i=e(2600);n.exports=function(n,t){n=function(n){var t=n.split("?");if(t[1]){var e=t[1].split("#"),r=e[0],a=e[1],u=r.split("&"),c=[];return i.each(u,(function(n){0!==n.indexOf(o)&&c.push(n)})),t[1]="",c.length>0&&(t[1]="?"+c.join("&")),a&&(t[1]+="#"+a),t.join("")}return n}(n);var e=t.value;switch(t.match){case"exact":return(n=c(n))===c(e);case"regex":try{return Boolean(n.match(e))}catch(r){}return!1;case"simple":return(n=u(n))===(e=u(e));case"substring":return n=c(n,!0),e=c(e,!0),-1!==n.indexOf(e);default:return!1}};var r=["www."],o="optimizely_",a=["https?://.*?.?optimizelyedit.(com|test)/","https?://.*.?optimizelypreview.(com|test)/","https?://(edit|preview)(-hrd|-devel)?.optimizely.(com|test)/","https?://.*?.?optimizelyedit(-hrd)?.appspot.com/","https?://"];function u(n){return c(function(n){var t=n.indexOf("?");return-1!==t&&(n=n.substring(0,t)),-1!==(t=n.indexOf("#"))&&(n=n.substring(0,t)),n}(n))}function c(n,t){n=(n=n.replace("/?","?")).toLowerCase().replace(/[/&?]+$/,"");var e=a.slice(0);t||(e=e.concat(r));for(var i=e.length,o=0;o<i;o++){var u=e[o],c=new RegExp("^"+u);n=n.replace(c,"")}return n}},4594:function(n,t,e){var i=e(2600),r=e(9876).getFieldValue,o=e(4360);n.exports=function(n,t){var e=r(n,t.name.split("."));return i.isArray(e)?i.some(e,i.partial(o.hasMatch,t.value,t.match)):o.hasMatch(t.value,t.match,e)}},4866:function(n,t,e){var i=e(2600),r=e(7547),o=e(5281),a=e(8642);n.exports={initialize:function(){this.X={actions:{},actionState:{}},this.on(r.DATA_LOADED,this.vn),this.on(r.ACTION_EXECUTED,this.hn),this.on(r.SET_CHANGE_APPLIER,this.pn),this.on(r.REMOVE_ACTION_STATE,this.gn)},vn:function(n){var t=this;i.isEmpty(n.data.layers)||(i.each(n.data.layers,(function(n){var e;if(n.changes){var r="layerId:"+n.id;e={id:r,layerId:n.id,changeSet:n.changes,type:"layer"},o.deepFreeze(e),t.X.actions[r]=e}i.each(n.experiments,(function(r){if(r.changes){var a="experimentId:"+r.id;e={id:a,layerId:n.id,experimentId:r.id,changeSet:r.changes,type:"experiment"},o.deepFreeze(e),t.X.actions[a]=e}i.each(r.variations,(function(a){i.each(a.actions,(function(i){var u=i.pageId||i.viewId,c=r.id+":"+a.id+":"+u;e={id:c,layerId:n.id,experimentId:r.id,variationId:a.id,pageId:u,changeSet:i.changes,type:"variation"},o.deepFreeze(e),t.X.actions[c]=e}))}))}))})),this.emitChange())},hn:function(n){var t=n.actionId;i.isUndefined(t)||this.X.actionState[t]||(this.X.actionState[t]={})},pn:function(n){var t=n.actionId,e=n.changeId;this.X.actionState[t]?this.X.actionState[t][e]=n.changeApplier:a.warn("Action Data / Attempted to set changeApplier for inactive action: ",t)},gn:function(n){delete this.X.actionState[n.actionId]},get:function(n){return o.safeReference(this.X.actions[n])},getActionState:function(n){return o.safeReference(this.X.actionState[n])},getByChangeId:function(n){return i.find(this.X.actions,{changeSet:[{id:n}]})},getAllActionIdsByPageId:function(n){return i.map(i.filter(this.X.actions,{pageId:n}),"id")},getChangeApplier:function(n,t){var e=this.X.actionState[t];if(e)return e[n]},getExperimentVariationActions:function(n,t){return o.safeReference(i.filter(this.X.actions,{experimentId:n,variationId:t}))},getLayerActions:function(n){return o.safeReference(i.filter(this.X.actions,{id:"layerId:"+n}))},getExperimentActions:function(n){return o.safeReference(i.filter(this.X.actions,{id:"experimentId:"+n}))},getAll:function(){return o.safeReference(i.values(this.X.actions))}}},5967:function(n,t,e){var i=e(7547);n.exports={initialize:function(){this.X={},this.on(i.REGISTER_ASYNC_DEFERRED,this.mn),this.on(i.RESOLVE_DEFERRED,this._n),this.on(i.REJECT_DEFERRED,this.wn)},getRequest:function(n){return this.X[n]},getPromise:function(n){var t=this.getRequest(n);if(t)return t.promise},mn:function(n){this.X[n.source]={promise:n.promise,resolver:n.resolver,rejecter:n.rejecter}},_n:function(n){var t=this.getRequest(n.source);if(!t)throw new Error("No request registered for source: "+n.source);t.resolver(n.resolveWith)},wn:function(n){var t=this.getRequest(n.source);if(!t)throw new Error("No request registered for source: "+n.source);if(!t.rejecter)throw new Error("No rejecter registered for source: "+n.source);t.rejecter(n.rejectWith)}}},6693:function(n,t,e){var i=e(2600),r=e(7547),o=e(5281);function a(n,t){return t||(t={}),n?(i.each(n,(function(n){if(!i.isString(n)){if(i.isObject(n)){var e=n.type,r=n.name||"_";t[e]||(t[e]={}),t[e][r]=!0}i.isArray(n)&&a(n,t)}})),t):t}n.exports={initialize:function(){this.X={audiences:{},featuresNeeded:{}},this.on(r.DATA_LOADED,this.vn)},vn:function(n){i.isEmpty(n.data.audiences)||(i.each(n.data.audiences,i.bind((function(n){o.deepFreeze(n),i.merge(this.X.featuresNeeded,a(n.conditions)),this.X.audiences[n.id]=n}),this)),this.emitChange())},getAll:function(){return o.safeReference(i.values(this.X.audiences))},getFeaturesNeeded:function(n){return o.safeReference(this.X.featuresNeeded[n]||{})},getAudiencesMap:function(){return o.safeReference(this.X.audiences)},get:function(n){return o.safeReference(this.X.audiences[n])},getAudienceName:function(n){return i.find(i.values(this.X.audiences),{id:n}).name||"Aud "+n}}},3477:function(n,t,e){var i=e(2600),r=e(7547),o=e(5281);n.exports={initialize:function(){this.X={},this.on(r.ADD_CHANGE,this.yn),this.on(r.DATA_LOADED,this.vn)},getChange:function(n){return this.X[n]},vn:function(n){i.isEmpty(n.data.changes)||i.each(n.data.changes,i.bind(this.yn,this))},yn:function(n){o.deepFreeze(n),this.X[n.id]=n,this.emitChange()}}},4727:function(n,t,e){var i=e(2600),r=e(7547),o=e(311);n.exports={initialize:function(){this.X={},i.each(o.Lifecycle,i.bind((function(n){this.X[n]=[]}),this)),this.on(r.ADD_CLEANUP_FN,this.bn),this.on(r.CLEAR_CLEANUP_FN,this.En)},getCleanupFns:function(n){return i.cloneDeep(this.X[n])},bn:function(n){this.X[n.lifecycle].push(n.cleanupFn),this.emitChange()},En:function(n){var t=this.X[n.lifecycle];if(n.cleanupFn){var e=t.indexOf(n.cleanupFn);e>-1&&(t.splice(e,1),this.emitChange())}else this.X[n.lifecycle]=[],this.emitChange()}}},726:function(n,t,e){var i=e(7547),r=e(536);n.exports={initialize:function(){this.X={name:r.NAME,version:r.VERSION},this.on(i.SET_CLIENT_NAME,this.In),this.on(i.SET_CLIENT_VERSION,this.An)},getClientName:function(){return this.X.name},getClientVersion:function(){return this.X.version},In:function(n){n&&(this.X.name=n),this.emitChange()},An:function(n){n&&(this.X.version=n),this.emitChange()}}},1131:function(n,t,e){var i=e(7547);n.exports={initialize:function(){this.X={currentDomain:null,defaultAgeSeconds:15552e3,autoRefresh:true},this.on(i.SET_COOKIE_DOMAIN,this.Tn),this.on(i.SET_COOKIE_AGE,this.Sn),this.on(i.SET_COOKIE_AUTO_REFRESH,this.kn)},getCurrentDomain:function(){return this.X.currentDomain},getDefaultAgeInSeconds:function(){return this.X.defaultAgeSeconds},getAutoRefresh:function(){return this.X.autoRefresh},Tn:function(n){this.X.currentDomain=n,this.emitChange()},Sn:function(n){this.X.defaultAgeSeconds=n,this.emitChange()},kn:function(n){this.X.autoRefresh=n,this.emitChange()}}},5197:function(n,t,e){var i=e(2600),r=e(7547),o=e(5281);n.exports={initialize:function(){this.X={},this.on(r.DATA_LOADED,this.vn)},vn:function(n){i.isEmpty(n.data.dimensions)||(i.each(n.data.dimensions,i.bind((function(n){o.deepFreeze(n),this.X[n.id]=n}),this)),this.emitChange())},getAll:function(){return o.safeReference(i.values(this.X))},getById:function(n){return o.safeReference(this.X[n])},getByApiName:function(n){return o.safeReference(i.find(i.values(this.X),{apiName:n}))}}},3608:function(n,t,e){var i=e(2600),r=e(7547);n.exports={initialize:function(){this.X={disabled:!1,forceAudienceIds:[],forceVariationIds:[],alreadyInitialized:!1,mutationObserverAPISupported:!1,isEditor:!1,isPreview:!1,isLegacyPreview:!1,isSlave:!1,previewLayerIds:[],projectToken:null,shouldOptOut:!1,trackingDisabled:!1,isRunningInV2Editor:!1,isRunningInDesktopApp:!1,forceTracking:!1},this.on(r.LOAD_DIRECTIVE,this.Rn)},getAll:function(){return i.cloneDeep(this.X)},conflictInObservingChanges:function(){return!this.X.mutationObserverAPISupported},isDisabled:function(){return this.X.disabled},isEditor:function(){return this.X.isEditor},clientHasAlreadyInitialized:function(){return this.X.alreadyInitialized},getForceAudienceIds:function(){return this.X.forceAudienceIds},getForceVariationIds:function(){return this.X.forceVariationIds},getPreviewLayerIds:function(){return this.X.previewLayerIds},getProjectToken:function(){return this.X.projectToken},getForceTracking:function(){return this.X.forceTracking},shouldActivate:function(){return!this.X.isEditor&&!this.isDisabled()},shouldBootstrapDataForPreview:function(){return this.X.isPreview},shouldBootstrapDataForEditor:function(){return this.X.isEditor},shouldInitialize:function(){return!(this.shouldLoadPreview()||this.isDisabled()||this.getProjectToken())},shouldLoadPreview:function(){return!(this.X.isPreview||this.X.isLegacyPreview||!this.getProjectToken()||this.X.isEditor)},shouldBailForDesktopApp:function(){return!this.X.isEditor&&this.X.isRunningInDesktopApp},shouldLoadInnie:function(){return!this.X.isSlave&&!this.X.isEditor&&this.X.isRunningInV2Editor},shouldObserveChangesIndefinitely:function(){return this.X.mutationObserverAPISupported},shouldObserveChangesUntilTimeout:function(){return!this.shouldObserveChangesIndefinitely()},shouldOptOut:function(){return this.X.shouldOptOut},shouldSendTrackingData:function(){return!this.X.trackingDisabled&&(!!this.X.forceTracking||!this.X.isPreview&&i.isEmpty(this.getForceVariationIds())&&i.isEmpty(this.getForceAudienceIds()))},isSlave:function(){return this.X.isSlave},isRunningInDesktopApp:function(){return this.X.isRunningInDesktopApp},isRunningInV2Editor:function(){return this.X.isRunningInV2Editor},Rn:function(n){i.extend(this.X,n),this.emitChange()}}},5160:function(n,t,e){var i=e(2600),r=e(7547),o=e(5281);n.exports={initialize:function(){this.X={},this.on(r.DATA_LOADED,this.vn)},getAll:function(){return o.safeReference(i.values(this.X))},getEventsMap:function(){return o.safeReference(this.X)},get:function(n){return o.safeReference(this.X[n])},getByApiName:function(n){return o.safeReference(i.find(i.values(this.X),{apiName:n}))},getByPageId:function(n){return o.safeReference(i.filter(this.X,{pageId:n}))},vn:function(n){i.isEmpty(n.data.events)||(i.each(n.data.events,i.bind((function(n){n.pageId||(n.pageId=n.viewId),o.deepFreeze(n),this.X[n.id]=n}),this)),this.emitChange())}}},6446:function(n,t,e){var i=e(2600),r=e(7547);function o(n){var t=[];return n&&i.isObject(n)?(n.type&&t.push(n.type),t.push("|"),n.type&&n.name&&t.push(n.name),t.join("")):"|"}n.exports={initialize:function(){this.X={handlers:{}},this.on(r.ADD_EMITTER_HANDLER,this.Nn),this.on(r.REMOVE_EMITTER_HANDLER,this.Dn)},getHandlers:function(n,t){var e=[null,{type:n.type},{type:n.type,name:n.name}],r=[];return i.each(e,i.bind((function(n){var t=o(n),e=this.X.handlers[t];e&&(r=r.concat(e))}),this)),t&&(r=i.filter(r,(function(n){return!n.publicOnly}))),r},Nn:function(n){var t=o(n.filter);this.X.handlers[t]||(this.X.handlers[t]=[]),this.X.handlers[t].push({handler:n.handler,token:n.token,publicOnly:!!n.publicOnly,emitErrors:!!n.emitErrors}),this.emitChange()},Dn:function(n){var t=!1,e=n.token;i.forOwn(this.X.handlers,i.bind((function(n,r){var o=i.filter(n,(function(n){return n.token!==e}));o.length!==n.length&&(t=!0,this.X.handlers[r]=o)}),this)),t&&this.emitChange()}}},952:function(n,t,e){var i=e(2600),r=e(7547),o=e(5281);n.exports={initialize:function(){this.X={holdback:0,isGlobalHoldback:null,listTargetingKeys:[],revision:null,projectId:null,accountId:null,namespace:null,activationId:null,activationTimestamp:null,dcpServiceId:null,dcpKeyfieldLocators:[],recommenderServices:[],anonymizeIP:null,projectJS:null,snippetId:null,plugins:[],domContentLoaded:!1,experimental:{}},this.on(r.DATA_LOADED,this.Cn),this.on(r.ACTIVATE,this.On),this.on(r.RECORD_GLOBAL_DECISION,this.xn),this.on(r.SET_DOMCONTENTLOADED,this.Pn)},getRevision:function(){return this.X.revision},getGlobalHoldbackThreshold:function(){return this.X.holdback},getProjectId:function(){return this.X.projectId},getSnippetId:function(){return this.X.snippetId},getAccountId:function(){return this.X.accountId},getNamespace:function(){return this.X.namespace},getActivationId:function(){return this.X.activationId},getActivationTimestamp:function(){return this.X.activationTimestamp},getAnonymizeIP:function(){return this.X.anonymizeIP},isGlobalHoldback:function(){return!!this.X.isGlobalHoldback},getListTargetingKeys:function(){return this.X.listTargetingKeys.slice()},getDCPServiceId:function(){return this.X.dcpServiceId},getDCPKeyfieldLocators:function(){return this.X.dcpKeyfieldLocators},getRecommenderServices:function(){return this.X.recommenderServices},getProjectJS:function(){return this.X.projectJS},getPlugins:function(){return this.X.plugins},getExperimental:function(){return o.safeReference(this.X.experimental)},domContentLoadedHasFired:function(){return this.X.domContentLoaded},On:function(n){this.X.activationId=n.activationId,this.X.activationTimestamp=n.activationTimestamp,this.X.isGlobalHoldback=null},xn:function(n){var t=n.isGlobalHoldback;if(null!==this.X.isGlobalHoldback&&this.X.isGlobalHoldback!==t)throw new Error("Attempted to change already set global holdback!");this.X.isGlobalHoldback=t,this.emitChange()},Cn:function(n){var t=i.pick(n.data,["holdback","accountId","projectId","snippetId","namespace","revision","listTargetingKeys","dcpServiceId","dcpKeyfieldLocators","recommenderServices","anonymizeIP","plugins","projectJS","experimental"]);if(0!==i.keys(t).length){i.extend(this.X,{listTargetingKeys:[],dcpServiceId:null,dcpKeyfieldLocators:[]},t),this.emitChange()}},Pn:function(){this.X.domContentLoaded=!0,this.emitChange()}}},27:function(n,t,e){var i=e(2600),r=e(7547),o=e(5281);n.exports={initialize:function(){this.X={},this.on(r.DATA_LOADED,this.vn)},vn:function(n){i.isEmpty(n.data.groups)||(i.each(n.data.groups,i.bind((function(n){o.deepFreeze(n),this.X[n.id]=n}),this)),this.emitChange())},getAll:function(){return o.safeReference(i.values(this.X))},getGroupsMap:function(){return o.safeReference(this.X)},get:function(n){return o.safeReference(this.X[n])}}},2822:function(n,t,e){var i=e(2600),r=e(7547),o=e(5272);n.exports={initialize:function(){this.X={originalPushState:null,originalReplaceState:null},this.on(r.ENSURE_ORIGINAL_PUSHSTATE,this.Mn),this.on(r.ENSURE_ORIGINAL_REPLACESTATE,this.Ln)},getOriginalPushState:function(){return this.X.originalPushState},getOriginalReplaceState:function(){return this.X.originalReplaceState},Mn:function(){this.X.originalPushState||(this.X.originalPushState=i.bind(o.getGlobal("history").pushState,o.getGlobal("history")))},Ln:function(){this.X.originalReplaceState||(this.X.originalReplaceState=i.bind(o.getGlobal("history").replaceState,o.getGlobal("history")))}}},2193:function(n,t,e){var i=e(2600),r=e(7547);n.exports={initialize:function(){this.X={},this.on(r.DATA_LOADED,this.vn),this.on(r.SET_INTEGRATION_SETTINGS,this.Vn)},vn:function(n){i.isEmpty(n.data.integrationSettings)||(i.each(n.data.integrationSettings,i.bind((function(n){this.X[n.id]=n}),this)),this.emitChange())},Vn:function(n){var t=this.X[n.id];t?i.extend(t,n):this.X[n.id]=n},getAll:function(){return i.cloneDeep(i.values(this.X))},get:function(n){return i.cloneDeep(this.X[n])},getReference:function(n){return this.X[n]}}},9820:function(n,t,e){var i=e(2600),r=e(7547),o=e(8642),a="*";n.exports={initialize:function(){this.X={},this.on(r.LOAD_PERSISTED_LAYER_STATES,this.Fn),this.on(r.RECORD_LAYER_DECISION,this.Un),this.on(r.RECORD_LAYER_DECISION_EVENT_ID,this.zn)},getLayerState:function(n,t){if(this.X[n]){var e=this.X[n];if(i.keys(e).length>1&&!t)throw new Error("View Id must be specified when more than one layerState for layer.");return t?i.cloneDeep(i.find(e,{pageId:t})):i.cloneDeep(e["*"])}},getLayerStates:function(n){var t=[];for(var e in this.X)i.forEach(this.X[e],(function(e){(i.isUndefined(n)||e.namespace===n)&&t.push(i.cloneDeep(e))}));return t},getLayerStatesForAnalytics:function(){var n=[];for(var t in this.X)i.forEach(this.X[t],(function(t){n.push(i.pick(t,["layerId","decision","decisionEventId"]))}));return n},Fn:function(n){n.merge||(this.X={}),i.each(n.layerStates,i.bind((function(n){var t=n.layerId;n.pageId||(n.pageId=n.viewId);var e=n.pageId||a,r=this.X[t];if(i.isUndefined(r))this.X[t]={},this.X[t][e]=n;else{var o=r[e];(!o||n.decisionTimestamp>(o.decisionTimestamp||0))&&(this.X[t][e]=n)}}),this)),this.emitChange()},Un:function(n){var t={layerId:n.layerId,revision:n.revision,namespace:n.namespace,pageId:n.pageId,decisionTicket:n.decisionTicket,decision:n.decision,decisionActivationId:n.activationId,decisionTimestamp:n.timestamp,decisionEventId:null},e=this.X[n.layerId]||{};n.pageId?(delete e["*"],e[n.pageId]=t):(e={})["*"]=t,this.X[n.layerId]=e,this.emitChange()},zn:function(n){var t=n.layerId,e=n.pageId||a;this.X[t]?this.X[t][e]?(this.X[t][e].decisionEventId=n.decisionId,this.emitChange()):o.warn("Not recording decision event: Layer state not found for view",e):o.warn("Not recording decision event: Campaign not registered",t)}}},4542:function(n,t,e){var i=e(2600),r=e(7547),o=e(5281),a=e(6650);n.exports={initialize:function(){this.X={layers:{},experiments:{},variations:{}},this.on(r.DATA_LOADED,this.vn)},vn:function(n){if(!i.isEmpty(n.data.layers)){var t=this;i.each(n.data.layers,(function(n){i.each(n.experiments,(function(e){n.pageIds||(n.pageIds=n.viewIds),e.campaignName||a.isSingleExperimentPolicy(n.policy)?a.isSingleExperimentPolicy(n.policy)&&n.groupId&&(e.groupId=n.groupId):e.campaignName=n.name,i.each(e.variations,(function(n){i.each(n.actions,(function(n){n.pageId||(n.pageId=n.viewId)})),t.X.variations[n.id]=n})),t.X.experiments[e.id]=e})),o.deepFreeze(n),t.X.layers[n.id]=n})),this.emitChange()}},getAll:function(){return o.safeReference(i.values(this.X.layers))},getCampaignsMap:function(){return o.safeReference(this.X.layers)},getExperimentsMap:function(){return o.safeReference(this.X.experiments)},getVariationsMap:function(){return o.safeReference(this.X.variations)},getCount:function(){return i.keys(this.X.layers).length},getAllByPageIds:function(n){return o.safeReference(i.filter(this.X.layers,(function(t){return i.some(n,i.partial(i.includes,t.pageIds))})))},get:function(n){return o.safeReference(this.X.layers[n])},getLayerByExperimentId:function(n){var t=i.find(this.X.layers,(function(t){return i.find(t.experiments,{id:n})}));return o.safeReference(t)},getExperimentByVariationId:function(n){var t;return i.some(this.X.layers,(function(e){return i.some(e.experiments,(function(e){return i.find(e.variations,{id:n})&&(t=e),t})),t})),o.safeReference(t)}}},6407:function(n,t,e){var i=e(7547);n.exports={initialize:function(){this.X={logs:[]},this.on(i.LOG,this.jn)},getLogs:function(){return this.X.logs},jn:function(n){this.X.logs.push(n),this.emitChange()},Z:function(){return this.X.logs.slice()}}},3394:function(n,t,e){var i=e(7547),r=e(5281);n.exports={initialize:function(){this.X={data:null,hasTracked:null},this.on(i.LOAD_REDIRECT_DATA,this.Gn),this.on(i.REGISTER_TRACKED_REDIRECT_DATA,this.Bn)},get:function(){return r.safeReference(this.X.data)},hasTracked:function(){return this.X.hasTracked},Gn:function(n){r.deepFreeze(n),this.X.data=n,this.X.hasTracked=!1,this.emitChange()},Bn:function(){this.X.hasTracked=!0}}},8484:function(n,t,e){var i=e(2600),r=e(7547),o=e(4705);n.exports={initialize:function(){this.X={},this.on(r.SET_PENDING_EVENT,this.qn),this.on(r.REMOVE_PENDING_EVENT,this.Hn),this.on(r.LOAD_PENDING_EVENTS,this.Yn)},getEvents:function(){return this.X},getEventsString:function(){return o.stringify(this.X)},qn:function(n){i.keys(this.X).length>=1e3&&this.Kn();var t=n.id,e=n.retryCount;this.X[t]&&this.X[t].retryCount===e||(this.X[t]={id:t,timeStamp:n.timeStamp,data:n.data,retryCount:e},this.emitChange())},Hn:function(n){delete this.X[n.id],this.emitChange()},Yn:function(n){this.X=n.events,this.Kn(),this.emitChange()},Kn:function(){for(var n=i.sortBy(this.X,"timeStamp"),t=0;t<=n.length-1e3;t++)delete this.X[n[t].id];this.emitChange()}}},8380:function(n,t,e){var i=e(2600),r=e(7547);n.exports={initialize:function(){this.X={layerId:null},this.on(r.ANNOUNCE_PENDING_REDIRECT,this.Gn)},isExpectingRedirect:function(){return i.isString(this.X.layerId)},getLayerId:function(){return this.X.layerId},Gn:function(n){this.isExpectingRedirect()||(this.X.layerId=n.layerId,this.emitChange())}}},2245:function(n,t,e){var i=e(2600),r=e(7547),o=e(311);n.exports={initialize:function(){this.X={},this.X[o.PerformanceData.performance_marks]={},this.on(r.SET_PERFORMANCE_MARKS_DATA,this.$n)},$n:function(n){i.isUndefined(this.X[o.PerformanceData.performance_marks][n.name])&&(this.X[o.PerformanceData.performance_marks][n.name]=[]),this.X[o.PerformanceData.performance_marks][n.name].push(n.data),this.emitChange()},getMarks:function(){return i.mapValues(this.X[o.PerformanceData.performance_marks],(function(n){return i.map(n,(function(n){return[n.startTime,n.duration]}))}))},getDurationsFor:function(n){return i.reduce(n,i.bind((function(n,t){var e=this.X[o.PerformanceData.performance_marks][t];return e&&(n[t]=Math.round(i.reduce(e,(function(n,t){return n+t.duration}),0))),n}),this),{})}}},8427:function(n,t,e){var i=e(2600),r=e(7547),o=e(311),a=e(8642);n.exports={initialize:function(){this.X=i.mapValues(o.PluginTypes,(function(){return{}})),this.on(r.REGISTER_PLUGIN,this.Wn)},Wn:function(n){var t=n.type,e=n.name,i=n.plugin;if(!t||!e)throw new Error("Missing information needed to register plugins: "+t+":"+e);if(!this.X[t])throw new Error("Invalid plugin type specified: "+t);this.X[t][e]=i,a.debug("Plugin Store: Registering Plugin :",n)},getAllPlugins:function(n){if(!n)return this.X;if(this.X[n])return this.X[n];throw new Error("Invalid plugin type: "+n)},getPlugin:function(n,t){if(!t||!n)throw new Error("Missing plugin parameters");return this.getAllPlugins(n)[t]||null}}},4730:function(n,t,e){var i=e(2600),r=e(7547),o=e(9876);n.exports={initialize:function(){this.X={},this.on(r.SET_VISITOR_ATTRIBUTE_PENDING,this.Xn)},getPendingAttributeValue:function(n){return n=i.isArray(n)?n.concat("pending"):[n,"pending"],o.getFieldValue(this.X,n)},Xn:function(n){o.setFieldValue(this.X,n.key,{pending:n.pending}),this.emitChange()}}},4099:function(n,t,e){var i=e(2600),r=e(7547);n.exports={initialize:function(){this.X={inRumSample:!1,id:null,src:null,RumHost:null,data:{extras:{}},apis:{},DOMObservation:{},featuresNeeded:{}},this.on(r.SET_RUM_DATA,this.Jn),this.on(r.RECORD_API_USAGE,this.Qn),this.on(r.INITIALIZE_CHANGE_METRICS,this.Zn),this.on(r.RECORD_ACTIVATION_TYPE_USAGE,this.nt),this.on(r.RECORD_AUDIENCE_USAGE,this.tt),this.on(r.RECORD_CHANGE_MACROTASK_RATE,this.et),this.on(r.RECORD_CHANGE_OVERHEATED,this.it),this.on(r.RECORD_CHANGE_TYPE_USAGE,this.rt),this.on(r.RECORD_DOM_OBSERVATION_OCCURENCE,this.ot),this.on(r.RECORD_INTEGRATION_USAGE,this.ut),this.on(r.RECORD_LAYER_FEATURE_USAGE,this.ct),this.on(r.RECORD_LAYER_POLICY_USAGE,this.st),this.on(r.RECORD_VIEW_FEATURE_USAGE,this.ft),this.on(r.RECORD_VIEWS_INITIALLY_ACTIVATED_COUNT,this.dt),this.on(r.RECORD_VISITOR_ID_LOCATOR_USAGE,this.vt),this.on(r.RECORD_VISITOR_ID_ERROR,this.ht),this.on(r.RECORD_STICKY_BUCKETING_FEATURE,this._t)},Jn:function(n){i.merge(this.X,n),this.emitChange()},Qn:function(n){this.X.apis[n.methodName]||(this.X.apis[n.methodName]=0),this.X.apis[n.methodName]++,this.emitChange()},Zn:function(){i.isUndefined(this.X.data.extras.changeMacrotaskRate)&&(this.X.data.extras.changeMacrotaskRate=0),i.isUndefined(this.X.data.extras.numOverheatedChanges)&&(this.X.data.extras.numOverheatedChanges=0)},et:function(n){i.isUndefined(this.X.data.extras.changeMacrotaskRate)&&(this.X.data.extras.changeMacrotaskRate=0),n.changeMacrotaskRate>this.X.data.extras.changeMacrotaskRate&&(this.X.data.extras.changeMacrotaskRate=n.changeMacrotaskRate),this.emitChange()},it:function(){i.isUndefined(this.X.data.extras.numOverheatedChanges)&&(this.X.data.extras.numOverheatedChanges=0),this.X.data.extras.numOverheatedChanges++,this.emitChange()},ot:function(n){this.X.DOMObservation[n.counterName]||(this.X.DOMObservation[n.counterName]=0),this.X.DOMObservation[n.counterName]++,this.emitChange()},wt:function(n,t,e){i.isUndefined(this.X.featuresNeeded[n])&&(this.X.featuresNeeded[n]={});var r=this.X.featuresNeeded[n];i.each(t,(function(n){r[n]||(r[n]={}),r[n][e]||(r[n][e]=!0)}))},ut:function(n){this.wt("integrations",n.integrations,n.layerId)},rt:function(n){this.wt("changeTypes",n.changeTypes,n.layerId)},nt:function(n){this.wt("activationTypes",[n.activationType],n.entityId),this.emitChange()},ft:function(n){this.wt("viewFeatures",n.featuresUsed,n.entityId),this.emitChange()},ct:function(n){this.wt("layerFeatures",[n.feature],n.entityId),this.emitChange()},st:function(n){this.wt("policy",[n.policy],n.layerId),this.emitChange()},tt:function(n){this.wt("audiences",n.audienceTypes,n.layerId),this.emitChange()},dt:function(n){this.X.data.extras.viewsInitiallyActivatedCount=n.viewsInitiallyActivatedCount,this.emitChange()},vt:function(n){this.wt("visitorIdLocatorType",[n.visitorIdLocatorType],n.entityId),this.emitChange()},ht:function(n){this.X.data.extras.errorCustomVisitorId=n.isError,this.emitChange()},_t:function(n){this.wt("stickyBucketing",[n.feature],n.id)},getSampleRum:function(){return this.X.inRumSample},getRumId:function(){return this.X.id},getRumHost:function(){return this.X.RumHost},getApiData:function(){return this.X.apis},getDOMObservationData:function(){return this.X.DOMObservation},getRumData:function(){return i.cloneDeep(this.X.data)},getScriptSrc:function(){return this.X.src},getFeaturesNeededData:function(){var n=this.X.featuresNeeded,t={};return i.forOwn(n,(function(n,e){var r=i.keys(n);i.isEmpty(r)||(t[e]={}),i.forEach(r,(function(r){t[e][r]=i.keys(n[r]).length}))})),t}}},2549:function(n,t,e){var i=e(7547);n.exports={initialize:function(){this.X={initialized:!1,natives:{}},this.on(i.SANDBOXED_FUNCTIONS_ADDED,this.yt)},yt:function(n){if(!n.sandboxedFunctions)throw new Error("No sandboxedFunctions found in payload");this.X.natives=n.sandboxedFunctions,this.X.initialized=!0,this.emitChange()},getAll:function(){return this.X.natives},get:function(n){if(!n)throw new Error("Missing name parameter");return this.X.natives[n]||null},isInitialized:function(){return this.X.initialized}}},3012:function(n,t,e){var i=e(2600),r=e(7547),o=e(7052),a=e(9269);n.exports={initialize:function(){this.X={lastSessionTimestamp:0,sessionId:null},this.on(r.REFRESH_SESSION,this.bt),this.on(r.LOAD_SESSION_STATE,this.Et)},getState:function(){return i.cloneDeep(this.X)},getSessionId:function(){return this.X.sessionId},Et:function(n){this.X.sessionId=n.sessionId,this.X.lastSessionTimestamp=n.lastSessionTimestamp,this.emitChange()},bt:function(){var n=o.now(),t=this.X.lastSessionTimestamp;(!this.X.sessionId||n-t>18e5)&&(this.X.sessionId=a.generate()),this.X.lastSessionTimestamp=n,this.emitChange()}}},31:function(n,t,e){var i=e(2600),r=e(7547);n.exports={initialize:function(){this.It(),this.on(r.FINALIZE_BATCH_SNAPSHOT,this.At),this.on(r.REGISTER_PREVIOUS_BATCH,this.Tt),this.on(r.REGISTER_TRACKER_VISITOR,this.St),this.on(r.REGISTER_TRACKER_EVENT,this.kt),this.on(r.REGISTER_TRACKER_DECISION,this.Rt),this.on(r.RESET_TRACKER_EVENTS,this.Nt),this.on(r.RESET_TRACKER_STORE,this.It),this.on(r.RESET_TRACKER_PREVIOUS_BATCHES,this.Dt),this.on(r.SET_TRACKER_POLLING,this.Ct),this.on(r.SET_TRACKER_BATCHING,this.Ot),this.on(r.SET_TRACKER_SEND_EVENTS,this.xt),this.on(r.SET_TRACKER_PERSISTABLE_STATE,this.Pt),this.on(r.SET_TRACKER_DIRTY,this.Mt),this.on(r.UPDATE_TRACKER_VISITOR_ATTRIBUTES,this.Lt)},getPersistableState:function(){return this.X.isDirty?this.hasEventsToSend()||this.hasPreviousBatchesToSend()?{data:this.X.data,decisions:this.X.decisions,decisionEvents:this.X.decisionEvents,previousBatches:this.X.previousBatches}:{}:null},Pt:function(n){i.isEmpty(this.X.data)||i.isEmpty(n.data)||(this.At(),this.X.previousBatches.push(this.getEventBatch())),this.X.data=n.data||{},this.X.decisions=n.decisions||[],this.X.decisionEvents=n.decisionEvents||[],i.isEmpty(this.X.previousBatches)||i.isEmpty(n.previousBatches)?this.X.previousBatches=n.previousBatches||[]:this.X.previousBatches=this.X.previousBatches.concat(n.previousBatches),this.emitChange()},Mt:function(n){this.X.isDirty=n,this.emitChange()},kt:function(n){var t=this.Vt();(i.isEmpty(t.snapshots)||!i.isEmpty(this.X.decisionEvents))&&this.Ft(),this.Ut().events.push(n.event),this.X.decisions=n.decisions,this.Mt(!0)},Rt:function(n){this.X.decisionEvents.push(n.decisionEvent),this.X.decisions=n.decisions,this.Mt(!0)},St:function(n){i.isEmpty(this.X.data)?this.X.data=n.data:this.At(),this.X.data.visitors.push(n.visitor),this.X.decisions=n.decisions,this.X.decisionEvents=[],this.Mt(!0)},Tt:function(n){this.X.previousBatches.push(n),this.Mt(!0)},It:function(){this.X={polling:!1,shouldBatch:!0,data:{},decisions:[],decisionEvents:[],canSend:!1,isDirty:!1,previousBatches:[]},this.emitChange()},Nt:function(){var n=this.Vt();this.X.data.visitors=[n],n.snapshots=[],this.Mt(!0)},Dt:function(){this.X.previousBatches=[],this.Mt(!0)},Ct:function(n){this.X.polling=n,this.emitChange()},Ot:function(n){this.X.shouldBatch=n,this.emitChange()},xt:function(n){this.X.canSend=n,this.emitChange()},getEventBatch:function(){return i.cloneDeep(this.X.data)},getPreviousBatches:function(){return i.cloneDeep(this.X.previousBatches)},zt:function(){return this.X.decisionEvents.slice()},jt:function(){this.X.decisionEvents=[]},Gt:function(){return this.X.decisions.slice()},isPolling:function(){return this.X.polling},shouldBatch:function(){return this.X.shouldBatch},Ut:function(){return i.last(this.Vt().snapshots)},Vt:function(){return i.last(this.X.data.visitors)},Ft:function(){var n=this.zt();this.Vt().snapshots.push({decisions:this.Gt(),events:n}),this.jt(),this.Mt(!0)},At:function(){this.X.decisionEvents.length>0&&this.Ft()},hasEventsToSend:function(){if(!i.isEmpty(this.X.decisionEvents))return!0;if(!i.isEmpty(this.X.data)&&i.some(this.X.data.visitors||[],(function(n){return n.snapshots.length>0})))return!0;return!1},hasPreviousBatchesToSend:function(){return!i.isEmpty(this.X.previousBatches)},canSend:function(){return this.X.canSend},Lt:function(n){var t=this.Vt();t&&(t.attributes=n.attributes)}}},5119:function(n,t,e){var i=e(2600),r=e(7547);n.exports={initialize:function(){this.X={},this.on(r.SET_UA_DATA,this.vn)},vn:function(n){i.isEmpty(this.X)&&(this.X=n.data)},get:function(){return i.cloneDeep(this.X)}}},8363:function(n,t,e){var i=e(2600),r=e(7547),o=e(8642),a={globalTags:{},viewStates:{},shouldBatch:!1};n.exports={initialize:function(){this.X=i.cloneDeep(a),this.on(r.REGISTER_VIEWS,this.Bt),this.on(r.SET_VIEW_ACTIVE_STATE,this.qt),this.on(r.UPDATE_PARSED_VIEW_METADATA,this.Ht),this.on(r.UPDATE_USER_SUPPLIED_METADATA,this.Yt),this.on(r.TRACK_VIEW_ACTIVATED_EVENT,this.Kt),this.on(r.SET_GLOBAL_TAGS,this.$t),this.on(r.RESET_VIEW_STATES,this.Wt),this.on(r.SET_VIEW_BATCHING,this.Ot)},getAll:function(){var n={};for(var t in this.X.viewStates)n[t]=this.getViewState(t);return n},shouldBatch:function(){return this.X.shouldBatch},getViewState:function(n){var t=i.cloneDeep(this.X.viewStates[n]),e=this.X.globalTags;return t.metadata=i.extend({},t.parsedMetadata,e,t.userSuppliedMetadata),t},getActiveViewTags:function(){var n=this.getActiveViewStates(),t=i.map(n,(function(n){return n.metadata})),e=[{}].concat(t);return i.extend.apply(i,e)},getActivationEventId:function(n){return this.X.viewStates[n]?this.X.viewStates[n].activationEventId:null},getActiveViewStates:function(){return i.reduce(this.X.viewStates,i.bind((function(n,t,e){return this.isViewActive(e)&&n.push(this.getViewState(e)),n}),this),[])},isViewActive:function(n){var t=this.X.viewStates[n];return t||o.warn("No Page registered with id",n),!!t.isActive},getGlobalTags:function(){return i.cloneDeep(this.X.globalTags)},Wt:function(){this.X.viewStates={},this.emitChange()},Bt:function(n){i.each(n.views,i.bind((function(n){var t=n.id;this.X.viewStates[t]={id:t,isActive:i.isBoolean(n.isActive)?n.isActive:null,activatedTimestamp:null,activationEventId:null,parsedMetadata:{},userSuppliedMetadata:{}}}),this)),this.emitChange()},qt:function(n){var t=n.view.id;if(!this.X.viewStates[t])throw new Error("No view exists with id "+t);this.X.viewStates[t].isActive=n.isActive,n.isActive?this.X.viewStates[t].activatedTimestamp=n.timestamp:(this.X.viewStates[t].parsedMetadata={},this.X.viewStates[t].userSuppliedMetadata={}),this.emitChange()},Ht:function(n){var t=n.pageId;if(!this.X.viewStates[t])throw new Error("No view exists with id "+t);i.assign(this.X.viewStates[t].parsedMetadata,n.metadata),this.emitChange()},Yt:function(n){var t=n.pageId;if(!this.X.viewStates[t])throw new Error("No view exists with id "+t);i.assign(this.X.viewStates[t].userSuppliedMetadata,n.metadata),this.emitChange()},Kt:function(n){var t=n.pageId;this.X.viewStates[t]&&(this.X.viewStates[t].activationEventId=n.eventData.eventId,this.emitChange())},$t:function(n){i.extend(this.X.globalTags,n),this.emitChange()},Ot:function(n){this.X.shouldBatch=n,this.emitChange()}}},1475:function(n,t,e){var i=e(2600),r=e(7547),o=e(5281);n.exports={initialize:function(){this.X={views:{},apiNamesToViews:{}},this.on(r.DATA_LOADED,this.vn)},getAll:function(){return o.safeReference(i.values(this.X.views))},getPagesMap:function(){return o.safeReference(this.X.views)},get:function(n){return o.safeReference(this.X.views[n])},getByApiName:function(n){return o.safeReference(this.X.apiNamesToViews[n])},apiNameToId:function(n){var t=this.X.apiNamesToViews[n];if(t)return t.id},idToApiName:function(n){var t=this.X.views[n];if(t)return t.apiName},getNumberOfPages:function(){return i.keys(this.X.views).length},getAllViewsForActivationType:function(n){return i.filter(this.X.views,{activationType:n})},vn:function(n){i.isEmpty(n.data.views)||(i.each(n.data.views,i.bind((function(n){o.deepFreeze(n),this.X.views[n.id]=n,this.X.apiNamesToViews[n.apiName]=n}),this)),this.emitChange())}}},1243:function(n,t,e){var i=e(2600),r=e(7547),o=e(9876);n.exports={initialize:function(){this.X={profile:{},metadata:{},visitorId:null},this.on(r.SET_VISITOR_ID_VIA_API,this.Xt),this.on(r.SET_VISITOR_ATTRIBUTES,this.Jt),this.on(r.LOAD_EXISTING_VISITOR_PROFILE,this.Qt)},getVisitorProfile:function(){return this.X.profile},getVisitorProfileMetadata:function(){return this.X.metadata},getAttribute:function(n){var t=this.X.profile;return i.cloneDeep(o.getFieldValue(t,n))},getAttributeMetadata:function(n){return i.cloneDeep(this.X.metadata[n])},getVisitorIdFromAPI:function(){return this.X.visitorId},Qt:function(n){this.X.profile=n.profile,this.X.metadata=n.metadata,this.emitChange()},Jt:function(n){i.each(n.attributes,i.bind((function(n){var t=n.key;o.setFieldValue(this.X.profile,t,n.value),n.metadata&&i.forOwn(n.metadata,i.bind((function(n,e){o.setFieldValue(this.X.metadata,t.concat(e),n)}),this))}),this)),this.emitChange()},Xt:function(n){this.X.visitorId=n,this.emitChange()}}},7576:function(n,t,e){var i=e(2600),r=e(7547);n.exports={initialize:function(){this.X={},this.on(r.DATA_LOADED,this.Zt)},getCustomBehavioralAttributes:function(){return i.filter(this.X,(function(n){return!!n.rule_json}))},getVisitorAttribute:function(n){var t=i.values(this.X);if(n.datasourceId&&(t=i.filter(t,{dcp_datasource_id:String(n.datasourceId)})),n.attributeName&&n.attributeId)throw new Error("Must not specify both attribute name and attribute ID");if(n.attributeId){var e=this.X[n.attributeId];if(!e)throw new Error("Unrecognized attribute ID: "+n.attributeId);return e}if(n.attributeName){var r=i.filter(t,{name:n.attributeName});if(!r.length)throw new Error("Unrecognized attribute name: "+n.attributeName);if(r.length>1)throw new Error("Too many attributes with name: "+n.attributeName);return r[0]}throw new Error("Must specify attribute name or attribute ID")},Zt:function(n){i.isEmpty(n.data.visitorAttributes)||(i.each(n.data.visitorAttributes,i.bind((function(n){this.X[n.id]=n}),this)),this.emitChange())}}},9522:function(n,t,e){var i=e(2600),r=e(7547),o=e(4705);n.exports={initialize:function(){this.X={variationIdMap:{},preferredLayerMap:{}},this.on(r.UPDATE_VARIATION_ID_MAP,this.ne),this.on(r.MERGE_VARIATION_ID_MAP,this.te),this.on(r.UPDATE_PREFERRED_LAYER_MAP,this.ee),this.on(r.MERGE_PREFERRED_LAYER_MAP,this.re)},getVariationIdMap:function(){return i.cloneDeep(this.X.variationIdMap)},getVariationIdMapString:function(){return o.stringify(this.X.variationIdMap)},ne:function(n){var t=this.X.variationIdMap[n.layerId]||{};t[n.experimentId]!==n.variationId&&(t[n.experimentId]=n.variationId,this.X.variationIdMap[n.layerId]=t,this.emitChange())},te:function(n){var t=this.getVariationIdMap(),e=n.variationIdMap;i.each(t||{},(function(n,t){e[t]?i.assign(e[t],n):e[t]=n})),this.X.variationIdMap=e,this.emitChange()},getPreferredLayerMap:function(){return i.cloneDeep(this.X.preferredLayerMap)},getPreferredLayerMapString:function(){return o.stringify(this.X.preferredLayerMap)},getPreferredLayerId:function(n){return this.X.preferredLayerMap[n]},ee:function(n){this.X.preferredLayerMap[n.groupId]!==n.layerId&&(this.X.preferredLayerMap[n.groupId]=n.layerId,this.emitChange())},re:function(n){var t=this.getPreferredLayerMap(),e=n.preferredLayerMap;i.assign(e,t),this.X.preferredLayerMap=e,this.emitChange()}}},1360:function(n,t,e){e(2600);var i=e(7547);e(1440).j;n.exports={initialize:function(){this.X={events:[],foreignEvents:{},foreignEventQueues:{}},this.on(i.SET_VISITOR_EVENTS,this.vn),this.on(i.SET_FOREIGN_VISITOR_EVENTS,this.oe),this.on(i.SET_FOREIGN_VISITOR_EVENT_QUEUE,this.ae)},getEvents:function(){return this.X.events},getForeignEvents:function(){return this.X.foreignEvents},getForeignEventQueues:function(){return this.X.foreignEventQueues},vn:function(n){this.X.events=n,this.emitChange()},oe:function(n){this.X.foreignEvents[n.key]=n.value},ae:function(n){this.X.foreignEventQueues[n.key]=n.value}}},2640:function(n,t,e){var i=e(7547);n.exports={initialize:function(){this.X={baseMap:{},eventQueue:[],lastEvent:null,initialized:!1,cleared:!1},this.on(i.UPDATE_BEHAVIOR_STORE,this.ue)},getBaseMap:function(){return this.X.baseMap},getEventQueue:function(){return this.X.eventQueue},getLastEvent:function(){return this.X.lastEvent},getCleared:function(){return this.X.cleared},getInitialized:function(){return this.X.initialized},ue:function(n){this.X[n.key]=n.value}}},2727:function(n,t,e){var i=e(2600),r=e(7547);n.exports={initialize:function(){this.X={randomId:null,visitorIdLocator:null},this.on(r.SET_VISITOR_ID,this.vn),this.on(r.DATA_LOADED,this.ce)},getBucketingId:function(){return this.getRandomId()},getRandomId:function(){return this.X.randomId},getVisitorIdLocator:function(){return this.X.visitorIdLocator},vn:function(n){i.extend(this.X,n),this.emitChange()},ce:function(n){i.isEmpty(n.data.visitorIdLocator)||(this.X.visitorIdLocator=n.data.visitorIdLocator,this.emitChange())}}},5085:function(n,t,e){var i=e(2600),r=e(8642),o=e(7547);n.exports={initialize:function(){this.X={frames:[],defaultFrame:null,messages:[],subscribers:[],canonicalOrigins:null,disabled:!1},this.on(o.XDOMAIN_SET_DEFAULT_FRAME,this.se),this.on(o.XDOMAIN_ADD_FRAME,this.fe),this.on(o.XDOMAIN_SET_MESSAGE,this.le),this.on(o.XDOMAIN_ADD_SUBSCRIBER,this.de),this.on(o.XDOMAIN_SET_CANONICAL_ORIGINS,this.ve),this.on(o.XDOMAIN_SET_DISABLED,this.he)},getMessages:function(){return i.cloneDeep(this.X.messages)},getOffset:function(){return 0===this.X.messages.length?0:this.X.messages[0].data.id},getNextMessageId:function(){return this.X.messages.length+this.getOffset()},getMessageById:function(n){return this.X.messages[n-this.getOffset()]},getSubscribers:function(){return this.X.subscribers},getFrames:function(){return this.X.frames},getNextFrameId:function(){return this.X.frames.length},getDefaultFrame:function(){return this.X.defaultFrame},getCanonicalOrigins:function(){return i.cloneDeep(this.X.canonicalOrigins)},isDisabled:function(){return this.X.disabled},se:function(n){this.X.defaultFrame=n},fe:function(n){this.X.frames.push(n)},le:function(n){for(this.X.messages[n.messageId-this.getOffset()]=n.message;this.X.messages.length>1e3;){var t=this.X.messages.shift();r.debug("XDomainStorage: Cleared old message: "+t.data.id)}},de:function(n){this.X.subscribers.push(n.subscriber)},ve:function(n){this.X.canonicalOrigins=n.canonicalOrigins},he:function(n){this.X.disabled=n.disabled}}},7626:function(n,t){t.locatorType={CSS_SELECTOR:"css_selector",JAVASCRIPT:"javascript",URL_REGEX:"url_regex"},t.valueType={STRING:"string",NUMBER:"number",CURRENCY:"currency"},t.nodeNames={INPUT:"INPUT",SELECT:"SELECT"}},535:function(n,t,e){var i=e(5202).U;t.Error=i("TagError")},7884:function(n,t,e){var i=e(311).PluginTypes,r=e(6321).get("stores/plugins");t.getTagValue=function(n){var e=r.getPlugin(i.viewTagLocators,n.locatorType);if(!e)throw new t.Error("No locator registered for tag locatorType: "+n.locatorType);return e(n)},t.enums=e(7626),t.Error=e(535).Error},6941:function(n,t,e){var i=e(7547),r=e(3637),o=e(7929).Promise,a=e(6321).get("stores/async_request");t.makeAsyncRequest=function(n,t){var e,u,c=a.getPromise(n);if(c)return c;var s=new o((function(n,t){e=n,u=t}));return r.dispatch(i.REGISTER_ASYNC_DEFERRED,{source:n,promise:s,resolver:e,rejecter:u}),t&&t(),s},t.resolveRequest=function(n,t){r.dispatch(i.RESOLVE_DEFERRED,{source:n,resolveWith:t})},t.rejectRequest=function(n,t){r.dispatch(i.REJECT_DEFERRED,{source:n,rejectWith:t})}},9927:function(n,t,e){var i=e(3350),r=e(5272);t.getLanguage=function(){return r.getNavigatorLanguage()},t.getQueryParams=i.getQueryParams,t.getQueryParamValue=i.getQueryParamValue,t.getUrl=function(){return r.getHref()}},8549:function(n,t,e){var i=e(2600),r=e(5202).U,o=e(7052),a=e(3485),u=e(5272),c=e(7547),s=e(6321),f=e(3637),l=s.get("stores/cookie_options"),d=t.SetError=r("CookieSetError"),v=t.MismatchError=r("CookieMismatchError");t.getAll=function(n){var e,r,o,u,c;i.isUndefined(n)&&(n=!0),e=a.getCookieString().split(/\s*;\s*/);var s={};for(o=0;o<e.length;o++)if((u=(r=e[o]).indexOf("="))>0&&void 0===s[c=t.safeDecodeURIComponent(r.substring(0,u))]){var f=r.substring(u+1);n&&(f=t.safeDecodeURIComponent(f)),s[c]=f}return s},t.safeDecodeURIComponent=function(n){try{return decodeURIComponent(n)}catch(t){return n}},t.get=function(n,e){return t.getAll(e)[n]},t.set=function(n,e,r,s){r=i.extend({encodeValue:!0},r),!1!==s&&(s=!0);var g=[];if(i.isUndefined(r.domain)){var m=l.getCurrentDomain();m||(m=function(n,e){!1!==e&&(e=!0);for(var r,o,a=n.hostname.split("."),u=[],s=null,l=a.length-1;l>=0;l--)if(u.unshift(a[l]),r=u.join("."),!i.includes(h,r)){o={domain:e?"."+r:r};try{t.set(p,Math.random().toString(),o),t.remove(p,o),s=o.domain;break}catch(d){}}return f.dispatch(c.SET_COOKIE_DOMAIN,s),s}(u.getLocation(),!0)),r.domain=m}if(r.domain&&g.push("domain="+r.domain),i.isUndefined(r.path)&&(r.path="/"),r.path&&g.push("path="+r.path),i.isUndefined(r.expires)){var _=i.isUndefined(r.maxAge)?l.getDefaultAgeInSeconds():r.maxAge;r.expires=new Date(o.now()+1e3*_)}if(i.isUndefined(r.expires)||g.push("expires="+r.expires.toUTCString()),r.secure&&g.push("secure"),a.setCookie(n+"="+(r.encodeValue?encodeURIComponent(e):e)+";"+g.join(";")),s){var w=r.encodeValue,y=t.get(n,w);if(y!==e){if(!y)throw new d('Failed to set cookie "'+n+'"');throw new v('Expected "'+e+'" for "'+n+'", got "'+y+'"')}}},t.remove=function(n,e){for(var r=u.getLocation().hostname.split(".");r.length>0;)t.set(n,null,i.extend({},e,{domain:"."+r.join("."),expires:new Date(0)}),!1),r.shift()};var h=["optimizely.test"],p="optimizelyDomainTestCookie"},5202:function(n,t,e){var i=e(8168),r=i("InternalError");t.G=r,t.U=function(n){return i(n,r)}},6225:function(n,t,e){var i=e(2600),r=e(7929).Promise;n.exports=function(){var n,t,e=new r((function(e,i){n=e,t=i}));return e.resolve=function(){return n.apply(null,i.toArray(arguments)),e},e.reject=function(){return t.apply(null,i.toArray(arguments)),e},e}},5281:function(n,t,e){var i=e(2600);t.deepFreeze=function(n){},t.safeReference=function(n){return i.cloneDeep(n)}},9876:function(n,t,e){var i=e(2600);t.getFieldValue=function(n,t){i.isArray(t)||(t=[t]);for(var e=n,r=0;r<t.length;r++){var o=t[r];if(!i.isObject(e)||!e.hasOwnProperty(o))return;e=e[o]}return e},t.setFieldValue=function(n,t,e){if(!i.isArray(t)||i.isEmpty(t))throw new Error("Attempted to set an invalid key path: "+t);for(var r=n,o=0;o<t.length-1;o++){var a=t[o];i.isObject(r[a])||(r[a]={}),r=r[a]}r[t[t.length-1]]=e}},8642:function(n,t,e){var i=e(2600),r=e(7547),o=e(7052),a=e(311),u=e(3637),c=e(4705);function s(){this.logLevel=null,this.logMatch=null,this.logs=[],this.timebase=o.now()}s.prototype.pe=function(){return!i.isNull(this.logLevel)},s.prototype.setLogLevel=function(n){var t=this.ge(n);null===t?console.error("Unknown log level: "+n):this.logLevel!==t&&(this.log("Setting log level to "+t),this.logLevel=t,this.flush())},s.prototype.setLogMatcher=function(n){i.isString(n)?this.logMatcher=n:this.logMatcher="",this.logGroup=0},s.prototype.shouldLog=function(n){return this.pe()&&this.logLevel>=n},s.prototype.matchesLogMessage=function(n,t){var e=this.logMatcher;if(!this.logMatcher)return!0;if(this.logGroup)return"GROUPSTART"===n?this.logGroup++:"GROUPEND"===n&&this.logGroup--,!0;var r=i.some(t,(function(n){if(!i.isString(n))try{n=c.stringify(n)}catch(t){}return i.isString(n)&&i.includes(n,e)}));return r&&"GROUPSTART"===n&&this.logGroup++,r},s.prototype.storeLog=function(n,t){var e={logLevel:n,logMessage:t};u.dispatch(r.LOG,e)},s.prototype.flush=function(){var n=e(6321).get("stores/log");this.logGroup=0;var t=n.getLogs();i.each(t,i.bind((function(n){this.me(n.logLevel,n.logMessage,!0)}),this))},s.prototype.me=function(n,t,e){var r,o=n;if(console)switch(n){case"GROUPSTART":r=console.groupCollapsed,o=a.LogLevel.DEBUG;break;case"GROUPEND":r=console.groupEnd,o=a.LogLevel.DEBUG;break;case a.LogLevel.ERROR:r=console.error;break;case a.LogLevel.WARN:r=console.warn;break;case a.LogLevel.DEBUG:r=console.debug;break;default:r=console.log}try{e||this.pe()&&!this.shouldLog(o)||(i.isArray(t)&&i.isString(t[0])&&(t=this._e(t)),this.storeLog(n,t)),r&&this.shouldLog(o)&&this.matchesLogMessage(n,t)&&r.apply(console,t)}catch(u){console&&(console.error?console.error(u):console.log(u))}},s.prototype.debug=function(){this.me(a.LogLevel.DEBUG,[].slice.call(arguments))},s.prototype.log=function(){this.me(a.LogLevel.INFO,[].slice.call(arguments))},s.prototype.logAlways=function(){var n=this._e([].slice.call(arguments));console&&console.log&&console.log.apply&&console.log.apply(console,n),this.storeLog(a.LogLevel.INFO,n)},s.prototype.warn=function(){this.me(a.LogLevel.WARN,[].slice.call(arguments))},s.prototype.error=function(n){var t=[].slice.call(arguments);1===t.length&&n.stack?(this.me(a.LogLevel.ERROR,[this.we(),n]),this.me(a.LogLevel.INFO,[n.stack])):this.me(a.LogLevel.ERROR,t)},s.prototype.groupCollapsed=function(){this.me("GROUPSTART",[].slice.call(arguments))},s.prototype.groupEnd=function(){this.me("GROUPEND",[].slice.call(arguments))},s.prototype._e=function(n){var t=this.we().toString();return t.length<6&&(t=("     "+t).slice(-6)),[t+"| Optly / "+n[0]].concat(n.slice(1))},s.prototype.we=function(){return this.timebase?o.now()-this.timebase:0},s.prototype.ge=function(n){return n&&("TRUE"===(n=n.toUpperCase())&&(n="INFO"),"FALSE"===n&&(n="OFF"),"ALL"===n&&(n="DEBUG"),!i.isUndefined(a.LogLevel[n]))?a.LogLevel[n]:null},n.exports=new s},4095:function(n,t,e){n.exports=e(4647)},6650:function(n,t){t.isSingleExperimentPolicy=function(n){return"single_experiment"===n||"multivariate"===n}},2177:function(n,t,e){var i=e(2600),r=e(7929).Promise,o=e(5272);t.pollFor=function(n,t,e){var a,u;return i.isFunction(e)?u=e:(a=e||100,u=function(){return--a<-1}),t=t||50,new r((function(e,i){!function r(){var a;if(!u()){try{var c=n();if(c)return e(c)}catch(s){a=s}return o.setTimeout(r,t)}i(a||new Error("Poll timed out"))}()}))}},6170:function(n,t,e){var i=e(2600),r=e(7929).Promise;t.firstToResolve=function(n){return new r((function(t){i.each(n,(function(n){r.resolve(n).then(t,(function(){}))}))}))}},3350:function(n,t,e){var i=e(2600),r=e(5272);t.getQueryParams=function(){var n=r.getLocationSearch()||"";if(0===n.indexOf("?")&&(n=n.substring(1)),0===n.length)return[];for(var t=n.split("&"),e=[],i=0;i<t.length;i++){var o="",a="",u=t[i].split("=");u.length>0&&(o=u[0]),u.length>1&&(a=u[1]),e.push([o,a])}return e},t.getQueryParamValue=function(n){for(var e=t.getQueryParams(),i=0;i<e.length;i++)if(e[i][0]===n)return e[i][1]},t.queryStringFromMap=function(n){return i.map(n,(function(n,t){return t+"="+n})).join("&")}},3738:function(n,t,e){var i=e(2600),r=e(8642),o=e(5272);function a(n){this.windowLength=n,this.count=0,this.listeners={},this.isIncrementingTick=!1}a.prototype.countCurrentTick=function(){this.isIncrementingTick||(this.isIncrementingTick=!0,this.increment(),o.setTimeout(i.bind((function(){this.isIncrementingTick=!1}),this),0))},a.prototype.increment=function(){this.count+=1,i.forEach(this.listeners[String(this.count)],(function(n){n()})),o.setTimeout(i.bind(this.decrement,this),this.windowLength)},a.prototype.decrement=function(){this.count-=1,this.count<0&&(r.warn("Decremented down to negative count: ",this.count),this.count=0)},a.prototype.addListener=function(n,t){this.listeners[n]||(this.listeners[n]=[]),this.listeners[n].push(t)},n.exports=a},2448:function(n,t,e){var i=e(2600),r=e(6321).get("stores/observed_redirect");t.getReferrer=function(){var n=r.get();return n?n.referrer:null},t.getExperimentAndVariation=function(){var n=r.get();return n&&i.isString(n.variationId)?i.pick(n,["experimentId","variationId"]):null}},6697:function(n,t,e){var i=e(2600),r=e(7547),o=e(7052),a=e(6321),u=e(3485),c=e(311),s=e(3637),f=e(8642),l=a.get("stores/sandbox"),d=e(5272);t.shouldSandbox=function(){return!1},t.get=function(n){if(!n)throw new Error("Name is required");if(t.shouldSandbox()){l.isInitialized()||v();var e=l.get(n);if(e)return e}return d.getGlobal(n)};var v=function(){try{var n="optimizely_"+o.now(),t=u.createElement("iframe");t.name=n,t.style.display="none",u.appendToHead(t);var e=t.contentWindow,a=t.contentDocument;a.write("<script><\/script>"),a.close();var l=i.mapValues(c.SandboxedFunctions,(function(n){return e[n]}));s.dispatch(r.SANDBOXED_FUNCTIONS_ADDED,{sandboxedFunctions:l}),t.parentNode.removeChild(t)}catch(d){f.warn("Unable to create a sandbox: ",d)}}},7499:function(n,t,e){var i=e(3485),r=e(8642),o=e(9737);t.addScriptAsync=function(n,t){var e=i.querySelector("head"),o=i.createElement("script");o.type="text/javascript",o.async=!0,o.src=n,t&&(o.onload=t),e.insertBefore(o,e.firstChild),r.debug("Asynchronously requesting "+n)},t.addScriptSync=function(n,e){try{var a="optimizely_synchronous_script_"+Math.floor(1e5*Math.random());if(-1!==n.indexOf('"'))return void r.error("Blocked attempt to load unsafe script: "+n);i.write('<script id="'+a+'" src="'+n+'"><\/script>');var u=i.querySelector("#"+a);if(!u)throw new Error("DocumentEnv.write failed to append script");u.onload=e,u.onerror=function(i){r.warn("Failed to load script ("+n+") synchronously:",i),t.addScriptAsync(n,e)}}catch(c){r.debug("DocumentEnv.write failed for "+n+": "+c.message);return o.request({url:n,async:!1,contentType:"text/plain",success:function(n){new Function(n.responseText)(),e&&e()}})["catch"]((function(i){r.error("Failed to load "+n+" via synchronous XHR: "+i.message),t.addScriptAsync(n,e)}))}}},9856:function(n,t,e){var i=e(7929).Promise,r=e(5272);t.makeTimeoutPromise=function(n){return new i((function(t,e){r.setTimeout((function(){e(new Error("Timed out after "+n+" ms"))}),n)}))}},421:function(n,t,e){var i=e(2600),r=e(9805),o=e(5272),a=e(7547),u=e(6321),c=e(3637),s=u.get("stores/ua_data");t.get=function(){var n=s.get();return i.isEmpty(n)&&(n=r.parseUA(o.getUserAgent()),c.dispatch(a.SET_UA_DATA,{data:n})),n}},8799:function(n,t){t.guessDomain=function(n,t){if(!n)return"";try{return t?n.match(/:\/\/(.[^/]+)/)[1]:n.match(/:\/\/(?:www[0-9]?\.)?(.[^/:]+)/)[1]}catch(e){return""}}},6332:function(n,t,e){var i=e(2600),r=e(7929).Promise,o=e(7547),a=e(6321),u=e(3637),c=e(6663),s=e(5202).U,f=e(7052),l=e(3485),d=e(4705),v=e(2177),h=e(7434),p=e(5272),g=e(8642),m=a.get("stores/xdomain"),_=t.Error=s("XDomainStorageError");function w(n){var t;if(i.find(m.getFrames(),{origin:n.origin})){try{t=d.parse(n.data)}catch(a){return void g.debug("XDomain","Ignoring malformed message event:",n)}if("ERROR"===t.type)u.dispatch(o.XDOMAIN_SET_DISABLED,{disabled:!0}),c.emitInternalError(new _("Xdomain Error: "+t.response));else if("SYNC"===t.type)i.each(m.getSubscribers(),(function(n){n(t.response.key,t.response.value)}));else{var e=m.getMessageById(t.id);if(!e){if(g.warn("XDomain","No stored message found for ID",t.id),i.isNumber(t.id)){var r=m.getNextMessageId();t.id>=r?c.emitInternalError(new _("Message ID is greater than expected maximum ID ("+t.id+">"+r+")")):t.id<0?c.emitInternalError(new _("Message ID is < 0: "+t.id)):c.emitInternalError(new _("No stored message found for message ID: "+t.id))}else c.emitInternalError(new _("Message ID is not a number: "+t.id));return}if(!e.resolver)return void g.warn("XDomain","Message already resolved, ignoring:",t.id);e.resolver(t.response),u.dispatch(o.XDOMAIN_SET_MESSAGE,{messageId:t.id,message:{data:{id:t.id,type:e.data.type,key:e.data.key},startTime:e.startTime,endTime:f.now()}})}}else g.debug("XDomain","No frame found for origin: "+n.origin)}function y(n,t){return t||(t=m.getDefaultFrame()),new r((function(e){var r={data:i.extend({},n,{id:m.getNextMessageId()}),resolver:e};t?m.isDisabled()||b(r,t):u.dispatch(o.XDOMAIN_SET_MESSAGE,{messageId:r.data.id,message:r})}))}function b(n,t){var e=n.data;u.dispatch(o.XDOMAIN_SET_MESSAGE,{messageId:n.data.id,message:i.extend({},n,{startTime:f.now()})}),t.target.postMessage(d.stringify(e),t.origin)}t.setItem=function(n,t,e){return y({type:"PUT",key:n,value:t},e)},t.getItem=function(n,t){return y({type:"GET",key:n},t)},t.fetchAll=function(n){return y({type:"GETALL"},n)},t.deleteData=function(n,t){return y({type:"DELETE",visitorId:n},t)},t.subscribe=function(n){u.dispatch(o.XDOMAIN_ADD_SUBSCRIBER,{subscriber:n})},t.loadIframe=function(n,t){return new r((function(e){var i=l.createElement("iframe");i.src=n+t,i.hidden=!0,i.setAttribute("tabindex","-1"),i.setAttribute("title","Optimizely Internal Frame"),i.style.display="none",i.height=0,i.width=0,i.onload=function(){var r={id:m.getNextFrameId(),target:i.contentWindow,origin:n,path:t};u.dispatch(o.XDOMAIN_ADD_FRAME,r),e(r)},l.appendTo(l.querySelector("body"),i)}))},t.getXDomainUserId=function(n,t){var e,r={},o=i.keys(n);return i.each(t,(function(n){r[n]=[],i.each(o,(function(t){var o=h.getUserIdFromKey(t,n);!e&&o&&(e=o),o&&!i.includes(r[n],o)&&r[n].push(o)}))})),g.debug("XDomain: Found userIds:",r),e},t.load=function(n,e){p.addEventListener("message",w);return v.pollFor((function(){return!!l.querySelector("body")})).then((function(){return t.loadIframe(n,e)})).then((function(n){u.dispatch(o.XDOMAIN_SET_DEFAULT_FRAME,n),m.isDisabled()||i.each(m.getMessages(),(function(t){t.startTime||b(t,n)}))}))}},9737:function(n,t,e){var i=e(2600),r=e(7547),o=e(7052),a=e(3637),u=e(4705),c=e(8642),s=e(7929).Promise,f=e(6697);t.isCORSSupported=function(){return"withCredentials"in new(f.get("XMLHttpRequest"))},t.request=function(n){return n=i.extend({method:"GET",async:!0,contentType:"text/plain;charset=UTF-8"},n),new s((function(e,r){if(!t.isCORSSupported())return r("CORS is not supported");var o=new(f.get("XMLHttpRequest"));o.onload=function(){n.success&&n.success(o),e(o)},o.onerror=function(){n.error&&n.error(o),r(o)},i.isObject(n.data)&&(n.data=u.stringify(n.data)),o.open(n.method,n.url,n.async),n.withCredentials&&(o.withCredentials=n.withCredentials),o.setRequestHeader("Content-Type",n.contentType),i.isObject(n.headers)&&i.forEach(n.headers,(function(n,t){o.setRequestHeader(t,n)})),o.send(n.data)}))},t.retryableRequest=function(n,e,u,f){if(!e)return s.reject(new Error("No id specified for request."));if(!t.isCORSSupported())return s.reject(new Error("CORS is not supported."));i.isUndefined(f)&&(f=3),i.isUndefined(u)&&(u=0);var l={id:e,timeStamp:o.now(),data:n,retryCount:u};return a.dispatch(r.SET_PENDING_EVENT,l),c.debug("Sending event ",e),t.request(n).then((function(n){return a.dispatch(r.REMOVE_PENDING_EVENT,{id:e}),n}),(function(n){throw l.retryCount>=f?(a.dispatch(r.REMOVE_PENDING_EVENT,{id:e}),c.warn("Event ",l," could not be sent after ",f," attempts.")):(l.retryCount++,a.dispatch(r.SET_PENDING_EVENT,l),c.debug("Event ",l," failed to send, with error ",n," It will be retried ",f-u," times.")),n}))},t.sendBeacon=t.request},8884:function(n,t,e){var i=e(2600),r=e(7547),o=e(4158),a=e(8131),u=e(7052),c=e(6321),s=e(311),f=e(5376),l=e(3637),d=e(8642),v=e(7884),h=c.get("stores/event_data"),p=c.get("stores/plugins"),g=c.get("stores/rum"),m=c.get("stores/view"),_=c.get("stores/view_data");function w(n,t){i.forEach(n,(function(n){if(n.eventType!==f.CUSTOM){var e=p.getPlugin(s.PluginTypes.eventImplementations,n.eventType);e?t?e.attach(n):e.detach(n):d.warn("No implementation found for event type:",n.eventType,"needed for event:",n)}}))}t.parseViewTags=function(n){var e=t.evaluateViewTags(n);t.setParsedViewTags(n.id,e)},t.updateAllViewTags=function(){var n=m.getActiveViewStates();i.each(n,(function(n){var e=_.get(n.id);t.parseViewTags(e)}))},t.evaluateViewTags=function(n){return n.tags?i.reduce(n.tags,(function(n,t){try{n[t.apiName]=v.getTagValue(t)}catch(r){e=r,(null!=(i=v.Error)&&"undefined"!=typeof Symbol&&i[Symbol.hasInstance]?i[Symbol.hasInstance](e):e instanceof i)?d.warn("Page / Ignoring unparseable tag",t,r):d.error(r)}var e,i;return n}),{}):{}},t.createViewTicket=function(){var n={};return i.each(p.getAllPlugins(s.PluginTypes.viewProviders),(function(t){n[t.provides]=c.evaluate(t.getter)})),n},t.registerViews=function(n){l.dispatch(r.REGISTER_VIEWS,{views:n})},t.activateViaAPI=function(n,e){e&&t.setUserSuppliedViewTags(n.id,e),t.activateMultiple([n],e)},t.getViewsAndActivate=function(n){var e=_.getAllViewsForActivationType(n);t.activateMultiple(e)},t.activateMultiple=function(n,e){var a=[];return i.each(n,(function(n){var u=m.getViewState(n.id),c=t.createViewTicket();if(u.isActive)if(n.deactivationEnabled)try{t.hasValidStaticConditions(n,c)||t.deactivate(n)}catch(v){d.error("Page / Error evaluating whether to deactivate page ",t.description(n),v)}else d.log("Not activating Page, already active ",t.description(n));else{try{if(!t.hasValidStaticConditions(n,c))return i.isBoolean(u.isActive)||t.setViewActiveState(n,!1),void d.log("Page / Failed to match page conditions for "+t.description(n),n.staticConditions)}catch(v){return i.isBoolean(u.isActive)||t.setViewActiveState(n,!1),void d.error("Page / Error evaluating whether to activate page ",t.description(n),v)}if(a.push(n),t.setViewActiveState(n,!0),d.log("Activated Page",t.description(n)),o.emitViewActivated({view:n,metadata:e}),g.getSampleRum()){var f=n.activationType||s.ViewActivationTypes.immediate;l.dispatch(r.RECORD_ACTIVATION_TYPE_USAGE,{activationType:f,entityId:n.id})}w(h.getByPageId(n.id),!0)}})),i.isEmpty(a)||o.emitViewsActivated({views:a}),a},t.deactivate=function(n){m.getViewState(n.id).isActive?(t.setViewActiveState(n,!1),d.log("Deactivated Page",t.description(n)),o.emitPageDeactivated({page:n}),w(h.getByPageId(n.id),!1)):d.log("Not deactivating Page, already inactive ",t.description(n))},t.setViewActiveState=function(n,t){l.dispatch(r.SET_VIEW_ACTIVE_STATE,{view:n,timestamp:u.now(),isActive:t})},t.setGlobalTags=function(n){l.dispatch(r.SET_GLOBAL_TAGS,n)},t.setParsedViewTags=function(n,t){l.dispatch(r.UPDATE_PARSED_VIEW_METADATA,{pageId:n,metadata:t})},t.setUserSuppliedViewTags=function(n,t){l.dispatch(r.UPDATE_USER_SUPPLIED_METADATA,{pageId:n,metadata:t})},t.hasValidStaticConditions=function(n,t){var e={};if(i.isEmpty(n.staticConditions))return!0;var o=p.getAllPlugins(s.PluginTypes.viewMatchers);d.groupCollapsed("Page / Evaluating staticConditions:",n.staticConditions),d.debug("Matching to current value:",t);var u=a.evaluate(n.staticConditions,(function(n){var i=n.type,r=o[i];if(!r)throw new Error("Page / No matcher found for type="+i);return r&&(e[n.type]||(e[n.type]=!0)),r.match(t,n)}));return d.groupEnd(),g.getSampleRum()&&u&&l.dispatch(r.RECORD_VIEW_FEATURE_USAGE,{featuresUsed:i.keys(e),entityId:n.id}),u},t.description=function(n){return'"'+n.name+'" ('+n.id+")"},t.isActivationTypeImmediate=function(n){return n===s.ViewActivationTypes.immediate||!n},t.shouldTriggerImmediately=function(n){return n===s.ViewActivationTypes.DOMChanged||n===s.ViewActivationTypes.URLChanged||n===s.ViewActivationTypes.immediate||!n},t.create=function(n,t){return{id:n,apiName:t,category:"other"}},t.createState=function(n){return{id:n,isActive:!0,metadata:{},parsedMetadata:{},userSuppliedMetadata:{}}}},7434:function(n,t,e){var i,r=e(2600),o=e(3637),a=e(7547),u=e(811),c=e(7313),s=e(8549),f=e(7052),l=e(6321),d=e(311),v=e(4705),h=e(9876),p=e(3819).mM,g=e(8642),m=e(7929).Promise,_=e(3350),w=e(311).VisitorStorageKeys,y=e(5272);i=e(6332);var b=l.get("stores/cookie_options"),E=l.get("stores/global"),I=l.get("stores/layer"),A=l.get("stores/plugins"),T=l.get("stores/rum"),S=l.get("stores/session"),k=l.get("stores/visitor_id"),R=l.get("stores/visitor_bucketing"),N=l.get("stores/visitor"),D=l.get("stores/provider_status");function C(n,t){var e=function(n,e){var i;t.attributionType&&(i=f.now()),o.dispatch(a.SET_VISITOR_ATTRIBUTES,{attributes:[{key:n,value:e,metadata:{lastModified:i}}]})};if(t.getter){var i=t.provides;if(r.isArray(i)||(i=[i]),!(t.isSticky&&!r.isUndefined(h.getFieldValue(n,i)))){var u;try{var c=l.evaluate(t.getter);r.isFunction(c)&&(c=c((function(){return h.getFieldValue(n,i)}),(function(n){e(i,n)}))),r.isUndefined(c)||(t.isAsync?(u=c.then((function(n){e(i,n)}),(function(n){g.warn('Failed to evaluate provider for "'+t.provides+'"; error was:',n)})),o.dispatch(a.SET_VISITOR_ATTRIBUTE_PENDING,{key:i,pending:u})):e(i,c))}catch(s){g.warn('Failed to evaluate getter for provider for "'+t.provides+'"; error was: '+s.message)}return u}}}function O(n){var t=M(n),e=p.getItem(t);return r.isString(e)&&(e=F(e)),e}function x(n){var t;if(n.layerId)t=n;else{var e=n;t={layerId:e.i,pageId:e.p,decisionTimestamp:e.t,decisionTicket:{audienceIds:e.a||[]},decision:{layerId:e.i,experimentId:e.x||null,variationId:e.v||null,isLayerHoldback:e.h||!1}}}return t}function P(n,t,e){try{var r=M(n);e||(t=v.stringify(t));try{p.setItem(r,t)}catch(o){throw g.warn("Visitor / Unable to set localStorage key, error was:",o),new Error("Unable to set localStorage")}i.setItem(r,t)}catch(o){g.warn("Unable to persist visitor data:",o.message)}}function M(n){var e=k.getBucketingId();if(!e)throw new Error("Visitor bucketingId not set");var i=t.getNamespace();if(!i)throw new Error("Namespace is not set");return[e,i,n].join("$$")}function L(n,e){if(!k.getBucketingId())throw new Error("Cannot update local store because bucketingId not set");if(V(n)){var i=t.getStorageKeyFromKey(n);if(r.includes(w,i)){var u=M(i);if(!(n.indexOf(u)<=0)&&(e=F(e)))if(i===w.EVENT_QUEUE)o.dispatch(a.SET_FOREIGN_VISITOR_EVENT_QUEUE,{key:n,value:c.deserialize(e)});else if(i===w.EVENTS)o.dispatch(a.SET_FOREIGN_VISITOR_EVENTS,{key:n,value:c.deserialize(e)});else if(i===w.LAYER_STATES)o.dispatch(a.LOAD_PERSISTED_LAYER_STATES,{layerStates:r.map(e,x),merge:!0});else if(i===w.VARIATION_MAP)o.dispatch(a.MERGE_VARIATION_ID_MAP,{variationIdMap:e});else if(i===w.VISITOR_PROFILE){var s=e;r.each(["custom"],(function(n){var t=A.getPlugin(d.PluginTypes.visitorProfileProviders,n);if(t){if(s.profile&&s.metadata){var e=function(n,t,e){var i=N.getAttribute(t),o=N.getAttributeMetadata(t),a=n.profile[t],u=n.metadata[t];if(r.isEmpty(i))return{data:a,metadata:u};var c={};return r.forOwn(a,(function(n,t){var i,a;o&&o[t]&&(i=o[t].lastModified),u&&u[t]&&(a=u[t].lastModified),(e===d.AttributionTypes.FIRST_TOUCH&&i>=a||e===d.AttributionTypes.LAST_TOUCH&&a>=i||r.isUndefined(i)&&a)&&(c.data=c.data||{},c.data[t]=n,a&&(c.metadata=c.metadata||{},c.metadata[t]=c.metadata[t]||{},c.metadata[t].lastModified=a))})),c}(s,n,t.attributionType);if(!r.isEmpty(e)){var i=[];r.forOwn(e.data,(function(t,r){var o=e.metadata[r],a={key:[n,r],value:t,metadata:o};i.push(a)})),o.dispatch(a.SET_VISITOR_ATTRIBUTES,{attributes:i})}}}else g.debug("Attribute type",n,"not used by any audiences")}))}}}}function V(n){return n.split("$$")[0].indexOf("://")>0}function F(n){try{return v.parse(n)}catch(t){return g.debug("Failed to parse: ",n,t),null}}t.getOrGenerateId=function(){return{randomId:t.getCurrentId()||"oeu"+f.now()+"r"+Math.random()}},t.getCurrentId=function(){var n=k.getVisitorIdLocator();return N.getVisitorIdFromAPI()||(n?function(n){var t,e=n.name;switch(n.type){case d.VisitorIdLocatorType.COOKIE:t=s.get(e);break;case d.VisitorIdLocatorType.JS_VARIABLE:t=y.getGlobalByPath(e);break;case d.VisitorIdLocatorType.LOCALSTORAGE:try{t=y.getGlobal("localStorage").getItem(e)}catch(u){throw new Error("Unable to read localStorage: "+u.toString())}break;case d.VisitorIdLocatorType.QUERY:t=_.getQueryParamValue(e)}try{if(!t)throw g.error("Visitor / Customer provided visitor id cannot be found. Type:",n.type," Name:",e),new Error("Failure to obtain visitor id from "+n.type);if(!r.isString(t)&&!r.isNumber(t))throw g.error("Visitor / Customer provided visitor id is not a string or number. Type:",n.type," Name:",e," Id Type:",(i=t)&&"undefined"!=typeof Symbol&&i.constructor===Symbol?"symbol":typeof i),new Error("Customer provided visitor id is not a string or number")}catch(c){throw T.getSampleRum()&&o.dispatch(a.RECORD_VISITOR_ID_ERROR,{isError:!0}),c}var i;T.getSampleRum()&&(o.dispatch(a.RECORD_VISITOR_ID_ERROR,{isError:!1}),o.dispatch(a.RECORD_VISITOR_ID_LOCATOR_USAGE,{visitorIdLocatorType:n.type,entityId:t}));return String(t)}(n):s.get(d.COOKIES.VISITOR_ID))},t.hasSomeData=function(){return p.keys().length>0},t.setId=function(n){var e,c,f=k.getBucketingId();o.dispatch(a.SET_VISITOR_ID,n),k.getBucketingId()!==f&&(!function(){!function(n,t){0;u.initializeStore(n,t)}(O(w.EVENTS)||[],O(w.EVENT_QUEUE)||[]);var n=(e=w.LAYER_STATES,i=k.getBucketingId(),c=[],s=new RegExp(i+"\\$\\$([^$]+?)\\$\\$"+e),r.each(p.keys(),(function(n){var t=n.match(s);if(t){var e={namespace:t[1],userId:i,item:F(p.getItem(n))};c.push(e)}})),c);var e,i,c,s;r.forEach(n,(function(n){n.item=r.map(n.item,x)})),l=n,v=[],r.each(l,(function(n){r.each(n.item,(function(t){t.namespace=n.namespace,v.push(t)}))})),g=v,o.dispatch(a.LOAD_PERSISTED_LAYER_STATES,{layerStates:r.filter(g,(function(n){return!!n.decision}))}),h=O(w.SESSION_STATE)||{},h=r.extend({lastSessionTimestamp:0,sessionId:null},h),o.dispatch(a.LOAD_SESSION_STATE,h),function(n){var t,e,i=A.getAllPlugins(d.PluginTypes.visitorProfileProviders),u=r.filter(i,(function(n){return r.isFunction(n.restorer)}));n.profile&&n.metadata?(t=n.profile,e=n.metadata):(t=n,e={});t=r.reduce(t,(function(n,t,e){var i=t,o=r.find(u,{provides:e});return o&&(i=o.restorer(t)),n[e]=i,n}),{}),o.dispatch(a.LOAD_EXISTING_VISITOR_PROFILE,{profile:t,metadata:e})}(O(w.VISITOR_PROFILE)||{});var f=O(w.TRACKER_OPTIMIZELY);f&&(m=f,o.dispatch(a.SET_TRACKER_PERSISTABLE_STATE,m));var l,v;var h;var g;var m;t.loadForeignData(),t.removeLegacySessionStateCookies()}(),t.deleteOldLocalData(),i.deleteData(n));try{k.getVisitorIdLocator()||t.maybePersistVisitorId(n)}catch(l){if(g.error("Visitor / Unable to persist visitorId, disabling tracking"),o.dispatch(a.LOAD_DIRECTIVE,{trackingDisabled:!0}),e=l,null!=(c=s.MismatchError)&&"undefined"!=typeof Symbol&&c[Symbol.hasInstance]?c[Symbol.hasInstance](e):e instanceof c)throw g.error("Visitor / Cookie not set to correct value:",l),new Error("Cookie mismatch error while persisting visitorId");throw l}t.refreshSession()},t.getVariationIdMap=function(){return O(w.VARIATION_MAP)||{}},t.updateVariationIdMap=function(n,t,e){o.dispatch(a.UPDATE_VARIATION_ID_MAP,{layerId:n,experimentId:t,variationId:e})},t.persistVariationIdMap=function(){var n=R.getVariationIdMapString();P(w.VARIATION_MAP,n,!0)},t.getPreferredLayerMap=function(){return O(w.LAYER_MAP)||{}},t.updatePreferredLayerMap=function(n,t){o.dispatch(a.UPDATE_PREFERRED_LAYER_MAP,{groupId:n,layerId:t})},t.persistTrackerOptimizelyData=function(n){P(w.TRACKER_OPTIMIZELY,n)},t.refreshSession=function(){o.dispatch(a.REFRESH_SESSION)},t.populateEagerVisitorData=function(n,e){var i=r.filter(n,(function(n){return!n.isLazy}));return t.populateVisitorData(i,e)},t.populateLazyVisitorData=function(n,e){var i=r.filter(n,(function(n){return n.isLazy}));return t.populateVisitorData(i,e)},t.populateVisitorData=function(n,t){t=t||{};var e=r.partial(C,t),i=r(n).filter({isAsync:!0}).map(e).filter().value();return r.forEach(r.filter(n,(function(n){return!n.isAsync})),e),i.length>0?m.all(i):m.resolve()},t.persistBehaviorEvents=function(n){P(w.EVENTS,n)},t.persistBehaviorEventQueue=function(n){P(w.EVENT_QUEUE,n)},t.getPersistedBehaviorEventCount=function(){var n=O(w.EVENTS)||[],t=O(w.EVENT_QUEUE)||[];return c.deserialize(n).length+c.deserialize(t).length},t.persistLayerStates=function(){var n=I.getLayerStates(t.getNamespace());n=r.map(n,(function(n){return r.omit(n,"namespace")})),P(w.LAYER_STATES,n)},t.persistSessionState=function(){P(w.SESSION_STATE,S.getState())},t.persistVisitorProfile=function(){P(w.VISITOR_PROFILE,function(){var n=N.getVisitorProfile(),t=N.getVisitorProfileMetadata(),e=A.getAllPlugins(d.PluginTypes.visitorProfileProviders);if(e){var i=r.reduce(e,(function(n,t){return t.provides&&(n[t.provides]=t),n}),{});n=r.omitBy(n,(function(n,t){var e=i[t];return e&&e.isTransient}))}return{profile:n,metadata:t}}())},t.persistVisitorBucketingStore=function(){var n;t.persistVariationIdMap(),n=R.getPreferredLayerMapString(),P(w.LAYER_MAP,n,!0)},t.getUserIdFromKey=function(n,e){var i;return r.includes(n,e)&&r.includes(n,"_")&&r.includes(n,"$$")&&r.includes(n.slice(n.indexOf("$$")),t.getNamespace())&&(i=n.slice(n.indexOf("_")+1,n.indexOf("$$"))),i},t.maybePersistVisitorId=function(n){n.randomId&&(b.getAutoRefresh()||t.getCurrentId()!==n.randomId?(s.set(d.COOKIES.VISITOR_ID,n.randomId),g.log("Persisting visitorId:",n.randomId)):g.log("Not persisting visitorId: value is not changed and also auto-refresh is disabled"))},t.getAttribute=function(n){return N.getAttribute(n)},t.getPendingAttributeValue=function(n){return D.getPendingAttributeValue(n)},t.isForeignKey=V,t.checkKeyForVisitorId=function(n){var e=k.getBucketingId()||t.getCurrentId(),i=t.getIdFromKey(n);return!i||i===e},t.getIdFromKey=function(n){var e=n.split("$$")[0],i=t.getStorageKeyFromKey(n);if(r.includes(d.StorageKeys,i))return null;var o=e.indexOf("_");return-1===o?e:e.substring(o+1)},t.getStorageKeyFromKey=function(n){var t,e=n.split("$$").pop();if(e.indexOf("://")>-1){var i=e.indexOf("_");t=e.substring(i+1)}else t=e;return r.includes(r.values(d.AllStorageKeys),t)?t:null},t.deleteOldLocalData=function(){var n=p.keys();r.each(n,(function(n){t.isForeignKey(n)||t.checkKeyForVisitorId(n)||p.removeItem(n)}))},t.deleteOldForeignData=function(){var n=p.keys();r.each(n,(function(n){t.isForeignKey(n)&&p.removeItem(n)}))},t.loadForeignData=function(){r.each(p.keys(),(function(n){var t=p.getItem(n);t&&L(n,t)}))},t.getNamespace=function(){return E.getNamespace()},t.serializeFieldKey=function(n){return r.isArray(n)?n.join("$$"):n},t.removeLegacySessionStateCookies=function(){var n=s.getAll();r.forEach(r.keys(n),(function(n){0===n.indexOf(d.COOKIES.SESSION_STATE+"$$")&&s.remove(n)}))}},4740:function(n,t,e){var i=e(2600),r=e(311);t.normalizeClientData=function(n){!n.listTargetingKeys&&n.listTargetingCookies&&(n.listTargetingKeys=i.map(n.listTargetingCookies,(function(n){return{type:r.ListTargetingKeyTypes.COOKIE,key:n}})),delete n.listTargetingCookies)}},8250:function(n,t,e){e(6321).register("env/jquery",e(6854))},6854:function(n,t,e){var i,r=e(5272);try{i=$}catch(a){}var o=r.getGlobal("$");n.exports=i&&i!==o?i:o},9081:function(n){n.exports={}},3735:function(n,t,e){function i(n,t){return null!=t&&"undefined"!=typeof Symbol&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](n):n instanceof t}var r=e(2600),o=e(5202).G,a=e(7052),u=e(6321),c=e(3485),s=e(8642),f=e(5272),l=e(9737),d=u.get("stores/client_metadata"),v=u.get("stores/global");function h(n){return n&&n.engine?n.engine:d.getClientName()}t.handleError=function(n,t){var e=function(){return l.request({url:"https://errors.client.optimizely.com/log",method:"POST",data:m,contentType:"application/json"}).then((function(n){s.log("Error Monitor / Logged error with response: ",n)}),(function(n){s.error("Failed to log error, response was: ",n)}))},u=n.name||"Error",p=n.message||"",g=n.stack||null;i(n,o)&&(i(p,Error)?(p=p.message,g=n.message.stack):g=null);var m={timestamp:a.now(),clientEngine:h(t),clientVersion:d.getClientVersion(),accountId:v.getAccountId(),projectId:v.getProjectId(),errorClass:u,message:p,stacktrace:g},_=r.map(v.getExperimental(),(function(n,t){return{key:"exp_"+t,value:String(n)}}));t&&r.forEach(t,(function(n,t){r.isObject(n)||_.push({key:t,value:String(n)})}),[]),r.isEmpty(_)||(m.metadata=_),s.error("Logging error",m),c.isLoaded()?e():f.addEventListener("load",e)}},3212:function(n,t,e){var i=e(2600),r=e(7547),o=e(6663),a=e(1253),u=e(5202).U,c=e(2413),s=e(6225),f=e(6321).get("stores/directive"),l=e(3485),d=e(2434),v=e(3637),h=e(8642),p=e(3738),g=e(3056),m=e(7425).create(),_=1e3,w=10,y=u("ChangeOverheatError");function b(n,t){if(this.change=n,this.identifier=t.identifier,this.startTime=t.startTime,f.shouldObserveChangesIndefinitely()){v.dispatch(r.INITIALIZE_CHANGE_METRICS),this.rateMeter=new p(_);var e=i.isNull(w)?Number.POSITIVE_INFINITY:w;this.rateMeter.addListener(e,i.bind((function(){h.warn("AppendChange",this,"has overheated and will no longer apply or reapply"),this.cancel(),v.dispatch(r.RECORD_CHANGE_OVERHEATED),o.emitError(new y("Change "+this.identifier+" has overheated"),{layerId:t.action&&t.action.layerId,experimentId:t.action&&t.action.experimentId,variationId:t.action&&t.action.variationId,changeId:n.id,changeType:n.type,movingWindowMilliseconds:_,maxMacroTasksInMovingWindow:e})}),this));for(var a=Math.min(e,50),u=0;u<=a;u++)this.rateMeter.addListener(u,i.partial((function(n){v.dispatch(r.RECORD_CHANGE_MACROTASK_RATE,{changeMacrotaskRate:n})}),u))}}b.prototype.numberOfRootNodes=function(n){var t=document.createElement("div");return t.innerHTML=n,t.childNodes.length},b.prototype.getSiblingElements=function(n,t,e){for(var i=n,r=[],o=0;o<t;o++)e?(r.push(i.nextSibling),i=i.nextSibling):(r.push(i.previousSibling),i=i.previousSibling);return r},b.prototype.apply=function(){this.applyDeferred=s();try{if(!this.numberOfRootNodes(this.change.value))throw new Error("No DOM elements to be created for this change: "+this.change.value);var n=i.partial(this.applyDeferred.reject,new Error("Unable to find selector.")),t={};f.shouldObserveChangesUntilTimeout()?t={timeout:i.partial(g.isTimedOut,this.startTime),onTimeout:n}:f.isEditor()&&m.waitUntil(i.partial(g.isTimedOut,this.startTime)).then(n,n),this.unobserveSelector=m.observeSelector(this.change.selector,i.bind(this.maybeApplyToElement,this),t);var e=l.querySelectorAll(this.change.selector);i.each(e,i.bind(this.maybeApplyToElement,this))}catch(r){this.applyDeferred.reject(r)}return this.applyDeferred},b.prototype.maybeApplyToElement=function(n){var t=a.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id;if(n.hasAttribute(t))return h.debug("Not applying AppendChange to element",n,"because it was inserted by this change"),void this.applyDeferred.resolve();this.rateMeter&&this.rateMeter.countCurrentTick(),i.bind(this.applyOrReapplyToElement,this,n,t)(),this.applyDeferred.resolve()},b.prototype.applyOrReapplyToElement=function(n,t){var e;switch(this.change.operator){case d.DOMInsertionType.AFTER:e=d.insertAdjacentHTMLType.AFTER_END;break;case d.DOMInsertionType.APPEND:e=d.insertAdjacentHTMLType.BEFORE_END;break;case d.DOMInsertionType.BEFORE:e=d.insertAdjacentHTMLType.BEFORE_BEGIN;break;case d.DOMInsertionType.PREPEND:e=d.insertAdjacentHTMLType.AFTER_BEGIN;break;default:e=d.insertAdjacentHTMLType.BEFORE_END}n.insertAdjacentHTML(e,this.change.value),n.setAttribute(t,""),c.setData(n,this.change.id,this.identifier,[]);var r,o,a=this.numberOfRootNodes(this.change.value)-1;e===d.insertAdjacentHTMLType.BEFORE_END?(r=n.lastChild,o=this.getSiblingElements(r,a,!1)):e===d.insertAdjacentHTMLType.AFTER_BEGIN?(r=n.firstChild,o=this.getSiblingElements(r,a,!0)):e===d.insertAdjacentHTMLType.BEFORE_BEGIN?(r=n.previousSibling,o=this.getSiblingElements(r,a,!1)):e===d.insertAdjacentHTMLType.AFTER_END&&(r=n.nextSibling,o=this.getSiblingElements(r,a,!0)),o.unshift(r),i.each(o,i.bind((function(n){var e=n.nodeType===Node.ELEMENT_NODE?n:l.parentElement(n);e.setAttribute(t,"");var r=c.getData(e,this.change.id,this.identifier)||[];r.push(n),c.setData(e,this.change.id,this.identifier,r),i.each(l.childrenOf(e),(function(n){n.setAttribute(t,"")}))}),this))},b.prototype.cancel=function(){this.unobserveSelector&&this.unobserveSelector()},n.exports=function(n){n.registerChangeApplier(d.changeType.APPEND,b)}},8901:function(n,t,e){var i=e(2600),r=e(6225),o=e(2434),a=e(5131);function u(n,t){if(!i.isFunction(n.value))throw new Error("Custom code must be a function");this.change=n}u.prototype.apply=function(){var n=r();try{a.apply(this.change.value),n.resolve()}catch(t){n.reject(t)}return n},n.exports=function(n){n.registerChangeApplier(o.changeType.CUSTOM_CODE,u)}},8527:function(n,t,e){var i=e(2600),r=e(4212),o=e(3662),a=e(2405).E,u={decideLayer:function(n,t){if(!n.decisionMetadata||!n.decisionMetadata.experimentPriorities)throw new a("No decisionMetadata.experimentPriorities on layer.");for(var e=n.decisionMetadata.experimentPriorities.length,i=0;i<e;i++){var r=c(n,t.audienceIds,t.bucketingId,i);if(r){var u=o.selectVariation(r,t.audienceIds,t.bucketingId,t.activationId,t.preferredVariationMap);if(!n.decisionMetadata.offerConsistency||o.hasVariationActionsOnView(u,t.pageId))return{experiment:r,variation:u}}}throw new a("No eligible experiment and variation found.")},includePageIdInDecisionTicket:function(n){return!(!n.decisionMetadata||!n.decisionMetadata.offerConsistency)}};function c(n,t,e,u){var c,s=n.decisionMetadata.experimentPriorities[u],f=i.reduce(s,(function(e,i){var r=o.getExperimentById(n,i.entityId);return o.isValidExperiment(t,r)&&e.push(i.entityId),e}),[]);if(!i.isEmpty(f)){var l,d=i.filter(s,{endOfRange:null});if(d&&d.length===s.length)l=function(n){for(var t=[],e=Math.round(1e4/n.length),i=0;i<n.length;i++)t.push({entityId:n[i],endOfRange:e*(i+1)});return t[t.length-1].endOfRange=1e4,t}(f);else{if(0!==d.length)throw new a("You must specify weights for all or none of the experiments in each priority layer.");l=function(n,t){for(var e=[],r=[],o=0,a=0;a<t.length;a++){var u=0;n.indexOf(t[a].entityId)>=0&&(o+=u=0===a?t[0].endOfRange:t[a].endOfRange-t[a-1].endOfRange,r.push({entityId:t[a].entityId,points:u}))}if(i.isEmpty(e))for(var c=0,s=0;s<r.length;s++){var f=Math.round(1e4*r[s].points/o)+c;e.push({entityId:r[s].entityId,endOfRange:f}),c=f}return e[e.length-1].endOfRange=1e4,e}(f,s)}if(c=r.chooseWeightedCandidate(e,n.id,l)){var v=o.getExperimentById(n,c);if(v)return v}}}n.exports=function(n){n.registerDecider("equal_priority",u)}},6605:function(n,t,e){var i=e(3662),r=e(2405).E,o={selectExperiment:function(n,t,e){if(n.experiments.length<1)throw new r("Unable to find experiment to bucket user into");var o=n.experiments[0];if(!i.isValidExperiment(t,o))throw new r('Audience conditions failed for experiment: "'+o.id+'".');return o}};n.exports=function(n){n.registerDecider("single_experiment",o),n.registerDecider("multivariate",o)}},6545:function(n,t,e){var i=function(n){return n&&"undefined"!=typeof Symbol&&n.constructor===Symbol?"symbol":typeof n},r=e(2600),o=e(6663),a=e(5202).U,u=e(3485),c=e(4095),s=t.Error=a("ClickDelegateError");function f(n){this.handler=n,this.events=[],this.unlistenFn=null,this.clickHandler=r.bind((function(n){r.forEach(this.events,r.bind((function(t){try{var e=t.config&&t.config.selector?t.config.selector:t.eventFilter.selector;(function(n,t,e){var a=n.target,u=0;for(;a;){var f;try{f=c(a,t)}catch(d){var l={typeofElementValue:void 0===a?"undefined":i(a),nodeName:r.result(a,["nodeName"],null),nodeType:r.result(a,["nodeType"],null),targetName:r.result(n,["target","nodeName"],null),targetType:r.result(n,["target","nodeType"],null),numParentsTraversed:u,selector:t,errorMessage:d.message,eventId:e.id};return o.emitError(new s("Unable to evaluate match for element"),l),!1}if(f)return!0;a=a.parentElement,u++}return!1})(n,e,t)&&this.handler(t)}catch(a){o.emitError(new s("Unable to handle click for selector"+e+":"+a.message))}}),this))}),this)}f.prototype.listen=function(){this.unlistenFn=u.addEventListener("click",this.clickHandler,!0)},f.prototype.unlisten=function(){this.unlistenFn&&(this.unlistenFn(),this.unlistenFn=null)},f.prototype.hasEvents=function(){return this.events.length>0},f.prototype.addEvent=function(n){this.events.push(n)},f.prototype.removeEvent=function(n){this.events=r.filter(this.events,(function(t){return t.apiName!==n.apiName}))},n.exports=f},2823:function(n,t,e){var i=e(7661),r=e(6545),o=e(8642),a=e(8884);function u(n){return"apiName: "+n.apiName+", selector: "+n.eventFilter.selector}n.exports=function(n){var t=new r((function(n){a.updateAllViewTags(),i.trackClickEvent(n)?o.log("Tracking click event:",n):o.log("Not tracking click event:",n)}));n.registerEventImplementation("click",{attach:function(n){t.hasEvents()||t.listen(),t.addEvent(n),o.debug("Started listening for click event ("+u(n)+"):",n)},detach:function(n){t.removeEvent(n),t.hasEvents()||t.unlisten(),o.debug("Stopped listening for click event ("+u(n)+"):",n)}})}},174:function(n,t,e){var i=e(2600),r=e(9950),o=e(9713),a=e(5870);function u(n,t){var e=o.buildFromSpecV0_1(t);if(1!==e.length)throw new Error("Invalid query descriptor; verify that no aggregators are specified");return a.execute(e[0],n)}function c(n,t){return i.map(n,(function(n){return i.isFunction(n.toObject)?n.toObject(t):n}))}function s(n,t){if(!n)return["Descriptor not defined"];var e=[];return n.count&&e.push('Unexpected "count" clause specified'),n.pick&&n.pick.modifier&&-1===t.indexOf(n.pick.modifier)&&e.push('Invalid "pick" modifier "'+n.pick.modifier+'"'),i.each(n.filters,(function(n){i.isUndefined(n.modifier)||e.push('Unexpected "filter" modifier "'+n.modifier+'"')})),e.length>0?e:void 0}function f(n,t){var e={revenueAsTag:!1,timeAsTimestamp:!0};if(i.isUndefined(t))return c(r.getEvents(n),e);if(i.isNumber(t)){if(t<=0)throw new Error("Count must be a positive integer, got "+t);return c(r.getEvents(n).slice(-t),e)}var a=s(t,i.values(o.RECENCY_FILTERS));if(a)throw new Error(a.join("\n"));return c(u(r.getEvents(n),t),e)}function l(n,t){if(!(t=i.cloneDeep(t)||{}).pick)throw new Error('No "pick" clause provided in query descriptor');if(!t.pick.name)throw new Error('No field name provided in "pick" clause');t.pick.modifier=t.pick.modifier||o.FREQUENCY_FILTERS.MOST_FREQUENT;var e=s(t,i.values(o.FREQUENCY_FILTERS));if(e)throw new Error(e.join("\n"));return u(r.getEvents(n),t)}function d(n,t){var e=o.buildFromSpecV0_2(t),u=r.getEvents(n),s=c(a.execute(e,u),{revenueAsTag:!0,timeAsTimestamp:!1});return(t.pick||t.reduce&&"count"===t.reduce.aggregator)&&(s=i.flatten(s)),t.reduce&&(s=s[0]),s}n.exports=["stores/visitor_events",function(n){return{getEvents:i.partial(f,n),getByFrequency:i.partial(l,n),query:i.partial(d,n)}}]},5811:function(n,t,e){n.exports=function(n){n.registerApiModule("behavior",e(174))}},7110:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(9688)),n.registerAudienceMatcher("behavior",e(153))}},153:function(n,t,e){var i=e(2600),r=e(4705),o=e(9713),a=e(5870);n.exports={fieldsNeeded:["events"],match:function(n,t){var e,u=r.parse(t.value);return e=i.isUndefined(u.version)?[u]:o.buildFromSpecV0_1(u),i.every(e,(function(t){return a.isSatisfied(t,n.events)}))}}},9688:function(n,t,e){var i=e(9950);n.exports={provides:"events",isTransient:!0,getter:[function(){return i.getEvents()}]}},6193:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(7292))}},7292:function(n,t,e){var i=e(2600),r=e(7082),o=e(9950),a=e(4705),u=e(9713);n.exports={provides:"customBehavior",shouldTrack:!0,isLazy:!1,getter:["stores/global","stores/visitor_attribute_entity",function(n,t){var e=n.getProjectId(),c=i.filter(i.map(t.getCustomBehavioralAttributes(e),(function(n){try{return{id:n.id,granularity:r.GRANULARITY.ALL,rule:u.buildFromSpecV0_2(a.parse(n.rule_json))}}catch(t){return}}))),s=o.getEvents();return r.evaluate(c,s)}]}},1684:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(699)),n.registerAudienceMatcher("first_session",e(5172))}},5172:function(n){n.exports={fieldsNeeded:["first_session"],match:function(n){return!!n.first_session}}},699:function(n,t,e){var i=e(9893),r=e(9950),o=e(9876).getFieldValue,a=e(2816).CURRENT_SESSION_INDEX;n.exports={provides:"first_session",shouldTrack:!0,getter:[function(){var n=r.getEvents();if(n&&n.length>0){var t=n[0];return o(t,[i.FIELDS.SESSION_INDEX])===a}return!0}]}},7082:function(n,t,e){var i=e(8642),r={FIELDS:e(9893).FIELDS},o=e(9713),a=e(5870);t.GRANULARITY={ALL:"all",CURRENT_SESSION:"current_session",LAST_30_DAYS:"last_30_days",LAST_60_DAYS:"last_60_days"},t.evaluate=function(n,e){var u={};if(0===e.length){for(var c=0;c<n.length;c++)u[n[c].id]=n[c].defaultValue;return u}var s=function(n){if(0===n.length)return[];for(var t=n.length-1,e=r.FIELDS.SESSION_ID,i=n[t][e];t>0&&i===n[t-1][e];)t--;return n.slice(t)}(e),f=function(n,t){if(0===n.length||t<=0)return[];var e=+new Date-t*o.MILLIS_IN_A_DAY;e-=e%o.MILLIS_IN_A_DAY;for(var i=n.length;i>0&&e<=n[i-1][r.FIELDS.TIME];)i--;return n.slice(i)}(e,60);for(c=0;c<n.length;c++){var l=n[c],d=e;l.granularity===t.GRANULARITY.CURRENT_SESSION?d=s:l.granularity===t.GRANULARITY.LAST_60_DAYS&&(d=f);try{var v=d;l.rule&&(v=a.execute(l.rule,d)),u[l.id]=l.defaultValue,1===v.length?u[l.id]=v[0][0]||l.defaultValue:i.debug("Behavior / Rule for",l.id,"returned",v.length,"results, expected 1")}catch(h){i.error("Behavior / Rule for",l.id,"failed with",h.message||"")}}return u}},9950:function(n,t,e){var i=e(2600),r=e(7313),o=e(6321).get("stores/visitor_events");t.getEvents=function(){var n=r.getEvents(),t=[].concat.apply([],i.values(o.getForeignEvents())),e=[].concat.apply([],i.values(o.getForeignEventQueues())),a=r.mergeAllEvents([n,t,e]);return a.slice(a.length-1e3)}},9713:function(n,t,e){var i=t,r=e(2600),o={FIELDS:e(9893).FIELDS,FIELDS_V0_2:e(9893).FIELDS_V0_2},a=e(4705),u=e(8642),c=e(5870);i.MILLIS_IN_A_DAY=864e5,i.aggregateField=function(n,t){return r.isString(t)&&(t=[t]),t=t||c.DEFAULT_FIELD,[c.generateAlias(n,t)]},i.groupField=function(n){return r.isString(n)&&(n=[n]),[(n=n||c.DEFAULT_FIELD).join(".")]};var s={"<":"lt","<=":"lte",">":"gt",">=":"gte","=":"eq","==":"eq"};function f(n){return n=(n||"").toString().trim(),s[n]||n}function l(n,t,e){var a={where:t};if(n.count&&(a.limit=n.count),n.modifier===i.FREQUENCY_FILTERS.MOST_FREQUENT){var u=i.getFieldKeyPathForSource(n.name,e),c=i.aggregate("count"),s=i.aggregateField("count"),f=i.groupField(u);return r.extend(a,{select:[{field:f}],groupBy:i.groupBy([u]),aggregate:[c],orderBy:[{field:s,direction:"DESC"}]})}return r.extend(a,{orderBy:[{field:[o.FIELDS.TIME],direction:"DESC"}]})}i.fieldComparison=function(n,t,e){return n=f(n),r.isString(t)&&(t=[t]),"exists"===n?{op:n,args:[{field:t}]}:{op:n,args:[{field:t},{value:e}]}},i.relativeTimeComparison=function(n,t){return{op:f(n),args:[{op:"-",args:[{eval:"now"},{field:[o.FIELDS.TIME]}]},{value:t*i.MILLIS_IN_A_DAY}]}},i.rangeTimeComparison=function(n){return r.isArray(n)?{op:"between",args:[{field:[o.FIELDS.TIME]},{value:[n[0]||+new Date(0),n[1]||+new Date]}]}:(u.error("Rule builder","rangeTimeComparison passed invalid range",n),null)},i.groupBy=function(n){for(var t=[],e=0;e<n.length;e++)t[e]={field:n[e]};return t},i.aggregate=function(n,t){return r.isString(t)&&(t=[t]),{op:n,args:[{field:t=t||c.DEFAULT_FIELD}]}},i.SOURCE_TYPES={BEHAVIOR:"events",CUSTOM_BEHAVIOR:"custom_behavior",DCP:"dcp"},i.FREQUENCY_FILTERS={MOST_FREQUENT:"most_frequent",LEAST_FREQUENT:"least_frequent"},i.RECENCY_FILTERS={MOST_RECENT:"most_recent",LEAST_RECENT:"least_recent"},i.getFieldKeyPathForSource=function(n,t){t=t||i.SOURCE_TYPES.BEHAVIOR;var e=[];return r.isString(n)?(e=[n],t!==i.SOURCE_TYPES.BEHAVIOR||r.includes(r.values(o.FIELDS),n)||(e=[o.FIELDS.OPTIONS,n])):e=n,e},i.buildFromSpecV0_1=function(n){if(!(n.action||n.filters&&0!==n.filters.length))throw new Error('Audience spec must have an "action" field or at least one "filter" '+a.stringify(n));var t=i.fieldComparison("gt",o.FIELDS.TIME,0),e=[],c=[];if(n.action&&(c.push(i.fieldComparison("eq",o.FIELDS.NAME,n.action.value)),n.action.type&&c.push(i.fieldComparison("eq",o.FIELDS.TYPE,n.action.type))),n.time)if("last_days"===n.time.type)c.push(i.relativeTimeComparison("lte",n.time.days));else if("range"===n.time.type){var s=i.rangeTimeComparison([n.time.start,n.time.stop]);s&&c.push(s)}else u.error("Rule builder",'Audience spec has bad "time" type',n.time.type);if(t={op:"and",args:c},n.count&&e.push({where:i.fieldComparison(n.count.comparator,"0",n.count.value),from:{select:[{field:i.aggregateField("count")}],where:t,aggregate:[i.aggregate("count")]}}),n.filters&&r.each(n.filters,(function(r){var a,u,s=i.getFieldKeyPathForSource(r.name,n.source);if(r.modifier===i.FREQUENCY_FILTERS.MOST_FREQUENT?(a=i.aggregate("count"),u=i.aggregateField("count")):r.modifier===i.RECENCY_FILTERS.MOST_RECENT&&(a=i.aggregate("max",o.FIELDS.TIME),u=i.aggregateField("max",o.FIELDS.TIME)),a){var f=s,l=i.groupField(f);e.push({where:i.fieldComparison(r.comparator,"0",r.value),from:{select:[{field:l}],where:t,groupBy:i.groupBy([f]),aggregate:[a],orderBy:[{field:u,direction:"DESC"}],limit:1}})}else c.push(i.fieldComparison(r.comparator,s,r.value))})),n.pick){if(e.length>0)throw new Error('A "pick" clause must not be specified with "count" or "most_recent", "most_frequent" modifiers'+a.stringify(n));return[l(n.pick,t,n.source)]}return e.length>0?e:[{where:t}]},i.buildFromSpecV0_2=function(n){!function(n){var t=[];if(r.isUndefined(n))throw new Error("rule is undefined");if(!r.isObject(n))throw new Error("rule is not an Object");"0.2"!==n.version&&t.push('version: not "0.2"'),n.filter&&(r.isArray(n.filter)?r.each(n.filter,(function(n,e){var r=i.validateFieldKeyPathV0_2(n.field,i.FieldPurpose.FILTER);r&&t.push("filter["+e+"]: "+r);var o=i.validateComparatorAndValue(n.comparator,n.value);o&&t.push("filter["+e+"]: "+o)})):t.push("filter: not an array"));var e=[],o=[];n.sort&&(n.reduce&&n.reduce.aggregator&&"nth"!==n.reduce.aggregator&&t.push("sort: superfluous because we can apply aggregator "+a.stringify(n.reduce.aggregator)+" to unsorted items"),r.isArray(n.sort)?r.each(n.sort,(function(n,u){var c=i.validateFieldKeyPathV0_2(n.field,i.FieldPurpose.SORT);c&&t.push("sort["+u+"]: "+c),n.field&&"frequency"===n.field[0]?e.push(n):o.push(n);var s=function(n){var t="direction "+(a.stringify(n)||String(n));if(!r.includes(["ascending","descending"],n))return t+' is not "ascending" or "descending"'}(n.direction);s&&t.push("sort["+u+"]: "+s)})):t.push("sort: not an array"),e.length&&o.length&&t.push('sort: sorting by non-["frequency"] field is pointless because we are going to sort the picked values by ["frequency"]'),e.length&&!n.pick&&t.push('sort: sorting by ["frequency"] is impossible because no values have been picked'));if(n.pick){n.reduce&&"count"===n.reduce.aggregator&&t.push('pick: superfluous because we can apply aggregator "count" to raw events');var u=i.validateFieldKeyPathV0_2(n.pick.field);u&&t.push("pick: "+u)}if(n.reduce){var c=n.reduce.aggregator,s="aggregator "+(a.stringify(c)||String(c)),f=n.reduce.n,l="index "+(a.stringify(f)||String(f));r.includes(["sum","avg","max","min","count","nth"],c)||t.push("reduce: "+s+" is unknown"),r.includes(["sum","avg","max","min"],c)&&(n.pick||t.push("reduce: "+s+" is impossible to use because no values have been picked")),"nth"===c?((!r.isNumber(f)||isNaN(f)||parseInt(f,10)!==f||f<0)&&t.push("reduce: "+l+" is not a non-negative integer (mandated by "+s+")"),n.sort||t.push('reduce: aggregator "nth" is meaningless without a specific sort order')):r.isUndefined(f)||t.push("reduce: "+l+" is defined (not mandated by "+s+")")}if(t.length)throw new Error(t.join("\n"))}(n);var t={where:{op:"and",args:r.map(n.filter||[],(function(n){return"age"===n.field[0]?i.relativeTimeComparison(n.comparator||"eq",n.value/i.MILLIS_IN_A_DAY):i.fieldComparison(n.comparator||"eq",i.convertFieldKeyPathFromSpecV0_2(n.field),n.value)}))}};if(n.reduce&&"count"===n.reduce.aggregator)return r.extend(t,{aggregate:[{op:"count",args:[{field:["*"]}]}],select:[{field:["_count_*"]}]});var e=[],o=[];if(n.sort&&(r.each(n.sort,(function(n){r.includes(["ascending","descending"],n.direction)&&(r.includes(["time","age"],n.field[0])&&o.push(n),"frequency"===n.field[0]&&e.push(n))})),o.length&&!e.length&&(t.orderBy=r.filter(r.map(o,(function(n){return"time"===n.field[0]?{field:i.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===n.direction?"ASC":"DESC"}:"age"===n.field[0]?{field:i.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===n.direction?"DESC":"ASC"}:void 0}))))),n.pick&&n.pick.field){var u=i.convertFieldKeyPathFromSpecV0_2(n.pick.field);if(n.reduce&&r.includes(["avg","max","min","sum"],n.reduce.aggregator))return r.extend(t,{aggregate:[{op:n.reduce.aggregator,args:[{field:u}]}],select:[{field:[c.generateAlias(n.reduce.aggregator,u)]}]});t=e.length?r.extend(t,{groupBy:[{field:u}],aggregate:[{op:"count",args:[{field:["*"]}]}],orderBy:[{field:["_count_*"],direction:"ascending"===e[0].direction?"ASC":"DESC"}],select:[{field:[u.join(".")]}]}):r.extend(t,{select:[{field:u}]})}if(n.reduce&&"nth"===n.reduce.aggregator){var s=n.reduce.n;if(r.isNumber(s)&&s>=0&&Number(s)===Math.floor(Number(s)))return r.extend(t,{offset:s,limit:1})}return t},i.convertFieldKeyPathFromSpecV0_2=function(n){return"tags"===n[0]&&"revenue"===n[1]?["r"]:[o.FIELDS_V0_2[n[0]]].concat(n.slice(1))},i.FieldPurpose={FILTER:"filter",SORT:"sort",PICK:"pick"},i.validateFieldKeyPathV0_2=function(n,t){var e="field "+(a.stringify(n)||String(n));if(!r.isArray(n)||!r.every(n,r.isString))return e+" is not an array of strings";if("tags"===n[0]&&n.length>2||"tags"!==n[0]&&n.length>1)return e+" includes too many strings";if("tags"===n[0]&&n.length<2)return e+" does not specify an exact tag";if(n.length<1)return e+" does not specify a top-level field";var u=r.keys(o.FIELDS_V0_2),c=["age","frequency"];return t===i.FieldPurpose.FILTER&&(u.push("age"),c=["frequency"]),t===i.FieldPurpose.SORT&&(u=["time","age","frequency"],c=["name","type","category","tags"]),r.includes(c,n[0])?e+" is not supported here":r.includes(u,n[0])?void 0:e+" is unknown"},i.validateComparatorAndValue=function(n,t){var e="comparator "+(a.stringify(n)||String(n)),i="value "+(a.stringify(t)||String(t));if(!r.isString(n)&&!r.isUndefined(n))return e+" is not a string";switch(n){case void 0:case"eq":case"is":case"contains":break;case"lt":case"gt":case"lte":case"gte":if(!r.isNumber(t))return i+" is not a number (mandated by "+e+")";break;case"in":if(!r.isArray(t))return i+" is not an array (mandated by "+e+")";break;case"between":if(!(r.isArray(t)&&2===t.length&&r.isNumber(t[0])&&r.isNumber(t[1])&&t[0]<=t[1]))return i+" is not a pair of increasing numbers (mandated by "+e+")";break;case"regex":if(!(r.isString(t)||r.isArray(t)&&2===t.length&&r.isString(t[0])&&r.isString(t[1])))return i+" is not a pattern string or a [pattern string, flags string] array (mandated by "+e+")";break;case"exists":if(!r.isUndefined(t))return i+" is not undefined (mandated by "+e+")";break;default:return e+" is unknown"}}},5870:function(n,t,e){var i=e(2600),r=e(311),o=e(8642),a=i.bind(o.log,o),u=e(7052),c=e(9876).getFieldValue,s=e(4705),f=function(n,t,e){if(n.getValueOrDefault)return n.getValueOrDefault(t,e);if(!i.isArray(t))return e;var r=c(n,t);return void 0===r&&(r=e),r},l=function(n){return"string"==typeof n?n.trim().toLowerCase():n};t.clause={WHERE:"where",GROUP_BY:"groupBy",AGGREGATE:"aggregate",HAVING:"having",ORDER_BY:"orderBy",SELECT:"select",OFFSET:"offset",LIMIT:"limit",FROM:"from"},t.DEFAULT_FIELD=["*"],t.booleanOperators={eq:function(n){var t=i.map(n,l);return t[0]==t[1]},is:function(n){return n[0]===n[1]},gt:function(n){return n[0]>n[1]},lt:function(n){return n[0]<n[1]},gte:function(n){return n[0]>=n[1]},lte:function(n){return n[0]<=n[1]},"in":function(n){var t=i.map(n[1]||[],l);return i.includes(t,l(n[0]))},between:function(n){return n[1][0]<=n[0]&&n[0]<=n[1][1]},contains:function(n){var t=i.map(n,(function(n){return"string"==typeof n?n.toLowerCase():n}));return-1!==(t[0]||"").indexOf(t[1])},regex:function(n){try{var t,e;return i.isString(n[1])?(t=n[1],e="i"):(t=n[1][0]||"",e=n[1][1]||""),new RegExp(t,e).test(n[0])}catch(r){return o.error("Rules",'In operator "regex", error: '+(r.message||"invalid RegExp /"+[t,e].join("/"))),!1}},exists:function(n){return void 0!==n[0]},and:function(n){return i.every(n,(function(n){return n}))},or:function(n){return i.some(n,(function(n){return n}))},not:function(n){return!n[0]}},t.arithmeticOperators={"+":function(n){return(n[0]||0)+(n[1]||0)},"-":function(n){return(n[0]||0)-(n[1]||0)},"/":function(n){return(n[0]||0)/(n[1]||1)},"%":function(n){return(n[0]||0)%(n[1]||1)}},t.aggregateOperators={sum:function(n,e){for(var i=n[0]||t.DEFAULT_FIELD,r=0,o=0;o<e.length;o++)r+=f(e[o],i,0);return r},avg:function(n,e){if(0===e.length)return 0;for(var i=n[0]||t.DEFAULT_FIELD,r=0,o=0;o<e.length;o++)r+=f(e[o],i,0);return r/e.length},max:function(n,e){for(var i=n[0]||t.DEFAULT_FIELD,r=Number.NEGATIVE_INFINITY,o=0;o<e.length;o++)r=Math.max(r,f(e[o],i,Number.NEGATIVE_INFINITY));return r},min:function(n,e){for(var i=n[0]||t.DEFAULT_FIELD,r=Number.POSITIVE_INFINITY,o=0;o<e.length;o++)r=Math.min(r,f(e[o],i,Number.POSITIVE_INFINITY));return r},count:function(n,t){return t.length}};var d={now:function(){return u.now()}},v=function(n,e){if(e.hasOwnProperty("value"))return e.value;if(e.hasOwnProperty("field"))return f(n,e.field);if(e.hasOwnProperty("eval"))return e.eval in d?d[e.eval]():void o.error("Rules","Unknown function: "+e.eval);if(e.op){var r,a=(r=e.op)in t.booleanOperators?t.booleanOperators[r]:r in t.arithmeticOperators?t.arithmeticOperators[r]:null;if(a){var u=i.partial(v,n),c=e.args||[];return a(i.map(c,(function(n){return u(n)})),n)}o.error("Rules","Unknown operator: "+e.op)}else o.error("Rules","No operator specified: "+s.stringify(e))};t.generateAlias=function(n,t){return"_"+n+"_"+t.join(".")};t.rewrite=function(n){var e=[],r={};function a(n,u){if(i.isArray(n)&&("and"!==n[0]&&"or"!==n[0]&&"not"!==n[0]&&o.error("Rules","Unexpected operation "+n[0]+". Continuing optimistically."),n={op:n[0],args:n.slice(1)}),n.hasOwnProperty("field")||n.hasOwnProperty("value")||n.hasOwnProperty("eval"))return n;if(u&&n.op in t.aggregateOperators){var c=(n.args&&n.args[0]||{}).field||t.DEFAULT_FIELD,s=t.generateAlias(n.op,c);return s in r||(e.push({op:n.op,args:n.args}),r[s]=!0),{field:[s]}}for(var f=[],l=n.args||[],d=0;d<l.length;d++)f[d]=a(l[d],u);return{op:n.op,args:f}}var u={};n.hasOwnProperty(t.clause.WHERE)&&(u[t.clause.WHERE]=a(n[t.clause.WHERE],!1)),n.hasOwnProperty(t.clause.HAVING)&&(u[t.clause.HAVING]=a(n[t.clause.HAVING],!0)),(n.hasOwnProperty(t.clause.AGGREGATE)||e.length>0)&&(u[t.clause.AGGREGATE]=(n[t.clause.AGGREGATE]||[]).concat(e));for(var c=[t.clause.GROUP_BY,t.clause.ORDER_BY,t.clause.SELECT,t.clause.OFFSET,t.clause.LIMIT],s=0;s<c.length;s++)n.hasOwnProperty(c[s])&&(u[c[s]]=n[c[s]]);return n.hasOwnProperty(t.clause.FROM)&&(u[t.clause.FROM]=t.rewrite(n[t.clause.FROM])),u};var h=function(n,e){e=e||0;var r=[];if(n.hasOwnProperty(t.clause.WHERE)?n[t.clause.WHERE].op?n[t.clause.WHERE].op in t.booleanOperators||r.push("Non-boolean WHERE clause operator"):r.push("Missing WHERE clause operator"):r.push("Missing WHERE clause"),!n.hasOwnProperty(t.clause.HAVING)||(n[t.clause.HAVING].op?n[t.clause.HAVING].op in t.booleanOperators||r.push("Non-boolean HAVING clause operator"):r.push("Missing HAVING clause operator")),n.hasOwnProperty(t.clause.GROUP_BY)&&!n.hasOwnProperty(t.clause.AGGREGATE)&&r.push("No AGGREGATE clause specified with GROUP_BY clause"),n.hasOwnProperty(t.clause.SELECT)){var o=n[t.clause.SELECT];if(i.isArray(o))for(var a=0;a<o.length;a++)o[a].op&&o[a].op in t.aggregateOperators&&r.push('In SELECT clause, aggregate operator "'+o[a].op+'" specified in selector at index '+a);else r.push("SELECT clause must be an array")}if(n.hasOwnProperty(t.clause.OFFSET)){var u=n[t.clause.OFFSET];(!i.isNumber(u)||Number(u)<0||Number(u)!==Math.floor(Number(u)))&&r.push("OFFSET must be a non-negative integer")}if(n.hasOwnProperty(t.clause.LIMIT)){var c=n[t.clause.LIMIT];(!i.isNumber(c)||Number(c)<0||Number(c)!==Math.floor(Number(c)))&&r.push("LIMIT must be a non-negative integer")}return e>0&&(r=i.map(r,(function(n){return"Sub-rule "+e+": "+n}))),n.hasOwnProperty(t.clause.FROM)&&(r=r.concat(h(n[t.clause.FROM],e+1))),r},p=function(n,e){var r,u,c,l=e;if(n.hasOwnProperty(t.clause.FROM)&&(o.debug("Evaluating FROM clause:",n[t.clause.FROM]),l=p(n[t.clause.FROM],l),o.debug("Results after FROM:",l)),o.debug("Evaluating WHERE clause:",n[t.clause.WHERE]),l=i.filter(l,(function(e){return v(e,n[t.clause.WHERE])})),o.debug("Results after WHERE:",l),n.hasOwnProperty(t.clause.AGGREGATE)){o.debug("Evaluating AGGREGATE clause:",n[t.clause.AGGREGATE]);var d=function(n,t){var e={};if(void 0===n||!i.isArray(n)||0===n.length)return e["*"]={fieldValues:{},events:t},e;for(var r=i.map(n,(function(n){return n.field})),o=0;o<t.length;o++){for(var a=t[o],u=[],c={},l=0;l<r.length;l++){var d=r[l],v=f(a,d),h=d.join(".");c[h]=v,u.push(encodeURIComponent(h)+"="+encodeURIComponent(s.stringify(v)))}var p=u.join("&");e.hasOwnProperty(p)||(e[p]={fieldValues:c,events:[]}),e[p].events.push(a)}return e}(n[t.clause.GROUP_BY],l);l=function(n,t){var e=[];return i.each(n,(function(n,r){var o=i.extend({},n.fieldValues),a=t[r]||{};i.extend(o,a),e.push(o)})),e}(d,(r=n[t.clause.AGGREGATE],u=d,c={},i.each(u,(function(n,e){c[e]={};for(var i=0;i<r.length;i++){var a=r[i],u=a.op;if(u in t.aggregateOperators){var s=(a.args&&a.args[0]||{}).field||t.DEFAULT_FIELD,f=t.generateAlias(u,s),l=t.aggregateOperators[u]([s],n.events);c[e][f]=l}else o.error("Rules","Unknown aggregate operator "+u)}})),c)),o.debug("Results after AGGREGATE:",l)}n.hasOwnProperty(t.clause.HAVING)&&(o.debug("Evaluating HAVING clause:",n[t.clause.HAVING]),l=i.filter(l,(function(e){return v(e,n[t.clause.HAVING])})),o.debug("Results after HAVING:",l)),n.hasOwnProperty(t.clause.ORDER_BY)&&(o.debug("Evaluating ORDER_BY clause:",n[t.clause.ORDER_BY]),l=function(n,t){return i.isArray(n)?0===n.length?t:t.sort((function(t,e){for(var i=0;i<n.length;i++){var r=n[i],o="ASC"===(r.direction||"ASC")?1:-1,a=r.field,u=f(t,a,0),c=f(e,a,0);if(u<c)return-o;if(u>c)return o}return 0})):(a("Rules","groupBy rule must be an array"),t)}(n[t.clause.ORDER_BY],l),o.debug("Results after ORDER_BY:",l));var h,g=0;return n.hasOwnProperty(t.clause.OFFSET)&&(o.debug("Evaluating OFFSET clause:",n[t.clause.OFFSET]),g=Number(n[t.clause.OFFSET])),n.hasOwnProperty(t.clause.LIMIT)&&(o.debug("Evaluating LIMIT clause:",n[t.clause.LIMIT]),h=g+Number(n[t.clause.LIMIT])),(g>0||!i.isUndefined(h))&&(l=l.slice(g,h),o.debug("Results after OFFSET/LIMIT:",l)),n.hasOwnProperty(t.clause.SELECT)&&(o.debug("Evaluating SELECT clause:",n[t.clause.SELECT]),l=function(n,t){return i.map(t,(function(t){return i.map(n,(function(n){return v(t,n)}))}))}(n[t.clause.SELECT],l),o.debug("Results after SELECT:",l)),l};t.execute=function(n,e){n=t.rewrite(n),o.shouldLog(r.LogLevel.DEBUG)&&o.groupCollapsed("Evaluating Behavioral Rule"),o.debug("Rule:",n,s.stringify(n)),o.debug("Events:",e);var i=h(n);if(i.length>0)throw new Error("Rule "+s.stringify(n)+" has violations: "+i.join("\n"));var a=p(n,e);return o.debug("Rule result:",a),o.shouldLog(r.LogLevel.DEBUG)&&o.groupEnd(),a},t.isSatisfied=function(n,e){try{return t.execute(n,e).length>0}catch(i){return o.error("Rules","Error "+i.toString()+" while evaluating rule "+s.stringify(n)),!1}}},1648:function(n,t,e){n.exports=function(n){n.registerDependency("sources/browser_id",e(9245)),n.registerVisitorProfileProvider(e(490)),n.registerVisitorProfileProvider(e(5161)),n.registerAudienceMatcher("browser_version",e(2253))}},2253:function(n,t,e){var i=e(9488).y;n.exports={fieldsNeeded:["browserVersion","browserId"],match:function(n,t){var e=t.value,r=n.browserId,o=n.browserVersion;if(0===e.indexOf(r)){var a=e.substr(r.length);return 0===i(o,a)}return!1}}},490:function(n){n.exports={provides:"browserId",shouldTrack:!0,isSticky:!0,getter:["sources/browser_id",function(n){return n.getId()}]}},5161:function(n){n.exports={provides:"browserVersion",getter:["sources/browser_id",function(n){return n.getVersion()}]}},9245:function(n,t,e){var i=e(421);t.getId=function(){return i.get().browser.id},t.getVersion=function(){return i.get().browser.version}},6992:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(7181)),n.registerAudienceMatcher("campaign",e(5411))}},5411:function(n,t,e){var i=e(4360);n.exports={fieldsNeeded:["campaign"],match:function(n,t){return i.hasMatch(t.value,t.match,n.campaign)}}},7181:function(n,t,e){var i=e(9927);n.exports={provides:"campaign",shouldTrack:!0,isSticky:!0,getter:[function(){return i.getQueryParamValue("utm_campaign")}]}},5504:function(n,t,e){n.exports=function(n){n.registerAudienceMatcher("code",e(4283))}},4283:function(n,t,e){var i=e(2600),r=e(5131);t.fieldsNeeded=[],t.match=function(n,t){if(i.isUndefined(t.value))return!0;if("function"==typeof t.value)try{return Boolean(r.apply(t.value))}catch(e){return!1}else try{return Boolean(r.eval(t.value))}catch(o){return!1}return!1}},8126:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(5969));var t=e(3107);n.registerAudienceMatcher("custom_attribute",t),n.registerAudienceMatcher("custom_dimension",t)}},3107:function(n,t,e){var i=e(2600),r=e(4360);t.match=function(n,t){var e;return n.custom&&(e=n.custom[t.name]),i.isObject(e)&&(e=e.value),r.hasMatch(t.value,t.match,e)}},5969:function(n,t,e){var i=e(2600),r=e(311),o=e(8642),a=e(6321).get("stores/dimension_data");n.exports={provides:"custom",attributionType:r.AttributionTypes.LAST_TOUCH,restorer:function(n){return i.reduce(n,(function(n,t,e){var r=e,u=a.getByApiName(e),c=a.getById(e);return i.isObject(t)?(!t.id&&u&&(c=u,r=u.id,i.extend(t,{id:c.segmentId||c.id})),!t.name&&c&&c.apiName&&(t.name=c.apiName),t.id||c||o.warn("Unable to determine ID for custom attribute:",e,"; segmentation is disabled."),n[r]=t,n):(o.error('Unable to restore custom attribute "'+e+'" because value is not an object'),n)}),{})},shouldTrack:!0}},9032:function(n,t,e){n.exports=function(n){n.registerDependency("sources/device",e(7226)),n.registerVisitorProfileProvider(e(1553)),n.registerAudienceMatcher("device",e(7862))}},7862:function(n){n.exports={fieldsNeeded:["device"],match:function(n,t){return n.device===t.value}}},1553:function(n){n.exports={provides:"device",shouldTrack:!0,isSticky:!0,getter:["sources/device",function(n){return n.getDevice()}]}},7226:function(n,t,e){var i=e(421);t.getDevice=function(){var n=i.get().device;return"unknown"!==n.model?n.model:"tablet"===n.type?"tablet":n.isMobile?"mobile":"desktop"}},8524:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(753)),n.registerAudienceMatcher("device_type",e(3829))}},3829:function(n){n.exports={fieldsNeeded:["device_type"],match:function(n,t){return n.device_type===t.value}}},753:function(n,t,e){var i=e(421);n.exports={provides:"device_type",shouldTrack:!0,isSticky:!0,getter:[function(){var n=i.get().device;switch(n.type){case"mobile":return"phone";case"tablet":case"desktop_laptop":return n.type;default:return"other"}}]}},9875:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(3912)),n.registerAudienceMatcher("query",e(314))}},314:function(n,t,e){var i=e(2600),r=e(4360);t.fieldsNeeded=["queryParams"],t.match=function(n,t){var e=i.find(n.queryParams,(function(n){return n[0]===t.name}));return r.hasMatch(t.value,t.match,e?e[1]:null)}},3912:function(n,t,e){var i=e(9927);n.exports={provides:"queryParams",getter:[function(){return i.getQueryParams()}]}},2929:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(2061)),n.registerAudienceMatcher("referrer",e(4714))}},4714:function(n,t,e){var i=e(8261);t.fieldsNeeded=["referrer"],t.match=function(n,t){return null!==n.referrer&&i(n.referrer,t)}},2061:function(n,t,e){var i=e(3485),r=e(2448);n.exports={provides:"referrer",shouldTrack:!0,isSticky:!0,getter:[function(){var n=r.getReferrer()||i.getReferrer();return""===n&&(n=null),n}]}},3426:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(636)),n.registerAudienceMatcher("source_type",e(6379))}},6379:function(n,t,e){var i=e(4360);t.fieldsNeeded=["source_type"],t.match=function(n,t){return i.hasMatch(t.value,t.match,n.source_type)}},636:function(n,t,e){var i=e(9927),r=e(3485),o=e(2448),a=e(8799),u=["google\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","bing\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","yahoo\\.\\w{2,3}(\\.\\w{2,3})?/search","baidu\\.\\w{2,3}(\\.\\w{2,3})?/","https://(www)?\\.google\\..*?/?$","https://search\\.yahoo\\..*?/?$","https://(www)?\\.bing\\..*?/?$"];n.exports={provides:"source_type",shouldTrack:!0,isSticky:!1,getter:[function(){return function(n,t){var e,c=n(),s=function(){if(i.getQueryParamValue("utm_source")||i.getQueryParamValue("gclid")||i.getQueryParamValue("otm_source"))return"campaign";for(var n=o.getReferrer()||r.getReferrer(),t=0;t<u.length;t++){var e=u[t];if(n.match(e))return"search"}return n&&a.guessDomain(n)!==a.guessDomain(i.getUrl())?"referral":"direct"}();e=s,(!c||"direct"!==e)&&t(s)}}]}},3370:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(6067)),n.registerVisitorProfileProvider(e(1418)),n.registerAudienceMatcher("time_and_day",e(2795))}},2795:function(n,t,e){var i=e(5249);t.fieldsNeeded=["currentTimestamp"],t.match=function(n,t){return i.test(t.value,new Date(n.currentTimestamp))}},6067:function(n,t,e){var i=e(7052);n.exports={provides:"currentTimestamp",shouldTrack:!0,isLazy:!0,getter:[function(){return i.now()}]}},1418:function(n){n.exports={provides:"offset",shouldTrack:!0,isLazy:!0,getter:[function(){return(new Date).getTimezoneOffset()}]}},5249:function(n,t,e){var i=e(2600);function r(n){var t=n.split(":");if(2!==t.length)throw new Error("optly.timeAndDayInterval.timeStringToMinutes: Invalid time string "+n);return 60*parseInt(t[0],10)+parseInt(t[1],10)}t.test=function(n,t){var e=function(n){var t=n.split("_");if(3!==t.length)throw new Error("Invalid time and day string "+n);var e=t[2].split(",");return{start_time:t[0],end_time:t[1],days:e}}(n),o=r(e.start_time),a=r(e.end_time),u=60*t.getHours()+t.getMinutes(),c=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"][t.getDay()];return u>=o&&u<=a&&i.includes(e.days,c)}},4185:function(n,t,e){n.exports=function(n){n.registerVisitorProfileProvider(e(8784))}},8784:function(n){n.exports={provides:"visitorId",getter:["stores/visitor_id",function(n){return n.getRandomId()}]}},7498:function(n,t,e){var i=e(2600),r=e(6663),o=e(9269),a=e(7547),u=e(5202).U,c=e(4705),s=e(8642),f=e(4292),l=e(7434),d=e(5272),v=e(9737),h=e(6321),p=(e(3485),e(3677)),g=e(8197),m=e(3637),_=h.get("stores/global"),w=h.get("stores/tracker_optimizely"),y=t.Error=u("OptimizelyTrackerError"),b="client_activation",E="campaign_activated",I="view_activated",A={revenue:{validate:O,sanitize:Math.floor,excludeFeature:!0},quantity:{validate:O,sanitize:Math.floor,excludeFeature:!0},value:{validate:O,sanitize:i.identity}},T="AUTO",S=[function(){return function(n){P(function(n){return i.extend({entity_id:n.pageId,key:n.pageApiName,timestamp:n.timestamp,uuid:n.eventId,type:I},D(n.eventTags))}(n),n.userFeatures,K(n.layerStates))}}],k=[function(){return function(n){!function(n){var t=i.isNull(_.getAnonymizeIP())?void 0:_.getAnonymizeIP(),e={account_id:n.accountId,anonymize_ip:t,client_name:n.clientName,client_version:n.clientVersion,project_id:n.projectId,visitors:[]};e.revision=n.revision,e.enrich_decisions=!0;var r={session_id:L(n.sessionId),visitor_id:n.visitorId,attributes:[],snapshots:[]},o=K(n.layerStates);m.dispatch(a.REGISTER_TRACKER_VISITOR,{data:e,visitor:r,decisions:o}),Y()}(n),P(function(n){return{entity_id:null,type:b,uuid:n.eventId,timestamp:n.timestamp}}(n),n.userFeatures,K(n.layerStates))}}],R=[function(){return function(n){var t;P((t=n,i.extend({entity_id:t.eventEntityId,key:t.eventApiName,timestamp:t.timestamp,uuid:t.eventId,type:t.eventCategory},D(t.eventTags))),n.userFeatures,K(n.layerStates))}}],N=[function(){return function(n){var t;P((t=n,i.extend({entity_id:t.eventEntityId,key:t.eventApiName,timestamp:t.timestamp,uuid:t.eventId,type:t.eventCategory},D(t.eventTags))),n.userFeatures,K(n.layerStates))}}];function D(n){var t=function(n,t,e){try{C(t),n[e]=t}catch(i){r.emitError(new y("Bad value for eventTags["+e+"]: "+i.message))}return n},e=i.keys(A),o=i.omit(n,e),a=i.pick(n,e),u=i.reduce(o,t,{}),c=i.reduce(a,(function(n,e,i){var o=A[i];o.excludeFeature||t(u,e,i);try{o.validate(e),n[i]=o.sanitize(e),u[i]=n[i]}catch(a){r.emitError(new y("Bad value for eventMetrics["+i+"]: "+a.message))}return n}),{});return c.tags=u,c}function C(n){if(null==n)throw new Error("Feature value is null");if("object"==typeof n){var t;try{t=c.stringify(n)}catch(e){}throw new Error('Feature value is complex: "'+t)}}function O(n){if(null==n)throw new Error("Metric value is null");if(!i.isNumber(n))throw new Error("Metric value is not numeric")}function x(n){return i.reduce(n,(function(n,t){try{C(t.value),n.push({entity_id:t.id||null,key:t.name,type:t.type,value:t.value})}catch(e){s.warn("Error evaluating user feature",t,e)}return n}),[])}function P(n,t,e){m.dispatch(a.REGISTER_TRACKER_EVENT,{event:n,decisions:e}),M(t),Y()}function M(n){var t=x(n);m.dispatch(a.UPDATE_TRACKER_VISITOR_ATTRIBUTES,{attributes:t})}function L(n){return T}function V(){if(w.canSend()){var n=w.hasEventsToSend(),t=w.hasPreviousBatchesToSend();n||t?(t&&(i.each(w.getPreviousBatches(),F),m.dispatch(a.RESET_TRACKER_PREVIOUS_BATCHES)),n&&(m.dispatch(a.FINALIZE_BATCH_SNAPSHOT),F(w.getEventBatch()),m.dispatch(a.RESET_TRACKER_EVENTS))):s.debug("Not sending events because there are no events to send")}else s.debug("Not sending events (holding)")}function F(n){s.debug("Sending ticket:",n);var t=o.generate();v.retryableRequest({url:"https://logx.optimizely.com/v1/events",method:"POST",data:U(n)},t)}function U(n){return i.extend({},i.pick(n,["account_id","anonymize_ip","client_name","client_version","enrich_decisions","project_id","revision"]),{visitors:i.map(n.visitors,z)})}function z(n){return{visitor_id:n.visitor_id,session_id:T,attributes:i.map(n.attributes,j),snapshots:i.map(n.snapshots,G)}}function j(n){return H(n,{entity_id:"e",key:"k",type:"t",value:"v"})}function G(n){var t=n.events;return t=function(n){var t=i.reduce(n,(function(n,t){var e;if(n[e=t.type===I&&i.isEmpty(t.tags)&&i.isEmpty(i.pick(t,i.keys(A)))?t.type:t.uuid]){var r=n[e].timestamp;t.timestamp>r&&(r=t.timestamp),n[e]=i.extend({},n[e],{key:n[e].key+"-"+(t.key||""),entity_id:n[e].entity_id+"-"+t.entity_id,timestamp:r})}else n[e]=t;return n}),{});return i.values(t)}(t),{activationTimestamp:_.getActivationTimestamp(),decisions:i.map(n.decisions,B),events:i.map(t,q)}}function B(n){return H(n,{campaign_id:"c",experiment_id:"x",is_campaign_holdback:"h",variation_id:"v"})}function q(n){return n.key===E&&(n.type=E,delete n.key),H(n,{entity_id:"e",key:"k",quantity:"q",revenue:"$",tags:"a",timestamp:"t",uuid:"u",value:"v",type:"y"})}function H(n,t){return i.reduce(n,(function(n,e,i){return i in t&&(n[t[i]||i]=e),n}),{})}function Y(){if(w.shouldBatch()){if(!w.isPolling()){d.setTimeout((function n(){V(),w.isPolling()&&d.setTimeout(n,1e3)}),1e3),m.dispatch(a.SET_TRACKER_POLLING,!0),d.setTimeout((function(){m.dispatch(a.SET_TRACKER_BATCHING,!1),m.dispatch(a.SET_TRACKER_POLLING,!1)}),1e4)}}else V()}function K(n){return i.map(n,(function(n){return{campaign_id:n.layerId,experiment_id:n.decision.experimentId,variation_id:n.decision.variationId,is_campaign_holdback:n.decision.isLayerHoldback}}))}function $(){var n=w.getPersistableState();if(n)try{s.debug("Persisting pending batch:",n),l.persistTrackerOptimizelyData(n),m.dispatch(a.SET_TRACKER_DIRTY,!1)}catch(t){s.debug("Failed to persist pending batch:",t)}}var W={trackLayerDecision:function(n){n.timing===f.TrackLayerDecisionTimingFlags.postRedirectPolicy?function(n){var t=x(n.userFeatures),e={account_id:n.accountId,anonymize_ip:n.anonymizeIP,client_name:n.clientName,client_version:n.clientVersion,project_id:n.projectId,visitors:[{session_id:L(n.sessionId),visitor_id:n.visitorId,attributes:t,snapshots:[{decisions:[{campaign_id:n.layerId,experiment_id:n.experimentId,variation_id:n.variationId,is_campaign_holdback:n.isLayerHoldback}],events:[{uuid:n.decisionId,entity_id:n.layerId,timestamp:n.timestamp,type:E}]}]}]};m.dispatch(a.REGISTER_PREVIOUS_BATCH,e),Y()}(n):function(n){var t={entity_id:n.layerId,type:E,uuid:n.decisionId,timestamp:n.timestamp};m.dispatch(a.REGISTER_TRACKER_DECISION,{decisionEvent:t,decisions:K(n.layerStates)}),M(n.userFeatures),Y()}(n)},postRedirectPolicy:f.PostRedirectPolicies.TRACK_AFTER_SYNC,nonRedirectPolicy:f.NonRedirectPolicies.TRACK_IMMEDIATELY,onPageActivated:S,onClientActivation:k,onClickEvent:N,onCustomEvent:R};n.exports=function(n){n.registerAnalyticsTracker("optimizely",W),p.on({filter:{type:g.TYPES.ANALYTICS,name:"sendEvents"},handler:function(){m.dispatch(a.SET_TRACKER_SEND_EVENTS,!0),w.isPolling()||V()}}),p.on({filter:{type:g.TYPES.ANALYTICS,name:"holdEvents"},handler:function(){m.dispatch(a.SET_TRACKER_SEND_EVENTS,!1)}}),m.dispatch(a.SET_TRACKER_SEND_EVENTS,!0);var t=p.on({filter:{type:"lifecycle",name:"activated"},handler:function(){w.observe($),p.off(t)}})}},7559:function(n,t,e){n.exports=function(n){n.registerViewProvider(e(41)),n.registerViewMatcher("url",e(9918))}},9918:function(n,t,e){var i=e(8261);n.exports={fieldsNeeded:["url"],match:function(n,t){return i(n.url,t)}}},41:function(n,t,e){var i=e(9927);n.exports={provides:"url",getter:[function(){return i.getUrl()}]}},1022:function(n,t,e){var i=e(2600),r=e(6321),o=e(3677),a=e(8197),u=e(5272),c=r.get("stores/directive"),s="optimizelyPreview",f=function(n){u.getGlobal(s).push(n)};t.initialize=function(n){c.isSlave()&&function(n){var t=!1;if(i.isArray(window.optimizely)&&i.each(window.optimizely,(function(e){i.isArray(e)&&"verifyPreviewProject"===e[0]&&String(e[1])===n&&(t=!0)})),!t)throw new Error("Preview projectId: "+n+" does not match expected")}(n),o.on({filter:{type:a.TYPES.ANALYTICS,name:"trackEvent"},handler:f}),o.on({filter:{type:a.TYPES.LIFECYCLE,name:"viewActivated"},handler:f}),o.on({filter:{type:a.TYPES.LIFECYCLE,name:"layerDecided"},handler:f}),o.on({filter:{type:"error"},publicOnly:!0,handler:f})},t.setupPreviewGlobal=function(){u.getGlobal(s)||u.setGlobal(s,[])},t.pushToPreviewGlobal=function(n){f(n)}},312:function(n,t,e){var i=e(2600),r=e(9269),o=e(6941),a=e(811),u=e(7052),c=e(3485),s=e(3637),f=e(3819).mM,l=e(8642),d=e(7992),v=e(7929).Promise,h=e(7434),p=e(5272),g=e(9737),m=e(7547),_=e(311),w=e(6321),y=w.get("stores/async_request"),b=w.get("stores/client_metadata"),E=w.get("stores/global"),I=w.get("stores/rum"),A=w.get("stores/performance"),T=w.get("stores/xdomain"),S=w.get("stores/view_data"),k=e(7868),R="https://rum.optimizely.com/rum",N="1.0";function D(n){return i.isEmpty(n)?v.resolve():(t=function(){return g.request({url:R,method:"POST",data:n,withCredentials:!0}).then((function(n){return o.resolveRequest("RUM_FIRST_BEACON",n),n}))["catch"]((function(n){throw l.error("POST to client-rum failed:",n),o.rejectRequest("RUM_FIRST_BEACON",n),n}))},(e=y.getPromise("RUM_FIRST_BEACON"))?e.then(t):o.makeAsyncRequest("RUM_FIRST_BEACON",t));var t,e}function C(){try{return!c.querySelector("body")}catch(n){return null}}function O(){var n=p.getGlobal("performance"),t=n?n.timing:{},e=A.getMarks()||{},r=I.getApiData(),o=I.getDOMObservationData(),a=k.get("state").getActiveExperimentIds(),u=I.getFeaturesNeededData(),s=c.parseUri(I.getScriptSrc()),l=I.getRumData()||{},v=l.extras||{};i.assign(v,{apiCalls:r,DOMObservationData:o,paintTimings:P(),activeExperimentIds:a,numPages:S.getNumberOfPages(),snippet:{scheme:s.protocol.slice(0,-1),host:s.host,path:s.pathname},networkInfo:x(),experimental:E.getExperimental(),featuresNeeded:u,beacon:{cjsOnload:!0}});var g=p.getGlobal("Prototype");g&&!i.isUndefined(g.Version)&&(v.prototypeJS=g.Version);var m=!1;m=!0;var _=T.getFrames();_.length&&(v.xdFramesLoaded=_.length);var w={id:I.getRumId(),v:N,project:E.getSnippetId()||E.getProjectId(),navigationTimings:t,userTimings:e,xd:m,apis:i.keys(r),extras:v,sampleRate:l.sampleRate};(function(){var n=f.keys(),t=i.filter(i.map(n,(function(n){var t=h.getStorageKeyFromKey(n);return t?{key:n,isForeign:h.isForeignKey(n),category:t,size:n.length+f.getItem(n).length}:null}))),e=i.reduce(t,(function(n,t){var e=t.key,i=h.getIdFromKey(e);return i?((t.isForeign?n.foreign:n.local)[i]=!0,n):n}),{local:{},foreign:{}}),r=i.chain(t).filter({isForeign:!0}).reduce((function(n,t){return n[t.key.split("_")[0]]=!0,n}),{}).value(),o={local:0,foreign:0},a={local:{},foreign:{}};i.forEach(t,(function(n){var t=n.isForeign?"foreign":"local";o[t]+=n.size,a[t][n.category]||(a[t][n.category]=0),a[t][n.category]+=n.size}));var u={numKeys:f.allKeys().length,sizeKeys:f.allKeys().toString().length,sizeValues:f.allValues().toString().length,idCounts:{local:i.keys(e.local).length,foreign:i.keys(e.foreign).length},foreignOriginCount:i.keys(r).length,byteTotals:o,byteTotalsByCategory:a};return d.estimateStorage().then((function(n){return i.assign(u,{storageEstimate:n})}))})().then((function(n){D(i.assign(w,{lsMetrics:n}))}))}function x(){var n=p.getGlobal("navigator");if(n&&n.connection)return i.pick(n.connection,["downlink","rtt","effectiveType"])}function P(){var n=p.getGlobal("performance");if(n)try{var t=n.getEntriesByType("paint");if(i.isEmpty(t))return;return i.reduce(t,(function(n,t){return n[t.name]=Math.round(t.startTime),n}),{})}catch(e){return}}t.initialize=function(){var n,t=r.generate().replace(/-/g,"");n=Math.random()<.01;var e=function(){var n=c.getCurrentScript();if(n)return n.src}();s.dispatch(m.SET_RUM_DATA,{id:t,RumHost:R,inRumSample:n,src:e,data:{id:t,sync:C(),timebase:u.now(),sampleRate:.01,url:e,extras:{initialDOMState:c.getReadyState()}}})},t.queueBeacons=function(){return I.getSampleRum()?(function(){try{p.getGlobal("requestAnimationFrame")((function(){var n=I.getRumData().timebase;s.dispatch(m.SET_RUM_DATA,{data:{render:u.now()-(n||0)}})}))}catch(n){return}}(),c.isLoaded()?p.setTimeout(O,3e3):p.addEventListener("load",O),new v((function(n,t){p.setTimeout((function(){(function(){!function(){var n={id:I.getRumId(),v:N,account:E.getAccountId(),project:E.getSnippetId()||E.getProjectId(),snippet:E.getSnippetId(),revision:E.getRevision(),clientVersion:b.getClientVersion(),hasSlave:!1,wxhr:!0,extras:{}},t=h.getPersistedBehaviorEventCount(),e=a.getEventCount();n.numBehaviorEvents=e;var r=e-t;i.extend(n.extras,{behaviorEventCountDiff:r,behaviorEventCountDecreased:r<0}),i.assign(n,function(){var n=p.getGlobal("performance");if(!n)return;var t,e=I.getScriptSrc();try{if(e){l.debug("Using derived script src: ",e);var r=n.getEntriesByName(e);r.length>0&&(t=r[0])}if(!t){var o=/\/\/[^.]+\.optimizely\.(com|test)\/(js|api\/client)\/[\d]+\.js/gi;l.debug("Scanning resource timing entries with regex");var a=n.getEntriesByType("resource");t=i.find(a,(function(n){return o.test(n.name)}))}if(t)return i.mapValues(_.ResourceTimingAttributes,(function(n,e){var i=t[e];return"number"==typeof i?Math.round(1e3*(i||0))/1e3:"serverTiming"===e?i||[]:void 0}))}catch(u){return}}(),A.getDurationsFor(i.values(_.RUMPerformanceTimingAttributes))),s.dispatch(m.SET_RUM_DATA,{data:n})}();var n=I.getRumData(),t=A.getMarks()||{};return n.extras=n.extras||{},n.extras.beacon={cjsTimeout:!0},n.userTimings=t,D(n=i.pickBy(n,(function(n){return!i.isUndefined(n)})))})().then(n,t)}),3e3)}))["catch"]((function(n){l.warn("RUM / Error sending data:",n)}))):v.resolve()}},1152:function(){}},__webpack_module_cache__={};function __webpack_require__(n){var t=__webpack_module_cache__[n];if(t!==undefined)return t.exports;var e=__webpack_module_cache__[n]={id:n,loaded:!1,exports:{}};return __webpack_modules__[n].call(e.exports,e,e.exports,__webpack_require__),e.loaded=!0,e.exports}__webpack_require__.amdO={},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),__webpack_require__.nmd=function(n){return n.paths=[],n.children||(n.children=[]),n};var __webpack_exports__={};!function(){try{!function(){var n=function(n){var t=[__webpack_require__(4185)];t.push(__webpack_require__(7110)),t.push(__webpack_require__(6193)),t.push(__webpack_require__(1684)),t.push(__webpack_require__(5811)),t.push(__webpack_require__(1648)),t.push(__webpack_require__(6992)),t.push(__webpack_require__(5504)),t.push(__webpack_require__(8126)),t.push(__webpack_require__(9032)),t.push(__webpack_require__(8524)),t.push(__webpack_require__(9875)),t.push(__webpack_require__(2929)),t.push(__webpack_require__(3426)),t.push(__webpack_require__(3370)),t.push(__webpack_require__(7498)),t.push(__webpack_require__(7559)),t.push(__webpack_require__(2823)),t.push(__webpack_require__(3212)),t.push(__webpack_require__(8901)),t.push(__webpack_require__(8527)),t.push(__webpack_require__(6605)),f.initializePlugins(t)};window.performance&&window.performance.mark&&window.performance.mark("optimizely:blockBegin"),__webpack_require__(312).initialize();var t=__webpack_require__(4819);t.time("gtagReady");var e=__webpack_require__(8642),i=__webpack_require__(6321);__webpack_require__(8250);var r=i.get("stores/directive");if(!__webpack_require__(9737).isCORSSupported())throw new Error("CORS is not supported on this browser, aborting.");var o,a=__webpack_require__(6132),u=__webpack_require__(4659),c=__webpack_require__(7499),s={"layers": [{"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["23028870483"], "experiments": [{"weightDistributions": null, "audienceName": "Does not include merkleqa=true ", "name": "Does not include merkleqa=true ", "bucketingStrategy": null, "variations": [{"id": "23066651679", "actions": [{"viewId": "23028870483", "changes": [{"dependencies": [], "type": "custom_code", "id": "16FAA28D-4A93-4830-8199-0DB29B3D41B9", "value": function($){((window, document) => {
    "use strict";
    let $timerA = window.setInterval(function() {
        let MainList = window.dataLayer;
        let $ = window.$;
		let feeParagraph = document.querySelector("#addTvStreamForm >.box.content-box > .w-75.mb-5 > .text-center.mt-5.m-0 p.vm-body-book");
		let packs = document.querySelectorAll("#tvPacks .col-12 label.option-checkbox input[type=hidden]").length>6;
        if (typeof $ == "function" && MainList && feeParagraph && packs) {
            window.clearInterval($timerA);
            console.log("Test 2 Tv Stream Variant - Optimizely");
			$("body").addClass("stream-v1");

			var feeCopy = feeParagraph.textContent;
            
            var showMoreSelected = false;
            var pageView = window.dataLayer.filter(d => d.event === 'pageview')[0];
            var intent = pageView.page.intent;
			var journey = pageView.page.journey;
			var packOrder = ['BT Sport', 'Sky Cinema HD', 'Essential Entertainment', 'Sky Sports HD', 'Sky Sports & Cinema HD', 'Netflix', 'Disney+', 'Kids Pick', 'Starzplay', 'LIONSGATE+'];

            if(journey=='quickCheckout') $("#progress-bar").addClass("affiliate");
			
			//if (intent !== 'volt') {
				
				function font(family) {
					var fontName = '';
				    if(intent === 'volt') {
						fontName = '';
					} else {
						var fontName = '';
						switch(family) {
							case 'book':
								fontName = 'cro-circular-chat-book';
								break;
							case 'light':
								fontName = 'cro-circular-whisper-light';
								break;
							case 'medium':
								fontName = 'cro-circular-natter-medium';
								break;
							case 'bold':
								fontName = 'cro-circular-shout-bold';
								break;
							case 'black':
								fontName = 'cro-circular-yell-black';
								break;
							default:
								fontName = 'cro-circular-whisper-light';
								break;
						}
					}
					return fontName;
				}
	            
				$('#add-tv-stream .page-header h1').html('Add Stream from Virgin Media');
				$('#add-tv-stream .page-header h1').addClass(`${font('light')}`);
				$('#add-tv-stream .page-header h1').after(`<h2 class="vm-h2 fw-300">Stream is our new entertainment service. <br> Pay less to access TV and subscriptions all in one place.</h2>`);
						
				var contentBox = $('.box.content-box.mb-5');
				
				$(contentBox).children().each(function(i,el) {
					if(i === 0) { //promotion ribbon
						$(el).find('.vm-body-book').addClass('lh-23');
					} else if(i === 1) { // promotion banner
						$(el).addClass('cro-stream-banner');
					} else if(i === 2) { // promotion banner copy
						//$(el).addClass('d-none');
						$(el).removeClass('w-75').addClass('w-83');
						$(el).children().addClass('f-16').addClass('lh-20').addClass('banner-copy');
						$(el).children().html(`<p class="mb-0"><span class="${font('light')}">Get over 40 channels and your favourite apps at </span>
            			<span class="vm-body-book ${font('book')}">no extra cost each month. </span>
            			</p><p class="vm-body-book ${font('book')}">${feeCopy}</p><p class="mb-2 ${font('light')}">Just plug the Stream box into your telly, kick back and, well, stream on.</p>`);
					} else if (i === 3) { // banner tilees
						$(el).addClass('mt-5');
						$(el).removeClass('mx-auto');
						$(el).addClass("banner-tile");
						$(el).removeClass("mt-5");
						$(el).find('.d-flex.flex-column.col-lg-4').addClass('col-12').addClass('col-sm-6');
						$(el).find('.d-flex.flex-column.text-center').each(function(e, pl) {
							if (e === 0) {
								$(pl).find('span:eq(0)').html(`TV channels and apps`);
								$(pl).find('span:eq(1)').removeClass('m-auto').addClass('tile-body').html(`Get over 40 free channels and your favourite apps, from Catch up and On Demand TV to streaming apps and music.`);
							} else if (e === 1) {
								$(pl).find('span:eq(0)').html(`Flexible entertainment`);
								$(pl).find('span:eq(1)').removeClass('m-auto').addClass('tile-body').html(`Get all entertainment subscriptions like Netflix and Disney+ on a fuss-free rolling contract, so it\'s easy to swap them every month.`); 
							} else if (e === 2) {
								let prcnt = $(pl).find('span:eq(0)').text().trim().split(" ")[1];
								$(pl).find('span:eq(0)').html(`Get ${prcnt} Stream credit`);
								$(pl).find('span:eq(1)').removeClass('m-auto').addClass('tile-body').html(`Pay only for what you want, nothing more. Plus, get ${prcnt} credit back on entertainment subscriptions you add to Stream.`);
							}
						});
					} else if (i === 5) { // credit banner tile 
						$(el).html(`<div class="${font('light')} credit-header fw-300">Add your favourite subscriptions</div>`)
					} else if (i === 6 && $("#creditDiscount").length>0) { // stream 105 credit banner
						const percnt = $(el).find('p.h3').text().trim().split(" ")[0];
					    $(el).find('p.h3').text(`${percnt} monthly savings`).addClass(`${font('medium')}`).addClass('f-18').addClass('lh-23');
						$(el).find('p.mb-3.mx-auto').addClass('lh-20').html(`Get ${percnt} Stream credit back on every subscription you add to Stream.`);
						//$(el).find('p.vm-body-small').addClass('d-none');
					} else if ((i === 6 && $("#creditDiscount").length==0) || (i == 7 && $("#creditDiscount").length>0)) { //add entertainment subscriptions
						var tvPacks = $(el).find('#tvPacks');
						if (tvPacks.length === 0) {
							return;
						}
						
						var warningInfo = $('#collapse-container-payment-section #payment-section-dropdown').children().first();
						
						$(warningInfo).css("margin", "0");
						$(warningInfo).find('p.mt-3').removeClass('f-16').addClass('f-14').addClass('lh-18').addClass('pt-1');
						
						var orderedPacks = `<div id="orderedtvPacks" class="mt-3 pt-4 pack-wrapper"><div class="d-flex flex-wrap pack-wrapper">`;
						
						packOrder.forEach(function(ord, i) {
							$(tvPacks).children().children().each(function(k, ad) {
								if ($(ad).find('.card-title').text() === ord) {
									orderedPacks += '<div class="d-flex d-md-block col-6 col-md-3 p-2px">' + $(ad).html() + '</div>';
								}
							});
						});
						orderedPacks += '</div></div>';
						$(el).before($(warningInfo))
						$(el).before($(orderedPacks));

						var toggleHtml = `<div id="review-included-dropdown" class="d-flex collapse-trigger justify-content-start drop-header collapsed mt-12" data-toggle="collapse" data-target="#cro-payment-section-dropdown" aria-expanded="false" aria-controls="cro-payment-section-dropdown">
				              <div class="mb-3 mt-5 m-auto" style="line-height: 1.8em;">
				                <div class="${font('book')}" id="showMore" style="color: #5f2878;">
				                	<i class="drop-arrow fa fa-angle-down spacing-left-xs align-self-center animate-arrow-down"></i>
				                	<span class="hover-underline clickable">Show all</span>
				                </div>
				              </div>
				            </div>`;

						$(el).before(`<div id="cro-collapse-container-payment-section" class="mt-1 mb-4">` + toggleHtml + `</div>`);
						
						$(el).addClass('d-none');

						document.getElementById("review-included-dropdown").onclick = function() {showMoreFunc()};
						
						function showMoreFunc() {
							//console.log("showMore =", showMoreSelected)
							if (showMoreSelected) {
								$("#showMore").find('.hover-underline').html("Show all");
								setTimeout(function() {
									$("#showMore").find('.drop-arrow').removeClass("animate-arrow-up").addClass("animate-arrow-down");
								}, 100);
								$("#showMore").find('.drop-arrow').removeClass("fa-angle-up").addClass("fa-angle-down");
								showMoreSelected = false;
								$('#orderedtvPacks').children().children(":not(.streamV2_notification)").each(function(k, ad) {
									if (k > 3) {
										$(ad).removeClass('d-flex').removeClass('d-md-block').removeClass('d-show-animate').addClass('d-none-animate');
									}
								});
								$("#orderedtvPacks .mt-4.pt-4").hide();
							} else {
								$("#showMore").find('.hover-underline').html("Show less");
								setTimeout(function() {
									$("#showMore").find('.drop-arrow').removeClass("animate-arrow-down").addClass("animate-arrow-up");
								}, 100);
								
								$("#showMore").find('.drop-arrow').removeClass("fa-angle-down").addClass("fa-angle-up");
								showMoreSelected = true;
								$('#orderedtvPacks').children().children(":not(.streamV2_notification)").each(function(k, ad) {
									if (k > 3) {
										$(ad).addClass('d-flex').addClass('d-md-block').removeClass('d-none-animate').addClass('d-show-animate');
									}
								});
								$("#orderedtvPacks .mt-4.pt-4").show();
							}
							
						}

					} 
				});
				
				function revampCard(ad, k) {
					$(ad).find('.font-weight-bold').removeClass('font-weight-bold');
					$(ad).find('.card-text.d-inline-block.pb-3').removeClass('pb-3').addClass('pb-2');
					$(ad).find('.card-body').children().next().removeClass('mt-auto').removeClass('pt-4').addClass('pt-2');
					var monthlyPrice = $(ad).find('.vm-body-book').children().next().first().text();
					if (monthlyPrice !== "") {
						$(ad).find('.vm-body-book').addClass('pt-4').addClass('pb-3').addClass('lh-18');
						$(ad).find('.vm-body-book').children().next().first().text(monthlyPrice.replace(" a month", ""));
						$(ad).find('.vm-body-book').children().next().next().text(" a month*");
						$(ad).find('.vm-body-book').children().next().after('<br>');
					} else {
						$(ad).find('.vm-body-book').addClass('pt-4').addClass('pb-4').addClass('lh-18');
						monthlyPrice = $(ad).find('.vm-body-book').children().first().text();
						$(ad).find('.vm-body-book').children().first().text(monthlyPrice.replace(" a month", ""));
						$(ad).find('.vm-body-book').children().first().after('<p class="d-inline-block"> a month</p>');
						$(ad).find('.vm-body-book').children().first().removeClass('pb-3').addClass('pb-2').addClass('bigFont');
						$(ad).find('.vm-body-book').children().first().after('<br>')
					}
					//$(ad).find('.checkmark').attr("data-event-label", "Engaged with entertainment pack: " +packOrder[k]);
					
				}
				
				$('#orderedtvPacks').children().children().each(function(k, ad) {
					revampCard(ad, k);
					if (k > 3) {
						$(ad).removeClass('d-flex').removeClass('d-md-block').addClass('d-none-animate');
					}
				});

				$(".banner-tile").nextUntil("#2single1comboNotification").not("#creditDiscount").insertBefore('.banner-tile');

				$(".box.content-box.mb-5 > .mt-4.pt-4:nth-child(6)").insertBefore("#orderedtvPacks .pack-wrapper .col-6.col-md-3.p-2px:nth-child(5)").addClass("col-12");

			//}

			$(".stream-selection-card").click(function(e){
				e.stopImmediatePropagation();
				if (!e.target.classList.contains("checkmark") && !e.target.classList.contains("stream-modal-trigger"))	$(this).find(".checkmark")[0].click();
			})

			$("#orderedtvPacks .col-6 p.card-text > a.stream-modal-trigger").click(function(e){
				let modalID = $(this).attr("id").split("_")[1];
				//console.log(modalID)
				if(modalID!=="500103" && modalID!=="500101") $("#modal_"+modalID).show();
				else $("#streamingModal_"+modalID).show();
			})

			$(".modal button.close, .modal .modal-footer button").click(function(){
				$(this).closest(".modal").hide();
			})
			$(".banner-tile > .row > .d-flex:last-child > p.d-flex > span.tile-body").text("Pay only for what you want, nothing more. Plus, get 10% credit back on entertainment subscriptions you add to Stream.");
        }
    }, 500);
})(window, document);
}}, {"value": "<style>#progress-bar:not(.affiliate),\n/*.box.content-box.mb-5 > .mt-4.pt-4:nth-child(6),*/\n#orderedtvPacks .mt-4.pt-4{\n\tdisplay: none;\n\tmargin-bottom: 1.5rem!important;\n    padding-left: 0;\n    padding-right: 0;\n}\n#creditDiscount{\n\tmargin-top: 3rem!important;\n    margin-bottom: 6rem!important;\n}\n.d-none {\n\tdisplay: none !important;\n}\n\n.d-none-animate {\n  display: none;\n  transition: transform 1s linear;\n}\n\n.d-show-animate {\n  display: block;\n  transition: transform 1s linear;\n}\n\n.cro-circular-chat-book {\n  font-family: \"VM Circular Book\",sans-serif !important;\n}\n\n.cro-circular-whisper-light {\n  font-family: \"VM Circular Light\",sans-serif !important;\n}\n\n.cro-circular-natter-medium {\n  font-family: \"VM Circular Medium\",sans-serif !important;\n}\n\n.cro-circular-shout-bold {\n  font-family: \"VM Circular Bold\",sans-serif !important;\n}\n\n.cro-circular-yell-black {\n  font-family: \"VM Circular Black\",sans-serif !important;\n}\n\n.fw-300 {\n\tfont-weight: 300 !important;\n}\n\n.fw-500 {\n\tfont-weight: 500 !important;\n}\n\n.tile-body {\n\tpadding-top: 8px;\n\tline-height: 24px;\n}\n\n#add-tv-stream .page-header h1 {\n\tfont-size: 36px;\n\tline-height: 46px;\n}\n\n#add-tv-stream .page-header h2 {\n\tfont-size: 24px;\n\tline-height: 30px;\n}\n\n.banner-tile {\n\tdisplay: flow-root !important;\n\tpadding-left: 2rem;\n}\n\n.credit-header {\n\tfont-size: 28px;\n\tline-height: 36px;\n}\n\n.cro-stream-banner {\n\t/*content: url(https://www.virginmedia.com/content/dam/virginmedia/dotcom/images/ABtest/cro/desktop-tv-stream-banner.png) !important;*/\n}\n\n.d-flex.flex-column.text-center span.vm-body-book {\n\tline-height: 23px;\n}\n\n.f-18 {\n\tfont-size: 18px !important;\n}\n\n.lh-18 {\n\tline-height: 18px !important; \n}\n\n.lh-20 {\n\tline-height: 20px !important; \n}\n\n.lh-23 {\n\tline-height: 23px !important;\n}\n\n.p-1px {\n\tpadding: 1px !important;\n}\n\n.p-2px {\n\tpadding: 4px !important;\n}\n\n.w-83 {\n\twidth: 83% !important;\n}\n\n.mt-12 {\n\tmargin-top: 12px !important;\n}\n\n.f-14 {\n\tfont-size: 14px !important;\n}\n\n.lh-18 {\n\tline-height: 18px !important;\n}\n\n.banner-tile {\n\tmargin-top: 23px !important;\n}\n\n#orderedtvPacks .card, \n#cro-payment-section-dropdown .card {\n\tmargin: 1px !important;\n}\n\n.card-body {\n    padding-left: 4px !important;\n    padding-right: 4px !important;\n}\n\n#orderedtvPacks .card-title,\n#cro-payment-section-dropdown .card-title {\n\tfont-family: \"VM Circular Book\",sans-serif !important;\n\tfont-size: 16px;\n\tline-height: 20px;\n\tmargin-bottom: 0px;\n}\n\n#orderedtvPacks .card-text.pb-3.pt-4,\n#cro-payment-section-dropdown .card-text.pb-3.pt-4 {\n\tfont-family: \"VM Circular Book\",sans-serif !important;\n\tfont-size: 16px;\n\tline-height: 20px;\n\tmargin-bottom: 0px !important;\n    margin-top: 4px !important;\n}\n\n#orderedtvPacks .card-body,\n#cro-payment-section-dropdown .card-body {\n\tpadding: 0 4px !important;\n\tmargin-bottom: 16px;\n}\n\n#orderedtvPacks .card-body .vm-asterisk-red,\n#cro-payment-section-dropdown .card-body .vm-asterisk-red,\n.bigFont{\n\tline-height: 18px !important;\n    font-size: 28px !important;\n    font-weight: 600 !important;\n}\n\n#showMore {\n\tfont-size: 16px;\n\tline-height: 24px;\n}\n\n.option-checkbox {\n\tmargin: 16px !important;\n\tpadding-left: 16px !important;\n}\n\n@media screen and (min-width: 576px) and (max-width: 767px) {\n\t.ultimate-tile {\n\t\tmargin-top: 22px !important;\n\t}\n}\n\n@media screen and (max-width: 576px) {\n\t#add-tv-stream .page-header h1 {\n\t\tfont-size: 30px;\n\t\tline-height: 38px;\n\t}\n\t\n\t#add-tv-stream .page-header h2 {\n\t\tfont-size: 22px;\n\t\tline-height: 28px;\n\t\tpadding: 0 32px;\n\t}\n\t\n\t.product-promotion-ribbon .vm-body-book {\n\t\t\tfont-family: \"VM Circular Medium\",sans-serif !important;\n\t\t\tfont-size: 12.6px !important;\n\t\t\tline-height: 28px !important;\n\t}\n\t\n\t.banner-copy {\n\t\tfont-family: \"VM Circular Medium\",sans-serif !important;\n\t\t\tfont-size: 16px !important;\n\t\t\tline-height: 20px !important;\n\t}\n\t\n\t.d-flex.flex-column.text-center span.vm-body-book {\n\t\tline-height: 23px;\n\t}\n\t\n\t.d-flex.flex-column.text-center span.ultimate-tile {\n\t\tline-height: 24px;\n\t}\n\t\n\t.credit-header {\n\t\tfont-size: 24px;\n\t\tline-height: 30px;\n\t}\n\t\n\t.cro-stream-banner {\n\t\t/*content: url(https://www.virginmedia.com/content/dam/virginmedia/dotcom/images/ABtest/cro/mobile-tv-stream-banner.png) !important;*/\n\t}\n\n}\n\n@media screen and (min-width: 1440px) {\n\t.box {\n\t    padding-left: 120px;\n\t    padding-right: 120px;\n\t}\n}\n\n@media screen and (max-width: 575px) {\n\t.box .banner-tile{\n\t    padding-left: 32px !important;\n\t    padding-right: 32px !important;\n\t}\n}\n\n@media screen and (min-width: 576px) {\n\t.container {\n\t    padding-left: 32px !important;\n\t    padding-right: 32px !important;\n\t}\n\t\n\t.pack-wrapper {\n\t\tmargin-left: -40px !important;\n\t\tmargin-right: -40px !important;\n\t}\n}\n\n@media screen and (min-width: 768px) {\n\t.container {\n\t    width: 700px !important;\n\t    max-width: 700px !important;\n\t}\n}\n\n@media screen and (min-width: 992px) {\n\t.container {\n\t    width: 928px !important;\n\t    max-width: 928px !important;\n\t}\n}\n\n@media screen and (min-width: 1200px) {\n\t.container {\n\t    width: 1136px !important;\n\t    max-width: 1136px !important;\n\t}\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "41EFC9B5-9688-4EAA-BD04-94B57BEFF994"}]}], "name": "Variation #1"}], "audienceIds": ["and", "23143940444"], "changes": null, "id": "23066531507", "integrationSettings": null}], "id": "23089881445", "weightDistributions": null, "name": "[100%] CSCRO-877 Increase prominence of Stream subs", "groupId": null, "commitId": "23432980414", "decisionMetadata": {"experimentPriorities": [[{"entityId": "23066531507", "endOfRange": null}]], "offerConsistency": null}, "policy": "equal_priority", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["23104191401", "23128810004"], "experiments": [{"weightDistributions": null, "audienceName": "Compax product id is 9309 or 9310 or 9311 or 9312", "name": "Compax product id is 9309 or 9310 or 9311 or 9312", "bucketingStrategy": null, "variations": [{"id": "23205570112", "actions": [{"viewId": "23128810004", "changes": [{"dependencies": [], "type": "custom_code", "id": "77A75EB3-6F64-4480-B1E5-2617AA129E12", "value": function($){// Wrap code in an IIFE
   (function (window, document){
    // Invoking strict mode
    'use strict';

    // Run a timer here because of the dynamic JS rendering
    let $timerA = window.setInterval(function () {
        // Try to grab a test subject
        let breakdownSelector = ".basket-entry-description.payment-basket-entry",
        subject1 = document.querySelector(breakdownSelector),
            jquery = window.$,
            checkoutEvent = dataLayer.filter((i)=>{if(i.event!==undefined )return i.event == "checkout"}),
            product = checkoutEvent[0].ecommerce.checkout.products[0].dimension17,
            cards= {
                9309:{months_6:15,then:30},
                9310:{months_6:15,then:33},
                9311:{months_6:21,then:39},
                9312:{months_6:27,then:45}
            };
            

            const variant = function(){
                if(cards[product]!=undefined){
                    const firstAmount = $(breakdownSelector).text().split("£")[1].split(" ")[0];
                    const thenAmount = $(breakdownSelector).text().split("£")[2].split(" ")[0];
                    const breakdownCopy = `<div class='first6Months'><span>First 6 months </span><span>&pound;${firstAmount}<sup class='dagger ng-star-inserted'>†</sup></span></div><div class="thenCopy"><span>After that </span><span>&pound;${thenAmount}<sup class='dagger ng-star-inserted'>†</sup></span></div>`;
                    $(breakdownSelector).before(breakdownCopy);
                }
            }
            
        // Only proceed if subject is found in DOM
        if(subject1 && jquery) {
            window.clearInterval($timerA);          
            $('body').addClass('six-months-half-price');
            variant();
        }
       
    }, 500);
    setTimeout(function(){
        if($timerA !== null){
          clearInterval($timerA);
          if(typeof(error) === 'function'){
            error();
          }
        }
      }, 20000);
}(window, document));
}}, {"value": "<style>.first6Months,\n.thenCopy{\n    display: flex;\n    justify-content: space-between;\n    font-size: 16px;\n    font-family: 'VM Circular Light';\n}\n.first6Months span:first-child,\n.thenCopy span:first-child{\n    font-family: 'VM Circular Book';\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "FE309F10-777F-4E00-9D96-66CC1DC7E8DB"}]}, {"viewId": "23104191401", "changes": [{"dependencies": [], "type": "custom_code", "id": "A4C3954B-F419-4A60-9FF0-25BFD24A1518", "value": function($){// Wrap code in an IIFE
   (function (window, document){
    // Invoking strict mode
    'use strict';

    // Run a timer here because of the dynamic JS rendering
    let $timerA = window.setInterval(function () {
        // Try to grab a test subject
        let priceSelector = ".w-100 .text-center div > .vm-h1",
        priceContainer = ".w-100 .text-center div:nth-child(4)",
        breakdownCont = ".basket-entry-description.payment-basket-entry",
        subject1 = document.querySelector(priceSelector),
        subject2 = document.querySelector(breakdownCont),
            jquery = window.$,
            checkoutEvent = dataLayer.filter((i)=>{if(i.event!==undefined )return i.event == "checkout"}),
            product = checkoutEvent[0].ecommerce.checkout.products[0].dimension17,
            cards= {
                9309:{months_6:15,then:30},
                9310:{months_6:15,then:33},
                9311:{months_6:21,then:39},
                9312:{months_6:27,then:45}
            };
            

            const variant = function(){
                if(cards[product]!=undefined){
                const thenAmount = subject2 ? $(".row .review-submit-header").eq(3).text().substr(0,$(".row .review-submit-header").eq(3).text().length-1) : $(".col-5 h4").eq(1).text().substr(0,$(".col-5 h4").eq(1).text().length-1);
                    //const thenCopy = `<p class="thenCopy">Then <span>&pound${cards[product].then}</span> a month after that</p>`;
                    const thenCopy = `<p class="thenCopy">Then <span>${thenAmount}</span> a month<sup class='dagger ng-star-inserted'>†</sup> after that</p>`;

                    subject1.parentNode.childNodes[2].nodeValue = " for 6 months";
                    $(priceContainer).after(thenCopy)
                }
            }
            
        // Only proceed if subject is found in DOM
        if(subject1 && jquery) {
            window.clearInterval($timerA);          
            $('body').addClass('six-months-half-price');
            variant();
        }
       
    }, 500);
    setTimeout(function(){
        if($timerA !== null){
          clearInterval($timerA);
          if(typeof(error) === 'function'){
            error();
          }
        }
      }, 20000);
}(window, document));
}}, {"value": "<style>p.thenCopy{font-size: 16px;}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "8721F16D-1005-48B3-906C-71B4C88647B3"}]}], "name": "Variation #1"}], "audienceIds": ["and", "23224940028"], "changes": null, "id": "23213740092", "integrationSettings": null}], "id": "23184010255", "weightDistributions": null, "name": "[100%][no-track]CSCRO-1015 6MHP messaging (6 Feb - 2 April) Review and Review & Submit", "groupId": null, "commitId": "23763041497", "decisionMetadata": {"experimentPriorities": [[{"entityId": "23213740092", "endOfRange": null}]], "offerConsistency": null}, "policy": "equal_priority", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["23095650860"], "experiments": [{"weightDistributions": null, "audienceName": "Everyone else", "name": "Everyone", "bucketingStrategy": null, "variations": [{"id": "23184040261", "actions": [{"viewId": "23095650860", "changes": [{"dependencies": [], "type": "custom_code", "id": "DEE771DA-5CF9-4F43-814C-D487D11F0DF1", "value": function($){// Wrap code in an IIFE
   (function (window, document){
    // Invoking strict mode
    'use strict';

    // Run a timer here because of the dynamic JS rendering
    let $timerA = window.setInterval(function () {
        // Try to grab a test subject
        let tileSelector = ".product-row .product-container",
        subject1 = document.querySelector(tileSelector),
            jquery = window.$,
            cards= {
                9309:{months_6:15,then:30},
                9310:{months_6:15,then:33},
                9311:{months_6:21,then:39},
                9312:{months_6:27,then:45}
            };
            const thenCopy = `<div class="thenCopy">then <span>&pound</span> a month<sup class='dagger ng-star-inserted'>†</sup></div>`;
            const mutationObserver = function(){
                const targetNode = document.querySelector("body")
                    const config = { childList: true, subtree: true};
                    
                    const callback = function(mutationsList, observer) {
                        for(const mutation of mutationsList) {
                            //console.log(mutation.type)
                            if (mutation.type === 'childList') {
                                for(const node of mutation.addedNodes){
                                    if (!node.tagName) continue;
                                    if(node.classList.contains("product-container")){
                                        variant();
                                    }
                                    
                                }
                            }
                        }
                    };
                    const observer = new MutationObserver(callback);
                    observer.observe(targetNode, config);
            }

            const variant = function(){
                $(tileSelector).each((i,el)=>{   
                    let prodId = $(el).find(".product-card").eq(0).attr("data-product-id");
                    if(cards[prodId]!=undefined && $(el).find(".price-field .plan-price").length>0){
                        $(el).addClass("halfPriceCard");
                        $(el).find(".price-field .plan-price").html("&pound;"+cards[prodId].months_6);
                        //console.log(el.querySelector(".price-field"))
                        el.querySelector(".price-field .price-month-text").childNodes[0].innerHTML = "for<span class='desktopOnly'></span> <br />6 months<sup class='dagger ng-star-inserted'>†</sup>";
                        if($(el).find(".thenCopy").length==0) $(el).find(".price-field").append("<div class='thenCopy'>Then <span>&pound"+cards[prodId].then+"</span> a month<sup class='dagger ng-star-inserted'>†</sup></div>")
                        //el.querySelector(".plan-details > div:first-child .shiny-detail-list ul > li:first-child span").childNodes[2].textContent = " for 6 months";                        
                    }
                  })
            }
            
        // Only proceed if subject is found in DOM
        if(subject1 && jquery) {
            window.clearInterval($timerA);
          
            $('body').addClass('six-months-half-price');
            variant();
            mutationObserver();
        }
       
    }, 500);
    setTimeout(function(){
        if($timerA !== null){
          clearInterval($timerA);
          if(typeof(error) === 'function'){
            error();
          }
        }
      }, 20000);
}(window, document));
}}, {"value": "<style>.halfPriceCard .speed{border-right: 0!important;}\n.halfPriceCard br{display: none;}\n.halfPriceCard .desktopOnly{display: inline;}\n.halfPriceCard .mobileOnly{display: none;}\n\n.halfPriceCard .price-field .plan-price{font-size: 28px!important;}\n.halfPriceCard .price-field .price-month-text{ display: inline!important;  margin-left: 4px;}\n.halfPriceCard .thenCopy{font-family: 'VM Circular Light'; font-size: 14px;  line-height: 20px;}\n\n@media screen and (max-width:767px) {\n    .halfPriceCard br{display: inline;}\n    .halfPriceCard .desktopOnly{display: none;}\n    .halfPriceCard .mobileOnly{display: inline;}\n    .halfPriceCard .mobileOnly .blockDisplay{display: block;}\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "AB5E2D4A-FB0B-40A1-A05A-7D500C769F2B"}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "23203940127", "integrationSettings": null}], "id": "23194440086", "weightDistributions": null, "name": "[100%] [no-track] CSCRO-1015 6MHP messaging (6 Feb - 2 April) Join Products", "groupId": null, "commitId": "23755201439", "decisionMetadata": {"experimentPriorities": [[{"entityId": "23203940127", "endOfRange": null}]], "offerConsistency": null}, "policy": "equal_priority", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["23104191401"], "experiments": [{"weightDistributions": null, "audienceName": "Intent: volt", "name": "Intent: volt", "bucketingStrategy": null, "variations": [{"id": "23197640089", "actions": [{"viewId": "23104191401", "changes": [{"dependencies": [], "type": "custom_code", "id": "E21B8BE5-263C-4794-B63C-AA81C6AB389C", "value": function($){((e, t) => {
    "use strict";
    let n = e.setInterval(function () {
        if (e.$) {
            e.clearInterval(n), console.log("VCRO-22 Test 5 - In Optimizely!!!");
            const s = t.querySelector("#package-icons").parentElement;
            if (((s.className += " col-md-6 col-lg-4 basketContainer"), (s.parentElement.className += " d-flex justify-content-center"), (s.closest("div.section").className += " pt-0"), null !== s.closest("div.review-package-border"))) {
                const e = t.querySelector(".container.payment-info-container .d-flex.review-package-border-header"),
                    n = t.createElement("div");
                (n.className += " d-flex justify-content-center"), n.appendChild(e), (e.className += " col-md-6 col-lg-4");
                //, (s.className += " winter-sale-blue-border ");
                const o = t.querySelector(".container.payment-info-container .review-package-border");
                t.querySelector(".container.payment-info-container .review-package-border section:first-child"),
                    (o.style.cssText = " border: none"),
                    (t.querySelector(".container.payment-info-container .review-package-border :first-child").style.cssText = " padding-top: 0px "),
                    o.parentNode.insertBefore(n, o);
                const c = t.getElementById("collapse-container-review-section").parentElement.parentElement,
                    i = t.createElement("hr");
                c.after(i);
            }
            (t.getElementById("collapse-container-review-section").parentElement.previousElementSibling.style.cssText = "display: none"),
                (t.getElementById("collapse-container-review-section").parentElement.style.cssText = "padding-top: 0px");
            const o = t.querySelector("#package-icons"),
                c = o.getElementsByClassName("bundle-icon"),
                i = Array.from(c),
                l = t.querySelector("h1.vm-h1.pink-header-h1").innerHTML;
            t.querySelector("h1.vm-h1.pink-header-h1").style.display = "none";
            const a = t.querySelector(".vm-h5.vm-body.spacing-top-s"),
                r = a.innerHTML.match(/[0-9]*\+/),
                d = a.innerHTML.includes("Weekends"),
                checkoutEvent = dataLayer.filter((i)=>{if(i.event!==undefined )return i.event == "checkout"}),
                simCopy = checkoutEvent[0].ecommerce.checkout.products[0].dimension5;
            a.style.display = "none";
            let m = t.createElement("h1");
            (m.className = "vm-h1 pink-header-h1 headline"), (m.innerHTML = l), o.parentNode.insertBefore(m, o);
            const p = t.createElement("div");
            (p.className += "tvPhoneIconsBox d-flex justify-content-around mt-4 mb-4"), $("#package-icons").after(p);
            const v = t.querySelectorAll("img.spacing-bottom-s.pl-3.pr-3"),
                y = Array.from(v),
                g = null !== t.querySelector("#package-icons .product-icon.spacing-top-s"),
                f = (t.querySelector("#package-icons .product-icon.spacing-top-s").innerText, t.createElement("div"));
            if (((f.className += "channelParentDiv d-flex justify-content-around"), g)) {
                $(p).after(f), (t.querySelector("#package-icons .product-icon.spacing-top-s").style.cssText = "display: none"), y && y.length > 0 && (f.className += " mb-4");
                for (let e of y) {
                    const t = `<div class="channelBox"><img src="${e.src}"></div>`;
                    $(".channelParentDiv.d-flex.justify-content-around").append(t);
                }
            }
            const u = t.getElementById("review-section-dropdown"),
                b = u.querySelector(".row.justify-content-center.vm-body.text-left #broadband-review-selection ul li:nth-child(2)").innerHTML,
                h = $(b).find("span.vm-body-bold.vm-body-book").html();
            let x = "",
                w = "";
            const S = '<p class=\'offerStrip\'><span class="lightningIcon mr-1"><img alt="lightning Icon" src="https://www.virginmedia.com/content/dam/virginmedia/dotcom/images/ABtest/cro/flash-icon.svg"></span> Includes volt upgrade!</p>';
            $(".product-icon.component-icon").html("").addClass("col-md-10 col-lg-10"),
                $(".product-icon.component-icon").append(S),
                "Ultimate Volt bundle" != l
                    ? ((w = (x = u.querySelector(".row.justify-content-center.vm-body.text-left #sim-review-selection ul li").innerHTML).substring(11, x.length - 4)), (x = x.substring(0, x.length - 10)))
                    : (x = (x = u.querySelector(".row.justify-content-center.vm-body.text-left #sim-review-selection h3.mt-auto.mb-auto").innerHTML).substring(0, x.length - 8));
            let E = null !== $(b).find("s");
            E && (E = $(b).find("s").html());
            for (let e of i) {
                if (e.alt.includes("sim")) {
                    const t = ` <div class="boxIcons"> <div class="imgBox mb-4"><img src="${e.src}"></div> <p class="d-flex flex-column vm-h5 vm-body mb-0 simIcons" style='font-size: 14px'>${x} </p> <p class="mb-0 vm-h5 vm-body" style='font-weight: 500;font-size:18px'>${w}</p> <p class="vm-h5 vm-body" style="font-weight: 300">data</p> </div> `;
                    $(".product-icon.component-icon").append(t);
                }
                if (e.alt.includes("speedometer")) {
                    let t = "";
                    (t = E
                        ? ` <div class="boxIcons"> <div class="imgBox mb-4"><img src="${e.src}"></div> <p class="simData mb-0 vm-h5 vm-body" style='font-size: 14px'><s>${E}</s> </p> <p class="mb-0 vm-h5 vm-body" style='font-weight: 500;font-size:18px'>${h} </p>  <p class="vm-h5 vm-body" style="font-weight: 300">speed</p> </div> `
                        : ` <div class="boxIcons"> <div class="imgBox mb-4"><img src="${e.src}"></div> <p class="mb-0 vm-h5 vm-body" style='font-weight: 600'>${h} </p>  <p class="vm-h5 vm-body">speed</p> </div> `),
                        $(".product-icon.component-icon").append(t);
                }
                if (e.alt.includes("tv-plus")) {
                    const t = ` <div class="boxIcons"> <div class="imgBox mb-2 desk-padd"><img src="${e.src}"></div>  <p class="vm-h5 vm-body spacing-top-xs" style="font-size:18px;font-weight:300"><span style="font-weight:bold">${r}</span> Channels</p> </div> `;
                    $(".tvPhoneIconsBox").append(t);
                }
                if (e.alt.includes("phone")) {
                    const t = d ? "Talk Weekends" : "Talk More Anytime",
                        n = ` <div class="boxIcons"> <div class="imgBox mb-2"><img src="${e.src}"></div>  <p class="vm-h5 vm-body spacing-top-xs" style="font-weight:300">${simCopy}</p> </div> `;
                    $(".tvPhoneIconsBox").append(n);
                }
            }
            const k = t.querySelector(".container.payment-info-container p.spacing-top-xxs.small.spacing-bottom-xxs"),
                T = k.nextElementSibling;
            (T.style.cssText = "margin-bottom:2px;"), (T.firstElementChild.style.cssText = "color: #070cac;font-family: Roboto Regular,sans-serif;");
            const q = T.nextElementSibling.style.cssText;
            (T.nextElementSibling.style.cssText = `${q} font-size:14px`), k.remove(), (t.querySelector("#review-selection-form-top").parentElement.style.cssText = "margin-top:24px !important");
        }
    }, 500);
})(window, document);
}}, {"value": "<style>.boxIcons p:last-child{text-transform:capitalize;}\n#package-icons {\n  display: flex;\n  justify-content: center;\n}\n.product-icon.component-icon {\n  display: flex;\n  position: relative;\n  border: 1px solid transparent;\n  background-clip: padding-box;\n  border-radius: 10px;\n  justify-content: space-around;\n  padding: 32px 0 12px;\n  background: linear-gradient(#fff, #fff) padding-box,\n    linear-gradient(to right, #ed0000, #0019a5) border-box;\n  border-radius: 4px;\n}\n#package-icons p.offerStrip {\n  position: absolute;\n  padding: 8px 12px 7px;\n  border-radius: 4px;\n  background-image: linear-gradient(to right, #ed0000, #1900b3),\n    linear-gradient(to bottom, #5f2878, #5f2878);\n  color: white;\n  top: -18px;\n  text-transform: uppercase;\n  font-size: 14px;\n  font-weight: 500;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  font-family: \"AeonikPro Medium\", sans-serif;\n}\n\n@media (max-width: 280px) {\n  #package-icons p.offerStrip {\n    font-size: 10px;\n  }\n}\n\n.payment-info-container .review-package-border {\n  padding: 0px !important;\n}\n.boxIcons {\n  display: flex;\n  flex-direction: column;\n}\n.boxIcons .imgBox {\n  width: auto;\n  height: 36px;\n}\n.boxIcons .imgBox img {\n  height: 100% !important;\n}\n\n@media only screen and (min-width: 768px) {\n  .desk-padd {\n    padding-right: 17px;\n  }\n}\n\n.simData {\n  display: flex;\n  flex-direction: column;\n  font-weight: 600;\n  line-height: 18px;\n}\n.simData s {\n  font-weight: 300;\n}\n.text-center.col-lg-4.basketContainer {\n  border: 1px solid #dbdbdb;\n  border-radius: 4px;\n  padding: 30px 20px 43px;\n}\n.black-border .text-center.col-lg-4.basketContainer{\n  border: 2px solid #000;\n  border-top: 0;\n  border-radius: 0 0 4px 4px;\n}\n.text-center.col-lg-4.basketContainer.winter-sale-blue-border {\n  border: 2px solid #2b7cb6;\n}\n.product-icon.component-icon p.offerStrip span.lightningIcon img {\n  width: 11px !important;\n  height: 16px !important;\n}\n.channelBox {\n  width: 100px;\n  flex: 0 0 30%;\n  margin: 0 14px 5px;\n  height: 16px;\n}\n.channelBox img {\n  width: 100%;\n  height: 100%;\n}\n.simIcons {\n  font-weight: 600 !important;\n}\n.simIcons s {\n  font-weight: 300;\n}\n.tvPhoneIconsBox .boxIcons {\n  margin: 0 15.5px;\n}\n.tvPhoneIconsBox {\n  margin-left: 17px;\n}\n.channelParentDiv {\n  margin-left: 22px;\n}\n\n/*\n@media(max-width:1024px) {\n    .tvPhoneIconsBox {\n        margin-left: 11px;\n   }\n    .tvPhoneIconsBox .boxIcons{\n        margin: 0 7.5px;\n   }\n}\n\n@media(max-width:768px) {\n    .tvPhoneIconsBox {\n        margin-left: 16px;\n   }\n    .tvPhoneIconsBox .boxIcons{\n        margin: 0 9.5px;\n   }\n}\n@media(max-width:576px) {\n    .tvPhoneIconsBox {\n        margin-left: 13px;\n   }\n    .tvPhoneIconsBox .boxIcons{\n        margin: 0 27px;\n   }\n}\n@media(max-width:375px) {\n    .tvPhoneIconsBox {\n        margin-left: 13px;\n   }\n    .tvPhoneIconsBox .boxIcons{\n        margin: 0 14.5px;\n   }\n}\n*/\n  \n  .payment-info-container .review-package-border-header{\n    height: 48px;\n    text-align: center;\n  }\n\n@media (min-width: 768px) {\n  .vm-h1.pink-header-h1.headline {\n    font-size: 36px !important;\n  }\n}\nspan.vm-h1.pink-h1 {\n  font-size: 36px;\n  font-family: \"AeonikPro Light\", sans-serif !important;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "1E065505-DF74-4D61-BDF1-C7CF4F649A64"}]}], "name": "Variation #1"}], "audienceIds": ["and", "23196510092"], "changes": null, "id": "23228970127", "integrationSettings": null}], "id": "23194900074", "weightDistributions": null, "name": "[100%][no-track] VCRO-22 - Test 5 (basket-page-benefits)", "groupId": null, "commitId": "23422990521", "decisionMetadata": {"experimentPriorities": [[{"entityId": "23228970127", "endOfRange": null}]], "offerConsistency": null}, "policy": "equal_priority", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["23088561088"], "experiments": [{"weightDistributions": null, "audienceName": "Everyone else", "name": "Everyone", "bucketingStrategy": null, "variations": [{"id": "23230470230", "actions": [{"viewId": "23088561088", "changes": [{"dependencies": [], "type": "custom_code", "id": "A2E825A0-ABA3-48D1-B56B-D0065F1414ED", "value": function($){(function (window, document){
    'use strict';
    let $timerA = window.setInterval(function () {
        let subject = document.querySelector("#installation-selection"),
            subjectSocial = document.querySelector(".vm-body-social"),
            subjectFlag = document.querySelector(".installation-ribbon-text"),
            checkoutEvent = dataLayer.filter((i)=>{if(i.event!==undefined )return i.event == "checkout"}),
            productCategory = checkoutEvent[0].ecommerce.checkout.products[0].category,
            isSolus = productCategory.indexOf("solus")>-1,
            $ = window.$;

        if(subject && subjectSocial && subjectFlag && typeof $ == "function"){
            window.clearInterval($timerA);
						console.log("in 947 from Optimizely");
            $("img[src*='VM-home']").parents(".selection-card-wrapper").addClass("self-install-home-delivery-option");
            $(".self-install-home-delivery-option .installation-ribbon-text").text("Free, easy and fast");
            $(".vm-body-social + .vm-body").addClass("spacing-top-xs");
            if(isSolus) $(".vm-body-social + .vm-body").insertBefore($(".vm-body-social"));
            else $(".vm-body-social + .vm-body").hide();
        }
    }, 200);
}(window, document));
}}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "23241640213", "integrationSettings": null}], "id": "23202920574", "weightDistributions": null, "name": "[100%] [no-track] CSCRO-947 -  Installation UI fixes", "groupId": null, "commitId": "23375091058", "decisionMetadata": {"experimentPriorities": [[{"entityId": "23241640213", "endOfRange": null}]], "offerConsistency": null}, "policy": "equal_priority", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["23211530146"], "experiments": [{"weightDistributions": null, "audienceName": "Everyone else", "name": "Everyone", "bucketingStrategy": null, "variations": [{"id": "23194300061", "actions": [{"viewId": "23211530146", "changes": [{"dependencies": [], "type": "custom_code", "id": "04918F63-2121-423D-A13F-C84B686DB9A0", "value": function($){(function (window, document){
    'use strict';

    let $timerA = window.setInterval(function () {
        let subject = document.querySelector("#speed-selection-container"),
            $ = window.$;

        if(subject && typeof $ == "function") {
            window.clearInterval($timerA);
            $("body").addClass("remove-speeds");
            console.log("in 1034 from Optimizely");

            const prods = ['9309', '9310', '9311', '9312'];

            const selectedProdId = sessionStorage.getItem("gtm_compaxid");

            if(selectedProdId && prods.includes(selectedProdId)){
                $(".selection-card-wrapper .speed-selection-icon-wrapper img[src='static/img/speedometer-50.svg'], .selection-card-wrapper .speed-selection-icon-wrapper img[src='static/img/speedometer-1000.svg']").parents(".selection-card-wrapper").addClass("d-none");
            }            
        }
    }, 500)
}(window, document));
}}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "23198400225", "integrationSettings": null}], "id": "23206160193", "weightDistributions": null, "name": "[100%] [no-track] CSCRO-1034 Hide M50 and Gig1 options from 24m customisation", "groupId": null, "commitId": "23388440604", "decisionMetadata": {"experimentPriorities": [[{"entityId": "23198400225", "endOfRange": null}]], "offerConsistency": null}, "policy": "equal_priority", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["23099380694"], "experiments": [{"weightDistributions": null, "audienceName": "Everyone else", "name": "Everyone", "bucketingStrategy": null, "variations": [{"id": "23192720375", "actions": [{"viewId": "23099380694", "changes": [{"dependencies": [], "type": "custom_code", "id": "238541C1-8DA7-41D4-8292-B29D13527EF5", "value": function($){(function (window, document){
    'use strict';

    let $timerA = window.setInterval(function () {
        let subject = document.querySelector(".raf-positioning"),
            $ = window.$;

        if(subject && typeof $ == "function") {
            window.clearInterval($timerA);
            $("body").addClass("app-banner");
						console.log("in 889 from Optimizely");
            function fireGA(labelEvent){
				window.dataLayer = window.dataLayer || [];
				window.dataLayer.push({
					"event": "siteInteraction",
					"eventCategory": "a/b testing",
					"eventAction": "cscro-889",
					"eventLabel": labelEvent,
					"eventValue": 1,
				});
			}

            const pageBrand = google_tag_manager['GTM-MV8MMQV'].dataLayer.get('page.brand');

            let fontClass = pageBrand === "pink" ? "volt-style" : "vm-style";
            
            const appBannerHtml = `<div class="app-banner-wrapper">
            <div class="section-content">
                <img class='section-content-phone' src="https://www.virginmedia.com/content/dam/virginmedia/dotcom/images/ABtest/cro/phone.png" />
                <div class='section-content-inner ${fontClass}'>
                    <h1>Win a voucher worth up to £250*</h1>
                    <p>Join the VM App Lab and enter the raffle for a voucher worth up to <bold>£250*</bold> – for beta testers only.</p>
                    <a href='https://earlybird.virginmedia.com/?utm_source=VM_Sales_Journey_Raffle&utm_medium=vm_sales_journey_raffle&utm_campaign=vm_sales_journey_raffle'><span>Sign up</span></a>
                    <span class='tandc'>*Terms & Conditions apply</span>
                </div>
            </div>
        </div>`;

            $(".raf-positioning + div").after(appBannerHtml);

            $(".section-content-inner a").on("click", () => fireGA("clicked on sign up cta"));

        }
    }, 500)
}(window, document));
}}, {"value": "<style>.app-banner .app-banner-wrapper{\n    margin: 40px auto;\n}\n\n.app-banner .section-content{\n    background-image: url(\"https://www.virginmedia.com/content/dam/virginmedia/dotcom/images/ABtest/cro/mobile-bg.png\");\n    background-repeat: no-repeat;\n    background-size: cover;\n    width: 240px;\n    height: 425px;\n    position: relative;\n}\n\n.app-banner .section-content .section-content-phone{\n    position: absolute;\n    left: 50%;\n    bottom: 0;\n    transform: translateX(-50%);\n    height: 155px;\n}\n\n.app-banner .section-content-inner{\n    color: white;\n    padding: 20px;\n    text-align: center;\n}\n.app-banner .section-content-inner.vm-style h1{\n    font-family: 'VM Circular Bold';\n}\n.app-banner .section-content-inner h1{\n    margin-top: 0;\n    margin-bottom: 10px;\n    font-size: 28px;\n    font-weight: bold;\n}\n\n.app-banner .section-content-inner p{\n    font-size: 14px;\n    line-height: 20px;\n}\n.app-banner .section-content-inner.vm-style p bold{\n    font-family: 'VM Circular Bold';\n}\n\n.app-banner .section-content-inner a{\n    border: 1.25px solid transparent;\n    cursor: pointer;\n    border-radius: 62.5px;\n    text-align: center;\n    color: #fff;\n    padding-left: 15px;\n    padding-right: 15px;\n    display: inline-block;\n    text-decoration: none;\n    box-sizing: border-box;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    width: 100%;\n    line-height: 27.5px;\n    font-size: 16px;\n    height: 40px;\n    background-color: #322332;\n    margin-top: 10px;\n    text-decoration: none;\n    color: white;\n    font-size: 16px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.app-banner .section-content-inner.volt-style a span, .app-banner .section-content-inner.volt-style p bold{\n    font-family: 'Roboto';\n    font-weight: bold;\n}\n.app-banner .section-content-inner.vm-style a span{\n    font-family: 'VM Circular Book';\n}\n\n.app-banner .tandc{\n\tposition: unset;\n\tfont-size: 10px;\n\tcolor: white;\n}\n\n@media only screen and (min-width: 768px){\n    .app-banner .section-content{\n        background-image: url(\"https://www.virginmedia.com/content/dam/virginmedia/dotcom/images/ABtest/cro/tablet-bg.png\");\n        background-repeat: no-repeat;\n        background-size: cover;\n        width: 690px; \n        height: 285px;\n        position: relative;\n    }\n\n    .app-banner .section-content .section-content-phone{\n        position: absolute;\n        right: 8%;\n        bottom: 0;\n        left: auto;\n        height: 90%;\n        transform: none;\n    }\n    .app-banner .section-content-inner{\n        max-width: 57%;\n        text-align: left;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        height: 100%;\n    }\n    .app-banner .section-content-inner h1{\n        text-align: left;\n        font-size: 36px;\n        max-width: 90%;\n    }\n    .app-banner .section-content-inner p{\n        font-size: 16px;\n        line-height: 27px;\n        max-width: 82%;\n    }\n    .app-banner .section-content-inner a{\n        height: 48px;\n        max-width: 288px;\n    }\n    .app-banner .tandc{\n\t\tposition: absolute;\n\t\tright: 32px;\n\t    bottom: 16px;\n\t    font-size: 14px;\n\t}\n}\n@media only screen and (min-width: 992px) {\n    .app-banner .section-content{\n        background-image: url(\"https://www.virginmedia.com/content/dam/virginmedia/dotcom/images/ABtest/cro/desk-bg.png\");\n        width: 900px;\n    }\n    .app-banner .section-content-inner{\n        max-width: 74%;\n    }\n    .app-banner .section-content .section-content-phone{\n        right: 8%;\n        height: 90%;\n    }\n    .app-banner .section-content-inner h1{\n        font-size: 40px;\n        max-width: 60%;\n    }\n    .app-banner .section-content-inner p{\n        font-size: 20px;\n        line-height: 27px;\n        max-width: 82%;\n    }\n    .app-banner .section-content-inner{\n        padding: 32px\n    }\n    .app-banner .tandc{\n\t\tright: 41%;\n\t}\n}\n\n@media only screen and (min-width: 1200px){\n    .app-banner .section-content{\n        width: 1110px;\n    }\n    .app-banner .section-content-inner h1{\n        font-size: 42px;\n        max-width: 65%;\n    }\n    .app-banner .section-content .section-content-phone{\n        right: 258px;\n    } \n    .app-banner .section-content-inner{\n        max-width: 59%;\n        padding: 28px;\n    }\n    .app-banner .tandc{\n\t\tright: 32px;\n\t    bottom: 16px;\n\t}\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "6F75E118-8B43-412B-BF13-C2A4B8E0E9AE"}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "23255670004", "integrationSettings": null}], "id": "23213410905", "weightDistributions": null, "name": "[100%] CSCRO-889 App banner on Order confirmation page", "groupId": null, "commitId": "23419480697", "decisionMetadata": {"experimentPriorities": [[{"entityId": "23255670004", "endOfRange": null}]], "offerConsistency": null}, "policy": "equal_priority", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["23211530146"], "experiments": [{"weightDistributions": null, "audienceName": "Everyone else", "name": "Everyone", "bucketingStrategy": null, "variations": [{"id": "23196270473", "actions": [{"viewId": "23211530146", "changes": [{"dependencies": [], "type": "custom_code", "id": "58EAE069-F573-454F-8D54-4461BE0F451C", "value": function($){(function (window, document){
        // Invoking strict mode
        'use strict';
        // Run a timer here because of the dynamic JS rendering
        let $timerA = window.setInterval(function () {
            // Try to grab a test subject
            let subject = document.querySelector("#speedSelectionContinue");
            // Only proceed if subject is found in DOM
            if(subject){
                window.clearInterval($timerA);
                //Add in new site banner
                $('body').addClass('hidden-actioned-cta');
              console.log("in 327 from Optimizely");

				function hiddenActionedCta (selector) {
					$('body').on('click', selector, function() {
						$(this).parent().after('<hr class="cta-hr">');
						$(this).closest('.content-box').addClass('no-cta-container')
						$(this).parent().removeClass('d-flex').hide();
					});
				}
				
				hiddenActionedCta ('#speedSelectionContinue');
				hiddenActionedCta ('#continue-sim-option');
				hiddenActionedCta ('#sky-pick-continue');
				hiddenActionedCta ('#netflix-button');
				hiddenActionedCta ('#continue-tv-option');
            }
        }, 1000);
    }(window, document));
}}, {"value": "<style>.cta-hr {\n  margin-top : 50px;\n}\n\n.hidden-actioned-cta .no-cta-container {\n  margin-bottom : 0px !important;\n}\n\n#adult-packs-board-container .mb-0 {\n  display : none;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "9CFD359C-5FD5-4D37-8316-0135C010E5F4"}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "23180560643", "integrationSettings": null}], "id": "23213600643", "weightDistributions": null, "name": "[100%][no-track] CSCRO-327 Remove continue & next step of already complete steps - Customise", "groupId": null, "commitId": "23423210659", "decisionMetadata": {"experimentPriorities": [[{"entityId": "23180560643", "endOfRange": null}]], "offerConsistency": null}, "policy": "equal_priority", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["23452140081"], "experiments": [{"weightDistributions": [{"entityId": "23340721708", "endOfRange": 5000}, {"entityId": "23357191839", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "[A/B] CSCRO-993 Volt page re-design", "bucketingStrategy": null, "variations": [{"id": "23340721708", "actions": [{"viewId": "23452140081", "changes": []}], "name": "Original"}, {"id": "23357191839", "actions": [{"viewId": "23452140081", "changes": [{"dependencies": [], "type": "custom_code", "id": "F9B96285-8EFD-4EF9-8CF7-9BB344384A0C", "value": function($){(function (window, document){
  'use strict';
  let $timerA = window.setInterval(function () {
      let subjectBody = document.querySelector("body");

      if(subjectBody) {
          window.clearInterval($timerA);
          let link= document.createElement("link");
          link.rel = "stylesheet";
          link.href =  "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css";
          document.head.appendChild(link);
      
          let myScript = document.createElement("script");
          myScript.setAttribute("src", "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js");
          document.body.appendChild(myScript);
      }
    }, 50);
}(window, document)); 
(function (window, document){
    'use strict';
    let $timerB = window.setInterval(function () {
        let subject = document.querySelector("vm-hero-tall"),
            angularLoaded = window.getAllAngularRootElements,
            $ = window.$;
	
        if(subject && $ && angularLoaded && typeof Swiper === "function") {
            window.clearInterval($timerB);
            $("body").addClass("volt-redesign");
            
            if(window.location.href.indexOf("/virgin-media-o2") > -1){
              $("body").addClass("volt-redesign-vm-o2");
            }

            const perks = {
                content0: ["Broadband speed boost", "WiFi guarantee",  "Lightening fast speeds", "Double data", "£150 off an additional O2 Custom Plan", "O2 Travel Inclusive Zone", "Join Priority", "Amazing extras"],
                content1: ["Broadband speed boost", "WiFi guarantee",  "Lightening fast speeds", "Double data", "£150 off an additional O2 Custom Plan", "O2 Travel Inclusive Zone"],
                content2: ["Broadband speed boost", "WiFi guarantee", "Double data", "£150 off an additional O2 Custom Plan", "O2 Travel Inclusive Zone", "Amazing extras"],
            }

            const voltBenefitsTiles = [
              {
                title: "Supercharged broadband speeds",
                text: "Speed boost to the next level of fibre broadband (if you don’t already have the fastest available in your area).",
                imageUrl: "https://www.virginmedia.com/content/dam/virginmedia/dotcom/images/ABtest/cro/volt-benefit-one.jpg"
              },
              {
                title: "Supercharged data",
                text: "Double data on every eligible O2 Pay Monthly plan in your household.",
                imageUrl: "https://www.virginmedia.com/content/dam/virginmedia/dotcom/images/ABtest/cro/volt-benefit-three.jpg"
              },
              {
                title: "Supercharged connectivity",
                text: "WiFi guarantee - enjoy download speeds of at least 20Mbps in every room or get £100 bill credit. Get up to 3 WiFi pods if needed.",
                imageUrl: "https://www.virginmedia.com/content/dam/virginmedia/dotcom/images/ABtest/cro/volt-benefit-two.jpg"
              },
              {
                title: "Tech treats",
                text: "Take out a phone on a new O2 Custom Plan and get up to £150 off an additional O2 Custom Plan for a connected tablet, laptop or smartwatch.",
                imageUrl: "https://www.virginmedia.com/content/dam/virginmedia/dotcom/images/ABtest/cro/volt-benefit-four.jpg"
              },
              {
                title: "75 Travel Inclusive Zones",
                text: "Use your O2 phone or sim in 75 destinations at no extra cost, with O2 Travel Inclusive Zone.",
                imageUrl: "https://www.virginmedia.com/content/dam/virginmedia/dotcom/images/ABtest/cro/volt-benefit-five.jpg"
              }
            ]

            const vmOro2BenefitsTiles = [
              {
                title: "Lightning-fast speeds",
                text: "Virgin Media’s fastest widely available broadband speeds are 9x faster than BT and Sky’s. Which means everyone at home gets more power to do more online, all at the same time.",
                imageUrl: "https://prod.ctassets.virginmedia.com/uploads/VMO_2_Benefits_1_837883d8c6.png"
              },
              {
                title: "Priority",
                text: "Exclusive perks and experiences, as a reward for being with us. Things like getting tickets to the cinema, on us. Or getting closer to the hottest music artists. Or just picking up daily treats while you’re out and about. And we change it up for you every month, based on the things you like (with a few surprises thrown in too). Registration required.",
                imageUrl: "https://prod.ctassets.virginmedia.com/uploads/VMO_2_Benefits_2_3db7d95880.png"
              },
              {
                title: "Amazing Extras",
                text: "Grab selected O2 phone, tablet and sim only Pay Monthly contracts, and you'll get to hand pick an Extra for up to 6 months, on us. Whether you’re into TV and movies, music, books, or audiobooks, or you want to keep in touch with loved ones overseas using O2's International Bolt On, there’ll be an Extra for you.",
                imageUrl: "https://prod.ctassets.virginmedia.com/uploads/VMO_2_Benefits_3_191777cdd3.png"
              }
            ]

            const whiteCheck = `<span class='choice-chip-tick'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.56565 11.7315L15.7656 2.53148C16.078 2.21904 16.078 1.71251 15.7656 1.40011L14.6343 0.26873C14.3219 -0.0436781 13.8153 -0.0436781 13.5029 0.26873L5.99998 7.77167L2.49703 4.26872C2.18462 3.95628 1.67806 3.95628 1.36565 4.26872L0.234306 5.4001C-0.0781019 5.71253 -0.0781019 6.21906 0.234306 6.53147L5.43431 11.7315C5.74668 12.0439 6.25321 12.0439 6.56565 11.7315Z" fill="white"/>
            </svg></span>`;

            (function (window, document){
              'use strict';
              let $timerC = window.setInterval(function () {
                let subjectChips = document.querySelector("vm-custom-chips .vm-chips");
                
                if(subjectChips) {
                    window.clearInterval($timerC);
                    console.log("chips are here")
                    $("vm-choice-chips .chips-wrapper .vm-chip").each((i, el) => $(el).attr("id", `chip${i}`));
                    $("vm-chip vm-product-card-section > .vm-container").removeClass("vm-container")
        
                    $("vm-choice-chips").before(`<div class='new-choice-chips-wrapper'>
                        <div class='choice-chips-container'>
                            <div corr-chip='chip0' class='choice-chip selected'> ${whiteCheck} New to VM & O2 </div>
                            <div corr-chip='chip1'class='choice-chip'> New to O2 </div>
                            <div corr-chip='chip2' class='choice-chip'> New to VM </div>
                            <div corr-chip='chip3' class='choice-chip'> Existing VM & O2 Customer </div>
                        </div>
                    </div>`);
        
                    $(".new-choice-chips-wrapper").before("<h3 class='title'> What type of customer are you?</h3>")
                   
                    const addPerk = (text) => `<span class='perk'><span>${text}</span></span>`;
        
                    $("#content0, #content1, #content2").each((i, el) => {
                        const elId = $(el).attr("id");
                        $(el).find(".heading").replaceWith(`<div class='perks-wrapper'>
                            <div class='perks-container ${window.innerWidth < 768 ? 'perks-reduced' : ''}'>
                                <span class='your-perks'>Your perks: </span>
                                ${perks[elId].map((perk) => addPerk(perk)).join("")}
                                <span class='see-more-perks'>See more perks</span>
                            </div>
                        </div>
                        <h3>Here are the Volt bundles you can get...</h3>`)
                    })
        
                    $(".new-choice-chips-wrapper .choice-chips-container .choice-chip").on("click", (e) => {
                        const corrChip = $(e.target).attr("corr-chip");
                        const chipText = $(e.target).text();
                        $(`#${corrChip} .tile-chip-link`)[0].click();
                        $(".new-choice-chips-wrapper .choice-chips-container .choice-chip").removeClass("selected");
                        $(e.target).addClass('selected');
                        $(e.target).prepend($(".choice-chip-tick"));
                        // fireGA(`clicked on ${chipText} chip`)
                   })
        
                   const scrollToBenefits = () => {
                    document.getElementById("volt-benefits-swiper").scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
                   }
        
                  $(".perks-container .see-more-perks").on("click", (e) => scrollToBenefits());
        
                  if(window.innerWidth > 768){
                    $(".perks-container .perk").on("click", (e) => scrollToBenefits());
                  }
                } 
              }, 500);
            }(window, document));

          const createTile = (data) => {
            return `<div class='swiper-slide'>
              <div class='benefit-tile'>
                <div class='benefit-tile-top' style='background-image:url("${data.imageUrl}")'></div>
                <div class='benefit-tile-bottom'>
                  <h3>${data.title}</h3>
                  <p>${data.text}</p>
                </div>
              </div>
            </div>`
          }

          $("vm-custom-chips").after(`<div class='vm-container'><div class="swiper-container" id="volt-benefits-swiper">
            <div class='benefits-tiles-wrapper vm-container swiper-wrapper'>
              ${voltBenefitsTiles.map((tileData) => createTile(tileData)).join("")}
            </div>
            <div class='swiper-nav-wrapper'>
            <div class="swiper-button-prev"></div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-next"></div>
            </div>
          </div></div>`);

          const swiperSettings = (swiperId) => {
            return { 
              slidesPerView: 1.2,
              centeredSlides: false,
              spaceBetween: 8,
              pagination: {
                  el: (`${swiperId} .swiper-pagination`),
                  clickable: true,
              },
              lazyLoading: true,
              loop: false,
              keyboard: {
                  enabled: true,
              },
              navigation: {
                  nextEl: `${swiperId}  .swiper-button-next`,
                  prevEl: `${swiperId}  .swiper-button-prev`
              },
              breakpoints: {
                  550: {
                    slidesPerView: 2.2
                  },
                  768: {
                      slidesPerView: 2.5
                  },
                  960: {
                      slidesPerView: 3.2,
                  }
              }
            }
          }

          new Swiper("#volt-benefits-swiper", swiperSettings("#volt-benefits-swiper"));

          $("#volt-benefits-swiper").after(`<div class="swiper-container" id="vmo2-benefits-swiper">
            <div class='benefits-tiles-wrapper vm-container swiper-wrapper'>
              ${vmOro2BenefitsTiles.map((tileData) => createTile(tileData)).join("")}
            </div>
            <div class='swiper-nav-wrapper'>
            <div class="swiper-button-prev"></div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-next"></div>
            </div>
          </div>`)

          new Swiper("#vmo2-benefits-swiper", swiperSettings("#vmo2-benefits-swiper"));
          $("#volt-benefits-swiper").before(`<div class='vm-container volt-benefits-section'><h3>Enjoy exclusive benefits with Volt</h3></div>`);

          $("#vmo2-benefits-swiper").before(`<div class='vm-container vmo2-benefits-section'><h3>Benefits of being with Virgin Media or O2</h3></div>`);
           
      } 
    }, 500);
}(window, document));
}}, {"value": "<style>.volt-redesign vm-telesales-wrapper, \n.volt-redesign vm-custom-chips vm-custom-text-with-button h2,\n.volt-redesign vm-custom-chips vm-custom-text-with-button h2 + p,\n.volt-redesign vm-choice-chips .chips-wrapper,\n.volt-redesign vm-custom-media + vm-custom-divider,\n.volt-redesign vm-custom-media,\n.volt-redesign vm-custom-media + vm-custom-divider + vm-custom-text-with-button,\n.volt-redesign vm-custom-media + vm-custom-divider + vm-custom-text-with-button + vm-custom-content-blocks,\n.volt-redesign vm-custom-chips + vm-custom-divider + vm-custom-text,\n.volt-redesign vm-custom-hero-banner + vm-custom-text-with-button,\n.volt-redesign vm-custom-hero-banner + vm-custom-text-with-button + vm-custom-content-blocks,\n.volt-redesign vm-custom-hero-banner + vm-custom-text-with-button + vm-custom-content-blocks + vm-custom-divider\n{\n    display: none !important;\n}\n\n/* CHOICE CHIPS */\n.volt-redesign .vm-chips h3.title{\n    text-align: center;\n}\n.volt-redesign  .choice-chips-container {\n\tdisplay: flex;\n\tmargin-bottom: -6.4rem;\n    padding-bottom: 6.4rem;\n    -webkit-overflow-scrolling: touch;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-wrap: nowrap;\n    -ms-flex-wrap: nowrap;\n    flex-wrap: nowrap;\n    overflow-x: auto;\n    overflow-y: hidden;\n}\n.volt-redesign  .choice-chips-container .choice-chip{\n    padding: 8px 24px;\n    border: 1px solid #DBDBDB;\n    border-radius: 5px;\n    font-family: var(--text-h3-font-family);\n    font-size: 16px;\n    margin-left: 4px;\n    margin-right: 4px;\n    cursor: pointer;\n    flex-shrink: 0;\n}\n\n.volt-redesign  .choice-chips-container .choice-chip.selected{\n\tborder: 2px solid var(--option-border-highlight);\n\tbackground-color: var(--option-border-highlight);\n\tcolor: white;\n}\n\n.volt-redesign .choice-chips-container .choice-chip.selected .choice-chip-tick{\n\tmargin-right: 5px;\n}\n\n.volt-redesign .new-choice-chips-wrapper{\n\tpadding-bottom: 0.8rem;\n\tpadding-top: 16px;\n    overflow: hidden;\n}\n\n/* PERKS */\n.volt-redesign .perks-wrapper{\n    background-image: linear-gradient(to left,var(--product-card-border-gradient-color-b) 25%,var(--product-card-border-gradient-color-c) 35%,var(--product-card-border-gradient-color-a) 62%),linear-gradient(to bottom,var(--product-card-border-gradient-color-b),var(--product-card-border-gradient-color-b));\n    padding: 2px;\n    margin-top: 30px;\n    margin-bottom: 24px;\n    border-radius: 20px;\n    margin-left: auto;\n    margin-right: auto;\n    max-width: 856px;\n}\n.volt-redesign .perks-container{\n    background-color: white;\n    border-radius: 20px;\n    padding: 8px 20px;\n    text-align: center;\n}\n.volt-redesign .perks-container .perk{\n    margin-right: 10px;\n}\n.volt-redesign .perks-container .perk:before{\n    content: \"\\f0e7\";\n    font-family: \"Font Awesome 5 Pro\";\n    font-weight: 900;\n    color: #ed0000;\n    margin-right: 0.5rem;\n}\n\n.volt-redesign .perks-container .your-perks{\n    font-family: var(--text-bold-font-family);\n    margin-right: 8px;\n}\n\n.volt-redesign .perks-container.perks-reduced .perk:nth-child(n+5) {\n    display: none;\n}\n\n.volt-redesign .perks-container .see-more-perks{\n    display: block;\n    text-decoration: underline;\n    color: var(--action-tertiary);\n    font-family: var(--text-h3-font-family);\n}\n\n.volt-redesign .perks-wrapper + h3{\n    text-align: center;\n    margin-bottom: 1rem;\n    font-size: 24px;\n}\n\n/* BENEFITS TILES */\n\n.volt-redesign .swiper-slide{\n    height: auto;\n}\n\n.volt-redesign .benefits-tiles-wrapper .benefit-tile{\n    border: 1px solid #DBDBDB;\n    border-radius: 4px;\n    height: 100%;\n}\n\n.volt-redesign .benefits-tiles-wrapper .benefit-tile .benefit-tile-top{\n    height: 200px;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    border-radius: 4px 4px 0 0;\n}\n\n.volt-redesign .benefits-tiles-wrapper .benefit-tile .benefit-tile-bottom{\n    padding: 24px;\n}\n\n.volt-redesign .benefits-tiles-wrapper .benefit-tile .benefit-tile-bottom h3{\n    margin-bottom: 8px;\n}\n\n.volt-redesign .benefits-tiles-wrapper .benefit-tile .benefit-tile-bottom p{\n    font-family: var(--text-h2-font-family);\n}\n\n.volt-redesign .volt-benefits-section h3, .volt-redesign .vmo2-benefits-section h3{\n    font-size: 1.75rem;\n    text-align: center;\n    max-width: 277px;\n    margin: 16px auto;\n}\n\n/* SWIPER */\n\n.volt-redesign .swiper-container{\n    position: relative;\n    padding-bottom: 2rem;\n    padding-top: 24px;\n    overflow: hidden;\n}\n\n.volt-redesign .benefits-tiles-wrapper.vm-container{\n    padding-right: 0px;\n    padding-left: 0px;\n}\n\n.volt-redesign .swiper-pagination{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n    gap: 8px;\n}\n\n.volt-redesign .swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active{\n    background: #ed0000;\n}\n\n.volt-redesign .swiper-pagination .swiper-pagination-bullet{\n    cursor: pointer;\n    width: 38px;\n    height: 4px;\n    border-radius: 2px;\n    background-color: #dbdbdb;\n    opacity:1;\n}\n\n.volt-redesign .swiper-nav-wrapper{\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    height: 50px;\n    margin-left: 26px;\n}\n\n.volt-redesign .swiper-button-next, .volt-redesign .swiper-button-prev, .volt-redesign .swiper-pagination{\n    position: unset;\n}\n\n.volt-redesign .swiper-button-next:after, .volt-redesign .swiper-button-prev:after{\n    font-size: 16px !important;\n    color: #979797;\n}\n\n.volt-redesign .swiper-button-next{\n    right: 20px;\n}\n\n.volt-redesign .swiper-button-prev{\n    left: 20px;\n}\n\n.volt-redesign .swiper-button-next, .volt-redesign .swiper-button-prev{\n    margin-top: 0;\n    height: unset;\n}\n\n.volt-redesign .swiper-pagination{\n    width: auto !important;\n}\n\n@media only screen and (min-width: 768px) {\n    .volt-redesign .perks-container.perks-reduced .perk:nth-child(n+5) {\n        display: inline;\n    }\n    .volt-redesign .perks-wrapper{\n        margin-bottom: 32px;\n    }\n    .volt-redesign .perks-container .see-more-perks{\n        display: none;\n    }\n    .volt-redesign h3.title{\n        font-size: 36px;\n    }\n    \n    .volt-redesign .volt-benefits-section h3, .volt-redesign .vmo2-benefits-section h3{\n        max-width: unset;\n    }\n    .volt-redesign .choice-chips-container{\n        justify-content: center;\n    }\n\n    .volt-redesign .new-choice-chips-wrapper{\n        padding-bottom: 24px;\n    }\n    .volt-redesign .perks-container .perk{\n        margin-right: 12px;\n        cursor: pointer;\n    }\n    .volt-redesign .perks-container .perk span{\n        text-decoration: underline;\n\n    }\n\n    .volt-redesign .perks-container, .volt-redesign .perks-wrapper{\n        border-radius: 60px;\n    }\n    .volt-redesign .perks-container{\n        padding: 8px 24px;\n    }\n    .volt-redesign .perks-wrapper + h3{\n        margin-bottom: 32px;\n    }\n\n    .volt-redesign #vmo2-benefits-swiper .benefits-tiles-wrapper{\n        justify-content: center;\n    }\n\n    .volt-redesign .swiper-container{\n        padding-top: 34px;\n    }\n    \n    .volt-redesign .swiper-container#volt-benefits-swiper .benefits-tiles-wrapper{\n        padding-bottom: 24px;\n    }\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "CB3638FA-5FD2-4070-B3EE-40A963A45DE1"}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "23369521707", "integrationSettings": null}], "id": "23347881639", "weightDistributions": null, "name": "[A/B] CSCRO-993 Volt page re-design", "groupId": null, "commitId": "23659730220", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["23104191401"], "experiments": [{"weightDistributions": null, "audienceName": "Journey: restore-basket,Restore promo basket has not been removed,Promo query parameter exists but does not contain aff", "name": "Journey: restore-basket and (Restore promo basket has not been removed) and (Promo query parameter exists but does not contain aff)", "bucketingStrategy": null, "variations": [{"id": "23332810552", "actions": [{"viewId": "23104191401", "changes": [{"dependencies": [], "type": "custom_code", "id": "FE633645-C4E6-4F8D-B661-A2CD9AD5B9E8", "value": function($){// Wrap code in an IIFE
   (function (window, document){
    // Invoking strict mode
    'use strict';

    // Run a timer here because of the dynamic JS rendering
    let $timerA = window.setInterval(function () {
        // Try to grab a test subject
        let subject = document.querySelector("#manual-promotion-code-input"),
            subject2 = document.querySelector("#remove-manual-promo-code-cta"),
            $ = window.$;
            const notification = `<div class="preApplyNotification"><p class="welcomeBack vm-body">Welcome back</p><p class="notificationCopy vm-body"><span class="copyMobile">Your &pound;50 bill credit has been applied.<br />Check out now to claim it!</span><span class="copyDesktop">Your &pound;50 bill credit has been automatically applied. Check out now to claim it!</span></p></div>`;

        const getUrlVars = function () {
              var vars = {};
              var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,    
              function(m,key,value) {
                vars[key] = value;
              });
              return vars;
            }
   
        // Only proceed if subject is found in DOM
        if(subject && !subject2 && typeof $ == "function") {
            window.clearInterval($timerA);
            //console.log("in 1")
            $('body').addClass('pre-apply-promo-code');
            const promoCode = getUrlVars()["promo"];
            
            $(subject).val(promoCode);
            $("#add-promotion-code-cta")[0].click();

            $(".tele-sales-number-container").parent().parent().hide();
            
        }
        else if(!subject && subject2 && typeof $ == "function"){
          window.clearInterval($timerA);
          $('body').addClass('pre-apply-promo-code');
          //console.log("in 2")
          //Hide original notification
          $(".tele-sales-number-container").parent().parent().hide();
          if($(".card-body").length>0){
            let promoAlert = $(".card-body").filter((i,e)=>{
              return $(e).text()==="Success! Your promotion code has been applied"
            })
            $(promoAlert).closest(".spacing-bottom-m.spacing-top-m").hide();

            subject2.addEventListener("click",()=>{sessionStorage.setItem("applyPromoCodeRemoved","1")})
          }
         
          if($(".promotion-info").length>0 && $(".promotion-info .vm-body").eq(0).text()=='Bill credit' && $(".preApplyNotification").length==0) $(".page-header").before(notification);
        }
       
    }, 500);
    setTimeout(function(){
        if($timerA !== null){
          clearInterval($timerA);
          if(typeof(error) === 'function'){
            error();
          }
        }
      }, 60000);
}(window, document));
}}, {"value": "<style>.tele-sales-number-container{display: none;}\n.preApplyNotification{\n    position: relative;\n    margin: 40px auto 20px auto;\n    border: 1px solid #5f2878;\n    border-radius: 4px;\n    padding: 24px 16px 16px 16px;\n    text-align: center;\n}\n\n.preApplyNotification > p {\n    margin-bottom: 0;\n    font-size: 16px;\n}\n.preApplyNotification > p > span{display: none;}\n\n.preApplyNotification .welcomeBack{\n    position: absolute;\n    top : -20px;\n    left: 50%;\n    transform: translateX(-50%);\n    background-color: #5f2878;\n    border-radius: 4px;\n    color: #ffffff;\n    text-align: center;\n    padding: 6px 24px;\n}\n\n.preApplyNotification > p > span.copyDesktop{display: none;}\n.preApplyNotification > p > span.copyMobile{display: inline;}\n\n@media (min-width:48rem){\n    .preApplyNotification > p > span.copyDesktop{display: inline;}\n    .preApplyNotification > p > span.copyMobile{display: none;}\n}\n\n@media (max-width: 352px){\n    .preApplyNotification .welcomeBack{\n        padding: 6px 15px;\n    }\n    \n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "9EA87840-B2B6-4382-B9A6-F9309B7B98A7"}]}], "name": "Variation #1"}], "audienceIds": ["and", "23086391156", "23379510316", "23363800279"], "changes": null, "id": "23322860223", "integrationSettings": null}], "id": "23359120215", "weightDistributions": null, "name": "[100%]CSCRO-1066 Auto-apply promo code", "groupId": null, "commitId": "23543310025", "decisionMetadata": {"experimentPriorities": [[{"entityId": "23322860223", "endOfRange": null}]], "offerConsistency": null}, "policy": "equal_priority", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["23094220077", "23398600387", "23472861093"], "experiments": [{"weightDistributions": null, "audienceName": "Everyone else", "name": "Everyone", "bucketingStrategy": null, "variations": [{"id": "23338830531", "actions": [{"viewId": "23398600387", "changes": [{"dependencies": [], "type": "custom_code", "id": "2B1D40CA-B853-40D9-9BDA-3982036542BF", "value": function($){(function (window, document){
        // Invoking strict mode
        'use strict';
        // Run a timer here because of the dynamic JS rendering
        let $timerA = window.setInterval(function () {
            // Try to grab a test subject
            let subject = document.querySelector(".telephone-info-link");

            if(subject) {
                window.clearInterval($timerA);

                document.body.classList.add('homepage1-consent');


                function addConsent() {
                    let consent = document.createElement("div");
                    consent.classList.add('phone-consent');
                    consent.innerHTML += ('By entering your number, you consent to us calling or texting you abut this search. We won\'t use it for anything else. <a href="https://www.virginmedia.com/legal/privacy-policy" target="_blank">Privacy Policy</a>.');
                    let button = document.getElementById('check-availability');
                    let parent = button.parentNode;
                    parent.insertBefore(consent, button);
                }


                const
                    mutationObserver = () => {
                        const targetNode = document.querySelector(".postcode-container");
                        const config = { childList: true, subtree: true};

                        const callback = function(mutationsList, observer) {
                            for(const mutation of mutationsList) {
                                if (mutation.type === 'childList') {
                                    for(const node of mutation.addedNodes){
                                        if (!node.tagName) continue;
                                        if (node.classList.contains("postcode-checker__address-container")) {
                                            setTimeout(function() {
                                                if (!document.querySelector(".phone-consent")) {
                                                    addConsent();
                                                }
                                            }, 0);
                                        }

                                    }
                                }
                            }
                        };
                        const observer = new MutationObserver(callback);
                        observer.observe(targetNode, config);
                    }

                addConsent();
                mutationObserver();

            }
        }, 100);
    }(window, document));
}}, {"value": "<style>.homepage1-consent .telephone-info-link {\n        display: none!important;\n    }\n    .homepage1-consent .phone-consent {\n        margin: 10px auto 24px;\n        font-size: 14px;\n        max-width: 275px;\n    }\n    .homepage1-consent .phone-consent a {\n        font-weight: var(--text-link-font-weight);\n        font-family: var(--text-link-font-family);\n        color: var(--text-link-color);\n\n    }</style>", "selector": "head", "dependencies": [], "type": "append", "id": "127A9B44-425A-4A7E-8620-A58503B7D1E7"}]}, {"viewId": "23472861093", "changes": [{"dependencies": [], "type": "custom_code", "id": "1103DF2B-22FC-430F-9FE4-D651E55BA97A", "value": function($){(function (window, document){
        // Invoking strict mode
        'use strict';
        // Run a timer here because of the dynamic JS rendering
        let $timerA = window.setInterval(function () {
            // Try to grab a test subject
            let subject = document.querySelector(".telephone-info-link");

            if(subject) {
                window.clearInterval($timerA);

                document.body.classList.add('content-consent');


                function addConsent() {
                    let consent = document.createElement("div");
                    consent.classList.add('phone-consent');
                    consent.innerHTML += ('By entering your number, you consent to us calling or texting you abut this search. We won\'t use it for anything else. <a href="https://www.virginmedia.com/legal/privacy-policy" target="_blank">Privacy Policy</a>.');
                    let button = document.getElementById('check-availability');
                    let parent = button.parentNode;
                    parent.insertBefore(consent, button);
                }


                const  mutationObserver = () => {
                        const targetNode = document.querySelector(".postcode-container");
                        const config = { childList: true, subtree: true};

                        const callback = function(mutationsList, observer) {
                            for(const mutation of mutationsList) {
                                if (mutation.type === 'childList') {
                                    for(const node of mutation.addedNodes){
                                        if (!node.tagName) continue;
                                        if (node.classList.contains("postcode-checker__address-container")) {
                                            setTimeout(function() {
                                                if (!document.querySelector(".phone-consent")) {
                                                    addConsent();
                                                }
                                            }, 0);
                                        }

                                    }
                                }
                            }
                        };
                        const observer = new MutationObserver(callback);
                        observer.observe(targetNode, config);
                    }

                addConsent();
                mutationObserver();

            }
        }, 100);
    }(window, document));
}}, {"value": "<style>.content-consent .telephone-info-link {\n        display: none!important;\n    }\n    .content-consent .phone-consent {\n        margin: 10px auto 24px;\n        font-size: 14px;\n        max-width: 275px;\n    }\n    .content-consent .phone-consent a {\n        font-weight: var(--text-link-font-weight);\n        font-family: var(--text-link-font-family);\n        color: var(--text-link-color);\n\n    }</style>", "selector": "head", "dependencies": [], "type": "append", "id": "E78D1237-CAE7-4821-8CB4-FC170E5A3125"}]}, {"viewId": "23094220077", "changes": [{"value": "<style>a[data-target='#phone-number-info']{display:none!important;}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "9D761EF7-10E5-4943-BB87-4EDC93C4DDD1"}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "23389720488", "integrationSettings": null}], "id": "23369210510", "weightDistributions": null, "name": "[100%] [no-track] CRO-823 Expose consent copy on serviceability check [Homepage  + Availability page]", "groupId": null, "commitId": "23745240711", "decisionMetadata": {"experimentPriorities": [[{"entityId": "23389720488", "endOfRange": null}]], "offerConsistency": null}, "policy": "equal_priority", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["23145930062"], "experiments": [{"weightDistributions": [{"entityId": "23357361585", "endOfRange": 10000}], "audienceName": "Journey: create-basket,Journey: original2,Brand: virgin,merkleqa=true", "name": "[QA] [A/B] Merkle 7 - Customise Optimisation", "bucketingStrategy": null, "variations": [{"id": "23398490848", "actions": [{"viewId": "23145930062", "changes": []}], "name": "Original"}, {"id": "23357361585", "actions": [{"viewId": "23145930062", "changes": [{"dependencies": [], "type": "custom_code", "id": "5728F08B-730A-4874-A353-31BB368F505E", "value": function($){var utils = window.optimizely.get('utils');
  
utils.waitUntil(function() {
      return window.dataLayer!==undefined;
}).then(function(){
    console.log("in merkle 7 with waitUntil")

    //check if they are a 'non-volt' customer from the dataLayer
    //brand == virgin
    function searchForBrand(dataLayer, brand = "virgin", recursionDepth = 0) {
        if (!dataLayer || recursionDepth > 10) {
            return false;
        }

        for (const key in dataLayer) {
            if (typeof dataLayer[key] === "string" && key === "brand" && dataLayer[key] === brand) {
                return true;
            }
            if (typeof dataLayer[key] === "object") {
                const searchResult = searchForBrand(dataLayer[key], brand, recursionDepth + 1);
                if (searchResult) {
                    return true;
                }
            }
        }
        return false;
    }

    if (searchForBrand(dataLayer) === true) {
        // ... run code when brand is "virgin"
        //creates HTML for the accordion 
        var mpxAccordion = '<container class="mpx-accordion">\
    <hr>\
    <div class="mpx-speedSelection mpx-accordion-container">\
        <div class="mpx-accordion-info">\
            <img src="https://www.virginmedia.com/content/dam/virginmedia/dotcom/images/ABtest/cro/wifi-4-4.svg">\
            <div class="mpx-accordion-info-labels">\
            <p class="mpx-product-title">Broadband & O2 sim</p>\
            <p class="mpx-speed-info"></p>\
            <p class="mpx-sim-info"></p>\
            </div>\
        </div>\
        <a href="#speedSelection">\
            <p class="mpx-accordion-btn"></p>\
        </a>\
        <div class="mpx-speedSelection-content mpx-accordion-content">\
        </div>\
        <div class="mpx-simSelection-content mpx-accordion-content">\
        </div>\
    </div>\
    <hr>\
    <div class="mpx-skySelection mpx-accordion-container">\
        <div class="mpx-accordion-info">\
            <img src="https://www.virginmedia.com/content/dam/virginmedia/dotcom/images/ABtest/cro/tv.svg">\
            <div class="mpx-accordion-info-labels">\
            <p class="mpx-product-title">Channel Packs</p>\
            <p class="mpx-product-info"></p>\
            </div>\
        </div>\
        <a href="#skySelection">\
            <p class="mpx-accordion-btn"></p>\
        </a>\
        <div class="mpx-skySelection-content mpx-accordion-content">\
        </div>\
    </div>\
    <hr>\
    <div class="mpx-netflixSelection mpx-accordion-container">\
        <div class="mpx-accordion-info">\
            <img src="https://www.virginmedia.com/content/dam/virginmedia/dotcom/images/ABtest/cro/popcorn.svg">\
            <div class="mpx-accordion-info-labels">\
            <p class="mpx-product-title">Entertainment</p>\
            <p class="mpx-product-info"></p>\
            </div>\
        </div>\
        <a href="#netflixSelection">\
            <p class="mpx-accordion-btn"></p>\
        </a>\
        <div class="mpx-netflixSelection-content mpx-accordion-content">\
        </div>\
    </div>\
    <hr>\
    <div class="mpx-tvSelection mpx-accordion-container">\
        <div class="mpx-accordion-info">\
            <img src="https://www.virginmedia.com/content/dam/virginmedia/dotcom/images/ABtest/cro/tv_copy.svg">\
            <div class="mpx-accordion-info-labels">\
            <p class="mpx-product-title">Extra TV Boxes</p>\
            <p class="mpx-product-info"></p>\
            </div>\
        </div>\
        <a href="#tvSelection">\
            <p class="mpx-accordion-btn"></p>\
        </a>\
        <div class="mpx-tvSelection-content mpx-accordion-content">\
        </div>\
    </div>\
    <hr>\
    <div class="mpx-landlineSelection mpx-accordion-container">\
        <div class="mpx-accordion-info">\
            <img src="https://www.virginmedia.com/content/dam/virginmedia/dotcom/images/ABtest/cro/landline.svg">\
            <div class="mpx-accordion-info-labels">\
            <p class="mpx-product-title">Call Plans</p>\
            <p class="mpx-product-info"></p>\
            </div>\
        </div>\
        <a href="#landlineSelection">\
            <p class="mpx-accordion-btn"></p>\
        </a>\
        <div class="mpx-landlineSelection-content mpx-accordion-content">\
        </div>\
    </div>\
    <hr>\
</container>'

        //places the accordion 
        $(mpxAccordion).insertAfter($('#speed-selection'))

        //hides original menu
        $('#speed-selection').css('display', 'none')

        //moves header and changes text
        $('.page-header').insertBefore('.mpx-accordion')
        $('.page-header h1').text("Customise your bundle your way")

        //moves existing sections into container 
        $('#speed-selection-board-container').appendTo($('.mpx-speedSelection-content'))
        $('#channel-packs-container').appendTo($('.mpx-skySelection-content'))
        //id = "tv2-streaming-options-container"
        //id = "netflix-container"
        $('#streaming-options-container').appendTo($('.mpx-netflixSelection-content'))
        $('#additional-tv-selection-board-container').appendTo($('.mpx-tvSelection-content'))
        $('#landline-selection-board-container').appendTo($('.mpx-landlineSelection-content'))

        //moves modals 
        //create container for modal, move into relevant accordion 
        // Wrap each modal with a container element and append it to the corresponding section
        $('#speed-selection-info-modal').wrap('<div class="modal-container"></div>').appendTo($('.mpx-speedSelection-content'));
        $('#sim-selection-info-modal').wrap('<div class="modal-container"></div>').appendTo($('.mpx-speedSelection-content'));
        $('#netflix-subscription-info-modal').wrap('<div class="modal-container"></div>').appendTo($('.mpx-netflixSelection-content'));
        $('.channel-pack-modal').wrap('<div class="modal-container"></div>').appendTo($('.mpx-skySelection-content'));
        $('#tv-mini-modal-second-info-box').wrap('<div class="modal-container"></div>').appendTo($('.mpx-tvSelection-content'));
        $('#tv-modal-info-box').wrap('<div class="modal-container"></div>').appendTo($('.mpx-tvSelection-content'));
        $('<div id="landline-pick-modal"></div>').wrap('<div class="modal-container"></div>').appendTo($('.mpx-landlineSelection-content'));

        //remove original backdrop
        $(document).on('click', function (event) {
            if ($('.modal-backdrop')) {
                $('.modal-backdrop').css('display', 'none');
            }
        });

        //add background to modals
        $('#speed-selection-info-modal').css('background-color', 'rgba(0, 0, 0, 0.6)');
        $('#sim-selection-info-modal').css('background-color', 'rgba(0, 0, 0, 0.6)');
        $('#netflix-subscription-info-modal').css('background-color', 'rgba(0, 0, 0, 0.6)');
        $('.channel-pack-modal').css('background-color', 'rgba(0, 0, 0, 0.6)');
        $('#tv-mini-modal-second-info-box').css('background-color', 'rgba(0, 0, 0, 0.6)');
        $('#tv-modal-info-box').css('background-color', 'rgba(0, 0, 0, 0.6)');
        $('<div id="landline-pick-modal"></div>').css('background-color', 'rgba(0, 0, 0, 0.6)');

        //on click for accordian 
        //Add click event to mpx-accordion-btn to 'open' / 'close' accordion item
        $('.mpx-accordion-btn').on('click vclick', function () {
            $(this).parent().parent('.mpx-accordion-content').toggleClass('open');
            $(this).parent().siblings('.mpx-accordion-content').slideToggle();
        });

        //Add click event to container to 'open' / 'close' accordion item
        $('.mpx-accordion-info').on('click vclick', function () {
            $(this).parent('.mpx-accordion-content').toggleClass('open');
            $(this).siblings('.mpx-accordion-content').slideToggle();
        });

        //add dataLayer push on click
        const accordionButtons = document.querySelectorAll('.mpx-accordion-btn');
        accordionButtons.forEach(button => {
            button.addEventListener('click', function () {
                let eventLabel;
                if (this.textContent.trim() == 'edit') {
                    eventLabel = "edit click";
                } else {
                    eventLabel = "add click";
                }
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    event: "gaEvent",
                    eventCategory: "a/b testing",
                    eventAction: "merkle-7",
                    eventLabel: eventLabel,
                    eventValue: "1",
                });
            });
        });

        //button clicks in sequence 
        //loads relevant content on the page 
        //each click populates the next element
        var pxFuncFired = 0;
        var pxInterval = setInterval(pxPollFunc, 500);

        //polling function
        function pxPollFunc() {
            pxFuncFired += 1;

            //if run for over 5 secs then don't
            if (pxFuncFired >= 10) {
                clearInterval(pxInterval);

                var element = $('#speed-selection-board-container > div > div:eq(1)');
                if (element.length) {
                    //moves sim selection option
                    //only moves if populated after button clicks
                    if ($('#speed-selection-board-container > div > div:eq(1)').html().indexOf('Add a mobile sim') > -1 == true) {
                        $('#speed-selection-board-container > div > div:eq(1)').appendTo($('.mpx-simSelection-content'))
                        $('.mpx-simSelection-content').appendTo($("#speed-selection-board-container"))
                        $('.mpx-simSelection-content').show()
                    } else if ($('#speed-selection-board-container > div > div:eq(1)').html().indexOf('Add a mobile sim') > -1 == false) {
                        //if not populated, change text to broadband and hide sim info section
                        $('.mpx-speedSelection .mpx-product-title').text('Broadband')
                        $('.mpx-sim-info').hide()
                    }
                }

                //adjusts continue buttons
                //hides each virgin button
                $('.virgin-button').addClass('hide');

                // Clone the last button
                var cloneButton = $('.virgin-button').last().clone();

                // Insert the clone button after the accordion element
                cloneButton.insertAfter($('.mpx-accordion'));

                // Adjust the class and text of the clone button
                cloneButton.addClass('mpx-nav-banner')
                    .removeClass('align-items-center')
                    .removeClass('flex-column')
                    .removeClass('hide');

                //changes text of last button
                cloneButton.find('span').text('Continue to checkout');

                //hide clone text
                $('.virgin-button .vm-h5').last().hide()

                // Attach a click event to the clone button
                $('.virgin-button').last().find('div').on('click vclick', function () {
                    // Trigger the click event on the original button
                    $('.virgin-button').eq(-2).find('div').click();
                });

                //selects each of the accordion elements and the content div inside it
                var containers = [
                    { container: "#speed-selection-board-container", class: ".mpx-speedSelection" },
                    { container: "#channel-packs-container", class: ".mpx-skySelection" },
                    { container: "#streaming-options-container", class: ".mpx-netflixSelection" },
                    { container: "#additional-tv-selection-board-container", class: ".mpx-tvSelection" },
                    { container: "#landline-selection-board-container", class: ".mpx-landlineSelection" },
                ];

                //if one of the selection options isn't populated after button presses, hide its accordion option
                containers.forEach(function (containerInfo) {
                    if ($(containerInfo.container).html() === "" || $(containerInfo.container).css("display") === "none") {
                        $(containerInfo.class).find(".mpx-accordion-btn").parent().parent().css("display", "none");
                    }
                });

                //hides <hr> if div is not displayed 
                $('.mpx-accordion-container').each(function () {
                    if ($(this).css('display') == 'none') {
                        $(this).prev('hr').css('display', 'none');
                    }
                });

                //adds edit/add button text, depending on active class being included or not
                //checks if 'active' has changed on card changes accordion btn to edit/add
                function updateButtonText() {
                    containers.forEach(function (container) {
                        var active = $(container.class + " .active");
                        if (active.length) {
                            $(container.class + " .mpx-accordion-btn").text("edit");
                            $(container.class + " .mpx-accordion-btn").append("<i class='fas fa-fw fa-pen'></i>");
                        } else {
                            $(container.class + " .mpx-accordion-btn").text("add");
                            $(container.class + " .mpx-accordion-btn").append("<img src='https://prod.ctassets.virginmedia.com/uploads/plus_741c555f11.svg'/>");
                        }
                    });
                }

                //runs function
                updateButtonText()

                //updates on click 
                $(document).on("click vclick", ".selection-card", function () {
                    updateButtonText()
                });

                //create css variables to call in below functions
                var notAddedCss = {
                    'display': 'inline-block',
                    'padding': '0.1em 1em',
                    'border-radius': '1em',
                    'text-align': 'center',
                    'color': 'white',
                    'background-color': 'grey',
                    'display': 'inline-flex',
                    'justify-content': 'center',
                    'margin-left': '10px',
                    'line-height': '20px'
                }

                var addedCss = {
                    'display': 'inline-block',
                    'padding': '0.1em 1em',
                    'border-radius': '1em',
                    'text-align': 'left',
                    'color': '',
                    'background-color': '',
                    'display': 'inline-flex',
                    'justify-content': 'center',
                    'margin-left': '0',
                    'line-height': ''
                }

                //updates accordion titles
                //updates accordion titles
                function updateSelectedTitle() {
                    containers.forEach(function (container) {
                        let $active = $(container.class + ' .active').filter('.selection-card'), productTitle = "";
                        if ($active.length) {
                            $active.each(function () {
                                $(this).contents().each(function () {
                                    if ($(this).text().length > 0) {
                                        productTitle = $(this).text();
                                        return false;
                                    }
                                });
                            });
                            //remove unwanted text
                            productTitle = productTitle.replace(/Find out more*/, '');

                            //changes text to 'multiple selected', excluding broadband and 02
                            if ($active.length > 1 && container.class.slice(1) !== "mpx-speedSelection") {
                                productTitle = "Multiple selected"
                            }

                            //specific for channel package to negate possible bug
                            if ($('.mpx-skySelection' + ' .active').filter('.selection-card').length === 0) {
                                $('.mpx-skySelection' + ' .mpx-product-info').text("Not added").css(notAddedCss);
                            } else {
                                $('.mpx-skySelection' + ' .mpx-product-info').css(addedCss)
                            }

                            //specific for entertainment package to negate possible bug
                            if ($('.mpx-netflixSelection' + ' .active').length === 0) {
                                $('.mpx-netflixSelection' + ' .mpx-product-info').text("Not added").css(notAddedCss);
                            } else {
                                $('.mpx-netflixSelection' + ' .mpx-product-info').css(addedCss)
                            }

                            //updates each accordion title, excluding broadband and 02
                            if (container.class.slice(1) !== "mpx-speedSelection") {
                                $(container.class + ' .mpx-product-info').text(productTitle).css(addedCss)
                            } else {
                                $(container.class + ' .mpx-product-info').text("Not added").css(notAddedCss)
                            }
                        }
                    })
                }

                //updates broadband accordion title
                function updateBroadbandTitle() {
                    let $active = $('#speed-selection-board-container > div:eq(0)').find('.active'), speedProductTitle = "";
                    if ($active.length) {
                        $active.each(function () {
                            $(this).contents().filter(':not(div[style*="text-decoration: line-through"])').each(function () {
                                if ($(this).text().length > 0) {
                                    var text = $(this).text();
                                    text = text.replace($(this).find("[style*='line-through']").text(), '');
                                    speedProductTitle = text;
                                    return false;
                                }
                            });
                        });
                        $($('.mpx-speedSelection').find(' .mpx-speed-info'))
                            .text(speedProductTitle)
                            .css(addedCss)
                    } else {
                        $($('.mpx-speedSelection').find(' .mpx-speed-info'))
                            .text("Not added")
                            .css(notAddedCss)
                    }
                }

                //updates sim accordion title
                function updateSimTitle() {
                    let $active = $('.mpx-simSelection-content').find('.active'), simProductTitle = "";
                    if ($active.length) {
                        $active.each(function () {
                            $(this).contents().each(function () {
                                if ($(this).text().length > 0) {
                                    simProductTitle = $(this).text();
                                    //capture first word after '02 sim' to remove possible text with line through it
                                    simProductTitle = $(this).text().match(/[\w\d]+ O2 sim/)[0].substring(0, $(this).text().match(/[\w\d]+ O2 sim/)[0].indexOf(" O2 sim")) + " O2 sim"; return false;
                                }
                            });
                        });

                        $($('.mpx-speedSelection').find(' .mpx-sim-info'))
                            .text(simProductTitle)
                            .css(addedCss)
                    } else {
                        $($('.mpx-speedSelection').find(' .mpx-sim-info'))
                            .text("Sim not added")
                            .css(notAddedCss)
                    }
                }

                //run functions
                updateSelectedTitle()
                updateBroadbandTitle()
                updateSimTitle()

                //update on click
                $(document).on("click vclick", ".selection-card", function () {
                    updateSelectedTitle()
                    updateBroadbandTitle()
                    updateSimTitle()
                });

                //calcuates the running total of selected options
                //updates and adds total at bottom of page 
                let elementExists = false;

                function updateRunningTotal() {
                    let total = 0;
                    let numbers = [];

                    $('.active').each(function () {
                        const text = $(this).text();

                        if (text.includes('\u00A3')) {
                            const number = parseFloat(text.split('\u00A3')[1].match(/\d+(\.\d+)?/));
                            numbers.push(number);
                        }
                    });

                    total = numbers.reduce((a, b) => a + b, 0);
                    total = total.toFixed(2);

                    if (!elementExists) {
                        $('<p class="mpx-total">Est. monthly total: <strong>&pound;</strong><span class="total-number">' + total + '</span></p>').appendTo('.mpx-nav-banner');
                        elementExists = true;
                    } else {
                        $('.mpx-nav-banner .mpx-total .total-number').text(total);
                    }

                    $('.total-number').css("font-weight", "bold");
                    $("strong").css("font-weight", "bold");
                }

                //runs function 
                updateRunningTotal();

                //updates total on click
                $(document).on("click vclick", ".selection-card", function () {
                    updateRunningTotal();
                });

            }

            //loads dynamic content into accordions 
            //presses each virgin button to load content, provided button has text 'next step'
            if ($('.virgin-button').find('h5:contains("Next step:")')) {
                $('div > h5:contains("Next step:")').closest('div').siblings().click()
                $(this).hide()
                $('.cta-hr').hide()
            }
        }
    }
});
}}, {"value": "<style>.mpx-nav-banner {\n        position: sticky;\n        bottom: 0;\n        top: 0;\n        background: white;\n        padding-bottom: 30px;\n    }\n\n    .content {\n        overflow: visible !important;\n        contain: paint !important;\n    }\n\n    .mpx-accordion-container {\n        position: relative;\n    }\n\n\n    .mpx-accordion-info img {\n        width: 30px;\n    }\n\n    .mpx-product-title {\n        font-weight: bold;\n    }\n\n    .mpx-accordion-info img,\n    .mpx-accordion-info .mpx-product-title,\n    .mpx-accordion-info .mpx-product-info,\n    .mpx-accordion-info .mpx-speed-info,\n    .mpx-accordion-info .mpx-sim-info {\n        display: inline-block;\n    }\n\n    .mpx-accordion-container>a {\n        display: inline-block;\n        position: absolute;\n        right: 0;\n        top: 0;\n        text-decoration: none !important;\n    }\n\n    p.mpx-accordion-btn {\n        display: inline-block;\n        padding: 0.1em 1em;\n        border-radius: 1em;\n        text-align: center;\n        color: purple;\n        border: 1px solid purple;\n        display: inline-flex;\n        font-weight: bold;\n    }\n\n    /* Hide all mpx-accordion-content divs by default */\n    .mpx-accordion-content {\n        display: none;\n    }\n\n    /* Add open class to open the accordion */\n    .mpx-accordion-content.open {\n        display: block;\n    }\n\n    .mpx-nav-banner {\n        display: flex !important;\n        flex-direction: row-reverse;\n        width: 100%;\n        justify-content: space-between;\n        align-items: flex-end;\n    }\n\n    /* change color pen svg */\n\n    .fas.fa-fw.fa-pen {\n        -webkit-text-fill-color: white !important;\n        -webkit-text-stroke-width: 1px !important;\n        -webkit-text-stroke-color: purple !important;\n        font-size: 15px;\n        padding: 5px 7px;\n    }\n\n    /* invert color plus sg */\n\n    p.mpx-accordion-btn img {\n        filter: brightness(0) saturate(115%) invert(36%) sepia(60%) saturate(1917%) hue-rotate(249deg) brightness(57%) contrast(80%);\n        padding-left: 4px;\n        width: 20px;\n    }\n\n    /* accordion container */\n\n    .mpx-accordion-info {\n        display: flex;\n        justify-content: space-evenly;\n        width: 35%;\n        align-items: stretch;\n    }\n\n    .mpx-accordion-info-labels {\n        display: flex;\n        width: 200px;\n        align-items: center;\n    }\n\n    .mpx-product-info {\n        min-width: fit-content;\n    }\n\n    .mpx-speed-info {\n        min-width: fit-content;\n    }\n\n    .mpx-sim-info {\n        min-width: fit-content;\n    }\n\n    .mpx-product-title {\n        min-width: -webkit-fill-available;\n    }\n\n    .modal-dialog {\n        position: fixed;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -75%);\n    }\n\n    /* media queries */\n    @media screen and (min-width: 300px) and (max-width: 768px) {\n        .mpx-accordion-info {\n            width: 230px;\n        }\n\n        .mpx-accordion-info-labels {\n            display: grid;\n            margin-left: 20px;\n            justify-items: stretch;\n        }\n\n        .mpx-accordion-container>a {\n            top: 22px;\n        }\n\n        .mpx-product-info {\n            width: fit-content;\n            margin-left: 0 !important;\n            justify-content: left !important;\n        }\n\n        .mpx-speed-info {\n            width: fit-content;\n            margin-left: 0 !important;\n            justify-content: left !important;\n        }\n\n        .mpx-sim-info {\n            width: fit-content;\n            margin-left: 0 !important;\n            justify-content: left !important;\n        }\n\n        .mpx-product-title {\n            width: fit-content;\n            margin-left: 2px;\n        }\n\n        .btn {\n            width: 50%;\n        }\n\n        .mpx-total {\n            width: 150px;\n        }\n\n        .page-header h1 {\n            margin-top: 0px;\n        }\n\n        .mpx-nav-banner {\n            padding-bottom: 20px;\n        }\n\n        .mpx-accordion-info img {\n            width: 30px;\n            transform: translatey(-40%);\n        }\n\n        .mpx-accordion-container>a {\n            transform: translatey(-50%);\n        }\n\n        .mpx-nav-banner>div {\n            max-width: 210px;\n        }\n    }</style>", "selector": "head", "dependencies": [], "type": "append", "id": "B4D67660-9085-4DBC-A32C-9346B423C8B3"}]}], "name": "Variation #1"}], "audienceIds": ["and", ["or", "23064800131", "23107030611"], "23193990082", "23378731038"], "changes": null, "id": "23369261511", "integrationSettings": null}], "id": "23389750807", "weightDistributions": null, "name": "[QA] [A/B] Merkle 7 - Customise Optimisation", "groupId": null, "commitId": "23478570634", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["23582500346"], "experiments": [{"weightDistributions": [{"entityId": "23400780852", "endOfRange": 5000}, {"entityId": "23338521508", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "[A/B] CSCRO-961 Filtering", "bucketingStrategy": null, "variations": [{"id": "23400780852", "actions": [{"viewId": "23582500346", "changes": [{"dependencies": [], "type": "custom_code", "id": "84C7A367-F68B-456F-81A8-1A3F8919C9AE", "value": function($){// Wrap code in an IIFE
   (function (window, document){
    // Invoking strict mode
    'use strict';

    // Run a timer here because of the dynamic JS rendering
    let $timerA = window.setInterval(function () {
        // Try to grab a test subject
        let subject1 = document.querySelector("a.chip-tabbed"),
            $ = window.$,
            lazyLoadComplete = window.vmLazyLoadComplete;
            
        // Only proceed if subject is found in DOM
        if(subject1 && typeof $ == "function" && lazyLoadComplete) {
            window.clearInterval($timerA);
          
            $('body').addClass('filtering');

            $("a.chip-tabbed").click(()=>{
                window.sales_cro.fireOpti("961_filter_interaction")
                window.sales_cro.fireGA("961","filter interaction");
            })
        }
       
    }, 500);
    setTimeout(function(){
        if($timerA !== null){
          clearInterval($timerA);
          if(typeof(error) === 'function'){
            error();
          }
        }
      }, 20000);
}(window, document));
}}]}], "name": "Original"}, {"id": "23338521508", "actions": [{"viewId": "23582500346", "changes": [{"dependencies": [], "type": "custom_code", "id": "ECB5E862-9567-464E-8DBF-6A24A8988E15", "value": function($){// Wrap code in an IIFE
   (function (window, document){
    // Invoking strict mode
    'use strict';

    // Run a timer here because of the dynamic JS rendering
    let $timerA = window.setInterval(function () {
        // Try to grab a test subject
        let subject1 = document.querySelector(".vm-container .tile-wrapper .tile"),
        chipsSelector = "vm-custom-broadband-page-generator > vm-custom-chips > .vm-chips > vm-choice-chips",
        $ = window.$,
        topDealsChipSelector = "vm-chip#content0 vm-product-card-section .tile-wrapper .tile",
        topDealsArray = [],
        filters = {
            productType:{
                title: "Product Type",
                class: "productType",
                options:[
                    {name: "Top deals", class: "topDeals"},
                    {name: "Broadband", class:"broadband", excludes:['broadbandTV','freeview','skySports','btSports','skyChannels','skyCinema','netflix']},
                    {name: "Broadband & TV", class:"broadbandTV", excludes:['broadband']},                    
                ]
            },
            onlineActivities:{
                title: "Online Activities",
                class: "onlineActivities",
                options:[
                    {name: "Downloading TV shows, music and films", class: "download"},
                    {name: "Streaming from services like Netflix", class:"streaming"},
                    {name: "Working from home", class:"wfh"},
                    {name: "Playing online games", class:"gaming"},
                ]
            },
            tvChannels:{
                title: "TV channels",
                class: "tvChannels",
                options:[
                    {name: "Freeview", class: "freeview", excludes:['broadband']},
                    {name: "Sky Sports", class:"skySports", products:['9149','4026'], excludes:['broadband']},
                    {name: "BT Sports", class:"btSports", products:['9149','4019','4026'], excludes:['broadband']},
                    {name: "Sky Channels", class:"skyChannels", products:['9149','4019','4049','4026'], excludes:['broadband']},
                    {name: "Sky Cinema", class:"skyCinema", products:['9149'], excludes:['broadband']},
                    {name: "Netflix", class:"netflix", products:['9149'], excludes:['broadband']},
                ] 
            },
        },
        lazyLoadComplete = window.vmLazyLoadComplete;
        const icons = {
            "broadband": "https://www.virginmedia.com/assets/icons/broadband-flare-design.svg",
            "tv": "https://www.virginmedia.com/assets/icons/tv-flare-design.svg",
            "chatter": "https://www.virginmedia.com/assets/icons/phone-flare-design.svg",
            "sim": "https://www.virginmedia.com/assets/icons/sim-flare-design.svg",
            "netflix": "https://www.virginmedia.com/assets/icons/stream-flare-design.svg",
            "volt benefits":"https://www.virginmedia.com/assets/icons/bolt-red-flare-design.svg",
            "extras": "https://www.virginmedia.com/assets/icons/bolt-blue-flare-design.svg"
        };

        const filterContainerHTML = '<div class="croFiltering"><div class="filteringHeader mobileOnly"><span class="closeFilters">&times</span><p><img src="https://www.virginmedia.com/content/dam/virginmedia/dotcom/images/ABtest/cro/filters_icon.svg"/><span>Filters </span class="mobileFilterNumber"><span>   </span></p></div><div class="filterContainer"></div><div class="ctaContainer mobileOnly"><div class="applyFiltersCTA button button--medium button--tertiary">Apply Filters</div><p class="clearFilters">Clear all filters</p></div></div>';

        const variant = function(){
            if($(".filteringProdContainer").length==0) $("vm-custom-broadband-page-generator > vm-custom-chips > .vm-chips > vm-choice-chips").before("<div class='filteringProdContainer vm-container'></div>");
            if($(".filterDimArea").length==0) $("body").append("<div class='filterDimArea'></div>");
            mergeProductContainers();
            attachProductCardEvents();
            reInstateCardsIcons();            
            findTopDeals();
            applyCardClasses();
            buildFilters();
            updateCards();
            calculateResults();
            attachClickEvents();
            $(window).resize(manageMobile);
        };

        const findTopDeals = function(){
            $(topDealsChipSelector).each((i,elem)=>{
                let elemid = $(elem).find(".more .more__details .section-content").eq(0).attr("data-product-id");
                topDealsArray.push(elemid);
            })
            //console.log("top deals = ",topDealsArray)
        };

        const applyCardClasses = function(){
            if($(".topDeals,.broadband,.broadbandTV").length==0){

                let skySportsArr = filters.tvChannels.options.filter((option)=>{return option.class=="skySports"})[0];
                let btSportsArr = filters.tvChannels.options.filter((option)=>{return option.class=="btSports"})[0];
                let skyChannelsArr = filters.tvChannels.options.filter((option)=>{return option.class=="skyChannels"})[0];
                let skyCinemaArr = filters.tvChannels.options.filter((option)=>{return option.class=="skyCinema"})[0];
                let netflixArr = filters.tvChannels.options.filter((option)=>{return option.class=="netflix"})[0];

                //console.log($(subject1).length)
                $(".filteringProdContainer .tile").each((i,el)=>{  
                    let prodId = $(el).find(".more .more__details .section-content").eq(0).attr("data-product-id");
                    let title = $(el).find(".product-title").text().trim();
                    //console.log("title = ",title)
                    let desc = $(el).find(".product-description-container p").text();
                    let isM50AndHigher = title.indexOf("M50 ")==-1 && desc.indexOf("M50 ")==-1;
                    let isM350AndHigher = title.indexOf("M50 ")==-1 && desc.indexOf("M50 ")==-1 && title.indexOf("M125 ")==-1 && desc.indexOf("M125 ")==-1 && title.indexOf("M250 ")==-1 && desc.indexOf("M250 ")==-1;
                    let isTVDeal = $(el).find(".product-description-container > p.product-description").eq(0).text().indexOf("channels")>-1 || $(el).find(".product-title").eq(0).text().indexOf("bundle")>-1;
                    //console.log("skySports = ",skySportsArr["includes"].contains(prodId));

                    let isSkySports = skySportsArr.products.includes(prodId) || (title=="Ultimate Volt bundle" || title=="Bigger bundle + Sports");
                    let isBTSports = btSportsArr.products.includes(prodId) || (title=="Ultimate Volt bundle" || title=="Bigger bundle + Sports" || title=="Bigger bundle");

                    let isSkyChannel = skyChannelsArr.products.includes(prodId) || (title=="Ultimate Volt bundle" || title=="Bigger bundle + Sports" || title=="Bigger bundle") || title=="Big bundle + Drama & Docs";
                    let isSkyCinema = skyCinemaArr.products.includes(prodId) || title=="Ultimate Volt bundle";
                    let isNetflix = netflixArr.products.includes(prodId) || title=="Ultimate Volt bundle";
                    // let price = $(el).find(".headline-pricing-and-details .price .pricevalue-container").last().text().trim().split("£")[1];

                    $(el).addClass("download streaming");
                    $(el).addClass(isTVDeal ? "broadbandTV freeview" : "broadband");
                    if(topDealsArray.includes(prodId)) $(el).addClass("topDeals")
                    if(isM50AndHigher) $(el).addClass("wfh");
                    if(isM350AndHigher) $(el).addClass("gaming");    
                    if(isSkySports) $(el).addClass("skySports");   
                    if(isBTSports) $(el).addClass("btSports");   
                    if(isSkyChannel) $(el).addClass("skyChannels"); 
                    if(isSkyCinema) $(el).addClass("skyCinema"); 
                    if(isNetflix) $(el).addClass("netflix"); 
                  })
            }
        };
        const attachProductCardEvents = function(){
            $(".filteringProdContainer .tile .show-more").on("click", function(e){
                e.preventDefault();
                e.stopImmediatePropagation();
                $(this).siblings(".more").toggleClass("more--expanded");
                $(this).find("i.fal.fa-fw.suffix-icon").toggleClass("fa-chevron-down fa-chevron-up");
                $(this).closest(".bottom-wrapper").siblings(".bundle-content").find(".product-description-container").toggle();
            })
            $(".filteringProdContainer .tile vm-button").on("click", function(e){
                e.preventDefault();
                e.stopImmediatePropagation();
                let cardId = $(e.target).closest(".tile").attr("prod-id");
                $(".vm-container .tile-wrapper .section-content[data-product-id="+cardId+"]").eq(0).closest(".tile").find("vm-button")[0].click();
            })
            const elementsClasses = ["contract-length .standalone-link", "modal-hub-link", "speed-info-modal", "open-modal-see-all-channels", "modal-tv-box", "o2-extra-info-modal", "open-modal-call-plan","o2-extra-info-modal","netflix-subscription-modal"];
            
            $(".filteringProdContainer .tile").each((i,clonedEl)=>{
                let cardId = $(clonedEl).attr("prod-id");
                for(var j = 0; j < elementsClasses.length; j++){
                    const currentClass = elementsClasses[j];
                    if($(clonedEl).find(`.${currentClass}`).length > 0){
                        $(clonedEl).find(`.${currentClass}`).on("click", function(e){
                            e.preventDefault();
                            $(".vm-container .tile-wrapper .section-content[data-product-id="+cardId+"]").eq(0).closest("vm-chip").find("div[hidden]").removeAttr("hidden");
                            $(".vm-container .tile-wrapper .section-content[data-product-id="+cardId+"]").eq(0).closest(".tile").find(`.${currentClass}`)[0].click();
                        })
                    }
                }
            })
        };
        const reInstateCardsIcons = function(){
            
            $(".filteringProdContainer .tile .more__header").each((i,moreHeader)=>{
                let title = $(moreHeader).find("span p").text().replace(/fibre|o2|unlocked|your|from|included/gi, "").trim().toLowerCase();
                if(icons[title]!==undefined && $(moreHeader).find("img").length==0){
                    $(moreHeader).append(`<img alt="${title}" src="${icons[title]}">`)
                }
    
            })     
        };
        const mergeProductContainers = function(){
           if($(".filteringProdContainer .tile").length==0){
                $(".vm-container .tile-wrapper .tile").each((i,element)=>{  
                    let prodId = $(element).find(".more .more__details .section-content").eq(0).attr("data-product-id");

                    let notDuplicateproduct = $(".filteringProdContainer .tile").filter((ind,e)=>{return $(e).find(".more .more__details .section-content").eq(0).attr("data-product-id") == prodId}).length==0;
                    
                    if(notDuplicateproduct){
                        let productCard = $(element).clone();
                        $(productCard).attr("prod-id",prodId);
                        $(productCard).appendTo(".filteringProdContainer");
                    }
                })
          }
        };
        const buildFilters = function(){
            if($(".croFiltering").length==0){
                $(".filteringProdContainer").before(filterContainerHTML);
                //console.log($(".tile button.button--primary").eq(0))

                if(window.innerWidth<768) manageMobile();

                if($(".tile button.button--primary").length>0){
                    let attrForCTA =$(".tile button.button--primary").eq(0)[0].attributes[0].name
                    $(".applyFiltersCTA").attr(attrForCTA,"");
                }

                for (var filter of Object.keys(filters)) {
                    let filterTitle = filters[filter].title;
                    let filterClass = filters[filter].class;
                    let filterOptions = filters[filter].options;
                    const filterHtml = `<div class="${filterClass} filter">
                                    <div class="filterTitle">
                                        <p><span class="title">${filterTitle}</span><span class="filterOptionsSelected"></span></p>
                                        <i _ngcontent-cnv-c20="" class="fal fa-fw suffix-icon fa-chevron-down"></i>
                                    </div>
                                    <div class="optionsContainer">
                                        <!--Filters list-->
                                    </div>
                                    <div class="noResultsFound hidden">
                                        <p>No Results Found</p>
                                    </div>
                                </div>`;
                
                    $(".filterContainer").append(filterHtml);
                    filterOptions.forEach((option)=>{
                        let optionName = option.name;
                        let optionClass = option.class;
                        const optionHtml = ` <div class="option" ab-filter="${optionClass}"><img class="tickIcon inactive" src="https://www.virginmedia.com/content/dam/virginmedia/dotcom/images/ABtest/cro/checkbox.svg" /><img class="tickIcon active" src="https://www.virginmedia.com/content/dam/virginmedia/dotcom/images/ABtest/cro/checkboxActive.svg" /><p><span class="filterName">${optionName}</span><span class="filterNumber"></span></p></div>`;

                        $(".filter."+filterClass+" .optionsContainer").append(optionHtml);
                    })
                }

                //Add Desktop Clear Filters Options
                $(".filterContainer").append("<p class='clearFilters desktopOnly'>Clear all filters</p>")

            }
        };
        const manageMobile = function(){
            if(window.innerWidth<768){
                hideMobileFilters();
                scrollHandler();
                window.addEventListener("scroll",scrollHandler);
            }
            else {
                $("body").removeClass("no-scroll");
                $("#__evo-root").show();
                window.removeEventListener("scroll",scrollHandler);
            }
        }
        const scrollHandler = function(){
            const elementToCheck = document.querySelector(".filteringProdContainer");
                //console.log(percentInView(elementToCheck), count)
        
                if(percentInView(elementToCheck)>0) {
                   // if(count==0){
                        //count = 1;
                        showMobileFilters();
                    //}
                }
                else hideMobileFilters();
        }
        const intersection = (r1, r2) => {
            const xOverlap = Math.max(0, Math.min(r1.x + r1.w, r2.x + r2.w) - Math.max(r1.x, r2.x));
            const yOverlap = Math.max(0, Math.min(r1.y + r1.h, r2.y + r2.h) - Math.max(r1.y, r2.y));
            const overlapArea = xOverlap * yOverlap;
          
            return overlapArea;
          }
          
          const percentInView = (div) => {
            const rect = div.getBoundingClientRect();
          
            const dimension = { x: rect.x, y: rect.y, w: rect.width, h: rect.height };
            const viewport = { x: 0, y: 0, w: window.innerWidth, h: window.innerHeight };
            const divsize = dimension.w * dimension.h;
            const overlap = intersection(dimension, viewport);
          
            return overlap / divsize;
          }
        const hideMobileFilters = function(){
            $(".filterDimArea").hide();
            let heightAttr = parseInt($(".croFiltering").css("height").substr(0,$(".croFiltering").css("height").length-2));
            let newPos = "-"+heightAttr+"px";
            //console.log(newPos)
            $(".croFiltering").hide().stop().animate({"bottom":"-300px"});
            $("vm-back-to-top-scroller").show();
        }
        const showMobileFilters = function(){
            /*let filterHeight = parseInt($(".croFiltering").css("height").substr(0,$(".croFiltering").css("height").length-2));
            let headerHeight = parseInt($(".croFiltering .filteringHeader").css("height").substr(0,$(".croFiltering .filteringHeader").css("height").length-2));
            let diff = filterHeight - headerHeight;
            let newPosition = "-"+diff+"px";
            console.log(filterHeight, headerHeight, diff, newPosition)*/
            let newPosition = "-283px";

            if(percentInView(document.querySelector(".filteringHeader"))>0) $(".croFiltering").show().css("bottom",newPosition);
            else $(".croFiltering").show().stop().animate({"bottom":newPosition})
            $("vm-back-to-top-scroller").hide();
        }
        const attachClickEvents = function(){
            $(".filterContainer .filter").click(function(){
                if(window.innerWidth>767){
                    $(this).siblings(".filter").removeClass("open");
                    $(this).siblings(".filter").find(".optionsContainer").hide();
                }
                $(this).toggleClass("open").find(".optionsContainer,.noResultsFound").toggle("fast","linear");        
                let filterSelected = $(this).attr("class").split(" ")[0];    
                if($(this).hasClass("open")) {
                    window.sales_cro.fireGA("961",filterSelected+" click"); 
                    window.sales_cro.fireGA("961","filter interaction"); 
                    window.sales_cro.fireOpti("961_filter_interaction");
                }  
            });
            $(".optionsContainer .option").click(function(e){
                e.stopImmediatePropagation();
                $(this).toggleClass("selected").find("img.tickIcon").toggle();
                let mainFilter = $(this).closest(".filter").attr("class").split(" ")[0];
                let optionSelected = $(this).attr("ab-filter");

                //unselect exclusions
                    let filterOption = filters[mainFilter].options.filter((option)=>{return option.class==optionSelected})[0];
                    console.log(filterOption.excludes)
                    if(filterOption.excludes){
                        filterOption.excludes.forEach((excludedOption)=>{
                            $(".optionsContainer .option[ab-filter="+excludedOption+"]").removeClass("selected").find("img.tickIcon.inactive").show();
                            $(".optionsContainer .option[ab-filter="+excludedOption+"]").find("img.tickIcon.active").hide();
                        })
                    }
                    
                updateCards();
                calculateResults();
                if($(this).hasClass("selected")) window.sales_cro.fireGA("961",optionSelected+" selected");
            })
            $(".clearFilters").click(()=>{
                $(".optionsContainer .option.selected").removeClass("selected").find("img.tickIcon").toggle();
                updateCards();
                calculateResults();
                $(".filterContainer .filter").removeClass("open");
                $(".filterContainer .optionsContainer").hide();
                $(".filterContainer .optionsContainer").hide();
                $(".filterContainer .noResultsFound").addClass("hidden");
                
                window.sales_cro.fireGA("961","clear filters click");
            })

            $(".filterDimArea").click(()=>{
                mobileClickActions();
                window.sales_cro.fireGA("961","dimmed area click");
            })
            $(".closeFilters").click(()=>{
                mobileClickActions();
                window.sales_cro.fireGA("961","close filters click");
            })
            $(".applyFiltersCTA").click(()=>{

                //if($(".filteringHeader p span:last-child").text().trim()!==""){
                    mobileClickActions();
                    window.sales_cro.fireGA("961","apply filters click");
                //}
                //else window.sales_cro.fireGA("961","apply filters click - no filters selected");
                
            })

            $(".filteringHeader").click((e)=>{

                if(!e.target.classList.contains("closeFilters")){
                    window.removeEventListener("scroll",scrollHandler);
                    $(".filterDimArea,.closeFilters").show();
                    $("body").addClass("no-scroll");
                    $("#__evo-root").hide();
                    $(".croFiltering").show().stop().animate({"bottom":"0px"})
                    window.sales_cro.fireGA("961","open filters click");
                }
                
            })

            $(".filteringProdContainer .tile button.button--primary").click(()=>{
                window.sales_cro.fireGA("961","select product click");
            })
           
            $("body").click((e)=>{
                if (!(document.getElementsByClassName('filterContainer')[0].contains(e.target)))  {
                    $(".optionsContainer").hide().each((i,el)=>{$(el).closest(".filter").removeClass("open")})
                }
            })
            
        };

        const mobileClickActions = function(){
            $(".filterDimArea,.closeFilters").hide();
            $("body").removeClass("no-scroll");
            $("#__evo-root").show();
            showMobileFilters();
            window.addEventListener("scroll",scrollHandler);
        }
        const calculateResults = function(){
            let totalFiltersSelected = 0;

            $(".filterContainer .filter").each(function(){

                let numberOfProductsFound = 0;

                $(this).find(".option").each(function(){
                    let classToCheck = $(this).attr("ab-filter");
                   // console.log(classToCheck, ".filteringProdContainer .tile.filtered."+classToCheck+"");
                    let numberOfEligibleProducts = $(".filteringProdContainer .tile.filtered."+classToCheck+"").length;
                    numberOfProductsFound += numberOfEligibleProducts;
                    $(this).find(".filterNumber").text(" ("+numberOfEligibleProducts+")");
                    if(numberOfEligibleProducts==0)  $(this).addClass("disabled")
                    else $(this).removeClass("disabled");
                })


                let selectedOptions = $(this).find(".option.selected").length;
                totalFiltersSelected += selectedOptions;
                
                if(selectedOptions>0){
                    $(this).addClass("active");
                    $(this).find(".filterOptionsSelected").text(" ("+selectedOptions+")");
                }
                else{
                    $(this).removeClass("active");
                    $(this).find(".filterOptionsSelected").text("");
                }

                

                if(numberOfProductsFound==0){
                    $(this).addClass("disabled");
                    //$(this).find(".optionsContainer").hide();
                    $(this).find(".noResultsFound").removeClass("hidden");
                }
                else{
                    $(this).removeClass("disabled");
                    //$(this).find(".optionsContainer").show();
                    $(this).find(".noResultsFound").addClass("hidden");
                }
            })

            if(totalFiltersSelected>0) $(".filteringHeader.mobileOnly > p > span:last-child").text("("+totalFiltersSelected+")");
            else $(".filteringHeader.mobileOnly > p > span:last-child").text("   ");



        }
            
        const updateCards = function(){
            $(".filteringProdContainer .tile").addClass("filtered");

            $(".optionsContainer .option.selected").each(function(){
                let activeClass = $(this).attr("ab-filter");
                //$(".filteringProdContainer .tile."+activeClass+"").addClass("filtered");
                $(".filteringProdContainer .tile:not(."+activeClass+")").removeClass("filtered");
            });

        };
          
        // Only proceed if subject is found in DOM
        if(subject1 && document.querySelector(chipsSelector) && typeof $ == "function" && lazyLoadComplete) {
            window.clearInterval($timerA);

            console.log("in filtering test")
          
            $('body').addClass('filtering');

            setTimeout(variant,1000);
            //attachClickEvents();
            //mutationObserver();
        }
       
    }, 500);
    setTimeout(function(){
        if($timerA !== null){
          clearInterval($timerA);
          if(typeof(error) === 'function'){
            error();
          }
        }
      }, 60000);
}(window, document));
}}, {"value": "<style>.filtering vm-custom-broadband-page-generator > vm-custom-chips > .vm-chips > vm-choice-chips .chips-container-tabbed,\n.filtering vm-custom-broadband-page-generator > vm-custom-chips > .vm-chips > vm-choice-chips  .product-section .heading,\n.filtering vm-custom-broadband-page-generator > vm-custom-chips > .vm-chips > vm-choice-chips vm-product-card-section .vm-container,\n.filtering .choice-chips-wrapper {display:none!important;}\n.filtering vm-custom-broadband-page-generator > vm-custom-chips > .vm-chips > vm-choice-chips vm-modal{display:block!important;}\n.filtering .filteringProdContainer {\n    display: -ms-flexbox;\n    display: flex;\n    align-items: flex-start;\n    justify-content: center;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n}\n.filtering .filteringProdContainer .tile .more.more--expanded {\n    max-height: 125rem!important;\n    overflow: hidden;\n}\n.filtering .filteringProdContainer .tile .more__header img{\n    object-fit: contain;\n    float: left;\n    height: 1.5rem;\n    width: 1.5rem;\n    margin-top: 5px;\n}\n.filtering .filteringProdContainer .tile.filtered{display: block;}\n.filtering .filteringProdContainer .tile:not(.filtered){display: none;}\n/***FILTERS CSS***/\n.filtering .filterContainer{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    margin: 8px auto 32px;\n}\n.filtering .filterContainer .filter{\n    position: relative;\n    width: 261px;\n    height: 48px;\n    gap: 8px;\n    margin: 0 16px 1px 0;\n    cursor:default;\n    padding: 12px 16px;\n    background: #F8F8F8;\n    border: 2px solid #DBDBDB;\n    border-radius: 4px;\n}\n\n.filtering .filterContainer .filter.active{border-top: 2px solid #348437;}\n\n.filtering .filterContainer .filter  div,\n.filtering .filterContainer .filter  div p,\n.filtering .filterContainer .filter  div span{\n    font-family: 'VMCircularChatPTT', Arial, Helvetica, sans-serif;\n    font-size: 16px;\n    line-height: 20.24px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    letter-spacing: normal;\n    color: #333333;\n}\n.filtering .filterContainer .filter  .optionsContainer p{\n    font-size: 14px;\n    line-height: 20px;\n}\n.filtering .filterContainer .filter  div p{\n    overflow: visible;\n    white-space: normal;\n}\n.filtering .wantToSeeFilterContainer > p{margin-top: 8px; color: #fff}\n.filtering .wantToSeeFilterContainer p span{text-decoration: underline; cursor: pointer;}\n\n.filtering .filterContainer .filter .filterTitle{\n\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.filtering .filterContainer .filter .optionsContainer{\n    display: none;\n    position: absolute;\n    top: 49px;\n    left: 0;\n    z-index: 11;\n    width: max-content;\n    max-width: 220px;\n    padding: 17px 0 13px;\n    border-radius: 5px;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);\n    border: solid 1px #dbdbdb;\n    background-color: #fff;\n}\n.filtering .filterContainer .filter.disabled{\n    background: rgba(51, 51, 51, 0.1);\n}\n\n.filtering .filterContainer .noResultsFound{\n    display: none;\n    position: absolute;\n    top: 48px;\n    left: 0;\n    z-index: 11;\n    width: max-content;\n    max-width: 220px;\n    padding: 17px 32px 13px 17px;\n    border-radius: 5px;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);\n    border: solid 1px #dbdbdb;\n    background-color: #fff;\n}\n.filtering .filterContainer .noResultsFound.hidden{display: none!important;}\n/*.filtering .filterContainer .filter .optionsContainer .option.disabled{display: none!important;}*/\n.filtering .filterContainer .filter .optionsContainer > div{\n    display: flex;\n    align-items: flex-start;\n    padding: 0 32px 0 16px;\n    margin-bottom: 10px;\n}\n.filtering .optionsContainer hr{\n    height: 2px;\n    border: solid 1px #dbdbdb;\n}\n.filtering .optionsContainer hr:last-of-type{display: none;}\n.filtering .filterContainer .filter .optionsContainer > div[ab-filter] .tickIcon.active{display:none; }\n  \n.filtering .tickIcon{margin-right:10px}\n\n.filtering .filter.open .filterTitle i{\n    transform: rotate(180deg);\n}\n.filtering .croFiltering .filteringHeader{\n    position: relative;\n    height: 48px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #5F2878;\n    border-bottom: 1px solid #DBDBDB;\n    border-radius: 5px 5px 0px 0px;\n    color: #fff;\n    font-family: 'VMCircularChatPTT';\n    font-weight: 700;\n    font-size: 16px;\n}\n.filtering .croFiltering .closeFilters{\n    display: none;\n    position: absolute;\n    top: 50%;\n    left: 10px;\n    transform: translateY(-50%);\n    color: #fff;\n    font-size: 20px;\n}\n.filtering .croFiltering .filteringHeader p img{\n    margin-right: 5px;\n    vertical-align: baseline;\n}\n\n.filtering .clearFilters.desktopOnly{\n    cursor: pointer;\n    text-decoration: underline;\n    font-family: 'VMCircularChatPTT';\n    font-size: 16px;\n    line-height: 24px;\n    font-weight: 450;\n    color: #5F2878;\n    text-align: center;\n}\n.filtering .filterContainer .filter.disabled .optionsContainer{display: none!important;}\n@media (min-width: 48rem){\n    .filtering .filterContainer{\n        padding-right: 3rem;\n        padding-left: 3rem;\n        max-width: 75rem;\n    }\n    .filtering .mobileOnly,\n    .filtering .optionsContainer hr{display: none!important;}\n}\n\n@media (max-width:768px){\n    .filtering .desktopOnly{display: none!important;}\n    .filtering #__evo-root .__evo-overlay{z-index: 10!important;}\n    .filtering #__evo-root.__evo-partner .__evo-tab{top:auto; bottom:64px!important}\n    .filtering .croFiltering{\n        position: fixed;\n        z-index: 12;\n        bottom: -283px;\n        width: 100%;\n        max-height: 100vh;\n        margin: auto;\n        background-color: #fff;\n    }\n    .filtering .filterContainer{\n        flex-direction: column;\n        justify-content: flex-start;\n        margin-top: 0;\n        padding-left: 17px;\n        padding-right: 15px;\n        overflow-y: scroll;\n        max-height: calc(100vh - 180px);\n    }\n\n    .filtering .filterContainer::-webkit-scrollbar{display: none;}\n    .filtering .filterContainer .filter{\n        height: max-content;\n        margin: 0 16px;\n        background: #fff;\n        border: 0;\n        border-bottom: 1px solid #DBDBDB;\n        border-radius: 0;\n        padding: 18px 0 10px 0;\n        width: 100%;\n        max-width: none;\n        border-radius: 0;\n        box-shadow: none;\n    }\n\n    .filtering .filterContainer .filter.active {\n        border-top: 0;\n    }\n    .filtering .filterContainer .filter.disabled.open{border-bottom: none;}\n    .filtering .filterContainer .filter .filterTitle{\n        padding-left: 10px;\n        padding-right: 10px;\n    }\n    .filtering .filterContainer .filter .optionsContainer{\n        position: relative;\n        top: auto;\n        left: auto;\n        z-index: inherit;\n        border: 0;\n        box-shadow: none;\n        padding: 17px 0 13px 10px;\n    }\n\n    .filtering .filterContainer .filter .optionsContainer .option{\n        padding: 0;\n    }\n\n    .filtering .filterContainer .noResultsFound {\n        position: relative;\n        top: 10px;\n        left: auto;\n        width: 100%;\n        max-width: none;\n        padding: 17px 32px 13px 10px;\n        border-radius: 0;\n        box-shadow: none;\n        border: 0;\n        background-color: rgba(51, 51, 51, 0.1);\n    }\n\n    .filtering .ctaContainer{\n        padding-left: 1rem;\n        padding-right: 1rem;\n    }\n    .filtering .ctaContainer > p{\n        margin: 16px auto;\n        text-decoration: underline;\n        font-family: 'VMCircularChatPTT';\n        font-size: 16px;\n        line-height: 24px;\n        font-weight: 450;\n        color: #5F2878;\n        text-align: center;\n    }\n\n    .filterDimArea{\n        display: none;\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100vw;\n        height: 100vh;\n        z-index: 11;\n        background-color: rgba(0, 0, 0, 0.15);\n    }\n}\n/**END OF FILTERS CSS**/</style>", "selector": "head", "dependencies": [], "type": "append", "id": "08A17434-6B45-4966-B86F-74E0A062F026"}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "23429050852", "integrationSettings": null}], "id": "23405861812", "weightDistributions": null, "name": "[A/B] CSCRO-961 Filtering", "groupId": null, "commitId": "23673000316", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["23061480548"], "experiments": [{"weightDistributions": [{"entityId": "23386250830", "endOfRange": 10000}], "audienceName": "Journey: create-basket,Journey: original2,merkleqa=true", "name": "[QA] [A/B] Merkle 13  - Stream Optimisation", "bucketingStrategy": null, "variations": [{"id": "23340701294", "actions": [{"viewId": "23061480548", "changes": [{"dependencies": [], "type": "custom_code", "id": "26CFB34A-001C-4DF2-99E4-833F9145B375", "value": function($){((window, document) => {
    "use strict";
    let $timerA = window.setInterval(function() {
        let MainList = window.dataLayer;
        let $ = window.$;
		let feeParagraph = document.querySelector("#addTvStreamForm >.box.content-box > .w-75.mb-5 > .text-center.mt-5.m-0 p.vm-body-book");
		let packs = document.querySelectorAll("#tvPacks .col-12 label.option-checkbox input[type=hidden]").length>6;
        let mainCTAs = document.querySelector("#stream-subscription-submit button");
        if (typeof $ == "function" && MainList && feeParagraph && packs && mainCTAs) {
            window.clearInterval($timerA);
            console.log("Test 2 Tv Stream Variant - Optimizely");
			$("body").addClass("stream-v1");

			var feeCopy = feeParagraph.textContent;
            
            var showMoreSelected = false;
            var pageView = window.dataLayer.filter(d => d.event === 'pageview')[0];
            var intent = pageView.page.intent;
			var journey = pageView.page.journey;
			var packOrder = ['BT Sport', 'Sky Cinema HD', 'Essential Entertainment', 'Sky Sports HD', 'Sky Sports & Cinema HD', 'Netflix', 'Disney+', 'Kids Pick', 'Starzplay', 'LIONSGATE+'];

            if(journey=='quickCheckout') $("#progress-bar").addClass("affiliate");
			
			//if (intent !== 'volt') {
				
				function font(family) {
					var fontName = '';
				    if(intent === 'volt') {
						fontName = '';
					} else {
						var fontName = '';
						switch(family) {
							case 'book':
								fontName = 'cro-circular-chat-book';
								break;
							case 'light':
								fontName = 'cro-circular-whisper-light';
								break;
							case 'medium':
								fontName = 'cro-circular-natter-medium';
								break;
							case 'bold':
								fontName = 'cro-circular-shout-bold';
								break;
							case 'black':
								fontName = 'cro-circular-yell-black';
								break;
							default:
								fontName = 'cro-circular-whisper-light';
								break;
						}
					}
					return fontName;
				}
	            
				$('#add-tv-stream .page-header h1').html('Add Stream from Virgin Media');
				$('#add-tv-stream .page-header h1').addClass(`${font('light')}`);
				$('#add-tv-stream .page-header h1').after(`<h2 class="vm-h2 fw-300">Stream is our new entertainment service. <br> Pay less to access TV and subscriptions all in one place.</h2>`);
						
				var contentBox = $('.box.content-box.mb-5');
				
				$(contentBox).children().each(function(i,el) {
					if(i === 0) { //promotion ribbon
						$(el).find('.vm-body-book').addClass('lh-23');
					} else if(i === 1) { // promotion banner
						$(el).addClass('cro-stream-banner');
					} else if(i === 2) { // promotion banner copy
						//$(el).addClass('d-none');
						$(el).removeClass('w-75').addClass('w-83');
						$(el).children().addClass('f-16').addClass('lh-20').addClass('banner-copy');
						$(el).children().html(`<p class="mb-0"><span class="${font('light')}">Get over 40 channels and your favourite apps at </span>
            			<span class="vm-body-book ${font('book')}">no extra cost each month. </span>
            			</p><p class="vm-body-book ${font('book')}">${feeCopy}</p><p class="mb-2 ${font('light')}">Just plug the Stream box into your telly, kick back and, well, stream on.</p>`);
					} else if (i === 3) { // banner tilees
						$(el).addClass('mt-5');
						$(el).removeClass('mx-auto');
						$(el).addClass("banner-tile");
						$(el).removeClass("mt-5");
						$(el).find('.d-flex.flex-column.col-lg-4').addClass('col-12').addClass('col-sm-6');
						$(el).find('.d-flex.flex-column.text-center').each(function(e, pl) {
							if (e === 0) {
								$(pl).find('span:eq(0)').html(`TV channels and apps`);
								$(pl).find('span:eq(1)').removeClass('m-auto').addClass('tile-body').html(`Get over 40 free channels and your favourite apps, from Catch up and On Demand TV to streaming apps and music.`);
							} else if (e === 1) {
								$(pl).find('span:eq(0)').html(`Flexible entertainment`);
								$(pl).find('span:eq(1)').removeClass('m-auto').addClass('tile-body').html(`Get all entertainment subscriptions like Netflix and Disney+ on a fuss-free rolling contract, so it\'s easy to swap them every month.`); 
							} else if (e === 2) {
								let prcnt = $(pl).find('span:eq(0)').text().trim().split(" ")[1];
								$(pl).find('span:eq(0)').html(`Get ${prcnt} Stream credit`);
								$(pl).find('span:eq(1)').removeClass('m-auto').addClass('tile-body').html(`Pay only for what you want, nothing more. Plus, get ${prcnt} credit back on entertainment subscriptions you add to Stream.`);
							}
						});
					} else if (i === 5) { // credit banner tile 
						$(el).html(`<div class="${font('light')} credit-header fw-300">Add your favourite subscriptions</div>`)
					} else if (i === 6 && $("#creditDiscount").length>0) { // stream 105 credit banner
						const percnt = $(el).find('p.h3').text().trim().split(" ")[0];
					    $(el).find('p.h3').text(`${percnt} monthly savings`).addClass(`${font('medium')}`).addClass('f-18').addClass('lh-23');
						$(el).find('p.mb-3.mx-auto').addClass('lh-20').html(`Get ${percnt} Stream credit back on every subscription you add to Stream.`);
						//$(el).find('p.vm-body-small').addClass('d-none');
					} else if ((i === 6 && $("#creditDiscount").length==0) || (i == 7 && $("#creditDiscount").length>0)) { //add entertainment subscriptions
						var tvPacks = $(el).find('#tvPacks');
						if (tvPacks.length === 0) {
							return;
						}
						
						var warningInfo = $('#collapse-container-payment-section #payment-section-dropdown').children().first();
						
						$(warningInfo).css("margin", "0");
						$(warningInfo).find('p.mt-3').removeClass('f-16').addClass('f-14').addClass('lh-18').addClass('pt-1');
						
						var orderedPacks = `<div id="orderedtvPacks" class="mt-3 pt-4 pack-wrapper"><div class="d-flex flex-wrap pack-wrapper">`;
						
						packOrder.forEach(function(ord, i) {
							$(tvPacks).children().children().each(function(k, ad) {
								if ($(ad).find('.card-title').text() === ord) {
									orderedPacks += '<div class="d-flex d-md-block col-6 col-md-3 p-2px">' + $(ad).html() + '</div>';
								}
							});
						});
						orderedPacks += '</div></div>';
						$(el).before($(warningInfo))
						$(el).before($(orderedPacks));

						var toggleHtml = `<div id="review-included-dropdown" class="d-flex collapse-trigger justify-content-start drop-header collapsed mt-12" data-toggle="collapse" data-target="#cro-payment-section-dropdown" aria-expanded="false" aria-controls="cro-payment-section-dropdown">
				              <div class="mb-3 mt-5 m-auto" style="line-height: 1.8em;">
				                <div class="${font('book')}" id="showMore" style="color: #5f2878;">
				                	<i class="drop-arrow fa fa-angle-down spacing-left-xs align-self-center animate-arrow-down"></i>
				                	<span class="hover-underline clickable">Show all</span>
				                </div>
				              </div>
				            </div>`;

						$(el).before(`<div id="cro-collapse-container-payment-section" class="mt-1 mb-4">` + toggleHtml + `</div>`);
						
						$(el).addClass('d-none');

						document.getElementById("review-included-dropdown").onclick = function() {showMoreFunc()};
						
						function showMoreFunc() {
							//console.log("showMore =", showMoreSelected)
							if (showMoreSelected) {
								$("#showMore").find('.hover-underline').html("Show all");
								setTimeout(function() {
									$("#showMore").find('.drop-arrow').removeClass("animate-arrow-up").addClass("animate-arrow-down");
								}, 100);
								$("#showMore").find('.drop-arrow').removeClass("fa-angle-up").addClass("fa-angle-down");
								showMoreSelected = false;
								$('#orderedtvPacks').children().children(":not(.streamV2_notification)").each(function(k, ad) {
									if (k > 3) {
										$(ad).removeClass('d-flex').removeClass('d-md-block').removeClass('d-show-animate').addClass('d-none-animate');
									}
								});
								$("#orderedtvPacks .mt-4.pt-4").hide();
							} else {
								$("#showMore").find('.hover-underline').html("Show less");
								setTimeout(function() {
									$("#showMore").find('.drop-arrow').removeClass("animate-arrow-down").addClass("animate-arrow-up");
								}, 100);
								
								$("#showMore").find('.drop-arrow').removeClass("fa-angle-down").addClass("fa-angle-up");
								showMoreSelected = true;
								$('#orderedtvPacks').children().children(":not(.streamV2_notification)").each(function(k, ad) {
									if (k > 3) {
										$(ad).addClass('d-flex').addClass('d-md-block').removeClass('d-none-animate').addClass('d-show-animate');
									}
								});
								$("#orderedtvPacks .mt-4.pt-4").show();
							}
							
						}

					} 
				});
				
				function revampCard(ad, k) {
					$(ad).find('.font-weight-bold').removeClass('font-weight-bold');
					$(ad).find('.card-text.d-inline-block.pb-3').removeClass('pb-3').addClass('pb-2');
					$(ad).find('.card-body').children().next().removeClass('mt-auto').removeClass('pt-4').addClass('pt-2');
					var monthlyPrice = $(ad).find('.vm-body-book').children().next().first().text();
					if (monthlyPrice !== "") {
						$(ad).find('.vm-body-book').addClass('pt-4').addClass('pb-3').addClass('lh-18');
						$(ad).find('.vm-body-book').children().next().first().text(monthlyPrice.replace(" a month", ""));
						$(ad).find('.vm-body-book').children().next().next().text(" a month*");
						$(ad).find('.vm-body-book').children().next().after('<br>');
					} else {
						$(ad).find('.vm-body-book').addClass('pt-4').addClass('pb-4').addClass('lh-18');
						monthlyPrice = $(ad).find('.vm-body-book').children().first().text();
						$(ad).find('.vm-body-book').children().first().text(monthlyPrice.replace(" a month", ""));
						$(ad).find('.vm-body-book').children().first().after('<p class="d-inline-block"> a month</p>');
						$(ad).find('.vm-body-book').children().first().removeClass('pb-3').addClass('pb-2').addClass('bigFont');
						$(ad).find('.vm-body-book').children().first().after('<br>')
					}
					//$(ad).find('.checkmark').attr("data-event-label", "Engaged with entertainment pack: " +packOrder[k]);
					
				}
				
				$('#orderedtvPacks').children().children().each(function(k, ad) {
					revampCard(ad, k);
					if (k > 3) {
						$(ad).removeClass('d-flex').removeClass('d-md-block').addClass('d-none-animate');
					}
				});

				$(".banner-tile").nextUntil("#2single1comboNotification").not("#creditDiscount").insertBefore('.banner-tile');

				$(".box.content-box.mb-5 > .mt-4.pt-4:nth-child(6)").insertBefore("#orderedtvPacks .pack-wrapper .col-6.col-md-3.p-2px:nth-child(5)").addClass("col-12");

			//}

			$(".stream-selection-card").click(function(e){
				e.stopImmediatePropagation();
				if (!e.target.classList.contains("checkmark") && !e.target.classList.contains("stream-modal-trigger"))	$(this).find(".checkmark")[0].click();
			})

			$("#orderedtvPacks .col-6 p.card-text > a.stream-modal-trigger").click(function(e){
				let modalID = $(this).attr("id").split("_")[1];
				//console.log(modalID)
				if(modalID!=="500103" && modalID!=="500101") $("#modal_"+modalID).show();
				else $("#streamingModal_"+modalID).show();
			})

			$(".modal button.close, .modal .modal-footer button").click(function(){
				$(this).closest(".modal").hide();
			})
			$(".banner-tile > .row > .d-flex:last-child > p.d-flex > span.tile-body").text("Pay only for what you want, nothing more. Plus, get 10% credit back on entertainment subscriptions you add to Stream.");

            function trackMerkleGA (eventAction, eventLabel){
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    "event": "siteInteraction",
                    "eventCategory": "a/b testing",
                    "eventAction": `${eventAction}`,
                    "eventLabel": `${eventLabel}`,
                    "eventValue": 1,
                });
            }

            $("#stream-subscription-submit button.btn-primary").click(()=>{
                trackMerkleGA("merkle-13","continue with stream")
            });
            $("#stream-subscription-submit button.skip-button").click(()=>{
                trackMerkleGA("merkle-13","continue without stream")
            });
            
        }
    }, 500);
})(window, document);
}}, {"value": "<style>#progress-bar:not(.affiliate),\n/*.box.content-box.mb-5 > .mt-4.pt-4:nth-child(6),*/\n#orderedtvPacks .mt-4.pt-4{\n\tdisplay: none;\n\tmargin-bottom: 1.5rem!important;\n    padding-left: 0;\n    padding-right: 0;\n}\n#creditDiscount{\n\tmargin-top: 3rem!important;\n    margin-bottom: 6rem!important;\n}\n.d-none {\n\tdisplay: none !important;\n}\n\n.d-none-animate {\n  display: none;\n  transition: transform 1s linear;\n}\n\n.d-show-animate {\n  display: block;\n  transition: transform 1s linear;\n}\n\n.cro-circular-chat-book {\n  font-family: \"VM Circular Book\",sans-serif !important;\n}\n\n.cro-circular-whisper-light {\n  font-family: \"VM Circular Light\",sans-serif !important;\n}\n\n.cro-circular-natter-medium {\n  font-family: \"VM Circular Medium\",sans-serif !important;\n}\n\n.cro-circular-shout-bold {\n  font-family: \"VM Circular Bold\",sans-serif !important;\n}\n\n.cro-circular-yell-black {\n  font-family: \"VM Circular Black\",sans-serif !important;\n}\n\n.fw-300 {\n\tfont-weight: 300 !important;\n}\n\n.fw-500 {\n\tfont-weight: 500 !important;\n}\n\n.tile-body {\n\tpadding-top: 8px;\n\tline-height: 24px;\n}\n\n#add-tv-stream .page-header h1 {\n\tfont-size: 36px;\n\tline-height: 46px;\n}\n\n#add-tv-stream .page-header h2 {\n\tfont-size: 24px;\n\tline-height: 30px;\n}\n\n.banner-tile {\n\tdisplay: flow-root !important;\n\tpadding-left: 2rem;\n}\n\n.credit-header {\n\tfont-size: 28px;\n\tline-height: 36px;\n}\n\n.cro-stream-banner {\n\t/*content: url(https://www.virginmedia.com/content/dam/virginmedia/dotcom/images/ABtest/cro/desktop-tv-stream-banner.png) !important;*/\n}\n\n.d-flex.flex-column.text-center span.vm-body-book {\n\tline-height: 23px;\n}\n\n.f-18 {\n\tfont-size: 18px !important;\n}\n\n.lh-18 {\n\tline-height: 18px !important; \n}\n\n.lh-20 {\n\tline-height: 20px !important; \n}\n\n.lh-23 {\n\tline-height: 23px !important;\n}\n\n.p-1px {\n\tpadding: 1px !important;\n}\n\n.p-2px {\n\tpadding: 4px !important;\n}\n\n.w-83 {\n\twidth: 83% !important;\n}\n\n.mt-12 {\n\tmargin-top: 12px !important;\n}\n\n.f-14 {\n\tfont-size: 14px !important;\n}\n\n.lh-18 {\n\tline-height: 18px !important;\n}\n\n.banner-tile {\n\tmargin-top: 23px !important;\n}\n\n#orderedtvPacks .card, \n#cro-payment-section-dropdown .card {\n\tmargin: 1px !important;\n}\n\n.card-body {\n    padding-left: 4px !important;\n    padding-right: 4px !important;\n}\n\n#orderedtvPacks .card-title,\n#cro-payment-section-dropdown .card-title {\n\tfont-family: \"VM Circular Book\",sans-serif !important;\n\tfont-size: 16px;\n\tline-height: 20px;\n\tmargin-bottom: 0px;\n}\n\n#orderedtvPacks .card-text.pb-3.pt-4,\n#cro-payment-section-dropdown .card-text.pb-3.pt-4 {\n\tfont-family: \"VM Circular Book\",sans-serif !important;\n\tfont-size: 16px;\n\tline-height: 20px;\n\tmargin-bottom: 0px !important;\n    margin-top: 4px !important;\n}\n\n#orderedtvPacks .card-body,\n#cro-payment-section-dropdown .card-body {\n\tpadding: 0 4px !important;\n\tmargin-bottom: 16px;\n}\n\n#orderedtvPacks .card-body .vm-asterisk-red,\n#cro-payment-section-dropdown .card-body .vm-asterisk-red,\n.bigFont{\n\tline-height: 18px !important;\n    font-size: 28px !important;\n    font-weight: 600 !important;\n}\n\n#showMore {\n\tfont-size: 16px;\n\tline-height: 24px;\n}\n\n.option-checkbox {\n\tmargin: 16px !important;\n\tpadding-left: 16px !important;\n}\n\n@media screen and (min-width: 576px) and (max-width: 767px) {\n\t.ultimate-tile {\n\t\tmargin-top: 22px !important;\n\t}\n}\n\n@media screen and (max-width: 576px) {\n\t#add-tv-stream .page-header h1 {\n\t\tfont-size: 30px;\n\t\tline-height: 38px;\n\t}\n\t\n\t#add-tv-stream .page-header h2 {\n\t\tfont-size: 22px;\n\t\tline-height: 28px;\n\t\tpadding: 0 32px;\n\t}\n\t\n\t.product-promotion-ribbon .vm-body-book {\n\t\t\tfont-family: \"VM Circular Medium\",sans-serif !important;\n\t\t\tfont-size: 12.6px !important;\n\t\t\tline-height: 28px !important;\n\t}\n\t\n\t.banner-copy {\n\t\tfont-family: \"VM Circular Medium\",sans-serif !important;\n\t\t\tfont-size: 16px !important;\n\t\t\tline-height: 20px !important;\n\t}\n\t\n\t.d-flex.flex-column.text-center span.vm-body-book {\n\t\tline-height: 23px;\n\t}\n\t\n\t.d-flex.flex-column.text-center span.ultimate-tile {\n\t\tline-height: 24px;\n\t}\n\t\n\t.credit-header {\n\t\tfont-size: 24px;\n\t\tline-height: 30px;\n\t}\n\t\n\t.cro-stream-banner {\n\t\t/*content: url(https://www.virginmedia.com/content/dam/virginmedia/dotcom/images/ABtest/cro/mobile-tv-stream-banner.png) !important;*/\n\t}\n\n}\n\n@media screen and (min-width: 1440px) {\n\t.box {\n\t    padding-left: 120px;\n\t    padding-right: 120px;\n\t}\n}\n\n@media screen and (max-width: 575px) {\n\t.box .banner-tile{\n\t    padding-left: 32px !important;\n\t    padding-right: 32px !important;\n\t}\n}\n\n@media screen and (min-width: 576px) {\n\t.container {\n\t    padding-left: 32px !important;\n\t    padding-right: 32px !important;\n\t}\n\t\n\t.pack-wrapper {\n\t\tmargin-left: -40px !important;\n\t\tmargin-right: -40px !important;\n\t}\n}\n\n@media screen and (min-width: 768px) {\n\t.container {\n\t    width: 700px !important;\n\t    max-width: 700px !important;\n\t}\n}\n\n@media screen and (min-width: 992px) {\n\t.container {\n\t    width: 928px !important;\n\t    max-width: 928px !important;\n\t}\n}\n\n@media screen and (min-width: 1200px) {\n\t.container {\n\t    width: 1136px !important;\n\t    max-width: 1136px !important;\n\t}\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "3D7826DD-6FA4-46A3-9A4E-F5D539E995CB"}]}], "name": "Original"}, {"id": "23386250830", "actions": [{"viewId": "23061480548", "changes": [{"dependencies": [], "type": "custom_code", "id": "F7655FE2-5E53-43E2-9584-7CE11B296BF8", "value": function($){//check if they are a 'non-volt' customer from the dataLayer    
function searchForPink(dataLayer, recursionDepth = 0) {
    if (!dataLayer || recursionDepth > 10) {
        return false;
    }
    for (const key in dataLayer) {
        if (typeof dataLayer[key] === "string" && dataLayer[key].indexOf("pink") >= 0) {
            return true;
        }
        if (typeof dataLayer[key] === "object") {
            const searchResult = searchForPink(dataLayer[key], recursionDepth + 1);
            if (searchResult) {
                return true;
            }
        }
    }
    return false;
}
//run code if they are not   
var utils = window.optimizely.get('utils');

utils.waitUntil(function () {
    return window.dataLayer !== undefined && document.querySelectorAll(".next-step-cta").length > 0;
}).then(function () {
    console.log("in merkle 13 with waitUntil")

    if (searchForPink(dataLayer) == false) {

        // Select the node that will be observed for mutations
        var targetNode = document.querySelector('.box.content-box');

        // Options for the observer (which mutations to observe)
        var config = {
            childList: true,
            subtree: true
        };
        // Callback function to execute when mutations are observed
        var mpxChange = function () {
            console.log("in merkle 13 8-3-2023");

            // remove the progress bar
            document.getElementById("progress-bar").remove();

            // change the main title
            document.querySelector(".vm-h1").innerText = "Add Stream from Virgin Media";

            // change the first text paragraph
            document.querySelector(".f-16.mb-2").remove();
            var mpxFirstTextDiv = document.querySelector(".text-center.mt-5.m-0");
            mpxFirstTextDiv.style.cssText =
                "margin-top: 2rem !important; text-align: left !important";

            var mpxFirstTextParag =
                '<p class="vm-body-book cro-circular-chat-book mpx-first-text">No smart TV? No problem!</p>';
            mpxFirstTextDiv.insertAdjacentHTML("beforebegin", mpxFirstTextParag);

            function updateParagraph() {
                var mpxSecondP = document
                    .querySelectorAll(".vm-body-book")[3]
                    .innerText.toLowerCase();

                var mpxfinal = mpxSecondP.substring(0, mpxSecondP.lastIndexOf(" "));

                var x =
                    '<span class="vm-body-book" style="" data-message-code="addtvstream.stream.fee(${streamActivationFee)">' +
                    mpxfinal +
                    "." +
                    "</span> ";

                var y =
                    '<span class="mb-0 f-16 mpx-second-text">Add Stream to your broadband at<span class="vm-body-book"> no extra cost per month, </span> just </span> ';

                document.querySelector(".mb-0.f-16").innerHTML = y + "" + x;
                document.querySelectorAll(".vm-body-book")[4].remove();
            }

            updateParagraph();

            // create a second text paragraph
            var mpxSecondTextDiv =
                ' <div class="text-center mt-5 m-0 f-16 lh-20 banner-copy-two" style="line-height: 1.8em"><p class="vm-body-book cro-circular-chat-book">Why get Stream from Virgin Media?</p>   <div class="bundle-component-info d-flex"><img src="https://www.virginmedia.com/content/dam/virginmedia/dotcom/images/ABtest/cro/regular-check.svg" alt="tick" class="mpx-bundle-component-img" ><div><p class="mb-0">Get over <span class="vm-body-book cro-circular-chat-book">40 free TV channels </span> and your favourite streaming apps and music.</p></div></div><div class="bundle-component-info d-flex"><img src="https://www.virginmedia.com/content/dam/virginmedia/dotcom/images/ABtest/cro/regular-check.svg" alt="tick" class="mpx-bundle-component-img-middle" ><div><p class="mb-0">Get <span class="vm-body-book cro-circular-chat-book">entertainment subscriptions like Netflix, BT Sport, Sky Sports and Sky Cinema </span> with exclusive discounts on a 30-day rolling contract and pay only for what you want.</p></div></div><div class="bundle-component-info d-flex"> <img src="https://www.virginmedia.com/content/dam/virginmedia/dotcom/images/ABtest/cro/regular-check.svg" alt="tick" class="mpx-bundle-component-img" ><div><p class="mb-0">Plus, <a class="vm-body-link f-16" href="#" data-toggle="modal" data-target="#streamCredit">get Stream 10% credit</a> back on entertainment subscriptions you add to Stream.</p></div></div></div>';

            mpxFirstTextDiv.insertAdjacentHTML("afterend", mpxSecondTextDiv);
            mpxThirdText = document.querySelector(".banner-copy-two");
            mpxThirdText.style.cssText =
                "margin-top: 1.2rem !important; text-align: left !important";



            //remove the space for subscription component
            document.querySelectorAll('.mt-4.pt-4')[0].style.marginBottom = '8px'

            // change the buttons text - Subscription and add stlye
            document.querySelectorAll(".next-step-cta")[0].innerText =
                "Continue with subscriptions";

            // change the second button div
            var mpxSecondBtnDiv = document.querySelector(
                ".col.text-center.col.text-center.mb-3.mt-2"
            );

            mpxSecondBtnDiv.classList.remove("col");
            mpxSecondBtnDiv.innerHTML =
                '<button class="btn btn-primary m-0 mb-3 next-step-cta nostream">Continue without subscriptions</button>';

            // Add a title in the dropdown menu - Add your favourite subscriptions
            var mpxDropdownMenuTitle =
                '<div class="text-center mt-5 mb-3 mpx-dropdown-title">Add your favourite subscriptions<div>';
            var mpxFirstLine = document.querySelectorAll("hr.mb-5")[0];
            mpxFirstLine.insertAdjacentHTML("afterend", mpxDropdownMenuTitle);

            // create the stream buttons
            var mpxmainDiv = document.querySelector(".w-75.mb-5");
            var streamButtons =
                '<div id="mpx-stream-subscription-submit" style="display: block;"><div class="row w-100 mt-5 mx-0"><div class="col text-center"><button id="mpxStream" class="btn btn-primary m-0 mb-3">Continue with Stream</button><div class="text-center mb-3 mt-2"><button id="mpxNoStream" class="btn btn-primary m-0 mb-3 nostream" role="button" type="submit" formaction="/join/add-tv-stream/without-tv-stream">Continue without Stream</button></div></div></div></div>';

            mpxmainDiv.insertAdjacentHTML("afterend", streamButtons);

            //replace the symbols with asterisk

            var arr = Array.from(document.getElementsByTagName('sup'));

            arr.forEach(sup => {
                if (sup.innerText == "§") {
                    sup.innerHTML = "&#x2217;"
                    sup.style.cssText = "font-size: 86%; !important"
                }
            })

            /// change order cards 

            var yellowBanner = document.querySelector('.mt-4.pt-4')
            yellowBanner.classList.add('mpx-yellow-banner')

            var parent = document.querySelector('.d-flex.flex-wrap')
            var nickelodeon = document.getElementById('cardOption_6010').parentNode
            var disney = document.getElementById('cardOption_500103').parentNode
            var netflix = document.getElementById('cardOption_500101').parentNode
            var doubleSky = document.getElementById('cardOption_6013').parentNode
            var cinemaHd = document.getElementById('cardOption_6009').parentNode
            var sportsHd = document.getElementById('cardOption_6012').parentNode
            var multiPacks = document.getElementById('cardOption_6008').parentNode

            parent.insertBefore(disney, nickelodeon)
            parent.insertBefore(netflix, disney)
            parent.insertBefore(doubleSky, netflix)
            parent.insertBefore(cinemaHd, sportsHd)
            parent.insertBefore(multiPacks, sportsHd)
            parent.insertBefore(yellowBanner, sportsHd)

            //hide and show the dropdown menu
            var mpxDropdownMenu = document.getElementById(
                "collapse-container-payment-section"
            );
            var mpxDropdownMenuTitle = document.querySelector(".mpx-dropdown-title");
            var mpxSubscriptionsButtonsSection = document.getElementById(
                "stream-subscription-submit"
            );
            var mpxStreamBtn = document.getElementById("mpxStream");
            var mpxSubscriptionMenu = document.querySelector(".collapse");

            var subscriptionComponent = document.querySelector('.mb-5.mt-2')

            // onClick
            mpxStreamBtn.onclick = function (event) {
                event.preventDefault();
                mpxDropdownMenu.style.display = "block";
                mpxDropdownMenuTitle.style.display = "block";
                mpxSubscriptionsButtonsSection.style.display = "block";
                mpxSubscriptionMenu.classList.add("show");

                //anchor the subscription gallery 
                subscriptionComponent.scrollIntoView({
                    block: "center",
                    behavior: "smooth",
                    inline: "center",
                });

                document.querySelectorAll("hr.mb-5").forEach((line) => {
                    line.style.display = "block";
                });
                document.querySelector("hr.mt-3").style.display = "block";
                document.querySelectorAll("div.box.content-box")[1].style.cssText =
                    "margin-top: 0px;";

                // add dataLayer push for stream button
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    event: "siteInteraction",
                    eventCategory: "a/b testing",
                    eventAction: "merkle-13",
                    eventLabel: "continue with stream",
                    eventValue: 1,
                });
            };

            //hide text and elements if the dropdownmenu is hidden
            if (
                (document.getElementById(
                    "collapse-container-payment-section"
                ).style.display = "none")
            ) {
                document.querySelectorAll("hr.mb-5").forEach((line) => {
                    line.style.display = "none";
                });
                document.querySelector("hr.mt-3").style.display = "none";
                mpxDropdownMenuTitle.style.display = "none";
                document.querySelectorAll("div.box.content-box")[1].style.cssText =
                    "margin-top: -75px;";
                document.getElementById("review-included-dropdown").remove();
            }

            // add dataLayer push for without stream button
            var mpxNoStream = document.getElementById("mpxNoStream");

            mpxNoStream.onclick = function () {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    event: "siteInteraction",
                    eventCategory: "a/b testing",
                    eventAction: "merkle-13",
                    eventLabel: "continue without stream",
                    eventValue: 1,
                });
            };

            ///define the buttons and disable the with subscription
            var mpxWithSubscriptionBtn = document.querySelectorAll(
                ".btn.btn-primary.m-0.mb-3.next-step-cta"
            )[0];

            var mpxWithoutSubscriptionBtn = document.querySelectorAll(
                ".btn.btn-primary.m-0.mb-3.next-step-cta"
            )[1];

            mpxWithSubscriptionBtn.classList.add("disabled")


            //checkboxes
            var checkboxes = document.querySelectorAll(".option-checkbox.ml-3 input");
            var atLeastOneChecked = false;
            for (var i = 0; i < checkboxes.length; i++) {
                checkboxes[i].addEventListener('change', function () {
                    atLeastOneChecked = false;
                    for (var j = 0; j < checkboxes.length; j++) {
                        if (checkboxes[j].checked) {
                            atLeastOneChecked = true;
                            break;
                        }
                    }
                    if (atLeastOneChecked) {
                        mpxWithSubscriptionBtn.classList.remove('disabled')
                        mpxWithoutSubscriptionBtn.classList.add('disabled')
                    } else {
                        mpxWithSubscriptionBtn.classList.add('disabled')
                        mpxWithoutSubscriptionBtn.classList.remove('disabled')
                    }
                });
            }
            //cards
            var mpxAllCards = document.querySelectorAll('.card.text-center.align-self-sm-stretch.stream-selection-card');
            var atLeastOneCard = false;
            for (var i = 0; i < mpxAllCards.length; i++) {
                mpxAllCards[i].addEventListener('click', function () {
                    atLeastOneCard = false;
                    for (var j = 0; j < mpxAllCards.length; j++) {
                        if (mpxAllCards[j].classList.contains('green-border')) {
                            atLeastOneCard = true;
                            break;
                        }
                    }
                    if (atLeastOneCard) {
                        mpxWithSubscriptionBtn.classList.remove('disabled')
                        mpxWithoutSubscriptionBtn.classList.add('disabled')
                    } else {
                        mpxWithSubscriptionBtn.classList.add('disabled')
                        mpxWithoutSubscriptionBtn.classList.remove('disabled')
                    }
                });
            }


            function removeElem() {
                document.querySelector(".mx-auto").remove();
                document.querySelector(".font-book.f-21.mt-5").remove();
                document.querySelector(".bundle-component-desc").remove();
                document.querySelector(".vm-h5.next-step").remove();
                document.querySelectorAll(".spacing-bottom-xs")[0].remove();

                //remove the 10% box
                document.getElementById("creditDiscount").remove();
            }
            removeElem();


            //add dataLayer push for subscriptions buttons
            mpxWithSubscriptionBtn.onclick = function () {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    event: "siteInteraction",
                    eventCategory: "a/b testing",
                    eventAction: "merkle-13",
                    eventLabel: "continue with subscriptions",
                    eventValue: 1,
                });
            };


            mpxWithoutSubscriptionBtn.onclick = function () {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    event: "siteInteraction",
                    eventCategory: "a/b testing",
                    eventAction: "merkle-13",
                    eventLabel: "continue without subscriptions",
                    eventValue: 1,
                });
            };
        }

        mpxChange();
        // Create an observer instance linked to the callback function
        var observer = new MutationObserver(mpxChange);

        // Start observing the target node for configured mutations
        observer.observe(targetNode, config);
    }
});
}}, {"value": "<style>#streamInfo {\n        display: none\n    }\n.nostream {\n  background-color: #fff !important;\n  border-color: #ed0000 !important;\n  color: #ed0000 !important;\n}\n\n.nostream:hover {\nbackground-color: #fff !important;\nborder-color: #ed0000 !important;\ncolor: #ed0000 !important;\n}\n\n.mpx-bundle-component-img {\n   width: 24px;\n  height: 24px;\n  margin-right: 10px\n}\n\n.mpx-bundle-component-img-middle {\n  width: 24px;\n  height: 24px;\n  margin-right: 10px;\n}\n\n.mpx-d-flex {\n  display: flex!important;\n  margin-bottom: 10px;\n}\n\n#collapse-container-payment-section,\n#stream-subscription-submit,\n.text-center.mt-5.mb-3.vm-body-book.f-18 {\n  display: none;\n}\n\n\n.hover-underline.clickable {\n  margin-left: 5px;\n}\n\n.vm-h1 {\nmargin-bottom: 0px  !important;\n}\n\n.col-12.col-md-4.p-4.d-flex.d-md-block.mpx-cards {\ndisplay: none;\n}\n\n.col-12.col-md-4.p-4.d-flex.d-md-block.mpx-rest-cards {\ndisplay: none !important;\n}\n\n\n.mpx-first-text {\n  margin-top: 2rem;\n  margin-bottom: -10px;\n}\n  \n  .mb-0.f-16:first-child {\n    margin-bottom: 2.5rem !important;\n}\n  \n  #review-included-dropdown {\n    margin-top: -28px !important\n  }\n\n    .mt-4.pt-4.mpx-yellow-banner {\n  width: 100%;\n  margin: 2% 8px !important;\n  padding-top: 0px !important ;\n}  \n  \n  .disabled {\n     pointer-events: none; \n  background-color: #ed0000;\n    border-color: #ed0000;\n    color: #fff;\n    opacity: .65;\n }\n  \n  .bundle-component-info.d-flex {\n    margin-top: 8px;\n}\n  \n  .box.content-box.mb-5 {\n    margin-bottom: -22px !important;\n  }\n  \n  @media screen and (max-width: 425px) {\n  \n   \n    .bundle-component-info.d-flex {\n        margin-top: 16px;\n    }\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "E633E357-E6E9-4EC5-817C-E46484333C8B"}]}], "name": "Variation #1"}], "audienceIds": ["and", ["or", "23064800131", "23107030611"], "23378731038"], "changes": null, "id": "23365471377", "integrationSettings": null}], "id": "23424430070", "weightDistributions": null, "name": "[QA] [A/B] Merkle 13  - Stream Optimisation", "groupId": null, "commitId": "23484471173", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["23398600387"], "experiments": [{"weightDistributions": null, "audienceName": "Everyone else", "name": "Everyone", "bucketingStrategy": null, "variations": [{"id": "23522650670", "actions": [{"viewId": "23398600387", "changes": [{"dependencies": [], "type": "custom_code", "id": "940DDEB7-21D6-434D-AA45-C9404FBBF458", "value": function($){// Wrap code in an IIFE
   (function (window, document){
    // Invoking strict mode
    'use strict';

    // Run a timer here because of the dynamic JS rendering
    let $timerA = window.setInterval(function () {
        // Try to grab a test subject
        let subject = document.querySelector("vm-custom-tile-with-icon-small-section:nth-of-type(2)"),
            $ = window.$;
            const callNumber = `<div class='callUsNumber' style='margin-bottom:20px'>
                                    <h4 style='margin-top:20px'><strong>Need help ordering?</strong></h4>
                                    <p style='padding:20px 0;'>Please feel free to give us a call on 0800 952 0813</p>
                                    <p>Phone line opening hours: </p>
                                    <p>Monday to Friday 8am - 9pm</strong></p>
                                    <p>Saturday 8am - 8pm</p>
                                    <p>Sunday 8am - 6pm</p>
                                </div>`;
            const mutationObserver = function(){
                const targetNode = document.querySelector("vm-custom-tile-with-icon-small-section:nth-of-type(2)")
                    const config = { childList: true, subtree: true, attributes:true};
                    
                    const callback = function(mutationsList, observer) {
                        for(const mutation of mutationsList) {
                            if (mutation.type === 'childList') {
                                for(const node of mutation.addedNodes){
                                    if (!node.tagName) continue;                                    
                                        variant();
                                }
                            }
                        }
                    };
                    const observer = new MutationObserver(callback);
                    observer.observe(targetNode, config);
            }

            const variant = function(){
                if($("vm-modal").length>0 && $("vm-modal .modal__header h4").length>0 && $("vm-modal .modal__header h4").text().trim()=="Call us" && $(".callUsNumber").length==0){
                    $("vm-modal .modal__header").after(callNumber);
                }
                /*$(".callUsNumber .liveChatLink").click(()=>{
                    $("vm-custom-tile-with-icon-small-section:nth-of-type(2) > .vm-container > .vm-row > div:nth-child(4) a.tile-nav-link")[0].click();
                })*/
            }

            
        // Only proceed if subject is found in DOM
        if(subject && typeof $ == "function") {
            window.clearInterval($timerA);          
            $('body').addClass('call-popup-number');
            mutationObserver();
        }
       
    }, 500);
    /*setTimeout(function(){
        if($timerA !== null){
          clearInterval($timerA);
          if(typeof(error) === 'function'){
            error();
          }
        }
      }, 20000);*/
}(window, document));
}}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "23490751023", "integrationSettings": null}], "id": "23507481858", "weightDistributions": null, "name": "[100%] [no-track] CSCRO-1109 HP - Add the phone number to the call pop-up", "groupId": null, "commitId": "23580290843", "decisionMetadata": {"experimentPriorities": [[{"entityId": "23490751023", "endOfRange": null}]], "offerConsistency": null}, "policy": "equal_priority", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["23599010476"], "experiments": [{"weightDistributions": [{"entityId": "23499850129", "endOfRange": 5000}, {"entityId": "23498080120", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "[A/B] CSCRO-1029 - Priority Perks", "bucketingStrategy": null, "variations": [{"id": "23499850129", "actions": [], "name": "Original"}, {"id": "23498080120", "actions": [{"viewId": "23599010476", "changes": [{"dependencies": [], "type": "custom_code", "id": "F8AD2CDD-4700-4855-822C-B4C84B8D0E25", "value": function($){(function (window, document){
    'use strict';
    let $timerA = window.setInterval(function () {
        let subject = document.querySelector("vm-product-card-section .tile-wrapper .tile vm-media img"),
            angularLoaded = window.getAllAngularRootElements,
            salesCro = window.sales_cro,
            $ = window.$;
	
        if(subject && $ && salesCro && angularLoaded) {
            window.clearInterval($timerA);

            $("body").addClass("with-priority-banner");

            const priorityModalContent = [
                {
                    img: "https://www.virginmedia.com/content/dam/virginmedia/dotcom/images/ABtest/cro/priority-gig-tickets.png",
                    title: "Get gig tickets early",
                    text: "You can get Priority Tickets to thousands of gigs and events across the UK, up to 48 hours before general sale."
                },
                {
                    img: "https://www.virginmedia.com/content/dam/virginmedia/dotcom/images/ABtest/cro/priority-complimentary-cinema.png",
                    title: "Complimentary cinema tickets",
                    text: "A weekly complimentary cinema ticket, available to be used any day of the week."
                },
                {
                    img: "https://www.virginmedia.com/content/dam/virginmedia/dotcom/images/ABtest/cro/priority-eat-offers.png",
                    title: "Eat and Drink offers",
                    text: "Giveaways and promotions across the nation."
                },
                {
                    img: "https://www.virginmedia.com/content/dam/virginmedia/dotcom/images/ABtest/cro/priority-prize-draws.png",
                    title: "Prize draws",
                    text: "Holidays, freebies, exclusive discounts and you can even win Gift Cards!"
                },
            ];

            const createPriorityPerk = (perkObj) =>{
                return `<div class='priority-perk-container'>
                    <div class='priority-perk-image' style="background-image:url('${perkObj.img}');"></div>
                    <div class='priority-perk-container-bottom'>
                        <h3 class='priority-perk-title'>${perkObj.title}</h3>
                        <p class='priority-perk-text'>${perkObj.text}</p>
                    </div>
                </div>`
            }



            const priorityModal = `<div class='priority_modal__body'>
                <p>Get Priority Tickets for thousands of gigs and events across the UK, as well as rewards, unique experiences, daily treats, prize draws and perks, all through the Priority app – at no extra cost. Here are some of our best perks:</p>
                <div class='priority-perks'>${priorityModalContent.map((perk) => createPriorityPerk(perk)).join("")}</div>
            </div>`;

            const checkTileNumber = () => {
            	return window.innerWidth > 1004 
                	? 2 
                    : (window.innerWidth <= 1004 && window.innerWidth >= 768
                    	? 1
                    	: 0)
            }
            let tileNumber = checkTileNumber();
    
            const hasTilerNumberUpdated = () => tileNumber !== checkTileNumber();
            
            const updateTileNumber = () => 	tileNumber = checkTileNumber();
            
            if(hasTilerNumberUpdated()){
            	updateTileNumber();
            }

            let intervalId = undefined;
            let isAnimating = false;

            const runAnimation = () => {
                isAnimating = true;
                intervalId = setInterval(() =>{
                    const currentShowingUspId = parseInt($('.priority-animation-container.fade-in').attr("animation-container-n"));
                    const compareTo = window.innerWidth < 768 ? 2 : 1;
                    const uspIdToShow = currentShowingUspId === compareTo ? 0 : currentShowingUspId + 1;
                    $('.priority-animation-container.fade-in').removeClass("fade-in").addClass("fade-out");
                    $(`.priority-animation-container[animation-container-n=${uspIdToShow}]`).removeClass("fade-out").addClass("fade-in");
                }, 3000)
                return intervalId;
            }

            const priorityLogo = `<div class='priority-logo'><img src='https://www.virginmedia.com/content/dam/virginmedia/dotcom/images/ABtest/cro/priority-logo-cro.svg' alt='priority-logo' /></div>`;
            const priorityText = `<p>All of our customers can now get Priority!</p>`;
            const priorityList = `<ul>
                <li>Priority tickets</li>
                <li>Experiences</li>
                <li>Treats & rewards</li>
                <li>Prize draws</li>
            </ul>`;
            const priorityCta = `<div class='priority-find-out-more-cta'>Find out more</div>`;

            const priorityBannerMobile = `<div class='priority-banner-wrapper empty-row'>
                <div class='priority-banner-container priority-animation-wrapper'>
                    <div class='priority-animation-container fade-in' animation-container-n='0'>
                        ${priorityLogo}
                        ${priorityText}
                    </div>
                    <div class='priority-animation-container' animation-container-n='1'>
                        ${priorityList}
                    </div>
                    <div class='priority-animation-container' animation-container-n='2'>
                        ${priorityLogo}
                        ${priorityCta}
                    </div>
                </div>
            </div>`;

            const priorityBannerDeskTablet = `<div class='priority-banner-wrapper empty-row'>
                <div class='priority-banner-container'>
                    ${priorityLogo}
                    <div class='priority-animation-wrapper'>
                        <div class='priority-animation-container fade-in' animation-container-n='0'>
                            ${priorityText}
                        </div>
                        <div class='priority-animation-container' animation-container-n='1'>
                            ${priorityList}
                        </div>
                    </div>
                    ${priorityCta}
                </div>
            </div>`

            const priorityBanner = () => {
            	return `${tileNumber === 0 ? priorityBannerMobile : priorityBannerDeskTablet}
	            ${tileNumber === 2 
	            	? "<div class='empty-row'></div><div class='empty-row'></div>" 
	            	: (tileNumber === 1
	            		? "<div class='empty-row'></div>"
	            		: "")}`;
            }
    
            const changePositionBanner = () => {
                if(!$("vm-product-card-section .tile-wrapper .tile").eq(tileNumber).next().hasClass("empty-row")){
            		$("vm-product-card-section .tile-wrapper .tile").eq(tileNumber).after(priorityBanner);
                    if(!isAnimating){
                        runAnimation();
                    }
                    $(".priority-banner-container").on("click", () => {
                        $(".tile-wrapper .tile:first .contract-length a")[0].click();
                        window.setTimeout(() => {
                            $(".modal__container").addClass("modal-priority-perks");
                            $(".modal__header h4").text("All Virgin Media customers get Priority!");
                            $(".modal__body").html(priorityModal);
                        }, 100);
                        salesCro.fireOpti("1029_priority_modal_opened");
                        salesCro.fireGA("1029", "priority modal opened");
                    })
                }
            }
            changePositionBanner();
            $(window).on("resize", ()=> {
            	if(hasTilerNumberUpdated()){
            		updateTileNumber();
            		$(".empty-row").remove();
            		changePositionBanner();
            	}
            });
            
            const targetNodes = document.querySelectorAll(".tile-wrapper");
            const config = { childList: true };
            const callback = function(mutationsList, observer) {
                for(const mutation of mutationsList) {
                    if (mutation.type === 'childList') {
                        for(const node of mutation.addedNodes){
                            if (!node.tagName) continue;
                            if($(".tile-wrapper > div:first").hasClass("empty-row")){
                                $(".empty-row").remove();
                                changePositionBanner();
                            }
                        }
                    }
                }
            };
            const observer = new MutationObserver(callback);
            targetNodes.forEach((targetNode, i) => observer.observe(targetNode, config));
           
            
        } 
    }, 500);
}(window, document));
}}, {"value": "<style>.with-priority-banner .empty-row{\n\theight: 5rem;\n    width: 100%;\n    max-width: 26.75rem;\n}\n\n.with-priority-banner .priority-animation-container{\n    opacity: 0;\n    box-sizing: border-box; /* required */\n    width: 100%; /* required */\n    flex: none; /* required */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.with-priority-banner .priority-animation-container:not([animation-container-n='0']){\n    margin-left: -100%; /* required */\n}\n\n.with-priority-banner .priority-banner-wrapper{\n\tposition: relative;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n}\n\n.with-priority-banner .priority-banner-container{\n\tbackground: #06189E;\n\tcolor: #FFFFFF;\n    width: unset;\n    padding: 1rem;\n    border-radius: 0.3125rem;\n  cursor: pointer;\n}\n\n.with-priority-banner .priority-animation-wrapper{\n    display: flex; /* required */\n    flex-flow: row nowrap; /* required */\n}\n\n/* Flare style */\n\n.with-priority-banner .tile-wrapper .tile.w-priority-flare .flare-wrapper{\n    display: flex;\n    flex-direction: column;\n    z-index: 1;\n    width: 4.5rem;\n}\n\n.with-priority-banner .tile-wrapper .tile.w-priority-flare .flare-wrapper .flare-inner{\n    height: 3.625rem;\n    width: 100%;\n    background: url(/assets/icons/blue.png) center bottom / cover no-repeat;\n}\n\n.with-priority-banner .tile-wrapper .tile.w-priority-flare .flare-wrapper .flare-inner span{\n    color: white;\n    padding: 0.2rem 0.5rem;\n    display: block;\n    max-width: 92%;\n    text-align: center;\n    font-size: .875rem;\n    font-family: VMCircularWhisperPTT, Arial, Helvetica, sans-serif;\n}\n\n/* Banner style */\n.with-priority-banner .priority-logo{\n    display: flex;\n}\n.with-priority-banner .priority-animation-container .priority-logo img{\n    width: 5.4375rem;\n}\n\n.with-priority-banner .priority-animation-container .priority-logo + p{\n    font-family: VMCircularChatPTT, Arial, Helvetica, sans-serif;\n    text-align: center;\n    max-width: 10.8125rem;\n}\n\n.with-priority-banner .priority-animation-container ul{\n    font-family: VMCircularChatPTT, Arial, Helvetica, sans-serif;\n    filter: invert(99%) sepia(100%) saturate(2%) hue-rotate(48deg) brightness(105%) contrast(101%);\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    max-width: 21.875rem;\n    margin: 0 auto;\n}\n\n.with-priority-banner .priority-find-out-more-cta{\n    background-color: #FFFFFF;\n    font-family: VMCircularShoutPTT, Arial, Helvetica, sans-serif;\n    padding: 0.5rem 2rem;\n    max-width: 10.5rem;\n    flex-shrink: 0;\n    border-radius: 6.25rem;\n    color: black;\n    display: flex;\n    text-decoration: none;\n    justify-content: center;\n    align-items: center;\n}\n\n/* Modal style */\n.modal-priority-perks .modal__footer{\n    display: none !important;\n}\n.modal-priority-perks .modal__header{\n    padding: 0 0.5rem;\n}\n.with-priority-banner .priority_modal__body > p{\n    padding: 0.5rem;\n}\n.with-priority-banner .priority_modal__body .priority-perks{\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.with-priority-banner .priority_modal__body .priority-perks .priority-perk-container{\n    max-width: 19rem;\n    width: 100%;\n    margin: 0.5rem auto;\n}\n\n\n.with-priority-banner .priority_modal__body .priority-perk-container .priority-perk-image{\n    height: 11.25rem;\n    width: 100%;\n    background-size: cover;\n}\n\n.with-priority-banner .priority_modal__body .priority-perk-container .priority-perk-container-bottom{\n    padding: 1.5rem;\n    border: 0.0625rem solid #DBDBDB;\n    border-radius: 0rem 0rem 0.25rem 0.25rem;\n    min-height: 11.875rem;\n}\n.with-priority-banner .priority_modal__body .priority-perk-container .priority-perk-container-bottom .priority-perk-title{\n    margin-bottom: 0.5rem;\n}\n\n\n@media only screen and (min-width: 48rem) {\n    .with-priority-banner .empty-row{\n        width: 19.9375rem;\n        max-width: unset;\n    }\n    .with-priority-banner .priority-banner-container{\n        display: flex;\n        align-items: center;\n    }\n    .priority-find-out-more-cta{\n        width: 10.5rem;\n    }\n}\n\n@media only screen and (min-width: 48rem) and (max-width: 62.75rem) {\n    .tile-wrapper{\n        max-width: 60.5625rem;\n        overflow: hidden;\n        margin: 0 auto;\n    }\n    .with-priority-banner .priority-banner-container{\n        width: 40.875rem;\n        margin-left: -0.5rem;\n    }\n}\n\n@media only screen and (min-width: 62.8125rem) and (max-width: 73.6875rem) {\n    .with-priority-banner .priority-banner-container{\n        width: 61.8125rem;\n        margin-left: -1rem;\n    }\n    .with-priority-banner .priority-banner-container{\n        padding: 1rem 4rem;\n    }\n\n    .with-priority-banner .priority-animation-container ul{\n        max-width: unset;\n    }\n}\n\n\n@media only screen and (min-width: 73.75rem) {\n    .with-priority-banner .priority-banner-container{\n        width: 69rem;\n        margin-left: -4rem;\n    }\n    .with-priority-banner .priority-banner-container{\n        padding: 1rem 4rem;\n    }\n    .with-priority-banner .priority-animation-container ul{\n        max-width: unset;\n    }\n}\n\n.fade-in {\n\t-webkit-animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;\n\t        animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;\n}\n\n.fade-out {\n\t-webkit-animation: fade-out 1s ease-out both;\n\t        animation: fade-out 1s ease-out both;\n}\n\n@-webkit-keyframes fade-in {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n@keyframes fade-in {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n@-webkit-keyframes fade-out {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}\n@keyframes fade-out {\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "E81AD2F7-8579-4613-8173-D80D73824AE8"}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "23480790068", "integrationSettings": null}], "id": "23511320136", "weightDistributions": null, "name": "[A/B] CSCRO-1029 - Priority Perks", "groupId": null, "commitId": "23643120131", "decisionMetadata": null, "policy": "single_experiment", "changes": [{"dependencies": [], "type": "custom_code", "id": "6DDCA0D0-0F3B-4AA3-AACC-4FD0F8F21457", "value": function($){(function (window, document){
    'use strict';
    let $timerA = window.setInterval(function () {
        let subject = document.querySelector("vm-product-card-section .tile-wrapper .tile vm-media img"),
            angularLoaded = window.getAllAngularRootElements,
            salesCro = window.sales_cro,
            $ = window.$;
	
        if(subject && $ && salesCro && angularLoaded) {
            window.clearInterval($timerA);

            const trackSelectCta = (el) => {
                $(el).addClass("w-tracking");
                $(el).find(".button-wrapper__primary button").on("click", ()=> salesCro.fireOpti("product_card_select_cta_clicked"));
            };
            
            const targetNodes = document.querySelectorAll(".tile-wrapper");
            const config = { childList: true };
            const callback = function(mutationsList, observer) {
                for(const mutation of mutationsList) {
                    if (mutation.type === 'childList') {
                        for(const node of mutation.addedNodes){
                            if (!node.tagName) continue;
                            if(node.classList.contains("tile") && !$(node).hasClass("w-tracking")){
                                trackSelectCta(node);
                            }
                        }
                    }
                }
            };
            const observer = new MutationObserver(callback);
            targetNodes.forEach((targetNode, i) => observer.observe(targetNode, config));

            $(".tile-wrapper .tile:not(.w-tracking)").each(function(i, node){
                trackSelectCta(node);
            });	
        } 
    }, 500);
}(window, document));
}}]}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["23599010476"], "experiments": [{"weightDistributions": [{"entityId": "23466362061", "endOfRange": 10000}], "audienceName": "optiqa = true", "name": "[QA] Test post-svc activation", "bucketingStrategy": null, "variations": [{"id": "23583980708", "actions": [{"viewId": "23599010476", "changes": []}], "name": "Original"}, {"id": "23466362061", "actions": [{"viewId": "23599010476", "changes": [{"dependencies": [], "type": "custom_code", "id": "A1967433-B47F-4EC3-86F0-49C09446F331", "value": function($){console.log("in post svc test");
}}]}], "name": "Variation #1"}], "audienceIds": ["and", "23197550032"], "changes": null, "id": "23597070530", "integrationSettings": null}], "id": "23522920887", "weightDistributions": null, "name": "[QA] Test post-svc activation", "groupId": null, "commitId": "23530740743", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["23084590691"], "experiments": [{"weightDistributions": [{"entityId": "23528730857", "endOfRange": 3334}, {"entityId": "23481782051", "endOfRange": 6667}, {"entityId": "23517111812", "endOfRange": 10000}], "audienceName": "Journey: quickCheckout", "name": "[AB] CSCRO-1087 Installation info links", "bucketingStrategy": null, "variations": [{"id": "23528730857", "actions": [{"viewId": "23084590691", "changes": [{"dependencies": [], "type": "custom_code", "id": "DEB89774-3EAC-495E-B387-8EA54CFC1CA4", "value": function($){// Wrap code in an IIFE
   (function (window, document){
    // Invoking strict mode
    'use strict';

    // Run a timer here because of the dynamic JS rendering
    let $timerA = window.setInterval(function () {
        // Try to grab a test subject
        let subject = document.querySelector(".self-install-home-delivery-option .selection-card > img[data-target='#installation-modal-2']"),
            subject2 = document.querySelector(".installation-selection-card-spacing > div.selection-card-wrapper:last-child .selection-card > img[data-target='#installation-modal-3']"),
            $ = window.$;

        const variant = function(){
            $(".self-install-home-delivery-option .selection-card > img[data-target='#installation-modal-2']").on("click", (e) => {
                window.sales_cro.fireOpti("info_link_click");
                window.sales_cro.fireGA("1087","info link click");
                window.sales_cro.fireGA("1087","qs info link click");
            });
            $(".installation-selection-card-spacing > div.selection-card-wrapper:last-child .selection-card > img[data-target='#installation-modal-3']").on("click", (e) => {
                window.sales_cro.fireOpti("info link click");
                window.sales_cro.fireGA("1087","info link click");
                window.sales_cro.fireGA("1087","engineer info link click");
            });

        }
            
        // Only proceed if subject is found in DOM
        if(subject && typeof $ == "function") {
            window.clearInterval($timerA);          
            $('body').addClass('installation-info-links');
            variant();
        }
       
    }, 500);
    setTimeout(function(){
        if($timerA !== null){
          clearInterval($timerA);
          if(typeof(error) === 'function'){
            error();
          }
        }
      }, 20000);
}(window, document));
}}]}], "name": "Original"}, {"id": "23481782051", "actions": [{"viewId": "23084590691", "changes": [{"dependencies": [], "type": "custom_code", "id": "B40237B8-27B2-49E0-AE8B-A86B6DF2E862", "value": function($){// Wrap code in an IIFE
   (function (window, document){
    // Invoking strict mode
    'use strict';

    // Run a timer here because of the dynamic JS rendering
    let $timerA = window.setInterval(function () {
        // Try to grab a test subject
        let subject = document.querySelector(".self-install-home-delivery-option"),
            subject2 = document.querySelector(".installation-selection-card-spacing > div.selection-card-wrapper:last-child"),
            checkoutEvent = dataLayer.filter((i)=>{if(i.event!==undefined )return i.event == "checkout"}),
            productCategory = checkoutEvent[0].ecommerce.checkout.products[0].category,
            $ = window.$;
        const variant = function(){
            const infoIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 27 27" version="1.1">
                <desc>Created with Lunacy</desc>
                <g id="Group-5-Copy-3" transform="translate(1 1)">
                    <path d="M6 1.63567C6 2.08579 5.83614 2.47101 5.50441 2.7862C5.17469 3.10447 4.77602 3.2631 4.31241 3.2631C3.8448 3.2631 3.44613 3.10447 3.11141 2.7862C2.77868 2.47101 2.61182 2.08579 2.61182 1.63567C2.61182 1.18555 2.77868 0.800324 3.11141 0.479988C3.44513 0.159653 3.8448 0 4.31241 0C4.77602 0 5.17469 0.160683 5.50441 0.479988C5.83614 0.800324 6 1.18555 6 1.63567M5.82015 12.489L5.63131 13.2883C5.06178 13.52 4.60616 13.6961 4.26844 13.8177C3.92973 13.9392 3.53505 14 3.08643 14C2.398 14 1.86145 13.8259 1.47977 13.4798C1.09709 13.1327 0.905246 12.6929 0.905246 12.1604C0.905246 11.9534 0.920233 11.7412 0.94821 11.5249C0.978185 11.3075 1.02415 11.0634 1.08709 10.7915L1.7985 8.19482C1.86145 7.94659 1.9154 7.71071 1.95837 7.48926C2.00233 7.26677 2.02431 7.06386 2.02431 6.88052C2.02431 6.54885 1.95737 6.3171 1.82448 6.18629C1.69159 6.0565 1.4398 5.99058 1.06411 5.99058C0.879267 5.99058 0.691424 6.02148 0.497585 6.07916C0.304746 6.13891 0.138884 6.19556 0 6.24912L0.190841 5.44776C0.656453 5.25309 1.10208 5.0852 1.52773 4.94614C1.95437 4.80606 2.35704 4.73705 2.73672 4.73705C3.42215 4.73705 3.94971 4.90803 4.3204 5.24897C4.69109 5.58991 4.87694 6.03281 4.87694 6.57769C4.87694 6.68996 4.86495 6.88876 4.83897 7.17304C4.81399 7.45733 4.76603 7.71792 4.69609 7.95586L3.98768 10.5412C3.92973 10.7493 3.87777 10.9862 3.83181 11.2529C3.78485 11.5187 3.76286 11.7216 3.76286 11.8576C3.76286 12.2006 3.8368 12.4344 3.98568 12.559C4.13655 12.6847 4.39434 12.7454 4.76103 12.7454C4.93389 12.7454 5.12973 12.7145 5.34754 12.6527C5.56336 12.5909 5.72323 12.5363 5.82015 12.489" transform="translate(9 5)" id="Fill-1" fill="#5f2878" stroke="none"/>
                    <path d="M25 12.5C25 19.4043 19.4035 25 12.5005 25C5.59648 25 0 19.4043 0 12.5C0 5.59568 5.59648 0 12.5005 0C19.4035 0 25 5.59568 25 12.5Z" id="Stroke-3" fill="none" stroke="#5f2878" stroke-width="2"/>
                </g>
            </svg>`

            $(".self-install-home-delivery-option .pink-installation-price").after(`<div class='about-wrapper about-self-install-wrapper spacing-bottom-s' data-target="#installation-modal-2" data-toggle="modal" >${infoIcon}<span class='self-install-info-link'> About self-install</a></div>`);

            $(".installation-selection-card-spacing > div.selection-card-wrapper:not(.self-install-home-delivery-option):last-child .pink-installation-price").after(`<div class='about-wrapper about-engineer-install-wrapper spacing-bottom-s' data-target="#installation-modal-3" data-toggle="modal" >${infoIcon}<span class='engineer-install-info-link'> About engineer install</a></div>`);
            
            if(productCategory.indexOf("solus")==-1){
                $(".self-install-home-delivery-option .selection-card .mt-auto .vm-body").text("You’ll get everything you need, plus simple step by step instructions")
            }
            
            $(".about-self-install-wrapper").on("click", (e) => {
                e.stopImmediatePropagation();
                $(".self-install-home-delivery-option .selection-card > img[data-target='#installation-modal-2']")[0].click();
                window.sales_cro.fireOpti("info_link_click");
                window.sales_cro.fireGA("1087","info link click");
                window.sales_cro.fireGA("1087","qs info link click");
            });
            $(".about-engineer-install-wrapper").on("click", (e) => {
                e.stopImmediatePropagation();
                $(".installation-selection-card-spacing > div.selection-card-wrapper:last-child .selection-card > img[data-target='#installation-modal-3']")[0].click();
                window.sales_cro.fireOpti("info link click");
                window.sales_cro.fireGA("1087","info link click");
                window.sales_cro.fireGA("1087","engineer info link click");
            });

        }
            
        // Only proceed if subject is found in DOM
        if(subject && subject2 && typeof $ == "function") {
            window.clearInterval($timerA);
          
            $('body').addClass('installation-info-links');
            console.log("in 1087")
            variant();
        }
       
    }, 500);
    setTimeout(function(){
        if($timerA !== null){
          clearInterval($timerA);
          if(typeof(error) === 'function'){
            error();
          }
        }
      }, 20000);
}(window, document));
}}, {"value": "<style>.installation-info-links .about-wrapper span{\n    font-family: \"VM Circular Light\",sans-serif;\n    color: #5F2878;\n}\n.installation-info-links .self-install-home-delivery-option .selection-card > img[data-target='#installation-modal-2'],\n.installation-info-links .installation-selection-card-spacing > div.selection-card-wrapper:last-child .selection-card > img[data-target='#installation-modal-3']{display: none!important;}\n\n@media (min-width:992px){\n    .installation-info-links .installation-selection-card-spacing > div.selection-card-wrapper:last-child .mt-auto{margin-top:0px!important;}\n    .installation-info-links .installation-selection-card-spacing > div.selection-card-wrapper:last-child .spacing-top-s{\n    margin-top:auto!important;\n    }\n}\n@media (min-width:1200px){\n    .installation-info-links .installation-selection-card-spacing > div.selection-card-wrapper:last-child .mt-auto{margin-top:30px!important;}\n    .installation-info-links .installation-selection-card-spacing > div.selection-card-wrapper:last-child .spacing-top-s{\n    margin-top:auto!important;\n    }\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "05A091BF-E874-4A52-A3B9-A2D7978F90F0"}]}], "name": "Variation #1 - info link"}, {"id": "23517111812", "actions": [{"viewId": "23084590691", "changes": [{"dependencies": [], "type": "custom_code", "id": "8E998E2F-1DCB-4C10-A7DF-33A7B06AB20B", "value": function($){// Wrap code in an IIFE
   (function (window, document){
    // Invoking strict mode
    'use strict';

    // Run a timer here because of the dynamic JS rendering
    let $timerA = window.setInterval(function () {
        // Try to grab a test subject
        let subject = document.querySelector(".self-install-home-delivery-option"),
            subject2 = document.querySelector(".installation-selection-card-spacing > div.selection-card-wrapper:last-child"),
            checkoutEvent = dataLayer.filter((i)=>{if(i.event!==undefined )return i.event == "checkout"}),
            productCategory = checkoutEvent[0].ecommerce.checkout.products[0].category,
            $ = window.$;
        const variant = function(){
            const infoIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 27 27" version="1.1">
                <desc>Created with Lunacy</desc>
                <g id="Group-5-Copy-3" transform="translate(1 1)">
                    <path d="M6 1.63567C6 2.08579 5.83614 2.47101 5.50441 2.7862C5.17469 3.10447 4.77602 3.2631 4.31241 3.2631C3.8448 3.2631 3.44613 3.10447 3.11141 2.7862C2.77868 2.47101 2.61182 2.08579 2.61182 1.63567C2.61182 1.18555 2.77868 0.800324 3.11141 0.479988C3.44513 0.159653 3.8448 0 4.31241 0C4.77602 0 5.17469 0.160683 5.50441 0.479988C5.83614 0.800324 6 1.18555 6 1.63567M5.82015 12.489L5.63131 13.2883C5.06178 13.52 4.60616 13.6961 4.26844 13.8177C3.92973 13.9392 3.53505 14 3.08643 14C2.398 14 1.86145 13.8259 1.47977 13.4798C1.09709 13.1327 0.905246 12.6929 0.905246 12.1604C0.905246 11.9534 0.920233 11.7412 0.94821 11.5249C0.978185 11.3075 1.02415 11.0634 1.08709 10.7915L1.7985 8.19482C1.86145 7.94659 1.9154 7.71071 1.95837 7.48926C2.00233 7.26677 2.02431 7.06386 2.02431 6.88052C2.02431 6.54885 1.95737 6.3171 1.82448 6.18629C1.69159 6.0565 1.4398 5.99058 1.06411 5.99058C0.879267 5.99058 0.691424 6.02148 0.497585 6.07916C0.304746 6.13891 0.138884 6.19556 0 6.24912L0.190841 5.44776C0.656453 5.25309 1.10208 5.0852 1.52773 4.94614C1.95437 4.80606 2.35704 4.73705 2.73672 4.73705C3.42215 4.73705 3.94971 4.90803 4.3204 5.24897C4.69109 5.58991 4.87694 6.03281 4.87694 6.57769C4.87694 6.68996 4.86495 6.88876 4.83897 7.17304C4.81399 7.45733 4.76603 7.71792 4.69609 7.95586L3.98768 10.5412C3.92973 10.7493 3.87777 10.9862 3.83181 11.2529C3.78485 11.5187 3.76286 11.7216 3.76286 11.8576C3.76286 12.2006 3.8368 12.4344 3.98568 12.559C4.13655 12.6847 4.39434 12.7454 4.76103 12.7454C4.93389 12.7454 5.12973 12.7145 5.34754 12.6527C5.56336 12.5909 5.72323 12.5363 5.82015 12.489" transform="translate(9 5)" id="Fill-1" fill="#5f2878" stroke="none"/>
                    <path d="M25 12.5C25 19.4043 19.4035 25 12.5005 25C5.59648 25 0 19.4043 0 12.5C0 5.59568 5.59648 0 12.5005 0C19.4035 0 25 5.59568 25 12.5Z" id="Stroke-3" fill="none" stroke="#5f2878" stroke-width="2"/>
                </g>
            </svg>`

            $(".self-install-home-delivery-option .pink-installation-price").after(`<div class='about-wrapper about-self-install-wrapper spacing-bottom-s' data-target="#installation-modal-2" data-toggle="modal" >${infoIcon}<span class='self-install-info-link'> About self-install</a></div>`);

            $(".installation-selection-card-spacing > div.selection-card-wrapper:not(.self-install-home-delivery-option):last-child .pink-installation-price").after(`<div class='about-wrapper about-engineer-install-wrapper spacing-bottom-s' data-target="#installation-modal-3" data-toggle="modal" >${infoIcon}<span class='engineer-install-info-link'> About engineer install</a></div>`);
            
            if(productCategory.indexOf("solus")==-1){
                $(".self-install-home-delivery-option .selection-card .mt-auto .vm-body").text("You’ll get everything you need, plus simple step by step instructions")
            }
            
            $(".about-self-install-wrapper").on("click", (e) => {
                e.stopImmediatePropagation();
                $(".self-install-home-delivery-option .selection-card > img[data-target='#installation-modal-2']")[0].click();
                window.sales_cro.fireOpti("info_link_click");
                window.sales_cro.fireGA("1087","info link click");
                window.sales_cro.fireGA("1087","qs info link click");
            });
            $(".about-engineer-install-wrapper").on("click", (e) => {
                e.stopImmediatePropagation();
                $(".installation-selection-card-spacing > div.selection-card-wrapper:last-child .selection-card > img[data-target='#installation-modal-3']")[0].click();
                window.sales_cro.fireOpti("info link click");
                window.sales_cro.fireGA("1087","info link click");
                window.sales_cro.fireGA("1087","engineer info link click");
            });

        }
            
        // Only proceed if subject is found in DOM
        if(subject && subject2 && typeof $ == "function") {
            window.clearInterval($timerA);
          
            $('body').addClass('installation-info-links');
            console.log("in 1087")
            variant();
        }
       
    }, 500);
    setTimeout(function(){
        if($timerA !== null){
          clearInterval($timerA);
          if(typeof(error) === 'function'){
            error();
          }
        }
      }, 20000);
}(window, document));
}}, {"value": "<style>.installation-info-links .about-wrapper span{\n    font-family: \"VM Circular Light\",sans-serif;\n    color: #5F2878;\n}\n.installation-info-links .selection-card-wrapper .vm-body-social,\n.installation-info-links .self-install-home-delivery-option .selection-card > img[data-target='#installation-modal-2'],\n.installation-info-links .installation-selection-card-spacing > div.selection-card-wrapper:last-child .selection-card > img[data-target='#installation-modal-3']{display: none!important;}\n\n@media (min-width:992px){\n    .installation-info-links .installation-selection-card-spacing > div.selection-card-wrapper:last-child .mt-auto{margin-top:0px!important;}\n    .installation-info-links .installation-selection-card-spacing > div.selection-card-wrapper:last-child .spacing-top-s{\n    margin-top:auto!important;\n    }\n}\n@media (min-width:1200px){\n    .installation-info-links .installation-selection-card-spacing > div.selection-card-wrapper:last-child .mt-auto{margin-top:30px!important;}\n    .installation-info-links .installation-selection-card-spacing > div.selection-card-wrapper:last-child .spacing-top-s{\n    margin-top:auto!important;\n    }\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "86C4D9BC-8FC1-458F-8991-F9C44B7B0A12"}]}], "name": "Variation #2 - info link + social proof hidden"}], "audienceIds": ["and", "23093261747"], "changes": null, "id": "23505022288", "integrationSettings": null}], "id": "23575621268", "weightDistributions": null, "name": "[AB] CSCRO-1087 Installation info links", "groupId": null, "commitId": "23505513308", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["23398600387"], "experiments": [{"weightDistributions": null, "audienceName": "Everyone else", "name": "Everyone", "bucketingStrategy": null, "variations": [{"id": "23598800475", "actions": [{"viewId": "23398600387", "changes": [{"dependencies": [], "type": "custom_code", "id": "7DF41BA5-417F-4D69-96F9-7791D94A3243", "value": function($){// Wrap code in an IIFE
   (function (window, document){
    // Invoking strict mode
    'use strict';

    // Run a timer here because of the dynamic JS rendering
    let $timerA = window.setInterval(function () {
        // Try to grab a test subject
        let subject = document.querySelector("vm-custom-tile-with-icon-small-section:nth-of-type(2)"),
            $ = window.$;
            const callUsTile = `<div _ngcontent-lff-c109="" class="callUsTile vm-col-xs-6 vm-col-sm-6 vm-col-md-4 vm-col-lg-2 ng-star-inserted"><div _ngcontent-lff-c109="" class="vm-tile-container"><a _ngcontent-lff-c109="" class="tile-nav-link" href="false" aria-haspopup="true" data-gtm-vis-has-fired-32205674_623="1"><vm-media _ngcontent-lff-c109="" mediatype="image" class="tile-nav-link__img ng-star-inserted" _nghost-lff-c8=""><!----><img _ngcontent-lff-c8="" loading="lazy" class="vm-media-container__image contain-media ng-star-inserted" alt="Call us" src="https://prod.ctassets.virginmedia.com/uploads/call_us_icon_d544a0a4d0.svg"><!----><!----><!----><!----><!----></vm-media><!----><div _ngcontent-lff-c109="" class="tile-nav-link-content ng-star-inserted"><p _ngcontent-lff-c109="" class="tile-nav-link__text">Call us</p></div><!----></a></div></div>`;

            const callUsModal = `<vm-modal _ngcontent-lff-c109="" _nghost-lff-c39="" class="ng-star-inserted callUsModal"><div _ngcontent-lff-c39="" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" class="modal modal--background"><div _ngcontent-lff-c39="" class="modal__margin modal--large"><div _ngcontent-lff-c39="" class="modal__container"><div _ngcontent-lff-c39="" class="modal__header ng-star-inserted"><span _ngcontent-lff-c39="" class="modal__close"><i _ngcontent-lff-c39="" class="far fa-fw fa-times"></i></span><h4 _ngcontent-lff-c39="">Call us</h4></div><div class="callUsNumber" style="margin-bottom:20px">
            <h4 style="margin-top:20px"><strong>Need help ordering?</strong></h4>
            <p style="padding:20px 0;">Please feel free to give us a call on 0800 952 0813</p>
            <p>Phone line opening hours:&nbsp;</p>
            <p>Monday to Friday 8am - 9pm</p>
            <p>Saturday 8am - 8pm</p>
            <p>Sunday 8am - 6pm</p>
            </div><!----><div _ngcontent-lff-c39="" class="modal__body clear-bg"><div _ngcontent-lff-c109=""><h4>Accessibility and extra support</h4>
            <br>
            <p>Our deaf, speech impaired and hearing impaired customers can contact us using the Relay UK app, or by calling us free on <strong>18001 0800 052 2164</strong>.
            <br>
            <br></p>
            <p><a href="https://www.relayuk.bt.com/relay-uk-services/relay-uk-app.html">Relay UK info</a>  </p>
            <br>
            Our British Sign Language users can get in touch via an interpreter using the Interpreters Live! video relay service.
            <br>
            <br>
            <p><a href="https://portal.starleaf.com/app_download?version=latest">Video relay info</a></p>
            </div><!----></div><div _ngcontent-lff-c39="" class="modal__footer"><!----><!----><!----></div></div></div></div></vm-modal>`;

            const mutationObserver = function(){
                const targetNode = document.querySelector("vm-custom-tile-with-icon-small-section:nth-of-type(2)")
                    const config = { childList: true, subtree: true, attributes: true};
                    
                    const callback = function(mutationsList, observer) {
                        for(const mutation of mutationsList) {
                            if (mutation.type === 'childList') {
                                for(const node of mutation.addedNodes){
                                    if (!node.tagName) continue;                                    
                                    if($("vm-custom-tile-with-icon-small-section:nth-of-type(2) .vm-row > div").length==3 && document.querySelector("vm-custom-tile-with-icon-small-section:nth-of-type(2) .vm-row > div:first-of-type vm-media img")!==null && $(".callUsTile").length==0){
                                        variant();
                                    }
                                    else if($("vm-custom-tile-with-icon-small-section:nth-of-type(2) .vm-row > div:not(.callUsTile,.expandNetworkTile,.blogTile)").length==4){
                                        $(".callUsTile, .callUsModal").remove();
                                    }
                                        
                                }
                            }
                        }
                    };
                    const observer = new MutationObserver(callback);
                    observer.observe(targetNode, config);
            }

            const variant = function(){               
                    $("vm-custom-tile-with-icon-small-section:nth-of-type(2) .vm-row").append(callUsTile);
                    const ngAttribute = document.querySelector("vm-custom-tile-with-icon-small-section:nth-of-type(2) .vm-row > div").attributes[0].name;
                    console.log(ngAttribute)
                    const ngAttributeForImg = document.querySelector("vm-custom-tile-with-icon-small-section:nth-of-type(2) .vm-row > div:first-of-type vm-media img").attributes[0].name;
                    console.log(ngAttributeForImg)
                    $(".callUsTile").attr(ngAttribute,"");
                    $(".callUsTile").find("*:not(img)").attr(ngAttribute,"");
                    $(".callUsTile").find("img").attr(ngAttributeForImg,"");                    

                    $("vm-custom-tile-with-icon-small-section:nth-of-type(2) .vm-container").append(callUsModal);
                    $(".callUsModal .callUsModal *").attr(ngAttribute,"");

                    $(".callUsTile").click((e)=>{e.preventDefault(); $(".callUsModal").show();})
                    $(".callUsModal .modal__close").click(()=>{$(".callUsModal").hide();})
            }

            
        // Only proceed if subject is found in DOM
        if(subject && typeof $ == "function") {
            window.clearInterval($timerA);          
            $('body').addClass('call-popup-number');
            console.log("in 1115");
            mutationObserver();
        }
       
    }, 500);
   /* setTimeout(function(){
        if($timerA !== null){
          clearInterval($timerA);
          if(typeof(error) === 'function'){
            error();
          }
        }
      }, 20000);*/
}(window, document));
}}, {"value": "<style>.callUsModal{display: none;}\n.callUsModal .modal--background {\n    background-color: #000000bf;\n}\n.callUsModal .modal {\n    position: fixed;\n    z-index: 2;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n}\n.callUsModal .modal__margin{\n    margin: auto;\n    min-width: 17.5rem;\n    max-width: 27rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    padding: 1rem;\n    position: relative;\n    overflow: hidden;\n}\n.callUsModal .modal__margin.modal--large {\n    max-width: 45.75rem;\n}\n@media (min-width: 36rem){\n    .callUsModal .modal__margin{\n        max-width: 28rem;\n        padding: 1.5rem;\n    }\n}\n@media (min-width: 48rem){\n    .callUsModal .modal__margin {\n        max-width: 33rem;\n        padding: 4rem;\n    }\n}\n@media (min-width: 36rem){\n    .callUsModal .modal__margin.modal--large {\n        max-width: 46.75rem;\n    }\n}\n@media (min-width: 48rem){\n    .callUsModal .modal__margin.modal--large {\n        max-width: 51.75rem;\n    }\n}\n.callUsModal .modal__container {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    background-color: #fff;\n    padding: 0 1rem 1rem;\n    border-radius: 0.1875rem;\n    max-height: 100%;\n    width: 100%;\n}\n@media (min-width: 36rem){\n    .callUsModal .modal__container {\n        padding: 0 1.5rem 1.5rem;\n    }\n}\n@media (min-width: 48rem){\n    .callUsModal .modal__container {\n        padding: 0 1.5rem 1.5rem;\n    }\n}\n.callUsModal .modal__header {\n    border-bottom: #dbdbdb 0.0625rem solid;\n    position: relative;\n    width: 100%;\n    background-color: #fff;\n    padding-right: 2.25rem;\n}\n@media (min-width: 36rem){\n    .callUsModal .modal__header{\n        padding-right: 2.5rem;\n    }\n}\n.callUsModal .modal__close{\n    display: block;\n    width: 1.5rem;\n    height: 1.5rem;\n    color: #979797;\n    font-size: 1.5rem;\n    line-height: 1.5rem;\n    position: absolute;\n    right: 0;\n    top: 1rem;\n    cursor: pointer;\n}\n@media (min-width: 36rem){\n    .callUsModal .modal__close{\n        top: 1.5rem;\n    }\n}\n.callUsModal .modal__close i{\n    font-weight: 200;\n}\n\n.callUsModal .modal__header h4 {\n    margin: 1rem 0;\n}\n@media (min-width: 36rem){\n    .callUsModal .modal__header h4 {\n        margin: 1.5rem 0;\n    }\n}\n\n.callUsModal .modal__body {\n    overflow-y: auto;\n    min-height: 4.5rem;\n    flex: 1;\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n    margin-right: -0.6875rem;\n    width: 100%;\n    background: linear-gradient(#ffffff 30%,rgba(255,255,255,0)),linear-gradient(rgba(255,255,255,0),#ffffff 70%) 0 100%,radial-gradient(farthest-side at 50% 0,rgba(0,0,0,.1),rgba(0,0,0,0)),radial-gradient(farthest-side at 50% 100%,rgba(0,0,0,.1),rgba(0,0,0,0)) 0 100%;\n    background-repeat: no-repeat;\n    background-color: #fff;\n    background-size: 100% 3rem,100% 3rem,100% 1rem,100% 1rem;\n    background-attachment: local,local,scroll,scroll;\n}\n\n.callUsModal .modal__body.clear-bg{\n    background: transparent;\n}\n\n@media (min-width: 36rem){\n    .callUsModal .modal__body {\n        margin-right: -0.9375rem;\n    }\n}\n\n.callUsModal .modal__footer {\n    width: 100%;\n    justify-content: center;\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    bottom: 0;\n    background-color: #fff;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "C300EEF5-C51E-4BE7-AAD1-AFB86CE6FD88"}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "23482622467", "integrationSettings": null}], "id": "23641850050", "weightDistributions": null, "name": "[CSCRO-1115] HP - Add Call Us tile before SVC", "groupId": null, "commitId": "23722541551", "decisionMetadata": {"experimentPriorities": [[{"entityId": "23482622467", "endOfRange": null}]], "offerConsistency": null}, "policy": "equal_priority", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["23640640276"], "experiments": [{"weightDistributions": [{"entityId": "23681850020", "endOfRange": 5000}, {"entityId": "23668050306", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "[A/B] CSCRO-1040 You might also like upsell", "bucketingStrategy": null, "variations": [{"id": "23681850020", "actions": [{"viewId": "23640640276", "changes": []}], "name": "Original"}, {"id": "23668050306", "actions": [{"viewId": "23640640276", "changes": [{"dependencies": [], "type": "custom_code", "id": "24D7733E-3674-4D79-9175-581880B5C250", "value": function($){(function (window, document){
    'use strict';
    let counter = 0;
    let $timerA = window.setInterval(function () {
        let subject = document.querySelector("vm-product-card-section .tile-wrapper .tile .price-container"),
            lazyLoadComplete = window.vmLazyLoadComplete,
            $ = window.$;
		
        if((subject && typeof $ == "function" && lazyLoadComplete) || counter > 5) {
            window.clearInterval($timerA);
            $("body").addClass("also-like-upsell");

            const serviceability = JSON.parse(JSON.parse(localStorage.getItem("serviceability")));
            console.log("serviceability =", serviceability);
            const addressID = serviceability.serviceability.aid;
            const postcode = serviceability.serviceability.postcode;

            const sessionId = window.sessionStorage.sessionId;
            
            
            const upsellMapping = {
                9309:{ //   Solus M125 (24m)
                    canBeUpgraded: true,
                    extra: '£6',
                    upgradeToCompaxId: '9310', //Solus M250 (24m)
                    speed: '132Mbps'
                },
                9310:{ //Solus M250 (24m)
                    canBeUpgraded: true,
                    extra: '£6',
                    upgradeToCompaxId: '9311', //Solus M350 (24m)
                    speed: '264Mbps'
                },
                4301:{ //Solus M250 (18m)
                    canBeUpgraded: true,
                    extra: '£6',
                    upgradeToCompaxId: '4300', //Solus M350 (18m)
                    speed: '264Mbps'
                },
                4302:{ // Solus M125 (18m)
                    canBeUpgraded: true,
                    extra: '£6',
                    upgradeToCompaxId: '4301', //Solus M250 (18m)
                    speed: '132Mbps'
                },
                4303:{ // Solus M50 (18m)
                    canBeUpgraded: true,
                    extra: '£6',
                    upgradeToCompaxId: '4302', //Solus M125 (18m)
                    speed: '54Mbps'
                },
                4005:{ //Big M125
                    canBeUpgraded: true,
                    extra: "£6",
                    upgradeToCompaxId: '4015', //Big M250
                    speed: '132Mbps'
                },
                4019:{ //Bigger M250
                    canBeUpgraded: true,
                    extra: "£6",
                    upgradeToCompaxId: '4020', //Bigger M350
                    speed: '264Mbps'
                },
                4049:{ //Big M250 + 2 Picks
                    canBeUpgraded: true,
                    extra: "£6",
                    upgradeToCompaxId: '4050', //Big M350 + 2 Picks
                    speed: '264Mbps'
                },
                4036:{ //Bigger Movies M125
                    canBeUpgraded: true,
                    extra: "£6",
                    upgradeToCompaxId: '4033', //Bigger Movies M250
                    speed: '132Mbps'
                },
                4015:{ //Big M250
                    canBeUpgraded: false,
                    extra: "£",
                    upgradeToCompaxId: '',
                    speed: '264Mbps'
                },
                9311:{ //Solus M350 (24m)
                    canBeUpgraded: false,
                    extra: '£',
                    upgradeToCompaxId: '',
                    speed: '362Mbps'
                },
                4300:{ // Solus 3250 (18m)
                    canBeUpgraded: false,
                    extra: '£',
                    upgradeToCompaxId: '',
                    speed: '362Mbps'
                },
                4020:{ //Bigger M350
                    canBeUpgraded: false,
                    extra: "£",
                    upgradeToCompaxId: '', //Bigger M350
                    speed: '362Mbps'
                },
                4050:{ //Big M350 + 2 Picks
                    canBeUpgraded: false,
                    extra: "£",
                    upgradeToCompaxId: '',
                    speed: '362bps'
                },
                4033:{ //Bigger Movies M250
                    canBeUpgraded: false,
                    extra: "£",
                    upgradeToCompaxId: '',
                    speed: '264Mbps'
                }
            }

console.log("mapping = ",upsellMapping)
            function addUpsellPopup(oldSpeed, newSpeed, extra, prodUrl, upgradedProdUrl){
                $("body").append(`<div class='upsell-popup-wrapper'>
                    <div class='upsell-popup-container-modal'>
                    	<div class='promo-container'>
                    		<div class='promo-container-banner'>Boost your broadband speed<!--<span class='close-icon'><i class="fal fa-times"></i></span>--></div>
		                    <div class='upsell-popup-container'>
		                        <div class='upsell-popup-container-inner'>
		                        	<div class='upsell-popup-container-inner--top'>
                                        <img src='//cdn.optimizely.com/img/22744560884/10799f0d0aa34555a66797825d67a9f8.gif' />
		                                <p class='speed-upsell'><span class='old-speed crossed-out'>${oldSpeed}</span> <span class='new-speed'>${newSpeed}</span></p>
		                                <p class='price-container'><span class='price'>${extra}</span> extra a month</p>
		                        	</div>
		                            <div class='upsell-popup-container-inner--bottom'>
			                            <a class='btn-go btn-go--primary' href='${upgradedProdUrl}'>Boost your speed</a>
			                            <p class='continueWithout'>No thanks, <a href="${prodUrl}">continue without</a></p>
			                        </div>
		                        </div>
		                  </div>
	                    </div>
	                </div>
                </div>`);
                
				$("body").addClass("no-scroll");
				$(".upsell-popup-wrapper").addClass('show');
                //Track clicks on upsell CTA
                $(".also-like-upsell .upsell-popup-wrapper .upsell-popup-container-inner--bottom a.btn-go").on("click", () => {
                	window.sales_cro.fireOpti("1040_upsell_CTA_click")
                });
                //Track clicks on Continue Without
                $(".also-like-upsell .upsell-popup-wrapper .upsell-popup-container-inner--bottom p a").on("click", (e) => {
                	window.sales_cro.fireOpti("1040_continue_without_click")
                });
            }

            const saveImage = (node) =>{
                    $(node).addClass("save-img");
                    let imagesUrls = {}
                    $(node).find(".image-wrapper").each((i, el) => {
                        const flareUrl = $(el).find(".background-flare img").attr("src")
                        const bbUrl = $(el).find(".has-broadband img").attr("src");
                        const phoneUrl = $(el).find(".has-landline img").attr("src");
                        const tvUrl = $(el).find(".has-tv img").attr("src");
                        imagesUrls = {
                            flareUrl: flareUrl,
                            bbUrl: bbUrl,
                            phoneUrl:phoneUrl,
                            tvUrl:tvUrl
                        }
                    });
                    let yourVMPrice = window.location.href.indexOf("rolling-contract") > -1 ? "" : $(node).find(".more__header:contains('Virgin Media Price') + .section-content").html();

                    const obj = {
                        imagesUrls: imagesUrls,
                        yourVMPrice:yourVMPrice
                    }
                    window.sessionStorage.setItem("basketdata", JSON.stringify(obj));
            }
			
			const showUpsellPopup = (oldSpeed, newSpeed, extra, prodUrl, upgradedProdUrl) => {
				$(".upsell-popup-wrapper .old-speed").text(oldSpeed);
				$(".upsell-popup-wrapper .new-speed").text(newSpeed);
				$(".upsell-popup-wrapper .price-container .price").text(extra);
				$(".upsell-popup-wrapper").addClass('show');
				$(".btn-go").attr("href", upgradedProdUrl);
				$(".btn-go + a").attr("href", prodUrl);
				$("body").addClass("no-scroll");
			}
            
            function upsellBanner(node){
                $(node).addClass("with-upsell");
                $(node).find(".button-wrapper").replaceWith(`<div class='card-button-wrapper'><div class='card-button'><button class='btn-go--card btn-go btn-go--primary'>Select</button></div></div>`);
                
                $(node).find(".btn-go.btn-go--card").on("click", function() {
                    const elem = $(this).closest(".tile");
                	const prodId = $(node).find(".more .more__details .section-content").eq(0).attr("data-product-id");
                	if(upsellMapping[prodId].canBeUpgraded){
                		const upgradeToId = upsellMapping[prodId].upgradeToCompaxId;
                		const oldSpeed = upsellMapping[prodId].speed;
                		const newSpeed = upsellMapping[upgradeToId].speed;
                		const extra = upsellMapping[prodId].extra;
                		const prodUrl = `https://www.virginmedia.com/join/flow/create-basket?productId=${prodId}&pc=${postcode}&aid=${addressID}&sessionId=${sessionId}`;

                        const upgradedProdUrl = `https://www.virginmedia.com/join/flow/create-basket?productId=${upgradeToId}&pc=${postcode}&aid=${addressID}&sessionId=${sessionId}`;
                		
                		if($(".upsell-popup-wrapper").length === 0){
                			addUpsellPopup(oldSpeed, newSpeed, extra, prodUrl, upgradedProdUrl);
                		} else{
                			showUpsellPopup(oldSpeed, newSpeed, extra, prodUrl, upgradedProdUrl);
                		}

                        saveImage(elem);
                	}
                })
               
            }
            
            const targetNodes = document.querySelectorAll(".tile-wrapper");
            const config = { childList: true };
            const callback = function(mutationsList, observer) {
                for(const mutation of mutationsList) {
                    if (mutation.type === 'childList') {
                        for(const node of mutation.addedNodes){
                            if (!node.tagName) continue;
                            if(node.classList.contains("tile") && !$(node).hasClass("with-upsell")){
                                const prodId = $(node).find(".more .more__details .section-content").attr("data-product-id");
                                if(Object.keys(upsellMapping).includes(prodId) && upsellMapping[prodId].canBeUpgraded){
                                    upsellBanner($(node));
                                }
                            }
                        }
                    }
                }
            };
            const observer = new MutationObserver(callback);
            targetNodes.forEach((targetNode, i) => observer.observe(targetNode, config))
            
            $(".tile-wrapper .tile:not(.with-upsell)").each(function(i, node){
                const prodId = $(node).find(".more .more__details .section-content").attr("data-product-id");
                if(Object.keys(upsellMapping).includes(prodId) && upsellMapping[prodId].canBeUpgraded){
                    upsellBanner($(node));
                }
            })


        } else{
        	counter = ++counter;
        }
    }, 500);
}(window, document));
}}, {"value": "<style>.also-like-upsell .upsell-popup-wrapper {\n\tdisplay: none;\n}\n\n.also-like-upsell .upsell-popup-wrapper.show{\n\tdisplay: block;\n}\n\n.also-like-upsell .upsell-popup-wrapper .promo-container{\n\twidth: 652px;\n    height: 336px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    padding: 0 12px;\n    border-radius: 8px;\n    background: url(https://www.virginmedia.com/content/dam/virginmedia/dotcom/images/ABtest/cro/flare_bg_desktop.svg);\n    background-color: #ED0000;\n    background-repeat: no-repeat;\n    background-position: top center;\n    background-size: contain;\n\n}\n.also-like-upsell .upsell-popup-wrapper .upsell-popup-container-modal{\n\tposition: fixed;\n    z-index: 2;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0,0,0,.75);\n}\n\n.also-like-upsell .upsell-popup-wrapper .upsell-popup-container{\n\tpadding: 16px 16px 24px;\n    background-color: white;\n    border-radius: 4px;\n}\n\n.also-like-upsell .upsell-popup-wrapper .promo-container-banner{\n\tpadding: 8px;\n    font-family: VMCircularShoutPTT,Arial,Helvetica,sans-serif;\n    font-style: normal;\n    font-weight: 700;\n    font-size: 20px;\n    line-height: 30px;\n    text-align: center;\n    color: white;\n}\n\n.also-like-upsell .upsell-popup-wrapper .promo-container-banner .close-icon{ \n\tcursor: pointer;\n}\n\n.also-like-upsell .upsell-popup-wrapper .upsell-popup-container-inner{\n\tposition: relative;\n    text-align: center;\n}\n\n.also-like-upsell .upsell-popup-container-inner--top img{max-height: 45px;}\n\n.also-like-upsell .upsell-popup-container-inner--top .speed-upsell{\n    display: flex;\n    align-items: baseline;\n    justify-content: center;\n\tmargin: 8px 0;\n}\n.also-like-upsell .upsell-popup-wrapper .upsell-popup-container-inner--bottom{\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n}\n.also-like-upsell .upsell-popup-wrapper .upsell-popup-container-inner--bottom a{ \n    max-width: 40%;\n}\n.also-like-upsell .upsell-popup-wrapper .upsell-popup-container-inner--bottom p a{\n\n    font-family: var(--text-link-font-family);\n    color: var(--text-link-color);\n}\n.also-like-upsell .upsell-popup-wrapper .upsell-popup-container-inner--top .crossed-out{\n    font-family: VMCircularChatPTT, Arial, Helvetica, sans-serif;\n    font-style: normal;\n    font-weight: 450;\n    font-size: 16px;\n    line-height: 24px;\n    color: #333333;\n\ttext-decoration: line-through;\n\tmargin-right: 5px;\n}\n\n.also-like-upsell .upsell-popup-wrapper .upsell-popup-container-inner--top .new-speed{\n\tfont-family: VMCircularNatterPTT, Arial, Helvetica, sans-serif;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 28px;\n    line-height: 42px;\n    color: #ED0000;\n}\n\n.also-like-upsell .upsell-popup-wrapper .upsell-popup-container-inner--bottom .price-container span{\n\tfont-weight: var(--text-book-font-weight);\n    font-family: var(--text-book-font-family);\n    font-size: 30px;\n    font-size: 1.875rem;\n    line-height: 38px;\n    margin-bottom: 16px;\n}\n\n.upsell-popup-container-inner--bottom .btn-go--primary{\n\tmargin: 16px 0;\n}\n\n.also-like-upsell .card-button-wrapper{\n    margin-bottom: 1.5625rem;\n    text-align: center;\n}\n\n.also-like-upsell .card-button{\n\tbox-sizing: border-box;\n    padding-left: 2rem;\n    padding-right: 2rem;\n    width: 19.8125rem;\n    display: inline-block;\n    height: 3rem;\n}\n\n.also-like-upsell .btn-go--primary{\n\t background-color: #ED0000;\n\t color: white;\n\t border: none;\n}\n\n.also-like-upsell .btn-go{\n    border-radius: 6.25rem;\n    display: block;\n    font-family: VMCircularShoutPTT,Arial,Helvetica,\"sans-serif\";\n    font-stretch: normal;\n    font-style: normal;\n    letter-spacing: normal;\n    text-align: center;\n    text-decoration: none;\n    padding: 11px;\n    width: 100%;\n    font-size: 1rem;\n    height: 3rem;\n    cursor: pointer;\n\ttext-decoration: none;\n}\n.also-like-upsell .btn-go--primary:hover {\n    background-color: #BB0A00;\n    text-decoration: none;\n}\n\n@media only screen and (max-width: 35.9375rem){\n    .also-like-upsell .upsell-popup-wrapper .promo-container{\n        width: 304px;\n        height: 315px;\n        background: url(https://www.virginmedia.com/content/dam/virginmedia/dotcom/images/ABtest/cro/flare_bg_mobile.svg);\n        background-color: #ed0000;\n    }\n\n\t.also-like-upsell .card-button{\n\t\twidth: 100%;\n\t}\n\t.also-like-upsell .card-button{\n\t    padding-left: 1rem;\n\t    padding-right: 1rem;\n\t}\n    .also-like-upsell .upsell-popup-wrapper .upsell-popup-container-inner--bottom a {\n        max-width: 80%;\n        margin: 15px 0 10px;\n    }\n    .also-like-upsell .upsell-popup-wrapper .promo-container-banner {\n        font-size: 16px;\n        line-height: 24px;\n    }\n    .also-like-upsell .upsell-popup-container-inner--top .speed-upsell{\n        margin: 0 0 8px 0;\n    }\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "0407A6E1-198E-4B0B-AA2F-5983A4AA4235"}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "23652460523", "integrationSettings": null}], "id": "23647750396", "weightDistributions": null, "name": "[A/B] CSCRO-1040 You might also like upsell", "groupId": null, "commitId": "23757790270", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["23239680912"], "experiments": [{"weightDistributions": [{"entityId": "23652840735", "endOfRange": 10000}], "audienceName": "BB Builder QA,optiqa = true", "name": "[QA] [A/B] [no-track] Broadband Builder 2.0 - Redirect", "bucketingStrategy": null, "variations": [{"id": "23640471379", "actions": [], "name": "Original"}, {"id": "23652840735", "actions": [{"viewId": "23239680912", "changes": [{"dependencies": [], "type": "custom_code", "id": "3DCFC4D1-F2F9-48F5-9B67-BA40788C0A11", "value": function($){(function (window, document){
    'use strict';
    let $timerA = window.setInterval(function () {
        let subject = document.querySelector("body");
            
        if(subject) {
            window.clearInterval($timerA);
            const currentQuery = window.location.search;
            const additionalQuery = currentQuery.indexOf("?") > -1 ? "&intcmpid=opt-23686100535-23652840735" : "?intcmpid=opt-23686100535-23652840735";
            window.location.href = `https://www.virginmedia.com/broadband/broadband-builder${currentQuery}${additionalQuery}`;  
        } 
    }, 100);
}(window, document));
}}]}], "name": "Variation #1"}], "audienceIds": ["and", "23683890047", "23197550032"], "changes": null, "id": "23686100535", "integrationSettings": null}], "id": "23666860653", "weightDistributions": null, "name": "[QA] [A/B] [no-track] Broadband Builder 2.0 - Redirect", "groupId": null, "commitId": "23718630229", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["23667421206"], "experiments": [{"weightDistributions": [{"entityId": "23662020986", "endOfRange": 10000}], "audienceName": "optiqa = true,BB Builder QA", "name": "[QA] [no-track] Broadband Builder 2.0 ", "bucketingStrategy": null, "variations": [{"id": "23665210841", "actions": [], "name": "Original"}, {"id": "23662020986", "actions": [{"viewId": "23667421206", "changes": [{"dependencies": [], "type": "custom_code", "id": "72310F8F-79E3-46CA-9537-2B4B27DA81C3", "value": function($){!function(e,t){let n=e.setInterval((function(){let a=e.sessionStorage.getItem("products"),s="string"!=typeof JSON.parse(a)?JSON.parse(a):JSON.parse(JSON.parse(a)),d=s.product,i=e.getAllAngularRootElements,o=t.querySelector("vm-product-card-section .tile-wrapper .tile vm-media img"),r=e.$;if(null!==a&&r&&i&&s&&d.length>15&&o){e.clearInterval(n);const a={50:"For small households with up to 4 devices",125:"For busy households with 5-9 devices",250:"For busy households with 10+ devices",350:"For HD streaming, gaming and using smart devices, all at the same time",500:"For superfast downloads and super-connected homes",1e3:"Future-proof your home with our fastest broadband speed"},s={4303:"4302",4304:"4305"},i=e=>({id:`${e.id}`,speedLabel:e.virginProductTypes.indexOf("SIM")>-1?e.bandwidthLabelBoostedFrom:e.bandwidthLabel,avgSpeedDownload:e.avgDownload,speedDescription:a[e.bandwidthLabel],monthlyPrice:e.regularOffer.recurringDiscountedPrice,ongoingPrice:132===e.avgDownload?30:e.regularOffer.recurringRegularPrice,isSolus:e.virginProductTypes.indexOf("BROADBAND")>-1&&1===e.virginProductTypes.length,is24Months:24===e.minContractDur,setupFeeText:0===e.regularOffer.onetimeDiscountedPrice?"No setup fee":`£ ${e.regularOffer.onetimeDiscountedPrice} setup fee`,contractLength:e.minContractDur,afterPrice:e.regularOffer.recurringRegularPrice,isVolt:e.virginProductTypes.indexOf("SIM")>-1,bandwidthLabelBoostedFrom:e.virginProductTypes.indexOf("SIM")>-1?e.bandwidthLabelBoostedFrom:"",avgSpeedDownloadBoostedFrom:e.virginProductTypes.indexOf("SIM")>-1?e.avgDownloadFrom:"",boostedSpeed:e.virginProductTypes.indexOf("SIM")>-1?e.bandwidthLabel:"",voltUpsellPerksHtml:e.virginProductTypes.indexOf("SIM")>-1?e.html:"",hasTV:e.virginProductTypes.indexOf("TV")>-1,tvPackageName:e.virginProductTypes.indexOf("TV")>-1?e.tvPackageName:"",canUpsellSpeed:Object.keys(s).includes(`${e.id}`),upsellProductTo:Object.keys(s).includes(`${e.id}`)?s[e.id]:""});let o={},r=[];e.broadbandBuilder={},console.log("PRODUCTS ARRAY",d),d.forEach(((t,n)=>{r.push(i(t));const a=t.virginProductTypes.indexOf("SIM")>-1?t.bandwidthLabelBoostedFrom:t.bandwidthLabel;o[a]||(o[a]={},o[a].cheapestProduct={},o[a][t.minContractDur]={}),o[a][t.minContractDur]||(o[a][t.minContractDur]={}),Object.assign(o[a][t.minContractDur],{[t.id]:{tv:t.virginProductTypes.indexOf("TV")>-1,sim:t.virginProductTypes.indexOf("SIM")>-1,upsell:Object.keys(s).includes(`${t.id}`),upsellProductTo:Object.keys(s).includes(`${t.id}`)?s[t.id]:""}}),t.virginProductTypes.indexOf("BROADBAND")>-1&&1===t.virginProductTypes.length&&(o[a].cheapestProduct.id=`${t.id}`,o[a].cheapestProduct.monthlyPrice=t.regularOffer.recurringDiscountedPrice,t.regularOffer.recurringDiscountedPrice<o[a].cheapestProduct.monthlyPrice&&(o[a].cheapestProduct.id=`${t.id}`,o[a].cheapestProduct.monthlyPrice=t.regularOffer.recurringDiscountedPrice)),n===d.length-1&&(e.broadbandBuilder.productsInformation=r,e.broadbandBuilder.productsBySpeed=o,console.log("WINDOW BROADBAND BUILDER",e.broadbandBuilder))}));let l=t.createElement("link");l.rel="stylesheet",l.href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css",t.head.appendChild(l);let c=t.createElement("script");c.setAttribute("src","https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"),t.body.appendChild(c)}}),500)}(window,document),function(e,t){let n=e.setInterval((function(){let a=e.broadbandBuilder,s=t.querySelector("vm-product-card-section"),d=e.getAllAngularRootElements,i=e.sales_cro,o=e.$;if(a&&o&&d&&s&&i&&"function"==typeof Swiper){e.clearInterval(n),o("body").addClass("bb-builder");const t=a.productsInformation,s=a.productsBySpeed;o("vm-product-card-section").before("<div id='broadband-builder-tool' class='vm-container'></div>");const d=(e,n)=>{const a=t.filter((e=>e.id===n.id))[0];return console.log("product is",a),`<div class='swiper-slide bb-speed-tile bb-builder-tile bb-tile-border' data-prod-id=${a.id} data-prod-speed=${a.speedLabel}>\n                    <div class='bb-speed-tile-top-section'>\n                        <div class='bb-speed-tile-avg-speed-container'>\n                            <p>Average Speed</p>\n                            <p class='bb-speed-tile-avg-speed'><span class='txt-bold txt-bold-lg'>${a.avgSpeedDownload}</span><span>Mbps</span></p>\n                        </div>\n                        <div class='bb-speed-tile-price-container'>\n                            <p>Prices from </p> \n                            <p class='bb-speed-tile-price txt-bold txt-bold-lg txt-red'>£${a.monthlyPrice.toString().indexOf(".5")>-1?`${a.monthlyPrice.toString()}0`:a.monthlyPrice}</p>\n                            ${a.is24Months?`<p class='txt-bold a-month'>for 6 months <sup>†</sup></p>\n                                       <p class='a-month'>then £${a.ongoingPrice} a month <sup>†</sup></p>`:"<p class='txt-bold a-month'>a month <sup>†</sup></p>"}\n                        </div>\n                    </div>\n                    <div class='divider-line'></div>\n                    <p class='bb-speed-tile-description'>${a.speedDescription}</p>\n                    <div class='bb-speed-tile-select bb-builder-btn bb-builder-btn--primary mt-md mb-md'>Select</div>\n                    <p class='bb-speed-tile-setupfee'>${a.setupFeeText}</p>\n                    <a class='bb-speed-tile-contract-length bb-builder-link contract-length-link' href='#'>${a.contractLength}-month contract</a>\n                </div>`};o("#broadband-builder-tool").prepend(`<div>\n                <h3 class='bb-builder-speeds-title'>Select broadband speed</h3>\n                <a class='bb-builder-speeds-modal-link bb-builder-link' href='#'><i class="fal fa-fw fa-info-circle prefix-icon"></i>About your speed</a>\n                <div class="swiper-container" id="broadband-builder-speeds-swiper">\n                    <div class='broadband-builder-speeds-wrapper vm-container swiper-wrapper'>\n                        ${Object.keys(s).map((e=>d(e,s[e].cheapestProduct))).join("")}\n                    </div>\n                    <div class='swiper-nav-wrapper'>\n                        <div class="swiper-button-prev"></div>\n                        <div class="swiper-pagination"></div>\n                        <div class="swiper-button-next"></div>\n                    </div>\n                </div>\n            </div>`);const r=(e,t,n)=>{o(e).on("click",(e=>{e.preventDefault(),o(`.tile-wrapper .tile[product-id='${t}']`).find(`.${n}`)[0].click()}))},l=()=>{const e={"weekend chatter":"assets/icons/phone-flare-design.svg","o2 sim":"assets/icons/sim-flare-design.svg","volt benefits unlocked":"assets/icons/bolt-red-flare-design.svg","extras from o2":"assets/icons/bolt-blue-flare-design.svg"};o(".bb-builder-basket-bar-plan-detail-container .more__header span:not('.align-header')").each(((t,n)=>{const a=o(n).text().toLowerCase().trim(),s=a.indexOf("fibre broadband")>-1?"assets/icons/broadband-flare-design.svg":a.indexOf("tv channels")>-1?"assets/icons/tv-flare-design.svg":e[a];o(n).after(`<img height="24px" src="${s}" alt="${a.split(" ").join("_")}">`)}))},c=e=>{o("#broadband-builder-tool").after(`<div class='plan-details-backdrop'></div>\n                <div id='bb-builder-basket-bar'>\n                    <div class='bb-builder-basket-bar-wrapper'>\n                        <div class='vm-container bb-builder-basket-bar-container'>\n                            <div class='bb-builder-basket-bar-inner'>\n                                <div class='bb-builder-basket-charges'>\n                                    <div class='basket-monthly-tot'>\n                                        <span>Monthly </span>\n                                        <span class='basket-monthly-tot-price'>\n                                            <span class='txt-bold monthly-price'>£${e.monthlyPrice.toString().indexOf(".5")>-1?`${e.monthlyPrice.toString()}0`:e.monthlyPrice} ${e.is24Months?"":"<sup>†</sup>"}</span>\n                                            ${e.is24Months?`<span class='a-month'>for 6 months <sup>†</sup></span>\n                                                    <span class='a-month'>then £${e.ongoingPrice} a month <sup>†</sup></span>`:""}\n                                        </span>\n                                    </div>\n                                    <div class='basket-oneoff-tot'>\n                                        <span>One-off </span>\n                                        <span class='txt-bold basket-one-off-price'> ${"No setup fee"===e.setupFeeText?"£0":e.setupFeeText} </span>\n                                    </div>\n                                </div>\n                                <div class='basket-plan-details basket-plan-details--desktop'>\n                                    <span class='bb-builder-link'>Plan details</span>\n                                    <i class="fal fa-fw suffix-icon fa-chevron-down"></i>\n                                </div>\n                                <div>\n                                    <div class='basket-checkout-cta bb-builder-btn bb-builder-btn--secondary' data-product-selected-id=${e.id}>Checkout</div>\n                                    ${e.is24Months?"<div class='basket-plan-details basket-plan-details--mobile'>\n                                                    <span class='bb-builder-link'>Plan details</span>\n                                                    <i class=\"fal fa-fw suffix-icon fa-chevron-down\"></i>\n                                                </div>":""}\n                                </div>\n                            </div>\n                            ${e.is24Months?"":"<div class='basket-plan-details basket-plan-details--mobile'>\n                                            <span class='bb-builder-link'>Plan details</span>\n                                            <i class=\"fal fa-fw suffix-icon fa-chevron-down\"></i>\n                                        </div>"}\n                        </div>\n                    </div>\n                    <div class='bb-builder-basket-bar-plan-detail-wrapper'>\n                        <div class='bb-builder-basket-bar-plan-detail-container'>${o(`.tile[product-id='${e.id}'] .bottom-wrapper .more`).clone(!0,!0).html()}</div>\n                    </div>\n                </div>`),o(".bb-builder-basket-bar-plan-detail-container .more__details a").each(((t,n)=>r(n,e.id,o(n).attr("class").split(" ").join(".")))),l(),o(".basket-plan-details").on("click",(()=>{o(".bb-builder-basket-bar-wrapper").toggleClass("show-plan-details"),o(".bb-builder-basket-bar-plan-detail-wrapper").toggleClass("show-plan-details"),o(".plan-details-backdrop").toggleClass("show-backdrop"),i.fireGA("960","user clicked on plan details")})),o(".basket-checkout-cta").on("click",(e=>{const t=o(e.target).attr("data-product-selected-id");i.fireGA("960","user clicked on checkout cta"),o(`.tile[product-id='${t}'] .bottom-wrapper .button-wrapper vm-button button`)[0].click()}))};e.broadbandBuilder.basketBar={addBasketBar:c,attachEventListenersToModalLinks:r,fixPlanDetailsDesign:l};const p=e=>`<div class='contract-length-tile bb-tile-border bb-builder-tile swiper-slide' data-prod-id=${e.id} data-prod-speed=${e.speedLabel}>\n                    <p class='contract-length-tile-title'>${e.contractLength} month contract</p>\n                    <div class='cl-tile-price-wrapper'>\n                        <span class='contract-length-tile-price txt-bold txt-bold-lg txt-red'>£${e.monthlyPrice.toString().indexOf(".5")>-1?`${e.monthlyPrice.toString()}0`:e.monthlyPrice}</span>\n                        ${e.is24Months?` <span class='txt-bold a-month'>for 6 months <sup>†</sup></span>\n                                    <p class='a-month'>then £${e.ongoingPrice} a month <sup>†</sup></p>`:"<p class='txt-bold a-month'>a month <sup>†</sup></p>"}\n                    </div>\n                    <div class='contract-length-tile-select bb-builder-btn bb-builder-btn--primary mt-md mb-md'>Select</div>\n                    <p class='contract-length-tile-tile-setupfee'>${e.setupFeeText}</p>\n                    <a class='contract-length-tile-contract-length bb-builder-link contract-length-link' href='#'>${e.contractLength}-month contract</a>\n                </div>`,b=(e,t)=>{console.log("selectedProduct",e),console.log("correspondingProduct",t),o("#broadband-builder-tool #broadband-builder-speeds-swiper").after(`<div class='contract-length-question-wrapper'>\n                    <h3 class='bb-builder-section-title'>Select contract length</h3>\n                    <p class='bb-builder-section-subtitle'>Choose how long you'd like your contract to be</p>\n                    <div id='contract-length-question' class='swiper-container'>\n                        <div class='vm-container swiper-wrapper'>\n                            ${p(e)}\n                            ${p(t)}\n                        </div>\n                        <div class='swiper-nav-wrapper'>\n                        <div class="swiper-button-prev"></div>\n                        <div class="swiper-pagination"></div>\n                        <div class="swiper-button-next"></div>\n                    </div>\n                    </div>\n                </div>`),new Swiper("#contract-length-question",y("#contract-length-question"))},u=()=>o(".contract-length-question-wrapper").remove();e.broadbandBuilder.contractLengthSection={addContractLengthQuestion:b,removeContractLengthQuestion:u};const h={tv:"https://prod.ctassets.virginmedia.com/uploads/Big_Bundle_e3ddbe5785.png",sim:"https://prod.ctassets.virginmedia.com/uploads/o2_sim_a50d2f9ab3.webp",upsell:"https://prod.ctassets.virginmedia.com/uploads/broadband_hub3_1d5e1468e2.webp"},m=(e,t)=>{let n="",a="";return"tv"===e?(n="TV",a=`<p class='add-on-description'><a href='open-modal-see-all-channels' class='bb-builder-link modal-link'>${t.tvPackageName}</a> + Virgin 360 Box. Includes Landline.</p>`):"sim"===e?(n="O2 sim",a=`<p class='add-on-description'><s>5GB</s> 10GB O2 sim. Broadband speed boost to <span class='txt-bold'>${t.avgSpeedDownload}Mbps</span></p>`):"upsell"===e&&(n=`Boost to <span class='txt-bold'>${t.avgSpeedDownload}Mbps</span>`,a="<p class='add-on-description'>Get a faster fibre connection <a href='speed-info-modal' class='bb-builder-link modal-link'>About Speed</a></p>"),{addOnTitle:n,addOnDescriptionHtml:a}},g=(e,t,n)=>{const a=n<0,s=m(e,t);return`<div class='add-on-tile bb-tile-border bb-builder-tile swiper-slide' data-prod-id=${t.id} data-prod-speed=${t.speedLabel} data-add-on-type=${e}>\n                    ${"sim"===e?'<div class="flare">\n                        <div class="flare--charge full-flare">\n                            <div class="flare--charge__background" style="background: url(/assets/icons/volt.png) center bottom / cover no-repeat;">\n                                <div class="flare-text"></div>\n                            </div>\n                        </div>\n                    </div>':""}\n                    <img src=${h[e]} alt=${e+"-image"} />\n                    <div class='add-on-extra-price-container ${a?"cheaper-add-on":""}'>\n                        <span>${a?"Save":"An extra"}</span>\n                        <span class='add-on-extra-price txt-bold'>£${n.toString().indexOf(".5")>-1?`${Math.abs(n).toString()}0`:Math.abs(n)}</span>\n                        <span> a month</span>\n                    </div>\n                    <p class='add-on-title'>${s.addOnTitle}</p>\n                    ${s.addOnDescriptionHtml}   \n                    <div class='add-on-tile-select bb-builder-btn bb-builder-btn--primary mt-md mb-md' btn-action-type='add'>Add</div>\n                    ${"upsell"===e?"<div class='add-on-tile-included bb-builder-btn mt-md mb-md d-none'><i class=\"fas fa-check-circle green-tick\"></i> Included</div>":""}\n                </div>`},v=e=>{const t=o("#contract-length-question").length>0?o("#contract-length-question"):o("#broadband-builder-speeds-swiper"),n=`<div class='add-ons-question-wrapper'>\n                    <h3 class='bb-builder-section-title'>Fancy a little more?</h3>\n                    <p class='bb-builder-section-subtitle'>Upgrade your package with our add-ons</p>\n                    <div class="swiper-container" id="add-ons-question">\n                        <div class='add-ons-question-wrapper vm-container swiper-wrapper'>\n                            ${e.map((e=>g(e.addOnTypeId,e.productObj,e.priceDifference))).join("")}\n                        </div>\n                        <div class='swiper-nav-wrapper'>\n                            <div class="swiper-button-prev"></div>\n                            <div class="swiper-pagination"></div>\n                            <div class="swiper-button-next"></div>\n                        </div>\n                    </div>\n                </div>`;t.after(n),new Swiper("#add-ons-question",y("#add-ons-question")),o(".add-on-tile a.modal-link").each(((e,t)=>{const n=o(t).attr("href"),a=o(t).parents(".add-on-tile").attr("data-prod-id");r(t,a,n)}))},f=()=>o(".add-ons-question-wrapper").remove();e.broadbandBuilder.addOnsSection={addAddOnsQuestion:v,removeAddOnsQuestion:f};const y=t=>{const n="#broadband-builder-speeds-swiper"===t?3.5:"auto";return{slidesPerView:"#broadband-builder-speeds-swiper"===t?1.5:o(`${t} .swiper-slide`).length>1?1.3:1,centeredSlides:!1,spaceBetween:16,pagination:{el:`${t} .swiper-pagination`,clickable:!0},lazyLoading:!0,loop:!1,keyboard:{enabled:!0},navigation:{nextEl:`${t}  .swiper-button-next`,prevEl:`${t}  .swiper-button-prev`},allowTouchMove:e.innerWidth<768,breakpoints:{550:{slidesPerView:2.5},768:{slidesPerView:2.5},960:{slidesPerView:n}}}};new Swiper("#broadband-builder-speeds-swiper",y("#broadband-builder-speeds-swiper")),o("body").addClass("bb-builder-layout")}}),500)}(window,document),function(e,t){let n=e.setInterval((function(){let a=e.broadbandBuilder,s=t.getElementById("broadband-builder-speeds-swiper"),d=t.querySelector("body.bb-builder-layout"),i=t.querySelector("vm-product-card-section .tile-wrapper .tile vm-media img"),o=e.getAllAngularRootElements,r=e.$;if(a&&r&&o&&s&&d&&i){e.clearInterval(n);const a=(e,t)=>{r(e).addClass("prod-updated"),r(e).attr("product-id",t)},s=t.querySelectorAll(".tile-wrapper"),d={childList:!0},i=new MutationObserver((function(e,t){for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)if(e.tagName&&e.classList.contains("tile")&&!r(e).hasClass("prod-updated")){const t=r(e).find(".more .more__details .section-content").attr("data-product-id");a(e,t)}}));s.forEach(((e,t)=>i.observe(e,d))),r(".tile-wrapper .tile:not(.prod-updated)").each((function(e,t){const n=r(t).find(".more .more__details .section-content").attr("data-product-id");a(t,n)}))}}),500)}(window,document),function(e,t){let n=e.setInterval((function(){let a=e.broadbandBuilder,s=t.getElementById("broadband-builder-speeds-swiper"),d=t.querySelector("body.bb-builder-layout"),i=e.getAllAngularRootElements,o=e.sales_cro,r=e.$;if(a&&r&&i&&s&&d&&o){e.clearInterval(n);const s=a.productsInformation,d=a.productsBySpeed,i=a.contractLengthSection.addContractLengthQuestion,l=a.contractLengthSection.removeContractLengthQuestion,c=a.addOnsSection.addAddOnsQuestion,p=a.addOnsSection.removeAddOnsQuestion,b=a.basketBar.addBasketBar,u=a.basketBar.attachEventListenersToModalLinks,h=a.basketBar.fixPlanDetailsDesign;let m,g,v;const f={tv:!1,sim:!1,upsell:!1},y=e=>{t.getElementById(e)&&t.getElementById(e).scrollIntoView({behavior:"smooth",block:"center",inline:"center"})};r(".bb-builder-speeds-modal-link").on("click",(e=>{e.preventDefault(),r(".tile-wrapper .tile:not('.volt-gradient'):first .contract-length a")[0].click(),setTimeout((()=>{r(".modal__header h4").text("About your speed"),r(".modal__body h2").remove(),r(".modal__body .text-modal").html("<p>The download speed to your Virgin Media router can vary, especially at peak times. Take a look at virginmedia.com/ourspeeds to see what speeds you can expect from your package.</p>\n                    <p>The actual speed you experience may vary and may be lower than the estimate. This can be due to a number of things, such as your WiFi use, your equipment, your property's internal wiring, congestion at peak times, and the number of people accessing a particular website or service.</p>\n                    <p>For more information on estimated speeds, how speeds may be affected by policies such as traffic management and fair usage, our commitment to Ofcom’s Broadband Speeds Code of Practice and what to do if you experience speed problems, check out virginmedia.com/ourspeeds. </p>\n                    <p>If you are within your minimum term, you may have the right to exit your Virgin Media contract without penalty if your broadband speed falls below the minimum download speed for three consecutive days or more, and we are unable to fix the problem within 30 days of your reporting the problem to Virgin Media. If you receive a download speed to your Virgin Media router which is below the minimum download speed, please contact us.</p>\n                    <p>We will send you an email with this information within 7 days.</p>")}),50)}));const w=e=>{r(`#${e} .contract-length-link`).each(((e,t)=>{r(t).on("click",(e=>{e.preventDefault();const t=r(e.target).parents(".bb-builder-tile").attr("data-prod-id");r(`.tile[product-id='${t}'] .contract-length a`)[0].click()}))}))};w("broadband-builder-speeds-swiper");const k=(e,t)=>{"add-ons-question"===e?r(t).hasClass("selected")?(r(t).removeClass("selected"),r(t).find(".add-on-tile-select").text("Add"),r(t).find(".add-on-tile-select").attr("btn-action-type","add")):(r(t).addClass("selected"),r(t).find(".add-on-tile-select").text("Remove"),r(t).find(".add-on-tile-select").attr("btn-action-type","remove")):(r(`#${e} .bb-builder-tile`).removeClass("selected"),r(t).toggleClass("selected"),r(`#${e} .bb-builder-tile .bb-builder-btn`).text("Select"),r(t).hasClass("selected")?r(t).find(".bb-builder-btn").text("Selected"):r(t).find(".bb-builder-btn").text("Select"))},O=e=>s.filter((t=>t.id===e))[0],x=(e,t)=>d[e][t],$=t=>{r(".bb-builder-basket-charges .basket-monthly-tot-price").html(`<span class='txt-bold monthly-price'>£${t.monthlyPrice.toString().indexOf(".5")>-1?`${t.monthlyPrice.toString()}0`:t.monthlyPrice} ${t.is24Months?"":"<sup>†</sup>"}</span>\n                    ${t.is24Months?`<span class='a-month'>for 6 months <sup>†</sup></span>\n                            <span class='a-month'>then £${t.ongoingPrice} a month <sup>†</sup></span>`:""}`),t.is24Months&&e.innerWidth<768?r(".basket-checkout-cta").after(r(".basket-plan-details.basket-plan-details--mobile")):r(".bb-builder-basket-bar-inner").after(r(".basket-plan-details.basket-plan-details--mobile")),r(".bb-builder-basket-charges .basket-one-off-price").html(`${"No setup fee"===t.setupFeeText?"£0":t.setupFeeText}`),r(".bb-builder-basket-bar-plan-detail-container").html(r(`.tile[product-id='${t.id}'] .bottom-wrapper .more .more__details`).clone(!0,!0)),r(".bb-builder-basket-bar-plan-detail-container .more__details a").each(((e,n)=>u(n,t.id,r(n).attr("class").split(" ").join(".")))),h(),r(".basket-checkout-cta").attr("data-product-selected-id",t.id)},P=(e,t)=>{const n=O(t);if(r(e).attr("data-prod-id",t),r(e).attr("data-prod-speed",n.speedLabel),!r(e).hasClass("selected")){const t=(n.monthlyPrice-v.monthlyPrice).toFixed(2),a=t<0;r(e).find(".add-on-extra-price-container").replaceWith(` <div class='add-on-extra-price-container ${a?"cheaper-add-on":""}'>\n                        <span>${a?"Save":"An extra"}</span>\n                        <span class='add-on-extra-price txt-bold'>£${t.toString().indexOf(".5")>-1?`${Math.abs(t).toString()}0`:Math.abs(t)}</span>\n                        <span> a month</span>\n                    </div>`)}},S=(e,t,n)=>{f[e]=!0,r(n).find(".add-on-extra-price-container").css({opacity:0});g[t];const a=r(`.add-on-tile:not([data-add-on-type='${e}'])`);a.length>0&&a.each(((t,n)=>{const a=r(n).attr("data-prod-id"),s=r(n).attr("data-add-on-type");if(!g[a][e]){"sim"!==e||"upsell"!==s||r(".add-on-tile[data-add-on-type='upsell']").hasClass("selected")||(k("add-ons-question",r(".add-on-tile[data-add-on-type='upsell']")),r(".add-on-tile[data-add-on-type='upsell'] .add-on-tile-select").addClass("d-none"),r(".add-on-tile[data-add-on-type='upsell'] .add-on-tile-included").removeClass("d-none"),r(".add-on-tile[data-add-on-type='upsell']").find(".add-on-extra-price-container").css({opacity:0}));for(const[t,d]of Object.entries(g))"upsell"===e&&"sim"===s?P(n,a):d[s]&&d[e]&&P(n,t)}}))},T=e=>{if("upsell"===e&&0===r(`.add-on-tile.selected:not([data-add-on-type='${e}'])`).length){let e;e=r("#contract-length-question").length>0?r(".contract-length-tile.selected"):r(".bb-speed-tile.selected");const t=e.attr("data-prod-id");v=O(t)}else for(const[e,t]of Object.entries(m)){const n=Object.assign({},t);delete n.upsellProductTo,JSON.stringify(Object.values(n))===JSON.stringify(Object.values(f))&&(v=O(e))}$(v)},D=(e,t)=>{"sim"===e&&r(".add-on-tile[data-add-on-type='upsell']").hasClass("selected")&&!f.upsell&&(k("add-ons-question",r(".add-on-tile[data-add-on-type='upsell']")),r(".add-on-tile[data-add-on-type='upsell'] .add-on-tile-select").removeClass("d-none"),r(".add-on-tile[data-add-on-type='upsell'] .add-on-tile-included").addClass("d-none"),r(".add-on-tile[data-add-on-type='upsell']").find(".add-on-extra-price-container").css({opacity:1})),f[e]=!1,T(e);r(".add-on-tile").each(((e,t)=>{const n=r(t).attr("data-add-on-type");if("upsell"!==n)for(const[e,a]of Object.entries(m)){console.log("addOns",a);const s=Object.assign({},a);if(delete s.upsellProductTo,console.log("newAddOnsObject",s),s[n]){let a=!1;if(Object.keys(s).forEach((e=>{e!==n&&s[e]!==f[e]&&(a=!0)})),!a){P(t,e);break}}}})),r(t).find(".add-on-extra-price-container").css({opacity:1})},B=()=>{r("#add-ons-question .add-on-tile .add-on-tile-select").on("click",(e=>{const t=r(e.target).parents(".add-on-tile").attr("data-prod-id"),n=(r(e.target).parents(".add-on-tile").attr("data-prod-speed"),r(e.target).parents(".add-on-tile").attr("data-add-on-type")),a=r(e.target).attr("btn-action-type");v=O(t),$(v),"add"===a?S(n,t,r(e.target).parents(".add-on-tile")):D(n,r(e.target).parents(".add-on-tile")),k("add-ons-question",r(e.target).parents(".add-on-tile")),o.fireOpti("bb_builder_add_on_tiles_click"),o.fireGA("960","clicked on add on tiles")}))},_=(e,t)=>{v=O(e),$(v);const n=v.contractLength;if(m=x(t,n),Object.keys(m).length>0){const t=Object.keys(m).filter((e=>""!==m[e].upsellProductTo)),n=[];t.map((e=>{m[e].upsell=!1;const t=m[e].upsellProductTo;n.push(t);const a=O(t);Object.assign(m,{[a.id]:{tv:a.hasTV,sim:a.isVolt,upsell:!0,upsellProductTo:""}})})),g=Object.keys(m).filter((t=>t!==e)).reduce(((e,t)=>(e[t]=m[t],e)),{}),console.log("productPerSpeedContractLengthFiltered",g);let a=[];for(const[e,t]of Object.entries(g)){const s=O(e),d=(s.monthlyPrice-v.monthlyPrice).toFixed(2);n.includes(e)?a.push({addOnTypeId:"upsell",prodId:e,priceDifference:d,productObj:s}):t.tv&&!t.sim?a.push({addOnTypeId:"tv",prodId:e,priceDifference:d,productObj:s}):!t.tv&&t.sim&&a.push({addOnTypeId:"sim",prodId:e,priceDifference:d,productObj:s})}a.sort((function(e,t){return parseFloat(e.priceDifference)-parseFloat(t.priceDifference)})),p(),a.length>0&&(c(a),B(),y("add-ons-question"))}else p()},L=()=>{r("#contract-length-question .contract-length-tile .contract-length-tile-select").on("click",(e=>{k("contract-length-question",r(e.target).parents(".contract-length-tile"));const t=r(e.target).parents(".contract-length-tile").attr("data-prod-id"),n=r(e.target).parents(".contract-length-tile").attr("data-prod-speed");_(t,n),o.fireOpti("bb_builder_contract_length_tiles_click"),o.fireGA("960","clicked on contract length tiles")}))};r("#broadband-builder-speeds-swiper .bb-speed-tile .bb-speed-tile-select").on("click",(e=>{o.fireOpti("bb_builder_speed_tiles_click"),o.fireGA("960","clicked on speed tiles"),k("broadband-builder-speeds-swiper",r(e.target).parents(".bb-builder-tile"));const t=r(e.target).parents(".bb-speed-tile").attr("data-prod-id"),n=r(e.target).parents(".bb-speed-tile").attr("data-prod-speed");v=O(t);const a=s.filter((e=>e.id!==t&&e.contractLength!==v.contractLength&&e.speedLabel===n&&e.isVolt===v.isVolt&&e.hasTV===v.hasTV)),d=a.length>0,c=d?a[0]:null;0===r(".bb-builder-basket-bar-wrapper").length?b(v):$(v),d?(l(),p(),i(v,c),L(),w("contract-length-question"),y("contract-length-question")):(l(),p(),_(t,n),y("add-ons-question"))}));const C=()=>{r("#service-not-available").length>0&&0===r("#service-not-available .change-postcode").length&&(r("#broadband-builder-tool").hide(),r("#bb-builder-basket-bar").hide())},I=t.querySelectorAll(".postcode-container"),A={childList:!0,subtree:!0},M=new MutationObserver((function(e,t){for(const t of e)t.target.classList.contains("vm-row")&&C()}));I.forEach(((e,t)=>M.observe(e,A)))}}),500)}(window,document);
}}, {"value": "<style>.bb-builder .bb-builder-basket-bar-plan-detail-wrapper,.bb-builder .d-none,.bb-builder vm-product-card-section .vm-container{display:none!important}.bb-builder vm-modal .modal{z-index:11!important}.bb-builder .bb-tile-border{border:1px solid #dbdbdb;border-radius:8px}.bb-builder .bb-tile-border.selected{border:2px solid #348437}.bb-builder .bb-builder-btn{cursor:pointer;height:3rem;border-radius:var(--action-button-border-radius);text-align:center;padding-left:1.5rem;padding-right:1.5rem;display:inline-block;line-height:2.75rem;text-decoration:none;box-sizing:border-box;white-space:nowrap;text-overflow:ellipsis;width:100%}.bb-builder .bb-builder-btn.bb-builder-btn--primary{border:.125rem solid #322332;color:#322332}.bb-builder .bb-builder-btn.bb-builder-btn--secondary{border:.125rem solid #ed0000;color:#fff;background-color:#ed0000;max-width:137px}.bb-builder .bb-builder-link{font-family:var(--text-link-font-family);color:var(--text-link-color);text-decoration:underline;cursor:pointer}.bb-builder .mt-md{margin-top:16px}.bb-builder .mb-md{margin-bottom:16px}.bb-builder .divider-line{height:1px;background-color:#dbdbdb;width:100%;margin:16px 0;display:none}.bb-builder .txt-bold{font-family:var(--text-bold-font-family)}.bb-builder .txt-red{color:#ed0000}.bb-builder .txt-bold-lg{font-size:28px;line-height:35px}.bb-builder #broadband-builder-tool .bb-builder-tile{padding:16px;font-family:var(--body-secondary-font-family);text-align:center}.bb-builder #broadband-builder-tool,.bb-builder .bb-builder-basket-bar-inner+.basket-plan-details--mobile{text-align:center}.bb-builder .bb-builder-tool-title{font-size:28px;padding-bottom:8px;padding-top:16px;font-family:var(--body-secondary-font-family)}.bb-builder .bb-builder-speeds-title{padding-top:24px;padding-bottom:4px}.bb-builder .bb-builder-section-title{padding-bottom:8px}.bb-builder #bb-builder-basket-bar{position:fixed;width:100%;bottom:0;z-index:10;background-color:#fff}.bb-builder .bb-builder-basket-bar-wrapper{background-color:#322332}.bb-builder .bb-builder-basket-bar-container{color:#fff!important;padding-top:16px;padding-bottom:16px;font-family:var(--body-secondary-font-family)}.bb-builder .bb-builder-basket-bar-container .bb-builder-link{color:#fff!important}.bb-builder .bb-builder-basket-bar-wrapper.show-plan-details .basket-plan-details i{transform:rotate(180deg)}.bb-builder .bb-builder-basket-bar-inner{color:#fff;display:flex;justify-content:space-between;align-items:center}.bb-builder .bb-builder-basket-bar-container .basket-monthly-tot>span:first-child,.bb-builder .bb-builder-basket-bar-container .basket-oneoff-tot>span:first-child{min-width:65px;display:inline-block}.bb-builder .bb-builder-basket-bar-container .txt-bold{font-size:20px;margin-left:10px}.bb-builder .bb-builder-basket-bar-container .a-month{font-size:14px;display:block}.bb-builder .bb-builder-basket-bar-wrapper .basket-plan-details--desktop,.bb-builder .bb-speed-tile .bb-speed-tile-description,.bb-builder-layout .monthly-total-wrapper .plan-details-container i.fa-times,.bb-builder-layout .monthly-total-wrapper .plan-details-container.open-plan-details i.fa-chevron-down{display:none}.bb-builder .bb-builder-basket-bar-wrapper .basket-plan-details--mobile,.bb-builder .plan-details-backdrop.show-backdrop,.bb-builder-layout .monthly-total-wrapper .plan-details-container i.fa-chevron-down,.bb-builder-layout .monthly-total-wrapper .plan-details-container.open-plan-details i.fa-times{display:block}.bb-builder .bb-builder-basket-bar-plan-detail-wrapper.show-plan-details{display:block!important;max-height:75vh;overflow-y:scroll}.bb-builder .bb-speed-tile-top-section{display:flex;flex-direction:column;justify-content:space-between;align-items:center}.bb-builder .bb-speed-tile-price-container{margin-top:16px;min-height:107px}.bb-builder #contract-length-question{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-bottom:50px;margin-top:24px;padding-right:20px}.bb-builder .contract-length-tile .contract-length-tile-title{font-family:var(--text-link-font-family);font-size:20px}.bb-builder .contract-length-tile .a-month{font-size:.875rem}.bb-builder .add-on-tile img{max-width:73px;max-height:67px}.bb-builder .add-on-tile .cheaper-add-on,.bb-builder .add-on-tile .green-tick,.bb-builder .add-on-tile-included{color:#348437}.bb-builder .add-on-tile .add-on-description{min-height:72px}.bb-builder-layout .flare{position:absolute;top:1.4rem;left:-.6rem;display:flex;flex-direction:column}.bb-builder-layout .full-flare{width:4.5rem;overflow:hidden}.bb-builder-layout .flare--charge__background{height:3.625rem;width:100%}.bb-builder-layout .flare--charge__background .flare-text{height:3.1875rem;display:flex;flex-direction:column;justify-content:center}.bb-builder #add-ons-question{padding-right:20px}.bb-builder .swiper-container{position:relative;padding-bottom:2rem;padding-top:24px;overflow:hidden}.bb-builder .broadband-builder-speeds-wrapper.vm-container{padding-right:0;padding-left:0}.bb-builder .swiper-pagination{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;gap:8px;width:auto!important}.bb-builder .swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active{background:#ed0000}.bb-builder .swiper-pagination .swiper-pagination-bullet{cursor:pointer;width:24px;height:4px;border-radius:2px;background-color:#dbdbdb;opacity:1}.bb-builder .swiper-nav-wrapper{display:flex;flex-direction:row;justify-content:center;align-items:center;height:50px}.bb-builder .swiper-button-next,.bb-builder .swiper-button-prev,.bb-builder .swiper-pagination{position:unset;z-index:2}.bb-builder .swiper-button-next:after,.bb-builder .swiper-button-prev:after{font-size:16px!important;color:#979797}.bb-builder .swiper-button-next{right:20px}.bb-builder .swiper-button-prev{left:20px}.bb-builder .swiper-button-next,.bb-builder .swiper-button-prev{margin-top:0;height:unset}.bb-builder .plan-details-backdrop{display:none;position:fixed;z-index:10;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(0,0,0,.5)}.bb-builder .bb-builder-basket-bar-plan-detail-container{max-width:320px;margin:0 auto;padding-top:24px;padding-bottom:16px}.bb-builder .bb-builder-basket-bar-plan-detail-container .section-content p,.bb-builder .bb-builder-basket-bar-plan-detail-container .section-promo p{margin-top:.5rem;margin-left:2rem}.bb-builder .bb-builder-basket-bar-plan-detail-container .more__header{position:relative;margin-bottom:1rem;display:flex;justify-content:space-between;align-items:center}.bb-builder .bb-builder-basket-bar-plan-detail-container .more__header span p{font-family:VMCircularShoutPTT,Arial,Helvetica,\"sans-serif\"}.bb-builder .bb-builder-basket-bar-plan-detail-container .section-content,.bb-builder .bb-builder-basket-bar-plan-detail-container .section-promo{margin-bottom:1rem}.bb-builder .bb-builder-basket-bar-plan-detail-container .more__details ul li{padding-left:2rem;margin-top:.625rem;text-indent:-1.625rem}.bb-builder .bb-builder-basket-bar-plan-detail-container ul li span{margin-right:1rem;position:inherit}.bb-builder .bb-builder-basket-bar-plan-detail-container ul li span:first-child{padding-left:.6875rem}.bb-builder-layout .monthly-total-wrapper .plan-details-container{cursor:pointer}.bb-builder .bb-builder-basket-bar-plan-detail-container a{font-family:var(--text-link-font-family);color:#5f2878}@media only screen and (min-width:768px){.bb-builder .bb-builder-tool-title{font-size:44px;padding-bottom:16px}.bb-builder .bb-builder-speeds-title{padding-top:40px}.bb-builder .bb-builder-basket-bar-wrapper .basket-plan-details--desktop,.bb-builder .divider-line{display:block}.bb-builder #add-ons-question .swiper-nav-wrapper,.bb-builder .bb-builder-basket-bar-wrapper .basket-plan-details--mobile{display:none}.bb-builder .bb-builder-basket-bar-container .a-month{display:inline}.bb-builder .bb-speed-tile .bb-speed-tile-description{display:block;min-height:48px}.bb-builder .bb-speed-tile .txt-bold.bb-speed-tile-price{margin-bottom:5px}.bb-builder .bb-speed-tile-top-section{flex-direction:row;align-items:flex-start;text-align:left}.bb-builder .bb-speed-tile-price-container{margin-top:0;min-height:95px}.bb-builder #broadband-builder-tool .txt-bold-lg{font-size:36px}.bb-builder .bb-speed-tile .bb-speed-tile-price-container .a-month{margin-top:-5px;font-size:.875rem}.bb-builder #contract-length-question{flex-direction:row}.bb-builder .contract-length-tile .contract-length-tile-title{font-size:24px}.bb-builder .contract-length-tile{margin:0 8px}.bb-builder .add-on-tile .add-on-description{min-height:unset}.bb-builder #add-ons-question .add-on-extra-price-container,.bb-builder #add-ons-question .add-on-title{font-size:20px}.bb-builder #add-ons-question .add-ons-question-wrapper,.bb-builder #contract-length-question .swiper-wrapper{justify-content:center}.bb-builder #add-ons-question .add-on-tile,.bb-builder #contract-length-question .swiper-wrapper{max-width:288px;margin:0 8px}.bb-builder #add-ons-question .add-ons-question-wrapper{width:auto}.bb-builder .swiper-pagination .swiper-pagination-bullet{width:40px}}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "27D3B27C-FAF5-45F1-898A-762C91611BB5"}]}], "name": "Variation #1"}], "audienceIds": ["and", "23197550032", "23683890047"], "changes": null, "id": "23636440766", "integrationSettings": null}], "id": "23687431010", "weightDistributions": null, "name": "[QA] [no-track] Broadband Builder 2.0 ", "groupId": null, "commitId": "23792520511", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["23317210291"], "experiments": [{"weightDistributions": [{"entityId": "23661471392", "endOfRange": 3334}, {"entityId": "23652200876", "endOfRange": 6667}, {"entityId": "23654561124", "endOfRange": 10000}], "audienceName": "Desktop Only", "name": "[A/B] CSCRO-1064 HP Signposting", "bucketingStrategy": null, "variations": [{"id": "23661471392", "actions": [{"viewId": "23317210291", "changes": [{"dependencies": [], "type": "custom_code", "id": "7ABB574E-3BEB-4D94-AC70-E4124F3D2683", "value": function($){// Wrap code in an IIFE
   (function (window, document){
    // Invoking strict mode
    'use strict';

    // Run a timer here because of the dynamic JS rendering
    let $timerA = window.setInterval(function () {
        // Try to grab a test subject
        let subject = document.querySelector("vm-custom-tile-with-icon-small-section:nth-of-type(2)"),
        subject2 = document.querySelector("div.login-popover"),
        subject3 = document.querySelector("button.user-account-btn"),
        subject4 = document.querySelector(".top-header__navigation ul > li"),
        subject5 = document.querySelector(".menu-column >div > ul > li"),
            $ = window.$;

            const howCanWeHelpObserver = function(){
                const targetNode = document.querySelector("vm-custom-tile-with-icon-small-section:nth-of-type(2)")
                    const config = { childList: true, subtree: true, attributes: true};
                    
                    const callback = function(mutationsList, observer) {
                        for(const mutation of mutationsList) {
                            if (mutation.type === 'childList') {
                                for(const node of mutation.addedNodes){
                                    if (!node.tagName) continue;   
                                        attachClickEvents();
                                }
                            }
                        }
                    };
                    const observer = new MutationObserver(callback);
                    observer.observe(targetNode, config);
            }

            const myEmailObserver = function(){
                const targetNode = document.querySelector("div.login-popover")
                    const config = { childList: true, subtree: true, attributes: true};
                    
                    const callback = function(mutationsList, observer) {
                        for(const mutation of mutationsList) {
                            if (mutation.type === 'childList') {
                                for(const node of mutation.addedNodes){
                                    if (!node.tagName) continue;  
                                        attachClickEvents();
                                }
                            }
                        }
                    };
                    const observer = new MutationObserver(callback);
                    observer.observe(targetNode, config);
            }

            
            const attachClickEvents = function(){

                //My Account tracking
                $("button.user-account-btn").click((e)=>{
                    e.stopImmediatePropagation();
                    setTimeout(()=>{
                        if($("vm-screen-overlay").length>0){
                            window.sales_cro.fireGA("1064","my account click");
                            window.sales_cro.fireOpti("my_account_click_1064");
                        }
                    },100)                    
                })

                //How can we help tracking
                $(".menu-column >div > ul > li:last-child, .top-header__navigation ul > li:nth-child(3) a, vm-custom-tile-with-icon-small-section:nth-of-type(2) .vm-row > div:first-of-type").click((e)=>{
                    e.stopImmediatePropagation();
                    window.sales_cro.fireGA("1064","how can we help click");
                })

                //Expanding our network tracking
                $(".top-header__navigation ul > li:first-child a").click((e)=>{
                    e.stopImmediatePropagation();
                    window.sales_cro.fireGA("1064","expanding our network click");
                })

                //My Virginmedia tracking
                $("vm-custom-tile-with-icon-small-section:nth-of-type(2) .vm-row > div:nth-of-type(2),.top-header__navigation ul > li:nth-child(2) a").click((e)=>{
                    e.stopImmediatePropagation();
                    window.sales_cro.fireGA("1064","my virgin media click");
                })

                 //Business tracking
                 $(".hp-signposting nav.top-header__navigation > ul > li:nth-child(4) a").click(()=>{
                    window.sales_cro.fireGA("1064","business click");
                })

                //Email tracking
                $(".hp-signposting nav.top-header__navigation > ul > li:nth-child(5) a").click(()=>{
                    window.sales_cro.fireGA("1064","email click");
                })

                //Existing customer tracking
                $(".hp-signposting nav.top-header__navigation > ul > li:last-child a").click(()=>{
                    window.sales_cro.fireGA("1064","existing customer click");
                })

                //Broadband deals tracking
                $(".menu-column >div > ul > li:first-child a").click(()=>{
                    window.sales_cro.fireGA("1064","broadband deals click");
                })

                //Mobile deals tracking
                $(".menu-column >div > ul > li:nth-child(2) a").click(()=>{
                    window.sales_cro.fireGA("1064","mobile deals click");
                })

                //What to watch tracking
                $(".menu-column >div > ul > li:nth-child(3) a").click((e)=>{
                    e.stopImmediatePropagation();
                    window.sales_cro.fireGA("1064","what to watch click");
                })

                //Blog tracking
                $(".menu-column >div > ul > li:nth-child(4) a").click((e)=>{
                    e.stopImmediatePropagation();
                    window.sales_cro.fireGA("1064","blog click");
                })

                //Sign in VM tracking
                $(".login-popover .login-wrapper > .popover-content > div.vm-row:first-child").click((e)=>{
                    e.stopImmediatePropagation();
                    window.sales_cro.fireGA("1064","sign in vm click");
                })
                //Sign in mobile tracking
                $(".login-popover .login-wrapper > .popover-content > div.vm-row:nth-child(2)").click((e)=>{
                    e.stopImmediatePropagation();
                    window.sales_cro.fireGA("1064","sign in mobile click");
                })

                //No account tracking
                $(".login-popover .login-wrapper > .popover-content > div.vm-row:nth-child(3)").click((e)=>{
                    e.stopImmediatePropagation();
                    window.sales_cro.fireGA("1064","no account click");
                })

                //Live Chat tracking
                $("vm-custom-tile-with-icon-small-section:nth-of-type(2) .vm-row > div:nth-of-type(3), .LPMcontainer.LPMoverlay").click((e)=>{
                    e.stopImmediatePropagation();
                    window.sales_cro.fireGA("1064","live chat click");
                })

                //Call us tracking
                $("vm-custom-tile-with-icon-small-section:nth-of-type(2) .vm-row > div:nth-of-type(4)").click((e)=>{
                    e.stopImmediatePropagation();
                    window.sales_cro.fireGA("1064","call us click");
                })
                
            }
            
        // Only proceed if subject is found in DOM
        if(subject && subject2 && subject3 && subject4 && typeof $ == "function") {
            window.clearInterval($timerA);          
            $('body').addClass('hp-signposting');
            console.log("in 1064 hp signpossting control");
            howCanWeHelpObserver();
            myEmailObserver();
            attachClickEvents();
        }
       
    }, 500);
   /* setTimeout(function(){
        if($timerA !== null){
          clearInterval($timerA);
          if(typeof(error) === 'function'){
            error();
          }
        }
      }, 20000);*/
}(window, document));
}}]}], "name": "Original"}, {"id": "23652200876", "actions": [{"viewId": "23317210291", "changes": [{"dependencies": [], "type": "custom_code", "id": "DB03D3DC-D26C-4304-A78A-1EE2E92DF714", "value": function($){// Wrap code in an IIFE
   (function (window, document){
    // Invoking strict mode
    'use strict';

    // Run a timer here because of the dynamic JS rendering
    let $timerA = window.setInterval(function () {
        // Try to grab a test subject
        let subject = document.querySelector("vm-custom-tile-with-icon-small-section:nth-of-type(2)"),
        subject2 = document.querySelector("div.login-popover"),
        subject3 = document.querySelector("button.user-account-btn"),
            $ = window.$;
            
            const expandNetworkObserver = function(){
                const targetNode = document.querySelector("vm-custom-tile-with-icon-small-section:nth-of-type(2)")
                    const config = { childList: true, subtree: true, attributes: true};
                    
                    const callback = function(mutationsList, observer) {
                        for(const mutation of mutationsList) {
                            if (mutation.type === 'childList') {
                                for(const node of mutation.addedNodes){
                                    if (!node.tagName) continue;                                    
                                    if($("vm-custom-tile-with-icon-small-section:nth-of-type(2) .vm-row > div").length==4 && document.querySelector("vm-custom-tile-with-icon-small-section:nth-of-type(2) .vm-row > div:first-of-type vm-media img")!==null && $(".expandNetworkTile").length==0 && $(".blogTile").length==0){
                                        expandNetworkUpdates();
                                        blogUpdates();
                                        attachClickEvents();
                                    }
                                }
                            }
                        }
                    };
                    const observer = new MutationObserver(callback);
                    observer.observe(targetNode, config);
            }

            const myEmailObserver = function(){
                const targetNode = document.querySelector("div.login-popover")
                    const config = { childList: true, subtree: true, attributes: true};
                    
                    const callback = function(mutationsList, observer) {
                        for(const mutation of mutationsList) {
                            if (mutation.type === 'childList') {
                                for(const node of mutation.addedNodes){
                                    if (!node.tagName) continue;                                    
                                    if($(".myEmail").length==0){
                                        myEmailUpdates();
                                        attachClickEvents();
                                    }
                                }
                            }
                        }
                    };
                    const observer = new MutationObserver(callback);
                    observer.observe(targetNode, config);
            }

            const expandNetworkUpdates = function(){        
                    // Expand our Network Changes     
                    const expandNetworkTile = $("vm-custom-tile-with-icon-small-section:nth-of-type(2) .vm-row > div:first-of-type").clone().addClass("expandNetworkTile");
                    $("vm-custom-tile-with-icon-small-section:nth-of-type(2) .vm-row").append(expandNetworkTile);
                    $(".expandNetworkTile .vm-tile-container > a").attr("href", $(".hp-signposting nav.top-header__navigation > ul > li:first-child a").attr("href"));
                    $(".expandNetworkTile .vm-tile-container > a vm-media img").attr("src", "https://www.virginmedia.com/content/dam/virginmedia/dotcom/images/ABtest/cro/van_icon.svg");
                    
                    $(".expandNetworkTile .vm-tile-container > a .tile-nav-link__text").text("Expanding our network");
            }

            const blogUpdates = function(){        
                // Expand our Network Changes     
                const blogTile = $("vm-custom-tile-with-icon-small-section:nth-of-type(2) .vm-row > div:first-of-type").clone().addClass("blogTile");
                $("vm-custom-tile-with-icon-small-section:nth-of-type(2) .vm-row").append(blogTile);
                $(".blogTile .vm-tile-container > a").attr("href", $(".menu-column >div > ul > li:not(.menu-parent)").eq(1).find("a").attr("href"));
                $(".blogTile .vm-tile-container > a vm-media img").attr("src", "https://www.virginmedia.com/content/dam/virginmedia/dotcom/images/ABtest/cro/question-circle.svg");                
                $(".blogTile .vm-tile-container > a .tile-nav-link__text").text($(".menu-column >div > ul > li:not(.menu-parent)").eq(1).find("a").text());
        }

            const myEmailUpdates = function(){
                const newElement = $(".login-popover .login-wrapper > .popover-content > div.vm-row").last().clone().addClass("myEmail");                              
                $(".login-popover .login-wrapper > .popover-content").append($(newElement));
                $(".myEmail .login-title a").attr("href",$(".hp-signposting nav.top-header__navigation > ul > li:nth-child(5) a").attr("href"))
                document.querySelector(".myEmail .login-title a").childNodes[1].textContent = "Sign in to my Email";  
            }

            const whatToWatchUpdates = function(){
                if($(".whatToWatch").length==0){
                    const whatToWatchEl = $("li a[title*='Stream from Virgin Media']").closest("li").clone().addClass("whatToWatch");
                    $("li a[title*='Stream from Virgin Media']").closest("li").before(whatToWatchEl);
                    $(".whatToWatch a").attr("href",$(".menu-column >div > ul > li:not(.menu-parent)").eq(0).find("a").attr("href"));
                    $(".whatToWatch a").text($(".menu-column >div > ul > li:not(.menu-parent)").eq(0).find("a").text());
                }
                

            }

            const personIconUpdates = function(){
                $("vm-login").append("<span class='myVMCopy'>My Virgin Media</span>")
            }
            const attachClickEvents = function(){
                //Expanding our network tracking
                $(".expandNetworkTile").click((e)=>{
                    e.stopImmediatePropagation();
                    window.sales_cro.fireGA("1064","expanding our network click");
                })

                //My Account tracking
                $(".myVMCopy").click((e)=>{
                    e.stopImmediatePropagation();
                    $("button.user-account-btn").click()
                })
                $("button.user-account-btn").click((e)=>{                    
                    e.stopImmediatePropagation();
                    setTimeout(()=>{
                        if($("vm-screen-overlay").length>0){
                            window.sales_cro.fireGA("1064","my account click");
                            window.sales_cro.fireOpti("my_account_click_1064");
                        }
                    },100)                    
                })
                //How can we help tracking
                $(".menu-column >div > ul > li:last-child, vm-custom-tile-with-icon-small-section:nth-of-type(2) .vm-row > div:first-of-type").click((e)=>{
                    e.stopImmediatePropagation();
                    window.sales_cro.fireGA("1064","how can we help click");
                })

                //My Virginmedia tracking
                $("vm-custom-tile-with-icon-small-section:nth-of-type(2) .vm-row > div:nth-of-type(2)").click((e)=>{
                    e.stopImmediatePropagation();
                    window.sales_cro.fireGA("1064","my virgin media click");
                })

                //Business tracking
                $(".hp-signposting nav.top-header__navigation > ul > li:nth-child(4) a").click(()=>{
                    window.sales_cro.fireGA("1064","business click");
                })

                //Email tracking
                $(".myEmail a.text-button").click(()=>{
                    window.sales_cro.fireGA("1064","email click");
                })
                //Existing customer tracking
                $(".hp-signposting nav.top-header__navigation > ul > li:last-child").click(()=>{
                    window.sales_cro.fireGA("1064","existing customer click");
                })

                //Broadband deals tracking
                $(".menu-column >div > ul > li:first-child").click(()=>{
                    window.sales_cro.fireGA("1064","broadband deals click");
                })

                //Mobile deals tracking
                $(".menu-column >div > ul > li:nth-child(2)").click(()=>{
                    window.sales_cro.fireGA("1064","mobile deals click");
                })

                //What to watch tracking
                $(".whatToWatch").click((e)=>{
                    e.stopImmediatePropagation();
                    window.sales_cro.fireGA("1064","what to watch click");
                })

                //Blog tracking
                $(".blogTile").click((e)=>{
                    e.stopImmediatePropagation();
                    window.sales_cro.fireGA("1064","blog click");
                })

                //Sign in VM tracking
                $(".login-popover .login-wrapper > .popover-content > div.vm-row:first-child").click((e)=>{
                    e.stopImmediatePropagation();
                    window.sales_cro.fireGA("1064","sign in vm click");
                })

                //Sign in mobile tracking
                $(".login-popover .login-wrapper > .popover-content > div.vm-row:nth-child(2)").click((e)=>{
                    e.stopImmediatePropagation();
                    window.sales_cro.fireGA("1064","sign in mobile click");
                })

                //No account tracking
                $(".login-popover .login-wrapper > .popover-content > div.vm-row:nth-child(3)").click((e)=>{
                    e.stopImmediatePropagation();
                    window.sales_cro.fireGA("1064","no account click");
                })

                //Live Chat tracking
                $("vm-custom-tile-with-icon-small-section:nth-of-type(2) .vm-row > div:nth-of-type(3), .LPMcontainer.LPMoverlay").click((e)=>{
                    //e.stopImmediatePropagation();
                    window.sales_cro.fireGA("1064","live chat click");
                })

                //Call us tracking
                $("vm-custom-tile-with-icon-small-section:nth-of-type(2) .vm-row > div:nth-of-type(4)").click((e)=>{
                    e.stopImmediatePropagation();
                    window.sales_cro.fireGA("1064","call us click");
                })
                
            }
            
        // Only proceed if subject is found in DOM
        if(subject && subject2 && subject3 && typeof $ == "function") {
            window.clearInterval($timerA);          
            $('body').addClass('hp-signposting');
            console.log("in 1064 ho signpossting");
            expandNetworkObserver();
            myEmailObserver();
            whatToWatchUpdates();
            personIconUpdates();
            attachClickEvents();
        }
       
    }, 500);
   /* setTimeout(function(){
        if($timerA !== null){
          clearInterval($timerA);
          if(typeof(error) === 'function'){
            error();
          }
        }
      }, 20000);*/
}(window, document));
}}, {"value": "<style>@media (min-width:992px){\n    .hp-signposting nav.top-header__navigation > ul > li:not(:last-child, :nth-child(4)),\n    .hp-signposting .menu-column >div > ul > li:nth-child(3),\n    .hp-signposting .menu-column >div > ul > li:nth-child(4){display: none!important;}\n\n    .hp-signposting .myVMCopy{\n        font-family: 'VMCircularChatPTT';\n        color: #fff;\n        cursor: pointer;\n        z-index: 2;\n    }\n    .hp-signposting vm-login{\n        display: flex;\n        align-items: center;\n        justify-content: flex-start;\n    }\n\n    .hp-signposting  .basket-icon-wrapper{\n        right: 14.5rem!important;\n    }\n}\n\n@media (max-width:991px) {\n    .expandNetworkTile,\n    .blogTile,\n    .myVMCopy,\n    .myEmail {display: none!important;}\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "03D4AA02-E3BC-41FE-935D-5694D9AB5135"}]}], "name": "Exp 2"}, {"id": "23654561124", "actions": [{"viewId": "23317210291", "changes": [{"dependencies": [], "type": "custom_code", "id": "8051E687-5CBE-4792-B7AB-FB58B79354F0", "value": function($){// Wrap code in an IIFE
   (function (window, document){
    // Invoking strict mode
    'use strict';

    // Run a timer here because of the dynamic JS rendering
    let $timerA = window.setInterval(function () {
        // Try to grab a test subject
        let subject = document.querySelector("vm-custom-tile-with-icon-small-section:nth-of-type(2)"),
        subject2 = document.querySelector("div.login-popover"),
        subject3 = document.querySelector("button.user-account-btn"),
            $ = window.$;
            
            const expandNetworkObserver = function(){
                const targetNode = document.querySelector("vm-custom-tile-with-icon-small-section:nth-of-type(2)")
                    const config = { childList: true, subtree: true, attributes: true};
                    
                    const callback = function(mutationsList, observer) {
                        for(const mutation of mutationsList) {
                            if (mutation.type === 'childList') {
                                for(const node of mutation.addedNodes){
                                    if (!node.tagName) continue;                                    
                                    if($("vm-custom-tile-with-icon-small-section:nth-of-type(2) .vm-row > div").length==4 && document.querySelector("vm-custom-tile-with-icon-small-section:nth-of-type(2) .vm-row > div:first-of-type vm-media img")!==null && $(".expandNetworkTile").length==0 && $(".blogTile").length==0){
                                        expandNetworkUpdates();
                                        blogUpdates();
                                        exp3Updates();
                                        attachClickEvents();
                                    }
                                }
                            }
                        }
                    };
                    const observer = new MutationObserver(callback);
                    observer.observe(targetNode, config);
            }

            const myEmailObserver = function(){
                const targetNode = document.querySelector("div.login-popover")
                    const config = { childList: true, subtree: true, attributes: true};
                    
                    const callback = function(mutationsList, observer) {
                        for(const mutation of mutationsList) {
                            if (mutation.type === 'childList') {
                                for(const node of mutation.addedNodes){
                                    if (!node.tagName) continue;                                    
                                    if($(".myEmail").length==0){
                                        myEmailUpdates();
                                        attachClickEvents();
                                    }
                                }
                            }
                        }
                    };
                    const observer = new MutationObserver(callback);
                    observer.observe(targetNode, config);
            }

            const expandNetworkUpdates = function(){        
                    // Expand our Network Changes     
                    const expandNetworkTile = $("vm-custom-tile-with-icon-small-section:nth-of-type(2) .vm-row > div:first-of-type").clone().addClass("expandNetworkTile");
                    $("vm-custom-tile-with-icon-small-section:nth-of-type(2) .vm-row").append(expandNetworkTile);
                    $(".expandNetworkTile .vm-tile-container > a").attr("href", $(".hp-signposting nav.top-header__navigation > ul > li:first-child a").attr("href"));
                    $(".expandNetworkTile .vm-tile-container > a vm-media img").attr("src", "https://www.virginmedia.com/content/dam/virginmedia/dotcom/images/ABtest/cro/van_icon.svg");
                    
                    $(".expandNetworkTile .vm-tile-container > a .tile-nav-link__text").text("Network Coverage");
            }

            const blogUpdates = function(){        
                // Expand our Network Changes     
                const blogTile = $("vm-custom-tile-with-icon-small-section:nth-of-type(2) .vm-row > div:first-of-type").clone().addClass("blogTile");
                $("vm-custom-tile-with-icon-small-section:nth-of-type(2) .vm-row").append(blogTile);
                $(".blogTile .vm-tile-container > a").attr("href", $(".menu-column >div > ul > li:not(.menu-parent)").eq(1).find("a").attr("href"));
                $(".blogTile .vm-tile-container > a vm-media img").attr("src", "https://www.virginmedia.com/content/dam/virginmedia/dotcom/images/ABtest/cro/question-circle.svg");                
                $(".blogTile .vm-tile-container > a .tile-nav-link__text").text($(".menu-column >div > ul > li:not(.menu-parent)").eq(1).find("a").text());
        }

            const myEmailUpdates = function(){
                const newElement = $(".login-popover .login-wrapper > .popover-content > div.vm-row").last().clone().addClass("myEmail");                              
                $(".login-popover .login-wrapper > .popover-content").append($(newElement));
                $(".myEmail .login-title a").attr("href",$(".hp-signposting nav.top-header__navigation > ul > li:nth-child(5) a").attr("href"))
                document.querySelector(".myEmail .login-title a").childNodes[1].textContent = "Sign in to my Email";  
            }

            const whatToWatchUpdates = function(){
                if($(".whatToWatch").length==0){
                    const whatToWatchEl = $("li a[title*='Stream from Virgin Media']").closest("li").clone().addClass("whatToWatch");
                    $("li a[title*='Stream from Virgin Media']").closest("li").before(whatToWatchEl);
                    $(".whatToWatch a").attr("href",$(".menu-column >div > ul > li:not(.menu-parent)").eq(0).find("a").attr("href"));
                    $(".whatToWatch a").text("Entertainment");
                }
                

            }

            const personIconUpdates = function(){
                $("vm-login").append("<span class='myVMCopy'>My Account</span>")
            }

            const exp3Updates = function(){
                if(window.innerWidth>991){
                    $(".hp-signposting nav.top-header__navigation > ul > li:nth-child(4) a").text("For Business");
                    $(".menu-column >div > ul > li:last-child a").text("Help");
                }
                else{
                    $(".hp-signposting nav.top-header__navigation > ul > li:nth-child(4) a").text("Business");
                    $(".menu-column >div > ul > li:last-child a").text("Help and Support");
                }
                
            }

            const attachClickEvents = function(){
                //Expanding our network tracking
                $(".expandNetworkTile").click((e)=>{
                    e.stopImmediatePropagation();
                    window.sales_cro.fireGA("1064","expanding our network click");
                })

                //My Account tracking
                $(".myVMCopy").click((e)=>{
                    e.stopImmediatePropagation();
                    $("button.user-account-btn").click()
                })
                $("button.user-account-btn").click((e)=>{
                    e.stopImmediatePropagation();
                    setTimeout(()=>{
                        if($("vm-screen-overlay").length>0){
                            window.sales_cro.fireGA("1064","my account click");
                            window.sales_cro.fireOpti("my_account_click_1064");
                        }
                    },100)                    
                })
                //Help tracking
                $(".menu-column >div > ul > li:last-child, vm-custom-tile-with-icon-small-section:nth-of-type(2) .vm-row > div:first-of-type").click((e)=>{
                    e.stopImmediatePropagation();
                    window.sales_cro.fireGA("1064","help click");
                })

                //My Virginmedia tracking
                $("vm-custom-tile-with-icon-small-section:nth-of-type(2) .vm-row > div:nth-of-type(2)").click((e)=>{
                    e.stopImmediatePropagation();
                    window.sales_cro.fireGA("1064","my virgin media click");
                })

                //Business tracking
                $(".hp-signposting nav.top-header__navigation > ul > li:nth-child(4) a").click(()=>{
                    window.sales_cro.fireGA("1064","business click");
                })

                //Email tracking
                $(".myEmail a.text-button").click(()=>{
                    window.sales_cro.fireGA("1064","email click");
                })
                //Existing customer tracking
                $(".hp-signposting nav.top-header__navigation > ul > li:last-child").click(()=>{
                    window.sales_cro.fireGA("1064","existing customer click");
                })

                //Broadband deals tracking
                $(".menu-column >div > ul > li:first-child").click(()=>{
                    window.sales_cro.fireGA("1064","broadband deals click");
                })

                //Mobile deals tracking
                $(".menu-column >div > ul > li:nth-child(2)").click(()=>{
                    window.sales_cro.fireGA("1064","mobile deals click");
                })

                //What to watch tracking
                $(".whatToWatch").click((e)=>{
                    e.stopImmediatePropagation();
                    window.sales_cro.fireGA("1064","what to watch click");
                })

                //Blog tracking
                $(".blogTile").click((e)=>{
                    e.stopImmediatePropagation();
                    window.sales_cro.fireGA("1064","blog click");
                })

                //Sign in VM tracking
                $(".login-popover .login-wrapper > .popover-content > div.vm-row:first-child").click((e)=>{
                    e.stopImmediatePropagation();
                    window.sales_cro.fireGA("1064","sign in vm click");
                })

                //Sign in mobile tracking
                $(".login-popover .login-wrapper > .popover-content > div.vm-row:nth-child(2)").click((e)=>{
                    e.stopImmediatePropagation();
                    window.sales_cro.fireGA("1064","sign in mobile click");
                })

                //No account tracking
                $(".login-popover .login-wrapper > .popover-content > div.vm-row:nth-child(3)").click((e)=>{
                    e.stopImmediatePropagation();
                    window.sales_cro.fireGA("1064","no account click");
                })

                //Live Chat tracking
                $("vm-custom-tile-with-icon-small-section:nth-of-type(2) .vm-row > div:nth-of-type(3), .LPMcontainer.LPMoverlay").click((e)=>{
                    //e.stopImmediatePropagation();
                    window.sales_cro.fireGA("1064","live chat click");
                })

                //Call us tracking
                $("vm-custom-tile-with-icon-small-section:nth-of-type(2) .vm-row > div:nth-of-type(4)").click((e)=>{
                    e.stopImmediatePropagation();
                    window.sales_cro.fireGA("1064","call us click");
                })
                
            }
            
        // Only proceed if subject is found in DOM
        if(subject && subject2 && subject3 && typeof $ == "function") {
            window.clearInterval($timerA);          
            $('body').addClass('hp-signposting');
            console.log("in 1064 ho signpossting");
            expandNetworkObserver();
            myEmailObserver();
            whatToWatchUpdates();
            personIconUpdates();
            exp3Updates();
            attachClickEvents();
            $(window).resize(exp3Updates);
        }
       
    }, 500);
   /* setTimeout(function(){
        if($timerA !== null){
          clearInterval($timerA);
          if(typeof(error) === 'function'){
            error();
          }
        }
      }, 20000);*/
}(window, document));
}}, {"value": "<style>@media (min-width:992px){\n    .hp-signposting nav.top-header__navigation > ul > li:not(:last-child, :nth-child(4)),\n    .hp-signposting .menu-column >div > ul > li:nth-child(3),\n    .hp-signposting .menu-column >div > ul > li:nth-child(4){display: none!important;}\n\n    .hp-signposting .myVMCopy{\n        font-family: 'VMCircularChatPTT';\n        color: #fff;\n        cursor: pointer;\n        z-index: 2;\n    }\n    .hp-signposting vm-login{\n        display: flex;\n        align-items: center;\n        justify-content: flex-start;\n    }\n\n    .hp-signposting  .basket-icon-wrapper{\n        right: 14.5rem!important;\n    }\n}\n@media (max-width:991px) {\n    .expandNetworkTile,\n    .blogTile,\n    .myVMCopy,\n    .myEmail {display: none!important;}\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "8F315EE5-42CE-4854-B3CA-C587B815FD46"}]}], "name": "Exp 3"}], "audienceIds": ["and", "23655950748"], "changes": null, "id": "23680400695", "integrationSettings": null}], "id": "23719340301", "weightDistributions": null, "name": "[A/B] CSCRO-1064 HP Signposting", "groupId": "23720881350", "commitId": "23751521369", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["23776400486"], "experiments": [{"weightDistributions": [{"entityId": "23771461053", "endOfRange": 5000}, {"entityId": "23774950876", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "[A/B] CSCRO-1042 TV channels filter ", "bucketingStrategy": null, "variations": [{"id": "23771461053", "actions": [{"viewId": "23776400486", "changes": [{"value": "<style>tv-addon-product-filter{display: none !important;}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "77882B8C-B9B8-44EC-A724-6456935602BE"}]}], "name": "Original"}, {"id": "23774950876", "actions": [{"viewId": "23776400486", "changes": [{"dependencies": [], "type": "custom_code", "id": "863117D6-7214-4105-A587-1DAD1702CA06", "value": function($){(function (window, document){
    'use strict';
    let $timerA = window.setInterval(function () {
        let subject = document.querySelector("tv-addon-product-filter"),
            angularLoaded = window.getAllAngularRootElements,
            salesCro = window.sales_cro,
            $ = window.$;
	
        if(subject && $ && salesCro && angularLoaded) {
            window.clearInterval($timerA);
            $(".tv-addon-filter-item").on("click", () =>{
                salesCro.fireGA("1042", "clicked on tv filters");
            });
           
        } 
    }, 500);
}(window, document));
}}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "23773150854", "integrationSettings": null}], "id": "23722551339", "weightDistributions": null, "name": "[A/B] CSCRO-1042 TV channels filter ", "groupId": null, "commitId": "23754360223", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["23730920624"], "experiments": [{"weightDistributions": [{"entityId": "23767470960", "endOfRange": 10000}], "audienceName": "1117 - QA", "name": "[QA][A/B][no-track] CSCRO-1117 Homepage - Persistent Basket", "bucketingStrategy": null, "variations": [{"id": "23759500505", "actions": [{"viewId": "23730920624", "changes": [{"value": "<style>.basket-icon-wrapper{\n    display: none !important;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "C1F74282-D0FF-40A2-964B-FB9A7DA658E8"}]}], "name": "Original"}, {"id": "23765490654", "actions": [{"viewId": "23730920624", "changes": [{"dependencies": [], "type": "custom_code", "id": "519D99E7-AAA7-41F5-B2AE-3FEE45E1F42B", "value": function($){(function (window, document){
    'use strict';
    let $timerA = window.setInterval(function () {
        let subject = document.querySelector(".basket-icon-wrapper .basket-icon"),
            angularLoaded = window.getAllAngularRootElements,
            salesCro = window.sales_cro,
            $ = window.$;
	
        if(subject && $ && salesCro && angularLoaded) {
            window.clearInterval($timerA);

            $(".basket-icon-wrapper .basket-icon").on("click", (e) => {
                salesCro.fireOpti("open_pb");
            })
            $("vm-basket-container .basket-panel-footer vm-button button").on("click", () => {
                salesCro.fireOpti("pb_continue_to_checkout");
            })

        } 
    }, 500);
}(window, document));
}}]}], "name": "Variation #1"}, {"id": "23767470960", "actions": [{"viewId": "23730920624", "changes": [{"dependencies": [], "type": "custom_code", "id": "A7E879DA-2D9B-4EE0-8385-40FF8A8FC04B", "value": function($){(function (window, document){
    'use strict';
    let $timerA = window.setInterval(function () {
        let subject = document.querySelector(".basket-icon-wrapper .basket-icon"),
            angularLoaded = window.getAllAngularRootElements,
            salesCro = window.sales_cro,
            $ = window.$;
	
        if(subject && $ && salesCro && angularLoaded) {
            window.clearInterval($timerA);

            if(window.sessionStorage.getItem("seenPbOpenByDefault") !== "true"){
                window.sessionStorage.setItem("seenPbOpenByDefault", "true");
                $(".basket-icon-wrapper .basket-icon")[0].click();
                $(".basket-icon-wrapper .basket-icon").on("click", (e) => {
                    salesCro.fireOpti("open_pb");
                })
                $("vm-basket-container .basket-panel-footer vm-button button").on("click", () => {
                    salesCro.fireOpti("pb_continue_to_checkout");
                })
            }

        } 
    }, 500);
}(window, document));
}}]}], "name": "Variation #2"}], "audienceIds": ["and", "23791720504"], "changes": null, "id": "23744560523", "integrationSettings": null}], "id": "23730920625", "weightDistributions": null, "name": "[QA][A/B][no-track] CSCRO-1117 Homepage - Persistent Basket", "groupId": null, "commitId": "23754830546", "decisionMetadata": null, "policy": "single_experiment", "changes": [{"dependencies": [], "type": "custom_code", "id": "3857A73E-5018-4910-BC01-3BB04B0FEC6F", "value": function($){(function (window, document){
    'use strict';
    let $timerA = window.setInterval(function () {
        let subject = document.querySelector(".basket-icon-wrapper"),
            angularLoaded = window.getAllAngularRootElements,
            salesCro = window.sales_cro,
            $ = window.$;
	
        if(subject && $ && salesCro && angularLoaded) {
            window.clearInterval($timerA);

            $("vm-basket-container .clear-basket-button-wrapper .clear-button").on("click", (e) => {
                salesCro.fireGA("1117", "user clicked on clear basket");
            })
            $("vm-basket-container .header.basket-panel-header .header__close").on("click", () => {
                salesCro.fireGA("1117", "user clicked on close icon pb");
            })
        } 
    }, 500);
}(window, document));
}}]}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["23723900536"], "experiments": [{"weightDistributions": [{"entityId": "23733870662", "endOfRange": 5000}, {"entityId": "23718390638", "endOfRange": 10000}], "audienceName": "Journey: quickCheckout,User comes from CTM, MSM, uSwitch Affiliates", "name": "[A/B]CSCRO-984 Optimise 'affiliate active' V2", "bucketingStrategy": null, "variations": [{"id": "23733870662", "actions": [], "name": "Original"}, {"id": "23718390638", "actions": [{"viewId": "23723900536", "changes": [{"dependencies": [], "type": "custom_code", "id": "E283DCCE-28E8-43C8-805E-5BA540421768", "value": function($){(function (window, document){
    'use strict';
    let $timerA = window.setInterval(function () {
        let subject = document.querySelector("body"),
            $ = window.$;
	
        if(subject && typeof $ == "function") {
            window.clearInterval($timerA);
            $("body").addClass("affiliate-active-v2");
            console.log("in 984 testing");
            $(".alert-success:contains('Affiliate active')").hide();

            if(window.location.href.indexOf("Comparethemarket.com") > -1){
                window.sessionStorage.setItem("affiliateName", "ctm");
            } else if(window.location.href.indexOf("uSwitch") > -1){
                window.sessionStorage.setItem("affiliateName", "uswitch");
            }
            else if(document.referrer.indexOf("moneysupermarket.com")>-1){
                window.sessionStorage.setItem("affiliateName", "msm");
            }

            let isBillCredit = false;
            let billCreditAmount, bannerHtml;
            const affiliate = window.sessionStorage.getItem("affiliateName");
            let affiliateName = affiliate === "ctm" ? "Comparethemarket" : affiliate === "msm" ? "Moneysupermarket" : "Uswitch";

            
            /*if($(".promotion-info:contains('Bill Credit')").length > 0){
                isBillCredit = true;
                billCreditAmount = $(".promotion-info:contains('Bill Credit')").find(".text-right").text().trim();
                bannerHtml = `<span>Your <span class='vm-circular-book'> ${billCreditAmount} bill credit</span> from <span class='vm-circular-book'>${affiliateName}</span> has been applied!</span>`;
                window.sales_cro.fireGA("user has bill credit");
            } else{
                bannerHtml = `<span>Your offer has been applied from <span class='vm-circular-book'>${affiliateName}</span>!</span>`; 
            }*/
            bannerHtml = `<span>Your offer has been applied from <span class='vm-circular-book'>${affiliateName}</span>!</span>`;

            const uswitchLogo = `<svg viewBox="0 0 880 260" xmlns="http://www.w3.org/2000/svg" class="us-header-logo--svg us-logo us-logo-h"><g fill="#141423"><path d="m275.92 167.49h24.23c1.38 12.8 7.88 17.33 22.66 17.33 14.38 0 20.09-4.53 20.09-12.21 0-7.29-4.53-10.84-19.89-13.4l-11.63-2c-21.86-3.74-33.29-13.39-33.29-30.73 0-19.11 15-30.73 42.16-30.73 31.32 0 44.13 13.59 44.92 34.47h-23.45c-.59-13-8.67-16.74-21.47-16.74-12 0-17.73 4.53-17.73 11.82 0 7.48 5.91 10.44 16.94 12.41l12.81 2c24.42 4.33 35.26 13.4 35.26 30.93 0 20.49-16.75 31.92-45.11 31.92-28.96 0-44.92-10.45-46.5-35.07z"></path><path d="m531.83 98.14-33.49 101.66h-26l-12.81-41.8c-3-10.05-5.91-20.29-8.67-30.34-2.76 10.05-5.52 20.29-8.47 30.34l-12.61 41.8h-26l-33.49-101.66h26.59l11.43 38c3.54 11.63 6.89 23.64 10 35.27 3-11.82 6.11-23.64 9.66-35.46l11.23-37.83h23.64l11.27 37.88c3.54 11.82 6.7 23.64 9.65 35.46 3.15-11.63 6.5-23.64 10.05-35.27l11.42-38z"></path><path d="m541.48 98.14h24.82v101.66h-24.82zm.2-36.44h24.42v23.24h-24.42z"></path><path d="m619.29 117.05v55c0 6.7 3.35 8.86 11.63 8.86h8.47v18.89c-4.53.39-9.06.78-13 .78-21.48 0-31.72-7.28-31.72-26v-57.53h-15.76v-18.91h15.76v-29.55h24.62v29.55h20.1v18.91z"></path><path d="m647.46 149c0-32.51 19.9-53.19 50.24-53.19 26.59 0 44.32 15.17 47.28 39h-24.82c-2.37-12.6-11.43-18.32-22.46-18.32-14.78 0-24.82 10.25-24.82 32.51s10.44 32.51 24.82 32.51c11.23 0 20.88-6.11 22.85-19.51h24.82c-2.75 24.82-21.67 40.19-47.67 40.19-30.14-.03-50.24-20.71-50.24-53.19z"></path><path d="m850.37 132.42v67.38h-24.82v-63.24c0-13-6.5-19.31-19.11-19.31-10.83 0-22.65 7.49-22.65 25.61v56.94h-24.79v-140.27h24.83v52.2a37.27 37.27 0 0 1 30.93-16c21.24.05 35.61 12.46 35.61 36.69z"></path><path d="m29.64 26.24v207h207v-207zm162.21 120.76c0 36.45-22.66 55.76-58.71 55.76-35.26 0-58.71-19.31-58.71-55.76v-87.48h26.57v87.67c0 22.06 12 32.51 32.11 32.51s32.11-10.45 32.11-32.51v-87.67h26.6z"></path></g></svg>`;
            
            const ctmLogo = 'https://www.virginmedia.com/content/dam/virginmedia/dotcom/images/ABtest/cro/ctm_logo.svg';

            const msmLogo = 'https://www.virginmedia.com/content/dam/virginmedia/dotcom/images/ABtest/cro/msm_logo.svg';

            const affiliateBannerHtml = `<div class="spacing-bottom-m spacing-top-m">
                <div class="justify-content-center affiliate-wrapper affiliate-wrapper--${affiliate}">
                    <div class="show d-flex mb-0">
                        <div class="card-body"><span class='affiliate-logo'>${affiliate === "ctm" ? `<img class='affiliate-logo-img' src=${ctmLogo} alt='ctm logo'/>` : affiliate === "msm" ? `<img class='affiliate-logo-img' src=${msmLogo} alt='msm logo'/>` : uswitchLogo }</span> ${bannerHtml}</div>
                    </div>
                </div>
            </div>`

            $(".alert-success:contains('Affiliate active')").after(affiliateBannerHtml)   
            
        } 
    }, 100);
}(window, document));
}}, {"value": "<style>.affiliate-active-v2 .alert-wrapper .alert-success{display:none !important;}\n.affiliate-active-v2 .affiliate-wrapper{\n    border-radius: 5px;\n}\n\n.affiliate-active-v2 .affiliate-wrapper--ctm{\n    border: 1px solid #0028D7;\n    border-left: 10px solid #0028D7;\n}\n\n.affiliate-active-v2 .affiliate-wrapper--msm{\n    border: 1px solid #590F85;\n    border-left: 10px solid #590F85;\n}\n.affiliate-active-v2 .affiliate-wrapper--uswitch{\n    border: 1px solid #141423;\n    border-left: 10px solid #141423;\n}\n\n\n\n.affiliate-active-v2 .affiliate-wrapper--uswitch .affiliate-logo + span{\n    padding-top: 3px;\n}\n\n\n.affiliate-active-v2 .affiliate-wrapper .affiliate-logo .affiliate-logo-img, .affiliate-active-v2 .affiliate-wrapper .affiliate-logo svg{\n    height: 32px;\n}\n\n.affiliate-active-v2 .affiliate-wrapper--msm .affiliate-logo .affiliate-logo-img, .affiliate-active-v2 .affiliate-wrapper--msm .affiliate-logo svg{\n    height: 20px;\n}\n\n.affiliate-active-v2 .affiliate-wrapper--msm .affiliate-logo { line-height: 1!important; }\n\n\n.affiliate-active-v2 .affiliate-wrapper .card-body{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: row;\n}\n\n@media (min-width:768px){\n    .affiliate-active-v2 .affiliate-wrapper .affiliate-logo{\n        margin-right: 13px;\n    }\n}\n\n@media only screen and (max-width: 768px) {\n    .affiliate-active-v2 .affiliate-wrapper .card-body{\n        flex-direction: column;\n    }\n\n    .affiliate-active-v2 .affiliate-wrapper span{text-align: center;}\n    .affiliate-active-v2 .affiliate-wrapper .affiliate-logo { margin-bottom: 8px;  }\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "87A6FC43-5103-482E-836A-487EE566EDBA"}]}], "name": "Variation #1"}], "audienceIds": ["and", "23093261747", "23722830392"], "changes": null, "id": "23734510524", "integrationSettings": null}], "id": "23735880376", "weightDistributions": null, "name": "[A/B]CSCRO-984 Optimise 'affiliate active' V2", "groupId": null, "commitId": "23712861829", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["23317210291"], "experiments": [{"weightDistributions": [{"entityId": "23734190512", "endOfRange": 3334}, {"entityId": "23734591106", "endOfRange": 6667}, {"entityId": "23776940519", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "[A/B] CSCRO-1122 ChatGPT copy", "bucketingStrategy": null, "variations": [{"id": "23734190512", "actions": [{"viewId": "23317210291", "changes": []}], "name": "Original"}, {"id": "23734591106", "actions": [{"viewId": "23317210291", "changes": [{"dependencies": [], "type": "custom_code", "id": "1EDB5BCA-D065-4D8A-8330-2D29EE994BE7", "value": function($){(function (window, document){
    'use strict';
    let $timerA = window.setInterval(function () {
        let subjectPostcodeChecker = document.querySelector(".postcode-container"),
            subjectH1 = document.querySelector("h1.heading__title"),
            angularLoaded = window.getAllAngularRootElements,
            salesCro = window.sales_cro,
            $ = window.$;
        if(subjectPostcodeChecker && subjectH1 && $ && salesCro && angularLoaded) {
            window.clearInterval($timerA);
            $("body").addClass("hp-optimised");

            $("h1.heading__title").html("Get lightning-fast broadband up to Gig1");
            // $("vm-custom-tile-with-icon-small-section + vm-divider + vm-custom-text").append("<div class='vm-container new-copy'><div class='vm-col-xs-12 vm-col-lg-8 vm-col-lg-offset-2'>+ Upon checking your postcode, we will be able to inform you whether Virgin Media broadband is available at your address and what speeds are available within your area.</div></div>")

            let svcChangeLinkTrackingFired = false;

            const changePostcode = () => {
            	if($("#service-available").length > 0 && $("#service-available .change-postcode").length === 0){
        			$(".postcode-checker__search-form").addClass("hide-svc-form");
        			const pText = $("#service-available p:nth-of-type(2)").html().slice(0, -1);
        			if(pText.indexOf("Virgin Media is available") > -1){
        				$("#service-available p:nth-of-type(2)").html(`${pText} <span class='change-postcode Body-Book'>Change</span>`)
        			}
					$(".heading__title").hide();
                    // $(".new-copy").hide();
        		} else if($("#service-not-available").length > 0 && $("#service-not-available .change-postcode").length === 0){
                    $(".heading__title").hide();
        			const bannerText = $("#service-not-available h3").html();
        			if(bannerText.indexOf("Our services are currently unavailable") > -1){
        				$("#service-not-available h3").html(`${bannerText} <span class='change-postcode Body-Book'>Change</span>`);
                        $("vm-postcode-checker + .vm-row").css("margin-bottom", "1.5rem");
                        $("vm-postcode-checker + .vm-row").after($("vm-postcode-checker"));

        			}
        		}
        		
        		if($(".postcode-container .change-postcode").length > 0){
        			$(".postcode-container .change-postcode").on("click", () => {
		            	$(".postcode-checker__search-form").removeClass("hide-svc-form");
		            	$(".postcode-result").hide();
                        if(!svcChangeLinkTrackingFired){
                            svcChangeLinkTrackingFired = true;
                            salesCro.fireGA("1122", "svc change link clicked");
                            salesCro.fireOpti("svc_change_link_click");
                        }
		            })
        		}
            }

            changePostcode();

            const targetNodes = document.querySelectorAll(".postcode-container");
            const config = { childList: true, subtree: true};
            const callback = function(mutationsList, observer) {
                for(const mutation of mutationsList) {
                	if(mutation.target.classList.contains("vm-row")){
                		changePostcode();
                	}
                }
            };
            
        	const observer = new MutationObserver(callback);
            targetNodes.forEach((targetNode, i) => observer.observe(targetNode, config))
        } 
    }, 500);
}(window, document));
}}]}], "name": "Variation #1"}, {"id": "23776940519", "actions": [{"viewId": "23317210291", "changes": [{"dependencies": [], "type": "custom_code", "id": "C1F224B4-6C33-4B8A-9314-3D4979DE8279", "value": function($){(function (window, document){
    'use strict';
    let $timerA = window.setInterval(function () {
        let subjectPostcodeChecker = document.querySelector(".postcode-container"),
            subjectH1 = document.querySelector("h1.heading__title"),
            angularLoaded = window.getAllAngularRootElements,
            salesCro = window.sales_cro,
            $ = window.$;
        if(subjectPostcodeChecker && subjectH1 && $ && salesCro && angularLoaded) {
            window.clearInterval($timerA);
            $("body").addClass("hp-optimised");
            let svcChangeLinkTrackingFired = false;
            
            $("h1.heading__title").html("Enter your postcode to see how fast you can go");

            const changePostcode = () => {
            	if($("#service-available").length > 0 && $("#service-available .change-postcode").length === 0){
        			$(".postcode-checker__search-form").addClass("hide-svc-form");
        			const pText = $("#service-available p:nth-of-type(2)").html().slice(0, -1);
        			if(pText.indexOf("Virgin Media is available") > -1){
        				$("#service-available p:nth-of-type(2)").html(`${pText} <span class='change-postcode Body-Book'>Change</span>`)
        			}
					$(".heading__title").hide();
        		} else if($("#service-not-available").length > 0 && $("#service-not-available .change-postcode").length === 0){
                    $(".heading__title").hide();
        			const bannerText = $("#service-not-available h3").html();
        			if(bannerText.indexOf("Our services are currently unavailable") > -1){
        				$("#service-not-available h3").html(`${bannerText} <span class='change-postcode Body-Book'>Change</span>`);
                        $("vm-postcode-checker + .vm-row").css("margin-bottom", "1.5rem");
                        $("vm-postcode-checker + .vm-row").after($("vm-postcode-checker"));

        			}
        		}
        		
        		if($(".postcode-container .change-postcode").length > 0){
        			$(".postcode-container .change-postcode").on("click", () => {
		            	$(".postcode-checker__search-form").removeClass("hide-svc-form");
		            	$(".postcode-result").hide();
                        if(!svcChangeLinkTrackingFired){
                            svcChangeLinkTrackingFired = true;
                            salesCro.fireGA("1122", "svc change link clicked");
                            salesCro.fireOpti("svc_change_link_click");
                        }
		            })
        		}
            }

            changePostcode();

            const targetNodes = document.querySelectorAll(".postcode-container");
            const config = { childList: true, subtree: true};
            const callback = function(mutationsList, observer) {
                for(const mutation of mutationsList) {
                	if(mutation.target.classList.contains("vm-row")){
                		changePostcode();
                	}
                }
            };
            
        	const observer = new MutationObserver(callback);
            targetNodes.forEach((targetNode, i) => observer.observe(targetNode, config))
        } 
    }, 500);
}(window, document));
}}]}], "name": "Variation #2"}], "audienceIds": null, "changes": null, "id": "23755530893", "integrationSettings": null}], "id": "23741391041", "weightDistributions": null, "name": "[A/B] CSCRO-1122 ChatGPT copy", "groupId": "23720881350", "commitId": "23803740070", "decisionMetadata": null, "policy": "single_experiment", "changes": [{"value": "<style>.hp-optimised .heading__title{\n    margin-left: auto;\n    margin-right: auto;\n}\n\n/* .hp-optimised .heading__title sup{\n    font-size: 20px;\n    position: absolute;\n} */\n.hp-optimised .heading__title + h2{\n    display: none;\n}\n\n.hp-optimised .postcode-container .postcode-checker__search-form.hide-svc-form{\n\tdisplay: none !important;\n}\n\n.hp-optimised .postcode-container .change-postcode{\n\ttext-decoration: underline;\n\tcursor: pointer;\n\tcolor: #5F2878;\n}\n.hp-optimised .new-copy{\n    margin-bottom: 1.5rem;\n}\n\n@media only screen and (min-width: 768px) {\n    .hp-optimised .heading__title sup{\n        font-size: 48px;\n    }\n\n    .hp-optimised .heading__title{\n        max-width: 75% !important;\n    }\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "7885BAB5-7F6A-410E-9107-43CAA7E369DE"}]}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["23078210939"], "experiments": [{"weightDistributions": [{"entityId": "23795050185", "endOfRange": 10000}], "audienceName": "optiqa = true,Journey: original2,Journey: create-basket,Product category: duals,Product category: triple,Engineer date later than self-install date,Referrer is installationSelection page [CSCRO-1006]", "name": "[QA][A/B][no-track]CSCRO-1006 Promote QS on engineer page", "bucketingStrategy": null, "variations": [{"id": "23775120394", "actions": [{"viewId": "23078210939", "changes": []}], "name": "Original"}, {"id": "23795050185", "actions": [{"viewId": "23078210939", "changes": [{"dependencies": [], "type": "custom_code", "id": "F816834A-5B3B-4C00-93F7-B4F2EC59B7EC", "value": function($){// Wrap code in an IIFE
   (function (window, document){
    // Invoking strict mode
    'use strict';

    window.sessionStorage.removeItem("promoteQS");

    // Run a timer here because of the dynamic JS rendering
    let $timerA = window.setInterval(function () {
        // Try to grab a test subject
        let subject = document.querySelector("#slotted-calender-board > .padding-top-s > .mt-3.mb-3"),
            $ = window.$;

            
        // Only proceed if subject is found in DOM
        if(subject && typeof $ == "function") {
            window.clearInterval($timerA);
          
            $('body').addClass('promote-qs');
            const needItSooner = `<div class="needSooner"><img src="https://www.virginmedia.com/content/dam/virginmedia/dotcom/images/ABtest/cro/lightbulb.svg" alt="lightbulb"/><p>Need it sooner?</p></div>`;

            const soonerModal = `<div class="soonerModal">
                                    <span class="closeModal">&times</span>
                                    <h4>Need it sooner?</h4>
                                    <p>Choose self-install and get your kit delivered within 5 days. It\'s free, fast and easy. It comes with everything you need including step-by-step instructions.</p>
                                    <p class="soonerModalLink">Get self-install</p>
                                    <div class="bottom-arrow"></div>
                                </div>`;
            

            $("#slotted-calender-board > .padding-top-s > .mt-3.mb-3").before(needItSooner);
            $(".needSooner").append(soonerModal);

            $(".needSooner").click((e)=>{
                e.stopImmediatePropagation();
                window.sales_cro.fireGA("1006","need it sooner click");
                $(".soonerModal").show();
            })
            $(".soonerModal .closeModal").click((e)=>{
                e.stopImmediatePropagation();
                $(".soonerModal").hide();
            })
            $(".soonerModal .soonerModalLink").click((e)=>{
                e.stopImmediatePropagation();
                window.sales_cro.fireGA("1006","get self-install click");
                window.sessionStorage.setItem("promoteQS","true");
                window.history.back(-1);
            })
        }
       
    }, 500);
    setTimeout(function(){
        if($timerA !== null){
          clearInterval($timerA);
          if(typeof(error) === 'function'){
            error();
          }
        }
      }, 20000);
}(window, document));
}}, {"value": "<style>.promote-qs  #book-engineer-title-container,\n.promote-qs #installation-address-container > .box,\n.promote-qs .module-margin-top{\n        margin-top: 0!important;\n        margin-bottom: 0!important;\n    }\n.promote-qs #slotted-calender-board > div{padding-top: 0!important;}\n    \n.promote-qs .soonerModal{\n    display: none;\n    position: absolute;\n    bottom: 30px;\n    max-width: 266px;\n    width: 100%;\n    max-height: 240px;\n    padding: 16px;\n    background: #5F2878;\n    border: 1px solid #DBDBDB;\n    box-shadow: 0px 0px 4px rgb(0 0 0 / 15%);\n    border-radius: 8px;\n}\n.promote-qs .soonerModal *{\n    color: #fff!important;\n}\n\n.promote-qs .soonerModal .closeModal{\n    position: absolute;\n    top: 2px;\n    right: 16px;\n    font-size: 24px;\n    cursor: pointer;\n}\n.promote-qs .soonerModal h4{\n    font-family: \"VM Circular Medium\";\n    font-size: 20px;\n    line-height: 30px;\n    font-weight: 500;\n}\n\n.promote-qs .needSooner{\n    position: relative;\n    margin-left: 11px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n.promote-qs .needSooner p{\n    font-family: \"VM Circular Book\";\n    font-size: 16px;\n    line-height: 24px;\n    font-weight: 450;\n    margin-bottom: 0;\n    color: #5F2878;\n    cursor: pointer;\n}\n.promote-qs .needSooner > p{\n    margin-left: 3.8px;\n}\n.promote-qs .needSooner > p,\n.promote-qs .needSooner p.soonerModalLink{\n    text-decoration: underline;\n}\n.promote-qs .needSooner p.soonerModalLink{margin-top: 4px; cursor: pointer;}\n\n.promote-qs .soonerModal .bottom-arrow:after {\n    content:'';\n    position: absolute;\n    left: -111px;\n    right: 0;\n    margin: 0 auto;\n    width: 0;\n    height: 0;\n    border-top: 25px solid #5F2878;\n    border-left: 40px solid transparent;\n    border-right: 40px solid transparent;\n}\n@media (max-width:767px){\n    .promote-qs .needSooner{\n        justify-content: center;\n        margin-top: 8px;\n    }\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "4771EF14-A1BA-4692-BC0D-DE9985AAC084"}]}], "name": "Variation #1"}], "audienceIds": ["and", "23197550032", ["or", "23107030611", "23064800131"], ["or", "23176400897", "23230050302"], "23758820163", "23722620646"], "changes": null, "id": "23795070166", "integrationSettings": null}], "id": "23745831063", "weightDistributions": null, "name": "[QA][A/B][no-track]CSCRO-1006 Promote QS on engineer page", "groupId": null, "commitId": "23748091133", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["23084590691"], "experiments": [{"weightDistributions": null, "audienceName": "optiqa = true,User has clicked through the get self-install link [CSCRO-1006],Journey: original2,Journey: create-basket,Product category: duals,Product category: triple", "name": "optiqa = true and User has clicked through the get self-install link [CSCRO-1006] and (Journey: original2 or Journey: create-basket) and (Product category: duals or Product category: triple)", "bucketingStrategy": null, "variations": [{"id": "23724121262", "actions": [{"viewId": "23084590691", "changes": [{"dependencies": [], "type": "custom_code", "id": "789E3089-AA56-4F3E-8E46-D35EB13224ED", "value": function($){(function (window, document){
    'use strict';
    let $timerA = window.setInterval(function () {
        let subject = document.querySelector("#installation-selection > .content-box > div:nth-child(2)"),
            $ = window.$;

        if(subject && typeof $ =="function" ){
            window.clearInterval($timerA);

            $("body").addClass("promote-qs");
            console.log("in 1006")

            window.sessionStorage.removeItem("promoteQS");
            
            const engineerCard = $("#installation-selection > .content-box > div:first-child > .selection-card-wrapper:nth-child(2)");
            const engineerPrice = $(engineerCard).find(".pink-installation-price").html();

            const engineerLink = `<div class="vm-body text-center">Or, <span class="vm-body-link text-underline bookEngineer">book a technician</span> for ${engineerPrice} ></div>`;
            $("#installation-selection > .content-box > div:first-child > .selection-card-wrapper:first-child .selection-card")[0].click();

            $("#installation-selection > .content-box > div:nth-child(2)").html(engineerLink);

            $(".bookEngineer").click(()=>{
              $(engineerCard).find(".selection-card")[0].click();
              $("#submitButton")[0].click();
            })
        }
    }, 100);
    setTimeout(function(){
        if($timerA !== null){
          clearInterval($timerA);
          if(typeof(error) === 'function'){
            error();
          }
        }
      }, 20000);
}(window, document));
}}, {"value": "<style>.promote-qs #installation-selection > .content-box > div:first-child > .selection-card-wrapper:nth-child(2),\n.promote-qs .page-header > *:not(h1){\n    display:none;\n}\n\n.promote-qs .bookEngineer{cursor: pointer;}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "74C7141C-E877-47E0-B50E-68B15FC67E06"}]}], "name": "Variation #1"}], "audienceIds": ["and", "23197550032", "23756060107", ["or", "23107030611", "23064800131"], ["or", "23176400897", "23230050302"]], "changes": null, "id": "23736051266", "integrationSettings": null}], "id": "23746030762", "weightDistributions": null, "name": "[QA][100%][no-track]Installation page updates after user interacts with CSCRO-1006", "groupId": null, "commitId": "23726530864", "decisionMetadata": {"experimentPriorities": [[{"entityId": "23736051266", "endOfRange": null}]], "offerConsistency": null}, "policy": "equal_priority", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["23741200566"], "experiments": [{"weightDistributions": null, "audienceName": "Journey: quickCheckout", "name": "Journey: quickCheckout", "bucketingStrategy": null, "variations": [{"id": "23741540644", "actions": [{"viewId": "23741200566", "changes": [{"dependencies": [], "type": "custom_code", "id": "A6F39D9D-E657-4ABE-8197-7B47317D272A", "value": function($){(function (window, document){
    'use strict';
    let $timerA = window.setInterval(function () {
        let subject = document.querySelector("body"),
            $ = window.$;
	
        if(subject && typeof $ == "function") {
            window.clearInterval($timerA);
         

            if(window.location.href.indexOf("Comparethemarket.com") > -1){
                window.sessionStorage.setItem("affiliateName", "ctm");
            } else if(window.location.href.indexOf("uSwitch") > -1){
                window.sessionStorage.setItem("affiliateName", "uswitch");
            }
            else if(document.referrer.indexOf("moneysupermarket.com")>-1){
                window.sessionStorage.setItem("affiliateName", "msm");
            }
          
          /*if(window.sessionStorage.getItem("affiliateName") !== undefined){
            if(window.location.href.indexOf("/review") > -1){
                if($(".alert-success:contains('Affiliate active')").length > 0){                  
                    activate();
                }
            }
          }*/
            
        } 
    }, 100);
}(window, document));
}}]}], "name": "Variation #1"}], "audienceIds": ["and", "23093261747"], "changes": null, "id": "23728450501", "integrationSettings": null}], "id": "23749090511", "weightDistributions": null, "name": "[100%][no-track] Background activity for CSCRO-984", "groupId": null, "commitId": "23796960808", "decisionMetadata": {"experimentPriorities": [[{"entityId": "23728450501", "endOfRange": null}]], "offerConsistency": null}, "policy": "equal_priority", "changes": null}], "visitorIdLocator": null, "listTargetingKeys": [], "groups": [{"weightDistributions": [{"entityId": "23719340301", "endOfRange": 5000}, {"entityId": "23741391041", "endOfRange": 10000}], "id": "23720881350", "name": "CSCRO-1064 HP Signposting + CSCRO-1022 ChatGPT Copy"}], "views": [{"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.virginmedia.com/join/add-tv-stream", "match": "simple"}, {"type": "url", "value": "https://www.virginmedia.com/join/add-tv-stream#", "match": "simple"}]], "activationType": "polling", "name": "Join Add Stream - polling -  checkout event | products array", "apiName": "22886250866_add_stream__immediately", "tags": [], "undoOnDeactivation": false, "activationCode": /**
 * Sample Polling Function
 * Supply an expression to return a boolean inside a function.
 * For complete documentation, see https://docs.developers.optimizely.com/web/docs/dynamic-websites#section-polling
 */

function pollingFn() {
  if(window.dataLayer!==undefined){
    var checkoutEvent = window.dataLayer.filter((i)=>{if(i.event!==undefined )return i.event == "checkout";});
    if(checkoutEvent.length > 0){
      var productsArray = checkoutEvent[0].ecommerce.checkout.products;
      return productsArray!==undefined && productsArray.length>0;
    }
  }
}
, "deactivationEnabled": false, "id": "23028870483"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.virginmedia.com/join/add-tv-stream", "match": "simple"}]], "activationType": "callback", "name": "Join Add Stream - callback - userHasAcceptedCookies", "apiName": "22886250866_add_stream__callback__useracceptedcookies", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
    var utils = window.optimizely.get('utils');
  
    utils.waitUntil(function() {
      let functionalCookieHasBeenAccepted = window.sales_cro.getCookie("OptanonConsent").indexOf("C0003:1") > -1,
          userHasInteractedWithCookieBox = document.cookie.indexOf("OptanonAlertBoxClosed") > -1;
          return userHasInteractedWithCookieBox && functionalCookieHasBeenAccepted;
    }).then(function(){
      activate();
    });
  }
, "deactivationEnabled": false, "id": "23061480548"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.virginmedia.com/join/checkout", "match": "simple"}]], "activationType": "callback", "name": "Join checkout - callback - userHasAcceptedCookie", "apiName": "22886250866_join_checkout__callback__userhasacceptedcookie", "tags": [], "undoOnDeactivation": false, "activationCode": /**
 * Sample Activation Function
 * For complete documentation, see https://docs.developers.optimizely.com/web/docs/dynamic-websites#section-callback
 * @param {Function} activate - Call this function when you want to activate the page.
 * @param {Object} options - An object containing Page information.
 */


function callbackFn(activate, options) {
    var utils = window.optimizely.get('utils');
  
    utils.waitUntil(function() {
      let functionalCookieHasBeenAccepted = window.sales_cro.getCookie("OptanonConsent").indexOf("C0003:1") > -1,
          userHasInteractedWithCookieBox = document.cookie.indexOf("OptanonAlertBoxClosed") > -1;
          return userHasInteractedWithCookieBox && functionalCookieHasBeenAccepted;
    }).then(function(){
      activate();
    });
  }
, "deactivationEnabled": false, "id": "23068551412"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.virginmedia.com/join/installation/book-engineer", "match": "simple"}]], "activationType": "callback", "name": "Join installation book-engineer - callback - userHasAcceptedCookie", "apiName": "22886250866_join_installation_bookengineer__callback__userhasacce", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
    var utils = window.optimizely.get('utils');
  
    utils.waitUntil(function() {
      let functionalCookieHasBeenAccepted = window.sales_cro.getCookie("OptanonConsent").indexOf("C0003:1") > -1,
          userHasInteractedWithCookieBox = document.cookie.indexOf("OptanonAlertBoxClosed") > -1;
          return userHasInteractedWithCookieBox && functionalCookieHasBeenAccepted;
    }).then(function(){
      activate();
    });
  }
, "deactivationEnabled": false, "id": "23078210939"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.virginmedia.com/join/review", "match": "simple"}]], "activationType": "callback", "name": "Join review - callback - userHasAcceptedCookie", "apiName": "22886250866_join_review__callback__userhasacceptedcookie", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
    var utils = window.optimizely.get('utils');
  
    utils.waitUntil(function() {
      let functionalCookieHasBeenAccepted = window.sales_cro.getCookie("OptanonConsent").indexOf("C0003:1") > -1,
          userHasInteractedWithCookieBox = document.cookie.indexOf("OptanonAlertBoxClosed") > -1;
          return userHasInteractedWithCookieBox && functionalCookieHasBeenAccepted;
    }).then(function(){
      activate();
    });
  }
, "deactivationEnabled": false, "id": "23080651258"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.virginmedia.com/join/installationSelection", "match": "simple"}]], "activationType": "callback", "name": "Join installationSelection - callback - userHasAcceptedCookie", "apiName": "22886250866_join_installationselection__callback__userhasaccepted", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
    var utils = window.optimizely.get('utils');
  
    utils.waitUntil(function() {
      let functionalCookieHasBeenAccepted = window.sales_cro.getCookie("OptanonConsent").indexOf("C0003:1") > -1,
          userHasInteractedWithCookieBox = document.cookie.indexOf("OptanonAlertBoxClosed") > -1;
          return userHasInteractedWithCookieBox && functionalCookieHasBeenAccepted;
    }).then(function(){
      activate();
    });
  }
, "deactivationEnabled": false, "id": "23084590691"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.virginmedia.com/join/installationSelection", "match": "simple"}]], "activationType": "polling", "name": "Join installationSelection - polling - checkout event | products array", "apiName": "22886250866_join_installationselection__polling__checkout_event_", "tags": [], "undoOnDeactivation": false, "activationCode": /**
 * Sample Polling Function
 * Supply an expression to return a boolean inside a function.
 * For complete documentation, see https://docs.developers.optimizely.com/web/docs/dynamic-websites#section-polling
 */

function pollingFn() {
  if(window.dataLayer!==undefined){
    var checkoutEvent = window.dataLayer.filter((i)=>{if(i.event!==undefined )return i.event == "checkout";});
    if(checkoutEvent.length > 0){
      var productsArray = checkoutEvent[0].ecommerce.checkout.products;
      return productsArray!==undefined && productsArray.length>0;
    }
  }
}
, "deactivationEnabled": false, "id": "23088561088"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.virginmedia.com/join/availability", "match": "simple"}]], "activationType": "polling", "name": "Join availability - polling - checkout event | products array", "apiName": "22886250866_join_availability__polling___checkout_event__product", "tags": [], "undoOnDeactivation": false, "activationCode": /**
 * Sample Polling Function
 * Supply an expression to return a boolean inside a function.
 * For complete documentation, see https://docs.developers.optimizely.com/web/docs/dynamic-websites#section-polling
 */

function pollingFn() {
  if(window.dataLayer!==undefined){
    var checkoutEvent = window.dataLayer.filter((i)=>{if(i.event!==undefined )return i.event == "checkout";});
    if(checkoutEvent.length > 0){
      var productsArray = checkoutEvent[0].ecommerce.checkout.products;
      return productsArray!==undefined && productsArray.length>0;
    }
  }
}
, "deactivationEnabled": false, "id": "23094220077"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.virginmedia.com/join/products", "match": "simple"}]], "activationType": "polling", "name": "Join products - polling - pageview event ", "apiName": "22886250866_join_products__polling__pageview_event_", "tags": [], "undoOnDeactivation": false, "activationCode": /**
 * Sample Polling Function
 * Supply an expression to return a boolean inside a function.
 * For complete documentation, see https://docs.developers.optimizely.com/web/docs/dynamic-websites#section-polling
 */

function pollingFn() {
 if(window.dataLayer !== undefined){
      var pageviewEvent = window.dataLayer.filter((i)=>{if(i.event!==undefined )return i.event == "pageview";});
      return pageviewEvent.length>0;
   }
}
, "deactivationEnabled": false, "id": "23095650860"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.virginmedia.com/join/checkout/success", "match": "simple"}]], "activationType": "polling", "name": "Join checkout success - polling - purchase event | products array", "apiName": "22886250866_join_checkout_success__polling__checkout_event__prod", "tags": [], "undoOnDeactivation": false, "activationCode": /**
 * Sample Polling Function
 * Supply an expression to return a boolean inside a function.
 * For complete documentation, see https://docs.developers.optimizely.com/web/docs/dynamic-websites#section-polling
 */

function pollingFn() {
  if(window.dataLayer!==undefined){
    var purchaseEvent = window.dataLayer.filter((i)=>{if(i.event!==undefined )return i.event == "purchase";});
    if(purchaseEvent.length > 0){
    	var productsArray = purchaseEvent[0].ecommerce.purchase.products;
      return productsArray!==undefined && productsArray.length>0;
    }
  }
}
, "deactivationEnabled": false, "id": "23099380694"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.virginmedia.com/join/review", "match": "simple"}]], "activationType": "polling", "name": "Join review - polling - checkout event | products array", "apiName": "22886250866_join_review__polling__checkout_event__products_array", "tags": [], "undoOnDeactivation": false, "activationCode": /**
 * Sample Polling Function
 * Supply an expression to return a boolean inside a function.
 * For complete documentation, see https://docs.developers.optimizely.com/web/docs/dynamic-websites#section-polling
 */

function pollingFn() {
  if(window.dataLayer!==undefined){
    var checkoutEvent = window.dataLayer.filter((i)=>{if(i.event!==undefined )return i.event == "checkout";});
    if(checkoutEvent.length > 0){
      var productsArray = checkoutEvent[0].ecommerce.checkout.products;
      return productsArray!==undefined && productsArray.length>0;
    }
  }
}
, "deactivationEnabled": false, "id": "23104191401"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.virginmedia.com/join/customer/details", "match": "simple"}]], "activationType": "polling", "name": "Join customer details - polling - checkout event | products array", "apiName": "22886250866_join_customer_details__polling__checkout_event__prod", "tags": [], "undoOnDeactivation": false, "activationCode": /**
 * Sample Polling Function
 * Supply an expression to return a boolean inside a function.
 * For complete documentation, see https://docs.developers.optimizely.com/web/docs/dynamic-websites#section-polling
 */

function pollingFn() {
  if(window.dataLayer!==undefined){
    var checkoutEvent = window.dataLayer.filter((i)=>{if(i.event!==undefined )return i.event == "checkout";});
    if(checkoutEvent.length > 0){
      var productsArray = checkoutEvent[0].ecommerce.checkout.products;
      return productsArray!==undefined && productsArray.length>0;
    }
  }
}
, "deactivationEnabled": false, "id": "23110150934"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.virginmedia.com/join/checkout/success", "match": "simple"}]], "activationType": "callback", "name": "Join checkout success - callback - userHasAcceptedCookie", "apiName": "22886250866_join_checkout_success__callback__userhasacceptedcooki", "tags": [], "undoOnDeactivation": false, "activationCode": /**
 * Sample Activation Function
 * For complete documentation, see https://docs.developers.optimizely.com/web/docs/dynamic-websites#section-callback
 * @param {Function} activate - Call this function when you want to activate the page.
 * @param {Object} options - An object containing Page information.
 */


function callbackFn(activate, options) {
    var utils = window.optimizely.get('utils');
  
    utils.waitUntil(function() {
      let functionalCookieHasBeenAccepted = window.sales_cro.getCookie("OptanonConsent").indexOf("C0003:1") > -1,
          userHasInteractedWithCookieBox = document.cookie.indexOf("OptanonAlertBoxClosed") > -1;
          return userHasInteractedWithCookieBox && functionalCookieHasBeenAccepted;
    }).then(function(){
      activate();
    });
  }
, "deactivationEnabled": false, "id": "23115001185"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.virginmedia.com/join/checkout", "match": "simple"}]], "activationType": "polling", "name": "Join checkout - polling - checkout event | products array", "apiName": "22886250866_join_checkout__polling__checkout_event__products_arr", "tags": [], "undoOnDeactivation": false, "activationCode": /**
 * Sample Polling Function
 * Supply an expression to return a boolean inside a function.
 * For complete documentation, see https://docs.developers.optimizely.com/web/docs/dynamic-websites#section-polling
 */

function pollingFn() {
  if(window.dataLayer!==undefined){
    var checkoutEvent = window.dataLayer.filter((i)=>{if(i.event!==undefined )return i.event == "checkout";});
    if(checkoutEvent.length > 0){
      var productsArray = checkoutEvent[0].ecommerce.checkout.products;
      return productsArray!==undefined && productsArray.length>0;
    }
  }
}
, "deactivationEnabled": false, "id": "23128810004"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.virginmedia.com/join/speed-selection", "match": "simple"}]], "activationType": "callback", "name": "Join speed-selection - callback - userHasAcceptedCookie", "apiName": "22886250866_join_speedselection__callback__userhasacceptedcookie", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
    var utils = window.optimizely.get('utils');
  
    utils.waitUntil(function() {
      let functionalCookieHasBeenAccepted = window.sales_cro.getCookie("OptanonConsent").indexOf("C0003:1") > -1,
          userHasInteractedWithCookieBox = document.cookie.indexOf("OptanonAlertBoxClosed") > -1;
          return userHasInteractedWithCookieBox && functionalCookieHasBeenAccepted;
    }).then(function(){
      activate();
    });
  }
, "deactivationEnabled": false, "id": "23145930062"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.virginmedia.com/broadband/compare-deals", "match": "simple"}]], "activationType": "callback", "name": "Compare deals page - callback - userHasAcceptedCookie", "apiName": "22886250866_compare_deals_page__callback__userHasAcceptedCookie", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
    var utils = window.optimizely.get('utils');
  
    utils.waitUntil(function() {
      let functionalCookieHasBeenAccepted = window.sales_cro.getCookie("OptanonConsent").indexOf("C0003:1") > -1,
          userHasInteractedWithCookieBox = document.cookie.indexOf("OptanonAlertBoxClosed") > -1;
          return userHasInteractedWithCookieBox && functionalCookieHasBeenAccepted;
    }).then(function(){
      activate();
    });
  }
, "deactivationEnabled": false, "id": "23210030765"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.virginmedia.com/join/speed-selection", "match": "simple"}]], "activationType": "polling", "name": "Join speed-selection - polling - pageview event", "apiName": "22886250866_join_speedselection__polling__pageview_event", "tags": [], "undoOnDeactivation": false, "activationCode": /**
 * Sample Polling Function
 * Supply an expression to return a boolean inside a function.
 * For complete documentation, see https://docs.developers.optimizely.com/web/docs/dynamic-websites#section-polling
 */

function pollingFn() {
  if(window.dataLayer !== undefined){
      var pageviewEvent = window.dataLayer.filter((i)=>{if(i.event!==undefined )return i.event == "pageview";});
      return pageviewEvent.length>0;
   }
}
, "deactivationEnabled": false, "id": "23211530146"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.virginmedia.com/broadband/broadband-only", "match": "simple"}]], "activationType": "callback", "name": "Broadband Only page - callback - userHasAcceptedCookie", "apiName": "22886250866_broadband_only_page__callback__userhasacceptedcookie", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
    var utils = window.optimizely.get('utils');
  
    utils.waitUntil(function() {
      let functionalCookieHasBeenAccepted = window.sales_cro.getCookie("OptanonConsent").indexOf("C0003:1") > -1,
          userHasInteractedWithCookieBox = document.cookie.indexOf("OptanonAlertBoxClosed") > -1;
          return userHasInteractedWithCookieBox && functionalCookieHasBeenAccepted;
    }).then(function(){
      activate();
    });
  }
, "deactivationEnabled": false, "id": "23239680912"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.virginmedia.com/join/installation/book-engineer", "match": "simple"}, {"type": "url", "value": "https://www.virginmedia.com/join/installationSelection", "match": "simple"}]], "activationType": "callback", "name": "Join installationSelection + installation book-engineer - callback - userAcceptedCookies", "apiName": "22886250866_join_installationselection__installation_bookengin_1", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
    var utils = window.optimizely.get('utils');
  
    utils.waitUntil(function() {
      let functionalCookieHasBeenAccepted = window.sales_cro.getCookie("OptanonConsent").indexOf("C0003:1") > -1,
          userHasInteractedWithCookieBox = document.cookie.indexOf("OptanonAlertBoxClosed") > -1;
          return userHasInteractedWithCookieBox && functionalCookieHasBeenAccepted;
    }).then(function(){
      activate();
    });
  }
, "deactivationEnabled": false, "id": "23295410375"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.virginmedia.com/", "match": "simple"}]], "activationType": "callback", "name": "Homepage - callback - consent cookie", "apiName": "22886250866_homepage__callback__consent_cookie", "tags": [], "undoOnDeactivation": false, "activationCode": /**
 * Sample Activation Function
 * For complete documentation, see https://docs.developers.optimizely.com/web/docs/dynamic-websites#section-callback
 * @param {Function} activate - Call this function when you want to activate the page.
 * @param {Object} options - An object containing Page information.
 */

// Best usage.
function callbackFn(activate, options) {
    var utils = window.optimizely.get('utils');
  
    utils.waitUntil(function() {
      let functionalCookieHasBeenAccepted = window.sales_cro.getCookie("OptanonConsent").indexOf("C0003:1") > -1,
          userHasInteractedWithCookieBox = document.cookie.indexOf("OptanonAlertBoxClosed") > -1;
          return userHasInteractedWithCookieBox && functionalCookieHasBeenAccepted;
    }).then(function(){
      console.log("cookies accepted");
      activate();
    });
  }
, "deactivationEnabled": false, "id": "23317210291"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.virginmedia.com/join/installation/book-engineer", "match": "simple"}, {"type": "url", "value": "https://www.virginmedia.com/join/installationSelection", "match": "simple"}]], "activationType": "polling", "name": "Join installationSelection + installation book-engineer - polling - checkout event | products array", "apiName": "22886250866_join_installationselection__installation_bookenginee", "tags": [], "undoOnDeactivation": false, "activationCode": /**
 * Sample Polling Function
 * Supply an expression to return a boolean inside a function.
 * For complete documentation, see https://docs.developers.optimizely.com/web/docs/dynamic-websites#section-polling
 */

function pollingFn() {
  if(window.dataLayer!==undefined){
    var checkoutEvent = window.dataLayer.filter((i)=>{if(i.event!==undefined )return i.event == "checkout";});
    if(checkoutEvent.length > 0){
      var productsArray = checkoutEvent[0].ecommerce.checkout.products;
      return productsArray!==undefined && productsArray.length>0;
    }
  }
}
, "deactivationEnabled": false, "id": "23327000149"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.virginmedia.com/join/customer/details", "match": "simple"}]], "activationType": "callback", "name": "Join customer details - callback - userHasAcceptedCookies", "apiName": "22886250866_join_customer_details__callback__userhasacceptedcook", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
    var utils = window.optimizely.get('utils');
  
    utils.waitUntil(function() {
      let functionalCookieHasBeenAccepted = window.sales_cro.getCookie("OptanonConsent").indexOf("C0003:1") > -1,
          userHasInteractedWithCookieBox = document.cookie.indexOf("OptanonAlertBoxClosed") > -1;
          return userHasInteractedWithCookieBox && functionalCookieHasBeenAccepted;
    }).then(function(){
      activate();
    });
  }
, "deactivationEnabled": false, "id": "23338720683"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.virginmedia.com", "match": "simple"}, {"type": "url", "value": "https://www.virginmedia.com/", "match": "simple"}]], "name": "Homepage - immediately", "apiName": "22886250866_homepage__immediately", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "23398600387"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.virginmedia.com/virgin-media-o2", "match": "simple"}, {"type": "url", "value": "https://www.virginmedia.com/broadband/broadband-and-sim", "match": "simple"}]], "activationType": "callback", "name": "JVCO pages on virginmedia domain - callback - userHasAcceptedCookies", "apiName": "22886250866_jvco_pages_on_virginmedia_domain__callback__userhasa", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
    var utils = window.optimizely.get('utils');
  
    utils.waitUntil(function() {
      let functionalCookieHasBeenAccepted = window.sales_cro.getCookie("OptanonConsent").indexOf("C0003:1") > -1,
          userHasInteractedWithCookieBox = document.cookie.indexOf("OptanonAlertBoxClosed") > -1;
          return userHasInteractedWithCookieBox && functionalCookieHasBeenAccepted;
    }).then(function(){
      activate();
    });
  }
, "deactivationEnabled": false, "id": "23452140081"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.virginmedia.com/broadband", "match": "substring"}, {"type": "url", "value": "https://www.virginmedia.com/tv", "match": "substring"}, {"type": "url", "value": "https://www.virginmedia.com/landline", "match": "substring"}, {"type": "url", "value": "https://www.virginmedia.com/refer-a-friend-products", "match": "simple"}]], "name": "All Content Pages - Immediately", "apiName": "22886250866_all_content_pages__immediately", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "23472861093"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.virginmedia.com/broadband/compare-deals", "match": "simple"}]], "activationType": "callback", "name": "[POST-SVC] Compare deals page - callback - userHasAcceptedCookies + Product Cards loaded", "apiName": "22886250866_postsvc_compare_deals_page__callback__userhasaccepte", "tags": [], "undoOnDeactivation": false, "activationCode": /**
 * Sample Activation Function
 * For complete documentation, see https://docs.developers.optimizely.com/web/docs/dynamic-websites#section-callback
 * @param {Function} activate - Call this function when you want to activate the page.
 * @param {Object} options - An object containing Page information.
 */

function callbackFn(activate, options) {
  var utils = window.optimizely.get('utils');
  const isCorrectLocation = window.location.href.indexOf("/compare-deals") > -1
  utils.waitUntil(function() {
      if(isCorrectLocation){
          let functionalCookieHasBeenAccepted = window.sales_cro.getCookie("OptanonConsent").indexOf("C0003:1") > -1,
              userHasInteractedWithCookieBox = document.cookie.indexOf("OptanonAlertBoxClosed") > -1,
              domCondition = typeof window.getAllAngularRootElements === "function" && document.querySelector("vm-product-card-section") !== null;
          return domCondition && functionalCookieHasBeenAccepted && userHasInteractedWithCookieBox;
      } else{
          return true;
      }
  }).then(function(){
      if(isCorrectLocation){
          utils.observeSelector("vm-product-card-section .tile-wrapper", function(el) {
              console.log("product cards are here");
              activate();
          }, {
          "timeout": 300000,
          "once": true,
          });
      }
  });
}
, "deactivationEnabled": false, "id": "23582500346"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.virginmedia.com/broadband/broadband-only", "match": "simple"}, {"type": "url", "value": "https://www.virginmedia.com/broadband/broadband-and-phone", "match": "simple"}]], "activationType": "callback", "name": "[POST-SVC] Broadband only | Broadband and phone - callback - userHasAcceptedCookies + Product Cards loaded", "apiName": "22886250866_postsvc_broadband_only__broadband_and_phone__callbac", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
    var utils = window.optimizely.get('utils');
    const isCorrectLocation = window.location.href.indexOf("/broadband-only") > -1 || window.location.href.indexOf("/broadband-and-phone") > -1;
    utils.waitUntil(function() {
        if(isCorrectLocation){
            let functionalCookieHasBeenAccepted = window.sales_cro.getCookie("OptanonConsent").indexOf("C0003:1") > -1,
                userHasInteractedWithCookieBox = document.cookie.indexOf("OptanonAlertBoxClosed") > -1,
                domCondition = typeof window.getAllAngularRootElements === "function" && document.querySelector("vm-product-card-section") !== null;
            return domCondition && functionalCookieHasBeenAccepted && userHasInteractedWithCookieBox;
        } else{
            return true;
        }
    }).then(function(){
        if(isCorrectLocation){
            utils.observeSelector("vm-product-card-section .tile-wrapper", function(el) {
                console.log("product cards are here");
                activate();
            }, {
            "timeout": 300000,
            "once": true,
            });
        }
    });
}
, "deactivationEnabled": false, "id": "23599010476"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.virginmedia.com/broadband", "match": "simple"}, {"type": "url", "value": "https://www.virginmedia.com/broadband/packages", "match": "simple"}]], "activationType": "callback", "name": "[POST-SVC] Broadband + Broadband Packages pages - callback - userHasAcceptedCookies + Product Cards loaded", "apiName": "22886250866_postsvc_broadband_page__callback__userhasacceptedcoo", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
    var utils = window.optimizely.get('utils');
    const isCorrectLocation = window.location.pathname=="/broadband" || window.location.href.indexOf("/broadband/packages") > -1;
    utils.waitUntil(function() {
        if(isCorrectLocation){
            let functionalCookieHasBeenAccepted = window.sales_cro.getCookie("OptanonConsent").indexOf("C0003:1") > -1,
                userHasInteractedWithCookieBox = document.cookie.indexOf("OptanonAlertBoxClosed") > -1,
                domCondition = typeof window.getAllAngularRootElements === "function" && document.querySelector("vm-product-card-section") !== null;
            return domCondition && functionalCookieHasBeenAccepted && userHasInteractedWithCookieBox;
        } else{
            return true;
        }
    }).then(function(){
        if(isCorrectLocation){
            utils.observeSelector("vm-product-card-section .tile-wrapper", function(el) {
                console.log("product cards are here");
                activate();
            }, {
            "timeout": 300000,
            "once": true,
            });
        }
    });
}
, "deactivationEnabled": false, "id": "23640640276"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.virginmedia.com/broadband/broadband-builder", "match": "simple"}]], "activationType": "callback", "name": "URL Targeting for [QA] [no-track] Broadband Builder 2.0 ", "apiName": "22886250866_url_targeting_for_qa_broadband_builder_20_", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
    var utils = window.optimizely.get('utils');
    const isCorrectLocation = window.location.href.indexOf("/broadband-builder") > -1;
    utils.waitUntil(function() {
        if(isCorrectLocation){
            let functionalCookieHasBeenAccepted = window.sales_cro.getCookie("OptanonConsent").indexOf("C0003:1") > -1,
                userHasInteractedWithCookieBox = document.cookie.indexOf("OptanonAlertBoxClosed") > -1,
                domCondition = typeof window.getAllAngularRootElements === "function" && document.querySelector("vm-product-card-section") !== null;
            return domCondition && functionalCookieHasBeenAccepted && userHasInteractedWithCookieBox;
        } else{
            return true;
        }
    }).then(function(){
        if(isCorrectLocation){
            utils.observeSelector("vm-product-card-section .tile-wrapper", function(el) {
                activate();
            }, {
            "timeout": 300000,
            "once": true,
            });
        }
    });
}
, "deactivationEnabled": false, "id": "23667421206"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.virginmedia.com/join/review", "match": "simple"}]], "activationType": "callback", "name": "URL Targeting for [A/B]CSCRO-984 Optimise 'affiliate active' V2", "apiName": "22886250866_url_targeting_for_qaabnotrackcscro984_optimise_affil", "tags": [], "undoOnDeactivation": false, "activationCode": /**
 * Sample Activation Function
 * For complete documentation, see https://docs.developers.optimizely.com/web/docs/dynamic-websites#section-callback
 * @param {Function} activate - Call this function when you want to activate the page.
 * @param {Object} options - An object containing Page information.
 */

  function callbackFn(activate, options) {
    var utils = window.optimizely.get('utils');
    const isCorrectLocation = window.location.href.indexOf("/join/review") > -1;  
    utils.waitUntil(function() {
      if(isCorrectLocation){
      let functionalCookieHasBeenAccepted = window.sales_cro.getCookie("OptanonConsent").indexOf("C0003:1") > -1,
          userHasInteractedWithCookieBox = document.cookie.indexOf("OptanonAlertBoxClosed") > -1;
          return userHasInteractedWithCookieBox && functionalCookieHasBeenAccepted;
      } else{
        return true
      }
    }).then(function(){
      if(isCorrectLocation){
        if(window.location.href.indexOf("Comparethemarket.com") > -1){
          window.sessionStorage.setItem("affiliateName", "ctm");
        } else if(window.location.href.indexOf("uSwitch") > -1){
            window.sessionStorage.setItem("affiliateName", "uswitch");
        }
        else if(document.referrer.indexOf("moneysupermarket.com")>-1){
            window.sessionStorage.setItem("affiliateName", "msm");
        }

        const affiliateName = sessionStorage.getItem("affiliateName");
        const affiliateIsTrue = affiliateName!== null && (affiliateName=="ctm" || affiliateName=="uswitch" || affiliateName=="msm" );
        
        utils.observeSelector(".alert-wrapper", function(el) {

          if(affiliateIsTrue && document.querySelector(".alert-success .card-body") && document.querySelector(".alert-success .card-body").textContent.indexOf("Affiliate active")>-1){
            console.log("affiliate alert is here and affiliate is true");
            activate();
          }            
        }, {
        "timeout": 300000,
        "once": true,
        });
    }
    });
  }

, "deactivationEnabled": false, "id": "23723900536"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.virginmedia.com/", "match": "simple"}]], "activationType": "callback", "name": "URL Targeting for [QA][A/B][no-track] CSCRO-1117 Homepage - Persistent Basket", "apiName": "22886250866_url_targeting_for_qaabnotrack_cscro1117_homepage__pe", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
    var utils = window.optimizely.get('utils');
    const isCorrectLocation = window.location.href.indexOf("virginmedia.com") > -1 && window.location.pathname === "/" && document.referrer.indexOf("virginmedia.com") === -1;
    utils.waitUntil(function() {
        if(isCorrectLocation){
            let functionalCookieHasBeenAccepted = window.sales_cro.getCookie("OptanonConsent").indexOf("C0003:1") > -1,
                userHasInteractedWithCookieBox = document.cookie.indexOf("OptanonAlertBoxClosed") > -1,
                domCondition = typeof window.getAllAngularRootElements === "function" && document.querySelector("vm-header-exposed") !== null;
            return domCondition && functionalCookieHasBeenAccepted && userHasInteractedWithCookieBox;
        } else{
            return true;
        }
    }).then(function(){
        if(isCorrectLocation){
            utils.observeSelector("vm-header-exposed .basket-icon-wrapper .basket-icon", function(el) {
              activate();
            }, {
            "timeout": 300000,
            "once": true,
            });
        }
    });
  }
, "deactivationEnabled": false, "id": "23730920624"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.virginmedia.com/join/availability", "match": "simple"}, {"type": "url", "value": "https://www.virginmedia.com/join/review", "match": "simple"}, {"type": "url", "value": "https://www.virginmedia.com/join/are-you-moving", "match": "simple"}]], "activationType": "callback", "name": "URL Targeting for [100%][no-track] Background activity for CSCRO-984", "apiName": "22886250866_url_targeting_for_qa100notrack_background_activity_f", "tags": [], "undoOnDeactivation": false, "activationCode": /**
 * Sample Activation Function
 * For complete documentation, see https://docs.developers.optimizely.com/web/docs/dynamic-websites#section-callback
 * @param {Function} activate - Call this function when you want to activate the page.
 * @param {Object} options - An object containing Page information.
 */

function callbackFn(activate, options) {
    var utils = window.optimizely.get('utils');
    const isCorrectLocation = window.location.href.indexOf("/join/availability") > -1 || window.location.href.indexOf("/join/review") > -1 || window.location.href.indexOf("/join/are-you-moving") > -1;  
  
    utils.waitUntil(function() {
      if(isCorrectLocation){
      let functionalCookieHasBeenAccepted = window.sales_cro.getCookie("OptanonConsent").indexOf("C0003:1") > -1,
          userHasInteractedWithCookieBox = document.cookie.indexOf("OptanonAlertBoxClosed") > -1;
          return userHasInteractedWithCookieBox && functionalCookieHasBeenAccepted;
      } else{
        return true;
      }
    }).then(function(){
      if(isCorrectLocation)  activate();
    });
  }
, "deactivationEnabled": false, "id": "23741200566"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.virginmedia.com/tv", "match": "simple"}]], "activationType": "callback", "name": "[POST-SVC] TV packages - callback - userHasAcceptedCookies + Product Cards loaded", "apiName": "22886250866_postsvc_tv_packages__callback__userhasacceptedcookie", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
    var utils = window.optimizely.get('utils');
    const isCorrectLocation = window.location.href.indexOf("/tv") > -1;
    utils.waitUntil(function() {
        if(isCorrectLocation){
            let functionalCookieHasBeenAccepted = window.sales_cro.getCookie("OptanonConsent").indexOf("C0003:1") > -1,
                userHasInteractedWithCookieBox = document.cookie.indexOf("OptanonAlertBoxClosed") > -1,
                domCondition = typeof window.getAllAngularRootElements === "function" && document.querySelector("vm-product-card-section") !== null;
            return domCondition && functionalCookieHasBeenAccepted && userHasInteractedWithCookieBox;
        } else{
            return true;
        }
    }).then(function(){
        if(isCorrectLocation){
            utils.observeSelector("vm-product-card-section .tile-wrapper", function(el) {
                activate();
            }, {
            "timeout": 300000,
            "once": true,
            });
        }
    });
}
, "deactivationEnabled": false, "id": "23776400486"}], "projectId": "22886250866", "namespace": "22886250866", "tagGroups": [], "integrationSettings": [], "interestGroups": [], "dimensions": [{"segmentId": null, "id": "23190090350", "apiName": "productCategory", "name": "Product category"}, {"segmentId": null, "id": "23191600549", "apiName": "visitorStatus", "name": "Visitor Status"}, {"segmentId": null, "id": "23211470641", "apiName": "installationType", "name": "Installation Type"}, {"segmentId": null, "id": "23213050672", "apiName": "pageJourney", "name": "Page Journey"}, {"segmentId": null, "id": "23215050298", "apiName": "streamAttach", "name": "Stream attach"}, {"segmentId": null, "id": "23421510994", "apiName": "contractLength", "name": "Contract Length"}], "audiences": [{"conditions": ["and", ["or", ["or", {"value": "var pageview = window.dataLayer.filter((i)=>{if(i.event!==undefined )return i.event == \"pageview\"});\nvar journey = pageview[0].page.journey;\nconsole.log(journey);\njourney==='create-basket';", "type": "code", "name": null, "match": null}]]], "id": "23064800131", "name": "Journey: create-basket"}, {"conditions": ["and", ["or", ["or", {"value": "var pageview = window.dataLayer.filter((i)=>{if(i.event!==undefined )return i.event == \"pageview\"});\nvar journey = pageview[0].page.journey;\njourney==='restore-basket';", "type": "code", "name": null, "match": null}]]], "id": "23086391156", "name": "Journey: restore-basket"}, {"conditions": ["and", ["or", ["or", {"value": "var pageview = window.dataLayer.filter((i)=>{if(i.event!==undefined )return i.event == \"pageview\"});\nvar journey = pageview[0].page.journey;\njourney==='quickCheckout';", "type": "code", "name": null, "match": null}]]], "id": "23093261747", "name": "Journey: quickCheckout"}, {"conditions": ["and", ["or", ["or", {"value": "var pageview = window.dataLayer.filter((i)=>{if(i.event!==undefined )return i.event == \"pageview\"});\nvar journey = pageview[0].page.journey;\njourney==='original2';", "type": "code", "name": null, "match": null}]]], "id": "23107030611", "name": "Journey: original2"}, {"conditions": ["and", ["or", ["not", ["or", {"value": "true", "type": "query", "name": "merkleqa", "match": "exact"}]]]], "id": "23143940444", "name": "Does not include merkleqa=true "}, {"conditions": ["and", ["or", ["or", {"value": "var checkoutEvent = dataLayer.filter((i)=>{if(i.event!==undefined )return i.event == \"checkout\"});\nvar productCategory = checkoutEvent[0].ecommerce.checkout.products[0].category;\nproductCategory.indexOf(\"dual\")>-1;", "type": "code", "name": null, "match": null}]]], "id": "23176400897", "name": "Product category: duals"}, {"conditions": ["and", ["or", ["or", {"value": " var pageview = window.dataLayer.filter((i)=>{if(i.event!==undefined )return i.event == \"pageview\"});\n var brand = pageview[0].page.brand;\nbrand==='virgin';", "type": "code", "name": null, "match": null}]]], "id": "23193990082", "name": "Brand: virgin"}, {"conditions": ["and", ["or", ["or", {"value": "var pageview = window.dataLayer.filter((i)=>{if(i.event!==undefined )return i.event == \"pageview\"});\nvar intent = pageview[0].page.intent;\nconsole.log(\"intent =,\",intent);\nconsole.log(intent==='volt');\nintent==='volt';", "type": "code", "name": null, "match": null}]]], "id": "23196510092", "name": "Intent: volt"}, {"conditions": ["and", ["or", ["or", {"value": "true", "type": "query", "name": "optiqa", "match": "exact"}], ["or", {"value": "window.sessionStorage.getItem('optiqa')!== undefined && window.sessionStorage.getItem('optiqa')== \"true\" ", "type": "code", "name": null, "match": null}]]], "id": "23197550032", "name": "optiqa = true"}, {"conditions": ["and", ["or", ["or", {"value": "//Compax productId is 9309, 9310,9311,9312\nvar checkoutEvent = window.dataLayer.filter((i)=>{if(i.event!==undefined )return i.event == \"checkout\"});\nvar productID = checkoutEvent[0].ecommerce.checkout.products[0].dimension17;\nconsole.log(\"productId = \",productID);\nconsole.log(productID==='9309' || productID==='9310' || productID==='9311' || productID==='9312');\nproductID==='9309' || productID==='9310' || productID==='9311' || productID==='9312';", "type": "code", "name": null, "match": null}]]], "id": "23224940028", "name": "Compax product id is 9309 or 9310 or 9311 or 9312"}, {"conditions": ["and", ["or", ["or", {"value": "var checkoutEvent = dataLayer.filter((i)=>{if(i.event!==undefined )return i.event == \"checkout\"});\nvar productCategory = checkoutEvent[0].ecommerce.checkout.products[0].category;\nproductCategory.indexOf(\"triple\")>-1;", "type": "code", "name": null, "match": null}]]], "id": "23230050302", "name": "Product category: triple"}, {"conditions": ["and", ["or", ["or", {"value": null, "type": "query", "name": "promo", "match": "exists"}]], ["or", ["not", ["or", {"value": "aff", "type": "query", "name": "promo", "match": "regex"}]]]], "id": "23363800279", "name": "Promo query parameter exists but does not contain aff"}, {"conditions": ["and", ["or", ["or", {"value": "true", "type": "query", "name": "merkleqa", "match": "exact"}]]], "id": "23378731038", "name": "merkleqa=true"}, {"conditions": ["and", ["or", ["or", {"value": "sessionStorage.getItem(\"applyPromoCodeRemoved\")!=='1'", "type": "code", "name": null, "match": null}]]], "id": "23379510316", "name": "Restore promo basket has not been removed"}, {"conditions": ["and", ["or", ["or", {"value": "desktop", "type": "device", "name": null, "match": null}]]], "id": "23655950748", "name": "Desktop Only"}, {"conditions": ["and", ["or", ["or", {"value": "true", "type": "query", "name": "bb_builder_960_qa", "match": "exact"}]]], "id": "23683890047", "name": "BB Builder QA"}, {"conditions": ["and", ["or", ["or", {"value": "https://www.virginmedia.com/join/installationSelection", "type": "referrer", "name": null, "match": "simple"}], ["or", {"value": "console.log(\"referrer = \",window.document.referrer );\nwindow.document.referrer == \"https://www.virginmedia.com/join/installationSelection\"", "type": "code", "name": null, "match": null}]]], "id": "23722620646", "name": "Referrer is installationSelection page [CSCRO-1006]"}, {"conditions": ["and", ["or", ["or", {"value": "var affiliateName = sessionStorage.getItem(\"affiliateName\");\naffiliateName!== null && (affiliateName==\"ctm\" || affiliateName==\"uswitch\" || affiliateName==\"msm\" )", "type": "code", "name": null, "match": null}]]], "id": "23722830392", "name": "User comes from CTM, MSM, uSwitch Affiliates"}, {"conditions": ["and", ["or", ["or", {"value": "var clickedThrough1006 = window.sessionStorage.getItem(\"promoteQS\");\nconsole.log(\"clickedThrough1006 = \",clickedThrough1006); \nclickedThrough1006!==null && clickedThrough1006==\"true\";", "type": "code", "name": null, "match": null}]]], "id": "23756060107", "name": "User has clicked through the get self-install link [CSCRO-1006]"}, {"conditions": ["and", ["or", ["or", {"value": "var checkoutEvent = window.dataLayer.filter((i)=>{if(i.event!==undefined )return i.event == \"checkout\"}),\ninstallationDate = checkoutEvent[0].firstQSDate,\nengineerDate = checkoutEvent[0].firstEngineerDate;\n\nconsole.log(\"engDate = \",engineerDate,\" qsdate =\",installationDate, \" \", engineerDate>installationDate)\n\nengineerDate>installationDate", "type": "code", "name": null, "match": null}]]], "id": "23758820163", "name": "Engineer date later than self-install date"}, {"conditions": ["and", ["or", ["or", {"value": "true", "type": "query", "name": "vm_qa_1117", "match": "exact"}]]], "id": "23791720504", "name": "1117 - QA"}], "anonymizeIP": true, "projectJS": function(){//Add-Remove vmqa session storage and optiqa localstorage START
//Section 1: Managing QA query string
const url = window.location.href;
if(url.indexOf("vmqa=true") > -1){
    window.localStorage.setItem("vmqa", "true");
} else if(url.indexOf("vmqa=false") > -1 && window.localStorage.getItem("vmqa") !== null){
    window.localStorage.removeItem("vmqa");
}
if(url.indexOf("optiqa=true") > -1){
    window.sessionStorage.setItem("optiqa", "true");
} else if(url.indexOf("optiqa=false") > -1 && window.sessionStorage.getItem("optiqa") !== null){
    window.sessionStorage.removeItem("optiqa");
}
//Add-Remove vmqa session storage and optiqa localstorage FINISH

//Hold events for vmqa START
if((window.location.href.indexOf("vmqa=true") > -1 || window.localStorage.getItem("vmqa")=="true")){  
  console.log("in disable tracking");
  window['optimizely'] = window['optimizely'] || [];
  window["optimizely"].push({
    "type": "disable",
    "scope": "tracking"
  });
}
//Hold events for vmqa FINISH

//Add common functions START
const sales_cro = {
    fireGA: function(experimentID,eventLabel){
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            "event": "siteInteraction",
            "eventCategory": "a/b testing",
            "eventAction": `cscro-${experimentID}`,
            "eventLabel": `${eventLabel}`,
            "eventValue": 1,
        });
    },
    fireOpti: function(eventName){
        window.optimizely = window.optimizely || [];
        window["optimizely"].push({
            "type": "event",
            "eventName": eventName
            });
    },
    getCookie: function(cname){
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
            c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
            }
        }
        return "";
    },
    deleteCookie: function(name) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    },
    createOptiSegment: function (attributesObject){
        window.optimizely = window.optimizely || [];
        window.optimizely.push({
            "type": "user",
            "attributes": attributesObject
        });
    }
};

window.sales_cro = sales_cro;
//Add common functions FINISH

/*
// Section 2: Activate experiments only if user has accepted cookies.
(function (window, document){
    'use strict';
    
	let timesInLoop = 0;
    let $timerA = window.setInterval(function () {
        let functionalCookieHasBeenAccepted = window.sales_cro.getCookie("OptanonConsent").indexOf("C0003:1") > -1,
        	userHasInteractedWithCookieBox = document.cookie.indexOf("OptanonAlertBoxClosed") > -1;
        if(userHasInteractedWithCookieBox && functionalCookieHasBeenAccepted) {
        	//user has interacted with cookie box and has accepted functional cookies
            //console.log("user has interacted with cookie box and has accepted functional cookies");
            window.clearInterval($timerA); 
        	window.dataLayer.push({'event': 'optimizely.userHasAcceptedCookie'});
        } else if(userHasInteractedWithCookieBox){
        	// user has interacted with cookies but hasn't accepted functional cookies
            //console.log("user has interacted with cookies but hasn't accepted functional cookies");
        	window.clearInterval($timerA);
        } else{
        	// user hasn't interacted with cookie box, keep checking if they have accepted (end checking after half a minute)
            //console.log("user hasn't interacted with cookie box, keep checking");
        	timesInLoop += 1;
        	timesInLoop > 60 ? window.clearInterval($timerA) :  null;
        }
    }, 500);
}(window, document));
*/


// Segments - START
// New vs Returning user.
if(url.indexOf("join/checkout/success") === -1){
    (function (window){
        'use strict';
        let timesInLoop = 0;
        let $timerNewReturningUser = window.setInterval(function () {
            if(window.optimizely !== undefined && window.optimizely.get("visitor") !== undefined ){
                window.clearInterval($timerNewReturningUser);
                const visitorStatusSegmentId = '23191600549';
                const visitorStatus = window.optimizely.get("visitor").first_session ? "new" : "returning";
                const currentVisitorStatus = (window.optimizely.get("visitor").custom !== undefined && window.optimizely.get("visitor").custom[visitorStatusSegmentId] !== undefined)
                                                ? window.optimizely.get("visitor").custom[visitorStatusSegmentId].value 
                                                : "";
                if(visitorStatus !== currentVisitorStatus){
                    window.sales_cro.createOptiSegment({"visitorStatus": visitorStatus});    
                }                            
            } else{
                timesInLoop += 1;
                if(timesInLoop > 60) {
                    window.clearInterval($timerNewReturningUser);
                }
            }
        }, 50);
    }(window));
}
//Code for pageJourney, productCategory and installationType segments.
const targetedPages = ['join/availability', 'join/are-you-moving', 'join/review', 'join/products', 'join/add-tv-stream', 'join/home-phone', 'join/installationSelection', 'join/installation/book-engineer', '/join/customer/details'];
var shouldCheckSegment = targetedPages.find((el) => url.includes(el));
if(url.indexOf("/join/") > -1 && shouldCheckSegment){
    const userAttributesApiCode = {
        'pageJourney' : "23213050672",
        'productCategory' : '23190090350',
        'installationType': '23211470641',
        'contractLength': '23421510994'
    };
    (function (window){
        'use strict';
        let timesInLoop = 0;
        let $timerSegments = window.setInterval(function () {
            var pageViewEvent = window.dataLayer.filter((i)=>{if(i.event!==undefined )return i.event == "pageview";});
            var checkoutEvent = window.dataLayer.filter((i)=>{if(i.event!==undefined )return i.event == "checkout";});
            let pollingEventCondition = (url.indexOf("/join/products") > -1 || url.indexOf("/join/are-you-moving") > -1) ? pageViewEvent.length > 0 : checkoutEvent.length > 0;
            if(pollingEventCondition && window.optimizely !== undefined && window.optimizely.get("visitor") !== undefined ){
                window.clearInterval($timerSegments);
                const pageJourney = pageViewEvent[0].page.journey;
                const currentpageJourney = (window.optimizely.get("visitor").custom !== undefined && window.optimizely.get("visitor").custom[userAttributesApiCode['pageJourney']] !== undefined)
                                            ? window.optimizely.get("visitor").custom[userAttributesApiCode['pageJourney']].value 
                                            : "";
                if(pageJourney !== currentpageJourney){
                    window.sales_cro.createOptiSegment({"pageJourney": pageJourney});    
                }

                if(checkoutEvent.length > 0){
                    var productsArray = checkoutEvent[0].ecommerce.checkout.products;
                    if(window.location.href.indexOf("/join/customer/details") > -1 ){
                        const installationType = productsArray[0].dimension1.indexOf("engineer installation") > -1
                                                ? "engineer install"
                                                : (productsArray[0].dimension1.indexOf("home delivery") > -1 
                                                    ? "home delivery" 
                                                    : (productsArray[0].dimension1.indexOf("click & collect") > -1
                                                    ? "click & collect"
                                                    : ""));
                        window.sales_cro.createOptiSegment({"installationType": installationType});
                      
                        const streamAttach = productsArray[0].dimension1.indexOf("tv 2.0") > -1 ? "stream attached" : "no stream attached";
                        window.sales_cro.createOptiSegment({"streamAttach": streamAttach});
                    } else{
                        const productCategory = productsArray[0].category;
                        const contractLength = productsArray[0].dimension12;
                        const currentProductCategory =  (window.optimizely.get("visitor").custom !== undefined && window.optimizely.get("visitor").custom[userAttributesApiCode['productCategory']] !== undefined)
                                                        ? window.optimizely.get("visitor").custom[userAttributesApiCode['productCategory']].value 
                                                        : "";
                        const currentContractLength =  (window.optimizely.get("visitor").custom !== undefined && window.optimizely.get("visitor").custom[userAttributesApiCode['contractLength']] !== undefined)
                                                        ? window.optimizely.get("visitor").custom[userAttributesApiCode['contractLength']].value 
                                                        : "";
                        if(productCategory !== currentProductCategory && productCategory !== ""){
                            window.sales_cro.createOptiSegment({"productCategory": productCategory});   
                        }
                        if(contractLength !== currentContractLength && contractLength !== ""){
                            window.sales_cro.createOptiSegment({"contractLength": contractLength});   
                        }
                    }
                }
            } else{
                timesInLoop += 1;
                if(timesInLoop > 60) {
                    window.clearInterval($timerSegments);
                }
            }
        }, 50);
    }(window));
}
// Segments - FINISH
}, "visitorAttributes": [], "enableForceParameters": true, "accountId": "22744560884", "events": [{"category": "other", "name": "Continue ctas from join review", "eventType": "custom", "viewId": null, "apiName": "continue_ctas_on_review_click", "id": "23184750478", "eventFilter": null}, {"category": "other", "name": "Click on continue cta", "eventType": "click", "viewId": "23080651258", "apiName": "22886250866_click_on_continue_cta", "id": "23212980378", "eventFilter": {"filterType": "target_selector", "selector": "#review-selection-form-top button"}}, {"category": "other", "name": "Select CTA Click - Compare deals page", "eventType": "click", "viewId": "23210030765", "apiName": "22886250866_select_cta_click__compare_deals_page", "id": "23340721734", "eventFilter": {"filterType": "target_selector", "selector": "vm-choice-chips vm-product-card-section .vm-container vm-button"}}, {"category": "other", "name": "Existing O2 customer toastie cta clicks", "eventType": "custom", "viewId": null, "apiName": "989_existing_o2_toastie_click", "id": "23347621521", "eventFilter": null}, {"category": "other", "name": "Click on open plan details", "eventType": "click", "viewId": "23080651258", "apiName": "22886250866_click_on_open_plan_details", "id": "23352290651", "eventFilter": {"filterType": "target_selector", "selector": "#your-basket-collapse.collapsed"}}, {"category": "other", "name": "Plan details clicked for upsell product", "eventType": "custom", "viewId": null, "apiName": "upsell_plan_details_clicked", "id": "23359600695", "eventFilter": null}, {"category": "other", "name": "Existing O2 customer toastie close icon click", "eventType": "custom", "viewId": null, "apiName": "989_existing_o2_toastie_close_click", "id": "23379141585", "eventFilter": null}, {"category": "other", "name": "[CSCRO-1044] - Clicks on the new top 4 FAQs", "eventType": "custom", "viewId": null, "apiName": "clicks_top_faqs", "id": "23385402972", "eventFilter": null}, {"category": "other", "name": "Click on upsell CTA [upsell test - join review]", "eventType": "custom", "viewId": null, "apiName": "clicked_upsell_cta", "id": "23408920010", "eventFilter": null}, {"category": "other", "name": "Filter interaction - 961", "eventType": "custom", "viewId": null, "apiName": "961_filter_interaction", "id": "23416170767", "eventFilter": null}, {"category": "other", "name": "Plan details clicked", "eventType": "custom", "viewId": null, "apiName": "plan_details_clicked", "id": "23416181656", "eventFilter": null}, {"category": "other", "name": "[CSCRO-1029] Priority modal opened", "eventType": "custom", "viewId": null, "apiName": "1029_priority_modal_opened", "id": "23464880114", "eventFilter": null}, {"category": "other", "name": "Clicks on info links - installationSelection", "eventType": "custom", "viewId": null, "apiName": "info_link_click", "id": "23468482736", "eventFilter": null}, {"category": "other", "name": "Product cards Select CTA", "eventType": "custom", "viewId": null, "apiName": "product_card_select_cta_clicked", "id": "23481930098", "eventFilter": null}, {"category": "other", "name": "[CSCRO-1072] DOB or security question errors displayed", "eventType": "custom", "viewId": null, "apiName": "dob_or_securityq_error_displayed", "id": "23500151250", "eventFilter": null}, {"category": "other", "name": "[CSCRO-679]Product card with social proof select cta clicked", "eventType": "custom", "viewId": null, "apiName": "product_card_with_social_proof_select_cta_clicked", "id": "23528420243", "eventFilter": null}, {"category": "other", "name": "[CSCRO-1040] Clicks on upsell CTA", "eventType": "custom", "viewId": null, "apiName": "1040_upsell_CTA_click", "id": "23663200279", "eventFilter": null}, {"category": "other", "name": "[CSCRO-1040] Clicks on Continue without", "eventType": "custom", "viewId": null, "apiName": "1040_continue_without_click", "id": "23664300192", "eventFilter": null}, {"category": "other", "name": "My Account Clicks [CSCRO-1064]", "eventType": "custom", "viewId": null, "apiName": "my_account_click_1064", "id": "23669081124", "eventFilter": null}, {"category": "other", "name": "PB - Continue to checkout", "eventType": "custom", "viewId": null, "apiName": "pb_continue_to_checkout", "id": "23718280739", "eventFilter": null}, {"category": "other", "name": "Open persistent basket", "eventType": "custom", "viewId": null, "apiName": "open_pb", "id": "23728761342", "eventFilter": null}, {"category": "other", "name": "[BB Builder] click on contract length tile", "eventType": "custom", "viewId": null, "apiName": "bb_builder_contract_length_tiles_click", "id": "23730360649", "eventFilter": null}, {"category": "other", "name": "Check availability click", "eventType": "click", "viewId": "23317210291", "apiName": "22886250866_check_availability_click", "id": "23741970881", "eventFilter": {"filterType": "target_selector", "selector": ".postcode-checker__search-form button"}}, {"category": "other", "name": "[CSCRO-1117] Forced open pb", "eventType": "custom", "viewId": null, "apiName": "forced_open_pb", "id": "23743210528", "eventFilter": null}, {"category": "other", "name": "[BB Builder] clicks on speed tiles", "eventType": "custom", "viewId": null, "apiName": "bb_builder_speed_tiles_click", "id": "23744050445", "eventFilter": null}, {"category": "other", "name": "[BB Builder]  clicks on add on tiles", "eventType": "custom", "viewId": null, "apiName": "bb_builder_add_on_tiles_click", "id": "23747080514", "eventFilter": null}, {"category": "other", "name": "Clicked on tv filter", "eventType": "click", "viewId": "23776400486", "apiName": "22886250866_clicked_on_tv_filter", "id": "23750260844", "eventFilter": {"filterType": "target_selector", "selector": ".tv-addon-filter-item"}}, {"category": "other", "name": "[CSCRO-1122] Click on change link svc", "eventType": "custom", "viewId": null, "apiName": "svc_change_link_click", "id": "23780960354", "eventFilter": null}, {"category": "other", "name": "[CSCRO-1079] Filter Interaction", "eventType": "custom", "viewId": null, "apiName": "CSCRO_1079_filter_interaction", "id": "23795860006", "eventFilter": null}], "experimental": {"trimPages": true}, "revision": "2042"},f=__webpack_require__(7122),l="initializeOptimizelyPreview";if(f.initGlobalStore(s),u.populateDirectiveData(),r.clientHasAlreadyInitialized())e.warn("Main / Disabling because Optimizely has already initialized on this page load. Are there multiple snippets on the page?");else if(r.shouldBailForDesktopApp())e.log("Main / Disabling because of desktop app.");else if(r.conflictInObservingChanges())e.log("Main / Disabling: Observe Changes Indefinitely is on, but browser does not support it.");else{if(r.shouldLoadInnie())a.registerFunction("getProjectId",(function(){return s.projectId})),a.registerFunction("getAccountId",(function(){return s.accountId})),c.addScriptAsync("https://app.optimizely.com/js/innie.js"),e.log("Main / Disabling in favor of the editor client.");else if(r.shouldLoadPreview())(r.isSlave()?window.optimizely:window.optimizely=window.optimizely||[]).push({type:"load",data:s}),e.log("Main / Disabling in favor of the preview client."),__webpack_require__(1022).setupPreviewGlobal(),__webpack_require__(1022).pushToPreviewGlobal({type:"pushPreviewData",name:"liveCommitData",data:s}),r.isSlave()||(a.registerFunction("getProjectId",(function(){return s.projectId})),c.addScriptSync("https://cdn-assets-prod.s3.amazonaws.com/js/preview2/22886250866.js"));else if(r.shouldBootstrapDataForPreview()){a.registerFunction(l,(function(t){n(),a.unregisterFunction(l)}));var d=r.isSlave()?PROJECT_ID_FOR_SLAVE_PREVIEW:a.getFunction("getProjectId")();v=r.getProjectToken(),h=d,p=r.getPreviewLayerIds(),o="/dist/preview_data.js?token=__TOKEN__&preview_layer_ids=__PREVIEW_LAYER_IDS__".replace("__TOKEN__",v).replace("__PROJECT_ID__",h).replace("__PREVIEW_LAYER_IDS__",p.join(",")).replace("__GET_ONLY_PREVIEW_LAYERS__",!0),c.addScriptSync(o),__webpack_require__(1022).setupPreviewGlobal(),c.addScriptAsync("/dist/js/preview_ui.js")}else r.shouldBootstrapDataForEditor()?(a.registerFunction(l,(function(t){n(),a.unregisterFunction(l)})),c.addScriptAsync(window.optimizely_editor_data_endpoint)):r.shouldInitialize()&&n();var v,h,p;t.timeEnd("block");var g=t.now();t.setMark("optimizelyFinished",startTime=g,duration=g)}}()}catch(n){try{__webpack_require__(3735).handleError(n)}catch(t){console.log(t)}}}()})();