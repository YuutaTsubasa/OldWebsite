(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5864:function(e,t,n){"use strict";n.d(t,{ZP:function(){return v},u2:function(){return h},y7:function(){return _}});var r=n(9008),a=n(8417),s=n.n(a),i=n(5893);function o(e){var t=e.communityLinksData;return(0,i.jsx)("div",{className:s().communityLinks,children:(0,i.jsx)("ul",{children:t.map((function(e){return(0,i.jsx)("li",{children:(0,i.jsxs)("a",{href:e.url,target:"_blank",children:[e.fontawesome&&(0,i.jsx)("i",{className:e.fontawesome}),e.image&&(0,i.jsx)("img",{src:e.image,alt:e.name})]})},e.name)}))})})}var c=n(1109),u=n.n(c),l=n(1664);function f(){return(0,i.jsx)("nav",{className:u().navbar,children:(0,i.jsxs)("ul",{className:u().navBarList,children:[(0,i.jsx)("li",{className:u().navBarListItem,children:(0,i.jsx)(l.default,{href:"/",children:(0,i.jsx)("a",{className:u().navBarLink,href:"#",children:"\u4e3b\u9801"})})}),(0,i.jsx)("li",{className:u().navBarListItem,children:(0,i.jsx)(l.default,{href:"/history",children:(0,i.jsx)("a",{className:u().navBarLink,href:"#",children:"\u6b77\u53f2\u7d00\u9304"})})})]})})}var d=n(4608),m=n.n(d),h="\u60a0\u592a\u7ffc Yuuta Tsubasa",_="\u60a0\u592a\u7ffc(YuutaTsubasa) \ud83d\udee1\ufe0f \u76d4\u7532\u6b63\u592a\u7cfb\u7a0b\u5f0f Vtuber";function v(e){var t=e.children,n=e.communityLinksData;return(0,i.jsxs)("div",{className:m().container,children:[(0,i.jsxs)(r.default,{children:[(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,i.jsx)("link",{rel:"stylesheet",href:"/fontawesome/css/all.css"}),(0,i.jsx)("meta",{name:"description",content:"\u60a0\u592a\u7ffc\u7684\u7db2\u7ad9"}),(0,i.jsx)("meta",{name:"og:title",content:_}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]}),(0,i.jsxs)("header",{className:m().header,children:[(0,i.jsx)(o,{communityLinksData:n}),(0,i.jsx)("div",{className:m().banner}),(0,i.jsx)(f,{})]}),(0,i.jsx)("main",{children:t}),(0,i.jsx)("footer",{className:m().footer,children:(0,i.jsx)("img",{src:"/images/logo.png",alt:"\u60a0\u592a\u7ffc"})})]})}},2167:function(e,t,n){"use strict";var r=n(3038);t.default=void 0;var a,s=(a=n(7294))&&a.__esModule?a:{default:a},i=n(1063),o=n(4651),c=n(7426);var u={};function l(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,a=o.useRouter(),f=s.default.useMemo((function(){var t=i.resolveHref(a,e.href,!0),n=r(t,2),s=n[0],o=n[1];return{href:s,as:e.as?i.resolveHref(a,e.as):o||s}}),[a,e.href,e.as]),d=f.href,m=f.as,h=e.children,_=e.replace,v=e.shallow,p=e.scroll,x=e.locale;"string"===typeof h&&(h=s.default.createElement("a",null,h));var b=(t=s.default.Children.only(h))&&"object"===typeof t&&t.ref,j=c.useIntersection({rootMargin:"200px"}),y=r(j,2),g=y[0],w=y[1],L=s.default.useCallback((function(e){g(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,g]);s.default.useEffect((function(){var e=w&&n&&i.isLocalURL(d),t="undefined"!==typeof x?x:a&&a.locale,r=u[d+"%"+m+(t?"%"+t:"")];e&&!r&&l(a,d,m,{locale:t})}),[m,d,w,x,n,a]);var k={ref:L,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,s,o,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==o&&r.indexOf("#")>=0&&(o=!1),t[a?"replace":"push"](n,r,{shallow:s,locale:c,scroll:o}))}(e,a,d,m,_,v,p,x)},onMouseEnter:function(e){i.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l(a,d,m,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var N="undefined"!==typeof x?x:a&&a.locale,C=a&&a.isLocaleDomain&&i.getDomainLocale(m,N,a&&a.locales,a&&a.domainLocales);k.href=C||i.addBasePath(i.addLocale(m,N,a&&a.defaultLocale))}return s.default.cloneElement(t,k)};t.default=f},7426:function(e,t,n){"use strict";var r=n(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,c=a.useRef(),u=a.useState(!1),l=r(u,2),f=l[0],d=l[1],m=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||f||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=o.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return o.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,s=r.observer,i=r.elements;return i.set(e,t),s.observe(e),function(){i.delete(e),s.unobserve(e),0===i.size&&(s.disconnect(),o.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return a.useEffect((function(){if(!i&&!f){var e=s.requestIdleCallback((function(){return d(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[f]),[m,f]};var a=n(7294),s=n(3447),i="undefined"!==typeof IntersectionObserver;var o=new Map},2484:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return f},default:function(){return d}});var r=n(9008),a=n(5864),s=n(9606),i=n.n(s),o=n(5893);function c(e){var t=e.youtubeVideosData;return(0,o.jsxs)("section",{className:i().youtubeVideosSection,children:[(0,o.jsx)("h2",{children:"Youtube \u6700\u65b0\u76f4\u64ad\u5b58\u6a94\u8207\u5f71\u7247"}),(0,o.jsx)("ul",{className:i().youtubeVideoList,children:t.slice(0,9).map((function(e){return(0,o.jsxs)("li",{children:[(0,o.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/".concat(e.url),title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"true"}),(0,o.jsx)("h5",{children:(0,o.jsx)("a",{href:"https://www.youtube.com/watch?v=".concat(e.url),target:"_blank",children:e.name})})]})}))})]})}var u=n(4956),l=n.n(u),f=!0;function d(e){var t=e.communityLinksData,n=e.youtubeVideosData;return(0,o.jsxs)(a.ZP,{communityLinksData:t,children:[(0,o.jsx)(r.default,{children:(0,o.jsx)("title",{children:a.y7})}),(0,o.jsxs)("section",{className:l().mainContent,children:[(0,o.jsxs)("section",{className:l().selfIntroduction,children:[(0,o.jsx)("section",{children:(0,o.jsx)("img",{src:"/images/avatar.png",className:l().borderCircle,alt:a.u2})}),(0,o.jsxs)("section",{children:[(0,o.jsxs)("div",{className:l().name,children:[(0,o.jsx)("h1",{children:a.u2}),(0,o.jsx)("h4",{children:(0,o.jsx)("a",{href:"https://twitter.com/YuutaTsubasa/status/1418251268846276608",target:"_blank",children:"\u8a73\u7d30\u4ecb\u7d39"})})]}),(0,o.jsx)("div",{children:"\u70ba\u53f0\u7063\u500b\u4eba\u52e2Vtuber\u3001\u76d4\u7532\u6b63\u592a\u7cfb\u7a0b\u5f0f Vtuber\uff0c\u8a9e\u8a00\u4e3b\u8981\u4ee5\u4e2d\u6587\u70ba\u4e3b\uff0c\u76f4\u64ad\u5167\u5bb9\u4ee5\u7a0b\u5f0f\u3001\u5531\u6b4c\u3001\u904a\u6232\u3001\u96dc\u8ac7\u70ba\u4e3b\u3002"})]})]}),(0,o.jsx)("hr",{}),(0,o.jsx)("img",{src:"/images/week.png",alt:"\u672c\u9031\u884c\u4e8b\u66c6"}),(0,o.jsx)("hr",{}),(0,o.jsxs)("section",{className:l().news,children:[(0,o.jsx)(c,{youtubeVideosData:n}),(0,o.jsx)("section",{className:l().twitter,dangerouslySetInnerHTML:{__html:'<a class="twitter-timeline" data-lang="zh-tw" data-height="800" data-dnt="true" data-theme="light" href="https://twitter.com/YuutaTsubasa?ref_src=twsrc%5Etfw">Tweets by YuutaTsubasa</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"><\/script>'}})]})]})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2484)}])},8417:function(e){e.exports={communityLinks:"communityLinks_communityLinks__3LC9Q"}},4608:function(e){e.exports={container:"layout_container__2t4v2",header:"layout_header__2rhWq",banner:"layout_banner__2PG7O",backToHome:"layout_backToHome__1vZsp",footer:"layout_footer__127N0"}},1109:function(e){e.exports={navbar:"navigator_navbar__tc5Rk",navBarList:"navigator_navBarList__2R1qi",navBarListItem:"navigator_navBarListItem__2bpsu",navBarLink:"navigator_navBarLink__3IM8C"}},9606:function(e){e.exports={youtubeVideosSection:"youtubeVideos_youtubeVideosSection__3qo5M",youtubeVideoList:"youtubeVideos_youtubeVideoList__2bTWV"}},4956:function(e){e.exports={mainContent:"index_mainContent__l3EDZ",selfIntroduction:"index_selfIntroduction__xe_VB",name:"index_name__5Sg1Y",borderCircle:"index_borderCircle__2V_CV",twitter:"index_twitter__1Bhv0",news:"index_news__19rHM"}},9008:function(e,t,n){e.exports=n(639)},1664:function(e,t,n){e.exports=n(2167)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);