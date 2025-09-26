// Mobile nav toggle
const navToggleButton = document.querySelector('.nav-toggle');
const siteNav = document.getElementById('site-nav');
if (navToggleButton && siteNav) {
  navToggleButton.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggleButton.setAttribute('aria-expanded', String(isOpen));
  });
}

// Smooth scroll for on-page anchors
document.addEventListener('click', (e) => {
  const target = e.target;
  if (!(target instanceof Element)) return;
  if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
    const id = target.getAttribute('href');
    const el = id ? document.querySelector(id) : null;
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
      history.pushState(null, '', id);
    }
  }
});

// Card click to open external store links
function handleCardActivate(cardEl) {
  const url = cardEl.getAttribute('data-url');
  if (url) window.open(url, '_blank', 'noopener');
}

document.querySelectorAll('.portfolio-grid .card').forEach((card) => {
  card.addEventListener('click', () => handleCardActivate(card));
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardActivate(card);
    }
  });
});

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Header slider controls
const sliderViewport = document.querySelector('.slider-viewport');
const sliderTrack = document.querySelector('.slider-track');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');

function scrollByAmount(amount) {
  if (!sliderViewport) return;
  sliderViewport.scrollBy({ left: amount, behavior: 'smooth' });
}

if (prevBtn && nextBtn && sliderViewport) {
  prevBtn.addEventListener('click', () => scrollByAmount(-sliderViewport.clientWidth * 0.8));
  nextBtn.addEventListener('click', () => scrollByAmount(sliderViewport.clientWidth * 0.8));
}

// Activate slider items by click/keyboard
document.querySelectorAll('.slider-item').forEach((item) => {
  item.addEventListener('click', () => handleCardActivate(item));
  item.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardActivate(item);
    }
  });
});


