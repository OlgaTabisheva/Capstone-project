export const renderFooter = (): void => {
  const container = document.querySelector('#app');
  if (!container) return;


  const path = window.location.pathname;
  const isHtmlDir = path.includes('/html/') || path.includes('html/');
  const rootPath = isHtmlDir ? '../' : './';

  const footerHTML = `
    <footer class="footer">
      <div class="footer_benefits">
        <div class="footer_container">
          <h3 class="footer_benefits-title">Our Benefits</h3>
          <div class="footer_benefits-grid">
            <div class="footer_benefit">
               <img src="${rootPath}assets/images/footer.svg" alt="plane" class="footer_image-icon"
              <p class="footer_benefit-text">Velit nisl sodales eget donec quis. volutpat orci.</p>
            </div>
            <div class="footer_benefit">
                <img src="${rootPath}assets/images/footer-1.svg" alt="car" class="footer_image-icon"
              <p class="footer_benefit-text">Dolor eu varius. Morbi fermentum velit nisl.</p>
            </div>
            <div class="footer_benefit">
                <img src="${rootPath}assets/images/footer-2.svg" alt="fix" class="footer_image-icon"
              <p class="footer_benefit-text">Malesuada fames ac ante ipsum primis in faucibus.</p>
            </div>
            <div class="footer_benefit">
                <img src="${rootPath}assets/images/footer-3.svg" alt="education" class="footer_image-icon"
              <p class="footer_benefit-text">Nisl sodales eget donec quis. volutpat orci.</p>
            </div>
          </div>
        </div>
      </div>



<div class="footer-container">
        
        <div class="footer-body">
          <div class="footer-main-content">
            
            <div class="footer-links-row">
              <div class="footer-col">
                <h4 class="footer-col-title">About Us</h4>
                <ul class="footer-list">
                  <li><a href="javascript:void(0)">Organisation</a></li>
                  <li><a href="javascript:void(0)">Partners</a></li>
                  <li><a href="javascript:void(0)">Clients</a></li>
                </ul>
              </div>
              <div class="footer-col">
                <h4 class="footer-col-title">What We Do</h4>
                <ul class="footer-list">
                  <li><a href="${isHtmlDir ? '../index.html' : './index.html'}">Homepage</a></li>
                  <li><a href="javascript:void(0)">Photo Gallery</a></li>
                  <li><a href="javascript:void(0)">Our Team</a></li>
                  <li><a href="javascript:void(0)">Socials</a></li>
                </ul>
              </div>
              <div class="footer-col">
                <h4 class="footer-col-title">Company</h4>
                <ul class="footer-list">
                  <li><a href="${isHtmlDir ? './about.html' : './html/about.html'}">About Us</a></li>
                  <li><a href="${isHtmlDir ? './contact.html' : './html/contact.html'}">Contact Us</a></li>
                  <li><a href="javascript:void(0)">Winning Awards</a></li>
                  <li><a href="javascript:void(0)">Press</a></li>
                  <li><a href="javascript:void(0)">Our Amazing Clients</a></li>
                </ul>
              </div>
            </div>

            <div class="footer-shipping">
              <h4 class="footer-col-title">Shipping Information</h4>
              <p class="footer-text">
                Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac. Ut sit amet erat nec nibh rhoncus varius in non lorem. Donec interdum, lectus in convallis pulvinar, enim elit porta sapien, vel finibus erat felis sed neque. Etiam aliquet neque sagittis erat tincidunt aliquam.
              </p>
            </div>
          </div>

          <aside class="footer-side-content">
            <h4 class="footer-col-title">Contact Us</h4>
            <p class="footer-text footer-text-margin">
              Bendum dolor eu varius. Morbi fermentum velitsodales egetonec. volutpat orci. Sed ipsum felis, tristique egestas et, convallis ac velitn consequat nec luctus.
            </p>
            
            <div class="footer-contacts">
              <div class="footer-contact-item">
                <img src="${rootPath}assets/images/phone.svg" alt="phone" class="footer-contact-icon">
                <div class="footer-contact-info">Phone: (+63) 236 6322</div>
              </div>
              <div class="footer-contact-item">
                <img src="${rootPath}assets/images/mail.svg" alt="mail" class="footer-contact-icon">
                <div class="footer-contact-info">public@news.com</div>
              </div>
              <div class="footer-contact-item">
                <img src="${rootPath}assets/images/clock.svg" alt="clock" class="footer-contact-icon">
                <div class="footer-contact-info">Mon - Fri: 10am - 6pm <br> Sat - Sun: 10am - 6pm</div>
              </div>
              <div class="footer-contact-item">
                <img src="${rootPath}assets/images/pin.svg" alt="location" class="footer-contact-icon">
                <div class="footer-contact-info">639 Jade Valley, Washington Dc</div>
              </div>
            </div>
          </aside>
        </div>

        <div class="footer-bottom">
          <p class="footer-copyright">© Copyright 2025</p>
        </div>

      </div>
   
    </footer>
  `;

  container.insertAdjacentHTML('afterend', footerHTML);
};