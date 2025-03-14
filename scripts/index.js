var tt=3,nt="input--error";function Tr(e,t){e.forEach(r=>{r.classList.remove(nt)}),t.textContent=""}function ie(e,t,r){e.classList.add(nt),t.textContent=r}function vr(e){let t=[];return e.forEach(r=>{r.value.trim()||t.push({input:r,message:"Fill in all fields!"})}),t}function Mr(e,{name:t,position:r,phone:n}){return e.some(i=>i.name?.toLowerCase()===t.toLowerCase()&&i.position?.toLowerCase()===r.toLowerCase()&&i.phone===n)?[{input:null,message:"This contact has already been recorded!"}]:[]}function rt(e,t){let r=[],n=/^[a-zA-Z]+$/;return e.value.length<t&&r.push({input:e,message:`Value cannot be shorter than ${t} letters!`}),n.test(e.value)||r.push({input:e,message:"Value must contain English letters!"}),r}function Nr(e){return/^\+7 \d{3} \d{3} \d{2} \d{2}$/.test(e.value)?[]:[{input:e,message:"Wrong number!"}]}function se({inputs:e,storage:t,errorMessage:r}){let[n,o,i]=e;Tr(e,r);let s=vr(e);if(s.length>0)return{isValid:!1,errors:s};let a={name:n.value,position:o.value,phone:i.value},c=Mr(t,a);if(c.length>0)return{isValid:!1,errors:c};let l=rt(n,tt);if(l.length>0)return{isValid:!1,errors:l};let u=rt(o,tt);if(u.length>0)return{isValid:!1,errors:u};let d=Nr(i);return d.length>0?{isValid:!1,errors:d}:{isValid:!0,errors:[]}}var ot=".body",Ae="#letter",it="#message",st="#search-modal-content",ae=".element",Le="element--active",at=".element__letter",X=".element__contacts",Ie="element__contacts--open",ce=".element__counter",De="element__counter--active",J=".column__element",I=".message",k=".message__name",q=".message__position",B=".message__phone",Pe=".contact-table",Q=".js-delete-contact-button",H=".js-edit-contact-button",ct=".js-clear-contact-button",ut=".js-search-contact-button",lt="#edit-popup-content",dt="#popup-name",ft="#popup-position",pt="#popup-phone",mt=".popup__error",ht=".modal",Et=".modal__title",yt=".modal__body",_t=".modal__input",ue=".modal__search-area",le=".modal__button-show",gt=".modal__close-button",wt=".modal__overlay",Ot=".form",bt="name",Ct="position",St="phone",Tt=".form__error",vt=".form__buttons",Mt=".form__button--popup-save";var U=class{constructor(t,r){this.counterElement=t,this.contactsContainer=r,this.count=0}increase(){this.count++,this.update()}decrease(){this.count>0&&(this.count--,this.update())}reset(){this.count=0,this.update()}update(){let t=this.contactsContainer.parentElement;t&&(this.count>0?(this.counterElement.classList.add(De),t.classList.add(Le)):(this.counterElement.classList.remove(De),t.classList.remove(Le))),this.counterElement.textContent=this.count.toString()}};var Nt=e=>e.key==="Escape";var O=document.querySelector(ht),At=document.querySelector(ot);function de(e){O.showModal(),At.style.overflow="hidden";let t=O.querySelector(yt);t.innerHTML="";let r=e.content.cloneNode(!0);t.appendChild(r),O.querySelector("input").focus(),document.addEventListener("keydown",fe)}function Z(){O.close(),At.style.overflow="auto",document.removeEventListener("keydown",fe)}function fe(e){Nt(e)&&(e.preventDefault(),Z())}var pe=e=>{let t="";e.addEventListener("input",()=>{let r=e.value.replace(/\D/g,"");if(r.length<t.length){t=r;return}r.length===1&&r[0]!=="7"&&(r=`7${r}`);let n="+7 ";r.length>1&&(n+=r.substring(1,4)),r.length>4&&(n+=` ${r.substring(4,7)}`),r.length>7&&(n+=` ${r.substring(7,9)}`),r.length>9&&(n+=` ${r.substring(9,11)}`),e.value=n,t=r})};function T(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var Ar=typeof Symbol=="function"&&Symbol.observable||"@@observable",Lt=Ar,xe=()=>Math.random().toString(36).substring(7).split("").join("."),Lr={INIT:`@@redux/INIT${xe()}`,REPLACE:`@@redux/REPLACE${xe()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${xe()}`},me=Lr;function he(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function ke(e,t,r){if(typeof e!="function")throw new Error(T(2));if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(T(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(T(1));return r(ke)(e,t)}let n=e,o=t,i=new Map,s=i,a=0,c=!1;function l(){s===i&&(s=new Map,i.forEach((y,S)=>{s.set(S,y)}))}function u(){if(c)throw new Error(T(3));return o}function d(y){if(typeof y!="function")throw new Error(T(4));if(c)throw new Error(T(5));let S=!0;l();let f=a++;return s.set(f,y),function(){if(S){if(c)throw new Error(T(6));S=!1,l(),s.delete(f),i=null}}}function m(y){if(!he(y))throw new Error(T(7));if(typeof y.type>"u")throw new Error(T(8));if(typeof y.type!="string")throw new Error(T(17));if(c)throw new Error(T(9));try{c=!0,o=n(o,y)}finally{c=!1}return(i=s).forEach(f=>{f()}),y}function h(y){if(typeof y!="function")throw new Error(T(10));n=y,m({type:me.REPLACE})}function _(){let y=d;return{subscribe(S){if(typeof S!="object"||S===null)throw new Error(T(11));function f(){let b=S;b.next&&b.next(u())}return f(),{unsubscribe:y(f)}},[Lt](){return this}}}return m({type:me.INIT}),{dispatch:m,subscribe:d,getState:u,replaceReducer:h,[Lt]:_}}function Ir(e){Object.keys(e).forEach(t=>{let r=e[t];if(typeof r(void 0,{type:me.INIT})>"u")throw new Error(T(12));if(typeof r(void 0,{type:me.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(T(13))})}function It(e){let t=Object.keys(e),r={};for(let s=0;s<t.length;s++){let a=t[s];typeof e[a]=="function"&&(r[a]=e[a])}let n=Object.keys(r),o,i;try{Ir(r)}catch(s){i=s}return function(a={},c){if(i)throw i;let l=!1,u={};for(let d=0;d<n.length;d++){let m=n[d],h=r[m],_=a[m],w=h(_,c);if(typeof w>"u"){let y=c&&c.type;throw new Error(T(14))}u[m]=w,l=l||w!==_}return l=l||n.length!==Object.keys(a).length,l?u:a}}function W(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,r)=>(...n)=>t(r(...n)))}function Dt(...e){return t=>(r,n)=>{let o=t(r,n),i=()=>{throw new Error(T(15))},s={getState:o.getState,dispatch:(c,...l)=>i(c,...l)},a=e.map(c=>c(s));return i=W(...a)(o.dispatch),{...o,dispatch:i}}}function Pt(e){return he(e)&&"type"in e&&typeof e.type=="string"}var zt=Symbol.for("immer-nothing"),xt=Symbol.for("immer-draftable"),v=Symbol.for("immer-state");function A(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var K=Object.getPrototypeOf;function R(e){return!!e&&!!e[v]}function L(e){return e?Ht(e)||Array.isArray(e)||!!e[xt]||!!e.constructor?.[xt]||we(e)||Oe(e):!1}var Dr=Object.prototype.constructor.toString();function Ht(e){if(!e||typeof e!="object")return!1;let t=K(e);if(t===null)return!0;let r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object?!0:typeof r=="function"&&Function.toString.call(r)===Dr}function Ee(e,t){ge(e)===0?Reflect.ownKeys(e).forEach(r=>{t(r,e[r],e)}):e.forEach((r,n)=>t(n,r,e))}function ge(e){let t=e[v];return t?t.type_:Array.isArray(e)?1:we(e)?2:Oe(e)?3:0}function je(e,t){return ge(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function $t(e,t,r){let n=ge(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function Pr(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function we(e){return e instanceof Map}function Oe(e){return e instanceof Set}function $(e){return e.copy_||e.base_}function ze(e,t){if(we(e))return new Map(e);if(Oe(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);let r=Ht(e);if(t===!0||t==="class_only"&&!r){let n=Object.getOwnPropertyDescriptors(e);delete n[v];let o=Reflect.ownKeys(n);for(let i=0;i<o.length;i++){let s=o[i],a=n[s];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(n[s]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[s]})}return Object.create(K(e),n)}else{let n=K(e);if(n!==null&&r)return{...e};let o=Object.create(n);return Object.assign(o,e)}}function Be(e,t=!1){return be(e)||R(e)||!L(e)||(ge(e)>1&&(e.set=e.add=e.clear=e.delete=xr),Object.freeze(e),t&&Object.entries(e).forEach(([r,n])=>Be(n,!0))),e}function xr(){A(2)}function be(e){return Object.isFrozen(e)}var kr={};function F(e){let t=kr[e];return t||A(0,e),t}var ee;function Ft(){return ee}function Rr(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function kt(e,t){t&&(F("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function He(e){$e(e),e.drafts_.forEach(Vr),e.drafts_=null}function $e(e){e===ee&&(ee=e.parent_)}function Rt(e){return ee=Rr(ee,e)}function Vr(e){let t=e[v];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function Vt(e,t){t.unfinalizedDrafts_=t.drafts_.length;let r=t.drafts_[0];return e!==void 0&&e!==r?(r[v].modified_&&(He(t),A(4)),L(e)&&(e=ye(t,e),t.parent_||_e(t,e)),t.patches_&&F("Patches").generateReplacementPatches_(r[v].base_,e,t.patches_,t.inversePatches_)):e=ye(t,r,[]),He(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==zt?e:void 0}function ye(e,t,r){if(be(t))return t;let n=t[v];if(!n)return Ee(t,(o,i)=>jt(e,n,t,o,i,r)),t;if(n.scope_!==e)return t;if(!n.modified_)return _e(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;let o=n.copy_,i=o,s=!1;n.type_===3&&(i=new Set(o),o.clear(),s=!0),Ee(i,(a,c)=>jt(e,n,o,a,c,r,s)),_e(e,o,!1),r&&e.patches_&&F("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function jt(e,t,r,n,o,i,s){if(R(o)){let a=i&&t&&t.type_!==3&&!je(t.assigned_,n)?i.concat(n):void 0,c=ye(e,o,a);if($t(r,n,c),R(c))e.canAutoFreeze_=!1;else return}else s&&r.add(o);if(L(o)&&!be(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;ye(e,o),(!t||!t.scope_.parent_)&&typeof n!="symbol"&&Object.prototype.propertyIsEnumerable.call(r,n)&&_e(e,o)}}function _e(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Be(t,r)}function jr(e,t){let r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:Ft(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1},o=n,i=Ue;r&&(o=[n],i=te);let{revoke:s,proxy:a}=Proxy.revocable(o,i);return n.draft_=a,n.revoke_=s,a}var Ue={get(e,t){if(t===v)return e;let r=$(e);if(!je(r,t))return zr(e,r,t);let n=r[t];return e.finalized_||!L(n)?n:n===Re(e.base_,t)?(Ve(e),e.copy_[t]=qe(n,e)):n},has(e,t){return t in $(e)},ownKeys(e){return Reflect.ownKeys($(e))},set(e,t,r){let n=qt($(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){let o=Re($(e),t),i=o?.[v];if(i&&i.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(Pr(r,o)&&(r!==void 0||je(e.base_,t)))return!0;Ve(e),Fe(e)}return e.copy_[t]===r&&(r!==void 0||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty(e,t){return Re(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,Ve(e),Fe(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){let r=$(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty(){A(11)},getPrototypeOf(e){return K(e.base_)},setPrototypeOf(){A(12)}},te={};Ee(Ue,(e,t)=>{te[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});te.deleteProperty=function(e,t){return te.set.call(this,e,t,void 0)};te.set=function(e,t,r){return Ue.set.call(this,e[0],t,r,e[0])};function Re(e,t){let r=e[v];return(r?$(r):e)[t]}function zr(e,t,r){let n=qt(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}function qt(e,t){if(!(t in e))return;let r=K(e);for(;r;){let n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=K(r)}}function Fe(e){e.modified_||(e.modified_=!0,e.parent_&&Fe(e.parent_))}function Ve(e){e.copy_||(e.copy_=ze(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var Hr=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,r,n)=>{if(typeof t=="function"&&typeof r!="function"){let i=r;r=t;let s=this;return function(c=i,...l){return s.produce(c,u=>r.call(this,u,...l))}}typeof r!="function"&&A(6),n!==void 0&&typeof n!="function"&&A(7);let o;if(L(t)){let i=Rt(this),s=qe(t,void 0),a=!0;try{o=r(s),a=!1}finally{a?He(i):$e(i)}return kt(i,n),Vt(o,i)}else if(!t||typeof t!="object"){if(o=r(t),o===void 0&&(o=t),o===zt&&(o=void 0),this.autoFreeze_&&Be(o,!0),n){let i=[],s=[];F("Patches").generateReplacementPatches_(t,o,i,s),n(i,s)}return o}else A(1,t)},this.produceWithPatches=(t,r)=>{if(typeof t=="function")return(s,...a)=>this.produceWithPatches(s,c=>t(c,...a));let n,o;return[this.produce(t,r,(s,a)=>{n=s,o=a}),n,o]},typeof e?.autoFreeze=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof e?.useStrictShallowCopy=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){L(e)||A(8),R(e)&&(e=$r(e));let t=Rt(this),r=qe(e,void 0);return r[v].isManual_=!0,$e(t),r}finishDraft(e,t){let r=e&&e[v];(!r||!r.isManual_)&&A(9);let{scope_:n}=r;return kt(n,t),Vt(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){let o=t[r];if(o.path.length===0&&o.op==="replace"){e=o.value;break}}r>-1&&(t=t.slice(r+1));let n=F("Patches").applyPatches_;return R(e)?n(e,t):this.produce(e,o=>n(o,t))}};function qe(e,t){let r=we(e)?F("MapSet").proxyMap_(e,t):Oe(e)?F("MapSet").proxySet_(e,t):jr(e,t);return(t?t.scope_:Ft()).drafts_.push(r),r}function $r(e){return R(e)||A(10,e),Bt(e)}function Bt(e){if(!L(e)||be(e))return e;let t=e[v],r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=ze(e,t.scope_.immer_.useStrictShallowCopy_)}else r=ze(e,!0);return Ee(r,(n,o)=>{$t(r,n,Bt(o))}),t&&(t.finalized_=!1),r}var M=new Hr,Ce=M.produce,Hn=M.produceWithPatches.bind(M),$n=M.setAutoFreeze.bind(M),Fn=M.setUseStrictShallowCopy.bind(M),qn=M.applyPatches.bind(M),Bn=M.createDraft.bind(M),Un=M.finishDraft.bind(M);function Ut(e){return({dispatch:r,getState:n})=>o=>i=>typeof i=="function"?i(r,n,e):o(i)}var Wt=Ut(),Kt=Ut;var Fr=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?W:W.apply(null,arguments)},Jn=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__:function(){return function(e){return e}},qr=e=>e&&typeof e.match=="function";function V(e,t){function r(...n){if(t){let o=t(...n);if(!o)throw new Error(D(0));return{type:e,payload:o.payload,..."meta"in o&&{meta:o.meta},..."error"in o&&{error:o.error}}}return{type:e,payload:n[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=n=>Pt(n)&&n.type===e,r}var Zt=class re extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,re.prototype)}static get[Symbol.species](){return re}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new re(...t[0].concat(this)):new re(...t.concat(this))}};function Gt(e){return L(e)?Ce(e,()=>{}):e}function Yt(e,t,r){return e.has(t)?e.get(t):e.set(t,r(t)).get(t)}function Br(e){return typeof e=="boolean"}var Ur=()=>function(t){let{thunk:r=!0,immutableCheck:n=!0,serializableCheck:o=!0,actionCreatorCheck:i=!0}=t??{},s=new Zt;return r&&(Br(r)?s.push(Wt):s.push(Kt(r.extraArgument))),s},Wr="RTK_autoBatch";var Xt=e=>t=>{setTimeout(t,e)},Kr=(e={type:"raf"})=>t=>(...r)=>{let n=t(...r),o=!0,i=!1,s=!1,a=new Set,c=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Xt(10):e.type==="callback"?e.queueNotification:Xt(e.timeout),l=()=>{s=!1,i&&(i=!1,a.forEach(u=>u()))};return Object.assign({},n,{subscribe(u){let d=()=>o&&u(),m=n.subscribe(d);return a.add(u),()=>{m(),a.delete(u)}},dispatch(u){try{return o=!u?.meta?.[Wr],i=!o,i&&(s||(s=!0,c(l))),n.dispatch(u)}finally{o=!0}}})},Gr=e=>function(r){let{autoBatch:n=!0}=r??{},o=new Zt(e);return n&&o.push(Kr(typeof n=="object"?n:void 0)),o};function er(e){let t=Ur(),{reducer:r=void 0,middleware:n,devTools:o=!0,preloadedState:i=void 0,enhancers:s=void 0}=e||{},a;if(typeof r=="function")a=r;else if(he(r))a=It(r);else throw new Error(D(1));let c;typeof n=="function"?c=n(t):c=t();let l=W;o&&(l=Fr({trace:!1,...typeof o=="object"&&o}));let u=Dt(...c),d=Gr(u),m=typeof s=="function"?s(d):d(),h=l(...m);return ke(a,i,h)}function tr(e){let t={},r=[],n,o={addCase(i,s){let a=typeof i=="string"?i:i.type;if(!a)throw new Error(D(28));if(a in t)throw new Error(D(29));return t[a]=s,o},addMatcher(i,s){return r.push({matcher:i,reducer:s}),o},addDefaultCase(i){return n=i,o}};return e(o),[t,r,n]}function Yr(e){return typeof e=="function"}function Xr(e,t){let[r,n,o]=tr(t),i;if(Yr(e))i=()=>Gt(e());else{let a=Gt(e);i=()=>a}function s(a=i(),c){let l=[r[c.type],...n.filter(({matcher:u})=>u(c)).map(({reducer:u})=>u)];return l.filter(u=>!!u).length===0&&(l=[o]),l.reduce((u,d)=>{if(d)if(R(u)){let h=d(u,c);return h===void 0?u:h}else{if(L(u))return Ce(u,m=>d(m,c));{let m=d(u,c);if(m===void 0){if(u===null)return u;throw Error("A case reducer on a non-draftable value must not return undefined")}return m}}return u},a)}return s.getInitialState=i,s}var Jr=(e,t)=>qr(e)?e.match(t):e(t);function Qr(...e){return t=>e.some(r=>Jr(r,t))}var Zr="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",en=(e=21)=>{let t="",r=e;for(;r--;)t+=Zr[Math.random()*64|0];return t},tn=["name","message","stack","code"],We=class{constructor(e,t){this.payload=e,this.meta=t}_type},Jt=class{constructor(e,t){this.payload=e,this.meta=t}_type},rn=e=>{if(typeof e=="object"&&e!==null){let t={};for(let r of tn)typeof e[r]=="string"&&(t[r]=e[r]);return t}return{message:String(e)}},Qt="External signal was aborted",nn=(()=>{function e(t,r,n){let o=V(t+"/fulfilled",(c,l,u,d)=>({payload:c,meta:{...d||{},arg:u,requestId:l,requestStatus:"fulfilled"}})),i=V(t+"/pending",(c,l,u)=>({payload:void 0,meta:{...u||{},arg:l,requestId:c,requestStatus:"pending"}})),s=V(t+"/rejected",(c,l,u,d,m)=>({payload:d,error:(n&&n.serializeError||rn)(c||"Rejected"),meta:{...m||{},arg:u,requestId:l,rejectedWithValue:!!d,requestStatus:"rejected",aborted:c?.name==="AbortError",condition:c?.name==="ConditionError"}}));function a(c,{signal:l}={}){return(u,d,m)=>{let h=n?.idGenerator?n.idGenerator(c):en(),_=new AbortController,w,y;function S(p){y=p,_.abort()}l&&(l.aborted?S(Qt):l.addEventListener("abort",()=>S(Qt),{once:!0}));let f=async function(){let p;try{let C=n?.condition?.(c,{getState:d,extra:m});if(sn(C)&&(C=await C),C===!1||_.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};let N=new Promise((E,x)=>{w=()=>{x({name:"AbortError",message:y||"Aborted"})},_.signal.addEventListener("abort",w)});u(i(h,c,n?.getPendingMeta?.({requestId:h,arg:c},{getState:d,extra:m}))),p=await Promise.race([N,Promise.resolve(r(c,{dispatch:u,getState:d,extra:m,requestId:h,signal:_.signal,abort:S,rejectWithValue:(E,x)=>new We(E,x),fulfillWithValue:(E,x)=>new Jt(E,x)})).then(E=>{if(E instanceof We)throw E;return E instanceof Jt?o(E.payload,h,c,E.meta):o(E,h,c)})])}catch(C){p=C instanceof We?s(null,h,c,C.payload,C.meta):s(C,h,c)}finally{w&&_.signal.removeEventListener("abort",w)}return n&&!n.dispatchConditionRejection&&s.match(p)&&p.meta.condition||u(p),p}();return Object.assign(f,{abort:S,requestId:h,arg:c,unwrap(){return f.then(on)}})}}return Object.assign(a,{pending:i,rejected:s,fulfilled:o,settled:Qr(s,o),typePrefix:t})}return e.withTypes=()=>e,e})();function on(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function sn(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var rr=Symbol.for("rtk-slice-createasyncthunk"),ro={[rr]:nn};function an(e,t){return`${e}/${t}`}function cn({creators:e}={}){let t=e?.asyncThunk?.[rr];return function(n){let{name:o,reducerPath:i=o}=n;if(!o)throw new Error(D(11));typeof process<"u";let s=(typeof n.reducers=="function"?n.reducers(ln()):n.reducers)||{},a=Object.keys(s),c={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},l={addCase(f,p){let b=typeof f=="string"?f:f.type;if(!b)throw new Error(D(12));if(b in c.sliceCaseReducersByType)throw new Error(D(13));return c.sliceCaseReducersByType[b]=p,l},addMatcher(f,p){return c.sliceMatchers.push({matcher:f,reducer:p}),l},exposeAction(f,p){return c.actionCreators[f]=p,l},exposeCaseReducer(f,p){return c.sliceCaseReducersByName[f]=p,l}};a.forEach(f=>{let p=s[f],b={reducerName:f,type:an(o,f),createNotation:typeof n.reducers=="function"};fn(p)?mn(b,p,l,t):dn(b,p,l)});function u(){let[f={},p=[],b=void 0]=typeof n.extraReducers=="function"?tr(n.extraReducers):[n.extraReducers],C={...f,...c.sliceCaseReducersByType};return Xr(n.initialState,N=>{for(let E in C)N.addCase(E,C[E]);for(let E of c.sliceMatchers)N.addMatcher(E.matcher,E.reducer);for(let E of p)N.addMatcher(E.matcher,E.reducer);b&&N.addDefaultCase(b)})}let d=f=>f,m=new Map,h;function _(f,p){return h||(h=u()),h(f,p)}function w(){return h||(h=u()),h.getInitialState()}function y(f,p=!1){function b(N){let E=N[f];return typeof E>"u"&&p&&(E=w()),E}function C(N=d){let E=Yt(m,p,()=>new WeakMap);return Yt(E,N,()=>{let x={};for(let[Cr,Sr]of Object.entries(n.selectors??{}))x[Cr]=un(Sr,N,w,p);return x})}return{reducerPath:f,getSelectors:C,get selectors(){return C(b)},selectSlice:b}}let S={name:o,reducer:_,actions:c.actionCreators,caseReducers:c.sliceCaseReducersByName,getInitialState:w,...y(i),injectInto(f,{reducerPath:p,...b}={}){let C=p??i;return f.inject({reducerPath:C,reducer:_},b),{...S,...y(C,!0)}}};return S}}function un(e,t,r,n){function o(i,...s){let a=t(i);return typeof a>"u"&&n&&(a=r()),e(a,...s)}return o.unwrapped=e,o}var nr=cn();function ln(){function e(t,r){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...r}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...r){return t(...r)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,r){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:r}},asyncThunk:e}}function dn({type:e,reducerName:t,createNotation:r},n,o){let i,s;if("reducer"in n){if(r&&!pn(n))throw new Error(D(17));i=n.reducer,s=n.prepare}else i=n;o.addCase(e,i).exposeCaseReducer(t,i).exposeAction(t,s?V(e,s):V(e))}function fn(e){return e._reducerDefinitionType==="asyncThunk"}function pn(e){return e._reducerDefinitionType==="reducerWithPrepare"}function mn({type:e,reducerName:t},r,n,o){if(!o)throw new Error(D(18));let{payloadCreator:i,fulfilled:s,pending:a,rejected:c,settled:l,options:u}=r,d=o(e,i,u);n.exposeAction(t,d),s&&n.addCase(d.fulfilled,s),a&&n.addCase(d.pending,a),c&&n.addCase(d.rejected,c),l&&n.addMatcher(d.settled,l),n.exposeCaseReducer(t,{fulfilled:s||Se,pending:a||Se,rejected:c||Se,settled:l||Se})}function Se(){}var or="listener",ir="completed",sr="cancelled",no=`task-${sr}`,oo=`task-${ir}`,io=`${or}-${sr}`,so=`${or}-${ir}`;var{assign:ar}=Object;var Ke="listenerMiddleware";var hn=ar(V(`${Ke}/add`),{withTypes:()=>hn}),ao=V(`${Ke}/removeAll`),En=ar(V(`${Ke}/remove`),{withTypes:()=>En});var co=Symbol.for("rtk-state-proxy-original");function D(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var yn=()=>{let e=localStorage.getItem("contacts");if(e)try{return JSON.parse(e)}catch(t){throw console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0430\u0440\u0441\u0438\u043D\u0433\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u0437 localStorage:",t),new Error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0430\u0440\u0441\u0438\u043D\u0433\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u0437 localStorage")}return[]},_n={contacts:yn()},cr=nr({name:"contacts",initialState:_n,reducers:{addContact:(e,t)=>{e.contacts.push(t.payload)},deleteContact:(e,t)=>{e.contacts=e.contacts.filter(r=>r.name!==t.payload)},editContact:(e,t)=>{let r=e.contacts.findIndex(n=>n.name===t.payload.oldName);r!==-1&&(e.contacts[r]=t.payload.newContact)},clearAllContacts:e=>{e.contacts=[]},initializeContacts:(e,t)=>{e.contacts=t.payload}}}),{addContact:Ge,deleteContact:Te,editContact:Ye,clearAllContacts:ur,initializeContacts:Eo}=cr.actions,lr=cr.reducer;var gn="contacts",dr=e=>t=>r=>{let n=t(r),i=e.getState().contacts.contacts;return localStorage.setItem(gn,JSON.stringify(i)),n};var g=er({reducer:{contacts:lr},middleware:e=>e().concat(dr)});var P=e=>e.contacts.contacts;var fr=document.querySelector(lt),G,Y,z,j=null;function ne(e){fr&&de(fr);let t=O.querySelector(Et);t&&(t.textContent="Edit contact"),j=e,G=O.querySelector(dt),Y=O.querySelector(ft),z=O.querySelector(pt),G&&Y&&z&&(G.value=e.name,Y.value=e.position,z.value=e.phone),O.querySelector("input").focus(),document.addEventListener("keydown",fe)}function pr(){let e=G?.value.trim()??"",t=Y?.value.trim()??"",r=z?.value??"";if(!j)return;let n=j.name,o=j.position,i=j.phone;if(!G||!Y||!z)return;let s=[G,Y,z],a=document.querySelector(mt);z&&pe(z);let c=g.getState(),l=P(c),{isValid:u,errors:d}=se({inputs:s,storage:l,errorMessage:a});if(!u){d.forEach(({input:_,message:w})=>{_?ie(_,a,w):a.textContent=w});return}let m={name:n,position:o,phone:i},h={name:e,position:t,phone:r};if(g.dispatch(Ye({oldName:m.name,newContact:h})),Z(),j){let _=document.querySelector(`[data-id="${j.name[0].toUpperCase()}"]`)?.querySelector(I);if(_){let w=_.querySelector(H);w&&w.focus()}}j=null}var ve={};function Xe({name:e,position:t,phone:r}){let i=document.querySelector(it).content.querySelector(I)?.cloneNode(!0);if(!i)return;let s=i.querySelector(k),a=i.querySelector(q),c=i.querySelector(B);return!s||!a||!c?null:(s.textContent=e,a.textContent=t,c.textContent=r,i)}function wn(e,t){t.innerHTML="",e.forEach(({name:r,position:n,phone:o})=>{let i=Xe({name:r,position:n,phone:o});i&&t.append(i)})}function Me(e,t){let r=document.querySelector(`[data-id="${e.toLowerCase()}"]`)?.closest(J);if(r){let n=r.querySelector(X);wn(t,n);let o=r.querySelector(ce);ve[e]||(ve[e]=new U(o,n)),ve[e].count=t.length,ve[e].update()}}function mr(e){let r=e.target.closest(I);if(!r)return;let n=r.querySelector(k)?.textContent??"";g.dispatch(Te(n)),r.remove();let o=n[0].toUpperCase(),i=g.getState(),a=P(i).filter(c=>c.name[0].toUpperCase()===o);Me(o,a)}function hr(e){let t=e.target;if(t.closest(J)){let r=t.closest(ae);if(!r)return;let n=r.querySelector(X);if(!n)return;n.classList.toggle(Ie),n.classList.contains(Ie)?n.style.maxHeight=`${n.scrollHeight}px`:n.style.maxHeight="0"}}document.querySelector(Pe)?.addEventListener("click",e=>{let t=e.target;if(t.closest(Q)){mr(e);return}if(t.closest(H)){let r=t.closest(I),n=r.querySelector(k)?.textContent??"",o=r.querySelector(q)?.textContent??"",i=r.querySelector(B)?.textContent??"";ne({name:n,position:o,phone:i})}hr(e)});document.querySelector(Pe)?.addEventListener("keydown",e=>{let t=e;if(t.key===" "||t.key==="Enter"){e.preventDefault();let r=e.target;if(r.matches(Q)){mr(e);return}if(r.closest(H)){let n=r.closest(I),o=n.querySelector(k)?.textContent??"",i=n.querySelector(q)?.textContent??"",s=n.querySelector(B)?.textContent??"";ne({name:o,position:i,phone:s})}hr(e)}});function Er(){let e=g.getState(),t=P(e),r={};t.forEach(n=>{let o=n.name[0].toUpperCase();r[o]||(r[o]=[]),r[o].push(n)}),Object.keys(r).forEach(n=>{Me(n,r[n])})}g.subscribe(()=>{Er()});Er();var On=document.querySelector(st);function _r(e){let t=g.getState();return P(t).filter(({name:n,position:o,phone:i})=>n.toLowerCase().includes(e)||o.toLowerCase().includes(e)||i.includes(e))}function Ne(e,t){if(t.innerHTML="",e.length===0){t.textContent="No results found";return}e.forEach(({name:r,position:n,phone:o})=>{let i=Xe({name:r,position:n,phone:o});i&&t.appendChild(i)})}function bn(e,t){e.addEventListener("input",()=>{let r=e.value.trim().toLowerCase();if(r){let n=_r(r);Ne(n,t)}else t.innerHTML=""})}function gr(){de(On);let e=O.querySelector(_t),t=O.querySelector(ue);bn(e,t),O.querySelector(le).addEventListener("click",Je)}function Je(){let e=g.getState(),t=P(e),r=O.querySelector(ue);Ne(t,r),O.querySelector("input").focus()}var yr="";function Cn(){let e=g.getState(),t=P(e),r=O.querySelector(ue);if(r)if(yr){let n=_r(yr);Ne(n,r)}else Ne(t,r)}g.subscribe(Cn);var Qe=document.getElementById(bt),Ze=document.getElementById(Ct),oe=document.getElementById(St);function Sn(){let e=Qe.value.trim(),t=Ze.value.trim(),r=oe.value.trim(),n=document.querySelector(Tt),o=[Qe,Ze,oe],i=g.getState().contacts.contacts,{isValid:s,errors:a}=se({inputs:o,storage:i,errorMessage:n});if(!s){a.forEach(({input:l,message:u})=>{l?ie(l,n,u):n.textContent=u});return}let c={name:e,position:t,phone:r};g.dispatch(Ge(c)),Qe.value="",Ze.value="",oe.value=""}function Tn(){document.querySelectorAll(J).forEach(e=>{let t=e.querySelector(X);t.innerHTML="";let r=e.querySelector(ce);new U(r,t).reset()}),g.dispatch(ur())}var vn=document.querySelector(Ot);vn.addEventListener("submit",e=>{e.preventDefault(),Sn()});var Mn=document.querySelector(vt);Mn.addEventListener("click",e=>{let t=e.target;t.matches(ct)&&Tn(),t.matches(ut)&&gr()});var wr=document.querySelector(Ae);if(!wr)throw new Error(`Template with selector ${Ae} not found.`);var Nn=wr.content.querySelector(ae),An=({letter:e,id:t})=>{let r=Nn?.cloneNode(!0);if(r){let n=r.querySelector(at);n.textContent=e,n.dataset.id=t,r.setAttribute("tabindex","0")}return r},et=(e,t)=>{let r=document.createDocumentFragment();e.forEach(n=>{let o=An(n);r.append(o)}),t.append(r)};var Or=[{letter:"A",id:"a"},{letter:"B",id:"b"},{letter:"C",id:"c"},{letter:"D",id:"d"},{letter:"E",id:"e"},{letter:"F",id:"f"},{letter:"G",id:"g"},{letter:"H",id:"h"},{letter:"I",id:"i"},{letter:"J",id:"j"},{letter:"K",id:"k"},{letter:"L",id:"l"},{letter:"M",id:"m"}],br=[{letter:"N",id:"n"},{letter:"O",id:"o"},{letter:"P",id:"p"},{letter:"Q",id:"q"},{letter:"R",id:"r"},{letter:"S",id:"s"},{letter:"T",id:"t"},{letter:"U",id:"u"},{letter:"V",id:"v"},{letter:"W",id:"w"},{letter:"X",id:"x"},{letter:"Y",id:"y"},{letter:"Z",id:"z"}];document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".column-left"),t=document.querySelector(".column-right");et(Or,e),et(br,t);let r=g.getState().contacts.contacts,n={};r.forEach(o=>{let i=o.name[0].toUpperCase();n[i]||(n[i]=[]),n[i].push(o)}),Object.keys(n).forEach(o=>{Me(o,n[o])}),pe(oe),O.addEventListener("click",o=>{let i=o.target;if(i.matches(le)&&Je(),i.matches(Mt)&&pr(),i.closest(Q)){let a=i.closest(I).querySelector(k)?.textContent??"";g.dispatch(Te(a));return}if(i.closest(H)){let s=i.closest(I),a=s.querySelector(k)?.textContent??"",c=s.querySelector(q)?.textContent??"",l=s.querySelector(B)?.textContent??"";ne({name:a,position:c,phone:l})}(i.closest(gt)||i.matches(wt))&&Z()})});
