"use strict";(self.webpackChunkalter_ego=self.webpackChunkalter_ego||[]).push([[651],{8389:function(e,n,r){r.d(n,{D:function(){return t},l:function(){return i}});var t=function(e,n){return localStorage.setItem("currentUser",JSON.stringify({username:e,password:n,isLogged:!0}))},i=function(){var e,n=localStorage.getItem("currentUser");return null!=n&&(e=JSON.parse(n)),e}},7422:function(e,n,r){r.r(n),r.d(n,{default:function(){return g}});var t=r(2791),i=r(7689),o=r(8389),c=r(9230),a=r(7315),u=r.p+"static/media/Profile.7b243a1edccf9879c8c2.jpg",s=r(3767),l=r(890),f=(0,r(2455).Z)({profileWrapper:{marginTop:"140px",minHeight:"800px"},profileImg:{width:"300px",borderRadius:"20px",margin:"20px"},"@media (min-width: 960px)":{profileImg:{width:"800px"},profileWrapper:{marginTop:"60px"}}}),p=r(8652),d=r(9434),m=r(184),g=function(){var e=(0,i.s0)(),n=(0,o.l)(),r=(0,c.$G)().t,g=f(),v=(0,d.v9)(a.dD),h=(0,d.I0)();return(0,t.useEffect)((function(){n||e("/home"),0!==v.length&&h((0,p.mB)(!0))}),[n,e,h,v.length]),(0,m.jsxs)(s.Z,{className:g.profileWrapper,children:[(0,m.jsx)(l.Z,{align:"center",variant:"h3",sx:{fontSize:{lg:47,md:40,sm:30,xs:30}},children:r("profile")}),(0,m.jsx)("img",{className:g.profileImg,src:u,alt:"ukraine"})]})}},7315:function(e,n,r){r.d(n,{FZ:function(){return i},Vc:function(){return c},dD:function(){return t},r0:function(){return o}});var t=function(e){return e.news.news},i=function(e){return e.news.currentPage},o=function(e){return e.news.flag},c=function(e){return e.news.isLoading}},3767:function(e,n,r){var t=r(4942),i=r(3366),o=r(7462),c=r(2791),a=r(1184),u=r(5682),s=r(8519),l=r(2466),f=r(7630),p=r(1046),d=r(184),m=["component","direction","spacing","divider","children"];function g(e,n){var r=c.Children.toArray(e).filter(Boolean);return r.reduce((function(e,t,i){return e.push(t),i<r.length-1&&e.push(c.cloneElement(n,{key:"separator-".concat(i)})),e}),[])}var v=(0,f.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,n){return[n.root]}})((function(e){var n=e.ownerState,r=e.theme,i=(0,o.Z)({display:"flex",flexDirection:"column"},(0,a.k9)({theme:r},(0,a.P$)({values:n.direction,breakpoints:r.breakpoints.values}),(function(e){return{flexDirection:e}})));if(n.spacing){var c=(0,u.hB)(r),s=Object.keys(r.breakpoints.values).reduce((function(e,r){return("object"===typeof n.spacing&&null!=n.spacing[r]||"object"===typeof n.direction&&null!=n.direction[r])&&(e[r]=!0),e}),{}),f=(0,a.P$)({values:n.direction,base:s}),p=(0,a.P$)({values:n.spacing,base:s});"object"===typeof f&&Object.keys(f).forEach((function(e,n,r){if(!f[e]){var t=n>0?f[r[n-1]]:"column";f[e]=t}}));i=(0,l.Z)(i,(0,a.k9)({theme:r},p,(function(e,r){return{"& > :not(style) + :not(style)":(0,t.Z)({margin:0},"margin".concat((i=r?f[r]:n.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[i])),(0,u.NA)(c,e))};var i})))}return i=(0,a.dt)(r.breakpoints,i)})),h=c.forwardRef((function(e,n){var r=(0,p.Z)({props:e,name:"MuiStack"}),t=(0,s.Z)(r),c=t.component,a=void 0===c?"div":c,u=t.direction,l=void 0===u?"column":u,f=t.spacing,h=void 0===f?0:f,x=t.divider,k=t.children,w=(0,i.Z)(t,m),b={direction:l,spacing:h};return(0,d.jsx)(v,(0,o.Z)({as:a,ownerState:b,ref:n},w,{children:x?g(k,x):k}))}));n.Z=h}}]);
//# sourceMappingURL=651.059cfde8.chunk.js.map