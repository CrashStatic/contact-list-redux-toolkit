var Ie=".body";var ke="#message";var Le=".element",le="element--active";var q=".element__contacts",de="element__contacts--open",Re=".element__counter",fe="element__counter--active",B=".column__element",V=".message",$=".message__name",W=".message__position",K=".message__phone",pe=".contact-table",he=".js-delete-contact-button",G=".js-edit-contact-button";var Ve="#edit-popup-content",je="#popup-name",ze="#popup-position",$e="#popup-phone";var Fe=".modal",He=".modal__title",Ue=".modal__body";var Y=class{constructor(t,r){this.counterElement=t,this.contactsContainer=r,this.count=0}increase(){this.count++,this.update()}decrease(){this.count>0&&(this.count--,this.update())}reset(){this.count=0,this.update()}update(){let t=this.contactsContainer.parentElement;t&&(this.count>0?(this.counterElement.classList.add(fe),t.classList.add(le)):(this.counterElement.classList.remove(fe),t.classList.remove(le))),this.counterElement.textContent=this.count.toString()}};var qe=e=>e.key==="Escape";var A=document.querySelector(Fe),Be=document.querySelector(Ie);function We(e){A.showModal(),Be.style.overflow="hidden";let t=A.querySelector(Ue);t.innerHTML="";let r=e.content.cloneNode(!0);t.appendChild(r),A.querySelector("input").focus(),document.addEventListener("keydown",X)}function Ke(){A.close(),Be.style.overflow="auto",document.removeEventListener("keydown",X)}function X(e){qe(e)&&(e.preventDefault(),Ke())}function b(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var zt=typeof Symbol=="function"&&Symbol.observable||"@@observable",Ge=zt,me=()=>Math.random().toString(36).substring(7).split("").join("."),$t={INIT:`@@redux/INIT${me()}`,REPLACE:`@@redux/REPLACE${me()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${me()}`},J=$t;function Q(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function ye(e,t,r){if(typeof e!="function")throw new Error(b(2));if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(b(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(b(1));return r(ye)(e,t)}let n=e,o=t,i=new Map,s=i,c=0,a=!1;function l(){s===i&&(s=new Map,i.forEach((E,w)=>{s.set(w,E)}))}function u(){if(a)throw new Error(b(3));return o}function f(E){if(typeof E!="function")throw new Error(b(4));if(a)throw new Error(b(5));let w=!0;l();let d=c++;return s.set(d,E),function(){if(w){if(a)throw new Error(b(6));w=!1,l(),s.delete(d),i=null}}}function m(E){if(!Q(E))throw new Error(b(7));if(typeof E.type>"u")throw new Error(b(8));if(typeof E.type!="string")throw new Error(b(17));if(a)throw new Error(b(9));try{a=!0,o=n(o,E)}finally{a=!1}return(i=s).forEach(d=>{d()}),E}function y(E){if(typeof E!="function")throw new Error(b(10));n=E,m({type:J.REPLACE})}function O(){let E=f;return{subscribe(w){if(typeof w!="object"||w===null)throw new Error(b(11));function d(){let _=w;_.next&&_.next(u())}return d(),{unsubscribe:E(d)}},[Ge](){return this}}}return m({type:J.INIT}),{dispatch:m,subscribe:f,getState:u,replaceReducer:y,[Ge]:O}}function Ft(e){Object.keys(e).forEach(t=>{let r=e[t];if(typeof r(void 0,{type:J.INIT})>"u")throw new Error(b(12));if(typeof r(void 0,{type:J.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(b(13))})}function Ye(e){let t=Object.keys(e),r={};for(let s=0;s<t.length;s++){let c=t[s];typeof e[c]=="function"&&(r[c]=e[c])}let n=Object.keys(r),o,i;try{Ft(r)}catch(s){i=s}return function(c={},a){if(i)throw i;let l=!1,u={};for(let f=0;f<n.length;f++){let m=n[f],y=r[m],O=c[m],v=y(O,a);if(typeof v>"u"){let E=a&&a.type;throw new Error(b(14))}u[m]=v,l=l||v!==O}return l=l||n.length!==Object.keys(c).length,l?u:c}}function j(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,r)=>(...n)=>t(r(...n)))}function Xe(...e){return t=>(r,n)=>{let o=t(r,n),i=()=>{throw new Error(b(15))},s={getState:o.getState,dispatch:(a,...l)=>i(a,...l)},c=e.map(a=>a(s));return i=j(...c)(o.dispatch),{...o,dispatch:i}}}function Je(e){return Q(e)&&"type"in e&&typeof e.type=="string"}var nt=Symbol.for("immer-nothing"),Qe=Symbol.for("immer-draftable"),S=Symbol.for("immer-state");function N(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var z=Object.getPrototypeOf;function x(e){return!!e&&!!e[S]}function T(e){return e?ot(e)||Array.isArray(e)||!!e[Qe]||!!e.constructor?.[Qe]||ne(e)||oe(e):!1}var Ht=Object.prototype.constructor.toString();function ot(e){if(!e||typeof e!="object")return!1;let t=z(e);if(t===null)return!0;let r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object?!0:typeof r=="function"&&Function.toString.call(r)===Ht}function Z(e,t){re(e)===0?Reflect.ownKeys(e).forEach(r=>{t(r,e[r],e)}):e.forEach((r,n)=>t(n,r,e))}function re(e){let t=e[S];return t?t.type_:Array.isArray(e)?1:ne(e)?2:oe(e)?3:0}function ge(e,t){return re(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function it(e,t,r){let n=re(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function Ut(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function ne(e){return e instanceof Map}function oe(e){return e instanceof Set}function L(e){return e.copy_||e.base_}function we(e,t){if(ne(e))return new Map(e);if(oe(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);let r=ot(e);if(t===!0||t==="class_only"&&!r){let n=Object.getOwnPropertyDescriptors(e);delete n[S];let o=Reflect.ownKeys(n);for(let i=0;i<o.length;i++){let s=o[i],c=n[s];c.writable===!1&&(c.writable=!0,c.configurable=!0),(c.get||c.set)&&(n[s]={configurable:!0,writable:!0,enumerable:c.enumerable,value:e[s]})}return Object.create(z(e),n)}else{let n=z(e);if(n!==null&&r)return{...e};let o=Object.create(n);return Object.assign(o,e)}}function Ce(e,t=!1){return ie(e)||x(e)||!T(e)||(re(e)>1&&(e.set=e.add=e.clear=e.delete=qt),Object.freeze(e),t&&Object.entries(e).forEach(([r,n])=>Ce(n,!0))),e}function qt(){N(2)}function ie(e){return Object.isFrozen(e)}var Bt={};function R(e){let t=Bt[e];return t||N(0,e),t}var F;function st(){return F}function Wt(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Ze(e,t){t&&(R("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function be(e){Oe(e),e.drafts_.forEach(Kt),e.drafts_=null}function Oe(e){e===F&&(F=e.parent_)}function et(e){return F=Wt(F,e)}function Kt(e){let t=e[S];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function tt(e,t){t.unfinalizedDrafts_=t.drafts_.length;let r=t.drafts_[0];return e!==void 0&&e!==r?(r[S].modified_&&(be(t),N(4)),T(e)&&(e=ee(t,e),t.parent_||te(t,e)),t.patches_&&R("Patches").generateReplacementPatches_(r[S].base_,e,t.patches_,t.inversePatches_)):e=ee(t,r,[]),be(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==nt?e:void 0}function ee(e,t,r){if(ie(t))return t;let n=t[S];if(!n)return Z(t,(o,i)=>rt(e,n,t,o,i,r)),t;if(n.scope_!==e)return t;if(!n.modified_)return te(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;let o=n.copy_,i=o,s=!1;n.type_===3&&(i=new Set(o),o.clear(),s=!0),Z(i,(c,a)=>rt(e,n,o,c,a,r,s)),te(e,o,!1),r&&e.patches_&&R("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function rt(e,t,r,n,o,i,s){if(x(o)){let c=i&&t&&t.type_!==3&&!ge(t.assigned_,n)?i.concat(n):void 0,a=ee(e,o,c);if(it(r,n,a),x(a))e.canAutoFreeze_=!1;else return}else s&&r.add(o);if(T(o)&&!ie(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;ee(e,o),(!t||!t.scope_.parent_)&&typeof n!="symbol"&&Object.prototype.propertyIsEnumerable.call(r,n)&&te(e,o)}}function te(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Ce(t,r)}function Gt(e,t){let r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:st(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1},o=n,i=Me;r&&(o=[n],i=H);let{revoke:s,proxy:c}=Proxy.revocable(o,i);return n.draft_=c,n.revoke_=s,c}var Me={get(e,t){if(t===S)return e;let r=L(e);if(!ge(r,t))return Yt(e,r,t);let n=r[t];return e.finalized_||!T(n)?n:n===Ee(e.base_,t)?(_e(e),e.copy_[t]=Se(n,e)):n},has(e,t){return t in L(e)},ownKeys(e){return Reflect.ownKeys(L(e))},set(e,t,r){let n=at(L(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){let o=Ee(L(e),t),i=o?.[S];if(i&&i.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(Ut(r,o)&&(r!==void 0||ge(e.base_,t)))return!0;_e(e),ve(e)}return e.copy_[t]===r&&(r!==void 0||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty(e,t){return Ee(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,_e(e),ve(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){let r=L(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty(){N(11)},getPrototypeOf(e){return z(e.base_)},setPrototypeOf(){N(12)}},H={};Z(Me,(e,t)=>{H[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});H.deleteProperty=function(e,t){return H.set.call(this,e,t,void 0)};H.set=function(e,t,r){return Me.set.call(this,e[0],t,r,e[0])};function Ee(e,t){let r=e[S];return(r?L(r):e)[t]}function Yt(e,t,r){let n=at(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}function at(e,t){if(!(t in e))return;let r=z(e);for(;r;){let n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=z(r)}}function ve(e){e.modified_||(e.modified_=!0,e.parent_&&ve(e.parent_))}function _e(e){e.copy_||(e.copy_=we(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var Xt=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,r,n)=>{if(typeof t=="function"&&typeof r!="function"){let i=r;r=t;let s=this;return function(a=i,...l){return s.produce(a,u=>r.call(this,u,...l))}}typeof r!="function"&&N(6),n!==void 0&&typeof n!="function"&&N(7);let o;if(T(t)){let i=et(this),s=Se(t,void 0),c=!0;try{o=r(s),c=!1}finally{c?be(i):Oe(i)}return Ze(i,n),tt(o,i)}else if(!t||typeof t!="object"){if(o=r(t),o===void 0&&(o=t),o===nt&&(o=void 0),this.autoFreeze_&&Ce(o,!0),n){let i=[],s=[];R("Patches").generateReplacementPatches_(t,o,i,s),n(i,s)}return o}else N(1,t)},this.produceWithPatches=(t,r)=>{if(typeof t=="function")return(s,...c)=>this.produceWithPatches(s,a=>t(a,...c));let n,o;return[this.produce(t,r,(s,c)=>{n=s,o=c}),n,o]},typeof e?.autoFreeze=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof e?.useStrictShallowCopy=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){T(e)||N(8),x(e)&&(e=Jt(e));let t=et(this),r=Se(e,void 0);return r[S].isManual_=!0,Oe(t),r}finishDraft(e,t){let r=e&&e[S];(!r||!r.isManual_)&&N(9);let{scope_:n}=r;return Ze(n,t),tt(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){let o=t[r];if(o.path.length===0&&o.op==="replace"){e=o.value;break}}r>-1&&(t=t.slice(r+1));let n=R("Patches").applyPatches_;return x(e)?n(e,t):this.produce(e,o=>n(o,t))}};function Se(e,t){let r=ne(e)?R("MapSet").proxyMap_(e,t):oe(e)?R("MapSet").proxySet_(e,t):Gt(e,t);return(t?t.scope_:st()).drafts_.push(r),r}function Jt(e){return x(e)||N(10,e),ct(e)}function ct(e){if(!T(e)||ie(e))return e;let t=e[S],r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=we(e,t.scope_.immer_.useStrictShallowCopy_)}else r=we(e,!0);return Z(r,(n,o)=>{it(r,n,ct(o))}),t&&(t.finalized_=!1),r}var C=new Xt,se=C.produce,Hr=C.produceWithPatches.bind(C),Ur=C.setAutoFreeze.bind(C),qr=C.setUseStrictShallowCopy.bind(C),Br=C.applyPatches.bind(C),Wr=C.createDraft.bind(C),Kr=C.finishDraft.bind(C);function ut(e){return({dispatch:r,getState:n})=>o=>i=>typeof i=="function"?i(r,n,e):o(i)}var lt=ut(),dt=ut;var Qt=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?j:j.apply(null,arguments)},Zr=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__:function(){return function(e){return e}},Zt=e=>e&&typeof e.match=="function";function I(e,t){function r(...n){if(t){let o=t(...n);if(!o)throw new Error(D(0));return{type:e,payload:o.payload,..."meta"in o&&{meta:o.meta},..."error"in o&&{error:o.error}}}return{type:e,payload:n[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=n=>Je(n)&&n.type===e,r}var Et=class U extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,U.prototype)}static get[Symbol.species](){return U}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new U(...t[0].concat(this)):new U(...t.concat(this))}};function ft(e){return T(e)?se(e,()=>{}):e}function pt(e,t,r){return e.has(t)?e.get(t):e.set(t,r(t)).get(t)}function er(e){return typeof e=="boolean"}var tr=()=>function(t){let{thunk:r=!0,immutableCheck:n=!0,serializableCheck:o=!0,actionCreatorCheck:i=!0}=t??{},s=new Et;return r&&(er(r)?s.push(lt):s.push(dt(r.extraArgument))),s},rr="RTK_autoBatch";var ht=e=>t=>{setTimeout(t,e)},nr=(e={type:"raf"})=>t=>(...r)=>{let n=t(...r),o=!0,i=!1,s=!1,c=new Set,a=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:ht(10):e.type==="callback"?e.queueNotification:ht(e.timeout),l=()=>{s=!1,i&&(i=!1,c.forEach(u=>u()))};return Object.assign({},n,{subscribe(u){let f=()=>o&&u(),m=n.subscribe(f);return c.add(u),()=>{m(),c.delete(u)}},dispatch(u){try{return o=!u?.meta?.[rr],i=!o,i&&(s||(s=!0,a(l))),n.dispatch(u)}finally{o=!0}}})},or=e=>function(r){let{autoBatch:n=!0}=r??{},o=new Et(e);return n&&o.push(nr(typeof n=="object"?n:void 0)),o};function _t(e){let t=tr(),{reducer:r=void 0,middleware:n,devTools:o=!0,preloadedState:i=void 0,enhancers:s=void 0}=e||{},c;if(typeof r=="function")c=r;else if(Q(r))c=Ye(r);else throw new Error(D(1));let a;typeof n=="function"?a=n(t):a=t();let l=j;o&&(l=Qt({trace:!1,...typeof o=="object"&&o}));let u=Xe(...a),f=or(u),m=typeof s=="function"?s(f):f(),y=l(...m);return ye(c,i,y)}function gt(e){let t={},r=[],n,o={addCase(i,s){let c=typeof i=="string"?i:i.type;if(!c)throw new Error(D(28));if(c in t)throw new Error(D(29));return t[c]=s,o},addMatcher(i,s){return r.push({matcher:i,reducer:s}),o},addDefaultCase(i){return n=i,o}};return e(o),[t,r,n]}function ir(e){return typeof e=="function"}function sr(e,t){let[r,n,o]=gt(t),i;if(ir(e))i=()=>ft(e());else{let c=ft(e);i=()=>c}function s(c=i(),a){let l=[r[a.type],...n.filter(({matcher:u})=>u(a)).map(({reducer:u})=>u)];return l.filter(u=>!!u).length===0&&(l=[o]),l.reduce((u,f)=>{if(f)if(x(u)){let y=f(u,a);return y===void 0?u:y}else{if(T(u))return se(u,m=>f(m,a));{let m=f(u,a);if(m===void 0){if(u===null)return u;throw Error("A case reducer on a non-draftable value must not return undefined")}return m}}return u},c)}return s.getInitialState=i,s}var ar=(e,t)=>Zt(e)?e.match(t):e(t);function cr(...e){return t=>e.some(r=>ar(r,t))}var ur="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",lr=(e=21)=>{let t="",r=e;for(;r--;)t+=ur[Math.random()*64|0];return t},dr=["name","message","stack","code"],Ne=class{constructor(e,t){this.payload=e,this.meta=t}_type},mt=class{constructor(e,t){this.payload=e,this.meta=t}_type},fr=e=>{if(typeof e=="object"&&e!==null){let t={};for(let r of dr)typeof e[r]=="string"&&(t[r]=e[r]);return t}return{message:String(e)}},yt="External signal was aborted",pr=(()=>{function e(t,r,n){let o=I(t+"/fulfilled",(a,l,u,f)=>({payload:a,meta:{...f||{},arg:u,requestId:l,requestStatus:"fulfilled"}})),i=I(t+"/pending",(a,l,u)=>({payload:void 0,meta:{...u||{},arg:l,requestId:a,requestStatus:"pending"}})),s=I(t+"/rejected",(a,l,u,f,m)=>({payload:f,error:(n&&n.serializeError||fr)(a||"Rejected"),meta:{...m||{},arg:u,requestId:l,rejectedWithValue:!!f,requestStatus:"rejected",aborted:a?.name==="AbortError",condition:a?.name==="ConditionError"}}));function c(a,{signal:l}={}){return(u,f,m)=>{let y=n?.idGenerator?n.idGenerator(a):lr(),O=new AbortController,v,E;function w(p){E=p,O.abort()}l&&(l.aborted?w(yt):l.addEventListener("abort",()=>w(yt),{once:!0}));let d=async function(){let p;try{let g=n?.condition?.(a,{getState:f,extra:m});if(mr(g)&&(g=await g),g===!1||O.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};let M=new Promise((h,P)=>{v=()=>{P({name:"AbortError",message:E||"Aborted"})},O.signal.addEventListener("abort",v)});u(i(y,a,n?.getPendingMeta?.({requestId:y,arg:a},{getState:f,extra:m}))),p=await Promise.race([M,Promise.resolve(r(a,{dispatch:u,getState:f,extra:m,requestId:y,signal:O.signal,abort:w,rejectWithValue:(h,P)=>new Ne(h,P),fulfillWithValue:(h,P)=>new mt(h,P)})).then(h=>{if(h instanceof Ne)throw h;return h instanceof mt?o(h.payload,y,a,h.meta):o(h,y,a)})])}catch(g){p=g instanceof Ne?s(null,y,a,g.payload,g.meta):s(g,y,a)}finally{v&&O.signal.removeEventListener("abort",v)}return n&&!n.dispatchConditionRejection&&s.match(p)&&p.meta.condition||u(p),p}();return Object.assign(d,{abort:w,requestId:y,arg:a,unwrap(){return d.then(hr)}})}}return Object.assign(c,{pending:i,rejected:s,fulfilled:o,settled:cr(s,o),typePrefix:t})}return e.withTypes=()=>e,e})();function hr(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function mr(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var wt=Symbol.for("rtk-slice-createasyncthunk"),on={[wt]:pr};function yr(e,t){return`${e}/${t}`}function Er({creators:e}={}){let t=e?.asyncThunk?.[wt];return function(n){let{name:o,reducerPath:i=o}=n;if(!o)throw new Error(D(11));typeof process<"u";let s=(typeof n.reducers=="function"?n.reducers(gr()):n.reducers)||{},c=Object.keys(s),a={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},l={addCase(d,p){let _=typeof d=="string"?d:d.type;if(!_)throw new Error(D(12));if(_ in a.sliceCaseReducersByType)throw new Error(D(13));return a.sliceCaseReducersByType[_]=p,l},addMatcher(d,p){return a.sliceMatchers.push({matcher:d,reducer:p}),l},exposeAction(d,p){return a.actionCreators[d]=p,l},exposeCaseReducer(d,p){return a.sliceCaseReducersByName[d]=p,l}};c.forEach(d=>{let p=s[d],_={reducerName:d,type:yr(o,d),createNotation:typeof n.reducers=="function"};br(p)?vr(_,p,l,t):wr(_,p,l)});function u(){let[d={},p=[],_=void 0]=typeof n.extraReducers=="function"?gt(n.extraReducers):[n.extraReducers],g={...d,...a.sliceCaseReducersByType};return sr(n.initialState,M=>{for(let h in g)M.addCase(h,g[h]);for(let h of a.sliceMatchers)M.addMatcher(h.matcher,h.reducer);for(let h of p)M.addMatcher(h.matcher,h.reducer);_&&M.addDefaultCase(_)})}let f=d=>d,m=new Map,y;function O(d,p){return y||(y=u()),y(d,p)}function v(){return y||(y=u()),y.getInitialState()}function E(d,p=!1){function _(M){let h=M[d];return typeof h>"u"&&p&&(h=v()),h}function g(M=f){let h=pt(m,p,()=>new WeakMap);return pt(h,M,()=>{let P={};for(let[Vt,jt]of Object.entries(n.selectors??{}))P[Vt]=_r(jt,M,v,p);return P})}return{reducerPath:d,getSelectors:g,get selectors(){return g(_)},selectSlice:_}}let w={name:o,reducer:O,actions:a.actionCreators,caseReducers:a.sliceCaseReducersByName,getInitialState:v,...E(i),injectInto(d,{reducerPath:p,..._}={}){let g=p??i;return d.inject({reducerPath:g,reducer:O},_),{...w,...E(g,!0)}}};return w}}function _r(e,t,r,n){function o(i,...s){let c=t(i);return typeof c>"u"&&n&&(c=r()),e(c,...s)}return o.unwrapped=e,o}var bt=Er();function gr(){function e(t,r){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...r}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...r){return t(...r)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,r){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:r}},asyncThunk:e}}function wr({type:e,reducerName:t,createNotation:r},n,o){let i,s;if("reducer"in n){if(r&&!Or(n))throw new Error(D(17));i=n.reducer,s=n.prepare}else i=n;o.addCase(e,i).exposeCaseReducer(t,i).exposeAction(t,s?I(e,s):I(e))}function br(e){return e._reducerDefinitionType==="asyncThunk"}function Or(e){return e._reducerDefinitionType==="reducerWithPrepare"}function vr({type:e,reducerName:t},r,n,o){if(!o)throw new Error(D(18));let{payloadCreator:i,fulfilled:s,pending:c,rejected:a,settled:l,options:u}=r,f=o(e,i,u);n.exposeAction(t,f),s&&n.addCase(f.fulfilled,s),c&&n.addCase(f.pending,c),a&&n.addCase(f.rejected,a),l&&n.addMatcher(f.settled,l),n.exposeCaseReducer(t,{fulfilled:s||ae,pending:c||ae,rejected:a||ae,settled:l||ae})}function ae(){}var Ot="listener",vt="completed",St="cancelled",sn=`task-${St}`,an=`task-${vt}`,cn=`${Ot}-${St}`,un=`${Ot}-${vt}`;var{assign:Ct}=Object;var Te="listenerMiddleware";var Sr=Ct(I(`${Te}/add`),{withTypes:()=>Sr}),ln=I(`${Te}/removeAll`),Cr=Ct(I(`${Te}/remove`),{withTypes:()=>Cr});var dn=Symbol.for("rtk-state-proxy-original");function D(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var Mr=()=>{let e=localStorage.getItem("contacts");if(e)try{return JSON.parse(e)}catch(t){throw console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0430\u0440\u0441\u0438\u043D\u0433\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u0437 localStorage:",t),new Error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0430\u0440\u0441\u0438\u043D\u0433\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u0437 localStorage")}return[]},Nr={contacts:Mr()},Mt=bt({name:"contacts",initialState:Nr,reducers:{addContact:(e,t)=>{e.contacts.push(t.payload)},deleteContact:(e,t)=>{e.contacts=e.contacts.filter(r=>r.name!==t.payload)},editContact:(e,t)=>{let r=e.contacts.findIndex(n=>n.name===t.payload.oldName);r!==-1&&(e.contacts[r]=t.payload.newContact)},clearAllContacts:e=>{e.contacts=[]},initializeContacts:(e,t)=>{e.contacts=t.payload}}}),{addContact:Nt,deleteContact:Tt,editContact:At,clearAllContacts:_n,initializeContacts:gn}=Mt.actions,Dt=Mt.reducer;var Tr="contacts",Pt=e=>t=>r=>{let n=t(r),i=e.getState().contacts.contacts;return localStorage.setItem(Tr,JSON.stringify(i)),n};var k=_t({reducer:{contacts:Dt},middleware:e=>e().concat(Pt)});var ce=e=>e.contacts.contacts;var xt=document.querySelector(Ve),Ae,De,Pe,Ar=null;function xe(e){xt&&We(xt);let t=A.querySelector(He);t&&(t.textContent="Edit contact"),Ar=e,Ae=A.querySelector(je),De=A.querySelector(ze),Pe=A.querySelector($e),Ae&&De&&Pe&&(Ae.value=e.name,De.value=e.position,Pe.value=e.phone),A.querySelector("input").focus(),document.addEventListener("keydown",X)}var ue={};function It({name:e,position:t,phone:r}){let i=document.querySelector(ke).content.querySelector(V)?.cloneNode(!0);if(!i)return;let s=i.querySelector($),c=i.querySelector(W),a=i.querySelector(K);return!s||!c||!a?null:(s.textContent=e,c.textContent=t,a.textContent=r,i)}function Bn(e,t){t.innerHTML="",e.forEach(({name:r,position:n,phone:o})=>{let i=It({name:r,position:n,phone:o});i&&t.append(i)})}function kt(e,t){let r=document.querySelector(`[data-id="${e.toLowerCase()}"]`)?.closest(B);if(r){let n=r.querySelector(q);n.innerHTML="",t.forEach(({name:i,position:s,phone:c})=>{let a=It({name:i,position:s,phone:c});a&&n.appendChild(a)});let o=r.querySelector(Re);ue[e]||(ue[e]=new Y(o,n)),ue[e].count=t.length,ue[e].update()}}function Wn({contact:e}){k.dispatch(Nt(e))}function Lt(e){let r=e.target.closest(V);if(!r)return;let n=r.querySelector($)?.textContent??"";k.dispatch(Tt(n));let o=n[0].toUpperCase(),i=k.getState(),c=ce(i).filter(a=>a.name[0].toUpperCase()===o);kt(o,c)}function Dr(e,t){k.dispatch(At({oldName:e.name,newContact:t}))}function Rt(e){let t=e.target;if(t.closest(B)){let r=t.closest(Le);if(!r)return;let n=r.querySelector(q);if(!n)return;n.classList.toggle(de),n.classList.contains(de)?n.style.maxHeight=`${n.scrollHeight}px`:n.style.maxHeight="0"}}document.querySelector(pe)?.addEventListener("click",e=>{let t=e.target;if(t.closest(he)){Lt(e);return}if(t.closest(G)){let r=t.closest(V),n=r.querySelector($)?.textContent??"",o=r.querySelector(W)?.textContent??"",i=r.querySelector(K)?.textContent??"";xe({name:n,position:o,phone:i})}Rt(e)});document.querySelector(pe)?.addEventListener("keydown",e=>{let t=e;if(t.key===" "||t.key==="Enter"){e.preventDefault();let r=e.target;if(r.matches(he)){Lt(e);return}if(r.closest(G)){let n=r.closest(V),o=n.querySelector($)?.textContent??"",i=n.querySelector(W)?.textContent??"",s=n.querySelector(K)?.textContent??"";xe({name:o,position:i,phone:s})}Rt(e)}});function Pr(){let e=k.getState(),t=ce(e);document.querySelectorAll(B).forEach(n=>{let o=n.querySelector(q);o.innerHTML=""});let r={};t.forEach(n=>{let o=n.name[0].toUpperCase();r[o]||(r[o]=[]),r[o].push(n)}),Object.keys(r).forEach(n=>{kt(n,r[n])})}k.subscribe(()=>{Pr()});export{Wn as addContact,Lt as deleteContact,Pr as renderAllContacts,kt as renderColumn,It as renderContactElement,Bn as renderContacts,Dr as updateContact};
