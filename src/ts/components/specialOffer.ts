interface SpecialOfferData {
  percent: string;
  shortText: string;
  title: string;
  description: string;
  buttonText: string;
  backgroundImage: string;
}

export const renderSpecialOffer = (data: SpecialOfferData): void => {
  const container = document.querySelector('#app');
  if (!container) return;

  const path = window.location.pathname;
  const isHtmlDir = path.includes('/html/') || path.includes('html/');
  const catalogPath = isHtmlDir ? './catalog.html' : './html/catalog.html';

  const offerHTML = `
        <section class="special-offer" style="background-image: url('${data.backgroundImage}')">
          <div class="special-offer_container">
            
            <div class="special-offer_percent-box">
              <span class="special-offer_percent">${data.percent}</span>
              <p class="special-offer_short-text">${data.shortText}</p>
            </div>
    
            <div class="special-offer_info">
              <h2 class="special-offer_title">${data.title}</h2>
              <p class="special-offer_description">${data.description}</p>
              <a href="${catalogPath}" class="btn" style="display: inline-block; text-align: center; text-decoration: none;">${data.buttonText}</a>
            </div>

      </div>
    </section>
  `;

  container.insertAdjacentHTML('beforeend', offerHTML);
};