var Le=".body";var Re="#message";var Ve=".element",he="element--active";var X=".element__contacts",me="element__contacts--open",je=".element__counter",ye="element__counter--active",J=".column__element",V=".message",q=".message__name",Q=".message__position",Z=".message__phone",Ee=".contact-table",_e=".js-delete-contact-button",B=".js-edit-contact-button";var ze="#edit-popup-content",$e="#popup-name",Fe="#popup-position",He="#popup-phone",Ue=".popup__error",qe=".modal",Be=".modal__title",We=".modal__body";var Ke=e=>e.key==="Escape";var A=document.querySelector(qe),Ge=document.querySelector(Le);function Ye(e){A.showModal(),Ge.style.overflow="hidden";let t=A.querySelector(We);t.innerHTML="";let r=e.content.cloneNode(!0);t.appendChild(r),A.querySelector("input").focus(),document.addEventListener("keydown",ee)}function ge(){A.close(),Ge.style.overflow="auto",document.removeEventListener("keydown",ee)}function ee(e){Ke(e)&&(e.preventDefault(),ge())}var Xe=e=>{let t="";e.addEventListener("input",()=>{let r=e.value.replace(/\D/g,"");if(r.length<t.length){t=r;return}r.length===1&&r[0]!=="7"&&(r=`7${r}`);let n="+7 ";r.length>1&&(n+=r.substring(1,4)),r.length>4&&(n+=` ${r.substring(4,7)}`),r.length>7&&(n+=` ${r.substring(7,9)}`),r.length>9&&(n+=` ${r.substring(9,11)}`),e.value=n,t=r})};var Je=3,Ze="input--error";function Kt(e,t){e.forEach(r=>{r.classList.remove(Ze)}),t.textContent=""}function et(e,t,r){e.classList.add(Ze),t.textContent=r}function Gt(e){let t=[];return e.forEach(r=>{r.value.trim()||t.push({input:r,message:"Fill in all fields!"})}),t}function Yt(e,{name:t,position:r,phone:n}){return e.some(i=>i.name?.toLowerCase()===t.toLowerCase()&&i.position?.toLowerCase()===r.toLowerCase()&&i.phone===n)?[{input:null,message:"This contact has already been recorded!"}]:[]}function Qe(e,t){let r=[],n=/^[a-zA-Z]+$/;return e.value.length<t&&r.push({input:e,message:`Value cannot be shorter than ${t} letters!`}),n.test(e.value)||r.push({input:e,message:"Value must contain English letters!"}),r}function Xt(e){return/^\+7 \d{3} \d{3} \d{2} \d{2}$/.test(e.value)?[]:[{input:e,message:"Wrong number!"}]}function tt({inputs:e,storage:t,errorMessage:r}){let[n,o,i]=e;Kt(e,r);let s=Gt(e);if(s.length>0)return{isValid:!1,errors:s};let c={name:n.value,position:o.value,phone:i.value},a=Yt(t,c);if(a.length>0)return{isValid:!1,errors:a};let l=Qe(n,Je);if(l.length>0)return{isValid:!1,errors:l};let u=Qe(o,Je);if(u.length>0)return{isValid:!1,errors:u};let d=Xt(i);return d.length>0?{isValid:!1,errors:d}:{isValid:!0,errors:[]}}function v(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var Jt=typeof Symbol=="function"&&Symbol.observable||"@@observable",rt=Jt,we=()=>Math.random().toString(36).substring(7).split("").join("."),Qt={INIT:`@@redux/INIT${we()}`,REPLACE:`@@redux/REPLACE${we()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${we()}`},te=Qt;function re(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function be(e,t,r){if(typeof e!="function")throw new Error(v(2));if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(v(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(v(1));return r(be)(e,t)}let n=e,o=t,i=new Map,s=i,c=0,a=!1;function l(){s===i&&(s=new Map,i.forEach((E,O)=>{s.set(O,E)}))}function u(){if(a)throw new Error(v(3));return o}function d(E){if(typeof E!="function")throw new Error(v(4));if(a)throw new Error(v(5));let O=!0;l();let f=c++;return s.set(f,E),function(){if(O){if(a)throw new Error(v(6));O=!1,l(),s.delete(f),i=null}}}function h(E){if(!re(E))throw new Error(v(7));if(typeof E.type>"u")throw new Error(v(8));if(typeof E.type!="string")throw new Error(v(17));if(a)throw new Error(v(9));try{a=!0,o=n(o,E)}finally{a=!1}return(i=s).forEach(f=>{f()}),E}function y(E){if(typeof E!="function")throw new Error(v(10));n=E,h({type:te.REPLACE})}function _(){let E=d;return{subscribe(O){if(typeof O!="object"||O===null)throw new Error(v(11));function f(){let w=O;w.next&&w.next(u())}return f(),{unsubscribe:E(f)}},[rt](){return this}}}return h({type:te.INIT}),{dispatch:h,subscribe:d,getState:u,replaceReducer:y,[rt]:_}}function Zt(e){Object.keys(e).forEach(t=>{let r=e[t];if(typeof r(void 0,{type:te.INIT})>"u")throw new Error(v(12));if(typeof r(void 0,{type:te.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(v(13))})}function nt(e){let t=Object.keys(e),r={};for(let s=0;s<t.length;s++){let c=t[s];typeof e[c]=="function"&&(r[c]=e[c])}let n=Object.keys(r),o,i;try{Zt(r)}catch(s){i=s}return function(c={},a){if(i)throw i;let l=!1,u={};for(let d=0;d<n.length;d++){let h=n[d],y=r[h],_=c[h],g=y(_,a);if(typeof g>"u"){let E=a&&a.type;throw new Error(v(14))}u[h]=g,l=l||g!==_}return l=l||n.length!==Object.keys(c).length,l?u:c}}function $(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,r)=>(...n)=>t(r(...n)))}function ot(...e){return t=>(r,n)=>{let o=t(r,n),i=()=>{throw new Error(v(15))},s={getState:o.getState,dispatch:(a,...l)=>i(a,...l)},c=e.map(a=>a(s));return i=$(...c)(o.dispatch),{...o,dispatch:i}}}function it(e){return re(e)&&"type"in e&&typeof e.type=="string"}var dt=Symbol.for("immer-nothing"),st=Symbol.for("immer-draftable"),S=Symbol.for("immer-state");function N(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var F=Object.getPrototypeOf;function x(e){return!!e&&!!e[S]}function T(e){return e?ft(e)||Array.isArray(e)||!!e[st]||!!e.constructor?.[st]||ae(e)||ce(e):!1}var er=Object.prototype.constructor.toString();function ft(e){if(!e||typeof e!="object")return!1;let t=F(e);if(t===null)return!0;let r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object?!0:typeof r=="function"&&Function.toString.call(r)===er}function ne(e,t){se(e)===0?Reflect.ownKeys(e).forEach(r=>{t(r,e[r],e)}):e.forEach((r,n)=>t(n,r,e))}function se(e){let t=e[S];return t?t.type_:Array.isArray(e)?1:ae(e)?2:ce(e)?3:0}function Se(e,t){return se(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function pt(e,t,r){let n=se(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function tr(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function ae(e){return e instanceof Map}function ce(e){return e instanceof Set}function j(e){return e.copy_||e.base_}function Ce(e,t){if(ae(e))return new Map(e);if(ce(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);let r=ft(e);if(t===!0||t==="class_only"&&!r){let n=Object.getOwnPropertyDescriptors(e);delete n[S];let o=Reflect.ownKeys(n);for(let i=0;i<o.length;i++){let s=o[i],c=n[s];c.writable===!1&&(c.writable=!0,c.configurable=!0),(c.get||c.set)&&(n[s]={configurable:!0,writable:!0,enumerable:c.enumerable,value:e[s]})}return Object.create(F(e),n)}else{let n=F(e);if(n!==null&&r)return{...e};let o=Object.create(n);return Object.assign(o,e)}}function De(e,t=!1){return ue(e)||x(e)||!T(e)||(se(e)>1&&(e.set=e.add=e.clear=e.delete=rr),Object.freeze(e),t&&Object.entries(e).forEach(([r,n])=>De(n,!0))),e}function rr(){N(2)}function ue(e){return Object.isFrozen(e)}var nr={};function z(e){let t=nr[e];return t||N(0,e),t}var W;function ht(){return W}function or(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function at(e,t){t&&(z("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Me(e){Ne(e),e.drafts_.forEach(ir),e.drafts_=null}function Ne(e){e===W&&(W=e.parent_)}function ct(e){return W=or(W,e)}function ir(e){let t=e[S];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function ut(e,t){t.unfinalizedDrafts_=t.drafts_.length;let r=t.drafts_[0];return e!==void 0&&e!==r?(r[S].modified_&&(Me(t),N(4)),T(e)&&(e=oe(t,e),t.parent_||ie(t,e)),t.patches_&&z("Patches").generateReplacementPatches_(r[S].base_,e,t.patches_,t.inversePatches_)):e=oe(t,r,[]),Me(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==dt?e:void 0}function oe(e,t,r){if(ue(t))return t;let n=t[S];if(!n)return ne(t,(o,i)=>lt(e,n,t,o,i,r)),t;if(n.scope_!==e)return t;if(!n.modified_)return ie(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;let o=n.copy_,i=o,s=!1;n.type_===3&&(i=new Set(o),o.clear(),s=!0),ne(i,(c,a)=>lt(e,n,o,c,a,r,s)),ie(e,o,!1),r&&e.patches_&&z("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function lt(e,t,r,n,o,i,s){if(x(o)){let c=i&&t&&t.type_!==3&&!Se(t.assigned_,n)?i.concat(n):void 0,a=oe(e,o,c);if(pt(r,n,a),x(a))e.canAutoFreeze_=!1;else return}else s&&r.add(o);if(T(o)&&!ue(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;oe(e,o),(!t||!t.scope_.parent_)&&typeof n!="symbol"&&Object.prototype.propertyIsEnumerable.call(r,n)&&ie(e,o)}}function ie(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&De(t,r)}function sr(e,t){let r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:ht(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1},o=n,i=Pe;r&&(o=[n],i=K);let{revoke:s,proxy:c}=Proxy.revocable(o,i);return n.draft_=c,n.revoke_=s,c}var Pe={get(e,t){if(t===S)return e;let r=j(e);if(!Se(r,t))return ar(e,r,t);let n=r[t];return e.finalized_||!T(n)?n:n===Oe(e.base_,t)?(ve(e),e.copy_[t]=Ae(n,e)):n},has(e,t){return t in j(e)},ownKeys(e){return Reflect.ownKeys(j(e))},set(e,t,r){let n=mt(j(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){let o=Oe(j(e),t),i=o?.[S];if(i&&i.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(tr(r,o)&&(r!==void 0||Se(e.base_,t)))return!0;ve(e),Te(e)}return e.copy_[t]===r&&(r!==void 0||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty(e,t){return Oe(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,ve(e),Te(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){let r=j(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty(){N(11)},getPrototypeOf(e){return F(e.base_)},setPrototypeOf(){N(12)}},K={};ne(Pe,(e,t)=>{K[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});K.deleteProperty=function(e,t){return K.set.call(this,e,t,void 0)};K.set=function(e,t,r){return Pe.set.call(this,e[0],t,r,e[0])};function Oe(e,t){let r=e[S];return(r?j(r):e)[t]}function ar(e,t,r){let n=mt(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}function mt(e,t){if(!(t in e))return;let r=F(e);for(;r;){let n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=F(r)}}function Te(e){e.modified_||(e.modified_=!0,e.parent_&&Te(e.parent_))}function ve(e){e.copy_||(e.copy_=Ce(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var cr=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,r,n)=>{if(typeof t=="function"&&typeof r!="function"){let i=r;r=t;let s=this;return function(a=i,...l){return s.produce(a,u=>r.call(this,u,...l))}}typeof r!="function"&&N(6),n!==void 0&&typeof n!="function"&&N(7);let o;if(T(t)){let i=ct(this),s=Ae(t,void 0),c=!0;try{o=r(s),c=!1}finally{c?Me(i):Ne(i)}return at(i,n),ut(o,i)}else if(!t||typeof t!="object"){if(o=r(t),o===void 0&&(o=t),o===dt&&(o=void 0),this.autoFreeze_&&De(o,!0),n){let i=[],s=[];z("Patches").generateReplacementPatches_(t,o,i,s),n(i,s)}return o}else N(1,t)},this.produceWithPatches=(t,r)=>{if(typeof t=="function")return(s,...c)=>this.produceWithPatches(s,a=>t(a,...c));let n,o;return[this.produce(t,r,(s,c)=>{n=s,o=c}),n,o]},typeof e?.autoFreeze=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof e?.useStrictShallowCopy=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){T(e)||N(8),x(e)&&(e=ur(e));let t=ct(this),r=Ae(e,void 0);return r[S].isManual_=!0,Ne(t),r}finishDraft(e,t){let r=e&&e[S];(!r||!r.isManual_)&&N(9);let{scope_:n}=r;return at(n,t),ut(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){let o=t[r];if(o.path.length===0&&o.op==="replace"){e=o.value;break}}r>-1&&(t=t.slice(r+1));let n=z("Patches").applyPatches_;return x(e)?n(e,t):this.produce(e,o=>n(o,t))}};function Ae(e,t){let r=ae(e)?z("MapSet").proxyMap_(e,t):ce(e)?z("MapSet").proxySet_(e,t):sr(e,t);return(t?t.scope_:ht()).drafts_.push(r),r}function ur(e){return x(e)||N(10,e),yt(e)}function yt(e){if(!T(e)||ue(e))return e;let t=e[S],r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=Ce(e,t.scope_.immer_.useStrictShallowCopy_)}else r=Ce(e,!0);return ne(r,(n,o)=>{pt(r,n,yt(o))}),t&&(t.finalized_=!1),r}var C=new cr,le=C.produce,Jr=C.produceWithPatches.bind(C),Qr=C.setAutoFreeze.bind(C),Zr=C.setUseStrictShallowCopy.bind(C),en=C.applyPatches.bind(C),tn=C.createDraft.bind(C),rn=C.finishDraft.bind(C);function Et(e){return({dispatch:r,getState:n})=>o=>i=>typeof i=="function"?i(r,n,e):o(i)}var _t=Et(),gt=Et;var lr=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?$:$.apply(null,arguments)},un=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__:function(){return function(e){return e}},dr=e=>e&&typeof e.match=="function";function I(e,t){function r(...n){if(t){let o=t(...n);if(!o)throw new Error(D(0));return{type:e,payload:o.payload,..."meta"in o&&{meta:o.meta},..."error"in o&&{error:o.error}}}return{type:e,payload:n[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=n=>it(n)&&n.type===e,r}var Ct=class G extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,G.prototype)}static get[Symbol.species](){return G}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new G(...t[0].concat(this)):new G(...t.concat(this))}};function wt(e){return T(e)?le(e,()=>{}):e}function bt(e,t,r){return e.has(t)?e.get(t):e.set(t,r(t)).get(t)}function fr(e){return typeof e=="boolean"}var pr=()=>function(t){let{thunk:r=!0,immutableCheck:n=!0,serializableCheck:o=!0,actionCreatorCheck:i=!0}=t??{},s=new Ct;return r&&(fr(r)?s.push(_t):s.push(gt(r.extraArgument))),s},hr="RTK_autoBatch";var Ot=e=>t=>{setTimeout(t,e)},mr=(e={type:"raf"})=>t=>(...r)=>{let n=t(...r),o=!0,i=!1,s=!1,c=new Set,a=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Ot(10):e.type==="callback"?e.queueNotification:Ot(e.timeout),l=()=>{s=!1,i&&(i=!1,c.forEach(u=>u()))};return Object.assign({},n,{subscribe(u){let d=()=>o&&u(),h=n.subscribe(d);return c.add(u),()=>{h(),c.delete(u)}},dispatch(u){try{return o=!u?.meta?.[hr],i=!o,i&&(s||(s=!0,a(l))),n.dispatch(u)}finally{o=!0}}})},yr=e=>function(r){let{autoBatch:n=!0}=r??{},o=new Ct(e);return n&&o.push(mr(typeof n=="object"?n:void 0)),o};function Mt(e){let t=pr(),{reducer:r=void 0,middleware:n,devTools:o=!0,preloadedState:i=void 0,enhancers:s=void 0}=e||{},c;if(typeof r=="function")c=r;else if(re(r))c=nt(r);else throw new Error(D(1));let a;typeof n=="function"?a=n(t):a=t();let l=$;o&&(l=lr({trace:!1,...typeof o=="object"&&o}));let u=ot(...a),d=yr(u),h=typeof s=="function"?s(d):d(),y=l(...h);return be(c,i,y)}function Nt(e){let t={},r=[],n,o={addCase(i,s){let c=typeof i=="string"?i:i.type;if(!c)throw new Error(D(28));if(c in t)throw new Error(D(29));return t[c]=s,o},addMatcher(i,s){return r.push({matcher:i,reducer:s}),o},addDefaultCase(i){return n=i,o}};return e(o),[t,r,n]}function Er(e){return typeof e=="function"}function _r(e,t){let[r,n,o]=Nt(t),i;if(Er(e))i=()=>wt(e());else{let c=wt(e);i=()=>c}function s(c=i(),a){let l=[r[a.type],...n.filter(({matcher:u})=>u(a)).map(({reducer:u})=>u)];return l.filter(u=>!!u).length===0&&(l=[o]),l.reduce((u,d)=>{if(d)if(x(u)){let y=d(u,a);return y===void 0?u:y}else{if(T(u))return le(u,h=>d(h,a));{let h=d(u,a);if(h===void 0){if(u===null)return u;throw Error("A case reducer on a non-draftable value must not return undefined")}return h}}return u},c)}return s.getInitialState=i,s}var gr=(e,t)=>dr(e)?e.match(t):e(t);function wr(...e){return t=>e.some(r=>gr(r,t))}var br="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Or=(e=21)=>{let t="",r=e;for(;r--;)t+=br[Math.random()*64|0];return t},vr=["name","message","stack","code"],xe=class{constructor(e,t){this.payload=e,this.meta=t}_type},vt=class{constructor(e,t){this.payload=e,this.meta=t}_type},Sr=e=>{if(typeof e=="object"&&e!==null){let t={};for(let r of vr)typeof e[r]=="string"&&(t[r]=e[r]);return t}return{message:String(e)}},St="External signal was aborted",Cr=(()=>{function e(t,r,n){let o=I(t+"/fulfilled",(a,l,u,d)=>({payload:a,meta:{...d||{},arg:u,requestId:l,requestStatus:"fulfilled"}})),i=I(t+"/pending",(a,l,u)=>({payload:void 0,meta:{...u||{},arg:l,requestId:a,requestStatus:"pending"}})),s=I(t+"/rejected",(a,l,u,d,h)=>({payload:d,error:(n&&n.serializeError||Sr)(a||"Rejected"),meta:{...h||{},arg:u,requestId:l,rejectedWithValue:!!d,requestStatus:"rejected",aborted:a?.name==="AbortError",condition:a?.name==="ConditionError"}}));function c(a,{signal:l}={}){return(u,d,h)=>{let y=n?.idGenerator?n.idGenerator(a):Or(),_=new AbortController,g,E;function O(p){E=p,_.abort()}l&&(l.aborted?O(St):l.addEventListener("abort",()=>O(St),{once:!0}));let f=async function(){let p;try{let b=n?.condition?.(a,{getState:d,extra:h});if(Nr(b)&&(b=await b),b===!1||_.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};let M=new Promise((m,P)=>{g=()=>{P({name:"AbortError",message:E||"Aborted"})},_.signal.addEventListener("abort",g)});u(i(y,a,n?.getPendingMeta?.({requestId:y,arg:a},{getState:d,extra:h}))),p=await Promise.race([M,Promise.resolve(r(a,{dispatch:u,getState:d,extra:h,requestId:y,signal:_.signal,abort:O,rejectWithValue:(m,P)=>new xe(m,P),fulfillWithValue:(m,P)=>new vt(m,P)})).then(m=>{if(m instanceof xe)throw m;return m instanceof vt?o(m.payload,y,a,m.meta):o(m,y,a)})])}catch(b){p=b instanceof xe?s(null,y,a,b.payload,b.meta):s(b,y,a)}finally{g&&_.signal.removeEventListener("abort",g)}return n&&!n.dispatchConditionRejection&&s.match(p)&&p.meta.condition||u(p),p}();return Object.assign(f,{abort:O,requestId:y,arg:a,unwrap(){return f.then(Mr)}})}}return Object.assign(c,{pending:i,rejected:s,fulfilled:o,settled:wr(s,o),typePrefix:t})}return e.withTypes=()=>e,e})();function Mr(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function Nr(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var Tt=Symbol.for("rtk-slice-createasyncthunk"),hn={[Tt]:Cr};function Tr(e,t){return`${e}/${t}`}function Ar({creators:e}={}){let t=e?.asyncThunk?.[Tt];return function(n){let{name:o,reducerPath:i=o}=n;if(!o)throw new Error(D(11));typeof process<"u";let s=(typeof n.reducers=="function"?n.reducers(Pr()):n.reducers)||{},c=Object.keys(s),a={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},l={addCase(f,p){let w=typeof f=="string"?f:f.type;if(!w)throw new Error(D(12));if(w in a.sliceCaseReducersByType)throw new Error(D(13));return a.sliceCaseReducersByType[w]=p,l},addMatcher(f,p){return a.sliceMatchers.push({matcher:f,reducer:p}),l},exposeAction(f,p){return a.actionCreators[f]=p,l},exposeCaseReducer(f,p){return a.sliceCaseReducersByName[f]=p,l}};c.forEach(f=>{let p=s[f],w={reducerName:f,type:Tr(o,f),createNotation:typeof n.reducers=="function"};Ir(p)?Lr(w,p,l,t):xr(w,p,l)});function u(){let[f={},p=[],w=void 0]=typeof n.extraReducers=="function"?Nt(n.extraReducers):[n.extraReducers],b={...f,...a.sliceCaseReducersByType};return _r(n.initialState,M=>{for(let m in b)M.addCase(m,b[m]);for(let m of a.sliceMatchers)M.addMatcher(m.matcher,m.reducer);for(let m of p)M.addMatcher(m.matcher,m.reducer);w&&M.addDefaultCase(w)})}let d=f=>f,h=new Map,y;function _(f,p){return y||(y=u()),y(f,p)}function g(){return y||(y=u()),y.getInitialState()}function E(f,p=!1){function w(M){let m=M[f];return typeof m>"u"&&p&&(m=g()),m}function b(M=d){let m=bt(h,p,()=>new WeakMap);return bt(m,M,()=>{let P={};for(let[Bt,Wt]of Object.entries(n.selectors??{}))P[Bt]=Dr(Wt,M,g,p);return P})}return{reducerPath:f,getSelectors:b,get selectors(){return b(w)},selectSlice:w}}let O={name:o,reducer:_,actions:a.actionCreators,caseReducers:a.sliceCaseReducersByName,getInitialState:g,...E(i),injectInto(f,{reducerPath:p,...w}={}){let b=p??i;return f.inject({reducerPath:b,reducer:_},w),{...O,...E(b,!0)}}};return O}}function Dr(e,t,r,n){function o(i,...s){let c=t(i);return typeof c>"u"&&n&&(c=r()),e(c,...s)}return o.unwrapped=e,o}var At=Ar();function Pr(){function e(t,r){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...r}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...r){return t(...r)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,r){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:r}},asyncThunk:e}}function xr({type:e,reducerName:t,createNotation:r},n,o){let i,s;if("reducer"in n){if(r&&!kr(n))throw new Error(D(17));i=n.reducer,s=n.prepare}else i=n;o.addCase(e,i).exposeCaseReducer(t,i).exposeAction(t,s?I(e,s):I(e))}function Ir(e){return e._reducerDefinitionType==="asyncThunk"}function kr(e){return e._reducerDefinitionType==="reducerWithPrepare"}function Lr({type:e,reducerName:t},r,n,o){if(!o)throw new Error(D(18));let{payloadCreator:i,fulfilled:s,pending:c,rejected:a,settled:l,options:u}=r,d=o(e,i,u);n.exposeAction(t,d),s&&n.addCase(d.fulfilled,s),c&&n.addCase(d.pending,c),a&&n.addCase(d.rejected,a),l&&n.addMatcher(d.settled,l),n.exposeCaseReducer(t,{fulfilled:s||de,pending:c||de,rejected:a||de,settled:l||de})}function de(){}var Dt="listener",Pt="completed",xt="cancelled",mn=`task-${xt}`,yn=`task-${Pt}`,En=`${Dt}-${xt}`,_n=`${Dt}-${Pt}`;var{assign:It}=Object;var Ie="listenerMiddleware";var Rr=It(I(`${Ie}/add`),{withTypes:()=>Rr}),gn=I(`${Ie}/removeAll`),Vr=It(I(`${Ie}/remove`),{withTypes:()=>Vr});var wn=Symbol.for("rtk-state-proxy-original");function D(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var jr=()=>{let e=localStorage.getItem("contacts");if(e)try{return JSON.parse(e)}catch(t){throw console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0430\u0440\u0441\u0438\u043D\u0433\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u0437 localStorage:",t),new Error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0430\u0440\u0441\u0438\u043D\u0433\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u0437 localStorage")}return[]},zr={contacts:jr()},kt=At({name:"contacts",initialState:zr,reducers:{addContact:(e,t)=>{e.contacts.push(t.payload)},deleteContact:(e,t)=>{e.contacts=e.contacts.filter(r=>r.name!==t.payload)},editContact:(e,t)=>{let{oldName:r,newContact:n}=t.payload,o=e.contacts.findIndex(i=>i.name===r);o!==-1&&(e.contacts[o]=n)},clearAllContacts:e=>{e.contacts=[]},initializeContacts:(e,t)=>{e.contacts=t.payload}}}),{addContact:$r,deleteContact:Lt,editContact:Rt,clearAllContacts:Nn,initializeContacts:Tn}=kt.actions,Vt=kt.reducer;var Fr="contacts",jt=e=>t=>r=>{let n=t(r),i=e.getState().contacts.contacts;return localStorage.setItem(Fr,JSON.stringify(i)),n};var k=Mt({reducer:{contacts:Vt},middleware:e=>e().concat(jt)});var Y=e=>e.contacts.contacts;var fe=class{constructor(t,r){this.counterElement=t,this.contactsContainer=r,this.count=0}increase(){this.count++,this.update()}decrease(){this.count>0&&(this.count--,this.update())}reset(){this.count=0,this.update()}update(){let t=this.contactsContainer.parentElement;t&&(this.count>0?(this.counterElement.classList.add(ye),t.classList.add(he)):(this.counterElement.classList.remove(ye),t.classList.remove(he))),this.counterElement.textContent=this.count.toString()}};var pe={};function Hr({name:e,position:t,phone:r}){let i=document.querySelector(Re).content.querySelector(V)?.cloneNode(!0);if(!i)return;let s=i.querySelector(q),c=i.querySelector(Q),a=i.querySelector(Z);return!s||!c||!a?null:(s.textContent=e,c.textContent=t,a.textContent=r,i)}function zt(e,t){let r=document.querySelector(`[data-id="${e.toLowerCase()}"]`)?.closest(J);if(r){let n=r.querySelector(X);n.innerHTML="",t.forEach(({name:i,position:s,phone:c})=>{let a=Hr({name:i,position:s,phone:c});a&&n.appendChild(a)});let o=r.querySelector(je);pe[e]||(pe[e]=new fe(o,n)),pe[e].count=t.length,pe[e].update()}}function $t(e){let r=e.target.closest(V);if(!r)return;let n=r.querySelector(q)?.textContent??"";k.dispatch(Lt(n));let o=n[0].toUpperCase(),i=k.getState(),c=Y(i).filter(a=>a.name[0].toUpperCase()===o);zt(o,c)}function Ft(e,t){k.dispatch(Rt({oldName:e.name,newContact:t})),Ut()}function Ht(e){let t=e.target;if(t.closest(J)){let r=t.closest(Ve);if(!r)return;let n=r.querySelector(X);if(!n)return;n.classList.toggle(me),n.classList.contains(me)?n.style.maxHeight=`${n.scrollHeight}px`:n.style.maxHeight="0"}}document.querySelector(Ee)?.addEventListener("click",e=>{let t=e.target;if(t.closest(_e)){$t(e);return}if(t.closest(B)){let r=t.closest(V),n=r.querySelector(q)?.textContent??"",o=r.querySelector(Q)?.textContent??"",i=r.querySelector(Z)?.textContent??"";ke({name:n,position:o,phone:i})}Ht(e)});document.querySelector(Ee)?.addEventListener("keydown",e=>{let t=e;if(t.key===" "||t.key==="Enter"){e.preventDefault();let r=e.target;if(r.matches(_e)){$t(e);return}if(r.closest(B)){let n=r.closest(V),o=n.querySelector(q)?.textContent??"",i=n.querySelector(Q)?.textContent??"",s=n.querySelector(Z)?.textContent??"";ke({name:o,position:i,phone:s})}Ht(e)}});function Ut(){let e=k.getState(),t=Y(e);document.querySelectorAll(J).forEach(n=>{let o=n.querySelector(X);o.innerHTML!==""&&(o.innerHTML="")});let r={};t.forEach(n=>{let o=n.name[0].toUpperCase();r[o]||(r[o]=[]),r[o].push(n)}),Object.keys(r).forEach(n=>{zt(n,r[n])})}k.subscribe(()=>{Ut()});var qt=document.querySelector(ze),H,U,R,L=null;function ke(e){qt&&Ye(qt);let t=A.querySelector(Be);t&&(t.textContent="Edit contact"),L=e,H=A.querySelector($e),U=A.querySelector(Fe),R=A.querySelector(He),H&&U&&R&&(H.value=e.name,U.value=e.position,R.value=e.phone),A.querySelector("input").focus(),document.addEventListener("keydown",ee)}function Qn(){let e=H?.value.trim()??"",t=U?.value.trim()??"",r=R?.value??"";if(!L)return;let n=L.name,o=L.position,i=L.phone;if(!H||!U||!R)return;let s=[H,U,R],c=document.querySelector(Ue);R&&Xe(R);let a=k.getState(),l=Y(a),{isValid:u,errors:d}=tt({inputs:s,storage:l,errorMessage:c});if(!u){d.forEach(({input:_,message:g})=>{_?et(_,c,g):c.textContent=g});return}if(Ft({name:n,position:o,phone:i},{name:e,position:t,phone:r}),ge(),L){let _=document.querySelector(`[data-id="${L.name[0].toUpperCase()}"]`)?.querySelector(V);if(_){let g=_.querySelector(B);g&&g.focus()}}L=null}export{ke as openEditPopup,Qn as saveEditPopup};
