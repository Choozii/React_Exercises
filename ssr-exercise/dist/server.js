!function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s=7)}([function(e,n){e.exports=require("react/jsx-runtime")},function(e,n){e.exports=require("react-router-dom")},function(e,n){e.exports=require("react")},function(e,n){e.exports=require("express")},function(e,n){e.exports=require("path")},function(e,n){e.exports=require("react-dom/server")},function(e,n){e.exports=require("fs")},function(e,n,t){"use strict";t.r(n);t(2);var r=t(5),i=t.n(r),c=t(3),o=t.n(c),u=t(1),s=t(0),l=function(){return Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)(u.Link,{to:"/red",children:"Red"})}),Object(s.jsx)("li",{children:Object(s.jsx)(u.Link,{to:"/blue",children:"Blue"})})]})},a=function(){return Object(s.jsx)("div",{className:"Red",children:"Red"})},f=function(){return Object(s.jsx)(a,{})},d=function(){return Object(s.jsx)("div",{className:"Blue",children:"Blue"})},j=function(){return Object(s.jsx)(d,{})},p=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(l,{}),Object(s.jsx)("hr",{}),Object(s.jsx)(u.Route,{path:"/red",component:f}),Object(s.jsx)(u.Route,{path:"/blue",component:j})]})},b=t(4),x=t.n(b),h=t(6),m=t.n(h),O=JSON.parse(m.a.readFileSync(x.a.resolve("./build/asset-manifest.json"),"utf8")),v=Object.keys(O.files).filter((function(e){return/chunk\.js$/.exec(e)})).map((function(e){return'<script src="'.concat(O.files[e],'"><\/script>')})).join("");var y=o()(),g=o.a.static(x.a.resolve("./build"),{index:!1});y.use(g),y.use((function(e,n,t){var r=Object(s.jsx)(u.StaticRouter,{location:e.url,context:{},children:Object(s.jsx)(p,{})}),c=i.a.renderToString(r);n.send(function(e,n){return'<!DOCTYPE html>\n      <html lang="en">\n      <head>\n        <meta charset="utf-8" />\n        <link rel="shortcut icon" href="/favicon.ico" />\n        <meta\n          name="viewport"\n          content="width=device-width,initial-scale=1,shrink-to-fit=no"\n        />\n        <meta name="theme-color" content="#000000" />\n        <title>React App</title>\n        <link href="'.concat(O.files["main.css"],'" rel="stylesheet" />\n      </head>\n      <body>\n        <noscript>You need to enable JavaScript to run this app.</noscript>\n        <div id="root">\n          ').concat(e,'\n        </div>\n        <script src="').concat(O.files["runtime-main.js"],'"><\/script>\n        ').concat(v,'\n        <script src="').concat(O.files["main.js"],'"><\/script>\n      </body>\n      </html>\n        ')}(c))})),y.listen(5e3,(function(){console.log("server running...")}))}]);