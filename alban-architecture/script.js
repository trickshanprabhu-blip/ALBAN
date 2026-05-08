/* ============================
   ALBAN ARCHITECTURE — script.js
   ============================ */

/* ===== ANIMATED WAVE CANVAS ===== */
(function initWaves() {
  const canvas = document.getElementById('wave-canvas');
  const ctx = canvas.getContext('2d');
  let W, H, waves = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function createWaves() {
    waves = [
      { y: 0.35, amp: 60, freq: 0.012, speed: 0.006, phase: 0, color: 'rgba(255,255,255,0.6)' },
      { y: 0.50, amp: 45, freq: 0.018, speed: 0.009, phase: 2,   color: 'rgba(255,255,255,0.35)' },
      { y: 0.65, amp: 55, freq: 0.010, speed: 0.005, phase: 4,   color: 'rgba(212,175,55,0.25)' },
      { y: 0.80, amp: 35, freq: 0.022, speed: 0.011, phase: 1,   color: 'rgba(255,255,255,0.2)' },
    ];
  }

  function drawWave(w) {
    ctx.beginPath();
    ctx.moveTo(0, H);
    for (let x = 0; x <= W; x += 4) {
      const y = w.y * H + Math.sin(x * w.freq + w.phase) * w.amp;
      ctx.lineTo(x, y);
    }
    ctx.lineTo(W, H);
    ctx.closePath();
    ctx.fillStyle = w.color;
    ctx.fill();
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);
    waves.forEach(w => {
      w.phase += w.speed;
      drawWave(w);
    });
    requestAnimationFrame(animate);
  }

  resize();
  createWaves();
  animate();
  window.addEventListener('resize', resize);
})();


/* ===== NAVBAR SCROLL EFFECT ===== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});


/* ===== MOBILE NAV TOGGLE ===== */
const navToggle = document.getElementById('nav-toggle');
const navLinks  = document.getElementById('nav-links');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});


/* ===== SCROLL REVEAL ===== */
const revealEls = document.querySelectorAll('.about-card, .plan-card, .contact-info-card, .contact-form');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      e.target.style.animation = `fadeUp 0.7s ${i * 0.1}s ease both`;
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => observer.observe(el));


/* ===== PLAN DATA ===== */
const planData = {
  1: {
    name: 'Essential Home',
    badge: 'Starter Plan',
    price: '₹2,100 / sq.ft',
    image: 'house1.png',
    facilities: [
      { icon: '🛏️', text: '2 Spacious Bedrooms with built-in wardrobes' },
      { icon: '🛁', text: '2 Modern Bathrooms with quality fixtures' },
      { icon: '🍳', text: 'Open-plan Kitchen + Dining Area' },
      { icon: '🛋️', text: 'Comfortable Living Room with large windows' },
      { icon: '🏞️', text: 'Basic Landscaping & Front Garden' },
      { icon: '🔌', text: 'Standard Electrical & Plumbing fitments' },
      { icon: '🅿️', text: '1 Car Parking Space' },
      { icon: '🏗️', text: 'Structural warranty: 10 years' },
    ],
    rates: [
      { label: 'Brickwork & Masonry', val: '₹320/sq.ft' },
      { label: 'Flooring (Tiles)', val: '₹180/sq.ft' },
      { label: 'Plumbing', val: '₹140/sq.ft' },
      { label: 'Electrical Works', val: '₹160/sq.ft' },
      { label: 'Roofing', val: '₹220/sq.ft' },
      { label: 'Painting (Int+Ext)', val: '₹120/sq.ft' },
      { label: 'Steel & RCC', val: '₹560/sq.ft' },
      { label: 'Miscellaneous', val: '₹400/sq.ft' },
    ]
  },
  2: {
    name: 'Premium Villa',
    badge: 'Most Popular',
    price: '₹2,200 / sq.ft',
    image: 'house2.png',
    facilities: [
      { icon: '🛏️', text: '3 Bedrooms + Study Room with premium interiors' },
      { icon: '🛁', text: '3 Bathrooms with imported fittings' },
      { icon: '🍳', text: 'Modular Kitchen with granite countertops' },
      { icon: '🛋️', text: 'Spacious Living + Formal Dining Room' },
      { icon: '🌿', text: 'Landscaped Garden with irrigation system' },
      { icon: '☀️', text: 'Solar power provision & energy savings' },
      { icon: '🅿️', text: '2 Car Parking + Drive-in porch' },
      { icon: '🔐', text: 'Smart home security pre-wiring' },
    ],
    rates: [
      { label: 'Brickwork & Masonry', val: '₹360/sq.ft' },
      { label: 'Premium Flooring', val: '₹240/sq.ft' },
      { label: 'Plumbing (Imported)', val: '₹180/sq.ft' },
      { label: 'Electrical + Smart', val: '₹210/sq.ft' },
      { label: 'Roofing (Insulated)', val: '₹260/sq.ft' },
      { label: 'Painting (Texture)', val: '₹160/sq.ft' },
      { label: 'Steel & RCC', val: '₹580/sq.ft' },
      { label: 'Miscellaneous', val: '₹210/sq.ft' },
    ]
  },
  3: {
    name: 'Luxury Mansion',
    badge: 'Elite Collection',
    price: '₹2,300 / sq.ft',
    image: 'house3.png',
    facilities: [
      { icon: '🛏️', text: '4+ Master Bedrooms with en-suite baths' },
      { icon: '🏊', text: 'Private Swimming Pool + Jacuzzi' },
      { icon: '🍳', text: 'Chef\'s Kitchen with Italian cabinetry' },
      { icon: '🎬', text: 'Home Theatre & Entertainment Room' },
      { icon: '🌿', text: 'Rooftop Garden + Terrace lounge' },
      { icon: '⚡', text: 'Full solar + backup power system' },
      { icon: '🅿️', text: '4 Car Garage with smart access' },
      { icon: '🔐', text: 'Full Smart Home Automation system' },
    ],
    rates: [
      { label: 'Brickwork & Masonry', val: '₹400/sq.ft' },
      { label: 'Marble/Hardwood Floor', val: '₹350/sq.ft' },
      { label: 'Luxury Plumbing', val: '₹240/sq.ft' },
      { label: 'Smart Electrical', val: '₹280/sq.ft' },
      { label: 'Waterproof Roofing', val: '₹300/sq.ft' },
      { label: 'Designer Painting', val: '₹200/sq.ft' },
      { label: 'Steel & RCC', val: '₹630/sq.ft' },
      { label: 'Premium Finishes', val: '₹400/sq.ft' },
    ]
  }
};


/* ===== SELECT PLAN (open modal) ===== */
function selectPlan(id) {
  const data = planData[id];
  if (!data) return;

  // Set content
  document.getElementById('modal-plan-badge').textContent = data.badge;
  document.getElementById('modal-title').textContent = data.name;
  document.getElementById('modal-price-big').textContent = data.price;
  document.getElementById('modal-house-img').src = data.image;
  document.getElementById('modal-house-img').alt = data.name;

  // Facilities
  const facList = document.getElementById('modal-facilities');
  facList.innerHTML = '';
  data.facilities.forEach((f, i) => {
    const li = document.createElement('li');
    li.style.animationDelay = `${0.1 + i * 0.07}s`;
    li.innerHTML = `<span class="fac-icon">${f.icon}</span><span>${f.text}</span>`;
    facList.appendChild(li);
  });

  // Rates
  const ratesEl = document.getElementById('modal-rates');
  ratesEl.innerHTML = '';
  data.rates.forEach((r, i) => {
    const div = document.createElement('div');
    div.className = 'rate-item';
    div.style.animationDelay = `${0.1 + i * 0.06}s`;
    div.innerHTML = `<div class="ri-label">${r.label}</div><div class="ri-val">${r.val}</div>`;
    ratesEl.appendChild(div);
  });

  // Particles
  spawnParticles();

  // Show overlay
  const overlay = document.getElementById('plan-detail-overlay');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function spawnParticles() {
  const container = document.getElementById('build-particles');
  container.innerHTML = '';
  for (let i = 0; i < 16; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const angle = (i / 16) * 360;
    const dist = 80 + Math.random() * 60;
    const tx = Math.cos(angle * Math.PI / 180) * dist + 'px';
    const ty = Math.sin(angle * Math.PI / 180) * dist + 'px';
    p.style.cssText = `
      left: ${40 + Math.random() * 20}%;
      top: ${40 + Math.random() * 20}%;
      --tx: ${tx}; --ty: ${ty};
      animation-delay: ${Math.random() * 0.5}s;
      width: ${4 + Math.random() * 6}px;
      height: ${4 + Math.random() * 6}px;
      background: ${Math.random() > 0.5 ? '#d4af37' : '#ffffff'};
    `;
    container.appendChild(p);
  }
}

function closePlan() {
  const overlay = document.getElementById('plan-detail-overlay');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function closePlanDetail(e) {
  if (e.target === document.getElementById('plan-detail-overlay')) closePlan();
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closePlan();
});


/* ===== CONTACT FORM ===== */
const form = document.getElementById('contact-form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let valid = true;

  // Validate name
  const fname = document.getElementById('fname');
  const fnameErr = document.getElementById('fname-error');
  if (!fname.value.trim()) {
    fnameErr.textContent = 'Please enter your name.';
    fname.style.borderColor = '#ff7070';
    valid = false;
  } else {
    fnameErr.textContent = '';
    fname.style.borderColor = '';
  }

  // Validate email
  const femail = document.getElementById('femail');
  const femailErr = document.getElementById('femail-error');
  const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRx.test(femail.value.trim())) {
    femailErr.textContent = 'Please enter a valid email address.';
    femail.style.borderColor = '#ff7070';
    valid = false;
  } else {
    femailErr.textContent = '';
    femail.style.borderColor = '';
  }

  if (!valid) return;

  // Simulate submission
  const btn    = document.getElementById('form-submit-btn');
  const txt    = document.getElementById('submit-text');
  const loader = document.getElementById('submit-loader');
  const success= document.getElementById('form-success');

  btn.disabled = true;
  txt.classList.add('hidden');
  loader.classList.remove('hidden');

  setTimeout(() => {
    btn.disabled = false;
    txt.classList.remove('hidden');
    loader.classList.add('hidden');
    success.classList.remove('hidden');
    form.reset();
    setTimeout(() => success.classList.add('hidden'), 6000);
  }, 2000);
});


/* ===== LOGO CRANE HOVER ANIMATION ===== */
const crane = document.getElementById('logo-crane');
if (crane) {
  crane.addEventListener('mouseenter', () => {
    crane.style.transform = 'rotate(-8deg) scale(1.15)';
    crane.style.transition = 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)';
  });
  crane.addEventListener('mouseleave', () => {
    crane.style.transform = '';
  });
}

/* ===== PLAN CARD TILT EFFECT ===== */
document.querySelectorAll('.plan-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    card.style.transform = `translateY(-10px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

/* ===== SMOOTH ACTIVE NAV LINK ===== */
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 100;
  sections.forEach(sec => {
    const top = sec.offsetTop;
    const h   = sec.offsetHeight;
    const id  = sec.getAttribute('id');
    const link = document.querySelector(`.nav-link[href="#${id}"]`);
    if (link) {
      if (scrollY >= top && scrollY < top + h) {
        link.style.color = 'var(--gold)';
      } else {
        link.style.color = '';
      }
    }
  });
}, { passive: true });
