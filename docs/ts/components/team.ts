export const renderTeam = (): void => {
  const container = document.querySelector('#app');
  if (!container) return;
  
  const path = window.location.pathname;
  const isHtmlDir = path.includes('/html/') || path.includes('html/');
  const rootPath = isHtmlDir ? '../' : './';
  const html = `
    <section class="team">
      <div class="team_container">
        
        <header class="team_header">
          <h2 class="team_title">Our Incredible Team</h2>
          <div class="team_underline"></div>
        </header>

        <div class="team_grid">
          
          <article class="team_card">
            <div class="team_image-box">
              <img src="${rootPath}assets/images/About Us/Natalia Foster image.png" alt="Nataliia Foster" class="team_img">
            </div>
            <h4 class="team_name">NATALIIA FOSTER</h4>
            <p class="team_position">Product Manager</p>
          </article>

          <article class="team_card">
            <div class="team_image-box">
              <img src="${rootPath}/assets/images/About Us/Alexandra Thompson.png" alt="Alexandra Thompson" class="team_img">
            </div>
            <h4 class="team_name">ALEXANDRA THOMPSON</h4>
            <p class="team_position">Graphic Designer</p>
          </article>

          <article class="team_card">
            <div class="team_image-box">
              <img src="${rootPath}/assets/images/About Us/Iryna Brooks.png" alt="Iryna Brooks" class="team_img">
            </div>
            <h4 class="team_name">IRYNA BROOKS</h4>
            <p class="team_position">Head Of Marketing</p>
          </article>

        </div>
      </div>
    </section>
  `;

  container.insertAdjacentHTML('beforeend', html);
};