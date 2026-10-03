import { CONFIG } from './config.js';

const views      = document.querySelectorAll('.view-section');
const navBtns    = document.querySelectorAll('.nav-btn');
const themeBtn   = document.getElementById('theme-toggle');

// ── Theme ──────────────────────────────────────────────────────────────
let theme = localStorage.getItem('theme') || 'dark';

function applyTheme() {
  document.documentElement.setAttribute('data-theme', theme);
  if (themeBtn) themeBtn.textContent = theme === 'dark' ? '[ light ]' : '[ dark ]';
}

function toggleTheme() {
  theme = theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', theme);
  applyTheme();
}

// ── Router ─────────────────────────────────────────────────────────────
function route() {
  const hash = window.location.hash || '#about';

  // Blog post deep-link:  #blog/some-slug
  if (hash.startsWith('#blog/')) {
    const slug = hash.replace('#blog/', '');
    switchView('blogpost');
    renderBlogPost(slug);
    highlightNav('blog');
    return;
  }

  const target = hash.replace('#', '');
  switchView(target);
  highlightNav(target);
}

function switchView(id) {
  views.forEach(v => {
    v.classList.toggle('active-view', v.id === id);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function highlightNav(id) {
  navBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.target === id);
  });
}

// ── Render: About ──────────────────────────────────────────────────────
function renderAbout() {
  const img = document.getElementById('profile-img');
  if (img) img.src = CONFIG.photo;

  const nameEl = document.getElementById('about-name');
  if (nameEl) nameEl.textContent = CONFIG.name;

  const titleEl = document.getElementById('about-title');
  if (titleEl) titleEl.textContent = CONFIG.title;

  const bioEl = document.getElementById('about-bio');
  if (bioEl) bioEl.innerHTML = CONFIG.bio.map(p => `<p>${p}</p>`).join('');

  const socialEl = document.getElementById('social-links');
  if (socialEl) {
    socialEl.innerHTML = CONFIG.socials
      .map(s => `<a href="${s.url}" target="_blank" rel="noopener">${s.label}</a>`)
      .join('');
  }

  const skillsEl = document.getElementById('skills-grid');
  if (skillsEl) {
    skillsEl.innerHTML = CONFIG.skills
      .map(s => `<span class="skill-tag">${s}</span>`)
      .join('');
  }
}

// ── Render: Projects ───────────────────────────────────────────────────
function renderProjects() {
  const list = document.getElementById('projects-list');
  if (!list) return;

  list.innerHTML = CONFIG.projects.map(p => `
    <div class="project-card">
      <div class="project-title">${p.title}</div>
      <div class="project-desc">${p.description}</div>
      <div class="project-tags">
        ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
      </div>
      <a href="${p.link}" target="_blank" rel="noopener" class="project-link">view repository &rarr;</a>
    </div>
  `).join('');
}

// ── Render: CV ─────────────────────────────────────────────────────────
function renderCV() {
  const expEl = document.getElementById('exp-timeline');
  if (expEl) {
    expEl.innerHTML = CONFIG.experience.map(e => `
      <div class="timeline-item">
        <div class="tl-role">${e.role}</div>
        <div class="tl-meta">${e.org} / ${e.location} / ${e.period}</div>
        <ul class="tl-points">
          ${e.points.map(p => `<li>${p}</li>`).join('')}
        </ul>
      </div>
    `).join('');
  }

  const eduEl = document.getElementById('edu-timeline');
  if (eduEl) {
    eduEl.innerHTML = CONFIG.education.map(ed => `
      <div class="timeline-item">
        <div class="tl-role">${ed.degree}</div>
        <div class="tl-meta">${ed.org} / ${ed.period}</div>
        <p style="font-size:0.88rem; color:var(--text);">${ed.detail}</p>
      </div>
    `).join('');
  }
}

// ── Render: Blog Index ─────────────────────────────────────────────────
function renderBlogIndex() {
  const list = document.getElementById('blog-list');
  if (!list) return;

  list.innerHTML = CONFIG.blog.map(post => `
    <div class="blog-card" data-slug="${post.slug}">
      <div class="blog-date">${post.date} &middot; ${post.tags.join(', ')}</div>
      <div class="blog-card-title">${post.title}</div>
      <div class="blog-summary">${post.summary}</div>
      <span class="blog-read-more">read &rarr;</span>
    </div>
  `).join('');

  list.querySelectorAll('.blog-card').forEach(card => {
    card.addEventListener('click', () => {
      location.hash = `#blog/${card.dataset.slug}`;
    });
  });
}

// ── Render: Single Blog Post (full page) ───────────────────────────────
function renderBlogPost(slug) {
  const post = CONFIG.blog.find(p => p.slug === slug);
  const container = document.getElementById('blogpost-content');
  if (!container) return;

  if (!post) {
    container.innerHTML = `
      <a href="#blog" class="blog-back-link">&larr; back to blog</a>
      <p>Post not found.</p>`;
    return;
  }

  container.innerHTML = `
    <a href="#blog" class="blog-back-link">&larr; back to all posts</a>
    <h1 class="blog-post-title">${post.title}</h1>
    <div class="blog-post-meta">${post.date} &middot; ${post.tags.join(', ')}</div>
    <div class="blog-post-body">${post.content}</div>
    <hr class="divider">
    <a href="#blog" class="blog-back-link">&larr; back to all posts</a>
  `;
}

// ── Init ───────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  renderAbout();
  renderProjects();
  renderCV();
  renderBlogIndex();
  route();

  window.addEventListener('hashchange', route);

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      location.hash = `#${btn.dataset.target}`;
    });
  });

  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

  const printBtn = document.getElementById('print-btn');
  if (printBtn) printBtn.addEventListener('click', () => window.print());
});