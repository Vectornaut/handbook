"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4367],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=s(n),u=i,v=c["".concat(l,".").concat(u)]||c[u]||m[u]||o;return n?a.createElement(v,r(r({ref:t},p),{},{components:n})):a.createElement(v,r({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:i,r[1]=d;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},417:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>d,metadata:()=>s,toc:()=>m});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],d={id:"dev-guide-mobile-jitsi-meet",title:"Developer Guide for Jitsi Meet",sidebar_label:"Jitsi Meet development"},l=void 0,s={unversionedId:"dev-guide/dev-guide-mobile-jitsi-meet",id:"dev-guide/dev-guide-mobile-jitsi-meet",title:"Developer Guide for Jitsi Meet",description:"This guide will help you setup a development environment to start working on the Jitsi Meet applications.",source:"@site/docs/dev-guide/mobile-jitsi-meet.md",sourceDirName:"dev-guide",slug:"/dev-guide/dev-guide-mobile-jitsi-meet",permalink:"/handbook/docs/dev-guide/dev-guide-mobile-jitsi-meet",editUrl:"https://github.com/jitsi/handbook/edit/master/docs/dev-guide/mobile-jitsi-meet.md",tags:[],version:"current",lastUpdatedAt:1647523676,formattedLastUpdatedAt:"3/17/2022",frontMatter:{id:"dev-guide-mobile-jitsi-meet",title:"Developer Guide for Jitsi Meet",sidebar_label:"Jitsi Meet development"},sidebar:"docs",previous:{title:"Start",permalink:"/handbook/docs/dev-guide/dev-guide-mobile"},next:{title:"Feature flags",permalink:"/handbook/docs/dev-guide/mobile-feature-flags"}},p={},m=[{value:"Overview",id:"overview",level:2},{value:"iOS",id:"ios",level:2},{value:"Android",id:"android",level:2},{value:"Debugging",id:"debugging",level:2},{value:"Enabling extra features",id:"enabling-extra-features",level:2}],c={toc:m};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This guide will help you setup a development environment to start working on the Jitsi Meet applications."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Building the apps / SDKs is not supported on Windows."))),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This guide is about building the Jitsi Meet apps themselves. If you want to integrate the Jitsi Meet SDK into your own application check the dedicated page on the sidebar."))),(0,o.kt)("p",null,"Jitsi Meet can be built as a standalone app for Android or iOS. It uses the\n",(0,o.kt)("a",{parentName:"p",href:"https://facebook.github.io/react-native/"},"React Native")," framework."),(0,o.kt)("p",null,"First make sure the ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/environment-setup"},"React Native dependencies")," (React Native CLI Quickstart) are installed."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Node version")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Node 14.x and npm 7.x are required. Any other version may result in runtime errors."))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"macOS")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Xcode >= 12 is required."))),(0,o.kt)("h2",{id:"ios"},"iOS"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install dependencies")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Install main dependencies:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Install the required pods (CocoaPods must be installled first, it can\nbe done with Homebrew: ",(0,o.kt)("inlineCode",{parentName:"p"},"brew install cocoapods"),")"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ios\npod install\ncd ..\n")))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Build the app using Xcode"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Open ",(0,o.kt)("strong",{parentName:"p"},"ios/jitsi-meet.xcworkspace")," in Xcode. Make sure it's the workspace\nfile!")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Select your device from the top bar and hit the "play" button.'))),(0,o.kt)("p",{parentName:"li"},"When the app is launched from Xcode the Debug console will show the output\nlogs the application creates."))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Other remarks"),(0,o.kt)("p",{parentName:"li"},'It\'s likely you\'ll need to change the bundle ID for deploying to a device.\nThis can be changed in the "General" tab.  Under "Identity" set\n"Bundle Identifier" to a different value, and adjust the "Team" in the\n"Signing" section to match your own.'))),(0,o.kt)("h2",{id:"android"},"Android"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/environment-setup"},"React Native dependencies")," page has very detailed information on how to\nsetup ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/index.html"},"Android Studio")," and the required components for getting the necessary\nbuild environment.  Make sure you follow it closely."),(0,o.kt)("p",null,"Set the JDK in Android Studio to at least Java 11: ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/intro/studio-config#jdk"},"https://developer.android.com/studio/intro/studio-config#jdk")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Building the app with Android Studio")),(0,o.kt)("h2",{id:"debugging"},"Debugging"),(0,o.kt)("p",null,"The official documentation on ",(0,o.kt)("a",{parentName:"p",href:"https://facebook.github.io/react-native/docs/debugging.html"},"debugging")," is quite extensive and specifies the\npreferred method for debugging."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE"),": When using Chrome Developer Tools for debugging the JavaScript source\ncode is being interpreted by Chrome's V8 engine, instead of JSCore which React\nNative uses. It's important to keep this in mind due to potential differences in\nsupported JavaScript features."),(0,o.kt)("h2",{id:"enabling-extra-features"},"Enabling extra features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/handbook/docs/dev-guide/mobile-dropbox"},"Dropbox integration")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/handbook/docs/dev-guide/mobile-google-auth"},"Google sign-in integration (for YouTube live streaming)"))))}u.isMDXComponent=!0}}]);