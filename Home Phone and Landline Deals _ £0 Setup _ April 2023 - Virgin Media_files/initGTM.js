function initGTM(gtmId) {
  (function (w, d, s, l, i) {
    if (window.location.hostname.indexOf('localhost') > -1) return;
    w[l] = w[l] || [];
    w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    j.setAttribute('class', 'optanon-category-C0001');
    f.parentNode.insertBefore(j, f);
  })(window, document, 'script', 'dataLayer', gtmId);
}
