(()=>{"use strict";(()=>{const e=document.querySelector(".header"),t=e.querySelector(".header-contacts__phone-number-accord"),r=e.querySelector(".header-contacts__arrow"),o=e.querySelector(".header-contacts__phone-number-wrap"),n=document.querySelector(".popup-dialog-menu"),l=document.querySelector(".close-menu");e.addEventListener("click",(e=>{let l=e.target;("arrow"===l.getAttribute("alt")||l.classList.contains("header-contacts__arrow"))&&("1"===t.firstChild.style.opacity?(t.removeAttribute("style"),t.firstChild.removeAttribute("style"),r.firstChild.removeAttribute("style")):(t.style.top=`${o.clientHeight}px`,t.firstChild.style.opacity=1,r.firstChild.style.transform="rotate(180deg)")),l.classList.contains("menu__icon")&&(n.style.transform="translate3d(0, 0, 0)")})),l.addEventListener("click",(()=>{n.removeAttribute("style")}))})(),(()=>{const e=document.querySelector(".popup-menu-nav"),t=document.querySelector(".button-footer"),r=document.querySelector(".popup-dialog-menu");let o;const n=e=>{e.target.hasAttribute("href")&&!e.target.classList.contains("no-overflow")&&(o=e.target.getAttribute("href")),e.preventDefault();const t=document.querySelector(o);t&&(window.scrollTo({top:t.offsetTop,behavior:"smooth"}),r.removeAttribute("style"))};e.addEventListener("click",n),t.addEventListener("click",n)})(),(()=>{const e=document.querySelectorAll(".link-list"),t=document.querySelector(".popup-repair-types"),r=document.querySelector(".popup-dialog-menu");e.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),t.style.visibility="visible",r.removeAttribute("style")}))})),t.addEventListener("click",(e=>{let r=e.target;(r.classList.contains("close")||r.classList.contains("popup-repair-types"))&&t.removeAttribute("style")}))})(),function(e="+7 (___) ___-__-__"){const t=document.getElementsByName("phone");function r(t){const r=t.keyCode,o=e,n=o.replace(/\D/g,""),l=this.value.replace(/\D/g,"");console.log(o);let s=0,c=o.replace(/[_\d]/g,(function(e){return s<l.length?l.charAt(s++)||n.charAt(s):e}));s=c.indexOf("_"),-1!==s&&(c=c.slice(0,s));let i=o.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");i=new RegExp("^"+i+"$"),(!i.test(this.value)||this.value.length<5||r>47&&r<58)&&(this.value=c),"blur"===t.type&&this.value.length<5&&(this.value="")}for(const e of t)e.addEventListener("input",r),e.addEventListener("focus",r),e.addEventListener("blur",r)}()})();