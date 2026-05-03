interface FeatureItem {
  title: string;
  description: string;
  image: string;
}

export const renderFeatures = (data: FeatureItem[]): void => {
  const container = document.querySelector('#app');
  if (!container) return;

  const featuresHTML = `
    <section class="features">
      <div class="features_container">
        <header class="features_header">
          <h2 class="features_title">Travel suitcases</h2>
          <p class="features_subtitle">Duis vestibulum elit vel neque pharetra</p>
        </header>

        <div class="features_slider-container">
          <div class="features_slider-viewport">
            <div class="features_grid">
              ${data.map(item => `
                <article class="features_card" style="background-image: url('${item.image}')">
                  <div class="features_content">
                    <h3 class="features_card-title">${item.title}</h3>
                    <p class="features_card-text">${item.description}</p>
                  </div>
                </article>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  container.insertAdjacentHTML('beforeend', featuresHTML);
};