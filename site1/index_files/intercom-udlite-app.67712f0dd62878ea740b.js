(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["intercom-udlite-app"],{"./src/udemy/js/intercom/udlite-app.js":function(t,e,n){"use strict";n.r(e);var a=n("./node_modules/mobx/lib/mobx.module.js");var c=n("./src/udemy/js/utils/get-config-data.js");var s=n("./src/udemy/js/utils/get-request-data.js");var o=n("./src/udemy/js/utils/ud-me.js");const i=function(){let t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};let e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:window;const n=e.Intercom;if(typeof n==="function"){n("reattach_activator");n("update",t)}else{const n=function(){n.c(arguments)};n.q=[];n.c=function(t){n.q.push(t)};e.Intercom=n;const a=function(){const e=document.createElement("script");e.type="text/javascript";e.async=true;e.src=`https://widget.intercom.io/widget/${t.app_id}`;const n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};if(document.readyState==="complete"){a()}else if(e.attachEvent){e.attachEvent("onload",a)}else{e.addEventListener("load",a,false)}}};const r=function(){let t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window;const e=t.history;if(t.Intercom&&!e.hasIntercomPatch){const n=e.pushState;e.pushState=function(a){if(typeof e.onpushstate=="function"){e.onpushstate({state:a})}t.Intercom("update");return n.apply(e,arguments)};e.hasIntercomPatch=true}};const u=Object(c["a"])();const d=Object(s["a"])();const p=async t=>{await Object(a["D"])((()=>!o["a"].isLoading));const e={};const n=u.third_party.intercom.app_id;if(o["a"].id){Object.assign(e,{app_id:n,email:o["a"].email,name:o["a"].title,created_at:o["a"].created,user_id:o["a"].id,user_hash:t.intercom_user_hash})}if(d.extraIntercomData){Object.assign(e,d.extraIntercomData)}return e};async function m(t,e){if(t.classList.contains("ud-component--intercom--app")&&u.features.intercom_chat){const t=await p(e);i(t);window.Intercom("boot",t);r()}}n.d(e,"default",(function(){return m}))}}]);
//# sourceMappingURL=intercom-udlite-app.67712f0dd62878ea740b.js.map