interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  badge?: string; 
}

export const renderProducts = (title: string, subtitle: string, products: Product[]): void => {
  const container = document.querySelector('#app');
  if (!container) return;

  const productsHTML = `
    <section class="products">
      <div class="products_container">
        <header class="products_header">
          <h2 class="products_title">${title}</h2>
          <p class="products_subtitle">${subtitle}</p>
        </header>

        <div class="products_grid">
          ${products.map(product => `
            <article class="product-card">
              <div class="product-card_image-wrapper">
                ${product.badge ? `<span class="product-card_badge">${product.badge}</span>` : ''}
                <img src="${product.image}" alt="${product.name}" class="product-card_img">
              </div>
              <div class="product-card_info">
                <h3 class="product-card_name">${product.name}</h3>
                <p class="product-card_price">$${product.price}</p>
                <button class="btn" data-id="${product.id}">Add To Cart</button>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;

  container.insertAdjacentHTML('beforeend', productsHTML);
};