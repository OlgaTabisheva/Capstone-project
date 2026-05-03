interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  salesStatus: boolean;
}

export const renderCatalogBox = (products: Product[], currentPage: number = 1, totalPages: number = 1, totalResults: number = 0): void => {
  const container = document.querySelector('.catalog-layout_main');
  if (!container) return;

  const path = window.location.pathname;
  const isHtmlDir = path.includes('/html/') || path.includes('html/');
  const rootPath = isHtmlDir ? '../' : './';


  let paginationHtml = '';
  if (totalPages > 1) {
    let pagesHtml = '';
    for (let i = 1; i <= totalPages; i++) {
      pagesHtml += `<button class="catalog-box_page ${i === currentPage ? 'catalog-box_page-active' : ''}">${i}</button>`;
    }

    paginationHtml = `
      <div class="catalog-box_pagination">
        ${pagesHtml}
        ${currentPage < totalPages ? `<button class="catalog-box_next">NEXT ></button>` : ''}
      </div>
    `;
  }

  const html = `
    <div class="catalog-box">
      <div class="catalog-box_grid">
        ${products.map(p => {
    const fileName = p.imageUrl.split('/').pop();
    const fixedImageUrl = `${rootPath}assets/images/suitcases/${fileName}`;

    return `
            <article class="catalog-box_card" data-id="${p.id}">
              ${p.salesStatus ? `<span class="catalog-box_badge">SALE</span>` : ''}
              <div class="catalog-box_image-box">
                <img src="${fixedImageUrl}" alt="${p.name}" class="catalog-box_img">
              </div>
              <div class="catalog-box_info">
                <h4 class="catalog-box_name">${p.name}</h4>
                <p class="catalog-box_price">$${p.price}</p>
                <button class="catalog-box_btn">Add To Cart</button>
              </div>
            </article>
          `;
  }).join('')}
      </div>
      ${paginationHtml}
    </div>
  `;

  container.innerHTML = html;
};