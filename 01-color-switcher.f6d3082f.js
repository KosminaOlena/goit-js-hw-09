const t=document.body,e=document.querySelector("button[data-start]"),r=document.querySelector("button[data-stop]");function d(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}e.addEventListener("click",(function(){t.style.backgroundColor=`${d()}`,timerId=setInterval((()=>{t.style.backgroundColor=`${d()}`}),1e3),e.setAttribute("disabled","true"),r.removeAttribute("disabled")})),r.addEventListener("click",(function(){e.hasAttribute("disabled")&&(clearInterval(timerId),e.removeAttribute("disabled"),r.setAttribute("disabled","true"))})),r.setAttribute("disabled","true");
//# sourceMappingURL=01-color-switcher.f6d3082f.js.map
