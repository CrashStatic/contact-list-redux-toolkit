var et=3,rt="input--error";function Mr(e,t){e.forEach(r=>{r.classList.remove(rt)}),t.textContent=""}function se(e,t,r){e.classList.add(rt),t.textContent=r}function Nr(e){let t=[];return e.forEach(r=>{r.value.trim()||t.push({input:r,message:"Fill in all fields!"})}),t}function Ar(e,{name:t,position:r,phone:n}){return e.some(i=>i.name?.toLowerCase()===t.toLowerCase()&&i.position?.toLowerCase()===r.toLowerCase()&&i.phone===n)?[{input:null,message:"This contact has already been recorded!"}]:[]}function tt(e,t){let r=[],n=/^[a-zA-Z]+$/;return e.value.length<t&&r.push({input:e,message:`Value cannot be shorter than ${t} letters!`}),n.test(e.value)||r.push({input:e,message:"Value must contain English letters!"}),r}function Lr(e){return/^\+7 \d{3} \d{3} \d{2} \d{2}$/.test(e.value)?[]:[{input:e,message:"Wrong number!"}]}function ae({inputs:e,storage:t,errorMessage:r}){let[n,o,i]=e;Mr(e,r);let s=Nr(e);if(s.length>0)return{isValid:!1,errors:s};let c={name:n.value,position:o.value,phone:i.value},a=Ar(t,c);if(a.length>0)return{isValid:!1,errors:a};let l=tt(n,et);if(l.length>0)return{isValid:!1,errors:l};let u=tt(o,et);if(u.length>0)return{isValid:!1,errors:u};let d=Lr(i);return d.length>0?{isValid:!1,errors:d}:{isValid:!0,errors:[]}}var nt=".body",Ae="#letter",ot="#message",it="#search-modal-content",ce=".element",Le="element--active",st=".element__letter",q=".element__contacts",Ie="element__contacts--open",ue=".element__counter",De="element__counter--active",B=".column__element",I=".message",H=".message__name",U=".message__position",W=".message__phone",Pe=".contact-table",Q=".js-delete-contact-button",z=".js-edit-contact-button",at=".js-clear-contact-button",ct=".js-search-contact-button",ut="#edit-popup-content",lt="#popup-name",dt="#popup-position",ft="#popup-phone",pt=".popup__error",mt=".modal",ht=".modal__title",Et=".modal__body",yt=".modal__input",le=".modal__search-area",de=".modal__button-show",_t=".modal__close-button",gt=".modal__overlay",wt=".form",Ot="name",bt="position",St="phone",Ct=".form__error",Tt=".form__buttons",vt=".form__button--popup-save";var K=class{constructor(t,r){this.counterElement=t,this.contactsContainer=r,this.count=0}increase(){this.count++,this.update()}decrease(){this.count>0&&(this.count--,this.update())}reset(){this.count=0,this.update()}update(){let t=this.contactsContainer.parentElement;t&&(this.count>0?(this.counterElement.classList.add(De),t.classList.add(Le)):(this.counterElement.classList.remove(De),t.classList.remove(Le))),this.counterElement.textContent=this.count.toString()}};var Mt=e=>e.key==="Escape";var w=document.querySelector(mt),Nt=document.querySelector(nt);function fe(e){w.showModal(),Nt.style.overflow="hidden";let t=w.querySelector(Et);t.innerHTML="";let r=e.content.cloneNode(!0);t.appendChild(r),w.querySelector("input").focus(),document.addEventListener("keydown",pe)}function Z(){w.close(),Nt.style.overflow="auto",document.removeEventListener("keydown",pe)}function pe(e){Mt(e)&&(e.preventDefault(),Z())}var me=e=>{let t="";e.addEventListener("input",()=>{let r=e.value.replace(/\D/g,"");if(r.length<t.length){t=r;return}r.length===1&&r[0]!=="7"&&(r=`7${r}`);let n="+7 ";r.length>1&&(n+=r.substring(1,4)),r.length>4&&(n+=` ${r.substring(4,7)}`),r.length>7&&(n+=` ${r.substring(7,9)}`),r.length>9&&(n+=` ${r.substring(9,11)}`),e.value=n,t=r})};function C(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var Ir=typeof Symbol=="function"&&Symbol.observable||"@@observable",At=Ir,xe=()=>Math.random().toString(36).substring(7).split("").join("."),Dr={INIT:`@@redux/INIT${xe()}`,REPLACE:`@@redux/REPLACE${xe()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${xe()}`},he=Dr;function Ee(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function ke(e,t,r){if(typeof e!="function")throw new Error(C(2));if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(C(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(C(1));return r(ke)(e,t)}let n=e,o=t,i=new Map,s=i,c=0,a=!1;function l(){s===i&&(s=new Map,i.forEach((y,S)=>{s.set(S,y)}))}function u(){if(a)throw new Error(C(3));return o}function d(y){if(typeof y!="function")throw new Error(C(4));if(a)throw new Error(C(5));let S=!0;l();let f=c++;return s.set(f,y),function(){if(S){if(a)throw new Error(C(6));S=!1,l(),s.delete(f),i=null}}}function m(y){if(!Ee(y))throw new Error(C(7));if(typeof y.type>"u")throw new Error(C(8));if(typeof y.type!="string")throw new Error(C(17));if(a)throw new Error(C(9));try{a=!0,o=n(o,y)}finally{a=!1}return(i=s).forEach(f=>{f()}),y}function E(y){if(typeof y!="function")throw new Error(C(10));n=y,m({type:he.REPLACE})}function _(){let y=d;return{subscribe(S){if(typeof S!="object"||S===null)throw new Error(C(11));function f(){let O=S;O.next&&O.next(u())}return f(),{unsubscribe:y(f)}},[At](){return this}}}return m({type:he.INIT}),{dispatch:m,subscribe:d,getState:u,replaceReducer:E,[At]:_}}function Pr(e){Object.keys(e).forEach(t=>{let r=e[t];if(typeof r(void 0,{type:he.INIT})>"u")throw new Error(C(12));if(typeof r(void 0,{type:he.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(C(13))})}function Lt(e){let t=Object.keys(e),r={};for(let s=0;s<t.length;s++){let c=t[s];typeof e[c]=="function"&&(r[c]=e[c])}let n=Object.keys(r),o,i;try{Pr(r)}catch(s){i=s}return function(c={},a){if(i)throw i;let l=!1,u={};for(let d=0;d<n.length;d++){let m=n[d],E=r[m],_=c[m],g=E(_,a);if(typeof g>"u"){let y=a&&a.type;throw new Error(C(14))}u[m]=g,l=l||g!==_}return l=l||n.length!==Object.keys(c).length,l?u:c}}function G(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,r)=>(...n)=>t(r(...n)))}function It(...e){return t=>(r,n)=>{let o=t(r,n),i=()=>{throw new Error(C(15))},s={getState:o.getState,dispatch:(a,...l)=>i(a,...l)},c=e.map(a=>a(s));return i=G(...c)(o.dispatch),{...o,dispatch:i}}}function Dt(e){return Ee(e)&&"type"in e&&typeof e.type=="string"}var jt=Symbol.for("immer-nothing"),Pt=Symbol.for("immer-draftable"),v=Symbol.for("immer-state");function A(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Y=Object.getPrototypeOf;function k(e){return!!e&&!!e[v]}function L(e){return e?Ht(e)||Array.isArray(e)||!!e[Pt]||!!e.constructor?.[Pt]||Oe(e)||be(e):!1}var xr=Object.prototype.constructor.toString();function Ht(e){if(!e||typeof e!="object")return!1;let t=Y(e);if(t===null)return!0;let r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object?!0:typeof r=="function"&&Function.toString.call(r)===xr}function ye(e,t){we(e)===0?Reflect.ownKeys(e).forEach(r=>{t(r,e[r],e)}):e.forEach((r,n)=>t(n,r,e))}function we(e){let t=e[v];return t?t.type_:Array.isArray(e)?1:Oe(e)?2:be(e)?3:0}function je(e,t){return we(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function zt(e,t,r){let n=we(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function kr(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function Oe(e){return e instanceof Map}function be(e){return e instanceof Set}function $(e){return e.copy_||e.base_}function He(e,t){if(Oe(e))return new Map(e);if(be(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);let r=Ht(e);if(t===!0||t==="class_only"&&!r){let n=Object.getOwnPropertyDescriptors(e);delete n[v];let o=Reflect.ownKeys(n);for(let i=0;i<o.length;i++){let s=o[i],c=n[s];c.writable===!1&&(c.writable=!0,c.configurable=!0),(c.get||c.set)&&(n[s]={configurable:!0,writable:!0,enumerable:c.enumerable,value:e[s]})}return Object.create(Y(e),n)}else{let n=Y(e);if(n!==null&&r)return{...e};let o=Object.create(n);return Object.assign(o,e)}}function Be(e,t=!1){return Se(e)||k(e)||!L(e)||(we(e)>1&&(e.set=e.add=e.clear=e.delete=Rr),Object.freeze(e),t&&Object.entries(e).forEach(([r,n])=>Be(n,!0))),e}function Rr(){A(2)}function Se(e){return Object.isFrozen(e)}var Vr={};function F(e){let t=Vr[e];return t||A(0,e),t}var ee;function $t(){return ee}function jr(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function xt(e,t){t&&(F("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function ze(e){$e(e),e.drafts_.forEach(Hr),e.drafts_=null}function $e(e){e===ee&&(ee=e.parent_)}function kt(e){return ee=jr(ee,e)}function Hr(e){let t=e[v];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function Rt(e,t){t.unfinalizedDrafts_=t.drafts_.length;let r=t.drafts_[0];return e!==void 0&&e!==r?(r[v].modified_&&(ze(t),A(4)),L(e)&&(e=_e(t,e),t.parent_||ge(t,e)),t.patches_&&F("Patches").generateReplacementPatches_(r[v].base_,e,t.patches_,t.inversePatches_)):e=_e(t,r,[]),ze(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==jt?e:void 0}function _e(e,t,r){if(Se(t))return t;let n=t[v];if(!n)return ye(t,(o,i)=>Vt(e,n,t,o,i,r)),t;if(n.scope_!==e)return t;if(!n.modified_)return ge(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;let o=n.copy_,i=o,s=!1;n.type_===3&&(i=new Set(o),o.clear(),s=!0),ye(i,(c,a)=>Vt(e,n,o,c,a,r,s)),ge(e,o,!1),r&&e.patches_&&F("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function Vt(e,t,r,n,o,i,s){if(k(o)){let c=i&&t&&t.type_!==3&&!je(t.assigned_,n)?i.concat(n):void 0,a=_e(e,o,c);if(zt(r,n,a),k(a))e.canAutoFreeze_=!1;else return}else s&&r.add(o);if(L(o)&&!Se(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;_e(e,o),(!t||!t.scope_.parent_)&&typeof n!="symbol"&&Object.prototype.propertyIsEnumerable.call(r,n)&&ge(e,o)}}function ge(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Be(t,r)}function zr(e,t){let r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:$t(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1},o=n,i=Ue;r&&(o=[n],i=te);let{revoke:s,proxy:c}=Proxy.revocable(o,i);return n.draft_=c,n.revoke_=s,c}var Ue={get(e,t){if(t===v)return e;let r=$(e);if(!je(r,t))return $r(e,r,t);let n=r[t];return e.finalized_||!L(n)?n:n===Re(e.base_,t)?(Ve(e),e.copy_[t]=qe(n,e)):n},has(e,t){return t in $(e)},ownKeys(e){return Reflect.ownKeys($(e))},set(e,t,r){let n=Ft($(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){let o=Re($(e),t),i=o?.[v];if(i&&i.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(kr(r,o)&&(r!==void 0||je(e.base_,t)))return!0;Ve(e),Fe(e)}return e.copy_[t]===r&&(r!==void 0||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty(e,t){return Re(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,Ve(e),Fe(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){let r=$(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty(){A(11)},getPrototypeOf(e){return Y(e.base_)},setPrototypeOf(){A(12)}},te={};ye(Ue,(e,t)=>{te[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});te.deleteProperty=function(e,t){return te.set.call(this,e,t,void 0)};te.set=function(e,t,r){return Ue.set.call(this,e[0],t,r,e[0])};function Re(e,t){let r=e[v];return(r?$(r):e)[t]}function $r(e,t,r){let n=Ft(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}function Ft(e,t){if(!(t in e))return;let r=Y(e);for(;r;){let n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=Y(r)}}function Fe(e){e.modified_||(e.modified_=!0,e.parent_&&Fe(e.parent_))}function Ve(e){e.copy_||(e.copy_=He(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var Fr=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,r,n)=>{if(typeof t=="function"&&typeof r!="function"){let i=r;r=t;let s=this;return function(a=i,...l){return s.produce(a,u=>r.call(this,u,...l))}}typeof r!="function"&&A(6),n!==void 0&&typeof n!="function"&&A(7);let o;if(L(t)){let i=kt(this),s=qe(t,void 0),c=!0;try{o=r(s),c=!1}finally{c?ze(i):$e(i)}return xt(i,n),Rt(o,i)}else if(!t||typeof t!="object"){if(o=r(t),o===void 0&&(o=t),o===jt&&(o=void 0),this.autoFreeze_&&Be(o,!0),n){let i=[],s=[];F("Patches").generateReplacementPatches_(t,o,i,s),n(i,s)}return o}else A(1,t)},this.produceWithPatches=(t,r)=>{if(typeof t=="function")return(s,...c)=>this.produceWithPatches(s,a=>t(a,...c));let n,o;return[this.produce(t,r,(s,c)=>{n=s,o=c}),n,o]},typeof e?.autoFreeze=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof e?.useStrictShallowCopy=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){L(e)||A(8),k(e)&&(e=qr(e));let t=kt(this),r=qe(e,void 0);return r[v].isManual_=!0,$e(t),r}finishDraft(e,t){let r=e&&e[v];(!r||!r.isManual_)&&A(9);let{scope_:n}=r;return xt(n,t),Rt(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){let o=t[r];if(o.path.length===0&&o.op==="replace"){e=o.value;break}}r>-1&&(t=t.slice(r+1));let n=F("Patches").applyPatches_;return k(e)?n(e,t):this.produce(e,o=>n(o,t))}};function qe(e,t){let r=Oe(e)?F("MapSet").proxyMap_(e,t):be(e)?F("MapSet").proxySet_(e,t):zr(e,t);return(t?t.scope_:$t()).drafts_.push(r),r}function qr(e){return k(e)||A(10,e),qt(e)}function qt(e){if(!L(e)||Se(e))return e;let t=e[v],r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=He(e,t.scope_.immer_.useStrictShallowCopy_)}else r=He(e,!0);return ye(r,(n,o)=>{zt(r,n,qt(o))}),t&&(t.finalized_=!1),r}var M=new Fr,Ce=M.produce,$n=M.produceWithPatches.bind(M),Fn=M.setAutoFreeze.bind(M),qn=M.setUseStrictShallowCopy.bind(M),Bn=M.applyPatches.bind(M),Un=M.createDraft.bind(M),Wn=M.finishDraft.bind(M);function Bt(e){return({dispatch:r,getState:n})=>o=>i=>typeof i=="function"?i(r,n,e):o(i)}var Ut=Bt(),Wt=Bt;var Br=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?G:G.apply(null,arguments)},Qn=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__:function(){return function(e){return e}},Ur=e=>e&&typeof e.match=="function";function R(e,t){function r(...n){if(t){let o=t(...n);if(!o)throw new Error(D(0));return{type:e,payload:o.payload,..."meta"in o&&{meta:o.meta},..."error"in o&&{error:o.error}}}return{type:e,payload:n[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=n=>Dt(n)&&n.type===e,r}var Qt=class re extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,re.prototype)}static get[Symbol.species](){return re}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new re(...t[0].concat(this)):new re(...t.concat(this))}};function Kt(e){return L(e)?Ce(e,()=>{}):e}function Gt(e,t,r){return e.has(t)?e.get(t):e.set(t,r(t)).get(t)}function Wr(e){return typeof e=="boolean"}var Kr=()=>function(t){let{thunk:r=!0,immutableCheck:n=!0,serializableCheck:o=!0,actionCreatorCheck:i=!0}=t??{},s=new Qt;return r&&(Wr(r)?s.push(Ut):s.push(Wt(r.extraArgument))),s},Gr="RTK_autoBatch";var Yt=e=>t=>{setTimeout(t,e)},Yr=(e={type:"raf"})=>t=>(...r)=>{let n=t(...r),o=!0,i=!1,s=!1,c=new Set,a=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Yt(10):e.type==="callback"?e.queueNotification:Yt(e.timeout),l=()=>{s=!1,i&&(i=!1,c.forEach(u=>u()))};return Object.assign({},n,{subscribe(u){let d=()=>o&&u(),m=n.subscribe(d);return c.add(u),()=>{m(),c.delete(u)}},dispatch(u){try{return o=!u?.meta?.[Gr],i=!o,i&&(s||(s=!0,a(l))),n.dispatch(u)}finally{o=!0}}})},Xr=e=>function(r){let{autoBatch:n=!0}=r??{},o=new Qt(e);return n&&o.push(Yr(typeof n=="object"?n:void 0)),o};function Zt(e){let t=Kr(),{reducer:r=void 0,middleware:n,devTools:o=!0,preloadedState:i=void 0,enhancers:s=void 0}=e||{},c;if(typeof r=="function")c=r;else if(Ee(r))c=Lt(r);else throw new Error(D(1));let a;typeof n=="function"?a=n(t):a=t();let l=G;o&&(l=Br({trace:!1,...typeof o=="object"&&o}));let u=It(...a),d=Xr(u),m=typeof s=="function"?s(d):d(),E=l(...m);return ke(c,i,E)}function er(e){let t={},r=[],n,o={addCase(i,s){let c=typeof i=="string"?i:i.type;if(!c)throw new Error(D(28));if(c in t)throw new Error(D(29));return t[c]=s,o},addMatcher(i,s){return r.push({matcher:i,reducer:s}),o},addDefaultCase(i){return n=i,o}};return e(o),[t,r,n]}function Jr(e){return typeof e=="function"}function Qr(e,t){let[r,n,o]=er(t),i;if(Jr(e))i=()=>Kt(e());else{let c=Kt(e);i=()=>c}function s(c=i(),a){let l=[r[a.type],...n.filter(({matcher:u})=>u(a)).map(({reducer:u})=>u)];return l.filter(u=>!!u).length===0&&(l=[o]),l.reduce((u,d)=>{if(d)if(k(u)){let E=d(u,a);return E===void 0?u:E}else{if(L(u))return Ce(u,m=>d(m,a));{let m=d(u,a);if(m===void 0){if(u===null)return u;throw Error("A case reducer on a non-draftable value must not return undefined")}return m}}return u},c)}return s.getInitialState=i,s}var Zr=(e,t)=>Ur(e)?e.match(t):e(t);function en(...e){return t=>e.some(r=>Zr(r,t))}var tn="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",rn=(e=21)=>{let t="",r=e;for(;r--;)t+=tn[Math.random()*64|0];return t},nn=["name","message","stack","code"],We=class{constructor(e,t){this.payload=e,this.meta=t}_type},Xt=class{constructor(e,t){this.payload=e,this.meta=t}_type},on=e=>{if(typeof e=="object"&&e!==null){let t={};for(let r of nn)typeof e[r]=="string"&&(t[r]=e[r]);return t}return{message:String(e)}},Jt="External signal was aborted",sn=(()=>{function e(t,r,n){let o=R(t+"/fulfilled",(a,l,u,d)=>({payload:a,meta:{...d||{},arg:u,requestId:l,requestStatus:"fulfilled"}})),i=R(t+"/pending",(a,l,u)=>({payload:void 0,meta:{...u||{},arg:l,requestId:a,requestStatus:"pending"}})),s=R(t+"/rejected",(a,l,u,d,m)=>({payload:d,error:(n&&n.serializeError||on)(a||"Rejected"),meta:{...m||{},arg:u,requestId:l,rejectedWithValue:!!d,requestStatus:"rejected",aborted:a?.name==="AbortError",condition:a?.name==="ConditionError"}}));function c(a,{signal:l}={}){return(u,d,m)=>{let E=n?.idGenerator?n.idGenerator(a):rn(),_=new AbortController,g,y;function S(p){y=p,_.abort()}l&&(l.aborted?S(Jt):l.addEventListener("abort",()=>S(Jt),{once:!0}));let f=async function(){let p;try{let b=n?.condition?.(a,{getState:d,extra:m});if(cn(b)&&(b=await b),b===!1||_.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};let N=new Promise((h,x)=>{g=()=>{x({name:"AbortError",message:y||"Aborted"})},_.signal.addEventListener("abort",g)});u(i(E,a,n?.getPendingMeta?.({requestId:E,arg:a},{getState:d,extra:m}))),p=await Promise.race([N,Promise.resolve(r(a,{dispatch:u,getState:d,extra:m,requestId:E,signal:_.signal,abort:S,rejectWithValue:(h,x)=>new We(h,x),fulfillWithValue:(h,x)=>new Xt(h,x)})).then(h=>{if(h instanceof We)throw h;return h instanceof Xt?o(h.payload,E,a,h.meta):o(h,E,a)})])}catch(b){p=b instanceof We?s(null,E,a,b.payload,b.meta):s(b,E,a)}finally{g&&_.signal.removeEventListener("abort",g)}return n&&!n.dispatchConditionRejection&&s.match(p)&&p.meta.condition||u(p),p}();return Object.assign(f,{abort:S,requestId:E,arg:a,unwrap(){return f.then(an)}})}}return Object.assign(c,{pending:i,rejected:s,fulfilled:o,settled:en(s,o),typePrefix:t})}return e.withTypes=()=>e,e})();function an(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function cn(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var tr=Symbol.for("rtk-slice-createasyncthunk"),no={[tr]:sn};function un(e,t){return`${e}/${t}`}function ln({creators:e}={}){let t=e?.asyncThunk?.[tr];return function(n){let{name:o,reducerPath:i=o}=n;if(!o)throw new Error(D(11));typeof process<"u";let s=(typeof n.reducers=="function"?n.reducers(fn()):n.reducers)||{},c=Object.keys(s),a={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},l={addCase(f,p){let O=typeof f=="string"?f:f.type;if(!O)throw new Error(D(12));if(O in a.sliceCaseReducersByType)throw new Error(D(13));return a.sliceCaseReducersByType[O]=p,l},addMatcher(f,p){return a.sliceMatchers.push({matcher:f,reducer:p}),l},exposeAction(f,p){return a.actionCreators[f]=p,l},exposeCaseReducer(f,p){return a.sliceCaseReducersByName[f]=p,l}};c.forEach(f=>{let p=s[f],O={reducerName:f,type:un(o,f),createNotation:typeof n.reducers=="function"};mn(p)?En(O,p,l,t):pn(O,p,l)});function u(){let[f={},p=[],O=void 0]=typeof n.extraReducers=="function"?er(n.extraReducers):[n.extraReducers],b={...f,...a.sliceCaseReducersByType};return Qr(n.initialState,N=>{for(let h in b)N.addCase(h,b[h]);for(let h of a.sliceMatchers)N.addMatcher(h.matcher,h.reducer);for(let h of p)N.addMatcher(h.matcher,h.reducer);O&&N.addDefaultCase(O)})}let d=f=>f,m=new Map,E;function _(f,p){return E||(E=u()),E(f,p)}function g(){return E||(E=u()),E.getInitialState()}function y(f,p=!1){function O(N){let h=N[f];return typeof h>"u"&&p&&(h=g()),h}function b(N=d){let h=Gt(m,p,()=>new WeakMap);return Gt(h,N,()=>{let x={};for(let[Tr,vr]of Object.entries(n.selectors??{}))x[Tr]=dn(vr,N,g,p);return x})}return{reducerPath:f,getSelectors:b,get selectors(){return b(O)},selectSlice:O}}let S={name:o,reducer:_,actions:a.actionCreators,caseReducers:a.sliceCaseReducersByName,getInitialState:g,...y(i),injectInto(f,{reducerPath:p,...O}={}){let b=p??i;return f.inject({reducerPath:b,reducer:_},O),{...S,...y(b,!0)}}};return S}}function dn(e,t,r,n){function o(i,...s){let c=t(i);return typeof c>"u"&&n&&(c=r()),e(c,...s)}return o.unwrapped=e,o}var rr=ln();function fn(){function e(t,r){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...r}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...r){return t(...r)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,r){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:r}},asyncThunk:e}}function pn({type:e,reducerName:t,createNotation:r},n,o){let i,s;if("reducer"in n){if(r&&!hn(n))throw new Error(D(17));i=n.reducer,s=n.prepare}else i=n;o.addCase(e,i).exposeCaseReducer(t,i).exposeAction(t,s?R(e,s):R(e))}function mn(e){return e._reducerDefinitionType==="asyncThunk"}function hn(e){return e._reducerDefinitionType==="reducerWithPrepare"}function En({type:e,reducerName:t},r,n,o){if(!o)throw new Error(D(18));let{payloadCreator:i,fulfilled:s,pending:c,rejected:a,settled:l,options:u}=r,d=o(e,i,u);n.exposeAction(t,d),s&&n.addCase(d.fulfilled,s),c&&n.addCase(d.pending,c),a&&n.addCase(d.rejected,a),l&&n.addMatcher(d.settled,l),n.exposeCaseReducer(t,{fulfilled:s||Te,pending:c||Te,rejected:a||Te,settled:l||Te})}function Te(){}var nr="listener",or="completed",ir="cancelled",oo=`task-${ir}`,io=`task-${or}`,so=`${nr}-${ir}`,ao=`${nr}-${or}`;var{assign:sr}=Object;var Ke="listenerMiddleware";var yn=sr(R(`${Ke}/add`),{withTypes:()=>yn}),co=R(`${Ke}/removeAll`),_n=sr(R(`${Ke}/remove`),{withTypes:()=>_n});var uo=Symbol.for("rtk-state-proxy-original");function D(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var gn=()=>{let e=localStorage.getItem("contacts");if(e)try{return JSON.parse(e)}catch(t){throw console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0430\u0440\u0441\u0438\u043D\u0433\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u0437 localStorage:",t),new Error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0430\u0440\u0441\u0438\u043D\u0433\u0430 \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u0437 localStorage")}return[]},wn={contacts:gn()},ar=rr({name:"contacts",initialState:wn,reducers:{addContact:(e,t)=>{e.contacts.push(t.payload)},deleteContact:(e,t)=>{e.contacts=e.contacts.filter(r=>r.name!==t.payload)},editContact:(e,t)=>{let r=e.contacts.findIndex(n=>n.name===t.payload.oldName);r!==-1&&(e.contacts[r]=t.payload.newContact)},clearAllContacts:e=>{e.contacts=[]},initializeContacts:(e,t)=>{e.contacts=t.payload}}}),{addContact:cr,deleteContact:ur,editContact:lr,clearAllContacts:dr,initializeContacts:yo}=ar.actions,fr=ar.reducer;var On="contacts",pr=e=>t=>r=>{let n=t(r),i=e.getState().contacts.contacts;return localStorage.setItem(On,JSON.stringify(i)),n};var T=Zt({reducer:{contacts:fr},middleware:e=>e().concat(pr)});var P=e=>e.contacts.contacts;var mr=document.querySelector(ut),X,J,j,V=null;function ne(e){mr&&fe(mr);let t=w.querySelector(ht);t&&(t.textContent="Edit contact"),V=e,X=w.querySelector(lt),J=w.querySelector(dt),j=w.querySelector(ft),X&&J&&j&&(X.value=e.name,J.value=e.position,j.value=e.phone),w.querySelector("input").focus(),document.addEventListener("keydown",pe)}function hr(){let e=X?.value.trim()??"",t=J?.value.trim()??"",r=j?.value??"";if(!V)return;let n=V.name,o=V.position,i=V.phone;if(!X||!J||!j)return;let s=[X,J,j],c=document.querySelector(pt);j&&me(j);let a=T.getState(),l=P(a),{isValid:u,errors:d}=ae({inputs:s,storage:l,errorMessage:c});if(!u){d.forEach(({input:_,message:g})=>{_?se(_,c,g):c.textContent=g});return}if(Er({name:n,position:o,phone:i},{name:e,position:t,phone:r}),Z(),V){let _=document.querySelector(`[data-id="${V.name[0].toUpperCase()}"]`)?.querySelector(I);if(_){let g=_.querySelector(z);g&&g.focus()}}V=null}var ve={};function Ge({name:e,position:t,phone:r}){let i=document.querySelector(ot).content.querySelector(I)?.cloneNode(!0);if(!i)return;let s=i.querySelector(H),c=i.querySelector(U),a=i.querySelector(W);return!s||!c||!a?null:(s.textContent=e,c.textContent=t,a.textContent=r,i)}function yr(e,t){let r=document.querySelector(`[data-id="${e.toLowerCase()}"]`)?.closest(B);if(r){let n=r.querySelector(q);n.innerHTML="",t.forEach(({name:i,position:s,phone:c})=>{let a=Ge({name:i,position:s,phone:c});a&&n.appendChild(a)});let o=r.querySelector(ue);ve[e]||(ve[e]=new K(o,n)),ve[e].count=t.length,ve[e].update()}}function _r({contact:e}){T.dispatch(cr(e))}function Me(e){let r=e.target.closest(I);if(!r)return;let n=r.querySelector(H)?.textContent??"";T.dispatch(ur(n));let o=n[0].toUpperCase(),i=T.getState(),c=P(i).filter(a=>a.name[0].toUpperCase()===o);yr(o,c)}function Er(e,t){T.dispatch(lr({oldName:e.name,newContact:t}))}function gr(e){let t=e.target;if(t.closest(B)){let r=t.closest(ce);if(!r)return;let n=r.querySelector(q);if(!n)return;n.classList.toggle(Ie),n.classList.contains(Ie)?n.style.maxHeight=`${n.scrollHeight}px`:n.style.maxHeight="0"}}document.querySelector(Pe)?.addEventListener("click",e=>{let t=e.target;if(t.closest(Q)){Me(e);return}if(t.closest(z)){let r=t.closest(I),n=r.querySelector(H)?.textContent??"",o=r.querySelector(U)?.textContent??"",i=r.querySelector(W)?.textContent??"";ne({name:n,position:o,phone:i})}gr(e)});document.querySelector(Pe)?.addEventListener("keydown",e=>{let t=e;if(t.key===" "||t.key==="Enter"){e.preventDefault();let r=e.target;if(r.matches(Q)){Me(e);return}if(r.closest(z)){let n=r.closest(I),o=n.querySelector(H)?.textContent??"",i=n.querySelector(U)?.textContent??"",s=n.querySelector(W)?.textContent??"";ne({name:o,position:i,phone:s})}gr(e)}});function Ye(){let e=T.getState(),t=P(e);document.querySelectorAll(B).forEach(n=>{let o=n.querySelector(q);o.innerHTML=""});let r={};t.forEach(n=>{let o=n.name[0].toUpperCase();r[o]||(r[o]=[]),r[o].push(n)}),Object.keys(r).forEach(n=>{yr(n,r[n])})}T.subscribe(()=>{Ye()});var bn=document.querySelector(it),oe="";function wr(e){let t=T.getState();return P(t).filter(({name:n,position:o,phone:i})=>n.toLowerCase().includes(e)||o.toLowerCase().includes(e)||i.includes(e))}function Ne(e,t){if(t.innerHTML="",e.length===0){t.textContent="No results found";return}e.forEach(({name:r,position:n,phone:o})=>{let i=Ge({name:r,position:n,phone:o});i&&t.appendChild(i)})}function Sn(e,t){e.addEventListener("input",()=>{if(oe=e.value.trim().toLowerCase(),oe){let r=wr(oe);Ne(r,t)}else t.innerHTML=""})}function Or(){fe(bn);let e=w.querySelector(yt),t=w.querySelector(le);Sn(e,t),w.querySelector(de).addEventListener("click",Xe)}function Xe(){let e=T.getState(),t=P(e),r=w.querySelector(le);Ne(t,r),w.querySelector("input").focus()}function Cn(){let e=T.getState(),t=P(e),r=w.querySelector(le);if(r)if(oe){let n=wr(oe);Ne(n,r)}else Ne(t,r)}T.subscribe(Cn);var Je=document.getElementById(Ot),Qe=document.getElementById(bt),ie=document.getElementById(St);function Tn(){let e=Je.value.trim(),t=Qe.value.trim(),r=ie.value.trim(),n=document.querySelector(Ct),o=[Je,Qe,ie],i=T.getState().contacts.contacts,{isValid:s,errors:c}=ae({inputs:o,storage:i,errorMessage:n});if(!s){c.forEach(({input:l,message:u})=>{l?se(l,n,u):n.textContent=u});return}_r({contact:{name:e,position:t,phone:r}}),Je.value="",Qe.value="",ie.value=""}function vn(){document.querySelectorAll(B).forEach(e=>{let t=e.querySelector(q);t.innerHTML="";let r=e.querySelector(ue);new K(r,t).reset()}),T.dispatch(dr())}var Mn=document.querySelector(wt);Mn.addEventListener("submit",e=>{e.preventDefault(),Tn()});var Nn=document.querySelector(Tt);Nn.addEventListener("click",e=>{let t=e.target;t.matches(at)&&vn(),t.matches(ct)&&Or()});var br=document.querySelector(Ae);if(!br)throw new Error(`Template with selector ${Ae} not found.`);var An=br.content.querySelector(ce),Ln=({letter:e,id:t})=>{let r=An?.cloneNode(!0);if(r){let n=r.querySelector(st);n.textContent=e,n.dataset.id=t,r.setAttribute("tabindex","0")}return r},Ze=(e,t)=>{let r=document.createDocumentFragment();e.forEach(n=>{let o=Ln(n);r.append(o)}),t.append(r)};var Sr=[{letter:"A",id:"a"},{letter:"B",id:"b"},{letter:"C",id:"c"},{letter:"D",id:"d"},{letter:"E",id:"e"},{letter:"F",id:"f"},{letter:"G",id:"g"},{letter:"H",id:"h"},{letter:"I",id:"i"},{letter:"J",id:"j"},{letter:"K",id:"k"},{letter:"L",id:"l"},{letter:"M",id:"m"}],Cr=[{letter:"N",id:"n"},{letter:"O",id:"o"},{letter:"P",id:"p"},{letter:"Q",id:"q"},{letter:"R",id:"r"},{letter:"S",id:"s"},{letter:"T",id:"t"},{letter:"U",id:"u"},{letter:"V",id:"v"},{letter:"W",id:"w"},{letter:"X",id:"x"},{letter:"Y",id:"y"},{letter:"Z",id:"z"}];document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".column-left"),t=document.querySelector(".column-right");Ze(Sr,e),Ze(Cr,t),Ye(),me(ie),w.addEventListener("click",r=>{let n=r.target;if(n.matches(de)&&Xe(),n.matches(vt)&&hr(),n.closest(Q)){Me(r);return}if(n.closest(z)){let o=n.closest(I),i=o.querySelector(H)?.textContent??"",s=o.querySelector(U)?.textContent??"",c=o.querySelector(W)?.textContent??"";ne({name:i,position:s,phone:c})}(n.closest(_t)||n.matches(gt))&&Z()})});
