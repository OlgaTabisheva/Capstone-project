interface Review {
  id: number;
  userName: string;
  location: string;
  text: string;
  avatar: string;
}

export const renderReviews = (data: Review[]): void => {
  const container = document.querySelector('#app');
  if (!container) return;

  const reviewsHTML = `
    <section class="reviews">
      <div class="reviews_container">
        <header class="reviews_header">
          <h2 class="reviews_title">Our Grateful Customers</h2>
          <p class="reviews_subtitle">Duis vestibulum elit vel neque pharetra</p>
        </header>

        <div class="reviews_grid">
          ${data.map(item => `
            <article class="review-card">
              <div class="review-card_avatar-wrapper">
                <img src="${item.avatar}" alt="${item.userName}" class="review-card_avatar">
              </div>
              <div class="review-card_content">
                <p class="review-card_text">${item.text}</p>
                <h4 class="review-card_user">${item.userName}, ${item.location}</h4>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;

  container.insertAdjacentHTML('beforeend', reviewsHTML);
};