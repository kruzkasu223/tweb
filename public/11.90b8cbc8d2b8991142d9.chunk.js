(this.webpackJsonp=this.webpackJsonp||[]).push([[11,15,19],{101:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var n=i(51);class s{constructor(t,e){this.passwordInputField=t,this.size=e,this.needFrame=0,this.container=document.createElement("div"),this.container.classList.add("media-sticker-wrapper")}load(){return this.loadPromise?this.loadPromise:this.loadPromise=n.a.loadAnimationAsAsset({container:this.container,loop:!1,autoplay:!1,width:this.size,height:this.size,noCache:!0},"TwoFactorSetupMonkeyPeek").then(t=>(this.animation=t,this.animation.addEventListener("enterFrame",t=>{(1===this.animation.direction&&t>=this.needFrame||-1===this.animation.direction&&t<=this.needFrame)&&(this.animation.setSpeed(1),this.animation.pause())}),this.passwordInputField.onVisibilityClickAdditional=()=>{this.passwordInputField.passwordVisible?(this.animation.setDirection(1),this.animation.curFrame=0,this.needFrame=16,this.animation.play()):(this.animation.setDirection(-1),this.animation.curFrame=16,this.needFrame=0,this.animation.play())},n.a.waitForFirstFrame(t)))}remove(){this.animation&&this.animation.remove()}}},18:function(t,e,i){"use strict";i.r(e),i.d(e,"ripple",(function(){return l}));var n=i(6),s=i(60),a=i(1),o=i(15);let r=0;function l(t,e=(()=>Promise.resolve()),i=null,l=!1){if(t.querySelector(".c-ripple"))return;t.classList.add("rp");let c=document.createElement("div");c.classList.add("c-ripple");let u;t.classList.contains("rp-square")&&c.classList.add("is-square"),t[l?"prepend":"append"](c);const d=(t,n)=>{const o=Date.now(),l=document.createElement("div"),d=r++,h=1e3*+window.getComputedStyle(c).getPropertyValue("--ripple-duration").replace("s","");u=()=>{let t=Date.now()-o;const e=()=>{s.a.mutate(()=>{l.remove()}),i&&i(d)};if(t<h){let i=Math.max(h-t,h/2);setTimeout(()=>l.classList.add("hiding"),Math.max(i-h/2,0)),setTimeout(e,i)}else l.classList.add("hiding"),setTimeout(e,h/2);a.IS_TOUCH_SUPPORTED||window.removeEventListener("contextmenu",u),u=null,p=!1},e&&e(d),window.requestAnimationFrame(()=>{const e=c.getBoundingClientRect();l.classList.add("c-ripple__circle");const i=t-e.left,s=n-e.top,a=Math.sqrt(Math.pow(Math.abs(s-e.height/2)+e.height/2,2)+Math.pow(Math.abs(i-e.width/2)+e.width/2,2)),o=i-a/2,r=s-a/2;l.style.width=l.style.height=a+"px",l.style.left=o+"px",l.style.top=r+"px",c.append(l)})},h=e=>e.target!==t&&(["BUTTON","A"].includes(e.target.tagName)||Object(n.a)(e.target,"c-ripple")!==c);let p=!1;if(a.IS_TOUCH_SUPPORTED){let e=()=>{u&&u()};t.addEventListener("touchstart",i=>{if(!o.default.settings.animationsEnabled)return;if(i.touches.length>1||p||h(i))return;p=!0;let{clientX:n,clientY:s}=i.touches[0];d(n,s),t.addEventListener("touchend",e,{once:!0}),window.addEventListener("touchmove",i=>{i.cancelBubble=!0,i.stopPropagation(),e(),t.removeEventListener("touchend",e)},{once:!0})},{passive:!0})}else t.addEventListener("mousedown",e=>{if(![0,2].includes(e.button))return;if(!o.default.settings.animationsEnabled)return;if("0"===t.dataset.ripple||h(e))return;if(p)return void(p=!1);let{clientX:i,clientY:n}=e;d(i,n),window.addEventListener("mouseup",u,{once:!0,passive:!0}),window.addEventListener("contextmenu",u,{once:!0,passive:!0})},{passive:!0})}},21:function(t,e,i){"use strict";i.r(e);var n=i(35),s=i(37),a=i(17),o=i(79),r=i(64),l=i(34),c=i(95),u=i(101),d=i(31),h=i(16),p=i(91),m=i(5),g=i(30),v=i(96),f=i(36),b=i(58);let w;const E=new r.a("page-password",!0,()=>{const t=new p.a({className:"page-password",withInputWrapper:!0,titleLangKey:"Login.Password.Title",subtitleLangKey:"Login.Password.Subtitle"}),e=Object(l.a)("btn-primary btn-color-primary"),a=new h.default.IntlElement({key:"Login.Next"});e.append(a.element);const r=new c.a({label:"LoginPassword",name:"password"});let E;w=r.input,t.inputWrapper.append(r.container,e);let L,y=()=>(E||(E=window.setInterval(y,1e4)),o.a.getState().then(t=>{L=t,L.hint?Object(f.a)(r.label,Object(v.a)(d.b.wrapEmojiText(L.hint))):r.setLabel()}));const S=t=>{if(t&&Object(m.a)(t),!w.value.length)return void w.classList.add("error");const s=Object(b.a)([w,e],!0);let l=w.value;a.update({key:"PleaseWait"});const c=Object(n.f)(e);r.setValueSilently(""+Math.random()),r.setValueSilently(l),o.a.check(l,L).then(t=>{switch(t._){case"auth.authorization":clearInterval(E),i.e(4).then(i.bind(null,19)).then(t=>{t.default.mount()}),T&&T.remove();break;default:e.removeAttribute("disabled"),a.update({key:t._}),c.remove()}}).catch(t=>{s(),r.input.classList.add("error"),t.type,a.update({key:"PASSWORD_HASH_INVALID"}),w.select(),c.remove(),y()})};Object(g.b)(e,S),w.addEventListener("keypress",(function(t){if(this.classList.remove("error"),a.update({key:"Login.Next"}),"Enter"===t.key)return S()}));const k=s.b.isMobile?100:166,T=new u.a(r,k);return t.imageDiv.append(T.container),Promise.all([T.load(),y()])},null,()=>{w.focus(),a.default.pushToState("authState",{_:"authStatePassword"})});e.default=E},30:function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return r})),i.d(e,"d",(function(){return l}));var n=i(1),s=i(52);const a=n.IS_TOUCH_SUPPORTED?"mousedown":"click";function o(t,e,i={}){const n=i.listenerSetter?i.listenerSetter.add(t):t.addEventListener.bind(t);i.touchMouseDown=!0,n(a,e,i)}function r(t,e,i){t.removeEventListener(a,e,i)}function l(t){Object(s.a)(t,a)}},34:function(t,e,i){"use strict";var n=i(16),s=i(18);e.a=(t,e={})=>{const i=document.createElement(e.asDiv?"div":"button");return i.className=t+(e.icon?" tgico-"+e.icon:""),e.noRipple||(e.rippleSquare&&i.classList.add("rp-square"),Object(s.ripple)(i)),e.onlyMobile&&i.classList.add("only-handhelds"),e.disabled&&i.setAttribute("disabled","true"),e.text&&i.append(Object(n.i18n)(e.text)),i}},35:function(t,e,i){"use strict";i.d(e,"f",(function(){return d})),i.d(e,"g",(function(){return h})),i.d(e,"c",(function(){return g})),i.d(e,"d",(function(){return w})),i.d(e,"e",(function(){return E})),i.d(e,"b",(function(){return S})),i.d(e,"a",(function(){return k}));var n=i(29),s=i(5),a=i(30),o=i(37),r=i(1),l=i(0),c=i(15),u=i(49);function d(t,e=!1){const i='\n  <svg xmlns="http://www.w3.org/2000/svg" class="preloader-circular" viewBox="25 25 50 50">\n  <circle class="preloader-path" cx="50" cy="50" r="20" fill="none" stroke-miterlimit="10"/>\n  </svg>';if(e){const e=document.createElement("div");return e.classList.add("preloader"),e.innerHTML=i,t&&t.appendChild(e),e}return t.insertAdjacentHTML("beforeend",i),t.lastElementChild}function h(t,e="check"){return t.classList.remove("tgico-"+e),t.disabled=!0,d(t),()=>{t.innerHTML="",t.classList.add("tgico-"+e),t.removeAttribute("disabled")}}n.a.putPreloader=d;let p=t=>{let e=v.getBoundingClientRect(),{clientX:i,clientY:n}=t,s=i>=e.right?i-e.right:e.left-i,a=n>=e.bottom?n-e.bottom:e.top-n;(s>=100||a>=100)&&g()};const m=t=>{g()},g=()=>{v&&(v.classList.remove("active"),v.parentElement.classList.remove("menu-open"),b&&b.remove(),v=null,c.default.dispatchEvent("context_menu_toggle",!1)),f&&(f(),f=null),r.IS_TOUCH_SUPPORTED||(window.removeEventListener("mousemove",p),window.removeEventListener("contextmenu",m)),document.removeEventListener(a.a,m),l.IS_MOBILE_SAFARI||u.a.removeByType("menu")};window.addEventListener("resize",()=>{v&&g()});let v=null,f=null,b=null;function w(t,e){g(),l.IS_MOBILE_SAFARI||u.a.pushItem({type:"menu",onPop:t=>{g()}}),v=t,v.classList.add("active"),v.parentElement.classList.add("menu-open"),b||(b=document.createElement("div"),b.classList.add("btn-menu-overlay"),b.addEventListener(a.a,t=>{Object(s.a)(t),m()})),v.parentElement.insertBefore(b,v),f=e,r.IS_TOUCH_SUPPORTED||(window.addEventListener("mousemove",p),window.addEventListener("contextmenu",m,{once:!0})),document.addEventListener(a.a,m),c.default.dispatchEvent("context_menu_toggle",!0)}function E({pageX:t,pageY:e},i,n){let{scrollWidth:s,scrollHeight:a}=i;const r=document.body.getBoundingClientRect(),l=r.width,c=r.height;n=o.b.isMobile?"right":"left";let u="top";const d={x:{left:t,right:t-s},intermediateX:"right"===n?8:l-s-8,y:{top:e,bottom:e-a},intermediateY:e<c/2?8:c-a-8},h={left:d.x.left+s+8<=l,right:d.x.right>=8},p={top:d.y.top+a+8<=c,bottom:d.y.bottom-8>=8};{let t;t=h[n]?d.x[n]:(n="center",d.intermediateX),i.style.left=t+"px"}{let t;t=p[u]?d.y[u]:(u="center",d.intermediateY),i.style.top=t+"px"}i.className=i.className.replace(/(top|center|bottom)-(left|center|right)/g,""),i.classList.add(("center"===u?u:"bottom")+"-"+("center"===n?n:"left"===n?"right":"left"))}let L=!1,y=0;function S(){y&&clearTimeout(y),y=window.setTimeout(()=>{y=0,L=!1},400),L=!0}function k(t,e,i){const n=i?i.add(t):t.addEventListener.bind(t),a=i?i.removeManual.bind(i,t):t.removeEventListener.bind(t);if(l.IS_APPLE&&r.IS_TOUCH_SUPPORTED){let i;const o={capture:!0},r=()=>{clearTimeout(i),a("touchmove",r,o),a("touchend",r,o),a("touchcancel",r,o)};n("touchstart",a=>{a.touches.length>1?r():(n("touchmove",r,o),n("touchend",r,o),n("touchcancel",r,o),i=window.setTimeout(()=>{L?r():(e(a.touches[0]),r(),v&&t.addEventListener("touchend",s.a,{once:!0}))},400))})}else n("contextmenu",r.IS_TOUCH_SUPPORTED?i=>{e(i),v&&t.addEventListener("touchend",s.a,{once:!0})}:e)}},36:function(t,e,i){"use strict";function n(t,e){if("string"==typeof e)return void(t.innerHTML=e);const i=t.firstChild;i?t.lastChild===i?i.replaceWith(e):(t.textContent="",t.append(e)):t.append(e)}i.d(e,"a",(function(){return n}))},38:function(t,e,i){"use strict";i.d(e,"a",(function(){return d}));var n=i(52),s=i(86),a=i(69),o=i(90);var r=i(16),l=i(31),c=i(57);let u=()=>{document.addEventListener("paste",t=>{if(!Object(s.a)(t.target,'contenteditable="true"'))return;t.preventDefault();let e=(t.originalEvent||t).clipboardData.getData("text/plain"),i=l.b.parseEntities(e);i=i.filter(t=>"messageEntityEmoji"===t._||"messageEntityLinebreak"===t._),e=l.b.wrapRichText(e,{entities:i,noLinks:!0,wrappingDraft:!0}),window.document.execCommand("insertHTML",!1,e)}),u=null};var d;!function(t){t[t.Neutral=0]="Neutral",t[t.Valid=1]="Valid",t[t.Error=2]="Error"}(d||(d={}));e.b=class{constructor(t={}){this.options=t,this.container=document.createElement("div"),this.container.classList.add("input-field"),this.required=t.required,this.validate=t.validate,void 0!==t.maxLength&&void 0===t.showLengthOn&&(t.showLengthOn=Math.min(40,Math.round(t.maxLength/3)));const{placeholder:e,maxLength:i,showLengthOn:n,name:s,plainText:l,canBeEdited:c}=t;let d,h,p=t.label||t.labelText;if(l)this.container.innerHTML=`\n      <input type="text" ${s?`name="${s}"`:""} autocomplete="off" ${p?'required=""':""} class="input-field-input">\n      `,d=this.container.firstElementChild;else{u&&u(),this.container.innerHTML=`\n      <div contenteditable="${String(!!c)}" class="input-field-input"></div>\n      `,d=this.container.firstElementChild;const e=new MutationObserver(()=>{h&&h()});d.addEventListener("input",()=>{Object(o.a)(d)&&(d.innerHTML=""),this.inputFake&&(this.inputFake.innerHTML=d.innerHTML,this.onFakeInput())}),e.observe(d,{characterData:!0,childList:!0,subtree:!0}),t.animate&&(d.classList.add("scrollable","scrollable-y"),this.inputFake=document.createElement("div"),this.inputFake.setAttribute("contenteditable","true"),this.inputFake.className=d.className+" input-field-input-fake")}if(d.setAttribute("dir","auto"),e&&(Object(r._i18n)(d,e,void 0,"placeholder"),this.inputFake&&Object(r._i18n)(this.inputFake,e,void 0,"placeholder")),p||e){const t=document.createElement("div");t.classList.add("input-field-border"),this.container.append(t)}if(p&&(this.label=document.createElement("label"),this.setLabel(),this.container.append(this.label)),i){const t=this.container.lastElementChild;let e=!1;h=()=>{const s=d.classList.contains("error"),o=l?d.value.length:[...Object(a.a)(d,!1).value].length,r=i-o,c=r<0;d.classList.toggle("error",c),c||r<=n?(this.setLabel(),t.append(` (${i-o})`),e||(e=!0)):(s&&!c||e)&&(this.setLabel(),e=!1)},d.addEventListener("input",h)}this.input=d}select(){this.value&&(this.options.plainText?this.input.select():function(t){const e=document.createRange();e.selectNodeContents(t);const i=window.getSelection();i.removeAllRanges(),i.addRange(e)}(this.input))}setLabel(){this.label.textContent="",this.options.labelText?this.label.innerHTML=this.options.labelText:this.label.append(Object(r.i18n)(this.options.label,this.options.labelOptions))}onFakeInput(t=!0){const{scrollHeight:e}=this.inputFake,i=+this.input.style.height.replace("px","");if(i===e)return;const n=Math.round(50*Math.log(Math.abs(e-i)));this.input.style.transitionDuration=n+"ms",t&&(this.input.style.height=e?e+"px":"");Object(c.a)(this.input,"is-changing-height",!0,n,()=>{this.input.classList.remove("is-changing-height")})}get value(){return this.options.plainText?this.input.value:Object(a.a)(this.input,!1).value}set value(t){this.setValueSilently(t,!1),Object(n.a)(this.input,"input")}setValueSilently(t,e=!0){this.options.plainText?this.input.value=t:(this.input.innerHTML=t,this.inputFake&&(this.inputFake.innerHTML=t,e&&this.onFakeInput()))}isChanged(){return this.value!==this.originalValue}isValid(){return!this.input.classList.contains("error")&&(!this.validate||this.validate())&&(!this.required||!Object(o.a)(this.input))}isValidToChange(){return this.isValid()&&this.isChanged()}setDraftValue(t="",e=!1){this.options.plainText||(t=l.b.wrapDraftText(t)),e?this.setValueSilently(t,!1):this.value=t}setOriginalValue(t="",e=!1){this.originalValue=t,this.setDraftValue(t,e)}setState(t,e){e&&(this.label.textContent="",this.label.append(Object(r.i18n)(e,this.options.labelOptions))),this.input.classList.toggle("error",!!(t&d.Error)),this.input.classList.toggle("valid",!!(t&d.Valid))}setError(t){this.setState(d.Error,t)}}},49:function(t,e,i){"use strict";var n=i(29),s=i(0),a=i(43),o=i(7),r=i(5),l=i(41),c=i(72);const u=new class{constructor(){this.navigations=[],this.id=Date.now(),this.manual=!1,this.log=Object(a.b)("NC"),this.debug=!0,this.currentHash=window.location.hash;let t=!1;if(window.addEventListener("popstate",e=>{if(this.debug&&this.log("popstate",e,t),window.location.hash!==this.currentHash)return this.onHashChange&&this.onHashChange(),void this.replaceState();this.currentHash=window.location.hash;if(e.state!==this.id)return void this.pushState();const i=this.navigations.pop();i?(this.manual=!t,this.handleItem(i)):this.pushState()}),window.addEventListener("keydown",t=>{const e=this.navigations[this.navigations.length-1];e&&("Escape"!==t.key||e.onEscape&&!e.onEscape()||(Object(r.a)(t),this.back(e.type)))},{capture:!0,passive:!1}),s.IS_MOBILE_SAFARI){const e={passive:!0};window.addEventListener("touchstart",e=>{e.touches.length>1||(this.debug&&this.log("touchstart"),Object(c.a)(e)&&(t=!0,window.addEventListener("touchend",()=>{setTimeout(()=>{t=!1},100)},{passive:!0,once:!0})))},e)}history.scrollRestoration="manual",this.pushState()}handleItem(t){const e=t.onPop(!!this.manual&&void 0);this.debug&&this.log("popstate, navigation:",t,this.navigations),!1===e?this.pushItem(t):t.noBlurOnPop||Object(o.a)(),this.manual=!1}findItemByType(t){for(let e=this.navigations.length-1;e>=0;--e){const i=this.navigations[e];if(i.type===t)return{item:i,index:e}}}back(t){if(t){const e=this.findItemByType(t);if(e)return void this.backByItem(e.item,e.index)}history.back()}backByItem(t,e=this.navigations.indexOf(t)){this.manual=!0,this.navigations.splice(e,1),this.handleItem(t)}pushItem(t){this.navigations.push(t),this.debug&&this.log("pushstate",t,this.navigations),t.noHistory||this.pushState()}pushState(){this.manual=!1,history.pushState(this.id,"")}replaceState(){history.replaceState(this.id,"",location.origin+location.pathname)}removeItem(t){t&&Object(l.e)(this.navigations,t)}removeByType(t,e=!1){for(let i=this.navigations.length-1;i>=0;--i){if(this.navigations[i].type===t&&(this.navigations.splice(i,1),e))break}}};n.a.appNavigationController=u,e.a=u},52:function(t,e,i){"use strict";function n(t,e){const i=new Event(e,{bubbles:!0,cancelable:!0});t.dispatchEvent(i)}i.d(e,"a",(function(){return n}))},57:function(t,e,i){"use strict";var n=i(15);const s=(t,e,i,a,o,r)=>{const{timeout:l,raf:c}=t.dataset;if(void 0!==l&&clearTimeout(+l),void 0!==c&&(window.cancelAnimationFrame(+c),r||delete t.dataset.raf),r&&n.default.settings.animationsEnabled&&a)return void(t.dataset.raf=""+window.requestAnimationFrame(()=>{delete t.dataset.raf,s(t,e,i,a,o,r-1)}));i&&e&&t.classList.add(e);const u=()=>{delete t.dataset.timeout,!i&&e&&t.classList.remove("backwards",e),t.classList.remove("animating"),o&&o()};if(!n.default.settings.animationsEnabled||!a)return t.classList.remove("animating","backwards"),void u();t.classList.add("animating"),t.classList.toggle("backwards",!i),t.dataset.timeout=""+setTimeout(u,a)};e.a=s},58:function(t,e,i){"use strict";function n(t,e){return e?t.forEach(t=>t.setAttribute("disabled","true")):t.forEach(t=>t.removeAttribute("disabled")),()=>n(t,!e)}i.d(e,"a",(function(){return n}))},60:function(t,e,i){"use strict";var n=i(42),s=i(46),a=i(29),o=i(61);const r=new class{constructor(){this.promises={},this.raf=n.b.bind(null),this.scheduled=!1}do(t,e){let i=this.promises[t];return i||(this.scheduleFlush(),i=this.promises[t]=Object(s.a)()),void 0!==e&&i.then(()=>e()),i}measure(t){return this.do("read",t)}mutate(t){return this.do("write",t)}mutateElement(t,e){const i=Object(o.a)(t)?this.mutate():Promise.resolve();return void 0!==e&&i.then(()=>e()),i}scheduleFlush(){this.scheduled||(this.scheduled=!0,this.raf(()=>{this.promises.read&&this.promises.read.resolve(),this.promises.write&&this.promises.write.resolve(),this.scheduled=!1,this.promises={}}))}};a.a&&(a.a.sequentialDom=r),e.a=r},69:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var n=i(29),s=i(31),a=i(87);function o(t,e=!0){const i=[],n=[],o=e?[]:void 0;Object(a.a)(t,i,n,void 0,void 0,o),n.length&&i.push(n.join(""));let r=i.join("\n");return r=r.replace(/\u00A0/g," "),o&&s.b.combineSameEntities(o),{value:r,entities:o}}n.a.getRichValue=o},72:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var n=i(0);function s(t){return n.IS_MOBILE_SAFARI&&t instanceof TouchEvent&&t.touches[0].clientX<30}},79:function(t,e,i){"use strict";var n=i(29),s=i(33);const a=new class{getState(){return s.a.invokeApi("account.getPassword").then(t=>t)}updateSettings(t={}){return this.getState().then(e=>{let i,n;const a={password:null,new_settings:{_:"account.passwordInputSettings",hint:t.hint,email:t.email}};i=t.currentPassword?s.a.invokeCrypto("computeSRP",t.currentPassword,e,!1):Promise.resolve({_:"inputCheckPasswordEmpty"});const o=e.new_algo,r=new Uint8Array(o.salt1.length+32);return r.randomize(),r.set(o.salt1,0),o.salt1=r,n=t.newPassword?s.a.invokeCrypto("computeSRP",t.newPassword,e,!0):Promise.resolve(new Uint8Array),Promise.all([i,n]).then(t=>(a.password=t[0],a.new_settings.new_algo=o,a.new_settings.new_password_hash=t[1],s.a.invokeApi("account.updatePasswordSettings",a)))})}check(t,e,i={}){return s.a.invokeCrypto("computeSRP",t,e,!1).then(t=>s.a.invokeApi("auth.checkPassword",{password:t},i).then(t=>("auth.authorization"===t._&&s.a.setUser(t.user),t)))}confirmPasswordEmail(t){return s.a.invokeApi("account.confirmPasswordEmail",{code:t})}resendPasswordEmail(){return s.a.invokeApi("account.resendPasswordEmail")}cancelPasswordEmail(){return s.a.invokeApi("account.cancelPasswordEmail")}};n.a.passwordManager=a,e.a=a},86:function(t,e,i){"use strict";function n(t,e){return t.closest(`[${e}]`)}i.d(e,"a",(function(){return n}))},87:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"a",(function(){return s}));const n={bold:{match:'[style*="font-weight"], b',entityName:"messageEntityBold"},underline:{match:'[style*="underline"], u',entityName:"messageEntityUnderline"},italic:{match:'[style*="italic"], i',entityName:"messageEntityItalic"},monospace:{match:'[style*="monospace"], [face="monospace"], pre',entityName:"messageEntityPre"},strikethrough:{match:'[style*="line-through"], strike',entityName:"messageEntityStrike"},link:{match:"A:not(.follow)",entityName:"messageEntityTextUrl"},mentionName:{match:"A.follow",entityName:"messageEntityMentionName"}};function s(t,e,i,a,o,r,l={offset:0}){if(3===t.nodeType){const e=t.nodeValue;if(a===t?i.push(e.substr(0,o)+""+e.substr(o)):i.push(e),r&&e.trim()&&t.parentNode){const i=t.parentElement;for(const t in n){const s=n[t],a=i.closest(s.match+", [contenteditable]");a&&null===a.getAttribute("contenteditable")&&("messageEntityTextUrl"===s.entityName?r.push({_:s.entityName,url:i.href,offset:l.offset,length:e.length}):"messageEntityMentionName"===s.entityName?r.push({_:s.entityName,offset:l.offset,length:e.length,user_id:i.dataset.follow.toUserId()}):r.push({_:s.entityName,offset:l.offset,length:e.length}))}}return void(l.offset+=e.length)}if(1!==t.nodeType)return;const c=a===t,u="DIV"===t.tagName||"P"===t.tagName;if(u&&i.length||"BR"===t.tagName)e.push(i.join("")),i.splice(0,i.length);else if(t instanceof HTMLImageElement){const e=t.alt;e&&(i.push(e),l.offset+=e.length)}c&&!o&&i.push("");let d=t.firstChild;for(;d;)s(d,e,i,a,o,r,l),d=d.nextSibling;c&&o&&i.push(""),u&&i.length&&(e.push(i.join("")),i.splice(0,i.length))}},90:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var n=i(69);function s(t){return t.hasAttribute("contenteditable")||"INPUT"!==t.tagName?!Object(n.a)(t,!1).value.trim():!t.value.trim()}},91:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var n=i(16);class s{constructor(t){this.element=document.body.querySelector("."+t.className),this.container=document.createElement("div"),this.container.className="container center-align",this.imageDiv=document.createElement("div"),this.imageDiv.className="auth-image",this.title=document.createElement("h4"),t.titleLangKey&&this.title.append(Object(n.i18n)(t.titleLangKey)),this.subtitle=document.createElement("p"),this.subtitle.className="subtitle",t.subtitleLangKey&&this.subtitle.append(Object(n.i18n)(t.subtitleLangKey)),this.container.append(this.imageDiv,this.title,this.subtitle),t.withInputWrapper&&(this.inputWrapper=document.createElement("div"),this.inputWrapper.className="input-wrapper",this.container.append(this.inputWrapper)),this.element.append(this.container)}}},95:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var n=i(5),s=i(38);class a extends s.b{constructor(t={}){super(Object.assign({plainText:!0},t)),this.passwordVisible=!1,this.onVisibilityClick=t=>{Object(n.a)(t),this.passwordVisible=!this.passwordVisible,this.toggleVisible.classList.toggle("eye-hidden",this.passwordVisible),this.input.type=this.passwordVisible?"text":"password",this.onVisibilityClickAdditional&&this.onVisibilityClickAdditional()};const e=this.input;e.type="password",e.setAttribute("required",""),e.name="notsearch_password",e.autocomplete="off";const i=document.createElement("input");i.classList.add("stealthy"),i.tabIndex=-1,i.type="password",e.parentElement.prepend(i),e.parentElement.insertBefore(i.cloneNode(),e.nextSibling);const s=this.toggleVisible=document.createElement("span");s.classList.add("toggle-visible","tgico"),this.container.classList.add("input-field-password"),this.container.append(s),s.addEventListener("click",this.onVisibilityClick),s.addEventListener("touchend",this.onVisibilityClick)}}},96:function(t,e,i){"use strict";function n(t){const e=document.createElement("span");return e.innerHTML=t,e}i.d(e,"a",(function(){return n}))}}]);
//# sourceMappingURL=11.90b8cbc8d2b8991142d9.chunk.js.map