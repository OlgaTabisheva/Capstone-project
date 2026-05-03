export const renderSearchFilter = (total: number, start: number = 1, end: number = 12): void => {
  const container = document.querySelector('#filter-container');
  if (!container) return;
  const path = window.location.pathname;
  const isHtmlDir = path.includes('/html/') || path.includes('html/');
  const rootPath = isHtmlDir ? '../' : './';

  const html = `
    <div class="search-filter">
      <div class="search-filter_wrapper">
        <div class="search-filter_info">
          Showing ${total > 0 ? `${start}-${end}` : '0'} Of ${total} Results
        </div>
        <div class="search-filter_actions">
          <div class="search-filter_select-wrapper">
            <select class="search-filter_select" id="sort-select">
              <option value="default" selected>Default Sorting</option>
              <option value="price-low">Price (Lowest to Highest)</option>
              <option value="price-high">Price (Highest to Lowest)</option>
              <option value="popularity">Popularity</option>
              <option value="rating">Rating</option>
            </select>
          </div>
          <div class="search-filter_search">
            <input type="text" class="search-filter_input" placeholder="Search Models">
            <button class="search-filter_search-btn">
             <img src="${rootPath}assets/images/search.svg" alt="search" class="search-filter-icon">
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
  container.innerHTML = html;
};


export const updateSearchFilterInfo = (total: number, start: number, end: number): void => {
  const info = document.querySelector('.search-filter_info');
  
  if (info) {
    const range = total > 0 ? `${start}-${end}` : '0';
    info.textContent = `Showing ${range} Of ${total} Results`;
  }
};