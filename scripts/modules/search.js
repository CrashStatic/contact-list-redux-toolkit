var Ve=".body";var je="#message",ze="#search-modal-content",$e=".element",de="element--active";var fe=".element__contacts",pe="element__contacts--open",He=".element__counter",he="element__counter--active",me=".column__element",j=".message",H=".message__name",B=".message__position",W=".message__phone",ye=".contact-table",Ee=".js-delete-contact-button",K=".js-edit-contact-button";var Fe="#edit-popup-content",Ue="#popup-name",qe="#popup-position",Be="#popup-phone";var We=".modal",Ke=".modal__title",Ge=".modal__body",Ye=".modal__input",G=".modal__search-area",Xe=".modal__button-show";var Y=class{constructor(t,r){this.counterElement=t,this.contactsContainer=r,this.count=0}increase(){this.count++,this.update()}decrease(){this.count>0&&(this.count--,this.update())}reset(){this.count=0,this.update()}update(){let t=this.contactsContainer.parentElement;t&&(this.count>0?(this.counterElement.classList.add(he),t.classList.add(de)):(this.counterElement.classList.remove(he),t.classList.remove(de))),this.counterElement.textContent=this.count.toString()}};var Je=e=>e.key==="Escape";var b=document.querySelector(We),Qe=document.querySelector(Ve);function X(e){b.showModal(),Qe.style.overflow="hidden";let t=b.querySelector(Ge);t.innerHTML="";let r=e.content.cloneNode(!0);t.appendChild(r),b.querySelector("input").focus(),document.addEventListener("keydown",J)}function Ze(){b.close(),Qe.style.overflow="auto",document.removeEventListener("keydown",J)}function J(e){Je(e)&&(e.preventDefault(),Ze())}function O(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var Wt=typeof Symbol=="function"&&Symbol.observable||"@@observable",et=Wt,_e=()=>Math.random().toString(36).substring(7).split("").join("."),Kt={INIT:`@@redux/INIT${_e()}`,REPLACE:`@@redux/REPLACE${_e()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${_e()}`},Q=Kt;function Z(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function ge(e,t,r){if(typeof e!="function")throw new Error(O(2));if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(O(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(O(1));return r(ge)(e,t)}let n=e,o=t,i=new Map,s=i,c=0,a=!1;function l(){s===i&&(s=new Map,i.forEach((E,w)=>{s.set(w,E)}))}function u(){if(a)throw new Error(O(3));return o}function f(E){if(typeof E!="function")throw new Error(O(4));if(a)throw new Error(O(5));let w=!0;l();let d=c++;return s.set(d,E),function(){if(w){if(a)throw new Error(O(6));w=!1,l(),s.delete(d),i=null}}}function m(E){if(!Z(E))throw new Error(O(7));if(typeof E.type>"u")throw new Error(O(8));if(typeof E.type!="string")throw new Error(O(17));if(a)throw new Error(O(9));try{a=!0,o=n(o,E)}finally{a=!1}return(i=s).forEach(d=>{d()}),E}function y(E){if(typeof E!="function")throw new Error(O(10));n=E,m({type:Q.REPLACE})}function v(){let E=f;return{subscribe(w){if(typeof w!="object"||w===null)throw new Error(O(11));function d(){let _=w;_.next&&_.next(u())}return d(),{unsubscribe:E(d)}},[et](){return this}}}return m({type:Q.INIT}),{dispatch:m,subscribe:f,getState:u,replaceReducer:y,[et]:v}}function Gt(e){Object.keys(e).forEach(t=>{let r=e[t];if(typeof r(void 0,{type:Q.INIT})>"u")throw new Error(O(12));if(typeof r(void 0,{type:Q.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(O(13))})}function tt(e){let t=Object.keys(e),r={};for(let s=0;s<t.length;s++){let c=t[s];typeof e[c]=="function"&&(r[c]=e[c])}let n=Object.keys(r),o,i;try{Gt(r)}catch(s){i=s}return function(c={},a){if(i)throw i;let l=!1,u={};for(let f=0;f<n.length;f++){let m=n[f],y=r[m],v=c[m],S=y(v,a);if(typeof S>"u"){let E=a&&a.type;throw new Error(O(14))}u[m]=S,l=l||S!==v}return l=l||n.length!==Object.keys(c).length,l?u:c}}function z(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,r)=>(...n)=>t(r(...n)))}function rt(...e){return t=>(r,n)=>{let o=t(r,n),i=()=>{throw new Error(O(15))},s={getState:o.getState,dispatch:(a,...l)=>i(a,...l)},c=e.map(a=>a(s));return i=z(...c)(o.dispatch),{...o,dispatch:i}}}function nt(e){return Z(e)&&"type"in e&&typeof e.type=="string"}var ut=Symbol.for("immer-nothing"),ot=Symbol.for("immer-draftable"),C=Symbol.for("immer-state");function N(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var $=Object.getPrototypeOf;function x(e){return!!e&&!!e[C]}function A(e){return e?lt(e)||Array.isArray(e)||!!e[ot]||!!e.constructor?.[ot]||oe(e)||ie(e):!1}var Yt=Object.prototype.constructor.toString();function lt(e){if(!e||typeof e!="object")return!1;let t=$(e);if(t===null)return!0;let r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object?!0:typeof r=="function"&&Function.toString.call(r)===Yt}function ee(e,t){ne(e)===0?Reflect.ownKeys(e).forEach(r=>{t(r,e[r],e)}):e.forEach((r,n)=>t(n,r,e))}function ne(e){let t=e[C];return t?t.type_:Array.isArray(e)?1:oe(e)?2:ie(e)?3:0}function Oe(e,t){return ne(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function dt(e,t,r){let n=ne(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function Xt(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function oe(e){return e instanceof Map}function ie(e){return e instanceof Set}function R(e){return e.copy_||e.base_}function ve(e,t){if(oe(e))return new Map(e);if(ie(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);let r=lt(e);if(t===!0||t==="class_only"&&!r){let n=Object.getOwnPropertyDescriptors(e);delete n[C];let o=Reflect.ownKeys(n);for(let i=0;i<o.length;i++){let s=o[i],c=n[s];c.writable===!1&&(c.writable=!0,c.configurable=!0),(c.get||c.set)&&(n[s]={configurable:!0,writable:!0,enumerable:c.enumerable,value:e[s]})}return Object.create($(e),n)}else{let n=$(e);if(n!==null&&r)return{...e};let o=Object.create(n);return Object.assign(o,e)}}function Ne(e,t=!1){return se(e)||x(e)||!A(e)||(ne(e)>1&&(e.set=e.add=e.clear=e.delete=Jt),Object.freeze(e),t&&Object.entries(e).forEach(([r,n])=>Ne(n,!0))),e}function Jt(){N(2)}function se(e){return Object.isFrozen(e)}var Qt={};function V(e){let t=Qt[e];return t||N(0,e),t}var F;function ft(){return F}function Zt(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function it(e,t){t&&(V("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Se(e){Ce(e),e.drafts_.forEach(er),e.drafts_=null}function Ce(e){e===F&&(F=e.parent_)}function st(e){return F=Zt(F,e)}function er(e){let t=e[C];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function at(e,t){t.unfinalizedDrafts_=t.drafts_.length;let r=t.drafts_[0];return e!==void 0&&e!==r?(r[C].modified_&&(Se(t),N(4)),A(e)&&(e=te(t,e),t.parent_||re(t,e)),t.patches_&&V("Patches").generateReplacementPatches_(r[C].base_,e,t.patches_,t.inversePatches_)):e=te(t,r,[]),Se(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==ut?e:void 0}function te(e,t,r){if(se(t))return t;let n=t[C];if(!n)return ee(t,(o,i)=>ct(e,n,t,o,i,r)),t;if(n.scope_!==e)return t;if(!n.modified_)return re(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;let o=n.copy_,i=o,s=!1;n.type_===3&&(i=new Set(o),o.clear(),s=!0),ee(i,(c,a)=>ct(e,n,o,c,a,r,s)),re(e,o,!1),r&&e.patches_&&V("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function ct(e,t,r,n,o,i,s){if(x(o)){let c=i&&t&&t.type_!==3&&!Oe(t.assigned_,n)?i.concat(n):void 0,a=te(e,o,c);if(dt(r,n,a),x(a))e.canAutoFreeze_=!1;else return}else s&&r.add(o);if(A(o)&&!se(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;te(e,o),(!t||!t.scope_.parent_)&&typeof n!="symbol"&&Object.prototype.propertyIsEnumerable.call(r,n)&&re(e,o)}}function re(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Ne(t,r)}function tr(e,t){let r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:ft(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1},o=n,i=Ae;r&&(o=[n],i=U);let{revoke:s,proxy:c}=Proxy.revocable(o,i);return n.draft_=c,n.revoke_=s,c}var Ae={get(e,t){if(t===C)return e;let r=R(e);if(!Oe(r,t))return rr(e,r,t);let n=r[t];return e.finalized_||!A(n)?n:n===we(e.base_,t)?(be(e),e.copy_[t]=Te(n,e)):n},has(e,t){return t in R(e)},ownKeys(e){return Reflect.ownKeys(R(e))},set(e,t,r){let n=pt(R(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){let o=we(R(e),t),i=o?.[C];if(i&&i.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(Xt(r,o)&&(r!==void 0||Oe(e.base_,t)))return!0;be(e),Me(e)}return e.copy_[t]===r&&(r!==void 0||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty(e,t){return we(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,be(e),Me(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){let r=R(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty(){N(11)},getPrototypeOf(e){return $(e.base_)},setPrototypeOf(){N(12)}},U={};ee(Ae,(e,t)=>{U[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});U.deleteProperty=function(e,t){return U.set.call(this,e,t,void 0)};U.set=function(e,t,r){return Ae.set.call(this,e[0],t,r,e[0])};function we(e,t){let r=e[C];return(r?R(r):e)[t]}function rr(e,t,r){let n=pt(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}function pt(e,t){if(!(t in e))return;let r=$(e);for(;r;){let n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=$(r)}}function Me(e){e.modified_||(e.modified_=!0,e.parent_&&Me(e.parent_))}function be(e){e.copy_||(e.copy_=ve(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var nr=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,r,n)=>{if(typeof t=="function"&&typeof r!="function"){let i=r;r=t;let s=this;return function(a=i,...l){return s.produce(a,u=>r.call(this,u,...l))}}typeof r!="function"&&N(6),n!==void 0&&typeof n!="function"&&N(7);let o;if(A(t)){let i=st(this),s=Te(t,void 0),c=!0;try{o=r(s),c=!1}finally{c?Se(i):Ce(i)}return it(i,n),at(o,i)}else if(!t||typeof t!="object"){if(o=r(t),o===void 0&&(o=t),o===ut&&(o=void 0),this.autoFreeze_&&Ne(o,!0),n){let i=[],s=[];V("Patches").generateReplacementPatches_(t,o,i,s),n(i,s)}return o}else N(1,t)},this.produceWithPatches=(t,r)=>{if(typeof t=="function")return(s,...c)=>this.produceWithPatches(s,a=>t(a,...c));let n,o;return[this.produce(t,r,(s,c)=>{n=s,o=c}),n,o]},typeof e?.autoFreeze=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof e?.useStrictShallowCopy=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){A(e)||N(8),x(e)&&(e=or(e));let t=st(this),r=Te(e,void 0);return r[C].isManual_=!0,Ce(t),r}finishDraft(e,t){let r=e&&e[C];(!r||!r.isManual_)&&N(9);let{scope_:n}=r;return it(n,t),at(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){let o=t[r];if(o.path.length===0&&o.op==="replace"){e=o.value;break}}r>-1&&(t=t.slice(r+1));let n=V("Patches").applyPatches_;return x(e)?n(e,t):this.produce(e,o=>n(o,t))}};function Te(e,t){let r=oe(e)?V("MapSet").proxyMap_(e,t):ie(e)?V("MapSet").proxySet_(e,t):tr(e,t);return(t?t.scope_:ft()).drafts_.push(r),r}function or(e){return x(e)||N(10,e),ht(e)}function ht(e){if(!A(e)||se(e))return e;let t=e[C],r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=ve(e,t.scope_.immer_.useStrictShallowCopy_)}else r=ve(e,!0);return ee(r,(n,o)=>{dt(r,n,ht(o))}),t&&(t.finalized_=!1),r}var M=new nr,ae=M.produce,Zr=M.produceWithPatches.bind(M),en=M.setAutoFreeze.bind(M),tn=M.setUseStrictShallowCopy.bind(M),rn=M.applyPatches.bind(M),nn=M.createDraft.bind(M),on=M.finishDraft.bind(M);function mt(e){return({dispatch:r,getState:n})=>o=>i=>typeof i=="function"?i(r,n,e):o(i)}var yt=mt(),Et=mt;var ir=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?z:z.apply(null,arguments)},dn=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__:function(){return function(e){return e}},sr=e=>e&&typeof e.match=="function";function L(e,t){function r(...n){if(t){let o=t(...n);if(!o)throw new Error(P(0));return{type:e,payload:o.payload,..."meta"in o&&{meta:o.meta},..."error"in o&&{error:o.error}}}return{type:e,payload:n[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=n=>nt(n)&&n.type===e,r}var vt=class q extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,q.prototype)}static get[Symbol.species](){return q}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new q(...t[0].concat(this)):new q(...t.concat(this))}};function _t(e){return A(e)?ae(e,()=>{}):e}function gt(e,t,r){return e.has(t)?e.get(t):e.set(t,r(t)).get(t)}function ar(e){return typeof e=="boolean"}var cr=()=>function(t){let{thunk:r=!0,immutableCheck:n=!0,serializableCheck:o=!0,actionCreatorCheck:i=!0}=t??{},s=new vt;return r&&(ar(r)?s.push(yt):s.push(Et(r.extraArgument))),s},ur="RTK_autoBatch";var wt=e=>t=>{setTimeout(t,e)},lr=(e={type:"raf"})=>t=>(...r)=>{let n=t(...r),o=!0,i=!1,s=!1,c=new Set,a=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:wt(10):e.type==="callback"?e.queueNotification:wt(e.timeout),l=()=>{s=!1,i&&(i=!1,c.forEach(u=>u()))};return Object.assign({},n,{subscribe(u){let f=()=>o&&u(),m=n.subscribe(f);return c.add(u),()=>{m(),c.delete(u)}},dispatch(u){try{return o=!u?.meta?.[ur],i=!o,i&&(s||(s=!0,a(l))),n.dispatch(u)}finally{o=!0}}})},dr=e=>function(r){let{autoBatch:n=!0}=r??{},o=new vt(e);return n&&o.push(lr(typeof n=="object"?n:void 0)),o};function St(e){let t=cr(),{reducer:r=void 0,middleware:n,devTools:o=!0,preloadedState:i=void 0,enhancers:s=void 0}=e||{},c;if(typeof r=="function")c=r;else if(Z(r))c=tt(r);else throw new Error(P(1));let a;typeof n=="function"?a=n(t):a=t();let l=z;o&&(l=ir({trace:!1,...typeof o=="object"&&o}));let u=rt(...a),f=dr(u),m=typeof s=="function"?s(f):f(),y=l(...m);return ge(c,i,y)}function Ct(e){let t={},r=[],n,o={addCase(i,s){let c=typeof i=="string"?i:i.type;if(!c)throw new Error(P(28));if(c in t)throw new Error(P(29));return t[c]=s,o},addMatcher(i,s){return r.push({matcher:i,reducer:s}),o},addDefaultCase(i){return n=i,o}};return e(o),[t,r,n]}function fr(e){return typeof e=="function"}function pr(e,t){let[r,n,o]=Ct(t),i;if(fr(e))i=()=>_t(e());else{let c=_t(e);i=()=>c}function s(c=i(),a){let l=[r[a.type],...n.filter(({matcher:u})=>u(a)).map(({reducer:u})=>u)];return l.filter(u=>!!u).length===0&&(l=[o]),l.reduce((u,f)=>{if(f)if(x(u)){let y=f(u,a);return y===void 0?u:y}else{if(A(u))return ae(u,m=>f(m,a));{let m=f(u,a);if(m===void 0){if(u===null)return u;throw Error("A case reducer on a non-draftable value must not return undefined")}return m}}return u},c)}return s.getInitialState=i,s}var hr=(e,t)=>sr(e)?e.match(t):e(t);function mr(...e){return t=>e.some(r=>hr(r,t))}var yr="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Er=(e=21)=>{let t="",r=e;for(;r--;)t+=yr[Math.random()*64|0];return t},_r=["name","message","stack","code"],De=class{constructor(e,t){this.payload=e,this.meta=t}_type},bt=class{constructor(e,t){this.payload=e,this.meta=t}_type},gr=e=>{if(typeof e=="object"&&e!==null){let t={};for(let r of _r)typeof e[r]=="string"&&(t[r]=e[r]);return t}return{message:String(e)}},Ot="External signal was aborted",wr=(()=>{function e(t,r,n){let o=L(t+"/fulfilled",(a,l,u,f)=>({payload:a,meta:{...f||{},arg:u,requestId:l,requestStatus:"fulfilled"}})),i=L(t+"/pending",(a,l,u)=>({payload:void 0,meta:{...u||{},arg:l,requestId:a,requestStatus:"pending"}})),s=L(t+"/rejected",(a,l,u,f,m)=>({payload:f,error:(n&&n.serializeError||gr)(a||"Rejected"),meta:{...m||{},arg:u,requestId:l,rejectedWithValue:!!f,requestStatus:"rejected",aborted:a?.name==="AbortError",condition:a?.name==="ConditionError"}}));function c(a,{signal:l}={}){return(u,f,m)=>{let y=n?.idGenerator?n.idGenerator(a):Er(),v=new AbortController,S,E;function w(p){E=p,v.abort()}l&&(l.aborted?w(Ot):l.addEventListener("abort",()=>w(Ot),{once:!0}));let d=async function(){let p;try{let g=n?.condition?.(a,{getState:f,extra:m});if(Or(g)&&(g=await g),g===!1||v.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};let T=new Promise((h,I)=>{S=()=>{I({name:"AbortError",message:E||"Aborted"})},v.signal.addEventListener("abort",S)});u(i(y,a,n?.getPendingMeta?.({requestId:y,arg:a},{getState:f,extra:m}))),p=await Promise.race([T,Promise.resolve(r(a,{dispatch:u,getState:f,extra:m,requestId:y,signal:v.signal,abort:w,rejectWithValue:(h,I)=>new De(h,I),fulfillWithValue:(h,I)=>new bt(h,I)})).then(h=>{if(h instanceof De)throw h;return h instanceof bt?o(h.payload,y,a,h.meta):o(h,y,a)})])}catch(g){p=g instanceof De?s(null,y,a,g.payload,g.meta):s(g,y,a)}finally{S&&v.signal.removeEventListener("abort",S)}return n&&!n.dispatchConditionRejection&&s.match(p)&&p.meta.condition||u(p),p}();return Object.assign(d,{abort:w,requestId:y,arg:a,unwrap(){return d.then(br)}})}}return Object.assign(c,{pending:i,rejected:s,fulfilled:o,settled:mr(s,o),typePrefix:t})}return e.withTypes=()=>e,e})();function br(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function Or(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var Mt=Symbol.for("rtk-slice-createasyncthunk"),yn={[Mt]:wr};function vr(e,t){return`${e}/${t}`}function Sr({creators:e}={}){let t=e?.asyncThunk?.[Mt];return function(n){let{name:o,reducerPath:i=o}=n;if(!o)throw new Error(P(11));typeof process<"u";let s=(typeof n.reducers=="function"?n.reducers(Mr()):n.reducers)||{},c=Object.keys(s),a={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},l={addCase(d,p){let _=typeof d=="string"?d:d.type;if(!_)throw new Error(P(12));if(_ in a.sliceCaseReducersByType)throw new Error(P(13));return a.sliceCaseReducersByType[_]=p,l},addMatcher(d,p){return a.sliceMatchers.push({matcher:d,reducer:p}),l},exposeAction(d,p){return a.actionCreators[d]=p,l},exposeCaseReducer(d,p){return a.sliceCaseReducersByName[d]=p,l}};c.forEach(d=>{let p=s[d],_={reducerName:d,type:vr(o,d),createNotation:typeof n.reducers=="function"};Nr(p)?Dr(_,p,l,t):Tr(_,p,l)});function u(){let[d={},p=[],_=void 0]=typeof n.extraReducers=="function"?Ct(n.extraReducers):[n.extraReducers],g={...d,...a.sliceCaseReducersByType};return pr(n.initialState,T=>{for(let h in g)T.addCase(h,g[h]);for(let h of a.sliceMatchers)T.addMatcher(h.matcher,h.reducer);for(let h of p)T.addMatcher(h.matcher,h.reducer);_&&T.addDefaultCase(_)})}let f=d=>d,m=new Map,y;function v(d,p){return y||(y=u()),y(d,p)}function S(){return y||(y=u()),y.getInitialState()}function E(d,p=!1){function _(T){let h=T[d];return typeof h>"u"&&p&&(h=S()),h}function g(T=f){let h=gt(m,p,()=>new WeakMap);return gt(h,T,()=>{let I={};for(let[qt,Bt]of Object.entries(n.selectors??{}))I[qt]=Cr(Bt,T,S,p);return I})}return{reducerPath:d,getSelectors:g,get selectors(){return g(_)},selectSlice:_}}let w={name:o,reducer:v,actions:a.actionCreators,caseReducers:a.sliceCaseReducersByName,getInitialState:S,...E(i),injectInto(d,{reducerPath:p,..._}={}){let g=p??i;return d.inject({reducerPath:g,reducer:v},_),{...w,...E(g,!0)}}};return w}}function Cr(e,t,r,n){function o(i,...s){let c=t(i);return typeof c>"u"&&n&&(c=r()),e(c,...s)}return o.unwrapped=e,o}var Tt=Sr();function Mr(){function e(t,r){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...r}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...r){return t(...r)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,r){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:r}},asyncThunk:e}}function Tr({type:e,reducerName:t,createNotation:r},n,o){let i,s;if("reducer"in n){if(r&&!Ar(n))throw new Error(P(17));i=n.reducer,s=n.prepare}else i=n;o.addCase(e,i).exposeCaseReducer(t,i).exposeAction(t,s?L(e,s):L(e))}function Nr(e){return e._reducerDefinitionType==="asyncThunk"}function Ar(e){return e._reducerDefinitionType==="reducerWithPrepare"}function Dr({type:e,reducerName:t},r,n,o){if(!o)throw new Error(P(18));let{payloadCreator:i,fulfilled:s,pending:c,rejected:a,settled:l,options:u}=r,f=o(e,i,u);n.exposeAction(t,f),s&&n.addCase(f.fulfilled,s),c&&n.addCase(f.pending,c),a&&n.addCase(f.rejected,a),l&&n.addMatcher(f.settled,l),n.exposeCaseReducer(t,{fulfilled:s||ce,pending:c||ce,rejected:a||ce,settled:l||ce})}function ce(){}var Nt="listener",At="completed",Dt="cancelled",En=`task-${Dt}`,_n=`task-${At}`,gn=`${Nt}-${Dt}`,wn=`${Nt}-${At}`;var{assign:Pt}=Object;var Pe="listenerMiddleware";var Pr=Pt(L(`${Pe}/add`),{withTypes:()=>Pr}),bn=L(`${Pe}/removeAll`),Ir=Pt(L(`${Pe}/remove`),{withTypes:()=>Ir});var On=Symbol.for("rtk-state-proxy-original");function P(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var xr=()=>{let e=localStorage.getItem("contacts");if(e)try{return JSON.parse(e)}catch(t){throw console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0430\u0440\u0441\u0438\u043D\u0433\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u0437 localStorage:",t),new Error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0430\u0440\u0441\u0438\u043D\u0433\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u0437 localStorage")}return[]},Lr={contacts:xr()},It=Tt({name:"contacts",initialState:Lr,reducers:{addContact:(e,t)=>{e.contacts.push(t.payload)},deleteContact:(e,t)=>{e.contacts=e.contacts.filter(r=>r.name!==t.payload)},editContact:(e,t)=>{let r=e.contacts.findIndex(n=>n.name===t.payload.oldName);r!==-1&&(e.contacts[r]=t.payload.newContact)},clearAllContacts:e=>{e.contacts=[]},initializeContacts:(e,t)=>{e.contacts=t.payload}}}),{addContact:kr,deleteContact:xt,editContact:Lt,clearAllContacts:An,initializeContacts:Dn}=It.actions,kt=It.reducer;var Rr="contacts",Rt=e=>t=>r=>{let n=t(r),i=e.getState().contacts.contacts;return localStorage.setItem(Rr,JSON.stringify(i)),n};var D=St({reducer:{contacts:kt},middleware:e=>e().concat(Rt)});var k=e=>e.contacts.contacts;var Vt=document.querySelector(Fe),Ie,xe,Le,Vr=null;function ke(e){Vt&&X(Vt);let t=b.querySelector(Ke);t&&(t.textContent="Edit contact"),Vr=e,Ie=b.querySelector(Ue),xe=b.querySelector(qe),Le=b.querySelector(Be),Ie&&xe&&Le&&(Ie.value=e.name,xe.value=e.position,Le.value=e.phone),b.querySelector("input").focus(),document.addEventListener("keydown",J)}var ue={};function Re({name:e,position:t,phone:r}){let i=document.querySelector(je).content.querySelector(j)?.cloneNode(!0);if(!i)return;let s=i.querySelector(H),c=i.querySelector(B),a=i.querySelector(W);return!s||!c||!a?null:(s.textContent=e,c.textContent=t,a.textContent=r,i)}function jr(e,t){t.innerHTML="",e.forEach(({name:r,position:n,phone:o})=>{let i=Re({name:r,position:n,phone:o});i&&t.append(i)})}function jt(e,t){let r=document.querySelector(`[data-id="${e.toLowerCase()}"]`)?.closest(me);if(r){let n=r.querySelector(fe);jr(t,n);let o=r.querySelector(He);ue[e]||(ue[e]=new Y(o,n)),ue[e].count=t.length,ue[e].update()}}function zt(e){let r=e.target.closest(j);if(!r)return;let n=r.querySelector(H)?.textContent??"";D.dispatch(xt(n)),r.remove();let o=n[0].toUpperCase(),i=D.getState(),c=k(i).filter(a=>a.name[0].toUpperCase()===o);jt(o,c)}function $t(e){let t=e.target;if(t.closest(me)){let r=t.closest($e);if(!r)return;let n=r.querySelector(fe);if(!n)return;n.classList.toggle(pe),n.classList.contains(pe)?n.style.maxHeight=`${n.scrollHeight}px`:n.style.maxHeight="0"}}document.querySelector(ye)?.addEventListener("click",e=>{let t=e.target;if(t.closest(Ee)){zt(e);return}if(t.closest(K)){let r=t.closest(j),n=r.querySelector(H)?.textContent??"",o=r.querySelector(B)?.textContent??"",i=r.querySelector(W)?.textContent??"";ke({name:n,position:o,phone:i})}$t(e)});document.querySelector(ye)?.addEventListener("keydown",e=>{let t=e;if(t.key===" "||t.key==="Enter"){e.preventDefault();let r=e.target;if(r.matches(Ee)){zt(e);return}if(r.closest(K)){let n=r.closest(j),o=n.querySelector(H)?.textContent??"",i=n.querySelector(B)?.textContent??"",s=n.querySelector(W)?.textContent??"";ke({name:o,position:i,phone:s})}$t(e)}});function Ht(){let e=D.getState(),t=k(e),r={};t.forEach(n=>{let o=n.name[0].toUpperCase();r[o]||(r[o]=[]),r[o].push(n)}),Object.keys(r).forEach(n=>{jt(n,r[n])})}D.subscribe(()=>{Ht()});Ht();var zr=document.querySelector(ze);function Ut(e){let t=D.getState();return k(t).filter(({name:n,position:o,phone:i})=>n.toLowerCase().includes(e)||o.toLowerCase().includes(e)||i.includes(e))}function le(e,t){if(t.innerHTML="",e.length===0){t.textContent="No results found";return}e.forEach(({name:r,position:n,phone:o})=>{let i=Re({name:r,position:n,phone:o});i&&t.appendChild(i)})}function $r(e,t){e.addEventListener("input",()=>{let r=e.value.trim().toLowerCase();if(r){let n=Ut(r);le(n,t)}else t.innerHTML=""})}function co(){X(zr);let e=b.querySelector(Ye),t=b.querySelector(G);$r(e,t),b.querySelector(Xe).addEventListener("click",Hr)}function Hr(){let e=D.getState(),t=k(e),r=b.querySelector(G);le(t,r),b.querySelector("input").focus()}var Ft="";function Fr(){let e=D.getState(),t=k(e),r=b.querySelector(G);if(r)if(Ft){let n=Ut(Ft);le(n,r)}else le(t,r)}D.subscribe(Fr);export{co as openSearchModal,Hr as showAllContacts};
