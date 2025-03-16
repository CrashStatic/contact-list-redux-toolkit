var je=".body";var ze="#message",$e="#search-modal-content",He=".element",he="element--active";var W=".element__contacts",me="element__contacts--open",Fe=".element__counter",ye="element__counter--active",K=".column__element",j=".message",H=".message__name",G=".message__position",Y=".message__phone",Ee=".contact-table",_e=".js-delete-contact-button",X=".js-edit-contact-button";var qe="#edit-popup-content",Ue="#popup-name",Be="#popup-position",We="#popup-phone";var Ke=".modal",Ge=".modal__title",Ye=".modal__body",Xe=".modal__input",J=".modal__search-area",Je=".modal__button-show";var Q=class{constructor(t,r){this.counterElement=t,this.contactsContainer=r,this.count=0}increase(){this.count++,this.update()}decrease(){this.count>0&&(this.count--,this.update())}reset(){this.count=0,this.update()}update(){let t=this.contactsContainer.parentElement;t&&(this.count>0?(this.counterElement.classList.add(ye),t.classList.add(he)):(this.counterElement.classList.remove(ye),t.classList.remove(he))),this.counterElement.textContent=this.count.toString()}};var Qe=e=>e.key==="Escape";var b=document.querySelector(Ke),Ze=document.querySelector(je);function Z(e){b.showModal(),Ze.style.overflow="hidden";let t=b.querySelector(Ye);t.innerHTML="";let r=e.content.cloneNode(!0);t.appendChild(r),b.querySelector("input").focus(),document.addEventListener("keydown",ee)}function et(){b.close(),Ze.style.overflow="auto",document.removeEventListener("keydown",ee)}function ee(e){Qe(e)&&(e.preventDefault(),et())}function O(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var Ut=typeof Symbol=="function"&&Symbol.observable||"@@observable",tt=Ut,ge=()=>Math.random().toString(36).substring(7).split("").join("."),Bt={INIT:`@@redux/INIT${ge()}`,REPLACE:`@@redux/REPLACE${ge()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${ge()}`},te=Bt;function re(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function we(e,t,r){if(typeof e!="function")throw new Error(O(2));if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(O(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(O(1));return r(we)(e,t)}let n=e,o=t,i=new Map,s=i,c=0,a=!1;function l(){s===i&&(s=new Map,i.forEach((E,w)=>{s.set(w,E)}))}function u(){if(a)throw new Error(O(3));return o}function f(E){if(typeof E!="function")throw new Error(O(4));if(a)throw new Error(O(5));let w=!0;l();let d=c++;return s.set(d,E),function(){if(w){if(a)throw new Error(O(6));w=!1,l(),s.delete(d),i=null}}}function m(E){if(!re(E))throw new Error(O(7));if(typeof E.type>"u")throw new Error(O(8));if(typeof E.type!="string")throw new Error(O(17));if(a)throw new Error(O(9));try{a=!0,o=n(o,E)}finally{a=!1}return(i=s).forEach(d=>{d()}),E}function y(E){if(typeof E!="function")throw new Error(O(10));n=E,m({type:te.REPLACE})}function v(){let E=f;return{subscribe(w){if(typeof w!="object"||w===null)throw new Error(O(11));function d(){let _=w;_.next&&_.next(u())}return d(),{unsubscribe:E(d)}},[tt](){return this}}}return m({type:te.INIT}),{dispatch:m,subscribe:f,getState:u,replaceReducer:y,[tt]:v}}function Wt(e){Object.keys(e).forEach(t=>{let r=e[t];if(typeof r(void 0,{type:te.INIT})>"u")throw new Error(O(12));if(typeof r(void 0,{type:te.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(O(13))})}function rt(e){let t=Object.keys(e),r={};for(let s=0;s<t.length;s++){let c=t[s];typeof e[c]=="function"&&(r[c]=e[c])}let n=Object.keys(r),o,i;try{Wt(r)}catch(s){i=s}return function(c={},a){if(i)throw i;let l=!1,u={};for(let f=0;f<n.length;f++){let m=n[f],y=r[m],v=c[m],S=y(v,a);if(typeof S>"u"){let E=a&&a.type;throw new Error(O(14))}u[m]=S,l=l||S!==v}return l=l||n.length!==Object.keys(c).length,l?u:c}}function z(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,r)=>(...n)=>t(r(...n)))}function nt(...e){return t=>(r,n)=>{let o=t(r,n),i=()=>{throw new Error(O(15))},s={getState:o.getState,dispatch:(a,...l)=>i(a,...l)},c=e.map(a=>a(s));return i=z(...c)(o.dispatch),{...o,dispatch:i}}}function ot(e){return re(e)&&"type"in e&&typeof e.type=="string"}var lt=Symbol.for("immer-nothing"),it=Symbol.for("immer-draftable"),C=Symbol.for("immer-state");function N(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var $=Object.getPrototypeOf;function x(e){return!!e&&!!e[C]}function A(e){return e?dt(e)||Array.isArray(e)||!!e[it]||!!e.constructor?.[it]||ae(e)||ce(e):!1}var Kt=Object.prototype.constructor.toString();function dt(e){if(!e||typeof e!="object")return!1;let t=$(e);if(t===null)return!0;let r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object?!0:typeof r=="function"&&Function.toString.call(r)===Kt}function ne(e,t){se(e)===0?Reflect.ownKeys(e).forEach(r=>{t(r,e[r],e)}):e.forEach((r,n)=>t(n,r,e))}function se(e){let t=e[C];return t?t.type_:Array.isArray(e)?1:ae(e)?2:ce(e)?3:0}function ve(e,t){return se(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function ft(e,t,r){let n=se(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function Gt(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function ae(e){return e instanceof Map}function ce(e){return e instanceof Set}function R(e){return e.copy_||e.base_}function Se(e,t){if(ae(e))return new Map(e);if(ce(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);let r=dt(e);if(t===!0||t==="class_only"&&!r){let n=Object.getOwnPropertyDescriptors(e);delete n[C];let o=Reflect.ownKeys(n);for(let i=0;i<o.length;i++){let s=o[i],c=n[s];c.writable===!1&&(c.writable=!0,c.configurable=!0),(c.get||c.set)&&(n[s]={configurable:!0,writable:!0,enumerable:c.enumerable,value:e[s]})}return Object.create($(e),n)}else{let n=$(e);if(n!==null&&r)return{...e};let o=Object.create(n);return Object.assign(o,e)}}function Ae(e,t=!1){return ue(e)||x(e)||!A(e)||(se(e)>1&&(e.set=e.add=e.clear=e.delete=Yt),Object.freeze(e),t&&Object.entries(e).forEach(([r,n])=>Ae(n,!0))),e}function Yt(){N(2)}function ue(e){return Object.isFrozen(e)}var Xt={};function V(e){let t=Xt[e];return t||N(0,e),t}var F;function pt(){return F}function Jt(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function st(e,t){t&&(V("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Ce(e){Me(e),e.drafts_.forEach(Qt),e.drafts_=null}function Me(e){e===F&&(F=e.parent_)}function at(e){return F=Jt(F,e)}function Qt(e){let t=e[C];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function ct(e,t){t.unfinalizedDrafts_=t.drafts_.length;let r=t.drafts_[0];return e!==void 0&&e!==r?(r[C].modified_&&(Ce(t),N(4)),A(e)&&(e=oe(t,e),t.parent_||ie(t,e)),t.patches_&&V("Patches").generateReplacementPatches_(r[C].base_,e,t.patches_,t.inversePatches_)):e=oe(t,r,[]),Ce(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==lt?e:void 0}function oe(e,t,r){if(ue(t))return t;let n=t[C];if(!n)return ne(t,(o,i)=>ut(e,n,t,o,i,r)),t;if(n.scope_!==e)return t;if(!n.modified_)return ie(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;let o=n.copy_,i=o,s=!1;n.type_===3&&(i=new Set(o),o.clear(),s=!0),ne(i,(c,a)=>ut(e,n,o,c,a,r,s)),ie(e,o,!1),r&&e.patches_&&V("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function ut(e,t,r,n,o,i,s){if(x(o)){let c=i&&t&&t.type_!==3&&!ve(t.assigned_,n)?i.concat(n):void 0,a=oe(e,o,c);if(ft(r,n,a),x(a))e.canAutoFreeze_=!1;else return}else s&&r.add(o);if(A(o)&&!ue(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;oe(e,o),(!t||!t.scope_.parent_)&&typeof n!="symbol"&&Object.prototype.propertyIsEnumerable.call(r,n)&&ie(e,o)}}function ie(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Ae(t,r)}function Zt(e,t){let r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:pt(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1},o=n,i=De;r&&(o=[n],i=q);let{revoke:s,proxy:c}=Proxy.revocable(o,i);return n.draft_=c,n.revoke_=s,c}var De={get(e,t){if(t===C)return e;let r=R(e);if(!ve(r,t))return er(e,r,t);let n=r[t];return e.finalized_||!A(n)?n:n===be(e.base_,t)?(Oe(e),e.copy_[t]=Ne(n,e)):n},has(e,t){return t in R(e)},ownKeys(e){return Reflect.ownKeys(R(e))},set(e,t,r){let n=ht(R(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){let o=be(R(e),t),i=o?.[C];if(i&&i.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(Gt(r,o)&&(r!==void 0||ve(e.base_,t)))return!0;Oe(e),Te(e)}return e.copy_[t]===r&&(r!==void 0||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty(e,t){return be(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,Oe(e),Te(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){let r=R(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty(){N(11)},getPrototypeOf(e){return $(e.base_)},setPrototypeOf(){N(12)}},q={};ne(De,(e,t)=>{q[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});q.deleteProperty=function(e,t){return q.set.call(this,e,t,void 0)};q.set=function(e,t,r){return De.set.call(this,e[0],t,r,e[0])};function be(e,t){let r=e[C];return(r?R(r):e)[t]}function er(e,t,r){let n=ht(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}function ht(e,t){if(!(t in e))return;let r=$(e);for(;r;){let n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=$(r)}}function Te(e){e.modified_||(e.modified_=!0,e.parent_&&Te(e.parent_))}function Oe(e){e.copy_||(e.copy_=Se(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var tr=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,r,n)=>{if(typeof t=="function"&&typeof r!="function"){let i=r;r=t;let s=this;return function(a=i,...l){return s.produce(a,u=>r.call(this,u,...l))}}typeof r!="function"&&N(6),n!==void 0&&typeof n!="function"&&N(7);let o;if(A(t)){let i=at(this),s=Ne(t,void 0),c=!0;try{o=r(s),c=!1}finally{c?Ce(i):Me(i)}return st(i,n),ct(o,i)}else if(!t||typeof t!="object"){if(o=r(t),o===void 0&&(o=t),o===lt&&(o=void 0),this.autoFreeze_&&Ae(o,!0),n){let i=[],s=[];V("Patches").generateReplacementPatches_(t,o,i,s),n(i,s)}return o}else N(1,t)},this.produceWithPatches=(t,r)=>{if(typeof t=="function")return(s,...c)=>this.produceWithPatches(s,a=>t(a,...c));let n,o;return[this.produce(t,r,(s,c)=>{n=s,o=c}),n,o]},typeof e?.autoFreeze=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof e?.useStrictShallowCopy=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){A(e)||N(8),x(e)&&(e=rr(e));let t=at(this),r=Ne(e,void 0);return r[C].isManual_=!0,Me(t),r}finishDraft(e,t){let r=e&&e[C];(!r||!r.isManual_)&&N(9);let{scope_:n}=r;return st(n,t),ct(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){let o=t[r];if(o.path.length===0&&o.op==="replace"){e=o.value;break}}r>-1&&(t=t.slice(r+1));let n=V("Patches").applyPatches_;return x(e)?n(e,t):this.produce(e,o=>n(o,t))}};function Ne(e,t){let r=ae(e)?V("MapSet").proxyMap_(e,t):ce(e)?V("MapSet").proxySet_(e,t):Zt(e,t);return(t?t.scope_:pt()).drafts_.push(r),r}function rr(e){return x(e)||N(10,e),mt(e)}function mt(e){if(!A(e)||ue(e))return e;let t=e[C],r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=Se(e,t.scope_.immer_.useStrictShallowCopy_)}else r=Se(e,!0);return ne(r,(n,o)=>{ft(r,n,mt(o))}),t&&(t.finalized_=!1),r}var M=new tr,le=M.produce,Qr=M.produceWithPatches.bind(M),Zr=M.setAutoFreeze.bind(M),en=M.setUseStrictShallowCopy.bind(M),tn=M.applyPatches.bind(M),rn=M.createDraft.bind(M),nn=M.finishDraft.bind(M);function yt(e){return({dispatch:r,getState:n})=>o=>i=>typeof i=="function"?i(r,n,e):o(i)}var Et=yt(),_t=yt;var nr=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?z:z.apply(null,arguments)},ln=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__:function(){return function(e){return e}},or=e=>e&&typeof e.match=="function";function L(e,t){function r(...n){if(t){let o=t(...n);if(!o)throw new Error(P(0));return{type:e,payload:o.payload,..."meta"in o&&{meta:o.meta},..."error"in o&&{error:o.error}}}return{type:e,payload:n[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=n=>ot(n)&&n.type===e,r}var St=class U extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,U.prototype)}static get[Symbol.species](){return U}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new U(...t[0].concat(this)):new U(...t.concat(this))}};function gt(e){return A(e)?le(e,()=>{}):e}function wt(e,t,r){return e.has(t)?e.get(t):e.set(t,r(t)).get(t)}function ir(e){return typeof e=="boolean"}var sr=()=>function(t){let{thunk:r=!0,immutableCheck:n=!0,serializableCheck:o=!0,actionCreatorCheck:i=!0}=t??{},s=new St;return r&&(ir(r)?s.push(Et):s.push(_t(r.extraArgument))),s},ar="RTK_autoBatch";var bt=e=>t=>{setTimeout(t,e)},cr=(e={type:"raf"})=>t=>(...r)=>{let n=t(...r),o=!0,i=!1,s=!1,c=new Set,a=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:bt(10):e.type==="callback"?e.queueNotification:bt(e.timeout),l=()=>{s=!1,i&&(i=!1,c.forEach(u=>u()))};return Object.assign({},n,{subscribe(u){let f=()=>o&&u(),m=n.subscribe(f);return c.add(u),()=>{m(),c.delete(u)}},dispatch(u){try{return o=!u?.meta?.[ar],i=!o,i&&(s||(s=!0,a(l))),n.dispatch(u)}finally{o=!0}}})},ur=e=>function(r){let{autoBatch:n=!0}=r??{},o=new St(e);return n&&o.push(cr(typeof n=="object"?n:void 0)),o};function Ct(e){let t=sr(),{reducer:r=void 0,middleware:n,devTools:o=!0,preloadedState:i=void 0,enhancers:s=void 0}=e||{},c;if(typeof r=="function")c=r;else if(re(r))c=rt(r);else throw new Error(P(1));let a;typeof n=="function"?a=n(t):a=t();let l=z;o&&(l=nr({trace:!1,...typeof o=="object"&&o}));let u=nt(...a),f=ur(u),m=typeof s=="function"?s(f):f(),y=l(...m);return we(c,i,y)}function Mt(e){let t={},r=[],n,o={addCase(i,s){let c=typeof i=="string"?i:i.type;if(!c)throw new Error(P(28));if(c in t)throw new Error(P(29));return t[c]=s,o},addMatcher(i,s){return r.push({matcher:i,reducer:s}),o},addDefaultCase(i){return n=i,o}};return e(o),[t,r,n]}function lr(e){return typeof e=="function"}function dr(e,t){let[r,n,o]=Mt(t),i;if(lr(e))i=()=>gt(e());else{let c=gt(e);i=()=>c}function s(c=i(),a){let l=[r[a.type],...n.filter(({matcher:u})=>u(a)).map(({reducer:u})=>u)];return l.filter(u=>!!u).length===0&&(l=[o]),l.reduce((u,f)=>{if(f)if(x(u)){let y=f(u,a);return y===void 0?u:y}else{if(A(u))return le(u,m=>f(m,a));{let m=f(u,a);if(m===void 0){if(u===null)return u;throw Error("A case reducer on a non-draftable value must not return undefined")}return m}}return u},c)}return s.getInitialState=i,s}var fr=(e,t)=>or(e)?e.match(t):e(t);function pr(...e){return t=>e.some(r=>fr(r,t))}var hr="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",mr=(e=21)=>{let t="",r=e;for(;r--;)t+=hr[Math.random()*64|0];return t},yr=["name","message","stack","code"],Pe=class{constructor(e,t){this.payload=e,this.meta=t}_type},Ot=class{constructor(e,t){this.payload=e,this.meta=t}_type},Er=e=>{if(typeof e=="object"&&e!==null){let t={};for(let r of yr)typeof e[r]=="string"&&(t[r]=e[r]);return t}return{message:String(e)}},vt="External signal was aborted",_r=(()=>{function e(t,r,n){let o=L(t+"/fulfilled",(a,l,u,f)=>({payload:a,meta:{...f||{},arg:u,requestId:l,requestStatus:"fulfilled"}})),i=L(t+"/pending",(a,l,u)=>({payload:void 0,meta:{...u||{},arg:l,requestId:a,requestStatus:"pending"}})),s=L(t+"/rejected",(a,l,u,f,m)=>({payload:f,error:(n&&n.serializeError||Er)(a||"Rejected"),meta:{...m||{},arg:u,requestId:l,rejectedWithValue:!!f,requestStatus:"rejected",aborted:a?.name==="AbortError",condition:a?.name==="ConditionError"}}));function c(a,{signal:l}={}){return(u,f,m)=>{let y=n?.idGenerator?n.idGenerator(a):mr(),v=new AbortController,S,E;function w(p){E=p,v.abort()}l&&(l.aborted?w(vt):l.addEventListener("abort",()=>w(vt),{once:!0}));let d=async function(){let p;try{let g=n?.condition?.(a,{getState:f,extra:m});if(wr(g)&&(g=await g),g===!1||v.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};let T=new Promise((h,I)=>{S=()=>{I({name:"AbortError",message:E||"Aborted"})},v.signal.addEventListener("abort",S)});u(i(y,a,n?.getPendingMeta?.({requestId:y,arg:a},{getState:f,extra:m}))),p=await Promise.race([T,Promise.resolve(r(a,{dispatch:u,getState:f,extra:m,requestId:y,signal:v.signal,abort:w,rejectWithValue:(h,I)=>new Pe(h,I),fulfillWithValue:(h,I)=>new Ot(h,I)})).then(h=>{if(h instanceof Pe)throw h;return h instanceof Ot?o(h.payload,y,a,h.meta):o(h,y,a)})])}catch(g){p=g instanceof Pe?s(null,y,a,g.payload,g.meta):s(g,y,a)}finally{S&&v.signal.removeEventListener("abort",S)}return n&&!n.dispatchConditionRejection&&s.match(p)&&p.meta.condition||u(p),p}();return Object.assign(d,{abort:w,requestId:y,arg:a,unwrap(){return d.then(gr)}})}}return Object.assign(c,{pending:i,rejected:s,fulfilled:o,settled:pr(s,o),typePrefix:t})}return e.withTypes=()=>e,e})();function gr(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function wr(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var Tt=Symbol.for("rtk-slice-createasyncthunk"),mn={[Tt]:_r};function br(e,t){return`${e}/${t}`}function Or({creators:e}={}){let t=e?.asyncThunk?.[Tt];return function(n){let{name:o,reducerPath:i=o}=n;if(!o)throw new Error(P(11));typeof process<"u";let s=(typeof n.reducers=="function"?n.reducers(Sr()):n.reducers)||{},c=Object.keys(s),a={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},l={addCase(d,p){let _=typeof d=="string"?d:d.type;if(!_)throw new Error(P(12));if(_ in a.sliceCaseReducersByType)throw new Error(P(13));return a.sliceCaseReducersByType[_]=p,l},addMatcher(d,p){return a.sliceMatchers.push({matcher:d,reducer:p}),l},exposeAction(d,p){return a.actionCreators[d]=p,l},exposeCaseReducer(d,p){return a.sliceCaseReducersByName[d]=p,l}};c.forEach(d=>{let p=s[d],_={reducerName:d,type:br(o,d),createNotation:typeof n.reducers=="function"};Mr(p)?Nr(_,p,l,t):Cr(_,p,l)});function u(){let[d={},p=[],_=void 0]=typeof n.extraReducers=="function"?Mt(n.extraReducers):[n.extraReducers],g={...d,...a.sliceCaseReducersByType};return dr(n.initialState,T=>{for(let h in g)T.addCase(h,g[h]);for(let h of a.sliceMatchers)T.addMatcher(h.matcher,h.reducer);for(let h of p)T.addMatcher(h.matcher,h.reducer);_&&T.addDefaultCase(_)})}let f=d=>d,m=new Map,y;function v(d,p){return y||(y=u()),y(d,p)}function S(){return y||(y=u()),y.getInitialState()}function E(d,p=!1){function _(T){let h=T[d];return typeof h>"u"&&p&&(h=S()),h}function g(T=f){let h=wt(m,p,()=>new WeakMap);return wt(h,T,()=>{let I={};for(let[Ft,qt]of Object.entries(n.selectors??{}))I[Ft]=vr(qt,T,S,p);return I})}return{reducerPath:d,getSelectors:g,get selectors(){return g(_)},selectSlice:_}}let w={name:o,reducer:v,actions:a.actionCreators,caseReducers:a.sliceCaseReducersByName,getInitialState:S,...E(i),injectInto(d,{reducerPath:p,..._}={}){let g=p??i;return d.inject({reducerPath:g,reducer:v},_),{...w,...E(g,!0)}}};return w}}function vr(e,t,r,n){function o(i,...s){let c=t(i);return typeof c>"u"&&n&&(c=r()),e(c,...s)}return o.unwrapped=e,o}var Nt=Or();function Sr(){function e(t,r){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...r}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...r){return t(...r)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,r){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:r}},asyncThunk:e}}function Cr({type:e,reducerName:t,createNotation:r},n,o){let i,s;if("reducer"in n){if(r&&!Tr(n))throw new Error(P(17));i=n.reducer,s=n.prepare}else i=n;o.addCase(e,i).exposeCaseReducer(t,i).exposeAction(t,s?L(e,s):L(e))}function Mr(e){return e._reducerDefinitionType==="asyncThunk"}function Tr(e){return e._reducerDefinitionType==="reducerWithPrepare"}function Nr({type:e,reducerName:t},r,n,o){if(!o)throw new Error(P(18));let{payloadCreator:i,fulfilled:s,pending:c,rejected:a,settled:l,options:u}=r,f=o(e,i,u);n.exposeAction(t,f),s&&n.addCase(f.fulfilled,s),c&&n.addCase(f.pending,c),a&&n.addCase(f.rejected,a),l&&n.addMatcher(f.settled,l),n.exposeCaseReducer(t,{fulfilled:s||de,pending:c||de,rejected:a||de,settled:l||de})}function de(){}var At="listener",Dt="completed",Pt="cancelled",yn=`task-${Pt}`,En=`task-${Dt}`,_n=`${At}-${Pt}`,gn=`${At}-${Dt}`;var{assign:It}=Object;var Ie="listenerMiddleware";var Ar=It(L(`${Ie}/add`),{withTypes:()=>Ar}),wn=L(`${Ie}/removeAll`),Dr=It(L(`${Ie}/remove`),{withTypes:()=>Dr});var bn=Symbol.for("rtk-state-proxy-original");function P(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var Pr=()=>{let e=localStorage.getItem("contacts");if(e)try{return JSON.parse(e)}catch(t){throw console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0430\u0440\u0441\u0438\u043D\u0433\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u0437 localStorage:",t),new Error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0430\u0440\u0441\u0438\u043D\u0433\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u0437 localStorage")}return[]},Ir={contacts:Pr()},xt=Nt({name:"contacts",initialState:Ir,reducers:{addContact:(e,t)=>{e.contacts.push(t.payload)},deleteContact:(e,t)=>{e.contacts=e.contacts.filter(r=>r.name!==t.payload)},editContact:(e,t)=>{let{oldName:r,newContact:n}=t.payload,o=e.contacts.findIndex(i=>i.name===r);o!==-1&&(e.contacts[o]=n)},clearAllContacts:e=>{e.contacts=[]},initializeContacts:(e,t)=>{e.contacts=t.payload}}}),{addContact:xr,deleteContact:Lt,editContact:Lr,clearAllContacts:Nn,initializeContacts:An}=xt.actions,kt=xt.reducer;var kr="contacts",Rt=e=>t=>r=>{let n=t(r),i=e.getState().contacts.contacts;return localStorage.setItem(kr,JSON.stringify(i)),n};var D=Ct({reducer:{contacts:kt},middleware:e=>e().concat(Rt)});var k=e=>e.contacts.contacts;var Vt=document.querySelector(qe),xe,Le,ke,Rr=null;function Re(e){Vt&&Z(Vt);let t=b.querySelector(Ge);t&&(t.textContent="Edit contact"),Rr=e,xe=b.querySelector(Ue),Le=b.querySelector(Be),ke=b.querySelector(We),xe&&Le&&ke&&(xe.value=e.name,Le.value=e.position,ke.value=e.phone),b.querySelector("input").focus(),document.addEventListener("keydown",ee)}var fe={};function Ve({name:e,position:t,phone:r}){let i=document.querySelector(ze).content.querySelector(j)?.cloneNode(!0);if(!i)return;let s=i.querySelector(H),c=i.querySelector(G),a=i.querySelector(Y);return!s||!c||!a?null:(s.textContent=e,c.textContent=t,a.textContent=r,i)}function jt(e,t){let r=document.querySelector(`[data-id="${e.toLowerCase()}"]`)?.closest(K);if(r){let n=r.querySelector(W);n.innerHTML="",t.forEach(({name:i,position:s,phone:c})=>{let a=Ve({name:i,position:s,phone:c});a&&n.appendChild(a)});let o=r.querySelector(Fe);fe[e]||(fe[e]=new Q(o,n)),fe[e].count=t.length,fe[e].update()}}function zt(e){let r=e.target.closest(j);if(!r)return;let n=r.querySelector(H)?.textContent??"";D.dispatch(Lt(n));let o=n[0].toUpperCase(),i=D.getState(),c=k(i).filter(a=>a.name[0].toUpperCase()===o);jt(o,c)}function $t(e){let t=e.target;if(t.closest(K)){let r=t.closest(He);if(!r)return;let n=r.querySelector(W);if(!n)return;n.classList.toggle(me),n.classList.contains(me)?n.style.maxHeight=`${n.scrollHeight}px`:n.style.maxHeight="0"}}document.querySelector(Ee)?.addEventListener("click",e=>{let t=e.target;if(t.closest(_e)){zt(e);return}if(t.closest(X)){let r=t.closest(j),n=r.querySelector(H)?.textContent??"",o=r.querySelector(G)?.textContent??"",i=r.querySelector(Y)?.textContent??"";Re({name:n,position:o,phone:i})}$t(e)});document.querySelector(Ee)?.addEventListener("keydown",e=>{let t=e;if(t.key===" "||t.key==="Enter"){e.preventDefault();let r=e.target;if(r.matches(_e)){zt(e);return}if(r.closest(X)){let n=r.closest(j),o=n.querySelector(H)?.textContent??"",i=n.querySelector(G)?.textContent??"",s=n.querySelector(Y)?.textContent??"";Re({name:o,position:i,phone:s})}$t(e)}});function Vr(){let e=D.getState(),t=k(e);document.querySelectorAll(K).forEach(n=>{let o=n.querySelector(W);o.innerHTML!==""&&(o.innerHTML="")});let r={};t.forEach(n=>{let o=n.name[0].toUpperCase();r[o]||(r[o]=[]),r[o].push(n)}),Object.keys(r).forEach(n=>{jt(n,r[n])})}D.subscribe(()=>{Vr()});var jr=document.querySelector($e),B="";function Ht(e){let t=D.getState();return k(t).filter(({name:n,position:o,phone:i})=>n.toLowerCase().includes(e)||o.toLowerCase().includes(e)||i.includes(e))}function pe(e,t){if(t.innerHTML="",e.length===0){t.textContent="No results found";return}e.forEach(({name:r,position:n,phone:o})=>{let i=Ve({name:r,position:n,phone:o});i&&t.appendChild(i)})}function zr(e,t){e.addEventListener("input",()=>{if(B=e.value.trim().toLowerCase(),B){let r=Ht(B);pe(r,t)}else t.innerHTML=""})}function co(){Z(jr);let e=b.querySelector(Xe),t=b.querySelector(J);zr(e,t),b.querySelector(Je).addEventListener("click",$r)}function $r(){let e=D.getState(),t=k(e),r=b.querySelector(J);pe(t,r),b.querySelector("input").focus()}function Hr(){let e=D.getState(),t=k(e),r=b.querySelector(J);if(r)if(B){let n=Ht(B);pe(n,r)}else pe(t,r)}D.subscribe(Hr);export{co as openSearchModal,$r as showAllContacts};
