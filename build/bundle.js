(()=>{"use strict";(()=>{const e=document.querySelector(".header"),t=e.querySelector(".header-contacts__phone-number-accord"),r=e.querySelector(".header-contacts__arrow"),n=e.querySelector(".header-contacts__phone-number-wrap"),l=document.querySelector(".popup-dialog-menu"),o=document.querySelector(".close-menu");l.style.display="none",e.addEventListener("click",(e=>{let o=e.target;("arrow"===o.getAttribute("alt")||o.classList.contains("header-contacts__arrow"))&&("1"===t.firstChild.style.opacity?(t.removeAttribute("style"),t.firstChild.removeAttribute("style"),r.firstChild.removeAttribute("style")):(t.style.top=`${n.clientHeight}px`,t.firstChild.style.opacity=1,r.firstChild.style.transform="rotate(180deg)")),o.classList.contains("menu__icon")&&(l.style.display="block",l.style.transform="translate3d(0, 0, 0)")})),o.addEventListener("click",(()=>{l.removeAttribute("style"),l.style.display="none"}))})(),(()=>{const e=document.querySelector(".popup-menu-nav"),t=document.querySelector(".button-footer"),r=document.querySelector(".popup-dialog-menu");let n;const l=e=>{e.target.hasAttribute("href")&&!e.target.classList.contains("no-overflow")&&(n=e.target.getAttribute("href")),e.preventDefault();const t=document.querySelector(n);t&&(window.scrollTo({top:t.offsetTop,behavior:"smooth"}),r.removeAttribute("style"),r.style.display="none")};e.addEventListener("click",l),t.addEventListener("click",l)})(),(()=>{const e=document.querySelectorAll(".link-list"),t=document.querySelector(".popup-repair-types"),r=document.querySelector(".popup-dialog-menu");e.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),t.style.visibility="visible",r.removeAttribute("style"),r.style.display="none"}))})),t.addEventListener("click",(e=>{let r=e.target;(r.classList.contains("close")||r.classList.contains("popup-repair-types"))&&t.removeAttribute("style")}))})(),function(e="+7 (___) ___-__-__"){const t=document.getElementsByName("phone");function r(t){const r=t.keyCode,n=e,l=n.replace(/\D/g,""),o=this.value.replace(/\D/g,"");let i=0,c=n.replace(/[_\d]/g,(function(e){return i<o.length?o.charAt(i++)||l.charAt(i):e}));i=c.indexOf("_"),-1!==i&&(c=c.slice(0,i));let s=n.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");s=new RegExp("^"+s+"$"),(!s.test(this.value)||this.value.length<5||r>47&&r<58)&&(this.value=c),"blur"===t.type&&this.value.length<5&&(this.value="")}for(const e of t)e.addEventListener("input",r),e.addEventListener("focus",r),e.addEventListener("blur",r)}(),(()=>{const e=document.querySelectorAll(".link-privacy"),t=document.querySelector(".popup-privacy");e.forEach((e=>{e.addEventListener("click",(()=>{t.style.visibility="visible"}))})),t.addEventListener("click",(e=>{let r=e.target;(r.classList.contains("close")||r.classList.contains("popup-privacy"))&&t.removeAttribute("style")}))})(),document.querySelectorAll(".formula-item__icon").forEach((e=>{e.addEventListener("mouseenter",(e=>{let t=e.target;t.children[0].style.visibility="visible",t.children[0].style.opacity=1;let r=t.parentNode.getBoundingClientRect().height+t.children[0].getBoundingClientRect().height;t.children[0].getBoundingClientRect().top<=0&&(t.children[0].style.transform=`translate3d(0, ${r}px, 0)`)})),e.addEventListener("mouseleave",(e=>{e.target.children[0].removeAttribute("style")}))})),document.querySelector(".accordion").querySelectorAll(".title_block").forEach((e=>{e.addEventListener("click",(()=>{e.classList.toggle("msg-active")}))})),(()=>{const e=document.getElementById("repair-types"),t=e.querySelectorAll("button"),r=e.querySelector(".repair-types-slider"),n=document.getElementById("repair-types-arrow_right"),l=document.getElementById("repair-types-arrow_left"),o=e.querySelector(".slider-counter-content__current"),i=e.querySelector(".slider-counter-content__total"),c=e.querySelector(".nav-list"),s=document.getElementById("nav-arrow-repair-right_base"),a=document.getElementById("nav-arrow-repair-left_base");console.dir(c);let d=0,u=0,p=r.children[0];const y=c.offsetWidth/4;let h=0;i.textContent=p.children.length,e.addEventListener("click",(e=>{let m=e.target;if(m!==s&&m.parentNode!==s&&m.parentNode.parentNode!==s||(h+=y,h>720&&(h=0),c.style.transform=`translateX(-${h}px)`),m!==a&&m.parentNode!==a&&m.parentNode.parentNode!==a||(h-=y,h<0&&(h=720),c.style.transform=`translateX(-${h}px)`),"BUTTON"===m.tagName){d=0,t.forEach((e=>{e.classList.remove("active")})),m.classList.add("active");for(let e=0;e<t.length;e++)t[e].classList.contains("active")?(u=e,r.children[e].style.display="block"):r.children[e].style.display="none"}p=r.children[u],i.textContent=p.children.length,m!==n&&m.parentNode!==n&&m.parentNode.parentNode!==n||(d+=1),m!==l&&m.parentNode!==l&&m.parentNode.parentNode!==l||(d-=1),d===p.children.length&&(d=0),d<0&&(d=p.children.length-1);for(let e=0;e<p.children.length;e++)e===d?(p.children[e].style.display="block",o.textContent=e+1):p.children[e].style.display="none"}))})()})();