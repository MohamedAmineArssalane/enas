// Ênas Parfums — app.js v2.0
// Logo and all assets embedded in index.html

(function() {

  // ── LOADER FIX ──────────────────────────────────────────────────────────
  function hideLoader() {
    const loader = document.getElementById('loader');
    if (!loader) return;
    loader.style.opacity = '0';
    loader.style.transition = 'opacity 0.6s ease';
    setTimeout(() => { if(loader.parentNode) loader.parentNode.removeChild(loader); }, 700);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', hideLoader);
  } else {
    hideLoader();
  }
  window.addEventListener('load', hideLoader);
  // Safety fallback — force hide after 3s no matter what
  setTimeout(hideLoader, 3000);

})();
