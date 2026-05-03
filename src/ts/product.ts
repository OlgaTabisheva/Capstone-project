import './../scss/pages/_product-details.scss';
import './../scss/components/_product-card.scss';
import { updateCartCount } from './components/header';



interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  rating: number;
  description: string[];
  colors: string[];
  sizes: string[];
  category: string;
  color?: string;
  size?: string;
}

interface Review {
  productId: string;
  author: string;
  email: string;
  rating: number;
  text: string;
  date: string;
}

export const renderProductDetails = (product: Product, allProducts: Product[] = []): void => {
  const container = document.querySelector('#app');
  if (!container) return;

  const fileName = product.imageUrl.split('/').pop();
  const mainImgUrl = new URL(`../assets/images/suitcases/${fileName}`, import.meta.url).href;
  const path = window.location.pathname;
  const isHtmlDir = path.includes('/html/') || path.includes('html/');
  const rootPath = isHtmlDir ? '../' : './';

  const html = `
<section class="product">
  <div class="product_container">
    <div class="product_main-row">

      <div class="product_gallery">
        <div class="product_main-img-box">
          <img src="${mainImgUrl}" alt="${product.name}" class="product_main-img" id="main-product-img">
        </div>
        <div class="product_thumbs">
          <div class="product_thumb active"><img src="${mainImgUrl}" alt="thumb"></div>
          <div class="product_thumb"><img src="${mainImgUrl}" alt="thumb"></div>
          <div class="product_thumb"><img src="${mainImgUrl}" alt="thumb"></div>
          <div class="product_thumb"><img src="${mainImgUrl}" alt="thumb"></div>
        </div>
      </div>

      <div class="product_content">
        <h1 class="product_title">${product.name}</h1>

        <div class="product_rating-row">
          <div class="product_stars">
            ${`<img src="${rootPath}assets/images/star.svg">`.repeat(Math.floor(product.rating))}
            ${`<img src="${rootPath}assets/images/star2.svg">`.repeat(5 - Math.floor(product.rating))}
          </div>
          <span class="product_reviews-count">(1 Clients Review)</span>
        </div>

        <p class="product_price">$${product.price}</p>

        <div class="product_description">
          ${product.description.map(p => `<p>${p}</p>`).join('')}
        </div>

        <div class="product_options">
          <div class="product_option-item">
            <label class="product_label">Size</label>
            <select class="product_select" id="product-size">
              <option value="" disabled selected>Choose option</option>
              ${product.sizes.map(s => `<option value="${s}">${s}</option>`).join('')}
            </select>
          </div>

          <div class="product_option-item">
            <label class="product_label">Color</label>
            <select class="product_select" id="product-color">
              <option value="" disabled selected>Choose option</option>
              ${product.colors.map(c => `<option value="${c}">${c}</option>`).join('')}
            </select>
          </div>

          <div class="product_option-item">
            <label class="product_label">Category</label>
            <select class="product_select" id="product-category">
              <option value="" disabled selected>Choose option</option>
              <option value="${product.category}">${product.category}</option>
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
          <img class="product_payments_icon" src="${rootPath}assets/images/visa.svg" alt="Visa">
          <img class="product_payments_icon" src="${rootPath}assets/images/ae.svg" alt="american express">
          <img class="product_payments_icon" src="${rootPath}assets/images/mk.svg" alt="Mastercard">
          <img class="product_payments_icon" src="${rootPath}assets/images/pp.svg" alt="PayPal">
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
                    <img src="${rootPath}assets/images/star2.svg" data-value="1">
                    <img src="${rootPath}assets/images/star2.svg" data-value="2">
                    <img src="${rootPath}assets/images/star2.svg" data-value="3">
                    <img src="${rootPath}assets/images/star2.svg" data-value="4">
                    <img src="${rootPath}assets/images/star2.svg" data-value="5">
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
        ${allProducts.length > 0 ? getRandomProducts(allProducts, 4, product.id).map(p => {
    const fileName = p.imageUrl.split('/').pop();
    const imgUrl = new URL(`../assets/images/suitcases/${fileName}`, import.meta.url).href;
    return `
            <div class="product-card" data-id="${p.id}">
              <div class="product-card_image-wrapper">
                <img src="${imgUrl}" alt="${p.name}" class="product-card_img">
              </div>
              <div class="product-card_info">
                <h3 class="product-card_name">${p.name}</h3>
                <p class="product-card_price">$${p.price}</p>
                <button type="submit" class="btn">Add to Cart</button>
              </div>
            </div>
          `
  }).join('') : ''}
      </div>
    </div>

  </div>
</section>
  `;

  container.innerHTML = html;

  setupGallery();
  setupTabs();
  setupQuantity();
  setupAddToCart(product, mainImgUrl);

  const reviewsContainer = document.getElementById('reviews-list-container');
  if (reviewsContainer) {
    renderReviewsList(product.id, reviewsContainer, rootPath, product.name);
  }

  setupReviewForm(product.id, rootPath, product.name);
  setupRelatedClicks(allProducts);
};

const getRandomProducts = (products: Product[], count: number, excludeId: string): Product[] => {
  const filtered = products.filter(p => p.id !== excludeId);
  return [...filtered].sort(() => 0.5 - Math.random()).slice(0, count);
};

const setupRelatedClicks = (allProducts: Product[]): void => {
  const container = document.querySelector('.product_related-grid');
  if (!container) return;



  container.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const card = target.closest('.product-card') as HTMLElement;
    if (!card) return;

    const id = card.dataset.id;
    const product = allProducts.find(p => p.id === id);
    if (!product) return;

    if (target.classList.contains('btn') && target.tagName === 'BUTTON') {
      e.stopPropagation();

      const cartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: new URL(`../assets/images/suitcases/${product.imageUrl.split('/').pop()}`, import.meta.url).href,
        size: 'M',
        color: product.colors?.[0] || 'black',
        quantity: 1
      };

      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const existingIndex = cart.findIndex((item: any) =>
        item.id === cartItem.id && item.size === cartItem.size && item.color === cartItem.color
      );

      if (existingIndex > -1) {
        cart[existingIndex].quantity += 1;
      } else {
        cart.push(cartItem);
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount();
      alert(`${product.name} added to cart!`);
    } else {

      const fullProduct = {
        ...product,
        description: ["High quality product suitable for all your travel needs. Enjoy maximum comfort and durability with our exclusive materials."],
        colors: product.colors || (product.color ? (product.color as any).split(',').map((s: string) => s.trim()) : ["black"]),
        sizes: product.sizes || (product.size ? (product.size as any).split(',').map((s: string) => s.trim()) : ["M"])
      };
      renderProductDetails(fullProduct as any, allProducts);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
};

const setupGallery = (): void => {
  const mainImg = document.getElementById('main-product-img') as HTMLImageElement;
  const thumbs = document.querySelectorAll('.product_thumb');

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const img = thumb.querySelector('img');
      if (img && mainImg) {
        mainImg.src = img.src;
        thumbs.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      }
    });
  });
};

const setupTabs = (): void => {
  const btns = document.querySelectorAll('.product_tab-btn');
  const panes = document.querySelectorAll('.tab-pane');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = (btn as HTMLElement).dataset.tab;
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      panes.forEach(pane => {
        (pane as HTMLElement).style.display = pane.id === `tab-${tabId}` ? 'block' : 'none';
      });
    });
  });
};

const setupQuantity = (): void => {
  const minus = document.getElementById('qty-minus');
  const plus = document.getElementById('qty-plus');
  const input = document.getElementById('qty-input') as HTMLInputElement;

  minus?.addEventListener('click', () => {
    const val = parseInt(input.value, 10);
    if (val > 1) input.value = (val - 1).toString();
  });

  plus?.addEventListener('click', () => {
    const val = parseInt(input.value, 10);
    input.value = (val + 1).toString();
  });
};

const setupAddToCart = (product: Product, imgUrl: string): void => {
  const btn = document.getElementById('add-to-cart-btn');
  const sizeSelect = document.getElementById('product-size') as HTMLSelectElement;
  const colorSelect = document.getElementById('product-color') as HTMLSelectElement;
  const qtyInput = document.getElementById('qty-input') as HTMLInputElement;

  btn?.addEventListener('click', () => {
    const size = sizeSelect.value;
    const color = colorSelect.value;
    const quantity = parseInt(qtyInput.value, 10);

    if (!size || size === 'Choose option') {
      alert('Please select a size');
      return;
    }
    if (!color || color === 'Choose option') {
      alert('Please select a color');
      return;
    }

    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: imgUrl,
      size,
      color,
      quantity
    };

    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingIndex = cart.findIndex((item: any) =>
      item.id === cartItem.id && item.size === cartItem.size && item.color === cartItem.color
    );

    if (existingIndex > -1) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push(cartItem);
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    updateCartCount();
    alert(`${product.name} added to cart!`);
  });
};

const renderReviewsList = (productId: string, container: HTMLElement, rootPath: string, productName: string): void => {
  const reviews: Review[] = JSON.parse(localStorage.getItem(`reviews_${productId}`) || '[]');

  if (reviews.length === 0) {
    const defaultReview: Review = {
      productId,
      author: 'Ella Harper',
      email: 'ella@example.com',
      rating: 4,
      text: 'Proin iaculis nibh vitae lectus mollis bibendum. Quisque varius eget urna sit amet luctus.',
      date: 'June 11, 2025'
    };
    reviews.push(defaultReview);
  }

  const reviewsHTML = `
    <h3 class="product_reviews_list_title">${reviews.length} review${reviews.length > 1 ? 's' : ''} for ${productName}</h3>
    ${reviews.map(review => `
      <div class="product_reviews_item">
        <div class="product_reviews_avatar">
          <img src="${rootPath}assets/images/Product Card/review customer.png" alt="User">
        </div>
        <div class="product_reviews_item_body">
          <div class="product_reviews_item_header">
            <div class="product_reviews_meta">
              <span class="product_reviews_author">${review.author}</span>
              <span class="product_reviews_date">/ ${review.date}</span>
            </div>
            <div class="product_reviews_stars">
              ${`<img src="${rootPath}assets/images/star.svg">`.repeat(review.rating)}
              ${`<img src="${rootPath}assets/images/star2.svg">`.repeat(5 - review.rating)}
            </div>
          </div>
          <p class="product_reviews_text">
            ${review.text}
          </p>
        </div>
      </div>
    `).join('')}
  `;
  container.innerHTML = reviewsHTML;
};

const setupReviewForm = (productId: string, rootPath: string, productName: string): void => {
  const form = document.getElementById('review-form') as HTMLFormElement;
  const status = document.getElementById('review-status');
  const starsInput = document.getElementById('stars-input');
  const ratingInput = document.getElementById('selected-rating') as HTMLInputElement;

  if (starsInput) {
    const stars = starsInput.querySelectorAll('img');
    stars.forEach(star => {
      star.addEventListener('click', () => {
        const val = parseInt(star.dataset.value || '0');
        ratingInput.value = val.toString();

        stars.forEach((s, idx) => {
          if (idx < val) {
            s.src = `${rootPath}assets/images/star.svg`;
          } else {
            s.src = `${rootPath}assets/images/star2.svg`;
          }
        });
      });

      star.addEventListener('mouseover', () => {
        const val = parseInt(star.dataset.value || '0');
        stars.forEach((s, idx) => {
          if (idx < val) {
            s.src = `${rootPath}assets/images/star.svg`;
          } else {
            s.src = `${rootPath}assets/images/star2.svg`;
          }
        });
      });

      star.addEventListener('mouseout', () => {
        const currentVal = parseInt(ratingInput.value || '0');
        stars.forEach((s, idx) => {
          if (idx < currentVal) {
            s.src = `${rootPath}assets/images/star.svg`;
          } else {
            s.src = `${rootPath}assets/images/star2.svg`;
          }
        });
      });
    });
  }

  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    const rating = parseInt(ratingInput.value);
    if (rating === 0) {
      alert('Please select a rating');
      return;
    }

    const textArea = form.querySelector('.product_reviews_textarea') as HTMLTextAreaElement;
    const nameInput = form.querySelector('input[type="text"]') as HTMLInputElement;
    const emailInput = form.querySelector('input[type="email"]') as HTMLInputElement;

    const newReview: Review = {
      productId,
      author: nameInput.value,
      email: emailInput.value,
      rating: rating,
      text: textArea.value,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    };

    const reviews: Review[] = JSON.parse(localStorage.getItem(`reviews_${productId}`) || '[]');
    reviews.push(newReview);
    localStorage.setItem(`reviews_${productId}`, JSON.stringify(reviews));

    if (status) {
      status.textContent = 'Thank you for your review! It has been submitted successfully.';
      status.style.color = 'green';
    }

    form.reset();
    ratingInput.value = '0';
    if (starsInput) {
      const stars = starsInput.querySelectorAll('img');
      stars.forEach(s => s.src = `${rootPath}assets/images/star2.svg`);
    }

    const reviewsContainer = document.getElementById('reviews-list-container');
    if (reviewsContainer) {
      renderReviewsList(productId, reviewsContainer, rootPath, productName);
    }
  });
};