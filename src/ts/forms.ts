
export const renderContactForm = (): string => {
    return `
    <form class="feedback_form">
      <div class="feedback_field">
        <label class="feedback_label">Your Name *</label>
        <input type="text" class="feedback_input" required>
      </div>

      <div class="feedback_field">
        <label class="feedback_label">Your Email Address *</label>
        <input type="email" class="feedback_input" required>
      </div>

      <div class="feedback_field">
        <label class="feedback_label">Topic *</label>
        <input type="text" class="feedback_input" required>
      </div>

      <div class="feedback_field">
        <label class="feedback_label">Your Message *</label>
        <textarea class="feedback_textarea" required></textarea>
      </div>

      <button type="submit" class="feedback_btn">SEND</button>
    </form>
  `;
};

export const initContactForm = (): void => {
    const container = document.querySelector('#app');
    const form = document.querySelector('.feedback_form');

    if (!form || !container) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const content = container.querySelector('.feedback_content');
        if (content) {
            content.innerHTML = `
        <h2 class="feedback_title">Thank You!</h2>
        <p class="feedback_subtitle">Your message has been sent successfully. We will get back to you soon!</p>
        <button class="feedback_btn" onclick="location.reload()">SEND ANOTHER MESSAGE</button>
      `;
        }
    });
};
