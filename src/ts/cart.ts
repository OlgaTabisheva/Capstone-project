import { renderHeader } from './../ts/components/header';
import { renderFooter } from './../ts/components/footer';

import './../scss/layouts/header.scss';
import './../scss/layouts/footer.scss';
import './../scss/components/_buttons.scss';
import './../scss/components/_cartBox.scss';
import './../scss/main.scss';
import { renderCartBox } from './components/cartBox';

const updateCartCounter = (cart: any[]) => {
  const count = cart.reduce((acc: number, item: any) => acc + item.quantity, 0);
  const counterSpan = document.querySelector('.header_cart-count');
  if (counterSpan) {
    counterSpan.textContent = count.toString();
    if (count > 0) {
      counterSpan.classList.add('header_cart-count-active');
    } else {
      counterSpan.classList.remove('header_cart-count-active');
    }
  }
};

const renderAndBindCart = () => {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  renderCartBox(cart);
  updateCartCounter(cart);

  const container = document.querySelector('#app');
  if (!container) return;

};

const setupCartListeners = () => {
  const container = document.querySelector('#app');
  if (!container) return;

  container.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');

    if (target.id === 'clear-cart-btn') {
      localStorage.setItem('cart', '[]');
      renderAndBindCart();
      return;
    }

    if (target.classList.contains('cart-box_btn-checkout')) {
      localStorage.setItem('cart', '[]');
      const appContainer = document.querySelector('#app');
      if (appContainer) {
        appContainer.innerHTML = `
          <div class="cart-box">
            <section class="cart-box_hero">
              <h1 class="cart-box_hero-title">Thank You</h1>
            </section>
            <div style="text-align: center; margin: 100px 0;">
              <h2>Thank you for your purchase!</h2>
              <p>Your order has been placed successfully.</p>
              <a href="catalog.html" class="cart-box_btn-alt" style="display: inline-block; margin-top: 20px; text-decoration: none; padding: 10px 20px; background: #B92770; color: white;">CONTINUE SHOPPING</a>
            </div>
          </div>`;
      }
      updateCartCounter([]);
      return;
    }

    const row = target.closest('.cart-box_row') as HTMLElement;
    if (!row) return;

    const id = row.dataset.id;
    const itemIndex = cart.findIndex((i: any) => i.id === id);
    if (itemIndex === -1) return;

    if (target.closest('.cart-box_delete-icon') || target.classList.contains('cart-box_btn-img')) {
      cart.splice(itemIndex, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      renderAndBindCart();
      return;
    }

    if (target.classList.contains('cart-box_qty-btn-minus')) {
      if (cart[itemIndex].quantity > 1) {
        cart[itemIndex].quantity -= 1;
        localStorage.setItem('cart', JSON.stringify(cart));
        renderAndBindCart();
      }
      return;
    }
    if (target.classList.contains('cart-box_qty-btn-plus')) {
      cart[itemIndex].quantity += 1;
      localStorage.setItem('cart', JSON.stringify(cart));
      renderAndBindCart();
    }
  });
};

const app = () => {
  const pageName = 'cart';
  renderHeader(pageName);
  renderAndBindCart();
  setupCartListeners();
  renderFooter();
};

app();
