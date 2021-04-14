!function(){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function t(e,t){return e(t={exports:{}},t.exports),t.exports}function n(e){return e&&e.Math==Math&&e}function c(e){try{return!!e()}catch(e){return!0}}function r(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}function o(e){return y.call(e).slice(8,-1)}function w(e){if(null==e)throw TypeError("Can't call method on "+e);return e}function f(e){return O(w(e))}function i(e){return"object"==typeof e?null!==e:"function"==typeof e}function u(e,t){if(!i(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!i(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!i(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!i(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}function s(e,t){return S.call(e,t)}function a(e){return E?j.createElement(e):{}}function l(e){if(!i(e))throw TypeError(String(e)+" is not an object");return e}function d(t,n){try{k(p,t,n)}catch(e){p[t]=n}return n}var p=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")(),b=!c(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}),m={}.propertyIsEnumerable,h=Object.getOwnPropertyDescriptor,v={f:h&&!m.call({1:2},1)?function(e){var t=h(this,e);return!!t&&t.enumerable}:m},y={}.toString,g="".split,O=c(function(){return!Object("z").propertyIsEnumerable(0)})?function(e){return"String"==o(e)?g.call(e,""):Object(e)}:Object,S={}.hasOwnProperty,j=p.document,E=i(j)&&i(j.createElement),z=!b&&!c(function(){return 7!=Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}),x=Object.getOwnPropertyDescriptor,C={f:b?x:function(e,t){if(e=f(e),t=u(t,!0),z)try{return x(e,t)}catch(e){}if(s(e,t))return r(!v.f.call(e,t),e[t])}},P=Object.defineProperty,T={f:b?P:function(e,t,n){if(l(e),t=u(t,!0),l(n),z)try{return P(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},k=b?function(e,t,n){return T.f(e,t,r(1,n))}:function(e,t,n){return e[t]=n,e},A="__core-js_shared__",M=p[A]||d(A,{}),F=Function.toString;"function"!=typeof M.inspectSource&&(M.inspectSource=function(e){return F.call(e)});function I(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++G+H).toString(36)}function R(e){return Q[e]||(Q[e]=I(e))}var D,L,N,W=M.inspectSource,K=p.WeakMap,U="function"==typeof K&&/native code/.test(W(K)),q=t(function(e){(e.exports=function(e,t){return M[e]||(M[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.5",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})}),G=0,H=Math.random(),Q=q("keys"),V={},X=p.WeakMap;if(U){var Y=new X,B=Y.get,J=Y.has,Z=Y.set;D=function(e,t){return Z.call(Y,e,t),t},L=function(e){return B.call(Y,e)||{}},N=function(e){return J.call(Y,e)}}else{var $=R("state");V[$]=!0,D=function(e,t){return k(e,$,t),t},L=function(e){return s(e,$)?e[$]:{}},N=function(e){return s(e,$)}}function ee(e){return"function"==typeof e?e:void 0}function te(e,t){return arguments.length<2?ee(ye[e])||ee(p[e]):ye[e]&&ye[e][t]||p[e]&&p[e][t]}function ne(e){return isNaN(e=+e)?0:(0<e?we:ge)(e)}function re(e){return 0<e?_e(ne(e),9007199254740991):0}function oe(s){return function(e,t,n){var r,o,i,c=f(e),u=re(c.length),a=(r=u,(o=ne(n))<0?Oe(o+r,0):Se(o,r));if(s&&t!=t){for(;a<u;)if((i=c[a++])!=i)return!0}else for(;a<u;a++)if((s||a in c)&&c[a]===t)return s||a||0;return!s&&-1}}function ie(e,t){var n,r=f(e),o=0,i=[];for(n in r)!s(V,n)&&s(r,n)&&i.push(n);for(;t.length>o;)s(r,n=t[o++])&&(~Ee(i,n)||i.push(n));return i}function ce(e,t){for(var n=Te(t),r=T.f,o=C.f,i=0;i<n.length;i++){var c=n[i];s(e,c)||r(e,c,o(t,c))}}function ue(e,t){var n=Me[Ae(e)];return n==Ie||n!=Fe&&("function"==typeof t?c(t):!!t)}function ae(e,t){var n,r,o,i,c,u=e.target,a=e.global,s=e.stat;if(n=a?p:s?p[u]||d(u,{}):(p[u]||{}).prototype)for(r in t){if(i=t[r],o=e.noTargetGet?(c=De(n,r))&&c.value:n[r],!Re(a?r:u+(s?".":"#")+r,e.forced)&&void 0!==o){if(typeof i==typeof o)continue;ce(i,o)}(e.sham||o&&o.sham)&&k(i,"sham",!0),ve(n,r,i,e)}}function se(r,o,e){if(!function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(r),void 0===o)return r;switch(e){case 0:return function(){return r.call(o)};case 1:return function(e){return r.call(o,e)};case 2:return function(e,t){return r.call(o,e,t)};case 3:return function(e,t,n){return r.call(o,e,t,n)}}return function(){return r.apply(o,arguments)}}function fe(e){return s(Ke,e)||(Ne&&s(Ue,e)?Ke[e]=Ue[e]:Ke[e]=qe("Symbol."+e)),Ke[e]}function le(e,t){var n;return Le(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!Le(n.prototype)?i(n)&&null===(n=n[Ge])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}function de(p){var b=1==p,m=2==p,h=3==p,v=4==p,y=6==p,g=5==p||y;return function(e,t,n,r){for(var o,i,c=Object(w(e)),u=O(c),a=se(t,n,3),s=re(u.length),f=0,l=r||le,d=b?l(e,s):m?l(e,0):void 0;f<s;f++)if((g||f in u)&&(i=a(o=u[f],f,c),p))if(b)d[f]=i;else if(i)switch(p){case 3:return!0;case 5:return o;case 6:return f;case 2:He.call(d,o)}else if(v)return!1;return y?-1:h||v?v:d}}function pe(){}function be(e){return"<script>"+e+"</"+Je+">"}var me,he={set:D,get:L,has:N,enforce:function(e){return N(e)?L(e):D(e,{})},getterFor:function(n){return function(e){var t;if(!i(e)||(t=L(e)).type!==n)throw TypeError("Incompatible receiver, "+n+" required");return t}}},ve=t(function(e){var t=he.get,u=he.enforce,a=String(String).split("String");(e.exports=function(e,t,n,r){var o=!!r&&!!r.unsafe,i=!!r&&!!r.enumerable,c=!!r&&!!r.noTargetGet;"function"==typeof n&&("string"!=typeof t||s(n,"name")||k(n,"name",t),u(n).source=a.join("string"==typeof t?t:"")),e!==p?(o?!c&&e[t]&&(i=!0):delete e[t],i?e[t]=n:k(e,t,n)):i?e[t]=n:d(t,n)})(Function.prototype,"toString",function(){return"function"==typeof this&&t(this).source||W(this)})}),ye=p,ge=Math.ceil,we=Math.floor,_e=Math.min,Oe=Math.max,Se=Math.min,je={includes:oe(!0),indexOf:oe(!1)},Ee=je.indexOf,ze=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],xe=ze.concat("length","prototype"),Ce={f:Object.getOwnPropertyNames||function(e){return ie(e,xe)}},Pe={f:Object.getOwnPropertySymbols},Te=te("Reflect","ownKeys")||function(e){var t=Ce.f(l(e)),n=Pe.f;return n?t.concat(n(e)):t},ke=/#|\.prototype\./,Ae=ue.normalize=function(e){return String(e).replace(ke,".").toLowerCase()},Me=ue.data={},Fe=ue.NATIVE="N",Ie=ue.POLYFILL="P",Re=ue,De=C.f,Le=Array.isArray||function(e){return"Array"==o(e)},Ne=!!Object.getOwnPropertySymbols&&!c(function(){return!String(Symbol())}),We=Ne&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Ke=q("wks"),Ue=p.Symbol,qe=We?Ue:Ue&&Ue.withoutSetter||I,Ge=fe("species"),He=[].push,Qe={forEach:de(0),map:de(1),filter:de(2),some:de(3),every:de(4),find:de(5),findIndex:de(6)},Ve=Object.keys||function(e){return ie(e,ze)},Xe=b?Object.defineProperties:function(e,t){l(e);for(var n,r=Ve(t),o=r.length,i=0;i<o;)T.f(e,n=r[i++],t[n]);return e},Ye=te("document","documentElement"),Be="prototype",Je="script",Ze=R("IE_PROTO"),$e=function(){try{me=document.domain&&new ActiveXObject("htmlfile")}catch(e){}var e,t;$e=me?function(e){e.write(be("")),e.close();var t=e.parentWindow.Object;return e=null,t}(me):((t=a("iframe")).style.display="none",Ye.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(be("document.F=Object")),e.close(),e.F);for(var n=ze.length;n--;)delete $e[Be][ze[n]];return $e()};V[Ze]=!0;var et=Object.create||function(e,t){var n;return null!==e?(pe[Be]=l(e),n=new pe,pe[Be]=null,n[Ze]=e):n=$e(),void 0===t?n:Xe(n,t)},tt=fe("unscopables"),nt=Array.prototype;null==nt[tt]&&T.f(nt,tt,{configurable:!0,value:et(null)});function rt(e){throw e}function ot(e,t){if(s(ut,e))return ut[e];var n=[][e],r=!!s(t=t||{},"ACCESSORS")&&t.ACCESSORS,o=s(t,0)?t[0]:rt,i=s(t,1)?t[1]:void 0;return ut[e]=!!n&&!c(function(){if(r&&!b)return!0;var e={length:-1};r?ct(e,1,{enumerable:!0,get:rt}):e[1]=1,n.call(e,o,i)})}var it,ct=Object.defineProperty,ut={},at=Qe.find,st="find",ft=!0,lt=ot(st);st in[]&&Array(1)[st](function(){ft=!1}),ae({target:"Array",proto:!0,forced:ft||!lt},{find:function(e,t){return at(this,e,1<arguments.length?t:void 0)}}),it=st,nt[tt][it]=!0;var dt,pt,bt=je.indexOf,mt=[].indexOf,ht=!!mt&&1/[1].indexOf(1,-0)<0,vt=!!(pt=[]["indexOf"])&&c(function(){pt.call(null,dt||function(){throw 1},1)}),yt=ot("indexOf",{ACCESSORS:!0,1:0});ae({target:"Array",proto:!0,forced:ht||!vt||!yt},{indexOf:function(e,t){return ht?mt.apply(this,arguments)||0:bt(this,e,1<arguments.length?t:void 0)}}),function(i,e){function c(e,t,n){var r;window.CustomEvent?r=new CustomEvent(t,n):(r=document.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,n),e.dispatchEvent(r)}function t(e,t){if(_.isUndefined(t)&&(t=!1),"header_builder_panel"===e||"hfg_customize_render_header"===e){var n=i("body").hasClass("menu_sidebar_dropdown");i(".close-sidebar-panel").not(":last").remove(),n||i(".header-menu-sidebar").not(":last").remove(),t&&i("body > .header-menu-sidebar, #page > .header-menu-sidebar").remove(),n?(i("#masthead").append(i("#header-menu-sidebar")),i("body").hasClass("is-menu-sidebar")&&i("#header-menu-sidebar").css({display:"block",height:"auto"})):i("body").prepend(i("#header-menu-sidebar"))}var r=i("#masthead");if(i(".search-form--mobile",r).length){t&&i(".mobile-search-form-sidebar").remove();var o=i(".search-form--mobile").eq(0);o.addClass("mobile-search-form-sidebar").removeClass("hide-on-mobile hide-on-tablet"),i("body").prepend(o)}c(document,"header_builder_panel_changed",{bubbles:!0,detail:{partial_id:e}})}var o=i(document);wp.customize("header_textcolor",function(e){e.bind(function(e){"blank"===e?i(".site-title, .site-description").css({clip:"rect(1px, 1px, 1px, 1px)",position:"absolute"}):(i(".site-title, .site-description").css({clip:"auto",position:"relative"}),i(".site-title a, .site-description").css({color:e}))})}),e.bind("preview-ready",function(){e.preview.bind("header_builder_panel_changed",function(){c(document,"header_builder_panel_changed",{bubbles:!0,detail:"open"})}),e.preview.bind("header_sidebar_open",function(){c(document,"customize_control_sidebar",{bubbles:!0,detail:"open"})}),e.preview.bind("header_sidebar_close",function(){c(document,"customize_control_sidebar",{bubbles:!0,detail:"close"})})}),wp.customize("header_sidebar_animate",function(e){console.log("header_sidebar_animate -- triggered"),e.bind(function(e){t("header_builder_panel",!1),c(document,"customize_section_opened",{bubbles:!0,detail:"header_sidebar"}),1<e.indexOf("menu_sidebar_dropdown")?i(".menu-mobile-toggle, .menu-mobile-toggle .hamburger").addClass("is-active"):i(".menu-mobile-toggle, .menu-mobile-toggle .hamburger").removeClass("is-active")})}),e.bind("preview-ready",function(){var n=window.parent===window?null:window.parent;function r(){i(".hfg-grid .has_menu.builder-item-focus").each(function(){var e=i(this).closest(".hfg-grid").offset(),t=i(this).offset(),n=i(this).innerHeight(),r=t.top-e.top;i(this).find(".item--preview-name").css({top:r+n})})}n.wp.customize.state("expandedSection").bind(function(e){e&&!_.isUndefined(e.id)?c(document,"customize_section_opened",{bubbles:!0,detail:e.id}):c(document,"customize_section_opened",{bubbles:!0,detail:"__no_section_selected"})}),o.on("click","#masthead .customize-partial-edit-shortcut-header_panel",function(e){e.preventDefault(),n.wp.customize.panel("header_settings").focus()}),o.on("click",".builder-item-focus .item--preview-name, .builder-item-focus .edit-row-action",function(e){e.preventDefault(),e.stopPropagation();var t=i(this).closest(".builder-item-focus").attr("data-section")||"";t&&n.wp.customize.section(t)&&n.wp.customize.section(t).focus()}),o.on("click",".navbar-toggle",function(e){wp.customize.preview.send("neve-toggle-navbar",{})}),o.on("click",".builder-item-focus",function(e){if(!e.shiftKey)return!1;e.preventDefault(),e.stopPropagation();var t=i(this).closest(".builder-item-focus").attr("data-section")||"";if(!t)return!1;n.wp.customize.section(t).focus()}),wp.customize.selectiveRefresh.bind("partial-content-rendered",function(e){console.log("settings.partial.id",e.partial.id),c(document,"selective-refresh-content-rendered",{bubbles:!0,detail:e.partial.id}),t(e.partial.id)}),r(),o.on("selective-refresh-content-rendered  after_auto_render_css",function(e,t,n){r()})});var r={hfg_customize_render_header:1,hfg_customize_render_footer:1};wp.customize.selectiveRefresh.Partial.prototype.ready=function(){var n=this;_.isUndefined(r[n.id])&&(_.each(n.placements(),function(e){i(e.container).attr("title",wp.customize.selectiveRefresh.data.l10n.shiftClickToEdit),n.createEditShortcutForPlacement(e)}),i(document).on("click",n.params.selector,function(t){t.shiftKey&&(t.preventDefault(),_.each(n.placements(),function(e){i(e.container).is(t.currentTarget)&&n.showControl()}))}))}}(jQuery,wp.customize)}();
