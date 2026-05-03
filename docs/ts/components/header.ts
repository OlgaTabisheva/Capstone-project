import '../../scss/pages/_userLogin.scss';
import '../../scss/components/_loginModal.scss';
import { renderLoginModal, openLoginModal } from './loginModal';


export const renderHeader = (currentPage: string): void => {
  const header = document.querySelector('header');
  if (!header) return;

  const getActiveClass = (page: string) => {
    return currentPage === page ? 'header_link-active' : '';
  };

  const path = window.location.pathname;
  const isHtmlDir = path.includes('/html/') || path.includes('html/');
  const rootPath = isHtmlDir ? '../' : './';
  const htmlPath = isHtmlDir ? './' : './html/';

  const cart = JSON.parse(localStorage.getItem('cart') ?? '[]');
  const count = cart.reduce((acc: number, item: any) => acc + (item.quantity ?? 0), 0);

  header.className = 'header';
  header.innerHTML = `
    <div class="header_top">
      <div class="header_socials">
        <a href="https://www.facebook.com/" class="header_social">
          <img src="${rootPath}assets/images/facebook.svg" alt="Facebook" class="header_social-icon">
        </a>
        <a href="https://twitter.com/" class="header_social">
          <img src="${rootPath}assets/images/twitter.svg" alt="Twitter" class="header_social-icon">
        </a>
        <a href="https://www.instagram.com/" class="header_social">
          <img src="${rootPath}assets/images/instagram.svg" alt="Instagram" class="header_social-icon">
        </a>
      </div>
      <a href="${rootPath}index.html" class="header_logo">
      <div class="header_logo-wrapper">
        <img src="${rootPath}assets/images/bag.svg" alt="Best Shop Logo" class="header_logo"></div>
        <span class="header_logo-text">BEST SHOP</span>
      </a>

      <div class="header_user-actions">
        <button type="button" class="header_action-link" id="userLogIn">
          <img src="${rootPath}assets/images/user.svg" alt="userLogIn" class="header_icon">
        </button>
        <a href="${htmlPath}cart.html" class="header_cart">
         <img src="${rootPath}assets/images/shopping-cart.svg" alt="Cart" class="header_icon">
          <span class="header_cart-count ${count > 0 ? 'header_cart-count-active' : ''}">${count}</span>
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
        <li><a href="${rootPath}index.html" class="header_link ${getActiveClass('home')}">Home</a></li>
        
        <li class="header_item header_item-has-dropdown">
          <a href="${htmlPath}catalog.html" class="header_link ${getActiveClass('catalog')}">
            Catalog
            <span class="header_arrow"></span> </a>
         
        </li>

        <li><a href="${htmlPath}about.html" class="header_link ${getActiveClass('about')}">About Us</a></li>
        <li><a href="${htmlPath}contact.html" class="header_link ${getActiveClass('contact')}">Contact Us</a></li>
      </ul>
    </nav>
  `;

  const burger = document.getElementById('burger-menu');
  const nav = document.getElementById('header-nav');

  burger?.addEventListener('click', () => {
    nav?.classList.toggle('header_bottom-active');
    burger?.classList.toggle('header_burger-active');
  });

  renderLoginModal();
  const loginBtn = document.getElementById('userLogIn');
  loginBtn?.addEventListener('click', openLoginModal);
};

export const updateCartCount = (): void => {
const cart = JSON.parse(localStorage.getItem('cart') ?? '[]');
  const count = cart.reduce((acc: number, item: any) => acc + (item.quantity ?? 0), 0);
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

