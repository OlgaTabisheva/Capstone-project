export const renderBanner = (): void => {
  const container = document.querySelector('#app');
  if (!container) return;

  const path = window.location.pathname;
  const isHtmlDir = path.includes('/html/') || path.includes('html/');

  const bannerHTML = `
    <section class="banner">
      <div class="banner_hero">
        <div class="banner_container">
          <div class="banner_content">
            <h1 class="banner_title">Smart&nbspStyles&nbspfor Every&nbspDestination</h1>
            <p class="banner_description">
              Phasellus risus turpis, pretium sit amet magna non, molestie ultricies enim. 
Nullam pulvinar felis at metus.
            </p>
            <a href="${isHtmlDir ? './catalog.html' : './html/catalog.html'}" class="btn">View All Items</a>
          </div>
          <div class="banner_image-wrapper">
            <img src="/assets/images/Homepage/header image.svg" alt="Vintage Suitcase" class="banner_main-img">
          </div>
        </div>
      </div>

      <div class="banner_promo">
        <div class="banner_container">
          <div class="banner_grid">
            
            <article class="banner_card ">
              <div class="banner_user">
                <img src="assets/images/Homepage/CMO image.png" alt="Lillian Bennett" class="banner_user-avatar">
                <div class="banner_user-info">
                  <h4 class="banner_user-name">Lillian Bennett</h4>
                  <p class="banner_user-role">Chief Marketing Officer</p>
                </div>
              </div>
              <h2 class="banner_card-title">Aliquam Faucibus</h2>
                <h2 class="banner_card-title1">Odionecom.</h2>
              <p class="banner_card-text">
                Duis vestibulum elit vel neque pharetra vulputate. Quisque scelerisque nisi urna. 
                Duis rutrum non risus in imperdiet. Proin molestie accumsan nulla sit.
              </p>
              <p class="banner_card-text">
                Namaki duis vestibulum elit vel neque pharetra vulputate. Quisque scelerisque nisi urna.
              </p>
            </article>

            <article class="banner_card banner_card-image">
              <div class="banner_card-content">
                <h2 class="banner_card-title banner_card-text-white">25 % Discount</h2>
                <p class="banner_card-text banner_card-text-white">
                  Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut imperdiet leo in vulputate.
                </p>
                <button class="btn">Get Discount</button>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  `;

  container.insertAdjacentHTML('beforeend', bannerHTML);
};