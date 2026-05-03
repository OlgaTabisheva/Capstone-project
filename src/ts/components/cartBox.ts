interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export const renderCartBox = (items: CartItem[]) => {
  const container = document.querySelector('#app');
  if (!container) return;
  const path = window.location.pathname;
  const isHtmlDir = path.includes('/html/') || path.includes('html/');
  const rootPath = isHtmlDir ? '../' : './';
  const shipping = items.length > 0 ? 30 : 0;
  const subTotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const catalogPath = isHtmlDir ? './' : './html/';
  let total = subTotal + shipping;
  let discount = 0;
  if (total > 3000) {
    discount = total * 0.1;
    total = total - discount;
  }

  const html = `
    <div class="cart-box">
      <section class="cart-box_hero">
        <h1 class="cart-box_hero-title">My Cart</h1>
      </section>

      <div class="cart-box_container">
        <div class="cart-box_table">
          <div class="cart-box_table-head">
            <div class="cart-box_col-img cart-box_row-text">IMAGE</div>
            <div class="cart-box_col-name cart-box_row-text">PRODUCT NAME</div>
            <div class="cart-box_col-price cart-box_row-text">PRICE</div>
            <div class="cart-box_col-qty cart-box_row-text">QUANTITY</div>
            <div class="cart-box_col-total cart-box_row-text">TOTAL</div>
            <div class="cart-box_col-delete cart-box_row-text">DELETE</div>
          </div>

        ${items.map(item => {
    const fileName = item.image.split('/').pop();
    const normalizedImage = `${rootPath}assets/images/suitcases/${fileName}`;

    return `
            <div class="cart-box_row" data-id="${item.id}">
              <div class="cart-box_col-img">
                <img src="${normalizedImage}" alt="${item.name}" class="cart-box_product-img">
              </div>
              <div class="cart-box_col-name cart-box_row-text-small">${item.name}</div>
              <div class="cart-box_col-price cart-box_row-text-small">$${item.price}</div>
              <div class="cart-box_col-qty">
                <div class="cart-box_qty">
                  <button class="cart-box_qty-btn cart-box_qty-btn-minus">-</button>
                  <span class="cart-box_qty-num cart-box_row-text-big">${item.quantity}</span>
                  <button class="cart-box_qty-btn cart-box_qty-btn-plus">+</button>
                </div>
              </div>
              <div class="cart-box_col-total cart-box_row-text-small">$${item.price * item.quantity}</div>
              <div class="cart-box_col-delete">
                <button class="cart-box_delete-icon">
                  <img src="${rootPath}assets/images/cart.svg" alt="Delete" class="cart-box_btn-img">
                </button>
              </div>
            </div>
          `;
  }).join('')}
        </div>

        <div class="cart-box_footer">
          <div class="cart-box_actions">
            <a href="${isHtmlDir ? './' : './html/'}catalog.html"><button class="cart-box_btn-alt">CONTINUE SHOPPING</button></a>
            <button class="cart-box_btn-alt" id="clear-cart-btn">CLEAR SHOPPING CART</button>
          </div>

          <div class="cart-box_summary">
            <div class="cart-box_summary-line">
              <span class="cart-box_footer-text">Sub Total</span>
              <span class="cart-box_footer-text">$${subTotal.toFixed(2)}</span>
            </div>
            <div class="cart-box_summary-line">
              <span class="cart-box_footer-text">Shipping</span>
              <span class="cart-box_footer-text">$${shipping.toFixed(2)}</span>
            </div>
            ${discount > 0 ? `
            <div class="cart-box_summary-line">
              <span class="cart-box_footer-text">Discount (10%)</span>
              <span class="cart-box_footer-text">-$${discount.toFixed(2)}</span>
            </div>` : ''}
            <div class="cart-box_summary-total">
              <span class="cart-box_footer-text">Total</span>
              <span class="cart-box_footer-text">$${total.toFixed(2)}</span>
            </div>
            <button class="cart-box_btn-checkout">CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = items.length > 0 ? html : `
    <div class="cart-box">
      <section class="cart-box_hero">
        <h1 class="cart-box_hero-title">My Cart</h1>
      </section>
      <div style="text-align: center; margin: 100px 0;">
        <h2>Your cart is empty.</h2>
        <p>Use the <a href="${catalogPath}catalog.html">catalog</a> to add new items.</p>
      </div>
    </div>`;
};