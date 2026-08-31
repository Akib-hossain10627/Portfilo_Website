// ============================================================
// Behavior: nav, scroll-spy, ticker, project grid + filters + modal
// ============================================================

document.getElementById("year").textContent = new Date().getFullYear();

// ---- update these two before publishing ----
document.getElementById("linkedin-link").href = "https://www.linkedin.com/in/akib-hossain-a82800374";
document.getElementById("github-link").href = "https://https://github.com/Akib-hossain10627?tab=repositories";

// ---- mobile nav toggle ----
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");
navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => navLinks.classList.remove("open"))
);

// ---- scroll-spy active link ----
const sections = document.querySelectorAll("main section[id]");
const navAnchors = document.querySelectorAll(".links a");
const spy = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navAnchors.forEach(a => a.classList.remove("active"));
        const match = document.querySelector(`.links a[data-section="${entry.target.id}"]`);
        if (match) match.classList.add("active");
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);
sections.forEach(s => spy.observe(s));

// ---- ticker content (duplicated for seamless loop) ----
const tickerFacts = [
  "6 dashboards built",
  "563M+ BDT sales tracked",
  "40% reporting time cut",
  "1,995 HMS records analyzed",
  "Power BI · SQL · Excel · Python · Looker Studio"
];
function renderTicker() {
  const track = document.getElementById("ticker-track");
  const html = tickerFacts.map(f => `<span>${f.replace(/(\d[\d,.%+]*)/, m => `<b>${m}</b>`)}</span>`).join("");
  track.innerHTML = html + html; // duplicate for the CSS keyframe loop
}
renderTicker();

// ---- build a tiny CSS bar-chart for a project card ----
function barsMarkup(bars) {
  return `<div class="chart-bars">${bars.map(h => `<i style="height:${h}%"></i>`).join("")}</div>`;
}

// ---- media for a project card/modal: real image if provided, else CSS bar-chart ----
function mediaMarkup(p) {
  if (p.image) {
    return `<img src="${p.image}" alt="${p.title}" loading="lazy">`;
  }
  return barsMarkup(p.bars || []);
}

// ---- project grid ----
const grid = document.getElementById("grid");
const filtersEl = document.getElementById("filters");

function cardMarkup(p) {
  return `
    <div class="card" data-id="${p.id}">
      <div class="card-media">${mediaMarkup(p)}</div>
      <div class="card-body">
        <span class="card-tag">${p.tag}</span>
        <h3>${p.title}</h3>
        <p>${p.summary}</p>
        <div class="card-tools">${p.tools.map(t => `<span>${t}</span>`).join("")}</div>
      </div>
    </div>`;
}

function renderGrid(filter) {
  const items = filter === "all" ? PROJECTS : PROJECTS.filter(p => p.category === filter);
  grid.innerHTML = items.map(cardMarkup).join("");
  grid.querySelectorAll(".card").forEach(card =>
    card.addEventListener("click", () => openModal(card.dataset.id))
  );
}

function renderFilters() {
  const cats = ["all", ...new Set(PROJECTS.map(p => p.category))];
  const labels = { all: "All", "power-bi": "Power BI", SQL: "SQL", sheets: "Excel/Google Sheets", python: "Python", looker: "Looker Studio" };
  filtersEl.innerHTML = cats
    .map((c, i) => `<button class="filter-btn ${i === 0 ? "active" : ""}" data-cat="${c}">${labels[c] || c}</button>`)
    .join("");
  filtersEl.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      filtersEl.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderGrid(btn.dataset.cat);
    });
  });
}

renderFilters();
renderGrid("all");

// ---- modal ----
const overlay = document.getElementById("modal-overlay");
const modalMedia = document.getElementById("modal-media");
const modalTag = document.getElementById("modal-tag");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalTools = document.getElementById("modal-tools");

function openModal(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;
  modalMedia.innerHTML = p.image
    ? mediaMarkup(p)
    : barsMarkup((p.bars || []).map(b => Math.min(100, b + 6)));
  modalTag.textContent = p.tag;
  modalTitle.textContent = p.title;
  modalDesc.innerHTML = p.points.map(pt => `<li>${pt}</li>`).join("");
  modalTools.innerHTML = p.tools.map(t => `<span>${t}</span>`).join("");
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeModal() {
  overlay.classList.remove("open");
  document.body.style.overflow = "";
}
document.getElementById("modal-close").addEventListener("click", closeModal);
overlay.addEventListener("click", e => { if (e.target === overlay) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

// ---- testimonial ----
document.getElementById("quote-text").textContent = TESTIMONIAL.quote;
document.getElementById("quote-name").textContent = TESTIMONIAL.name;
document.getElementById("quote-context").textContent = TESTIMONIAL.context;
