import { USER_CONFIG } from './config.js';

// DOM Elements
const views = document.querySelectorAll('.view-section');
const navButtons = document.querySelectorAll('.nav-btn');
const themeToggle = document.getElementById('theme-toggle');

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initRouting();
  renderProfile();
  renderProjects();
  renderCV();
  renderBlog();
  initSpectrumAnalyzer();
  initEventListeners();
});

// Theme Management
let currentTheme = localStorage.getItem('theme') || 'dark';

function initTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon();
}

function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  localStorage.setItem('theme', currentTheme);
  updateThemeIcon();
}

function updateThemeIcon() {
  if (themeToggle) {
    themeToggle.innerHTML = currentTheme === 'dark' 
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>`;
  }
}

// Router
function initRouting() {
  const handleHash = () => {
    let hash = window.location.hash || '#about';
    if (hash.startsWith('#blog/')) {
      const slug = hash.replace('#blog/', '');
      switchView('blog');
      openBlogDrawer(slug);
    } else {
      const target = hash.replace('#', '');
      switchView(target);
    }
  };
  window.addEventListener('hashchange', handleHash);
  handleHash();
}

function switchView(targetId) {
  views.forEach(v => {
    if (v.id === targetId) v.classList.add('active-view');
    else v.classList.remove('active-view');
  });

  navButtons.forEach(btn => {
    if (btn.getAttribute('data-target') === targetId) btn.classList.add('active');
    else btn.classList.remove('active');
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Render Profile, Bio, & Social Handles
function renderProfile() {
  const profileName = document.getElementById('profile-name');
  if (profileName) profileName.textContent = USER_CONFIG.name;

  const profileRole = document.getElementById('profile-role');
  if (profileRole) profileRole.textContent = USER_CONFIG.title;

  const profileImg = document.getElementById('profile-img');
  if (profileImg) profileImg.src = USER_CONFIG.photo;

  const statusBadge = document.getElementById('status-badge');
  if (statusBadge) statusBadge.textContent = USER_CONFIG.statusBadge;

  const bioContainer = document.getElementById('about-bio');
  if (bioContainer) {
    bioContainer.innerHTML = USER_CONFIG.bio.map(p => `<p class="about-bio-text">${p}</p>`).join('');
  }

  // Render Social Links Icons
  const socialRow = document.getElementById('social-links');
  if (socialRow) {
    socialRow.innerHTML = USER_CONFIG.socials.map(s => {
      let iconSvg = '';
      if (s.icon === 'linkedin') {
        iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>`;
      } else if (s.icon === 'github') {
        iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`;
      } else if (s.icon === 'scholar') {
        iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l12 9.5 12-9.5L12 0z"/></svg>`;
      } else {
        iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`;
      }
      return `<a href="${s.url}" target="_blank" rel="noopener" class="social-icon-btn" title="${s.name}" aria-label="${s.name}">${iconSvg}</a>`;
    }).join('');
  }

  // Render Skill Badges
  const skillsPillGroup = document.getElementById('skills-group');
  if (skillsPillGroup) {
    skillsPillGroup.innerHTML = USER_CONFIG.skills.map(sk => `<span class="skill-tag">${sk}</span>`).join('');
  }
}

// Interactive FFT Frequency Spectrum Visualizer Engine
function initSpectrumAnalyzer() {
  const canvas = document.getElementById('spectrum-canvas');
  const freqSlider = document.getElementById('freq-slider');
  const freqDisplay = document.getElementById('freq-val-display');

  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = canvas.parentElement.clientWidth - 48;
    canvas.height = 160;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  let carrierFreq = freqSlider ? parseFloat(freqSlider.value) : 2.4;

  if (freqSlider) {
    freqSlider.addEventListener('input', (e) => {
      carrierFreq = parseFloat(e.target.value);
      if (freqDisplay) freqDisplay.textContent = `${carrierFreq.toFixed(1)} GHz`;
    });
  }

  let phase = 0;

  function drawSpectrum() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const W = canvas.width;
    const H = canvas.height;

    // Draw Grid Lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;

    for (let x = 0; x < W; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, H);
      ctx.stroke();
    }
    for (let y = 0; y < H; y += 30) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(W, y);
      ctx.stroke();
    }

    // Calculate Peak Position based on slider
    const peakX = (carrierFreq / 5.0) * W;

    // Draw Spectrum Trace
    ctx.beginPath();
    ctx.strokeStyle = '#06b6d4';
    ctx.lineWidth = 2;

    phase += 0.05;

    for (let x = 0; x < W; x += 2) {
      // Noise floor (-80dB simulation)
      let noise = (Math.random() - 0.5) * 8;
      let y = H - 25 + noise;

      // Carrier Peak (Gaussian distribution)
      const dist = Math.abs(x - peakX);
      if (dist < 50) {
        let carrierAmp = (H - 50) * Math.exp(-(dist * dist) / 120);
        y -= carrierAmp;
      }

      // Harmonic 1
      const distH1 = Math.abs(x - (peakX * 1.5 % W));
      if (distH1 < 30) {
        let h1Amp = (H - 100) * Math.exp(-(distH1 * distH1) / 80);
        y -= h1Amp;
      }

      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Draw Carrier Marker Line
    ctx.strokeStyle = '#3b82f6';
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(peakX, 0);
    ctx.lineTo(peakX, H);
    ctx.stroke();
    ctx.setLineDash([]);

    // Label Peak
    ctx.fillStyle = '#3b82f6';
    ctx.font = '10px "JetBrains Mono"';
    ctx.fillText(`fc = ${carrierFreq.toFixed(1)} GHz`, peakX + 6, 20);

    requestAnimationFrame(drawSpectrum);
  }

  drawSpectrum();
}

// Render Projects Grid
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = USER_CONFIG.projects.map(p => `
    <div class="project-card">
      <img src="${p.image}" alt="${p.title}" class="project-img" loading="lazy">
      <div class="project-body">
        <div class="project-category">${p.category}</div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.description}</p>
        <div class="project-tags">
          ${p.tags.map(t => `<span class="mini-tag">${t}</span>`).join('')}
        </div>
        <div class="project-links">
          <a href="${p.github}" target="_blank" rel="noopener" class="project-link-btn">
            GitHub Repository &rarr;
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

// Render CV Experience & Education
function renderCV() {
  const expTimeline = document.getElementById('experience-timeline');
  if (expTimeline) {
    expTimeline.innerHTML = USER_CONFIG.experience.map(e => `
      <div class="timeline-item">
        <h3 class="timeline-role">${e.role} — <span style="color:var(--accent-blue);">${e.institution}</span></h3>
        <div class="timeline-meta">${e.period} | ${e.location}</div>
        <p style="color:var(--text-secondary); font-size:0.9rem; margin-bottom:8px;">${e.summary}</p>
        <ul class="timeline-points">
          ${e.points.map(pt => `<li>${pt}</li>`).join('')}
        </ul>
      </div>
    `).join('');
  }

  const eduTimeline = document.getElementById('education-timeline');
  if (eduTimeline) {
    eduTimeline.innerHTML = USER_CONFIG.education.map(ed => `
      <div class="timeline-item">
        <h3 class="timeline-role">${ed.degree}</h3>
        <div class="timeline-meta">${ed.institution} (${ed.period})</div>
        <p style="color:var(--text-secondary); font-size:0.9rem;">${ed.details}</p>
      </div>
    `).join('');
  }
}

// Render Lab Notes (Blog)
function renderBlog() {
  const blogGrid = document.getElementById('blog-grid');
  if (!blogGrid) return;

  blogGrid.innerHTML = USER_CONFIG.blog.map(post => `
    <div class="blog-card" onclick="location.hash='#blog/${post.slug}'">
      <div class="blog-date">${post.date} • ${post.readTime}</div>
      <h3 class="blog-title">${post.title}</h3>
      <p class="blog-summary">${post.summary}</p>
      <div style="margin-top:12px; font-size:0.8rem; color:var(--accent-cyan);">Read article &rarr;</div>
    </div>
  `).join('');
}

function openBlogDrawer(slug) {
  const post = USER_CONFIG.blog.find(p => p.slug === slug);
  if (!post) return;

  const titleEl = document.getElementById('drawer-title');
  const bodyEl = document.getElementById('drawer-body');
  const backdrop = document.getElementById('drawer-backdrop');

  if (titleEl) titleEl.textContent = post.title;
  if (bodyEl) bodyEl.innerHTML = `
    <div style="font-family:var(--font-mono); font-size:0.85rem; color:var(--text-muted); margin-bottom:20px;">
      ${post.date} • ${post.readTime}
    </div>
    ${post.content}
  `;
  if (backdrop) backdrop.classList.add('open');
}

function closeBlogDrawer() {
  const backdrop = document.getElementById('drawer-backdrop');
  if (backdrop) backdrop.classList.remove('open');
  if (window.location.hash.startsWith('#blog/')) {
    window.location.hash = '#blog';
  }
}

// Global Event Listeners
function initEventListeners() {
  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);

  const closeBtn = document.getElementById('drawer-close');
  if (closeBtn) closeBtn.addEventListener('click', closeBlogDrawer);

  const backdrop = document.getElementById('drawer-backdrop');
  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeBlogDrawer();
    });
  }

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');
      window.location.hash = `#${target}`;
    });
  });

  const printBtn = document.getElementById('print-cv-btn');
  if (printBtn) {
    printBtn.addEventListener('click', () => window.print());
  }
}
