import{u as z}from"./index-Btz_rwJ8.js";const u="/assets/image1-C2HN06mi.jpg",p="/assets/image10-CE9b7p05.jpg",v="/assets/image11-DXV4uZGL.jpg",_="/assets/image12-Ckyfno_B.jpg",b="/assets/image2-LlYy9OhM.jpg",j="/assets/image3-wnCWNggA.jpg",y="/assets/image4-U6eEjWbm.jpg",h="/assets/image5-BPc_jhJn.jpg",w="/assets/image6-CbKEt_an.jpg",f="/assets/image7-DpT1XivL.jpg",$="/assets/image10-CE9b7p05.jpg",E="/assets/image2-LlYy9OhM.jpg",I="/assets/image11-DXV4uZGL.jpg",S="/assets/image3-wnCWNggA.jpg",x="/assets/image4-U6eEjWbm.jpg",q="/assets/image5-BPc_jhJn.jpg",L="/assets/image6-CbKEt_an.jpg",C="/assets/image7-DpT1XivL.jpg",k="/assets/image8-DeV_sxxG.jpg",B="/assets/image9-ChlrtfPT.jpg",O=(s,a=[])=>{const i=document.querySelector("#app");if(!i)return;const o=s.imageUrl.split("/").pop(),c=new URL(Object.assign({"../assets/images/suitcases/image1.jpg":u,"../assets/images/suitcases/image10.jpg":p,"../assets/images/suitcases/image11.jpg":v,"../assets/images/suitcases/image12.jpg":_,"../assets/images/suitcases/image13.jpg":b,"../assets/images/suitcases/image14.jpg":j,"../assets/images/suitcases/image15.jpg":y,"../assets/images/suitcases/image16.jpg":h,"../assets/images/suitcases/image17.jpg":w,"../assets/images/suitcases/image18.jpg":f,"../assets/images/suitcases/image19.jpg":$,"../assets/images/suitcases/image2.jpg":E,"../assets/images/suitcases/image20.jpg":I,"../assets/images/suitcases/image3.jpg":S,"../assets/images/suitcases/image4.jpg":x,"../assets/images/suitcases/image5.jpg":q,"../assets/images/suitcases/image6.jpg":L,"../assets/images/suitcases/image7.jpg":C,"../assets/images/suitcases/image8.jpg":k,"../assets/images/suitcases/image9.jpg":B})[`../assets/images/suitcases/${o}`],import.meta.url).href,d=window.location.pathname,r=d.includes("/html/")||d.includes("html/")?"../":"./",l=`
<section class="product">
  <div class="product_container">
    <div class="product_main-row">

      <div class="product_gallery">
        <div class="product_main-img-box">
          <img src="${c}" alt="${s.name}" class="product_main-img" id="main-product-img">
        </div>
        <div class="product_thumbs">
          <div class="product_thumb active"><img src="${c}" alt="thumb"></div>
          <div class="product_thumb"><img src="${c}" alt="thumb"></div>
          <div class="product_thumb"><img src="${c}" alt="thumb"></div>
          <div class="product_thumb"><img src="${c}" alt="thumb"></div>
        </div>
      </div>

      <div class="product_content">
        <h1 class="product_title">${s.name}</h1>

        <div class="product_rating-row">
          <div class="product_stars">
            ${`<img src="${r}assets/images/star.svg">`.repeat(Math.floor(s.rating))}
            ${`<img src="${r}assets/images/star2.svg">`.repeat(5-Math.floor(s.rating))}
          </div>
          <span class="product_reviews-count">(1 Clients Review)</span>
        </div>

        <p class="product_price">$${s.price}</p>

        <div class="product_description">
          ${s.description.map(t=>`<p>${t}</p>`).join("")}
        </div>

        <div class="product_options">
          <div class="product_option-item">
            <label class="product_label">Size</label>
            <select class="product_select" id="product-size">
              <option value="" disabled selected>Choose option</option>
              ${s.sizes.map(t=>`<option value="${t}">${t}</option>`).join("")}
            </select>
          </div>

          <div class="product_option-item">
            <label class="product_label">Color</label>
            <select class="product_select" id="product-color">
              <option value="" disabled selected>Choose option</option>
              ${s.colors.map(t=>`<option value="${t}">${t}</option>`).join("")}
            </select>
          </div>

          <div class="product_option-item">
            <label class="product_label">Category</label>
            <select class="product_select" id="product-category">
              <option value="" disabled selected>Choose option</option>
              <option value="${s.category}">${s.category}</option>
            </select>
          </div>
        </div>

        <div class="product_actions">
          <div class="product_quantity">
            <button type="button" id="qty-minus">-</button>
            <input type="text" value="1" id="qty-input" readonly>
            <button type="button" id="qty-plus">+</button>
          </div>
          <button class="product_add-btn" id="add-to-cart-btn">Add To Cart</button>
        </div>

        <div class="product_payments">
          <span class="product_payments-text">Payment:</span>
          <img class="product_payments_icon" src="${r}assets/images/visa.svg" alt="Visa">
          <img class="product_payments_icon" src="${r}assets/images/ae.svg" alt="american express">
          <img class="product_payments_icon" src="${r}assets/images/mk.svg" alt="Mastercard">
          <img class="product_payments_icon" src="${r}assets/images/pp.svg" alt="PayPal">
        </div>
      </div>
    </div>

    <div class="product_tabs">
      <div class="product_tabs-header">
        <button class="product_tab-btn active" data-tab="details">DETAILS</button>
        <button class="product_tab-btn" data-tab="reviews">REVIEWS</button>
        <button class="product_tab-btn" data-tab="shipping">SHIPPING POLICY</button>
      </div>

      <div class="product_tab-content" id="tab-content">
        <div id="tab-details" class="tab-pane active">
          <p class="product_tab-text">Vestibulum commodo sapien non elit porttitor, vitae volutpat nibh mollis. Nulla porta risus id neque tempor, in efficitur justo imperdiet. Etiam a ex at ante tincidunt imperdiet. Nunc congue ex vel nisl viverra, sit amet aliquet lectus ullamcorper.</p>
          <p class="product_tab-text">Proin iaculis nibh vitae lectus mollis bibendum. Quisque varius eget urna sit amet luctus. Suspendisse potenti. Curabitur ac placerat est, sit amet sodales risus.</p>
        </div>

        <div id="tab-reviews" class="tab-pane" style="display:none">
          <div class="product_reviews">
            
            <div class="product_reviews_list" id="reviews-list-container">
            </div>

            <div class="product_reviews_form_section">
              <h3 class="product_reviews_form_title">Add Review</h3>
              <p class="product_reviews_note">
                Your email address won't be shared with anybody. Required fields have the symbol <span class="product_reviews_required">*</span>
              </p>
              <form class="product_reviews_form" id="review-form">
                <div class="product_reviews_rating_picker">
                  <span>RATE PRODUCT</span>
                  <div class="product_reviews_stars_input" id="stars-input">
                    <img src="${r}assets/images/star2.svg" data-value="1">
                    <img src="${r}assets/images/star2.svg" data-value="2">
                    <img src="${r}assets/images/star2.svg" data-value="3">
                    <img src="${r}assets/images/star2.svg" data-value="4">
                    <img src="${r}assets/images/star2.svg" data-value="5">
                  </div>
                  <input type="hidden" id="selected-rating" value="0">
                </div>
                <div class="product_reviews_field">
                  <textarea class="product_reviews_textarea" placeholder="Your Review*" required></textarea>
                </div>
                <div class="product_reviews_row">
                  <input type="text" class="product_reviews_input" placeholder="Your Name*" required>
                  <input type="email" class="product_reviews_input" placeholder="Your Email*" required>
                </div>
                <label class="product_reviews_checkbox_label">
                  <input type="checkbox" class="product_reviews_checkbox">
                  <span class="product_reviews_checkbox_text">Save my name, email, and website in this browser for when I leave another comment.</span>
                </label>
                <button type="submit" class="product_reviews_submit">SUBMIT</button>
                <p id="review-status"></p>
              </form>
            </div>

          </div>
        </div>

        <div id="tab-shipping" class="tab-pane" style="display:none">
          <p class="product_tab-text">Proin iaculis nibh vitae lectus mollis bibendum. Quisque varius eget urna sit amet luctus. Suspendisse potenti. Curabitur ac placerat est, sit amet sodales risus.</p>
        </div>
      </div>
    </div>

    <div class="product_related">
      <h2 class="product_related-title">You May Also Like</h2>
      <div class="product_related-grid">
        ${a.length>0?U(a,4,s.id).map(t=>{const g=t.imageUrl.split("/").pop(),m=new URL(Object.assign({"../assets/images/suitcases/image1.jpg":u,"../assets/images/suitcases/image10.jpg":p,"../assets/images/suitcases/image11.jpg":v,"../assets/images/suitcases/image12.jpg":_,"../assets/images/suitcases/image13.jpg":b,"../assets/images/suitcases/image14.jpg":j,"../assets/images/suitcases/image15.jpg":y,"../assets/images/suitcases/image16.jpg":h,"../assets/images/suitcases/image17.jpg":w,"../assets/images/suitcases/image18.jpg":f,"../assets/images/suitcases/image19.jpg":$,"../assets/images/suitcases/image2.jpg":E,"../assets/images/suitcases/image20.jpg":I,"../assets/images/suitcases/image3.jpg":S,"../assets/images/suitcases/image4.jpg":x,"../assets/images/suitcases/image5.jpg":q,"../assets/images/suitcases/image6.jpg":L,"../assets/images/suitcases/image7.jpg":C,"../assets/images/suitcases/image8.jpg":k,"../assets/images/suitcases/image9.jpg":B})[`../assets/images/suitcases/${g}`],import.meta.url).href;return`
            <div class="product-card" data-id="${t.id}">
              <div class="product-card_image-wrapper">
                <img src="${m}" alt="${t.name}" class="product-card_img">
              </div>
              <div class="product-card_info">
                <h3 class="product-card_name">${t.name}</h3>
                <p class="product-card_price">$${t.price}</p>
                <button type="submit" class="btn">Add to Cart</button>
              </div>
            </div>
          `}).join(""):""}
      </div>
    </div>

  </div>
</section>
  `;i.innerHTML=l,M(),J(),P(),H(s,c);const n=document.getElementById("reviews-list-container");n&&R(s.id,n,r,s.name),Y(s.id,r,s.name),D(a)},U=(s,a,i)=>[...s.filter(c=>c.id!==i)].sort(()=>.5-Math.random()).slice(0,a),D=s=>{const a=document.querySelector(".product_related-grid");a&&a.addEventListener("click",i=>{var r;const o=i.target,c=o.closest(".product-card");if(!c)return;const d=c.dataset.id,e=s.find(l=>l.id===d);if(e)if(o.classList.contains("btn")&&o.tagName==="BUTTON"){i.stopPropagation();const l={id:e.id,name:e.name,price:e.price,image:new URL(Object.assign({"../assets/images/suitcases/image1.jpg":u,"../assets/images/suitcases/image10.jpg":p,"../assets/images/suitcases/image11.jpg":v,"../assets/images/suitcases/image12.jpg":_,"../assets/images/suitcases/image13.jpg":b,"../assets/images/suitcases/image14.jpg":j,"../assets/images/suitcases/image15.jpg":y,"../assets/images/suitcases/image16.jpg":h,"../assets/images/suitcases/image17.jpg":w,"../assets/images/suitcases/image18.jpg":f,"../assets/images/suitcases/image19.jpg":$,"../assets/images/suitcases/image2.jpg":E,"../assets/images/suitcases/image20.jpg":I,"../assets/images/suitcases/image3.jpg":S,"../assets/images/suitcases/image4.jpg":x,"../assets/images/suitcases/image5.jpg":q,"../assets/images/suitcases/image6.jpg":L,"../assets/images/suitcases/image7.jpg":C,"../assets/images/suitcases/image8.jpg":k,"../assets/images/suitcases/image9.jpg":B})[`../assets/images/suitcases/${e.imageUrl.split("/").pop()}`],import.meta.url).href,size:"M",color:((r=e.colors)==null?void 0:r[0])||"black",quantity:1},n=JSON.parse(localStorage.getItem("cart")||"[]"),t=n.findIndex(g=>g.id===l.id&&g.size===l.size&&g.color===l.color);t>-1?n[t].quantity+=1:n.push(l),localStorage.setItem("cart",JSON.stringify(n)),z(),alert(`${e.name} added to cart!`)}else{const l={...e,description:["High quality product suitable for all your travel needs. Enjoy maximum comfort and durability with our exclusive materials."],colors:e.colors||(e.color?e.color.split(",").map(n=>n.trim()):["black"]),sizes:e.sizes||(e.size?e.size.split(",").map(n=>n.trim()):["M"])};O(l,s),window.scrollTo({top:0,behavior:"smooth"})}})},M=()=>{const s=document.getElementById("main-product-img"),a=document.querySelectorAll(".product_thumb");a.forEach(i=>{i.addEventListener("click",()=>{const o=i.querySelector("img");o&&s&&(s.src=o.src,a.forEach(c=>c.classList.remove("active")),i.classList.add("active"))})})},J=()=>{const s=document.querySelectorAll(".product_tab-btn"),a=document.querySelectorAll(".tab-pane");s.forEach(i=>{i.addEventListener("click",()=>{const o=i.dataset.tab;s.forEach(c=>c.classList.remove("active")),i.classList.add("active"),a.forEach(c=>{c.style.display=c.id===`tab-${o}`?"block":"none"})})})},P=()=>{const s=document.getElementById("qty-minus"),a=document.getElementById("qty-plus"),i=document.getElementById("qty-input");s==null||s.addEventListener("click",()=>{const o=parseInt(i.value,10);o>1&&(i.value=(o-1).toString())}),a==null||a.addEventListener("click",()=>{const o=parseInt(i.value,10);i.value=(o+1).toString()})},H=(s,a)=>{const i=document.getElementById("add-to-cart-btn"),o=document.getElementById("product-size"),c=document.getElementById("product-color"),d=document.getElementById("qty-input");i==null||i.addEventListener("click",()=>{const e=o.value,r=c.value,l=parseInt(d.value,10);if(!e||e==="Choose option"){alert("Please select a size");return}if(!r||r==="Choose option"){alert("Please select a color");return}const n={id:s.id,name:s.name,price:s.price,image:a,size:e,color:r,quantity:l},t=JSON.parse(localStorage.getItem("cart")||"[]"),g=t.findIndex(m=>m.id===n.id&&m.size===n.size&&m.color===n.color);g>-1?t[g].quantity+=l:t.push(n),localStorage.setItem("cart",JSON.stringify(t)),z(),alert(`${s.name} added to cart!`)})},R=(s,a,i,o)=>{const c=JSON.parse(localStorage.getItem(`reviews_${s}`)||"[]");if(c.length===0){const e={productId:s,author:"Ella Harper",email:"ella@example.com",rating:4,text:"Proin iaculis nibh vitae lectus mollis bibendum. Quisque varius eget urna sit amet luctus.",date:"June 11, 2025"};c.push(e)}const d=`
    <h3 class="product_reviews_list_title">${c.length} review${c.length>1?"s":""} for ${o}</h3>
    ${c.map(e=>`
      <div class="product_reviews_item">
        <div class="product_reviews_avatar">
          <img src="${i}assets/images/Product Card/review customer.png" alt="User">
        </div>
        <div class="product_reviews_item_body">
          <div class="product_reviews_item_header">
            <div class="product_reviews_meta">
              <span class="product_reviews_author">${e.author}</span>
              <span class="product_reviews_date">/ ${e.date}</span>
            </div>
            <div class="product_reviews_stars">
              ${`<img src="${i}assets/images/star.svg">`.repeat(e.rating)}
              ${`<img src="${i}assets/images/star2.svg">`.repeat(5-e.rating)}
            </div>
          </div>
          <p class="product_reviews_text">
            ${e.text}
          </p>
        </div>
      </div>
    `).join("")}
  `;a.innerHTML=d},Y=(s,a,i)=>{const o=document.getElementById("review-form"),c=document.getElementById("review-status"),d=document.getElementById("stars-input"),e=document.getElementById("selected-rating");if(d){const r=d.querySelectorAll("img");r.forEach(l=>{l.addEventListener("click",()=>{const n=parseInt(l.dataset.value||"0");e.value=n.toString(),r.forEach((t,g)=>{g<n?t.src=`${a}assets/images/star.svg`:t.src=`${a}assets/images/star2.svg`})}),l.addEventListener("mouseover",()=>{const n=parseInt(l.dataset.value||"0");r.forEach((t,g)=>{g<n?t.src=`${a}assets/images/star.svg`:t.src=`${a}assets/images/star2.svg`})}),l.addEventListener("mouseout",()=>{const n=parseInt(e.value||"0");r.forEach((t,g)=>{g<n?t.src=`${a}assets/images/star.svg`:t.src=`${a}assets/images/star2.svg`})})})}o==null||o.addEventListener("submit",r=>{r.preventDefault();const l=parseInt(e.value);if(l===0){alert("Please select a rating");return}const n=o.querySelector(".product_reviews_textarea"),t=o.querySelector('input[type="text"]'),g=o.querySelector('input[type="email"]'),m={productId:s,author:t.value,email:g.value,rating:l,text:n.value,date:new Date().toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})},N=JSON.parse(localStorage.getItem(`reviews_${s}`)||"[]");N.push(m),localStorage.setItem(`reviews_${s}`,JSON.stringify(N)),c&&(c.textContent="Thank you for your review! It has been submitted successfully.",c.style.color="green"),o.reset(),e.value="0",d&&d.querySelectorAll("img").forEach(A=>A.src=`${a}assets/images/star2.svg`);const T=document.getElementById("reviews-list-container");T&&R(s,T,a,i)})};export{O as renderProductDetails};
