(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5671:function(e,t){var n,r,a;r=[],void 0===(a="function"===typeof(n=function(){var e=function(){},t={},n={},r={};function a(e,t){e=e.push?e:[e];var a,i,o,s=[],c=e.length,u=c;for(a=function(e,n){n.length&&s.push(e),--u||t(s)};c--;)i=e[c],(o=n[i])?a(i,o):(r[i]=r[i]||[]).push(a)}function i(e,t){if(e){var a=r[e];if(n[e]=t,a)for(;a.length;)a[0](e,t),a.splice(0,1)}}function o(t,n){t.call&&(t={success:t}),n.length?(t.error||e)(n):(t.success||e)(t)}function s(t,n,r,a){var i,o,c=document,u=r.async,l=(r.numRetries||0)+1,f=r.before||e,d=t.replace(/[\?|#].*$/,""),m=t.replace(/^(css|img)!/,"");a=a||0,/(^css!|\.css$)/.test(d)?((o=c.createElement("link")).rel="stylesheet",o.href=m,(i="hideFocus"in o)&&o.relList&&(i=0,o.rel="preload",o.as="style")):/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(d)?(o=c.createElement("img")).src=m:((o=c.createElement("script")).src=t,o.async=void 0===u||u),o.onload=o.onerror=o.onbeforeload=function(e){var c=e.type[0];if(i)try{o.sheet.cssText.length||(c="e")}catch(u){18!=u.code&&(c="e")}if("e"==c){if((a+=1)<l)return s(t,n,r,a)}else if("preload"==o.rel&&"style"==o.as)return o.rel="stylesheet";n(t,c,e.defaultPrevented)},!1!==f(t,o)&&c.head.appendChild(o)}function c(e,t,n){var r,a,i=(e=e.push?e:[e]).length,o=i,c=[];for(r=function(e,n,r){if("e"==n&&c.push(e),"b"==n){if(!r)return;c.push(e)}--i||t(c)},a=0;a<o;a++)s(e[a],r,n)}function u(e,n,r){var a,s;if(n&&n.trim&&(a=n),s=(a?r:n)||{},a){if(a in t)throw"LoadJS";t[a]=!0}function u(t,n){c(e,(function(e){o(s,e),t&&o({success:t,error:n},e),i(a,e)}),s)}if(s.returnPromise)return new Promise(u);u()}return u.ready=function(e,t){return a(e,(function(e){o(t,e)})),u},u.done=function(e){i(e,[])},u.reset=function(){t={},n={},r={}},u.isDefined=function(e){return e in t},u})?n.apply(t,r):n)||(e.exports=a)},5864:function(e,t,n){"use strict";n.d(t,{ZP:function(){return x},u2:function(){return h},y7:function(){return v}});var r=n(9008),a=n(8417),i=n.n(a),o=n(5893);function s(e){var t=e.communityLinksData;return(0,o.jsx)("div",{className:i().communityLinks,children:(0,o.jsx)("ul",{children:t.map((function(e){return(0,o.jsx)("li",{children:(0,o.jsxs)("a",{href:e.url,target:"_blank",children:[e.fontawesome&&(0,o.jsx)("i",{className:e.fontawesome}),e.image&&(0,o.jsx)("img",{src:e.image,alt:e.name})]})},e.name)}))})})}var c=n(1109),u=n.n(c),l=n(1664);function f(){return(0,o.jsx)("nav",{className:u().navbar,children:(0,o.jsxs)("ul",{className:u().navBarList,children:[(0,o.jsx)("li",{className:u().navBarListItem,children:(0,o.jsx)(l.default,{href:"/",children:(0,o.jsx)("a",{className:u().navBarLink,children:"\u4e3b\u9801"})})}),(0,o.jsx)("li",{className:u().navBarListItem,children:(0,o.jsx)(l.default,{href:"/history",children:(0,o.jsx)("a",{className:u().navBarLink,children:"\u6b77\u53f2\u7d00\u9304"})})}),(0,o.jsx)("li",{className:u().navBarListItem,children:(0,o.jsx)(l.default,{href:"/creation",children:(0,o.jsx)("a",{className:u().navBarLink,children:"\u7ffc\u53cb\u8207\u5354\u52a9\u8005"})})})]})})}var d=n(4608),m=n.n(d),h="\u60a0\u592a\u7ffc Yuuta Tsubasa",v="\u60a0\u592a\u7ffc(YuutaTsubasa) \ud83d\udee1\ufe0f \u76d4\u7532\u6b63\u592a\u7cfb\u7a0b\u5f0f Vtuber",p="".concat(h," \u5b98\u65b9\u7db2\u7ad9");function x(e){var t=e.children,n=e.subURL,a=e.communityLinksData;return(0,o.jsxs)("div",{className:m().container,children:[(0,o.jsxs)(r.default,{children:[(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,o.jsx)("link",{rel:"stylesheet",href:"/fontawesome/css/all.css"}),(0,o.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,o.jsx)("meta",{name:"twitter:site",content:"@YuutaTsubasa"}),(0,o.jsx)("meta",{name:"twitter:creator",content:"@YuutaTsubasa"}),(0,o.jsx)("meta",{name:"og:title",content:v}),(0,o.jsx)("meta",{name:"og:description",content:p}),(0,o.jsx)("meta",{name:"og:url",content:"http://yuuta-tsubasa.studio/".concat(n)}),(0,o.jsx)("meta",{name:"og:image",content:"/images/banner.png"})]}),(0,o.jsxs)("header",{className:m().header,children:[(0,o.jsx)(s,{communityLinksData:a}),(0,o.jsx)("div",{className:m().banner}),(0,o.jsx)(f,{})]}),(0,o.jsx)("main",{children:t}),(0,o.jsx)("footer",{className:m().footer,children:(0,o.jsx)("img",{src:"/images/logo.png",alt:"\u60a0\u592a\u7ffc"})})]})}},2167:function(e,t,n){"use strict";var r=n(3038);t.default=void 0;var a,i=(a=n(7294))&&a.__esModule?a:{default:a},o=n(1063),s=n(4651),c=n(7426);var u={};function l(e,t,n,r){if(e&&o.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,a=s.useRouter(),f=i.default.useMemo((function(){var t=o.resolveHref(a,e.href,!0),n=r(t,2),i=n[0],s=n[1];return{href:i,as:e.as?o.resolveHref(a,e.as):s||i}}),[a,e.href,e.as]),d=f.href,m=f.as,h=e.children,v=e.replace,p=e.shallow,x=e.scroll,b=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var y=(t=i.default.Children.only(h))&&"object"===typeof t&&t.ref,_=c.useIntersection({rootMargin:"200px"}),j=r(_,2),w=j[0],g=j[1],L=i.default.useCallback((function(e){w(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,w]);i.default.useEffect((function(){var e=g&&n&&o.isLocalURL(d),t="undefined"!==typeof b?b:a&&a.locale,r=u[d+"%"+m+(t?"%"+t:"")];e&&!r&&l(a,d,m,{locale:t})}),[m,d,g,b,n,a]);var k={ref:L,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,i,s,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(n))&&(e.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),t[a?"replace":"push"](n,r,{shallow:i,locale:c,scroll:s}))}(e,a,d,m,v,p,x,b)},onMouseEnter:function(e){o.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l(a,d,m,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var N="undefined"!==typeof b?b:a&&a.locale,E=a&&a.isLocaleDomain&&o.getDomainLocale(m,N,a&&a.locales,a&&a.domainLocales);k.href=E||o.addBasePath(o.addLocale(m,N,a&&a.defaultLocale))}return i.default.cloneElement(t,k)};t.default=f},7426:function(e,t,n){"use strict";var r=n(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!o,c=a.useRef(),u=a.useState(!1),l=r(u,2),f=l[0],d=l[1],m=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||f||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,i=r.observer,o=r.elements;return o.set(e,t),i.observe(e),function(){o.delete(e),i.unobserve(e),0===o.size&&(i.disconnect(),s.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return a.useEffect((function(){if(!o&&!f){var e=i.requestIdleCallback((function(){return d(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[f]),[m,f]};var a=n(7294),i=n(3447),o="undefined"!==typeof IntersectionObserver;var s=new Map},2852:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return E},default:function(){return C}});var r=n(9008),a=n(7757),i=n.n(a),o=n(7294),s=n(5671),c=n.n(s);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l="twttr",f=l,d=!("undefined"===typeof window||!window.document||!window.document.createElement);function m(e,t){return e===t?0!==e||0!==t||1/e===1/t:e!==e&&t!==t}function h(e){var t=(0,o.useRef)();return function(e,t){if(m(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var a=0;a<n.length;a++)if(!Object.prototype.hasOwnProperty.call(t,n[a])||!m(e[n[a]],t[n[a]]))return!1;return!0}(e,t.current)||(t.current=e),t.current}function v(e){return"object"===typeof e?u({},e):e}function p(e,t,n,r,a,i,o){try{var s=e[i](o),c=s.value}catch(u){return void n(u)}s.done?t(c):Promise.resolve(c).then(r,a)}d&&c()("https://platform.twitter.com/widgets.js",f);var x="twdiv";function b(e,t,n,r){var a=(0,o.useState)(null),s=a[0],u=a[1],l=(0,o.useRef)(null);if(!d)return{ref:l,error:s};var m=[e,h(t),h(n)];return(0,o.useEffect)((function(){u(null);var a,o,s=!1;if(l.current){var d=function(){var a,o=(a=i().mark((function a(){var o,d;return i().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(l&&l.current){a.next=2;break}return a.abrupt("return");case 2:return(o=document.createElement("div")).setAttribute(x,"yes"),l.current.appendChild(o),a.prev=5,a.next=8,new Promise((function(e,t){var n=function(){return t(new Error("Could not load remote twitter widgets js"))};c().ready(f,{success:function(){var t=window.twttr;t&&t.widgets||n(),e(t.widgets)},error:n})}));case 8:return d=a.sent,a.next=11,d[e](v(t),o,v(n));case 11:if(a.sent||s){a.next=14;break}throw new Error("Twitter could not create widget. If it is a Timeline or Tweet, ensure the screenName/tweetId exists.");case 14:a.next=21;break;case 16:return a.prev=16,a.t0=a.catch(5),console.error(a.t0),u(a.t0),a.abrupt("return");case 21:if(l&&l.current){a.next=23;break}return a.abrupt("return");case 23:if(!s){a.next=26;break}return o&&o.remove(),a.abrupt("return");case 26:r&&r();case 27:case"end":return a.stop()}}),a,null,[[5,16]])})),function(){var e=this,t=arguments;return new Promise((function(n,r){var i=a.apply(e,t);function o(e){p(i,n,r,o,s,"next",e)}function s(e){p(i,n,r,o,s,"throw",e)}o(void 0)}))});return function(){return o.apply(this,arguments)}}();a=l.current,o=x,a&&a.querySelectorAll("*").forEach((function(e){e.hasAttribute(o)&&e.remove()})),d()}return function(){s=!0}}),m),{ref:l,error:s}}var y=function(e){var t=e.dataSource,n=e.options,r=e.onLoad,a=e.renderError,i=b("createTimeline",t,n,r),s=i.ref,c=i.error;return o.createElement("div",{ref:s},c&&a&&a(c))},_=n(5864),j=n(9606),w=n.n(j),g=n(5893);function L(e){var t=e.youtubeVideosData;return(0,g.jsxs)("section",{className:w().youtubeVideosSection,children:[(0,g.jsx)("h2",{children:"Youtube \u6700\u65b0\u76f4\u64ad\u5b58\u6a94\u8207\u5f71\u7247"}),(0,g.jsx)("ul",{className:w().youtubeVideoList,children:t.slice(0,9).map((function(e){return(0,g.jsxs)("li",{children:[(0,g.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/".concat(e.url),title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true"}),(0,g.jsx)("h5",{children:(0,g.jsx)("a",{href:"https://www.youtube.com/watch?v=".concat(e.url),target:"_blank",children:e.name})})]})}))})]})}var k=n(4956),N=n.n(k),E=!0;function C(e){var t=e.communityLinksData,n=e.youtubeVideosData;return(0,g.jsxs)(_.ZP,{communityLinksData:t,subURL:"",children:[(0,g.jsx)(r.default,{children:(0,g.jsx)("title",{children:_.y7})}),(0,g.jsxs)("section",{className:N().mainContent,children:[(0,g.jsxs)("section",{className:N().selfIntroduction,children:[(0,g.jsx)("section",{children:(0,g.jsx)("img",{src:"/images/avatar.png",className:N().borderCircle,alt:_.u2})}),(0,g.jsxs)("section",{children:[(0,g.jsxs)("div",{className:N().name,children:[(0,g.jsx)("h1",{children:_.u2}),(0,g.jsx)("h4",{children:(0,g.jsx)("a",{href:"https://twitter.com/YuutaTsubasa/status/1418251268846276608",target:"_blank",children:"\u8a73\u7d30\u4ecb\u7d39"})})]}),(0,g.jsx)("div",{children:"\u70ba\u53f0\u7063\u500b\u4eba\u52e2Vtuber\u3001\u76d4\u7532\u6b63\u592a\u7cfb\u7a0b\u5f0f Vtuber\uff0c\u8a9e\u8a00\u4e3b\u8981\u4ee5\u4e2d\u6587\u70ba\u4e3b\uff0c\u76f4\u64ad\u5167\u5bb9\u4ee5\u7a0b\u5f0f\u3001\u5531\u6b4c\u3001\u904a\u6232\u3001\u96dc\u8ac7\u70ba\u4e3b\u3002"})]})]}),(0,g.jsx)("hr",{}),(0,g.jsx)("img",{src:"/images/week.png",alt:"\u672c\u9031\u884c\u4e8b\u66c6"}),(0,g.jsx)("hr",{}),(0,g.jsxs)("section",{className:N().news,children:[(0,g.jsx)(L,{youtubeVideosData:n}),(0,g.jsx)("section",{className:N().twitter,children:(0,g.jsx)(y,{dataSource:{sourceType:"profile",screenName:"YuutaTsubasa"},options:{height:800}})})]})]})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2852)}])},8417:function(e){e.exports={communityLinks:"communityLinks_communityLinks__3LC9Q"}},4608:function(e){e.exports={container:"layout_container__2t4v2",header:"layout_header__2rhWq",banner:"layout_banner__2PG7O",backToHome:"layout_backToHome__1vZsp",footer:"layout_footer__127N0"}},1109:function(e){e.exports={navbar:"navigator_navbar__tc5Rk",navBarList:"navigator_navBarList__2R1qi",navBarListItem:"navigator_navBarListItem__2bpsu",navBarLink:"navigator_navBarLink__3IM8C"}},9606:function(e){e.exports={youtubeVideosSection:"youtubeVideos_youtubeVideosSection__3qo5M",youtubeVideoList:"youtubeVideos_youtubeVideoList__2bTWV"}},4956:function(e){e.exports={mainContent:"index_mainContent__l3EDZ",selfIntroduction:"index_selfIntroduction__xe_VB",name:"index_name__5Sg1Y",borderCircle:"index_borderCircle__2V_CV",twitter:"index_twitter__1Bhv0",news:"index_news__19rHM"}},9008:function(e,t,n){e.exports=n(639)},1664:function(e,t,n){e.exports=n(2167)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);