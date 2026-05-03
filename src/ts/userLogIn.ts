export const renderuserLogIn = (): void => {
  const existingModal = document.querySelector('.userLogIn_overlay');
  if (existingModal) return;

  const overlay = document.createElement('div');
  overlay.className = 'userLogIn_overlay';

  const html = `
    <div class="userLogIn">
      <div class="userLogIn_container">
   
        <form class="userLogIn_form">
          
          <div class="userLogIn_field">
            <label class="userLogIn_label">Email address <span class="userLogIn_required">*</span></label>
            <input type="email" class="userLogIn_input" required>
          </div>

          <div class="userLogIn_field">
            <label class="userLogIn_label">Password <span class="userLogIn_required">*</span></label>
            <div class="userLogIn_input-wrapper">
              <input type="password" class="userLogIn_input" id="password-input" required>
              <button type="button" class="userLogIn_toggle-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </button>
            </div>
          </div>

          <div class="userLogIn_options">
            <label class="userLogIn_checkbox-label">
              <input type="checkbox" class="userLogIn_checkbox">
              <span class="userLogIn_remember">Remember me</span>
            </label>
            <a href="javascript:void(0)" class="userLogIn_forgot">Forgot Your Password?</a>
          </div>

          <button type="submit" class="userLogIn_submit-btn">LOG IN</button>

        </form>
      </div>
    </div>
  `;

  overlay.innerHTML = html;
  document.body.appendChild(overlay);

  const closeModal = () => {
    overlay.classList.add('userLogIn_overlay-hidden');
    setTimeout(() => {
      overlay.remove();
      if (window.location.pathname.includes('userLogIn.html')) {
        const isHtmlDir = window.location.pathname.includes('/html/');
        window.location.href = isHtmlDir ? '../index.html' : './index.html';
      }
    }, 300);
  };

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  const form = overlay.querySelector('.userLogIn_form') as HTMLFormElement;
  const emailInput = overlay.querySelector('input[type="email"]') as HTMLInputElement;

  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      alert('Please enter a valid email address.');
      return;
    }

    alert('Logged in successfully!');
    closeModal();
  });

  const toggleBtn = overlay.querySelector('.userLogIn_toggle-btn');
  const passwordInput = overlay.querySelector('#password-input') as HTMLInputElement;
  toggleBtn?.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
  });
};