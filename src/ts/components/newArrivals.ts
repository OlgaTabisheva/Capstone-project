export const renderNewArrivals = (): void => {
    const container = document.querySelector('#app');
    if (!container) return;

    const path = window.location.pathname;
    const isHtmlDir = path.includes('/html/') || path.includes('html/');
    const rootPath = isHtmlDir ? '../' : './';
    const html = `
    <section class="new-arrivals">
      <div class="new-arrivals_container">
        <div class="new-arrivals_wrapper">
          
          <div class="new-arrivals_content">
            <h2 class="new-arrivals_title">New Arrivals Every Week</h2>
            
            <p class="new-arrivals_text">
              Duis vestibulum elit vel neque pharetra vulputate. Quisque scelerisque nisi 
              urna. Duis rutrum non risus in imperdiet. Proin molestie accumsan nulla sit. 
              Quisque scelerisque nisi urnauis rutrum.
            </p>
            
            <p class="new-arrivals_text">
              Vitrumuis vestibulum elit vel neque pharetra vulputate. Quisque scelerisque 
              nisi urna. Duis vestibulum elit vel neque pharetra vulputateuisque scelerisque 
              nisi urna.
            </p>

            <button class="btn">See All Models</button>
          </div>

          <div class="new-arrivals_image-box">
            <img src="${rootPath}assets/images/About Us/new arrivals image.jpg" alt="New Arrivals" class="new-arrivals_img">
          </div>

        </div>
      </div>
    </section>
  `;

    container.insertAdjacentHTML('beforeend', html);
};