(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9165)}])},9165:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return m},default:function(){return h}});var r=n(5893),o=n(9008),i=n(7294),u="https://platform.twitter.com/widgets.js",l="createTimeline",a=function(e){var t=i.useRef(null),r=i.useState(!0),o=r[0],a=r[1];return i.useEffect((function(){var r=!0;return n(5277)(u,"twitter-embed",(function(){if(window.twttr){if(r){if(!window.twttr.widgets[l])return void console.error("Method createTimeline is not present anymore in twttr.widget api");var n=function(){var n,r,o=Object.assign({},e.options);return null!==e&&void 0!==e&&e.autoHeight&&(o.height=null===(n=t.current)||void 0===n||null===(r=n.parentNode)||void 0===r?void 0:r.offsetHeight),o=Object.assign({},o,{theme:null===e||void 0===e?void 0:e.theme,linkColor:null===e||void 0===e?void 0:e.linkColor,borderColor:null===e||void 0===e?void 0:e.borderColor,lang:null===e||void 0===e?void 0:e.lang,tweetLimit:null===e||void 0===e?void 0:e.tweetLimit,ariaPolite:null===e||void 0===e?void 0:e.ariaPolite})}();n=function(t){return t.chrome="",e.noHeader&&(t.chrome=t.chrome+" noheader"),e.noFooter&&(t.chrome=t.chrome+" nofooter"),e.noBorders&&(t.chrome=t.chrome+" noborders"),e.noScrollbar&&(t.chrome=t.chrome+" noscrollbar"),e.transparent&&(t.chrome=t.chrome+" transparent"),t}(n),window.twttr.widgets[l]({sourceType:e.sourceType,screenName:e.screenName,userId:e.userId,ownerScreenName:e.ownerScreenName,slug:e.slug,id:e.id||e.widgetId,url:e.url},null===t||void 0===t?void 0:t.current,n).then((function(t){a(!1),e.onLoad&&e.onLoad(t)}))}}else console.error("Failure to load window.twttr, aborting load")})),function(){r=!1}}),[]),i.createElement(i.Fragment,null,o&&i.createElement(i.Fragment,null,e.placeholder),i.createElement("div",{ref:t}))},c=n(5187),s=n(6724),d=n.n(s),f=n(3819),m=!0;function h(e){var t=e.communityLinksData;return(0,r.jsxs)(c.ZP,{communityLinksData:t,subURL:"",title:"MAIN",children:[(0,r.jsx)(o.default,{children:(0,r.jsx)("title",{children:c.y7})}),(0,r.jsxs)(f.Z,{title:"\u81ea\u6211\u4ecb\u7d39",children:[(0,r.jsx)("img",{src:"images/introduce.jpg",alt:"\u81ea\u6211\u4ecb\u7d39",className:d().image}),(0,r.jsx)("p",{children:"\u70ba\u53f0\u7063\u500b\u4eba\u52e2Vtuber\u3001\u76d4\u7532\u6b63\u592a\u7cfb\u7a0b\u5f0f Vtuber\uff0c\u8a9e\u8a00\u4e3b\u8981\u4ee5\u4e2d\u6587\u70ba\u4e3b\uff0c\u76f4\u64ad\u5167\u5bb9\u4ee5\u7a0b\u5f0f\u3001\u5531\u6b4c\u3001\u904a\u6232\u3001\u96dc\u8ac7\u70ba\u4e3b\u3002"})]}),(0,r.jsx)(f.Z,{title:"\u672c\u9031\u884c\u4e8b\u66c6",children:(0,r.jsx)("a",{href:"https://yutaii.run/youtube",target:"_blank",children:(0,r.jsx)("img",{src:"/images/week.png",alt:"\u672c\u9031\u884c\u4e8b\u66c6",className:d().image})})}),(0,r.jsx)(f.Z,{title:"\u5b98\u65b9 Youtube",children:(0,r.jsx)("iframe",{className:d().youtube,width:"560",height:"315",src:"https://www.youtube.com/embed/videoseries?list=PLHDTW9-5SsB_GEclHq9W6njQjRSCNefEo",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),(0,r.jsx)(f.Z,{title:"\u5b98\u65b9 Twitter",children:(0,r.jsx)(a,{sourceType:"profile",screenName:"YuutaTsubasa",options:{height:800}})})]})}},6724:function(e){e.exports={image:"index_image__vHczf",youtube:"index_youtube__TDRx3",twitter:"index_twitter__ayC4g"}},5277:function(e,t,n){var r,o,i;i=function(){var e,t,n=document,r=n.getElementsByTagName("head")[0],o={},i={},u={},l={};function a(e,t){for(var n=0,r=e.length;n<r;++n)if(!t(e[n]))return!1;return 1}function c(e,t){a(e,(function(e){return t(e),1}))}function s(t,n,r){t=t.push?t:[t];var f=n&&n.call,m=f?n:r,h=f?t.join(""):n,p=t.length;function g(e){return e.call?e():o[e]}function w(){if(!--p)for(var e in o[h]=1,m&&m(),u)a(e.split("|"),g)&&!c(u[e],g)&&(u[e]=[])}return setTimeout((function(){c(t,(function t(n,r){return null===n?w():(r||/^https?:\/\//.test(n)||!e||(n=-1===n.indexOf(".js")?e+n+".js":e+n),l[n]?(h&&(i[h]=1),2==l[n]?w():setTimeout((function(){t(n,!0)}),0)):(l[n]=1,h&&(i[h]=1),void d(n,w)))}))}),0),s}function d(e,o){var i,u=n.createElement("script");u.onload=u.onerror=u.onreadystatechange=function(){u.readyState&&!/^c|loade/.test(u.readyState)||i||(u.onload=u.onreadystatechange=null,i=1,l[e]=2,o())},u.async=1,u.src=t?e+(-1===e.indexOf("?")?"?":"&")+t:e,r.insertBefore(u,r.lastChild)}return s.get=d,s.order=function(e,t,n){!function r(o){o=e.shift(),e.length?s(o,r):s(o,t,n)}()},s.path=function(t){e=t},s.urlArgs=function(e){t=e},s.ready=function(e,t,n){e=e.push?e:[e];var r,i=[];return!c(e,(function(e){o[e]||i.push(e)}))&&a(e,(function(e){return o[e]}))?t():(r=e.join("|"),u[r]=u[r]||[],u[r].push(t),n&&n(i)),s},s.done=function(e){s([null],e)},s},e.exports?e.exports=i():void 0===(o="function"===typeof(r=i)?r.call(t,n,t,e):r)||(e.exports=o)}},function(e){e.O(0,[492,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);