const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/product-DrvWU8mo.js","assets/product-Dq_tKUsB.css"])))=>i.map(i=>d[i]);
(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&e(o)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}})();const g="modulepreload",b=function(t){return"/"+t},v={},_=function(i,a,e){let r=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(a.map(n=>{if(n=b(n),n in v)return;v[n]=!0;const l=n.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${u}`))return;const d=document.createElement("link");if(d.rel=l?"stylesheet":g,l||(d.as="script"),d.crossOrigin="",d.href=n,c&&d.setAttribute("nonce",c),document.head.appendChild(d),l)return new Promise((m,p)=>{d.addEventListener("load",m),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${n}`)))})}))}function s(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return r.then(o=>{for(const c of o||[])c.status==="rejected"&&s(c.reason);return i().catch(s)})},w=()=>{if(document.getElementById("login-modal"))return;const t=`
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
        </svg>`,i=`
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
            <line x1="1" y1="1" x2="23" y2="23"></line>
        </svg>`,a=`
    <div class="modal" id="login-modal">
      <div class="modal_content">
        <form class="modal_form" id="login-form">
          <div class="modal_field">
            <label class="modal_label">Email Address *</label>
            <input type="email" class="modal_input" id="login-email" required placeholder="example@mail.com">
            <span class="modal_error" id="email-error">Please enter a valid email address.</span>
          </div>
          <div class="modal_field">
            <label class="modal_label">Password *</label>
            <input type="password" class="modal_input" id="login-password" required placeholder="********">
             <button id="toggle-password" type="button" class="modal_toggle-pass">
              ${t}
              </button>

          </div>
          <button type="submit" class="modal_btn">LOG IN</button>
        </form>
      </div>
    </div>
  `;document.body.insertAdjacentHTML("beforeend",a);const e=document.getElementById("login-modal"),r=document.getElementById("login-form"),s=document.getElementById("toggle-password"),o=document.getElementById("login-password"),c=document.getElementById("login-email"),n=document.getElementById("email-error"),l=()=>{e==null||e.classList.remove("active")};window.addEventListener("click",d=>{d.target===e&&l()}),s==null||s.addEventListener("click",()=>{o.type==="password"?(o.type="text",s.innerHTML=i):(o.type="password",s.innerHTML=t)});const u=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;c==null||c.addEventListener("input",()=>{c.value&&!u.test(c.value)?n&&(n.style.display="block"):n&&(n.style.display="none")}),r==null||r.addEventListener("submit",d=>{if(d.preventDefault(),!u.test(c.value)){alert("Please enter a valid email.");return}alert("Logged in successfully!"),l(),r.reset()})},y=()=>{const t=document.getElementById("login-modal");t==null||t.classList.add("active")},$=t=>{const i=document.querySelector("header");if(!i)return;const a=m=>t===m?"header_link-active":"",e=window.location.pathname,r=e.includes("/html/")||e.includes("html/"),s=r?"../":"./",o=r?"./":"./html/",n=JSON.parse(localStorage.getItem("cart")??"[]").reduce((m,p)=>m+(p.quantity??0),0);i.className="header",i.innerHTML=`
    <div class="header_top">
      <div class="header_socials">
        <a href="https://www.facebook.com/" class="header_social">
          <img src="${s}assets/images/facebook.svg" alt="Facebook" class="header_social-icon">
        </a>
        <a href="https://twitter.com/" class="header_social">
          <img src="${s}assets/images/twitter.svg" alt="Twitter" class="header_social-icon">
        </a>
        <a href="https://www.instagram.com/" class="header_social">
          <img src="${s}assets/images/instagram.svg" alt="Instagram" class="header_social-icon">
        </a>
      </div>
      <a href="${s}index.html" class="header_logo">
      <div class="header_logo-wrapper">
        <img src="${s}assets/images/bag.svg" alt="Best Shop Logo" class="header_logo"></div>
        <span class="header_logo-text">BEST SHOP</span>
      </a>

      <div class="header_user-actions">
        <button type="button" class="header_action-link" id="userLogIn">
          <img src="${s}assets/images/user.svg" alt="userLogIn" class="header_icon">
        </button>
        <a href="${o}cart.html" class="header_cart">
         <img src="${s}assets/images/shopping-cart.svg" alt="Cart" class="header_icon">
          <span class="header_cart-count ${n>0?"header_cart-count-active":""}">${n}</span>
        </a>
        <button class="header_burger" id="burger-menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <nav class="header_bottom" id="header-nav">
      <ul class="header_nav-list">
        <li><a href="${s}index.html" class="header_link ${a("home")}">Home</a></li>
        
        <li class="header_item header_item-has-dropdown">
          <a href="${o}catalog.html" class="header_link ${a("catalog")}">
            Catalog
            <span class="header_arrow"></span> </a>
         
        </li>

        <li><a href="${o}about.html" class="header_link ${a("about")}">About Us</a></li>
        <li><a href="${o}contact.html" class="header_link ${a("contact")}">Contact Us</a></li>
      </ul>
    </nav>
  `;const l=document.getElementById("burger-menu"),u=document.getElementById("header-nav");l==null||l.addEventListener("click",()=>{u==null||u.classList.toggle("header_bottom-active"),l==null||l.classList.toggle("header_burger-active")}),w();const d=document.getElementById("userLogIn");d==null||d.addEventListener("click",y)},h=()=>{const i=JSON.parse(localStorage.getItem("cart")??"[]").reduce((e,r)=>e+(r.quantity??0),0),a=document.querySelector(".header_cart-count");a&&(a.textContent=i.toString(),i>0?a.classList.add("header_cart-count-active"):a.classList.remove("header_cart-count-active"))},q=()=>{const t=document.querySelector("#app");if(!t)return;const i=window.location.pathname,e=`
    <section class="banner">
      <div class="banner_hero">
        <div class="banner_container">
          <div class="banner_content">
            <h1 class="banner_title">Smart&nbspStyles&nbspfor Every&nbspDestination</h1>
            <p class="banner_description">
              Phasellus risus turpis, pretium sit amet magna non, molestie ultricies enim. 
Nullam pulvinar felis at metus.
            </p>
            <a href="${i.includes("/html/")||i.includes("html/")?"./catalog.html":"./html/catalog.html"}" class="btn">View All Items</a>
          </div>
          <div class="banner_image-wrapper">
            <img src="/assets/images/Homepage/header image.svg" alt="Vintage Suitcase" class="banner_main-img">
          </div>
        </div>
      </div>

      <div class="banner_promo">
        <div class="banner_container">
          <div class="banner_grid">
            
            <article class="banner_card ">
              <div class="banner_user">
                <img src="assets/images/Homepage/CMO image.png" alt="Lillian Bennett" class="banner_user-avatar">
                <div class="banner_user-info">
                  <h4 class="banner_user-name">Lillian Bennett</h4>
                  <p class="banner_user-role">Chief Marketing Officer</p>
                </div>
              </div>
              <h2 class="banner_card-title">Aliquam Faucibus</h2>
                <h2 class="banner_card-title1">Odionecom.</h2>
              <p class="banner_card-text">
                Duis vestibulum elit vel neque pharetra vulputate. Quisque scelerisque nisi urna. 
                Duis rutrum non risus in imperdiet. Proin molestie accumsan nulla sit.
              </p>
              <p class="banner_card-text">
                Namaki duis vestibulum elit vel neque pharetra vulputate. Quisque scelerisque nisi urna.
              </p>
            </article>

            <article class="banner_card banner_card-image">
              <div class="banner_card-content">
                <h2 class="banner_card-title banner_card-text-white">25 % Discount</h2>
                <p class="banner_card-text banner_card-text-white">
                  Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut imperdiet leo in vulputate.
                </p>
                <button class="btn">Get Discount</button>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  `;t.insertAdjacentHTML("beforeend",e)},f=(t,i,a)=>{const e=document.querySelector("#app");if(!e)return;const r=`
    <section class="products">
      <div class="products_container">
        <header class="products_header">
          <h2 class="products_title">${t}</h2>
          <p class="products_subtitle">${i}</p>
        </header>

        <div class="products_grid">
          ${a.map(s=>`
            <article class="product-card">
              <div class="product-card_image-wrapper">
                ${s.badge?`<span class="product-card_badge">${s.badge}</span>`:""}
                <img src="${s.image}" alt="${s.name}" class="product-card_img">
              </div>
              <div class="product-card_info">
                <h3 class="product-card_name">${s.name}</h3>
                <p class="product-card_price">$${s.price}</p>
                <button class="btn" data-id="${s.id}">Add To Cart</button>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;e.insertAdjacentHTML("beforeend",r)},L=t=>{const i=document.querySelector("#app");if(!i)return;const a=`
    <section class="features">
      <div class="features_container">
        <header class="features_header">
          <h2 class="features_title">Travel suitcases</h2>
          <p class="features_subtitle">Duis vestibulum elit vel neque pharetra</p>
        </header>

        <div class="features_slider-container">
          <div class="features_slider-viewport">
            <div class="features_grid">
              ${t.map(e=>`
                <article class="features_card" style="background-image: url('${e.image}')">
                  <div class="features_content">
                    <h3 class="features_card-title">${e.title}</h3>
                    <p class="features_card-text">${e.description}</p>
                  </div>
                </article>
              `).join("")}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;i.insertAdjacentHTML("beforeend",a)},x=t=>{const i=document.querySelector("#app");if(!i)return;const a=window.location.pathname,r=a.includes("/html/")||a.includes("html/")?"./catalog.html":"./html/catalog.html",s=`
        <section class="special-offer" style="background-image: url('${t.backgroundImage}')">
          <div class="special-offer_container">
            
            <div class="special-offer_percent-box">
              <span class="special-offer_percent">${t.percent}</span>
              <p class="special-offer_short-text">${t.shortText}</p>
            </div>
    
            <div class="special-offer_info">
              <h2 class="special-offer_title">${t.title}</h2>
              <p class="special-offer_description">${t.description}</p>
              <a href="${r}" class="btn" style="display: inline-block; text-align: center; text-decoration: none;">${t.buttonText}</a>
            </div>

      </div>
    </section>
  `;i.insertAdjacentHTML("beforeend",s)},S=t=>{const i=document.querySelector("#app");if(!i)return;const a=`
    <section class="reviews">
      <div class="reviews_container">
        <header class="reviews_header">
          <h2 class="reviews_title">Our Grateful Customers</h2>
          <p class="reviews_subtitle">Duis vestibulum elit vel neque pharetra</p>
        </header>

        <div class="reviews_grid">
          ${t.map(e=>`
            <article class="review-card">
              <div class="review-card_avatar-wrapper">
                <img src="${e.avatar}" alt="${e.userName}" class="review-card_avatar">
              </div>
              <div class="review-card_content">
                <p class="review-card_text">${e.text}</p>
                <h4 class="review-card_user">${e.userName}, ${e.location}</h4>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;i.insertAdjacentHTML("beforeend",a)},E=()=>{const t=document.querySelector("#app");if(!t)return;const i=window.location.pathname,a=i.includes("/html/")||i.includes("html/"),e=a?"../":"./",r=`
    <footer class="footer">
      <div class="footer_benefits">
        <div class="footer_container">
          <h3 class="footer_benefits-title">Our Benefits</h3>
          <div class="footer_benefits-grid">
            <div class="footer_benefit">
               <img src="${e}assets/images/footer.svg" alt="plane" class="footer_image-icon"
              <p class="footer_benefit-text">Velit nisl sodales eget donec quis. volutpat orci.</p>
            </div>
            <div class="footer_benefit">
                <img src="${e}assets/images/footer-1.svg" alt="car" class="footer_image-icon"
              <p class="footer_benefit-text">Dolor eu varius. Morbi fermentum velit nisl.</p>
            </div>
            <div class="footer_benefit">
                <img src="${e}assets/images/footer-2.svg" alt="fix" class="footer_image-icon"
              <p class="footer_benefit-text">Malesuada fames ac ante ipsum primis in faucibus.</p>
            </div>
            <div class="footer_benefit">
                <img src="${e}assets/images/footer-3.svg" alt="education" class="footer_image-icon"
              <p class="footer_benefit-text">Nisl sodales eget donec quis. volutpat orci.</p>
            </div>
          </div>
        </div>
      </div>



<div class="footer-container">
        
        <div class="footer-body">
          <div class="footer-main-content">
            
            <div class="footer-links-row">
              <div class="footer-col">
                <h4 class="footer-col-title">About Us</h4>
                <ul class="footer-list">
                  <li><a href="javascript:void(0)">Organisation</a></li>
                  <li><a href="javascript:void(0)">Partners</a></li>
                  <li><a href="javascript:void(0)">Clients</a></li>
                </ul>
              </div>
              <div class="footer-col">
                <h4 class="footer-col-title">What We Do</h4>
                <ul class="footer-list">
                  <li><a href="${a?"../index.html":"./index.html"}">Homepage</a></li>
                  <li><a href="javascript:void(0)">Photo Gallery</a></li>
                  <li><a href="javascript:void(0)">Our Team</a></li>
                  <li><a href="javascript:void(0)">Socials</a></li>
                </ul>
              </div>
              <div class="footer-col">
                <h4 class="footer-col-title">Company</h4>
                <ul class="footer-list">
                  <li><a href="${a?"./about.html":"./html/about.html"}">About Us</a></li>
                  <li><a href="${a?"./contact.html":"./html/contact.html"}">Contact Us</a></li>
                  <li><a href="javascript:void(0)">Winning Awards</a></li>
                  <li><a href="javascript:void(0)">Press</a></li>
                  <li><a href="javascript:void(0)">Our Amazing Clients</a></li>
                </ul>
              </div>
            </div>

            <div class="footer-shipping">
              <h4 class="footer-col-title">Shipping Information</h4>
              <p class="footer-text">
                Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac. Ut sit amet erat nec nibh rhoncus varius in non lorem. Donec interdum, lectus in convallis pulvinar, enim elit porta sapien, vel finibus erat felis sed neque. Etiam aliquet neque sagittis erat tincidunt aliquam.
              </p>
            </div>
          </div>

          <aside class="footer-side-content">
            <h4 class="footer-col-title">Contact Us</h4>
            <p class="footer-text footer-text-margin">
              Bendum dolor eu varius. Morbi fermentum velitsodales egetonec. volutpat orci. Sed ipsum felis, tristique egestas et, convallis ac velitn consequat nec luctus.
            </p>
            
            <div class="footer-contacts">
              <div class="footer-contact-item">
                <img src="${e}assets/images/phone.svg" alt="phone" class="footer-contact-icon">
                <div class="footer-contact-info">Phone: (+63) 236 6322</div>
              </div>
              <div class="footer-contact-item">
                <img src="${e}assets/images/mail.svg" alt="mail" class="footer-contact-icon">
                <div class="footer-contact-info">public@news.com</div>
              </div>
              <div class="footer-contact-item">
                <img src="${e}assets/images/clock.svg" alt="clock" class="footer-contact-icon">
                <div class="footer-contact-info">Mon - Fri: 10am - 6pm <br> Sat - Sun: 10am - 6pm</div>
              </div>
              <div class="footer-contact-item">
                <img src="${e}assets/images/pin.svg" alt="location" class="footer-contact-icon">
                <div class="footer-contact-info">639 Jade Valley, Washington Dc</div>
              </div>
            </div>
          </aside>
        </div>

        <div class="footer-bottom">
          <p class="footer-copyright">© Copyright 2025</p>
        </div>

      </div>
   
    </footer>
  `;t.insertAdjacentHTML("afterend",r)},H=[{title:"Duis vestibulum elit vel neque.",description:"Duis vestibulum vel neque pharetra vulputate. Quisque scelerisque nisi.",image:"assets/images/Homepage/suitcase real-live.png"},{title:"Neque vestibulum elit nequvel.",description:"Duis vestibulum vel neque pharetra vulputate. Quisque scelerisque nisi.",image:"assets/images/Homepage/suitcase real-live-1.png"},{title:"Elituis stibulum elit velneque.",description:"Duis vestibulum vel neque pharetra vulputate. Quisque scelerisque nisi.",image:"assets/images/Homepage/suitcase real-live-2.png"},{title:"Vel vestibulum elit tuvel euqen.",description:"Duis vestibulum vel neque pharetra vulputate. Quisque scelerisque nisi.",image:"assets/images/Homepage/suitcase real-live-3.png"}],k={percent:"50 %",shortText:"Curabitur vulputate arcu odio, ac facilisis diam.",title:"Offer Of The Month",description:"Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut imperdiet leo in vulputate.",buttonText:"Get Offer Today",backgroundImage:"assets/images/Homepage/offer of the month image.png"},P=[{id:1,userName:"Ethan Wade",location:"New York",text:"Curabitur vulputate arcu odio, ac facilisis diam accumsan ut.",avatar:"assets/images/Homepage/grateful customer 1.png"},{id:1,userName:"Jane Reyes",location:"California",text:"Curabitur vulputate arcu odio, ac facilisis diam accumsan ut.",avatar:"assets/images/Homepage/grateful customer 2.png"},{id:1,userName:"Erica Banks",location:"Miami",text:"Curabitur vulputate arcu odio, ac facilisis diam accumsan ut.",avatar:"assets/images/Homepage/grateful customer 3.png"}],A=async()=>{try{return(await(await fetch("assets/data.json")).json()).data}catch(t){return console.error("Failed to fetch products",t),[]}},T=t=>{const i=JSON.parse(localStorage.getItem("cart")||"[]"),a=i.find(e=>e.id===t.id);if(a)a.quantity+=1;else{const e=t.imageUrl.split("/").pop();i.push({id:t.id,name:t.name,price:t.price,quantity:1,image:`assets/images/suitcases/${e}`})}localStorage.setItem("cart",JSON.stringify(i)),h(),alert(`${t.name} added to cart!`)},C=t=>{document.addEventListener("click",i=>{const a=i.target;if(a.classList.contains("btn")&&a.hasAttribute("data-id")){const r=a.getAttribute("data-id"),s=t.find(o=>o.id===r);s&&T(s);return}const e=a.closest(".product-card");if(e&&!a.classList.contains("btn")){const r=e.querySelector(".btn"),s=r==null?void 0:r.getAttribute("data-id"),o=t.find(c=>c.id===s);o&&_(async()=>{const{renderProductDetails:c}=await import("./product-DrvWU8mo.js");return{renderProductDetails:c}},__vite__mapDeps([0,1])).then(({renderProductDetails:c})=>{const n={...o,description:["High quality product suitable for all your travel needs. Enjoy maximum comfort and durability with our exclusive materials."],colors:o.color?o.color.split(",").map(l=>l.trim()):["black"],sizes:o.size?o.size.split(",").map(l=>l.trim()):["M"]};c(n,t),window.scrollTo({top:0,behavior:"smooth"})})}})},D=async()=>{$("home"),q(),L(H);const i=await A(),a=n=>({id:n.id,name:n.name,price:n.price,image:`assets/images/suitcases/${n.imageUrl.split("/").pop()}`,badge:n.salesStatus?"SALE":void 0}),e=n=>{if(n.length===0)return[];const l=[...n];for(;l.length<4;)l.push(n[l.length%n.length]);return l.slice(0,4)},r=i.filter(n=>n.blocks.includes("Selected Products")),s=i.filter(n=>n.blocks.includes("New Products Arrival")),o=e(r).map(a),c=e(s).map(a);f("Selected Products","Duis vestibulum elit vel neque pharetra",o),x(k),f("New Products Arrival","Duis vestibulum elit vel neque pharetra",c),S(P),E(),C(i),h()};D();export{h as u};
