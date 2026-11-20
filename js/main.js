// ===== CONFIGURATION : à compléter avec des informations vérifiées =====
const CONFIG = {
  email: "",   // ex. "contact@exemple.com" (vide = bouton e-mail masqué)
  github: ""   // ex. "https://github.com/identifiant" (vide = icône GitHub masquée)
};
// =======================================================================
(() => {
  const $ = (s) => document.querySelector(s);
  $("#year").textContent = new Date().getFullYear();

  if (CONFIG.email) { const b = $("#email-btn"); b.href = "mailto:" + CONFIG.email; b.hidden = false; }
  if (CONFIG.github) {
    ["#github-link", "#github-foot-link"].forEach((s) => ($(s).href = CONFIG.github));
    ["#github-item", "#github-foot"].forEach((s) => ($(s).hidden = false));
  }

  const fig = $(".portrait"), img = fig.querySelector("img");
  const check = () => fig.classList.toggle("no-photo", !img.naturalWidth);
  img.complete ? check() : img.addEventListener("load", check);
  img.addEventListener("error", () => fig.classList.add("no-photo"));

  const btn = $(".nav-toggle"), menu = $("#menu");
  const set = (o) => { menu.classList.toggle("open", o); btn.setAttribute("aria-expanded", o); btn.setAttribute("aria-label", o ? "Fermer le menu" : "Ouvrir le menu"); };
  btn.addEventListener("click", () => set(!menu.classList.contains("open")));
  menu.addEventListener("click", (e) => { if (e.target.closest("a")) set(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") set(false); });
})();
