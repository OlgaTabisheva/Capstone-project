import './../scss/layouts/header.scss';
import './../scss/layouts/footer.scss';
import './../scss/components/_buttons.scss';
import './../scss/components/_searchFilter.scss';
import './../scss/components/_bestsellers.scss'
import './../scss/components/_catalogBox.scss';
import './../scss/pages/_catalog.scss';

import { renderHeader, updateCartCount } from './components/header';

import { renderSearchFilter, updateSearchFilterInfo } from './components/searchFilter';
import { renderCatalogBox } from './components/catalogBox';
import { renderBestsellers } from './components/bestsellers';
import { renderFooter } from './components/footer';

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  color: string;
  size: string;
  salesStatus: boolean;
  rating: number;
  popularity: number;
  blocks: string[];
}

let allProducts: Product[] = [];
let filteredProducts: Product[] = [];
let currentPage = 1;
const itemsPerPage = 12;

const renderCurrentPage = () => {
  const start = (currentPage - 1) * itemsPerPage;
  const end = Math.min(start + itemsPerPage, filteredProducts.length);
  const currentItems = filteredProducts.slice(start, end);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  updateSearchFilterInfo(filteredProducts.length, start + 1, end);
  renderCatalogBox(currentItems, currentPage, totalPages, filteredProducts.length);
};


const addToCart = (productId: string) => {
  const product = allProducts.find(p => p.id === productId);
  if (!product) return;

  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const existing = cart.find((item: any) => item.id === productId);

  if (existing) {
    existing.quantity += 1;
  } else {
    const fileName = product.imageUrl.split('/').pop();
    const path = window.location.pathname;
    const isHtmlDir = path.includes('/html/') || path.includes('html/');
    const rootPath = isHtmlDir ? '../' : './';
    const imagePath = `${rootPath}assets/images/suitcases/${fileName}`;

    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: imagePath
    });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
};

const handleSearch = (searchInput: HTMLInputElement) => {
  const q = searchInput.value.toLowerCase();
  filteredProducts = allProducts.filter(p => p.name.toLowerCase().includes(q));
  currentPage = 1;
  applySort();
};

const handleProductView = (product: any) => {
  import('./product').then(({ renderProductDetails }) => {
    const fullProduct = {
      ...product,
      description: ["High quality product suitable for all your travel needs. Enjoy maximum comfort and durability with our exclusive materials."],
      colors: product.color ? product.color.split(',').map((s: string) => s.trim()) : ["black"],
      sizes: product.size ? product.size.split(',').map((s: string) => s.trim()) : ["M"]
    };
    renderProductDetails(fullProduct as any, allProducts as any);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
};

const handlePagination = (target: HTMLElement) => {
  if (target.classList.contains('catalog-box_page')) {
    const page = parseInt(target.textContent || '1', 10);
    if (!isNaN(page) && page !== currentPage) {
      currentPage = page;
      renderCurrentPage();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  if (target.classList.contains('catalog-box_next')) {
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      renderCurrentPage();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
};

const setupEventListeners = () => {
  const searchInput = document.querySelector('.search-filter_input') as HTMLInputElement;
  const searchBtn = document.querySelector('.search-filter_search-btn');

  if (searchBtn) {
    searchBtn.addEventListener('click', () => handleSearch(searchInput));
  }
  if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleSearch(searchInput);
    });
  }

  const sortSelect = document.querySelector('.search-filter_select') as HTMLSelectElement;
  if (sortSelect) {
    sortSelect.addEventListener('change', applySort);
  }

  const container = document.querySelector('.catalog-layout_main');
  if (container) {
    container.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;

      if (target.classList.contains('catalog-box_btn')) {
        const article = target.closest('.catalog-box_card') as HTMLElement;
        const id = article?.dataset.id;
        if (id) addToCart(id);
        return;
      }

      const card = target.closest('.catalog-box_card') as HTMLElement;
      if (card && !target.classList.contains('catalog-box_btn')) {
        const id = card.dataset.id;
        const product = allProducts.find(p => p.id === id);
        if (product) handleProductView(product);
        return;
      }

      handlePagination(target);
    });
  }
};


const applySort = () => {
  const sortSelect = document.querySelector('.search-filter_select') as HTMLSelectElement;
  if (sortSelect) {
    const sortValue = sortSelect.value;
    if (sortValue === 'price') {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'name') {
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    }
  }

  currentPage = 1;
  renderCurrentPage();
};

const initCatalog = async () => {
  renderHeader('catalog');

  try {
    const response = await fetch('../assets/data.json');
    const data = await response.json();
    allProducts = data.data;
    filteredProducts = [...allProducts];

    const topProducts = allProducts.filter(p => p.popularity > 85).slice(0, 5);

    renderSearchFilter(allProducts.length);
    renderCurrentPage();
    renderBestsellers(topProducts);
    setupEventListeners();
    updateCartCount();
  } catch (error) {

    console.error('Error fetching catalog data:', error);
  }
  renderFooter();
};

document.addEventListener('DOMContentLoaded', initCatalog);