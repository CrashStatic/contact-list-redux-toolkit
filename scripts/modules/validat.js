var c=3,d="input--error";function p(e,r){e.forEach(t=>{t.classList.remove(d)}),r.textContent=""}function v(e,r,t){e.classList.add(d),r.textContent=t}function h(e){let r=[];return e.forEach(t=>{t.value.trim()||r.push({input:t,message:"Fill in all fields!"})}),r}function g(e,{name:r,position:t,phone:n}){return e.some(o=>o.name?.toLowerCase()===r.toLowerCase()&&o.position?.toLowerCase()===t.toLowerCase()&&o.phone===n)?[{input:null,message:"This contact has already been recorded!"}]:[]}function f(e,r){let t=[],n=/^[a-zA-Z]+$/;return e.value.length<r&&t.push({input:e,message:`Value cannot be shorter than ${r} letters!`}),n.test(e.value)||t.push({input:e,message:"Value must contain English letters!"}),t}function L(e){return/^\+7 \d{3} \d{3} \d{2} \d{2}$/.test(e.value)?[]:[{input:e,message:"Wrong number!"}]}function C({inputs:e,storage:r,errorMessage:t}){let[n,s,o]=e;p(e,t);let a=h(e);if(a.length>0)return{isValid:!1,errors:a};let E={name:n.value,position:s.value,phone:o.value},i=g(r,E);if(i.length>0)return{isValid:!1,errors:i};let l=f(n,c);if(l.length>0)return{isValid:!1,errors:l};let u=f(s,c);if(u.length>0)return{isValid:!1,errors:u};let m=L(o);return m.length>0?{isValid:!1,errors:m}:{isValid:!0,errors:[]}}export{v as showError,C as validateForm};
