(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[276],{8934:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var a=t(4994),r=t.n(a),i=t(5893);function s(e){var n=e.children,t=e.backgroundType;return(0,i.jsx)("section",{className:"full"===t?r().backgroundFullSection:r().backgroundTransparentSection,children:(0,i.jsx)("section",{className:r().contentSection,children:n})})}var c=t(6274),o=t.n(c);function l(e){var n=e.children,t=e.title,a=e.backgroundType;return(0,i.jsxs)("article",{children:[(0,i.jsx)("h2",{className:o().header,children:t}),(0,i.jsx)(s,{backgroundType:a,children:n}),(0,i.jsx)("hr",{})]})}},1990:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var a=t(4880),r=t.n(a),i=t(5893);function s(e){var n=e.dataList;return(0,i.jsx)("div",{className:r().galleryList,children:n.map((function(e){return(0,i.jsx)("div",{className:r().galleryListItem,children:(0,i.jsx)("a",{href:e.url,target:"_blank",children:(0,i.jsx)("img",{src:e.image,alt:e.title})})},e.title)}))})}},5864:function(e,n,t){"use strict";t.d(n,{ZP:function(){return j},u2:function(){return h},y7:function(){return v}});var a=t(9008),r=t(8417),i=t.n(r),s=t(5893);function c(e){var n=e.communityLinksData;return(0,s.jsx)("div",{className:i().communityLinks,children:(0,s.jsx)("ul",{children:n.map((function(e){return(0,s.jsx)("li",{children:(0,s.jsxs)("a",{href:e.url,target:"_blank",children:[e.fontawesome&&(0,s.jsx)("i",{className:e.fontawesome}),e.image&&(0,s.jsx)("img",{src:e.image,alt:e.name})]})},e.name)}))})})}var o=t(1109),l=t.n(o),u=t(1664);function f(){return(0,s.jsx)("nav",{className:l().navbar,children:(0,s.jsxs)("ul",{className:l().navBarList,children:[(0,s.jsx)("li",{className:l().navBarListItem,children:(0,s.jsx)(u.default,{href:"/",children:(0,s.jsx)("a",{className:l().navBarLink,children:"\u4e3b\u9801"})})}),(0,s.jsx)("li",{className:l().navBarListItem,children:(0,s.jsx)(u.default,{href:"/history",children:(0,s.jsx)("a",{className:l().navBarLink,children:"\u6b77\u53f2\u7d00\u9304"})})}),(0,s.jsx)("li",{className:l().navBarListItem,children:(0,s.jsx)(u.default,{href:"/creation",children:(0,s.jsx)("a",{className:l().navBarLink,children:"\u7ffc\u53cb\u8207\u5354\u52a9\u8005"})})})]})})}var d=t(4608),m=t.n(d),h="\u60a0\u592a\u7ffc Yuuta Tsubasa",v="\u60a0\u592a\u7ffc(YuutaTsubasa) \ud83d\udee1\ufe0f \u76d4\u7532\u6b63\u592a\u7cfb\u7a0b\u5f0f Vtuber",p="".concat(h," \u5b98\u65b9\u7db2\u7ad9"),x="https://yuuta-tsubasa.studio",_="".concat(x,"/images/banner.png");function j(e){var n=e.children,t=e.subURL,r=e.communityLinksData;return(0,s.jsxs)("div",{className:m().container,children:[(0,s.jsxs)(a.default,{children:[(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,s.jsx)("link",{rel:"stylesheet",href:"/fontawesome/css/all.css"}),(0,s.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,s.jsx)("meta",{name:"twitter:site",content:"@YuutaTsubasa"}),(0,s.jsx)("meta",{name:"twitter:creator",content:"@YuutaTsubasa"}),(0,s.jsx)("meta",{property:"og:title",content:v}),(0,s.jsx)("meta",{property:"og:description",content:p}),(0,s.jsx)("meta",{property:"og:url",content:"".concat(x,"/").concat(t)}),(0,s.jsx)("meta",{property:"og:image",content:_}),(0,s.jsx)("meta",{name:"twitter:image",content:_})]}),(0,s.jsxs)("header",{className:m().header,children:[(0,s.jsx)(c,{communityLinksData:r}),(0,s.jsx)("div",{className:m().banner}),(0,s.jsx)(f,{})]}),(0,s.jsx)("main",{children:n}),(0,s.jsx)("footer",{className:m().footer,children:(0,s.jsx)("img",{src:"/images/logo.png",alt:"\u60a0\u592a\u7ffc"})})]})}},2167:function(e,n,t){"use strict";var a=t(3038);n.default=void 0;var r,i=(r=t(7294))&&r.__esModule?r:{default:r},s=t(1063),c=t(4651),o=t(7426);var l={};function u(e,n,t,a){if(e&&s.isLocalURL(n)){e.prefetch(n,t,a).catch((function(e){0}));var r=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;l[n+"%"+t+(r?"%"+r:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,r=c.useRouter(),f=i.default.useMemo((function(){var n=s.resolveHref(r,e.href,!0),t=a(n,2),i=t[0],c=t[1];return{href:i,as:e.as?s.resolveHref(r,e.as):c||i}}),[r,e.href,e.as]),d=f.href,m=f.as,h=e.children,v=e.replace,p=e.shallow,x=e.scroll,_=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var j=(n=i.default.Children.only(h))&&"object"===typeof n&&n.ref,y=o.useIntersection({rootMargin:"200px"}),g=a(y,2),L=g[0],b=g[1],k=i.default.useCallback((function(e){L(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,L]);i.default.useEffect((function(){var e=b&&t&&s.isLocalURL(d),n="undefined"!==typeof _?_:r&&r.locale,a=l[d+"%"+m+(n?"%"+n:"")];e&&!a&&u(r,d,m,{locale:n})}),[m,d,b,_,t,r]);var N={ref:k,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,a,r,i,c,o){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(t))&&(e.preventDefault(),null==c&&a.indexOf("#")>=0&&(c=!1),n[r?"replace":"push"](t,a,{shallow:i,locale:o,scroll:c}))}(e,r,d,m,v,p,x,_)},onMouseEnter:function(e){s.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u(r,d,m,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var w="undefined"!==typeof _?_:r&&r.locale,T=r&&r.isLocaleDomain&&s.getDomainLocale(m,w,r&&r.locales,r&&r.domainLocales);N.href=T||s.addBasePath(s.addLocale(m,w,r&&r.defaultLocale))}return i.default.cloneElement(n,N)};n.default=f},7426:function(e,n,t){"use strict";var a=t(3038);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!s,o=r.useRef(),l=r.useState(!1),u=a(l,2),f=u[0],d=u[1],m=r.useCallback((function(e){o.current&&(o.current(),o.current=void 0),t||f||e&&e.tagName&&(o.current=function(e,n,t){var a=function(e){var n=e.rootMargin||"",t=c.get(n);if(t)return t;var a=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var n=a.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(n,t={id:n,observer:r,elements:a}),t}(t),r=a.id,i=a.observer,s=a.elements;return s.set(e,n),i.observe(e),function(){s.delete(e),i.unobserve(e),0===s.size&&(i.disconnect(),c.delete(r))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return r.useEffect((function(){if(!s&&!f){var e=i.requestIdleCallback((function(){return d(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[f]),[m,f]};var r=t(7294),i=t(3447),s="undefined"!==typeof IntersectionObserver;var c=new Map},8950:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return u},default:function(){return f}});var a=t(9008),r=t(5864),i=t(8934),s=t(2523),c=t.n(s),o=t(1990),l=t(5893),u=!0;function f(e){var n=e.communityLinksData,t=e.plannedGalleryData,s=e.unplannedGalleryData,u=e.toolGalleryData,f=e.weekGalleryData;return(0,l.jsxs)(r.ZP,{communityLinksData:n,subURL:"history",children:[(0,l.jsx)(a.default,{children:(0,l.jsx)("title",{children:"".concat(r.y7,"\uff1a\u6b77\u53f2\u7d00\u9304")})}),(0,l.jsxs)("section",{className:c().mainContent,children:[(0,l.jsx)(i.Z,{title:"\u6b77\u4f86\u5927\u4e8b\u8a18",backgroundType:"full",children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"2021/07/31: \u521d\u914d\u4fe1\uff0c\u6b63\u5f0f\u6d3b\u52d5\u958b\u59cb\u3002"}),(0,l.jsx)("li",{children:"2021/08/01: Youtube 200 \u8a02\u95b1\u9054\u6210\u3002"}),(0,l.jsx)("li",{children:"2021/08/18: Youtube 300 \u8a02\u95b1\u9054\u6210\u3002"}),(0,l.jsx)("li",{children:"2021/09/11: \u7b2c\u4e00\u6b21\u7c4c\u5099\u516b\u4eba\u5927\u578b\u9023\u52d5\u76f4\u64ad\u300a\u732b\u5cf6\u5bb6\u65cf\u5927\u9023\u52d5\u300b\u3002"}),(0,l.jsx)("li",{children:"2021/09/17: Youtube 400 \u8a02\u95b1\u9054\u6210\u3002"})]})}),(0,l.jsx)(i.Z,{title:"\u6b77\u4f86\u9810\u5b9a\u76f4\u64ad\uff08URL: live/\u7de8\u865f\uff09",children:(0,l.jsx)(o.Z,{dataList:t})}),(0,l.jsx)(i.Z,{title:"\u6b77\u4f86\u7a81\u767c\u76f4\u64ad\uff08URL: unplanned/live/\u7de8\u865f\uff09",children:(0,l.jsx)(o.Z,{dataList:s})}),(0,l.jsx)(i.Z,{title:"\u6b77\u4f86\u5de5\u5177\u4ecb\u7d39\u5f71\u7247\uff08URL: tool/\u7de8\u865f\uff09",children:(0,l.jsx)(o.Z,{dataList:u})}),(0,l.jsx)(i.Z,{title:"\u6b77\u4f86\u76f4\u64ad\u9031\u8868",children:(0,l.jsx)(o.Z,{dataList:f})})]})]})}},3292:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/history",function(){return t(8950)}])},8417:function(e){e.exports={communityLinks:"communityLinks_communityLinks__3LC9Q"}},6274:function(e){e.exports={header:"contentArticle_header__1piZu"}},4994:function(e){e.exports={contentSection:"contentSection_contentSection__3eGM6",backgroundFullSection:"contentSection_backgroundFullSection__3rXiv",backgroundTransparentSection:"contentSection_backgroundTransparentSection__1uAz9"}},4880:function(e){e.exports={galleryList:"gallery_galleryList__jZ9DP",galleryListItem:"gallery_galleryListItem__1A7Up"}},4608:function(e){e.exports={container:"layout_container__2t4v2",header:"layout_header__2rhWq",banner:"layout_banner__2PG7O",backToHome:"layout_backToHome__1vZsp",footer:"layout_footer__127N0"}},1109:function(e){e.exports={navbar:"navigator_navbar__tc5Rk",navBarList:"navigator_navBarList__2R1qi",navBarListItem:"navigator_navBarListItem__2bpsu",navBarLink:"navigator_navBarLink__3IM8C"}},2523:function(e){e.exports={mainContent:"history_mainContent__2tfeu"}},9008:function(e,n,t){e.exports=t(639)},1664:function(e,n,t){e.exports=t(2167)}},function(e){e.O(0,[774,888,179],(function(){return n=3292,e(e.s=n);var n}));var n=e.O();_N_E=n}]);