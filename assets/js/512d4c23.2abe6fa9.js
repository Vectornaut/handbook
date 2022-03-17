"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1094],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,v=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?i.createElement(v,a(a({ref:t},p),{},{components:n})):i.createElement(v,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,a[1]=d;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},317:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>d,metadata:()=>s,toc:()=>c});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=["components"],d={id:"dev-guide-mobile",title:"Developer Guide (Mobile)",sidebar_label:"Start"},l=void 0,s={unversionedId:"dev-guide/dev-guide-mobile",id:"dev-guide/dev-guide-mobile",title:"Developer Guide (Mobile)",description:"Welcome to the developers guide for mobile applications!",source:"@site/docs/dev-guide/mobile.md",sourceDirName:"dev-guide",slug:"/dev-guide/dev-guide-mobile",permalink:"/handbook/docs/dev-guide/dev-guide-mobile",editUrl:"https://github.com/jitsi/handbook/edit/master/docs/dev-guide/mobile.md",tags:[],version:"current",lastUpdatedAt:1647523676,formattedLastUpdatedAt:"3/17/2022",frontMatter:{id:"dev-guide-mobile",title:"Developer Guide (Mobile)",sidebar_label:"Start"},sidebar:"docs",previous:{title:"lib-jitsi-meet API (low level)",permalink:"/handbook/docs/dev-guide/dev-guide-ljm-api"},next:{title:"Jitsi Meet development",permalink:"/handbook/docs/dev-guide/dev-guide-mobile-jitsi-meet"}},p={},c=[],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Welcome to the developers guide for mobile applications!"),(0,o.kt)("p",null,"What kind of mobile development are you interested in?"),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Mobile SDK 4.0.0 is out and contains some backwards incomatible changes, check the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jitsi/jitsi-meet-release-notes/blob/master/CHANGELOG-MOBILE-SDKS.md#breaking-changes"},"release notes"),"."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/handbook/docs/dev-guide/dev-guide-mobile-jitsi-meet"},"Develop Jitsi Meet itself")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/handbook/docs/dev-guide/dev-guide-android-sdk"},"Develop your own Android application using the Jitsi Meet SDK")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/handbook/docs/dev-guide/dev-guide-ios-sdk"},"Develop your own iOS application using the Jitsi Meet SDK"))))}m.isMDXComponent=!0}}]);