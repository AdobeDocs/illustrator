"use strict";(self.webpackChunkillustrator=self.webpackChunkillustrator||[]).push([[231],{32199:function(e,i,t){t.d(i,{BA:function(){return x},NN:function(){return O},Rp:function(){return z},__:function(){return P},ck:function(){return T},gq:function(){return B},mQ:function(){return k},ms:function(){return q},vS:function(){return A}});var n=t(4942),r=t(87462),a=t(63366),o=t(15007),l=t(75900),s=t.n(l),d=t(95223),c=t(44264),m=["orientation","density","isQuiet","isHeader","children","className","onFontsReady"],u=["elementType","isDisabled","isSelected","className","children","icon","label"],p=["elementType","icon","isSelected","isDisabled","className","children","iconSize"],v=["className"],b=["className","index"],f=["elementType","isDisabled","isSelected","className","children","icon","hasDropdown","label"],g=["elementType","isHidden","className","children"],h=["theme","orientation","className","APIReference"];function y(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function w(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?y(Object(t),!0).forEach((function(i){(0,n.Z)(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}var x=function(e,i){e.current.style.transform="translate("+i.current.offsetLeft+"px, 0px)",e.current.style.width=i.current.offsetWidth+"px"},z=function(e,i){e.current.style.transition=i?"":"none"},Z="480px",D=function(e){var i;return"img"===(null==e||null===(i=e.props)||void 0===i?void 0:i.mdxType)?(0,o.cloneElement)(e,{loading:"eager"}):e},N=function(e){var i=e.image,t=void 0===i?"":i,n=e.styles,r=void 0===n?"":n;return t?(0,o.cloneElement)(t,{children:(0,c.ve)(t.props.children,D),css:(0,d.iv)("display:flex;align-items:center;justify-content:center;height:100%;width:100%;margin-top:var(--spectrum-global-dimension-size-0);img{display:block;object-fit:contain;}",r,";","")}):null},S=function(e){var i=e.icon,t=e.styles;return i?(0,o.cloneElement)(i,{alt:"",css:(0,d.iv)("height:var(--spectrum-global-dimension-size-600);width:var(--spectrum-global-dimension-size-600);margin-top:var(--spectrum-global-dimension-size-0);img{display:block;object-fit:contain;}",t,";","")}):null},k=(0,o.forwardRef)((function(e,i){var t=e.orientation,n=void 0===t?"horizontal":t,l=e.density,c=void 0===l?"regular":l,u=e.isQuiet,p=void 0===u||u,v=e.isHeader,b=void 0!==v&&v,f=e.children,g=e.className,h=e.onFontsReady,y=(0,a.Z)(e,m);return(0,o.useEffect)((function(){document.fonts.ready.then((function(){h&&h()}))}),[h]),(0,d.tZ)("div",(0,r.Z)({ref:i},y,{role:b?void 0:"tablist","aria-orientation":b?void 0:"orientation",className:s()(g,"spectrum-Tabs","spectrum-Tabs--sizeM","spectrum-Tabs--"+n,{"spectrum-Tabs--quiet":p},{"spectrum-Tabs--compact":"compact"===c})}),f)})),T=(0,o.forwardRef)((function(e,i){var t,n=e.elementType,o=void 0===n?"div":n,l=e.isDisabled,c=void 0!==l&&l,m=e.isSelected,p=void 0!==m&&m,v=e.className,b=e.children,f=e.icon,g=e.label,h=(0,a.Z)(e,u),y=o;return(0,d.tZ)(y,(0,r.Z)({},h,{ref:i,role:"tab",title:null==g||null===(t=g.props)||void 0===t?void 0:t.children,"aria-selected":p,disabled:c,className:s()(v,"spectrum-Tabs-item",{"is-selected":p},{"is-disabled":c})}),f?(0,d.tZ)(E,{icon:f,isSelected:p,isDisabled:c}):null,g?(0,d.tZ)(P,null," ",g," "):null,b)})),I={name:"16l42sl",styles:"height:var(--spectrum-global-dimension-size-600);width:var(--spectrum-global-dimension-size-550);z-index:1"},E=(0,o.forwardRef)((function(e,i){var t=e.elementType,n=void 0===t?"div":t,o=e.icon,l=e.isSelected,c=e.isDisabled,m=e.className,u=(e.children,e.iconSize),v=void 0===u?"xl":u,b=(0,a.Z)(e,p),f=n;return(0,d.tZ)(f,(0,r.Z)({},b,{ref:i,className:s()(m,"spectrum-Icon",{"is-selected":l},{"is-disabled ":c}),css:I}),o?function(e,i,t){var n,r,a;return"img"===(null==e||null===(n=e.props)||void 0===n||null===(r=n.children)||void 0===r||null===(a=r.props)||void 0===a?void 0:a.mdxType)?(0,d.tZ)(N,{image:e,className:s()(i,"spectrum-Icon--spectrum-icon-size-"+t)}):(0,d.tZ)(S,{icon:e,className:s()(i,"spectrum-Icon--spectrum-icon-size-"+t)})}(o,m,v):null)})),R={name:"pwo431",styles:"transition-property:transform,width"},O=(0,o.forwardRef)((function(e,i){var t=e.className,n=(0,a.Z)(e,v);return(0,d.tZ)("div",(0,r.Z)({},n,{ref:i,className:s()(t,"spectrum-Tabs-selectionIndicator"),css:R}))})),j={name:"pwo431",styles:"transition-property:transform,width"},A=(0,o.forwardRef)((function(e,i){var t=e.className,n=e.index,o=void 0===n?0:n,l=(0,a.Z)(e,b);return(0,d.tZ)("div",(0,r.Z)({},l,{ref:i,className:s()(t,"spectrum-Tabs-selectionIndicator",{default:0===o}),css:j}))})),P=function(e){var i=e.children;return(0,d.tZ)("span",{className:"spectrum-Tabs-itemLabel"},i)},B=(0,o.forwardRef)((function(e,i){var t,n=e.elementType,o=void 0===n?"div":n,l=e.isDisabled,c=void 0!==l&&l,m=e.isSelected,u=void 0!==m&&m,p=e.className,v=e.children,b=e.icon,g=e.hasDropdown,h=void 0!==g&&g,y=e.label,w=(0,a.Z)(e,f),x=o;return(0,d.tZ)(x,(0,r.Z)({},w,{ref:i,title:null==y||null===(t=y.props)||void 0===t?void 0:t.children,"aria-selected":u,autofocus:!0,tabIndex:"0",onKeyDown:function(e){var i;("ArrowRight"===e.key&&("tabindex5"===w.id&&document.getElementById("getCredentialID").focus(),e.target.nextElementSibling&&e.target.nextElementSibling.focus()),"ArrowLeft"===e.key)&&("tabindex0"===w.id?null===(i=document.getElementById("product"))||void 0===i||i.focus():e.target.previousElementSibling&&e.target.previousElementSibling.focus());"ArrowDown"===e.key&&(e.preventDefault(),h?(null==w?void 0:w.openDropDown)&&(null==w||w.openDropDown({index:w.index,isOpen:!0,id:w.id})):e.target.nextElementSibling&&e.target.nextElementSibling.focus()),"ArrowUp"===e.key&&((null==w?void 0:w.openDropDown)&&(null==w||w.openDropDown({isOpen:!1,id:w.id})),e.target.previousElementSibling&&e.target.previousElementSibling.focus())},disabled:c,className:s()(p,"spectrum-Tabs-item",{"is-selected":u},{"is-disabled":c})}),b?(0,d.tZ)(E,{icon:b,isSelected:u,isDisabled:c}):null,y?(0,d.tZ)(P,null," ",y," "):null,v)})),L=(0,o.forwardRef)((function(e,i){var t=e.elementType,n=void 0===t?"div":t,o=e.isHidden,l=e.className,c=e.children,m=(0,a.Z)(e,g),u=n;return(0,d.tZ)(u,(0,r.Z)({},m,{ref:i,hidden:o,className:s()(l)}),c)})),U={name:"15jol59",styles:"color:#4b9cf5;&:focus{text-decoration:underline;border-bottom:1px solid #1374e6;}"},_={name:"1xt9l3k",styles:"background:var(--spectrum-global-color-gray-100);max-width:100%;overflow-x:hidden!important;margin:0;padding-bottom:var(--spectrum-global-dimension-size-250)"},q=function(e){var i=e.theme,t=void 0===i?"light":i,n=e.orientation,r=void 0===n?"horizontal":n,l=e.className,m=e.APIReference,u=void 0===m?"":m,p=(0,a.Z)(e,h),v=(0,o.useState)([])[0],b=(0,o.useRef)(null),f=(0,o.useState)({tab:0}),g=f[0],y=f[1],z=Object.keys(p).filter((function(e){return e.startsWith("heading")})).map((function(e){return e})).map((function(e,i){var t,n;return{heading:(null==p||null===(t=p["heading"+i])||void 0===t||null===(n=t.props)||void 0===n?void 0:n.children)||(null==p?void 0:p.heading),content:(null==p?void 0:p["content"+i])||(null==p?void 0:p.content),image:(null==p?void 0:p["image"+i])||(null==p?void 0:p.image)}})),D=function(e){void 0===e&&(e=g.tab);var i=v.filter((function(e){return null==e?void 0:e.current}))[e];x(b,i)},N=function(e){y({tab:e}),D(e)};return(0,d.tZ)("section",{className:s()(l,"tabsBlock spectrum--"+t),css:_},(0,d.tZ)("div",{css:(0,d.iv)("display:","vertical"===r?"inline-flex":"",";@media only screen and (min-width: ",c.LU,"){margin:0 auto!important;}@media screen and (max-device-width: ",c.q9,"){flex-direction:column;}","")},(0,d.tZ)("div",{css:(0,d.iv)("display:","vertical"===r?"grid":"block",";position:relative;grid-template-columns:300px calc(100% - 300px);margin-top:","vertical"===r?"var(--spectrum-global-dimension-size-300)":"",";width:","vertical"===r?c.Av+" !important":"inherit",";@media only screen and (max-width: ",c.q9,"){width:100%!important;}@media only screen and (device-width: ",c.LU,"){width:",(0,c.MY)(8),"!important;}","")},(0,d.tZ)("div",{css:(0,d.iv)((null==z?void 0:z.length)>6?"overflow-x:auto; overflow-y: hidden;":"",";","")},(null==z?void 0:z.length)>0?(0,d.tZ)(k,{orientation:r,isQuiet:!0,onFontsReady:D},z.map((function(e,i){var t=(0,o.createRef)();v.push(t);var n=g.tab===i;return(0,d.tZ)(o.default.Fragment,null,(0,d.tZ)(T,{className:"tabItem",key:"tabItem_"+i,id:"tabItem_"+i,ref:t,isSelected:n,"aria-controls":"tabView"+i,tabIndex:i===g.tab?0:-1,"aria-label":e.heading,"aria-selected":i===g.tab,label:(0,d.tZ)("b",null,e.heading),icon:e.image,onKeyDown:function(e){if("ArrowDown"===e.key||"Enter"===e.key){var t;if(e.preventDefault(),z.length===i+1&&""!==u)null===(t=document.getElementById("apiReference"))||void 0===t||t.setAttribute("tabIndex",0),document.getElementById("apiReference").focus();e.currentTarget.nextSibling&&e.currentTarget.nextSibling.nextSibling.focus()}"ArrowUp"===e.key&&(e.preventDefault(),e.currentTarget.previousSibling&&e.currentTarget.previousSibling.previousSibling.focus())},onFocus:function(){N(i)},onClick:function(){N(i)},css:(0,d.iv)("text-align:left;white-space:normal;width:","vertical"===r?"calc(var(--spectrum-global-dimension-size-2000) + var(--spectrum-global-dimension-size-600))":"calc(var(--spectrum-global-dimension-static-grid-fixed-max-width) / var(--spectrum-global-dimension-static-grid-columns))","!important;font-size:var(--spectrum-global-dimension-size-200);margin-bottom:","vertical"===r?"1rem !important":"0rem",";display:flex!important;padding:var(--spectrum-global-dimension-size-125)!important;height:auto!important;line-height:","vertical"===r?"initial !important":"initial",";.spectrum-Tabs-itemLabel{margin-top:5px;margin-bottom:5px;}.spectrum-Icon{background-size:var(--spectrum-global-dimension-size-225) var(--spectrum-global-dimension-size-275);width:var(--spectrum-global-dimension-size-500);height:var(--spectrum-global-dimension-size-400);}&.is-disabled{pointer-events:none;}&::before{left:var(--spectrum-global-dimension-size-0)!important;right:var(--spectrum-global-dimension-size-0)!important;border:none!important;}@media only screen and (max-width: ",Z,"){margin-top:var(--spectrum-global-dimension-size-25)!important;margin-bottom:var(--spectrum-global-dimension-size-25)!important;}@media only screen and (max-width: ",c.q9,"){padding-left:var(--spectrum-global-dimension-size-0)!important;}@media only screen and (min-width: ",c.LU,"){left:var(--spectrum-global-dimension-size-250)!important;}","")},(0,d.tZ)("div",{key:"mobileTabView_"+i,className:"mobileTabView",hidden:!n,css:(0,d.iv)("display:none;padding:var(--spectrum-global-dimension-size-0)!important;h3{font-size:var(--spectrum-heading-s-text-size, var(--spectrum-alias-heading-s-text-size));}p{font-size:var(--spectrum-body-s-text-size, var(--spectrum-global-dimension-font-size-150));}@media only screen and (max-width: ","767px","){display:block;}","")},e.content?e.content:null)))})),(0,d.tZ)(O,{ref:b}),""!==u&&(0,d.tZ)("div",{css:(0,d.iv)("text-align:left;white-space:normal;width:calc(var(--spectrum-global-dimension-size-2500) + var(--spectrum-global-dimension-size-750))!important;font-size:var(--spectrum-global-dimension-size-200);padding:var(--spectrum-global-dimension-size-125)!important;@media only screen and (max-width: ",Z,"){left:var(--spectrum-global-dimension-size-100)!important;margin-top:var(--spectrum-global-dimension-size-125)!important;margin-bottom:var(--spectrum-global-dimension-size-125)!important;}@media only screen and (min-width: ",c.LU,"){left:var(--spectrum-global-dimension-size-250)!important;}","")},(0,d.tZ)("span",{css:(0,d.iv)("text-align:left;cursor:pointer;margin-top:var(--spectrum-global-dimension-size-85);margin-left:var(--spectrum-global-dimension-size-400);@media only screen and (max-width: ",Z,"){margin-left:var(--spectrum-global-dimension-size-100)!important;}@media only screen and (max-width: ",c.q9,"){margin-left:var(--spectrum-global-dimension-size-100)!important;}","")},(0,d.tZ)("a",{href:u,tabIndex:-1,id:"apiReference",css:U,target:"_blank",rel:"noreferrer",onKeyDown:function(e){"ArrowUp"===e.key&&(e.preventDefault(),N((null==z?void 0:z.length)-1),document.getElementById("tabItem_"+((null==z?void 0:z.length)-1)).focus())},onBlur:function(){document.getElementById("apiReference").setAttribute("tabIndex",-1)}},"API Reference")))):null),(null==z?void 0:z.length)>0?z.map((function(e,i){var t=g.tab===i,n=e.content;return n.props=w(w({},n.props),{},{index:g.tab}),(0,d.tZ)(L,{key:"tabView_"+i,id:"tabView"+i,className:"tabView",isHidden:!t,css:(0,d.iv)("text-align:left;padding:0px 0 var(--spectrum-global-dimension-size-100) 10px!important;overflow-x:hidden!important;@media only screen and (max-width: ",Z,"){padding-left:inherit!important;max-width:",(0,c.MY)(3),"!important;}@media only screen and (device-width: ",c.q9,"){max-width:",(0,c.MY)(3.5),"!important;}@media only screen and (device-width: ",c.LU,"){max-width:",(0,c.MY)(6.5),"!important;padding-left:var(--spectrum-global-dimension-size-500);}","")},n)})):null)))}}}]);
//# sourceMappingURL=3f943334-be24efb3ce2ae0a48302.js.map