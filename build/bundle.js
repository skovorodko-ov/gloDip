(()=>{"use strict";const e=(e,t,r,n,l="",o="",i=0)=>{const c=document.querySelector(e),s=c.querySelector(t),a=c.querySelector(r),d=c.querySelector(n);let p,u;l&&(p=c.querySelector(l),p.textContent=1),o&&(u=c.querySelector(o),u.textContent=s.children.length);let y=i;const h=e=>{for(let t=0;t<s.children.length;t++)s.children[t].style.display="none",e===t&&(s.children[t].style.display="flex",l?p.textContent=t+1:l="")};h(y),a.addEventListener("click",(()=>{y+=1,y===s.children.length&&(y=0),h(y)})),d.addEventListener("click",(()=>{y-=1,y<0&&(y=s.children.length-1),h(y)}))},t=(e,t,r,n,l="",o="",i=0)=>{const c=document.querySelector(e),s=c.querySelector(t),a=c.querySelector(r),d=c.querySelector(n);let p,u;l&&(p=c.querySelector(l),p.textContent=1),o&&(u=c.querySelector(o),u.textContent=s.children.length);let y=i;const h=e=>{for(let t=0;t<s.children.length;t++)s.children[t].style.display="none",e===t&&(s.children[t].style.display="flex",l?p.textContent=t+1:l="")};h(y),a.addEventListener("click",(()=>{y+=1,y===s.children.length&&(y=0),h(y)})),d.addEventListener("click",(()=>{y-=1,y<0&&(y=s.children.length-1),h(y)}))};(()=>{const e=document.querySelector(".header"),t=e.querySelector(".header-contacts__phone-number-accord"),r=e.querySelector(".header-contacts__arrow"),n=e.querySelector(".header-contacts__phone-number-wrap"),l=document.querySelector(".popup-dialog-menu"),o=document.querySelector(".close-menu");l.style.visibility="hidden",e.addEventListener("click",(e=>{let o=e.target;("arrow"===o.getAttribute("alt")||o.classList.contains("header-contacts__arrow"))&&("1"===t.firstChild.style.opacity?(t.removeAttribute("style"),t.firstChild.removeAttribute("style"),r.firstChild.removeAttribute("style")):(t.style.top=`${n.clientHeight}px`,t.firstChild.style.opacity=1,r.firstChild.style.transform="rotate(180deg)")),o.classList.contains("menu__icon")&&(l.style.visibility="visible",l.style.transform="translate3d(0, 0, 0)")})),o.addEventListener("click",(()=>{l.removeAttribute("style"),l.style.visibility="hidden"}))})(),(()=>{const e=document.querySelector(".popup-menu-nav"),t=document.querySelector(".button-footer"),r=document.querySelector(".popup-dialog-menu");let n;const l=e=>{e.target.hasAttribute("href")&&!e.target.classList.contains("no-overflow")&&(n=e.target.getAttribute("href")),e.preventDefault();const t=document.querySelector(n);t&&(window.scrollTo({top:t.offsetTop,behavior:"smooth"}),r.removeAttribute("style"),r.style.visibility="hidden")};e.addEventListener("click",l),t.addEventListener("click",l)})(),(()=>{const e=document.querySelectorAll(".link-list"),t=document.querySelector(".popup-repair-types"),r=document.querySelector(".popup-dialog-menu");e.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),t.style.visibility="visible",r.removeAttribute("style"),r.style.visibility="hidden"}))})),t.addEventListener("click",(e=>{let r=e.target;(r.classList.contains("close")||r.classList.contains("popup-repair-types"))&&t.removeAttribute("style")}))})(),function(e="+7 (___) ___-__-__"){const t=document.getElementsByName("phone");function r(t){const r=t.keyCode,n=e,l=n.replace(/\D/g,""),o=this.value.replace(/\D/g,"");let i=0,c=n.replace(/[_\d]/g,(function(e){return i<o.length?o.charAt(i++)||l.charAt(i):e}));i=c.indexOf("_"),-1!==i&&(c=c.slice(0,i));let s=n.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");s=new RegExp("^"+s+"$"),(!s.test(this.value)||this.value.length<5||r>47&&r<58)&&(this.value=c),"blur"===t.type&&this.value.length<5&&(this.value="")}for(const e of t)e.addEventListener("input",r),e.addEventListener("focus",r),e.addEventListener("blur",r)}(),(()=>{const e=document.querySelectorAll(".link-privacy"),t=document.querySelector(".popup-privacy");e.forEach((e=>{e.addEventListener("click",(()=>{t.style.visibility="visible"}))})),t.addEventListener("click",(e=>{let r=e.target;(r.classList.contains("close")||r.classList.contains("popup-privacy"))&&t.removeAttribute("style")}))})(),(()=>{const e=document.querySelector(".accordion").querySelectorAll(".title_block");e.forEach((t=>{t.addEventListener("click",(t=>{e.forEach((e=>{e===t.target?e.classList.toggle("msg-active"):e.classList.remove("msg-active")}))}))}))})(),(()=>{const e=document.getElementById("repair-types"),t=e.querySelectorAll("button"),r=e.querySelector(".repair-types-slider"),n=document.getElementById("repair-types-arrow_right"),l=document.getElementById("repair-types-arrow_left"),o=e.querySelector(".slider-counter-content__current"),i=e.querySelector(".slider-counter-content__total"),c=e.querySelector(".nav-list"),s=document.getElementById("nav-arrow-repair-right_base"),a=document.getElementById("nav-arrow-repair-left_base");let d=0,p=0,u=r.children[0];const y=c.offsetWidth/4;let h=0;i.textContent=u.children.length,e.addEventListener("click",(e=>{let m=e.target;if(m!==s&&m.parentNode!==s&&m.parentNode.parentNode!==s||(h+=y,h>1024&&(h=0),c.style.transform=`translateX(-${h}px)`),m!==a&&m.parentNode!==a&&m.parentNode.parentNode!==a||(h-=y,h<0&&(h=1024),c.style.transform=`translateX(-${h}px)`),"BUTTON"===m.tagName){d=0,t.forEach((e=>{e.classList.remove("active")})),m.classList.add("active");for(let e=0;e<t.length;e++)t[e].classList.contains("active")?(p=e,r.children[e].style.display="block"):r.children[e].style.display="none"}u=r.children[p],i.textContent=u.children.length,m!==n&&m.parentNode!==n&&m.parentNode.parentNode!==n||(d+=1),m!==l&&m.parentNode!==l&&m.parentNode.parentNode!==l||(d-=1),d===u.children.length&&(d=0),d<0&&(d=u.children.length-1);for(let e=0;e<u.children.length;e++)e===d?(u.children[e].style.display="block",o.textContent=e+1):u.children[e].style.display="none"}))})(),e("#reviews",".reviews-slider","#reviews-arrow_right","#reviews-arrow_left"),document.documentElement.clientWidth<1090&&t("#transparency",".transparency-slider","#transparency-arrow_right","#transparency-arrow_left"),window.addEventListener("resize",(()=>{if(document.documentElement.clientWidth<1090)t("#transparency",".transparency-slider","#transparency-arrow_right","#transparency-arrow_left");else{const e=document.querySelector(".transparency-slider");for(let t=0;t<e.children.length;t++)e.children[t].removeAttribute("style")}})),(()=>{const e=document.querySelectorAll(".transparency-item__img"),t=document.querySelector(".popup-transparency");e.forEach((r=>{r.addEventListener("click",(r=>{let n;t.style.visibility="visible";for(let t=0;t<e.length;t++)r.target===e[t]&&(n=t);((e,t,r,n,l="",o="",i=0)=>{const c=document.querySelector(e),s=c.querySelector(t),a=c.querySelector(r),d=c.querySelector(n);let p,u;l&&(p=c.querySelector(l),p.textContent=1),o&&(u=c.querySelector(o),u.textContent=s.children.length);let y=i;const h=e=>{for(let t=0;t<s.children.length;t++)s.children[t].style.display="none",e===t&&(s.children[t].style.display="flex",l?p.textContent=t+1:l="")};h(y),a.addEventListener("click",(()=>{y+=1,y===s.children.length&&(y=0),h(y)})),d.addEventListener("click",(()=>{y-=1,y<0&&(y=s.children.length-1),h(y)}))})(".popup-transparency",".popup-transparency-slider","#transparency_right","#transparency_left",".slider-counter-content__current",".slider-counter-content__total",n)}))})),t.addEventListener("click",(e=>{let r=e.target;(r.classList.contains("popup-transparency")||r.classList.contains("close"))&&t.removeAttribute("style")}))})(),(()=>{const e=document.querySelectorAll("form"),t=document.querySelector(".popup-thank");t.addEventListener("click",(e=>{let r=e.target;(r.classList.contains("popup-thank")||r.classList.contains("close"))&&t.removeAttribute("style")}));e.forEach((e=>{(e=>{const r=document.getElementById(e),n=r.querySelector(".checkbox__input");r.addEventListener("submit",(e=>{if(e.preventDefault(),!n.checked)return;const l=new FormData(r);let o={};l.forEach(((e,t)=>{o[t]=e}));for(let e in o)if(!o[e])return;(async()=>{try{const e=await(e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"aplication/json"},body:JSON.stringify(e)}))(o);(e=>{if(200!==e.status)throw new Error("status network not 200.");t.style.visibility="visible"})(e),r.querySelectorAll("input").forEach((e=>{e.value="",e.checked&&(e.checked=!1)}))}catch(e){(e=>{console.worm(e)})(e)}})()}))})(e.id)}))})(),(()=>{const e=document.querySelector(".popup-consultation");document.querySelectorAll(".button_wide").forEach((t=>{t.addEventListener("click",(()=>{e.style.visibility="visible"}))})),e.addEventListener("click",(t=>{let r=t.target;(r.classList.contains("popup-consultation")||r.classList.contains("close"))&&e.removeAttribute("style")}))})(),(()=>{const e=document.querySelector(".popup-repair-types"),t=e.querySelector(".nav-list-popup-repair"),r=e.querySelector("tbody"),n=document.createElement("style");n.innerHTML="\n      .activeType {\n        font-weight: bold;\n      }\n    ",document.head.append(n),fetch("../crm-backend/db.json").then((e=>{if(200!==e.status)throw new Error("status networn not 200");return e.text()})).then((e=>JSON.parse(e))).then((e=>{let r=[];return e.forEach((e=>{r.push(e.type)})),r=new Set(r),r.forEach((e=>{const r=document.createElement("button");r.classList.add("button_o"),r.classList.add("popup-repair-types-nav__item"),r.innerText=e,t.append(r)})),t.querySelectorAll("button")[0].classList.add("activeType"),e})).then((e=>{const n=e=>{const t=document.createElement("tr");t.classList.add("mobile-row"),t.innerHTML=`\n        <td class="repair-types-name">${e.name}</td>\n\t\t\t\t<td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>\n\t\t\t\t<td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>\n\t\t\t\t<td class="repair-types-value">${e.units}</td>\n\t\t\t\t<td class="repair-types-value">${e.cost} руб.</td>\n      `,r.append(t)},l=t.querySelectorAll("button");e.forEach((e=>{e.type===l[0].textContent&&n(e)})),t.addEventListener("click",(t=>{let o=t.target;"BUTTON"===o.tagName&&l.forEach((e=>{e.classList.remove("activeType"),o.classList.add("activeType")})),r.innerHTML="",e.forEach((e=>{e.type===o.textContent&&n(e)}))}))}))})(),e(".popup-repair-types",".nav-list-popup-repair","#nav-arrow-popup-repair_right","#nav-arrow-popup-repair_left"),(()=>{const e=document.createElement("style");e.id="stylePopupFormula";const t=document.getElementById("formula").querySelectorAll(".formula-item__icon");t.forEach((t=>{t.addEventListener("mouseenter",(()=>{if(window.innerWidth>1024){t.children[0].style.visibility="visible",t.children[0].style.opacity=1;const r=t.getBoundingClientRect().top,n=t.children[0].getBoundingClientRect().height;r<n&&(t.children[0].style.transform=`translateY(${t.parentNode.getBoundingClientRect().height+n+10}px)`,e.innerText=`\n                    .formula-item-popup-${t.children[2].textContent}:before {\n                        transform: rotate(180deg);\n                    }\n                `,document.head.append(e))}}))})),t.forEach((t=>{t.addEventListener("mouseleave",(()=>{window.innerWidth>1024&&(t.children[0].removeAttribute("style"),document.getElementById("stylePopupFormula")&&document.head.removeChild(e))}))})),((e,t,r,n,l="",o="",i=0)=>{const c=document.querySelector(e),s=c.querySelector(t),a=c.querySelector(r),d=c.querySelector(n);let p,u;l&&(p=c.querySelector(l),p.textContent=1),o&&(u=c.querySelector(o),u.textContent=s.children.length);let y=i;const h=e=>{for(let t=0;t<s.children.length;t++)s.children[t].style.display="none",s.children[t].children[0].children[0].style.visibility="hidden",s.children[t].children[0].children[0].style.opacity=.1,e===t&&(s.children[t].style.display="flex",s.children[t].children[0].children[0].style.visibility="visible",s.children[t].children[0].children[0].style.opacity=1,l?p.textContent=t+1:l="")};h(y),a.addEventListener("click",(()=>{y+=1,y===s.children.length&&(y=0),h(y)})),d.addEventListener("click",(()=>{y-=1,y<0&&(y=s.children.length-1),h(y)}))})("#formula",".formula-slider","#formula-arrow_right","#formula-arrow_left")})(),e("#portfolio",".portfolio-slider-mobile","#portfolio-arrow-mobile_right","#portfolio-arrow-mobile_left",".slider-counter-content__current",".slider-counter-content__total"),(()=>{const e=document.getElementById("portfolio"),t=e.querySelector(".sliderWrap"),r=document.getElementById("portfolio-arrow_right"),n=document.getElementById("portfolio-arrow_left"),l=document.querySelector(".portfolio-slider"),o=document.querySelector(".popup-portfolio"),i=e.querySelector(".portfolio-slider-mobile");let c=0,s=0;const a=[];for(let e=0;e<t.children.length;e++)for(let r=0;r<t.children[e].children.length;r++)a.push(t.children[e].children[r]);const d=[];for(let e=0;e<i.children.length;e++)d.push(i.children[e]);e.addEventListener("click",(e=>{let i=e.target;const p=l.clientWidth,u=t.clientWidth;i!==r&&i.parentNode!==r&&i.parentNode.parentNode!==r||u>p+c&&(c+=352,t.style.transform=`translateX(-${c}px)`,n.style.display="flex"),i!==n&&i.parentNode!==n&&i.parentNode.parentNode!==n||c>0&&(c-=352,t.style.transform=`translateX(-${c}px)`,r.style.display="flex"),u<p+c&&(r.style.display="none"),0===c&&(n.style.display="none"),i.classList.contains("portfolio-slider__slide-frame")&&(o.style.visibility="visible",a.forEach(((e,t)=>{e===i&&(s=t)})),d.forEach(((e,t)=>{e===i&&(s=t)})),((e,t,r,n,l="",o="",i=0)=>{const c=document.querySelector(e),s=c.querySelector(t),a=c.querySelector(r),d=c.querySelector(n),p=c.querySelectorAll(".popup-portfolio-text");let u,y;l&&(u=c.querySelector(l),u.textContent=1),o&&(y=c.querySelector(o),y.textContent=s.children.length);let h=i;const m=e=>{for(let t=0;t<s.children.length;t++)s.children[t].style.display="none",p[t].style.display="none",e===t&&(s.children[t].style.display="flex",p[t].style.display="flex",l?u.textContent=t+1:l="")};m(h),a.addEventListener("click",(()=>{h+=1,h===s.children.length&&(h=0),m(h)})),d.addEventListener("click",(()=>{h-=1,h<0&&(h=s.children.length-1),m(h)}))})(".popup-portfolio",".popup-portfolio-slider","#popup_portfolio_right","#popup_portfolio_left",".slider-counter-content__current",".slider-counter-content__total",s))})),o.addEventListener("click",(e=>{(e.target.classList.contains("popup-portfolio")||e.target.classList.contains("close"))&&(o.style.visibility="hidden")}))})()})();