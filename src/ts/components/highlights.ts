interface HighlightItem {
  iconSrc: string;
  title: string;
  text: string;

}

interface HighlightsData {
  title: string;
  description: string;
  backgroundImage: string;
  items: HighlightItem[];
}

export const renderHighlights = (data: HighlightsData): void => {
  const container = document.querySelector('#app');
  if (!container) return;

  const highlightsHTML = `
    <section class="highlights">
      <div class="highlights_hero" style="background-image: url('${data.backgroundImage}')">
        <div class="highlights_hero-content">
          <h2 class="highlights_hero-title">${data.title}</h2>
          <p class="highlights_hero-text">${data.description}</p>
        </div>
      </div>

    <div class="highlights_info">
        <div class="highlights_container">
          <div class="highlights_info-row">
            ${data.items.map(item => `
              <div class="highlights_item">
                <div class="highlights_square">
                  <img src="${item.iconSrc}" alt="${item.title}" class="highlights_icon-img">
                </div>
                <h4 class="highlights_item-title">${item.title}</h4>
                <p class="highlights_item-text">${item.text}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;

  container.insertAdjacentHTML('beforeend', highlightsHTML);
};