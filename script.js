document.addEventListener('DOMContentLoaded', () => {
  // 1. Event Category Filter Logic
  const filterBtns = document.querySelectorAll('.filter-btn');
  const eventCards = document.querySelectorAll('.event-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      eventCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
    });
  });

  // 2. Registration Form Validation
  const regForm = document.getElementById('regForm');
  regForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const eventSelect = document.getElementById('eventSelect').value;
    const statusAlert = document.getElementById('statusAlert');

    let isValid = true;
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('eventError').textContent = '';

    if (!fullName) {
      document.getElementById('nameError').textContent = 'Full name is required.';
      isValid = false;
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      document.getElementById('emailError').textContent = 'Valid email is required.';
      isValid = false;
    }

    if (!eventSelect) {
      document.getElementById('eventError').textContent = 'Please select an event.';
      isValid = false;
    }

    if (isValid) {
      statusAlert.className = 'status-alert success';
      statusAlert.textContent = `Registration successful for ${fullName}!`;
      regForm.reset();
    }
  });

  // 3. Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const contactStatus = document.getElementById('contactStatus');
    contactStatus.className = 'status-alert success';
    contactStatus.textContent = 'Thank you! Your message has been received.';
    contactForm.reset();
  });
});