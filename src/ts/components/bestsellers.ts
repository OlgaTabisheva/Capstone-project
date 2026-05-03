interface Product {
  name: string;
  price: number;
  imageUrl: string;
  rating: number;
}

export const renderBestsellers = (items: Product[]): void => {
  const container = document.querySelector('.catalog-layout_sidebar');
  if (!container) return;

  const path = window.location.pathname;
  const isHtmlDir = path.includes('/html/') || path.includes('html/');
  const rootPath = isHtmlDir ? '../' : './';

  const html = `
    <div class="bestsellers">
      <h3 class="bestsellers_title">Top Best Sets</h3>
      <div class="bestsellers_list">
        ${items.map(item => {
    const fileName = item.imageUrl.split('/').pop();
    const fixedImageUrl = `${rootPath}assets/images/suitcases/${fileName}`;

    return `
          <div class="bestsellers_item">
            <div class="bestsellers_img-box">
              <img src="${fixedImageUrl}" alt="${item.name}">
            </div>
            <div class="bestsellers_content">
              <h5 class="bestsellers_name">${item.name}</h5>
              <div class="bestsellers_stars">
                ${`<img src="${rootPath}assets/images/star.svg" alt="star" class="bestsellers_stars-img">`.repeat(Math.floor(item.rating))}${item.rating % 1 !== 0 ? `<img src="${rootPath}assets/images/star2.svg" alt="star empty" class="bestsellers_stars-img">` : ''}
              </div>
              <p class="bestsellers_price">$${item.price}</p>
            </div>
          </div>
        `}).join('')}
      </div>
    </div>
  `;
  container.innerHTML = html;
};