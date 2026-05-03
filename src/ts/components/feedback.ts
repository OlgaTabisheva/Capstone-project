import { renderContactForm, initContactForm } from '../forms';

export const renderFeedback = (): void => {
  const container = document.querySelector('#app');
  if (!container) return;
  const path = window.location.pathname;
  const isHtmlDir = path.includes('/html/') || path.includes('html/');
  const rootPath = isHtmlDir ? '../' : './';

  const html = `
    <section class="feedback">
      <div class="feedback_container">
        <div class="feedback_wrapper">
          
          <div class="feedback_image-box">
            <img src="${rootPath}assets/images/Contact Us/feedback image.jpg" alt="Travel Gear" class="feedback_img">
          </div>

          <div class="feedback_content">
            <h2 class="feedback_title">Your Feedback Is Much Appreciated!</h2>
            <p class="feedback_subtitle">We will contact you when you complete the following form!</p>
            
            ${renderContactForm()}
          </div>

        </div>
      </div>
    </section>
  `;

  container.insertAdjacentHTML('beforeend', html);
  initContactForm();
};