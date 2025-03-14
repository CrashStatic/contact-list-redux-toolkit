var c="contacts",n=t=>o=>e=>{let a=o(e),s=t.getState().contacts.contacts;return localStorage.setItem(c,JSON.stringify(s)),a};export{n as storageMiddleware};
