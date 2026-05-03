export const renderLoginModal = (): void => {
    if (document.getElementById('login-modal')) return;
    const eyeIcon = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
        </svg>`;

    const eyeOffIcon = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
            <line x1="1" y1="1" x2="23" y2="23"></line>
        </svg>`;
    const modalHtml = `
    <div class="modal" id="login-modal">
      <div class="modal_content">
        <form class="modal_form" id="login-form">
          <div class="modal_field">
            <label class="modal_label">Email Address *</label>
            <input type="email" class="modal_input" id="login-email" required placeholder="example@mail.com">
            <span class="modal_error" id="email-error">Please enter a valid email address.</span>
          </div>
          <div class="modal_field">
            <label class="modal_label">Password *</label>
            <input type="password" class="modal_input" id="login-password" required placeholder="********">
             <button id="toggle-password" type="button" class="modal_toggle-pass">
              ${eyeIcon}
              </button>

          </div>
          <button type="submit" class="modal_btn">LOG IN</button>
        </form>
      </div>
    </div>
  `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);

    const modal = document.getElementById('login-modal');
    const form = document.getElementById('login-form') as HTMLFormElement;
    const togglePass = document.getElementById('toggle-password');
    const passwordInput = document.getElementById('login-password') as HTMLInputElement;
    const emailInput = document.getElementById('login-email') as HTMLInputElement;
    const emailError = document.getElementById('email-error');

    const closeModal = () => {
        modal?.classList.remove('active');
    };

    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    togglePass?.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            togglePass.innerHTML = eyeOffIcon;
        } else {
            passwordInput.type = 'password';
            togglePass.innerHTML = eyeIcon;
        }
    });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    emailInput?.addEventListener('input', () => {
        if (emailInput.value && !emailRegex.test(emailInput.value)) {
            emailError && (emailError.style.display = 'block');
        } else {
            emailError && (emailError.style.display = 'none');
        }
    });

    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!emailRegex.test(emailInput.value)) {
            alert('Please enter a valid email.');
            return;
        }

        alert('Logged in successfully!');
        closeModal();
        form.reset();
    });
};

export const openLoginModal = () => {
    const modal = document.getElementById('login-modal');
    modal?.classList.add('active');
};
